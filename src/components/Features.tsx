'use client';

import React, { useState } from 'react';
import { 
    Shield, Sparkles, Layers, EyeOff, 
    Check, Lock, Zap, CheckCircle2,
    Crop, BookOpen, Sliders,
    MousePointerClick, ListChecks, KeyRound, Sun
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

interface ToolItem {
    id: string;
    name: string;
    sub: string;
    icon: React.ElementType;
    badge: string;
}

interface ToolCategory {
    id: string;
    label: string;
    count: string;
    bg: string;
    tagline: string;
    headline: string;
    description: string;
    bullets: string[];
    tools: ToolItem[];
}

const CATEGORIES: ToolCategory[] = [
    {
        id: 'modes',
        label: '3 Solver Modes',
        count: 'Alt+1 / 2 / 3',
        bg: '#c4d0f8',
        tagline: '3 SOLVER MODES · ALT+1 · ALT+2 · ALT+3',
        headline: 'Three ways to solve. Switch in one click.',
        description: 'Press Alt+1, Alt+2, or Alt+3 on any quiz page to switch instantly between silent auto-fill, subtle checkmark hints, and step-by-step explanations.',
        bullets: [
            'Invisible Mode (Alt+1)',
            'Stealth Auto-Fill (Alt+2)',
            'Step-by-Step Explain (Alt+3)',
            'Instant Cross-Tab Sync'
        ],
        tools: [
            {
                id: 'stealth-mode',
                name: 'Stealth Mode',
                sub: 'Auto-fills or marks options with ✓',
                icon: Shield,
                badge: 'Alt+2'
            },
            {
                id: 'invisible-mode',
                name: 'Invisible Mode',
                sub: 'Zero screen traces + clipboard copy',
                icon: EyeOff,
                badge: 'Alt+1'
            },
            {
                id: 'explain-mode',
                name: 'Explain Mode',
                sub: 'Step-by-step answer & rationale',
                icon: BookOpen,
                badge: 'Alt+3'
            },
            {
                id: 'instant-hotkeys',
                name: 'Instant Mode Hotkeys',
                sub: 'Switch modes any time mid-quiz',
                icon: Sliders,
                badge: 'Synced'
            }
        ]
    },
    {
        id: 'autofill',
        label: 'Auto-Fill & Delivery',
        count: '4 Formats',
        bg: '#bfe3f6',
        tagline: 'SMART AUTO-FILL · EVERY QUESTION FORMAT',
        headline: 'Fills radios, checkboxes, dropdowns, and inputs.',
        description: 'ExamGhost detects the exact question format on the page and selects the right choice—or highlights it with a subtle ✓ so you can click it yourself.',
        bullets: [
            'Single-choice radio buttons',
            'Multi-select checkboxes',
            'Inline Cloze dropdown menus',
            'Short-answer text inputs'
        ],
        tools: [
            {
                id: 'mcq-multi-engine',
                name: 'Radio & Checkbox Select',
                sub: 'Selects all right choices inline',
                icon: CheckCircle2,
                badge: 'MCQ'
            },
            {
                id: 'dropdown-cloze',
                name: 'Dropdown Blank Solver',
                sub: 'Picks matching dropdown choices',
                icon: Layers,
                badge: 'Select'
            },
            {
                id: 'native-input-typing',
                name: 'Short-Answer Input Fill',
                sub: 'Fills short-answer text inputs',
                icon: Zap,
                badge: 'Input'
            },
            {
                id: 'stealth-tick-hint',
                name: 'Subtle ✓ Hint & Copy',
                sub: 'Marks with ✓ or copies answer',
                icon: Sparkles,
                badge: '✓ / Copy'
            }
        ]
    },
    {
        id: 'snip',
        label: 'Snap-It OCR (Alt+S)',
        count: 'Vision + DOM',
        bg: '#e2d3fa',
        tagline: 'SNAP-IT OCR · ALT+S REGION CAPTURE',
        headline: 'Drag a box over any diagram, graph, or formula.',
        description: 'Press Alt+S and drag over any image, chart, or locked question. ExamGhost reads both the screenshot and page text to solve and auto-fill in seconds.',
        bullets: [
            'Alt+S crosshair region crop',
            'High-DPI math & LaTeX OCR',
            'Reads graphs & chemistry rings',
            'Auto-fills inside the cropped box'
        ],
        tools: [
            {
                id: 'launch-snip-tool',
                name: 'Region Crop Tool',
                sub: 'Drag around any question on screen',
                icon: Crop,
                badge: 'Alt+S'
            },
            {
                id: 'hybrid-fusion',
                name: 'Vision + Text Fusion',
                sub: 'Pairs screenshot with page text',
                icon: Sparkles,
                badge: 'Hybrid'
            },
            {
                id: 'bounding-autofill',
                name: 'In-Box Auto-Fill',
                sub: 'Auto-fills right after snipping',
                icon: CheckCircle2,
                badge: 'Auto-Fill'
            },
            {
                id: 'diagram-math-ocr',
                name: 'STEM Graphs & Formulas',
                sub: 'Solves charts, circuits & math',
                icon: Lock,
                badge: 'STEM AI'
            }
        ]
    },
    {
        id: 'doubleclick',
        label: 'Double-Click & AI',
        count: 'Smart Guard',
        bg: '#cdeecb',
        tagline: 'DOUBLE-CLICK SOLVER · BUILT-IN ACCURACY',
        headline: 'Double-click any question to solve inline.',
        description: 'Double-click anywhere on a question card for an instant answer. Built-in trap detection catches trick words like NOT and EXCEPT before locking in the choice.',
        bullets: [
            '1-second inline double-click solve',
            'Catches NOT / EXCEPT trap words',
            'Eliminates wrong choices first',
            'Multi-model high-speed fallback'
        ],
        tools: [
            {
                id: 'dblclick-solver',
                name: 'Double-Click to Solve',
                sub: 'Double-click any question or option',
                icon: MousePointerClick,
                badge: '2× Click'
            },
            {
                id: 'trap-detection',
                name: 'Trap-Word Detection',
                sub: 'Catches NOT & EXCEPT trick words',
                icon: ListChecks,
                badge: 'Accuracy'
            },
            {
                id: 'false-positive-guard',
                name: 'Smart Quiz Detection',
                sub: 'Only runs on real quiz questions',
                icon: Shield,
                badge: 'Guarded'
            },
            {
                id: 'model-fallback',
                name: 'Multi-Model Speed Chain',
                sub: 'Instant failover for 99.9% uptime',
                icon: Zap,
                badge: '< 1.2s'
            }
        ]
    },
    {
        id: 'controls',
        label: 'Quota & Study Hub',
        count: '5/Day',
        bg: '#bfe9d9',
        tagline: '5 FREE SOLVES / DAY · MULTI-MODEL STUDY HUB',
        headline: '5 free solves every day + full Study AI Hub on paid plans.',
        description: 'Start immediately with 5 free solves per day (auto-refills every 24h). Paid plans unlock unlimited extension solves plus the Claude 3.7, ChatGPT, and DeepSeek-R1 Study & Homework AI Workspace.',
        bullets: [
            '5 free solves / day included ($0, no card)',
            'Claude 3.7 + ChatGPT + DeepSeek Study Hub',
            '⌘+Shift+U master pause shortcut',
            'Dark & Light extension popup'
        ],
        tools: [
            {
                id: 'free-quota-license',
                name: '5 Free Solves / Day',
                sub: 'Auto-refills every 24h with no signup',
                icon: Sparkles,
                badge: '5/Day Free'
            },
            {
                id: 'study-ai-hub',
                name: 'Claude + ChatGPT + DeepSeek Hub',
                sub: 'Specialized homework & study AI wrapper',
                icon: Lock,
                badge: 'Paid Bonus'
            },
            {
                id: 'master-power-switch',
                name: 'Master Pause Shortcut',
                sub: 'Pause or resume anytime via hotkey',
                icon: KeyRound,
                badge: '⌘+Shift+U'
            },
            {
                id: 'theme-appearance',
                name: 'Dark & Light Popup',
                sub: 'Switch between dark & light mode',
                icon: Sun,
                badge: 'Themes'
            }
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
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>BUILT FOR SPEED &amp; SIMPLICITY</span>
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Everything you need to solve,<br />
                        completely invisible.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Switch modes with <code className="text-ink font-semibold">Alt+1/2/3</code>, double-click any question to auto-fill, or press <code className="text-ink font-semibold">Alt+S</code> to snip diagrams and formulas.
                    </p>
                </div>

                {/* Pastel Showcase Container */}
                <div 
                    className="rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 md:p-12 transition-colors duration-500 border border-black/5 shadow-card relative overflow-hidden"
                    style={{ backgroundColor: activeCategory.bg }}
                >
                    {/* Top Floating Capsule Tabs */}
                    <div className="flex justify-center mb-10 overflow-x-auto pb-2">
                        <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white/45 backdrop-blur-md border border-white/70 shadow-xs">
                            {CATEGORIES.map((cat, idx) => {
                                const isSelected = idx === activeCategoryIndex;
                                return (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => handleTabChange(idx)}
                                        className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                                            isSelected
                                                ? 'bg-white text-ink shadow-soft'
                                                : 'text-ink/75 hover:text-ink hover:bg-white/35'
                                        }`}
                                    >
                                        <span>{cat.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* All 5 Categories Mounted in SSR DOM */}
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
                                {/* Left Column: Clean macOS Feature List Card */}
                                <div className="lg:col-span-5">
                                    <div className="bg-white rounded-3xl border border-black/10 shadow-lift overflow-hidden">
                                        
                                        {/* Clean Window Header */}
                                        <div className="bg-[#f7f5f0] border-b border-black/5 px-5 py-3.5 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                                                <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                                                <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                                                <span className="text-xs font-bold text-ink ml-2">
                                                    {category.label}
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-mono text-ink-muted font-semibold bg-white px-2.5 py-0.5 rounded-full border border-black/5">
                                                {category.count}
                                            </span>
                                        </div>

                                        {/* 4 Spacious, Clean Feature Rows (Zero Truncation) */}
                                        <div className="p-4 space-y-2.5 bg-[#faf8f5]/60">
                                            {category.tools.map((tool, tIdx) => {
                                                const Icon = tool.icon;
                                                const isToolActive = isCurrentCat && tIdx === activeToolIndex;
                                                return (
                                                    <button
                                                        key={tool.id}
                                                        type="button"
                                                        onClick={() => setActiveToolIndex(tIdx)}
                                                        className={`w-full text-left p-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                                                            isToolActive
                                                                ? 'bg-white shadow-soft border border-black/10 text-ink scale-[1.01]'
                                                                : 'hover:bg-white/70 text-ink/80 border border-transparent'
                                                        }`}
                                                    >
                                                        <div className="flex items-center gap-3.5 min-w-0">
                                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                                                isToolActive ? 'bg-ink text-white' : 'bg-black/5 text-ink'
                                                            }`}>
                                                                <Icon className="w-5 h-5" />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <div className="text-sm font-bold text-ink leading-snug">
                                                                    {tool.name}
                                                                </div>
                                                                <div className="text-xs text-ink-muted leading-snug">
                                                                    {tool.sub}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full shrink-0 ${
                                                            isToolActive 
                                                                ? 'bg-ink text-white' 
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

                                {/* Right Column: Instant Clarity Hierarchy */}
                                <div className="lg:col-span-7 flex flex-col justify-center">
                                    
                                    {/* Eyebrow Category Tag */}
                                    <div className="text-xs font-bold tracking-widest uppercase text-ink/70 mb-3">
                                        {category.tagline}
                                    </div>

                                    {/* Big Bold Headline */}
                                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.08] mb-5">
                                        {category.headline}
                                    </h3>

                                    {/* Concise 2-Line Description */}
                                    <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-normal mb-8 max-w-xl">
                                        {category.description}
                                    </p>

                                    {/* Clean 2x2 Grid of Short Checkmarks */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9 max-w-xl">
                                        {category.bullets.map((bullet, bIdx) => (
                                            <div
                                                key={bIdx}
                                                onClick={() => setActiveToolIndex(bIdx)}
                                                className="flex items-center gap-3 text-sm font-semibold text-ink bg-white/55 hover:bg-white/80 px-4 py-3 rounded-2xl border border-white/80 shadow-2xs transition-all cursor-pointer"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3 stroke-[2.5]" />
                                                </div>
                                                <span>{bullet}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Single Primary CTA */}
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
