import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Zap,
  ChevronDown,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Database,
  FileWarning,
  EyeOff,
  Code2,
  CreditCard,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: {
        absolute: "Quizplus vs ExamGhost (2026) — Static Banks vs 0.3s AI HUD",
    },
    description: "Quizplus delisted its Chrome extension and charges $24.99/mo for static test banks. ExamGhost solves live randomized LMS questions in 0.3s (50 Free Solves).",
    alternates: {
        canonical: "https://examghost.com/quizplus-vs-examghost",
    },
    openGraph: {
        title: "Quizplus vs ExamGhost (2026) — Static Banks vs 0.3s AI HUD",
        description: "Quizplus delisted its Chrome extension and charges $24.99/mo for static test banks. ExamGhost solves live randomized LMS questions in 0.3s (50 Free Solves).",
        url: "https://examghost.com/quizplus-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Quizplus vs ExamGhost (2026) — Static Banks vs 0.3s AI HUD",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Quizplus vs ExamGhost (2026) — Static Banks vs 0.3s AI HUD",
        description: "Quizplus delisted its Chrome extension and charges $24.99/mo for static test banks. ExamGhost solves live randomized LMS questions in 0.3s (50 Free Solves).",
        images: ["/og-image.jpg"],
    },
};

export default function QuizplusVsExamghostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-02-22",
                "dateModified": "2026-03-14",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/quizplus-vs-examghost#webpage",
        url: "https://examghost.com/quizplus-vs-examghost",
        name: "Quizplus vs ExamGhost (2026 Audit) | Delisted Chrome Extension & Static Test Banks vs 0.3s Stealth AI",
        description:
          "Independent 2026 technical audit comparing Quizplus (quizplus.com) and its delisted Chrome extension against ExamGhost's closed Shadow DOM HUD and Focus Shield.",
        breadcrumb: {
          "@id": "https://examghost.com/quizplus-vs-examghost#breadcrumb",
        },
        about: [
          {
            "@type": "SoftwareApplication",
            name: "ExamGhost",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Chrome, Edge, Brave, macOS, Windows",
            offers: [
              {
                "@type": "Offer",
                name: "Free Trial (50 Question Solves)",
                price: "0.00",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Monthly Pass",
                price: "19.00",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Academic Year Pass",
                price: "99.00",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Lifetime Degree Pass",
                price: "199.00",
                priceCurrency: "USD",
              },
            ],
          },
          {
            "@type": "SoftwareApplication",
            name: "Quizplus",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web Application (quizplus.com)",
            offers: {
              "@type": "Offer",
              price: "24.99",
              priceCurrency: "USD",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://examghost.com/quizplus-vs-examghost#breadcrumb",
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
            name: "Quizplus vs ExamGhost",
            item: "https://examghost.com/quizplus-vs-examghost",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://examghost.com/quizplus-vs-examghost#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What happened to the Quizplus Chrome Extension?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "During our 2026 Chrome Web Store audit, navigating to the official Quizplus extension URL redirects to an empty-title error page—confirming the extension has been delisted from the store. Students using Quizplus are forced to manually copy-paste questions into quizplus.com in a separate browser tab.",
            },
          },
          {
            "@type": "Question",
            name: "Why does Quizplus fail when professors use algorithmic or randomized numbers in Canvas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Quizplus is a pre-indexed textbook test-bank repository of around 20M+ static Q&A records and roughly 300,000 preset quizzes. It matches questions by text similarity against publisher test banks. If a professor changes a single numeric parameter in McGraw Hill Connect, WebAssign, or Canvas New Quizzes, Quizplus either returns no match or shows the answer for a different number set. ExamGhost uses live multimodal AI and Mathpix OCR to compute the exact answer for your specific variables in 0.3 seconds.",
            },
          },
          {
            "@type": "Question",
            name: "Can Canvas SpeedGrader detect when I switch tabs to search Quizplus.com?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Because the Quizplus Chrome extension is delisted and lacks a Focus Shield, searching quizplus.com requires leaving your active Canvas quiz tab. Every tab switch fires window.blur, document.visibilitychange, and pagehide events that Canvas logs as 'Stopped viewing the Canvas quiz-taking page' with exact timestamps. ExamGhost intercepts and suppresses these events at the browser capture phase while rendering answers inside a closed Shadow DOM.",
            },
          },
          {
            "@type": "Question",
            name: "How does Quizplus pricing compare to ExamGhost in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Quizplus locks full test-bank answers behind a recurring subscription ranging from $20 to $24.99/month (or ~$55.99/quarter) after a short 3-to-7 day trial, costing up to $299/year. ExamGhost gives you 50 Free Question Solves with no credit card required, plus transparent flat options: $19/month, $99/year ($8.25/mo across Fall, Spring, and Summer), or a $199 one-time Lifetime Degree Pass.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111] selection:bg-emerald-900 selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="pt-28 pb-24">
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
              Compare Extensions
            </Link>
            <span>/</span>
            <span className="text-emerald-900 font-semibold">
              Quizplus vs ExamGhost
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: High-Converting SaaS Copy & Hero CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-mono uppercase tracking-widest mb-5">
                <FileWarning className="w-3.5 h-3.5 text-amber-800" />
                <span>2026 Audit • Delisted Extension &amp; Static Test Banks</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-5">
                Quizplus&apos;s Chrome Extension Is{" "}
                <span className="text-rose-800 underline decoration-rose-400/70 decoration-wavy underline-offset-4">
                  Delisted
                </span>{" "}
                &amp; Static Test Banks Fail When Numbers Change.
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
                <strong>Quizplus</strong> (
                <code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">
                  quizplus.com
                </code>
                ) built its name on ~20 million static publisher test-bank
                questions. In 2026, two things break that workflow on live exams:
                first, Quizplus&apos;s official Chrome extension has been{" "}
                <strong>delisted from the Chrome Web Store</strong>, forcing you
                to switch tabs and trigger Canvas{" "}
                <code className="font-mono text-sm bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                  window.blur
                </code>{" "}
                logs; second, whenever a professor randomizes a single STEM
                variable (e.g., <code className="font-mono text-sm bg-neutral-200/80 px-1 py-0.5 rounded">r = 4 m</code>{" "}
                → <code className="font-mono text-sm bg-neutral-200/80 px-1 py-0.5 rounded">r = 7.5 m</code>),
                Quizplus returns the wrong static key while charging up to{" "}
                <strong>$24.99/month</strong>. Here is why students switch to{" "}
                <strong>ExamGhost AI</strong>.
              </p>

              {/* 3 Fast Scannable Stat Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Extension Status
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-rose-700 line-through mr-1.5">Delisted</span>
                    <span className="text-emerald-800">Active MV3 HUD</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    In-tab closed Shadow DOM
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Randomized Math
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-emerald-800">0.3s Live Compute</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    vs Static textbook lookup
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Pricing &amp; Trial
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-rose-700 line-through mr-1.5">$24.99/mo</span>
                    <span className="text-emerald-800">$99/yr + 50 Free</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    No blurred answer traps
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
                  Try Live 0.3s Stealth Demo
                </Link>
                <a
                  href="#quizplus-audit"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold hover:underline px-2 py-2"
                >
                  See Randomized Variable Test ↓
                </a>
              </div>
            </div>

            {/* Right Column: Bespoke Static Bank vs Algorithmic Variable Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-[#111111] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#111111]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 ml-1">
                      Randomized Canvas Formula Question
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                    r = 7.5 m
                  </span>
                </div>

                {/* Top Simulator Card: Quizplus Static Lookup */}
                <div className="rounded-2xl bg-rose-50/80 border border-rose-200 p-4 mb-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-rose-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                      Quizplus.com (Static Test Bank)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-200/80 text-rose-950">
                      Extension Delisted
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        1. Switch tab to search quizplus.com:
                      </span>
                      <span className="text-rose-800 font-bold">
                        window.blur Logged ⚠️
                      </span>
                    </div>
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        2. Matches 2019 bank (r = 4.0 m):
                      </span>
                      <span className="text-rose-800 font-bold">
                        Wrong Key (50.26 m²)
                      </span>
                    </div>
                    <div className="bg-rose-950 text-rose-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>Paywall Gate:</span>
                      <span className="text-rose-300 font-bold">
                        Blurred • $24.99/mo ($55.99/qtr)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Simulator Card: ExamGhost AI */}
                <div className="rounded-2xl bg-emerald-50/90 border-2 border-emerald-700 p-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-950 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      ExamGhost AI v4.2 (Live Neural OCR)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-200 text-emerald-950">
                      0.3s In-Tab HUD
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        1. Solves inside active Canvas tab:
                      </span>
                      <span className="text-emerald-800 font-bold">
                        0 Tab Leaves ✓
                      </span>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        2. Computes live r = 7.5 m (πr²):
                      </span>
                      <span className="text-emerald-800 font-bold">
                        Exact: 176.71 m² ✓
                      </span>
                    </div>
                    <div className="bg-emerald-950 text-emerald-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>Free Trial &amp; Pass:</span>
                      <span className="text-emerald-300 font-bold">
                        50 Free Solves • $99/yr ($8.25/mo)
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
          id="quizplus-audit"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              01 // Interactive Architecture &amp; Test-Bank Audit
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Click Any Tab to See Why Static Test Banks Lose on Modern Exams
            </h2>
            <p className="text-neutral-700 mt-2 max-w-3xl text-sm sm:text-base">
              We audited{" "}
              <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                quizplus.com
              </code>
              , its delisted Chrome Web Store endpoint, and its subscription
              paywall. Select a tab below to compare how it handles 2026
              university exams.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111111] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#111111]">
            {/* Pure CSS Radio Inputs */}
            <input
              type="radio"
              name="qp-tabs"
              id="tab-qp-bank"
              className="sr-only peer/qp-bank"
              defaultChecked
            />
            <input
              type="radio"
              name="qp-tabs"
              id="tab-qp-delisted"
              className="sr-only peer/qp-delisted"
            />
            <input
              type="radio"
              name="qp-tabs"
              id="tab-qp-pricing"
              className="sr-only peer/qp-pricing"
            />

            {/* Tab Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-6 mb-8 border-b border-neutral-200">
              <label
                htmlFor="tab-qp-bank"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/qp-bank:border-[#111111] peer-checked/qp-bank:bg-emerald-950 peer-checked/qp-bank:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <Database className="w-4 h-4" />
                  <span>Tab 01 • Static vs Live AI</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  Why 20M Static Banks Fail on Randomized Math
                </div>
              </label>

              <label
                htmlFor="tab-qp-delisted"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/qp-delisted:border-[#111111] peer-checked/qp-delisted:bg-emerald-950 peer-checked/qp-delisted:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <EyeOff className="w-4 h-4" />
                  <span>Tab 02 • Delisted Extension</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  Dead Store Link &amp; Tab-Switch Blur Logs
                </div>
              </label>

              <label
                htmlFor="tab-qp-pricing"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/qp-pricing:border-[#111111] peer-checked/qp-pricing:bg-emerald-950 peer-checked/qp-pricing:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <CreditCard className="w-4 h-4" />
                  <span>Tab 03 • Blurred Paywall</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  $24.99/mo ($55.99/qtr) vs $99/yr + 50 Free
                </div>
              </label>
            </div>

            {/* Panel 1: Static 20M Bank vs Live AI */}
            <div className="hidden peer-checked/qp-bank:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase">
                  Static Indexing vs Real-Time Reasoning
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Why Static Publisher Test Banks Break When Professors Randomize Variables
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Quizplus indexes roughly <strong>20 million static Q&amp;A items</strong>{" "}
                  and <strong>300,000+ preset quizzes</strong> pulled from legacy
                  Cengage, Pearson, and McGraw Hill textbook editions. When you
                  search a question on{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                    quizplus.com
                  </code>
                  , it performs a text-similarity lookup against those static
                  pages.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  In 2026, university courses on Canvas New Quizzes, WebAssign,
                  ALEKS, and Pearson MyLab use{" "}
                  <strong>algorithmic question generators</strong> where every
                  student gets different numbers, negated stems, or embedded
                  diagrams. If your textbook bank solved for{" "}
                  <code className="font-mono text-xs">r = 4 m</code>, Quizplus
                  gives you the wrong answer for{" "}
                  <code className="font-mono text-xs">r = 7.5 m</code>.{" "}
                  <strong>ExamGhost AI</strong> reads your exact on-screen
                  variables and diagrams via <strong>0.3s Mathpix Vision OCR</strong>{" "}
                  and computes the live derivation from scratch.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
                  <div className="text-xs font-mono uppercase font-bold text-rose-900 mb-2">
                    Where Static Test Banks Fail
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-800">
                    <li>• Algorithmic STEM problems with randomized numbers per student</li>
                    <li>• Non-selectable circuit schematics, chemistry rings &amp; graphs</li>
                    <li>• Original professor-written midterms not found in publisher banks</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-800 rounded-2xl p-5">
                  <div className="text-xs font-mono uppercase font-bold text-emerald-950 mb-2">
                    How ExamGhost AI Solves Every Prompt
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-800">
                    <li>• Computes exact answers for your specific live numbers in 0.3s</li>
                    <li>• Crosshair Snap-It Vision OCR reads any locked graph or table</li>
                    <li>• Shows both the final answer and step-by-step verification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Panel 2: Delisted Extension & Tab-Switch Blur Logs */}
            <div className="hidden peer-checked/qp-delisted:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold uppercase">
                  Chrome Web Store &amp; Telemetry Audit
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Quizplus&apos;s Chrome Extension Is Dead—Forcing You to Switch Tabs on Monitored Quizzes
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  When we audited Quizplus&apos;s official Chrome Web Store
                  listing in 2026, the store URL redirected to{" "}
                  <code className="font-mono text-xs bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                    /detail/empty-title/
                  </code>{" "}
                  with an item-removed status code—confirming the extension has
                  been delisted.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Without a working in-tab stealth extension, using Quizplus
                  during a Canvas or Blackboard exam requires highlighting the
                  question text, copying it, and switching to a second browser
                  tab at{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                    quizplus.com
                  </code>
                  . Every single tab switch dispatches{" "}
                  <code className="font-mono text-xs">window.blur</code>,{" "}
                  <code className="font-mono text-xs">visibilitychange</code>,
                  and <code className="font-mono text-xs">pagehide</code> events
                  that Canvas SpeedGrader logs with exact timestamps.{" "}
                  <strong>ExamGhost AI</strong> is an active Manifest V3 stealth
                  extension that solves inside your exam tab within a{" "}
                  <strong>closed Shadow DOM root</strong> while blocking all
                  focus-loss events.
                </p>
              </div>

              <div className="lg:col-span-5 bg-neutral-900 text-white rounded-2xl p-6 font-mono text-xs space-y-4">
                <div className="p-3.5 rounded-xl bg-rose-950/90 border border-rose-800 space-y-1.5">
                  <div className="text-rose-300 font-bold uppercase">
                    Quizplus Chrome Store Status (2026)
                  </div>
                  <div className="text-amber-300">
                    Location: /detail/empty-title/...
                  </div>
                  <div className="text-rose-200">
                    errorHasStatus: true, data: [5] // Delisted
                  </div>
                  <div className="text-rose-200">
                    Result: Forces tab-switching to quizplus.com
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-700 space-y-1.5">
                  <div className="text-emerald-300 font-bold uppercase">
                    ExamGhost Active MV3 Stealth
                  </div>
                  <div className="text-emerald-100">
                    window.addEventListener(&apos;blur&apos;, stopImmediatePropagation, true)
                  </div>
                  <div className="text-emerald-100">
                    host.attachShadow(&#123; mode: &apos;closed&apos; &#125;)
                  </div>
                  <div className="text-emerald-100">
                    Result: 0 Tab Switches • 0 Canvas Blur Logs
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: Blurred Paywall & Pricing */}
            <div className="hidden peer-checked/qp-pricing:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase">
                  Subscription &amp; Trial Comparison
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Stop Paying $24.99/Month ($299/Year) to Unblur Static Textbook Keys
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  When you search a question on{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                    quizplus.com
                  </code>
                  , the correct multiple-choice option and explanation are
                  blurred behind a paywall. Unlocking full test-bank access
                  requires entering a payment method for a short 3-to-7 day trial
                  that auto-renews at{" "}
                  <strong>$20 to $24.99/month</strong> (or{" "}
                  <strong>~$55.99/quarter</strong>)—costing up to{" "}
                  <strong>$299.88 per year</strong>.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  <strong>ExamGhost AI</strong> gives you{" "}
                  <strong>50 Free Question Solves ($0, no credit card required)</strong>{" "}
                  with unblurred answers, full step-by-step math derivations,
                  and active Canvas Focus Shield included. Upgrading to unlimited
                  solves costs just <strong>$19/month</strong>,{" "}
                  <strong>$99/year ($8.25/mo — saving up to $200/yr over Quizplus)</strong>,
                  or <strong>$199 one-time for a Lifetime Degree Pass</strong>{" "}
                  backed by our <strong>14-day 100% money-back guarantee</strong>.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#FAF8F5] border border-neutral-300 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-[#111111]">
                      Quizplus Pricing (2026)
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-rose-100 text-rose-900 font-bold">
                      Blurred Free Preview
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700">
                    <li>• <strong>Free Preview:</strong> Blurs correct answers &amp; explanations</li>
                    <li>• <strong>Trial:</strong> 3–7 day card-gated auto-renewing trial</li>
                    <li>• <strong>Monthly Billing:</strong> $20–$24.99/month (~$299/yr)</li>
                    <li>• <strong>Quarterly Billing:</strong> ~$55.99/quarter (~$224/yr)</li>
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
                    <li>• <strong>Free Trial:</strong> 50 Unblurred Solves + Steps ($0, no card)</li>
                    <li>• <strong>Monthly Pass:</strong> $19/month (100% Unlimited)</li>
                    <li>• <strong>Academic Year:</strong> $99/year ($8.25/mo — save ~$200/yr)</li>
                    <li>• <strong>Lifetime Pass:</strong> $199 one-time • 14-day 100% refund guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-Side Comparison Table + Collapsible Technical Endpoint Audit Drawer */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              02 // Head-to-Head Technical Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Quizplus vs ExamGhost: 2026 Technical Matrix
            </h2>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#111111] overflow-hidden shadow-[6px_6px_0px_0px_#111111]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-neutral-800 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="py-4 px-5 border-r border-neutral-800">
                      Audit Dimension
                    </th>
                    <th className="py-4 px-5 border-r border-neutral-800 text-neutral-300">
                      Why It Matters on Canvas / Blackboard
                    </th>
                    <th className="py-4 px-5 border-r border-neutral-800 text-emerald-300">
                      ExamGhost (2026)
                    </th>
                    <th className="py-4 px-5 text-neutral-300">
                      Quizplus (quizplus.com)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Chrome Web Store Status
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Whether an active in-browser extension exists
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      Active MV3 Stealth Build
                    </td>
                    <td className="py-3.5 px-5 text-rose-800 font-medium">
                      Delisted (/detail/empty-title/)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Primary Solving Engine
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Ability to answer unseen &amp; randomized questions
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      Live Multimodal AI + Mathpix OCR
                    </td>
                    <td className="py-3.5 px-5 text-neutral-700">
                      Static 20M Textbook Test-Bank Index
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Canvas Focus Shield
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Blocks window.blur &amp; visibilitychange logs
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      100% Capture-Phase Suppression
                    </td>
                    <td className="py-3.5 px-5 text-rose-800 font-medium">
                      None (Requires Tab-Switching)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Closed Shadow DOM HUD
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Hides UI nodes from LMS page scanners
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      Yes (attachShadow mode: &apos;closed&apos;)
                    </td>
                    <td className="py-3.5 px-5 text-rose-800 font-medium">
                      No In-Tab Stealth HUD
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Algorithmic STEM Variables
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Handles WebAssign/ALEKS number mutations
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      Computes Exact Live Values in 0.3s
                    </td>
                    <td className="py-3.5 px-5 text-rose-800 font-medium">
                      Fails if Numbers Differ from Textbook
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Snap-It Vision Region OCR
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Solves non-selectable diagrams &amp; embedded PDFs
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      Built-In Crosshair Snipping Tool
                    </td>
                    <td className="py-3.5 px-5 text-rose-800 font-medium">
                      Text-Query Search Only
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Canvas New Quizzes Iframes
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Works inside cross-origin LTI quiz frames
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      Full Cross-Origin Iframe Support
                    </td>
                    <td className="py-3.5 px-5 text-rose-800 font-medium">
                      Manual Copy-Paste Blocked
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Free Trial Allowance
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Risk-free testing before paying
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      50 Free Solves (No Credit Card)
                    </td>
                    <td className="py-3.5 px-5 text-neutral-700">
                      Blurred Answers / Card-Gated Trial
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      2026 Pricing Structure
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Monthly, annual, and lifetime cost
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      $19/mo · $99/yr ($8.25/mo) · $199 Life
                    </td>
                    <td className="py-3.5 px-5 text-rose-800 font-medium">
                      $20–$24.99/mo or $55.99/quarter
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Chrome Web Store & Endpoint Audit Drawer */}
            <details className="group border-t-2 border-[#111111] bg-[#FAF8F5]">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-800 hover:bg-neutral-200/60 transition-colors">
                <h3 className="flex items-center gap-2 m-0 inline">
                  <Code2 className="w-4 h-4 text-emerald-800" />
                  Technical Chrome Web Store Delisting &amp; Domain Audit (quizplus.com)
                </h3>
                <span className="text-emerald-800 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-xs font-mono text-neutral-700 space-y-3 border-t border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Delisted Chrome Web Store Endpoint
                    </div>
                    <div>
                      • Historical CWS ID:{" "}
                      <code>kiofefkcegfcjhplblccedakkjbplcha</code>
                    </div>
                    <div>
                      • HTTP Redirect Target:{" "}
                      <code>
                        chromewebstore.google.com/detail/empty-title/kiofefkcegfcjhplblccedakkjbplcha
                      </code>
                    </div>
                    <div>
                      • Store Response Payload:{" "}
                      <code>
                        AF_initDataCallback(&#123;key: &apos;ds:0&apos;,
                        data:[5], errorHasStatus: true&#125;)
                      </code>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Web Repository &amp; Paywall Structure
                    </div>
                    <div>• Primary Domain: quizplus.com</div>
                    <div>
                      • Database Scope: ~20M+ static textbook Q&amp;A items and
                      ~300,000 preset publisher test banks
                    </div>
                    <div>
                      • Subscription Billing: $20–$24.99/month or ~$55.99/quarter
                      following a 3-to-7 day trial
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* Honest Buyer's Guide */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-300 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mb-4">
                When Quizplus Still Makes Sense
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                To be completely fair, Quizplus was built for untimed, open-book
                homework review where an instructor pulls verbatim questions
                straight out of an older publisher test bank:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-neutral-900">•</span>
                  <span>
                    Studying untimed intro-level flashcards or reviewing
                    standard publisher chapter quizzes from 2018–2023 textbook
                    editions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-neutral-900">•</span>
                  <span>
                    Looking up verbatim multiple-choice study guides outside of
                    a monitored LMS browser session.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-emerald-800 shadow-sm">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 mb-2">
                Built for Live 2026 LMS Exams
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mb-4">
                When You Need ExamGhost Instead
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>
                    Timed <strong>Canvas Classic &amp; New Quizzes</strong>,
                    Blackboard Ultra, Moodle, D2L Brightspace, McGraw Hill
                    Connect, or Pearson MyLab exams where tab-switching is
                    logged.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>
                    Randomized STEM problems, circuit diagrams, accounting
                    tables, or professor-written exams that do not exist in
                    static textbook banks.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>
                    Transparent pricing: start with{" "}
                    <strong>50 Free Question Solves ($0)</strong>, then pick{" "}
                    <strong>$19/mo</strong>,{" "}
                    <strong>$99/yr ($8.25/mo)</strong>, or{" "}
                    <strong>$199 Lifetime</strong>.
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
              03 // Verified 2026 Audit FAQs
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Frequently Asked Questions: Quizplus vs ExamGhost
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                What happened to the Quizplus Chrome Extension?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                During our 2026 Chrome Web Store audit, navigating to the
                official Quizplus extension URL redirects to{" "}
                <code className="font-mono text-xs">/detail/empty-title/</code>{" "}
                with an item-removed error status—confirming the extension has
                been delisted from the store. Students using Quizplus are forced
                to manually copy-paste questions into{" "}
                <code className="font-mono text-xs">quizplus.com</code> in a
                separate browser tab.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Why does Quizplus fail when professors use algorithmic or randomized numbers in Canvas?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Quizplus is a pre-indexed textbook test-bank repository of
                around 20M+ static Q&amp;A records and roughly 300,000 preset
                quizzes. If a professor changes a single numeric parameter in
                McGraw Hill Connect, WebAssign, or Canvas New Quizzes, Quizplus
                either returns no match or shows the answer for a different
                number set. ExamGhost uses live multimodal AI and Mathpix OCR to
                compute the exact answer for your specific variables in 0.3
                seconds.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Can Canvas SpeedGrader detect when I switch tabs to search Quizplus.com?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Yes. Because the Quizplus Chrome extension is delisted and lacks
                a Focus Shield, searching{" "}
                <code className="font-mono text-xs">quizplus.com</code> requires
                leaving your active Canvas quiz tab. Every tab switch fires{" "}
                <code className="font-mono text-xs">window.blur</code>,{" "}
                <code className="font-mono text-xs">
                  document.visibilitychange
                </code>
                , and <code className="font-mono text-xs">pagehide</code> events
                that Canvas logs with exact timestamps. ExamGhost intercepts and
                suppresses these events inside a closed Shadow DOM.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                How does Quizplus pricing compare to ExamGhost in 2026?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Quizplus locks full test-bank answers behind a recurring
                subscription ranging from <strong>$20 to $24.99/month</strong>{" "}
                (or <strong>~$55.99/quarter</strong>) after a short 3-to-7 day
                trial, costing up to $299/year. ExamGhost gives you{" "}
                <strong>50 Free Question Solves ($0)</strong> with no credit
                card required, plus transparent flat options:{" "}
                <strong>$19/month</strong>, <strong>$99/year</strong>{" "}
                ($8.25/mo), or a{" "}
                <strong>$199 one-time Lifetime Degree Pass</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Bespoke Pastel Conversion Strip + Related Comparisons */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-50 via-[#FAF8F5] to-amber-50 border-2 border-[#111111] rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_#111111] mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-emerald-900 font-bold mb-2">
                  Active MV3 Stealth • Solves Randomized Variables in 0.3s
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mb-3">
                  Replace Static Test Banks With Live 0.3s In-Tab AI
                </h2>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Don&apos;t switch tabs to search outdated textbook banks. Test
                  ExamGhost AI with{" "}
                  <strong>50 Free Question Solves ($0, no card required)</strong>{" "}
                  or unlock unlimited access for <strong>$19/month</strong> or{" "}
                  <strong>$99/year ($8.25/mo)</strong>.
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
                    Try Live 0.3s Stealth Demo
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
                  Related Archive &amp; LMS Audits
                </div>
                <div className="space-y-2.5 text-sm font-medium">
                  <Link prefetch={false}
                    href="/snapgpt-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>SnapGPT vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/brainly-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Brainly vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/knowt-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Knowt vs ExamGhost AI</span>
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
