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
  BookOpen,
  Gamepad2,
  EyeOff,
  Server,
  ExternalLink,
  ChevronDown,
  AlertTriangle,
  Layers,
  Terminal,
  CreditCard,
} from "lucide-react";
import { FaChrome, FaDiscord } from "react-icons/fa";

export const metadata: Metadata = {
    title: {
        absolute: "SchoolCheats vs ExamGhost (2026) — K-12 Scripts vs College",
    },
    description: "SchoolCheats charges $8.99/wk for K-12 game scripts and redirects tabs. ExamGhost protects Canvas, Blackboard & Moodle exams in 0.3s with 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/schoolcheats-vs-examghost",
    },
    openGraph: {
        title: "SchoolCheats vs ExamGhost (2026) — K-12 Scripts vs College",
        description: "SchoolCheats charges $8.99/wk for K-12 game scripts and redirects tabs. ExamGhost protects Canvas, Blackboard & Moodle exams in 0.3s with 50 Free Solves.",
        url: "https://examghost.com/schoolcheats-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "SchoolCheats vs ExamGhost (2026) — K-12 Scripts vs College",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SchoolCheats vs ExamGhost (2026) — K-12 Scripts vs College",
        description: "SchoolCheats charges $8.99/wk for K-12 game scripts and redirects tabs. ExamGhost protects Canvas, Blackboard & Moodle exams in 0.3s with 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
                "datePublished": "2026-01-23",
                "dateModified": "2026-03-07",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
      "@id": "https://examghost.com/schoolcheats-vs-examghost#webpage",
      url: "https://examghost.com/schoolcheats-vs-examghost",
      name: "SchoolCheats.net vs ExamGhost (2026): K-12 Game Scripts vs University LMS Stealth",
      description:
        "Comprehensive 2026 audit comparing SchoolCheats.net's 7-platform script library and $25/mo pricing against ExamGhost's Canvas/Blackboard Shadow DOM stealth and 0.3s Vision OCR.",
      breadcrumb: {
        "@id": "https://examghost.com/schoolcheats-vs-examghost#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://examghost.com/schoolcheats-vs-examghost#breadcrumb",
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
          name: "SchoolCheats vs ExamGhost",
          item: "https://examghost.com/schoolcheats-vs-examghost",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://examghost.com/schoolcheats-vs-examghost#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does SchoolCheats.net work on Canvas, Blackboard, or Moodle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. According to SchoolCheats.net's live 2026 platform catalog, it only supports 7 platforms: DeltaMath, ZyBooks, Wayground (formerly Quizizz), Blooket, Edpuzzle, Edmentum, and Lexia Learning. It has zero support for Canvas, Blackboard Ultra, Moodle, D2L Brightspace, McGraw Hill Connect, or Pearson MyLab. ExamGhost works across all university LMS platforms.",
          },
        },
        {
          "@type": "Question",
          name: "How does SchoolCheats.net retrieve answers, and is it detectable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On SchoolCheats.net's homepage ('How it Works — Step 3'), the workflow explicitly states: 'Launch the cheat and get automatically sent to School Cheats for answer retrieval,' alongside 'Auto Complete' scripts. Being redirected to schoolcheats.net triggers immediate window.blur and visibilitychange events, while Auto Complete scripts complete 20-minute assignments in under 3 seconds—flagging teacher analytics logs immediately.",
          },
        },
        {
          "@type": "Question",
          name: "Are Answer Retrieval and Auto Complete free on SchoolCheats.net?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. On SchoolCheats.net's pricing matrix, the Free Plan disables ('X') both Answer Retrieval and Auto Complete for DeltaMath, ZyBooks, Edpuzzle, and Wayground, leaving only basic client-side tweaks. Unlocking Answer Retrieval requires a paid Premium Membership at $8.99/week ($35.96/mo) or $25.00/month. ExamGhost includes 50 free full AI & OCR solves ($0, no card required) and costs $19/mo, $99/yr, or $199 Lifetime.",
          },
        },
        {
          "@type": "Question",
          name: "What is the SchoolCheats Cloud VM Desktop (vm.schoolcheats.net)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SchoolCheats offers a browser-hosted virtual machine (vm.schoolcheats.net) designed to help K-12 students bypass school Chromebook network blocks. However, using a remote cloud VM to log into a university Canvas account logs a datacenter IP address right in your university's IT security audit trail and triggers institutional 2FA/Duo location alerts.",
          },
        },
      ],
    },
  ],
};

export default function SchoolCheatsVsExamGhostPage() {
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
              SchoolCheats.net vs ExamGhost
            </span>
          </nav>
        </div>

        {/* BESPOKE HERO: 7 K-12 GAME SCRIPTS VS UNIVERSAL UNIVERSITY LMS STEALTH */}
        <header className="relative pt-4 pb-16 sm:pb-20 overflow-hidden border-b border-sand-dark/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-xs font-mono font-bold text-rose-900 mb-6 shadow-sm">
              <Gamepad2 className="w-3.5 h-3.5 text-rose-700" />
              <span>2026 Platform &amp; Pricing Audit · schoolcheats.net vs ExamGhost</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-ink font-display leading-[1.08] mb-6 max-w-4xl">
              SchoolCheats only works on 7 K-12 &amp; drill sites for $25/mo. ExamGhost protects Canvas, Blackboard &amp; Moodle.
            </h1>

            <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-3xl leading-relaxed mb-8">
              SchoolCheats (<code className="text-ink font-mono text-sm bg-sand/70 px-1.5 py-0.5 rounded">schoolcheats.net</code>) is a collection of hardcoded scripts for just <strong>7 platforms</strong> (Blooket, Wayground/Quizizz, Edpuzzle, DeltaMath, ZyBooks, Edmentum, and Lexia)—with <strong>zero support for Canvas, Blackboard, Moodle, or D2L</strong>. Worse, its Free tier disables Answer Retrieval with a red <strong>&ldquo;X&rdquo;</strong>, its workflow redirects your tab to <code className="text-ink font-mono text-sm bg-sand/70 px-1.5 py-0.5 rounded">schoolcheats.net</code>, and unlocking answers costs <strong>$8.99/week ($35.96/mo) or $25/month</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
              <a
                href="https://discord.gg/aCcsyKYJq4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-ink text-white font-semibold hover:bg-ink-light transition-all shadow-sm hover:shadow group text-sm sm:text-base"
              >
                <FaChrome className="w-4 h-4 text-mint" aria-hidden="true" />
                <span>Start 50 Free University LMS Solves ($0)</span>
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
                <span>See Passes ($19/mo · $99/yr)</span>
              </Link>
            </div>

            {/* HERO SIDE-BY-SIDE VISUAL MOCKUP */}
            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              {/* Left Card: SchoolCheats.net */}
              <div className="rounded-2xl bg-surface border-2 border-rose-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                      <span className="font-display font-bold text-sm text-ink">SchoolCheats.net (7-Site Script Catalog)</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[11px] font-mono font-bold text-rose-800">
                      $8.99/wk or $25/mo
                    </span>
                  </div>

                  {/* Platform & Workflow Box */}
                  <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-4 mb-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-2">
                      <span>Supported Platforms (7 Total)</span>
                      <span className="text-rose-700 font-bold">0% Canvas / Blackboard</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {["Blooket", "Wayground (Quizizz)", "Edpuzzle", "DeltaMath", "ZyBooks", "Edmentum", "Lexia"].map((p) => (
                        <span key={p} className="px-2 py-0.5 rounded bg-surface border border-sand-dark/30 text-[11px] font-mono text-ink-muted">
                          {p}
                        </span>
                      ))}
                    </div>
                    <div className="p-2.5 rounded-lg bg-rose-100/80 border border-rose-300 text-xs text-rose-950 font-medium flex items-center justify-between gap-2">
                      <span>Step 3: &ldquo;Automatically sent to School Cheats for answer retrieval&rdquo;</span>
                      <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-rose-200 text-rose-800 shrink-0">
                        Tab Redirect!
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>Zero University LMS Support:</strong> Does nothing on Canvas, Blackboard Ultra, Moodle, D2L, McGraw Hill Connect, or Pearson.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>1.2s &ldquo;Auto Complete&rdquo; Anomaly Flag:</strong> Blasting API completions in 1 second paints a red bot flag in ZyBooks/DeltaMath teacher logs.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                      <Lock className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      <span><strong>Free Tier Blocks Answers:</strong> Answer Retrieval is marked with a red <strong>X</strong> on the Free plan ($8.99/wk or $25/mo required).</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>Cloud VM: Datacenter IP Logged</span>
                  <span className="text-rose-800 font-bold">Redirect Blur: Triggered</span>
                </div>
              </div>

              {/* Right Card: ExamGhost */}
              <div className="rounded-2xl bg-surface border-2 border-emerald-500/40 p-5 sm:p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="font-display font-bold text-sm text-ink">ExamGhost Universal LMS Stealth Suite</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-bold text-emerald-800">
                      50 Free Solves ($0)
                    </span>
                  </div>

                  {/* Platform & Workflow Box */}
                  <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-4 mb-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-2">
                      <span>Universal LMS + STEM Drill Coverage</span>
                      <span className="text-emerald-800 font-bold">100% In-Tab Stealth</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {["Canvas LMS", "Blackboard Ultra", "Moodle", "D2L Brightspace", "DeltaMath", "ZyBooks", "McGraw Hill Connect"].map((p) => (
                        <span key={p} className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-semibold text-emerald-900">
                          {p}
                        </span>
                      ))}
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-950 text-white border border-emerald-700 text-xs font-medium flex items-center justify-between gap-2">
                      <span className="text-emerald-100">In-Tab Closed ShadowRoot HUD · 0 Tab Redirects</span>
                      <span className="text-[10px] font-mono bg-emerald-900 px-2 py-0.5 rounded border border-emerald-700 text-emerald-200 shrink-0">
                        0.3s Vision OCR
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Built for College Exams &amp; STEM Drills:</strong> Solves Canvas, Blackboard, Moodle, plus DeltaMath graphs &amp; ZyBooks code via 0.3s Vision OCR.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Natural Human Pacing + Focus Shield:</strong> Never bot-submits in 1 second or redirects your tab; blocks <code className="font-mono text-[11px]">window.blur</code> events.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>50 Free Solves + Lower Pricing:</strong> Test 50 real AI solves &amp; 10 OCR snips for $0, then pay $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="text-emerald-800 font-bold">Local Browser IP (No VM Alert)</span>
                  <span className="text-emerald-800 font-bold">Panic Purge: ⌘+Shift+U</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* INTERACTIVE PURE-CSS 3-TAB ARCHITECTURE & TELEMETRY BREAKDOWN */}
        <section className="py-16 sm:py-20 bg-sand/30 border-b border-sand-dark/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sand-dark/30 text-xs font-mono font-semibold text-ink-muted mb-3">
                <Layers className="w-3.5 h-3.5 text-emerald-800" />
                <span>Interactive Audit · Click Any Tab Below</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-ink mb-3">
                Why College Students Switch From SchoolCheats to ExamGhost
              </h2>
              <p className="text-sm sm:text-base text-ink-muted">
                Compare platform compatibility, teacher gradebook timestamp logs, and Cloud VM vs local Shadow DOM security.
              </p>
            </div>

            <div>
              <input type="radio" name="sc-tabs" id="sc-tab-sites" className="sr-only peer/sites" defaultChecked />
              <input type="radio" name="sc-tabs" id="sc-tab-flags" className="sr-only peer/flags" />
              <input type="radio" name="sc-tabs" id="sc-tab-vm" className="sr-only peer/vm" />

              {/* Tab Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto mb-8 bg-surface p-2 rounded-2xl border border-sand-dark/30 shadow-sm">
                <label
                  htmlFor="sc-tab-sites"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/sites:bg-ink peer-checked/sites:text-white peer-checked/sites:shadow-sm flex items-center justify-center gap-2"
                >
                  <Gamepad2 className="w-4 h-4 shrink-0" />
                  <span>1. 7 Game Sites vs All LMS</span>
                </label>
                <label
                  htmlFor="sc-tab-flags"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/flags:bg-ink peer-checked/flags:text-white peer-checked/flags:shadow-sm flex items-center justify-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>2. Redirect &amp; Bot Time Flags</span>
                </label>
                <label
                  htmlFor="sc-tab-vm"
                  className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/vm:bg-ink peer-checked/vm:text-white peer-checked/vm:shadow-sm flex items-center justify-center gap-2"
                >
                  <Server className="w-4 h-4 shrink-0" />
                  <span>3. Cloud VM IP &amp; $25/Mo Price</span>
                </label>
              </div>

              {/* TAB 1: 7 K-12 GAME SITES VS ALL UNIVERSITY LMS */}
              <div className="hidden peer-checked/sites:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>SchoolCheats.net: Hardcoded for 7 Sites Only</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Built for Blooket, Quizizz &amp; Edpuzzle—not Canvas or Blackboard
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Originally started as a K-12 bookmarklet server for classroom trivia games, SchoolCheats relies on platform-specific API hooks for only seven domains:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-sand/50 border border-sand-dark/25 text-ink">1. Blooket (Game)</div>
                    <div className="p-2.5 rounded-xl bg-sand/50 border border-sand-dark/25 text-ink">2. Wayground / Quizizz</div>
                    <div className="p-2.5 rounded-xl bg-sand/50 border border-sand-dark/25 text-ink">3. Edpuzzle (Video)</div>
                    <div className="p-2.5 rounded-xl bg-sand/50 border border-sand-dark/25 text-ink">4. DeltaMath</div>
                    <div className="p-2.5 rounded-xl bg-sand/50 border border-sand-dark/25 text-ink">5. ZyBooks</div>
                    <div className="p-2.5 rounded-xl bg-sand/50 border border-sand-dark/25 text-ink">6. Edmentum &amp; 7. Lexia</div>
                  </div>
                  <p className="text-xs text-rose-800 font-medium leading-relaxed">
                    Open a university Canvas quiz, Blackboard Ultra test, Moodle exam, D2L Brightspace assessment, or McGraw Hill Connect module, and SchoolCheats has zero functionality.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ExamGhost: Universal University LMS + STEM Drills</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Works on every university portal, iframe, and STEM platform
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Instead of brittle game bookmarklets, ExamGhost combines DOM extraction with an in-browser <strong>0.3s Snap-It Vision OCR crosshair</strong> that solves questions on any webpage:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>Core University LMS:</strong> Canvas (Classic &amp; LTI 1.3 New Quizzes), Blackboard Ultra, Moodle, and D2L Brightspace.
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                      <strong>STEM &amp; Publisher Portals:</strong> DeltaMath graphs, ZyBooks coding labs, McGraw Hill Connect, Pearson MyLab, WebAssign, and Cengage MindTap.
                    </div>
                  </div>
                </div>
              </div>

              {/* TAB 2: TAB REDIRECT & AUTO COMPLETE FLAGS */}
              <div className="hidden peer-checked/flags:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>SchoolCheats: Step 3 Redirect + 1.2s Auto Complete</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Why &ldquo;Auto Complete&rdquo; gets flagged in DeltaMath &amp; ZyBooks gradebooks
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    On SchoolCheats.net&apos;s homepage, <strong>How it Works — Step 3</strong> explicitly states: <em>&ldquo;Launch the cheat and get automatically sent to School Cheats for answer retrieval.&rdquo;</em>
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm text-ink-muted">
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>1. Automatic Tab Redirection (<code className="font-mono">window.blur</code>):</strong> Sending your browser to <code className="font-mono">schoolcheats.net</code> to view answers fires immediate focus-loss and visibility telemetry on monitored portals.
                    </div>
                    <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>2. Sub-Second Bot Timestamp Anomalies:</strong> DeltaMath and ZyBooks record exact per-question completion times for instructors. Clicking SchoolCheats&apos; &ldquo;Auto Complete&rdquo; finishes a 25-minute problem set in 1.2 seconds—an instant automated cheating flag.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <Zap className="w-3.5 h-3.5" />
                    <span>ExamGhost: In-Tab Shadow HUD + Human Pacing</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Zero tab redirects and realistic human submission timestamps
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    ExamGhost never redirects your browser to an external dashboard and never blasts automated 1-second API submissions:
                  </p>
                  <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto leading-relaxed border border-emerald-800">
                    <div className="text-emerald-400">// 1. Focus Shield blocks window.blur &amp; visibilitychange:</div>
                    <div>window.addEventListener(&quot;blur&quot;, (e) =&gt; e.stopImmediatePropagation(), true);</div>
                    <div className="text-emerald-400 mt-2">// 2. Solves DeltaMath/ZyBooks/Canvas in-tab in 0.3s:</div>
                    <div>const solution = await EdgeVision.solveRegion(rect);</div>
                    <div className="text-emerald-400 mt-2">// 3. Student submits at natural human cadence</div>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Your instructor&apos;s analytics log shows zero tab departures and normal human problem-solving durations.
                  </p>
                </div>
              </div>

              {/* TAB 3: CLOUD VM & PRICING */}
              <div className="hidden peer-checked/vm:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                    <Server className="w-3.5 h-3.5" />
                    <span>SchoolCheats Cloud VM &amp; $8.99/Wk Paywall</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Why Cloud VMs trigger university IT alerts—and Free blocks answers
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    SchoolCheats markets <code className="font-mono text-xs bg-sand px-1 rounded">vm.schoolcheats.net</code> (a browser-hosted Linux virtual desktop) to help K-12 students bypass Chromebook filters, and gates Answer Retrieval behind a paid tier:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>Datacenter IP Flag in University SSO:</strong> Logging into a university Canvas or Duo 2FA account from a shared commercial cloud VM logs a hosting datacenter IP in your Canvas session audit trail.
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                      <strong>Free Plan Disables Answer Retrieval (&ldquo;X&rdquo;):</strong> On <code className="font-mono">schoolcheats.net/pricing</code>, the Free tier puts a red <strong>X</strong> on Answer Retrieval. Unlocking answers costs <strong>$8.99/week ($35.96/mo)</strong> or <strong>$25.00/month</strong>.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>ExamGhost Local Browser Stealth &amp; 50 Free Solves</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    Runs on your real residential/campus IP with 50 free solves
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    ExamGhost runs natively inside your own Chrome, Edge, or Brave browser—preserving your normal campus or home IP address while isolating all UI inside a closed Shadow DOM.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Free Starter Trial (Full AI + OCR)</span>
                      <span className="font-mono font-bold text-emerald-800">50 Free Solves ($0)</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Monthly Pass (vs SchoolCheats $25/mo)</span>
                      <span className="font-mono font-bold text-emerald-800">$19.00 / month</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Academic Year Pass ($8.25/mo)</span>
                      <span className="font-mono font-bold text-emerald-800">$99 / year</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <span className="font-semibold text-emerald-950">Lifetime Degree Pass (3 Devices)</span>
                      <span className="font-mono font-bold text-emerald-800">$199 One-Time</span>
                    </div>
                  </div>
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
                <Gamepad2 className="w-5 h-5 text-ink-muted" />
                <span>When SchoolCheats.net Fits Best</span>
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                SchoolCheats was built for K-12 classroom games and specific high school drill sites:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>Classroom Trivia Games (Blooket &amp; Wayground/Quizizz):</strong> If you want token multipliers, chest revealers, or client-side game mods during ungraded classroom trivia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>Bypassing K-12 Chromebook Filters:</strong> If you are on a school-issued Chromebook that blocks gaming sites and want to use <code className="font-mono text-xs">vm.schoolcheats.net</code>.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
              <h2 className="font-display font-bold text-lg sm:text-xl text-emerald-300 mb-3 flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-emerald-300" />
                <span>When University Students Choose ExamGhost</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-4">
                If you are in college taking graded quizzes and exams on Canvas, Blackboard, Moodle, D2L, DeltaMath, or ZyBooks:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Universal University LMS Coverage:</strong> Works natively on Canvas, Blackboard Ultra, Moodle, D2L Brightspace, McGraw Hill Connect, Pearson, DeltaMath, and ZyBooks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>In-Tab Closed Shadow DOM + Focus Shield:</strong> Never redirects your tab to an external website or trips 1-second bot completion flags.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>50 Free Solves ($0, No Card):</strong> Verify real AI + Vision OCR accuracy before paying $19/mo, $99/yr, or $199 Lifetime.</span>
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
                2026 Feature &amp; Architecture Matrix
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted">
                Verified directly against <code className="font-mono text-xs">schoolcheats.net</code> and <code className="font-mono text-xs">schoolcheats.net/pricing</code>.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-sand-dark/30">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                <thead>
                  <tr className="border-b border-sand-dark/30 bg-sand/40">
                    <th className="py-3.5 px-4 font-bold text-ink">Capability / Metric</th>
                    <th className="py-3.5 px-4 font-bold text-ink-muted">Why It Matters in College</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-800">ExamGhost</th>
                    <th className="py-3.5 px-4 font-bold text-rose-800">SchoolCheats.net</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-dark/20">
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Canvas, Blackboard, Moodle &amp; D2L</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Core university exam &amp; quiz portals</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      100% Native Support
                    </td>
                    <td className="py-3.5 px-4 text-rose-800 font-medium">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      None (0% Supported)
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">DeltaMath &amp; ZyBooks Support</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Solving math graphs &amp; coding labs safely</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      0.3s Vision OCR + Human Pacing
                    </td>
                    <td className="py-3.5 px-4 text-ink-muted">
                      $25/mo Premium required; Auto-Complete risks bot time flags
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">How Answers Load</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Avoiding tab switches during monitored tests</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      In-Tab Closed ShadowRoot HUD
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      Redirects tab to schoolcheats.net
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Blur Masking)</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Blocks window.blur &amp; visibilitychange logs</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      3-Layer Capture-Phase Shield
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      None (Redirect fires blur logs)
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Vision OCR for Diagrams &amp; PDFs</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Reads non-selectable graphs, circuits &amp; iframes</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      0.3s Crosshair Region Snip
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      Static script hooks only
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Free Tier Answer Retrieval</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Can you get real answers for $0?</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      50 Free Solves + 10 OCR Snips ($0)
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      Disabled (&ldquo;X&rdquo;) on Free Plan
                    </td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="py-3.5 px-4 font-semibold text-ink">Paid Pricing Tiers</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">Monthly, annual &amp; lifetime cost</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      $19/mo · $99/yr ($8.25/mo) · $199 Life
                    </td>
                    <td className="py-3.5 px-4 text-ink-muted">
                      $8.99/wk ($35.96/mo) · $25/mo · $100/yr
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="py-3.5 px-4 font-semibold text-ink">Emergency Panic Kill Switch</td>
                    <td className="py-3.5 px-4 text-ink-muted text-xs">1ms RAM &amp; UI purge if a TA walks by</td>
                    <td className="py-3.5 px-4 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                      ⌘+Shift+U / Esc Instant Purge
                    </td>
                    <td className="py-3.5 px-4 text-rose-800">
                      <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                      None
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Chrome Web Store & Domain Audit Drawer */}
            <details className="mt-6 group rounded-2xl bg-sand/40 border border-sand-dark/30 p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-mono font-bold text-ink">
                <span className="flex items-center gap-2 m-0 inline">
                  <Terminal className="w-4 h-4 text-emerald-800" />
                  <h3 className="font-bold m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (schoolcheats.net)</h3>
                </span>
                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4 pt-4 border-t border-sand-dark/20 grid sm:grid-cols-2 gap-4 text-xs font-mono text-ink-muted">
                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                  <div className="text-ink font-bold mb-1">SchoolCheats Verified Identifiers</div>
                  <div>Primary Domain: <span className="text-ink">schoolcheats.net</span></div>
                  <div>Cloud VM Subdomain: <span className="text-rose-800">vm.schoolcheats.net (Datacenter IP)</span></div>
                  <div>Chrome Extension ID: <span className="text-ink">dcecjjjnjecoiehclollekjmfgblkkha</span></div>
                  <div>Supported Catalog: <span className="text-ink">7 sites (0 university LMS portals)</span></div>
                </div>
                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                  <div className="text-ink font-bold mb-1">ExamGhost Stealth Architecture</div>
                  <div>UI Isolation: <span className="text-emerald-800">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</span></div>
                  <div>Network Footprint: <span className="text-emerald-800">Local Browser (Residential/Campus IP)</span></div>
                  <div>Focus Shield: <span className="text-emerald-800">window.blur / visibilitychange capture</span></div>
                  <div>Screen OCR: <span className="text-emerald-800">0.3s Edge Vision Crosshair</span></div>
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
                  Claim 50 free AI question solves for Canvas, Blackboard, Moodle, DeltaMath &amp; ZyBooks.
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
              SchoolCheats.net vs ExamGhost: Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Direct answers verified against SchoolCheats.net&apos;s live 2026 platform catalog and pricing tiers.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does SchoolCheats.net work on Canvas, Blackboard, or Moodle?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                No. According to SchoolCheats.net&apos;s live 2026 platform catalog, it only supports 7 specific platforms: <strong>DeltaMath, ZyBooks, Wayground (Quizizz), Blooket, Edpuzzle, Edmentum, and Lexia Learning</strong>. It has zero support for Canvas, Blackboard Ultra, Moodle, D2L Brightspace, McGraw Hill Connect, or Pearson MyLab. ExamGhost works across all university LMS platforms as well as DeltaMath and ZyBooks.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does SchoolCheats.net retrieve answers, and is it detectable?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                On SchoolCheats.net&apos;s homepage (&ldquo;How it Works — Step 3&rdquo;), the workflow states: <em>&ldquo;Launch the cheat and get automatically sent to School Cheats for answer retrieval,&rdquo;</em> alongside &ldquo;Auto Complete&rdquo; scripts. Being redirected to <code className="font-mono text-xs">schoolcheats.net</code> triggers immediate <code className="font-mono text-xs">window.blur</code> and <code className="font-mono text-xs">visibilitychange</code> events, while Auto Complete scripts finish 20-minute modules in under 2 seconds—flagging teacher analytics logs immediately.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Are Answer Retrieval and Auto Complete free on SchoolCheats.net?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                No. On SchoolCheats.net&apos;s pricing matrix, the Free Plan disables (<strong>X</strong>) both Answer Retrieval and Auto Complete for DeltaMath, ZyBooks, Edpuzzle, and Wayground. Unlocking Answer Retrieval requires a paid Premium Membership at <strong>$8.99/week ($35.96/mo)</strong> or <strong>$25.00/month</strong>. ExamGhost includes <strong>50 free full AI &amp; OCR solves ($0)</strong> and costs <strong>$19/mo, $99/yr ($8.25/mo), or $199 Lifetime</strong>.
              </p>
            </details>

            <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What is the SchoolCheats Cloud VM Desktop (vm.schoolcheats.net)?</h3>
                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                SchoolCheats offers a browser-hosted virtual machine designed to help K-12 students bypass school Chromebook network blocks. However, using a remote cloud VM to log into a university Canvas account logs a commercial datacenter IP address in your university&apos;s security audit trail and triggers institutional Duo/2FA location alerts. ExamGhost runs locally inside your own Chrome browser on your residential/campus IP.
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
                  <span>Built for University Courses, Not Just Blooket</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-2">
                  Solve Canvas, Blackboard, DeltaMath &amp; ZyBooks in 0.3s.
                </h2>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Start with 50 Free Question Solves + 10 Vision OCR Snips ($0, no credit card required). Zero tab redirects, zero bot completion flags.
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
                href="/canvasscholar-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">Canvas Scholar vs ExamGhost</span>
                <span className="text-ink-muted">Past Retake Viewer vs Live AI Solver</span>
              </Link>
              <Link prefetch={false}
                href="/canvascrack-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">CanvasCrack vs ExamGhost</span>
                <span className="text-ink-muted">Tab-Blocker Only vs Full AI + Stealth</span>
              </Link>
              <Link prefetch={false}
                href="/quizmate-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">QuizMate vs ExamGhost</span>
                <span className="text-ink-muted">Injected LMS Button vs Shadow DOM</span>
              </Link>
              <Link prefetch={false}
                href="/coursology-vs-examghost"
                className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm"
              >
                <span className="font-semibold block text-ink">Coursology vs ExamGhost</span>
                <span className="text-ink-muted">Coursey AI Suite vs Exam Stealth</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
