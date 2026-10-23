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
  Clock,
  EyeOff,
  CreditCard,
  ChevronDown,
  FileCode2,
  Cpu,
  Search,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "StudyX vs ExamGhost (2026) — 10s Crop Lag & Manifest Audit",
    },
    description: "Compare StudyX (v1.0.324) with ExamGhost. Avoid 10-second crop waits and wildcard web_accessible_resources leaks with 0.3s stealth and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/studyx-vs-examghost",
    },
    openGraph: {
        title: "StudyX vs ExamGhost (2026) — 10s Crop Lag & Manifest Audit",
        description: "Compare StudyX (v1.0.324) with ExamGhost. Avoid 10-second crop waits and wildcard web_accessible_resources leaks with 0.3s stealth and 50 Free Solves.",
        url: "https://examghost.com/studyx-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "StudyX vs ExamGhost (2026) — 10s Crop Lag & Manifest Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "StudyX vs ExamGhost (2026) — 10s Crop Lag & Manifest Audit",
        description: "Compare StudyX (v1.0.324) with ExamGhost. Avoid 10-second crop waits and wildcard web_accessible_resources leaks with 0.3s stealth and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const faqs = [
  {
    q: "Can StudyX be used during Canvas quizzes without detection?",
    a: "No. StudyX: AI Homework Helper (Chrome ID: illkpkffnkfiipoglfmhalijmcakbhjh, v1.0.324) injects assets/index.js-loader-_xwqLLa3.js and assets/index-CxS0bAgs.css at document_end and exposes wildcard resources ('assets/*', '**/*', '*') with use_dynamic_url: false. Furthermore, clicking its crop tool and [Get answer] modal fires window.blur events that Canvas SpeedGrader logs immediately.",
  },
  {
    q: "Does StudyX work inside Canvas New Quizzes (LTI 1.3)?",
    a: "StudyX v1.0.324 omits all_frames: true in its content_scripts manifest, meaning its script only runs in the top window and cannot execute inside the cross-origin LTI 1.3 iframes used by Canvas New Quizzes. ExamGhost natively bridges cross-origin LTI 1.3 assessment frames while keeping focus locked.",
  },
  {
    q: "Why does StudyX take 8 to 15 seconds per question?",
    a: "StudyX requires manually dragging a screenshot crop box, clicking [Get answer], and waiting while its backend queries a 75-million-question community archive and polls remote models (StudyX AI / StudyX AI Pro). ExamGhost extracts DOM and math context directly inside a Closed Shadow DOM and cross-verifies across 3 frontier models simultaneously.",
  },
  {
    q: "What is StudyX's UltraUsageThresholdModal and how much does StudyX Pro cost?",
    a: "Free StudyX users hit a credit wall that triggers the UltraUsageThresholdModal popup mid-session, forcing an upgrade to StudyX Plus/Pro ($9.95 to $19.95/month, or up to $240/year). ExamGhost gives every student 50 Free Solves ($0, no credit card required), followed by transparent $19/mo Monthly, $99/yr Annual ($8.25/mo), or $199 Lifetime plans.",
  },
  {
    q: "How does ExamGhost prevent professors from seeing the tool during in-person exams?",
    a: "ExamGhost operates inside an isolated Closed Shadow DOM container with an adjustable Ghost Mode opacity slider (0% to 100%) and an emergency hardware Panic Switch (⌘+Shift+U) that purges the overlay from memory in under 1 millisecond.",
  },
];

export default function StudyXVsExamGhostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-01-17",
                "dateModified": "2026-03-04",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/studyx-vs-examghost/#webpage",
        url: "https://examghost.com/studyx-vs-examghost",
        name: "StudyX vs ExamGhost (2026): 75M Community Crop Lag & '**/*' Leak vs True LMS Stealth",
        description:
          "Detailed 2026 comparison of StudyX: AI Homework Helper (v1.0.324) and ExamGhost covering wildcard web_accessible_resources, missing LTI 1.3 iframe support, crop focus-loss logs, and pricing.",
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
            name: "StudyX vs ExamGhost",
            item: "https://examghost.com/studyx-vs-examghost",
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
              StudyX vs ExamGhost
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-900 text-xs font-semibold">
                <Search className="w-3.5 h-3.5 text-violet-600" />
                <span>
                  2026 Audit: StudyX AI Homework Helper (v1.0.324) vs ExamGhost
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#111111]">
                Dragging a Crop Box &amp; Waiting{" "}
                <span className="underline decoration-violet-500/40 decoration-wavy underline-offset-4">
                  10 Seconds
                </span>{" "}
                Will Get You Flagged on Canvas.
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-600 leading-relaxed">
                <strong>StudyX</strong> (
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  studyx.ai
                </code>
                , operated by StudyX Inc) is a sprawling web portal for AI note
                taking, essay humanizing, and searching a{" "}
                <strong>75M+ community homework bank</strong>. However, its
                Chrome extension (<strong>v1.0.324</strong>, only 1,000 users)
                exposes every internal file via wildcard{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  **/*
                </code>{" "}
                permissions, breaks inside Canvas New Quizzes LTI 1.3 iframes,
                and logs{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  window.blur
                </code>{" "}
                every time you drag its crop box and click{" "}
                <strong>[Get answer]</strong>.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Manifest Exposure
                  </div>
                  <div className="text-sm font-bold text-rose-600">
                    Wildcard &ldquo;**/*&rdquo; Leak vs Zero Exposed Assets
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Canvas New Quizzes
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    Omits all_frames (Breaks) vs Native LTI 1.3 Bridge
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Workflow &amp; Speed
                  </div>
                  <div className="text-sm font-bold text-emerald-700">
                    8–15s Crop + DB Poll vs Instant 3-Model Vote
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

            {/* Right Column: StudyX v1.0.324 Wildcard Manifest & Crop Lag Inspector */}
            <div className="lg:col-span-5">
              <div className="bg-[#141418] text-white rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
                <div className="px-5 py-3.5 bg-[#1c1c22] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      StudyX v1.0.324 Extension Inspector
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30">
                    use_dynamic_url: false
                  </span>
                </div>

                <div className="p-5 space-y-3.5">
                  {/* 1. Wildcard web_accessible_resources */}
                  <div className="rounded-xl bg-[#1b1b22] border border-rose-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                        1. Wildcard Manifest Leak (manifest.json)
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                        Proctor Detectable
                      </span>
                    </div>
                    <div className="bg-[#111115] p-2.5 rounded-lg border border-neutral-800 font-mono text-[11px] text-rose-200 overflow-x-auto">
                      <div>
                        &quot;resources&quot;: [&quot;assets/*&quot;,
                        &quot;**/*&quot;, &quot;*&quot;],
                      </div>
                      <div>&quot;use_dynamic_url&quot;: false</div>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Any LMS script can probe{" "}
                      <code className="text-rose-300 font-mono">
                        assets/index-CxS0bAgs.css
                      </code>
                      —and because StudyX omits{" "}
                      <code className="text-rose-300 font-mono">
                        all_frames: true
                      </code>
                      , it cannot run inside Canvas New Quizzes LTI 1.3 iframes.
                    </p>
                  </div>

                  {/* 2. Crop-and-Wait + UltraUsageThresholdModal */}
                  <div className="rounded-xl bg-[#1b1b22] border border-amber-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        2. Manual Crop Box &amp; Credit Paywall
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        8–15s Delay
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Forces you to drag a crop box and click{" "}
                      <span className="text-white font-semibold">
                        [Get answer]
                      </span>{" "}
                      (firing{" "}
                      <code className="text-amber-300 font-mono">
                        window.blur
                      </code>
                      ), wait 8–15s for 75M community search, then blocks free
                      users with{" "}
                      <code className="text-amber-300 font-mono">
                        UltraUsageThresholdModal
                      </code>
                      .
                    </p>
                  </div>

                  {/* 3. ExamGhost Contrast */}
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>ExamGhost: Instant Stealth + LTI 1.3 Support</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Zero exposed{" "}
                      <code className="text-emerald-300 font-mono">
                        web_accessible_resources
                      </code>
                      , full cross-origin LTI 1.3 iframe support, 8-layer{" "}
                      <code className="text-emerald-300 font-mono">
                        window.blur
                      </code>{" "}
                      blocking, and{" "}
                      <span className="text-white font-semibold">
                        50 free solves
                      </span>
                      .
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
              Why StudyX v1.0.324 Fails Inside Timed University Exams
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Click any tab below to inspect StudyX&apos;s wildcard manifest
              exposure, 10-second community database polling, and credit modal
              paywalls.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            {/* Radio Inputs */}
            <input
              type="radio"
              name="studyx-audit-tabs"
              id="tab-studyx-manifest"
              className="sr-only peer/manifest"
              defaultChecked
            />
            <input
              type="radio"
              name="studyx-audit-tabs"
              id="tab-studyx-lag"
              className="sr-only peer/lag"
            />
            <input
              type="radio"
              name="studyx-audit-tabs"
              id="tab-studyx-modal"
              className="sr-only peer/modal"
            />

            {/* Tab Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-neutral-200 bg-neutral-50/80">
              <label
                htmlFor="tab-studyx-manifest"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/manifest:bg-white peer-checked/manifest:text-[#111111] peer-checked/manifest:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <EyeOff className="w-4 h-4 text-rose-600 shrink-0" />
                <span>1. Wildcard &ldquo;**/*&rdquo; &amp; LTI 1.3 Failure</span>
              </label>
              <label
                htmlFor="tab-studyx-lag"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/lag:bg-white peer-checked/lag:text-[#111111] peer-checked/lag:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>2. 10s Crop-and-Wait &amp; Blur Logs</span>
              </label>
              <label
                htmlFor="tab-studyx-modal"
                className="cursor-pointer px-4 py-4 text-left sm:text-center transition-all peer-checked/modal:bg-white peer-checked/modal:text-[#111111] peer-checked/modal:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <CreditCard className="w-4 h-4 text-violet-600 shrink-0" />
                <span>3. UltraUsageThresholdModal &amp; Pricing</span>
              </label>
            </div>

            {/* Panel 1: Wildcard Web Accessible Resources & LTI 1.3 Failure */}
            <div className="hidden peer-checked/manifest:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold">
                  Manifest V3 Fingerprint Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Exposing{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    &quot;**/*&quot;
                  </code>{" "}
                  and Omitting{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    all_frames
                  </code>{" "}
                  Breaks Canvas Stealth
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  In Chrome extension security, setting{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    &quot;resources&quot;: [&quot;assets/*&quot;,
                    &quot;**/*&quot;, &quot;*&quot;]
                  </code>{" "}
                  with{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    use_dynamic_url: false
                  </code>{" "}
                  is the worst possible configuration for stealth. It allows any
                  website or proctoring script to directly fetch StudyX&apos;s
                  internal bundle files (
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    assets/index-CxS0bAgs.css
                  </code>
                  ) to confirm the extension is installed.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Additionally, StudyX v1.0.324 omits{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    all_frames: true
                  </code>{" "}
                  from its{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    content_scripts
                  </code>{" "}
                  array—meaning it cannot read questions inside the cross-origin
                  LTI 1.3 iframes used by <strong>Canvas New Quizzes</strong>.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-4 font-mono text-xs">
                <div className="text-neutral-400 border-b border-neutral-800 pb-2 flex items-center justify-between">
                  <span>MV3 Resource &amp; Iframe Audit</span>
                  <span className="text-emerald-400">Source Verified</span>
                </div>
                <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/30 space-y-1.5">
                  <div className="text-rose-300 font-bold">
                    StudyX v1.0.324 (217KiB Bundle)
                  </div>
                  <div className="text-neutral-300">
                    • Exposes [&quot;assets/*&quot;, &quot;**/*&quot;,
                    &quot;*&quot;] statically
                  </div>
                  <div className="text-neutral-300">
                    • Injects assets/index-CxS0bAgs.css into host page
                  </div>
                  <div className="text-rose-400">
                    • Omits all_frames: true (fails in LTI 1.3 New Quizzes)
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                  <div className="text-emerald-300 font-bold">
                    ExamGhost Stealth Engine
                  </div>
                  <div className="text-neutral-300">
                    • 0 public web_accessible_resources exposed
                  </div>
                  <div className="text-neutral-300">
                    • Isolated Closed Shadow DOM v1 container
                  </div>
                  <div className="text-emerald-400">
                    • Native cross-origin LTI 1.3 iframe bridge
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: 10s Crop-and-Wait & Blur Logs */}
            <div className="hidden peer-checked/lag:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                  Workflow &amp; SpeedGrader Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Manual Cropping + 75M Community Search Costs You Time and
                  Focus Logs
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Instead of reading quiz questions in-place, StudyX v1.0.324
                  requires you to click its extension icon, drag a screenshot
                  box around every single question, click{" "}
                  <strong>[Get answer]</strong>, and wait{" "}
                  <strong>8 to 15 seconds</strong> while it searches 75 million
                  archived community answers and polls its AI backend.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Because StudyX has zero{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    window.blur
                  </code>{" "}
                  protection, interacting with its crop box and modal logs a
                  12-to-15 second{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    Stopped viewing the Canvas quiz-taking page
                  </code>{" "}
                  event on every question. <strong>ExamGhost</strong> solves in
                  place across <strong>3 frontier models in parallel</strong>{" "}
                  with zero focus loss.
                </p>
              </div>

              <div className="bg-[#faf9f6] rounded-xl p-5 border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Per-Question Exam Workflow Comparison
                </div>
                <div className="p-4 rounded-xl bg-white border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      StudyX Crop-and-Poll Workflow
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      8–15s + Blur Flag
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Click crop → Drag rectangle → Click [Get answer] → Fires{" "}
                    <code className="font-mono">window.blur</code> → Wait 8–15s
                    for 75M community DB search.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      ExamGhost 1-Keystroke Consensus
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-600 text-white">
                      99.2% Verified · 0 Blur
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    Press hotkey → Queries GPT-5.4 + Claude Sonnet 4.6 + Gemini
                    3.1 Pro simultaneously inside Closed Shadow DOM with Focus
                    Shield active.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 3: UltraUsageThresholdModal & Pricing */}
            <div className="hidden peer-checked/modal:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-violet-50 text-violet-800 text-xs font-bold">
                  Paywall &amp; Quota Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Mid-Exam{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    UltraUsageThresholdModal
                  </code>{" "}
                  Lockouts vs 50 Free Solves
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  StudyX splits its solver into basic <em>StudyX AI</em> and
                  paid <em>StudyX AI Pro</em>. Once free users exhaust their
                  daily starter credits, the extension triggers its hardcoded{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    UltraUsageThresholdModal
                  </code>{" "}
                  popup—demanding a{" "}
                  <strong>$9.95 to $19.95/month ($120–$240/year)</strong>{" "}
                  subscription to unlock Pro reasoning.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  <strong>ExamGhost</strong> never downgrades your AI model.
                  Every user gets <strong>50 free solves</strong> powered by our
                  full 3-model consensus engine (no credit card required), with
                  simple upgrades at <strong>$19/mo</strong>,{" "}
                  <strong>$99/yr ($8.25/mo)</strong>, or{" "}
                  <strong>$199 Lifetime</strong>.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-3 text-xs">
                <div className="text-neutral-400 font-mono uppercase tracking-wider border-b border-neutral-800 pb-2">
                  Quota &amp; Annual Cost Breakdown
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-800">
                  <div>
                    <div className="font-bold text-white">
                      StudyX Plus / Pro Subscription
                    </div>
                    <div className="text-neutral-400">
                      $9.95–$19.95/mo • Free tier hits UltraUsageThresholdModal
                    </div>
                  </div>
                  <span className="font-mono font-bold text-rose-400 text-sm">
                    $120–$240 / yr
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
                      ExamGhost Annual / Lifetime
                    </div>
                    <div className="text-neutral-300">
                      Unlimited 3-model solves • $8.25/mo ($99/yr) • $199
                      Lifetime
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
              StudyX (v1.0.324) vs ExamGhost: 2026 Matrix
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Every stealth, LTI 1.3 iframe, latency, and pricing difference
              side by side.
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
                    <th className="py-4 px-5 font-semibold text-violet-300">
                      StudyX (v1.0.324)
                    </th>
                    <th className="py-4 px-5 font-semibold text-emerald-400">
                      ExamGhost (2026 Stealth)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Web Accessible Resources
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Exposes{" "}
                      <code className="font-mono text-xs">
                        [&quot;assets/*&quot;, &quot;**/*&quot;, &quot;*&quot;]
                      </code>{" "}
                      statically
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Zero public assets exposed to host page scripts
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Canvas New Quizzes (LTI 1.3 Iframes)
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Omits <code className="font-mono text-xs">all_frames</code>{" "}
                      (cannot run inside cross-origin iframes)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Native cross-origin LTI 1.3 iframe bridge
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Canvas / Blackboard Focus Protection
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      None — Crop box &amp; [Get answer] fire{" "}
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
                      Answer Workflow &amp; Speed
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Manual screenshot crop + 8–15s 75M community search
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      1-keystroke instant solve inside Closed Shadow DOM HUD
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      AI Reasoning Architecture
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Community archive lookup + gated StudyX AI Pro
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      3-Model Consensus (GPT-5.4 + Claude 4.6 + Gemini 3.1 Pro)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Emergency Panic Switch
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      None (opaque crop box &amp; sidebar)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Hardware Panic Switch (
                      <code className="font-mono text-xs">⌘+Shift+U</code>) +
                      Opacity Slider
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Free Trial &amp; Pricing
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Credit-capped free tier (
                      <code className="font-mono text-xs">
                        UltraUsageThresholdModal
                      </code>
                      ); $9.95–$19.95/mo
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
                    Technical Chrome Web Store Manifest &amp; Bundle Audit
                    (StudyX v1.0.324)
                  </h3>
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-2 text-xs text-neutral-600 space-y-2 font-mono bg-white border-t border-neutral-200/70">
                <div>
                  <strong>Extension Name &amp; Publisher:</strong> StudyX: AI
                  Homework Helper • StudyX Inc (Dover, DE) •{" "}
                  <code>studyx.ai</code>
                </div>
                <div>
                  <strong>Chrome Web Store ID:</strong>{" "}
                  <code>illkpkffnkfiipoglfmhalijmcakbhjh</code> (Version{" "}
                  <code>1.0.324</code>, Package Size <code>217KiB</code>, ~1,000
                  users)
                </div>
                <div>
                  <strong>Injected Content Scripts (Top Frame Only):</strong>{" "}
                  <code>assets/index.js-loader-_xwqLLa3.js</code> &amp;{" "}
                  <code>assets/index-CxS0bAgs.css</code> at{" "}
                  <code>document_end</code> (omits <code>all_frames: true</code>
                  )
                </div>
                <div>
                  <strong>Wildcard Web Accessible Resources:</strong>{" "}
                  <code>
                    &quot;resources&quot;: [&quot;assets/*&quot;,
                    &quot;**/*&quot;, &quot;*&quot;,
                    &quot;assets/index.js-OkwNqp60.js&quot;,
                    &quot;assets/runtime-dom.esm-bundler-DenuzAw6.js&quot;]
                  </code>{" "}
                  with <code>use_dynamic_url: false</code>
                </div>
                <div>
                  <strong>Paywall Component &amp; Tiers:</strong>{" "}
                  <code>UltraUsageThresholdModal</code> • StudyX AI vs StudyX AI
                  Pro ($9.95–$19.95/mo)
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
                <span>When StudyX Makes Sense</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Use StudyX If...
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You want a web dashboard with an AI Note Taker, Essay
                    Humanizer, and Plagiarism Checker for take-home writing.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You are searching older textbook problems in its 75M+
                    community Q&amp;A archive with no time pressure.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Avoid on live Canvas or Blackboard exams:</strong>{" "}
                    Wildcard <code className="font-mono text-xs">**/*</code>{" "}
                    exposure and manual crop boxes trigger focus-loss flags.
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
                      Canvas Classic, Canvas New Quizzes (LTI 1.3), Blackboard,
                      Moodle, or D2L
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want <strong>zero exposed manifest assets</strong>,
                    Closed Shadow DOM isolation, and 8-layer Focus Shielding.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want <strong>50 free solves</strong> and{" "}
                    <strong>3-model consensus accuracy (99.2%)</strong> without
                    waiting 10+ seconds per manual crop.
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
              Frequently Asked Questions: StudyX vs ExamGhost
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Direct answers on StudyX v1.0.324&apos;s wildcard manifest, LTI
              1.3 iframe support, and Canvas detection.
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
          <div className="rounded-3xl bg-gradient-to-br from-violet-50 via-white to-emerald-50 border border-violet-200/80 p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-violet-200 text-violet-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                  <span>Skip the 10-Second Crop Lag &amp; Wildcard Leaks</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                  Start with 50 Free Solves—Native LTI 1.3 Support &amp; Zero
                  Blur Logs.
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                  Test ExamGhost&apos;s Closed Shadow DOM HUD and 3-model
                  consensus engine on your hardest STEM and business coursework
                  with no credit card required.
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

            <div className="mt-8 pt-6 border-t border-violet-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
              <span className="font-semibold text-[#111111]">
                Related 2026 Extension Audits:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link prefetch={false}
                  href="/campusai-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  Campus AI vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/studybotpro-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  StudyBotPro vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/answerai-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  Answer.AI vs ExamGhost
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
