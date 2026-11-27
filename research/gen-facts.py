# Regenerates src/data/competitor-facts.generated.ts from research/competitor-facts/facts-*.json.
# Usage: python3 research/gen-facts.py   (add or edit a facts JSON, then re-run)
import json, glob, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
R = os.path.join(HERE, "competitor-facts")
OUT = os.path.join(HERE, "..", "src", "data", "competitor-facts.generated.ts")

# All 75 distinct researched domains -> route slug.
# (classlogy-vs-examghost is a permanent redirect alias for classology.ai and is not duplicated here.)
SLUG = {
    "aceify.ai": "aceify-vs-examghost",
    "answerai.pro": "answerai-vs-examghost",
    "getanswerlyai.com": "answerly-vs-examghost",
    "answersai.com": "answersai-vs-examghost",
    "apexvision.ai": "apexvision-vs-examghost",
    "asksia.ai": "asksia-vs-examghost",
    "bettercampus.app": "bettercampus-vs-examghost",
    "brainly.com": "brainly-vs-examghost",
    "thecampusai.com": "campusai-vs-examghost",
    "canvasanswers.com": "canvasanswers-vs-examghost",
    "canvascrack.com": "canvascrack-vs-examghost",
    "canvashack.com": "canvashack-vs-examghost",
    "canvasninja.app": "canvasninja-vs-examghost",
    "canvaspass.sbs": "canvaspass-vs-examghost",
    "canvasquiz.com": "canvasquiz-vs-examghost",
    "canvasquizsolve.com": "canvasquizsolve-vs-examghost",
    "canvasscholar.app": "canvasscholar-vs-examghost",
    "canvastabshield.com": "canvastabshield-vs-examghost",
    "canvastoolkit.com": "canvastoolkit-vs-examghost",
    "canvaswizard.co": "canvaswizard-vs-examghost",
    "cheatgpt.app": "cheatgpt-vs-examghost",
    "cheatmate.io": "cheatmate-vs-examghost",
    "cheatpal.com": "cheatpal-vs-examghost",
    "classology.ai": "classology-vs-examghost",
    "collegetools.io": "collegetools-vs-examghost",
    "coursehero.com": "coursehero-vs-examghost",
    "coursology.com": "coursology-vs-examghost",
    "cramly.ai": "cramly-vs-examghost",
    "doublecheckme.com": "doublecheckai-vs-examghost",
    "easysb.org": "easysb-vs-examghost",
    "examclutch.com": "examclutch-vs-examghost",
    "examninja.io": "examninja-vs-examghost",
    "examripper.com": "examripper-vs-examghost",
    "fastsolve.app": "fastsolve-vs-examghost",
    "formsolver.app": "formsolver-vs-examghost",
    "gauthmath.com": "gauth-vs-examghost",
    "getquizsolve.com": "getquizsolve-vs-examghost",
    "getquizsolver.com": "getquizsolver-vs-examghost",
    "homeworkhelperplus.com": "homework-helper-vs-examghost",
    "homeworkify.st": "homeworkify-vs-examghost",
    "knowt.com": "knowt-vs-examghost",
    "mathos.ai": "mathosai-vs-examghost",
    "mindko.com": "mindko-vs-examghost",
    "mylabsolver.com": "mylabsolver-vs-examghost",
    "questionai.com": "questionai-vs-examghost",
    "quizard.ai": "quizard-vs-examghost",
    "quizboost.cc": "quizboost-vs-examghost",
    "quizcloak.com": "quizcloak-vs-examghost",
    "quizhack.ai": "quizhack-vs-examghost",
    "quizloader.canvas.ext": "quizloader-vs-examghost",
    "quizmate.io": "quizmate-vs-examghost",
    "quizonator.com": "quizonator-vs-examghost",
    "quizper.ai": "quizper-vs-examghost",
    "quizplus.com": "quizplus-vs-examghost",
    "quizsolverai.com": "quizsolverai-vs-examghost",
    "quizwizard.app": "quizwizard-vs-examghost",
    "quizzy-app.xyz": "quizzy-vs-examghost",
    "userightclick.app": "rightclickai-vs-examghost",
    "schoolcheats.net": "schoolcheats-vs-examghost",
    "screenshotai.lol": "screenshotai-vs-examghost",
    "silentstudent.com": "silentstudent-vs-examghost",
    "smartsolve.ai": "smartsolve-vs-examghost",
    "snapgpt.me": "snapgpt-vs-examghost",
    "snapsolveai.com": "snapsolveai-vs-examghost",
    "solvely.ai": "solvely-vs-examghost",
    "studybotpro.co": "studybotpro-vs-examghost",
    "studyfox.pro": "studyfox-vs-examghost",
    "studymonkey.ai": "studymonkey-vs-examghost",
    "studyx.ai": "studyx-vs-examghost",
    "testbro.app": "testbro-vs-examghost",
    "testwhiz.co": "testwhiz-vs-examghost",
    "transcript.study": "transcript-vs-examghost",
    "truststudy.app": "truststudy-vs-examghost",
    "usequietly.com": "usequietly-vs-examghost",
    "wolframalpha.com": "wolframalpha-vs-examghost",
}

# Exact M3 indexable set (42 slugs) from deliverables/indexation-plan.json
INDEXABLE_SLUGS = {
    "aceify-vs-examghost",
    "answerai-vs-examghost",
    "answerly-vs-examghost",
    "answersai-vs-examghost",
    "apexvision-vs-examghost",
    "asksia-vs-examghost",
    "brainly-vs-examghost",
    "campusai-vs-examghost",
    "canvasquiz-vs-examghost",
    "canvastoolkit-vs-examghost",
    "canvaswizard-vs-examghost",
    "cheatmate-vs-examghost",
    "classology-vs-examghost",
    "coursehero-vs-examghost",
    "coursology-vs-examghost",
    "cramly-vs-examghost",
    "examripper-vs-examghost",
    "fastsolve-vs-examghost",
    "formsolver-vs-examghost",
    "gauth-vs-examghost",
    "getquizsolve-vs-examghost",
    "knowt-vs-examghost",
    "mathosai-vs-examghost",
    "mindko-vs-examghost",
    "questionai-vs-examghost",
    "quizard-vs-examghost",
    "quizhack-vs-examghost",
    "quizmate-vs-examghost",
    "quizonator-vs-examghost",
    "quizsolverai-vs-examghost",
    "quizwizard-vs-examghost",
    "quizzy-vs-examghost",
    "rightclickai-vs-examghost",
    "silentstudent-vs-examghost",
    "smartsolve-vs-examghost",
    "snapgpt-vs-examghost",
    "solvely-vs-examghost",
    "studymonkey-vs-examghost",
    "studyx-vs-examghost",
    "testbro-vs-examghost",
    "transcript-vs-examghost",
    "usequietly-vs-examghost",
}

EVASION = re.compile(
    r"\bundetect\w*\b"
    r"|\bstealth(?:tap)?\b"
    r"|\blockdown\s+browser\b"
    r"|\b(?:get)?nolock\b"
    r"|\bghost\s+mode\b"
    r"|\bincognito(?:\s+(?:privacy\s+)?mode)?\b"
    r"|\bafk\s+mode\b"
    r"|\bfor\s+discreet\s+display\b"
    r"|\btab[- ]?switch\s+(?:suppression|immunity|detect\w*)\b"
    r"|\bbypass(?:es|ing)?\s+(?:proctor\w*|lockdown|honorlock|proctorio|respondus|canvas|blackboard|moodle|schoology|brightspace|d2l|quiz|extension|tab)\b"
    r"|\bproctor(?:ing)?\s+(?:bypass\w*|immunit\w*|safe|evas\w*|cloak\w*)\b"
    r"|\bproctorless\b|\bfocus\s+shield\b"
    r"|\binvisibl[ey]\b|\bcamouflage\b|\bwindow\.blur\b|\bzero\s+tab|\bspeedgrader\s+log\s+neutralizer\b"
    r"|\b(?:0|zero)\s+(?:action\s+|blur\s+)?flags?\b|\b100%\s+green\b",
    re.I,
)

def assert_clean(val, field_ref):
    if val and EVASION.search(val):
        raise ValueError(f"Evasion term found in {field_ref}: {val!r}")
    return val

def assert_clean_list(items, field_ref):
    return [assert_clean(x, f"{field_ref}[{i}]") for i, x in enumerate(items or [])]

NAME_OVERRIDES = {
    "canvasquiz.com": "CanvasQuiz",
    "canvasquizsolve.com": "CanvasQuizSolve",
    "answersai.com": "AnswersAI",
}

facts, excluded, missing = {}, [], []
for path in sorted(glob.glob(os.path.join(R, "facts-*.json"))):
    for r in json.load(open(path)):
        dom = r["domain"].lower().replace("www.", "")
        slug = SLUG.get(dom)
        if not slug:
            missing.append(dom)
            continue
        purpose = r.get("primaryPurpose")
        pr = r.get("pricing") or {}
        is_indexable = (slug in INDEXABLE_SLUGS) and (purpose != "activity-hiding")
        plans_clean = []
        for idx, p in enumerate(pr.get("plans") or []):
            plan_obj = {
                "name": assert_clean(p.get("name"), f"{dom}.plans[{idx}].name"),
                "price": p.get("price"),
                "currency": p.get("currency") or "USD",
                "period": p.get("period"),
                "notes": assert_clean(p.get("notes"), f"{dom}.plans[{idx}].notes"),
            }
            if p.get("omitted"):
                plan_obj["omitted"] = True
            plans_clean.append(plan_obj)
        facts[slug] = {
            "slug": slug,
            "name": assert_clean(NAME_OVERRIDES.get(dom, r["name"]), f"{dom}.name"),
            "domain": dom,
            "url": r.get("url") or f"https://{dom}",
            "purpose": purpose if purpose in ("ai-answers", "study-tools", "activity-hiding") else "other",
            "verified": bool(r.get("reachable", True)) and bool(pr.get("summary") or pr.get("plans") or r.get("platformsStated")),
            "indexable": is_indexable,
            "priceSummary": assert_clean(pr.get("summary"), f"{dom}.pricing.summary"),
            "plans": plans_clean,
            "freeTier": assert_clean(pr.get("freeTier"), f"{dom}.pricing.freeTier"),
            "trial": assert_clean(pr.get("trial"), f"{dom}.pricing.trial"),
            "platforms": assert_clean_list(r.get("platformsStated") or [], f"{dom}.platforms"),
            "features": [] if purpose == "activity-hiding" else assert_clean_list(r.get("featuresStated") or [], f"{dom}.features")[:6],
            "storeUrl": r.get("extensionStoreUrl"),
            "browsers": r.get("browsersStated") or [],
            "lastChecked": r.get("lastChecked") or "2026-11-27",
            "sources": [s for s in (r.get("sources") or []) if "proctorless" not in s.lower()],
            "confidence": r.get("confidence") or "low",
            "notes": assert_clean(r.get("notes"), f"{dom}.notes"),
        }

body = json.dumps(facts, indent=4, ensure_ascii=False)
open(OUT, "w").write(
    "// AUTO-GENERATED from research/gen-facts.py. Do not edit by hand; regenerate instead.\n"
    'import type { CompetitorFact } from "./competitor-facts";\n\n'
    f"export const FACTS: Record<string, CompetitorFact> = {body};\n"
)
idx_count = sum(1 for v in facts.values() if v["indexable"])
print(f"wrote {len(facts)} competitors ({idx_count} indexable); unmapped domains: {missing}")
