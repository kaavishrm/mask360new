# Lighting and sound

The two crafts that separate professional moving image from everything else, written for Claude acting as Mask360's creative director. As of October 2026. Taste (what reads expensive, the canon, the cheap tells, the house layer) lives in design-taste; this file is the craft and technical layer beneath it. Camera, lens and shot grammar sit in the cinematography file of this corpus; grading and delivery in 16-editing-colour-grading-and-delivery.md; generative tools in 22-ai-era-craft-and-generative-tools.md; platform specs in 26-platform-and-format-specs-2026.md.

## Contents

1. [Light physics for designers](#1-light-physics-for-designers)
2. [Lighting setups](#2-lighting-setups)
3. [Natural light](#3-natural-light)
4. [Modifiers](#4-modifiers)
5. [Fixtures as of October 2026](#5-fixtures-as-of-october-2026)
6. [Lighting by subject](#6-lighting-by-subject)
7. [Lighting in AI image and video prompts](#7-lighting-in-ai-image-and-video-prompts)
8. [Lighting for stills and for motion](#8-lighting-for-stills-and-for-motion)
9. [Sound fundamentals](#9-sound-fundamentals)
10. [Capture on set](#10-capture-on-set)
11. [Post sound: dialogue, foley, ambience, design](#11-post-sound-dialogue-foley-ambience-design)
12. [Music: sourcing, licensing, editing to picture](#12-music-sourcing-licensing-editing-to-picture)
13. [Mixing and loudness](#13-mixing-and-loudness)
14. [Sound for social](#14-sound-for-social)
15. [Sonic branding](#15-sonic-branding)
16. [Tools as of October 2026](#16-tools-as-of-october-2026)
17. [Reference tables](#17-reference-tables)
18. [Terms introduced](#terms-introduced)
19. [Sources and further reading](#sources-and-further-reading)

## 1. Light physics for designers

### 1.1 Inverse square law and falloff

Illuminance (the light arriving on a surface, measured in lux) falls with the square of the distance from a point source. Double the distance, a quarter of the light, which is two stops. Move a lamp from 1 m to 1.4 m and you lose one stop; from 1 m to 2 m, two stops; from 1 m to 4 m, four stops. The practical consequences:

- Falloff is steep near the lamp and gentle far from it. A lamp 1 m from the near cheek and 1.5 m from the far cheek gives a 2.25:1 difference across one face (1.2 stops). The same lamp at 4 m and 4.5 m gives 1.27:1 (0.3 stops). This is why a close source models a face strongly and a distant source flattens it, independent of softness.
- Backgrounds go dark when the key is close to the subject and bright when it is far. To separate a model from a wall without a second lamp, bring the key in close. To light a room evenly for an interiors film, push the source far back or bounce it off a large surface.
- The law holds for point sources. A large soft source (a 2.4 by 2.4 m frame of diffusion, a window) behaves more like a plane source near it, with gentler falloff, which is part of why soft sources read as expensive: the tone across skin and product changes slowly.

Exposure in stops: a stop is a doubling or halving of light. On the lens, f/2.8 to f/4 is one stop; on the shutter, 1/50 to 1/100 is one stop; on the sensor, ISO 800 to ISO 1600 is one stop. T-stops (measured transmission) are what cinema lenses carry; f-stops are geometric and ignore glass losses, so a T2.8 lens passes exactly as much light as any other T2.8 lens. An incident meter (Sekonic L-858D, or the L-308X at the budget end) with the dome pointed at the camera reads the light falling on the subject and is the honest way to set ratios; a reflective reading off a dark fabric or a white marble lobby lies in opposite directions.

### 1.2 Colour temperature

Colour temperature, in kelvin (K), is the temperature of a theoretical black body whose glow matches the colour of the source. Low numbers are warm (orange), high numbers are cool (blue). The scale is nonlinear, which is why gel makers work in mired (micro reciprocal degrees: one million divided by the kelvin value); a gel shifts a fixed number of mireds regardless of the starting temperature.

| Source | Approximate kelvin | Notes |
|---|---|---|
| Candle flame | 1,800 to 1,850 | Wikipedia's table lists 1,850; practitioners say 1,800 |
| Domestic incandescent bulb | 2,400 to 2,700 | Dimming a tungsten bulb warms it further |
| Sunrise and sunset, sun on the horizon | 1,850 to 3,500 | Wikipedia lists 1,850 for the disc at the horizon; the useful window for faces is 3,000 to 3,500 |
| Studio tungsten (halogen) | 3,200 | The "tungsten" white balance preset; Lee 201 converts it to 5,700 |
| Horizon daylight (sun up, low) | 5,000 | |
| Noon daylight, the standard "daylight" | 5,500 to 6,000 | 5,600 is the video convention and the HMI and daylight LED calibration point |
| Overcast sky | 6,500 to 7,500 | D65 (6,504) is the display standard white; an overcast exterior reads close to monitor white |
| Open shade under a clear sky | 8,000 and above | Lit by blue sky only; Wikipedia gives 15,000 to 27,000 for the clear poleward sky itself |
| LED and LCD screens | 6,500 to 9,500 | A phone or monitor in shot is a cool source unless it is set warm |

Sources: Wikipedia, Color temperature (table of typical values); Lee Filters product pages for the conversion claims.

Mixing temperatures is a creative decision, never an accident. A 3,200 K practical lamp in a 5,600 K daylight room reads as a warm pool, which is the look of every luxury hotel film shot at dusk. A 5,600 K LED panel keyed on a face in a 3,200 K room reads as a window, which is fine, or as a fluorescent office, which is the mistake. Decide the camera white balance first (the "neutral" of the frame), then place every other source warmer or cooler than it on purpose. See 04-colour.md for the display side of white points and 16-editing-colour-grading-and-delivery.md for white balance in the grade.

### 1.3 Quality measures: CRI, TLCI, SSI, TM-30

- CRI (colour rendering index, Ra) scores how faithfully a source renders eight pastel test colours against a reference, out of 100. It was designed for human vision and the eight samples miss saturated red, so a lamp can score CRI 95 and still render skin greenish; always ask for R9 (the saturated red sample) alongside Ra.
- TLCI (television lighting consistency index, EBU Tech 3355) scores rendering through a model of an idealised three-chip broadcast camera. Better than CRI for video, but the Academy notes it does not account for the differing spectral sensitivities of single-chip cinema and stills sensors.
- SSI (spectral similarity index) was developed by the Academy of Motion Picture Arts and Sciences and published as SMPTE ST 2122. It compares the spectral power distribution of the test lamp with a reference (daylight, tungsten, a black body of chosen temperature, or a CIE illuminant) and gives a score up to 100 for a perfect match. It is not based on human vision or any particular camera, so two lamps with high SSI against the same reference will match on any sensor. This is the measure to ask for when mixing fixtures from different makers, or LEDs with HMI and tungsten.
- TM-30 (IES) reports Rf (fidelity) and Rg (gamut) against 99 samples; manufacturers now quote it alongside CRI.

Why it matters commercially: a jewellery macro lit by a lamp with SSI 74 against daylight will show a gold that cannot be matched in the grade to the client's swatch, because the information was never recorded. Nanlux quotes SSI 85 at 3,200 K and 74 at 5,600 K for the Evoke 5000B; Quasar Science quotes SSI up to 91 for the Rainbow 2. Numbers in the 70s are normal for white-phosphor LEDs at daylight; numbers in the 80s and 90s are the premium tier.

### 1.4 Hard and soft light; specular and diffuse

Hardness is set by the angular size of the source as seen from the subject. The sun is enormous and still hard because it subtends about half a degree. A 120 cm octabox at 1 m is soft; the same octabox at 6 m is hard. Rule: source size divided by distance decides softness, so to soften a light you either enlarge it (bigger modifier, bounce it off a wall) or move it closer. Shadow edges tell the story: hard light gives a crisp edge (the Jacquemus noon look, the Avedon white studio with a bare head), soft light gives a gradient (beauty, skincare, hospitality interiors).

Specular reflection is the mirror-like return of the source from a glossy surface (a watch crystal, a lacquered box, the sweat on skin); diffuse reflection is the scattered return from matte surfaces. Product work is mostly the management of speculars: a gloss bottle shows the shape of the light source, so the source must be a shape worth seeing (a long narrow softbox makes a clean highlight stripe; a bare LED makes a hot dot). Polarisers on lens and light (cross-polarisation) remove specular glare and reveal diffuse colour; used fully they kill the life in metal and glass, so dial them partway.

### 1.5 Contrast ratio and lighting ratios

Lighting ratio is key plus fill against fill alone, in the ASC definition ((key + fill) : fill). Each stop of difference doubles the ratio:

| Ratio | Stop difference between lit and shadow side | Reads as | Where luxury uses it |
|---|---|---|---|
| 1:1 | 0 | Flat, clinical, catalogue | E-commerce packshots, skincare swatches, legal and medical |
| 2:1 | 1 | Soft modelling, open, friendly | Beauty, hospitality interiors, most talking heads |
| 3:1 | about 1.6 | Classic portrait | Founder films, editorial fashion |
| 4:1 | 2 | Dramatic, dimensional | Jewellery and watches, fragrance, automotive |
| 8:1 | 3 | Noir, severe | Fashion film, whisky, men's grooming, one hero frame in a campaign |
| 16:1 and beyond | 4 plus | Silhouette and chiaroscuro | Title cards, fragrance teasers, the single tension frame |

Luxury rarely lives at 1:1 (nothing to discover) or beyond 8:1 for long (the viewer tires, and dark shadow regions block on phones). The house default for faces is 2:1 to 3:1 with a hard edge somewhere in the frame; for product 4:1 with a graduated highlight. The reason behind the rule: a higher ratio adds depth and cost signals, a lower ratio adds clarity, and the phone screen in a bright room (where most of Mask360's work is watched) needs shadow detail held above about 5 percent luminance or it vanishes into the glass reflection.

## 2. Lighting setups

Each setup below is given as a diagram in words, with a starting fixture and distance for a seated subject in a 5 by 6 m room. Scale distances up with larger sources; the ratios stay.

### 2.1 Three point: key, fill, back

- Key: the dominant source, 45 degrees off the camera axis and 30 to 45 degrees above eye line. Start: Aputure LS 600d Pro through a 120 cm Light Dome II at 1.5 m.
- Fill: opposite side, lower intensity, at or near camera height. Start: 120 by 120 cm white bounce at 1.5 m catching key spill, or a 1 by 1 panel through half-grid at a quarter of the key's level. Ratio set here (see 1.5).
- Back (hair or rim): behind the subject, high, opposite the key, aimed at hair and shoulders to separate them from the background. Start: Aputure 300d II with a 15 degree reflector plus quarter-grid, 2 m behind, flagged off the lens.

Three point is the grammar, not the look. Corporate video is three point at 2:1 with all three visible; the luxury version removes the fill, replaces the back light with a window, and lets the key fall off.

### 2.2 Rim and kicker

A rim light outlines the subject from directly behind, giving a bright edge all round; a kicker comes from behind at 45 degrees on the fill side and lands on the cheek and jaw as a thin highlight. Kickers are the cheapest way to make skin look expensive on a dark background, because they add a specular edge the eye reads as sheen. Keep the kicker a stop or two over the key on the edge and flag it hard off the lens, or you get veiling flare across the whole frame.

### 2.3 Motivated light and practicals

Motivated light is any source the audience can attribute to something in the world of the frame: a window, a lamp, a candle, a phone. The practical is the visible source itself (the lamp on the bedside table); the motivated lamp is the hidden fixture that does the real work from the same direction, matched in colour. The audience accepts a 600 W LED through a frame outside a window as "the window"; they reject a cool key from the ceiling in a candle-lit restaurant. For hotel and restaurant films, the plan is: inventory the practicals, decide which direction each room is "lit from", then hide the fixtures along those directions. Philips Hue and similar app-controlled bulbs let the gaffer dim and colour-match practicals from a phone, which saves the half hour per setup that swapping bulbs used to cost.

### 2.4 High key and low key

High key: fill close to key (1:1 to 2:1), bright backgrounds, few shadows. Reads clean, optimistic, clinical. Skincare, pharmacy, summer fashion.
Low key: little or no fill (4:1 and beyond), dark backgrounds, the subject carved from darkness. Reads serious, intimate, expensive. Fragrance, whisky, jewellery, menswear.

The house tends to low key with one bright accent (a window, a white garment) because a dark ground gives the product the whole frame. See design-taste, section 2, on space and restraint.

### 2.5 Portrait patterns: Rembrandt, loop, butterfly, split, broad and short

- Rembrandt: key high and 45 degrees to the side, so the nose shadow joins the cheek shadow and leaves a lit triangle under the far eye no wider than the eye and no longer than the nose. Dimensional, painterly; works on strong bone structure, unflattering on round faces.
- Loop: key lowered and moved toward camera until the nose shadow is a small loop on the cheek, separate from the cheek shadow. The default flattering pattern for most faces; talking heads, founders.
- Butterfly (Paramount): key directly on the camera axis, high, giving a small symmetrical shadow under the nose. Glamour, beauty, strong cheekbones. Add a reflector below the chin and it becomes clamshell (2.6).
- Split: key at 90 degrees, lighting exactly half the face. Severe, dramatic, graphic; one frame in a campaign.
- Broad: the lit side of the face is the side turned toward camera. Widens the face.
- Short: the lit side is the side turned away from camera. Narrows the face, adds depth, flatters almost everyone; the editorial default.

### 2.6 Clamshell for beauty

Two soft sources stacked on the camera axis: a large source above (octabox or beauty dish) angled down at about 45 degrees, and a second soft source or a white reflector below angled up, with the lens shooting through the gap. Skin lights evenly from both directions, pores recede, catchlights appear top and bottom of the iris. Ratio top to bottom from 2:1 (soft glamour) to 1:1 (skincare macro). Start: 90 cm octa at 80 cm above the eye line and a 60 by 90 cm white card at the chest. The tell of a bad clamshell is a flat, waxy face with no jaw definition; recover by adding a hair light or a dark card at the sides (negative fill, 2.9).

### 2.7 Book light

A bounce and a diffusion in sequence: the lamp fires away from the subject into a large white or silver bounce (a 4 by 4 foot foam board or a 6 by 6 foot ultrabounce), and the bounced light then passes through a diffusion frame (216 or grid cloth) before reaching the subject. The result is a very large, very even, directionless soft source with no visible hot spot, which is why it is the standard "window at dusk" and the beauty key of choice when the budget allows. Cost: about three to four stops, so it needs a 600 W or larger COB. Build it with the bounce and the diffusion frame forming a V, open toward the subject, like a half-open book.

### 2.8 Window light and the north light tradition

Painters' studios in the northern hemisphere faced north because north light is skylight only, with no direct sun: soft, cool, and constant through the day. A north-facing window is still the most expensive-looking key in any building. In India and the Gulf the geometry flips in intensity more than direction (the sun is high for most of the year), so any window without direct sun on it becomes "north light" for the hours it is in shade. Technique: put the subject 1 to 2 m from the window, at 45 to 90 degrees to it; control the ratio with a black flag or white bounce on the opposite side; never place the camera between subject and window unless silhouette is the idea. Mind that window light shifts about a stop and a few hundred kelvin across an hour; shoot the wide first, then coverage, and check the white balance between setups.

### 2.9 Negative fill, bounce, top light and under light

- Negative fill: a black flag, floppy or black fabric on the shadow side absorbs ambient bounce and deepens the ratio without adding a lamp. The single most used tool on luxury exteriors, where a white Dubai pavement or a Jaipur courtyard fills every shadow to 1.5:1 and flattens everything.
- Bounce: white gives soft neutral fill; silver gives a harder, brighter, cooler fill with a visible kick; gold warms, and is almost always a mistake on skin because it reads as sunbed (use a half-gold or a warm gel on a white bounce instead).
- Top light: a source directly above gives deep eye sockets and strong jaw shadows; harsh on faces, superb on product, food and textiles where texture is the point.
- Under light: a source from below inverts facial shadows and reads as horror or firelight; used deliberately as a candle or screen glow at low level, never as a key.

### 2.10 Edge and silhouette

Backlight alone, at 8:1 or more against a bright background, draws the subject as a shape. For fashion silhouettes use a 2.4 by 2.4 m frame of 216 behind the model with two 600 W COBs behind it, and no front light; expose for the frame, let the body go to black, then open the shadows one stop in the grade if you want a hint of skin. The edge version adds a single kicker so one side of the outline carries a thin highlight.

### 2.11 Lighting for depth

Separation comes from any difference between subject and background: brightness (lit subject on dark ground, or the reverse), colour temperature (warm subject on cool ground), sharpness (shallow depth of field), and haze (atmosphere makes far things lighter and lower contrast). The cheapest depth is a background lamp with a gel set two or three hundred kelvin from the key, raked across a textured wall; the most expensive is a hazed room with a hard backlight. A frame with three distinct planes of brightness reads as cinema; a frame with one plane reads as a webinar.

### 2.12 Continuity across shots and days

Light continuity is the reason a brand film from one DP cuts together and one from three does not. Log, per setup: fixture, modifier, distance, height, dimmer level, CCT, camera white balance, ISO, aperture, shutter, ND, and a wide reference still. For exteriors, note the time and the sun's azimuth and elevation (Sun Seeker and PhotoPills give both) so that a pickup two days later is scheduled for the same sun. For interiors lit by windows, decide early whether the window is "the key" or "a practical" and block all coverage within the hour it holds. The reverse shot is the usual failure: the key side flips, the ratio changes, and the edit shows two rooms.

### 2.13 The Deakins single source philosophy

Roger Deakins (Oscars for Blade Runner 2049 and 1917; the Team Deakins podcast since April 2020; Reflections: On Cinematography, 2025) has argued on his forum and podcast for years for lighting from one big soft source, placed where the real light in the scene would come from, with everything else either bounce from that source or negative fill. His reasons: one source gives one set of shadows, which the eye reads as true; it keeps the crew fast; and it forces the director to block for light rather than light for blocking. For Mask360 this is the default for hospitality and founder films: one large source (a 2.4 by 2.4 m book light or a window), a black side, and practicals for colour. Add a second source only when the frame has a visible reason for it.

The contested position: commercials DPs working with beauty and product often prefer multiple small controlled sources, because the client needs a specific highlight on a specific surface and a single source cannot be shaped that finely. Both are right in their field. The house follows Deakins for people and spaces and the multi-source school for product under 30 cm.

## 3. Natural light

### 3.1 Golden hour, blue hour, magic hour planning

- Golden hour: the sun below about 6 degrees elevation, roughly the last hour before sunset and the first after sunrise; warm (3,000 to 3,500 K), low, long shadows, and about three stops dimmer than noon. In Mumbai or Dubai near the equator-side latitudes (19 and 25 degrees north) the sun drops fast, so "golden hour" is often 35 to 45 minutes; in a Jaipur winter it stretches a little.
- Blue hour: the sun 4 to 6 degrees below the horizon, after sunset and before sunrise; the sky is a soft deep blue at 9,000 K and above while practicals and windows glow warm. The hotel exterior and the lit pool are shot here, with interiors already lit to balance (6.7).
- Magic hour is the two together. Plan it with Sun Seeker (augmented-reality sun path on a phone) or PhotoPills (planner with sun, moon, Milky Way, and shadow length; the standard for stills shooters). Both show the sun's azimuth and elevation for any date and place, so the DP can promise "the sun will enter the courtyard arch at 17:12 on the 14th" before the recce.

### 3.2 Overcast as a softbox; harsh noon and how to use it

An overcast sky is a source the size of the sky: shadowless, cool (6,500 to 7,500 K), and flat. It flatters skin and kills depth; add negative fill on one side and a warm edge from a 600 W COB with half CTO to get a ratio back. Monsoon Mumbai and a Dubai winter haze give this light for free.

Harsh noon is a hard source from directly above: panda eyes, hot foreheads, black shadows. The two professional answers are to diffuse it (a 3.6 by 3.6 m frame of half-grid overhead, which takes a crew of three and a permit) or to use it as the idea. Jacquemus's campaigns and shows in the south of France built a brand on noon sun: hard shadows, saturated colour, squinting models, concrete and lavender. The move reads as confident because everyone else avoids it. Rules for using hard sun: shoot the shadows as graphic shapes, let faces turn into the light or away from it (never half), keep the lens flare out unless flare is the look, and bring a white bounce for the eyes.

### 3.3 Shade and open shade; window direction

Open shade (the subject in shadow, lit by the open sky) is the location portrait default: soft, directional from the sky side, cool. Correct the blue in camera (white balance 7,000 to 8,000 K) or let it sit against a warm background for contrast. Window direction for interiors: east windows give hard morning light and soft afternoons, west the reverse, north (in the northern hemisphere) soft all day, south hard most of the day. Recce with a compass app and the sun path tool, then write the room schedule from the windows, not from the call sheet.

### 3.4 Mixing natural and artificial

Match the artificial sources to the dominant daylight, or decide the daylight is the accent. A daylight-balanced LED (5,600 K) through a window frame adds to the real window with no colour shift. A tungsten or warm LED practical inside stays warm on purpose. For mixing a 3,200 K source into 5,600 K daylight, gel it with full CTB (Lee 201: a shift of minus 137 mired, converting 3,200 K to about 5,700 K; transmission 34 to 35 percent, which is about 1.5 stops lost). For pulling daylight down to tungsten, full CTO (Lee 204: plus 159 mired, 6,500 K to 3,200 K; transmission 55 percent at daylight, about 0.85 of a stop lost). Bi-colour LEDs do the conversion at the dial and at no stop cost, which is why they replaced gels for most work (5.1).

### 3.5 Shooting interiors by daylight with fill

The window is the key; the task is to lift the room so the window does not clip. Method: expose for the window at the top of the sensor's highlight range (on an ARRI Alexa 35 or Sony Venice 2 that is about four to five stops over mid grey; on a mirrorless camera less), then fill the interior with a large bounce or a book light at daylight balance until the room sits two to three stops under the window. Keep the fill motivated from the window side. If the window still clips, add ND gel to the glass (Lee 209 is 0.3 ND, one stop; 210 is 0.6 ND, two stops) or shoot the room at blue hour when the outside and inside balance naturally. For stills, bracket and blend (6.7).

## 4. Modifiers

### 4.1 Softboxes, octaboxes, umbrellas, lanterns

| Modifier | Sizes in common use | Character | Use |
|---|---|---|---|
| Softbox (rectangular) | 60 by 90 cm, 90 by 120 cm, 30 by 120 cm strip | Even, controllable, rectangular catchlight; strips give a long clean highlight | Product gloss, fashion full length, hair light |
| Octabox | 90, 120, 150 cm; Aputure Light Dome II is 90 cm, Light Dome III 90 cm, Light Dome 150 | Round catchlight that reads as an eye reflection, fast falloff at the edges | Beauty, talking heads, founder portraits |
| Umbrella (shoot-through or reflective) | 100 to 180 cm | Cheap, broad, spills everywhere | Fill, event and press shoots, never the key on luxury |
| Parabolic (Broncolor Para, Parabolix, Godox Parabolic) | 88 to 222 cm | Focusable: specular centre with soft edges, crisp skin texture | Fashion editorial, the "Para look" of the 2010s campaigns |
| China ball (paper lantern) | 30 to 90 cm | Omnidirectional soft, warm, cheap, light enough to fly on a boom pole over a table | Dinner scenes, walk-and-talks, F&B tables |
| Lantern (Aputure Lantern, Nanlite LT-120) | 60 to 120 cm | China ball with a skirt and speed ring for COBs | Same uses at 600 W |

Rule of thumb: the modifier should be at least as large as the subject it keys, and sit at a distance about equal to its own diameter for the softest usable light with some direction left.

### 4.2 Diffusion materials and stops lost

Values below are published transmission figures where the maker states them and approximate stop losses computed from them; Lee's own product pages give transmission for colour filters and not for most diffusions, so meter every setup.

| Material | Character | Approximate loss |
|---|---|---|
| Lee 216 White Diffusion (Rosco Tough White Diffusion) | Heavy, milky, very soft | 36 percent transmission on retailer data sheets, about 1.5 stops |
| Lee 250 Half White Diffusion | Medium | about 60 percent, about 0.75 stop |
| Lee 251 Quarter White Diffusion | Light | about 80 percent, about 0.3 stop |
| Lee 252 Eighth White, 452 Sixteenth White | Takes the edge off a hard source without visibly softening | less than a quarter stop (value unpublished) |
| Lee 410 Opal Frost, 420 Light Opal | Very light, keeps a hot centre; the DP's "just to soften the shadow edge" | about half a stop (unpublished; meter it) |
| Grid cloth (Lee 430 full, 432 light, 434 quarter; Rosco 3030, 3032, 3034) | Woven, tough, outdoor-safe; the standard for 4 by 4 and larger frames | full about 2 stops, light about 1 stop, quarter about half a stop (practitioner values; meter it) |
| Artificial silk (China silk) | Very soft with a slight directional sheen; theatre and beauty | about 1 stop |
| Unbleached muslin | Soft and warm (it is cream, so it drops colour temperature a few hundred kelvin) | about 1.5 to 2 stops |
| Bleached muslin | Soft, neutral | about 1 to 1.5 stops |
| Magic cloth (Rosco 3090 Soft Frost class) | Smoother than 216 with less loss, no hot spot | about 1 stop |

Reason to care about the stop values: a 600 W COB through full grid cloth on a 2.4 m frame at 3 m delivers roughly the light of a 150 W bare lamp, which is below what a Sony Venice 2 at ISO 800 and T4 needs for a bright interior. Plan the fixture from the loss, not from the brochure.

### 4.3 Flags, cutters, floppies, nets, grids, snoots, barn doors

- Flags (solids): black fabric on a steel frame, 45 by 60 cm up to 120 by 120 cm, that cut light. A cutter is a long narrow flag; a floppy is a 120 by 120 cm flag with a hinged second panel that doubles its height. Every lamp gets a flag between it and the lens; it is the first thing a grip does.
- Nets (scrims): single (one stop) and double (two stops) black mesh that reduce light without changing its quality or colour; open-ended versions let the DP feather the cut.
- Grids (egg crates): fabric honeycombs that attach to the front of a softbox (40 degree is standard, 20 and 60 exist) and stop the light spreading sideways, so a soft source still has direction and the background stays dark. Grids are what make soft light look expensive instead of flat.
- Snoots: tubes on a hard lamp that give a small pool; barn doors: four hinged leaves that shape the beam on a Fresnel or open-face lamp. Both are edge-control for hard light.
- Black wrap: heavy matte black aluminium foil, moulded by hand over a lamp or a practical to kill spill in seconds; the gaffer's duct tape.

### 4.4 Bounce boards

White foam board (4 by 4 or 4 by 8 foot) for neutral soft fill; ultrabounce (a white fabric, one side black) for frames; silver for a harder fill with a specular kick, useful for eyes and on dark skin where a white bounce can read grey; gold only when a sunset is the idea. Beadboard (expanded polystyrene) is the cheapest large white source and the first thing to buy in a new city; in Mumbai it is sold as thermocol sheets.

### 4.5 Gels: correction and effect

| Gel | Shift | Converts | Loss |
|---|---|---|---|
| Full CTO (Lee 204, Rosco 3407 class) | plus 159 mired | daylight 6,500 K to tungsten 3,200 K | 55 percent transmission at daylight, about 0.85 stop |
| Half CTO (Lee 205) | about plus 81 mired | 6,500 K to about 3,800 K | about half a stop |
| Quarter CTO (Lee 206) | about plus 42 mired | 6,500 K to about 4,600 K | about a quarter stop |
| Full CTB (Lee 201, Rosco 3202 class) | minus 137 mired | tungsten 3,200 K to about 5,700 K | 34 to 35 percent transmission, about 1.5 stops |
| Half CTB (Lee 202), quarter CTB (Lee 203) | about minus 78 and minus 49 mired | partial correction | about 1 stop and about half a stop |
| Plus green (Lee 244 class) | adds green | matches a tungsten or daylight lamp to fluorescent or sodium | about a third of a stop |
| Minus green (Lee 247 Minusgreen class) | adds magenta | removes the green of fluorescent and cheap LED practicals | about a third of a stop |
| Party gels (Lee 181 Congo Blue, 026 Bright Red, 128 Bright Pink) | saturated colour | background accents, club and event looks | one to three stops, deep blues and reds lose most |

Reason for the mired system: a half CTO on a 5,600 K source gives about 3,900 K, on a 4,300 K source about 3,200 K; the same gel, different results, consistent in mired. Modern bi-colour and RGBWW fixtures replace correction gels for most tasks; gels remain essential on HMI, tungsten, practicals and windows.

### 4.6 Haze and atmosphere

A hazer puts a fine, long-hanging mist (water-based glycol or glycerine fluid, or mineral oil in "cracker" units) into the air so that light beams become visible and distance reads as lighter and lower contrast. A fogger produces dense, local, short-lived cloud. Haze makes a room look expensive by giving backlights something to draw on and by separating planes; it needs a backlight to show at all and reads as flat grey if lit from the front. When haze reads cheap: a visible beam from a lamp with no motivation, uneven patches (the room needs 10 to 15 minutes to settle after hazing and fans off), and haze in a bright white interior where it only lowers contrast. Hotels and venues in India and the UAE frequently forbid oil haze under their fire alarm rules; water-based units and a letter to the venue the day before are the norm. Check the alarm has been isolated with the venue's engineer, in writing.

## 5. Fixtures as of October 2026

### 5.1 LED COB (chip on board) point sources

| Fixture | Power | Type | Published figures | Notes |
|---|---|---|---|---|
| Aputure LS 600d Pro | 600 W, 720 W max draw | Daylight 5,600 K | about 8,500 lux at 3 m with the Hyper Reflector; the LS 600d reaches 29,300 lux at 3 m with the F10 Fresnel | The workhorse of Indian and Gulf commercials rental; Bowens mount; weather resistant |
| Aputure LS 600c Pro II | 600 W | Tunable colour (RGBWW) | listed at $1,490 on aputure.com in October 2026 | Replaces the 600c Pro; use it where one lamp must be key and coloured accent across a day |
| Aputure LS 600x Pro | 600 W | Bi-colour 2,700 to 6,500 K | listed $1,393 | |
| Aputure LS 1200d Pro | 1,200 W COB, 1,440 W max draw | Daylight | 83,100 lux at 3 m with the narrow 15 degree Hyper Reflector, 22,400 at 30 degrees, 9,610 at 55 degrees; 8.94 kg; $3,390 | The window-through-diffusion lamp; approaches a 1,200 W HMI in a Fresnel and needs no ballast |
| Aputure STORM CS32 | 3,200 W | Tunable colour | listed $7,590 (Cine Kit with CF16 Fresnel $10,499) | The large tunable source for stages and day exteriors |
| Aputure LS 300d II, LS 300x | 300 W | Daylight and bi-colour | LS 300d II listed $759 | Kickers, backlights, small interiors |
| Nanlux Evoke 2400B | 2,400 W | Bi-colour 2,700 to 6,500 K with green and magenta plus or minus 80 | CRI 96, TLCI 97; over 300,000 lux at 1 m; IP55; AC 100 to 240 V at 26 A max | The HMI replacement for sunlight through a window |
| Nanlux Evoke 5000B | 5,000 W | Bi-colour 2,700 to 6,500 K | CRI 97, TLCI 98, TM-30 Rf 96 and Rg 102, SSI 85 at 3,200 K and 74 at 5,600 K; 95 degree beam; IP66; about 46 kg; 44 dB(A) in smart fan mode; $14,800 to $15,500 | Nanlux states its output approaches a 9 kW HMI; needs a 52 A circuit, so a generator or a venue's three-phase feed |

The LS 600d Pro II and LS 1200d Pro II were not listed on aputure.com in October 2026; if a rental house offers a "Pro II" daylight COB, verify the model on the lamp head. The AI image-prompt vocabulary of "an Aputure 600d through a book light" refers to this class of lamp (section 7).

### 5.2 Panels and soft sources

Aputure NOVA II 1x1 (500 W, tunable colour, $1,899) and NOVA 9 degree 2x1 (650 W, tunable white, hyper narrow beam, $3,690); Litepanels Gemini 1x1 and 2x1 Soft and Hard (RGBWW; the broadcast and studio standard in the Gulf); Nanlite PavoSlim and Aputure Amaran panels at the lower tier. Panels are soft without a modifier and fast to rig, which is why they own interviews and events; the trade is a flat quality and a visible rectangular catchlight, so key luxury faces with a COB through a modifier and use panels for fill and background.

### 5.3 Tubes and pixel sources

- Astera Titan Tube: 72 W total LED power, 48 W max draw, 2,900 lm, 1,750 to 20,000 K, CRI and TLCI above 96, 16 individually controllable pixels, 120 degree beam, battery powered, CRMX and app control. A photobiological test report dated 29 May 2026 covers the Titan Tube BTB (model FP1-BTB, 24 V DC 48 W), so expect the BTB variant on rental lists.
- Quasar Science Rainbow 2: 2 ft (25 W, 10 pixels), 4 ft (50 W, 24 pixels) and 8 ft; 1,750 to 10,000 K; CRI up to 95, SSI up to 91, TM-30 up to 94; DMX, sACN, Art-Net, CRMX, W-DMX and Bluetooth.
- Use: hidden in architecture (under a bar counter, behind a headboard, inside a car), as practicals that look like neon, as a moving pixel effect (a passing car's lights) and as a soft wrap on skin at close range. Tubes are what made the 2020s hotel-room look possible with a two-person crew.

### 5.4 RGBWW and colour accuracy

RGBWW fixtures mix red, green, blue, warm white and cool white emitters (some add lime, amber or cyan; Aputure calls its mix BLAIR). They can hit any gel colour at the dial and still produce a high-CRI white because the white emitters carry the skin-tone load. Two cautions: saturated colours from LEDs are narrow-band and can clip on camera (a deep blue goes electric and loses all texture; dial it back to 80 percent saturation), and two makers' "Congo Blue" differ, so set colours by gel number or by xy coordinates in the app rather than by eye.

### 5.5 HMI

HMI (hydrargyrum medium-arc iodide: a metal halide arc lamp with a ballast) is still the brightest daylight per watt and the sun replacement for exteriors. ARRI M18: 1,800 W, lens-less MAX reflector (the technology from the ARRIMAX, which won an Academy Scientific and Engineering Award), beam 20 to 60 degrees, 11.5 kg head, dimmable 50 to 100 percent via the ballast, and ARRI states it is more than 70 percent brighter than a 1,200 W head. K5600 Joker (200, 400, 800 and 1,600 W; Joker-Bug versions fit inside softboxes) are the compact HMIs for travel. Rules: HMIs take two to three minutes to strike and reach colour, cannot be hot-restruck without the right ballast, and flicker on magnetic ballasts at mains frequency, so insist on electronic flicker-free ballasts and shoot at 25 fps with a 180 degree shutter in 50 Hz countries (India and the UAE). HMIs run hot and need safety glass: a UV-emitting arc with a cracked lens burns skin.

### 5.6 Tungsten, fluorescent legacy, practicals

Tungsten (ARRI Fresnels 300 W to 5 kW, open-face "redheads" 800 W and "blondes" 2 kW) gives a continuous spectrum (CRI 100 by definition), a beautiful warm dim curve, and heat. Still worth renting for a candle-lit dinner or a period hotel where LED warm whites feel thin; the rest of the time LED wins on power and heat. Fluorescent (Kino Flo tubes) defined the 1990s and 2000s soft look and survive in some Mumbai rental inventories; their green spike needs minus green and a camera test. Practicals: use high-CRI LED bulbs (Philips Hue White Ambiance or similar, or specialist film bulbs) in every lamp in frame; a supermarket LED bulb at CRI 80 turns skin green at the edge of the frame.

### 5.7 Bi-colour vs full colour; flicker and dimming curves

Bi-colour lamps (two white emitter sets) give more output and better skin at any white than full colour lamps of the same wattage, and cost less; full colour lamps pay for the accent work. Flicker: LEDs dim by PWM (pulse width modulation) or by constant current; PWM at a low frequency flickers at high frame rates and short shutters, so for 120 fps slow motion and above, test the lamp at the frame rate in camera before the day. Dimming curves (linear, logarithmic, exponential, S-curve) change how a fade looks; for an on-camera dim (a room darkening) use a logarithmic or S curve, because perceived brightness is logarithmic and a linear dim looks like it drops at the end.

### 5.8 Power, generators and rental norms in India and the Gulf

- Mains: 230 V at 50 Hz in India and the UAE; a standard domestic 16 A socket in India delivers about 3.5 kW, which is five 600 W COBs or two 1,200 W heads plus monitors, and no more. Big HMIs and the Evoke 5000B need three-phase or a generator.
- Generators: film shoots in India run on silent diesel gensets (62.5 kVA and 125 kVA are common sizes) that come with an operator, cable, and a distribution box; book through the lighting vendor, specify "silent" and a run time, and park it where the sound recordist agrees (section 10). In Dubai, generators on public land need the Dubai Film and TV Commission permit on the location paperwork, and most hotels require a venue electrician to tie in.
- Rental norms, Mumbai: equipment is quoted per shift (the 12 hour shift, usually 7 am to 7 pm or 8 to 8, with overtime by the hour after), lights arrive with the vendor's lightmen (the term for lighting technicians) whose wages, conveyance and food are separate lines on the quote, crews are affiliated to FWICE (Federation of Western India Cine Employees) unions and the gaffer runs the lightmen, and a security deposit or a letter from a known production house is standard. Cartage (transport) and a "setting" charge are quoted separately. Rates vary by vendor and are not published; get three quotes and verify the lamp model on arrival.
- Rental norms, Dubai: quotes per day with weekly rates at four to five days, crew (gaffer, best boy, sparks) quoted per 10 or 12 hour day, VAT at 5 percent added, insurance certificates required by the rental house, and most gear housed in Dubai Studio City or Al Quoz. Permits for exteriors come through the Dubai Film and TV Commission; allow several working days and a location fee for public spaces. Abu Dhabi runs its own commission (Abu Dhabi Film Commission, with the 2023 rebate scheme for qualifying productions).
- Voltage and sockets travel: Indian crews bring their own 16 A to 15 A adaptors; UAE uses BS 1363 (UK) sockets, so British-spec distros work.

## 6. Lighting by subject

### 6.1 Faces and skin across complexions

The physics: darker skin reflects less light and has more specular sheen relative to its diffuse return, so an exposure that is right for a light-skinned subject underexposes a dark-skinned one, and a flat front light makes dark skin look grey and dull because it suppresses the sheen that gives it form. The craft answers, associated with Bradford Young (Pariah 2011, Selma 2014, A Most Violent Year 2014, Arrival 2016 for which he was the first African American nominee for the cinematography Oscar; he favours raw light and shooting into it, and lit a Pariah bedroom with Christmas lights and an IKEA lamp), with James Laxton on Moonlight (2016), and set out plainly by Ava Berkofsky (cinematographer of HBO's Insecure) in a 2017 interview with Mic:

- Expose for the skin, not the room: let a white wall go bright rather than drop the face. Set the key by an incident reading at the face and ignore the camera's auto exposure.
- Use harder, more directional light with a specular component (a 90 cm octa close, or a silver bounce) so the skin's sheen draws the bone structure; a huge flat source is the grey-skin mistake.
- Warm fill, never grey: fill with a warm bounce or a lamp at 3,200 to 4,000 K; cool fill reads ashen.
- Separate from the background with a kicker or a rim; dark skin on a dark ground with no edge disappears on a phone.
- Moisturiser or a light sheen on the skin, applied by the makeup artist, gives the specular return the light needs; matte powder is the enemy on dark skin and the friend on very light skin.
- Mixed groups (an Indian wedding, a Gulf boardroom with Emirati, South Asian and European faces): key for the darkest skin in the frame, then subtract from the lightest with a net or by position, because you can take light away from a face in the grade more gracefully than you can add it.

South Asian skin spans the whole range and carries red and olive undertones that cheap LEDs with low R9 push to muddy brown; insist on CRI above 95 with R9 above 90, or SSI above 80 against the reference, on every face key.

### 6.2 Beauty and skincare

Soft, frontal, large, close: clamshell (2.6) or a 150 cm octa on axis above the lens; a white card below; catchlights top and bottom; ratio 1:1 to 2:1. Catchlights (the reflection of the source in the eye) are the whole game: round and at ten or two o'clock reads natural, a ring reads as a ring light. The ring light tell: a doughnut in the pupil, a halo shadow behind the head, flat waxy skin; it signals a creator setup from 2019, which is the opposite of what a skincare client is paying for. Texture control is the second game: a hard rim from behind at 45 degrees shows the fine hair on the cheek (expensive in a close-up); a hard key shows pores (never). Retouch rules in 16-editing-colour-grading-and-delivery.md, section 10.

### 6.3 Jewellery

Jewellery is specular surfaces at every angle. The light source becomes the image: a large diffusion (a 1.2 by 1.2 m frame of 216 or a tent) gives a smooth gradient on polished metal; small white and black cards placed at the edges of the diffusion draw bright and dark lines along facets and edges so the form reads (a polished ring with a single white gradient looks like a blob; the same ring with a black card reflected along its top edge looks like a ring). Diamonds: the sparkle problem is that a stone lit by one big source shows one grey window, with no fire; fire comes from many small hard sources at different angles, so add two or three pin lights (a 60 W focusing COB with a snoot, or an LED torch) aimed into the stone from outside the diffusion, and in motion, move one of them slowly on a slider so the facets flash. Polarisers kill the metal's life; use them only on the lens to cut a reflection of the camera. Gold reads as gold only against a warm reference: a white card reflected in gold looks yellow-white, so let a warm-toned card or a warmer gel sit in the reflection. Keep the camera and crew out of the reflections with a black tent and a hole for the lens. Macro depth of field is paper thin; focus stack for stills, and for motion shoot at T8 to T11 with a lot of light, which is where 1,200 W COBs through diffusion earn their rental.

### 6.4 Watches

Everything in 6.3 plus the crystal (the glass face), which reflects the entire room: a tent or a large black-and-white gradient card above and a narrow strip softbox for the case highlight. Hands set to 10:10 by convention (the brand name clear between the hands, the face "smiling"). Brushed steel wants a hard edge that shows the brush direction; polished bezels want a gradient; the dial wants a soft frontal source with the camera angled a few degrees off the crystal's normal so the lens is out of the reflection. Dulling spray (a matte aerosol) is for background metal only; it kills the finish the client paid for.

### 6.5 Product and packaging

- Gloss (lacquer, glass, foil): light the reflection; use a strip softbox for a long clean highlight down one side and a black card for a dark edge on the other, and position both so the highlight follows the product's curve.
- Matte (paper, stone, leather): light the texture; a raking hard key at 60 to 80 degrees from one side and a soft fill.
- Glass and liquids: backlight through diffusion so the liquid glows, then add edge definition with black cards either side; a white bottle on white needs a black edge to exist. A single bright "window" highlight on a bottle shoulder is the signature of the premium spirits catalogue.
- Tenting: a white fabric cube around the product with lamps outside; gives a shadowless gradient on anything shiny, at the cost of all drama; the e-commerce standard.
- Dulling spray for hot spots on chrome parts that are not the hero; clay and museum putty to hold products; a 2 by 3 m roll of white or coloured paper for sweeps; a ruler and a spirit level because an off-level bottle reads as cheap.

### 6.6 Food

Backlight or side light, never front: light from behind at 30 to 45 degrees above gives sheen on sauces and translucency to greens and glass; a white bounce in front for fill; a small black flag to keep the back edge of the plate dark so the food is the brightest thing. Speed is the constraint, because food dies in minutes (salad wilts, ice cream slides, foam collapses), so light the set with a stand-in plate, lock focus and exposure, and swap the hero in. Warm key (4,000 to 4,500 K) flatters most food; cool key kills it except for seafood and ice. For F&B clients in India and the Gulf, chefs prefer dishes "as served"; the stylist's job is to keep it true and make it hold under lights.

### 6.7 Interiors and architecture

- Balance windows and interiors: see 3.5. The twilight exterior (the hotel at blue hour with all rooms lit) is scheduled to the minute and needs every practical on a dimmer from one position; shoot a sequence of frames across 20 minutes and choose the balance in the edit.
- Flash blends for stills: the architectural photographers' method of one ambient exposure plus several flash-lit exposures (a speedlight or Profoto head bounced off the ceiling, walked around the room) composited by hand in Photoshop, which gives clean colour in every corner without the HDR look.
- Bracketing: three to five exposures two stops apart for the window and the room, merged by hand or in Lightroom's HDR merge, then graded flat; the tell of overdone HDR is a glowing halo at the window frame, which design-taste lists as a cheap tell for a reason.
- The empty room as abundance: luxury interiors are photographed with nothing on the surfaces, one chair pulled out, a book open; the emptiness is the product. Light it so the materials show (raking light on stone and timber), and keep verticals vertical (tilt-shift lens or correct in post).

### 6.8 Hotels and hospitality

Available light first: a well-designed hotel was lit by a lighting designer, and the film should show their work. Walk every space at the hours the client wants (breakfast terrace 7 to 8 am, pool 4 pm, bar 7 pm) and write a time-of-day plan per room from the windows and practicals. Add light only to lift faces and correct colour casts (most hotel LEDs sit at 2,700 to 3,000 K with mixed CRI; carry minus green and a few high-CRI bulbs). Shoot rooms at the moment the window and the practicals balance (blue hour, or a shaded hour) and use a book light outside the door for the bed. In the Gulf, mid-afternoon exteriors are unusable; the schedule is dawn, dusk and interiors in between. Staff in frame are lit as people (6.1), never as furniture.

### 6.9 Fashion

Three looks worth naming because clients ask for them by reference: hard sun or a bare bulb (a single hard source, crisp shadows, the Jacquemus noon and the 1990s Helmut Newton pool); the Avedon white (Richard Avedon moved to studio strobe by the late 1950s and stripped out soft lights and props so that the subject against a plain white seamless was the whole picture; In the American West, shot 1979 to 1984 on 8 by 10 film and published 1985, is the reference; technically a white background lit two stops over the subject, a large soft key on axis, and nothing else); and the Juergen Teller flash (on-camera flash, snapshot aesthetic, imperfection on purpose; Marc Jacobs campaigns from the Spring/Summer 1998 season to Spring/Summer 2014, Céline Fall/Winter 2010, Vivienne Westwood 2008 to 2010, Louis Vuitton 2014 to 2015, the Grand Palais Éphémère exhibition "i need to live" in 2023). Each is a complete idea; the mistake is mixing them in one campaign. Movement needs light that holds across the frame (a 2.4 m book light or sun) rather than a tight octa that the model walks out of.

### 6.10 Cars

A car is a curved mirror. The light is a long, continuous soft source that reflects as one clean line along the body: a 6 by 2 m overhead frame of diffusion with lamps above it ("the tunnel"), or a long strip softbox, or a single overhead softbox moved along the car during a long exposure (light painting, the stills method). Reflections of the crew, the sky and the building appear in every panel; a studio with a black cove or a location at blue hour with a clean sky solves most of it. Polarisers manage the windscreen. Rolling shots at dusk use the sky as the tunnel.

### 6.11 Events and stages

Shoot under the stage lighting designer's light and correct for it: white balance to the key colour on faces (often 3,200 K for tungsten profiles or 5,600 K for LED), accept the saturated washes as they are, and add a small on-camera or stand-mounted LED at matching colour for the interview corner. LED walls flicker and moiré: match the camera's shutter to the wall's refresh (test 1/50, 1/100 and odd angles in camera), stand back so the pixel pitch is below the sensor's resolution, and white balance to the wall's white if the wall is the background. Noise rules apply to events in India under the Noise Pollution (Regulation and Control) Rules, 2000 (55 dB(A) daytime and 45 night in residential zones, 65 and 55 commercial; loudspeakers need permission and stop at 10 pm except on permitted days); generators and PA on outdoor Dubai events need the municipality's noise permit.

## 7. Lighting in AI image and video prompts

Generative image and video models (Midjourney, Imagen, Flux, Kling, Veo, Runway, Higgsfield as of October 2026; see 22-ai-era-craft-and-generative-tools.md for versions and workflow) learned their lighting vocabulary from captioned photographs, so the words that work are the words photographers write in captions and lighting diagrams. The vocabulary that maps to real setups:

| Prompt term | Real setup it evokes | Notes for use |
|---|---|---|
| Rembrandt lighting | key 45 degrees, high, triangle under the far eye | Reliable on faces |
| rim light, backlit, edge light | source behind subject, bright outline | Models add haze; say "no haze" if unwanted |
| golden hour, low sun, long shadows | sun under 6 degrees | Often oversaturated; add "muted, soft colour" |
| overcast, diffused daylight, soft shadows | sky as softbox | The safest luxury default |
| window light, north light, side light from a window | one large source from one side | Add "single light source" to prevent extra shadows |
| practical lamp, warm lamp light, candlelight | low-key with warm pools | Models over-warm; specify kelvin in words ("warm 3,000 K lamp") |
| chiaroscuro, low key, 8:1 contrast | hard key, no fill | Combine with "deep shadow detail" to avoid crushed blacks |
| studio strobe, white seamless, beauty dish | Avedon white | Say "even white background, no vignette" |
| clamshell beauty lighting, catchlights | 2.6 | Works in most 2025 to 2026 models |
| large softbox reflection on the bottle, gradient highlight | product gloss control | Specify "one highlight" or models add several |

What the models get wrong, and what to check in every generated frame before it goes to a client: impossible sources (a shadow that implies a sun from the left while a window glows on the right), double or triple shadows under one apparent source, catchlights in two different positions in the two eyes, specular highlights on matte fabric, a rim light with no visible or plausible source, light on the face warmer than the light on the hands, and haze or god rays by default. Fix in the prompt by stating one source and its direction and quality in sequence ("a single large soft window light from camera left, no other sources, soft shadows falling to the right"), by naming the ratio in words ("gentle contrast, shadows two stops darker"), and by rejecting frames with mixed shadow directions rather than retouching them. A generated reference is a lighting diagram for the real shoot, never a substitute for the physics on the day (design-taste, section 3: AI renders with impossible light are a cheap tell).

## 8. Lighting for stills and for motion

- Continuous light (LED, HMI, tungsten) is what you see is what you get and the only option for motion. Strobe (studio flash: Profoto D2 and Pro-11, Broncolor Siros and Scoro, Godox AD1200Pro) delivers far more light in a 1/1,000 to 1/10,000 s burst, freezes motion, and lets stills shoot at ISO 100 and f/11 for depth of field on product; it is invisible to video.
- Flash sync: a focal-plane shutter syncs with flash up to about 1/200 to 1/250 s; above that, high-speed sync (HSS) pulses the flash through the exposure at a cost of about two stops of power, useful for overpowering sun at f/2 for a fashion portrait. Leaf-shutter cameras (Hasselblad, Phase One, Fuji GFX leaf lenses) sync at any speed and are why medium format still owns high-end fashion in daylight with flash.
- Modelling lamps (the continuous bulb inside a strobe head, now LED on Profoto and Broncolor) show where the light falls but lie about ratios; meter the flash.
- Hybrid shoots (a campaign that needs stills and motion from one set in one day, the norm for Mask360 clients): light continuous for motion with COBs through the same modifiers the stills photographer will use, then for stills either accept the continuous light (modern mirrorless at ISO 800 to 1600 handles a 600 W COB through a 120 cm octa at f/4) or swap heads for strobes in the same modifiers. Keep the colour temperature identical (strobes are about 5,500 to 5,600 K; set the COBs to 5,600 K) so the two deliverables grade together. The classic failure is a video crew on 3,200 K practical-led light and a stills crew on strobe, giving two campaigns in two colours.

## 9. Sound fundamentals

### 9.1 Frequency, the audible range, the map of a mix

Frequency is cycles per second, in hertz (Hz); the healthy young ear hears about 20 Hz to 20 kHz, and most adults lose the top from 16 kHz down with age. Phone speakers reproduce roughly 300 Hz to 10 kHz, which is why a brand film that depends on sub-bass has no sub-bass on Instagram. The working map of a mix, with the instruments and problems that live in each band:

| Band | Range | What lives here | Common problem |
|---|---|---|---|
| Sub | 20 to 60 Hz | Sub-bass drops, cinema rumble, the "hit" in a trailer | Inaudible on phones and laptops; eats headroom; high-pass everything else |
| Bass | 60 to 250 Hz | Kick, bass, the chest of a male voice (100 to 150 Hz), room boom | Boom from close lav or a small room around 120 to 200 Hz |
| Low mids | 250 to 500 Hz | Warmth and body; muddiness | "Boxy" dialogue around 300 to 400 Hz |
| Mids | 500 Hz to 2 kHz | Vowels, the core of speech and most instruments | "Honky" or nasal around 1 kHz |
| Upper mids and presence | 2 to 6 kHz | Consonants, intelligibility, bite; the ear's most sensitive region (2 to 5 kHz) | Harsh, fatiguing; sibilance 5 to 8 kHz |
| Brilliance and air | 6 to 20 kHz | Breath, shimmer, cymbals, "expensive" sheen | Hiss; a lav under clothing loses it all |

Reason the map matters to a creative director: an edit that feels "muddy" or "cheap" is nearly always a low-mid build-up from voice plus music plus room all occupying 200 to 500 Hz; the fix is subtractive EQ, and asking for it by band is faster than asking for "cleaner".

### 9.2 Decibels: dBFS, dB SPL, dBu, and dynamic range

The decibel is a ratio on a logarithmic scale; it needs a reference to mean anything. dB SPL (sound pressure level) is acoustic loudness against the threshold of hearing: a quiet room about 30 dB SPL, conversation about 60, a cinema reference mix peaks at 105 per channel, pain near 120. dBu is an analogue line level against 0.775 V (professional line level is plus 4 dBu). dBFS (decibels relative to full scale) is digital: 0 dBFS is the largest value the file can hold and everything is negative; clip above 0 and the waveform is flat-topped and unrecoverable (except in 32-bit float, 10.7). A rule set in these units: record dialogue peaking around minus 12 to minus 6 dBFS with an average near minus 18 to minus 20, mix dialogue around minus 23 LUFS for broadcast or minus 14 for streaming (13.4), and never let the true peak pass minus 1 dBTP. Dynamic range is the span between the noise floor and the loudest clean level: 24-bit audio holds about 144 dB in theory, a good preamp and mic chain about 110 to 120, a phone video about 60.

### 9.3 Sample rate and bit depth

Sample rate is how many times per second the signal is measured; by Nyquist, it captures frequencies up to half the rate. 48 kHz is the video standard (every camera, every broadcaster, every NLE assumes it); 44.1 kHz is the music CD legacy and still the delivery for some music platforms; 96 kHz is for sound design where you will pitch recordings down (a 96 kHz recording of a door creak pitched down an octave still has content to 24 kHz). Bit depth is the resolution of each sample: 16-bit gives about 96 dB of range, 24-bit about 144 dB, so 24-bit lets you record conservatively (peaks at minus 12) with no audible noise penalty. Deliver 48 kHz 24-bit WAV for all video; convert music masters to 48 kHz once, with a quality resampler, never let the NLE do it on the fly.

### 9.4 Mono, stereo, surround, Atmos

Mono is one channel; every phone and most laptops play effectively mono, and dialogue and VO are always mono in the centre. Stereo is two channels with placement by level and timing. 5.1 is six channels (left, right, centre, LFE (low frequency effects, the ".1"), left surround, right surround), the broadcast and streaming surround standard; 7.1 adds side channels. Dolby Atmos is a bed (usually 7.1.2 or 7.1.4, the last number being overhead channels) plus up to 118 objects with position metadata, rendered to whatever speakers the listener has; delivered as an ADM BWF (a WAV with Audio Definition Model metadata). Brand work is delivered stereo almost always; an Atmos mix for a cinema spot or a Netflix-adjacent branded film is a specialist booking (section 16). Mono compatibility: check every mix with the channels summed, because a wide stereo effect with phase cancellation disappears on a phone speaker.

### 9.5 Phase and polarity

Two microphones picking up the same source at different distances capture it with a time offset; summed, some frequencies cancel (comb filtering: a hollow, swirly tone). The 3:1 rule: keep the second mic at least three times as far from the source as the first. Polarity is the plus or minus sign of the waveform; a reversed cable or a lav and boom recorded out of polarity thin out the voice when mixed. Fix in post with a polarity flip and a few samples of alignment (Resolve, Pro Tools and RX all do this); better to check on set with headphones by muting and unmuting the second mic.

## 10. Capture on set

### 10.1 Microphones

| Type | Examples | Pattern and character | Use |
|---|---|---|---|
| Shotgun (interference tube) | Sennheiser MKH 416 (the broadcast and film standard for decades, an RF condenser that shrugs off humidity, a point in Mumbai monsoon and Gulf summers), MKH 8060, Sanken CS-M1, Deity S-Mic 3, Rode NTG5 | Supercardioid lobe, rejects sides, reaches 0.6 to 1.2 m | Exteriors, reach, noisy rooms |
| Short hypercardioid and cardioid | Schoeps CMC 6 with MK 41, Sennheiser MKH 50, Audio-Technica AT4053b | Tight but without a tube's reflections | Interiors with hard walls (hotel rooms, marble lobbies), where a shotgun sounds phasey |
| Lavalier, wired | Sanken COS-11D (the industry lav, 4 mm), DPA 4060 (5.4 mm omni, 134 dB max SPL; 4061 is 10 dB less sensitive for loud sources; 4071 adds a 5 dB presence boost at 4 to 6 kHz), DPA 6060 (3 mm) | Omni, close, consistent | Interviews, hidden under clothing |
| Lavalier, wireless | Sennheiser EW-DP and EW-DX (UHF, broadcast grade), Lectrosonics (the high end), Rode Wireless Pro (2.4 GHz, 260 m line of sight, 32-bit float on-board recording with 32 GB per transmitter, timecode, two Lavalier II mics in the kit), DJI Mic 3 (2.4 GHz, dual-file 32-bit float internal recording, up to four transmitters and eight receivers, timecode) | Convenience and mobility | Walk and talk, run and gun, creator formats |
| Stereo pairs | ORTF pair of small-diaphragm cardioids (Schoeps or Neumann KM 184 at 17 cm, 110 degrees), Sennheiser MKH 418S or Rode NT-SF1 for mid-side | Width, room | Ambience beds, events, music |
| Ambisonic | Sennheiser Ambeo VR, Rode NT-SF1, Zoom H3-VR | Full-sphere first-order recording, decoded to any format | 360 video, VR, future-proof ambience |
| Handheld and hypercardioid vocal | Shure SM58, SM7B, Electro-Voice RE20 | Robust, proximity bass | VO in the field, podcast, stage |

Frequency bands in the UAE and India for UHF wireless: both regulate the spectrum (the TRA in the UAE and WPC in India), and some broadcast frequencies need a licence; 2.4 GHz systems are licence-free and the practical choice for small crews, with the trade that they drop out in crowded venues (an event with 500 phones). Carry wired lavs as backup.

### 10.2 Boom technique

The boom operator holds the mic on a pole above the frame line, 30 to 60 cm from the mouth, pointed at the chin, moving with the speaker and anticipating the lines; overhead sounds natural because the voice projects up and out and the mic sees the room from above. From below (the "underslung" boom) works for wide shots where the frame line is low, with more floor reflection. The gaffer and the boom op negotiate every setup, because the boom casts a shadow and the top light hits the mic; the rule is that the boom gets a flag before the lamp gets another modifier. A shock-mount cradle and a blimp with a fur cover (Rycote Cyclone or Modular Windshield, the "dead cat") are standard outdoors; indoors a foam windscreen is enough.

### 10.3 Lavalier technique

Mount under the second button line of a shirt or at the sternum under a dress, 15 to 25 cm from the mouth, with the capsule in a Rycote Undercover or Stickies, a Hide-a-Mic or a Bubblebee Lav Concealer so fabric cannot touch it; tape a strain-relief loop. Silk and synthetic fabrics rustle, cotton is quiet; in a Gulf context, a kandura or abaya gives easy concealment at the collar, and a saree pleat or blouse edge works for Indian wear. Hair and jewellery are the usual noise sources (a necklace tapping the capsule); ask the stylist. Record the boom as well whenever one can be placed; the boom is the better sound and the lav is the insurance.

### 10.4 Recorders

- Sound Devices MixPre II series: MixPre-3 II (3 inputs, 5 tracks), MixPre-6 II (6 inputs, 8 tracks), MixPre-10 II (10 inputs, 12 tracks); 32-bit float, internal timecode, a 10 second pre-roll buffer, adjustable limiters, and Kashmir preamps at about minus 130 dBu equivalent input noise. The 833 and 888 are the feature-film mixers.
- Zoom F3 (two XLR inputs, 32-bit float with dual AD converters, 192 kHz, 242 g, timecode via the TCA-1 adaptor or an UltraSync Blue over the BTA-1), F6 (6 inputs, 14 tracks), F8n Pro (8 inputs, 10 tracks, 32-bit float to 192 kHz, preamps under minus 127 dBu EIN). The F3 is the two-person crew's answer to a boom and a lav.
- Camera audio on cinema bodies is usable (ARRI, Sony Venice and FX series have decent preamps) and on mirrorless cameras is a scratch track only.

### 10.5 Timecode, jam sync, the slate and the clap

Timecode is a running clock (hours, minutes, seconds, frames) written into every recording so that the edit can line audio and picture up by number. A master clock (Tentacle Sync E, Deity TC-1, Timecode Systems UltraSync One, Ambient Lockit) is set, then each camera and recorder is "jammed" from it (jam sync: the device copies the time and then free-runs on its own crystal; re-jam every four to six hours because crystals drift about a frame a day). Frame rate of the timecode must match the project: 25 fps for the PAL-heritage markets (India, UAE, Europe), 23.976 or 24 for cinema and most streaming, 29.97 drop-frame only for North American broadcast. The slate (clapperboard; a smart slate such as the Denecke TS-C shows the running timecode in LEDs) is the backup and the labelling system: scene, shot, take, roll, date, day or night, interior or exterior; the clap gives a single sharp transient on both audio and picture for a manual sync when timecode fails. Say the slate out loud ("scene 12 apple, take 3"), clap once, cleanly, in frame, in focus. Tail slate (upside down, clapped at the end) when the head of the take cannot be slated.

### 10.6 Room tone, wild lines, wild sound, ambience, specifics

- Room tone: 30 seconds minimum of the room with everyone silent, in every location and every setup where the furniture, the lamps or the air conditioning changed; the dialogue editor fills every cut and every removed breath with it. The one thing crews skip and the one thing that makes a cut audible. Call it as "room tone, 30 seconds, nobody move", and record it with the same mic in the same position.
- Wild lines: lines re-recorded on set without the camera rolling, immediately after the take, to replace a line spoiled by a plane or a clatter; closer and cleaner than ADR because the room and the performance are the same.
- Wild sound: specific sounds recorded on set without picture, close, clean, several takes (the door of the hotel room, the espresso machine, the gravel, the sea from this balcony, the wrist-flick of a watch clasp). This is the foley references list (11.3): record the real thing while you are in the real place.
- Ambience: two to five minutes of stereo (ORTF or mid-side) ambience per location, at the hour the scene is set: a Jaipur courtyard at dawn has birds and pigeons and a distant temple bell; a Dubai Marina balcony at night has traffic and air conditioning. Library ambience of "Indian street" is Delhi 2009 and sounds like it.

### 10.7 Wind, interior acoustics, monitoring, levels, 32-bit float

- Wind protection: foam for interiors and light breezes, a furry windjammer over a blimp for exteriors; a lav gets a fur Overcover. Wind noise is low-frequency flutter the mic capsule cannot survive; a high-pass filter at 80 to 120 Hz on the recorder helps, but there is no post fix for a capsule overloaded by wind.
- Treating a hotel room: hard floors, glass and parallel walls give flutter echo and a boxy 300 Hz ring; close the curtains, pull the duvet off the bed and hang it on a C-stand behind the subject, put the sofa cushions on the floor on the camera side, turn the air conditioning off for each take (the number one noise source in India and the Gulf; record it in the room tone and turn it back on between takes), and keep the mic close. Sound blankets (furniture pads) on two stands behind the camera are the kit answer.
- Monitoring: closed-back headphones on the recordist and a feed to the director; Sony MDR-7506 and Sennheiser HD 25 are the standards because they are flat enough to hear the problems and sealed enough to hear them over the room. Listen for the handling noise, the hum and the rustle; a meter cannot.
- Levels: with 24-bit fixed-point recording set the gain so dialogue peaks sit around minus 12 to minus 6 dBFS, with an average near minus 18 to minus 20; leave the headroom, because a shout from a presenter at minus 2 clips the next take.
- 32-bit float: the recorder stores each sample as a floating-point number with a huge range, so a signal that would clip in 24-bit is held above 0 dBFS and can be pulled down in post without distortion, and a quiet recording can be raised without the noise floor following. It removes the gain-setting risk for small crews. It does not fix a mic too far from the mouth, a bad room or a wind-blown capsule, and the NLE or DAW must import it as float (Premiere, Resolve, Pro Tools and Reaper all do as of 2026).

## 11. Post sound: dialogue, foley, ambience, design

### 11.1 Dialogue editing

The dialogue editor's sequence: choose the best mic per line (boom first, lav where the boom is phasey or distant), conform to picture, split into tracks by character and by mic, fill every gap with room tone, fade every edit (2 to 10 frames), remove clicks and mouth noise, soften breaths rather than remove them (a breathless voice reads as synthetic), match the tonal colour of lav and boom with EQ, and then and only then run noise reduction. Noise reduction tools as of October 2026: iZotope RX 12 (version 12.0.0 released 28 April 2026, 12.1.0 on 15 October 2026; Advanced, Standard and Elements tiers; the rebuilt Dialogue Isolate separates speech from background with a neural network, Spectral De-noise learns a noise profile, De-reverb, Mouth De-click, Breath Control, Ambience Match, Scene Rebalance and the Stems View that splits a mix into dialogue, music and effects) and Adobe Enhance Speech in Premiere Pro and Audition 2026 (one slider in the Essential Sound panel on a Dialogue clip; rebuilds the voice as if recorded in a booth). Their limits: Enhance Speech at full strength produces a dry, processed, slightly synthetic voice with the room removed entirely, which is wrong for any scene where the location is the point (a hotel film) and right for a founder VO recorded in a car; use the mix slider at 30 to 60 percent. Dialogue Isolate at heavy settings leaves "underwater" artefacts on sibilants and in pauses; apply it at 40 to 70 percent, keep a little of the original, and compare with the bypass at mix level, because what sounds clean in solo often sounds dead in context. Neither tool fixes a clipped or wind-destroyed recording.

### 11.2 ADR

ADR (automated dialogue replacement, originally "looping") re-records lines in a studio to picture. Brand films rarely need it: a founder re-reading a line in a booth never matches their on-set performance, and the audience hears it. Prefer wild lines (10.6) on the day, then a VO rewrite that covers the shot, then ADR as the last resort, matched with the room's impulse response (Altiverb or a convolution reverb) and the on-set mic.

### 11.3 Foley

Foley is sound performed to picture in a studio by a foley artist with props: footsteps, cloth, hands on objects. What to foley in a brand film: the sounds that carry the material story of the product and the place, because production sound almost never captures them cleanly. A list for luxury: fabric (silk, cashmere, linen each rustle differently), footsteps on marble and on teak and on gravel, a glass set on stone, a cork or a cap, a clasp or a zip, a page turn, a door that closes with weight (a Bentley thunk and a hotel door are both brand sounds), water on skin, the hiss of an espresso machine, cutlery on porcelain. These are recorded close with a small-diaphragm condenser, layered two or three deep (a step is heel, sole and cloth), and mixed at a level the audience feels rather than notices. Foley studios exist in Mumbai (the film industry keeps several busy) and in Dubai Studio City; a day with an artist and a recordist covers a 90 second brand film with time to spare. Wild sound from the shoot (10.6) is the cheaper half of this; many brand films need no studio foley if the recordist did the list on the day.

### 11.4 Ambience beds

An ambience bed is a continuous background (the room, the city, the sea) that runs under a scene so that cuts between takes and camera angles do not change the world. Build it from the stereo ambience recorded on location (10.6), looped with crossfades at least 2 seconds long and no audible repeat within the scene length; add a second layer for specifics (a bird, a distant car) placed by hand where the picture suggests them; keep the bed 20 to 30 dB under dialogue; let it change at a scene cut with a short crossfade so the viewer feels the move from lobby to pool.

### 11.5 Sound design: whooshes, hits, risers, textures, subs, and restraint

The trailer vocabulary: a whoosh (air moving, used on camera moves and transitions), a hit (a low impact that marks a cut or a reveal), a riser (a rising tone or noise that builds tension to a cut), a texture (a continuous tonal or noise layer that colours a scene), a sub (a sub-bass drop or boom under a hit). All of it is easy to buy (Boom Library, Pro Sound Effects, Artlist and Epidemic sound effect catalogues) and easy to overuse. Restraint rules for the house:

- One hit per film, on the single most important reveal, or none. Every reveal with a hit reads as a car dealership advert.
- No whoosh on a cut unless something in the frame moves fast; whooshes on static product cuts are the 2015 YouTube tell.
- Risers only into a real change (a cut to black, a reveal), and never more than once in 30 seconds.
- Subs only on the cinema or OOH deliverable; on the social cut they are inaudible and steal headroom (9.1).
- Textures replace music, not accompany it; a room tone with a slight tonal drone under a slow hotel film is more expensive than a piano bed.

The Ben Burtt principle of grounding: Burtt (sound designer of Star Wars, 1977; E.T., 1982; WALL-E, 2008) built fantastical sounds from recordings of real things (the lightsaber from an idling projector motor and the hum of a broken television, Darth Vader's breath through a scuba regulator), because the ear believes a sound that has a physical origin and rejects a purely synthetic one. He also used absolute silence before the seismic charge in Attack of the Clones (2002) to make the blast feel louder. For brand sound this means: a "luxury" transition sound should be a recorded object (a silk sheet pulled over a table, a cabinet door) processed lightly, never a synthesiser preset; and the loudest moment in the film is made by the silence before it.

The contested position: trailer houses and performance-marketing editors argue that hits and risers lift retention on short-form and that restraint loses the first-second battle. The house follows restraint for brand film and allows one hit and a riser on performance cuts, tested against a silent-hook version (14.2), because the luxury audience punishes the trailer vocabulary and the data on the house's own cuts decides the rest.

## 12. Music: sourcing, licensing, editing to picture

### 12.1 Needle drop, library, composed

- Needle drop: an existing commercial recording (a known song). Costs the most, carries the most meaning, and needs two licences (12.2). For a luxury brand the needle drop is a statement about taste, which is why it is either exactly right (the one track that could only be this brand) or a cliché (the piano cover of a pop song). Budget: for a known track in India or the Gulf for a digital campaign, publishers and labels quote per use, per territory, per term; small catalogue tracks can be cleared for lakhs of rupees, global hits for crores or hundreds of thousands of dollars, and the quote is unknown until asked. Allow four to eight weeks.
- Library (production music): pre-cleared catalogues licensed by subscription or per track. Fast, cheap, and the music the audience has heard under a thousand other brands; the risk is sameness and the tell of a stock "inspiring corporate" bed. Use library for social volume, for scratch tracks, and for background beds where the sound design leads.
- Composed: a composer writes to picture. Costs between the two, takes two to four weeks, and gives the brand an owned asset that can become the sonic identity (section 15). The house default for a brand film with a budget above the social tier.

### 12.2 Licensing: sync, master, PRO, ISRC, India and the Gulf

Every recording carries two copyrights: the composition (melody and lyrics, owned by the songwriter or their publisher) and the master (the specific recording, owned by the label or the artist). A sync licence (synchronisation: the right to set the composition to picture) comes from the publisher; a master use licence comes from the label; both are needed for a needle drop, and Meta's music guidelines state that use of music for commercial or non-personal purposes is prohibited unless appropriate licences are obtained. Library platforms bundle both. A PRO (performing rights organisation) collects royalties for public performance and broadcast of compositions on behalf of writers and publishers; an ISRC (International Standard Recording Code) is the 12-character identifier of a recording used for tracking plays and content ID.

India: the Copyright Act, 1957 (as amended in 2012) governs. IPRS (the Indian Performing Right Society, founded 1969) is the registered copyright society for authors, composers and publishers of musical and literary works and collects performance and communication-to-the-public royalties; sync for a specific film or advert is cleared directly with the publisher or label, not through IPRS. PPL India handles public performance of sound recordings for its member labels. Section 31D statutory licensing covers broadcast, not advertising. Practical reading for Mask360: a Bollywood or regional hit for a campaign is cleared with the label (T-Series, Sony Music India, Saregama, Zee Music, Tips) and the publisher, on a quote; the 2012 amendment gave composers and lyricists an inalienable right to royalties, so the paperwork names them.

The Gulf: the UAE's Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights governs; collective management has been slower to form than in Europe, and public performance licensing is handled through the body authorised by the Ministry of Economy (ESMAA, the Emirates Music Rights Association, operates in this role as of 2026; verify the current arrangement and its tariff before a venue or event use). Sync for a campaign is cleared with the rights holders directly, as in India. Saudi Arabia's SAIP (Saudi Authority for Intellectual Property) regulates; needle drops for Riyadh campaigns go through the same label and publisher route.

### 12.3 Library platforms and their licence tiers (as of October 2026)

Verified from each platform's own pages where they load; prices change often and some tiers are quote-only, so confirm at purchase.

| Platform | Tiers as shown | What the tier covers | Notes for an agency |
|---|---|---|---|
| Artlist | AI Starter $19.99 monthly or $11.99 on annual; AI Core $39.99 or $23.99; AI Creator $69.99 or $41.67; Max, Max Business, Pro and Enterprise exist with details on request; third-party reviews in 2026 quote the Music and SFX Social plan at about $9.99 a month and Max at about $39.99 on annual billing | Every paid plan states "licence covers commercial use"; the Social tier covers one channel per platform; Pro and Max tiers are the ones that cover client work and paid distribution | Artlist's model licenses each downloaded asset for the content it went into in perpetuity, which is why it is the agency default: a client's film stays cleared after the subscription ends |
| Epidemic Sound | Creator, Pro, Enterprise (Business plan linked in the footer); prices were not rendered on the pricing page; third-party reviews quote Personal at about $9.99 and Commercial at about $49.99 a month | All plans: unlimited downloads, copyright protection, plugins; ad campaigns require Pro or Enterprise; public bodies and NGOs go to Enterprise; Enterprise has a 12-month minimum; monthly and yearly plans have no prorated refund | Coverage attaches to channels you register (Content ID whitelisting); confirm in writing which plan keeps client content cleared after cancellation, because the public page does not say |
| Musicbed | Individual (web and podcast, social up to 1 million followers), Business (adds client and brand work, clients up to 250 employees), Enterprise (clients of any size, broadcast, cinema and festival, VOD and OTT and CTV, games, celebrities over 1 million followers); prices behind "view pricing", third-party June 2026 checks quote Solo $16.99, Plus $49, Pro $99 a month | Tier by use, not by downloads | The catalogue is artist-led (real bands and composers) and sits a tier above the others in taste; the Enterprise tier is the only one that covers broadcast |
| Audio Network | Per-track licences priced by media, territory and term, plus subscriptions; the licensing page did not load in this session | | The broadcast-grade catalogue; licences for TV and cinema in India and the Gulf are quoted by territory |
| Universal Production Music, Extreme Music, APM | Per-use and blanket deals for broadcasters and large agencies | | For TV spots in India and the Gulf the media agency often already holds a blanket |

Rule: the licence must cover the channel (organic social, paid social, OOH screens, broadcast, cinema), the territory (worldwide for anything on the internet), the term (perpetual for a brand film), and the client (an agency plan that covers the agency's own channels does not cover the client's). File the licence PDF with the master in the project archive (16-editing-colour-grading-and-delivery.md, section 5).

### 12.4 Editing music to picture

- Tempo: find the BPM (beats per minute) of the track (Resolve and Premiere show it on analysis; or tap it); a 90 second film at 120 BPM has 180 beats and 45 four-beat bars, so the structure is planned in bars.
- Cutting on the beat lands the cut with the music and reads as energetic; cutting just off the beat (two to four frames after) reads as natural and human, because the eye and ear want the picture to follow the sound. Luxury cuts off the beat more than on; the hero reveal lands on the downbeat of a phrase.
- Phrases: popular and library music moves in 2, 4 and 8 bar phrases; a cut to a new scene on the first beat of an 8 bar phrase feels inevitable; a cut in the middle of a phrase feels wrong unless the picture explains it.
- Stems: request the track as stems (drums, bass, melody, pads, vocals as separate files); the editor can drop the drums for the first 20 seconds, keep a pad under dialogue, and bring the full mix on the reveal, which is editing the music to the film rather than the film to the music. Every library platform above delivers stems on the better tiers; composers deliver them by default.
- The breath before the music starts: open on room tone and a single real sound (a door, a wave, a footstep) for one to three seconds before the first note; the music then arrives as an event. Films that start on music at frame one feel like adverts because every advert does it.
- Ending: music resolves on or just before the end card, with the last sound in the film a real one (the clasp, the door) rather than a music tail.
- Edit the music at the sample level with crossfades on zero crossings; a music edit should be inaudible to the composer.

## 13. Mixing and loudness

### 13.1 Dialogue first, then the order of work

Mix order: dialogue and VO levelled and cleaned (11.1), then music under it, then ambience, then sound design and foley, then the master chain. Everything is judged against the voice: the listener forgives a thin bed and never forgives a word lost. Reference level: monitor at a fixed, calibrated playback (about 79 dB SPL for near-field at minus 20 dBFS pink noise in a small room, 85 for a cinema stage) and switch to a phone speaker and cheap earbuds before signing off, because that is where the work plays.

### 13.2 Gain staging, EQ, compression, limiting, ducking, reverb, panning

- Gain staging: keep every track's nominal level around minus 18 to minus 20 dBFS so plug-ins operate in their design range and the bus has headroom; raise the whole mix at the end with the limiter, never by pushing faders into the red.
- EQ: high-pass dialogue at 80 to 100 Hz (male) or 100 to 120 Hz (female); cut boxiness around 300 to 400 Hz by 2 to 4 dB with a medium Q; add presence at 3 to 5 kHz by 1 to 2 dB if a lav is dull; de-ess at 5 to 8 kHz. On music under dialogue, cut 2 to 3 dB around 1 to 4 kHz so the voice sits in the hole.
- Compression: on dialogue a ratio of 2:1 to 4:1, attack 10 to 30 ms, release 100 to 300 ms, 3 to 6 dB of gain reduction on peaks; two gentle stages beat one hard one. On music, little or none (the master is already compressed).
- Limiting: a true-peak limiter on the master set to a ceiling of minus 1 dBTP (minus 2 for Netflix-style specs and for anything that will be re-encoded hard), with the input gain set to reach the integrated target (13.4). A limiter working more than 3 to 4 dB on peaks is audible as pumping; fix the balance upstream.
- Ducking: an automatic level drop on the music keyed from the dialogue (a sidechain compressor or the auto-ducking in Premiere's Essential Sound and Resolve's Fairlight), 6 to 10 dB with a 200 to 500 ms release; then ride the fader by hand across the film because automatic ducking breathes.
- Reverb and space: a short room reverb (0.3 to 0.8 s) on ADR and studio VO to match the set; the dry studio voice over a location picture is the cheapest sound in brand film. Never reverb the production dialogue.
- Panning: dialogue, VO and the lead instrument in the centre; ambience and pads wide; a foley specific where its source is in frame. Check the mono sum.

### 13.3 Dynamic range and LRA

LRA (loudness range) is the statistical spread of short-term loudness across the programme, in LU (loudness units, equal to dB). A tight LRA (4 to 8 LU) suits social and mobile; a wider LRA (10 to 18) suits cinema and home theatre. Netflix recommends a full mix between 4 and 18 LRA with dialogue at 10 LRA or less. For Mask360 deliverables: social cuts at LRA 5 to 8, the master brand film at 8 to 12, the cinema version wider.

### 13.4 Loudness standards (as of October 2026)

Loudness is measured by the ITU-R BS.1770 algorithm (K-weighted, gated; current revision BS.1770-5) in LUFS (loudness units relative to full scale; LKFS is the same unit under the ITU name). Integrated loudness is the gated average of the whole programme; true peak (dBTP) is the inter-sample peak after oversampling, which is what clips a lossy encoder.

| Destination | Integrated target | True peak ceiling | Source and notes |
|---|---|---|---|
| EBU R 128 broadcast (Europe, and the reference most Indian and Gulf post houses follow for TV masters) | minus 23.0 LUFS, tolerance plus or minus 1.0 LU where the target is impractical (live), plus or minus 0.2 LU for QC | minus 1 dBTP in production; lower for some distribution codecs (EBU Tech 3344) | EBU R 128-2023 (version 5, November 2023); measurement per BS.1770 with the gate and EBU Tech 3341 |
| ATSC A/85 (US and ATSC-aligned broadcast) | minus 24 LKFS, plus or minus 2 dB (the historical A/85 value) | minus 2 dBTP in common practice | A/85:2026-07 approved 8 July 2026, with a Loudness and True Peak Quick Reference in Annex M; verify the values in that annex for any US delivery |
| Netflix | minus 27 LKFS dialogue-gated (measured with dialogue intelligence per BS.1770-1), plus or minus 2 LU, so minus 25 to minus 29 | minus 2 dB true peak for stereo and 5.1; Atmos overs informational | Netflix Sound Mix Specifications and Best Practices; LRA 4 to 18 full mix, dialogue 10 or less |
| YouTube | about minus 14 LUFS (the widely reported normalisation point; YouTube's upload help page specifies AAC-LC, 48 kHz, 384 kbps stereo and 512 kbps 5.1 and states no loudness target) | minus 1 dBTP | YouTube turns louder uploads down and does not raise quiet ones above their peak-limited level |
| Spotify | minus 14 LUFS (Normal); Loud setting minus 11, Quiet minus 19; recommends mastering at about minus 14 | minus 1 dBTP; below minus 2 if the master is louder than minus 14 | Spotify for Artists, loudness normalisation; albums normalised as a whole |
| Apple Music | about minus 16 LUFS under Sound Check (the figure practitioners use; Apple's Digital Masters document describes Sound Check without stating the number) | minus 1 dBTP | Apple Digital Masters guidance: 24-bit sources at native sample rate |
| Apple Podcasts | minus 16 LKFS, plus or minus 1 dB | minus 1 dB FS | Apple Podcasts audio requirements; BS.1770-5; apply loudness before encoding |
| Instagram and TikTok | no published spec; practical target minus 14 LUFS integrated with LRA 5 to 8; some editors deliver Reels at minus 12 to minus 10 so the hook survives the platform's own processing | minus 1 dBTP | Both platforms re-encode and apply their own normalisation; test by uploading a private post and comparing against a reference |
| Cinema (DCP) | mixed to a calibrated stage at 85 dB SPL reference, measured in Leq(m) for trailers (85 dB Leq(m) maximum under the TASA standard in the US) | | The cinema mix is a separate booking; never upload the cinema mix to social |

Reason the numbers matter: a brand film mastered at minus 8 LUFS for "impact" is turned down by every platform to minus 14, so it plays quieter than its competitor's minus 14 master whose peaks were never crushed, with less dynamic life. Mix to the target; the platform rewards it.

### 13.5 Loudness metering tools

Youlean Loudness Meter 2 (free, with film, TV and gaming presets covering ITU-R BS.1770-4, EBU R128 and ATSC A/85; Pro at $49, shown at $39 in October 2026, adds streaming presets for Spotify, YouTube, Apple Music and Netflix, a dynamics graph and export), Waves WLM Plus (a loudness meter with a true-peak limiter and a correction function, sold inside the Waves subscriptions), DaVinci Resolve 21 Fairlight's loudness meters (standard chosen from the options menu; blue in spec, yellow within tolerance, red over), Adobe Premiere Pro and Audition's Loudness Radar (the TC Electronic radar display, in the Essential Sound panel's auto-match and as an effect), iZotope Insight 2, and Nugen VisLM for broadcast QC. The house workflow: the editor checks integrated and true peak on the Resolve or Premiere meter at picture lock; the mixer delivers a loudness report (Youlean PDF or Nugen) with every master; the QC pass reads the report against the table above.

## 14. Sound for social

### 14.1 Sound off first

A large share of feed video is watched muted, in public, with captions; the exact share is a platform figure that changes by surface and is rarely published, so the house designs every social cut to work twice: once silent (captions, on-screen type, a picture that explains itself; see 26-platform-and-format-specs-2026.md for safe areas and caption specs) and once with sound. The test is to watch the cut muted on a phone before the sound pass begins. Burned-in captions in the brand typeface, sentence case, two lines maximum, placed above the platform UI zone.

### 14.2 The hook sound in the first second

The first second decides the swipe. A sound hook is a single recognisable real sound (a clasp, a pour, a heel on marble, a door) or a voice saying something specific, placed at frame one, before the music. The trailer alternative (a riser into a hit at one second) works on performance cuts and reads cheap on brand; test both. Keep the first second's audio at the mix's loudest level (short-term loudness near the integrated target plus 2 LU) because the platform's own normalisation acts on the whole file and a quiet start sounds like nothing.

### 14.3 Trending audio and licensing risk for brands

Instagram and TikTok license popular music for personal and creator accounts to use in Reels and TikToks; business accounts (Instagram professional accounts set to Business, and TikTok Business accounts) are limited to a commercially cleared library (the Meta Sound Collection and TikTok's Commercial Music Library). A trending track that is greyed out on a business account is greyed out because the licence does not cover commercial use, and posting it another way (a creator account, a screen recording, an edit with the track baked in) breaches the platform's music guidelines and the rights holder's licence. Consequences range from muting and removal to legal claims; German law firms have sent warning letters to commercial users demanding payment for unlicensed Reels music. Paid promotion of a post with unlicensed music is the highest risk, because it is advertising. House rule: brand accounts use the commercial library, licensed library music (12.3), original audio, or a needle drop cleared in writing; influencer partners post trending audio on their own creator accounts under their own agreements, and the brand reposts only with the licence confirmed.

### 14.4 Original audio, VO styles, the silence move

- Original audio: a brand's own sound (a composed theme, a recorded VO, a sound logo) that other accounts can reuse; it is attribution and reach in one, and it is the only audio the brand controls.
- VO styles in 2026: the low, close, unhurried voice recorded on a large-diaphragm condenser 10 cm from the mouth (the podcast voice), the founder's own voice recorded on a lav in their own space (authentic, light cleanup only), the whispered ASMR read for beauty and food, and the dry British or Gulf-accented English read for luxury property. The house avoids the "epic trailer" voice and the "smiling radio" voice; both are category tells. For bilingual markets, record Hindi and English (or Arabic and English) as separate full reads rather than one mixed read, and treat subtitle timing as part of the sound design.
- The silence move: a cut that drops all sound (music, ambience, everything) for 8 to 20 frames before a reveal or a line. On a feed it stops the thumb because the absence is more unusual than any hit; in a brand film it is the most expensive moment available at no cost. Use once per film.

## 15. Sonic branding

### 15.1 Sound logos

A sound logo (audio mnemonic, sonic logo) is a 1 to 5 second sound that identifies the brand without picture. The references, with verified dates:

- Intel: the five-note "bong" (D flat, D flat, G flat, D flat, A flat: a perfect octave followed by a four-note sequence) composed by Walter Werzowa of Musikvergnuegen in 1994 for the Pentium launch, modified in 1999, remade in 2004 and again after the 2020 rebrand; heard in 130 countries by its tenth anniversary.
- McDonald's: the five-note "ba da ba ba ba" of "I'm lovin' it", music by Tom Batoy and Franco Tortora (Mona Davis Music) with vocals by Justin Timberlake, created by Heye & Partner of Unterhaching, launched in Munich on 2 September 2003 as "ich liebe es" and in the United States on 29 September 2003. The longest-running global McDonald's campaign.
- Netflix: the "ta-dum" introduced in 2015; Todd Yellin (VP of Product) led the process, Lon Bender designed the sound from his wedding ring knocking on a cabinet plus a slowed anvil and muted hits, and Charlie Campagna's reversed guitar recording supplied the tonal "blossom"; Hans Zimmer later composed the extended theatrical version for Netflix films in cinemas.
- Mastercard: a sonic brand identity launched in 2019 with a core melody adapted across genres and regions (as reported at launch; the primary press page was not reachable in this session, so date and credits are to be verified before quoting to a client).
- India: Airtel's signature tune by A. R. Rahman, used for the Hello Tunes service launched in July 2004 and re-recorded for the November 2010 rebrand, described in press as among the most downloaded mobile music of its time; Britannia's four-note jingle and Titan's Mozart Symphony No. 25 theme are the other two every Indian consumer can hum. A Tata Group sonic identity was not found on tata.com's newsroom in October 2026; treat any claim of one as unverified.

### 15.2 Sonic identity systems

A system, not a jingle: the sound logo (3 seconds), a brand theme (60 to 90 seconds, with stems), functional sounds (app notification, payment confirmation, lift and lobby loops for hospitality), hold music, a VO voice and reading style, and the rules (where it plays, at what level, what it never does). Document it like a visual identity: a sonic guideline with audio files, a pitch and tempo reference, instrumentation, a prohibited list, and usage per touchpoint. For a hotel group the system includes the arrival sound in the lobby and the spa playlist curation rules; for a jeweller the sound of the box.

### 15.3 How to brief a composer

Give: the single idea of the brand in one sentence (design-taste, section 4); three reference tracks with what to take from each (the tempo of one, the instrumentation of another, the restraint of the third) and what to avoid; the picture, locked or near-locked, with timecode notes on the beats that matter (the reveal at 00:42, the silence at 01:10); durations needed (3 second logo, 6, 15, 30, 60, 90 second cuts, a 2 minute loop for events); deliverables (48 kHz 24-bit stems, alternate mixes without the melody for VO, a mono check); the territories and term of the licence (a buyout or a work-for-hire assignment of the master and composition, with the composer's PRO registration handled so that broadcast royalties flow correctly); two rounds of revisions and the dates. Pay for a demo if the composer is new to the house. The thing to leave out is adjectives ("premium, elegant, modern"), which describe nothing; the thing to put in is the reference and the reason.

### 15.4 The house position on sonic restraint

The expensive sound is quiet, specific and real: one instrument, one recorded object, a silence, a voice close to the ear. Full orchestral beds, trailer hits, the four-chord "inspirational" piano, and the EDM drop belong to categories that need to shout. Mask360's clients (hospitality, jewellery, fashion, property) are bought by people who do not need to be shouted at; the sound should behave like the staff of a good hotel. Practically: a sonic logo of two or three notes or a recorded object, a theme that can be played on one instrument, and sound design built from the material world of the brand (6.3 and 11.3). See design-taste, section 2, on slowness and material honesty: the audio equivalents are tempo under 100 BPM and acoustic sources.

## 16. Tools as of October 2026

| Tool | Version as of October 2026 | Role in the house | Notes |
|---|---|---|---|
| Avid Pro Tools | 2026.4 (released 28 April 2026); Intro is free, Artist about $9.99 a month, Studio and Ultimate above | The post house standard for mixing; what the Mumbai and Dubai mix stages run | Deliver sessions and AAF to the mixer; the house does not need to own it |
| Apple Logic Pro | 12.4 (29 September 2026) | Composer scratch and music editing on Mac | Stems and tempo maps for the edit |
| Reaper | 7.84 (28 October 2026) | The flexible, cheap DAW for sound design and batch processing | Scripting for loudness batch checks |
| Adobe Audition | 2026 | Dialogue cleanup and VO editing for Premiere-based editors | Enhance Speech, Loudness Radar, spectral display |
| DaVinci Resolve Fairlight | Resolve 21 | The edit-and-mix in one application; loudness meters per standard, Dolby Atmos in Studio | The house default for social and brand film mixes under 3 minutes |
| Adobe Premiere Pro | 2026 | Editing; Essential Sound panel for auto-ducking, Enhance Speech, loudness match | Export loudness checks via Loudness Radar |
| iZotope RX | 12 (12.0.0 on 28 April 2026, 12.1.0 on 15 October 2026); Elements, Standard, Advanced | Dialogue repair: Dialogue Isolate, Spectral De-noise, De-reverb, Mouth De-click, Breath Control, Stems View | Advanced for the mixer; Standard is enough for the editor |
| Waves | Subscription (Essential and Ultimate) and perpetual; WLM Plus for loudness | Meters, compressors, de-essers | |
| FabFilter | Pro-Q 4, Pro-L 2, Pro-C 2, Pro-DS, Pro-MB | The clean EQ, limiter, compressor and de-esser the house asks mixers to use on the dialogue bus | Pro-L 2 for true-peak limiting with platform presets |
| ElevenLabs | Free, Starter ($6 a month list; promotional $1), Creator ($22), Pro ($99), Scale ($299), Business ($990), Enterprise; commercial licence from Starter; instant voice cloning from Starter and professional cloning from Creator | Scratch VO for timing and client approval, multilingual drafts, temp reads in Hindi and Arabic | Never a final VO for a client without disclosure and consent (below) |
| Descript | Free; Hobbyist ($16 on annual or $24 monthly); Creator ($24 or $35); Business ($50 or $65); Studio Sound, filler-word removal, transcription in 25 languages, custom voice clones on paid plans | Text-based editing of interviews and podcasts; fast rough cuts of founder interviews | Studio Sound is Enhance Speech-class processing with the same limits |
| Sound Devices, Zoom, Tentacle Sync, Deity | 10.4 and 10.5 | Capture | |

The disclosure rule for synthetic voice: a synthetic or cloned voice in client-facing work is disclosed to the client in writing before use, is never used to imitate a real person without that person's written consent, and is labelled where the audience could reasonably believe a human spoke. The legal floor: the EU AI Act's Article 50 transparency obligations (marking of synthetic audio in a machine-readable form by providers; disclosure of deepfakes by deployers, with a lighter duty for evidently artistic or creative work) apply from 2 August 2026, and any campaign that reaches EU audiences falls under them; India's IT Rules and the UAE's 2021 copyright law and personality-rights practice make an unconsented voice clone a liability in both home markets. House practice: synthetic VO for scratch and for internal decks; for final VO, a human voice with a signed release, or a disclosed synthetic voice where the brief explicitly calls for it (an app's functional prompts, a multilingual utility video), labelled in the end card or the caption. See 22-ai-era-craft-and-generative-tools.md for the wider disclosure policy.

## 17. Reference tables

### 17.1 Kelvin by source

| Source | Kelvin |
|---|---|
| Candle | 1,800 to 1,850 |
| Sun at the horizon | about 1,850 to 2,500 |
| Domestic incandescent | 2,400 to 2,700 |
| Warm white LED (hotel practicals) | 2,700 to 3,000 |
| Sunrise and sunset, usable window | 3,000 to 3,500 |
| Studio tungsten | 3,200 |
| Early morning and late afternoon sun | 3,500 to 4,500 |
| Cool white fluorescent and office LED | 4,000 to 4,500 |
| Horizon daylight | 5,000 |
| Noon daylight, HMI, daylight LED, studio strobe | 5,500 to 6,000 (5,600 convention) |
| D65 display white | 6,504 |
| Overcast sky | 6,500 to 7,500 |
| Open shade, clear sky | 8,000 and above |
| LED and LCD screens in frame | 6,500 to 9,500 |

### 17.2 Lighting ratios to mood

| Ratio | Stops | Mood | Typical use |
|---|---|---|---|
| 1:1 | 0 | Flat, clinical | Packshots, swatches, compliance |
| 2:1 | 1 | Soft, open | Beauty, interviews, hospitality |
| 3:1 | about 1.6 | Classic, modelled | Founder films, editorial |
| 4:1 | 2 | Dramatic | Jewellery, watches, fragrance, cars |
| 8:1 | 3 | Noir | Fashion film, spirits, one hero frame |
| 16:1 plus | 4 plus | Silhouette, chiaroscuro | Teasers, title frames |

### 17.3 Diffusion and gel stops

| Material | Approximate loss |
|---|---|
| Lee 216 full white diffusion | about 1.5 stops (36 percent transmission) |
| Lee 250 half white | about 0.75 stop (60 percent) |
| Lee 251 quarter white | about 0.3 stop (80 percent) |
| Lee 252 eighth white, 452 sixteenth | under a quarter stop |
| Opal frost (Lee 410) | about half a stop (meter it) |
| Full grid cloth | about 2 stops (meter it) |
| Light grid cloth | about 1 stop |
| Quarter grid cloth | about half a stop |
| Artificial silk | about 1 stop |
| Unbleached muslin | about 1.5 to 2 stops |
| Full CTO (Lee 204) | about 0.85 stop (55 percent at daylight; plus 159 mired) |
| Full CTB (Lee 201) | about 1.5 stops (34 to 35 percent; minus 137 mired) |
| Single net | 1 stop |
| Double net | 2 stops |
| Lee 209 ND 0.3 | 1 stop |
| Lee 210 ND 0.6 | 2 stops |

### 17.4 Microphone choice by situation

| Situation | First choice | Backup |
|---|---|---|
| Interview, quiet interior | Hypercardioid on a boom (Schoeps MK 41, MKH 50) | Wired lav (COS-11D, DPA 4060) |
| Interview, reflective hotel room or marble lobby | Hypercardioid boom close, room treated (10.7) | Lav under clothing |
| Exterior, wind | Shotgun in a blimp with fur (MKH 416, MKH 8060) | Lav with fur Overcover |
| Walk and talk, run and gun | Wireless lav (EW-DP, Lectrosonics; Wireless Pro or DJI Mic 3 for small crews) | 32-bit float recorder on the subject |
| Event, stage | Feed from the PA desk plus a stereo pair in the room | Shotgun on camera for sync |
| Ambience | ORTF or mid-side pair | Ambisonic (Ambeo VR, NT-SF1) |
| VO, studio | Large-diaphragm condenser (Neumann U 87, TLM 103) or SM7B | |
| VO, in the field | SM7B or RE20 in a quiet car or a cupboard | Lav close, RX cleanup |
| Foley and specifics | Small-diaphragm condenser close (KM 184, MKH 8040) | Shotgun |

### 17.5 Loudness targets by platform

| Platform | Integrated | True peak | Status |
|---|---|---|---|
| EBU R 128 broadcast | minus 23 LUFS, plus or minus 1 LU (live), plus or minus 0.2 LU (QC) | minus 1 dBTP | Standard (R 128-2023) |
| ATSC A/85 broadcast | minus 24 LKFS, plus or minus 2 | minus 2 dBTP (practice) | Recommended practice (A/85:2026-07); verify Annex M |
| Netflix | minus 27 LKFS dialogue-gated, plus or minus 2 LU | minus 2 dB true peak | Spec |
| YouTube | about minus 14 LUFS | minus 1 dBTP | Reported normalisation; no published target |
| Spotify | minus 14 LUFS | minus 1 dBTP (minus 2 if louder) | Published |
| Apple Music | about minus 16 LUFS | minus 1 dBTP | Reported Sound Check level |
| Apple Podcasts | minus 16 LKFS, plus or minus 1 | minus 1 dB FS | Published |
| Instagram, TikTok | minus 14 LUFS practical (some deliver minus 12 to minus 10) | minus 1 dBTP | No published spec |
| Cinema trailer (TASA) | 85 dB Leq(m) maximum | | Standard |

### 17.6 Frequency ranges

| Band | Hz | Content |
|---|---|---|
| Sub | 20 to 60 | Rumble, drops, LFE |
| Bass | 60 to 250 | Kick, bass, chest of the voice, room boom |
| Low mids | 250 to 500 | Warmth, mud |
| Mids | 500 to 2,000 | Vowels, body of most instruments |
| Upper mids and presence | 2,000 to 6,000 | Consonants, intelligibility, harshness; sibilance 5,000 to 8,000 |
| Brilliance and air | 6,000 to 20,000 | Breath, shimmer, hiss |

## Terms introduced

- 32-bit float: a recording format storing each sample as a floating-point number so that signals above 0 dBFS are retained and can be reduced in post without clipping.
- ADM BWF: a WAV file carrying Audio Definition Model metadata, the delivery format for Dolby Atmos masters.
- ADR: automated dialogue replacement; re-recording lines in a studio to picture.
- Ambience bed: a continuous background sound layer that runs under a scene to unify cuts.
- Ambisonic: a full-sphere recording format decodable to any speaker layout.
- Black wrap: matte black aluminium foil moulded over lamps to control spill.
- Blue hour: the period after sunset and before sunrise when the sun is 4 to 6 degrees below the horizon and the sky is deep blue.
- Book light: a bounce followed by a diffusion frame in a V shape, giving a very large even soft source.
- Boom: a pole-mounted microphone held above the frame line.
- Broad and short lighting: keying the side of the face turned toward (broad) or away from (short) the camera.
- Butterfly (Paramount) lighting: key on the camera axis, high, producing a symmetrical shadow under the nose.
- Catchlight: the reflection of the light source in the eye.
- Chiaroscuro: strong light and dark contrast with much of the frame in shadow.
- Clamshell: two stacked soft sources on axis, one above and one below the lens.
- Colour temperature: the kelvin value of the black body whose colour matches a light source.
- Comb filtering: the hollow tone caused by summing two recordings of one source with a time offset.
- CRI: colour rendering index; fidelity of a source against eight test colours, out of 100; R9 is the saturated red sample.
- CTB and CTO: colour temperature blue and orange correction gels.
- dBFS: decibels relative to digital full scale; 0 is the maximum.
- dB SPL: sound pressure level in decibels against the threshold of hearing.
| dBTP: decibels true peak, the inter-sample peak after oversampling.
- dBu: analogue level in decibels against 0.775 V.
- Diffuse reflection: scattered return of light from a matte surface.
- Ducking: an automatic level reduction of music keyed from dialogue.
- Dulling spray: a matte aerosol applied to shiny surfaces to kill reflections.
- Dynamic range: the span between noise floor and the loudest clean level.
- Falloff: the rate at which illuminance drops with distance from a source.
- Flag, cutter, floppy: black panels that block light; a cutter is long and narrow; a floppy is a hinged double panel.
- Foley: sound performed to picture in a studio with props.
- Golden hour: the period when the sun is below about 6 degrees elevation, warm and low.
- Grid (egg crate): a fabric honeycomb on a soft source that limits spread.
- Hazer: a machine that produces a fine long-hanging mist to make light beams and depth visible.
- High key and low key: lighting with small shadow areas and bright grounds (high) or large shadow areas and dark grounds (low).
- HMI: a metal halide arc lamp with ballast, the brightest daylight source per watt.
- HSS: high-speed sync; pulsed flash that allows shutter speeds above the sync speed.
- Illuminance: light arriving on a surface, measured in lux.
- Inverse square law: illuminance falls with the square of distance from a point source.
- IPRS: the Indian Performing Right Society, India's registered copyright society for composers, authors and publishers of musical and literary works.
- ISRC: International Standard Recording Code, the 12-character identifier of a recording.
- Jam sync: copying timecode from a master clock into a device that then free-runs.
- Kicker: a light from behind at 45 degrees on the fill side that lands on cheek and jaw.
- Lavalier: a miniature microphone clipped or hidden on the body.
- Lighting ratio: key plus fill against fill, in the ASC definition.
- Loop lighting: key placed so the nose shadow forms a small loop on the cheek.
- LRA: loudness range, the spread of short-term loudness across a programme, in LU.
- LUFS and LKFS: loudness units relative to full scale, the ITU-R BS.1770 measure.
- Master use licence: permission from the owner of a recording to use that recording.
- Mired: micro reciprocal degrees, one million divided by kelvin; the unit of gel shift.
- Motivated light: light attributable to a visible or plausible source in the frame.
- Needle drop: use of an existing commercial recording.
- Negative fill: a black surface on the shadow side that absorbs ambient bounce.
- Net (scrim): a mesh that reduces light by one (single) or two (double) stops without changing quality.
- Nyquist: the rule that a sample rate captures frequencies up to half its value.
- Original audio: a brand's own sound that other accounts can reuse on a platform.
- Phase and polarity: the time relationship between two signals, and the sign of a waveform.
- Practical: a visible light source in the frame.
- PRO: performing rights organisation, which collects performance royalties for compositions.
- PWM: pulse width modulation, a dimming method that can flicker at high frame rates.
- Rembrandt lighting: key high and 45 degrees to the side, leaving a lit triangle under the far eye.
- Rim light: a source directly behind the subject that outlines it.
- Riser, hit, whoosh, sub, texture: trailer sound-design elements (a rising build, an impact, a passing air sound, a sub-bass boom, a continuous tonal layer).
- Room tone: a recording of a location's silence used to fill gaps in dialogue.
- Sample rate and bit depth: samples per second and bits per sample in digital audio.
- Slate: the clapperboard that labels and syncs a take; a smart slate displays timecode.
- Snoot, barn doors: tube and hinged leaves that shape a hard beam.
- Sonic logo: a 1 to 5 second sound that identifies a brand.
- Specular reflection: mirror-like return of the light source from a glossy surface.
- Split lighting: key at 90 degrees, lighting half the face.
- SSI: spectral similarity index, the Academy measure (SMPTE ST 2122) comparing a source's spectrum with a reference.
- Stems: a mix delivered as separate instrument or element groups.
- Sync licence: permission from the publisher to set a composition to picture.
- T-stop: a measured transmission stop on a cinema lens.
- Tenting: enclosing a product in white fabric with lamps outside for shadowless gradients.
- Timecode: the running clock written into recordings for synchronisation.
- TLCI: television lighting consistency index, EBU Tech 3355, modelling an idealised three-chip camera.
- TM-30: the IES rendering measure reporting fidelity (Rf) and gamut (Rg) against 99 samples.
- True-peak limiter: a limiter that holds inter-sample peaks under a ceiling.
- Wild lines and wild sound: lines or sounds recorded on set without the camera rolling.

## Sources and further reading

Books
- Blain Brown, Motion Picture and Video Lighting, 3rd edition, 2018.
- Blain Brown, Cinematography: Theory and Practice, 4th edition, 2022.
- Harry C. Box, Set Lighting Technician's Handbook, 5th edition, 2020.
- Fil Hunter, Steven Biver and Paul Fuqua, Light: Science and Magic, 5th edition, 2015.
- David Sonnenschein, Sound Design, 2001.
- Walter Murch, In the Blink of an Eye, 2nd edition, 2001.
- Ric Viers, The Sound Effects Bible, 2008.
- Jay Rose, Producing Great Sound for Film and Video, 4th edition, 2014.
- Bobby Owsinski, The Mixing Engineer's Handbook, 5th edition, 2022.
- Roger Deakins, Reflections: On Cinematography, 2025.
- Richard Avedon, In the American West, 1985.

Specifications and standards
- EBU R 128-2023, Loudness normalisation and permitted maximum level of audio signals, version 5, November 2023, https://tech.ebu.ch/docs/r/r128.pdf
- EBU Tech 3341, Loudness metering: EBU mode metering to supplement EBU R 128, https://tech.ebu.ch/publications/tech3341
- ITU-R BS.1770-5, Algorithms to measure audio programme loudness and true-peak audio level, 2023, https://www.itu.int/rec/R-REC-BS.1770
- ATSC A/85:2026-07, Techniques for Establishing and Maintaining Audio Loudness for Digital Television, approved 8 July 2026, https://www.atsc.org/atsc-documents/a85-techniques-for-establishing-and-maintaining-audio-loudness-for-digital-television/
- SMPTE ST 2122, Spectral Similarity Index (SSI); Academy overview at https://www.oscars.org/science-technology/projects/spectral-similarity-index-ssi
- EBU Tech 3355, Method for the assessment of the colorimetric properties of luminaires: the television lighting consistency index (TLCI), https://tech.ebu.ch/publications/tech3355
- IES TM-30, Method for Evaluating Light Source Color Rendition, https://www.ies.org/
- Netflix, Sound Mix Specifications and Best Practices (Partner Help Center; the article has moved behind the Netflix studio partner portal; summary at https://www.production-expert.com/production-expert-1/how-to-optimise-an-audio-mix-for-delivery-to-netflix)
- Apple, Apple Podcasts audio requirements, https://podcasters.apple.com/support/893-audio-requirements
- Apple, Apple Digital Masters (PDF), https://www.apple.com/apple-music/apple-digital-masters/docs/apple-digital-masters.pdf
- Spotify for Artists, Loudness normalization, https://support.spotify.com/us/artists/article/loudness-normalization/
- YouTube Help, Recommended upload encoding settings, https://support.google.com/youtube/answer/1722171
- Meta, Music Guidelines, https://www.facebook.com/legal/music_guidelines
- EU Artificial Intelligence Act, Article 50, Transparency obligations, https://artificialintelligenceact.eu/article/50/
- Government of India, The Noise Pollution (Regulation and Control) Rules, 2000.
- Government of India, The Copyright Act, 1957, as amended by the Copyright (Amendment) Act, 2012.
- UAE Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights.

Product and tool documentation
- Lee Filters, 204 Full C.T. Orange, https://leefilters.com/colour/204-full-c-t-orange/ and 201 Full C.T. Blue, https://leefilters.com/colour/201-full-c-t-blue/ ; diffusion range, https://leefilters.com/lighting/diffusion-packs/
- Aputure, Light Storm range, https://aputure.com/collections/light-storm
- Nanlux, Evoke 5000B coverage: Film and Digital Times, 12 July 2025, https://www.fdtimes.com/2025/07/12/nanlux-evoke-5000b/ ; CineD, https://www.cined.com/nanlux-evoke-5000b-introduced-5000w-led-spotlight-with-bi-color-and-green-magenta-control/
- ARRI, M18, https://www.arri.com/en/lighting/daylight/m-series/m18
- Quasar Science, Rainbow 2, https://www.quasarscience.com/products/rainbow-2
- Astera, Titan Tube, https://astera-led.com/products/titan-tube/
- Zoom, F3, https://zoomcorp.com/en/us/field-recorders/field-recorders/f3/
- Newsshooter, Sound Devices MixPre II series features 32-bit float recording, 2019, https://www.newsshooter.com/2019/08/30/sound-devices-mixpre-ii-series-features-32-bit-float-recording/
- Newsshooter, Aputure LS 1200d Pro now available, 2021, https://www.newsshooter.com/2021/12/15/aputure-ls-1200d-pro-led-light-now-available-to-order-for-3390-00-usd/
- RØDE, Wireless Pro, https://rode.com/en/microphones/wireless/wirelesspro
- DJI, Mic 3, https://www.dji.com/mic-3
- DPA, 4060 series, https://www.dpamicrophones.com/lavalier/4060-series-miniature-omnidirectional-microphone
- iZotope, RX Advanced release notes, https://www.izotope.com/pages/release-notes/rx-advanced
- Youlean, Loudness Meter, https://youlean.co/youlean-loudness-meter/
- Waves, WLM Plus, https://www.waves.com/plugins/wlm-loudness-meter
- Blackmagic Design, DaVinci Resolve Fairlight, https://www.blackmagicdesign.com/products/davinciresolve/fairlight
- Adobe, Enhance Speech in Premiere Pro, https://helpx.adobe.com/premiere-pro/using/enhance-speech.html
- ElevenLabs, Pricing, https://elevenlabs.io/pricing
- Descript, Pricing, https://www.descript.com/pricing
- Artlist, Pricing, https://artlist.io/pricing ; Epidemic Sound, Pricing, https://www.epidemicsound.com/pricing/ ; Musicbed, Pricing, https://www.musicbed.com/pricing
- Reaper, https://www.reaper.fm/

Articles, talks and podcasts
- Twenty Thousand Hertz, "Ta-dum: the sound of Netflix" (Lon Bender, Todd Yellin, Charlie Campagna), https://www.20k.org/episodes/netflix
- Team Deakins podcast (Roger and James Deakins), from April 2020, https://teamdeakins.libsyn.com/
- Ava Berkofsky, interview on lighting dark skin for Insecure, Mic, 2017.
- Amanda Petrusich, profile of Bradford Young, The New York Times, 2012.
- ProVideo Coalition, "Understanding lights' color spectrum accuracy", https://www.provideocoalition.com/understanding-lights-color-spectrum-accuracy/
- Wikipedia, Color temperature, https://en.wikipedia.org/wiki/Color_temperature ; Lighting ratio, https://en.wikipedia.org/wiki/Lighting_ratio ; Intel Inside (jingle section), https://en.wikipedia.org/wiki/Intel_Inside ; I'm Lovin' It, https://en.wikipedia.org/wiki/I%27m_Lovin%27_It ; Ben Burtt, https://en.wikipedia.org/wiki/Ben_Burtt ; Bradford Young, https://en.wikipedia.org/wiki/Bradford_Young ; Richard Avedon, https://en.wikipedia.org/wiki/Richard_Avedon ; Juergen Teller, https://en.wikipedia.org/wiki/Juergen_Teller
