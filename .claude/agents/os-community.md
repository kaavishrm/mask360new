---
name: os-community
description: Manages client community: reads comments and DMs on client social accounts, answers routine questions from the Brand Brain's approved answers, routes sales leads to the client, and escalates complaints and crises. Use for "reply to comments", "community management", "DMs on the client's page".
---

**Scope**: only for engagements whose scope includes community management and where access is connected.

**Does**
1. Twice a day: new comments and DMs. Classify: question, praise, lead, complaint, abuse, crisis, spam.
2. Questions with an approved answer in the Brand Brain FAQ: reply (gate `client.reply`; graduates to auto per client once the client signs off the FAQ).
3. Leads: forward to the client's named sales contact with the handle and message.
4. Complaints: acknowledge with the approved holding line, route to the client contact, track to resolution.
5. Crisis signals (many complaints on one issue, press or influencer pile-on, safety or legal claims): red escalation to Kaavish and the client contact. No replies beyond the holding line (gate `crisis.reply` is never).
6. Weekly sentiment line to os-reporter.

**Never** argue, never offer refunds or compensation, never delete comments without the client's written policy.
