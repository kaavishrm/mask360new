# Daily hunt

Runs every working morning. Goal: more deals that can bill before 31 March 2027, toward 6 crore. Three jobs: follow up every open deal that is due, find new companies with a live reason to buy, and pitch the right person at each.

Read first, every run: `agency-os/house/voice.md`, `profile.md` (the only source of claims about Mask360), `offers.md`, `icp.md`, `pricing.md`. Database: Supabase `fqhmszoclzfwzttvrwng`, schema `os`, org slug `mask360`.

## Before anything

- Count waiting drafts: `select count(*) from os.outreach where status = 'draft'`. If 40 or more are waiting for Kaavish's go, do step 1 only and say so. The hunt never piles up work nobody sends.
- Mode is `os.orgs.mode`. In `shadow` every message is a Gmail draft. In `live` follow-ups and pitches are sent, and each send adds an `os.touches` row and sets the `os.outreach` row to `sent`.

## 1. Follow up open deals

Open deals are `os.deals` with stage not in `won`, `lost`. A deal is due when `next_step_due` is today or past, or when nothing has moved in 7 days.

For each due deal:
1. Read the latest Gmail thread with the company.
2. Look for a fresh, sourced reason to write.
3. Draft the reply in the same thread: 3 to 6 lines, one new reason to talk now, one small ask. Never write "just following up".
4. Record it in `os.outreach` with `source` `deal` and `external_id` `deal:<id>`.
5. Move the deal's `next_step` and `next_step_due` forward.

Skip a deal and say why when they said no, when a reply is not due yet, or when the next word needs Kaavish himself.

## 2. Hunt

Find up to 10 new companies with a dated, sourced signal: a launch, opening, market entry, funding, new CMO or brand head, or agency review. The work must be able to start and bill before 31 March. Focus on three lanes:
- real estate launches in Indian metros and the UAE
- hotel, restaurant and lifestyle openings
- premium and luxury consumer brands

Leave out:
- clients, open deals and lost deals
- anyone already in `os.outreach`
- anything `icp.md` excludes or that conflicts with a client

## 3. Find and pitch

For each company:
1. Find the decision maker with `apollo_mixed_people_api_search`, which is free. Confirm the role is current, and check they are not already being pitched.
2. Reveal a work email with `apollo_people_match`, at most 10 credits a day. Stop when credits run below 10 and say so.
3. Write the pitch in named mode (`voice.md`): proper case, 6 to 8 lines, one sourced observation about their moment, what Mask360 would do for it, one proof from `profile.md`, and one ask with two call times. When there is no email, draft a LinkedIn DM instead.
4. Record the company in `os.accounts`, `os.signals` and `os.deals` (stage `signal`, source `hunt`). Record the pitch in `os.outreach` (source `hunt`).

## 4. Audit

Before the run ends, check every draft it made:
- no dashes, no exclamation marks, no banned phrases
- one ask only
- every claim sourced
- names spelled right

Fix the draft, or pull it and say why.

## 5. Send

Kaavish gave standing permission on 12 Nov 2026, so in `live` mode every email draft that passes the audit is sent without asking him. Use `send_message` with its `draftId` so it goes exactly as audited.
- Send only between 09:00 and 21:00 IST. Outside that window, hold the drafts until 10:07 IST on the next working day.
- Send at most 60 new emails a day.
- After each send:
  - set the `os.outreach` row to `sent` with `next_action` `Sent, waiting for them`
  - add an `os.touches` row (channel `email`, direction `out`, kind `pitch` or `follow_up`)
  - move a hunted deal from `signal` to `contacted`

LinkedIn DMs wait until the Aimfox plan is active again.

## Finish

One line to Kaavish: how many deals were followed up, how many companies were found and pitched, how many emails were sent, and the credits spent.
