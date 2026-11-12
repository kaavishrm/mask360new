# Outreach run

This is the one job that runs on its own every hour. It keeps the outreach board true: who is being pitched, what they were sent, where it stands and what they replied. Then it handles the replies.

Database: Supabase project `fqhmszoclzfwzttvrwng`, schema `os`, org slug `mask360`. The board reads `os.outreach`. The mode is `os.orgs.mode` (`shadow` drafts and never sends, `live` sends).

## Steps

1. **Start.** `insert into os.syncs (org_id, source) select id, 'outreach' from os.orgs where slug = 'mask360' returning id`. Read the last finished run: `select max(started_at) from os.syncs where source = 'outreach' and finished_at is not null`. With no finished run this is a full sync; otherwise it is incremental from that time minus 2 hours.

2. **Sequences.** `apollo_emailer_campaigns_search` with `per_page` 50. Work every sequence where `active` is true or `unique_scheduled` is above 0.

3. **What each sequence pitches.** For each one, `apollo_emailer_campaigns_show`, then
   `select os.pitches_upsert('apollo', $j$[...]$j$::jsonb)` with one object per step:
   `{campaign_id, campaign, step_id, position, steps, step_type, wait_days, subject, body, active}`.
   Subject and body come from the step's first touch template (variant A). `wait_days` is `wait_time` when `wait_mode` is `day`, else 0. Do this before step 4: the board takes each person's pitch from these rows.

4. **Who is in each sequence.** `apollo_contacts_search` with `emailer_campaign_ids: [id]`, `sort_by_field: contact_last_activity_date`, `per_page: 100` and
   `fields: [{"contacts": ["id","name","first_name","title","organization_name","email","linkedin_url","city","country","last_activity_date","contact_campaign_statuses",{"account":["domain"]}]}]`.
   For each contact take its `contact_campaign_statuses` entry for this sequence and build
   `{cid: contact.id, seq, name, first, title, org, domain, email, li, city, country, cs: entry.status, step_id: entry.current_step_id, from: entry.send_email_from_email_address, added: entry.added_at, last: contact.last_activity_date}`.
   Write each page with `select os.outreach_upsert_apollo($j$[...]$j$::jsonb)`. The database keys each row on contact id plus sequence id (Apollo's own status id is shared by everyone added in one batch, so it cannot be the key). A full sync reads every page. An incremental sync stops at the first contact older than its start time.

5. **Opens, replies, bounces.** `apollo_emailer_messages_search` for the sequence, `per_page` 100, every page:
   - `emailer_message_stats: ["replied"]` gives kind `replied`
   - `["bounced","spam_blocked","failed_other"]` gives kind `bounced`
   - `["opened"]` gives kind `opened` (an incremental sync reads the first 2 pages only)

   Items are `{cid: contact_id, seq, opens: num_opens, at: last_opened_at or failed_at}`. Write with `select os.outreach_mark_apollo('<kind>', $j$[...]$j$::jsonb)`. A status never moves backwards: a reply stays a reply.

6. **Read every new reply.** For each row with `status = 'replied'` and `reply is null`, search Kaavish's Gmail for the latest message from that email address. If it is there, store the first 600 characters of what they wrote in `reply`, its time in `reply_at`, and one `reply_kind`: `interested`, `later`, `redirect`, `objection`, `ooo`, `unsubscribe` or `hostile`. If it is not there, the reply went to the teammate's mailbox it was sent from: leave `reply` empty and set `next_action` to `Reply is in <sender>'s inbox`.

7. **Answer it.** First check the company: if it is a client, has a deal in `os.deals` at any stage, or Kaavish is already talking to them, do not answer. Set `next_action` to `Kaavish's existing contact, left to him` and move on. Otherwise, for `interested`, `later`, `redirect` and `objection`, write the answer in Kaavish's voice (`agency-os/house/voice.md`, or `os.memory` where `kind = 'instruction'` and `subject = 'voice'`): short, specific to what they said, one ask. For `interested`, offer two call times from Kaavish's Google Calendar in the next three working days.
   - In `shadow`: save it as a Gmail draft in that thread and set `next_action` to `Draft reply ready in Gmail`.
   - In `live`: send it in the thread, add an `os.touches` row, and set `next_action` to `Answered, waiting for them`.
   - `unsubscribe` and `hostile`: set `status` to `stopped`, and in `live` remove them from the sequence. `ooo`: set `next_action` to `Out of office until <date>`.
   - If a calendar event with their email exists, set `status` to `meeting`.

8. **LinkedIn.** Read the Aimfox workspace. If its outreach plan is active, list recent conversations and upsert one `os.outreach` row per person who replied (`source` `aimfox`, `channel` `linkedin`, `external_id` the conversation urn, their last message in `reply`). If the plan is cancelled, skip this and say so in the run note.

9. **Finish.** `update os.syncs set finished_at = now(), rows = <rows written>, note = '<one plain line>' where id = <id>`. The note says what changed, for example `214 people updated, 1 new reply, LinkedIn paused (Aimfox plan cancelled)`.

## Rules

- Never send anything in `shadow`. Never spend Apollo credits in this run: no enrichment and no new contacts.
- Write plainly: no em dashes, no exclamation marks.
- Never touch `public.m360_blobs`.
- If a step fails, finish the others, then put the failure in the run note.
