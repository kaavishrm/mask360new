# Colour: science, systems, palettes, management

The technical craft of colour across screen, print and video, beneath the taste rules in design-taste. As of October 2026.

## Contents

1. [Physics and physiology](#1-physics-and-physiology)
2. [Colour models and spaces](#2-colour-models-and-spaces)
3. [Gamut, gamma and transfer functions](#3-gamut-gamma-and-transfer-functions)
4. [Colour management](#4-colour-management)
5. [CSS colour on the web](#5-css-colour-on-the-web)
6. [Contrast](#6-contrast)
7. [Harmony theory and its limits](#7-harmony-theory-and-its-limits)
8. [Palette construction for product and brand](#8-palette-construction-for-product-and-brand)
9. [Brand colour: owning, specifying, protecting](#9-brand-colour-owning-specifying-protecting)
10. [Print colour](#10-print-colour)
11. [Colour in photography and video](#11-colour-in-photography-and-video)
12. [Colour psychology and culture](#12-colour-psychology-and-culture)
13. [Colour vision deficiency](#13-colour-vision-deficiency)
14. [Data colour](#14-data-colour)
15. [Naming, documentation, presentation and QA](#15-naming-documentation-presentation-and-qa)
16. [Reference tables](#16-reference-tables)

Then [Terms introduced](#terms-introduced) and [Sources and further reading](#sources-and-further-reading).

Taste decisions (two colours plus one accent, muted and material, one owned saturated colour) live in design-taste, SKILL.md section 5 and references/currency-2026.md. This file is the engineering under those decisions: why a ramp drifts, why a proof mismatches, why a hex alone is not a specification.

## 1. Physics and physiology

### 1.1 Spectrum

Visible light is electromagnetic radiation between about 380 and 700 nanometres (nm), the span the human retina responds to; some sources extend it to 750 nm at the red end. A colour stimulus is a spectral power distribution (SPD): a curve of energy per wavelength. Everything else in this file (RGB triplets, Lab values, Pantone numbers) is a compression of an SPD into three numbers, which is why two different SPDs can look identical (metamerism, section 1.5) and why a colour never has one "true" hex.

### 1.2 Illuminants

An illuminant is a standardised SPD that a measurement or a working space assumes as its white. The ones that matter in agency work:

| Illuminant | Correlated colour temperature | Used by | Why it matters |
|---|---|---|---|
| D50 | 5003 K | ICC Profile Connection Space, print viewing booths (ISO 3664:2009), Lab in Photoshop and InDesign | Print is judged under D50, so Lab values in a brand book are D50 values unless stated |
| D65 | 6504 K | sRGB, Display P3, Adobe RGB, Rec.709, Rec.2020, OKLab, monitor calibration for design | Every screen space assumes D65, so a monitor calibrated to anything else shows brand colours wrong |
| A | 2856 K | Tungsten incandescent reference | The warm-lamp condition for metamerism checks on packaging and fabric |
| F2, F11 | about 4230 K, 4000 K | Fluorescent store and office lighting | Retail shelves in Indian malls and Gulf supermarkets run cool fluorescent or LED; a swatch approved under D50 can shift there |
| E | equal energy | Theoretical | Appears in colour science derivations only |

D-series illuminants model daylight phases. The CIE defines them as SPDs, and the x,y chromaticity of D50 is (0.3457, 0.3585) and D65 is (0.3127, 0.3290), the two white points CSS Color Level 4 lists.

### 1.3 Cones, rods and the standard observer

The retina has three cone types, named by the part of the spectrum they peak in: S (short, about 420 nm), M (medium, about 534 nm) and L (long, about 564 nm). The commonly cited counts are around 6 million cones and 120 million rods; rods peak near 498 nm, saturate in daylight and carry no hue, which is why colour disappears at dusk and why blues look relatively brighter at low light (the Purkinje shift).

Because every human with normal colour vision has roughly the same three sensitivity curves, the CIE defined in 1931 a standard observer: three colour matching functions derived from the Wright and Guild matching experiments, measured on a 2 degree field (the size of a thumbnail at arm's length). A 1964 supplementary observer uses a 10 degree field and is the one used in industrial colour measurement of large flat areas (paint, textiles, packaging). Spectrophotometer readouts always state the observer and the illuminant ("D50/2") because the same patch yields different Lab numbers under each.

The cone signals are recombined by the visual system into opponent channels (Hering's opponent process): light versus dark, red versus green, blue versus yellow. This is why there is no reddish green or yellowish blue, why Lab and OKLab use opponent a and b axes, and why red on green text vibrates.

### 1.4 Luminance versus lightness

Luminance (Y) is physical: the weighted sum of linear light reaching the eye, measured in candelas per square metre (cd/m2, called nits in display work). Lightness (L* in CIELAB, L in OKLab) is perceptual: how bright a surface looks. The relationship is compressive, roughly a cube root: CIELAB defines L* = 116 (Y/Yn)^(1/3) minus 16 for Y/Yn above 0.008856. A surface reflecting 18 percent of light (the photographic grey card) has L* of about 49.5, which is why 18 percent grey is "middle grey". A 50 percent luminance surface has L* of about 76.

Consequences the rest of this file relies on: a gradient that is numerically even in luminance looks crushed in the shadows; a 50 percent opacity white over black does not look half way between them; and WCAG contrast (section 6) is computed on luminance, which is one reason it disagrees with perception in the midtones.

### 1.5 Metamerism, adaptation and the context effects

- Metamerism: two surfaces with different SPDs match under one illuminant and split under another. A brand's bottle green matched in offset ink and in dyed cotton can match under D50 and diverge under tungsten. Check physical brand colour under at least D50, A and the client's store lighting.
- Chromatic adaptation: the eye normalises the white of a scene within seconds. The Bradford transform is the standard mathematical model and is how ICC profiles move colours between D50 and D65. It is also why a phone screen looks blue when carried into a candle-lit restaurant.
- Simultaneous contrast (Chevreul, 1839): a colour's appearance shifts toward the complement of its surround. A mid grey looks lighter on black and darker on white; a muted brand colour on a saturated field looks greyer.
- Helmholtz-Kohlrausch effect: saturated colours look brighter than their luminance predicts. A pure red button reads brighter than a grey of the same Y, and no WCAG number accounts for it.
- Abney effect and Bezold-Brücke shift: hue appears to change when saturation or luminance changes with the wavelength constant. These two effects are why HSL ramps (section 2.3) drift in hue even though their H value is fixed.
- Colour constancy: the brain assigns a stable colour to an object across lighting, up to a point. The 2015 "dress" image is the public failure case: ambiguous illumination split viewers into white and gold versus blue and black.

## 2. Colour models and spaces

A colour model is a way of describing colour with numbers (RGB, HSL, Lab). A colour space is a model plus a specific set of primaries, white point and transfer function, so the numbers mean one thing (sRGB, Display P3). "RGB 255 0 0" is a model value with no meaning until a space is attached; this distinction is the root of most "the colours look different on my laptop" conversations.

### 2.1 RGB display spaces

| Space | Primaries and white | Transfer function | Built for | Failure modes |
|---|---|---|---|---|
| sRGB (IEC 61966-2-1:1999) | Rec.709 primaries, D65 | Piecewise curve approximating gamma 2.2 | The web, Windows, untagged content, the default assumption everywhere | Smallest gamut of the group; cannot hold saturated cyan, orange or green that P3 screens and print can show |
| Display P3 (Apple, 2015) | DCI-P3 primaries, D65 | sRGB curve | iPhone (since iPhone 7, 2016), iPad, Mac displays, most flagship Android screens, modern web via CSS | Content authored in P3 and shown untagged on sRGB pipelines clips and dulls; Figma states P3 shows 49 percent more visually distinct colours than sRGB |
| DCI-P3 (SMPTE RP 431-2) | P3 primaries, white about 6300 K with a green cast (x 0.314, y 0.351) | Gamma 2.6 | Digital cinema projection in a dark room | Never a delivery space for screens or print; its white looks green on a D65 monitor |
| Adobe RGB (1998) | Wider green and cyan than sRGB, D65 | Gamma 2.2 | Photography headed to print, covers more of the CMYK gamut | Viewed through an sRGB-assuming app or browser it looks flat; many clients' phones will show the dull version |
| ProPhoto RGB (ROMM RGB) | Imaginary primaries, D50 | Gamma 1.8 | Raw editing where nothing should clip | About 13 percent of its volume is colours no human can see; at 8 bit it bands badly, so only use at 16 bit and convert out before delivery |
| Rec.709 (ITU-R BT.709) | Same primaries as sRGB, D65 | Camera OETF defined by BT.709; display EOTF BT.1886 (gamma 2.4) | HD and most streaming video | Same numbers as sRGB but a different display curve, which is why video and stills of the same subject do not match side by side without management (section 11) |
| Rec.2020 (ITU-R BT.2020) | Very wide, D65 | 10 or 12 bit; paired with PQ or HLG in BT.2100 | UHD and HDR delivery container | No consumer display covers it in full, with the shortfall largest in the greens, so a Rec.2020 master is a container, and the colours seen depend on the display's mapping |
| scRGB, linear sRGB | sRGB primaries, D65 | Linear | Compositing, GPU work, CSS srgb-linear | Not a viewing space; values above 1.0 are legal and meaningless on SDR displays |

### 2.2 CMYK

Cyan, magenta, yellow and black (K for key) are subtractive inks. CMYK is a device model: "C100 M0 Y0 K0" produces a different cyan on every press, paper and ink set, and the only way to give it a meaning is to attach an output profile (FOGRA39, FOGRA51, GRACoL 2013). Its gamut is smaller than sRGB in the blues and oranges and larger in some cyans and yellows, so neither space contains the other. Section 10 has the practice.

### 2.3 Why HSL, HSV and HSB lie about lightness

HSL (hue, saturation, lightness) and HSV (hue, saturation, value; Photoshop calls it HSB with B for brightness) are geometric rearrangements of the RGB cube from 1978 (Alvy Ray Smith), with no perceptual data behind them. Lightness in HSL is (max(R,G,B) + min(R,G,B)) / 2 of the gamma-encoded channels, so:

- hsl(60 100% 50%) is pure yellow and hsl(240 100% 50%) is pure blue; both have "L 50". Their luminance is 0.93 and 0.07, their CIELAB L* is about 97 and 32. One is nearly white and the other nearly black.
- A "lighten by 10 percent" in HSL moves yellow almost nowhere perceptually and moves blue a great deal, so a palette generated by HSL offsets has uneven steps.
- HSL hue is a straight interpolation of RGB, so hue 240 to 260 passes through a purple band that is wider than perception, and blues lightened in HSL go violet.

Use HSL only to describe a hue angle informally, never to generate ramps, compute contrast or interpolate.

### 2.4 CIE XYZ, Lab and LCH

CIE XYZ (1931) is the root space: three imaginary primaries chosen so that Y is luminance and all visible colours have positive values. Every conversion between two colour spaces passes through XYZ. CIELAB (1976) transforms XYZ into L* (lightness, 0 to 100), a* (green to red) and b* (blue to yellow), with a cube root to approximate perception. It is the space of ICC profiles, of spectrophotometers and of delta E (section 9.3). Its known failure is hue: lightening a saturated blue in Lab shifts it toward purple (the blue hue line is curved), and chroma is over-predicted in saturated regions, which is why CIEDE2000 needed five correction terms. LCH is Lab in polar form: L, C (chroma, the distance from the grey axis) and h (hue angle). When a tool says "LCH" without qualification it means CIELAB LCH at D50.

### 2.5 CAM16 and HCT

CAM16 (Li et al., 2017) is a colour appearance model: it predicts how a colour looks given the viewing conditions (adapting luminance, surround, background), which Lab ignores. CAM16-UCS is the uniform space derived from it, the most accurate general model available, and heavy to compute. HCT (hue, chroma, tone) is Google's 2021 space for Material You and Material 3: hue and chroma come from CAM16, tone is CIELAB L*. The point of the construction is that tone maps to L*, so contrast can be guaranteed by tone arithmetic; the HCT source in Material Color Utilities states that a tone difference of 40 guarantees a contrast ratio of at least 3.0 and a difference of 50 guarantees at least 4.5. The library ships in C++, Dart, Java, Kotlin, Swift and TypeScript, and its TypeScript package defines colour spec versions 2021, 2025 and 2026 (Dart package 0.13.1, August 2026). HCT is right for Android theming and dynamic colour from a wallpaper; outside Material it is unusual, and OKLCH does the same job with less machinery.

### 2.6 OKLab and OKLCH

Björn Ottosson published OKLab on 23 December 2020 as a fix for two specific failures: CIELAB's poor hue prediction (especially blue) and CAM16-UCS's awkward numerics and chroma compression when blending. The construction is XYZ to approximate cone responses (LMS) by a 3 by 3 matrix, a cube root per channel, then a second 3 by 3 matrix to L, a, b; the matrices were fitted to perceptual datasets and the exponent fixed at 1/3. OKLCH is its polar form: L from 0 to 1, C from 0 to about 0.45 for anything displayable (the most chromatic sRGB colour, magenta #FF00FF, sits at 0.32; the P3 boundary peaks near 0.36 in the greens and the Rec.2020 boundary near 0.44), h in degrees. The white point is D65.

Why it is the house working space for screens: hue stays constant as lightness changes (a lightened OKLCH blue stays blue), the lightness scale matches perception closely enough that equal L steps look equal, and it is native in CSS (section 5), Tailwind v4, Figma plugins and every modern colour library (culori, colorjs.io). Its limits: it is a uniform space and nothing more (no viewing-condition model), its lightness is slightly off for very dark and very saturated colours, and gamut mapping through it does not reach a perfect sRGB red by chroma reduction alone (a W3C issue thread records this).

### 2.7 YCbCr

Video stores luma (Y', the gamma-encoded weighted sum of R'G'B') separately from two chroma difference channels (Cb, Cr) so chroma can be subsampled: 4:4:4 keeps every chroma sample, 4:2:2 halves horizontal chroma, 4:2:0 halves it both ways. Instagram, YouTube, broadcast and almost every H.264 and H.265 file are 4:2:0, which is why fine red text on video smears and why a logo in saturated colour should be delivered as a graphic overlay, never baked into 4:2:0 footage. The matrix coefficients differ between BT.601 (SD) and BT.709 (HD); a file tagged with the wrong matrix shows slightly shifted greens and reds. Limited range (16 to 235 on 8 bit) versus full range (0 to 255) is the other classic mismatch: a full-range file interpreted as limited looks washed out, the reverse looks crushed.

### 2.8 Perceptual uniformity, with examples

A space is perceptually uniform when equal numeric distances look like equal visual distances. Three tests show which spaces pass:

1. The lightness test. Take OKLCH blue (0.55 0.2 264) and step L by 0.1 to 0.95. Each step looks the same size and the hue stays blue. Do the same in HSL from L 50 to 90 in 10s: the first step is huge, the last is small, and the colour drifts violet.
2. The blend test. Mix white and a saturated blue 50/50. In CIELAB, CIELUV and HSV the midpoint goes purple; in CAM16 it desaturates quickly; in OKLab it stays blue at half chroma (Ottosson's own comparison).
3. The hue test. Rotate hue in 30 degree steps at fixed L and C. OKLCH and CAM16 give evenly spaced hues; HSL bunches the greens and stretches the blues; Lab's hue angles are uneven near blue.

Uniformity is what lets a design system promise "every 100 step in the ramp is one visible step" and what lets a contrast target be hit by arithmetic instead of trial.

## 3. Gamut, gamma and transfer functions

### 3.1 Gamut

A gamut is the set of colours a space or device can represent, usually drawn as a triangle of primaries on the CIE 1931 chromaticity diagram. Out-of-gamut colours have to be clipped (the nearest representable colour, which flattens detail and shifts hue) or mapped (a smoother compression). A colour is only "in gamut" relative to a target: a Pantone orange may be inside P3, outside sRGB and outside FOGRA51 CMYK all at once, which is why section 9 insists on specifying it in every medium.

### 3.2 The sRGB curve, gamma 2.2 and 2.4

Display transfer functions encode linear light into perceptually spaced code values, because 8 bits spread linearly would waste levels in the highlights and band in the shadows. The sRGB curve is piecewise: a linear segment with slope 12.92 below 0.0031308, then 1.055 times the value to the power 1/2.4 minus 0.055. It is close to a pure gamma of 2.2 but has a linear toe, which is why "gamma 2.2" and "sRGB" calibration targets differ slightly in the deepest shadows.

- Gamma 2.2 (or the sRGB curve): design and web monitors in a normally lit room, where some shadow lift is right.
- Gamma 2.4 (BT.1886): video grading suites and broadcast, in a dim surround (the standard assumes about 5 cd/m2 behind the screen). Dim surroundings make the eye expect deeper shadows.
- Gamma 2.6: cinema projection in darkness.

The same file viewed at 2.2 and 2.4 differs most in the shadows; a video graded at 2.4 and watched on a phone at 2.2 looks lifted and milky in the blacks, one of the reasons grades look different on Instagram.

### 3.3 Linear light and why blending in sRGB looks wrong

Light adds linearly. Code values do not. Averaging two sRGB values averages their gamma-encoded numbers, which under-represents the brighter contributor:

- Mix #FF0000 and #00FF00 at 50 percent in sRGB: #808000, a dark olive with relative luminance about 0.20.
- Mix them in linear light: each channel is 0.5 linear, which encodes to about 188, giving #BCBC00, a bright yellow with luminance about 0.47.

Physically the second is correct, and it is what a lens would see with two lights overlapping. The same error darkens every midpoint in a gradient, puts a grey dip in the centre of a red-to-blue blend, darkens the edges of anti-aliased text and makes a resized image slightly darker than its original (Photoshop's "Blend RGB colors using gamma 1.0" setting fixes compositing; Gaussian blur on gamma-encoded pixels is why glows look dirty). CSS handles this at the authoring level by letting color-mix() and gradients interpolate in oklab or srgb-linear (section 5.3). Rule: blend, blur, resize and composite in linear or OKLab; store and deliver in sRGB.

### 3.4 Bit depth, banding and dithering

Bit depth is the number of levels per channel: 8 bit gives 256 per channel (16.7 million combinations), 10 bit gives 1024 (1.07 billion), 12 bit gives 4096. A subtle gradient exposes the problem: a grey ramp from #101010 to #202020 across a 1920 pixel wide hero has only 16 levels, so each band is 120 pixels wide and plainly visible, the classic dark gradient failure on landing pages and in title cards. Compressed video (8 bit 4:2:0) makes it worse because the encoder smooths the noise that was hiding the steps.

Fixes, in order of preference: avoid long low-contrast gradients; add dither, the deliberate noise that breaks steps into a texture the eye reads as smooth (Photoshop's gradient Dither checkbox, a 1 to 3 percent monochrome noise layer, film grain in a video grade, the FFmpeg dither options); deliver 10 bit where the pipeline allows (HEVC Main 10, ProRes 422 HQ or 4444); and in CSS, stack a subtle SVG noise overlay on hero gradients, which also matches the 2026 taste for grain (design-taste, currency-2026.md).

### 3.5 HDR transfer functions and nits

Standard dynamic range (SDR) assumes a reference white of 100 cd/m2 (nits). High dynamic range (HDR) video uses two transfer functions, both wrapped by ITU-R BT.2100 (2016) with Rec.2020 primaries and 10 or 12 bit depth:

- PQ (perceptual quantizer, SMPTE ST 2084, standardised 2014, developed by Dolby): absolute, mapping code values to 0 to 10,000 nits, with a curve shaped to the eye's contrast sensitivity. HDR10 (PQ plus static metadata, ST 2086, MaxCLL and MaxFALL), HDR10+ and Dolby Vision (dynamic metadata) all sit on PQ.
- HLG (hybrid log-gamma, BBC and NHK, ARIB STD-B67, 2015): relative, backwards compatible with SDR displays, with a nominal 1000 nit reference display. Broadcast and most phone camera HDR use it.

ITU-R BT.2408 places HDR reference white (graphics white, the white of a caption) at 203 nits, which is 75 percent HLG signal and 58 percent PQ; put titles at 100 percent HDR white and they glare. Phones are now the main HDR surface: the iPhone 17 (2025) is rated 1000 nits typical, 1600 nits HDR peak, 3000 nits outdoor peak and 1 nit minimum, with a 2,000,000:1 typical contrast ratio (Apple specification page). On the web, HDR images (gain-map JPEG and HEIC, AVIF) display in Safari and Chrome; CSS Color HDR Module Level 1 (W3C Working Draft, 26 October 2026; first draft December 2024) defines the dynamic-range-limit property (standard, constrained, no-limit), an HDR colour function and the rec2100-pq, rec2100-hlg and rec2100-linear spaces. Only dynamic-range-limit has shipped: Chrome 136 (April 2025) and Safari 26 for standard and no-limit, Firefox not yet (MDN compatibility data). House use: treat HDR as a photo and video capability, keep UI in SDR, set `dynamic-range-limit: standard` on HDR thumbnails in a grid so they do not glare past the interface, and reserve no-limit for the one hero film.

## 4. Colour management

### 4.1 ICC profiles, device spaces and working spaces

An ICC profile (International Color Consortium; current specification ICC.1:2022, the v4 format, with v2 profiles still everywhere) is a file that describes how a device's or space's numbers relate to a device-independent Profile Connection Space (PCS), which is CIELAB or XYZ at D50. Three kinds matter:

- Input profiles: cameras and scanners.
- Display profiles: the monitor, written by a calibration tool (section 4.4).
- Output profiles: a press condition such as PSO Coated v3 (FOGRA51) or a specific inkjet on a specific paper.

A working space (sRGB, Adobe RGB, ProPhoto, or a CMYK output profile used as the document space) is an abstract, well-behaved space you edit in. The device space is where the file ends up. A colour-managed pipeline converts working space to display profile for viewing and working space to output profile for print, both through the PCS. An untagged file has no profile; every application assumes something (usually sRGB), and the assumption is where mismatches begin. House rule: every delivered raster carries an embedded profile; every CMYK PDF states the output intent in PDF/X.

### 4.2 Rendering intents

A rendering intent is the rule for what happens to colours the destination cannot reproduce.

| Intent | What it does | Use for | Never for |
|---|---|---|---|
| Perceptual | Compresses the whole source gamut into the destination, keeping relationships between colours; everything shifts a little | Photographs to print, especially saturated ones | Brand colours (they move even when in gamut) |
| Relative colorimetric | Maps source white to destination white, leaves in-gamut colours unchanged, clips out-of-gamut colours to the nearest edge | Logos, flat brand colour, most design work; the default in InDesign | Images with large out-of-gamut areas (they flatten) |
| Absolute colorimetric | Like relative, but keeps the source white (the paper colour is simulated) | Proofing: making a bright proof paper show the cream of the final stock | Anything delivered to a viewer, because the simulated paper tint prints as a tint |
| Saturation | Maximises saturation with no regard for accuracy | Business charts on a photocopier | Anything a client will see |

Black point compensation (an Adobe addition, ISO 18619) maps source black to destination black so shadows do not block up; leave it on for relative colorimetric.

### 4.3 Soft proofing

Soft proofing shows on the monitor a simulation of the output profile: Photoshop View, Proof Setup, Custom, choose the press profile, tick Simulate Paper Color and Simulate Black Ink; InDesign and Affinity have the same. The screen then shows the dull FOGRA51 cyan and the grey-brown of paper white, which is the honest picture to show a client before they fall for a P3 teal that no press can print. A soft proof is only as good as the monitor profile and the ambient light; it is not a contract proof (section 10.8).

### 4.4 Monitor calibration

Calibration sets the display to a target; profiling measures what it does and writes the ICC profile. Hardware: a colorimeter (Calibrite Display Plus HL, Datacolor Spyder X2) for monitors, a spectrophotometer (X-Rite i1Pro 3) for print too. Software: the vendor's, or DisplayCAL (open source, driving ArgyllCMS) for finer control.

| Use | Luminance | White point | Tone curve | Surround |
|---|---|---|---|---|
| Design, web, UI | 120 cd/m2 | D65 | sRGB curve or gamma 2.2 | Normal office light, no direct light on screen |
| Video grading (Rec.709) | 100 cd/m2 | D65 | BT.1886 (gamma 2.4) | Dim, neutral grey walls, about 5 cd/m2 bias light behind the screen |
| Print soft proof matching a D50 booth | 80 to 120 cd/m2, matched to the booth | D50 (or D65 with a booth at 5000 K; opinions differ, D50 is the standard) | Gamma 2.2 or L* | Booth to ISO 3664:2009, 2000 lux P1 for critical comparison |

Reasons: 120 nits approximates the brightness of a white page in an office; D65 is the white point of every screen space; 100 nits and 2.4 are the BT.1886 reference; dim surround lowers the perceived black and the curve compensates. Recalibrate monthly, after any brightness change and after an OS update; OLED panels drift faster than IPS. Laptop panels at 400 nits and "Vivid" modes make every design look more saturated than clients will see.

### 4.5 iPhone, Android, Windows and Mac

- iPhone and iPad: Display P3 panels since the iPhone 7 and 9.7 inch iPad Pro (2016), fully colour managed by the system. sRGB content is shown as sRGB; P3-tagged content uses the wider gamut. True Tone shifts the white point with ambient light and Night Shift warms it; both are on by default and both change how a brand colour looks, so ask a client reviewing on an iPhone to turn them off for a sign-off.
- Android: system wide-colour support arrived in Android 8.0 (API level 26). Apps must opt in; the default colour mode treats everything as sRGB, and Chrome for Android renders CSS P3 colours. The hardware is less uniform: Samsung's "Vivid" screen mode (the default on many Galaxy phones) stretches sRGB content toward the panel gamut, so a muted palette looks louder than designed; "Natural" mode is the accurate one. For India, where Android is the majority (StatCounter has Android above 90 percent of mobile OS share for years), the practical implication is that a palette must survive being over-saturated by 10 to 20 percent in chroma.
- Windows: historically colour-unmanaged for most applications, so a wide-gamut monitor shows sRGB content over-saturated unless the app manages colour (Adobe apps do; most browsers and Office do not). Windows 11 introduced Auto Color Management (ACM), a system-level, GPU-accelerated colour management first limited to qualifying SDR displays with the 2022 update and extended to all SDR displays through later builds, mapping non-wide-gamut apps into sRGB. Field reports (DisplayCAL and Adobe forums) record conflicts with third-party calibration profiles, so on a Windows grading or retouching machine decide between ACM and a hardware calibration workflow and do not run both blindly.
- Mac: ColorSync has managed every application system-wide for decades, which is why a design signed off on a Mac and viewed on a Windows laptop is the most common "the colours are wrong" call.

### 4.6 Wide gamut on the web

A browser treats an untagged image as sRGB. To show P3 on the web: tag the image with a Display P3 ICC profile (JPEG, PNG) or use a format that carries colour metadata natively (AVIF and HEIC carry CICP codes; WebP can carry an ICC profile), and author CSS colour with color(display-p3 ...) or OKLCH values whose chroma exceeds sRGB. Safari (since 10, 2016, which also shipped the color-gamut media query) and Chrome (CSS Color 4 functions since 111, March 2023) honour both; Firefox has rendered oklch() since 113. Test on a P3 screen and on an sRGB screen; a hero image with P3 saturation that falls back to clipped sRGB loses detail in the saturated areas, so keep critical detail (skin, product texture) inside sRGB and reserve P3 for backgrounds and accents.

## 5. CSS colour on the web

CSS Color Module Level 4 is a W3C Candidate Recommendation Draft (latest edition 29 October 2026; editors Tab Atkins Jr., Chris Lilley, Lea Verou). CSS Color Module Level 5 (W3C Working Draft, 29 October 2026) adds color-mix(), relative colour syntax, light-dark(), contrast-color(), alpha(), device-cmyk() and custom colour spaces through @color-profile; the spec marks device-cmyk(), @color-profile, custom spaces and relative alpha as at risk, so print work stays in ICC-managed PDF. Status as of October 2026, from MDN's browser compatibility data:

| Feature | Syntax | Baseline status | Notes |
|---|---|---|---|
| lab(), lch() | lab(60% 20 -30), lch(60% 36 300) | Widely available | CIELAB at D50; use for print-derived values |
| oklab(), oklch() | oklch(0.62 0.21 260) | Widely available (Chrome 111, Safari 15.4, Firefox 113; all three by May 2023) | The house authoring space; L as 0 to 1 or percent |
| color() predefined spaces | color(display-p3 1 0.2 0.1), color(srgb-linear ...), color(rec2020 ...), color(xyz-d65 ...) | Widely available | Spec keywords: srgb, srgb-linear, display-p3, display-p3-linear, a98-rgb, prophoto-rgb, rec2020, xyz, xyz-d50, xyz-d65 |
| color-mix() | color-mix(in oklch, var(--brand) 80%, white) | Widely available (since May 2023) | Default interpolation space is oklab; polar spaces accept shorter, longer, increasing, decreasing hue. Level 5 now takes one or more colours (`color-mix(in oklab, teal, olive, blue)`): Firefox 150 and Safari 27 ship it, Chrome does not yet |
| Relative colour syntax | oklch(from var(--brand) calc(l + 0.1) c h) | Baseline 2024 (Chrome 122, Firefox 128, Safari 18) | Safari 16.4 shipped an earlier partial version; test hue maths there |
| light-dark() | color: light-dark(#111, #eee) | Baseline 2024 | Needs color-scheme: light dark on the root |
| contrast-color() | color: contrast-color(var(--bg)) | Baseline newly available April 2026: Safari 26 (September 2025), Firefox 146 (December 2025), Chrome 147 (April 2026) | Returns only black or white, ties return white; the algorithm is UA-defined at this level and the spec advises against relying on the WCAG 2.1 ratio alone; MDN warns midtones such as #2277d3 return black, which fails small text. No target-contrast parameter at this level |
| alpha() | rewrites only the alpha channel of an origin colour | Newly available September 2026: Chrome 152, Firefox 155, Safari 27 | Marked at risk; until it is widely available write `oklch(from var(--x) l c h / 0.4)` |
| Gamut mapping | (automatic) | Specified in Level 4 | See 5.4 |
| @media (color-gamut: p3) | @media (color-gamut: p3) { ... } | Widely available | The query for "can this screen show P3" |

### 5.1 Authoring in OKLCH

Write every token as OKLCH and let the browser produce the hex. The reasons: one hue number per ramp, lightness arithmetic that matches perception, and a chroma value that says how far outside sRGB the colour sits (sRGB's maximum chroma runs from about 0.145 for cyan-blues near hue 215 to 0.32 for magenta; P3 adds about 0.03 to 0.09, most in the greens). Example tokens:

```css
:root {
  --ink-900: oklch(0.21 0.01 70);        /* warm near-black, hue-cast toward the brand */
  --paper:   oklch(0.985 0.004 80);      /* off-white, never #fff for long reading */
  --flame:   oklch(0.633 0.229 33.8);    /* house flame #F53901, on the sRGB edge */
  --flame-hover: oklch(from var(--flame) calc(l - 0.05) c h);
  --flame-tint:  color-mix(in oklch, var(--flame) 12%, var(--paper));
}
```

### 5.2 color-mix() and relative colour

color-mix() interpolates two colours in a named space. Use oklch for tints and shades of one hue (chroma and hue stay honest), oklab when mixing two different hues (no hue arc to argue about), and srgb only when matching a legacy value. Relative colour syntax takes one source colour and rewrites channels, which is how state colours and alpha variants are derived from a single brand token without a second hard-coded hex: `oklch(from var(--brand) l c h / 0.4)` for a 40 percent alpha version, `calc(h + 180)` for a complement.

### 5.3 Gradients and interpolation

Gradients accept an interpolation space: `linear-gradient(in oklch, var(--a), var(--b))`. Without a stated space, a gradient between legacy colours (hex, rgb(), hsl(), named) interpolates in gamma-encoded sRGB for compatibility (the grey dip of section 3.3 lives there), while one involving any modern syntax defaults to oklab; `in oklab` removes the dip, `in oklch longer hue` draws a rainbow around the wheel. The polar hue methods (shorter, longer, increasing, decreasing) decide which way round the hue circle the mix travels.

### 5.4 Gamut mapping behaviour

CSS Color 4 specifies gamut mapping in OKLCH: keep lightness and hue, reduce chroma until the colour fits, and clip locally at the end. The October 2026 draft lets an implementation choose among three algorithms (binary search with local MINDE, EdgeSeeker and Ray Trace), provided it uses its choice wherever CSS mandates gamut mapping; the binary search version takes one just noticeable difference (JND) as an OKLCH difference of 0.02. MINDE (minimum delta E) picks the in-gamut colour closest to the original. Browsers have historically clipped channel values, and implementations still differ, so an OKLCH accent beyond the screen's gamut can land on slightly different colours in different browsers. Hand-author the fallback (5.5) and treat browser mapping as a safety net.

### 5.5 Designing a palette that degrades from P3 to sRGB

1. Author everything in OKLCH. Keep text, icons, borders and any colour measured for contrast inside sRGB (check with OKLCH.com or culori's `inGamut('rgb')`); only backgrounds and accents are allowed to exceed it.
2. For each accent that exceeds sRGB, hand-author the sRGB fallback (reduce chroma until in gamut, keep L and h) so the fallback is a design decision.
3. Ship both:

```css
.cta { background: #F53901; }                 /* oklch(0.633 0.229 33.8), sRGB edge */
@supports (color: color(display-p3 0 0 0)) {
  @media (color-gamut: p3) {
    .cta { background: oklch(0.64 0.25 34); }    /* inside P3, outside sRGB */
  }
}
```

4. Export two sets of swatches for Figma (file set to sRGB for product work, Display P3 only when the deliverable is iOS or an Apple-screen-first campaign site; Figma removed the Unmanaged option in August 2023 and defaults new files to sRGB).
5. Test on an iPhone (P3), a Windows laptop (usually sRGB, often unmanaged) and a mid-range Android in Vivid mode.

## 6. Contrast

### 6.1 WCAG 2.x: the formula, the thresholds, the flaws

WCAG 2.2 is the current W3C Recommendation (first published 5 October 2023, latest edition 12 December 2024). Its contrast ratio is (L1 + 0.05) / (L2 + 0.05), where L is relative luminance: linearise each sRGB channel (divide by 255; if at or below 0.04045 divide by 12.92, else ((v + 0.055) / 1.055) to the power 2.4; before May 2021 the text said 0.03928, a change with no practical effect), then L = 0.2126 R + 0.7152 G + 0.0722 B. The 0.05 term models flare. Ratios run from 1:1 to 21:1.

| Criterion | Level | Threshold | Applies to |
|---|---|---|---|
| 1.4.3 Contrast (Minimum) | AA | 4.5:1 | Text and images of text |
| 1.4.3, large text | AA | 3:1 | At least 18 point, or 14 point bold (about 24 px, or 18.7 px bold) |
| 1.4.6 Contrast (Enhanced) | AAA | 7:1, large text 4.5:1 | Text |
| 1.4.11 Non-text Contrast | AA | 3:1 against adjacent colours | UI component boundaries and states, focus indicators, meaningful graphics |
| 2.4.13 Focus Appearance | AAA | Indicator area at least a 2 CSS px perimeter; 3:1 between the same pixels focused and unfocused | Keyboard focus; 2.4.11 Focus Not Obscured (AA) only requires the focused item not be entirely hidden |
| 1.4.1 Use of Color | A | n/a | Colour must never be the only carrier of information |

Known flaws, each documented in the W3C's own issue threads and in Andrew Somers' work:

- Polarity blind: the ratio is identical for dark-on-light and light-on-dark, yet light text on dark reads worse at the same ratio (halation, thinner apparent strokes).
- Size and weight are a single cliff at 18 point; a 13 px thin weight and a 17 px bold are treated the same.
- No spatial frequency model, so it says nothing about hairlines or thin icon strokes.
- Midtone errors: #777777 on white scores 4.48:1 (fail) and #767676 scores 4.54:1 (pass), with no visible difference. White text on orange #FF8C00 scores 2.3:1 (fail) while black on the same orange scores 9.0:1 (pass), although many readers find the white more legible on a saturated orange because of the Helmholtz-Kohlrausch effect.
- It is a luminance ratio, so it ignores hue entirely: red on green at 4.5:1 passes and vibrates.

### 6.2 APCA

The Accessible Perceptual Contrast Algorithm (APCA, Andrew Somers, Myndex Research) outputs a signed lightness contrast value Lc from about minus 108 to 106; positive for dark text on light, negative for light text on dark, so polarity is built in. It uses a different luminance derivation with a soft clamp for near-black, and it is paired with a font size and weight lookup table. Its guidance levels (APCA documentation, "APCA in a nutshell"):

| Lc | Use |
|---|---|
| 90 | Preferred for body text; also the suggested ceiling for very large bold type and large colour areas (too much contrast glares) |
| 75 | Minimum for body text columns |
| 60 | Minimum for content text that is not body copy (labels, captions) |
| 45 | Minimum for large, heavy headlines and for pictograms with fine detail |
| 30 | Absolute minimum for any text, including placeholders and disabled labels; large solid icons |
| 15 | Minimum for non-text elements such as dividers and focus outlines; below this is treated as invisible |

The size table assumes Helvetica or Arial with x-height ratio 0.52; other faces are scaled by their x-height. Text larger than 24 px at weight 300 or more has a maximum of Lc 90. The apca-w3 npm package README reports library version 0.1.9, algorithm 0.0.98G-4g with constants fixed since 15 February 2021, and calls itself beta.

### 6.3 WCAG 3 status

The WCAG 3.0 Working Draft dated 10 September 2026 leaves the contrast algorithm open: the Text contrast requirement reads "@@[contrast measure to be determined]" and an editor's note states "The contrast algorithm used in WCAG 3 is yet to be determined", adding that the requirement assumes a size and weight factor and may need a separate red-green colour vision requirement. The first public draft (January 2021) had used APCA; the current draft names no algorithm, and APCA's own documentation presents it as the candidate. The draft says the standard "still has several years of work". For anything legal, WCAG 2.2 AA is the working standard: India's Rights of Persons with Disabilities Act 2016 and the Guidelines for Indian Government Websites point to WCAG 2.x, and the European Accessibility Act, enforceable since 28 June 2025, reaches clients selling into the EU through EN 301 549, which incorporates WCAG 2.1 AA. 11-accessibility-and-inclusive-design.md holds the legal detail for India, the UAE and the EU.

### 6.4 The house approach

Pass WCAG 2.2 AA for every text and component colour pair (the legal floor and what automated audits test), and tune by APCA (the perceptual truth). Concretely:

- Body text: WCAG at least 4.5:1 and APCA at least Lc 75; aim for Lc 90 on long reading.
- Secondary text, captions, labels: WCAG at least 4.5:1 and APCA at least Lc 60.
- Headlines at 32 px and above, weight 500 and above: WCAG at least 3:1 and APCA at least Lc 45.
- Placeholder and disabled text: APCA at least Lc 30; WCAG exempts disabled controls; the text should still be readable.
- Borders, dividers, focus rings, icon strokes: WCAG 3:1 against the adjacent colour; APCA at least Lc 15 for dividers and 30 for icons.
- Where the two disagree, the stricter one wins for text; for large colour fields, APCA's ceiling of about Lc 90 governs, so pure white on #0A0A0A (19.8:1, Lc about minus 108) is softened on long pages to an off-white around oklch(0.93 0.005 80), which measures about Lc minus 92 on the same ground. The house flame #F53901 measures 3.84:1 and Lc 64 on white: it clears the large-text floors (3:1, Lc 45 at 32 px and above), which is why the italic flame accent (design-taste section 7) lives in headlines and ledes and never in body text, small labels or links.

Reason for the dual rule: a design that only satisfies WCAG can be unreadable (the midtone cases), and a design that only satisfies APCA can fail an audit the client's legal team commissions.

### 6.5 Non-text and component contrast

Inputs need a 3:1 border or fill against the page; a placeholder is not a label; a disabled state may fall below 3:1 but the component must still be identifiable; focus indicators need 3:1 against adjacent colours under 1.4.11 at AA, and the house also adopts the AAA rule of 2.4.13 (a 2 CSS px perimeter and a 3:1 change between focused and unfocused states) as its own floor. Icons that carry meaning need 3:1; decorative icons do not. Charts: each series against the background at 3:1 and adjacent series distinguishable (section 14).

### 6.6 Contrast in dark mode

Light text on dark halates: strokes look thicker and bleed, so drop the weight one step (400 instead of 500) and reduce the text lightness (OKLCH L 0.90 to 0.93, never 1.0) to cut glare. Keep accents at lower chroma (section 8.4), because saturated colour on dark vibrates and fails APCA more easily than on light. Large light surfaces on a dark page (cards, modals) behave like light mode inside them; measure both. APCA's negative polarity values are the right measure here; WCAG treats the two polarities identically.

## 7. Harmony theory and its limits

### 7.1 Itten

Johannes Itten taught the Bauhaus preliminary course from 1919 to 1923 and published The Art of Color in 1961. His system: a 12-hue wheel built from painter's primaries (red, yellow, blue), and seven contrasts that he argued account for every colour effect: contrast of hue, light-dark, cold-warm, complementary, simultaneous (section 1.5), saturation, and extension (the proportion of area each colour occupies; Goethe's ratios put yellow against violet at 1:3 by area because yellow is lighter). Three of the seven survive every test (light-dark, saturation, extension); they are the ones that describe how much of what, which is where real palettes are won or lost. The wheel itself does not survive: its primaries are pigment primaries, so its "complements" (red against green, yellow against violet) differ from the opponent axes of section 1.3 and from the 180 degree complement in any measured space, and its 12 steps are not perceptually equal (the warm half is crowded, the blue-green half is thin).

### 7.2 Albers and the relativity of colour

Josef Albers, Bauhaus student and teacher, then Black Mountain College and Yale, published Interaction of Color in 1963 (an 80-plate silkscreen edition; the paperback and the 2013 iPad edition carry the exercises). His claim: colour is the most relative medium in art, and a colour is seen only as its surround makes it, and never as it physically is. The exercises are the method, and the house uses them as checks:

- One colour appears as two: the same grey on a dark and a light ground reads as two greys. Check: never approve a swatch on white; approve it on the ground it will sit on.
- Two colours appear as one: two different colours, each on a ground chosen to push it, meet in the middle. Check: a brand colour on a saturated photograph is a different colour from the same hex on paper.
- The middle mixture: find the colour that is visually half way between two others. The point is that the visual midpoint is never the numeric RGB midpoint (section 3.3) and only approximately the OKLab midpoint.
- Transparency and space illusion: a third colour placed between two makes one appear to float over the other. This is the mechanism behind every overlay and tinted surface in section 8.
- The free study: colour chosen by eye from coloured paper, never mixed, because mixing invites theory and paper forces looking.

The relativity rule has one engineering consequence: every token in a system must be judged in its most common composite (text on surface on background), which is why QA in section 15.4 checks composites and never bare swatches.

### 7.3 Munsell

Albert H. Munsell published A Color Notation in 1905 and the Atlas of the Munsell Color System in 1915. Three dimensions, each measured by experiment to be visually even: hue (five principal hues R, Y, G, B, P and five intermediates, each divided into 10, so 100 hue steps), value (0 black to 10 white) and chroma (0 grey outward, open-ended, with yellow reaching about 12 and red about 14 in surface colour). Notation reads hue value/chroma, for example 5R 4/14 is a strong red of middle-dark value. The 1943 renotation by the Optical Society of America tied the samples to CIE 1931, and Munsell value is close to CIELAB L* divided by 10, which is why L* is uniform in the first place.

Two Munsell facts underlie section 8. First, the colour solid is lopsided: the highest reachable chroma sits at a different value for each hue (yellow near value 8, blue and purple near value 3 to 4, red near 5 to 6), so a ramp cannot keep constant chroma across its lightness steps. Second, perceived chroma steps are larger at low value, so dark colours need less numeric chroma to look "coloured". Munsell charts remain the standard in soil science, dental shade guides and the ANSI safety colour standard, which tells you how robust an experimentally spaced system is.

### 7.4 Harmony schemes, with the geometry stated honestly

| Scheme | Hue relationship | What it gives | Where it fails |
|---|---|---|---|
| Monochromatic | One hue, varied lightness and chroma | The tonal ramp of section 8.1; always coherent | Flat without a material or a neutral to anchor it |
| Analogous | Two to three hues within about 30 to 60 degrees | Warmth, calm, natural materials (stone, sand, wood all sit within 40 degrees of hue) | No accent; everything the same temperature |
| Complementary | 180 degrees apart | Maximum hue contrast; the accent mechanism | At equal lightness and chroma the edge vibrates (section 1.3); needs one side muted |
| Split complementary | One hue plus the two at 150 and 210 degrees | Contrast with less vibration | Three chromatic colours is already too many for most brands |
| Triadic | 120 degree spacing | Playfulness, children's and sports categories | Reads cheap in luxury unless two are reduced to near neutral |
| Tetradic (square or rectangle) | Four hues, 90 degree or two pairs of complements | Data palettes, editorial systems | Unmanageable as a brand palette |

Use the angles in OKLCH, never in HSL. In HSL, a 180 degree rotation keeps HSL lightness and ignores perceived lightness: navy #000080 (CIELAB L* about 13) rotates to olive #808000 (L* about 52), which reads as a different scheme; in OKLCH the complement of oklch(0.3 0.08 265) is oklch(0.3 0.08 85), a dark olive at the same lightness, which is the comparison a designer actually wants.

### 7.5 Temperature

Warm hues run from red through yellow (OKLCH hue about 20 to 110), cool from green through blue to violet (about 140 to 300); the boundaries near yellow-green and purple are relative and shift with context, which Albers demonstrated by making the same violet read warm against blue and cool against red. Two cautions. Kelvin runs the other way: a 2700 K lamp is "warm" in paint language and "low temperature" in physics, a 6500 K sky is "cool" and "high temperature" (section 11.1). And temperature is the cheapest coherence device there is: a palette whose neutrals share one hue cast (all slightly warm, or all slightly cool) reads as designed even when it is only greys, which is why house neutrals carry 0.004 to 0.015 chroma at the brand hue rather than zero (section 8.1).

### 7.6 The limits of wheel harmony

The wheel describes hue only. A real palette is three or four decisions in which hue is the least important:

1. The lightness structure: where the darkest and lightest surfaces sit and how many steps lie between them. A luxury page is typically L 0.98 paper, L 0.20 ink, and one mid surface; a dashboard needs six to eight working lightness steps.
2. The chroma budget: how much colour in total. Interior designers' 60-30-10 (60 percent dominant, 30 percent secondary, 10 percent accent, by area) is an extension rule in Itten's sense, and it holds for screens: a luxury brand's chromatic accent rarely covers more than 5 percent of a page.
3. The shared cast: one hue bias through the neutrals.
4. Then hue: usually one owned hue, occasionally a second at low chroma.

The wheel also assumes flat colour. A photograph, a brass fitting, a linen weave each carry a hundred hues; the palette's job is to sit beside them without argument, which is a question of chroma and lightness; hue angle contributes little.

### 7.7 How master palettes are actually built

- From material. Choose the three materials the brand would be made of if it were an object (Jaipur sandstone, undyed linen, oxidised brass; or lacquer, glass, steel). Photograph them under daylight (D65 or an overcast sky), sample in Lab with a 31 by 31 pixel average, then reduce chroma by 20 to 40 percent, because a material in light carries more chroma than a flat surface can hold without looking printed. Keep the hue; it is the honesty of the palette. This is the route for hospitality, real estate and beauty.
- From photography. Take the hero campaign image and extract five colours (Adobe Color's extract tool, Figma's image eyedropper, Coolors' image picker). Keep the two that cover the most area as background and surface, pick one for the accent, discard the rest. The palette then cannot fight the imagery because it came from it.
- From one owned hue. Fix the owned colour in OKLCH (section 9.2 for the spec). Build the neutrals by taking L 0.98, 0.93, 0.60, 0.35 and 0.20 at the same hue with chroma 0.004 to 0.015; build the dark by taking L 0.22 at the same hue with chroma 0.03; derive the complement at 180 degrees at low chroma for one secondary if needed. Fashion, jewellery and agency showcase work usually start here.
- Never from a generator's "harmony" button: the output is equal-chroma wheel geometry, which is exactly the cheap signal design-taste section 3 lists.

## 8. Palette construction for product and brand

### 8.1 Tonal ramps in OKLCH

A tonal ramp (also tint scale, colour scale) is one hue laid out in ordered lightness steps so that components can take any step and keep a predictable relationship to the others. The convention set by Tailwind (100 to 900 in v1, 2019; 50 added in v2, 2020; 950 in v3.3, 2023) gives 11 steps; Radix Colors uses 12 steps numbered 1 to 12 with a role assigned to each. Build in OKLCH for the reasons in section 2.8, and apply three rules:

1. Lightness steps follow a fixed table so that every ramp in the system shares the same L at the same step; this is what lets `stone-700` text sit on `flame-100` with a contrast you can predict.
2. Chroma follows a bell curve that peaks between steps 500 and 600 and falls toward both ends, because the sRGB and P3 gamut boundaries narrow toward white and black (section 7.3's lopsided solid), and because a near-white or near-black with high chroma cannot exist.
3. Hue drifts by a few degrees up to about 15 across the ramp, with the direction chosen per hue. Tailwind v4 (4.3.3 as of October 2026) shows both habits: its red runs from hue 17.4 at step 50 through 25.3 at 500 (`oklch(63.7% 0.237 25.331)`) to 26.0 at 950, so the lights lean pink, and its blue runs 254.6, 259.8, 267.9, so the darks lean violet. For warm material palettes the house leans the lights toward yellow and the darks cooler (a sunlit wall warms, a shadow cools), a painterly choice checked by eye.

House lightness table (used for every ramp so the system stays interchangeable):

| Step | L (light theme role) | Typical role | Chroma rule |
|---|---|---|---|
| 50 | 0.985 | Page background tint | 0.01 or less |
| 100 | 0.96 | Subtle surface, hover on white | 0.02 |
| 200 | 0.92 | Surface, selected row | 0.04 |
| 300 | 0.86 | Border strong, disabled fill | 0.07 |
| 400 | 0.76 | Placeholder text ceiling, icons on dark | 0.10 |
| 500 | 0.65 | Solid accent, charts | peak, 0.12 to 0.24 by hue |
| 600 | 0.55 | Accent hover, text on light at 4.5:1 for most hues (green at 0.56 measures 4.39:1, which is why the step sits at 0.55) | peak |
| 700 | 0.47 | Accent pressed, body text in colour | 0.11 |
| 800 | 0.38 | Headline in colour, dark surface accent | 0.09 |
| 900 | 0.30 | Dark surface, text on light at 7:1 | 0.07 |
| 950 | 0.22 | Near-black with hue, dark page background | 0.05 |

Worked ramp, a bottle green for a hospitality brand (hue 162 at the light end drifting to 155 at the dark end; all values inside sRGB):

```
green-50  oklch(0.985 0.010 162)   green-600 oklch(0.55 0.120 158)
green-100 oklch(0.96  0.022 162)   green-700 oklch(0.47 0.110 157)
green-200 oklch(0.92  0.040 161)   green-800 oklch(0.38 0.090 156)
green-300 oklch(0.86  0.070 160)   green-900 oklch(0.30 0.070 155)
green-400 oklch(0.76  0.100 159)   green-950 oklch(0.22 0.050 155)
green-500 oklch(0.65  0.120 158)
```

Check each ramp in OKLCH.com or with culori's `inGamut('rgb')` and reduce chroma on any step that falls outside sRGB; keep L and h, never clip. Then verify the contrast pairs the system promises (section 8.2) with Huetone or Leonardo before the ramp is published.

### 8.2 Roles

A palette becomes a system when each colour has a role, and a role has a contrast obligation. Section 07-design-systems-and-tokens.md section 3.2 defines the global and alias tiers; the roles below are the alias layer every Mask360 system carries.

| Role | Light theme (OKLCH L band) | Dark theme (L band) | Obligation |
|---|---|---|---|
| Background (page) | 0.97 to 0.99, chroma 0.004 to 0.01 | 0.18 to 0.26 | Nothing is measured against it except surface and borders |
| Surface (card, panel) | 0.99 to 1.0, or 0.94 to 0.96 on a white page | 0.22 to 0.30 | 1.1:1 to 1.3:1 against background; a hairline border carries the edge |
| Elevated surface (modal, popover) | 1.0 with shadow | 0.26 to 0.34 | Lightness carries elevation in dark mode, shadow in light |
| Border | 0.86 to 0.90, or ink at 12 percent alpha | 0.32 to 0.40, or paper at 12 percent alpha | 3:1 only when the border is the sole boundary of a control (WCAG 1.4.11) |
| Text primary | 0.20 to 0.28 | 0.90 to 0.93 | 4.5:1 and Lc 75 minimum; Lc 90 for long reading |
| Text secondary | 0.45 to 0.52 | 0.70 to 0.76 | 4.5:1 and Lc 60 |
| Accent (brand) | 0.55 to 0.65 solid; the hex matched to the brand spec | 0.65 to 0.75, chroma reduced 20 to 30 percent | 3:1 against its surface as a component; its text label measured separately |
| Positive | hue about 150, L 0.50 to 0.56 | L 0.72, chroma lowered | Same as accent, plus an icon or word (section 13.2) |
| Warning | hue about 75, L 0.60 to 0.70 | L 0.80 | Yellow fails against white at any chroma; pair with dark text or a dark fill |
| Danger | hue about 25, L 0.50 to 0.56 | L 0.70 | Never the brand accent if the brand is red or orange; the house flame at hue 32 forces danger to hue 15 with a different lightness |
| Info | hue about 240, L 0.50 to 0.58 | L 0.72 | Lower chroma than accent so it never competes |
| Focus | accent or a dedicated hue at L 0.60, 2 px outline, 2 px offset | same, lighter | 3:1 against every adjacent colour (WCAG 1.4.11; the 2.4.13 area rule as house floor) |

Reasons: the L bands keep text pairs inside the contrast obligations by arithmetic, so a new client ramp only needs its chroma and hue set; the accent is measured as a component, because its label (usually white or paper) is a separate pair; warning is the role every system gets wrong because saturated yellow has a luminance near 0.9.

### 8.3 Semantic tokens

Every role above is an alias token resolving to a global ramp step, named for the role; a value name is a defect: `color.text.default`, `color.surface.raised`, `color.accent.default`, `color.status.danger`. 07-design-systems-and-tokens.md sections 3.3 and 4.2 hold the naming rules and the DTCG colour format (`colorSpace`, `components`, `alpha`, `hex`); section 5 covers theming. The reason the colour file insists on it: a token named `grey-100` is wrong the moment the theme flips, and a client whose brand is navy cannot inherit a system that names its accent `orange`.

### 8.4 Dark mode strategy

- Lift the black. The page background sits at OKLCH L 0.18 to 0.26, which for a neutral runs from #121212 (Material's dark baseline, CIELAB L* about 5.5) to #242424 and spans the 10 to 15 percent lightness that dark-mode guidance usually cites (#1A1A1A to #262626); never #000000. Two reasons. OLED panels switch pixels fully off at pure black, and the transition from off to a dark grey is the slowest a pixel makes, which produces the trailing smear behind dark grey content scrolling over black ("black smear"); a page at L 0.20 keeps every pixel lit and the response uniform. And at pure black every near-black gradient band shows (section 3.4), while at L 0.20 the first visible step above the background is already lit. Exception: a full-bleed photographic or cinematic page, where the house uses #0A0A0A (OKLCH 0.145) on decks by design (design-taste section 7) because the content is image, and the OLED behaviour is accepted.
- Elevation by lightness. In light mode, shadow says "above"; in dark mode shadows vanish against a dark ground, so each level up is lighter. Material Design's dark theme guidance applies a white overlay from about 5 percent at the first elevation step to 16 percent at the highest; on #121212 the 5 percent overlay gives #1E1E1E and the 16 percent overlay gives #383838, an OKLCH climb from 0.18 to 0.235 to 0.34; the house steps about 0.03 to 0.05 L per level up to that 0.34 ceiling.
- Desaturate accents. A chroma that reads composed on white vibrates on dark (section 6.6), and a saturated colour on a dark ground triggers the Helmholtz-Kohlrausch effect harder. Reduce chroma 20 to 30 percent and raise L by 0.08 to 0.12 so the accent still passes 3:1 as a component. The house flame, oklch(0.633 0.229 33.8), becomes oklch(0.72 0.16 34) (#F87A5E) on dark: 6.3:1 against #1E1E1E and still inside sRGB.
- Text at L 0.90 to 0.93 and weight one step lighter (section 6.6).
- Images: dim by 10 to 15 percent (a `filter: brightness(0.88)` or an overlay) so a white product shot does not glare; this is a content decision, so agree it with the art director before it goes into the theme.
- Never invert the light palette by arithmetic. Dark mode is a second palette that shares hues and roles.

### 8.5 State colours

Derive states from the base with relative colour syntax (section 5.2) so a client colour swap re-derives everything:

| State | Light theme rule | Dark theme rule | Reason |
|---|---|---|---|
| Hover | L minus 0.04 to 0.06 | L plus 0.04 to 0.06 | About two JNDs (CSS Color 4 takes 0.02 in OKLCH as one); hover should be felt without being announced |
| Pressed | L minus 0.08 to 0.10 | L plus 0.08 to 0.10 | Two steps; the control must look physically pushed |
| Focus | Outline, see 8.2 | Same | Separate from hover because keyboard users need it on any state |
| Selected | Accent at 8 to 12 percent alpha over surface | Accent at 12 to 16 percent alpha | Reads as tinted surface; the text keeps its contrast because the tint is light |
| Disabled | Text and icon at 38 percent alpha of their enabled colour; fills at the 200 step | Same alpha; fills at the dark 800 equivalent | Alpha keeps the control recognisable on any surface and tells the eye it is the same control, muted; 38 percent is Material's long-standing figure; near-black ink at 38 percent over white composites to about #A9A9A9, which measures Lc 46 and 2.35:1, legible and clearly inactive |
| Loading, skeleton | Surface 200 pulsing to 100 | 800 to 700 | Low contrast on purpose; it must never be mistaken for content |

### 8.6 Alpha versus solid tints

Alpha tints (a colour with transparency, written `oklch(l c h / 0.12)`) adapt to whatever sits beneath, so one border token works on white, on a tinted surface and on an image; solid tints are a fixed colour per surface, so contrast can be computed once and the designer knows exactly what the eye sees. Rule: alpha for borders, dividers, overlays, selected tints and scrims; solid for any surface that text sits on, because a stack of two alpha surfaces darkens unpredictably and the contrast tool measures the wrong thing. Radix Colors ships every scale as both solid and alpha (its A1 to A12 steps) for this reason. Measure contrast on the composited result; Figma's inspector reports the flattened colour, and browser DevTools' contrast checker reads the rendered pixel.

### 8.7 Tools, as of October 2026

| Tool | Maker | What it does well | Limits |
|---|---|---|---|
| Leonardo (leonardocolor.io) | Adobe, open source | Generates ramps from target contrast ratios against a background, so steps are defined by the contrast they deliver; adaptive themes; exports CSS custom properties and design tokens | The contrast-colors package (v1.1.0) README documents WCAG ratio targets and interpolation in LCH, LAB, CAM02, HSL, HSLuv, HSV or RGB, with no OKLCH; re-check finished ramps in OKLCH and APCA |
| Huetone (huetone.ardov.me) | Alexey Ardov | Spreadsheet-style palette editor in OKLCH or LCH with a WCAG and APCA contrast readout per cell against chosen backgrounds; the fastest way to tune a full set of ramps | Browser only; no team library |
| OKLCH.com | Evil Martians (Andrey Sitnik, Roman Shamin) | Picker and converter; pastes HEX, RGB or HSL and returns OKLCH; shows P3 and Rec.2020 boundaries in a 3D model; proposes the closest sRGB fallback by chroma | Single colour at a time |
| Atmos (atmos.style) | Atmos | Palette and shade generation with contrast checks and export to code | Paid tiers; verify current feature set |
| Colorbox (colorbox.io) | Lyft Design, 2018 | Ramps defined by hue, saturation and brightness curves with easing, the first popular tool to make the chroma bell and hue drift explicit | HSB based, so steps need checking in OKLCH |
| Realtime Colors (realtimecolors.com) | Juxtopposed | Previews a five-role palette on a live page layout with contrast flags | For presentation and sanity checks; ramps are built in Huetone or Leonardo |
| Figma variables | Figma | Colour variables with modes (light, dark, brand A, brand B), aliasing, and code export; file colour profile sRGB or Display P3 (section 5.5) | The native picker exposes HEX, RGB, HSL, HSB and CSS strings; OKLCH authoring goes through plugins such as the OKLCH colour picker plugins in the community (verify the current plugin before adopting one) |
| culori, colorjs.io | Dan Burzo; Lea Verou and Chris Lilley | JavaScript libraries for conversion, gamut checks, interpolation and delta E; colorjs.io is the reference implementation behind much of CSS Color 4 | Code, not UI |

## 9. Brand colour: owning, specifying, protecting

### 9.1 Owning a colour

A colour is owned when the category reads it as one brand's before the logo appears. It is earned by decades of exclusive, consistent use on a single surface the public sees (a box, a sole, a bar wrapper), and it is sometimes protected by law. The cases that define the practice:

| Brand and colour | Specification | How it was built | Legal position |
|---|---|---|---|
| Tiffany Blue | Custom Pantone 1837, named for the founding year; the robin's-egg box since the 19th century | One surface (the box) and a refusal to sell the box without a purchase | Registered as a colour trademark in the United States in 1998 (verify the registration details before citing in a proposal) |
| Hermès orange | The orange box, adopted during the 1940s when the house's pre-war cream boxes became unavailable | Packaging, ribbon, carrier bag; the orange is almost absent from the products themselves | Protected through registrations and use in several jurisdictions; the lesson is the surface discipline rather than the filing |
| Cadbury purple | Pantone 2685C on milk chocolate wrappers since the early 20th century | A single category (milk chocolate bars), a single wrapper | UK: upheld at first instance in 2012 (Birss J), reversed by the Court of Appeal in 2013 (Société des Produits Nestlé v Cadbury UK, [2013] EWCA Civ 1174) because the wording "predominant colour" did not define a sign; in Société des Produits Nestlé v Cadbury UK [2022] EWHC 1671 (Ch) (Meade J, 5 July 2022) purple "applied to the whole visible surface of the packaging" stood, "applied to the packaging" failed as unclear, and purple per se was held to be a single sign capable of registration |
| Louboutin red | Pantone 18-1663 TP applied to the sole of a high-heeled shoe | One position on one product since 1992 | CJEU, Case C-163/16, 12 June 2018: a colour applied to a position is not a shape mark and so escapes the shape exclusion; the mark stands in the Benelux. In India, a 2018 single-judge decision of the Delhi High Court (Christian Louboutin SAS v Abubaker) held that a single colour is not a "mark" under the Trade Marks Act 1999; verify the appellate position before relying on it |
| Klein blue | International Klein Blue, an ultramarine pigment in a synthetic resin binder that keeps the pigment's dry brilliance | Yves Klein's monochromes from 1957 | Deposited by Soleau envelope at the French INPI on 19 May 1960; a record of priority, which is weaker than a trademark |
| Bottega green | The "parakeet" green that became the house signature under Daniel Lee in 2020 and 2021 | Runway, boxes, store interiors and the brand's entire social presence for about two years | Owned by use and by the category's attention, with no reliance on registration; Lee left in November 2021, which shows the risk of a colour tied to one designer's tenure |

The legal frame, because clients ask:

- European Union. Libertel (C-104/01, 6 May 2003): a single colour can be a trade mark if it is represented in a way that meets the Sieckmann criteria (C-273/00, 2002: clear, precise, self-contained, easily accessible, intelligible, durable, objective), which in practice means a colour code such as Pantone, and if it has distinctive character, which for a single colour almost always means acquired through use. Regulation (EU) 2017/1001 dropped the graphic representation requirement; EUIPO practice accepts a reproduction plus a recognised code.
- India. The Trade Marks Act 1999 defines "mark" to include a "combination of colours" (section 2(1)(m)) and lets a registration be limited to colours (section 10). Colour combinations have been protected, including in passing off (Colgate Palmolive v Anchor Health and Beauty Care, Delhi High Court, 2003, on red and white). Single-colour registration is exceptional, and the Abubaker decision above is the cautionary case. For a Mask360 client, the practical advice is: register the colour as part of a device mark and of the trade dress, keep evidence of exclusive use (ad spend, packaging runs, press), and never promise a single-colour monopoly.
- UAE. Federal Decree-Law No. 36 of 2021 on Trademarks governs; colour as a feature of a mark is registrable, single-colour marks are rare and need distinctiveness evidence. Verify with local counsel before any filing.
- Pantone's own trademark covers its names and numbers, and the colours themselves are free to use; a brand book may say "PANTONE 2685 C" and must attribute the mark, but the colour itself belongs to nobody until use makes it theirs.

### 9.2 Specifying a brand colour across media

A hex alone specifies nothing (section 2). A brand colour is a set of values, one per medium, derived from one master measurement:

| Medium | Specification | Notes |
|---|---|---|
| Master | CIELAB, D50, 2 degree observer, measurement condition M1 (ISO 13655:2017), measured from the approved physical chip with a spectrophotometer, with a stated tolerance (9.3) | Device independent, measurable, and what every ICC conversion runs through. Store as L*, a*, b* to one decimal |
| Spot ink | Pantone Formula Guide, Coated (C) and Uncoated (U), stating the closest match to the master and its measured delta E | The same ink number looks different on the two stocks; both references go in the book. The Formula Guide holds over 2,300 solid colours; new editions add a few dozen |
| Process print | CMYK build per output profile: one build for FOGRA51 (PSO Coated v3), one for FOGRA39 (ISO Coated v2) because Indian and Gulf printers still default to it, and one for GRACoL 2013 if the client prints in the United States | Derived by converting the master Lab with relative colorimetric intent and then adjusted by eye on a contract proof; the Pantone Color Bridge guide gives a starting build and an sRGB value for each solid |
| Screen, sRGB | HEX and RGB 0 to 255, converted from the master at D65 via Bradford adaptation, then checked on a calibrated sRGB display | The value most people will copy; it is a derivation of the master |
| Screen, wide gamut | `color(display-p3 r g b)` or OKLCH, with the sRGB fallback stated | Only if the master's chroma exceeds sRGB (most saturated oranges, cyans and greens do) |
| OKLCH | L, C, h to three decimals | The authoring value for every ramp and token (section 8.1) |
| Paint, powder coat, signage | RAL Classic (four digits, RAL 2004 is a pure orange; about 215 colours), or RAL Design (seven digits encoding hue, lightness, chroma, about 1,800 colours) | Shopfit and façade contractors in India and the Gulf work in RAL; give the nearest RAL and the measured delta E |
| Interiors, textiles, architecture | NCS (Natural Colour System, Swedish standard SS 01 91 02; notation S 1080-Y70R reads blackness 10, chromaticness 80, hue 70 percent of the way from yellow to red) | Architects and interior designers in hospitality projects specify in NCS; Dubai and Riyadh fit-out tenders frequently cite it |
| Video | Rec.709 RGB values at gamma 2.4, plus the Rec.2020 PQ value if an HDR master exists | Section 11.5; a logo baked into 4:2:0 footage should be checked on the vectorscope against the Rec.709 value |

Reason for the master: when the web team's hex, the printer's CMYK and the fit-out contractor's RAL disagree, the Lab master and its tolerance settle the argument with a measurement.

### 9.3 Tolerance: delta E

Delta E is the distance between two colours in CIELAB. Three formulas are in use: CIE76 (plain Euclidean distance; over-counts differences in saturated regions), CIE94 (weights chroma and hue), and CIEDE2000 (2001; five corrections including the blue hue rotation; the current industry standard, written dE00 or deltaE2000). A difference of 1.0 dE00 is about one just noticeable difference under controlled side-by-side viewing; the older 2.3 dE76 figure for a JND comes from Mahy, Van Eycken and Oosterlinck (1994). Practical bands, all in dE00 and all approximate because they depend on hue and surround:

| dE00 | What it means | Use as |
|---|---|---|
| under 1.0 | Not visible to most observers side by side | Proof-to-proof repeatability target |
| 1.0 to 2.0 | Visible to a trained eye side by side | Premium brand solid colour tolerance on a contract proof (a figure of 2.0 is what one proof-measurement vendor documents as a premium brand owner's tolerance) |
| 2.0 to 3.5 | Visible to an untrained eye side by side; invisible apart | Typical contracted press tolerance for spot colours (2.8 to 3.0 appears in the same vendor documentation); the mean converted value of the old ISO 5 dE76 threshold is about 3.3 |
| 3.5 to 5.0 | Clearly a different colour when compared | Acceptable only for secondary colours or uncoated stock |
| over 5.0 | Different colour | Reject |

House tolerances written into every print specification: brand solids 2.0 dE00 on contract proofs and 3.0 on press sheets, measured at nine positions across the sheet; paper white within 2.0 dE00 of the profile's white; secondary colours 4.0. Reason for stating the measurement positions: ink density varies across a sheet and a single centre reading hides it.

### 9.4 Colour in guidelines

The colour chapter of a brand book must contain, in this order: the palette in application (two or three real pieces) before any swatch; the owned colour with its full specification table (9.2) and tolerance (9.3); the neutrals with their hue cast stated; the dark theme palette; the ramps as tokens with their roles (8.2) and the contrast pairs that are guaranteed; the rules of proportion (7.6); the misuse page (the owned colour as body text, gradients of it, it on photography that fights it, the Pantone on uncoated without the U reference); and the files: ASE swatches, a Figma library with variables, CSS tokens, DTCG JSON, InDesign swatch library, and the Pantone references with the Pantone attribution line. Date every value and name the measurement condition, because a guideline without "D50/2, M1, dE00" has no way to be checked.

## 10. Print colour

Cross-reference: 20-print-packaging-ooh-and-physical-production.md carries the production process (stocks, finishes, imposition, press checks); this section carries the colour engineering a designer must settle before the file leaves the studio.

### 10.1 CMYK gamut against RGB

Neither contains the other. A FOGRA51 press cannot reach sRGB's saturated blue (sRGB 0 0 255 converts to a dull violet), its bright greens or its pure orange; the press can reach a cyan and a yellow slightly outside sRGB, which is why a swatch book cyan looks livelier than its screen simulation. The usable overlap is roughly the muted two thirds of sRGB, which, usefully, is where luxury palettes live. Rules: design in RGB with a soft proof on (section 4.3) so out-of-gamut colour is seen early; convert at the end with relative colorimetric and black point compensation for flat colour, perceptual for photographs; never design in CMYK on screen for a piece that will also live on screen, because the CMYK document hides the colours the web version could have.

### 10.2 Rich black builds

Black ink alone (K 100) prints as a dark grey with a density around 1.7 to 1.9 on coated stock; large areas look thin and warm beside a photograph. A rich black adds other inks under the K:

| Build | Total ink | Character | Use |
|---|---|---|---|
| C0 M0 Y0 K100 | 100 | Flat, slightly warm grey-black | All body text and any type under about 14 pt; fine rules; anything that must register perfectly |
| C60 M40 Y40 K100 | 240 | Neutral rich black, the common default | Large solid areas, backgrounds, display type above about 24 pt |
| C70 M50 Y30 K100 | 250 | Cool black with a blue cast | Beside cool photography, tech and finance brands |
| C35 M60 Y60 K100 | 255 | Warm black with a brown cast | Beside skin and wood; hospitality and F&B |
| C40 M30 Y30 K100 | 200 | Lighter rich black for uncoated stock | Keeps inside lower ink limits (10.3) |
| C75 M68 Y67 K90 | 300 | What Photoshop makes of RGB #000000 through its old default U.S. Web Coated (SWOP) v2 profile | Never set by hand; it sits at the ink limit and shows every registration error |
| C100 M100 Y100 K100 | 400 | Registration | Printer's marks only; applied to artwork it over-inks, offsets and cracks |

Rules: keep one rich black per document so panels match; never put small type or thin rules in a rich black (a 0.1 mm misregistration shows as a coloured fringe); never knock white type under 8 pt out of a rich black for the same reason; on uncoated stock prefer the 200 build; check that any black in a placed image matches the document's rich black or the join between image and panel shows.

### 10.3 Total ink limit

Total area coverage (TAC, also total ink limit) is the maximum sum of the four ink percentages at any point. Exceeding it causes set-off (wet ink transferring to the sheet above), slow drying, mottling and cracking on folds. Limits are set by the output profile and the printer: PSO Coated v3 (FOGRA51) is built to 300 percent (the ICC profile registry lists TAC 300 percent, medium GCR, maximum K 96 percent); uncoated profiles commonly run 260 to 300 percent and many uncoated presses specify 260 to 280; newsprint profiles such as ISOnewspaper26v4 run 240 percent. Set the limit by converting through the printer's profile, and check with Acrobat's Output Preview (Total Area Coverage warning) before sending. Ask the printer for the figure: Mumbai and Delhi commercial printers vary, and the same file that runs clean on a Heidelberg in Dubai can set off on a cheaper uncoated board in Jaipur.

### 10.4 Dot gain and tone value increase

Halftone dots spread as ink hits paper (mechanical gain) and appear larger because light scatters inside the paper (optical gain). The sum is tone value increase (TVI, the ISO term; dot gain in older usage), largest at mid tints. ISO 12647-2 defines target TVI curves (A to E); the ICC profile registry lists FOGRA39 at about 13 percent and FOGRA51 at about 16 percent (rounded, curve A for the chromatic inks in both), uncoated conditions run higher, and newsprint around 26 percent (the figure embedded in the ISOnewspaper26 profile name). Consequences: a 10 percent tint of a brand colour prints closer to 20 percent on uncoated; skin in a photograph goes muddy on uncoated unless the separation compensates; a 50 percent grey panel designed on screen prints visibly darker. The output profile carries the compensation, which is the practical reason to convert through the right profile and to soft proof.

### 10.5 Spot colours

A spot colour is a pre-mixed ink printed from its own plate, specified by the Pantone Matching System (PMS) or another library. Reasons to use one: a brand solid that CMYK cannot reach (most oranges, bright blues, many greens), consistency across runs and printers, and effects CMYK cannot do (metallics, fluorescents, varnish). Costs: a fifth plate and wash-up, and a colour that cannot be reproduced on a four-colour digital press.

- Coated versus uncoated: the same formula, two appearances; the book shows both and the brand book must cite both (PANTONE 2685 C and 2685 U).
- Pantone Color Bridge: each solid beside its closest CMYK simulation, with the CMYK build, sRGB and HEX values; the bridge is where a designer reads how far the process version falls (the distance is visible in the book and measurable in delta E).
- Metallics: the 871 to 877 series (871 C and 872 C golds, 877 C silver) and the 8000 series; they cannot be soft proofed and must be seen on a drawdown; they dull under matte lamination and tarnish on uncoated.
- Neons: the 801 to 814 C fluorescents; they fade in daylight within weeks and cannot be matched on screen.
- Pantone Connect: since Adobe removed the built-in Pantone libraries from Photoshop, Illustrator and InDesign in late 2022, the libraries live in the paid Pantone Connect subscription and plugin; price unverified as of this writing, and the physical guide remains the only reliable reference because screen simulations of spot inks are approximations.

### 10.6 Extended gamut

Extended colour gamut (ECG) printing adds orange, green and violet (OGV) to CMYK to reach most spot colours with seven process inks. Hexachrome (Pantone, 1994) added orange and green and was discontinued in 2008. The current forms: seven-colour offset and flexo characterised by FOGRA55 (the 7C dataset), and HP Indigo's ElectroInk set, which adds orange, violet and green to CMYK on its digital presses and claims coverage of most of the Pantone range (HP's current percentage was not verifiable at the time of writing; ask the press operator for the measured figure on the stock). Pantone's Extended Gamut Coated Guide (2015) shows each solid as its seven-ink simulation. When to use it: packaging runs with several spot colours, short-run luxury packaging on Indigo, and any job where a brand orange must print beside a brand green without two extra plates.

### 10.7 Press conditions: FOGRA39, FOGRA51, FOGRA52, GRACoL

| Characterisation | Profile | Standard | Measurement | Paper white (approximate Lab) | Where it runs |
|---|---|---|---|---|---|
| FOGRA39 | ISO Coated v2 (ECI) | ISO 12647-2:2004, PT1 and PT2 | M0, no optical brightener allowance | 95, 0, minus 2 | The default at most Indian and Gulf commercial printers as of 2026 |
| FOGRA51 | PSO Coated v3 (ECI, 2015) | ISO 12647-2:2013, printing condition 1, premium coated, 115 g/m2, fluorescence moderate (8 to 14 delta B, ISO 15397) | M1 (UV included), paper with optical brighteners | 95, 1.5, minus 6 | European standard; the house default for anything printed in Europe or on modern bright stock |
| FOGRA52 | PSO Uncoated v3 (ECI, 2015) | ISO 12647-2:2013, printing condition 5, wood-free uncoated | M1 | Bluer and darker than coated | Uncoated brochures, stationery, menus |
| GRACoL 2013 | CRPC6 | ISO 15339 characterised reference printing conditions; G7 calibration | M1 | similar to FOGRA51 | United States sheetfed |
| SWOP 2013 | CRPC5 | as above | M1 | | United States web offset, magazines |
| Japan Color 2011 | Japan Color 2011 Coated | ISO 12647-2 adapted | | | Japan |

Why the measurement condition matters: modern papers carry optical brightening agents (OBAs) that fluoresce blue under UV; M0 measurement ignores it and M1 includes it, so a FOGRA51 proof looks cooler and whiter than a FOGRA39 one of the same file, and a brand cream specified under one looks different under the other. Ask every printer which condition they match and send the file converted to that profile with the output intent embedded (PDF/X-4).

### 10.8 Proofing

- Soft proof: section 4.3; for layout decisions only.
- Contract proof: an inkjet proof made to ISO 12647-7:2016 on a certified system, carrying a Ugra/Fogra Media Wedge CMYK V3 measured and reported; the press is then contracted to match it. Proof systems and reference materials in this category document their accuracy at about 1.5 to 2.5 dE00 against the characterisation data.
- Drawdown: a spot ink pulled by hand on the actual stock; the only honest reference for Pantone, metallic and fluorescent inks.
- Wet proof or press proof: a short run on the production press; expensive, and worth it for packaging in a luxury launch.
- Press check: standing at the press at the start of the run with the contract proof, a loupe, a spectrophotometer and the tolerance sheet from section 9.3; sign the first good sheet and keep it.
- Viewing: ISO 3664:2009 booth at D50, 2000 lux for critical comparison; a window or an office LED is where most print disputes begin.

## 11. Colour in photography and video

### 11.1 White balance and Kelvin

Colour temperature is the temperature, in kelvin (K), of a black-body radiator whose light matches the source; lower is redder, higher is bluer. White balance is the camera or grade setting that makes a neutral surface neutral under that source. Correlated colour temperature describes sources (fluorescent, LED) that are not black bodies, and a second axis, tint, corrects their green or magenta deviation (fluorescent tubes and cheap LEDs run green; cameras expose this as a tint slider). Common sources, approximate because real lamps vary:

| Source | Kelvin |
|---|---|
| Candle flame, oil lamp, diya | 1,800 to 1,900 |
| Household tungsten bulb | 2,700 to 2,800 |
| Warm white LED (hospitality standard in Dubai and Mumbai fit-outs) | 2,700 to 3,000 |
| Halogen, tungsten studio lamp | 3,000 to 3,200 |
| Sunrise and sunset, first and last half hour | 2,500 to 3,500 |
| Neutral white LED, cool fluorescent | 4,000 to 4,500 |
| Direct midday sun | 5,000 to 5,600 |
| Electronic flash, daylight-balanced LED | 5,500 to 6,000 |
| Overcast sky | 6,500 to 7,500 |
| Open shade under blue sky | 7,000 to 8,000 |
| Clear blue sky, no sun | 9,000 to 12,000 and above |

Rules: set white balance by a grey card or a Calibrite ColorChecker Classic (24 patches, with a neutral row and six skin and natural-object patches) in each lighting setup; never auto white balance across a sequence, because it drifts shot to shot and makes a product change colour; in mixed light (an Indian wedding with tungsten uplighters, LED panels and a window; a Gulf restaurant with 2,700 K downlights beside a 6,500 K daylight terrace) choose the source that lights the subject's face or the product and gel or dim the rest; shoot raw or log so the decision is reversible (11.2). A brand colour photographed under 2,700 K and balanced to 5,600 K in post never fully recovers, because the camera's red channel clipped and the blue channel is noise.

### 11.2 Log and gamma

A log encoding (Sony S-Log3, ARRI LogC3 and LogC4, Canon Log 3, Panasonic V-Log, Blackmagic Film Gen 5, Apple Log on iPhone 15 Pro and later) stores the sensor's 12 to 16 stops in a 10 bit container by compressing highlights and lifting shadows along a logarithmic curve, in the way film negative does. The image looks flat and grey because it has not yet been displayed through a transfer function; it is a storage format; the look comes later. It must be transformed to the display space (Rec.709 at gamma 2.4 for SDR, PQ or HLG for HDR) through a colour space transform or a technical LUT before grading decisions are made. 16-editing-colour-grading-and-delivery.md section 7.5 covers why to grade in log or an intermediate space (ACES, DaVinci Wide Gamut) and section 7.4 covers Rec.709 at 2.4 as the SDR delivery standard. The colour consequence for a campaign: stills shot raw and video shot log can be brought to the same brand colour because both hold the scene; a phone clip shot in a standard picture profile has already been graded by the manufacturer and will never quite match.

### 11.3 Grading primer and the skin tone line

Grading is covered in 16-editing-colour-grading-and-delivery.md sections 7 and 8 (pipeline, Resolve colour management, ACES, primaries, curves, qualifiers, LUTs, film emulation, the muted luxury grade, HDR, scopes). What a creative director must carry from this file into a grade session:

- Order: balance (white balance and exposure per shot, matched across the scene), then primaries (lift, gamma, gain, saturation), then secondaries (qualified skin, product, sky), then the look, then the trim for each deliverable.
- The vectorscope plots hue as angle and saturation as distance from centre. Human skin of every ethnicity falls along one narrow hue line between the red and yellow targets (the I line of the old NTSC YIQ system, at about 10 to 11 o'clock on the scope), because the colour comes from haemoglobin and melanin, which vary the saturation and luma far more than the hue. Indian and Gulf skin tones sit further out on the same line (more saturation) and lower in luma. A grade that pushes shadows toward teal takes darker skin off the line toward green faster than lighter skin; a warm grade pushes it toward orange and the eye forgives that more. Check every face on the scope against the line, and 16-editing-colour-grading-and-delivery.md section 8.5 for the handling.
- Product colour: isolate the product with a qualifier and match its vectorscope position to the Rec.709 value derived from the brand Lab master (section 9.2); do it before the look is applied and protect it from the look with a key.
- Monitor at 100 nits, D65, BT.1886 (section 4.4), and look at the result on a phone before signing it.

### 11.4 Why teal and orange is tired

The teal and orange grade pushes skin toward orange and everything else (shadows, skies, walls) toward its complement, teal, so faces separate from backgrounds by hue contrast. It became the default of the digital intermediate era in the mid 2000s (Michael Bay's Transformers films are the usual citation) and Todd Miro's 2010 essay "Teal and Orange: Hollywood, Please Stop the Madness" named it. Why it fails luxury work: it turns every material orange (brass, cream, sandstone, wood and skin become one colour), it destroys brand colours (a bottle green goes teal, a burgundy goes brown), and it is recognised instantly as a preset. The house alternative is the muted grade in 16-editing-colour-grading-and-delivery.md section 8.10: keep the material hues honest, reduce overall chroma, separate faces from backgrounds by luminance and depth of field.

### 11.5 Colour continuity across a campaign

A campaign's stills, film, social cutdowns, print and web must show the product and the brand colour as one colour. The mechanism:

1. One reference frame: a graded still agreed with the client before the shoot, under the lighting the shoot will use, with the product's Lab master read against it.
2. One ColorChecker in every setup, in both stills and motion, so both pipelines can be balanced to the same neutral.
3. A show LUT (the look, exported from the grade) shared with the stills retoucher as an ICC or a 3D LUT, so the retoucher works toward the film instead of guessing.
4. Deliver video in Rec.709 at gamma 2.4 and stills in sRGB at gamma 2.2, then view them side by side on the same calibrated display at 100 nits; the shadows will differ (section 3.2) and the grade's shadow level should be chosen so that the Instagram version (phone, 2.2, bright room) is right, because that is where most of the audience sees it.
5. Keep saturated brand colour as a graphic overlay on video; baking it into 4:2:0 footage smears it (section 2.7).
6. Every export carries its profile or its colour tags (section 4.1); untagged exports are the most common continuity failure.
7. One person owns colour across the campaign: on a Mask360 production this is the colourist for motion and the retoucher for stills, with the creative director approving both against the reference frame.

## 12. Colour psychology and culture

### 12.1 Evidence against folklore

What the research supports, and what it does not:

- Elliot and Maier's review in the Annual Review of Psychology (2014, volume 65, "Color psychology: effects of perceiving color on psychological functioning in humans") finds the field young, the effects small and context dependent, and many findings unreplicated; their own red-and-attraction result (Elliot and Niesta, 2008) has been difficult to reproduce at the original size.
- Labrecque and Milne (2012, Journal of the Academy of Marketing Science, "Exciting red and competent blue") show that hue, saturation and lightness shift which brand personality traits a United States sample attributes to a logo; the effect is real, learned and culture bound.
- The claim that "62 to 90 percent of a judgement is based on colour" traces to a 2006 Management Decision article by Satyendra Singh citing a secondary source; treat it as folklore and never put it on a slide.
- What holds everywhere: colour is a category cue (section 12.5), a recognition cue (consistent use makes the brand identifiable faster; this is the mechanism behind section 9.1), a salience cue (the one saturated element draws the eye first), and a thermal cue (warm colours read as warm). Everything beyond that is association, and associations are local.

House rule: a colour is justified by the material world of the brand, the category's codes, and the contrast it creates. A psychology table justifies nothing.

### 12.2 Luxury colour codes, with their technical values

The codes design-taste names (black, white, cream, bottle green, oxblood, navy, brass) share two technical properties: chroma below about 0.10 in OKLCH and a hue cast that references a material. Starting values, to be adjusted to the brand's master and never used as is:

| Code | OKLCH starting value | Material reference | Print note |
|---|---|---|---|
| Ink black | oklch(0.20 0.012 60) | Lacquer, iron gall ink | Warm rich black build (10.2) |
| Paper white | oklch(0.985 0.004 85) | Uncoated cotton stock | The stock itself; do not print it |
| Cream | oklch(0.95 0.025 85) | Ivory, bone, candle wax | A 4 to 6 percent yellow tint; on FOGRA51 stock reads cooler than on FOGRA39 |
| Bottle green | oklch(0.35 0.07 160) | Glass, cypress | In CMYK gamut; a spot is unnecessary |
| Oxblood | oklch(0.32 0.10 20) | Cordovan leather | Near the CMYK edge; proof it |
| Navy | oklch(0.28 0.06 265) | Indigo-dyed wool | CMYK navies go purple; add K, reduce M |
| Brass | oklch(0.72 0.10 85) | Polished brass, champagne gold | A flat gold always disappoints; use Pantone 871 C or a foil (20-print-packaging-ooh-and-physical-production.md) |

### 12.3 India

- Saffron (kesari, bhagwa) carries religious meaning across Hindu, Sikh and Buddhist traditions and sits on the national flag, where it is paired with white and India green; the flag's colours are specified by the Bureau of Indian Standards (IS 1) and the Flag Code of India 2002 governs its use, so never use the flag or an imitation of its three bands in advertising. Saffron has also been a political colour since the 1990s; a brand that wants to be neutral uses it with care or with the full flag context (Independence Day, Republic Day).
- Red: the bridal colour across most of the north and west (sindoor, the red lehenga, the Bengali red-bordered white sari), and the colour of auspicious beginnings (kumkum, the red thread). Since about 2018 metropolitan brides have moved to pastels, ivory and the Sabyasachi-era muted jewel tones, so a bridal campaign in red reads traditional and one in ivory reads editorial; both are correct and the brief must say which.
- White: worn at mourning and by widows in Hindu tradition, so a white-only campaign for an older demographic needs care; in Kerala the cream and gold kasavu is festive and white is also the colour of the Independence Day kurta. Context decides.
- Green: Islam, fertility and the harvest; the Hyderabad and Lucknow traditions; also the colour of the new money in UPI success states.
- Gold and red together: Diwali, Dhanteras and the wedding card; the default of every October campaign in the country, which is the reason design-taste tells you to refuse it unless it is the idea. Technically, a flat CMYK gold reads as mustard; gold needs foil, a metallic spot or photography of real metal.
- Regional: Rajasthan's saturated bandhani and leheriya against the desert (saturation as contrast with a monochrome landscape; Jaipur's pink is a terracotta wash applied in 1876, closer to oklch(0.68 0.09 40) than to any pink), Bengal's red and white, Tamil Nadu's temple polychromy, the Konkan's monsoon green. Build the palette for a place and a month (Jaipur in March), since a palette for the whole country describes nothing.
- Holi: the one occasion when the full gamut is the idea; every brand does a Holi post, so the house treats it as a test of restraint.

### 12.4 The Gulf

- Green: the colour of Islam and the Saudi flag (green field, the shahada and a sword). The Saudi flag is never flown at half mast and must not appear on disposable or commercial items; do not place the shahada on merchandise, packaging or anything that can be discarded. Saudi National Day (23 September) campaigns use the flag green and white.
- The UAE flag: red, green, white and black, the Pan-Arab colours, adopted on 2 December 1971 (the design is credited to Abdullah Mohammed Al Maainah). UAE National Day campaigns use the four; the flag itself is governed by federal law on its use, and the official colour codes could not be verified on the government portal at the time of writing, so obtain them from the Ministry's brand guidance before producing anything with the flag. Qatar's maroon and Kuwait's and Jordan's Pan-Arab sets follow the same rule: obtain the state specification.
- White: the kandura, purity, Eid; luxury in the Gulf is frequently white and gold on white, and the Dubai market reads cream as warmth rather than as age.
- Gold: read as the metal itself (Dubai's Gold Souk, the 22 and 24 carat culture); a CMYK gold reads cheap here faster than anywhere, so the same rule as 12.3 applies.
- Ramadan: deep blue, gold, amber lantern light and crescent iconography are the default of every brand in the region; a Mask360 Ramadan campaign keeps the quiet (the hour before iftar, the table, the hands) and lets a single warm light carry the colour.
- Palette temperature: the region's light is high Kelvin and harsh at noon, low and warm at the two golden hours; the hospitality and real estate reference imagery is almost always shot in the latter, which is the trope design-taste names; the counter-move is the blue hour and the overcast winter day.

### 12.5 Food colour rules

- Category codes that hold: red, orange and yellow for appetite and spice (chilli, turmeric, saffron, the Indian spice shelf); green for fresh, organic and vegetarian (and the green dot of India's FSSAI vegetarian mark, with the brown dot for non-vegetarian, which must appear on packaged food and whose colours are fixed by regulation); black and gold for premium; matte, uncoated and kraft for artisanal; blue is almost absent from natural food and reads as artificial on the food itself, while it works on dairy, water and mint packaging.
- The food must be the right colour: metamerism (section 1.5) is why a biryani that looked right under the studio's 5,600 K LED looks grey under a 4,000 K supermarket tube; check packaging under the store's light.
- Photography: 5,000 to 5,600 K, slightly warm, never teal in the shadows; the Gulf's dates, coffee and gold and India's spice colours are low in lightness and high in chroma, so expose for the food and let the ground fall away.
- Alcohol-free markets: the Gulf's "mocktail" and the Indian "dry day" contexts change the colour codes of beverage work; an amber that signals whisky in Mumbai signals a date syrup in Riyadh.

### 12.6 Gender coding and its traps

Pink for girls and blue for boys is a mid 20th century retail convention; Jo B. Paoletti's Pink and Blue (2012) documents trade advice before the 1940s that often assigned pink to boys. The traps: the "shrink it and pink it" product line that women read as condescension; the all-black, all-chrome "men's" grooming code that reads identical across every brand; the "Millennial pink" of 2016 to 2018 as the clearest example of a colour that peaked and died in three years. India and the Gulf complicate the code further: pink is a men's colour in Rajasthan (the Jaipur turban, the city) and across South Asian menswear, and in the Gulf the kandura's white and the abaya's black make tone and material the gendered signal, with hue carrying little. Rule: code by material, tone and typography, and let hue follow the brand.

### 12.7 The 2026 palettes, technically

design-taste, references/currency-2026.md reads the wave (muted, nature-grounded palettes rising; dark mode with one acid accent peaking; cream, serif and terracotta dead). The technical consequence belongs here: a muted palette has OKLCH chroma of 0.02 to 0.08, which makes it fragile. A Samsung Vivid mode (section 4.5) adds 10 to 20 percent chroma and turns a stone grey into a lilac; a 4:2:0 encode at a low bitrate smears a sage green into the adjacent neutral; a FOGRA39 to FOGRA51 switch shifts a cream visibly. Test muted palettes on the worst screen in the office and on uncoated stock before the client sees them on a calibrated monitor. Pantone's Colour of the Year 2026 is PANTONE 11-4201 Cloud Dancer, a white, which confirms the current; technically a white is the hardest brand colour to hold, because the paper's optical brighteners (M0 against M1, section 10.7), the screen's white point and the surrounding greys decide it. 11-4201 is a Fashion, Home + Interiors number, so print and screen use needs a measured Lab and a nearest Formula Guide or Bridge match.

## 13. Colour vision deficiency

### 13.1 Types and prevalence

Colour vision deficiency (CVD) is the reduced or absent function of one cone type (section 1.3). Anomalous trichromacy (a shifted cone, milder) is far more common than dichromacy (a missing cone).

| Type | Cone affected | Experience | Prevalence |
|---|---|---|---|
| Protanomaly, protanopia | L (long, red) | Reds dark and dull; red against black and red against green merge; orange and green close | Together about 1 percent of men for the dichromatic form, with the anomalous form of similar size |
| Deuteranomaly, deuteranopia | M (medium, green) | Green against red, brown and orange merge; the most common form; deuteranomaly alone is about 5 percent of men | The largest group |
| Tritanomaly, tritanopia | S (short, blue) | Blue against green and yellow against pink merge; very rare and not sex linked | Well under 0.1 percent |
| Achromatopsia (rod monochromacy) | All cones | No hue; low acuity, photophobia | About 1 in 30,000 |

Totals: about 8 percent of men (1 in 12) and about 0.5 percent of women (1 in 200) have a red-green deficiency (Colour Blind Awareness); Okabe and Ito's data put the figure for men at about 8 percent among people of European descent, about 5 percent among East Asian men and about 4 percent among African men. Reliable India-specific prevalence figures were not verified for this file; assume the global range. The design consequence is arithmetic: an audience of 100,000 men contains 5,000 to 8,000 people for whom red and green status colours are one colour.

### 13.2 Designing without colour as the only channel

WCAG 1.4.1 (Use of Color, level A) requires that colour never be the only way information is conveyed. Each use of colour gets a second channel:

| Colour use | Second channel |
|---|---|
| Status (success, warning, error) | Icon shape (tick, triangle, circle with cross) and a word |
| Form error | Icon, text, and a thicker border or an outline offset, since a red border alone vanishes |
| Links in body text | Underline (the house keeps it) or weight; a colour-only link fails |
| Charts, series | Direct labels at line ends, differing marker shapes, dash patterns, ordering in the legend matched to the chart |
| Maps, heat tables | Lightness ordering (section 14.3) plus value labels |
| Required fields | An asterisk or the word "required"; red alone is invisible to a protan |
| Toggle on and off | Position and a label; fill colour alone fails |
| Payment success and failure (UPI, card) | Full-screen icon and sentence; a green tick and a red cross are the same shape to nobody and the same colour to many |

Test: render the screen in greyscale (Figma's plugin or the OS filter); if the information survives, the second channel is working.

### 13.3 Safe palettes

- Okabe and Ito (2008, "Color Universal Design"): eight colours distinguishable under protan and deutan vision. Hex values as published and reproduced by Bang Wong (Nature Methods, 2011): black #000000, orange #E69F00, sky blue #56B4E9, bluish green #009E73, yellow #F0E442, blue #0072B2, vermilion #D55E00, reddish purple #CC79A7. Use it as the categorical set for any chart with up to seven series; re-order it so the first two series are blue and orange.
- Viridis family (Stéfan van der Walt and Nathaniel Smith, 2015, the matplotlib 2.0 default): viridis, magma, plasma and inferno are sequential maps with monotonic lightness, uniform in CAM02-UCS, readable in greyscale and under CVD; cividis (Nuñez, Anderton and Renslow, 2018) is optimised for deuteranopia. Use for any heat map, density or continuous data.
- Paul Tol's qualitative schemes (bright, vibrant, muted, light) are CVD-tested alternatives with a more editorial tone than Okabe-Ito.
- IBM Design's colour-blind-safe set (#648FFF, #785EF0, #DC267F, #FE6100, #FFB000) is a five-colour categorical palette published by the IBM Design Library.
- ColorBrewer's "colorblind safe" filter (section 14.2).

### 13.4 Simulation tools

- Chrome DevTools: the Rendering tab's "Emulate vision deficiencies" list offers no emulation, blurred vision, reduced contrast, protanopia, deuteranopia, tritanopia and achromatopsia; run every status system and chart through protanopia and deuteranopia at least.
- Sim Daltonism (Michel Fortin): open-source macOS and iOS app that filters a floating window or the camera in real time; the fastest way to check a Figma canvas, a deck or a printed proof.
- Figma plugins: Color Blind (simulates the eight common types on selected layers) and Stark (contrast plus vision simulation); verify the current plugin names in the community before relying on one.
- Photoshop and Illustrator: View, Proof Setup, Color Blindness (Protanopia-type, Deuteranopia-type), which follows the Okabe and Ito simulation.
- Phones: iOS Accessibility, Display and Text Size, Colour Filters; Android developer options, "Simulate colour space". Useful for client demonstrations on the device they use.

Rule: simulate at the final export, after the grade and the compression, because both shift the colours the simulation would otherwise pass.

## 14. Data colour

### 14.1 Scale types

- Sequential: one hue (or a short hue arc) across a monotonic lightness range, for ordered quantities (revenue by region, density). Light means less, dark means more on a light theme; invert the lightness on dark themes and keep the hue.
- Diverging: two hues meeting at a neutral midpoint, for data with a meaningful centre (profit and loss, above and below target, sentiment). Both arms need the same lightness range and the same chroma peak or one side will read as louder.
- Categorical (qualitative): distinct hues at equal lightness and chroma, for unordered groups. Six is the practical ceiling for discrimination, eight the absolute; beyond that, group or use small multiples.
- Binary and highlight: one brand colour against greys, the most common and the most useful in a client report, because the point of a chart in a deck is one series.

### 14.2 ColorBrewer

Cynthia Brewer and Mark Harrower (Pennsylvania State University) built ColorBrewer for maps; it offers sequential, diverging and qualitative schemes with three to twelve classes and three filters: colourblind safe, print friendly and photocopy safe. Its schemes are still the reference for class counts (how many steps a reader can separate: about seven for sequential maps, nine to eleven for diverging) and its filters make the trade-offs explicit.

### 14.3 Perceptual ordering

Only lightness is ordered by the eye without a legend; hue is categorical and saturation is weak (Cleveland and McGill's 1984 ranking of visual encodings places colour hue and saturation at the bottom, below position, length and angle). The rainbow (jet) map fails because its lightness rises and falls across the range, creating false edges and hiding real ones (Borland and Taylor, 2007, "Rainbow Color Map (Still) Considered Harmful"). Build scales in OKLCH:

- Sequential: L from 0.95 to 0.25 in equal steps, chroma rising from 0.02 to a peak around L 0.55 and falling again, hue allowed to rotate up to about 60 degrees across the range (for example from 90 at the light end to 260 at the dark end) to add discriminability without breaking the lightness order.
- Diverging: two sequential arms sharing the neutral end at L 0.95, each reaching L 0.35; chroma peaks equal.
- Categorical: L fixed near 0.65 on light themes (0.75 on dark), C fixed near 0.12, hues at least 40 degrees apart, then run under deutan simulation and swap any pair that merges.
- Charts on brand: the brand ramp (section 8.1) is never a categorical set, because its steps are ordered; use the brand hue for the hero series and greys for everything else.

### 14.4 The dataviz skill

The dataviz skill holds the house method for charts: the form heuristic, the colour formula with a runnable validator, mark specifications, interaction rules, and a validated brand-neutral placeholder palette in its references/palette.md that is swapped for the client's. Read it before any chart, stat tile or dashboard; this file supplies the colour science it relies on and nothing more.

## 15. Naming, documentation, presentation and QA

### 15.1 Naming colour in a system

- Global ramps: a hue name plus a step, with the hue name chosen from the material or the brand and kept to one word: `stone-500`, `flame-600`, `bottle-800`. The step carries the lightness band of section 8.1, so a name is also a contrast promise.
- Semantic tokens: role names from 07-design-systems-and-tokens.md section 3.3 (`color.text.default`, `color.surface.raised`, `color.border.subtle`, `color.accent.default`, `color.status.danger`). Never a value word (`light-grey`, `dark-blue`) and never a brand word (`color.hermes.orange`), for the reasons given there.
- Owned colours get a proper name in the brand book (the house: flame, ink, paper, bone), with the full 9.2 specification beneath each; the name is what the client and the team will say, and a named colour is defended more readily than a hex.
- Never name tokens after Pantone numbers or hex values: the value will change on the next press profile and the name will lie.

### 15.2 Documentation

A colour token in the DTCG format (07-design-systems-and-tokens.md section 4.2) carries the colour space, the components, the alpha and a hex fallback:

```json
{
  "flame": {
    "500": {
      "$type": "color",
      "$value": { "colorSpace": "oklch", "components": [0.633, 0.229, 33.8], "alpha": 1, "hex": "#F53901" },
      "$description": "House flame. Master Lab D50/2 on file; dE00 tolerance 2.0 on contract proofs (section 9.3)."
    }
  }
}
```

The colour specification sheet, one page per owned colour: the name; the master Lab with observer, illuminant and measurement condition; the date and instrument; the Pantone C and U references with measured dE00 to the master; the CMYK builds per press condition; HEX, RGB, Display P3 and OKLCH; RAL and NCS nearest with dE00; the tolerances; the dark theme variant; the sRGB fallback if the colour exceeds sRGB; and the do-not list. Keep it in the brand book and in the design system documentation, and keep the physical chip in a sealed, dated envelope away from light, because paper chips fade and a chip from 2019 is no longer the master.

### 15.3 Presenting colour to a client

1. Show colour in application first: a page, a box, a façade, a reel frame. Swatches first invites a conversation about favourite colours; application first invites a conversation about the brand.
2. Name the references (design-taste section 4, the reference board) so the client sees where the palette comes from.
3. State the viewing condition and control it: a calibrated display at 120 nits, or printed chips on the actual stock under daylight; never a projector, never a phone in a car. If the client insists on a phone, ask for True Tone and Night Shift off.
4. Show light and dark together, and the accent beside its sRGB fallback, so there is no surprise when the site is seen on a Windows laptop.
5. Say what cannot be printed and what cannot be shown on sRGB, before they fall for it.
6. Present two options at most. Three options produce a committee choice.
7. The sign-off is a measured Lab value and a physical chip initialled by the client, filed with the date. A screenshot is never a sign-off.

### 15.4 Colour QA checklist

| Check | Screen | Print | Video |
|---|---|---|---|
| Profile and tagging | Every raster carries an embedded ICC profile; CSS colours in OKLCH with sRGB fallbacks; images P3 only where intended | PDF/X-4 with the output intent of the printer's profile; no RGB images left untagged; spot colours named exactly as the Pantone library names them, no duplicates | Colour tags written (Rec.709, BT.1886, limited range for broadcast and social); HDR masters carry PQ or HLG tags and ST 2086 metadata |
| Gamut | Text, icons and borders inside sRGB; accents exceeding sRGB have a hand-authored fallback | Soft proof reviewed with paper and ink simulation; out-of-gamut warning checked in Photoshop and Acrobat | Gamut warning on the scope clean; saturated graphics kept inside Rec.709 unless an HDR deliverable exists |
| Contrast | Every text pair passes WCAG 2.2 AA and the APCA floor of section 6.4; components 3:1; focus 3:1; measured on composited colours | Type on tints checked against 10.4 dot gain; reversed type above the minimum size for the black build | Captions at 203 nits HDR white or 90 percent SDR white on a 40 to 60 percent dark band; never pure white at 100 percent |
| Black | Dark theme background OKLCH L 0.18 to 0.26; no #000 behind scrolling content | One rich black build per document; text K only; registration swatch nowhere in the art | Black level at 0 IRE with nothing crushed below 16 on limited range; no lifted milky blacks on the 2.2 phone check |
| Ink and bit depth | Gradients dithered or noised; no 8 bit banding in dark hero gradients | TAC within the printer's limit at every point; no ink above the limit in shadows of images | 10 bit intermediate; gradients and smoke dithered; final encode checked for banding at the platform's bitrate |
| Brand colour | Accent hex matches the derived sRGB value; dark variant matches the spec | Spot or build matches the master within tolerance on the contract proof; paper white within tolerance | Product and logo on the vectorscope at the Rec.709 value; graphic overlays for saturated brand colour |
| CVD | Protanopia and deuteranopia simulated; second channel present for every colour-coded state | Same, on the proof | Same, on the final encode; charts and lower thirds checked |
| Devices and conditions | Checked on an iPhone (P3), a Windows laptop (sRGB), a mid-range Android in Vivid mode; dark mode and light mode | Checked under D50 and under the client's store or venue lighting (metamerism) | Checked on the grading monitor, a phone in a bright room, and a television with its default "Vivid" picture mode |
| Documentation | Tokens exported (CSS, DTCG); Figma variables aligned to the token names | Specification sheet and tolerances in the print order; signed proof retained | Show LUT and reference frame archived with the project |

## 16. Reference tables

### 16.1 Kelvin values of common sources

| Source | Kelvin | Notes |
|---|---|---|
| Candle, diya | 1,800 to 1,900 | Strongly orange; cameras cannot fully neutralise it and should not |
| Tungsten household | 2,700 to 2,800 | The "warm white" of hospitality LED is tuned to match it |
| Halogen and 3,200 K studio tungsten | 3,000 to 3,200 | The film and television tungsten standard; CIE illuminant A is 2,856 K |
| Golden hour | 2,500 to 3,500 | Varies with haze; Dubai haze pushes it lower and pinker |
| Neutral white LED, office fluorescent | 4,000 to 4,500 | Often with a green tint; correct tint as well as temperature |
| Direct sun, midday | 5,000 to 5,600 | D50 (5,003 K) and the daylight preset (about 5,500 K) sit here |
| Flash, daylight LED panel | 5,500 to 6,000 | |
| D65 | 6,504 K | Every screen space's white; "overcast daylight" in practice |
| Overcast | 6,500 to 7,500 | |
| Open shade | 7,000 to 8,000 | Faces in shade go blue; warm the balance or add fill |
| Clear blue sky | 9,000 to 12,000 and above | |

### 16.2 Colour spaces and their white points

| Space | White point | Transfer function | Gamut, approximate | Primary use |
|---|---|---|---|---|
| sRGB | D65 | sRGB piecewise, about gamma 2.2 | 100 percent (reference) | Web, product UI, stills delivery |
| Display P3 | D65 | sRGB piecewise | About 136 percent of sRGB's area on the 1931 xy diagram, 126 percent on the 1976 u'v' diagram; Figma states 49 percent more distinct colours | Apple displays, modern Android, wide-gamut web |
| DCI-P3 | About 6,300 K, greenish (x 0.314, y 0.351) | Gamma 2.6 | Same primaries as Display P3 | Cinema projection |
| Adobe RGB (1998) | D65 | Gamma 2.2 | Wider green and cyan than sRGB | Photography to print |
| ProPhoto RGB | D50 | Gamma 1.8 | Larger than the visible gamut in part | Raw editing at 16 bit |
| Rec.709 | D65 | BT.709 OETF; BT.1886 display at gamma 2.4 | Same primaries as sRGB | HD and SDR video |
| Rec.2020 | D65 | BT.2020 OETF; with PQ or HLG under BT.2100 | About 76 percent of CIE 1931 visible area | UHD and HDR container |
| CIELAB | D50 in ICC and print; D65 when converted from screen spaces | Cube root | All visible | Print, measurement, delta E |
| OKLab, OKLCH | D65 | Cube root on LMS | All visible | Screen palette authoring, CSS |
| CAM16-UCS, HCT | Defined by viewing conditions; D65 in Material | Hyperbolic compression | All visible | Appearance modelling; Material 3 |

### 16.3 Rich black builds

| Name | C | M | Y | K | Total | Use |
|---|---|---|---|---|---|---|
| Text black | 0 | 0 | 0 | 100 | 100 | All type under about 14 pt, rules, registration-critical art |
| Neutral rich | 60 | 40 | 40 | 100 | 240 | Default for solids and display type |
| Cool rich | 70 | 50 | 30 | 100 | 250 | Beside cool photography |
| Warm rich | 35 | 60 | 60 | 100 | 255 | Beside skin, wood, hospitality |
| Uncoated rich | 40 | 30 | 30 | 100 | 200 | Uncoated stock, lower ink limits |
| Converted RGB black | 75 | 68 | 67 | 90 | 300 | Avoid; what U.S. Web Coated (SWOP) v2 makes of #000000 |
| Registration | 100 | 100 | 100 | 100 | 400 | Printer's marks only |

### 16.4 Contrast thresholds by text size

| Text | WCAG 2.2 AA | WCAG 2.2 AAA | APCA Lc (house floor) | APCA Lc (preferred) |
|---|---|---|---|---|
| Body text, 14 to 18 px, weight 400 | 4.5:1 | 7:1 | 75 | 90 |
| Body text at 16 px, weight 300 (house body weight) | 4.5:1 | 7:1 | 90 | 90 (thin weights need the higher floor) |
| Secondary, captions, labels, 12 to 14 px | 4.5:1 | 7:1 | 60 | 75 |
| Large text, 24 px or 18.7 px bold and above | 3:1 | 4.5:1 | 45 (weight 500 and above, 32 px and above) | 60 |
| Display, 48 px and above, weight 600 and above | 3:1 | 4.5:1 | 45 | 60; ceiling 90 to avoid glare |
| Placeholder and disabled text | exempt | exempt | 30 | 45 |
| UI component boundaries, icons with meaning | 3:1 (1.4.11) | 3:1 | 30 for icons | 45 |
| Dividers, decorative hairlines | none | none | 15 | 15 to 30 |
| Focus indicator against adjacent colours | 3:1 (1.4.11) | 3:1 change between states, 2 px perimeter (2.4.13) | 45 | 60 |

APCA values from the APCA guidance levels (text above 24 px at weight 300 or more is capped at Lc 90); the font size and weight lookup in the apca-w3 documentation refines these per weight and the house floors are the conservative reading of it.

### 16.5 OKLCH lightness bands for light and dark themes

| Role | Light theme L | Dark theme L | Chroma guidance |
|---|---|---|---|
| Page background | 0.97 to 0.99 | 0.18 to 0.26 (#121212 to #242424 neutral) | 0.004 to 0.012, hue of the brand |
| Surface | 0.99 to 1.0 (or 0.94 to 0.96 on white) | 0.22 to 0.30 | as background |
| Elevated surface | 1.0 plus shadow | 0.26 to 0.34 | as background |
| Border subtle | 0.90 to 0.93 | 0.30 to 0.34 | 0.01 |
| Border strong | 0.80 to 0.86 | 0.38 to 0.44 | 0.02 |
| Text primary | 0.20 to 0.28 | 0.90 to 0.93 | up to 0.02 |
| Text secondary | 0.45 to 0.52 | 0.70 to 0.76 | up to 0.02 |
| Text disabled | 0.65 to 0.70 (or 38 percent alpha) | 0.50 to 0.55 (or 38 percent alpha) | |
| Accent solid | 0.55 to 0.65 | 0.65 to 0.75 | brand chroma; reduce 20 to 30 percent on dark |
| Accent text on light surface | 0.40 to 0.50 | 0.75 to 0.82 | so that 4.5:1 holds |
| Accent tint surface | 0.93 to 0.96 | 0.28 to 0.34 | 0.03 to 0.05 |
| Status fills (positive, warning, danger, info) | 0.50 to 0.62 by hue | 0.70 to 0.80 | lower than accent |
| Focus ring | 0.55 to 0.62 | 0.70 to 0.78 | brand or dedicated hue |

Reason for the bands: with L fixed per role, the WCAG and APCA obligations of section 8.2 hold for any brand hue once the chroma is inside gamut, and a client swap becomes a change of hue and chroma only.

## Terms introduced

- Abney effect and Bezold-Brücke shift: apparent hue shifts when white light is added, or when luminance changes, at constant wavelength.
- Achromatopsia: rod monochromacy; the absence of functioning cones, so no hue is perceived.
- Acquired distinctiveness: the legal status of a sign that has come to identify one trader through use, the route by which single colours are registered.
- Alpha tint: a colour with transparency, written with a slash alpha in CSS, that composites over whatever lies beneath it.
- alpha(): the CSS Color 5 function that rewrites only the alpha channel of an origin colour.
- Anomalous trichromacy: colour vision with one cone type shifted in sensitivity; the milder and more common form of CVD.
- APCA and Lc: the Accessible Perceptual Contrast Algorithm, a polarity-aware contrast method, and its signed lightness contrast value from about minus 108 to 106; the candidate for WCAG 3.
- Banding: visible steps in a gradient caused by too few code values across the tonal distance.
- Bit depth: the number of levels per channel; 8 bit gives 256, 10 bit gives 1,024.
- Black point compensation: the ICC conversion option that maps source black to destination black so shadows keep detail.
- Black smear: the trailing artefact on OLED panels when dark grey content moves over pure black, caused by slow pixel response from the off state.
- Bradford transform: the standard chromatic adaptation matrix used to move colours between white points such as D50 and D65.
- Calibration and profiling: setting a display to a target (calibration) and measuring and recording what it then does (profiling, which writes the ICC profile).
- CAM16 and CAM16-UCS: a colour appearance model predicting how a colour looks under stated viewing conditions, and the uniform space derived from it.
- Categorical, sequential and diverging scales: data palettes of distinct hues at equal lightness and chroma for unordered groups; one hue across a monotonic lightness range for ordered quantities; two hues meeting at a neutral midpoint for data with a meaningful centre.
- Chroma: the colourfulness of a colour relative to a grey of the same lightness; the C in LCH and OKLCH, the radial axis of Munsell.
- Chromatic adaptation: the visual system's normalisation of the scene white.
- CICP: coding-independent code points, the compact colour metadata (primaries, transfer, matrix) carried by AVIF, HEIC and video streams.
- CIE standard observer: the 1931 (2 degree) and 1964 (10 degree) colour matching functions that define how a standard human mixes primaries to match any colour.
- CIE XYZ: the 1931 root space in which Y is luminance and every visible colour is positive; all conversions pass through it.
- CIEDE2000: the current delta E formula (2001), with corrections for lightness, chroma, hue and the blue hue rotation.
- CIELAB: the CIE 1976 space of L*, a*, b*, perceptually spaced by a cube root; the space of ICC profiles and spectrophotometers.
- CMYK: the four-ink subtractive process model; meaningless as a colour until an output profile is attached.
- Colorimeter and spectrophotometer: a filter-based display measuring device, and a device measuring reflectance or emission per wavelength, usable for print.
- color-mix(), contrast-color(), light-dark(), relative colour syntax: the CSS Color 5 forms that interpolate one or more colours in a named space; return black or white, whichever contrasts more; return one of two values by colour scheme; and derive a colour from an origin colour's channels, as in oklch(from var(--x) calc(l + 0.1) c h).
- Colour constancy: the perception of stable object colour across changes in illumination.
- Colour model and colour space: a numeric description scheme (RGB, HSL), and a model fixed to primaries, white point and transfer function (sRGB, Display P3).
- Colour temperature: the kelvin temperature of the black body whose light matches a source; lower is redder.
- Colour vision deficiency (CVD): reduced or absent function in one or more cone types; protan, deutan, tritan and achromat forms.
- Complementary, split complementary, analogous, triadic, tetradic: hue schemes at 180 degrees, 150 and 210 degrees, within about 60 degrees, 120 degree spacing, and four hues respectively.
- Contract proof and drawdown: an ISO 12647-7 proof carrying a measured media wedge that the press is contracted to match, and a hand-pulled sample of a spot ink on the actual stock.
- Contrast ratio (WCAG): (L1 plus 0.05) divided by (L2 plus 0.05) on relative luminance, from 1:1 to 21:1.
- Correlated colour temperature: the black-body temperature closest in appearance to a non-black-body source.
- DCI-P3 and Display P3: the cinema projection space with a greenish white at gamma 2.6, and Apple's version with D65 and the sRGB curve.
- Delta E: the distance between two colours in CIELAB under a stated formula (CIE76, CIE94, CIEDE2000).
- Dither: deliberate noise that converts banding into a fine texture the eye reads as smooth.
- Dot gain and tone value increase (TVI): the growth of halftone dots on paper by ink spread and light scatter; TVI is the ISO term.
- dynamic-range-limit: the CSS property that caps how much HDR headroom an element may use (standard, constrained, no-limit).
- Elevation (dark mode): the convention of making higher surfaces lighter in a dark theme, since shadows cannot show depth on a dark ground.
- Extended colour gamut (ECG): seven-ink process printing (CMYK plus orange, green, violet) that reaches most spot colours; Hexachrome was Pantone's six-ink predecessor.
- FOGRA39, FOGRA51, FOGRA52, GRACoL, G7: characterisation datasets for coated offset (ISO 12647-2:2004), premium coated to the 2013 revision (M1, optical brighteners) and uncoated to the 2013 revision; the United States sheetfed reference (GRACoL 2013, CRPC6); and Idealliance's grey-balance calibration method.
- Gamma and transfer function: the curve relating code values to linear light; gamma 2.2 for design displays, 2.4 (BT.1886) for video, 2.6 for cinema.
- Gamut and gamut mapping: the range of colours a space or device can show, and the method for bringing out-of-range colours inside it (clipping, chroma reduction, perceptual compression; in CSS, binary search with local MINDE, EdgeSeeker or Ray Trace).
- HCT: Google's hue, chroma, tone space (CAM16 hue and chroma, CIELAB tone) used by Material 3.
- HDR, SDR, PQ, HLG: high and standard dynamic range; the perceptual quantizer (SMPTE ST 2084, absolute, to 10,000 nits) and hybrid log-gamma (ARIB STD-B67, relative, backwards compatible).
- Helmholtz-Kohlrausch effect: saturated colours appearing brighter than their luminance predicts.
- HSL, HSV, HSB: geometric rearrangements of the RGB cube with no perceptual basis; their lightness and value channels do not match perceived lightness.
- ICC profile, PCS and colour management: a file describing a device or space in terms of the Profile Connection Space (CIELAB or XYZ at D50), and the system of such profiles and conversions that gives device numbers a device-independent meaning.
- Illuminant: a standardised spectral power distribution assumed as white (D50 for print, D65 for screens, A for tungsten).
- Just noticeable difference (JND): the smallest colour difference an observer detects; about 1.0 dE00 side by side under controlled viewing.
- LCH: CIELAB in polar form; lightness, chroma, hue angle, at D50 unless stated.
- Lightness, luminance and nits: perceived brightness (L* or OKLab L, compressive); the physical weighted sum of linear light (Y); and its unit, candelas per square metre.
- Limited and full range: video code value ranges of 16 to 235 and 0 to 255 on 8 bit; mismatching them washes out or crushes an image.
- Linear light, scRGB, srgb-linear: values proportional to physical light (and the sRGB-primaried spaces that store them), the only domain in which blending, blur and resizing are physically correct.
- Log encoding: a camera curve storing wide dynamic range by compressing highlights and lifting shadows; a storage format that needs a display transform.
- LUT and show LUT: a lookup table mapping input to output colour; the show LUT is the agreed look exported from the grade for every department.
- Metamerism: two different spectral distributions matching under one illuminant and differing under another.
- MINDE: minimum delta E, the gamut-mapping choice of the in-gamut colour closest to the original.
- Munsell system: hue, value and chroma on experimentally spaced scales, notated as hue value/chroma.
- NCS and RAL: the Natural Colour System used by architects and interior designers, and the RAL Classic and Design collections used for paint, powder coat and signage.
- Okabe-Ito palette: eight colours chosen in 2008 to remain distinguishable under protan and deutan vision.
- OKLab and OKLCH: Björn Ottosson's 2020 perceptual space and its polar form; the house authoring space for screen colour.
- Opponent process: the recoding of cone signals into light-dark, red-green and blue-yellow channels.
- Optical brightening agent (OBA), M0 and M1: a fluorescent paper additive that reads whiter and bluer under UV, and the ISO 13655 measurement conditions that exclude or include the UV that excites it.
- Perceptual uniformity: the property that equal numeric distances in a space look like equal visual distances.
- ProPhoto RGB: a D50 editing space with imaginary primaries covering more than the visible gamut; 16 bit only.
- Protanopia, deuteranopia, tritanopia (and the anomalous forms): absence or shift of the L (red), M (green) or S (blue) cone; deutan is the most common, tritan is rare and not sex linked.
- Purkinje shift: the move of peak sensitivity toward blue at low light as rods take over.
- Rec.709, Rec.2020: ITU-R video spaces for HD (sRGB primaries) and UHD (very wide gamut, the HDR container).
- Relative luminance: the WCAG quantity derived from linearised sRGB with weights 0.2126, 0.7152, 0.0722.
- Rendering intent: the rule applied to out-of-gamut colours during an ICC conversion; perceptual compresses the whole gamut smoothly, relative colorimetric keeps in-gamut colours and clips the rest, absolute colorimetric also preserves the source white for paper simulation, saturation maximises saturation without regard to accuracy.
- Rich black and registration black: black ink supported by other inks for a deeper solid (neutral default C60 M40 Y40 K100), and 100 percent of all four inks, for printer's marks only.
- Semantic token: an alias token named for its role in the interface, resolving to a global value.
- Sieckmann criteria: the CJEU's 2002 test that a sign's representation be clear, precise, self-contained, easily accessible, intelligible, durable and objective.
- Simultaneous contrast: a colour's appearance shifting toward the complement of its surround.
- Skin tone line and vectorscope: the scope that plots hue as angle and saturation as radius, and the narrow hue line on it, near the NTSC I axis, along which all human skin falls.
- Soft proofing: on-screen simulation of an output profile, including paper colour and black ink.
- Spectral power distribution (SPD): the energy of a light or reflected stimulus at each wavelength.
- Spot colour: a pre-mixed ink printed from its own plate, specified by a library such as Pantone.
- sRGB and Adobe RGB (1998): the default screen space (IEC 61966-2-1) and the wider gamma 2.2 space used for photography headed to print.
- Tonal ramp: one hue laid out in ordered lightness steps (50 to 950) with a chroma bell and a hue drift.
- Total area coverage (TAC): the maximum sum of ink percentages at any point, set by the output profile and the printer.
- Viridis: the matplotlib family of perceptually uniform sequential maps (viridis, magma, plasma, inferno, cividis).
- White balance and tint: the camera or grade setting that renders a neutral surface neutral under a given source, and its green to magenta correction axis.
- Working space and device space: the well-behaved space a file is edited in, and the space of the device the file ends up on.
- YCbCr and chroma subsampling: the video encoding of luma and two chroma difference channels, and the storage of chroma at lower resolution than luma (4:4:4, 4:2:2, 4:2:0).

## Sources and further reading

Books

- Josef Albers, Interaction of Color, 1963 (Yale University Press; 50th anniversary edition 2013).
- Johannes Itten, The Art of Color, 1961 (English edition, Reinhold).
- Albert H. Munsell, A Color Notation, 1905; Atlas of the Munsell Color System, 1915.
- Mark D. Fairchild, Color Appearance Models, third edition, 2013 (Wiley).
- R. W. G. Hunt and M. R. Pointer, Measuring Colour, fourth edition, 2011 (Wiley).
- Bruce Fraser, Chris Murphy and Fred Bunting, Real World Color Management, second edition, 2005 (Peachpit).
- Charles Poynton, Digital Video and HD: Algorithms and Interfaces, second edition, 2012 (Morgan Kaufmann).
- Cynthia A. Brewer, Designing Better Maps: A Guide for GIS Users, second edition, 2016 (Esri Press).
- Jo B. Paoletti, Pink and Blue: Telling the Boys from the Girls in America, 2012 (Indiana University Press).
- Michel Pastoureau, Blue: The History of a Color, 2001 (Princeton University Press).
- Kassia St Clair, The Secret Lives of Colour, 2016 (John Murray).

Specifications and standards

- IEC 61966-2-1:1999, sRGB. https://webstore.iec.ch/
- ITU-R BT.709-6, BT.2020-2, BT.2100-2, BT.1886, BT.2408, https://www.itu.int/rec/R-REC-BT/en ; SMPTE ST 2084 (PQ) and ST 2086 (static HDR metadata), https://www.smpte.org/ ; ARIB STD-B67 (HLG), https://www.arib.or.jp/english/
- ISO 12647-2:2013, ISO 12647-7:2016, ISO 3664:2009, ISO 13655:2017. https://www.iso.org/
- ICC.1:2022 (ICC profile specification v4). https://www.color.org/specification/ICC.1-2022-05.pdf
- CIE 015:2018, Colorimetry, fourth edition. https://cie.co.at/
- CSS Color Module Level 4, W3C Candidate Recommendation Draft, 29 October 2026. https://www.w3.org/TR/css-color-4/
- CSS Color Module Level 5, W3C Working Draft, 29 October 2026. https://www.w3.org/TR/css-color-5/ ; CSS Color HDR Module Level 1, W3C Working Draft, 26 October 2026. https://www.w3.org/TR/css-color-hdr-1/
- WCAG 2.2, W3C Recommendation, 5 October 2023 (edition 12 December 2024). https://www.w3.org/TR/WCAG22/
- WCAG 3.0, W3C Working Draft, 10 September 2026. https://www.w3.org/TR/wcag-3.0/
- APCA, Andrew Somers, Myndex Research; apca-w3 package. https://github.com/Myndex/apca-w3
- ECI characterisation data and profiles (FOGRA39, FOGRA51, FOGRA52). https://www.eci.org/en/downloads ; ICC profile registry and characterisation data. https://registry.color.org/profile-registry/
- Design Tokens Community Group format and Color Module. https://www.designtokens.org/
- Trade Marks Act, 1999 (India). https://www.indiacode.nic.in/
- Regulation (EU) 2017/1001 on the European Union trade mark. https://eur-lex.europa.eu/
- CJEU, Libertel, C-104/01 (2003); Sieckmann, C-273/00 (2002); Christian Louboutin v Van Haren, C-163/16 (2018). https://curia.europa.eu/
- Société des Produits Nestlé v Cadbury UK, [2013] EWCA Civ 1174, https://www.bailii.org/ ; Société des Produits Nestlé v Cadbury UK, [2022] EWHC 1671 (Ch), https://caselaw.nationalarchives.gov.uk/ewhc/ch/2022/1671

Articles, talks and tool documentation

- Björn Ottosson, A perceptual color space for image processing, 2020. https://bottosson.github.io/posts/oklab/
- Lea Verou, LCH colors in CSS: what, why, and how?, 2020. https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/
- Andrey Sitnik and Travis Turner, OKLCH in CSS: why we moved from RGB and HSL, Evil Martians, 2022. https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl
- MDN, contrast-color(), https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/contrast-color ; MDN browser-compat-data, https://github.com/mdn/browser-compat-data ; web.dev, New to the web platform in April (2026), https://web.dev/blog/web-platform-04-2026
- Adrian Roselli, WCAG3 Contrast as of April 2026. https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html
- Andrew J. Elliot and Markus A. Maier, Color psychology: effects of perceiving color on psychological functioning in humans, Annual Review of Psychology 65, 2014.
- Lauren I. Labrecque and George R. Milne, Exciting red and competent blue: the importance of color in marketing, Journal of the Academy of Marketing Science 40, 2012.
- David Borland and Russell M. Taylor II, Rainbow Color Map (Still) Considered Harmful, IEEE Computer Graphics and Applications, 2007.
- Bang Wong, Points of view: Color blindness, Nature Methods 8, 2011.
- Masataka Okabe and Kei Ito, Color Universal Design (CUD): How to make figures and presentations that are friendly to colorblind people, 2008. https://jfly.uni-koeln.de/color/
- Colour Blind Awareness, About colour blindness. https://www.colourblindawareness.org/colour-blindness/
- Todd Miro, Teal and Orange: Hollywood, Please Stop the Madness, 2010.
- Material Foundation, material-color-utilities (HCT source and documentation). https://github.com/material-foundation/material-color-utilities ; Adobe, Leonardo contrast-colors package. https://github.com/adobe/leonardo
- Figma, Color management in Figma. https://help.figma.com/hc/en-us/articles/360039825114
- Tailwind CSS, Colors, https://tailwindcss.com/docs/colors ; Apple, iPhone 17 technical specifications, https://www.apple.com/iphone-17/specs/ ; Pantone, Colour of the Year 2026, https://www.pantone.com/color-of-the-year/2026 ; Radix Colors, Understanding the scale, https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale
- Chrome DevTools, Emulate CSS media features and vision deficiencies. https://developer.chrome.com/docs/devtools/rendering/apply-effects
- ColorBrewer 2.0, Cynthia Brewer and Mark Harrower. https://colorbrewer2.org/
- Leonardo, Adobe, https://leonardocolor.io/ ; Huetone, Alexey Ardov, https://huetone.ardov.me/ ; OKLCH Color Picker and Converter, Evil Martians, https://oklch.com/
- culori, Dan Burzo. https://culorijs.org/ ; Color.js, Lea Verou and Chris Lilley. https://colorjs.io/
