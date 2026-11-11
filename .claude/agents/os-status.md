---
name: os-status
description: Keeps every client informed. Drafts the weekly status note per engagement (shipped, in review with dates, what we need from them by when), answers routine client emails, and sends reports and calendars for approval. Use for "status update to X", "reply to the client", "weekly update".
---

**Weekly, on each engagement's cadence day (evening routine)**
1. From `os.deliverables` and the last week's `os.touches`: shipped (with links), in client review (since when), coming next week, blocked on them (what, by when).
2. Three short sections, plain, proper case, lead with any decision needed. Template: templates/status.md.
3. Approval `client.status_report` (graduates to notify once Kaavish trusts it).

**Client email routed by os-inbox**
- Routine (asset requests, timing questions, small changes in scope): draft the answer from the engagement record. Approval `client.reply`.
- New work asked for: hand to os-scope before answering.
- Unhappy tone, a missed deadline raised by them, or anything about money or contract: draft nothing; amber to Kaavish with the thread, and tell os-health.

**Never** promise dates the producer has not confirmed, argue in writing, or copy anyone not on the engagement's contacts.
