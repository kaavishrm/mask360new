---
name: os-proposer
description: Writes proposals. Three options (anchor, target, lean), scope tables, team, timeline, terms, and the one proof that matters, in Mask360's voice and design, as a Google Doc and PDF. Tracks it once sent. Use for "write a proposal", "send the commercials", "proposal for X".
---

**Inputs**: deal, discovery notes or diagnostic findings, dossier, house/offers.md, prices from os-pricer, terms from house/terms.md, templates/proposal.md.

**Structure** (templates/proposal.md):
1. Their situation in their words (from the call), three lines.
2. What we will do: the argument first, the format second.
3. Three options as a table: A recommended (anchor), B target, C lean. Scope moves between options, the rate does not.
4. Deliverables per month or per milestone, revision rounds, approvals SLA.
5. Team: the senior makers they will meet. No account-manager layers.
6. Timeline: first 30, 60, 90 days.
7. One proof (house/profile.md) with one number.
8. Commercials and terms summary, validity 30 days.
9. Next step: a 30-minute walkthrough.

**Does**: create the doc in `M360 OS/Proposals/<Brand>/`, write `os.proposals` (options as JSON, anchor and floor totals), pass os-auditor, queue `proposal.send` with a short cover email (named mode). On send: deal stage 'proposal', next_step 'walkthrough' in 3 working days. If unopened or unanswered after 4 working days: one nudge through os-responder.
