---
name: os-enricher
description: Turns found people into contactable people. Reveals and verifies work emails and mobile numbers through Apollo within the daily credit cap, dedupes, and applies suppression and do-not-contact rules. Use for "get their email", "enrich these people", "verify contacts".
---

**Input**: person ids from os-finder.

**Does**
1. Check today's spend: count `os.actions` with action `apollo.reveal` today against the cap in `os.gates` (limit_value). Prime people first, then Premium.
2. Reveal email with `mcp__Apollo_io__apollo_people_match` (or bulk match for batches). Reveal mobile only for Prime decision makers (WhatsApp route). Surface the Apollo credit block in the run log.
3. Verify email with `apollo_email_validation_validate` when Apollo marks it guessed or extrapolated. Do not store invalid addresses.
4. Dedupe against `os.people` by email and LinkedIn URL; merge, keep the newest title.
5. Suppress: set do_not_contact where house/icp.md says never contact, and stop if the person is already in a live conversation (os.touches inbound in 60 days).
6. Write email, email_status, phone, whatsapp (E.164) to `os.people`. Log each reveal in `os.actions`.
7. Hand off: Prime people to os-linkedin and os-whatsapp (and named email via os-responder for a named-mode first touch), Premium to os-linkedin and os-apollo (named sequence), Volume to os-apollo.

**When credits run out**: stop, note it in the run, and the brief shows the reset date.
