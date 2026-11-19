# Regenerates src/data/competitor-facts.generated.ts from research/competitor-facts/facts-*.json.
# Usage: python3 research/gen-facts.py   (add or edit a facts JSON, then re-run)
import json, glob, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
R = os.path.join(HERE, "competitor-facts")
OUT = os.path.join(HERE, "..", "src", "data", "competitor-facts.generated.ts")

# domain (as researched) -> route slug. Existing pages keep their slug; new pages get a new one.
SLUG = {
  "canvaswizard.co": "canvaswizard-vs-examghost",
  "aceify.ai": "aceify-vs-examghost",
  "smartsolve.ai": "smartsolve-vs-examghost",
  "cheatmate.io": "cheatmate-vs-examghost",
  "snapgpt.me": "snapgpt-vs-examghost",
  "getanswerlyai.com": "answerly-vs-examghost",
  "canvasquizsolve.com": "canvasquizsolve-vs-examghost",
  "canvasquiz.com": "canvasquiz-vs-examghost",
  "solvely.ai": "solvely-vs-examghost",
  "thecampusai.com": "campusai-vs-examghost",
  "examclutch.com": "examclutch-vs-examghost",
  "quizboost.cc": "quizboost-vs-examghost",
  "mindko.com": "mindko-vs-examghost",
  "canvastoolkit.com": "canvastoolkit-vs-examghost",
  "formsolver.app": "formsolver-vs-examghost",
  "canvasanswers.com": "canvasanswers-vs-examghost",
  "studyfox.pro": "studyfox-vs-examghost",
  "transcript.study": "transcript-vs-examghost",
  "apexvision.ai": "apexvision-vs-examghost",
  "screenshotai.lol": "screenshotai-vs-examghost",
  "asksia.ai": "asksia-vs-examghost",
  "quizmate.io": "quizmate-vs-examghost",
  "usequietly.com": "usequietly-vs-examghost",
  "canvasninja.app": "canvasninja-vs-examghost",
  "testbro.app": "testbro-vs-examghost",
  "fastsolve.app": "fastsolve-vs-examghost",
  "answersai.com": "answersai-vs-examghost",
  "coursology.com": "coursology-vs-examghost",
  "canvashack.com": "canvashack-vs-examghost",
  "quizsolverai.com": "quizsolverai-vs-examghost",
  "getquizsolve.com": "getquizsolve-vs-examghost",
  "canvaspass.sbs": "canvaspass-vs-examghost",
  "getquizsolver.com": "getquizsolver-vs-examghost",
  "doublecheckme.com": "doublecheckai-vs-examghost",
  "quizhack.ai": "quizhack-vs-examghost",
  "userightclick.app": "rightclickai-vs-examghost",
  "snapsolveai.com": "snapsolveai-vs-examghost",
  "examninja.io": "examninja-vs-examghost",
  "silentstudent.com": "silentstudent-vs-examghost",
  "cheatgpt.app": "cheatgpt-vs-examghost",
  "quizcloak.com": "quizcloak-vs-examghost",
  "canvastabshield.com": "canvastabshield-vs-examghost",
}
import re
EVASION = re.compile(r"undetect|stealth|tab[- ]?switch|hide|hidden|bypass|proctor|lockdown|invisible|camouflage|detection|blur|focus", re.I)
def clean(items):
    return [x for x in (items or []) if not EVASION.search(x or "")]
NAME_OVERRIDES = {"canvasquiz.com": "CanvasQuiz", "canvasquizsolve.com": "CanvasQuizSolve"}
facts, excluded, missing = {}, [], []
for path in sorted(glob.glob(os.path.join(R, "facts-*.json"))):
    for r in json.load(open(path)):
        dom = r["domain"].lower().replace("www.", "")
        slug = SLUG.get(dom)
        if not slug:
            missing.append(dom); continue
        purpose = r.get("primaryPurpose")
        pr = r.get("pricing") or {}
        facts[slug] = {
            "slug": slug, "name": NAME_OVERRIDES.get(dom, r["name"]), "domain": dom, "url": r.get("url") or f"https://{dom}",
            "purpose": purpose if purpose in ("ai-answers", "study-tools", "activity-hiding") else "other",
            "verified": bool(r.get("reachable", True)) and bool((r.get("pricing") or {}).get("summary") or (r.get("pricing") or {}).get("plans") or r.get("platformsStated")),
            "priceSummary": None if EVASION.search(pr.get("summary") or "") else pr.get("summary"),
            "plans": [{"name": p.get("name"), "price": p.get("price"), "currency": p.get("currency") or "USD",
                       "period": p.get("period"), "notes": p.get("notes")} for p in (pr.get("plans") or [])],
            "freeTier": None if EVASION.search(pr.get("freeTier") or "") else pr.get("freeTier"), "trial": None if EVASION.search(pr.get("trial") or "") else pr.get("trial"),
            "platforms": r.get("platformsStated") or [], "features": [] if purpose == "activity-hiding" else clean(r.get("featuresStated"))[:6],
            "storeUrl": r.get("extensionStoreUrl"), "browsers": r.get("browsersStated") or [],
            "lastChecked": r.get("lastChecked") or "2026-11-19", "sources": r.get("sources") or [],
            "confidence": r.get("confidence") or "low", "notes": r.get("notes"),
        }
body = json.dumps(facts, indent=4, ensure_ascii=False)
open(OUT, "w").write(
    "// AUTO-GENERATED from research JSON (scratchpad/research/gen-facts.py). Do not edit by hand; regenerate instead.\n"
    'import type { CompetitorFact } from "./competitor-facts";\n\n'
    f"export const FACTS: Record<string, CompetitorFact> = {body};\n")
print(f"wrote {len(facts)} verified competitors; excluded {len(excluded)}: {excluded}; unmapped domains: {missing}")
