'use client';

import React from 'react';
import { 
    Shield, Sparkles, Cpu, Lock, Eye, CheckCircle2, 
    Layers, ScanLine, KeyRound, MonitorCheck, Zap
} from 'lucide-react';

export default function Integrations() {
    const categories = [
        {
            count: "5 tools",
            title: "Stealth & Shield",
            desc: "Focus Shield, Zero-Log Canvas Hook, Window Blur Blocker and Clipboard Protector",
            bg: "#c4d0f8", // Periwinkle
            accent: "#4361ee",
            icon: Shield,
            badge: "0 SpeedGrader Flags",
            features: ["Window blur event silencer", "Tab-switch interception", "Zero DOM mutation traces"]
        },
        {
            count: "4 tools",
            title: "Vision & OCR",
            desc: "Snap-It Vision, Mathpix LaTeX Engine, Diagram Decoder and Multi-Column Parser",
            bg: "#bfe3f6", // Sky
            accent: "#0077b6",
            icon: ScanLine,
            badge: "0.3s Vision Latency",
            features: ["Calculus & chemical equations", "Chart & diagram recognition", "Screenshot-less in-memory OCR"]
        },
        {
            count: "5 tools",
            title: "AI Solvers",
            desc: "Instant MCQ Selection, Step-by-Step Logic, Short Answer Synthesizer and Code Engine",
            bg: "#e2d3fa", // Lilac
            accent: "#7209b7",
            icon: Sparkles,
            badge: "99.8% Test Accuracy",
            features: ["Multi-select checkboxes", "Fill-in-the-blank autotype", "Humanized response delays"]
        },
        {
            count: "4 tools",
            title: "LMS Immunity",
            desc: "Native hooks for Canvas Quizzes & New Quizzes, Blackboard Ultra, Moodle and D2L",
            bg: "#cdeecb", // Mint
            accent: "#2d6a4f",
            icon: Layers,
            badge: "All Major Platforms",
            features: ["Canvas New Quizzes support", "Blackboard SafeAssign shield", "Moodle Quiz environment"]
        },
        {
            count: "3 tools",
            title: "Proctor Armor",
            desc: "Honorlock Sandbox, Respondus WebRTC Shield and Dual-Screen Mirror Protection",
            bg: "#ffd5cc", // Blush
            accent: "#d90429",
            icon: Lock,
            badge: "Proctor Immune",
            features: ["WebRTC screen share mask", "Isolated Shadow DOM root", "Clean process inspector"]
        },
        {
            count: "3 tools",
            title: "Ghost HUD",
            desc: "Invisible Hotkeys (⌘+B), Dynamic Opacity Dial (0-100%) and Instant Panic Key (Esc)",
            bg: "#bfe9d9", // Teal
            accent: "#006d77",
            icon: Eye,
            badge: "Instant Disappear",
            features: ["0% to 100% opacity slider", "Panic switch memory purge", "Customizable stealth hotkeys"]
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
                        Stop hunting for a buggy screenshot tool, a risky copy-paste script and a sketchy AI extension that triggers Canvas flags. ExamGhost puts 24 stealth tools in one calm, undetectable browser extension.
                    </p>
                </div>

                {/* Categories Grid (OneMacApp 6 Pastel Cards) */}
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

                                    <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal mb-6">
                                        {cat.desc}
                                    </p>
                                </div>

                                {/* Interactive Illustration Box Inside Card */}
                                <div className="mt-2 bg-white/85 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-xs">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <div className="w-7 h-7 rounded-xl bg-ink/5 flex items-center justify-center">
                                            <Icon className="w-3.5 h-3.5 text-ink" />
                                        </div>
                                        <span className="text-xs font-bold text-ink tracking-tight">
                                            Stealth Protocol
                                        </span>
                                    </div>

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

                {/* Bottom Platform Compatibility Pill Bar */}
                <div className="mt-14 max-w-4xl mx-auto rounded-full bg-white/80 backdrop-blur-md border border-black/5 px-6 py-4 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-ink-secondary">
                    <span className="font-semibold text-ink flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Supported Platforms:
                    </span>
                    {['Canvas Quizzes', 'Canvas New Quizzes', 'Blackboard Ultra', 'Moodle 4+', 'D2L Brightspace', 'McGraw Hill', 'Pearson MyLab'].map((p, i) => (
                        <span key={i} className="hover:text-ink transition-colors">
                            {p}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
}
