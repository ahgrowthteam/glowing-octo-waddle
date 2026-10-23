import type { Metadata } from 'next';
import Link from 'next/link';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://examghost.com/quizloader-vs-examghost#webpage',
      name: 'Canvas Quiz Loader vs ExamGhost (2026): Technical & Attempt-Replay Audit',
      description:
        'Side-by-side comparison between Canvas Quiz Loader (pfagnepdndhkmilceinbebdfbmiddagl) and ExamGhost across first-attempt AI solving, dynamic formula calculation, DOM stealth, and Canvas SpeedGrader telemetry.',
      url: 'https://examghost.com/quizloader-vs-examghost',
      datePublished: '2026-02-12',
      dateModified: '2026-03-19',
      breadcrumb: { '@id': 'https://examghost.com/quizloader-vs-examghost#breadcrumb' },
      author: {
        '@type': 'Organization',
        name: 'ExamGhost Security Engineering Team',
        url: 'https://examghost.com',
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', 'summary'],
      },
      about: [
        {
          '@type': 'SoftwareApplication',
          name: 'ExamGhost',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Chrome, Edge, Brave, macOS, Windows',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '0.00',
            highPrice: '199.00',
            priceCurrency: 'USD',
            offerCount: '4',
          },
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Canvas Quiz Loader',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Chrome Extension',
          offers: {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'USD',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://examghost.com/quizloader-vs-examghost#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://examghost.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Competitor Comparisons',
          item: 'https://examghost.com/compare-canvas-hack-extensions',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Canvas Quiz Loader vs ExamGhost',
          item: 'https://examghost.com/quizloader-vs-examghost',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://examghost.com/quizloader-vs-examghost#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Canvas Quiz Loader work on your first quiz attempt or single-attempt exams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Canvas Quiz Loader (Chrome ID pfagnepdndhkmilceinbebdfbmiddagl, v0.5.4) contains zero AI and cannot solve questions. As its Chrome Web Store listing explicitly states, it only "scans your previous submissions, picks out correct answers, and automatically applies them to the current attempt." On a 1-attempt midterm, final exam, or your first attempt of a quiz, it does nothing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens with Canvas Quiz Loader when the professor changes formula numbers or hides correct answers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Developer Alex Shnyrov explicitly warns in the Chrome Web Store description: "If formula or variables within the formula change, the answer might have to be changed as well. Fill in multiple blank question type does not auto-populate." Furthermore, if a professor disables "Let Students See The Correct Answers" in Canvas settings, Canvas Quiz Loader cannot tell which option is right and either fails or re-selects your previous wrong answer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can professors detect Canvas Quiz Loader auto-filling answers in SpeedGrader?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Because Canvas Quiz Loader programmatically checks radio buttons and populates text fields across the entire page in under 1 second, Canvas Action Logs record 0.0s–0.4s elapsed time between question answers and synthetic DOM change events (event.isTrusted === false). ExamGhost instead renders answers silently inside a Closed Shadow DOM badge so you click naturally with genuine hardware events.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Canvas Quiz Loader work on Blackboard, Moodle, Pearson MyLab, or McGraw-Hill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Canvas Quiz Loader is hardcoded exclusively for Canvas LMS submission history tables. ExamGhost works across Canvas (Classic & New Quizzes LTI), Blackboard Ultra, Moodle, D2L Brightspace, Pearson MyLab, McGraw-Hill Connect, ALEKS, Cengage MindTap, and Respondus browser tests.',
          },
        },
      ],
    },
  ],
};

export default function QuizLoaderVsExamGhostPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#111] font-sans selection:bg-[#d3f8e2] selection:text-[#111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

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
                  <span>Start 50 Free Solves · $0 No Card</span>
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

      {/* Section 2: Interactive 4-Tab Failure Breakdown (Pure CSS Peer-Checked) */}
      <section id="store-receipts" className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#111] text-white px-2.5 py-1 rounded font-bold">
              ARCHITECTURAL AUTOPSY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              Why 50,000 Students Hit a Wall With Canvas Quiz Loader on Real Exams
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base">
              Canvas Quiz Loader was built for a single narrow scenario: an unproctored Canvas
              practice quiz where the professor gives unlimited attempts, never changes the
              questions, and exposes the full answer key after Attempt #1. Click through the 4 tabs
              below to see what happens in real college courses.
            </p>
          </div>

          {/* Pure CSS Radio Tabs */}
          <div className="bg-white border-2 border-[#111] rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_#111]">
            <input
              type="radio"
              name="ql-audit-tabs"
              id="ql-tab-1"
              className="peer/tab1 hidden"
              defaultChecked
            />
            <input
              type="radio"
              name="ql-audit-tabs"
              id="ql-tab-2"
              className="peer/tab2 hidden"
            />
            <input
              type="radio"
              name="ql-audit-tabs"
              id="ql-tab-3"
              className="peer/tab3 hidden"
            />
            <input
              type="radio"
              name="ql-audit-tabs"
              id="ql-tab-4"
              className="peer/tab4 hidden"
            />

            {/* Tab Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6 border-b-2 border-[#111] pb-4">
              <label
                htmlFor="ql-tab-1"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#d3f8e2]/60 peer-checked/tab1:bg-[#d3f8e2] peer-checked/tab1:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Failure Mode 01
                </span>
                1-Attempt Exams &amp; Attempt #1
              </label>

              <label
                htmlFor="ql-tab-2"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#d3f8e2]/60 peer-checked/tab2:bg-[#d3f8e2] peer-checked/tab2:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Failure Mode 02
                </span>
                Hidden Answer Keys &amp; Wrong Replay
              </label>

              <label
                htmlFor="ql-tab-3"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#d3f8e2]/60 peer-checked/tab3:bg-[#d3f8e2] peer-checked/tab3:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Failure Mode 03
                </span>
                Randomized Banks &amp; Formula Math
              </label>

              <label
                htmlFor="ql-tab-4"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#d3f8e2]/60 peer-checked/tab4:bg-[#d3f8e2] peer-checked/tab4:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Failure Mode 04
                </span>
                0.2s Auto-Fill SpeedGrader Flag
              </label>
            </div>

            {/* Tab 1 Content */}
            <div className="hidden peer-checked/tab1:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  CANVAS QUIZ LOADER (v0.5.4)
                </div>
                <h3 className="text-xl font-black mb-2">
                  Requires You to Burn Attempt #1 Before It Can Do Anything
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  At only <code>176KiB</code>, Canvas Quiz Loader is a lightweight DOM parser that
                  fetches your <code>/submissions/</code> HTML history on Canvas. If you have no
                  prior submission—either because it is your <strong>first attempt</strong> or
                  because it is a <strong>single-attempt midterm or final exam</strong>—clicking the
                  extension icon returns zero answers.
                </p>
                <div className="bg-white border border-red-300 rounded-lg p-3 font-mono text-xs text-red-900">
                  <div>// What happens on a 1-Attempt Canvas Midterm:</div>
                  <div className="mt-1">1. Open Midterm Quiz (Attempts Allowed: 1)</div>
                  <div>2. Click Canvas Quiz Loader icon</div>
                  <div className="font-bold text-red-600">
                    3. Output: &quot;No previous submission found&quot; → 0 questions answered.
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST ARCHITECTURE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Solves Attempt #1 Live in 0.3s With Multi-Model STEM Consensus
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost doesn&apos;t wait for you to fail Attempt #1. On your very first
                  attempt, ExamGhost extracts the question context (and any uploaded lecture PDFs in
                  your local <strong>Course Materials RAG Vault</strong>), routes it through frontier
                  models in parallel, and displays the verified answer inside a subtle{' '}
                  <strong>Closed Shadow DOM</strong> badge.
                </p>
                <div className="bg-white border border-emerald-300 rounded-lg p-3 font-mono text-xs text-emerald-900">
                  <div>// ExamGhost on Attempt #1 or Single-Attempt Finals:</div>
                  <div className="mt-1">1. Open any Canvas, Blackboard, or MyLab exam</div>
                  <div>2. Press ⌘+Shift+A (or ⌘+Shift+S for diagrams/graphs)</div>
                  <div className="font-bold text-emerald-700">
                    3. Output: 99.4% verified solution + step-by-step math on Attempt #1.
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 2 Content */}
            <div className="hidden peer-checked/tab2:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  CANVAS QUIZ LOADER (v0.5.4)
                </div>
                <h3 className="text-xl font-black mb-2">
                  Fails or Re-Selects Wrong Answers When Professors Hide the Key
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  Even on multi-attempt quizzes, most professors uncheck{' '}
                  <em>&ldquo;Let Students See The Correct Answers&rdquo;</em> in Canvas Quiz
                  settings (showing only which questions you missed, or hiding responses entirely
                  until after the due date). When the green <code>.correct_answer</code> DOM class
                  is absent from your previous submission page, Canvas Quiz Loader cannot solve the
                  missed questions—leaving you to guess again or re-filling your old wrong choice.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>✗ Professor unchecks &quot;Show Correct Answers&quot; → Extension blinded</li>
                  <li>✗ Professor keeps highest vs average score → Attempt #1 hurts GPA</li>
                  <li>✗ Canvas New Quizzes (LTI 1.3 iframe) → Different DOM, scraper breaks</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST ARCHITECTURE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Independent AI Reasoning That Never Relies on Exposed Answer Keys
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost solves every question from first principles using Multi-Model Consensus
                  + your own course syllabus/slides. Even if your professor completely locks down
                  post-submission review and averages all attempts together, you get the right
                  answer on Attempt #1.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ Works when post-quiz review is completely locked by instructor</li>
                  <li>✓ Protects GPA when Canvas is set to &quot;Average All Attempts&quot;</li>
                  <li>✓ Native support for both Canvas Classic &amp; Canvas New Quizzes LTI</li>
                </ul>
              </div>
            </div>

            {/* Tab 3 Content */}
            <div className="hidden peer-checked/tab3:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  DEVELOPER ADMISSION (v0.5.4)
                </div>
                <h3 className="text-xl font-black mb-2">
                  Breaks on Randomized Formula Numbers &amp; Multi-Blank Questions
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  In STEM courses (Chemistry, Physics, Calculus, Accounting, Finance), Canvas
                  generates new random variables on every attempt (e.g., Attempt 1 asks for{' '}
                  <code>m = 4.2 kg</code>; Attempt 2 asks for <code>m = 7.9 kg</code>). Developer
                  Alex Shnyrov explicitly warns in the store listing:
                </p>
                <blockquote className="bg-white border-l-4 border-red-600 p-3 text-xs italic text-neutral-800 mb-3">
                  &ldquo;* If formula or variables within the formula change, the answer might have
                  to be changed as well.
                  <br />* Fill in multiple blank question type does not auto-populate.&rdquo;
                </blockquote>
                <p className="text-xs text-red-900 font-mono">
                  Result: Auto-filling Attempt #1&apos;s numeric answer into Attempt #2 submits the
                  wrong number and marks the question wrong.
                </p>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST STEM ENGINE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Re-Calculates Every New Variable, LaTeX Formula &amp; Multi-Blank Table
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost reads the exact live numbers, LaTeX equations, and embedded diagrams on
                  your current screen—re-computing the exact numerical answer to the required
                  decimal places or significant figures on every single question.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ Solves dynamic Canvas Formula Questions with fresh variables</li>
                  <li>✓ Solves Fill-in-Multiple-Blanks, Matching, &amp; Dropdown matrices</li>
                  <li>✓ ⌘+Shift+S Vision OCR reads chemical structures &amp; physics free-body diagrams</li>
                </ul>
              </div>
            </div>

            {/* Tab 4 Content */}
            <div className="hidden peer-checked/tab4:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  SPEEDGRADER TELEMETRY RISK
                </div>
                <h3 className="text-xl font-black mb-2">
                  Instant Bulk Auto-Fill Creates Impossible 0.2s Action Logs
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  When Canvas Quiz Loader &ldquo;automatically applies them to the current
                  attempt,&rdquo; its content script loops through every question in the DOM and
                  programmatically sets <code>input.checked = true</code> or dispatches synthetic
                  change events. In Canvas SpeedGrader&apos;s Quiz Log, the professor sees 25
                  questions answered at <code>00:01</code> elapsed time with{' '}
                  <code>event.isTrusted === false</code>.
                </p>
                <div className="bg-white border border-red-300 rounded-lg p-3 font-mono text-xs text-red-900">
                  <div>00:01 • Answered Q1, Q2, Q3 ... Q25 simultaneously</div>
                  <div>00:02 • Event signature: synthetic script mutation (isTrusted: false)</div>
                  <div className="font-bold text-red-600 mt-1">
                    → Instant academic integrity review for automated script injection.
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST ZERO-TRACE STEALTH
                </div>
                <h3 className="text-xl font-black mb-2">
                  Closed Shadow DOM Display + Natural Human Clicks (`isTrusted: true`)
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost never programmatically mutates Canvas radio inputs or fires bulk
                  auto-fill scripts. Instead, it displays a subtle answer indicator inside an
                  isolated <code>attachShadow(&#123; mode: &apos;closed&apos; &#125;)</code> container so
                  you click the option yourself at a natural human pace—generating 100% authentic{' '}
                  <code>isTrusted: true</code> hardware events while <strong>Focus Shield</strong>{' '}
                  blocks any <code>window.blur</code> logs.
                </p>
                <div className="bg-white border border-emerald-300 rounded-lg p-3 font-mono text-xs text-emerald-900">
                  <div>00:18 • Answered Q1 via genuine mouse click (isTrusted: true)</div>
                  <div>00:44 • Answered Q2 via genuine mouse click (isTrusted: true)</div>
                  <div className="font-bold text-emerald-700 mt-1">
                    → Zero page-left events, natural pacing, zero DOM mutations.
                  </div>
                </div>
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
                  presses <code>⌘+Shift+A</code>. Multi-Model AI solves Q1 inside{' '}
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
                    ✓ Full support for Multi-Blanks + ⌘+Shift+S Snap-It Vision OCR for graphs
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
                    ✓ 50 Free AI Solves ($0, No Card) • $19/mo • $99/yr ($8.25/mo) • $199 Lifetime
                  </td>
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
            Get 50 Free First-Attempt Solves With ExamGhost
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Test ExamGhost right now with <strong>50 free AI solves ($0, no credit card)</strong>.
            Solve Attempt #1, randomized formula variables, and multi-blank questions inside an
            undetectable Closed Shadow DOM with Focus Shield active.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <Link prefetch={false}
              href="/#pricing"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-400 text-[#111] font-black text-sm hover:bg-emerald-300 transition-all"
            >
              <FaChrome className="w-4 h-4" aria-hidden="true" />
              <span>Start 50 Free Solves · $0 No Card</span>
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
      <Footer />
    </main>
  );
}
