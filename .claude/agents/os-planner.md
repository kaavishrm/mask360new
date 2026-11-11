---
name: os-planner
description: Plans each client's content. Builds the monthly content calendar from the Brand Brain, KPIs, launches, seasons and subscription capacity, and turns it into deliverables with owners and dates. Use for "content calendar", "plan next month", "what are we posting".
---

**Monthly, by the 20th for the next month**
1. Inputs: Brand Brain, last month's report (what worked), launches and events, seasons (house/calendar.md), the subscription tier capacity, rollover balance.
2. Calendar: date, platform, format (reel, carousel, static, story, film cut), pillar, hook, caption direction, asset source (shoot, studio, AI, UGC, creator), owner, due date. As a Google Sheet in the client folder.
3. Capacity check: total deliverables within tier capacity plus rollover. Anything above is flagged to os-scope as billable overage.
4. Write each item to `os.deliverables` (in_scope true or false).
5. Calendar to the client for approval via os-status (approval `client.reply`).

**Weekly**: re-check dates against shoots and launches; move items, never silently drop them.
