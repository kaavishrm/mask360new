# Reel: People decide fast

A 30 second agency reel for the Mask360 Instagram, built in the look of the live site at mask360.agency. Vertical, 1080 by 1920, 24 fps, with its own soundtrack.

- `out/mask360-reel-people-decide-fast.mp4` is the master. Upload this.
- `out/mask360-reel-people-decide-fast-cover.jpg` is the cover frame.
- `caption.md` has the caption options.

## The idea

The site's own argument, in the order the site makes it. "People decide fast and explain it later." opens the reel, over the palace going from day to night in one take. "Your buyer is already deciding. Let's make sure they choose you." closes it.

Between them: the work the site shows in public, the brands it can only name, and the numbers.

## What it borrows from the site

- Switzer, uppercase headings set tight, white text at a few strengths on black.
- The showreel player bar: running time, a hairline, a flame dot, a tick every four seconds. It runs across the top for the whole reel and keeps real time.
- The curved work carousel, with the case label and title under it.
- The stats that count up, the white button, and the two clocks from the footer.
- Flame appears only as the dot.

## What it shows, and what it does not

The live site keeps part of the work under NDA. The reel follows it exactly.

- **Shown:** Jewel Bagh, the athleisure launch, Fire-Boltt, the Nexa lounge at Lollapalooza India, L'Oréal Pro, Dior x Marangoni, Verona, BookMyShow. Praana, La Mercie, Smugglerz Inc. and Pure Facets pass at the edges of the carousel. Every frame comes from the site's public work and case pages.
- **Named only:** Ferrari, Rolls-Royce, St. Regis Mumbai, Atlantis The Royal, Ajio Luxe Wkend, Lodha Luxury, Kotak Private, ZORÁE. The site lists these under "Under NDA" and so does the reel. No imagery from them is used.

If an NDA also restricts naming a brand in promotion, remove its row from `NDA` in `src/reel.js` and rebuild.

Two smaller choices:

- The athleisure label is not named, because the site does not name it.
- The Fire-Boltt line reads "For one of India's leading wearable brands." The site's line also names the brand ambassador, but the footage used here is the watch film, and the reel should not put a person's name over footage unless it is certain who is in the shot.

## Timeline

120 BPM, twelve frames to a beat, so every cut sits on the music.

| Time | Scene | On screen |
|---|---|---|
| 0:00 | Hook | People decide fast and explain it later. The palace goes from day to night. |
| 0:04 | Work | NDAs keep most of our work private. This is the part we can show. |
| 0:06 | Jewel Bagh | Two days, one palace, 42 deliverables. |
| 0:08 | Athleisure launch | A new label, launched in two markets. |
| 0:10 | Fire-Boltt | For one of India's leading wearable brands. |
| 0:12 | Nexa lounge | Priced at three times the festival's VVIP pass. |
| 0:14 | Four more | L'Oréal Pro, Dior x Marangoni, Verona and BookMyShow pass on the carousel, one per beat |
| 0:16 | Under NDA | Eight names, uncovered one per half beat |
| 0:20 | We report on revenue | ₹27 Cr, 500M+, 21,000+, 6,000+ |
| 0:24 | Closing line | Your buyer is already deciding. Let's make sure they choose you. |
| 0:27 | End card | The lockup, Start a project, the two clocks |

## Rebuild

```
./build.sh
```

Needs Node with Playwright and Chromium, Python 3 with numpy, scipy and pillow, ffmpeg and curl. A full build takes several minutes. Working files go to `.cache/`, which is not committed.

- `assets.json` lists what is fetched from mask360.agency: the four Switzer weights and the public films and stills. They are downloaded at build time and never committed. If the site is republished and an address changes, update it here.
- `shots.json` lists every shot: which film or still, which frames, how it is cropped.
- `cut.py` fetches the assets and cuts the shots into frame sequences.
- `src/reel.js` is the whole film: one timeline where every style is a function of the frame number. Copy and timings are plain data near the top of each scene.
- `src/reel.css` holds the type and layout. `src/m360.svg` is the mark.
- `render.mjs` opens the page in headless Chromium and photographs each frame. It measures how far things travel while the shutter is open on each frame, shoots fast frames many times within the frame, and `blend.py` averages them. That is where the motion blur comes from.
- `audio.py` synthesises the soundtrack from scratch, so there is nothing to license.

To check a layout without a full render:

```
node render.mjs --stills 90,360,440 --guides
```

`--guides` draws the Instagram safe areas: the 4 by 5 feed crop, the top bar, the caption zone and the button column.

## Notes for posting

- All text sits inside the 4 by 5 centre crop and clear of the Reels interface.
- Films from the site play frame for frame at 24 fps, so 30 fps sources run slightly slow. That is deliberate.
- The soundtrack is original. To post with a trending track instead, mute the original audio in the Instagram editor. The cuts land every half second at 120 BPM, so a track at 120 or 60 BPM will still sit on them.
- The clocks on the end card run in real time. Mumbai turns over to 19:42 on the last second.
