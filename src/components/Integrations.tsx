'use client';

import React from 'react';
import { 
    Shield, Sparkles, Cpu, Lock, Eye, CheckCircle2, 
    Layers, ScanLine, KeyRound, MonitorCheck, Zap, Check
} from 'lucide-react';
import { 
    SiCanvas, SiLinkedin, SiMoodle, SiPearson, SiCoursera 
} from 'react-icons/si';

export default function Integrations() {
    const categories = [
        {
            count: "3 modes",
            title: "3 Display Modes",
            desc: "Invisible for screen-shares, Stealth with quiet cursor, and Explain for deep step-by-step reasoning",
            bg: "#c4d0f8", // Periwinkle
            accent: "#4361ee",
            icon: Shield,
            badge: "Screen-Share Safe",
            image: "/images/ghost/ghost_card_stealth.jpg",
            features: ["Invisible: Silent answer injection", "Stealth: Quiet micro-cursor", "Explain: Step-by-step proof drawer"]
        },
        {
            count: "3 methods",
            title: "3 Answer Methods",
            desc: "Auto-fill direct selection, Smart Highlight for 1–10s, and Silent Clipboard copy for essays",
            bg: "#bfe3f6", // Sky
            accent: "#0077b6",
            icon: ScanLine,
            badge: "Zero Copy-Paste",
            image: "/images/ghost/ghost_card_vision.jpg",
            features: ["Auto-fill direct option selection", "Configurable 1-10s glow duration", "Silent clipboard copy for typing"]
        },
        {
            count: "Vision AI",
            title: "Snap-It Sniping",
            desc: "Hit ⌘+Shift+S to draw a crop box around any equation, diagram, or locked PDF question",
            bg: "#e2d3fa", // Lilac
            accent: "#7209b7",
            icon: Sparkles,
            badge: "⌘+Shift+S",
            image: "/images/ghost/ghost_card_ai.jpg",
            features: ["Calculus & chemical equations", "Chart, graph & diagram parser", "Works on PDFs, slides & canvas"]
        },
        {
            count: "20+ LMSs",
            title: "Universal LMS Support",
            desc: "Native double-click solving for Canvas Classic & New Quizzes, Blackboard Ultra, Moodle and D2L",
            bg: "#cdeecb", // Mint
            accent: "#2d6a4f",
            icon: Layers,
            badge: "All Major Platforms",
            image: "/images/ghost/ghost_card_lms.jpg",
            features: ["Canvas Classic & New Quizzes", "Blackboard Learn & Ultra", "Moodle, Brightspace & Google Forms"]
        },
        {
            count: "Universal",
            title: "Locked Content Bypass",
            desc: "When exams disable text selection, right clicks, or render in canvas, Snap-It reads it anyway",
            bg: "#ffd5cc", // Blush
            accent: "#d90429",
            icon: Lock,
            badge: "Universal Access",
            image: "/images/ghost/ghost_card_proctor.jpg",
            features: ["Bypasses text-selection locks", "Scanned worksheet OCR", "Canvas-rendered question solve"]
        },
        {
            count: "Client-side",
            title: "Zero-Footprint Privacy",
            desc: "Off until switched on (⌘+Shift+U). Operates in closed Shadow DOM with zero background telemetry",
            bg: "#bfe9d9", // Teal
            accent: "#006d77",
            icon: Eye,
            badge: "100% Client-Side",
            image: "/images/ghost/ghost_card_hud.jpg",
            features: ["Off until switched on (⌘+Shift+U)", "No account needed for free 50", "Closed Shadow DOM container"]
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="all-in-one">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Head */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>ALL IN ONE</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        One box. Every tool<br />
                        you keep reaching for.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Stop hunting for a clunky screenshot tool, a risky copy-paste script, or an AI extension that forces you to switch tabs. ExamGhost packages double-click solving, Snap-It screenshot OCR, and 3 stealth display modes in one calm, undetectable browser extension.
                    </p>
                </div>

                {/* Categories Grid (OneMacApp 6 Pastel Cards with 3D Ghost Characters) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 border border-white/80 shadow-[0_4px_20px_rgba(40,30,10,0.04)] hover:shadow-[0_16px_40px_rgba(40,30,10,0.1)]"
                                style={{ backgroundColor: cat.bg }}
                            >
                                {/* Top Meta */}
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-black/5 text-ink shadow-xs">
                                            {cat.count}
                                        </span>
                                        <span className="text-[11px] font-semibold text-ink/75 bg-black/5 px-2.5 py-0.5 rounded-full">
                                            {cat.badge}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-2xl font-bold text-ink mb-2">
                                        {cat.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal mb-5">
                                        {cat.desc}
                                    </p>
                                </div>

                                {/* 3D Ghost Character Graphic Box (Replacing OneMacApp toolbox with Ghost character) */}
                                <div className="mt-2 mb-4 rounded-2xl overflow-hidden border border-black/5 shadow-soft bg-cream/70 relative aspect-[4/3] flex items-center justify-center group-hover:shadow-lift transition-all duration-300">
                                    <img 
                                        src={cat.image} 
                                        alt={`${cat.title} Ghost character`}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Feature checklist pills */}
                                <div className="bg-white/85 backdrop-blur-md rounded-2xl p-3.5 border border-white/80 shadow-xs">
                                    <div className="space-y-1.5">
                                        {cat.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-2 text-xs text-ink-secondary">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                                <span className="truncate">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Subtle corner glare effect */}
                                <div className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/30 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                            </div>
                        );
                    })}
                </div>

                {/* =========================================================================
                    UPGRADED PLATFORM COMPATIBILITY MATRIX & UNIVERSAL ANY-WEBSITE SHOWCASE
                   ========================================================================= */}
                <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
                    
                    {/* Compatibility Card Frame */}
                    <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-black/10 p-6 sm:p-8 md:p-10 shadow-soft relative overflow-hidden">
                        
                        {/* Ambient Glow Circles */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-100/40 via-blue-100/30 to-purple-100/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/40 via-pink-100/20 to-transparent rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

                        <div className="relative z-10">
                            
                            {/* Header Row */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-black/5">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-3 shadow-2xs">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span>LIVE COMPATIBILITY MATRIX · 100% STEALTH VERIFIED</span>
                                    </div>
                                    <h3 className="font-display font-black text-2xl sm:text-3xl text-ink tracking-tight">
                                        Native LMS Hooks + Universal Any-Platform Mode
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted mt-1.5 max-w-2xl leading-relaxed">
                                        Engineered with native zero-DOM telemetry hooks for major universities, plus in-memory computer vision that solves questions across <strong>LinkedIn skill assessments</strong>, certification exams, and custom school portals.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 self-start md:self-end shrink-0">
                                    <span className="px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[11px] font-semibold text-ink flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>Canvas 2026 Ready</span>
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[11px] font-semibold text-ink flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>Closed Shadow DOM</span>
                                    </span>
                                </div>
                            </div>

                            {/* The 9 Specific Tested Platform Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
                                
                                {/* 1. CANVAS */}
                                <div className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-soft transition-all group flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#E63946]/10 border border-[#E63946]/20 flex items-center justify-center text-[#E63946] shrink-0 group-hover:scale-105 transition-transform">
                                        <SiCanvas className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                            <h4 className="font-display font-bold text-sm text-ink group-hover:text-[#E63946] transition-colors">
                                                Canvas
                                            </h4>
                                            <span className="text-[10px] font-extrabold uppercase tracking-tight px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                                0 Flags
                                            </span>
                                        </div>
                                        <div className="text-xs text-ink-secondary font-medium">
                                            Classic &amp; New Quizzes
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-1 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span>Zero SpeedGrader blur logs</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. BLACKBOARD */}
                                <div className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-soft transition-all group flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#222222] border border-black/20 flex items-center justify-center text-[#E5A823] shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                                        <span className="font-display font-black text-sm tracking-tight">Bb</span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                            <h4 className="font-display font-bold text-sm text-ink group-hover:text-amber-800 transition-colors">
                                                Blackboard
                                            </h4>
                                            <span className="text-[10px] font-extrabold uppercase tracking-tight px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                                Shielded
                                            </span>
                                        </div>
                                        <div className="text-xs text-ink-secondary font-medium">
                                            Learn &amp; Blackboard Ultra
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-1 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span>SafeAssign &amp; telemetry blocked</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. LINKEDIN LEARNING & ASSESSMENTS */}
                                <div className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-white border border-[#0A66C2]/20 hover:border-[#0A66C2]/40 shadow-xs hover:shadow-soft transition-all group flex items-start gap-3.5 ring-1 ring-[#0A66C2]/10">
                                    <div className="w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                                        <SiLinkedin className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                            <h4 className="font-display font-bold text-sm text-ink group-hover:text-[#0A66C2] transition-colors">
                                                LinkedIn
                                            </h4>
                                            <span className="text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded-md bg-blue-100 text-[#0A66C2]">
                                                Top 5%
                                            </span>
                                        </div>
                                        <div className="text-xs text-ink-secondary font-medium">
                                            Skill Assessments &amp; Learning
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-1 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span>Earn verified skill badges in 2 min</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. MOODLE */}
                                <div className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-soft transition-all group flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#F98012]/10 border border-[#F98012]/20 flex items-center justify-center text-[#F98012] shrink-0 group-hover:scale-105 transition-transform">
                                        <SiMoodle className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                            <h4 className="font-display font-bold text-sm text-ink group-hover:text-[#F98012] transition-colors">
                                                Moodle
                                            </h4>
                                            <span className="text-[10px] font-extrabold uppercase tracking-tight px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                                Active
                                            </span>
                                        </div>
                                        <div className="text-xs text-ink-secondary font-medium">
                                            Moodle 3.x, 4.x &amp; Workplace
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-1 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span>Full quiz navigation hook</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 5. D2L BRIGHTSPACE */}
                                <div className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-soft transition-all group flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#F15A24]/10 border border-[#F15A24]/20 flex items-center justify-center text-[#F15A24] shrink-0 group-hover:scale-105 transition-transform">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
                                            <rect width="24" height="24" rx="5" fill="#F15A24" />
                                            <path d="M12 4.5l2.2 4.5 4.8.7-3.5 3.4.8 4.9-4.3-2.3-4.3 2.3.8-4.9-3.5-3.4 4.8-.7L12 4.5z" fill="#FFFFFF" />
                                            <circle cx="12" cy="12" r="2.2" fill="#FFE082" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                            <h4 className="font-display font-bold text-sm text-ink group-hover:text-[#F15A24] transition-colors">
                                                D2L Brightspace
                                            </h4>
                                            <span className="text-[10px] font-extrabold uppercase tracking-tight px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                                Active
                                            </span>
                                        </div>
                                        <div className="text-xs text-ink-secondary font-medium">
                                            All Quizzes &amp; Assessments
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-1 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span>Full event loop suppression</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 6. MCGRAW HILL */}
                                <div className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-soft transition-all group flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#D6001C] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                                        <span className="font-display font-black text-xs tracking-tighter">MH</span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                            <h4 className="font-display font-bold text-sm text-ink group-hover:text-[#D6001C] transition-colors">
                                                McGraw Hill
                                            </h4>
                                            <span className="text-[10px] font-extrabold uppercase tracking-tight px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                                LaTeX
                                            </span>
                                        </div>
                                        <div className="text-xs text-ink-secondary font-medium">
                                            Connect &amp; ALEKS
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-1 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span>Mathpix equation parser ready</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 7. PEARSON */}
                                <div className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-soft transition-all group flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#00778B]/10 border border-[#00778B]/20 flex items-center justify-center text-[#00778B] shrink-0 group-hover:scale-105 transition-transform">
                                        <SiPearson className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                            <h4 className="font-display font-bold text-sm text-ink group-hover:text-[#00778B] transition-colors">
                                                Pearson
                                            </h4>
                                            <span className="text-[10px] font-extrabold uppercase tracking-tight px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                                Verified
                                            </span>
                                        </div>
                                        <div className="text-xs text-ink-secondary font-medium">
                                            MyLab &amp; Mastering
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-1 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span>Multi-part problem breakdown</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 8. GRADESCOPE */}
                                <div className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-soft transition-all group flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#006e5d] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                                        <span className="font-display font-black text-xs">GS</span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                            <h4 className="font-display font-bold text-sm text-ink group-hover:text-[#00A78E] transition-colors">
                                                Gradescope
                                            </h4>
                                            <span className="text-[10px] font-extrabold uppercase tracking-tight px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                                OCR
                                            </span>
                                        </div>
                                        <div className="text-xs text-ink-secondary font-medium">
                                            Online Exams &amp; Quizzes
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-1 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span>Code &amp; diagram OCR auto-parse</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 9. COURSERA & EDX */}
                                <div className="p-4 rounded-2xl bg-[#faf8f5] hover:bg-white border border-black/5 hover:border-black/15 shadow-xs hover:shadow-soft transition-all group flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#0056D2]/10 border border-[#0056D2]/20 flex items-center justify-center text-[#0056D2] shrink-0 group-hover:scale-105 transition-transform">
                                        <SiCoursera className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                            <h4 className="font-display font-bold text-sm text-ink group-hover:text-[#0056D2] transition-colors">
                                                Coursera &amp; edX
                                            </h4>
                                            <span className="text-[10px] font-extrabold uppercase tracking-tight px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                                1-Click
                                            </span>
                                        </div>
                                        <div className="text-xs text-ink-secondary font-medium">
                                            Graded Certification Quizzes
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-1 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span>Instant MCQ answer injection</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* =========================================================
                                SHOWSTOPPER: THE "✦ ANY PLATFORM / WEBSITE" HIGHLIGHT CARD
                               ========================================================= */}
                            <div className="rounded-2xl bg-gradient-to-br from-[#0c1322] via-[#091526] to-[#050c18] border-2 border-emerald-400/40 p-5 sm:p-7 text-white shadow-lift relative overflow-hidden group">
                                
                                {/* Background Ambient Ray */}
                                <div className="absolute top-0 right-1/4 w-96 h-32 bg-emerald-500/15 blur-3xl pointer-events-none rounded-full group-hover:bg-emerald-500/25 transition-all duration-700" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-black shrink-0 shadow-md group-hover:scale-105 transition-transform">
                                            <Sparkles className="w-6 h-6 fill-black" />
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h4 className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
                                                    ✦ Works on ANY Website, Exam Portal or LMS
                                                </h4>
                                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-black text-[10px] font-black uppercase tracking-wider shadow-xs">
                                                    UNIVERSAL VISION MODE
                                                </span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-[#b8ccdf] leading-relaxed max-w-2xl">
                                                Taking an exam on a proprietary university portal, Google Classroom, WileyPLUS, Cengage, Kahoot, or a corporate screening test? ExamGhost&apos;s <strong>Snap-It Vision OCR</strong> runs completely in-memory. If a question appears on your screen, ExamGhost decodes and solves it instantly—zero LMS API access required.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                                        <div className="text-left md:text-right">
                                            <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                                                Instant Global Shortcut
                                            </div>
                                            <div className="font-mono text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                                                <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20">⌘ + B</span>
                                                <span className="text-[#89a2be] text-xs">or</span>
                                                <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20">Ctrl + B</span>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 rounded-full whitespace-nowrap">
                                            <Check className="w-3 h-3 text-emerald-400" />
                                            <span>100% of Webpages Covered</span>
                                        </span>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
