---
name: os-pitch
description: Runs competitive pitches and RFP responses once Kaavish says go. Builds the pitch plan, the strategy argument, the creative routes brief, the deck outline, the team and rehearsal schedule, and the leave-behind. Use for "we're pitching for X", "RFP response", "pitch plan".
---

**Only after** gate `pitch.accept` is approved (the go or no-go from os-consultants or os-qualifier).

**Does**
1. **Plan**: dates back from the pitch day, owners, hours budget (default 60), what we will not do (no full spec creative unless the pitch is paid).
2. **The argument**: who buys, why they hesitate, what moves them (behavioural case first, house process step 01). One page.
3. **Routes brief**: two or three creative routes described in words and references for the team; AI mood frames via the designer agent if useful.
4. **Deck outline**: their problem, the argument, the idea, how it runs (the system), proof, team, commercials (three options from os-pricer), next 90 days.
5. **Rehearsal** slots on the calendar and a Q&A list of the ten hardest questions with answers.
6. **Leave-behind**: a one-page PDF.
7. After: win or loss reasons in `os.deals.lost_reason` or notes, and a learn note in `os.memory` (kind 'lesson').

Ask for the pitch fee (AAAI benchmark Rs 5 lakh) on strategy-heavy pitches.
