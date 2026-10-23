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
  CloudUpload,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Campus AI vs ExamGhost (2026) — SidePanel Blur vs Stealth",
    },
    description: "2026 audit of Campus AI (v0.2.2) vs ExamGhost. Why Chrome sidePanel blur logs and question caps lose to 0.3s closed Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/campusai-vs-examghost",
    },
    openGraph: {
        title: "Campus AI vs ExamGhost (2026) — SidePanel Blur vs Stealth",
        description: "2026 audit of Campus AI (v0.2.2) vs ExamGhost. Why Chrome sidePanel blur logs and question caps lose to 0.3s closed Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/campusai-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Campus AI vs ExamGhost (2026) — SidePanel Blur vs Stealth",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Campus AI vs ExamGhost (2026) — SidePanel Blur vs Stealth",
        description: "2026 audit of Campus AI (v0.2.2) vs ExamGhost. Why Chrome sidePanel blur logs and question caps lose to 0.3s closed Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const faqs = [
  {
    q: "Is Campus AI's FAQ claim that Chrome extensions are 'undetectable' accurate?",
    a: "No. On thecampusai.com/resources/faq, Campus AI claims that 'the nature of Chrome extensions allows them to sit atop websites without connecting to any API, making them undetectable.' In reality, Campus AI v0.2.2 (ID: gbkgialchigfapopdbliekaekaanhpen) injects client.js on <all_urls> to render an in-page button on Canvas 2.0, Blackboard, D2L, and Moodle, and uses openPanelOnActionClick: true to open Chrome's native sidePanel (index.html). Clicking that sidePanel or using right-click text selection immediately fires window.blur in Canvas SpeedGrader.",
  },
  {
    q: "Why did Canvas AI rebrand to Campus AI (thecampusai.com)?",
    a: "Previously operated under canvasai.app, the extension rebranded to Campus AI (thecampusai.com, operated by Non-trader developer CampusAI LLC) following trademark scrutiny—though its Manifest V3 externally_connectable block still points to https://api.thecanvasai.com/payment/success/. Despite claiming '10K+ students' on its Webflow homepage, the verified Chrome Web Store listing shows 3,000 users and 87 ratings (4.72 stars).",
  },
  {
    q: "Does Campus AI really cap paid subscribers to 'limited questions'?",
    a: "Yes. On thecampusai.com/resources/pricing, both the Monthly Plan ($4.99/mth) and the Yearly Plan ($3.33/mth, billed $39.99/yr—alongside a legacy $9.99/mo banner) explicitly list 'Answer limited questions' as the second plan bullet. By contrast, ExamGhost gives every student 50 Free Solves ($0, no credit card required) and unlimited solves on its $19/mo Monthly, $99/yr Annual ($8.25/mo), and $199 Lifetime tiers.",
  },
  {
    q: "What is the privacy risk of Campus AI's Cloud Memory Bank and Google OAuth?",
    a: "Campus AI v0.2.2 requests the identity permission and Google OAuth2 scopes (userinfo.email and userinfo.profile) and automatically uploads every homework or quiz screenshot you take into its cloud 'Memory Bank' on dashboard.thecampusai.com, sorted by course subject. ExamGhost never stores your exam screenshots in a persistent cloud gallery and processes solves ephemerally.",
  },
  {
    q: "How does ExamGhost compare to Campus AI during live Canvas exams?",
    a: "ExamGhost is engineered specifically for timed assessments with 3-model consensus (GPT-5.4 + Claude Sonnet 4.6 + Gemini 3.1 Pro), Closed Shadow DOM (mode: 'closed') sandboxing, zero web_accessible_resources, and Focus Shield event interception that keeps document.hasFocus() locked to true. Campus AI is built around flashcard generation, practice quizzes, and a sidePanel UI that leaks tab departures.",
  },
];

export default function CampusAiVsExamGhostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
                "datePublished": "2026-01-13",
                "dateModified": "2026-03-26",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
        "@id": "https://examghost.com/campusai-vs-examghost/#webpage",
        url: "https://examghost.com/campusai-vs-examghost",
        name: "Campus AI (Canvas AI) vs ExamGhost (2026): SidePanel & 'Limited Questions' vs True LMS Stealth",
        description:
          "Detailed 2026 comparison of Campus AI (formerly Canvas AI, v0.2.2) and ExamGhost covering sidePanel focus leaks, client.js DOM buttons, Cloud Memory Bank screenshot retention, and paid question caps.",
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
            name: "Campus AI vs ExamGhost",
            item: "https://examghost.com/campusai-vs-examghost",
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
              Campus AI (formerly Canvas AI) vs ExamGhost
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-900 text-xs font-semibold">
                <PanelRight className="w-3.5 h-3.5 text-sky-700" />
                <span>
                  2026 Audit: Campus AI / Canvas AI (v0.2.2) vs ExamGhost
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#111111]">
                Why Campus AI&apos;s{" "}
                <span className="underline decoration-sky-500/40 decoration-wavy underline-offset-4">
                  SidePanel &amp; &ldquo;Limited Questions&rdquo;
                </span>{" "}
                Fail on Exam Day.
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-600 leading-relaxed">
                <strong>Campus AI</strong> (
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  thecampusai.com
                </code>
                , formerly <strong>Canvas AI</strong> at{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  canvasai.app
                </code>
                ) claims on its FAQ that Chrome extensions are
                &ldquo;undetectable&rdquo; because they{" "}
                <em>&ldquo;sit atop websites.&rdquo;</em> Yet its v0.2.2
                extension injects{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  client.js
                </code>{" "}
                buttons into Canvas, opens Chrome&apos;s native{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  sidePanel
                </code>{" "}
                (firing{" "}
                <code className="text-xs bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">
                  window.blur
                </code>
                ), uploads your exam screenshots to a cloud{" "}
                <strong>Memory Bank</strong> tied to your Google OAuth email,
                and caps paid plans at{" "}
                <strong>&ldquo;Answer limited questions.&rdquo;</strong>
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    UI &amp; Focus Log
                  </div>
                  <div className="text-sm font-bold text-rose-600">
                    Chrome sidePanel Blur vs Closed Shadow DOM
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Paid Plan Quota
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    &ldquo;Limited Questions&rdquo; vs 50 Free + Unlimited
                  </div>
                </div>
                <div className="bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-sm">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Screenshot Privacy
                  </div>
                  <div className="text-sm font-bold text-emerald-700">
                    Cloud Memory Bank vs Ephemeral Zero-Log
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

            {/* Right Column: 3 Verbatim Campus AI Disclosures & Manifest Traps */}
            <div className="lg:col-span-5">
              <div className="bg-[#141418] text-white rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
                <div className="px-5 py-3.5 bg-[#1c1c22] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Campus AI (v0.2.2) Verbatim Audit
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                    Formerly Canvas AI
                  </span>
                </div>

                <div className="p-5 space-y-3.5">
                  {/* Disclosure 1: The FAQ Claim */}
                  <div className="rounded-xl bg-[#1b1b22] border border-rose-500/25 p-4 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                        1. FAQ Claim (thecampusai.com/resources/faq)
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                        sidePanel Blur
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 italic">
                      &ldquo;The nature of Chrome extensions allows them to sit
                      atop websites without connecting to any API, making them
                      undetectable.&rdquo;
                    </p>
                    <p className="text-[11px] text-neutral-400 pt-1 border-t border-neutral-800">
                      <strong>Reality:</strong> Injects{" "}
                      <code className="text-rose-300 font-mono">client.js</code>{" "}
                      buttons into Canvas &amp; sets{" "}
                      <code className="text-rose-300 font-mono">
                        openPanelOnActionClick: true
                      </code>
                      , firing{" "}
                      <code className="text-rose-300 font-mono">
                        window.blur
                      </code>{" "}
                      when clicked.
                    </p>
                  </div>

                  {/* Disclosure 2: Paid Plans Cap Questions */}
                  <div className="rounded-xl bg-[#1b1b22] border border-amber-500/25 p-4 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        2. Pricing Page (/resources/pricing)
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        Paid Quota Cap
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300">
                      Both the Monthly Plan (<strong>$4.99/mth</strong>) and
                      Yearly Plan (<strong>$39.99/yr</strong>) explicitly list{" "}
                      <span className="text-amber-300 font-semibold">
                        &ldquo;Answer limited questions&rdquo;
                      </span>{" "}
                      as the second plan feature.
                    </p>
                  </div>

                  {/* Disclosure 3: Cloud Memory Bank */}
                  <div className="rounded-xl bg-[#1b1b22] border border-sky-500/25 p-4 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                        3. Cloud &ldquo;Memory Bank&rdquo; &amp; Google OAuth
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                        userinfo.email
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300">
                      Uploads every exam screenshot to{" "}
                      <code className="text-sky-300 font-mono">
                        dashboard.thecampusai.com
                      </code>{" "}
                      for subject sorting—creating a cloud gallery tied to your
                      Google email.
                    </p>
                  </div>

                  {/* ExamGhost Contrast */}
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>ExamGhost: Zero-Log + 50 Free Solves</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Closed Shadow DOM HUD, 8-layer{" "}
                      <code className="text-emerald-300 font-mono">
                        window.blur
                      </code>{" "}
                      protection, zero cloud screenshot retention, and{" "}
                      <span className="text-white font-semibold">
                        truly unlimited paid tiers
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
              Inspecting Campus AI v0.2.2 Under the Hood
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Click any tab below to see how Campus AI&apos;s Chrome{" "}
              <code className="font-mono text-xs">sidePanel</code>, paid
              question caps, and Cloud Memory Bank compare against ExamGhost.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
            {/* Radio Inputs */}
            <input
              type="radio"
              name="campusai-audit-tabs"
              id="tab-campusai-sidepanel"
              className="sr-only peer/sidepanel"
              defaultChecked
            />
            <input
              type="radio"
              name="campusai-audit-tabs"
              id="tab-campusai-memory"
              className="sr-only peer/memory"
            />
            <input
              type="radio"
              name="campusai-audit-tabs"
              id="tab-campusai-quota"
              className="sr-only peer/quota"
            />

            {/* Tab Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-neutral-200 bg-neutral-50/80">
              <label
                htmlFor="tab-campusai-sidepanel"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/sidepanel:bg-white peer-checked/sidepanel:text-[#111111] peer-checked/sidepanel:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <PanelRight className="w-4 h-4 text-sky-600 shrink-0" />
                <span>1. SidePanel &amp; client.js Blur Leaks</span>
              </label>
              <label
                htmlFor="tab-campusai-memory"
                className="cursor-pointer px-4 py-4 text-left sm:text-center border-b sm:border-b-0 sm:border-r border-neutral-200 transition-all peer-checked/memory:bg-white peer-checked/memory:text-[#111111] peer-checked/memory:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <CloudUpload className="w-4 h-4 text-rose-600 shrink-0" />
                <span>2. Cloud &ldquo;Memory Bank&rdquo; &amp; OAuth2</span>
              </label>
              <label
                htmlFor="tab-campusai-quota"
                className="cursor-pointer px-4 py-4 text-left sm:text-center transition-all peer-checked/quota:bg-white peer-checked/quota:text-[#111111] peer-checked/quota:font-bold text-neutral-500 hover:text-neutral-800 flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm"
              >
                <CreditCard className="w-4 h-4 text-amber-600 shrink-0" />
                <span>3. &ldquo;Limited Questions&rdquo; Paid Cap</span>
              </label>
            </div>

            {/* Panel 1: SidePanel & client.js Blur Leaks */}
            <div className="hidden peer-checked/sidepanel:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-bold">
                  SpeedGrader Telemetry Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why &ldquo;Sitting Atop Websites&rdquo; Doesn&apos;t Stop
                  Canvas{" "}
                  <code className="text-base bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    window.blur
                  </code>{" "}
                  Logs
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  On{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    thecampusai.com/resources/faq
                  </code>
                  , Campus AI claims extensions are undetectable simply because
                  they <em>&ldquo;sit atop websites without connecting to any
                  API.&rdquo;</em> That ignores how Canvas, Blackboard, and D2L
                  actually detect extensions: <strong>DOM mutation</strong> and{" "}
                  <strong>browser focus telemetry</strong>.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Campus AI v0.2.2 injects{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    client.js
                  </code>{" "}
                  across{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    &lt;all_urls&gt;
                  </code>{" "}
                  to insert buttons into Canvas 2.0, Blackboard, D2L, and
                  Moodle, and sets{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    openPanelOnActionClick: true
                  </code>{" "}
                  to open Chrome&apos;s native{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    sidePanel
                  </code>
                  . Clicking that SidePanel immediately steals window focus from
                  the exam tab.
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-4 font-mono text-xs">
                <div className="text-neutral-400 border-b border-neutral-800 pb-2 flex items-center justify-between">
                  <span>Canvas Quiz Action Log</span>
                  <span className="text-emerald-400">Live Telemetry</span>
                </div>
                <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/30 space-y-1.5">
                  <div className="text-rose-300 font-bold">
                    Campus AI v0.2.2 (70.71KiB MV3)
                  </div>
                  <div className="text-neutral-300">
                    09:12:30 — client.js injects button into Canvas DOM
                  </div>
                  <div className="text-neutral-300">
                    09:12:35 — Clicked Chrome sidePanel (index.html)
                  </div>
                  <div className="text-rose-400">
                    09:12:35 — FLAGGED: Stopped viewing quiz page (8s)
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                  <div className="text-emerald-300 font-bold">
                    ExamGhost Stealth Engine
                  </div>
                  <div className="text-neutral-300">
                    09:12:30 — Closed Shadow DOM HUD (0 host DOM buttons)
                  </div>
                  <div className="text-neutral-300">
                    09:12:31 — Focus Shield locks document.hasFocus() === true
                  </div>
                  <div className="text-emerald-400">
                    09:12:31 — CLEAN: 0 focus-loss or blur events recorded
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Cloud Memory Bank & Google OAuth */}
            <div className="hidden peer-checked/memory:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold">
                  Screenshot Retention Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Uploading Exam Screenshots to a Cloud &ldquo;Memory
                  Bank&rdquo; Is a Liability
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Campus AI v0.2.2 requests the Chrome{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    identity
                  </code>{" "}
                  permission along with Google OAuth2 scopes (
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    userinfo.email
                  </code>{" "}
                  and{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    userinfo.profile
                  </code>
                  ). Every screenshot you capture is automatically uploaded into
                  its cloud <strong>&ldquo;Memory Bank&rdquo;</strong> at{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    dashboard.thecampusai.com
                  </code>{" "}
                  for &ldquo;Automatic Subject Sorting.&rdquo;
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Storing timestamped screenshots of live university exams on a
                  Non-trader developer&apos;s cloud dashboard tied directly to
                  your Google email creates an unnecessary permanent record.{" "}
                  <strong>ExamGhost</strong> processes every screenshot
                  ephemerally in memory and never saves your exam crops to a
                  cloud gallery.
                </p>
              </div>

              <div className="bg-[#faf9f6] rounded-xl p-5 border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Data &amp; Screenshot Retention Comparison
                </div>
                <div className="p-4 rounded-xl bg-white border border-rose-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      Campus AI (CampusAI LLC)
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      Cloud Memory Bank
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Links to Google OAuth (<code className="font-mono">userinfo.email</code>)
                    and saves every captured exam screenshot inside{" "}
                    <code className="font-mono">dashboard.thecampusai.com</code>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">
                      ExamGhost Ephemeral Processing
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-600 text-white">
                      Zero Cloud Gallery
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700">
                    Screen crops are solved in parallel across 3 frontier models
                    and immediately discarded. Includes a 1ms Panic Switch (
                    <code className="font-mono">⌘+Shift+U</code>).
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 3: Limited Questions Paid Cap */}
            <div className="hidden peer-checked/quota:grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                  Quota &amp; Pricing Audit
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  Why Do Campus AI&apos;s Paid Plans Explicitly Say &ldquo;Answer
                  Limited Questions&rdquo;?
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  If you visit{" "}
                  <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded font-mono">
                    thecampusai.com/resources/pricing
                  </code>
                  , both the Monthly Plan (<strong>$4.99/mth</strong>) and the
                  Yearly Plan (<strong>$3.33/mth, billed $39.99/yr</strong>—next
                  to a legacy $9.99/mo banner) explicitly list{" "}
                  <strong>&ldquo;Answer limited questions&rdquo;</strong> as the
                  second bullet point.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Running into a hidden question cap halfway through finals week
                  defeats the entire purpose of paying for an exam solver.{" "}
                  <strong>ExamGhost</strong> gives every student{" "}
                  <strong>50 free solves</strong> to test the full 3-model
                  consensus engine, followed by{" "}
                  <strong>truly unlimited solves</strong> on Monthly ($19/mo),
                  Annual ($99/yr / $8.25/mo), or Lifetime ($199).
                </p>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-5 border border-neutral-800 space-y-3 text-xs">
                <div className="text-neutral-400 font-mono uppercase tracking-wider border-b border-neutral-800 pb-2">
                  Quota &amp; Solver Accuracy Comparison
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-800">
                  <div>
                    <div className="font-bold text-white">
                      Campus AI Paid Tiers ($4.99/mo or $39.99/yr)
                    </div>
                    <div className="text-neutral-400">
                      Single-model chat • Explicitly states &ldquo;Answer
                      limited questions&rdquo;
                    </div>
                  </div>
                  <span className="font-mono font-bold text-rose-400 text-sm">
                    Capped Quota
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
                    50 Free Solves
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 bg-emerald-500/10 rounded-lg px-3 border border-emerald-500/30">
                  <div>
                    <div className="font-bold text-emerald-300">
                      ExamGhost Annual / Lifetime
                    </div>
                    <div className="text-neutral-300">
                      Unlimited 3-model solves • $8.25/mo ($99/yr) or $199
                      Lifetime
                    </div>
                  </div>
                  <span className="font-mono font-bold text-emerald-400 text-sm">
                    Unlimited
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
              Campus AI (v0.2.2) vs ExamGhost: 2026 Matrix
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Every stealth, sidePanel, screenshot retention, and quota
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
                    <th className="py-4 px-5 font-semibold text-sky-300">
                      Campus AI / Canvas AI (v0.2.2)
                    </th>
                    <th className="py-4 px-5 font-semibold text-emerald-400">
                      ExamGhost (2026 Stealth)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      UI &amp; DOM Architecture
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Injects <code className="font-mono text-xs">client.js</code>{" "}
                      button + opens native Chrome{" "}
                      <code className="font-mono text-xs">sidePanel</code>
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Isolated Closed Shadow DOM HUD (0 host DOM buttons)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Canvas / Blackboard Focus Protection
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      None — clicking SidePanel fires{" "}
                      <code className="font-mono text-xs">window.blur</code> in
                      SpeedGrader
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      8-Layer Focus Shield blocks{" "}
                      <code className="font-mono text-xs">blur</code> &amp;{" "}
                      <code className="font-mono text-xs">visibilitychange</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Screenshot &amp; Identity Privacy
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Uploads screenshots to Cloud Memory Bank via Google OAuth
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      Ephemeral memory processing • Zero cloud screenshot gallery
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      AI Reasoning Engine
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      Single-model chat + flashcard/subject sorting
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      3-Model Consensus (GPT-5.4 + Claude 4.6 + Gemini 3.1 Pro)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Paid Plan Question Quota
                    </td>
                    <td className="py-4 px-5 text-rose-600 font-medium">
                      Explicitly states &ldquo;Answer limited questions&rdquo;
                      on paid plans
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      50 Free Solves + Truly Unlimited Solves on all paid tiers
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Verified Store Footprint
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      3,000 users (4.72★ / 87 ratings; claims 10K+ on site)
                    </td>
                    <td className="py-4 px-5 font-semibold text-emerald-700 bg-emerald-50/40">
                      40,000+ student community + 24/7 Discord engineering
                      support
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-bold text-[#111111]">
                      Pricing Structure
                    </td>
                    <td className="py-4 px-5 text-neutral-600">
                      $4.99/mo or $39.99/yr (with &ldquo;limited questions&rdquo;
                      cap)
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
                    Technical Chrome Web Store Manifest &amp; Rebrand Audit
                    (Campus AI / Canvas AI v0.2.2)
                  </h3>
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-2 text-xs text-neutral-600 space-y-2 font-mono bg-white border-t border-neutral-200/70">
                <div>
                  <strong>Extension Name &amp; Rebrand History:</strong> Campus
                  AI (formerly Canvas AI at <code>canvasai.app</code>)
                </div>
                <div>
                  <strong>Chrome Web Store ID:</strong>{" "}
                  <code>gbkgialchigfapopdbliekaekaanhpen</code> (Version{" "}
                  <code>0.2.2</code>, Package Size <code>70.71KiB</code>, 3,000
                  users, 4.72★ across 87 ratings, Publisher: Non-trader{" "}
                  <code>CampusAI LLC</code>)
                </div>
                <div>
                  <strong>Domains &amp; Legacy API Endpoints:</strong>{" "}
                  <code>thecampusai.com</code> •{" "}
                  <code>dashboard.thecampusai.com</code> (Cloud Memory Bank) •{" "}
                  <code>externally_connectable</code> still points to{" "}
                  <code>https://api.thecanvasai.com/payment/success/</code>
                </div>
                <div>
                  <strong>Manifest Permissions &amp; SidePanel Config:</strong>{" "}
                  Injects <code>client.js</code> on <code>&lt;all_urls&gt;</code>{" "}
                  • <code>side_panel</code>: <code>index.html</code> with{" "}
                  <code>openPanelOnActionClick: true</code> • Requests{" "}
                  <code>identity</code> + Google OAuth2 (
                  <code>userinfo.email</code>, <code>userinfo.profile</code>)
                </div>
                <div>
                  <strong>Verbatim Pricing &amp; FAQ Citations:</strong>{" "}
                  <code>thecampusai.com/resources/pricing</code> lists{" "}
                  <em>&ldquo;Answer limited questions&rdquo;</em> on both
                  $4.99/mth and $39.99/yr plans •{" "}
                  <code>thecampusai.com/resources/faq</code> claims extensions{" "}
                  <em>&ldquo;sit atop websites... making them undetectable&rdquo;</em>
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
                <span>When Campus AI Makes Sense</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                Use Campus AI If...
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You want a cheap ($4.99/mo) browser sidepanel to organize
                    homework screenshots by subject in a cloud Memory Bank.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    You only ask a small number of questions per month and won&apos;t
                    hit its &ldquo;limited questions&rdquo; cap.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Avoid on timed Canvas or Blackboard quizzes:</strong>{" "}
                    Opening Chrome&apos;s native{" "}
                    <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded font-mono">
                      sidePanel
                    </code>{" "}
                    logs focus-loss departures in SpeedGrader.
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
                    You need <strong>8-layer Focus Shielding</strong> and{" "}
                    <strong>Closed Shadow DOM isolation</strong> so Canvas never
                    logs a tab departure.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You don&apos;t want your exam screenshots saved to a cloud
                    Memory Bank tied to your Google account.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    You want <strong>50 free solves</strong> upfront and{" "}
                    <strong>truly unlimited 3-model consensus solves</strong> on
                    every paid tier.
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
              Frequently Asked Questions: Campus AI vs ExamGhost
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Direct answers on Campus AI (formerly Canvas AI), Chrome sidePanel
              detection, and paid question limits.
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
          <div className="rounded-3xl bg-gradient-to-br from-sky-50 via-white to-emerald-50 border border-sky-200/80 p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Ditch the SidePanel Blur &amp; Question Caps</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                  Start with 50 Free Solves—Zero SidePanel Focus Theft, Zero
                  Cloud Screenshot Trail.
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                  Test ExamGhost&apos;s Closed Shadow DOM HUD and 3-model
                  consensus engine on your hardest coursework before spending a
                  dollar.
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

            <div className="mt-8 pt-6 border-t border-sky-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
              <span className="font-semibold text-[#111111]">
                Related 2026 Extension Audits:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link prefetch={false}
                  href="/mindko-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  Mindko vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/classology-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  Classology AI vs ExamGhost
                </Link>
                <Link prefetch={false}
                  href="/canvaswizard-vs-examghost"
                  className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 hover:border-[#111111] transition-colors font-medium"
                >
                  CanvasWizard vs ExamGhost
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
