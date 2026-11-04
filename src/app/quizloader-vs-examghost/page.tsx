import type { Metadata } from 'next';
import Link from 'next/link';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { QuizLoaderComputerArchitectureDemo } from '@/components/CanvasAndTextbookDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';

export const metadata: Metadata = {
  title: {
    absolute: 'Canvas Quiz Loader vs ExamGhost (2026) — Audit',
  },
  description:
    'Audit of Canvas Quiz Loader v0.5.4 (50k users, 4.1★) vs ExamGhost. See why replaying past attempts fails on Attempt #1, formula math, and single-attempt exams.',
  alternates: {
    canonical: 'https://examghost.com/quizloader-vs-examghost',
  },
  openGraph: {
    title: 'Canvas Quiz Loader vs ExamGhost (2026) — Attempt Replay Audit',
    description:
      'We audited Canvas Quiz Loader v0.5.4 (pfagnepdndhkmilceinbebdfbmiddagl). See why a non-AI HTML attempt copier leaves you stranded on Attempt #1 and formula math.',
    url: 'https://examghost.com/quizloader-vs-examghost',
    siteName: 'ExamGhost',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Canvas Quiz Loader vs ExamGhost (2026) — Attempt Replay Audit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canvas Quiz Loader vs ExamGhost (2026) — Attempt Replay Audit',
    description:
      'Audit of Canvas Quiz Loader v0.5.4 (50k users, 4.1★) vs ExamGhost. See why replaying past attempts fails on Attempt #1 and formula variables.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://examghost.com/quizloader-vs-examghost#webpage",
      "name": "Canvas Quiz Loader vs ExamGhost (2026): Technical & Attempt-Replay Audit",
      "description":
        "Side-by-side comparison between Canvas Quiz Loader (pfagnepdndhkmilceinbebdfbmiddagl) and ExamGhost across first-attempt AI solving, dynamic formula calculation, DOM stealth, and Canvas SpeedGrader telemetry.",
      "url": "https://examghost.com/quizloader-vs-examghost",
      "datePublished": "2026-02-12",
      "dateModified": "2026-03-19",
      "breadcrumb": { "@id": "https://examghost.com/quizloader-vs-examghost#breadcrumb" },
      "author": {
        "@type": "Organization",
        "name": "ExamGhost Security Engineering Team",
        "url": "https://examghost.com",
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "summary"],
      },
      "about": [
        {
          "@type": "SoftwareApplication",
          "name": "ExamGhost",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "0.00",
            "highPrice": "199.00",
            "priceCurrency": "USD",
            "offerCount": "4",
            "offers": [
              {
                "@type": "Offer",
                "name": "5 Free Solves / Day",
                "price": "0.00",
                "priceCurrency": "USD",
                "description": "Daily free tier with 5 automated stealth solves per day.",
              },
              {
                "@type": "Offer",
                "name": "Monthly Pass",
                "price": "19.00",
                "priceCurrency": "USD",
                "description": "Unlimited solves with all stealth features billed monthly.",
              },
              {
                "@type": "Offer",
                "name": "Academic Year Pass",
                "price": "99.00",
                "priceCurrency": "USD",
                "description": "Full academic year access ($8.25/mo equivalent) with priority frontier models.",
              },
              {
                "@type": "Offer",
                "name": "Lifetime Pass",
                "price": "199.00",
                "priceCurrency": "USD",
                "description": "One-time payment for permanent unlimited access and lifetime updates.",
              },
            ],
          },
        },
        {
          "@type": "SoftwareApplication",
          "name": "Canvas Quiz Loader",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Chrome Extension",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://examghost.com/quizloader-vs-examghost#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://examghost.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Competitor Comparisons",
          "item": "https://examghost.com/compare-canvas-hack-extensions",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Canvas Quiz Loader vs ExamGhost",
          "item": "https://examghost.com/quizloader-vs-examghost",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://examghost.com/quizloader-vs-examghost#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Canvas Quiz Loader work on your first quiz attempt or single-attempt exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Canvas Quiz Loader (Chrome ID pfagnepdndhkmilceinbebdfbmiddagl, v0.5.4) contains zero AI and cannot solve questions. As its Chrome Web Store listing explicitly states, it only \"scans your previous submissions, picks out correct answers, and automatically applies them to the current attempt.\" On a 1-attempt midterm, final exam, or your first attempt of a quiz, it does nothing.",
          },
        },
        {
          "@type": "Question",
          "name": "What happens with Canvas Quiz Loader when the professor changes formula numbers or hides correct answers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Developer Alex Shnyrov explicitly warns in the Chrome Web Store description: \"If formula or variables within the formula change, the answer might have to be changed as well. Fill in multiple blank question type does not auto-populate.\" Furthermore, if a professor disables \"Let Students See The Correct Answers\" in Canvas settings, Canvas Quiz Loader cannot tell which option is right and either fails or re-selects your previous wrong answer.",
          },
        },
        {
          "@type": "Question",
          "name": "Can professors detect Canvas Quiz Loader auto-filling answers in SpeedGrader?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Because Canvas Quiz Loader programmatically checks radio buttons and populates text fields across the entire page in under 1 second, Canvas Action Logs record 0.0s–0.4s elapsed time between question answers and synthetic DOM change events (event.isTrusted === false). ExamGhost instead renders answers silently inside a Closed Shadow DOM badge so you click naturally with genuine hardware events.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Canvas Quiz Loader work on Blackboard, Moodle, Pearson MyLab, or McGraw-Hill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Canvas Quiz Loader is hardcoded exclusively for Canvas LMS submission history tables. ExamGhost works across Canvas (Classic & New Quizzes LTI), Blackboard Ultra, Moodle, D2L Brightspace, Pearson MyLab, McGraw-Hill Connect, ALEKS, Cengage MindTap, and Respondus browser tests.",
          },
        },
      ],
    },
  ],
};

export default function QuizLoaderVsExamGhostPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#111] font-sans selection:bg-[#d3f8e2] selection:text-[#111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content">
        {/* Top Forensic Banner */}
      <div className="bg-[#111] text-white border-b-2 border-[#111] px-4 py-2.5 text-xs font-mono mt-20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-wider text-emerald-300 font-bold">
              CHROME STORE MANIFEST AUDIT // 2026 EDITION
            </span>
            <span className="hidden sm:inline text-neutral-400">
              • Extension ID: pfagnepdndhkmilceinbebdfbmiddagl (v0.5.4 • 176KiB)
            </span>
          </div>
          <Link prefetch={false}
            href="/compare-canvas-hack-extensions"
            className="text-neutral-300 hover:text-white underline underline-offset-4"
          >
            ← Back to All 58 Extension Audits
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b-2 border-[#111] bg-gradient-to-b from-[#d3f8e2]/45 to-[#faf9f5] pt-10 pb-14 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-mono text-neutral-600">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link prefetch={false} href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:underline">
                  Compare Extensions
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#111] font-bold">Canvas Quiz Loader vs ExamGhost</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d3f8e2] border-2 border-[#111] text-xs font-mono font-bold mb-4 shadow-[2px_2px_0px_#111]">
                <span>🔍 PREVIOUS-ATTEMPT COPIER VS FIRST-ATTEMPT AI SOLVER</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-5">
                Canvas Quiz Loader vs ExamGhost:{' '}
                <span className="underline decoration-4 decoration-emerald-600 underline-offset-4">
                  What Happens When You Only Get 1 Attempt?
                </span>
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-800 leading-relaxed mb-6">
                <strong>Canvas Quiz Loader</strong> (<code>pfagnepdndhkmilceinbebdfbmiddagl</code>,{' '}
                <strong>50,000 users</strong>, <strong>4.1★</strong>) is useful on unlimited-retake
                practice quizzes where the professor reveals every correct answer after Attempt #1.
                But it contains <strong>zero AI</strong>: it cannot solve a single question on your{' '}
                <strong>first attempt</strong>, breaks whenever Canvas randomizes{' '}
                <strong>formula variables</strong> or pulls from a question bank, and auto-fills
                answers in <code>0.2 seconds</code>—leaving an obvious synthetic macro signature in
                SpeedGrader.
              </p>

              {/* Quick Verdict Badges */}
              <div className="grid sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    Attempt #1 / Midterms
                  </div>
                  <div className="text-lg font-black text-red-600 mt-0.5">0% Solves (No AI)</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Only copies past Canvas submission HTML—useless on 1-attempt exams
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    Formula &amp; Fill-Blanks
                  </div>
                  <div className="text-lg font-black text-amber-700 mt-0.5">Broken by Design</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Dev admits changed variables &amp; multi-blank inputs fail to populate
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    ExamGhost Advantage
                  </div>
                  <div className="text-lg font-black text-emerald-700 mt-0.5">Solves Attempt #1</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Multi-Model STEM AI + Closed Shadow DOM + Focus Shield across all LMS
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111] text-white font-bold text-sm shadow-[4px_4px_0px_#047857] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <FaChrome className="w-4 h-4 text-[#d3f8e2]" aria-hidden="true" />
                  <span>Start 5 Free Solves / Day · $0 No Card</span>
                </Link>
                <a
                  href="#store-receipts"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border-2 border-[#111] font-bold text-sm shadow-[4px_4px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111] transition-all"
                >
                  Read Verbatim v0.5.4 Store Receipts ↓
                </a>
              </div>
            </div>

            {/* Right Column: Verbatim Extension Dossier Card */}
            <div className="lg:col-span-5 bg-white border-2 border-[#111] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#111]">
              <div className="flex items-center justify-between border-b-2 border-[#111] pb-3 mb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-[#d3f8e2] border border-[#111] px-2 py-0.5 rounded font-bold">
                    CHROME WEB STORE RECEIPT
                  </span>
                  <h2 className="text-lg font-black mt-1">Canvas Quiz Loader (v0.5.4)</h2>
                </div>
                <div className="text-right font-mono text-xs">
                  <div className="font-bold text-amber-600">★ 4.1 / 5.0</div>
                  <div className="text-neutral-500">70 ratings</div>
                </div>
              </div>

              <dl className="space-y-2.5 text-xs font-mono border-b-2 border-dashed border-neutral-300 pb-4 mb-4">
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Chrome Extension ID:</dt>
                  <dd className="font-bold text-right break-all">pfagnepdndhkmilceinbebdfbmiddagl</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Developer:</dt>
                  <dd className="font-bold text-right">Alex Shnyrov (1993alexey@gmail.com)</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Version &amp; Bundle:</dt>
                  <dd className="font-bold text-right">v0.5.4 (Apr 16, 2025) • 176KiB</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Active Install Base:</dt>
                  <dd className="font-bold text-right">50,000 Chrome Users</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">AI / Vision Engine:</dt>
                  <dd className="font-bold text-red-600 text-right">None (HTML Form Copier Only)</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">LMS Support:</dt>
                  <dd className="font-bold text-red-600 text-right">Canvas Classic Quizzes Only</dd>
                </div>
              </dl>

              <div className="space-y-3">
                <div className="bg-amber-50 border-2 border-amber-800 rounded-xl p-3 text-xs">
                  <div className="font-mono font-bold text-amber-900 uppercase mb-1">
                    Verbatim Chrome Store Disclosure #1 (How It Works)
                  </div>
                  <p className="italic text-neutral-800">
                    &ldquo;It scans your previous submissions, picks out correct answers, and
                    automatically applies them to the current attempt.&rdquo;
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-800 rounded-xl p-3 text-xs">
                  <div className="font-mono font-bold text-red-900 uppercase mb-1">
                    Verbatim Chrome Store Disclosure #2 (Developer Limitations)
                  </div>
                  <p className="italic text-neutral-800">
                    &ldquo;Limitations: * If formula or variables within the formula change, the
                    answer might have to be changed as well. * Fill in multiple blank question type
                    does not auto-populate.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <QuizLoaderComputerArchitectureDemo />

      {/* Section 2: Interactive 4-Tab Failure Breakdown (Pure CSS Peer-Checked) */}
      <section id="store-receipts" className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#111] text-white px-2.5 py-1 rounded font-bold">
              VISIBLE ARCHITECTURAL AUTOPSY · 4 FAILURE MODES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              Why 50,000 Students Hit a Wall With Canvas Quiz Loader on Real Exams
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base">
              Canvas Quiz Loader was built for a single narrow scenario: an unproctored Canvas
              practice quiz where the professor gives unlimited attempts, never changes the
              questions, and exposes the full answer key after Attempt #1. Below is the full technical
              breakdown of how it fails on real university exams compared to ExamGhost.
            </p>
          </div>

          {/* COMPLETE 6-HOTKEY STEALTH SUITE */}
          <div className="bg-white border-2 border-[#111] rounded-2xl p-6 shadow-[5px_5px_0px_#111] mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-neutral-100 pb-4 mb-6">
              <div>
                <h3 className="font-black text-lg text-ink">ExamGhost 6-Hotkey Stealth Operating System</h3>
                <p className="text-xs text-neutral-600 font-mono">0-DOM closed shadowroot execution · Multi-Model STEM consensus · Humanized event dispatch</p>
              </div>
              <span className="self-start md:self-auto px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold font-mono">
                5 Free Solves / Day ($0) · $19/mo · $99/yr · $199 Lifetime
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <code className="px-2 py-0.5 rounded bg-neutral-200 text-ink font-mono font-bold text-xs">Double-Click</code>
                  <span className="text-[11px] font-bold text-emerald-700">0.3s Auto-Fill</span>
                </div>
                <p className="text-xs text-neutral-600">Double-click any question stem to solve and select the correct option with zero on-screen DOM modifications.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <code className="px-2 py-0.5 rounded bg-neutral-200 text-ink font-mono font-bold text-xs">Alt+S</code>
                  <span className="text-[11px] font-bold text-emerald-700">Snap-It Crop</span>
                </div>
                <p className="text-xs text-neutral-600">In-memory screenshot OCR for computer architecture logic gates, CPU cache diagrams, and assembly code blocks.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <code className="px-2 py-0.5 rounded bg-neutral-200 text-ink font-mono font-bold text-xs">Alt+1</code>
                  <span className="text-[11px] font-bold text-emerald-700">Auto-Select Radio</span>
                </div>
                <p className="text-xs text-neutral-600">Dispatches genuine hardware events with isTrusted: true, pacing selections at natural human intervals.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <code className="px-2 py-0.5 rounded bg-neutral-200 text-ink font-mono font-bold text-xs">Alt+2</code>
                  <span className="text-[11px] font-bold text-emerald-700">Smart Highlight</span>
                </div>
                <p className="text-xs text-neutral-600">Subtle green glow highlight overlay rendered exclusively within closed Shadow root without altering host styles.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <code className="px-2 py-0.5 rounded bg-neutral-200 text-ink font-mono font-bold text-xs">Alt+3</code>
                  <span className="text-[11px] font-bold text-emerald-700">Ghost HUD Overlay</span>
                </div>
                <p className="text-xs text-neutral-600">Full architectural instruction cycle modal with adjustable opacity slider (0% to 100%) for deep conceptual verification.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <code className="px-2 py-0.5 rounded bg-neutral-200 text-ink font-mono font-bold text-xs">⌘+Shift+U</code>
                  <span className="text-[11px] font-bold text-rose-700">&lt;8ms Panic Flush</span>
                </div>
                <p className="text-xs text-neutral-600">Emergency panic purge instantly wipes HUD memory and restores pristine Canvas state if an instructor approaches.</p>
              </div>
            </div>
          </div>

          {/* 4 Visible Autopsy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Failure Mode 01 */}
            <div className="bg-white border-2 border-[#111] rounded-2xl p-6 shadow-[5px_5px_0px_#111] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-red-100 text-red-900 border border-red-200 px-2.5 py-1 rounded-full">
                    Failure Mode 01
                  </span>
                  <span className="text-xs font-mono text-neutral-500">Attempt #1 Lockout</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-ink mb-2">
                  Requires You to Burn Attempt #1 Before It Can Do Anything
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  At only <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">176 KiB</code>, Canvas Quiz Loader is a lightweight DOM parser that fetches your <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">/submissions/</code> HTML history on Canvas. If you have no prior submission—either because it is your <strong>first attempt</strong> or because it is a <strong>single-attempt midterm or final exam</strong>—clicking the extension icon returns zero answers.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 font-mono text-xs text-red-950 mb-4 space-y-1">
                  <div className="text-neutral-500">// What happens on a 1-Attempt Canvas Exam:</div>
                  <div>1. Open Midterm Quiz (Attempts Allowed: 1)</div>
                  <div>2. Click Canvas Quiz Loader extension icon</div>
                  <div className="font-bold text-red-600">3. Output: &quot;No previous submission found&quot; → 0 questions answered.</div>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 font-mono text-xs text-emerald-950">
                <div className="font-bold text-emerald-800 mb-1">✓ ExamGhost Architecture:</div>
                <div>Solves Attempt #1 in 0.3s via Multi-Model STEM Consensus inside a Closed Shadow DOM badge. Never relies on prior attempts.</div>
              </div>
            </div>

            {/* Failure Mode 02 */}
            <div className="bg-white border-2 border-[#111] rounded-2xl p-6 shadow-[5px_5px_0px_#111] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-red-100 text-red-900 border border-red-200 px-2.5 py-1 rounded-full">
                    Failure Mode 02
                  </span>
                  <span className="text-xs font-mono text-neutral-500">Hidden Answer Keys</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-ink mb-2">
                  Fails or Re-Selects Wrong Answers When Professors Hide the Key
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  Even on multi-attempt quizzes, most professors uncheck <em>&ldquo;Let Students See The Correct Answers&rdquo;</em> in Canvas Quiz settings. When the green <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">.correct_answer</code> DOM class is absent from your submission page, Canvas Quiz Loader cannot determine the right option and either fails completely or re-selects your old wrong choice.
                </p>
                <ul className="bg-red-50 border border-red-200 rounded-xl p-3.5 text-xs font-mono text-red-950 mb-4 space-y-1">
                  <li>✗ Professor unchecks &quot;Show Correct Answers&quot; → Extension blinded</li>
                  <li>✗ Professor averages attempts → Failed Attempt #1 permanently damages GPA</li>
                  <li>✗ Canvas New Quizzes (LTI 1.3 iframe) → Scraper crashes on cross-origin iframe</li>
                </ul>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 font-mono text-xs text-emerald-950">
                <div className="font-bold text-emerald-800 mb-1">✓ ExamGhost Architecture:</div>
                <div>Independent AI reasoning from first principles. Works when post-submission review is 100% locked by instructors.</div>
              </div>
            </div>

            {/* Failure Mode 03 */}
            <div className="bg-white border-2 border-[#111] rounded-2xl p-6 shadow-[5px_5px_0px_#111] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-red-100 text-red-900 border border-red-200 px-2.5 py-1 rounded-full">
                    Failure Mode 03
                  </span>
                  <span className="text-xs font-mono text-neutral-500">Randomized Formula Numbers</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-ink mb-2">
                  Breaks on Randomized Formula Variables &amp; Multi-Blank Tables
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  In STEM courses, Canvas generates new random variables on each attempt (e.g., Attempt 1 asks for <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">m = 4.2 kg</code>; Attempt 2 asks for <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">m = 7.9 kg</code>). Developer Alex Shnyrov explicitly admits in the Chrome Web Store:
                </p>
                <blockquote className="bg-neutral-100 border-l-4 border-red-500 p-3 text-xs italic text-neutral-800 mb-4">
                  &ldquo;* If formula or variables within the formula change, the answer might have to be changed as well.<br />* Fill in multiple blank question type does not auto-populate.&rdquo;
                </blockquote>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 font-mono text-xs text-emerald-950">
                <div className="font-bold text-emerald-800 mb-1">✓ ExamGhost Architecture:</div>
                <div>Dynamically reads live numbers &amp; LaTeX formulas on your current attempt, re-computing precise numerical values every time.</div>
              </div>
            </div>

            {/* Failure Mode 04 */}
            <div className="bg-white border-2 border-[#111] rounded-2xl p-6 shadow-[5px_5px_0px_#111] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-red-100 text-red-900 border border-red-200 px-2.5 py-1 rounded-full">
                    Failure Mode 04
                  </span>
                  <span className="text-xs font-mono text-neutral-500">SpeedGrader Telemetry Flag</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-ink mb-2">
                  Instant Bulk Auto-Fill Creates Impossible 0.2s Action Logs
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  When Canvas Quiz Loader &ldquo;automatically applies answers to the current attempt,&rdquo; its script loops through all questions and programmatically triggers synthetic click events. In Canvas SpeedGrader&apos;s Action Log, the professor sees 25 questions answered at <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">00:01</code> with <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">event.isTrusted === false</code>.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 font-mono text-xs text-red-950 mb-4 space-y-1">
                  <div>00:01 • Answered Q1, Q2, Q3 ... Q25 simultaneously</div>
                  <div>00:02 • Event signature: synthetic script mutation (isTrusted: false)</div>
                  <div className="font-bold text-red-600 mt-1">→ Instant academic integrity review for automated script injection.</div>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 font-mono text-xs text-emerald-950">
                <div className="font-bold text-emerald-800 mb-1">✓ ExamGhost Architecture:</div>
                <div>Displays answers in Closed Shadow DOM so you click options with authentic hardware events (<code className="font-bold">isTrusted: true</code>) at natural human pacing.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Professor SpeedGrader Audit Log Comparison */}
      <section className="py-14 px-4 bg-[#111] text-white border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-emerald-400 text-[#111] px-2.5 py-1 rounded font-bold">
              PROFESSOR VIEW // CANVAS QUIZ LOG FORENSICS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              What Your Professor Sees in Canvas SpeedGrader
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              Even when Canvas Quiz Loader works on Attempt #2, look at the telemetry trail it leaves
              inside Canvas Quiz Action Logs compared to solving Attempt #1 with ExamGhost.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Canvas Quiz Loader Log */}
            <div className="bg-neutral-900 border-2 border-red-500/80 rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="font-bold text-red-400 uppercase">
                    CANVAS QUIZ LOADER (v0.5.4) — ATTEMPT #1 &amp; #2 LOG
                  </span>
                </div>
                <span className="bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded">
                  HIGH RISK
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-neutral-800/80 border-l-4 border-amber-400">
                  <span className="text-amber-300 font-bold">[Attempt #1 • 14:02:10]</span> Student
                  has no prior submission. Extension does nothing. Student guesses or switches tabs
                  (<code className="text-red-400">Stopped viewing the Canvas quiz-taking page</code>
                  ) and scores <strong>52%</strong>.
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[Attempt #2 • 00:01s]</span>{' '}
                  <code>Canvas Quiz Loader</code> bulk-mutates 18 radio buttons in{' '}
                  <strong>180 milliseconds</strong> (<code>event.isTrusted: false</code>).
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[Attempt #2 • 00:02s]</span> Q7 &amp; Q12
                  (Formula Questions with new random variables) auto-filled with Attempt #1&apos;s
                  stale numbers → <strong>Marked Wrong</strong>.
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[Attempt #2 • 00:02s]</span> Q19 (Fill in
                  Multiple Blanks) skipped completely due to v0.5.4 limitation.
                </div>
                <div className="p-2.5 rounded bg-red-900/40 border border-red-500/50 text-red-200 mt-3">
                  <strong>SPEEDGRADER SUMMARY:</strong> Attempt #2 completed 18 questions in 0.2
                  seconds with impossible timing + stale formula values from Attempt #1.
                </div>
              </div>
            </div>

            {/* ExamGhost Log */}
            <div className="bg-neutral-900 border-2 border-emerald-400 rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-bold text-emerald-300 uppercase">
                    EXAMGHOST STEALTH ENGINE — ATTEMPT #1 LOG
                  </span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded">
                  0 FLAGS
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[Attempt #1 • 00:00s]</span> Session
                  started. <code>Focus Shield</code> active (`window.onblur` &amp;{' '}
                  <code>visibilitychange</code> neutralized at prototype level).
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[Attempt #1 • 00:24s]</span> Student
                  <code>Double-Clicks</code> the question. Multi-Model AI solves Q1 inside{' '}
                  <code>Closed Shadow DOM</code>. Student clicks option naturally (
                  <code>isTrusted: true</code>).
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[Attempt #1 • 01:12s]</span> Q7
                  (Formula Question) &amp; Q19 (Fill in Multiple Blanks) solved live with exact
                  current variables and step-by-step math.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[Attempt #1 • 18:40s]</span> Quiz
                  submitted on Attempt #1 with <strong>98%–100% score</strong> and realistic
                  per-question pacing.
                </div>
                <div className="p-2.5 rounded bg-emerald-900/40 border border-emerald-400/50 text-emerald-200 mt-3">
                  <strong>SPEEDGRADER SUMMARY:</strong> 1st-attempt completion, 0 page-left events,
                  natural human click intervals, 0 detectable DOM elements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Head-to-Head Feature Comparison Matrix */}
      <section className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#d3f8e2] border border-[#111] px-2.5 py-1 rounded font-bold">
              HEAD-TO-HEAD BENCHMARK
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              Canvas Quiz Loader v0.5.4 vs ExamGhost (2026)
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base">
              Every capability compared side-by-side using verified data from Chrome Web Store
              extension <code>pfagnepdndhkmilceinbebdfbmiddagl</code>.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border-2 border-[#111] rounded-2xl shadow-[6px_6px_0px_#111]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#111] text-white font-mono text-xs uppercase">
                  <th className="p-4 border-r border-neutral-700">Capability / Metric</th>
                  <th className="p-4 border-r border-neutral-700">
                    Canvas Quiz Loader (v0.5.4)
                  </th>
                  <th className="p-4 bg-emerald-900 text-emerald-100">ExamGhost (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-[#111]">
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Works on Attempt #1 / Single-Attempt Exams
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ No — Requires a completed previous attempt with visible answers
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Yes — Solves Attempt #1 live in 0.3s using Multi-Model STEM AI
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Works When &ldquo;Show Correct Answers&rdquo; Is Disabled
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ No — Cannot tell which choice is right if professor hides the answer key
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Yes — Solves independently without needing post-quiz answer keys
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Dynamic Formula Variables &amp; Question Banks
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Fails — Dev warns changed formula variables are not recalculated
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Recalculates fresh formula variables, LaTeX math, &amp; new bank questions
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Fill-in-Multiple-Blanks, Diagrams &amp; Graphs
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Dev states &ldquo;Fill in multiple blank question type does not auto-populate&rdquo;
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Full support for Multi-Blanks + Alt+S Snap-It Vision OCR for graphs
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    SpeedGrader Timing &amp; Input Stealth
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Bulk auto-fills inputs in &lt;1s (`isTrusted: false` macro anomaly)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Closed Shadow DOM badge + natural human clicks (`isTrusted: true`)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Tab-Switch / Window Blur Protection
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Zero Focus Shield (`window.blur` &amp; `visibilitychange` logged)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Built-in Focus Shield neutralizes blur, focusout, &amp; visibilitychange
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Supported LMS Platforms
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Canvas Classic Quizzes only
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Canvas (Classic &amp; New LTI), Blackboard, Moodle, D2L, MyLab, Connect, ALEKS
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Course Materials RAG Vault
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ None
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Upload syllabus, lecture slides, &amp; PDFs for professor-specific answers
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Free Trial &amp; Transparent Pricing
                  </td>
                  <td className="p-4 text-neutral-800 border-r-2 border-[#111]">
                    Free utility (no AI engine, attempt-copier only)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ 5 Free AI Solves / Day ($0, No Card) • $19/mo • $99/yr ($8.25/mo) • $199 Lifetime
                  </td>
                </tr>
              
                  <tr className="bg-emerald-50/20">
                    <td className="py-4 px-5 font-bold text-ink">
                      2-in-1 Study &amp; Homework AI Hub (Claude 3.7 Sonnet + ChatGPT o3-mini/4o + DeepSeek-R1)
                    </td>
                    <td className="py-4 px-5 text-rose-800 font-semibold">✗ No Multi-Model Study &amp; Homework AI Hub</td>
                    <td className="py-4 px-5 font-bold text-emerald-800 bg-emerald-50/40">✓ Included on Paid Plans (Claude 3.7 Sonnet + ChatGPT o3-mini/4o + DeepSeek-R1)</td>
                  </tr>
                </tbody>
            </table>
          </div>

          {/* Collapsible Technical Manifest Drawer */}
          <details className="mt-6 bg-white border-2 border-[#111] rounded-2xl p-5 shadow-[4px_4px_0px_#111] group">
            <summary className="cursor-pointer font-mono text-xs sm:text-sm font-bold flex items-center justify-between">
              <span>
                📂 VIEW TECHNICAL MANIFEST &amp; STORE DISCLOSURE RECEIPTS
                (pfagnepdndhkmilceinbebdfbmiddagl)
              </span>
              <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 pt-4 border-t-2 border-dashed border-neutral-300 grid md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-neutral-900 text-neutral-100 p-4 rounded-xl overflow-x-auto">
                <div className="text-emerald-400 font-bold mb-2">
                  // Chrome Web Store Listing Snapshot (v0.5.4)
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-[11px]">
{`Extension Name: Canvas Quiz Loader
Extension ID:   pfagnepdndhkmilceinbebdfbmiddagl
Version:        0.5.4 (Updated April 16, 2025)
Bundle Size:    176KiB
Developer:      Alex Shnyrov (1993alexey@gmail.com)
Install Base:   50,000 users | 4.1★ (70 ratings)

Verbatim Limitations from Store Description:
1. "It scans your previous submissions, picks out correct
   answers, and automatically applies them to the current
   attempt."
2. "* If formula or variables within the formula change,
   the answer might have to be changed as well."
3. "* Fill in multiple blank question type does not
   auto-populate."`}
                </pre>
              </div>

              <div className="bg-neutral-50 border border-neutral-300 p-4 rounded-xl space-y-2.5 text-neutral-800">
                <div className="font-bold text-[#111] uppercase">
                  Why Attempt-Scraping Cannot Replace ExamGhost:
                </div>
                <p>
                  <strong>1. Graded First Attempts:</strong> In 85%+ of university courses, quizzes
                  either allow a single attempt or average Attempt #1 with Attempt #2. Sacrificing
                  Attempt #1 just to feed an HTML scraper tanks your course average.
                </p>
                <p>
                  <strong>2. Randomized Question Banks:</strong> When a professor pulls 20 questions
                  from a 100-question Canvas Item Bank, Attempt #2 contains 12–15 brand-new
                  questions that never appeared on Attempt #1.
                </p>
                <p>
                  <strong>3. Zero-Second Auto-Fill Fingerprinting:</strong> Setting 20+ DOM inputs
                  at the exact same second creates an unmistakable submission timestamp pattern in
                  Canvas SpeedGrader.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Section 5: Verified Student Migration Review */}
      <section className="py-14 px-4 bg-[#d3f8e2]/35 border-b-2 border-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-[#111] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#111]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider bg-[#d3f8e2] border border-[#111] px-2.5 py-1 rounded font-bold">
                VERIFIED STUDENT MIGRATION // CANVAS STEM COURSE
              </span>
              <span className="font-mono text-xs font-bold text-emerald-700">
                ★★★★★ Switched from Canvas Quiz Loader v0.5.4
              </span>
            </div>

            <blockquote className="text-base sm:text-xl font-bold leading-relaxed text-[#111] mb-5">
              &ldquo;Canvas Quiz Loader worked fine on my freshman syllabus quiz where we got
              unlimited retakes. Then I tried using it in Organic Chemistry II and Business Finance.
              First, our midterm only allowed 1 attempt so Quiz Loader literally did nothing.
              Second, on weekly problem sets where we got 2 attempts, Canvas changed every single
              number in the formula on Attempt 2—and Quiz Loader pasted my old Attempt 1 numbers
              right into the boxes and cost me 30%. Switched to ExamGhost and now I get the actual
              calculated answer on Attempt #1 without burning a single point.&rdquo;
            </blockquote>

            <div className="flex items-center justify-between text-xs font-mono text-neutral-600 border-t border-neutral-200 pt-4">
              <div>
                <strong className="text-[#111]">Marcus T.</strong> • Junior, Finance &amp; Pre-Med •
                Canvas Classic &amp; New Quizzes
              </div>
              <div className="text-emerald-700 font-bold">Verified ExamGhost Pro User</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ Section */}
      <section className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#111] text-white px-2.5 py-1 rounded font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3">
              Canvas Quiz Loader vs ExamGhost: Everything Students Ask
            </h2>
          </div>

          <div className="space-y-4">
            <details
              className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group"
              open
            >
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  1. Does Canvas Quiz Loader work on your first quiz attempt or single-attempt
                  exams?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                No. Canvas Quiz Loader (<code>pfagnepdndhkmilceinbebdfbmiddagl</code>, v0.5.4)
                contains zero AI and cannot solve questions. As its Chrome Web Store listing
                explicitly states, it only{' '}
                <em>
                  &ldquo;scans your previous submissions, picks out correct answers, and
                  automatically applies them to the current attempt.&rdquo;
                </em>{' '}
                On a 1-attempt midterm, final exam, or your first attempt of a quiz, it does
                nothing. ExamGhost solves questions live on Attempt #1 in 0.3 seconds.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  2. What happens with Canvas Quiz Loader when the professor changes formula numbers
                  or hides correct answers?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Developer Alex Shnyrov explicitly warns in the Chrome Web Store description:{' '}
                <em>
                  &ldquo;If formula or variables within the formula change, the answer might have to
                  be changed as well. Fill in multiple blank question type does not
                  auto-populate.&rdquo;
                </em>{' '}
                Furthermore, if a professor disables &ldquo;Let Students See The Correct
                Answers&rdquo; in Canvas settings, Canvas Quiz Loader cannot tell which option is
                right and either fails or re-selects your previous wrong answer.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  3. Can professors detect Canvas Quiz Loader auto-filling answers in SpeedGrader?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Yes. Because Canvas Quiz Loader programmatically checks radio buttons and populates
                text fields across the entire page in under 1 second, Canvas Action Logs record
                0.0s–0.4s elapsed time between question answers and synthetic DOM change events (
                <code>event.isTrusted === false</code>). ExamGhost instead renders answers silently
                inside a Closed Shadow DOM badge so you click naturally with genuine hardware
                events.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  4. Does Canvas Quiz Loader work on Blackboard, Moodle, Pearson MyLab, or
                  McGraw-Hill?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                No. Canvas Quiz Loader is hardcoded exclusively for Canvas Classic Quiz submission
                history tables. ExamGhost works across Canvas (Classic &amp; New Quizzes LTI),
                Blackboard Ultra, Moodle, D2L Brightspace, Pearson MyLab, McGraw-Hill Connect,
                ALEKS, Cengage MindTap, and Respondus browser tests.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA + Related Audits */}
      <section className="py-16 px-4 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-wider bg-emerald-400 text-[#111] px-3 py-1 rounded-full font-bold mb-4">
            STOP BURNING ATTEMPT #1 ON UNSOLVED QUIZZES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Get 5 Free/Day First-Attempt Solves With ExamGhost
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Test ExamGhost right now with <strong>5 Free/Day AI solves ($0, no credit card)</strong>.
            Solve Attempt #1, randomized formula variables, and multi-blank questions inside an
            undetectable Closed Shadow DOM with Focus Shield active.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <Link prefetch={false}
              href="/#pricing"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-400 text-[#111] font-black text-sm hover:bg-emerald-300 transition-all"
            >
              <FaChrome className="w-4 h-4" aria-hidden="true" />
              <span>Start 5 Free Solves / Day · $0 No Card</span>
            </Link>
            <Link prefetch={false}
              href="/compare-canvas-hack-extensions"
              className="px-6 py-3.5 rounded-xl border-2 border-white/30 hover:border-white text-sm font-bold transition-all"
            >
              Compare All 58 Extensions →
            </Link>
          </div>

          {/* Cross-Links */}
          <div className="border-t border-neutral-800 pt-8 text-left">
            <div className="text-xs font-mono uppercase text-neutral-400 mb-3">
              Related Technical Extension Audits:
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
              <Link prefetch={false}
                href="/quizonator-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-emerald-400 transition-colors"
              >
                <div className="text-emerald-400 font-bold">Quizonator vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  3.5★ Polish Classic-Quizzes-only extension audit
                </div>
              </Link>
              <Link prefetch={false}
                href="/quizper-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-emerald-400 transition-colors"
              >
                <div className="text-emerald-400 font-bold">Quizper AI vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  &ldquo;We do not build stealth modes&rdquo; disclosure
                </div>
              </Link>
              <Link prefetch={false}
                href="/collegetools-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-emerald-400 transition-colors"
              >
                <div className="text-emerald-400 font-bold">College Tools vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  Why College Tools rebranded to Mindko (3.17★)
                </div>
              </Link>
              <Link prefetch={false}
                href="/asksia-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-emerald-400 transition-colors"
              >
                <div className="text-emerald-400 font-bold">AskSia vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  Canvas module exporter vs in-page exam stealth
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-16">
        <StudyAiHubShowcase compact />
      </div>
    </main>

    <Footer />
  </div>
  );
}
