import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    DollarSign,
    ChevronDown,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    Layers,
    ExternalLink,
    Users,
    Calculator,
    Lock,
    MousePointerClick
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Brainly vs ExamGhost (2026) — Forum Answers vs 0.3s AI HUD",
    },
    description: "Compare Brainly ($29.99/mo) with ExamGhost. Skip outdated forum guesses and tab-switch logs with 0.3s inline Canvas solving and 50 Free Solves ($0).",
    alternates: {
        canonical: "https://examghost.com/brainly-vs-examghost",
    },
    openGraph: {
        title: "Brainly vs ExamGhost (2026) — Forum Answers vs 0.3s AI HUD",
        description: "Compare Brainly ($29.99/mo) with ExamGhost. Skip outdated forum guesses and tab-switch logs with 0.3s inline Canvas solving and 50 Free Solves ($0).",
        url: "https://examghost.com/brainly-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Brainly vs ExamGhost (2026) — Forum Answers vs 0.3s AI HUD",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Brainly vs ExamGhost (2026) — Forum Answers vs 0.3s AI HUD",
        description: "Compare Brainly ($29.99/mo) with ExamGhost. Skip outdated forum guesses and tab-switch logs with 0.3s inline Canvas solving and 50 Free Solves ($0).",
        images: ["/og-image.jpg"],
    },
};

export default function BrainlyVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-27",
                "dateModified": "2026-03-16",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/brainly-vs-examghost#webpage",
                "url": "https://examghost.com/brainly-vs-examghost",
                "name": "Brainly vs ExamGhost (2026) | Crowdsourced Forum Guesses vs 0.3s Live Canvas Exam Solver",
                "description": "Comparison of Brainly (brainly.com & Brainly Homework Help extension) vs ExamGhost across randomized STEM accuracy, Canvas Quiz Log stealth, and Brainly Plus ($9.99/mo) / Brainly Tutor ($29.99/mo) pricing.",
                "breadcrumb": {
                    "@id": "https://examghost.com/brainly-vs-examghost#breadcrumb"
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
                                "name": "Free Trial (50 Solves)",
                                "price": "0",
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
                        "name": "Brainly",
                        "url": "https://brainly.com",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web Application, iOS, Android, Chrome Extension",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Brainly Plus Monthly",
                                "price": "9.99",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Brainly Plus Annual",
                                "price": "39.99",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Brainly Tutor Monthly",
                                "price": "29.99",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Brainly Tutor Annual",
                                "price": "95.99",
                                "priceCurrency": "USD"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/brainly-vs-examghost#breadcrumb",
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
                        "name": "Brainly vs ExamGhost",
                        "item": "https://examghost.com/brainly-vs-examghost"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/brainly-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does the Brainly Homework Help Chrome extension trigger Canvas Quiz Logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The official Brainly Homework Help Chrome extension (published by Brainly sp. z o.o.) relies on a 'Select & Search' right-click workflow and external query panels designed for Google Classroom, Quizlet, and Google Search. When you highlight text and open Brainly's search view or switch tabs to brainly.com during a Canvas or Blackboard exam, the LMS immediately logs window.blur and visibilitychange events ('Stopped viewing the Canvas quiz-taking page'). ExamGhost prevents this with its 4-Layer Focus Shield and closed Shadow DOM rendering."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why do Brainly answers often fail on college-level STEM and randomized Canvas quizzes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Brainly is built primarily around an indexed database of crowdsourced student answers and K-12 homework prompts. When college professors use randomized numerical variables (in WebAssign, MasteringPhysics, Aleks, or Canvas Question Banks) or embed custom circuit/organic chemistry diagrams, Brainly's text search either returns a solution with different numbers or shows an unverified peer guess posted for Brainly points. ExamGhost computes your exact live problem and diagram in 0.3 seconds using Multimodal Vision OCR."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does Brainly cost in 2026 compared to ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Brainly splits its paid subscriptions into two recurring tiers: Brainly Plus (~$9.99/month or $39.99/year) for ad-free database access, and Brainly Tutor (~$29.99/month or $95.99/year) if you need live STEM tutor assistance. Free Brainly users face blurred answers and unskippable video ads. ExamGhost offers 50 Free Question Solves ($0, no credit card, zero ads) with every stealth feature unlocked, plus a $19/month pass, $99/year Academic Year Pass ($8.25/mo), or $199 one-time Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can Brainly Tutor help during a timed 45-minute college exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Even if you pay $29.99/month for Brainly Tutor, connecting with a live human tutor and waiting for them to write out a step-by-step math or physics explanation takes several minutes per question—and requires keeping an active chat window open outside your exam tab. ExamGhost's 0.3s edge compute delivers instant answers and step-by-step breakdowns directly inside your active LMS tab without triggering focus loss."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-mint/40 selection:text-ink">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-semibold">Brainly vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: The Randomized Variable Trap & Points-Farming Problem */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#fef3c7] via-[#e6f6e5] to-[#cdeecb] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-black/10 text-xs font-bold text-ink">
                                <Users className="w-3.5 h-3.5 text-amber-700" />
                                <span>2026 Head-to-Head · Crowdsourced Forum Archive vs 0.3s Live AI</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-100 text-[11px] font-bold uppercase tracking-wider">
                                Brainly ($9.99–$29.99/mo) vs ExamGhost
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Brainly gives you a 2021 forum post with the wrong numbers.{' '}
                                    <span className="underline decoration-emerald-700/40 decoration-wavy underline-offset-4">
                                        ExamGhost solves yours in 0.3s.
                                    </span>
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-6 max-w-2xl">
                                    In high school, everyone gets the exact same worksheet—so Brainly&apos;s forum works fine. In college, Canvas Question Banks, WebAssign, and McGraw-Hill randomize the numbers for every student. Searching Brainly means watching unskippable video ads just to unlock an archived answer computed for someone else&apos;s numbers.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Randomized Math</div>
                                        <div className="font-display font-extrabold text-base text-ink">Solves YOUR Numbers</div>
                                        <div className="text-[11px] text-ink-muted">vs old cached forum posts</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Canvas Stealth</div>
                                        <div className="font-display font-extrabold text-base text-ink">0.3s Double-Click</div>
                                        <div className="text-[11px] text-ink-muted">vs right-click tab switches</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">STEM Pricing</div>
                                        <div className="font-display font-extrabold text-base text-ink">50 Free · $8.25/mo</div>
                                        <div className="text-[11px] text-ink-muted">vs $29.99/mo Brainly Tutor</div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#cdeecb]" aria-hidden="true" />
                                        <span>Start 50 Free Solves ($0 · Zero Ads)</span>
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live Canvas Demo</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Randomized Variable Mismatch Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#161922] text-white p-6 sm:p-7 border border-black/20 shadow-lift">
                                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                        <div>
                                            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                                                Randomized Question Bank Test
                                            </div>
                                            <div className="font-display font-bold text-base sm:text-lg text-white mt-0.5">
                                                Your Canvas Question: <code className="text-[#cdeecb]">v₀ = 18.4 m/s, θ = 37°</code>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Brainly Forum Match */}
                                    <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-500/30 mb-4">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="font-bold text-xs text-rose-200">Brainly Search Result (2021 Forum Post)</span>
                                            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold">
                                                WRONG VARIABLES
                                            </span>
                                        </div>
                                        <div className="text-xs text-white/80 font-mono mb-2">
                                            Matched Thread: &quot;...launch speed <span className="text-rose-300 underline">v₀ = 12.0 m/s, θ = 45°</span>&quot;
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-[11px] text-rose-200 flex items-center justify-between">
                                            <span>Answer: 14.69 m (Posted for +5 pts)</span>
                                            <span className="text-rose-400 font-bold">✗ Marked Wrong (0/5 pts)</span>
                                        </div>
                                    </div>

                                    {/* ExamGhost Live Compute */}
                                    <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="font-bold text-xs text-emerald-200">ExamGhost 0.3s Live Compute</span>
                                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                                                EXACT MATCH
                                            </span>
                                        </div>
                                        <div className="text-xs text-white/80 font-mono mb-2">
                                            Parsed Live DOM: <span className="text-emerald-300">v₀ = 18.4 m/s, θ = 37°</span>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-[11px] text-emerald-200 flex items-center justify-between">
                                            <span>Answer: 33.24 m (Auto-Selected in 0.3s)</span>
                                            <span className="text-emerald-300 font-bold">✓ 100% Correct (5/5 pts)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB COMPARISON SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-amber-950 mb-3">
                            <MousePointerClick className="w-3.5 h-3.5" />
                            Interactive Breakdown · Click Any Tab to Compare
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Why College Students Outgrow Brainly on Timed Exams
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Compare how Brainly and ExamGhost handle randomized STEM problems, Canvas Quiz Log detection, and subscription pricing.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <input type="radio" name="br_tabs" id="br-accuracy" className="sr-only peer/accuracy" defaultChecked />
                        <input type="radio" name="br_tabs" id="br-stealth" className="sr-only peer/stealth" />
                        <input type="radio" name="br_tabs" id="br-pricing" className="sr-only peer/pricing" />

                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f5f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="br-accuracy"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/accuracy:bg-ink peer-checked/accuracy:text-white peer-checked/accuracy:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Calculator className="w-4 h-4" />
                                <span>1. Forum Posts vs Live STEM AI</span>
                            </label>
                            <label
                                htmlFor="br-stealth"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/stealth:bg-ink peer-checked/stealth:text-white peer-checked/stealth:shadow-sm flex items-center justify-center gap-2"
                            >
                                <EyeOff className="w-4 h-4" />
                                <span>2. Right-Click Search vs Stealth</span>
                            </label>
                            <label
                                htmlFor="br-pricing"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/pricing:bg-ink peer-checked/pricing:text-white peer-checked/pricing:shadow-sm flex items-center justify-center gap-2"
                            >
                                <DollarSign className="w-4 h-4" />
                                <span>3. $29.99 Tutor Upsell vs $8.25/mo</span>
                            </label>
                        </div>

                        {/* TAB 1: ACCURACY */}
                        <div className="hidden peer-checked/accuracy:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">Brainly Forum Archive</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Points-Farming Guesses &amp; Static Textbook Threads
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Gamified &quot;Points Farming&quot;:</strong> Because Brainly rewards users with points for answering fast, thousands of threads contain rushed, wrong guesses.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Fails on Diagrams &amp; Locked Images:</strong> You can&apos;t right-click search a circuit diagram, organic chemistry structure, or Canvas graph.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Unskippable Video Ads &amp; CAPTCHAs:</strong> Free users lose 60–90 seconds per question clearing Cloudflare challenges and video ad gates.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">ExamGhost 0.3s STEM Engine</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Fresh 99.4% Computation for Your Exact Screen
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Solves Randomized &amp; Brand-New Questions:</strong> Evaluates every live number, LaTeX formula, and answer choice dynamically in 0.3s.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Snap-It Vision OCR (`⌘+Shift+S`):</strong> Crops any locked graph, table, or chemical structure right on your exam page.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Zero Ads or CAPTCHAs:</strong> Every solve—including your 50 Free Solves—is instant and ad-free.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: STEALTH */}
                        <div className="hidden peer-checked/stealth:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">Brainly Homework Help Extension</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        &quot;Select &amp; Search&quot; Triggers Immediate Canvas Quiz Logs
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        The official Brainly Chrome extension (by <code>Brainly sp. z o.o.</code>) adds a right-click <strong>&quot;Select &amp; Search&quot;</strong> menu item built for Google Classroom and Quizlet. During a Canvas or Blackboard exam:
                                    </p>
                                    <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                                        <li>• If your professor disables right-click or text highlighting on Canvas, Brainly cannot select the question.</li>
                                        <li>• Opening Brainly&apos;s search panel or switching tabs to <code>brainly.com</code> fires <code>window.blur</code> and logs <strong>&quot;Stopped viewing the Canvas quiz-taking page&quot;</strong> in red.</li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">ExamGhost Stealth Architecture</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Built-In Copy Unlocker + 4-Layer Focus Shield
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost automatically restores right-click and text selection on locked portals, or solves silently with a simple double-click:
                                    </p>
                                    <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                                        <li>• <strong>4-Layer Focus Shield:</strong> Intercepts <code>window.blur</code>, <code>focusout</code>, and <code>visibilitychange</code> so Canvas logs 100% continuous focus.</li>
                                        <li>• <strong>Closed Shadow DOM + Panic Key (`⌘+Shift+U`):</strong> Zero host DOM mutations, and instant &lt;8ms memory flush if anyone walks past your desk.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: PRICING */}
                        <div className="hidden peer-checked/pricing:block">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-3xl bg-[#faf8f4] border border-black/10">
                                    <div className="text-xs font-mono uppercase text-amber-900 font-bold mb-1">Brainly Plus</div>
                                    <div className="font-display text-3xl font-extrabold text-ink mb-1">$9.99<span className="text-sm font-normal text-ink-muted">/mo</span></div>
                                    <div className="text-xs text-ink-muted mb-4">Or ~$39.99/yr ($3.33/mo)</div>
                                    <p className="text-xs text-ink-secondary leading-relaxed">
                                        Only removes ads on community forum posts. Does <strong>not</strong> include live STEM tutor help or any Canvas Focus Shield.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-mono uppercase text-rose-900 font-bold mb-1">Brainly Tutor (STEM Tier)</div>
                                    <div className="font-display text-3xl font-extrabold text-ink mb-1">$29.99<span className="text-sm font-normal text-ink-muted">/mo</span></div>
                                    <div className="text-xs text-rose-800 font-semibold mb-4">Or ~$95.99/yr ($383.96 / 4 yrs)</div>
                                    <p className="text-xs text-ink-secondary leading-relaxed">
                                        Waiting 5–20 minutes for a human chat tutor to type out calculus steps is useless during a timed 45-minute college exam.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-950 text-white border border-emerald-700">
                                    <div className="text-xs font-mono uppercase text-[#cdeecb] font-bold mb-1">ExamGhost All-In-One</div>
                                    <div className="font-display text-3xl font-extrabold text-white mb-1">$8.25<span className="text-sm font-normal text-white/75">/mo ($99/yr)</span></div>
                                    <div className="text-xs text-[#cdeecb] font-semibold mb-4">Or $19/mo · $199 Lifetime + 50 Free Solves</div>
                                    <p className="text-xs text-white/85 leading-relaxed">
                                        Includes 0.3s STEM Vision OCR, Auto-Fill, Smart Highlight, and 4-Layer Focus Shield on every plan—starting with 50 Free Solves ($0).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDE-BY-SIDE COMPARISON TABLE */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                Brainly vs ExamGhost: 2026 Feature &amp; Pricing Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-medium">Brainly Plus / Brainly Tutor vs ExamGhost</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Evaluation Criteria</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-emerald-950 bg-[#cdeecb]/40">ExamGhost</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">Brainly (Plus / Tutor)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Core Answer Engine</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">0.3s Live Multimodal AI + STEM Vision OCR</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">Crowdsourced Q&amp;A Forum Archive + Chat Tutors</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Randomized STEM Variables</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Computes Exact Answer for Your Live Numbers</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Returns Static Forum Posts with Wrong Numbers</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Canvas Quiz Log Protection</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">4-Layer Focus Shield (0 Blur Flags)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None (Right-Click Search Logs Departure)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Diagrams, Graphs &amp; Locked Text</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Snap-It Vision (⌘+Shift+S) + Copy Unlocker</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Requires Selectable Text Strings</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Free Tier Experience</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves ($0 · No Card · Zero Ads)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Blurred Answers &amp; Unskippable Video Ads</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Paid Plans</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">$19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">$9.99/mo (Plus) or $29.99/mo (Brainly Tutor)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-ink-muted">
                            Everything students ask when comparing Brainly and ExamGhost.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all open:shadow-md"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-4 text-xs sm:text-sm text-ink-secondary leading-relaxed pt-3 border-t border-black/5">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* BESPOKE CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#fef3c7] via-[#e2f5ea] to-[#cdeecb] p-8 sm:p-10 border border-black/10 shadow-card mb-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>Zero Video Ads · Solves Randomized Numbers · 50 Free Solves</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                    Stop copying 2021 forum answers with the wrong numbers.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Double-click any Canvas, Blackboard, or WebAssign question to solve your exact live variables in 0.3 seconds. Start free with 50 solves ($0, no card).
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#cdeecb]" />
                                    <span>Get 50 Free Solves</span>
                                </Link>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white hover:bg-white/90 text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5"
                                >
                                    <span>Try Live Demo</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                                <a
                                    href="https://discord.gg/aCcsyKYJq4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#3b47d6] hover:bg-[#313cb8] text-white shadow-sm inline-flex items-center gap-1.5"
                                >
                                    <FaDiscord className="w-4 h-4" />
                                    <span>Discord</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <Link prefetch={false} href="/coursehero-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Course Hero vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">PDF unlock wall vs 0.3s AI</div>
                        </Link>
                        <Link prefetch={false} href="/homeworkify-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Homeworkify vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Shutdown notice &amp; safe alternative</div>
                        </Link>
                        <Link prefetch={false} href="/studymonkey-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">StudyMonkey vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Phone camera vs desktop stealth</div>
                        </Link>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">All 57 Extensions</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Full 2026 Comparison Hub</div>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
