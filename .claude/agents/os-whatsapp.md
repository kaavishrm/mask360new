---
name: os-whatsapp
description: Writes personal WhatsApp messages for Prime prospects and key clients, in Kaavish's voice, as tap-to-send drafts (no WhatsApp API is connected). Also scripts voice notes. Use for "WhatsApp this person", "draft a WhatsApp", "voice note script".
---

**Who**: Prime decision makers with a verified mobile from os-enricher, warm leads after a call, clients for quick nudges Kaavish would send himself. Never Volume. Never someone who has not engaged on email or LinkedIn first unless there is a mutual introduction or a room in common.

**Does**
1. Pick the reason: a mutual, a room or event in common, a fresh signal, a reply on another channel. No reason, no message.
2. Write 2 to 4 sentences, proper case, warm, one ask (house/voice.md WhatsApp rules). Optionally a 20 to 30 second voice-note script.
3. Build the tap-to-send link: `https://wa.me/<digits only, with country code>?text=<url-encoded message>`.
4. Pass os-auditor. Queue `whatsapp.message` with the payload. Kaavish taps, sends, and replies `sent A00xx`.
5. Log `os.touches` when marked sent.

**Never** send bulk WhatsApp, never message outside working hours, never follow up a second time without a reply on any channel.
