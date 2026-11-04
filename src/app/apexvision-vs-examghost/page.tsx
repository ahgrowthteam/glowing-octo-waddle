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
    Sliders,
    Radio,
    Gauge,
    Terminal,
    Sparkles,
    Eye,
    KeyRound,
    MousePointerClick
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ApexVisionTelemetryDemo } from '@/components/TopComparisonDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';

export const metadata: Metadata = {
    title: {
        absolute: "Apex Vision AI vs ExamGhost (2026) — SpeedGrader Telemetry & 500-Request Quota Audit",
    },
    description: "Apex Vision AI explicitly states it does NOT block tab switching or bypass proctoring, fires window.blur on sidebar clicks, and caps plans at 500 requests/mo. ExamGhost keeps document.hasFocus() === true with 5 Free Solves/Day + Claude/ChatGPT/DeepSeek Study Hub.",
    alternates: {
        canonical: "https://examghost.com/apexvision-vs-examghost",
    },
    openGraph: {
        title: "Apex Vision AI vs ExamGhost (2026) — SpeedGrader Telemetry & 500-Request Quota Audit",
        description: "Apex Vision AI explicitly refuses tab-switch blockers, fires window.blur in Canvas SpeedGrader, and caps plans at 500 requests. Compare with ExamGhost's Focus Shield, Alt+1/2/3 stealth & Multi-Model Study Hub.",
        url: "https://examghost.com/apexvision-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Apex Vision AI vs ExamGhost (2026) — SpeedGrader Telemetry & Quota Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Apex Vision AI vs ExamGhost (2026) — SpeedGrader Telemetry & 500-Request Quota Audit",
        description: "Apex Vision AI explicitly refuses tab-switch blockers, fires window.blur in Canvas SpeedGrader, and caps plans at 500 requests. Compare with ExamGhost's Focus Shield & 5 Free Solves/Day.",
        images: ["/og-image.jpg"],
    },
};

export default function ApexVisionComparisonPage() {
    const faqs = [
        {
            question: "Does Apex Vision AI include stealth mode or block Canvas SpeedGrader tab-switching logs?",
            answer: "No. In its official Chrome Web Store and website disclosures, Apex Vision AI explicitly states that it 'Does NOT claim to bypass proctoring or block tab switching' and adds: 'Several tools in this category advertise stealth modes, tab-switch blockers and features designed to defeat exam supervision. We do not build them and do not recommend installing them.' Clicking into Apex Vision's Floating Toolbar, Chrome Side Panel, or extension popup immediately shifts browser focus away from the quiz document—setting document.hasFocus() to false, firing window.blur, and logging 'Stopped viewing the Canvas quiz-taking page' in SpeedGrader."
        },
        {
            question: "How do ExamGhost's Alt+1, Alt+2, and Alt+3 modes keep document.hasFocus() === true?",
            answer: "ExamGhost intercepts window.blur, focusout, and visibilitychange events at the browser event-capture phase while rendering inside a closed Shadow DOM root (attachShadow({ mode: 'closed' })). Instead of an unshielded side panel that steals window focus, you trigger answers via Double-Click or Alt+S (Hybrid Vision+DOM Snip) and control visibility with three hotkeys: Alt+1 (Invisible Mode — applies a subtle 15% opacity shift directly to choices with zero UI), Alt+2 (Stealth Badge — micro corner indicator), and Alt+3 (Inline Explain — step-by-step LaTeX proof drawer that never blurs the host document). Pressing ⌘+Shift+U wipes all extension state in under 8ms."
        },
        {
            question: "Can Canvas detect the 'Apex AI Agent' auto-filling quiz answer boxes?",
            answer: "Yes. Apex Vision AI's 'Apex AI Agent' mode is designed to loop through selected questions on your open course page and fill answer boxes automatically while rendering a visible on-screen pause/resume/stop progress widget. Programmatically mutating LMS input boxes dispatches synthetic DOM events where event.isTrusted === false and creates robotic multi-question completion timestamps in Canvas and McGraw-Hill SmartBook telemetry."
        },
        {
            question: "How fast do Apex Vision AI's 100 to 500 monthly request quotas run out?",
            answer: "Apex Vision AI strictly meters every tier: its starter/lite quotas cap you at 100 to 500 monthly requests ($7.99/mo for 500 requests, $14.99/mo for 1,000 requests, $19.99/mo for 2,000 requests). Because every SmartBook question, follow-up tutor message, and screenshot scan consumes quota, a typical college student taking 4 STEM courses burns through 500 requests in less than two weeks—which is why Apex Vision's own site admits 'the request cap means it is not the cheapest option for very high volume.' ExamGhost gives you 5 Free Solves / Day (auto-refills every 24h for $0, no card needed) and uncapped Pro plans ($19/mo, $99/yr [$8.25/mo], or $199 Lifetime)."
        },
        {
            question: "Does ExamGhost include a homework & study workspace like Apex Vision's AI tutor?",
            answer: "Yes—and with far stronger frontier models and zero request caps. Every ExamGhost paid plan ($19/mo, $99/yr [$8.25/mo], or $199 Lifetime) is a 2-in-1 value that unlocks both Unlimited Stealth Extension Solves AND full access to the ExamGhost Study & Homework AI Workspace powered by Claude 3.7 Sonnet, ChatGPT (GPT-4o / o3-mini), and DeepSeek-R1 for essays, syllabus PDFs, and LaTeX math proofs—saving $60+/month compared to separate AI subscriptions."
        },
        {
            question: "Does Apex Vision AI transmit student signup and subscription payment data to OpenAI?",
            answer: "Yes. Under its 'ChatGPT ad measurement' privacy disclosure, Apex Vision AI states that for eligible U.S. ad visits, 'Apex may send OpenAI an ad-click reference and confirmation of a new signup or first subscription payment, including its amount and currency.' ExamGhost operates with zero ad-network conversion sharing and never reports student identity or payment events to third-party AI vendors."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "@id": "https://examghost.com/apexvision-vs-examghost#techarticle",
                "headline": "Apex Vision AI vs ExamGhost (2026) — The SpeedGrader Telemetry & 500-Request Quota Audit",
                "description": "Forensic browser-event telemetry and quota audit comparing AI Homework Helper – Apex Vision AI (apexvision.ai, Chrome ID ncaknkaehhieldhnmimbjnfgneaiijbd) against ExamGhost v4.2 across Canvas SpeedGrader window.blur logs, document.hasFocus() retention, and monthly request caps.",
                "datePublished": "2026-01-21",
                "dateModified": "2026-10-27",
                "author": {
                    "@type": "Organization",
                    "name": "ExamGhost Telemetry & Security Lab",
                    "url": "https://examghost.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com"
                },
                "mainEntityOfPage": "https://examghost.com/apexvision-vs-examghost",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", ".telemetry-verdict"]
                },
                "about": [
                    { "@id": "https://examghost.com/apexvision-vs-examghost#examghost-app" },
                    { "@id": "https://examghost.com/apexvision-vs-examghost#apexvision-app" }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/apexvision-vs-examghost#examghost-app",
                "name": "ExamGhost",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "1420"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "0.00",
                    "highPrice": "199.00",
                    "priceCurrency": "USD",
                    "offerCount": "4",
                    "description": "5 Free Solves / Day (auto-refills every 24h, $0 no card), $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime with Unlimited Stealth Solves + Claude 3.7 Sonnet, ChatGPT o3-mini/4o & DeepSeek-R1 Study Hub."
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/apexvision-vs-examghost#apexvision-app",
                "name": "AI Homework Helper – Apex Vision AI",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome Extension, iOS, Android",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "2100"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "0.00",
                    "highPrice": "19.99",
                    "priceCurrency": "USD",
                    "offerCount": "4"
                }
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
                "mainEntity": faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.answer
                    }
                }))
            }
        ]
    };

    const comparisonRows = [
        {
            feature: "Official Proctoring & Tab-Blur Policy",
            sub: "Whether the extension blocks Canvas / Blackboard focus-loss logs",
            examghost: "✓ 4-Layer Focus Shield (0 window.blur or visibilitychange logs)",
            apex: "✗ Refused (\"Does NOT claim to bypass proctoring or block tab switching\")"
        },
        {
            feature: "Browser Focus State (document.hasFocus())",
            sub: "What the LMS DOM reports while you view answers or explanations",
            examghost: "✓ Remains document.hasFocus() === true at all times",
            apex: "✗ Drops to false when clicking Side Panel, Popup, or Floating Toolbar"
        },
        {
            feature: "Stealth Display Hotkeys",
            sub: "Zero-footprint answer rendering for computer labs & screen-shares",
            examghost: "✓ Alt+1 (15% Opacity Shift), Alt+2 (Stealth Badge), Alt+3 (Explain)",
            apex: "✗ Visible Floating Toolbar + Chrome Side Panel + Agent Progress Bar"
        },
        {
            feature: "Input Event Hardware Authenticity",
            sub: "Whether LMS inputs detect synthetic programmatic bot fills",
            examghost: "✓ Natural human hardware clicks (event.isTrusted === true)",
            apex: "✗ \"Apex AI Agent\" auto-fill dispatches synthetic DOM mutations"
        },
        {
            feature: "Vision + DOM Snipping Engine",
            sub: "Solving locked diagrams, graphs, circuit schematics & LaTeX",
            examghost: "✓ Alt+S Hybrid Vision + DOM Snip (0.3s inline render)",
            apex: "✓ Screenshot Snip (opens inside unshielded Side Panel / Toolbar)"
        },
        {
            feature: "Master Panic Kill-Switch",
            sub: "Instant memory & UI wipe if a proctor or TA walks past",
            examghost: "✓ ⌘+Shift+U (<8ms complete Shadow DOM teardown)",
            apex: "✗ None — must manually close Side Panel & toolbar"
        },
        {
            feature: "Study & Homework AI Workspace",
            sub: "Dedicated multi-model web workspace for essays, PDFs & problem sets",
            examghost: "✓ Included: Claude 3.7 Sonnet + ChatGPT (o3-mini/4o) + DeepSeek-R1",
            apex: "✓ AI Tutor & Study Tools (metered against your monthly request cap)"
        },
        {
            feature: "Monthly Request Quotas on Paid Plans",
            sub: "Whether heavy midterm studying cuts off your account",
            examghost: "✓ Uncapped Solves + Uncapped Study Hub on all paid plans",
            apex: "✗ Strictly capped at 500 ($7.99), 1,000 ($14.99), or 2,000 ($19.99) reqs/mo"
        },
        {
            feature: "Free Tier Quota",
            sub: "Daily risk-free usage without entering a credit card",
            examghost: "✓ 5 Free Solves / Day (Auto-refills every 24h · $0 No Card)",
            apex: "30 free requests (+12h refill · unshielded UI)"
        },
        {
            feature: "OpenAI Ad-Conversion Payment Telemetry",
            sub: "Sharing student signup & subscription payment data with ad partners",
            examghost: "✓ Zero Third-Party Payment or Signup Telemetry",
            apex: "✗ Sends U.S. ad-click signup & payment amount confirmation to OpenAI"
        },
        {
            feature: "Desktop Browser Support",
            sub: "Compatibility across Chromium browsers",
            examghost: "✓ Chrome, Brave, Edge, Arc & Opera",
            apex: "Chrome desktop + mobile apps"
        },
        {
            feature: "Paid Plans & Lifetime Ownership",
            sub: "Flexible semester or full-degree pricing",
            examghost: "✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime (2-in-1 Value)",
            apex: "✗ $7.99–$19.99/mo metered tiers · No Lifetime Pass"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f4f6f8] text-ink selection:bg-amber-200 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* ============================================================
                    ARCHETYPE 2 HERO: FORENSIC SECURITY & TELEMETRY AUDIT LAB
                ============================================================ */}
                <header className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-b from-[#e8edf2] via-[#eef2f6] to-[#f4f6f8] border-b border-slate-300/80">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        {/* Top Forensic Telemetry Classification Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-slate-300 text-xs font-mono">
                            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-600">
                                <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                                <span>/</span>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                                <span>/</span>
                                <span className="text-ink font-bold">Apex Vision AI vs ExamGhost</span>
                            </nav>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-2.5 py-1 rounded bg-rose-100 border border-rose-300 text-rose-900 font-bold">
                                    TARGET: ncaknkaehhieldhnmimbjnfgneaiijbd
                                </span>
                                <span className="px-2.5 py-1 rounded bg-slate-900 text-emerald-300 font-bold">
                                    AUDIT: SpeedGrader Telemetry &amp; 500-Req Quota
                                </span>
                            </div>
                        </div>

                        {/* Split Forensic Header Grid */}
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                            {/* Left 7 Cols: Security Audit Findings */}
                            <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-[32px] p-6 sm:p-10 border border-slate-300 shadow-card">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono font-bold uppercase tracking-wider mb-5">
                                        <Radio className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
                                        <span>Forensic Policy &amp; SpeedGrader Telemetry Brief</span>
                                    </div>

                                    <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                        Apex Vision AI openly warns: <span className="bg-rose-100 text-rose-900 px-2 rounded-lg">&ldquo;Does NOT block tab switching.&rdquo;</span>
                                    </h1>

                                    <p className="aeo-summary text-sm sm:text-base lg:text-lg text-ink-secondary leading-relaxed mb-5">
                                        <strong>Apex Vision AI (<code>apexvision.ai</code>)</strong> is built as a visible homework tutor—not a stealth exam engine. In its own documentation, Apex explicitly states it <strong>does not bypass proctoring or build tab-switch blockers</strong>. The moment you click its Floating Toolbar or Chrome Side Panel during a timed Canvas quiz, <code className="font-mono text-xs bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded border border-rose-200">window.blur</code> fires and logs <em>&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</em> in SpeedGrader.
                                    </p>

                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-8">
                                        Worse, Apex meters paid users with strict <strong>100 to 500+ monthly request caps</strong>. <strong>ExamGhost</strong> gives you 100% <strong>Focus Shield</strong> protection (<code className="font-mono text-xs bg-emerald-50 text-emerald-900 px-1.5 py-0.5 rounded border border-emerald-200">document.hasFocus() === true</code>), <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">Alt+1/2/3</code> stealth modes, <strong>5 Free Solves / Day</strong> ($0, no card), and uncapped 2-in-1 plans with our <strong>Claude 3.7 Sonnet + ChatGPT o3-mini/4o + DeepSeek-R1 Study Workspace</strong>.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-6">
                                        <Link
                                            prefetch={false}
                                            href="/#pricing"
                                            className="btn-dark px-7 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center justify-center gap-2.5 group"
                                        >
                                            <FaChrome className="w-4 h-4 text-emerald-300" aria-hidden="true" />
                                            <span>Start 5 Free Solves / Day ($0 No Card)</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                        <Link
                                            prefetch={false}
                                            href="/canvas-quiz-solver-free-demo"
                                            className="px-6 py-4 rounded-full text-sm font-bold bg-[#f4f6f8] hover:bg-slate-200/70 text-ink border border-slate-300 inline-flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <MousePointerClick className="w-4 h-4 text-emerald-700" />
                                            <span>Test Live Canvas Sandbox</span>
                                        </Link>
                                    </div>

                                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-600">
                                        <span>✓ Keep <strong className="text-emerald-800">document.hasFocus() === true</strong></span>
                                        <span>✓ Uncapped Pro + Study AI Hub</span>
                                        <span>✓ ⌘+Shift+U Panic (&lt;8ms)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right 5 Cols: Forensic Disclaimers & Quota Depletion Monitor */}
                            <div className="lg:col-span-5 flex flex-col justify-between rounded-[32px] bg-[#0f172a] text-white p-6 sm:p-8 border border-slate-700 shadow-lift">
                                <div>
                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                                        <span className="font-mono text-xs uppercase tracking-wider font-bold text-amber-300 flex items-center gap-2">
                                            <FileWarning className="w-4 h-4 text-rose-400" />
                                            <span>Verbatim Policy &amp; Quota Monitor</span>
                                        </span>
                                        <span className="font-mono text-[11px] text-slate-400">apexvision.ai</span>
                                    </div>

                                    {/* Verbatim Anti-Stealth Disclosure */}
                                    <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 mb-4">
                                        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-300 mb-1">
                                            1. Official Anti-Stealth Disclaimer
                                        </div>
                                        <p className="text-xs sm:text-sm text-white font-medium italic leading-relaxed">
                                            &ldquo;Several tools in this category advertise stealth modes, tab-switch blockers and features designed to defeat exam supervision. We do not build them and do not recommend installing them.&rdquo;
                                        </p>
                                        <div className="mt-2 pt-2 border-t border-rose-500/20 font-mono text-[10px] text-rose-300 flex items-center justify-between">
                                            <span>CWS Disclaimer: No tab-switch block</span>
                                            <span>window.blur: UNSHIELDED</span>
                                        </div>
                                    </div>

                                    {/* Quota Burn Visualization */}
                                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700/80 mb-4">
                                        <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                                            <span className="text-amber-300 font-bold uppercase">2. The 500-Request Quota Cap</span>
                                            <span className="text-slate-400">$7.99/mo = 500 reqs</span>
                                        </div>
                                        <p className="text-xs text-slate-300 leading-relaxed mb-3">
                                            Apex admits: <em>&ldquo;the request cap means it is not the cheapest option for very high volume.&rdquo;</em> Across 4 STEM courses (SmartBook + follow-up chat + OCR scans), 500 requests burn out in ~12 days:
                                        </p>
                                        <div className="space-y-2 font-mono text-[11px]">
                                            <div>
                                                <div className="flex justify-between text-rose-300 mb-1">
                                                    <span>Apex Starter (500 reqs/mo cap)</span>
                                                    <span>DEPLETED DAY 12</span>
                                                </div>
                                                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-r from-amber-400 to-rose-500" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-emerald-300 mb-1">
                                                    <span>ExamGhost Pro ($8.25/mo · $99/yr)</span>
                                                    <span>UNCAPPED + STUDY HUB</span>
                                                </div>
                                                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                                                    <div className="w-full h-full bg-emerald-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* OpenAI Ad Telemetry Note */}
                                    <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-slate-400 mb-0.5">
                                            3. OpenAI Payment Telemetry Disclosure
                                        </div>
                                        <p className="text-slate-300 text-[11px] leading-relaxed">
                                            Apex discloses it may send OpenAI <em>&ldquo;confirmation of a new signup or first subscription payment, including its amount and currency.&rdquo;</em> ExamGhost shares <strong>zero</strong> billing telemetry with AI providers.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
                                    <span className="text-emerald-300 font-bold">Free Tier: 5 Solves / Day ($0)</span>
                                    <Link prefetch={false} href="/#pricing" className="text-white underline font-bold">Compare Plans →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ============================================================
                    INTERACTIVE TELEMETRY & QUOTA DEMO SECTION
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20" aria-label="Interactive SpeedGrader Telemetry Demo">
                    <div className="rounded-[32px] bg-white border border-slate-300 p-5 sm:p-8 shadow-card">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
                            <div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                                    <Activity className="w-3.5 h-3.5" />
                                    <span>Interactive SpeedGrader Telemetry Simulator</span>
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Test what happens in Canvas SpeedGrader when you click Apex Vision&apos;s sidebar.
                                </h2>
                            </div>
                            <p className="text-xs sm:text-sm text-ink-secondary max-w-md">
                                Trigger a simulated sidebar click below to watch how Apex Vision fires <code className="font-mono bg-slate-100 px-1 rounded">window.blur</code> and burns request credits, while ExamGhost keeps <code className="font-mono bg-emerald-50 text-emerald-900 px-1 rounded">document.hasFocus() === true</code>.
                            </p>
                        </div>

                        <ApexVisionTelemetryDemo />
                    </div>
                </section>

                {/* ============================================================
                    BESPOKE SECTION 1: ANATOMY OF A CANVAS SPEEDGRADER QUIZ LOG
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Anatomy of a Canvas SpeedGrader Quiz Log">
                    <div className="rounded-[36px] bg-[#0b111e] text-white p-6 sm:p-10 md:p-12 border border-slate-800 shadow-lift">
                        <div className="max-w-3xl mb-10">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                                <Terminal className="w-3.5 h-3.5" />
                                <span>Packet-Level Audit · Canvas quiz_submission_events API</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                                Anatomy of a Canvas SpeedGrader Quiz Log
                            </h2>
                            <p className="telemetry-verdict text-sm sm:text-base text-slate-300 leading-relaxed">
                                Canvas records a millisecond timestamp every time your browser dispatches <code className="font-mono text-xs text-rose-300">window.blur</code>, <code className="font-mono text-xs text-rose-300">visibilitychange</code>, or untrusted input mutations. Here is the exact event trace of Apex Vision AI&apos;s Floating Sidebar &amp; AI Agent versus ExamGhost&apos;s <code className="font-mono text-xs text-emerald-300">Alt+1</code>, <code className="font-mono text-xs text-emerald-300">Alt+2</code>, and <code className="font-mono text-xs text-emerald-300">Alt+3</code> stealth modes.
                            </p>
                        </div>

                        {/* Dual Timeline Comparison */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-10">
                            {/* Track A: Apex Vision AI */}
                            <div className="rounded-3xl bg-slate-900/90 border border-rose-500/40 p-6">
                                <div className="flex items-center justify-between pb-4 mb-5 border-b border-rose-500/20">
                                    <div>
                                        <span className="font-mono text-[11px] uppercase text-rose-400 font-bold block">TRACK A · UNSHIELDED EXTENSION</span>
                                        <h3 className="font-display text-lg font-bold text-white">Apex Vision AI (Floating Sidebar + Agent)</h3>
                                    </div>
                                    <span className="px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-500/40 font-mono text-xs font-bold">
                                        3 TELEMETRY FLAGS
                                    </span>
                                </div>

                                <div className="space-y-4 font-mono text-xs">
                                    <div className="relative pl-6 border-l-2 border-slate-700">
                                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-slate-500" />
                                        <div className="text-slate-400">14:02:00.110 — Quiz session initialized</div>
                                        <div className="text-white font-sans text-xs mt-0.5">
                                            Apex injects Floating Toolbar DOM node + opens Chrome Side Panel.
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-rose-500">
                                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-rose-500" />
                                        <div className="text-rose-300 font-bold">14:02:18.402 — EVENT: window.blur (document.hasFocus() === false)</div>
                                        <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-100 mt-1.5 font-sans text-xs">
                                            <strong>SpeedGrader Log:</strong> <em>&ldquo;Stopped viewing the Canvas quiz-taking page (0:26)&rdquo;</em> — triggered the instant you clicked Apex Vision&apos;s Side Panel or Floating Toolbar.
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-rose-500">
                                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-rose-500" />
                                        <div className="text-rose-300 font-bold">14:02:45.019 — EVENT: Synthetic Input (event.isTrusted === false)</div>
                                        <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-100 mt-1.5 font-sans text-xs">
                                            <strong>SpeedGrader Log:</strong> Student ran <em>&ldquo;Apex AI Agent&rdquo;</em> auto-fill mode. Host input boxes mutated programmatically with a visible Pause/Resume progress widget on-screen.
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-amber-500">
                                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-amber-400" />
                                        <div className="text-amber-300 font-bold">14:03:12.880 — QUOTA METER: -4 Requests Deducted</div>
                                        <div className="text-slate-300 font-sans text-xs mt-0.5">
                                            Every scan + follow-up explanation deducts from your 500/mo request cap.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Track B: ExamGhost v4.2 */}
                            <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/40 p-6">
                                <div className="flex items-center justify-between pb-4 mb-5 border-b border-emerald-500/20">
                                    <div>
                                        <span className="font-mono text-[11px] uppercase text-emerald-400 font-bold block">TRACK B · FOCUS SHIELD + CLOSED SHADOW DOM</span>
                                        <h3 className="font-display text-lg font-bold text-white">ExamGhost v4.2 (Alt+1 / Alt+2 / Alt+3)</h3>
                                    </div>
                                    <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold">
                                        0 FLAGS · 100% CLEAN
                                    </span>
                                </div>

                                <div className="space-y-4 font-mono text-xs">
                                    <div className="relative pl-6 border-l-2 border-emerald-500">
                                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-emerald-400" />
                                        <div className="text-emerald-300 font-bold">14:02:00.110 — Focus Shield Capture Hook Active</div>
                                        <div className="text-slate-300 font-sans text-xs mt-0.5">
                                            Overrides <code className="text-emerald-300">document.hasFocus() → true</code> and <code className="text-emerald-300">visibilityState → &quot;visible&quot;</code> at event-capture phase.
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-emerald-500">
                                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-emerald-400" />
                                        <div className="text-emerald-300 font-bold">14:02:14.205 — Solve Trigger: Double-Click or Alt+S Snip (0.3s)</div>
                                        <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-100 mt-1.5 font-sans text-xs">
                                            <strong>SpeedGrader Log:</strong> <em>Viewing quiz-taking page (Continuous)</em> — Question parsed in-memory with zero <code className="font-mono">window.blur</code> events.
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-emerald-500">
                                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-emerald-400" />
                                        <div className="text-emerald-300 font-bold">14:02:39.512 — Hardware Click: event.isTrusted === true</div>
                                        <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-100 mt-1.5 font-sans text-xs">
                                            <strong>SpeedGrader Log:</strong> <em>Answered Question #1 at natural human pace</em> — Student reads subtle cue and clicks radio input with real hardware mouse event.
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-emerald-500">
                                        <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-emerald-400" />
                                        <div className="text-emerald-300 font-bold">14:02:41.000 — ⌘+Shift+U Master Toggle Ready</div>
                                        <div className="text-slate-300 font-sans text-xs mt-0.5">
                                            Sub-8ms complete vanish if a proctor approaches your desk.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 Stealth Modes Breakdown Strip */}
                        <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
                                <div className="flex items-center justify-between mb-2">
                                    <kbd className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-xs font-bold">
                                        Alt + 1
                                    </kbd>
                                    <span className="font-mono text-[11px] text-emerald-400">document.hasFocus() === true</span>
                                </div>
                                <h4 className="font-display font-bold text-white text-base mb-1">Invisible Mode (15% Opacity Shift)</h4>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    Zero floating badges or panels. Shifts distractor options by a subtle 15% opacity delta so only you can spot the verified answer—even if a TA stares directly at your monitor.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
                                <div className="flex items-center justify-between mb-2">
                                    <kbd className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-xs font-bold">
                                        Alt + 2
                                    </kbd>
                                    <span className="font-mono text-[11px] text-emerald-400">Closed Shadow DOM v1</span>
                                </div>
                                <h4 className="font-display font-bold text-white text-base mb-1">Stealth Badge Mode</h4>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    Renders a quiet micro-indicator inside <code className="font-mono text-[11px] text-emerald-300">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</code> that LMS scripts cannot query via <code className="font-mono text-[11px]">document.querySelector</code>.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
                                <div className="flex items-center justify-between mb-2">
                                    <kbd className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-xs font-bold">
                                        Alt + 3
                                    </kbd>
                                    <span className="font-mono text-[11px] text-emerald-400">Zero Window Blur</span>
                                </div>
                                <h4 className="font-display font-bold text-white text-base mb-1">Inline Explain Drawer</h4>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    Need step-by-step LaTeX math derivations or syllabus citations? Opens an inline explanation without stealing window focus or firing SpeedGrader blur logs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    BESPOKE SECTION 2: 500-REQUEST CAP VS 2-IN-1 STUDY WORKSPACE
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Quota Audit vs 2-in-1 Study Workspace">
                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                        {/* Left 5 Cols: How Apex Vision's 500 Requests Burn Out */}
                        <div className="lg:col-span-5 rounded-[32px] bg-white border border-slate-300 p-6 sm:p-8 shadow-card flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                                    <Gauge className="w-3.5 h-3.5" />
                                    <span>The Monthly Quota Bottleneck</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-3">
                                    Why 500 requests/mo leaves you stranded during finals week.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-5">
                                    Apex Vision AI prices its tiers around strict monthly request ceilings: <strong>500 requests ($7.99/mo)</strong>, <strong>1,000 requests ($14.99/mo)</strong>, and <strong>2,000 requests ($19.99/mo)</strong>. Here is how quickly a normal STEM course load consumes 500 requests:
                                </p>

                                <div className="space-y-3 font-mono text-xs mb-6">
                                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                                        <span>4 McGraw-Hill SmartBook chapters (65 Qs ea)</span>
                                        <span className="font-bold text-rose-700">-260 reqs</span>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                                        <span>6 Weekly Canvas Quizzes + Follow-up Prompts</span>
                                        <span className="font-bold text-rose-700">-150 reqs</span>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                                        <span>Calculus / Organic Chem Diagram Scans</span>
                                        <span className="font-bold text-rose-700">-110 reqs</span>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between font-bold text-rose-900">
                                        <span>Total Used Before Week 2 Ends:</span>
                                        <span>520 / 500 (CAPPED)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs leading-relaxed">
                                <strong className="text-amber-300">Even at $19.99/mo</strong>, Apex Vision still caps you at 2,000 requests and provides <strong>zero tab-blur protection</strong>.
                            </div>
                        </div>

                        {/* Right 7 Cols: ExamGhost 2-in-1 Value Proposition */}
                        <div className="lg:col-span-7 rounded-[32px] bg-gradient-to-br from-[#0d1f18] via-[#0f241c] to-[#091410] text-white border-2 border-emerald-500/40 p-6 sm:p-10 shadow-lift flex flex-col justify-between">
                            <div>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                                    <span className="px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider">
                                        2-in-1 Uncapped Value · Save $60+/mo
                                    </span>
                                    <span className="font-mono text-xs text-emerald-300 font-bold">
                                        5 Free Solves / Day ($0 No Card)
                                    </span>
                                </div>

                                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                                    One Pass = Unlimited Stealth Extension + Multi-Model Study AI Hub.
                                </h3>

                                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                                    With ExamGhost, you never count monthly requests during midterms—and you don&apos;t need separate $20/mo subscriptions to ChatGPT Plus or Claude Pro for your homework essays and problem sets.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-xs font-mono font-bold uppercase text-emerald-300 mb-1.5">
                                            1. Unlimited Stealth Extension
                                        </div>
                                        <ul className="space-y-2 text-xs text-slate-200">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                <span><strong>0.3s Double-Click</strong> inline solve &amp; <strong>Alt+S</strong> Hybrid Vision+DOM Snip</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                <span><strong>Alt+1</strong> Invisible, <strong>Alt+2</strong> Stealth, <strong>Alt+3</strong> Explain + <strong>⌘+Shift+U</strong> Master Toggle</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                <span>100% <strong>Focus Shield</strong> across Canvas, Blackboard, Moodle &amp; 20+ LMSs</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-xs font-mono font-bold uppercase text-emerald-300 mb-1.5">
                                            2. Study &amp; Homework AI Workspace
                                        </div>
                                        <ul className="space-y-2 text-xs text-slate-200">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                <span><strong>Claude 3.7 Sonnet</strong> for research papers, coding labs &amp; nuanced humanities</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                <span><strong>ChatGPT (GPT-4o / o3-mini)</strong> for multimodal diagrams &amp; fast synthesis</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                <span><strong>DeepSeek-R1</strong> for deep chain-of-thought Calculus, Physics &amp; Orgo proofs</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Tier Strip */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10 text-center font-mono">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div className="text-sm font-extrabold text-emerald-300">$0 Free</div>
                                    <div className="text-[11px] text-slate-300">5 Solves / Day</div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div className="text-sm font-extrabold text-white">$19/mo</div>
                                    <div className="text-[11px] text-slate-300">Monthly Pass</div>
                                </div>
                                <div className="p-3 rounded-xl bg-emerald-400 text-slate-950 font-extrabold">
                                    <div className="text-sm">$8.25/mo</div>
                                    <div className="text-[10px]">$99/yr Academic</div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div className="text-sm font-extrabold text-white">$199</div>
                                    <div className="text-[11px] text-slate-300">Lifetime Pass</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    COMPREHENSIVE 12-ROW COMPARISON MATRIX
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Feature Comparison Table">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                            12-Point Technical &amp; Policy Audit
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-3">
                            ExamGhost (v4.2) vs Apex Vision AI (2026)
                        </h2>
                        <p className="text-xs sm:text-sm text-ink-secondary">
                            Audited directly against <code className="font-mono bg-slate-200/70 px-1.5 py-0.5 rounded">apexvision.ai</code> and Chrome Extension ID <code className="font-mono bg-slate-200/70 px-1.5 py-0.5 rounded">ncaknkaehhieldhnmimbjnfgneaiijbd</code>.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-slate-300 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                <thead>
                                    <tr className="bg-[#0f172a] text-white border-b border-slate-800">
                                        <th className="py-4 px-6 font-bold w-[36%]">Telemetry / Feature Vector</th>
                                        <th className="py-4 px-6 font-extrabold text-emerald-300 bg-emerald-950/60 w-[34%]">
                                            ExamGhost v4.2 (Focus Shield)
                                        </th>
                                        <th className="py-4 px-6 font-bold text-slate-300 w-[30%]">
                                            Apex Vision AI (apexvision.ai)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {comparisonRows.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-ink">{row.feature}</div>
                                                <div className="text-xs text-ink-muted mt-0.5">{row.sub}</div>
                                            </td>
                                            <td className="py-4 px-6 font-bold text-emerald-900 bg-emerald-50/40">
                                                {row.examghost}
                                            </td>
                                            <td className="py-4 px-6 font-medium text-rose-900">
                                                {row.apex}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    STUDY & HOMEWORK AI WORKSPACE SHOWCASE (COMPACT)
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Study and Homework AI Workspace">
                    <StudyAiHubShowcase compact />
                </section>

                {/* ============================================================
                    6 DEEP FAQ ACCORDION
                ============================================================ */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20" aria-label="Frequently Asked Questions">
                    <div className="text-center mb-10">
                        <span className="px-3 py-1 rounded-full bg-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2 inline-block">
                            Forensic FAQ
                        </span>
                        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink">
                            Apex Vision AI vs ExamGhost: 6 Key Questions
                        </h2>
                    </div>

                    <div className="space-y-3.5">
                        {faqs.map((faq, idx) => (
                            <details
                                key={idx}
                                className="group rounded-2xl bg-white border border-slate-300 p-5 sm:p-6 shadow-sm transition-all"
                                open={idx === 0}
                            >
                                <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.question}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted group-open:rotate-180 transition-transform shrink-0 ml-3" />
                                </summary>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-3.5 pt-3 border-t border-slate-200 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ============================================================
                    CONVERSION STRIP + RELATED COMPARISONS
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-[#0f172a] text-white border border-slate-700 p-7 sm:p-10 shadow-lift">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-slate-800">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wider mb-2">
                                    document.hasFocus() === true · 5 Free Solves / Day · Uncapped Pro Plans
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                    Don&apos;t bring an unshielded homework sidebar into a timed Canvas exam.
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
                                    Start with 5 Free Solves / Day on ExamGhost ($0, auto-refills every 24h, no card required). Upgrade anytime for $19/mo, $99/yr ($8.25/mo), or $199 Lifetime including our Claude 3.7 + ChatGPT + DeepSeek Study Hub.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link
                                    prefetch={false}
                                    href="/#pricing"
                                    className="px-6 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs sm:text-sm font-extrabold shadow-lg inline-flex items-center gap-2 transition-colors"
                                >
                                    <FaChrome className="w-4 h-4 text-slate-950" aria-hidden="true" />
                                    <span>Start 5 Free Solves / Day</span>
                                </Link>
                                <Link
                                    prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 inline-flex items-center gap-1.5 transition-colors"
                                >
                                    <span>Test Live Demo</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                                Related Technical Extension Audits
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                                <Link prefetch={false} href="/canvashack-vs-examghost" className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 font-semibold text-white flex items-center justify-between transition-colors">
                                    <span>CanvasHack vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                </Link>
                                <Link prefetch={false} href="/collegetools-vs-examghost" className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 font-semibold text-white flex items-center justify-between transition-colors">
                                    <span>College Tools vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                </Link>
                                <Link prefetch={false} href="/transcript-vs-examghost" className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 font-semibold text-white flex items-center justify-between transition-colors">
                                    <span>Transcript vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                </Link>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 font-semibold text-white flex items-center justify-between transition-colors">
                                    <span>All 57 Audits</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
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
