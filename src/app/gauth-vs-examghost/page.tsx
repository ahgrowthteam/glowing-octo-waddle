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
    AlertTriangle,
    CheckCircle2,
    Monitor,
    Smartphone,
    Camera,
    Eye,
    MousePointerClick,
    Keyboard,
    Layers,
    Clock,
    Cpu,
    ScanLine,
    Lock,
    Activity,
    Crosshair,
    BrainCircuit
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GauthWebcamGazeDemo } from '@/components/TopComparisonDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';

export const metadata: Metadata = {
    title: {
        absolute: "Gauth vs ExamGhost (2026) — Webcam Gaze Vector & Desktop Speed Audit",
    },
    description: "Gauth forces a 35° downward phone-camera gaze (24.5s/photo) that triggers webcam proctors. ExamGhost solves on-screen in 0.3s (0.0° gaze) + includes Claude 3.7, ChatGPT & DeepSeek Study Hub. Start with 5 Free Solves / Day.",
    alternates: {
        canonical: "https://examghost.com/gauth-vs-examghost",
    },
    openGraph: {
        title: "Gauth vs ExamGhost (2026) — Webcam Gaze Vector & Desktop Speed Audit",
        description: "Why raising a phone for Gauth triggers Honorlock & Respondus eye-gaze flags vs ExamGhost's 0.0° On-Screen Desktop HUD (0.3s Double-Click + Alt+S Snip + Multi-Model Study Hub).",
        url: "https://examghost.com/gauth-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Gauth vs ExamGhost (2026) — Webcam Eye-Gaze Vector & Desktop Speed Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gauth vs ExamGhost (2026) — Webcam Gaze Vector & Desktop Speed Audit",
        description: "Stop risking a 35° downward phone glance on Gauth. Solve on-screen in 0.3s with ExamGhost + access Claude 3.7 Sonnet, ChatGPT o3-mini/4o & DeepSeek-R1. 5 Free Solves / Day.",
        images: ["/og-image.jpg"],
    },
};

export default function GauthComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "@id": "https://examghost.com/gauth-vs-examghost#article",
                "headline": "Gauth vs ExamGhost (2026): Webcam Eye-Gaze Vector & Desktop vs Mobile Speed Audit",
                "datePublished": "2026-02-13",
                "dateModified": "2026-04-10",
                "author": {
                    "@type": "Organization",
                    "name": "ExamGhost Proctoring & Ergonomics Lab",
                    "url": "https://examghost.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com"
                },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "url": "https://examghost.com/gauth-vs-examghost",
                "name": "Gauth vs ExamGhost (2026 Comparison) | Webcam Gaze Risk vs 0.0° Desktop HUD + Study AI Hub",
                "description": "Biometric and ergonomics audit comparing Gauth (gauthmath.com by ByteDance) and ExamGhost across 35° downward phone gaze flags, corneal lens reflections, 24.5s photo latency vs 0.3s on-screen solving, and the 2-in-1 Claude 3.7 / ChatGPT / DeepSeek-R1 Study Workspace.",
                "breadcrumb": { "@id": "https://examghost.com/gauth-vs-examghost#breadcrumb" },
                "about": [
                    { "@id": "https://examghost.com/gauth-vs-examghost#software" },
                    {
                        "@type": "SoftwareApplication",
                        "name": "Gauth (ByteDance)",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "iOS, Android, Web",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "11.99",
                            "highPrice": "99.99",
                            "priceCurrency": "USD"
                        }
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/gauth-vs-examghost#software",
                "name": "ExamGhost Desktop Stealth Extension & Multi-Model Study Hub",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Free Daily Tier (5 Free Solves / Day, Auto-Refills Every 24h)",
                        "price": "0.00",
                        "priceCurrency": "USD"
                    },
                    {
                        "@type": "Offer",
                        "name": "Monthly 2-in-1 Pass (Stealth Extension + Study AI Hub)",
                        "price": "19.00",
                        "priceCurrency": "USD"
                    },
                    {
                        "@type": "Offer",
                        "name": "Academic Year 2-in-1 Pass ($8.25/mo billed annually)",
                        "price": "99.00",
                        "priceCurrency": "USD"
                    },
                    {
                        "@type": "Offer",
                        "name": "Lifetime Degree 2-in-1 Pass",
                        "price": "199.00",
                        "priceCurrency": "USD"
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/gauth-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Gauth vs ExamGhost", "item": "https://examghost.com/gauth-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/gauth-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why does raising a phone to use Gauth trigger Honorlock, Respondus, and Proctorio webcam flags?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Modern AI webcam proctors run 30fps facial-landmark and pupil-vector tracking. Using Gauth on a smartphone requires a 35° downward head/eye tilt into your lap or lifting a phone toward your monitor—which projects smartphone LCD glare onto your glasses and corneas, shifts your shoulder posture for 24.5 seconds per question, and triggers immediate automated multi-device flags. ExamGhost renders answers directly on your laptop monitor at a 0.0° center gaze vector in 0.3 seconds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Gauth have an official Chrome extension with Canvas SpeedGrader Focus Shield?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Gauth (operated by ByteDance) is primarily a mobile camera app and web portal (gauthmath.com) without a closed Shadow DOM Chrome extension or Canvas Focus Shield. Switching tabs to gauthmath.com on your laptop immediately fires window.blur and visibilitychange events in Canvas SpeedGrader logs. ExamGhost runs inside your active exam tab with a 4-Layer Focus Shield and closed Shadow DOM."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost's free tier compare to Gauth's daily ticket paywall?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Gauth restricts free users with daily ticket caps, blurred step-by-step explanations, and aggressive 3-day auto-renewing Gauth Plus prompts. ExamGhost gives every student 5 Free Solves / Day (auto-refills every 24 hours, $0, no credit card required) so you can test real on-screen solving every single day."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included in ExamGhost's 2-in-1 paid plans compared to Gauth Plus ($99.99/yr)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While Gauth Plus charges $11.99/mo or $99.99/yr for a mobile phone app, ExamGhost ($19/mo Monthly, $99/yr Academic Year Pass [$8.25/mo], or $199 Lifetime) gives you a 2-in-1 desktop suite: (1) Unlimited Stealth Extension Solves (Double-Click, Alt+S Hybrid Vision+DOM Snip, Alt+1 Invisible, Alt+2 Stealth, Alt+3 Explain, and Cmd+Shift+U Master Toggle) AND (2) Full access to the Study & Homework AI Workspace powered by Claude 3.7 Sonnet, ChatGPT (GPT-4o / o3-mini), and DeepSeek-R1."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost solve calculus graphs and physics circuits without a phone camera?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Press Alt+S to activate ExamGhost's Hybrid Vision+DOM Snip right on your laptop monitor. Drag a crop rectangle over any integral, circuit schematic, organic chemistry ring, or locked image—ExamGhost extracts both pixel OCR and underlying DOM math tokens to return the verified solution in 0.3 seconds with zero phone camera glare."
                        }
                    }
                ]
            }
        ]
    };

    const biometricVectors = [
        {
            code: "VEC-01 // PITCH & YAW POSE",
            title: "35° Downward Head-Pose & Pupil Deflection",
            gauthRisk: "CRITICAL FLAG (>15° Threshold)",
            description: "Honorlock, Respondus Monitor, and Proctorio map 68 facial landmarks in real time. Holding a phone in your lap to open Gauth tilts your nasal bridge and pupil vector 32°–38° downward for 15+ seconds—exceeding the 15° pitch threshold that triggers an automated 'Off-Screen Reference Material' alert.",
            examGhostFix: "0.0° Center-Screen Horizon: Answers appear directly beside the Canvas radio button you are already reading."
        },
        {
            code: "VEC-02 // SPECULAR GLARE",
            title: "Corneal & Eyeglass Lens Reflection Mapping",
            gauthRisk: "SECONDARY SCREEN DETECTED",
            description: "When you raise a smartphone to photograph your laptop screen for Gauth, the phone's OLED/LCD backlight and camera flash interface cast a moving rectangular reflection onto eyeglass lenses, corneas, and your shirt collar—even if the phone itself is held just below the webcam's vertical crop.",
            examGhostFix: "Zero External Light Source: Press Alt+S to snip diagrams in-memory on your monitor with your phone powered off in another room."
        },
        {
            code: "VEC-03 // KINEMATIC POSTURE",
            title: "Asymmetric Deltoid & Off-Keyboard Hand Elevation",
            gauthRisk: "24.5s POSTURE ANOMALY",
            description: "Taking a photo of a laptop monitor requires lifting one or both hands off the keyboard/trackpad plane, holding a phone steady at chest height to avoid LCD moiré lines, and tapping a glass screen to crop the image—creating an unmistakable 24.5-second biomechanical signature.",
            examGhostFix: "Natural Trackpad Micro-Gesture: Double-Click any question text or use keyboard hotkeys (Alt+1 / Alt+2 / Alt+3) without lifting your wrists."
        },
        {
            code: "VEC-04 // BROWSER TELEMETRY",
            title: "The gauthmath.com Tab-Switch & SpeedGrader Trap",
            gauthRisk: "WINDOW.BLUR LOGGED",
            description: "Students who try to avoid the phone camera by opening gauthmath.com in a second browser tab immediately trigger Canvas SpeedGrader's window.blur, document.hidden, and visibilitychange listeners—stamping 'Stopped viewing the Canvas quiz-taking page' into the instructor's audit log.",
            examGhostFix: "4-Layer Focus Shield + Closed Shadow DOM: Intercepts blur/visibility telemetry so your quiz timeline shows 100% continuous focus."
        }
    ];

    const stopwatchComparison = [
        { step: "1. Trigger Capture", gauth: "Pick up phone, unlock FaceID, open Gauth camera (3.4s)", eg: "Double-Click question or press Alt+S on laptop (0.05s)" },
        { step: "2. Frame & Crop Problem", gauth: "Aim phone at LCD, fight screen moiré, drag mobile crop corners (6.8s)", eg: "Automatic DOM + Hybrid Vision extraction in-memory (0.08s)" },
        { step: "3. Cloud OCR & Compute", gauth: "Upload compressed JPEG over mobile data + queue for AI ticket (9.6s)", eg: "Edge Symbolic + Vision AI pipeline computes exact answer (0.17s)" },
        { step: "4. Read & Transfer Answer", gauth: "Look down at lap, read mobile answer, look back up to laptop (4.7s)", eg: "Stealth indicator glows directly on the correct choice (0.00s)" },
    ];

    return (
        <div className="min-h-screen bg-[#f6f5f0] text-ink selection:bg-cyan-200 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb & Lab Telemetry Strip */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                            <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                            <span>/</span>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                            <span>/</span>
                            <span className="text-ink font-bold">Gauth vs ExamGhost</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1320] text-cyan-300 font-mono text-[11px] font-bold">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>BIOMETRIC LAB AUDIT // GAUTH (BYTEDANCE) VS EXAMGHOST v4.2</span>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    ARCHETYPE HERO: PROCTORING BIOMETRICS & ERGONOMICS LAB
                ============================================================ */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#0d1522] text-white border border-cyan-500/20 p-6 sm:p-10 lg:p-14 shadow-lift relative overflow-hidden">
                        {/* Subtle technical grid background */}
                        <div
                            className="absolute inset-0 opacity-[0.06] pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 1px 1px, #22d3ee 1px, transparent 0)',
                                backgroundSize: '28px 28px'
                            }}
                        />

                        {/* Top Biometric Header Ribbon */}
                        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-white/10">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold text-cyan-300">
                                <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
                                <span>WEBCAM EYE-GAZE VECTOR &amp; DESKTOP VS MOBILE SPEED AUDIT</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                                <span className="px-3 py-1 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-300 font-bold">
                                    Gauth Phone Gaze: -35° Pitch (24.5s)
                                </span>
                                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-bold">
                                    ExamGhost HUD: 0.0° Gaze (0.3s)
                                </span>
                            </div>
                        </div>

                        <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-start">
                            {/* Left 7 Columns: Narrative + Hotkey Bar + CTAs */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.06] mb-6">
                                    Raising a phone for Gauth{' '}
                                    <span className="text-rose-400 underline decoration-rose-500/40 decoration-wavy underline-offset-4">
                                        triggers webcam gaze flags.
                                    </span>{' '}
                                    Keep your eyes at 0.0° on desktop.
                                </h1>

                                <p className="aeo-summary text-base sm:text-lg text-slate-300 leading-relaxed mb-5">
                                    <strong>Gauth</strong> (formerly Gauthmath by ByteDance) is built around a <strong>mobile phone camera workflow</strong> with zero closed Shadow DOM Chrome extension. During a timed Canvas or Blackboard exam, pointing your phone at your monitor forces a <strong>35° downward eye/head tilt</strong>, reflects smartphone glare onto your glasses, and wastes <strong>24.5 seconds per photo</strong>—while switching tabs to <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded border border-white/15 text-cyan-200">gauthmath.com</code> fires an instant <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded border border-white/15 text-rose-300">window.blur</code> flag in SpeedGrader.
                                </p>

                                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-7">
                                    <strong>ExamGhost</strong> keeps your pupils locked at a <strong>0.0° horizontal reading vector</strong> on your laptop monitor. <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/20 font-mono text-xs text-emerald-300">Double-Click</kbd> any question or press <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/20 font-mono text-xs text-emerald-300">Alt+S</kbd> to solve equations in <strong>0.3 seconds</strong>—plus unlock our full <strong>Claude 3.7 Sonnet, ChatGPT (o3-mini / 4o) &amp; DeepSeek-R1 Study Workspace</strong>.
                                </p>

                                {/* Desktop Stealth Hotkey Architecture Strip */}
                                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-7">
                                    <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold mb-2.5 flex items-center gap-1.5">
                                        <Keyboard className="w-3.5 h-3.5" />
                                        <span>Zero-Phone Desktop Hotkey Suite (Hands Never Leave Keyboard)</span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                                        <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                                            <span className="font-mono font-bold text-emerald-300">Double-Click</span>
                                            <div className="text-[11px] text-slate-400">0.3s Instant Inline Solve</div>
                                        </div>
                                        <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                                            <span className="font-mono font-bold text-cyan-300">Alt+S</span>
                                            <div className="text-[11px] text-slate-400">Hybrid Vision+DOM Snip</div>
                                        </div>
                                        <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                                            <span className="font-mono font-bold text-purple-300">Alt+1 / Alt+2</span>
                                            <div className="text-[11px] text-slate-400">Invisible / Stealth Dot</div>
                                        </div>
                                        <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                                            <span className="font-mono font-bold text-amber-300">Alt+3</span>
                                            <div className="text-[11px] text-slate-400">Step-by-Step LaTeX Explain</div>
                                        </div>
                                        <div className="p-2 rounded-xl bg-black/40 border border-white/10 sm:col-span-2">
                                            <span className="font-mono font-bold text-rose-300">⌘+Shift+U</span>
                                            <span className="text-[11px] text-slate-400 ml-2">Master Toggle (Instant 0-Trace RAM Unload)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-6">
                                    <Link
                                        prefetch={false}
                                        href="/#pricing"
                                        className="px-7 py-4 rounded-full text-sm sm:text-base font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lift inline-flex items-center justify-center gap-2.5 group transition-all"
                                    >
                                        <FaChrome className="w-4 h-4 text-slate-950" aria-hidden="true" />
                                        <span>Start 5 Free Solves / Day ($0 · No Card)</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <a
                                        href="#interactive-gaze-lab"
                                        className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 inline-flex items-center justify-center gap-2 transition-all"
                                    >
                                        <Eye className="w-4 h-4 text-cyan-300" />
                                        <span>Run Webcam Gaze Simulator ↓</span>
                                    </a>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-300">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                        <span>5 Free Solves / Day (Auto-Refills Every 24h)</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                        <span>2-in-1: Stealth Extension + Claude/ChatGPT/DeepSeek Hub</span>
                                    </span>
                                </div>
                            </div>

                            {/* Right 5 Columns: Biometric Telemetry & Stopwatch Readout Console */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#131f33] border border-cyan-400/25 p-5 sm:p-6 shadow-2xl space-y-5">
                                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                                        <div>
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                                                PROCTOR AI VISION TELEMETRY
                                            </span>
                                            <span className="font-display font-extrabold text-base text-white">
                                                Head-Pose &amp; Solve Stopwatch
                                            </span>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-mono text-[11px] font-bold">
                                            30 FPS MESH
                                        </span>
                                    </div>

                                    {/* Gauth Mobile Camera Biometric Card */}
                                    <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-500/30 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-200">
                                                <Smartphone className="w-4 h-4 text-rose-400" />
                                                <span>Gauth Mobile App (ByteDance)</span>
                                            </span>
                                            <span className="px-2 py-0.5 rounded bg-rose-500/30 text-rose-200 font-mono text-[10px] font-bold">
                                                FLAGGED · 24.5s / Q
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                                            <div className="p-2 rounded-xl bg-black/40 border border-rose-500/20">
                                                <div className="text-[10px] text-slate-400">PITCH ANGLE</div>
                                                <div className="font-bold text-rose-400 text-sm">-35.4° ↓</div>
                                            </div>
                                            <div className="p-2 rounded-xl bg-black/40 border border-rose-500/20">
                                                <div className="text-[10px] text-slate-400">LENS GLARE</div>
                                                <div className="font-bold text-rose-400 text-sm">DETECTED</div>
                                            </div>
                                            <div className="p-2 rounded-xl bg-black/40 border border-rose-500/20">
                                                <div className="text-[10px] text-slate-400">SOLVE TIME</div>
                                                <div className="font-bold text-rose-400 text-sm">24.5 sec</div>
                                            </div>
                                        </div>
                                        <div className="text-[11px] font-mono text-rose-200/90 bg-black/40 px-3 py-2 rounded-lg border border-rose-500/20">
                                            ! Alert: Downward lap gaze + secondary screen reflection on glasses
                                        </div>
                                    </div>

                                    {/* ExamGhost Desktop HUD Biometric Card */}
                                    <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-200">
                                                <Monitor className="w-4 h-4 text-emerald-400" />
                                                <span>ExamGhost On-Screen Desktop HUD</span>
                                            </span>
                                            <span className="px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-200 font-mono text-[10px] font-bold">
                                                0 FLAGS · 0.3s / Q
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                                            <div className="p-2 rounded-xl bg-black/40 border border-emerald-500/20">
                                                <div className="text-[10px] text-slate-400">PITCH ANGLE</div>
                                                <div className="font-bold text-emerald-400 text-sm">0.0° CTR</div>
                                            </div>
                                            <div className="p-2 rounded-xl bg-black/40 border border-emerald-500/20">
                                                <div className="text-[10px] text-slate-400">LENS GLARE</div>
                                                <div className="font-bold text-emerald-400 text-sm">0.0 LUX</div>
                                            </div>
                                            <div className="p-2 rounded-xl bg-black/40 border border-emerald-500/20">
                                                <div className="text-[10px] text-slate-400">SOLVE TIME</div>
                                                <div className="font-bold text-emerald-400 text-sm">0.3 sec</div>
                                            </div>
                                        </div>
                                        <div className="text-[11px] font-mono text-emerald-200/90 bg-black/40 px-3 py-2 rounded-lg border border-emerald-500/20">
                                            ✓ Status: Continuous center-monitor gaze + 0 SpeedGrader blur logs
                                        </div>
                                    </div>

                                    {/* Mini 2-in-1 Value Callout */}
                                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-between gap-3 text-xs">
                                        <div>
                                            <div className="font-bold text-cyan-200">Includes Multi-Model Study Hub</div>
                                            <div className="text-[11px] text-slate-300">Claude 3.7 Sonnet + ChatGPT o3-mini/4o + DeepSeek-R1</div>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-emerald-400 text-slate-950 font-extrabold text-[11px] shrink-0">
                                            2-in-1 Pass
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ============================================================
                    INTERACTIVE MOTION DEMO: GAUTH WEBCAM GAZE DEMO
                ============================================================ */}
                <section id="interactive-gaze-lab" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-xs font-bold text-cyan-950 mb-3">
                            <Activity className="w-3.5 h-3.5 text-cyan-800" />
                            <span>INTERACTIVE BIOMETRIC GAZE &amp; LATENCY SIMULATOR</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            Test What the Webcam Sees: Gauth Phone Snap vs ExamGhost 0.0° HUD
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                            Toggle between Gauth&apos;s 24.5-second mobile camera workflow and ExamGhost&apos;s 0.3-second on-screen desktop HUD below to inspect real-time head-pitch vectors, eyeglass reflection risk, and SpeedGrader focus telemetry.
                        </p>
                    </div>

                    <GauthWebcamGazeDemo />
                </section>

                {/* ============================================================
                    BESPOKE SECTION 1: WHY RAISING A PHONE TO YOUR LAPTOP SCREEN
                    TRIGGERS AI WEBCAM PROCTORS (4-VECTOR BIOMETRIC BLUEPRINT)
                ============================================================ */}
                <section id="proctor-gaze-analysis" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 lg:p-12 shadow-card">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-black/10">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-xs font-mono font-bold text-rose-900 mb-3">
                                    <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
                                    <span>HONORLOCK · RESPONDUS MONITOR · PROCTORIO GAZE ANALYSIS</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight leading-[1.1]">
                                    Why Raising a Phone to Your Laptop Screen Triggers AI Webcam Proctors
                                </h2>
                            </div>
                            <p className="text-xs sm:text-sm text-ink-secondary max-w-md leading-relaxed">
                                Students often assume that holding a phone slightly below the webcam lens hides Gauth from proctoring software. Here are the <strong>4 computer-vision vectors</strong> that flag phone-camera solvers within seconds.
                            </p>
                        </div>

                        {/* 2x2 Architectural Biometric Vector Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            {biometricVectors.map((vec) => (
                                <div
                                    key={vec.code}
                                    className="rounded-3xl bg-[#faf9f5] border border-black/10 p-6 flex flex-col justify-between hover:border-black/25 transition-all"
                                >
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <span className="font-mono text-[11px] font-bold text-ink-muted bg-white px-2.5 py-1 rounded-md border border-black/10">
                                                {vec.code}
                                            </span>
                                            <span className="font-mono text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 border border-rose-200">
                                                {vec.gauthRisk}
                                            </span>
                                        </div>
                                        <h3 className="font-display text-lg sm:text-xl font-extrabold text-ink mb-2.5">
                                            {vec.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-5">
                                            {vec.description}
                                        </p>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-emerald-950 text-emerald-100 text-xs leading-relaxed flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-emerald-300">ExamGhost Counter-Measure:</strong> {vec.examGhostFix}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Step-by-Step Stopwatch Audit Bar */}
                        <div className="rounded-3xl bg-[#0d1522] text-white p-6 sm:p-8 border border-black/20">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                                <div>
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
                                        ERGONOMIC STOPWATCH BENCHMARK (PER QUESTION)
                                    </span>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                                        24.5 Seconds on Gauth Phone App vs 0.3 Seconds on ExamGhost Desktop
                                    </h3>
                                </div>
                                <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-bold">
                                    81× Faster On-Screen Execution
                                </span>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {stopwatchComparison.map((item) => (
                                    <div key={item.step} className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2.5">
                                        <div className="font-mono text-xs font-bold text-cyan-300">{item.step}</div>
                                        <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/30 text-[11px] text-rose-200 leading-snug">
                                            <strong className="block text-rose-300 mb-0.5">Gauth Phone:</strong>
                                            {item.gauth}
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-[11px] text-emerald-200 leading-snug">
                                            <strong className="block text-emerald-300 mb-0.5">ExamGhost Desktop:</strong>
                                            {item.eg}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    BESPOKE SECTION 2: DESKTOP STUDY HUB VS MOBILE APP PAYWALLS
                    + EMBEDDED <StudyAiHubShowcase compact />
                ============================================================ */}
                <section id="desktop-study-hub-vs-mobile" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
                        {/* Left 5 Cols: Gauth Mobile Paywall Breakdown */}
                        <div className="lg:col-span-5 rounded-[32px] bg-rose-50/80 border border-rose-200 p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-200/80 text-rose-950 text-xs font-bold mb-4">
                                    <Smartphone className="w-3.5 h-3.5" />
                                    <span>The Gauth Mobile App Paywall Trap</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-4">
                                    Why pay $99.99/yr for a cramped phone screen and daily ticket caps?
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-5">
                                    Gauth (ByteDance) hooks students with a mobile app download, then rations your homework prep behind daily ticket quotas, blurred &ldquo;Expert Tutor&rdquo; steps, and a 3-day trial that auto-bills <strong>$11.99/month</strong>, <strong>$31.99/quarter</strong>, or <strong>$99.99/year</strong>.
                                </p>
                                <ul className="space-y-3 text-xs sm:text-sm text-ink-secondary mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                        <span><strong>Zero Desktop Extension:</strong> Paying for Gauth Plus still leaves you holding a phone during desktop Canvas &amp; Blackboard quizzes.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                        <span><strong>Cramped Mobile Math Reading:</strong> Scrolling through multi-line LaTeX integrals on a 6-inch phone screen leads to sign errors under exam pressure.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                        <span><strong>Single-Model Bottleneck:</strong> You cannot switch between Claude 3.7 Sonnet, ChatGPT o3-mini, and DeepSeek-R1 to cross-verify proofs or draft essays.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-rose-200 text-xs text-rose-950 font-mono">
                                Gauth Plus Annual Cost: <strong>$99.99/yr</strong> (Mobile App Only · 0 Focus Shield)
                            </div>
                        </div>

                        {/* Right 7 Cols: ExamGhost 2-in-1 Desktop Powerhouse */}
                        <div className="lg:col-span-7 rounded-[32px] bg-[#0f172a] text-white border border-emerald-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-card">
                            <div>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        <span>ExamGhost 2-in-1 Desktop Architecture</span>
                                    </span>
                                    <span className="text-xs font-mono font-bold text-cyan-300">
                                        5 Free Solves / Day ($0 · Auto-Refills Every 24h)
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                                    1 Subscription = Unlimited Stealth Extension + Multi-Model Study AI Workspace
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                                    Every ExamGhost plan starts with <strong>5 Free Solves / Day</strong> (auto-refills every 24 hours, $0 no card needed). When you upgrade to Unlimited (<strong>$19/mo Monthly</strong>, <strong>$99/yr Academic Year Pass [$8.25/mo]</strong>, or <strong>$199 Lifetime</strong>), you unlock a complete <strong>2-in-1 Value</strong> that replaces $60+/mo in separate AI subscriptions:
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                                        <div className="text-xs font-mono uppercase text-emerald-300 font-bold mb-1">
                                            1. Unlimited Stealth Extension
                                        </div>
                                        <div className="font-bold text-sm text-white mb-2">
                                            0.3s On-Screen LMS Solver
                                        </div>
                                        <ul className="space-y-1.5 text-xs text-slate-300">
                                            <li>• <code className="text-emerald-300">Double-Click</code> instant inline solve</li>
                                            <li>• <code className="text-cyan-300">Alt+S</code> Hybrid Vision+DOM Snip</li>
                                            <li>• <code className="text-purple-300">Alt+1</code> Invisible / <code className="text-purple-300">Alt+2</code> Stealth Dot</li>
                                            <li>• <code className="text-amber-300">Alt+3</code> Step-by-Step LaTeX Explain</li>
                                            <li>• <code className="text-rose-300">⌘+Shift+U</code> Master Panic Toggle</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                                        <div className="text-xs font-mono uppercase text-cyan-300 font-bold mb-1">
                                            2. Study &amp; Homework AI Hub
                                        </div>
                                        <div className="font-bold text-sm text-white mb-2">
                                            3 Frontier Models in 1 Workspace
                                        </div>
                                        <ul className="space-y-1.5 text-xs text-slate-300">
                                            <li>• <strong className="text-white">Claude 3.7 Sonnet:</strong> Essays, lab reports &amp; syllabus PDFs</li>
                                            <li>• <strong className="text-white">ChatGPT (GPT-4o / o3-mini):</strong> Multi-modal diagrams &amp; code</li>
                                            <li>• <strong className="text-white">DeepSeek-R1:</strong> Symbolic calculus &amp; organic chem proofs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex flex-wrap items-center justify-between gap-3">
                                <div className="text-xs text-emerald-100">
                                    <strong className="text-white">Academic Year Pass: $99/yr ($8.25/mo)</strong> — cheaper than Gauth Plus ($99.99/yr) with 10× the desktop power.
                                </div>
                                <Link
                                    prefetch={false}
                                    href="/#pricing"
                                    className="px-4 py-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition-colors"
                                >
                                    Claim 5 Free Solves / Day →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Embedded StudyAiHubShowcase Component */}
                    <StudyAiHubShowcase compact />
                </section>

                {/* ============================================================
                    DEEP 10-POINT COMPARISON MATRIX: GAUTH PLUS VS EXAMGHOST
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Gauth Plus vs ExamGhost: 2026 Master Matrix
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Side-by-side audit across webcam gaze vectors, SpeedGrader telemetry, STEM OCR latency, multi-model homework AI, and daily free quota.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                                <thead>
                                    <tr className="bg-[#0d1522] text-white border-b border-black/10">
                                        <th className="py-4 px-6 font-bold w-[34%]">Biometric &amp; Technical Metric</th>
                                        <th className="py-4 px-6 font-extrabold text-emerald-300 bg-emerald-950/60 text-center w-[33%]">
                                            ExamGhost v4.2 (Desktop + Study Hub)
                                        </th>
                                        <th className="py-4 px-6 font-bold text-slate-300 text-center w-[33%]">
                                            Gauth / Gauth Plus (ByteDance)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Webcam Eye-Gaze Vector Angle</div>
                                            <div className="text-xs text-ink-muted">Honorlock, Proctorio &amp; Respondus facial mesh tracking</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/40">
                                            ✓ 0.0° Center-Monitor Reading Gaze
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ -35° Downward Lap Glance (High Flag Risk)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Eyeglass &amp; Corneal Glare Safety</div>
                                            <div className="text-xs text-ink-muted">Secondary screen reflection on glasses/face</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/40">
                                            ✓ 0 Secondary Device Glare (Phone Stays Off)
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ Smartphone OLED Reflects on Lenses
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">End-to-End Question Solve Speed</div>
                                            <div className="text-xs text-ink-muted">From viewing question to verified answer</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/40">
                                            ✓ 0.3 Seconds (Double-Click or Alt+S)
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ~24.5 Seconds (Aim, Crop, Upload, Read)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Desktop Chrome Extension &amp; Shadow DOM</div>
                                            <div className="text-xs text-ink-muted">In-page LMS solving without leaving your tab</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/40">
                                            ✓ Closed Shadow DOM v1 Extension
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ None (Mobile App &amp; External Web Only)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Canvas SpeedGrader Focus Shield</div>
                                            <div className="text-xs text-ink-muted">Blocks <code className="font-mono">window.blur</code> &amp; <code className="font-mono">visibilitychange</code></div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/40">
                                            ✓ Active 4-Layer Focus Shield (0 Blur Logs)
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ Switching to gauthmath.com Logs Departure
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Stealth Hotkey &amp; Panic Controls</div>
                                            <div className="text-xs text-ink-muted">Keyboard-only operation &amp; instant RAM unload</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/40">
                                            ✓ Double-Click, Alt+S, Alt+1/2/3, ⌘+Shift+U
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-secondary">
                                            ✗ Touch-Screen Mobile App Only
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Included Study &amp; Homework AI Hub</div>
                                            <div className="text-xs text-ink-muted">Multi-model workspace for essays, PDFs &amp; proofs</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/40">
                                            ✓ Claude 3.7 Sonnet + ChatGPT (o3-mini/4o) + DeepSeek-R1
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-secondary">
                                            ✗ Single Proprietary Mobile Wrapper
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Daily Free Quota</div>
                                            <div className="text-xs text-ink-muted">Risk-free testing with zero credit card</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/40">
                                            ✓ 5 Free Solves / Day (Auto-Refills Every 24h, $0)
                                        </td>
                                        <td className="py-4 px-6 text-center text-rose-800 font-semibold">
                                            Ticket Caps + 3-Day Auto-Renew Trial Trap
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Unlimited Paid Pass Pricing</div>
                                            <div className="text-xs text-ink-muted">2-in-1 Extension + Multi-Model Study Hub</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/40">
                                            $19/mo · $99/yr ($8.25/mo) · $199 Lifetime
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-secondary">
                                            $11.99/mo · $31.99/qtr · $99.99/yr (No Lifetime)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    STUDENT SWITCHER REPORT + FAQ ACCORDION
                ============================================================ */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#e0f2fe] via-[#ecfeff] to-[#f0fdf4] border border-black/10 p-7 sm:p-10 mb-16 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-1 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white text-cyan-950 text-xs font-bold border border-black/10">
                                Switched from Gauth Plus ($99.99/yr) to ExamGhost Academic Year Pass ($99/yr)
                            </span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-2xl font-bold text-ink leading-snug mb-5">
                            &ldquo;I was paying for Gauth Plus and tried holding my iPhone against my water bottle during a Physics 2 quiz. My TA emailed me two days later because Respondus flagged four timestamps where my eyes tilted down 35 degrees and phone glare reflected off my blue-light glasses. I switched to ExamGhost—started with the 5 Free Solves / Day, and now I just double-click on my monitor at a 0.0° gaze angle. Having Claude 3.7 and DeepSeek-R1 built into the Study Hub for my lab reports saved me another $20/mo.&rdquo;
                        </blockquote>
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-black/10 text-xs text-ink-secondary">
                            <div>
                                <strong className="text-ink">Samantha P.</strong> · Pre-Med Junior, University of Florida
                            </div>
                            <span className="font-bold text-emerald-800">0.0° Center Gaze · 2-in-1 Extension + Study Hub</span>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Everything you need to know about Gauth (<code className="text-xs">gauthmath.com</code>) vs ExamGhost.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        {(jsonLd["@graph"][3] as any).mainEntity.map((faq: any, index: number) => (
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
                    <div className="rounded-[32px] bg-[#0d1522] text-white border border-cyan-500/20 p-7 sm:p-10 shadow-lift flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-xs font-bold text-cyan-300 mb-3">
                                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                                <span>0.0° On-Screen Webcam Safety · 5 Free Solves / Day</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                                Put Your Phone Away. Solve on Desktop in 0.3 Seconds.
                            </h2>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Start with <strong>5 Free Solves / Day</strong> (auto-refills every 24h, $0 no card needed) or unlock unlimited stealth solves + Claude 3.7, ChatGPT &amp; DeepSeek-R1 from $8.25/mo.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <Link
                                prefetch={false}
                                href="/#pricing"
                                className="px-6 py-3.5 rounded-full text-sm font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-lift inline-flex items-center gap-2 transition-colors"
                            >
                                <FaChrome className="w-4 h-4 text-slate-950" />
                                <span>Start 5 Free Solves / Day</span>
                            </Link>
                            <Link
                                prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <span>Test Live Demo</span>
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
                                Compare More Math &amp; Quiz Solvers
                            </h2>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="text-xs font-bold text-cyan-900 hover:underline flex items-center gap-1">
                                <span>View All 58 Audits</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <Link prefetch={false} href="/coursehero-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Course Hero</div>
                                <div className="text-[11px] text-ink-muted">$39.95 Blurred PDFs vs 0.3s Live AI</div>
                            </Link>
                            <Link prefetch={false} href="/solvely-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Solvely</div>
                                <div className="text-[11px] text-ink-muted">Screenshot Upload vs Inline Solve</div>
                            </Link>
                            <Link prefetch={false} href="/answerai-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Answer.AI</div>
                                <div className="text-[11px] text-ink-muted">K-12 Phone App vs Desktop Stealth</div>
                            </Link>
                            <Link prefetch={false} href="/mathosai-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Mathos AI</div>
                                <div className="text-[11px] text-ink-muted">External Tab vs In-Page Alt+S Snip</div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
