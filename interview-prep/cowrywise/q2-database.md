# Q2 - Database

> You're building a feature showing portfolio performance over time. The query is slow (3+ seconds) on PostgreSQL. What's your debugging and optimization approach? What indexes might help and why?

---

I never guess at slow queries. The path is always: reproduce, measure, change one thing, measure again.

## Step 1. Reproduce on real data

Pull the exact SQL. Either from app logs or from `pg_stat_statements` (with `track = all`) so I know I am looking at the worst offender, not a hunch.

Run it in a non-production environment that has production-sized data. The trap here is staging with 1,000 rows when prod has 10 million. The planner picks completely different plans at different table sizes, so optimizing on staging is wasted work.

## Step 2. Read the plan

```sql
EXPLAIN (ANALYZE, BUFFERS, VERBOSE) SELECT ...;
```

Things I look for, in roughly this order:

1. A sequential scan on a large table. Usually the headline.
2. Wildly wrong row estimates (planner thinks 100 rows, actual is 100k). That is a statistics problem, fix with `ANALYZE` or by raising `default_statistics_target` on the column.
3. Sort nodes spilling to disk (`Sort Method: external merge Disk: ...`). Means either `work_mem` is too small or the query is sorting more than it should.
4. Nested loop with a large outer side and a non-indexed inner lookup. Classic missing-index pattern.
5. `Buffers: shared read=...` much larger than `shared hit=...`. The working set does not fit in memory, every query goes to disk.

The two cheapest wins in practice are usually a stale `ANALYZE` and a missing composite index.

## Step 3. Indexes for "portfolio performance over time"

The query shape is almost certainly: "give me snapshots for portfolio X between dates A and B, ordered by time." So:

```sql
CREATE INDEX idx_portfolio_snapshots_pid_time
  ON portfolio_snapshots (portfolio_id, captured_at DESC);
```

Why this order:
- Leading column is the equality filter (`portfolio_id = ?`). Postgres can seek directly.
- Trailing column matches the `ORDER BY captured_at DESC`. Index walk returns rows already sorted, so the planner can skip the sort step entirely.
- `DESC` on the index matches the most common read pattern ("show me the latest"). It does not block ascending range scans either, Postgres reads indexes in either direction.

If the query also filters by user (multi-tenant join), lead with `user_id`:

```sql
CREATE INDEX idx_portfolio_snapshots_uid_pid_time
  ON portfolio_snapshots (user_id, portfolio_id, captured_at DESC);
```

If the projection is small and stable (`value, captured_at`), use a covering index so Postgres can answer from the index alone with no heap fetch:

```sql
CREATE INDEX idx_portfolio_snapshots_pid_time_covering
  ON portfolio_snapshots (portfolio_id, captured_at DESC)
  INCLUDE (value);
```

For very large append-only tables (years of minute-by-minute snapshots, billions of rows), BRIN over `captured_at` is much smaller than B-tree and works because data is naturally ordered by insertion time:

```sql
CREATE INDEX idx_portfolio_snapshots_brin
  ON portfolio_snapshots USING BRIN (captured_at);
```

BRIN trades precision for size, so I would use it alongside a B-tree on `portfolio_id`, not as a replacement.

## Step 4. When indexes are not enough

If the plan is clean and we are still over 100ms, the problem is shape, not access.

- **Materialized views for charts.** A "performance over time" chart almost never reads every raw snapshot. It reads a daily or hourly rollup. Build a materialized view `portfolio_daily_performance` keyed on `(portfolio_id, day)` with `open, high, low, close, return`. Refresh in a Celery job after market close. The chart query now reads at most 365 rows per year, not minute-by-minute data.
- **Partitioning.** If `portfolio_snapshots` is measured in the billions, range-partition by month on `captured_at`. Each query touches one or two partitions and ignores the rest. Drops in vacuum cost too.
- **Caching.** The hottest portfolios get hit constantly. Cache the computed series in Redis keyed on `(portfolio_id, range_preset)` with a short TTL (15 minutes for intraday, longer for historical). Invalidate when a new snapshot lands for that portfolio.
- **Read replica.** Analytical reads do not need to fight transactional writes for buffer space. Route the chart query to a replica.

## Step 5. Defend the fix

Indexes are not free. Every write to `portfolio_snapshots` now updates the index too, and the table is presumably write-heavy. So:

- Confirm the index is actually being used a week later by reading `pg_stat_user_indexes`. If `idx_scan` is zero, drop it.
- Add the query to a slow-query alert with a budget. p95 > 500ms triggers a page. The next regression should not need a user to complain.
- Document the index in the schema migration with a one-liner on which query it serves. The person who deletes it in 2027 needs to know what it was for.

The order matters: measure, then change, then re-measure. Most "Postgres is slow" complaints I have seen ended up being one missing composite index and one bad sort spill, and the fix took less than a day once the plan was on screen.
