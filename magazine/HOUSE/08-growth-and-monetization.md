# 08. Growth and monetization

Target: 1,000,000 impressions in 6 months (by 2027-05-03), then revenue. Impressions are counted across Instagram, LinkedIn, the website (Search Console impressions plus page views) and the newsletter, with Instagram carrying the load.

## The math

| Month | Carousels | IG followers (end) | IG impressions | LinkedIn impressions | Web + newsletter | Cumulative |
|---|---|---|---|---|---|---|
| 1 | 52 | 1,500 | 40,000 | 15,000 | 5,000 | 60,000 |
| 2 | 52 | 4,000 | 90,000 | 30,000 | 12,000 | 192,000 |
| 3 | 52 | 8,000 | 150,000 | 45,000 | 25,000 | 412,000 |
| 4 | 52 | 14,000 | 210,000 | 60,000 | 40,000 | 722,000 |
| 5 | 52 | 22,000 | 270,000 | 75,000 | 60,000 | 1,127,000 |
| 6 | 52 | 32,000 | 340,000 | 90,000 | 85,000 | 1,642,000 |

Assumptions: 12 carousels a week, an average of 1,500 impressions per carousel in month 1 rising to 6,500 by month 6 through shares and saves, one carousel a week breaking 50,000 from month 3 on (the Scorecard or Receipts that the industry forwards), LinkedIn at a third of Instagram, web from search on brand and campaign names. Month 5 crosses the target. The plan has slack: if carousels average half the projection the target lands in month 7 and the sales lines still open in month 4.

## What moves the needle

1. **Be in the story.** Every story names brands and people. Tag them. The tagged party's team reads it, and a third of them share it. The Watchlist band on the home page is designed to be screenshotted by the people on it.
2. **Formats the industry forwards.** Scorecard, Moves and Receipts are the three formats built for forwarding on WhatsApp inside agencies. They run 5 times a week between them.
3. **Consistency.** 12 a week, same times (08:00 and 19:30 IST), no gaps. The engine does not have off days.
4. **Search.** Every web story is a page about a brand, a campaign or a venue with the name in the title, the URL and the first line. Those are low-competition queries with intent. Sitemap, RSS, structured data (NewsArticle) and an IndexNow ping on every publish.
5. **LinkedIn documents.** The same carousel as a PDF, posted from the Mask360 company page and reshared by the publisher's account. The industry lives there; the document format gets dwell time the algorithm rewards.
6. **The newsletter.** "Sunday Steep": the week's five stories, one Deep Pour, the Watchlist. Buttondown or Beehiiv; the form on the site posts to it. Sent Sunday 09:00 IST. Grows from the site and the bio link.
7. **Seeding.** The first 60 days: the publisher and the Mask360 team follow, like and reply from personal accounts; every agency and brand WhatsApp group the team is in gets the Scorecard on Tuesday. This is the one human lever and it is optional.
8. **Paid boost.** From month 3, the Meta Ads account the agency already has boosts the week's best carousel to a lookalike of agency and brand people, INR 5,000 a week. Measured by cost per follow.

## Monetization (rate card v1, INR, exclusive of GST)

Opens in month 4 (10,000 followers, proof of forwarding). The sales desk drafts outreach to every brand we covered SWEET the week before; the Mask360 sales fleet sends it.

| Line | What it is | Price | Notes |
|---|---|---|---|
| Brand Drop | sponsored carousel or video post, IG + LinkedIn + web story, labelled | 75,000 | brand supplies assets, we design and write; 2 revisions |
| The Edit placement | one labelled item in a five-item Edit, with the catch | 25,000 | max 2 per Edit; order is editorial |
| Guest List coverage | paid event coverage, 1 carousel + web story, within 48 hours | 60,000 | plus travel outside Mumbai |
| Scorecard, presented by | sponsor badge on the week's two Scorecards | 50,000 a week | the score is never for sale, signed |
| Moves, presented by | sponsor badge on the weekly Moves | 40,000 a week | recruiters, tools, business schools |
| Sunday Steep sponsor | one sponsor block in the newsletter | 30,000 an issue | from 3,000 subscribers |
| Site takeover | the home page band (the reference's "Ads space") for a week | 50,000 | one brand, one creative, house-designed |
| Mask360 Studio | the agency's content, events and systems services, sold off the back of the publication | rate card at mask360.agency | the publication is the top of the agency funnel |

Month 6 target: INR 6 to 8 lakh a month in run rate across 4 to 6 brands. Month 12: INR 15 lakh a month. Costs: API spend under INR 40,000 a month at 12 stories a week, hosting under INR 2,000, fonts and tools zero.

## What we will not sell

A rating. A kicker. Silence on a story. An unlabelled post. Coverage of a brand we are in a dispute with. More than two paid items in any Edit. More than two Brand Drops a day.

## Measurement

`m360-growth` writes `newsroom/metrics/YYYY-WW.json` every Monday from the Instagram Graph API insights (reach, impressions, saves, shares per post), LinkedIn organization share statistics, Google Search Console (impressions, clicks, queries) and the newsletter provider. The INBOX gets one line a week: cumulative impressions, run rate, the best and worst format, the adjustment made. The home page does not show numbers. The media kit page (`/advertise/`) does, refreshed monthly.

## Decisions needed from the publisher (not blocking, defaults in brackets)

1. Domain (default: run on the host subdomain until bought; recommended `mask360.media` or `threesixtea.com`).
2. Newsletter provider (default: Buttondown free tier).
3. Instagram handle (default: @mask360 if free, else @mask360tea).
4. Whether to boost from month 3 (default: yes, INR 5,000 a week from the existing Meta Ads account).
