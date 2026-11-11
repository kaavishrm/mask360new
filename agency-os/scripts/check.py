"""Integrity check for the Agency OS files. Run before committing changes to agents or house files.

Usage: python3 agency-os/scripts/check.py
Checks: no em or en dashes; every os-* agent has frontmatter with a matching name and a description;
every os-* agent named in RUNBOOK.md and in other agents exists.
"""
import pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
OS = ROOT / "agency-os"
AGENTS = ROOT / ".claude" / "agents"
errors = []

files = [p for p in OS.rglob("*") if p.is_file() and p.suffix in (".md", ".sql", ".py")] + sorted(AGENTS.glob("os-*.md"))
for p in files:
    for i, line in enumerate(p.read_text(encoding="utf-8").splitlines(), 1):
        if chr(0x2014) in line or chr(0x2013) in line:
            errors.append(f"{p.relative_to(ROOT)}:{i} has an em or en dash")

names = set()
for p in sorted(AGENTS.glob("os-*.md")):
    text = p.read_text(encoding="utf-8")
    m = re.match(r"^---\nname: (\S+)\ndescription: (.+?)\n(?:tools: .+\n)?---\n", text)
    if not m:
        errors.append(f"{p.relative_to(ROOT)} has no valid frontmatter")
        continue
    if m.group(1) != p.stem:
        errors.append(f"{p.relative_to(ROOT)} name '{m.group(1)}' does not match the file name")
    names.add(p.stem)

refs = {}
for p in [OS / "RUNBOOK.md", *AGENTS.glob("os-*.md")]:
    for n in re.findall(r"\bos-[a-z]+\b", p.read_text(encoding="utf-8")):
        refs.setdefault(n, set()).add(p.name)
for n, where in sorted(refs.items()):
    if n not in names and n not in ("os-store",):
        errors.append(f"{n} is referenced in {', '.join(sorted(where))} but no agent file exists")

runbook = (OS / "RUNBOOK.md").read_text(encoding="utf-8")
for n in re.findall(r"\*\*([a-z]+)\*\*", runbook):
    if n in ("auto", "notify", "approve", "never", "shadow", "live", "paused"):
        continue
    if f"os-{n}" not in names:
        errors.append(f"RUNBOOK.md routine step '{n}' has no agent os-{n}")

print(f"{len(names)} agents, {len(files)} files checked")
if errors:
    print("\n".join(errors))
    sys.exit(1)
print("OK")
