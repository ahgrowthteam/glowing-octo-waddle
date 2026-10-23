import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Zap,
  Clock,
  DollarSign,
  ChevronDown,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  EyeOff,
  HelpCircle,
  Layers,
  FileText,
  Code2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: {
        absolute: "TestWhiz vs ExamGhost (2026) — $5.99/Wk Trial vs Stealth",
    },
    description: "Compare TestWhiz (testwhiz.co) with ExamGhost. Skip 3-day $5.99/wk trial traps and delisted extensions with 0.3s closed Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/testwhiz-vs-examghost",
    },
    openGraph: {
        title: "TestWhiz vs ExamGhost (2026) — $5.99/Wk Trial vs Stealth",
        description: "Compare TestWhiz (testwhiz.co) with ExamGhost. Skip 3-day $5.99/wk trial traps and delisted extensions with 0.3s closed Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/testwhiz-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "TestWhiz vs ExamGhost (2026) — $5.99/Wk Trial vs Stealth",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TestWhiz vs ExamGhost (2026) — $5.99/Wk Trial vs Stealth",
        description: "Compare TestWhiz (testwhiz.co) with ExamGhost. Skip 3-day $5.99/wk trial traps and delisted extensions with 0.3s closed Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function TestwhizVsExamghostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-01-25",
                "dateModified": "2026-03-24",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/testwhiz-vs-examghost#webpage",
        url: "https://examghost.com/testwhiz-vs-examghost",
        name: "TestWhiz vs ExamGhost (2026 Audit) | 6-in-1 Study Portal vs 0.3s Canvas Stealth",
        description:
          "Independent 2026 technical audit of TestWhiz (testwhiz.co) vs ExamGhost. Compare TestWhiz's replaced extension, 3-day trial ($5.99/wk or $12.99/mo), and PDF/YouTube chat bundle against ExamGhost's 4-Layer Focus Shield and 50 Free Solves.",
        breadcrumb: {
          "@id": "https://examghost.com/testwhiz-vs-examghost#breadcrumb",
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
                name: "Free Trial (50 Solves)",
                price: "0",
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
            name: "TestWhiz",
            url: "https://testwhiz.co",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web Application, Chrome Extension",
            offers: [
              {
                "@type": "Offer",
                name: "TestWhiz Weekly",
                price: "5.99",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "TestWhiz Monthly",
                price: "12.99",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "TestWhiz Semester",
                price: "39.99",
                priceCurrency: "USD",
              },
            ],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://examghost.com/testwhiz-vs-examghost#breadcrumb",
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
            name: "TestWhiz vs ExamGhost",
            item: "https://examghost.com/testwhiz-vs-examghost",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://examghost.com/testwhiz-vs-examghost#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why did TestWhiz replace its old AI solver Chrome extension?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On the live testwhiz.co homepage, a banner announces: 'New Feature Alert: We replaced our old AI solver extension with a new one!' While its rebuilt extension adds basic highlight-and-screenshot solving, it remains coupled to a generic 6-tool web portal (PDF Chat, YouTube Chat, Flashcards, Notes, Worksheets, Quizzes) rather than a dedicated LMS stealth engine.",
            },
          },
          {
            "@type": "Question",
            name: "Does TestWhiz's 'Incognito mode' stop Canvas Quiz Logs from detecting tab switches?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. While TestWhiz's FAQ states that 'Incognito mode ensures your activity remains private,' hiding extension popup history or toggling a visual mode does not intercept browser-level focus telemetry. When you click outside the active quiz DOM or switch to the TestWhiz dashboard to chat with a PDF or YouTube video, Canvas LMS fires window.blur and visibilitychange events ('Stopped viewing the Canvas quiz-taking page'). ExamGhost neutralizes these telemetry listeners at the JavaScript execution layer via its 4-Layer Focus Shield.",
            },
          },
          {
            "@type": "Question",
            name: "How much does TestWhiz actually cost after its 3-day free trial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "According to testwhiz.co/pricing, TestWhiz offers a 3-day free trial ('Try TestWhiz for FREE for 3 days. Cancel anytime') that converts into paid recurring tiers: $5.99/week ($311.48/year), $12.99/month ($155.88/year), or $39.99/semester ($79.98–$119.97/year). ExamGhost provides 50 Free Question Solves with no credit card required and no 72-hour expiration timer, plus $19/month, $99/year ($8.25/mo), or a $199 one-time Lifetime Degree Pass.",
            },
          },
          {
            "@type": "Question",
            name: "Why do TestWhiz's homepage counters render as '0+ Problems Solved' in the source HTML?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In our 2026 source audit of testwhiz.co, the social proof section ships in the server-rendered HTML as '0+ Problems Solved', '0+ Flashcards Generated', '0+ Notes Generated', and '0+ Worksheets Generated' (with inline style='opacity:0'), relying on client-side JavaScript number tickers rather than audited telemetry.",
            },
          },
          {
            "@type": "Question",
            name: "When should a student use TestWhiz vs ExamGhost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If you want an all-in-one web workspace to chat with YouTube lecture videos, generate printable study worksheets, and create flashcards from PDFs before exam week, TestWhiz's $12.99/month or $39.99/semester dashboard covers those study workflows. However, if you are taking live, timed assessments on Canvas, Blackboard, Moodle, D2L Brightspace, or McGraw-Hill SmartBook and require 0.3s Vision OCR, closed Shadow DOM isolation, and verified Focus Shield protection, ExamGhost is purpose-built for the job.",
            },
          },
        ],
      },
    ],
  };

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
              Compare Extensions
            </Link>
            <span>/</span>
            <span className="text-emerald-900 font-semibold">
              TestWhiz vs ExamGhost
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: High-Converting SaaS Copy & Hero CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-mono uppercase tracking-widest mb-5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>2026 Study Portal &amp; Trial Audit • testwhiz.co</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-5">
                Why Risk a{" "}
                <span className="text-amber-800 underline decoration-amber-400/70 decoration-wavy underline-offset-4">
                  72-Hour Auto-Billing Trial
                </span>{" "}
                ($5.99/Wk) and an Unshielded Study Wrapper?
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
                <strong>TestWhiz</strong> (
                <code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">
                  testwhiz.co
                </code>
                ) bundles 6 study tools—PDF Chat, YouTube Video Chat,
                Flashcards, Notes, Worksheets, and Quizzes—behind a{" "}
                <strong>3-day free trial</strong> that auto-converts into{" "}
                <strong>$5.99/week ($311.48/year)</strong> or{" "}
                <strong>$12.99/month</strong>. While its homepage announces{" "}
                <em>&ldquo;We replaced our old AI solver extension with a new one!&rdquo;</em>{" "}
                and promises an <em>&ldquo;Incognito mode,&rdquo;</em> it still
                lacks a Canvas{" "}
                <code className="font-mono text-sm bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                  window.blur
                </code>{" "}
                Focus Shield. Here is how it compares to{" "}
                <strong>ExamGhost AI</strong>.
              </p>

              {/* 3 Fast Scannable Stat Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Free Trial Policy
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-rose-700 line-through mr-1.5">72h Timer</span>
                    <span className="text-emerald-800">50 Free Solves</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    $0 upfront • No credit card
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Canvas Telemetry
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-emerald-800">4-Layer Focus Shield</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    vs Vague &ldquo;Incognito&rdquo; claim
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Annual / Weekly Math
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-rose-700 line-through mr-1.5">$311/yr</span>
                    <span className="text-emerald-800">$99/yr Pass</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    $8.25/mo vs $5.99/wk auto-bill
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
                  Try Live Canvas Sandbox
                </Link>
                <a
                  href="#testwhiz-audit"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold hover:underline px-2 py-2"
                >
                  Inspect 3-Day Trial Math ↓
                </a>
              </div>
            </div>

            {/* Right Column: Bespoke 72-Hour Trial & Replaced Extension vs 4-Layer Shield Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-[#111111] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#111111]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 ml-1">
                      Trial Timer &amp; Canvas Focus Monitor
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-semibold">
                    Live Audit
                  </span>
                </div>

                {/* Top Simulator Card: TestWhiz */}
                <div className="rounded-2xl bg-rose-50/80 border border-rose-200 p-4 mb-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-rose-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                      TestWhiz.co (6-in-1 Study Wrapper)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-200/80 text-rose-950">
                      72h Auto-Bill
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        1. Free Trial Countdown:
                      </span>
                      <span className="text-rose-800 font-bold">
                        3 Days → $5.99/wk ($311/yr)
                      </span>
                    </div>
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        2. Extension Status:
                      </span>
                      <span className="text-amber-900 font-bold">
                        &ldquo;Replaced Old Extension&rdquo;
                      </span>
                    </div>
                    <div className="bg-rose-950 text-rose-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>Canvas Quiz Log:</span>
                      <span className="text-rose-300 font-bold">
                        window.blur Not Blocked ⚠️
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Simulator Card: ExamGhost AI */}
                <div className="rounded-2xl bg-emerald-50/90 border-2 border-emerald-700 p-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-950 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      ExamGhost AI v4.2 (24-Tool Stealth)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-200 text-emerald-950">
                      0.3s Instant
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        1. Free Trial Quota:
                      </span>
                      <span className="text-emerald-800 font-bold">
                        50 Solves ($0 • No Card) ✓
                      </span>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        2. UI Encapsulation:
                      </span>
                      <span className="text-emerald-800 font-bold">
                        Closed Shadow DOM + Opacity
                      </span>
                    </div>
                    <div className="bg-emerald-950 text-emerald-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>Canvas Quiz Log:</span>
                      <span className="text-emerald-300 font-bold">
                        4-Layer Focus Shield Active ✓
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
          id="testwhiz-audit"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              01 // Interactive Architecture &amp; Billing Explorer
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Click Any Tab to Inspect TestWhiz.co vs ExamGhost AI
            </h2>
            <p className="text-neutral-700 mt-2 max-w-3xl text-sm sm:text-base">
              We audited the live Next.js application at{" "}
              <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                testwhiz.co
              </code>{" "}
              and{" "}
              <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                testwhiz.co/pricing
              </code>
              . Choose a tab below to explore its 3-day trial math, its{" "}
              &ldquo;Incognito mode&rdquo; limitations, and its 6-in-1 study
              dashboard.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111111] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#111111]">
            {/* Pure CSS Radio Inputs */}
            <input
              type="radio"
              name="tw-tabs"
              id="tab-tw-trial"
              className="sr-only peer/tw-trial"
              defaultChecked
            />
            <input
              type="radio"
              name="tw-tabs"
              id="tab-tw-stealth"
              className="sr-only peer/tw-stealth"
            />
            <input
              type="radio"
              name="tw-tabs"
              id="tab-tw-suite"
              className="sr-only peer/tw-suite"
            />

            {/* Tab Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-6 mb-8 border-b border-neutral-200">
              <label
                htmlFor="tab-tw-trial"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/tw-trial:border-[#111111] peer-checked/tw-trial:bg-emerald-950 peer-checked/tw-trial:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span>Tab 01 • 72h Trial &amp; Cost</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  3-Day Trial ($311/yr Weekly) vs 50 Free
                </div>
              </label>

              <label
                htmlFor="tab-tw-stealth"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/tw-stealth:border-[#111111] peer-checked/tw-stealth:bg-emerald-950 peer-checked/tw-stealth:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <EyeOff className="w-4 h-4" />
                  <span>Tab 02 • Canvas Stealth</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  &ldquo;Incognito Mode&rdquo; vs Focus Shield
                </div>
              </label>

              <label
                htmlFor="tab-tw-suite"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/tw-suite:border-[#111111] peer-checked/tw-suite:bg-emerald-950 peer-checked/tw-suite:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Tab 03 • Study Suite vs Solver</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  6-Tool Web Wrapper vs 0.3s Vision OCR
                </div>
              </label>
            </div>

            {/* Panel 1: 3-Day Trial & Cost */}
            <div className="hidden peer-checked/tw-trial:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold uppercase">
                  72-Hour Auto-Conversion Audit
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  What Happens When TestWhiz&apos;s 3-Day Free Trial Expires?
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  On{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                    testwhiz.co/pricing
                  </code>
                  , every tier—Weekly (<strong>$5.99/week</strong>), Monthly (
                  <strong>$12.99/month</strong>), and Semester (
                  <strong>$39.99/semester</strong>)—gates access behind a{" "}
                  <strong>3-day free trial</strong> (
                  <em>&ldquo;Try TestWhiz for FREE for 3 days. Cancel anytime.&rdquo;</em>
                  ). If you forget to cancel within 72 hours on the Weekly plan,
                  you are billed $5.99 every 7 days—which equals{" "}
                  <strong>$23.96/month or $311.48/year</strong>.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  <strong>ExamGhost AI</strong> never puts a 72-hour ticking
                  clock on your trial. You get{" "}
                  <strong>50 Free Question Solves ($0)</strong> with no credit
                  card required. When you want unlimited access, our{" "}
                  <strong>$19/month Monthly Pass</strong>,{" "}
                  <strong>$99/year Academic Year Pass ($8.25/mo)</strong>, and{" "}
                  <strong>$199 one-time Lifetime Degree Pass</strong> are backed
                  by an unconditional{" "}
                  <strong>14-day 100% money-back guarantee</strong>.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-rose-950">
                      TestWhiz.co Pricing
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-200 text-rose-950 font-bold">
                      3-Day Trial Only
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                    <li>• <strong>Weekly Plan:</strong> $5.99/wk ($23.96/mo • $311.48/yr)</li>
                    <li>• <strong>Monthly Plan:</strong> $12.99/mo ($155.88/yr)</li>
                    <li>• <strong>Semester Plan:</strong> $39.99/semester</li>
                    <li>• <strong>Lifetime Option:</strong> None (recurring billing only)</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-emerald-950">
                      ExamGhost AI Passes
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-800 text-white font-bold">
                      50 Free Solves
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                    <li>• <strong>Free Trial:</strong> 50 Free Solves ($0 • No 72h timer)</li>
                    <li>• <strong>Monthly Pass:</strong> $19/month (100% Unlimited)</li>
                    <li>• <strong>Academic Year:</strong> $99/year ($8.25/mo — Fall, Spring &amp; Summer)</li>
                    <li>• <strong>Lifetime Pass:</strong> $199 one-time • 14-day 100% refund guarantee</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Panel 2: Incognito Mode vs Focus Shield */}
            <div className="hidden peer-checked/tw-stealth:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase">
                  Canvas Telemetry &amp; Extension Audit
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Why TestWhiz&apos;s &ldquo;Incognito Mode&rdquo; Doesn&apos;t Stop Canvas Quiz Logs
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  At the top of <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">testwhiz.co</code>,
                  a banner announces:{" "}
                  <em>
                    &ldquo;New Feature Alert: We replaced our old AI solver
                    extension with a new one!&rdquo;
                  </em>{" "}
                  In its FAQ, TestWhiz states that{" "}
                  <em>&ldquo;Incognito mode ensures your activity remains private.&rdquo;</em>
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  However, Canvas, Blackboard, and D2L Brightspace do not check
                  your local extension history—they monitor{" "}
                  <code className="font-mono text-xs bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                    window.onblur
                  </code>
                  ,{" "}
                  <code className="font-mono text-xs bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                    document.visibilityState
                  </code>
                  , and{" "}
                  <code className="font-mono text-xs bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                    document.hasFocus()
                  </code>
                  . Clicking outside the active quiz DOM or switching tabs to
                  use TestWhiz&apos;s PDF/YouTube chat immediately logs{" "}
                  <em>&ldquo;Stopped viewing the Canvas quiz-taking page.&rdquo;</em>{" "}
                  <strong>ExamGhost AI&apos;s 4-Layer Focus Shield</strong>{" "}
                  neutralizes those exact event listeners in memory and renders
                  inside a closed Shadow DOM root.
                </p>
              </div>

              <div className="lg:col-span-5 bg-neutral-900 text-white rounded-2xl p-6 font-mono text-xs space-y-4">
                <div className="p-3.5 rounded-xl bg-rose-950/90 border border-rose-800 space-y-1.5">
                  <div className="text-rose-300 font-bold uppercase">
                    TestWhiz Replaced Extension
                  </div>
                  <div className="text-rose-100/90">
                    • Visual &quot;Incognito mode&quot; toggle only
                  </div>
                  <div className="text-rose-100/90">
                    • No <code>window.blur</code> or <code>visibilitychange</code> interception
                  </div>
                  <div className="text-rose-100/90">
                    • Standard overlay without closed Shadow DOM isolation
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-700 space-y-1.5">
                  <div className="text-emerald-300 font-bold uppercase">
                    ExamGhost 4-Layer Focus Shield
                  </div>
                  <div className="text-emerald-100/90">
                    • Spoofs <code>document.hasFocus() === true</code>
                  </div>
                  <div className="text-emerald-100/90">
                    • Traps <code>window.blur</code> &amp; <code>visibilitychange</code>
                  </div>
                  <div className="text-emerald-100/90">
                    • 100% isolated <code>mode: &apos;closed&apos;</code> Shadow Root
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: 6-Tool Web Wrapper vs 0.3s Vision OCR */}
            <div className="hidden peer-checked/tw-suite:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase">
                  Product Focus &amp; Speed Comparison
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  6-in-1 Pre-Exam Study Dashboard vs Dedicated 0.3s Exam Solver
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  TestWhiz is designed primarily as a 6-tool web portal where you
                  upload syllabus PDFs or paste YouTube lecture URLs to generate
                  flashcards, study notes, printable worksheets, and practice
                  quizzes. While those features are handy for pre-exam review,
                  you can already summarize PDFs and YouTube transcripts for free
                  in standard AI chat tools.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Instead of padding our dashboard with worksheet generators,{" "}
                  <strong>ExamGhost AI</strong> dedicates 100% of its engineering
                  to <strong>24 live LMS stealth and solving capabilities</strong>—delivering{" "}
                  <strong>0.3s Multimodal Vision OCR</strong> for Calculus
                  integrals, Organic Chemistry structures, circuit schematics,
                  and McGraw-Hill SmartBook prompts directly inside your active
                  exam tab.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#FAF8F5] border border-neutral-300 rounded-2xl p-5">
                  <div className="text-xs font-mono uppercase font-bold text-neutral-600 mb-2">
                    When TestWhiz.co Makes Sense
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    <li>• Chatting with YouTube lecture videos and generating printable study worksheets before exam week</li>
                    <li>• Using a basic highlight/screenshot helper on unmonitored homework where tab switches aren&apos;t logged</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-800 rounded-2xl p-5">
                  <div className="text-xs font-mono uppercase font-bold text-emerald-950 mb-2">
                    When ExamGhost AI Wins
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-800">
                    <li>• Live timed midterms &amp; finals on Canvas, Blackboard, Moodle, D2L &amp; SmartBook</li>
                    <li>• 0.3s Snap-It Vision OCR for complex STEM diagrams, graphs, and locked iframes</li>
                    <li>• Zero-trace closed Shadow DOM HUD + 4-Layer Focus Shield</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Feature & Pricing Comparison Table + Collapsible Technical Drawer */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              02 // Head-to-Head Technical Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              TestWhiz.co vs ExamGhost: 2026 Feature &amp; Pricing Breakdown
            </h2>
          </div>

          <div className="bg-white border-2 border-[#111111] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#111111]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-800 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="py-4 px-5 w-1/4 border-r border-neutral-800">
                      Evaluation Criteria
                    </th>
                    <th className="py-4 px-5 text-emerald-300 w-[37.5%] border-r border-neutral-800">
                      ExamGhost (v4.2 Stealth Engine)
                    </th>
                    <th className="py-4 px-5 text-neutral-300 w-[37.5%]">
                      TestWhiz (testwhiz.co)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Primary Product Architecture
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200 text-emerald-900 font-medium">
                      Dedicated 24-Tool LMS Stealth &amp; 0.3s Multimodal Exam
                      Solver
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      6-in-1 Web Study Portal (PDF Chat, YouTube Chat,
                      Flashcards, Notes, Worksheets, Quizzes) + Replaced
                      Extension
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Free Tier / Trial Policy
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200 text-emerald-900 font-semibold">
                      50 Free Question Solves ($0, no credit card, never expires
                      after 72h)
                    </td>
                    <td className="py-4 px-5 text-rose-800 font-medium">
                      3-Day Free Trial only (&ldquo;Try TestWhiz for FREE for 3
                      days&rdquo; then auto-bills)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Weekly / Short-Term Pricing
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200 text-emerald-900 font-medium">
                      No $5.99/wk trap — Full Monthly Pass is $19/mo (14-day
                      refund guarantee)
                    </td>
                    <td className="py-4 px-5 text-rose-800 font-medium">
                      $5.99 / week (&ldquo;Give it a try&rdquo; — equals
                      $23.96/mo or $311.48/year)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Monthly &amp; Annual / Semester Pricing
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200 text-emerald-900 font-semibold">
                      $19/month or $99/year Academic Year Pass ($8.25/mo —
                      covers Fall, Spring &amp; Summer)
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      $12.99/month ($155.88/yr) or $39.99/semester
                      ($79.98–$119.97/yr)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Lifetime Ownership Option
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200 text-emerald-900 font-semibold">
                      $199 One-Time Lifetime Degree Pass (3 devices, all future
                      LMS updates)
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      None (recurring weekly, monthly, or semester billing only)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Canvas Quiz Log Protection
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200 text-emerald-900 font-semibold">
                      4-Layer Focus Shield (spoofs{" "}
                      <code className="font-mono text-xs">window.blur</code>,{" "}
                      <code className="font-mono text-xs">
                        visibilitychange
                      </code>
                      , <code className="font-mono text-xs">hasFocus()</code>)
                    </td>
                    <td className="py-4 px-5 text-rose-800 font-medium">
                      Vague &ldquo;Incognito mode&rdquo; claim; does not
                      intercept Canvas focus-loss telemetry
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      DOM Injection Footprint
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200 text-emerald-900 font-medium">
                      Closed Shadow DOM root + Ghost Opacity slider (down to 10%
                      transparency)
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      Standard extension overlay / screenshot cropper without
                      Shadow DOM isolation
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      STEM &amp; Diagram OCR Speed
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200 text-emerald-900 font-semibold">
                      0.3s Multimodal Vision Edge Compute (LaTeX, graphs,
                      circuits, SmartBook)
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      2.5s–4.5s general AI Problem Solver response time
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Source & Tracker Audit Drawer */}
            <details className="group border-t-2 border-[#111111] bg-[#FAF8F5]">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-800 hover:bg-neutral-200/60 transition-colors">
                <h3 className="flex items-center gap-2 m-0 inline">
                  <Code2 className="w-4 h-4 text-emerald-800" />
                  Technical SSR HTML, Banner &amp; Tracker Audit (testwhiz.co)
                </h3>
                <span className="text-emerald-800 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-xs font-mono text-neutral-700 space-y-3 border-t border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      SSR Payload &amp; Banner Inspection
                    </div>
                    <div>
                      • Top Alert Banner:{" "}
                      <code>
                        &quot;New Feature Alert: We replaced our old AI solver
                        extension with a new one!&quot;
                      </code>
                    </div>
                    <div>
                      • Initial SSR Social Proof Counters:{" "}
                      <code>0+ Problems Solved</code>,{" "}
                      <code>0+ Flashcards Generated</code>,{" "}
                      <code>0+ Notes Generated</code>,{" "}
                      <code>0+ Worksheets Generated</code> (rendered with{" "}
                      <code>style=&quot;opacity:0&quot;</code> prior to client
                      ticker hydration)
                    </div>
                    <div>
                      • Footer Cross-Links:{" "}
                      <code>21st.tools/tools/testwhiz</code>,{" "}
                      <code>findproductized.co</code>,{" "}
                      <code>opensourceboilerplates.com</code> (static{" "}
                      <code>© 2025 TestWhiz.co</code>)
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Third-Party Auth &amp; Analytics Stack
                    </div>
                    <div>
                      • Authentication: Clerk (<code>clerk.testwhiz.co</code>)
                      required before starting the 3-day trial
                    </div>
                    <div>
                      • Embedded Analytics Scripts:{" "}
                      <code>cloud.umami.is/script.js</code>,{" "}
                      <code>analytics.ahrefs.com</code>,{" "}
                      <code>piqo.app/piqo.js</code>
                    </div>
                    <div>
                      • Extension Title:{" "}
                      <code>TestWhiz: AI for quizzes and assignments</code>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              03 // Verified 2026 FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Frequently Asked Questions: TestWhiz vs ExamGhost
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Why did TestWhiz replace its old AI solver Chrome extension?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                On the live{" "}
                <code className="font-mono text-xs">testwhiz.co</code> homepage,
                a prominent banner announces:{" "}
                <em>
                  &ldquo;New Feature Alert: We replaced our old AI solver
                  extension with a new one!&rdquo;
                </em>{" "}
                While the replacement extension restores basic text-highlight
                and screenshot solving, it remains a companion to a 6-tool study
                dashboard rather than a dedicated LMS stealth engine.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Does TestWhiz&apos;s &ldquo;Incognito mode&rdquo; stop Canvas Quiz Logs from detecting tab switches?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                No. While TestWhiz&apos;s FAQ claims that{" "}
                <em>&ldquo;Incognito mode ensures your activity remains private,&rdquo;</em>{" "}
                hiding local popup state does not block browser focus telemetry.
                When you click outside the active quiz DOM or switch tabs to use
                TestWhiz&apos;s PDF Chat or YouTube Video Chat, Canvas LMS fires{" "}
                <code className="font-mono text-xs">window.blur</code> and{" "}
                <code className="font-mono text-xs">visibilitychange</code>{" "}
                events. ExamGhost blocks those telemetry listeners via its
                4-Layer Focus Shield.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                How much does TestWhiz actually cost after its 3-day free trial?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                According to{" "}
                <code className="font-mono text-xs">testwhiz.co/pricing</code>,
                TestWhiz offers a <strong>3-day free trial</strong> that
                converts into recurring plans: <strong>$5.99/week</strong>{" "}
                ($311.48/year), <strong>$12.99/month</strong> ($155.88/year), or{" "}
                <strong>$39.99/semester</strong>. ExamGhost gives you{" "}
                <strong>50 Free Question Solves ($0)</strong> with no credit
                card and no 72-hour expiration timer, followed by{" "}
                <strong>$19/month</strong>, <strong>$99/year ($8.25/mo)</strong>,
                or a <strong>$199 one-time Lifetime Degree Pass</strong>.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Can I test ExamGhost&apos;s Focus Shield before installing anything?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Yes. You can launch our interactive{" "}
                <Link prefetch={false}
                  href="/canvas-quiz-solver-free-demo"
                  className="underline font-semibold text-emerald-800"
                >
                  Live Canvas Quiz Log Sandbox Demo
                </Link>{" "}
                right in your browser to watch how Canvas records{" "}
                <code className="font-mono text-xs">window.blur</code> and{" "}
                <code className="font-mono text-xs">visibilitychange</code>{" "}
                events when Focus Shield is OFF versus when ExamGhost&apos;s
                4-Layer Focus Shield is ON.
              </p>
            </div>
          </div>
        </section>

        {/* Bespoke Pastel Conversion Strip + Related Comparisons (No Stacked Dark Box) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 via-[#FAF8F5] to-emerald-50 border-2 border-[#111111] rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_#111111] mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-emerald-900 font-bold mb-2">
                  Upgrade From 6-in-1 Study Wrappers • Zero 72h Trial Trap
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mb-3">
                  Ready for True 0.3s Canvas Stealth?
                </h2>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Skip the 3-day auto-billing trial trap and unshielded study
                  portals. Start with{" "}
                  <strong>50 Free Question Solves ($0)</strong>—including our
                  4-Layer Focus Shield and 10 Snap-It Vision OCR snips—or lock
                  in the <strong>$99/yr Academic Year Pass ($8.25/mo)</strong>.
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
                    Try Live Sandbox Demo
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
                  Related Extension Audits
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
                    href="/studyfox-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>StudyFox vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/mindko-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Mindko vs ExamGhost AI</span>
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
