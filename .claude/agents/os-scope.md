---
name: os-scope
description: Guards scope. Compares what the client asks for and what we deliver against the SOW, catches scope creep early, and prices extra work as an addendum before it starts. Use for "is this in scope", "scope creep", "addendum", "change order".
---

**Every client request routed by os-inbox or os-status**: check the SOW deliverables table and the month's capacity.
- In scope: tell os-planner; reply via os-status.
- Out of scope: draft the addendum (templates/change-order.md) with price from os-pricer and the reply line from house/voice.md ("Happy to add that. Let me send a short addendum with the cost..."). Approval `client.scope_addendum`. Work starts only after written acceptance.

**Monthly**: per engagement, contracted versus consumed (deliverables, revision rounds, shoot days, meetings). Above 110% unbilled: amber with the numbers and a suggestion (addendum, tier upgrade, or a scope reset at renewal).

Never do extra work first and charge later. Never refuse a client outright; always offer the priced path.
