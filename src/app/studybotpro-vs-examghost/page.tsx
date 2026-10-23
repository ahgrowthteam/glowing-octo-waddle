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
  MousePointerClick,
  EyeOff,
  CreditCard,
  ChevronDown,
  FileCode2,
  Cpu,
  ServerCrash,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "StudyBotPro vs ExamGhost (2026) — Untrusted Clicks & SSL",
    },
    description: "2026 audit of StudyBotPro vs ExamGhost. Why isTrusted:false auto-clickers and broken SSL certificates fail compared to 0.3s Shadow DOM & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/studybotpro-vs-examghost",
    },
    openGraph: {
        title: "StudyBotPro vs ExamGhost (2026) — Untrusted Clicks & SSL",
        description: "2026 audit of StudyBotPro vs ExamGhost. Why isTrusted:false auto-clickers and broken SSL certificates fail compared to 0.3s Shadow DOM & 50 Free Solves.",
        url: "https://examghost.com/studybotpro-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "StudyBotPro vs ExamGhost (2026) — Untrusted Clicks & SSL",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "StudyBotPro vs ExamGhost (2026) — Untrusted Clicks & SSL",
        description: "2026 audit of StudyBotPro vs ExamGhost. Why isTrusted:false auto-clickers and broken SSL certificates fail compared to 0.3s Shadow DOM & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const faqs = [
  {
    q: "What happened to StudyBotPro (studybotpro.co) in 2026?",
    a: "Our 2026 network audit confirms that studybotpro.co fails TLS certificate verification (returning 'x509: certificate is valid for *.web-hosting.com, not studybotpro.co' on Namecheap shared hosting), and its Chrome Web Store listing has been removed. Students with legacy StudyBotPro installs face broken API endpoints and unpatched detection signatures.",
  },
  {
    q: "Why is StudyBotPro's Auto Select feature risky on Canvas?",
    a: "StudyBotPro's Auto Select module dispatches synthetic .click() events directly onto Canvas form radio buttons. In JavaScript, synthetic events produce event.isTrusted === false with (0, 0) pointer coordinates. Canvas New Quizzes (React LTI 1.3) checks for untrusted events and logs automated script input directly to SpeedGrader.",
  },
  {
    q: "Does StudyBotPro's Snapshot Tool or Real-Time Chatbox prevent Canvas from logging window switches?",
    a: "No. StudyBotPro's five modules (Auto Select, Web Highlight, Snapshot Tool, Real-Time Chatbox, and StudyMode) do not intercept window.blur or document.visibilitychange events. Interacting with its chatbox or snapshot overlay triggers Canvas to log departure timestamps in SpeedGrader.",
  },
  {
    q: "How does ExamGhost avoid the isTrusted: false detection trap?",
    a: "ExamGhost never forcefully mutates or clicks your exam radio buttons. Instead, it displays the consensus-verified answer inside a Closed Shadow DOM HUD with an adjustable opacity slider, allowing you to click the option yourself with genuine physical pointer coordinates (event.isTrusted === true).",
  },
  {
    q: "How does pricing compare between StudyBotPro and ExamGhost?",
    a: "StudyBotPro charged $11.99/month ($143.88/year) before its domain SSL expired. ExamGhost gives every student 50 Free Solves ($0, no credit card required), followed by transparent $19/mo Monthly, $99/yr Annual ($8.25/mo), or $199 Lifetime plans.",
  },
];

export default function StudyBotProVsExamGhostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-02-13",
                "dateModified": "2026-03-25",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/studybotpro-vs-examghost/#webpage",
        url: "https://examghost.com/studybotpro-vs-examghost",
        name: "StudyBotPro vs ExamGhost (2026): Auto-Select 'isTrusted: false' & Broken SSL vs True Stealth",
        description:
          "2026 technical comparison of StudyBotPro (studybotpro.co) and ExamGhost covering synthetic Auto Select clicks, expired Namecheap SSL certificates, SpeedGrader focus logs, and pricing.",
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
            name: "StudyBotPro vs ExamGhost",
            item: "https://examghost.com/studybotpro-vs-examghost",
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
              StudyBotPro vs ExamGhost
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-900 text-xs font-semibold">
                <ServerCrash className="w-3.5 h-3.5 text-rose-600" />
                <span>
                  2026 Status Alert: StudyBotPro (Broken SSL &amp; Delisted) vs
                  ExamGhost
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#111111]">
                Programmatic{" "}
                <span className="underline decoration-rose-500/40 decoration-wavy underline-offset-4">
                  &ldquo;Auto Select&rdquo;
                </span>{" "}
                Clicks &amp; Expired SSL Certs Won&apos;t Save Your GPA.
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-600 leading-relaxed">
                <strong>StudyBotPro</strong> (
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  studybotpro.co
                </code>
                ) marketed five tools—<strong>Auto Select</strong>,{" "}
                <strong>Web Highlight</strong>, <strong>Snapshot Tool</strong>,{" "}
                <strong>Real-Time Chatbox</strong>, and{" "}
                <strong>StudyMode</strong>—for $11.99/mo before its Chrome Web
                Store listing was removed and its domain SSL expired (
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  *.web-hosting.com
                </code>{" "}
                mismatch). Even when active, its Auto Select script fired
                synthetic{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  event.isTrusted === false
                </code>{" "}
                clicks directly onto Canvas radio buttons.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    2026 Domain Status
                  </div>
                  <div className="text-sm font-bold text-rose-600">
                    Broken TLS &amp; Delisted vs 99.99% Uptime
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Click Telemetry
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    Auto-Select isTrusted: false vs Genuine Clicks
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Solver Engine
                  </div>
                  <div className="text-sm font-bold text-emerald-700">
                    Defunct API vs 3-Model AI Consensus
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

            {/* Right Column: 2026 TLS Outage & Auto-Select isTrusted Inspector */}
            <div className="lg:col-span-5">
              <div className="bg-[#141418] text-white rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
                <div className="px-5 py-3.5 bg-[#1c1c22] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      StudyBotPro 2026 Network &amp; DOM Audit
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30">
                    Delisted / TLS Error
                  </span>
                </div>

                <div className="p-5 space-y-3.5">
                  {/* 1. TLS Certificate Mismatch */}
                  <div className="rounded-xl bg-[#1b1b22] border border-rose-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                        1. 2026 Endpoint &amp; Store Status
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                        SSL Expired
                      </span>
                    </div>
                    <div className="bg-[#111115] p-2.5 rounded-lg border border-neutral-800 font-mono text-[11px] text-rose-200">
                      GET https://studybotpro.co → x509: certificate is valid
                      for *.web-hosting.com, not studybotpro.co
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Hosted on Namecheap shared hosting with an expired SSL
                      certificate and pulled from the Chrome Web Store.
                    </p>
                  </div>

                  {/* 2. Auto-Select isTrusted: false */}
                  <div className="rounded-xl bg-[#1b1b22] border border-amber-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        2. &ldquo;Auto Select&rdquo; Synthetic Click Trap
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        isTrusted: false
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Calling{" "}
                      <code className="text-amber-300 font-mono">
                        radioInput.click()
                      </code>{" "}
                      dispatches a synthetic event with{" "}
                      <code className="text-amber-300 font-mono">
                        event.isTrusted === false
                      </code>{" "}
                      and <code className="text-amber-300 font-mono">(0,0)</code>{" "}
                      pointer coordinates—flagging automated bot input on Canvas
                      New Quizzes.
                    </p>
                  </div>

                  {/* 3. ExamGhost Contrast */}
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>ExamGhost: Active 2026 Stealth Engine</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Renders answers inside an isolated{" "}
                      <span className="text-white font-semibold">
                        Closed Shadow DOM HUD
                      </span>{" "}
                      so every click you make has genuine{" "}
                      <code className="text-emerald-300 font-mono">
                        isTrusted: true
                      </code>{" "}
                      coordinates and zero{" "}
                      <code className="text-emerald-300 font-mono">
                        window.blur
                      </code>{" "}
                      logs.
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
              Why Former StudyBotPro Users Switched to ExamGhost
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Click any tab below to inspect how StudyBotPro&apos;s Auto Select
              clicker, broken SSL infrastructure, and unshielded chatbox compare
              against ExamGhost.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            {/* Radio Inputs */}
            <input
              type="radio"
              name="studybotpro-audit-tabs"
              id="tab-sbp-click"
              className="sr-only peer/click"
              defaultChecked
            />
            <input
              type="radio"
              name="studybotpro-audit-tabs"
              id="tab-sbp-tls"
              className="sr-only peer/tls"
            />
            <input
              type="radio"
              name="studybotpro-audit-tabs"
              id="tab-sbp-chat"
              className="sr-only peer/chat"
            />

            {/* Tab Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-neutral-200 bg-neutral-50/80">
              <label
                htmlFor="tab-sbp-click"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/click:bg-white peer-checked/click:text-[#111111] peer-checked/click:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <MousePointerClick className="w-4 h-4 text-rose-600 shrink-0" />
                <span>1. Auto Select &ldquo;isTrusted: false&rdquo;</span>
              </label>
              <label
                htmlFor="tab-sbp-tls"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/tls:bg-white peer-checked/tls:text-[#111111] peer-checked/tls:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <ServerCrash className="w-4 h-4 text-amber-600 shrink-0" />
                <span>2. Broken SSL &amp; Store Removal</span>
              </label>
              <label
                htmlFor="tab-sbp-chat"
                className="cursor-pointer px-4 py-4 text-left sm:text-center transition-all peer-checked/chat:bg-white peer-checked/chat:text-[#111111] peer-checked/chat:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <Cpu className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3. Chatbox Blur vs 3-Model Stealth</span>
              </label>
            </div>

            {/* Panel 1: Auto Select isTrusted: false */}
            <div className="hidden peer-checked/click:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold">
                  DOM Event Integrity Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Having an Extension Click Radio Buttons for You Is an
                  Instant Bot Flag
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  StudyBotPro&apos;s #1 advertised feature was{" "}
                  <strong>Auto Select</strong>—a script that automatically
                  clicked the multiple-choice radio button on your quiz page. In
                  every modern browser, JavaScript-triggered clicks carry a
                  read-only property:{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    event.isTrusted === false
                  </code>{" "}
                  along with{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    clientX: 0, clientY: 0
                  </code>
                  .
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Canvas New Quizzes (React LTI 1.3), McGraw-Hill Connect, and
                  Blackboard Ultra inspect{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    event.isTrusted
                  </code>{" "}
                  on form inputs. <strong>ExamGhost</strong> never mutates your
                  exam form: it renders the subtle answer badge inside a{" "}
                  <strong>Closed Shadow DOM HUD</strong> so you click with 100%
                  authentic hardware pointer events.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-4 font-mono text-xs">
                <div className="text-neutral-400 border-b border-neutral-800 pb-2 flex items-center justify-between">
                  <span>Browser PointerEvent Inspection</span>
                  <span className="text-emerald-400">Live Telemetry</span>
                </div>
                <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/30 space-y-1.5">
                  <div className="text-rose-300 font-bold">
                    StudyBotPro (&ldquo;Auto Select&rdquo; Module)
                  </div>
                  <div className="text-neutral-300">
                    • Calls input[type=&quot;radio&quot;].click() via JS
                  </div>
                  <div className="text-neutral-300">
                    • Pointer coordinates: clientX: 0, clientY: 0
                  </div>
                  <div className="text-rose-400">
                    • Canvas logs: event.isTrusted === false (Bot Input)
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                  <div className="text-emerald-300 font-bold">
                    ExamGhost Closed Shadow DOM HUD
                  </div>
                  <div className="text-neutral-300">
                    • Displays verified answer inside isolated #shadow-root
                  </div>
                  <div className="text-neutral-300">
                    • Student clicks radio input with physical mouse/trackpad
                  </div>
                  <div className="text-emerald-400">
                    • Canvas logs: event.isTrusted === true (100% Genuine)
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Broken SSL & Store Removal */}
            <div className="hidden peer-checked/tls:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                  2026 Infrastructure Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  What Happened to{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    studybotpro.co
                  </code>{" "}
                  in 2026?
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Students searching for StudyBotPro in 2026 quickly discover
                  that its official domain (
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    https://studybotpro.co
                  </code>
                  ) throws a hard browser security warning:{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    x509: certificate is valid for *.web-hosting.com, not
                    studybotpro.co
                  </code>
                  .
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Its Chrome Web Store listing was removed at the same time,
                  leaving subscribers who were paying{" "}
                  <strong>$11.99/month ($143.88/year)</strong> with dead API
                  endpoints. <strong>ExamGhost</strong> is backed by a dedicated
                  engineering team, 99.99% edge uptime, and a{" "}
                  <strong>40,000+ student Discord community</strong> receiving
                  weekly LMS stealth updates.
                </p>
              </div>

              <div className="bg-[#faf9f6] rounded-xl p-5 border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  2026 Service Reliability Comparison
                </div>
                <div className="p-4 rounded-xl bg-white border border-rose-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      StudyBotPro (studybotpro.co)
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      Delisted &amp; Broken SSL
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Fails TLS verification on Namecheap shared hosting (
                    <code className="font-mono">*.web-hosting.com</code>) and is
                    no longer available on the Chrome Web Store.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      ExamGhost 2026 Infrastructure
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-600 text-white">
                      99.99% Uptime + 24/7 Discord
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    Actively maintained for Canvas Classic, Canvas New Quizzes
                    (LTI 1.3), Blackboard, Moodle, D2L, McGraw-Hill, and
                    Pearson.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 3: Chatbox Blur vs 3-Model Stealth */}
            <div className="hidden peer-checked/chat:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold">
                  Stealth &amp; Pricing Comparison
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Unshielded Real-Time Chatbox ($143.88/yr) vs 3-Model Consensus
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Beyond Auto Select, StudyBotPro bundled{" "}
                  <strong>Web Highlight</strong>,{" "}
                  <strong>Snapshot Tool</strong>,{" "}
                  <strong>Real-Time Chatbox</strong>, and{" "}
                  <strong>StudyMode</strong>. None of those modules intercepted{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    window.blur
                  </code>{" "}
                  or{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    document.visibilitychange
                  </code>
                  —so clicking into the Real-Time Chatbox logged an immediate
                  focus departure in Canvas SpeedGrader.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  <strong>ExamGhost</strong> protects your focus state across 8
                  browser layers, cross-verifies every question across{" "}
                  <strong>
                    GPT-5.4, Claude Sonnet 4.6, and Gemini 3.1 Pro
                  </strong>
                  , and starts with <strong>50 free solves</strong> ($0, no
                  card)—or <strong>$99/yr ($8.25/mo)</strong>, saving you over
                  $44/year compared to StudyBotPro&apos;s old $11.99/mo price.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-3 text-xs">
                <div className="text-neutral-400 font-mono uppercase tracking-wider border-b border-neutral-800 pb-2">
                  Annual Cost &amp; Capability Breakdown
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-800">
                  <div>
                    <div className="font-bold text-white">
                      Legacy StudyBotPro Subscription
                    </div>
                    <div className="text-neutral-400">
                      $11.99/mo • Single-LLM + Broken SSL in 2026
                    </div>
                  </div>
                  <span className="font-mono font-bold text-rose-400 text-sm">
                    $143.88 / yr
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
              StudyBotPro vs ExamGhost: 2026 Matrix
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Every technical, click-event, uptime, and pricing difference side
              by side.
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
                    <th className="py-4 px-5 font-semibold text-rose-300">
                      StudyBotPro (studybotpro.co)
                    </th>
                    <th className="py-4 px-5 font-semibold text-emerald-400">
                      ExamGhost (2026 Stealth)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      2026 Store &amp; Server Status
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Delisted from Chrome Store • Broken SSL (
                      <code className="font-mono text-xs">
                        *.web-hosting.com
                      </code>
                      )
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Active 2026 Stealth Build • 99.99% Edge Uptime
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Answer Selection Telemetry
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Auto Select fires synthetic{" "}
                      <code className="font-mono text-xs">
                        event.isTrusted === false
                      </code>
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Shadow DOM HUD badge • 100% genuine{" "}
                      <code className="font-mono text-xs">isTrusted: true</code>{" "}
                      clicks
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Canvas / Blackboard Focus Protection
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      None — Real-Time Chatbox &amp; Snapshot log{" "}
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
                      DOM Isolation Architecture
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Injects Web Highlight &amp; Chatbox nodes into host DOM
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Isolated Closed Shadow DOM v1 (0 host DOM mutations)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      AI Reasoning Engine
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Single-model chatbox (offline/broken endpoints in 2026)
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
                      None (opaque chatbox overlay)
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
                      $11.99/mo ($143.88/yr) prior to domain expiration
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
                    Technical Domain, TLS &amp; Module Audit (StudyBotPro
                    studybotpro.co)
                  </h3>
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-2 text-xs text-neutral-600 space-y-2 font-mono bg-white border-t border-neutral-200/70">
                <div>
                  <strong>Product Name &amp; Domain:</strong> StudyBotPro •{" "}
                  <code>studybotpro.co</code> (Delisted from Chrome Web Store)
                </div>
                <div>
                  <strong>2026 TLS Handshake Audit:</strong> Connecting to{" "}
                  <code>https://studybotpro.co</code> returns{" "}
                  <code>
                    x509: certificate is valid for *.web-hosting.com, not
                    studybotpro.co
                  </code>{" "}
                  (Namecheap shared hosting default certificate)
                </div>
                <div>
                  <strong>Advertised 5-Module Suite:</strong>{" "}
                  <code>Auto Select</code>, <code>Web Highlight</code>,{" "}
                  <code>Snapshot Tool</code>, <code>Real-Time Chatbox</code>,{" "}
                  <code>StudyMode</code>
                </div>
                <div>
                  <strong>Telemetry Vulnerability:</strong>{" "}
                  <code>Auto Select</code> dispatches synthetic{" "}
                  <code>.click()</code> events with{" "}
                  <code>event.isTrusted === false</code> and <code>(0,0)</code>{" "}
                  pointer coordinates onto LMS radio inputs
                </div>
                <div>
                  <strong>Legacy Pricing:</strong> $11.99/month ($143.88/year)
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* Honest Verdict: When to Use Which */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Why Avoid StudyBotPro in 2026</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Uninstall Legacy StudyBotPro Builds Because...
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    Its primary domain (<code className="font-mono text-xs">studybotpro.co</code>)
                    has an expired SSL certificate and its Chrome Web Store
                    listing has been removed.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    Its <strong>Auto Select</strong> clicker triggers{" "}
                    <code className="font-mono text-xs">
                      event.isTrusted === false
                    </code>{" "}
                    bot flags on Canvas New Quizzes.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    Its Real-Time Chatbox and Snapshot Tool have zero{" "}
                    <code className="font-mono text-xs">window.blur</code>{" "}
                    protection.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border-2 border-[#111111] p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Why ExamGhost Is the 2026 Replacement</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Switch to ExamGhost If...
              </h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want an <strong>actively maintained 2026 stealth extension</strong>{" "}
                    that works across Canvas Classic, Canvas New Quizzes (LTI
                    1.3), Blackboard, Moodle, and D2L.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want answers displayed inside a{" "}
                    <strong>Closed Shadow DOM HUD</strong> so every click you
                    make registers as{" "}
                    <code className="font-mono text-xs">isTrusted: true</code>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want <strong>50 free solves</strong> right away and{" "}
                    <strong>3-model consensus accuracy (99.2%)</strong>.
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
              Frequently Asked Questions: StudyBotPro vs ExamGhost
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Direct answers on StudyBotPro&apos;s 2026 domain status, Auto
              Select click detection, and migrating to ExamGhost.
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
          <div className="rounded-3xl bg-gradient-to-br from-rose-50 via-white to-emerald-50 border border-rose-200/80 p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-rose-200 text-rose-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                  <span>Replace Defunct Auto-Clickers with True Stealth</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                  Start with 50 Free Solves Inside ExamGhost&apos;s Closed
                  Shadow DOM.
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                  Zero synthetic <code className="font-mono text-xs">isTrusted: false</code>{" "}
                  bot flags, zero <code className="font-mono text-xs">window.blur</code>{" "}
                  logs, and 99.2% verified 3-model accuracy.
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

            <div className="mt-8 pt-6 border-t border-rose-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
              <span className="font-semibold text-[#111111]">
                Related 2026 Extension Audits:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link prefetch={false}
                  href="/getquizsolve-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  GetQuizSolve vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/fastsolve-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  FastSolve vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/studyx-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  StudyX vs ExamGhost
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
