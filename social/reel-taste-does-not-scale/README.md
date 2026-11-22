# Reel: Taste does not scale

A 30 second agency reel for the Mask360 Instagram. Vertical, 1080 by 1920, 24 fps, with its own soundtrack.

- `out/mask360-reel-taste-does-not-scale.mp4` is the master. Upload this.
- `out/mask360-reel-taste-does-not-scale-cover.jpg` is the cover frame.
- `caption.md` has the caption options.

## The idea

The founder line from the site, split in two and held apart for 25 seconds: "Taste does not scale." opens the reel, "Structure does." closes it.

Between them the picture makes the argument. Taste is shown the way the site shows it: one image at a time, full bleed, with a caption a few words long. Then the frame turns into a system: a card, two cards, a wall of every piece of work, the numbers, the index of houses. By the time the second half of the line lands, the viewer has already watched structure do the scaling.

Everything on screen is real: photography and film frames from `website/public/assets`, copy from `website/content.mjs`, type and colour from `website/DESIGN.md`.

## Timeline

120 BPM, twelve frames to a beat, so every cut sits on the music.

| Time | Scene | On screen |
|---|---|---|
| 0:00 | Hook | Taste does not scale. |
| 0:02 | Anantara Jewel Bagh, Jaipur | Two days. One palace. |
| 0:04 | ZORÁE, Dubai | Never repeats itself. |
| 0:06 | Ajio Luxe Wkend, Mumbai | Nine categories. One roof. |
| 0:08 | EF Athletic | Born in Mumbai. Shot in Dubai. |
| 0:10 | Chivas Regal Ultis XX | Rendered in the dark. |
| 0:12 | The St. Regis Mumbai and Fire-Boltt | The penthouse, on film. Launched in 3D. |
| 0:14 | All work | One card pulls back into a wall of seventy |
| 0:16 | In numbers | ₹27 Cr, 500M+, 21,000+, 5 cities |
| 0:20 | Index | Houses we have worked with |
| 0:24 | Payoff | Structure does. |
| 0:27 | End card | The mark, the line, mask360.agency |

## Rebuild

```
./build.sh
```

Needs Node with Playwright and Chromium, Python 3 with numpy, scipy and pillow, and ffmpeg. A full build takes about five minutes. Working files go to `.cache/`, which is not committed.

- `src/reel.js` is the whole film: one timeline where every style is a function of the frame number. Copy, shots and timings are plain data near the top of each scene.
- `src/reel.css` holds the type and layout.
- `render.mjs` opens the page in headless Chromium and photographs each frame. Frames with fast movement are shot several times within the frame and averaged by `blend.py`, which is where the motion blur comes from.
- `audio.py` synthesises the soundtrack from scratch, so there is nothing to license.

To check a layout without a full render:

```
node render.mjs --stills 20,400,640 --guides
```

`--guides` draws the Instagram safe areas: the 4 by 5 feed crop, the top bar, the caption zone and the button column.

## Notes for posting

- All text sits inside the 4 by 5 centre crop and clear of the Reels interface, so it survives the feed preview and the profile grid.
- The soundtrack is original. To post with a trending track instead, mute the original audio in the Instagram editor. The cuts land every half second at 120 BPM, so a track at 120 or 60 BPM will still sit on them.
- The clocks in the header run in real time for the length of the reel. Mumbai turns over to 19:42 on the bar at twenty seconds.
