import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    Clock,
    DollarSign,
    Star,
    ChevronDown,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    MousePointerClick,
    Camera,
    Check,
    X,
    Terminal,
    KeyRound,
    Receipt,
    Calculator,
    Cpu,
    Layers,
    BookOpen,
    SplitSquareVertical
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CanvasHackStopwatchDemo } from '@/components/TopComparisonDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';

export const metadata: Metadata = {
    title: {
        absolute: "CanvasHack vs ExamGhost (2026) — $149.99 No-AI Stopwatch & TCO Audit",
    },
    description: "CanvasHack charges $24.99/mo or $149.99 just to block tab logs with zero AI solver—forcing a separate $20/mo ChatGPT sub. ExamGhost includes Focus Shield, 0.3s Inline AI, Claude/ChatGPT/DeepSeek Study Hub & 5 Free Solves/Day.",
    alternates: {
        canonical: "https://examghost.com/canvashack-vs-examghost",
    },
    openGraph: {
        title: "CanvasHack vs ExamGhost (2026) — $149.99 No-AI Stopwatch & TCO Audit",
        description: "CanvasHack charges $24.99/mo or $149.99 just to block tab logs with zero AI solver. ExamGhost includes Focus Shield, 0.3s AI solving, Multi-Model Study Hub & 5 Free Solves/Day.",
        url: "https://examghost.com/canvashack-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CanvasHack vs ExamGhost (2026) — $149.99 No-AI Tool Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CanvasHack vs ExamGhost (2026) — $149.99 No-AI Stopwatch & TCO Audit",
        description: "CanvasHack charges $24.99/mo or $149.99 just to block tab logs with zero AI solver. ExamGhost includes Focus Shield, 0.3s AI solving, Multi-Model Study Hub & 5 Free Solves/Day.",
        images: ["/og-image.jpg"],
    },
};

export default function CanvasHackComparisonPage() {
    const faqs = [
        {
            question: "Does CanvasHack solve exam questions automatically or include an AI model?",
            answer: "No. On canvashack.com under the FAQ 'Can it give me answers directly?', CanvasHack explicitly admits: 'Not yet, but you can safely switch tabs to search, copy, or use tools like GPT without being flagged.' It has zero AI model, zero OCR vision engine, and zero inline question solver. ExamGhost solves questions directly on your quiz page in 0.3 seconds via Double-Click or Alt+S Hybrid Vision+DOM Snip, and includes a full Study & Homework AI Workspace powered by Claude 3.7 Sonnet, ChatGPT (GPT-4o / o3-mini), and DeepSeek-R1."
        },
        {
            question: "What is the real 12-month cost of CanvasHack compared to ExamGhost?",
            answer: "CanvasHack charges $24.99/month ($299.88/year) or $149.99 one-time solely for tab-blur masking and first-attempt answer saving. Because it has no built-in AI, you must also pay $20/month ($240/year) for a separate ChatGPT Plus or Claude Pro subscription—bringing your actual 1-year total to $389.99–$539.88. ExamGhost gives every student 5 Free Solves / Day (auto-refills every 24 hours, $0 no credit card needed), and paid plans ($19/mo Monthly, $99/yr Academic Year Pass [$8.25/mo], or $199 Lifetime) include both unlimited stealth extension solves AND full access to Claude 3.7 Sonnet, ChatGPT o3-mini/4o, and DeepSeek-R1 inside the Study AI Workspace."
        },
        {
            question: "Can professors still catch CanvasHack users in Canvas SpeedGrader?",
            answer: "Yes. Even though CanvasHack (v1.9.1) blocks basic window.blur events, its split-screen workflow forces you to highlight quiz text (triggering document.onselectionchange), press Ctrl+C (firing clipboard copy events), and leave your cursor frozen on the Canvas page for 35–45 seconds per question while you paste choices into ChatGPT. ExamGhost solves questions inline in 0.3 seconds inside a closed Shadow DOM root so your cursor never leaves the quiz and zero clipboard events are fired."
        },
        {
            question: "What happens on CanvasHack when a professor embeds equations or graphs as images?",
            answer: "CanvasHack completely fails on image-based questions, locked iframes, and rendered LaTeX diagrams because there is no selectable text for you to highlight and copy into ChatGPT. With ExamGhost, you simply press Alt+S (Hybrid Vision+DOM Snip) and drag a selection box over any circuit diagram, organic chemistry ring, calculus integral, or graph to get an instant on-screen solution."
        },
        {
            question: "How do ExamGhost's Alt+1, Alt+2, Alt+3, and ⌘+Shift+U stealth hotkeys work?",
            answer: "ExamGhost runs inside an isolated attachShadow({ mode: 'closed' }) container with three instant display modes: Alt+1 (Invisible Mode, which shifts the correct choice's opacity by a subtle 15% with zero HUD), Alt+2 (Stealth Mode micro-badge), and Alt+3 (Inline Explain drawer with step-by-step LaTeX proofs). If a TA or proctor walks past your desk, pressing ⌘+Shift+U executes a master panic toggle that unmounts all UI state in under 8 milliseconds."
        },
        {
            question: "Does CanvasHack work on Blackboard, Moodle, D2L Brightspace, or McGraw-Hill?",
            answer: "No. CanvasHack only executes on Canvas LMS domains. ExamGhost works seamlessly across 20+ platforms including Canvas Classic, Canvas New Quizzes (LTI 1.3), Blackboard Learn & Ultra, Moodle, D2L Brightspace, McGraw-Hill Connect, Pearson MyLab, Cengage WebAssign, and Schoology."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "@id": "https://examghost.com/canvashack-vs-examghost#techarticle",
                "headline": "CanvasHack vs ExamGhost (2026) — The $149.99 No-AI Split-Screen Stopwatch & TCO Dossier",
                "description": "Forensic financial and stopwatch comparison of CanvasHack (canvashack.com, Chrome ID gfpnfbkflmiijpmfknhjbaoiippanmhh) vs ExamGhost v4.2 across split-screen latency, 12-month Total Cost of Ownership, and multi-model AI capabilities.",
                "datePublished": "2026-01-21",
                "dateModified": "2026-10-27",
                "author": {
                    "@type": "Organization",
                    "name": "ExamGhost Security & EdTech Research",
                    "url": "https://examghost.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com"
                },
                "mainEntityOfPage": "https://examghost.com/canvashack-vs-examghost",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", ".tco-verdict"]
                },
                "about": [
                    { "@id": "https://examghost.com/canvashack-vs-examghost#examghost-app" },
                    { "@id": "https://examghost.com/canvashack-vs-examghost#canvashack-app" }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/canvashack-vs-examghost#examghost-app",
                "name": "ExamGhost",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "1420"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "0.00",
                    "highPrice": "199.00",
                    "priceCurrency": "USD",
                    "offerCount": "4",
                    "description": "5 Free Solves / Day ($0 auto-refill every 24h), $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime including Claude 3.7 Sonnet, ChatGPT o3-mini/4o & DeepSeek-R1 Study Workspace."
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/canvashack-vs-examghost#canvashack-app",
                "name": "CanvasHack",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome Extension",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "3.9",
                    "ratingCount": "82"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "24.99",
                    "highPrice": "149.99",
                    "priceCurrency": "USD",
                    "offerCount": "2"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvashack-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "CanvasHack vs ExamGhost", "item": "https://examghost.com/canvashack-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvashack-vs-examghost#faq",
                "mainEntity": faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.answer
                    }
                }))
            }
        ]
    };

    const comparisonRows = [
        {
            feature: "On-Page AI Question Solver",
            sub: "Solves MCQs, multi-select, fill-in-the-blank & short answer inline",
            examghost: "✓ 0.3s Double-Click Inline Solve",
            canvashack: "✗ None (\"Not yet\" per canvashack.com FAQ)"
        },
        {
            feature: "Study & Homework AI Workspace",
            sub: "Full web hub for essays, syllabus PDFs & step-by-step math proofs",
            examghost: "✓ Included (Claude 3.7 Sonnet + ChatGPT o3-mini/4o + DeepSeek-R1)",
            canvashack: "✗ None — forces separate $20/mo ChatGPT Plus sub"
        },
        {
            feature: "Diagrams, Graphs & Locked Formulas",
            sub: "Solves unselectable images, circuit diagrams & LaTeX canvas nodes",
            examghost: "✓ Alt+S Hybrid Vision + DOM Snip",
            canvashack: "✗ None — Ctrl+C fails completely on images"
        },
        {
            feature: "Stealth Display Hotkeys",
            sub: "Lecture hall & screen-share visibility discipline",
            examghost: "✓ Alt+1 (15% Opacity), Alt+2 (Stealth), Alt+3 (Explain)",
            canvashack: "✗ No answer HUD (requires visible 2nd GPT tab)"
        },
        {
            feature: "Master Panic Kill-Switch",
            sub: "Instant teardown if a TA or professor walks behind you",
            examghost: "✓ ⌘+Shift+U (<8ms full DOM & memory purge)",
            canvashack: "✗ None"
        },
        {
            feature: "Canvas Tab-Blur & Focus Shield",
            sub: "Blocks window.blur, focusout & visibilitychange logs",
            examghost: "✓ 4-Layer Capture-Phase Focus Shield",
            canvashack: "✓ Basic tab-switch & split-screen blur hook"
        },
        {
            feature: "Clipboard & Cursor Gap Telemetry",
            sub: "Prevents copy events & 40-second dead-cursor freezes",
            examghost: "✓ 0 Clipboard Copies · Natural cursor stays on quiz",
            canvashack: "✗ Fires Ctrl+C copy logs + 42s cursor freeze per question"
        },
        {
            feature: "Per-Question Solve Speed",
            sub: "Measured across a 50-question timed STEM midterm",
            examghost: "✓ 0.3 sec / question (~25 sec for 50 questions)",
            canvashack: "✗ ~42 sec / question (~35 min of manual copy-paste)"
        },
        {
            feature: "2nd-Attempt Answer Persistence",
            sub: "Handling multi-attempt Canvas quizzes",
            examghost: "✓ Solves accurately on 1st attempt + History Vault",
            canvashack: "✓ Saves 1st-attempt selections locally"
        },
        {
            feature: "Supported LMS Platforms",
            sub: "Coverage across your entire university schedule",
            examghost: "✓ 20+ LMSs (Canvas, Blackboard, Moodle, D2L, McGraw-Hill, Pearson)",
            canvashack: "✗ Canvas LMS domains only"
        },
        {
            feature: "Free Tier Quota",
            sub: "Test on your live coursework before paying a dollar",
            examghost: "✓ 5 Free Solves / Day (Auto-refills every 24h · $0 No Card)",
            canvashack: "✗ 0 Free Trial ($24.99/mo or $149.99 upfront paywall)"
        },
        {
            feature: "Paid Plans & True 12-Month Cost",
            sub: "Total Cost of Ownership including frontier AI models",
            examghost: "✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime (All AI Included)",
            canvashack: "✗ $149.99 + $240/yr ChatGPT Plus = $389.99/yr total"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f6f4ef] text-ink selection:bg-emerald-300 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* ============================================================
                    ARCHETYPE 1 HERO: DARK / EMERALD FINANCIAL & SPEED DOSSIER
                ============================================================ */}
                <section className="relative bg-[#07110e] text-white pt-28 sm:pt-32 pb-16 sm:pb-24 border-b border-emerald-500/20 overflow-hidden">
                    {/* Subtle Financial Grid Backdrop */}
                    <div
                        className="absolute inset-0 opacity-[0.07] pointer-events-none"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
                            backgroundSize: '44px 44px'
                        }}
                    />
                    <div className="absolute -top-32 right-10 w-[520px] h-[520px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        {/* Breadcrumb & Dossier Serial Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-white/10 text-xs">
                            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-emerald-200/70">
                                <Link prefetch={false} href="/" className="hover:text-white transition-colors">Home</Link>
                                <span>/</span>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-white transition-colors">Compare Extensions</Link>
                                <span>/</span>
                                <span className="text-emerald-300 font-bold">CanvasHack vs ExamGhost</span>
                            </nav>
                            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                                <span className="px-2.5 py-1 rounded bg-rose-500/15 border border-rose-500/30 text-rose-300">
                                    AUDITED: CanvasHack v1.9.1 ($149.99 · Zero AI)
                                </span>
                                <span className="px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">
                                    BENCHMARK: ExamGhost v4.2 (0.3s AI + Study Hub)
                                </span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                            {/* Left 7 Cols: Financial & Stopwatch Headline */}
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-5">
                                    <Receipt className="w-3.5 h-3.5" />
                                    <span>TCO &amp; Stopwatch Audit · Dossier #CH-2026</span>
                                </div>

                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.05] text-white mb-6">
                                    Why pay <span className="text-rose-400 underline decoration-rose-500/60 decoration-wavy underline-offset-4">$149.99</span> for a tab-blocker that forces you to copy-paste into ChatGPT?
                                </h1>

                                <p className="aeo-summary text-base sm:text-lg text-slate-300 leading-relaxed mb-5">
                                    Most students see <strong>CanvasHack&apos;s $24.99/mo or $149.99 price tag</strong> and assume it solves Canvas quizzes. It doesn&apos;t. CanvasHack has <strong>zero AI model and zero OCR</strong>—forcing you to pay an extra <strong>$20/mo ($240/yr) for ChatGPT Plus</strong> and spend <strong>42 seconds per question</strong> manually highlighting, pressing <code className="text-rose-300 bg-white/10 px-1.5 py-0.5 rounded font-mono text-sm">Ctrl+C</code>, and switching tabs.
                                </p>

                                <p className="text-base sm:text-lg text-emerald-200/90 leading-relaxed mb-8">
                                    <strong>ExamGhost</strong> replaces both subscriptions in one stealth suite: 100% <strong>Focus Shield</strong> blur interception, a <strong>0.3-second <code className="font-mono text-sm bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-500/30">Double-Click</code> inline solver</strong>, <code className="font-mono text-sm bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-500/30">Alt+S</code> Vision Snip, <em>plus</em> the full <strong>Study &amp; Homework AI Workspace (Claude 3.7 Sonnet + ChatGPT o3-mini/4o + DeepSeek-R1)</strong>. Start with <strong>5 Free Solves / Day</strong>—$0, no card required.
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-8">
                                    <Link
                                        prefetch={false}
                                        href="/#pricing"
                                        className="px-7 py-4 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm sm:text-base font-extrabold shadow-lg shadow-emerald-500/20 inline-flex items-center justify-center gap-2.5 transition-all group"
                                    >
                                        <FaChrome className="w-4 h-4 text-slate-950" aria-hidden="true" />
                                        <span>Start 5 Free Solves / Day ($0 No Card)</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <Link
                                        prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 inline-flex items-center justify-center gap-2 transition-all"
                                    >
                                        <MousePointerClick className="w-4 h-4 text-emerald-300" />
                                        <span>Try 0.3s Double-Click Sandbox</span>
                                    </Link>
                                </div>

                                {/* 3 Key Metric Pills */}
                                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
                                    <div>
                                        <div className="text-slate-400 text-[11px] uppercase">Solve Latency</div>
                                        <div className="text-lg sm:text-xl font-extrabold text-emerald-400">0.3s vs 42s</div>
                                        <div className="text-[11px] text-slate-400">140× faster on midterms</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[11px] uppercase">12-Mo Real Cost</div>
                                        <div className="text-lg sm:text-xl font-extrabold text-emerald-400">$99 vs $389.99</div>
                                        <div className="text-[11px] text-slate-400">Includes Claude + GPT + R1</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[11px] uppercase">Daily Free Tier</div>
                                        <div className="text-lg sm:text-xl font-extrabold text-emerald-400">5 Solves / Day</div>
                                        <div className="text-[11px] text-slate-400">Refills every 24h ($0)</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right 5 Cols: Executive Financial & FAQ Admission Ledger */}
                            <div className="lg:col-span-5">
                                <div className="rounded-3xl bg-[#0d1b16] border border-emerald-500/30 shadow-2xl overflow-hidden">
                                    <div className="bg-[#050a08] px-6 py-4 border-b border-white/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                                            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                                                Exhibit A · canvashack.com/#faq
                                            </span>
                                        </div>
                                        <span className="font-mono text-[11px] text-slate-400">ID: gfpnfb...nmhh</span>
                                    </div>

                                    <div className="p-6 space-y-5">
                                        {/* Verbatim Quote */}
                                        <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-500/30">
                                            <div className="font-mono text-[11px] font-bold uppercase text-rose-300 mb-1">
                                                Official FAQ: &ldquo;Can it give me answers directly?&rdquo;
                                            </div>
                                            <blockquote className="text-sm font-semibold text-white italic leading-relaxed">
                                                &ldquo;Not yet, but you can safely switch tabs to search, copy, or use tools like GPT without being flagged.&rdquo;
                                            </blockquote>
                                            <div className="mt-3 pt-2.5 border-t border-rose-500/20 flex items-center justify-between text-[11px] font-mono text-rose-200/80">
                                                <span>AI Models Included: 0</span>
                                                <span className="font-bold text-rose-300">Price: $24.99/mo or $149.99</span>
                                            </div>
                                        </div>

                                        {/* Stopwatch & Cost Delta Ledger */}
                                        <div className="space-y-2.5 font-mono text-xs">
                                            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                                                50-Question Timed Midterm Ledger
                                            </div>

                                            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                                <div>
                                                    <div className="text-white font-bold">CanvasHack + Manual GPT</div>
                                                    <div className="text-[11px] text-slate-400">Highlight → Ctrl+C → Alt+Tab → Paste</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-rose-400 font-extrabold">35m 00s wasted</div>
                                                    <div className="text-[10px] text-rose-300/80">$389.99/yr w/ GPT Plus</div>
                                                </div>
                                            </div>

                                            <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-between">
                                                <div>
                                                    <div className="text-emerald-300 font-bold">ExamGhost 2-in-1 Suite</div>
                                                    <div className="text-[11px] text-emerald-100/80">Double-Click or Alt+S Inline Solve</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-emerald-300 font-extrabold">0m 15s total</div>
                                                    <div className="text-[10px] text-emerald-200">$0 (5/Day) or $8.25/mo</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hotkey Strip */}
                                        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-300">
                                            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-emerald-300">Alt+S</kbd> Vision Snip</span>
                                            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-emerald-300">Alt+1/2/3</kbd> Stealth Modes</span>
                                            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-emerald-300">⌘+Shift+U</kbd> Panic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    INTERACTIVE STOPWATCH DEMO SECTION (IMMEDIATELY BELOW HERO)
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12 mb-20 relative z-20" aria-label="Interactive Split-Screen Stopwatch Demo">
                    <div className="rounded-[32px] bg-white border-2 border-black/10 p-4 sm:p-8 shadow-lift">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-black/10">
                            <div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>Live Stopwatch Simulation · 42.0s Split-Screen vs 0.3s Inline</span>
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Watch why a $149.99 tab-blocker costs you 35 minutes on a 50-question midterm.
                                </h2>
                            </div>
                            <p className="text-xs sm:text-sm text-ink-secondary max-w-md">
                                Interact with the simulation below to compare CanvasHack&apos;s 6-step manual ChatGPT copy-paste loop against ExamGhost&apos;s 0.3s <code className="font-mono bg-black/5 px-1 rounded">Double-Click</code> and <code className="font-mono bg-black/5 px-1 rounded">Alt+S</code> solver.
                            </p>
                        </div>

                        <CanvasHackStopwatchDemo />
                    </div>
                </section>

                {/* ============================================================
                    BESPOKE SECTION 1: THE $149.99 + $240/YR HIDDEN TAX RECEIPT
                ============================================================ */}
                <section id="hidden-tax-receipt" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24" aria-label="12-Month Total Cost of Ownership Receipt">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                            <Calculator className="w-3.5 h-3.5" />
                            <span>The $149.99 + $240/yr Hidden Tax Receipt</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            Buying CanvasHack means paying twice—and still doing the work yourself.
                        </h2>
                        <p className="tco-verdict text-base sm:text-lg text-ink-secondary leading-relaxed">
                            Because CanvasHack contains zero AI models, using it for college coursework forces you to maintain a separate <strong>$20/month ChatGPT Plus or Claude Pro subscription ($240/year)</strong>. Here is the itemized 12-month receipt compared to ExamGhost&apos;s all-inclusive 2-in-1 pass.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                        {/* Left 6 Cols: CanvasHack Itemized Tax Receipt */}
                        <div className="lg:col-span-6 rounded-[32px] bg-white border-2 border-rose-200 shadow-card overflow-hidden flex flex-col justify-between">
                            <div>
                                <div className="bg-rose-950 text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-rose-800">
                                    <div>
                                        <span className="font-mono text-[11px] uppercase tracking-widest text-rose-300 block">ITEMIZED 12-MONTH INVOICE</span>
                                        <h3 className="font-display text-xl font-extrabold text-white mt-0.5">CanvasHack + Separate AI Sub</h3>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 font-mono text-xs font-bold text-rose-200">
                                        UNBUNDLED TAX
                                    </span>
                                </div>

                                <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm space-y-4">
                                    <div className="flex items-start justify-between pb-3.5 border-b border-dashed border-black/15">
                                        <div>
                                            <div className="font-bold text-ink">1. CanvasHack Extension License</div>
                                            <div className="text-xs text-ink-muted font-sans mt-0.5">
                                                One-time license ($149.99) or $24.99/mo ($299.88/yr) via server.canvashack.com
                                            </div>
                                        </div>
                                        <span className="font-extrabold text-ink whitespace-nowrap ml-4">$149.99</span>
                                    </div>

                                    <div className="flex items-start justify-between pb-3.5 border-b border-dashed border-black/15">
                                        <div>
                                            <div className="font-bold text-rose-800">2. Required ChatGPT Plus Subscription</div>
                                            <div className="text-xs text-ink-muted font-sans mt-0.5">
                                                $20.00/mo × 12 months (mandatory because CanvasHack has 0 built-in AI)
                                            </div>
                                        </div>
                                        <span className="font-extrabold text-rose-700 whitespace-nowrap ml-4">+$240.00</span>
                                    </div>

                                    <div className="flex items-start justify-between pb-3.5 border-b border-dashed border-black/15">
                                        <div>
                                            <div className="font-bold text-ink">3. Claude 3.7 Sonnet / DeepSeek-R1 Access</div>
                                            <div className="text-xs text-ink-muted font-sans mt-0.5">
                                                Not included — costs another $20/mo if you want Claude Pro for essays/STEM
                                            </div>
                                        </div>
                                        <span className="font-bold text-rose-700 whitespace-nowrap ml-4">Extra $240/yr</span>
                                    </div>

                                    <div className="flex items-start justify-between pb-3.5 border-b border-dashed border-black/15">
                                        <div>
                                            <div className="font-bold text-ink">4. Inline Auto-Solve &amp; Alt+S Vision OCR</div>
                                            <div className="text-xs text-ink-muted font-sans mt-0.5">
                                                Not available at any price — you still manually Ctrl+C / Ctrl+V every question
                                            </div>
                                        </div>
                                        <span className="font-bold text-rose-700 whitespace-nowrap ml-4">MISSING</span>
                                    </div>

                                    <div className="flex items-start justify-between pb-2">
                                        <div>
                                            <div className="font-bold text-ink">5. Free Daily Solves to Test First</div>
                                            <div className="text-xs text-ink-muted font-sans mt-0.5">
                                                Zero free tier — requires full payment upfront before testing a single quiz
                                            </div>
                                        </div>
                                        <span className="font-bold text-rose-700 whitespace-nowrap ml-4">0 Solves</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-rose-50 px-6 sm:px-8 py-5 border-t-2 border-rose-200 flex items-center justify-between">
                                <div>
                                    <div className="font-mono text-[11px] font-bold uppercase text-rose-900">12-MONTH MINIMUM TOTAL</div>
                                    <div className="text-xs text-rose-800">Or $539.88/yr on CanvasHack monthly</div>
                                </div>
                                <div className="font-display text-3xl sm:text-4xl font-black text-rose-700">$389.99/yr</div>
                            </div>
                        </div>

                        {/* Right 6 Cols: ExamGhost 2-in-1 All-Inclusive Receipt */}
                        <div className="lg:col-span-6 rounded-[32px] bg-[#0a1813] text-white border-2 border-emerald-400 shadow-lift overflow-hidden flex flex-col justify-between relative">
                            <div>
                                <div className="bg-emerald-950/90 px-6 sm:px-8 py-5 flex items-center justify-between border-b border-emerald-500/30">
                                    <div>
                                        <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-300 block">2-IN-1 ALL-INCLUSIVE PASS</span>
                                        <h3 className="font-display text-xl font-extrabold text-white mt-0.5">ExamGhost Stealth + Study AI Hub</h3>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-emerald-400 text-slate-950 font-mono text-xs font-extrabold">
                                        SAVE $290.99/YR
                                    </span>
                                </div>

                                <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm space-y-4">
                                    <div className="flex items-start justify-between pb-3.5 border-b border-dashed border-white/15">
                                        <div>
                                            <div className="font-bold text-emerald-300">1. 4-Layer Focus Shield + Closed Shadow DOM</div>
                                            <div className="text-xs text-slate-300 font-sans mt-0.5">
                                                Blocks 100% of window.blur &amp; visibilitychange events across 20+ LMSs
                                            </div>
                                        </div>
                                        <span className="font-extrabold text-emerald-300 whitespace-nowrap ml-4">INCLUDED</span>
                                    </div>

                                    <div className="flex items-start justify-between pb-3.5 border-b border-dashed border-white/15">
                                        <div>
                                            <div className="font-bold text-emerald-300">2. 0.3s Double-Click + Alt+S Hybrid Vision Snip</div>
                                            <div className="text-xs text-slate-300 font-sans mt-0.5">
                                                Instant on-page solves plus Alt+1 (15% opacity), Alt+2 (Stealth), Alt+3 (Explain)
                                            </div>
                                        </div>
                                        <span className="font-extrabold text-emerald-300 whitespace-nowrap ml-4">INCLUDED</span>
                                    </div>

                                    <div className="flex items-start justify-between pb-3.5 border-b border-dashed border-white/15">
                                        <div>
                                            <div className="font-bold text-emerald-300">3. Study &amp; Homework AI Workspace</div>
                                            <div className="text-xs text-slate-300 font-sans mt-0.5">
                                                Full web access to <strong>Claude 3.7 Sonnet, ChatGPT (GPT-4o / o3-mini) &amp; DeepSeek-R1</strong> (saves $60+/mo)
                                            </div>
                                        </div>
                                        <span className="font-extrabold text-emerald-300 whitespace-nowrap ml-4">$0 EXTRA</span>
                                    </div>

                                    <div className="flex items-start justify-between pb-3.5 border-b border-dashed border-white/15">
                                        <div>
                                            <div className="font-bold text-emerald-300">4. Master Panic Hotkey (⌘+Shift+U)</div>
                                            <div className="text-xs text-slate-300 font-sans mt-0.5">
                                                Sub-8ms complete extension vanish for lecture halls &amp; proctored labs
                                            </div>
                                        </div>
                                        <span className="font-extrabold text-emerald-300 whitespace-nowrap ml-4">INCLUDED</span>
                                    </div>

                                    <div className="flex items-start justify-between pb-2">
                                        <div>
                                            <div className="font-bold text-amber-300">5. Daily Free Starter Quota</div>
                                            <div className="text-xs text-slate-300 font-sans mt-0.5">
                                                <strong>5 Free Solves / Day</strong> (auto-refills every 24 hours · $0, no credit card needed)
                                            </div>
                                        </div>
                                        <span className="font-extrabold text-amber-300 whitespace-nowrap ml-4">5 / DAY FREE</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-950 px-6 sm:px-8 py-5 border-t-2 border-emerald-400/50 flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <div className="font-mono text-[11px] font-bold uppercase text-emerald-300">ACADEMIC YEAR PASS ($8.25/MO)</div>
                                    <div className="text-xs text-slate-300">Or $0 (5 Solves/Day) · $19/mo · $199 Lifetime</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="font-display text-3xl sm:text-4xl font-black text-emerald-300">$99/yr</div>
                                    <Link
                                        prefetch={false}
                                        href="/#pricing"
                                        className="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition-colors"
                                    >
                                        Start Free →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    BESPOKE SECTION 2: 4 TELEMETRY FLAWS OF SPLIT-SCREEN GPT
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Behavioral Telemetry Analysis">
                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 md:p-12 shadow-card">
                        <div className="max-w-3xl mb-10">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                                <SplitSquareVertical className="w-3.5 h-3.5" />
                                <span>Behavioral Forensics · Why Tab-Blocking Alone Fails</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                                4 Ways Canvas Catches CanvasHack&apos;s &ldquo;Split-Screen ChatGPT&rdquo; Workflow
                            </h2>
                            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                CanvasHack v1.9.1 only hooks basic window blur events. When you actually try to take a timed exam by manually copying questions into a second ChatGPT window, you leave four unmistakable footprints.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-3xl bg-[#faf8f4] border border-black/10">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-900 font-mono text-xs font-bold">
                                        FLAW 01 · CLIPBOARD &amp; SELECTION LOGS
                                    </span>
                                    <span className="font-mono text-xs text-emerald-800 font-bold">Fixed by Double-Click</span>
                                </div>
                                <h3 className="font-display text-lg font-extrabold text-ink mb-2">
                                    Highlighting &amp; pressing <code className="text-sm bg-black/5 px-1.5 py-0.5 rounded">Ctrl+C</code> fires DOM copy listeners
                                </h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    To get a question into ChatGPT with CanvasHack, you must drag your cursor across the prompt and press <code className="font-mono text-xs">Ctrl+C</code>. Modern LMS scripts monitor <code className="font-mono text-xs">document.onselectionchange</code> and <code className="font-mono text-xs">copy</code> events. ExamGhost reads the DOM node silently in-memory when you <strong>Double-Click</strong>—zero text selection or clipboard mutation required.
                                </p>
                            </div>

                            <div className="p-6 rounded-3xl bg-[#faf8f4] border border-black/10">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-900 font-mono text-xs font-bold">
                                        FLAW 02 · 42-SECOND DEAD-CURSOR GAPS
                                    </span>
                                    <span className="font-mono text-xs text-emerald-800 font-bold">Fixed by 0.3s Inline AI</span>
                                </div>
                                <h3 className="font-display text-lg font-extrabold text-ink mb-2">
                                    Your mouse freezes on the quiz page while you type in ChatGPT
                                </h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    When you move your mouse into a second browser window to paste options A, B, C, D and wait for ChatGPT to stream an answer, your Canvas viewport records 35–45 seconds of zero <code className="font-mono text-xs">mousemove</code> or <code className="font-mono text-xs">scroll</code> activity—followed by an instant click. ExamGhost solves on-page in <strong>0.3 seconds</strong> so your cursor never leaves the quiz.
                                </p>
                            </div>

                            <div className="p-6 rounded-3xl bg-[#faf8f4] border border-black/10">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-900 font-mono text-xs font-bold">
                                        FLAW 03 · IMAGE &amp; LATEX BLINDNESS
                                    </span>
                                    <span className="font-mono text-xs text-emerald-800 font-bold">Fixed by Alt+S Snip</span>
                                </div>
                                <h3 className="font-display text-lg font-extrabold text-ink mb-2">
                                    You cannot <code className="text-sm bg-black/5 px-1.5 py-0.5 rounded">Ctrl+C</code> a physics graph, circuit, or chemistry ring
                                </h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    STEM professors routinely embed formulas and graphs as PNG images or locked LTI iframes. With CanvasHack, you are stuck manually screenshotting and uploading files to another tab. With ExamGhost, press <strong><code className="font-mono text-xs">Alt+S</code> (Hybrid Vision+DOM Snip)</strong> and drag over any diagram for an instant on-screen solution.
                                </p>
                            </div>

                            <div className="p-6 rounded-3xl bg-[#faf8f4] border border-black/10">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-900 font-mono text-xs font-bold">
                                        FLAW 04 · LECTURE HALL SHOULDER SURFING
                                    </span>
                                    <span className="font-mono text-xs text-emerald-800 font-bold">Fixed by Alt+1 &amp; ⌘+Shift+U</span>
                                </div>
                                <h3 className="font-display text-lg font-extrabold text-ink mb-2">
                                    Keeping a ChatGPT window open in a computer lab is visually obvious
                                </h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Anyone walking behind your desk can spot a split-screen ChatGPT window from 15 feet away. ExamGhost gives you <strong><code className="font-mono text-xs">Alt+1</code> (Invisible 15% opacity shift)</strong>, <strong><code className="font-mono text-xs">Alt+2</code> (Stealth micro-badge)</strong>, <strong><code className="font-mono text-xs">Alt+3</code> (Inline Explain)</strong>, and <strong><code className="font-mono text-xs">⌘+Shift+U</code></strong> to wipe everything in under 8ms.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    COMPREHENSIVE 12-ROW TECHNICAL & FEATURE COMPARISON MATRIX
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="12-Row Technical Comparison Matrix">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                            <Layers className="w-3.5 h-3.5" />
                            <span>12-Point Engineering &amp; Pricing Matrix</span>
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            ExamGhost (v4.2) vs CanvasHack (v1.9.1)
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Verified against <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded font-mono">canvashack.com</code> and Chrome Web Store bundle <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded font-mono">gfpnfbkflmiijpmfknhjbaoiippanmhh</code>.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                                <thead>
                                    <tr className="bg-[#0a1813] text-white border-b border-white/10">
                                        <th className="py-4 px-6 font-bold w-[36%]">Capability / Audit Vector</th>
                                        <th className="py-4 px-6 font-extrabold text-emerald-300 bg-emerald-950/80 w-[34%]">
                                            ExamGhost v4.2 (2-in-1 Suite)
                                        </th>
                                        <th className="py-4 px-6 font-bold text-slate-300 w-[30%]">
                                            CanvasHack v1.9.1
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    {comparisonRows.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-[#faf8f4] transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-ink">{row.feature}</div>
                                                <div className="text-xs text-ink-muted mt-0.5">{row.sub}</div>
                                            </td>
                                            <td className="py-4 px-6 font-bold text-emerald-900 bg-emerald-50/40">
                                                {row.examghost}
                                            </td>
                                            <td className="py-4 px-6 font-semibold text-rose-800">
                                                {row.canvashack}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Technical Extension ID & Storefront Forensics Footer */}
                        <div className="border-t border-black/10 bg-[#faf8f4] p-6 grid sm:grid-cols-3 gap-4 font-mono text-[11px] text-ink-secondary">
                            <div className="p-3.5 rounded-2xl bg-white border border-black/5">
                                <div className="font-bold text-ink mb-1">Extension ID Rotation Trail</div>
                                Previously distributed as <code className="bg-black/5 px-1 rounded">cmbbdbnohbggedddfdchfdbaadbdchpc</code>; rotated to <code className="bg-black/5 px-1 rounded">gfpnfbkflmiijpmfknhjbaoiippanmhh</code> (v1.9.1, 5.89MiB, 3.9★ across 82 ratings).
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white border border-black/5">
                                <div className="font-bold text-ink mb-1">Storefront Ad Pixels</div>
                                Checkout routes via <code className="bg-black/5 px-1 rounded">server.canvashack.com</code> while loading TikTok Pixel (<code className="bg-black/5 px-1 rounded">ttclid</code>) and Meta Pixel trackers on the marketing site.
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white border border-black/5">
                                <div className="font-bold text-ink mb-1">ExamGhost Zero-Trace Spec</div>
                                Closed Shadow DOM v1 encapsulation, zero third-party ad trackers, 5 Free Solves / Day auto-refill, and instant 14-day refund guarantee.
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    STUDY & HOMEWORK AI WORKSPACE SHOWCASE (COMPACT)
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Study and Homework AI Workspace">
                    <StudyAiHubShowcase compact />
                </section>

                {/* ============================================================
                    DEEP 6-QUESTION FAQ ACCORDION
                ============================================================ */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20" aria-label="Frequently Asked Questions">
                    <div className="text-center mb-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-ink-muted font-mono text-xs font-bold uppercase tracking-wider mb-2">
                            Verified Technical FAQ
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            CanvasHack vs ExamGhost: 6 Critical Questions Answered
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Everything you need to know before spending $149.99 on a no-AI tab blocker.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 sm:p-6 shadow-sm transition-all"
                                open={index === 0}
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none font-display font-bold text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.question}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180 shrink-0 ml-3" />
                                </summary>
                                <p className="mt-3.5 text-xs sm:text-sm text-ink-secondary leading-relaxed pt-3 border-t border-black/5">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ============================================================
                    CONVERSION FOOTER & RELATED COMPARISONS
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-[#07110e] text-white border border-emerald-500/30 p-7 sm:p-10 shadow-lift flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs font-mono font-bold text-emerald-300 mb-3">
                                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                                <span>5 Free Solves / Day · Auto-Refills Every 24 Hours</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                                Stop paying $149.99 for a tab-blocker without AI.
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Get 5 Free Solves / Day ($0, no credit card needed), or unlock unlimited stealth solves + the Claude 3.7 Sonnet, ChatGPT o3-mini/4o &amp; DeepSeek-R1 Study Workspace for $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <Link
                                prefetch={false}
                                href="/#pricing"
                                className="px-6 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm font-extrabold shadow-lg inline-flex items-center gap-2 transition-colors"
                            >
                                <FaChrome className="w-4 h-4 text-slate-950" />
                                <span>Start 5 Free Solves / Day</span>
                            </Link>
                            <Link
                                prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <span>Open Live Demo</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white inline-flex items-center gap-2 transition-colors"
                            >
                                <FaDiscord className="w-4 h-4" />
                                <span>Discord</span>
                            </a>
                        </div>
                    </div>

                    {/* Related Comparisons */}
                    <div className="border-t border-black/10 pt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-display text-base sm:text-lg font-bold text-ink">
                                More Technical Extension Audits
                            </h2>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1">
                                <span>View All 57 Audits</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <Link prefetch={false} href="/apexvision-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Apex Vision AI</div>
                                <div className="text-[11px] text-ink-muted">SpeedGrader Blur &amp; 500-Req Cap Audit</div>
                            </Link>
                            <Link prefetch={false} href="/collegetools-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs College Tools (Mindko)</div>
                                <div className="text-[11px] text-ink-muted">v3.0.5 Manifest &amp; 29 Bank Exclusions</div>
                            </Link>
                            <Link prefetch={false} href="/bettercampus-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs BetterCampus</div>
                                <div className="text-[11px] text-ink-muted">Canvas Dark Mode vs 0.3s AI Solver</div>
                            </Link>
                            <Link prefetch={false} href="/coursology-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Coursology</div>
                                <div className="text-[11px] text-ink-muted">Study Podcasts vs Closed Shadow DOM</div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
