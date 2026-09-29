"""Load, clean and dedupe all agent JSONL outputs into one list of records."""
import json, glob, os, re, unicodedata

DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data")
KEYS = ["agency", "agency_group", "agency_type", "brand", "parent_company", "category",
        "brand_tier", "mandate", "since", "status", "evidence", "source_url", "source_date",
        "confidence", "poach_signals"]

def clean_text(v):
    if v is None:
        return ""
    s = str(v)
    s = s.replace("\u2014", ", ").replace("\u2013", "-").replace("\u2012", "-").replace("\u2015", ", ")
    s = re.sub(r"\s+,", ",", s)
    s = re.sub(r",\s*,", ",", s)
    return re.sub(r"\s+", " ", s).strip()

def norm(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()
    s = s.replace("&", "and")
    s = re.sub(r"\b(india|pvt|ltd|limited|private|the|group|co|company)\b", " ", s)
    return re.sub(r"[^a-z0-9]+", "", s)

FILES = ["wpp","publicis","omnicom_a","omnicom_b","dentsu_havas","indie_creative","indie_digital","luxury_pr_exp","in_play","brands_a","brands_b"]

CONF_RANK = {"High": 3, "Medium": 2, "Low": 1}

def load():
    recs, bad = [], []
    for path in sorted(glob.glob(os.path.join(DATA, "*.jsonl"))):
        if os.path.basename(path).replace(".jsonl","") not in FILES:
            continue
        src = os.path.basename(path).replace(".jsonl", "")
        with open(path, encoding="utf-8") as f:
            for i, line in enumerate(f, 1):
                line = line.strip()
                if not line:
                    continue
                try:
                    o = json.loads(line)
                except Exception as e:
                    bad.append((src, i, str(e)))
                    continue
                r = {k: clean_text(o.get(k, "")) for k in KEYS}
                r["_file"] = src
                recs.append(r)
    return recs, bad

def dedupe(recs):
    best = {}
    for r in recs:
        k = (norm(r["brand"]), norm(r["agency"]), r["mandate"].lower())
        cur = best.get(k)
        if cur is None:
            r["_sources"] = [r["source_url"]] if r["source_url"] else []
            best[k] = r
            continue
        if r["source_url"] and r["source_url"] not in cur["_sources"]:
            cur["_sources"].append(r["source_url"])
        better = (CONF_RANK.get(r["confidence"], 0), r["source_date"]) > (CONF_RANK.get(cur["confidence"], 0), cur["source_date"])
        if better:
            r["_sources"] = cur["_sources"]
            if not r["poach_signals"] and cur["poach_signals"]:
                r["poach_signals"] = cur["poach_signals"]
            best[k] = r
        elif r["poach_signals"] and r["poach_signals"] not in cur["poach_signals"]:
            cur["poach_signals"] = (cur["poach_signals"] + "; " + r["poach_signals"]).strip("; ")
    return list(best.values())

if __name__ == "__main__":
    recs, bad = load()
    print("raw", len(recs), "bad lines", len(bad))
    for b in bad[:20]:
        print("BAD", b)
    d = dedupe(recs)
    print("deduped", len(d))
    from collections import Counter
    print(Counter(r["_file"] for r in recs))
