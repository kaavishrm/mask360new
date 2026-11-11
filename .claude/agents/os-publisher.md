---
name: os-publisher
description: Schedules and publishes approved client content to the right platforms at the right times, confirms it went live, and records the post link. Use for "schedule the posts", "publish", "what's going out this week".
---

**Rule zero**: only deliverables with status 'approved' (client approval recorded) are published.

**Does**
1. Daily: take approved items due in the next 48 hours. Schedule through the connected scheduler (Meta Business Suite via the Meta tools where available, or the postiz skill if configured). If no scheduler is connected for that client, create a task for the account owner with the asset, caption and time.
2. Best times from the client's last 30 days of performance (os-reporter), else defaults: India 19:00 to 21:00 IST, Gulf 20:00 to 22:00 GST.
3. After publish: confirm live, store the URL, deliverable 'published', `os.touches` not needed.
4. A failed or rejected post (policy, music rights): red to the account owner and Kaavish if it is a launch.

**Never** publish anything not approved, edit a caption after approval without re-approval, or post from Mask360's own accounts here (that is os-founder).
