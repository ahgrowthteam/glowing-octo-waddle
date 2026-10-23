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
  FileText,
  EyeOff,
  PenTool,
  Camera,
  ExternalLink,
  ChevronDown,
  Layers,
  Terminal,
  CreditCard,
} from "lucide-react";
import { FaChrome, FaDiscord } from "react-icons/fa";

export const metadata: Metadata = {
    title: {
        absolute: "Cramly AI vs ExamGhost (2026) — Essay Tool vs Quiz Solver",
    },
    description: "2026 comparison of Cramly.ai ($19.99/mo) vs ExamGhost. While Cramly drafts essays in separate tabs, ExamGhost solves live LMS quizzes in 0.3s (50 Free Solves).",
    alternates: {
        canonical: "https://examghost.com/cramly-vs-examghost",
    },
    openGraph: {
        title: "Cramly AI vs ExamGhost (2026) — Essay Tool vs Quiz Solver",
        description: "2026 comparison of Cramly.ai ($19.99/mo) vs ExamGhost. While Cramly drafts essays in separate tabs, ExamGhost solves live LMS quizzes in 0.3s (50 Free Solves).",
        url: "https://examghost.com/cramly-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Cramly AI vs ExamGhost (2026) — Essay Tool vs Quiz Solver",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cramly AI vs ExamGhost (2026) — Essay Tool vs Quiz Solver",
        description: "2026 comparison of Cramly.ai ($19.99/mo) vs ExamGhost. While Cramly drafts essays in separate tabs, ExamGhost solves live LMS quizzes in 0.3s (50 Free Solves).",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
                "datePublished": "2026-01-17",
                "dateModified": "2026-03-10",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
      "@id": "https://examghost.com/cramly-vs-examghost#webpage",
      url: "https://examghost.com/cramly-vs-examghost",
      name: "Cramly AI vs ExamGhost (2026): Essay & Discussion Board Writer vs 0.3s LMS Exam Solver",
      description:
        "2026 technical comparison of Cramly.ai's Long Essay Assistant, Personal Model, and Google Docs extension versus ExamGhost's closed Shadow DOM and 0.3s Vision OCR.",
      breadcrumb: {
        "@id": "https://examghost.com/cramly-vs-examghost#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://examghost.com/cramly-vs-examghost#breadcrumb",
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
          name: "Cramly AI vs ExamGhost",
          item: "https://examghost.com/cramly-vs-examghost",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://examghost.com/cramly-vs-examghost#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Cramly.ai best used for in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cramly.ai is built primarily for academic writing: its Long Essay Assistant drafts up to 10-page essays with citation insertion, its Personal Model mimics your past writing samples, and its Paragraph/Discussion Board assistants integrate with Google Docs and Grammarly. However, it is not engineered for live, timed STEM exams on Canvas or Blackboard.",
          },
        },
        {
          "@type": "Question",
          name: "Does Cramly.ai block Canvas from logging tab switches (window.blur)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Cramly.ai has no Canvas Focus Shield or MAIN-world event interceptor. Switching tabs to use the Cramly dashboard or clicking an unshielded browser popup during a Canvas Quiz triggers immediate window.blur and visibilitychange telemetry events in your professor's quiz audit log. ExamGhost blocks all blur and visibility telemetry automatically.",
          },
        },
        {
          "@type": "Question",
          name: "Can Cramly's Multiple Choice Solver read graphs, diagrams, or locked STEM equations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cramly's Multiple Choice Solver relies on copying and pasting text prompts. When a Canvas, McGraw Hill Connect, or Pearson MyLab question locks text selection or embeds a calculus graph, physics free-body diagram, or chemistry structure as an image, Cramly cannot read it. ExamGhost includes a 0.3s Crosshair Vision OCR snip that solves any visual diagram inside your tab.",
          },
        },
        {
          "@type": "Question",
          name: "How does Cramly.ai pricing compare to ExamGhost in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cramly.ai charges ~$19.99/month (after a short trial), ~$48–$60/year, or ~$110 Lifetime for its essay-writing suite. ExamGhost gives you 50 Free Question Solves + 10 Vision OCR Snips ($0, no credit card required) and offers unlimited live exam stealth for $19/month, $99/year ($8.25/mo), or $199 Lifetime.",
          },
        },
      ],
    },
  ],
};

export default function CramlyVsExamGhostPage() {
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
            <span className="text-ink font-semibold">
              Cramly AI vs ExamGhost
            </span>
          </nav>
        </div>

        {/* BESPOKE HERO: 10-PAGE ESSAY DRAFTER VS 0.3S LIVE STEM EXAM SOLVER */}
        <header className="relative pt-4 pb-16 sm:pb-20 overflow-hidden border-b border-sand-dark/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono font-bold text-amber-900 mb-6 shadow-sm">
              <PenTool className="w-3.5 h-3.5 text-amber-700" />
              <span>2026 Platform &amp; Telemetry Audit · cramly.ai vs ExamGhost</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-ink font-display leading-[1.08] mb-6 max-w-4xl">
              Cramly drafts 10-page essays in Google Docs. ExamGhost solves live Canvas exams in 0.3s.
            </h1>

            <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-3xl leading-relaxed mb-8">
              Cramly (<code className="text-ink font-mono text-sm bg-sand/70 px-1.5 py-0.5 rounded">cramly.ai</code>) is a humanities writing tool built around a <strong>Long Essay Assistant</strong>, a <strong>&ldquo;Personal Model&rdquo; tone cloner</strong>, and a Google Docs extension. When you sit down for a timed Canvas, Blackboard, or McGraw Hill Connect exam, however, Cramly&apos;s copy-paste Multiple Choice prompt cannot read STEM graphs or locked iframes—and switching tabs to paste questions into Cramly fires immediate <code className="text-ink font-mono text-sm bg-sand/70 px-1.5 py-0.5 rounded">window.blur</code> flags.
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
                <span>View Pass Tiers ($19/mo · $99/yr)</span>
              </Link>
            </div>

            {/* HERO SIDE-BY-SIDE VISUAL MOCKUP */}
            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              {/* Left Card: Cramly.ai */}
              <div className="rounded-2xl bg-surface border-2 border-rose-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                      <span className="font-display font-bold text-sm text-ink">Cramly.ai Essay Suite &amp; MCQ Prompt</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[11px] font-mono font-bold text-rose-800">
                      ~$19.99/mo (Essay Focus)
                    </span>
                  </div>

                  {/* Simulated Copy-Paste MCQ Failure on STEM Exam */}
                  <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-4 mb-4 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-ink-muted mb-2">
                      <span>Cramly Multiple Choice Prompt</span>
                      <span className="text-rose-700 font-bold">Text-Paste Only</span>
                    </div>
                    <div className="p-3 rounded-lg bg-rose-950 text-rose-100 border border-rose-800 space-y-1.5">
                      <div className="text-rose-300">// 1. Highlight &amp; copy Canvas question + 4 options:</div>
                      <div>&gt; Embedded SVG Graph: <span className="text-amber-300">[Cannot Copy Image to Text Box]</span></div>
                      <div className="text-rose-300 pt-1">// 2. Switch tab to Cramly dashboard &amp; paste:</div>
                      <div>&gt; Canvas SpeedGrader: <span className="text-rose-400 font-bold">window.blur logged!</span></div>
                      <div className="text-rose-300">&gt; Essay Model Stream Time: ~5.1s verbose response</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <Camera className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>Zero Crosshair Vision OCR:</strong> Cannot snip graphs, circuit diagrams, organic chemistry rings, or locked LTI 1.3 iframes.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <EyeOff className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>Unshielded Tab &amp; Popup Focus:</strong> Leaving Canvas to paste questions into Cramly records red departure timestamps.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <Lock className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>Session Replay &amp; Ad Trackers:</strong> Web app loads Microsoft Clarity session recording plus 8+ ad-network tracking pixels.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>Best For: Take-Home Google Docs Essays</span>
                  <span className="text-rose-800 font-bold">Copy-Paste Loop: ~12s+</span>
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
                      <span>In-Tab Hotkey + Snap-It Vision OCR</span>
                      <span className="text-emerald-800 font-bold">0 Tab Switches</span>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-950 text-emerald-100 border border-emerald-800 space-y-1.5">
                      <div className="text-emerald-400">// 1. Drag Alt+S crosshair over graph or press Alt+Q:</div>
                      <div>&gt; Graph + Options Parsed: <span className="text-emerald-300 font-bold">280ms Edge Vision OCR</span></div>
                      <div className="text-emerald-400 pt-1">// 2. Renders inside closed ShadowRoot on same screen:</div>
                      <div>&gt; Verified Answer: <span className="text-white font-bold">B) Inflection point at x = 2.4</span></div>
                      <div className="text-emerald-400">&gt; Canvas SpeedGrader Log: 0 blur / 0 visibility events</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>0.3s Crosshair Vision OCR:</strong> Solves locked equations, calculus graphs, matrices, and chemistry diagrams right inside your tab.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Closed Shadow DOM + Focus Shield:</strong> Never leave your Canvas or Blackboard tab; blocks all <code className="font-mono text-[11px]">window.blur</code> telemetry.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Zero Session Replay + 50 Free Solves:</strong> Ephemeral zero-log edge inference with 50 free trial solves ($0, no card required).</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="text-emerald-800 font-bold">Best For: Live Timed LMS Exams</span>
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
                <span>Interactive Architecture Breakdown · Click Any Tab</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-ink mb-3">
                Take-Home Essay Drafter vs Live Timed Exam Stealth
              </h2>
              <p className="text-sm sm:text-base text-ink-muted">
                Switch between tabs to inspect Cramly&apos;s Google Docs workflow, STEM OCR limits, and third-party tracking scripts.
              </p>
            </div>

            <div>
              <input type="radio" name="cr-tabs" id="cr-tab-essay" className="sr-only peer/essay" defaultChecked />
              <input type="radio" name="cr-tabs" id="cr-tab-ocr" className="sr-only peer/ocr" />
              <input type="radio" name="cr-tabs" id="cr-tab-priv" className="sr-only peer/priv" />

              {/* Tab Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto mb-8 bg-surface p-2 rounded-2xl border border-sand-dark/30 shadow-sm">
                <label
                  htmlFor="cr-tab-essay"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/essay:bg-ink peer-checked/essay:text-white peer-checked/essay:shadow-sm flex items-center justify-center gap-2"
                >
                  <PenTool className="w-4 h-4 shrink-0" />
                  <span>1. Essay Suite vs 0.3s HUD</span>
                </label>
                <label
                  htmlFor="cr-tab-ocr"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/ocr:bg-ink peer-checked/ocr:text-white peer-checked/ocr:shadow-sm flex items-center justify-center gap-2"
                >
                  <Camera className="w-4 h-4 shrink-0" />
                  <span>2. Text-Paste vs STEM Vision OCR</span>
                </label>
                <label
                  htmlFor="cr-tab-priv"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/priv:bg-ink peer-checked/priv:text-white peer-checked/priv:shadow-sm flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>3. Trackers &amp; Pricing Math</span>
                </label>
              </div>

              {/* TAB 1: ESSAY SUITE VS 0.3S HUD */}
              <div className="hidden peer-checked/essay:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <PenTool className="w-3.5 h-3.5" />
                    <span>Cramly.ai: Built for Google Docs &amp; Essays</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Great for Sunday papers—dangerous on Monday morning quizzes
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Cramly&apos;s flagship tools are the <strong>Long Essay Assistant</strong> (up to 10 pages with citations), the <strong>Personal Model</strong> (trained on your past writing samples), and a Chrome extension built for <strong>Google Docs and Grammarly</strong>.
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm text-ink-muted">
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>Zero Canvas Focus Shield:</strong> Switching tabs to paste a question into Cramly&apos;s dashboard or clicking its unshielded extension popup fires immediate <code className="font-mono">window.blur</code> and <code className="font-mono">visibilitychange</code> telemetry in Canvas SpeedGrader.
                    </div>
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>5.1s+ Verbose Paragraph Latency:</strong> Because Cramly is tuned for paragraph expansion, waiting for long text responses while copying and pasting 50 quiz questions drains your exam timer.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ExamGhost: Engineered for Live Timed Assessments</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    One hotkey (<code className="font-mono text-base">Alt+Q</code>) solves inside a closed Shadow DOM
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    ExamGhost is built exclusively for high-stakes quizzes and exams on Canvas, Blackboard, Moodle, D2L, and McGraw Hill Connect:
                  </p>
                  <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto leading-relaxed border border-emerald-800">
                    <div className="text-emerald-400">// 1. Intercepts blur, focusout &amp; visibilitychange:</div>
                    <div>window.addEventListener(&quot;blur&quot;, (e) =&gt; e.stopImmediatePropagation(), true);</div>
                    <div className="text-emerald-400 mt-2">// 2. Solves active question + options in 0.3s in-tab:</div>
                    <div>const hud = host.attachShadow(&#123; mode: &quot;closed&quot; &#125;);</div>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Plus, pressing <code className="font-mono text-xs bg-sand px-1 rounded">⌘+Shift+U</code> purges the HUD from your screen and RAM in under 1 millisecond if a TA walks past your desk.
                  </p>
                </div>
              </div>

              {/* TAB 2: TEXT-PASTE MCQ VS SNAP-IT STEM VISION OCR */}
              <div className="hidden peer-checked/ocr:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Cramly Multiple Choice Solver: Text-Paste Only</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Why text copy-pasting fails on modern STEM portals
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Cramly&apos;s Multiple Choice Solver requires you to highlight and copy text. On college STEM exams, that workflow breaks immediately for three reasons:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>1. Disabled Right-Click &amp; Text Selection:</strong> Many Canvas, Connect, and Pearson assessments block <code className="font-mono">user-select</code> and <code className="font-mono">contextmenu</code> copying.
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>2. Blind to Graphs &amp; Diagrams:</strong> You cannot copy-paste a calculus curve, physics free-body diagram, or organic chemistry structure into a plaintext box.
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>3. Mangled MathJax / LaTeX:</strong> Copying raw HTML equations strips exponents, integrals, and matrices into unreadable characters.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <Camera className="w-3.5 h-3.5" />
                    <span>ExamGhost: 0.3s Crosshair Vision OCR</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Snip any graph, matrix, or locked iframe right on your screen
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Even when a portal disables right-click, locks text selection, or renders questions inside a cross-origin Canvas New Quizzes (<code className="font-mono text-xs bg-sand px-1 rounded">LTI 1.3</code>) iframe, ExamGhost&apos;s <code className="font-mono text-xs bg-sand px-1 rounded">Alt+S</code> crosshair captures the pixels directly:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>Reads Complex STEM Visuals:</strong> Accurately parses integrals, chemical reaction mechanisms, accounting ledgers, and stat plots in ~300ms.
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>Zero Clipboard Interference:</strong> Never touches your system clipboard or triggers LMS <code className="font-mono">copy</code>/<code className="font-mono">paste</code> event listeners.
                    </div>
                  </div>
                </div>
              </div>

              {/* TAB 3: SESSION REPLAY TRACKERS & PRICING */}
              <div className="hidden peer-checked/priv:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Cramly.ai: Session Recording &amp; Trial Wall</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Microsoft Clarity session replay + card-upfront trial
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Our live HTML audit of <code className="font-mono text-xs bg-sand px-1 rounded">cramly.ai</code> revealed heavy third-party tracking scripts running across its web application:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-sand/50 border border-sand-dark/25 flex justify-between items-center">
                      <span className="font-semibold text-ink">Session Replay Script</span>
                      <span className="font-mono text-rose-800">Microsoft Clarity Active</span>
                    </div>
                    <div className="p-3 rounded-xl bg-sand/50 border border-sand-dark/25 flex justify-between items-center">
                      <span className="font-semibold text-ink">Ad Network Pixels Loaded</span>
                      <span className="font-mono text-rose-800">5 TikTok + Meta + Snap + Mixpanel</span>
                    </div>
                    <div className="p-3 rounded-xl bg-sand/50 border border-sand-dark/25 flex justify-between items-center">
                      <span className="font-semibold text-ink">Cramly Monthly Price</span>
                      <span className="font-mono font-bold text-ink">~$19.99 / month</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>ExamGhost: Ephemeral Zero-Log Edge Compute</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Zero session recordings + 50 Free Solves ($0, No Card)
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    We never run screen-recording tools like Microsoft Clarity on your exam queries, and you can test ExamGhost on 50 real questions before spending a cent:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Starter Trial (No Credit Card)</span>
                      <span className="font-mono font-bold text-emerald-800">50 Free Solves ($0)</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Monthly Pass</span>
                      <span className="font-mono font-bold text-emerald-800">$19.00 / month</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Academic Year Pass ($8.25/mo)</span>
                      <span className="font-mono font-bold text-emerald-800">$99 / year</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Lifetime Degree Pass (3 Devices)</span>
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
                <FileText className="w-5 h-5 text-ink-muted" />
                <span>When Cramly.ai Makes Sense</span>
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                Cramly is designed for take-home humanities writing assignments rather than live exams:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>Drafting Multi-Page Essays in Google Docs:</strong> Using Cramly&apos;s Long Essay Assistant and citation inserter to outline a 5–10 page English or history paper.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>Tone-Matched Discussion Board Posts:</strong> Training Cramly&apos;s Personal Model on your past writing samples to draft weekly discussion replies.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
              <h2 className="font-display font-bold text-lg sm:text-xl text-emerald-300 mb-3 flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-emerald-300" />
                <span>When Students Choose ExamGhost</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-4">
                When you are inside a timed quiz, midterm, or final on Canvas, Blackboard, Moodle, D2L, or Connect:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>0.3s In-Tab Solving + Focus Shield:</strong> Never switch tabs or trigger <code className="font-mono text-xs text-emerald-300">window.blur</code> logs in Canvas SpeedGrader.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Snap-It Vision OCR for STEM &amp; Diagrams:</strong> Solves graphs, matrices, and locked LTI 1.3 iframes where Cramly&apos;s text-paste box fails.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>50 Free Solves ($0, No Card):</strong> Verify accuracy on your actual LMS before choosing $19/mo, $99/yr, or $199 Lifetime.</span>
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
                Verified directly against <code className="font-mono text-xs">cramly.ai</code> across 8 technical and pricing metrics.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-sand-dark/30">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                <thead>
                  <tr className="border-b border-sand-dark/30 bg-sand/40">
                    <th className="py-3.5 px-4 font-bold text-ink">Capability / Metric</th>
                    <th className="py-3.5 px-4 font-bold text-ink-muted">Why It Matters</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-800">ExamGhost</th>
                    <th className="py-3.5 px-4 font-bold text-rose-800">Cramly.ai</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-dark/20">
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Primary Specialty</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Take-home papers vs live timed exams</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">0.3s Live LMS Exam &amp; STEM Solver + Stealth</td>
                    <td className="py-3.5 px-4 text-ink-muted">10-Page Essay Drafter &amp; Google Docs Extension</td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Canvas Focus Shield</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Blocks window.blur &amp; visibilitychange logs</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      3-Layer Capture-Phase Shield
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      None (Canvas logs tab switches)
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Closed Shadow DOM HUD</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Renders answers without mutating host DOM</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      Zero-Footprint Closed ShadowRoot
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      Unshielded Google Docs / Web Sidebar
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Crosshair Vision OCR</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Solves graphs, circuits &amp; locked text</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      0.3s Region Snip on Any Webpage
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      Text-paste prompt only
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Long-Form Essay &amp; Tone Cloning</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Drafting 10-page papers with citations</td>
                    <td className="py-3.5 px-4 text-ink-muted">Focused purely on live exam stealth</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      Included (Long Essay + Personal Model)
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Session Replay &amp; Ad Trackers</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Privacy of your academic queries</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">Ephemeral Zero-Log Edge Inference</td>
                    <td className="py-3.5 px-4 text-rose-800">Microsoft Clarity + 8 Ad Pixels Active</td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Free Trial Access</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Testing before entering payment info</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">50 Free Solves + 10 OCR Snips ($0, No CC)</td>
                    <td className="py-3.5 px-4 text-ink-muted">Short trial requiring card upfront on most flows</td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">2026 Pricing</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Monthly, annual &amp; lifetime options</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">$19/mo · $99/yr ($8.25/mo) · $199 Life</td>
                    <td className="py-3.5 px-4 text-ink-muted">~$19.99/mo · ~$48–$60/yr · ~$110 Life</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Domain & Tracker Audit Drawer */}
            <details className="mt-6 group rounded-2xl bg-sand/40 border border-sand-dark/30 p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-mono font-bold text-ink">
                <span className="flex items-center gap-2 m-0 inline">
                  <Terminal className="w-4 h-4 text-emerald-800" />
                  <h3 className="font-bold m-0 inline">Technical Domain, Extension &amp; Tracker Audit (cramly.ai)</h3>
                </span>
                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 pt-4 border-t border-sand-dark/20 grid sm:grid-cols-2 gap-4 text-xs font-mono text-ink-muted">
                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                  <div className="text-ink font-bold mb-1">Cramly.ai Verified Telemetry</div>
                  <div>Primary Domain: <span className="text-ink">cramly.ai</span></div>
                  <div>Session Replay: <span className="text-rose-800">clarity.ms/tag/h9uzduroj7 (Microsoft Clarity)</span></div>
                  <div>Analytics Debug: <span className="text-rose-800">Mixpanel &#123;debug: true&#125; + 5 TikTok Pixels</span></div>
                  <div>Extension Target: <span className="text-ink">Google Docs &amp; Grammarly text editors</span></div>
                </div>
                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                  <div className="text-ink font-bold mb-1">ExamGhost Stealth Architecture</div>
                  <div>UI Isolation: <span className="text-emerald-800">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</span></div>
                  <div>Data Retention: <span className="text-emerald-800">Zero-log ephemeral RAM inference</span></div>
                  <div>Focus Shield: <span className="text-emerald-800">window.blur / visibilitychange capture</span></div>
                  <div>Screen OCR: <span className="text-emerald-800">0.3s Edge Vision Crosshair</span></div>
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
                  Claim 50 free AI question solves, check live Canvas &amp; Blackboard stealth status, and get 24/7 engineering support.
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
              Cramly.ai vs ExamGhost: Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Direct answers verified against Cramly.ai&apos;s live 2026 platform and Chrome extension.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What is Cramly.ai best used for in 2026?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Cramly.ai is built primarily for academic writing: its <strong>Long Essay Assistant</strong> drafts up to 10-page essays with citation insertion, its <strong>Personal Model</strong> mimics your past writing samples, and its Paragraph/Discussion Board assistants integrate with Google Docs and Grammarly. However, it is not engineered for live, timed STEM exams on Canvas or Blackboard.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does Cramly.ai block Canvas from logging tab switches (window.blur)?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                No. Cramly.ai has no Canvas Focus Shield or MAIN-world event interceptor. Switching tabs to use the Cramly dashboard or clicking an unshielded browser popup during a Canvas Quiz triggers immediate <code className="font-mono text-xs">window.blur</code> and <code className="font-mono text-xs">visibilitychange</code> telemetry events in your professor&apos;s quiz audit log. ExamGhost blocks all blur and visibility telemetry automatically.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Can Cramly&apos;s Multiple Choice Solver read graphs, diagrams, or locked STEM equations?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Cramly&apos;s Multiple Choice Solver relies on copying and pasting text prompts. When a Canvas, McGraw Hill Connect, or Pearson MyLab question locks text selection or embeds a calculus graph, physics free-body diagram, or chemistry structure as an image, Cramly cannot read it. ExamGhost includes a <strong>0.3s Crosshair Vision OCR snip</strong> that solves any visual diagram directly inside your tab.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does Cramly.ai pricing compare to ExamGhost in 2026?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Cramly.ai charges <strong>~$19.99/month</strong> (after a short trial), <strong>~$48–$60/year</strong>, or <strong>~$110 Lifetime</strong> for its essay-writing suite. ExamGhost gives you <strong>50 Free Question Solves + 10 Vision OCR Snips ($0)</strong> with no credit card required, and offers unlimited live exam stealth for <strong>$19/month, $99/year ($8.25/mo), or $199 Lifetime</strong>.
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
                  <span>Built for Live Timed Exams, Not Just Essays</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-2">
                  Solve locked STEM graphs and Canvas quizzes in 0.3s.
                </h2>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  No copy-pasting into external tabs, no <code className="font-mono text-xs">window.blur</code> logs, and zero session-recording trackers. Start with 50 Free Solves ($0).
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
                href="/knowt-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">Knowt vs ExamGhost</span>
                <span className="text-ink-muted">Quizlet Importer vs Live LMS Solver</span>
              </Link>
              <Link prefetch={false}
                href="/coursology-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">Coursology vs ExamGhost</span>
                <span className="text-ink-muted">Coursey AI Suite vs Exam Stealth</span>
              </Link>
              <Link prefetch={false}
                href="/questionai-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">Question.AI vs ExamGhost</span>
                <span className="text-ink-muted">Sidebar Copilot vs Private Stealth</span>
              </Link>
              <Link prefetch={false}
                href="/studyfox-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">StudyFox vs ExamGhost</span>
                <span className="text-ink-muted">Toolbar Popup Blur vs Focus Shield</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
