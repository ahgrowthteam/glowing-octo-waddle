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
    ShieldAlert,
    EyeOff,
    Lock,
    Globe,
    Sparkles,
    Search,
    RefreshCw
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Homeworkify vs ExamGhost (2026) — Shutdown & Stealth Audit",
    },
    description: "Homeworkify shut down permanently and copycat clones spread malware. See why students use ExamGhost to solve live Canvas quizzes in 0.3s (50 Free Solves).",
    alternates: {
        canonical: "https://examghost.com/homeworkify-vs-examghost",
    },
    openGraph: {
        title: "Homeworkify vs ExamGhost (2026) — Shutdown & Stealth Audit",
        description: "Homeworkify shut down permanently and copycat clones spread malware. See why students use ExamGhost to solve live Canvas quizzes in 0.3s (50 Free Solves).",
        url: "https://examghost.com/homeworkify-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Homeworkify vs ExamGhost (2026) — Shutdown & Stealth Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Homeworkify vs ExamGhost (2026) — Shutdown & Stealth Audit",
        description: "Homeworkify shut down permanently and copycat clones spread malware. See why students use ExamGhost to solve live Canvas quizzes in 0.3s (50 Free Solves).",
        images: ["/og-image.jpg"],
    },
};

export default function HomeworkifyVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-10",
                "dateModified": "2026-03-27",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/homeworkify-vs-examghost#webpage",
                "url": "https://examghost.com/homeworkify-vs-examghost",
                "name": "Homeworkify vs ExamGhost (2026) | Official Shutdown Notice, Malware Clones & Best Alternative",
                "description": "2026 comparison of Homeworkify (homeworkify.st / homeworkify.eu) and its copycat clones against ExamGhost's closed Shadow DOM solver and Focus Shield.",
                "breadcrumb": {
                    "@id": "https://examghost.com/homeworkify-vs-examghost#breadcrumb"
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
                        "name": "Homeworkify",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web Application (Permanently Discontinued)"
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/homeworkify-vs-examghost#breadcrumb",
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
                        "name": "Homeworkify vs ExamGhost",
                        "item": "https://examghost.com/homeworkify-vs-examghost"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/homeworkify-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What does the official Homeworkify.st website display in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "When you visit https://homeworkify.st directly, the server returns a static HTML notice stating verbatim: 'Hello, We regret to inform you that, as of July 26, 2024, all Homeworkify services are permanently unavailable. We do not have any other alternate domains. Homeworkify.eu and Homeworkify.st are our only domains and both are permanently deleted. Other websites calling themselves Homeworkify are fake and may infect your device with malware.'"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are copycat sites like homeworkify.co.uk, homeworkify.im, or homeworkify.net safe to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. As the original operators explicitly warn on homeworkify.st, every third-party site currently using the 'Homeworkify' name is an unofficial clone designed to harvest student credentials, serve pop-under adware, or trap students in credit-card phishing loops without actually unblurring Chegg links."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why did Homeworkify never work on live Canvas or Blackboard exams even before it shut down?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Homeworkify was a URL-paste unblur scraper that required you to search Google in a second tab, find an existing public Chegg URL matching your homework question, and paste that link into Homeworkify. During a live Canvas, Blackboard, or McGraw Hill exam, questions are private LMS nodes or randomized STEM formulas with no public Chegg URL—and leaving your exam tab to search Google immediately logs window.blur and visibilitychange events in Canvas SpeedGrader."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the safest 2026 alternative to Homeworkify for live exams and homework?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost replaces dead URL unblurring with live 0.3s multimodal AI + STEM Vision OCR inside an undetectable closed Shadow DOM. You never leave your active Canvas or Blackboard tab, never paste public URLs, and can test it risk-free with 50 Free Question Solves (no credit card required) before choosing $19/mo, $99/yr ($8.25/mo), or $199 Lifetime."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-mint/40 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-semibold">Homeworkify vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: Verbatim homeworkify.st Tombstone Browser Window vs 0.3s In-Tab Solver */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#161821] text-white p-6 sm:p-10 md:p-14 border border-white/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-xs font-bold text-rose-200">
                                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                                <span>2026 Security Advisory · homeworkify.st &amp; homeworkify.eu Permanently Deleted</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-[11px] font-bold uppercase tracking-wider">
                                Safe 2026 Alternative: 50 Free Solves
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.06] mb-5">
                                    Homeworkify is dead—and its clone sites spread malware.{' '}
                                    <span className="text-[#cdeecb]">
                                        Solve live exams in 0.3s instead.
                                    </span>
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
                                    Following Chegg&apos;s federal lawsuit, the real creators of Homeworkify permanently shut down <code>homeworkify.st</code> and <code>homeworkify.eu</code> and posted an official warning: <strong>every single copycat site using the Homeworkify name today is a fake malware trap</strong>. Even better? With ExamGhost, you don&apos;t need a public Chegg URL—just double-click any Canvas or Blackboard question for a 0.3s solve.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#cdeecb] mb-0.5">No Chegg Link Needed</div>
                                        <div className="font-display font-extrabold text-base text-white">Solves Unseen Qs</div>
                                        <div className="text-[11px] text-white/60">Works on randomized math</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#cdeecb] mb-0.5">Canvas Stealth</div>
                                        <div className="font-display font-extrabold text-base text-white">Stay in Your Tab</div>
                                        <div className="text-[11px] text-white/60">0 SpeedGrader blur flags</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#cdeecb] mb-0.5">Free Evaluation</div>
                                        <div className="font-display font-extrabold text-base text-white">50 Free Solves</div>
                                        <div className="text-[11px] text-white/60">$0 · Zero adware or cards</div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="px-7 py-4 rounded-full text-sm font-bold bg-[#cdeecb] hover:bg-[#bae3b7] text-ink shadow-lift inline-flex items-center gap-2.5 transition-transform hover:-translate-y-0.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-emerald-950" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 · No Card)</span>
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live 0.3s Sandbox</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Verbatim homeworkify.st Tombstone Browser Mockup */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#0d0f14] border border-rose-500/40 shadow-lift overflow-hidden">
                                    {/* Browser Bar */}
                                    <div className="px-4 py-3 bg-[#1a1d27] border-b border-white/10 flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                        </div>
                                        <div className="flex-1 mx-2 px-3 py-1 rounded-lg bg-black/50 border border-white/10 font-mono text-[11px] text-white/80 flex items-center gap-1.5 truncate">
                                            <Globe className="w-3 h-3 text-rose-400 shrink-0" />
                                            <span>https://homeworkify.st</span>
                                        </div>
                                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">
                                            Live HTML
                                        </span>
                                    </div>

                                    {/* Verbatim Tombstone Message */}
                                    <div className="p-6 font-mono text-xs leading-relaxed text-white/90 space-y-3 bg-[#11131a]">
                                        <div className="text-[11px] text-rose-300 uppercase tracking-wider font-bold">
                                            Verbatim Server Response from homeworkify.st:
                                        </div>
                                        <blockquote className="p-4 rounded-2xl bg-black/60 border border-rose-500/30 text-white/90 space-y-2.5 text-xs">
                                            <p>&quot;Hello,</p>
                                            <p>
                                                We regret to inform you that, as of <strong className="text-rose-300">July 26, 2024</strong>, all Homeworkify services are permanently unavailable.
                                            </p>
                                            <p className="text-amber-300">
                                                We do not have any other alternate domains. Homeworkify.eu and Homeworkify.st are our only domains and both are permanently deleted.
                                            </p>
                                            <p className="text-rose-300 font-bold">
                                                Other websites calling themselves Homeworkify are fake and may infect your device with malware.&quot;
                                            </p>
                                        </blockquote>
                                        <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 font-sans text-xs flex items-start gap-2">
                                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <div>
                                                <strong>Don&apos;t risk malware clones:</strong> ExamGhost runs inside a sandboxed Chrome extension with 0 ads, 0 popups, and 50 Free Solves.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 2-TAB COMPARISON: OLD URL UNBLUR WORKFLOW VS 2026 CLONE SCAMS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-xs font-bold text-rose-900 mb-3">
                            <Sparkles className="w-3.5 h-3.5" />
                            Interactive Breakdown · Why ExamGhost Is Better Than Homeworkify Ever Was
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Why URL Unblurring Was Always Broken for Live Exams
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Even before Homeworkify shut down, pasting Chegg links never worked on timed Canvas quizzes. Click either tab below to see why.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="hw_tabs" id="hw-workflow" className="sr-only peer/workflow" defaultChecked />
                        <input type="radio" name="hw_tabs" id="hw-clones" className="sr-only peer/clones" />

                        {/* Tab Headers */}
                        <div className="grid sm:grid-cols-2 gap-2.5 p-2 rounded-2xl bg-[#f5f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="hw-workflow"
                                className="cursor-pointer rounded-xl py-3.5 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/workflow:bg-ink peer-checked/workflow:text-white peer-checked/workflow:shadow-sm flex items-center justify-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                <span>1. Old Chegg URL Unblur vs 0.3s Live AI Solve</span>
                            </label>
                            <label
                                htmlFor="hw-clones"
                                className="cursor-pointer rounded-xl py-3.5 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/clones:bg-ink peer-checked/clones:text-white peer-checked/clones:shadow-sm flex items-center justify-center gap-2"
                            >
                                <AlertTriangle className="w-4 h-4" />
                                <span>2. How Fake 2026 &quot;Homeworkify&quot; Clones Trap You</span>
                            </label>
                        </div>

                        {/* TAB 1: WORKFLOW */}
                        <div className="hidden peer-checked/workflow:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-200">
                                        <div>
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 block">The Old Homeworkify Way</span>
                                            <h3 className="font-display font-bold text-lg text-ink">5 Steps + Tab-Switch Flags + Wrong Numbers</h3>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-rose-200 text-rose-950 font-mono text-xs font-bold">
                                            Flagged on Canvas
                                        </span>
                                    </div>
                                    <ol className="space-y-3 text-xs sm:text-sm text-ink-secondary mb-5">
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                                            <div>Highlight your Canvas question and open a new Google tab (<strong>Canvas immediately logs &quot;Stopped viewing quiz page&quot;</strong>).</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                                            <div>Pray that someone posted your exact question on Chegg years ago (fails 100% of the time if your professor wrote a new question or used a locked image/graph).</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                                            <div>Copy the Chegg URL, paste it into Homeworkify, solve CAPTCHAs, and wait for a cached screenshot.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                                            <div>Realize the cached Chegg post used <code>m = 14 kg</code> while your randomized Canvas question uses <code>m = 22 kg</code>—so the final answer is wrong anyway.</div>
                                        </li>
                                    </ol>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-200">
                                        <div>
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">The ExamGhost Way</span>
                                            <h3 className="font-display font-bold text-lg text-ink">Double-Click In-Tab · Computes Your Exact Numbers</h3>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-950 font-mono text-xs font-bold">
                                            0.3s · 0 Blur Flags
                                        </span>
                                    </div>
                                    <ol className="space-y-3 text-xs sm:text-sm text-ink-secondary mb-5">
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                                            <div><strong>Stay inside your exam tab:</strong> Double-click any question or press <code>⌘+Shift+S</code> to crop any diagram, graph, or circuit schematic.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                                            <div><strong>Solves Brand-New &amp; Randomized Questions:</strong> Computes the exact math for <em>your</em> randomized numbers in 0.3 seconds—no Chegg link needed.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                                            <div><strong>Invisible Auto-Fill or Smart Highlight:</strong> Automatically checks the right radio button or subtly highlights it without injecting visible HTML into Canvas.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                                            <div><strong>4-Layer Focus Shield:</strong> Keeps your Canvas SpeedGrader activity log 100% clean from start to finish.</div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: CLONE SCAMS */}
                        <div className="hidden peer-checked/clones:block">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-mono font-bold uppercase text-rose-800 mb-2">Clone Trap #1</div>
                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        Fake &quot;Click Allow to Verify You Are Human&quot; Popups
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        Copycat domains like <code>homeworkify.co.uk</code>, <code>homeworkify.im</code>, and <code>homeworkify.net</code> trick students into enabling browser push notifications or running clipboard PowerShell commands that install info-stealer malware.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-mono font-bold uppercase text-rose-800 mb-2">Clone Trap #2</div>
                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        Infinite Redirects That Never Unblur Anything
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        Because Chegg patched its server-side session tokens in 2024, none of the clone sites can actually unblur Chegg answers. They simply bounce you through 4 ad-network timers before showing a fake &quot;Server Busy — Upgrade to VIP&quot; screen.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="text-xs font-mono font-bold uppercase text-emerald-800 mb-2">The Safe Solution</div>
                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        Sandboxed Chrome Extension + 50 Free Solves
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        ExamGhost is a verified Manifest V3 extension with zero ads, zero notification spam, and <strong>50 Free Solves ($0, no credit card required)</strong> so you can verify accuracy on your own coursework immediately.
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
                                Homeworkify (and 2026 Clones) vs ExamGhost: Side-by-Side Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-medium">2026 Availability, Security &amp; Exam Stealth</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Comparison Dimension</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-emerald-950 bg-[#cdeecb]/40">ExamGhost (2026)</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">Homeworkify / Copycat Clones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Official 2026 Service Status</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Active · 99.98% Uptime Across 20+ LMSs</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Permanently Deleted (July 26, 2024)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Device &amp; Malware Safety</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Sandboxed MV3 · Zero Ads or Trackers</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Official Warning: Clones Spread Malware</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Solves Unseen &amp; Professor-Written Questions</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Yes (0.3s Live AI + STEM Vision OCR)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">No (Required Pre-Existing Public Chegg URL)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Randomized STEM Numbers</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Computes Exact Answer for Your Variables</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Returned Static Cached Numbers Only</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Canvas SpeedGrader Focus Protection</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">4-Layer Focus Shield (0 Blur Flags)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None (Required Leaving Exam Tab)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Free Trial &amp; Transparent Pricing</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves ($0) · $19/mo · $99/yr · $199 Life</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Discontinued / Unofficial Scam Clones</td>
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
                            Everything students need to know about Homeworkify&apos;s shutdown, copycat sites, and ExamGhost.
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
                    <div className="rounded-[32px] bg-gradient-to-r from-[#ffe4e6] via-[#e2f5ea] to-[#cdeecb] p-8 sm:p-10 border border-black/10 shadow-card mb-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>No Chegg Links · Zero Malware Clones · 50 Free Solves</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                    Stop hunting for dead Homeworkify mirrors.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Solve any Canvas, Blackboard, McGraw-Hill, or Pearson question directly in your exam tab in 0.3 seconds. Start free with 50 solves ($0, no card required).
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#cdeecb]" />
                                    <span>Claim 50 Free Solves</span>
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
                        <Link prefetch={false} href="/brainly-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Brainly vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Forum answers vs 0.3s live AI</div>
                        </Link>
                        <Link prefetch={false} href="/coursehero-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Course Hero vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">PDF unlock wall vs in-tab AI</div>
                        </Link>
                        <Link prefetch={false} href="/gauth-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Gauth AI vs ExamGhost</div>
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
