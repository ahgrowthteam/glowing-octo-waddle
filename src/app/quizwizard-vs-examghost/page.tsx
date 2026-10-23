import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Zap,
  Star,
  ChevronDown,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Eye,
  Cpu,
  CreditCard,
  Code2,
  Wand2,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: {
        absolute: "Quiz Wizard vs ExamGhost (2026) — Spell Quotas vs 0.3s AI",
    },
    description: "2026 audit of Quiz Wizard (quizwizard.app) vs ExamGhost. Skip monthly 'Spell' quotas and toolbar blur logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/quizwizard-vs-examghost",
    },
    openGraph: {
        title: "Quiz Wizard vs ExamGhost (2026) — Spell Quotas vs 0.3s AI",
        description: "2026 audit of Quiz Wizard (quizwizard.app) vs ExamGhost. Skip monthly 'Spell' quotas and toolbar blur logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/quizwizard-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Quiz Wizard vs ExamGhost (2026) — Spell Quotas vs 0.3s AI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Quiz Wizard vs ExamGhost (2026) — Spell Quotas vs 0.3s AI",
        description: "2026 audit of Quiz Wizard (quizwizard.app) vs ExamGhost. Skip monthly 'Spell' quotas and toolbar blur logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function QuizwizardVsExamghostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-02-12",
                "dateModified": "2026-03-07",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/quizwizard-vs-examghost#webpage",
        url: "https://examghost.com/quizwizard-vs-examghost",
        name: "Quiz Wizard vs ExamGhost (2026) | 0.3s Stealth HUD vs Beta 'Spell' Quotas",
        description:
          "2026 architectural comparison between Quiz Wizard (quizwizard.app) and ExamGhost covering 'Spell' credit quotas, base-model ceilings, visual screen capture latency, and Canvas Focus Shield stealth.",
        breadcrumb: {
          "@id": "https://examghost.com/quizwizard-vs-examghost#breadcrumb",
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
            name: "Quiz Wizard",
            url: "https://quizwizard.app",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Chrome, Edge, Brave, Opera, iOS",
            offers: [
              {
                "@type": "Offer",
                name: "Free (50 Spells)",
                price: "0",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Standard (500 Spells)",
                price: "5.99",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Pro (2,000 Spells)",
                price: "14.99",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Premium (5,000 Spells)",
                price: "29.99",
                priceCurrency: "USD",
              },
            ],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://examghost.com/quizwizard-vs-examghost#breadcrumb",
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
            name: "Quiz Wizard vs ExamGhost",
            item: "https://examghost.com/quizwizard-vs-examghost",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://examghost.com/quizwizard-vs-examghost#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a 'Spell' in Quiz Wizard and how many do you actually get for free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On quizwizard.app, 1 'Spell' equals a single AI-generated question explanation. Notably, Quiz Wizard's homepage FAQ claims users receive '100 free AI explanations every month,' whereas its live /pricing page restricts the Free ($0/month) tier to 50 Spells. Paid plans charge $5.99/mo (500 Spells), $14.99/mo (2,000 Spells), or $29.99/mo (5,000 Spells) via PayPro Global.",
            },
          },
          {
            "@type": "Question",
            name: "Do Quiz Wizard's $14.99 Pro or $29.99 Premium plans unlock smarter AI models?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Quiz Wizard's /pricing page explicitly states: 'All plans include access to our base models and core browser features.' Upgrading from $0 to $29.99/month ($359.88/year) only increases your monthly Spell quota—it does not upgrade reasoning depth or add proctor stealth.",
            },
          },
          {
            "@type": "Question",
            name: "Is Quiz Wizard safe to use on monitored Canvas or Blackboard exams?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Quiz Wizard is an unshielded Beta visual tutor that captures screen context without a Canvas Focus Shield. Clicking the extension or opening its panel dispatches window.blur and document.visibilitychange events directly to Canvas SpeedGrader. ExamGhost isolates its HUD inside a closed Shadow DOM and suppresses all blur/visibility telemetry.",
            },
          },
          {
            "@type": "Question",
            name: "How does ExamGhost's pricing compare to Quiz Wizard's monthly Spell tiers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Quiz Wizard charges up to $14.99/month ($179.88/year) for Pro or $29.99/month ($359.88/year) for Premium Spell quotas. ExamGhost includes 50 Free Solves (with full Focus Shield + 10 Snap-It OCR snips), a $19/month Midterm Sprint pass, a $99/year Academic Year Pass ($8.25/mo, Unlimited Solves), and a $199 one-time Lifetime Degree Pass.",
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
              Quiz Wizard vs ExamGhost
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: High-Converting SaaS Copy & Hero CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-mono uppercase tracking-widest mb-5">
                <Wand2 className="w-3.5 h-3.5 text-purple-800" />
                <span>2026 Live Beta &amp; &ldquo;Spell&rdquo; Quota Audit</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-5">
                Why Pay Up to $29.99/Mo for{" "}
                <span className="text-purple-800 underline decoration-purple-400/70 decoration-wavy underline-offset-4">
                  &ldquo;Base Model&rdquo; Beta Spells
                </span>{" "}
                That Log Canvas Tab Leaves?
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
                <strong>Quiz Wizard</strong> (
                <code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">
                  quizwizard.app
                </code>
                ) pitches wizard-themed &ldquo;Spells&rdquo; for Canvas, Moodle,
                and Blackboard. When we audited its live pricing and extension
                architecture, we found an early-stage tool still labeled{" "}
                <strong>&ldquo;Currently in Beta Test&rdquo;</strong> (~50 daily
                users) that charges up to <strong>$29.99/month ($359.88/year)</strong>{" "}
                while admitting every tier runs on the exact same{" "}
                <strong>92%-accuracy &ldquo;base models&rdquo;</strong>—and
                clicking its toolbar icon immediately fires{" "}
                <code className="font-mono text-sm bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                  window.blur
                </code>{" "}
                in Canvas SpeedGrader.
              </p>

              {/* 3 Fast Scannable Stat Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    STEM Accuracy
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-rose-700 line-through mr-1.5">92% Base</span>
                    <span className="text-emerald-800">99.4% Frontier</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    Mathpix LaTeX + STEM OCR
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Annual Cost &amp; Quota
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-rose-700 line-through mr-1.5">$359/yr</span>
                    <span className="text-emerald-800">$99/yr Unlim.</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    Zero metered &ldquo;Spell&rdquo; caps
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Canvas Telemetry
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-emerald-800">0 Blur Events</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    Hotkey HUD vs Toolbar click
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
                  Try Live Stealth Demo
                </Link>
                <a
                  href="#spell-audit"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold hover:underline px-2 py-2"
                >
                  Inspect &ldquo;Spell&rdquo; Quotas ↓
                </a>
              </div>
            </div>

            {/* Right Column: Bespoke Spell Meter & Base Model Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-[#111111] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#111111]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 ml-1">
                      Extension Trigger &amp; Quota Inspector
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-semibold">
                    50-Q Midterm
                  </span>
                </div>

                {/* Top Simulator Card: Quiz Wizard Beta */}
                <div className="rounded-2xl bg-rose-50/80 border border-rose-200 p-4 mb-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-rose-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                      Quiz Wizard (&ldquo;Beta Test&rdquo; Mode)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-200/80 text-rose-950">
                      ~4.2s Latency
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        1. Click toolbar icon to cast Spell
                      </span>
                      <span className="text-rose-800 font-bold">
                        window.blur Fired ⚠️
                      </span>
                    </div>
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        2. AI Model Tier ($0 to $29.99/mo)
                      </span>
                      <span className="text-amber-900 font-bold">
                        &ldquo;Base Models&rdquo; (92% Acc.)
                      </span>
                    </div>
                    <div className="bg-rose-950 text-rose-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>Cloud Telemetry:</span>
                      <span className="text-rose-300 font-bold">
                        Logs Session Stats &amp; History
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Simulator Card: ExamGhost AI */}
                <div className="rounded-2xl bg-emerald-50/90 border-2 border-emerald-700 p-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-950 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      ExamGhost AI v4.2 (Production Stealth)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-200 text-emerald-950">
                      0.3s Edge OCR
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        1. Silent In-Tab Hotkey + Focus Shield
                      </span>
                      <span className="text-emerald-800 font-bold">
                        0 Blur Events ✓
                      </span>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        2. Frontier STEM + Mathpix Pipeline
                      </span>
                      <span className="text-emerald-800 font-bold">
                        99.4% Accuracy (Unlimited)
                      </span>
                    </div>
                    <div className="bg-emerald-950 text-emerald-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>Privacy &amp; Panic Key (Esc):</span>
                      <span className="text-emerald-300 font-bold">
                        Ephemeral RAM Purge ✓
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
          id="spell-audit"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              01 // Interactive Code &amp; Pricing Teardown
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Click Any Tab to Inspect Quiz Wizard&apos;s Beta Architecture
            </h2>
            <p className="text-neutral-700 mt-2 max-w-3xl text-sm sm:text-base">
              We inspected{" "}
              <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                quizwizard.app
              </code>
              , its{" "}
              <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                /pricing
              </code>{" "}
              tiers, and its Chrome extension behavior during live Canvas
              sessions. Select a tab below to see the data.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111111] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#111111]">
            {/* Pure CSS Radio Inputs */}
            <input
              type="radio"
              name="qw-tabs"
              id="tab-qw-spells"
              className="sr-only peer/qw-spells"
              defaultChecked
            />
            <input
              type="radio"
              name="qw-tabs"
              id="tab-qw-models"
              className="sr-only peer/qw-models"
            />
            <input
              type="radio"
              name="qw-tabs"
              id="tab-qw-stealth"
              className="sr-only peer/qw-stealth"
            />

            {/* Tab Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-6 mb-8 border-b border-neutral-200">
              <label
                htmlFor="tab-qw-spells"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/qw-spells:border-[#111111] peer-checked/qw-spells:bg-emerald-950 peer-checked/qw-spells:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <CreditCard className="w-4 h-4" />
                  <span>Tab 01 • &ldquo;Spell&rdquo; Quotas</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  100 vs 50 Free Spells &amp; $359/yr Tiers
                </div>
              </label>

              <label
                htmlFor="tab-qw-models"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/qw-models:border-[#111111] peer-checked/qw-models:bg-emerald-950 peer-checked/qw-models:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>Tab 02 • AI Accuracy Ceiling</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  92% &ldquo;Base Models&rdquo; vs 99.4% STEM
                </div>
              </label>

              <label
                htmlFor="tab-qw-stealth"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/qw-stealth:border-[#111111] peer-checked/qw-stealth:bg-emerald-950 peer-checked/qw-stealth:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <Eye className="w-4 h-4" />
                  <span>Tab 03 • Canvas Stealth</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  Toolbar Blur &amp; Cloud History Risks
                </div>
              </label>
            </div>

            {/* Panel 1: Spell Quotas & Pricing */}
            <div className="hidden peer-checked/qw-spells:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold uppercase">
                  Metered Quota &amp; FAQ Contradiction
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Why Does the FAQ Promise 100 Free Spells While /pricing Gives Only 50?
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  On <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">quizwizard.app</code>,
                  every single AI question explanation deducts{" "}
                  <strong>1 &ldquo;Spell&rdquo;</strong> from your monthly
                  balance. When we compared the homepage FAQ against the live{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">/pricing</code>{" "}
                  page, we found a glaring mismatch: the homepage FAQ promises{" "}
                  <em>&ldquo;100 free AI explanations every month,&rdquo;</em>{" "}
                  while the live pricing table restricts the Free ($0/mo) tier to
                  just <strong>50 Spells</strong>.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Once your free Spells run out, Quiz Wizard routes you through
                  PayPro Global into three metered monthly subscriptions:{" "}
                  <strong>Standard ($5.99/mo for 500 Spells)</strong>,{" "}
                  <strong>Pro ($14.99/mo for 2,000 Spells = $179.88/yr)</strong>,
                  or <strong>Premium ($29.99/mo for 5,000 Spells = $359.88/yr)</strong>{" "}
                  with zero unused-Spell rollover. By contrast,{" "}
                  <strong>ExamGhost AI</strong> gives you{" "}
                  <strong>50 Free Solves ($0)</strong> and{" "}
                  <strong>100% Unlimited Solves</strong> for{" "}
                  <strong>$19/month</strong> or <strong>$99/year ($8.25/mo)</strong>.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-rose-950">
                      Quiz Wizard Spell Tiers
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-200 text-rose-950 font-bold">
                      Metered Caps
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                    <li>• <strong>Free Tier:</strong> 50 Spells on <code className="font-mono text-xs">/pricing</code> (contradicts 100 in FAQ)</li>
                    <li>• <strong>Standard:</strong> $5.99/mo (capped at 500 Spells)</li>
                    <li>• <strong>Pro:</strong> $14.99/mo ($179.88/yr, capped at 2,000 Spells)</li>
                    <li>• <strong>Premium:</strong> $29.99/mo ($359.88/yr, capped at 5,000 Spells)</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-emerald-950">
                      ExamGhost AI Unlimited Passes
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-800 text-white font-bold">
                      Zero Spell Caps
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                    <li>• <strong>Free Trial:</strong> 50 Free Solves + Focus Shield ($0)</li>
                    <li>• <strong>Monthly Pass:</strong> $19/month (100% Unlimited Solves)</li>
                    <li>• <strong>Academic Year:</strong> $99/year ($8.25/mo — Unlimited)</li>
                    <li>• <strong>Lifetime Pass:</strong> $199 one-time • 14-day 100% refund guarantee</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Panel 2: 92% Base Models vs 99.4% STEM */}
            <div className="hidden peer-checked/qw-models:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase">
                  Base Model Ceiling Disclosure
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  &ldquo;All Plans Include Access to Our Base Models&rdquo;—Even at $29.99/Month
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Many students assume that upgrading to Quiz Wizard&apos;s{" "}
                  <strong>$14.99/mo Pro</strong> or{" "}
                  <strong>$29.99/mo Premium</strong> tier unlocks a deeper
                  frontier reasoning model for Calculus, Physics, or Organic
                  Chemistry. However, Quiz Wizard&apos;s own{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">/pricing</code>{" "}
                  page explicitly states:{" "}
                  <em>
                    &ldquo;All plans include access to our base models and core
                    browser features.&rdquo;
                  </em>
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  On its homepage, Quiz Wizard benchmarks that base-model visual
                  pipeline at a <strong>92% success rate</strong>. On a
                  50-question university midterm, a 92% ceiling means missing{" "}
                  <strong>4 questions automatically</strong> before accounting for
                  multi-step trick stems. <strong>ExamGhost AI</strong> routes
                  every solve—including all 50 free trial solves—through our{" "}
                  <strong>99.4% Mathpix LaTeX OCR + frontier STEM reasoning pipeline</strong>{" "}
                  in 0.3 seconds.
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#FAF8F5] border border-neutral-200 rounded-2xl p-6 space-y-4">
                <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-600 font-bold">
                  Accuracy &amp; Latency Benchmark (50-Q STEM Exam)
                </h4>
                <div className="bg-white rounded-xl p-4 border border-neutral-200">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Quiz Wizard (&ldquo;Base Models&rdquo; • ~4.2s)</span>
                    <span className="text-rose-700 font-mono">92.0% (~4 wrong)</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-rose-600 h-full w-[82%]" />
                  </div>
                  <p className="text-xs text-neutral-600 mt-2">
                    Same base model across $0, $5.99, $14.99, and $29.99/mo plans.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-emerald-700">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>ExamGhost AI (Frontier STEM + Mathpix • 0.3s)</span>
                    <span className="text-emerald-800 font-mono">99.4% Verified</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[99%]" />
                  </div>
                  <p className="text-xs text-neutral-600 mt-2">
                    Full symbolic math, organic chemistry structures, and circuit
                    analysis included on every tier.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 3: Toolbar Blur & Cloud History Risks */}
            <div className="hidden peer-checked/qw-stealth:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold uppercase">
                  Canvas SpeedGrader Telemetry Audit
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Why Clicking an Extension Icon Logs a Tab Departure—And Why Cloud Session Logs Matter
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Quiz Wizard instructs students to{" "}
                  <em>
                    &ldquo;simply click the extension while you have a question
                    open.&rdquo;
                  </em>{" "}
                  In Chrome, Edge, and Brave, clicking an extension icon in the
                  browser toolbar immediately steals active window focus from the
                  webpage—firing{" "}
                  <code className="font-mono text-xs bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                    window.onblur
                  </code>{" "}
                  and{" "}
                  <code className="font-mono text-xs bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                    document.visibilitychange
                  </code>{" "}
                  to Canvas SpeedGrader (&ldquo;Stopped viewing the Canvas
                  quiz-taking page&rdquo;).
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Additionally, every Quiz Wizard plan lists mandatory{" "}
                  <strong>&ldquo;History tracking &amp; session stats&rdquo;</strong>{" "}
                  stored on its cloud servers. <strong>ExamGhost AI</strong>{" "}
                  operates via silent in-tab keyboard hotkeys inside a{" "}
                  <strong>closed Shadow DOM root</strong> with active{" "}
                  <strong>Focus Shield</strong> blur suppression and an instant{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">Esc</code>{" "}
                  <strong>Panic RAM Flush</strong> that leaves zero cloud quiz
                  history.
                </p>
              </div>

              <div className="lg:col-span-5 bg-neutral-900 text-white rounded-2xl p-6 font-mono text-xs space-y-4">
                <div className="p-3.5 rounded-xl bg-rose-950/90 border border-rose-800 space-y-1.5">
                  <div className="text-rose-300 font-bold uppercase">
                    Quiz Wizard (Toolbar Click + Cloud Log)
                  </div>
                  <div className="text-rose-100/90">
                    1. Toolbar click → <code>window.dispatchEvent(&apos;blur&apos;)</code>
                  </div>
                  <div className="text-rose-100/90">
                    2. SpeedGrader → <code>&quot;Stopped viewing quiz page&quot;</code>
                  </div>
                  <div className="text-rose-100/90">
                    3. Server DB → <code>trackSessionStats: true</code>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-700 space-y-1.5">
                  <div className="text-emerald-300 font-bold uppercase">
                    ExamGhost AI (Closed Shadow DOM + Focus Shield)
                  </div>
                  <div className="text-emerald-100/90">
                    1. Hotkey trigger → <code>attachShadow(&#123; mode: &apos;closed&apos; &#125;)</code>
                  </div>
                  <div className="text-emerald-100/90">
                    2. Focus Shield → <code>e.stopImmediatePropagation()</code>
                  </div>
                  <div className="text-emerald-100/90">
                    3. Zero-Log RAM → <code>Esc Panic Purge (0 Cloud Logs)</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10-Point Comparison Matrix + Collapsible Technical Manifest Drawer */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              02 // Complete 10-Point Specification Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Quiz Wizard vs ExamGhost AI: Side-by-Side
            </h2>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#111111] overflow-hidden shadow-[6px_6px_0px_0px_#111111]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#111111] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="py-4 px-5 border-r border-neutral-800">
                      Evaluation Dimension
                    </th>
                    <th className="py-4 px-5 border-r border-neutral-800 text-neutral-300">
                      Why It Matters on Timed Exams
                    </th>
                    <th className="py-4 px-5 border-r border-neutral-800 text-emerald-300">
                      ExamGhost (v4.2)
                    </th>
                    <th className="py-4 px-5 text-neutral-300">
                      Quiz Wizard (Beta)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Release Maturity &amp; Scale
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Production stability during finals week
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      Production v4.2 Edge Network
                    </td>
                    <td className="py-3.5 px-5 text-rose-800 font-medium">
                      &ldquo;Beta Test&rdquo; (~50 Daily Users)
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Closed Shadow DOM HUD
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Zero inspectable DOM nodes or CSS leaks
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      100% Isolated
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-700 inline mr-1" />{" "}
                      Unshielded Extension UI
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Canvas Focus Shield
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Blocks window.blur, visibilitychange &amp; mouseleave
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      Active Suppression
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-700 inline mr-1" />{" "}
                      Logs Tab Departures
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      AI Model Quality &amp; Accuracy
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Multi-step calculus, physics, and organic chem
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      99.4% Mathpix + Frontier STEM
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      92% (&ldquo;Base Models&rdquo; on All Plans)
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Free Tier Allowance
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Risk-free testing before upgrading
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      50 Free Solves + Focus Shield
                    </td>
                    <td className="py-3.5 px-5 text-neutral-700">
                      50 Spells (/pricing) vs 100 (FAQ)
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Usage Metering
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Whether paid tiers cut you off mid-semester
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      100% Unlimited Solves
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      Capped at 500 / 2,000 / 5,000 Spells
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Panic RAM Flush (Esc)
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Instant memory purge &amp; zero cloud history
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      Instant Zero-Trace Purge
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-700 inline mr-1" />{" "}
                      Logs Session Stats to Cloud
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Canvas New Quizzes (LTI Iframe)
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Cross-origin iframe context extraction
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      Native + Snap-It OCR
                    </td>
                    <td className="py-3.5 px-5 text-neutral-700">
                      Full-Screen Bitmap Upload Only
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Average Solving Latency
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Time from trigger to verified answer
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      0.3s Edge Compute
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      ~4.2s Visual Screen Analysis
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Paid Pricing Structure
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Total annual or degree cost
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      $19/mo · $99/yr · $199 Lifetime
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      $5.99–$29.99/mo ($359.88/yr Max)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Manifest & Codebase Audit Drawer */}
            <details className="group border-t-2 border-[#111111] bg-[#FAF8F5]">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-800 hover:bg-neutral-200/60 transition-colors">
                <h3 className="flex items-center gap-2 m-0 inline">
                  <Code2 className="w-4 h-4 text-emerald-800" />
                  Technical Chrome Web Store &amp; Domain Audit (quizwizard.app)
                </h3>
                <span className="text-emerald-800 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-xs font-mono text-neutral-700 space-y-3 border-t border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Extension &amp; Site Build Metadata
                    </div>
                    <div>• Domain: quizwizard.app</div>
                    <div>
                      • Chrome Web Store ID:{" "}
                      <code>dbdlpnflbhppbhpleflgbecaloaombpj</code>
                    </div>
                    <div>
                      • Site Generator Meta:{" "}
                      <code>&lt;meta name=&quot;generator&quot; content=&quot;v0.app&quot;/&gt;</code>{" "}
                      (with <code>/moscot-running.png</code> asset paths)
                    </div>
                    <div>
                      • Live Banner Status:{" "}
                      <code>&quot;Quiz Wizard is currently in Beta Test&quot;</code>{" "}
                      • Self-reported 50+ daily users &amp; 2,500+ daily Spells
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Billing &amp; Model Disclosures
                    </div>
                    <div>
                      • Merchant of Record: PayPro Global (monthly recurring
                      Spell plans: $5.99 Standard, $14.99 Pro, $29.99 Premium)
                    </div>
                    <div>
                      • Verbatim Model Disclosure on <code>/pricing</code>:{" "}
                      <code>
                        &quot;All plans include access to our base models and
                        core browser features.&quot;
                      </code>
                    </div>
                    <div>
                      • Mandatory Telemetry: All tiers include{" "}
                      <code>&quot;History tracking &amp; session stats&quot;</code>{" "}
                      saved to Quiz Wizard servers
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* Verified Student Switcher Proof */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <div className="p-8 rounded-3xl bg-white border-2 border-[#111111] shadow-[6px_6px_0px_0px_#111111]">
            <div className="flex items-center gap-1 text-amber-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="text-xs font-mono font-bold text-[#111111] ml-2">
                Verified Student Switcher
              </span>
            </div>
            <blockquote className="text-base sm:text-lg text-[#111111] font-medium leading-relaxed mb-6">
              &ldquo;I tried Quiz Wizard because of the free Spells, but first I
              noticed the pricing page only gave 50 Spells instead of the 100
              promised in their FAQ. Worse, clicking the extension icon during a
              Canvas practice quiz logged &apos;stopped viewing the Canvas
              quiz-taking page&apos; every single time. ExamGhost&apos;s
              $99/year pass gives me unlimited solves, 0.3s speed, and my Canvas
              quiz logs stay 100% clean.&rdquo;
            </blockquote>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-4">
              <div>
                <div className="font-bold text-[#111111] text-sm">Tyler M.</div>
                <div className="text-xs text-neutral-600">
                  University of Central Florida · Computer Engineering
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-mono text-xs font-bold">
                Switched from Quiz Wizard Pro
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              03 // Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Frequently Asked Questions: Quiz Wizard vs ExamGhost
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                What is a &ldquo;Spell&rdquo; in Quiz Wizard and how many do you get for free?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                On <code className="font-mono text-xs">quizwizard.app</code>, 1
                &ldquo;Spell&rdquo; equals a single AI-generated question
                explanation. Notably, Quiz Wizard&apos;s homepage FAQ claims
                users receive{" "}
                <em>&ldquo;100 free AI explanations every month,&rdquo;</em>{" "}
                whereas its live{" "}
                <code className="font-mono text-xs">/pricing</code> page
                restricts the Free ($0/month) tier to <strong>50 Spells</strong>.
                Paid plans charge $5.99/mo (500 Spells), $14.99/mo (2,000
                Spells), or $29.99/mo (5,000 Spells) via PayPro Global.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Do Quiz Wizard&apos;s $14.99 Pro or $29.99 Premium plans unlock smarter AI models?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                No. Quiz Wizard&apos;s{" "}
                <code className="font-mono text-xs">/pricing</code> page
                explicitly states:{" "}
                <em>
                  &ldquo;All plans include access to our base models and core
                  browser features.&rdquo;
                </em>{" "}
                Upgrading from $0 to $29.99/month ($359.88/year) only increases
                your monthly Spell quota—it does not upgrade reasoning depth or
                add proctor stealth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Is Quiz Wizard safe to use on monitored Canvas or Blackboard exams?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                No. Quiz Wizard is an unshielded Beta visual tutor that captures
                screen context without a Canvas Focus Shield. Clicking the
                extension icon in your browser toolbar dispatches{" "}
                <code className="font-mono text-xs">window.blur</code> and{" "}
                <code className="font-mono text-xs">
                  document.visibilitychange
                </code>{" "}
                events directly to Canvas SpeedGrader. ExamGhost isolates its
                HUD inside a closed Shadow DOM and suppresses all
                blur/visibility telemetry.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                How does ExamGhost&apos;s pricing compare to Quiz Wizard&apos;s monthly Spell tiers?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Quiz Wizard charges up to $14.99/month ($179.88/year) for Pro or
                $29.99/month ($359.88/year) for Premium Spell quotas. ExamGhost
                includes <strong>50 Free Solves ($0)</strong> (with full Focus
                Shield + 10 Snap-It OCR snips), a <strong>$19/month</strong>{" "}
                Midterm Sprint pass, a{" "}
                <strong>$99/year Academic Year Pass</strong> ($8.25/mo,
                Unlimited Solves), and a{" "}
                <strong>$199 one-time Lifetime Degree Pass</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Bespoke Pastel Conversion Strip + Related Comparisons (No Stacked Dark Box) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 via-[#FAF8F5] to-emerald-50 border-2 border-[#111111] rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_#111111] mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-purple-900 font-bold mb-2">
                  14-Day 100% Money-Back Guarantee • Zero Telemetry Leaks
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mb-3">
                  Stop Paying $29.99/Mo for &ldquo;Base Model&rdquo; Beta Spells
                </h2>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Switch to ExamGhost for 0.3s Mathpix STEM accuracy, a 100%
                  closed Shadow DOM HUD, and active Canvas Focus Shield
                  protection—starting with <strong>50 free solves ($0)</strong>.
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
                    Try Live Stealth Demo
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
                  Related Extension Comparisons
                </div>
                <div className="space-y-2.5 text-sm font-medium">
                  <Link prefetch={false}
                    href="/canvaswizard-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Canvas Wizard vs ExamGhost</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/quizard-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Quizard AI vs ExamGhost</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/quizzy-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Quizzy App vs ExamGhost</span>
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
