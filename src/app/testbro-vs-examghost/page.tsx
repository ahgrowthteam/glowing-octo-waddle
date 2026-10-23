import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
    ShieldCheck, 
    ShieldAlert, 
    Zap, 
    Clock, 
    DollarSign, 
    Star, 
    ChevronDown, 
    ArrowRight, 
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    Coins,
    Timer,
    Ban,
    Keyboard
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "TestBro vs ExamGhost (2026) — Expiring Credits & SidePanel",
    },
    description: "2026 audit of TestBro (testbro.app) vs ExamGhost. Replace 30-day expiring credit packs and Side Panel blur logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/testbro-vs-examghost",
    },
    openGraph: {
        title: "TestBro vs ExamGhost (2026) — Expiring Credits & SidePanel",
        description: "2026 audit of TestBro (testbro.app) vs ExamGhost. Replace 30-day expiring credit packs and Side Panel blur logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/testbro-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "TestBro vs ExamGhost (2026) — Expiring Credits & SidePanel",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TestBro vs ExamGhost (2026) — Expiring Credits & SidePanel",
        description: "2026 audit of TestBro (testbro.app) vs ExamGhost. Replace 30-day expiring credit packs and Side Panel blur logs with 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function TestBroComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-21",
                "dateModified": "2026-03-14",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/testbro-vs-examghost#webpage",
                "url": "https://examghost.com/testbro-vs-examghost",
                "name": "TestBro (testbro.app) vs ExamGhost (2026 Review) | Expiring Ask Credits & Side Panel Blur",
                "description": "Technical evaluation comparing Test Bro (testbro.app, Chrome ID dcnmkocojfkeagnfnhbeojbkeicdekmk) and ExamGhost across contextmenu lockout vulnerabilities, 1-month Ask Credit expiration, and stealth architecture.",
                "breadcrumb": { "@id": "https://examghost.com/testbro-vs-examghost#breadcrumb" },
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
                        "name": "Test Bro - Smart Web Test Assistant",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Browser Extension",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "5.99",
                            "priceCurrency": "USD",
                            "offerCount": "4"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/testbro-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "TestBro vs ExamGhost", "item": "https://examghost.com/testbro-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/testbro-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why does TestBro fail or trigger blur logs during locked Canvas and Blackboard exams?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Test Bro (testbro.app, v1.1.3) primarily relies on the browser's right-click context menu ('Select text and ask' or 'Select area') and was originally optimized for deprecated LinkedIn Skill Assessments rather than Canvas LMS. When university exams disable right-clicking via oncontextmenu='return false;', Test Bro instructs users to click the capture button inside Chrome's Side Panel—which immediately removes focus from the quiz tab and fires a window.blur event in Canvas SpeedGrader. ExamGhost operates via root-level keyboard shortcuts (⌘+Shift+S, ⌘+B) and Closed Shadow DOM overlays with Focus Shield."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do TestBro Ask Credit packages expire?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Test Bro's paid packages—S package ($2.99 for 200 Ask Credits), L package ($3.99 for 400 Ask Credits), and XL package ($5.99 for 800 Ask Credits)—carry a strict 1-month lifespan ('After 1 month, the package will expire automatically'). Any unused credits vanish after 30 days. ExamGhost gives you 50 Free Solves on install that never expire, plus unlimited plans ($19/mo, $99/yr, or $199 Lifetime)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does TestBro trigger Canvas SpeedGrader blur flags?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Because Test Bro v1.1.3 has not been updated since December 5, 2025 and does not hook window.blur or document.visibilitychange events, opening its popup window or Chrome Side Panel causes Canvas to register a 'Stopped viewing the Canvas quiz' log entry. ExamGhost features Focus Shield, intercepting 100% of window blur events."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can ExamGhost solve questions locked inside images or diagrams?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. ExamGhost includes Snap-It Multimodal OCR (⌘+Shift+S), allowing you to snip any diagram, chart, or locked question directly inside the tab without opening Chrome's context menu or Side Panel, returning answers in 0.3 seconds."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-blush/40 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">TestBro vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: Right-Click Context Lockout + 30-Day Expiring S/L/XL Ask Credits */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#ffd5cc] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-rose-950 text-[#ffd5cc] text-[11px] font-bold uppercase tracking-wider">
                                    Context Menu &amp; Credit Expiry Review
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    testbro.app vs ExamGhost
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-ink">
                                9,000 Users · 4.0★ Chrome Store (Last Updated Dec 2025)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column: High-converting student-first copy */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-rose-950/10 border border-rose-950/20 text-xs font-bold text-rose-950 mb-4">
                                    Right-Click Menu Lockout · Side Panel Blur · 30-Day Expiring Credits
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    What happens when an exam blocks right-click—and your credits expire in 30 days?
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    <strong>Test Bro</strong> (<code>testbro.app</code>) was originally built for retired <strong>LinkedIn Skill Assessments</strong>. On Canvas and Blackboard, it relies on Chrome&apos;s right-click menu—and when an exam blocks right-clicking, it forces you to click inside <strong>Chrome&apos;s Side Panel</strong>, immediately logging a <code>window.blur</code> departure in SpeedGrader. Worse, it gives only <strong>5 Free Asks/month</strong>, and any unused S/L/XL Ask Credits <strong>vanish automatically after 30 days</strong>.
                                </p>
                                <p className="text-sm sm:text-base text-rose-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost triggers silently via root-level keyboard hotkeys (<code>⌘+Shift+S</code>) even when right-click is blocked, keeps SpeedGrader 100% clean, and gives you <strong>50 Free Solves that never expire</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false} 
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
                                        <span>Start 50 Free Solves · Never Expire</span>
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

                            {/* Right Column: Bespoke 30-Day Credit Expiration & Context Lockout Receipt Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-4">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-rose-950 uppercase tracking-wider flex items-center gap-1.5">
                                            <Timer className="w-4 h-4 text-rose-700" />
                                            Test Bro 30-Day Credit Wipeout
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">testbro.app/pricing</span>
                                    </div>

                                    {/* Verbatim Expiration Rule */}
                                    <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-rose-800 mb-1">
                                            Verbatim Pricing Clause:
                                        </div>
                                        <p className="font-semibold text-rose-950 italic mb-2">
                                            &ldquo;Paid package lifespan: 1 month. After 1 month, the package will expire automatically.&rdquo;
                                        </p>
                                        <div className="grid grid-cols-3 gap-1.5 text-center text-[11px] pt-2 border-t border-rose-200/80">
                                            <div className="p-2 rounded-lg bg-white border border-rose-200">
                                                <div className="font-bold text-ink">S Pack ($2.99)</div>
                                                <div className="text-[10px] text-rose-700">200 Asks · 30d</div>
                                            </div>
                                            <div className="p-2 rounded-lg bg-white border border-rose-200">
                                                <div className="font-bold text-ink">L Pack ($3.99)</div>
                                                <div className="text-[10px] text-rose-700">400 Asks · 30d</div>
                                            </div>
                                            <div className="p-2 rounded-lg bg-white border border-rose-200">
                                                <div className="font-bold text-ink">XL Pack ($5.99)</div>
                                                <div className="text-[10px] text-rose-700">800 Asks · 30d</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right-Click Lockout vs Root Hotkey */}
                                    <div className="rounded-2xl bg-[#faf7f2] border border-black/10 p-3.5 text-xs space-y-2">
                                        <div className="flex items-center justify-between text-rose-900">
                                            <span className="font-semibold">Test Bro on Locked Canvas Exam:</span>
                                            <span className="font-mono text-[10px] bg-rose-100 px-2 py-0.5 rounded border border-rose-200">Right-Click Blocked</span>
                                        </div>
                                        <p className="text-[11px] text-ink-secondary leading-snug">
                                            Forces you to click Chrome&apos;s <strong>Side Panel</strong> capture button → triggers <code>window.blur</code> in SpeedGrader.
                                        </p>
                                        <div className="pt-2 border-t border-black/5 flex items-center justify-between text-emerald-900 font-bold">
                                            <span>ExamGhost Root Hotkey (⌘+Shift+S):</span>
                                            <span className="font-mono text-[10px] bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">0 Blur Events</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Input Trigger</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Silent Hotkey (⌘+Shift+S)</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">TestBro: Right-Click / Side Panel</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Credit Expiration</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Never Expire</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">TestBro: 1-Month Auto-Expiry</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Free Starter Quota</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 50 Free Solves</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">TestBro: 5 Free Asks / Month</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Pricing Model</span>
                                <span className="font-bold text-emerald-800">$19/mo · $99/yr · $199 Life</span>
                                <span className="text-ink-muted block text-[10px] mt-0.5">TestBro: $2.99–$5.99 expiring packs</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB TEST BRO REALITY SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive Test Bro Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Interactive Technical Comparison
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                3 Reasons Test Bro Fails on University Exams
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click each tab below to compare Test Bro&apos;s right-click context menu lockout, its 30-day credit expiration policy, and its LinkedIn-era architecture against ExamGhost.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="tb_tabs" id="tb_context" className="sr-only peer/tbcontext" defaultChecked />
                        <input type="radio" name="tb_tabs" id="tb_expiry" className="sr-only peer/tbexpiry" />
                        <input type="radio" name="tb_tabs" id="tb_linkedin" className="sr-only peer/tblinkedin" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f5f0e8] border border-black/5 mb-8">
                            <label
                                htmlFor="tb_context"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/tbcontext:bg-ink peer-checked/tbcontext:text-white peer-checked/tbcontext:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. Right-Click Lockout &amp; Side Panel</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Context menu block vs Root Hotkeys</div>
                            </label>
                            <label
                                htmlFor="tb_expiry"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/tbexpiry:bg-ink peer-checked/tbexpiry:text-white peer-checked/tbexpiry:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. 30-Day Expiring Credit Packs</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Unused asks vanish vs 50 Free Solves</div>
                            </label>
                            <label
                                htmlFor="tb_linkedin"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/tblinkedin:bg-ink peer-checked/tblinkedin:text-white peer-checked/tblinkedin:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. Built for Retired LinkedIn Tests</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Dec 2025 v1.1.3 vs 2026 Canvas LMS</div>
                            </label>
                        </div>

                        {/* TAB 1: Right-Click Lockout & Side Panel */}
                        <div className="hidden peer-checked/tbcontext:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Ban className="w-3.5 h-3.5" />
                                        Test Bro: Context Menu Blocked → Side Panel Blur
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Clicking Chrome&apos;s Side Panel logs immediate focus loss
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        On Canvas, Blackboard, and Moodle, Test Bro relies on highlighting text and opening Chrome&apos;s right-click context menu (<em>&ldquo;Select text and ask&rdquo;</em> or <em>&ldquo;Select area&rdquo;</em>).
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        When an instructor disables right-clicking (<code>oncontextmenu=&quot;return false;&quot;</code>), Test Bro&apos;s own guide tells you to open Chrome&apos;s <strong>Side Panel</strong> and click its capture button. The moment you click inside Chrome&apos;s Side Panel, your quiz tab loses focus and fires <code>window.blur</code>—logging <em>&ldquo;Stopped viewing the Canvas quiz&rdquo;</em> in SpeedGrader!
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Failure Mode: Right-click disabled → Side Panel click fires window.blur
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Keyboard className="w-3.5 h-3.5" />
                                        ExamGhost: Root Hotkeys + Focus Shield
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Works 100% when right-click and copy-paste are blocked
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never relies on Chrome&apos;s right-click context menu or focus-stealing Side Panel. You trigger solves via root-level keyboard shortcuts (<code>⌘+Shift+S</code> or <code>⌘+B</code>) directly inside the exam tab.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Bypasses Copy/Right-Click Locks:</strong> Unlocks disabled text selection or snips locked diagrams in memory via <code>⌘+Shift+S</code>.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Focus Shield Active:</strong> Suppresses 100% of <code>window.blur</code> and <code>visibilitychange</code> events.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    SpeedGrader Log: 0 Blur Events · No Side Panel Needed
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: 30-Day Expiring Credit Packs */}
                        <div className="hidden peer-checked/tbexpiry:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Coins className="w-3.5 h-3.5" />
                                        Test Bro: 5 Free Asks &amp; 30-Day Credit Expiration
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Buy credits for midterms—watch them vanish before finals
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Test Bro gives free users only <strong>5 Asks per month</strong>. When you buy an S ($2.99 / 200 Asks), L ($3.99 / 400 Asks), or XL ($5.99 / 800 Asks) package, you might assume those credits stay in your account for the semester.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Instead, Test Bro enforces a 30-day wipeout: <em>&ldquo;Paid package lifespan: 1 month. After 1 month, the package will expire automatically.&rdquo;</em> You are forced to re-buy credit packs every single month of the school year.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Expiration Policy: 100% of unused paid credits vanish after 30 days
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: 50 Non-Expiring Free Solves + Unlimited Passes
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        10x more free solves that never expire
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost gives every student <strong>50 Free Solves on install</strong>—10 times more than Test Bro&apos;s 5 monthly asks—and your free solves never expire after 30 days. When you upgrade, every plan includes unlimited solves:
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
                                    Quota Policy: 50 Non-Expiring Free Solves · Unlimited Paid Plans
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Built for Retired LinkedIn Tests */}
                        <div className="hidden peer-checked/tblinkedin:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Clock className="w-3.5 h-3.5" />
                                        Test Bro: Unmaintained Since Dec 2025 (v1.1.3)
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Built for LinkedIn Skill Assessments—not Canvas New Quizzes
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        If you read Test Bro&apos;s Chrome Web Store listing, its flagship one-click `ASK` button was specifically coded for <strong>LinkedIn Skill Assessments</strong>—a feature LinkedIn permanently retired.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Test Bro v1.1.3 hasn&apos;t received an update since December 5, 2025, and lacks native parsers or LTI 1.3 iframe support for 2026 Canvas Classic/New Quizzes, McGraw Hill Connect, or Cengage MindTap.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Last Chrome Store Update: December 5, 2025 (v1.1.3)
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Zap className="w-3.5 h-3.5" />
                                        ExamGhost: Purpose-Built for 2026 University LMS
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Native support for Canvas Classic, New Quizzes &amp; all major LMS
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost is actively engineered every week for 2026 university platforms—including Canvas (Classic &amp; New Quizzes LTI 1.3), Blackboard Ultra, Moodle, D2L Brightspace, McGraw Hill Connect, and Pearson MyLab.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>3 Display Modes:</strong> Invisible 1px Dot, Adjustable Opacity Stealth HUD (0–100%), or Full Step-by-Step Explain Mode.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Panic Switch (<code>⌘+Shift+U</code>):</strong> Wipes the HUD and memory in 0.05 seconds.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    LMS Coverage: 100% 2026 Canvas, Blackboard, Moodle &amp; D2L Ready
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER AUDIT LOG COMPARISON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="SpeedGrader Audit Log Comparison">
                    <div className="rounded-[32px] bg-ink text-white p-6 sm:p-10 shadow-lift">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-200 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Canvas Professor Audit Log View
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                                What Your Professor Sees in SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                When Test Bro&apos;s right-click menu is blocked, clicking its Chrome Side Panel capture button triggers immediate focus loss.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* TestBro Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>Test Bro (v1.1.3) Audit Log</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">09:15:00 — Started quiz attempt</div>
                                    <div className="text-slate-300">09:15:35 — Blocked contextmenu event on Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/30 text-rose-200">
                                        09:16:10 — Stopped viewing the Canvas quiz (0:34)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Student clicked Test Bro Side Panel capture button (window.blur)</span>
                                    </div>
                                    <div className="text-slate-300">09:16:44 — Resumed viewing quiz</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/30 text-rose-200">
                                        09:18:05 — Stopped viewing the Canvas quiz (0:48)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Repeat Side Panel departure flagged for manual honor review</span>
                                    </div>
                                    <div className="text-slate-300">09:18:53 — Resumed viewing quiz</div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield Active)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">09:15:00 — Started quiz attempt</div>
                                    <div className="text-slate-300">09:15:38 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-200">
                                        09:16:20 — Answered Question 2 (Normal pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ ⌘+Shift+S Hotkey · Zero blur events fired</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-200">
                                        09:17:05 — Answered Question 3 (Normal pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Focus Shield active · Continuous synthetic heartbeat</span>
                                    </div>
                                    <div className="text-slate-300">09:17:50 — Answered Question 4 (Attempt completed smoothly)</div>
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
                                Complete technical comparison between ExamGhost and Test Bro (v1.1.3).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Test Bro (testbro.app)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Bypasses Right-Click Block (oncontextmenu)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Immune (Root Hotkey ⌘+Shift+S)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Right-click blocked; Side Panel fallback steals focus</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Credit Expiration Policy</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Never Expire (50 Free + Unlimited Plans)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ 1-Month Automatic Expiry on S/L/XL Packs</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Window Blur Suppression)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (No tab-switch flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ None (Side Panel capture logs Canvas departures)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Primary Platform Optimization</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Canvas, Blackboard, Moodle, D2L, McGraw-Hill</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Built for deprecated LinkedIn Skill Assessments</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Snap-It Vision OCR (Locked Diagrams)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+S In-Tab Snip &amp; Solve (0.3s)</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Requires context menu or Side Panel area capture</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Panic Switch Hotkey</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+U Instantly Wipes RAM</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ No panic switch</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves (No credit card)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Only 5 Free Asks per month</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing Model</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo, $99/yr ($8.25/mo), or $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">$2.99 (200), $3.99 (400), $5.99 (800) — expire in 30 days</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Chrome Web Store Footprint</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Actively Maintained 2026 Stealth Build</td>
                                        <td className="py-3.5 px-4 text-ink-muted">v1.1.3 (462KiB · 9,000 users · 4.0★ / 31 ratings · Dec 2025)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (Test Bro)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension Listing &amp; ID:</span>
                                    Test Bro - Smart Web Test Assistant v1.1.3 (<code>dcnmkocojfkeagnfnhbeojbkeicdekmk</code> · 462KiB)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Developer &amp; Domain:</span>
                                    <code>testbro.app</code> · Published by <code>pidevex.extensions@gmail.com</code> (Last updated Dec 5, 2025)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Primary Trigger Vectors:</span>
                                    Context menu (<code>Select text and ask</code> / <code>Select area</code>) + Chrome Side Panel capture fallback
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Credit Package Lifespan:</span>
                                    Free (5 Asks/mo), S ($2.99 / 200), L ($3.99 / 400), XL ($5.99 / 800) — Auto-expires after 1 month
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#ffd5cc]/40 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I bought Test Bro&apos;s L Package ($3.99 for 400 Ask Credits) before my anatomy midterms. When I opened the Canvas test, the professor had disabled right-clicking, so I had to use Test Bro&apos;s Chrome Side Panel capture button—which immediately logged tab departures in SpeedGrader! Then, when I opened the extension a month later for finals, all 340 of my remaining Ask Credits had automatically expired. Switching to ExamGhost gave me 50 free solves that never expire, root hotkeys that work when right-click is blocked, and the $99/year pass keeps my SpeedGrader log 100% clean.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-rose-950 text-white font-bold flex items-center justify-center text-sm">
                                EL
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Elena L.</div>
                                <div className="text-xs text-ink-muted">Nursing Major · Ohio State University</div>
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
                            Frequently Asked Questions: TestBro vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why does TestBro fail or trigger blur logs during locked Canvas and Blackboard exams?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Test Bro (testbro.app, v1.1.3) primarily relies on the browser&apos;s right-click context menu (&lsquo;Select text and ask&rsquo; or &lsquo;Select area&rsquo;) and was originally optimized for deprecated LinkedIn Skill Assessments rather than Canvas LMS. When university exams disable right-clicking via <code>oncontextmenu=&apos;return false;&apos;</code>, Test Bro instructs users to click the capture button inside Chrome&apos;s Side Panel—which immediately removes focus from the quiz tab and fires a <code>window.blur</code> event in Canvas SpeedGrader. ExamGhost operates via root-level keyboard shortcuts (⌘+Shift+S, ⌘+B) and Closed Shadow DOM overlays with Focus Shield.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Do TestBro Ask Credit packages expire?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Yes. Test Bro&apos;s paid packages—S package ($2.99 for 200 Ask Credits), L package ($3.99 for 400 Ask Credits), and XL package ($5.99 for 800 Ask Credits)—carry a strict 1-month lifespan (&lsquo;After 1 month, the package will expire automatically&rsquo;). Any unused credits vanish after 30 days. ExamGhost gives you 50 Free Solves on install that never expire, plus unlimited plans ($19/mo, $99/yr, or $199 Lifetime).
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does TestBro trigger Canvas SpeedGrader blur flags?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Yes. Because Test Bro v1.1.3 has not been updated since December 5, 2025 and does not hook <code>window.blur</code> or <code>document.visibilitychange</code> events, opening its popup window or Chrome Side Panel causes Canvas to register a &lsquo;Stopped viewing the Canvas quiz&rsquo; log entry. ExamGhost features Focus Shield, intercepting 100% of window blur events.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Can ExamGhost solve questions locked inside images or diagrams?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Yes. ExamGhost includes Snap-It Multimodal OCR (⌘+Shift+S), allowing you to snip any diagram, chart, or locked question directly inside the tab without opening Chrome&apos;s context menu or Side Panel, returning answers in 0.3 seconds.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS (No Duplicate #111111 Footer Box) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#ffd5cc] via-[#ffe8e2] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-rose-950 uppercase tracking-wider mb-2">
                                    Root Hotkey Capture · Credits Never Expire
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Never get locked out by right-click blocks. Start 50 Free Solves.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                                    No 30-day expiring Ask Credit packs. No Chrome Side Panel focus leaks. Start with 50 Free Solves, then pick $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
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
                                <Link prefetch={false} href="/fastsolve-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    FastSolve vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/getquizsolve-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    GetQuizSolve vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/usequietly-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    UseQuietly vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-3 rounded-xl bg-ink text-white font-bold transition-colors text-center">
                                    All 57 Extensions Audited →
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
