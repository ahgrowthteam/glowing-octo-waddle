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
  EyeOff,
  CreditCard,
  ChevronDown,
  FileCode2,
  Cpu,
  Code2,
  Star,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Mindko (College Tools) vs ExamGhost (2026) — Stealth Audit",
    },
    description: "2026 teardown of Mindko (College Tools v3.0.5, 3.17★) vs ExamGhost. Replace 24 injected scripts and SidePanel blur logs with 0.3s stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/mindko-vs-examghost",
    },
    openGraph: {
        title: "Mindko (College Tools) vs ExamGhost (2026) — Stealth Audit",
        description: "2026 teardown of Mindko (College Tools v3.0.5, 3.17★) vs ExamGhost. Replace 24 injected scripts and SidePanel blur logs with 0.3s stealth & 50 Free Solves.",
        url: "https://examghost.com/mindko-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Mindko (College Tools) vs ExamGhost (2026) — Stealth Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mindko (College Tools) vs ExamGhost (2026) — Stealth Audit",
        description: "2026 teardown of Mindko (College Tools v3.0.5, 3.17★) vs ExamGhost. Replace 24 injected scripts and SidePanel blur logs with 0.3s stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const faqs = [
  {
    q: "What is Mindko (formerly College Tools) and why does it have a 3.17★ Chrome Web Store rating?",
    a: "Mindko (mindko.com, formerly collegetools.io) publishes 'Homework Solver by Mindko (formerly College Tools)' on the Chrome Web Store (ID: iiikmhonbbmbdjfokdmmncdohjionkmf, v3.0.5, 3.27MiB, 10,000 users). While its marketing website displays a 4.8★ badge, its verified Chrome Web Store rating is 3.17★ across 211 reviews due to recurring $19.99/mo LemonSqueezy subscription charges, broken LMS question buttons, and Canvas quiz detection.",
  },
  {
    q: "Does Mindko's 'Camouflage Mode' actually hide the extension from Canvas SpeedGrader?",
    a: "No. Mindko's 'Camouflage Mode' is purely visual CSS styling for its injected answer box. Under the hood, Mindko v3.0.5 injects 24 JavaScript files (including legacy jquery-3.1.1.min.js and lottie.min.js) plus content-styles.css across all_frames: true, exposes web_accessible_resources to <all_urls>, and fails to block window.blur when you click its in-page question button or open its Alt+Shift+2 AI SidePanel.",
  },
  {
    q: "Why does Mindko v3.0.5 hardcode 29 US banks in its manifest exclude_matches?",
    a: "Because Mindko requests broad 'cookies', 'tabs', and '<all_urls>' permissions and injects 24 scripts (including jQuery 3.1.1 and DOM text selectors) into every frame of every website you visit, the developer had to hardcode 29 banking domains (Chase, Bank of America, Wells Fargo, PayPal, Mercury, etc.) into exclude_matches to prevent the extension from interfering with financial portals.",
  },
  {
    q: "How does Mindko's Alt+Shift+1 Screenshot tool compare to ExamGhost's Snap-It OCR?",
    a: "Mindko's Alt+Shift+1 screenshot script (modules/extensions/screenshot.8zldnknb.js) injects selection elements directly into the host DOM and shifts focus to its sidepanel (pages/standalone/side-panel.html), logging a blur event in Canvas. ExamGhost's Snap-It (⌘+Shift+S) runs inside an isolated Closed Shadow DOM v1 sandbox with Focus Shield active, solving complex LaTeX math, organic chemistry structures, and economics graphs with zero blur flags.",
  },
  {
    q: "How does Mindko pricing compare to ExamGhost in 2026?",
    a: "Mindko charges recurring subscriptions via LemonSqueezy (~$19.99/month or $239.88/year, totaling $959.52 across a 4-year degree). ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), followed by transparent tiers: $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 One-Time Lifetime.",
  },
];

export default function MindkoVsExamGhostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-02-14",
                "dateModified": "2026-03-06",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/mindko-vs-examghost/#webpage",
        url: "https://examghost.com/mindko-vs-examghost",
        name: "Mindko (College Tools) vs ExamGhost (2026): 3.17★ 'Camouflage Mode' vs True Shadow DOM Stealth",
        description:
          "Technical comparison of Homework Solver by Mindko (formerly College Tools, v3.0.5) vs ExamGhost covering Camouflage Mode CSS, 24 injected jQuery scripts, 29 bank exclusions, Canvas blur protection, and pricing.",
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
            name: "Mindko vs ExamGhost",
            item: "https://examghost.com/mindko-vs-examghost",
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
              Mindko (formerly College Tools) vs ExamGhost
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-900 text-xs font-semibold">
                <Code2 className="w-3.5 h-3.5 text-teal-700" />
                <span>
                  2026 Audit: Mindko / College Tools (v3.0.5 · 3.17★) vs
                  ExamGhost
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#111111]">
                Mindko&apos;s{" "}
                <span className="underline decoration-teal-500/40 decoration-wavy underline-offset-4">
                  &ldquo;Camouflage Mode&rdquo;
                </span>{" "}
                Is Just CSS Over 24 Injected Scripts.
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-600 leading-relaxed">
                <strong>Homework Solver by Mindko</strong> (
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  mindko.com
                </code>
                , formerly <strong>College Tools</strong> /{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  collegetools.io
                </code>
                ) rebranded its name, but kept the same{" "}
                <strong>3.17★ Chrome Web Store extension (211 reviews)</strong>.
                While it advertises &ldquo;Camouflage Mode,&rdquo; its v3.0.5
                manifest injects{" "}
                <strong>24 JavaScript files (including jQuery 3.1.1)</strong>{" "}
                into every frame on the web and fires{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  window.blur
                </code>{" "}
                whenever you click its question button or open its{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  Alt+Shift+2
                </code>{" "}
                SidePanel.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Verified Rating
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    3.17★ (211 Reviews) vs 4.9★ Verified Stealth
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    DOM Injection
                  </div>
                  <div className="text-sm font-bold text-rose-600">
                    24 JS Scripts + jQuery vs Closed Shadow DOM
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Permissions Scope
                  </div>
                  <div className="text-sm font-bold text-emerald-700">
                    cookies + 29 Bank Exclusions vs Zero Cookies
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

            {/* Right Column: Camouflage Mode vs v3.0.5 Manifest Reality Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#141418] text-white rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
                <div className="px-5 py-3.5 bg-[#1c1c22] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Mindko v3.0.5 Manifest Audit
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    3.17★ (211 Ratings)
                  </span>
                </div>

                <div className="p-5 space-y-3.5">
                  {/* 1. Camouflage Mode Illusion */}
                  <div className="rounded-xl bg-[#1b1b22] border border-rose-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                        1. &ldquo;Camouflage Mode&rdquo; vs Host DOM Reality
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                        all_frames: true
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Mindko&apos;s &ldquo;Camouflage Mode&rdquo; only changes
                      popup CSS colors. Meanwhile, v3.0.5 injects{" "}
                      <span className="text-white font-semibold">
                        24 JS files
                      </span>{" "}
                      (including{" "}
                      <code className="text-rose-300 font-mono">
                        jquery-3.1.1.min.js
                      </code>{" "}
                      &amp;{" "}
                      <code className="text-rose-300 font-mono">
                        answer-box-init.or414fgb.js
                      </code>
                      ), exposes{" "}
                      <code className="text-rose-300 font-mono">
                        content-styles.css
                      </code>{" "}
                      to{" "}
                      <code className="text-rose-300 font-mono">
                        &lt;all_urls&gt;
                      </code>
                      , and fires{" "}
                      <code className="text-rose-300 font-mono">
                        window.blur
                      </code>{" "}
                      when opening{" "}
                      <code className="text-rose-300 font-mono">
                        side-panel.html
                      </code>
                      .
                    </p>
                  </div>

                  {/* 2. The 29 US Banks Exclusion Anomaly */}
                  <div className="rounded-xl bg-[#1b1b22] border border-amber-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        2. Why 29 US Banks Are in exclude_matches
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        cookies + &lt;all_urls&gt;
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Because Mindko requests{" "}
                      <code className="text-amber-300 font-mono">cookies</code>,{" "}
                      <code className="text-amber-300 font-mono">tabs</code>,
                      and{" "}
                      <code className="text-amber-300 font-mono">
                        &lt;all_urls&gt;
                      </code>{" "}
                      and runs DOM scrapers on every page, the developer had to
                      hardcode <strong>29 banking domains</strong> (Chase, BofA,
                      Wells Fargo, PayPal, Mercury) into{" "}
                      <code className="text-amber-300 font-mono">
                        exclude_matches
                      </code>
                      .
                    </p>
                  </div>

                  {/* 3. ExamGhost Contrast */}
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>How ExamGhost Delivers Real Stealth</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Zero jQuery injection, zero public{" "}
                      <code className="text-emerald-300 font-mono">
                        web_accessible_resources
                      </code>
                      , zero{" "}
                      <code className="text-emerald-300 font-mono">
                        cookies
                      </code>{" "}
                      permission, and an 8-layer Focus Shield inside a{" "}
                      <span className="text-white font-semibold">
                        Closed Shadow DOM
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
              Why Rebranding College Tools to Mindko Didn&apos;t Fix Its 3
              Biggest Flaws
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Click any tab below to inspect Mindko v3.0.5&apos;s{" "}
              <code className="font-mono text-xs">manifest.json</code>{" "}
              architecture, permissions scope, and LemonSqueezy subscription
              costs.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            {/* Radio Inputs */}
            <input
              type="radio"
              name="mindko-audit-tabs"
              id="tab-mindko-camouflage"
              className="sr-only peer/camouflage"
              defaultChecked
            />
            <input
              type="radio"
              name="mindko-audit-tabs"
              id="tab-mindko-banks"
              className="sr-only peer/banks"
            />
            <input
              type="radio"
              name="mindko-audit-tabs"
              id="tab-mindko-billing"
              className="sr-only peer/billing"
            />

            {/* Tab Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-neutral-200 bg-neutral-50/80">
              <label
                htmlFor="tab-mindko-camouflage"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/camouflage:bg-white peer-checked/camouflage:text-[#111111] peer-checked/camouflage:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <EyeOff className="w-4 h-4 text-teal-600 shrink-0" />
                <span>1. &ldquo;Camouflage Mode&rdquo; vs 24 Scripts</span>
              </label>
              <label
                htmlFor="tab-mindko-banks"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/banks:bg-white peer-checked/banks:text-[#111111] peer-checked/banks:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>2. Cookies &amp; 29 Bank Exclusions</span>
              </label>
              <label
                htmlFor="tab-mindko-billing"
                className="cursor-pointer px-4 py-4 text-left sm:text-center transition-all peer-checked/billing:bg-white peer-checked/billing:text-[#111111] peer-checked/billing:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <Star className="w-4 h-4 text-rose-600 shrink-0" />
                <span>3. 3.17★ Rating &amp; $19.99/mo Billing</span>
              </label>
            </div>

            {/* Panel 1: Camouflage Mode vs 24 Scripts */}
            <div className="hidden peer-checked/camouflage:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-bold">
                  DOM &amp; Focus Telemetry Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Changing Button Colors Doesn&apos;t Hide 24 Injected Scripts or{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    Alt+Shift+2
                  </code>{" "}
                  Blur Events
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Mindko claims its <strong>&ldquo;Camouflage Mode&rdquo;</strong>{" "}
                  prevents detection during online quizzes. In reality,
                  Camouflage Mode only restyles the visual theme of its injected
                  answer box. Meanwhile, Mindko v3.0.5 injects{" "}
                  <strong>24 content scripts</strong>—including legacy{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    jquery-3.1.1.min.js
                  </code>
                  ,{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    lottie.min.js
                  </code>
                  , and{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    answer-box-init.or414fgb.js
                  </code>
                  —into every frame of your LMS page.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Worse, clicking Mindko&apos;s in-page question button or
                  pressing{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    Alt+Shift+2
                  </code>{" "}
                  to open its{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    side-panel.html
                  </code>{" "}
                  transfers active focus away from the quiz tab, logging a{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    window.blur
                  </code>{" "}
                  departure in Canvas SpeedGrader.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-4 font-mono text-xs">
                <div className="text-neutral-400 border-b border-neutral-800 pb-2 flex items-center justify-between">
                  <span>SpeedGrader &amp; DOM Inspection</span>
                  <span className="text-emerald-400">Live Telemetry</span>
                </div>
                <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/30 space-y-1.5">
                  <div className="text-rose-300 font-bold">
                    Mindko v3.0.5 (&ldquo;Camouflage Mode&rdquo;)
                  </div>
                  <div className="text-neutral-300">
                    • Injects 24 JS files + jquery-3.1.1.min.js (all_frames)
                  </div>
                  <div className="text-neutral-300">
                    • Exposes content-styles.css in web_accessible_resources
                  </div>
                  <div className="text-rose-400">
                    • Alt+Shift+2 SidePanel fires Canvas window.blur flag
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                  <div className="text-emerald-300 font-bold">
                    ExamGhost Stealth Engine
                  </div>
                  <div className="text-neutral-300">
                    • Isolated Closed Shadow DOM v1 (0 host DOM mutations)
                  </div>
                  <div className="text-neutral-300">
                    • 0 public web_accessible_resources exposed
                  </div>
                  <div className="text-emerald-400">
                    • 8-layer Focus Shield blocks blur &amp; visibilitychange
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Cookies & 29 Bank Exclusions */}
            <div className="hidden peer-checked/banks:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                  Permissions &amp; Security Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Does a Homework Extension Need{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    cookies
                  </code>{" "}
                  and 29 Hardcoded Bank Exclusions?
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Inspecting Mindko v3.0.5&apos;s{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    manifest.json
                  </code>{" "}
                  reveals broad permissions:{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    &quot;cookies&quot;
                  </code>
                  ,{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    &quot;tabs&quot;
                  </code>
                  , and{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    &quot;&lt;all_urls&gt;&quot;
                  </code>
                  . Because its 24 content scripts automatically run inside every
                  iframe on every site you visit, it began colliding with
                  sensitive financial websites.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Instead of scoping the extension properly, the developer
                  hardcoded <strong>29 US banking domains</strong> (Chase, Bank
                  of America, Wells Fargo, PayPal, Mercury, Citi, Capital One,
                  etc.) into{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    exclude_matches
                  </code>
                  . ExamGhost never requests{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    cookies
                  </code>{" "}
                  permission and never injects legacy libraries into your
                  browsing sessions.
                </p>
              </div>

              <div className="bg-[#faf9f6] rounded-xl p-5 border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Manifest Permission &amp; Scope Comparison
                </div>
                <div className="p-4 rounded-xl bg-white border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      Mindko v3.0.5 Manifest
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      Over-Privileged Scope
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Requests <code className="font-mono">cookies</code> +{" "}
                    <code className="font-mono">tabs</code> +{" "}
                    <code className="font-mono">&lt;all_urls&gt;</code>; injects
                    24 scripts across all frames and hardcodes 29 bank URLs in{" "}
                    <code className="font-mono">exclude_matches</code>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      ExamGhost Minimal-Scope Architecture
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-600 text-white">
                      Zero Cookie Access
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    Zero <code className="font-mono">cookies</code> permission,
                    zero global jQuery pollution, and a hardware Panic Switch (
                    <code className="font-mono">⌘+Shift+U</code>) that unmounts
                    everything in &lt;1ms.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 3: 3.17★ Rating & $19.99/mo Billing */}
            <div className="hidden peer-checked/billing:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold">
                  Reputation &amp; Pricing Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  4.8★ Marketing Badge vs 3.17★ Chrome Web Store Reality (211
                  Reviews)
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  While{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    mindko.com
                  </code>{" "}
                  displays a 4.8★ rating badge, its verified Chrome Web Store
                  listing sits at <strong>3.17★ across 211 reviews</strong>.
                  Students repeatedly report that the 16 hardcoded LMS
                  integration scripts break whenever Canvas or McGraw-Hill
                  updates its page layout—while LemonSqueezy continues billing{" "}
                  <strong>~$19.99/month ($239.88/year)</strong>.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  <strong>ExamGhost</strong> lets you test its 3-model consensus
                  engine on <strong>50 free solves</strong> with no credit card
                  required, followed by transparent{" "}
                  <strong>$19/mo</strong>,{" "}
                  <strong>$99/yr ($8.25/mo)</strong>, or{" "}
                  <strong>$199 Lifetime</strong> access.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-3 text-xs">
                <div className="text-neutral-400 font-mono uppercase tracking-wider border-b border-neutral-800 pb-2">
                  Rating &amp; 4-Year Cost Comparison
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-800">
                  <div>
                    <div className="font-bold text-white">
                      Mindko (formerly College Tools)
                    </div>
                    <div className="text-neutral-400">
                      3.17★ (211 reviews) • ~$19.99/mo via LemonSqueezy
                    </div>
                  </div>
                  <span className="font-mono font-bold text-rose-400 text-sm">
                    $239.88 / yr
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
                      4.9★ Stealth • $8.25/mo ($99/yr) • $199 Lifetime
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
              Mindko v3.0.5 (College Tools) vs ExamGhost: 2026 Matrix
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Every technical, DOM stealth, permission, and pricing difference
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
                    <th className="py-4 px-5 font-semibold text-teal-300">
                      Mindko v3.0.5 (College Tools)
                    </th>
                    <th className="py-4 px-5 font-semibold text-emerald-400">
                      ExamGhost (2026 Stealth)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Verified Chrome Store Rating
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      3.17★ across 211 reviews (claims 4.8★ on website)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      4.9★ Student-Verified Stealth Engine
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      DOM &amp; Script Architecture
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Injects 24 JS scripts +{" "}
                      <code className="font-mono text-xs">
                        jquery-3.1.1.min.js
                      </code>{" "}
                      across <code className="font-mono text-xs">all_frames</code>
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Isolated Closed Shadow DOM v1 (0 host DOM mutations)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Stealth / &ldquo;Camouflage&rdquo; Mode
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      CSS color restyling only;{" "}
                      <code className="font-mono text-xs">Alt+Shift+2</code>{" "}
                      SidePanel leaks <code className="font-mono text-xs">window.blur</code>
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      8-Layer Focus Shield blocks{" "}
                      <code className="font-mono text-xs">blur</code> &amp;{" "}
                      <code className="font-mono text-xs">visibilitychange</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Web Accessible Resources
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Exposes{" "}
                      <code className="font-mono text-xs">
                        content-styles.css
                      </code>{" "}
                      &amp;{" "}
                      <code className="font-mono text-xs">animations/*</code> to{" "}
                      <code className="font-mono text-xs">&lt;all_urls&gt;</code>
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Zero public assets exposed to host page inspection
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Browser Permissions Scope
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Requests <code className="font-mono text-xs">cookies</code>{" "}
                      + <code className="font-mono text-xs">&lt;all_urls&gt;</code>{" "}
                      (29 bank exclusions)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Minimal LMS scope • Zero{" "}
                      <code className="font-mono text-xs">cookies</code> access
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      AI Reasoning Engine
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Single-model cloud queue (~4.8s latency)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      3-Model Consensus (GPT-5.4 + Claude 4.6 + Gemini 3.1 Pro)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Free Trial &amp; Pricing
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      ~$19.99/mo via LemonSqueezy ($239.88/yr)
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
                    Technical Chrome Web Store Manifest &amp; Script Audit
                    (Mindko / College Tools v3.0.5)
                  </h3>
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-2 text-xs text-neutral-600 space-y-2 font-mono bg-white border-t border-neutral-200/70">
                <div>
                  <strong>Extension Name:</strong> Homework Solver by Mindko
                  (formerly College Tools)
                </div>
                <div>
                  <strong>Chrome Web Store ID:</strong>{" "}
                  <code>iiikmhonbbmbdjfokdmmncdohjionkmf</code> (Version{" "}
                  <code>3.0.5</code>, Package Size <code>3.27MiB</code>, ~10,000
                  users, 3.17★ across 211 reviews)
                </div>
                <div>
                  <strong>Domains &amp; Checkout Processor:</strong>{" "}
                  <code>mindko.com</code> (formerly{" "}
                  <code>collegetools.io</code>) • Billed via LemonSqueezy
                  (~$19.99/mo) • Support: <code>support@mindko.com</code>
                </div>
                <div>
                  <strong>Injected Content Scripts (24 JS Files):</strong>{" "}
                  Includes <code>jquery-3.1.1.min.js</code>,{" "}
                  <code>lottie.min.js</code>,{" "}
                  <code>answer-box-init.or414fgb.js</code>,{" "}
                  <code>modules/extensions/screenshot.8zldnknb.js</code>, plus 16
                  LMS integration scripts across <code>all_frames: true</code>
                </div>
                <div>
                  <strong>Hotkeys, Resources &amp; Exclusions:</strong>{" "}
                  <code>Alt+Shift+1</code> (Screenshot),{" "}
                  <code>Alt+Shift+2</code> (
                  <code>pages/standalone/side-panel.html</code>) • Exposes{" "}
                  <code>content-styles.css</code> &amp;{" "}
                  <code>animations/*</code> in{" "}
                  <code>web_accessible_resources</code> • Hardcodes 29 US banking
                  domains in <code>exclude_matches</code>
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
                <span>When Mindko Makes Sense</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Use Mindko (College Tools) If...
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You already have an active College Tools / Mindko mobile
                    subscription for casual, unmonitored homework review.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You don&apos;t mind a sidepanel or injected DOM buttons on
                    open-book practice assignments.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Avoid on timed Canvas or Blackboard exams:</strong>{" "}
                    &ldquo;Camouflage Mode&rdquo; does not block{" "}
                    <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded font-mono">
                      window.blur
                    </code>{" "}
                    or hide its 24 injected scripts.
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
                    You want <strong>true Closed Shadow DOM isolation</strong>{" "}
                    and 8-layer Focus Shielding instead of cosmetic CSS color
                    swaps.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You refuse to grant an extension{" "}
                    <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded font-mono">
                      cookies
                    </code>{" "}
                    access across every website you visit.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want <strong>50 free solves</strong> upfront and{" "}
                    <strong>99.2% 3-model consensus accuracy</strong> for{" "}
                    <strong>$8.25/mo ($99/yr)</strong> or{" "}
                    <strong>$199 Lifetime</strong>.
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
              Frequently Asked Questions: Mindko vs ExamGhost
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Direct answers on Mindko v3.0.5 (formerly College Tools),
              Camouflage Mode, and Canvas SpeedGrader logs.
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
          <div className="rounded-3xl bg-gradient-to-br from-teal-50 via-white to-emerald-50 border border-teal-200/80 p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-200 text-teal-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>Upgrade from 3.17★ CSS Camouflage to Real Stealth</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                  Test ExamGhost with 50 Free Solves—Zero jQuery Injection, Zero
                  Blur Logs.
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                  See why thousands of former College Tools &amp; Mindko users
                  switched to ExamGhost&apos;s Closed Shadow DOM and 3-model AI
                  consensus.
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

            <div className="mt-8 pt-6 border-t border-teal-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
              <span className="font-semibold text-[#111111]">
                Related 2026 Extension Audits:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link prefetch={false}
                  href="/classology-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  Classology AI vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/quizard-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  Quizard AI vs ExamGhost
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
