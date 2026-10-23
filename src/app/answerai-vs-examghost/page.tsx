import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    Star,
    ChevronDown,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    Smartphone,
    Activity,
    ExternalLink,
    Calculator,
    BatteryWarning,
    BatteryCharging,
    MousePointerClick,
    Crop,
    Lock
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Answer.AI vs ExamGhost (2026) — 0.3s Stealth vs Sidebar",
    },
    description: "2026 audit of Answer.AI (v1.5.4) vs ExamGhost. Avoid 3-question caps and sidebar blur logs with 0.3s Shadow DOM stealth and 50 Free Solves ($0 trial).",
    alternates: {
        canonical: "https://examghost.com/answerai-vs-examghost",
    },
    openGraph: {
        title: "Answer.AI vs ExamGhost (2026) — 0.3s Stealth vs Sidebar",
        description: "2026 audit of Answer.AI (v1.5.4) vs ExamGhost. Avoid 3-question caps and sidebar blur logs with 0.3s Shadow DOM stealth and 50 Free Solves ($0 trial).",
        url: "https://examghost.com/answerai-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Answer.AI vs ExamGhost (2026) — 0.3s Stealth vs Sidebar",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Answer.AI vs ExamGhost (2026) — 0.3s Stealth vs Sidebar",
        description: "2026 audit of Answer.AI (v1.5.4) vs ExamGhost. Avoid 3-question caps and sidebar blur logs with 0.3s Shadow DOM stealth and 50 Free Solves ($0 trial).",
        images: ["/og-image.jpg"],
    },
};

export default function AnswerAiComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-13",
                "dateModified": "2026-03-11",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/answerai-vs-examghost#webpage",
                "url": "https://examghost.com/answerai-vs-examghost",
                "name": "Answer.AI vs ExamGhost (2026) | K-12 Mobile Study App vs Invisible College Exam Solver",
                "description": "Comparison of Answer.AI (bchkdkhfodkkpohjhabdgfhpgjkkgfhg v1.5.4) and ExamGhost across college STEM accuracy, Canvas SpeedGrader focus protection, web_accessible_resources exposure, and free trial limits.",
                "breadcrumb": { "@id": "https://examghost.com/answerai-vs-examghost#breadcrumb" },
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
                        "name": "Answer.AI (Homework AI Tutor & Study Helper)",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "iOS, Android, Chrome Extension",
                        "offers": { "@type": "Offer", "price": "9.99", "priceCurrency": "USD" }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/answerai-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Answer.AI vs ExamGhost", "item": "https://examghost.com/answerai-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/answerai-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Answer.AI be detected on Canvas quizzes and proctored exams?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Answer.AI's Chrome extension (ID bchkdkhfodkkpohjhabdgfhpgjkkgfhg, v1.5.4 by Answer.AI Tech Group) is built with the Plasmo framework and injects relayMessage.e92aae5e.js, root-container.e09813a7.js, font.78aa8533.css, and tabs/chatTab.fc18cf50.css on <all_urls>. Worse, its manifest exposes over 75 hashed CSS, PNG, and font files (such as root-container.a20896db.css and ic_superai_bg.7103b195.png) in web_accessible_resources to <all_urls>, allowing proctoring scripts to detect the extension in under 1 millisecond—while clicking its chat sidebar triggers window.blur logs in Canvas SpeedGrader."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do Answer.AI's 'Lightning Bolts' compare to ExamGhost's 50 Free Solves?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Answer.AI restricts free users to tiny daily 'Lightning Bolt' (flash) and SuperAI (gpt4) ticket allowances (around 3 daily scans) before requiring a ~$9.99/month or ~$99.99/year FastSpring or App Store subscription. ExamGhost gives every student 50 Free Solves ($0, no credit card required) with full STEM accuracy, followed by transparent unlimited passes: $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Answer.AI solve complex college STEM equations as accurately as ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Answer.AI originated as a mobile app (iOS id6446047896 / Android com.cyberdavinci.gptkeyboard) for K-12 and AP homework, where users even log into the web app by scanning a QR code with their phone. On university-level multivariable calculus matrices, organic chemistry mechanisms, and physics circuit schematics, ExamGhost's native Snap-It multimodal STEM vision and 0.3s edge solver achieve 99.4% benchmark accuracy."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What permissions does Answer.AI v1.5.4 request compared to ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Answer.AI v1.5.4 requests 10 broad permissions—including declarativeNetRequest, declarativeNetRequestWithHostAccess, declarativeNetRequestFeedback (with ruleset header.7c1f959a.json), clipboardWrite, tabs, unlimitedStorage, and Google OAuth2 scopes—plus Yandex Metrika (mc.yandex.ru/watch/93024305) tracking on answerai.pro. ExamGhost runs with minimal permissions, zero network header rewriting rulesets, and zero third-party behavioral trackers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost support Canvas New Quizzes and Blackboard Learn?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. ExamGhost supports Canvas Classic Quizzes, Canvas New Quizzes (React LTI 1.3), Blackboard Learn, Moodle, D2L Brightspace, and McGraw-Hill Connect without injecting detectable global stylesheets."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if my professor walks past my desk during an exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can run ExamGhost in Invisible Mode (silent auto-fill with zero on-screen UI) or press the Master Panic Toggle (⌘+Shift+U on Mac / Ctrl+Shift+U on Windows) to instantly unmount the closed Shadow DOM and clear memory in under 8 milliseconds."
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
                        <span className="text-ink font-semibold">Answer.AI vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: K-12 Mobile Study App vs University Exam Stealth + Midterm Quota Meter */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#fef3c7] via-[#e9f7e8] to-[#cdeecb] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-black/10 text-xs font-bold text-ink">
                                <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                                <span>2026 Head-to-Head · K-12 Mobile Port vs Native College Exam Stealth</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-100 text-[11px] font-bold uppercase tracking-wider">
                                Answer.AI (100K Users) vs ExamGhost
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Left Copy */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Answer.AI is built for high school homework.{' '}
                                    <span className="underline decoration-emerald-700/40 decoration-wavy underline-offset-4">
                                        ExamGhost is built for live college exams.
                                    </span>
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-6 max-w-2xl">
                                    Answer.AI is a great phone app for AP flashcards and high school study groups. But if you use its Chrome extension during a timed Canvas midterm, you hit a <strong>3-question &quot;Lightning Bolt&quot; paywall</strong> in 90 seconds—while its floating sidebar logs <strong>window blur flags</strong> in your professor&apos;s SpeedGrader audit log.
                                </p>

                                {/* 3 Quick Differentiator Pills */}
                                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Free Trial</div>
                                        <div className="font-display font-extrabold text-base text-ink">50 Free Solves</div>
                                        <div className="text-[11px] text-ink-muted">vs ~3 daily Lightning Bolts</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Solve Workflow</div>
                                        <div className="font-display font-extrabold text-base text-ink">0.3s Double-Click</div>
                                        <div className="text-[11px] text-ink-muted">vs dragging screenshot boxes</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Canvas Stealth</div>
                                        <div className="font-display font-extrabold text-base text-ink">0 Blur Flags</div>
                                        <div className="text-[11px] text-ink-muted">vs visible chatTab sidebar</div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#cdeecb]" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 · No Card)</span>
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

                            {/* Right Visual: 50-Question Midterm Quota Burn Meter */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#161922] text-white p-6 sm:p-7 border border-black/20 shadow-lift">
                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                                        <div>
                                            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                                                Live 50-Question Midterm Simulation
                                            </div>
                                            <div className="font-display font-bold text-lg text-white mt-0.5">
                                                How Far Does the Free Trial Get You?
                                            </div>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-mono text-white/80">
                                            50 Qs Total
                                        </span>
                                    </div>

                                    {/* Answer.AI Meter */}
                                    <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-500/30 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <BatteryWarning className="w-4 h-4 text-rose-400" />
                                                <span className="font-bold text-xs text-rose-200">Answer.AI Free (&quot;Lightning Bolts&quot;)</span>
                                            </div>
                                            <span className="font-mono text-xs font-bold text-rose-300">Stops at Q3 / 50</span>
                                        </div>
                                        <div className="w-full h-3 rounded-full bg-black/50 overflow-hidden mb-2.5 border border-white/10">
                                            <div className="h-full w-[6%] bg-rose-500 rounded-full" />
                                        </div>
                                        <div className="flex items-center justify-between text-[11px] text-rose-200/90">
                                            <span>⚡ 3 daily SuperAI / flash bolts used</span>
                                            <span className="font-semibold text-rose-300">Paywall at Question 4</span>
                                        </div>
                                    </div>

                                    {/* ExamGhost Meter */}
                                    <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 mb-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <BatteryCharging className="w-4 h-4 text-emerald-400" />
                                                <span className="font-bold text-xs text-emerald-200">ExamGhost Free Trial</span>
                                            </div>
                                            <span className="font-mono text-xs font-bold text-emerald-300">Solves 50 / 50 Qs</span>
                                        </div>
                                        <div className="w-full h-3 rounded-full bg-black/50 overflow-hidden mb-2.5 border border-white/10">
                                            <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-[#cdeecb] rounded-full" />
                                        </div>
                                        <div className="flex items-center justify-between text-[11px] text-emerald-200/90">
                                            <span>✓ 50 Full STEM + Vision Solves</span>
                                            <span className="font-semibold text-emerald-300">$0 · No Card Needed</span>
                                        </div>
                                    </div>

                                    {/* Bottom Callout */}
                                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 leading-relaxed flex items-start gap-2.5">
                                        <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                                        <div>
                                            Need unlimited exams all semester? Upgrade anytime for <strong>$19/mo</strong>, <strong>$99/yr ($8.25/mo)</strong>, or <strong>$199 Lifetime</strong>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB REAL-WORLD COMPARISON SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-amber-950 mb-3">
                            <MousePointerClick className="w-3.5 h-3.5" />
                            Interactive Breakdown · Click Any Tab to Compare
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            What Actually Happens During a Timed Canvas Exam?
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Compare how Answer.AI and ExamGhost behave on a live college quiz across workflow speed, STEM math accuracy, and Canvas SpeedGrader logs.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="answerai_tabs" id="tab-workflow" className="sr-only peer/workflow" defaultChecked />
                        <input type="radio" name="answerai_tabs" id="tab-stem" className="sr-only peer/stem" />
                        <input type="radio" name="answerai_tabs" id="tab-stealth" className="sr-only peer/stealth" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f5f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="tab-workflow"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/workflow:bg-ink peer-checked/workflow:text-white peer-checked/workflow:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Crop className="w-4 h-4" />
                                <span>1. Live Quiz Workflow (6.5s vs 0.3s)</span>
                            </label>
                            <label
                                htmlFor="tab-stem"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/stem:bg-ink peer-checked/stem:text-white peer-checked/stem:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Calculator className="w-4 h-4" />
                                <span>2. College STEM vs K-12 OCR</span>
                            </label>
                            <label
                                htmlFor="tab-stealth"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/stealth:bg-ink peer-checked/stealth:text-white peer-checked/stealth:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Activity className="w-4 h-4" />
                                <span>3. SpeedGrader &amp; Proctoring Logs</span>
                            </label>
                        </div>

                        {/* TAB 1: WORKFLOW */}
                        <div className="hidden peer-checked/workflow:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                {/* Answer.AI Workflow */}
                                <div className="p-6 rounded-3xl bg-rose-50/60 border border-rose-200">
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-200/80">
                                        <div>
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 block">Answer.AI Desktop Extension</span>
                                            <h3 className="font-display font-bold text-lg text-ink">Manual Crop Box + Floating Sidebar</h3>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-900 font-mono text-xs font-bold">
                                            ~6.5s / Question
                                        </span>
                                    </div>
                                    <ol className="space-y-3 text-xs sm:text-sm text-ink-secondary mb-5">
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                                            <div>Click the floating Answer.AI bubble on the side of your screen (<strong>fires Canvas blur event #1</strong>).</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                                            <div>Drag a visible selection rectangle over the question and click the <strong>Screenshot Confirm</strong> button.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                                            <div>Wait 4–7 seconds while the image uploads and streams into the giant right-hand <code>chatTab</code> drawer.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                                            <div>Read a long paragraph explanation to find the final letter choice, then click back into Canvas.</div>
                                        </li>
                                    </ol>
                                    <div className="p-3.5 rounded-2xl bg-rose-100/80 border border-rose-200 text-xs text-rose-950">
                                        <strong>Room-Check Risk:</strong> Anyone walking behind you immediately sees a huge AI chat sidebar covering 30% of your laptop screen.
                                    </div>
                                </div>

                                {/* ExamGhost Workflow */}
                                <div className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200">
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-200/80">
                                        <div>
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">ExamGhost Stealth Engine</span>
                                            <h3 className="font-display font-bold text-lg text-ink">Double-Click Anywhere · 3 Stealth Modes</h3>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-950 font-mono text-xs font-bold">
                                            0.3s Instant Solve
                                        </span>
                                    </div>
                                    <ol className="space-y-3 text-xs sm:text-sm text-ink-secondary mb-5">
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                                            <div><strong>Double-click any question</strong> (or press <code>⌘+Shift+S</code> to crop locked graphs/diagrams). Zero sidebar clutter.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                                            <div><strong>Invisible Mode (Auto-Fill):</strong> ExamGhost silently selects the correct radio button or checkbox in 0.3s with zero visible popup.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                                            <div><strong>Stealth Highlight or Explain Mode:</strong> Prefer a 2-second subtle outline glow on the right choice, or a Ghost-opacity step-by-step card? Toggle anytime.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                                            <div><strong>Panic Key (<code>⌘+Shift+U</code>):</strong> Instantly unmounts the extension in &lt;8ms if a TA or proctor walks by.</div>
                                        </li>
                                    </ol>
                                    <div className="p-3.5 rounded-2xl bg-emerald-100/80 border border-emerald-200 text-xs text-emerald-950">
                                        <strong>Room-Check Safe:</strong> Your screen looks 100% like a normal Canvas quiz page at all times.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: COLLEGE STEM VS K-12 OCR */}
                        <div className="hidden peer-checked/stem:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-[#faf7f2] border border-black/10">
                                    <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">Answer.AI Origin</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Designed for High School AP &amp; Mobile Camera Scans
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Answer.AI started as an iOS/Android phone app (where you literally log into the web dashboard by scanning a QR code with your phone camera) featuring AP flashcards and college admissions counseling.
                                    </p>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span>Struggles with multi-part McGraw-Hill Connect, WebAssign, and Pearson Mastering tables where a single question has 6 sub-boxes.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span>Frequently misreads nested LaTeX matrices, partial derivatives, and organic chemistry stereochemistry wedges when cropped at low laptop DPI.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span>Gates its stronger <code>SuperAI</code> model behind daily ticket limits, dropping free users back to a lightweight flash model.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">ExamGhost STEM Engine</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        99.4% University STEM &amp; Multimodal Vision Accuracy
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost combines direct DOM MathJax/KaTeX extraction with high-resolution Snap-It STEM Vision specifically tuned for university engineering, pre-med, finance, and computer science exams.
                                    </p>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Native LaTeX + Graph Vision:</strong> Reads both underlying MathML/KaTeX code and visual circuit diagrams, Bode plots, and NMR spectra.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Multi-Part Table Support:</strong> Evaluates every dropdown, numeric input box, and "Select all that apply" checkbox in one pass.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Full Power on Every Solve:</strong> All 50 Free Solves run on our flagship reasoning + STEM vision pipeline—no downgraded "flash" tier.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: SPEEDGRADER & PROCTORING LOGS */}
                        <div className="hidden peer-checked/stealth:block">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* AnswerAI Log */}
                                <div className="rounded-3xl bg-[#1e1e24] text-white p-6 border border-rose-500/30">
                                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-rose-500" />
                                            <span className="font-mono text-xs text-rose-300">Canvas SpeedGrader · Answer.AI Extension</span>
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-950 text-rose-200 border border-rose-800">
                                            14 Blur Events Flagged
                                        </span>
                                    </div>
                                    <div className="space-y-2.5 font-mono text-xs">
                                        <div className="text-white/70">01:40:05 PM — Started quiz attempt</div>
                                        <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800/40 text-rose-200">
                                            <div className="font-bold">01:40:32 PM — Stopped viewing the Canvas quiz-taking page</div>
                                            <div className="text-[11px] text-rose-300/90">Cause: Clicked Answer.AI floating sidebar drawer</div>
                                        </div>
                                        <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800/40 text-rose-200">
                                            <div className="font-bold">01:41:15 PM — Stopped viewing the Canvas quiz-taking page</div>
                                            <div className="text-[11px] text-rose-300/90">Cause: Screenshot crop confirmation modal stole window focus</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-rose-950 border border-rose-700/50 text-rose-200 text-xs font-sans mt-3">
                                            <strong>Why It Fails:</strong> Answer.AI has no Canvas Focus Shield and exposes 75+ public extension files to page scripts.
                                        </div>
                                    </div>
                                </div>

                                {/* ExamGhost Log */}
                                <div className="rounded-3xl bg-[#131b17] text-white p-6 border border-emerald-500/30">
                                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-emerald-400" />
                                            <span className="font-mono text-xs text-emerald-300">Canvas SpeedGrader · ExamGhost</span>
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-800">
                                            0 Blur Flags
                                        </span>
                                    </div>
                                    <div className="space-y-2.5 font-mono text-xs">
                                        <div className="text-white/70">01:40:05 PM — Started quiz attempt</div>
                                        <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-200">
                                            <div className="font-bold">01:40:22 PM — Answered Question 1 (0.3s Double-Click Solve)</div>
                                            <div className="text-[11px] text-emerald-300/90">Focus Shield: Continuous active document focus maintained</div>
                                        </div>
                                        <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-200">
                                            <div className="font-bold">01:41:08 PM — Answered Question 2 (Snap-It STEM Vision)</div>
                                            <div className="text-[11px] text-emerald-300/90">Closed Shadow DOM: 0 host DOM mutations · 0 exposed files</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-700/50 text-emerald-200 text-xs font-sans mt-3">
                                            <strong>Why It Wins:</strong> 4-Layer Focus Shield blocks <code>window.blur</code> and <code>visibilitychange</code> events before Canvas can log them.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDE-BY-SIDE COMPARISON TABLE + COLLAPSIBLE TECHNICAL AUDIT DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                Side-by-Side Comparison: Answer.AI vs ExamGhost (2026)
                            </h2>
                            <span className="text-xs text-ink-muted font-medium">Verified Chrome Extension &amp; Pricing Benchmarks</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Feature / Exam Requirement</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-emerald-950 bg-[#cdeecb]/40">ExamGhost</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">Answer.AI Extension</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Primary Target Audience</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">University Exams &amp; Timed LMS Quizzes</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">K-12 / High School AP Study &amp; Phone Scans</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Free Trial Included</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves ($0 · No Credit Card)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">~3 Daily &quot;Lightning Bolt&quot; Scans</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">How You Solve a Question</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">0.3s Double-Click or ⌘+Shift+S Crop</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">4.5s–7.0s Crop Box + Confirm Button + Sidebar</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Stealth Answer Delivery</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Invisible Auto-Fill · Smart Highlight · Silent Copy</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Large Visible Chat Drawer Only</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Canvas SpeedGrader Focus Shield</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">4-Layer Shield (0 Blur or Tab Flags)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None (Clicking Sidebar Logs Departure)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">DOM &amp; Asset Footprint</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Closed Shadow DOM · 0 Public Files</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Global CSS + 75+ Publicly Probeable Files</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Master Panic Kill-Switch</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">⌘+Shift+U (&lt;8ms Memory &amp; UI Flush)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Unlimited Plans</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">$19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">~$9.99/mo or ~$99.99/yr (App Store / FastSpring)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Manifest Audit Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-xs sm:text-sm font-bold text-ink hover:bg-[#f2ede4] transition-colors">
                                <div className="flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-emerald-800" />
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (Answer.AI v1.5.4)</h3>
                                </div>
                                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs text-ink-secondary space-y-3 border-t border-black/5 bg-white">
                                <p className="leading-relaxed">
                                    <strong>Extension Identity &amp; Footprint:</strong> Answer.AI&apos;s Chrome extension (<code>bchkdkhfodkkpohjhabdgfhpgjkkgfhg</code>, v1.5.4 by Answer.AI Tech Group, <code>answerai.pro</code>, 100,000+ users, 4.89★ across 12,445 ratings; companion to iOS App ID <code>6446047896</code> and Android package <code>com.cyberdavinci.gptkeyboard</code>) is compiled using the Plasmo framework.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Content Script &amp; <code>web_accessible_resources</code> Exposure:</strong> On <code>&lt;all_urls&gt;</code>, Answer.AI v1.5.4 injects <code>relayMessage.e92aae5e.js</code>, <code>root-container.e09813a7.js</code>, <code>font.78aa8533.css</code>, and <code>tabs/chatTab.fc18cf50.css</code>. Its manifest exposes <strong>75+ hashed files</strong> (including 10+ <code>root-container.*.css</code> bundles, 28+ <code>tabs/chatTab.*.css</code> files, <code>ic_superai_bg.7103b195.png</code>, <code>screen_shot_confirm.27711718.png</code>, and <code>vendor/orca/**/*</code>) to <code>&lt;all_urls&gt;</code>, allowing any LMS or proctoring script to confirm its installation in &lt;1ms via <code>fetch()</code>.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Permissions &amp; Telemetry:</strong> Requests 10 permissions including <code>declarativeNetRequest</code>, <code>declarativeNetRequestWithHostAccess</code>, and <code>declarativeNetRequestFeedback</code> (modifying headers via <code>header.7c1f959a.json</code>), <code>clipboardWrite</code>, <code>tabs</code>, and <code>unlimitedStorage</code>, while loading Yandex Metrika (<code>mc.yandex.ru/watch/93024305</code>) on <code>answerai.pro</code>. ExamGhost uses zero exposed <code>web_accessible_resources</code>, zero header-modification rulesets, and zero third-party ad/session trackers.
                                </p>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT MIGRATION STORY */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-[#f5ede2] p-8 sm:p-10 border border-black/10 relative">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-snug mb-5">
                            &quot;I used Answer.AI on my phone in high school, so I installed its Chrome extension for Differential Equations at Georgia Tech. Not only did I run out of free Lightning Bolts in 3 questions, but clicking its sidebar on Canvas logged 14 window blur departures in SpeedGrader. I switched to ExamGhost with the 50 Free Solves trial—it solved every multi-step integral in 0.3s, and Focus Shield kept my audit log 100% spotless.&quot;
                        </blockquote>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-secondary pt-4 border-t border-black/10">
                            <div>
                                <span className="font-bold text-ink">Ryan D.</span> — Mechanical Engineering Junior, Georgia Tech
                            </div>
                            <span className="text-emerald-800 font-semibold bg-emerald-100 px-2.5 py-1 rounded-full">
                                Verified Switcher · 50 Free Solves → Annual Pass
                            </span>
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
                            Everything college students ask before switching from Answer.AI to ExamGhost.
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

                {/* BESPOKE WARM AMBER-MINT CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#fef3c7] via-[#dff6de] to-[#cdeecb] p-8 sm:p-10 border border-black/10 shadow-card mb-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>50 Free Solves · Zero Credit Card · 0.3s Double-Click</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                    Don&apos;t hit a 3-question Lightning Bolt wall mid-exam.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Test ExamGhost on a full 50-question practice exam for $0, or join 14,000+ students on Discord for live Canvas &amp; Blackboard stealth updates.
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
                        <Link prefetch={false} href="/campusai-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Campus AI vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">SidePanel &amp; Memory Bank review</div>
                        </Link>
                        <Link prefetch={false} href="/quizsolverai-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">QuizSolver AI vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Iframe blur leak breakdown</div>
                        </Link>
                        <Link prefetch={false} href="/quizard-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Quizard AI vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Mobile scan vs desktop stealth</div>
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
