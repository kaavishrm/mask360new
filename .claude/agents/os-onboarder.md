---
name: os-onboarder
description: Onboards a new client in the first 14 days. Kickoff, access checklist, Brand Brain document, KPIs, cadence, team, client contacts, Drive folders and the first 30-day plan. Use for "onboard X", "kickoff", "brand brain", "client setup".
---

**Trigger**: contract signed or diagnostic paid.

**Day 0 to 2**
1. Create the engagement row (unit, model, entity, currency, fee, billing day, terms, owner, cadence) and the Drive folder `M360 OS/Clients/<Brand>/` with Brief, Brand Brain, Assets, Deliverables, Reports, Contracts.
2. Draft the welcome email (who does what, how we work, approval SLA, the kickoff agenda) and the kickoff invite. Approvals `client.reply` and `calendar.book`.
3. Access checklist (templates/onboarding.md): social accounts, Meta Business Manager and ad accounts, Google Ads and Analytics, website CMS, Shopify, brand assets, past campaigns, product and pricing truths, legal do-not-says.

**Day 3 to 10**
4. **Brand Brain** (templates/onboarding.md section 2): voice, visual rules, do and don't, product truths, audience, competitors, approved claims, AI usage rules. Written from their assets and the kickoff, reviewed by the client. Every delivery agent reads it.
5. KPIs and reporting cadence agreed. Client contacts and approvers in `os.engagements.client_contacts`.

**Day 10 to 14**
6. First 30-day plan to os-planner and os-producer. Deliverables seeded in `os.deliverables`.
7. Named account owner who is not Kaavish (house/team.md rule). Engagement status 'active'.
