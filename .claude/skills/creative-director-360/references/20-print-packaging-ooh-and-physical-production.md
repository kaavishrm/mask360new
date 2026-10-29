# Print, packaging, OOH and physical production

Making physical things at a luxury standard: specification, materials, finishes, vendors and quality control, for print, packaging, outdoor, retail, events and stationery in India and the UAE. As of October 2026.

## Contents

1. [Print fundamentals](#1-print-fundamentals)
2. [Paper and board](#2-paper-and-board)
3. [Finishes](#3-finishes)
4. [Printing methods](#4-printing-methods)
5. [Prepress and proofing](#5-prepress-and-proofing)
6. [Packaging](#6-packaging)
7. [Out of home](#7-out-of-home)
8. [Retail and environmental](#8-retail-and-environmental)
9. [Stationery and collateral at a luxury standard](#9-stationery-and-collateral-at-a-luxury-standard)
10. [Working with printers and fabricators](#10-working-with-printers-and-fabricators)
11. [The cheap print tells and their fixes](#11-the-cheap-print-tells-and-their-fixes)
12. [Reference tables](#12-reference-tables)

Then [Terms introduced](#terms-introduced) and [Sources and further reading](#sources-and-further-reading).

How this file sits in the corpus. The taste calls (matte over gloss, material honesty, one idea, the cheap tells) live in design-taste, SKILL.md sections 2, 3 and 5; this file does not repeat them. Colour engineering for print (gamut, rich black builds, total ink, TVI, press characterisations, delta E tolerances) lives in 04-colour.md, sections 9 and 10. Size tables for A series, business cards, posters, DOOH and LED walls live in 26-platform-and-format-specs-2026.md, sections 3.8, 5.11 and 6. Type for print lives in 03-typography.md, section 14. This file is the production layer: what to specify, what to order, what to check, and why each choice reads expensive or cheap once it exists in the hand or on the street.

Status marks used where a value is time-sensitive or unpublished: (V) read in a primary or reference source in October 2026; (T) trade norm, consistent across vendors and fixed by no published standard; (U) not verifiable in this pass, to be confirmed with the vendor or the regulation before release. Unmarked values are stable technical facts. The web search budget for this pass ran out before the time-sensitive checks were complete, so more items than usual carry (T) or (U); treat them as planning values.

## 1. Print fundamentals

### 1.1 Resolution and viewing distance

Effective resolution is the pixel count of a placed image divided by its printed size in inches; InDesign shows it as "Effective PPI" in the Links panel, and it is the only resolution figure that matters (the "Actual PPI" of the file is irrelevant once the image is scaled).

- 300 ppi at final size for anything read in the hand (cards, books, brochures, packaging). Reason: offset at 150 to 175 lpi needs a sampling rate of 1.5 to 2 times the screen ruling (the quality factor); 175 x 1.7 is about 300. Above about 400 ppi the RIP discards data and nothing improves.
- 150 ppi at final size for large format viewed from a metre or more (A1 and larger posters, roll-ups, exhibition panels); 100 ppi for bus shelters and mupis; 20 to 30 ppi at size for hoardings, usually delivered as 300 ppi at 1:10 scale.
- The viewing distance rule: the eye resolves about one minute of arc, so the useful limit in ppi is about 3438 divided by the viewing distance in inches. 26-platform-and-format-specs-2026.md, section 6.6 derives it and tabulates it by product.
- Line art (one-bit bitmap, such as a scanned signature or engraving) needs 1200 ppi at size, because hard edges stair-step visibly at 300. Logos and type travel as vectors and have no resolution.
- An upscaled image is a resampled image. AI upscaling (22-ai-era-craft-and-generative-tools.md) can rescue a hero shot for a hoarding; it invents texture in jewellery, fabric and skin, so check the result at 100 percent on the detail that the client sells.

### 1.2 Colour mode, conversion timing and profiles

Work in RGB, soft proof against the output profile throughout, and convert to CMYK once, at export, through the profile of the press that will print the job. Reasons: an early CMYK conversion throws away the gamut the screen versions of the same campaign need; each reconversion between CMYK profiles compounds shifts; and the same RGB master can then be converted separately for coated offset, uncoated offset, newsprint and large format. 04-colour.md, section 10.1 gives the rendering intents.

| Characterisation | ICC profile | Paper and process | When to use it |
|---|---|---|---|
| FOGRA39 | ISO Coated v2 (ECI) | Coated sheetfed offset, ISO 12647-2:2004 | Default when an Indian or UAE printer names no profile (T) |
| FOGRA51 | PSO Coated v3 (ECI) | Premium coated, ISO 12647-2:2013, M1 measurement | European printers and modern bright coated stock |
| FOGRA52 | PSO Uncoated v3 (ECI) | Wood-free uncoated, ISO 12647-2:2013 | Uncoated brochures, stationery, menus, books |
| GRACoL 2013 | CRPC6 | US sheetfed coated, G7 calibrated | Only for US printers |
| SWOP 2013 | CRPC5 | US web offset (magazines) | Only for US publications |
| Japan Color 2011 | Japan Color 2011 Coated | Japanese sheetfed | Only for Japanese printers |
| ISOnewspaper26v4 | IFRA26 | Coldset newsprint | Newspaper insertions in India and the Gulf |

The paper white of each characterisation differs (04-colour.md, section 10.7). Ask every printer in writing which condition they print to and whether they hold FOGRA or PSO certification; most Indian commercial printers answer "CMYK", which means FOGRA39 in practice.

### 1.3 Black: single ink, rich and registration

- K 100 alone for all text, fine rules and small marks, because one plate cannot misregister against itself.
- A rich black (K 100 with cyan, magenta and yellow under it) for large solids; the house build is C60 M40 Y40 K100, with warm and cool variants and an uncoated build in 04-colour.md, section 10.2. Use one build per job and per suite: a business card, letterhead and folder printed with different blacks look like three brands on the desk.
- Registration black (C100 M100 Y100 K100) is for printer's marks only. Applied to artwork it lays 400 percent ink, sets off, cracks on folds and never dries on uncoated stock.
- InDesign hides the difference by default: set Preferences, Appearance of Black, to "Display All Blacks Accurately" so a K 100 panel beside a rich black panel shows its real mismatch on screen.

### 1.4 Overprint, knockout and trapping

Knockout is the default: an object removes the inks beneath it, so a 0.1 mm misregistration leaves a white hairline at the edge. Overprint prints the object on top of what is beneath it. InDesign sets the [Black] swatch to overprint at 100 percent by default, which is why black text on a photograph stays crisp. Two failures recur: white objects set to overprint vanish on press (Acrobat's preflight flags "white overprint"), and a rich black set to overprint mixes with the image under it and turns muddy.

Trapping is the deliberate overlap of adjacent colours so that misregistration does not open a gap: the lighter colour spreads under the darker one by about 0.05 to 0.1 mm on sheetfed offset and 0.1 to 0.3 mm on flexo and corrugated (T). Printers trap in the RIP (Kodak Prinergy, Heidelberg Prinect, Esko Automation Engine for packaging); the designer's part is to avoid conditions trapping cannot fix: fine reversed type in a four-colour build, hairline keylines between two spot colours, and colour builds with no shared component. Two builds that share an ink (both carry 30 percent cyan, say) self-trap.

### 1.5 Tone value increase, screens and moiré

Tone value increase (TVI, the ISO term for dot gain) makes mid-tones print darker than the file, most on uncoated stock and newsprint; the profile compensates if the file was converted through the right one (04-colour.md, section 10.4). What the designer controls:

- Highlights: tints under about 3 percent can drop out on CTP plates and tints over about 95 percent fill in (T). A 2 percent brand tint behind text will either vanish or blotch.
- Gradients: long gradients with small value change band on press and on large-format inkjet; add 1 to 2 percent monochromatic noise in Photoshop and avoid gradients that end abruptly at 0 percent.
- Screen ruling (lines per inch, lpi) is chosen by press and paper: higher rulings resolve more detail but gain more and need smoother paper. Typical values are tabulated in section 12.2.

Amplitude modulated (AM) screening varies dot size on a fixed grid at fixed angles (classically cyan 15, magenta 75, yellow 0 or 90, black 45 degrees), producing the rosette visible under a loupe. Frequency modulated (FM, stochastic) screening keeps a fixed tiny dot, about 20 to 25 micrometres, and varies how many dots there are (V: Stochastic screening, Wikipedia, read October 2026). FM gives no rosette and no screen moiré, holds fine detail in jewellery and textiles, and reaches a slightly wider gamut; it shows grain in flat mid-tone tints and demands tight plate and press control. Hybrid screens combine both: Kodak Staccato (FM), Agfa Sublima, Screen Spekta. House: ask for FM or hybrid on jewellery, watch and textile look books printed above 175 lpi equivalent, AM elsewhere.

Moiré is an interference pattern from two regular grids overlapping: fine fabric weaves (houndstooth, twill, a sheer sari), architectural louvres or a rescreened printed image beating against the halftone. Fixes in order: FM screening, a slight rotation or scale of the image, a minimal blur on the offending area, and for rescreened originals a descreen at scan.

### 1.6 Spot colour and Pantone

A spot colour is a pre-mixed ink printed from its own plate. The Pantone Matching System is the default library in both countries; 04-colour.md, section 10.5 covers when a spot beats process.

- Coated (C) and uncoated (U) are the same ink formula seen on two papers; a brand book cites both (PANTONE 2685 C and 2685 U) and the uncoated one is almost always duller and darker. Specify the C or U chip that matches the stock being printed.
- Pantone Color Bridge shows each solid beside its CMYK simulation with CMYK, sRGB and HEX values; the brand book takes its process build from it and states the visible distance.
- Series numbering (V: Pantone, Wikipedia, read October 2026): metallics 871 to 877 and 8001 to 8965; premium packaging metallics 10101 to 10454; fluorescents 801 to 814 and 901 to 942; pastels 9140 to 9163. Metallics and fluorescents cannot be shown on screen; judge them only on a drawdown on the job's stock. Fluorescents fade in daylight within weeks, which rules them out of windows and outdoor.
- The library had 2,161 solid colours in the 2019 edition (V, same source); later editions added colours, so cite the guide edition in the brand book.
- Pantone Plus versus Pantone Connect. Pantone Plus was the library series bundled with Adobe applications; after the Adobe and Pantone licensing dispute, Pantone colour values were removed from Photoshop, Illustrator and InDesign in November 2022, and the Pantone Plus colour books were removed from Illustrator in 2023 after Pantone deprecated the series (V, Pantone article on Wikipedia, citing Wired, November 2022). Pantone Connect is the current route: a web app, mobile apps and an Adobe Creative Cloud extension (V: pantone.com, read October 2026). The premium price was reported as US$15 a month in 2022; the October 2026 price was not published on the page read (U). Files that carried Pantone Plus swatches still open; their names survive, so the printer can mix the ink, and the screen values may display as black until the library is licensed.
- Physical guides fade with light and handling; replace the studio's working guides roughly every 12 to 18 months (T) and keep one archived guide per brand job as the reference.
- Pantone sits inside X-Rite, owned since the 2023 Danaher spin-off by Veralto (V).

### 1.7 Inks

| Ink type | How it dries | Strengths | Limits | Use |
|---|---|---|---|---|
| Conventional sheetfed (oil based) | Absorption and oxidation | Any paper, cheap, the reference process | Needs drying time before laminating, foiling or folding, often overnight (T) | Most commercial print |
| UV and LED-UV | Cured instantly by ultraviolet light | Prints on plastics, foil board, synthetic papers; finishing the same day; sharper dot on uncoated | Slightly different gloss; some UV inks deink poorly in recycling | Packaging, labels, uncoated jobs with tight lead times |
| Soy and vegetable based | As conventional | Lower VOCs; part of the petroleum oil replaced by vegetable oil (the share varies by maker) | Marginally slower drying | Sustainability briefs; ask for the maker's data sheet before claiming it |
| Metallic | As above | Cheaper than foil for large areas; can be overprinted | Duller than foil; needs a sealing varnish to stop tarnish and rub; sinks and dulls on uncoated | Large metallic fields where foil would be wasteful |
| Opaque white | As above | Prints light on dark and kraft stocks | Offset white is thin, needs two hits; screen printed white is denser | Kraft, black and coloured boards |
| Fluorescent | As above | Brightness CMYK cannot reach | Fades in light | Short-life items, fashion events |
| Low-migration | As above | Formulated for food-contact packaging | Narrower ink range | Any primary or secondary food pack; the Swiss Ordinance SR 817.023.21 is the benchmark converters cite |

### 1.8 Varnishes and coatings

- Oil-based varnish (gloss, satin, matt) runs through an ink unit, flood or spot via a plate; cheap, subtle, protects lightly.
- Aqueous coating runs through a coating tower inline; dries fast, protects dark solids from rub and fingerprints, comes in gloss, matt and soft-touch variants, and keeps the sheet recyclable. The house default protection on uncoated and matt-coated luxury work when a coating is needed.
- UV coating gives high gloss and hardness; it cracks on folds unless creased first, and makes a piece read as mass retail unless used as a deliberate spot.
- Dry-back: ink on matt-coated stock dries glossier than the unprinted paper; a matt varnish over the whole sheet evens the sheen.

### 1.9 Bleed, trim, safe area, marks and slug

- Bleed: image extended beyond the trim so the guillotine never leaves a white sliver. 3 mm for sheet work, 5 mm for posters and books with heavy covers, 10 to 25 mm for banners and 100 mm for hoardings (26-platform-and-format-specs-2026.md, section 6.5 tabulates every product).
- Trim: the cut line. Guillotine drift on a stack is about 0.5 to 1 mm (T), which is why borders close to the trim look crooked: a 3 mm border varies visibly, a 10 mm border hides the drift.
- Safe area: 3 to 5 mm inside the trim for small items, 8 mm at the spine of perfect-bound books, more on saddle-stitched books because of creep (section 1.10).
- Crop marks offset 3 mm (outside the bleed, so they never print into the image); registration targets and colour bars belong to the printer's sheet layout.
- Slug: an area outside the bleed for job information (job number, version, date, inks, finishes, operator notes). It is trimmed away and saves an argument about which file went to press.

### 1.10 Imposition, signatures and page counts

Imposition is the arrangement of pages on the press sheet so that, once printed both sides, folded and trimmed, they read in order. The printer imposes; the designer supplies single pages (reader order) and never printer's spreads.

- A signature is one press sheet folded into a section: 4, 8, 16 or 32 pages. A B1 press sheet (700 x 1000 mm in trade use; ISO B1 is 707 x 1000) carries eight A4 pages a side, so a 16-page A4 signature; a B2 press sheet carries an 8-page A4 signature.
- Page counts: any saddle-stitched or sewn book is a multiple of 4; offset economy favours multiples of 8 or 16 because a part-signature wastes sheet and make ready. A 52-page book costs nearly what a 64-page book costs on B1.
- Creep (shingling): in saddle stitching, inner pages push out further than outer ones and are trimmed narrower; on 64 pages of 130 gsm the difference reaches a millimetre or two. The printer compensates; the designer keeps 5 mm or more of safe area at the fore edge and avoids thin borders.
- Gripper edge: about 10 to 15 mm along one sheet edge is held by the press grippers and cannot print (T); full-bleed work needs a sheet larger than the trimmed size, which is why SRA sizes exist (SRA3 320 x 450 mm, SRA2 450 x 640, SRA1 640 x 900).
- Work-and-turn and work-and-tumble print both sides of a sheet from one plate set; the printer chooses, and it affects which edge is the gripper.

### 1.11 Binding

| Method | Page range (approximate) | How it opens | Character and luxury use |
|---|---|---|---|
| Saddle stitch | 8 to about 64 pages; up to about 80 on thin stock (T) | Opens flat at the centre spread only | Magazines, slim catalogues; loop stitch variant for ring binders. Thick saddle books bulge and gape |
| Perfect binding (hot-melt EVA glue) | From a spine of about 3 to 4 mm, roughly 48 pages of 100 to 120 gsm (T) | Fights to close; text near the spine is lost | Paperbacks, reports. Coated stock and heavy ink at the spine shed pages |
| PUR binding (polyurethane reactive glue) | As perfect binding | Opens wider; stronger on coated and heavy stocks | The minimum for a perfect-bound luxury piece; needs about a day to cure before handling (T) |
| Case binding (hardcover) | From about 48 pages (T) | Depends on the text block; sewn blocks open best | Brand books, coffee-table books, anniversary books; cloth, paper or leather over 2 to 3 mm greyboard, headbands, ribbon markers |
| Smyth sewing | Any multiple of signatures | Lies flat | The gold standard for books that must open fully (V: Bookbinding, Wikipedia); pair with a case or an exposed spine |
| Singer sewing | One section, about 8 to 48 pages (T) | Flat at centre | Machine lockstitch through the fold with visible, often coloured, thread; a quiet luxury cue for look books and menus |
| Swiss binding | Sewn or PUR block | Lies flat; front cover hinges free | Text block glued to the back cover only, spine exposed; art catalogues, brand books |
| Exposed spine (open spine, lay-flat) | Sewn signatures | Lies flat | Visible stitching and glue, covers attached at the sides; reads crafted when the sewing thread is specified |
| Japanese stab binding | Loose sheets, any count within a few millimetres of thickness | Opens partly | Holes about 10 mm from the spine, hand-stitched patterns; limited runs, invitations, menus |
| Wire-o | Up to about 25 mm thick (T) | Opens 360 degrees | Notebooks and functional menus; 3:1 pitch up to 9/16 inch, 2:1 above (V: Bookbinding, Wikipedia). Half-concealed wire-o hides the wire under a wrap cover |
| Screw posts (Chicago screws) | Any | Flat | Menus and portfolios whose pages change |

Luxury defaults: Smyth sewn with an exposed spine or Swiss binding for brand books; Singer sewn for slim look books and menus; case bound Smyth sewn for anything that must last on a coffee table; never wire-o on a luxury piece unless the brief is a working notebook.

### 1.12 Folding, creasing and grain

| Fold | Panels | Allowance | Use |
|---|---|---|---|
| Half (single) | 2 | None | Cards, folders |
| Tri-fold (roll or letter) | 3 | The panel that folds in is 2 to 3 mm narrower; an A4 tri-fold runs 100, 100 and 97 mm (T) | DL leaflets, menus |
| Z fold | 3 | Equal panels | Inserts that open in one movement |
| Gate | 3 or 4 | Each gate panel 1 to 2 mm narrower than half the centre panel | Reveals: a launch invitation that opens on an image |
| Double gate | 4 | Gates as above, centre panel folded | Larger reveals |
| Roll | 4 or more | Each successive inner panel 1.5 to 3 mm narrower (T) | Long narratives |
| Accordion (concertina) | Any | Equal panels | Timelines, room guides, wine lists that stand on a table |
| Cross (French) | 4 pages from one sheet folded twice at right angles | Allow for the bulk of the second fold | Posters folded to mail; maps |

- Creasing: stock above about 150 to 170 gsm needs a crease (score) before folding, and coated stock with heavy ink or lamination across the fold needs it from lower weights. Without it the coating and fibres crack, leaving a white line through a black panel: one of the most common cheap tells in India.
- Grain: paper fibres align in the machine direction. Folds and book spines should run parallel to the grain; against the grain a sheet cracks when folded and a book's pages wave and resist turning. Merchants mark grain differently (underlined dimension, "LG" and "SG", or "MD"), so write it in words on the spec: "grain parallel to the 297 mm edge".

## 2. Paper and board

### 2.1 Weight, caliper and bulk

- Grammage (gsm, grams per square metre) is weight, the number every quote uses. It says little about how a sheet feels.
- Caliper is thickness in micrometres (microns). It decides how a card feels between the fingers, whether a book spine fits its cover, and whether a sheet feeds through a digital press.
- Bulk is caliper divided by grammage (cm³/g). Coated gloss sits around 0.8 to 0.9; ordinary uncoated around 1.2 to 1.3; high-bulk book papers reach 1.5 to 1.8, which is what the 15 and 18 in Munken Print Cream 15 and 18 denote (T). A 300 gsm high-bulk uncoated card feels as substantial as a 400 gsm coated one.
- Weights by use are tabulated in section 12.1. The short version: 80 to 100 gsm text, 120 to 170 brochures, 250 to 350 covers and cards, 400 to 700 and duplexed boards for luxury cards.

### 2.2 Coated and uncoated

Coated paper carries a mineral layer (clay or calcium carbonate with binder) that holds the ink on the surface: sharper dots, denser blacks, wider gamut. Gloss, silk (satin) and matt are degrees of calendering and coating. Uncoated paper lets ink sink into the fibres: softer dots, lower density, a narrower gamut, warmer and more tactile, and it can be written on with a fountain pen and fed through a laser printer.

Luxury prefers uncoated for four reasons: touch carries the message before the eye reads (design-taste, SKILL.md section 5, Material); gloss is the default of mass print, so its absence reads as intent; uncoated ages well and does not scuff white; and letterpress, deboss and edge paint need a soft, bulky sheet. The cost is image quality: photography on uncoated loses density and saturation. The house rule follows from that: uncoated for stationery, invitations, menus and type-led pieces; matt coated or silk, or a smooth high-white uncoated with FM screening, for photography-led look books; gloss only when the idea is gloss (a lacquered surface, a beauty product shot meant to look wet).

### 2.3 Textures, cotton, tinted, kraft and translucent

- Felt-marked papers carry the texture of the felt on the paper machine; laid papers carry parallel laid lines and chain lines from a dandy roll (Conqueror Laid is the familiar corporate one); wove papers are smooth and even.
- Embossed textures (linen, leather grain, hammer) are pressed in after making. Linen embossed board is a cheap tell when it imitates luxury it is not; a real felt-marked or cotton sheet reads honestly.
- Cotton papers (made from cotton linters or rag) are soft, bulky, strong and take deep letterpress and blind deboss beautifully: Crane's Lettra (100 percent cotton, made for letterpress), Gmund Cotton, and handmade cotton rag from Sanganer in Jaipur. They cost several times woodfree stock and vary in caliper, which matters for envelopes and digital presses.
- Tinted and coloured stocks: through-dyed sheets carry colour through the fibre, so trimmed and edge-painted edges match the face (GF Smith Colorplan, Fedrigoni Sirio Color); surface-coloured boards show a white core at the cut. For a coloured card, specify through-dyed or duplex the colour on both faces.
- Black stock: print on it with foil, opaque white, screen print or deboss, never with process inks that disappear into it.
- Kraft: unbleached brown sulphate board, strong and cheap. It reads honest in craft, coffee and sustainability briefs and reads cheap when it stands in for a lack of decision; it greys every colour printed on it and needs opaque white under brand colours.
- Translucent papers (vellum, tracing, Curious Translucents, Gmund Transparent): used as overlays in invitations and brand books for a reveal. Ink dries slowly on them, they show every fold, and laser printers distort them.

### 2.4 Mills and ranges

| Mill or merchant | Base | Ranges to know | Character | House use |
|---|---|---|---|---|
| GF Smith | Hull, England | Colorplan (about 50 through-dyed colours, 135 to 700 gsm, made for GF Smith by James Cropper in Cumbria (T)) | Smooth, dense, saturated, embossing patterns available | Business cards, invitations, box wraps, covers |
| Fedrigoni | Verona, Italy; owned by Bain Capital and BC Partners, 46.33 percent each (V: Fedrigoni, Wikipedia) | Materica (mineral-toned textured uncoated), Sirio (colours, Sirio Pearl, Sirio Ultra Black), Arena (natural uncoated, smooth and rough), Tintoretto, Woodstock, Freelife, Old Mill | The broadest luxury catalogue; bought Zuber Rieder, a maker of wine and spirits label papers, in 2022 (V) | Look books, box wraps, labels, menus |
| Arjowiggins Creative Papers brands | France and UK historically | Curious Collection (Curious Metallics, Curious Skin, Curious Translucents), Conqueror, Pop'Set | The UK Arjowiggins mills closed in 2022 and several brands passed to Fedrigoni, Antalis and others (V: Arjowiggins, Wikipedia) | Confirm the current owner, mill and stock before specifying; availability moved |
| Mohawk | Cohoes, New York | Superfine (eggshell and smooth; Ultrawhite, Softwhite, Warm White) | Even, bright, the American benchmark uncoated for printing photography on uncoated | Brand books where photography and uncoated feel must coexist |
| Gmund | Gmund am Tegernsee, Bavaria; family mill founded 1829 | Gmund Cotton, Gmund Colors | Small-batch, tactile, expensive | Invitations, hotel welcome cards, limited editions |
| Arctic Paper | Munkedal, Sweden | Munken Pure, Munken Lynx, Munken Print Cream | High-bulk uncoated, natural and white shades | Books and look books that should feel thick and light |
| Favini | Rossano Veneto, Italy | Crush (agro-industrial residues such as citrus, grape, coffee and cocoa replacing part of the virgin pulp, alongside recycled fibre (T)) | Speckled, warm, a sustainability story with a visible texture | F&B and beauty briefs where the residue is the idea |

### 2.5 India: mills, handmade paper and the import reality

- Large Indian mills make the volume grades: JK Paper (Rayagada in Odisha, Songadh in Gujarat), ITC's Paperboards and Specialty Papers Division (Bhadrachalam in Telangana, the reference for virgin packaging boards), TNPL, West Coast Paper Mills (Dandeli). Ballarpur Industries (BILT), once the largest, went through insolvency from January 2020 and the NCLT approved Finquest Financial Solutions' bid on 31 March 2023 (V: Ballarpur Industries, Wikipedia); do not plan around its specialty grades.
- Indian trade vocabulary a printer will use: art paper and art card (gloss or matt coated paper and board), maplitho (uncoated woodfree printing paper), bond, duplex board (coated recycled board with a grey back, the material of cheap cartons), SBS or FBB (virgin carton boards), kappa board (greyboard for rigid boxes and files). Sheet sizes are quoted in inches (23 x 36, 25 x 36, 20 x 30); write the spec in millimetres and confirm the parent sheet.
- Handmade paper is an Indian luxury asset: cotton rag with deckle edges from Sanganer in Jaipur, the Kalpi cluster in Uttar Pradesh, and the Sri Aurobindo Ashram handmade paper unit in Puducherry. Uses: wedding and launch invitations, place cards, menus, certificates. Constraints: caliper varies sheet to sheet (digital presses misfeed), sizing varies (ink feathers on some sheets), deckles need hand handling, and colours vary by batch, so buy the whole job's paper in one lot plus 15 percent.
- The import reality: European specialty stocks reach India through specialty merchants in Mumbai and Delhi (Old Delhi's Chawri Bazar remains the paper and invitation market). Stocks not held locally take weeks to arrive; merchants often sell by the full pack or carton; landed cost stacks freight, basic customs duty, the social welfare surcharge on that duty, IGST and the merchant margin. Book the paper when the estimate is approved, keep a sample library of what each merchant actually holds, and name an Indian alternative on the spec in case the import slips.
- The UAE: Dubai and Sharjah merchants hold more European specialty stock than Mumbai, and GCC customs duty is 5 percent of the CIF value for most goods. Many Gulf luxury jobs are printed in Dubai on European paper and shipped; some go the other way, printed and hand-finished in India for craft and cost, then shipped to Dubai.

### 2.6 Whiteness, shade, brightness and opacity

- Brightness (ISO brightness) measures blue reflectance at 457 nm; CIE whiteness measures how white a sheet looks and is pushed above 140 to 160 by optical brightening agents (OBAs), which fluoresce blue under daylight (T).
- Shade: blue white (high white, clinical, office), natural white (slightly warm), cream and ivory. Luxury defaults to natural white or a warm white for type-led work, because blue white reads as copier paper and makes skin and gold look cold; photography-led look books may want a neutral high white for clean highlights.
- OBAs fade and the sheet yellows over years; archival brand books and certificates go on OBA-free or low-OBA stock. Measurement under M1 includes OBA fluorescence and M0 ignores it (04-colour.md, section 10.7).
- Opacity: the fraction of light a sheet blocks. Low opacity causes show-through of the reverse side, worst with heavy images on 100 gsm and below; specify higher-opacity text stocks for image-heavy books, or accept show-through deliberately on translucent wraps.

### 2.7 Board types

| Board | Construction | Character | Use |
|---|---|---|---|
| SBS (solid bleached sulphate) | Bleached chemical pulp throughout, usually coated one side (C1S) | White through the cut edge, smooth, strong | Premium folding cartons, cosmetic and fragrance cartons |
| FBB (folding boxboard, GC1 and GC2) | Mechanical pulp middle between chemical pulp layers | Stiffer per gram than SBS, slightly cream inside | Most cartons; the economical premium choice |
| WLC and duplex (GD, GT grades) | Recycled fibre with a grey or white back | Cheap, grey inside | Shipping inner packs; a tell on any pack the customer opens |
| C1S and C2S | Coated one side or both sides | C2S prints both faces | Folders, cards, cartons printed inside |
| Greyboard (chipboard, kappa board) | Recycled solid board 1 to 3 mm | Rigid, unprinted, always wrapped | Rigid boxes, book covers, presentation boxes |
| Corrugated | Fluted medium between liners | Strength for transit | Shippers and mailers; microflute for printed retail packs |

Corrugated flute heights, approximate: A 4.5 to 5 mm, C about 4 mm, B about 3 mm, E about 1.5 mm, F (microflute) about 0.8 mm (T). E and F print well enough for retail and mailer boxes; B and C are for shipping. Litho-lamination (an offset-printed sheet laminated onto corrugated) gives a printed luxury finish on a transit-strength box.

### 2.8 Sustainability and certification

- FSC (Forest Stewardship Council) labels: FSC 100%, FSC Mix and FSC Recycled. The FSC logo may only appear when every company in the chain, printer included, holds a chain-of-custody (CoC) certificate and the job is invoiced as FSC; a designer cannot add the logo to artwork on trust. PEFC (Programme for the Endorsement of Forest Certification) runs an equivalent scheme.
- Recycled content: post-consumer fibre (from collected waste) carries a stronger claim than pre-consumer fibre (mill offcuts). Quote the percentage from the mill's data sheet.
- Plastic-free: no film lamination, no plastic windows, no cellophane overwrap; aqueous coatings and paper-based alternatives. Foil is a thin layer that most mills accept in small areas for repulping (T); full-coverage metallised board is a different matter.
- Inks: vegetable-based inks help; deinkability (how well ink separates in recycling) varies, and some UV inks and liquid toners deink poorly (assessed by INGEDE Method 11) (T).
- Regulation that reaches luxury packaging in 2026: the EU Packaging and Packaging Waste Regulation (EU) 2025/40 entered into force in February 2025 (V: Wikipedia) and applies generally from 12 August 2026 (U: confirm on EUR-Lex); it targets excess packaging, including features that only inflate perceived volume such as double walls and false bottoms (U), which matters for Indian and Gulf brands that export or sell into Europe. India's Plastic Waste Management Rules, 2016 with extended producer responsibility (EPR) guidelines from 2022 and the ban on identified single-use plastic items from 1 July 2022 apply to brand owners. The UAE banned single-use plastic shopping bags from 1 January 2024 and extends the ban to further single-use plastic products from 1 January 2026 under Ministerial Resolution No. 380 of 2022 (U).

## 3. Finishes

Cost tiers for every finish are in section 12.6. The general shape: a finish has a tooling cost (a die, block or screen), a make-ready cost, and a per-unit cost; on short luxury runs the tooling dominates, so one well-chosen finish costs far less than three.

### 3.1 Foil

- Hot foil stamping: a heated metal die presses a foil from its carrier film onto the sheet. Dies: magnesium for short runs and simple art, copper for longer runs and fine detail, brass for the longest runs, for combination foil-and-emboss and for sculpted work (T). Foil makers: Kurz (Fürth, Germany) and API (UK) supply most converters; ask which foil code the quote assumes.
- Foil range: metallic golds (pale, rich, rose), silver, copper; pigment foils (matt, non-metallic colours, including white and black); gloss black on matt black; holographic; clear gloss. Matt gold and pigment foils are the luxury choices because they catch light without shouting.
- Constraints: lines under about 0.2 to 0.3 mm break, large solids pinhole and fill unevenly, textured stocks lose foil in their valleys (raise pressure or choose a smoother stock), foil on soft-touch laminate needs a compatible foil (T). Register of foil to print is about plus or minus 0.3 to 0.5 mm (T); never butt foil against a printed edge.
- Cold foil: an adhesive is printed by plate, the foil is laminated onto it and cured inline. It can be overprinted with CMYK to make coloured metallics, is cheaper on long label and carton runs, and has no impression and a softer edge. Use it for metallic photography on labels; avoid it where a crisp, pressed edge is the point.
- Digital foil: toner-based sleeking (foil fused onto toner by a laminator) for very short runs; digital embellishment presses (Scodix; MGI JETvarnish 3D with iFoil, MGI being part of Konica Minolta) print a raised polymer and foil it with no die, which makes personalised foil names possible. The raised polymer can read plastic on uncoated cotton; proof it on the job stock.
- Taste: gold foil as the default luxury signal is a cheap tell (design-taste, SKILL.md section 3 and section 5, Material). Alternatives that read richer: blind deboss, tone-on-tone foil (black on black, white pigment on white), copper or pale gold used once on one element, or no foil at all.

### 3.2 Embossing and debossing

- Blind emboss: raised with no ink or foil. Deboss: pressed in. Registered emboss: aligned to printed or foiled art (tolerance about plus or minus 0.5 mm (T)). Combination: foil and emboss in one pass with a brass die. Multi-level: several heights in one die. Sculpted: a hand-engraved brass die with rounded, bevelled transitions; the most expensive and slowest die, used for crests and monograms.
- Every emboss needs a male and female die (or a counter). The sheet must stretch: cotton and uncoated stocks at 250 to 400 gsm emboss well; coated stocks crack at sharp edges.
- The reverse shows the impression. Hide it by duplexing after embossing, by placing it where the reverse is a flap, or design the reverse to carry it.
- Deboss reads quieter than emboss and survives handling; it is the house default for a monogram on a heavy cotton card.

### 3.3 Spot UV and raised effects

- Spot UV: a gloss UV coating applied in register over part of the sheet, usually on matt laminate for contrast. It is the most overused finish in Indian and Gulf corporate print (a glossy logo on a matt business card); used as a texture (a tonal pattern, a sand texture, a line drawing across a black cover) it can be subtle.
- Raised UV and digital embellishment build tactile height from inkjet-deposited varnish; useful for Braille-like texture and short runs, and reads as a gadget when it is the only idea.
- On uncoated stock a gloss spot barely shows; use deboss or a pigment foil.

### 3.4 Laminates and the scuff problem

Film laminates (BOPP, applied with heat) come in gloss, matt, soft-touch (a velvety, rubbery feel), anti-scuff matt and soft-touch, and textured (linen, sand).

- Scuffing: matt and soft-touch films on dark solids show white scuff marks from fingers, other boxes and courier bags within days. Specify anti-scuff film or an anti-scuff aqueous coating on dark packs, and test by rubbing two samples face to face fifty times.
- Fingerprints and grease show on soft-touch; it also attracts dust in humid Mumbai storage.
- Lamination cracks along folds unless creased after laminating, and single-sided lamination curls thin stock (laminate both sides or go heavier).
- Recyclability: a laminated sheet is a paper and plastic composite. A "plastic-free" claim fails with any film.
- The luxury alternative: heavy uncoated stock with no laminate, protected by aqueous coating where needed, and replaced when soiled.

### 3.5 Die cutting and laser cutting

- Die cutting uses a steel-rule die on a platen (Bobst is the industry reference machine) to cut shapes, creases and perforations in one pass. Nicks (small uncut ties that hold the waste during stripping) leave tiny bumps on the edge; for luxury cards and invitations ask for nickless cutting with hand stripping. Minimum inside radius and the space between cuts are set by the die maker; ask before drawing filigree.
- Laser cutting cuts fine filigree (a jaali screen pattern on an invitation, a monogram cut through a sleeve) with no die. It scorches edges brown on paper, more on dark and thick stock, and leaves a smell for days; test on the job stock and specify cleaning. Kiss cutting cuts only the face of a label, leaving the liner.

### 3.6 Letterpress and the impression debate

Letterpress is relief printing: inked raised surfaces pressed into the sheet. Photopolymer plates made from the digital file replaced metal type for most commercial work; platen presses (the Heidelberg Windmill is the common one) and cylinder proof presses (Vandercook) print most jobs. One colour per pass; register about plus or minus 0.3 to 0.5 mm (T); large solids print with a mottled, slightly salty texture that is part of the character.

The debate. The traditional trade and fine-press position: a kiss impression, ink transferred with no bite, because biting type damaged it and signalled poor make-ready; held by older trade printers and many fine-press printers. The contemporary position: a deep, even impression on soft cotton is the tactile proof of the process and the reason to pay for it when digital print is cheap; held by the stationery studios of the letterpress revival since the 2000s. House position: deep impression on cards and invitations made from cotton of 600 gsm or more, duplexed so the reverse stays clean; light impression on text-heavy pieces and on anything printed both sides of a single sheet, because bite on text shows through and breaks the reverse.

### 3.7 Edges: painting, gilding, duplexing and triplexing

- Edge painting (edge colouring): finished cards stacked, clamped and coloured on the edge by roller, spray or brush. It needs about 500 gsm or more to read; flame orange, black or a brand colour on a white card is the classic. Metallic edges use foil (edge foiling) or, on books, real gold leaf (gilding, the gilt top edge of a fine book).
- Duplexing: two sheets laminated together to reach 600 to 1,400 gsm, often with different colours on each face. Triplexing adds a coloured core visible only at the edge (white, black, white). Duplex after letterpress and embossing so the bite is hidden. Duplexing adds several days to the schedule (T).

### 3.8 Thermography, engraving and die stamping

- Thermography: resin powder dusted on wet ink and heated, giving raised glossy type. It was sold as the affordable imitation of engraving and reads that way to anyone who knows engraving; avoid in luxury.
- Engraving (intaglio, called die stamping by British stationers): ink sits in a recessed steel or copper die and the sheet is pressed into it, giving a crisp raised image with a bruise on the reverse and the finest lines any process can print. It survives in high-end stationery for crests, monograms and addresses; few presses remain in India and the Gulf, so price it from London or ask the client's stationer.

### 3.9 Screen printing

Screen printing pushes ink through a mesh stencil and lays down a thick film: opaque white and metallic on dark and kraft boards, fluorescents, textured varnishes. On glass it prints bottles (section 6.5); on fabric it prints tote bags, dust bags and event textiles (plastisol ink sits on top and feels plastic; water-based and discharge inks sink into cotton and feel soft, the luxury choice). Screen-printed posters for art-led events read crafted; the mesh limits fine detail and halftones (about 45 to 85 lpi (T)).

### 3.10 Perforation, round corners, pockets and inserts

- Micro-perforation for tear-off RSVP slips and tickets; specify perforation pitch with the finisher and test the tear on the job stock, because cotton tears ragged.
- Round corners: 3, 4 or 6 mm radius are the usual tools (T). Use one radius across a whole suite; the house layer's curved edges (design-taste, SKILL.md section 7) extend to stationery corners.
- Pockets, belly bands and inserts: glued or folded pockets in folders, belly bands around an invitation suite, envelope liners; each adds hand work, which India prices well and the UAE prices high.

### 3.11 Combining finishes with restraint

- One hero finish, at most one supporting finish, and a reason for each tied to the idea: deboss the monogram because the brand speaks quietly; foil one line because that is where light should catch.
- The production order: print, dry, coat or laminate, foil, emboss or deboss (or combination), die cut, duplex, trim, edge paint, hand finishing. A finish specified out of this order either cannot be made or costs a second pass.
- Run the design-taste tests (SKILL.md section 4): cover the logo and see whether the piece still belongs to the brand; ask whether the finish looks like four hundred hours or four hundred rupees.

## 4. Printing methods

### 4.1 Offset lithography

Offset lithography transfers ink from a plate (image areas accept ink, non-image areas accept water) to a rubber blanket and then to the paper. It is the reference process: finest dot, any stock, Pantone inks, consistent across long runs.

- Sheetfed offset prints cut sheets, typically B2 or B1 format, on Heidelberg Speedmaster, Koenig and Bauer Rapida, Komori Lithrone and Manroland presses; four, five or six units plus a coater. Economic from a few hundred to about a thousand copies upwards (T), depending on page count and colours.
- Web offset prints from reels: heatset (dried in an oven) for magazines and catalogues, coldset (absorbed) for newspapers. Economic from tens of thousands of copies (T). Luxury rarely uses it except for magazine inserts and newspaper wraps.
- What to ask for: the press model, the number of units (a five-colour press prints CMYK plus a spot in one pass), whether they run a coater inline, their certification (Fogra PSO or ISO 12647-2), and whether they will allow a press pass.

### 4.2 Digital

| Technology | Examples | Quality tier | Limits | Use |
|---|---|---|---|---|
| Liquid electrophotography (LEP) | HP Indigo presses with ElectroInk liquid toner | The closest digital process to offset: thin ink film, no toner sheen, wide stock range, special inks (white, silver, fluorescents) and Pantone simulation | Very thick cotton and deep textures need treated or tested stock | Short-run luxury: look books, invitations with names, menus, packaging prototypes and short-run cartons |
| Dry toner | Xerox Iridesse (with gold, silver and clear dry inks), Konica Minolta AccurioPress, Canon imagePRESS, Ricoh Pro | Good on smooth stock | Toner sits on the surface with a slight sheen; cracks on folds unless creased; struggles on rough uncoated | Proofs, internal documents, short runs on smooth stock |
| Sheetfed inkjet | Fujifilm Jet Press 750S, Canon varioPRINT iX, Landa nanographic presses | Approaches offset on coated and inkjet-treated stock | Uncoated stock needs inkjet treatment | Medium runs with versioning |

Variable data printing (VDP) changes content from sheet to sheet: guest names on place cards, numbered limited editions, personalised invitations, unique patterns. HP SmartStream Mosaic generates a unique variation of a pattern for every item; Ferrero's Nutella Unica campaign in Italy (2017) printed about seven million unique jar labels with it (T). VDP is the luxury use of digital: personalisation that offset cannot do.

### 4.3 Letterpress, screen and risograph

Letterpress and screen are covered in sections 3.6 and 3.9 as finishes because that is how luxury uses them. Risograph is a stencil duplicator (Riso Kagaku, Japan) that prints one drum colour per pass in soy-based inks on uncoated paper: a standard palette plus fluorescent pink and orange, vivid flat colour, visible grain and a registration drift of about 1 to 2 mm (T). The drift and grain are the charm for zines, gallery and event ephemera, and studio self-promotion; no Pantone match is possible, so never use it for a brand colour that must hold.

### 4.4 Flexography and gravure

- Flexography prints from flexible photopolymer relief plates, with ink metered by an engraved anilox roller. It prints labels, corrugated, cartons and flexible films; plates are cheap and presses fast. HD flexo (Esko HD Flexo is the common platform) brought fine highlights close to offset on labels. Corrugated post-print flexo is coarse; for a printed luxury shipper, use litho-lamination or digital corrugated print.
- Gravure prints from engraved copper and chrome cylinders: the richest solids and most consistent long runs, with cylinder costs that only pay over very long runs (flexible packaging, confectionery wrappers). India has a large gravure flexible packaging industry (Uflex is the largest name); luxury meets it in chocolate, tea and FMCG premium lines.

### 4.5 Large format

| Technology | Ink and substrates | Strengths | Limits | Use |
|---|---|---|---|---|
| Solvent | Solvent inks on PVC flex, vinyl, mesh | Outdoor durability, cheap per square metre, very wide machines (3.2 and 5 m) | Odour, VOCs, coarse at close range | Hoardings, building wraps |
| Eco-solvent | Milder solvent inks (Roland, Mimaki) | Finer than solvent, indoor and outdoor | Slower drying before laminating | Posters, vinyl, vehicle graphics |
| Latex | Water-based latex inks (HP Latex) | Odourless, prints dry, indoor safe, good on vinyl, paper and textiles | Heat on some films | Retail interiors, wall graphics, hotel and mall installations |
| UV flatbed | UV-cured inks printed directly onto rigid boards (Durst, swissQprint, Canon Arizona, EFI) | Prints on acrylic, Dibond, timber, glass, foam board; white ink and varnish layers | Thick ink film can crack if the board flexes | Signage, display panels, event boards |
| Dye sublimation | Dye transferred by heat into polyester fabric | Vivid, washable, wrinkle-resistant, light to ship | Polyester only | SEG lightboxes, backdrops, flags, stage fabrics |

### 4.6 3D printing for prototypes

FDM (fused filament) for quick structural models; SLA (resin, such as Formlabs printers) for smooth surfaces and fine detail, closer to an injection-moulded cap or a jewellery box insert; SLS (sintered nylon) for strong functional parts. Uses: bottle caps and closures before mould tooling, packaging inserts, retail fixture scale models, award trophies, and hero props for shoots. A sanded and painted SLA print photographs as a finished product, which lets a launch campaign shoot before the moulds exist.

### 4.7 Cost structure

- Fixed costs per job: prepress, plates (one per colour per side on offset), make-ready (setting up the press, including waste sheets: commonly 100 to 300 sheets per make-ready (T)), ink mixing for spots, tooling (dies, foil blocks, screens), finishing set-up.
- Variable costs: paper (often the largest variable cost on long runs), press time per thousand sheets, finishing per unit, packing, delivery.
- The unit cost curve: offset unit cost falls steeply over the first few thousand copies as fixed costs spread, then flattens; digital unit cost is nearly flat (a click charge per sheet). The crossover sits somewhere between a few hundred and about 1,500 copies depending on page count, sheet size and colours (T). Always quote both at the edge.
- Over-runs and under-runs: trade custom allows a delivered quantity a few percent either side of the order (T). Write "no under-run" on invitations, numbered editions and anything with a guest list.
- Every extra finish adds its own make-ready, tooling and spoilage; a three-finish card is often four times the price of the same card with one.

### 4.8 Lead times in India and the UAE

Planning values for October 2026, in working days from approved proof to delivery, assuming paper in local stock (T, from trade norms; confirm on each quote).

| Item | India | UAE | What extends it |
|---|---|---|---|
| Digital short run (cards, menus, look books under about 200 copies) | 2 to 4 | 2 to 4 | Specialty stock, hand finishing |
| Offset brochure, 16 to 48 pages, saddle stitched | 6 to 10 | 6 to 10 | Spot colours, special coatings |
| Perfect or PUR-bound book | 10 to 15 | 10 to 15 | Cover finishes, curing |
| Case-bound, Smyth-sewn book | 15 to 25 | 15 to 25 | Cloth and foil on the case |
| Letterpress duplex cards with edge paint | 7 to 12 | 10 to 15 | Die making, duplex curing |
| Foil block, emboss die | 2 to 5 to make | 3 to 7 to make | Sculpted brass dies take weeks |
| Custom rigid boxes | 15 to 30 plus a sample round | 20 to 40 plus a sample round | Imported wrap paper, magnets, inserts |
| Folding cartons | 10 to 20 | 15 to 25 | Cutting die, foil, window patching |
| Specialty paper not in local stock | 20 to 40 | 10 to 30 | Customs clearance, festival backlogs |
| Hoarding print and mount | 2 to 5 | 3 to 7 including permit checks | Municipal permits, weather |

Calendar effects: Diwali and the Indian wedding season (roughly October to February) load every printer, card maker and box maker in Delhi, Mumbai and Jaipur; book capacity weeks ahead. In the UAE, private sector working hours shorten by two hours a day during Ramadan, Eid closes workshops, and the midday outdoor work ban (12:30 to 15:00 from 15 June to 15 September) limits daytime installation.

## 5. Prepress and proofing

### 5.1 File preparation

- Format: PDF/X-4 is the house default (ISO 15930-7; PDF 1.6; live transparency, optional content (layers) and colour-managed RGB, CMYK and spot data with an output intent) (V: PDF/X, Wikipedia). PDF/X-1a (ISO 15930-1 and 15930-4; PDF 1.3 and 1.4; CMYK and spot only, flattened) when a packaging converter or an older RIP insists; Indian packaging converters often do. PDF/X-6 (ISO 15930-9, 2020, based on PDF 2.0) is ahead of most presses in both countries; ask first. Version table: 26-platform-and-format-specs-2026.md, section 6.8.
- Fonts: embed (subset) in the PDF. Outline type only for logos, for packaging when the converter's workflow requires it, and for display type that has been manually kerned and must not reflow. Keep a live-type master, because outlined text cannot be corrected at press.
- Images: linked, never embedded in InDesign; effective resolution checked in the Links panel; colour mode consistent with the export (RGB with ICC profiles for X-4, CMYK for X-1a).
- Spot colours: named exactly as in the Pantone library ("PANTONE 2685 C"); two spellings of one ink ("Pantone 2685 C" and "PANTONE 2685 C") create two plates. Delete unused swatches.
- Technical layers: dielines, foil, spot UV, emboss and white ink each on its own layer as a named spot colour ("Dieline", "Foil_Gold", "SpotUV", "Emboss", "White") set to overprint, so the printer can separate them and they never knock out the artwork beneath.
- Overprint settings: black text overprints, white objects knock out, rich black panels knock out.
- Minimums: rules at least 0.25 pt (0.088 mm); text under 10 pt in a single ink; reversed type in a four-colour build at 8 pt minimum and sturdier faces only (03-typography.md, section 14).
- Total ink: inside the profile's limit, 300 percent for FOGRA51 coated, 260 to 300 for uncoated (04-colour.md, section 10.3).

### 5.2 Preflight

- InDesign Live Preflight with a custom profile that encodes the printer's requirements (resolution floor, colour spaces allowed, spot count, minimum rule weight, overset text, missing links). Keep the profile per printer.
- Acrobat Pro: Print Production tools, Preflight (with the PDF/X-4 compliance and the printer's profile), Output Preview (separations and total area coverage with a highlight above the limit), and Overprint Preview turned on so overprint errors show. Acrobat's preflight engine is licensed from callas software, whose pdfToolbox printers also run; Enfocus PitStop Pro is the other common printer-side tool.
- Separations preview, plate by plate: each spot plate carries only what it should; the black plate shows text as K 100 only; the dieline plate does not appear in any printing separation; no RGB remains in an X-1a file.
- A two-person check before release: the designer exports, a second person preflights the exported PDF, which is what the press receives, against the spec sheet.

### 5.3 Proof types

| Proof | What it is | What it can judge | Cannot judge |
|---|---|---|---|
| Soft proof | On-screen simulation through the output profile on a calibrated display | Layout, gamut warnings, rough colour | Spot inks, metallics, paper feel, finishes |
| Digital contract proof | Inkjet proof made to ISO 12647-7:2016 with a Fogra Media Wedge CMYK V3 printed and measured, report attached | Process colour the press will be contracted to match | Paper texture, spot inks beyond simulation, finishes |
| Drawdown | Spot ink pulled by hand on the actual stock | Pantone, metallic and fluorescent appearance on the real paper | Anything else |
| Wet proof (press proof) | A short run on a proofing or production press on the actual stock | Everything about the print | Finishes, unless also made |
| White dummy | Blank pages on the specified stocks, bound as specified | Weight, bulk, spine width, opening, feel | Print |
| Prototype | A finished sample made by hand or on a cutting table (Esko Kongsberg is the common one) | Structure, fit, finishes, unboxing | Production consistency |
| Indigo proof | The final digital process on the final stock | Short-run jobs entirely; a fair preview for offset of the same stock | Offset dot and Pantone exactness |

House rule: contract proof plus drawdowns for every offset job; white dummy for every book and box; physical prototype for every rigid box and every carton before the die is approved; wet proof for packaging in a launch.

### 5.4 Colour bars and control strips

A colour bar on the press sheet (at the gripper or tail edge) carries solids of each ink, tints (25, 50, 75 percent), grey balance patches, overprint (trapping) patches and slur and doubling patches. The printer reads it with a spectrodensitometer (X-Rite eXact, Techkon SpectroDens) or with a closed-loop camera system on the press (Heidelberg Prinect Image Control and Axis Control), adjusting ink keys across the sheet. On proofs, the Fogra Media Wedge plays the same role. Ask to see the measured values for the OK sheet; a printer who cannot show them is matching by eye.

### 5.5 The press pass

Bring: the signed contract proof, approved drawdowns, the spec sheet with tolerances, a 10x loupe, a spectrophotometer if available, and the brand's physical colour references. Judge under the printer's D50 viewing booth (ISO 3664:2009); shop fluorescent tubes and window light start disputes.

Check, in this order:
1. The right file version, stock, grain and sheet (read the slug).
2. Register: the rosette and the register marks under the loupe; the fringe on small type.
3. Colour: brand solids against drawdowns, skin tones and product colour against the proof, grey balance neutral, density even across the sheet (compare left, centre and right).
4. Defects: hickeys (spots from dust or dried ink), ghosting, scumming, set-off, streaks, banding in gradients.
5. Back-up register (front against reverse on a sheet held to the light).
6. A fold or crease test on a sheet if the job folds; a scratch and rub test if it will be laminated or coated.

Press time is billed by the hour; decide within minutes and change one thing at a time. Sign the OK sheet, date it, keep one copy and leave one with the press. Ask for 10 to 20 sheets pulled at intervals through the run for receipt QC.

### 5.6 Tolerances

- Colour: the house tolerances in 04-colour.md, section 9.3 (brand solids 2.0 dE00 on contract proofs and 3.0 on press sheets, measured at nine positions; paper white within 2.0; secondary colours 4.0).
- Mechanical, planning values (T): plate register on sheetfed offset within about 0.1 mm; front-to-back register within about 0.5 mm; trim within about 0.5 to 1 mm; folds within about 1 mm; foil and emboss to print within about 0.3 to 0.5 mm; die cut to print within about 0.5 mm. Write the values on the spec; a printer who will not sign them is telling you the real tolerance.

### 5.7 The sign-off sheet

One page per job, signed at each gate: job name and number; client approver; file name and version with date; stock and grain; colours and named Pantones (C or U); screening; proof type and date; drawdown references; finishes with areas; binding and folding; quantity with over and under-run allowance; delivery address and date; tolerances; sign-off at proof, at press pass, at receipt; and a line for deviations accepted, with the reason. It settles every dispute later.

## 6. Packaging

### 6.1 Structure and dielines

A dieline is the flat drawing of a pack: cut lines, crease lines, perforations, glue areas, bleed and the panels' names. Conventions vary by converter; the common ones are solid lines for cuts, dashed lines for creases, dash-dot lines for perforations and hatched areas for glue, on a separate overprinting spot layer. Always get the dieline from the converter who will make the pack, because their board caliper changes every dimension by fractions of a millimetre.

- Read a dieline by naming each panel (front, back, sides, top tuck, dust flaps, glue flap) and checking which face the customer sees first on the shelf and in the hand. Artwork bleeds 3 mm past cuts; nothing important sits within 3 to 5 mm of a crease, because creases move print by up to a millimetre.
- Standard styles: the FEFCO Code catalogues corrugated styles by number (0201 is the regular slotted shipping box; 0427 is the die-cut mailer with a tuck-in lid that most e-commerce and PR boxes use); the ECMA Code does the same for folding cartons (reverse tuck end, straight tuck end, crash-lock or auto bottom, seal end, sleeves). Naming the code on a brief saves a round of drawings.
- Board grain direction on a carton affects panel bulge and crease quality; let the converter set it on the dieline and do not rotate the layout on the sheet to save board without asking.

### 6.2 Rigid boxes

Rigid (set-up) boxes are made from greyboard, 1.5 to 3 mm thick (1.5 for small jewellery boxes, 2 to 2.5 for most, 3 for hampers and large sets), with stayed (taped) corners, wrapped in a printed or specialty paper turned in 15 to 20 mm on the inside (T). Wrap papers in the 120 to 170 gsm range wrap cleanly; heavier sheets crack at corners and need scoring.

| Style | Construction | Feel | Use |
|---|---|---|---|
| Lid and base (telescope) | Separate lid over a base; full or partial telescope | Classic; the lid lifts with a slow vacuum draw when tolerances are right | Fragrance sets, hampers, apparel |
| Shoulder (neck) box | A neck or inner collar rises from the base; the lid closes onto it, showing a band of contrasting colour | The most expensive-reading box | Fragrance, jewellery, watches |
| Magnetic (book style) | A one-piece rigid box with a hinged flap held by hidden neodymium magnets | A soft click on closing | Beauty sets, tech accessories, gift sets |
| Drawer (slide) | A tray sliding out of a sleeve, often with a ribbon pull | A reveal in one movement | Chocolates, jewellery, invitations |
| Book style (clamshell) | Box opening like a hardcover book, sometimes with a spine print | Archive and collectable | Brand books, limited editions |
| Collapsible rigid | Folds flat with magnets or tabs and sets up in seconds | Saves freight and warehouse space | Exported sets from India to the Gulf |

The lid-and-base fit is the craft test: too tight and the lid sticks, too loose and it drops. Ask for a fit sample in the real wrap paper, because the paper's caliper changes the fit.

The luxury unboxing sequence, designed in order: a plain protective shipper (no logo, so it is not stolen in transit); a sleeve or band carrying the brand; the box; tissue closed with a seal; a card with a message; the product held in an insert; secondary items (dust bag, care card, certificate). Each layer should take one gesture to open, and none should need scissors.

### 6.3 Folding cartons

Folding cartons are die-cut from SBS or FBB board, usually 300 to 450 gsm, printed offset or flexo, finished, die cut, folded and glued on a folder-gluer. Common luxury upgrades: a heavier board, an inside print, a foil and emboss on the front, an uncoated or textured laminated face (a specialty paper laminated to board), and a crash-lock bottom so the product sits firm. A carton window with a plastic patch reads mass market; a die-cut aperture with no film reads crafted.

### 6.4 Labels and hang tags

- Facestocks: uncoated and felt-marked papers for wine, spirits, F&B and craft beauty; wet-strength label papers that survive an ice bucket; film facestocks (PP, PE, PET) for bathroom products; clear film for the "no label" look on glass.
- Adhesives: permanent, removable, freezer and wet-application grades; the converter chooses with the bottle and the filling line, because a label that wrinkles on a cold or wet bottle is an adhesive failure.
- Finishes: hot or cold foil, emboss (a raised label emboss reads strongly on wine), screen-printed tactile varnish, die-cut shapes.
- Formats: wrap labels on cylinders; front and back labels; neck labels and collars; hang tags on cord or ribbon (350 to 600 gsm, letterpress or foil, eyelet or punched hole); seals across closures as tamper evidence.

### 6.5 Glass and plastic decoration

- Screen printing on glass: organic inks cured by UV or heat, or ceramic inks fired onto the glass (applied ceramic labelling) for permanence; up to several colours with registration limits on curved surfaces.
- Hot stamping on glass and caps; vacuum metallising for caps and collars; spray coating (colour, gradient, matt lacquer) inside or outside the bottle; acid etching and sandblasting for frosted glass, or a frosting lacquer at lower cost.
- Moulded detail: a logo or texture in the glass mould itself, the most permanent mark and the most expensive, with high minimum order quantities. European flacon makers (Verescence, Pochet du Courval, Stoelzle, Estal) set the standard for fragrance; Indian glassmakers (PGP Glass, AGI Glaspac) supply most Indian beauty and spirits brands (T).
- Labels on curved surfaces: cylinders take a rectangular label; conical and tapered bottles need an arc (fan-shaped) label from the converter's calculation; compound curves need a shrink sleeve, printed with a pre-distortion grid supplied by the sleeve converter, or direct print.

### 6.6 Closures, inserts, tissue, ribbon and seals

- Caps: weight reads as quality in fragrance; zamac (zinc alloy) caps and surlyn caps are the heavy luxury options; magnets in caps add the click.
- Inserts: moulded pulp (wet-pressed for a smooth, fine surface that reads premium and recycles with paper; dry-pressed is the rough egg-tray look); folded paperboard inserts with no glue; board wrapped in paper or fabric. EVA foam is acceptable when cut cleanly and covered; exposed polyurethane foam and flocked plastic trays are cheap tells.
- Tissue: about 17 to 30 gsm, acid-free for silver and textiles (T); one-colour printed patterns; folded, never crumpled.
- Ribbon: grosgrain, double-faced satin, silk or cotton tape; woven or printed brand ribbon carries a minimum order; specify width, colour (by Pantone TCX or a physical sample), edge finish and length per pack.
- Seals: die-cut stickers on uncoated stock, embossed seals, and wax seals (section 9.6).

### 6.7 Fragrance and beauty conventions

The category vocabulary: a carton (FBB or SBS, often foil and emboss), the flacon or jar, a heavy cap, an insert holding the bottle centred, historically a cellophane overwrap (now being removed for sustainability), a batch code, and on cosmetics the period-after-opening symbol (an open jar with a number of months, such as 12M). Regulation: in India, the Cosmetics Rules, 2020 under the Drugs and Cosmetics Act, 1940 set the label particulars (name, manufacturer, batch, dates, ingredients); in the UAE, cosmetics labelling follows UAE.S GSO 1943 (U: read the current text before artwork). Refill systems are the strongest sustainability move in fragrance; Mugler's Angel has offered refills since its 1992 launch, which proves the format can carry luxury.

### 6.8 Jewellery packaging

- The layers: pouch (suede, microfibre, cotton flannel; anti-tarnish lining for silver), inner box (ring box with a slit insert, earring card, necklace box with a neck form, bangle box), outer box or carrier bag, and the paper: certificate, care card, invoice wallet.
- Certificates: diamond grading reports come from the laboratory (GIA, IGI); the brand's own certificate of authenticity is designed as an object, on heavy cotton stock or as a card-size (85.6 x 54 mm, ID-1) laminated card, with security features where counterfeiting is a risk.
- India: mandatory BIS hallmarking of gold jewellery began in phases in June 2021, and since 1 April 2023 hallmarked gold jewellery must carry a six-digit alphanumeric HUID (hallmark unique identification) (U: confirm the current scope). Show it on the certificate and the box with pride; buyers look for it. Red velvet boxes are the traditional expectation; a modern Jaipur or Mumbai house can break it, but should do so deliberately and with a material that feels as generous.
- The Gulf: gifting culture expects substantial boxes; weight and the sound of closure matter as much as the print.

### 6.9 Food packaging and FSSAI labelling in India

Governing texts: the Food Safety and Standards (Labelling and Display) Regulations, 2020, and the Legal Metrology (Packaged Commodities) Rules, 2011 for net quantity, retail sale price and consumer care details. The values below follow 26-platform-and-format-specs-2026.md, section 6.10, which could not read the regulations directly (U); read the consolidated FSSAI text before artwork.

- Mandatory declarations: name of the food; list of ingredients in descending order of weight; nutritional information; veg or non-veg mark; food additives; name and complete address of the manufacturer (and packer or brand owner); FSSAI logo with the licence number; net quantity; retail sale price inclusive of taxes; consumer care details; date marking (date of manufacture or packing, and use-by or best-before); batch or lot number; country of origin for imports; instructions for use where needed; allergen declaration.
- Veg and non-veg marks: a green filled circle inside a green-outlined square for vegetarian; a brown filled triangle inside a brown-outlined square for non-vegetarian (the triangle replaced the earlier brown circle under the 2020 regulations). The mark scales with the principal display panel: about 3 mm diameter up to 100 cm², rising to 8 mm above 2,500 cm².
- Nutrition panel: energy (kcal), protein, carbohydrate (with total and added sugars), total fat (with saturated and trans fat) and sodium, per 100 g or 100 ml and per serve, with the percentage contribution to recommended dietary allowance per serve. In July 2024 FSSAI approved showing total sugar, salt and saturated fat in bold and larger type; check whether the amendment is notified.
- Letter heights: Legal Metrology Table-I by principal display panel area (1.0 mm under 50 cm² up to 6.0 mm above 2,500 cm²); the house floor is 1.5 mm cap height for any mandatory text.
- Menus: food businesses with a central licence or outlets in ten or more locations must show calorie values on menus under the same regulations (U: confirm scope).
- House rule: lay out the regulatory panel first, have it approved by the client's regulatory lead, then design around it, because it cannot move once approved.

### 6.10 GCC labelling

Prepackaged food in the UAE follows UAE.S GSO 9 (labelling of prepackaged foodstuffs) and UAE.S GSO 2233 (nutritional labelling), administered by the Ministry of Industry and Advanced Technology (MoIAT, which absorbed ESMA, the Emirates Authority for Standardization and Metrology, in 2020), with enforcement by Dubai Municipality and ADAFSA in Abu Dhabi (U: read the current versions). Arabic is mandatory on the label; other languages may appear alongside. Production and expiry dates are mandatory on food. Saudi Arabia follows SFDA rules on the same GSO base. Design consequences: a bilingual pack needs Arabic and Latin set in matched families with equal optical size (03-typography.md, section 15), and a sticker over an imported pack satisfies the regulator while looking like an afterthought to the customer; print bilingual from the start.

### 6.11 Barcodes and QR codes

- EAN-13: nominal size 37.29 x 25.93 mm at 100 percent magnification, permitted from 80 to 200 percent; quiet zones of 11 modules left and 7 right; black bars on white or a light ground; never red, gold or metallic bars, because scanners read red as white and metallics as glare (U per 26-platform-and-format-specs-2026.md, section 6.9; verify against the GS1 General Specifications). GS1 India (prefix 890) and GS1 UAE (prefix 629) issue company prefixes.
- Placement: on the back or base panel, away from creases, seams and the curve of a narrow bottle; never truncated in height without the retailer's agreement.
- 2D codes: GS1 US's Sunrise 2027 programme (T) aims for retail point-of-sale scanners to read 2D codes (GS1 Digital Link QR codes and DataMatrix) by the end of 2027, which will let one code serve both checkout and consumer content.
- QR codes (ISO/IEC 18004): a quiet zone of four modules on every side; error correction levels L, M, Q and H restore about 7, 15, 25 and 30 percent of codewords (V: QR code, Wikipedia), so a small centred logo needs level H; minimum printed size about 20 mm for close reading and a size of about one tenth of the scanning distance (T). Test with three phones on the printed sample.

### 6.12 Sustainability directions

- Mono-material: an all-paper box with paper inserts, no lamination, no plastic window, no magnets glued into the board, so it recycles in one stream. Magnets and foam make a rigid box landfill in most Indian and Gulf municipal systems.
- Reduction: right-size the box to the product (the EU PPWR's limits on void space and on false bottoms and double walls (U, section 2.8) point the same way).
- Refill and reuse: refillable flacons and compacts; boxes designed to be kept (a drawer box that becomes a jewellery store).
- Certified fibre: FSC Mix or Recycled with the converter's CoC.
- Honest claims: claim only what can be documented. Greenwashing law is tightening in the EU and India's consumer protection framework issued guidelines on environmental claims (U: confirm current status before writing pack copy).

### 6.13 Unboxing design as content

An unboxing is filmed more often than it is seen in person; design it for a top-down camera. One reveal per layer; a contrast between the box interior and the product so the product reads instantly on a phone screen; an inside-lid print or message that only appears on opening; a sound (the magnet's click, the slow draw of a well-fitted lid, tissue paper); and no crumpled fillers. The PR mailer to creators is a separate object from the retail box: it carries a personal card, a reason to film, and nothing that breaks in a courier van. The campaign side of this sits in 19-campaigns-and-creative-direction.md, section 6.

## 7. Out of home

Out of home (OOH) is the oldest broadcast medium and the most physical: it is read in seconds, at distance, in weather, by people doing something else. 19-campaigns-and-creative-direction.md, section 6 carries the idea in the channel; this section carries the craft and the production.

### 7.1 Formats in India

Sizes are quoted in feet; confirm every site's exact visible area and frame from the media owner's site sheet, because two "40 x 20" sites in Mumbai can differ by a foot and in frame depth (T, sizes from trade practice and 26-platform-and-format-specs-2026.md, section 3.8).

| Format | Typical size | Where | Notes |
|---|---|---|---|
| Hoarding (billboard) | 40 x 20 ft (12.2 x 6.1 m), 30 x 20, 30 x 15, 20 x 10, 60 x 20 | Arterial roads, flyovers, rooftops | Front-lit or backlit; flex or vinyl. After the Ghatkopar hoarding collapse in Mumbai in May 2024, the Brihanmumbai Municipal Corporation capped new hoardings at 40 x 40 ft and tightened structural audits (U: check the current BMC policy) |
| Unipole | Faces commonly 40 x 20 or 30 x 15 ft, single or V-shaped double faces | Highways, expressway approaches | Long approach distances; size type for 100 m and more |
| Gantry | Spans the carriageway; sizes per structure | Expressways, toll plazas | Read head-on; very short text |
| Bus shelter | Panels about 6 x 4 ft (about 1.2 x 1.8 m), often backlit | City roads | Close reading, long dwell for waiting passengers |
| Metro | Pillar wraps, platform panels, station branding, train wraps, digital screens | Mumbai and Delhi metro networks | Sizes per network media kit; dwell on platforms is minutes |
| Airport | Digital totems (1080 x 1920), large LED walls, backlit panels, baggage belt and trolley branding, aerobridges | Mumbai T2 (CSMIA), Delhi T3 (IGIA) | Sold by the airport media concessionaire; the most affluent audience in Indian OOH; formats and sizes per the concessionaire's kit (U) |
| Mall | Portrait digital screens (1080 x 1920), atrium drops, escalator panels, standees | Premium malls in Mumbai, Delhi NCR, Bengaluru | Close range, slow walking dwell |
| Cinema | On-screen spots (DCP), lobby standees and screens | PVR INOX (merged in 2023) and others | On-screen delivery follows the DCP spec in 26-platform-and-format-specs-2026.md, section 5.8 |

### 7.2 Formats in the UAE

| Format | Typical size | Where | Notes |
|---|---|---|---|
| Unipoles | Faces of about 12 x 4 m and larger, static and digital | Sheikh Zayed Road (E11), the E311, Abu Dhabi corniche routes | Media owners include Backlite, Hypermedia and ELAN (T); digital faces run custom pixel maps |
| Lamp post banners | About 1.5 x 3 m per face (U) | Dubai and Abu Dhabi roads | Double-sided, sequences of many poles; good for a wordless brand mark repeated |
| Bridge banners | Per bridge | Over major roads | Vinyl or mesh, read head-on |
| Mupi (2 m² backlit) | 1185 x 1750 mm visible | Bus shelters, malls, airport | The six-sheet-sized backlit poster |
| Mall digital | 1080 x 1920 portrait screens, atrium LED walls | Dubai Mall (Emaar), Mall of the Emirates (Majid Al Futtaim) | Bilingual on the same face |
| Airport | 1080 x 1920 digital, landscape LED walls, backlit lightboxes | DXB, Abu Dhabi (Zayed International) | Sold by the airport concessionaire; confirm the current one and the kit (U) |

Permits and regulators: road advertising in Dubai is permitted by the RTA and Dubai Municipality and in Abu Dhabi by the municipal authority (U); the media owner holds the site permit, but the content may still need approval. Real estate advertising in Dubai carries a Trakheesi permit number from the Dubai Land Department; in India, project ads carry the RERA registration number, and in Maharashtra MahaRERA has required a QR code on project advertisements since 2023 (U: confirm current formats and placement rules before artwork).

### 7.3 DOOH pixel specifications

- Canvases: 1920 x 1080 landscape and 1080 x 1920 portrait for most screens; custom LED pixel maps for roadside and mall walls, delivered 1:1 at the native resolution. Native resolution is the wall width in millimetres divided by the pixel pitch: a 12 x 4 m face at P10 is 1200 x 400 px; at P6 it is 2000 x 667 px.
- Pixel pitch (distance between LED centres): P1.2 to P2.9 indoor close range, P3.9 to P4.8 events and indoor DOOH, P6 to P16 outdoor roadside. The minimum comfortable viewing distance in metres is roughly the pitch in millimetres (26-platform-and-format-specs-2026.md, section 5.11).
- Files: MP4 H.264 at 25 fps for video, JPG or PNG for statics, no audio unless the site is specified with sound (T). Spot lengths: 10 and 15 seconds in loops of about 60 to 120 seconds shared by several advertisers (T).
- Motion: roadside digital permits commonly restrict full-motion video and fast transitions because they distract drivers; plan static frames with quick dissolves for roadside and save motion for malls, airports and metro (U: read each site's permit conditions). Hold a readable frame from the first second, because viewers arrive mid-loop. Brand present in every frame.
- Minimum text height on an LED face: about 30 wall pixels (26-platform-and-format-specs-2026.md, section 5.11), and more for thin weights, because LED glow fills counters.

### 7.4 Type size by viewing distance

Two working rules from the sign trade (T): about 1 inch of cap height per 10 feet of distance for strong, at-a-glance legibility (distance divided by 120), and about 1 inch per 30 feet as the limit of legibility in good conditions for a sturdy sans (distance divided by 360). Condensed, light, script and high-contrast didone faces need more.

| Viewing distance | Impact cap height (d/120) | Minimum legible cap height (d/360) | Typical site |
|---|---|---|---|
| 5 m | 4 cm | 1.4 cm | Mupi, bus shelter from the pavement |
| 15 m | 12.5 cm | 4.2 cm | Bus shelter from the road, mall atrium |
| 30 m | 25 cm | 8.3 cm | City hoarding at a junction |
| 60 m | 50 cm | 17 cm | Hoarding on an arterial road |
| 120 m | 1.0 m | 33 cm | Unipole or highway hoarding at approach |

On a 40 x 20 ft hoarding (6.1 m tall) read at 60 m, the impact headline cap height is about 8 percent of the board's height; a typical luxury layout with a small serif line at 3 percent is unreadable from the road. The practical test: print the layout so that its width relates to your eye distance as the real board's width relates to the real viewing distance (a 12 m board at 60 m reads like a 12 cm print at 60 cm), and read it at a glance.

### 7.5 Word count, contrast and light

- The seven-word rule: an OOH maxim with no standard behind it, holding that a roadside headline should carry seven words or fewer. The reason is exposure time: at 60 km/h a car covers about 17 m a second, so a board legible from 150 m is in view for about nine seconds, of which a driver can spare a fraction; at 100 km/h the window is under six seconds. Traffic-light junctions and Mumbai's congestion give minutes, which is why the same campaign can carry more copy at a signal than on the Western Express Highway.
- Contrast: luminance contrast carries at distance while hue contrast fades; test in greyscale. Gulf and Indian midday sun flattens mid-tones and washes out pale palettes; luxury's muted palettes need a stronger value step outdoors than in print.
- Backlit against printed: backlit film and flex glow at night, so colours read lighter and more saturated than the front-lit daytime version; print backlit artwork with extra ink density (day-night printing) and proof it on a lightbox (T). Front-lit boards change colour under their lamps: warm sodium and cool LED floods shift skin and gold differently.
- Weather: Gulf sun fades solvent prints across a season; Mumbai's monsoon (June to September) brings wet installation, sagging flex and reflections. Plan replacement in the media contract.

### 7.6 The QR decision

Put a QR code on OOH only where people stand still within a few metres and the destination is worth the scan: bus shelters, metro platforms, airport gates, malls. Never on roadside formats, where a scan is unsafe and impossible. Size it to about one tenth of the scanning distance (a 2 m scan needs a 20 cm code) with a four-module quiet zone, use a dynamic code so the destination and tracking can change, and test with three phones on site before the campaign goes live. For Maharashtra real estate the QR is mandatory regardless (section 7.2), so design a place for it from the start.

### 7.7 Placement and dwell time

- Dwell time is how long the audience can look: seconds on a highway, a minute at a signal, several minutes on a metro platform or at an airport gate. Copy length, QR use and detail scale with dwell.
- Approach: the distance and angle from which the board is first legible, and whether it is on the driver's side (right-hand drive in India and left-hand drive in the UAE change which side of the road is easier to read).
- Clutter: a board among twenty others needs a single bold field of colour or image; a solitary board can afford quiet.
- Context: an airport audience is affluent and unhurried; a highway audience is captive but distracted; a mall audience is shopping. Luxury buys fewer, better sites and shows the product at a scale the eye cannot ignore.

### 7.8 Materials and printing

- Front-lit flex: PVC-coated polyester, about 280 to 440 gsm, printed solvent (T). Cheap and durable; reads coarse up close.
- Backlit flex and backlit film: translucent; film (polyester) is sharper and used in lightboxes and airport panels.
- Mesh: perforated vinyl for building wraps and windy sites, because it lets wind through.
- Self-adhesive vinyl: cast vinyl conforms to curves and lasts years (vehicles, curved walls); calendered vinyl is cheaper for flat, short-term use.
- Fabric: dye-sublimated polyester on tension frames; lighter, sharper, reusable frames, and the greener choice where structures allow.
- PVC flex restrictions: several Indian states and courts have restricted PVC flex for advertising (Kerala's 2019 measures are the most cited) and polyethylene-based and fabric alternatives are offered (U: check the municipal rule for each city).
- Print files for large format: CMYK or RGB per the printer's RIP (latex and UV printers often prefer RGB with a profile), 1:10 scale at 300 ppi for hoardings, 100 mm bleed at full size, and a printed proof strip of the brand colour and skin tone on the actual material.

### 7.9 Production, permits and installation

Allow 2 to 5 working days to print and mount a hoarding in India and 3 to 7 in the UAE including permit checks (T, section 4.8). Installation is often at night; monsoon and the UAE midday work ban (15 June to 15 September) affect daytime work. Ask for the mounting date, photographs of the mounted board, and a replacement clause for damage and fading. For DOOH, content approval by the media owner and sometimes the authority can take several days; submit early with a still of every frame.

### 7.10 Media buying literacy

A creative director must be able to read a media plan, whoever buys it. Static OOH in India is sold per site per month, often with a minimum period, with printing and mounting quoted separately (T); DOOH is sold by spot share of a loop over a period, and increasingly programmatically (Moving Walls and Vistar Media are programmatic DOOH platforms active in the region (T)). Ask for site photographs and approach videos, illumination hours, traffic or footfall data and its source, the share of voice in a loop, proof-of-display reports (time-stamped and geo-tagged photographs), and the replacement terms. Measurement in Indian OOH has no single industry currency (T), so compare vendors on audited data where offered and on site inspection where not. GST on outdoor advertising space is 18 percent and on print media space 5 percent (24-business-of-creative-and-agency-operations.md, section 3.6).

## 8. Retail and environmental

### 8.1 Signage systems and wayfinding

Wayfinding is the system that lets people find their way through a space: identification signs (you are here), directional signs (go this way), informational signs (what is here) and regulatory signs (what you must or must not do). It is planned from decision points: every place where a visitor chooses a direction gets a sign, and nowhere else.

- Type size: use the distance rules in section 7.4, with the impact column for primary directional signs read while walking and the minimum column only for confirmatory signs read when stopped. A sturdy, open sans with large counters at regular weight reads furthest; the brand's display face rarely belongs on a directional sign.
- Contrast: the UK's BS 8300 asks for a light reflectance value (LRV) difference of at least 30 points between sign and background and between sign and wall; the Dubai Universal Design Code (2017) sets the accessibility frame in Dubai (T). Matt surfaces, because gloss reflects light sources into the reader's eyes.
- Pictograms: ISO 7001 public information symbols and ISO 7010 safety signs are the shared vocabulary; the AIGA and US Department of Transportation symbol set (Roger Cook and Don Shanosky, 1974) is the model of a coherent family. Draw custom pictograms only when the brand earns them, and test recognition.
- Mounting heights: projecting and overhead signs clear head height; wall signs sit where the eye falls while walking. Confirm the local building code and the mall's fit-out manual, which in Gulf malls is strict.

### 8.2 Bilingual Arabic and English wayfinding

- Arabic takes the prominent position (right or top) with at least equal visual size to the English; UAE municipal and mall rules commonly require Arabic on signage and some require it first (U: confirm with the landlord's design manual and the permit).
- Match optical size: Arabic set in the same nominal size as Latin usually reads smaller, so scale it until the Arabic body height matches the Latin x-height.
- Pair purpose-designed families with an Arabic and Latin design (Dubai Font, the city's own Arabic and Latin family released in 2017; Frutiger Arabic; the 29LT families from 29Letters); 03-typography.md, section 15 covers the pairing.
- Lay out each language in its own column or band with its own alignment (Arabic ranged right, English ranged left), and place directional arrows at the outer edge of the sign on the side they point, so neither language is split by them.
- Numerals: Western digits are standard in UAE commercial use; Saudi signage may use Eastern Arabic digits (03-typography.md, section 15).

### 8.3 Vinyl, window graphics, lightboxes and SEG

- Window vinyl: cast vinyl for long life; frosted (etched-glass effect) vinyl for privacy bands and logos, the most luxurious window treatment for its restraint; perforated one-way vision film (Contra Vision is the original brand) for full window images that stay see-through from inside; reverse-printed optically clear film applied inside the glass so the graphic is protected.
- Lightboxes: edge-lit LED (slim, even light) or backlit; print on backlit film or fabric and proof on the actual box, because LED colour temperature and diffuser change every colour.
- SEG (silicone edge graphic): dye-sublimated polyester with a silicone strip sewn to its edge, pushed into a groove in an aluminium frame, giving a taut, frameless-looking graphic; backlit SEG lightboxes are the standard retail and exhibition lightbox. Graphics swap in minutes and fold for shipping, which suits seasonal retail and touring pop-ups.

### 8.4 Fixtures, props and visual merchandising basics

- Visual merchandising arranges product so it sells: a clear focal point per window or table, groups in odd numbers, a triangle or pyramid composition that leads the eye, the hero product at eye level (roughly 1.2 to 1.6 m from the floor (T)), and a refresh rhythm that gives returning customers something new.
- Jewellery display: lighting with a high colour rendering index (CRI 95 or more (T)) and a mix of diffuse light for metal and point light for stones; neutral linen, stone or leather grounds; no velvet in saturated colours unless it is the house code.
- Props: real materials at real scale; a prop that looks like a prop is a cheap tell in retail exactly as in photography (design-taste, SKILL.md section 3, Image).

### 8.5 Materials and fabrication tolerances

| Material | Character | Specify | Watch for |
|---|---|---|---|
| Acrylic (PMMA) | Clear or coloured, glossy, crisp edges | Cast acrylic for laser cutting and polished edges; 3 to 25 mm | Scratches, static dust, fingerprints; extruded acrylic chips when laser cut |
| Aluminium composite panel (ACM, Dibond) | Flat, rigid, light: two thin aluminium skins on a polyethylene or mineral core | 3 or 4 mm; direct UV print or wrapped in vinyl | Visible core at cut edges; fire-rated core needed for interiors in many codes |
| Brass | Warm, heavy, ages | Solid or plated; lacquered, PVD coated or left to patina | Tarnishes fast in coastal humidity (Mumbai, Goa, Dubai creekside); fingerprints |
| Stainless steel | Cool, durable | Brushed (No. 4) or mirror | Mirror finish shows every mark |
| Timber | Warm, human | Veneer on a stable core for large panels; solid for edges and small items | Moves with humidity: a Mumbai monsoon and Dubai air conditioning are opposite extremes |
| Stone | Permanence | Makrana marble from Rajasthan, Indian granites, imported marbles; honed over polished for luxury | Weight (about 2.7 tonnes per cubic metre for marble (T)), fragile corners, staining |
| MDF | Paintable, cheap | Sprayed 2-pack polyurethane paint for a fine finish | Swells with moisture; chips at edges |
| Fabric | Soft, acoustic | Fire-rated textiles for public interiors | Fire certificates required by mall and civil defence approvals |

Fabrication tolerances, planning values (T): laser cutting about 0.1 mm; CNC routing about 0.2 to 0.5 mm; joinery about 1 mm; site installation 3 to 5 mm. Design shadow gaps (3 to 5 mm recesses between materials) so tolerances disappear into a deliberate line; flush joints between different materials show every millimetre.

### 8.6 Event branding

- Backdrops and stages: one bold idea at scale beats a wall of logos. The step-and-repeat (a backdrop of repeated logos for photographs) is the default; alternatives that photograph better: a single mark at large scale on a textured material, a pattern drawn from the brand's archive, a floral or botanical wall in the brand palette, a sculptural monogram, or a lit typographic line.
- Stage and set: build in timber and fabric with SEG panels for graphics; specify LED wall pitch for the audience distance (section 7.3).
- Menus, place cards and table numbers: the guest touches them; uncoated cotton, letterpress or digital with VDP for names, calligraphy for a VIP table.
- Invitations as objects: section 9.6.
- Lanyards: woven ribbon with a woven mark reads better than printed polyester; metal or leather fittings; recyclable or reusable cards.
- Signage at events: boards on easels in timber or Dibond, never foam board for luxury (it bows, dents and shows its core).
- Fire safety: UAE venues require fire-rated materials with certificates for approval by Civil Defence; Indian venues increasingly ask for them (T).

### 8.7 Pop-ups and art installations

A pop-up is a temporary retail or experience space: modular, transportable, permitted. In the UAE, events and activations need permits (Dubai's Department of Economy and Tourism for events, mall approvals for in-mall spaces, Civil Defence for materials) (U); in India, malls and municipal authorities set the rules site by site. Art installations as brand gestures live at the calendar's art moments: India Art Fair in New Delhi (February), Art Dubai (spring), Dubai Design Week (November), the Kochi-Muziris Biennale (in its biennial cycle). A brand gesture works there when the brand commissions an artist and steps back, credits the artist first, and lets the work stand without a logo wall.

### 8.8 Craft and fabrication clusters

Specific vendor names change faster than this file; qualify every new vendor with a site visit, three references from comparable luxury jobs, and a paid sample. The clusters to know:

- Mumbai: the film and advertising set-construction trade builds event sets and pop-ups fast and to camera standard; large-format printers and packaging converters across the city and the Bhiwandi and Thane belts (T).
- Delhi NCR: Chawri Bazar for paper, invitations and their printers; event fabrication and production companies across Okhla, Noida and Gurugram; book printers in the NCR (Thomson Press and Replika Press are long-established names).
- Jaipur: Sanganer handmade paper and hand block printing on textile, Bagru block printing, brass and metal craft, stone carving, gem cutting and the jewellery trade around Johari Bazaar. The source for invitation wraps, pouches, place-card holders and installation craft.
- Hyderabad and beyond: Pragati Offset (Hyderabad) has a reputation for art-book printing; Manipal Technologies (Manipal) for large-scale secure and commercial print; Parksons Packaging and TCPL Packaging for folding cartons (T).
- Dubai and Sharjah: printing and fabrication workshops in Al Quoz, Dubai Investments Park and Sharjah's industrial areas; exhibition contractors who serve Dubai World Trade Centre; established printers include Emirates Printing Press and Al Ghurair Printing and Publishing in Dubai and United Printing and Publishing in Abu Dhabi (T).

## 9. Stationery and collateral at a luxury standard

### 9.1 Business cards

| Size (mm) | Where | Note |
|---|---|---|
| 85 x 55 | UK and most of Europe | The house size for Mask360 and clients in both countries (26-platform-and-format-specs-2026.md, section 6.2) |
| 89 x 51 (3.5 x 2 in) | United States, Canada | Use for US-facing roles only |
| 90 x 55 and 90 x 50 | India (both conventions), Australia | The Indian printer's default |
| 90 x 54 | China, Hong Kong, Singapore | |
| 85.6 x 54 | ISO/IEC 7810 ID-1 (credit card) | For cards that must fit a card slot, and for certificates |

The luxury specification: 600 gsm or more, usually two 300 to 350 gsm sheets duplexed (or a single 700 gsm board), uncoated cotton or Colorplan; one or two colours letterpress with a deep impression, or a single pigment foil; blind deboss for the mark; edge paint in one colour; square or 3 to 4 mm round corners consistent with the suite. Bilingual Arabic and English cards (Arabic on the reverse) are expected for UAE government-facing roles. A 300 gsm laminated card with spot UV is the opposite of all this, and it is section 11's first exhibit.

### 9.2 Letterheads and envelopes

- Letterhead: A4, 100 to 120 gsm uncoated, laser and inkjet compatible (ask the mill for the "digital" or "laser guaranteed" version of the range); offset print the letterhead and keep letterpress light or off it, because deep impression jams office printers and the letter will be printed in an office. Supply a matched Word and Google Docs letterhead file with the same margins and type so letters printed in the office match the printed stock.
- Envelopes: DL (110 x 220 mm) for A4 folded in three, C5 (162 x 229) for A4 folded once, C4 (229 x 324) for flat A4, C6 (114 x 162) for A6 cards (26-platform-and-format-specs-2026.md, section 6.1). Luxury details: a deep V flap (wallet or diamond flap), a printed or paper liner, gummed flaps for hand-addressed mail, a matching stock to the letterhead (order envelopes converted from the same paper so the whites match).

### 9.3 Notecards

A6 or A7 flat cards at 600 gsm or more with matching lined envelopes, or folded notecards on 300 to 400 gsm; the monogram or name blind debossed or letterpressed; boxed in sets of 10 or 25 with tissue. They carry handwriting, so uncoated, fountain-pen safe stock is mandatory.

### 9.4 Menus and wine lists

- Paper: uncoated 250 to 350 gsm for single sheets; covers in cloth-bound board, leather, linen or heavy cotton.
- Binding and update strategy: separate the durable from the disposable. A durable cover or folder (cloth, leather, timber board) holds replaceable inner pages by screw posts, elastic cord, corner pockets or a clip; the inner pages are printed on digital presses or in-house laser printers on a laser-guaranteed uncoated stock, so a dish or vintage change costs a page and an hour. Daily menus on a single sheet are printed in-house each service.
- Wipeable laminated menus belong to casual dining; luxury replaces a soiled page.
- Legibility in low light: candlelight and dimmed restaurants need about 10 to 11 pt text minimum, strong value contrast, and no thin weights on tinted stock (T; 03-typography.md, section 14).
- Wine lists: longer, so a perfect, sewn or screw-post binding; tab dividers by region; vintages updated by page.
- India: calorie display and veg and non-veg marks apply to menus in scope of the FSSAI rules (section 6.9).

### 9.5 Hotel in-room collateral

The set: welcome card (letterpress, personalised by VDP), in-room directory (now mostly a QR code or tablet, with a printed one-page essentials card), privacy and make-up-room door hangers (die-cut 600 gsm board, leather or timber), pillow and turndown menus, notepads (glued pads of 80 to 100 gsm uncoated that take pencil), laundry lists, amenity labels (waterproof synthetic labels on bathroom bottles), key card sleeves. Design for housekeeping: every item is replaced, often daily, so cost per room night and storage matter; a durable holder with replaceable inserts serves both luxury and budget. Sustainability expectations in 2026 push hotels to fewer printed items, recycled and FSC stocks, and refillable amenities.

### 9.6 Invitations

- The suite: card (600 gsm or more, duplexed cotton, letterpress or engraved), envelope (lined), inner envelope for formal events, RSVP card and envelope or a QR to an RSVP page, details card, map, belly band or ribbon, wax seal.
- Wax seals: real sealing wax cracks in the post and softens in a hot courier van; adhesive-backed flexible wax seals, made in advance, survive courier handling in both climates (T).
- The courier reality: Indian couriers (Blue Dart, DTDC and others) and UAE couriers (Aramex, Emirates Post) handle envelopes roughly; boxed invitations travel better but cost by volumetric weight (length x width x height in cm divided by 5,000 is the common express divisor (T)). Indian weddings often hand-deliver invitations with a gift box of sweets or dry fruit; design the box for that ritual and for hand carrying.
- Personalisation: guest names by VDP or by a calligrapher; hand addressing is slow and a calligrapher's diary fills in wedding season, so book weeks ahead for large lists.
- Lead time: a full letterpress suite with duplex and edge paint takes two to three weeks from approved proof, longer in wedding season (section 4.8).

### 9.7 Look books and brand books

- Format: an editorial proportion (for example 230 x 300 mm or 240 x 320 mm) reads as a book; A4 reads as a report. Landscape suits architecture and real estate; portrait suits fashion and jewellery.
- Paper: mix stocks by signature (a smooth high-white or matt coated for photography, an uncoated tinted stock for text and section openers, a translucent fly sheet at the opening); check that the printer can run each stock and that the bulk adds up to the spine.
- Binding: Swiss binding or Smyth sewn with an exposed spine for brand books; Singer sewn for slim look books; case bound for anniversary books (section 1.11).
- Print run: brand books and look books often run 100 to 500 copies, which sits at the digital and offset crossover; quote both (section 4.7).
- Protection: a glassine wrap, a belly band or a slipcase; shrink-wrapping reads mass market.

### 9.8 Press kits

Most press material in 2026 is digital: a press room page and a downloadable image library. The physical press kit survives for launches as an object: a box or folder with a printed fact sheet, a few image cards, a product sample where possible, and a QR to the digital room. Beauty and fashion PR mailers to editors and creators follow the unboxing rules in section 6.13; a USB stick in a press kit is obsolete.

## 10. Working with printers and fabricators

Vendor sourcing, briefing and quoting in general sit in 24-business-of-creative-and-agency-operations.md, section 7 and production timelines in 19-campaigns-and-creative-direction.md, section 14. This section is the print-specific layer.

### 10.1 The spec sheet

Every print and packaging job goes out on one spec sheet, the same sheet to every bidder. Fields:

| Field | Example |
|---|---|
| Job name, number, version, date | "Aster Hotel welcome card, AHW-014, v3, 12 October 2026" |
| Quantity and allowance | 2,000; no under-run; over-run up to 2 percent |
| Finished size and orientation | 85 x 55 mm, landscape |
| Flat size and folds | Flat 170 x 55 mm, half fold on the long side |
| Pages and binding | 32 pages plus 4-page cover, Swiss bound, sewn block |
| Stock, every part | GF Smith Colorplan Pristine White 350 gsm, duplexed to 700 gsm; grain parallel to the 55 mm edge; FSC Mix |
| Colours, each side | 2/0: PANTONE Black 6 U and PANTONE 7584 U letterpress; reverse unprinted |
| Screening | AM 175 lpi or FM 20 micron, for image pages |
| Coatings | Aqueous matt on cover only |
| Finishes, each with area and tooling owner | Blind deboss mark 20 x 20 mm, brass die supplied by printer; edge paint PANTONE 7584 U |
| Proofs | Contract proof (ISO 12647-7), drawdowns of both Pantones on the stock, white dummy, physical sample of the finished card |
| Press pass | Yes, client art director attending |
| Tolerances | Brand solids 3.0 dE00 on press; register within 0.3 mm; trim within 0.5 mm |
| Packing | Bands of 50 in glassine, cartons of 500, labelled with job number and quantity |
| Delivery | Address, contact, date, partial deliveries, delivery mode |
| Tax, payment and validity | GST or VAT shown separately; payment terms; quote validity in days (paper prices move) |

### 10.2 Getting quotes

- Three quotes, like for like, on the same spec sheet; quotes on different specifications cannot be compared and invite substitution.
- Ask for a breakdown: paper, plates and make-ready, printing, each finish and its tooling, binding, packing, delivery, tax. The breakdown shows where a cheap quote cut (usually the paper, the proof or the finish).
- Treat an outlier low quote as a question: ask which line is cheaper and why. A lower paper line often means a different mill or weight.
- Ask for paper to be quoted with mill, range and weight named; "equivalent" is how a Colorplan job arrives on local board.
- Confirm validity and what moves the price (paper rates, exchange rate for imported stock, quantity changes).

### 10.3 Proofs, approvals and the press pass

Follow section 5: contract proof and drawdowns signed by the client; physical samples for finishes; the press pass for brand-critical work; the sign-off sheet at every gate. Never approve a finish from a PDF mock-up; approve it from a physical sample on the job stock.

### 10.4 Delivery, storage and QC on receipt

- Paper and print are hygroscopic: they take up and lose moisture. Mumbai's monsoon humidity curls sheets and waves edges; Dubai's air-conditioned dryness makes them brittle and static. Ask printers to acclimatise paper in the press room before printing (often a day or two (T)), and store finished goods flat, wrapped, off the floor, away from sun and air-conditioning vents.
- Receipt QC: count the cartons and sample the contents; inspect a sample sized by an acceptance sampling plan (ISO 2859-1 defines the usual AQL tables) against the signed OK sheet under D50; check colour across items in a suite (cards against letterheads against envelopes, side by side); check finishes (foil register, emboss depth, edge paint coverage), set-off, scuffs, trim and fold accuracy, and packing. Record defects with photographs on the day of delivery; claims made later are weaker.
- India: goods moved by road above Rs 50,000 in value need an e-way bill generated on the GST system (some states set different intra-state thresholds); ask the printer to raise it so a delivery is not held at a checkpoint.

### 10.5 Common failures and how to prevent them

| Failure | Usual cause | Prevention |
|---|---|---|
| Colour differs from the screen | Uncalibrated display, wrong profile, approval from a PDF | Soft proof, convert through the printer's profile, contract proof, press pass |
| Colour differs between items in a suite | Different printers, stocks, processes or blacks | One printer per suite, one stock family, one rich black, a side-by-side receipt check |
| Pantone wrong | Approved from a screen or a coated chip for an uncoated job | Drawdowns on the job stock signed before press |
| Cracked folds | No crease, crease against the grain, heavy ink or laminate on the fold | Crease before folding; grain parallel to fold; aqueous coating in place of laminate |
| White scuffs on dark packs | Matt or soft-touch film rubbing in transit | Anti-scuff film or coating; sleeves; rub test on samples |
| Misregistered foil | Paper stretch between passes, wrong tolerance designed in | Avoid foil butting printed edges; overlap or gap of 0.5 mm; sample approval |
| Banding in gradients | Too few tonal steps, long gradients on inkjet | Noise in gradients; FM screening; proof on the real printer |
| Set-off and sticking | Too much ink, stacked too soon, no coating | Respect total ink limits; coating or UV inks; drying time in the schedule |
| Wrong paper | Substitution, "equivalent" stock | Name mill, range, shade and weight; inspect a delivery sample before printing |
| Short delivery | Spoilage on finishes, no over allowance | State "no under-run"; order a finishing allowance; count on receipt |
| Late delivery | Imported paper, festival backlog, sample rounds not planned | Book paper at estimate; plan around Diwali, wedding season, Ramadan and Eid |
| Box lid too tight or loose | Fit sample made in a different wrap paper | Fit sample in the real paper; tolerance written on the spec |

### 10.6 Tax and duty

- India: print and packaging supplies fall across the 5 and 18 percent GST slabs that the reform of 22 September 2025 created (with 40 percent for sin and luxury goods) (V: Goods and Services Tax (India), Wikipedia); the rate depends on whether the supply is classified as goods (printed matter, cartons, boxes, by HSN code) or a printing service (by SAC code). Confirm the code and rate on the vendor's tax invoice with the chartered accountant before quoting the client. Advertising and design services remain at 18 percent and print media space at 5 percent (24-business-of-creative-and-agency-operations.md, section 3.6).
- UAE: VAT at 5 percent on print, packaging and fabrication.
- Imports: GCC customs duty of 5 percent of CIF value on most goods into the UAE; into India, specialty paper attracts basic customs duty, the social welfare surcharge calculated on that duty, and IGST (U: confirm the current tariff line in the CBIC customs tariff for the specific paper). The landed cost of imported stock is a multiple of its mill list price once freight, duty, tax and merchant margin stack; get the merchant's landed price per sheet.

## 11. The cheap print tells and their fixes

The general cheap tells live in design-taste, SKILL.md section 3. These are the print and physical ones a client will feel before they can name.

| Tell | Why it reads cheap | Fix |
|---|---|---|
| Gloss lamination on everything | Mass-market gloss, glare, fingerprints, plastic feel | Uncoated stock, aqueous coating where protection is needed, gloss only as an idea |
| Gold foil as the default luxury signal | The most imitated luxury cue in India and the Gulf; often a bright yellow gold | Blind deboss, tone-on-tone foil, pale or matt gold on one element, or no foil |
| 300 gsm business cards | Flexes in the hand; the weight of every card in the city | 600 gsm or more duplexed; edge paint; letterpress or deboss |
| Pixelated or soft logos | A raster logo stretched, or a low-resolution file from a website | Vector master files; effective resolution checked in preflight |
| Rich black mismatch | Two blacks side by side: K 100 text on a rich black panel, a photograph's black against a panel | One rich black build per job; match the image blacks; Appearance of Black set to accurate |
| Colour shift between items in a suite | Different printers, stocks and processes | One printer, one stock family, side-by-side QC under D50 |
| Misregistered foil | A gap or overlap where foil meets print | Design foil with its own margin; approve on a physical sample |
| Banding in gradients | Visible steps in a sky or a backdrop | Noise, FM screening, shorter gradients, proof on the real device |
| Wrong paper for the brand | Blue-white gloss for a heritage brand; kraft for a jewellery house | Choose stock from the brand's material world (design-taste, SKILL.md section 5, Colour and Material) |
| Oversized logos | Insecurity: the logo shouting on a card, a box or a hoarding | Scale the mark down until it whispers; let material and space carry the brand |
| Tiny margins | Crowded edges, guillotine drift visible on thin borders | Generous margins, at least 8 to 10 mm on cards and 15 to 20 mm on A4; borders of 10 mm or none |
| Cracked folds | White lines through dark panels | Crease, grain, coating choice (section 1.12) |
| Scuffed soft-touch | White marks on a black box on arrival | Anti-scuff film, sleeves, uncoated alternatives |
| Thermography | Glossy raised type imitating engraving | Engraving, letterpress or blind deboss |
| Spot UV logo on matt laminate | The default of corporate collateral | Remove, or use spot gloss as a texture across the surface |
| Plastic windows and foam inserts | Mass retail packaging cues | Die-cut apertures with no film; moulded pulp or wrapped board inserts |
| Grey-backed duplex carton | Cheap board visible when opened | SBS or FBB; print the inside |
| Shrink-wrap on books | Supermarket cue | Glassine, belly band or slipcase |
| Foam board event signs | Bows and dents; core shows at the edge | Timber, Dibond or framed fabric |
| Coarse flex hoarding with small type | Unreadable, and grainy up close | Type sized to distance (section 7.4), fabric or film for close formats |

## 12. Reference tables

### 12.1 Paper weights by use

| gsm | Use | Luxury note |
|---|---|---|
| 45 to 52 | Newsprint | Newspaper wraps and inserts only |
| 80 to 100 | Book text, notepads, inner pages of long documents | High-bulk 90 to 100 gsm uncoated for books that should feel substantial |
| 100 to 120 | Letterheads, compliment slips | Uncoated, laser-guaranteed |
| 120 to 170 | Brochure and look book text, flyers, box wraps | 150 to 170 for image pages; 120 to 170 wrap rigid boxes cleanly |
| 200 to 250 | Brochure covers, folders, inserts | 250 uncoated for menu pages |
| 250 to 350 | Covers, cards, menus, hang tags, invitations (single ply) | 350 is the floor for a card that will be handled |
| 400 to 700 | Luxury cards, invitations, place cards | 600 to 700 single board or duplexed |
| 700 to 1,400 | Duplexed and triplexed boards | Edge paint and coloured cores |
| 1.5 to 3 mm greyboard | Rigid boxes, book cases | 2 to 2.5 mm for most boxes |

### 12.2 Screen ruling by process and paper

| Process and paper | Typical ruling | Older and lower-quality guidance | Note |
|---|---|---|---|
| Sheetfed offset, coated | 150 to 175 lpi | 133 lpi | 200 lpi and above for art books on premium coated, or FM screening (T) |
| Sheetfed offset, uncoated | 120 to 150 lpi | 85 to 133 lpi | FM screening sharpens uncoated detail (T) |
| Heatset web, coated magazine | 133 to 150 lpi | 120 lpi | |
| Coldset newsprint | 85 to 100 lpi | 65 to 85 lpi | Higher with modern CTP and good stock (T) |
| Flexo labels | 120 to 150 lpi | 100 lpi | HD flexo higher (T) |
| Flexo post-print corrugated | 60 to 100 lpi | 45 to 65 lpi | Use litho-lamination for fine images |
| Screen printing | 45 to 85 lpi | | Halftones coarse by nature |
| Risograph | Fixed by machine, about 100 to 200 lpi equivalent or grain (T) | | |

### 12.3 Bleed and safe area by product

| Product | Bleed | Safe area |
|---|---|---|
| Business cards, postcards, place cards | 3 mm | 4 to 5 mm |
| Brochures and look books | 3 mm | 5 mm; 8 mm at the spine of perfect and PUR binding; more at the fore edge of saddle-stitched books with creep |
| Book covers and jackets | 3 to 5 mm; 15 to 20 mm turn-in on cased covers | 10 mm from spine hinges |
| Posters A2 and larger | 5 mm | 10 mm |
| Folding cartons and labels | 3 mm beyond cut lines | 3 to 5 mm from every crease and cut |
| Rigid box wraps | Turn-in of 15 to 20 mm | Keep art off corners and turn-ins |
| Roll-ups and exhibition panels | Per supplier, often 10 mm plus the base cassette area | 50 mm |
| Banners | 10 to 25 mm plus hems and eyelets | 50 mm |
| Hoardings | 100 mm at full size | 300 mm |

Source for the full set: 26-platform-and-format-specs-2026.md, section 6.5.

### 12.4 Standard sizes

| Item | Size |
|---|---|
| A0, A1, A2, A3 | 841 x 1189, 594 x 841, 420 x 594, 297 x 420 mm |
| A4, A5, A6 | 210 x 297, 148 x 210, 105 x 148 mm |
| SRA3, SRA2, SRA1 press sheets | 320 x 450, 450 x 640, 640 x 900 mm |
| B2 and B1 press sheets (trade) | about 500 x 700 and 700 x 1000 mm |
| Business cards | 85 x 55 (Europe, house), 89 x 51 (US), 90 x 55 and 90 x 50 (India), 90 x 54 (China, Hong Kong, Singapore) mm |
| Envelopes | DL 110 x 220, C6 114 x 162, C5 162 x 229, C4 229 x 324 mm |
| Posters | A2 to A0; 24 x 36 in (US); cinema one sheet 27 x 40 in |
| Bus shelter and mupi | About 1200 x 1800 mm; 1185 x 1750 mm visible on the 2 m² mupi |
| Indian hoardings | 40 x 20, 30 x 20, 30 x 15, 20 x 10, 60 x 20 ft |
| UAE unipoles | Faces of about 12 x 4 m and larger |
| DOOH screens | 1920 x 1080, 1080 x 1920, LED walls at native pixel map |

### 12.5 Type size by viewing distance

| Distance | Impact cap height | Minimum legible cap height | In feet and inches (impact) |
|---|---|---|---|
| 1 m (handheld sign, menu board) | 8 mm | 3 mm | 3.3 ft: 0.3 in |
| 5 m | 4 cm | 1.4 cm | 16 ft: 1.6 in |
| 15 m | 12.5 cm | 4.2 cm | 49 ft: 4.9 in |
| 30 m | 25 cm | 8.3 cm | 98 ft: 9.8 in |
| 60 m | 50 cm | 17 cm | 197 ft: 19.7 in |
| 120 m | 1.0 m | 33 cm | 394 ft: 39 in |

Rules from section 7.4 (T): impact at distance divided by 120 (1 inch per 10 feet); minimum at distance divided by 360 (1 inch per 30 feet). Add size for light, condensed, script and high-contrast faces, for night viewing of front-lit boards, and for older audiences.

### 12.6 Finish cost tiers

Relative tiers for a short luxury run (500 to 2,000 pieces) in India and the UAE; prices move with quantity, sheet size and city, so use tiers to choose and quotes to decide (T).

| Tier | Finishes | Tooling | What drives the cost |
|---|---|---|---|
| 1, negligible | Aqueous coating, oil varnish, round corners, simple crease and fold | None or minimal | Make-ready time |
| 2, modest | Gloss or matt lamination, spot gloss varnish, simple die cut, perforation, flat pigment or metallic foil on a small area | Simple die or plate | Set-up and spoilage |
| 3, considered | Blind deboss or emboss, hot foil with a copper die, soft-touch anti-scuff film, digital foil with VDP, Singer sewing, screen-printed white on dark stock | Dies and blocks per design | Tooling and slower running speeds |
| 4, premium | Letterpress with deep impression, duplexing, edge painting, laser cutting of filigree, combination foil and emboss, Smyth sewn binding, wax seals, ribbons | Plates, dies, hand work | Hand finishing, multiple passes, curing time |
| 5, exceptional | Sculpted multi-level brass dies, engraving (die stamping), real gold leaf edge gilding, triplexed boards with coloured cores, custom rigid boxes with shoulders and magnets, moulded glass details | Hand-engraved dies, moulds | Craft hours, minimum order quantities, lead time |

The house rule: one tier 3 to 5 finish per piece, chosen for the idea; the budget saved on the second and third finishes buys a better paper, which the hand notices first.

## Terms introduced

- AM screening: amplitude modulated halftoning that varies dot size on a fixed grid at fixed angles per ink.
- Anilox roller: an engraved roller that meters a controlled film of ink onto a flexo plate.
- Applied ceramic labelling: ceramic ink screen printed onto glass and fired for a permanent decoration.
- AQL sampling: acceptance sampling by an acceptable quality limit, with sample sizes from ISO 2859-1 tables.
- Aqueous coating: a water-based protective coating applied inline by a coating tower.
- Arc label: a fan-shaped label calculated to sit straight on a conical or tapered container.
- Art paper and art card: Indian trade names for coated paper and coated board.
- Backlit film: translucent polyester printed for lightboxes and illuminated panels.
- Bleed: image extended beyond the trim line so trimming leaves no white edge.
- Blind emboss: a raised impression with no ink or foil.
- Bulk: caliper divided by grammage, the measure of how thick a sheet is for its weight.
- Caliper: the thickness of a sheet, in micrometres.
- Case binding: hardcover binding with a text block glued into a case of board covered in cloth, paper or leather.
- Chain of custody (CoC): FSC or PEFC certification that each company handling certified material keeps it traceable.
- Cold foil: foil transferred onto a printed adhesive and cured inline, with no heated die.
- Combination die: a brass die that foils and embosses in one pass.
- Contract proof: a proof made to ISO 12647-7 that the press is contracted to match.
- Crash-lock bottom: a carton base that locks into place when the carton is opened.
- Creasing (scoring): pressing a channel into board so it folds without cracking.
- Creep (shingling): the outward push of inner pages in a saddle-stitched book, compensated in imposition.
- Day-night printing: extra ink density or a second printed layer on backlit material so it reads in daylight and when lit.
- Deboss: an impression pressed into the sheet.
- Deckle edge: the soft, uneven edge of handmade or mould-made paper.
- Die cutting: cutting shapes, creases and perforations with a steel-rule die.
- Die stamping: the British stationers' term for engraving.
- Dieline: the flat technical drawing of a pack's cuts, creases, glue areas and panels.
- Digital embellishment: inkjet-applied raised varnish and foil that needs no die.
- Drawdown: a spot ink pulled by hand on the actual stock to show its true appearance.
- Dry-back: the gloss difference between printed and unprinted areas as ink dries on coated stock.
- Duplex board: Indian trade name for coated recycled board with a grey back.
- Duplexing: laminating two sheets together into one thicker board.
- Dwell time: how long an audience can look at an OOH site.
- E-way bill: India's electronic document for moving goods above Rs 50,000 in value.
- ECMA Code: the catalogue of standard folding carton styles.
- Edge painting: colouring the edges of finished cards or books.
- Effective resolution: an image's pixel count divided by its printed size, in ppi.
- Engraving (intaglio): printing from ink held in a recessed die, giving a raised image.
- Exposed spine: a binding that leaves sewn signatures visible at the spine and lies flat.
- FBB: folding boxboard, a carton board with a mechanical pulp middle between chemical pulp layers.
- FEFCO Code: the catalogue of standard corrugated box styles, such as 0201 and 0427.
- Felt-marked paper: paper textured by the felt of the paper machine.
- Flexography: printing from flexible relief plates inked by an anilox roller.
- Flute: the wave-shaped middle layer of corrugated board, graded A, B, C, E and F by height.
- FM screening: frequency modulated (stochastic) halftoning with a fixed tiny dot whose density varies.
- FSC: Forest Stewardship Council, the forest certification scheme with 100%, Mix and Recycled labels.
- Gate fold: a fold where two outer panels close over a centre panel like doors.
- Grain direction: the alignment of fibres in the machine direction of a sheet.
- Gravure: printing from engraved cylinders, economic on very long runs.
- Greyboard (kappa board): rigid recycled board used under wraps in rigid boxes and book cases.
- Gripper edge: the unprintable sheet margin held by the press grippers.
- Hickey: a spot or ring on a printed sheet caused by dust or dried ink.
- Hot foil stamping: transferring foil from a carrier with a heated metal die.
- HUID: hallmark unique identification, the six-digit alphanumeric code on BIS-hallmarked gold jewellery in India.
- Imposition: arranging pages on a press sheet so they read in order after folding and trimming.
- Kiss cutting: cutting through a label's face material while leaving its liner intact.
- Kiss impression: letterpress printing with ink transfer and no visible bite.
- Knockout: an object that removes the inks beneath it.
- Laid paper: paper carrying parallel laid lines and chain lines from a dandy roll.
- Latex printing: large-format inkjet with water-based latex inks, odourless and dry on exit.
- Letterpress: relief printing from raised inked surfaces pressed into the sheet.
- Liquid electrophotography (LEP): HP Indigo's digital process using liquid ElectroInk.
- Litho-lamination: an offset-printed sheet laminated onto corrugated board.
- Low-migration ink: ink formulated to limit transfer of substances into packaged food.
- LRV: light reflectance value, the share of light a surface reflects, used to set sign contrast.
- Make-ready: setting up a press or finishing machine for a job, including waste sheets.
- Maplitho: Indian trade name for uncoated woodfree printing paper.
- Moiré: an interference pattern from overlapping regular grids.
- Moulded pulp: fibre formed in moulds into inserts and trays.
- Mupi: a 2 m² backlit street poster unit at bus shelters, malls and airports.
- Nick: a small uncut tie that holds a die-cut piece in its sheet during stripping.
- OBA: optical brightening agent, a fluorescent additive that makes paper look whiter.
- Opacity: the share of light a sheet blocks, which governs show-through.
- Overprint: printing an object on top of the inks beneath it.
- PDF/X-1a: a print PDF standard allowing only CMYK and spot colour, flattened.
- PDF/X-4: a print PDF standard allowing live transparency, layers and ICC-managed colour.
- Perfect binding: a softcover binding with the page block glued at the spine.
- Period-after-opening symbol: an open-jar icon showing how many months a cosmetic lasts once opened.
- Pigment foil: a non-metallic coloured foil.
- Pixel pitch: the distance between LED centres on a screen, in millimetres.
- Preflight: an automated check of a file against print requirements.
- Press pass: approving the first good sheets at the press before the run.
- Principal display panel (PDP): the face of a pack the consumer sees at retail.
- PUR binding: binding with polyurethane reactive glue, stronger and more flexible than hot-melt.
- Quality factor: the ratio of image ppi to screen lpi, usually 1.5 to 2.
- Quiet zone: the blank margin a barcode or QR code needs to scan.
- Registration black: 100 percent of all four process inks, for printer's marks only.
- Rich black: black ink supported by cyan, magenta and yellow for deep solids.
- Rigid box: a set-up box of wrapped greyboard that does not fold flat.
- Risograph: a stencil duplicator printing one soy-ink drum colour per pass.
- Rosette: the circular pattern of AM halftone dots seen under a loupe.
- Saddle stitch: binding with wire staples through the fold of nested sheets.
- Safe area: the inset from trim inside which important content stays.
- SBS: solid bleached sulphate, a virgin white carton board.
- Screen ruling (lpi): the number of halftone lines per inch.
- SEG: silicone edge graphic, a printed fabric with a silicone edge inserted into a frame groove.
- Shadow gap: a deliberate recess between materials that hides fabrication tolerance.
- Shoulder box: a rigid box with a neck rising from the base onto which the lid closes.
- Signature: a press sheet folded into a section of 4, 8, 16 or 32 pages.
- Singer sewing: machine lockstitch sewing through the fold of a single section, thread visible.
- Slug: the area outside the bleed that carries job information and is trimmed away.
- Smyth sewing: sewing signatures through their folds and to each other so the book lies flat.
- Soft-touch laminate: a film with a velvety surface, prone to scuffing.
- Spot colour: a pre-mixed ink printed from its own plate.
- Spot UV: gloss UV coating applied in register to part of a sheet.
- Step-and-repeat: an event backdrop of repeated logos for photographs.
- Swiss binding: a binding with the text block glued only to the back cover.
- Thermography: raised glossy print made by heating resin powder on wet ink.
- Through-dyed: paper coloured through its fibre so its edges match its face.
- Tone value increase (TVI): the darkening of mid-tones on press as dots spread.
- Trapping: overlapping adjacent colours slightly so misregistration leaves no gap.
- Trim: the line where the printed sheet is cut to size.
- Triplexing: laminating three sheets, often to show a coloured core at the edge.
- Variable data printing (VDP): digital printing that changes content from piece to piece.
- Wayfinding: the system of signs and cues that lets people navigate a space.
- White dummy: an unprinted sample made from the specified stocks and binding.
- Work-and-turn: printing both sides of a sheet from one plate set by turning the sheet over.
- Wove paper: smooth, even paper with no laid pattern.

## Sources and further reading

Books
- Helmut Kipphan (editor), Handbook of Print Media: Technologies and Production Methods, Springer, 2001.
- Kaj Johansson, Peter Lundberg and Robert Ryberg, A Guide to Graphic Print Production, third edition, Wiley, 2011.
- Gavin Ambrose and Paul Harris, The Production Manual, AVA Publishing, 2008.
- Paul Jackson, Folding Techniques for Designers: From Sheet to Form, Laurence King, 2011.
- Robert Bringhurst, The Elements of Typographic Style, version 4.0, Hartley and Marks, 2012.
- Chris Calori and David Vanden-Eynden, Signage and Wayfinding Design, second edition, Wiley, 2015.
- David Gibson, The Wayfinding Handbook: Information Design for Public Places, Princeton Architectural Press, 2009.

Specifications, standards and regulations
- ISO 12647-2:2013, offset lithographic process control; ISO 12647-7:2016, contract proofing; ISO 3664:2009, viewing conditions: https://www.iso.org
- ISO 15930 (PDF/X): part 1 and 4 (PDF/X-1a), part 7:2010 (PDF/X-4), part 9:2020 (PDF/X-6): https://www.iso.org
- ISO 216:2007 (A and B sizes), ISO 269 (envelopes), ISO/IEC 18004:2015 (QR code), ISO 7001 and ISO 7010 (symbols), ISO 2859-1 (sampling): https://www.iso.org
- European Color Initiative, ISO Coated v2, PSO Coated v3 and PSO Uncoated v3 profiles: https://www.eci.org
- Fogra, characterisation data FOGRA39, FOGRA51, FOGRA52 and the Media Wedge: https://fogra.org
- GS1 General Specifications: https://www.gs1.org/standards/barcodes-epcrfid-id-keys/gs1-general-specifications ; GS1 US, Sunrise 2027: https://www.gs1us.org
- FEFCO, International Fibreboard Case Code: https://www.fefco.org ; ECMA Code for folding cartons: https://www.ecma.org
- FSC certification and labels: https://fsc.org ; PEFC: https://pefc.org
- Food Safety and Standards (Labelling and Display) Regulations, 2020, FSSAI: https://www.fssai.gov.in
- Legal Metrology (Packaged Commodities) Rules, 2011, Department of Consumer Affairs: https://consumeraffairs.nic.in
- UAE.S GSO 9, UAE.S GSO 2233 and UAE.S GSO 1943, Ministry of Industry and Advanced Technology: https://moiat.gov.ae
- Regulation (EU) 2025/40 on packaging and packaging waste: https://eur-lex.europa.eu/eli/reg/2025/40/oj
- Swiss Ordinance on materials and articles in contact with food, SR 817.023.21: https://www.fedlex.admin.ch
- BS 8300, design of an accessible and inclusive built environment, BSI: https://www.bsigroup.com
- Bureau of Indian Standards, hallmarking and HUID: https://www.bis.gov.in

Pages read in October 2026
- Pantone, Pantone Connect: https://www.pantone.com/pantone-connect
- Wikipedia, Pantone (series numbering, 2019 colour count, Adobe removal, ownership): https://en.wikipedia.org/wiki/Pantone
- Wikipedia, Stochastic screening: https://en.wikipedia.org/wiki/Stochastic_screening
- Wikipedia, PDF/X: https://en.wikipedia.org/wiki/PDF/X
- Wikipedia, Bookbinding: https://en.wikipedia.org/wiki/Bookbinding
- Wikipedia, QR code: https://en.wikipedia.org/wiki/QR_code
- Wikipedia, Fedrigoni, Arjowiggins and Ballarpur Industries: https://en.wikipedia.org/wiki/Fedrigoni ; https://en.wikipedia.org/wiki/Arjowiggins ; https://en.wikipedia.org/wiki/Ballarpur_Industries
- Wikipedia, Goods and Services Tax (India): https://en.wikipedia.org/wiki/Goods_and_Services_Tax_(India)
- Wikipedia, Packaging and Packaging Waste Regulation: https://en.wikipedia.org/wiki/Packaging_and_Packaging_Waste_Regulation

Tool documentation
- Adobe InDesign help (Live Preflight, Separations Preview, Appearance of Black) and Adobe Acrobat help (Print Production: Preflight, Output Preview): https://helpx.adobe.com/indesign.html ; https://helpx.adobe.com/acrobat.html

Sibling files
- 03-typography.md, sections 14 and 15; 04-colour.md, sections 9 and 10; 19-campaigns-and-creative-direction.md, sections 6 and 14; 24-business-of-creative-and-agency-operations.md, sections 3.6 and 7; 26-platform-and-format-specs-2026.md, sections 3.8, 5.8, 5.11 and 6; design-taste, SKILL.md sections 2 to 5 and 7.
