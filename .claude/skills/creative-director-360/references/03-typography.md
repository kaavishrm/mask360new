# Typography: anatomy, systems, micro-typography, technology

The complete technical craft of type for the creative-director-360 corpus: the engineering layer beneath the taste rules in design-taste, references/type.md. As of October 2026.

## Contents

1. [Anatomy of letterforms](#1-anatomy-of-letterforms)
2. [Classification](#2-classification)
3. [Optical sizes](#3-optical-sizes)
4. [Spacing: sidebearings, kerning, tracking](#4-spacing-sidebearings-kerning-tracking)
5. [Leading and vertical rhythm](#5-leading-and-vertical-rhythm)
6. [Measure, alignment, justification and hyphenation](#6-measure-alignment-justification-and-hyphenation)
7. [Hierarchy and scale](#7-hierarchy-and-scale)
8. [Micro-typography](#8-micro-typography)
9. [OpenType features and their CSS equivalents](#9-opentype-features-and-their-css-equivalents)
10. [Variable fonts](#10-variable-fonts)
11. [Type on screen](#11-type-on-screen)
12. [Web font engineering](#12-web-font-engineering)
13. [Type in motion and video](#13-type-in-motion-and-video)
14. [Type for print](#14-type-for-print)
15. [Multiscript typography](#15-multiscript-typography)
16. [Licensing](#16-licensing)
17. [Choosing and pairing](#17-choosing-and-pairing)
18. [Reading a specimen and evaluating a foundry](#18-reading-a-specimen-and-evaluating-a-foundry)
19. [Tools](#19-tools)
20. [Reference table of recommended values](#20-reference-table-of-recommended-values)

How this file relates to the taste layer: design-taste, references/type.md says which faces are current, which pairings are expensive, and the house settings (Space Grotesk, 300 body, 700 display, tight display tracking, wide micro caps). This file says why those settings work at the level of letterform, metric and rendering engine, and what to do when the brief leaves the house face: a client identity, a bilingual campaign, a print run, a broadcast title. Web implementation detail sits in 21-web-design-and-digital-craft.md, section 3; the short-form numbers sheet is 26-platform-and-format-specs-2026.md, section 9.

## 1. Anatomy of letterforms

### 1.1 Vertical metrics

- Baseline: the line on which letters without descenders sit. Every alignment in a layout refers to it; this is why baseline grids exist (section 5.3) and why Devanagari, which hangs from a headline, needs its own rules (section 15.1).
- X-height: the height of the lowercase x above the baseline. It governs apparent size: at the same point size a face with a large x-height reads bigger and survives small sizes. Approximate x-height as a fraction of the em: Adobe Garamond about 0.40, Georgia about 0.48, Helvetica about 0.52, Verdana about 0.55. Screen faces run large because pixels are coarse; book faces run small because the page is read at 30 to 40 cm with generous leading.
- Cap height: the height of flat-topped capitals (H, E, T). Typically 0.65 to 0.75 of the em. In classical faces ascenders rise above cap height (Garamond, Bembo); in many grotesks ascenders and caps align (Helvetica), which is one reason grotesks look dense.
- Ascender: the part of b, d, f, h, k, l that rises above x-height. Descender: the part of g, j, p, q, y that falls below the baseline. Ascender and descender lengths plus the leading decide how close lines can sit before descenders collide with the ascenders beneath.
- Em: the square whose side equals the point size. In a digital font the em is divided into units per em (UPM): 1000 for PostScript or CFF outlines, 2048 for most TrueType. Sidebearings, kerning and tracking are all expressed in these units or as fractions of the em, which is why typographic measurements survive scaling.
- Overshoot: the amount by which round and pointed letters (O, C, S, A, V, o, e, v) extend past the baseline and x-height, about 1 to 3 percent of the x-height. Reason: a circle whose extremes touch the guide lines looks smaller than a square that touches them, because the eye reads the area near the line. Cut it and the O looks like a shrunken coin.

### 1.2 Parts of the letter

| Term | Definition | Where to see it |
|---|---|---|
| Stem | The main vertical or near-vertical stroke | l, H, the left of n |
| Bowl | A closed curved stroke enclosing a counter | b, d, p, q, o, the top of g |
| Counter | The white space enclosed, fully or partly, by a letter | o (closed), c (open) |
| Aperture | The opening of a partly closed counter | c, e, a, s. Open apertures read better at small sizes and on screen, which is why Frutiger and Söhne beat Helvetica at 11px |
| Arm | A horizontal or upward diagonal stroke attached at one end | E, F, T, the upper diagonal of K |
| Leg | A downward diagonal stroke attached at one end | K, R, the lower stroke of k |
| Shoulder | The curved stroke leaving a stem to form an arch | n, m, h |
| Spine | The main curved stroke of S and s | S |
| Tail | A descending stroke, often decorative, finishing a letter | Q, j, y, R in some faces |
| Ear | The small stroke projecting from the top right of the bowl of a binocular g | g in Garamond, Times |
| Link | The stroke joining the upper bowl and lower loop of a binocular g | g |
| Loop | The lower bowl of a binocular g, open or closed | g |
| Crossbar | A horizontal stroke joining two strokes or crossing one | A, H, e, f, t |
| Apex | The point where two diagonals meet at the top | A, M |
| Vertex | The point where two diagonals meet at the bottom | V, W, M |
| Crotch | The inside angle where two strokes meet | V, W, y |
| Joint or junction | Where a curve or diagonal meets a stem | n, m, K |
| Spur | A small projection off a main stroke | G, b, the foot of some a |
| Hairline | The thinnest stroke in a face with contrast | the thins of Didot |
| Eye | The closed counter of e | e |
| Double-storey and single-storey | a and g with two compartments (Garamond) or one (Futura) | a, g |
| Ink trap | A notch cut where strokes meet so that ink spread fills it rather than clogging the junction | Bell Centennial (Matthew Carter, 1978, for telephone directories at 6pt); decorative use in ABC Whyte Inktrap (Dinamo, 2019) |

### 1.3 Serif types

A serif is the small stroke finishing a main stroke. Its shape dates and classes a face.

| Serif type | Construction | Example faces | Effect |
|---|---|---|---|
| Bracketed | A curved fillet joins serif to stem | Garamond, Caslon, Times, Clarendon | Warm, calligraphic, forgiving of ink spread |
| Unbracketed | Serif meets stem at a right angle | Bodoni, Didot, Walbaum | Crisp, mechanical, fragile at small sizes |
| Hairline | Unbracketed and as thin as the thinnest stroke | Didot, HTF Didot (Jonathan Hoefler, 1991) | Luxury magazine voice; fails below about 14pt in print and 24px on screen |
| Slab (Egyptian) | Heavy rectangular serif, roughly stem weight | Rockwell (1934, unbracketed), Clarendon (1845, bracketed), Sentinel (Hoefler and Frere-Jones, 2009) | Loud, sturdy, mid-19th-century advertising |
| Wedge | Triangular serif tapering from stem | FF Meta Serif (Erik Spiekermann, Christian Schwartz, Kris Sowersby, 2007), many contemporary text faces | Sharp, modern, reads crisply on screen |
| Flared or glyphic | No true serif; the stroke flares at its end as if incised in stone | Optima (Zapf, 1958), Albertus (Berthold Wolpe, 1932 to 1940), Trajan (Carol Twombly, 1989) | Monumental, classical |

### 1.4 Terminal types

A terminal is the end of a stroke that carries no serif.

| Terminal | Shape | Example |
|---|---|---|
| Ball | A round blob | a, c, f, r in Bodoni and Clarendon |
| Teardrop (lachrymal) | A tapered drop | a, c, f in Caslon and Garamond |
| Beak | A sharp spur at the end of an arm | E, F, T, L in Times and Perpetua |
| Flag | A flat horizontal finish on an upward stroke | the top of f and r in some grotesks |
| Finial | A plain tapered or curved end with no added shape | c, e in Helvetica, Univers |
| Sheared | Cut at an angle | the open terminals of Frutiger and Söhne |

### 1.5 Contrast, axis, stress and modulation

- Stroke contrast: the ratio of the thickest to the thinnest stroke. Monoline (contrast near 1:1): Futura, Helvetica. Low: Garamond. High: Baskerville. Extreme: Didot, Bodoni, where the thins approach a hairline. High contrast is a display quality; at text sizes the thins fall below the resolution of paper or pixel.
- Axis (also called stress): the angle of an imaginary line through the thinnest points of a round letter. Oblique or humanist axis (leaning left at the top, about 20 to 30 degrees from vertical): Jenson, Garamond, the trace of a broad nib held at an angle. Vertical axis: Bodoni, Didot, the pointed pen pressed straight. Transitional faces sit between (Baskerville is near vertical).
- Modulation: how stroke thickness changes along the stroke. Gerrit Noordzij's The Stroke (1985) describes two systems: translation (a broad nib moving at a fixed angle produces thicks on the diagonals and thins on the opposite diagonals, humanist faces) and expansion (a flexible pointed pen produces thicks where pressure is applied, on the downstrokes, didones). Knowing which system a face uses tells you which italic and which Devanagari or Arabic companion will agree with it (section 15).

### 1.6 Optical compensation

Letters that measure equal look unequal; type design corrects for the eye.

- Overshoot (1.1): rounds and points cross the guide lines by 1 to 3 percent of x-height.
- Thinning at junctions: where an arch meets a stem (n, m, h) or diagonals meet (v, w, x), the stroke is thinned, because two strokes meeting create a dark knot in perception and in ink. In a monoline sans this is invisible until you overlay a true circle.
- Horizontals thinner than verticals: even in "monoline" faces the crossbar of H and the horizontals of E are 5 to 15 percent thinner than the stems, because a horizontal of equal measured weight looks heavier.
- Vertical centre above the mathematical centre: the crossbar of H, the waist of B, the join of S and 8 sit above the geometric middle; placed at the middle they look low and bottom-heavy.
- Narrower rounds: O is drawn slightly narrower than it would be if it were a circle fitted to the H width, and its stroke is thickened on the sides.
- Ink traps (1.2): junction notches for small sizes and poor paper. Overshoot and traps are the reason a display cut cannot be used at caption size: the corrections are scaled for one size (section 3).

## 2. Classification

Classification is a working vocabulary for briefing and critique; it binds nothing. The four systems below are the ones a creative director meets in foundry sites, briefs and critiques.

### 2.1 Vox-ATypI

Maximilien Vox published his system in 1954. The Association Typographique Internationale (ATypI) adopted it in 1962; it became British Standard BS 2961:1967. ATypI added a Gaelic class in 2010. On 18 March 2021 the ATypI board voted to de-adopt the system, announced 27 April 2021, because its Latin-only, history-bound categories fail for non-Latin scripts and for contemporary designs; a working group on a replacement covering the world's scripts was announced. No replacement standard has been published as of October 2026. The classes still carry meaning and foundries still use them.

| Class (Vox term) | Marks | Example faces, dates |
|---|---|---|
| Humanist (Humanes) | Oblique axis, low contrast, sloped bar on e, small x-height, bracketed serifs | Nicolas Jenson's roman (Venice, 1470); Centaur (Bruce Rogers, 1914); Adobe Jenson (Robert Slimbach, 1996) |
| Garalde (Garaldes) | Oblique axis, higher contrast than humanist, horizontal bar on e, refined serifs | Bembo (Francesco Griffo, 1495; Monotype 1929); Garamond (Claude Garamond, 1530s); Caslon (William Caslon, 1722); Sabon (Jan Tschichold, 1967) |
| Transitional (Réales) | Near-vertical axis, higher contrast, sharper serifs | Baskerville (John Baskerville, 1757); Fournier (Pierre-Simon Fournier, 1740s); Times New Roman (Stanley Morison, Victor Lardent, 1932) |
| Didone (Didones) | Vertical axis, extreme contrast, hairline unbracketed serifs | Didot (Firmin Didot, 1780s); Bodoni (Giambattista Bodoni, 1790s); Walbaum (Justus Erich Walbaum, about 1800) |
| Mechanistic (Mécanes) | Slab serifs, low contrast | Clarendon (Robert Besley, 1845); Rockwell (Monotype, 1934); Egyptian types from Vincent Figgins (1815) |
| Lineal, grotesque | Early sans, some contrast, squarish curves, double-storey g | Akzidenz-Grotesk (Berthold, 1898); Franklin Gothic (Morris Fuller Benton, 1902) |
| Lineal, neo-grotesque | Rationalised grotesque, uniform stroke, closed apertures | Helvetica (Max Miedinger, Eduard Hoffmann, 1957); Univers (Adrian Frutiger, 1957); Arial (Monotype, 1982) |
| Lineal, geometric | Built from circles and straight lines, single-storey a | Futura (Paul Renner, 1927); Avant Garde (Herb Lubalin, Tom Carnase, 1970) |
| Lineal, humanist | Sans based on roman proportions and calligraphic stroke, open apertures | Gill Sans (Eric Gill, 1928); Syntax (Hans Eduard Meier, 1968); Frutiger (Adrian Frutiger, 1976) |
| Glyphic (Incises) | Flared, chiselled, as if carved | Albertus (1932 to 1940); Optima (1958); Trajan (1989) |
| Script (Scriptes) | Imitates cursive handwriting, often joined | Mistral (Roger Excoffon, 1953); Snell Roundhand (Matthew Carter, 1966) |
| Graphic (Manuaires) | Drawn letters, brush or pen, each standing apart | Banco (Excoffon, 1951); Cooper Black (Oswald Cooper, 1922) |
| Blackletter (Fractures) | Broken strokes, gothic | Textura of the Gutenberg Bible (1455); Fette Fraktur (1850) |
| Gaelic (added 2010) | Irish uncial-derived letterforms | Colmcille (Colm Ó Lochlainn, Monotype, 1936) |

### 2.2 Bringhurst's historical classification

Robert Bringhurst, The Elements of Typographic Style (1992; 4th edition 2012), classes faces by the period whose art they share, reading axis, aperture, contrast and modulation together. It is more useful than Vox for talking about tone.

| Period | Hallmarks | Faces |
|---|---|---|
| Renaissance (15th to 16th c.) | Humanist axis, moderate contrast, moderate aperture, translation modulation | Jenson, Bembo, Garamond, Palatino's models |
| Mannerist (16th to 17th c.) | Renaissance structure with exaggeration, longer extenders, more flourish | Granjon's italics, Galliard (Carter, 1978) |
| Baroque (17th c.) | Variable axis, greater contrast, the roman and italic drawn to work together | Janson (Kis, 1680s), Caslon |
| Rococo (18th c.) | Decorative detail, calligraphic flourish | Fournier's romans, italics and ornaments (1740s) |
| Neoclassical (18th c.) | Vertical axis, rational, high contrast, smooth | Baskerville, Bell, Bulmer |
| Romantic (late 18th to 19th c.) | Vertical axis, abrupt contrast, hairlines, expansion modulation | Bodoni, Didot, Walbaum |
| Realist (19th c.) | Industrial sans and slabs, low contrast, large x-height | Akzidenz-Grotesk, Clarendon, Franklin Gothic |
| Geometric modernist (20th c.) | Compass and ruler construction | Futura, Kabel, Avant Garde |
| Lyrical modernist (20th c.) | Renaissance structure redrawn with modern restraint | Palatino (Zapf, 1948), Dante (Mardersteig, 1954), Aldus |
| Postmodern (late 20th c.) | Historical reference with irony or hybridisation | Esprit (Jovica Veljović, 1985), Nofret, Scala (Majoor, 1990) |

### 2.3 Contemporary working classes

How foundries and art directors talk in 2026. The names overlap the Vox classes and add what the last twenty years produced.

| Working class | Character | Example faces, foundry, year |
|---|---|---|
| Grotesk | 19th-century sans revived: irregular, warm, some contrast | Akzidenz-Grotesk (1898); Founders Grotesk (Klim, 2010); Neue Haas Grotesk (Christian Schwartz, 2010 digital revival); Söhne (Klim, 2019); GT America (Grilli Type, 2016) |
| Neo-grotesk | Rationalised, even, closed apertures | Helvetica (1957); Suisse Int'l (Swiss Typefaces); Neue Montreal (Pangram Pangram); Inter (Rasmus Andersson, 2017) |
| Geometric | Circles and lines | Futura (1927); Circular (Laurenz Brunner, Lineto, 2013); GT Walsheim (Grilli Type, 2010); Satoshi (Indian Type Foundry, free through Fontshare) |
| Humanist sans | Pen-derived, open apertures, true italics | Frutiger (1976); Gill Sans (1928); Untitled Sans (Klim); Source Sans (Paul D. Hunt, Adobe, 2012) |
| Neo-humanist | Humanist structure with large x-height and screen-era sturdiness | FF Meta (Erik Spiekermann, 1991); Fira Sans (Carrois, 2013); Hanken Grotesk, Figtree (Google Fonts, 2020s) |
| Expressive serif | High-contrast or sharp serif with a point of view, built for display | Canela (Miguel Reyes, Commercial Type, 2016); GT Alpina (Grilli Type, 2020); Editorial New (Pangram Pangram); Reckless (Displaay); Ogg (Lucas Sharp, Sharp Type) |
| Transitional serif | Text serif with vertical-ish axis and sturdy serifs for long reading | Times New Roman (1932); Tiempos Text (Klim, 2010); Signifier (Klim); Freight Text (Joshua Darden, 2005) |
| Didone | Vertical, hairline, fashion and luxury voice | Didot (1780s); HTF Didot (1991); Noe Display (Schick Toikka); Bodoni Moda (Google Fonts, 2020) |
| Slab | Rectangular serifs | Clarendon (1845); Rockwell (1934); Sentinel (2009); Roboto Slab (Christian Robertson, 2013) |
| Mono | Fixed advance width | Courier (Howard Kettler, 1955); GT Pressura Mono (Grilli Type, 2012); JetBrains Mono (2020); Departure Mono (Helena Zhang, 2024, pixel mono; house pixel voice) |
| Display | Drawn for one size and one job, from condensed to wide | Druk (Berton Hasebe, Commercial Type); Bebas Neue (Ryoichi Tsunekawa, 2010); Clash Display (Fontshare); Unbounded (Google Fonts, 2022) |

For which of these set taste in 2026 and the house canon, see design-taste, references/type.md, section 2.

## 3. Optical sizes

An optical size is a version of a face drawn for a specific size range. Metal type was cut per size: a 6pt Garamond and a 36pt Garamond were different drawings. Photo and early digital type scaled one drawing, which is why 1980s digital Garamonds look spindly in text and clumsy in display.

### 3.1 What changes between cuts

| Property | Caption (6 to 8pt) | Text (9 to 13pt) | Subhead (14 to 23pt) | Display (24pt and up) |
|---|---|---|---|---|
| Stroke contrast | Lowest; thins thickened | Moderate | Higher | Highest; hairlines as thin as the medium allows |
| X-height | Largest | Large | Smaller | Smallest, elegant proportions |
| Apertures and counters | Opened wide | Open | Normal | Can close; detail is visible |
| Spacing (sidebearings) | Loosest | Normal | Tighter | Tightest; display is fitted tight because space between large letters looks like a gap |
| Serifs and details | Sturdier, longer | Normal | Finer | Finest; ink traps removed |
| Weight | Slightly heavier to survive ink spread and antialiasing | Normal | Normal | Can be lighter |

The ranges are Adobe's conventions for its Opticals (Garamond Premier Pro, Arno Pro, Minion Pro by Robert Slimbach): Caption, Regular, Subhead, Display. Other foundries use their own names: Tiempos Text, Tiempos Headline, Tiempos Fine (Klim); Canela, Canela Text, Canela Deck (Commercial Type); GT Alpina Standard and GT Alpina Fine (Grilli Type).

### 3.2 The opsz axis

In a variable font (section 10) the registered opsz axis carries optical size as a continuous value in points. CSS applies it automatically: `font-optical-sizing: auto` (the default) sets opsz to the computed font-size, so a 12px paragraph gets the text drawing and a 96px headline the display drawing from one file. Set `font-optical-sizing: none` or `font-variation-settings: "opsz" 144` to override when a display drawing is wanted at a small physical size (a logo reproduced small, where you want the display proportions). Variable faces on Google Fonts with wide opsz ranges: Fraunces (Undercase Type, opsz 9 to 144), Roboto Flex (Font Bureau, opsz 8 to 144), Source Serif 4 (opsz 8 to 60), Literata (TypeTogether, opsz 7 to 72), Newsreader (Production Type, opsz 6 to 72), Playfair (Claus Eggers Sørensen, opsz 5 to 1200).

### 3.3 The error of display at text size

Display cuts used at 12 to 16px lose their hairlines to antialiasing (the thin falls below one device pixel and renders as grey fuzz), their counters fill, and their tight fitting makes words into bars. The reverse error, a text cut at 120px, shows loose spacing, heavy serifs and crude ink traps. design-taste, references/type.md calls this the commonest tell of an amateur. The fix is procedural: check the foundry page for which cut or opsz range you are licensing before the pitch, and never ship a display-only family for a product UI.

## 4. Spacing: sidebearings, kerning, tracking

### 4.1 Sidebearings and fitting

Each glyph carries a left and right sidebearing: the space between the outline and the edge of its advance width. The type designer fits a face by setting sidebearings so that the rhythm of stems and counters is even in running text (the classic test is "nnoonnoo" and "HHOOHHOO"). Straight-sided letters get the largest sidebearings, round letters less, open or diagonal letters (v, w, y, T, L) the least, because their shape already carries white space. Every spacing adjustment downstream (kerning, tracking) is relative to this fitting, which is why a well-fitted face wants zero tracking at text sizes.

### 4.2 Kerning

Kerning adjusts the space between a specific pair of glyphs. Two sources:

- Metric kerning: the pairs the designer built into the font. In OpenType they live in the GPOS table under the `kern` feature, usually as class kerning (letters grouped by similar shape, so one value covers A against every V-shaped glyph). A well-made text face carries a few thousand effective pairs; a cheap one carries a few hundred and shows gaps in "AV", "Ta", "Yo", "r.", "f)". Metric kerning is the default in InDesign, Figma and browsers (`font-kerning: normal`).
- Optical kerning: InDesign's algorithm (Character panel, Kerning: Optical) that spaces by analysing the shapes rather than reading the table. Use it for faces with poor or missing kerning, for mixed faces in one line, and for display lines where you then hand-kern. Use metric for any face from a serious foundry, because the designer's judgement beats the algorithm.

Hand kerning is expected on every display line in luxury work (design-taste, references/type.md, section 4). Units: InDesign measures kerning and tracking in thousandths of an em; 20 units is 0.02em. After Effects uses the same units (section 13.1).

### 4.3 Tracking

Tracking (letter-spacing in CSS) adds or removes a uniform amount between all glyphs in a run. The rules, with reasons:

| Context | Tracking | Reason |
|---|---|---|
| Display, 48px and up | -0.02em to -0.04em (InDesign -20 to -40) | Sidebearings are fitted for text sizes; at display size the same relative space looks like gaps, so tighten. design-taste gives the same range |
| Headings, 24 to 40px | -0.01em to -0.02em | Mild version of the above |
| Body text, 14 to 20px | 0 | The designer's fitting is correct here. Tracking body copy, in either direction, breaks the rhythm the sidebearings were built to produce |
| Small text, 11 to 13px | 0 to +0.01em | Antialiasing bleeds strokes toward each other; a touch of air compensates |
| All caps and small caps | +0.05em to +0.14em | Capitals have no ascenders or descenders and are fitted loose; they want more air to read as a word rather than a wall. Small caps, being cap-shaped at x-height, want the same |
| Tiny labels, 9 to 11px caps | +0.08em to +0.14em | As above, plus rendering bleed |

Why tracked lowercase fails: lowercase relies on word shape (the silhouette of ascenders and descenders) and on the counter rhythm; adding space between letters makes every counter as wide as the space, so the word dissolves into a row of symbols. Bringhurst gives Frederic Goudy's line, "a man who would letterspace lower case would steal sheep", for this reason; some accounts hold that Goudy's original target was blackletter, and the rule stands either way. Loosening lowercase is defensible only at micro sizes for rendering, and then by 1 percent at most.

In CSS write tracking in em so that it scales with the type: `letter-spacing: -0.02em`. Pixel values break the moment the size changes. Note that CSS letter-spacing adds space after every glyph including the last, so a centred tracked label sits a fraction left; compensate with equal padding or `text-indent` of the same value.

### 4.4 Word spacing

The space glyph in a text face is about 0.2 to 0.3em, set by the designer to sit between the letter rhythm and a clear break. In justified text the composer varies it (section 6.3). Wide word spaces (the double space after a full stop, a survival of typewriter practice) create rivers; the house rule is one space. `word-spacing` in CSS exists; use it only to repair a face with a mis-sized space glyph.

## 5. Leading and vertical rhythm

### 5.1 Leading

Leading (from the strips of lead placed between lines of metal type) is the distance from one baseline to the next. Expressed as a ratio to the type size (unitless line-height in CSS) or as an absolute value in points (print: 10/13 means 10pt type on 13pt leading).

| Context | Leading ratio | Reason |
|---|---|---|
| Display, 48px and up | 0.9 to 1.1 | Large type carries its own internal white; at 1.0 ascenders and descenders of adjacent lines nearly touch, which reads as one object. Below 0.9 descenders collide with the line beneath |
| Headings, 24 to 40px | 1.1 to 1.25 | Two or three lines must still read as one unit |
| Body, 14 to 20px | 1.4 to 1.6 | The eye must find the start of the next line; the longer the measure the more leading is needed (Bringhurst). Serifs with small x-height can take 1.4; large x-height grotesks need 1.5 to 1.6 because the lines look closer |
| Captions and UI labels, 11 to 13px | 1.3 to 1.45 | Short lines need less help |
| Devanagari, Arabic body | 1.6 to 1.8 | Marks above and below the base letters need room (section 15) |
| Nastaliq | 2.0 and up | Words cascade diagonally below the baseline (section 15.5) |

The house figures in design-taste, references/type.md (display 0.95 to 1.1, body 1.45 to 1.6) sit inside these ranges.

### 5.2 The half-leading model in CSS

CSS line-height does not place a baseline; it sets the height of each line box. The content area of the font (ascent plus descent as declared in the font's metrics tables: hhea, OS/2 typo and win values, which can disagree) is centred in the line box, and the difference is split in half above and below: the half-leading. Consequences:

- Use unitless values (`line-height: 1.5`). A unitless value is inherited as a factor and recomputed per element's own font-size. Percent and em values compute to a length at the parent and that length inherits, so a child heading inherits the body's 24px leading. This is the classic broken-heading bug.
- The first line of a block carries dead space above the cap height (half-leading plus the font's internal ascent above the caps). A heading set at line-height 1.1 still does not sit flush to the top of its container. Buttons look vertically off-centre for the same reason.
- Two fonts at the same size and line-height occupy the same line box but sit at different baselines, because their ascent and descent metrics differ. This is why fallback fonts cause layout shift (section 12.6).

### 5.3 Baseline grids

A baseline grid is a set of horizontal lines at a fixed interval to which every baseline snaps, so that lines in adjacent columns align and the page has one rhythm. In InDesign: Preferences, Grids, Baseline Grid, Increment Every (set to body leading, for example 13pt), then Align to Baseline Grid in the paragraph style; headings get a leading that is a multiple of the grid (26pt) or are allowed to float with Align to Grid: First Line Only. On the web there is no native baseline grid; the approximation is to make every line-height and every vertical spacing token a multiple of one unit (4px or 8px) so that blocks return to rhythm, and to use text-box-trim (5.4) to remove the half-leading that otherwise breaks it. Grid construction and column systems are in 05-layout-grids-and-composition.md.

### 5.4 Cap-height trimming: text-box-trim and text-box-edge

The CSS Inline Layout Module Level 3 defines `text-box-edge` (which font metric defines the top and bottom edge of the text box: `cap`, `ex`, `text`, `alphabetic`) and `text-box-trim` (`trim-start`, `trim-end`, `trim-both`, `none`), with the shorthand `text-box`. Written as `text-box: trim-both cap alphabetic;` the half-leading and the internal ascent above the cap height are removed, so a heading's cap tops sit on the top of its box and its baseline on the bottom. The feature was called leading-trim in earlier drafts. Support as of October 2026: Chrome 133 and Edge 133 (early 2025), Safari 18.2, Firefox 154 (18 August 2026); with Firefox it became Baseline Newly available. Figma's equivalent is the Vertical trim setting in the type panel. Reason to use it: it makes the spacing you measure in Figma the spacing the browser renders, so 24px above a heading is 24px to the cap, in every font.

### 5.5 Vertical rhythm in web layouts

- One spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96px) and line-heights that resolve to multiples of 4px (16px at 1.5 is 24; 18px at 1.5 is 27, which breaks the rhythm, so use 1.55 for 28 or 1.45 for 26).
- Margins between paragraphs of one line-height, between sections of a multiple.
- Headings carry space above greater than below (ratio about 2:1) so that they attach to the text they introduce; the reason is grouping by proximity: a heading closer to its text than to the previous block is read as belonging to that text.
- Trim headings (5.4) so that the measured space is real.

## 6. Measure, alignment, justification and hyphenation

### 6.1 Measure

Measure is the length of a line in characters (including spaces). Bringhurst's range for continuous text is 45 to 75 characters, with 66 as the ideal; 40 to 50 for multiple columns; up to 85 for a lede or a wide single column, and then only with more leading. Reason: below 45 the eye returns too often and hyphenation multiplies; above 75 the eye loses the line on return, which is why wide web pages with no max-width read as tiring. In CSS set measure with the `ch` unit (the advance width of the digit 0 in the current font, close to the average character): `max-width: 65ch`. Because `ch` follows the font, the measure survives a font change. design-taste narrows the house range to 55 to 70.

### 6.2 Alignment and rag

- Ranged left, ragged right (flush left): the default for screen and for most modern print. The rag must be shaped: no two consecutive lines of near-equal length, no line far shorter than its neighbours, no hyphen at the end of the first or last line, no rag that forms a shape (a stair or a bulge). Shape it by rewriting, by soft returns on display copy, and by hyphenation settings on text.
- Centred: display only, for a few lines, never for body (design-taste cheap tells). Centred text has no edge for the eye to return to.
- Ranged right: captions beside an image's left edge, pull quotes; a few lines at most.
- Justified: every line the same length; needs a measure of 60 or more characters and hyphenation on, or the word spaces become rivers.

### 6.3 Hyphenation and justification settings

In InDesign the Justification dialog (paragraph style, Justification) holds the H&J values: word spacing minimum, desired, maximum; letter spacing minimum, desired, maximum; glyph scaling minimum, desired, maximum. Defaults are word 80 / 100 / 133, letter 0 / 0 / 0, glyph 100 / 100 / 100. House settings for justified text: word 85 / 100 / 120, letter -2 / 0 / +2 at most (Bringhurst allows letterspacing only as a last resort), glyph 98 / 100 / 102 (invisible, saves a hyphen). For ragged text only the desired values matter.

Hyphenation rules (InDesign Hyphenation dialog; Bringhurst chapter 2):

- Minimum word length 5 letters (InDesign default 5).
- At least 2 letters before the hyphen and 3 after (InDesign defaults 2 and 2; set after to 3 so that "ed" and "ly" do not dangle).
- Hyphen limit: 2 consecutive hyphenated lines at most (InDesign default 3).
- Hyphenation zone (ragged text only): the distance from the right margin within which a word may be hyphenated; 36pt default. Larger zone, fewer hyphens, rougher rag.
- Do not hyphenate capitalised words, the last word of a paragraph, or across a column or page (InDesign checkboxes).
- Hyphenate ragged text lightly and justified text freely; a justified paragraph with hyphenation off is a defect.

CSS: `hyphens: auto` requires a `lang` attribute on the element or document (the dictionary is chosen by language). `hyphenate-limit-chars: 7 3 3` sets minimum word length, minimum before, minimum after; the initial value `auto` lets the browser choose, and the specified fallback defaults are 5, 2, 2. Chromium has shipped `hyphenate-limit-chars` since version 109 and Firefox since 137; Safari has not, so MDN marks it Limited availability as of October 2026. Keep the InDesign values as the reference and treat the CSS as an enhancement. `hyphenate-limit-lines` (consecutive hyphens) is only in Safari with the -webkit- prefix.

### 6.4 Rivers, widows, orphans, runts

- River: a channel of white running down a justified paragraph where word spaces align across lines. Cured by hyphenation, by narrowing the word-space maximum, or by a soft rewrite.
- Widow: the last line of a paragraph stranded at the top of a column or page. Orphan: the first line of a paragraph stranded at the bottom. (Usage varies; Bringhurst uses these senses.) InDesign Keep Options, Keep Lines Together, 2 at start and 2 at end; CSS `orphans: 2; widows: 2` apply in paged and multi-column contexts.
- Runt: a last line consisting of a single word or part of a word. Fix by rewriting, by tracking the paragraph by 1 or 2 units (text only, and only once per page), or by `text-wrap: pretty` (6.5). On a headline, a runt is a rewrite.

### 6.5 text-wrap: balance and pretty

- `text-wrap: balance` makes the browser equalise line lengths in a short block, for headings and standfirsts. Chromium limits it to blocks of 6 lines or fewer, Firefox to 10. Support: Chrome and Edge 114, Firefox 121, Safari 17.5. Reason to use: a two-line headline with a runt on the second line is the most common heading defect on the web and balance removes it with no copy change.
- `text-wrap: pretty` runs a slower, paragraph-aware line breaker for body copy. Chromium shipped it in Chrome 117 (2023) and optimises only the last four lines of a paragraph, to prevent runts. WebKit shipped it in Safari 26.0 (2025) and improves every line of the element: it avoids short last lines, improves the rag, reduces hyphenation and avoids typographic rivers. Firefox had not shipped `pretty` as of the sources read for this file. Set `text-wrap: pretty` on body text and `balance` on headings; the cost is layout time, which is why Chromium limits its scope.
- `text-wrap: stable` keeps earlier lines fixed while a contenteditable block is edited. `avoid-orphans` appears in the CSS Text Module Level 4 draft; the house knows of no shipping implementation.

## 7. Hierarchy and scale

### 7.1 Modular scales

A modular scale is a sequence of sizes where each step multiplies the previous by a fixed ratio, so that sizes relate the way intervals do in music (Tim Brown, "More Meaningful Typography", A List Apart, 2011; modularscale.com). Ratios in use:

| Ratio | Name | 16px base yields | Character |
|---|---|---|---|
| 1.125 | Major second | 16, 18, 20.25, 22.8, 25.6, 28.8 | Too close; steps do not read as different levels |
| 1.2 | Minor third | 16, 19.2, 23, 27.6, 33.2, 39.8 | Product UI scales, gentle |
| 1.25 | Major third | 16, 20, 25, 31.25, 39, 48.8 | Editorial web, the common choice |
| 1.333 | Perfect fourth | 16, 21.3, 28.4, 37.9, 50.5, 67.3 | Marketing pages; drama by the fourth step |
| 1.414 | Augmented fourth | 16, 22.6, 32, 45.25, 64, 90.5 | Doubles every two steps; clean numbers |
| 1.5 | Perfect fifth | 16, 24, 36, 54, 81, 121.5 | Posters, few levels |
| 1.618 | Golden ratio | 16, 25.9, 41.9, 67.8, 109.7 | Only three usable steps before sizes leave the page |

Where scales fail: the steps nearest the base are too close to read as hierarchy (16 versus 19.2), the steps far from the base are too large to fit a product screen, and a scale generates sizes nobody asked for. The design-taste rule applies: skip the middle. Choose the body size, choose the display size by eye (a ratio of 5:1 or more between display and caption), and add one or two intermediate sizes at most. Use the scale to generate candidates, then delete.

### 7.2 Fluid type with clamp()

Fluid type interpolates size between a minimum at a small viewport and a maximum at a large one, with no breakpoints. The formula, for size in rem and viewport in px:

- slope = (maxSize - minSize) / (maxViewport - minViewport)
- intercept = minSize - (slope times minViewport)
- `font-size: clamp(minSize, intercept + (slope times 100)vw, maxSize)`

Utopia (James Gilyead and Trys Mudford, Clearleft; utopia.fyi) generates these from a minimum and maximum viewport, base size and ratio; worked through for a 360px to 1240px range with an 18px to 20px body, the formula gives a slope of 2/880 and an intercept of 17.18px, so `clamp(1.125rem, 1.0739rem + 0.2273vw, 1.25rem)`. Rules: always clamp both ends (an unclamped vw size grows without limit on a 5K display and shrinks below legibility on a phone); keep the rem term in the middle so that user zoom still works (a pure vw expression ignores browser zoom, an accessibility failure, see 11-accessibility-and-inclusive-design.md); let display sizes be fluid and body sizes nearly fixed (16px to 18px).

### 7.3 Type ramps

Product UI (web and app), in px, with the line-height that keeps a 4px rhythm:

| Step | Size | Line-height | Use |
|---|---|---|---|
| xs | 12 | 16 (1.33) | Legal, timestamps, table footnotes; the floor for Latin on screen |
| sm | 14 | 20 (1.43) | Labels, secondary text, dense tables |
| base | 16 | 24 (1.5) | Body |
| md | 20 | 28 (1.4) | Lede, card titles |
| lg | 24 | 32 (1.33) | Section headings |
| xl | 32 | 40 (1.25) | Page titles |
| 2xl | 48 | 52 (1.08) | Hero on mobile |
| 3xl | 64 | 64 (1.0) | Hero on desktop; 96 to 160 on marketing pages |

Editorial (web): body 18 to 21px at 1.5 to 1.6, measure 60 to 70ch; standfirst 24 to 28px at 1.35; headline 56 to 120px at 0.95 to 1.05 with -0.02em; caption 13 to 14px at 1.4; running head and folio 11 to 12px caps at +0.1em.

Platform ramps (section 11.4): iOS Dynamic Type at the default Large setting runs Body 17pt on 22pt leading and Caption 2 at 11pt on 13pt; Material 3 runs body medium 14sp on 20sp and label small 11sp on 16sp.

### 7.4 Weight, case and colour as hierarchy

- Weight before size: two weights of one family (300 and 700, or 400 and 600) carry three levels of hierarchy at one size when combined with space. Reason: a weight change is read in peripheral vision, a 2px size change is read only on inspection. Medium weights (500) are for buttons and nothing else (design-taste); the house pairs 300 body with 500 bold inside it.
- Case: sentence case for everything that is read; small tracked caps (section 4.3) for one label level per view; Title Case reads as a press release. ALL CAPS at body size reduces reading speed because word shapes vanish.
- Colour: body in ink, secondary text in grey at a contrast of at least 4.5:1 (section 11.7), one accent word only as the house italic flame gesture. A coloured heading beside a black body reads as two voices; the hierarchy still has to come from weight and space.
- Space: the level above weight. A heading with 48px above and 16px below outranks a heading 4px larger with equal spacing.

## 8. Micro-typography

Micro-typography is the care of individual characters and spaces inside the line. It is invisible when right and the first thing a trained reader sees when wrong.

### 8.1 Quotation marks by language

| Language | Primary | Secondary | Codepoints | Notes |
|---|---|---|---|---|
| English (UK house style) | ‘single’ | “double” inside | U+2018 U+2019, U+201C U+201D | British publishing leads with single; American with double. Mask360 house: single primary, double inside |
| English (US) | “double” | ‘single’ inside | as above | |
| German | „low-high“ | ‚low-high‘ | U+201E U+201C, U+201A U+2018 | Also »guillemets pointing in« in books |
| French | « guillemets » | “double” inside | U+00AB U+00BB | A narrow no-break space (U+202F) inside each guillemet; French also spaces before : ; ! ? with the same narrow space |
| Hindi (Devanagari) | “double” or ‘single’ | | as English | Hindi uses the Latin curly quotes; the sentence ends with the danda । (U+0964), never a Latin full stop, in formal text |
| Arabic | « » or “ ” | | U+00AB U+00BB | Guillemets are common in Gulf print; direction handles their mirroring |

Straight quotes (U+0022, U+0027) are typewriter characters and a cheap tell everywhere. InDesign and Figma convert them when Typographer's Quotes is on; in code, the CSS `quotes` property plus the `q` element inserts language-correct marks from the `lang` attribute.

### 8.2 Apostrophes and primes

- Apostrophe: the right single quotation mark ’ (U+2019), always: it’s, Kaavish’s, ’90s (the curl faces left for an elision at the start of a word; autocorrect gets this wrong).
- Prime ′ (U+2032) and double prime ″ (U+2033): feet and inches, minutes and seconds, arc. 5′11″, 25°30′. A straight quote is a defect here too.

### 8.3 The dash family and the house ban

Unicode has six horizontal rules; each has a job.

| Character | Codepoint | Job |
|---|---|---|
| Hyphen-minus | U+002D | Compounds (brand-new), line-end breaks, the only one on a keyboard |
| Hyphen | U+2010 | The true hyphen, visually identical in most faces |
| Non-breaking hyphen | U+2011 | A compound that must not break at the line end (phone numbers, part codes) |
| Figure dash | U+2012 | Dash the width of a digit, inside number groups |
| En dash | U+2013 | Ranges and relations in general typography (pages 20 to 50, the Mumbai to Dubai route) |
| Em dash | U+2014 | Parenthetical breaks in general typography |
| Minus | U+2212 | Negative numbers in tables and maths; the hyphen is too short and sits too low beside lining figures |

House rule, from design-taste and the writing rules of this corpus: the en dash and the em dash are banned in all house and client copy. Write ranges with "to" (2024 to 2026, 20 to 50ms) and breaks with a colon, a comma or a full stop. Reasons: the em dash is the signature of generated text in 2026 and reads as such to the audience; the colon forces the sentence to commit; ranges in words survive screen readers, which read a dash as nothing or as "dash". A minus sign for negatives in tables is still correct and still allowed.

### 8.4 Ellipsis

The ellipsis is one character … (U+2026), spaced by the font, never three full stops (which fall apart when tracked and can break across lines). Set a hair space before it when it follows a word in display type. Bringhurst allows three spaced points in text faces; the single glyph is the house choice because it survives every pipeline.

### 8.5 Spaces

| Space | Codepoint | Width | Use |
|---|---|---|---|
| Word space | U+0020 | Font-defined, about 0.25em | Between words |
| No-break space | U+00A0 | Same as word space | Between a number and its unit (5 km, 20 %), before a short last word to kill a runt, inside names (Mr Patel) |
| Narrow no-break space | U+202F | About 0.15em | French punctuation, between digit groups in some styles |
| Hair space | U+200A | About 0.05em | Between a quotation mark and a quoted quotation mark, before an ellipsis, between an em and a bracket |
| Thin space | U+2009 | About 0.17em | Thousands separator in scientific style (not Indian style: 1,00,000 uses commas in the lakh system) |
| En space | U+2002 | 0.5em | After a numbered item in older book style |
| Em space | U+2003 | 1em | Paragraph indent in metal composition |
| Figure space | U+2007 | Width of a tabular digit | Aligning numbers without tabular figures |
| Punctuation space | U+2008 | Width of a full stop | Aligning decimals |
| Zero-width space | U+200B | 0 | Allows a line break inside a long URL or compound without showing a hyphen |

Numbers in India: the lakh and crore system groups digits as 1,00,000 and 1,00,00,000; set with the same comma glyph, no thin spaces. The rupee sign ₹ (U+20B9; design by D. Udaya Kumar, adopted 15 July 2010, encoded in Unicode 6.0 in October 2010) sits before the number with no space: ₹1,25,000. The UAE dirham: the Central Bank of the UAE unveiled a new dirham symbol on 27 March 2025 (a D crossed by two horizontal lines, drawn from the flag); it was encoded as U+20C3, UAE DIRHAM SIGN, in Unicode 18.0, released in September 2026. The Central Bank's symbol guideline and the UAE Design System set the usage: the symbol goes before the numeral, never after; never together with "AED" or "Dh"; matched to the numerals' height, baseline and stroke weight; never set as a superscript or subscript, never restyled on its own, never used as a logo element. Until operating systems, keyboards and fonts carry Unicode 18.0 (an unsupported codepoint shows as a missing-glyph box), write the ISO code before the number with a space (AED 4,500) and never beside the symbol. Check that any face used for Gulf pricing carries U+20C3 (section 18); as of October 2026 most do not.

### 8.6 Hanging punctuation and optical margin alignment

Punctuation at the start or end of a line (quotation marks, hyphens, full stops, commas) leaves a visible notch in the margin because the mark carries white space. Optical margin alignment pushes such marks slightly into the margin so that the text edge looks straight. InDesign: Window, Type and Tables, Story, Optical Margin Alignment, with the size set to the body size (the algorithm scales its offsets to this value; setting it to the display size over-hangs the body). CSS: `hanging-punctuation: first last` is implemented in Safari only (since Safari 10); Chromium has not shipped it as of October 2026. Pull quotes in luxury editorial hang their opening quotation mark fully outside the measure; set it by hand with a negative text-indent of about 0.4em in the face's quotation-mark width.

### 8.7 Small caps

Real small caps are capital forms drawn at about x-height plus 5 to 10 percent, with stem weight matched to the lowercase, and spacing fitted for caps. Faux small caps (what InDesign and browsers synthesise when the font lacks them) are scaled capitals: stems too thin, colour too light, spacing wrong. Test: set "Mask360" in small caps and compare the stem of the M with the stem of a lowercase l at the same size; a visible thinning means faux. OpenType features `smcp` (lowercase to small caps) and `c2sc` (capitals to small caps) carry the real ones; `pcap` and `c2pc` carry petite caps (at exactly x-height) in the few faces that have them. In CSS set `font-synthesis: none` (or `font-synthesis-small-caps: none`) so that the browser shows the failure rather than faking it; the same property stops faux bold and faux italic, which design-taste calls disqualifying.

### 8.8 Figures

| Style | OpenType tag | Shape | Use |
|---|---|---|---|
| Lining | lnum | Cap height, uniform | Inside capitals, headlines, UI, prices in a hero |
| Old-style (text) | onum | X-height with ascenders and descenders (3, 4, 5, 7, 9 descend; 6, 8 ascend) | Running text, where lining figures shout like capitals |
| Tabular | tnum | Every digit the same advance width | Tables, price lists, timers, any column of numbers; without them the column wobbles as digits change |
| Proportional | pnum | Each digit its own width | Running text and display, where a tabular 1 leaves a hole |

Default differs per font: text serifs often default to old-style proportional; grotesks to lining tabular or lining proportional. Combine: `tnum` plus `lnum` for a price table; `onum` plus `pnum` for a book. A dashboard, a deal sheet or a rate card without tabular figures is a defect.

### 8.9 Fractions, superiors, ordinals

- Fractions: `frac` builds diagonal fractions (½, ¾, 7/8) from the figures and a fraction slash (U+2044); `afrc` builds stacked (nut) fractions where available. Precomposed fraction codepoints (U+00BD) exist for ½, ¼, ¾ only.
- Superiors and inferiors: `sups` and `sinf` give real superscript and subscript forms (correct weight, correct height); `font-variant-position: super` in CSS uses them when the font has them and synthesises otherwise. The HTML sup element scales the glyph and thins it, a tell.
- Ordinals: `ordn` sets the letters after a numeral as superiors (1st, 2nd, 3rd; the Spanish ª and º). Do not use `ordn` on running text because it will catch "2nd" inside a word.

### 8.10 Ligatures, swashes, stylistic sets, case forms, slashed zero

- Standard ligatures `liga`: fi, fl, ff, ffi, ffl, where the f's hood would collide with the dot of i. On by default in every browser and InDesign; leave on except in tracked display type, where the ligature's fixed internal spacing stands out from the tracked letters.
- Discretionary ligatures `dlig`: ct, st, Th and decorative joins. Off by default; use once, in a display line, when the face offers something good (Fraunces, GT Alpina, Ogg).
- Contextual ligatures and alternates `clig` and `calt`: shape-changing substitutions that depend on neighbours (script faces joining, the Fontshare face Boska, programming ligatures in JetBrains Mono). `calt` is on by default.
- Historical ligatures `hlig`: the long s and its joins; antiquarian work only.
- Swashes `swsh` and contextual swashes `cswh`: flourished forms of capitals and terminal letters. One swash per line, at the end or start, never in a word's middle; two on one page reads as a wedding card.
- Stylistic sets `ss01` to `ss20`: named groups of alternate glyphs (a single-storey a, a round-dot i, a straight-leg R). Check the specimen for what each set does; foundries label them. Character variants `cv01` to `cv99` address one glyph at a time.
- Case-sensitive forms `case`: raises hyphens, dashes, brackets, parentheses and guillemets to centre on capitals rather than on x-height, and swaps old-style figures for lining. Apply to every all-caps setting; CSS `font-variant-caps: all-small-caps` and `text-transform: uppercase` do not trigger it automatically, so set `font-feature-settings: "case"` on caps labels.
- Slashed zero `zero`: distinguishes 0 from O in codes, part numbers, plates, monospaced data. Off in prose.
- Currency: check ₹ (U+20B9) and the dirham (U+20C3, section 8.5), and in Indian faces the alternates where the rupee is drawn to match lining and old-style figures.

## 9. OpenType features and their CSS equivalents

OpenType features are tagged substitution and positioning rules inside the font (GSUB and GPOS tables). CSS exposes them two ways: high-level properties that the browser maps to tags and that cascade sanely, and the low-level `font-feature-settings`, which sets tags directly and, because it is one property, overwrites every other feature when redeclared on a child. Rule: use the high-level property where one exists; use `font-feature-settings` only for tags that have no high-level form (ss01, cv01, case, zero on older engines), and then set every needed tag in one declaration.

| Tag | Feature | High-level CSS | Low-level CSS |
|---|---|---|---|
| kern | Kerning | `font-kerning: normal` | `font-feature-settings: "kern"` |
| liga, clig | Standard and contextual ligatures | `font-variant-ligatures: common-ligatures contextual` | `"liga", "clig"` |
| dlig | Discretionary ligatures | `font-variant-ligatures: discretionary-ligatures` | `"dlig"` |
| hlig | Historical ligatures | `font-variant-ligatures: historical-ligatures` | `"hlig"` |
| calt | Contextual alternates | `font-variant-ligatures: contextual` | `"calt"` |
| smcp | Small caps from lowercase | `font-variant-caps: small-caps` | `"smcp"` |
| smcp + c2sc | All small caps | `font-variant-caps: all-small-caps` | `"smcp", "c2sc"` |
| pcap, c2pc | Petite caps | `font-variant-caps: petite-caps`, `all-petite-caps` | `"pcap", "c2pc"` |
| unic | Unicase | `font-variant-caps: unicase` | `"unic"` |
| titl | Titling capitals | `font-variant-caps: titling-caps` | `"titl"` |
| lnum, onum | Lining, old-style figures | `font-variant-numeric: lining-nums`, `oldstyle-nums` | `"lnum"`, `"onum"` |
| tnum, pnum | Tabular, proportional figures | `font-variant-numeric: tabular-nums`, `proportional-nums` | `"tnum"`, `"pnum"` |
| frac, afrc | Diagonal, stacked fractions | `font-variant-numeric: diagonal-fractions`, `stacked-fractions` | `"frac"`, `"afrc"` |
| ordn | Ordinals | `font-variant-numeric: ordinal` | `"ordn"` |
| zero | Slashed zero | `font-variant-numeric: slashed-zero` | `"zero"` |
| sups, subs, sinf | Superiors, subscripts, scientific inferiors | `font-variant-position: super`, `sub` | `"sups"`, `"subs"`, `"sinf"` |
| swsh, cswh | Swashes | `font-variant-alternates: swash(name)` via `@font-feature-values` | `"swsh"` |
| ss01 to ss20 | Stylistic sets | `font-variant-alternates: styleset(name)` via `@font-feature-values` | `"ss01"` |
| cv01 to cv99 | Character variants | `font-variant-alternates: character-variant(name)` | `"cv01"` |
| case | Case-sensitive forms | none | `"case"` |
| locl | Localised forms (Turkish i, Romanian comma-accents, Marathi Devanagari forms) | triggered by the `lang` attribute | `"locl"` |
| opsz | Optical size (variable axis) | `font-optical-sizing: auto` | `font-variation-settings: "opsz" 24` |

InDesign exposes the same tags in the Character panel menu, OpenType submenu, and in paragraph and character styles under OpenType Features; Figma exposes them in Type settings, Details. A feature that is greyed out means the font does not carry it: the specimen check in section 18 exists to catch this before the pitch.

## 10. Variable fonts

A variable font is one OpenType file that carries a design space: a default outline per glyph plus deltas that move its points along named axes, so that any position between the masters can be instantiated at render time. The format is OpenType Font Variations, part of OpenType 1.8, announced jointly by Microsoft, Google, Apple and Adobe at ATypI Warsaw in September 2016. The tables that matter when reading a file in Wakamai Fondue (section 19): `fvar` (the axes and named instances), `gvar` or `CFF2` (the deltas), `avar` (axis mapping, so that the visual middle of the weight range sits at the numeric middle) and `STAT` (style attributes, which let an application build a correct style menu from axis values).

### 10.1 Axes

| Axis | Tag | Registered | Range convention | CSS property |
|---|---|---|---|---|
| Weight | wght | Yes | 1 to 1000; 400 regular, 700 bold | `font-weight: 350` |
| Width | wdth | Yes | Percent of normal; 100 normal, 75 condensed, 125 extended | `font-stretch: 87.5%` (renamed `font-width` in CSS Fonts 4; MDN marks `font-width` Limited availability as of October 2026, so declare `font-stretch` first) |
| Optical size | opsz | Yes | Points; the font-size by default | `font-optical-sizing: auto` (section 3.2) |
| Slant | slnt | Yes | Degrees, counter-clockwise, so a forward lean is negative: Roboto Flex runs -10 to 0 | `font-style: oblique 10deg` |
| Italic | ital | Yes | 0 upright, 1 italic; a switch, where slnt is a dial | `font-style: italic` |
| Grade | GRAD | No (custom, uppercase tag) | Roboto Flex -200 to 150 | `font-variation-settings: "GRAD" 50` |
| Custom | XTRA, XOPQ, YOPQ, YTLC, YTAS, YTDE, YTFI (parametric axes), SOFT, WONK (Fraunces), MONO, CASL, CRSV (Recursive) | No | Foundry-defined | `font-variation-settings` only |

Registered axes use lowercase tags and map to high-level CSS; custom axes use uppercase tags and are reachable only through the low-level property. The rule from section 9 applies again: `font-variation-settings` is one property, so a redeclaration on a child wipes every axis set on the parent; set all needed axes in one declaration, and prefer `font-weight`, `font-stretch` and `font-style` wherever they exist. In `@font-face`, declare the ranges the file carries so the browser can match requests: `font-weight: 300 700; font-stretch: 75% 125%; font-style: oblique 0deg 10deg;`.

Grade deserves a line of its own. GRAD thickens or thins strokes without changing advance widths, so a change of grade does not reflow the line. Weight changes do reflow. Reasons to use grade: hover states on links and buttons that must not jiggle the layout, dark mode (light type on dark reads heavier, so drop the grade by 10 to 20 units to match the perceived weight of dark-on-light), and compensating for a thin rendering on Windows (section 11). Roboto Flex (Font Bureau for Google, 2022) carries GRAD -200 to 150 and twelve other axes; it is the reference file for learning what parametric axes do.

### 10.2 Named instances

A named instance is a stored axis position with a style name (Light, Regular, Semibold Condensed) in the `fvar` table. Applications that do not expose axis sliders (Microsoft Office, older design tools, many video tools) show only the named instances, so a variable file whose designer stored four instances offers four styles there and a continuum in Figma and the browser. When briefing a foundry on a custom variable face, specify the instances as well as the axes: the client's Word documents will use nothing else.

### 10.3 Performance

One variable file replaces a set of statics. The file is larger than one static and smaller than the set once two or three styles are needed, because the deltas compress well and the shared tables are stored once; the exact break-even depends on the design (a face with many masters carries more delta data). Measure with the real files: export the subsets you would ship (section 12.2) in both forms and compare in DevTools. For the house face, Space Grotesk ships on Google Fonts as a variable file covering wght 300 to 700; the house uses 300, 500, 600 and 700, so one variable file beats four statics and removes the four requests. The Web Almanac 2024 chapter on fonts reports about 33 percent of desktop pages and 34 percent of mobile pages using variable fonts, with Google Fonts serving 92 percent of them on desktop; variable has gone from novelty to default in six years.

### 10.4 Animating axes

Axis values are animatable: `transition: font-variation-settings 300ms ease-out` works in every current browser, and `font-weight` itself interpolates in Chromium, Firefox and WebKit. Rules:

- Animate GRAD or a custom axis where the layout must stay fixed; animate wght only on a single line whose container has a fixed width and `white-space: nowrap`, because every frame of a weight animation reflows.
- Animate on a transform-free element; font variation changes force text re-rasterisation each frame, so limit the animated run to a headline, never a paragraph.
- Respect `prefers-reduced-motion: reduce`: freeze the axis at its end value.
- The performative kinetic type that design-taste lists as rising (variable type reacting to scroll, pointer or sound) is built on these axes; the motion rules sit in 12-motion-principles-and-ui-motion.md and the kinetic type craft in 13-motion-graphics-and-3d-production.md, section 4.

### 10.5 Who ships variable

As of October 2026: Google Fonts (most new families, including Space Grotesk, Fraunces, Roboto Flex, Inter 4, Newsreader, Literata); Fontshare (Satoshi, General Sans, Cabinet Grotesk, Switzer, Clash and others ship variable alongside statics); Dinamo (ABC Diatype, ABC Favorit, ABC Whyte and most of the catalogue, plus Font Gauntlet, Dinamo's own browser tool for testing axes); Grilli Type (GT Flexa was built as a variable face; others follow); Pangram Pangram (Neue Montreal, Editorial New and most families offer variable versions); Commercial Type and Klim ship variable for a growing part of their catalogues; Monotype (Helvetica Now Variable); Font Bureau and Type Network (Amstelvar, Roboto Flex, the parametric experiments). Check the foundry page for whether the variable file is a separate licence line; some foundries price it as its own product.

### 10.6 Pitfalls

- Interpolation artefacts: a face drawn with two masters interpolates its middle; kinks appear at joins and overlaps if the masters are not compatible. Test the instances you will use (the house 500 and 600) at 16px on Windows before adopting.
- Hinting: most variable fonts ship unhinted or autohinted; on 1x Windows screens at 12 to 14px they render softer than a hinted static (section 11.2).
- Tool support: Figma supports variable axes in the type panel; InDesign and Illustrator expose axes in the Character panel; After Effects supports variable fonts in the Character panel; Microsoft Office shows named instances only; Keynote and Google Slides likewise. Export statics for decks that leave the house.
- Style naming: a badly built `STAT` table produces menus such as "Söhne Regular Regular" or lists the family twice in Windows; this is a foundry defect to report, and a reason to open the file in Wakamai Fondue before buying.
- Synthesis: when a variable file lacks an italic axis, browsers synthesise an oblique unless `font-synthesis: none` is set (section 8.7). Check the file carries `ital` or a separate italic file.
- Licensing: a variable file is still font software; subsetting it or re-exporting instances as statics is modification under most EULAs (section 16.5).

## 11. Type on screen

### 11.1 The rendering stack

Text on screen passes through three stages, and each platform uses different software for them:

| Stage | Job | macOS and iOS | Windows | Android and Chrome | Linux |
|---|---|---|---|---|---|
| Shaping | Turning a string of codepoints into positioned glyphs: ligatures, kerning, Arabic joining, Devanagari reordering | Core Text's shaper (Chrome on macOS uses HarfBuzz) | DirectWrite's shaper (Chrome and Firefox use HarfBuzz) | HarfBuzz | HarfBuzz |
| Rasterising | Turning outlines into pixel coverage | Core Graphics (through Core Text) | DirectWrite (GDI with ClearType in legacy apps) | FreeType (through Skia) | FreeType |
| Compositing | Painting the glyph bitmaps into the frame with colour and effects | Core Animation | Direct2D, DirectComposition | Skia | Cairo, Skia |

HarfBuzz (Behdad Esfahbod) is the shaping engine inside Chrome, Firefox, Android, LibreOffice and most of the open-source stack; its correctness with Devanagari conjuncts and Arabic joining is why those scripts render consistently across those applications and inconsistently in older Windows applications that still use Uniscribe. DirectWrite arrived with Windows 7 in 2009 and replaced GDI text for modern applications; GDI with ClearType remains in some legacy software and renders with heavy hinting and colour fringes.

### 11.2 Hinting

Hinting is instruction data in a font that nudges outlines onto the pixel grid at small sizes, so that stems land on whole pixels and x-heights are consistent across letters. TrueType hints are a byte-coded programme per glyph (the `fpgm`, `prep`, `cvt` and per-glyph instructions) that can move points arbitrarily; PostScript and CFF hints are declarative (stem widths, alignment zones called blue zones) and the rasteriser decides what to do with them. Platform policy differs: Windows honours hints (strong grid-fitting, crisp but distorted shapes, thin weights breaking up); macOS and iOS ignore most hints and render the true outline with antialiasing (softer, heavier, faithful to the drawing); FreeType sits between, with an autohinter that infers hints when a font has none. The practical consequence: a light weight (300) that looks elegant on a Mac looks ragged and grey on a 1x Windows laptop at 14px. The house body weight of 300 therefore holds at 16px and up, and labels below 14px step to 400 on every platform. Tools: ttfautohint (Werner Lemberg, FreeType project) adds hints to unhinted web fonts; test on a real 1x Windows screen, since every designer's Mac hides the problem.

### 11.3 Antialiasing and font smoothing

- Greyscale antialiasing: each pixel takes a shade proportional to the coverage of the outline. Every platform does this at 2x and above.
- Subpixel antialiasing: uses the red, green and blue stripes of an LCD pixel as three horizontal subpixels, tripling horizontal resolution at the cost of colour fringes. Microsoft's ClearType (2000) is the canonical form. Apple removed subpixel antialiasing from macOS in 10.14 Mojave (2018); subpixel rendering needs to know the background colour at render time, which GPU compositing of transparent layers cannot guarantee, and Retina panels had made it unnecessary. Since then macOS renders greyscale only, which on a 1x external monitor looks thinner and blurrier, and on Retina looks the same as before.
- Font smoothing in CSS: `-webkit-font-smoothing: antialiased` (macOS only) switches from subpixel to greyscale and thins the rendering; post-Mojave it changes little on the OS but still affects Chrome's own rendering path; `-moz-osx-font-smoothing: grayscale` is the Firefox equivalent. The house uses them only for light type on dark grounds (the client deck surface on #0A0A0A), where greyscale stops the strokes bloating; on white grounds leave the default, because the thinned rendering lowers contrast.
- Gamma: macOS and Windows apply different gamma to the antialiasing ramp; the same grey text measures darker on a Mac. One more reason the Windows check is mandatory before a client sees a build.

### 11.4 Density and the 1x worst case

Retina (2x) and 3x displays render at 326 to 460 pixels per inch on phones and 218 to 254 ppi on Mac laptops, where hinting and subpixel tricks stop mattering because a 1px hairline is already below the eye's resolution at viewing distance. The 1x case still exists: the office Windows laptop at 1366 by 768 and 96 to 110 ppi, the Indian and Gulf enterprise desktop, the hotel back-office screen. Design for 2x, test on 1x, and let the 1x result decide the minimum weight and size. In CSS, `@media (min-resolution: 2dppx)` lets you drop to a lighter weight only where the density can carry it.

### 11.5 Minimum sizes per platform

| Platform | Default body | Minimum | Source |
|---|---|---|---|
| iOS, iPadOS | 17pt | 11pt | Apple Human Interface Guidelines, Typography, as of October 2026 |
| macOS | 13pt | 10pt | Apple HIG |
| tvOS | 29pt | 23pt | Apple HIG |
| visionOS | 17pt | 12pt | Apple HIG |
| watchOS | 16pt | 12pt | Apple HIG |
| Android (Material 3) | 14sp (body medium) or 16sp (body large) | 11sp (label small) as the smallest token; 12sp (body small) is the practical floor for anything read | Material 3 type scale, Jetpack Compose Typography defaults |
| Web | 16px (the browser default and the house body) | 12px for legal and timestamps; nothing below | Section 7.3; WCAG 2.2 sets no minimum size and instead requires 200 percent zoom (1.4.4) and the text spacing tolerance of 1.4.12 |

Points on Apple platforms and sp on Android are density-independent units: 1pt is one CSS-pixel equivalent at 1x and two device pixels at 2x; sp equals dp (density-independent pixel) at the user's default font scale and grows with it. Use sp for text and dp for layout on Android, so that a user's larger font setting scales the words and leaves the chrome alone.

### 11.6 Dynamic Type and sp scaling

iOS Dynamic Type scales each text style along a curve rather than by one factor. At the Large (default) setting the styles run Large Title 34/41, Title 1 28/34, Title 2 22/28, Title 3 20/25, Headline 17/22 semibold, Body 17/22, Callout 16/21, Subhead 15/20, Footnote 13/18, Caption 1 12/16, Caption 2 11/13 (size over leading, in points). At the largest accessibility setting Body reaches 53/62 and Caption 2 40/48, so a layout that holds Body at the default must also survive Body at three times the size: that is the design test, and the reason iOS layouts stack vertically at large sizes. Apple's own tracking table for SF Pro is the best published example of size-dependent tracking: +41 units (thousandths of an em) at 6pt, 0 at 12pt, -26 at 17pt, then back to +3 at 24pt; the reversal at 20 to 24pt is the point where the system swaps the Text optical size for Display, which is drawn tighter and so needs positive tracking to match. Static mockups in Figma using the discrete SF cuts need these values typed in; the running system applies them automatically.

Android 14 extended user font scaling to 200 percent with a non-linear curve (large styles scale less than small ones), which is the same idea as Dynamic Type: the system protects headlines from growing off the screen while body text doubles. Test both platforms at the largest setting before sign-off.

### 11.7 Contrast and weight on screen

Contrast ratios for text (4.5:1 for body, 3:1 for large text, where large means 24px, or 18.66px at bold, under WCAG 2.2 1.4.3) are specified in 04-colour.md, section 6 and 11-accessibility-and-inclusive-design.md. Two typographic facts they depend on: thin weights lower effective contrast because the stroke covers less of each pixel and antialiasing greys it (APCA, the candidate algorithm for WCAG 3, scores weight and size together for this reason), and grey secondary text at 300 weight on white routinely fails 4.5:1 where the same grey at 400 passes. The house secondary grey is chosen against the 300 weight, which is the stricter case.

## 12. Web font engineering

### 12.1 Formats

Ship WOFF 2.0 only. It wraps OpenType (TrueType or CFF outlines, variable included) in Brotli compression with font-specific preprocessing; the W3C first published WOFF File Format 2.0 as a Recommendation on 1 March 2018, the current edition is dated 8 August 2024, and every current browser reads it. The Web Almanac 2024 fonts chapter measured WOFF2 at 81 percent of font files served on desktop and 78 percent on mobile, with a median font file of 39 KB. WOFF 1.0 (zlib, 2012) is only for a legacy embedded browser you have been told to support; raw TTF and OTF on the web waste 30 to 50 percent of bytes and leak the desktop file; EOT and SVG fonts are dead.

### 12.2 Subsetting

A font file carries every glyph the designer drew: Latin, extended Latin, Cyrillic, Greek, Vietnamese, symbols. A marketing page in English uses about 200 of them. Subsetting removes the rest.

- `unicode-range` in `@font-face` declares which codepoints a file covers; the browser downloads the file only if the page uses a character in that range. Google Fonts splits every family this way (latin, latin-ext, cyrillic, devanagari, arabic as separate files), which is why a Google Fonts CSS response lists one family a dozen times. Self-hosted fonts should copy the pattern: a Latin file, a Latin-extended file for French and Portuguese names, a Devanagari file, an Arabic file.
- pyftsubset (part of fontTools, Python) does the cutting: `pyftsubset Font.ttf --unicodes="U+0020-007E,U+00A0-00FF,U+20B9,U+20C3" --layout-features='*' --flavor=woff2 --output-file=font-latin.woff2`. Keep `--layout-features='*'` or the OpenType features (kerning, small caps, figures) are stripped with the glyphs. Add the rupee and dirham codepoints to every Latin subset for Mask360 work.
- glyphhanger (Zach Leatherman) spiders a site, collects the characters used, and drives pyftsubset with that list; useful for a fixed microsite, dangerous for a CMS where editors will type characters you removed.
- Subsetting is modification of the font software; most web licences permit it for delivery and some foundries supply their own subsets and forbid re-cutting. Read the EULA (section 16).

Weights: Indian and Gulf mobile traffic runs on networks where a 400 KB font bundle is visible. House budget: 100 KB of WOFF2 for a Latin-only page (two to three styles of one family, subset), 180 KB with a second script, measured in DevTools with the Font filter. As rough orders of magnitude, a Devanagari subset of a well-made family runs about 60 to 120 KB per style, Arabic Naskh with full contextual forms about 50 to 150 KB, Nastaliq 200 KB and up; measure the real files, which is why a second script gets one weight.

### 12.3 font-display, FOIT, FOUT, FOFT

While a web font loads, the browser must show something. FOIT (flash of invisible text) hides the text until the font arrives; FOUT (flash of unstyled text) shows the fallback and swaps; FOFT (flash of faux text, Zach Leatherman's term from his font-loading recipes) loads the roman first and lets the browser synthesise bold and italic until the real ones land. `font-display` in `@font-face` sets the policy with two timers, a block period (text invisible) and a swap period (fallback shown, swap allowed):

| Value | Block | Swap | Use |
|---|---|---|---|
| block | About 3s | Infinite | Icon fonts only, where the fallback would show nonsense; the house uses SVG icons and never needs it |
| swap | About 100ms, effectively none | Infinite | Brand faces on marketing pages: the words appear at once in the fallback and swap when ready |
| fallback | About 100ms | About 3s | Body text where a late swap would be worse than staying in the fallback |
| optional | About 100ms | None | Decorative or secondary faces; the browser may skip the font entirely on a slow connection |
| auto | Browser decides, usually like block | | Never specify; set it explicitly |

Web Almanac 2024 found `font-display: swap` on about 45 percent of desktop and mobile pages. House rule: `swap` for the brand face, with a metric-matched fallback (12.5) so the swap moves nothing; `optional` for anything the page can live without; a preload (12.4) for the one display file above the fold so the swap rarely happens.

### 12.4 Preload, preconnect, caching

- `<link rel="preload" href="/fonts/sg-700.woff2" as="font" type="font/woff2" crossorigin>` in the head starts the download before the CSS is parsed. Use it for one or two files (the display weight and the body weight above the fold); preloading all of them delays the images. The `crossorigin` attribute is required even for same-origin fonts, because font fetches are CORS requests; without it the browser downloads the file twice.
- `<link rel="preconnect" href="https://use.typekit.net" crossorigin>` opens the connection early for a third-party host; only useful if you must use one.
- Serve fonts with `Cache-Control: public, max-age=31536000, immutable` and a hashed filename, so returning visitors never refetch. Chrome partitioned its HTTP cache by top-level site in version 86 (October 2020), so a Google Fonts file cached by another site is no longer reused on yours; the old argument that Google-hosted fonts are "probably already cached" is gone.

### 12.5 Self-hosting versus Google Fonts versus Adobe Fonts

| Option | How it loads | Privacy and law | Cost | House use |
|---|---|---|---|---|
| Self-hosted | Files on your origin or CDN, your `@font-face` | No third party sees the visitor | The licence fee; Google Fonts files are free to self-host under OFL; Fontshare files follow the ITF licence shipped with each download (section 16.2) | Default for every house and client build |
| Google Fonts hosted | CSS from fonts.googleapis.com, files from fonts.gstatic.com | Landgericht München I, judgment of 20 January 2022, case 3 O 17493/20: embedding Google Fonts so that the visitor's IP address reaches Google without consent breached the GDPR; 100 euros damages, a first-instance decision that still triggered a wave of warning letters in Germany. India's Digital Personal Data Protection Act 2023 and the UAE's Federal Decree-Law 45 of 2021 both define personal data broadly; self-hosting removes the question | Free | Prototypes only; never a shipped client site |
| Adobe Fonts | A script or CSS embed tied to a web project and your Creative Cloud subscription; Adobe serves the files | Adobe's servers see the request; covered by Adobe's terms | Included in Creative Cloud; stops when the subscription or the project ends | Decks and print where the Adobe library is already licensed; avoid for client sites the client does not control |
| Foundry-hosted (Klim, Commercial Type and others offer hosted web fonts) | Foundry CSS | Foundry servers see the request | Part of the web licence | When the EULA requires it |

The Web Almanac 2024 counted about 57 percent of desktop sites and 48 percent of mobile sites loading from Google Fonts, while 70 percent self-host at least one font; the house treats a Google-hosted brand face as a tell of a site built without a font decision.

### 12.6 Matching the fallback: size-adjust and the override descriptors

A swap causes layout shift when the fallback's glyph widths and vertical metrics differ from the web font's. Four `@font-face` descriptors on the fallback face fix it: `size-adjust` (scales every metric of the fallback by a percentage so its x-height and widths match), `ascent-override`, `descent-override` and `line-gap-override` (replace the fallback's vertical metrics so the line box matches). MDN lists `size-adjust` as Baseline Widely available (across browsers since September 2023); the three overrides shipped in Chromium 87 and Firefox 89 and are still missing from Safari, so MDN marks them Limited availability as of October 2026. On Safari the fallback gets `size-adjust` alone, which matches widths and leaves a small vertical shift. Pattern:

```
@font-face { font-family: "Space Grotesk"; src: url(/fonts/sg.woff2) format("woff2"); font-weight: 300 700; font-display: swap; }
@font-face { font-family: "SG Fallback"; src: local("Arial"); size-adjust: 104%; ascent-override: 97%; descent-override: 29%; line-gap-override: 0%; }
body { font-family: "Space Grotesk", "SG Fallback", sans-serif; }
```

The percentages are illustrative; generate real ones with Capsize (Seek), Fontaine (the Nuxt team's tool, which writes the declarations automatically) or Brian Louis Ramirez's Fallback Font Generator, each of which reads the metrics of both files. Target: a Cumulative Layout Shift contribution from fonts of zero, inside the Core Web Vitals CLS budget of 0.1.

### 12.7 The CSS Font Loading API

`document.fonts.load('700 1em "Space Grotesk"')` returns a promise that resolves when the face is usable; `document.fonts.ready` resolves when all requested faces are done; `new FontFace(name, url, descriptors)` loads a font without a stylesheet. Use: add a class to `html` when the display face has loaded so that a scroll-driven headline animation (12-motion-principles-and-ui-motion.md, section 7) starts on the real glyphs rather than on the fallback, and set `sessionStorage` so the class is applied immediately on the next page. Do not use it to hide text; `font-display` already does that job with the right timers.

### 12.8 System font stacks

When no brand voice is needed (an internal tool, a form inside a client's intranet, an email that cannot carry a web font), use the platform's own face. The UI stack: `font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;` yields SF on Apple, Segoe on Windows, Roboto on Android. Dan Klammer's Modern Font Stacks catalogues stacks by classification (a "Geometric Humanist" stack of Avenir, Montserrat, Corbel; a "Transitional" stack of Charter, Bitstream Charter, Sitka Text, Cambria) for pages that want a flavour at zero bytes. Email clients: only system faces render reliably, so a house email is set in the stack above with the brand face declared first for the clients that honour `@font-face` (Apple Mail and iOS Mail do; Gmail and Outlook do not).

### 12.9 Checklist before a client site ships

1. One family, two to four styles, WOFF2, subset per script, under the byte budget.
2. `font-display: swap` plus a metric-matched fallback; preload the hero weight.
3. Self-hosted on the client's domain under the client's web licence (section 16.3).
4. `font-synthesis: none`; `font-kerning: normal`; `font-variant-numeric: tabular-nums` on every number column; `text-wrap: balance` on headings, `pretty` on paragraphs; `hyphens: auto` with `lang` set.
5. Rupee and dirham glyphs present in the subset and rendered (section 8.5).
6. Checked on a 1x Windows laptop in Chrome and Edge, on an Android phone at 200 percent font scale, and on iPhone at the largest accessibility size.

## 13. Type in motion and video

### 13.1 Kerning and tracking in After Effects

After Effects measures kerning and tracking in thousandths of an em, the InDesign units, in the Character panel. Kerning offers Metrics (the font's pairs) and Optical (Adobe's shape analysis), with the same rule as section 4.2: Metrics for serious foundry faces, Optical for mixed faces or faces with thin kern tables, then hand-kern every title with the cursor between the pair and Option or Alt plus the arrow keys (the increment is set in Preferences, Type; the default of 20 units is coarse, set 5 for display work). Tracking is a text animator property as well as a static value, so a title can open from tight to normal over 600 to 900ms, which is the one kinetic move that reads as expensive; the Tsume property tightens by reducing each glyph's own sidebearings proportionally and is the better choice for CJK and for very large Latin where tracking alone leaves uneven gaps. Per-character animation uses Animators with Range Selectors (Position, Opacity, Tracking, Scale per character or word), the engine beneath every kinetic type piece; the timing rules are in 12-motion-principles-and-ui-motion.md, section 4, the kinetic type and supers craft in 13-motion-graphics-and-3d-production.md, sections 4 and 5, and the edit and export chain in 16-editing-colour-grading-and-delivery.md.

### 13.2 Safe areas

SMPTE ST 2046-1:2009 defines the action safe area as a centred rectangle 93 percent of the production aperture's width and height, and the title safe area as 90 percent. For 1920 by 1080 that puts title safe at 1728 by 972, inset 96 pixels horizontally and 54 vertically. Older 4:3 practice used 90 and 80 percent, and several editing applications still default to those values (After Effects' Preferences, Grids and Guides, hold the action-safe and title-safe margins and ship with the legacy 10 and 20 percent; set 7 and 10). Broadcast deliverables for Indian and Gulf channels still get reviewed against title safe, because consumer televisions overscan by a few percent.

Social vertical video has its own safe zones, set by the platform's interface rather than the screen. As reported from Meta's Ads Guide (the house could not re-read Meta's own page in October 2026, so confirm before an edit), the Instagram Reels ad specification asks for 9:16 at 1440 by 2560 and for the top 14 percent, the bottom 35 percent and 6 percent on each side to be kept free of text, logos and anything that must be read, because the caption, the account name, the audio tag and the right-hand action column cover those bands. On a 1080 by 1920 frame that is about 270 pixels at the top, 670 at the bottom and 65 at each side. TikTok and YouTube Shorts publish comparable diagrams; check each before the edit rather than reusing one set, since the overlays move with interface updates. The house keeps one 9:16 master with a locked guide layer for each platform. Current platform figures live in 26-platform-and-format-specs-2026.md and the craft in 17-short-form-social-and-platform-craft.md.

### 13.3 Minimum sizes on video

Video type is read at a distance and through compression, so screen rules do not carry over. House minimums, with the reason:

| Delivery | Frame | Minimum body or subtitle | Minimum title | Reason |
|---|---|---|---|---|
| Television and OTT, 16:9 | 1920 by 1080 | 40px cap height (about 56px type) | 72px | Viewed at 2.5 to 3.5m on a 55-inch screen; below 40px cap height a subtitle needs a second read |
| Same, UHD | 3840 by 2160 | Double the 1080 values | Double | Pixel count doubles, viewing geometry does not |
| Instagram and TikTok, 9:16 | 1080 by 1920 | 48px type for captions | 96px | A 6-inch phone at 35cm; the frame is seen at about one third of its pixel size |
| LinkedIn and YouTube feed, 16:9 or 1:1 | 1080 wide | 36px | 72px | Inline players are small; the frame is often 400px wide on a desktop feed |
| Cinema and event screens | DCI 2K or 4K | Follow the venue's test; 1 percent of frame height is the floor | 3 percent of frame height | Seat distance varies by a factor of ten |

Weight: nothing lighter than 400 on video. Hairlines strobe, break under H.264 and H.265 recompression at platform bitrates, and vanish over a bright background. High-contrast serifs (section 2.3) survive only at title sizes and only on a still or near-still background; a didone at caption size on a Reel is a defect.

### 13.4 Duration on screen

Reading speed sets the floor. Netflix's English Timed Text Style Guide caps subtitles at 20 characters per second for adult programmes and 17 for children's, with 42 characters per line, two lines, a minimum event of 5/6 of a second (20 frames at 24 fps) and a maximum of 7 seconds. Derived house rule for titles and kinetic lines: hold any line for at least 1.5 seconds, plus 0.3 seconds for every word beyond three; a six-word headline holds for 2.4 seconds before its out-animation begins; a single word can flash at 0.4 seconds only inside a sequence the viewer has already learned to read. Transitions count against reading time only when the type is already legible; a 500ms blur-in adds 500ms.

### 13.5 Type over moving backgrounds

- Prefer a still: a locked-off plate or a freeze under the title. If the background must move, place the type over the region with the least luminance change across the shot, checked on the luma waveform in Premiere or Resolve across the whole duration of the shot.
- A scrim (a gradient darkening the band behind the type, 30 to 50 percent black, feathered) is the honest tool; drop shadows and glows are the cheap tells design-taste lists. A solid plate in the brand colour or a blurred copy of the footage behind the type both read as current.
- Contrast: aim for the 4.5:1 body ratio of 04-colour.md against the lightest frame the type sits over, measured on that frame.
- Devanagari and Arabic over footage need 10 to 15 percent more size than Latin for the same legibility because their distinguishing detail (matras, dots) is small (section 15).

## 14. Type for print

### 14.1 Units

The PostScript point is 1/72 inch, 0.3528mm; 12 points make a pica; InDesign, Illustrator and every modern RIP use it. The Didot point (0.376mm) survives in old European specimens and some German presses; a 10pt Didot face is about 10.7pt PostScript, which matters when a client hands over a 1970s brand manual. Type size in print is the body (the em), so the visible cap height of a 10pt face is 6.5 to 7.5pt; two faces at 10pt can differ in apparent size by 15 percent (section 1.1), which is why specs quote the face with the size.

### 14.2 Sizes and leading by job

| Job | Size | Leading | Measure | Notes |
|---|---|---|---|---|
| Book text | 9.5 to 11pt | 12.5 to 14.5pt (1.3 to 1.35) | 60 to 70 characters | Serif text cut; old-style figures |
| Magazine body | 8.5 to 10pt | 11 to 13pt | 45 to 60 in columns | Text or caption cut depending on stock |
| Luxury lookbook and brochure | 8 to 9.5pt | 13 to 16pt (1.5 to 1.7) | 50 to 65 | The wide leading is the luxury gesture; generous margins (design-taste, physics of expensive) |
| Captions and credits | 6.5 to 8pt | 8.5 to 10pt | Short | Caption cut if the family has one; lining figures for product codes |
| Legal and ingredients | 6 to 7pt; 5pt only on coated stock with a sturdy face | 7 to 8.5pt | Any | India's Legal Metrology (Packaged Commodities) Rules 2011 set minimum letter heights for mandatory declarations by pack size; see 20-print-packaging-ooh-and-physical-production.md and check the current schedule before a pack goes to artwork |
| Business card | Name 9 to 10pt, details 7 to 8pt | 1.3 | | Hairline serifs fail below 8pt on uncoated card |
| Poster and OOH | 72pt and up | 0.9 to 1.0 | Three to six words a line | Distance rules in section 20 and in 20-print-packaging-ooh-and-physical-production.md |

Print leading runs lower than screen leading because paper resolution is higher and the page is read at 30 to 40cm with its edges in view. Luxury editorial breaks the rule deliberately: 9/15 Tiempos Text on a wide measure reads as expensive precisely because it spends paper.

### 14.3 Optical sizes and ink

Ink spread (tone value increase, or dot gain in the older vocabulary) thickens every printed stroke as ink wicks into the fibres; uncoated paper gains more than coated, and newsprint most. ISO 12647-2 sets the target increase per paper type, which is why a contract proof made to ISO 12647-7 shows what the press will do and a laser proof does not. Consequences for type:

- A text cut at 9pt on uncoated stock prints about one weight heavier; a 300 or Light reads as Regular, a Regular as Medium. Choose one step lighter on rough and uncoated stock (Munken, Colorplan, kraft), one step heavier on coated silk where the ink sits on the surface and thin strokes look thinner.
- Hairlines: 0.25pt is the minimum printable rule on offset; a didone's thins at 10pt are near that limit and fill or break depending on the stock. Didones live above 14pt in print and above 24pt on uncoated.
- Reversed (knocked-out) type: white type in a solid is where spread does the most damage, because the ink closes the counters from all sides. Minimum 8pt, no light weights below 12pt, no serifs with hairlines below 14pt, and never reversed out of a four-colour rich black (registration drift of 0.1mm blurs every edge); reverse out of 100 K or a single spot.
- Small type in colour: set type under 10pt in a single ink (100 K or one Pantone), never in a CMYK build, for the same registration reason. The colour side of this rule sits in 04-colour.md, section 10, and the production chain in 20-print-packaging-ooh-and-physical-production.md.
- Caption cuts earn their keep in print more than on screen: Garamond Premier Caption at 7pt on uncoated holds its counters where the Regular clogs.

### 14.4 Paper and weight

Rough and toothy stock scatters light and softens edges; type on it reads warmer and a touch darker, so a grotesk loses its edge and a humanist serif gains. Coated gloss keeps every edge and shows the thinness of light weights without mercy. Tinted stock lowers contrast: a 300 weight on a cream or grey sheet drops below readable at 9pt. Check the combination on a printed sample at actual size, under the shop's light, and squint: the first thing to vanish is the thin, and a page that greys evenly has passed.

## 15. Multiscript typography

Mask360 ships Hindi and Marathi (Devanagari), Arabic, Urdu (Nastaliq), Tamil and Bengali beside English. The taste rule is in design-taste, references/type.md, section 2 (match the Latin's weight, x-height and rhythm; a Devanagari two weights heavier reads as an afterthought). This section is the mechanics.

### 15.1 Devanagari anatomy

- Shirorekha (headline): the horizontal bar from which letters hang; in running text the bars of consecutive letters join into one line per word, so the word boundary is the gap in the headline. It is the strongest horizontal in the script and plays the role the baseline plays in Latin for alignment; the eye reads along the top.
- Base character band: the body of the consonant hangs below the headline; its depth is the script's equivalent of x-height and sets the apparent size.
- Matras: vowel signs attached to consonants. Above the headline (i-matra's hook, e and ai strokes, chandrabindu, anusvara), below (u, uu, the vocalic r), beside (aa, ii, o, au as vertical bars). The space above the headline must hold the tallest matra stack; the space below must hold the deepest subscript conjunct.
- Conjuncts: two or more consonants fused when the halant (virama) kills the inherent vowel; half forms (a consonant without its vertical stem) join the next full form, and some pairs produce a new glyph (ksha, tra, jna). Stacked conjuncts descend; a face with 300 conjuncts composes Hindi well, a face with 1,000 composes Sanskrit.
- Nukta: the dot under a consonant for Urdu-derived sounds (qa, za, fa), easily lost at small sizes; a face that draws the nukta too small fails for Hindi news copy.
- Localised forms: Marathi uses different shapes for la and some conjuncts; the `locl` feature switches them when the language is tagged (`lang="mr"`), which is why language tagging in HTML and InDesign decides whether the Marathi reader sees the right letters.

Vertical metrics: a Devanagari line needs three zones (upper matras, base band, lower matras and conjuncts) where Latin needs ascender, x-height and descender; the base band is shallower than the Latin x-height band in most paired families, so Devanagari set at the same point size looks about 10 to 15 percent smaller and needs a size increase of that order beside sentence-case Latin. Beside all-caps Latin, raise the Devanagari further and shift its baseline, or avoid the pairing (the Alphabettes guide "Devanagari Typography 101" sets this out). Leading 1.6 to 1.8 (section 5.1). Tracking near zero: tracking Devanagari widely breaks the shirorekha into dashes and dissolves the words. Hierarchy comes from size, weight and colour, because the script has no case and no small caps.

Faces and foundries: Indian Type Foundry (Kohinoor Devanagari, Poppins Devanagari, Hind, and the Fontshare regional cuts), Ek Type (Mukta, Baloo 2, Anek Devanagari, Modak), Universal Thirst (Devanagari, Tamil, Bengali with real design intent), Typotheque (multiscript families with Devanagari, Tamil, Bengali and Malayalam), Tiro Typeworks (Tiro Devanagari Hindi, Marathi and Sanskrit on Google Fonts, John Hudson and Fiona Ross), Google's Noto Sans and Noto Serif Devanagari as the fallback of last resort. Paired Latin and Devanagari in one family (Poppins, Anek, Mukta, Baloo, Hind) solves the matching problem at the cost of a Latin that is rarely distinguished; the stronger route for a luxury client is a chosen Latin plus a Devanagari matched by hand on headline height, stem weight and stroke contrast.

### 15.2 Arabic

- Direction and shaping: right to left; letters take isolated, initial, medial and final forms depending on neighbours, and the shaping engine (section 11.1) chooses them; a font without the joining logic shows disconnected letters, the most visible failure in Gulf work. No case; emphasis comes from weight, size and style.
- Structure: a connecting baseline; tall ascenders (alif, lam, the tooth letters kaf and tah); deep descending bowls (jeem, hah, ain, noon, the final forms of many letters); dots (nuqta) above and below that distinguish letters that share a skeleton; optional vowel marks (harakat) that display and children's copy sometimes carry and advertising omits.
- Styles: Naskh (the text style, rhythmically horizontal, right for body), Kufi (geometric and angular, the Gulf identity staple, right for logotypes and headlines), Thuluth and Diwani (calligraphic display, for heritage and hospitality brands, used once and large), Ruqah (informal, handwritten). Contemporary "Arabic sans" families draw a Kufi-rooted skeleton with grotesk proportions to pair with Latin grotesks.
- Kashida (tatweel, U+0640): the elongation of a connecting stroke. Classical justification stretches kashidas rather than word spaces; browsers today justify Arabic by widening word spaces, which reads as crude, and Internet Explorer's `text-justify: kashida` has no successor in shipping browsers as of October 2026 (an Intent to Prototype for `text-justify: kashida` and a `text-kashida-space` property was posted to Chromium's blink-dev list in August 2026; nothing has shipped). Set Arabic ragged (ranged right) on the web; justify only in InDesign, where the Adobe World-Ready Paragraph Composer handles kashida insertion and diacritic placement (Preferences, Advanced Type, and the composer setting in the paragraph style). The composer ships in every InDesign edition; the separate Middle East edition is no longer needed for Arabic.
- Numerals: Western digits (0 to 9) are standard in UAE government and commercial Arabic, including prices; Eastern Arabic-Indic digits (U+0660 to U+0669) are usual in Saudi, Egyptian and Levantine print. Confirm the client's convention per market; a Riyadh launch and a Dubai launch can carry different digits in the same campaign. Digits run left to right inside a right-to-left line, and the bidi algorithm handles that; brackets and guillemets mirror automatically when the font carries mirrored forms.
- Foundries and faces: 29LT (Pascal Zoghbi; 29LT Bukra, Zarid, Azer), TPTQ Arabic (Peter Biľak and Kristyan Sarkis; Arabic companions to Typotheque's Latin families), Boutros Fonts (the Boutros family's decades of Arabic matching), Monotype's Arabic programme (Nadine Chahine's Frutiger Arabic, Neue Helvetica Arabic, Zapfino Arabic), the Dubai Font (Monotype for the Dubai government, 2017, free), Google's Noto Naskh Arabic and Noto Kufi Arabic, IBM Plex Sans Arabic, Cairo, Tajawal, Almarai, Readex Pro, Baloo Bhaijaan 2 on Google Fonts. The Khatt Foundation (Huda Smitshuijzen AbiFarès) and its Typographic Matchmaking projects are the reference literature for pairing Arabic with Latin.
- Bilingual lockups: match the Latin cap height to the Arabic tooth height (the band of short letters, the Arabic x-height equivalent), match stem weight at the same size (the Arabic usually needs a lighter nominal weight to look equal because its strokes are horizontal and long), and align on the shared baseline, then centre optically because the Arabic's descending bowls pull its mass down. Never stretch or condense the Latin to equal the Arabic's length; let the two differ and align an edge. In a mirrored layout the Arabic ranges right and the Latin left with the mark between; stacked, the Arabic sits above for a Gulf client and below for an international one, decided once in the identity. Dubai's outdoor advertising rules require Arabic alongside English on signage; verify the current Dubai Municipality guidance before an OOH run.
- Leading 1.6 to 1.8 for Naskh, because the dots and marks occupy the zones Latin leaves empty; size up 5 to 10 percent beside Latin for equal apparent size.

### 15.3 Tamil and Bengali

- Tamil: no headline, rounded forms with open loops, no stacked conjuncts of the Devanagari kind (Tamil uses pulli, a dot, to kill the inherent vowel), wide letters, so the same sentence runs longer than its Hindi equivalent and needs a wider measure or a smaller size. Vertical demands are modest; leading 1.5 to 1.6. Faces: Mukta Malar and Baloo Thambi (Ek Type), Hind Madurai (ITF), Catamaran, Noto Sans Tamil, Universal Thirst and Typotheque for considered design.
- Bengali: a headline (matra) like Devanagari, heavier conjunct stacks and deeper descending forms, so the lower zone needs more room than Hindi; leading 1.7 to 1.8. Faces: Baloo Da 2 (Ek Type), Hind Siliguri (ITF), Tiro Bangla, Noto Sans Bengali, Universal Thirst for Kolkata and Dhaka work.

### 15.4 Urdu and Nastaliq

Urdu is written in Nastaliq, a hanging style in which each word descends diagonally from upper right to the baseline, with letters stacking rather than sitting side by side. A Nastaliq line therefore occupies twice the vertical space of a Naskh line at the same nominal size and words overlap vertically with the line above. Set line-height at 2.0 and up (start at 2.0 and test per face, since Nastaliq fonts differ widely in vertical extent), size up 20 to 30 percent beside Latin, never track, and expect slow shaping: a Nastaliq font carries thousands of contextual substitutions and renders measurably slower than Naskh. Faces: Noto Nastaliq Urdu (Google), Jameel Noori Nastaleeq (free, from Pakistan, ubiquitous in Urdu print), Mehr Nastaliq Web (the Centre for Language Engineering, Lahore), Alvi Nastaleeq. Where Nastaliq is unavailable or must be small, Urdu can be set in Naskh (Noto Naskh Arabic carries the Urdu letters); readers accept it for captions and reject it for headlines. Markets: Urdu reaches Hyderabad, Lucknow and Delhi audiences in India and the large South Asian population in Dubai and Sharjah, which makes it a live script for Gulf F&B and retail.

### 15.5 CSS for multiscript pages

- `<html lang="ar" dir="rtl">` sets both language and direction; `direction: rtl` in CSS alone is for components. The `dir` attribute applies `unicode-bidi: isolate`, so the element's text is a separate bidi run; `unicode-bidi: plaintext` lets a block take the direction of its first strong character (for user-generated content); `bidi-override` forces direction and is almost never right.
- Use logical properties (`margin-inline-start`, `padding-inline-end`, `text-align: start`, `inset-inline`) so that one stylesheet flips for Arabic and Urdu without a second file; the `:dir(rtl)` pseudo-class handles the exceptions. Mirror directional icons (back arrows, progress) and leave non-directional ones (a clock, a search glass) alone.
- Wrap names and figures of unknown direction in `<bdi>` so that an English name inside an Arabic sentence does not drag the punctuation.
- Per-script line-height through `:lang()` selectors: `:lang(hi), :lang(mr) { line-height: 1.7 } :lang(ar) { line-height: 1.7 } :lang(ur) { line-height: 2.1 }`.
- Font loading: one `@font-face` per script with `unicode-range` (section 12.2), the Latin first in the stack so that digits and brand names in an Arabic page come from the Latin face when the Arabic face's Latin is weak, or the reverse when the Arabic face's Latin was drawn to match.

| Script | Leading (body) | Size relative to Latin at equal apparent size | Tracking | Hierarchy tools |
|---|---|---|---|---|
| Latin | 1.4 to 1.6 | 100 percent | Display negative, body zero, caps positive | Size, weight, case, space |
| Devanagari | 1.6 to 1.8 | 110 to 115 percent | Zero | Size, weight, colour, space |
| Bengali | 1.7 to 1.8 | 110 to 115 percent | Zero | As Devanagari |
| Tamil | 1.5 to 1.6 | 105 to 110 percent; wider measure | Zero | As Devanagari |
| Arabic Naskh | 1.6 to 1.8 | 105 to 110 percent | Zero; kashida in InDesign only | Size, weight, style (Kufi for display) |
| Urdu Nastaliq | 2.0 to 2.2 | 120 to 130 percent | Never | Size, weight; Naskh for captions |

## 16. Licensing

A font is licensed software; the EULA (end-user licence agreement) says who may use it, where and how much. The agency that ignores this is one client audit from a bill. Verify every figure below on the foundry's site before quoting a client: licensing pages change yearly. The Dinamo, Grilli Type and Pangram Pangram lines were checked against the foundries' own pages in October 2026 and the Klim line against Klim's licence pages and blog posts of 2019 to 2022; the Commercial Type and Fontshare lines carry what the house last confirmed, because their licence texts could not be re-read for this file.

### 16.1 Licence types

| Licence | Measured by | Covers | Does not cover |
|---|---|---|---|
| Desktop | Users or computers (1, 3, 5, 10 seats) | Installing the font, print, PDFs, images, logos and static social posts; usually video rendered from the desktop application | Serving it to a browser, embedding in an app, server-side rendering |
| Web | Monthly pageviews across the licensee's domains, or a count of domains | `@font-face` on the named domains; often email marketing | A different company's site, including the agency's own showcase of the client's site |
| App | Number of apps, monthly active users, or downloads | Embedding in iOS, Android and desktop apps | Web views that load from a server (web licence) |
| ePub and digital publication | Titles or issues | Embedding in ePub, PDF magazines, interactive publications | |
| Broadcast and video | Productions, channels, or audience size | Titles and graphics on television and streaming; some foundries fold social video into desktop and charge broadcast only for TV | |
| Server and SaaS | Servers or documents generated | Automated document generation, personalisation engines, print-on-demand | |
| OEM and hardware | Units | Fonts shipped inside devices and software | |
| Logo and trademark | Sometimes a separate line or a clause | Using the font in a registered mark; some EULAs require a logo licence or forbid registration of a wordmark that is just the font | Modifying the font's own glyphs (section 16.5) |
| Trial and test | Time or purpose | Pitch and mock-up work internally; some permit showing a client, some forbid any external use | Any shipped deliverable |

### 16.2 Foundry patterns

- Klim Type Foundry: a separate agreement per format (desktop, web, app, advertising, broadcasting, OEM), one-off fees with no expiry. The October 2021 revision counts desktop by users rather than computers and enlarged the tiers; one web licence covers the sum of average monthly pageviews or unique users across the licensee's sites plus active subscribers and monthly web-advertising impressions; app terms were rewritten for purchases from 29 April 2019. The house reads the desktop licence as permitting logo creation; confirm the current wording before a client wordmark. The house has found no trial fonts on Klim's site; plan for a paid licence before a pitch in Söhne or Tiempos.
- Dinamo: the client owns the licence and the designer works under it (the "First Designer" clause); price depends only on company size, the total headcount of the client with parents, subsidiaries and affiliates, never on traffic, installs or agency size. Licences per medium: desktop and print (companies under 50 people receive a logo and wordmark licence free), logo and wordmark (one brand, any medium, outlining permitted), social media, web (one domain, WOFF2, no traffic limit), app or game, video. Publicly traded companies and those above 100 million euros of annual revenue must take an unlimited or enterprise licence. All licences are perpetual one-time fees; trial fonts carry the full character set and may be used to pitch directions to clients; Font Gauntlet tests the variable files.
- Grilli Type: desktop counted per computer within one organisation; web by the maximum number of unique monthly visitors; app by the number of developers; social media and broadcast content need no separate licence when the computers that make it hold desktop licences. All licences are one-time and perpetual ("All of our licensing is forever"). Trial fonts may be installed for mock-ups and website prototypes and shown to "your team, friends, or clients", but carry a minimal character set and no retail OpenType features, so test figures and language coverage on the retail file.
- Commercial Type: separate desktop, web (by monthly pageviews), app, broadcast and ePub licences, with large-scale uses quoted, and trial fonts for test setting, as last confirmed by the house; its licensing page could not be re-read in October 2026, so verify every term.
- Pangram Pangram: free to try for personal, non-commercial use (portfolios, school projects, personal social media, proofing), the reason the faces are everywhere in student work. Commercial licences per use: print by workstations, web by monthly pageviews, app by monthly active users, social media by combined followers, logo by the company's employee count (one logo licence per company logo), broadcast and video game on request. Term: a company licence lasts one year and must be renewed to keep using the fonts (longer terms at a discount); an individual or freelancer licence is indefinite. Budget a Pangram face as a recurring annual cost for any corporate client.
- Fontshare (Indian Type Foundry): free for personal and commercial use including logos, web and apps under the ITF Free Font License, according to the summaries the house has read; redistribution and modification of the font files are restricted. The primary text could not be re-read on fontshare.com for this file, so read the licence file shipped inside each download before promising a client a free identity face; the modification clause matters for subsetting (section 16.5).
- Google Fonts: almost all families under the SIL Open Font License 1.1 (26 February 2007): any use, embedding and bundling permitted, the font may not be sold by itself, a modified version may not use the Reserved Font Name without permission, and documents made with the font are unaffected. A few are Apache 2.0 (Roboto) or the Ubuntu Font Licence. Self-hosting OFL fonts is fully permitted; subsetting creates a derivative that must drop the Reserved Font Name if redistributed, which an internal web build does not do.
- Adobe Fonts: included with a Creative Cloud subscription; permits desktop use, print, logos, and web use through Adobe's web projects on domains tied to the account; font files may not be handed to clients or embedded in apps; use ends when the subscription ends. Right for internal decks and print where the house already pays; wrong for a client site the client must own.
- Monotype: enterprise agreements and the Monotype Fonts subscription for large brands; Helvetica, Frutiger, Gotham (via Hoefler&Co, acquired 2021) and the Arabic programme sit here.

### 16.3 Agency versus client ownership

The licence belongs to the named licensee and does not transfer. Rules the house follows:

1. The client buys the licence for their identity face in their own name, or the agency buys it as agent in the client's name with the invoice addressed to them. The agency's seats cover the agency's design work only.
2. The web licence sits on the client's domain and in the client's account; the agency's showcase of the work uses images, never the live font.
3. The scope of work line lists font licences as a pass-through cost with the foundry's price, the metric (seats, pageviews) and the renewal basis; a web licence by pageviews needs an upgrade path written in.
4. A font register per client: family, foundry, licence type, metric, invoice, date, EULA PDF. Audits from global brands and their procurement teams ask for it.
5. Handover delivers the outlined wordmark (vectors are documents, permitted under every EULA read by the house) and the register, never the font files, unless the licence is the client's own.
6. India and the UAE both protect font software under copyright (as a computer programme in India under the Copyright Act 1957 as amended; under the UAE's Federal Decree-Law 38 of 2021 on copyright); enforcement is rare locally, but the client's international licensors and partners enforce by contract.

### 16.4 Trial licences

Use trial fonts to set a pitch, test rendering and measure payload; convert before anything leaves the building if the trial forbids external use, and name the trial status on the pitch page where it permits it. Trial files often carry a reduced character set or a watermark, so never measure a trial's subset size as the production figure.

### 16.5 What counts as a derivative

- Modifying the font software (editing glyphs in Glyphs or FontLab and re-exporting, converting OTF to WOFF2 without a web licence, generating static instances from a variable file, subsetting) is a derivative work and prohibited by most commercial EULAs without written permission; OFL permits it with the name change rule.
- Converting text to outlines in Illustrator and reworking the vectors into a wordmark produces artwork, which every EULA the house has read permits; some foundries ask that the result not be used to recreate a font, and some charge a logo licence for a registered mark.
- Commissioning a custom cut or a modification from the foundry is the route for a luxury identity that needs a changed glyph; Klim, Dinamo, Commercial Type and Grilli Type all take custom work; prices are quoted per project, and exclusivity is a separate, expensive term to negotiate in writing.

## 17. Choosing and pairing

### 17.1 The decision procedure

Run it in this order; each step eliminates candidates, and the taste canon in design-taste, references/type.md, section 2 supplies the starting list.

1. Voice: three adjectives from the brand platform (see 18-brand-strategy-and-identity-design.md), translated into letterform terms. "Assured, quiet, precise" points to a grotesk with low contrast and closed apertures or a transitional serif; "heritage, warm, hand-made" points to a garalde or a humanist sans with translation modulation (section 1.5).
2. Era: which classification period (section 2.2) the brand's story belongs to, and whether the face should agree with it or cut against it (the design-taste tension rule).
3. Medium set: print only, web and app, video, OOH, packaging. A face without a text optical size is out for a product UI; a face without a sturdy caption cut is out for packaging legal copy.
4. Scripts: Devanagari, Arabic, Tamil, Bengali, Urdu beside Latin. Either the family carries them (section 15) or a matched companion exists; otherwise the face is out, whatever its beauty.
5. Weights and styles: at least a light-or-regular, a bold and a true italic; small caps, tabular and old-style figures, fractions, the rupee and dirham, case-sensitive forms (section 8 and 18).
6. Variable availability and file size against the budget of section 12.2.
7. Licensing: who is the licensee, which licences, at what metric, at what cost over three years; foundry trial available for the pitch.
8. Exclusivity: search Fonts In Use and the category's competitors; a face the main competitor owns is out, and a face that three luxury hotel groups use is tired.
9. Rendering: set the client's real headline, a price line, a date and a name with diacritics at 11px and 120px on a 1x Windows screen and on an iPhone.

### 17.2 Superfamilies and the one-family rule

A superfamily is one design idea cut across structures: sans, serif, mono, condensed, and in the best cases scripts (IBM Plex: Sans, Serif, Mono, Sans Arabic, Sans Devanagari, Sans Hebrew; Söhne with Söhne Breit, Schmal and Mono; Untitled Sans and Untitled Serif; ABC Diatype with Diatype Mono; Graphik with Graphik Arabic; Noto across everything, as a fallback). Reason to choose one: the shared skeleton guarantees agreement of proportion, so two voices (text and quote, Latin and Arabic) read as one brand. The house rule is one family per build; the second voice comes from an optical size, a width or a weight inside the family, which is the pairing design-taste calls the most expensive of all. Two families are right when the content has two authors (an editorial brand with a commissioned voice and a house voice), when a script companion is a different family by necessity, or when the identity's idea is the collision (a didone against a mono in a jewellery brand that sells engineering). Three is a defect.

### 17.3 Pairing mechanics

Pair by contrast of structure and agreement of proportion. Contrast: a monoline grotesk against a high-contrast serif, a geometric against a calligraphic, a wide against a narrow. Agreement: x-heights within about 5 percent of each other at the same size, cap heights within 5 percent, stem weights that look equal when the two sit on one line, similar apertures (both open or both closed), and the same modulation system (section 1.5) if either has contrast. Test by setting a line in each at 16px with a word of the other inside it; if one looks bigger, resize until equal and record the ratio as the pairing's size offset. Pairs that pass are listed in design-taste, references/type.md, section 3; this test is how new ones get added.

## 18. Reading a specimen and evaluating a foundry

### 18.1 What a specimen must show

A specimen is the foundry's own demonstration of a face. Read it for evidence, since every specimen is set at its most flattering size.

| Check | Where to look | Fail signal |
|---|---|---|
| Character set and languages | The glyph map or language list; count Latin-extended, Vietnamese, Cyrillic, Greek, and the scripts you need | "Latin" without a list; no language list at all |
| Figures | Lining, old-style, tabular, proportional; the rupee and dirham; currency and maths symbols | One figure style only; no tabular set |
| Small caps | Real `smcp` and `c2sc`; compare stem weight with the lowercase | Missing, or present only in some weights |
| Italics | True italic with changed construction (single-storey a, cursive e) versus a sloped roman | A sloped roman sold as italic in a serif |
| Optical sizes | Named cuts or an opsz range; look for a text sample at 9 to 12px | Display-only family offered for everything |
| Weights | Count and spacing of the range; a 300 and a 700 that work at 16px | Six weights that are five sizes of one drawing |
| OpenType features | The feature list: liga, dlig, calt, case, frac, ordn, ss01 onward, locl | No `case`; no `locl` in a family claiming many languages |
| Kerning | A line of difficult pairs: AV, Ta, Yo, f), r., 7, quotation marks around W | Gaps in the foundry's own setting |
| Variable file | Axes and ranges; named instances; `STAT` sanity | Weight axis only, named instances missing |
| Vertical metrics | Ascender and descender values; consistent across weights | Weights that sit on different baselines in a browser |
| Licensing | The metrics and prices on the page | Prices on request only |
| The foundry | Catalogue depth, revision history, who drew it, support channel | A one-face shop with no updates since release |

Designer credit matters beyond manners: a face by a named designer at a foundry with a revision history (Klim's changelogs, Commercial Type's version notes) will be fixed when a Devanagari conjunct breaks; a marketplace upload will not.

### 18.2 The 30-minute test

1. Minutes 0 to 5: drop the trial file into Wakamai Fondue; read the glyph count, axes, features, file size, vertical metrics.
2. 5 to 12: in Figma or a browser, set the client's real headline at 120px with -0.02em, a lede at 24px, body at 16px and 300 weight, a caption at 12px with +0.02em, and a table of prices with `tnum`. Screenshot.
3. 12 to 17: set the same on a 1x Windows machine; compare stems and counters at 16px and 12px.
4. 17 to 22: set a bilingual line (Latin plus the client's script) and a price in rupees and dirhams; check the rupee and dirham glyphs, the matched weights, the leading.
5. 22 to 27: set a paragraph with hyphenation and `text-wrap: pretty`; count the rag faults; set the ligatures and the quotation marks; check `case` on an all-caps label.
6. 27 to 30: read the EULA metrics and price the three-year cost for the client's seats, pageviews and app. Decide.

## 19. Tools

| Tool | Maker | What it is for | Notes, as of October 2026 |
|---|---|---|---|
| Glyphs | Georg Seifert, Rainer Erich Scheichelbauer | Type design and font production on macOS; the industry default for Latin and Indic design | Glyphs 4.0, stable release dated 27 July 2026 after a free public preview; launch notes list icon sets, stroked paths, inline variable preview and CFF2 export. Confirm details on glyphsapp.com |
| FontLab | Fontlab Ltd | Type design and production on macOS and Windows; the Windows option | FontLab 8 shipped in 2022; check fontlab.com for a later major version before buying |
| FontForge | Open source | Free font editor and format converter | Rough interface; right for inspection and conversion |
| RoboFont | Frederik Berlaen | Python-scriptable font editor used in production foundries | |
| Wakamai Fondue | Roel Nieskens | Drag a font into the browser and read its axes, features, glyph count, metrics, file size | First step of section 18.2 |
| Samsa | Laurence Penney | Variable font inspector with axis sliders and table views | |
| Font Gauntlet | Dinamo | Browser tester for variable fonts and animation | |
| fontTools and pyftsubset | Open source (Python) | Subsetting, instancing, inspection | Section 12.2 |
| glyphhanger | Zach Leatherman | Spider a site and subset to the characters used | |
| ttfautohint | FreeType project | Add hints to unhinted web fonts for Windows 1x | Section 11.2 |
| Capsize, Fontaine, Fallback Font Generator | Seek; Nuxt team; Brian Louis Ramirez | Metric-matched fallback declarations | Section 12.6 |
| Utopia | James Gilyead and Trys Mudford, Clearleft | Fluid type and space calculators from a minimum and maximum viewport, a base size and a ratio at each end | Section 7.2 |
| Typescale | typescale.com | Modular scale preview in the browser | Section 7.1 |
| Fontjoy | Jack Qiao | Machine-generated pairing suggestions | A source of candidates to test with section 17.3, never a decision |
| Fonts In Use | Nick Sherman, Stephen Coles, Sam Berlow | Archive of real-world uses by face, industry and format | Exclusivity check in section 17.1 |
| Modern Font Stacks | Dan Klammer | System stacks by classification | Section 12.8 |
| Figma type panel | Figma | Variable axes, OpenType features under Details, Vertical trim, text styles bound to Variables | Vertical trim equals `text-box: trim-both cap alphabetic` (section 5.4) |
| InDesign styles | Adobe | Paragraph and character styles, nested styles, GREP styles, Keep Options, Justification and Hyphenation dialogs, Balance Ragged Lines, Optical Margin Alignment (Story panel), World-Ready Paragraph Composer for Indic and Arabic | GREP styles the house keeps: `\d+` to a tabular-figures character style; `(?<=\s)\S+\s\S+$` to a no-break style to kill runts; `\b[A-Z]{2,}\b` to a tracked small-caps style; `[₹$€£]\d` to the figure style |
| After Effects Character panel | Adobe | Kerning, tracking, Tsume, text animators | Section 13.1 |

## 20. Reference table of recommended values

House values, as of October 2026, with the sections that give the reasons. Sizes in px unless marked pt. Tracking in em. Leading as a ratio. Measure in characters per line.

| Context | Size | Leading | Tracking | Measure | Weight | Figures and features | Section |
|---|---|---|---|---|---|---|---|
| Body, web | 16 to 18 | 1.5 to 1.6 | 0 | 55 to 70 (max-width 65ch) | 300 at 16px and up, 400 below | onum pnum in prose, liga on, hyphens auto | 5, 6, 7.3 |
| Body, print | 9 to 10.5pt | 1.3 to 1.5 (1.5 to 1.7 for luxury) | 0 | 55 to 70 | Regular; one step lighter on uncoated | onum, smcp for abbreviations | 14 |
| Lede and standfirst | 20 to 28 | 1.35 to 1.45 | 0 to -0.005 | 60 to 75 | 300 or 400 | | 7.3 |
| Caption | 12 to 14 web; 6.5 to 8pt print | 1.35 to 1.45 | +0.01 to +0.02 | 35 to 50 | 400 | lnum tnum for product codes | 4.3, 14.2 |
| Display, web | 56 to 160 | 0.95 to 1.05 | -0.02 to -0.04 | 3 to 8 words a line | 700 (house) | case for caps, dlig once if the face earns it, text-wrap balance | 4.3, 5.1, 7 |
| Display, print | 36 to 200pt | 0.9 to 1.0 | -0.02 to -0.04 | 3 to 6 words | Display cut | Hand kerning on every line | 3, 14 |
| UI label and micro caps | 11 to 13 | 1.3 to 1.4 | +0.08 to +0.14 in caps; +0.01 in lowercase | Short | 400 (house micro caps) | case, smcp or uppercase; never below 11px | 4.3, 11.5 |
| Button | 14 to 16 | 1.0 with text-box trim | 0 (lowercase) or +0.06 (caps) | One to three words | 500 (the only medium use) | Sentence case preferred | 5.4, 7.4 |
| Table and price list | 14 to 16 | 1.4 | 0 | | 400; 500 for totals | tnum lnum mandatory; minus sign U+2212; figure space for alignment | 8.5, 8.8 |
| Deck, 1920 by 1080 | Body 24 to 28; headings 48 to 96; caption 18 | 1.3 body, 1.0 to 1.1 headings | Display -0.02 | 45 to 60 | House 300 body, 700 heads | Tabular figures in every chart | 7 |
| Email | 16 to 18 | 1.5 | 0 | 50 to 65 | 400 | System stack with brand face first | 12.8 |
| Video title, 16:9 at 1080p | 72 and up | 0.95 to 1.05 | -0.02 | 3 to 6 words | 500 and up | Hold 1.5s plus 0.3s per word over three | 13.3, 13.4 |
| Video caption and lower third, 1080p | Name 36 to 44; subtitle 40px cap height | 1.1 to 1.2 | 0 | 42 characters per line, 2 lines | 400 and up | 20 characters per second ceiling | 13.3, 13.4 |
| Vertical social, 1080 by 1920 | Captions 48 and up; headline 96 to 160 | 1.0 to 1.1 | -0.01 | 4 to 6 words a line | 500 and up | Inside the platform safe zone | 13.2 |
| OOH poster and hoarding | Cap height about 25mm per 3m of viewing distance for comfortable reading, about 25mm per 7.5m at the limit (signage rule of thumb; test on site) | 0.9 to 1.0 | -0.02 to -0.03 | 3 to 7 words total | 500 and up | No hairlines; one message | 13.3, 20-print-packaging-ooh-and-physical-production.md |
| Devanagari body | 110 to 115 percent of the Latin size | 1.6 to 1.8 | 0 | 50 to 65 | Match the Latin stem weight by eye; nominal weights differ | locl for Marathi | 15.1 |
| Arabic body | 105 to 110 percent of the Latin size | 1.6 to 1.8 | 0 | 50 to 65 | One nominal weight lighter than the Latin, judged by eye | Western or Eastern digits per market; ragged on web | 15.2 |
| Urdu Nastaliq body | 120 to 130 percent | 2.0 to 2.2 | Never | 40 to 55 | Regular and bold only | Naskh for captions | 15.4 |

## Terms introduced

- Action safe: the centred 93 percent rectangle of a video frame (SMPTE ST 2046-1) inside which action must stay.
- Antialiasing (greyscale, subpixel): shading edge pixels by coverage; subpixel uses the RGB stripes for triple horizontal resolution.
- Aperture: the opening of a partly closed counter (c, e, a, s).
- Apex and vertex: the top and bottom points where two diagonals meet.
- Arm and leg: a horizontal or rising stroke attached at one end; a falling diagonal attached at one end.
- Ascender and descender: the parts of lowercase letters above x-height and below the baseline.
- Axis (stress): the angle of the thinnest points of a round letter; oblique in humanist faces, vertical in didones.
- Axis (variable font): a named dimension of a variable font's design space (wght, wdth, opsz, slnt, ital, GRAD).
- Ball, teardrop, beak, flag, finial, sheared terminal: shapes of a stroke's end that carries no serif.
- Baseline: the line on which letters without descenders sit.
- Baseline (web platform status): the cross-browser label on MDN and web.dev; Newly available once every core browser ships a feature, Widely available 30 months later, Limited availability before that.
- Baseline grid: fixed horizontal lines at the body leading to which baselines snap.
- Bidi (bidirectional algorithm): the Unicode rules that order mixed left-to-right and right-to-left text; controlled in CSS by `direction` and `unicode-bidi`.
- Blue zones: alignment zones in PostScript hinting where overshoots are suppressed at small sizes.
- Bowl, counter, eye: a closed curved stroke; the white it encloses; the counter of e.
- Bracketed and unbracketed serif: a serif joined to the stem by a curve, or meeting it at an angle.
- Cap height: the height of flat-topped capitals.
- Case-sensitive forms (`case`): punctuation and figures raised to centre on capitals.
- ch unit: the advance width of the digit 0 in the current font; used for measure.
- Class kerning: kerning stored by groups of similar shapes rather than by individual pairs.
- Conjunct, half form, halant (virama): a fused consonant cluster in Indic scripts; a consonant without its stem; the mark that kills the inherent vowel.
- Contrast (stroke): the ratio of thickest to thinnest stroke in a face.
- Crossbar, crotch, joint, spur: a horizontal joining stroke; the inside angle of two strokes; where strokes meet; a small projection.
- Derivative (font): a modified copy of the font software; permitted by OFL with a name change, prohibited by most commercial EULAs.
- Didot point: 0.376mm, the older European point; the PostScript point is 0.3528mm.
- Dynamic Type: Apple's per-style text scaling controlled by the user.
- Ear, link, loop: parts of the binocular g.
- EULA: end-user licence agreement, the contract that governs a font's use.
- Figures (lining, old-style, tabular, proportional): cap-height uniform digits; x-height digits with extenders; equal-width digits; digits with individual widths.
- Fitting and sidebearings: the designer's spacing of a face through the white on each side of every glyph.
- FOIT, FOUT, FOFT: flash of invisible, unstyled, or faux text while a web font loads.
- font-display: the `@font-face` descriptor setting the block and swap periods during loading.
- Font Loading API: the JavaScript interface (`document.fonts`) for loading and observing fonts.
- Fluid type: sizes interpolated between viewport widths with `clamp()`.
- Grade (GRAD): a variable axis that changes stroke weight without changing advance widths.
- GSUB and GPOS: the OpenType substitution and positioning tables that carry features and kerning.
- Half-leading: the CSS model that splits line-height minus content height above and below the text.
- Hanging punctuation and optical margin alignment: pushing marks into the margin so the text edge looks straight.
- HarfBuzz: the open-source shaping engine inside Chrome, Firefox and Android.
- Hinting: font instructions that fit outlines to the pixel grid at small sizes.
- H&J: hyphenation and justification settings (word space, letter space, glyph scaling limits).
- Hyphenation zone: the band at the right margin within which ragged text may hyphenate.
- Ink spread (tone value increase, dot gain): the thickening of printed strokes as ink wicks into paper.
- Ink trap: a notch at a junction that ink spread fills rather than clogging.
- Kashida (tatweel): the elongation stroke in Arabic used for justification and emphasis.
- Kerning (metric, optical): pair spacing from the font's tables; pair spacing computed from shapes.
- Kufi, Naskh, Nastaliq, Thuluth, Diwani, Ruqah: Arabic-script styles, from geometric display to hanging Urdu text.
- Leading: baseline-to-baseline distance, as a ratio or in points.
- Ligature (standard, discretionary, contextual, historical): glyphs that replace letter sequences, by default, by choice, by context, or for antiquarian setting.
- Localised forms (`locl`): language-specific glyph shapes switched by the language tag.
- Matra: a vowel sign in Devanagari and related scripts, placed above, below or beside the consonant.
- Measure: line length in characters.
- Modular scale: a size sequence built by a fixed ratio.
- Modulation (translation, expansion): how stroke thickness varies, by broad-nib angle or by pointed-pen pressure.
- Named instance: a stored axis position with a style name inside a variable font.
- Nukta: the subscript dot in Devanagari and Urdu-derived letters.
- Optical compensation: adjustments (overshoot, thinning at joins, raised centres) that make equal-measuring shapes look equal.
- Optical size and opsz: a cut drawn for a size range; the variable axis that carries it.
- Orphan, widow, runt: a first line stranded at a column foot; a last line stranded at a column head; a last line of one word.
- Overshoot: the extension of rounds and points past the guide lines.
- Point and pica: 1/72 inch; 12 points.
- Preload and preconnect: early fetch of a named resource; early connection to a host.
- Prime: the mark for feet, inches, minutes and seconds (U+2032, U+2033).
- Rag: the shape of the uneven edge of ranged text.
- Reserved Font Name: a name an OFL font's author protects from use by modified versions.
- Reversed (knocked-out) type: light type printed by leaving paper unprinted inside a solid.
- River: a channel of white running down justified text.
- Safe zone (social): the bands of a vertical video frame covered by the platform's interface.
- Scrim: a gradient darkening placed behind type over footage.
- Serif types (hairline, slab, wedge, flared or glyphic): the family of serif constructions.
- Shaping: converting codepoints into positioned glyphs, including joining and reordering.
- Shirorekha: the Devanagari headline from which letters hang.
- Shoulder, spine, stem, tail: the arch leaving a stem; the curve of S; the main stroke; a descending finishing stroke.
- size-adjust, ascent-override, descent-override, line-gap-override: `@font-face` descriptors that fit a fallback's metrics to the web font's.
- Small caps (real, faux, petite): drawn capitals at about x-height; scaled capitals; capitals at exactly x-height.
- sp and dp: Android scale-independent and density-independent pixels; sp follows the user's font scale.
- Specimen: a foundry's demonstration document for a face.
- STAT, fvar, gvar, avar: OpenType tables for style attributes, axes and instances, outline deltas, axis mapping.
- Stylistic set and character variant (`ss01`, `cv01`): named alternate glyph groups and single-glyph alternates.
- Subsetting and unicode-range: removing unused glyphs; declaring which codepoints a font file covers.
- Superfamily: one design cut across sans, serif, mono, widths and scripts.
- Swash: a flourished alternate form.
- System font stack: a `font-family` list that resolves to each platform's own interface face.
- text-box-trim and text-box-edge: CSS that removes half-leading and internal space above cap height and below baseline.
- text-wrap balance and pretty: browser line breaking that equalises short blocks and improves paragraph rags.
- Title safe: the centred 90 percent rectangle of a video frame (SMPTE ST 2046-1) inside which text must stay.
- Tracking: uniform added or removed space across a run (`letter-spacing`).
- Trial font: a foundry file licensed for testing and pitching only.
- Tsume: proportional reduction of each glyph's sidebearings in Adobe applications.
- UPM (units per em): the grid a font's em is divided into, 1000 or 2048.
- Variable font: one OpenType file carrying a design space of axes between masters.
- Vox-ATypI: the 1954 classification adopted by ATypI in 1962 and de-adopted in 2021.
- WOFF2: the W3C web font container using Brotli compression.
- World-Ready Paragraph Composer: InDesign's composer for Arabic, Hebrew and Indic text.
- X-height: the height of the lowercase x.

## Sources and further reading

Books
- Robert Bringhurst, The Elements of Typographic Style, 1992; 4th edition 2012.
- Gerrit Noordzij, The Stroke: Theory of Writing, 1985; English edition 2005.
- Karen Cheng, Designing Type, 2005; 2nd edition 2020.
- Jost Hochuli, Detail in Typography, 1987; English edition 2008.
- Erik Spiekermann, Stop Stealing Sheep and Find Out How Type Works, 1993; 3rd edition 2014.
- Fiona Ross, The Printed Bengali Character and Its Evolution, 1999.
- Huda Smitshuijzen AbiFarès, Arabic Typography: A Comprehensive Sourcebook, 2001.
- Tim Ahrens and Shoko Mugikura, Size-specific Adjustments to Type Designs, 2014.
- Richard Rutter, Web Typography, 2017.

Specifications and standards
- OpenType specification 1.9, Microsoft, https://learn.microsoft.com/typography/opentype/spec/
- WOFF File Format 2.0, W3C Recommendation, 8 August 2024 edition (first Recommendation 1 March 2018), https://www.w3.org/TR/WOFF2/
- CSS Fonts Module Level 4, W3C, https://www.w3.org/TR/css-fonts-4/
- CSS Inline Layout Module Level 3 (text-box-trim, text-box-edge), W3C, https://www.w3.org/TR/css-inline-3/
- CSS Text Module Level 4 (text-wrap, hyphenate-limit-chars, hanging-punctuation, text-justify), W3C, https://www.w3.org/TR/css-text-4/
- SMPTE ST 2046-1:2009, Safe Area and Safe Title Area Test Pattern for Television Systems, https://pub.smpte.org/doc/st2046-1/
- ISO 12647-2:2013, Process control for the production of half-tone colour separations, proof and production prints, Part 2: Offset lithographic processes.
- SIL Open Font License 1.1, 26 February 2007, https://openfontlicense.org/open-font-license-official-text/
- Unicode 18.0 (UAE DIRHAM SIGN U+20C3), Unicode Consortium, https://www.unicode.org/versions/Unicode18.0.0/; Central Bank of the UAE, Dirham currency symbol guideline (English), https://www.centralbank.ae/media/jlhi41xu/dirham_currency_symbol_guideline_english.pdf; UAE Design System, Currency symbol, https://designsystem.gov.ae/docs/patterns/currency-symbol
- WCAG 2.2, W3C Recommendation, 2023, https://www.w3.org/TR/WCAG22/
- Apple Human Interface Guidelines, Typography, https://developer.apple.com/design/human-interface-guidelines/typography
- Material Design 3, Typography, https://m3.material.io/styles/typography/overview
- Netflix Timed Text Style Guide: General Requirements and English Timed Text Style Guide, https://partnerhelp.netflixstudios.com/
- Meta, Instagram Reels ad specifications, https://www.facebook.com/business/ads-guide/update/video/instagram-reels
- Landgericht München I, judgment of 20 January 2022, 3 O 17493/20 (Google Fonts and the GDPR).

Articles, documentation and talks
- Tim Brown, "More Meaningful Typography", A List Apart, 2011, https://alistapart.com/article/more-meaningful-typography/
- James Gilyead and Trys Mudford, Utopia, https://utopia.fyi/
- Chrome for Developers, "CSS text-box-trim", https://developer.chrome.com/blog/css-text-box-trim
- web.dev, "New to the web platform in August 2026", https://web.dev/blog/web-platform-08-2026
- web.dev, "CSS size-adjust for @font-face", https://web.dev/articles/css-size-adjust
- MDN Web Docs, text-wrap, hyphenate-limit-chars, hanging-punctuation, text-justify, size-adjust, ascent-override, font-width, font-feature-settings, https://developer.mozilla.org/en-US/docs/Web/CSS/; Firefox 154 release notes for developers, https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/154
- HTTP Archive, Web Almanac 2024, Fonts chapter, https://almanac.httparchive.org/en/2024/fonts
- Aasawari Kulkarni, "Devanagari Typography 101: A guide for typesetting with Latin", Alphabettes, 2026, https://www.alphabettes.org/devanagari-typography-101-a-guide-for-typesetting-with-latin/
- Klim Type Foundry, "Changes to App Font licensing & pricing", 2019, https://klim.co.nz/blog/klim-type-foundry-end-user-licence-agreements/, and "Changes to Klim EULAs and our new pricing", 2021, https://klim.co.nz/blog/changes-to-eulas-new-pricing/
- Foundry licensing pages: Dinamo, Licensing Terms, https://abcdinamo.com/licenses; Grilli Type, Information, https://www.grillitype.com/information; Pangram Pangram, FAQ, https://pangrampangram.com/pages/faq
- Helmut Januschka, "Intent to Prototype: CSS kashida justification", Chromium blink-dev, August 2026, https://groups.google.com/a/chromium.org/g/blink-dev/c/WtV5cKOvhhc
- Roel Nieskens, Wakamai Fondue, https://wakamaifondue.com/
- Zach Leatherman, glyphhanger and "A Comprehensive Guide to Font Loading Strategies", https://www.zachleat.com/web/comprehensive-webfonts/
- Dan Klammer, Modern Font Stacks, https://modernfontstacks.com/
- Fonts In Use, https://fontsinuse.com/; Google Fonts Knowledge, https://fonts.google.com/knowledge
- Wikipedia, Vox-ATypI classification; Emirati dirham sign; Indian rupee sign; Glyphs (font editor) (for the dates cited in sections 2, 8 and 19).
