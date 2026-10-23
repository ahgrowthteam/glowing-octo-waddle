import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    EyeOff,
    AlertTriangle,
    CheckCircle2,
    ChevronDown,
    ArrowRight,
    FileWarning,
    Star,
    MousePointerClick,
    CreditCard,
    Code2
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "RightClick AI vs ExamGhost (2026) — 2.6★ Store Audit",
    },
    description: "Compare RightClick AI (userightclick.app, 2.6★ Store) with ExamGhost. Inspect RightClick's $0.99 trial trap, blocked right-click menus, and 10x VisionScan cap.",
    alternates: {
        canonical: "https://examghost.com/rightclickai-vs-examghost",
    },
    openGraph: {
        title: "RightClick AI vs ExamGhost (2026) — 2.6★ Store & $0.99 Trial Audit",
        description: "Compare RightClick AI (userightclick.app, 2.6★ Chrome Store) with ExamGhost. Inspect RightClick's $0.99 trial trap, blocked right-click menus, and 10x VisionScan cap.",
        url: "https://examghost.com/rightclickai-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "RightClick AI vs ExamGhost (2026) — 2.6★ Store & $0.99 Trial Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RightClick AI vs ExamGhost (2026) — 2.6★ Store & $0.99 Trial Audit",
        description: "Compare RightClick AI (userightclick.app, 2.6★ Chrome Store) with ExamGhost. Inspect RightClick's $0.99 trial trap, blocked right-click menus, and 10x VisionScan cap.",
        images: ["/og-image.jpg"],
    },
};

export default function RightClickAIComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-20",
                "dateModified": "2026-03-27",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/rightclickai-vs-examghost#webpage",
                "url": "https://examghost.com/rightclickai-vs-examghost",
                "name": "RightClick AI vs ExamGhost (2026 Review) | 2.6★ Context-Menu Extension vs Closed Shadow DOM",
                "description": "Technical evaluation comparing RightClick v6.1 (userightclick.app, Chrome ID jdfkagmmfcpkkapheeidelffnligiekb, 2.6★) and ExamGhost across context-menu blocking, VisionScan daily caps, and trial billing.",
                "breadcrumb": { "@id": "https://examghost.com/rightclickai-vs-examghost#breadcrumb" },
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
                        "name": "RightClick AI",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.99",
                            "highPrice": "9.99",
                            "priceCurrency": "USD",
                            "offerCount": "2"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/rightclickai-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "RightClick AI vs ExamGhost", "item": "https://examghost.com/rightclickai-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/rightclickai-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why does RightClick AI have a 2.6★ rating on the Chrome Web Store?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "RightClick (Chrome ID jdfkagmmfcpkkapheeidelffnligiekb, v6.1, published by Abundant Agency Ltd) holds a 2.6★ out of 5 rating across 17 reviews on the Chrome Web Store. Students cite recurring subscription charges following its '$0.99 7-Day Trial', right-click context menus failing on locked LMS pages, and strict daily limits on VisionScan image queries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why did RightClick AI leave 'Snooze sleep app' and 'Lorem ipsum' text on its live website?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "An audit of userightclick.app reveals unedited web template text in its features grid, stating 'Your Perfect Sleep, One Feature at a Time — Snooze is packed with powerful features designed to transform your sleep experience,' followed by 'Secure data: Lorem ipsum dolor sit amet, consectetur adipiscing elit.' This reflects a white-label marketing template rather than dedicated security engineering."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can Canvas or Blackboard block RightClick AI's right-click and text-highlight workflow?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. RightClick AI instructs students to 'highlight a question, right click and get instant answers.' Modern Canvas, Blackboard, and publisher quiz portals routinely disable text selection (user-select: none) and intercept contextmenu and double-click events. ExamGhost extracts questions automatically inside a Closed Shadow DOM without requiring text highlighting or right-click menus."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does RightClick AI's VisionScan limit compare to ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "RightClick AI's website contradicts itself—advertising '50x VisionScans / day included' in the headline while stating 'every user now gets 10x visual scans per day' in the body text immediately below—and charges a $0.99 7-day trial that auto-renews monthly. ExamGhost gives you 50 Free Solves upfront with zero credit card required and full Snap-It Vision OCR included."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-rose-200/60 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">RightClick AI vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: 3 Verbatim RightClick AI Receipts */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#ffd5cc] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-rose-950 text-[#ffd5cc] text-[11px] font-bold uppercase tracking-wider">
                                    2.6★ Store &amp; Live Website Audit
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    userightclick.app · v6.1 (4.77MiB)
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-rose-900">
                                5,000 Users · 2.6★ Chrome Store (17 Ratings)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-rose-950/10 border border-rose-950/20 text-xs font-bold text-rose-950 mb-4">
                                    2.6★ Chrome Store · $0.99 Trial Trap · &ldquo;Lorem Ipsum&rdquo; Security Claims
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Would you trust your GPA to a 2.6★ extension whose &ldquo;Secure Data&rdquo; policy is literally Lorem Ipsum?
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    Before entering your card for <strong>RightClick AI&apos;s $0.99 7-day trial</strong> (<code>userightclick.app</code>, published by UK marketing firm <em>Abundant Agency Ltd</em>), look at the receipts: it holds a <strong>2.6★ Chrome Web Store rating</strong>, its live website literally left unedited <strong>&ldquo;Snooze sleep app&rdquo; and &ldquo;Lorem ipsum&rdquo; placeholder text</strong> under its <em>Secure data</em> section, and its right-click workflow is easily blocked by Canvas and Blackboard quizzes.
                                </p>
                                <p className="text-sm sm:text-base text-rose-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost is a real, precision-engineered Closed Shadow DOM stealth suite with 100% Focus Shield blur suppression—starting with <strong>50 Free Solves ($0, no credit card required)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
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

                            {/* Right Column: 3 Verbatim RightClick Receipts */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-3.5">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                                            <FileWarning className="w-4 h-4 text-rose-600" />
                                            3 Verbatim userightclick.app Receipts
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">Live Site Audit</span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-rose-800 mb-0.5">
                                            1. Verbatim &ldquo;Secure Data&rdquo; Section on userightclick.app:
                                        </div>
                                        <p className="text-rose-950 font-semibold italic">
                                            &ldquo;Your Perfect Sleep, One Feature at a Time: Snooze is packed with powerful features... Secure data: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa massa.&rdquo;
                                        </p>
                                        <span className="text-[10px] text-rose-800 block mt-0.5">
                                            → Unedited sleep-app template text left on live homepage
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-amber-900 mb-0.5">
                                            2. Contradictory VisionScan Daily Caps:
                                        </div>
                                        <p className="text-amber-950 font-semibold italic">
                                            &ldquo;50x VisionScans / day included... Best part, every user now gets 10x visual scans per day, at no extra cost!&rdquo;
                                        </p>
                                        <span className="text-[10px] text-amber-800 block mt-0.5">
                                            → Promises 50/day in headline, drops to 10/day in body text
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-300 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-slate-800 mb-0.5">
                                            3. 2.6★ Chrome Store Rating &amp; $0.99 7-Day Trial:
                                        </div>
                                        <p className="text-slate-900 font-semibold italic">
                                            &ldquo;👉 Use Code TRIAL for a $0.99 7-Day Trial of RightClick · 2.6 out of 5 (17 ratings) on Chrome Web Store.&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Chrome Store Rating</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 4.9★ Verified Stealth</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">RightClick: 2.6★ (17 ratings)</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Trigger Mechanism</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Zero-Click Shadow DOM</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">RightClick: Text highlight + right-click</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Extension Bundle Size</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Lightweight Edge Core</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">RightClick v6.1: Bloated 4.77MiB</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Trial &amp; Pricing</span>
                                <span className="font-bold text-emerald-800">50 Free Solves ($0 No Card)</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">RightClick: $0.99 7-day auto-bill trial</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB RIGHTCLICK AUDIT SWITCHER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive RightClick Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Forensic Extension Teardown
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                Why RightClick Earned a 2.6★ Chrome Web Store Rating
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click each tab below to compare RightClick&apos;s blocked right-click context menu workflow, its unedited template website, and its $0.99 7-day trial billing against ExamGhost.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="rc_tabs" id="rc_menu" className="sr-only peer/rcmenu" defaultChecked />
                        <input type="radio" name="rc_tabs" id="rc_template" className="sr-only peer/rctemplate" />
                        <input type="radio" name="rc_tabs" id="rc_trial" className="sr-only peer/rctrial" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#fff2ef] border border-rose-950/10 mb-8">
                            <label
                                htmlFor="rc_menu"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/rcmenu:bg-ink peer-checked/rcmenu:text-white peer-checked/rcmenu:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. Blocked Right-Click &amp; StealthTap</div>
                                <div className="text-[11px] opacity-75 mt-0.5">LMS blocks selection &amp; contextmenu</div>
                            </label>
                            <label
                                htmlFor="rc_template"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/rctemplate:bg-ink peer-checked/rctemplate:text-white peer-checked/rctemplate:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. &ldquo;Snooze App&rdquo; &amp; Lorem Ipsum</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Unedited template + 4.77MiB bundle</div>
                            </label>
                            <label
                                htmlFor="rc_trial"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/rctrial:bg-ink peer-checked/rctrial:text-white peer-checked/rctrial:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. $0.99 Trial Trap &amp; 10x Scan Cap</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Card required upfront vs 50 Free Solves</div>
                            </label>
                        </div>

                        {/* TAB 1: Blocked Right-Click & StealthTap */}
                        <div className="hidden peer-checked/rcmenu:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <MousePointerClick className="w-3.5 h-3.5" />
                                        RightClick AI: Relies on Highlighting &amp; Context Menus
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        What happens when your exam disables text selection and right-click?
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        RightClick AI&apos;s primary workflow requires you to <em>&ldquo;highlight a question, right click and get instant answers&rdquo;</em> or use its <em>StealthTap Beta</em> (double-clicking question text).
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        On timed Canvas, Blackboard, and publisher quizzes, professors routinely enable <code>user-select: none</code> CSS and attach <code>contextmenu</code>, <code>selectstart</code>, and <code>copy</code> event listeners. Trying to drag-select text and right-click either fails outright or triggers an immediate DOM event log.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Vulnerability: Blocked by user-select: none &amp; contextmenu listeners
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: Zero-Highlight DOM Extraction + Hotkey Stealth
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Never highlight text or open a browser right-click menu
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost reads Canvas Classic, Canvas New Quizzes (LTI Shadow DOM), Blackboard, and Moodle questions silently in the background without requiring you to highlight text or trigger a right-click menu.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Silent Hotkey Trigger (<code>⌘+B</code> / <code>⌘+Shift+S</code>):</strong> Works even when right-click and text selection are completely disabled by the exam page.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>4-Layer Event Shield:</strong> Suppresses <code>blur</code>, <code>visibilitychange</code>, and clipboard telemetry automatically.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Stealth: Zero Text Highlighting · Zero Context-Menu Triggers
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: Snooze App & Lorem Ipsum */}
                        <div className="hidden peer-checked/rctemplate:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Code2 className="w-3.5 h-3.5" />
                                        RightClick AI: White-Label Marketing Agency Build
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Published by Abundant Agency Ltd with unedited template text
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        RightClick is published by a UK marketing agency (<code>Abundant Agency Ltd</code>, <code>help@abundant.agency</code>). On their live homepage (<code>userightclick.app</code>), the features section still reads: <strong>&ldquo;Your Perfect Sleep, One Feature at a Time — Snooze is packed with powerful features designed to transform your sleep experience.&rdquo;</strong>
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Even worse, all six feature cards underneath—including <strong>Secure data</strong>, <strong>24/7 support</strong>, and <strong>Supported by macbooks</strong>—contain only unedited <em>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa massa.&rdquo;</em>
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Engineering Quality: 4.77MiB bundle · 2.6★ rating · Lorem ipsum docs
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: Dedicated LMS Security &amp; Stealth Engineering
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Audited Closed Shadow DOM v1 &amp; zero-retention RAM pipeline
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost isn&apos;t a re-skinned Webflow template run by an ad agency. Every line of our extension is engineered specifically around Instructure Canvas SpeedGrader, Blackboard Ultra, and LTI Shadow DOM architecture—backed by an active student Discord community and verifiable live demos.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Engineering Quality: Purpose-Built Closed Shadow DOM v1 Engine
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: $0.99 Trial Trap & 10x Scan Cap */}
                        <div className="hidden peer-checked/rctrial:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <CreditCard className="w-3.5 h-3.5" />
                                        RightClick AI: $0.99 7-Day Trial + 10x Daily VisionScan Cap
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Demands your credit card upfront and caps diagram scans at 10/day
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        RightClick pushes a top banner reading: <strong>&ldquo;👉 Use Code TRIAL for a $0.99 7-Day Trial of RightClick&rdquo;</strong>—requiring your credit card before you can properly test the extension, then auto-renewing into a paid subscription.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        And while their headline claims <em>&ldquo;50x VisionScans / day included,&rdquo;</em> the text directly below it admits: <em>&ldquo;every user now gets 10x visual scans per day, at no extra cost!&rdquo;</em>—meaning a single 25-question physics or economics quiz with graphs exhausts your daily visual quota halfway through the exam.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Billing: $0.99 7-day card trial · 10x VisionScans/day cap
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Zap className="w-3.5 h-3.5" />
                                        ExamGhost: 50 Free Solves ($0 No Card) + Uncapped Vision OCR
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Never enter a credit card just to test an extension
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost gives every student <strong>50 Free Solves</strong> with zero credit card required—and all 50 solves include full <code>⌘+Shift+S</code> Snap-It Vision OCR for diagrams, graphs, and chemical structures.
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
                                    Billing: $0 No-Card Starter · Transparent Plans · 14-Day Refund
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
                                RightClick v6.1 vs ExamGhost in Canvas SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                What happens when you highlight text, open right-click menus, or drag-capture diagrams without Focus Shield event interception.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* RightClick Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>RightClick v6.1 (2.6★ Store Build)</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">11:10:05 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        11:10:28 — Blocked contextmenu &amp; selectionchange event
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Student highlighted Question 1 and clicked Right-Click menu</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        11:11:04 — Stopped viewing the Canvas quiz (0:18)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Unshielded window.blur during VisionScan drag-and-drop capture</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-amber-950/50 border border-amber-500/30 text-amber-200">
                                        11:18:40 — VisionScan quota exhausted (10/10 daily scans used)
                                        <span className="block text-[10px] text-amber-300 mt-0.5">⚠️ Locked out of diagram scanning halfway through exam</span>
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
                                    <div className="text-slate-300">11:10:05 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        11:10:42 — Answered Question 1 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Zero text highlighting or right-click menu required</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        11:11:29 — Answered Question 2 (Diagram solved via ⌘+Shift+S)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Closed Shadow DOM · 0 blur flags · Uncapped Pro Vision OCR</span>
                                    </div>
                                    <div className="text-slate-300">11:12:14 — Answered Question 3</div>
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
                                Complete technical comparison between ExamGhost and RightClick v6.1 (userightclick.app).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">RightClick AI (userightclick.app)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Chrome Web Store Rating</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 4.9★ Verified Stealth Architecture</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ 2.6★ (17 ratings · 5,000 users)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Works When Right-Click / Highlight Is Disabled</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Zero-Highlight DOM &amp; Hotkey Engine</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Relies on text highlight + right-click menu</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Window Blur Suppression)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (No SpeedGrader flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Unverified (Lorem ipsum security section)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Daily Visual / Diagram Scan Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Uncapped Pro Snap-It Vision OCR</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Capped at 10x (or 50x) VisionScans/day</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Course Materials Context (RAG)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Local-First Lecture &amp; Syllabus Vault</td>
                                        <td className="py-3.5 px-4 text-ink-muted">&ldquo;Orb&rdquo; generic flashcard/summary generator</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Trial Without Credit Card</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves ($0, No Card Needed)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ $0.99 7-Day Trial (Requires card upfront)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing &amp; Lifetime Option</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-ink-muted">$0.99 7-day trial → recurring monthly billing</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (RightClick AI)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID &amp; Size:</span>
                                    RightClick v6.1 (<code>jdfkagmmfcpkkapheeidelffnligiekb</code> · 4.77MiB · Updated Aug 4, 2026)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Developer &amp; Store Rating:</span>
                                    Abundant Agency Ltd (Gravesend, UK · <code>help@abundant.agency</code>) · 2.6★ (17 ratings)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Live Homepage Template Leak:</span>
                                    Contains unedited &ldquo;Snooze sleep experience&rdquo; heading &amp; &ldquo;Lorem ipsum&rdquo; under Secure Data
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">VisionScan Quota Contradiction:</span>
                                    Headline states &ldquo;50x VisionScans / day&rdquo; while body states &ldquo;10x visual scans per day&rdquo;
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#ffd5cc]/45 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I signed up for RightClick&apos;s $0.99 trial before checking its 2.6-star Chrome Web Store reviews. During my Canvas economics quiz, right-clicking was disabled by the test page, and I hit the 10-per-day VisionScan limit on graph #11. Then I scrolled down their website and saw their &lsquo;Secure data&rsquo; box was literally Lorem Ipsum text from a sleep app. Switched to ExamGhost and never looked back.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-rose-900 text-white font-bold flex items-center justify-center text-sm">
                                CT
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Callum T.</div>
                                <div className="text-xs text-ink-muted">Economics &amp; Finance · Penn State University</div>
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
                            Frequently Asked Questions: RightClick AI vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why does RightClick AI have a 2.6★ rating on the Chrome Web Store?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                RightClick (Chrome ID <code>jdfkagmmfcpkkapheeidelffnligiekb</code>, v6.1, published by Abundant Agency Ltd) holds a <strong>2.6★ out of 5 rating across 17 reviews</strong> on the Chrome Web Store. Students cite recurring subscription charges following its &ldquo;$0.99 7-Day Trial&rdquo;, right-click context menus failing on locked LMS pages, and strict daily limits on VisionScan image queries.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why did RightClick AI leave &ldquo;Snooze sleep app&rdquo; and &ldquo;Lorem ipsum&rdquo; text on its live website?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                An audit of <code>userightclick.app</code> reveals unedited web template text in its features grid, stating <em>&ldquo;Your Perfect Sleep, One Feature at a Time — Snooze is packed with powerful features designed to transform your sleep experience,&rdquo;</em> followed by <em>&ldquo;Secure data: Lorem ipsum dolor sit amet, consectetur adipiscing elit.&rdquo;</em> This reflects a white-label marketing template rather than dedicated security engineering.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Can Canvas or Blackboard block RightClick AI&apos;s right-click and text-highlight workflow?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Yes. RightClick AI instructs students to <em>&ldquo;highlight a question, right click and get instant answers.&rdquo;</em> Modern Canvas, Blackboard, and publisher quiz portals routinely disable text selection (<code>user-select: none</code>) and intercept <code>contextmenu</code> and double-click events. ExamGhost extracts questions automatically inside a Closed Shadow DOM without requiring text highlighting or right-click menus.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does RightClick AI&apos;s VisionScan limit compare to ExamGhost?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                RightClick AI&apos;s website contradicts itself—advertising <em>&ldquo;50x VisionScans / day included&rdquo;</em> in the headline while stating <em>&ldquo;every user now gets 10x visual scans per day&rdquo;</em> in the body text immediately below—and charges a $0.99 7-day trial that auto-renews monthly. ExamGhost gives you <strong>50 Free Solves</strong> upfront with zero credit card required and full Snap-It Vision OCR included.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#ffd5cc] via-[#ffe8e3] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-rose-950 uppercase tracking-wider mb-2">
                                    Skip the $0.99 Trial Trap · Zero Right-Click Needed
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Real Shadow DOM stealth—not a 2.6★ Lorem Ipsum template.
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
                                <Link prefetch={false} href="/homework-helper-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Homework Helper vs ExamGhost</span>
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
