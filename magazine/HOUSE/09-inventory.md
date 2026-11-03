# 09. Inventory: every format is a placement

## The principle

This business runs in two moves. First build engagement until the numbers are undeniable. Then charge what the numbers allow. The trick is that the first move is never separate from the second: everything we run to build the audience is built inside a placement a brand will later pay to occupy. The Edit runs with five editorial items until a brand buys item three. The Scorecard runs with the house badge until a brand buys "presented by". The Guest List covers a party we were not paid to cover until the next host pays. By the time we sell, the inventory has been on the feed for months, the audience knows its shape, and the brand is buying a proven position, not a promise.

Rules that follow: every format has a defined slot, a label, a cap and a price logic from day one. Nothing is sold before the thresholds. Nothing editorial is ever for sale. The audience is never charged.

## The phases

| Phase | When | What happens | Who does it |
|---|---|---|---|
| 1. Build | months 1 to 3 | 12 carousels a week on the cadence, every slot runs editorial or house. The house band says "This space is for sale". The proof deck is compiled monthly. No outreach. | the engine, m360-growth, m360-sales (proof only) |
| 2. Price | from the thresholds, target month 4 | The rate card goes live with the numbers behind it. Prices are computed from reach, not guessed. The sales desk lists prospects weekly from SWEET and SPILLED coverage and the Mask360 sales fleet sends. | m360-sales, the Mask360 fleet |
| 3. Scale | month 7 onwards | Annual partners, category exclusivity (one bank, one carmaker, one spirits brand per quarter), Mask360 Studio bundles (the magazine sells the slot, the studio makes the content). | m360-sales, the publisher |

Thresholds to open Phase 2 (any two of four): 10,000 Instagram followers; 150,000 impressions in a trailing 30 days across channels; three carousels over 25,000 reach; 1,000 newsletter subscribers. m360-growth checks weekly and flips `phase` in `newsroom/STATE.json`. Until then the sales desk prepares and does not pitch.

## The inventory map

| Slot | Lives in | Editorial version (Phase 1) | Sold version (Phase 2) | Label | Cap |
|---|---|---|---|---|---|
| Brand Drop | its own carousel, IG + LinkedIn + web | none; the slot does not run until bought | brand-supplied assets re-set in the house system, video allowed | PAID PARTNERSHIP on every slide, caption, web | 2 a day |
| Edit item | items 2 to 4 of The Edit | five editorial items with the catch | up to two items bought, written with the catch, order editorial | PAID PARTNERSHIP on the item slide and in the caption | 2 per Edit, no two competing brands in one Edit |
| Guest List coverage | The Guest List | events we were invited to, "invited" in the caption | the host pays for coverage within 48 hours | PAID PARTNERSHIP | 2 a week |
| Presented by | cover and close slides of Scorecard, Moves, Deep Pour | "Mask360" masthead alone | "Presented by Brand" under the kicker on the cover, on the close, in the caption | PRESENTED BY, plus #ad | one sponsor per format per week; the score and the moves are never touched |
| Spotted, courtesy of | Spotted | sightings we found | a brand supplies the sighting (its ambassador in its clothes) and pays | PAID PARTNERSHIP | 2 a week, SWEET kicker never promised |
| Watchlist sponsor | the yellow band on the home page | brands most covered, by count | a sponsor line above the band; the list itself is never edited | "Watchlist presented by" | monthly |
| Site takeover | the red band on the home page | the house ad | one brand, one creative, designed by us | the band is the ad | weekly |
| Newsletter block | Sunday Steep | the Watchlist | one sponsor block between story three and four | "Sponsored" | one per issue |
| Studio bundle | across formats | none | the brand buys the slot and Mask360 Studio makes the content | PAID PARTNERSHIP | by contract |

Never inventory: The Tea, Receipts, Hot Take, the verdict slide of any format, the score, the kicker, the hero rotation (editorial only), the order of anything.

## Price logic (how we charge what the numbers allow)

Prices are computed, published monthly on the Advertise page with the numbers that produced them, and never negotiated below the floor. `m360-growth` writes the inputs weekly to `newsroom/metrics/`; `m360-sales` recomputes monthly.

Inputs: R = trailing 30 day median reach per carousel on Instagram; L = the same on LinkedIn; S = newsletter subscribers; W = trailing 30 day home page sessions.

| Placement | Formula (INR, ex GST) | Floor (rate card v1) |
|---|---|---|
| Brand Drop | (R + L) x 1.5 x 1.2 (full ownership, two channels, web story) | 75,000 |
| Edit item | R x 0.5 | 25,000 |
| Guest List coverage | (R + L) x 1.2 + production (15,000, travel extra) | 60,000 |
| Presented by, a week | 2 carousels x (R + L) x 0.6 | 50,000 Scorecard, 40,000 Moves |
| Spotted, courtesy of | R x 0.8 | 30,000 |
| Watchlist sponsor, a month | W x 1.0 + R x 0.5 | 40,000 |
| Site takeover, a week | W x 1.5 | 50,000 |
| Newsletter block | S x 12 | 30,000 |

Read: at R = 25,000 and L = 8,000, a Brand Drop is INR 59,400 computed, so the floor of 75,000 holds. At R = 60,000 and L = 20,000 it is INR 144,000 and that is the price. The numbers set the price, which is the whole point of building them first.

## The proof deck

`OPS/SALES/proof-YYYY-MM.md`, compiled monthly by m360-growth and m360-sales from the metrics: the ten best carousels by reach with saves and shares, the formats they were, the audience composition (cities, industries, from the platform insights), the Watchlist, the brands that engaged, and for each sold slot what the brand would have received. From Phase 2 it is the attachment on every outreach note and the source of the Advertise page's numbers.

## What stays true in every phase

Labels on everything paid. Editorial order never bought. No competing brands in one Edit or one week of a presented-by. The catch is written for paid items too, and brands are told before they buy. A brand in a Receipts story cannot buy for 90 days. A rating, a kicker and silence are never for sale. The audience is the asset; the brand rents a position in front of it.
