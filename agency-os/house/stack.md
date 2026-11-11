# Stack

Every tool the OS touches, its identifiers, and its state. The boot routine and the weekly routine refresh the "State" column.

| Tool | Used by | Identifiers | State (11 Nov 2026) |
|---|---|---|---|
| Supabase | everything | project `fqhmszoclzfwzttvrwng` (m360-os-store, Mumbai), schema `os`. Do not touch `public.m360_blobs` | Live |
| Gmail | inbox, responder, briefs, client and finance agents | kaavish@mask360.agency. OS labels live under `M360 OS/`. Existing labels to respect: Active Lead, Cold Lead, Closed Lead, 4 Week Follow Up, Agency Intro, Funding, Hiring, Notes, Apollo Mailwarming | Live. 2,453 unread inbox threads at boot |
| Google Calendar | calendar, booker, dossier | primary `kaavish@mask360.agency`, Asia/Kolkata | Live |
| Google Drive and Sheets | documents, reports | OS root folder `M360 OS` (created at boot; id recorded in os.orgs.settings.drive_root) | Live |
| Apollo | finder, enricher, apollo | user `680245019fc2bd001974807b`, team `680244fe9fc2bd0019747ed9` | Live. 40 of 4,000 lead credits left this cycle |
| Aimfox (LinkedIn) | linkedin | workspaces `14f4e286-bf7d-47f6-8872-b3f0d8fa7d15` (Mask360, no LinkedIn account connected) and `7f4cefb7-6628-4a63-9163-87c0d2ca7395` (Kaavish's Workspace, 2 accounts, outreach plan cancelled) | Blocked until a plan is active and the account is connected. Until then the linkedin agent queues DMs for Kaavish to send by hand |
| WhatsApp | whatsapp | none | No API. Drafts carry a wa.me tap-to-send link |
| Meta Ads | performance | discover with ads_get_ad_accounts | Live, read first |
| Canva | designer | brand kits via list-brand-kits | Live |
| Higgsfield | designer | | Live |
| Notion | optional mirror | workspace "Mask360 Agency" | Live, not used by default |
| QuickBooks | bookkeeper | | Needs a fresh sign-in. QuickBooks Online left India in 2023, so confirm which books tool runs the India entity before relying on it |
| Slack | none yet | | Not authorised |
| Newsroom | founder, scout | `magazine/` on branch claude/elegant-edison-9kcrit, daily scheduled task | Live |

## Apollo sequences
| Sequence | Id | Steps | Status | OS use |
|---|---|---|---|---|
| Retarget, opened no reply, Oct 2026 | 6ae3333a23a3e20014790729 | 3 auto emails | Active, flagged underperforming (974 delivered, 2 replies) | Proposed for pause |
| Atlas, Real Estate Developers | 6af4722e55cb05000ccdf59c | 6 (email, LinkedIn, call) | Inactive | Candidate for RealEstate Premium tier after review |
| Follow-Up, Project Updates Check-In, Nov 2026 | 6aeb542fab1c5c00209d1e73 | 3 manual emails | Inactive | Candidate for nurture |
| Luxury Brand Marketing Leaders, Multi-Channel | 6a4cf739ce033e0018f297ba | 6 (manual email, call, LinkedIn) | Inactive | Candidate for Premium tier |
| Kaavish's Sequence 69260 | 69872ff13a92b60019d6f19d | 1 | Inactive | Ignore |

**Approved for automatic enrolment:** none yet. The apollo agent proposes, Kaavish approves, then the sequence id is added here and the agent may enrol into it within the daily cap.

## Deliverability rules
Under 0.1% spam complaints, under 2% bounces, about 30 sends a day per inbox, SPF, DKIM, DMARC and one-click unsubscribe on every sending domain. Pause any sequence below 1% reply after 500 sends.
