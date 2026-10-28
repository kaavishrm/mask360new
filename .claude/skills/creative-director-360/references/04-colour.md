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
- Abney effect and Bezold-Brücke shift: hue appears to change when saturation or luminance changes with the wavelength constant. These two effects are why HSL ramps (section 2.4) drift in hue even though their H value is fixed.
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
| Rec.2020 (ITU-R BT.2020) | Very wide, D65 | 10 or 12 bit; paired with PQ or HLG in BT.2100 | UHD and HDR delivery container | No consumer display covers it in full; the best quantum-dot OLEDs reach around 80 percent, so a Rec.2020 master is a container, and the colours seen depend on the display's mapping |
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

CIE XYZ (1931) is the root space: three imaginary primaries chosen so that Y is luminance and all visible colours have positive values. Every conversion between two colour spaces passes through XYZ.

CIELAB (1976) transforms XYZ into L* (lightness, 0 to 100), a* (green to red) and b* (blue to yellow), with a cube root to approximate perception. It is the space of ICC profiles, of spectrophotometers and of delta E (section 9.3). Its known failure is hue: lightening a saturated blue in Lab shifts it toward purple (the blue hue line is curved), and chroma is over-predicted in saturated regions, which is why CIEDE2000 needed five correction terms. LCH is Lab in polar form: L, C (chroma, the distance from the grey axis) and h (hue angle). When a tool says "LCH" without qualification it means CIELAB LCH at D50.

### 2.5 CAM16 and HCT

CAM16 (Li et al., 2017) is a colour appearance model: it predicts how a colour looks given the viewing conditions (adapting luminance, surround, background), which Lab ignores. CAM16-UCS is the uniform space derived from it, the most accurate general model available, and heavy to compute.

HCT (hue, chroma, tone) is Google's 2021 space for Material You and Material 3: hue and chroma come from CAM16, tone is CIELAB L*. The point of the construction is that tone maps to L*, so contrast can be guaranteed by tone arithmetic; Material's documentation states that two colours with tones 40 apart meet 3:1 and 50 apart meet 4.5:1 (verify against the current Material 3 colour pages before quoting to a client). Material Color Utilities implements it in C++, Dart, Java, Kotlin, Swift and TypeScript, and the Dart package carries 2021, 2025 and 2026 colour spec variants. HCT is right for Android theming and dynamic colour from a wallpaper; outside Material it is unusual, and OKLCH does the same job with less machinery.

### 2.6 OKLab and OKLCH

Björn Ottosson published OKLab on 23 December 2020 as a fix for two specific failures: CIELAB's poor hue prediction (especially blue) and CAM16-UCS's awkward numerics and chroma compression when blending. The construction is XYZ to approximate cone responses (LMS) by a 3 by 3 matrix, a cube root per channel, then a second 3 by 3 matrix to L, a, b; the matrices were fitted to perceptual datasets and the exponent fixed at 1/3. OKLCH is its polar form: L from 0 to 1, C from 0 to about 0.4 (0.37 is the most chromatic sRGB colour), h in degrees. The white point is D65.

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

ITU-R BT.2408 places HDR reference white (graphics white, the white of a caption) at 203 nits, which is 75 percent HLG signal and 58 percent PQ; put titles at 100 percent HDR white and they glare. Phones are now the main HDR surface: the iPhone 17 (2025) is rated 1000 nits typical, 1600 nits HDR peak and 3000 nits outdoor peak with a 2,000,000:1 typical contrast ratio (Apple specification page). On the web, HDR images (gain-map JPEG and HEIC, AVIF) display in Safari and Chrome; the CSS Color HDR module that would let UI colour exceed SDR white is still an editor's draft, so treat HDR as a video and photo capability, and keep UI in SDR until the draft stabilises.

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

A browser treats an untagged image as sRGB. To show P3 on the web: tag the image with a Display P3 ICC profile (JPEG, PNG) or use a format that carries colour metadata natively (AVIF and HEIC carry CICP codes; WebP can carry an ICC profile), and author CSS colour with color(display-p3 ...) or OKLCH values whose chroma exceeds sRGB. Safari (since 10, 2016) and Chrome (since 62 for tagged images, since 111 for CSS Color 4) honour both. Test on a P3 screen and on an sRGB screen; a hero image with P3 saturation that falls back to clipped sRGB loses detail in the saturated areas, so keep critical detail (skin, product texture) inside sRGB and reserve P3 for backgrounds and accents.

## 5. CSS colour on the web

CSS Color Module Level 4 is a W3C Candidate Recommendation Draft (edition dated 27 October 2026; editors Tab Atkins Jr., Chris Lilley, Lea Verou). CSS Color Level 5 adds relative colour syntax, color-mix(), light-dark() and contrast-color(). Status as of October 2026:

| Feature | Syntax | Baseline status | Notes |
|---|---|---|---|
| lab(), lch() | lab(60% 20 -30), lch(60% 36 300) | Widely available | CIELAB at D50; use for print-derived values |
| oklab(), oklch() | oklch(0.62 0.21 260) | Widely available (MDN: across browsers since May 2023) | The house authoring space; L as 0 to 1 or percent |
| color() predefined spaces | color(display-p3 1 0.2 0.1), color(srgb-linear ...), color(rec2020 ...), color(xyz-d65 ...) | Widely available | Spec keywords: srgb, srgb-linear, display-p3, display-p3-linear, a98-rgb, prophoto-rgb, rec2020, xyz, xyz-d50, xyz-d65 |
| color-mix() | color-mix(in oklch, var(--brand) 80%, white) | Widely available (since May 2023) | Default interpolation space is oklab; polar spaces accept shorter, longer, increasing, decreasing hue |
| Relative colour syntax | oklch(from var(--brand) calc(l + 0.1) c h) | Baseline 2024 (Safari 16.4 first; Chrome and Firefox completed it in 2024) | Safari 16.4 required deg units in hue maths |
| light-dark() | color: light-dark(#111, #eee) | Baseline 2024 | Needs color-scheme: light dark on the root |
| contrast-color() | color: contrast-color(var(--bg)) | Baseline newly available April 2026 (MDN). Secondary sources give Safari 26 (September 2025), Firefox 146 (December 2025), Chrome 147 (April 2026) | Returns only black or white; ties return white; MDN warns midtones such as #2277d3 return black, which fails small text. No max keyword has shipped |
| Gamut mapping | (automatic) | Specified in Level 4 | See 5.4 |
| @media (color-gamut: p3) | @media (color-gamut: p3) { ... } | Widely available | The query for "can this screen show P3" |

### 5.1 Authoring in OKLCH

Write every token as OKLCH and let the browser produce the hex. The reasons: one hue number per ramp, lightness arithmetic that matches perception, and a chroma value that says how far outside sRGB the colour sits (sRGB tops out between about 0.1 and 0.37 depending on hue; P3 adds about 0.03 to 0.06). Example tokens:

```css
:root {
  --ink-900: oklch(0.21 0.01 70);        /* warm near-black, hue-cast toward the brand */
  --paper:   oklch(0.985 0.004 80);      /* off-white, never #fff for long reading */
  --flame:   oklch(0.63 0.24 32);        /* house accent, exceeds sRGB slightly */
  --flame-hover: oklch(from var(--flame) calc(l - 0.05) c h);
  --flame-tint:  color-mix(in oklch, var(--flame) 12%, var(--paper));
}
```

### 5.2 color-mix() and relative colour

color-mix() interpolates two colours in a named space. Use oklch for tints and shades of one hue (chroma and hue stay honest), oklab when mixing two different hues (no hue arc to argue about), and srgb only when matching a legacy value. Relative colour syntax takes one source colour and rewrites channels, which is how state colours and alpha variants are derived from a single brand token without a second hard-coded hex: `oklch(from var(--brand) l c h / 0.4)` for a 40 percent alpha version, `calc(h + 180)` for a complement.

### 5.3 Gradients and interpolation

Gradients accept an interpolation space: `linear-gradient(in oklch, var(--a), var(--b))`. The default remains the legacy sRGB interpolation for compatibility (the grey dip of section 3.3 lives there); `in oklab` removes the dip, `in oklch longer hue` draws a rainbow around the wheel. The polar hue methods (shorter, longer, increasing, decreasing) decide which way round the hue circle the mix travels.

### 5.4 Gamut mapping behaviour

CSS Color 4 specifies gamut mapping for colours a display cannot show: work in OKLCH, keep lightness and hue, reduce chroma by binary search until the colour is inside the target, with "local clipping" accepted when a clipped candidate is within a just noticeable difference (deltaE OK of 0.02) of the reduced one. The spec's table of contents also lists clipping, closest colour (MINDE), chroma reduction, EdgeSeeker and ray trace as approaches under discussion. In practice, as of October 2026, browsers have mostly clipped channel values for painted colours rather than running the full algorithm, so an OKLCH accent with chroma beyond the screen's gamut can shift hue and lightness differently in different browsers. Do not rely on the browser to degrade a palette gracefully.

### 5.5 Designing a palette that degrades from P3 to sRGB

1. Author everything in OKLCH. Keep text, icons, borders and any colour measured for contrast inside sRGB (check with OKLCH.com or culori's `inGamut('rgb')`); only backgrounds and accents are allowed to exceed it.
2. For each accent that exceeds sRGB, hand-author the sRGB fallback (reduce chroma until in gamut, keep L and h) so the fallback is a design decision.
3. Ship both:

```css
.cta { background: oklch(0.63 0.20 32); }               /* inside sRGB */
@supports (color: color(display-p3 0 0 0)) {
  @media (color-gamut: p3) {
    .cta { background: oklch(0.63 0.25 32); }            /* P3 version */
  }
}
```

4. Export two sets of swatches for Figma (file set to sRGB for product work, Display P3 only when the deliverable is iOS or an Apple-screen-first campaign site; Figma removed the Unmanaged option in August 2023 and defaults new files to sRGB).
5. Test on an iPhone (P3), a Windows laptop (usually sRGB, often unmanaged) and a mid-range Android in Vivid mode.

## 6. Contrast

### 6.1 WCAG 2.x: the formula, the thresholds, the flaws

WCAG 2.2 is the current W3C Recommendation (first published 5 October 2023, latest edition 12 December 2024). Its contrast ratio is (L1 + 0.05) / (L2 + 0.05), where L is relative luminance: linearise each sRGB channel (divide by 255; if at or below 0.03928 divide by 12.92, else ((v + 0.055) / 1.055) to the power 2.4), then L = 0.2126 R + 0.7152 G + 0.0722 B. The 0.05 term models flare. Ratios run from 1:1 to 21:1.

| Criterion | Level | Threshold | Applies to |
|---|---|---|---|
| 1.4.3 Contrast (Minimum) | AA | 4.5:1 | Text and images of text |
| 1.4.3, large text | AA | 3:1 | At least 18 point, or 14 point bold (about 24 px, or 18.7 px bold) |
| 1.4.6 Contrast (Enhanced) | AAA | 7:1, large text 4.5:1 | Text |
| 1.4.11 Non-text Contrast | AA | 3:1 against adjacent colours | UI component boundaries and states, meaningful graphics |
| 1.4.1 Use of Color | A | n/a | Colour must never be the only carrier of information |

Known flaws, each documented in the W3C's own issue threads and in Andrew Somers' work:

- Polarity blind: the ratio is identical for dark-on-light and light-on-dark, yet light text on dark reads worse at the same ratio (halation, thinner apparent strokes).
- Size and weight are a single cliff at 18 point; a 13 px thin weight and a 17 px bold are treated the same.
- No spatial frequency model, so it says nothing about hairlines or thin icon strokes.
- Midtone errors: #777777 on white scores 4.48:1 (fail) and #767676 scores 4.54:1 (pass), with no visible difference. White text on orange #FF8C00 scores 2.1:1 (fail) while black on the same orange scores 9.8:1 (pass), although many readers find the white more legible on a saturated orange because of the Helmholtz-Kohlrausch effect.
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

The size table assumes Helvetica or Arial with x-height ratio 0.52; other faces are scaled by their x-height. The apca-w3 npm package README reports library version 0.1.9, algorithm 0.0.98G-4g, and calls itself beta.

### 6.3 WCAG 3 status

The WCAG 3.0 Working Draft dated 10 September 2026 leaves the contrast algorithm open: the Text contrast requirement reads "@@[contrast measure to be determined]" and an editor's note states "The contrast algorithm used in WCAG 3 is yet to be determined", adding that the requirement assumes a size and weight factor and may need a separate red-green colour vision requirement. The first public draft (January 2021) had used APCA; APCA now describes itself as the candidate method. The draft says the standard "still has several years of work"; secondary sources project a further draft in December 2026 and a Candidate Recommendation no earlier than late 2027. For anything legal, WCAG 2.2 AA is the standard: India's Rights of Persons with Disabilities Act 2016 and the Guidelines for Indian Government Websites reference WCAG 2.x, and the UAE's federal digital accessibility policy references WCAG 2.1 AA (verify the current edition on the TDRA site before citing it in a proposal).

### 6.4 The house approach

Pass WCAG 2.2 AA for every text and component colour pair (the legal floor and what automated audits test), and tune by APCA (the perceptual truth). Concretely:

- Body text: WCAG at least 4.5:1 and APCA at least Lc 75; aim for Lc 90 on long reading.
- Secondary text, captions, labels: WCAG at least 4.5:1 and APCA at least Lc 60.
- Headlines at 32 px and above, weight 500 and above: WCAG at least 3:1 and APCA at least Lc 45.
- Placeholder and disabled text: APCA at least Lc 30; WCAG does not apply to disabled controls, but the text should still be readable.
- Borders, dividers, focus rings, icon strokes: WCAG 3:1 against the adjacent colour; APCA at least Lc 15 for dividers and 30 for icons.
- Where the two disagree, the stricter one wins for text; for large colour fields, APCA's ceiling of about Lc 90 governs so that pure white on #0A0A0A (21:1, about Lc 105) is softened to an off-white around oklch(0.93 0.005 80) on long pages.

Reason for the dual rule: a design that only satisfies WCAG can be unreadable (the midtone cases), and a design that only satisfies APCA can fail an audit the client's legal team commissions.

### 6.5 Non-text and component contrast

Inputs need a 3:1 border or fill against the page; a placeholder is not a label; a disabled state may fall below 3:1 but the component must still be identifiable; focus indicators need 3:1 against adjacent colours (2.4.11 Focus Not Obscured and 2.4.13 Focus Appearance in WCAG 2.2 add size and change-of-contrast rules). Icons that carry meaning need 3:1; decorative icons do not. Charts: each series against the background at 3:1 and adjacent series distinguishable (section 14).

### 6.6 Contrast in dark mode

Light text on dark halates: strokes look thicker and bleed, so drop the weight one step (400 instead of 500) and reduce the text lightness (OKLCH L 0.90 to 0.93, never 1.0) to cut glare. Keep accents at lower chroma (section 8.5), because saturated colour on dark vibrates and fails APCA more easily than on light. Large light surfaces on a dark page (cards, modals) behave like light mode inside them; measure both. APCA's negative polarity values are the right measure here; WCAG treats the two polarities identically.
