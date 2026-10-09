'use client';

import React, { useState } from 'react';
import { 
    Shield, ScanLine, Sparkles, Layers, Eye, 
    Check, Lock, ArrowRight, Zap, RefreshCw, AlertTriangle, CheckCircle2
} from 'lucide-react';

interface ToolItem {
    id: string;
    name: string;
    blurb: string;
    category: string;
    icon: React.ElementType;
    badge: string;
    latency: string;
    risk: string;
    previewType: 'shield' | 'vision' | 'solver' | 'lms' | 'hud';
}

const ALL_TOOLS: ToolItem[] = [
    // Stealth & Shield
    {
        id: 'focus-shield',
        name: 'Focus Shield',
        blurb: 'Intercepts window.onblur and document.visibilitychange',
        category: 'shield',
        icon: Shield,
        badge: '0 SpeedGrader Logs',
        latency: '0.04ms',
        risk: '0.00%',
        previewType: 'shield'
    },
    {
        id: 'shadow-dom',
        name: 'Shadow DOM Sandbox',
        blurb: 'Renders HUD in closed isolated root invisible to page scripts',
        category: 'shield',
        icon: Lock,
        badge: 'Zero Footprint',
        latency: '0.12ms',
        risk: '0.00%',
        previewType: 'shield'
    },
    {
        id: 'clipboard-shield',
        name: 'Clipboard Guard',
        blurb: 'Bypasses right-click and copy-paste event listeners silently',
        category: 'shield',
        icon: Zap,
        badge: 'Copy Unlocked',
        latency: '0.08ms',
        risk: '0.00%',
        previewType: 'shield'
    },

    // Vision & OCR
    {
        id: 'snap-it',
        name: 'Snap-It Vision OCR',
        blurb: 'Instant screenshot-less optical scan of diagrams and charts',
        category: 'vision',
        icon: ScanLine,
        badge: '0.3s Vision Latency',
        latency: '310ms',
        risk: '0.00%',
        previewType: 'vision'
    },
    {
        id: 'mathpix-engine',
        name: 'Mathpix LaTeX Engine',
        blurb: 'Parses complex calculus integrals, matrices and chem formulas',
        category: 'vision',
        icon: Sparkles,
        badge: 'LaTeX Ready',
        latency: '340ms',
        risk: '0.00%',
        previewType: 'vision'
    },

    // AI Solvers
    {
        id: 'mcq-solver',
        name: 'Instant MCQ Auto-Select',
        blurb: 'Highlights and radio-selects correct option with natural jitter',
        category: 'solver',
        icon: Sparkles,
        badge: '99.8% Accuracy',
        latency: '420ms',
        risk: '0.00%',
        previewType: 'solver'
    },
    {
        id: 'short-answer',
        name: 'Short Answer Synthesizer',
        blurb: 'Generates concise, human-styled explanations in student tone',
        category: 'solver',
        icon: Sparkles,
        badge: 'Humanized Tone',
        latency: '580ms',
        risk: '0.00%',
        previewType: 'solver'
    },

    // LMS Hooks
    {
        id: 'canvas-hook',
        name: 'Canvas Native Hook',
        blurb: 'Deep hook for Classic Quizzes and New Quizzes engine',
        category: 'lms',
        icon: Layers,
        badge: 'Canvas Certified',
        latency: '0.05ms',
        risk: '0.00%',
        previewType: 'lms'
    },
    {
        id: 'blackboard-shield',
        name: 'Blackboard Ultra Shield',
        blurb: 'Blocks SafeAssign activity telemetry and test session logs',
        category: 'lms',
        icon: Layers,
        badge: 'Blackboard Ready',
        latency: '0.06ms',
        risk: '0.00%',
        previewType: 'lms'
    },

    // Ghost HUD
    {
        id: 'opacity-dial',
        name: 'Stealth Opacity Dial',
        blurb: 'Smoothly adjust HUD transparency from 100% to 5% whisper mode',
        category: 'hud',
        icon: Eye,
        badge: 'Adjustable 0-100%',
        latency: '0.01ms',
        risk: '0.00%',
        previewType: 'hud'
    },
    {
        id: 'panic-key',
        name: 'One-Key Panic Switch (Esc)',
        blurb: 'Instantly destroys HUD DOM tree and clears memory buffer',
        category: 'hud',
        icon: Zap,
        badge: 'Instant Kill',
        latency: '0.02ms',
        risk: '0.00%',
        previewType: 'hud'
    }
];

export default function Features() {
    const [selectedTab, setSelectedTab] = useState<'all' | 'shield' | 'vision' | 'solver' | 'lms' | 'hud'>('all');
    const [activeToolId, setActiveToolId] = useState<string>('focus-shield');

    // Interactive Demo State
    const [simulatedBlurCount, setSimulatedBlurCount] = useState(0);
    const [liveOpacity, setLiveOpacity] = useState(85);
    const [visionScanned, setVisionScanned] = useState(false);
    const [mcqSolved, setMcqSolved] = useState(false);
    const [panicTriggered, setPanicTriggered] = useState(false);

    const filteredTools = selectedTab === 'all' 
        ? ALL_TOOLS 
        : ALL_TOOLS.filter(t => t.category === selectedTab);

    const activeTool = ALL_TOOLS.find(t => t.id === activeToolId) || ALL_TOOLS[0];

    const tabCategories = [
        { id: 'all', label: 'All 24 Tools' },
        { id: 'shield', label: 'Stealth Shield' },
        { id: 'vision', label: 'Vision & OCR' },
        { id: 'solver', label: 'AI Solvers' },
        { id: 'lms', label: 'LMS Hooks' },
        { id: 'hud', label: 'Ghost HUD' }
    ];

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="tools">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Head */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>24 TOOLS IN ONE APP</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Everything you reach for,<br />
                        already in the sidebar.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Click any tool below to test how it intercepts Canvas events, solves complex exam problems, and keeps your browser session 100% invisible.
                    </p>
                </div>

                {/* Category Pill Tabs (OneMacApp Style) */}
                <div className="flex justify-center mb-10 overflow-x-auto pb-2">
                    <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-xs">
                        {tabCategories.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id as any)}
                                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                                    selectedTab === tab.id
                                        ? 'bg-ink text-white shadow-sm'
                                        : 'text-ink-secondary hover:text-ink hover:bg-black/5'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3-Pane Native macOS App Window */}
                <div className="bg-white rounded-3xl border border-black/10 shadow-lift overflow-hidden">

                    {/* Window Title Bar */}
                    <div className="bg-[#f7f5f0] border-b border-black/5 px-4 sm:px-6 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                            <span className="text-xs text-ink-muted font-medium ml-2">
                                ExamGhost Explorer — {activeTool.name}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">
                                Undetectable: {activeTool.risk} Risk
                            </span>
                        </div>
                    </div>

                    {/* 3-Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">

                        {/* Pane 1: Left Tool List (4 cols) */}
                        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-black/5 bg-[#faf8f4]/60 p-3 sm:p-4 space-y-1.5 overflow-y-auto max-h-[520px]">
                            {filteredTools.map((tool) => {
                                const Icon = tool.icon;
                                const isSelected = tool.id === activeToolId;
                                return (
                                    <button
                                        key={tool.id}
                                        onClick={() => {
                                            setActiveToolId(tool.id);
                                            setPanicTriggered(false);
                                        }}
                                        className={`w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-start gap-3 ${
                                            isSelected
                                                ? 'bg-white text-ink shadow-sm border border-black/10 scale-[1.01]'
                                                : 'hover:bg-black/5 text-ink-secondary hover:text-ink'
                                        }`}
                                    >
                                        <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                                            isSelected ? 'bg-ink text-white' : 'bg-black/5 text-ink'
                                        }`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between">
                                                <div className="text-xs sm:text-sm font-semibold truncate text-ink">
                                                    {tool.name}
                                                </div>
                                            </div>
                                            <div className="text-[11px] text-ink-muted truncate mt-0.5">
                                                {tool.blurb}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Pane 2: Center Interactive Playground (5 cols) */}
                        <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-white border-b lg:border-b-0 lg:border-r border-black/5">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-xs font-bold text-ink uppercase tracking-wider">
                                            Interactive Sandbox Preview
                                        </span>
                                    </div>
                                    <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-medium text-ink-muted">
                                        Active
                                    </span>
                                </div>

                                {/* Dynamic Preview based on Active Tool */}
                                {activeTool.id === 'focus-shield' && (
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-2xl bg-[#c4d0f8]/30 border border-[#c4d0f8] text-xs text-ink space-y-2">
                                            <div className="font-bold flex items-center gap-2">
                                                <Shield className="w-4 h-4 text-ink" />
                                                <span>Canvas Focus Interceptor</span>
                                            </div>
                                            <p className="text-ink/80 text-[11px] leading-relaxed">
                                                When you switch applications or open Discord, Canvas triggers a <code className="bg-white/80 px-1 rounded">window.onblur</code> event. ExamGhost captures this before Canvas receives it and emits a fake continuous focus heartbeat.
                                            </p>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5">
                                            <div className="text-xs font-semibold text-ink mb-2">
                                                Test Event Interception:
                                            </div>
                                            <button
                                                onClick={() => setSimulatedBlurCount(c => c + 1)}
                                                className="btn-dark w-full py-2.5 text-xs justify-center shadow-xs"
                                            >
                                                Simulate Tab Switch / Blur Event
                                            </button>
                                            <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between text-xs">
                                                <span className="text-ink-muted">Blur events intercepted:</span>
                                                <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                                    {simulatedBlurCount} (Canvas logged: 0)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTool.id === 'snap-it' && (
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-2xl bg-[#bfe3f6]/30 border border-[#bfe3f6] text-xs text-ink space-y-2">
                                            <div className="font-bold flex items-center gap-2">
                                                <ScanLine className="w-4 h-4 text-ink" />
                                                <span>Snap-It In-Memory Vision</span>
                                            </div>
                                            <p className="text-ink/80 text-[11px]">
                                                Extracts diagram vectors directly from the HTML5 canvas layer without taking detectable screen captures.
                                            </p>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5 text-center">
                                            <div className="font-mono text-sm font-bold text-ink py-3 bg-white rounded-xl border border-black/5 mb-3">
                                                f(x) = ∫ (3x² + 2x - 5) dx
                                            </div>
                                            <button
                                                onClick={() => setVisionScanned(true)}
                                                className="btn-dark w-full py-2.5 text-xs justify-center"
                                            >
                                                {visionScanned ? 'OCR Decoded in 310ms' : 'Scan Formula'}
                                            </button>
                                            {visionScanned && (
                                                <div className="mt-3 text-xs text-emerald-800 bg-[#cdeecb]/50 p-2.5 rounded-xl text-left font-mono">
                                                    Result: F(x) = x³ + x² - 5x + C (99.9% match)
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {activeTool.id === 'opacity-dial' && (
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-2xl bg-[#bfe9d9]/30 border border-[#bfe9d9] text-xs text-ink space-y-2">
                                            <div className="font-bold flex items-center gap-2">
                                                <Eye className="w-4 h-4 text-ink" />
                                                <span>Stealth Opacity Dial</span>
                                            </div>
                                            <p className="text-ink/80 text-[11px]">
                                                Adjust the HUD transparency so that answers are visible only to your naked eye at close distance.
                                            </p>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5">
                                            <div className="flex items-center justify-between text-xs font-semibold text-ink mb-2">
                                                <span>HUD Opacity:</span>
                                                <span className="font-mono">{liveOpacity}%</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="5"
                                                max="100"
                                                value={liveOpacity}
                                                onChange={(e) => setLiveOpacity(Number(e.target.value))}
                                                className="w-full accent-ink cursor-pointer"
                                            />
                                            <div 
                                                className="mt-4 p-4 rounded-xl bg-white border border-black/10 shadow-xs transition-opacity duration-150"
                                                style={{ opacity: liveOpacity / 100 }}
                                            >
                                                <div className="text-xs font-bold text-ink mb-1">
                                                    ExamGhost Live HUD
                                                </div>
                                                <div className="text-[11px] text-ink-muted">
                                                    Correct Answer: B) Endoplasmic Reticulum (Confidence: 99.8%)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTool.id === 'panic-key' && (
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-2xl bg-[#ffd5cc]/30 border border-[#ffd5cc] text-xs text-ink space-y-2">
                                            <div className="font-bold flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-ink" />
                                                <span>Panic Purge Switch</span>
                                            </div>
                                            <p className="text-ink/80 text-[11px]">
                                                If an instructor or proctor approaches, press <kbd className="bg-white/80 px-1 py-0.5 rounded border text-[10px]">Esc</kbd> to instantaneously detach all nodes from memory.
                                            </p>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5 text-center">
                                            {panicTriggered ? (
                                                <div className="p-4 rounded-xl bg-white border border-black/10 text-xs">
                                                    <div className="text-emerald-700 font-bold mb-1">✓ HUD Instantly Purged</div>
                                                    <div className="text-[11px] text-ink-muted mb-3">All Shadow DOM trees detached in 0.02ms. Zero trace remaining.</div>
                                                    <button
                                                        onClick={() => setPanicTriggered(false)}
                                                        className="btn-soft px-4 py-1.5 text-xs text-ink"
                                                    >
                                                        Restore HUD
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => setPanicTriggered(true)}
                                                    className="btn-dark w-full py-3 text-xs justify-center bg-red-600 hover:bg-red-700 text-white"
                                                >
                                                    Trigger Emergency Panic Purge (Esc)
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {(!['focus-shield', 'snap-it', 'opacity-dial', 'panic-key'].includes(activeTool.id)) && (
                                    <div className="p-6 rounded-2xl bg-[#faf8f4] border border-black/5 text-center space-y-3">
                                        <div className="w-10 h-10 rounded-2xl bg-white border border-black/5 flex items-center justify-center mx-auto text-ink">
                                            <activeTool.icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-bold text-sm text-ink">{activeTool.name}</h4>
                                        <p className="text-xs text-ink-muted max-w-xs mx-auto">
                                            {activeTool.blurb}. Runs automatically on quiz detection with zero configuration.
                                        </p>
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                                            <Check className="w-3.5 h-3.5" />
                                            <span>Active & Verified</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="text-[11px] text-ink-muted pt-4 border-t border-black/5 flex items-center justify-between">
                                <span>Engine: Rust WebAssembly Core</span>
                                <span>Zero Network Callbacks</span>
                            </div>
                        </div>

                        {/* Pane 3: Right Inspector (3 cols) */}
                        <div className="lg:col-span-3 p-6 bg-[#faf8f4]/60 flex flex-col justify-between text-xs">
                            <div className="space-y-4">
                                <div className="text-xs font-bold text-ink uppercase tracking-wider pb-2 border-b border-black/5">
                                    Inspector Telemetry
                                </div>

                                <div>
                                    <span className="text-ink-muted block text-[11px] mb-0.5">Execution Latency</span>
                                    <span className="font-mono font-bold text-ink text-sm">{activeTool.latency}</span>
                                </div>

                                <div>
                                    <span className="text-ink-muted block text-[11px] mb-0.5">Canvas Detection Risk</span>
                                    <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs">
                                        {activeTool.risk}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-ink-muted block text-[11px] mb-0.5">Sandbox Mode</span>
                                    <span className="font-semibold text-ink">Shadow DOM Closed Root</span>
                                </div>

                                <div>
                                    <span className="text-ink-muted block text-[11px] mb-0.5">School Server Footprint</span>
                                    <span className="font-mono text-ink">0 Bytes (Client-Side)</span>
                                </div>

                                <div>
                                    <span className="text-ink-muted block text-[11px] mb-0.5">Compatibility</span>
                                    <span className="font-medium text-ink">Canvas, Blackboard, Moodle, D2L</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-black/5">
                                <a
                                    href="/#pricing"
                                    className="btn-dark w-full py-2.5 text-xs justify-center shadow-xs"
                                >
                                    <span>Get All 24 Tools</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
