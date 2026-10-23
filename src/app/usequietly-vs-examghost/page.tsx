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
    CircleDot,
    Sidebar,
    Scan,
    Sparkles
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "UseQuietly vs ExamGhost (2026) — .ai-dot DOM vs Shadow DOM",
    },
    description: "Compare UseQuietly (Quietly AI) with ExamGhost. Replace 8-question caps and detectable .ai-dot DOM injections with 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/usequietly-vs-examghost",
    },
    openGraph: {
        title: "UseQuietly vs ExamGhost (2026) — .ai-dot DOM vs Shadow DOM",
        description: "Compare UseQuietly (Quietly AI) with ExamGhost. Replace 8-question caps and detectable .ai-dot DOM injections with 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/usequietly-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "UseQuietly vs ExamGhost (2026) — .ai-dot DOM vs Shadow DOM",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UseQuietly vs ExamGhost (2026) — .ai-dot DOM vs Shadow DOM",
        description: "Compare UseQuietly (Quietly AI) with ExamGhost. Replace 8-question caps and detectable .ai-dot DOM injections with 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function UseQuietlyComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-18",
                "dateModified": "2026-03-24",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/usequietly-vs-examghost#webpage",
                "url": "https://examghost.com/usequietly-vs-examghost",
                "name": "UseQuietly (Quietly AI) vs ExamGhost (2026 Review) | The .ai-dot DOM Exposure",
                "description": "Technical evaluation comparing Quietly AI (usequietly.com, Chrome ID opmlbifgjdfgenkcejhdboookegdijcg) and ExamGhost across DOM injection stealth, window blur handling, and subscription costs.",
                "breadcrumb": { "@id": "https://examghost.com/usequietly-vs-examghost#breadcrumb" },
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
                        "name": "Quietly AI - Study Assistant",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Browser Extension",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "14.99",
                            "priceCurrency": "USD",
                            "offerCount": "3"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/usequietly-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "UseQuietly vs ExamGhost", "item": "https://examghost.com/usequietly-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/usequietly-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why is UseQuietly's .ai-dot indicator system dangerous on Canvas and Brightspace?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Quietly AI (usequietly.com, v2.8.8) injects physical indicator dots (<span class='ai-dot'>), SVG option outlines (<svg class='option-trace'>), and docked step-by-step tooltips (.helper-tooltip.docked) directly into the exam page DOM. Even when toggled with Shift+Z, those injected DOM nodes remain attached to the live HTML tree where proctoring scripts and DOM snapshots can detect them."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost display answers without modifying the page?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost never adds .ai-dot spans, Ask Quietly buttons, or CSS classes to the exam page DOM. Solutions appear exclusively inside an isolated Closed Shadow DOM HUD with a variable 0-100% opacity slider (Ghost Mode), leaving the host page 100% untouched."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Quietly AI protect against Canvas tab-switch logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Quietly AI does not implement window blur or visibilitychange event suppression. When students interact with its docked .quietly-ask-overlay-inner sidebar or open the /chat/ web app, Canvas SpeedGrader logs 'Stopped viewing the Canvas quiz' timestamps."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does pricing compare between UseQuietly (Quietly AI) and ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Quietly AI gives Starter users only 8 lifetime questions that never reset monthly, then charges $7.99/month for Premium (standard AI) or $14.99/month ($179.88/year) for Pro just to unlock its strongest AI model for tough math and multi-step questions. ExamGhost gives you 50 Free Solves on install with flagship multi-model accuracy on every tier, followed by $19/mo, $99/yr ($8.25/mo), or $199 Lifetime."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does UseQuietly's 8-question lifetime free cap compare to ExamGhost's 50 Free Solves?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Quietly AI (usequietly.com) gives Starter accounts only 8 free questions total across the entire lifetime of the account (they never reset monthly) and restricts Starter users to its weaker baseline AI model. ExamGhost gives every student 50 Free Solves with full access to our flagship STEM and Snap-It Vision OCR engine with no credit card required."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-peri/40 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">UseQuietly vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: The Shift+Z DOM Illusion + $14.99/mo "Strongest Math AI" Paywall */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#c4d0f8] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-indigo-950 text-[#c4d0f8] text-[11px] font-bold uppercase tracking-wider">
                                    DOM Footprint &amp; AI Tier Audit
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    usequietly.com (Quietly AI) vs ExamGhost
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-ink">
                                1,000 Users · 4.6★ Chrome Store (11 Ratings)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column: High-converting student-first copy */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-indigo-950/10 border border-indigo-950/20 text-xs font-bold text-indigo-950 mb-4">
                                    Only 8 Free Lifetime Questions · $14.99/mo Pro Math Paywall · Injected DOM Dots
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Why pay $7.99/mo for a weaker AI—or $14.99/mo for dots injected into your DOM?
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    Quietly AI (<code>usequietly.com</code>) gives Starter users only <strong>8 lifetime free questions</strong> (which never reset). If you upgrade to <strong>Premium ($7.99/mo)</strong>, it still withholds its best accuracy—forcing you to pay <strong>$14.99/mo ($179.88/yr) for Pro</strong> just to unlock its <em>&ldquo;strongest AI for tough math and multi-step questions.&rdquo;</em> Even worse, its answer dots and docked tooltips are injected directly into your Canvas HTML tree.
                                </p>
                                <p className="text-sm sm:text-base text-indigo-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost gives you <strong>50 Free Solves on install</strong> with our flagship multi-model STEM engine unlocked on every single tier, zero injected DOM elements, and full year-round access for <strong>$99/yr ($8.25/mo)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false} 
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#c4d0f8]" aria-hidden="true" />
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

                            {/* Right Column: Bespoke "Shift+Z DOM Illusion & Tier Gate" Visual Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-4">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider flex items-center gap-1.5">
                                            <Scan className="w-4 h-4 text-indigo-700" />
                                            The Shift+Z DOM Illusion
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">Canvas HTML Tree</span>
                                    </div>

                                    {/* Simulated DOM Inspector showing what stays behind after Shift+Z */}
                                    <div className="rounded-2xl bg-slate-900 text-slate-200 p-4 font-mono text-[11px] space-y-1.5 border border-rose-500/30">
                                        <div className="flex items-center justify-between text-rose-300 font-bold pb-1.5 mb-1.5 border-b border-white/10">
                                            <span>Quietly AI (Even with Shift+Z Pressed)</span>
                                            <span className="text-[10px] bg-rose-950 px-1.5 py-0.5 rounded border border-rose-500/40">IN HOST DOM</span>
                                        </div>
                                        <div className="text-slate-400">&lt;div class=&quot;answer_label&quot;&gt;</div>
                                        <div className="pl-3 text-rose-300">
                                            &lt;span class=&quot;ai-dot hidden-dot&quot;&gt;&lt;/span&gt;
                                        </div>
                                        <div className="pl-3 text-rose-300">
                                            &lt;svg class=&quot;option-trace&quot;&gt;...&lt;/svg&gt;
                                        </div>
                                        <div className="text-slate-400">&lt;/div&gt;</div>
                                        <div className="pt-1.5 mt-1.5 border-t border-white/10 text-[10px] text-amber-300">
                                            localStorage: &quot;quietly.auth.v1&quot; exposed to LMS scripts
                                        </div>
                                    </div>

                                    {/* AI Accuracy Gate Callout */}
                                    <div className="rounded-2xl bg-indigo-50 border border-indigo-200 p-3.5 text-xs">
                                        <div className="font-bold text-indigo-950 mb-1 flex items-center justify-between">
                                            <span>Quietly AI Accuracy Paywall:</span>
                                            <span className="font-mono text-[10px] bg-indigo-200/80 text-indigo-950 px-2 py-0.5 rounded">$179.88 / yr</span>
                                        </div>
                                        <p className="text-indigo-950/90 text-[11px] leading-relaxed">
                                            Starter gives only <strong>8 lifetime questions</strong>. Paying <strong>$7.99/mo (Premium)</strong> still uses standard AI—you must pay <strong>$14.99/mo (Pro)</strong> to unlock their strongest math AI.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">DOM Footprint</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 0 Elements Injected</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Quietly: .ai-dot &amp; .helper-tooltip</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Focus Shield</span>
                                <span className="font-bold text-emerald-800">100% Blur Suppressed</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Quietly: Sidebar &amp; /chat/ fire blur</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Free Starter Quota</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 50 Free Solves</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Quietly: 8 lifetime questions total</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Flagship Math AI Cost</span>
                                <span className="font-bold text-emerald-800">$8.25/mo ($99/yr) All Tiers</span>
                                <span className="text-ink-muted block text-[10px] mt-0.5">Quietly: $14.99/mo ($179.88/yr) Pro</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB QUIETLY AI REALITY SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive Quietly AI Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Interactive Technical Comparison
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                3 Reasons Students Switch from Quietly AI to ExamGhost
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click each tab below to inspect Quietly AI&apos;s injected `.ai-dot` markers, its $14.99/mo math accuracy paywall, and its sidebar focus leaks.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="quietly_tabs" id="q_dom" className="sr-only peer/qdom" defaultChecked />
                        <input type="radio" name="quietly_tabs" id="q_pricing" className="sr-only peer/qpricing" />
                        <input type="radio" name="quietly_tabs" id="q_blur" className="sr-only peer/qblur" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#eef1fc] border border-indigo-950/10 mb-8">
                            <label
                                htmlFor="q_dom"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/qdom:bg-ink peer-checked/qdom:text-white peer-checked/qdom:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. The Shift+Z DOM Illusion</div>
                                <div className="text-[11px] opacity-75 mt-0.5">.ai-dot spans &amp; localStorage tokens</div>
                            </label>
                            <label
                                htmlFor="q_pricing"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/qpricing:bg-ink peer-checked/qpricing:text-white peer-checked/qpricing:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. $14.99/mo Math Accuracy Gate</div>
                                <div className="text-[11px] opacity-75 mt-0.5">8 free Qs + nerfed $7.99 tier</div>
                            </label>
                            <label
                                htmlFor="q_blur"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/qblur:bg-ink peer-checked/qblur:text-white peer-checked/qblur:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. &ldquo;Ask Quietly&rdquo; Sidebar Blurs</div>
                                <div className="text-[11px] opacity-75 mt-0.5">SpeedGrader departure logs</div>
                            </label>
                        </div>

                        {/* TAB 1: Shift+Z DOM Illusion */}
                        <div className="hidden peer-checked/qdom:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <CircleDot className="w-3.5 h-3.5" />
                                        Quietly AI: Host DOM &amp; localStorage Contamination
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Hiding a dot with CSS doesn&apos;t remove it from the DOM
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Quietly AI injects physical elements—<code>&lt;span class=&quot;ai-dot&quot;&gt;</code>, <code>&lt;svg class=&quot;option-trace&quot;&gt;</code>, and <code>.helper-tooltip.docked</code>—directly inside your Canvas or Brightspace question HTML. Even when you press <code>Shift + Z</code>, those elements stay inside the live page DOM where any university integrity script can query them via <code>document.querySelector(&apos;.ai-dot&apos;)</code>.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Worse, Quietly writes its Firebase authentication token directly into the university domain&apos;s storage under <code>localStorage.getItem(&apos;quietly.auth.v1&apos;)</code>.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Exposed Selectors: .ai-dot, .option-trace, localStorage[&apos;quietly.auth.v1&apos;]
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: Closed Shadow DOM + 0.05s Panic Wipe
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Zero host DOM nodes. Zero university localStorage keys.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never injects classes like <code>.ai-dot</code> into Canvas and never touches the LMS page&apos;s <code>localStorage</code>. All credentials live inside Chrome&apos;s encrypted extension sandbox, and the HUD renders in a <strong>Closed Shadow DOM v1</strong> container.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>0%–100% Opacity Slider:</strong> Dial your HUD down to 5% opacity so even someone standing behind you sees only your exam.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>True Panic Kill-Switch (<code>⌘+Shift+U</code>):</strong> Completely destroys the Shadow root and wipes RAM in 0.05 seconds.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Host Page Footprint: 0 Injected Classes · 0 localStorage Keys
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: $14.99/mo Math Accuracy Gate */}
                        <div className="hidden peer-checked/qpricing:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <DollarSign className="w-3.5 h-3.5" />
                                        Quietly AI: 8 Free Qs &amp; Tiered AI Quality
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Why pay $7.99/mo if it still uses weaker math AI?
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Quietly AI splits its pricing into three tiers designed to upsell STEM students:
                                    </p>
                                    <div className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <div className="p-2.5 rounded-xl bg-white border border-rose-200">
                                            <strong className="text-rose-950">Starter ($0):</strong> Only <strong>8 lifetime questions total</strong> (never resets monthly).
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-white border border-rose-200">
                                            <strong className="text-rose-950">Premium ($7.99/mo after 3-day trial):</strong> Uses standard AI routing—struggles on multi-step calculus, physics, and statistics.
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-rose-100/80 border border-rose-300">
                                            <strong className="text-rose-950">Pro ($14.99/mo = $179.88/yr):</strong> Required just to <em>&ldquo;route your questions to the strongest AI automatically.&rdquo;</em>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Strongest AI Cost on Quietly: $14.99/mo ($179.88/year)
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        ExamGhost: Flagship Multi-Model AI on Every Plan
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        We never nerf your AI accuracy on lower plans.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Whether you are using your <strong>50 Free Solves</strong> or our <strong>$99/yr ($8.25/mo) Academic Year Pass</strong>, ExamGhost routes every question through our full flagship STEM &amp; multimodal vision engine.
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
                                    Free Starter Quota: 50 Free Solves (6.25x more than Quietly)
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: "Ask Quietly" Sidebar Blurs */}
                        <div className="hidden peer-checked/qblur:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Sidebar className="w-3.5 h-3.5" />
                                        Quietly AI: Unshielded Sidebar &amp; /chat/ Tab Blurs
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Highlighting text spawns a focus-stealing popup
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        When you highlight text on an exam with Quietly AI, it injects a floating <code>.quietly-ask-popup</code> button and opens a docked <code>.quietly-ask-overlay-inner</code> sidebar—or opens <code>usequietly.com/chat/</code> in a separate browser tab.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Because Quietly AI has no <code>window.blur</code> or <code>visibilitychange</code> interceptor, clicking that sidebar or opening `/chat/` immediately logs <em>&ldquo;Stopped viewing the Canvas quiz&rdquo;</em> in your professor&apos;s SpeedGrader audit log.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    SpeedGrader Risk: Logs focus loss on sidebar &amp; /chat/ clicks
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: Focus Shield Active
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Continuous active focus locked on your Canvas tab
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost&apos;s <strong>Focus Shield</strong> overrides native browser <code>window.onblur</code>, <code>focusout</code>, and <code>document.visibilityState</code> getters before Canvas&apos;s event listeners ever run.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Zero Departure Timestamps:</strong> Even when using <code>⌘+Shift+S</code> Snap-It Vision OCR on a diagram, Canvas registers 100% unbroken focus.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>No External `/chat/` Redirects:</strong> Everything solves in-place in 0.3 seconds.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    SpeedGrader Status: 0 Blur Events · 100% Continuous Focus
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
                                Quietly AI&apos;s docked `.helper-tooltip` and `.quietly-ask-overlay-inner` sidebars cause focus departures and DOM snapshot anomalies.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* UseQuietly Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>Quietly AI (v2.8.8) Audit Log</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">13:10:02 — Started quiz attempt</div>
                                    <div className="text-slate-300">13:10:45 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/30 text-rose-200">
                                        13:11:15 — Stopped viewing the Canvas quiz (0:22)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Triggered by .quietly-ask-overlay-inner / /chat/ tab focus</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/30 text-rose-200">
                                        13:12:04 — DOM snapshot records: span.ai-dot, .helper-tooltip.docked
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Shift+Z only toggles CSS visibility; nodes stay in HTML</span>
                                    </div>
                                    <div className="text-slate-300">13:13:00 — Resumed viewing quiz</div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield Active)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">13:10:02 — Started quiz attempt</div>
                                    <div className="text-slate-300">13:10:45 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-200">
                                        13:11:22 — Answered Question 2 (Normal pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Zero DOM mutation · Closed Shadow DOM HUD</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-200">
                                        13:12:08 — Answered Question 3 (Normal pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Focus Shield active · Synthetic heartbeat intact</span>
                                    </div>
                                    <div className="text-slate-300">13:12:55 — Answered Question 4 (Attempt completed smoothly)</div>
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
                                Complete technical benchmark comparing ExamGhost against Quietly AI (UseQuietly v2.8.8).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Quietly AI (usequietly.com)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">DOM Mutation / Injected Artifacts</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 0 Elements Injected (Closed Shadow DOM)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Injects .ai-dot, .option-trace &amp; .helper-tooltip</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Window Blur Suppression)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (No tab-switch flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ None (Sidebar &amp; /chat/ fire blur events)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">AI Model Quality Across Tiers</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Flagship Multi-Model Consensus on All Plans</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Basic AI on $7.99/mo; Strongest AI requires $14.99/mo Pro</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Adjustable Opacity Ghost HUD</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 0%–100% Opacity Slider + Invisible Mode</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Shift+Z hides dots visually, leaves DOM intact</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Snap-It Vision OCR (Locked Diagrams)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+S Snip &amp; Solve Any Diagram</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Auto-detect + highlight text sidebar</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Panic Switch Hotkey</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+U Instantly Wipes RAM &amp; Shadow Root</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Shift+Z only toggles dot CSS class</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves (No credit card required)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ 8 lifetime questions total (never resets)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing Model</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo, $99/yr ($8.25/mo), or $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">$7.99/mo Premium or $14.99/mo Pro ($179.88/yr)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Chrome Web Store Footprint</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Verified Zero-Trace Stealth Build</td>
                                        <td className="py-3.5 px-4 text-ink-muted">v2.8.8 (423KiB · 1,000 users · 4.6★ / 11 ratings)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (UseQuietly / Quietly AI)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension Listing &amp; ID:</span>
                                    Quietly AI - Study Assistant v2.8.8 (<code>opmlbifgjdfgenkcejhdboookegdijcg</code> · 423KiB)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Developer &amp; Domain:</span>
                                    <code>usequietly.com</code> · Operated by Snap Education (1,000 users · 4.6★ / 11 ratings)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Injected DOM &amp; Storage Artifacts:</span>
                                    <code>span.ai-dot</code>, <code>svg.option-trace</code>, <code>.helper-tooltip.docked</code>, <code>.quietly-ask-popup</code>, <code>localStorage[&apos;quietly.auth.v1&apos;]</code>
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Tier Structure:</span>
                                    Starter (8 lifetime Qs), Premium ($7.99/mo standard AI), Pro ($14.99/mo strongest AI)
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#c4d0f8]/40 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I tried Quietly AI for my business statistics quizzes on Canvas and burned through all 8 lifetime free questions on the first practice test. When I started the 3-day trial for the $7.99/mo Premium plan, it kept missing multi-step confidence interval questions because Quietly gates their &lsquo;strongest AI&rsquo; behind the $14.99/mo Pro tier. Even worse, it injected visible colored dots next to the options and docked a huge Step-by-Step Solution panel inside my Canvas tab. Switching to ExamGhost gave me 50 free solves right away, zero injected `.ai-dot` elements, and the $99/year pass ($8.25/mo) gives me top-tier math accuracy on every single question.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-950 text-white font-bold flex items-center justify-center text-sm">
                                TC
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Tyler C.</div>
                                <div className="text-xs text-ink-muted">Finance Major · Arizona State University</div>
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
                            Frequently Asked Questions: UseQuietly vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all"
                                open={index === 0}
                            >
                                <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS (No Duplicate #111111 Footer Box) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#c4d0f8] via-[#dde4fc] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-indigo-950 uppercase tracking-wider mb-2">
                                    0 Injected .ai-dot Spans · Flagship Math AI on All Tiers
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Ditch the 8-question limit. Start 50 Free Solves on ExamGhost.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                                    Why pay $14.99/mo ($179.88/yr) for Quietly Pro just to get accurate math answers? Get 50 Free Solves today, then pick $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#c4d0f8]" aria-hidden="true" />
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
                                <Link prefetch={false} href="/testbro-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    TestBro vs ExamGhost →
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
