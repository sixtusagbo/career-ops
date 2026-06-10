# Notification System - Technical Specification

**Author:** Sixtus Miracle Agbo \
**Date:** 2026-05-24 \
**Status:** Design \
**Audience:** Engineering, Product

> Multi-channel notification system (push, SMS, email) for 1M+ users. Reliable: no duplicates, no missed sends. Gracefully degrades when providers fail.

---

## 1. Goals

- Deliver notifications to users across push, SMS, and email.
- Scale to 1M+ users, with peaks of roughly 100k notifications per minute during product launches and end-of-month statements.
- No duplicate sends to the same user for the same event. Ever.
- No silently dropped notifications. Every requested send either completes or surfaces in a queryable failed state.
- Gracefully degrade when a single provider has an outage. The system keeps working on the other two channels and falls over to a backup provider where one is configured.

## 2. Non-goals

- In-app inboxes and notification preference UIs (separate service).
- Marketing campaign orchestration (Customer.io or similar handles that; this system is for transactional notifications).
- Read receipts and engagement analytics (out of scope for v1).

## 3. High-level architecture

```
+----------------+       +-----------+       +-----------+       +-----------+
|  Producer apps |--+--> |  Ingest   |--+--> |   Queue   |--+--> | Dispatcher|
| (savings, txn, |  |    | API (POST | |     | (Redis    |  |    |  workers  |
|  KYC, etc.)    |  |    | /notify)  | |     |  Streams  |  |    | (per      |
+----------------+  |    +-----------+ |     |  or SQS)  |  |    |  channel) |
                    |                  |     +-----------+  |    +-----+-----+
                    |                  |                    |          |
                    |                  v                    |          v
                    |          +------------------+         |   +-----------+
                    |          | Dedup store      |         |   | Provider  |
                    |          | (Redis SET with  |         |   | Push: FCM |
                    |          | TTL, keyed on    |         |   |  / APNs   |
                    |          | idempotency_key) |         |   | SMS: Termii
                    |          +------------------+         |   |  / AT     |
                    |                                        |  | Email:    |
                    |                                        |  |  SES /    |
                    |                                        |  |  SendGrid |
                    |                                        |  +-----------+
                    |                                        |          |
                    v                                        v          v
            +---------------+                        +---------------+
            | Postgres      |  <-----  outcomes  <-- | Dead-letter   |
            | notifications |                        | queue + retry |
            +---------------+                        +---------------+
```

The flow is a pipeline: ingest, dedupe, queue, dispatch, deliver, record outcome.

## 4. Components

### 4.1 Ingest API

A small FastAPI service exposing one main endpoint:

```
POST /v1/notifications
Body: {
  "event_type": "withdrawal_succeeded",
  "user_id": "u_123",
  "idempotency_key": "withdrawal_456_succeeded",
  "channels": ["push", "email"],
  "template_id": "withdrawal_success_v2",
  "data": {"amount": "50,000", "currency": "NGN"},
  "priority": "transactional"
}
```

The API does three things and returns:
1. Validates payload (event_type known, template exists, channels supported, user opted in for each channel).
2. Checks the dedup store for the idempotency_key. If found, returns the existing notification_id with status 200 (the producer sees the same response as on first call).
3. Persists a `notifications` row in Postgres with state `pending`, then publishes one message per channel to the queue. Returns the notification_id.

Persisting before queueing is important: if the queue write fails, we have a row we can re-publish from a janitor job. If we queued first and Postgres failed, we would have a phantom message.

### 4.2 Queue

Redis Streams for the local case, SQS for the cloud case. Either works; the semantics that matter are:
- At-least-once delivery. Workers must be idempotent (covered in dedup).
- Visibility timeout / ack pattern. If a worker dies mid-process, the message becomes visible again.
- Per-channel queues so a slow provider on one channel does not back up the others.

Queue topology:
- `notifications.push`
- `notifications.sms`
- `notifications.email`
- `notifications.dlq` (dead-letter, single queue)

### 4.3 Dispatcher workers

One worker pool per channel queue, each running on Celery (or equivalent). A worker:

1. Pulls a message off its queue.
2. Acquires a per-(notification_id, channel) lock to prevent two workers racing on a retry.
3. Re-reads the row from Postgres. If state is already `succeeded` for this channel, ack and move on (idempotency, second line of defense).
4. Renders the template against the data payload.
5. Calls the provider client (see 4.4).
6. Writes the outcome back: `succeeded` with provider message ID, or `failed` with error code and retryability flag.
7. On retryable failure, re-publishes with exponential backoff (capped at 5 retries).
8. On non-retryable failure or after the retry budget, moves the message to the DLQ.

### 4.4 Provider abstraction

Each channel has a primary and a fallback provider, hidden behind an interface:

```python
class PushProvider(Protocol):
    def send(self, *, token: str, title: str, body: str, data: dict) -> ProviderResult:
        ...
```

| Channel | Primary  | Fallback   |
|---------|----------|------------|
| Push    | FCM      | APNs (or self-hosted Web Push for web tokens) |
| SMS     | Termii   | Africa's Talking |
| Email   | AWS SES  | SendGrid |

`ProviderResult` carries: ok / not-ok, provider_message_id, error_code, retryable bool.

A circuit breaker (per provider, per region) sits in front of each client. If the error rate breaches 50% over a 30-second window, the breaker opens, the dispatcher routes new sends to the fallback, and an alert fires. The breaker probes the primary every 30s and re-closes when healthy.

### 4.5 Dedup store

Redis SET keyed on `dedup:{idempotency_key}` with a 7-day TTL. Set on ingest, checked on ingest. The 7-day window covers nearly all reasonable retry patterns from producers while keeping memory bounded.

The Postgres `notifications` table also has a unique index on `(idempotency_key)` as a second-line guarantee. If Redis is unavailable on the dedup check, the insert will fail and we fall back to "treat as new" with the Postgres unique constraint catching duplicates. Belt and braces.

### 4.6 Dead-letter queue and retry

A separate worker drains the DLQ. For each message:
- Inspect the failure type.
- If retryable (transient provider error, expired token), enqueue back with extended backoff up to 24 hours.
- If non-retryable (invalid template, unsubscribed user, hard bounce), mark final state in Postgres and emit a metric.
- After the budget is exhausted, the row sits in `failed_permanent` and ops gets a daily digest.

A small admin UI lets ops bulk-retry a slice of the DLQ once a provider is restored.

## 5. Data model

```sql
CREATE TABLE notifications (
  id                BIGSERIAL PRIMARY KEY,
  idempotency_key   VARCHAR(128) UNIQUE NOT NULL,
  event_type        VARCHAR(64)  NOT NULL,
  user_id           VARCHAR(64)  NOT NULL,
  template_id       VARCHAR(64)  NOT NULL,
  data              JSONB        NOT NULL,
  priority          VARCHAR(16)  NOT NULL DEFAULT 'transactional',
  created_at        TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE TABLE notification_sends (
  id                BIGSERIAL PRIMARY KEY,
  notification_id   BIGINT       NOT NULL REFERENCES notifications(id),
  channel           VARCHAR(16)  NOT NULL,
  state             VARCHAR(32)  NOT NULL,  -- pending, sent, failed, failed_permanent
  provider          VARCHAR(32),
  provider_msg_id   VARCHAR(128),
  attempt_count     INT          NOT NULL DEFAULT 0,
  last_error_code   VARCHAR(64),
  last_attempt_at   TIMESTAMPTZ,
  resolved_at       TIMESTAMPTZ,
  UNIQUE (notification_id, channel)
);

CREATE INDEX ON notification_sends (state, last_attempt_at)
  WHERE state IN ('pending', 'failed');

CREATE TABLE notification_events (
  id                BIGSERIAL PRIMARY KEY,
  notification_send_id BIGINT NOT NULL REFERENCES notification_sends(id),
  event_type        VARCHAR(32) NOT NULL,  -- attempted, succeeded, failed, retried, deadlettered
  actor             VARCHAR(32) NOT NULL,  -- system, webhook, admin
  detail            JSONB,
  occurred_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

`notification_events` is append-only. Disputes and post-mortems read it.

## 6. Reliability guarantees

**No duplicates.** Three layers:
1. Producer-supplied `idempotency_key` checked at the API.
2. Postgres unique constraint on `idempotency_key`.
3. Worker-side check on the `notification_sends.state` before calling the provider (covers the "queue redelivered the message" case).

**No missed sends.** Three layers:
1. Postgres insert before queue publish. If the queue is down, the row exists and a janitor cron re-publishes pending rows.
2. At-least-once queue + worker ack pattern. A worker crash does not lose work.
3. Reconciliation cron once a minute: any `pending` row older than 5 minutes gets re-published.

**Exactly-once-effectively** is the property we get from "at-least-once delivery + idempotent workers + dedup at the provider call site." True exactly-once does not exist at this scale; this is the honest version.

## 7. Graceful degradation

- **One provider fails.** Circuit breaker opens. Fallback provider takes over. Latency may rise; success rate stays high.
- **One channel's queue backs up.** Other channels keep flowing because each has its own worker pool.
- **Redis (queue) outage.** API returns 503 to producers, who back off. Janitor cron resumes from Postgres when Redis is back. We lose throughput during the outage, not data.
- **Postgres outage.** Full ingest outage. The API returns 503 honestly. Anything else would mean accepting writes we cannot persist.
- **Provider has a regional outage but is up elsewhere.** Multi-region provider config. We route to a healthy region.

## 8. Scaling estimates

For 1M users at peak ~100k notifications/minute (roughly 1,700 notifications/sec):
- Ingest: 1,700 RPS at peak. FastAPI behind a small autoscaling group, 4-8 pods, handles this on commodity hardware.
- Queue: Redis Streams handles this trivially. SQS works too; choose based on operational preference.
- Workers: assume an average of 2 channels per notification (some transactional events go to one channel, others to all three). That puts peak sends at ~3,400 per second across all channels. At 200ms per provider call (p95), one worker handles ~5 sends/sec, so we need roughly 700 worker slots. Run 80-100 pods with 8 workers each, autoscale on queue depth, leave headroom.
- Postgres: ~10k writes/sec at peak across the three tables (1,700 into `notifications`, 3,400 into `notification_sends`, the rest into `notification_events` for attempt and outcome events). RDS r6g.2xlarge handles this with the right indexes, plus partitioning `notification_events` by week from day one so the long tail does not bloat.

## 9. Observability

Per-channel SLOs:
- Send latency: p50 < 1s, p95 < 5s, p99 < 30s (push and email faster than SMS).
- Success rate: >= 99.5% on a 5-minute window.
- DLQ depth: < 1,000 messages, < 5 minutes age.

Dashboards (CloudWatch or Grafana) show: ingest RPS, per-channel queue depth, worker concurrency, provider success rate, circuit-breaker state, DLQ depth. Errors flow to Sentry with the trace ID attached so a single failure links back to the notification, the worker, and the provider response in one click.

Alerts:
- Circuit breaker open for > 60s -> page.
- DLQ age > 10 minutes -> page.
- Ingest 5xx rate > 1% -> page.
- Pending notification_sends > 5 minutes old -> page (means the janitor is not catching up).

Every notification carries a trace ID propagated to the provider, so a single notification's full path is one query in the logs.

## 10. Security and compliance

- Producer apps authenticate to the ingest API with mTLS or signed JWT.
- PII (phone numbers, emails) lives in a separate `user_contacts` table, joined at send time. The notification rows hold `user_id` only.
- Audit log retention: 90 days hot, 1 year cold (S3 + Glacier).
- Opt-in flags per channel checked on ingest. We never send to a user who has opted out.
- Templates reviewed by product. No dynamic SQL or shell-style interpolation; render templates in a sandboxed engine (Jinja2 with autoescape, no `safe` calls).

## 11. Rollout plan

1. Week 1. Build ingest API + Postgres schema + Redis queue + email (SES) + push (FCM). Deploy behind a feature flag at 1% of traffic. Add the dedup store and circuit breakers.
2. Week 2. Add SMS (Termii primary, Africa's Talking fallback), the DLQ worker, and the admin UI.
3. Week 3. Load test at 2x projected peak. Tune worker pool sizes. Ship to 100%. Decommission any legacy notification path if one exists.

## 12. Open questions

- Do we want a per-user rate limit (e.g., max 5 transactional notifications per hour) to prevent runaway producers? Lean yes for v1.5.
- For SMS in particular, do we want to batch by country / corridor to get better pricing? Worth measuring once volumes are real.
- Webhooks back to producers on terminal state. Wanted? Probably yes for high-stakes events like KYC completion, no for routine ones.

## 13. Trade-offs accepted

- "At-least-once + idempotent workers" instead of true exactly-once. Cheaper, simpler, and the dedup layers cover the user-visible outcome.
- Synchronous provider calls inside the worker instead of async batching. Simpler to reason about per-message latency; we can switch SMS to batched if cost demands it.
- Redis for both queue and dedup. One operational dependency to monitor instead of two. Acceptable for v1; revisit if Redis becomes a bottleneck.

---

**Estimated effort to v1:** 2-4 weeks for one backend engineer working full-time. The rollout in section 11 is the path I would take.

I would own the whole thing end-to-end: ingest API, worker pipeline, provider clients, dedup store, DLQ, queue and Postgres setup, and the observability layer. The only producer-side touchpoint is wiring each producing service to call the API, which is a small handoff per service.
