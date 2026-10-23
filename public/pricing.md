# ExamGhost — Official Pricing & Plan Specifications (2026)

> **Official URL**: https://examghost.com/#pricing  
> **Machine-Readable Pricing Spec**: https://examghost.com/pricing.md  
> **Last Verified**: March 29, 2026  

ExamGhost provides transparent, student-friendly pricing with **zero weekly billing traps** and **zero credit card required** for the 50-question Free Trial.

---

## 1. ExamGhost Plan Tiers (USD)

| Plan Name | Price (USD) | Billing Cadence | Effective Monthly Cost | Question Quota | Device Limit | Included Features |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Free Trial** | **$0.00** | Forever free | $0.00 / mo | **50 Free Solves** | 1 browser | Double-Click Inline Solve, Snap-It Vision OCR (`⌘+Shift+S`), Closed Shadow DOM HUD, Focus Shield |
| **Monthly Pass** | **$19.00** | Per month | $19.00 / mo | **Unlimited** | 2 browsers | All 24 features, all 3 display modes (Invisible, Stealth, Explain), all 3 delivery methods, 1-click cancel |
| **Academic Year Pass** *(Most Popular)* | **$99.00** | Per year | **$8.25 / mo** *(Save 56%)* | **Unlimited** | 2 browsers | Full Fall, Spring, Summer & Finals coverage, Attempt Memory, Priority 0.3s Edge AI inference |
| **Lifetime VIP Pass** | **$199.00** | One-time payment | Pay once, own forever | **Unlimited** | **3 computers** | Lifetime updates across undergraduate & graduate degrees, VIP Discord priority support |

---

## 2. What Every Plan Includes

- **0.3-Second Inline AI Solve**: Double-click any question on Canvas (Classic & New Quizzes), Blackboard (Learn & Ultra), Moodle, D2L Brightspace, Google Classroom, McGraw-Hill Connect, or Pearson MyLab.
- **Snap-It Vision OCR (`⌘+Shift+S` / `Ctrl+Shift+S`)**: Drag a selection rectangle over locked text (`user-select: none`), organic chemistry structures, calculus integrals, graphs, or embedded PDFs.
- **Closed Shadow DOM Isolation (`mode: 'closed'`)**: Zero visible DOM mutations, zero injected `<button>` tags in host quiz containers, and zero exposed `web_accessible_resources` signatures.
- **Focus Shield Telemetry Protection**: Intercepts `window.blur`, `visibilitychange`, and `document.hasFocus()` polling so Canvas SpeedGrader logs zero tab-switch flags.
- **3 Display Modes**:
  1. **Invisible Mode**: Silent answer selection with zero visual UI (100% screen-share safe).
  2. **Stealth Mode (Default)**: Subtle micro-indicator while reasoning, then applies the answer seamlessly.
  3. **Explain Mode**: Displays a step-by-step academic breakdown explaining why the correct option is true and why distractors are false.
- **3 Answer Delivery Methods**:
  1. **Auto-fill (Default)**: Selects the correct radio button, checkbox, or dropdown option.
  2. **Highlight**: Illuminates the correct option for 1–10 seconds (default 4s) so the student clicks it manually.
  3. **Clipboard**: Copies the verified answer directly to the system clipboard for short-answer and essay questions.
- **Emergency Panic Switch (`⌘+Shift+U` / `Esc × 2`)**: Unmounts all Shadow DOM state from browser memory in under 10 milliseconds.
- **14-Day Money-Back Guarantee**: Full refund within 14 days via `support@examghost.com` or our 24/7 Discord community (`https://discord.gg/aCcsyKYJq4`).

---

## 3. Annual Cost Comparison vs. Competing Extensions (2026 Audit)

| Extension / Tool | Advertised Trial | Recurring Billing Model | Annualized Student Cost | Built-in AI Solver? | Closed Shadow DOM + Focus Shield? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ExamGhost** | **$0 (50 Free Solves, no card)** | **$19/mo · $99/yr · $199 Lifetime** | **$99.00 / yr** | **Yes (0.3s Edge AI + Vision OCR)** | **Yes (`mode: 'closed'` + Focus Shield)** |
| **CheatMate ("Study Buddy")** | $0.99 trial trap | $9.99 / week | $519.48 / yr | Yes (~10s lag) | No (Mutates host `.question_text` DOM) |
| **Mathos AI (MathGPTPro)** | Limited demo | $9.98 / week | $518.96 / yr | Yes (Separate web/PDF flow) | No (Triggers `window.blur`) |
| **SchoolCheats.net** | None | $8.99 / week or $25/mo | $300.00–$467.48 / yr | K-12 game scripts only | No (Tab redirects) |
| **SnapGPT** | Limited | $7.99 / week | $415.48 / yr | Yes | No (`opacity: 0` DOM nodes + OpenReplay) |
| **QuizMate** | $0.99 trial | $7.99 / week | $415.48 / yr | Yes | No (Injected portal buttons) |
| **Course Hero** | None | $39.99 / month | $479.88 / yr | Static PDF unlock caps | No (Educator Exchange risk) |
| **CanvasHack** | None ($0 free solves) | $24.99/mo or $149.99 | $149.99–$299.88 / yr | **No AI Solver** (Tab blocker only) | Tab blocker only |
| **CanvasCrack** | None ($0 free solves) | $19.99/mo or $139.99 | $139.99–$239.88 / yr | **No AI Solver** (Tab blocker only) | Tab blocker only |
| **CanvasQuiz** | None | $48.99 every 4 months | $146.97 / yr | Yes | No (Injected buttons under questions) |
| **QuizSolver AI** | 10 free answers | $64.99–$224.99 / year | $64.99–$224.99 / yr | Yes (Capped tiers) | No (Toolbar focus blur) |
| **Quizonator** | None | $14.99 (300 cap) – $28.99/mo (1,200 cap) | $179.88–$347.88 / yr | Yes (Classic Quizzes only) | No (3.5★ · Fails in LTI iframes) |
| **Apex Vision AI** | Limited | $9.99 (500 cap) – $19.99/mo (2,000 cap) | $119.88–$239.88 / yr | Yes | **No** (FAQ: `"We do not build stealth modes"`) |
| **RightClick AI** | $0.99 7-day trial trap | $9.95/mo or $59.99/yr | $59.99–$119.40 / yr | Yes (50x/10x cap) | No (2.6★ · Blocked right-click menu) |
| **College Tools (Mindko)** | 3-day card trial trap | $9.99/wk or $24.99/mo | $299.88–$519.48 / yr | Yes | No (3.17★ · 24 injected JS files) |
| **AskSia** | $0.99 3-day trial trap | ~$25.00 / month | ~$300.00 / yr | External web tab only | No (`"Sync to AskSia"` file exporter only) |
| **Double Check AI** | 5 questions / 24h cap | Paid subscription | Recurring | Yes | No (244 Chrome users · Auto-clicks inputs) |
| **MyLab Solver** | Discontinued | Shut down (`mylabsolver.com`) | Discontinued | Offline | Offline |
