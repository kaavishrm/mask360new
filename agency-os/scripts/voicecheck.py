"""Check a draft against house/voice.md before it is queued.

Usage: python3 agency-os/scripts/voicecheck.py --channel linkedin < draft.txt
Channels: email-list, email-named, linkedin, whatsapp, client, brief, any
Prints PASS or FIX lines. Exit code 0 on pass, 1 on fix.
"""
import argparse, re, sys

BANNED = [
    "hope this finds you well", "looking forward to hearing from you", "worth 15 minutes",
    "no decks, just a conversation", "selectively opening capacity", "game changer", "game-changer",
    "synergy", "disruptive", "world-class", "world class", "innovative", "circle back", "touch base",
    "just following up", "rather than", "instead of",
]
LIMITS = {  # (min words, max words, max lines of body)
    "email-list": (15, 110, 6), "email-named": (30, 160, 9), "linkedin": (30, 80, None),
    "whatsapp": (8, 70, None), "client": (10, 400, None), "brief": (5, 800, 45), "any": (1, 10000, None),
}

def check(text, channel):
    fixes = []
    if chr(0x2014) in text or chr(0x2013) in text:
        fixes.append("remove every em dash and en dash")
    low = text.lower()
    for b in BANNED:
        if b in low:
            fixes.append(f"remove banned phrase: '{b}'")
    if channel in ("email-list", "email-named", "linkedin", "whatsapp", "client") and "!" in text:
        fixes.append("remove exclamation marks")
    body = [l for l in text.strip().splitlines() if l.strip() and not l.lower().startswith(("subject:", "hi ", "hello "))]
    if channel.startswith("email") and body and re.match(r"^(i|we)\b", body[0].strip(), re.I):
        fixes.append("do not open with I or We")
    words = len(re.findall(r"\b\w[\w'&.-]*\b", text))
    lo, hi, max_lines = LIMITS.get(channel, LIMITS["any"])
    if words < lo or words > hi:
        fixes.append(f"length {words} words, keep between {lo} and {hi} for {channel}")
    if max_lines and len(body) > max_lines:
        fixes.append(f"{len(body)} content lines, keep to {max_lines} or fewer")
    if channel == "linkedin":
        sentences = [s for s in re.split(r"[.?]\s", text.strip()) if s.strip()]
        if not 3 <= len(sentences) <= 5:
            fixes.append(f"{len(sentences)} sentences, keep 3 to 5")
        if re.search(r"https?://|\.pdf|deck|₹|rs\.? ?\d|aed ?\d", low):
            fixes.append("no links, decks or prices in a first-touch DM")
    asks = len(re.findall(r"\?", text))
    if channel in ("email-list", "linkedin", "whatsapp") and asks > 2:
        fixes.append(f"{asks} questions, keep one ask")
    return fixes

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--channel", default="any", choices=sorted(LIMITS))
    ap.add_argument("file", nargs="?")
    a = ap.parse_args()
    text = open(a.file).read() if a.file else sys.stdin.read()
    fixes = check(text, a.channel)
    if fixes:
        print("FIX:")
        for i, f in enumerate(fixes, 1):
            print(f"{i}. {f}")
        sys.exit(1)
    print("PASS")
