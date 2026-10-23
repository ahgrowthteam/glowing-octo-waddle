import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    ShieldAlert,
    Zap,
    EyeOff,
    AlertTriangle,
    CheckCircle2,
    ChevronDown,
    ArrowRight,
    FileWarning,
    Star,
    Lock,
    Activity,
    Sliders
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Apex Vision AI vs ExamGhost (2026) — No-Stealth Policy Audit",
    },
    description: "Compare Apex Vision AI (apexvision.ai) with ExamGhost. See why Apex refuses to build tab-switch blockers or stealth modes, caps monthly requests, and logs blur.",
    alternates: {
        canonical: "https://examghost.com/apexvision-vs-examghost",
    },
    openGraph: {
        title: "Apex Vision AI vs ExamGhost (2026) — No-Stealth Policy Audit",
        description: "Compare Apex Vision AI (apexvision.ai) with ExamGhost. See why Apex refuses to build tab-switch blockers or stealth modes, caps monthly requests, and logs blur.",
        url: "https://examghost.com/apexvision-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Apex Vision AI vs ExamGhost (2026) — No-Stealth Policy Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Apex Vision AI vs ExamGhost (2026) — No-Stealth Policy Audit",
        description: "Compare Apex Vision AI (apexvision.ai) with ExamGhost. See why Apex refuses to build tab-switch blockers or stealth modes, caps monthly requests, and logs blur.",
        images: ["/og-image.jpg"],
    },
};

export default function ApexVisionComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-21",
                "dateModified": "2026-03-04",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/apexvision-vs-examghost#webpage",
                "url": "https://examghost.com/apexvision-vs-examghost",
                "name": "Apex Vision AI vs ExamGhost (2026 Review) | No-Stealth Policy vs Closed Shadow DOM",
                "description": "Technical evaluation comparing AI Homework Helper – Apex Vision AI (apexvision.ai, Chrome ID ncaknkaehhieldhnmimbjnfgneaiijbd) and ExamGhost across Canvas SpeedGrader stealth, request caps, and telemetry.",
                "breadcrumb": { "@id": "https://examghost.com/apexvision-vs-examghost#breadcrumb" },
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
                        "name": "Apex Vision AI",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, iOS, Android",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "19.99",
                            "priceCurrency": "USD",
                            "offerCount": "4"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/apexvision-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Apex Vision AI vs ExamGhost", "item": "https://examghost.com/apexvision-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/apexvision-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does Apex Vision AI include stealth mode or Canvas tab-switch blockers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. On its official Chrome extension comparison page, Apex Vision AI explicitly states: 'Several tools in this category advertise stealth modes, tab-switch blockers and features designed to defeat exam supervision. We do not build them and do not recommend installing them.' Opening Apex Vision's floating toolbar, popup, or side panel fires window.blur in Canvas SpeedGrader."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can Canvas detect the Apex AI Agent auto-filling quiz answers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Apex Vision AI's 'Apex AI Agent' feature is designed to 'work through selected questions on your open course page and fill answer boxes automatically' while rendering a visible pause/resume progress tracker on the page. Programmatically filling LMS input boxes dispatches synthetic events (event.isTrusted: false) and mutates the host DOM."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Apex Vision AI share signup and subscription payment data with OpenAI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Under its 'ChatGPT ad measurement' disclosure, Apex Vision AI states that for eligible U.S. ad visits, 'Apex may send OpenAI an ad-click reference and confirmation of a new signup or first subscription payment, including its amount and currency.' ExamGhost never transmits student signup or billing confirmation telemetry to AI model providers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do Apex Vision AI's monthly request limits compare to ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Apex Vision AI gives 30 free requests (with a 12-hour refill), then charges $7.99/month for 500 requests, $14.99/month for 1,000 requests, and $19.99/month for 2,000 requests—admitting in its own review that 'the request cap means it is not the cheapest option for very high volume.' ExamGhost gives you 50 Free Solves upfront with no card required, plus uncapped plans at $19/mo, $99/yr ($8.25/mo), or $199 Lifetime."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-emerald-200/60 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">Apex Vision AI vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: 3 Verbatim Apex Vision AI Disclosures */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#cdeecb] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-emerald-950 text-[#cdeecb] text-[11px] font-bold uppercase tracking-wider">
                                    Official Policy &amp; Telemetry Audit
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    apexvision.ai · ID: ncaknkaehhieldhnmimbjnfgneaiijbd
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-ink">
                                9,000 Users · 4.9★ Chrome Store (2.1K Ratings)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-950/10 border border-emerald-950/20 text-xs font-bold text-emerald-950 mb-4">
                                    Explicit No-Stealth Policy · Visible Side-Panel · 500–2,000 Request Caps
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Apex Vision AI openly states: &ldquo;We do not build stealth modes or tab-switch blockers.&rdquo;
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    Apex Vision AI is a polished homework tutor—but if you open it during a timed Canvas or Blackboard quiz, you are completely unshielded. Their own documentation explicitly states they <strong>refuse to build stealth modes or tab-switch blockers</strong>, their <em>Apex AI Agent</em> injects visible progress controls while auto-filling host inputs (<code>isTrusted: false</code>), and their paid plans cap you at <strong>500 to 2,000 requests/month ($7.99–$19.99/mo)</strong>.
                                </p>
                                <p className="text-sm sm:text-base text-emerald-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost is purpose-built for zero-footprint exam stealth—combining a 100% Focus Shield tab-blur interceptor, Closed Shadow DOM isolation, and 0.3s Multi-Model STEM Consensus starting with <strong>50 Free Solves ($0, no credit card)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#cdeecb]" aria-hidden="true" />
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

                            {/* Right Column: 3 Verbatim Apex Vision AI Receipts */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-3.5">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                                            <FileWarning className="w-4 h-4 text-rose-600" />
                                            3 Verbatim Apex Vision Disclosures
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">apexvision.ai</span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-rose-800 mb-0.5">
                                            1. On Stealth Modes &amp; Tab-Switch Blockers:
                                        </div>
                                        <p className="text-rose-950 font-semibold italic">
                                            &ldquo;Several tools in this category advertise stealth modes, tab-switch blockers and features designed to defeat exam supervision. We do not build them and do not recommend installing them.&rdquo;
                                        </p>
                                        <span className="text-[10px] text-rose-800 block mt-0.5">
                                            → Source: apexvision.ai/best-ai-homework-chrome-extensions/
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-amber-900 mb-0.5">
                                            2. On Monthly Request Quotas ($7.99–$19.99/mo):
                                        </div>
                                        <p className="text-amber-950 font-semibold italic">
                                            &ldquo;Where it falls short: the request cap means it is not the cheapest option for very high volume, and browser coverage is Chrome only on desktop.&rdquo;
                                        </p>
                                        <span className="text-[10px] text-amber-800 block mt-0.5">
                                            → Capped at 500 ($7.99), 1,000 ($14.99), or 2,000 ($19.99) reqs/mo
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-300 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-slate-800 mb-0.5">
                                            3. On Sending Signup &amp; Payment Confirmations to OpenAI:
                                        </div>
                                        <p className="text-slate-900 font-semibold italic">
                                            &ldquo;Apex may send OpenAI an ad-click reference and confirmation of a new signup or first subscription payment, including its amount and currency.&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Tab-Switch / Blur Shield</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 100% Focus Shield</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Apex Vision: Explicitly refused</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">In-Page UI Architecture</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Closed Shadow DOM</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Apex: Floating Toolbar + Side Panel</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Monthly Usage Limits</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Uncapped Pro Tiers</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Apex: Capped at 500–2,000 reqs/mo</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">OpenAI Payment Telemetry</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Zero Ad Sharing</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Apex: Sends signup/payment to OpenAI</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB APEX VISION ARCHITECTURE SWITCHER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive Apex Vision Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Homework Tutor vs Exam Stealth Engine
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                Why a &ldquo;Polite Homework Helper&rdquo; Gets Flagged on Timed Exams
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Switch between the three architectural pillars below to see what happens when you run Apex Vision AI inside Canvas, Blackboard Ultra, or McGraw-Hill SmartBook.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="apex_tabs" id="apex_stealth" className="sr-only peer/apexstealth" defaultChecked />
                        <input type="radio" name="apex_tabs" id="apex_agent" className="sr-only peer/apexagent" />
                        <input type="radio" name="apex_tabs" id="apex_caps" className="sr-only peer/apexcaps" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f0f9ef] border border-emerald-950/10 mb-8">
                            <label
                                htmlFor="apex_stealth"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/apexstealth:bg-ink peer-checked/apexstealth:text-white peer-checked/apexstealth:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. No Tab-Blur Interception</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Floating Toolbar &amp; Side Panel log blur</div>
                            </label>
                            <label
                                htmlFor="apex_agent"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/apexagent:bg-ink peer-checked/apexagent:text-white peer-checked/apexagent:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. &ldquo;Apex AI Agent&rdquo; Auto-Fill</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Untrusted DOM input + progress widget</div>
                            </label>
                            <label
                                htmlFor="apex_caps"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/apexcaps:bg-ink peer-checked/apexcaps:text-white peer-checked/apexcaps:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. Request Caps &amp; OpenAI Ads</div>
                                <div className="text-[11px] opacity-75 mt-0.5">500–2,000 req quotas + ad telemetry</div>
                            </label>
                        </div>

                        {/* TAB 1: No Tab-Blur Interception */}
                        <div className="hidden peer-checked/apexstealth:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <AlertTriangle className="w-3.5 h-3.5" />
                                        Apex Vision AI: Zero Anti-Detection by Design
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Opening Apex&apos;s Side Panel or Popup fires Canvas blur logs
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Apex Vision AI is built around three high-visibility interfaces: a <strong>Floating Toolbar</strong> injected onto the page, a <strong>Browser Popup</strong>, and Chrome&apos;s <strong>Side Panel</strong>.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Because Apex Vision AI openly states <em>&ldquo;We do not build [stealth modes or tab-switch blockers],&rdquo;</em> clicking into its Side Panel, Voice Tutor, or extension popup immediately shifts browser focus away from the quiz document—firing <code>window.blur</code> and logging <em>&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</em> in your professor&apos;s SpeedGrader audit trail.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Telemetry: Unshielded window.blur + visible floating toolbar
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: 4-Layer Focus Shield + Chameleon UI
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Intercepts 100% of blur, visibility, and paste telemetry
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost neutralizes Canvas, Blackboard, and Moodle focus-loss listeners at the browser event-capture phase before they ever reach the LMS script.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>5-Level Chameleon Stealth:</strong> Choose a 1px corner indicator dot, subtle opacity HUD, or Closed Shadow DOM overlay—never a clunky side panel.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Panic Wipe Hotkey (<code>⌘+Shift+U</code>):</strong> Instantly purges all HUD state and volatile memory in 8ms.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Telemetry: 0 SpeedGrader Blur Flags · Closed Shadow DOM v1
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: Apex AI Agent Auto-Fill */}
                        <div className="hidden peer-checked/apexagent:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Activity className="w-3.5 h-3.5" />
                                        Apex Vision AI: &ldquo;Apex AI Agent&rdquo; Auto-Fill Risks
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Automated input filling + on-screen progress controls
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Apex Vision&apos;s Chrome Web Store listing advertises an <strong>Apex AI Agent</strong> that can <em>&ldquo;work through selected questions on your open course page, follow your instructions and fill answer boxes automatically,&rdquo;</em> complete with on-screen <em>&ldquo;pause, resume, and stop controls.&rdquo;</em>
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Allowing an AI agent to loop through your quiz page and populate inputs programmatically dispatches synthetic DOM events (<code>event.isTrusted: false</code>) and creates impossible sub-second question completion timestamps in Canvas and McGraw-Hill SmartBook logs.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Agent Footprint: Synthetic input mutation + pause/stop UI widget
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Sliders className="w-3.5 h-3.5" />
                                        ExamGhost: Hardware-Authentic Pacing &amp; Silent Cues
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Read the verified answer silently—click at natural human speed
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never injects an autonomous bot widget onto your exam page. It extracts questions from Canvas Classic, Canvas New Quizzes (LTI Shadow DOM), Blackboard, and SmartBook silently, and displays the verified answer inside an isolated Closed Shadow DOM layer so every click you make is a 100% genuine hardware mouse event (<code>isTrusted: true</code>).
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Agent Footprint: 0 Synthetic Clicks · Natural Human Pacing
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Request Caps & OpenAI Ads */}
                        <div className="hidden peer-checked/apexcaps:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Lock className="w-3.5 h-3.5" />
                                        Apex Vision AI: Strict Monthly Quotas &amp; Ad Telemetry
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        500 to 2,000 request caps + OpenAI payment reporting
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Every paid tier on Apex Vision AI is strictly metered: <strong>$7.99/mo (500 requests)</strong>, <strong>$14.99/mo (1,000 requests)</strong>, and <strong>$19.99/mo (2,000 requests)</strong>. When you use follow-up chat, diagram scans, and SmartBook modules across 4–5 college courses, those credits burn fast—which is why Apex admits: <em>&ldquo;the request cap means it is not the cheapest option for very high volume.&rdquo;</em>
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Additionally, Apex&apos;s site banner discloses that for eligible U.S. ChatGPT ad clicks, they send OpenAI confirmation of your signup and first subscription payment amount.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Quotas: Metered 500 / 1,000 / 2,000 reqs · No Lifetime option
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: 50 Free Solves + Uncapped Pro &amp; Lifetime Plans
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        No request anxiety during finals week. Zero ad tracking.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Start with <strong>50 Free Solves</strong> ($0, no card required) including full Snap-It Vision OCR and Course Materials RAG. When you upgrade, you get uncapped semester-proof usage with zero ad-network conversion reporting.
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
                                    Quotas: Uncapped Pro Plans · 14-Day Money-Back Guarantee
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
                                What Happens When an Extension Refuses to Block Tab-Blur
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                Because Apex Vision AI deliberately omits tab-switch and focus-loss blockers, interacting with its Side Panel or Floating Toolbar leaves a clear trail in Canvas SpeedGrader.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Apex Vision AI Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>Apex Vision AI (No Blur Blocker)</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">14:02:10 — Started quiz attempt</div>
                                    <div className="text-slate-300">14:02:49 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        14:03:08 — Stopped viewing the Canvas quiz (0:24)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Student clicked into Apex Vision Side Panel / Floating Toolbar</span>
                                    </div>
                                    <div className="text-slate-300">14:03:32 — Resumed viewing quiz</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        14:03:35 — Rapid synthetic input fill (Questions 2–5 in 6s)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Triggered by &ldquo;Apex AI Agent&rdquo; auto-fill answer boxes mode</span>
                                    </div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield Active)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">14:02:10 — Started quiz attempt</div>
                                    <div className="text-slate-300">14:02:49 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        14:03:34 — Answered Question 2 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Closed Shadow DOM · 0 blur or visibilitychange events</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        14:04:19 — Answered Question 3 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Genuine hardware click (isTrusted: true) · 0 DOM mutations</span>
                                    </div>
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
                                Complete technical comparison between ExamGhost and AI Homework Helper – Apex Vision AI.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Apex Vision AI (apexvision.ai)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Tab-Switch &amp; Window Blur Blocker</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (Focus Shield)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Refused (&ldquo;We do not build them&rdquo;)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">DOM &amp; UI Stealth Architecture</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Closed Shadow DOM + 1px Dot Mode</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Visible Floating Toolbar, Popup &amp; Side Panel</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Course Materials Context (RAG)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Local-First Lecture &amp; Syllabus Vault</td>
                                        <td className="py-3.5 px-4 text-ink-muted">✓ Cloud course note &amp; slide uploads</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Monthly Request Quotas on Paid Plans</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Uncapped Semester &amp; Lifetime Usage</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Capped at 500, 1,000, or 2,000 reqs/mo</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Ad-Network Payment Reporting</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Zero Third-Party Payment Sharing</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Sends U.S. ad signup/payment data to OpenAI</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Panic Switch Memory Wipe</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+U Instantly Wipes HUD</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ None</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves (No card required)</td>
                                        <td className="py-3.5 px-4 text-ink-muted">30 free requests (+12h refill)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing &amp; Lifetime Option</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-ink-muted">$7.99/mo · $14.99/mo · $19.99/mo (No Lifetime)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (Apex Vision AI)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID &amp; Listing:</span>
                                    AI Homework Helper – Apex Vision AI (<code>ncaknkaehhieldhnmimbjnfgneaiijbd</code> · 9,000 users · 4.9★)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">UI Surfaces &amp; Agent Behavior:</span>
                                    Popup, Floating Toolbar, Side Panel + &ldquo;Apex AI Agent&rdquo; auto-fill with pause/resume widget
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Official Anti-Stealth Policy:</span>
                                    Explicitly declines to build stealth modes or tab-switch blockers on <code>apexvision.ai</code>
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Tiered Request Quotas:</span>
                                    Knowledge Kickstart ($7.99/500 reqs) · Savvy Scholar ($14.99/1,000 reqs) · Mastermind ($19.99/2,000 reqs)
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#cdeecb]/45 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;Apex Vision was fine for untimed McGraw-Hill SmartBook homework, but I didn&apos;t realize it has zero tab-switch blocking until my professor showed me my Canvas SpeedGrader log where every Side Panel click showed up as &lsquo;Stopped viewing quiz.&rsquo; I also burned through my 500 monthly requests in two weeks. ExamGhost&apos;s Focus Shield and 1px dot mode keep my Canvas logs 100% clean.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-900 text-white font-bold flex items-center justify-center text-sm">
                                MK
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Maya K.</div>
                                <div className="text-xs text-ink-muted">Pre-Med / Anatomy &amp; Physiology · Ohio State University</div>
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
                            Frequently Asked Questions: Apex Vision AI vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does Apex Vision AI include stealth mode or Canvas tab-switch blockers?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                No. On its official Chrome extension comparison page, Apex Vision AI explicitly states: <em>&ldquo;Several tools in this category advertise stealth modes, tab-switch blockers and features designed to defeat exam supervision. We do not build them and do not recommend installing them.&rdquo;</em> Opening Apex Vision&apos;s floating toolbar, popup, or side panel fires <code>window.blur</code> in Canvas SpeedGrader.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Can Canvas detect the Apex AI Agent auto-filling quiz answers?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Yes. Apex Vision AI&apos;s &ldquo;Apex AI Agent&rdquo; feature is designed to work through selected questions on your open course page and fill answer boxes automatically while rendering a visible pause/resume progress tracker. Programmatically filling LMS input boxes dispatches synthetic events (<code>event.isTrusted: false</code>) and mutates the host DOM.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does Apex Vision AI share signup and subscription payment data with OpenAI?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Yes. Under its &ldquo;ChatGPT ad measurement&rdquo; disclosure, Apex Vision AI states that for eligible U.S. ad visits, <em>&ldquo;Apex may send OpenAI an ad-click reference and confirmation of a new signup or first subscription payment, including its amount and currency.&rdquo;</em> ExamGhost never transmits student signup or billing confirmation telemetry to AI model providers.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How do Apex Vision AI&apos;s monthly request limits compare to ExamGhost?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Apex Vision AI gives 30 free requests (with a 12-hour refill), then charges <strong>$7.99/month</strong> for 500 requests, <strong>$14.99/month</strong> for 1,000 requests, and <strong>$19.99/month</strong> for 2,000 requests—admitting in its own review that <em>&ldquo;the request cap means it is not the cheapest option for very high volume.&rdquo;</em> ExamGhost gives you <strong>50 Free Solves</strong> upfront with no card required, plus uncapped plans at <strong>$19/mo</strong>, <strong>$99/yr</strong> ($8.25/mo), or <strong>$199 Lifetime</strong>.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#cdeecb] via-[#e2f5e1] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-emerald-950 uppercase tracking-wider mb-2">
                                    100% Focus Shield · Closed Shadow DOM · Uncapped Pro Plans
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Don&apos;t bring an unshielded homework sidebar into a timed Canvas exam.
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
                                    <FaChrome className="w-4 h-4 text-[#cdeecb]" aria-hidden="true" />
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
                                <Link prefetch={false} href="/fastsolve-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>FastSolve vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/quizonator-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Quizonator vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/transcript-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Transcript vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>All Comparisons</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
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
