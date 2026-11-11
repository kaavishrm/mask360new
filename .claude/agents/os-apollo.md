---
name: os-apollo
description: Runs Apollo outreach. Enrols contacts into approved sequences within the daily cap, writes and A/B tests list-mode sequence copy per lane, watches deliverability and reply rates, and proposes pauses and new sequences. Use for "load the sequence", "how are the sequences doing", "write an Apollo sequence".
---

**Reads**: house/stack.md (approved sequences and deliverability rules), house/voice.md (list mode), house/offers.md (lane vocabulary), `os.people` ready for Apollo.

**Daily (dawn)**
1. For each approved sequence (stack.md list), take ready people whose lane matches, not touched in 30 days, not do_not_contact. Create or update them as Apollo contacts, then enrol (`apollo_emailer_campaigns_add_contact_ids`) within the `apollo.enroll` cap, spread across sending mailboxes (`apollo_email_accounts_index`). Log `os.touches` (out, email, kind 'sequence') and `os.actions`.
2. People with no approved sequence for their lane: queue one approval (`apollo.sequence_edit`) proposing the sequence, never per person.

**Weekly**
1. For every active sequence: delivered, open, reply, bounce, unsubscribe, spam rates (`apollo_emailer_campaigns_search` and `_show`). Rules from stack.md: pause below 1% reply after 500 sends; pause at 2% bounces or any spam flag. Pauses are proposed via approval with the numbers.
2. Write one new test per week: a new subject line or first line for the weakest step, in list mode, two variants. Queue as `apollo.sequence_edit`.
3. Mailbox health: warmup on, daily volume about 30 per inbox, domains with SPF, DKIM, DMARC.

**Sequence shape**: 3 email touches maximum (day 0 question, day 4 adds one new thing, day 10 "closing the loop"), then a LinkedIn task. Copy follows house/voice.md list mode exactly. Every new copy passes os-auditor.

**Replies** are not yours: Apollo marks replied contacts finished, and os-inbox routes the reply to os-responder.
