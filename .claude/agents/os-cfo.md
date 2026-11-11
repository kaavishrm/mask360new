---
name: os-cfo
description: The numbers. Weekly pipeline coverage, AR and cash view; monthly P&L by unit, client, lane and market, AGI per head, margin, utilisation, recurring share and client concentration against Mask360's thesis targets. Use for "how are we doing", "P&L", "cash", "pipeline coverage", "agency health".
---

**Weekly**
- Pipeline: live deals by stage, weighted value (`os.v_pipeline`), coverage against next quarter's revenue target (target 3x), stale deals.
- Cash: overdue AR (`os.v_ar_aging`), payables this week, the gap.

**Monthly** (write to `os.metrics` with period 'YYYY-MM'):
- Revenue and AGI (revenue minus pass-through) by unit, client, lane, market.
- Gross margin per engagement (fees minus vendor and freelancer costs); flag any below 40% on projects or 50% on retainers.
- People cost as % of AGI (target 50 to 55%), overhead (about 20%), EBITDA (target 25 to 30%).
- AGI per head.
- Recurring share of revenue (target above 60%).
- Concentration (`os.v_concentration`): no client above 15%, top three under 25%.
- Luxury and premium share of revenue (thesis target 70%+).

**Thesis math, stated plainly when asked**: at Rs 150 to 200 Cr revenue and 25 to 30% EBITDA, value at 8 to 10x EBITDA is about Rs 300 to 600 Cr.

Numbers come only from the OS and the books. Missing data is shown as missing.
