# Stack

Every tool the OS touches and its state. Identifiers live in the database at `os.orgs.settings.stack`, never in git. The boot routine and the weekly routine refresh the "State" column.

| Tool | Used by | Identifiers | State (11 Nov 2026) |
|---|---|---|---|
| Supabase | everything | project `fqhmszoclzfwzttvrwng` (m360-os-store, Mumbai), schema `os`. Do not touch `public.m360_blobs` | Live |
| Gmail | inbox, responder, briefs, client and finance agents | `settings.stack.gmail`. OS labels live under `M360 OS/`. Existing labels to respect: Active Lead, Cold Lead, Closed Lead, 4 Week Follow Up, Agency Intro, Funding, Hiring, Notes, Apollo Mailwarming | Read and draft work. Label creation failed at boot (connector missing the label permission): reconnect Gmail to allow labels. 2,453 unread inbox threads at boot |
| Google Calendar | calendar, booker, dossier | `settings.stack.calendar_id`, Asia/Kolkata | Live |
| Google Drive and Sheets | documents, reports | OS root folder `M360 OS` with Clients, Proposals, Contracts, Invoices, Briefs, Dossiers (ids in `settings.drive_root` and `settings.drive`) | Live, created at boot |
| Apollo | finder, enricher, apollo | `settings.stack.apollo_user_id`, `settings.stack.apollo_team_id` | Live. 40 of 4,000 lead credits left this cycle |
| Aimfox (LinkedIn) | linkedin | `settings.stack.aimfox_workspaces`: mask360 (no LinkedIn account connected) and personal (2 accounts, outreach plan cancelled) | Blocked until a plan is active and the account is connected. Until then the linkedin agent queues DMs for Kaavish to send by hand |
| WhatsApp | whatsapp | none | No API. Drafts carry a wa.me tap-to-send link |
| Meta Ads | performance | discover with ads_get_ad_accounts | Live, read first |
| Canva | designer | brand kits via list-brand-kits | Live |
| Higgsfield | designer | | Live |
| Notion | optional mirror | workspace "Mask360 Agency" | Live, not used by default |
| QuickBooks | bookkeeper | | Needs a fresh sign-in. QuickBooks Online left India in 2023, so confirm which books tool runs the India entity before relying on it |
| Slack | none yet | | Not authorised |
| Newsroom | founder, scout | `magazine/` on branch claude/elegant-edison-9kcrit, daily scheduled task | Live |

## Apollo sequences
| Sequence | Key in `settings.stack.apollo_sequences` | Steps | Status | OS use |
|---|---|---|---|---|
| Retarget, opened no reply, Oct 2026 | retarget_opened_no_reply_oct26 | 3 auto emails | Active, flagged underperforming (974 delivered, 2 replies) | Proposed for pause |
| Atlas, Real Estate Developers | atlas_real_estate_developers | 6 (email, LinkedIn, call) | Inactive | Candidate for RealEstate Premium tier after review |
| Follow-Up, Project Updates Check-In, Nov 2026 | followup_project_updates_nov26 | 3 manual emails | Inactive | Candidate for nurture |
| Luxury Brand Marketing Leaders, Multi-Channel | luxury_marketing_leaders_multichannel | 6 (manual email, call, LinkedIn) | Inactive | Candidate for Premium tier |
| Kaavish's Sequence 69260 | legacy_69260 | 1 | Inactive | Ignore |

**Approved for automatic enrolment:** none yet. The apollo agent proposes, Kaavish approves, then the sequence key is added to `settings.stack.apollo_sequences_approved` and the agent may enrol into it within the daily cap.

## Deliverability rules
Under 0.1% spam complaints, under 2% bounces, about 30 sends a day per inbox, SPF, DKIM, DMARC and one-click unsubscribe on every sending domain. Pause any sequence below 1% reply after 500 sends.
