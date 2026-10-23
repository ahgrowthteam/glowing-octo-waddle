import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
    ShieldCheck, 
    ShieldAlert, 
    Zap, 
    Clock, 
    DollarSign, 
    Star, 
    ChevronDown, 
    ArrowRight, 
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    Cpu,
    Database,
    FileWarning
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "FastSolve vs ExamGhost (2026) — Forced Auto-Fill DOM Audit",
    },
    description: "Compare FastSolve (fastsolve.app) with ExamGhost. Avoid forced DOM auto-fill mutations and cloud question logging with 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/fastsolve-vs-examghost",
    },
    openGraph: {
        title: "FastSolve vs ExamGhost (2026) — Forced Auto-Fill DOM Audit",
        description: "Compare FastSolve (fastsolve.app) with ExamGhost. Avoid forced DOM auto-fill mutations and cloud question logging with 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/fastsolve-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "FastSolve vs ExamGhost (2026) — Forced Auto-Fill DOM Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FastSolve vs ExamGhost (2026) — Forced Auto-Fill DOM Audit",
        description: "Compare FastSolve (fastsolve.app) with ExamGhost. Avoid forced DOM auto-fill mutations and cloud question logging with 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function FastSolveComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-14",
                "dateModified": "2026-03-20",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/fastsolve-vs-examghost#webpage",
                "url": "https://examghost.com/fastsolve-vs-examghost",
                "name": "FastSolve vs ExamGhost (2026 Review) | Gemini Flash Speed vs Focus Stealth",
                "description": "Technical evaluation comparing FastSolve (fastsolve.app) and ExamGhost across Canvas SpeedGrader audit log stealth, STEM model routing, data retention, and pricing.",
                "breadcrumb": { "@id": "https://examghost.com/fastsolve-vs-examghost#breadcrumb" },
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
                        "name": "FastSolve",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web Application / Chrome Extension",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "99.00",
                            "priceCurrency": "USD",
                            "offerCount": "5"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/fastsolve-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "FastSolve vs ExamGhost", "item": "https://examghost.com/fastsolve-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/fastsolve-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does FastSolve protect against Canvas tab-switch tracking or DOM mutation checks?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. FastSolve (Chrome ID gpbmomndeioigacdailloflpngipnfgh, v3.3.15) does not intercept window.blur or document.visibilitychange events, and its documentation admits that all three modes (Homework, Sneaky, Invisible) forcibly auto-fill answers directly into the host LMS input DOM while storing auth tokens in browser localStorage."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does FastSolve struggle on multi-step ALEKS and college STEM problems?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "FastSolve's Smart Model Routing explicitly routes math and science queries to lightweight Gemini Flash models for speed, and its own FAQ admits that multi-step math on ALEKS is 'not perfect; always read the worked solution before submitting.' ExamGhost uses full-reasoning multi-model STEM consensus."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does FastSolve log and retain student quiz questions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. FastSolve's official privacy policy explicitly states that they 'retain solve diagnostics, including question content and answers, without automatic expiration to investigate issues and improve reliability.' ExamGhost operates a strict zero-retention ephemeral pipeline."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does FastSolve pricing compare to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "FastSolve offers 10 free multiple-choice solves per day, then charges $9.99/week ($39.96/mo), $19.99/month, $49/semester, or $99/year with refunds handled only case-by-case via email. ExamGhost gives you 50 Free Solves upfront (no card required), plus transparent options: $19/mo, $99/yr ($8.25/mo), or $199 Lifetime."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-sky-200/50 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">

                {/* Breadcrumb Navigation */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-semibold">FastSolve vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: 3 Verbatim FastSolve Confessions (Forced Auto-Fill, Gemini Flash Math, Permanent Question Retention) */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#bfe3f6] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-sky-950 text-[#bfe3f6] text-[11px] font-bold uppercase tracking-wider">
                                    STEM Model &amp; Data Retention Review
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    fastsolve.app vs ExamGhost
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-ink">
                                5,000 Users · 4.1★ Chrome Store (26 Ratings)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column: High-converting student-first copy */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-sky-950/10 border border-sky-950/20 text-xs font-bold text-sky-950 mb-4">
                                    Gemini Flash STEM Shortcut · Forced Auto-Fill · Permanent Question Logging
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    FastSolve routes your STEM exams to Gemini Flash—and keeps your question logs forever.
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    Before you pay <strong>$9.99/week ($39.96/mo)</strong> for FastSolve, read what their own docs admit: (1) even their <em>&ldquo;Invisible&rdquo;</em> mode <strong>forcibly auto-fills host LMS inputs</strong> (<code>isTrusted: false</code>); (2) math and science are routed to lightweight <strong>Gemini Flash</strong> for speed (admitting ALEKS multi-step math is <em>&ldquo;not perfect&rdquo;</em>); and (3) they retain your quiz questions and answers <strong>without automatic expiration</strong>.
                                </p>
                                <p className="text-sm sm:text-base text-sky-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost runs full-reasoning Multi-Model STEM Consensus inside a zero-retention Closed Shadow DOM HUD—starting with <strong>50 Free Solves ($0, no credit card)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false} 
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                                        <span>Start 50 Free Solves · $0 No Card</span>
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5"
                                    >
                                        <span>Try Live Canvas Demo</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="https://discord.gg/aCcsyKYJq4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-[#3b47d6] hover:bg-[#313bb5] text-white shadow-sm inline-flex items-center gap-2"
                                    >
                                        <FaDiscord className="w-4 h-4 text-white" aria-hidden="true" />
                                        <span>Student Discord</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Verbatim FastSolve Documentation & Privacy Receipt Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-3.5">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                                            <FileWarning className="w-4 h-4 text-rose-600" />
                                            3 Verbatim FastSolve Disclosures
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">fastsolve.app</span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-rose-800 mb-0.5">
                                            1. On &ldquo;Invisible&rdquo; &amp; &ldquo;Sneaky&rdquo; Modes:
                                        </div>
                                        <p className="text-rose-950 font-semibold italic">
                                            &ldquo;Every mode auto-fills the answer — they only differ in visual feedback.&rdquo;
                                        </p>
                                        <span className="text-[10px] text-rose-800 block mt-0.5">
                                            → Mutates host DOM inputs (isTrusted: false) in every mode
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-amber-900 mb-0.5">
                                            2. On STEM Routing &amp; ALEKS Math:
                                        </div>
                                        <p className="text-amber-950 font-semibold italic">
                                            &ldquo;Math and science route to Gemini Flash for speed... multi-step math on ALEKS is not perfect.&rdquo;
                                        </p>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-300 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-slate-800 mb-0.5">
                                            3. On Privacy &amp; Question Retention:
                                        </div>
                                        <p className="text-slate-900 font-semibold italic">
                                            &ldquo;We retain solve diagnostics, including question content and answers, without automatic expiration.&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">STEM Model Routing</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Deep STEM Consensus</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">FastSolve: Gemini Flash Shortcut</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">DOM &amp; Storage Footprint</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Closed Shadow DOM</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">FastSolve: Forced auto-fill + localStorage</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Data Retention Policy</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Zero-Retention RAM</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">FastSolve: Kept without expiration</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Pricing Model</span>
                                <span className="font-bold text-emerald-800">50 Free · $19/mo · $99/yr · $199 Life</span>
                                <span className="text-ink-muted block text-[10px] mt-0.5">FastSolve: $9.99/wk ($39.96/mo)</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB FASTSOLVE REALITY SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive FastSolve Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Interactive Technical Comparison
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                Inspect FastSolve&apos;s 3 Engineering Trade-Offs
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click each tab below to compare FastSolve&apos;s forced DOM auto-fill, its Gemini Flash math shortcut, and its permanent question retention against ExamGhost.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="fs_tabs" id="fs_modes" className="sr-only peer/fsmodes" defaultChecked />
                        <input type="radio" name="fs_tabs" id="fs_stem" className="sr-only peer/fsstem" />
                        <input type="radio" name="fs_tabs" id="fs_privacy" className="sr-only peer/fsprivacy" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#eef6fb] border border-sky-950/10 mb-8">
                            <label
                                htmlFor="fs_modes"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/fsmodes:bg-ink peer-checked/fsmodes:text-white peer-checked/fsmodes:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. Forced Auto-Fill in All 3 Modes</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Homework, Sneaky &amp; Invisible mutate DOM</div>
                            </label>
                            <label
                                htmlFor="fs_stem"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/fsstem:bg-ink peer-checked/fsstem:text-white peer-checked/fsstem:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. Gemini Flash STEM Shortcut</div>
                                <div className="text-[11px] opacity-75 mt-0.5">ALEKS warning vs Deep STEM Consensus</div>
                            </label>
                            <label
                                htmlFor="fs_privacy"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/fsprivacy:bg-ink peer-checked/fsprivacy:text-white peer-checked/fsprivacy:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. Permanent Logs &amp; $9.99/Wk</div>
                                <div className="text-[11px] opacity-75 mt-0.5">No auto-expiry vs Ephemeral RAM</div>
                            </label>
                        </div>

                        {/* TAB 1: Forced Auto-Fill in All 3 Modes */}
                        <div className="hidden peer-checked/fsmodes:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <AlertTriangle className="w-3.5 h-3.5" />
                                        FastSolve: &ldquo;Invisible&rdquo; Still Auto-Fills the Host DOM
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        All 3 modes programmatically mutate your quiz inputs
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        FastSolve advertises three modes: <strong>Homework</strong>, <strong>Sneaky</strong>, and <strong>Invisible</strong>. Students select <em>Invisible</em> assuming the extension won&apos;t touch the exam page.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Yet FastSolve&apos;s own documentation admits: <em>&ldquo;Every mode auto-fills the answer — they only differ in visual feedback.&rdquo;</em> When you double-click, FastSolve programmatically selects radio buttons or mutates text fields (<code>isTrusted: false</code>), writes auth tokens to host <code>localStorage</code>, and fails to block <code>window.blur</code> when you open its popup.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Footprint: Forced DOM auto-fill + localStorage auth + popup blur
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: True Non-Invasive Stealth Modes
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        View the answer silently—click it yourself with real hardware
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never forces synthetic JavaScript auto-fill clicks onto your Canvas or ALEKS inputs. You choose between a subtle 1px Invisible Dot cue or a 0%–100% Opacity Closed Shadow DOM HUD, and click the answer yourself (`event.isTrusted: true`).
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Zero Host `localStorage` Tokens:</strong> All session state is sandboxed inside Chrome&apos;s encrypted extension storage.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Focus Shield Active:</strong> Intercepts 100% of <code>window.blur</code> and <code>visibilitychange</code> events.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Footprint: 0 Forced Input Mutations · 0 localStorage Keys
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: Gemini Flash STEM Shortcut */}
                        <div className="hidden peer-checked/fsstem:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Cpu className="w-3.5 h-3.5" />
                                        FastSolve: Cheap Gemini Flash Routing for STEM
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Sacrificing calculus &amp; chemistry accuracy to save API costs
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Under its Smart Model Routing breakdown, FastSolve explicitly admits: <strong>&ldquo;Math and science route to Gemini Flash for speed.&rdquo;</strong>
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Lightweight Flash models are designed for cheap chat summarization—not multi-step university stoichiometry, organic chemistry, or calculus integrals. That&apos;s why FastSolve&apos;s own ALEKS FAQ warns students: <em>&ldquo;Multi-step math on ALEKS is not perfect; always read the worked solution before submitting.&rdquo;</em>
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    STEM Model: Lightweight Gemini Flash · Admitted ALEKS errors
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Zap className="w-3.5 h-3.5" />
                                        ExamGhost: Full-Reasoning Multi-Model STEM Consensus
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Verified symbolic math &amp; Snap-It Vision OCR in 0.3s
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never downgrades your STEM problems to a cheap Flash model. Every calculus, physics, chemistry, and statistics question is verified across our flagship multi-model STEM consensus pipeline—including locked diagrams snipped with <code>⌘+Shift+S</code>.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>ALEKS, WebAssign &amp; Pearson MyLab Ready:</strong> Handles multi-step symbolic algebra, significant figures, and LaTeX matrices accurately.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Included on All 50 Free Solves:</strong> Test our full STEM accuracy before spending a dollar.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    STEM Model: Flagship Multi-Model Consensus + Vision OCR
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Permanent Logs & $9.99/Wk Billing */}
                        <div className="hidden peer-checked/fsprivacy:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Database className="w-3.5 h-3.5" />
                                        FastSolve: Indefinite Question Retention &amp; $9.99/Wk
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Why let an extension store your exam questions forever?
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        FastSolve&apos;s privacy policy contains a clause every college student should read twice: <strong>&ldquo;We retain solve diagnostics, including question content and answers, without automatic expiration to investigate issues and improve reliability.&rdquo;</strong>
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Meanwhile, its free tier only allows 10 multiple-choice questions per day before pushing a <strong>$9.99/week ($39.96/month)</strong> or <strong>$19.99/month</strong> subscription where refunds are only granted case-by-case via email.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Data Policy: Question content retained without automatic expiration
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: Zero-Retention Ephemeral RAM + Fair Pricing
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Zero stored exam questions. 50 Free Solves upfront.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost processes every text and screenshot query in ephemeral memory and immediately purges the payload once your answer renders—leaving zero permanent database trail of your university exams.
                                    </p>
                                    <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
                                        <div className="p-3 rounded-xl bg-white border border-emerald-200">
                                            <div className="font-display font-extrabold text-lg text-ink">$19<span className="text-xs font-normal text-ink-muted">/mo</span></div>
                                            <div className="text-[11px] font-semibold text-emerald-900">Monthly Pass</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-950 text-white border border-emerald-900">
                                            <div className="font-display font-extrabold text-lg">$8.25<span className="text-xs font-normal text-emerald-200">/mo</span></div>
                                            <div className="text-[11px] font-semibold text-emerald-300">$99/yr Academic</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-emerald-200">
                                            <div className="font-display font-extrabold text-lg text-ink">$199</div>
                                            <div className="text-[11px] font-semibold text-emerald-900">Lifetime Pass</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Data Policy: 0 Question Logs Stored · 14-Day Refund Guarantee
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER AUDIT LOG COMPARISON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="SpeedGrader Audit Log Comparison">
                    <div className="rounded-[32px] bg-ink text-white p-6 sm:p-10 shadow-lift">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Canvas Professor Audit Log View
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                                What Your Professor Sees in SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                Canvas automatically timestamps every time you click off the test window or trigger unshielded input mutations.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* FastSolve Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>FastSolve v3.3.15 Audit Log</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">10:14:02 — Started quiz attempt</div>
                                    <div className="text-slate-300">10:14:38 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        10:15:12 — Stopped viewing the Canvas quiz (0:14)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Triggered by FastSolve extension popup / side-panel blur</span>
                                    </div>
                                    <div className="text-slate-300">10:15:26 — Resumed viewing quiz</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        10:16:04 — Untrusted input event (isTrusted: false) + localStorage token
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ All 3 modes forcibly auto-fill host DOM &amp; store auth in localStorage</span>
                                    </div>
                                    <div className="text-slate-300">10:16:22 — Resumed viewing quiz</div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield Active)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">10:14:02 — Started quiz attempt</div>
                                    <div className="text-slate-300">10:14:38 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        10:15:15 — Answered Question 2 (Normal pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Closed Shadow DOM · Zero blur events or untrusted mutations</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        10:16:02 — Answered Question 3 (Normal pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Focus Shield active · Zero localStorage footprint</span>
                                    </div>
                                    <div className="text-slate-300">10:16:45 — Answered Question 4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HEAD TO HEAD COMPARISON MATRIX + TECHNICAL MANIFEST DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Feature Comparison Table">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-2">
                                Head-to-Head Feature Comparison (2026)
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Complete technical comparison between ExamGhost and FastSolve (v3.3.15).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">FastSolve (fastsolve.app)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Window Blur Suppression)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (No tab-switch flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ None (Canvas logs popup departures)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">DOM &amp; Storage Isolation</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Closed Shadow DOM (Zero localStorage)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Forced DOM auto-fill + localStorage auth</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">STEM &amp; ALEKS AI Engine</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Multi-Model Deep STEM Consensus</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Routes math/science to Gemini Flash</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Question &amp; Answer Data Retention</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Zero-Retention Ephemeral RAM</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Retained indefinitely without expiration</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Answer Delivery Control</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Stealth Indicator Dot or Shadow HUD</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ All 3 modes forcibly auto-fill host inputs</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Panic Switch Hotkey</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+U Instantly Wipes RAM</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ No memory-wipe panic switch</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Chrome Web Store Reputation</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Verified Stealth Build</td>
                                        <td className="py-3.5 px-4 text-ink-muted">4.1★ (26 ratings · 5,000 users)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing Model</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">$9.99/wk ($39.96/mo) · $19.99/mo · $49/sem · $99/yr</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves (All question types, no card)</td>
                                        <td className="py-3.5 px-4 text-ink-muted">10 multiple-choice questions/day</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Refund Policy</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 14-Day Guarantee</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Case-by-case only via email</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (FastSolve)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID &amp; Version:</span>
                                    FastSolve v3.3.15 (<code>gpbmomndeioigacdailloflpngipnfgh</code> · 648KiB · 5,000 users)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Domain &amp; Modes:</span>
                                    <code>fastsolve.app</code> · Modes: Homework, Sneaky, Invisible (all 3 force DOM auto-fill)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Model Routing &amp; Storage:</span>
                                    Math/Science routed to Gemini Flash · Auth tokens stored in host <code>localStorage</code>
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Data Retention Clause:</span>
                                    Retains solve diagnostics (question content &amp; answers) without automatic expiration
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#bfe3f6]/40 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I paid $9.99 a week for FastSolve thinking its &lsquo;Invisible&rsquo; mode wouldn&apos;t touch the page, but it still forcibly auto-filled radio buttons on Canvas and got two multi-step ALEKS chemistry problems wrong because it routes science to Gemini Flash. Switching to ExamGhost gave me 50 free solves to test, accurate STEM steps inside a subtle Shadow DOM dot, and zero SpeedGrader flags.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-sky-900 text-white font-bold flex items-center justify-center text-sm">
                                JR
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Jason R.</div>
                                <div className="text-xs text-ink-muted">Biochemistry Major · University of Florida</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16" aria-label="Frequently Asked Questions">
                    <div className="text-center mb-8">
                        <span className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-2 inline-block">
                            Student FAQ
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                            Frequently Asked Questions: FastSolve vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all"
                                open={index === 0}
                            >
                                <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS (No Duplicate #111111 Footer Box) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#bfe3f6] via-[#d9effb] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-sky-950 uppercase tracking-wider mb-2">
                                    Deep STEM Consensus · Zero Question Retention
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Speed without stealth or STEM accuracy is a trap.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                                    Start with 50 Free Solves on ExamGhost ($0, no card required). Upgrade anytime for $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                                    <span>Get 50 Free Solves</span>
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
                                <Link prefetch={false} href="/canvaswizard-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    CanvasWizard vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/getquizsolve-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    GetQuizSolve vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/usequietly-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    UseQuietly vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-3 rounded-xl bg-ink text-white font-bold transition-colors text-center">
                                    All 57 Extensions Audited →
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
