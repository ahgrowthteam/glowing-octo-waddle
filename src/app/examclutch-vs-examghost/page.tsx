import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Check,
  X,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  Clock,
  MousePointerClick,
  Code2,
  EyeOff,
  FileWarning,
  DollarSign,
  Lock,
  Zap,
  ScanLine,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  SlidersHorizontal,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "ExamClutch vs ExamGhost (2026) — 30s Batch Lag vs 0.3s AI",
    },
    description: "2026 audit of ExamClutch vs ExamGhost. Replace 30-second batch delays, auto-clicker flags, and $9/week billing with 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/examclutch-vs-examghost",
    },
    openGraph: {
        title: "ExamClutch vs ExamGhost (2026) — 30s Batch Lag vs 0.3s AI",
        description: "2026 audit of ExamClutch vs ExamGhost. Replace 30-second batch delays, auto-clicker flags, and $9/week billing with 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/examclutch-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ExamClutch vs ExamGhost (2026) — 30s Batch Lag vs 0.3s AI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ExamClutch vs ExamGhost (2026) — 30s Batch Lag vs 0.3s AI",
        description: "2026 audit of ExamClutch vs ExamGhost. Replace 30-second batch delays, auto-clicker flags, and $9/week billing with 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
                "datePublished": "2026-02-12",
                "dateModified": "2026-03-16",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
      "@id": "https://examghost.com/examclutch-vs-examghost#webpage",
      url: "https://examghost.com/examclutch-vs-examghost",
      name: "ExamClutch vs ExamGhost AI (2026): ~30s Batch Wait, Auto-Click Risks & Pricing Audit",
      description:
        "Side-by-side 2026 technical and pricing audit comparing ExamClutch (examclutch.com, v2.0.8) and ExamGhost AI across extension stealth, answer latency, synthetic DOM clicking vs Shadow DOM display, and subscription value.",
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        name: "ExamGhost AI",
        url: "https://examghost.com",
      },
      breadcrumb: {
        "@id": "https://examghost.com/examclutch-vs-examghost#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://examghost.com/examclutch-vs-examghost#breadcrumb",
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
          name: "Compare LMS Extensions",
          item: "https://examghost.com/compare-canvas-hack-extensions",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ExamClutch vs ExamGhost AI",
          item: "https://examghost.com/examclutch-vs-examghost",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://examghost.com/examclutch-vs-examghost#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does ExamClutch work, and how long does it take to answer a quiz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "According to ExamClutch's official FAQ on examclutch.com, you press Cmd/Ctrl+Shift+X on a supported quiz page, wait roughly 30 seconds while it batch-fetches answers, and then double-click individual questions so its content script automatically marks or fills the answer. By contrast, ExamGhost AI streams step-by-step reasoning and final answers in ~0.3 to 1.4 seconds per question without a 30-second batch stall.",
          },
        },
        {
          "@type": "Question",
          name: "Can Canvas or school portals detect ExamClutch's Chrome extension?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In our audit of ExamClutch v2.0.8, we found two technical exposure vectors: (1) its manifest declares logo/logo.png under web_accessible_resources with matches set to <all_urls>, allowing any webpage to probe that extension asset URL to detect installation, and (2) double-clicking a question triggers content/applier.js to programmatically select radio buttons, checkboxes, or dropdowns in the host DOM (generating synthetic events with isTrusted: false). ExamGhost AI exposes zero web_accessible_resources to <all_urls> and displays answers inside a closed Shadow DOM HUD so every click you make is a native human mouse event (isTrusted: true).",
          },
        },
        {
          "@type": "Question",
          name: "What types of questions can ExamClutch solve compared to ExamGhost AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ExamClutch states in its FAQ that it supports 'Multiple choice, multi-select, dropdowns, and fill-in-the-blank. Anything short-form on a web-based quiz.' Because it relies on DOM text extraction, it struggles with non-DOM visual diagrams, embedded PDFs, chemistry structures, and complex multi-step free-response derivations. ExamGhost AI combines DOM extraction with Snap-It Vision OCR to solve any visual graph, circuit diagram, accounting table, or locked equation on screen.",
          },
        },
        {
          "@type": "Question",
          name: "How much does ExamClutch cost in 2026 vs ExamGhost AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ExamClutch charges $9/week ($36/month equivalent), $19/month, $129/year ($10.75/month), or $149 Lifetime Pro (restricted to US customers only), with no free trial solves and a case-by-case 7-day technical refund policy. ExamGhost AI includes 50 free trial solves ($0, no card required), a $19/month Monthly Pass, a $99/year Academic Year Pass ($8.25/month—saving $30/year over ExamClutch), and a $199 worldwide Lifetime Pass backed by an unconditional 14-day 100% money-back guarantee.",
          },
        },
      ],
    },
  ],
};

export default function ExamClutchVsExamGhostPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111] font-sans selection:bg-emerald-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="pt-28 pb-24">
        {/* Breadcrumb & Split Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 mb-6"
          >
            <Link prefetch={false} href="/" className="hover:text-emerald-800 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link prefetch={false}
              href="/compare-canvas-hack-extensions"
              className="hover:text-emerald-800 transition-colors"
            >
              Compare LMS Extensions
            </Link>
            <span>/</span>
            <span className="text-emerald-900 font-semibold">
              ExamClutch vs ExamGhost AI
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: High-Converting SaaS Copy & Hero CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-mono uppercase tracking-widest mb-5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>2026 Hands-On Extension &amp; Telemetry Audit</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-5">
                Why Wait 30 Seconds and Risk{" "}
                <span className="text-amber-800 underline decoration-amber-400/70 decoration-wavy underline-offset-4">
                  Auto-Click Flags
                </span>{" "}
                on a Timed Canvas Exam?
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
                <strong>ExamClutch</strong> (<code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">examclutch.com</code>) pitches a flashy shortcut: press{" "}
                <code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">Cmd+Shift+X</code>, wait roughly{" "}
                <strong>30 seconds</strong> for a batch pull, and{" "}
                <strong>double-click any question to auto-mark the radio button</strong>{" "}
                using <em>Invisible</em> or <em>Sneaky</em> mode. On a real university midterm, programmatic DOM clicks create synthetic{" "}
                <code className="font-mono text-sm bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">isTrusted: false</code>{" "}
                events, while a 30-second stall per page drains the clock on sequential quizzes. Here is why students switch to{" "}
                <strong>ExamGhost AI</strong>.
              </p>

              {/* 3 Fast Scannable Stat Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Answer Speed
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-rose-700 line-through mr-1.5">~30s Batch</span>
                    <span className="text-emerald-800">0.3s Instant</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    Works on 1-by-1 locked pages
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Click Telemetry
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-emerald-800">100% Human Click</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    Zero script auto-fill flags
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Annual &amp; Trial Value
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-emerald-800">$99/yr + 50 Free</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    vs $129/yr &amp; 0 free solves
                  </div>
                </div>
              </div>

              {/* Above-the-Fold Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-white font-bold text-sm hover:bg-emerald-900 transition-colors shadow-sm"
                >
                  Claim 50 Free Solves ($0)
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link prefetch={false}
                  href="/canvas-quiz-solver-free-demo"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#111111] font-semibold text-sm border-2 border-[#111111] hover:bg-neutral-100 transition-colors"
                >
                  Try Live Sandbox Demo
                </Link>
                <a
                  href="#interactive-audit"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold hover:underline px-2 py-2"
                >
                  Inspect Auto-Click Risk ↓
                </a>
              </div>
            </div>

            {/* Right Column: Bespoke Visual Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-[#111111] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#111111]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 ml-1">
                      LMS Click &amp; Timer Telemetry Monitor
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                    Canvas Quiz • Q1 of 50
                  </span>
                </div>

                {/* Top Simulator Card: ExamClutch Workflow */}
                <div className="rounded-2xl bg-rose-50/80 border border-rose-200 p-4 mb-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-rose-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                      ExamClutch v2.0.8 (Auto-Applier Mode)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-200/80 text-rose-950">
                      ~30s Stall / Page
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        1. Press <strong className="text-[#111111]">Cmd+Shift+X</strong>
                      </span>
                      <span className="text-amber-800 font-bold">
                        Waiting ~30s for batch...
                      </span>
                    </div>
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        2. Double-click question stem
                      </span>
                      <span className="text-rose-800 font-bold">
                        applier.js mutates DOM
                      </span>
                    </div>
                    <div className="bg-rose-950 text-rose-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>LMS Listener Audit:</span>
                      <span className="text-rose-300 font-bold">
                        event.isTrusted === false ⚠️
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Simulator Card: ExamGhost AI */}
                <div className="rounded-2xl bg-emerald-50/90 border-2 border-emerald-700 p-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-950 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      ExamGhost AI v4.2 (Closed Shadow HUD)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-200 text-emerald-950">
                      0.3s Instant
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        1. Snap-It OCR or Instant Hotkey
                      </span>
                      <span className="text-emerald-800 font-bold">
                        Solved in 0.3s (Zero Wait)
                      </span>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        2. View answer + math steps in HUD
                      </span>
                      <span className="text-emerald-800 font-bold">
                        You click with real mouse
                      </span>
                    </div>
                    <div className="bg-emerald-950 text-emerald-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>LMS Listener Audit:</span>
                      <span className="text-emerald-300 font-bold">
                        event.isTrusted === true ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Pure-CSS 3-Tab Audit Explorer */}
        <section
          id="interactive-audit"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              01 // Interactive Architecture &amp; Risk Breakdown
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Click Any Tab to Inspect How ExamClutch Works Under the Hood
            </h2>
            <p className="text-neutral-700 mt-2 max-w-3xl text-sm sm:text-base">
              We unpacked ExamClutch&apos;s live Chrome extension package (v2.0.8),
              its official FAQ claims, and its subscription checkout flow. Select
              an audit category below to compare the real-world impact on your
              exams.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111111] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#111111]">
            {/* Pure CSS Radio Inputs */}
            <input
              type="radio"
              name="ec-tabs"
              id="tab-ec-speed"
              className="sr-only peer/ec-speed"
              defaultChecked
            />
            <input
              type="radio"
              name="ec-tabs"
              id="tab-ec-stealth"
              className="sr-only peer/ec-stealth"
            />
            <input
              type="radio"
              name="ec-tabs"
              id="tab-ec-price"
              className="sr-only peer/ec-price"
            />

            {/* Tab Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-6 mb-8 border-b border-neutral-200">
              <label
                htmlFor="tab-ec-speed"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/ec-speed:border-[#111111] peer-checked/ec-speed:bg-emerald-950 peer-checked/ec-speed:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Tab 01 • Speed &amp; Scope</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  ~30s Batch Wait &amp; Short-Form Limits
                </div>
              </label>

              <label
                htmlFor="tab-ec-stealth"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/ec-stealth:border-[#111111] peer-checked/ec-stealth:bg-emerald-950 peer-checked/ec-stealth:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <MousePointerClick className="w-4 h-4" />
                  <span>Tab 02 • Stealth &amp; DOM</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  Double-Click Auto-Fill vs Human Clicks
                </div>
              </label>

              <label
                htmlFor="tab-ec-price"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/ec-price:border-[#111111] peer-checked/ec-price:bg-emerald-950 peer-checked/ec-price:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span>Tab 03 • Pricing &amp; Refunds</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  $9/wk &amp; $129/yr vs $99/yr + 50 Free
                </div>
              </label>
            </div>

            {/* Panel 1: ~30s Batch Wait & Short-Form Limits */}
            <div className="hidden peer-checked/ec-speed:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase">
                  Sequential Quiz Bottleneck
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Why a ~30-Second Batch Pull Hurts on One-Question-at-a-Time Midterms
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  In ExamClutch&apos;s own homepage FAQ, the creators describe how
                  the extension operates:{" "}
                  <em>
                    &quot;Hit Cmd/Ctrl+Shift+X, wait ~30 seconds while it pulls
                    answers, then double-click any question to mark it.&quot;
                  </em>{" "}
                  That works when an unmonitored homework worksheet loads all 20
                  multiple-choice questions onto a single webpage.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  However, college professors on Canvas, Blackboard, and D2L
                  Brightspace routinely enable{" "}
                  <strong>&quot;Show one question at a time&quot;</strong> with
                  locked backtracking. Waiting ~30 seconds every time a new
                  question loads wastes{" "}
                  <strong>25 minutes of exam time across a 50-question test</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
                    <div className="text-xs font-mono uppercase font-bold text-rose-900 mb-1">
                      ExamClutch Question Scope
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                      Built for{" "}
                      <strong>&quot;short-form on a web-based quiz&quot;</strong>{" "}
                      (MCQs, multi-select, dropdowns, fill-in-the-blank). Uses DOM
                      text scraping (<code className="font-mono text-xs">extractor.js</code>)
                      that misses locked diagram images, organic chemistry rings,
                      and embedded PDFs.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                    <div className="text-xs font-mono uppercase font-bold text-emerald-900 mb-1">
                      ExamGhost AI Question Scope
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                      Combines <strong>0.3s instant hotkey solving</strong> with{" "}
                      <strong>Snap-It Vision OCR</strong>. Snip any locked graph,
                      circuit schematic, accounting balance sheet, or free-response
                      calculus integral for step-by-step derivations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF8F5] border border-neutral-200 rounded-2xl p-6">
                <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-600 font-bold mb-4">
                  50-Question Sequential Exam Clock Comparison
                </h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-neutral-200">
                    <div className="flex justify-between items-center text-sm font-bold mb-1">
                      <span>ExamClutch (~30s per page load)</span>
                      <span className="text-rose-700 font-mono">~25 mins wait</span>
                    </div>
                    <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-rose-600 h-full w-[85%]" />
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Requires re-triggering batch extraction on each newly loaded
                      single-question page.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border-2 border-emerald-700">
                    <div className="flex justify-between items-center text-sm font-bold mb-1">
                      <span>ExamGhost AI (~0.3s–1.4s stream)</span>
                      <span className="text-emerald-800 font-mono">~45 secs total</span>
                    </div>
                    <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[12%]" />
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Streams the final answer first, followed immediately by the
                      step-by-step formula breakdown.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Double-Click Auto-Fill vs Human Clicks */}
            <div className="hidden peer-checked/ec-stealth:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold uppercase">
                  DOM Mutation &amp; Probing Vectors
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Why Auto-Clicking Radio Buttons &amp; Exposing Assets Putting Your Account at Risk
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  ExamClutch advertises three modes—<em>Invisible Mode</em> (no
                  UI on screen, just double-click a question to auto-mark the
                  answer), <em>Sneaky Mode</em>, and <em>Homework Mode</em>.
                  While double-clicking a question so{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                    content/applier.js
                  </code>{" "}
                  checks the box feels effortless, it introduces three serious
                  problems:
                </p>

                <ul className="space-y-3 text-sm text-neutral-800">
                  <li className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-neutral-200">
                    <X className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>1. Synthetic Click Flag (<code className="font-mono text-xs">Event.isTrusted === false</code>):</strong>{" "}
                      Every browser tags script-triggered clicks and input changes
                      with <code className="font-mono text-xs">isTrusted: false</code>.
                      Fill-in-the-blank boxes populated by <code className="font-mono text-xs">applier.js</code>{" "}
                      also fire zero human <code className="font-mono text-xs">keydown</code> cadence events.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-neutral-200">
                    <X className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>2. Public <code className="font-mono text-xs">&lt;all_urls&gt;</code> Asset Leak:</strong>{" "}
                      ExamClutch v2.0.8 exposes{" "}
                      <code className="font-mono text-xs">logo/logo.png</code> under{" "}
                      <code className="font-mono text-xs">web_accessible_resources</code>{" "}
                      to <code className="font-mono text-xs">&lt;all_urls&gt;</code> and
                      injects 25 script files across all frames, allowing any LMS
                      page to probe whether the extension is installed.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-neutral-200">
                    <X className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>3. Blind Auto-Marking Without Verification:</strong>{" "}
                      In Invisible Mode, you never see the reasoning before an
                      option is selected—meaning negated stems (<em>&quot;Which is NOT true...&quot;</em>)
                      can be marked wrong without you knowing why.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5 bg-emerald-950 text-white rounded-2xl p-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-mono uppercase font-bold">
                  ExamGhost Zero-DOM Standard
                </div>
                <h4 className="text-xl font-bold">
                  How ExamGhost Keeps Every Click 100% Human
                </h4>
                <p className="text-sm text-emerald-100/90 leading-relaxed">
                  Instead of programmatically mutating your quiz form inputs,
                  ExamGhost renders a stealth, adjustable-opacity badge inside a{" "}
                  <strong>closed Shadow DOM root</strong>:
                </p>
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="bg-emerald-900/70 border border-emerald-700/80 rounded-xl p-3">
                    ✓ Zero <code className="text-emerald-300">web_accessible_resources</code> exposed to <code className="text-emerald-300">&lt;all_urls&gt;</code>
                  </div>
                  <div className="bg-emerald-900/70 border border-emerald-700/80 rounded-xl p-3">
                    ✓ You see the verified answer + step-by-step derivation first
                  </div>
                  <div className="bg-emerald-900/70 border border-emerald-700/80 rounded-xl p-3">
                    ✓ You click the radio button yourself (<code className="text-emerald-300">Event.isTrusted === true</code>)
                  </div>
                  <div className="bg-emerald-900/70 border border-emerald-700/80 rounded-xl p-3">
                    ✓ Active Focus &amp; Blur Shield blocks <code className="text-emerald-300">visibilitychange</code> traps
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: Pricing, Trial & Refund Audit */}
            <div className="hidden peer-checked/ec-price:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase">
                  2026 Cost &amp; Guarantee Comparison
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Why Pay Upfront for a Pairing Code When You Can Test 50 Solves Free?
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  ExamClutch requires a paid pairing code before you can solve a
                  single quiz question. Its pricing tiers are{" "}
                  <strong>$9/week</strong> ($36/month equivalent),{" "}
                  <strong>$19/month</strong>, <strong>$129/year</strong>{" "}
                  ($10.75/month), or a <strong>$149 Lifetime Pro plan</strong>{" "}
                  that is restricted to US customers only. Refunds are handled on
                  a case-by-case basis within 7 days for verified technical issues.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  <strong>ExamGhost AI</strong> gives every student{" "}
                  <strong>50 Free Question Solves ($0, no credit card required)</strong>{" "}
                  plus a live browser sandbox so you can verify accuracy on your
                  exact course material before paying. When you upgrade, our{" "}
                  <strong>$99/year Academic Year Pass ($8.25/mo)</strong> saves
                  you $30/year over ExamClutch and includes an unconditional{" "}
                  <strong>14-day 100% money-back guarantee</strong>.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                <div className="bg-[#FAF8F5] border border-neutral-300 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-[#111111]">
                      ExamClutch Pricing (2026)
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-neutral-200 text-neutral-800">
                      No Free Trial
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700">
                    <li>• Weekly Pass: <strong>$9/week</strong> ($36/mo eq.)</li>
                    <li>• Monthly Pass: <strong>$19/month</strong></li>
                    <li>• Annual Pass: <strong>$129/year</strong> ($10.75/mo)</li>
                    <li>• Lifetime Pro: <strong>$149</strong> (US customers only)</li>
                    <li>• Refunds: 7-day case-by-case technical review</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-[#111111]">
                      ExamGhost AI Passes (2026)
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-800 text-white">
                      50 Free Solves
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                    <li>• Free Trial: <strong>50 Free Solves ($0)</strong></li>
                    <li>• Monthly Pass: <strong>$19/month</strong></li>
                    <li>• Academic Year: <strong>$99/year</strong> ($8.25/mo — save $30/yr)</li>
                    <li>• Lifetime Pass: <strong>$199</strong> (Worldwide access)</li>
                    <li>• Refunds: <strong>14-day 100% money-back guarantee</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-Side Comparison Matrix + Collapsible Technical Manifest Drawer */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              02 // Complete 2026 Feature &amp; Security Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              ExamClutch vs ExamGhost AI: Side-by-Side
            </h2>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#111111] overflow-hidden shadow-[6px_6px_0px_0px_#111111]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#111111] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="py-4 px-5 border-r border-neutral-800 w-1/4">
                      Feature / Metric
                    </th>
                    <th className="py-4 px-5 border-r border-neutral-800 w-[37.5%] text-emerald-300">
                      ExamGhost AI (2026 v4.2)
                    </th>
                    <th className="py-4 px-5 w-[37.5%] text-neutral-300">
                      ExamClutch (v2.0.8)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Response Latency
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>0.3s – 1.4s real-time streaming</strong> per
                          question via Edge Vision Compute
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      <strong>~30 seconds per quiz</strong> batch wait after
                      pressing <code className="font-mono text-xs">Cmd/Ctrl+Shift+X</code>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Answer Delivery &amp; Click Safety
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>Zero synthetic DOM clicks:</strong> displays
                          answers in an isolated Shadow DOM HUD so every click
                          you make is native (<code className="font-mono text-xs">isTrusted: true</code>)
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                        <span>
                          Double-clicking triggers{" "}
                          <code className="font-mono text-xs">content/applier.js</code>{" "}
                          to programmatically click/fill quiz inputs in the page
                          DOM (<code className="font-mono text-xs">isTrusted: false</code>)
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Extension Fingerprinting Protection
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>Zero exposed assets:</strong> no{" "}
                          <code className="font-mono text-xs">
                            web_accessible_resources
                          </code>{" "}
                          leaked to <code className="font-mono text-xs">&lt;all_urls&gt;</code>
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                        <span>
                          Exposes <code className="font-mono text-xs">logo/logo.png</code>{" "}
                          to <code className="font-mono text-xs">&lt;all_urls&gt;</code>{" "}
                          and injects 25 content scripts across all frames
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Visual &amp; Diagram OCR Support
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>Snap-It Vision OCR:</strong> snips any locked
                          graph, organic chemistry ring, physics diagram, or
                          iframe equation
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                        <span>
                          DOM extractor built for{" "}
                          <strong>
                            &quot;short-form on a web-based quiz&quot;
                          </strong>{" "}
                          (MCQs, multi-select, dropdowns, fill-in-the-blank)
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Stealth UI Modes
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>Minimal Badge Mode + Full Tutor Panel</strong>{" "}
                          with adjustable opacity and instant panic hide hotkey
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      3 modes: <em>Invisible Mode</em>, <em>Sneaky Mode</em>,
                      and <em>Homework Mode</em>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Supported Platforms
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          Canvas, Blackboard, Moodle, D2L Brightspace, McGraw
                          Hill Connect, Pearson MyLab, Cengage MindTap,
                          WebAssign, Gradescope, Aleks, DeltaMath
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      Canvas, Blackboard, D2L/Brightspace, Moodle, Google
                      Classroom, McGraw Hill, Macmillan, Schoology, Edulastic,
                      DeltaMath, IXL, ALEKS, Microsoft/Google Forms
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Free Trial Availability
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>50 Free Question Solves ($0)</strong> +{" "}
                          <Link prefetch={false}
                            href="/canvas-quiz-solver-free-demo"
                            className="underline font-semibold text-emerald-800"
                          >
                            Interactive Browser Sandbox
                          </Link>
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                        <span>
                          No free trial tier; requires paid pairing code to
                          activate on quizzes
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Subscription &amp; Lifetime Pricing
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>$19/month</strong> Monthly •{" "}
                          <strong>$99/year</strong> Academic Year ($8.25/mo) •{" "}
                          <strong>$199 Lifetime</strong> (Worldwide)
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      <strong>$9/week</strong> ($36/mo eq.) •{" "}
                      <strong>$19/month</strong> •{" "}
                      <strong>$129/year</strong> ($10.75/mo) •{" "}
                      <strong>$149 Lifetime</strong> (US customers only)
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Refund Policy
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>14-day 100% money-back guarantee</strong>
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      Case-by-case technical issue review within 7 days of
                      purchase (per Section 5 of Terms)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Manifest & Store Audit Drawer */}
            <details className="group border-t-2 border-[#111111] bg-[#FAF8F5]">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-800 hover:bg-neutral-200/60 transition-colors">
                <h3 className="flex items-center gap-2 m-0 inline">
                  <Code2 className="w-4 h-4 text-emerald-800" />
                  Technical Chrome Web Store Manifest &amp; Domain Audit (v2.0.8)
                </h3>
                <span className="text-emerald-800 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-xs font-mono text-neutral-700 space-y-3 border-t border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Chrome Web Store Package Metadata
                    </div>
                    <div>• Extension Name: ExamClutch</div>
                    <div>• CWS ID: bhkcpoocnjadjpgghjfejkgopgkkenab</div>
                    <div>• Audited Version: 2.0.8 (129KiB bundle)</div>
                    <div>
                      • Store Traction: 177 active users, 3 CWS user ratings
                      (contrasted with hardcoded JSON-LD{" "}
                      <code>ratingValue: &quot;4.9&quot;, ratingCount: &quot;42&quot;</code>{" "}
                      on examclutch.com)
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Injected Scripts &amp; Web-Accessible Resources
                    </div>
                    <div>
                      • Content Scripts: 25 JS files injected into{" "}
                      <code>&lt;all_urls&gt;</code> with{" "}
                      <code>all_frames: true</code> (including{" "}
                      <code>utils/gemini.js</code>,{" "}
                      <code>content/extractor.js</code>,{" "}
                      <code>content/applier.js</code>,{" "}
                      <code>content/presence.js</code>,{" "}
                      <code>content/fab.js</code>)
                    </div>
                    <div>
                      • Probing Vector:{" "}
                      <code>
                        &quot;web_accessible_resources&quot;: [&#123;
                        &quot;resources&quot;: [&quot;logo/logo.png&quot;],
                        &quot;matches&quot;: [&quot;&lt;all_urls&gt;&quot;] &#125;]
                      </code>
                    </div>
                    <div>
                      • Site Telemetry: Microsoft Clarity session recording (
                      <code>wf491crrj9</code>) active on marketing pages
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* Honest Buyer's Guide */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              03 // Honest Recommendation
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Which Extension Fits Your Coursework?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-800 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-mono uppercase font-bold mb-4">
                Best for Proctored Exams &amp; STEM Accuracy
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Choose ExamGhost AI If You Want:
              </h3>
              <ul className="space-y-3 text-sm text-neutral-800">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-1" />
                  <span>
                    <strong>50 Free Trial Solves ($0):</strong> Test our{" "}
                    <code className="font-mono text-xs">0.3s</code> Vision OCR
                    and Focus Shield before entering payment details.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-1" />
                  <span>
                    <strong>100% Native Human Clicks:</strong> Read the verified
                    answer and step-by-step derivation in a stealth Shadow DOM
                    badge, then click the radio button yourself so{" "}
                    <code className="font-mono text-xs">isTrusted</code> is
                    always <code className="font-mono text-xs">true</code>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-1" />
                  <span>
                    <strong>Full Vision OCR for Diagrams &amp; Graphs:</strong>{" "}
                    Solve organic chemistry structures, calculus integrals, and
                    accounting tables that DOM text extractors miss.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-1" />
                  <span>
                    <strong>Better Annual Value ($99/yr vs $129/yr):</strong>{" "}
                    Save $30/year on our Academic Year Pass ($8.25/mo) with a
                    full 14-day 100% money-back guarantee.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-300 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono uppercase font-bold mb-4">
                Alternative Use Case
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Consider ExamClutch Only If:
              </h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <FileWarning className="w-4 h-4 text-amber-800 shrink-0 mt-1" />
                  <span>
                    You only take unmonitored, all-questions-on-one-page{" "}
                    <strong>short-form text quizzes</strong> (MCQs, dropdowns,
                    fill-in-the-blank) where a ~30-second batch fetch and
                    synthetic auto-clicking won&apos;t be audited.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FileWarning className="w-4 h-4 text-amber-800 shrink-0 mt-1" />
                  <span>
                    You specifically want a <strong>$9/week</strong> short-term
                    pass for a single week of K–12 or high school homework on
                    Edulastic, Schoology, or IXL.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              04 // Technical &amp; Pricing FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Frequently Asked Questions: ExamClutch vs ExamGhost AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                How fast is ExamClutch compared to ExamGhost AI?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                ExamClutch&apos;s official FAQ states that after pressing{" "}
                <code className="font-mono text-xs">Cmd/Ctrl+Shift+X</code>, it
                takes <strong>roughly 30 seconds per quiz</strong> to pull
                answers before you can double-click questions to apply them.
                ExamGhost AI streams answers in{" "}
                <strong>0.3 to 1.4 seconds per question</strong>, making it far
                faster on sequential one-question-at-a-time exams.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Why is ExamClutch&apos;s web_accessible_resources setting a privacy concern?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                In version 2.0.8 of ExamClutch, its{" "}
                <code className="font-mono text-xs">manifest.json</code> exposes{" "}
                <code className="font-mono text-xs">logo/logo.png</code> to{" "}
                <code className="font-mono text-xs">&lt;all_urls&gt;</code>. Any
                website can test whether that extension asset URL resolves to
                fingerprint whether ExamClutch is installed in your browser.
                ExamGhost AI exposes zero web-accessible resources to{" "}
                <code className="font-mono text-xs">&lt;all_urls&gt;</code>.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                How does ExamClutch pricing compare to ExamGhost AI in 2026?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                ExamClutch charges <strong>$9/week</strong> ($36/mo equivalent),{" "}
                <strong>$19/month</strong>, <strong>$129/year</strong>, or{" "}
                <strong>$149 Lifetime</strong> (restricted to US customers
                only), with no free trial tier. ExamGhost AI includes{" "}
                <strong>50 Free Solves ($0)</strong>,{" "}
                <strong>$19/month</strong>, <strong>$99/year</strong> ($8.25/mo
                — $30/year cheaper than ExamClutch), and{" "}
                <strong>$199 Worldwide Lifetime</strong> with a 14-day 100%
                refund guarantee.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Can ExamClutch solve image-based graphs or chemistry structures?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                ExamClutch is designed around DOM text extraction (
                <code className="font-mono text-xs">content/extractor.js</code>)
                for short-form multiple-choice, multi-select, dropdown, and
                fill-in-the-blank questions. For locked images, circuit
                diagrams, or embedded publisher canvases, ExamGhost AI&apos;s{" "}
                <strong>Snap-It Vision OCR</strong> captures any screen region
                and solves it step by step.
              </p>
            </div>
          </div>
        </section>

        {/* Bespoke Pastel Conversion Strip + Related Comparisons (No Stacked Dark Box) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-50 via-[#FAF8F5] to-amber-50 border-2 border-[#111111] rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_#111111] mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-emerald-900 font-bold mb-2">
                  Skip the 30-Second Wait &amp; Auto-Click Risk
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mb-3">
                  Test ExamGhost AI With 50 Free Solves Today
                </h2>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Try our 0.3s Snap-It Vision OCR and closed Shadow DOM HUD in
                  the interactive browser sandbox—or unlock unlimited solves for{" "}
                  <strong>$19/month</strong> or <strong>$99/year</strong>{" "}
                  ($8.25/mo) backed by our 14-day 100% money-back guarantee.
                </p>
                <div className="flex flex-wrap items-center gap-3.5">
                  <Link prefetch={false}
                    href="/#pricing"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-white font-bold text-sm hover:bg-emerald-900 transition-colors"
                  >
                    Claim 50 Free Solves ($0)
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link prefetch={false}
                    href="/canvas-quiz-solver-free-demo"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#111111] font-semibold text-sm border-2 border-[#111111] hover:bg-neutral-100 transition-colors"
                  >
                    Try Interactive Sandbox
                  </Link>
                  <a
                    href="https://discord.gg/aCcsyKYJq4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#3b47d6] text-white font-semibold text-sm hover:bg-[#2f3ab0] transition-colors"
                  >
                    Join Student Discord
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-neutral-200">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold mb-3">
                  Related 2026 Extension Audits
                </div>
                <div className="space-y-2.5 text-sm font-medium">
                  <Link prefetch={false}
                    href="/quizwizard-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Quiz Wizard vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/testbro-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>TestBro vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/usequietly-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Quietly vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/compare-canvas-hack-extensions"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950 text-white hover:bg-emerald-900 transition-colors"
                  >
                    <span>View All 57 LMS Audits</span>
                    <ArrowRight className="w-4 h-4 text-emerald-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
