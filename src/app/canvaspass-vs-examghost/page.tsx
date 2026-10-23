import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    CheckCircle2,
    XCircle,
    ShieldCheck,
    ShieldAlert,
    Sparkles,
    ArrowRight,
    Lock,
    Layers,
    CreditCard,
    EyeOff,
    Monitor,
    Calculator,
    ChevronDown,
    ExternalLink,
    AlertTriangle,
    Zap,
    Laptop
} from "lucide-react";
import { FaChrome, FaDiscord } from "react-icons/fa";

export const metadata: Metadata = {
    title: {
        absolute: "CanvasPass vs ExamGhost (2026) — Credit Caps vs Unlimited",
    },
    description: "CanvasPass paywalls its Tab-Switch Blocker and burns 10 credits per Smart solve. ExamGhost gives you Focus Shield, 0.3s AI stealth, and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/canvaspass-vs-examghost",
    },
    openGraph: {
        title: "CanvasPass vs ExamGhost (2026) — Credit Caps vs Unlimited",
        description: "CanvasPass paywalls its Tab-Switch Blocker and burns 10 credits per Smart solve. ExamGhost gives you Focus Shield, 0.3s AI stealth, and 50 Free Solves.",
        url: "https://examghost.com/canvaspass-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CanvasPass vs ExamGhost (2026) — Credit Caps vs Unlimited",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CanvasPass vs ExamGhost (2026) — Credit Caps vs Unlimited",
        description: "CanvasPass paywalls its Tab-Switch Blocker and burns 10 credits per Smart solve. ExamGhost gives you Focus Shield, 0.3s AI stealth, and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
                "datePublished": "2026-01-27",
                "dateModified": "2026-03-06",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
            "@id": "https://examghost.com/canvaspass-vs-examghost#webpage",
            url: "https://examghost.com/canvaspass-vs-examghost",
            name: "CanvasPass vs ExamGhost (2026) | Credit Math, Tab-Switch Paywall & OverlayPass Review",
            description: "Comprehensive 2026 comparison of CanvasPass (canvaspass.sbs) and ExamGhost across credit deduction math, tab-switch protection paywalls, DOM button injection vs zero-DOM stealth, and multi-LMS compatibility.",
            inLanguage: "en-US",
            isPartOf: {
                "@type": "WebSite",
                name: "ExamGhost",
                url: "https://examghost.com",
            },
            breadcrumb: {
                "@id": "https://examghost.com/canvaspass-vs-examghost#breadcrumb",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://examghost.com/canvaspass-vs-examghost#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://examghost.com",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Compare Extensions",
                    item: "https://examghost.com/compare-canvas-hack-extensions",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "CanvasPass vs ExamGhost",
                    item: "https://examghost.com/canvaspass-vs-examghost",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://examghost.com/canvaspass-vs-examghost#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What happened to canvaspass.app, and is canvaspass.sbs the same product?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The original canvaspass.app domain no longer resolves in DNS and migrated to canvaspass.sbs, linking to the CanvasPass Chrome extension (ID: hfeeodhaiedlmahknjhcidhcphmnjeam) and Firefox add-on.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does CanvasPass include a Tab-Switch Blocker on its Free or $5/month Starter plan?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. According to CanvasPass's pricing table on canvaspass.sbs, both the Free ($0) plan and the Starter ($5/month) plan explicitly disable the Tab-Switch Blocker, Kiosk Spoof, and Answer Saver. Students must upgrade to at least the Pro ($10/month) tier before CanvasPass blocks Canvas quiz tab-switching events. ExamGhost includes its full Focus Shield (blocking visibilitychange, window.blur, and focusout) on every tier—including the 50 free trial solves.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How many questions can you actually solve on CanvasPass with its credit system?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "While CanvasPass advertises 800 credits/month on Starter ($5/mo) and 1,500 credits/month on Pro ($10/mo), each question costs multiple credits depending on the AI mode. On Starter, 'Fast Mode' (Gemini Flash) deducts 5 credits per question (160 questions total), and 'Smart Mode' (Claude Sonnet) deducts 10 credits per question—meaning 800 credits only covers 80 Smart solves per month. On Pro ($10/mo), Smart Mode deducts 8 credits per question (187 Smart solves/month).",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is OverlayPass, and does it work on MacBooks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "OverlayPass is a separate desktop overlay application sold on canvaspass.sbs for an additional $25/month subscription. However, OverlayPass is strictly Windows-only ('Standalone Windows desktop app') and does not run on macOS, Chromebooks, or Linux. ExamGhost runs natively inside any Chromium browser on both macOS and Windows with zero extra desktop subscription.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does CanvasPass work on Blackboard, Moodle, McGraw Hill Connect, or Pearson MyLab?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. CanvasPass is hardcoded specifically to inject AI buttons next to quiz questions on Instructure Canvas LMS. Even secondary classroom tools listed on its website (Blooket, Kahoot, Quizizz, and IXL) are marked as 'In Development · Unknown (No release date yet).' ExamGhost's Snap-It Vision OCR and Focus Shield work across Canvas, Blackboard Ultra, Moodle, D2L Brightspace, McGraw Hill Connect, Pearson MyLab, Cengage MindTap, and WebAssign.",
                    },
                },
            ],
        },
    ],
};

export default function CanvasPassVsExamGhostPage() {
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
                        <span className="text-ink font-semibold">CanvasPass vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: The $5 Starter Trap & 800-Credit Illusion */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#e0e7ff] via-[#e2f5ea] to-[#cdeecb] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-black/10 text-xs font-bold text-ink">
                                <CreditCard className="w-3.5 h-3.5 text-indigo-700" />
                                <span>2026 Pricing &amp; Security Breakdown · canvaspass.sbs vs ExamGhost</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-rose-950 text-rose-100 text-[11px] font-bold uppercase tracking-wider">
                                Warning: Tab Blocker Disabled on Free &amp; $5 Plans
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Why pay $5/mo for a Canvas solver that leaves{' '}
                                    <span className="text-rose-800 underline decoration-rose-500/40 decoration-wavy underline-offset-4">
                                        Tab-Switch Detection turned on?
                                    </span>
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-6 max-w-2xl">
                                    CanvasPass looks cheap at first glance—until you read the fine print on <code>canvaspass.sbs</code>. Both its <strong>Free ($0)</strong> and <strong>Starter ($5/mo)</strong> plans explicitly turn <strong>OFF</strong> the Tab-Switch Blocker, deduct <strong>10 credits per Smart solve</strong> (turning 800 credits into just 80 questions), and charge <strong>$25/mo extra</strong> for a Windows-only desktop app.
                                </p>

                                {/* 3 Key Takeaways */}
                                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Focus Shield</div>
                                        <div className="font-display font-extrabold text-base text-ink">Free on All Plans</div>
                                        <div className="text-[11px] text-ink-muted">CanvasPass: $10 Pro required</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Smart Solves</div>
                                        <div className="font-display font-extrabold text-base text-ink">100% Unlimited</div>
                                        <div className="text-[11px] text-ink-muted">CanvasPass: 10 credits/solve</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">LMS Coverage</div>
                                        <div className="font-display font-extrabold text-base text-ink">20+ LMS Portals</div>
                                        <div className="text-[11px] text-ink-muted">CanvasPass: Canvas only</div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#cdeecb]" aria-hidden="true" />
                                        <span>Start 50 Free Solves (Focus Shield Included)</span>
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live Canvas Sandbox</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Fine-Print Security Receipt Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#141726] text-white p-6 sm:p-7 border border-black/20 shadow-lift">
                                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                        <div>
                                            <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">
                                                Fine-Print Verification
                                            </div>
                                            <div className="font-display font-bold text-lg text-white mt-0.5">
                                                What Happens When You Test Each Tool?
                                            </div>
                                        </div>
                                        <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
                                    </div>

                                    {/* CanvasPass Free & $5 Starter */}
                                    <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-500/30 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-xs text-rose-200">CanvasPass Free ($0) &amp; Starter ($5/mo)</span>
                                            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold uppercase">
                                                Unshielded
                                            </span>
                                        </div>
                                        <ul className="space-y-1.5 text-xs text-rose-100/90 font-mono">
                                            <li className="flex items-center justify-between">
                                                <span>Tab-Switch Blocker:</span>
                                                <span className="text-rose-400 font-bold">✗ Disabled (Requires $10 Pro)</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>Kiosk Spoof &amp; Answer Saver:</span>
                                                <span className="text-rose-400 font-bold">✗ Disabled</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>800 Starter Credits:</span>
                                                <span className="text-amber-300 font-bold">= Only 80 Smart Solves</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>Prompt Cutoff:</span>
                                                <span className="text-amber-300 font-bold">800–2,000 Chars Max</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* ExamGhost Free Trial & Passes */}
                                    <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-xs text-emerald-200">ExamGhost Free Trial ($0) &amp; All Passes</span>
                                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold uppercase">
                                                100% Protected
                                            </span>
                                        </div>
                                        <ul className="space-y-1.5 text-xs text-emerald-100/90 font-mono">
                                            <li className="flex items-center justify-between">
                                                <span>4-Layer Focus Shield:</span>
                                                <span className="text-emerald-300 font-bold">✓ Active on Free &amp; Paid</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>Free Trial Included:</span>
                                                <span className="text-emerald-300 font-bold">✓ 50 Full STEM Solves ($0)</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>Paid Pass Solves:</span>
                                                <span className="text-emerald-300 font-bold">✓ Unlimited (0 Credit Math)</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span>Mac + Windows + 20+ LMSs:</span>
                                                <span className="text-emerald-300 font-bold">✓ Included (No $25 Add-On)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 4-TIER CREDIT & FEATURE CALCULATOR (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-xs font-bold text-indigo-950 mb-3">
                            <Calculator className="w-3.5 h-3.5" />
                            Interactive Credit &amp; Paywall Inspector
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            800 Credits ≠ 800 Questions: Click Any CanvasPass Tier
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            See what each CanvasPass plan on <code>canvaspass.sbs</code> actually gives you once you factor in per-question credit deductions, character limits, and security paywalls.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="cp_tier" id="cp-free" className="sr-only peer/free" />
                        <input type="radio" name="cp_tier" id="cp-starter" className="sr-only peer/starter" defaultChecked />
                        <input type="radio" name="cp_tier" id="cp-pro" className="sr-only peer/pro" />
                        <input type="radio" name="cp_tier" id="cp-overlay" className="sr-only peer/overlay" />

                        {/* Selector Tabs */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-2 rounded-2xl bg-[#f5f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="cp-free"
                                className="cursor-pointer rounded-xl py-3 px-3 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/free:bg-ink peer-checked/free:text-white peer-checked/free:shadow-sm"
                            >
                                1. CanvasPass Free ($0)
                            </label>
                            <label
                                htmlFor="cp-starter"
                                className="cursor-pointer rounded-xl py-3 px-3 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/starter:bg-ink peer-checked/starter:text-white peer-checked/starter:shadow-sm"
                            >
                                2. Starter ($5/mo · 800 cr)
                            </label>
                            <label
                                htmlFor="cp-pro"
                                className="cursor-pointer rounded-xl py-3 px-3 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/pro:bg-ink peer-checked/pro:text-white peer-checked/pro:shadow-sm"
                            >
                                3. Pro ($10/mo · 1,500 cr)
                            </label>
                            <label
                                htmlFor="cp-overlay"
                                className="cursor-pointer rounded-xl py-3 px-3 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/overlay:bg-ink peer-checked/overlay:text-white peer-checked/overlay:shadow-sm"
                            >
                                4. OverlayPass ($25/mo)
                            </label>
                        </div>

                        {/* PANEL 1: FREE */}
                        <div className="hidden peer-checked/free:block">
                            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-rose-200 text-rose-950 text-xs font-bold">CanvasPass Free ($0)</span>
                                        <span className="font-mono text-xs font-bold text-rose-800">High Detection Risk</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        No Tab-Switch Blocker + No Image Support + 800-Char Cutoff
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Tab-Switch Blocker is OFF (`✗`):</strong> Testing CanvasPass Free on a live Canvas quiz logs every blur and tab switch in SpeedGrader.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Zero Image / Diagram Support:</strong> Cannot read graphs, chemistry structures, or screenshot crops.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>800-Character Limit:</strong> Truncates any question longer than a single short paragraph (10 solves per 12 hours).</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-950 text-xs font-bold">ExamGhost Free Trial ($0)</span>
                                        <span className="font-mono text-xs font-bold text-emerald-800">Full Stealth Active</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        50 Full Solves + 4-Layer Focus Shield + Snap-It Vision Included
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Focus Shield Included for $0:</strong> We never paywall safety—your 50 free solves have the exact same anti-blur shield as our Lifetime pass.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Includes Snap-It Vision (`⌘+Shift+S`):</strong> Test diagram, graph, and equation OCR before paying a cent.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Zero Character Truncation:</strong> Reads full case studies and multi-part tables.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* PANEL 2: STARTER ($5/mo) */}
                        <div className="hidden peer-checked/starter:block">
                            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-rose-200 text-rose-950 text-xs font-bold">CanvasPass Starter ($5/mo)</span>
                                        <span className="font-mono text-xs font-bold text-rose-800">800 Credits = Only 80 Smart Solves</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Still Disables Tab-Switch Blocker &amp; Deducts 10 Credits per Smart Solve
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Tab-Switch Blocker Still OFF (`✗`):</strong> Even after paying $5/mo, CanvasPass leaves Tab-Switch Blocker, Kiosk Spoof, and Answer Saver disabled.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>10 Credits per Smart Question:</strong> Smart Mode (Claude Sonnet) costs 10 credits/solve—so 800 credits runs out after just <strong>80 questions</strong> (less than two 50-question exams).</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>2,000-Character Cap:</strong> Long nursing vignettes, history passages, or accounting tables get cut off mid-sentence.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-950 text-xs font-bold">ExamGhost Annual ($8.25/mo) or Monthly ($19/mo)</span>
                                        <span className="font-mono text-xs font-bold text-emerald-800">Unlimited Solves</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Unlimited Smart Solves + Full Focus Shield + Zero Credit Anxiety
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>No Credit Multipliers:</strong> Solve 80 questions or 8,000 questions—every single solve uses our top-tier STEM &amp; reasoning models.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Complete Focus &amp; Visibility Shield:</strong> Blocks <code>window.blur</code>, <code>visibilitychange</code>, and mouse-leave logs across all 20+ LMSs.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>14-Day 100% Money-Back Guarantee:</strong> Plus 50 Free Solves before you ever pull out a card.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* PANEL 3: PRO ($10/mo) */}
                        <div className="hidden peer-checked/pro:block">
                            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-amber-200 text-amber-950 text-xs font-bold">CanvasPass Pro ($10/mo)</span>
                                        <span className="font-mono text-xs font-bold text-amber-900">1,500 Credits = 187 Smart Solves</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Unlocks Tab Blocker, But Caps You at ~187 Smart Solves &amp; Canvas Only
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                                            <span><strong>8 Credits per Smart Solve:</strong> Taking 4 classes with weekly 25-question quizzes (400 questions/mo) requires <strong>3,200 credits</strong>—forcing you to buy $5 top-up packs mid-month.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Fails on Embedded Publisher Portals:</strong> Doesn&apos;t work when a Canvas course launches McGraw-Hill Connect, Pearson MyLab, Cengage, or WebAssign.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Injects Buttons Into Canvas DOM:</strong> Appends custom AI button elements inside <code>.question_holder</code> unless manually toggled.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-950 text-xs font-bold">ExamGhost Academic Year ($8.25/mo · $99/yr)</span>
                                        <span className="font-mono text-xs font-bold text-emerald-800">Cheaper than $10/mo Pro</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Costs Less per Month Than CanvasPass Pro—With Unlimited Solves Everywhere
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>$8.25/mo on Annual Pass ($99/yr):</strong> Lower monthly cost than CanvasPass Pro ($10/mo) with zero credit top-ups ever.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Works on Every LMS &amp; Publisher Portal:</strong> Canvas, Blackboard, Moodle, D2L, McGraw-Hill, Pearson, Cengage, and WebAssign.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Closed Shadow DOM:</strong> Never injects detectable AI buttons into Canvas&apos;s host HTML.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* PANEL 4: OVERLAYPASS ($25/mo) */}
                        <div className="hidden peer-checked/overlay:block">
                            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-rose-200 text-rose-950 text-xs font-bold">OverlayPass ($25/mo Extra)</span>
                                        <span className="font-mono text-xs font-bold text-rose-800">Windows Only · No Mac</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        A Separate $25/Month Subscription That Doesn&apos;t Run on MacBooks
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Zero macOS or Chromebook Support:</strong> OverlayPass is a standalone Windows executable—leaving MacBook college students completely locked out.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Still Capped at 2,500 Credits/Mo:</strong> Even at $25/mo ($300/yr), OverlayPass still runs on a credit meter.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-950 text-xs font-bold">ExamGhost Cross-Platform Stealth</span>
                                        <span className="font-mono text-xs font-bold text-emerald-800">Mac + Windows + ChromeOS</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Native Mac &amp; Windows Support Included in One Pass
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>100% MacBook &amp; Windows Parity:</strong> Runs natively in Chrome, Brave, Edge, and Arc on Apple Silicon Macs and Windows PCs.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Snap-It Vision Included Free:</strong> Crop any locked screen region with <code>⌘+Shift+S</code> without paying a separate $25/mo fee.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VISUAL ARCHITECTURE: VISIBLE INJECTED BUTTON VS ZERO-DOM DOUBLE-CLICK */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-3xl bg-white border border-black/10 p-7 shadow-sm">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold mb-4">
                                <EyeOff className="w-3.5 h-3.5" />
                                <span>How CanvasPass Works</span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-ink mb-2">
                                Injects Visible &quot;AI Buttons&quot; Into Canvas HTML
                            </h3>
                            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                CanvasPass describes itself as an extension that <em>&quot;adds a small AI button next to each quiz question on Canvas LMS.&quot;</em> Appending custom <code>&lt;button&gt;</code> elements directly inside Canvas&apos;s <code>.question_holder</code> DOM makes it visible to anyone walking past your desk and detectable via <code>MutationObserver</code> scripts.
                            </p>
                            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 font-mono text-xs text-rose-900">
                                Canvas only · Blooket, Kahoot, Quizizz &amp; IXL marked &quot;In Development · Unknown&quot;
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white border border-black/10 p-7 shadow-sm">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-4">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>How ExamGhost Works</span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-ink mb-2">
                                Zero Injected Buttons · 0.3s Double-Click + Closed Shadow DOM
                            </h3>
                            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                ExamGhost never alters Canvas&apos;s question headers or injects visible buttons. Simply double-click any question text: in <strong>Invisible Mode</strong>, it auto-selects the right choice silently; in <strong>Stealth Mode</strong>, it briefly highlights the correct answer; and pressing <code>⌘+Shift+U</code> flushes everything in under 8ms.
                            </p>
                            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 font-mono text-xs text-emerald-900">
                                Works on Canvas, Blackboard, Moodle, D2L, McGraw-Hill, Pearson &amp; Cengage
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDE-BY-SIDE COMPARISON TABLE + COLLAPSIBLE TECHNICAL AUDIT DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                CanvasPass vs ExamGhost: 2026 Feature &amp; Pricing Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-medium">Verified against canvaspass.sbs pricing table</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Evaluation Dimension</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-emerald-950 bg-[#cdeecb]/40">ExamGhost</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">CanvasPass (canvaspass.sbs)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Free Trial &amp; Protection</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves ($0) + Full Focus Shield</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">10 solves/12h · Tab Blocker &amp; Images Disabled</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Tab-Switch &amp; Blur Blocker</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Included on ALL Tiers (Free &amp; Paid)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Disabled on Free &amp; $5 Starter (Requires $10 Pro)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Monthly Smart Solve Capacity</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">100% Unlimited (No Credit Math)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">80 solves ($5 Starter) or 187 solves ($10 Pro)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Question Character Cutoff</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">No Truncation (Full Case Studies)</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">800 chars (Free) · 2,000 (Starter) · 3,000 (Pro)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Supported LMS Platforms</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Canvas, Blackboard, Moodle, D2L, McGraw-Hill, Pearson</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Canvas LMS Only</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Screen Crop / Overlay Support</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Included (⌘+Shift+S on Mac &amp; Windows)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">OverlayPass Costs $25/mo Extra (Windows Only)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Pass Pricing &amp; Guarantee</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">$19/mo · $99/yr ($8.25/mo) · $199 Life (14-Day Refund)</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">$5 Starter · $10 Pro · $25 OverlayPass · $5/500 cr top-ups</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Manifest & Domain Audit Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-xs sm:text-sm font-bold text-ink hover:bg-[#f2ede4] transition-colors">
                                <div className="flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-emerald-800" />
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Domain &amp; Chrome Store Audit (canvaspass.app → canvaspass.sbs)</h3>
                                </div>
                                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs text-ink-secondary space-y-2.5 border-t border-black/5 bg-white">
                                <p className="leading-relaxed">
                                    <strong>Domain Migration &amp; Extension ID:</strong> The original <code>canvaspass.app</code> domain no longer resolves in DNS and migrated to <code>canvaspass.sbs</code>, distributing Chrome Web Store extension ID <code>hfeeodhaiedlmahknjhcidhcphmnjeam</code> and a Firefox add-on.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Tiered Credit Deduction Schedule:</strong> On <code>canvaspass.sbs</code>, Starter ($5/mo, 800 credits) deducts 5 credits for Fast Mode (Gemini Flash) and 10 credits for Smart Mode (Claude Sonnet). Pro ($10/mo, 1,500 credits) deducts 4 credits (Fast) and 8 credits (Smart). Ultra ($14.99/mo, 2,500 credits, marked &quot;Coming Soon&quot;) deducts 15 credits for Smart Mode (Claude Opus). Extra credit top-ups cost $5 per 500 credits.
                                </p>
                            </div>
                        </details>
                    </div>
                </section>

                {/* FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-ink-muted">
                            Everything students ask about CanvasPass credits, tab-switch paywalls, and ExamGhost.
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

                {/* BESPOKE INDIGO-MINT CONVERSION STRIP + RELATED LINKS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#e0e7ff] via-[#dff6de] to-[#cdeecb] p-8 sm:p-10 border border-black/10 shadow-card mb-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>Full Focus Shield Included on Free Trial · Zero Credit Math</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                    Test ExamGhost with 50 Free Solves—fully shielded from question #1.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Don&apos;t risk taking a Canvas exam on a free or $5 plan that leaves tab-switch detection turned on. Start free or unlock unlimited solves for $8.25/mo billed annually ($99/yr).
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
                        <Link prefetch={false} href="/canvashack-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">CanvasHack vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">$149.99 tab-blocker review</div>
                        </Link>
                        <Link prefetch={false} href="/canvasquiz-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">CanvasQuiz vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Canvas quiz solver comparison</div>
                        </Link>
                        <Link prefetch={false} href="/bettercampus-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">BetterCampus vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">2-Extension Canvas stack</div>
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
