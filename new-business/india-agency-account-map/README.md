# India agency account map and poaching target list

Which agency in India holds which brand accounts, and which of those accounts Mask360 should go after first. Research as of 29 Sep 2026.

**Download:** [`India_Agency_Account_Map_Sep2026.xlsx`](India_Agency_Account_Map_Sep2026.xlsx) (open the file on GitHub, then use the download button).

## What is in the workbook

| Tab | Use it for |
|---|---|
| Read me | How the score works, status and confidence definitions, method and limits. |
| Target list | 908 brands ranked out of 10. 63 score A (9 or 10), 177 score B (7 or 8). Yellow columns are for owner, outreach status, next step and notes. |
| In play now | 2026 pitches, reviews, new marketing leaders and account moves, newest first. |
| Agency roster | 187 agencies and the accounts they hold, luxury and premium first. |
| Agency turmoil 2025-26 | Mergers, sales, exits and probes that make an agency's clients poachable, with sources. |
| Category by group | Relationship counts by category and holding company. |
| All relationships | 1,226 sourced brand to agency relationships with evidence, date and confidence. |

## Priority score

Score = Fit (0 to 4) + Tier (0 to 3) + Timing (0 to 3).

- **Fit:** how close the category is to Mask360's luxury and premium lanes (hospitality, jewellery, fashion and real estate score highest).
- **Tier:** Luxury 3, Premium 2, Mass 0.
- **Timing:** a live pitch scores 3. Leadership change, incumbent agency turmoil and open mandates add 2 each. Weaker signals add 1. A brand that moved agency since Mar 2026 scores 0.

Timing is an editable input in the workbook; Score and Priority recalculate.

## Folder layout

```
India_Agency_Account_Map_Sep2026.xlsx   the deliverable
data/                                   raw research, one JSON Lines file per research stream
scripts/                                rebuilds the workbook from data/
```

Research streams in `data/`: WPP, Publicis, Omnicom (two files), Dentsu with Havas, Cheil and Hakuhodo, independent creative agencies, independent digital and social agencies, luxury boutiques with PR and events, live pitches and leadership moves, and two brand-first sweeps (hotels, real estate, auto and BFSI; jewellery, fashion, beauty, alcobev and wellness).

## Rebuild

```
pip install openpyxl
cd scripts
python3 make_workbook.py            # writes ../India_Agency_Account_Map_Sep2026.xlsx
```

To refresh, add or edit rows in `data/*.jsonl` (same 15 keys), then rebuild. Agency name variants are mapped in `scripts/canon.py`, brand name variants in `scripts/brand_merge.py`, and the structural changes sheet lives in `scripts/turmoil.py`. Open the rebuilt file in Excel or recalculate it with LibreOffice so formula values are cached.

## Limits

- The web search allowance ran out early in the research, so most sources were read directly from trade press (afaqs, Storyboard18, MediaNews4U, Social Samosa, Campaign Brief Asia, Adgully, Manifest) and news feeds. exchange4media and bestmediainfo blocked direct access.
- 217 relationships are "Unknown or in-house": no agency credit was found. Treat them as likely open doors, not confirmed gaps.
- Low-confidence rows and signals tagged "unverified" must be checked before outreach.
- Agency rosters move monthly. Re-check the In play now tab before each outreach sprint.
