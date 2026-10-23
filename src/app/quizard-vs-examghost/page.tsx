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
  Smartphone,
  EyeOff,
  CreditCard,
  ChevronDown,
  FileCode2,
  Cpu,
  Layers,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Quizard AI vs ExamGhost (2026) — Phone Pairing vs Stealth",
    },
    description: "2026 audit of Quizard AI (v0.1.13) vs ExamGhost. Why mobile Link Device pairing and Cmd+Shift+K overlays lose to 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/quizard-vs-examghost",
    },
    openGraph: {
        title: "Quizard AI vs ExamGhost (2026) — Phone Pairing vs Stealth",
        description: "2026 audit of Quizard AI (v0.1.13) vs ExamGhost. Why mobile Link Device pairing and Cmd+Shift+K overlays lose to 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/quizard-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Quizard AI vs ExamGhost (2026) — Phone Pairing vs Stealth",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Quizard AI vs ExamGhost (2026) — Phone Pairing vs Stealth",
        description: "2026 audit of Quizard AI (v0.1.13) vs ExamGhost. Why mobile Link Device pairing and Cmd+Shift+K overlays lose to 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const faqs = [
  {
    q: "What is the difference between Quizard AI (quizard.ai) and Quizard.io?",
    a: "They are two completely separate tools that share the same name. Quizard AI (quizard.ai / usequizard.com, published by Michael Giardino) is an iOS/Android mobile camera homework scanner ('Take a picture, get an answer', App Store ID 1667996582) paired with a lightweight Chrome extension (ID: kfnboibnjcpldbmeielppdepcpliogeb, v0.1.13, 6.49MiB). Quizard.io is an offline lecture-slide and PDF flashcard generator ($7.99/mo or $39.99/yr with a 300-question daily cap) that has no browser extension at all.",
  },
  {
    q: "Can Canvas or Blackboard detect the Quizard AI Chrome extension?",
    a: "Yes. Quizard AI's Chrome extension requires you to press Cmd+Shift+K (or Ctrl+Shift+K) to open an unshielded crop-and-ask overlay over your quiz page. Because Quizard AI does not intercept window.blur, document.visibilitychange, or document.hasFocus(), activating its shortcut or interacting with its modal immediately logs a 'Stopped viewing the Canvas quiz-taking page' event in Canvas SpeedGrader.",
  },
  {
    q: "Why does Quizard AI ask me to 'Link Device' on a phone before using the Chrome extension?",
    a: "Quizard AI was built as a mobile-first camera app where subscriptions (~$6.99/week or $9.99–$19.99/month) are managed through Apple App Store or Google Play Store in-app purchases. To unlock the desktop Chrome extension (v0.1.13), you must install the mobile app, activate a mobile trial or subscription, and sync via the 'Link Device' setting. ExamGhost works natively on your desktop browser with 50 free solves and no mobile app required.",
  },
  {
    q: "Why does Quizard AI miss college-level calculus, physics, and chemistry questions?",
    a: "Quizard AI's own marketing benchmarks its solver on high-school SAT Math problems and routes crops through a single standard vision model. On multi-step university STEM problems—such as multivariable calculus, organic chemistry mechanisms, or financial accounting tables—single-model OCR frequently misreads symbols or hallucinates steps. ExamGhost cross-verifies every question across GPT-5.4, Claude Sonnet 4.6, and Gemini 3.1 Pro simultaneously for 99.2% verified accuracy.",
  },
  {
    q: "Why are Quizard AI's terms and privacy policy hosted on a Notion page?",
    a: "Quizard AI (usequizard.com / quizard.ai) hosts its official Privacy Policy and Terms of Use on a public Notion document (lovely-vault-f15.notion.site), while subscription cancellations must be handled through Apple or Google Play settings depending on where you signed up. ExamGhost provides direct dashboard billing, instant 1-click cancellation, and a $199 Lifetime option.",
  },
];

export default function QuizardVsExamGhostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-01-24",
                "dateModified": "2026-03-03",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/quizard-vs-examghost/#webpage",
        url: "https://examghost.com/quizard-vs-examghost",
        name: "Quizard AI vs ExamGhost (2026): Mobile Link-Device Extension & Quizard.io vs True LMS Stealth",
        description:
          "Detailed 2026 comparison of Quizard AI (quizard.ai / usequizard.com), Quizard.io, and ExamGhost covering mobile Link Device gating, Cmd+Shift+K focus-loss logs, SAT vs college STEM accuracy, and pricing.",
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
            name: "Quizard AI vs ExamGhost",
            item: "https://examghost.com/quizard-vs-examghost",
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
              Quizard AI &amp; Quizard.io vs ExamGhost
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Direct Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-900 text-xs font-semibold">
                <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                <span>
                  2026 Audit: Quizard AI (v0.1.13) &amp; Quizard.io vs ExamGhost
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#111111]">
                A Mobile Camera App Paired to a{" "}
                <span className="underline decoration-indigo-500/40 decoration-wavy underline-offset-4">
                  v0.1.13 Extension
                </span>{" "}
                Won&apos;t Hide You on Canvas.
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-600 leading-relaxed">
                Students searching for <strong>Quizard</strong> usually run into
                two completely different products:{" "}
                <strong>Quizard AI — Homework Tutor</strong> (
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  quizard.ai
                </code>{" "}
                /{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  usequizard.com
                </code>
                ), a mobile photo scanner that makes you{" "}
                <strong>&ldquo;Link Device&rdquo;</strong> from your phone just
                to unlock its{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  Cmd+Shift+K
                </code>{" "}
                Chrome companion—and <strong>Quizard.io</strong>, an offline PDF
                flashcard generator with no browser extension at all. Neither
                blocks Canvas SpeedGrader focus-loss telemetry.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Desktop Setup
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    Forced Mobile &ldquo;Link Device&rdquo; vs Instant Browser
                    Install
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Shortcut Stealth
                  </div>
                  <div className="text-sm font-bold text-rose-600">
                    Cmd+Shift+K Fires Blur vs 0 Focus Events
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Solver Benchmark
                  </div>
                  <div className="text-sm font-bold text-emerald-700">
                    SAT Math Single-LLM vs 3-Model Voting
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-white font-semibold text-sm hover:bg-[#ff5722] transition-colors shadow-sm"
                >
                  <span>Start 50 Free Solves (No Phone App Needed)</span>
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

            {/* Right Column: "Which Quizard?" Split + Mobile Link Trap Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#141418] text-white rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
                <div className="px-5 py-3.5 bg-[#1c1c22] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      2026 Identity &amp; Telemetry Breakdown
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    2 Different &ldquo;Quizards&rdquo;
                  </span>
                </div>

                <div className="p-5 space-y-3.5">
                  {/* Product 1: Quizard AI */}
                  <div className="rounded-xl bg-[#1b1b22] border border-indigo-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                        1. Quizard AI — Homework Tutor (quizard.ai)
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                        v0.1.13 Extension
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Built by Michael Giardino as a mobile photo scanner (
                      <em>&ldquo;Take a picture, get an answer&rdquo;</em>).
                      Requires downloading the iOS/Android app and syncing via{" "}
                      <span className="text-white font-semibold">
                        &ldquo;Link Device&rdquo;
                      </span>{" "}
                      before its{" "}
                      <code className="text-rose-300 font-mono">
                        Cmd/Ctrl+Shift+K
                      </code>{" "}
                      Chrome overlay works—firing{" "}
                      <code className="text-rose-300 font-mono">
                        window.blur
                      </code>{" "}
                      on every crop.
                    </p>
                    <div className="text-[11px] text-neutral-400 font-mono pt-1 border-t border-neutral-800 flex items-center justify-between">
                      <span>Billing: ~$6.99/wk ($363/yr)</span>
                      <span>Legal: lovely-vault-f15.notion.site</span>
                    </div>
                  </div>

                  {/* Product 2: Quizard.io */}
                  <div className="rounded-xl bg-[#1b1b22] border border-amber-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        2. Quizard.io (Flashcard Workspace)
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        No Chrome Extension
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      An offline study web app that turns lecture PDFs and
                      slides into review flashcards and practice quizzes (
                      <span className="text-white font-semibold">
                        $7.99/mo or $39.99/yr
                      </span>
                      , capped at 300 questions/day). Cannot read or assist inside
                      live Canvas, Blackboard, or Moodle exams.
                    </p>
                  </div>

                  {/* ExamGhost Contrast */}
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>How ExamGhost Solves Both Gaps</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Desktop-native Chrome extension with{" "}
                      <span className="text-white font-semibold">
                        Closed Shadow DOM isolation
                      </span>
                      , 8-layer focus-loss event blocking, and 3-model AI
                      consensus—starting with{" "}
                      <span className="text-emerald-300 font-semibold">
                        50 free solves
                      </span>{" "}
                      and no phone sync required.
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
              3 Reasons Students Drop Quizard AI for ExamGhost
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Click any tab below to inspect how Quizard AI&apos;s mobile
              companion architecture, high-school SAT tuning, and weekly App
              Store billing compare against ExamGhost.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            {/* Radio Inputs */}
            <input
              type="radio"
              name="quizard-audit-tabs"
              id="tab-quizard-link"
              className="sr-only peer/link"
              defaultChecked
            />
            <input
              type="radio"
              name="quizard-audit-tabs"
              id="tab-quizard-sat"
              className="sr-only peer/sat"
            />
            <input
              type="radio"
              name="quizard-audit-tabs"
              id="tab-quizard-billing"
              className="sr-only peer/billing"
            />

            {/* Tab Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-neutral-200 bg-neutral-50/80">
              <label
                htmlFor="tab-quizard-link"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/link:bg-white peer-checked/link:text-[#111111] peer-checked/link:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <Smartphone className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>1. &ldquo;Link Device&rdquo; &amp; Cmd+Shift+K Blur</span>
              </label>
              <label
                htmlFor="tab-quizard-sat"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/sat:bg-white peer-checked/sat:text-[#111111] peer-checked/sat:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <Cpu className="w-4 h-4 text-amber-600 shrink-0" />
                <span>2. High-School SAT vs College STEM</span>
              </label>
              <label
                htmlFor="tab-quizard-billing"
                className="cursor-pointer px-4 py-4 text-left sm:text-center transition-all peer-checked/billing:bg-white peer-checked/billing:text-[#111111] peer-checked/billing:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <CreditCard className="w-4 h-4 text-rose-600 shrink-0" />
                <span>3. ~$6.99/wk App Store &amp; Notion Docs</span>
              </label>
            </div>

            {/* Panel 1: Link Device & Cmd+Shift+K Blur */}
            <div className="hidden peer-checked/link:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-800 text-xs font-bold">
                  Mobile-First Companion Architecture (v0.1.13)
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Syncing a Phone App &amp; Pressing{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    Cmd+Shift+K
                  </code>{" "}
                  Flags Your Canvas Log
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Quizard AI&apos;s Chrome extension hasn&apos;t moved past{" "}
                  <strong>version 0.1.13</strong> because it was built as a
                  secondary add-on to its mobile camera app. Before you can solve
                  a single desktop question, you must install Quizard on your
                  phone, start a mobile subscription, and pair your browser via{" "}
                  <strong>&ldquo;Link Device.&rdquo;</strong>
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Worse, triggering Quizard AI on a quiz page via{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    Cmd/Ctrl + Shift + K
                  </code>{" "}
                  mounts an unshielded selection overlay directly over the page
                  without intercepting{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    window.blur
                  </code>{" "}
                  or{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    visibilitychange
                  </code>
                  . Canvas SpeedGrader immediately records that you left the
                  assessment window.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-4 font-mono text-xs">
                <div className="text-neutral-400 border-b border-neutral-800 pb-2 flex items-center justify-between">
                  <span>Canvas Quiz Log Comparison</span>
                  <span className="text-emerald-400">Live Telemetry</span>
                </div>
                <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/30 space-y-1.5">
                  <div className="text-rose-300 font-bold">
                    Quizard AI (v0.1.13 Cmd+Shift+K Overlay)
                  </div>
                  <div className="text-neutral-300">
                    1. Requires iOS/Android &quot;Link Device&quot; handshake
                  </div>
                  <div className="text-neutral-300">
                    2. Pressing Cmd+Shift+K steals active window focus
                  </div>
                  <div className="text-rose-400">
                    3. Canvas logs: stopped_viewing_canvas_quiz_submission_page
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                  <div className="text-emerald-300 font-bold">
                    ExamGhost Stealth Engine
                  </div>
                  <div className="text-neutral-300">
                    1. Standalone desktop install (no phone pairing)
                  </div>
                  <div className="text-neutral-300">
                    2. 8-layer proxy locks document.hasFocus() === true
                  </div>
                  <div className="text-emerald-400">
                    3. Canvas SpeedGrader log: 0 focus-loss or blur events
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: High-School SAT vs College STEM */}
            <div className="hidden peer-checked/sat:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                  Accuracy Benchmark Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Benchmarked on High-School SAT Math vs Built for University
                  STEM Finals
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  On Quizard AI&apos;s own website, its headline accuracy chart
                  is benchmarked against <strong>high-school SAT Math</strong>{" "}
                  questions. That works fine for secondary-school algebra
                  worksheets, but university exams test multivariable calculus,
                  organic chemistry stereochemistry, thermodynamics, and
                  multi-table corporate finance.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Instead of trusting a single mobile OCR pass,{" "}
                  <strong>ExamGhost</strong> extracts clean DOM + high-DPI math
                  context and dispatches every question simultaneously to{" "}
                  <strong>
                    GPT-5.4, Claude Sonnet 4.6, and Gemini 3.1 Pro
                  </strong>
                  , returning a consensus-verified answer with a live confidence
                  score.
                </p>
              </div>

              <div className="bg-[#faf9f6] rounded-xl p-5 border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  University STEM Reasoning Comparison
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      Quizard AI (quizard.ai)
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      Single-Model OCR
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Optimized around mobile photo snaps and SAT-level algebra.
                    No multi-model cross-check when reading dense LaTeX, circuit
                    diagrams, or accounting tables.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      ExamGhost 3-Model Consensus
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-600 text-white">
                      99.2% Verified
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    Queries GPT-5.4 + Claude Sonnet 4.6 + Gemini 3.1 Pro in
                    parallel. Shows when all 3 models agree and includes full
                    step-by-step derivations.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 3: Weekly App Store Billing & Notion Docs */}
            <div className="hidden peer-checked/billing:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold">
                  Subscription &amp; Governance Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  ~$6.99/Week App Store Subscriptions &amp; Notion Legal Pages vs
                  Transparent Pricing
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Because Quizard AI funnels users through iOS App Store (ID{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    1667996582
                  </code>
                  ) and Google Play in-app purchases, students frequently get
                  locked into{" "}
                  <strong>~$6.99/week (~$363/year)</strong> or{" "}
                  <strong>$9.99–$19.99/month</strong> mobile auto-renewals—while
                  Quizard AI&apos;s official Terms and Privacy Policy live on a
                  free Notion link (
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    lovely-vault-f15.notion.site
                  </code>
                  ).
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Meanwhile, if you accidentally subscribe to{" "}
                  <strong>Quizard.io</strong> ($7.99/mo or $39.99/yr), you get an
                  offline flashcard maker capped at{" "}
                  <strong>300 questions per day</strong> with zero browser
                  extension support. ExamGhost gives you{" "}
                  <strong>50 free solves</strong> upfront, transparent{" "}
                  <strong>$8.25/mo annual billing</strong>, or a{" "}
                  <strong>$199 Lifetime</strong> pass.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-3 text-xs">
                <div className="text-neutral-400 font-mono uppercase tracking-wider border-b border-neutral-800 pb-2">
                  Annualized Student Cost Breakdown
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-800">
                  <div>
                    <div className="font-bold text-white">
                      Quizard AI Weekly Mobile Plan
                    </div>
                    <div className="text-neutral-400">
                      ~$6.99/week via iOS App Store / Google Play
                    </div>
                  </div>
                  <span className="font-mono font-bold text-rose-400 text-sm">
                    ~$363.48 / yr
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-800">
                  <div>
                    <div className="font-bold text-white">
                      Quizard.io Flashcard Workspace
                    </div>
                    <div className="text-neutral-400">
                      Offline PDF flashcards only (300 Q/day cap, no extension)
                    </div>
                  </div>
                  <span className="font-mono font-bold text-amber-400 text-sm">
                    $39.99 / yr
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 bg-emerald-500/10 rounded-lg px-3 border border-emerald-500/30">
                  <div>
                    <div className="font-bold text-emerald-300">
                      ExamGhost Annual / Lifetime
                    </div>
                    <div className="text-neutral-300">
                      50 Free Solves • $8.25/mo ($99/yr) • $199 Lifetime
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

        {/* Full Side-by-Side Comparison Table */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              Quizard AI vs Quizard.io vs ExamGhost: 2026 Matrix
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Every technical, stealth, accuracy, and billing difference between
              both Quizard products and ExamGhost.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-5 font-semibold">Feature / Metric</th>
                    <th className="py-4 px-5 font-semibold text-indigo-300">
                      Quizard AI (quizard.ai)
                    </th>
                    <th className="py-4 px-5 font-semibold text-amber-300">
                      Quizard.io (Flashcards)
                    </th>
                    <th className="py-4 px-5 font-semibold text-emerald-400">
                      ExamGhost (2026 Stealth)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Primary Product Type
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Mobile photo scanner + v0.1.13 Chrome crop companion
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Offline lecture PDF to flashcard &amp; quiz generator
                    </td>
                    <td className="py-4 px-5 font-semibold text-[#111111] bg-emerald-50/40">
                      Desktop-first stealth LMS exam &amp; homework solver
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Phone App Required?
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Yes — must install mobile app &amp; &ldquo;Link
                      Device&rdquo;
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      No (web dashboard only, no extension)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      No — works standalone in Chrome immediately
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Canvas / Blackboard Focus Protection
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      None —{" "}
                      <code className="font-mono text-xs">Cmd+Shift+K</code>{" "}
                      fires <code className="font-mono text-xs">window.blur</code>
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      N/A — requires switching browser tabs to quizard.io
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      8-layer block on{" "}
                      <code className="font-mono text-xs">blur</code>,{" "}
                      <code className="font-mono text-xs">visibilitychange</code>{" "}
                      &amp; <code className="font-mono text-xs">hasFocus()</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      DOM &amp; Page Footprint
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Injects visible crop overlay directly into host tab
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Separate web application
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Closed Shadow DOM + instant Stealth Wipe hotkey
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      AI Reasoning Engine
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Single-model OCR benchmarked on high-school SAT Math
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Slide summarization &amp; flashcard generation
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      3-Model Consensus (GPT-5.4 + Claude 4.6 + Gemini 3.1 Pro)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Free Trial / Quota
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Mobile credit-card trial gated in App Store / Play Store
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Limited free tier; Pro capped at 300 questions/day
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      50 Free Solves (no credit card or phone required)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Pricing &amp; Legal Docs
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      ~$6.99/wk or $9.99–$19.99/mo; docs on Notion site
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      $7.99/mo or $39.99/yr (flashcards only)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      $19/mo, $99/yr ($8.25/mo), or $199 Lifetime
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
                    Technical Chrome Web Store Manifest &amp; Domain Audit
                    (Quizard AI &amp; Quizard.io)
                  </h3>
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-2 text-xs text-neutral-600 space-y-2 font-mono bg-white border-t border-neutral-200/70">
                <div>
                  <strong>Quizard AI Extension Name:</strong> Quizard AI -
                  Homework Tutor (&ldquo;Take a picture, get an answer&rdquo;)
                </div>
                <div>
                  <strong>Chrome Web Store ID:</strong>{" "}
                  <code>kfnboibnjcpldbmeielppdepcpliogeb</code> (Version{" "}
                  <code>0.1.13</code>, Package Size <code>6.49MiB</code>, ~20,000
                  users, Publisher: Michael Giardino)
                </div>
                <div>
                  <strong>Quizard AI Domains &amp; Mobile App:</strong>{" "}
                  <code>quizard.ai</code> / <code>usequizard.com</code> • iOS App
                  Store ID <code>1667996582</code> • Default Trigger:{" "}
                  <code>Cmd+Shift+K</code> / <code>Ctrl+Shift+K</code>
                </div>
                <div>
                  <strong>Quizard AI Legal &amp; Policy Host:</strong> Hosted on
                  public Notion workspace{" "}
                  <code>lovely-vault-f15.notion.site</code>
                </div>
                <div>
                  <strong>Quizard.io Domain &amp; Quotas:</strong>{" "}
                  <code>quizard.io</code> (Offline slide/PDF flashcard maker;
                  $7.99/mo or $39.99/yr; 300-question daily generation cap; no
                  Chrome extension)
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
                <span>When Quizard Makes Sense</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Use Quizard AI or Quizard.io If...
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You are photographing paper high-school math worksheets on
                    your iPhone or Android phone (<strong>Quizard AI</strong>).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You want to upload lecture PDFs before an exam to generate
                    offline study flashcards (<strong>Quizard.io</strong>).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Avoid during live LMS quizzes:</strong>{" "}
                    <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded font-mono">
                      Cmd+Shift+K
                    </code>{" "}
                    triggers Canvas focus-loss logs immediately.
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
                    You take timed exams on <strong>Canvas, Blackboard, Moodle,
                    D2L, McGraw-Hill, or Pearson</strong> where tab switches and{" "}
                    <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded font-mono">
                      window.blur
                    </code>{" "}
                    events are logged.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You need <strong>99.2% verified college accuracy</strong>{" "}
                    powered by 3 frontier models voting together rather than a
                    single SAT-tuned mobile scanner.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want <strong>50 free solves right in Chrome</strong>{" "}
                    without downloading a phone app or linking a mobile device.
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
              Frequently Asked Questions: Quizard vs ExamGhost
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Direct answers on Quizard AI (v0.1.13), Quizard.io, Canvas
              detection, and mobile Link Device requirements.
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
          <div className="rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 border border-indigo-200/80 p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-200 text-indigo-800 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Skip the Mobile &ldquo;Link Device&rdquo; Runaround</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                  Test ExamGhost on 50 Real Questions—Free, Standalone, and
                  Zero-Trace.
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                  Install directly in Chrome with no phone app pairing, verify
                  that Canvas logs zero focus-loss events, and compare 3-model
                  consensus accuracy side by side.
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

            <div className="mt-8 pt-6 border-t border-indigo-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
              <span className="font-semibold text-[#111111]">
                Related 2026 Extension Audits:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link prefetch={false}
                  href="/fastsolve-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  FastSolve vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/testbro-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  TestBro vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/usequietly-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  Quietly vs ExamGhost
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
