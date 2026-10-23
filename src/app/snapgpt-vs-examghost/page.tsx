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
  EyeOff,
  Lock,
  CreditCard,
  Code2,
  WifiOff,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: {
        absolute: "SnapGPT vs ExamGhost (2026) — opacity:0 DOM vs Shadow DOM",
    },
    description: "2026 technical audit of SnapGPT ($7.99/wk) vs ExamGhost. Why opacity:0 DOM nodes and OpenReplay logging lose to 0.3s closed Shadow DOM & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/snapgpt-vs-examghost",
    },
    openGraph: {
        title: "SnapGPT vs ExamGhost (2026) — opacity:0 DOM vs Shadow DOM",
        description: "2026 technical audit of SnapGPT ($7.99/wk) vs ExamGhost. Why opacity:0 DOM nodes and OpenReplay logging lose to 0.3s closed Shadow DOM & 50 Free Solves.",
        url: "https://examghost.com/snapgpt-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "SnapGPT vs ExamGhost (2026) — opacity:0 DOM vs Shadow DOM",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SnapGPT vs ExamGhost (2026) — opacity:0 DOM vs Shadow DOM",
        description: "2026 technical audit of SnapGPT ($7.99/wk) vs ExamGhost. Why opacity:0 DOM nodes and OpenReplay logging lose to 0.3s closed Shadow DOM & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function SnapgptVsExamghostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-02-21",
                "dateModified": "2026-03-26",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/snapgpt-vs-examghost#webpage",
        url: "https://examghost.com/snapgpt-vs-examghost",
        name: "SnapGPT vs ExamGhost (2026) | Closed Shadow DOM vs 'Subtle Mode' opacity:0",
        description:
          "2026 technical comparison between SnapGPT (snapgpt.me) and ExamGhost covering Subtle Mode DOM visibility, Autopilot & Sidebar Chat telemetry, OpenReplay tracking, and pricing.",
        breadcrumb: {
          "@id": "https://examghost.com/snapgpt-vs-examghost#breadcrumb",
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
            name: "SnapGPT",
            url: "https://www.snapgpt.me/",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Chrome, Firefox, iOS (TestFlight Beta)",
            offers: [
              {
                "@type": "Offer",
                name: "Free (5 Screenshots/Day)",
                price: "0",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Plus Weekly",
                price: "7.99",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Plus Monthly",
                price: "9.99",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Plus Annual",
                price: "89.99",
                priceCurrency: "USD",
              },
            ],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://examghost.com/snapgpt-vs-examghost#breadcrumb",
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
            name: "SnapGPT vs ExamGhost",
            item: "https://examghost.com/snapgpt-vs-examghost",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://examghost.com/snapgpt-vs-examghost#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What happened to snapgpt.io and why is snapgpt.me blocked on campus networks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The original snapgpt.io domain is offline (DNS lookup fails with no such host). SnapGPT now operates at snapgpt.me and displays a corner warning banner directing students on blocked university networks to an alternate CloudFront mirror URL.",
            },
          },
          {
            "@type": "Question",
            name: "Does SnapGPT's 'Subtle mode' hide the extension from Canvas or proctoring scripts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. As SnapGPT's own codebase and interactive demo explain ('Still there — just transparent. Click it.'), Subtle mode merely applies opacity: 0 (.invisible { opacity: 0; }) to its 52x52px bottom-left camera button while leaving the button node in the live DOM and mutating quiz option styles (.correct) when revealing answers. ExamGhost encapsulates its entire HUD inside a closed Shadow DOM (attachShadow({ mode: 'closed' })) with zero host-page CSS mutations.",
            },
          },
          {
            "@type": "Question",
            name: "Does SnapGPT log customer chats or session replays?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Inspecting snapgpt.me's production HTML reveals embedded OpenReplay session recording (/js/openreplay-init.js), PostHog analytics, Reddit Ads pixels, and an internal admin menu referencing '/admin/chats/ (Browse and search every conversation)' and 'replay.snapgpt.me (OpenReplay recordings)'. ExamGhost processes all exam crops in ephemeral RAM with an instant Panic RAM Flush (Esc) and zero chat storage.",
            },
          },
          {
            "@type": "Question",
            name: "How does SnapGPT's 2026 pricing compare to ExamGhost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SnapGPT's Free plan is capped at 5 screenshot answers per day (with AI chat, explanations, and Autopilot locked). SnapGPT Plus costs $7.99/week (~$34.60/month), $9.99/month, or $89.99/year. ExamGhost gives you 50 Free Solves (including full Focus Shield + 10 Snap-It OCR snips), a $19/month pass, a $99/year Academic Year Pass ($8.25/mo), or a $199 one-time Lifetime Degree Pass.",
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
              SnapGPT vs ExamGhost
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: High-Converting SaaS Copy & Hero CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-mono uppercase tracking-widest mb-5">
                <EyeOff className="w-3.5 h-3.5 text-rose-800" />
                <span>2026 Source-Code Audit • snapgpt.me (snapgpt.io Offline)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-5">
                SnapGPT&apos;s &ldquo;Subtle Mode&rdquo; Is Just{" "}
                <code className="font-mono text-2xl sm:text-4xl bg-rose-100 text-rose-900 px-2 py-0.5 rounded">
                  opacity: 0
                </code>
                . ExamGhost Runs in a Closed Shadow DOM.
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
                After <code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">snapgpt.io</code>{" "}
                went offline, <strong>SnapGPT</strong> migrated to{" "}
                <code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">snapgpt.me</code>{" "}
                (plus a fallback CloudFront mirror for blocked campus Wi-Fi).
                When we audited its live CSS and scripts, we discovered that
                SnapGPT&apos;s advertised <strong>&ldquo;Subtle mode&rdquo;</strong>{" "}
                simply applies{" "}
                <code className="font-mono text-sm bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                  .invisible &#123; opacity: 0; &#125;
                </code>{" "}
                to a <code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">52×52px</code>{" "}
                button left sitting in the page DOM—while painting green{" "}
                <code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">#2ecc71</code>{" "}
                borders directly onto your Canvas answer choices and logging
                sessions via OpenReplay.
              </p>

              {/* 3 Fast Scannable Stat Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    DOM Stealth
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-emerald-800">Closed Shadow Root</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    vs opacity:0 node in live DOM
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Session Privacy
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-emerald-800">Zero-Log RAM + Esc</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    vs OpenReplay &amp; /admin/chats/
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Free Trial Quota
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-rose-700 line-through mr-1.5">5/Day</span>
                    <span className="text-emerald-800">50 Free Solves</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    Full math steps unlocked ($0)
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
                  href="#subtle-mode-audit"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold hover:underline px-2 py-2"
                >
                  Inspect opacity:0 Flaw ↓
                </a>
              </div>
            </div>

            {/* Right Column: Bespoke opacity:0 Subtle Mode vs Closed Shadow DOM Inspector */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-[#111111] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#111111]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 ml-1">
                      DOM &amp; MutationObserver Scanner
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                    Canvas .question_holder
                  </span>
                </div>

                {/* Top Simulator Card: SnapGPT Subtle Mode */}
                <div className="rounded-2xl bg-rose-50/80 border border-rose-200 p-4 mb-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-rose-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                      SnapGPT (&ldquo;Subtle Mode&rdquo; Active)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-200/80 text-rose-950">
                      ~3.7s Upload
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80">
                      <div className="text-neutral-500 text-[11px]">
                        1. Bottom-left 52×52px button in DOM:
                      </div>
                      <div className="text-rose-800 font-bold">
                        .demo-snap-btn.invisible &#123; opacity: 0; &#125;
                      </div>
                    </div>
                    <div className="bg-white/90 rounded-lg p-2.5 border border-rose-200/80">
                      <div className="text-neutral-500 text-[11px]">
                        2. Mutates Canvas answer option CSS:
                      </div>
                      <div className="text-rose-800 font-bold">
                        box-shadow: inset 0 0 0 2px #2ecc71 ⚠️
                      </div>
                    </div>
                    <div className="bg-rose-950 text-rose-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>Admin &amp; Session Telemetry:</span>
                      <span className="text-rose-300 font-bold">
                        OpenReplay + /admin/chats/
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Simulator Card: ExamGhost AI */}
                <div className="rounded-2xl bg-emerald-50/90 border-2 border-emerald-700 p-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-950 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      ExamGhost AI v4.2 (Closed Shadow DOM)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-200 text-emerald-950">
                      0.3s Edge OCR
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200">
                      <div className="text-neutral-500 text-[11px]">
                        1. Hardware-isolated UI encapsulation:
                      </div>
                      <div className="text-emerald-800 font-bold">
                        attachShadow(&#123; mode: &apos;closed&apos; &#125;) → null ✓
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200">
                      <div className="text-neutral-500 text-[11px]">
                        2. Host page .question_holder CSS touched:
                      </div>
                      <div className="text-emerald-800 font-bold">
                        0 Mutations • 0 Sidebar Resizes ✓
                      </div>
                    </div>
                    <div className="bg-emerald-950 text-emerald-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>Session Storage:</span>
                      <span className="text-emerald-300 font-bold">
                        Ephemeral RAM + Esc Purge ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Pure-CSS 3-Tab Source-Code & Privacy Explorer */}
        <section
          id="subtle-mode-audit"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              01 // Interactive Source-Code &amp; Privacy Teardown
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Click Any Tab to Inspect What We Found in SnapGPT&apos;s Live Code
            </h2>
            <p className="text-neutral-700 mt-2 max-w-3xl text-sm sm:text-base">
              Hiding a button from human eyes with CSS transparency is not the
              same as isolating an extension from LMS scripts. Select an audit
              tab below to compare SnapGPT against ExamGhost AI.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111111] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#111111]">
            {/* Pure CSS Radio Inputs */}
            <input
              type="radio"
              name="sg-tabs"
              id="tab-sg-subtle"
              className="sr-only peer/sg-subtle"
              defaultChecked
            />
            <input
              type="radio"
              name="sg-tabs"
              id="tab-sg-privacy"
              className="sr-only peer/sg-privacy"
            />
            <input
              type="radio"
              name="sg-tabs"
              id="tab-sg-pricing"
              className="sr-only peer/sg-pricing"
            />

            {/* Tab Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-6 mb-8 border-b border-neutral-200">
              <label
                htmlFor="tab-sg-subtle"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/sg-subtle:border-[#111111] peer-checked/sg-subtle:bg-emerald-950 peer-checked/sg-subtle:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <EyeOff className="w-4 h-4" />
                  <span>Tab 01 • DOM &amp; Subtle Mode</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  Why opacity:0 &amp; Autopilot Fail Scanners
                </div>
              </label>

              <label
                htmlFor="tab-sg-privacy"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/sg-privacy:border-[#111111] peer-checked/sg-privacy:bg-emerald-950 peer-checked/sg-privacy:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <Lock className="w-4 h-4" />
                  <span>Tab 02 • Privacy &amp; Wi-Fi Blocks</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  OpenReplay, /admin/chats/ &amp; Dead Domains
                </div>
              </label>

              <label
                htmlFor="tab-sg-pricing"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/sg-pricing:border-[#111111] peer-checked/sg-pricing:bg-emerald-950 peer-checked/sg-pricing:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <CreditCard className="w-4 h-4" />
                  <span>Tab 03 • Free Caps &amp; Billing</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  5/Day Locked Free Tier vs 50 Free Solves
                </div>
              </label>
            </div>

            {/* Panel 1: opacity:0 & Autopilot */}
            <div className="hidden peer-checked/sg-subtle:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold uppercase">
                  CSS Transparency vs True Shadow DOM Isolation
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  &ldquo;Still There — Just Transparent&rdquo;: How Subtle Mode &amp; Autopilot Mutate Your Quiz Page
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  SnapGPT pins a <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">52px × 52px</code>{" "}
                  viewfinder button (<code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">css/button.css</code>)
                  at the bottom-left corner of your browser (<code className="font-mono text-xs">left: 16px; bottom: 16px</code>).
                  When you enable <strong>&ldquo;Subtle mode,&rdquo;</strong>{" "}
                  SnapGPT&apos;s own interactive demo explains:{" "}
                  <em>&ldquo;Still there — just transparent. Click it.&rdquo;</em>{" "}
                  Under the hood, it merely applies{" "}
                  <code className="font-mono text-xs bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                    .invisible &#123; opacity: 0; &#125;
                  </code>
                  .
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Any school script running{" "}
                  <code className="font-mono text-xs">document.querySelectorAll</code>{" "}
                  or a <code className="font-mono text-xs">MutationObserver</code>{" "}
                  doesn&apos;t care about CSS opacity—it sees the injected button
                  node immediately. Worse, when SnapGPT reveals or auto-solves an
                  answer, it either paints a green{" "}
                  <code className="font-mono text-xs">#2ecc71</code> border (
                  <code className="font-mono text-xs">.correct</code>) directly
                  onto Canvas <code className="font-mono text-xs">.question_holder</code>{" "}
                  elements or opens a full-height <strong>Sidebar Chat</strong>{" "}
                  that triggers <code className="font-mono text-xs">window.blur</code>{" "}
                  and viewport resize logs.
                </p>
              </div>

              <div className="lg:col-span-5 bg-neutral-900 text-white rounded-2xl p-6 font-mono text-xs space-y-4">
                <div className="p-3.5 rounded-xl bg-rose-950/90 border border-rose-800 space-y-1.5">
                  <div className="text-rose-300 font-bold uppercase">
                    SnapGPT Live CSS (snapgpt.me)
                  </div>
                  <div className="text-rose-100/90">
                    <code>.demo-snap-btn.invisible &#123; opacity: 0; &#125;</code>
                  </div>
                  <div className="text-rose-100/90">
                    <code>.demo-option.correct &#123;</code>
                  </div>
                  <div className="text-rose-100/90 pl-3">
                    <code>background: #e9faf0;</code>
                  </div>
                  <div className="text-rose-100/90 pl-3">
                    <code>box-shadow: inset 0 0 0 2px #2ecc71;</code>
                  </div>
                  <div className="text-rose-100/90">
                    <code>&#125; /* Mutates host quiz DOM */</code>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-700 space-y-1.5">
                  <div className="text-emerald-300 font-bold uppercase">
                    ExamGhost Closed Shadow DOM
                  </div>
                  <div className="text-emerald-100/90">
                    <code>const root = host.attachShadow(&#123; mode: &apos;closed&apos; &#125;);</code>
                  </div>
                  <div className="text-emerald-100/90">
                    <code>// Zero host .question_holder CSS edits</code>
                  </div>
                  <div className="text-emerald-100/90">
                    <code>// Focus Shield blocks blur &amp; visibility traps</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: OpenReplay, /admin/chats/ & Campus Wi-Fi Blocks */}
            <div className="hidden peer-checked/sg-privacy:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase">
                  Session Recording &amp; Network Reliability Audit
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Why Does SnapGPT Run OpenReplay Session Recording and an /admin/chats/ Console?
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Although SnapGPT&apos;s footer claims{" "}
                  <em>&ldquo;Learning first. Privacy always,&rdquo;</em>{" "}
                  inspecting the production HTML on{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                    snapgpt.me
                  </code>{" "}
                  reveals a heavy third-party surveillance stack: it loads{" "}
                  <strong>OpenReplay session recording</strong> (
                  <code className="font-mono text-xs">replay.snapgpt.me</code>),{" "}
                  <strong>PostHog analytics</strong>, and{" "}
                  <strong>Reddit Ads tracking pixels</strong>. Even more
                  concerning, its embedded admin navigation menu contains links
                  for:{" "}
                  <em>
                    &ldquo;/admin/chats/ — Customer chats: Browse and search
                    every conversation&rdquo;
                  </em>{" "}
                  and{" "}
                  <em>
                    &ldquo;replay.snapgpt.me — Session replay: OpenReplay
                    recordings.&rdquo;
                  </em>
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  On top of privacy concerns, SnapGPT&apos;s original{" "}
                  <code className="font-mono text-xs">snapgpt.io</code> domain is
                  dead, and <code className="font-mono text-xs">snapgpt.me</code>{" "}
                  is frequently blocked on university Wi-Fi firewalls—forcing
                  SnapGPT to display a corner banner telling students to use a
                  raw CloudFront mirror URL. <strong>ExamGhost AI</strong>{" "}
                  processes every solve in ephemeral edge RAM with zero stored
                  chat logs and an instant{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                    Esc
                  </code>{" "}
                  <strong>Panic RAM Flush</strong>.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-rose-900 mb-2">
                    <WifiOff className="w-4 h-4 text-rose-700" />
                    <span>SnapGPT Privacy &amp; Domain Risks</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-800">
                    <li>• Original <code className="font-mono text-xs">snapgpt.io</code> domain is offline (DNS failure)</li>
                    <li>• <code className="font-mono text-xs">snapgpt.me</code> blocked on many dorm networks (requires CloudFront mirror)</li>
                    <li>• Embeds OpenReplay session recording + <code className="font-mono text-xs">/admin/chats/</code> conversation viewer</li>
                    <li>• Self-hosts Firefox <code className="font-mono text-xs">.xpi</code> on a raw AWS S3 bucket</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-emerald-950 mb-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>ExamGhost Zero-Log Standard</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-800">
                    <li>• Ephemeral edge RAM processing—zero searchable chat database</li>
                    <li>• Zero OpenReplay screen recording on your account</li>
                    <li>• 1-key <code className="font-mono text-xs">Esc</code> Panic RAM Flush unmounts HUD in &lt;10ms</li>
                    <li>• Clean, unblocked enterprise TLS edge routing on all campus Wi-Fi</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Panel 3: 5/Day Free Cap vs 50 Free Solves */}
            <div className="hidden peer-checked/sg-pricing:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase">
                  Free Trial &amp; Subscription Value Audit
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  5 Screenshots/Day (With Explanations Locked) vs 50 Full Free Solves
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  SnapGPT&apos;s Free plan cuts you off after just{" "}
                  <strong>5 screenshot answers per day</strong>—and locks AI
                  follow-up chat, step-by-step explanations, and Autopilot behind
                  a paywall. If you select its weekly billing option,{" "}
                  <strong>SnapGPT Plus charges $7.99/week (~$34.60/month)</strong>,
                  or $9.99/month ($89.99/year), with no lifetime ownership tier.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  <strong>ExamGhost AI</strong> gives every student{" "}
                  <strong>50 Free Question Solves ($0, no credit card required)</strong>{" "}
                  with full step-by-step Mathpix LaTeX explanations, 10 Snap-It
                  Vision OCR snips, and active Canvas Focus Shield included from
                  solve #1. When you upgrade, choose our{" "}
                  <strong>$19/month Monthly Pass</strong>,{" "}
                  <strong>$99/year Academic Year Pass ($8.25/mo)</strong>, or{" "}
                  <strong>$199 one-time Lifetime Degree Pass</strong>—all backed
                  by a <strong>14-day 100% money-back guarantee</strong>.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#FAF8F5] border border-neutral-300 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-[#111111]">
                      SnapGPT Tiers (2026)
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-rose-100 text-rose-900 font-bold">
                      5/Day Free Cap
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700">
                    <li>• <strong>Free Tier:</strong> 5 screenshots/day (Explanations &amp; Chat locked)</li>
                    <li>• <strong>Plus Weekly:</strong> $7.99/week (~$34.60/mo equivalent)</li>
                    <li>• <strong>Plus Monthly / Annual:</strong> $9.99/mo or $89.99/yr</li>
                    <li>• <strong>Lifetime Option:</strong> None (recurring billing only)</li>
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
                    <li>• <strong>Free Trial:</strong> 50 Free Solves + Full Steps + Focus Shield ($0)</li>
                    <li>• <strong>Monthly Pass:</strong> $19/month (100% Unlimited)</li>
                    <li>• <strong>Academic Year:</strong> $99/year ($8.25/mo)</li>
                    <li>• <strong>Lifetime Pass:</strong> $199 one-time • 14-day 100% refund guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10-Point Comparison Matrix + Collapsible Technical Source-Code Drawer */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              02 // Complete 10-Point Specification Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              SnapGPT vs ExamGhost AI: Side-by-Side
            </h2>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#111111] overflow-hidden shadow-[6px_6px_0px_0px_#111111]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#111111] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="py-4 px-5 border-r border-neutral-800">
                      Feature &amp; Stealth Capability
                    </th>
                    <th className="py-4 px-5 border-r border-neutral-800 text-neutral-300">
                      Technical Significance
                    </th>
                    <th className="py-4 px-5 border-r border-neutral-800 text-emerald-300">
                      ExamGhost (v4.2)
                    </th>
                    <th className="py-4 px-5 text-neutral-300">
                      SnapGPT (snapgpt.me)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      UI Isolation Mechanism
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Protection against DOM &amp; CSS scanners
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      Closed Shadow DOM
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-700 inline mr-1" />{" "}
                      opacity: 0 Button in DOM
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Host Page DOM Integrity
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Avoids triggering Canvas MutationObservers
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      Zero Host Mutations
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-700 inline mr-1" />{" "}
                      Injects .correct &amp; Autopilot Clicks
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Canvas Focus Shield
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Suppresses window.blur &amp; visibilitychange
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      Active Suppression
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-700 inline mr-1" />{" "}
                      Sidebar Chat Logs Blurs
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Campus Wi-Fi Domain Reputation
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Loads reliably on university networks
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      Clean Edge Routing
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      snapgpt.io Dead · Needs CloudFront Mirror
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Mathpix Neural STEM OCR
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      99.4% accuracy on matrices, integrals &amp; chem
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      Built-In
                    </td>
                    <td className="py-3.5 px-5 text-neutral-700">
                      Generic Screenshot Vision
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Conversation &amp; Session Privacy
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Whether admins can read your solved questions
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      Ephemeral RAM + Esc Flush
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-700 inline mr-1" />{" "}
                      OpenReplay + /admin/chats/
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Free Tier Allowance
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      What you get before entering a card
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      50 Free Solves + Explanations
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      5 Screenshots/Day (Explanations Locked)
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Solving Speed
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      End-to-end latency on timed quizzes
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      0.3s Edge Latency
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      ~3.7s ScreenSnap Upload
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Flexible Billing Options
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      Short-term vs annual vs permanent access
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      $19/mo · $99/yr · $199 Lifetime
                    </td>
                    <td className="py-3.5 px-5 text-neutral-700">
                      $7.99/wk · $9.99/mo · $89.99/yr
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Lifetime Degree License
                    </td>
                    <td className="py-3.5 px-5 text-neutral-600 border-r border-neutral-200">
                      One-time payment option with zero renewals
                    </td>
                    <td className="py-3.5 px-5 text-emerald-900 font-bold border-r border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />{" "}
                      $199 One-Time
                    </td>
                    <td className="py-3.5 px-5 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-700 inline mr-1" />{" "}
                      Recurring Subscriptions Only
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Manifest & Source-Code Audit Drawer */}
            <details className="group border-t-2 border-[#111111] bg-[#FAF8F5]">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-800 hover:bg-neutral-200/60 transition-colors">
                <h3 className="flex items-center gap-2 m-0 inline">
                  <Code2 className="w-4 h-4 text-emerald-800" />
                  Technical Chrome Web Store, Mirror &amp; Telemetry Audit (snapgpt.me)
                </h3>
                <span className="text-emerald-800 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-xs font-mono text-neutral-700 space-y-3 border-t border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Domain &amp; Extension Package Identifiers
                    </div>
                    <div>
                      • Legacy Domain: <code>snapgpt.io</code> (offline; DNS
                      lookup fails with <code>no such host</code>)
                    </div>
                    <div>
                      • Active Domain: <code>snapgpt.me</code> • Campus Wi-Fi
                      Fallback Mirror: <code>d9tu8nuk31nog.cloudfront.net</code>
                    </div>
                    <div>
                      • Chrome Web Store ID:{" "}
                      <code>hfkialeflompnefhcibnaabjpmimablh</code>
                    </div>
                    <div>
                      • Self-Hosted Firefox Package:{" "}
                      <code>
                        snapgpt-firefox-extension-files.s3.us-east-1.amazonaws.com/snapgpt-latest.xpi
                      </code>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Source-Code CSS &amp; Surveillance Endpoints
                    </div>
                    <div>
                      • Subtle Mode Button CSS:{" "}
                      <code>.demo-snap-btn.invisible &#123; opacity: 0; &#125;</code>{" "}
                      on <code>52px × 52px</code> button (<code>left: 16px; bottom: 16px</code>)
                    </div>
                    <div>
                      • Session Replay &amp; Analytics:{" "}
                      <code>/js/openreplay-init.js</code> (
                      <code>replay.snapgpt.me</code>), PostHog, Reddit Ads Pixel
                    </div>
                    <div>
                      • Admin Route Exposed in HTML:{" "}
                      <code>
                        /admin/chats/ (&quot;Customer chats — Browse and search
                        every conversation&quot;)
                      </code>
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
              &ldquo;First snapgpt.io stopped working, and then snapgpt.me got
              blocked on our dorm Wi-Fi so I had to use their CloudFront link.
              When I saw that &apos;Subtle mode&apos; just makes the
              bottom-left button invisible while still painting green borders
              directly onto my Canvas quiz answers, I uninstalled it
              immediately. ExamGhost&apos;s closed Shadow DOM HUD never touches
              the Canvas page HTML and solves in 0.3 seconds.&rdquo;
            </blockquote>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-4">
              <div>
                <div className="font-bold text-[#111111] text-sm">Chloe S.</div>
                <div className="text-xs text-neutral-600">
                  Florida State University · B.S. Nursing
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-mono text-xs font-bold">
                Switched from SnapGPT Plus
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
              Frequently Asked Questions: SnapGPT vs ExamGhost
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                What happened to snapgpt.io and why is snapgpt.me blocked on campus networks?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                The original <code className="font-mono text-xs">snapgpt.io</code>{" "}
                domain is offline (DNS lookup fails with{" "}
                <code className="font-mono text-xs">no such host</code>).
                SnapGPT now operates at{" "}
                <code className="font-mono text-xs">snapgpt.me</code> and
                displays a corner warning banner directing students on blocked
                university networks to an alternate CloudFront mirror URL.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Does SnapGPT&apos;s &ldquo;Subtle mode&rdquo; hide the extension from Canvas or proctoring scripts?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                No. As SnapGPT&apos;s own codebase and interactive demo explain
                (<em>&ldquo;Still there — just transparent. Click it.&rdquo;</em>
                ), Subtle mode merely applies{" "}
                <code className="font-mono text-xs">opacity: 0</code> to its
                52×52px bottom-left camera button while leaving the button node
                in the live DOM and mutating quiz option styles (
                <code className="font-mono text-xs">.correct</code>) when
                revealing answers. ExamGhost encapsulates its entire HUD inside
                a closed Shadow DOM with zero host-page CSS mutations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Does SnapGPT log customer chats or session replays?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Inspecting <code className="font-mono text-xs">snapgpt.me</code>
                &apos;s production HTML reveals embedded OpenReplay session
                recording, PostHog analytics, Reddit Ads pixels, and an internal
                admin menu referencing{" "}
                <code className="font-mono text-xs">/admin/chats/</code> (
                <em>&ldquo;Browse and search every conversation&rdquo;</em>).
                ExamGhost processes all exam crops in ephemeral RAM with an
                instant Panic RAM Flush (
                <code className="font-mono text-xs">Esc</code>) and zero chat
                storage.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                How does SnapGPT&apos;s 2026 pricing compare to ExamGhost?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                SnapGPT&apos;s Free plan is capped at{" "}
                <strong>5 screenshot answers per day</strong> (with AI chat,
                explanations, and Autopilot locked). SnapGPT Plus costs{" "}
                <strong>$7.99/week</strong> (~$34.60/month),{" "}
                <strong>$9.99/month</strong>, or <strong>$89.99/year</strong>.
                ExamGhost gives you <strong>50 Free Solves ($0)</strong>{" "}
                (including full Focus Shield + 10 Snap-It OCR snips), a{" "}
                <strong>$19/month</strong> pass, a{" "}
                <strong>$99/year Academic Year Pass</strong> ($8.25/mo), or a{" "}
                <strong>$199 one-time Lifetime Degree Pass</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Bespoke Pastel Conversion Strip + Related Comparisons (No Stacked Dark Box) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-rose-50 via-[#FAF8F5] to-emerald-50 border-2 border-[#111111] rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_#111111] mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-emerald-900 font-bold mb-2">
                  True Closed Shadow DOM • 14-Day 100% Refund Guarantee
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mb-3">
                  Don&apos;t Trust Your GPA to an{" "}
                  <code className="font-mono text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                    opacity: 0
                  </code>{" "}
                  Button
                </h2>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Upgrade from SnapGPT to ExamGhost&apos;s 100% isolated closed
                  Shadow DOM HUD, active Canvas Focus Shield, and 0.3s Mathpix
                  STEM engine—starting with <strong>50 free solves ($0)</strong>.
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
                  Related Extension Audits
                </div>
                <div className="space-y-2.5 text-sm font-medium">
                  <Link prefetch={false}
                    href="/answerly-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Answerly vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/examclutch-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>ExamClutch vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/quizmate-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>QuizMate vs ExamGhost AI</span>
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
