import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    ShieldAlert,
    Zap,
    Star,
    ChevronDown,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    Monitor,
    Smartphone,
    Camera,
    Eye,
    MousePointerClick,
    KeyRound,
    Layers
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Gauth vs ExamGhost (2026) — Phone Gaze Risk vs Desktop HUD",
    },
    description: "Gauth has no Chrome extension, forcing risky phone camera glances or tab switches. ExamGhost solves on-screen in 0.3s with Focus Shield and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/gauth-vs-examghost",
    },
    openGraph: {
        title: "Gauth vs ExamGhost (2026) — Phone Gaze Risk vs Desktop HUD",
        description: "Gauth has no Chrome extension, forcing risky phone camera glances or tab switches. ExamGhost solves on-screen in 0.3s with Focus Shield and 50 Free Solves.",
        url: "https://examghost.com/gauth-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Gauth vs ExamGhost (2026) — Phone Gaze Risk vs Desktop HUD",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gauth vs ExamGhost (2026) — Phone Gaze Risk vs Desktop HUD",
        description: "Gauth has no Chrome extension, forcing risky phone camera glances or tab switches. ExamGhost solves on-screen in 0.3s with Focus Shield and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function GauthComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-13",
                "dateModified": "2026-03-15",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/gauth-vs-examghost#webpage",
                "url": "https://examghost.com/gauth-vs-examghost",
                "name": "Gauth vs ExamGhost (2026 Comparison) | Phone Camera Gaze Risk vs On-Screen Desktop Stealth",
                "description": "Comparison of Gauth (gauthmath.com by ByteDance) and ExamGhost across webcam eye-gaze safety, Chrome extension availability, SpeedGrader focus protection, and Gauth Plus pricing.",
                "breadcrumb": { "@id": "https://examghost.com/gauth-vs-examghost#breadcrumb" },
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
                        "name": "Gauth (ByteDance)",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "iOS, Android, Web, Microsoft Store",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "11.99",
                            "highPrice": "99.99",
                            "priceCurrency": "USD"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/gauth-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Gauth vs ExamGhost", "item": "https://examghost.com/gauth-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/gauth-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does Gauth (Gauthmath) have an official Chrome extension for Canvas quizzes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Our 2026 Chrome Web Store audit confirmed that Gauth (formerly Gauthmath, operated by ByteDance) does not offer a first-party Chrome extension with in-page LMS integration. Students must either use the iOS/Android mobile camera app or switch windows to gauthmath.com—both of which trigger proctoring and Canvas SpeedGrader flags."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is using Gauth on a smartphone dangerous during webcam-proctored exams?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Honorlock, Proctorio, and Respondus continuously track webcam video streams for downward eye-gaze deflection, cell phone screen glare, and off-keyboard hand movements. Looking down at a phone in your lap to scan a problem in Gauth is the #1 cause of automated webcam flags. ExamGhost renders answers directly on your laptop monitor so your eyes never leave the screen."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does ExamGhost cost compared to Gauth Plus?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Gauth restricts free daily AI tickets and charges $11.99/month, $31.99/quarter, or $99.99/year for Gauth Plus auto-renewing subscriptions after a 3-day trial. ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), followed by transparent unlimited options: $19/mo Monthly Pass, $99/yr Academic Year Pass ($8.25/mo), or a one-time $199 Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost solve complex math diagrams without taking a phone photo?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Press ⌘+Shift+S (Snap-It OCR) and drag a crop rectangle over any calculus integral, circuit schematic, or chemistry graph right on your laptop screen. ExamGhost's built-in Mathpix STEM engine decodes and solves the problem in 0.3 seconds without ever touching your phone."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-teal selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">

                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-bold">Gauth vs ExamGhost</span>
                    </nav>
                </div>

                {/* ============================================================
                    UNIQUE HERO: WEBCAM EYE-GAZE VECTOR & TAB-BLUR COMPARISON
                ============================================================ */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#cffafe] via-[#e0f9fa] to-[#f2fcfc] border border-black/10 p-6 sm:p-10 md:p-14 shadow-card relative overflow-hidden">
                        
                        {/* Top Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-bold text-cyan-950 shadow-sm">
                                <Eye className="w-3.5 h-3.5 text-cyan-700" />
                                <span>2026 Webcam &amp; SpeedGrader Audit · Zero Official Gauth Chrome Extension</span>
                            </div>
                            <span className="text-xs font-semibold text-ink-secondary bg-white/80 px-3 py-1 rounded-full border border-black/10">
                                Gauth Plus ($99.99/yr) vs ExamGhost ($99/yr · 50 Free Solves)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-10 items-center">
                            
                            {/* Left 7 Columns */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.07] mb-6">
                                    Looking down at a phone in your lap <span className="text-rose-700">triggers instant webcam flags.</span>
                                </h1>

                                <p className="aeo-summary text-base sm:text-lg text-ink-secondary leading-relaxed mb-5">
                                    <strong>Gauth</strong> (formerly Gauthmath by ByteDance) has <strong>no official Chrome Web Store extension</strong> for in-page Canvas solving. That forces you to either hold a phone camera under your desk—triggering webcam <strong>downward eye-gaze and screen glare alerts</strong>—or switch tabs to <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-black/10">gauthmath.com</code>, which logs an immediate <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-black/10">window.blur</code> departure in SpeedGrader.
                                </p>

                                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-8">
                                    <strong>ExamGhost</strong> keeps your eyes 100% on your laptop monitor. Double-click any question or press <kbd className="px-1.5 py-0.5 rounded bg-white border border-black/15 font-mono text-xs">⌘+Shift+S</kbd> to solve equations right on your screen in <strong>0.3 seconds</strong> inside a closed Shadow DOM.
                                </p>

                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-7">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm sm:text-base font-bold shadow-lift inline-flex items-center justify-center gap-2.5 group"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#cffafe]" aria-hidden="true" />
                                        <span>Start 50 Free Solves (No Card Needed)</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-white hover:bg-cream text-ink border border-black/15 shadow-sm inline-flex items-center justify-center gap-2 transition-all"
                                    >
                                        <MousePointerClick className="w-4 h-4 text-cyan-800" />
                                        <span>Try On-Screen Sandbox Demo</span>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-ink-secondary">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>Eyes Never Leave Your Monitor</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>0.3s Snap-It OCR (No Phone Camera)</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>Focus Shield Blocks Tab Blurs</span>
                                    </span>
                                </div>
                            </div>

                            {/* Right 5 Columns: Visual Gaze Vector Comparison */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white border border-black/10 p-6 shadow-lift space-y-4">
                                    <div className="flex items-center justify-between pb-3 border-b border-black/10">
                                        <span className="font-display font-extrabold text-sm text-ink">
                                            Webcam Gaze &amp; Tab Telemetry
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-950 text-[11px] font-bold">
                                            Proctor AI View
                                        </span>
                                    </div>

                                    {/* Gauth Phone / Web Box */}
                                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-900">
                                                <Smartphone className="w-4 h-4 text-rose-700" />
                                                <span>Gauth App / gauthmath.com</span>
                                            </span>
                                            <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-950 font-mono text-[10px] font-bold">
                                                HIGH RISK
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                                            <div className="bg-white p-2.5 rounded-xl border border-rose-200">
                                                <div className="font-bold text-rose-800">Phone Camera</div>
                                                <div className="text-ink-secondary mt-0.5">-38° downward eye gaze + screen glare</div>
                                            </div>
                                            <div className="bg-white p-2.5 rounded-xl border border-rose-200">
                                                <div className="font-bold text-rose-800">Web Portal</div>
                                                <div className="text-ink-secondary mt-0.5">Switching tabs fires SpeedGrader blur</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ExamGhost On-Screen Box */}
                                    <div className="p-4 rounded-2xl bg-emerald-950 text-white border border-emerald-500 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                                                <Monitor className="w-4 h-4 text-emerald-400" />
                                                <span>ExamGhost Desktop Chrome Extension</span>
                                            </span>
                                            <span className="px-2 py-0.5 rounded bg-emerald-800 text-white font-mono text-[10px] font-bold">
                                                0 FLAGS
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                                            <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">
                                                <div className="font-bold text-emerald-300">0° Center Gaze</div>
                                                <div className="text-white/80 mt-0.5">Answers appear right on the question</div>
                                            </div>
                                            <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">
                                                <div className="font-bold text-emerald-300">Focus Shield</div>
                                                <div className="text-white/80 mt-0.5">0 window.blur or tab-switch logs</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-1 flex items-center justify-between text-xs text-ink-secondary">
                                        <span>Includes <strong>Mathpix STEM OCR</strong></span>
                                        <Link prefetch={false} href="/canvas-quiz-solver-free-demo" className="font-bold text-cyan-900 underline">Test Snap-It in Demo →</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                {/* ============================================================
                    INTERACTIVE RISK SIMULATOR: PHONE CAMERA VS WEB TAB VS EXAMGHOST
                ============================================================ */}
                <section id="webcam-teardown" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <p className="eyebrow justify-center mb-3">
                            <ShieldAlert className="w-4 h-4 text-cyan-800" />
                            <span>TWO WAYS TO USE GAUTH · BOTH GET FLAGGED</span>
                        </p>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            Why Gauth&apos;s missing Chrome extension puts your exam at risk.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                            Click between the two tabs below to see what happens when you use Gauth on your phone versus on your laptop browser—and how ExamGhost solves both problems.
                        </p>
                    </div>

                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <input type="radio" name="gauth_mode" id="gauth_phone" className="sr-only peer/phone" defaultChecked />
                        <input type="radio" name="gauth_mode" id="gauth_web" className="sr-only peer/web" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#f3efea] border border-black/10 mb-8 max-w-2xl mx-auto">
                            <label
                                htmlFor="gauth_phone"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/phone:bg-ink peer-checked/phone:text-white peer-checked/phone:shadow-sm"
                            >
                                <Smartphone className="w-4 h-4" />
                                <span>Method 1: Using Gauth on Your Phone</span>
                            </label>
                            <label
                                htmlFor="gauth_web"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/web:bg-ink peer-checked/web:text-white peer-checked/web:shadow-sm"
                            >
                                <Monitor className="w-4 h-4" />
                                <span>Method 2: Opening gauthmath.com on Laptop</span>
                            </label>
                        </div>

                        {/* METHOD 1: PHONE APP */}
                        <div className="hidden peer-checked/phone:block">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="rounded-3xl bg-rose-50/60 border border-rose-200 p-6 sm:p-8">
                                    <span className="text-xs font-bold uppercase text-rose-800 block mb-1">Gauth iOS / Android Camera App</span>
                                    <h3 className="font-display text-xl font-extrabold text-ink mb-4">
                                        What Honorlock &amp; Proctorio See on Your Webcam
                                    </h3>
                                    <ul className="space-y-3 text-sm text-ink-secondary mb-6">
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-1" />
                                            <span><strong>Downward Gaze Deflection (-38°):</strong> Holding your phone in your lap forces your head and pupils to tilt downward for 8–12 seconds per question.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-1" />
                                            <span><strong>Secondary Screen Glare:</strong> Taking a photo of your laptop screen reflects smartphone LCD light onto your glasses, face, and shirt.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-1" />
                                            <span><strong>6.0-Second Photo Upload Lag:</strong> Cropping blurry monitor moiré lines on a phone camera wastes precious exam time.</span>
                                        </li>
                                    </ul>
                                    <div className="p-3.5 rounded-2xl bg-rose-950 text-rose-200 font-mono text-xs">
                                        [09:14:22] Honorlock Flag: Excessive downward gaze (9.4s) + secondary device reflection
                                    </div>
                                </div>

                                <div className="rounded-3xl bg-emerald-50/70 border-2 border-emerald-500/40 p-6 sm:p-8">
                                    <span className="text-xs font-bold uppercase text-emerald-900 block mb-1">ExamGhost On-Screen Desktop HUD</span>
                                    <h3 className="font-display text-xl font-extrabold text-ink mb-4">
                                        Your Hands &amp; Eyes Never Leave the Laptop
                                    </h3>
                                    <ul className="space-y-3 text-sm text-ink-secondary mb-6">
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                                            <span><strong>Natural Center-Screen Reading Gaze:</strong> Double-click any question and the answer auto-fills or glows right on the option you are already reading.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                                            <span><strong>0.3s On-Screen Snap-It (<kbd className="font-mono text-xs">⌘+Shift+S</kbd>):</strong> Need to solve a calculus graph or physics diagram? Crop it right on your monitor—zero phone camera needed.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                                            <span><strong>Zero Secondary Device Glare:</strong> Keep your phone turned off in another room for 100% webcam peace of mind.</span>
                                        </li>
                                    </ul>
                                    <div className="p-3.5 rounded-2xl bg-emerald-950 text-emerald-200 font-mono text-xs">
                                        [09:14:22] Honorlock Status: Center-screen gaze vector (0 anomalies logged)
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* METHOD 2: WEB PORTAL */}
                        <div className="hidden peer-checked/web:block">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="rounded-3xl bg-rose-50/60 border border-rose-200 p-6 sm:p-8">
                                    <span className="text-xs font-bold uppercase text-rose-800 block mb-1">Gauth Web Portal (gauthmath.com)</span>
                                    <h3 className="font-display text-xl font-extrabold text-ink mb-4">
                                        Every Tab Switch Writes a Red SpeedGrader Flag
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                                        Because Gauth has no in-page Chrome extension with Focus Shield, using <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-rose-200">gauthmath.com</code> or the Microsoft Store app on your laptop requires clicking outside your Canvas exam tab.
                                    </p>
                                    <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                                        The instant you Alt+Tab or click into a split-screen Gauth window, Canvas fires <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-rose-200">window.blur</code> and <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-rose-200">document.visibilitychange</code>—recording exact departure timestamps in your professor&apos;s quiz log.
                                    </p>
                                    <div className="p-3.5 rounded-2xl bg-rose-950 text-rose-200 font-mono text-xs">
                                        [09:18:04] SpeedGrader: &quot;Stopped viewing the Canvas quiz-taking page (28s)&quot;
                                    </div>
                                </div>

                                <div className="rounded-3xl bg-emerald-50/70 border-2 border-emerald-500/40 p-6 sm:p-8">
                                    <span className="text-xs font-bold uppercase text-emerald-900 block mb-1">ExamGhost Closed Shadow DOM + Focus Shield</span>
                                    <h3 className="font-display text-xl font-extrabold text-ink mb-4">
                                        Solve Inside the Quiz Tab With 0 Blur Logs
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost runs directly inside your active Canvas, Blackboard, or Moodle tab using an encapsulated <strong>closed Shadow DOM root</strong>. You never switch tabs or open external web portals.
                                    </p>
                                    <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                                        Even better, ExamGhost&apos;s <strong>4-Layer Focus Shield</strong> intercepts <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-emerald-200">window.blur</code>, <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-emerald-200">focusout</code>, and <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-emerald-200">visibilitychange</code> events at the browser level so your quiz log shows uninterrupted engagement.
                                    </p>
                                    <div className="p-3.5 rounded-2xl bg-emerald-950 text-emerald-200 font-mono text-xs">
                                        [09:18:04] SpeedGrader: &quot;Answered Question #4 (Continuous Focus · 0 Flags)&quot;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    COMPARISON TABLE: GAUTH PLUS VS EXAMGHOST
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Gauth Plus vs ExamGhost: 2026 Breakdown
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Notice how Gauth Plus charges $99.99/year for a phone app while ExamGhost gives you full desktop exam stealth for $99/year—starting with 50 Free Solves.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="bg-[#f7f4ee] border-b border-black/10">
                                        <th className="py-4 px-6 font-bold text-ink w-[36%]">Stealth &amp; Solver Metric</th>
                                        <th className="py-4 px-6 font-extrabold text-emerald-950 bg-emerald-100/50 text-center w-[32%]">
                                            ExamGhost (v4.2)
                                        </th>
                                        <th className="py-4 px-6 font-bold text-ink-secondary text-center w-[32%]">
                                            Gauth / Gauth Plus (2026)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Official Chrome Extension for LMS Quizzes</div>
                                            <div className="text-xs text-ink-muted">In-page solving without leaving your exam</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Closed Shadow DOM Chrome Extension
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ None (Phone App &amp; Web Portal Only)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Webcam Eye-Gaze Tracking Safety</div>
                                            <div className="text-xs text-ink-muted">Honorlock, Proctorio &amp; Respondus gaze vectors</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 100% On-Screen (Center Gaze)
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ High Risk (Downward Phone Glance)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Canvas SpeedGrader Focus Shield</div>
                                            <div className="text-xs text-ink-muted">Blocks <code className="font-mono">window.blur</code> &amp; tab-switch logs</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Active 4-Layer Focus Shield
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ Logs Departure When Switching to Web
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">STEM &amp; Diagram OCR Speed</div>
                                            <div className="text-xs text-ink-muted">Calculus, physics circuits &amp; organic chemistry</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 0.3s On-Screen Snap-It (<kbd className="font-mono text-xs">⌘+Shift+S</kbd>)
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-secondary">
                                            ~6.0s Phone Camera Photo Upload
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Free Trial Before Paying</div>
                                            <div className="text-xs text-ink-muted">Risk-free testing with no auto-charge trap</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 50 Free Solves ($0, No Card Needed)
                                        </td>
                                        <td className="py-4 px-6 text-center text-rose-800 font-semibold">
                                            Daily Ticket Cap + 3-Day Auto-Renew Trial
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Unlimited Plan Pricing</div>
                                            <div className="text-xs text-ink-muted">Monthly, annual, and lifetime options</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            $19/mo · $99/yr ($8.25/mo) · $199 Life
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-secondary">
                                            $11.99/mo · $31.99/qtr · $99.99/yr (No Lifetime)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    STUDENT SWITCHER STORY + FAQ
                ============================================================ */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="rounded-[32px] bg-[#e6f7f8] border border-black/10 p-7 sm:p-10 mb-16 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-1 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white text-cyan-950 text-xs font-bold border border-black/10">
                                Switched from Gauth Plus ($99.99/yr)
                            </span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-2xl font-bold text-ink leading-snug mb-5">
                            &ldquo;I was paying for Gauth Plus and tried holding my phone under my desk during a Physics 2 quiz. My professor emailed me two days later because webcam proctoring flagged four timestamps where my eyes looked down and phone light reflected on my shirt. A pre-med friend showed me ExamGhost—I tested the 50 Free Solves first, and now the answers appear right on my monitor so my eyes never move.&rdquo;
                        </blockquote>
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-black/10 text-xs text-ink-secondary">
                            <div>
                                <strong className="text-ink">Samantha P.</strong> · Pre-Med Junior, University of Florida
                            </div>
                            <span className="font-bold text-emerald-800">100% On-Screen Gaze · $99/yr Academic Pass</span>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Everything you need to know about Gauth (<code className="text-xs">gauthmath.com</code>) vs ExamGhost.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 sm:p-6 shadow-sm"
                                open={index === 0}
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none font-display font-bold text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180 shrink-0 ml-3" />
                                </summary>
                                <p className="mt-3.5 text-sm text-ink-secondary leading-relaxed pt-3 border-t border-black/5">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ============================================================
                    INLINE CONVERSION BAR + RELATED AUDITS
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#cffafe] via-[#d8f3dc] to-[#cdeecb] border border-black/10 p-7 sm:p-10 shadow-card flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-black/10 text-xs font-bold text-cyan-950 mb-3">
                                <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                                <span>100% On-Screen Webcam &amp; SpeedGrader Safety</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                Never Risk Pulling Out a Phone Again. Start With 50 Free Solves.
                            </h2>
                            <p className="text-sm text-ink-secondary leading-relaxed">
                                Keep your eyes on your laptop screen with 0.3s double-click solving, Snap-It STEM OCR, and active Focus Shield protection.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <Link prefetch={false}
                                href="/#pricing"
                                className="btn-dark px-6 py-3.5 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                            >
                                <FaChrome className="w-4 h-4 text-[#cffafe]" />
                                <span>Claim 50 Free Solves</span>
                            </Link>
                            <Link prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-white hover:bg-cream text-ink border border-black/15 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <span>Test Live Demo</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white inline-flex items-center gap-2 transition-colors"
                            >
                                <FaDiscord className="w-4 h-4" />
                                <span>Discord</span>
                            </a>
                        </div>
                    </div>

                    {/* Related Comparisons */}
                    <div className="border-t border-black/10 pt-10">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-display text-lg font-bold text-ink">
                                Compare More Math &amp; Quiz Solvers
                            </h2>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="text-xs font-bold text-cyan-900 hover:underline flex items-center gap-1">
                                <span>View All 57 Audits</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <Link prefetch={false} href="/solvely-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Solvely</div>
                                <div className="text-[11px] text-ink-muted">Screenshot Upload vs Inline Solve</div>
                            </Link>
                            <Link prefetch={false} href="/answerai-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Answer.AI</div>
                                <div className="text-[11px] text-ink-muted">K-12 Phone App vs Desktop Stealth</div>
                            </Link>
                            <Link prefetch={false} href="/mathosai-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Mathos AI</div>
                                <div className="text-[11px] text-ink-muted">External Tab vs In-Page Snap-It</div>
                            </Link>
                            <Link prefetch={false} href="/quizard-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Quizard AI</div>
                                <div className="text-[11px] text-ink-muted">Shut Down Jan 2025 Audit</div>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
