import type { Metadata } from 'next';
import Link from 'next/link';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    absolute: 'EasySB & SmarterBook vs ExamGhost (2026) — SmartBook Audit',
  },
  description:
    'Audit of EasySB (easysb.org) and discontinued SmarterBook vs ExamGhost. Why SmartBook-to-Excel exporters fail on graded McGraw-Hill Connect and Canvas exams.',
  alternates: {
    canonical: 'https://examghost.com/easysb-vs-examghost',
  },
  openGraph: {
    title: 'EasySB & SmarterBook vs ExamGhost (2026) — SmartBook Audit',
    description:
      'SmarterBook shut down after a publisher cease-and-desist, and EasySB only exports McGraw-Hill SmartBook reading modules to Excel. See how ExamGhost solves all LMS exams.',
    url: 'https://examghost.com/easysb-vs-examghost',
    siteName: 'ExamGhost',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EasySB & SmarterBook vs ExamGhost (2026) — SmartBook Audit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasySB & SmarterBook vs ExamGhost (2026) — SmartBook Audit',
    description:
      'Audit of EasySB (easysb.org) and discontinued SmarterBook vs ExamGhost. Why SmartBook-to-Excel exporters fail on graded McGraw-Hill Connect and Canvas exams.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://examghost.com/easysb-vs-examghost#webpage',
      name: 'EasySB & SmarterBook vs ExamGhost (2026): McGraw-Hill SmartBook & LMS Audit',
      description:
        'Technical comparison of EasySB (easysb.org), archived SmarterBook, and ExamGhost across McGraw-Hill SmartBook 2.0, graded Connect exams, Canvas, Blackboard, DOM stealth, and network burst safety.',
      url: 'https://examghost.com/easysb-vs-examghost',
      datePublished: '2026-01-23',
      dateModified: '2026-03-24',
      breadcrumb: { '@id': 'https://examghost.com/easysb-vs-examghost#breadcrumb' },
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
          name: 'EasySB & SmarterBook',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Chrome Extension',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '0.00',
            highPrice: '14.99',
            priceCurrency: 'USD',
            offerCount: '2',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://examghost.com/easysb-vs-examghost#breadcrumb',
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
          name: 'EasySB & SmarterBook vs ExamGhost',
          item: 'https://examghost.com/easysb-vs-examghost',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://examghost.com/easysb-vs-examghost#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happened to the SmarterBook Chrome extension for McGraw-Hill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SmarterBook (originally created by developer Micah Lindley) was permanently discontinued and archived on GitHub after receiving a copyright cease-and-desist letter from legal counsel representing major textbook publishers. Unmaintained forks no longer match 2026 McGraw-Hill SmartBook 2.0 security checks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does EasySB (easysb.org) work on graded McGraw-Hill Connect exams or Canvas quizzes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. EasySB is a single-purpose utility built strictly for McGraw-Hill SmartBook 2.0 adaptive reading modules (including exporting module questions into Excel spreadsheets). It does not work on timed McGraw-Hill Connect homework/exams, Canvas, Blackboard, Moodle, Pearson MyLab, or ALEKS. ExamGhost works across SmartBook 2.0 AND every graded LMS exam platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can exporting SmartBook modules to Excel trigger McGraw-Hill Connect detection?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, in two ways: first, bulk-scraping an entire SmartBook module to generate an Excel sheet sends rapid sequential API requests through your authenticated mheducation.com session; second, switching between your browser and Excel during an assignment fires window.blur and document.visibilitychange events. ExamGhost solves questions one-by-one at natural human speed inside a Closed Shadow DOM with Focus Shield active.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does ExamGhost handle McGraw-Hill SmartBook 2.0 confidence ratings and multi-select questions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ExamGhost’s Multi-Model STEM & Business Consensus engine evaluates every option in McGraw-Hill SmartBook 2.0 ("Select all that apply", fill-in-the-blank, and matching) plus graded McGraw-Hill Connect accounting tables and finance formulas, displaying the exact verified choices silently in-page so you can click High Confidence with 99.4% accuracy.',
          },
        },
      ],
    },
  ],
};

export default function EasySbVsExamGhostPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#111] font-sans selection:bg-[#fed7aa] selection:text-[#111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Top Forensic Banner */}
      <div className="bg-[#111] text-white border-b-2 border-[#111] px-4 py-2.5 text-xs font-mono mt-20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="uppercase tracking-wider text-orange-300 font-bold">
              MCGRAW-HILL SMARTBOOK &amp; LMS AUDIT // 2026 EDITION
            </span>
            <span className="hidden sm:inline text-neutral-400">
              • Targets: easysb.org (EasySB) &amp; Archived SmarterBook Repo
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
      <section className="border-b-2 border-[#111] bg-gradient-to-b from-[#fed7aa]/50 to-[#faf9f5] pt-10 pb-14 px-4">
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
              <li className="text-[#111] font-bold">EasySB &amp; SmarterBook vs ExamGhost</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fed7aa] border-2 border-[#111] text-xs font-mono font-bold mb-4 shadow-[2px_2px_0px_#111]">
                <span>📚 SMARTBOOK EXCEL EXPORTER VS UNIVERSAL EXAM STEALTH</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-5">
                EasySB &amp; SmarterBook vs ExamGhost:{' '}
                <span className="underline decoration-4 decoration-orange-600 underline-offset-4">
                  Why SmartBook-Only Tools Leave You Stranded on Graded Exams
                </span>
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-800 leading-relaxed mb-6">
                If you searched for a <strong>McGraw-Hill SmartBook solver</strong>, you likely ran
                into two names: <strong>SmarterBook</strong> (which was permanently{' '}
                <strong>shut down after a publisher copyright cease-and-desist letter</strong>) and{' '}
                <strong>EasySB</strong> (<code>easysb.org</code>, which only scrapes SmartBook 2.0
                reading modules into Excel spreadsheets). Neither tool can help you when you open a{' '}
                <strong>graded McGraw-Hill Connect exam, Canvas midterm, Blackboard quiz,</strong> or{' '}
                <strong>ALEKS assessment</strong>.
              </p>

              {/* Quick Verdict Cards */}
              <div className="grid sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    SmarterBook Status
                  </div>
                  <div className="text-lg font-black text-red-600 mt-0.5">Cease &amp; Desist</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Permanently discontinued by dev Micah Lindley after publisher legal action
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    EasySB (easysb.org)
                  </div>
                  <div className="text-lg font-black text-amber-700 mt-0.5">SmartBook Only</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Exports SmartBook 2.0 to Excel; 0% support for Connect Exams or Canvas
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    ExamGhost Coverage
                  </div>
                  <div className="text-lg font-black text-emerald-700 mt-0.5">SmartBook + All LMS</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Solves SmartBook 2.0, Connect Exams, Canvas, Blackboard, MyLab &amp; ALEKS
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111] text-white font-bold text-sm shadow-[4px_4px_0px_#c2410c] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <FaChrome className="w-4 h-4 text-[#fed7aa]" aria-hidden="true" />
                  <span>Start 50 Free Solves · $0 No Card</span>
                </Link>
                <a
                  href="#smartbook-autopsy"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border-2 border-[#111] font-bold text-sm shadow-[4px_4px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111] transition-all"
                >
                  Inspect SmarterBook &amp; EasySB Receipts ↓
                </a>
              </div>
            </div>

            {/* Right Column: Dual Dossier Card */}
            <div className="lg:col-span-5 bg-white border-2 border-[#111] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#111]">
              <div className="flex items-center justify-between border-b-2 border-[#111] pb-3 mb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-[#fed7aa] border border-[#111] px-2 py-0.5 rounded font-bold">
                    STATUS &amp; ARCHITECTURE DOSSIER
                  </span>
                  <h2 className="text-lg font-black mt-1">EasySB &amp; SmarterBook (2026)</h2>
                </div>
                <div className="text-right font-mono text-xs">
                  <div className="font-bold text-orange-700">1-Platform Niche</div>
                  <div className="text-neutral-500">SmartBook 2.0 Only</div>
                </div>
              </div>

              <dl className="space-y-2.5 text-xs font-mono border-b-2 border-dashed border-neutral-300 pb-4 mb-4">
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">SmarterBook Status:</dt>
                  <dd className="font-bold text-red-600 text-right">
                    Discontinued (Copyright Cease &amp; Desist)
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">SmarterBook Author:</dt>
                  <dd className="font-bold text-right">Micah Lindley (Archived GitHub)</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">EasySB Domain:</dt>
                  <dd className="font-bold text-right">easysb.org</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">EasySB Core Mechanism:</dt>
                  <dd className="font-bold text-right">SmartBook Module → Excel Exporter</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Graded Connect Exams:</dt>
                  <dd className="font-bold text-red-600 text-right">Unsupported (Fails)</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Canvas / Blackboard / MyLab:</dt>
                  <dd className="font-bold text-red-600 text-right">Unsupported (0% Coverage)</dd>
                </div>
              </dl>

              <div className="space-y-3">
                <div className="bg-red-50 border-2 border-red-800 rounded-xl p-3 text-xs">
                  <div className="font-mono font-bold text-red-900 uppercase mb-1">
                    Verified Legal Shutdown Receipt (SmarterBook)
                  </div>
                  <p className="text-neutral-800">
                    SmarterBook&apos;s repository and Chrome Web Store distribution were permanently
                    terminated after developer Micah Lindley received a formal copyright
                    cease-and-desist notice from textbook publisher legal counsel.
                  </p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-800 rounded-xl p-3 text-xs">
                  <div className="font-mono font-bold text-orange-900 uppercase mb-1">
                    Verified Functional Limit (easysb.org)
                  </div>
                  <p className="text-neutral-800">
                    EasySB only parses McGraw-Hill SmartBook 2.0 adaptive reading concepts and
                    exports them to Excel spreadsheets—it cannot solve graded McGraw-Hill Connect
                    homework, timed exams, or any university LMS quiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive 4-Tab Breakdown (Pure CSS Peer-Checked) */}
      <section id="smartbook-autopsy" className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#111] text-white px-2.5 py-1 rounded font-bold">
              WHY STUDENTS SWITCH TO EXAMGHOST
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              SmartBook Reading Modules Are Only 10% of Your Final Grade
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base">
              Even in classes that use McGraw-Hill SmartBook 2.0 for weekly textbook reading
              completion, 80%–90% of your course grade comes from <strong>McGraw-Hill Connect
              Graded Homework/Exams</strong> and <strong>Canvas / Blackboard Midterms</strong>.
              Explore the 4 tabs below to see why EasySB and SmarterBook fall short.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111] rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_#111]">
            <input
              type="radio"
              name="esb-audit-tabs"
              id="esb-tab-1"
              className="peer/tab1 hidden"
              defaultChecked
            />
            <input
              type="radio"
              name="esb-audit-tabs"
              id="esb-tab-2"
              className="peer/tab2 hidden"
            />
            <input
              type="radio"
              name="esb-audit-tabs"
              id="esb-tab-3"
              className="peer/tab3 hidden"
            />
            <input
              type="radio"
              name="esb-audit-tabs"
              id="esb-tab-4"
              className="peer/tab4 hidden"
            />

            {/* Tab Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6 border-b-2 border-[#111] pb-4">
              <label
                htmlFor="esb-tab-1"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#fed7aa]/60 peer-checked/tab1:bg-[#fed7aa] peer-checked/tab1:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Gap 01
                </span>
                SmartBook Reading vs Connect Exams
              </label>

              <label
                htmlFor="esb-tab-2"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#fed7aa]/60 peer-checked/tab2:bg-[#fed7aa] peer-checked/tab2:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Gap 02
                </span>
                Excel Alt-Tab Blur &amp; Bulk API Flags
              </label>

              <label
                htmlFor="esb-tab-3"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#fed7aa]/60 peer-checked/tab3:bg-[#fed7aa] peer-checked/tab3:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Gap 03
                </span>
                SmarterBook Cease-and-Desist
              </label>

              <label
                htmlFor="esb-tab-4"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#fed7aa]/60 peer-checked/tab4:bg-[#fed7aa] peer-checked/tab4:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Gap 04
                </span>
                One Subscription vs 5 Separate Tools
              </label>
            </div>

            {/* Tab 1 */}
            <div className="hidden peer-checked/tab1:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EASYSB (easysb.org) LIMITATION
                </div>
                <h3 className="text-xl font-black mb-2">
                  Blind on Graded McGraw-Hill Connect Homework &amp; Timed Exams
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  McGraw-Hill has two completely different engines: <strong>SmartBook 2.0</strong>{' '}
                  (ungraded/completion adaptive textbook reading with High/Medium/Low confidence
                  buttons) and <strong>McGraw-Hill Connect Assessments</strong> (graded problem sets,
                  accounting ledgers, chemistry equations, and timed midterms). EasySB only hooks
                  SmartBook 2.0 reading JSON—meaning it cannot solve a single graded Connect problem
                  set or exam.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>✗ Fails on McGraw-Hill Connect Graded Homework &amp; Quizzes</li>
                  <li>✗ Fails on McGraw-Hill ALEKS Math &amp; Chemistry</li>
                  <li>✗ Fails on Canvas, Blackboard, Moodle, &amp; Pearson MyLab</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST UNIVERSAL ENGINE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Crushes Both SmartBook 2.0 AND Graded Connect / Canvas Exams
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  With ExamGhost, you don&apos;t need a separate tool for SmartBook reading and
                  another tool for graded exams. Press <code>⌘+Shift+A</code> inside SmartBook 2.0
                  to breeze through multi-select confidence questions in 0.3s, then use the exact
                  same hotkey on your graded McGraw-Hill Connect accounting tables, ALEKS math, and
                  Canvas midterms.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ Solves SmartBook 2.0 &quot;Select all that apply&quot; &amp; fill-in-blanks</li>
                  <li>✓ Solves graded McGraw-Hill Connect accounting, finance, &amp; STEM exams</li>
                  <li>✓ Works seamlessly across Canvas, Blackboard, Moodle, D2L, &amp; MyLab</li>
                </ul>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="hidden peer-checked/tab2:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EASYSB EXCEL WORKFLOW RISK
                </div>
                <h3 className="text-xl font-black mb-2">
                  Bulk Module Scraping + Switching to Excel Leaves Two Telemetry Trails
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  EasySB&apos;s flagship feature is exporting SmartBook modules into an Excel
                  spreadsheet so you can Ctrl+F answers. That workflow creates two glaring
                  problems:
                </p>
                <div className="bg-white border border-red-300 rounded-lg p-3 font-mono text-xs text-red-900 space-y-1.5">
                  <div>
                    <strong>1. API Burst Anomaly:</strong> Scraping all concept nodes at once fires
                    rapid automated requests through your authenticated McGraw-Hill session.
                  </div>
                  <div>
                    <strong>2. Constant Window Blur:</strong> Clicking out of Chrome into Excel for
                    every question fires 40+ <code>window.blur</code> and{' '}
                    <code>visibilitychange</code> events.
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST ZERO-TAB-SWITCH WORKFLOW
                </div>
                <h3 className="text-xl font-black mb-2">
                  Stay Inside the Browser Tab With Zero API Scraping Bursts
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost never bulk-queries McGraw-Hill&apos;s backend APIs and never forces you
                  to switch over to an Excel window. It reads only the currently rendered question
                  on your screen, solves it in 0.3s inside a <code>Closed Shadow DOM</code> overlay,
                  and keeps <code>Focus Shield</code> locked so your session records zero page-left
                  events.
                </p>
                <div className="bg-white border border-emerald-300 rounded-lg p-3 font-mono text-xs text-emerald-900 space-y-1.5">
                  <div>✓ Zero abnormal API request bursts to mheducation.com</div>
                  <div>✓ Zero switching to Excel or external windows</div>
                  <div>✓ Always-on Focus Shield blocks window.blur &amp; visibilitychange</div>
                </div>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="hidden peer-checked/tab3:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  SMARTERBOOK LEGAL TAKEDOWN
                </div>
                <h3 className="text-xl font-black mb-2">
                  Why Unpacked GitHub Forks of SmarterBook Are Dangerous in 2026
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  After SmarterBook&apos;s original author (Micah Lindley) shut down the project
                  following a publisher cease-and-desist letter, copycat GitHub repositories and
                  sketchy zip downloads popped up claiming to be &ldquo;SmarterBook 2026.&rdquo;
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>✗ Original repo archived &amp; unmaintained since legal notice</li>
                  <li>✗ Injects visible DOM styles directly into SmartBook answer nodes</li>
                  <li>✗ Copycat unpacked .zip forks frequently contain session-stealing scripts</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST 2026 ARCHITECTURE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Actively Maintained, Closed Shadow DOM, Zero Publisher API Scraping
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  Because ExamGhost uses independent Multi-Model AI + Vision OCR inside an isolated
                  <code>Closed Shadow DOM</code> rather than redistributing proprietary McGraw-Hill
                  answer keys, it works reliably across every 2026 textbook edition and platform
                  update.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ Works on every 2026 McGraw-Hill SmartBook &amp; Connect update</li>
                  <li>✓ No reliance on leaked or scraped publisher answer keys</li>
                  <li>✓ Zero host DOM style mutations on answer choice elements</li>
                </ul>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="hidden peer-checked/tab4:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  SINGLE-PLATFORM FRAGMENTATION
                </div>
                <h3 className="text-xl font-black mb-2">
                  Paying for a Tool That Only Works in 1 Class Out of 5
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  A typical college student takes 4 to 5 courses per semester: one class might use
                  McGraw-Hill SmartBook, another uses Pearson MyLab Math, and all five use Canvas or
                  Blackboard for midterms and finals. Buying a SmartBook-only tool leaves 80% of
                  your semester uncovered.
                </p>
                <div className="bg-white border border-red-300 rounded-lg p-3 font-mono text-xs text-red-900">
                  <div>• Marketing 101 (SmartBook Reading): Covered by EasySB</div>
                  <div className="text-red-600 font-bold">
                    • Marketing 101 Midterm (Canvas): NOT Covered
                  </div>
                  <div className="text-red-600 font-bold">
                    • Financial Accounting (Connect Graded Ledger): NOT Covered
                  </div>
                  <div className="text-red-600 font-bold">
                    • Calculus / Stats (Pearson MyLab / ALEKS): NOT Covered
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  ALL-IN-ONE SEMESTER COVERAGE
                </div>
                <h3 className="text-xl font-black mb-2">
                  One Extension for Every Course, LMS, and Homework Portal
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost covers your entire semester schedule under a single lightweight
                  extension—and lets you start with <strong>50 Free Solves ($0, no card)</strong> to
                  verify it on both SmartBook 2.0 and your Canvas/Blackboard quizzes.
                </p>
                <div className="bg-white border border-emerald-300 rounded-lg p-3 font-mono text-xs text-emerald-900">
                  <div>✓ McGraw-Hill SmartBook 2.0 + Connect Graded Homework/Exams</div>
                  <div>✓ Canvas (Classic &amp; New Quizzes LTI), Blackboard, Moodle, D2L</div>
                  <div>✓ Pearson MyLab, Mastering, ALEKS, Cengage MindTap &amp; WebAssign</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Telemetry & Network Audit Log Comparison */}
      <section className="py-14 px-4 bg-[#111] text-white border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-orange-400 text-[#111] px-2.5 py-1 rounded font-bold">
              NETWORK &amp; FOCUS TELEMETRY AUDIT
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              McGraw-Hill Connect &amp; Canvas Telemetry: EasySB vs ExamGhost
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              Compare the network and window-focus footprint of scraping SmartBook to Excel versus
              solving in-page with ExamGhost.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* EasySB / SmarterBook Log */}
            <div className="bg-neutral-900 border-2 border-red-500/80 rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="font-bold text-red-400 uppercase">
                    EASYSB / ARCHIVED SMARTERBOOK SESSION LOG
                  </span>
                </div>
                <span className="bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded">
                  LIMITED &amp; RISKY
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[SmartBook 2.0 • 00:03s]</span> Bulk
                  scraper fires rapid XHR calls across all module concept endpoints to build Excel
                  export file.
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[SmartBook 2.0 • 00:40s]</span> Student
                  Alt-Tabs between Chrome and Excel 35 times (<code>window.blur</code> &amp;{' '}
                  <code>visibilitychange</code> fired repeatedly).
                </div>
                <div className="p-2.5 rounded bg-amber-950/60 border-l-4 border-amber-400">
                  <span className="text-amber-300 font-bold">[Connect Exam • 01:15s]</span> Student
                  opens Graded McGraw-Hill Connect Chapter Exam → EasySB fails to recognize page
                  (SmartBook-only).
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[Canvas Midterm • 02:00s]</span> Student
                  opens Canvas Quiz → 0% support.
                </div>
              </div>
            </div>

            {/* ExamGhost Log */}
            <div className="bg-neutral-900 border-2 border-emerald-400 rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-bold text-emerald-300 uppercase">
                    EXAMGHOST UNIVERSAL STEALTH LOG
                  </span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded">
                  ALL PLATFORMS • 0 FLAGS
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[SmartBook 2.0 • 00:12s]</span>{' '}
                  Student presses <code>⌘+Shift+A</code> on adaptive multi-select question. Solved
                  in 0.3s in-page with zero bulk API scraping.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[Connect Exam • 04:20s]</span>{' '}
                  Student opens Graded Connect Accounting Exam. Multi-Model STEM Consensus solves
                  full balance-sheet table accurately.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[Canvas Midterm • 12:05s]</span>{' '}
                  <code>Focus Shield</code> blocks all <code>window.blur</code> events while{' '}
                  <code>Closed Shadow DOM</code> keeps host DOM 100% clean.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[Result]</span> Reading modules,
                  Connect problem sets, and Canvas midterms all completed with 1 extension.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Head-to-Head Matrix */}
      <section className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#fed7aa] border border-[#111] px-2.5 py-1 rounded font-bold">
              COMPLETE FEATURE COMPARISON
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              EasySB vs SmarterBook vs ExamGhost (2026)
            </h2>
          </div>

          <div className="overflow-x-auto bg-white border-2 border-[#111] rounded-2xl shadow-[6px_6px_0px_#111]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#111] text-white font-mono text-xs uppercase">
                  <th className="p-4 border-r border-neutral-700">Capability</th>
                  <th className="p-4 border-r border-neutral-700">SmarterBook (Archived)</th>
                  <th className="p-4 border-r border-neutral-700">EasySB (easysb.org)</th>
                  <th className="p-4 bg-emerald-900 text-emerald-100">ExamGhost (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-[#111]">
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    2026 Operational Status
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Discontinued (Publisher cease-and-desist)
                  </td>
                  <td className="p-4 text-amber-800 font-semibold border-r-2 border-[#111]">
                    Active (SmartBook 2.0 exporter only)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Actively maintained across all 2026 LMS platforms
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    McGraw-Hill SmartBook 2.0
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Broken on 2026 updates
                  </td>
                  <td className="p-4 text-neutral-800 border-r-2 border-[#111]">
                    Exports reading concepts to Excel
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Solves live in-page in 0.3s (no Excel switching)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Graded McGraw-Hill Connect Exams &amp; Homework
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ No
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ No (SmartBook reading modules only)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Full support for graded Connect homework &amp; timed exams
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Canvas, Blackboard, Moodle, D2L, MyLab &amp; ALEKS
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ No (0% support)
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ No (0% support)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Native support across all major LMS &amp; STEM platforms
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Closed Shadow DOM + Focus Shield
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Direct DOM CSS highlighting
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ None (Excel switching fires window.blur)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Closed Shadow DOM v1 + Prototype Focus Shield
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Free Trial
                  </td>
                  <td className="p-4 text-neutral-500 border-r-2 border-[#111]">
                    Discontinued
                  </td>
                  <td className="p-4 text-neutral-800 border-r-2 border-[#111]">
                    Limited demo
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ 50 Free Solves ($0, No Credit Card Required)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Collapsible Technical Drawer */}
          <details className="mt-6 bg-white border-2 border-[#111] rounded-2xl p-5 shadow-[4px_4px_0px_#111] group">
            <summary className="cursor-pointer font-mono text-xs sm:text-sm font-bold flex items-center justify-between">
              <span>
                📂 VIEW SMARTERBOOK CEASE-AND-DESIST &amp; EASYSB ARCHITECTURE NOTES
              </span>
              <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 pt-4 border-t-2 border-dashed border-neutral-300 grid md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-neutral-900 text-neutral-100 p-4 rounded-xl overflow-x-auto">
                <div className="text-orange-400 font-bold mb-2">
                  // Historical Timeline: SmarterBook &amp; EasySB
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-[11px]">
{`1. SmarterBook (by Micah Lindley / micahlindley.com):
   - Open-source Chrome extension targeting McGraw-Hill
     SmartBook 2.0 reading assignments.
   - Permanently discontinued and archived on GitHub after
     the developer received a formal copyright cease-and-desist
     letter from legal counsel representing textbook publishers.

2. EasySB (https://easysb.org):
   - Niche web/extension utility focused on exporting
     McGraw-Hill SmartBook 2.0 modules into Excel sheets.
   - Does not operate on graded McGraw-Hill Connect exams,
     ALEKS, Canvas, Blackboard, or Pearson MyLab.`}
                </pre>
              </div>

              <div className="bg-neutral-50 border border-neutral-300 p-4 rounded-xl space-y-2.5 text-neutral-800">
                <div className="font-bold text-[#111] uppercase">
                  How ExamGhost Solves SmartBook 2.0 Better Without Scraping APIs:
                </div>
                <p>
                  SmartBook 2.0 penalizes wrong guesses heavily by adding extra remedial concept
                  questions whenever you miss a &ldquo;Select all that apply&rdquo; or fill-in-blank
                  prompt at High Confidence.
                </p>
                <p>
                  Instead of forcing you to export an Excel file and hunt through rows, ExamGhost
                  evaluates the exact SmartBook prompt on screen in 0.3 seconds so you can click
                  the right choices + High Confidence and finish a 45-concept reading module in
                  under 6 minutes.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Section 5: Verified Student Review */}
      <section className="py-14 px-4 bg-[#fed7aa]/35 border-b-2 border-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-[#111] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#111]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider bg-[#fed7aa] border border-[#111] px-2.5 py-1 rounded font-bold">
                VERIFIED STUDENT MIGRATION // MCGRAW-HILL CONNECT + CANVAS
              </span>
              <span className="font-mono text-xs font-bold text-emerald-700">
                ★★★★★ Switched from EasySB
              </span>
            </div>

            <blockquote className="text-base sm:text-xl font-bold leading-relaxed text-[#111] mb-5">
              &ldquo;I used SmarterBook last year before it got hit with a cease-and-desist, then
              tried EasySB. The problem is my Managerial Accounting class only counts SmartBook
              reading for 5% of our grade—the other 95% is graded McGraw-Hill Connect problem sets
              and Canvas exams where EasySB doesn&apos;t work at all. ExamGhost works right inside
              SmartBook 2.0 without making me export Excel files AND solves my graded Connect
              accounting tables and Canvas midterms.&rdquo;
            </blockquote>

            <div className="flex items-center justify-between text-xs font-mono text-neutral-600 border-t border-neutral-200 pt-4">
              <div>
                <strong className="text-[#111]">Devon K.</strong> • Junior, Accounting &amp; Supply
                Chain • McGraw-Hill Connect &amp; Canvas
              </div>
              <div className="text-emerald-700 font-bold">Verified ExamGhost Pro User</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#111] text-white px-2.5 py-1 rounded font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3">
              EasySB &amp; SmarterBook vs ExamGhost: FAQ
            </h2>
          </div>

          <div className="space-y-4">
            <details
              className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group"
              open
            >
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>1. What happened to the SmarterBook Chrome extension for McGraw-Hill?</span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                SmarterBook (originally created by developer Micah Lindley) was permanently
                discontinued and archived on GitHub after receiving a copyright cease-and-desist
                letter from legal counsel representing major textbook publishers. Unmaintained forks
                no longer match 2026 McGraw-Hill SmartBook 2.0 security checks.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  2. Does EasySB (easysb.org) work on graded McGraw-Hill Connect exams or Canvas
                  quizzes?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                No. EasySB is a single-purpose utility built strictly for McGraw-Hill SmartBook 2.0
                adaptive reading modules (including exporting module questions into Excel
                spreadsheets). It does not work on timed McGraw-Hill Connect homework/exams, Canvas,
                Blackboard, Moodle, Pearson MyLab, or ALEKS. ExamGhost works across SmartBook 2.0
                AND every graded LMS exam platform.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  3. Can exporting SmartBook modules to Excel trigger McGraw-Hill Connect detection?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Yes, in two ways: first, bulk-scraping an entire SmartBook module to generate an
                Excel sheet sends rapid sequential API requests through your authenticated{' '}
                <code>mheducation.com</code> session; second, switching between your browser and
                Excel during an assignment fires <code>window.blur</code> and{' '}
                <code>document.visibilitychange</code> events. ExamGhost solves questions one-by-one
                at natural human speed inside a Closed Shadow DOM with Focus Shield active.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  4. How does ExamGhost handle McGraw-Hill SmartBook 2.0 confidence ratings and
                  multi-select questions?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                ExamGhost&apos;s Multi-Model STEM &amp; Business Consensus engine evaluates every
                option in McGraw-Hill SmartBook 2.0 (&ldquo;Select all that apply&rdquo;,
                fill-in-the-blank, and matching) plus graded McGraw-Hill Connect accounting tables
                and finance formulas, displaying the exact verified choices silently in-page so you
                can click High Confidence with 99.4% accuracy.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-wider bg-orange-400 text-[#111] px-3 py-1 rounded-full font-bold mb-4">
            SOLVE SMARTBOOK 2.0 + CONNECT EXAMS + CANVAS IN ONE TOOL
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Try ExamGhost Free With 50 Solves ($0, No Card)
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Stop exporting Excel spreadsheets or hunting for dead SmarterBook forks. Solve
            McGraw-Hill SmartBook 2.0, graded Connect exams, and Canvas midterms live in 0.3s.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <Link prefetch={false}
              href="/#pricing"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-orange-400 text-[#111] font-black text-sm hover:bg-orange-300 transition-all"
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

          <div className="border-t border-neutral-800 pt-8 text-left">
            <div className="text-xs font-mono uppercase text-neutral-400 mb-3">
              Related Technical Extension Audits:
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
              <Link prefetch={false}
                href="/mylabsolver-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-orange-400 transition-colors"
              >
                <div className="text-orange-400 font-bold">MyLab Solver vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  Official shutdown audit of mylabsolver.com
                </div>
              </Link>
              <Link prefetch={false}
                href="/collegetools-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-orange-400 transition-colors"
              >
                <div className="text-orange-400 font-bold">College Tools vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  3.17★ Mindko rebrand &amp; 24 injected JS files
                </div>
              </Link>
              <Link prefetch={false}
                href="/quizloader-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-orange-400 transition-colors"
              >
                <div className="text-orange-400 font-bold">Canvas Quiz Loader vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  Why attempt-replay fails on Attempt #1
                </div>
              </Link>
              <Link prefetch={false}
                href="/quizonator-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-orange-400 transition-colors"
              >
                <div className="text-orange-400 font-bold">Quizonator vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  3.5★ Polish extension limited to Classic Quizzes
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
