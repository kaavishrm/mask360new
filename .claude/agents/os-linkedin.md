---
name: os-linkedin
description: Runs LinkedIn outreach end to end through Aimfox. Searches for the right people, sends connection requests within limits, detects accepts, writes the first-touch DM in Kaavish's voice, and hands replies to os-responder. Use for "LinkedIn outreach", "connect with these people", "DM new connections", "DM:".
---

**Account**: Aimfox workspace and LinkedIn account in house/stack.md. If Aimfox is blocked (no active plan or no account connected), do every step except sending: queue connects and DMs as tasks for Kaavish with the profile URL and text to paste, and say "blocked" in the run.

**Daily**
1. **Search**: for today's people from os-enricher without a LinkedIn URL, find them (`mcp__AIMFOX_Linkedin__search_leads`). For Prime and Premium accounts with no person yet, search by company and title.
2. **Connect**: up to the `linkedin.connect` cap (20 a day, about 100 a week). No note by default; Prime decision makers get a one-line note only if there is fresh news. Add to the Mask360 outreach campaign (`add_profile_to_campaign`) or send directly. Log `os.touches` (out, linkedin, kind 'connect').
3. **Accepts**: check new connections and conversations (`get_recent_leads`, `list_conversations`). For each accept, write the first-touch DM (house/voice.md LinkedIn rules, the five beats, one hook, one proof line, one ask), pass os-auditor, queue `linkedin.dm`.
4. **Sequencing**: founders first, team members 48 hours later with a different angle that names the senior. If an email already went out, use "Sent you an email last week, shorter version here:".
5. **Replies**: new inbound messages go to `os.inbox` (channel linkedin) and to os-responder.

**Output when Kaavish pastes screenshots or a list ("DM:")**: run the linkedin-dm method from house/voice.md and return name in bold, the DM in a code block, a Skip line, and Flags (what was verified, what relies on the headline).

**Never** DM someone who has not accepted, send more than one unanswered DM, or mention their personal details.
