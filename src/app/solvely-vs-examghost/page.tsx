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
  Code2,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Solvely vs ExamGhost (2026) — Preload Script & Cap Audit",
    },
    description: "Compare Solvely (v0.8.4) with ExamGhost. Avoid detectable canvas-layout-preload.js scripts and sidepanel blur logs with 0.3s stealth and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/solvely-vs-examghost",
    },
    openGraph: {
        title: "Solvely vs ExamGhost (2026) — Preload Script & Cap Audit",
        description: "Compare Solvely (v0.8.4) with ExamGhost. Avoid detectable canvas-layout-preload.js scripts and sidepanel blur logs with 0.3s stealth and 50 Free Solves.",
        url: "https://examghost.com/solvely-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Solvely vs ExamGhost (2026) — Preload Script & Cap Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Solvely vs ExamGhost (2026) — Preload Script & Cap Audit",
        description: "Compare Solvely (v0.8.4) with ExamGhost. Avoid detectable canvas-layout-preload.js scripts and sidepanel blur logs with 0.3s stealth and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const faqs = [
  {
    q: "Can Canvas or proctoring scripts detect the SolvelyAI Chrome extension?",
    a: "Yes. Our 2026 manifest audit of SolvelyAI (Chrome Web Store ID: aedglnfjjccpifohekdeoogffomjcikm, v0.8.4, 1.19MiB) revealed that it injects content-scripts/canvas-layout-preload.js at document_start and content-scripts/canvas.js plus content-scripts/lms-track.js at document_idle on instructure.com, blackboard.com, brightspace.com, and gradescope.com. Worse, it exposes content-scripts/canvas.css and sidepanel.html in web_accessible_resources across <all_urls>, allowing any host page script to probe for the extension.",
  },
  {
    q: "Can professors see if I use Solvely on a Canvas quiz?",
    a: "Yes. Solvely's iframe-sidepanel.js and web app lack Focus Shield event suppression. Clicking into Solvely's injected sidepanel or switching tabs to solvely.ai triggers Canvas window.blur and document.visibilitychange listeners, logging student departures in SpeedGrader.",
  },
  {
    q: "Does Solvely limit how many questions I can solve during an exam?",
    a: "Yes. While Solvely's Vue 3 web portal (solvely.ai) advertises a free tier alongside its Mock Exam and Multi-Model Cross-Check tools, free accounts are restricted to a strict daily solve quota before triggering the Solvely Unlimited paywall ($12.99/month). Running out of daily solves mid-exam forces you to open a checkout window while the test timer ticks. ExamGhost includes 50 Free Solves ($0 trial, no card required) and unlimited solves on all paid plans.",
  },
  {
    q: "How fast is ExamGhost compared to Solvely's Multi-Model Cross-Check?",
    a: "Solvely's Multi-Model Cross-Check queries cloud models sequentially via api-web.solvely.ai inside an unshielded sidepanel and averages 4.5 to 8.0 seconds per question. ExamGhost dispatches GPT-5.4, Claude Sonnet 4.6, and Gemini 3.1 Pro in parallel and renders the consensus answer inside an isolated Closed Shadow DOM HUD.",
  },
  {
    q: "How much does ExamGhost cost compared to Solvely?",
    a: "Solvely Unlimited charges $12.99 every month ($155.88/year or $623.52 over 4 years of college). ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), followed by flexible unlimited options: $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or a one-time $199 Lifetime pass.",
  },
];

export default function SolvelyVsExamGhostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-01-24",
                "dateModified": "2026-03-06",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/solvely-vs-examghost/#webpage",
        url: "https://examghost.com/solvely-vs-examghost",
        name: "Solvely vs ExamGhost (2026): canvas-layout-preload.js & Daily Caps vs True LMS Stealth",
        description:
          "Detailed 2026 comparison of SolvelyAI (solvely.ai v0.8.4) and ExamGhost covering canvas-layout-preload.js DOM mutations, exposed sidepanel.html assets, iframe-sidepanel.js focus leaks, and pricing.",
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
            name: "Solvely vs ExamGhost",
            item: "https://examghost.com/solvely-vs-examghost",
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
              Solvely vs ExamGhost
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold">
                <Code2 className="w-3.5 h-3.5 text-amber-700" />
                <span>
                  2026 Audit: SolvelyAI (v0.8.4 · 100K Users) vs ExamGhost
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#111111]">
                Injecting{" "}
                <span className="underline decoration-amber-500/40 decoration-wavy underline-offset-4">
                  canvas-layout-preload.js
                </span>{" "}
                &amp; Exposing{" "}
                <code className="text-2xl sm:text-4xl bg-neutral-200/70 px-2 py-0.5 rounded-lg font-mono">
                  sidepanel.html
                </code>{" "}
                Is Not Stealth.
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-600 leading-relaxed">
                <strong>Solvely</strong> (
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  solvely.ai
                </code>
                ) is well-known for its web Mock Exam generator and Multi-Model
                Cross-Check. However, its Chrome extension (
                <strong>v0.8.4</strong>) injects{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  canvas-layout-preload.js
                </code>{" "}
                at{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  document_start
                </code>
                , runs{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  lms-track.js
                </code>{" "}
                across Canvas, Blackboard, Brightspace, and Gradescope, exposes{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  sidepanel.html
                </code>{" "}
                to every site, and cuts off free users with a strict daily solve
                cap before forcing a <strong>$12.99/mo</strong> upgrade.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Host DOM Mutation
                  </div>
                  <div className="text-sm font-bold text-rose-600">
                    canvas-layout-preload.js vs Closed Shadow DOM
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    SpeedGrader Log
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    iframe-sidepanel.js Blur vs 8-Layer Shield
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Free Trial &amp; Cost
                  </div>
                  <div className="text-sm font-bold text-emerald-700">
                    Daily Cap ($155.88/yr) vs 50 Free ($99/yr)
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

            {/* Right Column: SolvelyAI v0.8.4 Manifest & Preload Inspector */}
            <div className="lg:col-span-5">
              <div className="bg-[#141418] text-white rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
                <div className="px-5 py-3.5 bg-[#1c1c22] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      SolvelyAI v0.8.4 Manifest Audit
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    1.19MiB Package
                  </span>
                </div>

                <div className="p-5 space-y-3.5">
                  {/* 1. Injected Preload & LMS Track Scripts */}
                  <div className="rounded-xl bg-[#1b1b22] border border-rose-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                        1. Injected LMS Scripts (manifest.json)
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                        document_start
                      </span>
                    </div>
                    <div className="bg-[#111115] p-2.5 rounded-lg border border-neutral-800 font-mono text-[11px] text-rose-200 space-y-1">
                      <div>
                        • content-scripts/canvas-layout-preload.js
                      </div>
                      <div>
                        • content-scripts/canvas.js + lms-track.js
                      </div>
                      <div>
                        • Exposed: content-scripts/canvas.css &amp;
                        sidepanel.html
                      </div>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Alters the Canvas page layout at{" "}
                      <code className="text-rose-300 font-mono">
                        document_start
                      </code>{" "}
                      and exposes{" "}
                      <code className="text-rose-300 font-mono">
                        sidepanel.html
                      </code>{" "}
                      across{" "}
                      <code className="text-rose-300 font-mono">
                        &lt;all_urls&gt;
                      </code>
                      .
                    </p>
                  </div>

                  {/* 2. iframe-sidepanel.js Blur & Daily Quota */}
                  <div className="rounded-xl bg-[#1b1b22] border border-amber-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        2. iframe-sidepanel.js &amp; Daily Quota Cap
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        $12.99/mo Upsell
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Clicking{" "}
                      <code className="text-amber-300 font-mono">
                        iframe-sidepanel.js
                      </code>{" "}
                      fires{" "}
                      <code className="text-amber-300 font-mono">
                        window.blur
                      </code>{" "}
                      in SpeedGrader—and once your daily free solves run out,
                      Solvely forces a mid-exam checkout redirect to{" "}
                      <code className="text-amber-300 font-mono">
                        solvely.ai
                      </code>
                      .
                    </p>
                  </div>

                  {/* 3. ExamGhost Contrast */}
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>ExamGhost: 3-Model Voting Inside Shadow DOM</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Zero host layout preload scripts, zero exposed{" "}
                      <code className="text-emerald-300 font-mono">
                        web_accessible_resources
                      </code>
                      , 8-layer Focus Shielding, and{" "}
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
              3 Reasons SolvelyAI v0.8.4 Gets Flagged on Timed LMS Quizzes
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Click any tab below to inspect Solvely&apos;s{" "}
              <code className="font-mono text-xs">
                canvas-layout-preload.js
              </code>{" "}
              injection, <code className="font-mono text-xs">iframe-sidepanel.js</code>{" "}
              blur leaks, and $12.99/mo quota paywall.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            {/* Radio Inputs */}
            <input
              type="radio"
              name="solvely-audit-tabs"
              id="tab-solvely-preload"
              className="sr-only peer/preload"
              defaultChecked
            />
            <input
              type="radio"
              name="solvely-audit-tabs"
              id="tab-solvely-blur"
              className="sr-only peer/blur"
            />
            <input
              type="radio"
              name="solvely-audit-tabs"
              id="tab-solvely-quota"
              className="sr-only peer/quota"
            />

            {/* Tab Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-neutral-200 bg-neutral-50/80">
              <label
                htmlFor="tab-solvely-preload"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/preload:bg-white peer-checked/preload:text-[#111111] peer-checked/preload:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <Code2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>1. canvas-layout-preload.js &amp; CSS Leak</span>
              </label>
              <label
                htmlFor="tab-solvely-blur"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/blur:bg-white peer-checked/blur:text-[#111111] peer-checked/blur:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <PanelRight className="w-4 h-4 text-amber-600 shrink-0" />
                <span>2. iframe-sidepanel.js Blur Logs</span>
              </label>
              <label
                htmlFor="tab-solvely-quota"
                className="cursor-pointer px-4 py-4 text-left sm:text-center transition-all peer-checked/quota:bg-white peer-checked/quota:text-[#111111] peer-checked/quota:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3. Daily Caps &amp; $12.99/mo Billing</span>
              </label>
            </div>

            {/* Panel 1: canvas-layout-preload.js & CSS Leak */}
            <div className="hidden peer-checked/preload:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold">
                  DOM &amp; Resource Fingerprint Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Modifying Canvas at{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    document_start
                  </code>{" "}
                  Exposes Your Extension
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  SolvelyAI v0.8.4 injects{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    content-scripts/canvas-layout-preload.js
                  </code>{" "}
                  at{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    document_start
                  </code>{" "}
                  on{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    *.instructure.com
                  </code>
                  , followed by{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    content-scripts/canvas.js
                  </code>{" "}
                  and{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    content-scripts/lms-track.js
                  </code>{" "}
                  across Canvas, Blackboard, Brightspace, and Gradescope.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  To style that injected layout, Solvely exposes{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    content-scripts/canvas.css
                  </code>{" "}
                  and{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    sidepanel.html
                  </code>{" "}
                  in{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    web_accessible_resources
                  </code>{" "}
                  across{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    &lt;all_urls&gt;
                  </code>
                  —allowing any page script to detect the extension in 1 line of
                  JavaScript.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-4 font-mono text-xs">
                <div className="text-neutral-400 border-b border-neutral-800 pb-2 flex items-center justify-between">
                  <span>Manifest V3 Footprint Comparison</span>
                  <span className="text-emerald-400">Source Verified</span>
                </div>
                <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/30 space-y-1.5">
                  <div className="text-rose-300 font-bold">
                    SolvelyAI v0.8.4 (1.19MiB)
                  </div>
                  <div className="text-neutral-300">
                    • document_start: canvas-layout-preload.js
                  </div>
                  <div className="text-neutral-300">
                    • document_idle: canvas.js + lms-track.js
                  </div>
                  <div className="text-rose-400">
                    • Exposes content-scripts/canvas.css &amp; sidepanel.html
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                  <div className="text-emerald-300 font-bold">
                    ExamGhost Stealth Engine
                  </div>
                  <div className="text-neutral-300">
                    • Zero host layout mutation at document_start
                  </div>
                  <div className="text-neutral-300">
                    • Isolated Closed Shadow DOM v1 (#shadow-root)
                  </div>
                  <div className="text-emerald-400">
                    • 0 public web_accessible_resources exposed
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: iframe-sidepanel.js Blur Logs */}
            <div className="hidden peer-checked/blur:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                  SpeedGrader Telemetry Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Clicking Solvely&apos;s{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    iframe-sidepanel.js
                  </code>{" "}
                  Logs a Tab Departure
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  When you click inside an injected iframe (
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    iframe-sidepanel.js
                  </code>{" "}
                  /{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    sidepanel.html
                  </code>
                  ), the parent Canvas quiz window immediately loses active
                  focus—firing{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    window.blur
                  </code>{" "}
                  to Canvas SpeedGrader.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  While Solvely&apos;s{" "}
                  <strong>Multi-Model Cross-Check</strong> is a helpful feature
                  on its web portal, triggering it inside an unshielded
                  sidepanel during a timed quiz leaves your SpeedGrader log full
                  of focus-loss timestamps. <strong>ExamGhost</strong> runs its{" "}
                  <strong>
                    3-model consensus (GPT-5.4 + Claude 4.6 + Gemini 3.1 Pro)
                  </strong>{" "}
                  inside a Closed Shadow DOM while its 8-layer Focus Shield
                  keeps{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    document.hasFocus()
                  </code>{" "}
                  locked to <code className="font-mono text-xs">true</code>.
                </p>
              </div>

              <div className="bg-[#faf9f6] rounded-xl p-5 border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Multi-Model Execution Comparison
                </div>
                <div className="p-4 rounded-xl bg-white border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      Solvely Multi-Model Cross-Check
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      Sidepanel Blur
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Renders inside <code className="font-mono">sidepanel.html</code>{" "}
                    (4.5–8.0s via <code className="font-mono">api-web.solvely.ai</code>
                    ); clicking the iframe steals focus from the Canvas quiz
                    document.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      ExamGhost 3-Model Consensus HUD
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-600 text-white">
                      99.2% Verified · 0 Blur
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    Queries GPT-5.4, Claude Sonnet 4.6, and Gemini 3.1 Pro in
                    parallel and displays the consensus vote inside a Closed
                    Shadow DOM with zero focus loss.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 3: Daily Caps & $12.99/mo Billing */}
            <div className="hidden peer-checked/quota:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold">
                  Quota &amp; Pricing Breakdown
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Daily Free Solve Cutoffs ($12.99/mo) vs 50 Free Solves &amp;
                  $8.25/mo Annual
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Solvely rations free users to a strict daily solve quota. When
                  that daily allowance runs out on Question 4 of a 30-question
                  midterm, Solvely locks the solver behind its{" "}
                  <strong>Solvely Unlimited ($12.99/month, $155.88/year)</strong>{" "}
                  paywall—costing <strong>$623.52</strong> across a 4-year
                  degree with no lifetime option.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  <strong>ExamGhost</strong> gives you{" "}
                  <strong>50 free solves</strong> upfront with zero daily trickle
                  games and no credit card required, followed by{" "}
                  <strong>$19/mo Monthly</strong>,{" "}
                  <strong>$99/yr Annual ($8.25/mo)</strong>, or a one-time{" "}
                  <strong>$199 Lifetime</strong> pass.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-3 text-xs">
                <div className="text-neutral-400 font-mono uppercase tracking-wider border-b border-neutral-800 pb-2">
                  Annual &amp; 4-Year University Cost Comparison
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-800">
                  <div>
                    <div className="font-bold text-white">
                      Solvely Unlimited Subscription
                    </div>
                    <div className="text-neutral-400">
                      $12.99/mo ($155.88/yr) • No Lifetime tier available
                    </div>
                  </div>
                  <span className="font-mono font-bold text-rose-400 text-sm">
                    $623.52 / 4 yrs
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
              SolvelyAI (v0.8.4) vs ExamGhost: 2026 Matrix
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Every technical, DOM preload, sidepanel focus, and pricing
              difference side by side.
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
                    <th className="py-4 px-5 font-semibold text-amber-300">
                      SolvelyAI (solvely.ai v0.8.4)
                    </th>
                    <th className="py-4 px-5 font-semibold text-emerald-400">
                      ExamGhost (2026 Stealth)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      LMS DOM Injection Behavior
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Injects{" "}
                      <code className="font-mono text-xs">
                        canvas-layout-preload.js
                      </code>{" "}
                      at <code className="font-mono text-xs">document_start</code>{" "}
                      + <code className="font-mono text-xs">lms-track.js</code>
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Isolated Closed Shadow DOM v1 (0 host layout mutations)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Web Accessible Resources
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Exposes{" "}
                      <code className="font-mono text-xs">
                        content-scripts/canvas.css
                      </code>{" "}
                      &amp;{" "}
                      <code className="font-mono text-xs">sidepanel.html</code>
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Zero public assets exposed to host page detection
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Canvas / Blackboard Focus Protection
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      None —{" "}
                      <code className="font-mono text-xs">
                        iframe-sidepanel.js
                      </code>{" "}
                      fires <code className="font-mono text-xs">window.blur</code>
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      8-Layer Focus Shield blocks{" "}
                      <code className="font-mono text-xs">blur</code> &amp;{" "}
                      <code className="font-mono text-xs">visibilitychange</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Multi-Model Reasoning
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Web/Sidepanel Multi-Model Cross-Check (4.5–8.0s queue)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Stealth 3-Model Consensus (GPT-5.4 + Claude 4.6 + Gemini
                      3.1 Pro)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Free Trial Allowance
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Strict daily solve cap before mid-exam paywall
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      50 Free Solves upfront (no credit card required)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Emergency Panic Switch
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      None (opaque injected iframe sidepanel)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Hardware Panic Switch (
                      <code className="font-mono text-xs">⌘+Shift+U</code>) +
                      Opacity Slider
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Pricing Structure
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      $12.99/mo ($155.88/yr; $623.52 over 4 years)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      $19/mo • $99/yr ($8.25/mo) • $199 One-Time Lifetime
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
                    Technical Chrome Web Store Manifest &amp; Script Audit
                    (SolvelyAI v0.8.4)
                  </h3>
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-2 text-xs text-neutral-600 space-y-2 font-mono bg-white border-t border-neutral-200/70">
                <div>
                  <strong>Extension Name &amp; Domain:</strong> SolvelyAI •{" "}
                  <code>solvely.ai</code> (API:{" "}
                  <code>api-web.solvely.ai</code>)
                </div>
                <div>
                  <strong>Chrome Web Store ID:</strong>{" "}
                  <code>aedglnfjjccpifohekdeoogffomjcikm</code> (Version{" "}
                  <code>0.8.4</code>, Package Size <code>1.19MiB</code>, 100,000
                  users, 4.53★ across 204 ratings)
                </div>
                <div>
                  <strong>Injected Content Scripts:</strong>{" "}
                  <code>content-scripts/canvas-layout-preload.js</code> at{" "}
                  <code>document_start</code> on <code>*.instructure.com</code>{" "}
                  • <code>content-scripts/canvas.js</code>,{" "}
                  <code>content-scripts/lms-track.js</code>, and{" "}
                  <code>iframe-sidepanel.js</code> across{" "}
                  <code>instructure.com</code>, <code>blackboard.com</code>,{" "}
                  <code>brightspace.com</code>, and <code>gradescope.com</code>
                </div>
                <div>
                  <strong>Exposed Web Accessible Resources:</strong>{" "}
                  <code>content-scripts/canvas.css</code> and{" "}
                  <code>sidepanel.html</code> exposed across{" "}
                  <code>&lt;all_urls&gt;</code>
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
                <span>When Solvely Makes Sense</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Use Solvely If...
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You want to generate offline Mock Exams, Cheat Sheets, and
                    lecture notes inside the <code className="font-mono text-xs">solvely.ai</code>{" "}
                    web dashboard before exam week.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You are doing unmonitored homework where an injected
                    sidepanel and layout preload scripts don&apos;t matter.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Avoid on live Canvas or Blackboard quizzes:</strong>{" "}
                    <code className="font-mono text-xs">
                      canvas-layout-preload.js
                    </code>
                    , exposed <code className="font-mono text-xs">sidepanel.html</code>,
                    and sidepanel clicks trigger detection and blur logs.
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
                    You want <strong>3-model consensus accuracy (99.2%)</strong>{" "}
                    delivered inside a <strong>Closed Shadow DOM HUD</strong>{" "}
                    with zero exposed manifest files.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You need <strong>8-layer Focus Shielding</strong> so Canvas
                    SpeedGrader never records a tab departure.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want <strong>50 free solves</strong> upfront and{" "}
                    <strong>$99/yr ($8.25/mo)</strong> or{" "}
                    <strong>$199 Lifetime</strong> instead of $155.88/year.
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
              Frequently Asked Questions: Solvely vs ExamGhost
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Direct answers on SolvelyAI v0.8.4&apos;s manifest scripts,
              sidepanel focus logs, and daily solve caps.
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
          <div className="rounded-3xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 border border-amber-200/80 p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-200 text-amber-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Multi-Model Accuracy Without the Sidepanel Leak</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                  Get 50 Free Solves—Zero Layout Preload Scripts, Zero Blur
                  Flags.
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                  Experience 3-model consensus voting inside an undetectable
                  Closed Shadow DOM HUD with no credit card required.
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

            <div className="mt-8 pt-6 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
              <span className="font-semibold text-[#111111]">
                Related 2026 Extension Audits:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link prefetch={false}
                  href="/studyx-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  StudyX vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/studybotpro-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  Gauth AI vs ExamGhost
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
