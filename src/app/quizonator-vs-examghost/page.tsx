import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    EyeOff,
    AlertTriangle,
    CheckCircle2,
    ChevronDown,
    ArrowRight,
    FileWarning,
    Star,
    Layers,
    Globe,
    CreditCard,
    Cpu,
    Scan,
    Terminal,
    Code2,
    Lock,
    Sparkles
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { QuizonatorIframeSnipDemo } from '@/components/TopComparisonDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';

export const metadata: Metadata = {
    title: {
        absolute: "Quizonator vs ExamGhost (2026) — LTI 1.3 Iframe & Canvas New Quizzes Test",
    },
    description: "Compare Quizonator (quizonator.com, 3.5★ Chrome Store) with ExamGhost. See why Quizonator breaks inside Canvas New Quizzes LTI 1.3 iframes and ALEKS HTML5 <canvas> while ExamGhost's Alt+S Hybrid Vision + DOM Snip solves in 0.8s.",
    alternates: {
        canonical: "https://examghost.com/quizonator-vs-examghost",
    },
    openGraph: {
        title: "Quizonator vs ExamGhost (2026) — Cross-Origin LTI 1.3 Iframe & Canvas New Quizzes Stress Test",
        description: "Quizonator ($14.99/mo for 300 answers) only supports Canvas Classic and fails inside cross-origin iframes. ExamGhost solves Canvas New Quizzes, ALEKS <canvas>, and Cengage Shadow DOM in 0.8s.",
        url: "https://examghost.com/quizonator-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Quizonator vs ExamGhost (2026) — Cross-Origin LTI 1.3 Iframe & Canvas New Quizzes Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Quizonator vs ExamGhost (2026) — Canvas New Quizzes & LTI Iframe Audit",
        description: "Compare Quizonator (3.5★ Chrome Store) with ExamGhost. Start with 5 Free Solves / Day + our 3-Model Study Hub (Claude 3.7, ChatGPT, DeepSeek-R1).",
        images: ["/og-image.jpg"],
    },
};

export default function QuizonatorComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-18",
                "dateModified": "2026-10-27",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/quizonator-vs-examghost#webpage",
                "url": "https://examghost.com/quizonator-vs-examghost",
                "name": "Quizonator vs ExamGhost (2026 Review) | Cross-Origin LTI 1.3 Iframe & Canvas New Quizzes Stress Test",
                "description": "Technical evaluation comparing Quizonator v2.0.5 (quizonator.com, Chrome ID dhphdklknbffcgahfpiipdmafoncnndi, 3.5★) and ExamGhost across Canvas New Quizzes LTI 1.3 cross-origin iframes, ALEKS HTML5 canvas graphs, Cengage Shadow DOM, and metered answer caps.",
                "breadcrumb": { "@id": "https://examghost.com/quizonator-vs-examghost#breadcrumb" },
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
                            "offerCount": "4"
                        }
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "Quizonator",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, Android, iOS",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "28.99",
                            "priceCurrency": "USD",
                            "offerCount": "3"
                        }
                    }
                ]
            },
            {
                "@type": "TechArticle",
                "@id": "https://examghost.com/quizonator-vs-examghost#article",
                "headline": "Quizonator vs ExamGhost (2026): The Cross-Origin LTI 1.3 Iframe & Canvas New Quizzes Stress Test",
                "datePublished": "2026-02-18",
                "dateModified": "2026-10-27",
                "author": {
                    "@type": "Organization",
                    "name": "ExamGhost Security & EdTech Lab",
                    "url": "https://examghost.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com"
                },
                "description": "Engineering breakdown of why top-frame DOM scrapers like Quizonator fail inside Canvas New Quizzes LTI 1.3 iframes, McGraw-Hill ALEKS HTML5 canvas elements, and Cengage MindTap Shadow DOM."
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/quizonator-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Quizonator vs ExamGhost", "item": "https://examghost.com/quizonator-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/quizonator-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why does Quizonator break inside Canvas New Quizzes and LTI 1.3 iframes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Quizonator's official compatibility documentation explicitly restricts support to 'Canvas Classic Quizzes' and warns: 'We don't guarantee operation in Teams or embedded views (iframe, webview).' Because Canvas New Quizzes, McGraw-Hill Connect, and ALEKS run inside cross-origin LTI 1.3 iframes, basic top-level DOM scrapers hit browser Same-Origin Policy barriers. ExamGhost pairs subframe DOM hooks with Alt+S Hybrid Vision + DOM Snip to solve inside any frame in 0.8s."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does Quizonator have a 3.5★ rating on the Chrome Web Store?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While Quizonator highlights its mobile app reviews, its verified Chrome Web Store extension ('Quizonator - quizy i wyjaśnienia AI', ID dhphdklknbffcgahfpiipdmafoncnndi, v2.0.5) holds a 3.5★ rating across 49 reviews. Students report non-responsive parsing inside iframe-based university exams, visible DOM highlight injections, and rapidly depleted 300-answer monthly Pro caps."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Quizonator work on McGraw-Hill ALEKS, Cengage MindTap, or Blackboard Ultra?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Quizonator only supports 9 platforms, mostly European school portals and classroom trivia games (Szkoła w Chmurze, Testportal, Blooket, Socrative, Wayground/Quizizz, Google Forms, Microsoft Forms, Moodle, and Canvas Classic). ExamGhost supports 20+ university portals including Canvas Classic & New Quizzes, Blackboard Ultra, Moodle, D2L Brightspace, McGraw-Hill Connect, ALEKS, Pearson MyLab, and Cengage MindTap."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Quizonator pricing compare to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Quizonator gives 20 free answers per month, then charges $14.99/month for PRO (capped at 300 answers/month) or $28.99/month for PRO+ (capped at 1,200 answers/month). ExamGhost gives you 5 Free Solves / Day (auto-refills every 24 hours, $0 no card required), plus uncapped 2-in-1 plans at $19/mo Monthly, $99/yr Academic Year Pass ($8.25/mo), or $199 Lifetime—which include both Unlimited Stealth Extension Solves and our Claude 3.7 Sonnet + ChatGPT + DeepSeek-R1 Study & Homework AI Workspace."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#f4f6fb] text-ink selection:bg-indigo-200 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* =====================================================================
                    UNIQUE ARCHETYPE HERO: TECHNICAL ARCHITECTURE BLUEPRINT
                    (Dark-Mode CAD Blueprint Header Exposing Quizonator's Iframe Blind Spot)
                ===================================================================== */}
                <header className="bg-[#0b1120] text-white pt-28 sm:pt-34 pb-16 sm:pb-22 border-b border-indigo-500/30 relative overflow-hidden">
                    {/* Subtle Blueprint Grid Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.07] pointer-events-none"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)',
                            backgroundSize: '36px 36px',
                        }}
                    />

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        {/* Breadcrumb + Blueprint Telemetry Strip */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-white/10 text-xs">
                            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400">
                                <Link prefetch={false} href="/" className="hover:text-white transition-colors">Home</Link>
                                <span>/</span>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-white transition-colors">Compare Extensions</Link>
                                <span>/</span>
                                <span className="text-indigo-300 font-semibold">Quizonator vs ExamGhost</span>
                            </nav>
                            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                                <span className="px-2.5 py-1 rounded bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">
                                    STRESS TEST // LTI 1.3 IFRAME &amp; &lt;CANVAS&gt;
                                </span>
                                <span className="px-2.5 py-1 rounded bg-rose-500/20 border border-rose-400/30 text-rose-200">
                                    quizonator.com v2.0.5 · 3.5★ (49 Reviews)
                                </span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-10 items-center">
                            {/* Left 7 Columns: Technical Verdict */}
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-200 text-xs font-mono font-bold mb-5">
                                    <Scan className="w-3.5 h-3.5 text-cyan-300" />
                                    <span>Alt+S Hybrid Vision + Subframe DOM Snip (0.8s)</span>
                                </div>

                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.06] mb-5">
                                    Quizonator&apos;s DOM scraper breaks inside <span className="text-cyan-300">Canvas New Quizzes</span> &amp; cross-origin LTI iframes.
                                </h1>

                                <p className="aeo-summary text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-5">
                                    Built in Poland primarily for European school portals (<em>Szkoła w Chmurze</em>, <em>Testportal</em>, <em>Blooket</em>), <strong>Quizonator v2.0.5 ($14.99/mo, 3.5★ on Chrome Store)</strong> relies on a basic top-level DOM scraper. Its own documentation admits it only supports legacy <strong>Canvas Classic Quizzes</strong> and warns: <em className="text-rose-200">&ldquo;We don&apos;t guarantee operation in Teams or embedded views (iframe, webview).&rdquo;</em>
                                </p>

                                <p className="text-sm sm:text-base text-indigo-200 font-medium leading-relaxed mb-7">
                                    When your university exam runs inside a <strong>Canvas New Quizzes LTI 1.3 cross-origin iframe</strong>, a <strong>McGraw-Hill ALEKS HTML5 <code className="text-cyan-300">&lt;canvas&gt;</code> graph</strong>, or a <strong>Cengage MindTap Shadow DOM</strong>, ExamGhost&apos;s <strong>`Alt+S` Hybrid Vision + DOM Snip</strong> and `Double-Click` subframe engine extract and solve the question in <strong>0.8 seconds</strong>—starting with <strong>5 Free Solves / Day ($0, no card needed)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3 mb-7">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="px-7 py-4 rounded-full text-sm font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lift inline-flex items-center gap-2.5 transition-colors"
                                    >
                                        <FaChrome className="w-4 h-4 text-slate-950" aria-hidden="true" />
                                        <span>Start 5 Free Solves / Day · $0 No Card</span>
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 inline-flex items-center gap-1.5 transition-colors"
                                    >
                                        <span>Test Live Iframe Demo</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="https://discord.gg/aCcsyKYJq4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-4 rounded-full text-sm font-semibold bg-[#5865F2] hover:bg-[#4752c4] text-white inline-flex items-center gap-2 transition-colors"
                                    >
                                        <FaDiscord className="w-4 h-4" aria-hidden="true" />
                                        <span>Discord</span>
                                    </a>
                                </div>

                                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/10 font-mono text-xs">
                                    <div>
                                        <span className="text-slate-400 block text-[10px] uppercase">Free Daily Quota</span>
                                        <span className="text-emerald-300 font-bold">5 Free Solves / Day</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400 block text-[10px] uppercase">LTI 1.3 &amp; &lt;canvas&gt;</span>
                                        <span className="text-cyan-300 font-bold">Alt+S 0.8s Hybrid Snip</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400 block text-[10px] uppercase">2-in-1 Study Hub</span>
                                        <span className="text-indigo-200 font-bold">Claude + GPT + DeepSeek</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right 5 Columns: Live DOM Tree & Iframe Security Boundary Blueprint */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#11192e] border border-indigo-400/30 p-5 sm:p-6 shadow-2xl font-mono text-xs">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                                        <span className="text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-2">
                                            <Code2 className="w-4 h-4" />
                                            DOM / Iframe Boundary Inspector
                                        </span>
                                        <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                                            LTI 1.3 PORTAL
                                        </span>
                                    </div>

                                    {/* Tree Diagram */}
                                    <div className="space-y-3">
                                        <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
                                            <div className="text-slate-400 text-[11px]">
                                                &lt;html&gt; <span className="text-emerald-400">// canvas.instructure.com (Host Top Frame)</span>
                                            </div>
                                            <div className="pl-3 mt-2 border-l-2 border-rose-500/50 space-y-2">
                                                <div className="text-rose-200 font-bold">
                                                    &lt;iframe src=&quot;https://lti-quiz.instructure.com/...&quot;&gt;
                                                </div>
                                                <div className="p-2.5 rounded-lg bg-rose-950/70 border border-rose-500/40 text-[11px]">
                                                    <div className="text-rose-300 font-bold mb-0.5">
                                                        ✗ Quizonator v2.0.5 Top-Frame Scraper:
                                                    </div>
                                                    <p className="text-rose-100 font-sans text-xs">
                                                        Throws <code className="font-mono text-rose-300">DOMException: Cross-Origin Frame</code>. Quizonator states: <em>&ldquo;We don&apos;t guarantee operation in embedded views (iframe, webview).&rdquo;</em>
                                                    </p>
                                                </div>

                                                <div className="pl-3 border-l-2 border-cyan-400/60 space-y-2 pt-1">
                                                    <div className="text-cyan-200 font-bold">
                                                        #document (LTI Subframe) → &lt;canvas id=&quot;aleks-plot&quot;&gt;
                                                    </div>
                                                    <div className="p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-[11px]">
                                                        <div className="text-emerald-300 font-bold mb-0.5">
                                                            ✓ ExamGhost Subframe + `Alt+S` Hybrid Vision:
                                                        </div>
                                                        <p className="text-emerald-100 font-sans text-xs">
                                                            Hooks directly into cross-origin LTI frames &amp; captures HTML5 <code className="font-mono text-emerald-300">&lt;canvas&gt;</code> graphs + LaTeX DOM in <strong>0.8s</strong> inside a Closed Shadow Root.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Verbatim Quizonator Quote Strip */}
                                        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-100 font-sans text-xs">
                                            <div className="font-mono text-[10px] font-bold uppercase text-amber-300 mb-1">
                                                Verbatim from quizonator.com/en:
                                            </div>
                                            <p className="italic">
                                                &ldquo;Compatible Platforms: Canvas Classic Quizzes... We don&apos;t guarantee operation in Teams or embedded views (iframe, webview).&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* =====================================================================
                    INTERACTIVE MOTION DEMO: QUIZONATOR IFRAME SNIP DEMO
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20" aria-label="Interactive Quizonator LTI Iframe Stress Test">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <span className="px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                            Interactive LTI 1.3 Iframe Stress Test
                        </span>
                        <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-ink mb-3">
                            Test Quizonator&apos;s DOM Scraper vs ExamGhost&apos;s `Alt+S` Hybrid Vision Snip
                        </h2>
                        <p className="text-xs sm:text-base text-ink-secondary">
                            Watch what happens when an exam question is rendered inside a cross-origin Canvas New Quizzes LTI 1.3 iframe with an embedded HTML5 graph.
                        </p>
                    </div>

                    <QuizonatorIframeSnipDemo />
                </section>

                {/* =====================================================================
                    BESPOKE 3-COLUMN ARCHITECTURAL BREAKDOWN:
                    "3 Modern LMS Roadblocks That Break Quizonator (And How ExamGhost's
                     Subframe + Vision Pipeline Solves Them)"
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="3 Modern LMS Roadblocks That Break Quizonator">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                            Architectural Failure Analysis
                        </span>
                        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight leading-[1.1] mb-4">
                            3 Modern LMS Roadblocks That Break Quizonator (And How ExamGhost&apos;s Subframe + Vision Pipeline Solves Them)
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            U.S. universities no longer serve plain HTML multiple-choice forms. Here is why Quizonator&apos;s v2.0.5 scraper stalls on college midterms—and how ExamGhost engineers around all three barriers.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Roadblock 1: Canvas New Quizzes (LTI 1.3 Cross-Origin Iframes) */}
                        <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-8 shadow-card flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-black/10">
                                    <span className="px-3 py-1 rounded-full bg-indigo-950 text-white font-mono text-xs font-bold">
                                        ROADBLOCK #01
                                    </span>
                                    <Layers className="w-5 h-5 text-indigo-700" />
                                </div>

                                <h3 className="font-display text-xl font-extrabold text-ink mb-2.5">
                                    Canvas New Quizzes (`LTI 1.3 Cross-Origin Iframes`)
                                </h3>

                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    Instructure has migrated most U.S. colleges from legacy Canvas Classic Quizzes (<code className="bg-black/5 px-1 rounded">/courses/*/quizzes/*</code>) to <strong>Canvas New Quizzes</strong>, which loads as an external LTI 1.3 application inside a sandboxed cross-origin <code className="bg-black/5 px-1 rounded">&lt;iframe&gt;</code>.
                                </p>

                                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs mb-4">
                                    <div className="font-mono font-bold text-rose-900 uppercase text-[10px] mb-1">
                                        Why Quizonator Fails Here:
                                    </div>
                                    <p className="text-rose-950 leading-relaxed">
                                        Quizonator only lists <strong>&ldquo;Canvas Classic Quizzes&rdquo;</strong> on its compatibility matrix. Inside a New Quizzes iframe, its top-window selector returns <code className="font-mono">null</code>, leaving you stranded mid-exam.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-emerald-950 text-white text-xs">
                                <div className="font-mono font-bold text-emerald-300 uppercase text-[10px] mb-1">
                                    ✓ ExamGhost Subframe Pipeline:
                                </div>
                                <p className="text-emerald-100 leading-relaxed">
                                    Injects dedicated subframe listeners across LTI 1.3 origins so you can <strong>Double-Click</strong> or press <code className="text-emerald-300 font-mono">Alt+S</code> inside Canvas Classic <em>and</em> Canvas New Quizzes in 0.3s–0.8s.
                                </p>
                            </div>
                        </div>

                        {/* Roadblock 2: McGraw-Hill ALEKS & Pearson HTML5 <canvas> Graphs */}
                        <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-8 shadow-card flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-black/10">
                                    <span className="px-3 py-1 rounded-full bg-indigo-950 text-white font-mono text-xs font-bold">
                                        ROADBLOCK #02
                                    </span>
                                    <Scan className="w-5 h-5 text-indigo-700" />
                                </div>

                                <h3 className="font-display text-xl font-extrabold text-ink mb-2.5">
                                    McGraw-Hill ALEKS &amp; Pearson (`HTML5 &lt;canvas&gt; Graphs`)
                                </h3>

                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    In Pre-Calc, Calculus, Chemistry, and Microeconomics, portals like <strong>ALEKS, Pearson MyLab, and WebAssign</strong> render coordinate planes, molecular structures, and supply-demand curves as bitmap pixels inside an HTML5 <code className="bg-black/5 px-1 rounded">&lt;canvas&gt;</code> tag—with zero underlying text in the DOM.
                                </p>

                                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs mb-4">
                                    <div className="font-mono font-bold text-rose-900 uppercase text-[10px] mb-1">
                                        Why Quizonator Fails Here:
                                    </div>
                                    <p className="text-rose-950 leading-relaxed">
                                        Quizonator has zero support for ALEKS, McGraw-Hill, or Pearson—and text scrapers only see an empty <code className="font-mono">&lt;canvas width=&quot;500&quot;&gt;&lt;/canvas&gt;</code> node with no numbers or axes.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-emerald-950 text-white text-xs">
                                <div className="font-mono font-bold text-emerald-300 uppercase text-[10px] mb-1">
                                    ✓ ExamGhost `Alt+S` Hybrid Vision + DOM Snip:
                                </div>
                                <p className="text-emerald-100 leading-relaxed">
                                    Press <code className="text-emerald-300 font-mono">Alt+S</code> and drag over any ALEKS graph, circuit diagram, or organic chemistry ring. ExamGhost fuses pixel Vision OCR with surrounding DOM context in <strong>0.8s</strong> without triggering <code className="text-emerald-300 font-mono">window.blur</code>.
                                </p>
                            </div>
                        </div>

                        {/* Roadblock 3: Cengage MindTap Shadow DOM & Synthetic Click Traps */}
                        <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-8 shadow-card flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-black/10">
                                    <span className="px-3 py-1 rounded-full bg-indigo-950 text-white font-mono text-xs font-bold">
                                        ROADBLOCK #03
                                    </span>
                                    <ShieldCheck className="w-5 h-5 text-indigo-700" />
                                </div>

                                <h3 className="font-display text-xl font-extrabold text-ink mb-2.5">
                                    Cengage MindTap Shadow DOM &amp; `isTrusted` Traps
                                </h3>

                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    Portals like <strong>Cengage MindTap, D2L Brightspace, and Blackboard Ultra</strong> wrap questions inside nested Web Component Shadow DOM roots—and monitor <code className="bg-black/5 px-1 rounded">MutationObserver</code> and <code className="bg-black/5 px-1 rounded">event.isTrusted</code> to catch extensions that mutate page HTML.
                                </p>

                                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs mb-4">
                                    <div className="font-mono font-bold text-rose-900 uppercase text-[10px] mb-1">
                                        Why Quizonator Fails Here:
                                    </div>
                                    <p className="text-rose-950 leading-relaxed">
                                        Quizonator&apos;s <em>Default</em> mode injects visible explanation boxes straight into the host quiz HTML, while its <em>Immediate</em> mode dispatches synthetic clicks (<code className="font-mono">isTrusted: false</code>).
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-emerald-950 text-white text-xs">
                                <div className="font-mono font-bold text-emerald-300 uppercase text-[10px] mb-1">
                                    ✓ ExamGhost Closed Shadow Root + Chameleon Modes:
                                </div>
                                <p className="text-emerald-100 leading-relaxed">
                                    Mounts inside <code className="text-emerald-300 font-mono">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</code>. Toggle <code className="text-emerald-300 font-mono">Alt+1</code> Invisible, <code className="text-emerald-300 font-mono">Alt+2</code> Stealth, or <code className="text-emerald-300 font-mono">Alt+3</code> Explain—and wipe everything instantly with <code className="text-emerald-300 font-mono">⌘+Shift+U</code>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================================
                    METERED QUOTA AUDIT ($14.99 FOR 300 / $28.99 FOR 1,200 CAPS)
                    VS EXAMGHOST UNCAPPED 2-IN-1 VALUE
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="Quota Cap and Pricing Audit">
                    <div className="rounded-[36px] bg-gradient-to-br from-[#10172a] via-[#16203a] to-[#0f1f26] text-white p-6 sm:p-10 md:p-12 border border-indigo-400/25 shadow-lift">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-6">
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                    Metered Quota Warning
                                </span>
                                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                                    Quizonator caps you at 300 answers/mo ($14.99) and paywalls course notes at $28.99/mo.
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                                    A single 50-question review packet across 4 classes burns through 200 questions in one week. On Quizonator&apos;s <strong>$14.99/mo PRO tier</strong>, you hit a hard wall at <strong>300 answers/month</strong>—and if you want to upload your own course notes, Quizonator forces you onto its <strong>$28.99/mo PRO+ tier (capped at 1,200 answers)</strong>.
                                </p>

                                <div className="space-y-3 text-xs font-mono">
                                    <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-between">
                                        <span>Quizonator Free Tier</span>
                                        <span className="text-rose-300 font-bold">20 Answers / Month Total</span>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-400/40 flex items-center justify-between">
                                        <span>ExamGhost Free Tier (Auto-Refills Every 24h)</span>
                                        <span className="text-emerald-300 font-bold">5 Free Solves / Day (~150/mo)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-6">
                                <div className="rounded-3xl bg-white text-ink p-6 sm:p-7 border border-black/10 shadow-xl">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/10">
                                        <span className="font-display font-extrabold text-base text-ink flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-indigo-700" />
                                            ExamGhost 2-in-1 Uncapped Passes
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-mono text-[11px] font-bold">
                                            NO 300-ANSWER CAP
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2.5 text-center mb-5">
                                        <div className="p-3.5 rounded-2xl bg-[#f4f6fb] border border-black/10">
                                            <div className="font-display font-extrabold text-xl text-ink">$19<span className="text-xs font-normal text-ink-muted">/mo</span></div>
                                            <div className="text-xs font-bold text-ink mt-0.5">Monthly Pass</div>
                                            <div className="text-[10px] text-emerald-800 font-semibold mt-0.5">Unlimited Solves</div>
                                        </div>
                                        <div className="p-3.5 rounded-2xl bg-indigo-950 text-white border border-indigo-900 shadow-sm">
                                            <div className="font-display font-extrabold text-xl">$8.25<span className="text-xs font-normal text-indigo-200">/mo</span></div>
                                            <div className="text-xs font-bold text-indigo-200 mt-0.5">$99/yr Academic</div>
                                            <div className="text-[10px] text-emerald-300 font-semibold mt-0.5">Most Popular</div>
                                        </div>
                                        <div className="p-3.5 rounded-2xl bg-[#f4f6fb] border border-black/10">
                                            <div className="font-display font-extrabold text-xl text-ink">$199</div>
                                            <div className="text-xs font-bold text-ink mt-0.5">Lifetime Pass</div>
                                            <div className="text-[10px] text-emerald-800 font-semibold mt-0.5">Pay Once Forever</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-xs text-ink-secondary mb-5">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>1) Unlimited Stealth Extension Solves:</strong> `Double-Click`, `Alt+S` Hybrid Vision+DOM Snip, `Alt+1/2/3`, and `⌘+Shift+U` Master Toggle across 20+ LMSs.</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>2) Full Study &amp; Homework AI Workspace:</strong> Unlimited access to <strong>Claude 3.7 Sonnet, ChatGPT (GPT-4o / o3-mini), and DeepSeek-R1</strong> with syllabus PDF RAG included.</span>
                                        </div>
                                    </div>

                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="w-full btn-dark py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                                    >
                                        <FaChrome className="w-4 h-4 text-cyan-300" />
                                        <span>Start With 5 Free Solves / Day ($0 No Card)</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================================
                    EMBEDDED STUDY AI HUB SHOWCASE (COMPACT)
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="ExamGhost Study and Homework AI Workspace Showcase">
                    <StudyAiHubShowcase compact />
                </section>

                {/* =====================================================================
                    HEAD-TO-HEAD COMPARISON MATRIX + TECHNICAL MANIFEST DRAWER
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="Feature Comparison Table">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink mb-2">
                                Head-to-Head Technical Matrix: ExamGhost vs Quizonator v2.0.5
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Verified architectural comparison across iframe traversal, STEM canvas OCR, LMS coverage, and answer quotas.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-900 bg-emerald-50/70 rounded-t-xl">ExamGhost (v4.2 Stealth + Study Hub)</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Quizonator (quizonator.com v2.0.5)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Canvas New Quizzes (LTI 1.3 Iframe) Support</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Full Subframe DOM + `Alt+S` Vision Snip (0.8s)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Classic Quizzes only (No iframe guarantee)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">McGraw-Hill ALEKS, Pearson &amp; Cengage MindTap</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Solves HTML5 `&lt;canvas&gt;` Graphs &amp; Shadow DOM</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Not supported (9 platforms total, mostly EU/trivia)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Chrome Web Store Rating</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 4.9★ Verified Stealth Architecture</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">3.5★ (49 ratings · 8,000 users)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">DOM &amp; Event Isolation</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Closed Shadow DOM (`Alt+1/2/3`) + 100% Focus Shield</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Default inline DOM injection / Immediate `isTrusted: false` click</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Study &amp; Homework AI Workspace</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Included: Claude 3.7 Sonnet + ChatGPT (4o/o3) + DeepSeek-R1</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Notes upload locked behind $28.99/mo PRO+ tier</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Monthly Answer Quotas</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Uncapped Pro Tiers (Unlimited Solves)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Capped at 300 ($14.99 PRO) or 1,200 ($28.99 PRO+)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Quota</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 5 Free Solves / Day (Auto-refills every 24h · $0 No card)</td>
                                        <td className="py-3.5 px-4 text-ink-muted">20 free answers per month</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing Model</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-ink-muted">$14.99/mo (PRO) · $28.99/mo (PRO+) · No Lifetime</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#f4f6fb] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (Quizonator)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID &amp; Version:</span>
                                    Quizonator - quizy i wyjaśnienia AI v2.0.5 (<code>dhphdklknbffcgahfpiipdmafoncnndi</code> · 2.04MiB)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Developer &amp; Store Reputation:</span>
                                    QUIZONATOR SP Z O O (Wrocław, PL · D-U-N-S 665619089) · 3.5★ (49 ratings · 8,000 users)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">9 Supported Platforms:</span>
                                    Blooket, Socrative, Szkoła w Chmurze, Moodle, Testportal, Canvas Classic, MS Forms, Wayground, Google Forms
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Documented Iframe Limitation:</span>
                                    &ldquo;We don&apos;t guarantee operation in Teams or embedded views (iframe, webview).&rdquo;
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* =====================================================================
                    STUDENT MIGRATION STORY + FAQ ACCORDION
                ===================================================================== */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20" aria-label="Student Review and FAQ">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#c4d0f8]/50 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm mb-14">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I tried Quizonator first, and it completely froze on my Canvas New Quizzes chemistry midterm because New Quizzes runs inside an LTI iframe—and it didn&apos;t work on McGraw-Hill ALEKS graphs at all. With ExamGhost, I press `Alt+S` to snip any ALEKS graph or double-click any Canvas New Quizzes question and get the answer in 0.8 seconds. Plus the 5 free solves per day let me test it on real homework before grabbing the $99/yr pass.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-950 text-white font-bold flex items-center justify-center text-sm">
                                DL
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Damian L.</div>
                                <div className="text-xs text-ink-muted">Mechanical Engineering · University of Illinois Chicago</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <span className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-2 inline-block">
                            Student FAQ
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                            Frequently Asked Questions: Quizonator vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][3] as any).mainEntity.map((faq: any, i: number) => (
                            <details key={i} className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all" open={i === 0}>
                                <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform shrink-0 ml-3" />
                                </summary>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-3 pt-3 border-t border-black/5 leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* =====================================================================
                    CONVERSION FOOTER STRIP + RELATED COMPARISONS
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-14" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#c4d0f8] via-[#dce3fb] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-indigo-950 uppercase tracking-wider mb-2">
                                    Canvas Classic + New Quizzes (LTI 1.3) + ALEKS &lt;canvas&gt;
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Upgrade from a 3.5★ Classic-only scraper to 0.8s Hybrid Vision + Subframe Stealth.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                                    Start with <strong>5 Free Solves / Day</strong> (auto-refills every 24h, $0 no card required). Upgrade anytime for $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#c4d0f8]" aria-hidden="true" />
                                    <span>Start 5 Free Solves / Day</span>
                                </Link>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white hover:bg-white/90 text-ink border border-black/10 inline-flex items-center gap-1.5"
                                >
                                    <span>Test Live Demo</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-ink-muted mb-3">
                                Compare Other Canvas &amp; LMS Assistants
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                                <Link prefetch={false} href="/apexvision-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Apex Vision vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/rightclickai-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>RightClick AI vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/quizsolverai-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>QuizSolver AI vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>All Comparisons</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
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
