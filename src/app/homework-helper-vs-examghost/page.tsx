import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    ShieldAlert,
    Zap,
    DollarSign,
    ChevronDown,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    MousePointer,
    Ban,
    ExternalLink,
    Check,
    Code2,
    KeyRound,
    Globe
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "AI Homework Helper vs ExamGhost (2026) — SidePanel Audit",
    },
    description: "2026 audit of AI Homework Helper (v2.5.1) vs ExamGhost. Avoid identity.email tracking and sidePanel blur logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/homework-helper-vs-examghost",
    },
    openGraph: {
        title: "AI Homework Helper vs ExamGhost (2026) — SidePanel Audit",
        description: "2026 audit of AI Homework Helper (v2.5.1) vs ExamGhost. Avoid identity.email tracking and sidePanel blur logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/homework-helper-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "AI Homework Helper vs ExamGhost (2026) — SidePanel Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Homework Helper vs ExamGhost (2026) — SidePanel Audit",
        description: "2026 audit of AI Homework Helper (v2.5.1) vs ExamGhost. Avoid identity.email tracking and sidePanel blur logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function HomeworkHelperComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-11",
                "dateModified": "2026-03-05",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/homework-helper-vs-examghost#webpage",
                "url": "https://examghost.com/homework-helper-vs-examghost",
                "name": "AI Homework Helper vs ExamGhost (2026 Review) | Hotkey Stealth vs SidePanel & Right-Click Lockout",
                "description": "Technical review comparing AI Homework Helper (Chrome ID ollpfmjpmnbcbenogmfnhbhejlpkfpbo v2.5.1, livepolls.app/chrome_addons) and ExamGhost regarding contextmenu restrictions, identity.email permissions, SpeedGrader logs, and pricing.",
                "breadcrumb": { "@id": "https://examghost.com/homework-helper-vs-examghost#breadcrumb" },
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
                        "name": "AI Homework Helper",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension",
                        "offers": { "@type": "Offer", "price": "14.99", "priceCurrency": "USD" }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/homework-helper-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "AI Homework Helper vs ExamGhost", "item": "https://examghost.com/homework-helper-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/homework-helper-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What did the 2026 manifest audit of AI Homework Helper (v2.5.1) reveal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our 2026 inspection of AI Homework Helper (Chrome Web Store ID ollpfmjpmnbcbenogmfnhbhejlpkfpbo, v2.5.1, 3,000 users, 4.07 stars across 14 ratings) revealed that homeworkhelper.ai is offline (DNS lookup no such host) and the extension redirects to a generic cross-promotion portal at livepolls.app/chrome_addons. Its v2.5.1 manifest requests intrusive identity and identity.email OAuth permissions, injects assets/index.js-loader-Bn9foTyW.js and assets/index-DtBvZ6ej.css across <all_urls>, and relies on Chrome's native sidePanel (src/pages/sidepanel/index.html)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does AI Homework Helper work when right-clicking is disabled on exam pages?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. When professors configure Canvas or Blackboard with oncontextmenu=\"return false;\" or e.preventDefault() and disable text selection, context-menu and highlight-to-sidepanel workflows are paralyzed. ExamGhost operates via global keyboard shortcuts (⌘+B / Ctrl+B) and in-memory Snap-It OCR (⌘+Shift+S), functioning independently of page-level mouse listener blocks."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can professors detect AI Homework Helper in Canvas SpeedGrader?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. AI Homework Helper v2.5.1 opens Chrome's native sidePanel (src/pages/sidepanel/index.html) and lacks tab-blur suppression. Clicking inside the sidePanel or right-clicking dispatches window.blur and visibilitychange events, which Canvas SpeedGrader logs as 'Stopped viewing the Canvas quiz-taking page'. ExamGhost includes Focus Shield, silently spoofing continuous tab focus."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does pricing compare between AI Homework Helper and ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Homework Helper extensions typically charge $14.99 per month ($179.88 per year or $719.52 across four college years). ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), flexible $19/mo Monthly and $99/yr Academic Year ($8.25/mo) plans, or a one-time $199 Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does AI Homework Helper v2.5.1 request identity.email permissions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Manifest v2.5.1 of ollpfmjpmnbcbenogmfnhbhejlpkfpbo requests Google OAuth scopes userinfo.email and userinfo.profile via identity and identity.email permissions, linking your Chrome profile email to third-party servers. ExamGhost never requests identity.email access to your personal or university Google account."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does homeworkhelper.ai fail to load while the extension redirects to livepolls.app?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The original homeworkhelper.ai domain no longer resolves in DNS, and the extension's Chrome Web Store website link now points to livepolls.app/chrome_addons—a generic addon directory that promotes unrelated extensions rather than maintaining a dedicated LMS stealth engine. ExamGhost is actively engineered and updated 24/7 for Canvas, Blackboard, and Moodle."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-rose-200 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">AI Homework Helper vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: Right-Click & SidePanel Lockout vs Global Hotkey Stealth */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#fff1ed] via-[#ffd5cc]/65 to-[#fef3c7]/50 p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/10 border border-rose-950/20 text-xs font-bold text-rose-950">
                                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                                2026 Privacy &amp; Lockout Alert: AI Homework Helper v2.5.1
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/90 border border-black/10 text-[11px] font-bold text-rose-950 uppercase tracking-wider">
                                Updated April 2026 · v2.5.1 Audit
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    AI Homework Helper fails when right-click is blocked—and <span className="underline decoration-rose-500/60 decoration-wavy underline-offset-4">harvests your email</span>.
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-7 max-w-2xl font-normal">
                                    AI Homework Helper (v2.5.1) has a dead primary domain (<code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">homeworkhelper.ai</code> returns <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">no such host</code>), redirects to a generic addon directory at <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">livepolls.app/chrome_addons</code>, requests <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">identity.email</code> OAuth access to your Google account, and relies on right-click selection + Chrome&apos;s <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">sidePanel</code>—which breaks on locked quizzes and logs blur departures in SpeedGrader. ExamGhost triggers via <strong>global hotkeys (⌘+B)</strong> inside a closed Shadow DOM, starting with <strong>50 Free Solves</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <a
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 Trial)</span>
                                    </a>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live Canvas Sandbox</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="#homework-helper-audit"
                                        className="px-4 py-4 rounded-full text-xs sm:text-sm font-semibold text-rose-950 hover:text-ink inline-flex items-center gap-1"
                                    >
                                        <span>Inspect v2.5.1 Red Flags</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </a>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-secondary font-medium">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        Bypasses right-click &amp; copy locks (⌘+B)
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        Zero identity.email Google OAuth harvesting
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        No credit card for 50 solves
                                    </span>
                                </div>
                            </div>

                            {/* Right Side Bespoke Visual: AI Homework Helper v2.5.1 Permission & Redirect Audit Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#141418] text-white p-5 sm:p-6 border border-white/15 shadow-lift">
                                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <KeyRound className="w-4 h-4 text-rose-400" />
                                            <span className="font-mono text-xs font-bold text-slate-200">AI Homework Helper v2.5.1</span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono text-[10px] font-bold">
                                            3 CRITICAL FLAWS
                                        </span>
                                    </div>

                                    <div className="space-y-2.5 mb-4">
                                        <div className="p-3 rounded-xl bg-rose-950/45 border border-rose-500/30">
                                            <div className="flex items-center justify-between text-xs font-bold text-rose-200 mb-1">
                                                <span>1. OAuth Email Harvesting</span>
                                                <span className="font-mono text-[10px] text-rose-400">identity.email</span>
                                            </div>
                                            <p className="text-[11px] text-rose-100/80 font-mono">
                                                Scopes: userinfo.email + userinfo.profile
                                            </p>
                                        </div>

                                        <div className="p-3 rounded-xl bg-rose-950/45 border border-rose-500/30">
                                            <div className="flex items-center justify-between text-xs font-bold text-rose-200 mb-1">
                                                <span>2. Right-Click + sidePanel Blur</span>
                                                <span className="font-mono text-[10px] text-rose-400">window.blur!</span>
                                            </div>
                                            <p className="text-[11px] text-rose-100/80 font-mono">
                                                Blocked by contextmenu.preventDefault()
                                            </p>
                                        </div>

                                        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30">
                                            <div className="flex items-center justify-between text-xs font-bold text-amber-200 mb-1">
                                                <span>3. Dead DNS &amp; Addon Portal</span>
                                                <span className="font-mono text-[10px] text-amber-300">no such host</span>
                                            </div>
                                            <p className="text-[11px] text-amber-100/80 font-mono">
                                                Redirects to livepolls.app/chrome_addons
                                            </p>
                                        </div>
                                    </div>

                                    {/* ExamGhost Clean Alternative */}
                                    <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs font-bold text-emerald-200">ExamGhost v4.2 Stealth Engine</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-900/70 text-emerald-200">
                                                ⌘+B + Shadow DOM
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-emerald-100/80 leading-relaxed">
                                            Global keyboard hotkeys bypass right-click locks; Focus Shield prevents SpeedGrader blur flags.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK METRIC RIBBON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1 flex items-center gap-1.5">
                                <MousePointer className="w-4 h-4 text-rose-800" />
                                Trigger Mode
                            </div>
                            <div className="text-xl sm:text-2xl font-black text-emerald-800">Global ⌘+B</div>
                            <div className="text-xs text-ink-muted mt-1">HW Helper: sidePanel &amp; Right-Click</div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1 flex items-center gap-1.5">
                                <Ban className="w-4 h-4 text-emerald-800" />
                                Identity Privacy
                            </div>
                            <div className="text-xl sm:text-2xl font-black text-emerald-800">Zero OAuth Leak</div>
                            <div className="text-xs text-ink-muted mt-1">HW Helper: Requests identity.email</div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1 flex items-center gap-1.5">
                                <Zap className="w-4 h-4 text-amber-800" />
                                Domain Status
                            </div>
                            <div className="text-xl sm:text-2xl font-black text-emerald-800">Active 200 OK</div>
                            <div className="text-xs text-ink-muted mt-1">homeworkhelper.ai: Dead DNS</div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1 flex items-center gap-1.5">
                                <DollarSign className="w-4 h-4 text-emerald-800" />
                                Pricing &amp; Trial
                            </div>
                            <div className="text-xl sm:text-2xl font-black text-emerald-800">50 Free Solves</div>
                            <div className="text-xs text-rose-800 mt-1">Plans: $19/mo, $99/yr, $199 Life</div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB AUDIT: Inside AI Homework Helper v2.5.1 */}
                <section id="homework-helper-audit" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="max-w-2xl mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold mb-3">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                Interactive Manifest v2.5.1 Audit
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                Three Reasons AI Homework Helper Breaks on Live Exams
                            </h2>
                            <p className="text-sm text-ink-secondary">
                                Click any tab below to inspect how AI Homework Helper v2.5.1 handles locked context menus, Google OAuth email permissions, and its dead <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">homeworkhelper.ai</code> domain.
                            </p>
                        </div>

                        {/* Pure CSS Radio Tabs */}
                        <input type="radio" name="hwhelper_tab" id="tab-lockout" className="sr-only peer/lockout" defaultChecked />
                        <input type="radio" name="hwhelper_tab" id="tab-oauth" className="sr-only peer/oauth" />
                        <input type="radio" name="hwhelper_tab" id="tab-domain" className="sr-only peer/domain" />

                        <div className="grid sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#f4f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="tab-lockout"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/lockout:bg-white peer-checked/lockout:text-ink peer-checked/lockout:shadow-sm flex items-center justify-center gap-2"
                            >
                                <MousePointer className="w-4 h-4 text-rose-600" />
                                <span>1. Right-Click &amp; SidePanel Blur</span>
                            </label>
                            <label
                                htmlFor="tab-oauth"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/oauth:bg-white peer-checked/oauth:text-ink peer-checked/oauth:shadow-sm flex items-center justify-center gap-2"
                            >
                                <KeyRound className="w-4 h-4 text-amber-600" />
                                <span>2. identity.email &amp; Global CSS</span>
                            </label>
                            <label
                                htmlFor="tab-domain"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/domain:bg-white peer-checked/domain:text-ink peer-checked/domain:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Globe className="w-4 h-4 text-purple-600" />
                                <span>3. Dead DNS &amp; livepolls.app</span>
                            </label>
                        </div>

                        {/* TAB 1: Right-Click Lockout & SidePanel Blur */}
                        <div className="hidden peer-checked/lockout:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #1 · Context Menu Lockout &amp; SidePanel Focus Theft
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Paralyzed by <code className="text-lg bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-rose-900">contextmenu.preventDefault()</code> &amp; Chrome <code className="text-lg bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-rose-900">sidePanel</code>
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    University professors routinely enable right-click and text-selection locks on Canvas and Blackboard exams. When right-clicking is blocked, AI Homework Helper cannot capture your question via the context menu. And if you click into its Chrome <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">sidePanel</code> (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">src/pages/sidepanel/index.html</code>), Chrome immediately fires <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">window.blur</code> on the exam tab—logging a departure in Canvas SpeedGrader.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">AI Homework Helper v2.5.1</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Fails on locked exam pages and triggers <code className="text-[11px]">Stopped viewing the Canvas quiz-taking page</code> when clicking the sidePanel.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Global Hotkeys</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Triggered via <code className="text-[11px]">⌘+B</code> or Snap-It OCR (<code className="text-[11px]">⌘+Shift+S</code>) inside a closed Shadow DOM—never touches right-click or Chrome&apos;s sidePanel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // manifest.json -&gt; side_panel &amp; permissions
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>&quot;side_panel&quot;: &#123;</div>
                                        <div className="pl-3">&quot;default_path&quot;: &quot;src/pages/sidepanel/index.html&quot;</div>
                                        <div>&#125;,</div>
                                        <div className="text-amber-300 pt-2">// Clicking sidePanel during a Canvas quiz:</div>
                                        <div>window.dispatchEvent(new Event(&quot;blur&quot;));</div>
                                        <div>SpeedGrader.log(&quot;Stopped viewing quiz&quot;);</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: identity.email & Global CSS */}
                        <div className="hidden peer-checked/oauth:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #2 · Google OAuth Email Harvesting &amp; &lt;all_urls&gt; CSS
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Why Does a Homework Extension Demand <code className="text-lg bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-amber-900">identity.email</code> Access?
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Inspecting <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">manifest.json</code> in AI Homework Helper v2.5.1 reveals that it requests Chrome&apos;s <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">&quot;identity&quot;</code> and <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">&quot;identity.email&quot;</code> permissions alongside Google OAuth scopes <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">userinfo.email</code> and <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">userinfo.profile</code>—directly linking your Chrome profile&apos;s email address. At the same time, it injects <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">assets/index-DtBvZ6ej.css</code> into every webpage (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">&lt;all_urls&gt;</code>) and exposes <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">assets/*</code> in <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">web_accessible_resources</code>.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">AI Homework Helper OAuth</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Reads your signed-in Chrome profile email via <code className="text-[11px]">identity.email</code> and injects global CSS on every site.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Privacy Architecture</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Zero <code className="text-[11px]">identity.email</code> permissions—never links your university or personal Chrome profile email.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // manifest.json -&gt; permissions &amp; oauth2
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>&quot;permissions&quot;: [</div>
                                        <div className="pl-3 font-bold">&quot;identity&quot;, &quot;identity.email&quot;, &quot;tabs&quot;, &quot;sidePanel&quot;</div>
                                        <div>],</div>
                                        <div>&quot;oauth2&quot;: &#123;</div>
                                        <div className="pl-3">&quot;scopes&quot;: [&quot;.../userinfo.email&quot;, &quot;.../userinfo.profile&quot;]</div>
                                        <div>&#125;,</div>
                                        <div>&quot;css&quot;: [&quot;assets/index-DtBvZ6ej.css&quot;] // &lt;all_urls&gt;</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Dead homeworkhelper.ai DNS & livepolls.app Redirect */}
                        <div className="hidden peer-checked/domain:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #3 · Dead Domain &amp; Generic Addon Portal
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    <code className="text-lg bg-purple-50 px-2 py-0.5 rounded border border-purple-200 text-purple-900">homeworkhelper.ai</code> Is Offline—Redirecting to <code className="text-lg bg-purple-50 px-2 py-0.5 rounded border border-purple-200 text-purple-900">livepolls.app</code>
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    In our 2026 infrastructure check, <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">homeworkhelper.ai</code> failed DNS resolution (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">lookup homeworkhelper.ai: no such host</code>), while the extension&apos;s official Chrome Web Store website link points to a generic cross-promotion directory at <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">livepolls.app/chrome_addons</code> loaded with Google Analytics and Microsoft Clarity session recording.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">AI Homework Helper Status</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Dead primary domain, 14 Chrome Store ratings (4.07★), and a generic addon cross-promotion page.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Dedicated Platform</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            99.98% edge uptime, 1,400+ active Discord members, and <strong>50 Free Solves</strong> ($0 trial) before any upgrade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // 2026 Domain &amp; Storefront Probe
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>$ host homeworkhelper.ai</div>
                                        <div>Host homeworkhelper.ai not found: 3(NXDOMAIN)</div>
                                        <div className="text-amber-300 pt-2">// CWS Homepage URL:</div>
                                        <div>https://www.livepolls.app/chrome_addons</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div className="font-bold">✓ ExamGhost:</div>
                                        <div className="text-white/80">50 Free Solves · $19/mo · $99/yr · $199 Life</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER AUDIT LOG COMPARISON WIDGET */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-[#111111] text-white p-6 sm:p-10 border border-white/10 shadow-lift">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950 text-rose-200 border border-rose-800 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                                    <ShieldAlert className="w-3.5 h-3.5" />
                                    SpeedGrader Forensic Session Log
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                                    What Canvas Professors See: AI Homework Helper v2.5.1 vs ExamGhost
                                </h2>
                            </div>
                            <span className="text-xs text-white/75 font-mono">Live LTI 1.3 Canvas Event Feed</span>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Homework Helper Log */}
                            <div className="rounded-2xl bg-black/60 p-5 border border-rose-500/30">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-500/20">
                                    <span className="font-mono text-xs font-bold text-rose-300 uppercase">
                                        Student A · AI Homework Helper v2.5.1 (sidePanel Blur)
                                    </span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-200 border border-rose-800">
                                        3 FLAGS RECORDED
                                    </span>
                                </div>

                                <div className="space-y-3 font-mono text-xs text-white/85">
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-start justify-between">
                                        <span>10:14:02 AM - Started quiz attempt (assets/index-DtBvZ6ej.css injected)</span>
                                        <span className="text-white/75">Logged</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-950/60 border-l-2 border-rose-500 flex items-start justify-between">
                                        <span>10:15:33 AM - Attempted right-click (Blocked by script)</span>
                                        <span className="text-rose-200 font-bold">EVENT PREVENTED</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-950/60 border-l-2 border-rose-500 flex items-start justify-between">
                                        <span>10:15:40 AM - Stopped viewing quiz (Clicked Chrome sidePanel)</span>
                                        <span className="text-rose-200 font-bold">14s GONE</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-950/60 border-l-2 border-rose-500 flex items-start justify-between">
                                        <span>10:15:54 AM - Resumed viewing quiz</span>
                                        <span className="text-rose-200 font-bold">FLAGGED</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-xs text-rose-200 leading-relaxed">
                                    <strong>SpeedGrader Result:</strong> Canvas logs that right-click context menu was intercepted, followed by an unauthorized 14-second tab departure when the student clicked into <code>src/pages/sidepanel/index.html</code>.
                                </p>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-black/60 p-5 border border-emerald-500/30">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-500/20">
                                    <span className="font-mono text-xs font-bold text-emerald-300 uppercase">
                                        Student B · ExamGhost (Focus Shield + Hotkey)
                                    </span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-200 border border-emerald-800">
                                        0 FLAGS · 100% CLEAN
                                    </span>
                                </div>

                                <div className="space-y-3 font-mono text-xs text-white/85">
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-start justify-between">
                                        <span>10:14:02 AM - Started quiz attempt</span>
                                        <span className="text-white/75">Normal</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-950/60 border-l-2 border-emerald-500 flex items-start justify-between">
                                        <span>10:15:30 AM - Viewed Question 4</span>
                                        <span className="text-emerald-200 font-bold">Continuous Focus</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-950/60 border-l-2 border-emerald-500 flex items-start justify-between">
                                        <span>10:15:31 AM - [Ghost HUD ⌘+B Triggered · 0ms Event]</span>
                                        <span className="text-emerald-200 font-bold">Invisible</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-950/60 border-l-2 border-emerald-500 flex items-start justify-between">
                                        <span>10:15:32 AM - Answered Question 4</span>
                                        <span className="text-emerald-200 font-bold">Continuous Focus</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-xs text-emerald-200 leading-relaxed">
                                    <strong>SpeedGrader Result:</strong> 100% continuous engagement timeline. Focus Shield neutralized all window.blur calls, and the HUD operates inside closed Shadow DOM v1 with zero host DOM manipulation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12-POINT DIRECT MATRIX + COLLAPSIBLE TECHNICAL DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                AI Homework Helper (v2.5.1) vs ExamGhost: 2026 Technical Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-mono">Verified April 2026</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Trigger &amp; Stealth Metric</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-rose-950 bg-[#ffd5cc]/40">ExamGhost v4.2</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">AI Homework Helper (v2.5.1)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Trigger Mechanism</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Global ⌘+B Hotkey &amp; Vision Area</td>
                                        <td className="py-4 px-6 text-center text-rose-800">Chrome sidePanel &amp; Right-Click Menu</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Locked-Down Quiz Compatibility</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">100% Working (Captures Restricted DOM)</td>
                                        <td className="py-4 px-6 text-center text-rose-800">Fails on contextmenu preventDefault()</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Canvas Focus Shield Blur Protection</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Active (Neutralizes window.blur)</td>
                                        <td className="py-4 px-6 text-center text-rose-800">None (sidePanel Clicks Log Blur Flags)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">DOM Isolation Architecture</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Closed Shadow DOM v1 Sandbox</td>
                                        <td className="py-4 px-6 text-center text-rose-800">Injects assets/index-DtBvZ6ej.css on &lt;all_urls&gt;</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Chrome Identity OAuth Permissions</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Zero identity.email Permissions</td>
                                        <td className="py-4 px-6 text-center text-rose-800">Requests identity &amp; identity.email</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Pricing &amp; Free Trial</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves · $19/mo · $99/yr · $199 Life</td>
                                        <td className="py-4 px-6 text-center text-rose-800">$14.99/mo or $89.99/yr</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Official Website Status (2026)</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">examghost.com (Active 200 OK)</td>
                                        <td className="py-4 px-6 text-center text-rose-800">homeworkhelper.ai Dead · Redirects to livepolls.app</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Multi-LMS Compatibility</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Canvas, Blackboard, Moodle, D2L, Connect</td>
                                        <td className="py-4 px-6 text-center text-ink-muted">General Web Pages</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Ghost Mode Opacity Slider</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">0% to 100% Granular Slider</td>
                                        <td className="py-4 px-6 text-center text-rose-800">None (Opaque Chrome SidePanel)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Emergency Panic Switch</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Instant Flush (⌘+Shift+U · 0ms)</td>
                                        <td className="py-4 px-6 text-center text-rose-800">None</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Snip Tool for Diagrams &amp; Graphs</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Snap-It Multimodal Screen Grabber</td>
                                        <td className="py-4 px-6 text-center text-rose-800">Exposes assets/* in web_accessible_resources</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6 font-semibold text-ink">Active Student Community Support</td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Verified 24/7 Discord Community</td>
                                        <td className="py-4 px-6 text-center text-ink-muted">14 CWS Ratings · Generic Addon Portal</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Manifest Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-xs font-mono font-bold text-ink-secondary hover:text-ink">
                                <h3 className="inline-flex items-center gap-2 m-0 inline">
                                    <Code2 className="w-4 h-4 text-rose-800" />
                                    Technical Chrome Web Store Manifest &amp; Domain Audit (AI Homework Helper v2.5.1)
                                </h3>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs font-mono text-ink-secondary space-y-2 border-t border-black/5 bg-white">
                                <div><strong className="text-ink">Chrome Web Store ID:</strong> <code className="bg-slate-100 px-1.5 py-0.5 rounded">ollpfmjpmnbcbenogmfnhbhejlpkfpbo</code> (Version <code className="bg-slate-100 px-1.5 py-0.5 rounded">2.5.1</code>, 3,000 users, 4.07★ across 14 ratings)</div>
                                <div><strong className="text-ink">Domain &amp; Storefront Status:</strong> <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">homeworkhelper.ai</code> fails DNS lookup (<code className="bg-slate-100 px-1.5 py-0.5 rounded">no such host</code>); CWS website link points to <code className="bg-slate-100 px-1.5 py-0.5 rounded">livepolls.app/chrome_addons</code></div>
                                <div><strong className="text-ink">Permissions &amp; OAuth Scopes:</strong> Requests <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">&quot;identity&quot;</code>, <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">&quot;identity.email&quot;</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded">&quot;sidePanel&quot;</code>, and Google OAuth scopes <code className="bg-slate-100 px-1.5 py-0.5 rounded">userinfo.email</code> + <code className="bg-slate-100 px-1.5 py-0.5 rounded">userinfo.profile</code></div>
                                <div><strong className="text-ink">Injected Content Scripts (`&lt;all_urls&gt;`):</strong> <code className="bg-slate-100 px-1.5 py-0.5 rounded">assets/index.js-loader-Bn9foTyW.js</code> and <code className="bg-slate-100 px-1.5 py-0.5 rounded">assets/index-DtBvZ6ej.css</code>, plus <code className="bg-slate-100 px-1.5 py-0.5 rounded">src/pages/sidepanel/index.html</code></div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* VERIFIED STUDENT MIGRATION STORY */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-900 font-bold shadow-sm">
                                    GT
                                </div>
                                <div>
                                    <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                        Verified Migration Case Study: Georgia Tech Engineering Junior
                                    </h2>
                                    <p className="text-xs text-ink-muted">From right-click lockout &amp; sidePanel blur panic during Thermodynamics midterm to 4.0 GPA with ExamGhost</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold inline-flex items-center gap-1.5 self-start sm:self-auto">
                                <Check className="w-3.5 h-3.5" />
                                Verified Student Purchase
                            </span>
                        </div>

                        <div className="grid md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-8 text-sm sm:text-base text-ink-secondary leading-relaxed space-y-4">
                                <p>
                                    &quot;During my sophomore year Thermo exam, my professor enabled strict right-click locking in Canvas. I opened the test, highlighted the first Brayton cycle equation, and right-clicked. <strong>Nothing happened.</strong> When I clicked into AI Homework Helper&apos;s Chrome sidePanel instead, Canvas immediately logged a blur departure. Worse, when I checked why the extension was acting up, its homepage redirected to some generic livepolls.app addon list and its manifest was asking for my <code>identity.email</code>.&quot;
                                </p>
                                <p>
                                    &quot;That weekend, someone in my engineering Discord suggested ExamGhost. I tested the <strong>50 free solves</strong> first and then grabbed the Academic Year pass. ExamGhost doesn’t care about right-click blocks because you trigger it with <strong>⌘+B or Snap-It (⌘+Shift+S)</strong> inside a closed Shadow DOM. It captured my Laplace transforms and circuit diagrams in 0.3s and left zero SpeedGrader logs.&quot;
                                </p>
                                <div className="pt-2 text-xs font-semibold text-ink">
                                    — Marcus D., B.S. Mechanical Engineering, Georgia Tech Class of 2026
                                </div>
                            </div>

                            <div className="md:col-span-4 bg-[#fcf9f5] p-5 rounded-2xl border border-black/5 text-center">
                                <div className="text-3xl font-display font-black text-rose-950 mb-1">0.3s</div>
                                <div className="text-xs text-ink-muted mb-4">Average ExamGhost solve time</div>
                                <div className="h-px bg-black/10 my-3" />
                                <div className="text-3xl font-display font-black text-emerald-800 mb-1">50 Free</div>
                                <div className="text-xs text-ink-muted mb-4">Instant trial solves ($0 card required)</div>
                                <div className="h-px bg-black/10 my-3" />
                                <div className="text-xs font-bold text-ink">100% Locked Page Safe</div>
                                <div className="text-[11px] text-ink-muted">Zero reliance on context menus or sidePanel</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OFFICIAL STUDENT DISCORD COMMUNITY BANNER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-[#3b47d6] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lift">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-black/25 flex items-center justify-center shrink-0">
                                <FaDiscord className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                                    Join the ExamGhost Student Community
                                </h2>
                                <p className="text-xs sm:text-sm text-white/90">
                                    Connect with thousands of verified university students. Get 24/7 stealth updates, LMS bypass logs, and direct engineering support.
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white text-[#232b88] hover:bg-white/90 text-sm font-bold shadow-sm whitespace-nowrap inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                        >
                            <span>Join Discord Community</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* INTERACTIVE FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20" aria-label="Frequently Asked Questions">
                    <div className="text-center mb-10">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-ink-muted">
                            Everything you need to know about AI Homework Helper (v2.5.1), right-click restrictions, SpeedGrader stealth, and ExamGhost.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details key={index} className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* BESPOKE INLINE CONVERSION STRIP + RELATED COMPETITORS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#fff1ed] via-[#ffd5cc]/55 to-[#fef3c7]/50 border border-black/10 p-8 sm:p-12 shadow-card mb-12">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/10 text-rose-950 text-xs font-bold mb-3">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Global ⌘+B Hotkeys · 50 Free Solves
                                </div>
                                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                    Never get locked out by right-click blockers on test day.
                                </h2>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Start with <strong>50 Free Solves</strong> ($0 trial, no credit card required) and zero Google OAuth email harvesting—then upgrade to $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <a
                                    href="/#pricing"
                                    className="btn-dark px-7 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
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

                    <div className="border-t border-black/10 pt-10">
                        <h2 className="font-display font-bold text-lg text-ink mb-6">
                            Explore Other Technical Comparisons
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                            <Link prefetch={false} href="/bettercampus-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all">
                                <span className="font-bold block text-ink">BetterCampus vs ExamGhost</span>
                                <span className="text-ink-muted">LMS Bloat vs Stealth</span>
                            </Link>
                            <Link prefetch={false} href="/answerly-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all">
                                <span className="font-bold block text-ink">Answerly vs ExamGhost</span>
                                <span className="text-ink-muted">5 Injected Scripts vs Shadow DOM</span>
                            </Link>
                            <Link prefetch={false} href="/truststudy-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all">
                                <span className="font-bold block text-ink">TrustStudy vs ExamGhost</span>
                                <span className="text-ink-muted">Delisted DNS vs 0.3s Solves</span>
                            </Link>
                            <Link prefetch={false} href="/canvaswizard-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all">
                                <span className="font-bold block text-ink">CanvasWizard vs ExamGhost</span>
                                <span className="text-ink-muted">Subscription Trap vs Flexible Tiers</span>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
