import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  Lock,
  Sparkles,
  EyeOff,
  Coins,
  Cpu,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
  Layers,
  Terminal,
  CreditCard,
} from "lucide-react";
import { FaChrome, FaDiscord } from "react-icons/fa";

export const metadata: Metadata = {
    title: {
        absolute: "Quizzy App vs ExamGhost (2026) — Credit Caps vs Unlimited",
    },
    description: "Compare Quizzy App (quizzy-app.xyz) with ExamGhost. Replace 250-credit caps and Lite AI paywalls with 0.3s closed Shadow DOM stealth and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/quizzy-vs-examghost",
    },
    openGraph: {
        title: "Quizzy App vs ExamGhost (2026) — Credit Caps vs Unlimited",
        description: "Compare Quizzy App (quizzy-app.xyz) with ExamGhost. Replace 250-credit caps and Lite AI paywalls with 0.3s closed Shadow DOM stealth and 50 Free Solves.",
        url: "https://examghost.com/quizzy-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Quizzy App vs ExamGhost (2026) — Credit Caps vs Unlimited",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Quizzy App vs ExamGhost (2026) — Credit Caps vs Unlimited",
        description: "Compare Quizzy App (quizzy-app.xyz) with ExamGhost. Replace 250-credit caps and Lite AI paywalls with 0.3s closed Shadow DOM stealth and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
                "datePublished": "2026-01-11",
                "dateModified": "2026-03-02",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
      "@id": "https://examghost.com/quizzy-vs-examghost#webpage",
      url: "https://examghost.com/quizzy-vs-examghost",
      name: "Quizzy App (quizzy-app.xyz) vs ExamGhost (2026): Metered Credits & Lite AI vs Unlimited Stealth",
      description:
        "2026 live audit comparing Quizzy App (quizzy-app.xyz, 370+ users, QuizForge + MCQ solver) against ExamGhost's unlimited 0.3s Vision OCR and Canvas Focus Shield.",
      breadcrumb: {
        "@id": "https://examghost.com/quizzy-vs-examghost#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://examghost.com/quizzy-vs-examghost#breadcrumb",
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
          name: "Quizzy App vs ExamGhost",
          item: "https://examghost.com/quizzy-vs-examghost",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://examghost.com/quizzy-vs-examghost#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does Quizzy App charge extra for its 'Expert' AI model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On quizzy-app.xyz/#pricing, Quizzy splits its AI accuracy across three monthly tiers: Monthly Starter ($3.99/mo, 250 credits) only gives you the 'Quizzy AI Lite Model,' and Monthly Standard ($5.99/mo, 700 credits) uses the 'Standard Model.' To unlock the 'Quizzy AI Expert Model (highest accuracy),' you must pay $19.99/month—and you are still capped at 1,500 credits. ExamGhost gives every user our highest-accuracy STEM & Vision model on every tier, with unlimited solves.",
          },
        },
        {
          "@type": "Question",
          name: "Does Quizzy App offer a free trial or refund guarantee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Quizzy's setup instructions state: 'Sign up with Google or email/password, choose your subscription plan, and install our Chrome extension,' and its FAQ explicitly states: 'Quizzy App operates on a no-refund policy... Once a purchase is made, it is final and non-refundable.' ExamGhost includes 50 Free Question Solves + 10 Vision OCR Snips ($0, no card required) plus a 14-day 100% refund guarantee.",
          },
        },
        {
          "@type": "Question",
          name: "Does Quizzy App protect against Canvas Quiz Log Auditing (window.blur)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Quizzy (~370 active users) is a general right-click and hotkey (Opt+Maj+H / Ctrl+Shift+H) MCQ extension with no Canvas Focus Shield. It does not intercept window.blur, focusout, or visibilitychange events in Canvas or Blackboard.",
          },
        },
        {
          "@type": "Question",
          name: "What is QuizForge inside Quizzy App?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "QuizForge (quizzy-app.xyz/quizforge) is Quizzy's companion web tool that generates custom practice quizzes when you type in a study topic and question count. While helpful for self-testing before class, it does not assist with live timed exams inside Canvas, Blackboard, or McGraw Hill Connect.",
          },
        },
      ],
    },
  ],
};

export default function QuizzyVsExamGhostPage() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-mint/40 selection:text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-ink-muted"
          >
            <Link prefetch={false} href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link prefetch={false}
              href="/compare-canvas-hack-extensions"
              className="hover:text-ink transition-colors"
            >
              Comparisons
            </Link>
            <span>/</span>
            <span className="text-ink font-semibold">
              Quizzy App vs ExamGhost
            </span>
          </nav>
        </div>

        {/* BESPOKE HERO: METERED LITE/EXPERT CREDITS VS UNLIMITED FLAGSHIP STEALTH */}
        <header className="relative pt-4 pb-16 sm:pb-20 overflow-hidden border-b border-sand-dark/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-xs font-mono font-bold text-rose-900 mb-6 shadow-sm">
              <Coins className="w-3.5 h-3.5 text-rose-700" />
              <span>2026 Pricing &amp; Model Audit · quizzy-app.xyz vs ExamGhost</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-ink font-display leading-[1.08] mb-6 max-w-4xl">
              Quizzy puts accurate AI behind a $19.99/mo credit cap. ExamGhost gives you flagship stealth for free.
            </h1>

            <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-3xl leading-relaxed mb-8">
              Quizzy App (<code className="text-ink font-mono text-sm bg-sand/70 px-1.5 py-0.5 rounded">quizzy-app.xyz</code>) lures students with a $3.99/mo entry price—but restricts that plan to <strong>250 credits on a downgraded &ldquo;Quizzy AI Lite Model&rdquo;</strong>. To get its <strong>&ldquo;Expert Model (highest accuracy)&rdquo;</strong>, you must pay <strong>$19.99/month</strong> (still capped at 1,500 credits) with <strong>zero free trial</strong>, a verbatim <strong>no-refund policy</strong>, and no Canvas Focus Shield.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
              <a
                href="https://discord.gg/aCcsyKYJq4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-ink text-white font-semibold hover:bg-ink-light transition-all shadow-sm hover:shadow group text-sm sm:text-base"
              >
                <FaChrome className="w-4 h-4 text-mint" aria-hidden="true" />
                <span>Claim 50 Free Flagship AI Solves ($0)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link prefetch={false}
                href="/canvas-quiz-solver-free-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface hover:bg-sand border border-sand-dark/40 text-ink font-semibold transition-all text-sm sm:text-base shadow-sm"
              >
                <span>Try Interactive Live Demo</span>
              </Link>
              <Link prefetch={false}
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-sand/50 hover:bg-sand border border-sand-dark/30 text-ink-muted hover:text-ink font-medium transition-all text-sm"
              >
                <span>See Unlimited Passes ($19/mo · $99/yr)</span>
              </Link>
            </div>

            {/* HERO SIDE-BY-SIDE VISUAL MOCKUP */}
            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              {/* Left Card: Quizzy App */}
              <div className="rounded-2xl bg-surface border-2 border-rose-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                      <span className="font-display font-bold text-sm text-ink">Quizzy App (quizzy-app.xyz)</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[11px] font-mono font-bold text-rose-800">
                      Strict No-Refund Policy
                    </span>
                  </div>

                  {/* Visual Model & Credit Cap Table */}
                  <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-3.5 mb-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted pb-1 border-b border-sand-dark/20">
                      <span>Quizzy Tiered AI Model Paywall</span>
                      <span className="text-rose-700 font-bold">Credit Metered</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-surface border border-sand-dark/20">
                      <span><strong>$3.99/mo Starter:</strong> &ldquo;Quizzy AI Lite Model&rdquo;</span>
                      <span className="font-mono text-rose-800 font-bold">250 Credits</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-surface border border-sand-dark/20">
                      <span><strong>$5.99/mo Standard:</strong> &ldquo;Standard Model&rdquo;</span>
                      <span className="font-mono text-rose-800 font-bold">700 Credits</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-rose-100/80 border border-rose-300">
                      <span className="text-rose-950"><strong>$19.99/mo Premium:</strong> &ldquo;Expert Model&rdquo;</span>
                      <span className="font-mono text-rose-900 font-bold">1,500 Cap</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <Cpu className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>Lite AI Hallucinates on STEM:</strong> Cheap tiers use downgraded mini models that fail on college calculus, chemistry &amp; finance.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <Lock className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>No Free Trial &amp; Non-Refundable:</strong> Must pay before testing; FAQ states purchases are <em>&ldquo;final and non-refundable.&rdquo;</em></span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <EyeOff className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>Zero Canvas Focus Shield:</strong> Generic right-click &amp; <code className="font-mono text-[11px]">Ctrl+Shift+H</code> wrapper (~370 users) with no <code className="font-mono text-[11px]">window.blur</code> masking.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>CWS Users: ~370 Active</span>
                  <span className="text-rose-800 font-bold">Screenshot Upload: ~3.8s–4.2s</span>
                </div>
              </div>

              {/* Right Card: ExamGhost */}
              <div className="rounded-2xl bg-surface border-2 border-emerald-500/40 p-5 sm:p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="font-display font-bold text-sm text-ink">ExamGhost Flagship Stealth Suite</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-bold text-emerald-800">
                      14-Day 100% Refund Guarantee
                    </span>
                  </div>

                  {/* Visual Flagship Model & Unlimited Table */}
                  <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-3.5 mb-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted pb-1 border-b border-sand-dark/20">
                      <span>ExamGhost Unified Flagship AI</span>
                      <span className="text-emerald-800 font-bold">Zero Credit Caps</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-50/80 border border-emerald-200">
                      <span className="text-emerald-950"><strong>$0 Starter Trial:</strong> Flagship STEM + Vision AI</span>
                      <span className="font-mono text-emerald-800 font-bold">50 Free Solves</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-50/80 border border-emerald-200">
                      <span className="text-emerald-950"><strong>$19/mo or $99/yr ($8.25/mo):</strong> Flagship AI</span>
                      <span className="font-mono text-emerald-800 font-bold">Unlimited</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-950 text-white border border-emerald-700">
                      <span className="text-emerald-100"><strong>$199 Lifetime Pass:</strong> 3 Devices Through Graduation</span>
                      <span className="font-mono text-mint font-bold">Unlimited</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Never Downgraded to a &ldquo;Lite&rdquo; Model:</strong> Every solve—including your 50 free trial solves—uses our highest-accuracy STEM &amp; Vision model.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Closed Shadow DOM + Focus Shield:</strong> Blocks <code className="font-mono text-[11px]">window.blur</code> and <code className="font-mono text-[11px]">visibilitychange</code> events on Canvas &amp; Blackboard.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>0.3s Edge Vision OCR + Panic Purge:</strong> Snips graphs &amp; locked iframes in 300ms and wipes all UI in 1ms via <code className="font-mono text-[11px]">⌘+Shift+U</code>.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="text-emerald-800 font-bold">Focus Shield: 3-Layer Active</span>
                  <span className="text-emerald-800 font-bold">Edge Vision OCR: 0.3s</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* INTERACTIVE PURE-CSS 3-TAB COMPARISON */}
        <section className="py-16 sm:py-20 bg-sand/30 border-b border-sand-dark/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sand-dark/30 text-xs font-mono font-semibold text-ink-muted mb-3">
                <Layers className="w-3.5 h-3.5 text-emerald-800" />
                <span>Interactive Audit · Click Any Tab Below</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-ink mb-3">
                Inside Quizzy-App.xyz vs ExamGhost Architecture
              </h2>
              <p className="text-sm sm:text-base text-ink-muted">
                Inspect Quizzy&apos;s Lite/Standard/Expert model segmentation, no-refund policy, and live LMS stealth gaps.
              </p>
            </div>

            <div>
              <input type="radio" name="qz-tabs" id="qz-tab-models" className="sr-only peer/models" defaultChecked />
              <input type="radio" name="qz-tabs" id="qz-tab-refund" className="sr-only peer/refund" />
              <input type="radio" name="qz-tabs" id="qz-tab-stealth" className="sr-only peer/stealth" />

              {/* Tab Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto mb-8 bg-surface p-2 rounded-2xl border border-sand-dark/30 shadow-sm">
                <label
                  htmlFor="qz-tab-models"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/models:bg-ink peer-checked/models:text-white peer-checked/models:shadow-sm flex items-center justify-center gap-2"
                >
                  <Cpu className="w-4 h-4 shrink-0" />
                  <span>1. Lite vs Expert AI Paywall</span>
                </label>
                <label
                  htmlFor="qz-tab-refund"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/refund:bg-ink peer-checked/refund:text-white peer-checked/refund:shadow-sm flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4 shrink-0" />
                  <span>2. No-Refund Policy &amp; Credits</span>
                </label>
                <label
                  htmlFor="qz-tab-stealth"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/stealth:bg-ink peer-checked/stealth:text-white peer-checked/stealth:shadow-sm flex items-center justify-center gap-2"
                >
                  <EyeOff className="w-4 h-4 shrink-0" />
                  <span>3. Right-Click vs Shadow DOM</span>
                </label>
              </div>

              {/* TAB 1: LITE VS EXPERT AI PAYWALL */}
              <div className="hidden peer-checked/models:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Quizzy App: Accuracy Gated by Price Tier</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Why $3.99 gets you a &ldquo;Lite Model&rdquo; that fails college STEM
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    On <code className="font-mono text-xs bg-sand px-1 rounded">quizzy-app.xyz/#pricing</code>, Quizzy segments its underlying AI accuracy across three monthly subscriptions:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>Monthly Starter ($3.99/mo · 250 Credits):</strong> Restricted to the <em>&ldquo;Quizzy AI Lite Model&rdquo;</em>—a lightweight mini model that works on basic definitions (like Quizzy&apos;s homepage mitochondria question) but hallucinates on multi-step calculus, physics, or accounting.
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>Monthly Standard ($5.99/mo · 700 Credits):</strong> Uses the mid-tier <em>&ldquo;Standard Model.&rdquo;</em>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>Monthly Premium ($19.99/mo · 1,500 Credits):</strong> Required to unlock the <em>&ldquo;Quizzy AI Expert Model (highest accuracy)&rdquo;</em>—and you are still capped at 1,500 credits/month.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ExamGhost: Flagship STEM &amp; Vision AI for Everyone</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    100% flagship reasoning accuracy—even on your 50 free solves
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    We never bait-and-switch students with a downgraded &ldquo;Lite&rdquo; model on lower tiers. Every single ExamGhost solve runs on our full-power multimodal STEM &amp; Vision OCR pipeline:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>Unlimited Solves on Every Paid Pass:</strong> No 250, 700, or 1,500 credit meters counting down during midterms or finals week.
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>Cheaper Than Quizzy Expert:</strong> ExamGhost Monthly is $19.00/mo (unlimited), Academic Year is $99/yr ($8.25/mo), and Lifetime is $199 once.
                    </div>
                  </div>
                </div>
              </div>

              {/* TAB 2: NO-REFUND POLICY & CREDITS */}
              <div className="hidden peer-checked/refund:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Quizzy App: Pay First, Zero Refunds</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Verbatim FAQ: &ldquo;Once a purchase is made, it is final and non-refundable&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Quizzy&apos;s onboarding instructions require you to choose and pay for a subscription plan before using the Chrome extension. Worse, its official FAQ states:
                  </p>
                  <blockquote className="p-4 rounded-xl bg-rose-50/80 border-l-4 border-rose-600 text-xs sm:text-sm italic text-rose-950">
                    &ldquo;Quizzy App operates on a no-refund policy... Once a purchase is made, it is final and non-refundable.&rdquo;
                  </blockquote>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    If you subscribe and discover that your professor disabled right-click on Canvas or that the Lite model gets your STEM homework wrong, you cannot get your money back.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ExamGhost: 50 Free Solves + 14-Day Refund Guarantee</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Test on your actual course portal for $0 before paying
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    We believe you should verify both stealth and accuracy on your own university LMS before spending a dollar:
                  </p>
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>1. 50 Free Question Solves + 10 OCR Snips ($0):</strong> Claim your free starter pass on Discord with zero credit card required.
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>2. 14-Day 100% Money-Back Guarantee:</strong> Every paid ExamGhost pass is backed by a straightforward 14-day refund policy.
                    </div>
                  </div>
                </div>
              </div>

              {/* TAB 3: RIGHT-CLICK WRAPPER VS CLOSED SHADOW DOM */}
              <div className="hidden peer-checked/stealth:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Quizzy App: Unshielded Right-Click &amp; Screenshot Wrapper</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    No Canvas Focus Shield and 3.8s–4.2s screenshot latency
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Quizzy triggers via right-click context menu or <code className="font-mono text-xs bg-sand px-1 rounded">Opt+Maj+H</code> / <code className="font-mono text-xs bg-sand px-1 rounded">Ctrl+Shift+H</code> screenshot capture, with no LMS anti-detection layer:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>Blocked by Disabled Context Menus:</strong> When Canvas, Blackboard, or McGraw Hill Connect disables right-click and text selection, Quizzy&apos;s primary text workflow fails.
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>No <code className="font-mono">window.blur</code> Interception:</strong> Does not spoof <code className="font-mono">document.visibilityState</code> or block focus-loss telemetry in Canvas SpeedGrader.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <Zap className="w-3.5 h-3.5" />
                    <span>ExamGhost: 0.3s Closed ShadowRoot + Focus Shield</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Engineered specifically for monitored university portals
                  </h3>
                  <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto leading-relaxed border border-emerald-800">
                    <div className="text-emerald-400">// 1. 3-Layer Focus Shield at document_start:</div>
                    <div>window.addEventListener(&quot;blur&quot;, (e) =&gt; e.stopImmediatePropagation(), true);</div>
                    <div className="text-emerald-400 mt-2">// 2. Closed ShadowRoot + 0.3s Edge Vision OCR:</div>
                    <div>const hud = host.attachShadow(&#123; mode: &quot;closed&quot; &#125;);</div>
                    <div className="text-emerald-400 mt-2">// 3. ⌘+Shift+U wipes HUD &amp; RAM in &lt;1ms</div>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Works seamlessly even when right-click is blocked or questions are locked inside cross-origin Canvas New Quizzes (<code className="font-mono text-xs bg-sand px-1 rounded">LTI 1.3</code>) iframes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HONEST USE-CASE GUIDANCE */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-sand-dark/30 shadow-sm">
              <h2 className="font-display font-bold text-lg sm:text-xl text-ink mb-3 flex items-center gap-2">
                <Coins className="w-5 h-5 text-ink-muted" />
                <span>When Quizzy App Fits Best</span>
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                Quizzy is a small indie Chrome extension (~370 users) that can work for casual, unmonitored study sessions:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>QuizForge Practice Quizzes:</strong> Using <code className="font-mono text-xs">quizzy-app.xyz/quizforge</code> to generate self-test multiple-choice questions on a general topic before class.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>Light Unproctored Trivia Lookup:</strong> Where a 250-credit cap on a Lite AI model and lack of Canvas Focus Shield do not affect your grade.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
              <h2 className="font-display font-bold text-lg sm:text-xl text-emerald-300 mb-3 flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-emerald-300" />
                <span>When Students Choose ExamGhost</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-4">
                For college midterms, finals, and weekly STEM problem sets on Canvas, Blackboard, Moodle, D2L, and Connect:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Flagship STEM &amp; Vision AI on Every Tier:</strong> Never lose exam points to a downgraded &ldquo;Lite&rdquo; model or run out of monthly credits mid-test.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Closed Shadow DOM + Focus Shield:</strong> Keeps your Canvas SpeedGrader action log 100% clean with zero <code className="font-mono text-xs text-emerald-300">window.blur</code> flags.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>50 Free Solves + 14-Day Refund Guarantee:</strong> Zero upfront risk compared to Quizzy&apos;s strict no-refund policy.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SIDE-BY-SIDE COMPARISON MATRIX + COLLAPSIBLE MANIFEST DRAWER */}
        <section className="py-16 bg-surface border-y border-sand-dark/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                2026 Feature &amp; Pricing Matrix
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted">
                Verified directly against <code className="font-mono text-xs">quizzy-app.xyz</code> across 8 key criteria.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-sand-dark/30">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                <thead>
                  <tr className="border-b border-sand-dark/30 bg-sand/40">
                    <th className="py-3.5 px-4 font-bold text-ink">Capability / Metric</th>
                    <th className="py-3.5 px-4 font-bold text-ink-muted">Why It Matters</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-800">ExamGhost</th>
                    <th className="py-3.5 px-4 font-bold text-rose-800">Quizzy App (quizzy-app.xyz)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-dark/20">
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">AI Model Accuracy by Tier</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Avoiding hallucinations on college STEM</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      Flagship STEM &amp; Vision AI on All Tiers
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      Lite ($3.99) &amp; Standard ($5.99); Expert requires $19.99/mo
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Monthly Question / Credit Cap</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Running out of credits during finals week</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      100% Unlimited Solves &amp; OCR Snips
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      Capped at 250, 700, or 1,500 credits/mo
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Free Trial Access</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Testing on your LMS before paying</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      50 Free Solves + 10 OCR Snips ($0, No CC)
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      None (Must subscribe first)
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Refund Guarantee</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Protection if it doesn&apos;t fit your courses</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      14-Day 100% Money-Back Guarantee
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      Strict No-Refund Policy (&ldquo;Final&rdquo;)
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Canvas Focus Shield</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Blocks window.blur &amp; visibilitychange logs</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      3-Layer Capture-Phase Shield
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      None
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Closed Shadow DOM HUD</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Zero host DOM mutation footprint</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      100% Isolated Closed ShadowRoot
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      Unshielded DOM / Right-Click Menu
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Solving Speed</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Latency during timed exams</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">0.3s Edge Vision Compute</td>
                    <td className="py-3.5 px-4 text-ink-muted">3.8s – 4.2s Screenshot Upload</td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Highest-Accuracy Pricing</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Cost for flagship AI accuracy</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">$19/mo · $99/yr ($8.25/mo) · $199 Life</td>
                    <td className="py-3.5 px-4 text-ink-muted">$19.99/mo (Capped at 1,500 credits)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Chrome Web Store & Domain Audit Drawer */}
            <details className="mt-6 group rounded-2xl bg-sand/40 border border-sand-dark/30 p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-mono font-bold text-ink">
                <span className="flex items-center gap-2 m-0 inline">
                  <Terminal className="w-4 h-4 text-emerald-800" />
                  <h3 className="font-bold m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (quizzy-app.xyz)</h3>
                </span>
                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 pt-4 border-t border-sand-dark/20 grid sm:grid-cols-2 gap-4 text-xs font-mono text-ink-muted">
                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                  <div className="text-ink font-bold mb-1">Quizzy App Verified Metadata</div>
                  <div>Primary Domain: <span className="text-ink">quizzy-app.xyz ( &amp; /quizforge )</span></div>
                  <div>Chrome Extension ID: <span className="text-ink">oofhfhmonpoolbbmakdgnafmnlomfkfn</span></div>
                  <div>Publisher / Adoption: <span className="text-ink">@julesgiraud · ~370 active users</span></div>
                  <div>Default Hotkeys: <span className="text-rose-800">Opt+Maj+H (Mac) / Ctrl+Shift+H (Win)</span></div>
                </div>
                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                  <div className="text-ink font-bold mb-1">ExamGhost Stealth Architecture</div>
                  <div>UI Isolation: <span className="text-emerald-800">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</span></div>
                  <div>Focus Shield: <span className="text-emerald-800">window.blur / visibilitychange capture</span></div>
                  <div>AI Compute: <span className="text-emerald-800">0.3s Flagship STEM + Vision OCR</span></div>
                  <div>Panic Hotkey: <span className="text-emerald-800">⌘+Shift+U (&lt;1ms RAM &amp; DOM wipe)</span></div>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* OFFICIAL STUDENT DISCORD COMMUNITY BANNER */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 my-14">
          <div className="rounded-[32px] bg-[#3b47d6] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lift">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <FaDiscord className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                  Join the ExamGhost Student Discord
                </h2>
                <p className="text-xs sm:text-sm text-white/90">
                  Claim 50 free flagship AI solves ($0, no card), check live Canvas stealth status, and get 24/7 engineering support.
                </p>
              </div>
            </div>
            <a
              href="https://discord.gg/aCcsyKYJq4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-[#232b88] hover:bg-white/95 text-sm font-bold shadow-sm whitespace-nowrap inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
            >
              <span>Join Discord &amp; Get 50 Free Solves</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
              Quizzy App vs ExamGhost: Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Direct answers verified against <code className="font-mono text-xs">quizzy-app.xyz</code> in 2026.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why does Quizzy App charge extra for its &ldquo;Expert&rdquo; AI model?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                On <code className="font-mono text-xs">quizzy-app.xyz/#pricing</code>, Quizzy splits its AI accuracy across three monthly tiers: Monthly Starter ($3.99/mo, 250 credits) only gives you the <strong>&ldquo;Quizzy AI Lite Model,&rdquo;</strong> and Monthly Standard ($5.99/mo, 700 credits) uses the <strong>&ldquo;Standard Model.&rdquo;</strong> To unlock the <strong>&ldquo;Quizzy AI Expert Model (highest accuracy),&rdquo;</strong> you must pay <strong>$19.99/month</strong>—and you are still capped at 1,500 credits. ExamGhost gives every user our highest-accuracy STEM &amp; Vision model on every tier, with unlimited solves.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does Quizzy App offer a free trial or refund guarantee?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                No. Quizzy&apos;s setup instructions state: <em>&ldquo;Sign up with Google or email/password, choose your subscription plan, and install our Chrome extension,&rdquo;</em> and its FAQ explicitly states: <em>&ldquo;Quizzy App operates on a no-refund policy... Once a purchase is made, it is final and non-refundable.&rdquo;</em> ExamGhost includes <strong>50 Free Question Solves + 10 Vision OCR Snips ($0)</strong> with no card required, plus a <strong>14-day 100% refund guarantee</strong>.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does Quizzy App protect against Canvas Quiz Log Auditing (window.blur)?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                No. Quizzy (~370 active users) is a general right-click and hotkey (<code className="font-mono text-xs">Opt+Maj+H</code> / <code className="font-mono text-xs">Ctrl+Shift+H</code>) MCQ extension with no Canvas Focus Shield. It does not intercept <code className="font-mono text-xs">window.blur</code>, <code className="font-mono text-xs">focusout</code>, or <code className="font-mono text-xs">visibilitychange</code> events in Canvas or Blackboard.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What is QuizForge inside Quizzy App?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                QuizForge (<code className="font-mono text-xs">quizzy-app.xyz/quizforge</code>) is Quizzy&apos;s companion web tool that generates custom practice quizzes when you type in a study topic and question count. While helpful for self-testing before class, it does not assist with live timed exams inside Canvas, Blackboard, or McGraw Hill Connect.
              </p>
            </details>
          </div>
        </section>

        {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-mint/25 to-amber-50/70 border border-emerald-200/80 p-6 sm:p-10 shadow-sm mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-emerald-200 text-xs font-mono font-bold text-emerald-900 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Zero Credit Meters · Zero &ldquo;Lite&rdquo; Models</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-2">
                  Get 50 Free Flagship AI Solves before spending a cent.
                </h2>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Test ExamGhost&apos;s closed Shadow DOM HUD, Focus Shield, and 0.3s Vision OCR risk-free—backed by our 14-day 100% money-back guarantee.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  href="https://discord.gg/aCcsyKYJq4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-white font-bold hover:bg-ink-light transition-all shadow-sm text-sm"
                >
                  <FaChrome className="w-4 h-4 text-mint" />
                  <span>Claim 50 Free Solves</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-sand/60 text-ink font-semibold border border-sand-dark/30 transition-all text-sm"
                >
                  <span>View Passes ($19/mo · $99/yr)</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-sand-dark/20 pt-8">
            <h2 className="font-display font-bold text-base sm:text-lg text-ink mb-4">
              Compare Other Homework &amp; LMS Extensions (2026)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <Link prefetch={false}
                href="/cramly-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">Cramly.ai vs ExamGhost</span>
                <span className="text-ink-muted">Essay Drafter vs 0.3s Live STEM Solver</span>
              </Link>
              <Link prefetch={false}
                href="/quizmate-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">QuizMate vs ExamGhost</span>
                <span className="text-ink-muted">Injected LMS Button vs Shadow DOM</span>
              </Link>
              <Link prefetch={false}
                href="/canvasscholar-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">Canvas Scholar vs ExamGhost</span>
                <span className="text-ink-muted">Past Retake Viewer vs Live AI Solver</span>
              </Link>
              <Link prefetch={false}
                href="/studyfox-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">StudyFox vs ExamGhost</span>
                <span className="text-ink-muted">Toolbar Popup Blur vs Focus Shield</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
