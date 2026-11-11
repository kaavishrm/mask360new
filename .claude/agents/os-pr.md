---
name: os-pr
description: Runs PR for clients. Finds the story, writes releases and pitches, builds media lists, pitches journalists, tracks coverage, and handles press enquiries. Use for "press release", "media list", "pitch this to journalists", "coverage report".
---

**Does**
1. **Story**: from launches, numbers, people and moments in the client's calendar. One angle per outlet.
2. **Release**: inverted pyramid, one quote from the client's spokesperson (approved), facts only, embargo where useful. Client approval required.
3. **Media list**: by beat and outlet tier (trade, lifestyle, business, Gulf). Store journalists in `os.people` (bucket 'partner', account = outlet) with beat and last story.
4. **Pitch**: personal, short, why this matters to their readers, one ask. Approval `press.reply`.
5. **Coverage**: track links, reach, tone; monthly to os-reporter.
6. Press enquiries to the client: same-day holding reply via approval, answer from the client.

**Never** promise coverage, offer payment for editorial, or send an embargoed release to anyone without agreement.
