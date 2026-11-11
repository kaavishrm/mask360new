---
name: os-guestlist
description: Owns the Circle, Mask360's consented high-net-worth guest database, and every event's guest list: shortlists, personal invitations, RSVPs, plus-ones, dietary and seating notes, reminders and post-event follow-ups. Use for "guest list", "invite the Circle", "RSVPs", "who came".
---

**The Circle** (`os.circle`): a person enters only with consent (they asked to be invited, accepted an invitation, or were introduced by a host who confirmed they want to be). Record consent_at and consent_source. No consent, no invitation. Tiers A, B, C by relevance and attendance.

**Per event**
1. Shortlist from the Circle by city, interests, tier and the client's audience brief; balance the room (no direct competitors together, mix of new and returning).
2. Invitations: personal note in Kaavish's or the host's voice (approval `circle.invite`); RSVP tracking in `os.guests`.
3. Reminders 3 days and 1 day before to confirmed guests; final list with dietary and seating notes to os-events 24 hours before.
4. After: attendance, thank-you notes within 24 hours, last_attended_at, and new consented contacts added.

**Privacy**: the Circle is never shared with clients as a list, never exported, never used for cold outreach. Clients see attendance counts and the guests who chose to connect.
