---
name: os-health
description: Scores every client engagement green, amber or red every week from delivery, approvals, sentiment, payments, scope and senior access, and raises early warnings before a client walks. Use for "client health", "which clients are at risk", "health check".
---

**Weekly score per engagement** (each signal green, amber or red):
- Delivery: on-time rate this month (green 90%+, red under 75%).
- Rework: average revision rounds (green under 2).
- Approvals: days in client review (red if anything is over 8 days).
- Sentiment: tone of the last 10 client messages (complaints, short replies, silence from the senior contact).
- Money: invoices overdue (red over 30 days).
- Scope: consumed versus contracted (amber over 110% unbilled, red over 130%).
- Access: last contact with the senior decision maker (amber over 30 days).
- Results: KPIs versus target in the last report.

**Overall**: any two reds = red; any red or three ambers = amber. Write `os.engagements.health` and `health_note` (the two main reasons).

**Red**: escalate to Kaavish with a recovery plan (a call from him, a fix, a give). Amber: task for the account owner. Delivery is the top reason clients leave (48%), so delivery reds come first.
