import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  Lock,
  Sparkles,
  BookOpen,
  Layers,
  EyeOff,
  FileText,
  ExternalLink,
  ChevronDown,
  AlertTriangle,
  Terminal,
  CreditCard,
  Search,
} from "lucide-react";
import { FaChrome, FaDiscord } from "react-icons/fa";

export const metadata: Metadata = {
    title: {
        absolute: "Knowt vs ExamGhost (2026) — Flashcard App vs Quiz Stealth",
    },
    description: "Compare Knowt ($24.99/mo Ultra) with ExamGhost. Knowt builds flashcards before tests; ExamGhost solves live Canvas & Moodle exams in 0.3s (50 Free Solves).",
    alternates: {
        canonical: "https://examghost.com/knowt-vs-examghost",
    },
    openGraph: {
        title: "Knowt vs ExamGhost (2026) — Flashcard App vs Quiz Stealth",
        description: "Compare Knowt ($24.99/mo Ultra) with ExamGhost. Knowt builds flashcards before tests; ExamGhost solves live Canvas & Moodle exams in 0.3s (50 Free Solves).",
        url: "https://examghost.com/knowt-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Knowt vs ExamGhost (2026) — Flashcard App vs Quiz Stealth",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Knowt vs ExamGhost (2026) — Flashcard App vs Quiz Stealth",
        description: "Compare Knowt ($24.99/mo Ultra) with ExamGhost. Knowt builds flashcards before tests; ExamGhost solves live Canvas & Moodle exams in 0.3s (50 Free Solves).",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
                "datePublished": "2026-02-25",
                "dateModified": "2026-03-16",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
      "@id": "https://examghost.com/knowt-vs-examghost#webpage",
      url: "https://examghost.com/knowt-vs-examghost",
      name: "Knowt vs ExamGhost (2026): Free Quizlet Flashcard App vs Stealth Canvas Exam Solver",
      description:
        "2026 architectural comparison of Knowt (knowt.com) flashcard/lecture study tools and Knowt Ultra ($24.99/mo) versus ExamGhost's closed Shadow DOM and 0.3s Vision OCR solver.",
      breadcrumb: {
        "@id": "https://examghost.com/knowt-vs-examghost#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://examghost.com/knowt-vs-examghost#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://examghost.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Compare Extensions",
          item: "https://examghost.com/compare-canvas-hack-extensions",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Knowt vs ExamGhost",
          item: "https://examghost.com/knowt-vs-examghost",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://examghost.com/knowt-vs-examghost#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does the Knowt Chrome extension actually do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Knowt's Chrome extension is built to import existing flashcard sets from Quizlet into Knowt with one click, and to summarize web articles, PDFs, or lecture videos into flashcard decks. It is not an in-tab LMS exam solver and cannot answer live questions inside Canvas, Blackboard, or Moodle.",
          },
        },
        {
          "@type": "Question",
          name: "Can Canvas detect if I switch tabs to search Knowt flashcards or Kai AI during a quiz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Knowt has no Canvas Focus Shield or window.blur protection. Clicking out of your Canvas quiz tab to search a Knowt deck or ask Kai AI immediately dispatches window.blur and visibilitychange telemetry events, logging a red 'Stopped viewing the Canvas quiz-taking page' entry in your instructor's log.",
          },
        },
        {
          "@type": "Question",
          name: "Is Knowt really 100% free in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Knowt's Basic plan ($0) offers free manual flashcards and Learn Mode (with ads), but heavily caps AI tools (roughly 1 AI summary and 1 mock exam per month). Unlocking unlimited AI summaries, Kai AI chat, and ad-free studying requires Knowt Ultra at $24.99/month or ~$149.99/year. ExamGhost offers 50 free AI solves ($0) and costs $19/month, $99/year ($8.25/mo), or $199 Lifetime.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Knowt or ExamGhost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They serve two completely different stages of your semester. Knowt is an excellent Quizlet replacement for importing flashcard decks, prepping for AP exams, and recording classroom lectures days before a test. ExamGhost is built for live, timed online exams and homework on Canvas, Blackboard, Moodle, and McGraw Hill Connect—where you need 0.3s Vision OCR and zero-blur stealth.",
          },
        },
      ],
    },
  ],
};

export default function KnowtVsExamGhostPage() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-mint/40 selection:text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-ink-muted"
          >
            <Link prefetch={false} href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link prefetch={false}
              href="/compare-canvas-hack-extensions"
              className="hover:text-ink transition-colors"
            >
              Comparisons
            </Link>
            <span>/</span>
            <span className="text-ink font-semibold">Knowt vs ExamGhost</span>
          </nav>
        </div>

        {/* BESPOKE HERO: QUIZLET FLASHCARD IMPORTER VS LIVE IN-TAB LMS SOLVER */}
        <header className="relative pt-4 pb-16 sm:pb-20 overflow-hidden border-b border-sand-dark/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono font-bold text-amber-900 mb-6 shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>2026 Extension &amp; Pricing Audit · knowt.com vs ExamGhost</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-ink font-display leading-[1.08] mb-6 max-w-4xl">
              Knowt imports Quizlet flashcards before class. ExamGhost solves live Canvas exams in 0.3s.
            </h1>

            <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-3xl leading-relaxed mb-8">
              Knowt (<code className="text-ink font-mono text-sm bg-sand/70 px-1.5 py-0.5 rounded">knowt.com</code>) is an awesome free Quizlet replacement for studying flashcard decks and recording lectures days before a test. But many students install the <strong>Knowt Chrome Extension</strong> expecting it to solve live Canvas or Blackboard quizzes—only to find it only exports flashcards, forces you to switch tabs (triggering <code className="text-ink font-mono text-sm bg-sand/70 px-1.5 py-0.5 rounded">window.blur</code> logs), and charges <strong>$24.99/month for Knowt Ultra AI</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
              <a
                href="https://discord.gg/aCcsyKYJq4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-ink text-white font-semibold hover:bg-ink-light transition-all shadow-sm hover:shadow group text-sm sm:text-base"
              >
                <FaChrome className="w-4 h-4 text-mint" aria-hidden="true" />
                <span>Claim 50 Free Live Exam Solves ($0)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link prefetch={false}
                href="/canvas-quiz-solver-free-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface hover:bg-sand border border-sand-dark/40 text-ink font-semibold transition-all text-sm sm:text-base shadow-sm"
              >
                <span>Try Interactive Live Demo</span>
              </Link>
              <Link prefetch={false}
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-sand/50 hover:bg-sand border border-sand-dark/30 text-ink-muted hover:text-ink font-medium transition-all text-sm"
              >
                <span>Compare Passes ($19/mo · $99/yr)</span>
              </Link>
            </div>

            {/* HERO SIDE-BY-SIDE VISUAL MOCKUP */}
            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              {/* Left Card: Knowt Extension & Knowt Ultra */}
              <div className="rounded-2xl bg-surface border-2 border-rose-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                      <span className="font-display font-bold text-sm text-ink">Knowt Extension + Knowt Ultra</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[11px] font-mono font-bold text-rose-800">
                      $24.99/mo (~$149.99/yr)
                    </span>
                  </div>

                  {/* Simulated Tab-Switch Flashcard Search */}
                  <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-4 mb-4 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-ink-muted mb-2">
                      <span>Using Knowt During a Live Canvas Quiz</span>
                      <span className="text-rose-700 font-bold">Tab Switch Logged!</span>
                    </div>
                    <div className="p-3 rounded-lg bg-rose-950 text-rose-100 border border-rose-800 space-y-1.5">
                      <div className="text-rose-300">// 1. Switch from Canvas tab to Knowt deck tab:</div>
                      <div>&gt; Canvas Event: <span className="text-rose-400 font-bold">window.blur (&quot;Stopped viewing quiz&quot;)</span></div>
                      <div className="text-rose-300 pt-1">// 2. Cmd+F search static flashcard set:</div>
                      <div>&gt; Match Found: <span className="text-amber-300">0 results (Professor randomized numbers)</span></div>
                      <div className="text-rose-300">&gt; Free AI Cap: 1 summary / 1 mock exam per month</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <FileText className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>Extension Only Imports Flashcards:</strong> Built to export Quizlet decks and summarize articles—zero in-tab LMS question solver.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <Search className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>Static Decks Fail Dynamic Math:</strong> Memorized flashcards cannot solve algorithmic numbers, calculus graphs, or chemistry structures.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <CreditCard className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>$24.99/Mo Ultra Paywall:</strong> Free tier shows ads and caps AI to ~1 summary/month; unlimited Kai AI costs ~$149.99/yr.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>Role: Pre-Exam Flashcard Prep</span>
                  <span className="text-rose-800 font-bold">Tab Search: ~32.0s+</span>
                </div>
              </div>

              {/* Right Card: ExamGhost */}
              <div className="rounded-2xl bg-surface border-2 border-emerald-500/40 p-5 sm:p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="font-display font-bold text-sm text-ink">ExamGhost 0.3s Live Exam Stealth Suite</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-bold text-emerald-800">
                      50 Free Solves ($0)
                    </span>
                  </div>

                  {/* Simulated ExamGhost Live In-Tab Solve */}
                  <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-4 mb-4 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-ink-muted mb-2">
                      <span>Live Canvas / Blackboard Exam</span>
                      <span className="text-emerald-800 font-bold">0 Tab Switches Logged</span>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-950 text-emerald-100 border border-emerald-800 space-y-1.5">
                      <div className="text-emerald-400">// 1. Press Alt+Q or drag Snap-It OCR crosshair in-tab:</div>
                      <div>&gt; Focus Shield: <span className="text-emerald-300 font-bold">window.blur &amp; visibilitychange blocked</span></div>
                      <div className="text-emerald-400 pt-1">// 2. Computes randomized STEM &amp; graphs in 0.3s:</div>
                      <div>&gt; Closed Shadow HUD: <span className="text-white font-bold">D) ΔG° = -41.8 kJ/mol (Spontaneous)</span></div>
                      <div className="text-emerald-400">&gt; Panic Purge Ready: ⌘+Shift+U (&lt;1ms RAM wipe)</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Solves Live Inside Your LMS Tab:</strong> Renders verified answers inside an isolated <code className="font-mono text-[11px]">ShadowRoot (mode: &apos;closed&apos;)</code> on the same screen.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Handles Randomized Variables &amp; Diagrams:</strong> Snap-It Vision OCR computes exact answers for algorithmic STEM problems in 0.3s.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Save $50/Yr vs Knowt Ultra:</strong> Start with 50 Free Solves ($0), then pay $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="text-emerald-800 font-bold">Role: Live Exam &amp; Homework Stealth</span>
                  <span className="text-emerald-800 font-bold">In-Tab Solve: 0.3s</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* INTERACTIVE PURE-CSS 3-TAB COMPARISON */}
        <section className="py-16 sm:py-20 bg-sand/30 border-b border-sand-dark/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sand-dark/30 text-xs font-mono font-semibold text-ink-muted mb-3">
                <Layers className="w-3.5 h-3.5 text-emerald-800" />
                <span>Interactive Breakdown · Click Any Tab Below</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-ink mb-3">
                Pre-Exam Flashcard Prep vs Live Exam Stealth Architecture
              </h2>
              <p className="text-sm sm:text-base text-ink-muted">
                See why Knowt&apos;s Chrome extension and static decks cannot replace an in-tab closed Shadow DOM solver during graded assessments.
              </p>
            </div>

            <div>
              <input type="radio" name="kn-tabs" id="kn-tab-ext" className="sr-only peer/ext" defaultChecked />
              <input type="radio" name="kn-tabs" id="kn-tab-stem" className="sr-only peer/stem" />
              <input type="radio" name="kn-tabs" id="kn-tab-price" className="sr-only peer/price" />

              {/* Tab Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto mb-8 bg-surface p-2 rounded-2xl border border-sand-dark/30 shadow-sm">
                <label
                  htmlFor="kn-tab-ext"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/ext:bg-ink peer-checked/ext:text-white peer-checked/ext:shadow-sm flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>1. Extension Role &amp; Blur Logs</span>
                </label>
                <label
                  htmlFor="kn-tab-stem"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/stem:bg-ink peer-checked/stem:text-white peer-checked/stem:shadow-sm flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 shrink-0" />
                  <span>2. Static Decks vs Dynamic STEM</span>
                </label>
                <label
                  htmlFor="kn-tab-price"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/price:bg-ink peer-checked/price:text-white peer-checked/price:shadow-sm flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4 shrink-0" />
                  <span>3. Knowt Ultra ($24.99/Mo) vs Passes</span>
                </label>
              </div>

              {/* TAB 1: EXTENSION ROLE & BLUR LOGS */}
              <div className="hidden peer-checked/ext:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Knowt Chrome Extension: Quizlet Importer Only</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    What happens when you open Knowt during a Canvas quiz?
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    The Knowt Chrome extension is designed to export public Quizlet decks into Knowt with one click and convert articles or YouTube videos into study notes. It has <strong>no in-page exam solver</strong>.
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm text-ink-muted">
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>Triggers Canvas SpeedGrader Departure Logs:</strong> If you keep a Knowt flashcard tab or Kai AI chat open in a second tab and switch to it during a quiz, Canvas immediately fires <code className="font-mono">window.blur</code> and <code className="font-mono">visibilitychange</code> telemetry.
                    </div>
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>32+ Seconds Wasted Per Question:</strong> Switching tabs, hitting <code className="font-mono">Cmd+F</code> across flashcard decks, and reading through unindexed notes burns valuable minutes on timed tests.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ExamGhost: In-Tab Closed Shadow DOM + Focus Shield</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Solve directly inside your active exam tab in 0.3 seconds
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    ExamGhost eliminates the need to ever switch tabs or search external flashcard sets during a test:
                  </p>
                  <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto leading-relaxed border border-emerald-800">
                    <div className="text-emerald-400">// 1. 3-Layer Focus Shield blocks blur &amp; visibilitychange:</div>
                    <div>window.addEventListener(&quot;blur&quot;, (e) =&gt; e.stopImmediatePropagation(), true);</div>
                    <div className="text-emerald-400 mt-2">// 2. Closed ShadowRoot HUD renders answer in 0.3s:</div>
                    <div>const hud = host.attachShadow(&#123; mode: &quot;closed&quot; &#125;);</div>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Your Canvas SpeedGrader action log remains 100% clean with zero tab departures recorded.
                  </p>
                </div>
              </div>

              {/* TAB 2: STATIC FLASHCARDS VS DYNAMIC STEM */}
              <div className="hidden peer-checked/stem:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Knowt: Static Text Flashcards</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Why flashcard decks fail on university STEM &amp; publisher portals
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    College courses on Canvas New Quizzes, McGraw Hill Connect, Pearson MyLab, and WebAssign generate algorithmic questions where every student receives randomized numerical values and custom diagrams.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>Randomized Variables Break Memorized Cards:</strong> Even if a question stem matches an old Quizlet/Knowt card, the answer on the flashcard was calculated for a different student&apos;s numbers.
                    </div>
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>No Live Screen OCR:</strong> Knowt has no browser crosshair to snip embedded physics free-body diagrams, organic chemistry rings, or accounting spreadsheets on a live LMS page.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <Zap className="w-3.5 h-3.5" />
                    <span>ExamGhost: 0.3s Snap-It STEM Vision OCR</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Computes your exact randomized numbers and graphs on the spot
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Press <code className="font-mono text-xs bg-sand px-1.5 py-0.5 rounded">Alt+S</code> to drag ExamGhost&apos;s crosshair over any region of your screen—including sandboxed LTI 1.3 iframes and non-selectable images:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>Live Mathematical &amp; Chemical Reasoning:</strong> Reads your specific numerical parameters, LaTeX formulas, and graph axes to compute the exact answer in ~300ms.
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>Concise Step-by-Step Breakdown:</strong> Shows both the final answer to select and the condensed derivation so you can double-check multi-part problems effortlessly.
                    </div>
                  </div>
                </div>
              </div>

              {/* TAB 3: KNOWT ULTRA PRICING VS EXAMGHOST PASSES */}
              <div className="hidden peer-checked/price:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Knowt Free Limits &amp; $24.99/Mo Ultra Tier</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Free manual flashcards—but AI tools cost $24.99/month
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    While Knowt is well known for free manual flashcard studying (supported by banner ads), its AI tools are heavily metered on the free plan:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-3 rounded-xl bg-sand/50 border border-sand-dark/25">
                      <span className="font-semibold text-ink">Knowt Basic ($0) AI Quota</span>
                      <span className="font-mono text-rose-800">~1 AI Summary &amp; 1 Mock Exam/mo</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-sand/50 border border-sand-dark/25">
                      <span className="font-semibold text-ink">Knowt Ultra Monthly</span>
                      <span className="font-mono font-bold text-rose-800">$24.99 / month</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-sand/50 border border-sand-dark/25">
                      <span className="font-semibold text-ink">Knowt Ultra Annual</span>
                      <span className="font-mono font-bold text-ink">~$149.99 / year</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-sand/50 border border-sand-dark/25">
                      <span className="font-semibold text-ink">Live LMS Exam Solver Included?</span>
                      <span className="font-mono text-rose-800">No</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ExamGhost Student-First Passes</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    50 Free AI Solves upfront—and $50/year less than Knowt Ultra
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Keep using Knowt&apos;s free tier if you like importing Quizlet flashcards before class, and use ExamGhost for live homework and exams:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Starter Trial (No Card Required)</span>
                      <span className="font-mono font-bold text-emerald-800">50 Free Solves ($0)</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Monthly Pass (vs $24.99/mo)</span>
                      <span className="font-mono font-bold text-emerald-800">$19.00 / month</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Academic Year Pass (Saves ~$50/yr)</span>
                      <span className="font-mono font-bold text-emerald-800">$99 / year ($8.25/mo)</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Lifetime Degree Pass (Pay Once)</span>
                      <span className="font-mono font-bold text-emerald-800">$199 One-Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HONEST USE-CASE GUIDANCE */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-sand-dark/30 shadow-sm">
              <h2 className="font-display font-bold text-lg sm:text-xl text-ink mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-ink-muted" />
                <span>When Knowt Excels (Days Before the Exam)</span>
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                Knowt is one of the best pre-exam flashcard and note-organization platforms for high school and college students:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>1-Click Quizlet Deck Importing:</strong> Exporting public Quizlet sets into Knowt to use free Learn Mode and Spaced Repetition without Quizlet&apos;s paywall.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>AP Exam Study Guides &amp; Lecture Audio Notes:</strong> Recording in-person lectures or reviewing AP Biology/History study guides a week before test day.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
              <h2 className="font-display font-bold text-lg sm:text-xl text-emerald-300 mb-3 flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-emerald-300" />
                <span>When ExamGhost Excels (During Live LMS Exams)</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-4">
                Once the exam timer starts on Canvas, Blackboard, Moodle, or McGraw Hill Connect, ExamGhost takes over:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>0.3s In-Tab Solving Inside Closed Shadow DOM:</strong> Answers appear right on your exam screen without switching tabs or triggering <code className="font-mono text-xs text-emerald-300">window.blur</code>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Snap-It Vision OCR for Dynamic Math &amp; Graphs:</strong> Solves randomized numerical problems, diagrams, and cross-origin LTI 1.3 iframes that flashcards cannot cover.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>1ms Emergency Panic Key (<code className="font-mono text-xs text-emerald-300">⌘+Shift+U</code>):</strong> Wipes all HUD overlays from your screen and RAM in under a millisecond.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SIDE-BY-SIDE COMPARISON MATRIX + COLLAPSIBLE MANIFEST DRAWER */}
        <section className="py-16 bg-surface border-y border-sand-dark/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                2026 Feature &amp; Architecture Matrix
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted">
                Verified directly against <code className="font-mono text-xs">knowt.com</code> and the Knowt Chrome Extension.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-sand-dark/30">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                <thead>
                  <tr className="border-b border-sand-dark/30 bg-sand/40">
                    <th className="py-3.5 px-4 font-bold text-ink">Capability / Metric</th>
                    <th className="py-3.5 px-4 font-bold text-ink-muted">Why It Matters</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-800">ExamGhost</th>
                    <th className="py-3.5 px-4 font-bold text-rose-800">Knowt / Knowt Ultra</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-dark/20">
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Primary Workflow</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Pre-exam studying vs live exam execution</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">Live In-Tab LMS Exam Solver + Stealth</td>
                    <td className="py-3.5 px-4 text-ink-muted">Pre-Exam Flashcard Decks &amp; Lecture Notes</td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">In-Tab Canvas / Blackboard Solver</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Answering unseen questions inside the LMS</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      0.3s Solve in Closed ShadowRoot
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      None (Extension only imports flashcards)
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Blur Masking)</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Blocks Canvas SpeedGrader tab-switch logs</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      3-Layer Capture-Phase Shield
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      None (Switching to Knowt tab logs blur)
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Live Crosshair Vision OCR</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Solves graphs, diagrams &amp; randomized numbers</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      0.3s Region Snip on Any Webpage
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      None on live LMS pages
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Quizlet Import &amp; Lecture Audio</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Building flashcard decks before test day</td>
                    <td className="py-3.5 px-4 text-ink-muted">Focused purely on live exam stealth</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      Core Strength of Knowt
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Free Tier AI Allowance</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Testing real AI capabilities for $0</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      50 Free AI Solves + 10 OCR Snips ($0)
                    </td>
                    <td className="py-3.5 px-4 text-ink-muted">
                      Capped to ~1 AI summary &amp; 1 mock exam/mo (Ad-supported)
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Unlimited AI Pricing</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Monthly, annual &amp; lifetime cost</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      $19/mo · $99/yr ($8.25/mo) · $199 Life
                    </td>
                    <td className="py-3.5 px-4 text-ink-muted">
                      $24.99/mo or ~$149.99/yr (Knowt Ultra)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Chrome Extension & Platform Audit Drawer */}
            <details className="mt-6 group rounded-2xl bg-sand/40 border border-sand-dark/30 p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-mono font-bold text-ink">
                <span className="flex items-center gap-2 m-0 inline">
                  <Terminal className="w-4 h-4 text-emerald-800" />
                  <h3 className="font-bold m-0 inline">Technical Platform &amp; App Store Audit (knowt.com)</h3>
                </span>
                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 pt-4 border-t border-sand-dark/20 grid sm:grid-cols-2 gap-4 text-xs font-mono text-ink-muted">
                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                  <div className="text-ink font-bold mb-1">Knowt Verified Identifiers</div>
                  <div>Primary Domain: <span className="text-ink">knowt.com (Kai AI Chatbot)</span></div>
                  <div>Mobile Apps: <span className="text-ink">iOS (id6463744184) · Android (com.knowt.app)</span></div>
                  <div>Web Summarizers: <span className="text-ink">/ai-lecture-note-taker · /ai-pdf-summarizer</span></div>
                  <div>District Portal: <span className="text-rose-800">knowt.com/teachers &amp; /schools</span></div>
                </div>
                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                  <div className="text-ink font-bold mb-1">ExamGhost Stealth Architecture</div>
                  <div>UI Isolation: <span className="text-emerald-800">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</span></div>
                  <div>Event Shield: <span className="text-emerald-800">window.blur / visibilitychange capture</span></div>
                  <div>Screen OCR: <span className="text-emerald-800">0.3s Edge Vision Crosshair</span></div>
                  <div>Panic Hotkey: <span className="text-emerald-800">⌘+Shift+U (&lt;1ms RAM &amp; DOM wipe)</span></div>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* OFFICIAL STUDENT DISCORD COMMUNITY BANNER */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 my-14">
          <div className="rounded-[32px] bg-[#3b47d6] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lift">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <FaDiscord className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                  Join the ExamGhost Student Discord
                </h2>
                <p className="text-xs sm:text-sm text-white/90">
                  Study flashcards on Knowt before class—claim 50 free ExamGhost AI solves for live Canvas &amp; Blackboard tests.
                </p>
              </div>
            </div>
            <a
              href="https://discord.gg/aCcsyKYJq4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-[#232b88] hover:bg-white/95 text-sm font-bold shadow-sm whitespace-nowrap inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
            >
              <span>Join Discord &amp; Get 50 Free Solves</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
              Knowt vs ExamGhost: Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Direct answers verified against Knowt.com and the Knowt Chrome Extension in 2026.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What does the Knowt Chrome extension actually do?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Knowt&apos;s Chrome extension is designed to import existing flashcard sets from <strong>Quizlet</strong> into Knowt with one click, and to summarize web articles, PDFs, or lecture videos into flashcard decks. It is not an in-tab LMS exam solver and cannot answer live questions inside Canvas, Blackboard, or Moodle.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Can Canvas detect if I switch tabs to search Knowt flashcards or Kai AI during a quiz?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Yes. Knowt has no Canvas Focus Shield or <code className="font-mono text-xs">window.blur</code> protection. Clicking out of your Canvas quiz tab to search a Knowt deck or ask Kai AI immediately dispatches <code className="font-mono text-xs">window.blur</code> and <code className="font-mono text-xs">visibilitychange</code> telemetry events, logging a red <em>&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</em> entry in your instructor&apos;s log.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Is Knowt really 100% free in 2026?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Knowt&apos;s Basic plan ($0) offers free manual flashcards and Learn Mode (with ads), but heavily caps AI tools to roughly 1 AI summary and 1 mock exam per month. Unlocking unlimited AI summaries, Kai AI chat, and ad-free studying requires <strong>Knowt Ultra at $24.99/month or ~$149.99/year</strong>. ExamGhost offers <strong>50 free AI solves ($0)</strong> and costs <strong>$19/month, $99/year ($8.25/mo), or $199 Lifetime</strong>.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Should I use Knowt or ExamGhost?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                They serve two completely different stages of your semester. Knowt is an excellent free Quizlet replacement for importing flashcard decks, prepping for AP exams, and recording classroom lectures days before a test. ExamGhost is built for live, timed online exams and homework on Canvas, Blackboard, Moodle, and McGraw Hill Connect—where you need 0.3s Vision OCR and zero-blur stealth.
              </p>
            </details>
          </div>
        </section>

        {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-mint/25 to-amber-50/70 border border-emerald-200/80 p-6 sm:p-10 shadow-sm mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-emerald-200 text-xs font-mono font-bold text-emerald-900 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Keep Your Canvas SpeedGrader Log Clean</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-2">
                  Don&apos;t switch tabs to search flashcards mid-exam.
                </h2>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Solve randomized STEM problems, graphs, and multiple-choice questions right inside your active exam tab in 0.3s. Start with 50 Free Solves ($0).
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  href="https://discord.gg/aCcsyKYJq4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-white font-bold hover:bg-ink-light transition-all shadow-sm text-sm"
                >
                  <FaChrome className="w-4 h-4 text-mint" />
                  <span>Claim 50 Free Solves</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-sand/60 text-ink font-semibold border border-sand-dark/30 transition-all text-sm"
                >
                  <span>View Passes ($19/mo · $99/yr)</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-sand-dark/20 pt-8">
            <h2 className="font-display font-bold text-base sm:text-lg text-ink mb-4">
              Compare Other Homework &amp; LMS Extensions (2026)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <Link prefetch={false}
                href="/schoolcheats-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">SchoolCheats vs ExamGhost</span>
                <span className="text-ink-muted">7 K-12 Game Scripts vs LMS Stealth</span>
              </Link>
              <Link prefetch={false}
                href="/studyfox-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">StudyFox vs ExamGhost</span>
                <span className="text-ink-muted">Toolbar Popup Blur vs Focus Shield</span>
              </Link>
              <Link prefetch={false}
                href="/coursology-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">Coursology vs ExamGhost</span>
                <span className="text-ink-muted">Coursey AI Suite vs Exam Stealth</span>
              </Link>
              <Link prefetch={false}
                href="/quizmate-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">QuizMate vs ExamGhost</span>
                <span className="text-ink-muted">Injected LMS Button vs Shadow DOM</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
