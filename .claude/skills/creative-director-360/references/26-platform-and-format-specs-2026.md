# Platform and format specifications, October 2026

The numbers for every format the agency ships, verified against platform help centres and standards where they could be read, dated, and flagged where they could not. The single sheet to check before export. As of October 2026: primary pages read 28 and 29 October 2026.

## Table of contents

1. [Method note and how to read this sheet](#1-method-note-and-how-to-read-this-sheet)
2. [Social organic specs](#2-social-organic-specs)
3. [Paid media specs](#3-paid-media-specs)
4. [Web and app specs](#4-web-and-app-specs)
5. [Video and film specs](#5-video-and-film-specs)
6. [Print specs](#6-print-specs)
7. [Presentation and document specs](#7-presentation-and-document-specs)
8. [Accessibility numbers](#8-accessibility-numbers)
9. [Typography and motion numbers, short form](#9-typography-and-motion-numbers-short-form)
10. [Photography deliverable specs](#10-photography-deliverable-specs)
11. [Master table](#11-master-table)

- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

## 1. Method note and how to read this sheet

### 1.1 How each value was checked

Every value carries a status code, a source and a date. The status codes (this file's verification marks) mean one thing each.

| Code | Meaning | What to do with it |
|---|---|---|
| V | Verified on 28 or 29 October 2026 by reading the named primary page (platform help centre, ads guide, developer documentation, or the standard itself) | Ship against it |
| T | Found only on a named third-party page (scheduling tool, agency blog, trade press) read on the date given; the platform page could not be read, or the platform publishes no number | Treat as a working default; confirm in the platform's own upload or ads tool before a client-facing deliverable |
| U | Unverified in this check: no page was read, the page failed to load, or the value is carried from prior knowledge of a standard | Verify against the named document before relying on it; never quote it to a client as current |
| H | House rule: a Mask360 standard; its source is the reasoning given in the same row or the section named | Follow it; change it only by changing the reasoning |
| D | Derived from a V value by arithmetic (safe-zone pixels from percentages, px from dp, crop sizes) | As reliable as the V value; recompute when that value changes |

Where one source covers every row of a table, the status, source and date sit in the line above the table; where rows differ, each row carries its own Status, Source and Checked cells. "Not read" in a Checked cell marks a U row.

Why the discipline: platform numbers move without notice. In this check alone: Meta's ads guide recommends 1440 x 2560 for Reels and Stories and 1440 x 1800 for 4:5 feed, where most third-party guides still print 1080-wide values; YouTube's thumbnail page recommends 3840 x 2160 for videos and 2160 x 3840 for Shorts; LinkedIn's Pages help lists the company cover at 1512 x 256 minimum and recommended, so the 1128 x 191 printed on most guides is now below the minimum; Meta's Instagram API reference now accepts 20 carousel items; the FSSAI substituted its letter-height table in November 2021, which most packaging checklists still miss; and Apple's screenshot page lists an "iPhone Duo" class with inner and outer displays. A sheet without dates is a liability. Section 11 collapses everything into one table with the source and the date on every row; use sections 2 to 10 for the reasons and the exceptions, and section 11 at export time.

### 1.2 Pages that could not be read

Listed so the next person knows where the gaps are and does not assume they were checked.

| Page | Result (28 or 29 October 2026) | Values left T or U |
|---|---|---|
| Instagram Help Centre articles | JavaScript-rendered, empty body | Organic grid, organic hashtag cap, alt text, Highlights (2.1) |
| X business help; X developer card documentation | HTTP 403; HTTP 402 | Every X value (2.5, 3.5, 4.2) |
| Snapchat Business Help, creative best practices | 404 on both days; the Snapchat for Business ad format pages were readable | Snapchat safe zone (2.11, 3.7, 5.6) |
| LinkedIn member help; conversation ads article; carousel ads article | Rate-limited on 28 October; 404; not reached | Member cover (T); conversation, carousel and Thought Leader ads (U) |
| Meta ads guide, Facebook Reels page | 404 on 29 October | Facebook Reels ads (3.1) |
| DCI specification site | Empty body | DCP values (5.8, T through Wikipedia) |
| Legal Metrology (Packaged Commodities) Rules PDF, consumeraffairs.nic.in | Connection reset on 28 October; 503 on 29 October | Rule 7 letter heights (6.10) |
| GS1 EAN-UPC page and General Specifications | 403; an HTML stub in place of the PDF | Barcode dimensions (6.9) |
| Apple Human Interface Guidelines, app icon and layout pages | JavaScript-rendered, empty body | iOS icon (4.3) |
| Times OOH, JCDecaux UAE, Laqshya Media, JCDecaux Middle East, ELAN, Emaar Malls advertising | Unreachable, 503, or host did not resolve | DOOH (3.9) |
| Backlite Media, Hypermedia | Readable; no artwork specifications published | DOOH (3.9) |
| Netflix sound mix specification; Netflix Arabic timed text guide | Redirect to an empty body; 404 | Netflix loudness (5.4); Arabic subtitles (5.10) |
| Litmus, Mailchimp and Campaign Monitor email sizing guides | 404 | Email sizing (4.6) |
| Google Store Pixel 10 and Samsung Galaxy S25 specification pages | Truncated; 404 | Android viewports (4.7) |
| Amazon Seller Central image guidelines; Indian and UAE marketplace seller sheets | Behind seller login | Marketplace imagery (10.6) |

On 28 October web search was unavailable, so every check was a direct read of the primary page or a text extraction of the primary PDF (Apple ProRes white paper April 2022, EBU R 128-2023, IAB fixed size ad specifications 2017, Apple Digital Masters). On 29 October 13 web searches ran on the most volatile values (YouTube thumbnails and non-skippable durations, Instagram Reels and carousels, TikTok upload length, LinkedIn covers, X media, Snapchat safe zones, WhatsApp status, iPhone 18 and Android flagship displays, FSSAI and Legal Metrology label rules), and the primary pages they pointed to were read where reachable. Review reads the same day added primary pages directly: the Instagram Graph API media reference, WhatsApp Cloud API media and message components, Google Merchant Center, Google Business Profile, Snapchat ad formats, App Store Connect app previews, Google Search favicons, Google Ads animation policy, the Netflix Hindi guide, EBU R 128-2023 and R 128 s1-2020 (text extracted), and the FSSAI labelling compendium (text extracted). The shared search budget then ran out, so DOOH network sheets, the Mumbai hoarding policy, GS1 barcode dimensions and the organic Instagram hashtag cap were not searched and stay U.

### 1.3 House conventions that override platform minimums

The design-taste house layer (see design-taste, SKILL.md, section 7) sets the look. This file sets the container. Where they meet, the house rules are: export at the platform's recommended size, because every platform recompresses and a minimum-size upload is soft after recompression; keep the master at 2x the delivery size so a reframe or a later spec change does not force a reshoot; and keep every text element inside the tightest safe zone (the part of the frame a platform's own interface does not cover) of all placements the asset will run in, because Meta, TikTok, Snapchat and Pinterest each overlay different interface elements and one asset usually runs in all of them. Text-on-screen craft inside those zones is in 17-short-form-social-and-platform-craft.md, section 2.

## 2. Social organic specs

### 2.1 Instagram

Instagram's own Help Centre could not be read in this check. The verified numbers below come from Meta's ads guide and the Instagram Graph API reference, which describe the same renderer and the same publishing limits.

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Feed portrait (4:5) | 1440 x 1800 recommended in the ads guide; 1080 x 1350 is the common organic export. Minimum ratio 4:5 (400 x 500), maximum 1.91:1 (191 x 100), tolerance 1% | V | facebook.com/business/ads-guide/update/image/instagram-feed | 2026-10-28 |
| Feed square (1:1) | 1080 x 1080 | T | postfa.st/sizes/instagram/feed | 2026-10-28 |
| Feed landscape (1.91:1) | 1080 x 566 | T | post-bridge.com/blog/instagram-post-sizes | 2026-10-28 |
| Feed 3:4 upload | 1080 x 1440; some guides report it fills the 3:4 grid tile without crop, others report inconsistent feed behaviour. Test one post before changing the workflow | T | krumzi.com/blog/instagram-carousel-size-guide | 2026-10-28 |
| Profile grid tile | 3:4 since the January 2025 grid change; a 4:5 post shows its centre 1012 x 1350 in the grid, so about 34 px is lost on each side | T | postfa.st/sizes/instagram/feed | 2026-10-28 |
| Reels canvas | 9:16; ads guide recommends 1440 x 2560; 1080 x 1920 is the common organic export; MP4 or MOV; 4 GB max | V | facebook.com/business/ads-guide/update/video/instagram-reels | 2026-10-28 |
| Reels duration | Ads: 0 s to 15 min. Organic: 3 min in the Reels camera since Instagram's January 2025 change; uploads up to 20 min reported on many accounts in late 2025 and 2026, rolled out unevenly; one 2026 guide still reports 90 s on some accounts. Test on the client's own account before promising a length | V (ads) T (organic) | as above; inro.social and kontentino.com Reels length guides | 2026-10-29 |
| Reels and Stories safe zone | Keep 14% of the top, 35% of the bottom and 6% of each side clear. At 1080 x 1920 that is top 269 px, bottom 672 px, sides 65 px; at 1440 x 2560 it is top 358 px, bottom 896 px, sides 86 px | V (percentages) D (pixels) | facebook.com/business/ads-guide/update/video/instagram-reels | 2026-10-28 |
| Reels cover frame | 1080 x 1920 full frame; the grid shows a centre crop (3:4 tile), so hold the subject in the central 1080 x 1440 | T | somake.ai/blog/instagram-reel-size-guide | 2026-10-28 |
| Stories | 9:16, 1440 x 2560 recommended (ads guide), 1 s to 60 min for ads; organic stories cut into 60 s cards. Clips under 16 s play whole; 16 s and over may split into up to three cards | V | facebook.com/business/ads-guide/update/video/instagram-story | 2026-10-28 |
| Highlight cover | 1080 x 1920 file, shown as a circle cropped from the centre; keep the icon inside the central third | U | no page read | not read |
| Carousel | Up to 20 photos or videos per post, in the app since Instagram's August 2024 announcement and through the Content Publishing API (Meta's programming interface that scheduling tools post through), whose carousel container accepts up to 20 child items. All slides take the ratio of the first slide; one caption for the set; captions are not supported on the individual children | V (API) T (app announcement) | developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media; techradar.com and socialmediatoday.com reports | 2026-10-29 |
| Caption | 2,200 characters, 20 @ tags | V | Graph API media reference, as above | 2026-10-29 |
| Hashtags, ads and API | 30 per caption (ads guide and Graph API reference) | V | as above; ads-guide/update/image/instagram-feed | 2026-10-29 |
| Hashtags, organic posts and Reels | Up to 5 per post, as reported in December 2025 trade press; confirm in the composer on the client account before scheduling | U | no page read; Help Centre unreadable | not read |
| Alt text | About 100 characters in the custom alt text field | U | no page read | not read |
| Frame rate and bitrate | 30 fps fixed frame rate, H.264, progressive, square pixels, stereo AAC 128 kbps or higher; no edit lists or special boxes in the container | V | facebook.com/business/ads-guide/update/video/instagram-story | 2026-10-28 |
| Profile picture | Upload 320 x 320; displays at about 110 px on mobile | U | no page read | not read |

Reason for the 4:5 default: 4:5 is the tallest ratio the feed shows without crop, so it buys the most screen per post; 1:1 gives up 20% of the height for nothing, and 1.91:1 gives up 58%. Reason for 1440-wide masters: Instagram delivers to 3x phones (1206 to 1320 px wide, section 4.7), so a 1080-wide upload is already upscaled on an iPhone 17 Pro Max. Hashtag house rule (H): 0 to 3 specific hashtags (place and category) at the end of the caption and none in the first comment (17-short-form-social-and-platform-craft.md, section 6.9, owns the practice), because Instagram now ranks by caption keywords and topic classification, the organic cap is reported at five, and a block of tags reads as spam on a luxury grid.

### 2.2 TikTok

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Video canvas | 9:16, 1080 x 1920; ads accept 9:16 at 540 x 960 minimum, 16:9 at 960 x 540, 1:1 at 640 x 640 | V (ads page) | ads.tiktok.com/help/article/video-ads-specifications | 2026-10-28 |
| File types | MP4, MOV, MPEG, 3GP, AVI (ads); MP4 H.264 with AAC is the safe export | V | as above | 2026-10-28 |
| Duration | Ads: up to 10 min. Organic: about 10 min in the in-app camera; uploads up to 60 min, which TikTok began testing in May 2024 and which 2026 guides report as the current ceiling, rolled out by account and region; TikTok Studio on the web is the reliable route for long files | V (ads) T (organic) | as above; ttcalculator.net and sociality.io 2026 length guides | 2026-10-29 |
| File size | Ads 500 MB. Organic: about 72 MB on Android, about 288 MB on iOS, 500 MB to 4 GB on web depending on the guide | V (ads) T (organic) | as above; postfa.st/sizes/tiktok/video | 2026-10-28 |
| Bitrate | 516 kbps minimum (ads) | V | as above | 2026-10-28 |
| Safe zone | TikTok publishes downloadable safe zone files on the ads spec page in place of fixed pixels, because the overlay depends on caption length and format. Working default from the files and third-party guides: top about 290 px, bottom about 480 px, right column about 200 px on a 1080 x 1920 canvas | V (method) T (pixels) | as above; subtitlebee.com/blog/tiktok-video-size | 2026-10-28 |
| Photo mode | 1080 x 1920 images, up to 35 per post, swiped as a carousel with music | U | no page read | not read |
| Cover | Full 1080 x 1920 frame; the profile grid trims top and bottom to about a 3:4 tile, so hold the subject centred | T | recurpost.com/tiktok-scheduler/tiktok-video-sizes | 2026-10-28 |
| Brand or account name in ads | 20 characters (10 for Chinese, Japanese, Korean), one line | V | ads.tiktok.com | 2026-10-28 |
| Profile photo in ads | 98 x 98 px, under 50 KB, key element inside a 66 x 66 centre | V | ads.tiktok.com | 2026-10-28 |

### 2.3 YouTube

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Container and codec | MP4 with the moov atom (the file's index) at the front, called Fast Start, and no edit lists; H.264 High Profile, progressive, 2 consecutive B-frames (bidirectionally predicted frames), closed GOP (a group of pictures that references no frame outside itself) of half the frame rate, CABAC (context-adaptive binary arithmetic coding), variable bitrate, 4:2:0 | V | support.google.com/youtube/answer/1722171 | 2026-10-28 |
| Audio | AAC-LC or Opus (Eclipsa Audio also listed), 48 kHz; mono 128 kbps, stereo 384 kbps, 5.1 512 kbps | V | as above | 2026-10-28 |
| Frame rate | Upload at the recorded rate: 24, 25, 30, 48, 50, 60; deinterlace first (1080i60 becomes 1080p30) | V | as above | 2026-10-28 |
| Colour | SDR in BT.709 (transfer, primaries, matrix; H.273 value 1); full range is converted to limited; BT.2020 without an HDR transfer function is converted to 8-bit BT.709 | V | as above | 2026-10-28 |
| Shorts | Vertical, up to 3 min, maximum 1080p, title 100 characters | V | support.google.com/youtube/answer/10059070 | 2026-10-29 |
| Shorts music | A Short longer than 1 min with an active Content ID claim (YouTube's automated rights match) is reported blocked worldwide since October 2024, so a 3 min Short uses only licensed or original music | U | reported; no page read | not read |
| Thumbnail | 3840 x 2160 at 16:9 for videos, minimum width 640; 2160 x 3840 at 9:16 for Shorts, minimum height 640; JPG or PNG; 2 MB on mobile uploads (10 MB for podcasts), 50 MB on desktop. A 1280 x 720 file under 2 MB still passes when a client's older checklist asks for it | V | support.google.com/youtube/answer/72431 | 2026-10-29 |
| Banner | Minimum 2048 x 1152 at 16:9; recommended 2560 x 1440 for TV; safe area for text and logos 1235 x 338 at the minimum size (scales to about 1544 x 423 on the 2560 canvas, which is where the familiar 1546 x 423 comes from); 6 MB max | V (D for the scaled area) | support.google.com/youtube/answer/10456525 | 2026-10-28 |
| Channel icon | Renders at 98 x 98; upload a square, 15 MB max, JPG, static GIF, BMP or PNG; upload 800 x 800 so the 2x and 3x renders stay sharp | V | as above | 2026-10-28 |
| Video watermark | Square, minimum 150 x 150, under 1 MB | V | as above | 2026-10-28 |
| End screens | Video must be at least 25 s; the end screen occupies the last 5 to 20 s; up to 4 elements at 16:9 | V | support.google.com/youtube/answer/6388789 | 2026-10-28 |
| Title and description | Title 100 characters; description 5,000 | V | support.google.com/youtube/answer/57404 | 2026-10-28 |
| Upload limit | 256 GB or 12 h, whichever is less; 15 min until the channel is phone-verified | V | support.google.com/youtube/answer/71673 | 2026-10-29 |

Recommended upload bitrates in Mbps (standard frame rate 24, 25, 30 first; high frame rate 48, 50, 60 second); V, support.google.com/youtube/answer/1722171, 2026-10-28:

| Resolution | SDR standard | SDR high | HDR standard | HDR high |
|---|---|---|---|---|
| 8K | 80 to 160 | 120 to 240 | 100 to 200 | 150 to 300 |
| 2160p | 35 to 45 | 53 to 68 | 44 to 56 | 66 to 85 |
| 1440p | 16 | 24 | 20 | 30 |
| 1080p | 8 | 12 | 10 | 15 |
| 720p | 5 | 7.5 | 6.5 | 9.5 |
| 480p | 2.5 | 4 | not supported | not supported |
| 360p | 1 | 1.5 | not supported | not supported |

Reason to upload 4K even for 1080p films: YouTube serves VP9 (and AV1) to 4K uploads and often a lower-quality ladder to 1080p uploads, so a 3840 x 2160 upscale of a 1080p master usually looks cleaner on playback than the 1080p file itself. Reason for a 1235 x 338 banner safe area: the same image is cropped to a strip on phones, a wider strip on desktop and the full 16:9 on TV, so only that centre survives everywhere.

### 2.4 LinkedIn

LinkedIn's member help pages were rate-limited on 28 October; the Pages image specification page was read on 29 October. Post values come from the Marketing Solutions ads pages, because the organic renderer uses the same image and document pipeline.

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Image post | 1.91:1 at 1200 x 628, 1:1 at 1200 x 1200, 4:5 at 720 x 900 (ads page recommendations); maximum 7680 x 4320; 5 MB; JPG, PNG, GIF (animated GIF up to 250 frames); images under 401 px wide display as thumbnails | V (ads page) | linkedin.com/help/lms/answer/a426534 | 2026-10-28 |
| Document post (PDF carousel) | PDF, PPT, PPTX, DOC, DOCX; 100 MB and 300 pages maximum; 1 million words; flatten layers; all pages one size. Square 1:1 or 4:5 pages read largest on mobile | V | linkedin.com/help/lms/answer/a493903 | 2026-10-28 |
| Video post | MP4; 75 KB to 500 MB; 3 s to 30 min; 16:9 at 1920 x 1080 (min 640 x 360), 1:1 up to 1920 x 1920, 4:5 at 720 x 900 up to 1080 x 1350, 9:16 at 720 x 1280 up to 1080 x 1920; under 30 fps; AAC or MPEG4 audio | V (ads page) | linkedin.com/help/lms/answer/a424737 | 2026-10-28 |
| Post text | 3,000 characters maximum; first 150 show before truncation | V (ads intro text) | linkedin.com/help/lms/answer/a424737 | 2026-10-28 |
| Personal cover | 1584 x 396 (4:1), JPG or PNG, 8 MB | T | manypixels.co and waalaxy.com 2026 guides, both citing linkedin.com/help/linkedin/answer/a568217 | 2026-10-29 |
| Company page cover | 1512 x 256 minimum and recommended; PNG or JPEG, 3 MB. Older guides print 1128 x 191, now below the minimum. Life tab main image 1128 x 376, custom modules 502 x 282, company photos 900 x 600 | V | linkedin.com/help/linkedin/answer/a563309 | 2026-10-29 |
| Profile photo and Page logo | Member photo 400 x 400 upload (T, as personal cover); Page logo 400 x 400 recommended, 268 x 268 minimum, 3 MB (V) | V, T | as above | 2026-10-29 |
| Event cover | 4:1; confirm the pixel size on the event creation screen | U | no page read | not read |

### 2.5 X

Both X help pages returned 403 and the developer card page returned 402 in this check, so every X value is T or U.

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Image | 16:9 at 1200 x 675 or 1:1 at 1200 x 1200; JPEG and PNG up to 5 MB; GIF up to 15 MB | T | skedsocial.com/blog/twitter-post-size-guide | 2026-10-28 |
| Video | 1920 x 1080 or 1080 x 1080, MP4 H.264 AAC, up to 512 MB and 2 min 20 s (140 s) in the apps for standard accounts; Premium to 4 h at 1080p on web and iOS. One October 2026 source reports an X developer changelog raising API uploads to 20 min and 8 GB for standard accounts from 1 September 2026; unconfirmed | T | postfa.st/sizes/x/video; opentweet.io/answers/x-api-video-upload-limit | 2026-10-29 |
| Post text | 280 characters; Premium long posts to 25,000 | U | no page read | not read |
| Profile and header | Profile 400 x 400; header 1500 x 500 | U | no page read | not read |
| Summary card with large image | 2:1, minimum 300 x 157, maximum 4096 x 4096, under 5 MB, JPG, PNG, WEBP, GIF | U | developer.x.com card documentation (402) | not read |

### 2.6 Threads

V, developers.facebook.com/docs/threads/overview, 2026-10-28.

| Item | Value |
|---|---|
| Text | 500 characters |
| Image | 8 MB; width 320 to 1440 px (scaled otherwise); aspect ratio limit 10:1 |
| Video | 300 s (5 min); 1 GB; 9:16 recommended to avoid crop or letterbox |
| Carousel | 2 to 20 items |

### 2.7 Pinterest

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Standard pin | 2:3 at 1000 x 1500; PNG or JPEG; 20 MB desktop, 32 MB in-app; taller ratios are cut off in feed | V | help.pinterest.com/en/business/article/pinterest-product-specs | 2026-10-28 |
| Video pin | Ratio between 1:2 and 1.91:1; recommended 1:1, 2:3, 4:5, 9:16; 4 s to 15 min; 2 GB; MP4, MOV, M4V; H.264 or H.265; 6 to 15 s recommended for ads | V | as above | 2026-10-28 |
| Idea ad (multi-page) | 9:16 at 1080 x 1920; video up to 5 min; 2 GB on app, 100 MB on web; safe zone top 270, left 65, right 195, bottom 440 px | V | as above | 2026-10-28 |
| Carousel | 2 to 5 images at 1:1 or 2:3, 20 MB each (catalogue carousels 2 to 10) | V | as above | 2026-10-28 |
| Title and description | Title 100 characters (first 40 show, 30 for double-byte); description 800 | V | as above | 2026-10-28 |
| Profile picture | 165 x 165 display; upload 600 x 600 | U | no page read | not read |

### 2.8 Facebook

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Feed image | 4:5 at 1440 x 1800; JPG or PNG; 30 MB; minimum 600 wide, 750 high at 4:5; ratio tolerance 3% | V | facebook.com/business/ads-guide/update/image/facebook-feed | 2026-10-28 |
| Feed video | 4:5 at 1440 x 1800; MP4, MOV or GIF; 4 GB; 1 s to 241 min; minimum 120 x 120; stereo AAC 128 kbps or higher | V | facebook.com/business/ads-guide/update/video/facebook-feed | 2026-10-28 |
| Stories | 9:16 at 1440 x 2560; 4 GB; 1 s to 3 min; clips of 15 s or less play whole, longer ones split into cards; safe zone 14% top, 35% bottom, 6% sides | V | facebook.com/business/ads-guide/update/video/facebook-story | 2026-10-28 |
| Reels | Same canvas and safe zone as Instagram Reels (section 2.1) | U | ads-guide Facebook Reels page returned 404 | not read |
| Page cover | Upload 851 x 315, sRGB JPG under 100 KB; minimum 400 x 150; desktop shows 16:9 left-aligned, mobile 2.4:1; the profile picture overlaps by about 40 px | V | facebook.com/help/125379114252045 | 2026-10-28 |
| Page profile picture | Upload 320 x 320; displays 176 x 176 on desktop, 196 x 196 on phones, cropped to a circle | V | as above | 2026-10-28 |
| Event cover | 16:9; confirm the size in the event composer | U | no page read | not read |

### 2.9 WhatsApp status and channels

WhatsApp publishes no media specification for consumer status or channels; these values come from news reports of beta builds. Status: 9:16 at 1080 x 1920; 60 s per video status (first in Android beta 2.24.7.6, March 2024; 30 s before), and WABetaInfo reported a 90 s limit in Android beta 2.25.12.9 (T, netzwelt.de and androidauthority.com, 2026-10-29). Channel posts attach an image or video to a text post and are recompressed heavily, about 16 MB effective for video before the HD option (U). House rule (H): send the final file to a test handset and view it on iOS and Android before the client sees it, because WhatsApp's recompression is the harshest of any channel the agency uses. Channel and status craft for India and the Gulf: 17-short-form-social-and-platform-craft.md, section 3.12.

### 2.10 WhatsApp Business Platform (Cloud API)

The WhatsApp Business Platform, reached through Meta's Cloud API, is the CRM and remarketing channel for Indian and Gulf luxury real estate, jewellery and hospitality, and its media caps are the hard limits the agency hits most often. V, read 2026-10-29: developers.facebook.com/docs/whatsapp/cloud-api/reference/media (media), developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components (message components), developers.facebook.com/docs/whatsapp/pricing (pricing), blog.whatsapp.com/helping-you-find-more-channels-and-businesses-on-whatsapp (Status ads).

| Item | Limit |
|---|---|
| Image | JPEG or PNG, 8-bit RGB or RGBA, 5 MB |
| Video | MP4 or 3GP, 16 MB; H.264 video and AAC audio only, one audio stream or none; Meta recommends Main or Baseline profile because Android clients do not support High profile with B-frames, and the moov box before the mdat box |
| Audio | AAC, AMR, MP3, M4A, or OGG with the Opus codec and mono input; 16 MB |
| Document | PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT; 100 MB |
| Sticker | WebP only (WebP is accepted in no other message type); 512 x 512; 100 KB static, 500 KB animated |
| Message template text | Header 60 characters (one variable); body 1,024; footer 60; button label 25. A message template is Meta's term for a pre-approved business message format, required for any message the business starts |
| Buttons | Up to 10 per message; at most 2 URL buttons, 1 phone number button and 1 copy-code button (code up to 20 characters); with more than 3 buttons WhatsApp shows 2 and folds the rest under "See all options" |
| GIF header | Sent as MP4, up to 3.5 MB; available only through the Marketing Messages API |
| Pricing | Charged per delivered message by category (marketing, utility, authentication) since 1 July 2025 |
| Ads | Ads in Status and Promoted Channels in the Updates tab, announced 16 June 2025 |

House arithmetic (D and H): 16 MB is 128 Mbit, so the total bitrate in Mbps that fits is about 120 divided by the duration in seconds, after about 6% for the container and a margin: 4 Mbps for 30 s, 2 Mbps for 60 s, 1.3 Mbps for 90 s. A 1080 x 1920 social master at 20 Mbps passes 16 MB after about 6 s, so every WhatsApp film gets its own encode: 1080 x 1920 H.264 Main profile, no B-frames, up to 30 s; 720 x 1280 for anything longer; AAC 96 to 128 kbps stereo inside the total. Header images go at 1080 px wide under 1 MB, because recipients open them on mobile data.

### 2.11 Snapchat

Snapchat is a primary channel in Riyadh and Dubai (17-short-form-social-and-platform-craft.md, section 3.13). Ad formats are in section 3.7; the organic canvas is the same.

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Canvas | 9:16. The ad formats overview lists 720 x 1280; the single image or video page lists 1080 x 1920; deliver 1080 x 1920 | V | forbusiness.snapchat.com/advertising/ad-formats and /ad-formats/single-image-or-video-ads | 2026-10-29 |
| Safe zone | Keep the top 150 px and bottom 150 px clear on 1080 x 1920; collection ads need about 450 px at the bottom for the product tiles. Snapchat's business help page was 404 on both days | T | strikesocial.com/blog/snapchat-ad-specs | 2026-10-29 |
| Public profile image | 1080 x 1080, or the Bitmoji | U | no page read | not read |

### 2.12 AR effects

Instagram and Facebook carry no branded augmented reality (AR) effects: Meta closed Meta Spark, its third-party effects platform, effective 14 January 2025 (V, spark.meta.com, 2026-10-29). A beauty or jewellery brief for an "Instagram filter" therefore cannot be delivered as asked; answer it on another surface. Branded AR in 2026 runs on Snapchat through Lens Studio (Sponsored AR Lenses need a visible logo or brand name, placed top left or top right below the interface, and Snapchat adds a "Sponsored" slug for 2 s; V, section 3.7), on TikTok through Effect House (U), and on the web through Google's model-viewer component with a GLB file (binary glTF, the 3D format Android and Chrome read) and a USDZ file (Apple's packaged Universal Scene Description format, which iOS AR Quick Look opens) (U). Model and texture budgets: 13-motion-graphics-and-3d-production.md, section 9.2, and 21-web-design-and-digital-craft.md, section 4.6.

### 2.13 Profile pictures and the m360 mark

Profile and cover sizes for every platform are collected in the master table (section 11). House rule (H): the m360 mark is black and background-less (design-taste, SKILL.md, section 7), so on every circle-cropped profile it sits inside a white disc with the mark occupying 60% of the diameter; at a 98 px render that leaves a 59 px mark, which is the smallest the mark holds its counters.

## 3. Paid media specs

### 3.1 Meta ads (Facebook, Instagram, Messenger, Audience Network)

Meta's ads guide is the only Meta page set that was readable in this check, and it is the authoritative one for paid placements. Every V row was read at facebook.com/business/ads-guide on 28 October 2026 unless the source cell says 29 October. The recommended resolutions are now 1440-wide (feed) and 1440 x 2560 (vertical); the guide's reason is the 3x phone screens in section 4.7.

| Placement | Ratio and resolution | Duration | File and size | Text recommendations | Status | Source |
|---|---|---|---|---|---|---|
| Facebook feed image | 4:5, 1440 x 1800; minimum width 600, minimum height 750 at 4:5; tolerance 3% | n/a | JPG or PNG, 30 MB | Primary text 50 to 150 characters, headline 27 | V | ads-guide/update/image/facebook-feed |
| Facebook feed video | 4:5, 1440 x 1800; minimum 120 x 120 | 1 s to 241 min | MP4, MOV or GIF, 4 GB; stereo AAC 128 kbps or higher | As feed image | V | ads-guide/update/video/facebook-feed |
| Facebook in-stream video | 16:9 or 1:1, at least 1080 x 1080 | Desktop 5 to 15 s; mobile 5 s to 10 min; ads over 15 s are cut at 15 s; may be skippable after 5 s | MP4, MOV or GIF, 4 GB; H.264, AAC 128 kbps or higher | Primary text 125, headline 40 | V | ads-guide/update/video/facebook-instream-video (29 October) |
| Facebook Reels video | 9:16; canvas and safe zone as Instagram Reels | as Instagram Reels | as Instagram Reels | | U | ads-guide Facebook Reels page returned 404 (29 October) |
| Instagram feed image | 4:5, 1440 x 1800; minimum ratio 4:5, maximum 1.91:1; tolerance 1% | n/a | JPG or PNG, 30 MB | Primary text 125 characters, headline 40, 30 hashtags | V | ads-guide/update/image/instagram-feed |
| Instagram Stories image | 9:16, 1440 x 2560; minimum width 500; tolerance 1% | Shows 5 to 16 s or until swipe | JPG or PNG, 30 MB | Primary text 125 characters | V | ads-guide/update/image/instagram-story |
| Instagram Stories video | 9:16, 1440 x 2560 | 1 s to 60 min; clips under 16 s play whole | MP4 or MOV, 4 GB; H.264, fixed frame rate, square pixels, progressive, AAC 128 kbps or higher | As Stories image | V | ads-guide/update/video/instagram-story |
| Instagram Reels video | 9:16, 1440 x 2560; minimum width 250 under 30 s, 500 at 30 s or longer | 0 s to 15 min | MP4 or MOV, 4 GB; H.264, fixed frame rate, AAC 128 kbps or higher | Primary text 44 characters (the Reels overlay truncates earlier than feed) | V | ads-guide/update/video/instagram-reels |
| Facebook Stories video | 9:16, 1440 x 2560 | 1 s to 3 min; 15 s or shorter plays whole | 4 GB | Primary text 125 characters | V | ads-guide/update/video/facebook-story |
| Carousel (Facebook feed) | 1:1, at least 1080 x 1080; tolerance 3% | Video cards 1 s to 240 min | Image 30 MB, video 4 GB; JPG, PNG, MP4, MOV, GIF | 2 to 10 cards; primary text 80, headline 20, description 18 (all "recommended", meaning the visible length before truncation on the card) | V | ads-guide/update/carousel/facebook-feed |
| Collection (Facebook feed) | Cover 1.91:1 to 1:1, at least 1080 x 1080; the cover is the first asset of the Instant Experience (Meta's full-screen mobile landing page that opens from the ad), followed by 3 product images | Cover video as feed video | Image 30 MB, video 4 GB | Primary text 125, headline 40; Instant Experience required | V | ads-guide/update/collection/facebook-feed |
| Reels and Stories safe zone | Keep the top 14%, bottom 35% and each side 6% free of text and logos. At 1440 x 2560: top 358, bottom 896, sides 86 px. At 1080 x 1920: top 269, bottom 672, sides 65 px | | | | V (percentages) D (pixels) | as above |

Rules the table implies, with the reasons:

- One 4:5 asset at 1440 x 1800 and one 9:16 asset at 1440 x 2560 cover the Meta placements that matter for a luxury client (feed, Explore, Stories, Reels, Audience Network native). Meta crops 4:5 to 1:1 for the placements that still take square (Marketplace, right column on desktop), so hold the subject inside the central 1440 x 1440 of the 4:5 frame.
- Advantage+ placements (Meta's automatic placement setting) is the default, and it serves the same assets into in-stream (16:9 and 1:1), Messenger and Audience Network. Supply a 1:1 and a 16:9 cut, or switch the ad set to manual placements, because Meta's automatic crop of a 4:5 luxury frame into 16:9 keeps 45% of the height (section 5.5) and is the worst crop Meta makes.
- Primary text: Meta's figure of 125 characters is where "See more" appears on most placements; the Reels figure of 44 is where the overlay truncates. Write the first 44 characters as a complete thought.
- Headline 27 on Facebook feed, 40 on Instagram feed, in-stream and collection, 20 on carousel cards: the carousel number is the one that bites. A luxury headline on a carousel card is three words.
- Text in image: Meta removed the 20% text rule in 2020 and the guide states no ratio; the auction still penalises image-heavy text through lower estimated action rates, so the house keeps text on image to one line and lets primary text carry the copy.
- Frame rate: Meta asks for a fixed frame rate and the Stories page states 30 fps as the standard. Export 25 fps material as 25 fps, which Meta accepts, because a 25 to 30 conversion judders on pans.
- Automated creative changes are switched off before publishing (section 3.10).

### 3.2 Google Ads

Responsive display ads (RDA, the Google Ads format that assembles uploaded images, logos and text into display units of any size), read on support.google.com/google-ads/answer/7005917, 28 October 2026:

| Asset | Recommended | Minimum | Count | Limit | Status |
|---|---|---|---|---|---|
| Landscape image 1.91:1 | 1200 x 628 | 600 x 314 | up to 15 images in total | 5120 KB each | V |
| Square image 1:1 | 1200 x 1200 | 300 x 300 | as above | 5120 KB | V |
| Landscape logo 4:1 | 1200 x 300 | 512 x 128 | up to 5 logos | 5120 KB | V |
| Square logo 1:1 | 1200 x 1200 | 128 x 128 | as above | 5120 KB | V |
| Short headline | 30 characters | | 1 to 5 | | V |
| Long headline | 90 characters | | 1 | | V |
| Description | 90 characters | | 1 to 5 | | V (count) T (the 90 is from Google's asset table elsewhere) |
| Business name | 25 characters | | 1 | | T |
| Video | YouTube link | | | | V |

YouTube video ad formats, read on support.google.com/google-ads/answer/2375464 (28 October) and answer/11462260 (29 October):

| Format | Duration | Notes | Status |
|---|---|---|---|
| Skippable in-stream | No maximum; under 3 min recommended | Skip button after 5 s; the first 5 s is the whole ad for most viewers | V |
| Non-skippable in-stream | 60 s or shorter overall; 15 to 60 s depending on the campaign subtype, which is where Reservations (fixed-price buys with guaranteed impressions) sit (answer/2375464). In Video reach campaigns (auction buys optimised for unique reach): 7 to 15 s standard, 16 to 30 s only on connected TV (CTV, YouTube and streaming apps watched on a television set) and only for horizontal assets (answer/11462260). YouTube TV sells non-skippable spots typically 15 s and up to 60 s (answer/14361818) | Ask the planner which subtype is booked before cutting: a Reservations buy can take a 30 s or 60 s 16:9, a Video reach mobile buy takes 15 s, and a vertical or square 30 s asset cannot run as a 30 s non-skip | V |
| Bumper (a non-skippable ad of 6 s or less) | 6 s, minimum 5 s | One idea, one line, logo in frame throughout | V |
| In-feed (formerly discovery) | No maximum | Thumbnail and title carry it; the thumbnail rules in section 2.3 apply | V |
| YouTube Shorts | Under 60 s recommended | Vertical 9:16; the Shorts overlay safe zone in section 5.6 | V |
| Masthead (the ad at the top of the YouTube home feed) | No maximum; more than 10 s recommended | Desktop autoplays up to 30 s muted; mobile autoplays the full length | V |

Performance Max (Google's campaign type that serves one asset group across Search, Display, YouTube, Discover, Gmail and Maps) assets, read on support.google.com/google-ads/answer/14528373 (text), 14530211 (images) and 14528532 (video), 28 October 2026, all V:

| Asset | Requirement |
|---|---|
| Headlines | 3 to 15, 30 characters each, at least one of 15 characters or fewer; 11 or more recommended |
| Long headlines | 1 to 5, 90 characters |
| Descriptions | 2 to 5, 90 characters; 4 or more recommended |
| Business name | 25 characters; must match the domain or the verified legal name |
| Display paths | up to 2, 15 characters each |
| Images 1.91:1 | 1200 x 628 recommended, 600 x 314 minimum, 4 or more, up to 20 images in total, 5120 KB |
| Images 1:1 | 1200 x 1200 recommended, 300 x 300 minimum, 4 or more |
| Images 4:5 | 960 x 1200 recommended, 480 x 600 minimum, 2 or more, optional |
| Logo 1:1 | 1200 x 1200 recommended, 128 x 128 minimum, 1 to 5 |
| Logo 4:1 | 1200 x 300 recommended, 512 x 128 minimum, optional |
| Image safe area | Keep content inside the central 80% of the image |
| Video | 16:9, 1:1 and 9:16, one of each, 10 s or longer, up to 15; 1080p; a vertical 10 to 60 s video for Shorts eligibility; Google auto-generates video from the images if none is supplied, which is the reason to always supply one |

Demand Gen (Google's campaign type for YouTube, Discover and Gmail feeds) assets, read on support.google.com/google-ads/answer/13704860, 28 October 2026:

| Asset | Requirement | Status |
|---|---|---|
| Logo 1:1 | 1200 x 1200 recommended, 144 x 144 minimum, 150 KB | V |
| Image 1:1 | 1200 x 1200, minimum 300 x 300, 5 MB | V |
| Image 1.91:1 | 1200 x 628, minimum 600 x 314 | V |
| Image 4:5 | 960 x 1200, minimum 480 x 600 | V |
| Image 9:16 | 1080 x 1920, minimum 600 x 1067 (for Shorts) | V |
| Video | 1:1 at 1080 x 1080, 16:9 at 1920 x 1080, 4:5 at 1080 x 1350, 9:16 at 1080 x 1920; minimum 5 s, and under 10 s is ineligible for in-stream; 256 GB maximum | V |
| Carousel | 2 to 10 cards at 1.91:1, 4:5 or 1:1 | V |
| Uploaded display (HTML5 or image) | 300 x 250, 336 x 280, 728 x 90, 970 x 90, 160 x 600, 300 x 600, 320 x 50; JPG, PNG or non-animated GIF; 150 KB | V |
| Headline, description, business name | 40, 90 and 25 characters | T (the page lists the fields without limits) |

Reason to supply the 4:5 and 9:16 images even where optional: Google generates them from the 1:1 by cropping and the crop is centred, which beheads portraits and cuts product off the edge. Automatically created assets are switched off at campaign level (section 3.10).

### 3.3 TikTok ads

From ads.tiktok.com/help/article/video-ads-specifications (V, 28 October 2026) and the organic values in section 2.2:

| Item | Value | Status |
|---|---|---|
| Video | 9:16 at 540 x 960 minimum (deliver 1080 x 1920), 16:9 at 960 x 540, 1:1 at 640 x 640; MP4, MOV, MPEG, 3GP, AVI; 500 MB; 516 kbps minimum bitrate; up to 10 min | V |
| Ad text | 1 to 100 characters, no emojis (the house uses none in any case); brand name 20 characters | V (brand name) U (ad text) |
| Profile image | 98 x 98, under 50 KB, key element inside the centre 66 x 66 | V |
| Safe zone | TikTok supplies downloadable safe zone overlays on the spec page; working default on 1080 x 1920: top 290, bottom 480, right 200 px | V (method) T (pixels, section 2.2) |
| Spark Ads | TikTok's format for running an existing organic post, with its engagement, as a paid ad; the organic specs in section 2.2 and the post's caption limit apply | U |
| Carousel ads | 2 to 35 images at 1080 x 1920 | U |

### 3.4 LinkedIn ads

| Format | Specification | Status | Source | Checked |
|---|---|---|---|---|
| Single image | 1.91:1 at 1200 x 628, 1:1 at 1200 x 1200, 4:5 at 720 x 900; 5 MB; JPG, PNG, GIF; intro text 3,000 characters maximum, 150 before truncation; headline 70 recommended, 200 maximum; description 100 recommended, 300 maximum | V | linkedin.com/help/lms/answer/a426534 | 2026-10-29 |
| Video | MP4; 75 KB to 500 MB; 3 s to 30 min; 16:9 at 1920 x 1080, 1:1 up to 1920 x 1920, 4:5 up to 1080 x 1350, 9:16 up to 1080 x 1920; under 30 fps; intro text 3,000 maximum, 150 visible | V | linkedin.com/help/lms/answer/a424737 | 2026-10-28 |
| Document | PDF, PPT, PPTX, DOC, DOCX; 100 MB; 300 pages; 1 million words; flatten layers; 1:1 or 4:5 pages read largest on mobile | V | linkedin.com/help/lms/answer/a493903 | 2026-10-28 |
| Carousel | 2 to 10 cards at 1:1, 1080 x 1080, up to 10 MB per card; intro text 255; card headline 45 | U | carousel article not reached | not read |
| Thought Leader ads | Promote a member's existing post (an executive's or employee's) as an ad; the organic post specs in section 2.4 apply | U | no page read | not read |
| Conversation (message) | Intro message 500 characters; up to 5 call-to-action buttons of 25 characters; banner 300 x 250 on desktop | U | help article returned 404 | not read |

Carousel and Thought Leader ads are the main LinkedIn units for B2B luxury real estate and hospitality, so read the LinkedIn Marketing Solutions pages before the first booking and replace the U rows.

### 3.5 X ads

Every X page was blocked in this check (section 1.2). Working defaults, all U: image 1200 x 1200 (1:1) or 1200 x 628 (1.91:1), under 5 MB; video 1:1 or 16:9, 1080 x 1080 or 1280 x 720 minimum, up to 2 min 20 s, 1 GB, MP4 H.264 AAC; website card headline 70 characters; post text 280. Confirm in the X Ads composer before trafficking.

### 3.6 Programmatic display: IAB fixed sizes, HTML5 weight and build rules

From the IAB (Interactive Advertising Bureau) Tech Lab New Ad Portfolio fixed size specification (2017, still the document publishers cite), extracted from the PDF at iab.com/wp-content/uploads/2019/04/IABNewAdPortfolio_LW_FixedSizeSpec.pdf, 28 October 2026, V for every row. K-weight is the IAB's term for file weight in kilobytes after gzip; initial load is everything needed for the first visual display, subload is what the ad may load after the host page's load event.

| Unit | Pixels | Initial load kB | Subload kB |
|---|---|---|---|
| Billboard | 970 x 250 | 250 | 500 |
| Super leaderboard, pushdown | 970 x 90 | 200 | 400 |
| Leaderboard | 728 x 90 | 150 | 300 |
| Medium rectangle | 300 x 250 | 150 | 300 |
| Skyscraper | 160 x 600 | 150 | 300 |
| Portrait | 300 x 1050 | 250 | 500 |
| Smartphone banner | 300 x 50 or 320 x 50 | 50 | 100 |
| Mobile interstitial | 640 x 1136, 750 x 1334 or 1080 x 1920 | 300 | 600 |
| Half page | 300 x 600 | 250 | 500 (from the sizing grid, 700 to 900 thousand pixels at 2x) |
| Large rectangle | 336 x 280 | 150 | 300 (sizing grid, 300 to 500 thousand pixels at 2x) |
| Mobile interstitial, small | 320 x 480 | 200 | 400 (sizing grid, 500 to 700 thousand pixels at 2x) |

Build rules that decide approval:

- IAB (V): pixel counts are calculated at 2x density (728 x 90 counts as 262,080 pixels); no more than 10 file requests on initial load; 30% CPU maximum per ad; animation waits for the window load event and CPU-heavy animation stops once it completes; audio muted until the user starts it; weights 30% lower for 3G markets, which still describes much of tier-two India.
- Google Ads (V, support.google.com/adspolicy/answer/176108, 29 October 2026): animation longer than 30 s is disapproved, and an animation may loop only within those 30 s; the rule covers image, image overlay and HTML5 ads. Uploaded HTML5 and image creative is capped at 150 KB (V, section 3.2). Campaign Manager 360 and Display and Video 360 follow the IAB weights and allow heavier rich media by publisher arrangement (U).
- Every HTML5 ad declares the ad server's click macro (clickTag on Google's servers: the variable the server fills with the tracked landing URL; confirm the variable name for each ad server) and ships a backup image (a static JPG or PNG at the same size, served where HTML5 cannot run) inside the initial k-weight (H).
- Publisher rules of 15 s of animation and 3 loops are common in India and the UAE (U); land the logo end frame by second 15 so one build passes everywhere (H).

### 3.7 Snapchat ads

From forbusiness.snapchat.com/advertising/ad-formats and /ad-formats/single-image-or-video-ads, read 29 October 2026 (V unless marked):

| Format | Specification |
|---|---|
| Sponsored Snaps (an ad delivered into the Chat inbox and opened like a Snap) | 9:16; up to 180 s, under 10 s recommended; brand name up to 25 characters (pulled from the Public Profile); headline 25 to 28 recommended, 34 maximum; optional branded chat background 1080 x 1920, chat message up to 500 characters, auto-response of 500 characters or a video |
| Single image or video, Story ads, Collection ads | 9:16; MP4, MOV, JPG, PNG; video 3 to 180 s; brand name 25, headline 34 |
| Commercials (non-skippable ads inside curated content) | MP4 or MOV, H.264, 9:16; standard 3 to 6 s, non-skippable; Extended Play 7 to 180 s with the first 6 s non-skippable |
| AR Lenses (camera effects that track a face or the world) | Visible logo or brand name required on Face and World Lenses; logo top left or top right, below the interface; Snapchat adds a "Sponsored" slug for 2 s |
| AR Filters (overlays applied to a Snap after capture) | Static PNG at a 945 x 2048 composition; moving GIF at 720 x 1560, 1 to 3 s |
| Resolution | The overview page lists 720 x 1280, the single-format page 1080 x 1920; deliver 1080 x 1920 |
| Safe zone | Top 150 px, bottom 150 px; collection ads about 450 px at the bottom (T, section 2.11) |

Reason to build for the 6 s non-skippable window: on Standard and Extended Play Commercials the first 6 s is the only guaranteed exposure, so the product and the mark land inside it.

### 3.8 Audio platforms

Spotify, from ads.spotify.com/en-US/ad-specs, read 28 October 2026 (V):

| Item | Value |
|---|---|
| Audio ad length | Music ads 30 s maximum; long-form 60 s in select direct markets, skippable after 30 s; podcast ads 30 s |
| Audio file | MP3, WAV or OGG; 50 MB; 44.1 kHz; 192 to 320 kbps; stereo; loudness -16 LUFS (loudness units relative to full scale, section 5.4), plus or minus 1.5 LU |
| Script length | 65 words for 30 s, 100 words for 60 s |
| Companion display | 1:1, at least 600 x 600, JPEG or PNG, 200 KB; tagline 40 characters; advertiser name 25 |
| Canvas (looping visual on mobile) | 9:16 at 720 x 1280, MP4 or MOV, 200 KB, 3 to 8 s |
| Podcast CTA card | 640 x 640 JPG, 200 KB; advertiser name 30, description 40 |
| In-stream video | 9:16 at 720 x 1280 or 16:9 at 1280 x 720; up to 30 s; MOV or MP4; 500 MB; bitrate 198 kbps ideal, 320 maximum; audio RMS -14 dBFS, peak -0.2 dBFS; sound required |

Other audio destinations, none read in this check (U):

| Destination | Working value |
|---|---|
| Apple Podcasts show artwork | Square, 3000 x 3000 px recommended, 1400 x 1400 minimum; JPEG or PNG; RGB |
| Branded podcast episode | About -16 LUFS integrated, -1 dBTP, the common podcast target |
| Anghami (MENA), JioSaavn and Gaana (India) audio ads | Specification from each sales house per booking |
| FM radio, India and UAE | 10, 20 and 30 s spots; deliver 48 kHz 24-bit WAV at the station's loudness target from its sheet |

The Spotify loudness figure matters: Spotify normalises music to -14 LUFS (section 5.4) and asks ads for -16, so an ad mastered to the music target is 2 LU louder than the track it interrupts, which is the single most common reason a luxury audio spot sounds cheap.

### 3.9 Digital out of home and large format

No Indian or UAE network published an artwork specification that could be read in this check (section 1.2). Backlite Media and Hypermedia were readable and publish none; the others were unreachable. Every DOOH (digital out of home: networked screens in public places) value below is therefore T, U or H, and the rule is absolute: no DOOH file leaves the studio without the vendor's own artwork sheet for the named site, because screens on the same road run different pixel maps (a pixel map is the exact pixel width and height a screen displays).

| Item | Working value | Status |
|---|---|---|
| Common digital screen canvases | 1080 x 1920 portrait (mall, metro, airport totems), 1920 x 1080 landscape (retail, petrol forecourt), custom LED pixel maps for roadside (deliver at the native pixel map, 1:1) | U |
| Spot duration | 10 s and 15 s are the standard loop slots in India and the UAE; loops of 60 to 120 s share 6 to 8 advertisers; some airport and mall networks sell 6 s and 8 s | U |
| Frame rate and codec | 25 fps (50 Hz mains in both countries); MP4 H.264 High profile at 15 to 25 Mbps for 1080p, or JPG for static; no audio unless the site is specified as audio-enabled | U |
| Loop and motion | The first second holds a readable composition, because the viewer catches the loop mid-way; no fades to black between spots, the network inserts its own; brand visible in every frame | H |
| India static hoardings | Sizes are quoted in feet: 20 x 10, 30 x 15, 30 x 20, 40 x 20 and 60 x 20 ft are the common Mumbai and Delhi inventory. The Brihanmumbai Municipal Corporation's (BMC) permitted maximum for a hoarding is 40 x 40 ft; the 120 x 120 ft Ghatkopar hoarding that collapsed on 13 May 2024 breached that limit, and enforcement has been strict since. Artwork at 1:10 scale at 300 ppi (pixels per inch at printed size, which is 30 ppi at full size), CMYK, 100 mm bleed (print extended beyond the trim line) at size | U (sizes, policy: confirm against the current BMC outdoor advertising policy); T (collapse, en.wikipedia.org/wiki/Ghatkopar_hoarding_collapse, 2026-10-29) |
| India transit and mall | Bus shelter panels about 1.2 x 1.8 m; metro pillar wraps and airport digital totems at 1080 x 1920; Times OOH (Mumbai airport, Delhi metro) and Laqshya (airports, malls) issue per-site sheets | U |
| UAE roadside | Unipoles (single-column roadside billboards) on Sheikh Zayed Road and the E11 corridor (Backlite, Hypermedia, ELAN): faces of about 12 x 4 m and larger, digital faces at custom pixel maps; lamp post banners about 1.5 x 3 m on Dubai roads; the JCDecaux 2 m² mupi (the six-sheet-sized backlit poster, 1185 x 1750 mm visible) at bus shelters, airports and in malls; 48-sheet equivalents at 6096 x 3048 mm | U |
| UAE malls and airport | Dubai Mall (Emaar) and Mall of the Emirates digital portrait screens at 1080 x 1920; Dubai Airports (JCDecaux) digital at 1080 x 1920 and large landscape LED walls at custom maps; Arabic and English on the same face, Arabic reading right to left with its own type (03-typography.md, section 15.2) | U |
| Programmatic DOOH | Screen time bought through automated platforms such as Vistar Media, Broadsign and Moving Walls; creative is still delivered to each screen's own specification, so the vendor intake below applies per screen | U |
| Anamorphic 3D | The forced-perspective illusion on corner LED screens, built for one screen's exact geometry and one sweet-spot viewpoint; it cannot be moved to another site and needs the full 3D pipeline (13-motion-graphics-and-3d-production.md, section 8.2) | H |

Vendor sheet intake (H). Send this list to Times OOH, Laqshya, JCDecaux UAE, Backlite, Hypermedia, ELAN or Emaar Malls media for each site, and do not start the edit until every line is answered: pixel map width x height; pixel pitch; brightness by day and by night (nits); refresh rate; orientation; frame rate; codec and container; maximum file size; slot length and loop length; advertisers per loop; whether audio is enabled; whether motion is permitted on roadside faces; whether Arabic is required; who holds the advertising permit (vendor or client); material deadline; proof of play (the network's log that each spot ran) and its format.

Reason for 1:10 scale on static large format: an artwork at full size would be 12,000 x 6,000 mm at 30 ppi, which is 14,173 x 7,087 px, inside Photoshop's 300,000 px limit but outside most print RIPs' comfort (a RIP, raster image processor, is the software that turns the PDF into printer dots); 1:10 at 300 ppi gives the same pixel count in a file the printer expects. Section 6.6 gives the resolution and letter height by distance. OOH formats, type sizes and permits in depth: 20-print-packaging-ooh-and-physical-production.md, section 7.

### 3.10 Automated creative changes: switch off before publishing

Both platforms now alter approved artwork after sign-off unless told not to. Toggle names move often and were not verified in this check (U); confirm them in Ads Manager and Google Ads before each launch.

| Platform | What it changes | Where it is switched off |
|---|---|---|
| Meta, Advantage+ creative (Meta's automated creative enhancements) | Visual touch-ups, image expansion (generated background beyond the frame), background generation, image animation, text improvements (rewritten primary text and headlines), translated text, overlays, added music, relevant comments shown under the ad. Each is a separate toggle and several default to on in many accounts | Ad level, creative options, each toggle |
| Google, automatically created assets | Text customisation (headlines and descriptions written from the landing page), final URL expansion (sending users to other pages of the site), image enhancement (crops and generated variants), auto-generated video built from still images | Campaign level in Performance Max and Demand Gen; supply every ratio and a video so nothing is generated |

House rule (H): approval of a luxury asset is approval of exact pixels and words. An expanded background on a jewellery still invents metal and stone that the brand does not sell, a rewritten headline breaks the voice, and in real estate a generated line can misstate a regulated project detail. After launch, check the preview for each placement and screenshot it into the approval record.

## 4. Web and app specs

### 4.1 Favicon and PWA icon set

The six-file set from Andrey Sitnik's Evil Martians article (read 28 October 2026) is the house base because it covers every browser with the fewest files; the house adds two items for Google Search and Windows. A PWA (progressive web app) is a website installable from the browser through a web manifest and a service worker.

| File | Size | Use | Status |
|---|---|---|---|
| favicon.ico | 16, 32 and 48 px layers in one ICO at the site root | Legacy browsers, anything that requests /favicon.ico blindly, Windows shortcuts (which use the 48) | V (32 px ICO, Evil Martians) H (16 and 48 layers) |
| icon.svg | Square vector carrying a `prefers-color-scheme` media query that turns the mark white on dark tabs | Modern browsers; the black m360 mark disappears on a dark tab without the query | V (method) H (rule) |
| apple-touch-icon.png | 180 x 180, mark scaled to 140 x 140 on a solid background | iOS and iPadOS home screen; Apple rounds the corners, so no transparency and no pre-rounding | V |
| icon-192.png | 192 x 192 | PWA home screen (Chromium requires 192 and 512); also linked with `rel="icon"` and `sizes="192x192"` so Google Search picks a sharp raster | V |
| icon-512.png | 512 x 512 | PWA splash screen | V |
| icon-mask.png | 512 x 512 with `"purpose": "maskable"` (an icon whose content sits inside a safe circle so a launcher can crop it to any shape); keep the mark inside a 409 px diameter circle | Android launchers that crop to a shape | V |
| manifest.webmanifest | JSON listing the icons with `src`, `sizes` and `type` on every entry | Linked with `rel="manifest"`; only for installable sites | V |
| Google Search result icon | Square, at least 8 x 8, larger than 48 x 48 recommended; BMP, GIF, ICO, PNG, JPEG, PPM or TIFF (SVG is not listed) | The icon beside the site in search results; served by the 192 PNG link above | V (developers.google.com/search/docs/appearance/favicon-in-search, 2026-10-29) |

For the m360 mark the touch icon and maskable icon get a white ground; the SVG stays transparent with the dark-scheme rule.

### 4.2 Open Graph and link preview images

Open Graph is the meta tag protocol (the `og:` tags) that Facebook, LinkedIn, WhatsApp and others read to build a link preview.

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Open Graph image | At least 1200 x 630 (1.91:1), minimum 200 x 200, 600 x 315 is the floor for the large preview, 8 MB maximum; JPG or PNG | V | developers.facebook.com/docs/sharing/webmasters/images | 2026-10-28 |
| X summary card with large image | 2:1, 300 x 157 minimum, 4096 x 4096 maximum, under 5 MB | U | developer.x.com returned 402 | not read |
| LinkedIn and WhatsApp previews | Both read `og:image`; WhatsApp fetches images under 300 KB reliably and prefers 1:1 or 1.91:1 | U | no page read | not read |

House (H): one 1200 x 630 image per page, exported at 2400 x 1260 for 2x previews and compressed under 300 KB, with the subject inside the central 1200 x 600 so the 1:1 crops some apps make still read. Markup: 21-web-design-and-digital-craft.md, section 9.3.

### 4.3 App icons

| Platform | Specification | Status |
|---|---|---|
| iOS and iPadOS | One 1024 x 1024 PNG master without alpha in the asset catalogue; Xcode derives every size (the per-size list, 20 to 83.5 pt at 2x and 3x, is no longer hand-exported); iOS 26 layered icons are built in Icon Composer from the same master | T (Apple HIG and Xcode pages had empty bodies; third-party summaries read 2026-10-28) |
| Android adaptive icon | All layers 108 x 108 dp (density-independent pixels; 1 dp is 1 px on a 160 dpi screen); the outer 18 dp on each side is reserved for the launcher mask and parallax; the inner 66 x 66 dp appears within the masked viewport and is never clipped; logo between 48 and 66 dp. At xxxhdpi (4x) that is 432 x 432 px with a 264 px safe area | V (dp) D (px) |
| Google Play icon | 512 x 512, 32-bit PNG with alpha, 1024 KB | V |
| Google Play feature graphic | 1024 x 500, JPEG or 24-bit PNG without alpha | V |
| Android TV banner | 1280 x 720 | V |

Source for Android: developer.android.com/develop/ui/views/launch/icon_design_adaptive and support.google.com/googleplay/android-developer/answer/9866151, read 28 October 2026.

### 4.4 App Store and Play Store screenshots, previews and text

Apple screenshots, from developer.apple.com/help/app-store-connect/reference/screenshot-specifications, read 28 and 29 October 2026 (V). Up to 10 per device size, JPG or PNG, no alpha. Apple names the classes by display type now, so the familiar inch names are given as translation.

| Class (Apple's name) | Required | Portrait sizes | Models |
|---|---|---|---|
| iPhone with Dynamic Island (medium), the 6.1 and 6.3 inch class | Yes, at least one screenshot | 1206 x 2622, 1179 x 2556 | iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro |
| iPhone with Dynamic Island (large), the 6.7 and 6.9 inch class | Falls back to Face ID large | 1320 x 2868, 1290 x 2796, 1260 x 2736 | iPhone 17 Pro Max, 18 Pro Max, Air, 16 Pro Max, 16 Plus, 15 Pro Max, 15 Plus, 14 Pro Max |
| iPhone with Face ID (large), 6.5 inch | Only if the large Dynamic Island set is absent | 1284 x 2778, 1242 x 2688 | 14 Plus, 13 Pro Max, 11 Pro Max, XS Max |
| iPhone with Face ID (medium) | Falls back | 1170 x 2532, 1125 x 2436, 1080 x 2340 | 17e, 16e, 14, 13, 13 mini, 12, 11 Pro, X, XS |
| iPhone with Home Button (large), 5.5 inch | Falls back | 1242 x 2208 | 8 Plus and earlier Plus models |
| iPhone with Home Button (medium), 4.7 inch | Falls back | 750 x 1334 | SE (2nd and 3rd gen), 8, 7, 6s |
| iPhone Duo | Required for apps built with the iOS 27.1 SDK or later from April 2027; the product page then shows a Duo badge | Outer 1398 x 2034, inner 2007 x 2853 | Apple's two-display (folding) class; the page names no model as of 29 October 2026 |
| iPad 13 inch | Yes if the app runs on iPad | 2064 x 2752, 2048 x 2732 | iPad Pro 13 (M5, M4), iPad Air 13 (M4, M3, M2) |
| iPad 11 inch | Falls back to 13 | 1488 x 2266, 1668 x 2420, 1668 x 2388, 1640 x 2360 | iPad Pro 11, iPad Air 11, iPad |
| Mac | Yes for Mac apps | 1280 x 800, 1440 x 900, 2560 x 1600, 2880 x 1800 (16:10) | |
| Apple TV | Yes | 1920 x 1080 or 3840 x 2160 | |
| Apple Vision Pro | Yes | 3840 x 2160 | |
| Apple Watch | Yes | 422 x 514 (Ultra 3 and 4), 416 x 496 (Series 10 to 12), 410 x 502 (Ultra, Ultra 2), 396 x 484 (Series 7 to 9), 368 x 448 (Series 4 to 6, SE) | |

Apple app previews (the short videos at the head of a product page), from developer.apple.com/help/app-store-connect/reference/app-preview-specifications, read 29 October 2026 (V): 15 to 30 s; up to 3 per device size and language; 500 MB maximum; H.264 in .mov, .m4v or .mp4 at a 10 to 12 Mbps target, progressive, up to High Profile Level 4.0, or ProRes 422 HQ in .mov at about 220 Mbps; 30 fps maximum; stereo AAC at 256 kbps (PCM allowed with ProRes), 44.1 or 48 kHz; the poster frame (the still shown before playback) defaults to 5 s in. Accepted resolutions differ from the screenshot sizes: 886 x 1920 portrait (1920 x 886 landscape) for every Dynamic Island, Face ID and iPhone Duo class; 1080 x 1920 for the 5.5 inch class; 750 x 1334 for 4.7 inch; 1200 x 1600 for iPad 13 and 11 inch; 1920 x 1080 for Mac and Apple TV (landscape only); 3840 x 2160 for Vision Pro. App Store Connect scales the largest accepted file down, so one preview at the top resolution covers a class when the interface is identical.

Store text (V, developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information, 2026-10-29): Apple promotional text 170 characters, description 4,000 (plain text), What's New 4,000, keywords 100 bytes with each keyword longer than two characters; app name and subtitle 30 characters each (U; that page does not list them). The keyword field counts bytes, and UTF-8 spends 3 bytes on each Devanagari character and 2 on each Arabic one, so a Hindi keyword field holds about 33 characters and an Arabic one about 50 (D). Google Play (V, support.google.com/googleplay/android-developer/answer/9859152, 2026-10-29): app name 30 characters, short description 80, full description 4,000, the maximum regardless of character type.

Google Play graphics, from the listing assets page (V, 28 October 2026): 2 to 8 screenshots per device type; JPEG or 24-bit PNG without alpha; each side between 320 and 3840 px; the long side at most twice the short side; 16:9 or 9:16 recommended; for the large-screen and "designed for" recommendations supply at least four at 1920 x 1080 or 1080 x 1920; Wear OS 1:1 at 384 x 384 minimum; Android XR 4 to 8 at 8:5 under 8 MB; preview video by YouTube URL, public or unlisted, monetisation off, the first 30 s autoplays muted.

House (H): design screenshots at 1320 x 2868 and 2064 x 2752 and downsample; frame the phone in the image only when the client's product is the hardware, otherwise fill the frame with the screen (Apple's own apps do); cut the app preview from the same edit as the launch film at 886 x 1920, 25 or 30 fps.

### 4.5 PWA manifest

From web.dev/articles/add-manifest (V, 28 October 2026): `name`, `short_name`, `start_url`, `display`, `background_color`, `theme_color` and an `icons` array; Chromium needs at least a 192 x 192 and a 512 x 512 PNG; `"purpose": "any maskable"` marks the icon for Android masks; SVG icons are supported in Chromium but are frozen at install time, so ship a PNG fallback; for pixel-exact rendering supply sizes in 48 dp increments. The 192 and 512 icons are also what Chrome uses to build the splash screen, which is why the 512 carries an opaque ground colour.

### 4.6 Email

Email sizing pages at Litmus, Mailchimp and Campaign Monitor all returned 404 in this check, so the sizing rows are U, consistent across the house's own sends; the BIMI rows were read on the primary page. Dark mode and image blocking in depth: 21-web-design-and-digital-craft.md, sections 10.2 and 10.3.

| Item | Value | Status |
|---|---|---|
| Layout width | 600 to 640 px; 600 is the safe figure for Outlook desktop, 640 for Gmail and Apple Mail | U |
| Images | Export at 2x (1200 to 1280 px wide) and set width in HTML to the 1x value; each image under 200 KB, hero under 300 KB; JPG for photographs, PNG for the mark; no WebP (Outlook desktop does not render it) | U |
| Total weight | Gmail clips any message whose HTML exceeds 102 KB; keep HTML under 80 KB and total load under 1 MB | U |
| Text | Headline and body set as live HTML text, because Apple Mail and Gmail dark modes recolour text and leave images, and because image-blocking clients show nothing | H |
| Alt text | Every image; the mark's alt is "Mask360" | H |
| Dark mode and the mark | Gmail and Outlook invert backgrounds and leave a black mark on black; export the mark as a PNG with a 2 px white keyline, or serve a light variant through `prefers-color-scheme` for Apple Mail | U (client behaviour) H (fix) |
| BIMI logo | BIMI (Brand Indicators for Message Identification) shows the brand logo beside the sender in Gmail, Apple Mail and Yahoo. File: SVG Tiny Portable/Secure (`baseProfile="tiny-ps"`, `version="1.2"`), square, at least 96 x 96, centred on a solid background (transparency may not render), 32 KB or smaller recommended, with a `desc` element | V |
| BIMI certificate | A Verified Mark Certificate (VMC, which needs a registered trademark) or a Common Mark Certificate (CMC); Gmail reads the logo only through the certificate's PEM file | V |
| BIMI authentication | DMARC (the domain policy that tells receivers what to do with mail failing authentication) at `p=quarantine` or `p=reject` with `pct=100`, on mail passing SPF (Sender Policy Framework, the list of servers allowed to send for the domain) or DKIM (DomainKeys Identified Mail, a cryptographic signature on each message) | V |

BIMI source: knowledge.workspace.google.com/admin/security/set-up-bimi, read 29 October 2026. For luxury clients the BIMI logo is the most visible brand asset in email, and the trademark registration behind a VMC takes months in India and the UAE, so start it at brand launch.

### 4.7 Viewports and device pixel ratios, October 2026

The viewport is the visible area of a web page in CSS pixels; the device pixel ratio is the number of physical pixels per CSS pixel. iPhone values from ios-resolution.com (third-party, consistent with Apple's App Store Connect pixel sizes in 4.4), read 28 October 2026; iPhone 18 Pro rows derived from Apple's pixel classes at a ratio of 3. Android physical pixels from 29 October searches of spec aggregators (smartprix.com, kimovil.com; the Google Store and Samsung pages were unreadable); Android CSS widths are derived and should be confirmed on a device.

| Device | CSS width x height | Device pixel ratio | Physical pixels | Status |
|---|---|---|---|---|
| iPhone 18 Pro, 17, 17 Pro | 402 x 874 | 3 | 1206 x 2622 | V (pixels) D (CSS) |
| iPhone 18 Pro Max, 17 Pro Max | 440 x 956 | 3 | 1320 x 2868 | V (pixels) D (CSS) |
| iPhone Air | 420 x 912 | 3 | 1260 x 2736 | V (pixels) T (CSS) |
| iPhone 17e, 16e | 390 x 844 | 3 | 1170 x 2532 | V (pixels) T (CSS) |
| iPhone SE (3rd gen) | 375 x 667 | 2 | 750 x 1334 | V (pixels) T (CSS) |
| Apple iPhone Duo class | measure on a device | 3 assumed | outer 1398 x 2034, inner 2007 x 2853 | V (pixels) U (CSS) |
| Galaxy Z Fold, current model, cover and inner screens | measure on a device | | | U |
| Galaxy Z Flip, current model, inner screen | measure on a device | | | U |
| Pixel Pro Fold, current model | measure on a device | | | U |
| Pixel 10 (Pixel 11, August 2026, listed at 1080 x 2424 or 1080 x 2400 by source) | about 412 x 923 | 2.625 | 1080 x 2424 | T |
| Pixel 10 Pro and Pixel 11 Pro | about 412 x 919 | 3.1 | 1280 x 2856 | T |
| Pixel 10 Pro XL | about 412 x 916 | 3.27 | 1344 x 2992 | T |
| Galaxy S25 and S26 | 360 x 780 | 3 | 1080 x 2340 | T |
| Galaxy S25 Ultra | 384 x 832 | 3.75 | 1440 x 3120 | T |
| iPad Pro 13 (M4) | 1032 x 1376 | 2 | 2064 x 2752 | V (pixels) T (CSS) |
| iPad Air 11 | 820 x 1180 | 2 | 1640 x 2360 | V (pixels) T (CSS) |
| MacBook Air 13 (default scaling) | 1470 x 956 | 2 | 2560 x 1664 | T |
| MacBook Pro 14 (default scaling) | 1512 x 982 | 2 | 3024 x 1964 | T |
| Desktop 1440 | 1440 x 900 | 1 or 2 | | H (test width) |
| Desktop 1920 | 1920 x 1080 | 1 | | H (test width) |

The Android CSS widths cluster at 360, 384 and 412 because manufacturers set density buckets to land there; design the phone layout at 360 and test at 440. Foldables over-index among affluent buyers in Dubai and Mumbai, and their unfolded inner screens are close to square: test every page at a near-square viewport between 600 and 900 CSS px wide (H), because a 4:5 hero laid out for a 402 px phone letterboxes badly there.

### 4.8 House breakpoints

| Name | Min width (CSS px) | Container | Reason |
|---|---|---|---|
| phone | 0 | 100% with 20 px gutters | Covers 360 to 440 |
| phablet | 480 | 100% with 24 px gutters | Large phones in landscape, small tablets |
| tablet | 768 | 100% with 32 px gutters | iPad portrait at 820 CSS px sits just above; folding inner screens land here |
| laptop | 1024 | 100% with 48 px gutters | iPad landscape and 13 inch laptops |
| desktop | 1280 | 1200 px max | The default MacBook widths (1470, 1512) land here |
| wide | 1440 | 1360 px max, hero images to 2560 | 1440 desktop and 2x laptops |
| ultra | 1920 | 1600 px max, no full-bleed type | Measure would exceed 75 characters (03-typography.md, section 6.1) |

Status H. Breakpoints are minimums (mobile-first) and are written in rem in CSS so that a user's zoom moves the layout with the type. The 2560 hero figure sets the photography export in section 10.

### 4.9 Core Web Vitals thresholds

From web.dev/articles/vitals, read 28 October 2026 (V): a page passes when, at the 75th percentile of page loads on mobile and desktop separately, Largest Contentful Paint (LCP, the render time of the largest image or text block in the viewport) is 2.5 s or under, Interaction to Next Paint (INP, the latency from a tap or key to the next frame painted) is 200 ms or under, and Cumulative Layout Shift (CLS, the sum of unexpected layout movement scored by area and distance) is 0.1 or under. The "poor" bands used by Search Console are LCP over 4 s, INP over 500 ms and CLS over 0.25 (U; from the individual metric pages, which this check did not re-read). For a luxury site the LCP element is almost always the hero image, which is why section 10's 300 KB WebP rule exists. Budgets and measurement: 21-web-design-and-digital-craft.md, section 5.

## 5. Video and film specs

### 5.1 Resolutions and frame rates

Frame sizes are those of ITU-R BT.709 (HD), ITU-R BT.2020 (UHD and 8K) and the DCI specification (2K and 4K, section 5.8); the standards were not re-read in this check (U), though these sizes have not changed since publication.

| Name | Pixels | Ratio | Use |
|---|---|---|---|
| HD, 1080p | 1920 x 1080 | 16:9 | Delivery floor for everything |
| 2K DCI | 2048 x 1080 | 1.896:1 container | Cinema (DCP, section 5.8) |
| UHD, 4K | 3840 x 2160 | 16:9 | Masters, YouTube, TV, LED walls |
| 4K DCI | 4096 x 2160 | 1.896:1 container | Cinema |
| 8K UHD | 7680 x 4320 | 16:9 | Archive masters and large LED only |
| Vertical HD | 1080 x 1920 | 9:16 | Reels, Shorts, TikTok, Snapchat, DOOH portrait |
| Vertical 4K | 2160 x 3840 | 9:16 | Vertical masters from a rotated UHD camera |

Frame rates and the reasons (H):

| Rate | When | Reason |
|---|---|---|
| 24 (23.976 for NTSC-derived chains) | Brand films, cinema, anything that should feel like film | The cadence the audience reads as cinema; 23.976 only when a US broadcaster asks |
| 25 | Everything shot in India and the UAE for TV, DOOH and social | Mains frequency is 50 Hz in both countries; 25 and 50 fps avoid rolling flicker under non-cinema lighting, and broadcast and DOOH chains run at 25 |
| 30 (29.97) | US-facing social, screen recordings from 60 Hz devices | Meta's guide states 30 fps for Stories; 25 fps material uploads at 25 (section 3.1) |
| 50 and 60 | Sport, product spins, screen capture, anything with fast pans | Doubles temporal resolution; 50 for 50 Hz countries |
| 100 and 120 | Capture for slow motion only | Conformed to 24 or 25 in the edit (5x or 4x slowdown); delivered at the conformed rate |

### 5.2 Codecs and containers

Apple ProRes target data rates, from the Apple ProRes white paper (April 2022), extracted from the PDF, 28 October 2026 (V). Values in Mbps; GB per hour in brackets for 25p.

| Frame size and rate | 422 Proxy | 422 LT | 422 | 422 HQ | 4444 | 4444 XQ |
|---|---|---|---|---|---|---|
| 1920 x 1080, 24p | 36 | 82 | 117 | 176 | 264 | 396 |
| 1920 x 1080, 25p | 38 (17) | 85 (38) | 122 (55) | 184 (83) | 275 (124) | 413 (186) |
| 1920 x 1080, 30p | 45 | 102 | 147 | 220 | 330 | 495 |
| 1920 x 1080, 50p | 76 | 170 | 245 | 367 | 551 | 826 |
| 2048 x 1080, 24p | 41 | 93 | 134 | 201 | 302 | 453 |
| 3840 x 2160, 24p | 145 | 328 | 471 | 707 | 1061 | 1591 |
| 3840 x 2160, 25p | 151 (68) | 342 (154) | 492 (221) | 737 (332) | 1106 (498) | 1659 (746) |
| 3840 x 2160, 50p | 303 | 684 | 983 | 1475 | 2212 | 3318 |
| 4096 x 2160, 24p | 155 | 350 | 503 | 754 | 1131 | 1697 |
| 4096 x 2160, 25p | 162 | 365 | 524 | 786 | 1180 | 1769 |

Only 4444 and 4444 XQ carry alpha; 422 HQ is the house master and interchange codec (visually lossless 10-bit 4:2:2, decodes everywhere); 422 Proxy at 1080p is the offline proxy (16-editing-colour-grading-and-delivery.md, section 5.2).

| Codec family | Use | Notes | Status |
|---|---|---|---|
| Avid DNxHR (LB, SQ, HQ, HQX, 444) | Masters and interchange when the post house runs Avid; HQX is 10-bit 4:2:2, 444 is 12-bit RGB | MXF OP1a container; data rates are in Avid's DNxHR codec white paper, which this check did not re-read | U |
| H.264 (AVC) | Every platform upload, client review | High profile, Level 4.2 for 1080p60, Level 5.1 for 2160p30; closed GOP of half the frame rate, 2 B-frames, CABAC (section 2.3); Main profile without B-frames for WhatsApp (section 2.10); house delivery bitrates: 1080p25 20 to 30 Mbps, 1080 x 1920 at 25 fps 15 to 20 Mbps, 2160p25 50 to 80 Mbps, all above platform minimums because every platform re-encodes | V (profile rules) H (bitrates) |
| H.265 (HEVC) | Phone capture, 4K delivery where the client's player supports it, HDR | About half the bitrate of H.264 at equal quality; Main 10 profile for HDR; many ad servers still reject it, so H.264 remains the default upload | U |
| AV1 | YouTube's own transcode of 4K uploads, Netflix, Chrome | Royalty-free; not a house delivery codec in 2026 because encoders are slow and client players vary | U |
| VP9 in WebM | Transparent video for Chrome and Firefox (alpha channel) | Pair with HEVC alpha for Safari | U |
| HEVC with alpha in MOV | Transparent video for Safari and iOS | Export from Final Cut Pro, Compressor or Resolve Studio; Chrome does not play it, so serve both with a source element each | U |
| MP4 container rules | Every MP4 delivery | moov atom at the front ("Fast Start") so playback starts before the download ends; no edit lists; square pixels; progressive | V (YouTube page) |

### 5.3 Audio

House (H): masters at 48 kHz, 24-bit WAV or embedded PCM in the ProRes master, stereo with true left and right channels; 5.1 only when a cinema or broadcast deliverable asks. Compressed delivery: AAC-LC at 320 kbps stereo in MP4 for client and social (YouTube's own recommendation is 384 kbps stereo, V, section 2.3; Meta's minimum is 128). Sample rate stays 48 kHz through the whole chain; 44.1 kHz belongs to music distribution and Spotify ads (section 3.8), and a resample at upload is audible as a softening of the top end.

### 5.4 Loudness by platform

Loudness is measured in LUFS (loudness units relative to full scale, defined in ITU-R BS.1770; LKFS is the ATSC name for the same unit), and true peak in dBTP (decibels true peak, the inter-sample peak a meter reconstructs from the digital signal). Integrated loudness is the loudness of the whole programme, gated so that silence does not pull it down; short-term loudness is measured over a sliding 3 s window, and EBU R 128 s1 caps its maximum for adverts because a 20 s spot is too short for loudness range to mean anything. Mixing practice behind these targets: 15-lighting-and-sound.md, section 13.

| Destination | Integrated target | True peak maximum | Status | Source |
|---|---|---|---|---|
| Broadcast, EBU R 128 | -23.0 LUFS; plus or minus 1.0 LU where exact normalisation is impractical (live); plus or minus 0.2 LU QC tolerance for measurement error | -1 dBTP | V | EBU R 128-2023 (version 5, November 2023), tech.ebu.ch/docs/r/r128.pdf, text extracted 2026-10-29 |
| Short-form for broadcast (adverts, promos, up to about 2 min) | -23.0 LUFS programme loudness; maximum short-term loudness -18.0 LUFS (+5.0 LU relative); plus or minus 0.2 LU QC tolerance | -1 dBTP | V | EBU R 128 s1-2020 (version 3, August 2020), tech.ebu.ch/docs/r/r128s1.pdf, text extracted 2026-10-29 |
| Broadcast, India and UAE channels | Each channel sheet names its target: EBU R 128 with s1, or ATSC A/85. Nothing read in this check shows which standard Indian or UAE channels adopt | per sheet | U | channel sheets not read |
| US broadcast (ATSC A/85) | -24 LKFS plus or minus 2 | -2 dBTP | U | ATSC A/85 not read |
| Spotify music | -14 LUFS (normal); loud -11, quiet -19 | -1 dBTP; -2 dBTP if the master is louder than -14 | V | support.spotify.com/us/artists/article/loudness-normalization, 2026-10-28 |
| Spotify audio ads | -16 LUFS plus or minus 1.5 | not stated | V | ads.spotify.com, 2026-10-28 |
| Spotify video ads | RMS -14 dBFS, peak -0.2 dBFS (Spotify states these as RMS values) | | V | ads.spotify.com, 2026-10-28 |
| Apple Music | -16 LUFS (Sound Check) | -1 dBTP | T | apple.com/apple-music/apple-digital-masters (describes the chain without printing the figure), 2026-10-28 |
| YouTube | About -14 LUFS (measured behaviour of its normalisation; no published figure) | -1 dBTP | U | no page publishes it |
| Netflix | -27 LKFS dialogue-gated, plus or minus 2 | -2 dBTP | U | specification page redirected to an empty body |
| Instagram, TikTok, Meta ads | No published target; both apps normalise. Deliver -14 LUFS integrated, -1 dBTP, because quieter files are raised with their noise floor and louder ones are limited | | H | n/a |
| Cinema (DCP) | No LUFS target; mixed to the 85 dB C reference in a calibrated room; trailers under the TASA (Trailer Audio Standards Association) Leq(m) 85 ceiling | | U | TASA not read |
| DOOH and event LED | Usually silent; where audio is enabled, -16 LUFS so that the spot does not spike above ambient | | H | n/a |

Rule for India and UAE traffic: read the target off the channel sheet, mix to it, and name the file with it (section 10.5), because a wrong target gets a spot rejected at the traffic desk.

### 5.5 Aspect ratios and the reframe matrix

What survives when one frame becomes another (D, arithmetic). Percentages are the share of the source width (or height) that remains after a centre crop; the pixel pairs are for a 1920 x 1080 or 1080 x 1920 source and, in brackets, a 3840 x 2160 source.

| From | To 16:9 | To 4:5 | To 1:1 | To 9:16 |
|---|---|---|---|---|
| 16:9 (1920 x 1080) | full | keep 70.3% of width: 1350 x 1080 (2700 x 2160) | keep 56.25% of width: 1080 x 1080 (2160 x 2160) | keep 31.6% of width: 608 x 1080 (1215 x 2160) |
| 9:16 (1080 x 1920) | keep 31.6% of height: 1080 x 608 | keep 70.3% of height: 1080 x 1350 | keep 56.25% of height: 1080 x 1080 | full |
| 4:5 (1080 x 1350) | keep 45% of height: 1080 x 608 | full | keep 80% of height: 1080 x 1080 | keep 70.3% of width: 759 x 1350 |
| 1:1 (1080 x 1080) | keep 56.25% of height: 1080 x 608 | keep 80% of width: 864 x 1080 | full | keep 56.25% of width: 608 x 1080 |

The number that decides the shoot: a 9:16 cut from a UHD 16:9 master is 1215 x 2160, which is larger than the 1080 x 1920 delivery, so a 4K landscape shoot can deliver a full-resolution vertical without a second camera. A 9:16 cut from a 1080p master is 608 x 1080, which Meta upscales and softens. House rule (H): shoot UHD or larger, frame for 4:5 with the subject inside the central 56% of the width, and mark protect lines (crop guides for each delivery ratio) for 1:1 and 9:16 on the monitor. Where the campaign is vertical-first, shoot vertical and plan the 16:9 as a letterboxed or split-screen edit, because a 16:9 cut from vertical keeps 31.6% of the picture. Reframe strategy in the edit: 16-editing-colour-grading-and-delivery.md, section 12.6.

### 5.6 Safe zones

Action safe and title safe are the television conventions for the area a set may crop and the area where text must stay: SMPTE ST 2046-1 sets action safe at 93% of the frame (3.5% inset on each edge) and title safe at 90% (5% inset) for 16:9 (U; the standard was not re-read in this check). At 1920 x 1080 that is 67 px sides and 38 px top and bottom for action, 96 px and 54 px for title (D). Platform overlays are the larger problem on vertical video:

| Platform (1080 x 1920 canvas) | Top | Bottom | Left | Right | Status |
|---|---|---|---|---|---|
| Instagram Reels and Stories, Facebook Reels and Stories | 269 (14%) | 672 (35%) | 65 (6%) | 65 (6%) | V (percentages) D (pixels) |
| TikTok | about 290 | about 480 | about 60 | about 200 | T |
| YouTube Shorts | about 120 | about 384 (20%, title and channel) | 40 | about 130 (buttons) | T |
| Pinterest idea ads | 270 | 440 | 65 | 195 | V |
| Snapchat | 150 | 150 (about 450 for collection ads) | 0 | 0 | T |
| House universal vertical safe box | 290 | 672 | 65 | 200 | H: the union of the above, an 815 x 958 px box from x 65 to 880 and y 290 to 1248; its centre sits at (472, 769), 68 px left of and 191 px above the frame centre, so titles are centred on the box |

Reason for a single universal box: the same vertical cut runs on all five platforms in almost every Mask360 plan, and a second export per platform is a second place for a version error. Titles, prices, dates and the mark live inside the box; the picture fills the frame. Text position craft: 17-short-form-social-and-platform-craft.md, section 2.3; per-platform detail in the edit: 16-editing-colour-grading-and-delivery.md, section 12.7.

### 5.7 Reframe and safe zone checklist before export

House (H): (1) Masters at UHD 16:9 or vertical UHD in ProRes 422 HQ, 25 fps (24 for brand film), 48 kHz 24-bit, legal range (video levels 16 to 235 in 8-bit, 64 to 940 in 10-bit; 16-editing-colour-grading-and-delivery.md, section 7.4), SDR Rec.709 unless section 5.12 says otherwise. (2) Three cuts from the master: 4:5 at 1440 x 1800 (Meta feed); 9:16 at 1440 x 2560 (Meta) and 1080 x 1920 (TikTok, Shorts, Snapchat, Pinterest, DOOH); 16:9 at 3840 x 2160 (YouTube, web, LED). (3) Text inside the universal box on vertical and inside title safe on 16:9. (4) Loudness per section 5.4, one file per target, named with the target (section 10.5). (5) First frame a readable composition, because feeds autoplay muted and DOOH loops are caught mid-way; last frame holds the mark for 1 s on social and 2 s on DOOH. (6) A separate WhatsApp encode (section 2.10).

### 5.8 DCP

The Digital Cinema Package is the JPEG 2000 and PCM file set, with XML playlists, that every cinema server ingests. Values from the DCI specification as summarised on the Digital Cinema Package Wikipedia article (en.wikipedia.org/wiki/Digital_Cinema_Package, read 28 October 2026); the DCI site itself returned an empty body, so the status is T.

| Item | Value |
|---|---|
| Containers | 2K at 2048 x 1080; 4K at 4096 x 2160 |
| Flat (1.85:1) | 1998 x 1080 at 2K; 3996 x 2160 at 4K |
| Scope (2.39:1) | 2048 x 858 at 2K; 4096 x 1716 at 4K |
| Picture codec | JPEG 2000, 12 bits per component, X'Y'Z' colour with gamma 2.6, 250 Mbit/s maximum |
| Frame rates | 24, 25, 30, 48, 50, 60 at 2K; 24, 25, 30 at 4K. Interop DCPs (the older pre-standard packaging) are limited to 24 (and 48 at 2K) and are deprecated in favour of SMPTE DCPs (packaged to the SMPTE ST 429 family, ST 429-2 for packaging) |
| Audio | Linear PCM, 24-bit, 48 or 96 kHz, up to 16 channels |

House (H): cinema advertising in India (PVR INOX, Cinepolis) and the UAE (VOX, Reel, Roxy) is delivered as a 2K flat SMPTE DCP at 24 fps unless the exhibitor's sales house specifies otherwise, with a 5.1 mix where the brand film has one and a stereo fold-down otherwise; the exhibitor supplies the ingest sheet, the KDM policy (a KDM, Key Delivery Message, is the key file that opens an encrypted DCP for one server and one time window) and the spot lengths it sells (20, 30, 40 and 60 s are the common slots, U).

How Indian cinema advertising runs (all U; none read in this check): inventory is sold through the exhibitors' advertising sales teams and through the digital cinema networks UFO Moviez and Qube Cinema (Qube Wire for delivery), each of which takes a master (ProRes 422 HQ or a DCP) and makes its own deliverable, so ask which one the media plan uses before building a DCP. Ad films shown in Indian cinemas need a CBFC (Central Board of Film Certification) certificate; confirm the current e-Cinepramaan online process and its lead time and book it into the schedule before the release date. UAE: cinema ads need UAE Media Council content approval, obtained through the exhibitor. Specifications in the edit: 16-editing-colour-grading-and-delivery.md, section 12.8.

### 5.9 Broadcast delivery, India and UAE

No Indian or UAE broadcaster publishes a delivery sheet that could be read in this check, and the sheets differ by channel group, so the values are U and the rule is to ask the channel's traffic desk for its current sheet. The defaults that have matched every sheet the house has seen: 1920 x 1080, 16:9, 25 fps, either 1080i50 (interlaced, upper field first) or 1080p25 as the channel states; Rec.709, legal range; ProRes 422 HQ in MOV or XDCAM HD422 50 Mbps in MXF; audio 48 kHz 24-bit, stereo on channels 1 and 2; loudness to the target the sheet names (section 5.4: R 128 with s1 at -23 LUFS, -18 LUFS maximum short-term, -1 dBTP; or A/85 at -24 LKFS, -2 dBTP); slate with clock, title, duration, agency and client; a 10-digit Indian Broadcasting and Digital Foundation (IBDF) or channel-issued ad code where the channel requires one; UAE channels (MBC, Dubai Media Incorporated, Abu Dhabi Media) additionally require the National Media Council (now the UAE Media Council) permit number on the slate. Confirm each item against the sheet (16-editing-colour-grading-and-delivery.md, section 12.9).

### 5.10 Caption formats and limits

| Format | What it is | Limits and styling | Status |
|---|---|---|---|
| SRT (SubRip) | Plain text: sequence number, timecode in hh:mm:ss,mmm, text | No styling beyond basic tags most players ignore; the universal upload format for YouTube, Meta, LinkedIn | U |
| WebVTT (Web Video Text Tracks) | SRT's web successor: timecodes with a full stop, optional positioning and CSS-like styling | Used by HTML5 video and YouTube; position and line settings let a caption clear a platform overlay | U |
| SCC (Scenarist Closed Caption) | CEA-608 broadcast captions for US delivery | 32 characters per row, up to 4 rows, pop-on or roll-up; limited colours and positions | U |
| TTML (Timed Text Markup Language) and IMSC (its W3C subtitle profile) | XML timed text for broadcast and streaming | Netflix requires TTML with font size at 100% and positions in percentages | V (Netflix general requirements, 2026-10-28) |
| Burned-in (open) captions | Rendered into the picture for social | Inside the universal safe box; cap height at least 40 px on a 1080-wide frame; 32 to 38 characters per line; two lines maximum | H |

Reading limits by language, from Netflix's timed text style guides (cps is characters per second; SDH, subtitles for the deaf and hard of hearing, carry sound cues and run faster):

| Language | Characters per line | Lines | Adult | Children | Status | Source | Checked |
|---|---|---|---|---|---|---|---|
| English | 42 | 2 | 20 cps | 17 cps | V | partnerhelp.netflixstudios.com, English Timed Text Style Guide | 2026-10-28 |
| Hindi | 42 | 2 | 17 cps (SDH 20) | 13 cps (SDH 17) | V | partnerhelp.netflixstudios.com/hc/en-us/articles/215600497-Hindi-Timed-Text-Style-Guide | 2026-10-29 |
| Arabic | read the Netflix Arabic guide before the first Arabic job | | | | U | Arabic guide URL returned 404 | not read |

Minimum event duration is five sixths of a second (20 frames at 24 fps) and maximum 7 s (English guide, V). The house adopts each language's own limits for every subtitle file in that language: Netflix sets Hindi at 17 cps against English at 20, so English timing applied to a Hindi file runs about 18% faster than Hindi viewers are expected to read (D).

Right-to-left rules (H): in SRT and VTT, add a right-to-left mark (RLM, U+200F, an invisible character that sets direction) at the start and end of any Arabic line that begins or ends with Latin text, digits or punctuation, so the full stop and question mark sit at the left end where Arabic readers expect them. For burn-in, set Arabic in a face whose x-height matches the Latin face, one size step up (03-typography.md, section 15.2). Captions craft and bilingual layouts: 16-editing-colour-grading-and-delivery.md, sections 11.2 and 11.5; accessibility: 11-accessibility-and-inclusive-design.md, section 10.2.

### 5.11 Cinema, event and DOOH LED walls

Pixel pitch is the distance in millimetres between LED centres; it sets the minimum viewing distance and the native resolution of the wall. Values are installer practice; no installer data sheet was read in this check (U).

| Pitch | Typical use | Comfortable minimum viewing distance | Brightness |
|---|---|---|---|
| P1.2 to P1.9 | Broadcast studios, virtual production volumes, boardroom walls | 1.5 to 3 m | About 800 to 1,500 nits (indoor) |
| P2.5 to P2.9 | Indoor stage backdrops, luxury retail windows, mall atria | 3 to 5 m | About 800 to 1,500 nits; more for windows in sun |
| P3.9 to P4.8 | Event stages, conference halls, indoor DOOH | 4 to 8 m | About 800 to 1,500 nits |
| P6 to P10 | Outdoor roadside and facade walls | 10 to 25 m | About 5,000 nits or more, for Gulf daylight |

A nit is one candela per square metre, the unit of screen brightness. Rules of thumb from the installers: minimum viewing distance in metres is about the pitch in millimetres; the distance at which pixels disappear is about three times that. Native resolution is wall width in millimetres divided by the pitch: a 12 x 4 m wall at P3.9 is 3077 x 1026 px (D), which is why "deliver at 1920 x 1080 and we will scale" always softens the picture; ask for the pixel map and deliver 1:1.

For walls that will be filmed or photographed at an event, ask for a refresh rate (how many times a second the LED drivers redraw) of 3,840 Hz or higher and set the camera shutter to a division of the wall's refresh, because a low refresh shows as rolling scan bands on camera (U). Design outdoor night slots on dark grounds, because full-field white glares at 5,000 nits after sunset; the m360 mark goes white on black on every LED face (H).

Flash safety (V for the definitions, w3.org/TR/WCAG22, 2026-10-28): the general flash threshold applies when concurrent flashes cover more than 25% of any 10 degree visual field, which WCAG approximates for screens as a 341 x 256 px rectangle on a 1024 x 768 display. A 10 degree field at viewing distance d is about 0.175 x d across, so on a wall seen from 15 m it is about 2.6 x 2.0 m, and a flashing block larger than about 1.3 m² crosses the area limit (D). Run every strobe edit through PEAT (the Photosensitive Epilepsy Analysis Tool from the Trace Center, University of Maryland) or Harding before delivery (11-accessibility-and-inclusive-design.md, section 7.3).

Event playback servers and their codecs: Resolume Arena plays DXV3 (Resolume's GPU-decoded codec) natively, disguise plays HAP and HAP Q (a GPU-decoded codec family for media servers), Brompton and Novastar processors take an HDMI or SDI feed from the server; the house delivers a ProRes 422 HQ master and lets the playback operator transcode, because each server's codec is lossy in its own way. Minimum text height on a wall: 30 wall pixels, which at P3.9 is about 12 cm, readable at 15 m (H; section 6.6 gives letter height by distance). Loop lengths for DOOH follow section 3.9: 10 s and 15 s, no fades, the mark in every frame.

### 5.12 HDR on social

iPhones record HDR (HLG or Dolby Vision) by default, and Instagram, Threads and YouTube can display HDR video and gain-map HDR photos (platform display behaviour U; not re-verified in this check). Influencer and behind-the-scenes footage arrives HDR, sits beside SDR brand assets in a grid or carousel, and the HDR clip's whites glare beside the brand's.

| Decision | Rule | Status |
|---|---|---|
| Default social delivery | SDR Rec.709 with colour tags 1-1-1 (the ITU-T H.273 codes for BT.709 primaries, transfer and matrix; 16-editing-colour-grading-and-delivery.md, section 12.5) | H |
| Phone HDR footage | Convert to SDR in Resolve before the edit, or switch HDR capture off on phones used for behind-the-scenes (iPhone: Settings, Camera, Record Video, HDR Video) | H |
| HDR delivery | Only for a campaign graded HDR end to end: HLG (Hybrid Log-Gamma, the HDR transfer function built for broadcast and phones) with tags 9-18-9 for phone-first platforms; graphics and supers at 203 cd/m² reference white (the level for diffuse and graphics white in ITU-R BT.2408; 13-motion-graphics-and-3d-production.md, section 12.8); an SDR grade delivered alongside | H |
| Stills | Export SDR sRGB JPEG by default; use a gain-map HDR JPEG (an SDR image plus a map that tells HDR screens how far to brighten each area: Apple Adaptive HDR, Android Ultra HDR, ISO 21496-1) only on purpose, and never mixed with SDR frames in one carousel | H |

Reason: the eye adapts to the brightest thing in view, so one HDR frame in a grid of SDR brand assets makes the brand look grey.

## 6. Print specs

Print fundamentals in depth (resolution, colour, binding, paper, finishes): 20-print-packaging-ooh-and-physical-production.md, sections 1 to 3; print colour: 04-colour.md, sections 4 and 10.

### 6.1 ISO 216 A and B series, and envelopes

ISO 216 (2007) defines the A series from a 1 m² sheet with a 1:1.414 (square root of two) ratio, so that each halving keeps the proportion; the B series is the geometric mean between A sizes and is the poster and book series. Values from en.wikipedia.org/wiki/ISO_216, read 28 October 2026, which reproduces the standard's tables (V for the arithmetic, which is deterministic; DL is T).

| A series | mm | B series | mm | Envelopes (ISO 269) | mm |
|---|---|---|---|---|---|
| A0 | 841 x 1189 | B0 | 1000 x 1414 | C4 (holds flat A4) | 229 x 324 |
| A1 | 594 x 841 | B1 | 707 x 1000 | C5 (A4 folded once) | 162 x 229 |
| A2 | 420 x 594 | B2 | 500 x 707 | C6 (A4 folded twice) | 114 x 162 |
| A3 | 297 x 420 | B3 | 353 x 500 | DL (A4 folded in thirds) | 110 x 220 |
| A4 | 210 x 297 | B4 | 250 x 353 | | |
| A5 | 148 x 210 | B5 | 176 x 250 | | |
| A6 | 105 x 148 | | | | |
| A7 | 74 x 105 | | | | |
| A8 | 52 x 74 | | | | |

US sizes (U: ANSI/ASME Y14.1 and common trade names; not read): Letter 8.5 x 11 in (215.9 x 279.4 mm), Legal 8.5 x 14 in (215.9 x 355.6), Tabloid or Ledger 11 x 17 in (279.4 x 431.8), ANSI C 17 x 22, D 22 x 34, E 34 x 44 in. India and the UAE both print on A sizes; Letter appears only when a US client sends a file.

### 6.2 Business cards by region

From en.wikipedia.org/wiki/Business_card (read 28 October 2026), which states that there is no international standard; the table reflects trade practice as listed there (V as listed).

| Size (mm) | Where |
|---|---|
| 85 x 55 | UK, Ireland, France, Germany, Italy, Spain, Netherlands, Switzerland, Turkey and most of Western Europe |
| 90 x 55 | India (also 90 x 50), Australia, New Zealand, Denmark, Norway, Sweden, Taiwan, Vietnam |
| 91 x 55 | Japan (the 90 x 54 sometimes quoted for Japan is the China, Hong Kong, Malaysia, Singapore size) |
| 90 x 54 | China, Hong Kong, Malaysia, Singapore |
| 88.9 x 50.8 (cut as 89 x 51) | United States, Canada |
| 90 x 50 | Russia, Poland, Czech Republic, Hungary, Brazil, Mexico, South Africa, South Korea, Israel and India (second convention) |
| 85.60 x 53.98 | ISO/IEC 7810 ID-1 (credit card) |
| UAE | No listed standard; Dubai printers default to 90 x 55 and 85 x 55 (U) |

House (H): 85 x 55 for every Mask360 and client card in both countries, because it is the Western European trade size and reads European; it is close to ID-1 (85.60 x 53.98) but about 1 mm taller, so cut 85.6 x 54 when a card must fit a card slot exactly. 3 mm bleed; 4 mm safe; 350 gsm (grams per square metre, the paper weight specification) minimum, 540 gsm or duplexed 2 x 270 for luxury clients (GF Smith Colorplan and Mohawk Superfine carry these weights, U). Stationery craft: 20-print-packaging-ooh-and-physical-production.md, section 9.1.

### 6.3 Postcards, posters and one sheets

| Item | Size | Status | Source |
|---|---|---|---|
| Postcard, A6 | 105 x 148 mm | V | ISO 216, as 6.1 |
| Postcard, US | 4 x 6 in (101.6 x 152.4 mm); 5 x 7 in (127 x 177.8) | U | trade practice; not read |
| Poster A3, A2, A1, A0 | 297 x 420, 420 x 594, 594 x 841, 841 x 1189 mm; bleed 5 mm, safe 10 mm at A2 and up (section 6.5) | V (sizes) H (bleed) | ISO 216, as 6.1 |
| Poster 24 x 36 in | 609.6 x 914.4 mm; the US gallery and retail standard | U | trade practice; not read |
| One sheet (cinema) | 27 x 40 in (685.8 x 1016 mm) | U | trade practice; not read |
| Bus shelter six-sheet and JCDecaux mupi | 1200 x 1800 mm (six-sheet); 1185 x 1750 mm visible (2 m² mupi); PDF/X-4 or TIFF per the vendor sheet | U | vendor sheets unreadable |
| 48-sheet | 6096 x 3048 mm (20 x 10 ft) | U | trade practice; not read |
| 96-sheet | 12192 x 3048 mm (40 x 10 ft) | U | trade practice; not read |

### 6.4 Hoardings, transit and exhibition

Section 3.9 gives the Indian and UAE hoarding sizes and the vendor rule. Exhibition and event items are supplier practice; no supplier sheet was read in this check (U).

| Item | Size | Notes |
|---|---|---|
| Roll-up (pull-up) banner | 850 x 2000 mm visible; design at 850 x 2100 and keep the lowest 100 mm free, because it disappears into the cassette and the graphic is clamped there | The 800 x 2000 and 1000 x 2000 variants exist; ask the supplier |
| Shell scheme panel (Octanorm system) | About 950 x 2380 mm visible per panel between 1 m posts; 2.5 m post height | Panels butt with a 40 mm post between, so a graphic that spans panels needs the post gap in the artwork |
| Feather and teardrop flags | 2.6, 3.4 and 4.5 m heights; the printable area is about 600 x 2000 mm on the 2.6 m flag | Sewn pocket on the leading edge takes 50 mm |
| Fabric backdrop (step and repeat) | 3 x 2.4 m and 4 x 2.4 m with a 20 mm seam allowance on tension frames | Dye-sublimation on polyester; design at 1:4 at 300 ppi |
| Lamp post banner, Dubai roads | About 1.5 x 3 m per face (RTA-permitted sizes vary by road) | Through ELAN, Hypermedia, Backlite |

### 6.5 Bleed and safe area by product

House values (H); the reasons are in the last column, and 20-print-packaging-ooh-and-physical-production.md, section 1.9, covers marks and slug.

| Product | Bleed | Safe (inset from trim) | Reason |
|---|---|---|---|
| Business card, postcard | 3 mm | 4 mm | Guillotine drift on small stacks is about 1 mm; 3 covers it both ways and leaves margin |
| Brochure, A4 and A5 | 3 mm | 5 mm; 8 mm at the spine for perfect binding | Folding and binding add their own drift to the cut |
| Poster, A2 and larger | 5 mm | 10 mm | Larger sheets drift more on the flatbed |
| Large format, banners, hoardings | 10 to 25 mm (banners); 100 mm (hoardings) | 50 mm (banners); 300 mm (hoardings) | Hems, eyelets and the frame cover the edge |
| Packaging | 3 mm beyond the dieline; glue flaps per dieline | 5 mm from every crease and cut | Creases move the print by up to 1 mm |
| Vehicle wrap | 50 mm per panel edge | 20 mm clear of door seams and handles | Panels are trimmed on the vehicle |

### 6.6 Resolution and letter height by viewing distance

The eye resolves about one minute of arc (1/60 of a degree). The pixel density that reaches that limit at a viewing distance d in inches is about 3438 / d ppi (3438 is 1 / tan(1/60 degree)). The house rounds down to the nearest practical figure because RIPs and dot gain (the spread of ink on paper that darkens and softens tones) soften the image anyway. Letter height follows the sign-trade rules in 20-print-packaging-ooh-and-physical-production.md, section 7.4: minimum legible cap height about d/360 (about 28 mm per 10 m, the limit for a sturdy sans in good conditions, consistent with the US Sign Council's legibility index of about 30 ft per inch, U, USSC guideline not read) and impact cap height about d/120 (about 83 mm per 10 m) for at-a-glance reading. Condensed, light, script and high-contrast didone faces need more.

| Product | Viewing distance | Theoretical limit | House export | Minimum cap height (d/360) | Impact cap height (d/120) |
|---|---|---|---|---|---|
| Business card, book, brochure | 30 to 40 cm | 215 to 286 ppi | 300 ppi at size | about 1 mm; the house floor is 1.5 mm (section 8.3) | n/a |
| A3 and A2 poster | 0.7 to 1 m | 87 to 125 ppi | 200 to 300 ppi | 2 to 3 mm | 6 to 8 mm |
| A1 and A0 poster | 1 to 2 m | 44 to 87 ppi | 150 ppi | 3 to 6 mm | 8 to 17 mm |
| Roll-up and exhibition panel | 1.5 to 3 m | 29 to 58 ppi | 100 to 150 ppi | 4 to 8 mm | 13 to 25 mm |
| Bus shelter, mupi | 3 to 15 m | 6 to 29 ppi | 100 ppi | 8 to 42 mm | 25 to 125 mm |
| Hoarding | 10 to 60 m | 1.5 to 9 ppi | 20 to 30 ppi at size (300 ppi at 1:10) | 28 to 167 mm | 83 to 500 mm |
| Unipole at approach | 100 to 120 m | under 1 ppi | 20 to 30 ppi at size | 280 to 330 mm | 0.8 to 1.0 m |
| LED wall | per section 5.11 | native pixel map | 1:1 | 30 wall pixels at least | |

Status: D for the arithmetic, H for the exports. Copy rule (H): seven words or fewer on roadside faces, because at 60 km/h a board legible from 150 m is in view for about nine seconds and at 100 km/h for under six, of which a driver spares a fraction (20-print-packaging-ooh-and-physical-production.md, section 7.5).

### 6.7 Paper weights

Trade ranges, no mill page read in this check (U); mills, caliper and bulk in 20-print-packaging-ooh-and-physical-production.md, sections 2.1 and 2.4. The same gsm is thicker in uncoated stock than coated because coating is dense. 70 to 90 gsm: office paper and the inner pages of long documents (newsprint runs 45 to 52). 100 to 130: brochure inner pages; letterhead at 100 to 120. 150 to 170: flyers, magazine covers, menu inserts. 250 to 300: covers, folders, menus, invitations. 350 to 400: business cards, hang tags. 540 to 700: luxury cards (GF Smith Colorplan 540 and 700; duplexed 2 x 270 or 2 x 350).

### 6.8 Colour profiles and PDF/X

Profile names and characterisations as published in the ICC profile registry and by the European Color Initiative; not re-read in this check (U), and consistent with 04-colour.md, sections 4 and 10. FOGRA (the German graphic technology research association) publishes the characterisation data sets that the offset profiles are built on.

| Profile | Standard | Use |
|---|---|---|
| PSO Coated v3 (FOGRA51) | ISO 12647-2:2013 | Current European coated offset reference; the profile to ask for in 2026 |
| ISO Coated v2 (FOGRA39) | ISO 12647-2:2004 | What most Indian and UAE presses still ask for; safe default when the printer names nothing |
| PSO Uncoated v3 (FOGRA52) | ISO 12647-2:2013 | Uncoated stock, letterhead and luxury uncoated cards |
| GRACoL 2013 (CRPC6) | CGATS 21-2 | US sheetfed; use only for US printers |
| SWOP 2013 (CRPC5) | CGATS 21-2 | US web offset. Adobe's default "U.S. Web Coated (SWOP) v2" is the wrong profile for every Indian and UAE job; change it under Edit, `Color Settings` (Adobe's own label) |
| ISOnewspaper26v4 | ISO 12647-3 | Newsprint, 240% total ink (section 6.12) |
| Japan Color 2011 Coated | ISO 12647-2 | Japanese printers |
| sRGB IEC61966-2-1 | IEC 61966-2-1 | Every screen deliverable |
| Adobe RGB (1998) and ProPhoto RGB | | Photography masters (section 10) |

PDF/X is the ISO 15930 family of print-exchange PDF subsets; versions as summarised at en.wikipedia.org/wiki/PDF/X (T, read 28 October 2026):

| Version | Standard | PDF base | Allows | House use |
|---|---|---|---|---|
| PDF/X-1a:2001 and 2003 | ISO 15930-1 and 15930-4 | 1.3 and 1.4 | CMYK plus spot only; everything flattened; fonts embedded | When the printer insists; packaging converters often do |
| PDF/X-3:2002 and 2003 | ISO 15930-3 and 15930-6 | 1.3 and 1.4 | Adds ICC-managed RGB and Lab | Rare now |
| PDF/X-4 (2008, revised 2010) | ISO 15930-7 | 1.6 | Live transparency, optional content (layers), ICC-managed colour, output intent | The house default for offset and digital |
| PDF/X-5 (2008, 2010) | ISO 15930-8 | 1.6 | External graphic content and external output profile | Publishers with shared image libraries |
| PDF/X-6:2020 | ISO 15930-9 | 2.0 | PDF 2.0 features, partial exchange variants 6n and 6p | Ahead of most presses in India and the UAE in 2026; ask before sending |

House (H): export from InDesign with the PDF/X-4:2010 preset, output intent set to the printer's named profile, bleed per section 6.5, crop marks offset 3 mm, all fonts embedded (subset above 0% is fine), images untouched (no downsampling) for print.

### 6.9 Barcodes

GS1 pages returned 403 and an HTML stub in place of the General Specifications PDF in this check, so the values are U, carried from the GS1 General Specifications and to be verified there before a packaging job: EAN-13 nominal size at 100% magnification is 37.29 x 25.93 mm with an X-dimension (the width of the narrowest bar) of 0.330 mm; permitted magnification 80% (29.83 x 20.73 mm) to 200% (74.58 x 51.86 mm) for retail point of sale; quiet zones (the blank margins a scanner needs) of 11 X-dimensions on the left and 7 on the right; bar height may not be truncated below the nominal for the magnification without the retailer's agreement. Black bars on white or a light background; red and gold bars fail because the scanner's red laser reads red as white; print the barcode in 100% black (K) only; GS1 India (gs1india.org) issues Indian company prefixes and GS1 UAE (gs1ae.org) the UAE ones. QR codes on packs and OOH: 20-print-packaging-ooh-and-physical-production.md, sections 6.11 and 7.6.

### 6.10 Label font minimums, India and UAE

- India, food (V, FSSAI Compendium of the Food Safety and Standards (Labelling and Display) Regulations 2020, version of 23 September 2021, fssai.gov.in, text extracted 2026-10-29): Regulation 5(3) Table I, as substituted and operational from 17 November 2021, sets the minimum height of every numeral and letter of the mandatory declarations on the principal display panel (PDP, the face of the pack the consumer sees at retail), by PDP area: up to 200 cm² 1 mm (2 mm when blown, formed, moulded or perforated on the container); above 200 to 500 cm² 2 mm (4); above 500 to 2500 cm² 3 mm (5); above 2500 cm² 6 mm (8). Letter width at least one third of the height (except the numeral 1 and the letters i, I and l). The proviso hands net weight, retail sale price, date of expiry, best before or use by, and consumer care details to the Legal Metrology rules; all other mandatory food text (ingredients, nutrition, and the rest) follows Table I. Schedule II declarations (specified ingredients and additives) are at least 3 mm based on the letter l (1 mm on packs up to 30 cm² that contain sweeteners); declarations on the crown of a returnable glass bottle at least 1 mm. The veg and non-veg symbol scales with the PDP: circle diameter 3, 4, 6 and 8 mm (non-veg triangle side 2.5, 3.5, 5 and 7 mm; enclosing square side 6, 8, 12 and 16 mm) for up to 100, 100 to 500, 500 to 2500 and above 2500 cm². The original 2020 Table I (up to 100 cm² 1 mm; 100 to 500 cm² 2; 500 to 2500 cm² 4; above 2500 cm² 6) is superseded. The Regulations were issued on 17 November 2020; display requirements applied from 1 January 2022 in most summaries, 1 July 2022 in one (T, studycafe.in and freyrsolutions.com, 2026-10-29). In July 2024 FSSAI approved showing total sugar, salt and saturated fat in bold and in a larger font on the nutrition panel; check the notified amendment before artwork (T, as above).
- India, all packaged goods (U): Rule 7 of the Legal Metrology (Packaged Commodities) Rules, 2011, as substituted by G.S.R. 629(E) of 23 June 2017 (in force 1 January 2018) and corrected by G.S.R. 1373(E) of 7 November 2017, sets letter heights for the declarations by PDP area. The likely current values are the four bands that the FSSAI's original 2020 table reproduced: up to 100 cm² 1 mm; 100 to 500 cm² 2 mm; 500 to 2500 cm² 4 mm; above 2500 cm² 6 mm (blown or moulded 2, 4, 6 and 8 mm), with character width at least one third of the height. A five-band reading (1.0, 1.5, 2.5, 4.0 and 6.0 mm, from taxclue.in) does not match it; read the gazette text of G.S.R. 629(E) before artwork is released. On a cylinder the PDP is 40% of height times circumference (T, taxclue.in, 2026-10-29).
- UAE (U): labelling of prepackaged food follows UAE.S GSO 9 (labelling of prepackaged foodstuffs) and UAE.S GSO 2233 (nutritional labelling), administered by the Ministry of Industry and Advanced Technology (MoIAT, which absorbed ESMA in 2020) with municipality enforcement (Dubai Municipality, ADAFSA in Abu Dhabi). Arabic is mandatory, with other languages optional alongside; minimum letter heights follow the GSO standard's table. Cosmetics follow UAE.S GSO 1943.
- House rule in both countries (H): no mandatory text below the higher of 1.5 mm cap height or the applicable table value; Arabic and Devanagari set from a typeface with matching x-height to the Latin; the regulatory panel laid out before the design panel, because it cannot move once approved. Food packaging in depth: 20-print-packaging-ooh-and-physical-production.md, sections 6.9 and 6.10.

### 6.11 Finishes and special inks

Luxury cards, invitations, menus and packaging carry these weekly. Finisher minimums vary by die, foil and stock: the values are typical and are confirmed with the finisher on every job. The craft and the taste of each finish are in 20-print-packaging-ooh-and-physical-production.md, section 3.

| Finish | File preparation | Typical minimums | Status |
|---|---|---|---|
| Hot foil (a heated die presses metallic or pigment foil from a carrier film onto the sheet) | Foil art on its own spot channel (a separate channel or layer holding the art for one ink or finish) named for the foil (for example `FOIL_GOLD`), 100% solid, vector, set to overprint; no tints, gradients or rich builds | Lines and gaps at least about 0.25 mm (lines under 0.2 to 0.3 mm break); serif type at least about 8 pt; register to print plus or minus 0.3 to 0.5 mm, so foil never butts a printed edge | T (20, section 3.1) U (type size) |
| Blind emboss and deboss (raised and pressed in, with no ink) | A separate die plate file, 100% black vector at 1:1, named for the die; registered emboss aligned to print in the same file set | Detail at least about 0.5 to 1 mm; about 3 mm clear of folds and trim; registered emboss tolerance about plus or minus 0.5 mm; cotton and uncoated stocks of 250 to 400 gsm emboss best | T (20, section 3.2) U (clearances) |
| Spot UV (a gloss coating printed in register over part of the sheet) | Own spot layer named `SPOT_UV`, 100% solid, overprint | Lines at least about 0.5 mm; registration about plus or minus 0.5 mm, so keep the UV that far inside any printed edge it must match | U |
| Letterpress (relief printing with an impression in the sheet) | 100% solids only, one plate per colour, vector line art | No halftones finer than the press allows; ask before sending any tint | U |
| White ink (on kraft, coloured or clear stock) | Own spot channel named `WHITE`, set to overprint, under the colour art; state whether one or two hits are planned | Fine lines thicken; reverse type at least about 8 pt | U |
| Pantone | Every brand colour specified as a Pantone reference with coated (C) and uncoated (U) named separately, beside the CMYK build and the sRGB value | n/a | H (04-colour.md, section 9.2) |

Reason for separate spot channels: the finisher makes the die, block or screen from that channel alone, and art merged into CMYK cannot be separated without redrawing. Rich black (a black built with CMY under K) is for large solid areas only, with the house build in 04-colour.md, section 10.2; total area coverage (TAC, the maximum sum of the four ink percentages at any point) stays at the profile's limit, 300% on PSO Coated v3 and 240% on newsprint (04-colour.md, section 10.3).

### 6.12 Press: newspaper and magazine

Newspaper front-page jackets (a wrap of the front page) and magazine pages are routine for luxury real estate and jewellery in India (Times of India, Hindustan Times) and the UAE (Gulf News, Khaleej Times, The National), and newsprint has the harshest technical limits of any print job. No rate card or media kit was read in this check (U); the house rules are H.

- Newspapers sell by column centimetre (one column wide by one centimetre deep) or by fixed module (full page, half page, jacket), so the mechanical size, column width and deadline come from the publication's rate card for each insertion.
- Profile ISOnewspaper26v4 or the paper's own profile, total ink 240% (04-colour.md, section 10.3); images at about 200 ppi at size, because the newsprint screen is coarse; no reversed type under 8 pt and no reversed hairline serifs, because dot gain fills them; text in 100% black only, because registration black (all four inks at 100%) mis-registers and floods.
- Expect a visible colour shift on newsprint: make a newsprint proof before client sign-off, so the client approves what the reader will see.
- Magazines (Vogue India, Harper's Bazaar Arabia, Condé Nast Traveller India): trim, bleed and type area from each title's media kit. On a double-page spread keep type 10 to 15 mm off the spine for perfect binding, and keep faces and the product out of the gutter (the binding fold), because the fold swallows them.

## 7. Presentation and document specs

### 7.1 Canvas and export

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| 16:9 deck canvas | 1920 x 1080 px; PowerPoint sets widescreen to 13.333 x 7.5 in; Keynote defaults to 1920 x 1080 and Google Slides to 10 x 5.625 in | V (PowerPoint) U (others) | support.microsoft.com/en-us/office/change-the-size-of-your-slides | 2026-10-28 |
| 4K deck canvas | 3840 x 2160; Keynote offers the preset; PowerPoint exports at the same inch size with higher image resolution | U | not read | not read |
| 4:3 | 10 x 7.5 in; only for a client's legacy system | V | as 16:9 | 2026-10-28 |
| A4 handout | 10.833 x 7.5 in in PowerPoint's preset, which only approximates A4; for a real A4 document use InDesign or a document tool | V | as 16:9 | 2026-10-28 |
| Keynote export | File, Export To, PDF, image quality Best; or Export To, Images, PNG at 2x for social | H | house procedure | n/a |
| PowerPoint export | File, Export, Create PDF/XPS, Standard; in Options set image resolution to 330 ppi ("High fidelity") for print and 150 ppi for email; untick "ISO 19005-1 compliant" unless archival PDF/A is required | H | house procedure | n/a |
| Google Slides export | File, Download, PDF; images are resampled, so a deck with photography is finished in Keynote | H | house procedure | n/a |

### 7.2 PDF size targets

| Destination | Target | Reason | Status |
|---|---|---|---|
| Email attachment | Under 10 MB | Gmail accepts 25 MB and Outlook 20 MB (U), but corporate gateways in India and the Gulf commonly reject above 10, and the recipient opens it on a phone | H |
| WhatsApp document | Under 100 MB (the Cloud API document cap, section 2.10; the consumer app allows up to 2 GB, U) | Keeps the download instant on a mobile connection | V (cap) H (target) |
| Print PDF | No size target; 300 ppi images, no downsampling, PDF/X-4 | Section 6.8 | H |
| Web download | Under 5 MB, images at 150 ppi, fonts subset | Opens in the browser tab without a wait | H |

Compression that keeps a deck under 10 MB (H): JPEG images at quality 8 of 12 (Photoshop scale) at 150 ppi for the 1920 canvas, PNG only for the mark and screenshots, no embedded video (link it), fonts subset.

### 7.3 House deck grammar sizes

The look is set in design-taste, SKILL.md, section 7. The sizes that implement it on a 1920 x 1080 canvas, house values (H) consistent with 03-typography.md, section 7.3:

| Element | Size | Reason |
|---|---|---|
| Margin | 120 px on every side (6.25%) | Reads as generous on a projector and survives the 3.5% action safe crop on a TV |
| Grid | 12 columns, 24 px gutters inside the margins | Halves and thirds without arithmetic |
| Slide title | 96 to 160 px, weight 700, tracking -0.02em, leading 0.95 to 1.0 | Scale contrast (design-taste, SKILL.md, section 2); one line |
| Body | 28 to 32 px, weight 300 with 500 for bold, leading 1.4 | Readable from the back of a 10 m room |
| Caption, source, folio | 18 px minimum, 20 preferred | Below 18 px nothing on a projector is legible |
| Micro caps labels | 16 to 18 px at weight 400, tracking +0.08em | The house label voice |
| Image | Full-bleed or inside the grid; no border; curved corners 24 px when inset | Material honesty and the house curve |
| One motion per deck | A single build or transition, 400 to 700 ms, ease-out | 12-motion-principles-and-ui-motion.md, section 4.1 |

### 7.4 Document margins and font embedding

House (H): A4 documents at 20 mm top and outside, 25 mm bottom and inside (binding side) for bound work; 20 mm all round for single sheets; body 10 to 11 pt at 1.4 to 1.5 leading on a 60 to 70 character measure (03-typography.md, section 6.1). US Letter: 1 in (25.4 mm) all round is the convention clients expect. Every PDF leaving the studio has all fonts embedded (subset is fine), or text converted to outlines for large-format vendors who ask. Space Grotesk is under the SIL Open Font License, which permits embedding; check each client face's licence for PDF embedding and for web use before the deck is built, because some foundries (Klim, Commercial Type) license embedding and web use separately.

The commonest weekly failure on client decks is a substituted font: the client opens the file and Space Grotesk has become Arial. Application behaviour from practice, to be tested on a machine without the fonts (U):

| Application | Font behaviour | House practice |
|---|---|---|
| Keynote | .key files do not embed fonts, so a .key reaches the client without them | Send the client a PDF, or a PPTX exported from Keynote and checked in PowerPoint |
| PowerPoint (Microsoft 365, Windows and Mac) | Embeds through File, Options, Save on Windows (PowerPoint, Preferences, Save on Mac), "Embed fonts in the file", all characters for an editable deck; variable fonts and CFF-based .otf files may not embed and will substitute | Embed the static TTF instances of Space Grotesk |
| Google Slides | Renders Google Fonts and fonts already on the account; Space Grotesk is a Google Font, so a Slides deck holds | Client faces outside Google Fonts fall back to Arial; use Slides only with Google Fonts faces |

Accessible decks and PDFs (tagging, reading order, contrast): 11-accessibility-and-inclusive-design.md, sections 13.1 and 13.2.

## 8. Accessibility numbers

The law, the testing and the craft are in 11-accessibility-and-inclusive-design.md, sections 2, 3 and 14; this section keeps the numbers.

### 8.1 WCAG 2.2 values

From w3.org/TR/WCAG22 and the Understanding pages for 2.5.5 and 2.5.8, read 28 October 2026 (V).

| Criterion | Level | Value |
|---|---|---|
| 1.4.3 Contrast (minimum) | AA | 4.5:1 for text; 3:1 for large text, defined as at least 18 pt (24 px) regular or 14 pt (18.66 px) bold. Text that is part of a logo or brand name has no contrast requirement, so the black m360 mark is exempt and the line set beside it is not |
| 1.4.6 Contrast (enhanced) | AAA | 7:1 for text; 4.5:1 for large text |
| 1.4.11 Non-text contrast | AA | 3:1 for user interface components, their states and meaningful graphics against adjacent colours |
| 1.4.12 Text spacing | AA | No loss of content when the user sets line height to 1.5 x font size, paragraph spacing to 2 x, letter spacing to 0.12 em, word spacing to 0.16 em |
| 1.4.10 Reflow | AA | Content reflows at 320 CSS px wide (a 1280 px viewport at 400% zoom) without horizontal scrolling, or 256 CSS px high for horizontal-scroll content |
| 1.4.4 Resize text | AA | Text resizes to 200% without loss |
| 2.3.1 Three flashes or below threshold | A | Nothing flashes more than three times in one second unless below the general and red flash thresholds (section 5.11) |
| 2.5.8 Target size (minimum) | AA | Pointer targets at least 24 x 24 CSS px, or an undersized target whose 24 px circle does not intersect another target or circle |
| 2.5.5 Target size (enhanced) | AAA | 44 x 44 CSS px, with exceptions for inline, equivalent, user-agent and essential cases |

Platform targets (U, Apple HIG unreadable): Apple's Human Interface Guidelines ask for 44 x 44 pt; Material Design asks for 48 x 48 dp with 8 dp between targets. House (H): 44 px minimum on every tappable element, 48 on the primary action.

### 8.2 APCA

APCA (Accessible Perceptual Contrast Algorithm, Andrew Somers, Myndex) is the candidate replacement for the WCAG 2 ratio in WCAG 3; it reports a lightness contrast Lc from 0 to about 106, signed for polarity, and ties the required Lc to font size and weight. From APCA in a Nutshell (github.com/Myndex/SAPC-APCA), read 28 October 2026 (V); sizes assume an x-height ratio of about 0.52 and Helvetica or Arial weights.

| Lc | Meaning | Reference sizes that meet it |
|---|---|---|
| 90 | Preferred for fluent body text and columns; minimum for extremely thin fonts; maximum sensible for large bold text and large colour areas | Body 18 px at weight 300 or 14 px at 400; non-body 12 px at 400; thin 24 px at 200 |
| 75 | Minimum for columns of body text | Body 24 px at 300, 18 px at 400, 16 px at 500, 14 px at 700; non-body 15 px at 400 |
| 60 | Minimum for content text that is read but is not body copy | 48 px at 200, 36 at 300, 24 at 400, 21 at 500, 18 at 600, 16 at 700 |
| 45 | Minimum for headlines and large heavy text, fine pictograms, small outline icons | 36 px at 400 or 24 px bold |
| 30 | Absolute minimum for placeholder and disabled text; minimum for large solid meaningful non-text | Non-text at least 5.5 px in the smallest dimension |
| 15 | Absolute minimum for discernible non-semantic elements (dividers) | Non-text at least 5 px |

Why both tables: WCAG 2.2 is the legal reference (India's Rights of Persons with Disabilities Act 2016 and GIGW 3.0, the Guidelines for Indian Government Websites and Apps, point at WCAG 2.1 AA; the UAE's Digital Government guidance points at WCAG 2.1 AA, U) and APCA is the better predictor of what the eye reads, especially for the thin light-on-dark type the house favours. The house checks both (H): pass WCAG AA by ratio and reach the size-paired APCA levels in 04-colour.md, section 6.4: Lc 90 for body at 16 px and weight 400 (Lc 75 only from 18 px at 400, 16 px at 500 or 14 px at 700), Lc 60 for non-body content text, Lc 45 for headlines at 36 px at 400 or 24 px at 700.

### 8.3 Other accessibility numbers

| Item | Value | Status | Source |
|---|---|---|---|
| Caption line length and speed | 42 characters per line (Netflix); 20 cps English and 17 Hindi for adults (section 5.10); 32 characters (CEA-608); 32 to 38 burned-in (house) | V, U, H | section 5.10 |
| Minimum type on screen | 12 px web floor (03-typography.md, section 7.3); 11 pt iOS Caption 2; 11 sp Material label small; 17 pt iOS body at Large Dynamic Type | U | platform pages unreadable or not read |
| Minimum type in print | 6 pt for legal lines (about 1.5 mm cap height) in the house; regulatory minimums per section 6.10 | H | section 6.10 |
| Zoom | 200% (1.4.4) and 400% (1.4.10) without loss | V | w3.org/TR/WCAG22 |
| Motion | Honour `prefers-reduced-motion`; no parallax, no auto-play loops over 5 s without a pause control (2.2.2, A) | V (2.2.2) H (policy) | w3.org/TR/WCAG22 |
| Flash | Three per second maximum; LED walls and strobing campaign films are the common offenders | V | w3.org/TR/WCAG22; section 5.11 |
| Focus indicator | 2.4.11 Focus not obscured (AA) and 2.4.13 Focus appearance (AAA): a 2 CSS px perimeter at 3:1 against the unfocused state | V (criteria) U (values summarised) | w3.org/TR/WCAG22 |
| India, ICT standard | IS 17802 (Bureau of Indian Standards, 2021, parts 1 and 2), based on EN 301 549, alongside GIGW 3.0 | U | 11-accessibility-and-inclusive-design.md, section 14.1 |
| EU, European Accessibility Act | Applies from 28 June 2025 to e-commerce and other services sold to EU consumers, including by non-EU businesses, assessed against EN 301 549 (V3.2.1 maps to WCAG 2.1 AA for web; V4.1.1, adopted 24 August 2026, aligns to WCAG 2.2); matters for a Jaipur jeweller or a Dubai hotel selling to Europe | U | 11-accessibility-and-inclusive-design.md, section 14.4 |

## 9. Typography and motion numbers, short form

Reproduced from 03-typography.md (sections 6.1 and 7.3) and 12-motion-principles-and-ui-motion.md (sections 1.3, 4.1, 4.2 and 4.3) so the export check needs one sheet; the reasons, and the Material, Carbon and Fluent duration tokens, live in those files (section 4.4 of the motion file). Status H.

### 9.1 Type

| Context | Size | Leading | Tracking | Measure |
|---|---|---|---|---|
| Display | 48 to 160 px | 0.9 to 1.1 | -0.02 to -0.04 em | one to three lines |
| Headings | 24, 32, 40 px | 1.1 to 1.25 | -0.01 to -0.02 em | under 50 characters |
| Body | 16 px web, 18 to 21 px editorial | 1.4 to 1.6 (16 on 24) | 0 | 45 to 75 characters, house 55 to 70 |
| Small text | 12 px floor on screen | 1.3 to 1.45 | 0 to +0.01 em | short |
| Caps labels | 9 to 13 px | 1.3 | +0.05 to +0.14 em | one line |
| Devanagari and Arabic body | as Latin or one step up | 1.6 to 1.8 | 0 | as Latin |
| Nastaliq (the hanging Perso-Arabic style used for Urdu) | one step up | 2.0 and up | 0 | short |
| Deck (1920 canvas) | title 96 to 160, body 28 to 32, caption 18 minimum (section 7.3) | | | |

### 9.2 Motion

| Class | Duration | Use |
|---|---|---|
| Micro | 100 to 200 ms | Hover, press, toggle, tooltip |
| Small | 200 to 300 ms | Dropdown, popover, tab, toast |
| Large | 300 to 500 ms | Sheet, drawer, modal, section reveal |
| Page | 400 to 700 ms | Route change, hero reveal, scroll beat |
| Brand | 800 to 2000 ms | Logo reveal, campaign sting, one-off peak |
| Exit | about 0.7 x the entrance | Attention has already moved on |
| Distance rule | 200 ms base plus 0.3 ms per px, capped at 500 ms | 100 px takes 230 ms, 600 px takes 380 ms |
| Frame budgets | 16.7 ms at 60 Hz, 8.3 ms at 120 Hz | 12-motion-principles-and-ui-motion.md, section 1.3 |
| Video motion graphics | 25 fps house; 24 for brand film; ease-out on every move; holds of at least 1 s on any readable text | 13-motion-graphics-and-3d-production.md |

## 10. Photography deliverable specs

House standards (H); where a platform number applies it is cross-referenced.

### 10.1 Web

| Deliverable | Specification | Reason |
|---|---|---|
| Hero | 2560 px wide (the "wide" breakpoint's hero size, section 4.8), WebP at quality 75 to 82, under 300 KB; AVIF alongside at quality 55 to 65 where the build pipeline supports it; JPG fallback only for email | The hero is the LCP element (section 4.9); 300 KB at 2560 loads inside 2.5 s on a 4G connection in Mumbai or Dubai |
| Responsive set | srcset widths 640, 960, 1280, 1920, 2560; sizes attribute matched to the breakpoints | The browser picks the smallest sufficient file |
| Retina | Every image exported at 2x its CSS size at a lower quality (WebP 70) | Compressive images: 2x at lower quality is smaller and sharper than 1x at high quality on a 2x screen |
| Colour | sRGB, profile embedded, 8-bit | Browsers assume sRGB; a stripped Adobe RGB file goes dull |
| Thumbnails and cards | 800 px on the long side, WebP under 80 KB | Grids of twelve cards must total under 1 MB |

Formats and image CDNs: 21-web-design-and-digital-craft.md, sections 4.1 to 4.4.

### 10.2 Social crops

From one master, in order of importance: 4:5 at 1440 x 1800 (Meta feed), 9:16 at 1440 x 2560 (Meta Stories and Reels cover) and 1080 x 1920 (TikTok, Snapchat, Pinterest, Shorts cover), 1:1 at 1440 x 1440 (LinkedIn, X, Meta square placements), 2:3 at 1000 x 1500 (Pinterest), 16:9 at 2560 x 1440 (YouTube thumbnail at 2x, LinkedIn link image at 1200 x 628 downsampled). JPG quality 10 of 12 or PNG for flat graphics; SDR sRGB (HDR stills only by the rule in section 5.12); under 8 MB on Meta, under 20 MB on Pinterest (sections 2.1, 2.7). Protect lines on the master: the 4:5 crop with the subject inside the central 1:1 and the 9:16 inside the central 56% of the width (section 5.5).

### 10.3 Print

300 ppi at the printed size (section 6.6), 16-bit TIFF or layered PSD for retouched masters, 8-bit TIFF with LZW for the printer unless the press asks for JPEG at quality 12; Adobe RGB (1998) or ProPhoto RGB masters in 16-bit, converted to the printer's CMYK profile (section 6.8) only at the printer's request, with perceptual intent for photographs and relative colorimetric with black point compensation for flat colour; soft-proof in Photoshop with the destination profile before release. Hoardings at 1:10 scale, 300 ppi, with the vendor's bleed.

### 10.4 RAW, archive and metadata

Keep the native RAW (ARW, CR3, NEF, RAF, DNG from phones) with its XMP sidecar (the Adobe metadata file stored beside the raw that holds edits and captions); convert to DNG only when the client's DAM (digital asset management system) requires it, because the native file keeps the maker's metadata. Keep three copies on two media types with one off site (the 3-2-1 rule) with the project archive after delivery; a contact sheet PDF per shoot day; selects flagged in the catalogue, because files copied into a "selects" folder drift from the originals. Retouched masters sit beside the RAW as 16-bit PSD or TIFF with layers; flattened derivatives are regenerated from them and never edited.

IPTC fields (the International Press Telecommunications Council photo metadata standard) on every delivered image: creator, copyright notice, credit line, licence terms and expiry (talent and usage rights for India and the UAE), description with the shot's subject and location, keywords with client and campaign codes, and Digital Source Type (the IPTC field that records how the image was made) set to `trainedAlgorithmicMedia` for a fully generated image or `compositeWithTrainedAlgorithmicMedia` for a hybrid. Keep the C2PA manifest (the signed provenance record of origin and edits, shown to users as Content Credentials) and never strip it. India's IT Amendment Rules 2026 (G.S.R. 120(E), in force 20 February 2026) require labelling and embedded provenance on synthetically generated content, and Meta, YouTube and TikTok read these fields for their AI labels: the detail is in 22-ai-era-craft-and-generative-tools.md, sections 6.11, 7.6 and 7.7. Strip camera serial numbers and GPS before anything leaves the studio; keep the colour profile.

### 10.5 Naming convention

`YYYYMMDD_client_campaign_asset_variant_vNN.ext` in lower case with hyphens inside a field and underscores between fields, for example `20261028_aman-jaipur_winter_hero-pool_4x5_v03.jpg`; video adds the ratio, resolution, frame rate and loudness target: `20261028_aman-jaipur_winter_film30_9x16_1080x1920_25p_-14lufs_v02.mp4`. Reason: the file name carries the spec to the uploader and the archive search without opening the file, and a sort by name is a sort by date, client and version.

### 10.6 Commerce and listing imagery

Product and listing imagery for beauty, fashion, jewellery, hospitality and F&B clients follows rules of its own, and the house's 4:5 social master suits none of them. Product detail page imagery on the client's own site: 21-web-design-and-digital-craft.md, section 8.3.

| Channel | Specification | Status | Source | Checked |
|---|---|---|---|---|
| Google Merchant Center | At least 500 x 500 px for all products from 31 January 2027; 1500 x 1500 or larger recommended; at most 64 megapixels and 16 MB; JPEG, WebP, PNG, GIF, BMP or TIFF with a matching extension. Prohibited: promotional text, prices, calls to action, watermarks, added logos (unless physically on the product), barcodes and QR codes, borders, placeholders, single-colour squares | V | support.google.com/merchants/answer/6324350 | 2026-10-29 |
| Shopify | 20 megapixels and 20 MB per upload; house product master 2048 x 2048 sRGB | V (limits) H (master) | help.shopify.com/en/manual/online-store/images/theme-images | 2026-10-29 |
| Google Business Profile | Photos JPG or PNG, 10 KB to 5 MB, 720 x 720 recommended, 250 x 250 minimum; video up to 30 s, 75 MB, 720p or higher | V | support.google.com/business/answer/6103862 | 2026-10-29 |
| Amazon | Main image on pure white (RGB 255, 255, 255), product filling about 85% of the frame, at least 1000 px on the long side so zoom works | U | Seller Central behind login | not read |
| Nykaa, Myntra, Tata CLiQ Luxury (India); Noon, Ounass, Namshi (UAE) | Seller image sheets sit behind seller login; request them at onboarding | U | not read | not read |

House (H): on every product shoot, capture a square white-ground set and a 3:4 on-model set alongside the campaign frames, because marketplace grids use square and 3:4 tiles with white-ground rules, and Merchant Center disapproves the lifestyle frame that carries a logo or a price.

## 11. Master table

Every format on one sheet. Dimensions in px unless stated; duration where it applies; status codes from section 1.1, followed by the date the value was checked (V and T rows), "open" where it still needs a vendor or standard check (U), or the section that holds the reasoning (H). Where a cell says "sec", the section holds the detail.

| Format | Dimensions | Ratio | Duration | File type | Max size | Safe zone | Source | Status and date checked |
|---|---|---|---|---|---|---|---|---|
| Instagram feed portrait (caption 2,200 characters; hashtags 30 in ads and API, about 5 organic, U) | 1440 x 1800 (1080 x 1350 common) | 4:5 | n/a | JPG, PNG | 30 MB | central 1:1 for grid | ads-guide/update/image/instagram-feed; Graph API media reference | V, 2026-10-29 |
| Instagram feed square | 1080 x 1080 (1440 x 1440 master) | 1:1 | n/a | JPG, PNG | 30 MB | grid tile 3:4 crops top and bottom | postfa.st | T, 2026-10-28 |
| Instagram feed landscape | 1080 x 566 | 1.91:1 | n/a | JPG, PNG | 30 MB | n/a | post-bridge.com | T, 2026-10-28 |
| Instagram Reels | 1440 x 2560 or 1080 x 1920 | 9:16 | ads 0 s to 15 min; organic 3 min in camera, uploads to 20 min on many accounts (T) | MP4, MOV, H.264, AAC 128 | 4 GB | top 14%, bottom 35%, sides 6% | ads-guide/update/video/instagram-reels | V, 2026-10-29 |
| Instagram Stories | 1440 x 2560 | 9:16 | image 5 to 16 s; video to 60 min in ads, 60 s cards organic | JPG, PNG, MP4, MOV | 30 MB image, 4 GB video | as Reels | ads-guide/update/image/instagram-story | V, 2026-10-28 |
| Instagram carousel | up to 20 items in the app and the API; the first slide sets the ratio | 4:5, 1:1 | n/a | JPG, PNG, MP4 | 30 MB each | as feed | Graph API media reference | V (API) T (app), 2026-10-29 |
| TikTok video | 1080 x 1920 | 9:16 | ads to 10 min; organic about 10 min in camera, uploads to 60 min (T) | MP4, MOV | 500 MB ads | top 290, bottom 480, right 200 (T) | ads.tiktok.com/help/article/video-ads-specifications | V, 2026-10-29 |
| YouTube video (title 100, description 5,000 characters) | 3840 x 2160 upload | 16:9 | 12 h; 15 min until phone-verified | MP4, H.264 High, AAC-LC 384 kbps | 256 GB | title safe 90% | support.google.com/youtube/answer/1722171 and /71673 | V, 2026-10-29 |
| YouTube Shorts | 1080 x 1920 | 9:16 | up to 3 min; Content ID claim over 1 min blocks (U) | MP4 | | bottom 20%, right 130 px (T) | support.google.com/youtube/answer/10059070 | V, 2026-10-29 |
| YouTube thumbnail | 3840 x 2160 videos, 2160 x 3840 Shorts; minimum 640 on the short side | 16:9, 9:16 | n/a | JPG, PNG | 2 MB mobile, 50 MB desktop | | support.google.com/youtube/answer/72431 | V, 2026-10-29 |
| YouTube banner and icon | banner 2560 x 1440 (2048 x 1152 minimum); icon 800 x 800, renders 98 x 98 | 16:9; 1:1 | n/a | JPG, PNG | 6 MB banner, 15 MB icon | banner 1235 x 338 at 2048 wide | support.google.com/youtube/answer/10456525 | V, 2026-10-28 |
| YouTube end screen | up to 4 elements | 16:9 | last 5 to 20 s of a video at least 25 s | | | | support.google.com/youtube/answer/6388789 | V, 2026-10-28 |
| LinkedIn image (post text 3,000 characters, 150 visible) | 1200 x 628, 1200 x 1200, 720 x 900 | 1.91:1, 1:1, 4:5 | n/a | JPG, PNG, GIF | 5 MB | | linkedin.com/help/lms/answer/a426534 | V, 2026-10-29 |
| LinkedIn single image ad text | intro 3,000 (150 visible); headline 70 recommended, 200 maximum; description 100 recommended, 300 maximum | | | | | | linkedin.com/help/lms/answer/a426534 | V, 2026-10-29 |
| LinkedIn document | all pages one size; 1:1 or 4:5 best | | n/a | PDF, PPTX, DOCX | 100 MB, 300 pages | | linkedin.com/help/lms/answer/a493903 | V, 2026-10-28 |
| LinkedIn video | 1920 x 1080 to 1080 x 1920 | 16:9, 1:1, 4:5, 9:16 | 3 s to 30 min | MP4 under 30 fps | 500 MB | | linkedin.com/help/lms/answer/a424737 | V, 2026-10-28 |
| LinkedIn covers and logo | member 1584 x 396 (8 MB, T); Page cover 1512 x 256; Page logo 400 x 400 (268 minimum) | 4:1; about 5.9:1; 1:1 | n/a | JPG, PNG | 3 MB Page images | Page logo overlaps the cover bottom left | linkedin.com/help/linkedin/answer/a563309 | V, 2026-10-29 |
| X image and video (post 280 characters; profile 400 x 400; header 1500 x 500, U) | 1200 x 675 or 1200 x 1200; video 1920 x 1080 | 16:9, 1:1 | 2 min 20 s in apps | JPG, PNG, MP4 | 5 MB image, 512 MB video | | postfa.st/sizes/x/video | T, 2026-10-29 |
| Threads | text 500 characters; image 320 to 1440 wide; carousel 2 to 20 | up to 10:1 | 300 s | JPG, PNG, MP4 | 8 MB image, 1 GB video | | developers.facebook.com/docs/threads/overview | V, 2026-10-28 |
| Pinterest pin | 1000 x 1500 | 2:3 | n/a | PNG, JPEG | 20 MB web, 32 MB app | | help.pinterest.com product specs | V, 2026-10-28 |
| Pinterest video pin | 1:1 to 9:16 | 1:2 to 1.91:1 allowed | 4 s to 15 min | MP4, MOV, M4V | 2 GB | | as above | V, 2026-10-28 |
| Pinterest idea ad | 1080 x 1920 | 9:16 | to 5 min | MP4, JPG | 2 GB app, 100 MB web | top 270, left 65, right 195, bottom 440 | as above | V, 2026-10-28 |
| Facebook feed image | 1440 x 1800 | 4:5 | n/a | JPG, PNG | 30 MB | central 1:1 | ads-guide/update/image/facebook-feed | V, 2026-10-28 |
| Facebook feed video | 1440 x 1800 | 4:5 | 1 s to 241 min | MP4, MOV, GIF | 4 GB | | ads-guide/update/video/facebook-feed | V, 2026-10-28 |
| Facebook Stories | 1440 x 2560 | 9:16 | 1 s to 3 min | MP4, MOV | 4 GB | 14%, 35%, 6% | ads-guide/update/video/facebook-story | V, 2026-10-28 |
| Facebook in-stream (primary text 125, headline 40) | at least 1080 x 1080 | 16:9, 1:1 | desktop 5 to 15 s; mobile 5 s to 10 min; cut at 15 s | MP4, MOV, GIF | 4 GB | | ads-guide/update/video/facebook-instream-video | V, 2026-10-29 |
| Facebook page cover and profile | 851 x 315 under 100 KB; 320 x 320 | | n/a | sRGB JPG | 100 KB cover | profile overlaps 40 px | facebook.com/help/125379114252045 | V, 2026-10-28 |
| Profile pictures, other platforms | Instagram 320 x 320 (U); TikTok upload 400 x 400, ads render 98 x 98 (V for 98); X 400 x 400 (U); Pinterest 600 x 600 (U); WhatsApp Business 640 x 640 (U); Snapchat 1080 x 1080 (U) | 1:1, circle crop | n/a | JPG, PNG | | mark at 60% of the diameter (sec 2.13) | sections 2.1 to 2.11 | mixed, open |
| WhatsApp status | 1080 x 1920 | 9:16 | 60 s per status (90 s in beta, T) | MP4, JPG | about 16 MB effective (U) | test on handset | news reports of beta builds | T, 2026-10-29 |
| WhatsApp Business Platform media | video H.264 Main or Baseline with AAC (720 x 1280 over 30 s, house); image JPEG or PNG; sticker WebP 512 x 512 | | about 120 / duration in s = total Mbps (D) | MP4, 3GP, JPEG, PNG, PDF, WebP | video and audio 16 MB, image 5 MB, document 100 MB, sticker 100 or 500 KB | | developers.facebook.com/docs/whatsapp/cloud-api/reference/media | V, 2026-10-29 |
| WhatsApp message template | header 60, body 1,024, footer 60, button 25 characters; up to 10 buttons (2 URL, 1 phone, 1 copy-code of 20) | | n/a | text, MP4 GIF header | GIF header 3.5 MB | | developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components | V, 2026-10-29 |
| Snapchat ad and story (brand 25, headline 34 characters) | 1080 x 1920 | 9:16 | 3 to 180 s; Commercials 3 to 6 s non-skippable, Extended Play first 6 s non-skippable | JPG, PNG, MP4, MOV | | top 150, bottom 150; collection 450 bottom (T) | forbusiness.snapchat.com/advertising/ad-formats | V (safe zone T), 2026-10-29 |
| Snapchat AR Filter | static 945 x 2048; moving 720 x 1560 | about 9:19.5 | moving 1 to 3 s | PNG, GIF | | | as above | V, 2026-10-29 |
| Meta carousel | 1080 x 1080 minimum | 1:1 | video 1 s to 240 min | JPG, PNG, MP4 | 30 MB, 4 GB | 2 to 10 cards; text 80/20/18 | ads-guide/update/carousel/facebook-feed | V, 2026-10-28 |
| Meta collection | 1080 x 1080 minimum cover | 1.91:1 to 1:1 | | JPG, PNG, MP4 | 30 MB, 4 GB | text 125/40 | ads-guide/update/collection/facebook-feed | V, 2026-10-28 |
| Google responsive display | 1200 x 628, 1200 x 1200; logos 1200 x 300, 1200 x 1200 | 1.91:1, 1:1, 4:1 | n/a | JPG, PNG | 5120 KB | headlines 30, long 90 | support.google.com/google-ads/answer/7005917 | V, 2026-10-28 |
| YouTube ads | bumper up to 6 s; non-skippable 60 s or shorter (15 to 60 s by subtype, Reservations), 7 to 15 s in Video reach, 16 to 30 s on CTV (16:9 only); skippable no maximum; Shorts under 60 s | 16:9, 9:16 | as stated | YouTube upload | | | support.google.com/google-ads/answer/2375464 and /11462260 | V, 2026-10-29 |
| Performance Max | images as RDA plus 4:5 960 x 1200; video 16:9, 1:1, 9:16 at 10 s or more | | | JPG, PNG, YouTube | 5120 KB | central 80% | support.google.com/google-ads/answer/14530211 | V, 2026-10-28 |
| Demand Gen | 1200 x 1200, 1200 x 628, 960 x 1200, 1080 x 1920; logo 144 to 1200 | 1:1, 1.91:1, 4:5, 9:16 | video 5 s minimum, 10 s for in-stream | JPG, PNG, MPG | 5 MB, logo 150 KB, video 256 GB | | support.google.com/google-ads/answer/13704860 | V, 2026-10-28 |
| IAB display units | 300 x 250, 728 x 90, 160 x 600, 320 x 50, 300 x 600, 970 x 250, 320 x 480, 336 x 280 | fixed | animation 30 s maximum on Google Ads; 15 s and 3 loops on many publishers (U) | HTML5, JPG, PNG, GIF; backup image | 150 to 300 kB initial (sec 3.6); 150 KB on Google Ads | | iab.com New Ad Portfolio fixed size spec; support.google.com/adspolicy/answer/176108 | V, 2026-10-29 |
| Spotify audio ad | n/a | n/a | 30 s (60 s long-form) | MP3, WAV, OGG, 44.1 kHz, 192 to 320 kbps | 50 MB | -16 LUFS; companion 600 x 600, 200 KB | ads.spotify.com/en-US/ad-specs/audio-ad-specs | V, 2026-10-28 |
| Spotify video ad | 720 x 1280 or 1280 x 720 | 9:16, 16:9 | up to 30 s | MOV, MP4 | 500 MB | RMS -14 dBFS, peak -0.2 | ads.spotify.com in-stream video specs | V, 2026-10-28 |
| Podcast artwork (Apple Podcasts) | 3000 x 3000 (1400 minimum) | 1:1 | n/a | JPEG, PNG, RGB | | | not read | U, open |
| DOOH portrait and landscape | 1080 x 1920; 1920 x 1080; LED at native map | 9:16, 16:9 | 10 or 15 s | MP4 H.264 25 fps, JPG | per vendor | per vendor sheet; intake list sec 3.9 | vendor artwork sheets (none readable) | U, open |
| India hoarding | 20 x 10 to 60 x 20 ft; BMC permitted maximum 40 x 40 ft | varies | n/a | PDF or TIFF at 1:10, 300 ppi (30 ppi at size) | | 100 mm bleed, 300 mm safe | vendor sheet; BMC policy not read | U, open |
| Favicon set | ICO (16, 32, 48), SVG with dark-scheme rule, 180 touch, 192, 512, 512 maskable; Google Search over 48 x 48 | 1:1 | n/a | ICO, SVG, PNG | | maskable circle 409 px | evilmartians.com favicon article; developers.google.com/search/docs/appearance/favicon-in-search | V, 2026-10-29 |
| Open Graph image | 1200 x 630 (2400 x 1260 export) | 1.91:1 | n/a | JPG, PNG | 8 MB | central 1200 x 600 | developers.facebook.com/docs/sharing/webmasters/images | V, 2026-10-28 |
| iOS app icon | 1024 x 1024 master | 1:1 | n/a | PNG, no alpha | | | Apple (page unreadable) | T, 2026-10-28 |
| Android adaptive icon | 108 dp layers (432 px at 4x); 66 dp visible and never clipped (264 px) | 1:1 | n/a | PNG layers | | 66 dp | developer.android.com adaptive icons | V, 2026-10-29 |
| Play Store icon and feature graphic | 512 x 512; 1024 x 500 | 1:1; 2.048:1 | n/a | PNG, JPEG | 1024 KB icon | | support.google.com/googleplay/android-developer/answer/9866151 | V, 2026-10-28 |
| App Store screenshots | 1206 x 2622 and 1320 x 2868 (iPhone); 2064 x 2752 (iPad) | device | n/a | JPG, PNG, no alpha | up to 10 per size | | developer.apple.com App Store Connect screenshot specifications | V, 2026-10-29 |
| App Store previews | 886 x 1920 (iPhone classes), 1200 x 1600 (iPad), 1920 x 1080 (Mac, TV) | device | 15 to 30 s, 30 fps maximum | H.264 10 to 12 Mbps or ProRes 422 HQ | 500 MB; 3 per size and language | | developer.apple.com app preview specifications | V, 2026-10-29 |
| Store text | Apple promotional 170, description 4,000, keywords 100 bytes; Play name 30, short 80, full 4,000 | | n/a | text | | | developer.apple.com platform version information; support.google.com/googleplay/android-developer/answer/9859152 | V, 2026-10-29 |
| Play Store screenshots | 320 to 3840 px per side, long side at most 2x short | 16:9 or 9:16 | n/a | JPEG, PNG | 2 to 8 per device | | as Play listing | V, 2026-10-28 |
| Email | 600 to 640 px wide, images at 2x | | n/a | HTML, JPG, PNG | HTML under 102 KB (Gmail clip) | | third-party (pages 404) | U, open |
| BIMI logo | at least 96 x 96, square, solid background | 1:1 | n/a | SVG Tiny Portable/Secure | 32 KB recommended | | knowledge.workspace.google.com/admin/security/set-up-bimi | V, 2026-10-29 |
| Core Web Vitals | LCP 2.5 s, INP 200 ms, CLS 0.1 at p75 | | | | | | web.dev/articles/vitals | V, 2026-10-28 |
| Video master | 3840 x 2160 ProRes 422 HQ, 25p (24p film), 48 kHz 24-bit, SDR Rec.709 tags 1-1-1 | 16:9 or 9:16 | | MOV | 737 Mbps at UHD 25p | title safe 90% | Apple ProRes white paper 2022 | V, 2026-10-28 |
| HDR delivery | HLG tags 9-18-9; graphics at 203 cd/m²; SDR grade alongside | | | MOV, MP4 HEVC Main 10 | | | sec 5.12 | H, sec 5.12 |
| Broadcast India and UAE | 1920 x 1080, 25 fps (1080i50 or 1080p25) | 16:9 | 10, 20, 30 s | ProRes 422 HQ or XDCAM HD422 | | action 93%, title 90% | channel sheets (unreadable) | U, open |
| DCP | 1998 x 1080 flat, 2048 x 858 scope (2K) | 1.85, 2.39 | 20 to 60 s spots | JPEG 2000 XYZ 12-bit, 250 Mbit/s | | | DCI via Wikipedia DCP article; India via UFO Moviez or Qube (U) | T, 2026-10-28 |
| Loudness | R 128 -23 LUFS, -1 dBTP; adverts under s1 add -18 LUFS maximum short-term; India and UAE per channel sheet (U); Spotify music -14 LUFS, ads -16 LUFS | | | | | | tech.ebu.ch/docs/r/r128.pdf and r128s1.pdf; support.spotify.com; ads.spotify.com | V, 2026-10-29 |
| Captions | 42 characters, 2 lines; 20 cps English, 17 cps Hindi (adult); SCC 32 characters | | 5/6 s to 7 s | SRT, VTT, SCC, TTML | | inside universal box | partnerhelp.netflixstudios.com English and Hindi guides | V, 2026-10-29 |
| LED wall | native pixel map; 12 x 4 m at P3.9 is 3077 x 1026; refresh 3,840 Hz or more for camera (U) | wall | 10 or 15 s loops | ProRes 422 HQ master; DXV3 or HAP by server | | 30 wall px text minimum | installers (U); WCAG flash definitions | U, open |
| A series | A0 841 x 1189 to A8 52 x 74 mm | 1:1.414 | n/a | PDF/X-4 | | bleed 3 to 5 mm | ISO 216 via Wikipedia | V, 2026-10-28 |
| Posters and one sheets | A3 to A0; 24 x 36 in; cinema one sheet 27 x 40 in | 1:1.414; 2:3; about 1:1.48 | n/a | PDF/X-4 | | bleed 5 mm, safe 10 mm at A2 and up | ISO 216; US trade sizes (U) | V (ISO), 2026-10-28 |
| Bus shelter, mupi, 48-sheet | six-sheet 1200 x 1800 mm; mupi 1185 x 1750 mm visible; 48-sheet 6096 x 3048 mm | about 2:3; 2:1 | n/a | PDF/X-4 or TIFF | | per vendor sheet | vendor sheets (none readable) | U, open |
| Business card | 85 x 55 mm house (85.6 x 54 for card slots); 90 x 55 India; 89 x 51 US; 91 x 55 Japan | | n/a | PDF/X-4 | | 3 mm bleed, 4 mm safe | Wikipedia business card table | V, 2026-10-28 |
| Roll-up banner | 850 x 2000 mm visible, design 850 x 2100 | | n/a | PDF at 1:4, 300 ppi | | lowest 100 mm free | supplier | U, open |
| Food label, India | letters 1, 2, 3, 6 mm by PDP area (up to 200, 500, 2500, above, cm²); blown or moulded 2, 4, 5, 8 mm; veg circle 3 to 8 mm | | n/a | | | regulatory panel first | FSSAI labelling compendium, Reg 5(3) Table I | V, 2026-10-29 |
| Packaged goods label, India | Legal Metrology Rule 7: likely 1, 2, 4, 6 mm by PDP area | | n/a | | | | G.S.R. 629(E) not read | U, open |
| Foil and emboss | foil lines at least about 0.25 mm, type about 8 pt; emboss detail 0.5 to 1 mm, 3 mm from folds | | n/a | spot channels, vector, overprint | | | 20-print-packaging-ooh-and-physical-production.md, sec 3 | T and U, sec 6.11 |
| Newspaper ad | per rate card; ISOnewspaper26v4, 240% total ink; images about 200 ppi | per module | n/a | PDF/X-1a or X-4 per paper | | no reversed type under 8 pt | rate cards not read | U, open |
| Deck | 1920 x 1080 (13.333 x 7.5 in); 3840 x 2160 for 4K | 16:9 | | PDF, PPTX (fonts embedded) | under 10 MB for email | 120 px margin | support.microsoft.com slide sizes | V, 2026-10-28 |
| WCAG contrast and targets | 4.5:1 and 3:1 (AA), 7:1 (AAA); 24 px (AA), 44 px (AAA); logotypes exempt | | | | | | w3.org/TR/WCAG22 | V, 2026-10-28 |
| APCA | Lc 90 body preferred, 75 body minimum, 60 content, 45 headline, 30 placeholder, 15 dividers | | | | | | github.com/Myndex/SAPC-APCA | V, 2026-10-28 |
| Web hero photograph | 2560 wide WebP under 300 KB, sRGB | per page | | WebP, AVIF, JPG | 300 KB | | section 10.1 | H, sec 10.1 |
| Print photograph | 300 ppi at size, 16-bit TIFF or PSD master in Adobe RGB or ProPhoto | | | TIFF, PSD | | | section 10.3 | H, sec 10.3 |
| Product image, Merchant Center and Business Profile | Merchant Center 500 x 500 minimum from 31 January 2027, 1500 x 1500 recommended; Business Profile 720 x 720 recommended | 1:1 | Business Profile video to 30 s | JPEG, PNG, WebP | 16 MB and 64 MP (Merchant); 5 MB photo, 75 MB video (Profile) | no text, logos, borders or watermarks | support.google.com/merchants/answer/6324350; support.google.com/business/answer/6103862 | V, 2026-10-29 |
| Generated or hybrid asset | visible label on the asset or in the caption; IPTC Digital Source Type set; C2PA manifest kept; disclosure toggle on upload (Meta AI info, YouTube altered or synthetic content, TikTok AI-generated label); India: IT Amendment Rules 2026, G.S.R. 120(E), in force 20 February 2026 | | | | | | 22-ai-era-craft-and-generative-tools.md, sections 7.6 and 7.7 | V in that file; H, sec 10.4 |

## Terms introduced

- 3-2-1 rule: three copies of a file on two media types, one of them stored off site.
- Action safe and title safe: the central 93% (3.5% inset) and 90% (5% inset) of a 16:9 frame, inside which picture and text respectively must sit for every television; from SMPTE ST 2046-1.
- Advantage+ creative: Meta's automated creative enhancements (image expansion, animation, text rewrites, added music) applied to an ad unless each toggle is switched off.
- Advantage+ placements: Meta's automatic placement setting, which serves one ad's assets into every placement, including in-stream, Messenger and Audience Network.
- Anamorphic 3D: a forced-perspective illusion on a corner LED screen, built for one screen's geometry and one sweet-spot viewpoint.
- APCA: Accessible Perceptual Contrast Algorithm, Andrew Somers' contrast model that reports a signed lightness contrast value Lc and ties the requirement to font size and weight.
- App preview: the 15 to 30 s video at the head of an App Store product page, delivered at Apple's accepted resolutions.
- AR Lens and AR Filter: Snapchat's camera effect that tracks a face or the world, and its overlay applied to a Snap after capture.
- Automatically created assets: Google Ads features that write text from the landing page, expand final URLs, enhance images and build video from supplied stills.
- Backup image: the static JPG or PNG an HTML5 ad serves where HTML5 cannot run.
- B-frame: a bidirectionally predicted video frame, built from frames before and after it.
- BIMI: Brand Indicators for Message Identification, the standard that shows a verified brand logo beside the sender in Gmail, Apple Mail and Yahoo.
- Bleed: print extended beyond the trim line (3 to 100 mm by product) so that cutting drift leaves no white edge.
- Blind emboss and deboss: a design raised from, or pressed into, the sheet with no ink or foil.
- Bumper: a YouTube non-skippable ad of 6 s or less, built around one idea.
- C2PA manifest: the cryptographically signed record of an asset's origin and edits defined by the Coalition for Content Provenance and Authenticity, shown to users as Content Credentials.
- CABAC: context-adaptive binary arithmetic coding, the H.264 entropy coder YouTube asks for because it compresses better than CAVLC.
- CBFC: the Central Board of Film Certification, which certifies films and ad films shown in Indian cinemas.
- clickTag: the variable an ad server fills with the tracked landing URL in an HTML5 ad.
- Closed GOP: a group of pictures that references no frame outside itself, so a stream can be cut, or playback can jump, at every GOP boundary.
- Colour tags: the ITU-T H.273 codes for primaries, transfer and matrix in a video file's header; 1-1-1 is BT.709 SDR, 9-18-9 is BT.2020 HLG.
- Column centimetre: the newspaper sales unit, one column wide by one centimetre deep.
- Commercials (Snapchat): non-skippable ads inside curated content; Standard runs 3 to 6 s, Extended Play up to 180 s with the first 6 s non-skippable.
- Connected TV (CTV): YouTube and streaming apps watched on a television set; Google runs 16 to 30 s non-skippable Video reach ads only there.
- Content ID: YouTube's automated system that matches uploads against rights holders' audio and video.
- Content Publishing API: Meta's programming interface through which scheduling tools post to Instagram; it accepts up to 20 carousel items.
- Core Web Vitals: Google's three field metrics, LCP (largest contentful paint), INP (interaction to next paint) and CLS (cumulative layout shift), judged at the 75th percentile.
- cps: characters per second, the reading-speed measure for subtitles.
- DAM: digital asset management system, the client's library of approved files and metadata.
- dBTP: decibels true peak, the inter-sample peak level reconstructed by a meter compliant with ITU-R BS.1770.
- DCP: Digital Cinema Package, the JPEG 2000 and PCM file set with XML playlists that cinema servers ingest.
- Demand Gen: Google's campaign type for YouTube, Discover and Gmail feeds.
- Device pixel ratio: physical pixels per CSS pixel; 2 on most laptops and tablets, 3 on current iPhones.
- Digital Source Type: the IPTC field that records how an image was made, including whether a trained model generated all or part of it.
- DMARC, SPF and DKIM: email authentication; the domain policy for mail that fails checks, the list of servers allowed to send for a domain, and a cryptographic signature on each message.
- DOOH: digital out of home, advertising on networked screens in public places.
- Dot gain: the spread of ink on paper that darkens and softens tones, worst on newsprint.
- dp: density-independent pixel; 1 dp is 1 px on a 160 dpi screen.
- DXV3 and HAP: GPU-decoded playback codecs, Resolume's own and an open family used by media servers such as disguise.
- Fast Start: an MP4 whose moov atom (the index) is at the front, so playback starts before the download completes.
- FOGRA: the German graphic technology research association whose characterisation data (FOGRA39, FOGRA51, FOGRA52) define the standard offset printing conditions used in ICC profiles.
- Gain map: an SDR image plus a map that tells HDR screens how far to brighten each area (Apple Adaptive HDR, Android Ultra HDR, ISO 21496-1).
- GIGW: Guidelines for Indian Government Websites and Apps; version 3.0 is aligned with WCAG 2.1 AA.
- GLB and USDZ: the binary glTF 3D file Android and Chrome read, and Apple's packaged Universal Scene Description file that iOS AR Quick Look opens.
- gsm: grams per square metre, the weight specification for paper.
- HLG: Hybrid Log-Gamma, the HDR transfer function built for broadcast and phones.
- Hot foil: a heated die pressing metallic or pigment foil from a carrier film onto the sheet.
- IAB: Interactive Advertising Bureau, the trade body whose Tech Lab publishes the display ad unit sizes and file weight limits.
- Initial load and subload: the IAB's two file-weight budgets for an ad, before and after the host page's load event.
- Instant Experience: Meta's full-screen mobile landing page that opens from an ad; required for collection ads.
- Integrated and short-term loudness: loudness averaged over the whole programme with silence gated out, and loudness over a sliding 3 s window, whose maximum R 128 s1 caps for adverts.
- Interop and SMPTE DCP: the older pre-standard cinema packaging, limited to 24 and 48 fps and now deprecated, and its successor packaged to the SMPTE ST 429 family.
- IPTC: the International Press Telecommunications Council, whose photo metadata standard defines the creator, rights and description fields embedded in images.
- Jacket: a newspaper front-page wrap sold as one advertising unit.
- KDM: Key Delivery Message, the key file that opens an encrypted DCP for one server and one time window.
- K-weight: the IAB's term for creative file weight in kilobytes after gzip compression.
- Legal range: video levels 16 to 235 in 8-bit and 64 to 940 in 10-bit, the range broadcast and Rec.709 delivery expect.
- Letterpress: relief printing that presses inked type and plates into the sheet, leaving an impression.
- LUFS and LKFS: loudness units relative to full scale, the integrated loudness measure of ITU-R BS.1770; LKFS is the ATSC name for the same unit.
- Maskable icon: a PWA or Android icon whose important content sits inside a safe circle so that launchers can crop it to any shape.
- Message template: Meta's term for a pre-approved WhatsApp Business message format, required for any conversation the business starts.
- Mupi: JCDecaux's 2 m² backlit poster frame (1185 x 1750 mm visible), the standard street and mall poster unit in the UAE.
- Nastaliq: the hanging Perso-Arabic calligraphic style used for Urdu, which needs extra leading.
- Nit: one candela per square metre, the unit of screen brightness.
- Open Graph: the meta tag protocol (the `og:` tags) that Facebook, LinkedIn, WhatsApp and others read to build a link preview.
- PDF/X: the ISO 15930 family of print-exchange PDF subsets; X-1a is flattened CMYK, X-4 keeps transparency and ICC colour, X-6 is based on PDF 2.0.
- PEAT: the Photosensitive Epilepsy Analysis Tool from the Trace Center, University of Maryland, which tests video against the flash thresholds.
- Performance Max: Google's campaign type that serves one asset group across Search, Display, YouTube, Discover, Gmail and Maps.
- Pixel map: the exact pixel width and height a screen displays, delivered 1:1.
- Pixel pitch: the distance in millimetres between adjacent LED centres on a wall; it sets native resolution and minimum viewing distance.
- Poster frame: the still an app preview shows before playback; Apple defaults it to 5 s in.
- PPI: pixels per inch, the density of an image at its printed size; distinct from dpi, the printer's dot density.
- Principal display panel: the face of a package shown to the consumer at retail, whose area sets the minimum letter heights in Indian labelling law.
- Programmatic DOOH: screen time bought through automated platforms such as Vistar Media, Broadsign and Moving Walls.
- Proof of play: the network's log that each DOOH spot ran.
- Protect lines: crop guides for each delivery ratio marked on the master and the monitor.
- PWA: progressive web app, a website installable from the browser through a web manifest and a service worker.
- Quiet zone: the blank margin a barcode needs on each side, measured in X-dimensions.
- Reference white: the HDR level for diffuse and graphics white, 203 cd/m² under ITU-R BT.2408.
- Reflow: WCAG 1.4.10, the requirement that content fits a 320 CSS px wide viewport without horizontal scrolling.
- Refresh rate (LED): how many times a second the LED drivers redraw the wall; 3,840 Hz or more avoids scan bands on camera.
- Responsive display ad (RDA): the Google Ads format that assembles uploaded images, logos and text into display units of any size.
- Rich black: a black built with cyan, magenta and yellow under the black ink, for large solid areas only.
- RIP: raster image processor, the software that turns a PDF into printer dots.
- RLM: the right-to-left mark (U+200F), an invisible character that sets direction so punctuation sits correctly in Arabic subtitles.
- Safe zone (platform): the part of a frame that a platform's own interface (captions, buttons, progress bar) does not cover.
- SCC: Scenarist Closed Caption, the CEA-608 caption file format for US broadcast with 32 characters per row.
- SDH: subtitles for the deaf and hard of hearing, which carry sound cues and run at higher reading speeds.
- Spark Ads: TikTok's format for running an existing organic post, with its engagement, as a paid ad.
- Sponsored Snaps: Snapchat's ad delivered into the Chat inbox and opened like a Snap.
- Spot channel: a separate channel or layer holding the art for one ink or finish (foil, UV, white), from which the finisher makes the die, block or screen.
- Spot UV: a gloss coating printed in register over part of the sheet.
- SRT: SubRip subtitle format, plain text with sequence numbers and comma-separated millisecond timecodes.
- Status codes: this file's verification marks; V verified on the primary page, T third-party only, U unverified, H house rule, D derived from a V value.
- TAC: total area coverage, the maximum sum of the four ink percentages at any point (300% on PSO Coated v3, 240% on newsprint).
- Thought Leader ads: LinkedIn ads that promote a member's existing post.
- TTML and IMSC: Timed Text Markup Language, the XML subtitle format for broadcast and streaming, and its W3C profile for subtitles.
- Unipole: a single-column roadside billboard, the standard large-format unit on Dubai's highways.
- Universal vertical safe box: the house 815 x 958 px text area on a 1080 x 1920 frame, the union of every platform overlay in section 5.6.
- Viewport: the visible area of a web page in CSS pixels, the figure design breakpoints address.
- VMC and CMC: Verified Mark Certificate (requires a registered trademark) and Common Mark Certificate, the certificates that let Gmail show a BIMI logo.
- WebVTT: Web Video Text Tracks, the HTML5 caption format with positioning and styling, written like SRT with full-stop millisecond separators.
- WhatsApp Business Platform: Meta's API service, reached through the Cloud API, through which businesses message customers on WhatsApp.
- X-dimension: the width of the narrowest bar in a barcode (0.330 mm for EAN-13 at 100% magnification), the unit in which barcode sizes and quiet zones are set.
- XMP sidecar: the Adobe metadata file stored beside a raw file, holding its edits and captions.

## Sources and further reading

Platform help centres and developer documentation (read 28 October 2026 unless dated 29 October):

- Meta ads guide: facebook.com/business/ads-guide/update/image/facebook-feed, /video/facebook-feed, /video/facebook-story, /video/facebook-instream-video (29 October), /carousel/facebook-feed, /collection/facebook-feed, /image/instagram-feed, /image/instagram-story, /video/instagram-story, /video/instagram-reels; Facebook Help, page cover and profile pictures: facebook.com/help/125379114252045; Instagram Graph API media reference: developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media (29 October); Threads API overview: developers.facebook.com/docs/threads/overview; Open Graph images: developers.facebook.com/docs/sharing/webmasters/images; Meta Spark closure notice: spark.meta.com (29 October)
- WhatsApp Business Platform (29 October): Cloud API media, developers.facebook.com/docs/whatsapp/cloud-api/reference/media; message template components, developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components; pricing, developers.facebook.com/docs/whatsapp/pricing; WhatsApp blog, Updates tab announcement, blog.whatsapp.com/helping-you-find-more-channels-and-businesses-on-whatsapp
- YouTube Help: recommended upload encoding settings, support.google.com/youtube/answer/1722171; thumbnails, answer/72431; channel art and icon, answer/10456525; end screens, answer/6388789; titles and descriptions, answer/57404; Shorts, answer/10059070; upload size and length, answer/71673
- Google Ads Help: responsive display ads, support.google.com/google-ads/answer/7005917; video ad formats, answer/2375464; Performance Max assets, answer/14528373, 14530211, 14528532; Demand Gen assets, answer/13704860; non-skippable in-stream ads, answer/11462260; YouTube TV non-skippable ads, answer/14361818; Google Ads policy on animation, support.google.com/adspolicy/answer/176108 (29 October)
- Google, other (29 October): Merchant Center image requirements, support.google.com/merchants/answer/6324350; Business Profile photos and videos, support.google.com/business/answer/6103862; Search Central, favicons in search results, developers.google.com/search/docs/appearance/favicon-in-search; Workspace Admin Help, set up BIMI, knowledge.workspace.google.com/admin/security/set-up-bimi
- TikTok Ads Help, video ads specifications: ads.tiktok.com/help/article/video-ads-specifications
- LinkedIn: single image ads, linkedin.com/help/lms/answer/a426534 (28 and 29 October); video ads, a424737; document ads, a493903; image specifications for Pages, linkedin.com/help/linkedin/answer/a563309 (29 October)
- Pinterest Business Help, product specs: help.pinterest.com/en/business/article/pinterest-product-specs
- Snapchat for Business, ad formats: forbusiness.snapchat.com/advertising/ad-formats and /ad-formats/single-image-or-video-ads (28 and 29 October)
- Spotify Advertising specs: ads.spotify.com/en-US/ad-specs/audio-ad-specs and /in-stream-video-ad-specs; Spotify for Artists, loudness normalisation: support.spotify.com/us/artists/article/loudness-normalization
- Apple App Store Connect Help (28 and 29 October): screenshot specifications, developer.apple.com/help/app-store-connect/reference/screenshot-specifications; app preview specifications, /reference/app-preview-specifications; platform version information, /reference/app-information/platform-version-information
- Google Play Console Help: store listing assets, support.google.com/googleplay/android-developer/answer/9866151; text limits, answer/9859152 (29 October); Android Developers, adaptive icons: developer.android.com/develop/ui/views/launch/icon_design_adaptive
- Shopify Help Center, theme images: help.shopify.com/en/manual/online-store/images/theme-images (29 October)
- web.dev: Web Vitals, web.dev/articles/vitals; Add a web app manifest, web.dev/articles/add-manifest
- Netflix Partner Help Center: Timed Text Style Guide General Requirements and English Timed Text Style Guide (28 October); Hindi Timed Text Style Guide, partnerhelp.netflixstudios.com/hc/en-us/articles/215600497-Hindi-Timed-Text-Style-Guide (29 October)

Specifications, standards and regulations:

- IAB Tech Lab, New Ad Portfolio, Fixed Size Ad Specifications (2017): iab.com/wp-content/uploads/2019/04/IABNewAdPortfolio_LW_FixedSizeSpec.pdf
- EBU R 128-2023, Loudness normalisation and permitted maximum level of audio signals (version 5, November 2023): tech.ebu.ch/docs/r/r128.pdf; EBU R 128 s1-2020, Loudness parameters for short-form content (version 3, August 2020): tech.ebu.ch/docs/r/r128s1.pdf
- ITU-R BS.1770-5, Algorithms to measure audio programme loudness and true-peak audio level (2023): itu.int/rec/R-REC-BS.1770; ATSC A/85:2013, Techniques for establishing and maintaining audio loudness for digital television: atsc.org/atsc-documents/a85-techniques-for-establishing-and-maintaining-audio-loudness-for-digital-television/
- ITU-R BT.2408, Guidelines for operational practices in HDR television production: itu.int/pub/R-REP-BT.2408; ITU-T H.273, coding-independent code points: itu.int/rec/T-REC-H.273
- Apple ProRes White Paper (April 2022): apple.com/final-cut-pro/docs/Apple_ProRes.pdf; Apple Digital Masters: apple.com/apple-music/apple-digital-masters/docs/apple-digital-masters.pdf
- W3C, Web Content Accessibility Guidelines (WCAG) 2.2 (5 October 2023, updated 12 December 2024): w3.org/TR/WCAG22; Andrew Somers, APCA in a Nutshell: github.com/Myndex/SAPC-APCA/blob/master/documentation/APCA_in_a_Nutshell.md
- ISO 216:2007 (A and B series); ISO 269:1985 (C series envelopes); ISO 15930 parts 1 to 9 (PDF/X); ISO 32000-2:2020 (PDF 2.0); ISO 12647-2:2013 and ISO 12647-3 (offset and newsprint process control); ISO/IEC 7810 (ID-1): catalogue at iso.org, which refused automated reads in this check
- SMPTE ST 2046-1:2009, Safe Areas for 16:9 Television Production; SMPTE ST 429-2, D-Cinema Packaging, DCP Operational Constraints; DCI Digital Cinema System Specification, version 1.4 (2020): dcimovies.com; ANSI/CTA-608-E, Line 21 data services
- GS1 General Specifications: gs1.org (refused automated reads in this check); IPTC Photo Metadata Standard (Digital Source Type): iptc.org/standards/photo-metadata/; C2PA Technical Specification: spec.c2pa.org; BIMI Group: bimigroup.org
- FSSAI, Compendium of the Food Safety and Standards (Labelling and Display) Regulations 2020, version 23 September 2021: fssai.gov.in/upload/uploadfiles/files/Compendium_Labelling_Display_23_09_2021.pdf (text extracted 29 October); Legal Metrology (Packaged Commodities) Rules 2011, Rule 7 as substituted by G.S.R. 629(E), 23 June 2017: consumeraffairs.nic.in; UAE.S GSO 9, UAE.S GSO 2233 and UAE.S GSO 1943, administered by MoIAT
- Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules 2026, G.S.R. 120(E): meity.gov.in; European Accessibility Act, Directive (EU) 2019/882; EN 301 549; IS 17802 (Bureau of Indian Standards)

Articles and reference pages:

- Andrey Sitnik, How to Favicon in 2021: Six files that fit most needs, Evil Martians: evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
- Microsoft Support, Change the size of your slides: support.microsoft.com/en-us/office/change-the-size-of-your-slides-040a811c-be43-40b9-8d04-0de5ed79987e
- iOS Resolution, device table: ios-resolution.com; Trace Center, PEAT: trace.umd.edu/peat/; Google, model-viewer: modelviewer.dev
- Third-party guides used where a platform publishes nothing or could not be read (28 and 29 October 2026), with what each supported: post-bridge.com (Instagram landscape); krumzi.com (Instagram 3:4); somake.ai (Reels cover); postfa.st (Instagram, TikTok and X sizes); inro.social and kontentino.com (Reels length); techradar.com and socialmediatoday.com (20-item carousels in the app); subtitlebee.com (TikTok safe zone); recurpost.com (TikTok cover); ttcalculator.net and sociality.io (TikTok length); skedsocial.com and opentweet.io (X media); manypixels.co and waalaxy.com (LinkedIn personal cover); strikesocial.com (Snapchat safe zone); netzwelt.de, androidauthority.com and WABetaInfo (WhatsApp status); taxclue.in (Legal Metrology Rule 7 reading); studycafe.in and freyrsolutions.com (FSSAI dates); smartprix.com and kimovil.com (Android displays)
- Wikipedia, used as secondary summaries of standards and events: en.wikipedia.org/wiki/ISO_216; en.wikipedia.org/wiki/Business_card; en.wikipedia.org/wiki/PDF/X; en.wikipedia.org/wiki/Digital_Cinema_Package; en.wikipedia.org/wiki/Ghatkopar_hoarding_collapse

Books:

- Robert Bringhurst, The Elements of Typographic Style, version 4.0 (Hartley and Marks, 2012): measure and leading (chapters 2 and 3), the basis of the deck and document sizes in sections 7.3 and 7.4
- Charles Poynton, Digital Video and HD: Algorithms and Interfaces, second edition (Morgan Kaufmann, 2012): frame rates, Rec.709, legal range and the arithmetic of chroma subsampling
- Bob Katz, Mastering Audio: The Art and the Science, third edition (Focal Press, 2014): loudness, true peak and the reasoning behind streaming targets
