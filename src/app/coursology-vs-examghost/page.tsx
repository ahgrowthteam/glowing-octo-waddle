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
    Lock,
    CheckCircle2,
    EyeOff,
    Headphones,
    FileText,
    Layers,
    Camera,
    MousePointerClick,
    Terminal,
    KeyRound,
    Eye
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Coursology vs ExamGhost (2026) — Podcasts vs Stealth HUD",
    },
    description: "Compare Coursology with ExamGhost in 2026. Trade visible sidebar overlays for a 0.3s closed Shadow DOM quiz solver, Focus Shield stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/coursology-vs-examghost",
    },
    openGraph: {
        title: "Coursology vs ExamGhost (2026) — Podcasts vs Stealth HUD",
        description: "Compare Coursology with ExamGhost in 2026. Trade visible sidebar overlays for a 0.3s closed Shadow DOM quiz solver, Focus Shield stealth & 50 Free Solves.",
        url: "https://examghost.com/coursology-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Coursology vs ExamGhost (2026) — Podcasts vs Stealth HUD",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Coursology vs ExamGhost (2026) — Podcasts vs Stealth HUD",
        description: "Compare Coursology with ExamGhost in 2026. Trade visible sidebar overlays for a 0.3s closed Shadow DOM quiz solver, Focus Shield stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function CoursologyVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-18",
                "dateModified": "2026-03-15",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/coursology-vs-examghost#webpage",
                "url": "https://examghost.com/coursology-vs-examghost",
                "name": "Coursology vs ExamGhost (2026 Comparison) | Study Podcasts vs Invisible 0.3s Quiz Solver",
                "description": "Technical and workflow comparison between Coursology (coursology.com) and ExamGhost for Canvas, Blackboard, Moodle, and D2L Brightspace assessments.",
                "breadcrumb": { "@id": "https://examghost.com/coursology-vs-examghost#breadcrumb" },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                        "offers": [
                            { "@type": "Offer", "name": "Free Trial (50 Solves)", "price": "0", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Monthly Pass", "price": "19.00", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Academic Year Pass", "price": "99.00", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Lifetime Degree Pass", "price": "199.00", "priceCurrency": "USD" }
                        ]
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "Coursology",
                        "url": "https://coursology.com",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, iOS, Android, Web"
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/coursology-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Coursology vs ExamGhost", "item": "https://examghost.com/coursology-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/coursology-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the main difference between Coursology and ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Coursology (coursology.com) is a broad coursework and study app built around uploading class slides to generate 'Coursey' AI podcasts, flashcards, lecture transcriptions, and humanized discussion board drafts. ExamGhost is a specialized, screen-share-safe exam and quiz solver engineered specifically for timed assessments on Canvas, Blackboard, Moodle, and D2L, operating inside a closed Shadow DOM with Focus Shield blur protection."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can Canvas SpeedGrader detect Coursology's Chrome extension during a timed quiz?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Coursology's 'Find Answers on Chrome' and 'Snapshot' tools inject visible answer cards (including 'Rate us' and 'Explanation' boxes) directly into the host page DOM and do not intercept window.blur or visibilitychange telemetry when interacting with external popups. ExamGhost renders exclusively inside a closed Shadow DOM root and uses Focus Shield to neutralize window.blur and tab-switch logs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Coursology pricing compare to ExamGhost pricing?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Coursology requires a recurring subscription (~$19.99–$24.99/mo) to unlock unlimited Chrome answers, discussion drafting, and AI humanizer credits. ExamGhost lets you test 50 Free Question Solves immediately with no credit card required, and offers transparent plans: $19/month (Midterm Sprint), $99/year ($8.25/mo Academic Year Pass), or $199 one-time for the Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Should I use Coursology and ExamGhost for different parts of my semester?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. If you want to turn recorded Panopto lectures into commuter podcasts or draft cited essays with JSTOR links, Coursology's web dashboard is built for that. When taking live, timed quizzes or midterms on Canvas Classic, Canvas New Quizzes (LTI 1.3), Blackboard, or McGraw-Hill Connect, ExamGhost's double-click inline solver and Snap-It OCR keep your SpeedGrader activity logs 100% clean."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-mint selection:text-ink font-sans">
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
                        <span className="text-ink font-bold">Coursology vs ExamGhost</span>
                    </nav>
                </div>

                {/* ============================================================
                    UNIQUE HERO: VISUAL SCREEN SIMULATION (INJECTED CARD VS STEALTH)
                ============================================================ */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-white border border-black/10 p-6 sm:p-10 md:p-14 shadow-card relative overflow-hidden">
                        
                        {/* Top Eyebrow Strip */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9ecff] border border-indigo-200 text-indigo-950 text-xs font-bold">
                                <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
                                <span>2026 Workflow Comparison · Open Study App vs Stealth Exam Engine</span>
                            </div>
                            <span className="text-xs font-semibold text-ink-muted">
                                Updated 2026
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-10 items-center">
                            
                            {/* Left 7 Columns */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.08] mb-6">
                                    Coursology builds lecture podcasts. <span className="text-emerald-800">ExamGhost solves live exams invisibly.</span>
                                </h1>

                                <p className="aeo-summary text-base sm:text-lg text-ink-secondary leading-relaxed mb-5">
                                    <strong>Coursology</strong> has evolved into a broad study platform for turning lecture slides into <em>Coursey</em> audio podcasts and drafting discussion posts. However, during a timed quiz, its Chrome extension injects a <strong>bright, visible answer card with a &ldquo;Rate us&rdquo; button</strong> directly into your exam HTML—without blocking <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded">window.blur</code> logs.
                                </p>

                                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-8">
                                    <strong>ExamGhost</strong> is built strictly for live, timed assessments. Double-click any question to auto-fill, highlight, or copy the answer in <strong>0.3 seconds</strong> inside a closed Shadow DOM with <strong>Focus Shield</strong> blur immunity.
                                </p>

                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-7">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm sm:text-base font-bold shadow-lift inline-flex items-center justify-center gap-2.5 group"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#cdeecb]" aria-hidden="true" />
                                        <span>Try 50 Free Solves (No Card Needed)</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-[#faf8f4] hover:bg-[#f1ede4] text-ink border border-black/15 inline-flex items-center justify-center gap-2 transition-all"
                                    >
                                        <MousePointerClick className="w-4 h-4 text-emerald-700" />
                                        <span>Test Live Canvas Sandbox</span>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-ink-secondary">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>Zero Injected &ldquo;Rate Us&rdquo; Cards</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>3 Display Modes (Invisible, Stealth, Explain)</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>⌘+Shift+U Instant Panic Kill Key</span>
                                    </span>
                                </div>
                            </div>

                            {/* Right 5 Columns: Visual Mockup of What Your Screen Looks Like */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#faf8f5] border border-black/10 p-6 shadow-lift space-y-4">
                                    <div className="flex items-center justify-between pb-3 border-b border-black/10">
                                        <span className="font-display font-extrabold text-sm text-ink">
                                            What Shows on Your Laptop in Class
                                        </span>
                                        <span className="text-[11px] font-bold text-ink-muted">Visual Footprint</span>
                                    </div>

                                    {/* Coursology Visual Mockup */}
                                    <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-sm">
                                        <div className="flex items-center justify-between text-xs font-bold text-rose-800 mb-2">
                                            <span>Coursology Chrome Extension</span>
                                            <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 text-[10px]">Visible DOM Box</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs space-y-1.5">
                                            <div className="flex items-center justify-between font-bold text-indigo-950">
                                                <span>Coursology Answer: Option B</span>
                                                <span className="px-2 py-0.5 rounded bg-indigo-600 text-white text-[10px]">★ Rate us</span>
                                            </div>
                                            <div className="text-[11px] text-indigo-900/80">
                                                Explanation: According to Faraday&apos;s law of induction...
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-rose-800 mt-2 font-medium">
                                            ⚠️ Appended directly into quiz HTML—visible to anyone walking behind your desk.
                                        </p>
                                    </div>

                                    {/* ExamGhost Visual Mockup */}
                                    <div className="p-4 rounded-2xl bg-emerald-950 text-white border border-emerald-500 shadow-sm">
                                        <div className="flex items-center justify-between text-xs font-bold text-emerald-300 mb-2">
                                            <span>ExamGhost (Invisible / Stealth Mode)</span>
                                            <span className="px-2 py-0.5 rounded bg-emerald-800 text-white text-[10px]">0 DOM Nodes</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-xs space-y-2">
                                            <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                                                <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 bg-emerald-400 inline-block" />
                                                <span>Option B auto-selected in 0.3s (Zero popup)</span>
                                            </div>
                                            <div className="text-[11px] text-white/75">
                                                Or switch to <strong>Smart Highlight</strong> (subtle 4s glow) or <strong>Explain Mode</strong> (closed Shadow DOM).
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-emerald-300 mt-2 font-medium">
                                            ✓ 100% screen-share &amp; lecture-hall safe. Press ⌘+Shift+U to toggle off in 8ms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                {/* ============================================================
                    INTERACTIVE WORKFLOW TABS: QUIZ STEALTH VS STUDY SUITE
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <p className="eyebrow justify-center mb-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>DEEP-DIVE COMPARISON · CLICK ANY TAB</span>
                        </p>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            Homework convenience vs. live exam survival.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                            Explore how Coursology&apos;s 2026 coursework features compare against ExamGhost&apos;s dedicated assessment stealth engine.
                        </p>
                    </div>

                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <input type="radio" name="crs_tab" id="crs_stealth" className="sr-only peer/stealth" defaultChecked />
                        <input type="radio" name="crs_tab" id="crs_features" className="sr-only peer/features" />
                        <input type="radio" name="crs_tab" id="crs_logs" className="sr-only peer/logs" />

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#f3efea] border border-black/10 mb-8">
                            <label
                                htmlFor="crs_stealth"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/stealth:bg-ink peer-checked/stealth:text-white peer-checked/stealth:shadow-sm"
                            >
                                <EyeOff className="w-4 h-4" />
                                <span>1. Quiz Solving &amp; Display Modes</span>
                            </label>
                            <label
                                htmlFor="crs_logs"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/logs:bg-ink peer-checked/logs:text-white peer-checked/logs:shadow-sm"
                            >
                                <ShieldAlert className="w-4 h-4" />
                                <span>2. SpeedGrader Blur &amp; DOM Logs</span>
                            </label>
                            <label
                                htmlFor="crs_features"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/features:bg-ink peer-checked/features:text-white peer-checked/features:shadow-sm"
                            >
                                <Headphones className="w-4 h-4" />
                                <span>3. Podcasts &amp; Discussion Boards</span>
                            </label>
                        </div>

                        {/* TAB 1: QUIZ SOLVING & DISPLAY MODES */}
                        <div className="hidden peer-checked/stealth:block">
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="p-6 rounded-3xl bg-[#faf8f5] border border-black/10">
                                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center mb-4">
                                        <Eye className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        3 Stealth Display Modes vs 1 Fixed Banner
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed">
                                        Coursology always injects a high-contrast explanation card under the question. ExamGhost lets you switch in one click between <strong>Invisible Mode</strong> (zero on-screen UI), <strong>Stealth Mode</strong> (quiet micro-cursor), and <strong>Explain Mode</strong> (full step-by-step proof drawer).
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-[#faf8f5] border border-black/10">
                                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
                                        <MousePointerClick className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        Double-Click Auto-Fill vs Button Clicking
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed">
                                        Instead of clicking injected extension buttons, just <strong>double-click any question text</strong> on Canvas, Blackboard, or Moodle. ExamGhost selects the right choice directly (Auto-Fill), glows for 1–10s (Highlight), or copies to your clipboard silently.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-[#faf8f5] border border-black/10">
                                    <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
                                        <Camera className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        0.3s Snap-It OCR (<kbd className="font-mono text-xs">⌘+Shift+S</kbd>)
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed">
                                        When a professor embeds an unselectable circuit diagram or Canvas New Quizzes LTI iframe equation, press <kbd className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-black/10">⌘+Shift+S</kbd> and drag a crop box. ExamGhost decodes LaTeX math and diagrams in 0.3 seconds.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: SPEEDGRADER TELEMETRY */}
                        <div className="hidden peer-checked/logs:block">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="rounded-3xl bg-[#1a1114] text-white p-6 border border-rose-500/40">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                                        <span className="font-mono text-xs font-bold text-rose-300">COURSOLOGY EXTENSION ON TIMED QUIZ</span>
                                        <span className="px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 text-[11px] font-bold">Visible DOM + Blur</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-black/50 font-mono text-xs text-rose-200 space-y-1.5 mb-4">
                                        <div className="text-rose-400">// 1. Appends visible card into host HTML:</div>
                                        <div>&lt;div class=&quot;coursology-answer-card&quot;&gt;Rate us...&lt;/div&gt;</div>
                                        <div className="text-rose-400 pt-2">// 2. Clicking Snapshot or side popup fires blur:</div>
                                        <div>[14:22:09] SpeedGrader: &quot;Stopped viewing quiz page (11s)&quot;</div>
                                    </div>
                                    <p className="text-xs text-white/80 leading-relaxed">
                                        Coursology was designed for open-book homework—so it doesn&apos;t shield <code className="font-mono text-rose-300">window.blur</code> events or isolate its answer cards from host page DOM inspection.
                                    </p>
                                </div>

                                <div className="rounded-3xl bg-[#0d1c15] text-white p-6 border border-emerald-500/40">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                                        <span className="font-mono text-xs font-bold text-emerald-300">EXAMGHOST CLOSED SHADOW DOM + FOCUS SHIELD</span>
                                        <span className="px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[11px] font-bold">0 Flags Logged</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-black/50 font-mono text-xs text-emerald-200 space-y-1.5 mb-4">
                                        <div className="text-emerald-400">// 1. Zero host DOM nodes added:</div>
                                        <div>host.attachShadow(&#123; mode: &quot;closed&quot; &#125;);</div>
                                        <div className="text-emerald-400 pt-2">// 2. Focus Shield intercepts blur &amp; visibilitychange:</div>
                                        <div>[14:22:09] SpeedGrader: &quot;Answered #7 (Continuous Focus)&quot;</div>
                                    </div>
                                    <p className="text-xs text-white/80 leading-relaxed">
                                        Host page <code className="font-mono text-emerald-300">document.querySelectorAll</code> scans return zero extension elements, and pressing <kbd className="font-mono text-emerald-300">⌘+Shift+U</kbd> unmounts the extension in under 8ms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: PODCASTS & DISCUSSION BOARDS */}
                        <div className="hidden peer-checked/features:block">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-[#f6f7fe] border border-indigo-200">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-950 text-xs font-bold mb-3">
                                        <Headphones className="w-3.5 h-3.5" />
                                        <span>Where Coursology Shines (Untimed Study)</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Lecture Podcasts, Discussion Replies &amp; JSTOR Citations
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                                        If you want to upload 50-page lecture PDFs to generate <em>Coursey</em> commuter podcasts, or use its <em>Discussion Post Extension</em> to draft weekly 300-word Canvas discussion board posts with an AI Humanizer and <kbd className="font-mono text-xs">⌘+R</kbd> JSTOR citations, Coursology is genuinely useful for untimed work.
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/80 border-2 border-emerald-500/40">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-xs font-bold mb-3">
                                        <Zap className="w-3.5 h-3.5" />
                                        <span>Where ExamGhost Wins (Timed Quizzes &amp; Exams)</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        High-Stakes Midterms, Finals &amp; STEM Quizzes
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                                        During a 45-minute Calculus, Biology, or Accounting exam, you don&apos;t need podcast generators—you need <strong>0.3-second inline answers, Mathpix STEM OCR, zero injected DOM banners, and Focus Shield</strong> so your professor&apos;s SpeedGrader log stays spotless.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    10-POINT SIDE-BY-SIDE COMPARISON TABLE
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            2026 Feature &amp; Stealth Comparison Matrix
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            An honest look at where ExamGhost leads on exam stealth and where Coursology focuses on study tools.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="bg-[#f7f4ee] border-b border-black/10">
                                        <th className="py-4 px-6 font-bold text-ink w-[38%]">Capability / Dimension</th>
                                        <th className="py-4 px-6 font-extrabold text-emerald-950 bg-emerald-100/50 text-center w-[31%]">
                                            ExamGhost (v4.2)
                                        </th>
                                        <th className="py-4 px-6 font-bold text-ink-secondary text-center w-[31%]">
                                            Coursology (2026)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Closed Shadow DOM Encapsulation</div>
                                            <div className="text-xs text-ink-muted">Prevents LMS scripts from detecting injected UI</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 100% Closed Tree
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ Injects Visible Answer Card
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Focus Shield (Tab-Blur Cloaking)</div>
                                            <div className="text-xs text-ink-muted">Stops SpeedGrader &ldquo;Stopped viewing quiz&rdquo; flags</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Blocks blur &amp; visibilitychange
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ Unshielded Window Focus
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Double-Click Inline Question Solve</div>
                                            <div className="text-xs text-ink-muted">Solve without clicking extension buttons</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Auto-Fill, Highlight, or Clipboard
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-secondary">
                                            Requires Button Click / Snapshot
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">3 Stealth Display Modes</div>
                                            <div className="text-xs text-ink-muted">Screen-share &amp; lecture hall safety</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Invisible, Stealth, Explain
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ Fixed High-Contrast Box
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Snap-It Vision OCR (<kbd className="font-mono text-xs">⌘+Shift+S</kbd>)</div>
                                            <div className="text-xs text-ink-muted">Reads locked iframes, graphs &amp; STEM equations</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 0.3s In-Memory Mathpix OCR
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-secondary">
                                            ✓ Snapshot Tool (~2.8s Cloud)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Master Panic Kill Switch (<kbd className="font-mono text-xs">⌘+Shift+U</kbd>)</div>
                                            <div className="text-xs text-ink-muted">Instantly purges UI &amp; RAM if TA walks by</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Instant &lt;8ms RAM Purge
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ No Panic Purge Hotkey
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">AI Audio Podcasts (&ldquo;Coursey&rdquo;) &amp; Discussion Drafter</div>
                                            <div className="text-xs text-ink-muted">Commuter audio &amp; cited discussion replies</div>
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-muted">
                                            Clipboard mode for short essays
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800">
                                            ✓ Built-In Podcast &amp; Discussion Suite
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Free Trial &amp; Student Pricing</div>
                                            <div className="text-xs text-ink-muted">Test on real quizzes before paying</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            50 Free Solves · $19/mo · $99/yr · $199 Life
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-secondary">
                                            Limited Free Tier · ~$19.99–$24.99/mo Sub
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    FAQ ACCORDION
                ============================================================ */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Real answers on Canvas SpeedGrader logs, Coursology&apos;s 2026 features, and ExamGhost pricing.
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
                    <div className="rounded-[32px] bg-[#cdeecb] border border-black/10 p-7 sm:p-10 shadow-card flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                <span>Built for Timed Quizzes &amp; Midterms</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                Solve Live Quizzes Invisibly—Start With 50 Free Solves.
                            </h2>
                            <p className="text-sm text-ink-secondary leading-relaxed">
                                No injected &ldquo;Rate us&rdquo; banners, no window-blur flags, and zero credit card required to test your first 50 questions.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <Link prefetch={false}
                                href="/#pricing"
                                className="btn-dark px-6 py-3.5 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                            >
                                <FaChrome className="w-4 h-4 text-[#cdeecb]" />
                                <span>Start 50 Free Solves</span>
                            </Link>
                            <Link prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-white hover:bg-cream text-ink border border-black/15 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <span>Try Live Demo</span>
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
                                Compare More Study &amp; Quiz Extensions
                            </h2>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="text-xs font-bold text-emerald-900 hover:underline flex items-center gap-1">
                                <span>View All 57 Audits</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <Link prefetch={false} href="/studyx-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs StudyX</div>
                                <div className="text-[11px] text-ink-muted">Community Hub vs Exam Stealth</div>
                            </Link>
                            <Link prefetch={false} href="/knowt-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Knowt</div>
                                <div className="text-[11px] text-ink-muted">Flashcards vs Live 0.3s Solver</div>
                            </Link>
                            <Link prefetch={false} href="/questionai-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Question.AI</div>
                                <div className="text-[11px] text-ink-muted">Sidebar Chat vs Inline Auto-Fill</div>
                            </Link>
                            <Link prefetch={false} href="/canvashack-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CanvasHack</div>
                                <div className="text-[11px] text-ink-muted">$149.99 Tab Blocker (No AI)</div>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
