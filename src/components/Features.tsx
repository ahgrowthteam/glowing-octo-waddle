'use client';

import React, { useState } from 'react';
import { 
    Shield, ScanLine, Sparkles, Layers, Eye, 
    Check, Lock, Zap, CheckCircle2,
    Camera, MonitorCheck, KeyRound, Sliders
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
        id: 'modes',
        label: 'Display Modes',
        count: '3 modes',
        bg: '#c4d0f8', // Periwinkle
        accent: '#3b5bdb',
        tagline: 'DISPLAY MODES · 3 MODES',
        headline: 'Three ways to solve. Completely your call.',
        description: 'Choose how visible the solving is in one click from the popup. Stealth is on by default with a subtle natural indicator, Invisible operates with zero on-screen traces for screen-shares, and Explain unlocks step-by-step reasoning.',
        bullets: [
            'Invisible: Silent answer injection',
            'Stealth: Quiet micro-cursor (default)',
            'Explain: Full reasoning drawer',
            '1-tap mode switcher in popup'
        ],
        tools: [
            { id: 'stealth-mode', name: 'Stealth Mode (Default)', sub: 'Quiet cursor while solving, then applies answer', icon: Eye, badge: 'Default' },
            { id: 'invisible-mode', name: 'Invisible Mode', sub: 'Silent injection with zero on-screen traces', icon: Lock, badge: 'Silent' },
            { id: 'explain-mode', name: 'Explain Mode', sub: 'Applies answer + full step-by-step proof drawer', icon: Sparkles, badge: 'Deep Study' },
            { id: 'mode-toggle', name: 'Instant Mode Switcher', sub: 'Toggle between all 3 modes in 1 click from popup', icon: Sliders, badge: 'Instant' }
        ]
    },
    {
        id: 'methods',
        label: 'Answer Methods',
        count: '3 methods',
        bg: '#bfe3f6', // Sky
        accent: '#1971c2',
        tagline: 'ANSWER METHODS · 3 METHODS',
        headline: 'Three delivery methods. Pick what fits the quiz.',
        description: 'Independent of your display mode, choose how the answer lands on your page. Auto-fill selects the right choice directly, Highlight marks the option so you click it yourself, and Clipboard silently copies for essay prompts.',
        bullets: [
            'Auto-fill: Direct option selection',
            'Highlight: 1–10s glow to self-click',
            'Clipboard: Silent copy for essays',
            'Configurable highlight duration'
        ],
        tools: [
            { id: 'auto-fill', name: 'Auto-fill Engine', sub: 'Directly selects the right radio or checkbox', icon: CheckCircle2, badge: 'Default' },
            { id: 'smart-highlight', name: 'Smart Highlight', sub: 'Marks the correct option so you click yourself', icon: Sparkles, badge: '1-10s Glow' },
            { id: 'silent-clipboard', name: 'Silent Clipboard', sub: 'Copies text answer to clipboard for typing', icon: Zap, badge: 'Essay Safe' },
            { id: 'duration-dial', name: 'Configurable Duration', sub: 'Adjust glow duration from 1s to 10s (default 4s)', icon: Sliders, badge: 'Custom' }
        ]
    },
    {
        id: 'sniping',
        label: 'Snap-It Vision',
        count: '4 tools',
        bg: '#e2d3fa', // Lilac
        accent: '#6741d9',
        tagline: 'SNAP-IT VISION · 4 TOOLS',
        headline: 'Draw to solve formulas, diagrams, and locked text.',
        description: 'Can’t double-click a question or text is unselectable? Hit ⌘+Shift+S, draw a crop box around any problem, equation, or diagram, and let ExamGhost read the image and return the exact answer with proof.',
        bullets: [
            'Calculus & chemical equations',
            'Bypasses text-selection locks',
            'Chart, graph & diagram recognition',
            'Works on PDFs, slides & canvas'
        ],
        tools: [
            { id: 'snap-it', name: 'Snap-It Sniping (⌘+Shift+S)', sub: 'Drag crop rectangle around any question area', icon: Camera, badge: '0.3s' },
            { id: 'latex-engine', name: 'LaTeX & Formula Engine', sub: 'Decodes calculus integrals, limits & matrices', icon: Sparkles, badge: 'LaTeX' },
            { id: 'diagram-decoder', name: 'Diagram & Chart Parser', sub: 'Understands biology, circuits & organic chemistry', icon: ScanLine, badge: 'Visual AI' },
            { id: 'unselectable-fix', name: 'Unselectable Text Bypass', sub: 'Solves canvas-rendered and protected quiz items', icon: Lock, badge: 'Universal' }
        ]
    },
    {
        id: 'lms',
        label: 'Platforms',
        count: '20+ LMSs',
        bg: '#cdeecb', // Mint
        accent: '#2f9e44',
        tagline: 'PLATFORMS · 20+ SUPPORTED',
        headline: 'Works with every LMS you already use.',
        description: 'ExamGhost runs client-side inside Chrome, Edge, Brave, and Arc. Whether you are on Canvas, Blackboard, Moodle, Google Classroom, Brightspace, or McGraw-Hill — double-tap any question and get the correct answer.',
        bullets: [
            'Canvas Quizzes & New Quizzes',
            'Blackboard Learn & Ultra',
            'Moodle & Google Classroom',
            'Brightspace, Pearson & McGraw-Hill'
        ],
        tools: [
            { id: 'canvas-hook', name: 'Canvas Quiz Solver', sub: 'Classic and New Quizzes solved inline in 1 click', icon: Layers, badge: 'Canvas' },
            { id: 'bb-shield', name: 'Blackboard Ultra Helper', sub: 'Double-click answer solve on all test questions', icon: Shield, badge: 'Blackboard' },
            { id: 'moodle-beacon', name: 'Moodle Quiz Solver', sub: 'Instant inline option selection & full explanation', icon: Lock, badge: 'Moodle' },
            { id: 'classroom-forms', name: 'Google Classroom & Forms', sub: 'Handles MCQs, multi-selects & short answers', icon: MonitorCheck, badge: 'Forms' }
        ]
    },
    {
        id: 'safety',
        label: 'Privacy & Control',
        count: '4 safety rules',
        bg: '#bfe9d9', // Teal
        accent: '#0ca678',
        tagline: 'PRIVACY & SAFETY · 4 RULES',
        headline: 'Off until you switch it on. Zero background activity.',
        description: 'ExamGhost only acts when you tell it to. It never runs in the background, requires no account to start, and leaves zero traces on your screen. Master shortcut ⌘+Shift+U turns it on and off instantly.',
        bullets: [
            'Off until you switch it on (⌘+Shift+U)',
            'No account required to start (50 free)',
            'Closed Shadow DOM container',
            'Uninstall cleanly in one click'
        ],
        tools: [
            { id: 'master-toggle', name: 'Master Shortcut (⌘+Shift+U)', sub: 'Toggle extension on and off in under 50ms', icon: KeyRound, badge: '⌘+Shift+U' },
            { id: 'no-account', name: 'No Account to Start', sub: '50 free questions immediately upon install', icon: Sparkles, badge: 'Free 50' },
            { id: 'shadow-dom', name: 'Closed Shadow DOM Container', sub: 'Leaves zero script or CSS footprints on pages', icon: Lock, badge: 'Isolated' },
            { id: 'clean-uninstall', name: '1-Click Chrome Uninstall', sub: 'Remove anytime with no tangled data or strings', icon: Zap, badge: 'Clean' }
        ]
    }
];

export default function Features() {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeToolIndex, setActiveToolIndex] = useState(0);

    const activeCategory = CATEGORIES[activeCategoryIndex];

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
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>BUILT FOR EXAMS · ZERO COMPLICATION</span>
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Everything you need to solve,<br />
                        completely invisible.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Click through the categories below to explore our 3 display modes, 3 answer delivery methods, Snap-It screenshot solving, and zero-footprint privacy architecture.
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

                    {/* All 5 Categories Mounted in SSR DOM for Search & AI Crawlers */}
                    {CATEGORIES.map((category, cIdx) => {
                        const isCurrentCat = cIdx === activeCategoryIndex;
                        return (
                            <div
                                key={category.id}
                                className={
                                    isCurrentCat
                                        ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center'
                                        : 'hidden'
                                }
                            >
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
                                                    {category.label}
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-bold text-ink bg-black/10 px-2.5 py-0.5 rounded-full">
                                                {category.count}
                                            </span>
                                        </div>

                                        {/* Sidebar Tool Items List */}
                                        <div className="p-3 sm:p-4 space-y-1.5 bg-[#faf8f5]/80">
                                            {category.tools.map((tool, tIdx) => {
                                                const Icon = tool.icon;
                                                const isToolActive = isCurrentCat && tIdx === activeToolIndex;
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
                                        {category.tagline}
                                    </div>

                                    {/* Big Bold Headline */}
                                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.08] mb-5">
                                        {category.headline}
                                    </h3>

                                    {/* Descriptive Paragraph */}
                                    <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-normal mb-8 max-w-xl">
                                        {category.description}
                                    </p>

                                    {/* 2x2 Grid of Checkmarks (OneMacApp Style) */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9 max-w-lg">
                                        {category.bullets.map((bullet, bIdx) => (
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
                                            href="https://discord.gg/aCcsyKYJq4"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-dark px-7 py-3.5 text-base shadow-soft hover:shadow-lift inline-flex items-center gap-2"
                                        >
                                            <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                                            <span>Get Extension</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
