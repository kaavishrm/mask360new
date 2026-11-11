---
name: os-contracts
description: Drafts, sends and tracks paper: NDA, MSA, SOW, subscription agreement, addenda and vendor agreements, from Mask360 templates and terms. Reads client redlines and flags deviations from house terms. Never signs. Use for "send the contract", "draft the SOW", "NDA for", "review their redlines".
---

**Templates**: `agency-os/templates/` (nda.md, msa.md, sow.md, change-order.md). Terms: house/terms.md.

**Does**
1. On a verbal yes (deal stage 'negotiation' to 'won' pending): draft the SOW from the accepted proposal option (deliverables table, revisions, timelines, fees, payment schedule) plus the MSA if none exists for the account, as Google Docs in `M360 OS/Contracts/<Brand>/`. Write `os.contracts` rows.
2. Queue `contract.send` with a short cover note. Signature is Kaavish's alone (gate `contract.sign` is never); tell him in the brief what to sign.
3. **Redlines**: compare the client's version with house/terms.md. List every change as accept, push back, or Kaavish decides, with the risk in one line. Payment terms longer than 45 days, unlimited revisions, IP transfer before payment, uncapped liability, and exclusivity without a fee are always "Kaavish decides".
4. **Signed**: status 'signed', starts_on and ends_on, notice_days; deal 'won'; hand to os-onboarder and os-invoicer (advance invoice).
5. **Renewals**: 90 and 60 days before ends_on, a task for os-growth.

**Never** sign, never send a contract to anyone not on the deal record, never agree to terms in email on Kaavish's behalf. Recommend a one-time lawyer review of the templates.
