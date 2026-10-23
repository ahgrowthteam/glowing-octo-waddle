import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    ShieldAlert,
    Zap,
    ChevronDown,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    XCircle,
    ExternalLink,
    Code2,
    Copy,
    ScanLine,
    CreditCard
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "CanvasCrack vs ExamGhost (2026) — $139 Tab Blocker Audit",
    },
    description: "CanvasCrack charges $19.99/mo or $139.99 with zero AI solver. ExamGhost combines Focus Shield tab cloaking with 0.3s AI answers and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/canvascrack-vs-examghost",
    },
    openGraph: {
        title: "CanvasCrack vs ExamGhost (2026) — $139 Tab Blocker Audit",
        description: "CanvasCrack charges $19.99/mo or $139.99 with zero AI solver. ExamGhost combines Focus Shield tab cloaking with 0.3s AI answers and 50 Free Solves.",
        url: "https://examghost.com/canvascrack-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CanvasCrack vs ExamGhost (2026) — $139 Tab Blocker Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CanvasCrack vs ExamGhost (2026) — $139 Tab Blocker Audit",
        description: "CanvasCrack charges $19.99/mo or $139.99 with zero AI solver. ExamGhost combines Focus Shield tab cloaking with 0.3s AI answers and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function CanvascrackVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-19",
                "dateModified": "2026-03-15",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/canvascrack-vs-examghost#webpage",
                "url": "https://examghost.com/canvascrack-vs-examghost",
                "name": "CanvasCrack vs ExamGhost (2026 Comparison) | $139.99 Tab Blocker vs Complete AI Exam Solver",
                "description": "In-depth technical and pricing comparison between CanvasCrack (canvascrack.com) and ExamGhost for Canvas, Blackboard, Moodle, and D2L Brightspace exams.",
                "breadcrumb": { "@id": "https://examghost.com/canvascrack-vs-examghost#breadcrumb" },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                        "offers": [
                            { "@type": "Offer", "name": "Free Trial (50 Solves)", "price": "0", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Monthly Pass", "price": "19.00", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Academic Year Pass", "price": "99.00", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Lifetime Degree Pass", "price": "199.00", "priceCurrency": "USD" }
                        ]
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "CanvasCrack",
                        "url": "https://canvascrack.com",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension",
                        "offers": [
                            { "@type": "Offer", "name": "Monthly", "price": "19.99", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Lifetime Access", "price": "139.99", "priceCurrency": "USD" }
                        ]
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvascrack-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "CanvasCrack vs ExamGhost", "item": "https://examghost.com/canvascrack-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvascrack-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does CanvasCrack (canvascrack.com) solve quiz questions with AI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. CanvasCrack is strictly a Canvas tab-switching blocker. It contains zero AI models, zero OCR tools, and zero inline question solvers—meaning you still have to manually copy questions and switch tabs to ChatGPT during your exam. ExamGhost includes full Focus Shield tab-blur suppression PLUS a 0.3s inline AI solver and Snap-It OCR directly on the page."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does CanvasCrack offer a free trial?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. CanvasCrack's official FAQ states: 'We don't offer a free trial.' You must pay $19.99/month (listed as 30% off $28.55) or $139.99 upfront before testing it. By contrast, ExamGhost gives every student 50 Free Question Solves with Focus Shield and Snap-It OCR included—no credit card required."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is manually switching tabs to ChatGPT with CanvasCrack still risky?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Even when a script blocks window.blur, highlighting question text and pressing Ctrl+C/Cmd+C fires document.oncopy events, and leaving the Canvas tab for 30+ seconds leaves an unnatural gap in mouse movement and question interaction cadence. Because ExamGhost solves questions inline via Double-Click in 0.3 seconds, you never copy text to the clipboard or leave the exam tab."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does CanvasCrack work on Blackboard, Moodle, or D2L Brightspace?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. CanvasCrack is hardcoded solely for Instructure Canvas LMS. ExamGhost works universally across 20+ platforms including Canvas Classic, Canvas New Quizzes (LTI 1.3), Blackboard Ultra, Moodle, D2L Brightspace, McGraw-Hill Connect, and Pearson MyLab."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-[#bfe3f6] selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">CanvasCrack vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: $139.99 Tab Blocker Only vs Focus Shield + 0.3s Inline AI Solver */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#f0f9ff] via-[#bfe3f6]/65 to-[#ecfdf5] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/10 border border-sky-950/20 text-xs font-bold text-sky-950">
                                <Sparkles className="w-3.5 h-3.5 text-sky-800" aria-hidden="true" />
                                <span>2026 Feature &amp; Pricing Audit: Tab Blocker Only vs Complete AI Exam Solver</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/90 border border-black/10 text-[11px] font-bold text-sky-950 uppercase tracking-wider">
                                Updated April 2026 · canvascrack.com
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-ink leading-[1.06] mb-5">
                                    CanvasCrack charges $139.99 just to hide tab switches—with <span className="underline decoration-rose-500/60 decoration-wavy underline-offset-4">zero AI solver</span> and no free trial.
                                </h1>

                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-7 max-w-2xl">
                                    <strong>CanvasCrack</strong> (<code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">canvascrack.com</code>) charges <strong>$19.99/month</strong> or <strong>$139.99 one-time</strong> for an extension that <em>only</em> blocks Canvas tab-switching logs—and its FAQ explicitly states: <em>&quot;We don&apos;t offer a free trial.&quot;</em> Because it has zero AI capabilities, you still have to manually copy-paste every question into ChatGPT. <strong>ExamGhost</strong> gives you <strong>both</strong> Focus Shield tab-blur immunity <em>and</em> a 0.3s inline AI solver inside a closed Shadow DOM—starting with <strong>50 Free Solves</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <a
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 Trial)</span>
                                    </a>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live Canvas Sandbox</span>
                                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </Link>
                                    <a
                                        href="#canvascrack-audit"
                                        className="px-4 py-4 rounded-full text-xs sm:text-sm font-semibold text-sky-950 hover:text-ink inline-flex items-center gap-1"
                                    >
                                        <span>Inspect What $139.99 Buys</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </a>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-secondary font-medium">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        Includes Focus Shield + 0.3s Inline AI Solver
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        50 Free Solves (vs &quot;No free trial&quot;)
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        Works on 20+ LMS Platforms
                                    </span>
                                </div>
                            </div>

                            {/* Right Side Bespoke Visual: "What $139.99 Actually Buys" Receipt Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#0f172a] text-white p-5 sm:p-6 border border-white/15 shadow-lift">
                                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                                        <span className="font-mono text-xs font-bold text-slate-200">2026 Feature Receipt Comparison</span>
                                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono text-[10px] font-bold">
                                            NO AI IN CANVASCRACK
                                        </span>
                                    </div>

                                    {/* CanvasCrack Receipt */}
                                    <div className="p-3.5 rounded-2xl bg-rose-950/45 border border-rose-500/30 mb-3.5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-rose-200">CanvasCrack (canvascrack.com)</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-900/70 text-rose-200">
                                                $19.99/mo · $139.99
                                            </span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-emerald-300">
                                                <span>Canvas Tab-Blur Blocker</span>
                                                <span>✓ Included</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-rose-300">
                                                <span>Built-In AI Question Solver</span>
                                                <span className="font-bold">✗ NONE</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-rose-300">
                                                <span>Mathpix / Diagram OCR</span>
                                                <span className="font-bold">✗ NONE</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-amber-300">
                                                <span>Free Trial</span>
                                                <span className="font-bold">&quot;No free trial&quot;</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ExamGhost Full Suite */}
                                    <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-emerald-200">ExamGhost v4.2 Complete Suite</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-900/70 text-emerald-200">
                                                50 Free Solves
                                            </span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-emerald-200">
                                                <span>Focus Shield + 0.3s Inline AI + OCR</span>
                                                <span className="text-emerald-400 font-bold">✓ All Included</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-emerald-200">
                                                <span>Plans After 50 Free Solves</span>
                                                <span className="text-emerald-400 font-bold">$19/mo · $99/yr</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* QUICK METRIC RIBBON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Built-In AI Solver</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">0.3s Inline AI + OCR</div>
                            <div className="text-xs text-rose-800 mt-1">CanvasCrack: None (Tab Blocker Only)</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Free Trial</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">50 Free Solves</div>
                            <div className="text-xs text-rose-800 mt-1">CanvasCrack: &quot;No free trial&quot;</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">LMS Platform Support</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">20+ LMS Portals</div>
                            <div className="text-xs text-ink-secondary mt-1">CanvasCrack: Canvas Only</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Annual / Full-Year Cost</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">$99/yr ($8.25/mo)</div>
                            <div className="text-xs text-rose-800 mt-1">CanvasCrack: $139.99 or $240/yr</div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB AUDIT: Why Tab-Switching Alone Is Obsolete */}
                <section id="canvascrack-audit" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="max-w-2xl mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-950 text-xs font-bold mb-3">
                                <Zap className="w-3.5 h-3.5" />
                                Interactive Workflow &amp; Pricing Audit
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                Why Paying $139.99 Just to Switch Tabs to ChatGPT Is Obsolete in 2026
                            </h2>
                            <p className="text-sm text-ink-secondary">
                                Select any tab below to see why CanvasCrack&apos;s manual copy-pasting workflow, lack of OCR, and strict upfront paywall fall short of ExamGhost.
                            </p>
                        </div>

                        {/* Pure CSS Radio Tabs */}
                        <input type="radio" name="canvascrack_tab" id="tab-copy" className="sr-only peer/copy" defaultChecked />
                        <input type="radio" name="canvascrack_tab" id="tab-ocr" className="sr-only peer/ocr" />
                        <input type="radio" name="canvascrack_tab" id="tab-paywall" className="sr-only peer/paywall" />

                        <div className="grid sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#f4f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="tab-copy"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/copy:bg-white peer-checked/copy:text-ink peer-checked/copy:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Copy className="w-4 h-4 text-rose-600" />
                                <span>1. Zero AI (Manual Copy-Paste)</span>
                            </label>
                            <label
                                htmlFor="tab-ocr"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/ocr:bg-white peer-checked/ocr:text-ink peer-checked/ocr:shadow-sm flex items-center justify-center gap-2"
                            >
                                <ScanLine className="w-4 h-4 text-sky-700" />
                                <span>2. No OCR for Graphs &amp; Math</span>
                            </label>
                            <label
                                htmlFor="tab-paywall"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/paywall:bg-white peer-checked/paywall:text-ink peer-checked/paywall:shadow-sm flex items-center justify-center gap-2"
                            >
                                <CreditCard className="w-4 h-4 text-emerald-700" />
                                <span>3. &quot;No Free Trial&quot; vs 50 Free</span>
                            </label>
                        </div>

                        {/* TAB 1: Zero AI (Manual Copy-Paste) */}
                        <div className="hidden peer-checked/copy:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #1 · Manual Tab Flipping &amp; Clipboard Events
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    CanvasCrack Forces You to Manually Copy-Paste Into ChatGPT on Every Question
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    CanvasCrack&apos;s own 3-step guide instructs students to <em>&quot;Switch between tabs freely during the test&quot;</em> to look up answers. On a 50-question timed exam, highlighting text and pressing <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">⌘+C</code> fires <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">document.oncopy</code> listeners, switching to an external ChatGPT tab leaves 30+ seconds of dead mouse activity in Canvas, and wastes 25–45 seconds per question.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">CanvasCrack Workflow</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Highlight text -&gt; Press <code className="text-[11px]">⌘+C</code> -&gt; Switch tab to ChatGPT -&gt; Paste -&gt; Read -&gt; Switch back (~35s/Q).
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Inline Solver</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Includes Focus Shield <strong>plus</strong> a 0.3s Double-Click inline AI solver inside a closed Shadow DOM—never leave your exam tab.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // 50-Question Exam Time &amp; Telemetry
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>CanvasCrack + External ChatGPT Tab:</div>
                                        <div className="text-white/80">• Fires document.oncopy on every question</div>
                                        <div className="text-white/80">• 32s mouse inactivity gap per question</div>
                                        <div className="text-rose-400 font-bold">• ~29 minutes wasted flipping tabs</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div>ExamGhost Focus Shield + Inline AI:</div>
                                        <div className="text-emerald-400 font-bold">• 0.3s direct solve · 0 tab switches</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: No OCR for Graphs & Math */}
                        <div className="hidden peer-checked/ocr:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #2 · Diagrams, Graphs &amp; Locked Text
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    What Happens When a Question Is an Image or Blocks Copy-Paste?
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    On STEM, Economics, and Chemistry exams, professors routinely embed circuit schematics, supply-and-demand curves, organic chemistry rings, or enable <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">user-select: none</code>. Because CanvasCrack has zero OCR engine, you have to take OS screenshots, save image files, and manually upload them to ChatGPT. ExamGhost&apos;s <strong>Snap-It Vision OCR</strong> (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">⌘+Shift+S</code>) parses any region in-memory in 0.3 seconds.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">CanvasCrack on Diagrams</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Zero optical capture tool—requires manual OS screenshots and file uploads to an external AI tab.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Snap-It OCR</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Press <code className="text-[11px]">⌘+Shift+S</code> to crop any graph, equation, or LTI iframe in-memory in 0.3s.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // Image &amp; Diagram Capability Check
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>CanvasCrack:</div>
                                        <div className="text-white/80">• Optical Character Recognition: None</div>
                                        <div className="text-white/80">• Mathpix LaTeX Extraction: None</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div>ExamGhost v4.2:</div>
                                        <div className="text-emerald-400 font-bold">• Built-in ⌘+Shift+S Mathpix Neural OCR</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: "We don't offer a free trial" vs 50 Free Solves */}
                        <div className="hidden peer-checked/paywall:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #3 · Upfront Paywall &amp; Single-LMS Lock-In
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    CanvasCrack&apos;s FAQ: <em>&quot;We don&apos;t offer a free trial&quot;</em> vs. 50 Free Solves
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    CanvasCrack requires you to pay <strong>$19.99/month</strong> (listed as 30% off $28.55) or <strong>$139.99 upfront</strong> before you can test whether it even works on your university&apos;s Canvas setup—and it does nothing on Blackboard, Moodle, D2L Brightspace, or McGraw-Hill Connect. ExamGhost gives every student <strong>50 Free Solves</strong> ($0 trial, no credit card required) and supports 20+ LMS platforms.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">CanvasCrack Pricing</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            $19.99/mo or $139.99 upfront, zero free trial, Canvas-only, 7-day refund window.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Pricing</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            <strong>50 Free Solves</strong> ($0 trial, no card), then $19/mo, $99/yr ($8.25/mo), or $199 Lifetime with a 14-day refund guarantee.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // Verbatim FAQ Quote (canvascrack.com)
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>Q: Do you offer a free trial?</div>
                                        <div className="text-white/90 font-bold">A: &quot;We don&apos;t offer a free trial.&quot;</div>
                                        <div className="text-amber-300 pt-1">Price: $19.99/mo or $139.99 (No AI Solver)</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div>ExamGhost Trial:</div>
                                        <div className="text-emerald-400 font-bold">✓ 50 Free Solves (Focus Shield + AI + OCR)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER ACTIVITY LOG COMPARISON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-[#111111] text-white p-6 sm:p-10 border border-white/10 shadow-lift">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/20 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                                    <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
                                    <span>SpeedGrader &amp; Behavioral Telemetry</span>
                                </div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                                    Why Staying Inside the Exam Tab Beats Switching Tabs to ChatGPT
                                </h2>
                            </div>
                            <span className="text-xs font-mono text-white/80">Canvas Quiz Attempt Log</span>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-black/60 border border-rose-500/40 p-5">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-500/20">
                                    <span className="font-mono text-xs font-bold text-rose-300 uppercase">
                                        CanvasCrack ($139.99 Tab Switcher + External ChatGPT)
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-300">
                                        CLIPBOARD &amp; CADENCE GAPS
                                    </span>
                                </div>
                                <div className="space-y-2.5 font-mono text-xs text-white/90">
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-center justify-between">
                                        <span>00:12 — Viewed Question #2 (Tab blur masked)</span>
                                        <span className="text-white/75">Masked</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-500/15 border-l-2 border-rose-500 flex items-center justify-between">
                                        <span>00:13 — Highlighted text &amp; fired document.oncopy</span>
                                        <span className="text-rose-300 font-bold">COPY EVENT</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-500/15 border-l-2 border-rose-500 flex items-center justify-between">
                                        <span>00:14–00:46 — 0 mouse events inside Canvas (In ChatGPT tab)</span>
                                        <span className="text-rose-300 font-bold">32s DEAD AIR</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-white/30 flex items-center justify-between">
                                        <span>00:47 — Returned to tab &amp; clicked answer in 0.2s</span>
                                        <span className="text-white/75">Anomalous</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-black/60 border border-emerald-500/40 p-5">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-500/20">
                                    <span className="font-mono text-xs font-bold text-emerald-300 uppercase">
                                        ExamGhost (Focus Shield + 0.3s Inline Solver)
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300">
                                        0 FLAGS · NATURAL CADENCE
                                    </span>
                                </div>
                                <div className="space-y-2.5 font-mono text-xs text-white/90">
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-center justify-between">
                                        <span>00:12 — Viewed Question #2</span>
                                        <span className="text-white/75">Normal</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-500/15 border-l-2 border-emerald-400 flex items-center justify-between">
                                        <span>00:14 — [Double-Click Inline Solve · 0.3s Edge AI]</span>
                                        <span className="text-emerald-300 font-bold">No Copy Event</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-500/15 border-l-2 border-emerald-400 flex items-center justify-between">
                                        <span>00:15 — Cursor remained inside quiz viewport</span>
                                        <span className="text-emerald-300 font-bold">Continuous Focus</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-center justify-between">
                                        <span>00:17 — Answered Question #2</span>
                                        <span className="text-white/75">100% Clean</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10-POINT COMPARISON MATRIX + COLLAPSIBLE TECHNICAL DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                CanvasCrack vs ExamGhost: 10-Point Technical Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-mono">Verified April 2026</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="bg-[#faf8f4] border-b border-black/10">
                                        <th className="py-4 px-5 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-4 px-5 font-bold text-ink-muted">Why It Matters on Exam Day</th>
                                        <th className="py-4 px-5 font-extrabold text-emerald-950 bg-[#cdeecb]/35">ExamGhost v4.2</th>
                                        <th className="py-4 px-5 font-bold text-ink">CanvasCrack (canvascrack.com)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Built-In AI Question Solver</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Answers questions without switching tabs</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ 0.3s Double-Click Inline AI</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ None (Must Use External ChatGPT)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Focus Shield (Tab-Blur Masking)</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Prevents &quot;Left exam tab&quot; SpeedGrader logs</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Included in All Plans</td>
                                        <td className="py-3.5 px-5 text-emerald-800 font-bold">✓ Core Feature (Canvas Only)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Snap-It Vision OCR (<code className="font-mono">⌘+Shift+S</code>)</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Solves graphs, integrals, and locked images</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Built-In Mathpix Neural OCR</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ None</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Closed Shadow DOM HUD</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">3 Display Modes + 10%–100% Opacity Slider</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Invisible, Stealth &amp; Explain</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ No In-Page Answer HUD</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Multi-LMS Compatibility</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Blackboard, Moodle, D2L, McGraw-Hill</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Universal (20+ LMS Platforms)</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ Canvas LMS Only</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Master Panic Kill Switch (<code className="font-mono">⌘+Shift+U</code>)</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Instant &lt;8ms UI and memory purge</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Instant Hardware Hotkey</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ None</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Free Trial Before Buying</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Verify on a practice quiz for $0</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ 50 Free Solves (No Card Needed)</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ None (&quot;We don&apos;t offer a free trial&quot;)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Monthly Plan Pricing</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Flexible finals/midterm sprint option</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">$19/mo (Includes AI Solver + Shield)</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">$19.99/mo (Tab Blocker Only)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Academic Year / Long-Term Value</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Full-year or degree coverage</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">$99/yr ($8.25/mo) or $199 Lifetime</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">$139.99 One-Time (No AI Included)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Money-Back Guarantee Window</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Risk-free student protection</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ 14-Day 100% Honor Guarantee</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">7-Day Refund Window</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Audit Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-xs font-mono font-bold text-ink-secondary hover:text-ink">
                                <h3 className="inline-flex items-center gap-2 m-0 inline">
                                    <Code2 className="w-4 h-4 text-sky-900" />
                                    Technical Storefront &amp; Feature Audit Log (canvascrack.com)
                                </h3>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs font-mono text-ink-secondary space-y-2 border-t border-black/5 bg-white">
                                <div><strong className="text-ink">Audited Storefront:</strong> CanvasCrack (<code className="bg-slate-100 px-1.5 py-0.5 rounded">https://canvascrack.com</code>)</div>
                                <div><strong className="text-ink">Published Pricing &amp; Trial Policy:</strong> $19.99/month (listed as 30% off $28.55) or $139.99 one-time (listed as 30% off $199.99); FAQ explicitly states <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">&quot;We don&apos;t offer a free trial.&quot;</code></div>
                                <div><strong className="text-ink">Functional Scope:</strong> Single-purpose Canvas tab-switch event blocker with zero integrated AI solver, zero OCR engine, and zero support for Blackboard, Moodle, or D2L Brightspace.</div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* OFFICIAL STUDENT DISCORD BANNER */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-[#3b47d6] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lift">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                                <FaDiscord className="w-7 h-7 text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                                    Why Pay Before Testing? Claim 50 Free Solves on Discord
                                </h2>
                                <p className="text-xs sm:text-sm text-white font-medium mt-0.5">
                                    Unlike CanvasCrack, ExamGhost lets you test Focus Shield and 0.3s AI solving on 50 questions for free.
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 rounded-full bg-white text-[#232b88] hover:bg-white/95 text-sm font-bold shadow-sm whitespace-nowrap inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                        >
                            <span>Join Discord &amp; Get 50 Free Solves</span>
                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 mb-12">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                            Frequently Asked Questions: CanvasCrack vs ExamGhost
                        </h2>
                        <p className="text-xs sm:text-sm text-ink-muted">
                            Everything students ask when comparing CanvasCrack (<code className="font-mono text-xs">canvascrack.com</code>) with ExamGhost.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details key={index} className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden" open={index === 0}>
                                <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180 shrink-0 ml-2" aria-hidden="true" />
                                </summary>
                                <p className="mt-3 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* BESPOKE INLINE CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#f0f9ff] via-[#bfe3f6]/55 to-[#ecfdf5] border border-black/10 p-8 sm:p-12 shadow-card mb-12">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/10 text-sky-950 text-xs font-bold mb-3">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Focus Shield + 0.3s Inline AI · 50 Free Solves
                                </div>
                                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                    Don&apos;t pay $139.99 just to switch tabs to ChatGPT.
                                </h2>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Get Focus Shield tab-blur immunity <strong>plus</strong> a 0.3s inline AI solver and Snap-It OCR—starting with <strong>50 Free Solves</strong> ($0 trial, no credit card required).
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <a
                                    href="/#pricing"
                                    className="btn-dark px-7 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                                    <span>Start 50 Free Solves</span>
                                </a>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-4 rounded-full text-sm font-semibold bg-white hover:bg-slate-50 text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5"
                                >
                                    <span>Try Live Demo</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-lg font-bold font-display text-ink mb-4">
                        Compare More Canvas Stealth Extensions
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <Link prefetch={false} href="/canvashack-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 text-xs font-bold text-ink flex items-center justify-between transition-all shadow-sm">
                            <span>ExamGhost vs CanvasHack</span>
                            <ArrowRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                        </Link>
                        <Link prefetch={false} href="/canvasninja-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 text-xs font-bold text-ink flex items-center justify-between transition-all shadow-sm">
                            <span>ExamGhost vs Canvas Ninja</span>
                            <ArrowRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                        </Link>
                        <Link prefetch={false} href="/canvaspass-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 text-xs font-bold text-ink flex items-center justify-between transition-all shadow-sm">
                            <span>ExamGhost vs CanvasPass</span>
                            <ArrowRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                        </Link>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-4 rounded-2xl bg-ink text-white hover:bg-black text-xs font-bold flex items-center justify-between transition-all shadow-sm">
                            <span>All 57 Teardowns</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#bfe3f6]" aria-hidden="true" />
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
