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

These are listed so the next person knows where the gaps are and does not assume they were checked: Instagram Help Centre articles (JavaScript-rendered, body empty), X business help and X developer card documentation (HTTP 403 and 402), Snapchat Business Help (404; the public Snapchat for Business format page was readable instead), LinkedIn organic help pages (rate-limited; the LinkedIn Marketing Solutions ads pages were readable), DCI specification site (empty body), FSSAI gazette PDF (empty body), GS1 EAN-UPC page (403), Apple HIG app icons (empty body), Times OOH and JCDecaux UAE sites (unreachable or 503), Backlite Media and Hypermedia sites (readable, but they publish no artwork specifications online), Laqshya Media and JCDecaux Middle East (hosts did not resolve from this session), ELAN and Emaar Malls advertising pages (503), Netflix sound mix specification (redirected to a page with an empty body), Apple Human Interface Guidelines app icon and layout pages (JavaScript-rendered, body empty), GS1 General Specifications (403 and an HTML stub in place of the PDF), Legal Metrology (Packaged Commodities) Rules PDF on consumeraffairs.nic.in (connection reset), Litmus, Mailchimp and Campaign Monitor email sizing guides (404), the Google Store Pixel 10 and Samsung Galaxy S25 specification pages (truncated and 404), and the LinkedIn conversation ads help article (404). Web search was unavailable in this session (the shared search budget was exhausted by other agents), so every check was a direct read of the primary page or a local text extraction of the primary PDF (Apple ProRes white paper April 2022, EBU R 128-2023, IAB fixed size ad specifications 2017, Apple Digital Masters).

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

## 3. Paid media specs

### 3.1 Meta ads (Facebook, Instagram, Messenger, Audience Network)

Meta's ads guide is the only Meta page set that was readable in this check, and it is the authoritative one for paid placements. Every row below marked V was read on 28 October 2026 at facebook.com/business/ads-guide. The recommended resolutions are now 1440-wide (feed) and 1440 x 2560 (vertical); the guide's reason is the 3x phone screens in section 4.7.

| Placement | Ratio and resolution | Duration | File and size | Text recommendations | Status | Source |
|---|---|---|---|---|---|---|
| Facebook feed image | 4:5, 1440 x 1800; minimum width 600, minimum height 750 at 4:5; tolerance 3% | n/a | JPG or PNG, 30 MB | Primary text 50 to 150 characters, headline 27 | V | ads-guide/update/image/facebook-feed |
| Facebook feed video | 4:5, 1440 x 1800; minimum 120 x 120 | 1 s to 241 min | MP4, MOV or GIF, 4 GB; stereo AAC 128 kbps or higher | As feed image | V | ads-guide/update/video/facebook-feed |
| Instagram feed image | 4:5, 1440 x 1800; minimum ratio 4:5, maximum 1.91:1; tolerance 1% | n/a | JPG or PNG, 30 MB | Primary text 125 characters (Meta's cross-placement recommendation), 30 hashtags | V | ads-guide/update/image/instagram-feed |
| Instagram Stories image | 9:16, 1440 x 2560; minimum width 500; tolerance 1% | Shows 5 to 16 s or until swipe | JPG or PNG, 30 MB | Primary text 125 characters | V | ads-guide/update/image/instagram-story |
| Instagram Stories video | 9:16, 1440 x 2560 | 1 s to 60 min; clips under 16 s play whole | MP4 or MOV, 4 GB; H.264, fixed frame rate, square pixels, progressive, AAC 128 kbps or higher | As Stories image | V | ads-guide/update/video/instagram-story |
| Instagram Reels video | 9:16, 1440 x 2560; minimum width 250 under 30 s, 500 at 30 s or longer | 0 s to 15 min | MP4 or MOV, 4 GB; H.264, fixed frame rate, AAC 128 kbps or higher | Primary text 44 characters (the Reels overlay truncates earlier than feed) | V | ads-guide/update/video/instagram-reels |
| Facebook Stories video | 9:16, 1440 x 2560 | 1 s to 3 min; 15 s or shorter plays whole | 4 GB | Primary text 125 characters | V | ads-guide/update/video/facebook-story |
| Carousel (Facebook feed) | 1:1, at least 1080 x 1080; tolerance 3% | Video cards 1 s to 240 min | Image 30 MB, video 4 GB; JPG, PNG, MP4, MOV, GIF | 2 to 10 cards; primary text 80, headline 20, description 18 (all "recommended", meaning the visible length before truncation on the card) | V | ads-guide/update/carousel/facebook-feed |
| Collection (Facebook feed) | Cover 1.91:1 to 1:1, at least 1080 x 1080; cover is the first asset of the Instant Experience, followed by 3 product images | Cover video as feed video | Image 30 MB, video 4 GB | Primary text 125, headline 40; Instant Experience required | V | ads-guide/update/collection/facebook-feed |
| Reels and Stories safe zone | Keep the top 14%, bottom 35% and each side 6% free of text and logos. At 1440 x 2560: top 358, bottom 896, sides 86 px. At 1080 x 1920: top 269, bottom 672, sides 65 px. Pixel values are derived from the percentages, which is how Meta states them | | | | V | as above |

Rules the table implies, with the reasons:

- One 4:5 asset at 1440 x 1800 and one 9:16 asset at 1440 x 2560 cover every Meta placement that matters for a luxury client (feed, Explore, Stories, Reels, Audience Network native). Meta crops 4:5 to 1:1 for the placements that still take square (Marketplace, right column on desktop), so hold the subject inside the central 1440 x 1440 of the 4:5 frame. The right column, in-stream and search placements have their own ratios (1.91:1 and 16:9) but these are third-party-documented and the house does not buy them for luxury work.
- Primary text: Meta's figure of 125 characters is where "See more" appears on most placements; the Reels figure of 44 is where the overlay truncates. Write the first 44 characters as a complete thought.
- Headline 27 on feed, 40 on collection, 20 on carousel cards: the carousel number is the one that bites. A luxury headline on a carousel card is three words.
- Text in image: Meta removed the 20% text rule in 2020 and the guide no longer states a ratio; the auction still penalises image-heavy text through lower estimated action rates, so the house keeps text on image to one line and lets primary text carry the copy.
- Frame rate: Meta asks for a fixed frame rate and the Stories page states 30 fps as the standard. Export 25 fps material as 25 fps (Meta accepts it); do not convert, because 25 to 30 pulldown judders on pans.

### 3.2 Google Ads

Responsive display ads (RDA), read on support.google.com/google-ads/answer/7005917, 28 October 2026:

| Asset | Recommended | Minimum | Count | Limit | Status |
|---|---|---|---|---|---|
| Landscape image 1.91:1 | 1200 x 628 | 600 x 314 | up to 15 images in total | 5120 KB each | V |
| Square image 1:1 | 1200 x 1200 | 300 x 300 | as above | 5120 KB | V |
| Landscape logo 4:1 | 1200 x 300 | 512 x 128 | up to 5 logos | 5120 KB | V |
| Square logo 1:1 | 1200 x 1200 | 128 x 128 | as above | 5120 KB | V |
| Short headline | 30 characters | | 1 to 5 | | V |
| Long headline | 90 characters | | 1 | | V |
| Description | 90 characters | | 1 to 5 | | T (the page states the count; the 90 is from Google's asset table elsewhere) |
| Business name | 25 characters | | 1 | | T |
| Video | YouTube link | | | | V |

YouTube video ad formats, read on support.google.com/google-ads/answer/2375464:

| Format | Duration | Notes | Status |
|---|---|---|---|
| Skippable in-stream | No maximum; under 3 min recommended | Skip button after 5 s; the first 5 s is the whole ad for most viewers | V |
| Non-skippable in-stream | 15 to 60 s depending on campaign subtype; the body text says 60 s or shorter | The older 15 to 20 s ceiling no longer appears on the page; India and UAE inventory still clears fastest at 15 s | V |
| Bumper | 6 s, minimum 5 s | One idea, one line, logo in frame throughout | V |
| In-feed (formerly discovery) | No maximum | Thumbnail and title carry it; the thumbnail rules in section 2.3 apply | V |
| YouTube Shorts | Under 60 s recommended | Vertical 9:16; the Shorts overlay safe zone in section 5.6 | V |
| Masthead | No maximum; more than 10 s recommended | Desktop autoplays up to 30 s muted; mobile autoplays the full length | V |

Performance Max assets, read on support.google.com/google-ads/answer/14528373 (text), 14530211 (images), 14528532 (video):

| Asset | Requirement | Status |
|---|---|---|
| Headlines | 3 to 15, 30 characters each, at least one of 15 characters or fewer; 11 or more recommended | V |
| Long headlines | 1 to 5, 90 characters | V |
| Descriptions | 2 to 5, 90 characters; 4 or more recommended | V |
| Business name | 25 characters; must match the domain or the verified legal name | V |
| Display paths | up to 2, 15 characters each | V |
| Images 1.91:1 | 1200 x 628 recommended, 600 x 314 minimum, 4 or more, up to 20 images in total, 5120 KB | V |
| Images 1:1 | 1200 x 1200 recommended, 300 x 300 minimum, 4 or more | V |
| Images 4:5 | 960 x 1200 recommended, 480 x 600 minimum, 2 or more, optional | V |
| Logo 1:1 | 1200 x 1200 recommended, 128 x 128 minimum, 1 to 5 | V |
| Logo 4:1 | 1200 x 300 recommended, 512 x 128 minimum, optional | V |
| Image safe area | Keep content inside the central 80% of the image | V |
| Video | 16:9, 1:1 and 9:16, one of each, 10 s or longer, up to 15; 1080p; a vertical 10 to 60 s video for Shorts eligibility; Google auto-generates video from the images if none is supplied, which is the reason to always supply one | V |

Demand Gen assets, read on support.google.com/google-ads/answer/13704860:

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

Reason to supply the 4:5 and 9:16 images even where optional: Google generates them from the 1:1 by cropping and the crop is centred, which beheads portraits and cuts product off the edge.

### 3.3 TikTok ads

From ads.tiktok.com/help/article/video-ads-specifications (V, 28 October 2026) and the organic values in section 2.2:

| Item | Value | Status |
|---|---|---|
| Video | 9:16 at 540 x 960 minimum (deliver 1080 x 1920), 16:9 at 960 x 540, 1:1 at 640 x 640; MP4, MOV, MPEG, 3GP, AVI; 500 MB; 516 kbps minimum bitrate; up to 10 min | V |
| Ad text | 1 to 100 characters, no emojis (the house uses none in any case); brand name 20 characters | V (brand name) T (ad text) |
| Profile image | 98 x 98, under 50 KB, key element inside the centre 66 x 66 | V |
| Safe zone | TikTok supplies downloadable safe zone overlays on the spec page; working default on 1080 x 1920: top 290, bottom 480, right 200 px | V (method) T (pixels) |
| Spark Ads | Run an organic post as an ad; the organic specs in section 2.2 apply and the caption limit of the post applies | T |
| Carousel ads | 2 to 35 images at 1080 x 1920 | T |

### 3.4 LinkedIn ads

| Format | Specification | Status | Source |
|---|---|---|---|
| Single image | 1.91:1 at 1200 x 628, 1:1 at 1200 x 1200, 4:5 at 720 x 900; 5 MB; JPG, PNG, GIF; intro text 600 characters (150 before "see more"), headline 70, description 100 | V (image) T (text) | linkedin.com/help/lms/answer/a426534 |
| Video | MP4; 75 KB to 500 MB; 3 s to 30 min; 16:9 at 1920 x 1080, 1:1 up to 1920 x 1920, 4:5 up to 1080 x 1350, 9:16 up to 1080 x 1920; under 30 fps; intro text 3,000 maximum, 150 visible | V | linkedin.com/help/lms/answer/a424737 |
| Document | PDF, PPT, PPTX, DOC, DOCX; 100 MB; 300 pages; 1 million words; flatten layers; 1:1 or 4:5 pages read largest on mobile | V | linkedin.com/help/lms/answer/a493903 |
| Conversation (message) | Intro message 500 characters; up to 5 call-to-action buttons of 25 characters; banner 300 x 250 on desktop | T (page 404 in this check) | n/a |

### 3.5 X ads

Every X page was blocked in this check (section 1.2). Working defaults, all T: image 1200 x 1200 (1:1) or 1200 x 628 (1.91:1), under 5 MB; video 1:1 or 16:9, 1080 x 1080 or 1280 x 720 minimum, up to 2 min 20 s, 1 GB, MP4 H.264 AAC; website card headline 70 characters; post text 280. Confirm in the X Ads composer before trafficking.

### 3.6 Programmatic display: IAB fixed sizes and HTML5 weight

From the IAB Tech Lab New Ad Portfolio fixed size specification (2017, still the document publishers cite), extracted from the PDF at iab.com/wp-content/uploads/2019/04/IABNewAdPortfolio_LW_FixedSizeSpec.pdf, 28 October 2026. K-weight is the IAB's term for file weight in kilobytes after gzip; initial load is everything needed for the first visual display, subload is what the ad may load after the host page's load event.

| Unit | Pixels | Initial load kB | Subload kB | Status |
|---|---|---|---|---|
| Billboard | 970 x 250 | 250 | 500 | V |
| Super leaderboard, pushdown | 970 x 90 | 200 | 400 | V |
| Leaderboard | 728 x 90 | 150 | 300 | V |
| Medium rectangle | 300 x 250 | 150 | 300 | V |
| Skyscraper | 160 x 600 | 150 | 300 | V |
| Portrait | 300 x 1050 | 250 | 500 | V |
| Smartphone banner | 300 x 50 or 320 x 50 | 50 | 100 | V |
| Mobile interstitial | 640 x 1136, 750 x 1334 or 1080 x 1920 | 300 | 600 | V |
| Half page | 300 x 600 | 250 | 500 (from the sizing grid, 700 to 900 thousand pixels at 2x) | V |
| Large rectangle | 336 x 280 | 150 | 300 (sizing grid, 300 to 500 thousand pixels at 2x) | V |
| Mobile interstitial, small | 320 x 480 | 200 | 400 (sizing grid, 500 to 700 thousand pixels at 2x) | V |

General rules from the same document: pixel counts are calculated at 2x density (728 x 90 counts as 262,080 pixels); no more than 10 file requests on initial load; 30% CPU maximum per ad; audio muted until the user starts it; weights 30% lower for 3G markets, which still describes much of tier-two India. Google Ads uploaded HTML5 and image display creative is capped at 150 KB (V, from the Demand Gen page); Campaign Manager 360 and Display and Video 360 follow the IAB figures and allow heavier rich media by publisher arrangement (T).

### 3.7 Spotify audio and video ads

From ads.spotify.com/en-US/ad-specs, read 28 October 2026:

| Item | Value | Status |
|---|---|---|
| Audio ad length | Music ads 30 s maximum; long-form 60 s in select direct markets, skippable after 30 s; podcast ads 30 s | V |
| Audio file | MP3, WAV or OGG; 50 MB; 44.1 kHz; 192 to 320 kbps; stereo; loudness -16 LUFS (plus or minus 1.5 LU) | V |
| Script length | 65 words for 30 s, 100 words for 60 s | V |
| Companion display | 1:1, at least 600 x 600, JPEG or PNG, 200 KB; tagline 40 characters; advertiser name 25 | V |
| Canvas (looping visual on mobile) | 9:16 at 720 x 1280, MP4 or MOV, 200 KB, 3 to 8 s | V |
| Podcast CTA card | 640 x 640 JPG, 200 KB; advertiser name 30, description 40 | V |
| In-stream video | 9:16 at 720 x 1280 or 16:9 at 1280 x 720; up to 30 s; MOV or MP4; 500 MB; bitrate 198 kbps ideal, 320 maximum; audio RMS -14 dBFS, peak -0.2 dBFS; sound required | V |

The audio loudness figure matters: Spotify normalises music to -14 LUFS (section 5.5) and asks ads for -16, so an ad mastered to the music target is 2 LU louder than the track it interrupts, which is the single most common reason a luxury audio spot sounds cheap.

### 3.8 Digital out of home and large format

No Indian or UAE network published an artwork specification that could be read in this check (section 1.2). Backlite Media and Hypermedia were readable and publish none; the others were unreachable. Every DOOH value below is therefore T or U, and the rule is absolute: no DOOH file leaves the studio without the vendor's own artwork sheet for the named site, because screens on the same road run different pixel maps.

| Item | Working value | Status |
|---|---|---|
| Common digital screen canvases | 1080 x 1920 portrait (mall, metro, airport totems), 1920 x 1080 landscape (retail, petrol forecourt), custom LED pixel maps for roadside (deliver at native pixel map, 1:1) | T |
| Spot duration | 10 s and 15 s are the standard loop slots in India and the UAE; loops of 60 to 120 s share 6 to 8 advertisers; some airport and mall networks sell 6 s and 8 s | T |
| Frame rate and codec | 25 fps (50 Hz mains in both countries); MP4 H.264 High profile at 15 to 25 Mbps for 1080p, or JPG for static; no audio unless the site is specified as audio-enabled | T |
| Loop and motion | The first second must hold a readable composition (the viewer catches the loop mid-way); no fades to black between spots, the network inserts its own; brand visible in every frame | house |
| India static hoardings | Sizes are quoted in feet: 20 x 10, 30 x 15, 30 x 20, 40 x 20 and 60 x 20 ft are the common Mumbai and Delhi inventory; the Brihanmumbai Municipal Corporation capped new hoardings at 40 x 40 ft after the May 2024 Ghatkopar collapse. Artwork at 1:10 scale at 300 ppi (30 ppi at size), CMYK, 100 mm bleed at size | T (sizes) U (policy detail) |
| India transit and mall | Bus shelter panels about 1.2 x 1.8 m; metro pillar wraps and airport digital totems at 1080 x 1920; Times OOH (Mumbai airport, Delhi metro) and Laqshya (airports, malls) issue per-site sheets | U |
| UAE roadside | Unipoles on Sheikh Zayed Road and the E11 corridor (Backlite, Hypermedia, ELAN): faces of about 12 x 4 m and larger, digital faces at custom pixel maps; lamp post banners about 1.5 x 3 m on Dubai roads; the JCDecaux 2 m² mupi (the six-sheet-sized backlit poster, 1185 x 1750 mm visible) at bus shelters, airports and in malls; 48-sheet equivalents at 6096 x 3048 mm | T |
| UAE malls and airport | Dubai Mall (Emaar) and Mall of the Emirates digital portrait screens at 1080 x 1920; Dubai Airports (JCDecaux) digital at 1080 x 1920 and large landscape LED walls at custom maps; Arabic and English on the same face, Arabic reading right to left with its own type (see 03-typography.md, section 15) | U |

Reason for 1:10 scale on static large format: an artwork at full size would be 12,000 x 6,000 mm at 30 ppi, which is 14,173 x 7,087 px, well inside Photoshop's 300,000 px limit but outside most print RIPs' comfort; 1:10 at 300 ppi gives the same pixel count in a file the printer expects. Section 6.9 gives the resolution-by-distance table that justifies 30 ppi.

## 4. Web and app specs

### 4.1 Favicon and PWA icon set

The six-file set from Andrey Sitnik's Evil Martians article (read 28 October 2026) is the house standard because it covers every browser with the fewest files:

| File | Size | Use | Status |
|---|---|---|---|
| favicon.ico | 32 x 32 (single image inside the ICO) at the site root | Legacy browsers and anything that requests /favicon.ico blindly | V |
| icon.svg | Square vector | Modern browsers; may carry a prefers-color-scheme media query so the mark flips for dark tabs | V |
| apple-touch-icon.png | 180 x 180, mark scaled to 140 x 140 on a solid background | iOS and iPadOS home screen; Apple rounds the corners, so no transparency and no pre-rounding | V |
| icon-192.png | 192 x 192 | PWA home screen (Chromium requires 192 and 512) | V |
| icon-512.png | 512 x 512 | PWA splash screen | V |
| icon-mask.png | 512 x 512 with "purpose": "maskable"; keep the mark inside a 409 px diameter circle | Android launchers that crop to a shape | V |
| manifest.webmanifest | JSON listing the icons with src, sizes and type on every entry | Linked with rel="manifest"; only for installable sites | V |

Sizes 16 and 48 are inside the ICO history; a single 32 x 32 ICO is enough in 2026 because every current browser scales it. For the m360 mark (black, background-less) the touch icon and maskable icon get a white ground; the SVG stays transparent.

### 4.2 Open Graph and link preview images

| Item | Value | Status | Source |
|---|---|---|---|
| Open Graph image | At least 1200 x 630 (1.91:1), minimum 200 x 200, 600 x 315 is the floor for the large preview, 8 MB maximum; JPG or PNG | V | developers.facebook.com/docs/sharing/webmasters/images |
| X summary card with large image | 2:1, 300 x 157 minimum, 4096 x 4096 maximum, under 5 MB | U (developer.x.com returned 402) | n/a |
| LinkedIn and WhatsApp previews | Both read og:image; WhatsApp fetches images under 300 KB reliably and prefers 1:1 or 1.91:1 | T | n/a |

House: one 1200 x 630 image per page, exported at 2400 x 1260 for 2x previews and compressed under 300 KB, with the subject inside the central 1200 x 600 so the 1:1 crops some apps make still read.

### 4.3 App icons

| Platform | Specification | Status |
|---|---|---|
| iOS and iPadOS | One 1024 x 1024 PNG master without alpha in the asset catalogue; Xcode derives every size (the per-size list, 20 to 83.5 pt at 2x and 3x, is no longer hand-exported); iOS 26 layered icons are built in Icon Composer from the same master | T (Apple HIG and Xcode pages had empty bodies in this check) |
| Android adaptive icon | All layers 108 x 108 dp; the outer 18 dp on each side is reserved for the launcher mask and parallax; the inner 72 dp is the visible area; the 66 x 66 dp safe zone is never clipped; logo between 48 and 66 dp. At xxxhdpi (4x) that is 432 x 432 px with a 264 px safe zone, derived from the dp values | V (dp) T (px derivation) |
| Google Play icon | 512 x 512, 32-bit PNG with alpha, 1024 KB | V |
| Google Play feature graphic | 1024 x 500, JPEG or 24-bit PNG without alpha | V |
| Android TV banner | 1280 x 720 | V |

Source for Android: developer.android.com/develop/ui/views/launch/icon_design_adaptive and support.google.com/googleplay/android-developer/answer/9866151, read 28 October 2026.

### 4.4 App Store and Play Store screenshots

Apple, from developer.apple.com/help/app-store-connect/reference/screenshot-specifications, read 28 October 2026 (V). Up to 10 per device size, JPG or PNG, no alpha. Apple names the classes by display type now, so the familiar inch names are given as translation.

| Class (Apple's name) | Required | Portrait sizes | Models |
|---|---|---|---|
| iPhone with Dynamic Island (medium), the 6.1 and 6.3 inch class | Yes | 1206 x 2622, 1179 x 2556 | iPhone 17, 17 Pro, 16, 16 Pro, 15, 15 Pro, 14 Pro |
| iPhone with Dynamic Island (large), the 6.7 and 6.9 inch class | Falls back to Face ID large | 1320 x 2868, 1290 x 2796, 1260 x 2736 | iPhone 17 Pro Max, 18 Pro Max, Air, 16 Pro Max, 16 Plus, 15 Pro Max, 15 Plus, 14 Pro Max |
| iPhone with Face ID (large), 6.5 inch | Only if the large Dynamic Island set is absent | 1284 x 2778, 1242 x 2688 | 14 Plus, 13 Pro Max, 11 Pro Max, XS Max |
| iPhone with Face ID (medium) | Falls back | 1170 x 2532, 1125 x 2436, 1080 x 2340 | 16e, 14, 13, 13 mini, 12, 11 Pro, X, XS |
| iPhone with Home Button (large), 5.5 inch | Falls back | 1242 x 2208 | 8 Plus and earlier Plus models |
| iPhone with Home Button (medium), 4.7 inch | Falls back | 750 x 1334 | SE (2nd and 3rd gen), 8, 7, 6s |
| iPhone Duo | Required for apps built with the iOS 27.1 SDK from April 2027 | Outer 1398 x 2034, inner 2007 x 2853 | Apple's folding iPhone class |
| iPad 13 inch | Yes if the app runs on iPad | 2064 x 2752, 2048 x 2732 | iPad Pro 13 (M4 and later), iPad Air 13 |
| iPad 11 inch | Falls back to 13 | 1488 x 2266, 1668 x 2420, 1668 x 2388, 1640 x 2360 | iPad Pro 11, iPad Air 11, iPad |
| Mac | Yes for Mac apps | 1280 x 800, 1440 x 900, 2560 x 1600, 2880 x 1800 (16:10) | |
| Apple TV | Yes | 1920 x 1080 or 3840 x 2160 | |
| Apple Vision Pro | Yes | 3840 x 2160 | |
| Apple Watch | Yes | 422 x 514 (Ultra 3 and 4), 416 x 496 (Series 10 to 12), 410 x 502 (Ultra, Ultra 2), 396 x 484 (Series 7 to 9), 368 x 448 (Series 4 to 6, SE) | |

Google Play, from the listing assets page (V): 2 to 8 screenshots per device type; JPEG or 24-bit PNG without alpha; each side between 320 and 3840 px; the long side at most twice the short side; 16:9 or 9:16 recommended; for the large-screen and "designed for" recommendations supply at least four at 1920 x 1080 or 1080 x 1920; Wear OS 1:1 at 384 x 384 minimum; Android XR 4 to 8 at 8:5 under 8 MB; preview video by YouTube URL, public or unlisted, monetisation off, the first 30 s autoplays muted.

House: design screenshots at 1320 x 2868 and 2064 x 2752 and downsample; frame the phone in the image only when the client's product is the hardware, otherwise fill the frame with the screen (Apple's own apps do).

### 4.5 PWA manifest

From web.dev/articles/add-manifest (V): name, short_name, start_url, display, background_color, theme_color and an icons array; Chromium needs at least a 192 x 192 and a 512 x 512 PNG; "purpose": "any maskable" marks the icon for Android masks; SVG icons are supported in Chromium but are frozen at install time, so ship a PNG fallback; for pixel-exact rendering supply sizes in 48 dp increments. The 192 and 512 icons are also what Chrome uses to build the splash screen, which is why the 512 must carry the ground colour, never transparency.

### 4.6 Email

Email sizing pages at Litmus, Mailchimp and Campaign Monitor all returned 404 in this check, so these are T, consistent across the house's own sends:

| Item | Value | Status |
|---|---|---|
| Layout width | 600 to 640 px; 600 is the safe figure for Outlook desktop, 640 for Gmail and Apple Mail | T |
| Images | Export at 2x (1200 to 1280 px wide) and set width in HTML to the 1x value; each image under 200 KB, hero under 300 KB; JPG for photographs, PNG for the mark; no WebP (Outlook desktop does not render it) | T |
| Total weight | Gmail clips any message whose HTML exceeds 102 KB; keep HTML under 80 KB and total load under 1 MB | T |
| Text | Live text for the headline and body, never text-in-image only, because Apple Mail and Gmail dark modes recolour text and leave images, and because image-blocking clients show nothing | house |
| Alt text | Every image; the mark's alt is "Mask360" | house |

### 4.7 Viewports and device pixel ratios, October 2026

iPhone values from ios-resolution.com (third-party, consistent with Apple's App Store Connect pixel sizes in 4.4), read 28 October 2026. Android values are carried from manufacturer specifications known to the house; the Google Store and Samsung pages were unreadable in this check.

| Device | CSS width x height | Device pixel ratio | Physical pixels | Status |
|---|---|---|---|---|
| iPhone 17, 17 Pro | 402 x 874 | 3 | 1206 x 2622 | V |
| iPhone 17 Pro Max | 440 x 956 | 3 | 1320 x 2868 | V |
| iPhone Air | 420 x 912 | 3 | 1260 x 2736 | V |
| iPhone 16e | 390 x 844 | 3 | 1170 x 2532 | V |
| iPhone SE (3rd gen) | 375 x 667 | 2 | 750 x 1334 | V |
| Pixel 10 | about 412 x 923 | 2.625 | 1080 x 2424 | T |
| Pixel 10 Pro | about 412 x 919 | 3.1 | 1280 x 2856 | T |
| Pixel 10 Pro XL | about 412 x 916 | 3.27 | 1344 x 2992 | T |
| Galaxy S25 | 360 x 780 | 3 | 1080 x 2340 | T |
| Galaxy S25 Ultra | 384 x 832 | 3.75 | 1440 x 3120 | T |
| iPad Pro 13 (M4) | 1032 x 1376 | 2 | 2064 x 2752 | V |
| iPad Air 11 | 820 x 1180 | 2 | 1640 x 2360 | V |
| MacBook Air 13 (default scaling) | 1470 x 956 | 2 | 2560 x 1664 | T |
| MacBook Pro 14 (default scaling) | 1512 x 982 | 2 | 3024 x 1964 | T |
| Desktop 1440 | 1440 x 900 | 1 or 2 | | T |
| Desktop 1920 | 1920 x 1080 | 1 | | T |

The Android CSS widths cluster at 360, 384 and 412 because manufacturers set density buckets to land there; design the phone layout at 360 and test at 440.

### 4.8 House breakpoints

| Name | Min width (CSS px) | Container | Reason |
|---|---|---|---|
| phone | 0 | 100% with 20 px gutters | Covers 360 to 440 |
| phablet | 480 | 100% with 24 px gutters | Large phones in landscape, small tablets |
| tablet | 768 | 100% with 32 px gutters | iPad portrait at 820 CSS px sits just above |
| laptop | 1024 | 100% with 48 px gutters | iPad landscape and 13 inch laptops |
| desktop | 1280 | 1200 px max | The default MacBook widths (1470, 1512) land here |
| wide | 1440 | 1360 px max, hero images to 2560 | 1440 desktop and 2x laptops |
| ultra | 1920 | 1600 px max, never full-bleed type | Measure would exceed 75 characters (03-typography.md, section 6.1) |

Breakpoints are minimums (mobile-first) and are written in rem in CSS so that a user's zoom moves the layout with the type. The 2560 hero figure sets the photography export in section 10.

### 4.9 Core Web Vitals thresholds

From web.dev/articles/vitals, read 28 October 2026 (V): a page passes when, at the 75th percentile of page loads on mobile and desktop separately, Largest Contentful Paint (LCP, the render time of the largest image or text block in the viewport) is 2.5 s or under, Interaction to Next Paint (INP, the latency from a tap or key to the next frame painted) is 200 ms or under, and Cumulative Layout Shift (CLS, the sum of unexpected layout movement scored by area and distance) is 0.1 or under. The "poor" bands used by Search Console are LCP over 4 s, INP over 500 ms and CLS over 0.25 (T; from the individual metric pages, not re-read in this check). For a luxury site the LCP element is almost always the hero image, which is why section 10's 300 KB WebP rule exists.

## 5. Video and film specs

### 5.1 Resolutions and frame rates

| Name | Pixels | Ratio | Use |
|---|---|---|---|
| HD, 1080p | 1920 x 1080 | 16:9 | Delivery floor for everything |
| 2K DCI | 2048 x 1080 | 1.896:1 container | Cinema (DCP, section 5.8) |
| UHD, 4K | 3840 x 2160 | 16:9 | Masters, YouTube, TV, LED walls |
| 4K DCI | 4096 x 2160 | 1.896:1 container | Cinema |
| 8K UHD | 7680 x 4320 | 16:9 | Archive masters and large LED only |
| Vertical HD | 1080 x 1920 | 9:16 | Reels, Shorts, TikTok, DOOH portrait |
| Vertical 4K | 2160 x 3840 | 9:16 | Vertical masters from a rotated UHD camera |

Frame rates and the reasons:

| Rate | When | Reason |
|---|---|---|
| 24 (23.976 for NTSC-derived chains) | Brand films, cinema, anything that should feel like film | The cadence the audience reads as cinema; 23.976 only when a US broadcaster asks |
| 25 | Everything shot in India and the UAE for TV, DOOH and social | Mains frequency is 50 Hz in both countries; 25 and 50 fps avoid rolling flicker under non-cinema lighting, and broadcast and DOOH chains run at 25 |
| 30 (29.97) | US-facing social, screen recordings from 60 Hz devices | Meta's guide states 30 fps for Stories; do not convert 25 fps material, upload it as 25 |
| 50 and 60 | Sport, product spins, screen capture, anything with fast pans | Doubles temporal resolution; 50 for 50 Hz countries |
| 100 and 120 | Capture for slow motion only | Conformed to 24 or 25 in the edit (5x or 4x slowdown); never delivered at 120 |

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
| Avid DNxHR (LB, SQ, HQ, HQX, 444) | Masters and interchange when the post house runs Avid; HQX is 10-bit 4:2:2, 444 is 12-bit RGB | MXF OP1a container; data rates in Avid's DNxHR codec white paper, not re-read in this check | U |
| H.264 (AVC) | Every platform upload, client review | High profile, Level 4.2 for 1080p60, Level 5.1 for 2160p30; closed GOP of half the frame rate, 2 B-frames, CABAC (the YouTube encoding page, V, section 2.3); house delivery bitrates: 1080p25 20 to 30 Mbps, 1080 x 1920 at 25 fps 15 to 20 Mbps, 2160p25 50 to 80 Mbps, all above platform minimums because every platform re-encodes | V (profile rules) house (bitrates) |
| H.265 (HEVC) | Phone capture, 4K delivery where the client's player supports it, HDR | About half the bitrate of H.264 at equal quality; Main 10 profile for HDR; many ad servers still reject it, so H.264 remains the default upload | T |
| AV1 | YouTube's own transcode of 4K uploads, Netflix, Chrome | Royalty-free; not a house delivery codec in 2026 because encoders are slow and client players vary | T |
| VP9 in WebM | Transparent video for Chrome and Firefox (alpha channel) | Pair with HEVC alpha for Safari | T |
| HEVC with alpha in MOV | Transparent video for Safari and iOS | Export from Final Cut Pro, Compressor or Resolve Studio; Chrome does not play it, so serve both with a source element each | T |
| MP4 container rules | moov atom at the front ("Fast Start") so playback starts before the download ends; no edit lists; square pixels; progressive | V (YouTube page) |

### 5.3 Audio

Masters at 48 kHz, 24-bit WAV or embedded PCM in the ProRes master, stereo (left and right, never a mono file flagged stereo); 5.1 only when a cinema or broadcast deliverable asks. Compressed delivery: AAC-LC at 320 kbps stereo in MP4 for client and social (YouTube's own recommendation is 384 kbps stereo, V, section 2.3; Meta's minimum is 128). Sample rate stays 48 kHz through the whole chain; 44.1 kHz belongs to music distribution and Spotify ads (section 3.7), and a resample at upload is audible as a softening of the top end.

### 5.4 Loudness by platform

Loudness is measured in LUFS (loudness units relative to full scale, defined in ITU-R BS.1770), and true peak in dBTP (decibels true peak, the inter-sample peak a meter reconstructs from the digital signal). The house measures integrated loudness over the whole programme, and short-term loudness for the loudest 3 s window.

| Destination | Integrated target | True peak maximum | Status | Source |
|---|---|---|---|---|
| Broadcast, India and UAE (EBU R 128 territories) | -23.0 LUFS, tolerance plus or minus 1.0 LU for live, plus or minus 0.2 LU in QC | -1 dBTP | V | EBU R 128-2023, extracted 28 October 2026 |
| Short-form adverts and promos for broadcast | As R 128 with the short-form supplement R 128 s1 | -1 dBTP | V (named) U (s1 values not read) | EBU R 128 s1 |
| US broadcast (ATSC A/85) | -24 LKFS plus or minus 2 | -2 dBTP | U | ATSC A/85 |
| Spotify music | -14 LUFS (normal); loud -11, quiet -19 | -1 dBTP; -2 dBTP if the master is louder than -14 | V | support.spotify.com/us/artists/article/loudness-normalization |
| Spotify audio ads | -16 LUFS plus or minus 1.5 | not stated | V | ads.spotify.com |
| Spotify video ads | RMS -14 dBFS, peak -0.2 dBFS (Spotify states RMS, not LUFS) | | V | ads.spotify.com |
| Apple Music | -16 LUFS (Sound Check) | -1 dBTP | T (the Apple Digital Masters PDF describes the chain and does not print the figure) | apple.com/apple-music/apple-digital-masters |
| YouTube | About -14 LUFS (measured behaviour of its normalisation; no published figure) | -1 dBTP | T | n/a |
| Netflix | -27 LKFS dialogue-gated, plus or minus 2; -2 dBTP | | T (the specification page redirected to an empty body) | partnerhelp.netflixstudios.com |
| Instagram, TikTok, Meta ads | No published target; both apps normalise | | house: deliver -14 LUFS integrated, -1 dBTP, because quieter files are raised with their noise floor and louder ones are limited | n/a |
| Cinema (DCP) | No LUFS target; mixed to the 85 dB C reference in a calibrated room; trailers under the TASA Leq(m) 85 ceiling | | T | TASA |
| DOOH and event LED | Usually silent; where audio is enabled, -16 LUFS so that the spot does not spike above ambient | | house | n/a |

### 5.5 Aspect ratios and the reframe matrix

What survives when one frame becomes another. Percentages are the share of the source width (or height) that remains after a centre crop; the pixel pairs are for a 1920 x 1080 or 1080 x 1920 source and, in brackets, a 3840 x 2160 source.

| From | To 16:9 | To 4:5 | To 1:1 | To 9:16 |
|---|---|---|---|---|
| 16:9 (1920 x 1080) | full | keep 70.3% of width: 1350 x 1080 (2700 x 2160) | keep 56.25% of width: 1080 x 1080 (2160 x 2160) | keep 31.6% of width: 608 x 1080 (1215 x 2160) |
| 9:16 (1080 x 1920) | keep 31.6% of height: 1080 x 608 | keep 70.3% of height: 1080 x 1350 | keep 56.25% of height: 1080 x 1080 | full |
| 4:5 (1080 x 1350) | keep 45% of height: 1080 x 608 | full | keep 80% of height: 1080 x 1080 | keep 70.3% of width: 759 x 1350 |
| 1:1 (1080 x 1080) | keep 56.25% of height: 1080 x 608 | keep 80% of width: 864 x 1080 | full | keep 56.25% of width: 608 x 1080 |

The number that decides the shoot: a 9:16 cut from a UHD 16:9 master is 1215 x 2160, which is larger than the 1080 x 1920 delivery, so a 4K landscape shoot can deliver a full-resolution vertical without a second camera. A 9:16 cut from a 1080p master is 608 x 1080, which Meta upscales and softens. House rule: shoot UHD or larger, frame for 4:5 with the subject inside the central 56% of the width (the 1:1 and 9:16 protect lines), and mark the three crops on the monitor. Where the campaign is vertical-first, shoot vertical and accept that 16:9 becomes a letterboxed or split-screen edit, because a 16:9 cut from vertical keeps 31.6% of the picture.

### 5.6 Safe zones

Action safe and title safe are the SMPTE conventions for the area a television may crop and the area where text must stay: SMPTE ST 2046-1 sets action safe at 93% of the frame (3.5% inset on each edge) and title safe at 90% (5% inset) for 16:9 (T; the standard was not re-read in this check). At 1920 x 1080 that is 67 px sides and 38 px top and bottom for action, 96 px and 54 px for title. Platform overlays are the larger problem on vertical video:

| Platform (1080 x 1920 canvas) | Top | Bottom | Left | Right | Status |
|---|---|---|---|---|---|
| Instagram Reels and Stories, Facebook Reels and Stories | 269 (14%) | 672 (35%) | 65 (6%) | 65 (6%) | V (percentages) |
| TikTok | about 290 | about 480 | about 60 | about 200 | T |
| YouTube Shorts | about 120 | about 384 (20%, title and channel) | 40 | about 130 (buttons) | T |
| Pinterest idea ads | 270 | 440 | 65 | 195 | V |
| Snapchat | 150 | 250 | 0 | 0 | U |
| House universal vertical safe box | 290 | 672 | 65 | 200 | house: the union of the above, leaving an 815 x 958 box whose centre sits at 1080 x 2 by 2 and 1080 x 1920 x 0.49 |

Reason for a single universal box: the same vertical cut runs on all five platforms in almost every Mask360 plan, and a second export per platform is a second place for a version error. Titles, prices, dates and the mark live inside the box; the picture fills the frame.

### 5.7 Reframe and safe zone checklist before export

1. Masters at UHD 16:9 or vertical UHD in ProRes 422 HQ, 25 fps (24 for brand film), 48 kHz 24-bit, legal range (16-editing-colour-grading-and-delivery.md, section 7.4).
2. Three cuts from the master: 4:5 at 1440 x 1800 (Meta feed), 9:16 at 1440 x 2560 (Meta) and 1080 x 1920 (TikTok, Shorts, Pinterest, DOOH), 16:9 at 3840 x 2160 (YouTube, web, LED).
3. Text inside the universal box on vertical; inside title safe on 16:9.
4. Loudness per section 5.4; one file per target, named with the target (section 10.6).
5. First frame is a readable composition (feeds autoplay muted and DOOH loops are caught mid-way); last frame holds the mark for 1 s on social, 2 s on DOOH.

### 5.8 DCP

The Digital Cinema Package is the file set every cinema server ingests. Values from the DCI specification as summarised on the Digital Cinema Package Wikipedia article (read 28 October 2026); the DCI site itself returned an empty body, so the status is T.

| Item | Value |
|---|---|
| Containers | 2K at 2048 x 1080; 4K at 4096 x 2160 |
| Flat (1.85:1) | 1998 x 1080 at 2K; 3996 x 2160 at 4K |
| Scope (2.39:1) | 2048 x 858 at 2K; 4096 x 1716 at 4K |
| Picture codec | JPEG 2000, 12 bits per component, X'Y'Z' colour with gamma 2.6, 250 Mbit/s maximum |
| Frame rates | 24, 25, 30, 48, 50, 60 at 2K; 24, 25, 30 at 4K; Interop DCPs are limited to 24 (and 48 at 2K) and are deprecated in favour of SMPTE DCPs (SMPTE ST 429-2) |
| Audio | Linear PCM, 24-bit, 48 or 96 kHz, up to 16 channels |

House: cinema advertising in India (PVR INOX, Cinepolis) and the UAE (VOX, Reel, Roxy) is delivered as a 2K flat SMPTE DCP at 24 fps unless the exhibitor's sales house specifies otherwise, with a 5.1 mix where the brand film has one and a stereo fold-down otherwise; the exhibitor supplies the ingest sheet, the KDM policy and the spot lengths it sells (20, 30, 40 and 60 s are the common slots, T).

### 5.9 Broadcast delivery, India and UAE

No Indian or UAE broadcaster publishes a delivery sheet that could be read in this check, and the sheets differ by channel group, so the values are U and the rule is to ask the channel's traffic desk for its current sheet. The defaults that have matched every sheet the house has seen: 1920 x 1080, 16:9, 25 fps, either 1080i50 (interlaced, upper field first) or 1080p25 as the channel states; Rec.709, legal range; ProRes 422 HQ in MOV or XDCAM HD422 50 Mbps in MXF; audio 48 kHz 24-bit, stereo on channels 1 and 2, loudness to EBU R 128 (-23 LUFS, -1 dBTP); slate with clock, title, duration, agency and client; a 10-digit Indian Broadcasting and Digital Foundation (IBDF) or channel-issued ad code where the channel requires one; UAE channels (MBC, Dubai Media Incorporated, Abu Dhabi Media) additionally require the National Media Council (now the UAE Media Council) permit number on the slate. Confirm each item against the sheet.

### 5.10 Caption formats and limits

| Format | What it is | Limits and styling | Status |
|---|---|---|---|
| SRT (SubRip) | Plain text, sequence number, timecode in hh:mm:ss,mmm, text | No styling beyond basic tags most players ignore; the universal upload format for YouTube, Meta, LinkedIn | T |
| WebVTT | SRT's web successor: timecodes with a full stop, optional positioning and CSS-like styling | Used by HTML5 video and YouTube; position and line settings let a caption clear a platform overlay | T |
| SCC (Scenarist Closed Caption) | CEA-608 broadcast captions for US delivery | 32 characters per row, up to 4 rows, pop-on or roll-up; limited colours and positions | U |
| TTML and IMSC | XML timed text for broadcast and streaming | Netflix requires TTML with font size at 100% and positions in percentages, never pixels | V (Netflix general requirements) |
| Burned-in (open) captions | Rendered into the picture for social | Inside the universal safe box; cap height at least 40 px on a 1080-wide frame; 32 to 38 characters per line; two lines maximum | house |

Netflix's English timed text style guide (V, read 28 October 2026) gives the reading limits the house adopts for every subtitle file: 42 characters per line, two lines maximum, 20 characters per second for adult programmes and 17 for children's, minimum duration five sixths of a second (20 frames at 24 fps), maximum 7 s per event.

### 5.11 Cinema, event and DOOH LED walls

Pixel pitch is the distance in millimetres between LED centres; it sets the minimum viewing distance and the native resolution of the wall.

| Pitch | Typical use | Comfortable minimum viewing distance | Status |
|---|---|---|---|
| P1.2 to P1.9 | Broadcast studios, virtual production volumes, boardroom walls | 1.5 to 3 m | T |
| P2.5 to P2.9 | Indoor stage backdrops, luxury retail windows, mall atria | 3 to 5 m | T |
| P3.9 to P4.8 | Event stages, conference halls, indoor DOOH | 4 to 8 m | T |
| P6 to P10 | Outdoor roadside and facade walls | 10 to 25 m | T |

Rule of thumb from the installers: minimum viewing distance in metres is about the pitch in millimetres; the distance at which pixels disappear is about three times that. Native resolution is wall width in millimetres divided by the pitch: a 12 x 4 m wall at P3.9 is 3077 x 1026 px, which is why "deliver at 1920 x 1080 and we will scale" always softens the picture; ask for the pixel map and deliver 1:1. Event playback servers and their codecs: Resolume Arena plays DXV3 natively, disguise plays HAP and HAP Q, Brompton and Novastar processors take an HDMI or SDI feed from the server; the house delivers a ProRes 422 HQ master and lets the playback operator transcode, because each server's codec is lossy in its own way. Minimum text height on a wall: 30 wall pixels, which at P3.9 is about 12 cm, readable at 15 m. Loop lengths for DOOH follow section 3.8: 10 s and 15 s, no fades, the mark in every frame.

## 6. Print specs

### 6.1 ISO 216 A and B series, and envelopes

ISO 216 (2007) defines the A series from a 1 m² sheet with a 1:1.414 (square root of two) ratio, so that each halving keeps the proportion; the B series is the geometric mean between A sizes and is the poster and book series. Values from the ISO 216 article on Wikipedia, read 28 October 2026, which reproduces the standard's tables (V for the arithmetic, which is deterministic).

| A series | mm | B series | mm | Envelopes (ISO 269) | mm |
|---|---|---|---|---|---|
| A0 | 841 x 1189 | B0 | 1000 x 1414 | C4 (holds flat A4) | 229 x 324 |
| A1 | 594 x 841 | B1 | 707 x 1000 | C5 (A4 folded once) | 162 x 229 |
| A2 | 420 x 594 | B2 | 500 x 707 | C6 (A4 folded twice) | 114 x 162 |
| A3 | 297 x 420 | B3 | 353 x 500 | DL (A4 folded in thirds) | 110 x 220 (T) |
| A4 | 210 x 297 | B4 | 250 x 353 | | |
| A5 | 148 x 210 | B5 | 176 x 250 | | |
| A6 | 105 x 148 | | | | |
| A7 | 74 x 105 | | | | |
| A8 | 52 x 74 | | | | |

US sizes (T, ANSI/ASME Y14.1 and common trade names): Letter 8.5 x 11 in (215.9 x 279.4 mm), Legal 8.5 x 14 in (215.9 x 355.6), Tabloid or Ledger 11 x 17 in (279.4 x 431.8), ANSI C 17 x 22, D 22 x 34, E 34 x 44 in. India and the UAE both print on A sizes; Letter appears only when a US client sends a file.

### 6.2 Business cards by region

From the business card article on Wikipedia (read 28 October 2026), which states that there is no international standard; the table reflects trade practice.

| Size (mm) | Where | Status |
|---|---|---|
| 85 x 55 | UK, Ireland, France, Germany, Italy, Spain, Netherlands, Switzerland, Turkey and most of Western Europe | V (as listed) |
| 90 x 55 | India (also 90 x 50), Australia, New Zealand, Denmark, Norway, Sweden, Taiwan, Vietnam | V (as listed) |
| 91 x 55 | Japan | V (as listed; the 90 x 54 sometimes quoted for Japan is the China, Hong Kong, Malaysia, Singapore size) |
| 90 x 54 | China, Hong Kong, Malaysia, Singapore | V (as listed) |
| 88.9 x 50.8 (cut as 89 x 51) | United States, Canada | V (as listed) |
| 90 x 50 | Russia, Poland, Czech Republic, Hungary, Brazil, Mexico, South Africa, South Korea, Israel and India (second convention) | V (as listed) |
| 85.6 x 53.98 | ISO/IEC 7810 ID-1 (credit card) for cards that must fit a card slot | V |
| UAE | No listed standard; Dubai printers default to 90 x 55 and 85 x 55 | U |

House: 85 x 55 for every Mask360 and client card in both countries, because it is the size that fits every wallet slot made for ID-1 cards and reads European; 3 mm bleed; 4 mm safe; 350 gsm minimum, 540 gsm or duplexed 2 x 270 for luxury clients (GF Smith Colorplan and Mohawk Superfine carry these weights, T).

### 6.3 Postcards, posters and one sheets

| Item | Size | Status |
|---|---|---|
| Postcard, A6 | 105 x 148 mm | V |
| Postcard, US | 4 x 6 in (101.6 x 152.4 mm); 5 x 7 in (127 x 177.8) | T |
| India Post standard card | 140 x 90 mm | U |
| Poster A3, A2, A1, A0 | 297 x 420, 420 x 594, 594 x 841, 841 x 1189 mm | V |
| Poster 24 x 36 in | 609.6 x 914.4 mm; the US gallery and retail standard | T |
| One sheet (cinema) | 27 x 40 in (685.8 x 1016 mm) | T |
| Quad (UK cinema) | 30 x 40 in landscape | T |
| Bus shelter six-sheet and JCDecaux mupi | 1200 x 1800 mm (six-sheet); 1185 x 1750 mm visible (2 m² mupi) | T |
| 48-sheet | 6096 x 3048 mm (20 x 10 ft) | T |
| 96-sheet | 12192 x 3048 mm (40 x 10 ft) | T |

### 6.4 Hoardings, transit and exhibition

Section 3.8 gives the Indian and UAE hoarding sizes and the vendor rule. Exhibition and event items:

| Item | Size | Notes | Status |
|---|---|---|---|
| Roll-up (pull-up) banner | 850 x 2000 mm visible; design at 850 x 2100 and keep the lowest 100 mm free, because it disappears into the cassette and the graphic is clamped there | The 800 x 2000 and 1000 x 2000 variants exist; ask the supplier | T |
| Shell scheme panel (Octanorm system) | About 950 x 2380 mm visible per panel between 1 m posts; 2.5 m post height | Panels butt with a 40 mm post between, so a graphic that spans panels needs the post gap in the artwork | T |
| Feather and teardrop flags | 2.6, 3.4 and 4.5 m heights; the printable area is about 600 x 2000 mm on the 2.6 m flag | Sewn pocket on the leading edge takes 50 mm | T |
| Fabric backdrop (step and repeat) | 3 x 2.4 m and 4 x 2.4 m with a 20 mm seam allowance on tension frames | Dye-sublimation on polyester; design at 1:4 at 300 ppi | T |
| Lamp post banner, Dubai roads | About 1.5 x 3 m per face (RTA-permitted sizes vary by road) | Through ELAN, Hypermedia, Backlite | U |

### 6.5 Bleed and safe area by product

| Product | Bleed | Safe (inset from trim) | Reason |
|---|---|---|---|
| Business card, postcard | 3 mm | 4 mm | Guillotine drift on small stacks is about 1 mm; 3 covers it both ways and leaves margin |
| Brochure, A4 and A5 | 3 mm | 5 mm; 8 mm at the spine for perfect binding | Folding and binding add their own drift to the cut |
| Poster, A2 and larger | 5 mm | 10 mm | Larger sheets drift more on the flatbed |
| Large format, banners, hoardings | 10 to 25 mm (banners); 100 mm (hoardings) | 50 mm (banners); 300 mm (hoardings) | Hems, eyelets and the frame cover the edge |
| Packaging | 3 mm beyond the dieline; glue flaps per dieline | 5 mm from every crease and cut | Creases move the print by up to 1 mm |
| Vehicle wrap | 50 mm per panel edge | Avoid door seams and handles by 20 mm | Panels are trimmed on the vehicle |

### 6.6 Resolution by viewing distance

The eye resolves about one minute of arc (1/60 of a degree). The pixel density that reaches that limit at a viewing distance d in inches is about 3438 / d ppi (3438 is 1 / tan(1/60 degree) in inches). The house rounds down to the nearest practical figure because print RIPs and inkjet dot gain soften the image anyway.

| Product | Viewing distance | Theoretical limit | House export | Status |
|---|---|---|---|---|
| Business card, book, brochure | 30 to 40 cm (12 to 16 in) | 215 to 286 ppi | 300 ppi at size | house |
| A3 and A2 poster | 0.7 to 1 m | 87 to 125 ppi | 200 to 300 ppi | house |
| A1 and A0 poster | 1 to 2 m | 44 to 87 ppi | 150 ppi | house |
| Roll-up and exhibition panel | 1.5 to 3 m | 29 to 58 ppi | 100 to 150 ppi | house |
| Bus shelter, mupi | 3 to 5 m | 17 to 29 ppi | 100 ppi | house |
| Hoarding, unipole | 10 to 40 m | 2 to 9 ppi | 20 to 30 ppi at size (300 ppi at 1:10) | house |
| LED wall | per section 5.11 | native pixel map | 1:1 | house |

### 6.7 Paper weights

Paper is specified in grams per square metre (gsm); the same gsm is thicker in uncoated stock than coated because coating is dense.

| gsm | Typical use | Status |
|---|---|---|
| 70 to 90 | Office, inner pages of long documents, newsprint at 45 to 52 | T |
| 100 to 130 | Brochure inner pages, letterhead at 100 to 120 | T |
| 150 to 170 | Flyers, magazine covers, menu inserts | T |
| 250 to 300 | Covers, folders, menus, invitations | T |
| 350 to 400 | Business cards, hang tags | T |
| 540 to 700 | Luxury cards (GF Smith Colorplan 540 and 700; duplexed 2 x 270 or 2 x 350) | T |

### 6.8 Colour profiles and PDF/X

| Profile | Standard | Use | Status |
|---|---|---|---|
| PSO Coated v3 (FOGRA51) | ISO 12647-2:2013 | Current European coated offset reference; the profile to ask for in 2026 | T |
| ISO Coated v2 (FOGRA39) | ISO 12647-2:2004 | What most Indian and UAE presses still ask for; safe default when the printer names nothing | T |
| PSO Uncoated v3 (FOGRA52) | ISO 12647-2:2013 | Uncoated stock, letterhead and luxury uncoated cards | T |
| GRACoL 2013 (CRPC6) | CGATS 21-2 | US sheetfed; use only for US printers | T |
| SWOP 2013 (CRPC5) | CGATS 21-2 | US web offset; Adobe's "U.S. Web Coated (SWOP) v2" default is the wrong profile for every Indian and UAE job and must be changed in Colour Settings | T |
| Japan Color 2011 Coated | ISO 12647-2 | Japanese printers | T |
| sRGB IEC61966-2-1 | | Every screen deliverable | V (de facto) |
| Adobe RGB (1998) and ProPhoto RGB | | Photography masters (section 10) | house |

PDF/X versions, from ISO 15930 as summarised on the PDF/X Wikipedia article (read 28 October 2026):

| Version | Standard | PDF base | Allows | House use |
|---|---|---|---|---|
| PDF/X-1a:2001 and 2003 | ISO 15930-1 and 15930-4 | 1.3 and 1.4 | CMYK plus spot only; everything flattened; fonts embedded | When the printer insists; packaging converters often do |
| PDF/X-3:2002 and 2003 | ISO 15930-3 and 15930-6 | 1.3 and 1.4 | Adds ICC-managed RGB and Lab | Rare now |
| PDF/X-4 (2008, revised 2010) | ISO 15930-7 | 1.6 | Live transparency, optional content (layers), ICC-managed colour, output intent | The house default for offset and digital |
| PDF/X-5 (2008, 2010) | ISO 15930-8 | 1.6 | External graphic content and external output profile | Publishers with shared image libraries |
| PDF/X-6:2020 | ISO 15930-9 | 2.0 | PDF 2.0 features, partial exchange variants 6n and 6p | Ahead of most presses in India and the UAE in 2026; ask before sending |

Export from InDesign with the PDF/X-4:2010 preset, output intent set to the printer's named profile, bleed per section 6.5, crop marks offset 3 mm, all fonts embedded (subset above 0% is fine), images untouched (no downsampling) for print.

### 6.9 Barcodes

GS1 pages returned 403 and an HTML stub in place of the General Specifications PDF in this check, so the values are U, carried from the GS1 General Specifications and to be verified there before a packaging job: EAN-13 nominal size at 100% magnification is 37.29 x 25.93 mm with an X-dimension (narrowest bar) of 0.330 mm; permitted magnification 80% (29.83 x 20.73 mm) to 200% (74.58 x 51.86 mm) for retail point of sale; quiet zones of 11 X-dimensions on the left and 7 on the right; bar height may not be truncated below the nominal for the magnification without the retailer's agreement. Black bars on white or a light background, never red or gold bars (the scanner's red laser reads red as white); print the barcode in 100% black (K) only; GS1 India (gs1india.org) issues Indian company prefixes and GS1 UAE (gs1ae.org) the UAE ones.

### 6.10 Label font minimums, India and UAE

Both regulations were unreachable in this check (section 1.2), so these are U and must be read in the regulation before artwork is released.

- India: the Food Safety and Standards (Labelling and Display) Regulations, 2020 (gazette notification of 14 December 2020, in force from 1 January 2022 for most provisions) set letter heights by the area of the principal display panel (PDP, the face of the pack the consumer sees at retail) in a schedule; the Legal Metrology (Packaged Commodities) Rules, 2011 set the height of the net quantity numerals by PDP area in the Second Schedule (1 mm for a PDP up to 100 cm², rising in steps to 6 mm above 2500 cm², with larger figures for blown or moulded containers). Mandatory declarations (name, ingredients, allergens, nutrition, FSSAI logo and licence number, veg or non-veg mark, MRP, net quantity, manufacturer, date marking) have their own placement rules; the veg and non-veg symbol has a stated minimum diameter by PDP area.
- UAE: labelling of prepackaged food follows UAE.S GSO 9 (labelling of prepackaged foodstuffs) and UAE.S GSO 2233 (nutritional labelling), administered by the Ministry of Industry and Advanced Technology (MoIAT, which absorbed ESMA in 2020) with municipality enforcement (Dubai Municipality, ADAFSA in Abu Dhabi). Arabic is mandatory, with other languages optional alongside; minimum letter heights follow the GSO standard's table. Cosmetics follow UAE.S GSO 1943.
- House rule in both countries: no mandatory text below 1.5 mm cap height, Arabic and Devanagari set from a typeface with matching x-height to the Latin, and the regulatory panel laid out before the design panel, because it cannot move once approved.

## 7. Presentation and document specs

### 7.1 Canvas and export

| Item | Value | Status | Source |
|---|---|---|---|
| 16:9 deck canvas | 1920 x 1080 px; PowerPoint sets widescreen to 13.333 x 7.5 in, Keynote and Google Slides default to 1920 x 1080 and 10 x 5.625 in respectively | V (PowerPoint) T (others) | support.microsoft.com/en-us/office/change-the-size-of-your-slides |
| 4K deck canvas | 3840 x 2160; Keynote offers the preset; PowerPoint exports at the same inch size with higher image resolution | T | |
| 4:3 | 10 x 7.5 in; only for a client's legacy system | V | as above |
| A4 handout | 10.833 x 7.5 in in PowerPoint's preset (not true A4); for a real A4 document use InDesign or a document tool | V | as above |
| Keynote export | File, Export To, PDF, image quality Best; or Export To, Images, PNG at 2x for social | T | |
| PowerPoint export | File, Export, Create PDF/XPS, Standard; in Options set image resolution to 330 ppi ("High fidelity") for print and 150 ppi for email; untick "ISO 19005-1 compliant" unless archival PDF/A is required | T | |
| Google Slides export | File, Download, PDF; images are resampled, so a deck with photography is finished in Keynote | T | |

### 7.2 PDF size targets

| Destination | Target | Reason | Status |
|---|---|---|---|
| Email attachment | Under 10 MB | Gmail accepts 25 MB and Outlook 20 MB, but corporate gateways in India and the Gulf commonly reject above 10, and the recipient opens it on a phone | T |
| WhatsApp document | Under 100 MB (WhatsApp allows up to 2 GB without recompressing documents) | Keeps the download instant on a mobile connection | T |
| Print PDF | No size target; 300 ppi images, no downsampling, PDF/X-4 | Section 6.8 | house |
| Web download | Under 5 MB, images at 150 ppi, fonts subset | Opens in the browser tab without a wait | house |

Compression that keeps a deck under 10 MB: JPEG images at quality 8 of 12 (Photoshop scale) at 150 ppi for the 1920 canvas, PNG only for the mark and screenshots, no embedded video (link it), fonts subset.

### 7.3 House deck grammar sizes

The look is set in design-taste, SKILL.md, section 7 (Space Grotesk, client decks on #0A0A0A, 70 visual to 30 text, curved edges, scroll-driven). The sizes that implement it on a 1920 x 1080 canvas, house values consistent with 03-typography.md, section 7.3:

| Element | Size | Reason |
|---|---|---|
| Margin | 120 px on every side (6.25%) | Reads as generous on a projector and survives the 3.5% action safe crop on a TV |
| Grid | 12 columns, 24 px gutters inside the margins | Halves and thirds without arithmetic |
| Slide title | 96 to 160 px, weight 700, tracking -0.02em, leading 0.95 to 1.0 | Scale contrast (design-taste, section 2); one line |
| Body | 28 to 32 px, weight 300 with 500 for bold, leading 1.4 | Readable from the back of a 10 m room |
| Caption, source, folio | 18 px minimum, 20 preferred | Below 18 px nothing on a projector is legible |
| Micro caps labels | 16 to 18 px at weight 400, tracking +0.08em | The house label voice |
| Image | Full-bleed or inside the grid; never a border; curved corners 24 px when inset | Material honesty and the house curve |
| One motion per deck | A single build or transition, 400 to 700 ms, ease-out | 12-motion-principles-and-ui-motion.md, section 4.1 |

### 7.4 Document margins and font embedding

A4 documents: 20 mm top and outside, 25 mm bottom and inside (binding side) for bound work; 20 mm all round for single sheets; body 10 to 11 pt at 1.4 to 1.5 leading on a 60 to 70 character measure (03-typography.md, section 6.1). US Letter: 1 in (25.4 mm) all round is the convention clients expect. Fonts: every PDF leaving the studio has all fonts embedded (subset is fine) or text converted to outlines for large-format vendors who ask; Space Grotesk is under the SIL Open Font Licence, which permits embedding; check each client face's licence for PDF embedding and for web use before the deck is built, because some foundries (Klim, Commercial Type) licence embedding and web separately.

## 8. Accessibility numbers

### 8.1 WCAG 2.2 values

From w3.org/TR/WCAG22 and the Understanding pages for 2.5.5 and 2.5.8, read 28 October 2026 (V).

| Criterion | Level | Value |
|---|---|---|
| 1.4.3 Contrast (minimum) | AA | 4.5:1 for text; 3:1 for large text, defined as at least 18 pt (24 px) regular or 14 pt (18.66 px) bold |
| 1.4.6 Contrast (enhanced) | AAA | 7:1 for text; 4.5:1 for large text |
| 1.4.11 Non-text contrast | AA | 3:1 for user interface components, their states and meaningful graphics against adjacent colours |
| 1.4.12 Text spacing | AA | No loss of content when the user sets line height to 1.5 x font size, paragraph spacing to 2 x, letter spacing to 0.12 em, word spacing to 0.16 em |
| 1.4.10 Reflow | AA | Content reflows at 320 CSS px wide (a 1280 px viewport at 400% zoom) without horizontal scrolling, or 256 CSS px high for horizontal-scroll content |
| 1.4.4 Resize text | AA | Text resizes to 200% without loss |
| 2.3.1 Three flashes or below threshold | A | Nothing flashes more than three times in one second unless below the general and red flash thresholds |
| 2.5.8 Target size (minimum) | AA | Pointer targets at least 24 x 24 CSS px, or an undersized target whose 24 px circle does not intersect another target or circle |
| 2.5.5 Target size (enhanced) | AAA | 44 x 44 CSS px, with exceptions for inline, equivalent, user-agent and essential cases |

Platform targets (T): Apple's Human Interface Guidelines ask for 44 x 44 pt; Material Design asks for 48 x 48 dp with 8 dp between targets. House: 44 px minimum on every tappable element, 48 on the primary action.

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

Why both tables: WCAG 2.2 is the legal reference (India's Rights of Persons with Disabilities Act 2016 and GIGW 3.0 point at WCAG 2.1 AA; the UAE's Digital Government guidance points at WCAG 2.1 AA, T) and APCA is the better predictor of what the eye reads, especially for the thin light-on-dark type the house favours. The house checks both: pass WCAG AA by ratio and reach Lc 75 for body, Lc 60 for secondary, Lc 45 for display.

### 8.3 Other accessibility numbers

| Item | Value | Status |
|---|---|---|
| Caption line length | 42 characters (Netflix), 32 (CEA-608), 32 to 38 burned-in (house) | V, U, house |
| Caption reading speed | 20 characters per second adult, 17 children (Netflix) | V |
| Minimum type on screen | 12 px web floor (03-typography.md, section 7.3); 11 pt iOS Caption 2; 11 sp Material label small; 17 pt iOS body at Large Dynamic Type | T |
| Minimum type in print | 6 pt for legal lines (about 1.5 mm cap height) in the house; regulatory minimums per section 6.10 | house |
| Zoom | 200% (1.4.4) and 400% (1.4.10) without loss | V |
| Motion | Honour prefers-reduced-motion; no parallax, no auto-play loops over 5 s without a pause control (2.2.2, A) | V (2.2.2 exists) house (policy) |
| Flash | Three per second maximum; LED walls and strobing campaign films are the common offenders | V |
| Focus indicator | 2.4.11 Focus not obscured (AA) and 2.4.13 Focus appearance (AAA): a 2 CSS px perimeter at 3:1 against the unfocused state | V (criteria exist) T (values summarised) |

## 9. Typography and motion numbers, short form

Reproduced from 03-typography.md (sections 4.3, 5.1, 6.1, 7.3) and 12-motion-principles-and-ui-motion.md (sections 4.1, 4.2, 4.4) so the export check needs one sheet. The reasons live in those files.

### 9.1 Type

| Context | Size | Leading | Tracking | Measure |
|---|---|---|---|---|
| Display, 48 px and up | 48 to 160 px | 0.9 to 1.1 | -0.02 to -0.04 em | one to three lines |
| Headings, 24 to 40 px | 24, 32, 40 | 1.1 to 1.25 | -0.01 to -0.02 em | under 50 characters |
| Body, 14 to 20 px | 16 web, 18 to 21 editorial | 1.4 to 1.6 (03's ramp: 16 on 24) | 0 | 45 to 75 characters, house 55 to 70, max-width in ch |
| Small text, 11 to 13 px | 12 floor on screen | 1.3 to 1.45 | 0 to +0.01 em | short |
| Caps labels | 9 to 13 px | 1.3 | +0.05 to +0.14 em | one line |
| Devanagari and Arabic body | as Latin or one step up | 1.6 to 1.8 | 0 | as Latin |
| Nastaliq | one step up | 2.0 and up | 0 | short |
| Product ramp (px on 4 px rhythm) | 12/16, 14/20, 16/24, 20/28, 24/32, 32/40, 48/52, 64/64 | | | |
| Editorial ramp | body 18 to 21 at 1.5 to 1.6; standfirst 24 to 28 at 1.35; headline 56 to 120 at 0.95 to 1.05 and -0.02 em; caption 13 to 14 at 1.4; folio 11 to 12 caps at +0.1 em | | | |
| Deck ramp (1920 canvas) | title 96 to 160, body 28 to 32, caption 18 minimum (section 7.3) | | | |

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
| Material 3 tokens | short1 50 to short4 200; medium1 250 to medium4 400; long1 450 to long4 600; extra-long1 700 to extra-long4 1000 ms | md.sys.motion.duration |
| Carbon tokens | fast-01 70, fast-02 110, moderate-01 150, moderate-02 240, slow-01 400, slow-02 700 ms | @carbon/motion |
| Fluent 2 tokens | 50, 100, 150, 200, 250, 300, 400, 500 ms (ultraFast to ultraSlow) | @fluentui/tokens |
| Frame budgets | 16.7 ms at 60 Hz, 8.3 ms at 120 Hz; 5 and 10 frames at 60 Hz are 83 and 167 ms | 12-motion, section 1.3 |
| Video motion graphics | 25 fps house; 24 for brand film; ease-out on every move; holds of at least 1 s on any readable text | 13-motion-graphics-and-3d-production.md |

## 10. Photography deliverable specs

House standards; where a platform number applies it is cross-referenced.

### 10.1 Web

| Deliverable | Specification | Reason |
|---|---|---|
| Hero | 2560 px wide (the "wide" breakpoint's hero size, section 4.8), WebP at quality 75 to 82, under 300 KB; AVIF alongside at quality 55 to 65 where the build pipeline supports it; JPG fallback only for email | The hero is the LCP element (section 4.9); 300 KB at 2560 loads inside 2.5 s on a 4G connection in Mumbai or Dubai |
| Responsive set | srcset widths 640, 960, 1280, 1920, 2560; sizes attribute matched to the breakpoints | The browser picks the smallest sufficient file |
| Retina | Every image exported at 2x its CSS size at a lower quality (WebP 70) rather than 1x at high quality | Compressive images: 2x at lower quality is smaller and sharper than 1x at high quality on a 2x screen |
| Colour | sRGB, profile embedded, 8-bit | Browsers assume sRGB; a stripped Adobe RGB file goes dull |
| Thumbnails and cards | 800 px on the long side, WebP under 80 KB | Grids of twelve cards must total under 1 MB |

### 10.2 Social crops

From one master, in order of importance: 4:5 at 1440 x 1800 (Meta feed), 9:16 at 1440 x 2560 (Meta Stories and Reels cover) and 1080 x 1920 (TikTok, Pinterest, Shorts cover), 1:1 at 1440 x 1440 (LinkedIn, X, Meta square placements), 2:3 at 1000 x 1500 (Pinterest), 16:9 at 2560 x 1440 (YouTube thumbnail at 2x, LinkedIn link image at 1200 x 628 downsampled). JPG quality 10 of 12 or PNG for flat graphics; sRGB; under 8 MB on Meta, under 20 MB on Pinterest (sections 2.1, 2.7). Protect lines on the master: the 4:5 crop with the subject inside the central 1:1 and the 9:16 inside the central 56% of the width (section 5.5).

### 10.3 Print

300 ppi at the printed size (section 6.6), 16-bit TIFF or layered PSD for retouched masters, 8-bit TIFF with LZW for the printer unless the press asks for JPEG at quality 12; Adobe RGB (1998) or ProPhoto RGB masters in 16-bit, converted to the printer's CMYK profile (section 6.8) only at the printer's request, with perceptual intent for photographs and relative colorimetric with black point compensation for flat colour; soft-proof in Photoshop with the destination profile before release. Hoardings at 1:10 scale, 300 ppi, with the vendor's bleed.

### 10.4 RAW and archive

Keep the native RAW (ARW, CR3, NEF, RAF, DNG from phones) with its XMP sidecar; do not convert to DNG unless the client's DAM requires it, because the native file keeps the maker's metadata; three copies on two media in two locations (the 3-2-1 rule) with the project archive after delivery; a contact sheet PDF per shoot day; selects flagged in the catalogue, never by copying files into a "selects" folder, because the copies drift. Retouched masters sit beside the RAW as 16-bit PSD or TIFF with layers; flattened derivatives are regenerated from them, never edited.

### 10.5 Metadata

IPTC fields on every delivered image: creator, copyright notice, credit line, licence terms and expiry (talent and usage rights for India and the UAE), description with the shot's subject and location, keywords with client and campaign codes. Strip camera serial numbers and GPS before anything leaves the studio; keep the colour profile.

### 10.6 Naming convention

`YYYYMMDD_client_campaign_asset_variant_vNN.ext` in lower case with hyphens inside a field and underscores between fields, for example `20261028_aman-jaipur_winter_hero-pool_4x5_v03.jpg`; video adds the ratio, resolution, frame rate and loudness target: `20261028_aman-jaipur_winter_film30_9x16_1080x1920_25p_-14lufs_v02.mp4`. Reason: the file name carries the spec to the uploader and the archive search without opening the file, and a sort by name is a sort by date, client and version.

## 11. Master table

Every format on one sheet. Dimensions in px unless stated; duration where it applies; status codes from section 1.1; checked 2026-10-28 for every V row. Where a cell says "sec", the section holds the detail.

| Format | Dimensions | Ratio | Duration | File type | Max size | Safe zone | Source | Status |
|---|---|---|---|---|---|---|---|---|
| Instagram feed portrait | 1440 x 1800 (1080 x 1350 common) | 4:5 | n/a | JPG, PNG | 30 MB | central 1:1 for grid | facebook.com/business/ads-guide/update/image/instagram-feed | V |
| Instagram feed square | 1080 x 1080 (1440 x 1440 master) | 1:1 | n/a | JPG, PNG | 30 MB | grid tile 3:4 crops top and bottom | postfa.st | T |
| Instagram feed landscape | 1080 x 566 | 1.91:1 | n/a | JPG, PNG | 30 MB | n/a | post-bridge.com | T |
| Instagram Reels | 1440 x 2560 or 1080 x 1920 | 9:16 | ads 0 s to 15 min; organic 3 min in-app (T) | MP4, MOV, H.264, AAC 128 | 4 GB | top 14%, bottom 35%, sides 6% | ads-guide/update/video/instagram-reels | V |
| Instagram Stories | 1440 x 2560 | 9:16 | image 5 to 16 s; video to 60 min in ads, 60 s cards organic | JPG, PNG, MP4, MOV | 30 MB image, 4 GB video | as Reels | ads-guide/update/image/instagram-story | V |
| Instagram carousel | first slide sets the ratio | 4:5, 1:1 | n/a | JPG, PNG, MP4 | 30 MB each | as feed | third-party | T |
| Instagram caption and hashtags | 2,200 characters, 30 hashtags | | | | | | ads guide (hashtags) | V, T |
| TikTok video | 1080 x 1920 | 9:16 | ads to 10 min; organic 10 min in-app, 60 min on many accounts | MP4, MOV | 500 MB ads | top 290, bottom 480, right 200 (T) | ads.tiktok.com/help/article/video-ads-specifications | V |
| TikTok photo mode | 1080 x 1920, up to 35 images | 9:16 | n/a | JPG, PNG | | as video | third-party | T |
| YouTube video | 3840 x 2160 upload | 16:9 | no stated maximum for verified accounts | MP4, H.264 High, AAC-LC 384 kbps | 256 GB or 12 h | title safe 90% | support.google.com/youtube/answer/1722171 | V |
| YouTube Shorts | 1080 x 1920 | 9:16 | up to 3 min | MP4 | | bottom 20%, right 130 px (T) | support.google.com/youtube/answer/10059070 | V |
| YouTube thumbnail | 3840 x 2160 recommended; 1280 x 720 minimum width 640 | 16:9 | n/a | JPG, PNG | 2 MB mobile, 50 MB desktop | | support.google.com/youtube/answer/72431 | V |
| YouTube banner | 2560 x 1440 (2048 x 1152 minimum) | 16:9 | n/a | JPG, PNG | 6 MB | 1235 x 338 at 2048 wide | support.google.com/youtube/answer/10456525 | V |
| YouTube channel icon | 800 x 800 upload, renders 98 x 98 | 1:1 | n/a | JPG, PNG, BMP, GIF | 15 MB | | as above | V |
| YouTube end screen | 16:9 elements, up to 4 | | last 5 to 20 s of a video at least 25 s | | | | support.google.com/youtube/answer/6388789 | V |
| YouTube title and description | 100 and 5,000 characters | | | | | | support.google.com/youtube/answer/57404 | V |
| LinkedIn image | 1200 x 628, 1200 x 1200, 720 x 900 | 1.91:1, 1:1, 4:5 | n/a | JPG, PNG, GIF | 5 MB | | linkedin.com/help/lms/answer/a426534 | V |
| LinkedIn document | all pages one size; 1:1 or 4:5 best | | n/a | PDF, PPTX, DOCX | 100 MB, 300 pages | | linkedin.com/help/lms/answer/a493903 | V |
| LinkedIn video | 1920 x 1080 to 1080 x 1920 | 16:9, 1:1, 4:5, 9:16 | 3 s to 30 min | MP4 under 30 fps | 500 MB | | linkedin.com/help/lms/answer/a424737 | V |
| LinkedIn post text | 3,000 characters, 150 visible | | | | | | as above | V |
| LinkedIn profile, cover, company cover | 400 x 400; 1584 x 396; 1128 x 191 | | | | | | third-party | T |
| X image and video | 1200 x 675 or 1200 x 1200; video 1920 x 1080 | 16:9, 1:1 | 2 min 20 s | JPG, PNG, MP4 | 5 MB image, 512 MB video | | third-party | T |
| X post, profile, header | 280 characters; 400 x 400; 1500 x 500 | | | | | | third-party | T |
| Threads | text 500 characters; image 320 to 1440 wide; video 5 min | up to 10:1 | 300 s | JPG, PNG, MP4 | 8 MB image, 1 GB video | | developers.facebook.com/docs/threads/overview | V |
| Pinterest pin | 1000 x 1500 | 2:3 | n/a | PNG, JPEG | 20 MB web, 32 MB app | | help.pinterest.com (product specs) | V |
| Pinterest video pin | 1:1 to 9:16 | 1:2 to 1.91:1 allowed | 4 s to 15 min | MP4, MOV, M4V | 2 GB | | as above | V |
| Pinterest idea ad | 1080 x 1920 | 9:16 | to 5 min | MP4, JPG | 2 GB app, 100 MB web | top 270, left 65, right 195, bottom 440 | as above | V |
| Facebook feed image | 1440 x 1800 | 4:5 | n/a | JPG, PNG | 30 MB | central 1:1 | ads-guide/update/image/facebook-feed | V |
| Facebook feed video | 1440 x 1800 | 4:5 | 1 s to 241 min | MP4, MOV, GIF | 4 GB | | ads-guide/update/video/facebook-feed | V |
| Facebook Stories | 1440 x 2560 | 9:16 | 1 s to 3 min | MP4, MOV | 4 GB | 14%, 35%, 6% | ads-guide/update/video/facebook-story | V |
| Facebook page cover and profile | 851 x 315 under 100 KB; 320 x 320 | | n/a | sRGB JPG | 100 KB cover | profile overlaps 40 px | facebook.com/help/125379114252045 | V |
| WhatsApp status | 1080 x 1920 | 9:16 | 60 s segments | MP4, JPG | about 16 MB effective | test on handset | n/a | U |
| Snapchat ad and story | 1080 x 1920 | 9:16 | 3 to 180 s | JPG, PNG, MP4, MOV | | top 150, bottom 250 (U) | forbusiness.snapchat.com | V |
| Meta carousel | 1080 x 1080 minimum | 1:1 | video 1 s to 240 min | JPG, PNG, MP4 | 30 MB, 4 GB | 2 to 10 cards; text 80/20/18 | ads-guide/update/carousel/facebook-feed | V |
| Meta collection | 1080 x 1080 minimum cover | 1.91:1 to 1:1 | | JPG, PNG, MP4 | 30 MB, 4 GB | text 125/40 | ads-guide/update/collection/facebook-feed | V |
| Google responsive display | 1200 x 628, 1200 x 1200; logos 1200 x 300, 1200 x 1200 | 1.91:1, 1:1, 4:1 | n/a | JPG, PNG | 5120 KB | headlines 30, long 90 | support.google.com/google-ads/answer/7005917 | V |
| YouTube ads | bumper 6 s; non-skippable 15 to 60 s; skippable no max; Shorts under 60 s | 16:9, 9:16 | as stated | YouTube upload | | | support.google.com/google-ads/answer/2375464 | V |
| Performance Max | images as RDA plus 4:5 960 x 1200; video 16:9, 1:1, 9:16 at 10 s or more | | | JPG, PNG, YouTube | 5120 KB | central 80% | support.google.com/google-ads/answer/14530211 | V |
| Demand Gen | 1200 x 1200, 1200 x 628, 960 x 1200, 1080 x 1920; logo 144 to 1200 | 1:1, 1.91:1, 4:5, 9:16 | video 5 s minimum, 10 s for in-stream | JPG, PNG, MPG | 5 MB, logo 150 KB, video 256 GB | | support.google.com/google-ads/answer/13704860 | V |
| IAB display units | 300 x 250, 728 x 90, 160 x 600, 320 x 50, 300 x 600, 970 x 250, 320 x 480, 336 x 280 | fixed | n/a | HTML5, JPG, PNG, GIF | 150 to 300 kB initial (sec 3.6); 150 KB on Google Ads | | iab.com New Ad Portfolio fixed size spec | V |
| Spotify audio ad | n/a | n/a | 30 s (60 s long-form) | MP3, WAV, OGG, 44.1 kHz, 192 to 320 kbps | 50 MB | -16 LUFS; companion 600 x 600, 200 KB | ads.spotify.com/en-US/ad-specs/audio-ad-specs | V |
| Spotify video ad | 720 x 1280 or 1280 x 720 | 9:16, 16:9 | up to 30 s | MOV, MP4 | 500 MB | RMS -14 dBFS, peak -0.2 | ads.spotify.com in-stream video specs | V |
| DOOH portrait and landscape | 1080 x 1920; 1920 x 1080; LED at native map | 9:16, 16:9 | 10 or 15 s | MP4 H.264 25 fps, JPG | per vendor | per vendor sheet | vendor artwork sheets (none readable) | T |
| India hoarding | 20 x 10 to 60 x 20 ft; BMC cap 40 x 40 ft | varies | n/a | PDF/TIFF at 1:10, 300 ppi | | 300 mm | vendor | T |
| Favicon set | 32 ICO, SVG, 180 touch, 192, 512, 512 maskable | 1:1 | n/a | ICO, SVG, PNG | | maskable circle 409 px | evilmartians.com favicon article | V |
| Open Graph image | 1200 x 630 (2400 x 1260 export) | 1.91:1 | n/a | JPG, PNG | 8 MB | central 1200 x 600 | developers.facebook.com/docs/sharing/webmasters/images | V |
| iOS app icon | 1024 x 1024 master | 1:1 | n/a | PNG, no alpha | | | Apple (page unreadable) | T |
| Android adaptive icon | 108 dp (432 px at 4x); safe 66 dp (264 px) | 1:1 | n/a | PNG layers | | 66 dp | developer.android.com adaptive icons | V |
| Play Store icon and feature graphic | 512 x 512; 1024 x 500 | 1:1; 2.048:1 | n/a | PNG, JPEG | 1024 KB icon | | support.google.com/googleplay/android-developer/answer/9866151 | V |
| App Store screenshots | 1206 x 2622 and 1320 x 2868 (iPhone); 2064 x 2752 (iPad) | device | n/a | JPG, PNG, no alpha | up to 10 per size | | developer.apple.com App Store Connect screenshot specifications | V |
| Play Store screenshots | 320 to 3840 px per side, long side at most 2x short | 16:9 or 9:16 | n/a | JPEG, PNG | 2 to 8 per device | | as Play listing | V |
| Email | 600 to 640 px wide, images at 2x | | n/a | HTML, JPG, PNG | HTML under 102 KB (Gmail clip) | | third-party (pages 404) | T |
| Core Web Vitals | LCP 2.5 s, INP 200 ms, CLS 0.1 at p75 | | | | | | web.dev/articles/vitals | V |
| Video master | 3840 x 2160 ProRes 422 HQ, 25p (24p film), 48 kHz 24-bit | 16:9 or 9:16 | | MOV | 737 Mbps at UHD 25p | title safe 90% | Apple ProRes white paper 2022 | V |
| Broadcast India and UAE | 1920 x 1080, 25 fps (1080i50 or 1080p25) | 16:9 | 10, 20, 30 s | ProRes 422 HQ or XDCAM HD422 | | action 93%, title 90% | channel sheets (unreadable) | U |
| DCP | 1998 x 1080 flat, 2048 x 858 scope (2K) | 1.85, 2.39 | 20 to 60 s spots | JPEG 2000 XYZ 12-bit, 250 Mbit/s | | | DCI via Wikipedia DCP article | T |
| Loudness, broadcast | -23 LUFS, -1 dBTP | | | | | | tech.ebu.ch/docs/r/r128.pdf | V |
| Loudness, Spotify music and ads | -14 LUFS, -1 dBTP; ads -16 LUFS | | | | | | support.spotify.com; ads.spotify.com | V |
| Captions | 42 characters, 2 lines, 20 cps (Netflix); SCC 32 characters | | 5/6 s to 7 s | SRT, VTT, SCC, TTML | | inside universal box | partnerhelp.netflixstudios.com English style guide | V, U |
| LED wall | native pixel map; 12 x 4 m at P3.9 is 3077 x 1026 | wall | 10 or 15 s loops | ProRes 422 HQ master; DXV3 or HAP by server | | 30 wall px text minimum | installers (T) | T |
| A series | A0 841 x 1189 to A8 52 x 74 mm | 1:1.414 | n/a | PDF/X-4 | | bleed 3 to 5 mm | ISO 216 | V |
| Business card | 85 x 55 mm house; 90 x 55 India; 89 x 51 US; 91 x 55 Japan | | n/a | PDF/X-4 | | 3 mm bleed, 4 mm safe | Wikipedia business card table | V |
| Roll-up banner | 850 x 2000 mm visible, design 850 x 2100 | | n/a | PDF at 1:4, 300 ppi | | lowest 100 mm free | supplier | T |
| Hoarding resolution | 300 ppi at 1:10 (30 ppi at size) | | | | | 100 mm bleed | section 6.6 | house |
| Deck | 1920 x 1080 (13.333 x 7.5 in); 3840 x 2160 for 4K | 16:9 | | PDF, PPTX, KEY | under 10 MB for email | 120 px margin | support.microsoft.com slide sizes | V |
| WCAG contrast and targets | 4.5:1 and 3:1 (AA), 7:1 (AAA); 24 px (AA), 44 px (AAA) | | | | | | w3.org/TR/WCAG22 | V |
| APCA | Lc 90 body preferred, 75 body minimum, 60 content, 45 headline, 30 placeholder, 15 dividers | | | | | | github.com/Myndex/SAPC-APCA | V |
| Web hero photograph | 2560 wide WebP under 300 KB, sRGB | per page | | WebP, AVIF, JPG | 300 KB | | section 10.1 | house |
| Print photograph | 300 ppi at size, 16-bit TIFF or PSD master in Adobe RGB or ProPhoto | | | TIFF, PSD | | | section 10.3 | house |

## Terms introduced

- Action safe: the central 93% of a 16:9 frame (3.5% inset) that a television is expected to show; from SMPTE ST 2046-1.
- APCA: Accessible Perceptual Contrast Algorithm, Andrew Somers' contrast model that reports a signed lightness contrast value Lc and ties the requirement to font size and weight.
- Bleed: printed area extending beyond the trim line (3 to 100 mm by product) so that cutting drift leaves no white edge.
- CABAC: context-adaptive binary arithmetic coding, the H.264 entropy coder YouTube asks for because it is more efficient than CAVLC.
- Closed GOP: a group of pictures that references no frames outside itself, so a stream can be cut or seeked at every GOP boundary.
- Content Publishing API: Meta's programming interface through which scheduling tools post to Instagram; it has lower limits than the app (10 carousel slides).
- Core Web Vitals: Google's three field metrics, LCP (largest contentful paint), INP (interaction to next paint) and CLS (cumulative layout shift), judged at the 75th percentile.
- dBTP: decibels true peak, the inter-sample peak level reconstructed by a meter compliant with ITU-R BS.1770.
- DCP: Digital Cinema Package, the JPEG 2000 and PCM file set with XML playlists that cinema servers ingest.
- Device pixel ratio: physical pixels per CSS pixel; 2 on most laptops and tablets, 3 on current iPhones.
- DOOH: digital out of home, advertising on networked screens in public places.
- Fast Start: an MP4 whose moov atom (the index) is at the front, so playback starts before the download completes.
- FOGRA: the German graphic technology research association whose characterisation data (FOGRA39, FOGRA51, FOGRA52) define the standard offset printing conditions used in ICC profiles.
- gsm: grams per square metre, the weight specification for paper.
- IAB: Interactive Advertising Bureau, the trade body whose Tech Lab publishes the display ad unit sizes and file weight limits.
- Initial load and subload: the IAB's two file-weight budgets for an ad, before and after the host page's load event.
- K-weight: the IAB's term for creative file weight in kilobytes after gzip compression.
- LUFS: loudness units relative to full scale, the integrated loudness measure of ITU-R BS.1770; LKFS in ATSC usage is the same unit.
- Maskable icon: a PWA or Android icon whose important content sits inside a safe circle so that launchers can crop it to any shape.
- Mupi: JCDecaux's 2 m² backlit poster frame (1185 x 1750 mm visible), the standard street and mall poster unit in the UAE.
- Open Graph: the meta tag protocol that Facebook, LinkedIn, WhatsApp and others read to build a link preview; og:image is its image tag.
- Pixel pitch: the distance in millimetres between adjacent LED centres on a wall; it sets native resolution and minimum viewing distance.
- PDF/X: the ISO 15930 family of print-exchange PDF subsets; X-1a is flattened CMYK, X-4 keeps transparency and ICC colour, X-6 is based on PDF 2.0.
- PPI: pixels per inch, the density of an image at its printed size; distinct from dpi, the printer's dot density.
- Principal display panel: the face of a package shown to the consumer at retail, whose area sets the minimum letter heights in Indian labelling law.
- PWA: progressive web app, a website installable from the browser through a web manifest and a service worker.
- Quiet zone: the blank margin a barcode needs on each side, measured in X-dimensions.
- Reflow: WCAG 1.4.10, the requirement that content fits a 320 CSS px wide viewport without horizontal scrolling.
- Safe zone (platform): the part of a vertical video frame that a platform's own interface (captions, buttons, progress bar) does not cover.
- SCC: Scenarist Closed Caption, the CEA-608 caption file format for US broadcast with 32 characters per row.
- SRT: SubRip subtitle format, plain text with sequence numbers and comma-separated millisecond timecodes.
- Subload: see initial load.
- Title safe: the central 90% of a 16:9 frame (5% inset) inside which text must sit for every display; from SMPTE ST 2046-1.
- True peak: see dBTP.
- Unipole: a single-column roadside billboard, the standard large-format unit on Dubai's highways.
- Viewport: the visible area of a web page in CSS pixels, the figure design breakpoints address.
- WebVTT: Web Video Text Tracks, the HTML5 caption format with positioning and styling, written like SRT with full-stop millisecond separators.
- X-dimension: the width of the narrowest bar in a barcode (0.330 mm for EAN-13 at 100% magnification), the unit in which barcode sizes and quiet zones are set.

## Sources and further reading

Platform help centres and ad guides (all read 28 October 2026 unless noted in section 1.2):

- Meta ads guide: facebook.com/business/ads-guide/update/image/facebook-feed, /video/facebook-feed, /video/facebook-story, /carousel/facebook-feed, /collection/facebook-feed, /image/instagram-feed, /image/instagram-story, /video/instagram-story, /video/instagram-reels
- Facebook Help, page cover and profile pictures: facebook.com/help/125379114252045
- Threads API overview: developers.facebook.com/docs/threads/overview
- Open Graph images for webmasters: developers.facebook.com/docs/sharing/webmasters/images
- YouTube Help: recommended upload encoding settings, support.google.com/youtube/answer/1722171; video thumbnails, answer/72431; channel art and icon, answer/10456525; end screens, answer/6388789; titles and descriptions, answer/57404; Shorts, answer/10059070
- Google Ads Help: responsive display ads, support.google.com/google-ads/answer/7005917; video ad formats, answer/2375464; Performance Max text, image and video assets, answer/14528373, 14530211, 14528532; Demand Gen asset specifications, answer/13704860
- TikTok Ads Help, video ads specifications: ads.tiktok.com/help/article/video-ads-specifications
- LinkedIn Marketing Solutions Help: single image ads, linkedin.com/help/lms/answer/a426534; video ads, a424737; document ads, a493903
- Pinterest Business Help, product specs: help.pinterest.com/en/business/article/pinterest-product-specs
- Snapchat for Business, single image or video ads: forbusiness.snapchat.com/advertising/ad-formats/single-image-or-video-ads
- Spotify Advertising specs: ads.spotify.com/en-US/ad-specs/audio-ad-specs and /in-stream-video-ad-specs
- Spotify for Artists, loudness normalisation: support.spotify.com/us/artists/article/loudness-normalization
- Google Play Console Help, store listing assets: support.google.com/googleplay/android-developer/answer/9866151
- App Store Connect Help, screenshot specifications: developer.apple.com/help/app-store-connect/reference/screenshot-specifications
- Android Developers, adaptive icons: developer.android.com/develop/ui/views/launch/icon_design_adaptive
- web.dev, Web Vitals: web.dev/articles/vitals; Add a web app manifest: web.dev/articles/add-manifest
- Netflix Partner Help Center, Timed Text Style Guide General Requirements and English Timed Text Style Guide: partnerhelp.netflixstudios.com

Specifications and standards:

- IAB Tech Lab, New Ad Portfolio, Fixed Size Ad Specifications (2017): iab.com/wp-content/uploads/2019/04/IABNewAdPortfolio_LW_FixedSizeSpec.pdf
- EBU R 128-2023, Loudness normalisation and permitted maximum level of audio signals (version 5, November 2023): tech.ebu.ch/docs/r/r128.pdf; supplements R 128 s1 (short-form content) and s2 (streaming)
- ITU-R BS.1770-5, Algorithms to measure audio programme loudness and true-peak audio level (2023)
- ATSC A/85, Techniques for establishing and maintaining audio loudness for digital television (2013)
- Apple ProRes White Paper (April 2022): apple.com/final-cut-pro/docs/Apple_ProRes.pdf
- Apple Digital Masters (technology brief): apple.com/apple-music/apple-digital-masters/docs/apple-digital-masters.pdf
- W3C, Web Content Accessibility Guidelines (WCAG) 2.2 (Recommendation, 5 October 2023, updated 12 December 2024): w3.org/TR/WCAG22; Understanding SC 2.5.5 and 2.5.8: w3.org/WAI/WCAG22/Understanding/
- Andrew Somers, APCA in a Nutshell: github.com/Myndex/SAPC-APCA/blob/master/documentation/APCA_in_a_Nutshell.md
- ISO 216:2007, Writing paper and certain classes of printed matter, trimmed sizes, A and B series; ISO 269:1985 for C series envelopes
- ISO 15930 parts 1 to 9 (PDF/X-1a, X-3, X-4, X-5, X-6); ISO 32000-2:2020 (PDF 2.0)
- ISO 12647-2:2013, Process control for the production of half-tone colour separations, proof and production prints, offset lithographic processes
- SMPTE ST 2046-1:2009, 4:3 and 16:9 safe areas; SMPTE ST 429-2, D-Cinema packaging
- DCI, Digital Cinema System Specification, version 1.4 (2020): dcimovies.com (unreadable in this check; the DCP article on Wikipedia summarises the image and audio containers)
- ANSI/CTA-608-E, Line 21 data services (the standard behind SCC captions)
- GS1 General Specifications (current release at gs1.org/standards/barcodes; unreadable in this check)
- Food Safety and Standards (Labelling and Display) Regulations, 2020, FSSAI, gazette notification 14 December 2020; Legal Metrology (Packaged Commodities) Rules, 2011, Second Schedule
- UAE.S GSO 9, Labelling of prepackaged foodstuffs; UAE.S GSO 2233, Requirements of nutritional labelling; administered by MoIAT

Articles and reference pages:

- Andrey Sitnik, How to Favicon in 2021: Six files that fit most needs, Evil Martians: evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
- Microsoft Support, Change the size of your slides: support.microsoft.com/en-us/office/change-the-size-of-your-slides-040a811c-be43-40b9-8d04-0de5ed79987e
- iOS Resolution, device table: ios-resolution.com
- Wikipedia, ISO 216; Business card; PDF/X; Digital Cinema Package (used as secondary summaries of the standards, each read 28 October 2026)

Books:

- Robert Bringhurst, The Elements of Typographic Style, version 4.0 (Hartley and Marks, 2012): measure, leading and the dash rules this corpus follows
- Charles Poynton, Digital Video and HD: Algorithms and Interfaces, second edition (Morgan Kaufmann, 2012): frame rates, Rec.709, legal range and the arithmetic of chroma subsampling
- Bob Katz, Mastering Audio: The Art and the Science, third edition (Focal Press, 2014): loudness, true peak and the reasoning behind streaming targets
