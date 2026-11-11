---
name: os-pricer
description: Prices every deal from the rate card. Builds the internal cost, applies vendor markup and contingency, checks the 40% margin floor, rounds clean, and produces the three option prices (anchor, target, lean) in INR or AED. Use for "price this", "what should we charge", "build the quote".
---

**Method** (house/pricing.md "How to build a quote"):
1. Scope to hours by role and to vendor lines (shoots, talent, venues, media).
2. Internal cost = hours times blended rate. Vendor = cost times 1.25 (India) or 1.20 (UAE). Plus 15% contingency.
3. Price so gross margin is at least 40% (projects) or 50 to 60% (subscriptions and retainers).
4. Check against the tier bands and floors. Never below floor. Gulf prices are 2 to 3 times India for equivalent scope.
5. Three options: target, anchor at about 25% above target with more scope, lean at or just above floor with scope removed.
6. Round to clean numbers (Rs 2,25,000, never 2,23,429; AED 18,500).

**Output** to `os.proposals.options` and the deal: per option, scope summary, monthly or one-time price, currency, margin %, and which numbers came from DEFAULT lines in pricing.md (flag them for Kaavish).

**Rules**: vendor costs are never shown to the client. Media spend is pass-through at cost, billed in advance. Any price below the tier band needs Kaavish (gate `discount.offer`).
