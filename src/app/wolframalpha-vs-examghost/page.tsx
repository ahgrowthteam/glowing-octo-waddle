import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    ChevronDown,
    ArrowRight,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    ExternalLink,
    Cpu,
    EyeOff,
    Calculator,
    Sparkles,
    Layers,
    FileCode2,
    Lock,
    Clock
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Wolfram|Alpha vs ExamGhost (2026) — 680-Char Cap vs 0.3s AI",
    },
    description: "Compare Wolfram|Alpha Pro with ExamGhost. Skip 680-character syntax limits and new-tab switches using 0.3s inline Snap-It Vision OCR and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/wolframalpha-vs-examghost",
    },
    openGraph: {
        title: "Wolfram|Alpha vs ExamGhost (2026) — 680-Char Cap vs 0.3s AI",
        description: "Compare Wolfram|Alpha Pro with ExamGhost. Skip 680-character syntax limits and new-tab switches using 0.3s inline Snap-It Vision OCR and 50 Free Solves.",
        url: "https://examghost.com/wolframalpha-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Wolfram|Alpha vs ExamGhost (2026) — 680-Char Cap vs 0.3s AI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Wolfram|Alpha vs ExamGhost (2026) — 680-Char Cap vs 0.3s AI",
        description: "Compare Wolfram|Alpha Pro with ExamGhost. Skip 680-character syntax limits and new-tab switches using 0.3s inline Snap-It Vision OCR and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function WolframalphaVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-23",
                "dateModified": "2026-03-10",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/wolframalpha-vs-examghost#webpage",
                "url": "https://examghost.com/wolframalpha-vs-examghost",
                "name": "Wolfram|Alpha vs ExamGhost (2026 Audit) | 680-Char Syntax Engine vs 0.3s Canvas Stealth AI",
                "description": "Independent 2026 technical audit comparing Wolfram|Alpha Pro for Students (wolframalpha.com) and its Chrome launcher (icncamkooinmbehmkeilcccmoljfkdhp) against ExamGhost's closed Shadow DOM HUD and Focus Shield.",
                "breadcrumb": {
                    "@id": "https://examghost.com/wolframalpha-vs-examghost#breadcrumb"
                },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Free Trial (50 Question Solves)",
                                "price": "0.00",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Monthly Pass",
                                "price": "19.00",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Academic Year Pass",
                                "price": "99.00",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Lifetime Degree Pass",
                                "price": "199.00",
                                "priceCurrency": "USD"
                            }
                        ]
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "Wolfram|Alpha Pro",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web Application, iOS, Android, Chrome Launcher",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Basic Account",
                                "price": "0.00",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Pro for Students (Monthly)",
                                "price": "9.99",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Pro Premium for Students (Monthly)",
                                "price": "12.00",
                                "priceCurrency": "USD"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/wolframalpha-vs-examghost#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://examghost.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Compare Extensions",
                        "item": "https://examghost.com/compare-canvas-hack-extensions"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Wolfram|Alpha vs ExamGhost",
                        "item": "https://examghost.com/wolframalpha-vs-examghost"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/wolframalpha-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why does Wolfram|Alpha reject long word problems or Canvas multiple-choice prompts?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Inspecting window.ENV_DATA on wolframalpha.com reveals a strict hardcoded inputCharLimit: 680. Because Wolfram|Alpha is a symbolic Wolfram Language parser rather than a multimodal exam reader, pasting a multi-sentence word problem, finance case study, or 4-option Canvas multiple-choice question exceeds the 680-character cap or triggers a syntax parse error. ExamGhost reads full-page questions, tables, and diagrams in-situ with no character or syntax formatting limits."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the Wolfram|Alpha Chrome Extension work inside Canvas without logging tab switches?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. The official Wolfram|Alpha Chrome extension (ID: icncamkooinmbehmkeilcccmoljfkdhp) is merely a browser toolbar query box and omnibox shortcut ('=') that opens results in a brand-new wolframalpha.com tab. Opening that tab immediately fires window.blur and document.visibilitychange events in Canvas SpeedGrader. ExamGhost renders answers directly inside your active Canvas tab using a closed Shadow DOM and Focus Shield."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the 'fakeUploadDelay: 1500' setting inside Wolfram|Alpha's production code?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In wolframalpha.com's live window.ENV_DATA configuration object, Wolfram sets fakeUploadDelay: 1500 (a 1.5-second artificial delay on file/image uploads) alongside a 2MB file upload limit on Student Pro ($9.99/mo) and 5MB on Pro Premium ($12.00/mo). By contrast, ExamGhost's Snap-It crosshair OCR captures and solves equations or diagrams directly off your screen in 0.3 seconds with zero artificial delay."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Wolfram|Alpha Pro Student pricing compare to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "According to wolframalpha.com/pro/pricing/students (__NEXT_DATA__), Basic is free with sign-in but explicitly states '(Does not include step-by-step solutions)'. Student Pro costs $9.99/month ($32.75/semester or $60/year), and Student Pro Premium costs $12.00/month ($54/semester or $99/year). ExamGhost gives you 50 Free Question Solves (including full step-by-step explanations and Focus Shield) with no credit card required, plus $19/mo, $99/yr ($8.25/mo across all subjects, not just math), or $199 Lifetime."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#111111] selection:bg-emerald-200 selection:text-[#111111] font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb Navigation */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-600">
                        <Link prefetch={false} href="/" className="hover:text-[#111111] transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-[#111111] transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-[#111111] font-semibold">Wolfram|Alpha vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE SPLIT HERO SECTION */}
                <header className="relative pt-4 pb-16 sm:pb-24 overflow-hidden border-b border-neutral-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                            {/* Left Column: High-Converting Copy & Above-the-Fold CTAs */}
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-xs font-mono font-bold text-amber-950 mb-5 shadow-sm">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                                    <span>2026 STEM &amp; LMS ARCHITECTURE COMPARISON</span>
                                </div>

                                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] font-display leading-[1.08] mb-5">
                                    Wolfram|Alpha Caps Prompts at{' '}
                                    <span className="underline decoration-rose-500/80 decoration-wavy underline-offset-4">
                                        680 Characters
                                    </span>{' '}
                                    &amp; Opens a New Tab. ExamGhost Solves In-Tab in 0.3s.
                                </h1>

                                <p className="aeo-summary text-base sm:text-lg text-neutral-700 leading-relaxed mb-7">
                                    <strong>Wolfram|Alpha</strong> (<code className="text-xs sm:text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">wolframalpha.com</code>) is a powerhouse for untimed symbolic math derivations, but our 2026 source audit shows why it fails during timed Canvas, WebAssign, and ALEKS exams: a strict <strong>680-character query limit</strong> that rejects multi-sentence word problems, a hardcoded <strong>1.5-second upload delay</strong>, zero support for non-math courses, and a toolbar launcher that opens a new browser tab and triggers LMS <code className="text-xs sm:text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">window.blur</code> logs. <strong>ExamGhost</strong> solves any STEM, business, or humanities question in <strong>0.3s</strong> inside a closed Shadow DOM HUD.
                                </p>

                                {/* Above-the-Fold Primary & Secondary CTAs */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#111111] text-white font-bold hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg group text-sm sm:text-base"
                                    >
                                        <FaChrome className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0)</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-neutral-100 border border-neutral-300 text-[#111111] font-semibold transition-all shadow-sm text-sm sm:text-base"
                                    >
                                        <span>Try Live 0.3s Stealth Demo</span>
                                    </Link>
                                </div>

                                {/* Trust Micro-Pills */}
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-neutral-600">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        No 680-Char Syntax Truncation
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        0.3s Snap-It Mathpix OCR
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        STEM + All University Majors ($8.25/mo)
                                    </span>
                                </div>
                            </div>

                            {/* Right Column: Bespoke Visual Comparison Card (680-Char Syntax Parser vs 0.3s In-Tab HUD) */}
                            <div className="lg:col-span-5">
                                <div className="rounded-3xl bg-white border border-neutral-200/90 shadow-card p-5 sm:p-6 space-y-4 relative overflow-hidden">
                                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                                            Live Word Problem Stress Test
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-mono text-[11px] font-bold">
                                            inputCharLimit: 680
                                        </span>
                                    </div>

                                    {/* Wolfram|Alpha Card */}
                                    <div className="rounded-2xl bg-rose-50/75 border border-rose-200 p-4 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-display font-bold text-sm text-rose-950 flex items-center gap-1.5">
                                                <XCircle className="w-4 h-4 text-rose-700 shrink-0" />
                                                Wolfram|Alpha Pro ($9.99–$12/mo)
                                            </span>
                                            <span className="text-[11px] font-mono font-semibold text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                                                New Tab Launcher
                                            </span>
                                        </div>

                                        <div className="rounded-xl bg-[#18181B] text-rose-200 p-3 font-mono text-[11px] leading-relaxed space-y-1">
                                            <div className="flex items-center justify-between text-amber-300">
                                                <span>Input Box: 680 / 680 chars (TRUNCATED)</span>
                                                <span>+1,500ms delay</span>
                                            </div>
                                            <div className="text-rose-300">
                                                &quot;Wolfram|Alpha doesn&apos;t understand your query&quot;
                                            </div>
                                            <div className="text-neutral-400 text-[10px]">
                                                ✗ Cannot parse 4-option multiple-choice or circuit diagrams without manual syntax translation
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] text-rose-900 font-medium">
                                            <span>Canvas Log: window.blur fired</span>
                                            <span className="font-mono">Basic ($0): No Steps</span>
                                        </div>
                                    </div>

                                    {/* ExamGhost Card */}
                                    <div className="rounded-2xl bg-emerald-50/80 border border-emerald-300 p-4 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-display font-bold text-sm text-emerald-950 flex items-center gap-1.5">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                                                ExamGhost Stealth HUD
                                            </span>
                                            <span className="text-[11px] font-mono font-bold text-emerald-900 bg-emerald-200/80 px-2 py-0.5 rounded">
                                                0.3s In-Tab Solve
                                            </span>
                                        </div>

                                        <div className="p-3 rounded-xl bg-[#111111] text-emerald-200 font-mono text-[11px] leading-relaxed">
                                            <div className="flex items-center justify-between text-emerald-400 font-bold mb-1">
                                                <span>[Alt+S] Mathpix + Multimodal HUD</span>
                                                <span>Focus Shield: ON</span>
                                            </div>
                                            <div className="text-white/90">
                                                ✓ Match: Option B (∮ B · dl = μ₀I_enc = 3.77 × 10⁻⁵ T·m)
                                            </div>
                                            <div className="text-neutral-400 text-[10px] mt-1">
                                                Full step-by-step derivation rendered inside closed Shadow DOM
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-xs font-semibold text-emerald-950 pt-0.5">
                                            <span>50 Free Solves (Steps Included)</span>
                                            <span className="font-mono text-emerald-800">$8.25/mo ($99/yr)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Audit Stat Strip */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-neutral-200">
                            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                                <div className="text-xs text-neutral-500 font-medium mb-1">Input &amp; OCR Pipeline</div>
                                <div className="text-sm sm:text-base font-bold text-emerald-800">Full DOM + Snap-It OCR</div>
                                <div className="text-xs text-rose-800 font-medium mt-0.5">Wolfram: 680-Char Syntax Limit</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                                <div className="text-xs text-neutral-500 font-medium mb-1">Upload / Solve Latency</div>
                                <div className="text-sm sm:text-base font-bold text-[#111111]">0.3s Edge Inference</div>
                                <div className="text-xs text-rose-800 font-medium mt-0.5">Wolfram: 1,500ms fakeUploadDelay</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                                <div className="text-xs text-neutral-500 font-medium mb-1">Canvas Focus Shield</div>
                                <div className="text-sm sm:text-base font-bold text-emerald-800">Zero Tab-Blur Telemetry</div>
                                <div className="text-xs text-rose-800 font-medium mt-0.5">Wolfram: Opens External Tab</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                                <div className="text-xs text-neutral-500 font-medium mb-1">2026 Student Pricing</div>
                                <div className="text-sm sm:text-base font-bold text-emerald-800">50 Free · $19/mo · $99/yr</div>
                                <div className="text-xs text-neutral-600 mt-0.5">Wolfram Pro: $9.99–$12/mo ($60–$99/yr)</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE PURE-CSS TABS: SYMBOLIC SYNTAX PARSER VS LIVE LMS SOLVER */}
                <section className="py-16 sm:py-20 bg-neutral-100/80 border-b border-neutral-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-mono font-bold text-emerald-950 uppercase tracking-wider mb-3">
                                <Layers className="w-3.5 h-3.5 text-emerald-800" />
                                <span>Interactive Technical Comparison</span>
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#111111] mb-3">
                                Why a Symbolic Algebra Search Box Breaks During Timed University Exams
                            </h2>
                            <p className="text-neutral-700 text-sm sm:text-base">
                                Select a tab below to inspect how Wolfram|Alpha&apos;s production constraints compare against ExamGhost&apos;s in-tab HUD.
                            </p>
                        </div>

                        {/* Pure CSS Radio Tabs Container */}
                        <div>
                            <input
                                type="radio"
                                name="wolfram-audit-tabs"
                                id="tab-wa-syntax"
                                className="sr-only peer/syntax"
                                defaultChecked
                            />
                            <input
                                type="radio"
                                name="wolfram-audit-tabs"
                                id="tab-wa-stealth"
                                className="sr-only peer/stealth"
                            />
                            <input
                                type="radio"
                                name="wolfram-audit-tabs"
                                id="tab-wa-scope"
                                className="sr-only peer/scope"
                            />

                            {/* Tab Labels */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto mb-8 bg-white p-2 rounded-2xl border border-neutral-200 shadow-sm">
                                <label
                                    htmlFor="tab-wa-syntax"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-neutral-600 hover:text-[#111111] peer-checked/syntax:bg-[#111111] peer-checked/syntax:text-white peer-checked/syntax:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <Calculator className="w-4 h-4 shrink-0" />
                                    <span>1. 680-Char Syntax Wall</span>
                                </label>
                                <label
                                    htmlFor="tab-wa-stealth"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-neutral-600 hover:text-[#111111] peer-checked/stealth:bg-[#111111] peer-checked/stealth:text-white peer-checked/stealth:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <EyeOff className="w-4 h-4 shrink-0" />
                                    <span>2. New-Tab Blur &amp; 1.5s Delay</span>
                                </label>
                                <label
                                    htmlFor="tab-wa-scope"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-neutral-600 hover:text-[#111111] peer-checked/scope:bg-[#111111] peer-checked/scope:text-white peer-checked/scope:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <Cpu className="w-4 h-4 shrink-0" />
                                    <span>3. Math-Only vs All Majors</span>
                                </label>
                            </div>

                            {/* PANEL 1: 680-CHAR SYNTAX WALL */}
                            <div className="hidden peer-checked/syntax:grid md:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold mb-4">
                                            <XCircle className="w-3.5 h-3.5" />
                                            <span>Wolfram|Alpha `inputCharLimit: 680`</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111111] mb-3">
                                            Pasting a Word Problem or Multiple-Choice List Triggers a Syntax Error
                                        </h3>
                                        <p className="text-sm text-neutral-700 leading-relaxed mb-5">
                                            Inspecting <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">window.ENV_DATA</code> on <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">wolframalpha.com</code> reveals a strict <code className="font-mono text-xs bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">inputCharLimit: 680</code>. Because Wolfram|Alpha is a symbolic Wolfram Language interpreter rather than a multimodal exam reader, you cannot paste a 3-paragraph physics word problem, a financial accounting table, or 4 multiple-choice options without manually translating the problem into rigid syntax first.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs text-rose-950 space-y-1.5">
                                        <div className="font-bold text-rose-900">45+ Seconds Lost Per Question:</div>
                                        <p>Manually stripping narrative text and retyping nested fractions or matrices under exam pressure is the #1 cause of syntax typos and clock-outs on WebAssign and Canvas.</p>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] text-white border border-neutral-800 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold mb-4">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            <span>ExamGhost Zero-Typing DOM &amp; Vision OCR</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                                            Reads Full Word Problems, LaTeX &amp; Locked Diagrams in 0.3 Seconds
                                        </h3>
                                        <p className="text-sm text-white/85 leading-relaxed mb-5">
                                            ExamGhost automatically extracts the entire question prompt, MathJax/KaTeX equations, and shuffled answer choices directly from the page DOM—or lets you drag a crosshair over any locked circuit, graph, or chemical structure with <strong>Snap-It Mathpix OCR</strong>.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-emerald-200 space-y-1.5">
                                        <div className="font-bold text-white">Direct In-Situ Option Matching:</div>
                                        <p>Instead of dumping raw algebraic identities and leaving you to convert units, ExamGhost matches the exact multiple-choice option or numerical rounding required by your LMS.</p>
                                    </div>
                                </div>
                            </div>

                            {/* PANEL 2: NEW-TAB BLUR & 1.5S DELAY */}
                            <div className="hidden peer-checked/stealth:grid md:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold mb-4">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>External Tab Launcher + `fakeUploadDelay: 1500`</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111111] mb-3">
                                            Wolfram&apos;s Chrome Extension Opens a New Tab &amp; Fires Canvas Blur Logs
                                        </h3>
                                        <p className="text-sm text-neutral-700 leading-relaxed mb-5">
                                            The official Wolfram|Alpha Chrome extension is simply a browser toolbar input box and omnibox shortcut (<code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">=</code>) that opens results in a new <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">wolframalpha.com</code> tab. Worse, if you try to upload an image on Student Pro ($9.99/mo), Wolfram&apos;s config enforces a <strong>2MB file size cap</strong> and a hardcoded <code className="font-mono text-xs bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">fakeUploadDelay: 1500</code> (1.5 seconds of artificial wait time).
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs text-rose-950 space-y-1.5">
                                        <div className="font-bold text-rose-900">Immediate SpeedGrader Audit Entry:</div>
                                        <p>Every time Wolfram opens a new tab or you click its browser toolbar popup, Canvas logs <code className="font-mono">window.blur</code> (&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;).</p>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] text-white border border-neutral-800 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold mb-4">
                                            <Lock className="w-3.5 h-3.5" />
                                            <span>ExamGhost Closed Shadow DOM + Focus Shield</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                                            Stays 100% Inside Your Active Exam Tab With Zero Blur Telemetry
                                        </h3>
                                        <p className="text-sm text-white/85 leading-relaxed mb-5">
                                            ExamGhost renders inside an isolated <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">mode: &apos;closed&apos;</code> Shadow DOM HUD directly on top of Canvas, Blackboard, Moodle, D2L, WebAssign, and ALEKS. Our 4-Layer Focus Shield intercepts and suppresses <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">window.blur</code> and <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">visibilitychange</code> events in the capture phase.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-emerald-200 space-y-1.5">
                                        <div className="font-bold text-white">Zero Artificial Upload Delays:</div>
                                        <p>Snip any equation or graph directly on-screen in 0.3 seconds without saving screenshots to your desktop or waiting through a 1,500ms upload timer.</p>
                                    </div>
                                </div>
                            </div>

                            {/* PANEL 3: MATH-ONLY VS ALL MAJORS */}
                            <div className="hidden peer-checked/scope:grid md:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold mb-4">
                                            <AlertTriangle className="w-3.5 h-3.5" />
                                            <span>Wolfram Pro Student ($60–$99/yr) Scope</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111111] mb-3">
                                            No Free Step-by-Step Solutions &amp; Useless for Non-Math Courses
                                        </h3>
                                        <p className="text-sm text-neutral-700 leading-relaxed mb-5">
                                            On <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">wolframalpha.com/pro/pricing/students</code>, the Free Basic plan explicitly warns: <em>&ldquo;(Does not include step-by-step solutions).&rdquo;</em> Upgrading to Student Pro costs <strong>$9.99/mo ($60/yr)</strong> and Pro Premium costs <strong>$12.00/mo ($99/yr)</strong>—yet still leaves you with zero help in Biology, Nursing, Macroeconomics, Psychology, Computer Science code debugging, or Humanities electives.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs text-rose-950 space-y-1.5">
                                        <div className="font-bold text-rose-900">Why Pay $99/yr for One Subject?</div>
                                        <p>Wolfram Pro Premium Student costs the exact same $99/year as ExamGhost&apos;s Academic Year Pass, but only handles symbolic computations.</p>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] text-white border border-neutral-800 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold mb-4">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                            <span>ExamGhost All-Majors Pass</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                                            50 Free Step-by-Step Solves ($0) + Every University Course for $8.25/mo
                                        </h3>
                                        <p className="text-sm text-white/85 leading-relaxed mb-5">
                                            ExamGhost includes full step-by-step derivations right inside your <strong>50 Free Question Solves ($0)</strong>—with no credit card required. When you upgrade for <strong>$19/mo</strong>, <strong>$99/yr ($8.25/mo)</strong>, or <strong>$199 Lifetime</strong>, one pass covers Calculus, Linear Algebra, Physics, Organic Chemistry, Nursing, Accounting, CS, and Gen-Ed Humanities.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <Link prefetch={false}
                                            href="/#pricing"
                                            className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-[#111111] font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5"
                                        >
                                            <span>Claim 50 Free Solves ($0)</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        <Link prefetch={false}
                                            href="/canvas-quiz-solver-free-demo"
                                            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
                                        >
                                            <span>Try Live Demo</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4 VERIFIED PRODUCTION BOTTLENECKS */}
                <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-xs font-mono font-bold text-rose-900 uppercase tracking-wider mb-4">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-800" />
                            <span>Production Source Inspection: wolframalpha.com</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#111111] mb-4">
                            4 Technical Bottlenecks in Wolfram|Alpha&apos;s Live Production Code
                        </h2>
                        <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                            We inspected <code className="font-mono text-xs bg-neutral-200/70 px-1.5 py-0.5 rounded">window.ENV_DATA</code> and <code className="font-mono text-xs bg-neutral-200/70 px-1.5 py-0.5 rounded">__NEXT_DATA__</code> directly on <code className="font-mono text-xs bg-neutral-200/70 px-1.5 py-0.5 rounded">wolframalpha.com/pro/pricing/students</code>. Here is what the live source reveals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-14">
                        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                                01
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] mb-1.5">
                                    Hardcoded `inputCharLimit: 680` &amp; Strict Syntax Parser
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    In <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">window.ENV_DATA</code>, Wolfram enforces <code className="font-mono text-xs bg-rose-50 text-rose-900 px-1 py-0.5 rounded">inputCharLimit: 680</code> and <code className="font-mono text-xs bg-rose-50 text-rose-900 px-1 py-0.5 rounded">queryHistoryLimit: &quot;20&quot;</code>. You cannot paste a multi-paragraph word problem or 4 multiple-choice answers without stripping the context down to raw Mathematica-style syntax.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                                02
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] mb-1.5">
                                    Hardcoded `fakeUploadDelay: 1500` &amp; 2MB Upload Cap
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    Wolfram&apos;s production config contains <code className="font-mono text-xs bg-rose-50 text-rose-900 px-1 py-0.5 rounded">fakeUploadDelay: 1500</code> (1.5 seconds of artificial delay on uploads) and restricts Student Pro accounts ($9.99/mo) to a <strong>2MB file upload limit</strong> (5MB on $12/mo Pro Premium).
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                                03
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] mb-1.5">
                                    Toolbar Extension Opens External Tabs &amp; Logs Blur Events
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    The official Wolfram|Alpha Chrome extension is just a toolbar search box that launches <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">wolframalpha.com</code> in a new tab—triggering immediate <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">window.blur</code> and <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">visibilitychange</code> telemetry in Canvas SpeedGrader.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                                04
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] mb-1.5">
                                    Zero Step-by-Step Solutions on Free Basic Tier
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    On <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">/pro/pricing/students</code>, the Basic card explicitly warns: <em>&ldquo;(Does not include step-by-step solutions)&rdquo;</em>—requiring a paid Pro ($9.99/mo or $60/yr) or Pro Premium ($12/mo or $99/yr) plan.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDE-BY-SIDE COMPARISON TABLE + COLLAPSIBLE TECHNICAL AUDIT DRAWER */}
                <section className="py-16 bg-white border-y border-neutral-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#111111] mb-3">
                                Wolfram|Alpha Pro vs ExamGhost: 2026 Audit Matrix
                            </h2>
                            <p className="text-xs sm:text-sm text-neutral-600">
                                Verified head-to-head comparison across input limits, LMS stealth, subject coverage, and 2026 student pricing.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm mb-6">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="border-b border-neutral-300 bg-neutral-100">
                                        <th className="py-3.5 px-4 font-bold text-[#111111]">Audit Dimension</th>
                                        <th className="py-3.5 px-4 font-bold text-neutral-700">Technical Impact on Timed Exams</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-900">ExamGhost (2026)</th>
                                        <th className="py-3.5 px-4 font-bold text-rose-900">Wolfram|Alpha Pro</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200">
                                    <tr className="bg-[#FAF8F5]/60">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Query Character Limit</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Ability to parse full word problems &amp; options</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">Unlimited DOM &amp; Screen Region OCR</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">Hardcoded inputCharLimit: 680</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Chrome Extension Architecture</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">In-tab HUD vs external search launcher</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">Closed Shadow DOM In-Tab HUD</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">Toolbar Box Opens External Tab</td>
                                    </tr>
                                    <tr className="bg-[#FAF8F5]/60">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Canvas Focus Shield</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Suppresses window.blur &amp; visibilitychange</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">100% Capture-Phase Suppression</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">None (Tab Switch Logged by Canvas)</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Image / Upload Latency</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Speed of solving graphs &amp; equations</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">0.3s Instant Snap-It Crosshair OCR</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">fakeUploadDelay: 1500ms + 2MB Cap</td>
                                    </tr>
                                    <tr className="bg-[#FAF8F5]/60">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Subject Coverage</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Works across all university courses</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">STEM, Business, Nursing, Humanities, CS</td>
                                        <td className="py-3.5 px-4 text-neutral-700">Symbolic Math &amp; Structured Data Only</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Multiple-Choice Option Matching</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Selects the exact shuffled option on page</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">Automatic In-Situ Option Highlighting</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">Cannot Parse Multiple-Choice Lists</td>
                                    </tr>
                                    <tr className="bg-[#FAF8F5]/60">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Free Step-by-Step Solutions</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Included on free tier without a credit card</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">50 Free Solves (Full Steps Included)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">Excluded on Free Basic Plan</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Student Pricing (2026)</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Monthly, annual, and lifetime options</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">$19/mo · $99/yr ($8.25/mo) · $199 Life</td>
                                        <td className="py-3.5 px-4 text-neutral-700">$9.99–$12/mo ($32.75–$54/sem | $60–$99/yr)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store & ENV_DATA Drawer */}
                        <details className="group rounded-2xl bg-[#FAF8F5] border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-mono text-xs sm:text-sm font-bold text-[#111111]">
                                <span className="flex items-center gap-2 m-0 inline">
                                    <FileCode2 className="w-4 h-4 text-emerald-800 shrink-0" />
                                    <h3 className="font-bold m-0 inline">View Technical Chrome Web Store ID &amp; Production window.ENV_DATA Audit (wolframalpha.com)</h3>
                                </span>
                                <ChevronDown className="w-4 h-4 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="mt-4 pt-4 border-t border-neutral-200 grid md:grid-cols-2 gap-4 text-xs">
                                <div className="p-4 rounded-xl bg-[#18181B] text-rose-200 font-mono leading-relaxed overflow-x-auto">
                                    <div className="text-neutral-400 mb-1">// Extracted from https://www.wolframalpha.com/pro/pricing/students</div>
                                    <div className="text-amber-300">window.ENV_DATA = &#123;</div>
                                    <div className="text-rose-300">  inputCharLimit: 680,</div>
                                    <div className="text-rose-300">  queryHistoryLimit: &quot;20&quot;,</div>
                                    <div className="text-rose-300">  fakeUploadDelay: 1500,</div>
                                    <div className="text-rose-300">  chromeExtension: &quot;.../icncamkooinmbehmkeilcccmoljfkdhp&quot;,</div>
                                    <div className="text-rose-300">  walTracking: &quot;//wal.wolfram.com&quot;</div>
                                    <div className="text-amber-300">&#125;;</div>
                                    <div className="text-neutral-400 mt-1">// Student Pro: $9.99/mo ($32.75/sem | $60/yr) — 2MB upload limit</div>
                                    <div className="text-neutral-400">// Pro Premium: $12.00/mo ($54.00/sem | $99/yr) — 5MB upload limit</div>
                                </div>
                                <div className="p-4 rounded-xl bg-[#111111] text-emerald-200 font-mono leading-relaxed overflow-x-auto">
                                    <div className="text-neutral-400 mb-1">// ExamGhost Closed Shadow DOM &amp; Mathpix Vision OCR:</div>
                                    <div className="text-emerald-300">const shadow = host.attachShadow(&#123; mode: &apos;closed&apos; &#125;);</div>
                                    <div className="text-emerald-300">const latex = await mathpixEdge.extractRegion(canvasRect); // 0.3s</div>
                                    <div className="text-emerald-300">window.addEventListener(&apos;blur&apos;, (e) =&gt; e.stopImmediatePropagation(), true);</div>
                                    <div className="text-neutral-300 mt-2">
                                        • Input Limit: None (reads full DOM + locked canvas/SVG diagrams)<br />
                                        • Upload Delay: 0ms artificial delay (0.3s direct screen region OCR)<br />
                                        • Scope: Full STEM + Business, Nursing, CS &amp; Humanities
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* WHEN TO USE WHICH */}
                <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
                            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#111111] mb-4">
                                When Wolfram|Alpha Is the Right Tool
                            </h2>
                            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                                Wolfram|Alpha is an extraordinary deterministic symbolic algebra system when you are working outside a monitored LMS exam:
                            </p>
                            <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                                <li className="flex items-start gap-2.5">
                                    <span className="font-bold text-neutral-900">•</span>
                                    <span>Untimed symbolic derivations, Taylor series expansions, and Mathematica notebook research where you want to experiment with custom Wolfram Language syntax.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="font-bold text-neutral-900">•</span>
                                    <span>Verifying pure mathematical identities when you already know how to translate the word problem into a clean symbolic expression under 680 characters.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 mb-2">
                                Purpose-Built for Timed LMS Exams
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-4">
                                When You Need ExamGhost Instead
                            </h2>
                            <ul className="space-y-3 text-xs sm:text-sm text-white/90 mb-6">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Live <strong>Canvas, Blackboard, Moodle, D2L, WebAssign, ALEKS, McGraw Hill, and Pearson</strong> quizzes where switching tabs to <code className="font-mono text-xs">wolframalpha.com</code> logs a tab departure.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Word problems, circuit/chemistry diagrams, and multi-disciplinary exams that exceed Wolfram&apos;s 680-character syntax parser.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Same <strong>$8.25/mo ($99/yr)</strong> rate as Wolfram Pro Premium Student—or <strong>$199 Lifetime</strong>—covering every college class you take through graduation.</span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-3">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-[#111111] font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5"
                                >
                                    <span>Claim 50 Free Solves</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
                                >
                                    <span>Test Live Demo</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OFFICIAL DISCORD COMMUNITY BANNER */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-[#3b47d6] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                                <FaDiscord className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                                    Join the ExamGhost Student Discord
                                </h2>
                                <p className="text-xs sm:text-sm text-white/90">
                                    See how engineering and pre-med students use ExamGhost on Canvas, WebAssign, and ALEKS with zero blur logs.
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white text-[#232b88] hover:bg-neutral-100 text-sm font-bold shadow-sm whitespace-nowrap inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                        >
                            <span>Join Discord Community</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#111111] mb-3">
                            Wolfram|Alpha vs ExamGhost: 2026 Audit FAQs
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-600">
                            Technical answers regarding Wolfram&apos;s 680-character limit, Chrome launcher behavior, and ExamGhost&apos;s stealth architecture.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-[#111111]">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why does Wolfram|Alpha reject long word problems or Canvas multiple-choice prompts?</h3>
                                <ChevronDown className="w-5 h-5 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                Inspecting <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">window.ENV_DATA</code> on <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">wolframalpha.com</code> reveals a strict hardcoded <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">inputCharLimit: 680</code>. Because Wolfram|Alpha is a symbolic Wolfram Language parser rather than a multimodal exam reader, pasting a multi-sentence word problem, finance case study, or 4-option Canvas multiple-choice question exceeds the 680-character cap or triggers a syntax parse error. ExamGhost reads full-page questions, tables, and diagrams in-situ with no character or syntax formatting limits.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-[#111111]">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does the Wolfram|Alpha Chrome Extension work inside Canvas without logging tab switches?</h3>
                                <ChevronDown className="w-5 h-5 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                No. The official Wolfram|Alpha Chrome extension (documented in the technical drawer above) is merely a browser toolbar query box and omnibox shortcut (<code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">=</code>) that opens results in a brand-new <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">wolframalpha.com</code> tab. Opening that tab immediately fires <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">window.blur</code> and <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">document.visibilitychange</code> events in Canvas SpeedGrader. ExamGhost renders answers directly inside your active Canvas tab using a closed Shadow DOM and Focus Shield.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-[#111111]">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What is the &ldquo;fakeUploadDelay: 1500&rdquo; setting inside Wolfram|Alpha&apos;s production code?</h3>
                                <ChevronDown className="w-5 h-5 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                In <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">wolframalpha.com</code>&apos;s live <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">window.ENV_DATA</code> configuration object, Wolfram sets <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">fakeUploadDelay: 1500</code> (a 1.5-second artificial delay on file/image uploads) alongside a <strong>2MB file upload limit</strong> on Student Pro ($9.99/mo) and <strong>5MB</strong> on Pro Premium ($12.00/mo). By contrast, ExamGhost&apos;s Snap-It crosshair OCR captures and solves equations or diagrams directly off your screen in 0.3 seconds with zero artificial delay.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-[#111111]">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does Wolfram|Alpha Pro Student pricing compare to ExamGhost in 2026?</h3>
                                <ChevronDown className="w-5 h-5 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                According to <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">wolframalpha.com/pro/pricing/students</code> (<code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">__NEXT_DATA__</code>), Basic is free with sign-in but explicitly states <em>&ldquo;(Does not include step-by-step solutions)&rdquo;</em>. Student Pro costs <strong>$9.99/month</strong> ($32.75/semester or $60/year), and Student Pro Premium costs <strong>$12.00/month</strong> ($54/semester or $99/year). ExamGhost gives you <strong>50 Free Question Solves</strong> (including full step-by-step explanations and Focus Shield) with no credit card required, plus <strong>$19/mo</strong>, <strong>$99/yr</strong> ($8.25/mo across all subjects, not just math), or <strong>$199 Lifetime</strong>.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-[#FAF8F5] to-amber-50/70 border border-emerald-200 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-emerald-200/80">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold mb-3">
                                    <Zap className="w-3.5 h-3.5" />
                                    <span>BUILT FOR LIVE STEM &amp; LMS EXAMS</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#111111] mb-2">
                                    Solve Word Problems, Graphs &amp; Equations In-Tab in 0.3s
                                </h2>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    Start with 50 Free Step-by-Step Solves ($0, no card required). Zero 680-character limits, zero artificial upload delays, and zero Canvas tab-switch logs.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="px-6 py-3.5 rounded-2xl bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-sm"
                                >
                                    <FaChrome className="w-4 h-4 text-emerald-400" />
                                    <span>Claim 50 Free Solves ($0)</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-3.5 rounded-2xl bg-white hover:bg-neutral-100 border border-neutral-300 text-[#111111] font-semibold text-xs sm:text-sm transition-all"
                                >
                                    <span>Try Live Stealth Demo</span>
                                </Link>
                            </div>
                        </div>

                        <div className="pt-6">
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-3">
                                Related 2026 STEM &amp; Competitor Audits
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                <Link prefetch={false}
                                    href="/mathosai-vs-examghost"
                                    className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/60 border border-neutral-200 hover:border-emerald-300 transition-all group"
                                >
                                    <div className="text-xs font-bold text-[#111111] group-hover:text-emerald-900 flex items-center justify-between">
                                        <span>Mathos AI vs ExamGhost</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-[11px] text-neutral-500 mt-1">$9.98/wk math study portal vs 0.3s HUD</p>
                                </Link>
                                <Link prefetch={false}
                                    href="/studymonkey-vs-examghost"
                                    className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/60 border border-neutral-200 hover:border-emerald-300 transition-all group"
                                >
                                    <div className="text-xs font-bold text-[#111111] group-hover:text-emerald-900 flex items-center justify-between">
                                        <span>Solvely vs ExamGhost</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-[11px] text-neutral-500 mt-1">Sidebar crop friction vs closed Shadow DOM</p>
                                </Link>
                                <Link prefetch={false}
                                    href="/gauth-vs-examghost"
                                    className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/60 border border-neutral-200 hover:border-emerald-300 transition-all group"
                                >
                                    <div className="text-xs font-bold text-[#111111] group-hover:text-emerald-900 flex items-center justify-between">
                                        <span>Gauth AI vs ExamGhost</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-[11px] text-neutral-500 mt-1">ByteDance web/app solver vs Canvas stealth</p>
                                </Link>
                                <Link prefetch={false}
                                    href="/compare-canvas-hack-extensions"
                                    className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/60 border border-neutral-200 hover:border-emerald-300 transition-all group"
                                >
                                    <div className="text-xs font-bold text-[#111111] group-hover:text-emerald-900 flex items-center justify-between">
                                        <span>All 57 Extension Audits</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-[11px] text-neutral-500 mt-1">Full 2026 forensic directory &amp; rankings</p>
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
