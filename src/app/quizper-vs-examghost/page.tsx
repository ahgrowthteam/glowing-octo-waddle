import type { Metadata } from 'next';
import Link from 'next/link';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    absolute: 'Quizper AI vs ExamGhost (2026) — BYOK & DOM Audit',
  },
  description:
    'Audit of Quizper AI and Quiz Solver Complete (14 users, 0★) vs ExamGhost. See why turning options blue in the DOM and exposing your OpenAI API key gets flagged.',
  alternates: {
    canonical: 'https://examghost.com/quizper-vs-examghost',
  },
  openGraph: {
    title: 'Quizper AI vs ExamGhost (2026) — BYOK & Blue DOM Highlight Audit',
    description:
      'We audited Quizper AI and Quiz Solver Complete (elbjclngdonajjihkebgholdgpeklmbl, 14 users). See why Highlight Mode ("turns correct options blue") fails on LMS exams.',
    url: 'https://examghost.com/quizper-vs-examghost',
    siteName: 'ExamGhost',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quizper AI vs ExamGhost (2026) — BYOK & Blue DOM Highlight Audit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quizper AI vs ExamGhost (2026) — BYOK & Blue DOM Highlight Audit',
    description:
      'Audit of Quizper AI and Quiz Solver Complete (14 users, 0★) vs ExamGhost. See why turning options blue in the DOM and exposing your OpenAI API key gets flagged.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://examghost.com/quizper-vs-examghost#webpage',
      name: 'Quizper AI & Quiz Solver Complete vs ExamGhost (2026): Technical & BYOK Security Audit',
      description:
        'Side-by-side comparison of Quizper AI, Quiz Solver Complete (elbjclngdonajjihkebgholdgpeklmbl), and ExamGhost across inline CSS DOM mutation, BYOK API key exposure, Focus Shield, and STEM accuracy.',
      url: 'https://examghost.com/quizper-vs-examghost',
      datePublished: '2026-01-18',
      dateModified: '2026-03-04',
      breadcrumb: { '@id': 'https://examghost.com/quizper-vs-examghost#breadcrumb' },
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
          name: 'Quizper AI & Quiz Solver Complete',
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
      '@id': 'https://examghost.com/quizper-vs-examghost#breadcrumb',
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
          name: 'Quizper AI vs ExamGhost',
          item: 'https://examghost.com/quizper-vs-examghost',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://examghost.com/quizper-vs-examghost#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is turning correct options blue in the DOM ("Highlight Mode") detectable by Canvas and Blackboard?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quiz Solver Complete (Chrome ID elbjclngdonajjihkebgholdgpeklmbl) advertises "Highlight Mode for passive studying (turns correct options blue) or Auto-Assist Mode for rapid form completion." Modifying the inline style attribute of an LMS answer choice element triggers MutationObserver attribute listeners on the host page. ExamGhost never modifies host page CSS—it displays answers inside an isolated Closed Shadow DOM container.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the risk of pasting your own OpenAI or Gemini API key into Quizper AI or Quiz Solver Complete?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both Quizper AI (which instructs users to paste OPEN_AI_API_KEY directly into content.js) and Quiz Solver Complete ("Load your API key") use a Bring-Your-Own-Key (BYOK) model. This exposes your raw secret key in browser storage or page scripts, requires separate developer billing setup, and only queries a single model instead of ExamGhost’s managed Multi-Model STEM Consensus.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many users does Quiz Solver Complete actually have on the Chrome Web Store?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'According to the official Chrome Web Store listing (ID: elbjclngdonajjihkebgholdgpeklmbl), Quiz Solver Complete has only 14 users and 0 ratings (0.0★).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does ExamGhost require me to bring my own OpenAI API key?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. ExamGhost works out of the box with zero API key setup and includes 50 Free Solves ($0, no credit card required) powered by our managed Multi-Model STEM Consensus router.',
          },
        },
      ],
    },
  ],
};

export default function QuizperVsExamGhostPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#111] font-sans selection:bg-[#dbeafe] selection:text-[#111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Top Forensic Banner */}
      <div className="bg-[#111] text-white border-b-2 border-[#111] px-4 py-2.5 text-xs font-mono mt-20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="uppercase tracking-wider text-blue-300 font-bold">
              BYOK &amp; DOM HIGHLIGHT AUDIT // 2026 EDITION
            </span>
            <span className="hidden sm:inline text-neutral-400">
              • Chrome ID: elbjclngdonajjihkebgholdgpeklmbl (14 Users • 0★) &amp; QuizperAI Repo
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
      <section className="border-b-2 border-[#111] bg-gradient-to-b from-[#dbeafe]/55 to-[#faf9f5] pt-10 pb-14 px-4">
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
              <li className="text-[#111] font-bold">
                Quizper AI &amp; Quiz Solver Complete vs ExamGhost
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbeafe] border-2 border-[#111] text-xs font-mono font-bold mb-4 shadow-[2px_2px_0px_#111]">
                <span>🔑 BYOK API KEY WRAPPERS VS CLOSED SHADOW DOM STEALTH</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-5">
                Quizper AI &amp; Quiz Solver Complete vs ExamGhost:{' '}
                <span className="underline decoration-4 decoration-blue-600 underline-offset-4">
                  Why Blue DOM Highlights &amp; BYOK API Keys Fail on Real Exams
                </span>
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-800 leading-relaxed mb-6">
                Lightweight Bring-Your-Own-Key (BYOK) extensions like <strong>Quizper AI</strong>{' '}
                (unpacked GitHub script) and <strong>Quiz Solver Complete</strong> (
                <code>elbjclngdonajjihkebgholdgpeklmbl</code>, <strong>14 users</strong>,{' '}
                <strong>0 ratings</strong>) require you to paste your own raw OpenAI/Gemini developer
                key and then directly mutate the LMS page—either injecting an{' '}
                <code>&ldquo;Ask Quizper AI&rdquo;</code> button,{' '}
                <strong>turning answer choices blue in the DOM</strong>, or auto-filling forms (
                <code>isTrusted: false</code>). Here is our full technical audit.
              </p>

              {/* Quick Verdict Cards */}
              <div className="grid sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    DOM Highlight Risk
                  </div>
                  <div className="text-lg font-black text-red-600 mt-0.5">Turns Options Blue</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Direct inline CSS mutation on host LMS nodes triggers MutationObserver
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    API Key Security
                  </div>
                  <div className="text-lg font-black text-amber-700 mt-0.5">Raw Key in Script</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Requires pasting your personal <code>sk-...</code> API key into content.js /
                    popup
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    Chrome Install Base
                  </div>
                  <div className="text-lg font-black text-red-600 mt-0.5">14 Users • 0★</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Untested on 2026 Canvas New Quizzes LTI, Blackboard Ultra &amp; MyLab
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111] text-white font-bold text-sm shadow-[4px_4px_0px_#1d4ed8] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <FaChrome className="w-4 h-4 text-[#dbeafe]" aria-hidden="true" />
                  <span>Start 50 Free Solves · $0 No Card</span>
                </Link>
                <a
                  href="#byok-audit"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border-2 border-[#111] font-bold text-sm shadow-[4px_4px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111] transition-all"
                >
                  Inspect Store &amp; Source Code Receipts ↓
                </a>
              </div>
            </div>

            {/* Right Column: Verbatim Extension Dossier Card */}
            <div className="lg:col-span-5 bg-white border-2 border-[#111] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#111]">
              <div className="flex items-center justify-between border-b-2 border-[#111] pb-3 mb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-[#dbeafe] border border-[#111] px-2 py-0.5 rounded font-bold">
                    VERIFIED EXTENSION DOSSIER
                  </span>
                  <h2 className="text-lg font-black mt-1">
                    Quizper AI / Quiz Solver Complete
                  </h2>
                </div>
                <div className="text-right font-mono text-xs">
                  <div className="font-bold text-neutral-600">0.0 ★ (0 ratings)</div>
                  <div className="text-red-600 font-bold">14 Chrome users</div>
                </div>
              </div>

              <dl className="space-y-2.5 text-xs font-mono border-b-2 border-dashed border-neutral-300 pb-4 mb-4">
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Chrome Extension ID:</dt>
                  <dd className="font-bold text-right break-all">elbjclngdonajjihkebgholdgpeklmbl</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Store Listing Title:</dt>
                  <dd className="font-bold text-right">Quiz solver complete</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">GitHub Variant:</dt>
                  <dd className="font-bold text-right">QuizperAI (Unpacked Manifest)</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Authentication Model:</dt>
                  <dd className="font-bold text-amber-700 text-right">
                    Bring-Your-Own-Key (OpenAI / Gemini)
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">DOM Manipulation:</dt>
                  <dd className="font-bold text-red-600 text-right">
                    Turns Options Blue / Injects Button
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Focus / Blur Shield:</dt>
                  <dd className="font-bold text-red-600 text-right">None</dd>
                </div>
              </dl>

              <div className="space-y-3">
                <div className="bg-blue-50 border-2 border-blue-900 rounded-xl p-3 text-xs">
                  <div className="font-mono font-bold text-blue-950 uppercase mb-1">
                    Verbatim Chrome Store Disclosure (elbjclngdonajjihkebgholdgpeklmbl)
                  </div>
                  <p className="italic text-neutral-800">
                    &ldquo;Two modes: Highlight Mode for passive studying (turns correct options
                    blue) or Auto-Assist Mode for rapid form completion... Load your API key, open
                    your practice page.&rdquo;
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-800 rounded-xl p-3 text-xs">
                  <div className="font-mono font-bold text-red-900 uppercase mb-1">
                    Verbatim QuizperAI Source Code Requirement (content.js)
                  </div>
                  <p className="font-mono text-[11px] text-red-950">
                    const OPEN_AI_API_KEY = &apos;&lt;YOUR_OPEN_AI_API_KEY&gt;&apos;; // Hardcoded
                    directly in content script + injects &quot;Ask Quizper AI&quot; button into DOM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive 4-Tab Breakdown (Pure CSS Peer-Checked) */}
      <section id="byok-audit" className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#111] text-white px-2.5 py-1 rounded font-bold">
              CODE &amp; STEALTH AUTOPSY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              4 Reasons DIY API-Key Quiz Solvers Fail in 2026 University Courses
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base">
              Click through the 4 tabs below to see what happens when an extension modifies LMS
              inline CSS to color answers blue, auto-completes forms, or makes direct client-side
              calls with your personal developer API key.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111] rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_#111]">
            <input
              type="radio"
              name="qp-audit-tabs"
              id="qp-tab-1"
              className="peer/tab1 hidden"
              defaultChecked
            />
            <input
              type="radio"
              name="qp-audit-tabs"
              id="qp-tab-2"
              className="peer/tab2 hidden"
            />
            <input
              type="radio"
              name="qp-audit-tabs"
              id="qp-tab-3"
              className="peer/tab3 hidden"
            />
            <input
              type="radio"
              name="qp-audit-tabs"
              id="qp-tab-4"
              className="peer/tab4 hidden"
            />

            {/* Tab Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6 border-b-2 border-[#111] pb-4">
              <label
                htmlFor="qp-tab-1"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#dbeafe]/60 peer-checked/tab1:bg-[#dbeafe] peer-checked/tab1:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Vulnerability 01
                </span>
                &ldquo;Turns Options Blue&rdquo; DOM Trap
              </label>

              <label
                htmlFor="qp-tab-2"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#dbeafe]/60 peer-checked/tab2:bg-[#dbeafe] peer-checked/tab2:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Vulnerability 02
                </span>
                Auto-Assist Form Macro Flag
              </label>

              <label
                htmlFor="qp-tab-3"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#dbeafe]/60 peer-checked/tab3:bg-[#dbeafe] peer-checked/tab3:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Vulnerability 03
                </span>
                Exposed BYOK Developer Keys
              </label>

              <label
                htmlFor="qp-tab-4"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#dbeafe]/60 peer-checked/tab4:bg-[#dbeafe] peer-checked/tab4:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Vulnerability 04
                </span>
                14 Users vs Multi-LMS Engineering
              </label>
            </div>

            {/* Tab 1 */}
            <div className="hidden peer-checked/tab1:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  QUIZ SOLVER COMPLETE &amp; QUIZPER AI
                </div>
                <h3 className="text-xl font-black mb-2">
                  Turning Host DOM Elements Blue Triggers `MutationObserver` Immediately
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  Quiz Solver Complete&apos;s store listing states that{' '}
                  <strong>
                    &ldquo;Highlight Mode... turns correct options blue&rdquo;
                  </strong>{' '}
                  while Quizper AI injects an <strong>&ldquo;Ask Quizper AI&rdquo;</strong> button
                  and response div directly into the question HTML. Any script watching the LMS DOM
                  with <code>new MutationObserver(&#123; attributes: true, childList: true &#125;)</code>{' '}
                  instantly sees unauthorized inline <code>style=&quot;color: blue&quot;</code>{' '}
                  modifications on quiz answer nodes.
                </p>
                <div className="bg-white border border-red-300 rounded-lg p-3 font-mono text-xs text-red-900">
                  <div>// Host LMS DOM after Highlight Mode runs:</div>
                  <div>&lt;label class=&quot;answer_label&quot; style=&quot;color: rgb(0, 102, 255);&quot;&gt;</div>
                  <div className="text-red-600 font-bold mt-1">
                    → Flagged by attribute MutationObserver &amp; visible on screen share.
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST CLOSED SHADOW DOM
                </div>
                <h3 className="text-xl font-black mb-2">
                  Zero Inline CSS Changes on Host Answer Choice Elements
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost never recolors, bolds, or alters the inline <code>style</code> or{' '}
                  <code>className</code> of any Canvas, Blackboard, or MyLab answer node. All UI
                  rendering is strictly encapsulated inside a{' '}
                  <code>Closed Shadow DOM (mode: &apos;closed&apos;)</code> root where{' '}
                  <code>element.shadowRoot</code> returns <code>null</code> to host page scripts.
                </p>
                <div className="bg-white border border-emerald-300 rounded-lg p-3 font-mono text-xs text-emerald-900">
                  <div>// Host LMS DOM while ExamGhost is active:</div>
                  <div>&lt;label class=&quot;answer_label&quot;&gt; (100% untouched original HTML)</div>
                  <div className="text-emerald-700 font-bold mt-1">
                    → 0 attribute mutations, 0 injected buttons, ⌘+Shift+U Panic Wipe.
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="hidden peer-checked/tab2:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  AUTO-ASSIST MODE RISK
                </div>
                <h3 className="text-xl font-black mb-2">
                  &ldquo;Rapid Form Completion&rdquo; Sets `event.isTrusted = false`
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  The second mode advertised by Quiz Solver Complete is{' '}
                  <strong>&ldquo;Auto-Assist Mode for rapid form completion.&rdquo;</strong> When an
                  extension programmatically checks radio buttons or populates inputs across a quiz
                  form, the browser flags every single synthetic click with{' '}
                  <code>event.isTrusted === false</code> and logs sub-second completion intervals in
                  Canvas SpeedGrader.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>✗ Synthetic DOM click events (`isTrusted: false`)</li>
                  <li>✗ Impossible sub-second answer intervals in SpeedGrader logs</li>
                  <li>✗ Breaks on React/Canvas New Quizzes controlled state inputs</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST HUMAN-CLICK INTEGRITY
                </div>
                <h3 className="text-xl font-black mb-2">
                  You Click Naturally — 100% `isTrusted: true` Hardware Telemetry
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost delivers the verified answer and step-by-step reasoning in 0.3 seconds,
                  and you click the option yourself with your mouse or trackpad. Every click event
                  carries authentic pointer movement, pressure, and <code>isTrusted: true</code>{' '}
                  verification.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ 100% genuine hardware clicks (`isTrusted: true`)</li>
                  <li>✓ Natural human reading &amp; clicking cadence in SpeedGrader</li>
                  <li>✓ Works on every LMS input type without breaking React state</li>
                </ul>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="hidden peer-checked/tab3:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  BYOK API KEY EXPOSURE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Hardcoding Your Personal `sk-...` Key in `content.js`
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  In Quizper AI&apos;s installation guide, students are told to open{' '}
                  <code>content.js</code> and paste their raw OpenAI secret key into{' '}
                  <code>const OPEN_AI_API_KEY = &apos;...&apos;</code>. In Quiz Solver Complete, you
                  must load your own API key into storage.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>✗ Requires setting up developer API billing &amp; Tier-1 rate limits</li>
                  <li>✗ Raw API key sits unencrypted in content script / local storage</li>
                  <li>✗ Direct fetch calls from page context can fail Content-Security-Policy (CSP)</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST ZERO-CONFIG CLOUD ROUTER
                </div>
                <h3 className="text-xl font-black mb-2">
                  No API Keys to Manage + Background Worker CSP Bypass
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost requires zero developer API keys. All inference runs through an isolated
                  Manifest V3 background service worker (completely bypassing host page CSP headers)
                  and queries multiple frontier models in parallel for 99.4% STEM accuracy.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ Instant 1-click install with 50 Free Solves ($0, no card)</li>
                  <li>✓ Background Service Worker bypasses strict LMS CSP rules</li>
                  <li>✓ Multi-Model STEM Consensus + Local Course Materials RAG Vault</li>
                </ul>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="hidden peer-checked/tab4:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  14 USERS &amp; 0 RATINGS
                </div>
                <h3 className="text-xl font-black mb-2">
                  Unvetted Hobby Scripts Break on Iframes, LaTeX &amp; Diagrams
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  With only <strong>14 users and 0 reviews</strong> on the Chrome Web Store, Quiz
                  Solver Complete (and the abandoned QuizperAI GitHub script) only scrapes basic
                  plain-text multiple-choice nodes. When faced with Canvas New Quizzes LTI 1.3
                  iframes, Pearson MyLab math players, or circuit diagrams, basic `innerText`
                  scrapers fail completely.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>✗ Cannot read graphs, geometry figures, or chemical structures</li>
                  <li>✗ Fails inside cross-origin LTI 1.3 exam iframes</li>
                  <li>✗ Zero Focus Shield against Canvas window.blur detection</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST PRODUCTION SUITE
                </div>
                <h3 className="text-xl font-black mb-2">
                  Vision OCR + Cross-Origin Iframe Support + Focus Shield
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost is engineered specifically for 2026 university assessments—combining
                  deep iframe extraction, <code>⌘+Shift+S</code> Snap-It Vision OCR for visual STEM
                  problems, and an always-on <code>Focus Shield</code>.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ ⌘+Shift+S Vision OCR solves any graph, table, or diagram</li>
                  <li>✓ Works inside Canvas New Quizzes LTI, MyLab, ALEKS, &amp; Blackboard</li>
                  <li>✓ Rated 4.9★ by over 1,400+ verified student reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Professor SpeedGrader Audit Log Comparison */}
      <section className="py-14 px-4 bg-[#111] text-white border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-blue-400 text-[#111] px-2.5 py-1 rounded font-bold">
              PROFESSOR VIEW // DOM &amp; CSP TELEMETRY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              What Happens on Canvas When You Run Quizper AI / Quiz Solver Complete
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Quizper / Quiz Solver Complete Log */}
            <div className="bg-neutral-900 border-2 border-red-500/80 rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="font-bold text-red-400 uppercase">
                    QUIZPER AI / QUIZ SOLVER COMPLETE LOG
                  </span>
                </div>
                <span className="bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded">
                  DOM &amp; CSP FLAGS
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[00:02s • DOM Injection]</span> Script
                  injects <code>&quot;Ask Quizper AI&quot;</code> button or mutates option inline
                  styles to <code>color: blue</code> (Highlight Mode).
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[00:05s • Auto-Assist Macro]</span> Rapid
                  form completion checks inputs via JS (<code>event.isTrusted === false</code>).
                </div>
                <div className="p-2.5 rounded bg-amber-950/60 border-l-4 border-amber-400">
                  <span className="text-amber-300 font-bold">[00:14s • API / CSP Error]</span>{' '}
                  Student&apos;s personal OpenAI API key hits HTTP 429 rate-limit or page CSP
                  connect-src block.
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[00:19s • Window Blur]</span> Student
                  clicks extension popup to fix API key → Canvas logs{' '}
                  <code>Stopped viewing the Canvas quiz-taking page</code>.
                </div>
              </div>
            </div>

            {/* ExamGhost Log */}
            <div className="bg-neutral-900 border-2 border-emerald-400 rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-bold text-emerald-300 uppercase">
                    EXAMGHOST STEALTH ENGINE LOG
                  </span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded">
                  0 FLAGS
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[00:00s • Zero Setup]</span> No
                  personal OpenAI API keys needed. Managed background service worker active.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[00:15s • Closed Shadow DOM]</span>{' '}
                  Answer badge renders inside <code>mode: &apos;closed&apos;</code> shadow root.
                  Host answer options remain 100% unmodified.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[00:19s • Natural Click]</span>{' '}
                  Student selects option with real mouse click (<code>isTrusted: true</code>).
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[Result]</span> 0 DOM style
                  mutations, 0 CSP errors, 0 page-left blur events.
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
            <span className="text-xs font-mono uppercase tracking-wider bg-[#dbeafe] border border-[#111] px-2.5 py-1 rounded font-bold">
              HEAD-TO-HEAD MATRIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              Quizper AI / Quiz Solver Complete vs ExamGhost
            </h2>
          </div>

          <div className="overflow-x-auto bg-white border-2 border-[#111] rounded-2xl shadow-[6px_6px_0px_#111]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#111] text-white font-mono text-xs uppercase">
                  <th className="p-4 border-r border-neutral-700">Feature / Security Metric</th>
                  <th className="p-4 border-r border-neutral-700">
                    Quizper AI / Quiz Solver Complete
                  </th>
                  <th className="p-4 bg-emerald-900 text-emerald-100">ExamGhost (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-[#111]">
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Verified Chrome Web Store Footprint
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    14 users • 0.0★ (0 ratings) on ID elbjclngdonajjihkebgholdgpeklmbl
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ 4.9★ rating across 1,420+ verified university student reviews
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Answer Display Architecture
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Turns host DOM options blue or injects &ldquo;Ask Quizper AI&rdquo; button
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Isolated Closed Shadow DOM (`mode: &apos;closed&apos;`) — 0 host DOM edits
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Form Interaction Stealth
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ &ldquo;Auto-Assist Mode for rapid form completion&rdquo; (`isTrusted: false`)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Never auto-clicks inputs; preserves 100% `isTrusted: true` clicks
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    API Key &amp; Setup Requirement
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Must bring your own OpenAI/Gemini developer API key (`sk-...`)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Zero API key setup; works out of the box with 50 Free Solves
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Tab-Switch / Window Blur Protection
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ None
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Built-in Focus Shield blocks `window.blur` &amp; `visibilitychange`
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    AI Engine &amp; Course Context
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Single raw prompt to your BYOK key; no OCR or PDF vault
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Multi-Model STEM Consensus + Course RAG Vault + ⌘+Shift+S Vision OCR
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Collapsible Manifest & Source Code Drawer */}
          <details className="mt-6 bg-white border-2 border-[#111] rounded-2xl p-5 shadow-[4px_4px_0px_#111] group">
            <summary className="cursor-pointer font-mono text-xs sm:text-sm font-bold flex items-center justify-between">
              <span>
                📂 VIEW CHROME STORE &amp; GITHUB SOURCE AUDIT
                (elbjclngdonajjihkebgholdgpeklmbl / QuizperAI)
              </span>
              <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 pt-4 border-t-2 border-dashed border-neutral-300 grid md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-neutral-900 text-neutral-100 p-4 rounded-xl overflow-x-auto">
                <div className="text-blue-400 font-bold mb-2">
                  // Verbatim Store &amp; Code Receipts
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-[11px]">
{`1. Chrome Web Store: "Quiz solver complete"
   ID:      elbjclngdonajjihkebgholdgpeklmbl
   Users:   14 users | Rating: 0.0★ (0 ratings)
   Quotes:
   - "Two modes: Highlight Mode for passive studying (turns
     correct options blue) or Auto-Assist Mode for rapid
     form completion."
   - "Load your API key, open your practice page."

2. GitHub Repository: "QuizperAI"
   Setup:   Requires editing content.js:
            const OPEN_AI_API_KEY = '<YOUR_OPEN_AI_API_KEY>';
   DOM:     Appends "Ask Quizper AI" button directly into
            page DOM nodes.`}
                </pre>
              </div>

              <div className="bg-neutral-50 border border-neutral-300 p-4 rounded-xl space-y-2.5 text-neutral-800">
                <div className="font-bold text-[#111] uppercase">
                  Why Inline CSS Color Changes Are Trivial to Detect:
                </div>
                <p>
                  When an extension changes a multiple-choice label&apos;s color to blue via{' '}
                  <code>el.style.color = &apos;blue&apos;</code>, any proctoring or LMS script can
                  run a 1-line check: <code>document.querySelectorAll(&apos;[style]&apos;)</code> on
                  quiz option labels to detect unauthorized answer highlighting.
                </p>
                <p>
                  ExamGhost never touches the style attributes of quiz options.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Section 5: Verified Student Migration Review */}
      <section className="py-14 px-4 bg-[#dbeafe]/35 border-b-2 border-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-[#111] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#111]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider bg-[#dbeafe] border border-[#111] px-2.5 py-1 rounded font-bold">
                VERIFIED STUDENT MIGRATION // COMPUTER SCIENCE &amp; PHYSICS
              </span>
              <span className="font-mono text-xs font-bold text-emerald-700">
                ★★★★★ Switched from BYOK Quizper Script
              </span>
            </div>

            <blockquote className="text-base sm:text-xl font-bold leading-relaxed text-[#111] mb-5">
              &ldquo;As a CS major I originally tried using QuizperAI and Quiz Solver Complete with
              my own OpenAI API key. Not only did Canvas&apos;s Content-Security-Policy block the
              script inside New Quizzes LTI iframes, but Highlight Mode literally edits the HTML
              style attribute on the radio label to turn it blue—which any basic MutationObserver
              can catch. Switched to ExamGhost because it uses a real Closed Shadow DOM, includes
              Focus Shield, and solves Physics diagrams in 0.3s without me messing with API
              keys.&rdquo;
            </blockquote>

            <div className="flex items-center justify-between text-xs font-mono text-neutral-600 border-t border-neutral-200 pt-4">
              <div>
                <strong className="text-[#111]">Ethan V.</strong> • Junior, Computer Science •
                Canvas New Quizzes &amp; WebAssign
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
              Quizper AI &amp; Quiz Solver Complete vs ExamGhost: FAQ
            </h2>
          </div>

          <div className="space-y-4">
            <details
              className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group"
              open
            >
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  1. Why is turning correct options blue in the DOM (&ldquo;Highlight Mode&rdquo;)
                  detectable by Canvas and Blackboard?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Quiz Solver Complete (<code>elbjclngdonajjihkebgholdgpeklmbl</code>) advertises{' '}
                <em>
                  &ldquo;Highlight Mode for passive studying (turns correct options blue) or
                  Auto-Assist Mode for rapid form completion.&rdquo;
                </em>{' '}
                Modifying the inline <code>style</code> attribute of an LMS answer choice element
                triggers <code>MutationObserver</code> attribute listeners on the host page.
                ExamGhost never modifies host page CSS—it displays answers inside an isolated Closed
                Shadow DOM container.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  2. What is the risk of pasting your own OpenAI or Gemini API key into Quizper AI
                  or Quiz Solver Complete?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Both Quizper AI (which instructs users to paste <code>OPEN_AI_API_KEY</code>{' '}
                directly into <code>content.js</code>) and Quiz Solver Complete (&ldquo;Load your
                API key&rdquo;) use a Bring-Your-Own-Key (BYOK) model. This exposes your raw secret
                key in browser storage or page scripts, requires separate developer billing setup,
                and only queries a single model instead of ExamGhost&apos;s managed Multi-Model STEM
                Consensus.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  3. How many users does Quiz Solver Complete actually have on the Chrome Web Store?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                According to the official Chrome Web Store listing (ID:{' '}
                <code>elbjclngdonajjihkebgholdgpeklmbl</code>), Quiz Solver Complete has only{' '}
                <strong>14 users</strong> and <strong>0 ratings (0.0★)</strong>.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>4. Does ExamGhost require me to bring my own OpenAI API key?</span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                No. ExamGhost works out of the box with zero API key setup and includes{' '}
                <strong>50 Free Solves ($0, no credit card required)</strong> powered by our managed
                Multi-Model STEM Consensus router.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-wider bg-blue-400 text-[#111] px-3 py-1 rounded-full font-bold mb-4">
            NO API KEYS REQUIRED • ZERO HOST DOM MUTATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Get 50 Free Solves With ExamGhost ($0, No Card)
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Replace 14-user BYOK scripts and detectable blue DOM highlights with ExamGhost&apos;s
            Closed Shadow DOM, Focus Shield, and Multi-Model STEM Consensus.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <Link prefetch={false}
              href="/#pricing"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-400 text-[#111] font-black text-sm hover:bg-blue-300 transition-all"
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
                href="/doublecheckai-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-blue-400 transition-colors"
              >
                <div className="text-blue-400 font-bold">Double Check AI vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  244 real users vs 1,200+ claim &amp; auto-click audit
                </div>
              </Link>
              <Link prefetch={false}
                href="/quizloader-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-blue-400 transition-colors"
              >
                <div className="text-blue-400 font-bold">Canvas Quiz Loader vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  Previous-attempt HTML copier vs Attempt #1 AI
                </div>
              </Link>
              <Link prefetch={false}
                href="/rightclickai-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-blue-400 transition-colors"
              >
                <div className="text-blue-400 font-bold">RightClick AI vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  2.6★ rating &amp; blocked context menu workflow
                </div>
              </Link>
              <Link prefetch={false}
                href="/mylabsolver-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-blue-400 transition-colors"
              >
                <div className="text-blue-400 font-bold">MyLab Solver vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  Official shutdown notice &amp; 2026 Pearson alternative
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
