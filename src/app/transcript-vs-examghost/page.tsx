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
    BookOpen,
    MousePointerClick,
    Mic
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Transcript AI vs ExamGhost (2026) — DOM & Blur Audit",
    },
    description: "Compare Transcript (transcript.study) with ExamGhost. Both support course note uploads, but Transcript injects 'The Button' in the DOM and lacks Focus Shield.",
    alternates: {
        canonical: "https://examghost.com/transcript-vs-examghost",
    },
    openGraph: {
        title: "Transcript AI vs ExamGhost (2026) — 'The Button' DOM & Notebook Audit",
        description: "Compare Transcript (transcript.study) with ExamGhost. Both support course note uploads, but Transcript injects 'The Button' into the DOM and lacks Focus Shield blur protection.",
        url: "https://examghost.com/transcript-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Transcript AI vs ExamGhost (2026) — 'The Button' DOM & Notebook Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Transcript AI vs ExamGhost (2026) — 'The Button' DOM & Notebook Audit",
        description: "Compare Transcript (transcript.study) with ExamGhost. Both support course note uploads, but Transcript injects 'The Button' into the DOM and lacks Focus Shield blur protection.",
        images: ["/og-image.jpg"],
    },
};

export default function TranscriptComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-12",
                "dateModified": "2026-03-10",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/transcript-vs-examghost#webpage",
                "url": "https://examghost.com/transcript-vs-examghost",
                "name": "Transcript AI vs ExamGhost (2026 Review) | 'The Button' DOM Injection vs Closed Shadow DOM RAG",
                "description": "Technical evaluation comparing Transcript - AI Homework Helper (transcript.study, Chrome ID klknhfgkblobpfimidmhkclikdalnoke) and ExamGhost across Notebook RAG context, DOM button injection, and Canvas SpeedGrader stealth.",
                "breadcrumb": { "@id": "https://examghost.com/transcript-vs-examghost#breadcrumb" },
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
                        "name": "Transcript - AI Homework Helper",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, iOS, Android",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "14.99",
                            "priceCurrency": "USD",
                            "offerCount": "2"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/transcript-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Transcript AI vs ExamGhost", "item": "https://examghost.com/transcript-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/transcript-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Canvas detect Transcript AI's 'The Button' and Snapshot features?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Transcript (transcript.study, Chrome ID klknhfgkblobpfimidmhkclikdalnoke) relies on highlighting text to trigger 'The Button'—an injected floating helper button in the host page DOM—or opening an interactive AI Chat & Voice panel. Highlighting text and clicking into Transcript's overlay shifts focus away from the exam page and fires window.blur in Canvas SpeedGrader."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Transcript's 'Notebook' compare to ExamGhost's Course Materials Vault?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both tools allow you to upload lecture slides, PDFs, and class notes so the AI answers using your professor's exact curriculum. However, Transcript displays those answers inside a high-visibility sidebar/popup with zero tab-blur protection, whereas ExamGhost delivers context-grounded RAG answers inside an undetectable Closed Shadow DOM HUD or a 1px corner indicator dot."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if a Canvas quiz disables text highlighting while using Transcript?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Transcript's 'Text Selection & The Button' workflow fails when an instructor enables CSS user-select: none or blocks selection events. Students are forced to use Transcript's Cmd/Ctrl+Shift+1 Snapshot drag tool, which opens a visible screen-capture box without Focus Shield blur suppression. ExamGhost reads Canvas Classic and New Quizzes Shadow DOM automatically with zero highlighting required."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Transcript.study pricing compare to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Transcript charges a recurring $14.99/month subscription ($179.88/year, or $719.52 over a 4-year degree) with no one-time lifetime license. ExamGhost gives you 50 Free Solves upfront with no credit card required, plus $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-purple-200/60 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">Transcript AI vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: Course Materials RAG With vs Without Exam Stealth */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#e2d3fa] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-purple-950 text-[#e2d3fa] text-[11px] font-bold uppercase tracking-wider">
                                    Notebook RAG vs Shadow DOM Stealth Audit
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    transcript.study · ID: klknhfgkblobpfimidmhkclikdalnoke
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-ink">
                                100,000 Users · 4.7★ Chrome Store (342 Ratings)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/10 border border-purple-950/20 text-xs font-bold text-purple-950 mb-4">
                                    Injected &ldquo;The Button&rdquo; UI · Unshielded Snapshot · $14.99/mo Recurring
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Transcript has Notebook uploads—but zero Canvas SpeedGrader stealth.
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    <strong>Transcript (`transcript.study`)</strong> is a popular homework companion because its <em>Notebook</em> feature lets you upload class slides and notes. But during a live Canvas or Blackboard exam, Transcript relies on highlighting text to inject <strong>&ldquo;The Button&rdquo;</strong> directly into the page DOM and opens a visible AI Chat &amp; Voice panel—firing <code>window.blur</code> and leaving DOM traces.
                                </p>
                                <p className="text-sm sm:text-base text-purple-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost gives you the same lecture-grounded Course Materials RAG Vault—paired with a 100% Focus Shield blur interceptor, Closed Shadow DOM isolation, and 1px corner dot stealth, starting with <strong>50 Free Solves ($0, no credit card)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#e2d3fa]" aria-hidden="true" />
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

                            {/* Right Column: 3 Verbatim Transcript Architecture Trade-Offs */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-3.5">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                                            <FileWarning className="w-4 h-4 text-purple-700" />
                                            3 Transcript.study Exam Risks
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">transcript.study</span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-rose-800 mb-0.5">
                                            1. &ldquo;Text Selection &amp; The Button&rdquo; DOM Injection:
                                        </div>
                                        <p className="text-rose-950 font-semibold italic">
                                            &ldquo;Highlight any text on a webpage or platform, and click The Button to get step-by-step explanations.&rdquo;
                                        </p>
                                        <span className="text-[10px] text-rose-800 block mt-0.5">
                                            → Injects a floating button into the host DOM &amp; logs selection/blur
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-amber-900 mb-0.5">
                                            2. Unshielded Snapshot (Cmd/Ctrl+Shift+1) &amp; Chat Sidebar:
                                        </div>
                                        <p className="text-amber-950 font-semibold italic">
                                            &ldquo;Opens an interactive AI Chat &amp; Voice panel with zero window.blur or visibilitychange interception.&rdquo;
                                        </p>
                                        <span className="text-[10px] text-amber-800 block mt-0.5">
                                            → Every click into the Transcript chat panel flags SpeedGrader
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-300 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-slate-800 mb-0.5">
                                            3. Recurring $14.99/mo Subscription (No Lifetime Pass):
                                        </div>
                                        <p className="text-slate-900 font-semibold italic">
                                            &ldquo;$14.99/month ($179.88/year) ongoing subscription vs ExamGhost&apos;s $99/yr ($8.25/mo) or $199 Lifetime.&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Course Notes / Syllabus RAG</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Local-First Vault</span>
                                <span className="text-ink-muted block text-[10px] mt-0.5">Transcript: Cloud Notebook</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">In-Page Stealth Mode</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Closed Shadow DOM + 1px Dot</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Transcript: Injects &ldquo;The Button&rdquo; + Sidebar</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Focus / Blur Suppression</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 100% Focus Shield</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Transcript: None (Logs panel clicks)</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Academic Year Cost</span>
                                <span className="font-bold text-emerald-800">ExamGhost: $99/yr ($8.25/mo)</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Transcript: $179.88/yr ($14.99/mo)</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB TRANSCRIPT VS EXAMGHOST SWITCHER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive Transcript Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Side-by-Side Architecture Audit
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                How ExamGhost Upgrades Transcript&apos;s Study Workflow for Live Exams
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Compare how both extensions handle course material uploads, question extraction, and Canvas SpeedGrader anti-detection.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="tr_tabs" id="tr_button" className="sr-only peer/trbutton" defaultChecked />
                        <input type="radio" name="tr_tabs" id="tr_notebook" className="sr-only peer/trnotebook" />
                        <input type="radio" name="tr_tabs" id="tr_snapshot" className="sr-only peer/trsnapshot" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f5effd] border border-purple-950/10 mb-8">
                            <label
                                htmlFor="tr_button"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/trbutton:bg-ink peer-checked/trbutton:text-white peer-checked/trbutton:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. &ldquo;The Button&rdquo; vs Closed Shadow DOM</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Text highlighting vs Zero-click stealth</div>
                            </label>
                            <label
                                htmlFor="tr_notebook"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/trnotebook:bg-ink peer-checked/trnotebook:text-white peer-checked/trnotebook:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. Notebook vs Stealth RAG Vault</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Sidebar chat vs 1px Dot / Shadow HUD</div>
                            </label>
                            <label
                                htmlFor="tr_snapshot"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/trsnapshot:bg-ink peer-checked/trsnapshot:text-white peer-checked/trsnapshot:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. Snapshot Blur vs Focus Shield</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Cmd+Shift+1 vs ⌘+Shift+S Snap-It</div>
                            </label>
                        </div>

                        {/* TAB 1: The Button vs Closed Shadow DOM */}
                        <div className="hidden peer-checked/trbutton:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <MousePointerClick className="w-3.5 h-3.5" />
                                        Transcript AI: Highlight Text → Click &ldquo;The Button&rdquo;
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Highlighting every question and clicking an injected DOM button
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Transcript&apos;s core browser interaction requires you to drag-select the question text on the page, wait for <strong>&ldquo;The Button&rdquo;</strong> to inject into the webpage DOM next to your cursor, and click it to open the Transcript explanation panel.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        During a live quiz, dragging across question text triggers <code>selectionchange</code> events, fails completely on locked pages with <code>user-select: none</code>, and mutates the host DOM tree with injected button markup.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Footprint: Selection events + injected &ldquo;The Button&rdquo; DOM node
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: Zero-Click Extraction + 5-Level Chameleon Stealth
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        No text highlighting. No injected buttons in the host DOM.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost automatically parses Canvas Classic, Canvas New Quizzes (LTI Shadow DOM), Blackboard, and Moodle questions without requiring you to highlight a single word.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Closed Shadow DOM v1:</strong> Host page scripts (`document.querySelectorAll`) return zero ExamGhost elements.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>5 Stealth Levels:</strong> Switch between a 1px corner pixel cue, single radio tick, or adjustable-opacity Ghost HUD.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Footprint: 0 Host DOM Buttons · 0 Selection Events
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: Notebook vs Stealth RAG Vault */}
                        <div className="hidden peer-checked/trnotebook:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Mic className="w-3.5 h-3.5" />
                                        Transcript AI: Cloud Notebook + High-Visibility Chat/Voice UI
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Great for homework studying—risky during a timed midterm
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Transcript&apos;s <strong>Notebook</strong> lets you upload lecture slides and notes so the AI references your course content. However, to read those answers or ask follow-ups, you must interact with Transcript&apos;s full-size <strong>AI Chat &amp; Voice panel</strong>.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Clicking into that chat widget shifts browser focus out of the Canvas quiz window, logging <em>&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</em> in SpeedGrader.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Delivery: High-visibility Chat &amp; Voice sidebar (Unshielded blur)
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <BookOpen className="w-3.5 h-3.5" />
                                        ExamGhost: Course Materials RAG Inside a Stealth Shadow HUD
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Your professor&apos;s exact lecture slides—delivered with zero blur flags
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Upload your course PDFs, study guides, and lecture slides into ExamGhost&apos;s <strong>Course Materials RAG Vault</strong> before your exam. During the test, ExamGhost cross-references your professor&apos;s exact definitions with multi-model AI consensus and displays the answer silently inside our Closed Shadow DOM HUD or 1px corner dot—with zero focus loss.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Delivery: Grounded RAG Answers + 100% Focus Shield Protection
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Snapshot Blur vs Focus Shield */}
                        <div className="hidden peer-checked/trsnapshot:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <AlertTriangle className="w-3.5 h-3.5" />
                                        Transcript AI: Unshielded Snapshot &amp; $14.99/mo Subscription
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        $179.88/year recurring cost with no anti-detection layer
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        When you press <code>Cmd/Ctrl+Shift+1</code> for Transcript&apos;s <em>Scan and Solve (Snapshot)</em>, it injects a drag-selection overlay into the active page without blocking <code>window.blur</code>, <code>focusout</code>, or <code>visibilitychange</code>.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Meanwhile, Transcript bills <strong>$14.99 every month ($179.88/year)</strong> with no discounted academic-year pass or one-time lifetime option.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Cost: $14.99/mo ($179.88/yr) · No Focus Shield · No Panic Hotkey
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: ⌘+Shift+S Snap-It + $8.25/mo Academic Pass
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        In-memory OCR with Focus Shield + 50 Free Solves upfront
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost&apos;s <code>⌘+Shift+S</code> Snap-It captures graphs, circuits, and organic chemistry structures inside a Closed Shadow DOM sandbox while keeping Focus Shield locked on.
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
                                    Cost: 50 Free Solves · $99/yr ($8.25/mo) · $199 Lifetime
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
                                Transcript AI vs ExamGhost in Canvas SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                What your instructor sees when you highlight text to click Transcript&apos;s &ldquo;The Button&rdquo; vs running ExamGhost&apos;s Closed Shadow DOM HUD.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Transcript Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>Transcript AI (&ldquo;The Button&rdquo; + Chat Panel)</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">13:20:01 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        13:20:22 — Text selection + injected &ldquo;The Button&rdquo; DOM node
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Highlighting Question 1 mutates host page DOM</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        13:20:26 — Stopped viewing the Canvas quiz (0:31)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Student clicked into Transcript AI Chat / Notebook panel</span>
                                    </div>
                                    <div className="text-slate-300">13:20:57 — Resumed viewing quiz</div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield + RAG Vault)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">13:20:01 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        13:20:44 — Answered Question 1 (Grounded in Lecture Slides RAG)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Zero text highlighting · Closed Shadow DOM · 0 blur flags</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        13:21:28 — Answered Question 2 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Focus Shield active · 0 DOM mutations</span>
                                    </div>
                                    <div className="text-slate-300">13:22:10 — Answered Question 3</div>
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
                                Complete technical comparison between ExamGhost and Transcript - AI Homework Helper (transcript.study).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Transcript AI (transcript.study)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Window Blur Suppression)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (0 SpeedGrader flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ None (Chat &amp; Voice panel logs blur)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">DOM Isolation &amp; Stealth UI</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Closed Shadow DOM + 1px Corner Dot</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Injects &ldquo;The Button&rdquo; on text selection</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Course Notes &amp; Lecture Slides (RAG)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Local-First Course Materials Vault</td>
                                        <td className="py-3.5 px-4 text-ink-muted">✓ Cloud &ldquo;Notebook&rdquo; upload space</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Works Without Highlighting Text</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Automatic Zero-Click LMS Parsing</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Requires highlighting text or manual drag</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Emergency Panic Wipe Hotkey</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+U Instantly Wipes RAM</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ None</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves (No card required)</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Limited trial queries</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing &amp; Academic Value</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">$14.99/mo ($179.88/yr · No Lifetime option)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (Transcript AI)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID &amp; Developer:</span>
                                    Transcript - AI Homework Helper (<code>klknhfgkblobpfimidmhkclikdalnoke</code> · Transcript Technologies Inc.)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Store Footprint &amp; Rating:</span>
                                    100,000 users · 4.7★ (342 ratings) · Domain: <code>transcript.study</code>
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Primary Interaction Mechanics:</span>
                                    &ldquo;Text Selection &amp; The Button&rdquo; (DOM injection) + &ldquo;Scan and Solve (Snapshot)&rdquo; (<code>Cmd/Ctrl+Shift+1</code>)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Exam Telemetry Vulnerability:</span>
                                    No <code>window.blur</code> or <code>visibilitychange</code> interception when interacting with AI Chat / Voice / Notebook
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#e2d3fa]/45 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I loved Transcript&apos;s Notebook feature for uploading my bio slides, but on actual Canvas quizzes I had to highlight every question to make &lsquo;The Button&rsquo; pop up, and clicking into the Transcript chat window logged tab-switch events in SpeedGrader. ExamGhost lets me upload my exact same lecture PDFs, but delivers the answer inside a 1px stealth dot with zero Canvas blur logs.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-900 text-white font-bold flex items-center justify-center text-sm">
                                AN
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Avery N.</div>
                                <div className="text-xs text-ink-muted">Molecular Biology · University of Washington</div>
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
                            Frequently Asked Questions: Transcript AI vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Can Canvas detect Transcript AI&apos;s &ldquo;The Button&rdquo; and Snapshot features?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Yes. Transcript (<code>transcript.study</code>, Chrome ID <code>klknhfgkblobpfimidmhkclikdalnoke</code>) relies on highlighting text to trigger &ldquo;The Button&rdquo;—an injected floating helper button in the host page DOM—or opening an interactive AI Chat &amp; Voice panel. Highlighting text and clicking into Transcript&apos;s overlay shifts focus away from the exam page and fires <code>window.blur</code> in Canvas SpeedGrader.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does Transcript&apos;s &ldquo;Notebook&rdquo; compare to ExamGhost&apos;s Course Materials Vault?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Both tools allow you to upload lecture slides, PDFs, and class notes so the AI answers using your professor&apos;s exact curriculum. However, Transcript displays those answers inside a high-visibility sidebar/popup with zero tab-blur protection, whereas ExamGhost delivers context-grounded RAG answers inside an undetectable Closed Shadow DOM HUD or a 1px corner indicator dot.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What happens if a Canvas quiz disables text highlighting while using Transcript?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Transcript&apos;s &ldquo;Text Selection &amp; The Button&rdquo; workflow fails when an instructor enables CSS <code>user-select: none</code> or blocks selection events. Students are forced to use Transcript&apos;s <code>Cmd/Ctrl+Shift+1</code> Snapshot drag tool, which opens a visible screen-capture box without Focus Shield blur suppression. ExamGhost reads Canvas Classic and New Quizzes Shadow DOM automatically with zero highlighting required.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does Transcript.study pricing compare to ExamGhost in 2026?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Transcript charges a recurring <strong>$14.99/month</strong> subscription ($179.88/year, or $719.52 over a 4-year degree) with no one-time lifetime license. ExamGhost gives you <strong>50 Free Solves</strong> upfront with no credit card required, plus <strong>$19/mo</strong> Monthly, <strong>$99/yr</strong> Academic Year ($8.25/mo), or <strong>$199 Lifetime</strong>.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#e2d3fa] via-[#efe7fc] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-purple-950 uppercase tracking-wider mb-2">
                                    Course Materials RAG + Closed Shadow DOM Stealth
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Keep your lecture-slide context. Lose &ldquo;The Button&rdquo; and SpeedGrader flags.
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
                                    <FaChrome className="w-4 h-4 text-[#e2d3fa]" aria-hidden="true" />
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
                                <Link prefetch={false} href="/apexvision-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Apex Vision vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/asksia-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>AskSia vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/collegetools-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>College Tools vs ExamGhost</span>
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
