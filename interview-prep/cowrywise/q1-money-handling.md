# Q1 - Money Handling

> A user initiates a ₦50,000 withdrawal. Midway through, the payment gateway times out. Money left our account but the app shows "failed." How would you design the system to handle this? Be specific about idempotency, reconciliation, and user communication.

---

The first thing to get right: a timeout is not the same as a failure. It means the outcome is unknown, and the system has to treat it that way until something authoritative resolves it. Showing "failed" in this scenario is exactly how you end up paying users twice.

Here is how I would design it...

## Idempotency

Every withdrawal request gets a transaction reference that we generate before we touch the gateway. We persist a row to `transactions` with state `pending`, the amount, the user, the destination account, and a hash of the request payload. That reference is what we send to the gateway as the idempotency key.

If the client retries (network drop, app reopen, user taps again), the mobile app sends the same idempotency key. We look it up; if it exists, we return the current state of the row instead of starting a new transaction. The gateway will also dedupe on its side based on the same key, so even if we somehow fire twice, the user is only debited once at the bank.

The idempotency key on the client side is bound to a single user intent. It is generated when the user taps "Withdraw" and rotates only when they edit the amount or destination. That part is small but it matters: if the key rotates on every retry, the dedupe is useless.

## State machine

States: `pending -> processing -> succeeded | failed | unknown`.

The timeout scenario lands in `unknown`, not `failed`. That distinction matters because `unknown` means "we need to ask" and `failed` means "we are done, and the user can try again." Conflating them is exactly how you double-pay people.

All state transitions go through a single function holding a row-level lock. There is no other path. This kills entire classes of race conditions.

## Reconciliation

Two paths converge on the truth.

1. Gateway webhook. When the gateway has a terminal answer (`succeeded` or `failed`), it calls us. We verify the signature, look up the row, and move it to the final state. The webhook is the fast path.
2. Polling worker. A Celery beat job picks up every row stuck in `processing` or `unknown` past a timeout window (say 60 seconds) and calls the gateway's lookup endpoint with our reference. Whatever the gateway returns is authoritative.

If the webhook arrives first, the worker has nothing to do. If the webhook never arrives, the worker fills the gap. Belt and braces. Real-world gateways drop webhooks more often than they admit.

There is also an end-of-day settlement reconciliation. We pull the gateway's settlement file and compare it against our `succeeded` rows. Any discrepancy pages ops. That is how you catch the failure mode where the gateway told us success but the money did not actually leave their side.

## Ledger

Double-entry. The user's balance is never wrong at any point during the flow.

- On `pending`: same DB transaction, debit user's available balance, credit a clearing/holding account. The total stays balanced.
- On `succeeded`: clearing -> withdrawn.
- On `failed`: clearing -> available (we give the money back).
- On `unknown`: stays in clearing. The user does not see the funds in their available balance, but they also do not see them as withdrawn. That is the honest state.

Every state transition writes an append-only row to `transaction_events` with timestamp, actor (system, webhook, admin), reason, and the raw gateway response. Disputes get resolved by reading this table.

## User communication

This is where most apps make the timeout problem worse.

- On timeout, the app shows "Pending. We are confirming this with your bank. We will let you know shortly." Not "Failed." The user does not press retry, so we do not get a duplicate intent.
- When the row resolves, push notification fires. On `succeeded`: "Your ₦50,000 withdrawal is confirmed." On `failed`: "Your withdrawal could not be completed. The money is back in your wallet."
- The transaction detail screen reads the live row, with the current state and a small "what does this mean?" tooltip. The tooltip is written for non-technical users.
- If a row sits in `unknown` longer than 10 minutes, we surface a yellow banner with a "Contact support" button. Support sees the same row, the same state, and the gateway lookup result inside the admin tools. They are not guessing.
- If a row sits in `unknown` longer than 1 hour, we page an engineer. At that point something is off with the gateway and humans need to look.

## What I would test before shipping

- Replay the timeout in staging by black-holing the gateway call mid-flight. Confirm the row lands in `unknown`, the ledger is balanced, the worker resolves it, the user sees correct copy.
- Replay the "webhook arrives twice" case. Confirm we no-op on the second one.
- Replay the "user retries on the client" case. Confirm the second tap returns the same row, no new transaction.
- Run the end-of-day reconciliation against a synthetic settlement file with a deliberate mismatch. Confirm we page.

These four cover roughly 90% of the failure modes I have seen in payment flows.
