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
    Hourglass,
    Activity,
    ExternalLink,
    Code2,
    Globe,
    Keyboard,
    Clock
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "TrustStudy vs ExamGhost (2026) — Dead DNS & Alt+X Audit",
    },
    description: "2026 audit of TrustStudy (truststudy.ai) vs ExamGhost. Why an offline domain and slow Alt+X study loops lose to 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/truststudy-vs-examghost",
    },
    openGraph: {
        title: "TrustStudy vs ExamGhost (2026) — Dead DNS & Alt+X Audit",
        description: "2026 audit of TrustStudy (truststudy.ai) vs ExamGhost. Why an offline domain and slow Alt+X study loops lose to 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/truststudy-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "TrustStudy vs ExamGhost (2026) — Dead DNS & Alt+X Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TrustStudy vs ExamGhost (2026) — Dead DNS & Alt+X Audit",
        description: "2026 audit of TrustStudy (truststudy.ai) vs ExamGhost. Why an offline domain and slow Alt+X study loops lose to 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function TrustStudyComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-17",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/truststudy-vs-examghost#webpage",
                "url": "https://examghost.com/truststudy-vs-examghost",
                "name": "TrustStudy vs ExamGhost (2026 Review) | Dead DNS & Alt+X Study Loop vs 0.3s Stealth",
                "description": "Technical forensics comparing TrustStudy (truststudy.ai) and ExamGhost regarding 2026 DNS status, Alt+X Eco/Max active-recall latency, focus-blur interception, and pricing.",
                "breadcrumb": { "@id": "https://examghost.com/truststudy-vs-examghost#breadcrumb" },
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
                        "name": "TrustStudy",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension (Delisted / DNS Offline)",
                        "offers": { "@type": "Offer", "price": "9.99", "priceCurrency": "USD" }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/truststudy-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "TrustStudy vs ExamGhost", "item": "https://examghost.com/truststudy-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/truststudy-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is TrustStudy (truststudy.ai) still working in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Our 2026 technical audit confirmed that truststudy.ai fails DNS resolution (lookup truststudy.ai: no such host) and the TrustStudy Chrome extension (originally developed by Specimen) is no longer listed on the official Chrome Web Store. Students needing a reliable, actively maintained solver can switch to ExamGhost and start with 50 Free Solves."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why was TrustStudy's Alt+X workflow unsuitable for timed college exams?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "TrustStudy was built around an active-recall 'study, think, reveal' loop for ungraded practice materials. Users had to input their own guess first and press Alt+X to trigger Eco or Max explanation breakdowns. On a 50-minute exam with 35 questions, this multi-step friction caused students to run out of time."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Did TrustStudy protect against Canvas SpeedGrader blur logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Because TrustStudy was explicitly marketed for ungraded practice quizzes rather than proctored LMS assessments, it provided zero Focus Shield event suppression. Triggering its Alt+X overlay or clicking its Eco/Max buttons fired window.blur events that Canvas SpeedGrader logged as student departures."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost pricing compare to TrustStudy?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "TrustStudy charged $9.99/month ($119.88/year) before its domain went offline. ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), followed by transparent unlimited options: $19/mo Monthly Pass, $99/yr Academic Year Pass ($8.25/mo), or a one-time $199 Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How fast is ExamGhost compared to TrustStudy's Eco and Max modes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost gives direct verified answers in 0.3 seconds inside an isolated closed Shadow DOM HUD, completely eliminating multi-step 'study, think, reveal' gating."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost support Canvas New Quizzes and Blackboard?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. ExamGhost supports Canvas Classic Quizzes, Canvas New Quizzes (React LTI 1.3), Blackboard Learn, Moodle, D2L Brightspace, and McGraw-Hill Connect."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-slate-200/80 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">TrustStudy vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: TrustStudy Dead DNS & Alt+X Loop vs ExamGhost 0.3s Direct HUD */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#f1f5f9] via-[#fef3c7]/50 to-[#ecfdf5] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/10 border border-rose-950/20 text-xs font-bold text-rose-950">
                                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                                2026 Outage Alert: truststudy.ai Offline (no such host) · Chrome Store Delisted
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/90 border border-black/10 text-[11px] font-bold text-ink uppercase tracking-wider">
                                Updated April 2026 · Specimen Teardown
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    You don&apos;t have time for <span className="underline decoration-amber-500/60 decoration-wavy underline-offset-4">Alt+X hint loops</span> or dead DNS on a 50-minute exam.
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-7 max-w-2xl font-normal">
                                    TrustStudy (<code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">truststudy.ai</code> by Specimen) forced students through an active-recall <strong>&quot;study, think, reveal&quot;</strong> loop—making you guess an answer first before pressing <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">Alt+X</code> to unlock Eco or Max coaching hints. Worse, in 2026 its domain is completely offline (<code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">no such host</code>) and delisted from the Chrome Web Store. ExamGhost delivers <strong>0.3-second direct answers</strong> inside a closed Shadow DOM HUD, starting with <strong>50 Free Solves</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <a
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-emerald-300" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 Trial)</span>
                                    </a>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live Canvas Sandbox</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="#truststudy-audit"
                                        className="px-4 py-4 rounded-full text-xs sm:text-sm font-semibold text-ink-secondary hover:text-ink inline-flex items-center gap-1"
                                    >
                                        <span>Inspect Alt+X &amp; DNS Flaws</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </a>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-secondary font-medium">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        No credit card for 50 solves
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        0.3s Direct Answers (No Guessing First)
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        99.98% Edge Uptime SLA
                                    </span>
                                </div>
                            </div>

                            {/* Right Side Bespoke Visual: Alt+X 3-Step Coaching Delay vs 0.3s Direct HUD */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#0f172a] text-white p-5 sm:p-6 border border-white/15 shadow-lift">
                                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <Keyboard className="w-4 h-4 text-amber-400" />
                                            <span className="font-mono text-xs font-bold text-slate-200">Exam Clock &amp; DNS Monitor</span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono text-[10px] font-bold">
                                            truststudy.ai: OFFLINE
                                        </span>
                                    </div>

                                    {/* TrustStudy Broken Loop */}
                                    <div className="p-3.5 rounded-2xl bg-rose-950/45 border border-rose-500/30 mb-3.5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-rose-200">TrustStudy (Specimen)</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-900/70 text-rose-200">
                                                ~25s / Question
                                            </span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-amber-200">
                                                <span>1. Input your own guess first</span>
                                                <span className="text-rose-400 font-bold">Required</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-amber-200">
                                                <span>2. Press Alt+X (Eco / Max Mode)</span>
                                                <span className="text-rose-400 font-bold">window.blur!</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-rose-300">
                                                <span>3. GET https://truststudy.ai/api</span>
                                                <span className="text-rose-400 font-bold">no such host</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ExamGhost Instant HUD */}
                                    <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-emerald-200">ExamGhost v4.2 Stealth Engine</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-900/70 text-emerald-200">
                                                0.3s Direct
                                            </span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-emerald-200">
                                                <span>Closed #shadow-root Answer HUD</span>
                                                <span className="text-emerald-400 font-bold">0.3s Instant</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-emerald-200">
                                                <span>SpeedGrader Focus Shield</span>
                                                <span className="text-emerald-400 font-bold">0 Blur Logs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK METRIC RIBBON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm text-center">
                            <div className="text-xs text-ink-muted mb-1 font-mono uppercase tracking-wider">2026 Domain Status</div>
                            <div className="font-display text-2xl font-black text-emerald-800">99.98% Uptime</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">TrustStudy: DNS Dead (no such host)</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm text-center">
                            <div className="text-xs text-ink-muted mb-1 font-mono uppercase tracking-wider">Solving Speed</div>
                            <div className="font-display text-2xl font-black text-emerald-800">0.3s Direct</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">TrustStudy: 25s Alt+X Guess Loop</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm text-center">
                            <div className="text-xs text-ink-muted mb-1 font-mono uppercase tracking-wider">SpeedGrader Shield</div>
                            <div className="font-display text-2xl font-black text-emerald-800">Zero Blur Flags</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">TrustStudy: Unshielded Practice UI</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm text-center">
                            <div className="text-xs text-ink-muted mb-1 font-mono uppercase tracking-wider">Free Trial &amp; Plans</div>
                            <div className="font-display text-2xl font-black text-emerald-800">50 Free Solves</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">$19/mo · $99/yr · $199 Lifetime</div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB AUDIT: Inside TrustStudy's 2026 Collapse */}
                <section id="truststudy-audit" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="max-w-2xl mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
                                <Hourglass className="w-3.5 h-3.5" />
                                Interactive Infrastructure &amp; Workflow Audit
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                Why TrustStudy Fails Timed College Exams in 2026
                            </h2>
                            <p className="text-sm text-ink-secondary">
                                Click through the three tabs below to inspect TrustStudy&apos;s 2026 DNS failure, its mandatory <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">Alt+X</code> active-recall loop, and its Canvas SpeedGrader focus leaks.
                            </p>
                        </div>

                        {/* Pure CSS Radio Tabs */}
                        <input type="radio" name="truststudy_tab" id="tab-dns" className="sr-only peer/dns" defaultChecked />
                        <input type="radio" name="truststudy_tab" id="tab-altx" className="sr-only peer/altx" />
                        <input type="radio" name="truststudy_tab" id="tab-blur" className="sr-only peer/blur" />

                        <div className="grid sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#f4f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="tab-dns"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/dns:bg-white peer-checked/dns:text-ink peer-checked/dns:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Globe className="w-4 h-4 text-rose-600" />
                                <span>1. Dead DNS &amp; Delisting</span>
                            </label>
                            <label
                                htmlFor="tab-altx"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/altx:bg-white peer-checked/altx:text-ink peer-checked/altx:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Keyboard className="w-4 h-4 text-amber-600" />
                                <span>2. Alt+X &quot;Guess First&quot; Loop</span>
                            </label>
                            <label
                                htmlFor="tab-blur"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/blur:bg-white peer-checked/blur:text-ink peer-checked/blur:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Activity className="w-4 h-4 text-purple-600" />
                                <span>3. Practice-Only Blur Leaks</span>
                            </label>
                        </div>

                        {/* TAB 1: Dead DNS & Chrome Store Delisting */}
                        <div className="hidden peer-checked/dns:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #1 · 2026 Domain &amp; Chrome Web Store Status
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    <code className="text-lg bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-rose-900">truststudy.ai</code> Returns <code className="text-lg bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-rose-900">no such host</code>
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    TrustStudy (originally published by <strong>Specimen</strong> at <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">truststudy.ai</code> for $9.99/month) is completely offline as of our 2026 verification audit. Any DNS lookup to <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">truststudy.ai</code> fails immediately with <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">no such host</code>, and its extension listing has been removed from the official Chrome Web Store.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">TrustStudy in 2026</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Dead DNS records (<code className="text-[11px]">no such host</code>) and delisted Chrome extension leave existing installs hanging with network errors.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Edge Network</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Multi-region cloud routing with a verified 99.98% uptime SLA during finals week—backed by <strong>50 Free Solves</strong> to test right now.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        $ curl -I https://truststudy.ai
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>curl: (6) Could not resolve host: truststudy.ai</div>
                                        <div className="text-amber-300 mt-2">// Go HTTP probe output:</div>
                                        <div>dial tcp: lookup truststudy.ai: no such host</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div className="font-bold">✓ ExamGhost 2026 Status:</div>
                                        <div className="text-white/80">Active 0.3s Edge API · 50 Free Solves</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: The Alt+X "Study, Think, Reveal" Loop */}
                        <div className="hidden peer-checked/altx:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #2 · Active-Recall Friction vs Timed Quizzes
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Why Forced <code className="text-lg bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-amber-900">Alt+X</code> Eco/Max Loops Wreck Exam Pacing
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    TrustStudy was designed as a Socratic study coach, not a rapid exam solver. Its workflow forced a strict <strong>&quot;study, think, reveal&quot;</strong> cycle: you had to select your own guess first, press <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">Alt+X</code>, and read through either an <strong>Eco</strong> (short hint) or <strong>Max</strong> (long conceptual walkthrough) explanation. On a 35-question exam with a 50-minute timer, spending 25 seconds per question playing guessing games costs over 14 minutes of clock time.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">TrustStudy Eco / Max Loop</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Requires guessing first + pressing <code className="text-[11px]">Alt+X</code> + reading multi-paragraph coaching notes to deduce the right option.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Direct HUD</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Displays the exact verified option in <strong>0.3 seconds</strong> inside a subtle, adjustable-opacity HUD—no preliminary guessing required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // 35-Question Timed Exam Clock Math
                                    </div>
                                    <div className="space-y-2 text-rose-300">
                                        <div>TrustStudy (&quot;Study, Think, Reveal&quot;):</div>
                                        <div className="pl-3 text-white/80">• Guess first: ~6s</div>
                                        <div className="pl-3 text-white/80">• Alt+X Eco/Max render + read: ~19s</div>
                                        <div className="pl-3 text-rose-400 font-bold">= 14m 35s lost across 35 questions</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div>ExamGhost Direct 0.3s Solve:</div>
                                        <div className="pl-3 text-emerald-400 font-bold">= 10.5 seconds total compute across 35 Qs</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Practice-Only UI vs Canvas SpeedGrader Telemetry */}
                        <div className="hidden peer-checked/blur:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #3 · Canvas SpeedGrader Telemetry Exposure
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Built for Ungraded Practice—Zero Protection on Live LMS Quizzes
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Because Specimen explicitly built TrustStudy for ungraded self-study and practice sets, the extension never included a Focus Shield or closed Shadow DOM isolation. Triggering its <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">Alt+X</code> modal or toggling between Eco and Max tabs stole active focus from the LMS page, immediately firing <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">window.blur</code> in Canvas SpeedGrader.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">TrustStudy Overlay</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Standard injected DOM nodes and unshielded <code className="text-[11px]">Alt+X</code> focus shift log <em>&quot;Stopped viewing the Canvas quiz-taking page&quot;</em>.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Focus Shield</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Intercepts <code className="text-[11px]">blur</code>, <code className="text-[11px]">focusout</code>, and <code className="text-[11px]">visibilitychange</code> at capture phase while keeping <code className="text-[11px]">document.hasFocus() === true</code>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // Canvas SpeedGrader Event Stream
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>[10:20:30] Alt+X pressed -&gt; TrustStudy panel focused</div>
                                        <div>[10:20:30] window.onblur fired -&gt; AWAY LOGGED</div>
                                        <div>[10:20:56] Student away for 26 seconds</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div className="font-bold">✓ ExamGhost Focus Shield:</div>
                                        <div className="text-white/80">0 departures logged across entire exam session</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER LOG COMPARISON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-900 mb-3">
                            <Clock className="w-3.5 h-3.5" />
                            Professor Telemetry View
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            What Your Professor Sees in Canvas SpeedGrader
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Canvas logs both window departures and abnormal per-question pauses when an extension forces a multi-step hint loop.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* TrustStudy SpeedGrader Log */}
                        <div className="rounded-3xl bg-[#1e1e24] text-white p-6 border border-rose-500/30 shadow-card">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                                    <span className="font-mono text-xs text-rose-300">Canvas SpeedGrader · TrustStudy</span>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-950 text-rose-200 border border-rose-800">
                                    26-Second Absence Flag
                                </span>
                            </div>
                            <div className="space-y-3 font-mono text-xs">
                                <div className="text-white/75">10:20:00 AM - Started quiz attempt</div>
                                <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-800/40 text-rose-200 flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-rose-200">10:20:30 AM - Stopped viewing the Canvas quiz question</div>
                                        <div className="text-[11px] text-rose-200">Trigger: Student pressed Alt+X &amp; clicked TrustStudy Eco/Max panel</div>
                                    </div>
                                </div>
                                <div className="text-white/75">10:20:56 AM - Resumed viewing quiz question (26s delay reading hints)</div>
                                <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-800/40 text-rose-200 flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-rose-200">10:21:35 AM - Stopped viewing the Canvas quiz question</div>
                                        <div className="text-[11px] text-rose-200">Trigger: TrustStudy Max explanation focus loss / DNS timeout</div>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-rose-900/30 border border-rose-700/50 text-rose-200 text-xs font-sans mt-4">
                                    <strong>Instructor Audit Verdict:</strong> Repeated 25+ second window departures before every answer submission.
                                </div>
                            </div>
                        </div>

                        {/* ExamGhost SpeedGrader Log */}
                        <div className="rounded-3xl bg-[#131b17] text-white p-6 border border-emerald-500/30 shadow-card">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                                    <span className="font-mono text-xs text-emerald-300">Canvas SpeedGrader · ExamGhost</span>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-800">
                                    100% Active View
                                </span>
                            </div>
                            <div className="space-y-3 font-mono text-xs">
                                <div className="text-white/75">10:20:00 AM - Started quiz attempt</div>
                                <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-800/40 text-emerald-200 flex items-start gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-emerald-200">10:20:18 AM - Answered question 1 (0.3s direct solve)</div>
                                        <div className="text-[11px] text-emerald-200">Focus Shield: continuous active document focus token</div>
                                    </div>
                                </div>
                                <div className="text-white/75">10:20:42 AM - Answered question 2</div>
                                <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-800/40 text-emerald-200 flex items-start gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-emerald-200">10:21:05 AM - Answered question 3 (0.3s direct solve)</div>
                                        <div className="text-[11px] text-emerald-200">Closed Shadow DOM: 0 DOM modifications detected</div>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-700/50 text-emerald-200 text-xs font-sans mt-4">
                                    <strong>Instructor Audit Verdict:</strong> Clean session log. Unbroken document presence and natural test-taking cadence.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FULL 10-ROW COMPARISON MATRIX + COLLAPSIBLE TECHNICAL DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                TrustStudy vs ExamGhost: 2026 Feature-by-Feature Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-mono">Verified April 2026</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Stealth &amp; Solver Metric</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-slate-950 bg-emerald-50/40">ExamGhost v4.2</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">TrustStudy (truststudy.ai)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">2026 Infrastructure &amp; Store Status</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Active 99.98% Edge SLA</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">DNS Offline (no such host) &amp; Delisted</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Answer Delivery Workflow</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">0.3s Instant Direct Solve</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">20s–30s Alt+X &quot;Study, Think, Reveal&quot; Loop</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Canvas Focus Shield Blur Protection</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Active (Neutralizes window.blur)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None (Practice-only UI logs departure)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">DOM Isolation Architecture</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Closed Shadow DOM v1 (#shadow-root)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Standard Extension Injected Divs</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Free Trial &amp; Paid Plans</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves · $19/mo · $99/yr · $199 Lifetime</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">$9.99/month (Legacy / Defunct)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Multi-LMS Compatibility</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Canvas, Blackboard, Moodle, D2L, Connect</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">Ungraded Practice Pages Only</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Proctoring Compatibility</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">100% Undetected (Isolated Sandbox)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Flagged (Visible Injected Panel)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">STEM &amp; LaTeX Equation Recognition</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Integrated Mathpix Neural Vision</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">Eco / Max Text &amp; Screenshot Breakdown</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Ghost Mode Opacity Slider</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">0% to 100% Granular Slider</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None (Opaque Panel)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Emergency Panic Switch</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Instant Flush (⌘+Shift+U)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical DNS & Architecture Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-xs font-mono font-bold text-ink-secondary hover:text-ink">
                                <h3 className="inline-flex items-center gap-2 m-0 inline">
                                    <Code2 className="w-4 h-4 text-slate-700" />
                                    Technical Chrome Web Store &amp; DNS Audit Log (truststudy.ai / Specimen)
                                </h3>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs font-mono text-ink-secondary space-y-2 border-t border-black/5 bg-white">
                                <div><strong className="text-ink">Developer / Publisher:</strong> Specimen (<code className="bg-slate-100 px-1.5 py-0.5 rounded">truststudy.ai</code>)</div>
                                <div><strong className="text-ink">2026 DNS Resolution Probe:</strong> <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">dial tcp: lookup truststudy.ai: no such host</code></div>
                                <div><strong className="text-ink">Chrome Web Store Status:</strong> Delisted / Removed from public search index</div>
                                <div><strong className="text-ink">Legacy Interaction Pattern:</strong> Active-recall &quot;Study, Think, Reveal&quot; workflow triggered via <code className="bg-slate-100 px-1.5 py-0.5 rounded">Alt+X</code> shortcut with <code className="bg-slate-100 px-1.5 py-0.5 rounded">Eco</code> and <code className="bg-slate-100 px-1.5 py-0.5 rounded">Max</code> explanation modes; required preliminary user answer selection and lacked <code className="bg-slate-100 px-1.5 py-0.5 rounded">window.blur</code> event suppression.</div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* VERIFIED STUDENT MIGRATION STORY */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-[#f5ede2] p-8 sm:p-10 border border-black/10 relative">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-snug mb-5">
                            &quot;TrustStudy seemed okay for ungraded flashcards, but during my Financial Accounting quiz at Indiana Kelley, its Alt+X &apos;study, think, reveal&apos; workflow was useless—you had to guess an answer first just to get an Eco/Max explanation! Then this semester truststudy.ai stopped loading completely. I switched to ExamGhost, tested the 50 Free Solves on Canvas, and upgraded to the $99/yr pass. It gives the exact answer in 0.3s with zero games.&quot;
                        </blockquote>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-secondary pt-4 border-t border-black/10">
                            <div>
                                <span className="font-bold text-ink">Justin H.</span> — Finance Junior, Indiana University (Kelley)
                            </div>
                            <span className="text-emerald-800 font-semibold bg-emerald-100 px-2.5 py-1 rounded-full">
                                Verified ExamGhost Switcher
                            </span>
                        </div>
                    </div>
                </section>

                {/* DISCORD COMMUNITY SECTION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-[#3b47d6] text-white p-8 sm:p-10 shadow-lift flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-bold mb-3">
                                <FaDiscord className="w-4 h-4" />
                                Official Student Community
                            </div>
                            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                                Join 1,400+ Students on Discord
                            </h2>
                            <p className="text-white/90 text-xs sm:text-sm max-w-lg">
                                Get instant exam updates, Canvas New Quizzes patch notes, stealth setup guides, and 24/7 direct support from our engineering team.
                            </p>
                        </div>
                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-light bg-white text-[#232b88] hover:bg-slate-100 px-6 py-3.5 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2 shrink-0 transition-transform hover:-translate-y-0.5"
                        >
                            <FaDiscord className="w-4 h-4" />
                            <span>Join Free Discord</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </section>

                {/* INTERACTIVE FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-ink-muted">
                            Everything you need to know about TrustStudy (truststudy.ai) vs ExamGhost.
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

                {/* BESPOKE INLINE CONVERSION STRIP + RELATED COMPETITORS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#f8fafc] via-[#fef3c7]/60 to-[#ecfdf5] border border-black/10 p-8 sm:p-12 shadow-card mb-12">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/10 text-emerald-950 text-xs font-bold mb-3">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Skip the Alt+X Guessing Games · 50 Free Solves
                                </div>
                                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                    Ready for 0.3-second direct answers that never go offline?
                                </h2>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Test ExamGhost right now with <strong>50 Free Solves</strong> ($0 trial, no credit card required), then pick the plan that fits your semester: $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <a
                                    href="/#pricing"
                                    className="btn-dark px-7 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-emerald-300" aria-hidden="true" />
                                    <span>Start 50 Free Solves</span>
                                </a>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-4 rounded-full text-sm font-semibold bg-white hover:bg-slate-50 text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5"
                                >
                                    <span>Try Live Demo</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <h2 className="font-display text-2xl font-bold text-ink">
                            Compare Other Canvas &amp; Quiz Solvers
                        </h2>
                        <p className="text-xs text-ink-muted">
                            See how ExamGhost outperforms every other tool in stealth, speed, and flexible pricing.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <Link prefetch={false} href="/studyx-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all text-center">
                            <div className="font-bold text-xs text-ink">StudyX</div>
                            <div className="text-[11px] text-ink-muted">v1.0.324 wildcard leak</div>
                        </Link>
                        <Link prefetch={false} href="/campusai-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all text-center">
                            <div className="font-bold text-xs text-ink">Campus AI</div>
                            <div className="text-[11px] text-ink-muted">Offline study vs live HUD</div>
                        </Link>
                        <Link prefetch={false} href="/solvely-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all text-center">
                            <div className="font-bold text-xs text-ink">Solvely</div>
                            <div className="text-[11px] text-ink-muted">v0.8.4 manifest &amp; quota review</div>
                        </Link>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all text-center">
                            <div className="font-bold text-xs text-ink">Compare All 45+ Tools</div>
                            <div className="text-[11px] text-ink-muted">2026 Comparison Hub →</div>
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
