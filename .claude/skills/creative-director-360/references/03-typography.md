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

How this file relates to the taste layer: design-taste, references/type.md says which faces are current, which pairings are expensive, and the house settings (Space Grotesk, 300 body, 700 display, tight display tracking, wide micro caps). This file says why those settings work at the level of letterform, metric and rendering engine, and what to do when the brief leaves the house face: a client identity, a bilingual campaign, a print run, a broadcast title.

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
| Wedge | Triangular serif tapering from stem | FF Meta Serif (Spiekermann, Olsen, Sørensen, 2007), many contemporary text faces | Sharp, modern, reads crisply on screen |
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

Classification is a vocabulary for briefing, not a law. The four systems below are the ones a creative director meets in foundry sites, briefs and critiques.

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
| Graphic (Manuaires) | Drawn letters, brush or pen, not meant to join | Banco (Excoffon, 1951); Cooper Black (Oswald Cooper, 1922) |
| Blackletter (Fractures) | Broken strokes, gothic | Textura of the Gutenberg Bible (1455); Fette Fraktur (1850) |
| Gaelic (added 2010) | Irish uncial-derived letterforms | Duibhlinn, Gadelica (Michael Everson) |

### 2.2 Bringhurst's historical classification

Robert Bringhurst, The Elements of Typographic Style (1992; 4th edition 2012), classes faces by the period whose art they share, reading axis, aperture, contrast and modulation together. It is more useful than Vox for talking about tone.

| Period | Hallmarks | Faces |
|---|---|---|
| Renaissance (15th to 16th c.) | Humanist axis, moderate contrast, moderate aperture, translation modulation | Jenson, Bembo, Garamond, Palatino's models |
| Mannerist (16th to 17th c.) | Renaissance structure with exaggeration, longer extenders, more flourish | Granjon's italics, Galliard (Carter, 1978) |
| Baroque (17th c.) | Variable axis, greater contrast, the roman and italic drawn to work together | Janson (Kis, 1680s), Caslon |
| Rococo (18th c.) | Decorative detail, calligraphic flourish | Fournier's ornaments, Baskerville's italic |
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
| Grotesk | 19th-century sans revived: irregular, warm, some contrast | Akzidenz-Grotesk (1898); Founders Grotesk (Klim, 2010); Neue Haas Grotesk (Christian Schwartz for Linotype, 2010 restoration); Söhne (Klim, 2019); GT America (Grilli Type, 2016) |
| Neo-grotesk | Rationalised, even, closed apertures | Helvetica (1957); Suisse Int'l (Swiss Typefaces, 2011); Neue Montreal (Pangram Pangram, 2018); Inter (Rasmus Andersson, 2017) |
| Geometric | Circles and lines | Futura (1927); Circular (Laurenz Brunner, Lineto, 2013); GT Walsheim (Grilli Type, 2010); Satoshi (Indian Type Foundry via Fontshare, 2021) |
| Humanist sans | Pen-derived, open apertures, true italics | Frutiger (1976); Gill Sans (1928); Untitled Sans (Klim, 2017); Source Sans (Paul D. Hunt, Adobe, 2012) |
| Neo-humanist | Humanist structure with large x-height and screen-era sturdiness | FF Meta (Erik Spiekermann, 1991); Fira Sans (Carrois, 2013); Hanken Grotesk, Figtree (Google Fonts, 2020s) |
| Expressive serif | High-contrast or sharp serif with a point of view, built for display | Canela (Miguel Reyes, Commercial Type, 2016); GT Alpina (Grilli Type, 2020); Editorial New (Pangram Pangram, 2019); Reckless (Displaay, 2018); Ogg (Lucas Sharp, 2013) |
| Transitional serif | Text serif with vertical-ish axis and sturdy serifs for long reading | Times New Roman (1932); Tiempos Text (Klim, 2010); Signifier (Klim, 2020); Freight Text (Joshua Darden, 2005) |
| Didone | Vertical, hairline, fashion and luxury voice | Didot (1780s); HTF Didot (1991); Noe Display (Schick Toikka, 2013); Bodoni Moda (Google Fonts, 2020) |
| Slab | Rectangular serifs | Clarendon (1845); Rockwell (1934); Sentinel (2009); Roboto Slab (Christian Robertson, 2013) |
| Mono | Fixed advance width | Courier (Howard Kettler, 1955); GT Pressura Mono (Grilli Type, 2012); JetBrains Mono (2020); Departure Mono (Helena Zhang, pixel mono; house pixel voice) |
| Display | Drawn for one size and one job, from condensed to wide | Druk (Berton Hasebe, Commercial Type, 2013); Bebas Neue (Ryoichi Tsunekawa, 2010); Clash Display (Fontshare, 2021); Unbounded (Google Fonts, 2022) |

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

Why tracked lowercase fails: lowercase relies on word shape (the silhouette of ascenders and descenders) and on the counter rhythm; adding space between letters makes every counter as wide as the space, so the word dissolves into a row of symbols. Frederic Goudy's line, "anyone who would letterspace lower case would steal sheep", is quoted in Bringhurst for this reason. Loosening lowercase is defensible only at micro sizes for rendering, and then by 1 percent at most.

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

A baseline grid is a set of horizontal lines at a fixed interval to which every baseline snaps, so that lines in adjacent columns align and the page has one rhythm. In InDesign: Preferences, Grids, Baseline Grid, Increment Every (set to body leading, for example 13pt), then Align to Baseline Grid in the paragraph style; headings get a leading that is a multiple of the grid (26pt) or are allowed to float with Align to Grid: First Line Only. On the web there is no native baseline grid; the approximation is to make every line-height and every vertical spacing token a multiple of one unit (4px or 8px) so that blocks return to rhythm, and to use text-box-trim (5.4) to remove the half-leading that otherwise breaks it.

### 5.4 Cap-height trimming: text-box-trim and text-box-edge

The CSS Inline Layout Module Level 3 defines `text-box-edge` (which font metric defines the top and bottom edge of the text box: `cap`, `ex`, `text`, `alphabetic`) and `text-box-trim` (`trim-start`, `trim-end`, `trim-both`, `none`), with the shorthand `text-box`. Written as `text-box: trim-both cap alphabetic;` the half-leading and the internal ascent above the cap height are removed, so a heading's cap tops sit on the top of its box and its baseline on the bottom. The feature was called leading-trim in earlier drafts. Support as of October 2026: Chrome 133 and Edge 133 (early 2025), Safari 18.2, Firefox 154 (August 2026); with Firefox it became Baseline Newly available. Figma's equivalent is the Vertical trim setting in the type panel. Reason to use it: it makes the spacing you measure in Figma the spacing the browser renders, so 24px above a heading is 24px to the cap, in every font.

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

CSS: `hyphens: auto` requires a `lang` attribute on the element or document (the dictionary is chosen by language). `hyphenate-limit-chars: 7 3 3` sets minimum word length, minimum before, minimum after; the initial value `auto` lets the browser choose, and the specified fallback defaults are 5, 2, 2. MDN marks `hyphenate-limit-chars` as limited availability (Chromium supports it; Firefox and Safari did not as of the MDN table read for this file; verify). `hyphenate-limit-lines` (consecutive hyphens) is only in Safari with the -webkit- prefix.

### 6.4 Rivers, widows, orphans, runts

- River: a channel of white running down a justified paragraph where word spaces align across lines. Cured by hyphenation, by narrowing the word-space maximum, or by a soft rewrite.
- Widow: the last line of a paragraph stranded at the top of a column or page. Orphan: the first line of a paragraph stranded at the bottom. (Usage varies; Bringhurst uses these senses.) InDesign Keep Options, Keep Lines Together, 2 at start and 2 at end; CSS `orphans: 2; widows: 2` apply in paged and multi-column contexts.
- Runt: a last line consisting of a single word or part of a word. Fix by rewriting, by tracking the paragraph by 1 or 2 units (text only, and only once per page), or by `text-wrap: pretty` (6.5). On a headline, a runt is a rewrite.

### 6.5 text-wrap: balance and pretty

- `text-wrap: balance` makes the browser equalise line lengths in a short block, for headings and standfirsts. Chromium limits it to blocks of 6 lines or fewer, Firefox to 10. Support: Chrome 114 (partial) and 130 (full), Edge likewise, Firefox 121, Safari 17.5. Reason to use: a two-line headline with a runt on the second line is the most common heading defect on the web and balance removes it with no copy change.
- `text-wrap: pretty` runs a slower, paragraph-aware line breaker for body copy. Chromium shipped it in Chrome 117 (2023) and optimises only the last four lines of a paragraph, to prevent runts. WebKit shipped it in Safari 26.0 (2025) and improves every line of the element: it avoids short last lines, improves the rag, reduces hyphenation and avoids typographic rivers. Firefox had not shipped `pretty` as of the sources read for this file. Set `text-wrap: pretty` on body text and `balance` on headings; the cost is layout time, which is why Chromium limits its scope.
- `text-wrap: stable` keeps earlier lines fixed while a contenteditable block is edited. `avoid-orphans` is in the specification and in no browser.

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

Utopia (James Gilyead and Trys Mudford, Clearleft; utopia.fyi) generates these from a minimum and maximum viewport, base size and ratio; its worked example for a 360px to 1240px range with 18px to 20px bases produces `clamp(1.125rem, 1.0739rem + 0.2273vw, 1.25rem)`. Rules: always clamp both ends (an unclamped vw size grows without limit on a 5K display and shrinks below legibility on a phone); keep the rem term in the middle so that user zoom still works (a pure vw expression ignores browser zoom, an accessibility failure, see 11-accessibility.md); let display sizes be fluid and body sizes nearly fixed (16px to 18px).

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
- Colour: body in ink, secondary text in grey at a contrast of at least 4.5:1 (section 11.6), one accent word only as the house italic flame gesture. A coloured heading beside a black body does not create hierarchy, it creates two voices.
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

Numbers in India: the lakh and crore system groups digits as 1,00,000 and 1,00,00,000; set with the same comma glyph, no thin spaces. The rupee sign ₹ (U+20B9; design by D. Udaya Kumar, adopted 15 July 2010, encoded in Unicode 6.0 in October 2010) sits before the number with no space: ₹1,25,000. The UAE dirham: the Central Bank of the UAE unveiled a new dirham symbol on 27 March 2025 (a D crossed by two horizontal lines, drawn from the flag); it was encoded as U+20C3, UAE DIRHAM SIGN, in Unicode 18.0, released in September 2026. Until fonts and keyboards catch up, the ISO code AED after a space (AED 4,500) is the safe form; the Central Bank's usage guide places the symbol before the numeral and says it should not be combined with "AED" or "Dh". Check that any face used for Gulf pricing carries U+20C3 (section 18); as of October 2026 most do not.

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
