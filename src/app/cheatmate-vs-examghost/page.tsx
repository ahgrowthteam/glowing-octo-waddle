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
    Sparkles,
    Lock,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    CreditCard,
    Layers,
    MousePointerClick,
    Terminal,
    Eye,
    KeyRound,
    Camera,
    Check,
    X
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "CheatMate vs ExamGhost (2026) — $9.99/Wk Study Buddy Audit",
    },
    description: "Independent 2026 audit of CheatMate ('Study Buddy' 2.8★) vs ExamGhost. Skip $9.99/week billing traps and 10s DOM lag with 0.3s stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/cheatmate-vs-examghost",
    },
    openGraph: {
        title: "CheatMate vs ExamGhost (2026) — $9.99/Wk Study Buddy Audit",
        description: "Independent 2026 audit of CheatMate ('Study Buddy' 2.8★) vs ExamGhost. Skip $9.99/week billing traps and 10s DOM lag with 0.3s stealth & 50 Free Solves.",
        url: "https://examghost.com/cheatmate-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CheatMate vs ExamGhost (2026) — $9.99/Wk Study Buddy Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CheatMate vs ExamGhost (2026) — $9.99/Wk Study Buddy Audit",
        description: "Independent 2026 audit of CheatMate ('Study Buddy' 2.8★) vs ExamGhost. Skip $9.99/week billing traps and 10s DOM lag with 0.3s stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function CheatMateComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-20",
                "dateModified": "2026-03-04",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/cheatmate-vs-examghost#webpage",
                "url": "https://examghost.com/cheatmate-vs-examghost",
                "name": "CheatMate vs ExamGhost (2026 Review) | The $9.99/Week & 2.8★ 'Study Buddy' Trap",
                "description": "Comprehensive 2026 comparison of CheatMate ('Study Buddy' Chrome extension ID pifapfmbofjgaenkhhipjhfacfmmhkcp) and ExamGhost across billing transparency, DOM stealth, and response speed.",
                "breadcrumb": { "@id": "https://examghost.com/cheatmate-vs-examghost#breadcrumb" },
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
                        "name": "CheatMate (Study Buddy)",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension",
                        "offers": { "@type": "Offer", "price": "39.96", "priceCurrency": "USD" }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/cheatmate-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "CheatMate vs ExamGhost", "item": "https://examghost.com/cheatmate-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/cheatmate-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why does CheatMate have a 2.8-star rating on the Chrome Web Store while claiming 4.8 stars on cheatmate.io?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "On the official Chrome Web Store, CheatMate is disguised under the title 'Study Buddy' (v4.5, 2,000 users) and holds a verified 2.8 out of 5 star rating across 14 student reviews. Meanwhile, its marketing site cheatmate.io embeds hardcoded schema claiming a 4.8 rating across 523 reviews, and its official store privacy policy link points to a misspelled broken domain (http://cheatemate.io/privacy)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does CheatMate actually cost per month and per year?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CheatMate advertises a $0.99 trial that automatically enrolls your card into a $9.99 per week recurring charge—equaling $39.96 every 4 weeks or $519.48 per year. ExamGhost gives you 50 Free Solves with zero credit card required, followed by transparent plans: $19/month, $99/year ($8.25/mo Academic Year Pass), or $199 one-time for the Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is CheatMate's 'Wait 10 seconds and double-click' workflow risky on Canvas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Study Buddy / CheatMate instructs users to wait 10 seconds after the quiz loads and double-click questions. Its Homework, Sneaky, and Invisible modes directly alter host page DOM text styles and attach listeners to Canvas HTML nodes, which proctoring and DOM checksum scripts can inspect. ExamGhost isolates all UI inside a closed Shadow DOM root and solves in 0.3 seconds with Focus Shield blur protection."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I cancel CheatMate if I am being billed $9.99 every week?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Because CheatMate bills weekly and its store privacy link is broken (cheatemate.io/privacy), you must either log into your billing portal via cheatmate.io, email contact@cheatmate.io, or contact your card issuer to block recurring weekly charges. ExamGhost never uses weekly billing or credit-card trial traps."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-peri selection:text-ink font-sans">
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
                        <span className="text-ink font-bold">CheatMate vs ExamGhost</span>
                    </nav>
                </div>

                {/* ============================================================
                    UNIQUE HERO: STOREFRONT DECEPTION VS VERIFIED REALITY
                ============================================================ */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#141624] text-white p-6 sm:p-10 md:p-14 border border-white/10 shadow-lift relative overflow-hidden">
                        {/* Subtle ambient glow */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            {/* Top Eyebrow Bar */}
                            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-white/10">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs font-bold">
                                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                                    <span>Student Consumer Alert · Weekly Billing &amp; Alias Audit</span>
                                </div>
                                <span className="text-xs font-mono text-white/70">
                                    Audited 2026 EDITION · Chrome Web Store v4.5
                                </span>
                            </div>

                            <div className="grid lg:grid-cols-12 gap-10 items-center">
                                {/* Left 7 Columns */}
                                <div className="lg:col-span-7">
                                    <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.07] mb-6">
                                        Don&apos;t let a $0.99 trial drain <span className="text-rose-400">$519/year</span> for a 2.8★ extension.
                                    </h1>

                                    <p className="aeo-summary text-base sm:text-lg text-white/80 leading-relaxed mb-5">
                                        On its website, <strong>CheatMate</strong> advertises a 4.8★ rating and a cheap trial. But when you click install, it sends you to a disguised Chrome extension called <strong>&ldquo;Study Buddy&rdquo;</strong> with a <strong>2.8★ rating</strong>, a 10-second loading delay, and a <strong>$9.99/week ($40+/month)</strong> auto-renewing charge.
                                    </p>

                                    <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                                        <strong>ExamGhost</strong> never touches your credit card to try it. You get <strong>50 Free Question Solves</strong> immediately, <strong>0.3-second</strong> double-click solving inside a closed Shadow DOM, and honest student passes starting at <strong>$8.25/mo ($99/yr)</strong>.
                                    </p>

                                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-7">
                                        <Link prefetch={false}
                                            href="/#pricing"
                                            className="px-7 py-4 rounded-full text-sm sm:text-base font-bold bg-[#cdeecb] hover:bg-[#b8e6b5] text-ink shadow-lift inline-flex items-center justify-center gap-2.5 transition-all group"
                                        >
                                            <FaChrome className="w-4 h-4 text-emerald-950" aria-hidden="true" />
                                            <span>Start 50 Free Solves (No Card Needed)</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                        <Link prefetch={false}
                                            href="/canvas-quiz-solver-free-demo"
                                            className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 inline-flex items-center justify-center gap-2 transition-all"
                                        >
                                            <MousePointerClick className="w-4 h-4 text-[#cdeecb]" />
                                            <span>Test Live 0.3s Sandbox</span>
                                        </Link>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-white/75">
                                        <span className="inline-flex items-center gap-1.5">
                                            <CheckCircle2 className="w-4 h-4 text-[#cdeecb]" />
                                            <span>Zero Weekly Billing Traps</span>
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <CheckCircle2 className="w-4 h-4 text-[#cdeecb]" />
                                            <span>0.3s Instant Solve (No 10s Wait)</span>
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <CheckCircle2 className="w-4 h-4 text-[#cdeecb]" />
                                            <span>Closed Shadow DOM + Focus Shield</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Right 5 Columns: Marketing Claim vs Store Reality Inspector */}
                                <div className="lg:col-span-5">
                                    <div className="rounded-[28px] bg-white text-ink p-6 border border-black/10 shadow-2xl space-y-4">
                                        <div className="flex items-center justify-between pb-3 border-b border-black/10">
                                            <span className="font-display font-extrabold text-sm text-ink">
                                                CheatMate: Claim vs Reality
                                            </span>
                                            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 text-[11px] font-bold">
                                                Verified Mismatch
                                            </span>
                                        </div>

                                        {/* Marketing Site Claim */}
                                        <div className="p-4 rounded-2xl bg-[#f7f5f0] border border-black/10">
                                            <div className="flex items-center justify-between text-xs font-bold text-ink-muted uppercase mb-1.5">
                                                <span>What CheatMate.io Claims</span>
                                                <span className="text-amber-700 font-mono">Marketing Site</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="font-display font-extrabold text-base text-ink">&ldquo;4.8 ★ Rating&rdquo;</div>
                                                    <div className="text-xs text-ink-secondary">Hardcoded in site JSON-LD (523 reviews)</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-display font-extrabold text-base text-ink">&ldquo;$0.99 Trial&rdquo;</div>
                                                    <div className="text-xs text-ink-secondary">Front-page hook</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actual Chrome Web Store Reality */}
                                        <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300">
                                            <div className="flex items-center justify-between text-xs font-bold text-rose-900 uppercase mb-1.5">
                                                <span>Actual Chrome Web Store Listing</span>
                                                <span className="bg-rose-200 text-rose-950 px-2 py-0.5 rounded font-mono text-[10px]">Alias: &ldquo;Study Buddy&rdquo;</span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3 pt-1">
                                                <div className="bg-white p-3 rounded-xl border border-rose-200">
                                                    <div className="font-display font-black text-xl text-rose-700">2.8 ★ / 5</div>
                                                    <div className="text-[11px] text-ink-secondary mt-0.5">14 real store ratings (2,000 users)</div>
                                                </div>
                                                <div className="bg-white p-3 rounded-xl border border-rose-200">
                                                    <div className="font-display font-black text-xl text-rose-700">$9.99 / wk</div>
                                                    <div className="text-[11px] text-ink-secondary mt-0.5">Auto-bills $519.48/year</div>
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-rose-900 mt-3 leading-relaxed">
                                                <strong>Bonus red flag:</strong> The privacy policy link on their Chrome Web Store page points to a misspelled dead domain (<code className="bg-white px-1 rounded">http://cheatemate.io/privacy</code>).
                                            </p>
                                        </div>

                                        {/* ExamGhost Contrast */}
                                        <div className="p-4 rounded-2xl bg-emerald-950 text-white flex items-center justify-between">
                                            <div>
                                                <div className="text-xs font-bold text-emerald-300 uppercase">ExamGhost Guarantee</div>
                                                <div className="text-xs text-white/90 mt-0.5">50 Free Solves · No Card Required</div>
                                            </div>
                                            <Link prefetch={false} href="/#pricing" className="px-3.5 py-2 rounded-xl bg-[#cdeecb] text-ink font-bold text-xs whitespace-nowrap">
                                                Try Free →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ============================================================
                    VISUAL COST CALCULATOR: THE $9.99/WEEK SUBSCRIPTION DRAIN
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <p className="eyebrow justify-center mb-3">
                            <CreditCard className="w-4 h-4 text-rose-700" />
                            <span>WEEKLY BILLING MATH · WHY STUDENTS GET BURNED</span>
                        </p>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            How CheatMate&apos;s &ldquo;$0.99 trial&rdquo; quietly costs you $160+ in a single semester.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                            Weekly billing is designed so you don&apos;t notice $9.99 charges hitting your debit card four times every month. Look at how fast it adds up across a 16-week college semester compared to ExamGhost.
                        </p>
                    </div>

                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="grid md:grid-cols-4 gap-4 mb-8">
                            <div className="p-5 rounded-2xl bg-[#faf8f4] border border-black/10">
                                <span className="text-xs font-mono font-bold uppercase text-ink-muted block mb-1">Day 1</span>
                                <div className="font-display text-2xl font-extrabold text-ink mb-1">$0.99 vs $0</div>
                                <div className="text-xs text-rose-800 font-semibold">CheatMate: Card locked in</div>
                                <div className="text-xs text-emerald-800 font-bold mt-0.5">ExamGhost: 50 Free Solves ($0)</div>
                            </div>

                            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200">
                                <span className="text-xs font-mono font-bold uppercase text-rose-800 block mb-1">Month 1 (4 Weeks)</span>
                                <div className="font-display text-2xl font-extrabold text-rose-800 mb-1">$40.95</div>
                                <div className="text-xs text-rose-900">CheatMate ($0.99 + 4×$9.99)</div>
                                <div className="text-xs text-emerald-800 font-bold mt-0.5">ExamGhost Monthly: $19.00</div>
                            </div>

                            <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-300">
                                <span className="text-xs font-mono font-bold uppercase text-rose-900 block mb-1">1 Semester (16 Weeks)</span>
                                <div className="font-display text-2xl font-extrabold text-rose-800 mb-1">$160.83</div>
                                <div className="text-xs text-rose-900">CheatMate weekly drain</div>
                                <div className="text-xs text-emerald-800 font-bold mt-0.5">ExamGhost Full Year: $99.00</div>
                            </div>

                            <div className="p-5 rounded-2xl bg-rose-950 text-white border border-rose-800">
                                <span className="text-xs font-mono font-bold uppercase text-rose-300 block mb-1">1 Year (52 Weeks)</span>
                                <div className="font-display text-2xl font-black text-rose-300 mb-1">$519.48 / yr</div>
                                <div className="text-xs text-white/80">CheatMate annual total</div>
                                <div className="text-xs text-emerald-300 font-bold mt-0.5">You save $420.48 with ExamGhost</div>
                            </div>
                        </div>

                        {/* Visual Savings Bar */}
                        <div className="rounded-2xl bg-[#f4f1ea] border border-black/10 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="space-y-1 text-center md:text-left">
                                <div className="text-sm sm:text-base font-extrabold text-ink">
                                    ExamGhost&apos;s $99 Academic Year Pass ($8.25/mo) costs less than 10 weeks of CheatMate.
                                </div>
                                <p className="text-xs sm:text-sm text-ink-secondary">
                                    Or grab the <strong>$199 Lifetime Degree Pass</strong> once and never pay another subscription through graduation.
                                </p>
                            </div>
                            <Link prefetch={false}
                                href="/#pricing"
                                className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shrink-0 inline-flex items-center gap-2"
                            >
                                <span>Compare All Student Passes</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    ARCHITECTURE TEARDOWN: "WAIT 10 SECONDS" DOM MUTATION VS SHADOW DOM
                ============================================================ */}
                <section id="dom-injection-flaw" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <p className="eyebrow justify-center mb-3">
                            <Layers className="w-4 h-4 text-indigo-700" />
                            <span>TECHNICAL STEALTH COMPARISON</span>
                        </p>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            Why CheatMate&apos;s &ldquo;Wait 10 Seconds&rdquo; modes get flagged on Canvas.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                            In its Chrome Web Store instructions, Study Buddy (CheatMate) tells students: <em>&ldquo;Wait 10 seconds • Double click each question.&rdquo;</em> Here is why its 3 modes fail modern LMS integrity checks—and how ExamGhost fixes all three.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                        
                        {/* Left Card: How Study Buddy / CheatMate Works */}
                        <div className="rounded-[32px] bg-white border border-rose-200 p-7 sm:p-9 shadow-card flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/10">
                                    <div>
                                        <span className="text-xs font-bold uppercase text-rose-800 block">CheatMate / &ldquo;Study Buddy&rdquo; v4.5</span>
                                        <h3 className="font-display text-xl font-extrabold text-ink mt-0.5">Mutates Your Live Exam HTML</h3>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold">
                                        Host DOM Tampering
                                    </span>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/80">
                                        <div className="font-bold text-sm text-ink mb-1">1. Mandatory 10-Second Startup Lag</div>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                            CheatMate&apos;s content script waits 10 seconds after page load before parsing the DOM, then sends questions to a congested cloud queue (taking another 8–12 seconds during midterms).
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/80">
                                        <div className="font-bold text-sm text-ink mb-1">2. Direct Host DOM Style &amp; Text Mutation</div>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                            Even in its &ldquo;Sneaky Mode&rdquo; or &ldquo;Invisible Mode,&rdquo; CheatMate alters the actual <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-rose-200">.question_text</code> and <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-rose-200">.answer_label</code> nodes inside the Canvas HTML page. Any <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-rose-200">MutationObserver</code> script sees the edit immediately.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/80">
                                        <div className="font-bold text-sm text-ink mb-1">3. Breaks on Locked Canvas New Quizzes &amp; Images</div>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                            When professors use Canvas New Quizzes (LTI 1.3 iframes) or embed calculus formulas as images, CheatMate&apos;s text-node scraper fails to attach double-click listeners.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-[#1e1114] text-rose-100 p-4 font-mono text-xs leading-relaxed">
                                <div className="text-rose-400 font-bold mb-1">// What Canvas MutationObserver detects on CheatMate:</div>
                                <div>[DOM Alert] Unrecognized style mutation on div.answer_text</div>
                                <div>[SpeedGrader] Unshielded window.blur when clicking extension popup</div>
                            </div>
                        </div>

                        {/* Right Card: How ExamGhost Works */}
                        <div className="rounded-[32px] bg-white border-2 border-emerald-500/40 p-7 sm:p-9 shadow-card flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/10">
                                    <div>
                                        <span className="text-xs font-bold uppercase text-emerald-800 block">ExamGhost v4.2 Stealth Engine</span>
                                        <h3 className="font-display text-xl font-extrabold text-ink mt-0.5">Closed Shadow DOM + 0.3s Edge AI</h3>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold">
                                        0 DOM Footprints
                                    </span>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                                        <div className="font-bold text-sm text-ink mb-1">1. Instant 0.3s Solve (Zero 10-Second Wait)</div>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                            Double-click any question the second your quiz opens. ExamGhost solves and auto-fills, highlights, or copies the answer in <strong>0.3 seconds</strong>.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                                        <div className="font-bold text-sm text-ink mb-1">2. True Closed Shadow DOM Isolation</div>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                            Choose <strong>Invisible Mode</strong> (zero UI on screen, silent auto-fill), <strong>Stealth Mode</strong> (quiet micro-cursor), or <strong>Explain Mode</strong> (rendered inside an isolated <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-emerald-200">mode: &apos;closed&apos;</code> Shadow root that page scripts cannot read).
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                                        <div className="font-bold text-sm text-ink mb-1">3. Snap-It OCR (<kbd className="font-mono text-xs">⌘+Shift+S</kbd>) + Focus Shield</div>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                            Locked diagram or LTI iframe? Press <kbd className="font-mono text-xs">⌘+Shift+S</kbd> and drag over the problem. Meanwhile, <strong>Focus Shield</strong> blocks <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-emerald-200">window.blur</code> and <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-emerald-200">visibilitychange</code> telemetry 100% of the time.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-[#0b1c14] text-emerald-100 p-4 font-mono text-xs leading-relaxed">
                                <div className="text-emerald-400 font-bold mb-1">// What Canvas SpeedGrader sees with ExamGhost:</div>
                                <div>[DOM Check] 0 external nodes · Pristine host document</div>
                                <div>[SpeedGrader] 100% continuous focus · 0 blur flags</div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ============================================================
                    CLEAN COMPARISON TABLE + COLLAPSIBLE STORE MANIFEST AUDIT
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            CheatMate vs ExamGhost: 2026 Comparison Matrix
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Verified side-by-side audit of pricing, speed, stealth, and LMS support.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="bg-[#f7f4ee] border-b border-black/10">
                                        <th className="py-4 px-6 font-bold text-ink w-[36%]">Evaluation Metric</th>
                                        <th className="py-4 px-6 font-extrabold text-emerald-950 bg-emerald-100/50 text-center w-[32%]">
                                            ExamGhost (v4.2)
                                        </th>
                                        <th className="py-4 px-6 font-bold text-ink-secondary text-center w-[32%]">
                                            CheatMate (&ldquo;Study Buddy&rdquo; v4.5)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Chrome Web Store Rating</div>
                                            <div className="text-xs text-ink-muted">Verified student rating on official store</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            4.9 ★ Student Verified
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            2.8 ★ (14 ratings · 2,000 users)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Trial &amp; Entry Price</div>
                                            <div className="text-xs text-ink-muted">Test before entering payment details</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 50 Free Solves ($0, No Card)
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            $0.99 Trial → Auto-bills $9.99/week
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Annualized Cost</div>
                                            <div className="text-xs text-ink-muted">Total cost over an academic year</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            $99/yr ($8.25/mo) or $199 Lifetime
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            $519.48/yr ($9.99 × 52 weeks)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">DOM Isolation Architecture</div>
                                            <div className="text-xs text-ink-muted">Protection against LMS DOM scanners</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Closed Shadow DOM v1
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ Mutates Host DOM Nodes
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Question Solving Speed</div>
                                            <div className="text-xs text-ink-muted">Time from click to verified answer</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 0.3s Instant Edge Solve
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            10s Page Wait + 8–12s Cloud Queue
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Snap-It Screenshot OCR (<kbd className="font-mono text-xs">⌘+Shift+S</kbd>)</div>
                                            <div className="text-xs text-ink-muted">Solves diagrams, circuits &amp; locked iframes</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Built-In Mathpix STEM Vision
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-ink-secondary">
                                            ✗ Fails on unselectable images
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Emergency Panic Kill Switch</div>
                                            <div className="text-xs text-ink-muted">Instant memory &amp; UI purge hotkey</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ <kbd className="font-mono text-xs">⌘+Shift+U</kbd> (&lt;8ms Purge)
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ None
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Manifest Evidence */}
                        <details className="border-t border-black/10 bg-[#faf8f4] px-6 py-4 text-xs group">
                            <summary className="cursor-pointer font-mono font-bold text-ink-secondary flex items-center justify-between list-none">
                                <span className="flex items-center gap-2 m-0 inline">
                                    <Terminal className="w-4 h-4 text-ink-muted" />
                                    <h3 className="font-bold m-0 inline">View Chrome Web Store Manifest &amp; Publisher Forensics (&ldquo;Study Buddy&rdquo; v4.5)</h3>
                                </span>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="mt-4 pt-3 border-t border-black/5 grid sm:grid-cols-3 gap-4 text-ink-secondary font-mono text-[11px] leading-relaxed">
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Store Identity</div>
                                    Extension ID <code className="bg-black/5 px-1 rounded">pifapfmbofjgaenkhhipjhfacfmmhkcp</code>, listed as &ldquo;Study Buddy&rdquo; v4.5 (3.12MiB), publisher Aidan Gollan (64 14th St, San Francisco, CA 94103).
                                </div>
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Schema Rating Inflation</div>
                                    <code className="bg-black/5 px-1 rounded">cheatmate.io</code> injects static JSON-LD claiming 4.8★ (523 reviews), contradicting its live 2.8★ Chrome Store rating across 14 reviews.
                                </div>
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Broken Privacy URL</div>
                                    Store listing links privacy policy to misspelled <code className="bg-black/5 px-1 rounded">http://cheatemate.io/privacy</code>; support uses HelpScout Beacon <code className="bg-black/5 px-1 rounded">3e665fa3-6582...</code>.
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* ============================================================
                    STUDENT SWITCHER STORY & FAQ
                ============================================================ */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="rounded-[32px] bg-[#ebeef9] border border-black/10 p-7 sm:p-10 mb-16 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-1 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white text-indigo-950 text-xs font-bold border border-black/10">
                                Verified Switcher from CheatMate
                            </span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-2xl font-bold text-ink leading-snug mb-5">
                            &ldquo;CheatMate charged my debit card $9.99 every single week for two months after the $0.99 trial before I caught it on my bank statement. Worse, during my Cognitive Science midterm, I had to wait 10+ seconds on every page and it didn&apos;t work on image questions. ExamGhost let me test 50 questions free without a card, and the $99/yr pass solves everything in 0.3s.&rdquo;
                        </blockquote>
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-black/10 text-xs text-ink-secondary">
                            <div>
                                <strong className="text-ink">Jordan P.</strong> · Cognitive Science Major, UC San Diego
                            </div>
                            <span className="font-bold text-emerald-800">Earned an A in COGS 108 · Zero SpeedGrader Flags</span>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Everything you need to know about CheatMate (&ldquo;Study Buddy&rdquo;) vs ExamGhost.
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
                    <div className="rounded-[32px] bg-[#c4d0f8] border border-black/10 p-7 sm:p-10 shadow-card flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-black/10 text-xs font-bold text-indigo-950 mb-3">
                                <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
                                <span>No $0.99 Trial Traps · No Weekly Billing</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                Test 50 Free Solves Right Now—Zero Credit Card Needed.
                            </h2>
                            <p className="text-sm text-ink-secondary leading-relaxed">
                                See why thousands of students ditched $9.99/week extensions for ExamGhost&apos;s 0.3s closed Shadow DOM solver.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <Link prefetch={false}
                                href="/#pricing"
                                className="btn-dark px-6 py-3.5 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                            >
                                <FaChrome className="w-4 h-4 text-[#c4d0f8]" />
                                <span>Claim 50 Free Solves</span>
                            </Link>
                            <Link prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-white hover:bg-cream text-ink border border-black/15 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <span>Try Live Sandbox</span>
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
                                Compare More Canvas &amp; Quiz Extensions
                            </h2>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="text-xs font-bold text-indigo-900 hover:underline flex items-center gap-1">
                                <span>View All 57 Audits</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <Link prefetch={false} href="/canvashack-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CanvasHack</div>
                                <div className="text-[11px] text-ink-muted">$149.99 Tab Blocker (No AI)</div>
                            </Link>
                            <Link prefetch={false} href="/studyfox-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs StudyFox</div>
                                <div className="text-[11px] text-ink-muted">Weekly Billing &amp; DOM Audit</div>
                            </Link>
                            <Link prefetch={false} href="/canvasquiz-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CanvasQuiz</div>
                                <div className="text-[11px] text-ink-muted">Injected Buttons vs Stealth</div>
                            </Link>
                            <Link prefetch={false} href="/canvaspass-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CanvasPass</div>
                                <div className="text-[11px] text-ink-muted">Credit Math &amp; Pro Paywall</div>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
