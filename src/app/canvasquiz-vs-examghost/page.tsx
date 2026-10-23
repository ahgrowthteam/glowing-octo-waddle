import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
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
    AlertCircle,
    Activity,
    ExternalLink,
    Code2,
    Layers,
    Quote
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "CanvasQuiz vs ExamGhost (2026) — DOM Buttons vs Shadow DOM",
    },
    description: "CanvasQuiz injects detectable HTML buttons into Canvas and bills $48.99/4mo. ExamGhost isolates its 0.3s HUD in a closed Shadow DOM with 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/canvasquiz-vs-examghost",
    },
    openGraph: {
        title: "CanvasQuiz vs ExamGhost (2026) — DOM Buttons vs Shadow DOM",
        description: "CanvasQuiz injects detectable HTML buttons into Canvas and bills $48.99/4mo. ExamGhost isolates its 0.3s HUD in a closed Shadow DOM with 50 Free Solves.",
        url: "https://examghost.com/canvasquiz-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CanvasQuiz vs ExamGhost (2026) — DOM Buttons vs Shadow DOM",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CanvasQuiz vs ExamGhost (2026) — DOM Buttons vs Shadow DOM",
        description: "CanvasQuiz injects detectable HTML buttons into Canvas and bills $48.99/4mo. ExamGhost isolates its 0.3s HUD in a closed Shadow DOM with 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function CanvasQuizComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-12",
                "dateModified": "2026-03-13",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/canvasquiz-vs-examghost#webpage",
                "url": "https://examghost.com/canvasquiz-vs-examghost",
                "name": "CanvasQuiz vs ExamGhost (2026) | Why CanvasQuiz Admits It Fails Under Proctoring",
                "description": "Direct comparison between Canvas Quiz Solver (canvasquiz.com / eiceeladfkklbbdlgpfhgclfhlmkpmjb v3.9.0) and ExamGhost regarding DOM injection vulnerabilities, proctoring detection, and pricing.",
                "breadcrumb": { "@id": "https://examghost.com/canvasquiz-vs-examghost#breadcrumb" },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "operatingSystem": "Chrome, Edge, Brave",
                        "applicationCategory": "EducationalApplication",
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
                        "name": "Canvas Quiz Solver",
                        "operatingSystem": "Chrome Extension",
                        "applicationCategory": "EducationalApplication",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "14.99",
                            "highPrice": "48.99",
                            "priceCurrency": "USD",
                            "offerCount": "2"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvasquiz-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "CanvasQuiz vs ExamGhost", "item": "https://examghost.com/canvasquiz-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvasquiz-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does CanvasQuiz (Canvas Quiz Solver) work with Honorlock or Proctorio?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. CanvasQuiz (eiceeladfkklbbdlgpfhgclfhlmkpmjb v3.9.0) explicitly concedes in its official FAQ on canvasquiz.com: 'It does not run inside LockDown Browser, and proctoring tools such as Honorlock and Proctorio can turn Chrome extensions off, so it is for exams without a proctoring tool.' In contrast, ExamGhost operates in a closed Shadow DOM container and intercepts events natively, remaining 100% invisible."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does CanvasQuiz inject visible buttons and answers under questions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CanvasQuiz states on canvasquiz.com: 'open your Canvas quiz, and click the button on any question. The answer appears right below the question.' Appending physical DOM buttons labeled 'Get Answer' and writing answer blocks directly below question nodes in the host HTML makes it trivial for MutationObserver scripts and quiz integrity filters to detect the extension."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost solve questions without modifying the DOM?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost uses an isolated closed Shadow DOM (#shadow-root) rendered within a private host container. It does not insert a single button or answer node into Canvas's document tree. Furthermore, ExamGhost offers Invisible Auto-Fill, Smart Highlight, and Snap-It in-memory screenshot OCR with an adjustable opacity slider (0% to 100%)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does CanvasQuiz pricing compare to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CanvasQuiz (routed via AWS Lambda 7xv2cav7t3iceljjbwjn4akknm0kymha.lambda-url.us-east-1.on.aws) charges $14.99/month or $48.99 every 4 months ('Semester — Renews every 4 months', totaling $146.97/year or $587.88 over 4 years). ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), plus $19/month, $99/year ($8.25/mo Academic Year Pass), or $199 Lifetime."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does CanvasQuiz work on Blackboard, Moodle, or D2L Brightspace?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. CanvasQuiz's Chrome Web Store listing explicitly states: 'BUILT FOR CANVAS. ONLY CANVAS... Hand-built for Canvas LMS (instructure.com).' ExamGhost supports Canvas Classic Quizzes, Canvas New Quizzes (LTI 1.3), Blackboard Learn, Moodle, D2L Brightspace, and McGraw-Hill Connect."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is ExamGhost's emergency panic kill shortcut?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Pressing ⌘+Shift+U (or Ctrl+Shift+U on Windows) instantly purges the closed Shadow DOM overlay from memory in under 8 milliseconds. If a professor or proctor approaches, your screen immediately returns to an unmodified Canvas page."
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
                        <span className="text-ink font-semibold">CanvasQuiz vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: The Verbatim FAQ Concession Card */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#ffe4e6] via-[#e6f6e5] to-[#cdeecb] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-black/10 text-xs font-bold text-ink">
                                <AlertCircle className="w-3.5 h-3.5 text-rose-700" />
                                <span>2026 Head-to-Head · Visible DOM Button Injector vs Closed Shadow Stealth</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-100 text-[11px] font-bold uppercase tracking-wider">
                                CanvasQuiz ($146.97/yr) vs ExamGhost ($99/yr)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    When their own FAQ admits it&apos;s{' '}
                                    <span className="text-rose-800 underline decoration-rose-500/40 decoration-wavy underline-offset-4">
                                        &quot;for exams without a proctoring tool.&quot;
                                    </span>
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-6 max-w-2xl">
                                    Canvas Quiz Solver (<code>canvasquiz.com</code>) injects a visible button onto every Canvas question and writes the answer directly below the question in the page HTML. Because of that, their own website admits it cannot be used on proctored exams—and it only works on Canvas while billing <strong>$48.99 every 4 months ($146.97/yr)</strong>.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">DOM Footprint</div>
                                        <div className="font-display font-extrabold text-base text-ink">0 Injected Buttons</div>
                                        <div className="text-[11px] text-ink-muted">Closed Shadow DOM stealth</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">LMS Support</div>
                                        <div className="font-display font-extrabold text-base text-ink">20+ University LMSs</div>
                                        <div className="text-[11px] text-ink-muted">vs &quot;ONLY CANVAS&quot;</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Annual Cost</div>
                                        <div className="font-display font-extrabold text-base text-ink">50 Free · $99/yr</div>
                                        <div className="text-[11px] text-ink-muted">vs $146.97/yr (4-mo billing)</div>
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
                                        <span>Try Live Canvas Sandbox</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Verbatim FAQ Quote Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#161922] text-white p-6 sm:p-7 border border-black/20 shadow-lift">
                                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <Quote className="w-4 h-4 text-rose-400" />
                                            <span className="font-mono text-xs text-rose-300 uppercase tracking-wider font-bold">
                                                Verbatim Quote · canvasquiz.com FAQ
                                            </span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-mono font-bold">
                                            Official Admission
                                        </span>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-500/30 mb-4">
                                        <div className="text-xs font-bold text-white mb-2">
                                            Q: &quot;Can I use Canvas Quiz Solver as a Canvas exam solver?&quot;
                                        </div>
                                        <blockquote className="text-xs text-rose-100/90 leading-relaxed italic border-l-2 border-rose-400 pl-3">
                                            &quot;...click the button on a question, and the answer appears right below it, on Classic and New Quizzes. It does not run inside LockDown Browser, and proctoring tools such as Honorlock and Proctorio can turn Chrome extensions off, <strong className="text-rose-300 not-italic underline">so it is for exams without a proctoring tool.</strong>&quot;
                                        </blockquote>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="text-xs font-bold text-emerald-200 mb-1.5 flex items-center gap-1.5">
                                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                            <span>Why ExamGhost Stays 100% Undetected:</span>
                                        </div>
                                        <p className="text-xs text-emerald-100/90 leading-relaxed">
                                            ExamGhost never injects visible &quot;Get Answer&quot; buttons or text blocks underneath Canvas questions. Double-click any question to auto-fill or highlight inside a <strong>closed Shadow DOM</strong> with <strong>4-Layer Focus Shield</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB COMPARISON SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-900 mb-3">
                            <Sparkles className="w-3.5 h-3.5" />
                            Interactive Breakdown · Click Any Tab to Compare
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            How CanvasQuiz &amp; ExamGhost Compare in Real Classes
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Inspect the differences across on-screen stealth, multi-LMS compatibility, and semester billing math.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <input type="radio" name="cq_tabs" id="cq-dom" className="sr-only peer/dom" defaultChecked />
                        <input type="radio" name="cq_tabs" id="cq-lms" className="sr-only peer/lms" />
                        <input type="radio" name="cq_tabs" id="cq-billing" className="sr-only peer/billing" />

                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f5f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="cq-dom"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/dom:bg-ink peer-checked/dom:text-white peer-checked/dom:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Code2 className="w-4 h-4" />
                                <span>1. Injected Button vs 0-DOM Stealth</span>
                            </label>
                            <label
                                htmlFor="cq-lms"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/lms:bg-ink peer-checked/lms:text-white peer-checked/lms:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Layers className="w-4 h-4" />
                                <span>2. &quot;ONLY CANVAS&quot; vs 20+ Portals</span>
                            </label>
                            <label
                                htmlFor="cq-billing"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/billing:bg-ink peer-checked/billing:text-white peer-checked/billing:shadow-sm flex items-center justify-center gap-2"
                            >
                                <DollarSign className="w-4 h-4" />
                                <span>3. $48.99/4-Mos vs $99/Yr Pass</span>
                            </label>
                        </div>

                        {/* TAB 1: DOM INJECTION */}
                        <div className="hidden peer-checked/dom:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-rose-800">CanvasQuiz On-Screen Behavior</span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-950 font-mono text-[11px] font-bold">
                                            Modifies Host HTML
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Writes Answers &amp; Buttons Directly Under Every Question
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        CanvasQuiz states on its homepage: <em>&quot;open your Canvas quiz, and click the button on any question. The answer appears right below the question.&quot;</em>
                                    </p>
                                    <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Visible to Anyone Walking By:</strong> Pushes Canvas questions down the page to display a third-party answer box right inside the quiz form.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Trivial <code>MutationObserver</code> Detection:</strong> Appending child nodes inside <code>#questions</code> immediately alerts page-integrity scripts.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">ExamGhost Stealth Behavior</span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-950 font-mono text-[11px] font-bold">
                                            0 Host DOM Changes
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Double-Click Solve + 3 Stealth Delivery Modes
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never inserts a single button or answer paragraph into Canvas&apos;s HTML document tree:
                                    </p>
                                    <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Invisible Auto-Fill Mode:</strong> Double-click any question and ExamGhost silently selects the correct radio button in 0.3s with zero on-screen UI.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Closed Shadow DOM + Panic Key (<code>⌘+Shift+U</code>):</strong> Need step-by-step explanations? Render them at 20% Ghost opacity inside an isolated Shadow root and flush memory in &lt;8ms.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: LMS COVERAGE */}
                        <div className="hidden peer-checked/lms:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">CanvasQuiz Store Listing</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        &quot;BUILT FOR CANVAS. ONLY CANVAS.&quot;
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Even if your university uses Canvas as its main portal, STEM and business professors constantly assign quizzes on external publisher platforms or secondary LMSs. CanvasQuiz does nothing on:
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-rose-900">
                                        <div className="p-2.5 rounded-xl bg-white border border-amber-200">✗ McGraw-Hill Connect</div>
                                        <div className="p-2.5 rounded-xl bg-white border border-amber-200">✗ Pearson MyLab</div>
                                        <div className="p-2.5 rounded-xl bg-white border border-amber-200">✗ Blackboard Ultra</div>
                                        <div className="p-2.5 rounded-xl bg-white border border-amber-200">✗ Moodle / D2L / WebAssign</div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">ExamGhost Universal Coverage</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        One Extension for Every Portal You Use All Degree
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost works natively across all 20+ university LMSs and locked publisher iframes—plus <code>⌘+Shift+S</code> Snap-It Vision crops any diagram on any website:
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-emerald-950">
                                        <div className="p-2.5 rounded-xl bg-white border border-emerald-200">✓ Canvas Classic &amp; New Quizzes</div>
                                        <div className="p-2.5 rounded-xl bg-white border border-emerald-200">✓ McGraw-Hill &amp; Pearson</div>
                                        <div className="p-2.5 rounded-xl bg-white border border-emerald-200">✓ Blackboard &amp; Moodle</div>
                                        <div className="p-2.5 rounded-xl bg-white border border-emerald-200">✓ D2L, Cengage &amp; WebAssign</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: BILLING MATH */}
                        <div className="hidden peer-checked/billing:block">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-mono uppercase text-rose-900 font-bold mb-1">CanvasQuiz &quot;Semester&quot; Plan</div>
                                    <div className="font-display text-3xl font-extrabold text-ink mb-1">$48.99<span className="text-sm font-normal text-ink-muted"> / 4 mos</span></div>
                                    <div className="text-xs text-rose-800 font-semibold mb-4">Auto-renews 3x/yr = $146.97/year</div>
                                    <p className="text-xs text-ink-secondary leading-relaxed">
                                        Because it renews every 4 months instead of once a year, keeping CanvasQuiz across a 4-year degree costs <strong>$587.88</strong>—including summer months when you aren&apos;t in class.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-[#faf8f4] border border-black/10">
                                    <div className="text-xs font-mono uppercase text-amber-900 font-bold mb-1">CanvasQuiz Monthly</div>
                                    <div className="font-display text-3xl font-extrabold text-ink mb-1">$14.99<span className="text-sm font-normal text-ink-muted"> / mo</span></div>
                                    <div className="text-xs text-ink-muted mb-4">Equals $179.88/year</div>
                                    <p className="text-xs text-ink-secondary leading-relaxed">
                                        Still restricted to Canvas LMS only, with zero window-blur Focus Shield and visible DOM button injection.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-950 text-white border border-emerald-700">
                                    <div className="text-xs font-mono uppercase text-[#cdeecb] font-bold mb-1">ExamGhost Passes</div>
                                    <div className="font-display text-3xl font-extrabold text-white mb-1">$8.25<span className="text-sm font-normal text-white/75">/mo ($99/yr)</span></div>
                                    <div className="text-xs text-[#cdeecb] font-semibold mb-4">Or $19/mo · $199 Lifetime + 50 Free Solves</div>
                                    <p className="text-xs text-white/85 leading-relaxed">
                                        Save $47.97/yr compared to CanvasQuiz&apos;s 4-month plan, get 50 Free Solves up front ($0), and unlock all 20+ LMSs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDE-BY-SIDE COMPARISON TABLE + COLLAPSIBLE MANIFEST DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                CanvasQuiz vs ExamGhost: 2026 Comparison Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-medium">Verified against canvasquiz.com &amp; v3.9.0 extension</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Security &amp; Solver Capability</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-emerald-950 bg-[#cdeecb]/40">ExamGhost</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">CanvasQuiz (canvasquiz.com)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Proctored Exam Compatibility</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Closed Shadow DOM + 4-Layer Focus Shield</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">&quot;For exams without a proctoring tool&quot; (Official FAQ)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Page DOM Mutation</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">0 Host Nodes Added (Double-Click / Auto-Fill)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Injects &quot;Get Answer&quot; Button &amp; Text Below Question</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Canvas SpeedGrader Blur Protection</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Blocks window.blur &amp; visibilitychange</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">No Blur Interception</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Supported LMS Portals</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Canvas, Blackboard, Moodle, D2L, McGraw-Hill, Pearson</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">&quot;BUILT FOR CANVAS. ONLY CANVAS.&quot;</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Free Trial &amp; Pricing</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves ($0) · $19/mo · $99/yr · $199 Life</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">$14.99/mo or $48.99 every 4 mos ($146.97/yr)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Master Panic Kill Key</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">⌘+Shift+U (&lt;8ms Memory Flush)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Manifest Audit */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-xs sm:text-sm font-bold text-ink hover:bg-[#f2ede4] transition-colors">
                                <div className="flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-emerald-800" />
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Backend Audit (CanvasQuiz v3.9.0)</h3>
                                </div>
                                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs text-ink-secondary space-y-2.5 border-t border-black/5 bg-white">
                                <p className="leading-relaxed">
                                    <strong>Extension Identity:</strong> Canvas Quiz Solver (<code>canvasquiz.com</code>, Chrome Web Store ID <code>eiceeladfkklbbdlgpfhgclfhlmkpmjb</code>, v3.9.0, 160KiB package size, ~2,000 users, 4.9★ across 96 ratings).
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Backend &amp; DOM Behavior:</strong> Routes checkout and API requests via AWS Lambda Function URL <code>7xv2cav7t3iceljjbwjn4akknm0kymha.lambda-url.us-east-1.on.aws</code> and mutates the host Canvas quiz DOM by appending button and answer nodes directly beneath question containers.
                                </p>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT MIGRATION STORY */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-[#f5ede2] p-8 sm:p-10 border border-black/10">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-snug mb-5">
                            &quot;Our professor switched our biology midterms to proctored Canvas quizzes, and my chemistry lab ran on Blackboard. I read CanvasQuiz&apos;s own FAQ admitting it is only for exams without a proctoring tool and only works on Canvas, plus it wanted $48.99 every 4 months. I tested ExamGhost&apos;s 50 Free Solves and upgraded to the $99/year pass—it works on both Canvas and Blackboard inside a closed Shadow DOM with zero flags.&quot;
                        </blockquote>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-secondary pt-4 border-t border-black/10">
                            <div>
                                <span className="font-bold text-ink">Camila R.</span> — Biology Junior, Florida State University
                            </div>
                            <span className="text-emerald-800 font-semibold bg-emerald-100 px-2.5 py-1 rounded-full">
                                Verified ExamGhost Switcher
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
                            Everything you need to know about CanvasQuiz (v3.9.0) vs ExamGhost.
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

                {/* BESPOKE CONVERSION STRIP + RELATED LINKS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#ffe4e6] via-[#e2f5ea] to-[#cdeecb] p-8 sm:p-10 border border-black/10 shadow-card mb-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>0 Injected DOM Buttons · 20+ LMS Portals · 50 Free Solves</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                    Don&apos;t settle for an unproctored-only button injector.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Test ExamGhost&apos;s 0.3s double-click stealth across Canvas, Blackboard, Moodle, and McGraw-Hill with 50 Free Solves ($0, no credit card).
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
                        <Link prefetch={false} href="/canvashack-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">CanvasHack vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">$149.99 tab-blocker review</div>
                        </Link>
                        <Link prefetch={false} href="/canvasninja-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">CanvasNinja vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Pay-per-quiz vs unlimited</div>
                        </Link>
                        <Link prefetch={false} href="/canvaswizard-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">CanvasWizard vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">MV3 stealth comparison</div>
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
