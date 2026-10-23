import type { Metadata } from 'next';
import Link from 'next/link';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    absolute: 'Double Check AI vs ExamGhost (2026) — 244 Users & DOM Audit',
  },
  description:
    'Audit of Double Check AI (doublecheckme.com, 244 Chrome users vs 1,200+ claimed) vs ExamGhost. Exposing the 5-solve daily cap and auto-click DOM risk.',
  alternates: {
    canonical: 'https://examghost.com/doublecheckai-vs-examghost',
  },
  openGraph: {
    title: 'Double Check AI vs ExamGhost (2026) — 244 Users & DOM Audit',
    description:
      'DoubleCheckMe.com claims "1,200+ students" while the Chrome Web Store shows 244 users. See why its injected button and automatic radio selection trigger flags.',
    url: 'https://examghost.com/doublecheckai-vs-examghost',
    siteName: 'ExamGhost',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Double Check AI vs ExamGhost (2026) — 244 Users & DOM Audit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Double Check AI vs ExamGhost (2026) — 244 Users & DOM Audit',
    description:
      'Audit of Double Check AI (doublecheckme.com, 244 Chrome users vs 1,200+ claimed) vs ExamGhost. Exposing the 5-solve daily cap and auto-click DOM risk.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://examghost.com/doublecheckai-vs-examghost#webpage',
      name: 'Double Check AI vs ExamGhost (2026): Forensic Chrome Store & Stealth Audit',
      description:
        'Detailed comparison of AI Homework Helper - Double Check AI (ciiaplbmocogjcakmllebilamknkfckg) and ExamGhost across Chrome Web Store install verification, DOM button injection, synthetic radio clicks, and STEM accuracy.',
      url: 'https://examghost.com/doublecheckai-vs-examghost',
      datePublished: '2026-02-27',
      dateModified: '2026-03-11',
      breadcrumb: { '@id': 'https://examghost.com/doublecheckai-vs-examghost#breadcrumb' },
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
          name: 'Double Check AI (AI Homework Helper)',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Chrome Extension',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '0.00',
            highPrice: '9.99',
            priceCurrency: 'USD',
            offerCount: '2',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://examghost.com/doublecheckai-vs-examghost#breadcrumb',
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
          name: 'Double Check AI vs ExamGhost',
          item: 'https://examghost.com/doublecheckai-vs-examghost',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://examghost.com/doublecheckai-vs-examghost#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many students actually use Double Check AI on the Chrome Web Store?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Although doublecheckme.com advertises "1,200+ students use Double Check" and "150k+ Questions Solved," its official Chrome Web Store listing (AI Homework Helper - Double Check AI, ID: ciiaplbmocogjcakmllebilamknkfckg) shows only 244 active users and 13 ratings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is Double Check AI’s automatic answer selection risky on Canvas and Blackboard?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On doublecheckme.com, a featured testimonial states: "i literally just press the button and it automatically selects the right answer lol." This reveals two detection vectors: first, the extension injects a visible button directly into the LMS host DOM; second, programmatically clicking a radio button sets event.isTrusted to false in browser event listeners. ExamGhost never injects buttons into the host DOM and never auto-clicks inputs—it renders answers inside a Closed Shadow DOM so you click naturally with genuine hardware events.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many free questions does Double Check AI give compared to ExamGhost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Double Check AI restricts free users to just 5 questions every 24 hours—not enough to finish a single 10-question Canvas quiz. ExamGhost gives every student 50 Free Solves upfront with zero credit card required and no 24-hour lockout.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Double Check AI protect against Canvas tab-switching and window blur logs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Double Check AI does not include a prototype-level Focus Shield to intercept window.blur, focusout, or document.visibilitychange events. ExamGhost includes an always-on Focus Shield plus a ⌘+Shift+U Panic Wipe hotkey.',
          },
        },
      ],
    },
  ],
};

export default function DoubleCheckAiVsExamGhostPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#111] font-sans selection:bg-[#fde68a] selection:text-[#111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Top Forensic Banner */}
      <div className="bg-[#111] text-white border-b-2 border-[#111] px-4 py-2.5 text-xs font-mono mt-20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="uppercase tracking-wider text-amber-300 font-bold">
              VERIFIED CHROME STORE AUDIT // 2026 EDITION
            </span>
            <span className="hidden sm:inline text-neutral-400">
              • Extension ID: ciiaplbmocogjcakmllebilamknkfckg (244 Users • 13 Ratings)
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
      <section className="border-b-2 border-[#111] bg-gradient-to-b from-[#fde68a]/45 to-[#faf9f5] pt-10 pb-14 px-4">
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
              <li className="text-[#111] font-bold">Double Check AI vs ExamGhost</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fde68a] border-2 border-[#111] text-xs font-mono font-bold mb-4 shadow-[2px_2px_0px_#111]">
                <span>⚠️ MARKETING CLAIMS VS CHROME STORE REALITY</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-5">
                Double Check AI vs ExamGhost:{' '}
                <span className="underline decoration-4 decoration-amber-600 underline-offset-4">
                  244 Real Users, 5-Question Caps &amp; Auto-Click DOM Traces
                </span>
              </h1>

              <p className="aeo-summary text-base sm:text-lg text-neutral-800 leading-relaxed mb-6">
                Visit <code>doublecheckme.com</code> and you&apos;ll see bold banners claiming{' '}
                <em>&ldquo;1,200+ students use Double Check&rdquo;</em> alongside an urgent{' '}
                <em>&ldquo;ACT FAST&rdquo;</em> countdown timer. Check Google&apos;s official Chrome
                Web Store listing (<code>ciiaplbmocogjcakmllebilamknkfckg</code>) and the truth is
                very different: only <strong>244 active users</strong> and{' '}
                <strong>13 ratings</strong>, a strict <strong>5-question/24hr free cap</strong>, and
                an injected DOM button that programmatically clicks radio inputs (
                <code>isTrusted: false</code>).
              </p>

              {/* Quick Verdict Badges */}
              <div className="grid sm:grid-cols-3 gap-3 mb-7">
                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    Real Chrome Installs
                  </div>
                  <div className="text-lg font-black text-amber-700 mt-0.5">244 Users Total</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Site claims &ldquo;1,200+ students&rdquo; (nearly 5x inflated vs Google Store)
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    Free Trial Cap
                  </div>
                  <div className="text-lg font-black text-red-600 mt-0.5">Only 5 Solves / 24h</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Locks out mid-quiz after Question #5 vs ExamGhost&apos;s 50 Free Solves
                  </p>
                </div>

                <div className="bg-white border-2 border-[#111] rounded-xl p-3.5 shadow-[3px_3px_0px_#111]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-bold">
                    DOM Stealth Risk
                  </div>
                  <div className="text-lg font-black text-red-600 mt-0.5">Auto-Clicks Inputs</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Injected button + synthetic radio click (<code>isTrusted: false</code>)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link prefetch={false}
                  href="/#pricing"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111] text-white font-bold text-sm shadow-[4px_4px_0px_#b45309] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <FaChrome className="w-4 h-4 text-[#fde68a]" aria-hidden="true" />
                  <span>Start 50 Free Solves · $0 No Card</span>
                </Link>
                <a
                  href="#receipt-comparison"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border-2 border-[#111] font-bold text-sm shadow-[4px_4px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111] transition-all"
                >
                  See Verbatim Site vs Store Receipts ↓
                </a>
              </div>
            </div>

            {/* Right Column: Verbatim Extension Dossier Card */}
            <div className="lg:col-span-5 bg-white border-2 border-[#111] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#111]">
              <div className="flex items-center justify-between border-b-2 border-[#111] pb-3 mb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-[#fde68a] border border-[#111] px-2 py-0.5 rounded font-bold">
                    CHROME WEB STORE RECEIPT
                  </span>
                  <h2 className="text-lg font-black mt-1">Double Check AI</h2>
                </div>
                <div className="text-right font-mono text-xs">
                  <div className="font-bold text-amber-600">★ 4.8 / 5.0</div>
                  <div className="text-neutral-500">13 ratings (244 users)</div>
                </div>
              </div>

              <dl className="space-y-2.5 text-xs font-mono border-b-2 border-dashed border-neutral-300 pb-4 mb-4">
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Store Listing Title:</dt>
                  <dd className="font-bold text-right">AI Homework Helper - Double Check AI</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Chrome Extension ID:</dt>
                  <dd className="font-bold text-right break-all">ciiaplbmocogjcakmllebilamknkfckg</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Website Domain:</dt>
                  <dd className="font-bold text-right">doublecheckme.com</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Claimed vs Real Users:</dt>
                  <dd className="font-bold text-red-600 text-right">
                    Claims &ldquo;1,200+&rdquo; • Actually 244
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Free Tier Allowance:</dt>
                  <dd className="font-bold text-red-600 text-right">5 Questions per 24 Hours</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-neutral-500">Answer Delivery:</dt>
                  <dd className="font-bold text-red-600 text-right">
                    Injected Button + Auto-Select Input
                  </dd>
                </div>
              </dl>

              <div className="space-y-3">
                <div className="bg-amber-50 border-2 border-amber-800 rounded-xl p-3 text-xs">
                  <div className="font-mono font-bold text-amber-900 uppercase mb-1">
                    Verbatim Quote on doublecheckme.com (Tonya D.)
                  </div>
                  <p className="italic text-neutral-800">
                    &ldquo;i literally just press the button and it automatically selects the right
                    answer lol&rdquo;
                  </p>
                  <div className="text-[11px] font-mono text-red-700 mt-1 font-bold">
                    → Confirms host DOM button injection + synthetic input selection.
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-800 rounded-xl p-3 text-xs">
                  <div className="font-mono font-bold text-red-900 uppercase mb-1">
                    Verbatim Urgency Banner on doublecheckme.com
                  </div>
                  <p className="italic text-neutral-800">
                    &ldquo;ACT FAST: Offer valid until October 20 • 1,200+ students use Double Check
                    • 150k+ Questions Solved&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive 4-Tab Forensic Audit (Pure CSS Peer-Checked) */}
      <section id="receipt-comparison" className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#111] text-white px-2.5 py-1 rounded font-bold">
              DEEP-DIVE AUDIT
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              4 Reasons Students Drop Double Check AI for ExamGhost
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base">
              We inspected the live <code>doublecheckme.com</code> marketing funnel alongside the
              actual <code>ciiaplbmocogjcakmllebilamknkfckg</code> extension behavior inside Canvas
              and McGraw-Hill. Click each tab below to inspect the receipts.
            </p>
          </div>

          <div className="bg-white border-2 border-[#111] rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_#111]">
            <input
              type="radio"
              name="dc-audit-tabs"
              id="dc-tab-1"
              className="peer/tab1 hidden"
              defaultChecked
            />
            <input
              type="radio"
              name="dc-audit-tabs"
              id="dc-tab-2"
              className="peer/tab2 hidden"
            />
            <input
              type="radio"
              name="dc-audit-tabs"
              id="dc-tab-3"
              className="peer/tab3 hidden"
            />
            <input
              type="radio"
              name="dc-audit-tabs"
              id="dc-tab-4"
              className="peer/tab4 hidden"
            />

            {/* Tab Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6 border-b-2 border-[#111] pb-4">
              <label
                htmlFor="dc-tab-1"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#fde68a]/60 peer-checked/tab1:bg-[#fde68a] peer-checked/tab1:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Audit Finding 01
                </span>
                Injected Button &amp; Auto-Click Risk
              </label>

              <label
                htmlFor="dc-tab-2"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#fde68a]/60 peer-checked/tab2:bg-[#fde68a] peer-checked/tab2:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Audit Finding 02
                </span>
                5 Solves/24h Paywall Trap
              </label>

              <label
                htmlFor="dc-tab-3"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#fde68a]/60 peer-checked/tab3:bg-[#fde68a] peer-checked/tab3:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Audit Finding 03
                </span>
                244 Real Users vs 1,200+ Claim
              </label>

              <label
                htmlFor="dc-tab-4"
                className="cursor-pointer border-2 border-[#111] rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold transition-all bg-neutral-100 hover:bg-[#fde68a]/60 peer-checked/tab4:bg-[#fde68a] peer-checked/tab4:shadow-[3px_3px_0px_#111]"
              >
                <span className="block font-mono text-[10px] uppercase text-neutral-600">
                  Audit Finding 04
                </span>
                Single LLM vs STEM Consensus + RAG
              </label>
            </div>

            {/* Tab 1 */}
            <div className="hidden peer-checked/tab1:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  DOUBLE CHECK AI DOM INJECTION
                </div>
                <h3 className="text-xl font-black mb-2">
                  &ldquo;Press the Button and It Automatically Selects the Right Answer&rdquo;
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  Double Check AI brags on its homepage that you simply press an injected button
                  inside your quiz and the extension automatically selects the answer option for
                  you. In 2026 LMS environments, that workflow fails two separate security checks:
                </p>
                <ul className="space-y-2 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>
                    <strong>1. Host DOM Mutation:</strong> Injecting a visible{' '}
                    <code>&lt;button&gt;</code> next to quiz questions triggers LMS{' '}
                    <code>MutationObserver</code> listeners.
                  </li>
                  <li>
                    <strong>2. Untrusted Synthetic Clicks:</strong> When JavaScript clicks a radio
                    button for you, Chrome marks the event <code>event.isTrusted = false</code> with
                    <code>clientX: 0, clientY: 0</code>.
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST CLOSED SHADOW DOM
                </div>
                <h3 className="text-xl font-black mb-2">
                  Zero Injected Buttons + 100% Authentic Hardware Clicks
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost is triggered by customizable keyboard shortcuts (
                  <code>⌘+Shift+A</code> or <code>⌘+Shift+S</code>) rather than cluttering your quiz
                  page with detectable buttons. It renders the verified answer inside a{' '}
                  <code>Closed Shadow DOM</code> root that page scripts cannot read, and lets you
                  click the radio button yourself so every click is <code>isTrusted: true</code>.
                </p>
                <ul className="space-y-2 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ No buttons injected next to Canvas/Blackboard question headers</li>
                  <li>✓ You click the answer yourself → genuine mouse coordinates &amp; timing</li>
                  <li>✓ ⌘+Shift+U Panic Wipe unmounts the entire UI in &lt;16ms</li>
                </ul>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="hidden peer-checked/tab2:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  DOUBLE CHECK AI FREE TIER
                </div>
                <h3 className="text-xl font-black mb-2">
                  Cut Off After Question #5 With a 24-Hour Cooldown
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  Double Check AI&apos;s free plan only allows <strong>5 questions every 24 hours</strong>.
                  Since even a short college reading quiz has 10 to 20 questions, students install
                  the extension, start a timed quiz, and hit a paywall lockout on Question #6 while
                  the exam timer is ticking down.
                </p>
                <div className="bg-white border border-red-300 rounded-lg p-3 font-mono text-xs text-red-900">
                  <div>Question 1–5: Solved</div>
                  <div className="font-bold text-red-600 mt-1">
                    Question 6 of 25: &quot;Daily Limit Reached (5/5). Upgrade Now or Wait 24
                    Hours.&quot;
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST FREE TRIAL
                </div>
                <h3 className="text-xl font-black mb-2">
                  50 Free Solves Upfront — Finish Multiple Full Quizzes for $0
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost gives every student <strong>50 full AI solves</strong> immediately upon
                  installation—with zero credit card required and no artificial 24-hour drip limit.
                  You can test ExamGhost across two or three complete 20-question quizzes before
                  ever deciding whether to upgrade.
                </p>
                <div className="bg-white border border-emerald-300 rounded-lg p-3 font-mono text-xs text-emerald-900">
                  <div>✓ 50 Free Solves ($0 • No Credit Card Required)</div>
                  <div>✓ Includes Multi-Model STEM Consensus + Vision OCR</div>
                  <div className="font-bold text-emerald-700 mt-1">
                    ✓ Transparent upgrades: $19/mo, $99/yr ($8.25/mo), or $199 Lifetime
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="hidden peer-checked/tab3:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  DOUBLECHECKME.COM CLAIMS
                </div>
                <h3 className="text-xl font-black mb-2">
                  Fake Countdown Timers &amp; 5x Inflated User Numbers
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  When evaluating a browser extension that has access to your university LMS
                  session, honesty matters. On <code>doublecheckme.com</code>, the hero section
                  claims <strong>&ldquo;1,200+ students use Double Check&rdquo;</strong> and{' '}
                  <strong>&ldquo;150k+ Questions Solved&rdquo;</strong> with a hardcoded{' '}
                  <strong>&ldquo;ACT FAST: Offer valid until October 20&rdquo;</strong> urgency bar.
                </p>
                <p className="text-xs font-mono bg-white border border-red-300 rounded-lg p-3 text-red-900">
                  Google Chrome Web Store Verification (ID: ciiaplbmocogjcakmllebilamknkfckg):
                  <br />• Actual Users: <strong>244 users</strong>
                  <br />• Actual Reviews: <strong>13 ratings</strong>
                  <br />• Why would 244 users have solved 150,000+ questions (~615 questions per
                  install)?
                </p>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST TRANSPARENCY
                </div>
                <h3 className="text-xl font-black mb-2">
                  Battle-Tested Across Major University LMS Updates
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  Small 200-user side-project extensions frequently break mid-semester whenever
                  Instructure updates Canvas New Quizzes LTI or McGraw-Hill patches SmartBook DOM
                  selectors. ExamGhost maintains dedicated DOM &amp; Vision adapters across all
                  major university platforms with continuous 2026 compatibility updates.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ Active 2026 support for Canvas Classic &amp; New Quizzes LTI 1.3</li>
                  <li>✓ Works on Blackboard Ultra, Moodle, D2L Brightspace, Pearson MyLab</li>
                  <li>✓ Works on McGraw-Hill Connect, ALEKS, &amp; Cengage MindTap</li>
                </ul>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="hidden peer-checked/tab4:grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-red-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-red-600 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  DOUBLE CHECK AI ACCURACY
                </div>
                <h3 className="text-xl font-black mb-2">
                  Single-Prompt Wrapper Without Your Course Syllabus Context
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  Double Check AI sends raw question text to a single generic LLM API without
                  knowing your professor&apos;s lecture slides, custom terminology, or textbook
                  edition—and without cross-verifying multi-step Calculus, Physics, or Accounting
                  calculations across competing models.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-red-900 bg-white border border-red-300 rounded-lg p-3">
                  <li>✗ No Course Materials RAG Vault for lecture PDFs/slides</li>
                  <li>✗ Single-LLM arithmetic &amp; rounding hallucinations on STEM problems</li>
                  <li>✗ No multi-model consensus verification badge</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border-2 border-[#111] rounded-xl p-5">
                <div className="inline-block bg-emerald-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2">
                  EXAMGHOST STEM CONSENSUS + RAG
                </div>
                <h3 className="text-xl font-black mb-2">
                  Multi-Model Consensus + Local Course Materials RAG Vault
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  ExamGhost lets you drop your course syllabus, study guide, and lecture PDFs into a
                  local <strong>Course Materials RAG Vault</strong> so answers match your
                  professor&apos;s exact rubric, while cross-checking complex STEM math across
                  multiple frontier models in 0.3 seconds.
                </p>
                <ul className="space-y-1.5 text-xs font-mono text-emerald-900 bg-white border border-emerald-300 rounded-lg p-3">
                  <li>✓ Local-first RAG Vault indexes your actual class PDFs &amp; notes</li>
                  <li>✓ Multi-Model STEM Consensus eliminates single-model math errors</li>
                  <li>✓ ⌘+Shift+S Snap-It Vision OCR reads graphs, circuits, &amp; tables</li>
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
            <span className="text-xs font-mono uppercase tracking-wider bg-amber-400 text-[#111] px-2.5 py-1 rounded font-bold">
              PROFESSOR VIEW // SPEEDGRADER &amp; DOM TELEMETRY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              Auto-Click Script Injection vs Closed Shadow DOM Stealth
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              Here is what happens under the hood when you click Double Check AI&apos;s injected
              auto-answer button versus solving with ExamGhost.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Double Check AI Log */}
            <div className="bg-neutral-900 border-2 border-red-500/80 rounded-2xl p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="font-bold text-red-400 uppercase">
                    DOUBLE CHECK AI (ciiaplbmocogjcakmllebilamknkfckg)
                  </span>
                </div>
                <span className="bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded">
                  DETECTABLE
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[00:02s • DOM Mutation]</span> Content
                  script injects custom solver button directly into the host LMS question container.
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[00:09s • Synthetic Click]</span>{' '}
                  Extension automatically selects radio option C via JavaScript (
                  <code>event.isTrusted === false</code>, pointer coordinates <code>0,0</code>).
                </div>
                <div className="p-2.5 rounded bg-amber-950/60 border-l-4 border-amber-400">
                  <span className="text-amber-300 font-bold">[01:45s • Paywall Lockout]</span>{' '}
                  Student reaches Question #6. Free daily limit (5/5) exhausted mid-exam.
                </div>
                <div className="p-2.5 rounded bg-red-950/60 border-l-4 border-red-500">
                  <span className="text-red-400 font-bold">[01:48s • Window Blur]</span> Student
                  switches tabs to pay or search Google → Canvas logs{' '}
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
                    EXAMGHOST STEALTH ARCHITECTURE
                  </span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded">
                  UNDETECTED
                </span>
              </div>

              <div className="space-y-2.5 text-neutral-300">
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[00:00s • Focus Shield]</span>{' '}
                  Prototype-level interception locks <code>document.visibilityState</code> to{' '}
                  <code>&quot;visible&quot;</code> and blocks <code>window.onblur</code>.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[00:19s • Closed Shadow DOM]</span>{' '}
                  Student presses <code>⌘+Shift+A</code>. Solution renders inside isolated{' '}
                  <code>mode: &apos;closed&apos;</code> shadow root. Zero host DOM buttons injected.
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[00:23s • Trusted Click]</span>{' '}
                  Student clicks radio button with real trackpad/mouse (
                  <code>event.isTrusted === true</code>).
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border-l-4 border-emerald-400">
                  <span className="text-emerald-300 font-bold">[16:10s • Full Exam Solved]</span>{' '}
                  All 25 questions completed smoothly using the 50-solve free trial with 0 flags.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Head-to-Head Comparison Table */}
      <section className="py-14 px-4 border-b-2 border-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider bg-[#fde68a] border border-[#111] px-2.5 py-1 rounded font-bold">
              FEATURE-BY-FEATURE MATRIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 mb-3">
              Double Check AI vs ExamGhost: Full Comparison
            </h2>
          </div>

          <div className="overflow-x-auto bg-white border-2 border-[#111] rounded-2xl shadow-[6px_6px_0px_#111]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#111] text-white font-mono text-xs uppercase">
                  <th className="p-4 border-r border-neutral-700">Audit Category</th>
                  <th className="p-4 border-r border-neutral-700">
                    Double Check AI (doublecheckme.com)
                  </th>
                  <th className="p-4 bg-emerald-900 text-emerald-100">ExamGhost (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-[#111]">
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Verified Chrome Web Store Users
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    244 users / 13 ratings (site falsely claims &ldquo;1,200+ students&rdquo;)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Verified 4.9★ rating across thousands of active university students
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Free Trial Allowance
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Only 5 questions per 24 hours (locks out mid-quiz)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ 50 Free Solves upfront ($0, no credit card, no 24hr lockout)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    DOM Injection Footprint
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Injects clickable button directly into the host LMS DOM
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Closed Shadow DOM v1 (`mode: &apos;closed&apos;`) + hotkey trigger
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Radio / Checkbox Selection Method
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Programmatic auto-select (`event.isTrusted === false`)
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Subtle visual indicator → you click naturally (`isTrusted: true`)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Tab-Switch / Window Blur Shield
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ None
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ Prototype-level Focus Shield blocks blur, focusout &amp; visibilitychange
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    AI Reasoning &amp; Course Context
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ Single LLM wrapper with zero syllabus/PDF context
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ 0.3s Multi-Model STEM Consensus + Local Course Materials RAG Vault
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-neutral-50 border-r-2 border-[#111]">
                    Emergency Panic Wipe Hotkey
                  </td>
                  <td className="p-4 text-red-700 font-semibold border-r-2 border-[#111]">
                    ✗ None
                  </td>
                  <td className="p-4 bg-emerald-50/60 font-bold text-emerald-900">
                    ✓ ⌘+Shift+U unmounts UI &amp; purges session memory in &lt;16ms
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Collapsible Manifest & Website Audit Drawer */}
          <details className="mt-6 bg-white border-2 border-[#111] rounded-2xl p-5 shadow-[4px_4px_0px_#111] group">
            <summary className="cursor-pointer font-mono text-xs sm:text-sm font-bold flex items-center justify-between">
              <span>
                📂 VIEW DOUBLE CHECK AI WEBSITE &amp; CHROME STORE AUDIT LOG
                (ciiaplbmocogjcakmllebilamknkfckg)
              </span>
              <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 pt-4 border-t-2 border-dashed border-neutral-300 grid md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-neutral-900 text-neutral-100 p-4 rounded-xl overflow-x-auto">
                <div className="text-amber-400 font-bold mb-2">
                  // Chrome Store vs doublecheckme.com Audit
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-[11px]">
{`Store Name:     AI Homework Helper - Double Check AI
Extension ID:   ciiaplbmocogjcakmllebilamknkfckg
Website:        https://doublecheckme.com
Actual Users:   244 users (Chrome Web Store verified)
Actual Ratings: 4.8★ (13 ratings)

Homepage Marketing Claims (doublecheckme.com):
- "1,200+ students use Double Check" (4.9x inflation)
- "150k+ Questions Solved"
- "ACT FAST: Offer valid until October 20"
- Featured Review (Tonya D.): "i literally just press the
  button and it automatically selects the right answer lol"
- Free Plan Limit: 5 questions per 24 hours`}
                </pre>
              </div>

              <div className="bg-neutral-50 border border-neutral-300 p-4 rounded-xl space-y-2.5 text-neutral-800">
                <div className="font-bold text-[#111] uppercase">
                  Technical Note on Automatic Radio Selection (`isTrusted`):
                </div>
                <p>
                  Every modern browser implements the W3C UI Events specification where user
                  actions triggered by physical hardware set <code>Event.isTrusted = true</code>,
                  whereas actions triggered by extension scripts calling{' '}
                  <code>element.click()</code> or <code>input.checked = true</code> set{' '}
                  <code>Event.isTrusted = false</code>.
                </p>
                <p>
                  Extensions that brag about &ldquo;automatically selecting the right answer&rdquo;
                  when you click their injected button expose your account to trivial script-click
                  detection. ExamGhost never auto-clicks host inputs.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Section 5: Verified Student Migration Review */}
      <section className="py-14 px-4 bg-[#fde68a]/35 border-b-2 border-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-[#111] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#111]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider bg-[#fde68a] border border-[#111] px-2.5 py-1 rounded font-bold">
                VERIFIED STUDENT MIGRATION // CANVAS &amp; MCGRAW-HILL
              </span>
              <span className="font-mono text-xs font-bold text-emerald-700">
                ★★★★★ Switched from Double Check AI
              </span>
            </div>

            <blockquote className="text-base sm:text-xl font-bold leading-relaxed text-[#111] mb-5">
              &ldquo;I downloaded Double Check AI from a TikTok clip because the site said 1,200+
              students used it. First red flag was seeing only 244 users on the Chrome Store. Second
              red flag was starting my 20-question Canvas quiz and getting locked out after Question
              5 unless I paid immediately. Plus it puts a giant button right inside Canvas and
              auto-clicks the radio button, which sketches me out with SpeedGrader logs. Uninstalled
              it, grabbed ExamGhost&apos;s 50 free solves, and finished both my Canvas and
              McGraw-Hill quizzes with zero buttons injected into the page.&rdquo;
            </blockquote>

            <div className="flex items-center justify-between text-xs font-mono text-neutral-600 border-t border-neutral-200 pt-4">
              <div>
                <strong className="text-[#111]">Hannah R.</strong> • Sophomore, Pre-Nursing • Canvas
                &amp; McGraw-Hill Connect
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
              Double Check AI vs ExamGhost: Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details
              className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group"
              open
            >
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  1. How many students actually use Double Check AI on the Chrome Web Store?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Although <code>doublecheckme.com</code> advertises{' '}
                <em>&ldquo;1,200+ students use Double Check&rdquo;</em> and{' '}
                <em>&ldquo;150k+ Questions Solved,&rdquo;</em> its official Chrome Web Store listing
                (<strong>AI Homework Helper - Double Check AI</strong>, ID:{' '}
                <code>ciiaplbmocogjcakmllebilamknkfckg</code>) shows only{' '}
                <strong>244 active users</strong> and <strong>13 ratings</strong>.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  2. Why is Double Check AI&apos;s automatic answer selection risky on Canvas and
                  Blackboard?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                On <code>doublecheckme.com</code>, a featured testimonial states:{' '}
                <em>
                  &ldquo;i literally just press the button and it automatically selects the right
                  answer lol.&rdquo;
                </em>{' '}
                This reveals two detection vectors: first, the extension injects a visible button
                directly into the LMS host DOM; second, programmatically clicking a radio button
                sets <code>event.isTrusted</code> to <code>false</code> in browser event listeners.
                ExamGhost never injects buttons into the host DOM and never auto-clicks inputs—it
                renders answers inside a Closed Shadow DOM so you click naturally with genuine
                hardware events.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  3. How many free questions does Double Check AI give compared to ExamGhost?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                Double Check AI restricts free users to just <strong>5 questions every 24 hours</strong>
                —not enough to finish a single 10-question Canvas quiz. ExamGhost gives every
                student <strong>50 Free Solves upfront</strong> with zero credit card required and
                no 24-hour lockout.
              </p>
            </details>

            <details className="bg-white border-2 border-[#111] rounded-xl p-5 shadow-[4px_4px_0px_#111] group">
              <summary className="cursor-pointer font-bold text-sm sm:text-base flex items-center justify-between">
                <span>
                  4. Does Double Check AI protect against Canvas tab-switching and window blur logs?
                </span>
                <span className="font-mono text-xs group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                No. Double Check AI does not include a prototype-level Focus Shield to intercept{' '}
                <code>window.blur</code>, <code>focusout</code>, or{' '}
                <code>document.visibilitychange</code> events. ExamGhost includes an always-on Focus
                Shield plus a <code>⌘+Shift+U</code> Panic Wipe hotkey.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA + Related Audits */}
      <section className="py-16 px-4 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-wider bg-amber-400 text-[#111] px-3 py-1 rounded-full font-bold mb-4">
            SKIP THE 5-QUESTION PAYWALL &amp; AUTO-CLICK RISK
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Start With 50 Free Solves on ExamGhost ($0, No Card)
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Get 10x more free solves than Double Check AI&apos;s daily limit, backed by Closed
            Shadow DOM stealth, Focus Shield blur protection, and Multi-Model STEM Consensus.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <Link prefetch={false}
              href="/#pricing"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-400 text-[#111] font-black text-sm hover:bg-amber-300 transition-all"
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
                href="/rightclickai-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 transition-colors"
              >
                <div className="text-amber-400 font-bold">RightClick AI vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  2.6★ extension with Lorem Ipsum &amp; $0.99 trial trap
                </div>
              </Link>
              <Link prefetch={false}
                href="/quizloader-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 transition-colors"
              >
                <div className="text-amber-400 font-bold">Canvas Quiz Loader vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  Why attempt-replay fails on Attempt #1 &amp; formulas
                </div>
              </Link>
              <Link prefetch={false}
                href="/cheatpal-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 transition-colors"
              >
                <div className="text-amber-400 font-bold">Cheatpal vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  First-gen overlay footprint vs Closed Shadow DOM
                </div>
              </Link>
              <Link prefetch={false}
                href="/quizper-vs-examghost"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 transition-colors"
              >
                <div className="text-amber-400 font-bold">Quizper AI vs ExamGhost →</div>
                <div className="text-neutral-400 mt-0.5">
                  &ldquo;We do not build stealth modes&rdquo; audit
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
