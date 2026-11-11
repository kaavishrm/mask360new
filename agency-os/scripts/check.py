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

# Cluster sections: every task agent (not the three role agents) has Think, Verify and Do, and every Do action is a real gate key.
ROLE_AGENTS = {"os-think", "os-verify", "os-do"}
GATE_KEYS = set(re.findall(r"\('([a-z]+(?:\.[a-z_]+)?)','(?:auto|notify|approve|never)'", (OS / "db" / "seed.sql").read_text(encoding="utf-8")))
for p in sorted(AGENTS.glob("os-*.md")):
    if p.stem in ROLE_AGENTS:
        continue
    text = p.read_text(encoding="utf-8")
    if "\n## Cluster\n" not in text:
        errors.append(f"{p.name} has no ## Cluster section")
        continue
    cl = text.split("\n## Cluster\n", 1)[1]
    for part in ("**Think**", "**Verify**", "**Do**", "| Check | Fails if |", "| Action | Tool | Default gate |", "Kill if:", "Never:", "Done when:"):
        if part not in cl:
            errors.append(f"{p.name} Cluster section is missing '{part}'")
    do_part = cl.split("| Action | Tool | Default gate |", 1)[-1]
    for key in re.findall(r"^\| `([^`]+)` \|", do_part, re.M):
        if key not in GATE_KEYS:
            errors.append(f"{p.name} Do action `{key}` is not a gate key in db/seed.sql")
    checks = [l for l in cl.split("| Check | Fails if |", 1)[-1].split("Kill if:", 1)[0].splitlines() if l.startswith("| ") and not l.startswith("|---")]
    if len(checks) < 3:
        errors.append(f"{p.name} Verify table has {len(checks)} checks, needs at least 3")

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
