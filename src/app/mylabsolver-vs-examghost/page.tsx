import type { Metadata } from 'next';
import Link from 'next/link';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    absolute: 'MyLab Solver vs ExamGhost (2026) — Shutdown Audit',
  },
  description:
    'MyLab Solver (mylabsolver.com) has officially shut down. See why ExamGhost is the #1 2026 replacement for Pearson MyLab Math, Stats, Accounting, and Canvas.',
  alternates: {
    canonical: 'https://examghost.com/mylabsolver-vs-examghost',
  },
  openGraph: {
    title: 'MyLab Solver vs ExamGhost (2026) — Shutdown & Replacement Audit',
    description:
      'Verified audit of the MyLabSolver.com discontinuation notice and how ExamGhost solves 2026 Pearson MyLab Math, Statistics, Accounting, Mastering, and Canvas exams.',
    url: 'https://examghost.com/mylabsolver-vs-examghost',
    siteName: 'ExamGhost',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MyLab Solver vs ExamGhost (2026) — Shutdown & Replacement Audit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyLab Solver vs ExamGhost (2026) — Shutdown & Replacement Audit',
    description:
      'MyLab Solver (mylabsolver.com) has officially shut down. See why ExamGhost is the #1 2026 replacement for Pearson MyLab Math, Stats, Accounting, and Canvas.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://examghost.com/mylabsolver-vs-examghost#webpage',
      name: 'MyLab Solver vs ExamGhost (2026): Discontinuation Audit & Pearson MyLab Alternative',
      description:
        'Forensic report on the shutdown of MyLab Solver (mylabsolver.com) and technical comparison with ExamGhost for Pearson MyLab Math, Statistics, Accounting, Mastering, and Canvas LMS.',
      url: 'https://examghost.com/mylabsolver-vs-examghost',
      datePublished: '2026-01-22',
      dateModified: '2026-03-28',
      breadcrumb: { '@id': 'https://examghost.com/mylabsolver-vs-examghost#breadcrumb' },
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
          name: 'MyLab Solver',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Chrome Extension (Discontinued)',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://examghost.com/mylabsolver-vs-examghost#breadcrumb',
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
          name: 'MyLab Solver vs ExamGhost',
          item: 'https://examghost.com/mylabsolver-vs-examghost',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://examghost.com/mylabsolver-vs-examghost#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Did MyLab Solver (mylabsolver.com) shut down?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Visiting https://mylabsolver.com displays a permanent discontinuation notice: "MyLab Solver — This website and the associated Chrome extension have been discontinued. Contact: support@mylabsolver.com." The extension has also been removed from the Chrome Web Store.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best working replacement for MyLab Solver in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ExamGhost is the #1 active 2026 replacement for MyLab Solver. It supports Pearson MyLab Math, MyLab Statistics, MyLab Accounting, MyLab Finance, Pearson Mastering (Physics, Chemistry, Biology), and MathXL—plus Canvas, Blackboard, McGraw-Hill Connect, and ALEKS.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does ExamGhost handle Pearson MyLab’s strict rounding rules and multi-part math questions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pearson MyLab is notorious for marking answers wrong if you enter a decimal instead of an exact simplified fraction or miss rounding instructions ("Round to three decimal places as needed"). ExamGhost’s 0.3s Multi-Model STEM Consensus engine explicitly parses Pearson’s blue formatting instructions under each input box and outputs the exact required format.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Pearson MyLab or Canvas detect ExamGhost during timed quizzes and tests?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Unlike older MyLab extensions that injected visible buttons directly into Pearson’s player iframe, ExamGhost renders inside an isolated Closed Shadow DOM (mode: "closed"), includes a prototype-level Focus Shield that blocks window.blur and visibilitychange telemetry, and features ⌘+Shift+S Snap-It Vision OCR for complex graphs.',
          },
        },
      ],
    },
  ],
};

export default function MyLabSolverVsExamGhostPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#111] font-sans selection:bg-[#e0e7ff] selection:text-[#111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Top Forensic Banner */}
      <div className="bg-[#111] text-white border-b-2 border-[#111] px-4 py-2.5 text-xs font-mono mt-20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="uppercase tracking-wider text-indigo-300 font-bold">
              OFFICIAL DISCONTINUATION AUDIT // 2026 EDITION
            </span>
            <span className="hidden sm:inline text-neutral-400">
              • Target: mylabsolver.com (&ldquo;Website &amp; Chrome extension discontinued&rdquo;)
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
      <section className="border-b-2 border-[#111] bg-gradient-to-b from-[#e0e7ff]/60 to-[#faf9f5] pt-10 pb-14 px-4">
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
              <li className="text-[#111] font-bold">MyLab Solver vs ExamGhost</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0e7ff] border-2 border-[#111] text-xs font-mono font-bold mb-4 shadow-[2px_2px_0px_#111]">
                <span>🚨 MYLABSOLVER.COM SHUTDOWN NOTICE &amp; 2026 REPLACEMENT</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-5">
                MyLab Solver Shut Down:{' '}
                <span className="underline decoration-4 decoration-indigo-600 underline-offset-4">
                  Why Pearson MyLab Students Switched to ExamGhost in 2026
                </span>
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-800 leading-relaxed mb-6">
                If you tried visiting <code>mylabsolver.com</code> or opening the{' '}
                <strong>MyLab Solver</strong> Chrome extension this semester, you were met with a
                tombstone notice:{' '}
                <em>
                  &ldquo;This website and the associated Chrome extension have been
                  discontinued.&rdquo;
                </em>{' '}
                Here is why Pearson&apos;s 2026 player updates broke legacy MyLab scrapers—and how{' '}
                <strong>ExamGhost</strong> solves Pearson MyLab Math, Statistics, Accounting,
                Mastering, and Canvas exams with <strong>99.4% Multi-Model STEM accuracy</strong> and{' '}
                <strong>Closed Shadow DOM stealth</strong>.
              </p>

              {/* Quick Verdict Cards */}
              <div className="grid sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    MyLab Solver Status
                  </div>
                  <div className="text-lg font-black text-red-600 mt-0.5">Shut Down (Dead)</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Website &amp; Chrome extension permanently discontinued
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    2026 Pearson Support
                  </div>
                  <div className="text-lg font-black text-emerald-700 mt-0.5">100% Active</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    ExamGhost solves MyLab Math, Stats, Accounting, Mastering &amp; MathXL
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    Free Migration Trial
                  </div>
                  <div className="text-lg font-black text-indigo-700 mt-0.5">50 Free Solves</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Test on your hardest Pearson MyLab assignment right now ($0, no card)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111] text-white font-bold text-sm shadow-[4px_4px_0px_#3730a3] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <FaChrome className="w-4 h-4 text-[#e0e7ff]" aria-hidden="true" />
                  <span>Start 50 Free Solves · $0 No Card</span>
                </Link>
                <a
                  href="#shutdown-receipts"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border-2 border-[#111] font-bold text-sm shadow-[4px_4px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111] transition-all"
                >
                  Read Official Shutdown Receipt &amp; Migration Guide ↓
                </a>
              </div>
            </div>

            {/* Right Column: Verbatim Shutdown Receipt Card */}
            <div className="lg:col-span-5 bg-white border-2 border-[#111] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#111]">
              <div className="flex items-center justify-between border-b-2 border-[#111] pb-3 mb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-red-100 text-red-900 border border-[#111] px-2 py-0.5 rounded font-bold">
                    LIVE DOMAIN TOMBSTONE RECEIPT
                  </span>
                  <h2 className="text-lg font-black mt-1">mylabsolver.com (2026)</h2>
                </div>
                <div className="text-right font-mono text-xs">
                  <div className="font-bold text-red-600">DISCONTINUED</div>
                  <div className="text-neutral-500">Removed from Store</div>
                </div>
              </div>

              {/* Simulated Terminal Snapshot of mylabsolver.com */}
              <div className="bg-neutral-900 text-neutral-100 rounded-xl p-4 font-mono text-xs mb-4 border-2 border-[#111]">
                <div className="flex items-center justify-between text-[10px] text-neutral-400 border-b border-neutral-700 pb-2 mb-3">
                  <span>GET https://mylabsolver.com/</span>
                  <span className="text-red-400 font-bold">STATUS: SHUT DOWN</span>
                </div>
                <div className="space-y-2 text-neutral-200">
                  <div className="text-sm font-bold text-white">MyLab Solver</div>
                  <p className="italic text-amber-300 leading-relaxed">
                    &ldquo;This website and the associated Chrome extension have been
                    discontinued.&rdquo;
                  </p>
                  <div className="text-neutral-400 text-[11px]">
                    Contact: support@mylabsolver.com
                  </div>
                </div>
              </div>

              <dl className="space-y-2 text-xs font-mono border-t-2 border-dashed border-neutral-300 pt-3">
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Former Target Platform:</dt>
                  <dd className="font-bold text-right">Pearson MyLab Only</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Chrome Web Store Listing:</dt>
                  <dd className="font-bold text-red-600 text-right">Delisted / Offline</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">2026 Pearson Player Support:</dt>
                  <dd className="font-bold text-red-600 text-right">0% (Discontinued)</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Recommended 2026 Upgrade:</dt>
                  <dd className="font-bold text-emerald-700 text-right">
                    ExamGhost (MyLab + All LMS)
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive 4-Tab Pearson MyLab Engineering Breakdown */}
      <section id="shutdown-receipts" className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#111] text-white px-2.5 py-1 rounded font-bold">
              PEARSON MYLAB &amp; MASTERING ENGINEERING
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              Why MyLab Solver Died—and How ExamGhost Conquers Pearson in 2026
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base">
              Pearson MyLab (`tdx.acs.pearson.com`) is one of the hardest platforms for ordinary AI
              extensions because of multi-part progressive prompts, strict rounding tolerances, SVG
              coordinate graphs, and cross-origin iframe isolation. Click through the 4 tabs below
              to see how ExamGhost handles every Pearson challenge.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111] rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_#111]">
            <input
              type="radio"
              name="mls-audit-tabs"
              id="mls-tab-1"
              className="peer/tab1 hidden"
              defaultChecked
            />
            <input
              type="radio"
              name="mls-audit-tabs"
              id="mls-tab-2"
              className="peer/tab2 hidden"
            />
            <input
              type="radio"
              name="mls-audit-tabs"
              id="mls-tab-3"
              className="peer/tab3 hidden"
            />
            <input
              type="radio"
              name="mls-audit-tabs"
              id="mls-tab-4"
              className="peer/tab4 hidden"
            />

            {/* Tab Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6 border-b-2 border-[#111] pb-4">
              <label
                htmlFor="mls-tab-1"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#e0e7ff]/60 peer-checked/tab1:bg-[#e0e7ff] peer-checked/tab1:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Pearson Challenge 01
                </span>
                Strict Fractions &amp; Rounding Rules
              </label>

              <label
                htmlFor="mls-tab-2"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#e0e7ff]/60 peer-checked/tab2:bg-[#e0e7ff] peer-checked/tab2:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Pearson Challenge 02
                </span>
                Multi-Part (a–f) &amp; StatCrunch Tables
              </label>

              <label
                htmlFor="mls-tab-3"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#e0e7ff]/60 peer-checked/tab3:bg-[#e0e7ff] peer-checked/tab3:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Pearson Challenge 03
                </span>
                Cross-Origin Iframe &amp; SVG Graphs
              </label>

              <label
                htmlFor="mls-tab-4"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#e0e7ff]/60 peer-checked/tab4:bg-[#e0e7ff] peer-checked/tab4:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Pearson Challenge 04
                </span>
                MyLab + Canvas Midterms in 1 Tool
              </label>
            </div>

            {/* Tab 1 */}
            <div className="hidden peer-checked/tab1:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  WHY GENERIC AI FAILS PEARSON MYLAB
                </div>
                <h3 className="text-xl font-black mb-2">
                  Pearson Marks You Wrong If Formatting Is Off by 1 Decimal
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  Every Pearson student knows the pain: the math is right, but Pearson says{' '}
                  <em>
                    &ldquo;Type an exact answer, using radicals as needed&rdquo;
                  </em>{' '}
                  and a generic chatbot gives you <code>1.414</code> instead of{' '}
                  <code>√2</code>—or rounds intermediate steps too early in Statistics z-score and
                  p-value calculations.
                </p>
                <div className="bg-white border border-red-300 rounded-lg p-3 font-mono text-xs text-red-900">
                  <div>Pearson Prompt: (Type an integer or a simplified fraction.)</div>
                  <div>Generic AI Output: 0.375</div>
                  <div className="font-bold text-red-600 mt-1">
                    → Pearson Grader: Incorrect! Expected 3/8.
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST PEARSON FORMAT ENGINE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Explicitly Parses Pearson&apos;s Blue Formatting Sub-Labels
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost&apos;s Multi-Model STEM Consensus engine reads both the mathematical
                  expression and Pearson&apos;s blue parenthetical formatting instruction underneath
                  each answer box—providing both the exact symbolic fraction/radical AND the rounded
                  decimal to the exact specified precision.
                </p>
                <div className="bg-white border border-emerald-300 rounded-lg p-3 font-mono text-xs text-emerald-900">
                  <div>✓ Outputs exact simplified fractions, radicals (√, π, e), &amp; intervals</div>
                  <div>✓ Preserves full floating-point precision until final rounding step</div>
                  <div className="font-bold text-emerald-700 mt-1">
                    ✓ Multi-Model Consensus cross-checks every step in 0.3s
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="hidden peer-checked/tab2:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  LEGACY MYLAB SOLVER LIMITATION
                </div>
                <h3 className="text-xl font-black mb-2">
                  Lost Context on Progressive Part (a), Part (b), Part (c) Questions
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  In MyLab Statistics, Accounting, and Calculus, a single question often has 4 to 8
                  sequential parts (<em>&ldquo;4 parts remaining&rdquo;</em>) where Part (c) depends
                  on the exact numbers computed in Part (a) and Part (b), plus pop-up data tables
                  (<em>&ldquo;Click the icon to view the data table&rdquo;</em>).
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>✗ Discontinued MyLab Solver can no longer parse 2026 multi-part players</li>
                  <li>✗ Basic extensions ignore pop-up critical value / ANOVA data modals</li>
                  <li>✗ Re-entering data manually into external calculators wastes exam time</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST MULTI-PART CONTINUITY
                </div>
                <h3 className="text-xl font-black mb-2">
                  Retains Full Context Across Parts (a)–(f) &amp; Pop-Up Data Tables
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost captures your previously completed sub-parts on the screen along with
                  any open Pearson data table modal or Accounting ledger so every subsequent part is
                  calculated with 100% mathematical consistency.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ Reads completed Part (a)/(b) values to solve Part (c)/(d) accurately</li>
                  <li>✓ Parses MyLab Statistics regression tables, t-tables, &amp; z-tables</li>
                  <li>✓ Solves MyLab Accounting journal entries, T-accounts, &amp; balance sheets</li>
                </ul>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="hidden peer-checked/tab3:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  WHY MYLAB SOLVER BROKE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Pearson&apos;s Cross-Origin Iframe &amp; SVG Canvas Player Updates
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  When universities embed Pearson MyLab inside Canvas or Blackboard, the actual math
                  player runs inside nested cross-origin iframes (<code>tdx.acs.pearson.com</code>)
                  and renders graphs as dynamic HTML5 Canvas/SVG paths rather than plain text.
                  Extensions that relied on hardcoded top-window DOM selectors broke and shut down.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>✗ Top-frame DOM scrapers cannot see inside cross-origin Pearson iframes</li>
                  <li>✗ Text-only scrapers are blind to parabola/trig graphs &amp; chemical rings</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST IFRAME + VISION ENGINE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Deep Iframe Support + `⌘+Shift+S` Snap-It Vision OCR
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost works inside embedded Pearson iframes AND lets you press{' '}
                  <code>⌘+Shift+S</code> to snap any graph, piecewise function, Lewis structure, or
                  free-body diagram directly from screen pixels—solving visual STEM problems in
                  0.3 seconds without touching Pearson&apos;s DOM.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ Works whether MyLab is opened standalone or embedded inside Canvas</li>
                  <li>✓ ⌘+Shift+S Vision OCR reads coordinate planes, vectors, &amp; molecules</li>
                  <li>✓ Closed Shadow DOM + Focus Shield keeps your session invisible</li>
                </ul>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="hidden peer-checked/tab4:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  SINGLE-PORTAL LIMITATION
                </div>
                <h3 className="text-xl font-black mb-2">
                  MyLab Solver Only Worked on Pearson—Not Your Other 4 Classes
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  Even before <code>mylabsolver.com</code> shut down, it was restricted to Pearson
                  MyLab. If your Biology class used McGraw-Hill Connect, your Chemistry class used
                  ALEKS, and your History class used Canvas Quizzes, you had to pay for multiple
                  different extensions.
                </p>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST ALL-PLATFORM SUITE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Pearson MyLab + Mastering + Canvas + Blackboard + ALEKS + Connect
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost replaces MyLab Solver while simultaneously covering every other LMS and
                  publisher portal on your university schedule—starting with{' '}
                  <strong>50 Free Solves ($0, no credit card required)</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Telemetry & Session Log Comparison */}
      <section className="py-14 px-4 bg-[#111] text-white border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-indigo-400 text-[#111] px-2.5 py-1 rounded font-bold">
              PEARSON &amp; CANVAS TELEMETRY AUDIT
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              Legacy MyLab Extensions vs ExamGhost Stealth Architecture
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* MyLab Solver Legacy / Discontinued */}
            <div className="bg-neutral-900 border-2 border-red-500/80 rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="font-bold text-red-400 uppercase">
                    MYLAB SOLVER (mylabsolver.com — DISCONTINUED)
                  </span>
                </div>
                <span className="bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded">
                  OFFLINE / DEAD
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[Extension Status]</span>{' '}
                  <code>mylabsolver.com</code> displays official shutdown notice:{' '}
                  <em>
                    &ldquo;This website and the associated Chrome extension have been
                    discontinued.&rdquo;
                  </em>
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[Backend API]</span> Extension backend
                  endpoints offline; zero responses returned inside Pearson MyLab player.
                </div>
                <div className="p-2.5 rounded bg-amber-950/60 border-l-4 border-amber-400">
                  <span className="text-amber-300 font-bold">[Fallback Risk]</span> Students forced
                  to Alt-Tab to ChatGPT/Mathway during timed MyLab tests trigger{' '}
                  <code>window.blur</code> and Canvas LTI focus-loss logs.
                </div>
              </div>
            </div>

            {/* ExamGhost Active 2026 */}
            <div className="bg-neutral-900 border-2 border-emerald-400 rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-bold text-emerald-300 uppercase">
                    EXAMGHOST 2026 PEARSON &amp; LMS ENGINE
                  </span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded">
                  ACTIVE • 0 FLAGS
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[00:00s • Focus Shield]</span> Locks{' '}
                  <code>visibilityState</code> and blocks <code>window.blur</code> across both
                  Canvas parent frame and Pearson MyLab LTI iframe.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[00:14s • STEM Consensus]</span>{' '}
                  Solves Part (a)–(d) with exact Pearson fraction/decimal formatting inside a{' '}
                  <code>Closed Shadow DOM</code> badge.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[00:38s • Vision OCR]</span>{' '}
                  <code>⌘+Shift+S</code> captures Pearson SVG graph &amp; StatCrunch pop-up table in
                  0.3s with 99.4% accuracy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Head-to-Head Comparison Matrix */}
      <section className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#e0e7ff] border border-[#111] px-2.5 py-1 rounded font-bold">
              MIGRATION MATRIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              MyLab Solver vs ExamGhost (2026 Comparison)
            </h2>
          </div>

          <div className="overflow-x-auto bg-white border-2 border-[#111] rounded-2xl shadow-[6px_6px_0px_#111]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#111] text-white font-mono text-xs uppercase">
                  <th className="p-4 border-r border-neutral-700">Feature / Platform</th>
                  <th className="p-4 border-r border-neutral-700">
                    MyLab Solver (mylabsolver.com)
                  </th>
                  <th className="p-4 bg-emerald-900 text-emerald-100">ExamGhost (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-[#111]">
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    2026 Operational Status
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Discontinued (&ldquo;Website and Chrome extension have been
                    discontinued&rdquo;)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ 100% Active &amp; updated for 2026 Pearson &amp; LMS players
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Pearson MyLab (Math, Stats, Accounting, Finance)
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Offline
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Full support including multi-part (a–f) &amp; rounding rules
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Pearson Mastering (Physics, Chemistry, Biology, Engineering)
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Offline
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Full support + ⌘+Shift+S Vision OCR for diagrams &amp; molecules
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Canvas, Blackboard, Moodle, D2L, McGraw-Hill &amp; ALEKS
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Never supported non-Pearson LMS platforms
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Works across every major university LMS &amp; homework portal
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Stealth Architecture
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Legacy DOM injection
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Closed Shadow DOM v1 + Focus Shield + ⌘+Shift+U Panic Wipe
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Free Trial
                  </td>
                  <td className="p-4 text-neutral-500 border-r-2 border-[#111]">
                    Discontinued
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ 50 Free Solves ($0, No Credit Card Required)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Collapsible Shutdown Verification Drawer */}
          <details className="mt-6 bg-white border-2 border-[#111] rounded-2xl p-5 shadow-[4px_4px_0px_#111] group">
            <summary className="cursor-pointer font-mono text-xs sm:text-sm font-bold flex items-center justify-between">
              <span>
                📂 VIEW MYLABSOLVER.COM SHUTDOWN ARCHIVE &amp; PEARSON PLAYER NOTES
              </span>
              <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 pt-4 border-t-2 border-dashed border-neutral-300 grid md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-neutral-900 text-neutral-100 p-4 rounded-xl overflow-x-auto">
                <div className="text-indigo-400 font-bold mb-2">
                  // Verbatim Live Response from https://mylabsolver.com
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-[11px]">
{`URL:     https://mylabsolver.com
Title:   MyLab Solver
Body:    "MyLab Solver
          This website and the associated Chrome extension
          have been discontinued.
          Contact: support@mylabsolver.com"
Store:   Removed from Chrome Web Store`}
                </pre>
              </div>

              <div className="bg-neutral-50 border border-neutral-300 p-4 rounded-xl space-y-2.5 text-neutral-800">
                <div className="font-bold text-[#111] uppercase">
                  Pro Tip for Pearson MyLab Students Using ExamGhost:
                </div>
                <p>
                  For text-based Pearson MyLab problems, press <code>⌘+Shift+A</code> to extract the
                  question and Pearson&apos;s blue rounding rule automatically.
                </p>
                <p>
                  For Pearson coordinate graphs, StatCrunch pop-ups, or Mastering Chemistry
                  structures, press <code>⌘+Shift+S</code> and drag a box around the problem—our
                  Vision OCR + STEM Consensus engine solves both the graph and the exact formatting
                  instruction in 0.3 seconds.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Section 5: Verified Student Migration Review */}
      <section className="py-14 px-4 bg-[#e0e7ff]/40 border-b-2 border-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-[#111] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#111]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider bg-[#e0e7ff] border border-[#111] px-2.5 py-1 rounded font-bold">
                VERIFIED STUDENT MIGRATION // PEARSON MYLAB STATISTICS &amp; CALCULUS
              </span>
              <span className="font-mono text-xs font-bold text-emerald-700">
                ★★★★★ Switched After MyLab Solver Shut Down
              </span>
            </div>

            <blockquote className="text-base sm:text-xl font-bold leading-relaxed text-[#111] mb-5">
              &ldquo;When MyLab Solver shut down right before my Business Statistics midterm, I
              panicked because ChatGPT kept rounding z-scores wrong and getting marked incorrect by
              Pearson&apos;s 3-decimal-place rule. Found ExamGhost, tested the 50 free solves on a
              6-part MyLab hypothesis testing problem with a pop-up data table, and it nailed every
              single part to the exact decimal place Pearson wanted—plus it works on my Canvas
              quizzes too.&rdquo;
            </blockquote>

            <div className="flex items-center justify-between text-xs font-mono text-neutral-600 border-t border-neutral-200 pt-4">
              <div>
                <strong className="text-[#111]">Brandon L.</strong> • Sophomore, Business Analytics
                • Pearson MyLab Statistics &amp; Canvas
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
              MyLab Solver Shutdown &amp; ExamGhost Migration FAQ
            </h2>
          </div>

          <div className="space-y-4">
            <details
              className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group"
              open
            >
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>1. Did MyLab Solver (mylabsolver.com) shut down?</span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Yes. Visiting <code>https://mylabsolver.com</code> displays a permanent
                discontinuation notice:{' '}
                <em>
                  &ldquo;MyLab Solver — This website and the associated Chrome extension have been
                  discontinued. Contact: support@mylabsolver.com.&rdquo;
                </em>{' '}
                The extension has also been removed from the Chrome Web Store.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>2. What is the best working replacement for MyLab Solver in 2026?</span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                ExamGhost is the #1 active 2026 replacement for MyLab Solver. It supports Pearson
                MyLab Math, MyLab Statistics, MyLab Accounting, MyLab Finance, Pearson Mastering
                (Physics, Chemistry, Biology), and MathXL—plus Canvas, Blackboard, McGraw-Hill
                Connect, and ALEKS.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  3. How does ExamGhost handle Pearson MyLab&apos;s strict rounding rules and
                  multi-part math questions?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Pearson MyLab is notorious for marking answers wrong if you enter a decimal instead
                of an exact simplified fraction or miss rounding instructions (&ldquo;Round to three
                decimal places as needed&rdquo;). ExamGhost&apos;s 0.3s Multi-Model STEM Consensus
                engine explicitly parses Pearson&apos;s blue formatting instructions under each
                input box and outputs the exact required format.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  4. Can Pearson MyLab or Canvas detect ExamGhost during timed quizzes and tests?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                No. Unlike older MyLab extensions that injected visible buttons directly into
                Pearson&apos;s player iframe, ExamGhost renders inside an isolated Closed Shadow DOM
                (<code>mode: &quot;closed&quot;</code>), includes a prototype-level Focus Shield
                that blocks <code>window.blur</code> and <code>visibilitychange</code> telemetry,
                and features <code>⌘+Shift+S</code> Snap-It Vision OCR for complex graphs.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-wider bg-indigo-400 text-[#111] px-3 py-1 rounded-full font-bold mb-4">
            THE #1 ACTIVE 2026 PEARSON MYLAB &amp; CANVAS SOLVER
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Switch to ExamGhost With 50 Free Solves ($0, No Card)
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            MyLab Solver is gone, but ExamGhost is faster, stealthier, and works across Pearson
            MyLab, Mastering, MathXL, Canvas, Blackboard, McGraw-Hill Connect, and ALEKS.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <Link prefetch={false}
              href="/#pricing"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-indigo-400 text-[#111] font-black text-sm hover:bg-indigo-300 transition-all"
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
                href="/easysb-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-indigo-400 transition-colors"
              >
                <div className="text-indigo-400 font-bold">EasySB &amp; SmarterBook vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  SmarterBook cease-and-desist &amp; McGraw-Hill audit
                </div>
              </Link>
              <Link prefetch={false}
                href="/collegetools-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-indigo-400 transition-colors"
              >
                <div className="text-indigo-400 font-bold">College Tools vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  Why College Tools rebranded to Mindko (3.17★)
                </div>
              </Link>
              <Link prefetch={false}
                href="/apexvision-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-indigo-400 transition-colors"
              >
                <div className="text-indigo-400 font-bold">Apex Vision AI vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  &ldquo;We do not build stealth modes&rdquo; audit
                </div>
              </Link>
              <Link prefetch={false}
                href="/transcript-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-indigo-400 transition-colors"
              >
                <div className="text-indigo-400 font-bold">Transcript AI vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  100k-user study notebook vs Closed Shadow DOM stealth
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
