# Layout, grids and composition

How space is organised on the page, screen, poster, slide, frame and post: grid anatomy and construction, classical and Swiss methods, proportion, the operational principles of composition, spacing, responsive layout, and format-by-format practice with exact values. As of October 2026.

## Contents

1. [Grid anatomy](#1-grid-anatomy)
2. [Grid types and worked grids for seven formats](#2-grid-types-and-worked-grids-for-seven-formats)
3. [The Swiss method: building the grid from the type](#3-the-swiss-method-building-the-grid-from-the-type)
4. [Classical page construction](#4-classical-page-construction)
5. [Proportion systems: the evidence and the myths](#5-proportion-systems-the-evidence-and-the-myths)
6. [Principles of composition, operationally defined](#6-principles-of-composition-operationally-defined)
7. [Optical adjustments](#7-optical-adjustments)
8. [Spacing systems](#8-spacing-systems)
9. [Responsive and adaptive layout](#9-responsive-and-adaptive-layout)
10. [UI layout patterns](#10-ui-layout-patterns)
11. [Composition in photography and film](#11-composition-in-photography-and-film)
12. [Editorial layout](#12-editorial-layout)
13. [Posters and out-of-home](#13-posters-and-out-of-home)
14. [Slides and decks](#14-slides-and-decks)
15. [Social posts, stories and thumbnails](#15-social-posts-stories-and-thumbnails)
16. [Bilingual, right-to-left and multiscript layout](#16-bilingual-right-to-left-and-multiscript-layout)
17. [Breaking the grid](#17-breaking-the-grid)
18. [Layout process and tools](#18-layout-process-and-tools)
19. [Layout QA checklist](#19-layout-qa-checklist)
20. [Reference table: grids by format](#20-reference-table-grids-by-format)
- [Terms introduced](#terms-introduced)
- [Sources and further reading](#sources-and-further-reading)

How this file relates to the rest: design-taste, SKILL.md, sections 2 and 5 ("Composition") state the taste rule (a grid you can feel, broken once; margins generous; align to an edge) and section 7 fixes the house layer. This file is the craft beneath it: how a grid is built, measured and broken, and why each value holds. Type sizes and leading live in 03-typography.md (sections 5 to 7); perception and Gestalt in 02-perception-and-psychology.md; platform pixel specs in 26-platform-and-format-specs-2026.md (sections 2, 4, 7 and 11); cinematography and shot sizes in 14-video-preproduction-and-cinematography.md; print, packaging and out-of-home (OOH) production in 20-print-packaging-ooh-and-physical-production.md; component-level UI layout in 06-ui-design-craft.md; tokens in 07-design-systems-and-tokens.md, section 6.11.

## 1. Grid anatomy

A grid is a set of invisible lines that fixes where things may start, stop and align, so that hundreds of decisions are made once. Its value is consistency across pages (a reader learns the system on page 2 and stops noticing it by page 5), speed (a team of five lays out 200 pages in the same voice), and the possibility of a meaningful break (section 17), which exists only against an order.

### 1.1 The parts

Three terms recur through the file. Measure is the length of a line of text, counted in characters. Leading is the vertical distance from one baseline to the next. An em is a distance equal to the type size (12 pt type, 12 pt em).

| Part | Definition | Typical print value | Typical screen value | Why it exists |
|---|---|---|---|---|
| Format | The outer boundary: trimmed page, viewport, frame or canvas, and its proportion | A4 210 x 297 mm (1:1.414) | 1440 x 900 viewport; 1080 x 1350 post | Every other value is a fraction of it |
| Margin | The space between the format edge and the live area | 12 to 25 mm on A4; luxury 20 to 35 mm | 16 to 24 px phone; 40 to 120 px desktop | Frames the content, holds thumbs, absorbs trim and crop error, signals price |
| Live area (type area, Satzspiegel) | The region inside the margins where content sits | About 60 to 75 percent of the page area | Content container, for example 1200 px max | The field the grid divides |
| Column | A vertical division of the live area | 2 to 12 per page | 4 (phone), 8 (tablet), 12 (desktop) | Sets measure and image widths |
| Gutter (alley) | The space between columns | One line of leading (12 to 14 pt, about 4 to 5 mm) | 16 to 32 px | Separates columns so they read as separate; too narrow and lines jump across |
| Row | A horizontal division of the live area | 4 to 8 per page | Rarely fixed on scrolling screens; fixed on slides and posts | Creates modules and vertical alignment |
| Module (field) | The cell formed where a column crosses a row | 6 x 6 = 36 on a modular A4 | 12 x 6 = 72 on a slide | The unit of image and text block size |
| Spatial zone | A group of modules assigned one role | Image zone, text zone, caption zone | Hero zone, content zone, rail | Gives the reader a map of where each kind of content lives |
| Flowline (hang line) | A horizontal line that breaks the page into bands; elements hang from it | One or two per page, often at one third of the height | The line under which every section heading starts | Gives a strong horizontal across a spread so unequal columns still read as one page |
| Marker | A fixed position for recurring elements | Folio, running head, section tab | Logo, breadcrumb, page index | Lets a reader find their place without thinking |
| Baseline grid | Horizontal lines at the body leading interval to which baselines snap | 12 or 13 pt for 9 or 10 pt body | 4 or 8 px unit; body line-height 24 px | Lines across columns align; the page has one vertical rhythm |
| Bleed | Image area extending past the trim | 3 mm (India, UAE, Europe); 0.125 in (US) | None; on screen the equivalent is full-bleed to the viewport edge | Trim is never exact; bleed hides the error |
| Safe area | The inner zone free of trim risk or UI overlay | 3 to 5 mm inside the trim | Platform safe zones (section 15) | Text and marks survive the cut and the overlay |

### 1.2 Relationships that make a grid work

- Gutter tied to leading. Müller-Brockmann sets the horizontal gutter equal to one line of leading (or a simple multiple), so the vertical and horizontal spaces between fields are the same and the page has one interval. A 9/12 pt body gives a 12 pt (4.23 mm) gutter. On screen, a 16/24 px body gives a 24 px gutter.
- Row gap equals one empty line. A row of modules ends on a baseline and the next starts one line lower, so text running from one field into the next keeps its rhythm (section 3.2).
- Margins larger than gutters. The margin must read as the outer frame and the gutter as an internal pause. A margin under twice the gutter makes the page look like a crop of a larger page. Luxury work runs margins at 3 to 6 times the gutter.
- Column count from content. The number of columns comes from the smallest unit the content needs (a caption, a product tile, a data column), multiplied up to the largest (a full measure of body copy). Twelve is common on screen because it divides by 2, 3, 4 and 6; six is common in print for the same reason at a smaller scale.
- Unequal margins are deliberate. Bottom margin largest, top smaller, inside margin smallest on a bound spread (because the two inside margins combine across the gutter), outside larger for the thumb. Section 4 gives the classical ratios.

## 2. Grid types and worked grids for seven formats

### 2.1 The seven types

| Type | Structure | Use when | Avoid when | Reference work |
|---|---|---|---|---|
| Manuscript (block) | One column in a margin frame | Continuous reading: books, essays, long-form articles, legal and policy pages, a single-column brand story page | The page must carry many unrelated items | Every trade book; Medium's article column |
| Column | 2 to 12 vertical columns, rows free | Magazines, newspapers, most websites, brochures | Content is a catalogue of equal items needing vertical alignment too | The Gentlewoman's text pages; The New York Times |
| Modular | Columns and rows forming equal modules | Catalogues, product grids, timetables, data dashboards, social carousels, slide decks, signage systems | Long continuous text dominates | Otl Aicher's publications for the 1972 Munich Olympics; Massimo Vignelli and Bob Noorda's New York subway sign system (Unimark, Graphic Standards Manual, 1970) |
| Hierarchical | Regions sized and placed by importance, with alignments shared but no repeating module | Home pages, posters, packaging fronts, a single complex page | A multi-page publication needs consistency | Newspaper front pages; most landing pages |
| Compound | Two or more grids overlaid on one live area | A publication with two rhythms (a 3-column text and a 4-column image system on one 12-unit base) | The team cannot hold the system; compound grids collapse in junior hands | Karl Gerstner's grid for Capital magazine (section 3.4) |
| Pixel | Alignment to whole device pixels and a 4 or 8 px unit | Every screen layout, icons, UI components | Never avoid; it is the floor under every other screen grid | Material Design's 4 dp and 8 dp grids (dp: density-independent pixel, section 8.1); Apple's point grid |
| Baseline | Horizontal lines at the body leading | Multi-column print; any page where text in adjacent columns sits side by side | Single-column web text, where it costs more than it returns | Swiss magazines; Emigre |

Timothy Samara, Making and Breaking the Grid (2002; second edition 2017), gives the four-way division manuscript, column, modular and hierarchical; compound, pixel and baseline are layers that combine with any of the four.

### 2.2 Choosing the type

1. Count the content types (body, image, caption, data, pull quote) and their smallest sizes.
2. Decide the reading mode: continuous (manuscript), scanning (column), comparing (modular), arriving (hierarchical).
3. Fix the body type size and leading first (03-typography.md, sections 5 and 6), then derive the grid from them (section 3). A grid drawn before the type is chosen is a guess.
4. Draw the grid at 100 percent scale, print or view it at actual size, place the worst-case page (longest headline, ugliest image, most captions) before the best.

### 2.3 Worked grids for seven formats

All values below are worked arithmetic; the full reference table is section 20.

A4 portrait, editorial modular (210 x 297 mm, 595.28 x 841.89 pt). Body 9/12 pt.
- Columns: 6 of 72 pt (25.4 mm) with 12 pt (4.23 mm) gutters; live area width 492 pt (173.6 mm).
- Rows: 59 lines of 12 pt (708 pt, 249.8 mm), divided into 6 fields of 9 lines (108 pt, 38.1 mm) with 5 one-line gaps. 36 modules.
- Margins: inside 45 pt (15.9 mm), outside 58.3 pt (20.6 mm), top 51 pt (18.0 mm), bottom 82.9 pt (29.2 mm).
- Use: body text over 3 columns (a measure of 240 pt, 84.7 mm, about 55 characters at 9 pt in a book face), captions over 1, images over 2, 3, 4 or 6. A two-column page and a three-column page share one system.

US Letter, report (8.5 x 11 in, 612 x 792 pt). Body 10/12 pt.
- Columns: 6 of 74 pt with 12 pt gutters; live area 504 pt (7 in).
- Rows: 55 lines of 12 pt (660 pt) as 4 fields of 13 lines (156 pt) with 3 one-line gaps.
- Margins: left and right 54 pt (0.75 in), top 54 pt, bottom 78 pt.
- Use: US clients and investor documents; the extra bottom margin carries the folio and footnotes.

1440 desktop, luxury editorial (1440 CSS px viewport).
- Columns: 12 of 78 px with 24 px gutters; content 1200 px; margins 120 px each side.
- Alternative product layout: 12 of 84 px with 32 px gutters, content 1360 px, margins 40 px (the container of the "wide" breakpoint at 1440 in 26-platform-and-format-specs-2026.md, section 4.8; section 9.3).
- Rows: none fixed; vertical rhythm on an 8 px unit with body 18/28 or 20/32 px.
- Use: the 120 px margin is 8.3 percent of the width, the margin that reads as considered at a desk distance; the 1360 container is for dashboards and commerce grids that need density.

390 mobile (iPhone 16e and 17e CSS width; 402 on iPhone 17 and 17 Pro, 440 on Pro Max, per 26-platform-and-format-specs-2026.md, section 4.7).
- Columns: 4 fluid columns (`1fr` each; fr is one share of the free space in a grid's tracks) with 16 px gutters and 20 px margins: 75.5 px per column at 390, 78.5 px at 402, 68 px at 360.
- Rows: none fixed; 4 px baseline unit, 8 px spacing unit; body 16/24 or 17/26 px.
- Use: one content column across all 4 for text; 2 columns of 2 for product tiles; 1 + 3 for thumbnail and text rows. Fractional pixel columns are correct in a fluid grid; the browser distributes the remainder.

1920 x 1080 slide (16:9).
- Margins 120 px on all sides (6.25 percent of the width), consistent with the house deck sizes in 26-platform-and-format-specs-2026.md, section 7.3.
- Columns: 12 of 118 px with 24 px gutters (live area 1680 px).
- Rows: 6 of 120 px with 24 px gaps (live area 840 px). 72 modules of 118 x 120 px, effectively square.
- Use: title across 8 to 12 columns in row 1; one image across 6 or full bleed; a single statistic across 4 by 3 modules.

1080 x 1080 square post.
- Margins 72 px (6.7 percent). Live area 936 x 936.
- Columns and rows: 6 x 6 modules of 136 px with 24 px gutters.
- Instagram's profile grid shows a 3:4 tile (26-platform-and-format-specs-2026.md, section 2.1), which crops a square to its centre 810 x 1080: 135 px lost each side. Keep type inside columns 2 to 5 (x 232 to 848) if the post must read in the grid.

1080 x 1350 portrait post (4:5).
- Side margins 72 px; top and bottom 127 px.
- Columns: 6 of 136 px with 24 px gutters. Rows: 7 of 136 px with 24 px gaps (1096 px). 42 modules, the same module as the square post, so a 1:1 and a 4:5 set from one campaign share one system.
- The 3:4 grid tile crops this format to its centre 1012.5 x 1350: about 34 px lost each side, so the 72 px margin still leaves 38 px of visible margin in the grid.

The one-module system. The 136 px module with 24 px gutters (160 px pitch) also fits the 1080 x 1920 story inside Meta's safe zone (section 15.2), so square, portrait and story assets from one campaign can share exact positions for the mark and the line. Building one module across formats is the cheapest consistency a campaign can buy.

## 3. The Swiss method: building the grid from the type

### 3.1 The tradition

The International Typographic Style grew in Zurich and Basel from the 1950s. Its journal, Neue Grafik (1958 to 1965), was edited by Josef Müller-Brockmann, Richard Paul Lohse, Hans Neuburg and Carlo Vivarelli. The four texts that matter:

- Josef Müller-Brockmann, Grid Systems in Graphic Design (Niggli, 1981). The construction manual: type area, fields, the relation of image to text line. Its lesson: the grid is derived from the body text, so that every image edge aligns with a line of type.
- Karl Gerstner, Designing Programmes (Niggli, 1964). The grid as a programme: a set of rules that generates many correct solutions to a family of problems. Gerstner's line that the grid is a "proportional regulator" sits in the same book. His working tool is the morphological box, taken from the astrophysicist Fritz Zwicky's morphological analysis: a problem's parameters in rows, their options in columns, and a design as one path through the box. This is how a programme generates layouts and marks, and it is the ancestor of the design system (07-design-systems-and-tokens.md, section 3; 27-how-the-best-designers-think.md, section 7.8; dynamic identities in 18-brand-strategy-and-identity-design.md, section 4).
- Emil Ruder, Typographie (Niggli, 1967). Ruder taught at the Basel Allgemeine Gewerbeschule; his book treats white space as an active form equal to the printed form (the counter-form), and rhythm, contrast and the unprinted area as the material of typography.
- Armin Hofmann, Graphic Design Manual: Principles and Practice (Niggli, 1965). Point, line and plane exercises; contrast of size, value and direction; the Basel poster. The discipline of reducing a problem to a few elements before composing.

The Dutch line made the grid visible. Wim Crouwel's "Vormgevers" poster for the Stedelijk Museum (1968) prints its own grid and builds the letters from its squares; Total Design, which he co-founded in 1963, used the grid as the expressive element. Use this line when the system itself is the brand idea (01-history-and-movements.md, sections 4.1 and 5.5).

### 3.2 Construction, step by step

1. Fix the body type and leading. Example: 9/12 pt (9 pt type on 12 pt leading).
2. Fix the format and approximate margins (section 4 for the ratios).
3. Count the lines that fit in the live area height at the leading: 708 pt / 12 pt = 59 lines on the A4 in section 2.3.
4. Choose the number of fields per column (rows). Each field holds n lines; fields are separated by one empty line. Total lines = rows x n + (rows - 1). For 6 rows: 6n + 5 = 59, so n = 9. If the arithmetic does not close, adjust the bottom margin and keep the leading, because the leading was chosen for reading.
5. Choose columns. The gutter equals one line of leading (12 pt). Column width = (live width - gutters) / columns.
6. Define field edges by type: the top of a field aligns with the cap height of the first line of text in it; the bottom aligns with the baseline of the last line. An image placed in a field therefore sits flush with the cap tops of the adjacent text and ends on its last baseline. This is the detail that makes a Swiss page look locked.
7. Test with the worst content, then adjust once. Müller-Brockmann's examples run from 8 to 32 fields per page; more fields give more freedom and less visible order.

Screen translation: body 16/24 px gives a 24 px row unit and a 24 px gutter; fields of 5 lines are 120 px with 24 px gaps. On the web the cap-top and baseline alignment needs `text-box-trim` (03-typography.md, section 5.4), so that a heading's box starts at its cap height. It became Baseline newly available on 18 August 2026, when Firefox 154 shipped it (Baseline: the WebDX Community Group status for a feature that works in the current Chrome, Edge, Firefox and Safari; "widely available" follows 30 months later; web-features data, read October 2026).

### 3.3 Module and field

Field is Müller-Brockmann's word for the cell; module is the more general term. The field is a unit of text quantity (n lines), which is why a Swiss grid can be checked by counting lines. The module is a unit of area, which is why a modular web or social grid can be checked by measuring pixels. In practice:
- Images occupy whole fields; a field and a third breaks the alignment the grid exists for.
- Text may run through fields, since the gap is exactly one line.
- Captions sit in a single field or hang from the flowline beneath an image, set one size smaller, either on the body leading (the simplest case) or cross-aligned (below).
- Display sizes take leading in whole multiples of the base line and space above and below in whole lines: on a 12 pt base, 18/24, 30/36 and 42/48 pt. In InDesign, Align to Baseline Grid with Only Align First Line to Grid keeps a multi-line heading on its own leading while its first line snaps.
- Cross-alignment (also called incremental leading): a caption leading that meets the body grid after a whole number of lines. A 9 pt caption leading against 12 pt body meets every 36 pt, four caption lines to three body lines, so the two grids coincide at every third body line. Most real baseline grids fail at the headings and captions, which is why the arithmetic is written into the grid spec.
- On screen, the `lh` and `rlh` units (one line-height of the element, and of the root element) express spacing in lines, for example `margin-block: 1rlh`, so spacing follows the body line-height when the type scale changes. Both are Baseline since November 2023 and widely available since May 2026 (web-features data, October 2026).

### 3.4 Gerstner's Capital grid

Gerstner's grid for the German business magazine Capital (1962) divides the live area into 58 units. With gutters of 2 units it yields whole-unit columns for 1, 2, 3, 4, 5 and 6 columns: 58; 28 + 2 + 28; three of 18; four of 13; five of 10; six of 8. One base, six column systems, all aligned. It is the clearest demonstration that a compound grid is arithmetic: choose a unit count where (units - gutter x (columns - 1)) divides by the column count for every count you need. The screen descendant is the 12-column grid with fixed gutters (2, 3, 4 and 6 columns from one base), and the 24-column grid where 5 columns are not needed.

## 4. Classical page construction

### 4.1 The canon of page construction

The manuscripts and incunabula (books printed in Europe before 1501) of the 13th to 16th centuries used page and text-area proportions that 20th-century scholars reconstructed with three equivalent methods.

- Van de Graaf canon. J. A. van de Graaf's 1946 reconstruction: draw the diagonals of the spread and of each page, and construct a text block whose corners sit on those diagonals, with its height equal to the page width. On a 2:3 page the result divides the page into ninths: inner margin 1/9 of the page width, top 1/9 of the height, outer 2/9 of the width, bottom 2/9 of the height. The text block is 2/3 of the page in each dimension and has the page's own 2:3 proportion.
- Villard diagram. A construction from the portfolio of Villard de Honnecourt (about 1230) that divides a line into any number of equal parts with no measurement, using diagonals and a vertical. Tschichold named it the Villard figure and showed it produces the same ninths.
- Raúl Rosarivo. The Argentine typographer's Divina proporción tipográfica (1947) showed that Gutenberg's page can be reconstructed by dividing the page into a 9 x 9 grid, inner and top margins one unit, outer and bottom two units.
- Jan Tschichold. In the essays collected as The Form of the Book (German 1975; English, Hartley and Marks, 1991), especially "Non-arbitrary proportions of page and type area", Tschichold showed the three methods agree and called the 2:3 page with a 2:3 text area in ninths the golden canon (a name for the canon, with no use of the golden ratio). He also showed the method works with twelfths for a larger text area.

### 4.2 The 2:3:4:6 margin progression

On a 2:3 page, the margins in ninths are inner W/9, top 1.5W/9, outer 2W/9, bottom 3W/9, a ratio of 2:3:4:6. The reasons the progression holds up:
- Inner smallest because the two inner margins of a spread combine into one central channel, so 2 + 2 = 4 equals the outer margin and the spread reads as one block in a frame.
- Bottom largest because the optical centre sits above the geometric centre (section 7.1); a text block with equal top and bottom margins looks as if it is sliding down the page.
- Outer larger than inner for the thumbs and for the eye's sense of the block sitting in from the edge.

Worked: a 150 x 225 mm book page (2:3). Inner 16.7 mm, top 25 mm, outer 33.3 mm, bottom 50 mm; text block 100 x 150 mm. Applied to A4 in ninths: inner 23.3, top 33.0, outer 46.7, bottom 66.0 mm, text block 140 x 198 mm, a luxury monograph proportion. In twelfths: inner 17.5, top 24.8, outer 35.0, bottom 49.5 mm, text block 157.5 x 222.8 mm, a brochure proportion.

### 4.3 Page proportions

| Proportion | Ratio | Formats | Character |
|---|---|---|---|
| 1:1.414 (root 2) | 1.414 | ISO 216 A series (A4, A5, A3) | Halving keeps the proportion, so a spread of A5 is A4; the default for India and the UAE |
| 2:3 | 1.5 | Classical book, 6 x 9 in trade paperback, 35 mm still frame | The canon's page; calm, tall |
| 1:1.618 (golden) | 1.618 | Some art books | Taller and narrower than 2:3; elegant and expensive in paper use |
| 3:4 | 1.333 | Instagram grid tile, many art monographs, iPad | Squatter; good for image-led books |
| 1:1.294 | 1.294 | US Letter | Wider than A4; US clients only |
| 4:5 | 1.25 | 8 x 10 in photographic print, Instagram portrait post | Near square; portrait photography |
| 1:1 | 1.0 | Album covers, square posts, catalogues | Static; needs internal asymmetry |

Robert Bringhurst, The Elements of Typographic Style (1992; version 4.0, 2012), chapter 8, catalogues page proportions with their musical intervals and is the reference for choosing among them.

### 4.4 Book and editorial measure

- Single-column book text: 45 to 75 characters, 66 the classic target (Bringhurst). Below 45 the eye returns too often; above 75 it loses the next line.
- Multi-column editorial text: 35 to 50 characters, because narrow columns are read in short sweeps and justified narrow columns need hyphenation (03-typography.md, section 6.3).
- Captions: 25 to 45 characters per line.
- Web body: `max-width: 65ch` (ch is the advance width of the 0 glyph in the current font, so it scales with the face) with 60 to 75 characters in practice (21-web-design-and-digital-craft.md, section 3.4).
- Measure fixes the column width, which fixes the grid. Choose the measure first and let the column count follow: an A4 page at 9 pt with a 55-character measure fits two text columns, which is why the 6-column A4 grid above runs text over three units.

## 5. Proportion systems: the evidence and the myths

### 5.1 The systems

- Golden ratio (phi, about 1.618): the ratio in which a line divided into a long and short part has the whole to the long part equal to the long to the short. Construction: bisect a square side, swing the diagonal of the half square down to the base.
- Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144; the ratio of successive terms converges on phi (89/55 = 1.618). Integer Fibonacci steps make convenient spacing and type scales (8, 13, 21, 34, 55 px), which is their only real advantage over phi.
- Root rectangles: rectangles whose long side is the square root of an integer times the short side: root 2 (1.414), root 3 (1.732), root 4 (2.0), root 5 (2.236). Each is constructed from the diagonal of the previous one. A root-n rectangle divides into n smaller rectangles of the same proportion, which is why ISO 216 paper (root 2) halves into itself.
- Rule of thirds: dividing the frame into a 3 x 3 grid and placing the subject on a line or intersection. First named by John Thomas Smith, Remarks on Rural Scenery (1797), as a rule for painted landscape.
- Dynamic symmetry: Jay Hambidge's system (Dynamic Symmetry: The Greek Vase, 1920; The Elements of Dynamic Symmetry, 1926) that composes in root rectangles and the whirling-square (golden) rectangle using the diagonal and the reciprocal (the line from a corner perpendicular to the diagonal). Its lasting use is the armature: the diagonals and reciprocals of the frame as the lines along which strong elements sit. Painters including George Bellows studied it; cinematographers and photographers still teach it.
- Le Corbusier's Modulor (Le Modulor, 1948; Modulor 2, 1955; English editions 1954 and 1958): two scales from a 183 cm man. The red series descends from 183 by phi (296, 183, 113, 70, 43, 27, 16.5, 10 cm), the blue series from the 226 cm raised hand (366, 226, 140, 86, 53, 33, 20 cm). Built into the Unité d'habitation in Marseille (1952). Its value for a designer is the idea of a scale of permitted sizes tied to the human body, which is what a spacing scale is.
- Massimo Vignelli, The Vignelli Canon (Lars Müller, 2010; first released as a free PDF): proportion as discipline. A few sizes, a few typefaces, standard paper sizes, scale contrast between elements, and the grid as the invisible structure. Vignelli's practice shows proportion working as a limit on choice.

### 5.2 What the evidence says

- Gustav Fechner (Vorschule der Ästhetik, 1876) reported a preference for rectangles near the golden ratio. Later replications are mixed: I. C. McManus (1980) found a weak, variable preference across individuals; Christopher Green's review "All that glitters" (Perception, 1995) concluded the golden section effect is fragile and depends on method. I. C. McManus, R. Cook and A. Hunt ("Beyond the golden section and normative aesthetics: why do individuals differ so much in their aesthetic preferences for rectangles?", Psychology of Aesthetics, Creativity, and the Arts, 2010) found large, stable individual differences in rectangle preference and no population preference for the golden ratio, which supports the house position in 5.3: consistency of a ratio matters more than which ratio.
- George Markowsky, "Misconceptions about the golden ratio" (The College Mathematics Journal, 1992), showed that the common claims (Parthenon, Great Pyramid, Mona Lisa, the United Nations Secretariat, human body proportions) rest on choosing the measurements that fit. Clement Falbo (The College Mathematics Journal, 2005) showed nautilus shells are logarithmic spirals whose growth does not match the golden spiral. Keith Devlin's MAA column "The myth that will not go away" (2007) summarises.
- The 2008 Arnell Group document for the Pepsi identity, with its golden-ratio and "gravitational pull" diagrams, is the industry's standing example of proportion used as post-rationalisation.
- Rule of thirds: Benjamin Tatler's eye-tracking work ("The central fixation bias in scene viewing", Journal of Vision, 2007) shows viewers fixate the centre of a frame first whatever the content. A centred subject is seen immediately; an off-centre subject makes the eye travel, which reads as movement and tension. Each placement does a specific job (section 11.6).

### 5.3 The house position

The positions: proponents of intrinsic proportion (Hambidge; Kimberly Elam, Geometry of Design, 2001; György Doczi, The Power of Limits, 1981) hold that certain ratios are beautiful in themselves. Sceptics (Markowsky, Falbo, Green, Devlin) hold that the evidence does not support a special ratio and that any consistent ratio will do. The house follows the sceptics on cause and the proponents on method: a proportion system is valuable because it repeats one relationship across the work, which the eye reads as order, and because it limits choices. In practice:
- Print: use root 2, since the A-series page already is one; derive the live area from ninths or twelfths (section 4.2).
- Screen: use simple integer ratios (1:1, 2:3, 3:4, 4:5, 16:9) for image frames, since cameras and platforms produce them, and a modular type scale (03-typography.md, section 7.1).
- Never present a golden spiral overlay to a client as justification. Present the system and the reason.

## 6. Principles of composition, operationally defined

Each principle below is given as a test that can be run on a layout, with the numbers that make it pass. Perception mechanisms (Gestalt grouping, figure and ground, attention, eye movement) are in 02-perception-and-psychology.md, sections 3 and 5; this section applies them.

### 6.1 Hierarchy

Hierarchy is the order in which a viewer reads the elements, set by the designer. Test: the squint test (blur the layout to about 10 percent sharpness, or view it at 25 percent scale) should leave exactly one element visible first, a second group next, and the rest as texture.
- Levels: three per view is the working maximum (primary, secondary, tertiary); a fourth is allowed only for metadata (folios, legal). Five or more levels read as noise.
- Separation between adjacent levels: at least 1.25 times in size, or a change of two weight steps (300 to 500, 400 to 700), or a change of colour value of at least 40 points of lightness. One variable changed strongly is clearer than three changed weakly.
- Order of tools, cheapest first: position (top left in left-to-right scripts), space around, size, weight, colour. Space and position cost nothing and preserve calm, which is why design-taste, SKILL.md, section 5 says hierarchy from weight and space before size.
- Entry points: Mario García and Pegie Stark's eye-tracking study for the Poynter Institute (Eyes on the News, 1991) reported that readers entered newspaper pages most often through the dominant photograph or artwork, then the headline. Plan two or three entry points per spread, and write captions as a second headline layer, because the caption sits beside the first entry point.
- Predicted attention: Neurons Predict and Attention Insight draw heatmaps from saliency models trained on eye-tracking data. Use them to compare variants before media spend (does the first fixation land on the product and the mark?). They model bottom-up saliency and say nothing about comprehension or intent (02-perception-and-psychology.md, section 2.3), so treat them as a second squint test and never as proof.

### 6.2 Contrast and scale ratios

Contrast is a measurable difference between two elements in one variable. Scale is size relative to the format and to the other elements.

| Size ratio between two elements | Reads as | Use |
|---|---|---|
| Under 1.15 | The same, or a mistake | Never for hierarchy; this is the "almost" that reads as an error |
| 1.2 to 1.5 | Related levels | Body to standfirst (section 12.4), H3 to H2 in dense UI |
| 2 to 3 | Clear hierarchy | Headline to body in corporate and product work |
| 4 to 8 | Drama | Editorial openers, posters |
| 10 to 15 and above | Monumentality | Luxury headlines against small captions (160 px against 11 px is 14.5 times; design-taste, SKILL.md, section 2) |

The rule behind the table: the eye detects size differences proportionally (Weber's law: the smallest noticeable difference is a roughly constant fraction of the magnitude; 02-perception-and-psychology.md, section 8.12), so a fixed pixel difference means less as sizes grow. The medium ratios (1.5 to 2) are where most cheap layouts live, because every element is a little bigger than the next and nothing dominates.

Scale relative to format: an element filling more than about 60 percent of a frame's width stops being an object in the space and becomes the space (a wall of type, a face filling the frame). Paula Scher's Public Theater posters (from 1994) and Jacquemus's oversized product scaling both work at that threshold.

### 6.3 Proportion

Proportion is the relation of parts to each other and to the whole: column to margin, image to text, headline to page. Test: name the ratio. If the ratio between margin and gutter, or image area and text area, cannot be stated as a simple number, it was not designed. House defaults: margin at 3 to 6 times the gutter; image to text area 70 to 30 (design-taste, SKILL.md, section 7).

### 6.4 Balance

Balance is the state in which the visual weights on either side of an axis feel resolved.
- Symmetric (formal): mirror weight about a central axis. Reads as stable, ceremonial, authoritative: invitations, jewellery hero shots, hotel identities, Kubrick frames (section 11.5). Risk: static.
- Asymmetric (informal): unequal elements balanced by position, like a lever: a large element near the axis against a small element far from it. Reads as modern, active. The Swiss default (Tschichold, Die neue Typographie, 1928, argued for asymmetry as the expression of modern function).
- Radial: elements around a centre point. Rosettes, dials, watch faces, mandalas, event floor plans. Strong focal point, weak reading order.
- Crystallographic (all-over): equal emphasis everywhere, no focal point. Patterns, textile prints, Pollock, image walls. Use it for texture and backgrounds; a page that must be read needs a focal point. The four-way terminology is from Lauer and Pentak, Design Basics.

### 6.5 Visual weight

Visual weight is the apparent pull of an element on the eye and on the balance of the page. Rudolf Arnheim (Art and Visual Perception, 1954; revised 1974) gives the factors. What adds weight:
- Size: larger is heavier.
- Value: darker against light ground is heavier (lighter against dark ground, in a dark layout).
- Saturation: saturated colour outweighs grey of the same value; warm hues (red, orange) outweigh cool at equal saturation.
- Complexity and texture: detailed, textured or irregular elements outweigh plain ones of the same size.
- Isolation: an element alone in space is heavier than the same element in a group (the moon in an empty sky).
- Position: higher in the frame is heavier than lower (Arnheim); further from the centre is heavier (the lever); the right side is often read as heavier in left-to-right cultures (Arnheim's discussion, with reading direction as one explanation).
- Intrinsic interest: faces, eyes, text and the human figure outweigh objects of the same size, because the eye goes to them first.
- Depth: elements that appear further back carry more weight in a perspective scene (Arnheim).

Practical consequence: a small saturated, isolated, textured element can balance a large grey one. The flame accent in the house layer (design-taste, SKILL.md, section 7) works because one small saturated element carries the weight of a whole headline.

### 6.6 Rhythm and repetition

Rhythm is the pattern of intervals between repeated elements. Types: regular (equal intervals; grids of products), alternating (A B A B; image and text spreads), progressive (intervals or sizes that grow or shrink; a scroll narrative that accelerates), flowing (organic, irregular; collage). Test: on a multi-page piece, lay the thumbnails side by side; the sequence should show a beat with variations, and no two consecutive spreads the same unless the sameness is the point. Working values: alternate dense and open every 2 to 3 spreads (12.5); a full-bleed image or a single statement every 3 to 5 slides (14.6); a typographic post every third or sixth profile tile (15.4). Bruce Block treats rhythm as one of the basic visual components and plans its contrast across a sequence (section 11.7).

### 6.7 Alignment

Alignment is the positioning of elements so their edges or centres share a line.
- Edge alignment (flush left, flush right, top, baseline): the strongest, because an edge is a line the eye can follow. Default for text and for most layout.
- Centre alignment: weaker, because centres are invisible; the eye has to compute them. Use for one short display moment, symmetric compositions, and ceremonial pieces (design-taste, SKILL.md, section 5).
- Optical alignment: placement adjusted so the edges look aligned, compensating for round shapes, punctuation and sidebearings (section 7).
- Test: count the distinct left edges on a page. Every edge should belong to the grid. More than four or five unique left edges on a single page or screen usually means some are accidental.

### 6.8 Proximity

Proximity is the grouping of elements by distance: things close together are read as related (Gestalt law of proximity, 02-perception-and-psychology.md, section 3.1).
- Rule: internal spacing less than external spacing. The space inside a group (label to field, heading to its paragraph, image to its caption) must be clearly smaller than the space between groups. Working ratio: at least 1:2, and 1:3 for clear separation.
- Headings: space above a heading at least twice the space below it, so the heading belongs to what follows. A heading floating equidistant between two paragraphs belongs to neither.
- Captions: 4 to 8 px (1 to 2 mm in print) from the image they describe, and at least three times that from anything else.

### 6.9 White space

White space (negative space) is the unoccupied area, of whatever colour.
- Passive white space: what is left over (margins nobody chose, gaps between unrelated elements). It reads as emptiness or as a mistake.
- Active white space: space shaped on purpose to group, isolate, direct the eye or signal value. Jan V. White's Editing by Design (1974) treats white space as an editorial tool to be allocated like copy; Ruder (section 3.1) treated the unprinted area as form.
- Margin width as a price signal (design-taste, SKILL.md, section 2: space is money). House working values: luxury print margins at 12 to 18 percent of the page width per side; corporate at 6 to 10 percent. On a 1440 screen the 120 px luxury margin is 8.3 percent per side plus generous section spacing (128 to 240 px between sections).
- Test: if any region of white space cannot be explained by a grouping, isolation or framing purpose, it is passive and should be removed or enlarged until it becomes a decision.

### 6.10 Tension

Tension is the visual energy created by near-collisions, imbalances, unexpected scale or crops that pull against the grid. Intended tension is a choice (design-taste, SKILL.md, section 1, item 5); accidental tension is a defect.
- Tangents: two edges that just touch (an image edge kissing a headline, a horizon running exactly through a head) create unwanted tension because the eye cannot tell whether they are meant to meet. Fix: overlap clearly or separate by at least one gutter.
- Edge pressure: an element placed within a few millimetres of the trim or frame edge, without bleeding, creates tension. Bleed it or bring it inside the margin.
- Productive tension: one deliberate collision per view (a headline overlapping an image edge by a full column, a figure cropped at the frame edge, a giant word cut by the trim).

### 6.11 Focal point and emphasis

The focal point is where the eye lands first. One per view. Test: the focal element should beat the second element by at least 2 times in a weight factor (size, contrast, isolation). Two equal focal points split attention and both lose. Emphasis is relative: raising everything raises nothing.

### 6.12 Direction and flow

Direction is the path the eye takes through a layout.
- Reading gravity in left-to-right scripts: entry top left, exit bottom right. The Gutenberg diagram, a newspaper heuristic usually attributed to Edmund Arnold, maps a primary optical area at top left and a terminal area at bottom right for evenly distributed text pages. It has little eye-tracking support (02-perception-and-psychology.md, section 5.2): use it to place a sign-off or call to action, and never to justify a layout.
- Z pattern: for sparse pages (posters, hero sections), the eye moves across the top, diagonally down, and across the bottom.
- F pattern and layer-cake: for dense text on the web, Nielsen Norman Group's eye-tracking (Jakob Nielsen, 2006; Kara Pernice, 2017) found users read the first lines fully, then scan down the left edge. The F is a symptom of weak structure. The target is the layer-cake pattern, in which the reader fixates headings and reads the body only under a relevant one (Kara Pernice, Nielsen Norman Group, 2019; 02-perception-and-psychology.md, section 5.1): write subheads that carry the content, with front-loaded first words.
- Directional cues: a face's gaze, a pointing limb, a leading line, a vector in type all move the eye along them. A model looking out of the page leads the eye off it; looking into the page leads the eye to the copy.
- Right-to-left scripts reverse the horizontal component (section 16).

### 6.13 Unity and variety

Unity is the sense that every element belongs to one system (shared grid, type, colour, spacing). Variety is the controlled difference that keeps the system alive. Working rule (house, in the discipline of The Vignelli Canon, 2010, which limits a body of work to a few typefaces and a few sizes): hold four or five variables constant (grid, typeface, palette, spacing scale, image treatment) and vary one or two per page (scale, crop, position). Variation in every variable is chaos; variation in none is monotony.

## 7. Optical adjustments

Geometry and perception disagree in predictable ways. Optical adjustment is the correction applied so that a layout looks right where measurement says it is right. Every correction below is small (1 to 5 percent, often 1 to 4 px), and every one is visible to a trained eye when missing.

### 7.1 Optical centre and geometric centre

The geometric centre is the midpoint of the frame. The optical centre, where an element looks centred, sits slightly above it, because the eye overestimates the lower half of a vertical field (the same effect that makes the upper and lower halves of an S or an 8 look equal only when the upper is drawn smaller). House practice: raise a vertically centred element by 3 to 5 percent of the field height. On a 1080 px slide content area that is 30 to 50 px; on an A4 title page about 10 to 15 mm. This is also the reason for the classical bottom margin being the largest (section 4.2).

### 7.2 Overshoot

Round and pointed forms (O, C, S, A, V, a circle, a triangle) must extend beyond the guide lines that flat forms touch, by about 1 to 3 percent of their height in type (03-typography.md, section 1.1), and by a similar proportion for icons and logo elements. Without overshoot a circle beside a square of the same height looks smaller.

### 7.3 Circle, square and triangle at equal weight

- Equal area: a circle has the same area as a square when its diameter is 1.128 times the square's side (2 divided by the square root of pi).
- Material Design's system icon keylines (reference shapes that fix each icon's size within its grid), on a 24 dp grid with a 20 dp live area, set the circle at 20 dp diameter, the square at 18 dp, the portrait rectangle at 16 x 20 dp and the landscape rectangle at 20 x 16 dp: the circle about 11 percent larger than the square. Use these keylines when drawing an icon set or a set of mixed-shape badges.
- Triangles and other pointed shapes need more size again, because their area collapses at the point.
- Logo lock-ups follow the same rule: a circular mark beside a wordmark sits about 10 percent taller than the cap height it would match on measurement.

### 7.4 Optical centring of asymmetric shapes

- Play button: a right-pointing triangle centred by its bounding box looks shifted left, because its mass sits near the flat side. Centring its centroid moves it right by one sixth of its width; judge by eye between the bounding-box position and the centroid position.
- Icons with uneven mass (a bell, a speech bubble with a tail, an arrowless chevron) are centred by eye in their container; the bounding box misleads.
- Text in buttons: line boxes include half-leading (the extra line height CSS splits equally above and below the glyphs) and the space above the cap height, so text centred by its box sits low. Centre by the cap height (`text-box: trim-both cap alphabetic`, 03-typography.md, section 5.4), then check by eye; lowercase-heavy labels may need 1 px further down.

### 7.5 Optical alignment of text and icons

- Sidebearings: display type at large sizes shows its left sidebearing (the built-in space before the glyph) as a visible indent against body text aligned to the same edge. At 160 px an H or a round O can sit 6 to 12 px in from the edge. Pull the headline left by the measured amount (a negative margin or text-indent in em units, so it scales).
- Round letters at the edge (O, C, G, Q) and diagonals (A, V, W) need further pull than straight stems.
- Hanging punctuation: opening quotation marks, hyphens and full stops at line ends hang into the margin so the text edge looks straight. InDesign's Optical Margin Alignment does it automatically; CSS `hanging-punctuation` is implemented in Safari only, and is not Baseline as of October 2026 (03-typography.md, section 8.6).
- Icons beside text: align the icon's optical centre to the text's x-height centre (lowercase) or cap-height centre (labels in caps); the line box includes half-leading and misleads. A 20 px icon beside 16 px text usually sits 1 px higher than box centring places it.
- Bullets and numbers: hang them outside the text edge so the text itself aligns with the column.

### 7.6 The 2 px that matters

The defects that separate a finished layout from an almost-finished one, all at 1 to 4 px on screen or 0.5 to 1 mm in print:
- An image edge 2 px off the text edge beside it.
- A caption baseline 1 px off the baseline grid of the adjacent column.
- A heading's cap top 3 px lower than the image top it is meant to align with (the half-leading problem; fix with `text-box-trim`).
- Unequal optical gaps around a round avatar compared with a square thumbnail in the same list.
- A hairline that renders 1 px on one side and 2 px on the other at a fractional device pixel ratio (the number of device pixels per CSS pixel, for example 2.625).

QA method: overlay the layout grid at 200 percent and check every edge against it (section 19).

### 7.7 When to break alignment on purpose

Break mathematical alignment when the geometric result looks wrong: optical centring, overshoot, sidebearing pull, hanging punctuation. Break visible alignment when the break is the idea (section 17). Never break it by a small amount for no reason; a 6 px misalignment reads as an error, a 1-column offset reads as a decision.

### 7.8 Light on dark: irradiation

Irradiation (halation): light type and rules on a dark ground look heavier and thicker than the same weights dark on light, because bright strokes spread on the retina (02-perception-and-psychology.md, section 17.7). On the house's #0A0A0A decks and dark pages, drop body text one weight step (300 where 400 was used on light), open tracking by about 0.01 em at small sizes, and check that 1 px hairlines do not swell into 2 px rules. Method and opacity values: 06-ui-design-craft.md, section 15.2.

## 8. Spacing systems

### 8.1 The 4 and 8 point grids

A spacing grid constrains every dimension (padding, margin, gap, component height) to multiples of a base unit.
- 8 point grid: all spacing in multiples of 8 (8, 16, 24, 32, 48, 64). Reason: common screen dimensions divide by 8, and Android's density multipliers (0.75, 1.5, 2, 3, 4, and 2.625 on some phones) turn 8 into whole pixels (6, 12, 16, 24, 32, 21), so edges stay crisp.
- 4 point grid: a half step for type line-heights, icon internals and dense components (4, 12, 20, 28). Material Design aligns components to 8 dp and type and iconography to 4 dp.
- Pixel snapping: at 1x, positions and sizes land on whole pixels; at 2x and 3x half and third points are allowed, but hairlines must still land on a device pixel.
- Point and dp: Apple's point and Android's density-independent pixel (dp) are both units that map to physical pixels through the device scale factor, so an 8 pt grid is the same design on every device.

### 8.2 The spacing scale

A spacing scale is the finite set of permitted spacing values. The house scale, the one most systems converge on:

| Token | Value (px) | Typical use |
|---|---|---|
| space-1 (3xs) | 4 | Icon to label, tight inline gaps |
| space-2 (2xs) | 8 | Label to field, caption to image, chip padding |
| space-3 (xs) | 12 | Button vertical padding, list item internal |
| space-4 (sm) | 16 | Card padding on phone, paragraph spacing, phone gutter |
| space-5 (md) | 24 | Card padding on desktop, desktop gutter, form field spacing |
| space-6 (lg) | 32 | Between groups inside a section |
| space-7 (xl) | 48 | Between components in a section |
| space-8 (2xl) | 64 | Section spacing on phone |
| space-9 (3xl) | 96 | Section spacing on tablet |
| space-10 (4xl) | 128 | Section spacing on desktop |
| space-11 (5xl) | 192 to 240 | Luxury section spacing and hero padding at 1440 and above |

The steps grow by about 1.33 to 1.5 at the top and by 4 px at the bottom, because small spaces need fine control and large spaces need only a few clearly different choices. Ten to twelve values are enough; a system with 30 spacing values has no system. T-shirt names (xs, sm, md) are aliases; numeric names (space-4) survive the insertion of a new step better. Token naming and layering are in 07-design-systems-and-tokens.md, sections 3.3 and 6.3.

Semantic spacing, from Nathan Curtis's "Space in design systems" (EightShapes, 2016): inset (padding on all sides of a container), squish inset (less vertical than horizontal, for buttons), stretch inset (more vertical, for text inputs), stack (vertical space between stacked elements), inline (horizontal space between inline elements). Naming the kind of space keeps engineers from using a padding token as a margin.

### 8.3 Density modes

Density is the amount of content per screen area. Three modes cover nearly every product:

| Mode | Row or control height | Padding | Use |
|---|---|---|---|
| Compact | 32 px (24 to 36) | 4 to 8 | Data tables, admin, trading, back office |
| Default | 40 to 48 px | 12 to 16 | Most apps and sites |
| Comfortable | 56 to 64 px | 16 to 24 | Luxury consumer, touch-first, older audiences |

Material Design's density scale reduces component height by 4 dp per step (0, -1, -2, -3). IBM Carbon's data table offers row heights of 24, 32, 40, 48 (default) and 64 px. Density is a token-level switch: change the spacing and height aliases and leave the components alone. Touch screens never go below the target sizes in 8.5, whatever the density.

### 8.4 Padding and margin logic in components

- A component owns its padding (the space inside its border) and never its outer margin. A button with a built-in bottom margin breaks every layout it is placed in.
- The parent owns the space between children, with `gap` (flexbox and grid) or a stack rule. Heydon Pickering's "lobotomised owl" selector (`* + *`, A List Apart, 2014) and the Stack primitive in Every Layout (Pickering and Andy Bell) apply margin only between siblings, so the first and last child carry none.
- Padding inside a container should be at least the gap between its children, so the group reads as held by its container.
- Nested containers: inner padding smaller than outer padding (24 outside, 16 inside, 8 at the leaf), and inner corner radius equal to outer radius minus padding, so the curves stay concentric (06-ui-design-craft.md, section 13).

### 8.5 Touch target spacing

- Apple Human Interface Guidelines: 44 x 44 pt minimum hit target.
- Material Design: 48 x 48 dp minimum touch target, with at least 8 dp between targets.
- WCAG 2.2, Success Criterion 2.5.8 Target Size (Minimum), Level AA: pointer targets at least 24 x 24 CSS px, or spaced so that a 24 px diameter circle centred on each undersized target overlaps no other target or circle (W3C Understanding document, read October 2026). SC 2.5.5 Target Size (Enhanced), Level AAA: 44 x 44 CSS px.
- House rule: 44 px minimum on every touch target, with 8 px between adjacent targets; the visual element may be smaller (a 24 px icon) if its hit area is padded to 44. Reason: the WCAG minimum is a floor for compliance, and luxury audiences include older clients on phones with large text settings.

### 8.6 Optical versus mathematical spacing

Equal measured gaps do not always look equal. Corrections:
- Round elements need tighter gaps than square ones, because the white space at a circle's sides adds to the gap.
- Text has built-in space above the cap height and below the baseline (the line box), so a 24 px gap measured box to box is 28 to 32 px visually. Trim the text box or subtract the half-leading.
- Uppercase labels look further from neighbours than lowercase ones of the same box size; reduce the gap by 2 to 4 px.
- Large type needs proportionally less space above it relative to its size; small type needs proportionally more. Set section spacing from the scale, then judge the heading-to-body gap by eye.
- When the grid and the eye disagree on a single gap, the eye wins once; when they disagree repeatedly, the scale is wrong.

## 9. Responsive and adaptive layout

Responsive layout reflows one design fluidly across widths; adaptive layout switches between distinct designed layouts at set points. Most good products are both: fluid between breakpoints, restructured at a few. Implementation detail is in 21-web-design-and-digital-craft.md, section 2; component behaviour in 06-ui-design-craft.md, section 16.

### 9.1 Mobile first

Design the narrowest layout first and add structure as width allows. Reasons: the phone layout forces the content order (one column admits one order, which becomes the hierarchy for every other size); CSS written with min-width queries adds rules as the screen grows, which is simpler than removing them; and in India and the Gulf the phone is the primary screen for consumer luxury, so the phone layout is the flagship.
- Test widths: 320 CSS px, the conformance floor (WCAG 2.2 SC 1.4.10 Reflow, AA: no two-dimensional scrolling at 320 CSS px wide, which equals a 1280 px window at 400 percent zoom); 360 (the narrowest common Android device); 390 and 402 (iPhone); 440 (iPhone Pro Max); 768; 1024; 1366 and 1536 (the most common Windows laptop resolutions after 1920 x 1080, at 125 percent scaling; 06-ui-design-craft.md, section 1.3); 1440; 1920.
- SC 1.4.12 Text Spacing (AA): the layout survives line height of 1.5 times the font size, paragraph spacing of 2 times, letter spacing of 0.12 em and word spacing of 0.16 em with no clipped text. That rules out fixed-height cards, fixed-height hero text boxes and text baked into images. SC 1.4.4 Resize Text (AA): text resizes to 200 percent.
- SC 1.3.2 Meaningful Sequence (A): when `grid-area`, `order` or `row-reverse` moves boxes, the DOM still follows the reading order, because CSS `reading-flow` works only in Chromium (limited availability, MDN, October 2026).
- Short viewports: zoom shrinks the CSS viewport height as well, so sticky headers and booking bars collapse below about 500 CSS px of height (`@media (max-height: 500px)`; 11-accessibility-and-inclusive-design.md, sections 2.2 and 8.2).

### 9.2 Breakpoints, and why container queries replace most of them

A breakpoint is a width at which the layout changes. Set breakpoints where the content breaks (the measure exceeds 75 characters, a row of cards becomes cramped); device widths change every year and make poor breakpoints.
- House page breakpoints: 26-platform-and-format-specs-2026.md, section 4.8 (480, 768, 1024, 1280, 1440, 1920, all min-width and written in rem so they move with user zoom). Android's window size classes, which 06-ui-design-craft.md, section 16.1 also uses, are compact under 600 dp, medium 600 to 840, expanded 840 to 1200, large 1200 to 1600, extra-large 1600 and above (developer.android.com, read October 2026; large and extra-large were added for desktop and connected displays).
- Container queries (`@container`), Baseline since 2023 (Chrome 105, Safari 16, Firefox 110), let a component change layout by the width of its container instead of the viewport. A product card in a 320 px sidebar and in an 800 px main column is one component with one rule. Page-level breakpoints then decide only the page skeleton (how many regions, where navigation sits); everything inside responds to its container. Container query units (cqi, cqw, cqh, cqb, cqmin, cqmax: 1 percent of the container's inline size, width, height, block size, smaller and larger) size type and spacing by container.

### 9.3 Fluid column grids

| Breakpoint (min width) | Columns | Gutter | Margin | Content max |
|---|---|---|---|---|
| phone (0) | 4 | 16 px | 16 to 20 px | Full width |
| phablet (480) | 4 | 16 px | 24 px | Full width |
| tablet (768) | 8 | 24 px | 32 px | Full width |
| laptop (1024) | 12 | 24 px | 48 px | Full width |
| desktop (1280) | 12 | 24 px | auto (40 px at 1280) | 1200 px |
| wide (1440) | 12 | 32 px | auto (40 px at 1440; 120 px for the luxury 1200 px container) | 1360 px |
| ultra (1920) | 12 | 32 px | auto (160 px at 1920) | 1600 px |

Breakpoints and containers follow 26-platform-and-format-specs-2026.md, section 4.8; the column counts step 4, 8, 12 as Android's window size classes do (9.2). 07-design-systems-and-tokens.md, section 6.11 lists the house breakpoints as 480, 768, 1024, 1280 and 1600; this file follows 26 until the two are reconciled. Grid tokens from 07 hold: 4, 8 and 12 columns; gutters 16, 24, 32. Gutters grow with the viewport because a 16 px gutter at 1440 makes columns read as one block, and a 32 px gutter at 390 wastes 8 percent of the screen per gutter.

### 9.4 Maximum content widths and measure

- Text: `max-width: 65ch` on paragraphs (section 4.4), giving 60 to 75 characters in most faces.
- Content container: 1200 to 1360 px on desktop, 1600 px maximum at 1920 and above (26-platform-and-format-specs-2026.md, section 4.8). Images may run full-bleed to the viewport; text never runs past its measure.
- Standfirsts and display text get their own max-width (about 20 to 30ch for a standfirst at 28 to 40 px), because a large standfirst across a wide container becomes a 120-character line.
- Laptop widths: the luxury grid's 1200 px container plus two 120 px margins is 1440 px, so at 1366 either the container or the margins must give. Write the container as `width: min(1200px, 100% - 2 * var(--margin))` with `--margin: clamp(48px, 8.3vw, 120px)` from the laptop breakpoint up: at 1366 that gives 113 px margins and a 1139 px container (columns of about 73 px); at 1536 the margin caps at 120 and the container returns to 1200 px with 168 px each side.

### 9.5 Intrinsic design

Jen Simmons named intrinsic web design in her 2018 talks (An Event Apart, "Everything you know about web design just changed"): layouts built from CSS Grid, flexbox, `minmax()`, `fr` units, `min()`, `max()` and `clamp()` that size themselves from content and available space, with few or no breakpoints. Patterns:
- Auto-fitting grid with no media query: set the grid's column tracks to `repeat(auto-fill, minmax(min(280px, 100%), 1fr))`. Cards fill the row at 280 px minimum and wrap.
- Fluid type and space: `font-size: clamp(2.5rem, 1.2rem + 4vw, 6rem)`; spacing from the same function (Utopia, by James Gilyead and Trys Mudford at Clearleft, generates both scales).
- Every Layout (Heydon Pickering and Andy Bell) gives the algorithmic primitives: Stack, Box, Center, Cluster, Sidebar, Switcher, Cover, Grid, Frame, Reel, Imposter, Icon.

### 9.6 The CSS layout toolkit, as of October 2026

| Tool | Status | Use |
|---|---|---|
| CSS Grid | In every major browser since October 2017 (Edge 16; Chrome, Firefox and Safari from March 2017) | Two-dimensional page and component layout; named areas for page skeletons |
| Subgrid | Baseline since September 2023 (MDN) | Children align to the parent's tracks: card titles, prices and buttons align across a row of cards of different content lengths |
| Flexbox | Baseline since 2015 | One-dimensional runs: toolbars, clusters, button groups |
| Container queries | Baseline 2023 | Component-level responsiveness (9.2) |
| `aspect-ratio` | Baseline since 2021 | Fixed image and video frames (`aspect-ratio: 4 / 5`) with no padding hack; prevents layout shift |
| Logical properties | Baseline since 2021 | `margin-inline-start`, `padding-block`, `inset-inline`: spacing that flips automatically in right-to-left layouts (section 16) |
| `lh` and `rlh` units | Baseline since November 2023; widely available since May 2026 | Spacing in lines, so vertical rhythm survives a change of type scale (3.3) |
| `text-box-trim` | Baseline newly available, 18 August 2026 | Trims half-leading so type aligns to cap height and baseline |
| Viewport units `dvh`, `svh`, `lvh` | Baseline since December 2022 | Full-height sections that do not jump as the phone's browser bars move (9.7) |
| Anchor positioning (`anchor-name`, `position-anchor`, `anchor()`, `position-area`, `position-try-fallbacks`) | `anchor-name`, `position-area` and `position-try-fallbacks` Baseline newly available since January 2026 (Firefox 147); `position-anchor` since September 2026 (Safari 27); the feature as a whole not yet Baseline (MDN and web-features data, October 2026) | Tooltips, menus and image labels placed relative to another element, with fallback positions when space runs out; combine with `popover` so the element renders in the top layer, outside z-index stacking (10.9) |
| `reading-flow` | Limited availability: Chromium only (Chrome 137); not Baseline (MDN, October 2026) | Makes focus order follow the visual order of a grid; until it is Baseline, keep DOM order equal to reading order (9.1) |
| Masonry (`display: grid-lanes`) | Experimental; not yet Baseline (MDN, October 2026) | Pinterest-style packed columns; use only as progressive enhancement with a grid fallback |
| Native dialog and popover | Baseline (dialog 2022, popover attribute April 2024) | Overlays in the top layer, outside z-index stacking (section 10.9) |

### 9.7 The fold

The fold is the bottom edge of the first screen. Users scroll, and attention decays with depth. Nielsen Norman Group, "Scrolling and attention" (2018; 120 participants, more than 130,000 fixations on 1920 x 1080 screens): 57 percent of viewing time above the fold and 74 percent in the first two screenfuls; their 2010 study on 1024 x 768 screens found 80 percent above the fold. Consequences:
- The first screen states what the page is and gives one reason to continue; the rest can sit below the fold.
- The best scroll cue is content cut by the fold (an image or a line of text visibly continuing); "scroll down" arrows are a weak substitute. A full-height hero with nothing breaking the bottom edge is the false floor that stops scrolling.
- On phones the fold sits about 700 to 850 CSS px down after browser chrome, and moves with the address bar; use the dynamic viewport units for full-height sections so they do not jump (`dvh` tracks the visible height as the browser bars move; `svh` is the smallest height, with the bars shown; `lvh` the largest, with the bars hidden).
- Laptop heights: a 1366 x 768 Windows laptop shows about 1366 x 650 CSS px after the taskbar and browser chrome (06-ui-design-craft.md, section 1.3), and a 1536 x 864 one about 730 (house estimate). A `100vh` hero designed at 1440 x 900 loses its bottom band there, and with it the content cut by the fold. Check every full-height section at 1366 x 650.

### 9.8 Scroll length as a design variable

Scroll length is measured in viewport heights and is a pacing decision. Length is fine when each screen pays: a luxury scroll narrative of 8 to 12 screens holds attention when each screen carries a single idea. Rules:
- Storyboard the scroll as frames at the target viewport (1440 x 900 and 390 x 844), one frame per screen, before building.
- One peak moment per page (design-taste, SKILL.md, section 5: motion), placed at about two thirds of the scroll, where attention starts to drop.
- End with the same care as the start: a designed sign-off screen before the footer.
- Measure with scroll-depth analytics (25, 50, 75, 100 percent); if more than half of sessions stop before 50 percent, cut or reorder.

## 10. UI layout patterns

Component anatomy and states are in 06-ui-design-craft.md; this section covers the arrangement of regions on a screen.

### 10.1 App shells

The app shell is the persistent frame (navigation, header, content region) that stays while content changes.
- Top bar: 56 to 64 px on desktop, 44 to 56 px on phones plus the status bar and safe-area insets (`env(safe-area-inset-top)` on the web).
- Insets: since Android 15 (API 35), apps targeting API 35 or higher draw edge-to-edge behind the system bars by default and must apply window insets; from API 36 the opt-out is gone (06-ui-design-craft.md, section 1.4). On iOS, read the safe-area insets at runtime, including the bottom home-indicator inset, because values differ by device. Hard-coded status bar heights break across models.
- Sidebar navigation: 240 to 280 px expanded; a collapsed rail of 64 to 80 px with icons; content region fills the rest. Switch from bottom navigation (phone) to rail (medium windows) to sidebar (expanded and above), following the window size classes in 9.2.
- Bottom navigation on phones: 3 to 5 destinations, within thumb reach; nothing below it but the home indicator inset.
- The content region carries its own grid; the shell is outside it.

### 10.2 Sidebars and split views

- Sidebar plus content: sidebar fixed width, content fluid with min-width 0 (so long content cannot push the sidebar off screen); Every Layout's Sidebar primitive wraps it below a content threshold, usually 50 to 60 percent of the container.
- Split view: two panes side by side, for example list and editor; ratios 1:2 or 1:3 (a 360 px list beside a fluid editor). Panes collapse to one at the compact width class.
- Inspector panels on the right: 280 to 360 px, collapsible; the Figma and Adobe convention, so users already expect it.

### 10.3 Master and detail

A list (master) and the selected item's detail. On expanded windows both show (list 320 to 400 px); on compact windows the detail pushes over the list with a back action. Keep the selected state visible in the list, and keep scroll position when returning, because losing a place in a list of 200 enquiries is the most common complaint in back-office tools.

### 10.4 Cards and lists

- Lists for scanning and comparing homogeneous items (enquiries, bookings, transactions): one row per item, aligned columns of attributes, row height by density mode (8.3).
- Cards for heterogeneous items or items led by an image (properties, products, stories): each card a small composition with one image ratio, one title style and one action.
- Card grids: equal widths from a column grid or an auto-fill grid; align internal parts across the row with subgrid so prices and buttons sit on one line.
- The design-taste cheap tell "symmetrical hero with three cards" and "everything the same width and weight" (SKILL.md, section 3) applies: a card grid needs one larger lead item or a change of scale to have a hierarchy.
- Bento grids: a modular card layout of unequal cells (1 x 1, 2 x 1, 1 x 2, 2 x 2) on a 4 or 6 column base, named after the Japanese lunch box; the current fashion is widely traced to Apple's product pages and keynote feature-summary slides. House rules: one lead cell at 2 x 2 or larger carries the one idea (6.11); 5 to 9 cells, since more read as a dashboard; one gap across the whole bento, smaller than the cell padding (16 to 24 px gap with 24 to 40 px padding at desktop, 8.4); concentric radii (8.4); one content type per cell (an image, a number or a sentence), because the same icon, heading and sentence in every cell is the generated look (22-ai-era-craft-and-generative-tools.md, sections 2.5 and 9.2). On phones, one column in priority order with the lead cell first and DOM order to match (SC 1.3.2, 9.1); `grid-auto-flow: dense` only where order carries no meaning.

### 10.5 Dashboards

A dashboard is a single-screen display of the most important information for one purpose (Stephen Few, Information Dashboard Design, 2006; second edition 2013).
- Grid: 12 columns at desktop; KPI tiles across the top row (3 or 4 tiles of 3 or 4 columns), primary chart across 8 columns with a ranked list or secondary chart in 4, detail table across 12 below.
- Order by question: what is happening (KPIs), why (trend and breakdown), what to do (exceptions list).
- Equal tile heights in each row; one chart type per question; units and periods in every tile header.
- Data visualisation craft (colour, marks, axes) is out of scope here; use the dataviz skill and 04-colour.md for chart colour.

### 10.6 Forms

- Single column. The CXL Institute study (Ben Labay; fielded June 2016, 702 desktop participants; now hosted by Speero) found a single-column form completed on average about 15.5 seconds faster than the same form in multiple columns (102.3 against 117.8 seconds; p = 0.004; the original write-up said 15.4). The study measured time only, since every participant finished. Reason: one column gives one path; multi-column forms make the eye zigzag and fields get skipped.
- Exceptions on one row: logically joined short fields (city and postcode, card expiry and CVV, first and last name in some markets).
- Labels above fields: the fastest to scan in Matteo Penzo's eye-tracking study ("Label placement in forms", UXmatters, 2006), and they survive translation into longer languages and right-to-left scripts.
- Field width signals expected length: a postcode field 6 to 8 characters wide, an email field the full column.
- Spacing: label to field 8 px, field to next label 24 px (1:3, section 6.8), groups separated by 48 px or a heading.
- Primary action aligned with the left edge of the fields on a single-column form, at the end of the path the eye has followed.

### 10.7 Tables

- Numbers right-aligned in tabular figures (03-typography.md, section 8.8), text left-aligned, headers aligned with their column's data.
- Row heights by density (8.3); zebra striping only on tables wider than about 6 columns where the eye can lose the row; otherwise hairline separators.
- Sticky header and first column on scrolling tables; horizontal scroll inside the table container on phones, with the page itself fixed in width.
- Column widths set by content type: fixed for dates and amounts, flexible for names and descriptions.

### 10.8 Modal sizing

- Widths: small 400 px (confirmations), medium 560 px (short forms), large 720 to 800 px (complex forms, media). Material Design 3 sets basic dialogs between 280 and 560 dp wide.
- Height: content-driven, capped at about 85 percent of the viewport with internal scroll; header and actions stay fixed.
- Phones: medium and large modals become full-screen sheets or bottom sheets.
- Margin from the viewport edge at least 24 px on tablets and desktops, so the modal reads as floating above the page.

### 10.9 Z-index and layering

Layering is the stacking order of elements on the z-axis. Without a scale, z-index values escalate (999, 9999, 99999) until nothing can be predicted.
- House scale: base 0, raised content 10, sticky header 100, dropdown and popover 200, overlay scrim 300, modal 400, toast 500, tooltip 600. Values are tokens (07-design-systems-and-tokens.md, section 6.9).
- Stacking contexts: any element with `transform`, `opacity` under 1, `filter` or `isolation: isolate` creates a new stacking context, and children cannot escape it whatever their z-index. Most "z-index does not work" bugs are this.
- The top layer: the native `dialog` element opened with `showModal()` and elements using the `popover` attribute render in the browser's top layer, above every stacking context. Use them for modals, menus and tooltips and the z-index scale shrinks to page-level elements.

## 11. Composition in photography and film

The frame is a format like a page, with the difference that it can move and the viewer cannot choose the reading time. Shot sizes, lenses, camera movement and coverage are in 14-video-preproduction-and-cinematography.md, sections 10, 8, 11 and 12; light in 15-lighting-and-sound.md; AI image prompting vocabulary for the same ideas in 22-ai-era-craft-and-generative-tools.md.

### 11.1 Framing and shot size

Framing is the choice of what the frame includes and excludes. The shot size (extreme wide to extreme close-up) sets the viewer's distance from the subject and therefore the emotional register: wide shots for place and scale (a hotel in its landscape), mediums for action and relationship, close-ups for texture and emotion (the clasp of a bracelet, the grain of a leather). A luxury campaign almost always needs all three for one product: the world, the use, the detail. Reference frames for each register: David Lean's extreme wides in Lawrence of Arabia (1962), where a rider is a speck in the desert (place and scale); Wes Anderson's frontal mediums in The Grand Budapest Hotel (2014) (relationship); Sergio Leone's extreme close-ups of eyes in Once Upon a Time in the West (1968) (intensity). Shot-size definitions and lens choice: 14-video-preproduction-and-cinematography.md, section 10.

### 11.2 Headroom and lead room

- Headroom: the space between the top of the subject's head and the top of the frame. In a medium close-up, the eyes sit on or near the upper third line, which leaves modest headroom; too much headroom makes the subject sink, none makes them pressed against the edge. Close-ups may crop the top of the head on purpose, which reads as intimate.
- Lead room (nose room, looking room): extra space in the direction the subject faces or moves. Without it the subject looks blocked; reversing it (space behind) creates unease, which is a valid choice for tension.
- Text placement follows lead room: put the headline in the space the subject looks into, so gaze leads to copy (section 6.12).

### 11.3 Negative space and depth

- Negative space in a frame is planned emptiness: sky, wall, water, a dark ground. For a campaign image it is also where the type will live, so plan it at the shoot: "subject in the lower right third, upper left empty for the headline" belongs in the shot list, because retouching cannot create space the camera did not capture.
- Depth: compose foreground, midground and background. A foreground element (a curtain edge, a glass, a branch, out of focus) gives scale and places the viewer in the space; the subject sits in the midground; the background gives context. Flat images lack one or two of the three.
- Layering: overlapping planes, changes of focus (shallow depth of field isolates the subject), atmospheric perspective (distant planes lighter and lower in contrast) and scale change all signal depth.

### 11.4 Leading lines, frames within frames, diagonals

- Leading lines: lines in the scene (corridors, colonnades, roads, the edge of a pool, a table) that carry the eye to the subject. Converging lines toward a vanishing point are the strongest.
- Frames within frames: doorways, arches, windows, mirrors, jharokhas and mashrabiya screens that frame the subject inside the image. They focus attention, add depth and carry cultural specificity for Indian and Gulf work (the Amber Fort arches, a Dubai courtyard).
- Diagonals: lines at an angle read as movement and instability; horizontals as rest; verticals as dignity and height. A product shot on a diagonal reads as active; on a horizontal, as calm. Dynamic tension comes from diagonals against the frame's verticals and horizontals; Hambidge's diagonals and reciprocals (section 5.1) are a way to place them.

### 11.5 Symmetry: the Kubrick frame and the planimetric frame

- One-point perspective symmetry (the Kubrick frame): a centred vanishing point with the scene mirrored around it, as in the hotel corridors of The Shining (1980) and the spacecraft interiors of 2001: A Space Odyssey (1968). Reads as control, order and menace. For hospitality, the long axial corridor or pool shot borrows its authority.
- The planimetric frame: the camera perpendicular to a background wall, figures arranged across the frame parallel to the picture plane, like a police line-up or a tableau. David Bordwell named it in film criticism, borrowing Heinrich Wölfflin's term; Wes Anderson (The Grand Budapest Hotel, 2014) is its best-known current user. Reads as composed, theatrical and witty. Fashion and F&B campaigns borrow it for flat-lay and tableau compositions.
- Both depend on exact centring and level verticals; a 1 degree tilt or a 2 percent off-centre placement ruins them. Shoot with grid overlay and a levelled tripod; correct verticals in post.

### 11.6 Rule of thirds against centre

- Centre: the eye goes there first (Tatler, 2007), so a centred subject is immediate, frontal and confrontational. It suits portraits that meet the viewer's gaze, symmetrical architecture, product hero shots and vertical video, where the phone frame is narrow and the safe zone (section 15) leaves little room off-centre.
- Thirds: placing the subject on a third line creates space for context or type and makes the eye travel, which reads as movement. It suits landscapes, lifestyle, editorial and any image that must carry a headline.
- House rule: choose consciously per shot. Centre for authority and vertical video, thirds when the image carries type, and never the halfway compromise (subject at 40 percent), which looks like an error.

### 11.7 Bruce Block: contrast and affinity

Bruce Block, The Visual Story (2001; third edition, Routledge, 2020), defines the basic visual components as space, line and shape, tone, colour, movement and rhythm. His principle of contrast and affinity: the greater the contrast within a component, the more the visual intensity increases; the greater the affinity (similarity), the more it decreases. Applied:
- Plan intensity across a film or a sequence of stills like a story graph: affinity (calm, similar tones, flat space) in the opening, contrast (deep space, opposing diagonals, saturated against neutral) at the peak.
- In a single still: one strong contrast (tonal, scale or colour) and affinity elsewhere, or the image has no focus.
- Deep space (strong perspective, overlap, size change) against flat space (planimetric, telephoto, frontal) is itself a contrast to plan across a campaign.

### 11.8 Crop with intent

Cropping a still is composing a second time.
- Crop to the format the image will run in at the shoot, with margin for the others: shoot wide enough that the 16:9, 4:5, 1:1 and 9:16 crops all hold the subject (the crop survival table is in 26-platform-and-format-specs-2026.md, section 5.5).
- Do not crop people at joints (wrists, elbows, knees, ankles), which reads as amputation; crop between joints (mid-thigh, mid-forearm).
- Tight crops add intimacy and tension; a crop that removes the context makes the detail the subject.
- Cropping into the frame edge on purpose (a figure half out of frame) implies a world beyond the image; the house reads it as confidence when it is clearly intended (more than a third of the element cut), and as an accident when it is a sliver.
- Leave the bleed: for print, extend the image 3 mm beyond the trim and keep the critical subject 5 mm inside.

## 12. Editorial layout

### 12.1 The spread as the unit

In a bound publication the reader sees two pages at once, so the spread is the unit of design. Consequences:
- Grids are designed mirrored (inside and outside margins swap between left and right pages).
- A single image may cross the gutter, which joins the pages; type set across the gutter is lost in the binding.
- The left and right pages are composed together: weight on one balances the other (section 6.4).

### 12.2 Gutter behaviour and binding

- Perfect binding (glued spine) swallows several millimetres of each inside margin into the spine; the thicker the book, the more. Keep type at least 15 to 20 mm from the spine and keep faces and products out of the binding zone in crossing images. Ask the printer for the binding allowance per page count.
- Saddle stitching (stapled) causes creep: inner pages push outward and are trimmed more at the fore-edge (the outer, unbound edge), so their outside margins shrink. The printer's imposition (the arrangement of pages on the press sheet) compensates; keep outside margins generous enough to absorb it. Production detail is in 20-print-packaging-ooh-and-physical-production.md.
- Lay-flat bindings (Otabind, Swiss binding) allow images and even type to cross the gutter cleanly; specify them for photography books and luxury property brochures.

### 12.3 Folios and running heads

- Folio: the page number. Running head (or running foot): the publication, section or chapter title repeated on each page. Both are markers (section 1.1) and sit in the margin, usually in the outer bottom or outer top corner, one or two sizes smaller than body.
- They are dropped on full-bleed image pages and openers (a blind folio), because a folio on a photograph damages the image.
- In a luxury publication the folio is a typographic signature: set it in the house micro caps or the italic, with care equal to a headline.

### 12.4 Headline, standfirst, body and the reading path

- Headline: the largest type; one idea; positioned at a flowline.
- Standfirst (dek, sell): the 20 to 50 word summary under the headline, set between headline and body in size (often 1.5 to 2 times body), which tells the reader why to read on.
- Byline and credit: small, close to the standfirst.
- Body: begins at a clear point (a drop cap, a raised initial or a bold lead-in), so the eye knows where to enter.
- Crossheads (subheads inside the body): every 300 to 600 words in long features, to give re-entry points.
- Pull quotes: an extract set large inside the body to draw the browsing reader; one or two per spread at most, never repeating text the reader has just read on the same spread, and never placed so that they split a sentence across columns.
- Captions: under or beside the image, aligned to its edge, one size below body; in luxury editorial captions are often grouped as a key (numbered images and a caption block) to keep the image area clean.

### 12.5 Image to text ratio and pacing

- Image to text ratio by spread type: opener 80 to 100 percent image; feature body 30 to 60 percent image; front-of-book sections 40 to 60 percent with many small items; essays 0 to 20 percent. The house 70 to 30 visual to text ratio (design-taste, SKILL.md, section 7) applies across the whole piece; individual spreads range from 0 to 100 percent image.
- Pacing across an issue: alternate dense and open spreads; place the strongest single image spread at a turning point (the start of the feature well, about a third in); do not run two text-heavy spreads in a row without an image pause.
- Flatplan: the page-by-page map of the issue, drawn as thumbnails, used to plan pace before any page is designed.

### 12.6 Three reference titles

- The Gentlewoman (founded 2010 by Jop van Bennekom and Gert Jonkers; edited by Penny Martin): long interviews, large unretouched portraits, generous margins, a calm typographic system repeated issue after issue. Lesson: consistency of system lets the portrait carry the issue.
- Apartamento (founded 2008 in Barcelona by Marco Velardi, Omar Sosa and Nacho Alegre): lived-in interiors, snapshot-quality photography, small type, many images per story in loose sequence. Lesson: pacing by sequence, with the image grid relaxed so it feels like being in the room.
- Monocle (founded 2007 by Tyler Brûlé): dense, modular, many short items per spread, strict typographic hierarchy, illustration and photography mixed. Lesson: a modular grid can carry density without chaos when hierarchy is strict.

### 12.7 The single image spread

A full-bleed photograph across a spread with no type, or a single line, is the editorial equivalent of silence in music. Rules: the image must hold at that size (minimum 300 ppi at final size, so a 420 x 297 mm A4 spread needs about 4960 x 3508 px); no face or product in the gutter; one per story at most; placed where the narrative needs a pause or a reveal.

## 13. Posters and out-of-home

### 13.1 Viewing distance governs everything

A poster is read from a distance, often in motion, in seconds. Out-of-home (OOH) is any advertising format encountered outside the home: hoardings, bus shelters, transit, malls, airports, digital screens.
- Legibility from visual angle: a letter is resolvable at normal (20/20) acuity when it subtends 5 minutes of arc (Snellen's standard). That threshold is about 1.45 cm of letter height per 10 m of distance; for comfortable reading at a glance, use at least three times it: about 4.5 cm of cap height per 10 m, 13 cm at 30 m, 44 cm at 100 m.
- The sign-industry rule of thumb, about 25 mm (1 in) of letter height per 3 m (10 ft) for impact, gives larger values than the threshold method and is the safer choice for moving viewers. Production tables and site-specific rules (roadside hoardings in Mumbai, Sheikh Zayed Road unipoles) are in 20-print-packaging-ooh-and-physical-production.md.
- Digital LED: minimum text height of 30 wall pixels (26-platform-and-format-specs-2026.md, section 5.11; at P3.9 pitch, 3.9 mm between LED centres, that is about 12 cm).

### 13.2 The seven word rule, one image and one line

- Seven words or fewer on a roadside poster is the long-standing OOH rule of thumb, because the passing viewer reads only a glance's worth. Fewer is better; the mark counts as a word. The arithmetic: at 60 km/h a board legible from 150 m is in view for about 9 s (20-print-packaging-ooh-and-physical-production.md, section 7.5), but a single glance away from the road should not exceed 2 s (NHTSA's Visual-Manual Driver Distraction Guidelines for In-Vehicle Electronic Devices, 2013: 2 s per glance, 12 s in total per task, used here as the benchmark for a safe glance). At about 238 words per minute (Brysbaert, 2019; 02-perception-and-psychology.md, section 4.5) a 2 s glance reads about 8 words, less the fixation needed to find the board. Placements where the viewer stands or walks (malls, airports, metro platforms; 20, section 7.7) can carry a second line.
- One image, one line, one mark. Each extra element divides the glance.
- Contrast for distance: tonal contrast of type against ground matters more than colour contrast at distance and at dusk (04-colour.md for contrast measures).
- Composition: the image carries the idea at 100 m; the line completes it at 30 m; the mark and any call to action are read at 10 m or never. Design for the three distances in that order and check each with a scaled print viewed at the scaled distance (an A4 print of a 12 x 4 m hoarding viewed from about 2 m is about an 80 m view, since the print is 1/40 scale).

### 13.3 The Swiss poster

Josef Müller-Brockmann's concert posters for the Zurich Tonhalle (1950s to 1970s) and his "der Film" poster (1960), and Armin Hofmann's theatre posters for Basel (from the late 1950s): asymmetric grids, sans serif type, rhythm built from geometric forms or type alone, flat colour, huge negative space. The lesson for OOH: one structural idea, executed at a scale that reads from across the street.

### 13.4 The Polish poster

The Polish School of Posters (about 1950 to 1980): Henryk Tomaszewski, Jan Lenica, Roman Cieślewicz, Franciszek Starowieyski, Waldemar Świerzy. Film and theatre posters made as painted, metaphorical images with hand-drawn lettering integrated into the picture. The lesson: an image idea (a visual metaphor) can carry a poster with almost no copy, which is the most efficient OOH there is.

### 13.5 Paula Scher and scale

Paula Scher (Pentagram partner since 1991) made the Public Theater's identity and posters from 1994: wood-type letterforms at architectural scale, words colliding and running off the edges, typography as image ("Bring in 'da Noise, Bring in 'da Funk", 1995). The lesson: scale itself is a hierarchy. When the type is the image, set it so large that it becomes the space (section 6.2), and let the crop by the poster edge do the tension.

### 13.6 Poster grid practice

- Margins on posters are proportionally smaller than on books (3 to 5 percent of the short side), because the poster's frame is the wall, the shelter or the hoarding structure; elements may bleed.
- Use a simple modular grid (4 x 6 or 6 x 8) or a hierarchical layout around one image.
- For bilingual Gulf OOH, Arabic and English share the face: mirrored or stacked layouts, each script set to its own optical size (section 16).

## 14. Slides and decks

### 14.1 The 16:9 grid

The deck canvas is 1920 x 1080 px (PowerPoint widescreen 13.333 x 7.5 in; 26-platform-and-format-specs-2026.md, section 7.1). The house grid (section 2.3): 120 px margins, 12 columns of 118 px with 24 px gutters, 6 rows of 120 px with 24 px gaps. Standard placements:
- Title: row 1, columns 1 to 8 (or 1 to 12 for a statement slide); the baseline of the title on the bottom of row 1 across the whole deck so titles never jump between slides.
- Body text: columns 1 to 5 or 1 to 6, measure 45 to 60 characters at 28 to 32 px.
- Image: columns 7 to 12 full height of the live area, or full bleed.
- Folio, client name, date: the bottom margin band, 18 to 20 px, fixed position.
- Fixed positions across slides are the deck's markers; moving them makes the deck feel like separate files stitched together.

### 14.2 One idea per slide

Each slide makes one point, stated in its title as a sentence (the assertion-evidence structure: a sentence headline, then visual evidence). Reason: in a meeting the audience reads the slide before listening; two ideas split them. A slide that needs two titles is two slides.

### 14.3 The house deck grammar

The house look (Space Grotesk, client decks on #0A0A0A with the client's real hex, 70 visual to 30 text, curved edges, scroll-driven presentation) is set in design-taste, SKILL.md, section 7, and implemented at the sizes in 26-platform-and-format-specs-2026.md, section 7.3. Layout consequences specific to this file:
- 70 to 30 visual to text means most slides are image or diagram slides with a single line; text-only slides are the exception and get the most space.
- Client as hero: the client's product or property fills the frame; the agency mark is small, fixed in one corner, the same position on every slide.
- Scroll-driven decks (a web page presented by scrolling) use the 1440 web grid (section 2.3) with each "slide" a 100vh section; the 1920 grid applies when the deck is exported to PDF or PowerPoint.

### 14.4 Text sizes for projection and screen

Size by visual angle (section 13.1): the back row of a meeting room should see cap height at three times the acuity threshold.
- House sizes on the 1920 canvas: titles 96 to 160 px, body 28 to 32 px, captions and sources 18 px minimum (26-platform-and-format-specs-2026.md, section 7.3).
- Check: a 3 m wide projected image makes 1920 px into 3 m, so 30 px body has an em of about 4.7 cm and a cap height of about 3.3 cm, which is about 2.3 times the threshold at 10 m: readable at the back of a 10 m room, at the limit. Rooms deeper than 12 m or screens narrower than 3 m need body at 36 px or larger.
- Guy Kawasaki's 10/20/30 rule (10 slides, 20 minutes, 30 point minimum; 2005) predates widescreen; 30 pt on PowerPoint's 13.333 in canvas is 60 px at 1920, a good minimum for decks presented to large rooms with dense text, larger than the house body size, which assumes screens and few words.

### 14.5 Image bleed

- Full-bleed images on slides run to all four edges with no border; the image is cropped to 16:9 with the subject inside the 120 px margins.
- Half-bleed: image across columns 7 to 12 bleeding off the top, right and bottom, text in columns 1 to 5 inside the margins.
- Never place an image 10 to 40 px from the slide edge without bleeding (edge pressure, section 6.10); either inside the margin or off the edge.
- Projectors and some TVs crop 3 to 5 percent of the frame (the action safe convention, 26-platform-and-format-specs-2026.md, section 5.6), so keep nothing critical in the outer 96 px.

### 14.6 The sequence as narrative

A deck is read as a sequence, so pacing matters as much as layout.
- Structure: Nancy Duarte's sparkline (Resonate, 2010) alternates "what is" and "what could be" and ends on the new bliss; for a pitch, problem, insight, idea, proof, plan, ask.
- Rhythm: alternate dense and open slides; a full-bleed image or a single statement every three to five slides resets attention.
- Chapter dividers: a consistent divider layout, the same as the cover in reduced form, so the audience knows where they are.
- The last slide gets the same care as the first: a closing image or line, designed like the cover.

## 15. Social posts, stories and thumbnails

Pixel specifications with sources and check dates are in 26-platform-and-format-specs-2026.md, section 2; short-form craft (hooks, edit pace) in 17-short-form-social-and-platform-craft.md. Here: composition.

### 15.1 Feed posts: 1080 x 1350

- 4:5 is the tallest ratio the feed shows uncropped, so it takes the most screen per post (26-platform-and-format-specs-2026.md, section 2.1). Meta's ads guide recommends 1440 x 1800 for 4:5 (read October 2026); the composition values here scale by 4/3.
- Grid: section 2.3 (6 x 7 modules of 136 px, margins 72 px sides, 127 px top and bottom).
- Text placement: headline inside columns 1 to 6, rows 1 to 2 or 6 to 7; never across the centre where the subject usually is. Keep type at least 72 px from the sides so the 3:4 profile-grid crop (34 px each side) does not cut it.
- Thumb zone: on the phone, the bottom of a feed post sits above the like, comment and share row and the caption; text at the very bottom edge reads as part of the interface. Keep the lowest text line at least 127 px above the bottom.

### 15.2 Stories and Reels: 1080 x 1920 with safe zones

Meta's safe zone for Reels and Stories (ads guide, read October 2026): keep 14 percent at the top, 35 percent at the bottom and 6 percent at each side free of text and logos. At 1080 x 1920:
- Top 269 px (profile name, progress bar, close button).
- Bottom 672 px (caption, audio, call to action, reply bar).
- Sides 65 px (the action icons on the right of Reels sit in this band and beyond; keep text further left on Reels).
- Live text area: x 65 to 1015, y 269 to 1248, which is 950 x 979 px, about 45 percent of the frame.
- House grid inside it: the 936 x 936 square at x 72 to 1008, y 290 to 1226, divided into 6 x 6 modules of 136 px with 24 px gutters, identical to the square post grid, so a campaign line and mark sit in the same module on every format. When the asset also runs on TikTok, keep type in columns 1 to 5 (x 72 to 848), because TikTok's right rail covers x 880 and beyond.
- TikTok's working safe zone (top about 290, bottom about 480, right about 200 px; 26-platform-and-format-specs-2026.md, section 2.2) is narrower on the right. When an asset runs on Meta and TikTok, use the tighter of each edge: top 290, bottom 672, left 65, right 200.
- The image may and should fill the whole 1080 x 1920; only type and marks obey the safe zone.

### 15.3 Text under the interface

- The interface (UI chrome: the platform's buttons, names, captions and progress bars drawn over the content) sits on the image. Text under it is unreadable and looks careless.
- Subtitles and captions for video: inside the live area, centred horizontally, in the lower part of the live area (around y 1000 to 1200 on 1080 x 1920), clear of the bottom 672 px where the platform caption sits.
- Contrast for overlaid type: a quiet zone in the image (sky, wall) is better than a drop shadow or a box; plan it at the shoot (section 11.3).

### 15.4 The profile grid as a whole

- Instagram's profile grid shows posts three across in 3:4 tiles (since the January 2025 change; 26-platform-and-format-specs-2026.md, section 2.1). On a 402 px wide phone each tile is about 133 px wide: design every post to read at that size.
- The grid is a second composition: rows of three are seen together. Plan in rows: alternate image types (face, detail, place) or tones (dark, light, dark) so adjacent tiles contrast; repeat a typographic post every third or sixth position for rhythm.
- Split images across tiles (one picture cut into 3 or 9 posts) break whenever a single new post shifts the grid by one, and are a dated tell; use carousels for panoramas.
- Pinned posts (up to three) occupy the first row: choose them as the profile's cover composition.

### 15.5 Carousel continuity

- A carousel is up to 20 images or videos (organic, per 26-platform-and-format-specs-2026.md, section 2.1), all at the first slide's ratio.
- Continuous panorama: design on a canvas n x 1080 wide by 1350 high, slice at 1080 px intervals; keep faces, product and type at least 72 px from every seam, because a seam through a face or a word looks like an error at the moment of swipe.
- Cross-seam elements: a line, a shadow or a shape crossing the seam pulls the viewer to swipe; one per seam is enough.
- Each slide must still work alone, because the first slide is the cover in the feed and later slides may be seen out of sequence when shared.
- Slide 1 is a cover (hook, image, few words); the last slide closes (summary, mark, single action).

### 15.6 YouTube thumbnails

- Canvas 1280 x 720 minimum width 640; YouTube's help page recommends 3840 x 2160 (26-platform-and-format-specs-2026.md, section 2.3). The thumbnail is seen small: in phone feeds, suggested rails and on TV grids. Test at 25 percent scale (320 x 180).
- Composition: one face showing a clear emotion, or one object, large (filling a third to half of the frame); three words or fewer in a heavy weight; strong tonal contrast between subject and ground; nothing important in the bottom right corner, where the duration stamp sits.
- Faces: eyes on or near the upper third line, looking toward the text or toward the viewer.
- Consistency: a channel's thumbnails form a grid like Instagram's (15.4); a fixed position for the text and a consistent colour field make the channel recognisable in a crowded feed.
- YouTube Studio's Test and Compare (rolled out in 2024) tests up to three thumbnails against each other and picks by watch-time share; use it on any client video with meaningful traffic before arguing about thumbnails in a meeting.

## 16. Bilingual, right-to-left and multiscript layout

Mask360 work routinely sets English with Arabic (UAE, Saudi Arabia) or with Hindi in Devanagari (India). Script-level typography is in 03-typography.md, section 15; this section covers the grid.

### 16.1 Mirroring for Arabic

Arabic is written right to left (RTL), so the layout mirrors: reading starts top right, navigation order reverses, text aligns right, the back control points right, progress runs right to left, and books bind on the right (the inside margin is on the left of a right-hand page's partner).
- Mirror: page structure, navigation, alignment, directional icons (back, forward, reply, send), progress bars, carousels and swipe direction, sidebars (move to the right), the reading path (section 6.12).
- Do not mirror: logos and wordmarks, photographs (unless a gaze or movement direction must lead into Arabic copy, and then by reshooting or recropping; a flipped face or a product with mirrored lettering is always noticed), media playback controls, clocks, numerals (Western and Eastern Arabic digits both read left to right inside RTL text), phone numbers, Latin brand names inside Arabic text.
- CSS: set `dir="rtl"` on the `html` element (or the bilingual block), write every spacing and position with logical properties (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `text-align: start`), and flexbox and grid flip automatically. Physical properties (`margin-left`) are the most common RTL bug.

### 16.2 The bilingual page

- Side by side: two mirrored columns sharing a central axis, English on the left reading out from the centre and Arabic on the right. Double the central gutter (two gutters) so the scripts separate cleanly. Works for menus, invitations, signage and corporate brochures.
- Stacked: Arabic above English (or English above Arabic) with each block aligned to its own reading edge. Works on narrow formats, phones and social posts.
- Two editions: one layout per language, mirrored; the best result for long documents and websites, at twice the design and QA effort.
- Prominence: government, real-estate and many Gulf clients expect Arabic first or at least equal in size; confirm per client and emirate, and check the signage and advertising permit rules in 20-print-packaging-ooh-and-physical-production.md.
- Optical size match: Arabic set at the same point size as Latin looks smaller; adjust so the two scripts look equal in weight and height, typically by setting Arabic one or two sizes larger with more leading.

### 16.3 Devanagari and Indian scripts

- Devanagari hangs from a headline (the shirorekha) and carries vowel signs above and below, so it needs more leading than Latin (about 1.5 to 1.8 for body) and more space between lines in mixed settings.
- Text length: Devanagari and Arabic versions run about 10 to 30 percent longer than English for the same content (07-design-systems-and-tokens.md, section 6.11); test every bilingual layout with the longest language before fixing the grid.
- Alignment in mixed lines: align on the baseline and size the Devanagari so its headline sits near the Latin x-height or cap height (03-typography.md, section 15.1).

## 17. Breaking the grid

### 17.1 How the masters break it

- Wolfgang Weingart: taught at the Basel School of Design from 1968 and took the Swiss grid apart from inside: stepped and layered type, letterspacing pushed to extremes, collage of film and halftone. The work reads as intentional because his students knew the grid it broke.
- David Carson: art director of Beach Culture (1989 to 1991) and Ray Gun (1992 to 1995), where columns overlap, type runs across gutters and an interview with Bryan Ferry was set entirely in Zapf Dingbats. The break carries the music's attitude; the content would be dull in a tidy grid.
- April Greiman and the Los Angeles New Wave (1980s): layered, digital, spatial layouts that took Weingart's lessons onto the early Macintosh.
- Bureau Borsche (Mirko Borsche, Munich, founded 2007, with long-running art direction for Zeit Magazin): strong grids with one aggressive intervention, a scale or crop that ignores the frame, often typographic. The current model for breaking with restraint.

### 17.2 Rules for a break

1. The order must be visible first. A break is legible only against a strict system; on a page where nothing aligns there is nothing to break.
2. The break must be big. Offset by at least one column or module, rotate by more than about 5 degrees, or scale by at least 3 times. A small break (a few pixels, a degree or two) reads as an error (section 7.7).
3. The break aligns with something else. A headline that ignores the column grid but aligns with the horizon in the photograph reads as designed.
4. One break per view. Two breaks compete; three are a mess (design-taste, SKILL.md, section 5: "a grid you can feel, broken once").
5. The break carries the idea. Break on the most important element (the headline, the product, the face); a broken caption or navigation item only looks broken.
6. Body text is never broken. The measure, leading and alignment of reading text stay inside the grid, because the reader still has to read it.

Common breaks: an image crossing the gutter or margin, an element bleeding off the format, type set larger than the grid can hold and cut by the trim, an overlap of type on image across a column boundary, a rotated label, a single element placed on an internal point of a photograph.

## 18. Layout process and tools

### 18.1 Process

1. Content inventory: every element, its quantity and its worst case (longest headline, most captions).
2. Thumbnails: 20 to 30 small sketches (about 1:10 scale) of the key spreads, screens or frames; composition decisions are cheapest here.
3. Grid: derived from the body type (section 3), drawn at 100 percent.
4. Grey-box layout (wireframe): boxes for every element on the grid, to test hierarchy and pace without the distraction of real images.
5. Real content in: type set, images placed, worst case first.
6. Refine at 100 percent and at actual size: print at scale, view on the device, project the deck.
7. QA (section 19), then the edit (design-taste, SKILL.md, section 4, step 6).

### 18.2 Tools

- Adobe InDesign: Layout, Margins and Columns for the column grid; Layout, Create Guides for rows and columns with gutters fitted to the margins; Preferences, Grids, Baseline Grid set to the body leading; parent pages (called master pages before 2021) for markers and folios; Optical Margin Alignment in the Story panel.
- Figma: layout guides per frame (columns, rows, uniform grid) saved as styles; auto layout with gap and padding bound to spacing variables; a grid flow in auto layout since 2025 that maps to CSS Grid; Vertical trim in the type panel (the text-box-trim equivalent).
- Browsers: Firefox DevTools' grid inspector (track numbers, area names, gaps) and Chrome's grid and flex overlays; overlay comparison extensions (06-ui-design-craft.md, section 20) to check build against design.
- Keynote and PowerPoint: guides on the slide master and fixed layouts for title, body, image and divider slides; snap to guides on.
- InDesign Liquid Layout (rules for how page items scale or reposition when the page size changes) and Adjust Layout (reflows a document to a new page size and margins): the print side of the multi-format adaptation in 2.4.
- Framer and Webflow: breakpoints with CSS Grid and flex controls, for marketing sites built without hand-coding (21-web-design-and-digital-craft.md, sections 7.3 and 7.4). Figma Sites (launched at Config, May 2025) publishes sites from Figma frames.
- Affinity: since 30 October 2025 a single application from Canva (which bought its maker, Serif, in March 2024) that combines the former Designer, Photo and Publisher, free for individuals (affinity.studio, read October 2026); vendors outside Adobe use it for page layout with master pages and baseline grids.

## 19. Layout QA checklist

Run before any layout leaves the studio. Every item is a yes or a fix.

Structure
1. Can the grid be stated in one line (format, margins, columns, gutter, rows, baseline)?
2. Do margins exceed twice the gutter, with the bottom margin the largest in print?
3. Does every element's left edge sit on a grid line (count unique left edges: five or fewer per view)?
4. Do images occupy whole modules, with tops on cap height and bottoms on the baseline of adjacent text?
5. Is body text inside its measure (45 to 75 characters single column, 35 to 50 multi-column, 65ch on the web)?

Hierarchy and composition
6. Squint test: one focal point, then a second level, then texture?
7. Are adjacent hierarchy levels at least 1.25 times apart in size, or two weight steps apart?
8. Is internal spacing at most half the external spacing in every group (proximity)?
9. Is all white space active (each region explainable)?
10. Is there one deliberate tension or break, and no accidental tangents or edge pressure?
11. Do faces and directional cues lead into the copy?

Optical and spacing
12. Are round forms and icons optically sized and centred (circle about 10 percent larger than the square)?
13. Are large headlines pulled left to compensate for sidebearings, and is punctuation hung?
14. Is every spacing value on the scale (section 8.2)?
15. Are touch targets 44 px or larger with 8 px between?

Format-specific
16. Print: 3 mm bleed, critical content 5 mm inside the trim, nothing in the binding zone, folios correct and absent on full-bleed pages?
17. Web: tested at 360, 390, 768, 1024, 1440 and 1920; no horizontal scroll at 360; max-widths set; container queries on components; logical properties used?
18. Social: type inside the strictest safe zone of every placement; post readable at 133 px wide in the profile grid; carousel seams clear of faces and type?
19. Deck: titles at the same baseline on every slide; nothing critical in the outer 96 px; body at 28 px or larger?
20. Bilingual: mirrored layout tested with the longest language; logos and photographs unflipped?

Final
21. Overlay the grid at 200 percent: any 1 to 4 px misalignment fixed?
22. Does the last page, slide, frame or screen get the same care as the first?
23. Does the layout pass the design-taste tests (SKILL.md, section 4, step 7)?

## 20. Reference table: grids by format

Worked values from sections 2 to 4 and 15; platform sizes from 26-platform-and-format-specs-2026.md. Print values in mm unless marked pt; screen values in CSS px.

| Format | Size | Margins | Columns x width | Gutter | Rows | Baseline or unit | Notes |
|---|---|---|---|---|---|---|---|
| Book, classical | 150 x 225 mm (2:3) | Inner 16.7, top 25, outer 33.3, bottom 50 | 1 x 100 | n/a | n/a | Body leading, for example 13 pt | Van de Graaf ninths, 2:3:4:6 |
| A5 book or menu | 148 x 210 | Inner 12.3, top 17.5, outer 24.7, bottom 35 | 1 x 111, or 2 x 53 | 5 | n/a | 12 or 13 pt | Twelfths canon |
| A4 editorial | 210 x 297 | Inside 15.9, outside 20.6, top 18.0, bottom 29.2 | 6 x 25.4 (72 pt) | 4.23 (12 pt) | 6 fields of 9 lines, 38.1 | 12 pt (9/12 body) | Section 2.3; 36 modules |
| A4 luxury monograph | 210 x 297 | Inner 23.3, top 33, outer 46.7, bottom 66 | 1 x 140, or 2 x 67.9 | 4.23 | Free | 13 to 14 pt | Ninths canon |
| A4 document | 210 x 297 | Top and outside 20, bottom and inside 25 | 12 x 10.08 | 4 | Free | 14 to 16.5 pt (10 to 11 pt body) | 26-platform-and-format-specs-2026.md, section 7.4 |
| US Letter report | 612 x 792 pt | Sides 54 pt, top 54, bottom 78 | 6 x 74 pt | 12 pt | 4 fields of 13 lines, 156 pt | 12 pt (10/12 body) | Section 2.3 |
| A3 poster | 297 x 420 | 15 all round | 6 x 40.3 | 5 | 8 x 44.4 | Not used | Hierarchical layout on a modular base |
| Desktop 1440, luxury | 1440 wide | 120 | 12 x 78 | 24 | Free | 8 px | Content 1200 |
| Desktop 1440, product | 1440 wide | 40 | 12 x 84 | 32 | Free | 8 px | Content 1360 |
| Desktop 1280 | 1280 wide | 40 | 12 x 78 | 24 | Free | 8 px | Content 1200 |
| Tablet 768 | 768 wide | 32 | 8 x 67 | 24 | Free | 8 px | Container queries do most of the work |
| Phone 390 | 390 wide | 20 | 4 x 75.5 (fluid) | 16 | Free | 4 px type, 8 px space | 78.5 at 402, 68 at 360 |
| Phone 360 (Android) | 360 wide | 16 | 4 x 70 (fluid) | 16 | Free | 4 and 8 px | Narrowest common width |
| Email | 600 wide | 24 | 1 x 552, or 2 x 264 | 24 | Free | 8 px | Single column on phones |
| Slide 16:9 | 1920 x 1080 | 120 all round | 12 x 118 | 24 | 6 x 120 (24 gaps) | 8 px | 72 modules; 26-platform-and-format-specs-2026.md, section 7.3 |
| Square post | 1080 x 1080 | 72 | 6 x 136 | 24 | 6 x 136 | 8 px | Grid tile crops 135 each side |
| Portrait post 4:5 | 1080 x 1350 | Sides 72, top and bottom 127 | 6 x 136 | 24 | 7 x 136 | 8 px | Grid tile crops 34 each side |
| Portrait post 3:4 | 1080 x 1440 | Sides 72, top and bottom 92 | 6 x 136 | 24 | 8 x 136 | 8 px | Fills the grid tile; test feed behaviour first |
| Story or Reel 9:16 | 1080 x 1920 | Safe: top 269 (290 with TikTok), bottom 672, sides 65 (right 200 with TikTok) | 6 x 136 inside x 72 to 1008 | 24 | 6 x 136 inside y 290 to 1226 | 8 px | Image full-frame; type in the square |
| YouTube thumbnail | 1280 x 720 (upload 3840 x 2160) | 64 | Thirds: 3 x about 384 | 0 | Thirds | n/a | Nothing in the bottom-right corner (duration stamp) |

## Terms introduced

- Active white space: space shaped on purpose to group, isolate, frame or direct the eye.
- Adaptive layout: distinct layouts designed for set width ranges and switched between at breakpoints.
- App shell: the persistent frame of navigation, header and content region in an application.
- Armature: the network of diagonals and reciprocals of a frame used to place strong elements (dynamic symmetry).
- aspect-ratio: the CSS property that fixes an element's width to height ratio.
- Asymmetric balance: balance of unequal elements by position, like a lever about an axis.
- Baseline grid: horizontal lines at the body leading to which every baseline snaps.
- Bleed: image area printed beyond the trim so that trimming error shows no white edge.
- Blind folio: a page counted in the numbering but printed without its number.
- Breakpoint: a width at which a layout changes structure.
- Canon of page construction: the medieval and incunabula method of placing a text block on a page by diagonals or ninths.
- Central fixation bias: the tendency of viewers to fixate the centre of an image first, whatever its content.
- Column grid: a grid of vertical columns with free vertical placement.
- Compound grid: two or more grids overlaid on one live area.
- Container query: a CSS rule conditioned on the size of an ancestor container instead of the viewport.
- Container query units: cqi, cqw, cqh, cqb, cqmin and cqmax, each 1 percent of a container dimension.
- Contrast and affinity: Bruce Block's principle that difference in a visual component raises intensity and similarity lowers it.
- Creep: the outward push of inner pages in a saddle-stitched publication, which narrows their outside margins after trimming.
- Crosshead: a subhead inside the body of a long article.
- Crystallographic balance: equal emphasis across the whole surface with no focal point.
- Density: the amount of content per unit of screen area, set by spacing and control heights.
- Dynamic symmetry: Jay Hambidge's system of composing with root rectangles, diagonals and reciprocals.
- Edge pressure: tension created by an element placed very close to, but not bleeding off, a frame edge.
- Em: a distance equal to the type size.
- F pattern: the scanning pattern of first lines read fully, then the left edge, on dense web text.
- Field: Müller-Brockmann's grid cell, a block of n lines of text.
- Flatplan: the page-by-page thumbnail map of a publication used to plan pace.
- Flowline (hang line): a horizontal line that divides the page into bands and from which elements hang.
- Focal point: the element the eye lands on first.
- Fold: the bottom edge of the first visible screen.
- Folio: the printed page number.
- Format: the outer boundary of a layout and its proportion.
- Frame within a frame: an element of the scene (door, arch, window) that frames the subject inside the image.
- Golden canon: Tschichold's name for the 2:3 page with a 2:3 text area placed in ninths.
- Golden ratio: the proportion of about 1.618 in which the whole relates to the larger part as the larger to the smaller.
- Gutenberg diagram: a map of reading gravity from top left (primary optical area) to bottom right (terminal area).
- Gutter (alley): the space between columns.
- Hanging punctuation: punctuation placed outside the text edge so the edge looks straight.
- Headroom: the space between the top of a subject's head and the top of the frame.
- Hierarchical grid: regions sized and placed by importance, sharing alignments without a repeating module.
- Hierarchy: the order in which a viewer reads the elements, set by the designer.
- Inset: padding on all sides of a container; squish inset has less vertical padding, stretch inset more.
- Intrinsic web design: Jen Simmons's term for layouts that size themselves from content and space using modern CSS.
- Lead room (nose room): extra space in the direction a subject faces or moves.
- Leading: the distance from one baseline to the next.
- Leading lines: lines in a scene that carry the eye to the subject.
- Live area (type area): the region inside the margins where content sits.
- Logical properties: CSS properties named by flow direction (inline, block, start, end) that flip in right-to-left layouts.
- Manuscript grid: a single text block in a margin frame.
- Margin: the space between the format edge and the live area.
- Marker: a fixed position for recurring elements such as folios, running heads and logos.
- Master and detail: a list and the selected item's detail, side by side or stacked.
- Measure: the length of a line of text in characters.
- Modular grid: a grid of columns and rows forming equal modules.
- Module: the cell formed where a column crosses a row.
- Modulor: Le Corbusier's red and blue scales of sizes derived from the human body and the golden ratio.
- Negative space: the unoccupied area of a page or frame, of any colour.
- One-point perspective: a composition with a single central vanishing point.
- Optical alignment: placement adjusted so edges look aligned, compensating for shape and sidebearing.
- Optical centre: the point that looks centred, slightly above the geometric centre.
- Out-of-home (OOH): advertising encountered outside the home, from hoardings to digital screens.
- Overshoot: the extension of round and pointed forms beyond guide lines so they look equal in size to flat forms.
- Passive white space: leftover space that serves no grouping, isolation or framing purpose.
- Perfect binding: a glued-spine binding that consumes part of the inside margins.
- Pixel grid: alignment of screen layout to whole device pixels and a 4 or 8 px unit.
- Planimetric frame: a frontal composition with figures arranged parallel to a background plane.
- Proximity: grouping of elements by distance.
- Pull quote: an extract from the text set large to draw the browsing reader.
- Radial balance: elements arranged around a central point.
- Responsive layout: one layout that reflows fluidly across widths.
- Rhythm: the pattern of intervals between repeated elements.
- Root rectangle: a rectangle whose long side is the square root of an integer times its short side.
- Rule of thirds: placing a subject on the lines or intersections of a 3 x 3 division of the frame.
- Running head: a title repeated at the top or bottom of each page.
- Saddle stitching: binding by staples through the fold.
- Safe zone: the inner area of a format kept free of text and logos because of trim or interface overlay.
- Spacing scale: the finite set of permitted spacing values.
- Spatial zone: a group of modules assigned one role.
- Split view: two panes side by side in one window.
- Squint test: blurring or shrinking a layout to see which elements dominate.
- Stack and inline space: vertical and horizontal space between siblings, applied by the parent.
- Stacking context: a CSS layering scope from which children cannot escape whatever their z-index.
- Standfirst (dek): the summary between headline and body.
- Subgrid: a CSS grid value that lets a child grid use its parent's tracks.
- Symmetric balance: mirrored weight about a central axis.
- Tangent: two edges that just touch, creating unwanted tension.
- Tension: visual energy from near-collision, imbalance, unexpected scale or crop.
- Top layer: the browser layer above all stacking contexts, used by modal dialogs and popovers.
- UI chrome: the platform interface drawn over or around content.
- Van de Graaf canon: the diagonal construction placing a text block whose height equals the page width.
- Villard diagram: a construction dividing a line into equal parts without measurement.
- Visual weight: the apparent pull of an element on the eye and on the balance of a layout.
- Z pattern: the eye's path across the top, diagonally down and across the bottom of a sparse layout.

## Sources and further reading

Books
- Josef Müller-Brockmann, Grid Systems in Graphic Design, Niggli, 1981.
- Karl Gerstner, Designing Programmes, Niggli, 1964.
- Emil Ruder, Typographie, Niggli, 1967.
- Armin Hofmann, Graphic Design Manual: Principles and Practice, 1965.
- Jan Tschichold, The New Typography (Die neue Typographie, 1928), University of California Press, 1995; The Form of the Book, Hartley and Marks, 1991 (German edition 1975).
- Raúl Rosarivo, Divina proporción tipográfica, 1947.
- Robert Bringhurst, The Elements of Typographic Style, version 4.0, Hartley and Marks, 2012.
- Timothy Samara, Making and Breaking the Grid, second edition, Rockport, 2017.
- Kimberly Elam, Geometry of Design, Princeton Architectural Press, 2001; Grid Systems: Principles of Organizing Type, 2004.
- Massimo Vignelli, The Vignelli Canon, Lars Müller, 2010.
- Le Corbusier, The Modulor, 1954 (Le Modulor, 1950); Modulor 2, 1955.
- Jay Hambidge, The Elements of Dynamic Symmetry, 1926.
- György Doczi, The Power of Limits, Shambhala, 1981.
- Gustav Theodor Fechner, Vorschule der Ästhetik, 1876.
- John Thomas Smith, Remarks on Rural Scenery, 1797.
- Rudolf Arnheim, Art and Visual Perception, University of California Press, 1954, new version 1974; The Power of the Center, 1982.
- David A. Lauer and Stephen Pentak, Design Basics, Cengage (multiple editions).
- Jan V. White, Editing by Design, 1974.
- Bruce Block, The Visual Story, third edition, Routledge, 2020.
- David Bordwell, Figures Traced in Light, University of California Press, 2005.
- Stephen Few, Information Dashboard Design, second edition, Analytics Press, 2013.
- Nancy Duarte, Resonate, Wiley, 2010.
- Heydon Pickering and Andy Bell, Every Layout, https://every-layout.dev

Specifications, standards and platform documentation
- ISO 216, Writing paper and certain classes of printed matter: trimmed sizes, A and B series.
- W3C, Web Content Accessibility Guidelines 2.2, Understanding SC 2.5.8 Target Size (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- W3C, CSS Grid Layout Module Level 2 (subgrid): https://www.w3.org/TR/css-grid-2/
- W3C, CSS Containment Module Level 3 (container queries): https://www.w3.org/TR/css-contain-3/
- W3C, CSS Inline Layout Module Level 3 (text-box-trim): https://www.w3.org/TR/css-inline-3/
- W3C, CSS Logical Properties and Values Level 1: https://www.w3.org/TR/css-logical-1/
- MDN, Subgrid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid
- MDN, Masonry layout: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout
- MDN, text-box-trim: https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim
- Android Developers, Use window size classes: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes
- Apple, Human Interface Guidelines, Layout: https://developer.apple.com/design/human-interface-guidelines/layout
- Material Design 2, System icons (keylines): https://m2.material.io/design/iconography/system-icons.html
- IBM Carbon Design System, Data table usage: https://carbondesignsystem.com/components/data-table/usage/
- Meta, Ads guide, Instagram feed image: https://www.facebook.com/business/ads-guide/update/image/instagram-feed
- Meta, Ads guide, Instagram Reels video: https://www.facebook.com/business/ads-guide/update/video/instagram-reels
- YouTube Help, Add video thumbnails: https://support.google.com/youtube/answer/72431

Articles, papers and talks
- J. A. van de Graaf, "Nieuwe berekening voor de vormgeving", Tété, 1946.
- I. C. McManus, "The aesthetics of simple figures", British Journal of Psychology, 1980.
- George Markowsky, "Misconceptions about the golden ratio", The College Mathematics Journal, 23(1), 1992.
- Christopher D. Green, "All that glitters: a review of psychological research on the aesthetics of the golden section", Perception, 24, 1995.
- Clement Falbo, "The golden ratio: a contrary viewpoint", The College Mathematics Journal, 36(2), 2005.
- Keith Devlin, "The myth that will not go away", Devlin's Angle, Mathematical Association of America, 2007.
- Benjamin W. Tatler, "The central fixation bias in scene viewing", Journal of Vision, 7(14), 2007.
- Nielsen Norman Group, "Scrolling and attention", 2018: https://www.nngroup.com/articles/scrolling-and-attention/
- Nielsen Norman Group, "F-shaped pattern of reading on the web: misunderstood, but still relevant", 2017: https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- Ben Labay, CXL Institute and Speero, "Form field usability: should you use single or multi-column forms?", 2016: https://speero.com/post/form-field-usability-should-you-use-single-or-multi-column-forms-original-research/
- Matteo Penzo, "Label placement in forms", UXmatters, 2006: https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php
- Heydon Pickering, "Axiomatic CSS and lobotomized owls", A List Apart, 2014: https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/
- Nathan Curtis, "Space in design systems", EightShapes, 2016: https://medium.com/eightshapes-llc
- Jen Simmons, "Everything you know about web design just changed", An Event Apart, 2018.
- Guy Kawasaki, "The 10/20/30 rule of PowerPoint", 2005: https://guykawasaki.com/the_102030_rule/
- Utopia fluid type and space calculators (James Gilyead and Trys Mudford, Clearleft): https://utopia.fyi
