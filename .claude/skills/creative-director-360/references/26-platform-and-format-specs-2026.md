# Platform and format specifications, October 2026

The numbers for every format the agency ships, verified against platform help centres and standards where they could be read, dated, and flagged where they could not. The single sheet to check before export. As of October 2026 (checks run 28 October 2026).

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
12. [Terms introduced](#terms-introduced)
13. [Sources and further reading](#sources-and-further-reading)

## 1. Method note and how to read this sheet

### 1.1 How each value was checked

Every row carries a status code, a source and a date. The codes mean one thing each.

| Code | Meaning | What to do with it |
|---|---|---|
| V | Verified on 28 October 2026 by reading the named primary page (platform help centre, ads guide, developer documentation, or the standard itself) | Ship against it |
| T | Found only in third-party guides (scheduling tools, agency blogs); the platform page could not be read in this check, or the platform does not publish the number | Treat as a working default; confirm in the platform's own upload or ads tool before a client-facing deliverable |
| U | Unverified in this check: a standard or network specification that could not be fetched, or a value carried from prior knowledge of the standard | Verify against the named document before relying on it; never quote it to a client as current |

Why the discipline: platform numbers move without notice. In this check alone, Meta's ads guide recommends 1440 x 2560 for Reels and Stories and 1440 x 1800 for 4:5 feed (not the 1080-wide values most guides still print), YouTube's thumbnail page now recommends 3840 x 2160 (not 1280 x 720), and Apple's screenshot page lists an "iPhone Duo" with inner and outer displays. A sheet without dates is a liability.

### 1.2 Pages that could not be read on 28 October 2026

These are listed so the next person knows where the gaps are and does not assume they were checked: Instagram Help Centre articles (JavaScript-rendered, body empty), X business help and X developer card documentation (HTTP 403 and 402), Snapchat Business Help (404; the public Snapchat for Business format page was readable instead), LinkedIn organic help pages (rate-limited; the LinkedIn Marketing Solutions ads pages were readable), DCI specification site (empty body), FSSAI gazette PDF (empty body), GS1 EAN-UPC page (403), Apple HIG app icons (empty body), Times OOH and JCDecaux UAE sites (unreachable or 503), Backlite Media and Hypermedia sites (readable, but they publish no artwork specifications online).

### 1.3 Reading the master table

Section 11 collapses everything into one table: format, dimensions, ratio, duration, file type, max size, safe zone, source URL, date verified. Use sections 2 to 10 for the reasons and the exceptions; use section 11 at export time.

### 1.4 House conventions that override platform minimums

The design-taste house layer (see design-taste, SKILL.md, section 7) sets the look. This file sets the container. Where they meet, the house rules are: export at the platform's recommended size, never the minimum, because every platform recompresses and a minimum-size upload is soft after recompression; keep the master at 2x the delivery size so a reframe or a later spec change does not force a reshoot; and keep every text element inside the tightest safe zone of all placements the asset will run in, because Meta, TikTok and Pinterest each overlay different UI and one asset usually runs in all of them.

## 2. Social organic specs

### 2.1 Instagram

Instagram's own Help Centre could not be read in this check. The verified numbers below come from Meta's ads guide pages, which describe the same renderer; the organic-only numbers (grid, carousel count, captions) are third-party and marked T.

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Feed portrait (4:5) | 1440 x 1800 recommended in the ads guide; 1080 x 1350 is the common organic export. Minimum ratio 4:5 (400 x 500), maximum 1.91:1 (191 x 100), tolerance 1% | V | facebook.com/business/ads-guide/update/image/instagram-feed | 2026-10-28 |
| Feed square (1:1) | 1080 x 1080 | T | postfa.st/sizes/instagram/feed | 2026-10-28 |
| Feed landscape (1.91:1) | 1080 x 566 | T | post-bridge.com/blog/instagram-post-sizes | 2026-10-28 |
| Feed 3:4 upload | 1080 x 1440; some guides report it fills the 3:4 grid tile without crop, others report inconsistent feed behaviour. Test one post before changing the workflow | T | krumzi.com/blog/instagram-carousel-size-guide | 2026-10-28 |
| Profile grid tile | 3:4 since the January 2025 grid change; a 4:5 post shows its centre 1012 x 1350 in the grid, so about 34 px is lost on each side | T | postfa.st/sizes/instagram/feed | 2026-10-28 |
| Reels canvas | 9:16; ads guide recommends 1440 x 2560; 1080 x 1920 is the common organic export; MP4 or MOV; 4 GB max | V | facebook.com/business/ads-guide/update/video/instagram-reels | 2026-10-28 |
| Reels duration | Ads: 0 s to 15 min. Organic: third-party guides disagree (3 min in-app, 20 min upload on some accounts, 90 s default on others). Reels over 3 min are reported as not recommended to non-followers | V (ads) T (organic) | as above; hopperhq.com/blog/instagram-reel-size | 2026-10-28 |
| Reels and Stories safe zone | Keep 14% of the top, 35% of the bottom and 6% of each side clear. At 1080 x 1920 that is top 269 px, bottom 672 px, sides 65 px; at 1440 x 2560 it is top 358 px, bottom 896 px, sides 86 px (pixel values derived from the percentages) | V | facebook.com/business/ads-guide/update/video/instagram-reels | 2026-10-28 |
| Reels cover frame | 1080 x 1920 full frame; the grid shows a centre crop (3:4 tile), so hold the subject in the central 1080 x 1440 | T | somake.ai/blog/instagram-reel-size-guide | 2026-10-28 |
| Stories | 9:16, 1440 x 2560 recommended (ads guide), 1 s to 60 min for ads; organic stories cut into 60 s cards. Clips under 16 s play whole; 16 s and over may split into up to three cards | V | facebook.com/business/ads-guide/update/video/instagram-story | 2026-10-28 |
| Carousel | Up to 20 slides from the app; 10 through the Content Publishing API that scheduling tools use. All slides take the ratio of the first slide; one caption for the set | T | online-tech-tips.com (20-slide report); socialk.it/en/sizes/instagram-carousel-size | 2026-10-28 |
| Caption | 2,200 characters; 30 hashtags (hashtag limit verified on the ads guide) | T (caption) V (hashtags) | postfa.st; facebook.com/business/ads-guide/update/image/instagram-feed | 2026-10-28 |
| Alt text | About 100 characters in the custom alt text field | T | third-party guides | n/a |
| Frame rate and bitrate | 30 fps fixed frame rate, H.264, progressive, square pixels, stereo AAC 128 kbps or higher; no edit lists or special boxes in the container | V | facebook.com/business/ads-guide/update/video/instagram-story | 2026-10-28 |
| Profile picture | Upload 320 x 320; displays at about 110 px on mobile | T | third-party guides | n/a |

Reason for the 4:5 default: 4:5 is the tallest ratio the feed shows without crop, so it buys the most screen per post; 1:1 gives up 20% of the height for nothing, and 1.91:1 gives up 58%. Reason for 1440-wide masters: Instagram delivers to 3x phones (1206 to 1320 px wide, section 4.7), so a 1080-wide upload is already upscaled on an iPhone 17 Pro Max.

### 2.2 TikTok

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Video canvas | 9:16, 1080 x 1920; ads accept 9:16 at 540 x 960 minimum, 16:9 at 960 x 540, 1:1 at 640 x 640 | V (ads page) | ads.tiktok.com/help/article/video-ads-specifications | 2026-10-28 |
| File types | MP4, MOV, MPEG, 3GP, AVI (ads); MP4 H.264 with AAC is the safe export | V | as above | 2026-10-28 |
| Duration | Ads: up to 10 min. Organic: 10 min in-app recording; TikTok began testing 60 min uploads in May 2024, and third-party guides report 60 min uploads on many accounts and 10 min through the Content Posting API that schedulers use | V (ads) T (organic) | as above; heyorca.com/blog/tiktok-media-specs-best-practices-2026 | 2026-10-28 |
| File size | Ads 500 MB. Organic: about 72 MB on Android, about 288 MB on iOS, 500 MB to 4 GB on web depending on the guide | V (ads) T (organic) | as above; postfa.st/sizes/tiktok/video | 2026-10-28 |
| Bitrate | 516 kbps minimum (ads) | V | as above | 2026-10-28 |
| Safe zone | TikTok publishes downloadable safe zone files on the ads spec page rather than fixed pixels, because the overlay depends on caption length and format. Working default from the files and third-party guides: top about 290 px, bottom about 480 px, right column about 200 px on a 1080 x 1920 canvas | V (method) T (pixels) | as above; subtitlebee.com/blog/tiktok-video-size | 2026-10-28 |
| Photo mode | 1080 x 1920 images, up to 35 per post, swiped as a carousel with music | T | third-party guides | n/a |
| Cover | Full 1080 x 1920 frame; the profile grid trims top and bottom to about a 3:4 tile, so hold the subject centred | T | recurpost.com/tiktok-scheduler/tiktok-video-sizes | 2026-10-28 |
| Brand or account name in ads | 20 characters (10 for Chinese, Japanese, Korean), one line | V | ads.tiktok.com | 2026-10-28 |
| Profile photo in ads | 98 x 98 px, under 50 KB, key element inside a 66 x 66 centre | V | ads.tiktok.com | 2026-10-28 |

### 2.3 YouTube

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Container and codec | MP4 with the moov atom at the front (Fast Start), no edit lists; H.264 High Profile, progressive, 2 consecutive B-frames, closed GOP of half the frame rate, CABAC, variable bitrate, 4:2:0 | V | support.google.com/youtube/answer/1722171 | 2026-10-28 |
| Audio | AAC-LC or Opus (Eclipsa Audio also listed), 48 kHz; mono 128 kbps, stereo 384 kbps, 5.1 512 kbps | V | as above | 2026-10-28 |
| Frame rate | Upload at the recorded rate: 24, 25, 30, 48, 50, 60; deinterlace first (1080i60 becomes 1080p30) | V | as above | 2026-10-28 |
| Colour | SDR in BT.709 (transfer, primaries, matrix; H.273 value 1); full range is converted to limited; BT.2020 without an HDR transfer function is converted to 8-bit BT.709 | V | as above | 2026-10-28 |
| Shorts | Vertical, up to 3 min, maximum 1080p, title 100 characters | V | support.google.com/youtube/answer/10059070 | 2026-10-28 |
| Thumbnail | Page now recommends 3840 x 2160 at 16:9, minimum width 640, JPG or PNG; 2 MB limit on mobile uploads, 50 MB on desktop. Export 1280 x 720 under 2 MB when a client's older checklist asks for it; it still passes | V | support.google.com/youtube/answer/72431 | 2026-10-28 |
| Banner | Minimum 2048 x 1152 at 16:9; recommended 2560 x 1440 for TV; safe area for text and logos 1235 x 338 at the minimum size (scales to about 1544 x 423 on the 2560 canvas, which is where the familiar 1546 x 423 comes from); 6 MB max | V | support.google.com/youtube/answer/10456525 | 2026-10-28 |
| Channel icon | Renders at 98 x 98; upload a square, 15 MB max, JPG, GIF (not animated), BMP or PNG; upload 800 x 800 so the 2x and 3x renders stay sharp | V | as above | 2026-10-28 |
| Video watermark | Square, minimum 150 x 150, under 1 MB | V | as above | 2026-10-28 |
| End screens | Video must be at least 25 s; the end screen occupies the last 5 to 20 s; up to 4 elements at 16:9 | V | support.google.com/youtube/answer/6388789 | 2026-10-28 |
| Title and description | Title 100 characters; description 5,000 | V | support.google.com/youtube/answer/57404 | 2026-10-28 |

Recommended upload bitrates in Mbps (standard frame rate 24, 25, 30 first; high frame rate 48, 50, 60 second), verified on the encoding page:

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

LinkedIn's organic help pages were rate-limited in this check. The Marketing Solutions ads specification pages were readable, and the organic renderer uses the same image and document pipeline.

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Image post | 1.91:1 at 1200 x 628, 1:1 at 1200 x 1200, 4:5 at 720 x 900 (ads page recommendations); maximum 7680 x 4320; 5 MB; JPG, PNG, GIF (animated GIF up to 250 frames); images under 401 px wide display as thumbnails | V (ads page) | linkedin.com/help/lms/answer/a426534 | 2026-10-28 |
| Document post (PDF carousel) | PDF, PPT, PPTX, DOC, DOCX; 100 MB and 300 pages maximum; 1 million words; flatten layers; all pages one size. Square 1:1 or 4:5 pages read largest on mobile | V | linkedin.com/help/lms/answer/a493903 | 2026-10-28 |
| Video post | MP4; 75 KB to 500 MB; 3 s to 30 min; 16:9 at 1920 x 1080 (min 640 x 360), 1:1 up to 1920 x 1920, 4:5 at 720 x 900 up to 1080 x 1350, 9:16 at 720 x 1280 up to 1080 x 1920; under 30 fps; AAC or MPEG4 audio | V (ads page) | linkedin.com/help/lms/answer/a424737 | 2026-10-28 |
| Post text | 3,000 characters maximum; first 150 show before truncation; up to 10 emojis counted (the house uses none) | V (ads intro text) | linkedin.com/help/lms/answer/a424737 | 2026-10-28 |
| Personal cover | 1584 x 396 (4:1) | T | third-party guides | n/a |
| Company page cover | 1128 x 191 | T | third-party guides | n/a |
| Profile photo and company logo | 400 x 400 upload; logo 300 x 300 | T | third-party guides | n/a |

### 2.5 X

Both X help pages returned 403 and the developer card page returned 402 in this check, so every X value is T or U.

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Image | 16:9 at 1200 x 675 or 1:1 at 1200 x 1200; JPEG and PNG up to 5 MB; GIF up to 15 MB | T | skedsocial.com/blog/twitter-post-size-guide | 2026-10-28 |
| Video | 1920 x 1080 or 1080 x 1080, MP4 H.264 AAC, up to 512 MB; 2 min 20 s (140 s) for standard accounts, longer for Premium | T | heyorca.com/blog/x-twitter-media-specs-best-practices-2026 | 2026-10-28 |
| Post text | 280 characters; Premium long posts to 25,000 | T | third-party guides | n/a |
| Profile and header | Profile 400 x 400; header 1500 x 500 | T | third-party guides | n/a |
| Summary card with large image | 2:1, minimum 300 x 157, maximum 4096 x 4096, under 5 MB, JPG, PNG, WEBP, GIF | U | developer.x.com card documentation (402 in this check) | n/a |

### 2.6 Threads

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Text | 500 characters | V | developers.facebook.com/docs/threads/overview | 2026-10-28 |
| Image | 8 MB; width 320 to 1440 px (scaled otherwise); aspect ratio limit 10:1 | V | as above | 2026-10-28 |
| Video | 300 s (5 min); 1 GB; 9:16 recommended to avoid crop or letterbox | V | as above | 2026-10-28 |
| Carousel | 2 to 20 items | V | as above | 2026-10-28 |

### 2.7 Pinterest

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Standard pin | 2:3 at 1000 x 1500; PNG or JPEG; 20 MB desktop, 32 MB in-app; taller ratios are cut off in feed | V | help.pinterest.com/en/business/article/pinterest-product-specs | 2026-10-28 |
| Video pin | Ratio between 1:2 and 1.91:1; recommended 1:1, 2:3, 4:5, 9:16; 4 s to 15 min; 2 GB; MP4, MOV, M4V; H.264 or H.265; 6 to 15 s recommended for ads | V | as above | 2026-10-28 |
| Idea ad (multi-page) | 9:16 at 1080 x 1920; video up to 5 min; 2 GB on app, 100 MB on web; safe zone top 270, left 65, right 195, bottom 440 px | V | as above | 2026-10-28 |
| Carousel | 2 to 5 images at 1:1 or 2:3, 20 MB each (catalogue carousels 2 to 10) | V | as above | 2026-10-28 |
| Title and description | Title 100 characters (first 40 show, 30 for double-byte); description 800 | V | as above | 2026-10-28 |
| Profile picture | 165 x 165 display; upload 600 x 600 | T | third-party guides | n/a |

### 2.8 Facebook

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Feed image | 4:5 at 1440 x 1800; JPG or PNG; 30 MB; minimum 600 wide, 750 high at 4:5; ratio tolerance 3% | V | facebook.com/business/ads-guide/update/image/facebook-feed | 2026-10-28 |
| Feed video | 4:5 at 1440 x 1800; MP4, MOV or GIF; 4 GB; 1 s to 241 min; minimum 120 x 120; stereo AAC 128 kbps or higher | V | facebook.com/business/ads-guide/update/video/facebook-feed | 2026-10-28 |
| Stories | 9:16 at 1440 x 2560; 4 GB; 1 s to 3 min; clips of 15 s or less play whole, longer ones split into cards; safe zone 14% top, 35% bottom, 6% sides | V | facebook.com/business/ads-guide/update/video/facebook-story | 2026-10-28 |
| Reels | Same canvas and safe zone as Instagram Reels (section 2.1) | T | third-party guides | n/a |
| Page cover | Upload 851 x 315, sRGB JPG under 100 KB; minimum 400 x 150; desktop shows 16:9 left-aligned, mobile 2.4:1; the profile picture overlaps by about 40 px | V | facebook.com/help/125379114252045 | 2026-10-28 |
| Page profile picture | Upload 320 x 320; displays 176 x 176 on desktop, 196 x 196 on phones, cropped to a circle | V | as above | 2026-10-28 |

### 2.9 WhatsApp

WhatsApp publishes no media specification page that could be read in this check; the values are U and should be tested on a handset.

| Item | Value | Status |
|---|---|---|
| Status image and video | 9:16 at 1080 x 1920; video status cut into 60 s segments (raised from 30 s in 2023) | U |
| Channel post | Image or video attached to a text post; media recompressed heavily (about 16 MB effective for video on most handsets before the "HD" option) | U |
| Rule | Send the final file to a test handset and view it on both iOS and Android before the client sees it; WhatsApp's recompression is the harshest of any channel the agency uses | house |

### 2.10 Snapchat

| Item | Value | Status | Source | Checked |
|---|---|---|---|---|
| Single image or video ad (also the organic canvas) | 1080 x 1920 at 9:16; JPG, PNG, MP4, MOV; 3 s to 180 s; brand name 25 characters, headline 34 | V | forbusiness.snapchat.com/advertising/ad-formats/single-image-or-video-ads | 2026-10-28 |
| Safe zone | Keep the top 150 px and bottom 250 px clear (U; Snapchat's business help page was 404 in this check) | U | n/a | n/a |

### 2.11 Profile and cover sizes, all platforms

| Platform | Profile picture | Cover or banner | Status |
|---|---|---|---|
| Instagram | 320 x 320 upload, circle crop | none | T |
| TikTok | 98 x 98 render in ads (upload 400 x 400), key element in centre 66 x 66 | none | V (ads) |
| YouTube | Renders 98 x 98; upload 800 x 800, 15 MB max | 2560 x 1440, safe 1235 x 338 at 2048 x 1152, 6 MB | V |
| LinkedIn personal | 400 x 400 | 1584 x 396 | T |
| LinkedIn company | 300 x 300 logo | 1128 x 191 | T |
| X | 400 x 400 | 1500 x 500 | T |
| Threads | Shares the Instagram picture | none | V (product behaviour) |
| Pinterest | 600 x 600 upload | none | T |
| Facebook page | 320 x 320 | 851 x 315, under 100 KB sRGB JPG | V |
| WhatsApp business | 640 x 640 | none | U |
| Snapchat | Bitmoji or 1080 x 1080 public profile image | none | U |

House rule for the m360 mark across these: the mark is black and background-less (design-taste, section 7), so on every circle-cropped profile it sits inside a white disc with the mark occupying 60% of the diameter; at 98 px that leaves a 59 px mark, which is the smallest the mark holds its counters.
