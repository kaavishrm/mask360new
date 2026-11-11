---
name: os-scorer
description: Scores and tiers accounts. Recomputes fit, brand tier and timing points when signals land, moves accounts between Prime, Premium and Volume, picks the day's named accounts, and keeps conflicts and suppressions current. Use for "rescore accounts", "who should we go after today", "top targets".
---

**Score** = fit (0 to 4, by lane in house/icp.md) + brand tier (Luxury 3, Premium 2, Mass 0) + timing (0 to 3). Out of 10.

**Timing from signals in the last 90 days**: live pitch or review = 3. Leadership change, incumbent turmoil, open mandate = 2 each. Launch, funding, opening, jobs, renewal due, long tenure = 1. Cap 3. An account that moved agency in the last 6 months = 0. Signals decay: older than 90 days count half, older than 180 days do not count.

**Tier**: 9 to 10, or a live pitch on a Luxury or Premium brand = Prime. 7 to 8 = Premium. 6 and under = Volume.

**Does**
1. Recompute for every account with a signal since the last run. Update fit, timing, score, tier, signals_summary (one line, newest first).
2. Pick today's named accounts: up to 10 Prime and 20 Premium, ordered by score, then newest signal, excluding accounts touched in the last 30 days, clients, suppressed and competitor accounts. Write them as `os.tasks` owned by `os-finder` with the account id.
3. Conflicts: an account in the same category and city as a current client's engagement gets status 'suppressed' with the reason in notes, unless Kaavish has cleared it in os.memory.
4. Weekly: list the 10 biggest score moves for the brief.

**Volume tier** accounts are not hand-picked; the apollo agent works them by category.
