'use client';

import React, { useState } from 'react';
import { 
    Shield, ScanLine, Sparkles, Layers, Eye, 
    Check, Lock, ArrowRight, Zap, CheckCircle2,
    Camera, Terminal, MonitorCheck, KeyRound, Cpu
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

interface ToolCategory {
    id: string;
    label: string;
    count: string;
    bg: string;
    accent: string;
    tagline: string;
    headline: string;
    description: string;
    bullets: string[];
    tools: {
        id: string;
        name: string;
        sub: string;
        icon: React.ElementType;
        badge: string;
    }[];
}

const CATEGORIES: ToolCategory[] = [
    {
        id: 'stealth',
        label: 'Stealth & Shield',
        count: '5 tools',
        bg: '#c4d0f8', // Periwinkle
        accent: '#3b5bdb',
        tagline: 'STEALTH · 5 TOOLS',
        headline: 'Zero blur events, zero flags, without touching page scripts.',
        description: 'ExamGhost operates entirely in an isolated Shadow DOM container. It silences browser window.blur and visibilitychange listeners, so Canvas continuously records a 100% active, focused session.',
        bullets: [
            'Window blur event silencer',
            'Zero DOM mutation traces',
            'Tab-switch interception',
            '0 SpeedGrader alert flags'
        ],
        tools: [
            { id: 'focus-shield', name: 'Focus Shield', sub: 'Intercepts blur & tab switch events', icon: Shield, badge: '0 Flags' },
            { id: 'shadow-dom', name: 'Shadow DOM Sandbox', sub: 'Zero footprint in page inspector', icon: Lock, badge: 'Isolated' },
            { id: 'clipboard-guard', name: 'Clipboard Guard', sub: 'Bypasses right-click & copy locks', icon: Zap, badge: 'Unlocked' },
            { id: 'heartbeat-spoof', name: 'Heartbeat Spoofer', sub: 'Simulates regular human cursor jitter', icon: Cpu, badge: 'Humanized' },
            { id: 'action-neutralizer', name: 'SpeedGrader Silencer', sub: 'Neutralizes Canvas teacher action log', icon: Terminal, badge: 'Audit Proof' }
        ]
    },
    {
        id: 'vision',
        label: 'Vision & OCR',
        count: '4 tools',
        bg: '#bfe3f6', // Sky
        accent: '#1971c2',
        tagline: 'VISION & OCR · 4 TOOLS',
        headline: 'Instant visual solve for formulas, diagrams and locked text.',
        description: 'When exam text is unhighlightable or rendered inside Canvas New Quizzes canvas objects, hit ⌘+Shift+S. Our in-memory multimodal OCR decodes chemistry, calculus, and diagrams in under 350ms.',
        bullets: [
            'Calculus & chemical equations',
            'Screenshot-less in-memory OCR',
            'Chart & diagram recognition',
            'Sub-350ms solve latency'
        ],
        tools: [
            { id: 'snap-it', name: 'Snap-It Vision OCR', sub: 'Drag crop over any question area', icon: Camera, badge: '0.3s' },
            { id: 'latex-engine', name: 'Mathpix LaTeX Engine', sub: 'Decodes calculus integrals & matrices', icon: Sparkles, badge: 'LaTeX' },
            { id: 'diagram-decoder', name: 'Diagram & Chart Parser', sub: 'Understands biology & circuit graphs', icon: ScanLine, badge: 'Visual AI' },
            { id: 'unselectable-fix', name: 'CSS User-Select Fix', sub: 'Forces disabled text to be selectable', icon: Lock, badge: 'Native' }
        ]
    },
    {
        id: 'solvers',
        label: 'AI Solvers',
        count: '5 tools',
        bg: '#e2d3fa', // Lilac
        accent: '#6741d9',
        tagline: 'AI SOLVERS · 5 TOOLS',
        headline: 'Step-by-step logic, code synthesis, and natural timing.',
        description: 'Powered by fine-tuned reasoning models that prioritize accuracy over speed. ExamGhost solves multiple-choice, multi-select checkboxes, and short-answer prompts with human-like typing delays.',
        bullets: [
            'Multi-select checkbox bundles',
            'Humanized typing jitter delay',
            'Fill-in-the-blank autotype',
            'Full reasoning explanation drawer'
        ],
        tools: [
            { id: 'mcq-solver', name: 'MCQ Auto-Select', sub: 'Radio-selects with natural jitter delay', icon: CheckCircle2, badge: '99.8%' },
            { id: 'multi-select', name: 'Multi-Select Bundler', sub: 'Accurately checks all true options', icon: Check, badge: 'Exact' },
            { id: 'short-answer', name: 'Short Answer Synthesizer', sub: 'Concise answers in authentic student voice', icon: Sparkles, badge: 'Human' },
            { id: 'step-reasoner', name: 'Deep Step-by-Step Reasoner', sub: 'Breaks down theorem and formula logic', icon: Cpu, badge: 'Reasoning' },
            { id: 'code-debugger', name: 'Code & Syntax Solver', sub: 'Python, Java, C++, SQL debugging', icon: Terminal, badge: 'Multi-Lang' }
        ]
    },
    {
        id: 'lms',
        label: 'LMS Immunity',
        count: '4 tools',
        bg: '#cdeecb', // Mint
        accent: '#2f9e44',
        tagline: 'LMS IMMUNITY · 4 TOOLS',
        headline: 'Built specifically for Canvas, Blackboard, Moodle, and D2L.',
        description: 'Every learning management system has different logging hooks. ExamGhost patches Canvas New Quizzes WebSocket packets, Blackboard SafeAssign telemetry, and Moodle session beacons.',
        bullets: [
            'Canvas New Quizzes support',
            'Blackboard SafeAssign shield',
            'Moodle Quiz environment',
            'D2L Brightspace immunity'
        ],
        tools: [
            { id: 'canvas-hook', name: 'Canvas Quizzes & New Quizzes', sub: 'Direct WebSocket heartbeat override', icon: Layers, badge: 'Canvas' },
            { id: 'bb-shield', name: 'Blackboard Ultra Shield', sub: 'Blocks SafeAssign activity beacons', icon: Shield, badge: 'Blackboard' },
            { id: 'moodle-beacon', name: 'Moodle Beacon Blocker', sub: 'Silences quiz telemetry pings', icon: Lock, badge: 'Moodle' },
            { id: 'd2l-hook', name: 'D2L Brightspace Mask', sub: 'Zero focus loss on quiz submissions', icon: MonitorCheck, badge: 'D2L' }
        ]
    },
    {
        id: 'proctor',
        label: 'Proctor Armor',
        count: '3 tools',
        bg: '#ffd5cc', // Blush
        accent: '#e03131',
        tagline: 'PROCTOR ARMOR · 3 TOOLS',
        headline: 'Silent WebRTC screen protection, zero process leaks.',
        description: 'Honorlock and Proctorio monitor background processes and WebRTC screen-shares. ExamGhost routes all graphical rendering off-screen, completely bypassing screen capture hooks.',
        bullets: [
            'WebRTC screen-share mask',
            'Off-screen render buffer',
            'Isolated Shadow DOM root',
            'Clean process inspector'
        ],
        tools: [
            { id: 'webrtc-mask', name: 'WebRTC Screen-Share Mask', sub: 'HUD remains invisible on captured video', icon: MonitorCheck, badge: 'Immune' },
            { id: 'process-cloaker', name: 'Process Cloaker', sub: 'Disguises memory footprint as Chrome tab', icon: Lock, badge: 'Zero Leak' },
            { id: 'audio-silencer', name: 'Click & Keypress Silencer', sub: 'Dampens audio cues for proctor mics', icon: Zap, badge: 'Whisper' }
        ]
    },
    {
        id: 'hud',
        label: 'Ghost HUD',
        count: '3 tools',
        bg: '#bfe9d9', // Teal
        accent: '#0ca678',
        tagline: 'GHOST HUD · 3 TOOLS',
        headline: 'Invisible hotkeys, opacity dial, and 10ms emergency kill.',
        description: 'A floating translucent interface designed to be seen only by you. Dial opacity from 100% down to 5% whisper mode, toggle instantly with ⌘+B, or press Esc to purge memory in 8 milliseconds.',
        bullets: [
            '0% to 100% opacity slider dial',
            '10ms emergency panic kill (Esc)',
            'Customizable stealth hotkeys',
            'RAM & DOM instant purge'
        ],
        tools: [
            { id: 'opacity-slider', name: 'Stealth Opacity Dial', sub: 'Adjust from 100% to 5% whisper mode', icon: Eye, badge: '0-100%' },
            { id: 'panic-key', name: 'Emergency Panic Key (Esc)', sub: 'Purges HUD & RAM buffer in 8ms', icon: Zap, badge: '10ms Kill' },
            { id: 'ghost-hotkeys', name: 'Native Hotkey Resonance', sub: '⌘+B to toggle, ⌘+Shift+S to scan', icon: KeyRound, badge: 'Native' }
        ]
    }
];

export default function Features() {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeToolIndex, setActiveToolIndex] = useState(0);

    const activeCategory = CATEGORIES[activeCategoryIndex];
    const activeTool = activeCategory.tools[activeToolIndex] || activeCategory.tools[0];

    const handleTabChange = (index: number) => {
        setActiveCategoryIndex(index);
        setActiveToolIndex(0);
    };

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="tools">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>24 STEALTH TOOLS</span>
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Everything you reach for,<br />
                        already in the sidebar.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Click through the categories below to explore how ExamGhost intercepts exam events, solves complex questions, and keeps your test session 100% invisible.
                    </p>
                </div>

                {/* Massive OneMacApp Style Pastel Container */}
                <div 
                    className="rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 md:p-12 transition-colors duration-500 border border-black/5 shadow-card relative overflow-hidden"
                    style={{ backgroundColor: activeCategory.bg }}
                >
                    {/* Top Floating Capsule Tabs (OneMacApp Style) */}
                    <div className="flex justify-center mb-10 overflow-x-auto pb-2">
                        <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-xs">
                            {CATEGORIES.map((cat, idx) => {
                                const isSelected = idx === activeCategoryIndex;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleTabChange(idx)}
                                        className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                                            isSelected
                                                ? 'bg-white text-ink shadow-soft'
                                                : 'text-ink/70 hover:text-ink hover:bg-white/30'
                                        }`}
                                    >
                                        <span>{cat.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* 2-Column Layout (macOS Sidebar on Left + Editorial Details on Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

                        {/* Left Column: macOS Native App Window Sidebar (OneMacApp Layout) */}
                        <div className="lg:col-span-5">
                            <div className="bg-white rounded-3xl border border-black/10 shadow-lift overflow-hidden">
                                
                                {/* macOS Window Title Bar */}
                                <div className="bg-[#f7f5f0] border-b border-black/5 px-4 sm:px-5 py-3.5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                                        <span className="text-xs font-bold text-ink ml-2">
                                            {activeCategory.label}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-semibold text-ink-muted bg-black/5 px-2.5 py-0.5 rounded-full">
                                        {activeCategory.count}
                                    </span>
                                </div>

                                {/* Sidebar Tool Items List */}
                                <div className="p-3 sm:p-4 space-y-1.5 bg-[#faf8f5]/80">
                                    {activeCategory.tools.map((tool, tIdx) => {
                                        const Icon = tool.icon;
                                        const isToolActive = tIdx === activeToolIndex;
                                        return (
                                            <button
                                                key={tool.id}
                                                onClick={() => setActiveToolIndex(tIdx)}
                                                className={`w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-center justify-between gap-3 ${
                                                    isToolActive
                                                        ? 'bg-white shadow-soft border border-black/10 text-ink scale-[1.01]'
                                                        : 'hover:bg-white/60 text-ink/75 border border-transparent'
                                                }`}
                                            >
                                                <div className="flex items-center gap-3 min-w-0">
                                                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                                                        isToolActive ? 'bg-ink text-white' : 'bg-black/5 text-ink'
                                                    }`}>
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="text-xs font-bold truncate text-ink">
                                                            {tool.name}
                                                        </div>
                                                        <div className="text-[11px] text-ink-muted truncate">
                                                            {tool.sub}
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                                                    isToolActive 
                                                        ? 'bg-ink/5 text-ink' 
                                                        : 'bg-black/5 text-ink-muted'
                                                }`}>
                                                    {tool.badge}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Category Details & Bullets (OneMacApp Layout) */}
                        <div className="lg:col-span-7 flex flex-col justify-center">
                            
                            {/* Eyebrow Category Tag */}
                            <div className="text-xs font-bold tracking-widest uppercase text-ink/70 mb-3">
                                {activeCategory.tagline}
                            </div>

                            {/* Big Bold Headline */}
                            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.08] mb-5">
                                {activeCategory.headline}
                            </h3>

                            {/* Descriptive Paragraph */}
                            <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-normal mb-8 max-w-xl">
                                {activeCategory.description}
                            </p>

                            {/* 2x2 Grid of Checkmarks (OneMacApp Style) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9 max-w-lg">
                                {activeCategory.bullets.map((bullet, bIdx) => (
                                    <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-ink">
                                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0">
                                            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                                        </div>
                                        <span>{bullet}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Dark CTA Button */}
                            <div>
                                <a
                                    href="/#pricing"
                                    className="btn-dark px-7 py-3.5 text-base shadow-soft hover:shadow-lift inline-flex"
                                >
                                    <FaChrome className="w-4 h-4 text-[#bfe3f6]" />
                                    <span>Get ExamGhost</span>
                                    <span className="opacity-70 font-normal">· $19.99</span>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
