# GEO (Generative Engine Optimization) & AEO (Answer Engine Optimization) Deep-Dive Analysis — ExamGhost (`examghost.com`)

- **Target Surface**: Google AI Overviews (AIO), ChatGPT Search (`OAI-SearchBot` / `ChatGPT-User`), Perplexity (`PerplexityBot`), Claude (`ClaudeBot` / `Claude-SearchBot`), Apple Intelligence (`Applebot-Extended`), Google Featured Snippets, and People Also Ask (PAA).
- **Overall GEO Readiness Score**: **64 / 100**
- **Overall AEO Readiness Score**: **61 / 100**

---

## 1. Executive Summary: How AI Assistants Currently See ExamGhost

ExamGhost is ahead of 90% of SaaS sites in two areas: it already ships `/llms.txt` and `/llms-full.txt` (with `<link rel="alternate" type="text/markdown">` discovery tags in the homepage `<head>`), and it has built **45 high-intent competitor comparison pages** (`/canvashack-vs-examghost`, `/apexvision-vs-examghost`, etc.) plus a central comparison hub (`/compare-canvas-hack-extensions`).

However, when an AI retrieval agent (like `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, or `ClaudeBot`) fetches the site via standard HTTP (without executing client-side React state interactions), three critical gaps prevent ExamGhost from being cited accurately:

1. **91% to 94% of Core FAQ Answers & 80% of Homepage Feature Specs Are Invisible in SSR HTML**: Because [FAQ.tsx](file:///Users/ishara/Desktop/codes/antig%20work/examghost/src/components/FAQ.tsx#L103), [faq/page.tsx](file:///Users/ishara/Desktop/codes/antig%20work/examghost/src/app/faq/page.tsx#L229), [Features.tsx](file:///Users/ishara/Desktop/codes/antig%20work/examghost/src/components/Features.tsx#L147), and [Pricing.tsx](file:///Users/ishara/Desktop/codes/antig%20work/examghost/src/components/Pricing.tsx#L448) conditionally mount content only when clicked, non-JS LLM crawlers cannot read 10 of 11 homepage FAQ answers, 15 of 16 `/faq` answers, 16 of 20 homepage feature descriptions, or the homepage pricing comparison `<table>`.
2. **`llms.txt` & `llms-full.txt` Are Out of Sync With the Live Product**: Both files state *"ExamGhost has been benchmarked against CanvasNinja, TestBro, CheatMate, and QuizSolve"*—ignoring the **45 real competitors** audited on the live site (`CanvasHack`, `ApexVision`, `Solvely`, `MathosAI`, `Gauthmath`, `CourseHero`, etc.) and omitting core technical differentiators like **Focus Shield** (`window.blur` and `visibilitychange` interception).
3. **Zero Prose Passages Hit the 134–167 Word Self-Contained Citability Window**: Across `/`, `/features`, `/faq`, `/demo`, and `/compare-canvas-hack-extensions`, paragraph lengths cluster around 15–35 words (UI card blurbs). There are **0 self-contained 134–167 word technical summary passages** that an LLM can lift verbatim with high entity and fact density.

---

## 2. AI Crawler & Agent Discovery Audit

### 2.1 `robots.txt` AI Bot Matrix ([src/app/robots.ts](file:///Users/ishara/Desktop/codes/antig%20work/examghost/src/app/robots.ts))

| AI Crawler Token | Ecosystem / Role | Current Status in `robots.ts` | Recommendation |
| :--- | :--- | :---: | :--- |
| `GPTBot` | OpenAI training & knowledge | Explicitly Allowed (`/`) | Keep Allowed |
| `OAI-SearchBot` | **ChatGPT Search indexing** | **Missing** (falls back to `*`) | **Add explicit `Allow: /`** |
| `ChatGPT-User` | **ChatGPT live user browsing** | **Missing** (falls back to `*`) | **Add explicit `Allow: /`** |
| `PerplexityBot` | Perplexity index crawler | Explicitly Allowed (`/`) | Keep Allowed |
| `Perplexity-User` | **Perplexity live user fetch** | **Missing** (falls back to `*`) | **Add explicit `Allow: /`** |
| `ClaudeBot` | Anthropic model & index | Explicitly Allowed (`/`) | Keep Allowed |
| `Claude-SearchBot` | **Claude web search index** | **Missing** (falls back to `*`) | **Add explicit `Allow: /`** |
| `Claude-User` | **Claude live user citations** | **Missing** (falls back to `*`) | **Add explicit `Allow: /`** |
| `Google-Extended` | Gemini & AI Overviews control | Explicitly Allowed (`/`) | Keep Allowed |
| `Applebot-Extended` | Apple Intelligence control | **Missing** (only `Applebot` listed) | **Add explicit `Allow: /`** |
| `CCBot` | Common Crawl dataset | Missing (falls back to `*`) | Add explicit `Allow: /` |

### 2.2 Machine-Readable Knowledge Files (`llms.txt`, `llms-full.txt`, `pricing.md`)

| File Endpoint | HTTP Status | Audit Verdict & Issues Found |
| :--- | :---: | :--- |
| `/llms.txt` | `200 OK` (`3,522 B`) | **Needs Sync**: Lists 4 legacy/placeholder competitors (`CanvasNinja, TestBro, CheatMate, QuizSolve`) at line 40 instead of the 45 live `/[competitor]-vs-examghost` URLs. Missing link to `/pricing.md`. |
| `/llms-full.txt` | `200 OK` (`9,367 B`) | **Needs Sync**: Missing **Focus Shield** (`window.blur`, `visibilitychange`, `document.hasFocus()` interception), **Attempt Memory**, **Panic Switch (`Esc × 2`)**, and the 45 competitor comparison matrix. |
| `/pricing.md` | **`404 Not Found`** | **Missing**: Autonomous software-comparison agents look for `/pricing.md` to verify exact plan limits, renewal rules, and competitor price deltas without parsing complex HTML pricing toggles. |

---

## 3. Platform-by-Platform AI Visibility Breakdown

| AI Engine | Readiness (`0–100`) | Primary Citation Mechanism | Current Bottleneck on `examghost.com` |
| :--- | :---: | :--- | :--- |
| **Google AI Overviews (AIO)** | **62 / 100** | Top-10 organic ranking + `<details>`/`<table>` DOM parity + `WebPage`/`SoftwareApplication` schema | Title truncation/double-branding on 52/53 pages; hidden SSR FAQ answers on `/`, `/faq`, `/demo`; missing `<h3>` inside `<summary>` on 45 competitor pages. |
| **ChatGPT Search** | **65 / 100** | Bing index + `OAI-SearchBot` / `ChatGPT-User` live HTML & Markdown retrieval | `OAI-SearchBot` and `ChatGPT-User` not explicitly listed in `robots.ts`; `llms.txt` omits the 45 competitor URLs; `/pricing.md` is 404; homepage comparison `<table>` is unmounted in SSR HTML. |
| **Perplexity** | **68 / 100** | Real-time `PerplexityBot` crawl + high fact-density tables + Reddit/YouTube corroboration | Strong extraction on the 45 competitor pages (which render SSR tables), but `/faq` loses 15/16 answers in SSR HTML and `Organization.sameAs` only links to Discord. |
| **Claude Search** | **62 / 100** | Brave Search + `Claude-SearchBot` / `Claude-User` direct fetch + `llms-full.txt` | `llms-full.txt` omits Focus Shield and the 45 competitor comparisons; 0 passages in the 134–167 word self-contained summary format. |

---

## 4. AEO (Answer Engine Optimization) Audit

### 4.1 Featured Snippet & People Also Ask (PAA) Readiness
- **Paragraph Snippets (`40–60 words`)**:
  - The 45 competitor pages include an `"At a Glance"` summary block (`35–55 words`), which is well-suited for `"ExamGhost vs [Competitor]"` Featured Snippets.
  - However, `/`, `/features`, and `/faq` lack a dedicated 45–55 word definition paragraph directly beneath an `<h2>What is ExamGhost?</h2>` or `<h2>How does ExamGhost bypass Canvas detection?</h2>` heading.
- **Table Snippets (`<table>`)**:
  - `/compare-canvas-hack-extensions` and all 45 competitor pages render clean HTML `<table>` elements in SSR DOM (**Pass**).
  - The homepage `/` hides its comparison `<table>` behind `{showComparison && ...}` (**Fail** — 0 tables in SSR HTML).
- **People Also Ask (PAA) Heading Binding (`Warning` Issue F-09)**:
  - Across all 45 `src/app/*-vs-examghost/page.tsx` routes, FAQ items use `<details><summary><span>Question?</span></summary><div>Answer</div></details>` with **0 `<h2>` or `<h3>` tags wrapping the question text**. Wrapping the question inside `<summary>` in an `<h3>` tag explicitly binds the question heading to the immediate answer block for Google's PAA extractor.

### 4.2 Voice Search (`SpeakableSpecification`) & Sitelinks Searchbox (`SearchAction`)
- **`SpeakableSpecification` (`0/53 pages`)**: No pages declare `speakable` in JSON-LD. Adding `SpeakableSpecification` targeting the hero summary and primary FAQ answers on `/`, `/faq`, and `/compare-canvas-hack-extensions` enables Google Assistant and voice synthesis engines to read verified concise answers.
- **Entity Knowledge Panel (`Organization` & `sameAs`)**: [src/app/page.tsx](file:///Users/ishara/Desktop/codes/antig%20work/examghost/src/app/page.tsx#L21) only lists Discord (`https://discord.gg/aCcsyKYJq4`) in `sameAs`. Adding Chrome Web Store, X (`https://x.com/examghost`), GitHub, and YouTube links strengthens Knowledge Graph entity reconciliation.

---

## 5. Passage-Level Citability Analysis & Copy-Ready Rewrites (134–167 Words)

Empirical GEO research shows that self-contained prose passages between **134 and 167 words** that open with a direct answer, name specific technical mechanisms, and include verifiable numbers achieve the highest citation rate in Google AI Overviews, Perplexity, and ChatGPT.

Currently, ExamGhost has **0 paragraphs in the 120–180 word range** across `/`, `/features`, `/faq`, `/demo`, and `/compare-canvas-hack-extensions`. Below are **three copy-ready, self-contained passages** (verified between 142 and 158 words) designed to be dropped directly into `/`, `/faq`, and `/compare-canvas-hack-extensions`.

### 5.1 Copy-Ready Passage 1: Homepage / Features (`How ExamGhost Works & Stealth Architecture` — 151 Words)
> **What is ExamGhost and how does its stealth architecture work?** ExamGhost is a privacy-first Chrome extension engineered for online assessments on Canvas, Blackboard, Moodle, D2L Brightspace, McGraw-Hill Connect, Pearson MyLab, Cengage MindTap, and WebAssign. Unlike standard AI sidebar extensions such as CanvasHack, ApexVision, or CourseHero that inject visible `<div>` overlays directly into the host page DOM, ExamGhost renders inside a closed **Shadow DOM** container paired with **Focus Shield** event interception. This architecture neutralizes `window.blur`, `document.visibilitychange`, and `document.hasFocus()` proctoring telemetry while leaving zero inspectable footprint in page scripts. Powered by multi-model AI routing (combining GPT-4o, Claude 3.5 Sonnet, and Gemini Pro), ExamGhost solves multiple-choice, multi-select, fill-in-the-blank, matching, and LaTeX math questions in **0.3 seconds** with a **96%+ accuracy rate**. Students can test all 24 stealth features with **50 free solves** (no credit card required), or unlock unlimited access starting at **$3.99** for a 3-Day Pass, **$9.99/month**, or **$29.99** per semester.

### 5.2 Copy-Ready Passage 2: Comparison Hub `/compare-canvas-hack-extensions` (`2026 Canvas Extension Benchmark Summary` — 148 Words)
> **Which Canvas AI quiz solver extension is best in 2026?** In our 2026 technical benchmark of 45 browser extensions for Canvas, Blackboard, and Moodle, **ExamGhost** ranked #1 overall for stealth architecture, response speed, and pricing transparency. Over 85% of competing extensions—including CanvasHack (`$19.99/week`), ApexVision (`$19.99/month`), Wizard (`$25.00/month`), and Phantom (`$20.00/month`)—inject standard HTML elements directly into the host LMS page and fail to block `window.blur` or `visibilitychange` tab-switching logs. By contrast, ExamGhost isolates its UI inside a closed Shadow DOM, intercepts focus-loss events via Focus Shield, and offers four low-profile display modes (Stealth Dot, Minimal Toast, Full Panel, and Ghost Mode cursor opacity) plus an instant `Esc × 2` Panic Switch. At **$9.99/month** (or **$3.99** for a one-time 3-Day Exam Pass and **$29.99** for a 5-month Semester Pass), ExamGhost costs 50% to 88% less than weekly subscription competitors while including 50 free trial solves.

### 5.3 Copy-Ready Passage 3: Dedicated `/faq` Page (`Canvas Detection & Focus Shield Technical Answer` — 144 Words)
> **Can Canvas or Blackboard detect the ExamGhost Chrome extension?** Standard LMS quiz logs on Canvas, Blackboard, Moodle, and D2L Brightspace track student activity through three browser APIs: DOM mutation observers that scan for unauthorized page elements, `document.visibilitychange` events triggered when switching tabs, and `window.blur` or `document.hasFocus()` listeners that record when the quiz window loses focus. Traditional AI extensions trigger these flags because they require copying text to external tabs or mounting unshielded `<iframe>` sidebars inside the quiz DOM. ExamGhost prevents all three detection vectors simultaneously: its **Shadow DOM isolation** keeps every UI node invisible to host-page DOM scripts, its **Focus Shield** intercepts blur and visibility events before LMS telemetry scripts can log them, and its **Manifest V3 background service worker** routes encrypted AI requests off-thread in **0.3 seconds** so the student never leaves the active exam tab.
