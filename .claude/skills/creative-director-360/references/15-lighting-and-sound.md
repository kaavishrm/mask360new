# Lighting and sound

Lighting and sound craft for Claude acting as Mask360's creative director, as of October 2026. Taste (what reads expensive, the canon, the cheap tells, the house layer) lives in design-taste; this file is the craft and technical layer beneath it. Camera, lens, exposure tools and shot grammar sit in 14-video-preproduction-and-cinematography.md; grading and delivery in 16-editing-colour-grading-and-delivery.md; generative tools in 22-ai-era-craft-and-generative-tools.md; platform specs in 26-platform-and-format-specs-2026.md.

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
18. [Checklists for the creative director](#18-checklists-for-the-creative-director)

- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

## 1. Light physics for designers

### 1.1 Inverse square law and falloff

Illuminance (the light arriving on a surface, measured in lux) falls with the square of the distance from a point source. Double the distance, a quarter of the light, which is two stops. Move a lamp from 1 m to 1.4 m and you lose one stop; from 1 m to 2 m, two stops; from 1 m to 4 m, four stops. The practical consequences:

- Falloff is steep near the lamp and gentle far from it. A lamp 1 m from the near cheek and 1.5 m from the far cheek gives a 2.25:1 difference across one face (1.2 stops). The same lamp at 4 m and 4.5 m gives 1.27:1 (0.3 stops). This is why a close source models a face strongly and a distant source flattens it, independent of softness.
- Backgrounds go dark when the key is close to the subject and bright when it is far. To separate a model from a wall without a second lamp, bring the key in close. To light a room evenly for an interiors film, push the source far back or bounce it off a large surface.
- The law holds for point sources. A large soft source (a 2.4 by 2.4 m frame of diffusion, a window) behaves more like a plane source near it, with gentler falloff, which is part of why soft sources read as expensive: the tone across skin and product changes slowly.

Exposure in stops: a stop is a doubling or halving of light. On the lens, f/2.8 to f/4 is one stop; on the shutter, 1/50 to 1/100 is one stop; on the sensor, ISO 800 to ISO 1600 is one stop. T-stops (measured transmission) are what cinema lenses carry; f-stops are geometric (focal length divided by aperture diameter) and ignore glass losses, so a T2.8 lens passes exactly as much light as any other T2.8 lens. An incident meter (Sekonic L-858D, or the L-308X at the budget end) with the dome pointed at the camera reads the light falling on the subject and is the honest way to set ratios; a reflective reading off a dark fabric or a white marble lobby lies in opposite directions.

Sizing the key from the stop: the light an incident meter needs at the subject is lux = 340 × T² ÷ (ISO × t), where T is the T-stop and t the exposure time in seconds. The constant 340 is the calibration Sekonic uses for its dome; ISO 2720 allows about 240 to 400, so meters from different makers differ by up to a third of a stop. At 1/50 s and ISO 800, T2.8 needs about 170 lux (16 foot-candles; one foot-candle is 10.76 lux), T4 about 340, T5.6 about 670, T8 about 1,360 and T11 about 2,570; at ISO 3200, T2.8 needs about 42 lux. A jewellery macro at T8 to T11 therefore needs 8 to 16 times the light of a T2.8 interview, which is why 1,200 W heads appear on macro days (full table in 17.4). Use the sum to check a lamp list against the look before the recce (the location scouting visit): a key that must reach 1,360 lux through one stop of diffusion needs a lamp delivering about 2,700 lux bare at that distance.

### 1.2 Colour temperature

Colour temperature, in kelvin (K), is the temperature of a theoretical black body whose glow matches the colour of the source. Low numbers are warm (orange), high numbers are cool (blue). The scale is nonlinear, which is why gel makers work in mired (micro reciprocal degrees: one million divided by the kelvin value); a gel shifts a fixed number of mireds regardless of the starting temperature. CCT (correlated colour temperature) is the kelvin figure quoted for sources that are not black bodies, such as LEDs and discharge lamps: the temperature of the nearest black-body colour.

| Source | Approximate kelvin | Notes |
|---|---|---|
| Candle flame | 1,800 to 1,850 | Wikipedia's table lists 1,850; practitioners say 1,800 |
| Domestic incandescent bulb | 2,400 to 2,700 | Dimming a tungsten bulb warms it further |
| Warm white LED (hotel practicals) | 2,700 to 3,000 | Most hotel and restaurant fittings in India and the Gulf |
| Sunrise and sunset, sun on the horizon | 1,850 to 3,500 | Wikipedia lists 1,850 for the disc at the horizon; the useful window for faces is 3,000 to 3,500 |
| Studio tungsten (halogen) | 3,200 | The "tungsten" white balance preset; Lee 201 converts it to 5,700 |
| Early morning and late afternoon sun | 3,500 to 4,500 | |
| Cool white fluorescent and office LED | 4,000 to 4,500 | The office look; keep it out of luxury interiors |
| Horizon daylight (sun up, low) | 5,000 | |
| Noon daylight, the standard "daylight"; studio strobe | 5,500 to 6,000 | 5,600 is the video convention and the HMI (metal halide arc lamp, 5.5) and daylight LED calibration point |
| Overcast sky | 6,500 to 7,500 | D65 (the CIE standard daylight illuminant, 6,504 K) is the display standard white; an overcast exterior reads close to monitor white |
| Open shade under a clear sky | 8,000 and above | Lit by blue sky only; Wikipedia gives 15,000 to 27,000 for the clear poleward sky itself |
| LED and LCD screens | 6,500 to 9,500 | A phone or monitor in shot is a cool source unless it is set warm |

Sources: Wikipedia, Color temperature (table of typical values); Lee Filters product pages for the conversion claims.

Mix colour temperatures on purpose. A 3,200 K practical lamp in a 5,600 K daylight room reads as a warm pool, which is the look of every luxury hotel film shot at dusk. A 5,600 K LED panel keyed on a face in a 3,200 K room reads as a window, which is fine, or as a fluorescent office, which is the mistake. Decide the camera white balance first (the "neutral" of the frame), then place every other source warmer or cooler than it on purpose. See 04-colour.md for the display side of white points and 16-editing-colour-grading-and-delivery.md for white balance in the grade.

Colour has a second axis. A source's colour is its CCT plus an offset above or below the black-body curve, called Duv (positive is green, negative is magenta). ANSI C78.377 tolerates about plus or minus 0.006 for general lighting, which is visible on camera. Cheap LEDs and fluorescents sit green. Fixtures correct with a plus or minus green control (Aputure plus or minus 100 percent, the Nanlux Evoke 2400B plus or minus 80); gels come in eighth, quarter, half and full plus green and minus green (4.5); the camera's tint control corrects the whole frame at once. A spectrometer (Sekonic C-800) reads Duv on the recce, so the gaffer (the chief lighting technician) knows which practicals need minus green before the day.

### 1.3 Quality measures: CRI, TLCI, SSI, TM-30

- CRI (colour rendering index, Ra) scores how faithfully a source renders eight pastel test colours against a reference, out of 100. It was designed for human vision and the eight samples miss saturated red, so a lamp can score CRI 95 and still render skin greenish; always ask for R9 (the saturated red sample) alongside Ra.
- TLCI (television lighting consistency index, EBU Tech 3355) scores rendering through a model of an idealised three-chip broadcast camera. Better than CRI for video, but the Academy notes it does not account for the differing spectral sensitivities of single-chip cinema and stills sensors.
- SSI (spectral similarity index) was developed by the Academy of Motion Picture Arts and Sciences and published as SMPTE ST 2122. It compares the spectral power distribution of the test lamp with a reference (daylight, tungsten, a black body of chosen temperature, or a CIE illuminant) and gives a score up to 100 for a perfect match. It is not based on human vision or any particular camera, so two lamps with high SSI against the same reference will match on any sensor. This is the measure to ask for when mixing fixtures from different makers, or LEDs with HMI and tungsten.
- TM-30 (IES) reports Rf (fidelity) and Rg (gamut) against 99 samples; manufacturers now quote it alongside CRI.

Why it matters commercially: a jewellery macro lit by a lamp with SSI 74 against daylight will show a gold that cannot be matched in the grade to the client's swatch, because the information was never recorded. Nanlux quotes SSI 85 at 3,200 K and 74 at 5,600 K for the Evoke 5000B; Quasar Science quotes SSI up to 91 for the Rainbow 2. Numbers in the 70s are normal for white-phosphor LEDs at daylight; numbers in the 80s and 90s are the premium tier.

### 1.4 Hard and soft light; specular and diffuse

Hardness is set by the angular size of the source as seen from the subject. The sun is enormous and still hard because it subtends about half a degree. A 120 cm octabox (an eight-sided softbox) at 1 m is soft; the same octabox at 6 m is hard. Rule: source size divided by distance decides softness, so to soften a light you either enlarge it (bigger modifier, bounce it off a wall) or move it closer. Shadow edges tell the story: hard light gives a crisp edge (the Jacquemus noon look, the Avedon white studio with a bare head), soft light gives a gradient (beauty, skincare, hospitality interiors).

Specular reflection is the mirror-like return of the source from a glossy surface (a watch crystal, a lacquered box, the sweat on skin); diffuse reflection is the scattered return from matte surfaces. Product work is mostly the management of speculars: a gloss bottle shows the shape of the light source, so the source must be a shape worth seeing (a long narrow softbox makes a clean highlight stripe; a bare LED makes a hot dot). Polarisers on lens and light (cross-polarisation) remove specular glare and reveal diffuse colour; used fully they kill the life in metal and glass, so dial them partway.

### 1.5 Contrast ratio and lighting ratios

Lighting ratio is key plus fill against fill alone, in the ASC (American Society of Cinematographers) definition ((key + fill) : fill). Each stop of difference doubles the ratio:

| Ratio | Stop difference between lit and shadow side | Reads as | Where luxury uses it |
|---|---|---|---|
| 1:1 | 0 | Flat, clinical, catalogue | E-commerce packshots, skincare swatches, legal and medical |
| 2:1 | 1 | Soft modelling, open, friendly | Beauty, hospitality interiors, most talking heads |
| 3:1 | about 1.6 | Classic portrait | Founder films, editorial fashion |
| 4:1 | 2 | Dramatic, dimensional | Jewellery and watches, fragrance, automotive |
| 8:1 | 3 | Noir, severe | Fashion film, whisky, men's grooming, one hero frame in a campaign |
| 16:1 and beyond | 4 plus | Silhouette and chiaroscuro | Title cards, fragrance teasers, the single tension frame |

Luxury rarely lives at 1:1 (nothing to discover) or beyond 8:1 for long (the viewer tires, and dark shadow regions block on phones). The house default for faces is 2:1 to 3:1 with a hard edge somewhere in the frame; for product 4:1 with a graduated highlight. The reason behind the rule: a higher ratio adds depth and cost signals, a lower ratio adds clarity, and the phone screen in a bright room (where most of Mask360's work is watched) needs shadow detail held above about 5 percent luminance or it vanishes into the glass reflection.

### 1.6 Reading exposure on the monitor

The creative director at video village (the monitor station where director and client watch) judges light on a monitor, and a "too dark" note is only actionable when it says whether the information is on the sensor. The DIT (digital imaging technician) or the camera assistant sets up three tools (full treatment in 14-video-preproduction-and-cinematography.md, section 9):

- False colour: the monitor paints each brightness band a flat colour. ARRI's Rec 709 (the HD television colour and brightness standard) false colour, per ARRI's camera documentation: purple 0 to 2.5 percent (black clipped), blue 2.5 to 4 percent (just above clipping), green 38 to 42 percent (18 percent grey), pink 52 to 56 percent (one stop over grey, the band where light skin sits), yellow 97 to 99 percent (just below clipping), red 99 to 100 percent (white clipped). Medium and dark complexions sit from green down to about 2 stops under grey; forcing every face into pink is how darker skin gets lifted into grey (6.1).
- Waveform: a graph of brightness across the frame from 0 to 100 percent. Keep the highlights the client needs (a white shirt, a window, a diamond's table) under 95 to 100 percent, and the shadow detail a phone must show above 5 to 10 percent (1.5).
- Zebras: stripes over every area above a set level; set them at 95 percent as a clipping warning.

Ed Lachman's EL Zone System, built into SmallHD monitors, colours each stop above and below grey in its own hue, which is the fastest way to read a lighting ratio in stops off the monitor. The client's iPad and a Frame.io camera-to-cloud stream are uncalibrated and usually bright, so judge on the DIT's calibrated monitor and tell the client so before the first take.

## 2. Lighting setups

Each setup below is given as a diagram in words, with a starting fixture and distance for a seated subject in a 5 by 6 m room. Scale distances up with larger sources; the ratios stay.

### 2.1 Three point: key, fill, back

- Key: the dominant source, 45 degrees off the camera axis and 30 to 45 degrees above eye line. Start: Aputure LS 600d Pro through a 90 cm Light Dome II (or Light Dome III) at 1.5 m.
- Fill: opposite side, lower intensity, at or near camera height. Start: 120 by 120 cm white bounce at 1.5 m catching key spill, or a 1 by 1 ft LED panel through half grid cloth at a quarter of the key's level. Ratio set here (see 1.5).
- Back (hair or rim): behind the subject, high, opposite the key, aimed at hair and shoulders to separate them from the background. Start: Aputure LS 300d II with a 15 degree reflector plus quarter grid cloth, 2 m behind, flagged off the lens.

Three point lighting (key, fill and back light) is the grammar; the look is built on top of it. Corporate video is three point at 2:1 with all three visible; the luxury version removes the fill, replaces the back light with a window, and lets the key fall off.

### 2.2 Rim and kicker

A rim light outlines the subject from directly behind, giving a bright edge all round; a kicker comes from behind at 45 degrees on the fill side and lands on the cheek and jaw as a thin highlight. Kickers are the cheapest way to make skin look expensive on a dark background, because they add a specular edge the eye reads as sheen. Keep the kicker a stop or two over the key on the edge and flag it hard off the lens, or you get veiling flare (stray light scattered inside the lens, which lifts the blacks and lowers contrast) across the whole frame.

### 2.3 Motivated light and practicals

Motivated light is any source the audience can attribute to something in the world of the frame: a window, a lamp, a candle, a phone. The practical is the visible source itself (the lamp on the bedside table); the motivated lamp is the hidden fixture that does the real work from the same direction, matched in colour. The audience accepts a 600 W LED through a frame outside a window as "the window"; they reject a cool key from the ceiling in a candle-lit restaurant. For hotel and restaurant films, the plan is: inventory the practicals, decide which direction each room is "lit from", then hide the fixtures along those directions. Philips Hue and similar app-controlled bulbs let the gaffer dim and colour-match practicals from a phone, which saves the half hour per setup that swapping bulbs used to cost.

### 2.4 High key and low key

High key: fill close to key (1:1 to 2:1), bright backgrounds, few shadows. Reads clean, optimistic, clinical. Skincare, pharmacy, summer fashion.
Low key: little or no fill (4:1 and beyond), dark backgrounds, the subject carved from darkness. Reads serious, intimate, expensive. Fragrance, whisky, jewellery, menswear.

The house tends to low key with one bright accent (a window, a white garment) because a dark ground gives the product the whole frame. See design-taste, sections 1 (restraint) and 2 (space is money).

### 2.5 Portrait patterns: Rembrandt, loop, butterfly, split, broad and short

- Rembrandt: key high and 45 degrees to the side, so the nose shadow joins the cheek shadow and leaves a lit triangle under the far eye no wider than the eye and no longer than the nose. Dimensional, painterly; works on strong bone structure, unflattering on round faces.
- Loop: key lowered and moved towards camera until the nose shadow is a small loop on the cheek, separate from the cheek shadow. The default flattering pattern for most faces; talking heads, founders.
- Butterfly (Paramount): key directly on the camera axis, high, giving a small symmetrical shadow under the nose. Glamour, beauty, strong cheekbones. Add a reflector below the chin and it becomes clamshell (2.6).
- Split: key at 90 degrees, lighting exactly half the face. Severe, dramatic, graphic; one frame in a campaign.
- Broad: the lit side of the face is the side turned towards camera. Widens the face.
- Short: the lit side is the side turned away from camera. Narrows the face, adds depth, flatters almost everyone; the editorial default.

### 2.6 Clamshell for beauty

Two soft sources stacked on the camera axis: a large source above (an octabox, or a beauty dish: a shallow metal reflector with a centre deflector, crisper than a softbox) angled down at about 45 degrees, and a second soft source or a white reflector below angled up, with the lens shooting through the gap. Skin lights evenly from both directions, pores recede, catchlights appear top and bottom of the iris. Ratio top to bottom from 2:1 (soft glamour) to 1:1 (skincare macro). Start: 90 cm octa at 80 cm above the eye line and a 60 by 90 cm white card at the chest. The tell of a bad clamshell is a flat, waxy face with no jaw definition; recover by adding a hair light or a dark card at the sides (negative fill, 2.9).

### 2.7 Book light

A bounce and a diffusion in sequence: the lamp fires away from the subject into a large white or silver bounce (a 4 by 4 foot foam board or a 6 by 6 foot ultrabounce, a white fabric with one black side), and the bounced light then passes through a diffusion frame (Lee 216 or grid cloth) before reaching the subject. The result is a very large, very even, directionless soft source with no visible hot spot, which is why it is the standard "window at dusk" and the beauty key of choice when the budget allows. Cost: about three to four stops, so it needs a 600 W or larger COB (a chip-on-board LED head, 5.1). Build it with the bounce and the diffusion frame forming a V, open towards the subject, like a half-open book.

### 2.8 Window light and the north light tradition

Painters' studios in Europe faced north because north light at those latitudes is skylight only, with no direct sun: soft, cool, and constant through the day. A window with no direct sun on it is still the most expensive-looking key in any building. The geometry changes at Mask360's latitudes. Mumbai (19 degrees N), Goa (15.5 N), Chennai and Bengaluru lie south of the Tropic of Cancer (23.44 N): the noon sun passes through the zenith twice a year (around mid-May and late July for Mumbai) and stands to the north between those dates, so a north window takes direct midday sun in June and July, and at zenith noon shadows fall straight down under the subject. In Dubai (25.2 N), Jaipur and Delhi the noon sun stays to the south, but the June sun rises at about 64 degrees azimuth (east-north-east) and sets at about 296 degrees (west-north-west), so north-facing windows and façades catch low direct sun in the first and last hours of the day from late March to late September, most strongly around the June solstice. Confirm per date with Sun Seeker or PhotoPills (3.1) before calling any window "north light". Technique: put the subject 1 to 2 m from the window, at 45 to 90 degrees to it; control the ratio with a black flag or white bounce on the opposite side; never place the camera between subject and window unless silhouette is the idea. Mind that window light shifts about a stop and a few hundred kelvin across an hour; shoot the wide first, then coverage, and check the white balance between setups.

### 2.9 Negative fill, bounce, top light and under light

- Negative fill: a black flag, floppy or black fabric on the shadow side absorbs ambient bounce and deepens the ratio without adding a lamp. The single most used tool on luxury exteriors, where a white Dubai pavement or a Jaipur courtyard fills every shadow to 1.5:1 and flattens everything.
- Bounce: white gives soft neutral fill; silver gives a harder, brighter, cooler fill with a visible kick; gold warms, and is almost always a mistake on skin because it reads as sunbed (use a half-gold or a warm gel on a white bounce instead).
- Top light: a source directly above gives deep eye sockets and strong jaw shadows; harsh on faces, superb on product, food and textiles where texture is the point.
- Under light: a source from below inverts facial shadows and reads as horror or firelight; use it only as a candle or screen glow at low level.

### 2.10 Edge and silhouette

Backlight alone, at 8:1 or more against a bright background, draws the subject as a shape. For fashion silhouettes use a 2.4 by 2.4 m frame of 216 behind the model with two 600 W COBs behind it, and no front light; expose for the frame, let the body go to black, then open the shadows one stop in the grade if you want a hint of skin. The edge version adds a single kicker so one side of the outline carries a thin highlight.

### 2.11 Lighting for depth

Separation comes from any difference between subject and background: brightness (lit subject on dark ground, or the reverse), colour temperature (warm subject on cool ground), sharpness (shallow depth of field), and haze (atmosphere makes far things lighter and lower contrast). The cheapest depth is a background lamp with a gel set two or three hundred kelvin from the key, raked across a textured wall; the most expensive is a hazed room with a hard backlight. A frame with three distinct planes of brightness reads as cinema.

### 2.12 Continuity across shots and days

Light continuity is what lets a brand film shot by several DPs (directors of photography) cut together as one. Log, per setup: fixture, modifier, distance, height, dimmer level, CCT, camera white balance, ISO, aperture, shutter, ND (neutral density filtration, which cuts light without changing colour), and a wide reference still. For exteriors, note the time and the sun's azimuth and altitude (Sun Seeker and PhotoPills give both) so that a pickup two days later is scheduled for the same sun. For interiors lit by windows, decide early whether the window is "the key" or "a practical" and block all coverage within the hour it holds. The reverse shot is the usual failure: the key side flips, the ratio changes, and the edit shows two rooms.

Vertical-first and dual-ratio capture change the rig. A 9:16 frame is taller, so ceilings and floors enter it: rig keys higher, or overhead as a single soft space light (5.2), and move flags and stands out of the vertical safe area. When one camera protects both 16:9 and 9:16, put both frame lines on the monitor and check that lamp stands, the boom and the boom's shadow clear the taller crop (10.2; safe areas in 26-platform-and-format-specs-2026.md, section 5.6).

### 2.13 The Deakins single source philosophy

Roger Deakins (Oscars for Blade Runner 2049 and 1917; the Team Deakins podcast since April 2020; Reflections: On Cinematography, 2025) has argued on his forum and podcast for years for lighting from one big soft source, placed where the real light in the scene would come from, with everything else either bounce from that source or negative fill. His reasons: one source gives one set of shadows, which the eye reads as true; it keeps the crew fast; and it makes the director stage the action around the light. For Mask360 this is the default for hospitality and founder films: one large source (a 2.4 by 2.4 m book light or a window), a black side, and practicals for colour. Add a second source only when the frame has a visible reason for it.

The contested position: commercials DPs working with beauty and product often prefer multiple small controlled sources, because the client needs a specific highlight on a specific surface and a single source cannot be shaped that finely. Both are right in their field. The house follows Deakins for people and spaces and the multi-source school for product under 30 cm.

### 2.14 The interview and the founder film

The founder or expert interview is the format the agency shoots most, and the eyeline-side key is the single choice that separates a cinematic interview from a webinar.

- Geometry: seat the subject 2 to 3 m in front of the background, for separation and depth of field. The interviewer sits beside the A-camera lens so the eyeline passes 10 to 20 degrees off the lens axis.
- Key on the far side of the eyeline (short lighting, 2.5): the face turns into the light and the camera sees the modelled shadow side. Start with a 120 cm octabox with a 40 degree grid, or a 1.2 m book light (2.7), at 1 to 1.5 m and 30 degrees above eye line.
- Negative fill on the camera side (2.9), and a kicker from behind on the key side, one stop over the key (2.2).
- Background 1.5 to 2 stops under the key, with one practical and a raking light on texture (2.11).
- B-camera on the same side as A, 30 to 40 degrees round and tighter, so it also sees the shadow side. A B-camera on the fill side sees a flat face and the cut between the two jumps.
- Glasses: raise the key and swing it wider until the octabox's reflection leaves the lenses on the monitor, or lift the arms a few millimetres off the ears so the lenses tilt down. Anti-reflective coatings still show a green or purple ghost of the source.
- Direct-to-camera address: Errol Morris's Interrotron, or a two-way teleprompter that puts the interviewer's face over the lens, gives the audience eye contact without a stare at glass.
- Sound for the same setup: boom above the frame line plus a lav as insurance (10.2, 10.3), air conditioning off for each take (10.7).

### 2.15 Shadow patterns: cookies, branches and gobos

A cucoloris (cookie) is a cut-out panel between a hard source and the subject that throws a pattern; a branchaloris is a real branch held in the beam by a grip (the crew member who rigs stands, flags and frames); a gobo is a metal or glass pattern slide in a projection fixture (ETC Source Four, Aputure Spotlight Mount II with its 19, 26, 36 and 50 degree lens kits, the Dedolight projection attachment). Sharpness rule: the smaller and farther the source, and the closer the cookie to the subject, the crisper the pattern; a soft-edged pattern reads as sun through leaves, a razor edge reads as a projector. Uses in Mask360's categories: a palm shadow on lime plaster for a resort, morning blind stripes across a hotel bed, a jaali (a pierced stone lattice screen) on a Jaipur palace wall, a mashrabiya (a carved wooden lattice window screen) pattern across a Gulf majlis floor. Keep one pattern per frame and motivate it from a window direction (2.3).

### 2.16 Candle, diya and firelight

Diwali, wedding jewellery and iftar tables are seasonal staples, and flame light has its own technique.

- Real flames burn at about 1,800 to 1,900 K. Set the camera to about 3,200 to 3,800 K so flames render amber with some colour left in them; at a 5,600 K balance they go orange-red.
- Support faces with a low, warm soft source (about 2,000 to 2,400 K, or full CTO, the colour temperature orange gel (4.5), on a tungsten lamp) just below frame, from the flame's direction, so the motivation holds (2.3).
- Animate it: a slow, irregular flicker of 1 to 3 percent in intensity from the fixture's built-in candle or fire effect, or a dimmer worked by hand. A regular, strobe-like flicker reads fake.
- Use real diyas (clay oil lamps) and candles at several heights, with a stylist trimming wicks between takes so the flames stay the same size for continuity.
- Clear naked flame with the venue's fire officer in writing; heritage hotels and palaces often require a fire watch and extinguishers on set.
- Reference: Sudeep Chatterjee's candle- and diya-lit palace interiors for Sanjay Leela Bhansali's Bajirao Mastani (2015) and Padmaavat (2018), the look Indian clients cite by name.

## 3. Natural light

### 3.1 Golden hour, blue hour, magic hour planning

- Golden hour: the sun below about 6 degrees altitude, roughly the last hour before sunset and the first after sunrise; warm (3,000 to 3,500 K), low, long shadows, and about three stops dimmer than noon. In Mumbai or Dubai near the equator-side latitudes (19 and 25 degrees north) the sun drops fast, so "golden hour" is often 35 to 45 minutes; in a Jaipur winter it stretches a little.
- Blue hour: the sun 4 to 6 degrees below the horizon, after sunset and before sunrise; the sky is a soft deep blue at 9,000 K and above while practicals and windows glow warm. The hotel exterior and the lit pool are shot here, with interiors already lit to balance (6.7).
- Magic hour is the two together. Plan it with Sun Seeker (augmented-reality sun path on a phone) or PhotoPills (planner with sun, moon, Milky Way, and shadow length; the standard for stills shooters). Both show the sun's azimuth and altitude for any date and place, so the DP can promise "the sun will enter the courtyard arch at 17:12 on the 14th" before the recce.

### 3.2 Overcast as a softbox; harsh noon and how to use it

An overcast sky is a source the size of the sky: shadowless, cool (6,500 to 7,500 K), and flat. It flatters skin and kills depth; add negative fill on one side and a warm edge from a 600 W COB with half CTO to get a ratio back. Monsoon Mumbai and a Dubai winter haze give this light for free.

Harsh noon is a hard source from directly above: panda eyes, hot foreheads, black shadows. The two professional answers are to diffuse it (a 3.6 by 3.6 m frame of half-grid overhead, which takes a crew of three and a permit) or to use it as the idea. Jacquemus's campaigns and shows in the south of France built a brand on noon sun: hard shadows, saturated colour, squinting models, concrete and lavender. The move reads as confident because everyone else avoids it. Rules for using hard sun: shoot the shadows as graphic shapes, let faces turn into the light or away from it (never half), keep the lens flare out unless flare is the look, and bring a white bounce for the eyes.

### 3.3 Shade and open shade; window direction

Open shade (the subject in shadow, lit by the open sky) is the location portrait default: soft, directional from the sky side, cool. Correct the blue in camera (white balance 7,000 to 8,000 K) or let it sit against a warm background for contrast. Window direction for interiors: east windows give hard morning light and soft afternoons, west the reverse; south windows take hard light most of the day north of the Tropic of Cancer; north windows are soft all day at European latitudes but take low direct sun at the start and end of summer days in the Gulf and north India, and direct midday sun in June and July south of the Tropic (2.8). Recce with a compass app and the sun path tool, then write the room schedule from the windows and fit the call sheet to it.

### 3.4 Mixing natural and artificial

Match the artificial sources to the dominant daylight, or decide the daylight is the accent. A daylight-balanced LED (5,600 K) through a window frame adds to the real window with no colour shift. A tungsten or warm LED practical inside stays warm on purpose. For mixing a 3,200 K source into 5,600 K daylight, gel it with full CTB (colour temperature blue; Lee 201: a shift of minus 137 mired, converting 3,200 K to about 5,700 K; transmission 34 to 35 percent, which is about 1.5 stops lost). For pulling daylight down to tungsten, full CTO (Lee 204: plus 159 mired, 6,500 K to 3,200 K; transmission 55 percent at daylight, about 0.85 of a stop lost). Bi-colour LEDs do the conversion at the dial and at no stop cost, which is why they replaced gels for most work (5.1).

### 3.5 Shooting interiors by daylight with fill

The window is the key; the task is to lift the room so the window does not clip. Method: expose for the window at the top of the sensor's highlight range (on an ARRI Alexa 35 or Sony Venice 2 that is about four to five stops over mid grey; on a mirrorless camera less), then fill the interior with a large bounce or a book light at daylight balance until the room sits two to three stops under the window. Keep the fill motivated from the window side. If the window still clips, add ND gel to the glass (Lee 209 is 0.3 ND, one stop; 210 is 0.6 ND, two stops) or shoot the room at blue hour when the outside and inside balance naturally. For stills, bracket and blend (6.7).

### 3.6 Night exteriors and day for night

Hotel façades after blue hour, desert camps, rooftop bars and the pool at night are frequent Gulf and India deliverables.

- Moonlight key: one large, high source, a 1,200 W or larger head (STORM 1200x, LS 1200d Pro, an M18) through a 12 by 12 ft frame on a cherry picker, with the lamps at 4,300 to 5,600 K against a 3,200 K camera white balance so the light reads cool without blue gel.
- Wet down hard ground so it carries reflections of the practicals; a dry street at night reads as a dark car park.
- Start at the tail of blue hour (3.1) to keep a little level in the sky; a black sky gives the frame no top edge.
- Desert camps outside Dubai: place a silent generator 30 m or more downwind and behind a dune, and bury cable runs away from walkways.
- Day for night: shoot backlit, underexpose 1.5 to 2 stops, keep the sky out of frame, and grade cool (16-editing-colour-grading-and-delivery.md). It saves the night premium on crew and works best on wide shots with no practicals that should be lit.

## 4. Modifiers

### 4.1 Softboxes, octaboxes, umbrellas, lanterns

| Modifier | Sizes in common use | Character | Use |
|---|---|---|---|
| Softbox (rectangular) | 60 by 90 cm, 90 by 120 cm, 30 by 120 cm strip | Even, controllable, rectangular catchlight; strips give a long clean highlight | Product gloss, fashion full length, hair light |
| Octabox | 90, 120, 150 cm; Aputure Light Dome II is 90 cm, Light Dome III 90 cm, Light Dome 150 | Round catchlight that reads as an eye reflection, fast falloff at the edges | Beauty, talking heads, founder portraits |
| Umbrella (shoot-through or reflective) | 100 to 180 cm | Cheap, broad, spills everywhere | Fill, event and press shoots; keep it off the key on luxury work |
| Parabolic (Broncolor Para, Parabolix, Godox Parabolic) | 88 to 222 cm | Focusable: specular centre with soft edges, crisp skin texture | Fashion editorial, the "Para look" of the 2010s campaigns |
| China ball (paper lantern) | 30 to 90 cm | Omnidirectional soft, warm, cheap, light enough to fly on a boom pole over a table | Dinner scenes, walk-and-talks, F&B (food and beverage) tables |
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

Reason to care about the stop values: every stop of diffusion doubles the light the lamp must make for the same exposure. A subject at ISO 800, T4 and 1/50 s needs about 340 lux at the face (1.1, 17.4); through full grid cloth (about 2 stops) the lamp must make about four times the light it would need bare, before the frame's own spread and distance take their share. Meter at the subject through the frame, because brochure figures are measured bare.

### 4.3 Flags, cutters, floppies, nets, grids, snoots, barn doors

- Flags (solids): black fabric on a steel frame, 45 by 60 cm up to 120 by 120 cm, that cut light. A cutter is a long narrow flag; a floppy is a 120 by 120 cm flag with a hinged second panel that doubles its height. Every lamp gets a flag between it and the lens; it is the first thing a grip does.
- Nets (scrims): single (one stop) and double (two stops) black mesh that reduce light without changing its quality or colour; open-ended versions let the DP feather the cut.
- Grids (egg crates): fabric honeycombs that attach to the front of a softbox (40 degree is standard, 20 and 60 exist) and stop the light spreading sideways, so a soft source still has direction and the background stays dark. Grids keep a soft source directional and the background dark, which is what makes soft light read expensive.
- Snoots: tubes on a hard lamp that give a small pool; barn doors: four hinged leaves that shape the beam on a Fresnel or open-face lamp. Both are edge-control for hard light.
- Black wrap: heavy matte black aluminium foil, moulded by hand over a lamp or a practical to kill spill in seconds; the gaffer's duct tape.
- Cookies, branches and gobos throw patterns into a beam: see 2.15.

### 4.4 Bounce boards

White foam board (4 by 4 or 4 by 8 foot) for neutral soft fill; ultrabounce (a white fabric, one side black) for frames; silver for a harder fill with a specular kick, useful for eyes and on dark skin where a white bounce can read grey; gold only when a sunset is the idea. Beadboard (expanded polystyrene) is the cheapest large white source and the first thing to buy in a new city; in Mumbai it is sold as thermocol sheets.

### 4.5 Gels: correction and effect

| Gel | Shift | Converts | Loss |
|---|---|---|---|
| Full CTO (Lee 204; Rosco 3407 is the Rosco equivalent) | plus 159 mired | daylight 6,500 K to tungsten 3,200 K | 55 percent transmission at daylight, about 0.85 stop |
| Half CTO (Lee 205) | plus 109 mired (Rosco 3408 half CTO is about plus 81, rated from 5,500 K) | 6,500 K to 3,800 K | 70.8 percent at daylight, about half a stop |
| Quarter CTO (Lee 206) | plus 64 mired | 6,500 K to 4,600 K | 79.1 percent at daylight, about a third of a stop |
| Full CTB (Lee 201, Rosco 3202 class) | minus 137 mired | tungsten 3,200 K to about 5,700 K | 34 to 35 percent transmission, about 1.5 stops |
| Half CTB (Lee 202) | minus 78 mired | 3,200 K to 4,300 K | 53.2 percent at tungsten, about 0.9 stop |
| Quarter CTB (Lee 203) | minus 35 mired | 3,200 K to 3,600 K | 70.5 percent at tungsten, about half a stop |
| Plus green (Lee 244 class) | adds green | matches a tungsten or daylight lamp to fluorescent or sodium | about a third of a stop |
| Minus green (Lee 247 Minusgreen class) | adds magenta | removes the green of fluorescent and cheap LED practicals | about a third of a stop |
| Party gels (Lee 181 Congo Blue, 026 Bright Red, 128 Bright Pink) | saturated colour | background accents, club and event looks | one to three stops, deep blues and reds lose most |

Reason for the mired system: Lee 205 adds 109 mired wherever it starts, so on a 5,600 K source it gives about 3,500 K and on a 4,300 K source about 2,900 K; the same gel lands on different kelvin values with the same mired shift. Rosco's half CTO (3408) adds about 81 mired, so a Lee and a Rosco "half CTO" on the same 5,600 K lamp land about 400 K apart (about 3,500 K against 3,850 K): write the maker and the number on the gel list. Values from Lee's product pages (leefilters.com, October 2026). Modern bi-colour and RGBWW (red, green, blue, warm white and cool white, 5.4) fixtures replace correction gels for most tasks; gels remain essential on HMI, tungsten, practicals and windows.

### 4.6 Haze and atmosphere

A hazer puts a fine, long-hanging mist (water-based glycol or glycerine fluid, or mineral oil in "cracker" units) into the air so that light beams become visible and distance reads as lighter and lower contrast. A fogger produces dense, local, short-lived cloud. Haze makes a room look expensive by giving backlights something to draw on and by separating planes; it needs a backlight to show at all and reads as flat grey if lit from the front. When haze reads cheap: a visible beam from a lamp with no motivation, uneven patches (the room needs 10 to 15 minutes to settle after hazing and fans off), and haze in a bright white interior where it only lowers contrast. Hotels and venues in India and the UAE frequently forbid oil haze under their fire alarm rules; water-based units and a letter to the venue the day before are the norm. Check the alarm has been isolated with the venue's engineer, in writing.

## 5. Fixtures as of October 2026

### 5.1 LED COB (chip on board) point sources

| Fixture | Power | Type | Published figures | Notes |
|---|---|---|---|---|
| Aputure LS 600d Pro | 600 W, 720 W max draw | Daylight 5,600 K | about 8,500 lux at 3 m with the Hyper Reflector; the LS 600d reaches 29,300 lux at 3 m with the F10 Fresnel | The workhorse of Indian and Gulf commercials rental; Bowens mount (the bayonet accessory mount most softboxes fit); weather resistant |
| Aputure LS 600c Pro II | 600 W | Tunable colour (RGBWW), 2,300 to 10,000 K | 91,500 lux at 1 m with the Hyper Reflector, about 82 percent above the first generation; IP54 (IP code: the first digit rates dust protection, where 5 is dust protected and 6 dust tight; the second rates water, where 4 is splashing, 5 jets and 6 powerful jets); launched 2024 (Cine Gear Expo); listed at $1,490 on aputure.com in October 2026 | Replaces the 600c Pro; use it where one lamp must be key and coloured accent across a day |
| Aputure LS 600x Pro | 600 W | Bi-colour 2,700 to 6,500 K | listed $1,393 | |
| Aputure LS 1200d Pro | 1,200 W COB, 1,440 W max draw | Daylight | 83,100 lux at 3 m with the narrow 15 degree Hyper Reflector, 22,400 at 30 degrees, 9,610 at 55 degrees; 8.94 kg; $3,390 | The window-through-diffusion lamp; approaches a 1,200 W HMI in a Fresnel and needs no ballast |
| Aputure STORM CS32 | 3,200 W | Tunable colour | listed $7,590 (Cine Kit with CF16 Fresnel $10,499) | The large tunable source for stages and day exteriors |
| Aputure LS 300d II, LS 300x | 300 W | Daylight and bi-colour | LS 300d II listed $759 | Kickers, backlights, small interiors |
| Nanlux Evoke 2400B | 2,400 W | Bi-colour 2,700 to 6,500 K with green and magenta plus or minus 80 | CRI 96, TLCI 97; over 300,000 lux at 1 m; IP55; AC 100 to 240 V at 26 A max | The HMI replacement for sunlight through a window |
| Nanlux Evoke 5000B | 5,000 W | Bi-colour 2,700 to 6,500 K | CRI 97, TLCI 98, TM-30 Rf 96 and Rg 102, SSI 85 at 3,200 K and 74 at 5,600 K; about 555,250 lux at 1 m at 5,600 K with the reflector at 45 degrees; IP66; 46 kg with yoke; 44 dB(A) in smart fan mode; US list $14,800, or $15,500 with flight case (CineD launch report); about 19.8 lakh rupees (1.98 million; a lakh is 100,000) in India including GST and duty on a 2025 retailer listing | Nanlux states its output approaches a 9 kW HMI; maximum draw 5,200 W, about 23 A at 230 V, beyond any 16 A Indian socket, so a generator or a venue's three-phase feed |
| Aputure STORM 1200x | 1,200 W output, 1,550 W maximum draw | Tunable white 2,500 to 10,000 K, plus or minus 100 percent green and magenta, xy colour control (setting colour by CIE chromaticity coordinates) | CRI 95 or above, TLCI 95 or above, TM-30 Rf 95, SSI 87 against tungsten and a 5,600 K daylight reference; 8,490 lux at 3 m bare and 22,500 lux with the 45 degree reflector at 5,600 K; IP65; head with yoke 9.5 kg; $2,990 | The tunable-white successor to the LS 1200d Pro |
| Aputure STORM 1000c | 1,000 W | Full colour | $2,990 | The coloured 1,000 W key and accent |
| Aputure STORM 700x and 400x | 700 W and 400 W | Tunable white | $1,690 and $1,059 | Mid-size keys and backlights |
| Aputure STORM 80c | 80 W | Full colour | $599 | Accent lamp, hidden practical, car interior |
| Aputure STORM XT52 | 5,200 W head draw on 180 to 240 V (5,600 W system); limited to 3,200 W on 100 to 179 V | Tunable white 2,500 to 10,000 K | CRI and TLCI above 96; 8,420 lux at 5 m bare and 41,900 lux with the 35 degree reflector at 5,600 K; IP65; head 27.8 kg without yoke; $13,100 | Aputure's rival to the Evoke 5000B; three-phase or a generator in India |

Aputure's current point-source line is STORM ("x" for tunable white, "c" for full colour; aputure.com/collections/storm, October 2026), which succeeds the Light Storm (LS) heads above; the 2024 "Pro II" refresh applied only to the 600c. A rental quote for "a 1200" may mean the daylight-only LS 1200d Pro or the tunable STORM 1200x, so confirm the head on the quote and again on the lamp. The AI image-prompt vocabulary of "an Aputure 600d through a book light" refers to this class of lamp (section 7).

### 5.2 Panels and soft sources

Aputure NOVA II 1x1 (500 W, tunable colour, $1,899) and NOVA 9 degree 2x1 (650 W, tunable white, hyper narrow beam, $3,690); Litepanels Gemini 1x1 and 2x1 Soft and Hard (RGBWW; the broadcast and studio standard in the Gulf); Nanlite PavoSlim and Aputure Amaran panels at the lower tier. ARRI's LED families on arri.com (October 2026) are SkyPanel X (modular, with soft and hard outputs), SkyPanel Pro, SkyPanel Classic (S30-C, S120-C, S360-C; ARRI lists the S60-C as discontinued, though it remains common in rental), the Orbiter point source with interchangeable optics, L-Series Plus spotlights and the Omnibar linear light; Creamsource Vortex 8 and Vortex 24 are the weatherproof large-panel alternative. An S360-C, or an array of SkyPanel X, through a 12 by 12 ft frame is the standard space light (one overhead soft source over the whole set) for a hotel suite or a dining table, because a single overhead source lets the camera turn 360 degrees. Panels are soft without a modifier and fast to rig, which is why they own interviews and events; the trade is a flat quality and a visible rectangular catchlight, so key luxury faces with a COB through a modifier and use panels for fill and background.

### 5.3 Tubes and pixel sources

| Fixture | Power | Pixels | CCT range | Rendering | Control |
|---|---|---|---|---|---|
| Astera Titan Tube | 72 W total LED power, 48 W maximum draw, 2,900 lm; battery powered; 120 degree beam | 16 | 1,750 to 20,000 K | CRI and TLCI above 96 | CRMX, app |
| Quasar Science Rainbow 2 | 2 ft 25 W, 4 ft 50 W, and an 8 ft version | 10 (2 ft), 24 (4 ft) | 1,750 to 10,000 K | CRI up to 95, SSI up to 91, TM-30 up to 94 | DMX, sACN, Art-Net, CRMX, W-DMX, Bluetooth |

Control protocols: DMX (DMX512, the wired lighting-control standard of 512 channels per universe), sACN and Art-Net (DMX carried over Ethernet), CRMX (LumenRadio's wireless DMX) and W-DMX (Wireless Solution's wireless DMX); see 5.9.

- Use: hidden in architecture (under a bar counter, behind a headboard, inside a car), as practicals that look like neon, as a moving pixel effect (a passing car's lights) and as a soft wrap on skin at close range. Tubes are what made the 2020s hotel-room look possible with a two-person crew.

### 5.4 RGBWW and colour accuracy

RGBWW fixtures mix red, green, blue, warm white and cool white emitters (some add lime, amber or cyan; Aputure calls its mix BLAIR). They can hit any gel colour at the dial and still produce a high-CRI white because the white emitters carry the skin-tone load. Two cautions: saturated colours from LEDs are narrow-band and can clip on camera (a deep blue goes electric and loses all texture; dial it back to 80 percent saturation), and two makers' "Congo Blue" differ, so set colours by gel number or by xy coordinates in the app.

### 5.5 HMI

HMI (hydrargyrum medium-arc iodide: a metal halide arc lamp with a ballast) is still the brightest daylight per watt and the sun replacement for exteriors. ARRI M18: 1,800 W, lens-less MAX reflector (the technology from the ARRIMAX, which won an Academy Scientific and Engineering Award), beam 20 to 60 degrees, 11.5 kg head, dimmable 50 to 100 percent via the ballast, and ARRI states it is more than 70 percent brighter than a 1,200 W head. K5600 Joker (200, 400, 800 and 1,600 W; Joker-Bug versions fit inside softboxes) are the compact HMIs for travel. Rules: HMIs take two to three minutes to strike and reach colour, cannot be hot-restruck without the right ballast, and flicker on magnetic ballasts at mains frequency, so insist on electronic flicker-free ballasts and shoot at 25 fps with a 180 degree shutter (an exposure of half the frame interval, 1/50 s at 25 fps) in 50 Hz countries (India and the UAE); other frame rates in 17.3. HMIs run hot and need safety glass: a UV-emitting arc with a cracked lens burns skin.

### 5.6 Tungsten, fluorescent legacy, practicals

Tungsten (ARRI Fresnels 300 W to 5 kW, open-face "redheads" 800 W and "blondes" 2 kW) gives a continuous spectrum (CRI 100 by definition), a beautiful warm dim curve, and heat. Still worth renting for a candle-lit dinner or a period hotel where LED warm whites feel thin; the rest of the time LED wins on power and heat. Fluorescent (Kino Flo tubes) defined the 1990s and 2000s soft look and survive in some Mumbai rental inventories; their green spike needs minus green and a camera test. Practicals: use high-CRI LED bulbs (Philips Hue White Ambiance or similar, or specialist film bulbs) in every lamp in frame; a supermarket LED bulb at CRI 80 turns skin green at the edge of the frame.

### 5.7 Bi-colour and full colour; flicker and dimming curves

Bi-colour lamps (two white emitter sets) give more output and better skin at any white than full colour lamps of the same wattage, and cost less; full colour lamps pay for the accent work. Flicker: LEDs dim by PWM (pulse width modulation) or by constant current; PWM at a low frequency flickers at high frame rates and short shutters, so test every lamp at the planned frame rate and shutter in camera before the day. On 50 Hz mains, discharge lamps, fluorescents, cheap LEDs, signage and many LED walls pulse at 100 Hz, so an exposure is flicker-safe when it is a whole multiple of 1/100 s (1/100, 1/50, 1/25); the frame-rate and shutter-angle table is 17.3. At 120 fps and above no safe shutter exists: replace practicals with high-frequency or constant-current fixtures, or test tungsten's slight ripple at speed. Flicker cannot be removed cleanly in the grade, which is why the house shoots 25 fps for India and UAE deliverables (26-platform-and-format-specs-2026.md, section 5.1). Dimming curves (linear, logarithmic, exponential, S-curve) change how a fade looks; for an on-camera dim (a room darkening) use a logarithmic or S curve, because perceived brightness is logarithmic and a linear dim looks like it drops at the end.

### 5.8 Power, generators and rental norms in India and the Gulf

- Mains: 230 V at 50 Hz in India and the UAE; a standard domestic 16 A socket in India delivers about 3.5 kW, which is five 600 W COBs or two 1,200 W heads plus monitors, and no more. Big HMIs and the Evoke 5000B need three-phase or a generator.
- Generators: film shoots in India run on silent diesel gensets (62.5 kVA and 125 kVA are common sizes; kVA, kilovolt-amperes, is the generator's apparent power rating, roughly its kW at a good power factor) that come with an operator, cable, and a distribution box; book through the lighting vendor, specify "silent" and a run time, and park it where the sound recordist agrees (section 10). In Dubai, generators on public land need the Dubai Film and TV Commission permit on the location paperwork, and most hotels require a venue electrician to tie in.
- Rental norms, Mumbai: equipment is quoted per shift (the 12 hour shift, usually 7 am to 7 pm or 8 to 8, with overtime by the hour after), lights arrive with the vendor's lightmen (the term for lighting technicians) whose wages, conveyance and food are separate lines on the quote, crews are affiliated to FWICE (Federation of Western India Cine Employees) unions and the gaffer runs the lightmen, and a security deposit or a letter from a known production house is standard. Cartage (transport) and a "setting" charge are quoted separately. Rates vary by vendor and are not published; get three quotes and verify the lamp model on arrival.
- Rental norms, Dubai: quotes per day with weekly rates at four to five days, crew (the gaffer; the best boy, the gaffer's deputy; and sparks, the electricians) quoted per 10 or 12 hour day, VAT at 5 percent added, insurance certificates required by the rental house, and most gear housed in Dubai Studio City or Al Quoz. Permits for exteriors come through the Dubai Film and TV Commission; allow several working days and a location fee for public spaces. Abu Dhabi runs its own commission (Abu Dhabi Film Commission, with the 2023 rebate scheme for qualifying productions).
- Voltage and sockets travel: Indian crews bring their own 16 A to 15 A adaptors; UAE uses BS 1363 (UK) sockets, so British-spec distros (power distribution boxes) work.
- Heat and the midday break: the UAE's Ministry of Human Resources and Emiratisation (MoHRE) bans outdoor work in direct sun from 12:30 to 15:00 between 15 June and 15 September; fines have been AED 5,000 per worker, up to AED 50,000 where several workers are involved (verify the current year's resolution before scheduling). Saudi Arabia runs a similar ban from 12:00 to 15:00 over the same months (verify the current dates). This is crew law as well as light quality, so the summer exterior schedule is dawn, dusk, and interiors in between (6.8). Check each fixture's rated operating temperature: COB heads throttle or shut down in 45 degree sun, so shade heads, ballasts and control boxes.
- Condensation: lenses, mics and monitors carried from a 20 degree interior into 35 degrees at 70 to 80 percent humidity fog for 30 to 60 minutes. Acclimatise cases unopened for that time and carry silica gel.
- Monsoon Mumbai (June to September) and pool decks: IP-rated heads (the IP65 STORM heads, the IP54 600c Pro II), a 30 mA RCCB (residual current circuit breaker, which cuts the supply on an earth leak) on every distribution box, and an earth check on the venue supply before the first lamp is struck.
- Dust and smog: Delhi's winter smog and Gulf dust flatten contrast and kill the blue-hour sky; hold a weather day in the schedule.
- Batteries and air travel: under the passenger rules of IATA (the International Air Transport Association), spare lithium-ion batteries travel in cabin baggage only; up to 100 Wh (watt-hours, a battery's stored energy) needs no approval, over 100 Wh up to 160 Wh needs airline approval with a maximum of two spares per person, and over 160 Wh is forbidden on passenger aircraft. Crews flying between Mumbai and Dubai therefore carry 98 Wh V-mount batteries (the standard camera battery plate) or rent locally. Runtime check: an LS 600d Pro drawing about 720 W empties two 98 Wh batteries in about 15 minutes, so batteries are for tubes, hides and moves, and keys run on mains or a generator.

### 5.9 Lighting control

- App control for small crews: Aputure Sidus Link, Nanlux NANLINK and the Astera app set intensity, CCT, green and magenta and effects on every head from one phone, and store looks per setup for continuity (2.12).
- Wireless DMX (LumenRadio CRMX), sACN and Art-Net (5.3) run pixel tubes and larger rigs from a console.
- A board operator on a console (grandMA3 onPC, ETC Nomad, or an iPad app) stores cues such as passing car lights, a television's flicker or lightning; a stored cue repeats identically across takes, which protects continuity and saves resetting by hand.
- At events, ask the lighting designer for a DMX universe for camera lights, so faces can be lifted without fighting the stage desk (6.11).

## 6. Lighting by subject

### 6.1 Faces and skin across complexions

The physics: darker skin reflects less light and has more specular sheen relative to its diffuse return, so an exposure that is right for a light-skinned subject underexposes a dark-skinned one, and a flat front light makes dark skin look grey and dull because it suppresses the sheen that gives it form. The craft answers, associated with Bradford Young (Pariah 2011, Selma 2014, A Most Violent Year 2014, Arrival 2016 for which he was the first African American nominee for the cinematography Oscar; he favours raw light and shooting into it, and lit a Pariah bedroom with Christmas lights and an IKEA lamp), with James Laxton on Moonlight (2016), and set out plainly by Ava Berkofsky (cinematographer of HBO's Insecure) in a 2017 interview with Mic:

- Expose for the skin and let the room fall where it falls: a white wall going bright is acceptable, because an underexposed dark face cannot be rescued in the grade without noise and a grey cast. Set the key by an incident reading at the face and ignore the camera's auto exposure.
- Use harder, more directional light with a specular component (a 90 cm octa close, or a silver bounce) so the skin's sheen draws the bone structure; a huge flat source is the grey-skin mistake.
- Warm fill: fill with a warm bounce or a lamp at 3,200 to 4,000 K; cool fill reads ashen.
- Separate from the background with a kicker or a rim; dark skin on a dark ground with no edge disappears on a phone.
- Moisturiser or a light sheen on the skin, applied by the makeup artist, gives the specular return the light needs; matte powder is the enemy on dark skin and the friend on very light skin.
- Mixed groups (an Indian wedding, a Gulf boardroom with Emirati, South Asian and European faces): key for the darkest skin in the frame, then subtract from the lightest with a net or by position, because you can take light away from a face in the grade more gracefully than you can add it.

South Asian skin spans the whole range and carries red and olive undertones that cheap LEDs with low R9 push to muddy brown; insist on CRI above 95 with R9 above 90, or SSI above 80 against the reference, on every face key.

### 6.2 Beauty and skincare

Soft, frontal, large, close: clamshell (2.6) or a 150 cm octa on axis above the lens; a white card below; catchlights top and bottom; ratio 1:1 to 2:1. Catchlights (the reflection of the source in the eye) are the whole game: round and at ten or two o'clock reads natural, a ring reads as a ring light. The ring light tell: a doughnut in the pupil, a halo shadow behind the head, flat waxy skin; it signals a creator setup from 2019. Texture control is the second game: a hard rim from behind at 45 degrees shows the fine hair on the cheek (expensive in a close-up); a hard key shows pores (never). Retouch rules in 16-editing-colour-grading-and-delivery.md, section 10.

### 6.3 Jewellery

Jewellery is specular surfaces at every angle. The light source becomes the image: a large diffusion (a 1.2 by 1.2 m frame of 216 or a tent) gives a smooth gradient on polished metal; small white and black cards placed at the edges of the diffusion draw bright and dark lines along facets and edges so the form reads (a polished ring with a single white gradient looks like a blob; the same ring with a black card reflected along its top edge looks like a ring). Diamonds: the sparkle problem is that a stone lit by one big source shows one grey window, with no fire; fire comes from many small hard sources at different angles, so add two or three pin lights (a 60 W focusing COB with a snoot, or an LED torch) aimed into the stone from outside the diffusion, and in motion, move one of them slowly on a slider so the facets flash. Polarisers kill the metal's life; use them only on the lens to cut a reflection of the camera. Gold reads as gold only against a warm reference: a white card reflected in gold looks yellow-white, so let a warm-toned card or a warmer gel sit in the reflection. Keep the camera and crew out of the reflections with a black tent and a hole for the lens. Macro depth of field is paper thin; focus stack for stills (merge several frames focused at different depths), and for motion shoot at T8 to T11 with a lot of light (about 1,360 to 2,570 lux at ISO 800 and 1/50 s, 1.1), which is where 1,200 W COBs through diffusion earn their rental.

### 6.4 Watches

Everything in 6.3 plus the crystal (the glass face), which reflects the entire room: a tent or a large black-and-white gradient card above and a narrow strip softbox for the case highlight. Hands set to 10:10 by convention (the brand name clear between the hands, the face "smiling"). Brushed steel wants a hard edge that shows the brush direction; polished bezels want a gradient; the dial wants a soft frontal source with the camera angled a few degrees off the crystal's normal so the lens is out of the reflection. Dulling spray (a matte aerosol) is for background metal only; it kills the finish the client paid for.

### 6.5 Product and packaging

- Gloss (lacquer, glass, foil): light the reflection; use a strip softbox for a long clean highlight down one side and a black card for a dark edge on the other, and position both so the highlight follows the product's curve.
- Matte (paper, stone, leather): light the texture; a raking hard key at 60 to 80 degrees from one side and a soft fill.
- Glass and liquids: backlight through diffusion so the liquid glows, then add edge definition with black cards either side; a white bottle on white needs a black edge to exist. A single bright "window" highlight on a bottle shoulder is the signature of the premium spirits catalogue.
- Tenting: a white fabric cube around the product with lamps outside; gives a shadowless gradient on anything shiny, at the cost of all drama; the e-commerce standard.
- Dulling spray for hot spots on chrome parts that are not the hero; clay and museum putty to hold products; a 2 by 3 m roll of white or coloured paper for sweeps; a ruler and a spirit level because an off-level bottle reads as cheap.

### 6.6 Food

Backlight or side light: light from behind at 30 to 45 degrees above gives sheen on sauces and translucency to greens and glass; a white bounce in front for fill; a small black flag to keep the back edge of the plate dark so the food is the brightest thing. Speed is the constraint, because food dies in minutes (salad wilts, ice cream slides, foam collapses), so light the set with a stand-in plate, lock focus and exposure, and swap the hero in. Warm key (4,000 to 4,500 K) flatters most food; cool key kills it except for seafood and ice. For F&B clients in India and the Gulf, chefs prefer dishes "as served"; the stylist's job is to keep it true and make it hold under lights. Pours, splashes and drops: see section 8 (flash duration and high-speed capture).

### 6.7 Interiors and architecture

- Balance windows and interiors: see 3.5. The twilight exterior (the hotel at blue hour with all rooms lit) is scheduled to the minute and needs every practical on a dimmer from one position; shoot a sequence of frames across 20 minutes and choose the balance in the edit.
- Flash blends for stills: the architectural photographers' method of one ambient exposure plus several flash-lit exposures (a speedlight or Profoto head bounced off the ceiling, walked around the room) composited by hand in Photoshop, which gives clean colour in every corner without the HDR (high dynamic range merge) look.
- Bracketing: three to five exposures two stops apart for the window and the room, merged by hand or in Lightroom's HDR merge, then graded flat; the tell of overdone HDR is a glowing halo at the window frame, which design-taste, section 3, lists as a cheap tell.
- The empty room as abundance: luxury interiors are photographed with nothing on the surfaces, one chair pulled out, a book open; the emptiness is the product. Light it so the materials show (raking light on stone and timber), and keep verticals vertical (tilt-shift lens or correct in post).

### 6.8 Hotels and hospitality

Available light first: a well-designed hotel was lit by a lighting designer, and the film should show their work. Walk every space at the hours the client wants (breakfast terrace 7 to 8 am, pool 4 pm, bar 7 pm) and write a time-of-day plan per room from the windows and practicals. Add light only to lift faces and correct colour casts (most hotel LEDs sit at 2,700 to 3,000 K with mixed CRI; carry minus green and a few high-CRI bulbs). Shoot rooms at the moment the window and the practicals balance (blue hour, or a shaded hour) and use a book light outside the door for the bed. In the Gulf, mid-afternoon exteriors are unusable, and in summer outdoor crew work from 12:30 to 15:00 is illegal (5.8); the schedule is dawn, dusk and interiors in between. Light staff in frame with the same face key as talent (6.1).

### 6.9 Fashion

Three looks worth naming because clients ask for them by reference: hard sun or a bare bulb (a single hard source, crisp shadows, the Jacquemus noon and the 1990s Helmut Newton pool); the Avedon white (Richard Avedon moved to studio strobe by the late 1950s and stripped out soft lights and props so that the subject against a plain white paper sweep was the whole picture; In the American West, shot 1979 to 1984 on 8 by 10 film and published 1985, is the reference; technically a white background lit two stops over the subject, a large soft key on axis, and nothing else); and the Juergen Teller flash (on-camera flash, snapshot aesthetic, imperfection on purpose; Marc Jacobs campaigns from the Spring/Summer 1998 season to Spring/Summer 2014, Céline Fall/Winter 2010, Vivienne Westwood 2008 to 2010, Louis Vuitton 2014 to 2015, the Grand Palais Éphémère exhibition "i need to live" in 2023). Each is a complete idea; the mistake is mixing them in one campaign. Movement needs light that holds across the frame (a 2.4 m book light or sun), because a model walks out of a tight octabox in two steps.

### 6.10 Cars

A car is a curved mirror. The light is a long, continuous soft source that reflects as one clean line along the body: a 6 by 2 m overhead frame of diffusion with lamps above it ("the tunnel"), or a long strip softbox, or a single overhead softbox moved along the car during a long exposure (light painting, the stills method). Reflections of the crew, the sky and the building appear in every panel; a studio with a black cove or a location at blue hour with a clean sky solves most of it. Polarisers manage the windscreen. Rolling shots at dusk use the sky as the tunnel.

### 6.11 Events and stages

Shoot under the stage lighting designer's light and correct for it: white balance to the key colour on faces (often 3,200 K for tungsten profiles or 5,600 K for LED), accept the saturated washes as they are, and add a small on-camera or stand-mounted LED at matching colour for the interview corner. LED walls flicker and moiré (a shimmering interference pattern where the wall's pixel grid beats against the sensor's): match the camera's shutter to the wall's refresh (test 1/50, 1/100 and odd angles in camera; 17.3), stand back so the pixel pitch (the distance between LED centres, in millimetres) resolves below the sensor's resolution, and white balance to the wall's white if the wall is the background. Noise rules apply to events in India under the Noise Pollution (Regulation and Control) Rules, 2000 (55 dB(A), sound level weighted to the ear's sensitivity, daytime and 45 night in residential zones, 65 and 55 commercial; loudspeakers need permission and stop at 10 pm except on permitted days); generators and PA (public address sound systems) on outdoor Dubai events need the municipality's noise permit. The sound plan for a launch (press feed, desk split, room mics) is in 10.8.

### 6.12 White and black cloth in hard sun

In direct Gulf sun a white kandura (the ankle-length robe worn by Emirati men) sits about 3 to 5 stops over the wearer's face, and a black abaya (the over-garment worn by many Gulf women) several stops under it. Log cameras (recording a flat, logarithmic image that keeps the range for the grade) hold that range; the Rec 709 and phone deliverable cannot show both with texture. Rules: shoot in open shade or under an overhead frame (12 by 12 ft of quarter or half grid cloth); expose for skin and protect the weave of the kandura, which means no yellow or red false colour on the fabric (1.6); lift the abaya with a silver bounce at a glancing angle so the weave catches a highlight; avoid pure white sweeps behind white garments; ask wardrobe for off-white or textured cloth for hero frames. The same rules apply to an ivory lehenga beside a dark sherwani at an Indian wedding. Blown white cloth and blocked black cloth both read as cheap, and neither can be recovered in the grade.

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
| studio strobe, white paper backdrop, beauty dish | Avedon white | Say "even white background, no vignette" |
| clamshell beauty lighting, catchlights | 2.6 | Works in most 2025 to 2026 models |
| large softbox reflection on the bottle, gradient highlight | product gloss control | Specify "one highlight" or models add several |

What the models get wrong, and what to check in every generated frame before it goes to a client: impossible sources (a shadow that implies a sun from the left while a window glows on the right), double or triple shadows under one apparent source, catchlights in two different positions in the two eyes, specular highlights on matte fabric, a rim light with no visible or plausible source, light on the face warmer than the light on the hands, and haze or god rays by default. Fix in the prompt by stating one source and its direction and quality in sequence ("a single large soft window light from camera left, no other sources, soft shadows falling to the right"), by naming the ratio in words ("gentle contrast, shadows two stops darker"), and by rejecting frames with mixed shadow directions. Treat a generated reference as the lighting diagram for the real shoot, and light the physics on the day (design-taste, section 3: AI renders with impossible light are a cheap tell).

### 7.1 CG packshots, LED volumes and AI relighting

- CG packshots (Blender, Cinema 4D with Redshift or Octane, KeyShot) are lit with HDRIs (high dynamic range panoramas that light a scene with a captured environment) and area lights named after real modifiers. Brief them with the same ratios and highlight shapes as a real shoot (6.3 to 6.5), so CG and photographed assets in one campaign match (13-motion-graphics-and-3d-production.md, section 8.3).
- LED volumes (virtual production stages with LED walls behind and above the set) light the subject with image-based light from the wall. RGB-only wall emitters render skin poorly and give no hard key, so add RGBWW fixtures for faces and a hard source for any sun.
- AI relighting of real footage and stills (IC-Light, Beeble SwitchLight, the relight tools in Higgsfield and similar platforms) is a previs and rescue tool. Judge its output by the one-shadow-direction test above (22-ai-era-craft-and-generative-tools.md, section 6.5).

## 8. Lighting for stills and for motion

- Continuous light (LED, HMI, tungsten) is what you see is what you get and the only option for motion. Strobe (studio flash: Profoto D2 and Pro-11, Broncolor Siros and Scoro, Godox AD1200Pro) delivers far more light in a 1/1,000 to 1/10,000 s burst, freezes motion, and lets stills shoot at ISO 100 and f/11 for depth of field on product; it is invisible to video.
- Flash sync: a focal-plane shutter syncs with flash up to about 1/200 to 1/250 s; above that, high-speed sync (HSS) pulses the flash through the exposure at a cost of about two stops of power, useful for overpowering sun at f/2 for a fashion portrait. Leaf-shutter cameras (Hasselblad, Phase One, Fuji GFX leaf lenses) sync at any speed and are why medium format still owns high-end fashion in daylight with flash.
- Modelling lamps (the continuous bulb inside a strobe head, now LED on Profoto and Broncolor) show where the light falls but lie about ratios; meter the flash.
- Hybrid shoots (a campaign that needs stills and motion from one set in one day, the norm for Mask360 clients): light continuous for motion with COBs through the same modifiers the stills photographer will use, then for stills either accept the continuous light (modern mirrorless at ISO 800 to 1600 handles a 600 W COB through a 120 cm octa at f/4) or swap heads for strobes in the same modifiers. Keep the colour temperature identical (strobes are about 5,500 to 5,600 K; set the COBs to 5,600 K) so the two deliverables grade together. The classic failure is a video crew on 3,200 K practical-led light and a stills crew on strobe, giving two campaigns in two colours.
- Freezing liquids (pours, serum drops, splashes): stills freeze them with flash duration, so quote the maker's t0.1 figure (the time the flash spends above 10 percent of peak), because the t0.5 figure (above half of peak) flatters by about three times. IGBT strobe heads (which cut the flash tube's discharge electronically) reach under 1/10,000 s at low power, which freezes a splash. In motion, a high-speed camera at 1,000 fps with a 1/2,000 s exposure receives 40 times less light per frame than 25 fps at 1/50 s, about 5.3 stops, so plan large flicker-free sources (DC-driven LED, flicker-free HMI) close and hard, and test at speed (5.7, 17.3).

## 9. Sound fundamentals

### 9.1 Frequency, the audible range, the map of a mix

Frequency is cycles per second, in hertz (Hz); the healthy young ear hears about 20 Hz to 20 kHz, and most adults lose the top from 16 kHz down with age. Phone speakers reproduce roughly 300 Hz to 10 kHz, which is why a brand film that depends on sub-bass has no sub-bass on Instagram. The working map of a mix, with the instruments and problems that live in each band:

| Band | Range | What lives here | Common problem |
|---|---|---|---|
| Sub | 20 to 60 Hz | Sub-bass drops, cinema rumble, the "hit" in a trailer | Inaudible on phones and laptops; eats headroom; high-pass (filter out everything below a set frequency) every other track |
| Bass | 60 to 250 Hz | Kick, bass, the chest of a male voice (100 to 150 Hz), room boom | Boom from close lav or a small room around 120 to 200 Hz |
| Low mids | 250 to 500 Hz | Warmth and body; muddiness | "Boxy" dialogue around 300 to 400 Hz |
| Mids | 500 Hz to 2 kHz | Vowels, the core of speech and most instruments | "Honky" or nasal around 1 kHz |
| Upper mids and presence | 2 to 6 kHz | Consonants, intelligibility, bite; the ear's most sensitive region (2 to 5 kHz) | Harsh, fatiguing; sibilance (hissing "s" and "sh" sounds) 5 to 8 kHz |
| Brilliance and air | 6 to 20 kHz | Breath, shimmer, cymbals, "expensive" sheen | Hiss; a lav under clothing loses it all |

Reason the map matters to a creative director: an edit that feels "muddy" or "cheap" is nearly always a low-mid build-up from voice plus music plus room all occupying 200 to 500 Hz; the fix is subtractive EQ (equalisation: cutting or boosting frequency bands), and asking for it by band is faster than asking for "cleaner". Why sound changes how good the picture looks, and audio-visual sync tolerances: 02-perception-and-psychology.md, section 16.

### 9.2 Decibels: dBFS, dB SPL, dBu, and dynamic range

The decibel is a ratio on a logarithmic scale; it needs a reference to mean anything. dB SPL (sound pressure level) is acoustic loudness against the threshold of hearing: a quiet room about 30 dB SPL, conversation about 60, a cinema reference mix peaks at 105 per channel, pain near 120. dBu is an analogue line level against 0.775 V (professional line level is plus 4 dBu). dBFS (decibels relative to full scale) is digital: 0 dBFS is the largest value the file can hold and everything is negative; clip above 0 and the waveform is flat-topped and unrecoverable (except in 32-bit float, 10.7). A rule set in these units: record dialogue peaking around minus 12 to minus 6 dBFS with an average near minus 18 to minus 20, mix dialogue around minus 23 LUFS (loudness units relative to full scale, 13.4) for broadcast or minus 14 for streaming (13.4), and never let the true peak pass minus 1 dBTP (decibels true peak). Dynamic range is the span between the noise floor and the loudest clean level: 24-bit audio holds about 144 dB in theory, a good preamp and mic chain about 110 to 120, a phone video about 60.

### 9.3 Sample rate and bit depth

Sample rate is how many times per second the signal is measured; by Nyquist, it captures frequencies up to half the rate. 48 kHz is the video standard (every camera, every broadcaster, every NLE (non-linear editing application) assumes it); 44.1 kHz is the music CD legacy and still the delivery for some music platforms; 96 kHz is for sound design where you will pitch recordings down (a 96 kHz recording of a door creak pitched down an octave still has content to 24 kHz). Bit depth is the resolution of each sample: 16-bit gives about 96 dB of range, 24-bit about 144 dB, so 24-bit lets you record conservatively (peaks at minus 12) with no audible noise penalty. Deliver 48 kHz 24-bit WAV for all video; convert music masters to 48 kHz once, with a quality resampler, before they enter the NLE.

### 9.4 Mono, stereo, surround, Atmos

Mono is one channel; every phone and most laptops play effectively mono, and dialogue and VO (voice-over) are always mono in the centre. Stereo is two channels with placement by level and timing. 5.1 is six channels (left, right, centre, LFE (low frequency effects, the ".1"), left surround, right surround), the broadcast and streaming surround standard; 7.1 adds side channels. Dolby Atmos is a bed (a fixed channel layout, usually 7.1.2 or 7.1.4, the last number being overhead channels) plus up to 118 objects (individual sounds carrying position metadata), rendered to whatever speakers the listener has; delivered as an ADM BWF (a WAV with Audio Definition Model metadata). Brand work is delivered stereo almost always; an Atmos mix for a cinema spot or a Netflix-adjacent branded film is a specialist booking (section 16). Mono compatibility: check every mix with the channels summed, because a wide stereo effect with phase cancellation disappears on a phone speaker.

### 9.5 Phase and polarity

Two microphones picking up the same source at different distances capture it with a time offset; summed, some frequencies cancel (comb filtering: a hollow, swirly tone). The 3:1 rule: keep the second mic at least three times as far from the source as the first. Polarity is the plus or minus sign of the waveform; a reversed cable or a lav and boom recorded out of polarity thin out the voice when mixed. Fix in post with a polarity flip and a few samples of alignment (Resolve, Pro Tools and RX all do this); better to check on set with headphones by muting and unmuting the second mic.

## 10. Capture on set

### 10.1 Microphones

A microphone's polar pattern is its sensitivity by direction: omni picks up all directions equally; cardioid is heart-shaped and rejects the rear; supercardioid and hypercardioid are narrower at the front with a small rear lobe; figure-of-eight hears front and back and rejects the sides.

| Type | Examples | Pattern and character | Use |
|---|---|---|---|
| Shotgun (interference tube) | Sennheiser MKH 416 (the broadcast and film standard for decades, an RF condenser that shrugs off humidity, a point in Mumbai monsoon and Gulf summers), MKH 8060, Sanken CS-M1, Deity S-Mic 3, Rode NTG5 | Supercardioid lobe, rejects sides, reaches 0.6 to 1.2 m | Exteriors, reach, noisy rooms |
| Short hypercardioid and cardioid | Schoeps CMC 6 with MK 41, Sennheiser MKH 50, Audio-Technica AT4053b | Tight but without a tube's reflections | Interiors with hard walls (hotel rooms, marble lobbies), where a shotgun sounds phasey |
| Lavalier, wired | Sanken COS-11D (the industry lav, 4 mm), DPA 4060 (5.4 mm omni, 134 dB max SPL; 4061 is 10 dB less sensitive for loud sources; 4071 adds a 5 dB presence boost at 4 to 6 kHz), DPA 6060 (3 mm) | Omni, close, consistent | Interviews, hidden under clothing |
| Lavalier, wireless | Sennheiser EW-DP and EW-DX (UHF, ultra high frequency radio, broadcast grade), Lectrosonics (the high end), Rode Wireless Pro (2.4 GHz, 260 m line of sight, 32-bit float on-board recording with 32 GB per transmitter, timecode, two Lavalier II mics in the kit), DJI Mic 3 (2.4 GHz, dual-file 32-bit float internal recording, up to four transmitters and eight receivers, timecode) | Convenience and mobility | Walk and talk, run and gun, creator formats |
| Stereo pairs | ORTF pair (the near-coincident method devised at the French broadcaster ORTF: two small-diaphragm cardioids 17 cm apart at 110 degrees, such as Schoeps or Neumann KM 184), Sennheiser MKH 418S or Rode NT-SF1 for mid-side (a forward cardioid plus a sideways figure-of-eight, decoded to a width you choose in post) | Width, room | Ambience beds, events, music |
| Ambisonic | Sennheiser Ambeo VR, Rode NT-SF1, Zoom H3-VR | Full-sphere first-order recording, decoded to any format | 360 video, VR, future-proof ambience |
| Handheld and hypercardioid vocal | Shure SM58, SM7B, Electro-Voice RE20 | Robust, proximity bass | VO in the field, podcast, stage |

Frequency bands in the UAE and India for UHF wireless: both regulate the spectrum (the TDRA, Telecommunications and Digital Government Regulatory Authority, in the UAE; the WPC, Wireless Planning and Coordination Wing, in India), and some broadcast frequencies need a licence; 2.4 GHz systems are licence-free and the practical choice for small crews, with the trade that they drop out in crowded venues (an event with 500 phones). Carry wired lavs as backup.

### 10.2 Boom technique

The boom operator holds the mic on a pole above the frame line, 30 to 60 cm from the mouth, pointed at the chin, moving with the speaker and anticipating the lines; overhead sounds natural because the voice projects up and out and the mic sees the room from above. From below (the "underslung" boom) works for wide shots where the frame line is low, with more floor reflection. The gaffer and the boom op negotiate every setup, because the boom casts a shadow and the top light hits the mic; the rule is that the boom gets a flag before the lamp gets another modifier. A shock-mount cradle and a blimp (a basket windshield around the mic) with a fur cover (Rycote Cyclone or Modular Windshield; the fur is the "dead cat", also called a windjammer) are standard outdoors; indoors a foam windscreen is enough. For full-length vertical frames the overhead boom sits in the taller 9:16 crop, so boom underslung or go lav-first (2.12).

### 10.3 Lavalier technique

Mount under the second button line of a shirt or at the sternum under a dress, 15 to 25 cm from the mouth, with the capsule in a Rycote Undercover or Stickies, a Hide-a-Mic or a Bubblebee Lav Concealer so fabric cannot touch it; tape a strain-relief loop. Silk and synthetic fabrics rustle, cotton is quiet; in a Gulf context, a kandura or abaya gives easy concealment at the collar, and a saree pleat or blouse edge works for Indian wear. Hair and jewellery are the usual noise sources (a necklace tapping the capsule); ask the stylist. Record the boom as well whenever one can be placed; the boom is the better sound and the lav is the insurance.

### 10.4 Recorders

| Recorder | Inputs | Tracks | 32-bit float | Preamp EIN (equivalent input noise) | Timecode | Notes |
|---|---|---|---|---|---|---|
| Sound Devices MixPre-3 II | 3 | 5 | Yes | about minus 130 dBu (Kashmir preamps) | Internal | 10 second pre-roll buffer, adjustable limiters |
| Sound Devices MixPre-6 II | 6 | 8 | Yes | about minus 130 dBu | Internal | The house's two-mic interview recorder with room to grow |
| Sound Devices MixPre-10 II | 10 | 12 | Yes | about minus 130 dBu | Internal | Events and multi-lav panels |
| Zoom F3 | 2 XLR | 2 | Yes, dual AD converters, to 192 kHz | not stated here | Via the TCA-1 adaptor, or an UltraSync Blue over the BTA-1 | 242 g; the two-person crew's answer to a boom and a lav |
| Zoom F6 | 6 | 14 | Yes | not stated here | Internal | |
| Zoom F8n Pro | 8 | 10 | Yes, to 192 kHz | under minus 127 dBu | Internal | |

- The Sound Devices 833 and 888 are the feature-film mixers.
- Camera audio on cinema bodies is usable (ARRI, Sony Venice and FX series have decent preamps) and on mirrorless cameras is a scratch track only.
- Handover to post: record polyphonic BWF (Broadcast Wave Format, a WAV carrying timecode and metadata) with iXML metadata (scene, take, and track names such as "Boom" or "Lav Priya"), ISO tracks (each mic isolated) plus a mix track, and a daily sound report listing takes, circled takes (the director's chosen takes) and problems. Send a wireless feed of the mix to camera so dailies (the day's footage, synced for review) carry usable scratch audio.

### 10.5 Timecode, jam sync, the slate and the clap

Timecode is a running clock (hours, minutes, seconds, frames) written into every recording so that the edit can line audio and picture up by number. A master clock (Tentacle Sync E, Deity TC-1, Timecode Systems UltraSync One, Ambient Lockit) is set, then each camera and recorder is "jammed" from it (jam sync: the device copies the time and then free-runs on its own crystal; re-jam every four to six hours because crystals drift about a frame a day). Frame rate of the timecode must match the project: 25 fps for the PAL-heritage markets (India, UAE, Europe), 23.976 or 24 for cinema and most streaming, 29.97 drop-frame (a count that skips two frame numbers each minute, except every tenth minute, to keep timecode in step with the clock) only for North American broadcast. The slate (clapperboard; a smart slate such as the Denecke TS-C shows the running timecode in LEDs) is the backup and the labelling system: scene, shot, take, roll, date, day or night, interior or exterior; the clap gives a single sharp transient on both audio and picture for a manual sync when timecode fails. Say the slate out loud ("scene 12 apple, take 3"), clap once, cleanly, in frame, in focus. Tail slate (upside down, clapped at the end) when the head of the take cannot be slated.

### 10.6 Room tone, wild lines, wild sound, ambience, specifics

- Room tone: 30 seconds minimum of the room with everyone silent, in every location and every setup where the furniture, the lamps or the air conditioning changed; the dialogue editor fills every cut and every removed breath with it. The one thing crews skip and the one thing that makes a cut audible. Call it as "room tone, 30 seconds, nobody move", and record it with the same mic in the same position.
- Wild lines: lines re-recorded on set without the camera rolling, immediately after the take, to replace a line spoiled by a plane or a clatter; closer and cleaner than ADR because the room and the performance are the same.
- Wild sound: specific sounds recorded on set without picture, close, clean, several takes (the door of the hotel room, the espresso machine, the gravel, the sea from this balcony, the wrist-flick of a watch clasp). This is the foley references list (11.3): record the real thing while you are in the real place.
- Ambience: two to five minutes of stereo (ORTF or mid-side) ambience per location, at the hour the scene is set: a Jaipur courtyard at dawn has birds and pigeons and a distant temple bell; a Dubai Marina balcony at night has traffic and air conditioning. Library ambience of "Indian street" is Delhi 2009 and sounds like it.

### 10.7 Wind, interior acoustics, monitoring, levels, 32-bit float

- Wind protection: foam for interiors and light breezes, a furry windjammer over a blimp for exteriors; a lav gets a fur Overcover. Wind noise is low-frequency flutter the mic capsule cannot survive; a high-pass filter at 80 to 120 Hz on the recorder helps, but there is no post fix for a capsule overloaded by wind.
- Treating a hotel room: hard floors, glass and parallel walls give flutter echo (a rapid ringing between parallel hard surfaces) and a boxy 300 Hz ring; close the curtains, pull the duvet off the bed and hang it on a C-stand behind the subject, put the sofa cushions on the floor on the camera side, turn the air conditioning off for each take (the number one noise source in India and the Gulf; record it in the room tone and turn it back on between takes), and keep the mic close. Sound blankets (furniture pads) on two stands behind the camera are the kit answer.
- Monitoring: closed-back headphones on the recordist and a feed to the director; Sony MDR-7506 and Sennheiser HD 25 are the standards because they are flat enough to hear the problems and sealed enough to hear them over the room. Listen for the handling noise, the hum and the rustle; a meter cannot.
- Levels: with 24-bit fixed-point recording set the gain so dialogue peaks sit around minus 12 to minus 6 dBFS, with an average near minus 18 to minus 20; leave the headroom, because a shout from a presenter at minus 2 clips the next take.
- 32-bit float: the recorder stores each sample as a floating-point number with a huge range, so a signal that would clip in 24-bit is held above 0 dBFS and can be pulled down in post without distortion, and a quiet recording can be raised without the noise floor following. It removes the gain-setting risk for small crews. It does not fix a mic too far from the mouth, a bad room or a wind-blown capsule, and the NLE or DAW (digital audio workstation) must import it as float (Premiere, Resolve, Pro Tools and Reaper all do as of 2026).
- Fixture noise: for dialogue takes, set COBs and panels to silent or smart fan modes (the Evoke 5000B quotes 44 dB(A) in smart mode; some heads lose output in silent mode, so meter after switching), and keep ballasts, control boxes and dimmer packs 5 m or more from the boom.

### 10.8 Launch events: press feed, desk split, room mics

For a launch, agree three feeds with the AV (audio-visual) company before the run of show (the minute-by-minute event schedule): a press feed (a mult box, which splits one desk output into many XLR line outputs, for TV and creator crews); a multitrack split from the front-of-house desk (the main console mixing for the audience) to the recap recorder (over Dante audio networking or USB), so speeches arrive clean from the desk; and two room mics as an ORTF pair (10.1) for applause and atmosphere. Get the venue's dB(A) limit and curfew in writing before the run of show; ballroom limits are set per venue, and India's 10 pm loudspeaker rule (6.11) applies outdoors.

## 11. Post sound: dialogue, foley, ambience, design

### 11.1 Dialogue editing

The dialogue editor's sequence: choose the best mic per line (boom first, lav where the boom is phasey or distant), conform (rebuild the edit's audio from the original recordings against the locked picture), split into tracks by character and by mic, fill every gap with room tone, fade every edit (2 to 10 frames), remove clicks and mouth noise, soften breaths and keep them (a breathless voice reads as synthetic), match the tonal colour of lav and boom with EQ, and then and only then run noise reduction. Noise reduction tools as of October 2026: iZotope RX 12 (launched 29 April 2026 per Mix magazine's launch report, succeeding RX 11, which many post houses still run; Advanced, Standard and Elements tiers; the rebuilt Dialogue Isolate separates speech from background with a neural network, Spectral De-noise learns a noise profile, De-reverb, Mouth De-click, Breath Control, Ambience Match, Scene Rebalance and the Stems View that splits a mix into dialogue, music and effects) and Adobe Enhance Speech in Premiere Pro and Audition 2026 (one slider in the Essential Sound panel on a Dialogue clip; rebuilds the voice as if recorded in a booth). Their limits: Enhance Speech at full strength produces a dry, processed, slightly synthetic voice with the room removed entirely, which is wrong for any scene where the location is the point (a hotel film) and right for a founder VO recorded in a car; use the mix slider at 30 to 60 percent. Dialogue Isolate at heavy settings leaves "underwater" artefacts on sibilants and in pauses; apply it at 40 to 70 percent, keep a little of the original, and compare with the bypass at mix level, because what sounds clean in solo often sounds dead in context. Neither tool fixes a clipped or wind-destroyed recording.

### 11.2 ADR

ADR (automated dialogue replacement, originally "looping") re-records lines in a studio to picture. For a single-language brand film it is the last resort, because a founder re-reading a line in a booth rarely matches their on-set performance and the audience hears it. Prefer wild lines (10.6) on the day, then a VO rewrite that covers the shot, then ADR matched to the on-set mic and to the room's impulse response (a recording of how the room answers a click or sweep, loaded into a convolution reverb such as Altiverb so the dry studio line takes on the room). Language versions are a different and weekly job: many national Indian TVCs (television commercials) record talent and celebrity dialogue in a Mumbai dubbing studio even when sync sound was taken (14.5).

### 11.3 Foley

Foley is sound performed to picture in a studio by a foley artist with props: footsteps, cloth, hands on objects. What to foley in a brand film: the sounds that carry the material story of the product and the place, because production sound almost never captures them cleanly. A list for luxury: fabric (silk, cashmere, linen each rustle differently), footsteps on marble and on teak and on gravel, a glass set on stone, a cork or a cap, a clasp or a zip, a page turn, a door that closes with weight (a Bentley thunk and a hotel door are both brand sounds), water on skin, the hiss of an espresso machine, cutlery on porcelain. These are recorded close with a small-diaphragm condenser, layered two or three deep (a step is heel, sole and cloth), and mixed at a level the audience feels without consciously hearing. Foley studios exist in Mumbai (the film industry keeps several busy) and in Dubai Studio City; a day with an artist and a recordist covers a 90 second brand film with time to spare. Wild sound from the shoot (10.6) is the cheaper half of this; many brand films need no studio foley if the recordist did the list on the day.

### 11.4 Ambience beds

An ambience bed is a continuous background (the room, the city, the sea) that runs under a scene so that cuts between takes and camera angles do not change the world. Build it from the stereo ambience recorded on location (10.6), looped with crossfades at least 2 seconds long and no audible repeat within the scene length; add a second layer for specifics (a bird, a distant car) placed by hand where the picture suggests them; keep the bed 20 to 30 dB under dialogue; let it change at a scene cut with a short crossfade so the viewer feels the move from lobby to pool.

### 11.5 Sound design: whooshes, hits, risers, textures, subs, and restraint

The trailer vocabulary: a whoosh (air moving, used on camera moves and transitions), a hit (a low impact that marks a cut or a reveal), a riser (a rising tone or noise that builds tension to a cut), a texture (a continuous tonal or noise layer that colours a scene), a sub (a sub-bass drop or boom under a hit). All of it is easy to buy (Boom Library, Pro Sound Effects, Artlist and Epidemic sound effect catalogues) and easy to overuse. Restraint rules for the house:

- One hit per film, on the single most important reveal, or none. Every reveal with a hit reads as a car dealership advert.
- No whoosh on a cut unless something in the frame moves fast; whooshes on static product cuts are the 2015 YouTube tell.
- Risers only into a real change (a cut to black, a reveal), and never more than once in 30 seconds.
- Subs only on the cinema or OOH (out-of-home: screens in public places) deliverable; on the social cut they are inaudible and steal headroom (9.1).
- A texture is a replacement for music and plays alone; a room tone with a slight tonal drone under a slow hotel film is more expensive than a piano bed.

The Ben Burtt principle of grounding: Burtt (sound designer of Star Wars, 1977; E.T., 1982; WALL-E, 2008) built fantastical sounds from recordings of real things (the lightsaber from an idling projector motor and the hum of a broken television, Darth Vader's breath through a scuba regulator), because the ear believes a sound that has a physical origin and rejects a purely synthetic one. He also used absolute silence before the seismic charge in Attack of the Clones (2002) to make the blast feel louder. For brand sound this means: build a "luxury" transition sound from a recorded object (a silk sheet pulled over a table, a cabinet door), processed lightly; the loudest moment in the film is made by the silence before it.

The contested position: trailer houses and performance-marketing editors argue that hits and risers lift retention on short-form and that restraint loses the first-second battle. The house follows restraint for brand film and allows one hit and a riser on performance cuts, tested against a silent-hook version (14.2), because the luxury audience punishes the trailer vocabulary and the data on the house's own cuts decides the rest.

Native audio from generated video (Veo 3, Sora 2, Kling) usually carries generic music, smeared consonants and a room that does not match the picture. Strip it and rebuild with recorded foley, ambience and VO (22-ai-era-craft-and-generative-tools.md, section 2.3).

### 11.6 Voice-over casting, sessions and rights

- Usage: a VO fee is licensed by medium (digital organic, paid social, TV, radio, cinema, OOH screens), territory and term (commonly one year, renewable), with perpetuity as a priced buyout (a one-off fee for all agreed uses). Write the terms on the purchase order, because a TV airing of a digital-only read is a breach. Rates are quoted per script and usage and are not published.
- Session: 48 kHz 24-bit WAV, a large-diaphragm condenser (a studio microphone with a capsule about 25 mm across, detailed and warm close up; Neumann U 87 or TLM 103) at 15 to 20 cm with a pop filter, in a treated booth. Get three passes per line (as written; warmer and slower; quicker), plus wild takes of the brand name and the sign-off line, and slate each take by voice.
- Remote direction: Source-Connect, ipDTL or Cleanfeed carry a broadcast-quality line between studios, so a Dubai creative director can direct a Mumbai artist live.
- Contract clause: the artist's voice may not be used to train or clone a synthetic voice without a separate written licence and fee (the disclosure rule in section 16; voice rights in 22-ai-era-craft-and-generative-tools.md, section 7.4).

## 12. Music: sourcing, licensing, editing to picture

### 12.1 Needle drop, library, composed

| Route | Cost | Lead time | Ownership | Use |
|---|---|---|---|---|
| Needle drop (an existing commercial recording) | Highest; quoted per use, territory and term: lakhs of rupees for small catalogue tracks, crores (a crore is 10 million rupees) or hundreds of thousands of dollars for global hits; unknown until asked | 4 to 8 weeks | Licensed for the agreed term; needs two licences (12.2) | A statement about taste: the one track that could only be this brand |
| Library or production music (pre-cleared catalogues licensed by subscription or per track) | Lowest | Same day | Licensed under the platform's terms (12.3) | Social volume, scratch tracks, beds where the sound design leads |
| Composed (a composer writes to picture) | Between the two | 2 to 4 weeks | Owned through a buyout or assignment (15.3) | The house default for a brand film above the social tier; can become the sonic identity (section 15) |

The risks by route: a needle drop that misses becomes a cliché (the piano cover of a pop song); library music is what the audience has heard under a thousand other brands, and the stock "inspiring corporate" bed is its tell. AI-generated music (Suno, Udio, Eleven Music) is for temp and pace references only, unless the provider grants a commercial licence with indemnity and the client signs off in writing. A sonic logo or brand theme is never AI-generated, because purely machine-made output is not protected by copyright in the US (Thaler v Perlmutter, D.C. Circuit, 2025) and so cannot be owned (22-ai-era-craft-and-generative-tools.md, sections 2.3 and 7.1).

### 12.2 Licensing: sync, master, PRO, ISRC, India and the Gulf

Every recording carries two copyrights: the composition (melody and lyrics, owned by the songwriter or their publisher) and the master (the specific recording, owned by the label or the artist). A sync licence (synchronisation: the right to set the composition to picture) comes from the publisher; a master use licence comes from the label; both are needed for a needle drop, and Meta's music guidelines state that use of music for commercial or non-personal purposes is prohibited unless appropriate licences are obtained. Library platforms bundle both. A PRO (performing rights organisation) collects royalties for public performance and broadcast of compositions on behalf of writers and publishers; an ISRC (International Standard Recording Code) is the 12-character identifier of a recording used for tracking plays and Content ID (YouTube's automated rights-matching system).

India: the Copyright Act, 1957 (as amended in 2012) governs. IPRS (the Indian Performing Right Society, founded 1969) is the registered copyright society for authors, composers and publishers of musical and literary works and collects performance and communication-to-the-public royalties; sync for a specific film or advert is cleared directly with the publisher or label, and IPRS plays no part in it. PPL India (Phonographic Performance Limited) handles public performance of sound recordings for its member labels. Section 31D statutory licensing covers radio and television broadcast of works and never clears an advert. Practical reading for Mask360: a Bollywood or regional hit for a campaign is cleared with the label (T-Series, Sony Music India, Saregama, Zee Music, Tips) and the publisher, on a quote; the 2012 amendment gave composers and lyricists an inalienable right to royalties, so the paperwork names them.

The Gulf: the UAE's Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights governs. Collective management arrived late: the Ministry of Economy granted the first music collective management licence to the Emirates Music Rights Association (EMRA) in April 2025 and a second to Music Nation (which announced partnerships with BMI and SoundExchange); the Emirati Musicians' Association also holds a ministry licence. Under the ministry's guide, any business that uses music in its operations (hotel lobbies, restaurants, retail, gyms, events) must hold a licence from a ministry-approved CMO (collective management organisation: a body that licenses and collects on behalf of many rights holders) before 1 December 2026, with exemptions for education, government, national occasions and private non-commercial celebrations. For Mask360's hospitality and retail clients this changes the brief for lobby playlists and event sound from December 2026: confirm the venue's CMO licence in writing before a launch event. Sync for a campaign is still cleared with the rights holders directly, as in India. Saudi Arabia's SAIP (Saudi Authority for Intellectual Property) regulates; needle drops for Riyadh campaigns go through the same label and publisher route. Contract wording for talent and music: 24-business-of-creative-and-agency-operations.md, sections 4.10 and 14.3.

### 12.3 Library platforms and their licence tiers (as of October 2026)

Verified from each platform's own pages where they load; prices change often and some tiers are quote-only, so confirm at purchase.

| Platform | Tiers as shown | What the tier covers | Notes for an agency |
|---|---|---|---|
| Artlist | AI Starter $19.99 monthly or $11.99 on annual; AI Core $39.99 or $23.99; AI Creator $69.99 or $41.67; Max, Max Business, Pro and Enterprise exist with details on request; third-party reviews in 2026 quote the Music and SFX Social plan at about $9.99 a month and Max at about $39.99 on annual billing | Every paid plan states "licence covers commercial use"; the Social tier covers one channel per platform; Pro and Max tiers are the ones that cover client work and paid distribution | Artlist's model licenses each downloaded asset for the content it went into in perpetuity, which is why it is the agency default: a client's film stays cleared after the subscription ends |
| Epidemic Sound | Creator, Pro, Enterprise (Business plan linked in the footer); prices were not rendered on the pricing page; third-party reviews quote Personal at about $9.99 and Commercial at about $49.99 a month | All plans: unlimited downloads, copyright protection, plugins; ad campaigns require Pro or Enterprise; public bodies and NGOs go to Enterprise; Enterprise has a 12-month minimum; monthly and yearly plans have no prorated refund | Coverage attaches to channels you register (Content ID whitelisting); confirm in writing which plan keeps client content cleared after cancellation, because the public page does not say |
| Musicbed | Individual (web and podcast, social up to 1 million followers), Business (adds client and brand work, clients up to 250 employees), Enterprise (clients of any size, broadcast, cinema and festival, VOD (video on demand), OTT (streaming services) and CTV (connected TV), games, celebrities over 1 million followers); prices behind "view pricing", third-party June 2026 checks quote Solo $16.99, Plus $49, Pro $99 a month | Tiered by use and by client size | The catalogue is artist-led (real bands and composers) and sits a tier above the others in taste; the Enterprise tier is the only one that covers broadcast |
| Audio Network | Per-track licences priced by media, territory and term, plus subscriptions; the licensing page did not load in this session | | The broadcast-grade catalogue; licences for TV and cinema in India and the Gulf are quoted by territory |
| Universal Production Music, Extreme Music, APM | Per-use and blanket deals for broadcasters and large agencies | | For TV spots in India and the Gulf the media agency often already holds a blanket |
| Hoopr (a GSharp Media product, India-focused) | Prices not shown on the home page (hoopr.ai, October 2026) | Tracks licensed directly from artists and cleared for YouTube, Instagram and other platforms; each download carries a licence certificate tied to the registered channel; Hoopr Smash handles brand-campaign licensing and rights management | Confirm the tier covers paid media and client channels; for Bollywood and regional catalogue, the label licensing desks (Saregama, T-Series, Sony Music India, Zee Music, Tips) quote per use |

Rule: the licence must cover the channel (organic social, paid social, OOH screens, broadcast, cinema), the territory (worldwide for anything on the internet), the term (perpetual for a brand film), and the client (an agency plan that covers the agency's own channels does not cover the client's). File the licence PDF with the master in the project archive (16-editing-colour-grading-and-delivery.md, section 5).

### 12.4 Editing music to picture

- Tempo: find the BPM (beats per minute) of the track (Resolve and Premiere show it on analysis; or tap it); a 90 second film at 120 BPM has 180 beats and 45 four-beat bars, so the structure is planned in bars.
- Cutting on the beat lands the cut with the music and reads as energetic; cutting just off the beat (two to four frames after) reads as natural and human, because the eye and ear want the picture to follow the sound. Luxury cuts off the beat more than on; the hero reveal lands on the downbeat of a phrase.
- Phrases: popular and library music moves in 2, 4 and 8 bar phrases; a cut to a new scene on the first beat of an 8 bar phrase feels inevitable; a cut in the middle of a phrase feels wrong unless the picture explains it.
- Stems: request the track as stems (drums, bass, melody, pads, vocals as separate files); the editor can drop the drums for the first 20 seconds, keep a pad under dialogue, and bring the full mix on the reveal, which fits the music to the film. Every library platform above delivers stems on the better tiers; composers deliver them by default.
- The breath before the music starts: open on room tone and a single real sound (a door, a wave, a footstep) for one to three seconds before the first note; the music then arrives as an event. Films that start on music at frame one feel like adverts because every advert does it.
- Ending: music resolves on or just before the end card, with the last sound in the film a real one (the clasp, the door).
- Edit the music at the sample level with crossfades on zero crossings (points where the waveform passes through silence, so the edit makes no click); a music edit should be inaudible to the composer.
- Motion-specific rules: 13-motion-graphics-and-3d-production.md, section 14.3; music-driven and picture-driven cuts: 16-editing-colour-grading-and-delivery.md, section 3.2.

### 12.5 Temp love, MFN, options and soundalikes

- Temp love: an editor cuts to a famous track, the client falls for it, and the clearance quote kills the budget or the schedule. House rule: temp only with music the job can clear, and show a cut on the intended track before any client approval.
- MFN (most favoured nation): the publisher and the label each require terms no worse than the other side gets, so a needle drop costs about twice the higher of the two quotes.
- Options: ask for pre-priced extensions of term, territory and media inside the first deal, because a renewal after a campaign succeeds is quoted at the new value.
- Soundalikes: briefing a composer to copy a recognisable melody, arrangement or voice invites a claim. Midler v. Ford Motor Co. (9th Cir., 1988) and Waits v. Frito-Lay (9th Cir., 1992) found imitations of distinctive singing voices actionable. Brief tempo, instrumentation and texture from the reference, and leave its melody and vocal identity out of the brief.

## 13. Mixing and loudness

### 13.1 Dialogue first, then the order of work

Mix order: dialogue and VO levelled and cleaned (11.1), then music under it, then ambience, then sound design and foley, then the master chain. Everything is judged against the voice: the listener forgives a thin bed and never forgives a word lost. Reference level: monitor at a fixed, calibrated playback (about 79 dB SPL for near-field at minus 20 dBFS pink noise in a small room, 85 for a cinema stage) and switch to a phone speaker and cheap earbuds before signing off, because that is where the work plays.

### 13.2 Gain staging, EQ, compression, limiting, ducking, reverb, panning

- Gain staging: keep every track's nominal level around minus 18 to minus 20 dBFS so plug-ins operate in their design range and the bus has headroom; raise the whole mix at the end with the limiter, with every fader kept out of the red.
- EQ: high-pass dialogue at 80 to 100 Hz (male) or 100 to 120 Hz (female); cut boxiness around 300 to 400 Hz by 2 to 4 dB with a medium Q (the width of the EQ band; a higher Q is narrower); add presence at 3 to 5 kHz by 1 to 2 dB if a lav is dull; de-ess (reduce sibilance with a de-esser, a compressor that acts only on the "s" band) at 5 to 8 kHz. On music under dialogue, cut 2 to 3 dB around 1 to 4 kHz so the voice sits in the hole.
- Compression: on dialogue a ratio of 2:1 to 4:1, attack 10 to 30 ms, release 100 to 300 ms, 3 to 6 dB of gain reduction on peaks; two gentle stages beat one hard one. On music, little or none (the master is already compressed).
- Limiting: a true-peak limiter on the master set to a ceiling of minus 1 dBTP (minus 2 for Netflix-style specs and for anything that will be re-encoded hard), with the input gain set to reach the integrated target (13.4). A limiter working more than 3 to 4 dB on peaks is audible as pumping; fix the balance upstream.
- Ducking: an automatic level drop on the music keyed from the dialogue (a sidechain compressor, which compresses one track when triggered by another, or the auto-ducking in Premiere's Essential Sound and Resolve's Fairlight), 6 to 10 dB with a 200 to 500 ms release; then ride the fader by hand across the film because automatic ducking breathes.
- Reverb and space: a short room reverb (0.3 to 0.8 s) on ADR and studio VO to match the set; the dry studio voice over a location picture is the cheapest sound in brand film. Never reverb the production dialogue.
- Panning: dialogue, VO and the lead instrument in the centre; ambience and pads wide; a foley specific where its source is in frame. Check the mono sum.

### 13.3 Dynamic range and LRA

LRA (loudness range) is the statistical spread of short-term loudness across the programme, in LU (loudness units, equal to dB). A tight LRA (4 to 8 LU) suits social and mobile; a wider LRA (10 to 18) suits cinema and home theatre. Netflix recommends a full mix between 4 and 18 LRA with dialogue at 10 LRA or less. For Mask360 deliverables: social cuts at LRA 5 to 8, the master brand film at 8 to 12, the cinema version wider.

### 13.4 Loudness standards (as of October 2026)

Loudness is measured by the ITU-R BS.1770 algorithm (K-weighted, meaning filtered to approximate the ear's sensitivity, and gated, meaning silence and very quiet passages are excluded from the average; current revision BS.1770-5) in LUFS (loudness units relative to full scale; LKFS is the same unit under the ITU name). Integrated loudness is the gated average of the whole programme; true peak (dBTP) is the inter-sample peak after oversampling, which is what clips a lossy encoder.

| Destination | Integrated target | True peak ceiling | Source and notes |
|---|---|---|---|
| EBU R 128 broadcast (Europe, and the UAE broadcasters: MBC, Dubai Media Incorporated, Abu Dhabi Media) | minus 23.0 LUFS, tolerance plus or minus 1.0 LU where the target is impractical (live), plus or minus 0.2 LU for QC (quality control) | minus 1 dBTP in production; lower for some distribution codecs (EBU Tech 3344) | EBU R 128-2023 (version 5, November 2023); measurement per BS.1770 with the gate and EBU Tech 3341; adverts and promos follow supplement R 128 s1, streaming R 128 s2, cinematic content R 128 s4 |
| ATSC A/85 (US and ATSC-aligned broadcast) | minus 24 LKFS, plus or minus 2 dB (the historical A/85 value) | minus 2 dBTP (A/85:2026-07, section 6; measurement tolerance about plus or minus 0.5 dB) | A/85:2026-07 approved 8 July 2026 and announced 15 July 2026 as the first comprehensive revision since 2013; adds a streaming loudness annex (Annex L) and a one-page quick reference (Annex M); verify the values in Annex M for any US delivery |
| Indian broadcast (JioStar, Zee, Sony, Sun and regional networks) | per the channel group's delivery spec: commonly minus 24 LKFS plus or minus 2, or minus 23 LUFS | as the channel's sheet states | No Indian loudness standard number could be verified; the channel's sheet governs (16-editing-colour-grading-and-delivery.md, section 12.9) |
| Netflix | minus 27 LKFS dialogue-gated (measured with dialogue intelligence per BS.1770-1), plus or minus 2 LU, so minus 25 to minus 29 | at or below minus 2 dBFS true peak | Netflix Sound Mix Specifications and Best Practices; LRA 4 to 18 full mix, dialogue 10 or less |
| YouTube | about minus 14 LUFS (the widely reported normalisation point; YouTube's upload help page specifies AAC-LC, 48 kHz, 384 kbps stereo and 512 kbps 5.1 and states no loudness target) | minus 1 dBTP | YouTube turns louder uploads down and does not raise quiet ones above their peak-limited level |
| Spotify | minus 14 LUFS (Normal); Loud setting minus 11, Quiet minus 19; recommends mastering at about minus 14 | minus 1 dBTP; below minus 2 if the master is louder than minus 14 | Spotify for Artists, loudness normalisation; albums normalised as a whole |
| Spotify audio ads | minus 16 LUFS plus or minus 1.5 | not stated | ads.spotify.com, via 26-platform-and-format-specs-2026.md, sections 3.8 and 5.4; an ad mastered to the music target plays about 2 LU louder than the track it interrupts |
| Apple Music | about minus 16 LUFS under Sound Check (the figure practitioners use; Apple's Digital Masters document describes Sound Check without stating the number) | minus 1 dBTP | Apple Digital Masters guidance: 24-bit sources at native sample rate |
| Apple Podcasts | minus 16 LKFS, plus or minus 1 dB | minus 1 dB FS | Apple Podcasts audio requirements; BS.1770-5; apply loudness before encoding |
| Instagram and TikTok | no published spec; practical target minus 14 LUFS integrated with LRA 5 to 8; some editors deliver Reels at minus 12 to minus 10 so the hook survives the platform's own processing | minus 1 dBTP | Both platforms re-encode and apply their own normalisation; test by uploading a private post and comparing against a reference |
| Cinema (DCP, the Digital Cinema Package delivered to theatres) | mixed to a calibrated stage at 85 dB SPL reference, measured for trailers in Leq(m) (equivalent continuous level, M-weighted, the measure of Dolby's cinema loudness meter): 85 dB Leq(m) maximum under the standard of the US Trailer Audio Standards Association (TASA) | | The cinema mix is a separate booking; never upload the cinema mix to social |

Reason the numbers matter: a brand film mastered at minus 8 LUFS for "impact" is turned down by every platform to minus 14, so it plays quieter than its competitor's minus 14 master whose peaks were never crushed, with less dynamic life. Mix to the target; the platform rewards it. Platform audio specs in full: 26-platform-and-format-specs-2026.md, sections 5.3 and 5.4.

### 13.5 Loudness metering tools

Youlean Loudness Meter 2 (free, with film, TV and gaming presets covering ITU-R BS.1770-4, EBU R128 and ATSC A/85; Pro at $49, shown at $39 in October 2026, adds streaming presets for Spotify, YouTube, Apple Music and Netflix, a dynamics graph and export), Waves WLM Plus (a loudness meter with a true-peak limiter and a correction function, sold inside the Waves subscriptions), DaVinci Resolve 21 Fairlight's loudness meters (standard chosen from the options menu; blue in spec, yellow within tolerance, red over), Adobe Premiere Pro and Audition's Loudness Radar (the TC Electronic radar display, in the Essential Sound panel's auto-match and as an effect), iZotope Insight 2, and Nugen VisLM for broadcast QC. The house workflow: the editor checks integrated and true peak on the Resolve or Premiere meter at picture lock; the mixer delivers a loudness report (Youlean PDF or Nugen) with every master; the QC pass reads the report against the table above.

## 14. Sound for social

### 14.1 Sound off first

A large share of feed video is watched muted, in public, with captions; the exact share is a platform figure that changes by surface and is rarely published, so the house designs every social cut to work twice: once silent (captions, on-screen type, a picture that explains itself; see 26-platform-and-format-specs-2026.md for safe areas and caption specs) and once with sound. The test is to watch the cut muted on a phone before the sound pass begins. Burned-in captions in the brand typeface, sentence case, two lines maximum, placed above the platform UI (user interface) zone. Sound-on and sound-off behaviour by platform: 17-short-form-social-and-platform-craft.md, section 1.7; captions as access: 11-accessibility-and-inclusive-design.md, section 10.7.

### 14.2 The hook sound in the first second

The first second decides the swipe. A sound hook is a single recognisable real sound (a clasp, a pour, a heel on marble, a door) or a voice saying something specific, placed at frame one, before the music. The trailer alternative (a riser into a hit at one second) works on performance cuts and reads cheap on brand; test both. Keep the first second's audio at the mix's loudest level (short-term loudness near the integrated target plus 2 LU) because the platform's own normalisation acts on the whole file and a quiet start sounds like nothing (short-term loudness is measured over a sliding 3 second window, per EBU Tech 3341). Sound design for feeds: 17-short-form-social-and-platform-craft.md, section 6.7.

### 14.3 Trending audio and licensing risk for brands

Instagram and TikTok license popular music for personal and creator accounts to use in Reels and TikToks; business accounts (Instagram professional accounts set to Business, and TikTok Business accounts) are limited to a commercially cleared library (the Meta Sound Collection, which Meta's help centre describes as over 14,000 royalty-free songs and sounds, and TikTok's Commercial Music Library). Meta's help centre states the main licensed library is for personal, non-commercial use, and Sound Collection tracks are cleared only inside Meta's own apps, so the same track on YouTube or the client's website needs its own licence. A trending track that is greyed out on a business account is greyed out because the licence does not cover commercial use, and posting it another way (a creator account, a screen recording, an edit with the track baked in) breaches the platform's music guidelines and the rights holder's licence. Consequences range from muting and removal to legal claims from rights holders, and Meta can mute a post later when a licence lapses or is renegotiated. Paid promotion of a post with unlicensed music is the highest risk, because it is advertising. House rule: brand accounts use the commercial library, licensed library music (12.3), original audio, or a needle drop cleared in writing; influencer partners post trending audio on their own creator accounts under their own agreements, and the brand reposts only with the licence confirmed.

### 14.4 Original audio, VO styles, the silence move

- Original audio: a brand's own sound (a composed theme, a recorded VO, a sound logo) that other accounts can reuse; it is attribution and reach in one, and it is the only audio the brand controls.
- VO styles in 2026: the low, close, unhurried voice recorded on a large-diaphragm condenser 10 cm from the mouth (the podcast voice), the founder's own voice recorded on a lav in their own space (authentic, light cleanup only), the whispered ASMR read for beauty and food, and the dry British or Gulf-accented English read for luxury property. The house avoids the "epic trailer" voice and the "smiling radio" voice; both are category tells. For bilingual markets, record Hindi and English (or Arabic and English) as separate full reads, and treat subtitle timing as part of the sound design (14.5). Booking, sessions and rights: 11.6.
- The silence move: a cut that drops all sound (music, ambience, everything) for 8 to 20 frames before a reveal or a line. On a feed it stops the thumb because the absence is more unusual than any hit; in a brand film it is the most expensive moment available at no cost. Use once per film.

### 14.5 Language versions

A national Indian campaign commonly ships in Hindi and English plus regional versions (Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati); a Gulf campaign ships in Arabic and English. For the Gulf, the Arabic register is a casting decision: Modern Standard Arabic for government and formal voices, Khaleeji (the Gulf dialects, Emirati or Saudi) for local warmth, Egyptian or Levantine for pan-Arab entertainment reach.

- Write every version to the same duration and a similar syllable count, so it lands on the picture's beats.
- Mix a full stereo master, a dialogue stem and an M&E (music and effects without voice; 13-motion-graphics-and-3d-production.md, section 14.4; DME (dialogue, music and effects stems) delivery in 16-editing-colour-grading-and-delivery.md, section 12.1), so each language costs a VO session plus a remix.
- Cast native speakers per language and have a native reviewer at the session for the brand name and product terms.
- Version captions and supers with the audio, in the language's own script (Devanagari; Arabic right to left), timed to the new read.
- AI lip-sync dubbing (ElevenLabs Dubbing, HeyGen) is for social utility versions only, with the disclosure rule in section 16.

### 14.6 Music-free versions and religious occasions

Some Gulf clients, especially government-linked accounts, Islamic finance brands and Saudi-facing campaigns, ask for a version without musical instruments for Ramadan and religious occasions: voice, sound design, percussion, or a vocal-only bed in the nasheed style (unaccompanied devotional song). Confirm it in the brief and budget it with the M&E (14.5). Never run music under Quranic recitation or prayer imagery. The call to prayer already governs the sound schedule on location (18.2). Ramadan dates and tone by market: 17-short-form-social-and-platform-craft.md, section 5.5.

## 15. Sonic branding

### 15.1 Sound logos

A sound logo (audio mnemonic, sonic logo) is a 1 to 5 second sound that identifies the brand without picture. The references, with verified dates:

- Intel: the five-note "bong" (D flat, D flat, G flat, D flat, A flat: a perfect octave followed by a four-note sequence) composed by Walter Werzowa of Musikvergnuegen in 1994 for the Pentium launch, modified in 1999, remade in 2004 and again after the 2020 rebrand; heard in 130 countries by its tenth anniversary.
- McDonald's: the five-note "ba da ba ba ba" of "I'm lovin' it", music by Tom Batoy and Franco Tortora (Mona Davis Music) with vocals by Justin Timberlake, created by Heye & Partner of Unterhaching, launched in Munich on 2 September 2003 as "ich liebe es" and in the United States on 29 September 2003. The longest-running global McDonald's campaign.
- Netflix: the "ta-dum" introduced in 2015; Todd Yellin (VP of Product) led the process, Lon Bender designed the sound from his wedding ring knocking on a cabinet plus a slowed anvil and muted hits, and Charlie Campagna's reversed guitar recording supplied the tonal "blossom"; Hans Zimmer later composed the extended theatrical version for Netflix films in cinemas.
- Mastercard: "Sound on: Mastercard debuts sonic brand", 8 February 2019; a single melody built as a full sound architecture (sound logo, acceptance sound at the payment terminal and online checkout, ringtones, hold music, scores) and adapted across genres and cultures; it debuted in Grammy week in a campaign with Camila Cabello, with Mike Shinoda among the musicians involved. The reference for a sonic system, because the acceptance sound is heard millions of times a day at the moment of purchase.
- India: Airtel's signature tune by A. R. Rahman, composed around 2001 for the 2002 campaign, a simple five-note figure on the Carnatic raga Shankarabharanam, which Storyboard18 in 2025 credits with over 150 million downloads (a 2009 report said 60 million), the most downloaded mobile music of its time; Britannia's four-note jingle and Titan's Mozart Symphony No. 25 theme are the other two every Indian consumer can hum.
- Tata: there is no group-wide Tata sound logo on record as of October 2026. Tata Realty's Intellion Offices launched a sonic identity in April 2024, built by the Indian sonic branding studio BrandMusiq (a signature sound called MOGO and a long-form MOGOSCAPE scored for saxophone, trumpets and horns), and the Tata Neu super-app uses a calm sound motif in notifications and service calls. The lesson for Indian clients: a sonic identity can start at the business-unit level and earn its way up.

### 15.2 Sonic identity systems

A sonic identity is a system of parts: the sound logo (3 seconds), a brand theme (60 to 90 seconds, with stems), functional sounds (app notification, payment confirmation, lift and lobby loops for hospitality), hold music, a VO voice and reading style, and the rules (where it plays, at what level, what it never does). Document it like a visual identity: a sonic guideline with audio files, a pitch and tempo reference, instrumentation, a prohibited list, and usage per touchpoint. For a hotel group the system includes the arrival sound in the lobby and the spa playlist curation rules; for a jeweller the sound of the box. Sound identity inside the wider brand system: 18-brand-strategy-and-identity-design.md, sections 4.9 and 10.5; sonic tokens in a design system: 07-design-systems-and-tokens.md, section 11.2.

### 15.3 How to brief a composer

Give: the single idea of the brand in one sentence (design-taste, section 4); three reference tracks with what to take from each (the tempo of one, the instrumentation of another, the restraint of the third) and what to avoid; the picture, locked or near-locked, with timecode notes on the beats that matter (the reveal at 00:42, the silence at 01:10); durations needed (3 second logo, 6, 15, 30, 60, 90 second cuts, a 2 minute loop for events); deliverables (48 kHz 24-bit stems, alternate mixes without the melody for VO, a mono check); the territories and term of the licence (a buyout, or a work-for-hire assignment under which the commissioning party owns the master and composition from creation, with the composer's PRO registration handled so that broadcast royalties flow correctly); two rounds of revisions and the dates. Pay for a demo if the composer is new to the house. Replace each adjective in the draft brief ("premium, elegant, modern") with a reference track and the reason it was chosen.

### 15.4 The house position on sonic restraint

The expensive sound is quiet, specific and real: one instrument, one recorded object, a silence, a voice close to the ear. Full orchestral beds, trailer hits, the four-chord "inspirational" piano, and the EDM drop belong to categories that need to shout. Mask360's clients (hospitality, jewellery, fashion, property) are bought by people who do not need to be shouted at; the sound should behave like the staff of a good hotel. Practically: a sonic logo of two or three notes or a recorded object, a theme that can be played on one instrument, and sound design built from the material world of the brand (6.3 and 11.3). See design-taste, section 2, on slowness and material honesty: the audio equivalents are tempo under 100 BPM and acoustic sources.

### 15.5 Who builds it and how it is tested

Specialist studios: amp sound branding (Berlin; publisher of the annual Best Audio Brands ranking), MassiveMusic (Amsterdam), Man Made Music (Joel Beckerman, New York), Sixième Son (Paris), and BrandMusiq (founded by Rajeev Raja, India; built the Intellion identity in 15.1). Testing: play the mnemonic without picture to a sample of the target audience and ask which brand it is (unaided attribution), and repeat after each flight of media. A sound logo that has not reached clear attribution after a year of airtime is working as a jingle; fix the media plan first (more frequency, the same placement on every end card), then the sound.

## 16. Tools as of October 2026

| Tool | Version as of October 2026 | Role in the house | Notes |
|---|---|---|---|
| Avid Pro Tools | 2026.4 (released 30 April 2026: Track Pin, MPEG-H (an immersive broadcast audio codec) authoring, Dolby Headphone Personalization); 2026.4.1 in July 2026 added Apple M5 support; Intro is free, Artist, Studio and Ultimate are subscriptions | The post house standard for mixing; what the Mumbai and Dubai mix stages run | Deliver sessions and AAF (Advanced Authoring Format, the file that carries an edit's audio tracks and fades to the mixer); the house does not need to own it |
| Apple Logic Pro | 12 (released January 2026 with Apple Creator Studio; 12.4 maintenance update current in October 2026); $199.99 standalone or inside Creator Studio at $12.99 a month | Composer scratch and music editing on Mac | Stems and tempo maps for the edit |
| Reaper | 7.84 (28 October 2026) | The flexible, cheap DAW for sound design and batch processing | Scripting for loudness batch checks |
| Adobe Audition | 2026 | Dialogue cleanup and VO editing for Premiere-based editors | Enhance Speech, Loudness Radar, spectral display |
| DaVinci Resolve Fairlight | Resolve 21 (21.0.1 on 25 June 2026; Fairlight gained track folders) | The edit-and-mix in one application; loudness meters per standard, Dolby Atmos in Studio | The house default for social and brand film mixes under 3 minutes |
| Adobe Premiere Pro | 2026 | Editing; Essential Sound panel for auto-ducking, Enhance Speech, loudness match | Export loudness checks via Loudness Radar |
| iZotope RX | 12 (launched 29 April 2026; RX 11 still common on mix stages); Elements, Standard, Advanced | Dialogue repair: Dialogue Isolate, Spectral De-noise, De-reverb, Mouth De-click, Breath Control, Stems View | Advanced for the mixer; Standard is enough for the editor |
| Waves | Subscription (Essential and Ultimate) and perpetual; WLM Plus for loudness | Meters, compressors, de-essers | |
| FabFilter | Pro-Q 4, Pro-L 2, Pro-C 2, Pro-DS, Pro-MB | The clean EQ, limiter, compressor and de-esser the house asks mixers to use on the dialogue bus | Pro-L 2 for true-peak limiting with platform presets |
| ElevenLabs | Free; Starter $6 a month; Creator $22; Pro $99; Scale $299; Business $990; Enterprise by quote (elevenlabs.io/pricing, October 2026); commercial licence from Starter; instant voice cloning from Starter and professional cloning from Creator | Scratch VO for timing and client approval, multilingual drafts, temp reads in Hindi and Arabic | Never a final VO for a client without disclosure and consent (below) |
| Descript | Free; Hobbyist ($16 on annual or $24 monthly); Creator ($24 or $35); Business ($50 or $65); Studio Sound, filler-word removal, transcription in 25 languages, custom voice clones on paid plans | Text-based editing of interviews and podcasts; fast rough cuts of founder interviews | Studio Sound is Enhance Speech-class processing with the same limits |
| Sound Devices, Zoom, Tentacle Sync, Deity | n/a | Capture | See 10.4 and 10.5 |
| Dialogue AI tools: Supertone Clear, Waves Clarity Vx, Accentize dxRevive, ElevenLabs Voice Isolator; Auphonic | Versions not verified for this file; check each maker's site | Fast dialogue denoise and restoration; Auphonic for automated levelling and loudness targets on podcast and VO deliverables | Same limits as 11.1: blend at partial strength and judge at mix level |

The disclosure rule for synthetic voice: a synthetic or cloned voice in client-facing work is disclosed to the client in writing before use, is never used to imitate a real person without that person's written consent, and is labelled where the audience could reasonably believe a human spoke. The legal floor: the EU AI Act's Article 50 transparency obligations (marking of synthetic audio in a machine-readable form by providers; disclosure of deepfakes by deployers, with a lighter duty for evidently artistic or creative work) apply from 2 August 2026 and were left on that date by the Digital Omnibus on AI, which law-firm summaries (Gibson Dunn, Jones Walker) report entered into force in late July 2026, which delayed the high-risk rules to December 2027 and gave providers of systems already on the market before 2 August 2026 until 2 December 2026 for the Article 50(2) machine-readable marking; any campaign that reaches EU audiences falls under them. India: the IT Rules amendment notified as G.S.R. 120(E) on 10 February 2026, in force from 20 February 2026, defines "synthetically generated information" (content artificially created or altered so that it appears authentic, excluding routine edits such as colour correction and translation) and requires platforms to label it prominently and embed provenance metadata where feasible; a further MeitY (Ministry of Electronics and Information Technology) draft of 21 April 2026 proposed a label visible for the whole duration of synthetic visual content, unconfirmed as notified at the time of writing. The UAE's 2021 copyright law and its personality-rights practice make an unconsented voice clone a liability there too. House practice: synthetic VO for scratch and for internal decks; for final VO, a human voice with a signed release, or a disclosed synthetic voice where the brief explicitly calls for it (an app's functional prompts, a multilingual utility video), labelled in the end card or the caption. See 22-ai-era-craft-and-generative-tools.md for the wider disclosure policy.

## 17. Reference tables

The kelvin, lighting-ratio, frequency-band and loudness tables live where they are explained: 1.2, 1.5, 9.1 and 13.4. The tables below collect values that are scattered across sections.

### 17.1 Diffusion, gel and ND stops

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
| Half CTO (Lee 205) | about half a stop (70.8 percent at daylight; plus 109 mired) |
| Quarter CTO (Lee 206) | about a third of a stop (79.1 percent; plus 64 mired) |
| Full CTB (Lee 201) | about 1.5 stops (34 to 35 percent; minus 137 mired) |
| Half CTB (Lee 202) | about 0.9 stop (53.2 percent at tungsten; minus 78 mired) |
| Quarter CTB (Lee 203) | about half a stop (70.5 percent at tungsten; minus 35 mired) |
| Single net | 1 stop |
| Double net | 2 stops |
| Lee 209 ND 0.3 | 1 stop |
| Lee 210 ND 0.6 | 2 stops |

### 17.2 Microphone choice by situation

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

### 17.3 Flicker-safe shutters on 50 Hz mains

On 50 Hz mains (India, the UAE, Saudi Arabia) discharge lamps, fluorescents, cheap LEDs, signage and many LED walls pulse at 100 Hz, so an exposure is safe when it is a whole multiple of 1/100 s. Shutter angle is the exposure time multiplied by the frame rate and by 360.

| Frame rate | Safe setting | Exposure | Notes |
|---|---|---|---|
| 25 fps | 180 degrees (or 360) | 1/50 s (or 1/25) | The house default for India and UAE deliverables |
| 24 and 23.976 fps | 172.8 degrees | 1/50 s | 180 degrees (1/48 s) beats slowly against the pulse |
| 30 and 29.97 fps (US-facing work) | 216 or 108 degrees | 1/50 or 1/100 s | 180 degrees (1/60 s) flickers on 50 Hz |
| 48 fps | 172.8 degrees | 1/100 s | |
| 50 fps | 180 degrees | 1/100 s | |
| 60 fps | 216 degrees | 1/100 s | |
| 100 fps | Any; each frame samples the same phase of the pulse | n/a | Frame-to-frame brightness holds while the mains holds 50 Hz; a rolling shutter can still show a static band, and grid drift can roll it slowly, so test |
| 120 fps and above | None | Shorter than 1/100 s | Replace practicals with high-frequency or constant-current fixtures, or test tungsten's slight ripple |

### 17.4 Light needed at the subject for an exposure

Incident illuminance from lux = 340 × T² ÷ (ISO × t) (1.1), at 1/50 s; values rounded.

| T-stop | ISO 800 | ISO 1600 | ISO 3200 | Typical job |
|---|---|---|---|---|
| T2 | about 85 lux | about 43 | about 21 | Night interiors, candlelight (2.16) |
| T2.8 | about 170 | about 83 | about 42 | Interviews, hospitality interiors |
| T4 | about 340 | about 170 | about 85 | Two-shot interviews, food |
| T5.6 | about 670 | about 330 | about 170 | Tabletop, product at 30 cm and over |
| T8 | about 1,360 | about 680 | about 340 | Jewellery and watch macro |
| T11 | about 2,570 | about 1,290 | about 640 | Deep-focus macro, stacked depth |

## 18. Checklists for the creative director

### 18.1 The light recce

- Sun: azimuth and altitude at call time, at the planned hero shot and at wrap, for the actual shoot date (Sun Seeker or PhotoPills, 3.1); which windows take direct sun and when (3.3).
- Practicals: every lamp in every room listed with its kelvin and a judgement of its CRI; a spectrometer such as the Sekonic C-800 SpectroMaster reads CCT and CRI on the spot and settles arguments with a hotel's engineering team. Note which practicals have dimmers and who controls them.
- Power: socket ratings (16 A in India), the venue electrician's name, the generator position agreed with sound (10.7), and the run from generator to set in metres of cable.
- Flicker: mains is 50 Hz in India and the UAE, so test practicals, signage and LED walls at the planned shutter and frame rate (5.7, 6.11).
- Permissions: haze (4.6), naked flame (2.16), rigging on heritage walls in Jaipur or Udaipur palaces (usually forbidden, so plan stands and weights), drones, and public-space exteriors (5.8).
- Climate: the summer midday outdoor work ban in the UAE and Saudi Arabia, fixture operating temperatures in shade and sun, time for cases to acclimatise between air conditioning and heat, IP ratings and RCCBs for monsoon and pool decks, and a weather day for smog or dust (5.8).
- Reference stills: one wide of each space at the planned hour, with the camera's white balance written on the frame.

### 18.2 The sound recce

- Noise inventory with a timetable: air conditioning (who can switch it off, and for how long a hotel will allow it in May), lifts, kitchens, laundry chutes, pool pumps, traffic peaks, construction hours, flight paths (Mumbai's approach paths cross dense suburbs on both sides of the airport), and the call to prayer, five times daily at times that shift with the date, which governs exterior dialogue scheduling in the Gulf and near mosques in Indian cities.
- Surfaces: count the hard parallel walls and glass; plan the treatment (10.7) and the blankets.
- Wild sound and room tone list per location (10.6), agreed with the director before the day and called on set by the first AD (first assistant director).
- Climate and crew: the summer midday break (5.8) moves exterior dialogue to dawn and dusk, when traffic, birds and the call to prayer may peak; plan the ambience and wild sound list for those hours, and the condensation wait for mics moved outdoors.
- Generator and vehicle positions marked on the floor plan, at least 30 m away and behind a building where possible.

### 18.3 Reviewing a cut for light

1. Where is the key in each shot, and does it stay on the same side of the face across the reverse (2.12)?
2. Is the ratio intended, and does it hold on a phone at half brightness in a lit room, with shadow detail above about 5 percent luminance (1.5)?
3. Is skin right on every complexion in the frame, with no grey fill and no green edge from a cheap practical (6.1, 5.6)?
4. Does every source have a motivation the audience could name (2.3)?
5. In generated frames: one shadow direction, matching catchlights, no unmotivated rim (section 7).

### 18.4 Reviewing a cut for sound

1. Watch it muted on a phone first (14.1); then on the phone speaker; then on headphones; then on monitors.
2. Read the loudness report: integrated, true peak and LRA against the destination (13.4).
3. Listen for the cuts: a change of room tone at an edit, a breath clipped, a lav rustle.
4. The first second: is there a real sound before the music (12.4, 14.2)?
5. Count the hits, risers and whooshes against the house limits (11.5), and check the silence move is used once at most.
6. Last sound: a real object or a resolved chord (12.4).

### 18.5 Brief language: from the feeling to the technical ask

A creative director gets faster and better results by translating a feeling into the parameter a DP, gaffer, editor or mixer can act on.

| What the room says | The technical ask |
|---|---|
| "It looks flat" | Raise the ratio to 3:1 or 4:1 with negative fill on the shadow side; add a kicker or a background light for separation (1.5, 2.9, 2.11) |
| "It looks like a webinar" | One large source from a motivated direction, the fill removed, a practical in the background, haze if the room allows (2.13) |
| "The skin looks dead" | Smaller, closer, more specular key; warm fill; check R9 and SSI of the fixture (1.3, 6.1) |
| "The product looks cheap" | Shape the highlight: strip softbox for one clean line, black cards for edges, no hot dots (6.5) |
| "The gold looks yellow" | Put a warm card in the reflection and check the fixture's SSI against daylight (1.3, 6.3) |
| "The voice sounds thin" | Use the boom over the lav, add 2 dB around 150 to 200 Hz, less noise reduction (11.1, 13.2) |
| "It sounds muddy" | Cut 200 to 500 Hz on voice, music and ambience one at a time, listening after each (9.1) |
| "The music fights the VO" | Duck the music 6 to 10 dB and cut 2 to 3 dB at 1 to 4 kHz on the music bus (13.2) |
| "It sounds like an advert" | Remove the hit and the riser, open on a real sound, end on a real sound (11.5, 12.4) |
| "It is quieter than the others on Instagram" | Check the master is at minus 14 LUFS integrated and minus 1 dBTP before raising anything (13.4) |

## Terms introduced

- 32-bit float: a recording format storing each sample as a floating-point number so that signals above 0 dBFS are retained and can be reduced in post without clipping.
- 3:1 rule: keep a second microphone at least three times as far from a source as the first to limit comb filtering.
- 5.1: six-channel surround (left, right, centre, LFE, left surround, right surround), the broadcast and streaming surround standard.
- AAF: Advanced Authoring Format, the file that carries an edit's audio tracks and fades to the mixer.
- Abaya: the black over-garment worn by many Gulf women.
- ADM BWF: a WAV file carrying Audio Definition Model metadata, the delivery format for Dolby Atmos masters.
- ADR: automated dialogue replacement; re-recording lines in a studio to picture.
- Ambience bed: a continuous background sound layer that runs under a scene to unify cuts.
- Ambisonic: a full-sphere recording format decodable to any speaker layout.
- Art-Net and sACN: protocols that carry DMX lighting control over Ethernet.
- ASC: the American Society of Cinematographers.
- AV company: the audio-visual contractor that runs sound, light and screens at an event.
- B-camera: a second camera covering the same take from another angle.
- Back light: a source behind the subject, high and opposite the key, that separates hair and shoulders from the background.
- Beadboard: expanded polystyrene sheet used as a cheap large white bounce; sold in Mumbai as thermocol.
- Beauty dish: a shallow metal reflector with a centre deflector, crisper than a softbox.
- Best boy and sparks: the gaffer's deputy, and the lighting electricians.
- Bi-colour: a fixture with warm and cool white emitter sets, tunable between them.
- Black wrap: matte black aluminium foil moulded over lamps to control spill.
- Blimp: a basket windshield around a microphone.
- Blue hour: the period after sunset and before sunrise when the sun is 4 to 6 degrees below the horizon and the sky is deep blue.
- Book light: a bounce followed by a diffusion frame in a V shape, giving a very large even soft source.
- Boom: a pole-mounted microphone held above the frame line.
- Bowens mount: the bayonet accessory mount most softboxes fit.
- BPM: beats per minute, the tempo of a piece of music.
- Bracketing: shooting several exposures at different levels of the same frame to merge later.
- Branchaloris: a real branch held in a beam to throw a leaf pattern.
- Broad and short lighting: keying the side of the face turned towards (broad) or away from (short) the camera.
- Butterfly (Paramount) lighting: key on the camera axis, high, producing a symmetrical shadow under the nose.
- Buyout: a one-off fee for all agreed uses of a work or a performance.
- BWF: Broadcast Wave Format, a WAV that carries timecode and metadata; polyphonic BWF holds several tracks in one file.
- Catchlight: the reflection of the light source in the eye.
- CCT: correlated colour temperature, the kelvin of the nearest black-body colour, quoted for LEDs and discharge lamps.
- Chiaroscuro: strong light and dark contrast with much of the frame in shadow.
- China ball: a paper lantern used as an omnidirectional soft source.
- Circled takes: the director's chosen takes, marked on the sound and camera reports.
- Clamshell: two stacked soft sources on axis, one above and one below the lens.
- CMO: collective management organisation, a body that licenses and collects royalties on behalf of many rights holders.
- COB: chip on board, an LED fixture with one dense emitter array that behaves as a point source.
- Colour temperature: the kelvin value of the black body whose colour matches a light source.
- Comb filtering: the hollow tone caused by summing two recordings of one source with a time offset.
- Conform: rebuilding the edit's audio from the original recordings against the locked picture.
- Content ID: YouTube's automated rights-matching system.
- Convolution reverb: a reverb that applies a recorded impulse response so a dry sound takes on a real room.
- CRI: colour rendering index; fidelity of a source against eight test colours, out of 100; R9 is the saturated red sample.
- CRMX: LumenRadio's wireless DMX system.
- Cross-polarisation: polarising filters on both light and lens to remove specular glare.
- CTB and CTO: colour temperature blue and orange correction gels.
- Cucoloris (cookie): a cut-out panel between a hard source and the subject that throws a pattern.
- D65: the CIE standard daylight illuminant at 6,504 K, the display white point.
- Dailies: the day's footage, synced for review.
- Dante: a network protocol that carries many channels of audio over Ethernet.
- Day for night: shooting in daylight, backlit and underexposed, and grading cool so it reads as night.
- dB SPL: sound pressure level in decibels against the threshold of hearing.
- dB(A): sound level weighted to the ear's sensitivity.
- dBFS: decibels relative to digital full scale; 0 is the maximum.
- dBTP: decibels true peak, the inter-sample peak after oversampling.
- dBu: analogue level in decibels against 0.775 V.
- DCP: Digital Cinema Package, the file set delivered to cinemas.
- De-esser: a compressor that acts only on the sibilant band.
- Dead cat (windjammer): a fur cover over a blimp that cuts wind noise.
- Diffuse reflection: scattered return of light from a matte surface.
- Distro: a power distribution box.
- DIT: digital imaging technician, who manages camera files, monitoring and on-set colour.
- Diya: a clay oil lamp, lit for Diwali and weddings.
- DME: dialogue, music and effects stems delivered as separate files.
- DMX: DMX512, the wired lighting-control standard of 512 channels per universe.
- Dolby Atmos bed and objects: the fixed channel layout of an Atmos mix (bed) and the individual sounds carrying position metadata (objects).
- DP: director of photography.
- Drop-frame: a timecode count that skips two frame numbers each minute, except every tenth, to stay in step with the clock at 29.97 fps.
- Ducking: an automatic level reduction of music keyed from dialogue.
- Dulling spray: a matte aerosol applied to shiny surfaces to kill reflections.
- Duv: the offset of a source's colour above (green) or below (magenta) the black-body curve.
- Dynamic range: the span between noise floor and the loudest clean level.
- EIN: equivalent input noise, a preamp's self-noise referred to its input, in dBu; more negative is quieter.
- EL Zone System: Ed Lachman's monitor display that colours each stop above and below grey in its own hue.
- EQ: equalisation, cutting or boosting frequency bands.
- Eyeline: the direction a subject looks, set by where the interviewer sits.
- F&B: food and beverage.
- F-stop: the geometric aperture, focal length divided by aperture diameter.
- Falloff: the rate at which illuminance drops with distance from a source.
- False colour: a monitor mode that paints each brightness band a flat colour.
- Fill light: a lower-intensity source opposite the key that sets the lighting ratio.
- Flag, cutter, floppy: black panels that block light; a cutter is long and narrow; a floppy is a hinged double panel.
- Flash blend: compositing one ambient exposure with several flash-lit exposures by hand.
- Flutter echo: rapid ringing between parallel hard surfaces.
- Focus stacking: merging several frames focused at different depths into one sharp image.
- Fogger: a machine that produces dense, local, short-lived cloud.
- Foley: sound performed to picture in a studio with props.
- Foot-candle: illuminance of one lumen per square foot, 10.76 lux.
- Fresnel: a lamp with a stepped lens that focuses from spot to flood.
- Front-of-house desk: the main console mixing an event for the audience.
- Gaffer: the chief lighting technician.
- Gain staging: setting levels at each stage of the chain so processors work in range and the bus keeps headroom.
- Gobo: a metal or glass pattern slide in a projection fixture.
- Golden hour: the period when the sun is below about 6 degrees altitude, warm and low.
- Grid (egg crate): a fabric honeycomb on a soft source that limits spread.
- Grid cloth: woven diffusion fabric, tough enough for large outdoor frames.
- Grip: the crew member who rigs stands, flags and frames.
- Hazer: a machine that produces a fine long-hanging mist to make light beams and depth visible.
- HDR merge: combining bracketed exposures into one high dynamic range image.
- HDRI: a high dynamic range panorama used to light a CG scene with a captured environment.
- High key and low key: lighting with small shadow areas and bright grounds (high) or large shadow areas and dark grounds (low).
- High-pass filter: a filter that removes everything below a set frequency.
- HMI: a metal halide arc lamp with ballast, the brightest daylight source per watt.
- HSS: high-speed sync; pulsed flash that allows shutter speeds above the sync speed.
- IGBT strobe: a flash head that cuts the tube's discharge electronically for very short flash durations.
- Illuminance: light arriving on a surface, measured in lux.
- Impulse response: a recording of how a room answers a click or sweep, used to recreate that room.
- Incident meter: a light meter with a dome that reads the light falling on the subject.
- Integrated loudness: the gated average loudness of a whole programme, in LUFS.
- Interrotron: Errol Morris's two-way teleprompter rig that puts the interviewer's face over the lens.
- Inverse square law: illuminance falls with the square of distance from a point source.
- IP rating: the IP code; the first digit rates dust protection, the second water.
- IPRS: the Indian Performing Right Society, India's registered copyright society for composers, authors and publishers of musical and literary works.
- ISO: the sensor's sensitivity rating; doubling it adds one stop of exposure.
- ISO track: a single microphone recorded on its own track.
- ISRC: International Standard Recording Code, the 12-character identifier of a recording.
- iXML: metadata inside a BWF file carrying scene, take and track names.
- Jaali: a pierced stone lattice screen in Indian architecture.
- Jam sync: copying timecode from a master clock into a device that then free-runs.
- K-weighting and gating: the BS.1770 filter that approximates the ear's sensitivity, and the exclusion of silence and quiet passages from the loudness average.
- Kandura: the ankle-length robe worn by Emirati men.
- Key light: the dominant source in a setup.
- Khaleeji: the Gulf dialects of Arabic, such as Emirati and Saudi.
- Kicker: a light from behind at 45 degrees on the fill side that lands on cheek and jaw.
- kVA: kilovolt-amperes, a generator's apparent power rating.
- Lakh and crore: 100,000 and 10 million in the Indian numbering system.
- Large-diaphragm condenser: a studio microphone with a capsule about 25 mm across, detailed and warm close up.
- Lavalier: a miniature microphone clipped or hidden on the body.
- Leaf shutter: a shutter in the lens that syncs with flash at any speed.
- LED volume: a virtual production stage whose LED walls surround and light the set.
- Leq(m): equivalent continuous level, M-weighted, the trailer loudness measure.
- LFE: the low-frequency effects channel, the .1 of 5.1.
- Library (production) music: pre-cleared catalogue music licensed by subscription or per track.
- Light painting: moving a source during a long exposure to build a reflection or a lit area.
- Lighting ratio: key plus fill against fill, in the ASC definition.
- Lightmen: the Indian industry term for lighting technicians supplied by the rental vendor.
- Log: a flat, logarithmic camera recording that keeps highlight and shadow range for the grade.
- Loop lighting: key placed so the nose shadow forms a small loop on the cheek.
- LRA: loudness range, the spread of short-term loudness across a programme, in LU.
- LU: loudness unit, equal to 1 dB on a loudness scale.
- LUFS and LKFS: loudness units relative to full scale, the ITU-R BS.1770 measure.
- Lux: the unit of illuminance, one lumen per square metre.
- M&E: the music and effects mix without voice, the base for language versions.
- Magic hour: golden hour and blue hour taken together.
- Mashrabiya: a carved wooden lattice window screen in Gulf and Arab architecture.
- Master use licence: permission from the owner of a recording to use that recording.
- MFN: most favoured nation, a clause requiring terms no worse than the other rights holder receives.
- Mid-side: a stereo method pairing a forward cardioid with a sideways figure-of-eight, decoded to adjustable width.
- Mired: micro reciprocal degrees, one million divided by kelvin; the unit of gel shift.
- Modelling lamp: the continuous lamp inside a strobe head that previews where the flash will fall.
- Modern Standard Arabic: the formal written and broadcast register of Arabic.
- Moiré: a shimmering interference pattern where a fine grid, such as an LED wall, beats against the sensor's.
- Motivated light: light attributable to a visible or plausible source in the frame.
- MPEG-H: an immersive broadcast audio codec.
- Mult box: a box that splits one desk output into many XLR line outputs for press crews.
- Nasheed: unaccompanied or voice-led devotional song.
- ND: neutral density filtration, which cuts light without changing colour.
- Needle drop: use of an existing commercial recording.
- Negative fill: a black surface on the shadow side that absorbs ambient bounce.
- Net (scrim): a mesh that reduces light by one (single) or two (double) stops without changing quality.
- NLE and DAW: non-linear editing application, and digital audio workstation.
- North light: skylight from a window that takes no direct sun.
- Nyquist: the rule that a sample rate captures frequencies up to half its value.
- Octabox: an eight-sided softbox.
- OOH: out-of-home media, screens and posters in public places.
- Open shade: a subject in shadow lit only by open sky.
- Options: pre-priced extensions of term, territory and media agreed inside the first licence.
- Original audio: a brand's own sound that other accounts can reuse on a platform.
- ORTF: a near-coincident stereo pair of cardioids 17 cm apart at 110 degrees.
- OTT, CTV and VOD: streaming services, connected TV, and video on demand.
- Parabolic reflector: a deep, focusable reflector giving a specular centre with soft edges.
- Phase and polarity: the time relationship between two signals, and the sign of a waveform.
- Pixel pitch: the distance between LED centres on a screen, in millimetres.
- Polar pattern: a microphone's sensitivity by direction: omni (all round), cardioid (rejects the rear), supercardioid and hypercardioid (narrower, with a small rear lobe), figure-of-eight (front and back).
- Practical: a visible light source in the frame.
- PRO: performing rights organisation, which collects performance royalties for compositions.
- PWM: pulse width modulation, a dimming method that can flicker at high frame rates.
- Q: the width of an EQ band; a higher Q is narrower.
- RCCB: residual current circuit breaker, which cuts the supply on an earth leak.
- Rec 709: the HD television colour and brightness standard.
- Recce: the location scouting visit.
- Rembrandt lighting: key high and 45 degrees to the side, leaving a lit triangle under the far eye.
- RGBWW: fixtures that mix red, green, blue, warm white and cool white emitters.
- Rim light: a source directly behind the subject that outlines it.
- Riser, hit, whoosh, sub, texture: trailer sound-design elements (a rising build, an impact, a passing air sound, a sub-bass boom, a continuous tonal layer).
- Room tone: a recording of a location's silence used to fill gaps in dialogue.
- Run of show: the minute-by-minute event schedule.
- Sample rate and bit depth: samples per second and bits per sample in digital audio.
- Short-term loudness: loudness measured over a sliding 3 second window.
- Shotgun microphone: an interference-tube microphone with a narrow forward pickup.
- Shutter angle: exposure time multiplied by frame rate and by 360; a 180 degree shutter exposes for half the frame interval.
- Sibilance: the hissing "s" and "sh" sounds of speech, concentrated at 5 to 8 kHz.
- Sidechain: a processor input that lets one signal control the processing of another.
- Silence move: a cut that drops all sound for 8 to 20 frames before a reveal or a line.
- Slate: the clapperboard that labels and syncs a take; a smart slate displays timecode.
- Snoot, barn doors: tube and hinged leaves that shape a hard beam.
- Sonic identity: a brand's system of sound logo, theme, functional sounds, voice and usage rules.
- Sonic logo: a 1 to 5 second sound that identifies a brand.
- Sound hook: a single recognisable real sound or a specific spoken line placed at frame one of a social cut.
- Soundalike: music commissioned to imitate a recognisable recording, arrangement or voice.
- Space light: one overhead soft source over the whole set.
- Specular reflection: mirror-like return of the light source from a glossy surface.
- Split lighting: key at 90 degrees, lighting half the face.
- SSI: spectral similarity index, the Academy measure (SMPTE ST 2122) comparing a source's spectrum with a reference.
- Stems: a mix delivered as separate instrument or element groups.
- Stop: a doubling or halving of light.
- Strobe: studio flash, a short intense burst of light.
- Sync licence: permission from the publisher to set a composition to picture.
- Synthetically generated information: India's IT Rules term for content artificially created or altered to appear authentic.
- T-stop: a measured transmission stop on a cinema lens.
- t0.1 and t0.5: flash duration measured above 10 percent and above half of peak output.
- Tail slate: a slate shown upside down and clapped at the end of a take.
- TASA: the Trailer Audio Standards Association, which sets the US trailer loudness ceiling.
- TDRA and WPC: the UAE and Indian regulators of radio spectrum for wireless microphones.
- Temp love: a client's attachment to a temp track the job cannot clear.
- Tenting: enclosing a product in white fabric with lamps outside for shadowless gradients.
- Three point lighting: key, fill and back light, the base grammar of film and TV lighting.
- Timecode: the running clock written into recordings for synchronisation.
- TLCI: television lighting consistency index, EBU Tech 3355, modelling an idealised three-chip camera.
- TM-30: the IES rendering measure reporting fidelity (Rf) and gamut (Rg) against 99 samples.
- True-peak limiter: a limiter that holds inter-sample peaks under a ceiling.
- TVC: television commercial.
- Ultrabounce: a white fabric with one black side, stretched on a frame for bounce.
- Unaided attribution: naming the brand from a sound alone, without prompts.
- Underslung boom: a boom held below the frame line, pointing up at the speaker.
- Veiling flare: stray light scattered inside a lens that lifts the blacks and lowers contrast.
- Video village: the monitor station where the director and client watch.
- VO: voice-over.
- Waveform: a monitor graph of brightness across the frame, from 0 to 100 percent.
- Wh: watt-hours, a battery's stored energy.
- Wild lines and wild sound: lines or sounds recorded on set without the camera rolling.
- Work-for-hire: a contract term under which the commissioning party owns the work from creation.
- xy coordinates: CIE chromaticity values used to set a fixture's colour exactly.
- Zebras: monitor stripes over every area above a set level.
- Zero crossing: a point where the waveform passes through silence, where an edit makes no click.

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
- Roger Deakins, Reflections: On Cinematography, 2025 (UK edition from Octopus; US and UK dates not confirmed from a publisher page).
- Richard Avedon, In the American West, 1985.

Specifications and standards
- EBU R 128-2023, Loudness normalisation and permitted maximum level of audio signals, version 5, November 2023, https://tech.ebu.ch/docs/r/r128.pdf ; publication page with supplements s1, s2 and s4, https://tech.ebu.ch/publications/r128
- EBU Tech 3341, Loudness metering: "EBU mode" metering to supplement EBU R 128 loudness normalisation, version 4.0, 21 November 2023, https://tech.ebu.ch/files/live/sites/tech/files/shared/tech/tech3341.pdf
- EBU Tech 3355, Method for the assessment of the colorimetric properties of luminaires: the television lighting consistency index (TLCI), https://tech.ebu.ch/publications/tech3355
- ITU-R BS.1770-5, Algorithms to measure audio programme loudness and true-peak audio level, 2023, https://www.itu.int/rec/R-REC-BS.1770
- ATSC A/85:2026-07, Techniques for Establishing and Maintaining Audio Loudness for Digital Television, approved 8 July 2026, https://www.atsc.org/wp-content/uploads/2026/07/A85-2026-07.pdf ; document page, https://www.atsc.org/atsc-documents/a85-techniques-for-establishing-and-maintaining-audio-loudness-for-digital-television/ ; press release, 15 July 2026, https://www.atsc.org/news/atsc-modernizes-industry-audio-loudness-guidance-with-revision-to-a-85-recommended-practice/
- SMPTE ST 2122:2020, Spectral Similarity Index (SSI), published 8 June 2020, https://pub.smpte.org/doc/st2122/ ; Academy overview, https://www.oscars.org/science-technology/projects/spectral-similarity-index-ssi
- ANSI/IES TM-30-20, IES Method for Evaluating Light Source Color Rendition, 2020 (check the IES for a later revision), https://www.ies.org/
- ANSI C78.377-2017, Specifications for the Chromaticity of Solid State Lighting Products (check for a later revision).
- ISO 2720:1974, General purpose photographic exposure meters (photoelectric type): guide to product specification.
- Netflix, Sound Mix Specifications and Best Practices v1.5, https://backlothelp.netflix.com/hc/en-us/articles/360001794307-Netflix-Sound-Mix-Specifications-Best-Practices-v1-5 (the page now redirects to the partner portal; summary at https://www.production-expert.com/production-expert-1/how-to-optimise-an-audio-mix-for-delivery-to-netflix)
- Apple, Apple Podcasts audio requirements, https://podcasters.apple.com/support/893-audio-requirements
- Apple, Apple Digital Masters (PDF), https://www.apple.com/apple-music/apple-digital-masters/docs/apple-digital-masters.pdf
- Spotify for Artists, Loudness normalization, https://support.spotify.com/us/artists/article/loudness-normalization/
- Spotify Advertising, ad specs, https://ads.spotify.com/en-US/ad-specs/
- YouTube Help, Recommended upload encoding settings, https://support.google.com/youtube/answer/1722171
- Meta, Music Guidelines, https://www.facebook.com/legal/music_guidelines ; Meta Sound Collection, https://www.facebook.com/sound/collection/
- TikTok Creative Center, Commercial Music Library, https://ads.tiktok.com/business/creativecenter/music/pc/en (returned a server error when fetched in October 2026)
- Trailer Audio Standards Association (TASA), trailer loudness standard of 85 dB Leq(m); no public specification page was read for this file.
- IATA, Lithium Battery Guidance Document (passenger provisions of the Dangerous Goods Regulations), https://www.iata.org/
- EU Artificial Intelligence Act, Article 50, Transparency obligations, https://artificialintelligenceact.eu/article/50/
- The Digital Omnibus on AI (regulation number not confirmed against the Official Journal for this file); summaries: Gibson Dunn, EU AI Act Omnibus agreement: postponed high-risk deadlines and other key changes, https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/ ; Jones Walker, Yes, August 2 still matters, https://www.joneswalker.com/en/insights/blogs/ai-law-blog/yes-august-2-still-matters-the-eu-approved-a-high-risk-ai-delay-but-most-trans.html
- Government of India, Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2026, G.S.R. 120(E), 10 February 2026; summary: Hogan Lovells, India introduces mandatory labelling for AI and 3-hour takedown for illegal content, https://www.hoganlovells.com/en/publications/india-introduces-mandatory-labelling-for-ai-and-3hour-takedown-for-illegal-content
- Government of India, The Copyright Act, 1957, as amended by the Copyright (Amendment) Act, 2012, at the India Code portal, https://www.indiacode.nic.in/
- Government of India, The Noise Pollution (Regulation and Control) Rules, 2000, at the Central Pollution Control Board, https://cpcb.nic.in/
- UAE Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights, at the UAE legislation portal, https://uaelegislation.gov.ae/
- UAE Ministry of Economy, guide to collective management of music rights; summary: Reed Smith, https://www.reedsmith.com/our-insights/blogs/viewpoints/102nr54/uae-ministry-of-economy-tourism-issues-guide-to-collective-management-of-music/

Cases
- Midler v. Ford Motor Co., 849 F.2d 460 (9th Cir. 1988).
- Waits v. Frito-Lay, Inc., 978 F.2d 1093 (9th Cir. 1992).
- Thaler v. Perlmutter, No. 23-5233 (D.C. Cir., 18 March 2025).

Product and tool documentation
- Lee Filters, 204 Full C.T. Orange, https://leefilters.com/colour/204-full-c-t-orange/ ; 205 Half C.T. Orange, https://leefilters.com/colour/205-half-c-t-orange/ ; 206 Quarter C.T. Orange, https://leefilters.com/colour/206-quarter-c-t-orange/ ; 201 Full C.T. Blue, https://leefilters.com/colour/201-full-c-t-blue/ ; 202 Half C.T. Blue, https://leefilters.com/colour/202-half-c-t-blue/ ; 203 Quarter C.T. Blue, https://leefilters.com/colour/203-quarter-c-t-blue/ ; diffusion range, https://leefilters.com/lighting/diffusion-packs/
- Aputure, Light Storm range, https://aputure.com/collections/light-storm ; STORM range, https://www.aputure.com/collections/storm ; STORM 1200x, https://www.aputure.com/products/storm-1200x ; STORM XT52, https://www.aputure.com/products/storm-xt52 ; light modifiers, https://www.aputure.com/collections/light-modifiers
- ARRI, LED lighting families, https://www.arri.com/en/lighting/led ; M18, https://www.arri.com/en/lighting/daylight/m-series/m18 ; false colour values from the ARRI camera user manuals, https://www.arri.com/
- Nanlux, Evoke 5000B coverage: Film and Digital Times, 12 July 2025, https://www.fdtimes.com/2025/07/12/nanlux-evoke-5000b/ ; CineD, Nanlux Evoke 5000B introduced, https://www.cined.com/nanlux-evoke-5000b-introduced-5000w-led-spotlight-with-bi-color-and-green-magenta-control/
- Quasar Science, Rainbow 2, https://www.quasarscience.com/products/rainbow-2
- Astera, Titan Tube, https://astera-led.com/products/titan-tube/
- Zoom, F3, https://zoomcorp.com/en/us/field-recorders/field-recorders/f3/
- Newsshooter, Sound Devices MixPre II series features 32-bit float recording, 2019, https://www.newsshooter.com/2019/08/30/sound-devices-mixpre-ii-series-features-32-bit-float-recording/
- Newsshooter, Aputure LS 1200d Pro now available, 2021, https://www.newsshooter.com/2021/12/15/aputure-ls-1200d-pro-led-light-now-available-to-order-for-3390-00-usd/
- ProVideo Coalition, "Aputure Light Storm 600c Pro II: industry workhorse gets upgrade", https://www.provideocoalition.com/aputure-light-storm-600c-pro-ii-industry-workhorse-gets-upgrade/
- RØDE, Wireless Pro, https://rode.com/en/microphones/wireless/wirelesspro
- DJI, Mic 3, https://www.dji.com/mic-3
- DPA, 4060 series, https://www.dpamicrophones.com/lavalier/4060-series-miniature-omnidirectional-microphone
- iZotope, RX Advanced release notes, https://www.izotope.com/pages/release-notes/rx-advanced ; Mix, "iZotope remains in the restoration game with RX 12 launch", 29 April 2026, https://www.mixonline.com/technology/news-products/izotope-remains-in-the-restoration-game-with-rx-12-launch
- Youlean, Loudness Meter, https://youlean.co/youlean-loudness-meter/
- Waves, WLM Plus, https://www.waves.com/plugins/wlm-loudness-meter
- Blackmagic Design, DaVinci Resolve Fairlight, https://www.blackmagicdesign.com/products/davinciresolve/fairlight
- Adobe, Enhance Speech in Premiere Pro, https://helpx.adobe.com/premiere-pro/using/enhance-speech.html
- Avid, press release on Pro Tools 2026.4, April 2026, https://www.avid.com/press-room/2026/04/avid-powers-faster-workflows-and-next-generation-immersive-audio-with-latest-pro-tools-release
- Synthtopia, "Apple Logic Pro 12, MainStage 4 now available", 30 January 2026, https://www.synthtopia.com/content/2026/01/30/apple-logic-pro-12-mainstage-4-now-available-heres-whats-new/
- Reaper, https://www.reaper.fm/
- ElevenLabs, Pricing, https://elevenlabs.io/pricing
- Descript, Pricing, https://www.descript.com/pricing
- Artlist, Pricing, https://artlist.io/pricing ; Epidemic Sound, Pricing, https://www.epidemicsound.com/pricing/ ; Musicbed, Pricing, https://www.musicbed.com/pricing
- Hoopr, https://hoopr.ai/

Articles, talks and podcasts
- Twenty Thousand Hertz, "Ta-dum: the sound of Netflix" (Lon Bender, Todd Yellin, Charlie Campagna), https://www.20k.org/episodes/netflix
- Mastercard, "Sound on: Mastercard debuts sonic brand", February 2019, https://newsroom.mastercard.com/news/press/2019/february/sound-on-mastercard-debuts-sonic-brand/ ; The Drum, 8 February 2019, https://www.thedrum.com/news/2019/02/08/fresh-revamping-its-brand-mastercard-unveils-sonic-logo
- Storyboard18, "How Airtel's Live Every Moment campaign strengthened top-of-mind recall", 2025, https://www.storyboard18.com/advertising/how-airtels-live-every-moment-campaign-strengthened-top-of-mind-recall-among-consumers-80229.htm
- Social Samosa, Intellion Offices by Tata Realty debuts sonic identity, April 2024, https://www.socialsamosa.com/industry-updates/intellion-offices-tata-realty-debuts-sonic-identity-brand-4506787
- Music Business Worldwide, Emirates Music Rights Association (EMRA) granted first collective management licence in the UAE, 2025, https://www.musicbusinessworldwide.com/emirates-music-rights-association-emra-granted-first-collective-management-license-in-the-uae/ ; Finance Middle East, UAE issues second collective music rights licence to Music Nation, https://www.financemiddleeast.com/news/uae-issues-second-collective-music-rights-licence-to-music-nation/
- Osborne Clarke, Use of music on social media platforms: what businesses and creators need to know, https://www.osborneclarke.com/insights/use-music-social-media-platforms-what-businesses-and-creators-need-know-about-usage
- Team Deakins podcast (Roger and James Deakins), from April 2020, https://teamdeakins.libsyn.com/
- Ava Berkofsky, interview on lighting dark skin for Insecure, Mic, 2017 (title and URL not re-verified for this file).
- ProVideo Coalition, "Understanding lights' color spectrum accuracy", https://www.provideocoalition.com/understanding-lights-color-spectrum-accuracy/

Secondary reference (used where no primary page was read)
- Wikipedia, Color temperature (table of typical values), https://en.wikipedia.org/wiki/Color_temperature ; Lighting ratio, https://en.wikipedia.org/wiki/Lighting_ratio ; Intel Inside (jingle section), https://en.wikipedia.org/wiki/Intel_Inside ; I'm Lovin' It, https://en.wikipedia.org/wiki/I%27m_Lovin%27_It ; Ben Burtt, https://en.wikipedia.org/wiki/Ben_Burtt ; Bradford Young, https://en.wikipedia.org/wiki/Bradford_Young ; Richard Avedon, https://en.wikipedia.org/wiki/Richard_Avedon ; Juergen Teller, https://en.wikipedia.org/wiki/Juergen_Teller ; Roger Deakins (publisher of Reflections), https://en.wikipedia.org/wiki/Roger_Deakins
