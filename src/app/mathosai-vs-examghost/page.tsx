import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Check,
  X,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  Calculator,
  FileText,
  Video,
  EyeOff,
  BookOpen,
  DollarSign,
  Code2,
  CheckCircle2,
  AlertTriangle,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Mathos AI vs ExamGhost (2026) — $9.98/Wk MathGPTPro Audit",
    },
    description: "Compare Mathos AI (MathGPTPro) with ExamGhost. Skip $9.98/week billing and tab-switch logs using 0.3s Snap-It Vision OCR, Focus Shield, and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/mathosai-vs-examghost",
    },
    openGraph: {
        title: "Mathos AI vs ExamGhost (2026) — $9.98/Wk MathGPTPro Audit",
        description: "Compare Mathos AI (MathGPTPro) with ExamGhost. Skip $9.98/week billing and tab-switch logs using 0.3s Snap-It Vision OCR, Focus Shield, and 50 Free Solves.",
        url: "https://examghost.com/mathosai-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Mathos AI vs ExamGhost (2026) — $9.98/Wk MathGPTPro Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mathos AI vs ExamGhost (2026) — $9.98/Wk MathGPTPro Audit",
        description: "Compare Mathos AI (MathGPTPro) with ExamGhost. Skip $9.98/week billing and tab-switch logs using 0.3s Snap-It Vision OCR, Focus Shield, and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
                "datePublished": "2026-01-13",
                "dateModified": "2026-03-05",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
      "@id": "https://examghost.com/mathosai-vs-examghost#webpage",
      url: "https://examghost.com/mathosai-vs-examghost",
      name: "Mathos AI (MathGPTPro) vs ExamGhost AI (2026): PDF Helper, Video Lessons & Canvas Stealth",
      description:
        "Detailed 2026 audit comparing Mathos AI (mathos.ai / MathGPTPro) and ExamGhost AI across STEM accuracy, PDF homework workflows, AI video generation, LMS tab-switch protection, and weekly vs semester pricing.",
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        name: "ExamGhost AI",
        url: "https://examghost.com",
      },
      breadcrumb: {
        "@id": "https://examghost.com/mathosai-vs-examghost#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://examghost.com/mathosai-vs-examghost#breadcrumb",
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
          name: "Compare LMS Extensions",
          item: "https://examghost.com/compare-canvas-hack-extensions",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mathos AI vs ExamGhost AI",
          item: "https://examghost.com/mathosai-vs-examghost",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://examghost.com/mathosai-vs-examghost#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Mathos AI the same as MathGPTPro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Mathos AI (operated by Mathos, Inc. in San Francisco, CA and founded in July 2023 by TianWei Yue) is the rebranded name of MathGPTPro. It serves 5M+ students across its web workspace (mathos.ai/app/ask) and iOS/Android mobile apps.",
          },
        },
        {
          "@type": "Question",
          name: "Can Canvas, Blackboard, or WebAssign detect if I switch tabs to Mathos AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Mathos AI is built around an external web workspace (mathos.ai/app/ask) and mobile camera apps rather than a stealth in-tab LMS anti-detection layer. Whenever you click outside your Canvas or Blackboard quiz tab to paste a question or upload a screenshot into Mathos AI, the browser fires visibilitychange and window.blur events that log 'stopped viewing the Canvas quiz-taking page' on your professor's dashboard. ExamGhost AI solves questions directly inside your active LMS tab using a closed Shadow DOM HUD and blocks focus-loss telemetry.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Mathos AI cost per week vs ExamGhost AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mathos AI bills primarily on weekly or annual tiers: Basic costs ~$5.98/week (~$23.92/month equivalent, capping MathosMax at 100 solves/day) and Prime costs ~$9.98/week (~$39.92/month equivalent, or ~$98.80/year billed annually) for unlimited MathosMax and 20x PDF Helper quota. ExamGhost AI gives you 50 Free Question Solves ($0, no credit card required), a $19/month Monthly Pass (more than 50% cheaper than paying Mathos AI Prime weekly), a $99/year Academic Year Pass ($8.25/month), and a $199 Lifetime Degree Pass.",
          },
        },
        {
          "@type": "Question",
          name: "When is Mathos AI a better fit than ExamGhost AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mathos AI is an excellent choice when you are studying offline from downloadable PDF problem sets (using its circle-to-solve PDF Homework Helper) or when you want AI-generated animated video lessons (/feature/video-generation) to visualize Calculus or Linear Algebra concepts. ExamGhost AI is the superior choice for live, timed online quizzes and midterms across Canvas, Blackboard, Moodle, D2L, WebAssign, ALEKS, McGraw Hill Connect, and Pearson MyLab.",
          },
        },
      ],
    },
  ],
};

export default function MathosAiVsExamGhostPage() {
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
              Compare LMS Extensions
            </Link>
            <span>/</span>
            <span className="text-emerald-900 font-semibold">
              Mathos AI vs ExamGhost AI
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: High-Converting SaaS Copy & Hero CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-mono uppercase tracking-widest mb-5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
                <span>2026 STEM Solver &amp; Canvas Stealth Comparison</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-5">
                Mathos AI (MathGPTPro) Excels at PDF Study—Until You{" "}
                <span className="text-indigo-800 underline decoration-indigo-400/70 decoration-wavy underline-offset-4">
                  Leave a Live Exam Tab
                </span>
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
                Backed by Y Combinator, <strong>Mathos AI</strong> (formerly{" "}
                <strong>MathGPTPro</strong> at{" "}
                <code className="font-mono text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded">
                  mathos.ai
                </code>
                ) serves 5M+ students with an awesome <strong>PDF Homework Helper</strong>{" "}
                and AI animated math videos. The catch? Mathos AI is an{" "}
                <strong>external web workspace</strong>. Clicking over to{" "}
                <code className="font-mono text-sm bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded">
                  mathos.ai/app/ask
                </code>{" "}
                during a live Canvas, WebAssign, or ALEKS quiz immediately logs a{" "}
                <strong>tab-switch blur event</strong> on your professor&apos;s
                timeline—and unlocking unlimited <em>MathosMax</em> costs{" "}
                <strong>~$9.98/week (~$40/mo)</strong>. Here is how it compares to{" "}
                <strong>ExamGhost AI</strong>.
              </p>

              {/* 3 Fast Scannable Stat Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Live Quiz Stealth
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-emerald-800">In-Tab Focus Shield</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    vs External mathos.ai tab blur
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Course Coverage
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-emerald-800">All College Majors</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    STEM + Nursing, Biz &amp; Gen-Ed
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-sm">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Unlimited Best Model
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    <span className="text-rose-700 line-through mr-1.5">$39.92/mo</span>
                    <span className="text-emerald-800">$19/mo</span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    + 50 Free Solves ($0 upfront)
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
                  Try Live STEM Sandbox
                </Link>
                <a
                  href="#interactive-comparison"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold hover:underline px-2 py-2"
                >
                  Compare PDF vs In-Tab OCR ↓
                </a>
              </div>
            </div>

            {/* Right Column: Bespoke PDF Workspace vs In-Tab STEM Exam Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-[#111111] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#111111]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 ml-1">
                      Calculus II Midterm • Canvas + WebAssign
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-900 font-semibold">
                    ∫ Surface Integral
                  </span>
                </div>

                {/* Top Simulator Card: Mathos AI Workspace */}
                <div className="rounded-2xl bg-amber-50/80 border border-amber-200 p-4 mb-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-amber-950 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                      Mathos AI (mathos.ai/app/ask)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-200/80 text-amber-950">
                      External Tab Required
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white/90 rounded-lg p-2.5 border border-amber-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        Offline PDF &amp; Video Lessons:
                      </span>
                      <span className="text-emerald-800 font-bold">
                        5-Stage Workspace ✓
                      </span>
                    </div>
                    <div className="bg-white/90 rounded-lg p-2.5 border border-amber-200/80 flex items-center justify-between">
                      <span className="text-neutral-700">
                        Live Canvas Quiz Tab Switch:
                      </span>
                      <span className="text-rose-800 font-bold">
                        window.onblur Logged ⚠️
                      </span>
                    </div>
                    <div className="bg-rose-950 text-rose-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>Unlimited MathosMax Cost:</span>
                      <span className="text-rose-300 font-bold">
                        $9.98/wk (~$39.92/mo)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Simulator Card: ExamGhost AI */}
                <div className="rounded-2xl bg-emerald-50/90 border-2 border-emerald-700 p-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-950 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      ExamGhost AI v4.2 (In-Tab STEM OCR)
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-200 text-emerald-950">
                      0.3s In-Tab HUD
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        Drag-to-Snip Integral / Matrix:
                      </span>
                      <span className="text-emerald-800 font-bold">
                        LaTeX Steps in 0.3s ✓
                      </span>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 border border-emerald-200 flex items-center justify-between">
                      <span className="text-neutral-700">
                        Canvas &amp; WebAssign Telemetry:
                      </span>
                      <span className="text-emerald-800 font-bold">
                        0 Tab Leaves Logged ✓
                      </span>
                    </div>
                    <div className="bg-emerald-950 text-emerald-100 rounded-lg p-2.5 flex items-center justify-between">
                      <span>All-Majors Unlimited Pass:</span>
                      <span className="text-emerald-300 font-bold">
                        $19/mo or $99/yr ($8.25/mo)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Pure-CSS 3-Tab Comparison Explorer */}
        <section
          id="interactive-comparison"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24"
        >
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              01 // Interactive Architecture &amp; Pricing Explorer
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Where Mathos AI Shines vs Where ExamGhost AI Wins
            </h2>
            <p className="text-neutral-700 mt-2 max-w-3xl text-sm sm:text-base">
              Unlike generic review sites, we tested Mathos AI&apos;s 5-stage
              learning workspace, its PDF Homework Helper, and its weekly billing
              tiers alongside ExamGhost AI. Click any tab below to compare.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111111] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#111111]">
            {/* Pure CSS Radio Inputs */}
            <input
              type="radio"
              name="ma-tabs"
              id="tab-ma-workflow"
              className="sr-only peer/ma-workflow"
              defaultChecked
            />
            <input
              type="radio"
              name="ma-tabs"
              id="tab-ma-models"
              className="sr-only peer/ma-models"
            />
            <input
              type="radio"
              name="ma-tabs"
              id="tab-ma-pricing"
              className="sr-only peer/ma-pricing"
            />

            {/* Tab Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-6 mb-8 border-b border-neutral-200">
              <label
                htmlFor="tab-ma-workflow"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/ma-workflow:border-[#111111] peer-checked/ma-workflow:bg-emerald-950 peer-checked/ma-workflow:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <FileText className="w-4 h-4" />
                  <span>Tab 01 • Study vs Live Exam</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  PDF Helper &amp; Videos vs In-Tab OCR
                </div>
              </label>

              <label
                htmlFor="tab-ma-models"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/ma-models:border-[#111111] peer-checked/ma-models:bg-emerald-950 peer-checked/ma-models:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Tab 02 • AI Models &amp; Majors</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  MathosMax Caps &amp; All-Major Coverage
                </div>
              </label>

              <label
                htmlFor="tab-ma-pricing"
                className="cursor-pointer rounded-2xl p-4 border-2 border-neutral-200 bg-[#FAF8F5] hover:border-neutral-400 transition-all peer-checked/ma-pricing:border-[#111111] peer-checked/ma-pricing:bg-emerald-950 peer-checked/ma-pricing:text-white"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-80 mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span>Tab 03 • Semester Cost Math</span>
                </div>
                <div className="font-bold text-sm sm:text-base">
                  $9.98/wk (~$160/Sem) vs $99/yr Pass
                </div>
              </label>
            </div>

            {/* Panel 1: PDF Helper & Videos vs In-Tab OCR */}
            <div className="hidden peer-checked/ma-workflow:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-mono font-bold uppercase">
                  Workflow Architecture Comparison
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  &quot;One Prompt Becomes a Lesson&quot; vs Zero-Trace Live Portal Solving
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Mathos AI genuinely stands out when you are studying offline the
                  night before a test. Inside{" "}
                  <code className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded">
                    mathos.ai/app/ask
                  </code>
                  , a single question opens five study tabs:{" "}
                  <strong>Ask</strong>, <strong>Solution</strong>,{" "}
                  <strong>Video</strong> (which generates Manim-style animated
                  visual explanations), <strong>Flashcards</strong>, and{" "}
                  <strong>Quizzes</strong>. And if your professor hands out
                  downloadable <code className="font-mono text-xs">.pdf</code>{" "}
                  worksheets, its <strong>PDF Homework Helper</strong> lets you
                  circle equations right on the document.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  The problem happens when your graded work is hosted inside{" "}
                  <strong>Canvas Quizzes</strong>, <strong>Cengage WebAssign</strong>,{" "}
                  <strong>McGraw Hill ALEKS</strong>, or{" "}
                  <strong>Pearson MyLab Math</strong>. Because Mathos AI has no
                  in-tab Focus Shield, every time you click outside your quiz tab
                  to paste or upload a screenshot into{" "}
                  <code className="font-mono text-xs">mathos.ai</code>, the LMS
                  records a <code className="font-mono text-xs">window.blur</code>{" "}
                  and <code className="font-mono text-xs">visibilitychange</code>{" "}
                  violation.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#FAF8F5] border border-neutral-200 rounded-2xl p-5">
                  <div className="text-xs font-mono uppercase font-bold text-indigo-900 mb-2">
                    When Mathos AI Fits Best
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    <li>• Annotating downloadable <code className="font-mono text-xs">.pdf</code> math problem sets offline</li>
                    <li>• Watching AI-generated animated visual math videos (<code className="font-mono text-xs">/feature/video-generation</code>)</li>
                    <li>• Scanning paper homework with the iOS/Android camera app</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-800 rounded-2xl p-5">
                  <div className="text-xs font-mono uppercase font-bold text-emerald-950 mb-2">
                    When ExamGhost AI Wins
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-800">
                    <li>• Live timed quizzes on Canvas, Blackboard, Moodle &amp; D2L</li>
                    <li>• Multi-part WebAssign, ALEKS &amp; MyLab Math portals</li>
                    <li>• Zero tab switches—Snap-It OCR snips graphs in 0.3s inside a closed Shadow DOM HUD with Focus Shield active</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Panel 2: MathosMax Caps & All-Major Coverage */}
            <div className="hidden peer-checked/ma-models:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase">
                  Model Tiering &amp; Subject Scope
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  Why Split MathosPro vs MathosMax—And What About Your Non-Math Classes?
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Mathos AI divides its solver into two accuracy tiers:{" "}
                  <strong>MathosPro</strong> (standard model) and{" "}
                  <strong>MathosMax</strong> (its flagship STEM reasoning model).
                  On the Free plan, daily solves and image uploads are tightly
                  capped. Even if you pay <strong>~$5.98/week</strong> for the
                  Basic plan, <em>MathosMax</em> is still capped at 100 queries
                  per day—forcing heavy users onto the{" "}
                  <strong>~$9.98/week Prime plan</strong> for unlimited{" "}
                  <em>MathosMax</em> and the 20× PDF Helper quota.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Furthermore, Mathos AI is engineered specifically around 7 math
                  disciplines (Algebra, Calculus, Differential Equations,
                  Geometry, Linear Algebra, Trigonometry, and Statistics) plus
                  introductory Physics. <strong>ExamGhost AI</strong> never
                  gates its frontier reasoning model and covers{" "}
                  <strong>every class on your college schedule</strong>—from
                  Vector Calculus and Circuit Analysis to Organic Chemistry,
                  Nursing (NCLEX), Financial Accounting, Computer Science, and
                  Gen-Ed Humanities.
                </p>
              </div>

              <div className="lg:col-span-5 bg-neutral-900 text-white rounded-2xl p-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold">
                  Full Semester Course Load Coverage
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-between">
                    <span>Calculus I/II/III, Linear Algebra &amp; DiffEq</span>
                    <span className="font-mono text-emerald-300 font-bold">Both ✓</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-between">
                    <span>Organic Chemistry Rings &amp; Reaction Mechanisms</span>
                    <span className="font-mono text-emerald-300 font-bold">ExamGhost Only ✓</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-between">
                    <span>Accounting Balance Sheets &amp; Finance Tables</span>
                    <span className="font-mono text-emerald-300 font-bold">ExamGhost Only ✓</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-between">
                    <span>Nursing (ATI / Pharmacology), Bio &amp; Gen-Eds</span>
                    <span className="font-mono text-emerald-300 font-bold">ExamGhost Only ✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: Semester Cost Math */}
            <div className="hidden peer-checked/ma-pricing:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase">
                  16-Week Semester Billing Audit
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                  How $9.98/Week Quietly Turns Into $159.68 Per Semester
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Weekly pricing looks small at checkout, but college semesters
                  last 16 weeks. Paying Mathos AI Prime&apos;s{" "}
                  <strong>$9.98/week</strong> rate adds up to{" "}
                  <strong>$39.92 every 4 weeks</strong>—or{" "}
                  <strong>$159.68 over a single 16-week semester</strong> (unless
                  you commit to its annual billing tier at ~$98.80/yr). Even
                  Mathos AI Basic at <strong>$5.98/week</strong> costs{" "}
                  <strong>~$23.92/month</strong> while still capping{" "}
                  <em>MathosMax</em>.
                </p>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  <strong>ExamGhost AI</strong> keeps pricing simple and
                  student-friendly: start with{" "}
                  <strong>50 Free Question Solves ($0, no card required)</strong>,
                  upgrade to a single <strong>$19/month Monthly Pass</strong>{" "}
                  during midterms or finals, or lock in a full year (Fall + Spring
                  + Summer) for <strong>$99/year ($8.25/month)</strong> backed by
                  our <strong>14-day 100% money-back guarantee</strong>.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-rose-950">
                      Mathos AI Weekly Billing
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-200 text-rose-950 font-bold">
                      Up to $39.92/mo
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                    <li>• <strong>Basic Plan:</strong> ~$5.98/wk (~$23.92/mo eq., 100 MathosMax/day cap)</li>
                    <li>• <strong>Prime Plan:</strong> ~$9.98/wk (~$39.92/mo eq., or ~$98.80/yr annual)</li>
                    <li>• <strong>16-Week Semester on Prime Weekly:</strong> $159.68</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-emerald-950">
                      ExamGhost AI Transparent Passes
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-800 text-white font-bold">
                      50 Free Solves
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                    <li>• <strong>Free Trial:</strong> 50 Free Solves + 10 OCR Snips ($0)</li>
                    <li>• <strong>Monthly Pass:</strong> $19/month (cancel anytime)</li>
                    <li>• <strong>Academic Year Pass:</strong> $99/year ($8.25/mo)</li>
                    <li>• <strong>Lifetime Pass:</strong> $199 one-time • 14-day 100% refund guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-Side Comparison Matrix + Collapsible Technical Architecture Drawer */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              02 // Head-to-Head Specification Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Mathos AI vs ExamGhost AI: 2026 Feature &amp; Pricing Matrix
            </h2>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#111111] overflow-hidden shadow-[6px_6px_0px_0px_#111111]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#111111] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="py-4 px-5 border-r border-neutral-800 w-1/4">
                      Evaluation Dimension
                    </th>
                    <th className="py-4 px-5 border-r border-neutral-800 w-[37.5%] text-emerald-300">
                      ExamGhost AI (2026 v4.2)
                    </th>
                    <th className="py-4 px-5 w-[37.5%] text-neutral-300">
                      Mathos AI / MathGPTPro (mathos.ai)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-sm">
                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Primary Architecture
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>Stealth In-Tab LMS Extension:</strong>{" "}
                          isolated Shadow DOM HUD +{" "}
                          <code className="font-mono text-xs">0.3s</code>{" "}
                          Snap-It Vision OCR inside your active quiz tab
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      Standalone Web Workspace (
                      <code className="font-mono text-xs">
                        mathos.ai/app/ask
                      </code>
                      ), PDF Uploader &amp; iOS/Android Mobile Apps
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Canvas &amp; LMS Focus Shield
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>Built-in Focus Shield:</strong> blocks{" "}
                          <code className="font-mono text-xs">
                            visibilitychange
                          </code>
                          , <code className="font-mono text-xs">window.blur</code>
                          , <code className="font-mono text-xs">focusout</code>,
                          and mouse-leave tracking across all LMS portals
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                        <span>
                          <strong>None:</strong> switching tabs to{" "}
                          <code className="font-mono text-xs">mathos.ai</code>{" "}
                          is immediately logged by Canvas &amp; Blackboard
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Subject Coverage
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>All University Majors:</strong> Calculus,
                          Physics, Chemistry, Organic Chem, Nursing (NCLEX),
                          Accounting, Finance, CS, Biology &amp; Humanities
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      Focused on <strong>Math, Physics &amp; Engineering</strong>{" "}
                      (Algebra, Calculus, DiffEq, Geometry, Linear Algebra,
                      Trig, Statistics)
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Live WebAssign, ALEKS &amp; MyLab Support
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>In-place region OCR:</strong> snips multi-part
                          WebAssign/ALEKS matrices &amp; graphs directly over
                          the portal without leaving the page
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      Requires screenshotting/clipping and routing into the
                      Mathos AI web dashboard or mobile camera app
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      PDF Worksheet &amp; Video Generation
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      Step-by-step LaTeX derivations &amp; instant concept
                      explanations inside the in-page Tutor Panel
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>Full PDF Homework Helper</strong> + AI
                          animated video lessons, flashcards &amp; graphing
                          calculator
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Free Trial Offer
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>50 Free Question Solves ($0)</strong> + 10
                          Snap-It OCR snips + Focus Shield (no credit card
                          required)
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      Free tier with strict daily caps on{" "}
                      <em>MathosPro</em>/image uploads; 3-day trial on weekly
                      auto-renewing plans
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-5 font-bold bg-[#FAF8F5] border-r border-neutral-200">
                      Pricing Structure (2026)
                    </td>
                    <td className="py-4 px-5 border-r border-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>
                          <strong>$19/month</strong> Monthly •{" "}
                          <strong>$99/year</strong> Academic Year ($8.25/mo) •{" "}
                          <strong>$199 Lifetime</strong> •{" "}
                          <strong>14-day 100% refund guarantee</strong>
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-neutral-700">
                      <strong>Basic:</strong> ~$5.98/wk (~$23.92/mo eq., 100
                      MathosMax/day) • <strong>Prime:</strong> ~$9.98/wk
                      (~$39.92/mo eq., or ~$98.80/yr)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible Technical Schema & Domain Audit Drawer */}
            <details className="group border-t-2 border-[#111111] bg-[#FAF8F5]">
              <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-800 hover:bg-neutral-200/60 transition-colors">
                <h3 className="flex items-center gap-2 m-0 inline">
                  <Code2 className="w-4 h-4 text-emerald-800" />
                  Technical Domain, Schema &amp; App Audit (mathos.ai / MathGPTPro)
                </h3>
                <span className="text-emerald-800 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-xs font-mono text-neutral-700 space-y-3 border-t border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Corporate &amp; App Store Footprint
                    </div>
                    <div>
                      • Entity: Mathos, Inc. (San Francisco, CA • Founded July
                      2023 by TianWei Yue • Y Combinator backed)
                    </div>
                    <div>• Legacy / Alternate Brand: MathGPTPro</div>
                    <div>
                      • iOS App Listing: <code>id6755861373</code> (Mathos AI:
                      Math Solver &amp; Tutor)
                    </div>
                    <div>
                      • Web Workspace Endpoint: <code>mathos.ai/app/ask</code>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-1.5">
                    <div className="font-bold text-[#111111] uppercase">
                      Structured Data &amp; Telemetry Inspection
                    </div>
                    <div>
                      • Schema Type: <code>MathSolver</code> with{" "}
                      <code>SolveMathAction</code> declaring 7 math disciplines
                      (Algebra, Calculus, Differential Equations, Geometry,
                      Linear Algebra, Trigonometry, Statistics)
                    </div>
                    <div>
                      • Feature Routes: <code>/feature/pdf-homework-helper</code>
                      , <code>/feature/video-generation</code>,{" "}
                      <code>/feature/adaptive-learning</code>
                    </div>
                    <div>
                      • Marketing Telemetry: Facebook Pixel (
                      <code>997678555628412</code>) active on{" "}
                      <code>mathos.ai</code>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* Honest Buyer's Guide */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              03 // When to Use Which Tool
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Which AI Solver Should You Use in 2026?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-800 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-mono uppercase font-bold mb-4">
                Best for Live Online Quizzes &amp; Full Course Loads
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Choose ExamGhost AI If You Need:
              </h3>
              <ul className="space-y-3 text-sm text-neutral-800">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-1" />
                  <span>
                    <strong>In-Tab Stealth &amp; Focus Shield:</strong> Solve
                    questions directly inside Canvas, Blackboard, Moodle, D2L,
                    WebAssign, ALEKS, and Pearson MyLab without triggering
                    tab-switch logs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-1" />
                  <span>
                    <strong>0.3s Snap-It Vision OCR Across All Subjects:</strong>{" "}
                    Snip integrals, circuit diagrams, organic chemistry rings,
                    accounting ledgers, and nursing case studies in one drag.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-1" />
                  <span>
                    <strong>50 Free Trial Solves &amp; Transparent Passes:</strong>{" "}
                    Start with 50 free solves ($0), then choose{" "}
                    <strong>$19/month</strong>, <strong>$99/year</strong>{" "}
                    ($8.25/mo), or <strong>$199 Lifetime</strong> with a 14-day
                    100% refund guarantee.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-300 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono uppercase font-bold mb-4">
                Best for Offline PDF Problem Sets &amp; Video Visuals
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Choose Mathos AI (MathGPTPro) If You Need:
              </h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-700 shrink-0 mt-1" />
                  <span>
                    <strong>Interactive PDF Worksheet Annotation:</strong> You
                    primarily study from downloadable{" "}
                    <code className="font-mono text-xs">.pdf</code> math packets
                    and want to circle equations inside a digital notebook.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-700 shrink-0 mt-1" />
                  <span>
                    <strong>AI-Generated Animated Math Videos:</strong> You want
                    custom visual video walkthroughs (
                    <code className="font-mono text-xs">
                      /feature/video-generation
                    </code>
                    ) to understand Calculus or Linear Algebra intuition outside
                    of exam hours.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-700 shrink-0 mt-1" />
                  <span>
                    <strong>Mobile Phone Camera Scanning:</strong> You solve
                    paper-and-pencil homework on an iPhone or Android phone
                    rather than in a desktop browser.
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
              04 // Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mt-2">
              Mathos AI vs ExamGhost AI: Student FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Is Mathos AI the same platform as MathGPTPro?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Yes. MathGPTPro rebranded to <strong>Mathos AI</strong> (
                <code className="font-mono text-xs">mathos.ai</code>), operated
                by Y Combinator–backed Mathos, Inc. in San Francisco, CA. Its
                structured data still lists{" "}
                <code className="font-mono text-xs">MathGPTPro</code> as its
                official alternate name.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Does Mathos AI prevent Canvas from logging tab switches?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                No. Mathos AI is an external study workspace and does not
                include a browser Focus Shield. Leaving your Canvas or
                Blackboard quiz tab to use{" "}
                <code className="font-mono text-xs">mathos.ai/app/ask</code>{" "}
                triggers browser <code className="font-mono text-xs">blur</code>{" "}
                and <code className="font-mono text-xs">visibilitychange</code>{" "}
                events that are logged in your professor&apos;s quiz moderation
                view. ExamGhost AI intercepts those focus-loss events and keeps
                everything inside your active exam tab.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                What is the difference between MathosPro and MathosMax?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Mathos AI splits its solver into a base model (
                <em>MathosPro</em>) and its highest-accuracy STEM reasoning
                model (<em>MathosMax</em>). While the Basic plan (~$5.98/wk)
                caps <em>MathosMax</em> at 100 solves per day, unlimited{" "}
                <em>MathosMax</em> and the 20× PDF Helper quota require the
                Prime plan (~$9.98/wk). ExamGhost AI gives every user its
                highest-accuracy reasoning model on every solve, including all
                50 free trial solves.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Can ExamGhost AI solve Calculus, Linear Algebra, and Physics graphs like Mathos AI?
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Yes. ExamGhost AI&apos;s <strong>Snap-It Vision OCR</strong>{" "}
                reads LaTeX equations, matrices, Bode plots, free-body physics
                diagrams, and multi-part WebAssign/ALEKS prompts directly on
                your screen in ~0.3 seconds, returning both the exact final
                answer and the step-by-step derivation.
              </p>
            </div>
          </div>
        </section>

        {/* Bespoke Pastel Conversion Strip + Related Comparisons (No Stacked Dark Box) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-50 via-[#FAF8F5] to-emerald-50 border-2 border-[#111111] rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_#111111] mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-indigo-900 font-bold mb-2">
                  Built for Live Canvas, WebAssign &amp; ALEKS Exams
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mb-3">
                  Solve Math &amp; Every Other Major Without Leaving Your Tab
                </h2>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Don&apos;t risk tab-switching to an external math workspace
                  during a timed quiz. Test ExamGhost AI with{" "}
                  <strong>50 free solves ($0)</strong> in our sandbox or unlock
                  unlimited access for <strong>$19/month</strong> or{" "}
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
                    Try Live STEM Sandbox
                  </Link>
                  <a
                    href="https://discord.gg/aCcsyKYJq4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#3b47d6] text-white font-semibold text-sm hover:bg-[#2f3ab0] transition-colors"
                  >
                    Join STEM Discord
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-neutral-200">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold mb-3">
                  Related STEM &amp; LMS Audits
                </div>
                <div className="space-y-2.5 text-sm font-medium">
                  <Link prefetch={false}
                    href="/quizwizard-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Solvely AI vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/gauth-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>Gauth AI vs ExamGhost AI</span>
                    <ArrowRight className="w-4 h-4 text-emerald-800" />
                  </Link>
                  <Link prefetch={false}
                    href="/wolframalpha-vs-examghost"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-emerald-50 transition-colors"
                  >
                    <span>WolframAlpha vs ExamGhost AI</span>
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
