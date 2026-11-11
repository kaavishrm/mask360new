"""Turn the India agency account map into SQL for os.accounts.

Usage: python3 agency-os/scripts/load_accounts.py [A,B,Client] > accounts.sql
Priorities: A becomes tier Prime, B becomes Premium, C becomes Volume. Clients load with status 'client'.
Re-runnable: rows upsert on (org_id, name).
"""
import sys, os
from openpyxl import load_workbook

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
XLSX = os.path.join(ROOT, "new-business", "india-agency-account-map", "India_Agency_Account_Map_Sep2026.xlsx")
WANT = set((sys.argv[1] if len(sys.argv) > 1 else "A,B,Client").split(","))

LANE = {
    "Luxury hospitality & travel": "Hospitality", "Jewellery & watches": "Jewellery", "Fashion & luxury retail": "Luxury",
    "Real estate": "RealEstate", "Beauty & personal care": "Beauty", "Alcobev": "Alcobev", "Automotive": "Auto",
    "Wellness, fitness & sport": "Wellness", "BFSI & wealth": "BFSI", "Premium F&B & QSR": "F&B", "Aviation": "Hospitality",
    "Consumer tech & D2C": "D2C", "E-commerce & quick commerce": "Retail", "FMCG": "FMCG", "Telecom & media": "Other",
    "Healthcare": "Other", "Education": "Other", "Other": "Other",
}
TIER = {"A": "Prime", "B": "Premium", "C": "Volume", "Client": "Prime"}

def q(v, n=None):
    if v is None or v == "":
        return "null"
    s = str(v).replace(chr(0x2014), ",").replace(chr(0x2013), "-")
    if n and len(s) > n:
        s = s[: n - 1].rsplit(" ", 1)[0] + "..."
    return "'" + s.replace("'", "''") + "'"

wb = load_workbook(XLSX, read_only=True, data_only=True)
rows = list(wb["Target list"].iter_rows(values_only=True))
h = rows[0]
vals = []
for r in rows[1:]:
    d = dict(zip(h, r))
    if d["Priority"] not in WANT:
        continue
    status = "client" if d["Priority"] == "Client" else "target"
    why = "; ".join(x for x in [d.get("Why now (triggers)"), d.get("Poaching signals")] if x)
    vals.append("(" + ",".join([
        q(d["Brand"]), q(d["Parent company"], 80), q(LANE.get(d["Category"], "Other")), q(d["Category"]),
        q(d["Brand tier"]), q(TIER[d["Priority"]]), str(int(d["Fit pts"] or 0)), str(int(d["Timing pts (edit)"] or 0)),
        str(int(d["Score (of 10)"] or 0)), q(status), q(d["Current agency and mandate"], 140), q(why, 220),
    ]) + ")")

print("insert into os.accounts (org_id,name,parent,lane,category,market,brand_tier,tier,fit,timing,score,status,incumbents,signals_summary,source)")
print("select o.id, v.name, v.parent, v.lane, v.category, 'India', v.brand_tier, v.tier, v.fit, v.timing, v.score, v.status, v.incumbents, v.why, 'account-map-2026-09'")
print("from os.orgs o, (values")
print(",\n".join(vals))
print(") as v(name,parent,lane,category,brand_tier,tier,fit,timing,score,status,incumbents,why)")
print("where o.slug = 'mask360'")
print("on conflict (org_id, name) do update set tier=excluded.tier, fit=excluded.fit, timing=excluded.timing, score=excluded.score,")
print("  incumbents=excluded.incumbents, signals_summary=excluded.signals_summary, updated_at=now();")
