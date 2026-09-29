"""Read me sheet: what the workbook is, how the score works, how to use it."""
from openpyxl.styles import Font, PatternFill, Alignment

def add_sheet(wb, asof, n_rel, n_brands, n_agencies, n_a, n_b, FIT, TIER_PTS, BOLD, BODY, WRAP, FONT):
    ws = wb.create_sheet("Read me", 0)
    ws.column_dimensions["A"].width = 30
    ws.column_dimensions["B"].width = 110
    title = Font(name=FONT, size=16, bold=True)
    h2 = Font(name=FONT, size=12, bold=True)
    yellow = PatternFill("solid", start_color="FFF2CC")
    r = 1
    def line(a, b="", fa=BODY, fb=BODY, fill=None):
        nonlocal r
        ca = ws.cell(row=r, column=1, value=a)
        cb = ws.cell(row=r, column=2, value=b)
        ca.font, cb.font = fa, fb
        ca.alignment = Alignment(vertical="top", wrap_text=True)
        cb.alignment = Alignment(vertical="top", wrap_text=True)
        if fill:
            ca.fill = fill
        r += 1
    line("India agency account map and poaching target list", fa=title)
    line(f"Prepared for Mask360 new business. Research as of {asof}.", fa=BODY)
    r += 1
    line("What is inside", fa=h2)
    line("Target list", f"One row per brand ({n_brands} brands), ranked by a 10 point priority score. Shows who holds the account today, what just changed and why now. {n_a} brands score A (9 or 10) and {n_b} score B (7 or 8). Yellow columns are yours to fill in.")
    line("In play now", "Pitches, reviews, new marketing leaders and account moves from 2026, newest first. Start here for timing.")
    line("Agency roster", f"The answer to 'which agency has what': {n_agencies} agencies with their luxury and premium accounts listed first. (L) marks a luxury brand.")
    line("Agency turmoil 2025-26", "Mergers, sales, exits and probes that make an agency's clients poachable, each with a source and the accounts exposed.")
    line("Category by group", "How many current relationships each holding company has in each category. The Unknown or in-house column counts brands with no credited agency.")
    line("All relationships", f"The full evidence base: {n_rel} brand to agency relationships, each with evidence, date, confidence and a source link. Filter by any column.")
    r += 1
    line("How the priority score works", fa=h2)
    line("Score = Fit + Tier + Timing", "Out of 10. A = 9 or 10, B = 7 or 8, C = 6 or less. The score and priority are live formulas: change Timing pts and they update (sort by Score to re-rank).")
    fit_txt = "; ".join(f"{k} {v}" for k, v in sorted(FIT.items(), key=lambda kv: -kv[1]))
    line("Fit pts (0 to 4)", "How close the category is to Mask360's luxury and premium lanes: " + fit_txt + ".")
    line("Tier pts (0 to 3)", "Luxury 3, Premium 2, Mass 0. Tier is the research agents' judgement of the brand's positioning.")
    line("Timing pts (0 to 3)", "Pitch or review live = 3. Strong triggers add 2 each: leadership change (at the brand or the incumbent agency), incumbent agency in turmoil (merger, sale, probe), open mandates (channels with no agency). Weak triggers add 1: no agency credited at all, split roster, long tenure, launch or fresh funding, renewal due. Capped at 3. 0 = no trigger found, or the brand moved agency since Mar 2026 and nothing is left open (honeymoon). Blue cells: overwrite them when you know better.")
    line("Why now (triggers)", "Keyword flags read from the poaching signals. Treat them as a prompt to read the signal text, not as a verdict.")
    line("Mask360 relationship", "Brands matching Mask360's current client names (per its skill files) are marked Client and ranked last. L'Oreal group brands are marked as an expansion opportunity rather than a poach. Correct this column if the client list has changed.")
    r += 1
    line("Status and confidence", fa=h2)
    line("Status", "Active = relationship confirmed and current. Won recently = new appointment in the last months. In review = pitch or review reported. Recently lost = the brand moved away (the new agency usually has its own row). Unclear = older or indirect evidence, relationship may have lapsed.")
    line("Confidence", "High = trade press or agency site dated 2024 to 2026 stating the relationship. Medium = older, a campaign credit only, or a news feed link. Low = client logo, inference, or no agency found.")
    line("Unknown or in-house", "Where research found no agency, the brand is still listed. These are often the easiest doors: the work is in-house or with small shops.")
    r += 1
    line("How to use it", fa=h2)
    line("1. Filter", "Target list: filter Priority = A, then your categories. Read Current agency, Why now and Poaching signals.")
    line("2. Check", "Open Source 1 before any outreach. Verify anything marked Low confidence or 'unverified'.")
    line("3. Track", "Fill the yellow columns: Owner, Outreach status (dropdown), Next step, Notes. Example: Owner 'Kaavish', status 'Contacted', next step 'Intro via ex-colleague of new CMO'.", fill=yellow)
    line("4. Refresh", "Agency rosters move monthly. Re-check the In play now sheet before each outreach sprint.")
    r += 1
    line("Method and limits", fa=h2)
    line("Sources", "Eleven parallel research streams covered WPP, Publicis, Omnicom (two streams), Dentsu, Havas, Cheil and Hakuhodo, independent creative agencies, independent digital and social agencies, luxury boutiques with PR and events, live pitches and leadership moves, and two brand-first sweeps of premium categories. Main sources were afaqs, Storyboard18, MediaNews4U, Social Samosa, Campaign Brief Asia, Adgully, Manifest, IMPACT, agency websites and award credits.")
    line("Gaps", "The shared web search allowance ran out early, so most research came from reading trade press pages and news feeds directly. exchange4media, bestmediainfo and the SABRE site blocked direct access. Coverage is thinnest for luxury hotels, luxury fashion houses and in-house teams, where agency credits are rarely published.")
    line("Checks", "Every row has evidence text. Rows without a working link are marked Low. A few poaching signals came from the researchers' own knowledge and are tagged 'unverified, check before outreach'.")
    line("Not included", "Media-buying-only mandates, except where the brand is luxury or premium.")
    ws.sheet_view.showGridLines = False
    return ws
