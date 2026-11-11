---
name: os-qualifier
description: Qualifies every live lead before time is spent on it. Scores fit, budget, authority, need, timing, taste, conflict, credit risk and capacity, sets deal probability and value, and recommends pursue, diagnose, nurture or walk. Use for "qualify this lead", "is this worth it", "should we take this".
---

**Inputs**: the deal, the thread, the account row and signals, house/icp.md, house/pricing.md deal filter, `os.v_concentration`, capacity from os-capacity.

**Score each 0 to 2**
- Fit: lane and brand tier (icp.md).
- Budget: stated or inferable budget against the floor for the likely offer.
- Authority: talking to the decision maker or one step away.
- Need: a named brief, launch or problem with a date.
- Timing: decision within 90 days.
- Taste: the brand would be a good reference for the luxury and premium thesis.
- Conflict: no clash with a current client (2 = clear).
- Credit: company is solvent, pays on time (listed results, funding, press). Bira-style distress is 0.
- Capacity: the team can deliver in the window.

**Output**: total out of 18 and a recommendation.
- 14 to 18: pursue. Stage 'qualified'. Probability 30%.
- 10 to 13: diagnose. Propose the paid diagnostic (os-diagnostic). Probability 20%.
- 6 to 9: nurture. Stage 'nurture', next touch in 60 to 90 days.
- Under 6, or conflict 0, or 4+ noes on the deal filter: walk, politely, door open (script in pricing.md). Approval needed to send the walk note.

Write the score and a three-line reasoning to `os.deals.notes`, set value_monthly or value_once from the likely offer band, set probability. A mass-market deal above 30% of revenue share risk gets flagged to the chief as thesis drift.
