import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  AlertTriangle,
  Check,
  X,
  ArrowRight,
  Lock,
  Sparkles,
  PanelRight,
  EyeOff,
  CreditCard,
  ChevronDown,
  FileCode2,
  Cpu,
  Database,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Classology AI vs ExamGhost (2026) — 40.8MiB Sidebar Audit",
    },
    description: "Compare Classology AI (v4.0.2) with ExamGhost. Avoid 40.87MiB persistent sidebars and Canvas focus-loss logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/classology-vs-examghost",
    },
    openGraph: {
        title: "Classology AI vs ExamGhost (2026) — 40.8MiB Sidebar Audit",
        description: "Compare Classology AI (v4.0.2) with ExamGhost. Avoid 40.87MiB persistent sidebars and Canvas focus-loss logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/classology-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Classology AI vs ExamGhost (2026) — 40.8MiB Sidebar Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Classology AI vs ExamGhost (2026) — 40.8MiB Sidebar Audit",
        description: "Compare Classology AI (v4.0.2) with ExamGhost. Avoid 40.87MiB persistent sidebars and Canvas focus-loss logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const faqs = [
  {
    q: "Can Canvas or Blackboard detect Classology AI during a quiz?",
    a: "Yes. Classology AI v4.0.2 (published by Zou Labs LLC) injects an in-page 'Solve' button whenever you highlight text and docks a persistent AI Sidebar that stays on your screen across websites. Because it does not intercept window.blur or document.visibilitychange events, clicking the Solve button, pressing Cmd/Ctrl+Shift+1 for a Snapshot, or typing inside the sidebar causes Canvas SpeedGrader to log 'Stopped viewing the Canvas quiz-taking page'.",
  },
  {
    q: "Why is Classology AI's Chrome extension 40.87MiB in size?",
    a: "At 40.87MiB, Classology AI (v4.0.2, ID: mgijkcklpcaokmpejjcmchocpmkjdged) bundles an entire multi-feature web workspace—including persistent sidebar chat UI, flashcard generators, and study guide widgets—directly inside the browser extension. That heavy footprint slows down quiz page loads and leaves unmistakable DOM nodes and memory signatures compared to ExamGhost's lightweight Closed Shadow DOM engine.",
  },
  {
    q: "What user data does Classology AI collect according to the Chrome Web Store?",
    a: "On its official Chrome Web Store listing, publisher Zou Labs LLC (1245 Hewlett Plaza, Suite 32, Hewlett, NY) discloses collecting four distinct categories of user data: (1) Personally identifiable information, (2) Authentication information, (3) Personal communications, and (4) Website content. In addition, Zou Labs LLC declares itself a 'Non-trader' on the store, meaning European/UK consumer protection rules do not apply to disputes.",
  },
  {
    q: "How does Classology's Cmd/Ctrl+Shift+1 Snapshot compare to ExamGhost's screenshot solver?",
    a: "Pressing Cmd/Ctrl+Shift+1 in Classology opens a visible selection overlay that immediately transfers window focus to its docked sidebar, logging a focus-loss event in Canvas. ExamGhost captures complex diagrams, LaTeX math, and accounting tables inside a Closed Shadow DOM while its 8-layer Focus Shield keeps document.hasFocus() locked to true.",
  },
  {
    q: "How does Classology AI pricing compare to ExamGhost in 2026?",
    a: "Classology.ai offers a study app for flashcards and AI podcasts with a limited free tier, while Classology Pro bills ~$14.99–$19.99/month recurring across Web, iOS, and Android (up to $720 over a 4-year degree). ExamGhost gives every student 50 Free Solves with no credit card required, followed by $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 One-Time Lifetime.",
  },
];

export default function ClassologyVsExamGhostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-01-27",
                "dateModified": "2026-03-21",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/classology-vs-examghost/#webpage",
        url: "https://examghost.com/classology-vs-examghost",
        name: "Classology AI vs ExamGhost (2026): 40.87MiB Persistent Sidebar vs Zero-Footprint LMS Stealth",
        description:
          "2026 comparison of Classology AI (classology.ai v4.0.2 by Zou Labs LLC) and ExamGhost covering the 40.87MiB persistent sidebar, floating Solve button, Cmd+Shift+1 blur logs, privacy disclosures, and pricing.",
        isPartOf: { "@id": "https://examghost.com/#website" },
      },
      {
        "@type": "BreadcrumbList",
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
            name: "Classology AI vs ExamGhost",
            item: "https://examghost.com/classology-vs-examghost",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#111111] font-sans selection:bg-[#ff5722]/15 selection:text-[#ff5722]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500"
          >
            <Link prefetch={false} href="/" className="hover:text-[#111111] transition-colors">
              ExamGhost
            </Link>
            <span>/</span>
            <Link prefetch={false}
              href="/compare-canvas-hack-extensions"
              className="hover:text-[#111111] transition-colors"
            >
              Competitor Comparisons
            </Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">
              Classology AI vs ExamGhost
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-900 text-xs font-semibold">
                <PanelRight className="w-3.5 h-3.5 text-purple-600" />
                <span>
                  2026 Audit: Classology AI (v4.0.2 · 40.87MiB) vs ExamGhost
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#111111]">
                A{" "}
                <span className="underline decoration-purple-500/40 decoration-wavy underline-offset-4">
                  40.87MiB Persistent Sidebar
                </span>{" "}
                Is Built for Flashcards—Not Live Canvas Exams.
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-600 leading-relaxed">
                <strong>Classology AI</strong> (
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  classology.ai
                </code>
                , published by Zou Labs LLC) is a popular multi-platform app for
                turning lecture slides into flashcards and AI study podcasts.
                However, its <strong>40.87MiB Chrome extension (v4.0.2)</strong>{" "}
                docks a permanent split-screen sidebar, injects a floating{" "}
                <strong>&ldquo;Solve&rdquo;</strong> button on highlighted text,
                and triggers{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  window.blur
                </code>{" "}
                every time you click it or press{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  Cmd/Ctrl+Shift+1
                </code>
                .
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Extension Weight
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    40.87MiB Sidebar vs Zero-Footprint HUD
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    SpeedGrader Log
                  </div>
                  <div className="text-sm font-bold text-rose-600">
                    Sidebar Leaks Blur vs 8-Layer Shield
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Data Logged
                  </div>
                  <div className="text-sm font-bold text-emerald-700">
                    4 PII Categories vs Zero-Log Ephemeral
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-white font-semibold text-sm hover:bg-[#ff5722] transition-colors shadow-sm"
                >
                  <span>Start 50 Free Solves (No Card Needed)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link prefetch={false}
                  href="/canvas-quiz-solver-free-demo"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-neutral-300 text-[#111111] font-semibold text-sm hover:border-[#111111] transition-colors"
                >
                  <span>Try Live Stealth Demo</span>
                </Link>
              </div>
            </div>

            {/* Right Column: 40.87MiB Sidebar & Privacy Disclosure Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#141418] text-white rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
                <div className="px-5 py-3.5 bg-[#1c1c22] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Classology v4.0.2 Manifest &amp; DOM Inspector
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30">
                    40.87MiB Bundle
                  </span>
                </div>

                <div className="p-5 space-y-3.5">
                  {/* Simulated Split-Screen Sidebar Exposure */}
                  <div className="rounded-xl bg-[#1b1b22] border border-purple-500/25 p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 font-semibold">
                        1. On-Screen &amp; DOM Footprint (v4.0.2)
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                        window.blur Fired
                      </span>
                    </div>
                    <div className="grid grid-cols-12 gap-2 bg-[#111115] p-3 rounded-lg border border-neutral-800 text-[11px] font-mono">
                      <div className="col-span-7 space-y-1.5 pr-2 border-r border-neutral-800">
                        <div className="text-neutral-400">Canvas Quiz Frame</div>
                        <div className="p-1.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-200">
                          Selected text → Injected{" "}
                          <span className="underline font-bold">
                            [Solve]
                          </span>{" "}
                          button
                        </div>
                        <div className="text-rose-400 text-[10px]">
                          ! SpeedGrader: Stopped viewing quiz (18s)
                        </div>
                      </div>
                      <div className="col-span-5 pl-1 space-y-1">
                        <div className="text-purple-300 font-bold">
                          AI Sidebar
                        </div>
                        <div className="text-[10px] text-neutral-400 leading-tight">
                          &ldquo;Stays on your screen no matter what website
                          you&apos;re on&rdquo;
                        </div>
                        <div className="text-[10px] text-amber-300">
                          Cmd+Shift+1 Snapshot
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Zou Labs LLC Privacy Disclosure */}
                  <div className="rounded-xl bg-[#1b1b22] border border-amber-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        2. Zou Labs LLC Store Disclosures
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        Declared Non-Trader
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Publisher <strong>Zou Labs LLC</strong> (Hewlett, NY)
                      declares itself a <strong>Non-trader</strong> on the
                      Chrome Web Store while disclosing collection of{" "}
                      <span className="text-white font-semibold">
                        4 user data categories
                      </span>
                      : PII, Authentication info, Personal communications, and
                      Website content.
                    </p>
                  </div>

                  {/* ExamGhost Contrast */}
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>How ExamGhost Keeps Your Exam Clean</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Renders inside an isolated{" "}
                      <span className="text-white font-semibold">
                        Closed Shadow DOM HUD
                      </span>{" "}
                      with adjustable opacity, blocks{" "}
                      <code className="text-emerald-300 font-mono">
                        window.blur
                      </code>{" "}
                      events across 8 browser layers, and stores zero PII.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive 3-Tab Deep Dive (Pure CSS peer-checked) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
              Interactive Breakdown
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111111] mt-2">
              How Classology v4.0.2 Exposes You During Timed Assessments
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Switch between tabs to inspect Classology&apos;s 40.87MiB sidebar
              behavior, Zou Labs LLC&apos;s data collection disclosures, and
              how 3-model consensus beats study-guide chat streams.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            {/* Radio Inputs */}
            <input
              type="radio"
              name="classology-audit-tabs"
              id="tab-classology-sidebar"
              className="sr-only peer/sidebar"
              defaultChecked
            />
            <input
              type="radio"
              name="classology-audit-tabs"
              id="tab-classology-privacy"
              className="sr-only peer/privacy"
            />
            <input
              type="radio"
              name="classology-audit-tabs"
              id="tab-classology-cost"
              className="sr-only peer/cost"
            />

            {/* Tab Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-neutral-200 bg-neutral-50/80">
              <label
                htmlFor="tab-classology-sidebar"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/sidebar:bg-white peer-checked/sidebar:text-[#111111] peer-checked/sidebar:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <PanelRight className="w-4 h-4 text-purple-600 shrink-0" />
                <span>1. 40.87MiB Sidebar &amp; Solve Button</span>
              </label>
              <label
                htmlFor="tab-classology-privacy"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/privacy:bg-white peer-checked/privacy:text-[#111111] peer-checked/privacy:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <Database className="w-4 h-4 text-amber-600 shrink-0" />
                <span>2. Non-Trader &amp; 4 Data Categories</span>
              </label>
              <label
                htmlFor="tab-classology-cost"
                className="cursor-pointer px-4 py-4 text-left sm:text-center transition-all peer-checked/cost:bg-white peer-checked/cost:text-[#111111] peer-checked/cost:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <Cpu className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3. Study App ($15–$20/mo) vs 3-Model Stealth</span>
              </label>
            </div>

            {/* Panel 1: Sidebar & Solve Button */}
            <div className="hidden peer-checked/sidebar:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-50 text-purple-800 text-xs font-bold">
                  Visual &amp; Telemetry Exposure
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Classology&apos;s Persistent Sidebar and{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    Cmd+Shift+1
                  </code>{" "}
                  Trigger SpeedGrader
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Classology AI v4.0.2 advertises a persistent AI Sidebar that{" "}
                  <em>
                    &ldquo;stays on your screen no matter what website
                    you&apos;re on,&rdquo;
                  </em>{" "}
                  paired with a floating <strong>&ldquo;Solve&rdquo;</strong>{" "}
                  button that injects into the page DOM whenever you highlight
                  text.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  In a proctored lecture hall or computer lab, a 420px AI chat
                  sidebar is visible from rows away. Worse, clicking that
                  sidebar—or pressing{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    Cmd/Ctrl+Shift+1
                  </code>{" "}
                  to drag a Snapshot box—pulls active focus out of your Canvas
                  quiz frame, logging{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    Stopped viewing the Canvas quiz-taking page
                  </code>{" "}
                  in SpeedGrader.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-4 font-mono text-xs">
                <div className="text-neutral-400 border-b border-neutral-800 pb-2 flex items-center justify-between">
                  <span>Canvas SpeedGrader Action Log</span>
                  <span className="text-emerald-400">Live Comparison</span>
                </div>
                <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/30 space-y-1.5">
                  <div className="text-rose-300 font-bold">
                    Classology AI v4.0.2 (40.87MiB Bundle)
                  </div>
                  <div className="text-neutral-300">
                    09:21:14 — Highlighted text → injected &quot;Solve&quot; node
                  </div>
                  <div className="text-neutral-300">
                    09:21:18 — Clicked Sidebar / pressed Cmd+Shift+1
                  </div>
                  <div className="text-rose-400">
                    09:21:18 — FLAGGED: Stopped viewing quiz page (18s)
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                  <div className="text-emerald-300 font-bold">
                    ExamGhost Stealth Engine
                  </div>
                  <div className="text-neutral-300">
                    09:21:14 — Triggered inside Closed Shadow DOM v1
                  </div>
                  <div className="text-neutral-300">
                    09:21:15 — Focus Shield keeps document.hasFocus() === true
                  </div>
                  <div className="text-emerald-400">
                    09:21:15 — CLEAN: 0 blur or visibilitychange events logged
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Non-Trader & 4 Data Categories */}
            <div className="hidden peer-checked/privacy:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                  Chrome Web Store Privacy Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Does a Homework Helper Collect 4 Categories of Personal
                  Data as a &ldquo;Non-Trader&rdquo;?
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  On the official Chrome Web Store listing for{" "}
                  <strong>Classology AI – Homework &amp; Quiz Helper</strong>,
                  developer <strong>Zou Labs LLC</strong> (
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    1245 Hewlett Plaza, Suite 32, Hewlett, NY
                  </code>
                  ) explicitly registers as a <strong>Non-trader</strong>—meaning
                  consumer protection rights under EU/UK law do not apply to
                  billing disputes.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  At the same time, Classology discloses collecting{" "}
                  <strong>Personally identifiable information (PII)</strong>,{" "}
                  <strong>Authentication information</strong>,{" "}
                  <strong>Personal communications</strong>, and{" "}
                  <strong>Website content</strong>. ExamGhost processes quiz
                  questions ephemerally in memory and never logs your university
                  identity or LMS session tokens.
                </p>
              </div>

              <div className="bg-[#faf9f6] rounded-xl p-5 border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Chrome Web Store Privacy Disclosure Comparison
                </div>
                <div className="p-4 rounded-xl bg-white border border-rose-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      Classology AI (Zou Labs LLC)
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      Non-Trader · 4 Categories
                    </span>
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    <li>• Personally identifiable information (PII)</li>
                    <li>• Authentication information &amp; credentials</li>
                    <li>• Personal communications &amp; Website content</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      ExamGhost Zero-Trace Architecture
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-600 text-white">
                      Zero PII Stored
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    Questions are stripped of student identifiers and solved
                    ephemerally. Includes an instant hardware Panic Switch (
                    <code className="font-mono">⌘+Shift+U</code>) that wipes the
                    HUD in &lt;1ms.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 3: Study App vs 3-Model Stealth */}
            <div className="hidden peer-checked/cost:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold">
                  Accuracy &amp; Pricing Breakdown
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Flashcards &amp; AI Podcasts (~$15–$20/mo) vs 3-Model Exam
                  Consensus
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Classology is built around offline study tools—turning uploaded
                  PDFs into flashcards, study guides, and AI audio podcasts across
                  Web, iOS, and Android for{" "}
                  <strong>~$14.99–$19.99/month</strong> (up to{" "}
                  <strong>$720 over 4 years</strong>).
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  When you are inside a live timed Canvas, Blackboard, or
                  McGraw-Hill exam, you don&apos;t need an AI podcast—you need a
                  verified answer that won&apos;t get you flagged.{" "}
                  <strong>ExamGhost</strong> queries{" "}
                  <strong>
                    GPT-5.4, Claude Sonnet 4.6, and Gemini 3.1 Pro
                  </strong>{" "}
                  in parallel for 99.2% accuracy and gives you{" "}
                  <strong>50 free solves</strong> to prove it before you ever pay
                  a cent.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-3 text-xs">
                <div className="text-neutral-400 font-mono uppercase tracking-wider border-b border-neutral-800 pb-2">
                  4-Year University Cost &amp; Value Comparison
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-800">
                  <div>
                    <div className="font-bold text-white">
                      Classology Pro Recurring
                    </div>
                    <div className="text-neutral-400">
                      ~$14.99–$19.99/mo across Web, iOS &amp; Android
                    </div>
                  </div>
                  <span className="font-mono font-bold text-rose-400 text-sm">
                    ~$180–$240 / yr
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-800">
                  <div>
                    <div className="font-bold text-white">
                      ExamGhost Free Trial
                    </div>
                    <div className="text-neutral-400">
                      50 full-stealth 3-model solves (no card required)
                    </div>
                  </div>
                  <span className="font-mono font-bold text-emerald-400 text-sm">
                    $0.00
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 bg-emerald-500/10 rounded-lg px-3 border border-emerald-500/30">
                  <div>
                    <div className="font-bold text-emerald-300">
                      ExamGhost Academic Year / Lifetime
                    </div>
                    <div className="text-neutral-300">
                      $8.25/mo billed yearly ($99/yr) or $199 Lifetime
                    </div>
                  </div>
                  <span className="font-mono font-bold text-emerald-400 text-sm">
                    $99/yr or $199 Once
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Side-by-Side Comparison Matrix */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              Classology AI (v4.0.2) vs ExamGhost: 2026 Matrix
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Every stealth, bundle weight, privacy, and accuracy difference side
              by side.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-5 font-semibold">
                      Feature / Technical Metric
                    </th>
                    <th className="py-4 px-5 font-semibold text-purple-300">
                      Classology AI (v4.0.2)
                    </th>
                    <th className="py-4 px-5 font-semibold text-emerald-400">
                      ExamGhost (2026 Stealth)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Extension Bundle &amp; UI
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      40.87MiB package + persistent split-screen AI Sidebar
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Lightweight zero-footprint Closed Shadow DOM HUD
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Canvas / Blackboard Focus Shield
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      None — Sidebar &amp; &ldquo;Solve&rdquo; button fire{" "}
                      <code className="font-mono text-xs">window.blur</code>
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      8-Layer Focus Shield blocks{" "}
                      <code className="font-mono text-xs">blur</code> &amp;{" "}
                      <code className="font-mono text-xs">visibilitychange</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Screen Capture / OCR Shortcut
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      <code className="font-mono text-xs">
                        Cmd/Ctrl+Shift+1
                      </code>{" "}
                      Snapshot (transfers focus to sidebar)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Stealth Snap-It (
                      <code className="font-mono text-xs">⌘+Shift+S</code>) with
                      0ms focus loss
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      AI Reasoning Architecture
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Single-model chat stream + flashcard/podcast generator
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      3-Model Consensus (GPT-5.4 + Claude 4.6 + Gemini 3.1 Pro)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Chrome Store Privacy Disclosure
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Collects PII, Auth info, Personal comms &amp; Website
                      content
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Zero PII stored • Ephemeral memory-only processing
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Publisher &amp; Trader Status
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Zou Labs LLC (Declared Non-Trader on Chrome Web Store)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Verified Commercial Publisher + 24/7 Discord Support
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Free Trial &amp; Pricing
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      ~$14.99–$19.99/mo recurring subscription
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      50 Free Solves • $19/mo • $99/yr ($8.25/mo) • $199 Lifetime
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Manifest Drawer */}
            <details className="group border-t border-neutral-200 bg-neutral-50/70">
              <summary className="cursor-pointer px-5 py-3.5 flex items-center justify-between text-xs font-semibold text-neutral-600 hover:text-[#111111] select-none">
                <span className="flex items-center gap-2 m-0 inline">
                  <FileCode2 className="w-4 h-4 text-neutral-400" />
                  <h3 className="font-bold m-0 inline">
                    Technical Chrome Web Store Manifest &amp; Publisher Audit
                    (Classology AI v4.0.2)
                  </h3>
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-2 text-xs text-neutral-600 space-y-2 font-mono bg-white border-t border-neutral-200/70">
                <div>
                  <strong>Extension Name:</strong> Classology AI – Homework &amp;
                  Quiz Helper
                </div>
                <div>
                  <strong>Chrome Web Store ID:</strong>{" "}
                  <code>mgijkcklpcaokmpejjcmchocpmkjdged</code> (Version{" "}
                  <code>4.0.2</code>, Package Size <code>40.87MiB</code>, ~5,000
                  users, 4.7★ across 188 ratings)
                </div>
                <div>
                  <strong>Publisher &amp; Trader Declaration:</strong> Zou Labs
                  LLC • <code>1245 Hewlett Plaza, Suite 32, Hewlett, NY</code> •
                  Declared <code>Non-trader</code> on Chrome Web Store
                </div>
                <div>
                  <strong>Disclosed Data Collection (4 Categories):</strong>{" "}
                  Personally identifiable information, Authentication
                  information, Personal communications, Website content
                </div>
                <div>
                  <strong>Primary Domain &amp; Default Triggers:</strong>{" "}
                  <code>classology.ai</code> • In-page highlight{" "}
                  <code>Solve</code> button + Persistent AI Sidebar +{" "}
                  <code>Cmd/Ctrl+Shift+1</code> Snapshot
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* Honest Verdict: When to Use Which */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>When Classology AI Makes Sense</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Use Classology AI If...
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You want to upload lecture PDFs and slides to generate
                    flashcards, study guides, and AI audio podcasts on your
                    phone.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You are doing unmonitored reading where a persistent 420px
                    sidebar on your screen doesn&apos;t matter.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Avoid during live Canvas or Blackboard quizzes:</strong>{" "}
                    Clicking the injected &ldquo;Solve&rdquo; button or sidebar
                    logs focus departures in SpeedGrader.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border-2 border-[#111111] p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>When ExamGhost Wins</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Switch to ExamGhost If...
              </h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You take timed assessments on{" "}
                    <strong>
                      Canvas, Blackboard, Moodle, D2L, McGraw-Hill, or Pearson
                    </strong>{" "}
                    and need zero focus-loss logs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want a <strong>zero-footprint Closed Shadow DOM HUD</strong>{" "}
                    with adjustable opacity and a 1ms Panic Switch instead of a
                    40.87MiB sidebar.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want <strong>50 free solves</strong> and{" "}
                    <strong>3-model consensus accuracy (99.2%)</strong> without
                    handing over 4 categories of personal data.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              Frequently Asked Questions: Classology AI vs ExamGhost
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Direct answers on Classology v4.0.2&apos;s 40.87MiB sidebar, Zou
              Labs LLC privacy disclosures, and Canvas detection.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-neutral-200/90 shadow-sm overflow-hidden"
              >
                <summary className="cursor-pointer px-6 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111111] select-none hover:text-[#ff5722] transition-colors">
                  <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.q}</h3>
                  <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Bespoke Light/Gradient Conversion Strip + Related Comparisons */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-purple-50 via-white to-emerald-50 border border-purple-200/80 p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-200 text-purple-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Replace 40.87MiB Sidebars with Zero-Trace Stealth</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                  Start with 50 Free Solves Inside ExamGhost&apos;s Closed
                  Shadow DOM.
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                  No split-screen sidebar cluttering your quiz, zero{" "}
                  <code className="font-mono text-xs">window.blur</code> flags
                  in Canvas SpeedGrader, and zero PII logged.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-white font-semibold text-sm hover:bg-[#ff5722] transition-colors shadow-sm"
                >
                  <span>Get 50 Free Solves Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://discord.gg/aCcsyKYJq4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-neutral-300 text-[#111111] font-semibold text-xs sm:text-sm hover:border-[#111111] transition-colors"
                >
                  <span>Join 40,000+ Students on Discord</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
              <span className="font-semibold text-[#111111]">
                Related 2026 Extension Audits:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link prefetch={false}
                  href="/quizard-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  Quizard AI vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/fastsolve-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  FastSolve vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/bettercampus-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  BetterCampus vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/compare-canvas-hack-extensions"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  All 45+ Extension Comparisons →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
