import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    DollarSign,
    ChevronDown,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    FileText,
    ExternalLink,
    Lock,
    Upload,
    UserCheck
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Course Hero vs ExamGhost (2026) — $39.99 PDFs vs 0.3s AI",
    },
    description: "Compare Course Hero ($39.99/mo unlock caps & Educator Exchange risk) with ExamGhost. Solve live Canvas & Blackboard questions in 0.3s with 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/coursehero-vs-examghost",
    },
    openGraph: {
        title: "Course Hero vs ExamGhost (2026) — $39.99 PDFs vs 0.3s AI",
        description: "Compare Course Hero ($39.99/mo unlock caps & Educator Exchange risk) with ExamGhost. Solve live Canvas & Blackboard questions in 0.3s with 50 Free Solves.",
        url: "https://examghost.com/coursehero-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Course Hero vs ExamGhost (2026) — $39.99 PDFs vs 0.3s AI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Course Hero vs ExamGhost (2026) — $39.99 PDFs vs 0.3s AI",
        description: "Compare Course Hero ($39.99/mo unlock caps & Educator Exchange risk) with ExamGhost. Solve live Canvas & Blackboard questions in 0.3s with 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function CourseheroVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-08",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/coursehero-vs-examghost#webpage",
                "url": "https://examghost.com/coursehero-vs-examghost",
                "name": "Course Hero vs ExamGhost (2026) | $39.99/mo Blurred PDFs vs 0.3s Live Canvas Exam Solver",
                "description": "Comparison of Course Hero (coursehero.com & Course Hero: AI Study Assistant extension) vs ExamGhost across $39.99/mo unlock caps, Sift/FullStory tracking, Educator Exchange flags, and 4-Layer Focus Shield.",
                "breadcrumb": {
                    "@id": "https://examghost.com/coursehero-vs-examghost#breadcrumb"
                },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Free Trial (50 Solves)",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Monthly Pass",
                                "price": "19.00",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Academic Year Pass",
                                "price": "99.00",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Lifetime Degree Pass",
                                "price": "199.00",
                                "priceCurrency": "USD"
                            }
                        ]
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "Course Hero",
                        "url": "https://www.coursehero.com",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web Application, iOS, Android, Chrome Extension",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Course Hero Monthly",
                                "price": "39.99",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Course Hero Quarterly (per month equivalent)",
                                "price": "19.95",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Course Hero Annual (billed $119.40/yr)",
                                "price": "9.95",
                                "priceCurrency": "USD"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/coursehero-vs-examghost#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://examghost.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Compare Extensions",
                        "item": "https://examghost.com/compare-canvas-hack-extensions"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Course Hero vs ExamGhost",
                        "item": "https://examghost.com/coursehero-vs-examghost"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/coursehero-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does the Course Hero: AI Study Assistant Chrome extension protect against Canvas Quiz Logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Course Hero's official Chrome extension ('Course Hero: AI Study Assistant') is built for summarizing YouTube videos, working in Google Docs, and querying Course Hero's 184M document library. It does not include a Canvas window.blur or visibilitychange Focus Shield, nor does it isolate its UI inside a closed Shadow DOM. Clicking into the Course Hero extension or switching tabs to unblur a document on coursehero.com immediately triggers focus-loss events in Canvas Quiz Logs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What tracking scripts and Educator Exchange flags run on coursehero.com?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In our 2026 source audit of https://www.coursehero.com, the live page loads Sift device/fraud fingerprinting (cdn.sift.com/s.js, account 84e77b3dea), FullStory session recording triggers (window.__CH_FULLSTORY_DATA and window.attemptSessionRecording), Amplitude analytics, Google Tag Manager (gtm.coursehero.com), and explicit user-state flags for verified faculty (isVerifiedEducator and hasAccessToEducatorExchange). Uploading a professor's live exam or posting course-tagged questions on Course Hero creates an indexed, permanent record visible to verified educators."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does Course Hero cost in 2026 compared to ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Course Hero charges ~$39.99/month for its Month-to-Month plan, ~$19.95/month billed quarterly ($59.85 every 3 months), or ~$9.95/month billed annually ($119.40/year), and rations paid members to monthly Document Unlocks (~30/mo) and Tutor Credits (10–40 questions). ExamGhost gives every student 50 Free Question Solves ($0, no credit card, no document upload required), followed by $19/month (52% cheaper than Course Hero monthly), $99/year Academic Year Pass ($8.25/mo, cheaper than Course Hero's $119.40/yr plan), or a $199 one-time Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why do Course Hero document unlocks often waste time during a timed college exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Course Hero blurs the body of its 184M uploaded documents until you spend a Document Unlock. During a timed exam, students frequently spend an unlock on a promising syllabus or old quiz PDF only to discover that the uploaded file has blank answers, wrong student guesses, or questions from a different textbook edition. ExamGhost solves your exact live question and diagram on the spot in 0.3 seconds."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-mint/40 selection:text-ink">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-semibold">Course Hero vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: The $39.99/mo Blurred PDF Lottery vs 0.3s Live In-Tab Solver */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#dbeafe] via-[#e2f5ea] to-[#cdeecb] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-black/10 text-xs font-bold text-ink">
                                <FileText className="w-3.5 h-3.5 text-blue-700" />
                                <span>2026 Head-to-Head · $39.99/mo Blurred PDFs vs 0.3s Live Exam Solver</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-100 text-[11px] font-bold uppercase tracking-wider">
                                Save 52% Monthly · Zero Document Uploads
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Stop paying $39.99/mo to unblur blank PDFs.{' '}
                                    <span className="underline decoration-emerald-700/40 decoration-wavy underline-offset-4">
                                        Solve live exams in 0.3s.
                                    </span>
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-6 max-w-2xl">
                                    Everyone knows the Course Hero trap: you find a matching document on Google, hit a blurred paywall that demands <strong>$39.99/month</strong> (or forces you to upload 10 personal study files), and when you finally spend an unlock, the PDF is blank or has wrong student guesses. ExamGhost solves the exact question on your screen in <strong>0.3 seconds</strong>—starting with <strong>50 Free Solves ($0)</strong>.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Free Access</div>
                                        <div className="font-display font-extrabold text-base text-ink">50 Free Solves</div>
                                        <div className="text-[11px] text-ink-muted">vs &quot;Upload 10 Docs&quot; wall</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Monthly Price</div>
                                        <div className="font-display font-extrabold text-base text-ink">$19/mo Unlimited</div>
                                        <div className="text-[11px] text-ink-muted">vs $39.99/mo (30 unlocks)</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Honor Code Safety</div>
                                        <div className="font-display font-extrabold text-base text-ink">0 Paper Trail</div>
                                        <div className="text-[11px] text-ink-muted">vs Educator Exchange logs</div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#cdeecb]" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 · No Uploads)</span>
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

                            {/* Right Column: Visual "Unblur Document Lottery" vs ExamGhost 0.3s Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#141824] text-white p-6 sm:p-7 border border-black/20 shadow-lift">
                                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                        <div>
                                            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-300">
                                                Real Midterm Comparison
                                            </div>
                                            <div className="font-display font-bold text-lg text-white mt-0.5">
                                                The &quot;Document Unlock&quot; Gamble
                                            </div>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-mono font-bold">
                                            $39.99/mo
                                        </span>
                                    </div>

                                    {/* Course Hero Blurred Card */}
                                    <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-500/30 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-xs text-rose-200">1. Course Hero: Spend 1 of 30 Unlocks</span>
                                            <span className="text-[10px] font-mono text-rose-300 uppercase font-bold">Tab Switch Logged</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-white/80 space-y-1.5 mb-2">
                                            <div>BUSA_302_Midterm_Review_Final.pdf</div>
                                            <div className="text-rose-300">
                                                → Unblurred Result: Blank study guide with no answers filled in (Unlock wasted)
                                            </div>
                                        </div>
                                        <div className="text-[11px] text-rose-200/90">
                                            ⚠️ Worse: Uploading your exam creates a permanent record visible to <code>isVerifiedEducator</code> faculty accounts.
                                        </div>
                                    </div>

                                    {/* ExamGhost Instant Solve Card */}
                                    <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-xs text-emerald-200">2. ExamGhost: Double-Click In-Tab</span>
                                            <span className="text-[10px] font-mono text-emerald-300 uppercase font-bold">0.3s · 0 Blur Flags</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-emerald-200 space-y-1 mb-2">
                                            <div>✓ Solves the exact question on your screen</div>
                                            <div>✓ Auto-selects or highlights the right choice</div>
                                        </div>
                                        <div className="text-[11px] text-emerald-200/90">
                                            ✓ Ephemeral compute: Your exam questions are never uploaded or indexed on a public site.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB COMPARISON SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-950 mb-3">
                            <Sparkles className="w-3.5 h-3.5" />
                            Interactive Breakdown · Click Any Tab to Compare
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            3 Reasons Students Ditch Course Hero for ExamGhost
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Compare how Course Hero and ExamGhost handle live exam accuracy, faculty Honor Code investigations, and monthly pricing.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <input type="radio" name="ch_tabs" id="ch-unlocks" className="sr-only peer/unlocks" defaultChecked />
                        <input type="radio" name="ch_tabs" id="ch-educator" className="sr-only peer/educator" />
                        <input type="radio" name="ch_tabs" id="ch-pricing" className="sr-only peer/pricing" />

                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f5f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="ch-unlocks"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/unlocks:bg-ink peer-checked/unlocks:text-white peer-checked/unlocks:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Upload className="w-4 h-4" />
                                <span>1. PDF Unlocks vs 0.3s Live AI</span>
                            </label>
                            <label
                                htmlFor="ch-educator"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/educator:bg-ink peer-checked/educator:text-white peer-checked/educator:shadow-sm flex items-center justify-center gap-2"
                            >
                                <UserCheck className="w-4 h-4" />
                                <span>2. Faculty &amp; Sift Tracking Risk</span>
                            </label>
                            <label
                                htmlFor="ch-pricing"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/pricing:bg-ink peer-checked/pricing:text-white peer-checked/pricing:shadow-sm flex items-center justify-center gap-2"
                            >
                                <DollarSign className="w-4 h-4" />
                                <span>3. $39.99/mo vs $19/mo &amp; $99/yr</span>
                            </label>
                        </div>

                        {/* TAB 1: UNLOCKS VS LIVE AI */}
                        <div className="hidden peer-checked/unlocks:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">Course Hero Workflow</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Static 2021 PDFs &amp; Zero Canvas Focus Protection
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Forced to Upload 10 Docs or Pay $39.99:</strong> Free users cannot read a single full solution without uploading 10 study documents and waiting for moderation.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>No Canvas Focus Shield:</strong> Using the <em>Course Hero: AI Study Assistant</em> extension (built for YouTube &amp; Google Docs) or switching tabs to <code>coursehero.com</code> immediately logs <code>window.blur</code> in SpeedGrader.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Useless on Randomized STEM:</strong> Static uploaded PDFs cannot calculate answers when your professor changes the numbers or embeds a locked graph.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">ExamGhost Workflow</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Instant 0.3s Double-Click Solve Inside Your Exam Tab
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>50 Free Solves ($0 · Zero Document Uploads):</strong> Test full STEM &amp; vision accuracy immediately without uploading a single PDF or entering a credit card.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>4-Layer Focus Shield:</strong> Stay inside Canvas, Blackboard, or McGraw-Hill with zero tab switches and zero SpeedGrader blur flags.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Snap-It Vision (`⌘+Shift+S`):</strong> Crops any locked graph, table, or equation on screen and returns the exact answer in 0.3s.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: FACULTY & SIFT TRACKING */}
                        <div className="hidden peer-checked/educator:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">Course Hero Honor Code Risk</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Educator Exchange Accounts + Sift &amp; FullStory Recording
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Never upload a live exam or ask a tutor question tagged with your course code on Course Hero. Our live inspection of <code>coursehero.com</code> confirmed:
                                    </p>
                                    <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                                        <li>• <strong>Verified Faculty Portal:</strong> Course Hero actively tracks <code>isVerifiedEducator</code> and <code>hasAccessToEducatorExchange</code> flags for professors monitoring their course codes.</li>
                                        <li>• <strong>Device &amp; Session Fingerprinting:</strong> Loads Sift Science fraud fingerprinting (<code>cdn.sift.com/s.js</code>) and FullStory session recording (<code>attemptSessionRecording</code>) on every visit.</li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">ExamGhost Privacy Guarantee</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Zero Public Indexing · Zero University Tags · Ephemeral Solves
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never publishes, indexes, or stores your exam questions in a public database:
                                    </p>
                                    <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                                        <li>• <strong>No Public URL Created:</strong> Your professor can never search Google or an &quot;Educator Exchange&quot; to see that a question was solved.</li>
                                        <li>• <strong>Zero Session Recording:</strong> No Sift, no FullStory, and no third-party behavioral ad trackers.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: PRICING */}
                        <div className="hidden peer-checked/pricing:block">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-mono uppercase text-rose-900 font-bold mb-1">Course Hero Monthly</div>
                                    <div className="font-display text-3xl font-extrabold text-ink mb-1">$39.99<span className="text-sm font-normal text-ink-muted">/mo</span></div>
                                    <div className="text-xs text-rose-800 font-semibold mb-4">Equals $479.88/yr billed monthly</div>
                                    <p className="text-xs text-ink-secondary leading-relaxed">
                                        More than double ExamGhost&apos;s monthly price, and still rations you to ~30 Document Unlocks and 10–40 Tutor Credits per month.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-[#faf8f4] border border-black/10">
                                    <div className="text-xs font-mono uppercase text-amber-900 font-bold mb-1">Course Hero Annual</div>
                                    <div className="font-display text-3xl font-extrabold text-ink mb-1">$119.40<span className="text-sm font-normal text-ink-muted">/yr</span></div>
                                    <div className="text-xs text-ink-muted mb-4">$9.95/mo billed upfront</div>
                                    <p className="text-xs text-ink-secondary leading-relaxed">
                                        Costs $20.40/yr more than ExamGhost&apos;s Academic Year Pass ($99/yr), with zero Canvas Focus Shield protection.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-950 text-white border border-emerald-700">
                                    <div className="text-xs font-mono uppercase text-[#cdeecb] font-bold mb-1">ExamGhost Unlimited Passes</div>
                                    <div className="font-display text-3xl font-extrabold text-white mb-1">$19<span className="text-sm font-normal text-white/75">/mo</span> · $99<span className="text-sm font-normal text-white/75">/yr</span></div>
                                    <div className="text-xs text-[#cdeecb] font-semibold mb-4">($8.25/mo annual) or $199 Lifetime</div>
                                    <p className="text-xs text-white/85 leading-relaxed">
                                        Start with 50 Free Solves ($0). All paid passes include unlimited solves, 4-Layer Focus Shield, and a 14-day 100% refund guarantee.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDE-BY-SIDE COMPARISON TABLE + COLLAPSIBLE SOURCE AUDIT */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                Course Hero vs ExamGhost: 2026 Feature &amp; Pricing Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-medium">Verified against coursehero.com</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Evaluation Criteria</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-emerald-950 bg-[#cdeecb]/40">ExamGhost</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">Course Hero (coursehero.com)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Core Architecture</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">0.3s Live In-Tab AI + STEM Vision OCR</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">184M Blurred PDF Library + Tutor Queue</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Free Trial Policy</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves ($0 · No Uploads · No Card)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Blurred Docs (Must Upload 10+ Files to Unlock)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Month-to-Month Price</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">$19/mo (Unlimited Solves · Save 52%)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">~$39.99/mo (Rationed to ~30 Unlocks/mo)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Annual &amp; Lifetime Pricing</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">$99/yr ($8.25/mo) or $199 Lifetime</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">~$119.40/yr ($9.95/mo) · No Lifetime Plan</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Canvas Quiz Log Protection</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">4-Layer Focus Shield (0 Blur Flags)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None (Extension &amp; Tab Switches Log Blur)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Academic Paper Trail Risk</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Zero (Never Indexes Your Exam Questions)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">High (Educator Exchange + Sift Fingerprinting)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Source Audit Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-xs sm:text-sm font-bold text-ink hover:bg-[#f2ede4] transition-colors">
                                <div className="flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-emerald-800" />
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical HTML Source &amp; Telemetry Audit (coursehero.com)</h3>
                                </div>
                                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs text-ink-secondary space-y-2.5 border-t border-black/5 bg-white">
                                <p className="leading-relaxed">
                                    <strong>Telemetry &amp; Educator Flags:</strong> Live inspection of <code>https://www.coursehero.com</code> (owned by Learneo alongside QuillBot, Symbolab, and Cram.com) confirms Sift Science fraud fingerprinting (<code>cdn.sift.com/s.js</code>, account <code>84e77b3dea</code>), FullStory session recording (<code>window.__CH_FULLSTORY_DATA</code> and <code>window.attemptSessionRecording</code>), Amplitude analytics, Google Tag Manager (<code>gtm.coursehero.com</code>), and explicit faculty flags (<code>window.__CH_PERSON.isVerifiedEducator</code> and <code>hasAccessToEducatorExchange</code>).
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Static Document Ratio:</strong> Under <em>&quot;Explore materials from top schools nearby,&quot;</em> Course Hero&apos;s SSR HTML renders school badges such as <code>Liberty University: 660K Documents 0 Questions</code>, <code>Grand Canyon University: 604K Documents 0 Questions</code>, and <code>Ashford University: 420K Documents 0 Questions</code>.
                                </p>
                            </div>
                        </details>
                    </div>
                </section>

                {/* FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-ink-muted">
                            Everything students ask when comparing Course Hero and ExamGhost.
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

                {/* BESPOKE CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#dbeafe] via-[#e2f5ea] to-[#cdeecb] p-8 sm:p-10 border border-black/10 shadow-card mb-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>No Document Uploads · Save 52% Monthly · 50 Free Solves</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                    Done wasting unlocks on blank Course Hero PDFs?
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Solve your exact Canvas, Blackboard, or McGraw-Hill question live in 0.3 seconds. Start free with 50 solves ($0, no credit card, zero uploads).
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#cdeecb]" />
                                    <span>Claim 50 Free Solves</span>
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
                        <Link prefetch={false} href="/brainly-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Brainly vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Forum answers vs 0.3s live AI</div>
                        </Link>
                        <Link prefetch={false} href="/homeworkify-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Homeworkify vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Shutdown notice &amp; safe alternative</div>
                        </Link>
                        <Link prefetch={false} href="/coursology-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Coursology vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Study suite vs exam stealth</div>
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
