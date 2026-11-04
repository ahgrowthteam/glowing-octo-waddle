import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    Star,
    ChevronDown,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    Palette,
    Moon,
    Layers,
    MousePointerClick,
    Terminal,
    BrainCircuit,
    Plus,
    AlertTriangle,
    CreditCard,
    EyeOff
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BetterCampusCoPilotDemo } from '@/components/TopComparisonDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';

export const metadata: Metadata = {
    title: {
        absolute: "BetterCampus vs ExamGhost (2026) — Free Dark Mode + AI Solver Stack",
    },
    description: "Keep BetterCampus (formerly BetterCanvas / Tasks for Canvas) for free dark mode & GPA rings, and pair it with ExamGhost (5 Free Solves / Day) instead of paying $19.99/mo for BetterCampus Pro.",
    alternates: {
        canonical: "https://examghost.com/bettercampus-vs-examghost",
    },
    openGraph: {
        title: "The Ultimate 2026 Canvas Stack: Free BetterCampus Themes + ExamGhost AI Power",
        description: "Why pay $19.99/mo for BetterCampus Pro (20 trial credits, Canvas-only sidebar)? Pair free BetterCampus Dark Mode with ExamGhost's 0.3s Stealth Solver + Claude 3.7 / ChatGPT / DeepSeek-R1 Study Hub.",
        url: "https://examghost.com/bettercampus-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "BetterCampus vs ExamGhost (2026) — Free Dark Mode + Stealth AI Stack",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "BetterCampus vs ExamGhost (2026) — The Ultimate 2-Extension Canvas Stack",
        description: "Run BetterCampus (Free) for Canvas Dark Mode + ExamGhost (5 Free Solves / Day) for 0.3s Stealth Solving and our 3-Model Study Hub.",
        images: ["/og-image.jpg"],
    },
};

export default function BetterCampusComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-11",
                "dateModified": "2026-10-27",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/bettercampus-vs-examghost#webpage",
                "url": "https://examghost.com/bettercampus-vs-examghost",
                "name": "BetterCampus vs ExamGhost (2026 Comparison) | The Ultimate Canvas Stack: Free Dark Mode + 0.3s Stealth AI",
                "description": "Comparison and co-existence guide for BetterCampus (formerly BetterCanvas / Tasks for Canvas, Chrome ID cndibmoanboadcifjkjbdpjgfedanolh), BetterCampus Pro ($19.99/mo), and ExamGhost across Canvas dark mode compatibility, 0.3s quiz solving, Focus Shield blur protection, and the 3-Model Study Hub.",
                "breadcrumb": { "@id": "https://examghost.com/bettercampus-vs-examghost#breadcrumb" },
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
                        "name": "BetterCampus (formerly BetterCanvas / Tasks for Canvas)",
                        "applicationCategory": "CustomizationApplication",
                        "operatingSystem": "Chrome Extension",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "19.99",
                            "priceCurrency": "USD",
                            "offerCount": "2"
                        }
                    }
                ]
            },
            {
                "@type": "TechArticle",
                "@id": "https://examghost.com/bettercampus-vs-examghost#article",
                "headline": "The Ultimate 2026 Canvas Stack: Free BetterCampus Themes + ExamGhost AI Power (vs BetterCampus Pro $19.99/mo)",
                "datePublished": "2026-01-11",
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
                "description": "How to run BetterCampus (Free) and ExamGhost side-by-side with zero CSS or Shadow DOM conflicts, and why ExamGhost beats the $19.99/mo BetterCampus Pro AI add-on."
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/bettercampus-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "BetterCampus vs ExamGhost", "item": "https://examghost.com/bettercampus-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/bettercampus-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Should I pay $19.99/month for BetterCampus Pro or pair free BetterCampus with ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Keep BetterCampus Free ($0) for its awesome Canvas Dark Mode, custom dashboard cards, and GPA rings—and pair it with ExamGhost. BetterCampus Pro charges $19.99/month ($239.88/year) after a one-time 20-credit trial, only works inside Canvas, opens a visible sidebar without Focus Shield blur protection, and uses a basic single-model AI chat. ExamGhost gives you 5 Free Solves / Day (auto-refills every 24h) or an $8.25/mo ($99/yr) Academic Pass that includes both Unlimited Stealth Extension Solves across 20+ LMSs and a 3-Model Study Hub (Claude 3.7 Sonnet, ChatGPT, and DeepSeek-R1)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I run BetterCampus and ExamGhost at the same time without breaking my dark mode?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes—they are 100% compatible with zero extension conflicts. While generic quiz solvers inject global CSS rules that ruin BetterCampus dark mode themes with glaring white boxes, ExamGhost encapsulates its entire UI inside an isolated Closed Shadow DOM v1 root (attachShadow({ mode: 'closed' })). Your Midnight or Catppuccin dark theme stays untouched while ExamGhost solves in 0.3s."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does BetterCampus or BetterCampus Pro work on Blackboard, Moodle, ALEKS, or McGraw-Hill Connect?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Both BetterCampus Free and BetterCampus Pro ($19.99/mo) are strictly restricted to Instructure Canvas URLs. ExamGhost works seamlessly across 20+ platforms including Canvas Classic, Canvas New Quizzes (LTI 1.3), Blackboard Ultra, Moodle, D2L Brightspace, McGraw-Hill Connect, ALEKS, Pearson MyLab, and Cengage MindTap."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does ExamGhost cost if I already use BetterCampus for free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost gives every student 5 Free Solves / Day (auto-refills every 24 hours, $0 with no credit card required). When you want unlimited solves plus full access to our Claude 3.7 Sonnet + ChatGPT + DeepSeek-R1 Study & Homework AI Workspace, you can choose the $19/mo Monthly Pass, the $99/yr Academic Year Pass ($8.25/mo—less than half the price of BetterCampus Pro's $19.99/mo), or the $199 one-time Lifetime Pass."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-purple-200 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-bold">BetterCampus vs ExamGhost</span>
                    </nav>
                </div>

                {/* =====================================================================
                    UNIQUE ARCHETYPE HERO: CO-EXISTENCE & SYNERGY STACK SHOWCASE
                    ("Free BetterCampus Themes + ExamGhost AI Power vs $19.99/mo Pro")
                ===================================================================== */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
                    <div className="rounded-[40px] bg-gradient-to-br from-[#161324] via-[#1e1933] to-[#112224] text-white p-6 sm:p-10 md:p-14 border border-purple-400/25 shadow-lift relative overflow-hidden">
                        {/* Ambient Glows */}
                        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

                        {/* Top Synergy Banner */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-white/10 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-purple-200">
                                <Moon className="w-3.5 h-3.5 text-purple-300" />
                                <span>100% Co-Existence Guide · Zero Dark-Mode CSS Conflicts</span>
                            </div>
                            <span className="text-xs font-mono text-emerald-300 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/30">
                                BetterCampus Free ($0) + ExamGhost (5 Free Solves / Day)
                            </span>
                        </div>

                        {/* Centerpiece Stack Narrative */}
                        <div className="max-w-4xl mx-auto text-center mb-10 relative z-10">
                            <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.06] mb-5">
                                Keep BetterCampus for free Dark Mode. <span className="text-emerald-300">Add ExamGhost for 0.3s Stealth &amp; 3-Model Study AI.</span>
                            </h1>
                            <p className="aeo-summary text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4">
                                Over 2 million students love <strong>BetterCampus</strong> (formerly <em>BetterCanvas</em> &amp; <em>Tasks for Canvas</em>) because its free version transforms Canvas with Midnight dark mode, custom dashboard cards, and GPA rings.
                            </p>
                            <p className="text-xs sm:text-base text-purple-200 leading-relaxed max-w-3xl mx-auto">
                                But before you spend <strong>$19.99/month</strong> on the new <em>&ldquo;BetterCampus Pro&rdquo;</em> AI add-on (which only gives 20 one-time trial credits, only works on Canvas, and opens an unshielded sidebar), see why thousands of students keep <strong>BetterCampus Free ($0)</strong> and pair it with <strong>ExamGhost (`5 Free Solves / Day` or `$8.25/mo` Academic Pass)</strong>.
                            </p>
                        </div>

                        {/* 3-Card Synergy Equation Strip */}
                        <div className="grid lg:grid-cols-11 gap-4 items-stretch mb-10 relative z-10">
                            {/* Left: BetterCampus Free */}
                            <div className="lg:col-span-5 rounded-3xl bg-white/5 border border-purple-400/30 p-6 flex flex-col justify-between backdrop-blur-sm">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="inline-flex items-center gap-2 font-display font-bold text-base text-white">
                                            <Palette className="w-4 h-4 text-purple-300" />
                                            1. BetterCampus (Free Tier)
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-purple-500/25 text-purple-200 font-mono text-[11px] font-bold">
                                            KEEP INSTALLED ($0)
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                        The undisputed gold standard for Canvas dashboard aesthetics and organization. Every feature that made BetterCanvas famous is 100% free:
                                    </p>
                                    <ul className="space-y-2 text-xs text-slate-200 mb-4">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
                                            <span>Custom Canvas Dark Mode &amp; community themes</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
                                            <span>Tasks for Canvas assignment rings &amp; to-do tracker</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
                                            <span>Semester GPA calculator &amp; custom card covers</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-[11px] text-rose-200 font-mono">
                                    Skip BetterCampus Pro ($19.99/mo): 20-credit trial cap, Canvas-only, 0 blur shield
                                </div>
                            </div>

                            {/* Center Plus Badge */}
                            <div className="lg:col-span-1 flex items-center justify-center py-2">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-400 text-slate-950 font-display font-extrabold text-xl flex items-center justify-center shadow-lg">
                                    <Plus className="w-6 h-6 stroke-[2.5]" />
                                </div>
                            </div>

                            {/* Right: ExamGhost */}
                            <div className="lg:col-span-5 rounded-3xl bg-emerald-950/70 border-2 border-emerald-400/50 p-6 flex flex-col justify-between backdrop-blur-sm">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="inline-flex items-center gap-2 font-display font-bold text-base text-white">
                                            <Zap className="w-4 h-4 text-emerald-300" />
                                            2. ExamGhost (v4.2 Stealth + Study Hub)
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-mono text-[11px] font-bold">
                                            5 FREE / DAY
                                        </span>
                                    </div>
                                    <p className="text-xs text-emerald-100 leading-relaxed mb-4">
                                        Mounts inside a Closed Shadow DOM root on top of your BetterCampus dark mode with zero CSS interference—and powers all your exams &amp; homework:
                                    </p>
                                    <ul className="space-y-2 text-xs text-white mb-4">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                                            <span><strong>0.3s `Double-Click` &amp; `Alt+S` Vision Snip</strong> (`Alt+1/2/3` Stealth)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                                            <span><strong>100% Focus Shield</strong> (Silences SpeedGrader `window.blur` logs)</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                                            <span><strong>3-Model Study Hub:</strong> Claude 3.7 Sonnet + ChatGPT + DeepSeek-R1</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3 rounded-xl bg-black/40 border border-emerald-400/30 text-[11px] text-emerald-300 font-mono">
                                    Works on Canvas + Blackboard, ALEKS, McGraw-Hill &amp; 20+ LMSs · $8.25/mo Academic Pass
                                </div>
                            </div>
                        </div>

                        {/* Hero CTAs */}
                        <div className="flex flex-wrap items-center justify-center gap-3.5 relative z-10">
                            <Link prefetch={false}
                                href="/#pricing"
                                className="px-7 py-4 rounded-full text-sm sm:text-base font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lift inline-flex items-center gap-2.5 transition-colors"
                            >
                                <FaChrome className="w-4 h-4 text-slate-950" aria-hidden="true" />
                                <span>Add ExamGhost — 5 Free Solves / Day ($0 No Card)</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 inline-flex items-center gap-2 transition-colors"
                            >
                                <MousePointerClick className="w-4 h-4 text-emerald-300" />
                                <span>Try Live Dark-Mode Quiz Demo</span>
                            </Link>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-4 rounded-full text-sm sm:text-base font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white inline-flex items-center gap-2 transition-colors"
                            >
                                <FaDiscord className="w-4 h-4" aria-hidden="true" />
                                <span>Student Discord</span>
                            </a>
                        </div>
                    </div>
                </header>

                {/* =====================================================================
                    INTERACTIVE MOTION DEMO: BETTERCAMPUS CO-PILOT DEMO
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="Interactive BetterCampus + ExamGhost Co-Pilot Demo">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <span className="px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                            Interactive Co-Pilot Simulation
                        </span>
                        <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-ink mb-3">
                            See BetterCampus Dark Mode + ExamGhost Closed Shadow DOM in Action
                        </h2>
                        <p className="text-xs sm:text-base text-ink-secondary">
                            Experience how ExamGhost runs invisibly on top of your BetterCampus dark theme—and why it outperforms the $19.99/mo BetterCampus Pro sidebar.
                        </p>
                    </div>

                    <BetterCampusCoPilotDemo />
                </section>

                {/* =====================================================================
                    BESPOKE SECTION:
                    "How to Run BetterCampus + ExamGhost Together with Zero Extension Conflicts"
                    + "BetterCampus Pro ($19.99/mo) vs ExamGhost Audit"
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="Zero Conflict Setup and BetterCampus Pro Comparison">
                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 md:p-12 shadow-card">
                        {/* Part A: How to Run Both Together with Zero Extension Conflicts */}
                        <div className="mb-14">
                            <div className="max-w-3xl mb-8">
                                <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                    Zero-Conflict Architecture Guide
                                </span>
                                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight leading-[1.1] mb-3">
                                    How to Run BetterCampus + ExamGhost Together with Zero Extension Conflicts
                                </h2>
                                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                    Why do cheap quiz extensions break BetterCampus Dark Mode with ugly white rectangles, while ExamGhost blends in with zero visual glitches? It comes down to how each extension interacts with the browser DOM:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Step 1 */}
                                <div className="rounded-3xl bg-[#faf7f2] border border-black/10 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 rounded-full bg-purple-950 text-white font-mono text-xs font-bold">
                                                LAYER 01 // HOST CSS
                                            </span>
                                            <Moon className="w-5 h-5 text-purple-800" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-ink mb-2">
                                            BetterCampus Styles the Host Canvas DOM
                                        </h3>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                            BetterCampus (ID <code className="bg-black/5 px-1 rounded">cndibmoanboadcifjkjbdpjgfedanolh</code>) injects custom CSS variables into the top-level Canvas document to apply dark mode backgrounds, custom fonts, and dashboard GPA rings.
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white border border-black/5 font-mono text-[11px] text-purple-950">
                                        Scope: `document.documentElement` CSS variables
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="rounded-3xl bg-[#faf7f2] border border-black/10 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 rounded-full bg-emerald-900 text-white font-mono text-xs font-bold">
                                                LAYER 02 // SHADOW ROOT
                                            </span>
                                            <EyeOff className="w-5 h-5 text-emerald-800" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-ink mb-2">
                                            ExamGhost Mounts in a Closed Shadow DOM
                                        </h3>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                            Unlike extensions that dump global <code className="bg-black/5 px-1 rounded">content.css</code> stylesheets into the page, ExamGhost encapsulates its entire UI inside <code className="bg-black/5 px-1 rounded">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</code>—so zero CSS rules ever leak out or overwrite your dark mode.
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white border border-black/5 font-mono text-[11px] text-emerald-900">
                                        Scope: Isolated Closed Shadow Root (0 CSS leaks)
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="rounded-3xl bg-[#faf7f2] border border-black/10 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 rounded-full bg-ink text-white font-mono text-xs font-bold">
                                                LAYER 03 // HOTKEY CONTROL
                                            </span>
                                            <Zap className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-ink mb-2">
                                            Stealth Modes Match Dark Rooms Automatically
                                        </h3>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                            Use <code className="bg-black/5 px-1 rounded">Double-Click</code> or <code className="bg-black/5 px-1 rounded">Alt+S</code> to solve, and switch on the fly between <code className="bg-black/5 px-1 rounded">Alt+1</code> Invisible auto-tick, <code className="bg-black/5 px-1 rounded">Alt+2</code> low-contrast Stealth badge, or <code className="bg-black/5 px-1 rounded">Alt+3</code> Explain—with <code className="bg-black/5 px-1 rounded">⌘+Shift+U</code> Master Toggle.
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white border border-black/5 font-mono text-[11px] text-ink">
                                        Result: 100% Dark-Room Safe + 0 SpeedGrader Flags
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Part B: Why BetterCampus Pro ($19.99/mo) Loses to BetterCampus Free + ExamGhost */}
                        <div className="rounded-3xl bg-[#14121d] text-white p-6 sm:p-9 border border-purple-500/30">
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-7 border-b border-white/10">
                                <div>
                                    <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs font-mono font-bold uppercase tracking-wider mb-2.5 inline-block">
                                        Paid Add-On Audit: BetterCampus Pro ($19.99/mo) vs ExamGhost
                                    </span>
                                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                        Why &ldquo;BetterCampus Pro&rdquo; ($19.99/mo) Loses to Pairing Free BetterCampus + ExamGhost
                                    </h3>
                                </div>
                                <div className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-3.5 py-2 rounded-xl border border-emerald-400/30 shrink-0">
                                    Save $140+/yr &amp; Unlock 3 Frontier Models
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                {/* BetterCampus Pro ($19.99/mo) Card */}
                                <div className="rounded-2xl bg-rose-950/40 border border-rose-500/30 p-5 sm:p-6">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-rose-500/20">
                                        <span className="font-display font-bold text-base text-rose-200">
                                            BetterCampus Pro AI Add-On
                                        </span>
                                        <span className="px-2.5 py-1 rounded bg-rose-950 text-rose-300 font-mono text-xs font-bold border border-rose-500/30">
                                            $19.99 / month ($239.88/yr)
                                        </span>
                                    </div>
                                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                            <span><strong>One-Time 20-Credit Free Trial:</strong> Once you use 20 trial credits, you are locked out unless you pay $19.99/mo.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                            <span><strong>Canvas-Only Lock-In:</strong> Does not work on Blackboard Ultra, Moodle, D2L Brightspace, McGraw-Hill Connect, ALEKS, or Pearson MyLab.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                            <span><strong>Visible Sidebar &amp; Unshielded Blur:</strong> Opens an obvious AI assistant sidebar without Focus Shield (`window.blur`) suppression during exams.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                            <span><strong>Basic Single-Model Wrapper:</strong> No ability to switch between Claude 3.7 Sonnet, ChatGPT o3-mini/4o, and DeepSeek-R1.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* BetterCampus Free + ExamGhost Card */}
                                <div className="rounded-2xl bg-emerald-950/40 border border-emerald-500/40 p-5 sm:p-6">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/20">
                                        <span className="font-display font-bold text-base text-emerald-200">
                                            BetterCampus (Free) + ExamGhost
                                        </span>
                                        <span className="px-2.5 py-1 rounded bg-emerald-400 text-slate-950 font-mono text-xs font-bold">
                                            5 Free/Day or $8.25/mo ($99/yr)
                                        </span>
                                    </div>
                                    <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>5 Free Solves / Day Forever ($0):</strong> Auto-refills every 24 hours with no credit card required.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Works Across 20+ University LMSs:</strong> Covers Canvas Classic &amp; New Quizzes (LTI 1.3), Blackboard, Moodle, D2L, ALEKS, McGraw-Hill, and Pearson.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>True Exam Stealth + Focus Shield:</strong> `Double-Click` &amp; `Alt+S` Vision Snip with `Alt+1` Invisible mode, `⌘+Shift+U` Panic Wipe, and 0 SpeedGrader blur flags.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>2-in-1 Multi-Model Study Hub:</strong> Full access to <strong>Claude 3.7 Sonnet + ChatGPT (4o/o3-mini) + DeepSeek-R1</strong> for essays, PDFs, and LaTeX math proofs.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Pricing Tiers Bar */}
                            <div className="grid sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-center text-xs">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div className="font-mono font-bold text-emerald-300 text-sm">5 Free / Day</div>
                                    <div className="text-[11px] text-slate-300 mt-0.5">$0 · Auto-refills every 24h</div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div className="font-mono font-bold text-white text-sm">$19 / month</div>
                                    <div className="text-[11px] text-slate-300 mt-0.5">Monthly Sprint Pass</div>
                                </div>
                                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40">
                                    <div className="font-mono font-bold text-emerald-300 text-sm">$8.25 / mo ($99/yr)</div>
                                    <div className="text-[11px] text-emerald-100 mt-0.5">Academic Year Pass (Best Value)</div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div className="font-mono font-bold text-white text-sm">$199 One-Time</div>
                                    <div className="text-[11px] text-slate-300 mt-0.5">Lifetime Degree Pass</div>
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
                    3-COLUMN CAPABILITY MATRIX (EXAMGHOST VS BETTERCAMPUS FREE VS PRO)
                    + TECHNICAL MANIFEST DRAWER
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="Feature Comparison Table">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            3-Way Breakdown: ExamGhost vs BetterCampus Free vs BetterCampus Pro
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            See why the winning move is keeping BetterCampus Free for themes and adding ExamGhost for AI solving.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="bg-[#f7f4ee] border-b border-black/10">
                                        <th className="py-4 px-5 font-bold text-ink w-[31%]">Feature / Capability</th>
                                        <th className="py-4 px-5 font-extrabold text-emerald-950 bg-emerald-100/60 text-center w-[25%]">
                                            ExamGhost (v4.2 Stealth + Hub)
                                        </th>
                                        <th className="py-4 px-5 font-bold text-purple-950 bg-purple-100/40 text-center w-[22%]">
                                            BetterCampus (Free Tier)
                                        </th>
                                        <th className="py-4 px-5 font-bold text-rose-950 bg-rose-50/70 text-center w-[22%]">
                                            BetterCampus Pro ($19.99/mo)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-5">
                                            <div className="font-bold text-ink">Primary Role in Your Stack</div>
                                            <div className="text-xs text-ink-muted">What it does best</div>
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            0.3s Stealth Exam Solver + 3-Model Study Hub
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-purple-900">
                                            Canvas Dark Mode, GPA Rings &amp; To-Do Cards
                                        </td>
                                        <td className="py-4 px-5 text-center text-ink-secondary">
                                            Basic Canvas Sidebar AI Add-On
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-5">
                                            <div className="font-bold text-ink">Free Starter Allowance</div>
                                            <div className="text-xs text-ink-muted">No credit card required</div>
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 5 Free Solves / Day (Auto-Refills Every 24h)
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-purple-900">
                                            ✓ 100% Free Themes &amp; GPA Tools
                                        </td>
                                        <td className="py-4 px-5 text-center font-semibold text-rose-800">
                                            20 one-time trial credits only
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-5">
                                            <div className="font-bold text-ink">In-Quiz Stealth &amp; Display Modes</div>
                                            <div className="text-xs text-ink-muted">Double-click &amp; hotkey control</div>
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ `Double-Click`, `Alt+1` Invisible, `Alt+2` Stealth, `Alt+3` Explain
                                        </td>
                                        <td className="py-4 px-5 text-center text-ink-muted">
                                            N/A (No AI solver)
                                        </td>
                                        <td className="py-4 px-5 text-center font-semibold text-rose-800">
                                            ✗ Visible sidebar UI (No stealth modes)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-5">
                                            <div className="font-bold text-ink">Focus Shield (Tab-Blur Protection)</div>
                                            <div className="text-xs text-ink-muted">Blocks SpeedGrader `window.blur` logs</div>
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 100% Intercepted (0 SpeedGrader flags)
                                        </td>
                                        <td className="py-4 px-5 text-center font-semibold text-rose-800">
                                            ✗ None
                                        </td>
                                        <td className="py-4 px-5 text-center font-semibold text-rose-800">
                                            ✗ Unshielded sidebar focus
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-5">
                                            <div className="font-bold text-ink">Hybrid Vision + DOM Snip (`Alt+S`)</div>
                                            <div className="text-xs text-ink-muted">Solves graphs, circuits &amp; LTI iframes in 0.8s</div>
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Built-In `Alt+S` Vision + Subframe Engine
                                        </td>
                                        <td className="py-4 px-5 text-center text-ink-muted">
                                            N/A
                                        </td>
                                        <td className="py-4 px-5 text-center font-semibold text-rose-800">
                                            ✗ Fails on non-Canvas &amp; locked &lt;canvas&gt; graphs
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-5">
                                            <div className="font-bold text-ink">Study &amp; Homework AI Workspace</div>
                                            <div className="text-xs text-ink-muted">Essays, syllabus PDFs &amp; step-by-step LaTeX math</div>
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Claude 3.7 Sonnet + ChatGPT (4o/o3) + DeepSeek-R1
                                        </td>
                                        <td className="py-4 px-5 text-center text-ink-muted">
                                            N/A
                                        </td>
                                        <td className="py-4 px-5 text-center font-semibold text-rose-800">
                                            Single default model wrapper
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-5">
                                            <div className="font-bold text-ink">Multi-LMS Coverage</div>
                                            <div className="text-xs text-ink-muted">Blackboard, Moodle, D2L, ALEKS, McGraw-Hill</div>
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 20+ University LMS &amp; Publisher Portals
                                        </td>
                                        <td className="py-4 px-5 text-center text-ink-secondary">
                                            Canvas Only
                                        </td>
                                        <td className="py-4 px-5 text-center font-semibold text-rose-800">
                                            Canvas Only
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-5">
                                            <div className="font-bold text-ink">Pricing &amp; Annual Cost</div>
                                            <div className="text-xs text-ink-muted">Full academic year comparison</div>
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            $8.25/mo ($99/yr) · $19/mo · $199 Lifetime
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-purple-900">
                                            $0 Forever (Themes &amp; GPA)
                                        </td>
                                        <td className="py-4 px-5 text-center font-bold text-rose-800">
                                            $19.99/mo ($239.88/yr · No Lifetime)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <details className="border-t border-black/10 bg-[#faf8f4] px-6 py-4 text-xs group">
                            <summary className="cursor-pointer font-mono font-bold text-ink-secondary flex items-center justify-between list-none">
                                <span className="flex items-center gap-2 m-0 inline">
                                    <Terminal className="w-4 h-4 text-ink-muted" />
                                    <h3 className="font-bold m-0 inline">View Technical Chrome Web Store &amp; Co-Existence Audit (BetterCampus 2026)</h3>
                                </span>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="mt-4 pt-3 border-t border-black/5 grid sm:grid-cols-2 gap-4 text-ink-secondary font-mono text-[11px] leading-relaxed">
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Chrome Web Store Listing</div>
                                    Extension ID <code className="bg-black/5 px-1 rounded">cndibmoanboadcifjkjbdpjgfedanolh</code>, unified from BetterCanvas and Tasks for Canvas into BetterCampus (2,000,000+ users, 4.1★ across 4.6K ratings).
                                </div>
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Shadow DOM Co-Existence Verification</div>
                                    BetterCampus mutates root CSS custom properties on <code className="bg-black/5 px-1 rounded">:root</code>; ExamGhost mounts inside an isolated closed Shadow Root with zero global selector overlap.
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* =====================================================================
                    STUDENT REVIEW + FAQ
                ===================================================================== */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-[#f3ecfc] border border-black/10 p-7 sm:p-10 mb-16 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-1 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white text-purple-950 text-xs font-bold border border-black/10">
                                Runs BetterCampus (Free) + ExamGhost Together
                            </span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-2xl font-bold text-ink leading-snug mb-5">
                            &ldquo;I&apos;ve used BetterCanvas since freshman year for dark mode and GPA rings. When they added a $19.99/mo Pro AI paywall after 20 credits, I tried ExamGhost instead. It gives me 5 free solves every day, never breaks my dark mode theme, works on my McGraw-Hill chemistry homework too, and the $99/yr pass gave me Claude 3.7 and DeepSeek-R1 in the Study Hub for less than half the price.&rdquo;
                        </blockquote>
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-black/10 text-xs text-ink-secondary">
                            <div>
                                <strong className="text-ink">Maya L.</strong> · Biochemistry Junior, UCLA
                            </div>
                            <span className="font-bold text-emerald-800">Zero CSS Conflicts · 100% Clean SpeedGrader Logs</span>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Common questions from BetterCampus users adding ExamGhost to Chrome.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        {(jsonLd["@graph"][3] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 sm:p-6 shadow-sm"
                                open={index === 0}
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none font-display font-bold text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180 shrink-0 ml-3" />
                                </summary>
                                <p className="mt-3.5 text-sm text-ink-secondary leading-relaxed pt-3 border-t border-black/5">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* =====================================================================
                    INLINE CONVERSION BAR + RELATED AUDITS
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#e2d3fa] via-[#d8e2fc] to-[#cdeecb] border border-black/10 p-7 sm:p-10 shadow-card flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-black/10 text-xs font-bold text-purple-950 mb-3">
                                <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                                <span>Complete Your 2026 Canvas Stack in 30 Seconds</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                Keep BetterCampus for Dark Mode. Add ExamGhost for 0.3s Solves + 3-Model Study AI.
                            </h2>
                            <p className="text-sm text-ink-secondary leading-relaxed">
                                Start with <strong>5 Free Solves / Day</strong> (auto-refills every 24h, $0 no credit card required), zero stylesheet conflicts, and full SpeedGrader Focus Shield included.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <Link prefetch={false}
                                href="/#pricing"
                                className="btn-dark px-6 py-3.5 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                            >
                                <FaChrome className="w-4 h-4 text-[#e2d3fa]" />
                                <span>Start 5 Free Solves / Day</span>
                            </Link>
                            <Link prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-white hover:bg-cream text-ink border border-black/15 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <span>Test Live Demo</span>
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
                    <div className="border-t border-black/10 pt-10">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-display text-lg font-bold text-ink">
                                Compare More Canvas &amp; LMS Extensions
                            </h2>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="text-xs font-bold text-purple-900 hover:underline flex items-center gap-1">
                                <span>View All 57 Audits</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <Link prefetch={false} href="/canvashack-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CanvasHack</div>
                                <div className="text-[11px] text-ink-muted">$149.99 Tab Blocker (No AI)</div>
                            </Link>
                            <Link prefetch={false} href="/transcript-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Transcript AI</div>
                                <div className="text-[11px] text-ink-muted">&ldquo;The Button&rdquo; DOM &amp; Notebook Audit</div>
                            </Link>
                            <Link prefetch={false} href="/coursology-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Coursology</div>
                                <div className="text-[11px] text-ink-muted">Study Podcasts vs Exam Stealth</div>
                            </Link>
                            <Link prefetch={false} href="/quizonator-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Quizonator</div>
                                <div className="text-[11px] text-ink-muted">LTI 1.3 Iframe &amp; New Quizzes Test</div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
