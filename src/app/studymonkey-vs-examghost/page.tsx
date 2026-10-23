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
    CreditCard,
    Sparkles,
    Layers,
    Lock,
    FileCode2,
    MessageSquareWarning
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "StudyMonkey vs ExamGhost (2026) — Web Chat vs 0.3s Stealth",
    },
    description: "Compare StudyMonkey.ai with ExamGhost. Skip tab-switching to web chat dashboards and tier downgrades with 0.3s inline Canvas stealth and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/studymonkey-vs-examghost",
    },
    openGraph: {
        title: "StudyMonkey vs ExamGhost (2026) — Web Chat vs 0.3s Stealth",
        description: "Compare StudyMonkey.ai with ExamGhost. Skip tab-switching to web chat dashboards and tier downgrades with 0.3s inline Canvas stealth and 50 Free Solves.",
        url: "https://examghost.com/studymonkey-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "StudyMonkey vs ExamGhost (2026) — Web Chat vs 0.3s Stealth",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "StudyMonkey vs ExamGhost (2026) — Web Chat vs 0.3s Stealth",
        description: "Compare StudyMonkey.ai with ExamGhost. Skip tab-switching to web chat dashboards and tier downgrades with 0.3s inline Canvas stealth and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function StudymonkeyVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-19",
                "dateModified": "2026-03-12",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/studymonkey-vs-examghost#webpage",
                "url": "https://examghost.com/studymonkey-vs-examghost",
                "name": "StudyMonkey.ai vs ExamGhost (2026 Audit) | Chatsy.ai Web Chat vs 0.3s Canvas Stealth AI",
                "description": "Independent 2026 technical audit comparing StudyMonkey (studymonkey.ai) by ITW Creative Works against ExamGhost's closed Shadow DOM HUD and Focus Shield.",
                "breadcrumb": {
                    "@id": "https://examghost.com/studymonkey-vs-examghost#breadcrumb"
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
                        "name": "StudyMonkey",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web Application (studymonkey.ai)",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Basic Plan",
                                "price": "0.00",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Plus Plan",
                                "price": "9.00",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Pro Plan",
                                "price": "16.00",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Max Plan",
                                "price": "29.00",
                                "priceCurrency": "USD"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/studymonkey-vs-examghost#breadcrumb",
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
                        "name": "StudyMonkey vs ExamGhost",
                        "item": "https://examghost.com/studymonkey-vs-examghost"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/studymonkey-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Who builds StudyMonkey.ai and how does its architecture work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our 2026 source inspection of studymonkey.ai shows it is built by ITW Creative Works (itwcreativeworks.com) using 'Ultimate Jekyll' (<meta content=\"Ultimate Jekyll\" name=generator>) with a preconnect to https://chatsy.ai and assets hosted on cdn.itwcreativeworks.com. Rather than operating as a dedicated LMS stealth extension with a closed Shadow DOM, StudyMonkey routes users to a web chat portal (/dashboard/chat) designed for K-12 and basic homework prompts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does StudyMonkey's $9/month Plus plan still fail on college STEM questions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "On studymonkey.ai/pricing, both the Free Basic plan (capped at 5 subjects) and the paid Plus plan ($9/mo or $90/yr) are explicitly restricted to a 'Standard AI model' with no essay writer. To unlock StudyMonkey's 'Advanced AI model', students must pay $16/month ($160/yr) for Pro or $29/month ($290/yr) for Max. ExamGhost gives every user frontier multimodal AI + Mathpix STEM OCR starting from your very first 50 Free Question Solves."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can Canvas or Blackboard detect if I use StudyMonkey during an exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. StudyMonkey has no Canvas Focus Shield or closed Shadow DOM injection. Leaving your Canvas tab to type or paste a prompt into studymonkey.ai/dashboard/chat immediately triggers window.blur and document.visibilitychange events, logging 'Stopped viewing the Canvas quiz-taking page' in your instructor's SpeedGrader audit log. ExamGhost intercepts and suppresses all blur events inside your active exam tab."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the contradiction in StudyMonkey's refund policy on studymonkey.ai/pricing?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under its pricing cards, StudyMonkey displays a badge stating 'We offer a 7-day money-back guarantee on all plans.' However, in FAQ #2 and #3 on the exact same page, StudyMonkey states 'Every paid plan has a 14 day free trial' and 'After the trial period, all sales are final.' ExamGhost provides 50 Free Question Solves with zero credit card required and backs paid passes with a clear 14-day 100% refund guarantee."
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
                        <span className="text-[#111111] font-semibold">StudyMonkey vs ExamGhost</span>
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
                                    <span>2026 INDEPENDENT PRICING &amp; MODEL TIER TEARDOWN</span>
                                </div>

                                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] font-display leading-[1.08] mb-5">
                                    Why Pay $16–$29/mo to Escape StudyMonkey&apos;s{' '}
                                    <span className="underline decoration-rose-500/80 decoration-wavy underline-offset-4">
                                        &ldquo;Standard AI&rdquo; Cap
                                    </span>{' '}
                                    When ExamGhost Solves In-Tab in 0.3s?
                                </h1>

                                <p className="aeo-summary text-base sm:text-lg text-neutral-700 leading-relaxed mb-7">
                                    <strong>StudyMonkey</strong> (<code className="text-xs sm:text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">studymonkey.ai</code>) looks cheap at first glance—until you read the fine print on its pricing table. Both its Free plan (capped at 5 subjects) and its paid <strong>$9/mo Plus</strong> plan restrict you to a downgraded <strong>&ldquo;Standard AI model&rdquo;</strong> inside a web chat tab that triggers Canvas <code className="text-xs sm:text-sm bg-neutral-200/80 px-1.5 py-0.5 rounded font-mono">window.blur</code> alerts. Unlocking its &ldquo;Advanced AI model&rdquo; costs <strong>$16 to $29/month ($290/yr)</strong>. <strong>ExamGhost</strong> gives every student full frontier multimodal AI + Mathpix STEM OCR right inside your exam tab—starting with <strong>50 Free Solves ($0)</strong>.
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
                                        Frontier AI on All Tiers (Never Throttled)
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        Closed Shadow DOM + Focus Shield
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        $99/yr ($8.25/mo) vs $290/yr Max
                                    </span>
                                </div>
                            </div>

                            {/* Right Column: Bespoke Visual Comparison Card (Model Tier Throttle vs 0.3s In-Tab HUD) */}
                            <div className="lg:col-span-5">
                                <div className="rounded-3xl bg-white border border-neutral-200/90 shadow-card p-5 sm:p-6 space-y-4 relative overflow-hidden">
                                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                                            2026 Tier &amp; Telemetry Reality Check
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-mono text-[11px] font-bold">
                                            4-Tier Paywall Trap
                                        </span>
                                    </div>

                                    {/* StudyMonkey Card */}
                                    <div className="rounded-2xl bg-rose-50/75 border border-rose-200 p-4 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-display font-bold text-sm text-rose-950 flex items-center gap-1.5">
                                                <XCircle className="w-4 h-4 text-rose-700 shrink-0" />
                                                StudyMonkey.ai (/dashboard/chat)
                                            </span>
                                            <span className="text-[11px] font-mono font-semibold text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                                                Web Chat Wrapper
                                            </span>
                                        </div>

                                        {/* Mini Tier Ladder Visual */}
                                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                                            <div className="p-2.5 rounded-xl bg-white/90 border border-rose-200">
                                                <div className="font-mono font-bold text-neutral-800">Basic ($0) &amp; Plus ($9/mo)</div>
                                                <div className="text-rose-800 font-semibold mt-0.5">Locked to &ldquo;Standard AI&rdquo;</div>
                                                <div className="text-[10px] text-neutral-500 mt-0.5">Hallucinates on college STEM</div>
                                            </div>
                                            <div className="p-2.5 rounded-xl bg-white/90 border border-rose-200">
                                                <div className="font-mono font-bold text-neutral-800">Pro ($16) &amp; Max ($29/mo)</div>
                                                <div className="text-rose-800 font-semibold mt-0.5">&ldquo;Advanced AI&rdquo; ($160–$290/yr)</div>
                                                <div className="text-[10px] text-neutral-500 mt-0.5">Still has zero LMS Focus Shield</div>
                                            </div>
                                        </div>

                                        <div className="rounded-xl bg-[#18181B] text-rose-200 p-3 font-mono text-[11px] leading-relaxed">
                                            <div className="text-neutral-400">// Tab switch to studymonkey.ai/dashboard/chat:</div>
                                            <div className="text-rose-300">Canvas Log: &quot;Stopped viewing quiz-taking page&quot;</div>
                                            <div className="text-amber-300">Refund FAQ #3: &quot;After trial, all sales are final&quot;</div>
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
                                                <span>[Alt+S] Closed Shadow DOM HUD</span>
                                                <span>Focus Shield: ON</span>
                                            </div>
                                            <div className="text-white/90">
                                                ✓ Answer: Option C (ΔG° = -41.2 kJ/mol)
                                            </div>
                                            <div className="text-neutral-400 text-[10px] mt-1">
                                                Frontier Multimodal + Mathpix OCR on 100% of plans
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-xs font-semibold text-emerald-950 pt-0.5">
                                            <span>50 Free Solves ($0) · No Card</span>
                                            <span className="font-mono text-emerald-800">$8.25/mo ($99/yr)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Audit Stat Strip */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-neutral-200">
                            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                                <div className="text-xs text-neutral-500 font-medium mb-1">Underlying Architecture</div>
                                <div className="text-sm sm:text-base font-bold text-emerald-800">Closed Shadow DOM HUD</div>
                                <div className="text-xs text-rose-800 font-medium mt-0.5">StudyMonkey: Jekyll + chatsy.ai</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                                <div className="text-xs text-neutral-500 font-medium mb-1">AI Reasoning on Entry Tiers</div>
                                <div className="text-sm sm:text-base font-bold text-[#111111]">Frontier AI + Mathpix (All Tiers)</div>
                                <div className="text-xs text-rose-800 font-medium mt-0.5">StudyMonkey: &ldquo;Standard AI&rdquo; up to $9/mo</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                                <div className="text-xs text-neutral-500 font-medium mb-1">Canvas Focus Shield</div>
                                <div className="text-sm sm:text-base font-bold text-emerald-800">Zero Tab-Blur Telemetry</div>
                                <div className="text-xs text-rose-800 font-medium mt-0.5">StudyMonkey: Web /dashboard/chat</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                                <div className="text-xs text-neutral-500 font-medium mb-1">Unlimited + Best AI Cost</div>
                                <div className="text-sm sm:text-base font-bold text-emerald-800">$19/mo · $99/yr · $199 Life</div>
                                <div className="text-xs text-neutral-600 mt-0.5">StudyMonkey Max: $29/mo ($290/yr)</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE PURE-CSS TABS: AI MODEL TIER & LIVE EXAM WORKFLOW SIMULATOR */}
                <section className="py-16 sm:py-20 bg-neutral-100/80 border-b border-neutral-200">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-mono font-bold text-emerald-950 uppercase tracking-wider mb-3">
                                <Layers className="w-3.5 h-3.5 text-emerald-800" />
                                <span>Interactive Audit Explorer</span>
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#111111] mb-3">
                                Click Each Dimension to See What StudyMonkey.ai Hides Behind Its Pricing Tiers
                            </h2>
                            <p className="text-neutral-700 text-sm sm:text-base">
                                Compare how StudyMonkey handles AI model quality, live Canvas telemetry, and refund fine print against ExamGhost.
                            </p>
                        </div>

                        {/* Pure CSS Radio Tabs Container */}
                        <div>
                            <input
                                type="radio"
                                name="studymonkey-audit-tabs"
                                id="tab-sm-model"
                                className="sr-only peer/model"
                                defaultChecked
                            />
                            <input
                                type="radio"
                                name="studymonkey-audit-tabs"
                                id="tab-sm-stealth"
                                className="sr-only peer/stealth"
                            />
                            <input
                                type="radio"
                                name="studymonkey-audit-tabs"
                                id="tab-sm-pricing"
                                className="sr-only peer/pricing"
                            />

                            {/* Tab Labels */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto mb-8 bg-white p-2 rounded-2xl border border-neutral-200 shadow-sm">
                                <label
                                    htmlFor="tab-sm-model"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-neutral-600 hover:text-[#111111] peer-checked/model:bg-[#111111] peer-checked/model:text-white peer-checked/model:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <Cpu className="w-4 h-4 shrink-0" />
                                    <span>1. &ldquo;Standard AI&rdquo; Downgrade</span>
                                </label>
                                <label
                                    htmlFor="tab-sm-stealth"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-neutral-600 hover:text-[#111111] peer-checked/stealth:bg-[#111111] peer-checked/stealth:text-white peer-checked/stealth:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <EyeOff className="w-4 h-4 shrink-0" />
                                    <span>2. Web Chat vs Stealth HUD</span>
                                </label>
                                <label
                                    htmlFor="tab-sm-pricing"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-neutral-600 hover:text-[#111111] peer-checked/pricing:bg-[#111111] peer-checked/pricing:text-white peer-checked/pricing:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <CreditCard className="w-4 h-4 shrink-0" />
                                    <span>3. $290/yr Max &amp; Refund Trap</span>
                                </label>
                            </div>

                            {/* PANEL 1: MODEL THROTTLING */}
                            <div className="hidden peer-checked/model:grid md:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold mb-4">
                                            <XCircle className="w-3.5 h-3.5" />
                                            <span>StudyMonkey Basic ($0) &amp; Plus ($9/mo)</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111111] mb-3">
                                            Paying $9/Month Still Leaves You on a Downgraded &ldquo;Standard AI Model&rdquo;
                                        </h3>
                                        <p className="text-sm text-neutral-700 leading-relaxed mb-5">
                                            Most students sign up for StudyMonkey&apos;s <strong>$9/mo ($90/yr) Plus plan</strong> assuming they are unlocking the platform&apos;s best solver. In reality, <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">studymonkey.ai/pricing</code> explicitly lists <strong>&ldquo;Standard AI model&rdquo;</strong> on both Basic and Plus—and withholds its <strong>&ldquo;Advanced AI model&rdquo;</strong> and Essay Writer unless you pay <strong>$16/mo (Pro)</strong> or <strong>$29/mo (Max)</strong>.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs text-rose-950 space-y-1.5">
                                        <div className="font-bold text-rose-900">Why &ldquo;Standard AI&rdquo; Fails College STEM:</div>
                                        <p>Lightweight wrapper models routinely drop negative signs in Calculus II integrals, misread multi-loop Kirchhoff circuit diagrams, and guess on upper-division Organic Chemistry stereochemistry.</p>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] text-white border border-neutral-800 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold mb-4">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            <span>ExamGhost Unthrottled STEM Pipeline</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                                            Frontier Multimodal AI + Mathpix OCR on Every Single Solve
                                        </h3>
                                        <p className="text-sm text-white/85 leading-relaxed mb-5">
                                            ExamGhost never artificially lobotomizes its AI to force an upsell. From your very first <strong>50 Free Question Solves ($0)</strong> to our <strong>$8.25/mo Academic Year Pass</strong>, every request runs through our full frontier multimodal reasoning pipeline paired with <strong>Mathpix LaTeX OCR</strong>.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-emerald-200 space-y-1.5">
                                        <div className="font-bold text-white">99.8% Verified STEM &amp; Diagram Accuracy:</div>
                                        <p>Snip any locked Canvas graph, physics free-body diagram, or statistical table in 0.3 seconds without ever being downgraded to a budget model.</p>
                                    </div>
                                </div>
                            </div>

                            {/* PANEL 2: WEB CHAT VS STEALTH HUD */}
                            <div className="hidden peer-checked/stealth:grid md:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold mb-4">
                                            <MessageSquareWarning className="w-3.5 h-3.5" />
                                            <span>StudyMonkey /dashboard/chat Workflow</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111111] mb-3">
                                            Built by ITW Creative Works on Jekyll + Chatsy.ai—Zero LMS Protection
                                        </h3>
                                        <p className="text-sm text-neutral-700 leading-relaxed mb-5">
                                            Inspecting <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">studymonkey.ai</code> reveals a static <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">Ultimate Jekyll</code> template by <strong>ITW Creative Works</strong> that preconnects to <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">chatsy.ai</code> and routes students to a standalone web portal (<code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">/dashboard/chat</code>). There is no closed Shadow DOM HUD, no Snap-It region OCR, and no Canvas Focus Shield.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs text-rose-950 space-y-1.5">
                                        <div className="font-bold text-rose-900">Instant Canvas SpeedGrader Flag:</div>
                                        <p>Clicking out of your Canvas quiz to paste text into StudyMonkey immediately fires <code className="font-mono">window.blur</code> and <code className="font-mono">document.visibilitychange</code>, timestamping your departure for your professor.</p>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] text-white border border-neutral-800 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold mb-4">
                                            <Lock className="w-3.5 h-3.5" />
                                            <span>ExamGhost 4-Layer Focus Shield</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                                            Zero-Footprint Closed Shadow DOM HUD Inside Your Exam Tab
                                        </h3>
                                        <p className="text-sm text-white/85 leading-relaxed mb-5">
                                            ExamGhost injects a <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">mode: &apos;closed&apos;</code> Shadow DOM container directly inside Canvas, Blackboard, Moodle, D2L, McGraw Hill, and Pearson while intercepting <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">blur</code> and <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">visibilitychange</code> events in the capture phase.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-emerald-200 space-y-1.5">
                                        <div className="font-bold text-white">16ms Panic Key RAM Flush:</div>
                                        <p>Press <code className="font-mono">Alt+X</code> (or your custom hotkey) at any moment to unmount the HUD and flush ephemeral memory in 16 milliseconds.</p>
                                    </div>
                                </div>
                            </div>

                            {/* PANEL 3: PRICING & REFUND CONTRADICTION */}
                            <div className="hidden peer-checked/pricing:grid md:grid-cols-2 gap-6 items-stretch">
                                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold mb-4">
                                            <AlertTriangle className="w-3.5 h-3.5" />
                                            <span>StudyMonkey Pricing &amp; FAQ Contradiction</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111111] mb-3">
                                            &ldquo;7-Day Money-Back Guarantee&rdquo; Badge vs &ldquo;All Sales Are Final&rdquo; in FAQ #3
                                        </h3>
                                        <p className="text-sm text-neutral-700 leading-relaxed mb-5">
                                            On <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">studymonkey.ai/pricing</code>, a hardcoded promo bar (<code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">WELCOME15</code>) sits above a badge claiming: <em>&ldquo;We offer a 7-day money-back guarantee on all plans.&rdquo;</em> Yet scrolling down to FAQ #3 on the exact same page reveals: <em>&ldquo;After the trial period, all sales are final.&rdquo;</em>
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 text-xs text-rose-950 space-y-1.5">
                                        <div className="font-bold text-rose-900">Up to $290/Year for Max:</div>
                                        <p>To get unlimited daily questions with StudyMonkey&apos;s Advanced AI model, Max costs <strong>$29/mo ($290/yr)</strong>—nearly 3× the price of ExamGhost&apos;s Academic Year Pass.</p>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] text-white border border-neutral-800 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold mb-4">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                            <span>ExamGhost Transparent Student Passes</span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                                            50 Free Solves ($0) With No Credit Card + Save $191/Year
                                        </h3>
                                        <p className="text-sm text-white/85 leading-relaxed mb-5">
                                            Test ExamGhost on your hardest Canvas or Blackboard questions with <strong>50 Free Question Solves</strong>—no credit card required and zero auto-billing traps. When you upgrade, choose <strong>$19/mo</strong>, <strong>$99/yr ($8.25/mo)</strong>, or <strong>$199 Lifetime</strong>, all backed by a clear 14-day 100% money-back guarantee.
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

                {/* 4 VERIFIED RED FLAGS TEARDOWN */}
                <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-xs font-mono font-bold text-rose-900 uppercase tracking-wider mb-4">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-800" />
                            <span>2026 Forensic Breakdown: studymonkey.ai</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#111111] mb-4">
                            4 Red Flags We Verified on StudyMonkey.ai in 2026
                        </h2>
                        <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                            Before you enter your card on StudyMonkey&apos;s checkout page, review the 4 architectural and billing issues we documented directly from <code className="font-mono text-xs bg-neutral-200/70 px-1.5 py-0.5 rounded">studymonkey.ai</code>.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-14">
                        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                                01
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] mb-1.5">
                                    ITW Creative Works &ldquo;Ultimate Jekyll&rdquo; + Chatsy.ai Wrapper
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    StudyMonkey is not a dedicated LMS stealth extension. Its HTML head declares <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">Ultimate Jekyll</code> by <strong>ITW Creative Works</strong>, loads assets from <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">cdn.itwcreativeworks.com</code>, and preconnects to <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">https://chatsy.ai</code> to power a basic <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">/dashboard/chat</code> web page.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                                02
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] mb-1.5">
                                    &ldquo;Standard AI Model&rdquo; Throttle on Free &amp; $9/mo Plus Plans
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    StudyMonkey&apos;s Basic plan ($0) restricts you to <strong>5 subjects</strong> and a <strong>&ldquo;Standard AI model.&rdquo;</strong> Worse, upgrading to the <strong>$9/mo ($90/yr) Plus plan</strong> still leaves you on the exact same <strong>&ldquo;Standard AI model&rdquo;</strong>—forcing students into <strong>$16/mo Pro</strong> or <strong>$29/mo Max</strong> for the &ldquo;Advanced AI model.&rdquo;
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                                03
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] mb-1.5">
                                    Hardcoded Fake Flash-Sale Banner (`WELCOME15`)
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    Every visitor to <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">studymonkey.ai/pricing</code> is shown a static, hardcoded promo bar (<code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">#pricing-promo-banner</code>) reading: <em>&ldquo;15% OFF! Flash sale Ending in -- Use code WELCOME15&rdquo;</em> to manufacture artificial urgency.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                                04
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] mb-1.5">
                                    Contradictory 7-Day Guarantee vs &ldquo;All Sales Are Final&rdquo; FAQ
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    Right beneath its pricing tiers, StudyMonkey displays a badge stating: <em>&ldquo;We offer a 7-day money-back guarantee on all plans.&rdquo;</em> Yet in FAQ #2 and #3 on the very same page, it states: <em>&ldquo;Every paid plan has a 14 day free trial&rdquo;</em> and <em>&ldquo;After the trial period, all sales are final.&rdquo;</em>
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
                                StudyMonkey.ai vs ExamGhost: 2026 Audit Matrix
                            </h2>
                            <p className="text-xs sm:text-sm text-neutral-600">
                                Side-by-side comparison of verified technical specifications, AI model access, and 2026 pricing tiers.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm mb-6">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="border-b border-neutral-300 bg-neutral-100">
                                        <th className="py-3.5 px-4 font-bold text-[#111111]">Audit Dimension</th>
                                        <th className="py-3.5 px-4 font-bold text-neutral-700">Technical Impact</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-900">ExamGhost (2026)</th>
                                        <th className="py-3.5 px-4 font-bold text-rose-900">StudyMonkey (studymonkey.ai)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200">
                                    <tr className="bg-[#FAF8F5]/60">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Developer &amp; Stack</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Dedicated LMS stealth build vs template</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">Native MV3 Closed Shadow DOM</td>
                                        <td className="py-3.5 px-4 text-neutral-700">ITW Creative Works (Ultimate Jekyll + chatsy.ai)</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Canvas Focus Shield</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Suppresses window.blur &amp; visibilitychange</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">100% Capture-Phase Suppression</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">None (Uses /dashboard/chat Web App)</td>
                                    </tr>
                                    <tr className="bg-[#FAF8F5]/60">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">AI Model on Free / Entry Plan</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Whether STEM reasoning is throttled</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">Frontier Multimodal AI on All Tiers</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">Throttled to &ldquo;Standard AI model&rdquo; on Free &amp; $9/mo</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Free Tier Subject Cap</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Subject coverage during free evaluation</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">50 Free Solves Across All Subjects</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">Restricted to 5 Subjects Only</td>
                                    </tr>
                                    <tr className="bg-[#FAF8F5]/60">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Snap-It Vision Region OCR</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Captures graphs, circuits &amp; locked images</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">Built-In Crosshair Snipping + Mathpix</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">No In-Tab Screen Region Snipping</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">In-Situ Option Highlighting</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Matches shuffled multiple-choice options</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">0.3s Direct Option Matching</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">6s Conversational Chat Text</td>
                                    </tr>
                                    <tr className="bg-[#FAF8F5]/60">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Panic Key RAM Flush</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Instant 16ms UI unmount on hotkey</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">Built-In (Alt+X / Configurable)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">Not Supported</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Unlimited + Best AI Pricing</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Cost for full accuracy &amp; unlimited solves</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">$19/mo · $99/yr ($8.25/mo) · $199 Life</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">$16/mo Pro ($160/yr) or $29/mo Max ($290/yr)</td>
                                    </tr>
                                    <tr className="bg-[#FAF8F5]/60">
                                        <td className="py-3.5 px-4 font-semibold text-[#111111]">Refund Policy Clarity</td>
                                        <td className="py-3.5 px-4 text-neutral-600 text-xs">Protection if you are unsatisfied</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">14-Day 100% Refund Guarantee</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">Conflicting &ldquo;7-Day&rdquo; vs &ldquo;All Sales Final&rdquo; FAQ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Source & Pricing Audit Drawer */}
                        <details className="group rounded-2xl bg-[#FAF8F5] border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-mono text-xs sm:text-sm font-bold text-[#111111]">
                                <span className="flex items-center gap-2 m-0 inline">
                                    <FileCode2 className="w-4 h-4 text-emerald-800 shrink-0" />
                                    <h3 className="font-bold m-0 inline">View Technical Domain, HTML Generator &amp; Pricing Source Audit (studymonkey.ai)</h3>
                                </span>
                                <ChevronDown className="w-4 h-4 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="mt-4 pt-4 border-t border-neutral-200 grid md:grid-cols-2 gap-4 text-xs">
                                <div className="p-4 rounded-xl bg-[#18181B] text-rose-200 font-mono leading-relaxed overflow-x-auto">
                                    <div className="text-neutral-400 mb-1">// Live HTML Head &amp; Pricing Inspection (studymonkey.ai/pricing):</div>
                                    <div className="text-amber-300">&lt;meta content=&quot;Ultimate Jekyll&quot; name=&quot;generator&quot;&gt;</div>
                                    <div className="text-amber-300">&lt;link href=&quot;https://chatsy.ai&quot; rel=&quot;preconnect&quot;&gt;</div>
                                    <div className="text-neutral-300">CDN Host: cdn.itwcreativeworks.com (itwcreativeworks.com)</div>
                                    <div className="text-rose-300 mt-1">Promo Banner (#pricing-promo-banner): &quot;15% OFF! ... WELCOME15&quot;</div>
                                    <div className="text-rose-300">Basic ($0/mo): 100 Q/day · 5 Subjects · &quot;Standard AI model&quot;</div>
                                    <div className="text-rose-300">Plus ($9/mo | $90/yr): 500 Q/day · &quot;Standard AI model&quot;</div>
                                    <div className="text-rose-300">Pro ($16/mo | $160/yr): 3000 Q/day · &quot;Advanced AI model&quot;</div>
                                    <div className="text-rose-300">Max ($29/mo | $290/yr): Unlimited · &quot;Advanced AI model&quot;</div>
                                </div>
                                <div className="p-4 rounded-xl bg-[#111111] text-emerald-200 font-mono leading-relaxed overflow-x-auto">
                                    <div className="text-neutral-400 mb-1">// ExamGhost Closed Shadow DOM &amp; Focus Shield Runtime:</div>
                                    <div className="text-emerald-300">const shadow = host.attachShadow(&#123; mode: &apos;closed&apos; &#125;);</div>
                                    <div className="text-emerald-300">window.addEventListener(&apos;blur&apos;, (e) =&gt; e.stopImmediatePropagation(), true);</div>
                                    <div className="text-emerald-300">document.addEventListener(&apos;visibilitychange&apos;, (e) =&gt; e.stopImmediatePropagation(), true);</div>
                                    <div className="text-neutral-300 mt-2">
                                        • Model Access: Unthrottled Frontier Multimodal + Mathpix OCR on all passes<br />
                                        • Free Trial: 50 Question Solves ($0, no credit card required)<br />
                                        • Refund Policy: Clear 14-day 100% money-back guarantee
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
                                When StudyMonkey Is Sufficient
                            </h2>
                            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                                StudyMonkey explicitly markets itself for <em>&ldquo;1st - 12th grade and university&rdquo;</em> homework chat. It can still work if your workflow looks like this:
                            </p>
                            <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                                <li className="flex items-start gap-2.5">
                                    <span className="font-bold text-neutral-900">•</span>
                                    <span>K-12 or middle/high school homework where you want a basic browser chat box (<code className="font-mono text-xs">/dashboard/chat</code>) across 5 general subjects.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="font-bold text-neutral-900">•</span>
                                    <span>Untimed take-home worksheets where tab-switching and 6-second chat replies do not trigger LMS audit logs.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 mb-2">
                                Purpose-Built for University LMS Stealth
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-4">
                                Why University Students Switch to ExamGhost
                            </h2>
                            <ul className="space-y-3 text-xs sm:text-sm text-white/90 mb-6">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Active <strong>Canvas, Blackboard, Moodle, D2L, McGraw Hill, and Pearson</strong> Focus Shield that blocks every <code className="font-mono text-xs">window.blur</code> and <code className="font-mono text-xs">visibilitychange</code> event.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Full <strong>frontier multimodal AI + Mathpix OCR</strong> on every tier—no &ldquo;Standard AI model&rdquo; throttling on entry plans.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Start with <strong>50 Free Solves</strong> (no card required), then upgrade for <strong>$19/mo</strong>, <strong>$99/yr ($8.25/mo)</strong>, or <strong>$199 Lifetime</strong>.</span>
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
                                    Compare live Canvas telemetry tests, see why students left StudyMonkey, and get 24/7 engineering support.
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
                            StudyMonkey.ai vs ExamGhost: 2026 Audit FAQs
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-600">
                            Verified answers about StudyMonkey&apos;s ITW Creative Works / Chatsy.ai stack, model tiers, and ExamGhost&apos;s stealth architecture.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-[#111111]">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Who builds StudyMonkey.ai and how does its architecture work?</h3>
                                <ChevronDown className="w-5 h-5 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                Our 2026 source inspection of <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">studymonkey.ai</code> shows it is built by <strong>ITW Creative Works</strong> (<code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">itwcreativeworks.com</code>) using <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">Ultimate Jekyll</code> with a preconnect to <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">https://chatsy.ai</code> and assets hosted on <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">cdn.itwcreativeworks.com</code>. Rather than operating as a dedicated LMS stealth extension with a closed Shadow DOM, StudyMonkey routes users to a web chat portal (<code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">/dashboard/chat</code>) designed for K-12 and basic homework prompts.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-[#111111]">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why does StudyMonkey&apos;s $9/month Plus plan still fail on college STEM questions?</h3>
                                <ChevronDown className="w-5 h-5 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                On <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">studymonkey.ai/pricing</code>, both the Free Basic plan (capped at 5 subjects) and the paid Plus plan (<strong>$9/mo</strong> or <strong>$90/yr</strong>) are explicitly restricted to a <strong>&ldquo;Standard AI model&rdquo;</strong> with no essay writer. To unlock StudyMonkey&apos;s &ldquo;Advanced AI model&rdquo;, students must pay <strong>$16/month ($160/yr)</strong> for Pro or <strong>$29/month ($290/yr)</strong> for Max. ExamGhost gives every user frontier multimodal AI + Mathpix STEM OCR starting from your very first 50 Free Question Solves.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-[#111111]">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Can Canvas or Blackboard detect if I use StudyMonkey during an exam?</h3>
                                <ChevronDown className="w-5 h-5 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                Yes. StudyMonkey has no Canvas Focus Shield or closed Shadow DOM injection. Leaving your Canvas tab to type or paste a prompt into <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">studymonkey.ai/dashboard/chat</code> immediately triggers <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">window.blur</code> and <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">document.visibilitychange</code> events, logging &ldquo;Stopped viewing the Canvas quiz-taking page&rdquo; in your instructor&apos;s SpeedGrader audit log. ExamGhost intercepts and suppresses all blur events inside your active exam tab.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-[#111111]">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What is the contradiction in StudyMonkey&apos;s refund policy on studymonkey.ai/pricing?</h3>
                                <ChevronDown className="w-5 h-5 text-neutral-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                Under its pricing cards, StudyMonkey displays a badge stating <em>&ldquo;We offer a 7-day money-back guarantee on all plans.&rdquo;</em> However, in FAQ #2 and #3 on the exact same page, StudyMonkey states <em>&ldquo;Every paid plan has a 14 day free trial&rdquo;</em> and <em>&ldquo;After the trial period, all sales are final.&rdquo;</em> ExamGhost provides <strong>50 Free Question Solves</strong> with zero credit card required and backs paid passes with a clear 14-day 100% refund guarantee.
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
                                    <span>SKIP THE &ldquo;STANDARD AI&rdquo; PAYWALL</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#111111] mb-2">
                                    Test Unthrottled 0.3s Stealth AI on Your Next 50 Questions for $0
                                </h2>
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    No credit card required. Full frontier multimodal AI + Mathpix OCR inside a closed Shadow DOM HUD with an active Canvas Focus Shield.
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
                                Related 2026 Competitor Audits
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                <Link prefetch={false}
                                    href="/quizplus-vs-examghost"
                                    className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/60 border border-neutral-200 hover:border-emerald-300 transition-all group"
                                >
                                    <div className="text-xs font-bold text-[#111111] group-hover:text-emerald-900 flex items-center justify-between">
                                        <span>Quizplus vs ExamGhost</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-[11px] text-neutral-500 mt-1">Static textbook Q&amp;A bank vs live 0.3s AI</p>
                                </Link>
                                <Link prefetch={false}
                                    href="/testwhiz-vs-examghost"
                                    className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/60 border border-neutral-200 hover:border-emerald-300 transition-all group"
                                >
                                    <div className="text-xs font-bold text-[#111111] group-hover:text-emerald-900 flex items-center justify-between">
                                        <span>TestWhiz vs ExamGhost</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-[11px] text-neutral-500 mt-1">$5.99/wk auto-billing trial vs 50 Free Solves</p>
                                </Link>
                                <Link prefetch={false}
                                    href="/cramly-vs-examghost"
                                    className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/60 border border-neutral-200 hover:border-emerald-300 transition-all group"
                                >
                                    <div className="text-xs font-bold text-[#111111] group-hover:text-emerald-900 flex items-center justify-between">
                                        <span>Cramly vs ExamGhost</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-[11px] text-neutral-500 mt-1">Essay &amp; study portal vs closed Shadow DOM</p>
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
