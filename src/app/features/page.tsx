'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    Shield, Zap, EyeOff, Camera, Bot, Sparkles, Check, CheckCircle2, 
    AlertTriangle, Terminal, Lock, RefreshCw, Layers, Cpu, HelpCircle, 
    Search, Command, Key, FileText, ArrowRight, X, Sliders, Play, Maximize2,
    CheckSquare, History, Power, Eye, Award
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturesPage() {
    const [activeDisplayMode, setActiveDisplayMode] = useState<'invisible' | 'stealth' | 'explain'>('stealth');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const featureCategories = [
        { id: 'all', name: 'All Features (24+)' },
        { id: 'stealth', name: '🛡️ Anti-Detection' },
        { id: 'modes', name: '🎯 3 Display Modes' },
        { id: 'vision', name: '📸 Snap-It Vision' },
        { id: 'formats', name: '🧠 Question Types' },
        { id: 'memory', name: '⚡ GPA Memory' },
        { id: 'security', name: '🔒 Panic & Security' }
    ];

    const allFeatures = [
        // Stealth (CanvasHack / CanvasNinja)
        {
            category: 'stealth',
            title: 'Window Blur & Focus Interception',
            competitor: 'CanvasHack #1 Feature',
            badge: 'Stealth Core',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
            description: 'Silences browser visibilitychange and window.blur listeners directly in the DOM. Canvas continuously receives an active session heartbeat, recording 0 "Stopped viewing quiz page" warnings.',
            icon: Shield
        },
        {
            category: 'stealth',
            title: 'Teacher Action Log Neutralizer',
            competitor: 'CanvasHack & CanvasQuiz',
            badge: 'Audit Proof',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
            description: 'Guarantees your professor sees only a flawless timeline: "Session started → Viewed question → Answered question" with zero red alert flags.',
            icon: Terminal
        },
        {
            category: 'stealth',
            title: 'Isolated Shadow DOM Engine',
            competitor: 'Canvas Ninja & Quietly',
            badge: 'Zero DOM Leak',
            badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/25',
            description: 'All HUD overlays and answers live inside an isolated Shadow Root tree. The host page DOM, proctor scripts, and screen-sharing tools cannot inspect or access it.',
            icon: Layers
        },
        {
            category: 'stealth',
            title: 'Zero Clipboard Footprint',
            competitor: 'Quietly AI Protocol',
            badge: 'Privacy Safe',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
            description: 'Unlike basic AI extensions that copy text to your OS clipboard, ExamGhost extracts and solves in-memory only. Your clipboard remains completely untouched.',
            icon: EyeOff
        },
        {
            category: 'stealth',
            title: 'Kiosk & Locked-Browser Spoofing',
            competitor: 'Cheatmate Bypass',
            badge: 'Lockdown Bypass',
            badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
            description: 'Emulates fullscreen and kiosk status states, allowing you to use your standard browser environment without being locked into restrictive shells.',
            icon: Maximize2
        },

        // Display Modes (GetQuizSolve & Cheatmate)
        {
            category: 'modes',
            title: 'Invisible Mode (Pure Stealth)',
            competitor: 'GetQuizSolve Mode 1',
            badge: 'Display Mode',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
            description: 'Zero UI on screen. Automatically pre-selects the radio button or checks the box directly on the page. Completely screen-share and proctor safe.',
            icon: EyeOff
        },
        {
            category: 'modes',
            title: 'Discreet Stealth HUD Mode',
            competitor: 'GetQuizSolve Mode 2',
            badge: 'Display Mode',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
            description: 'Renders a subtle, semi-transparent glowing dot next to the correct answer choice. Visible to your eyes, unnoticeable to casual observers.',
            icon: Sparkles
        },
        {
            category: 'modes',
            title: 'Deep Explain & Tutor Mode',
            competitor: 'GetQuizSolve Mode 3',
            badge: 'Display Mode',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
            description: 'Pops up full step-by-step logic, explaining why the correct choice is true and specifically why each distractor is wrong.',
            icon: Bot
        },

        // Vision & Snap-It (TestBro & CanvasWizard)
        {
            category: 'vision',
            title: 'Snap-It Area Crop (⌘+Shift+S)',
            competitor: 'TestBro & CanvasWizard',
            badge: 'Multimodal AI',
            badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
            description: 'When text cannot be highlighted or right-click is disabled, hit ⌘+Shift+S and drag a crop box over any area to solve instantly with computer vision in <1.2s.',
            icon: Camera
        },
        {
            category: 'vision',
            title: 'Chemical Structures & Reactions',
            competitor: 'STEM Vision Engine',
            badge: 'STEM OCR',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
            description: 'Decodes organic chemistry skeletal drawings, IUPAC nomenclature, reaction mechanisms, electron configurations, and stereochemistry with precision.',
            icon: Cpu
        },
        {
            category: 'vision',
            title: 'Calculus, Graphs & Matrix Algebra',
            competitor: 'Advanced Math OCR',
            badge: 'Math Engine',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
            description: 'Reads LaTeX symbols, integrals, limits, derivatives, coordinate planes, and matrices directly from image crops or PDF exam elements.',
            icon: Sliders
        },

        // Question Formats (CanvasQuiz & CanvasNinja)
        {
            category: 'formats',
            title: 'Single Choice & MCQ Parsing',
            competitor: 'Universal Standard',
            badge: 'Format Support',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
            description: 'Instant auto-identification and solve for standard 4-option and 5-option multiple-choice questions across all LMS engines.',
            icon: CheckCircle2
        },
        {
            category: 'formats',
            title: 'Multi-Select Checkbox Bundles',
            competitor: 'CanvasQuiz Multi-Select',
            badge: 'Format Support',
            badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
            description: 'Accurately selects multiple true statements simultaneously without missing negative constraints ("Select all that apply").',
            icon: CheckSquare
        },
        {
            category: 'formats',
            title: 'Fill-In-The-Blank & Numeric Input',
            competitor: 'Formula Evaluator',
            badge: 'Format Support',
            badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
            description: 'Solves complex numerical values, rounds to required significant digits, and populates blank text fields seamlessly.',
            icon: FileText
        },
        {
            category: 'formats',
            title: 'Matching & Dropdown Columns',
            competitor: 'Pairing Matrix Solver',
            badge: 'Format Support',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
            description: 'Maps complex relationships, definitions, and chemical formulas across dual-column matching tables in one pass.',
            icon: RefreshCw
        },

        // GPA Memory & Workflow (Cheatmate & Quizsolver)
        {
            category: 'memory',
            title: 'Smart 2nd-Attempt Auto Memory',
            competitor: 'Cheatmate & Quizsolver',
            badge: 'GPA Booster',
            badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/25',
            description: 'Remembers which questions you answered correctly on Attempt 1, automatically pre-fills them on Attempt 2, and focuses solver resources on previous misses.',
            icon: History
        },
        {
            category: 'memory',
            title: 'One-Click Auto-Fill Mode',
            competitor: 'CanvasHack Turbo',
            badge: 'Instant Fill',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
            description: 'Optionally populates every question on the quiz in 3 seconds flat with simulated human typing intervals to prevent velocity detection.',
            icon: Zap
        },
        {
            category: 'memory',
            title: 'Customizable Keyboard Shortcuts',
            competitor: 'Speed Workflow',
            badge: 'Custom Hotkeys',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
            description: 'Configure custom key combos (e.g. ⌘+Shift+X, F8, or mouse thumb buttons) to trigger solves or toggle stealth modes discreetly.',
            icon: Command
        },

        // Security & Privacy (Quietly & TestBro)
        {
            category: 'security',
            title: 'Emergency Panic Kill-Switch (Escape × 2)',
            competitor: 'CanvasHack & Quietly',
            badge: 'Safety First',
            badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/25',
            description: 'Double-tap ESC or hit your panic hotkey to instantly vaporize all HUD overlays, purge local solver cache, and revert DOM to standard state in 10ms.',
            icon: Power
        },
        {
            category: 'security',
            title: 'Zero-Knowledge Memory Pipeline',
            competitor: 'AES-256 Protocol',
            badge: 'Zero Logs',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
            description: 'All questions are resolved via ephemeral memory buffers. No logs, search histories, or student identifiers are ever stored on remote servers.',
            icon: Lock
        },
        {
            category: 'security',
            title: 'Universal Platform Compatibility',
            competitor: 'All 8 Major Platforms',
            badge: 'Cross-LMS',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
            description: 'Engineered and continuously tested against Canvas Classic & New Quizzes, Blackboard Ultra, D2L Brightspace, Moodle, and McGraw-Hill Connect.',
            icon: Shield
        }
    ];

    const filteredFeatures = allFeatures.filter(f => {
        const matchesCat = selectedCategory === 'all' || f.category === selectedCategory;
        const matchesSearch = searchQuery === '' || 
            f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.competitor.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    const competitorsList = [
        { name: 'ExamGhost AI', highlight: true, focusLoss: '✓ Intercepted', shadowDom: '✓ Isolated', displayModes: '3 Modes', snapIt: '✓ <1.2s OCR', attemptMemory: '✓ Smart Cache', stemVision: '✓ Full LaTeX', panicSwitch: '✓ 10ms Kill' },
        { name: 'CanvasHack', highlight: false, focusLoss: '✓ Basic', shadowDom: '✕ No', displayModes: '1 Mode', snapIt: '✕ No', attemptMemory: '✕ No', stemVision: '✕ Text only', panicSwitch: '✓ Basic' },
        { name: 'Cheatmate', highlight: false, focusLoss: '✕ Partial', shadowDom: '✕ No', displayModes: '2 Modes', snapIt: '✕ No', attemptMemory: '✓ Yes', stemVision: '✕ Partial', panicSwitch: '✕ No' },
        { name: 'CanvasNinja', highlight: false, focusLoss: '✓ Yes', shadowDom: '✓ Partial', displayModes: '1 Mode', snapIt: '✕ No', attemptMemory: '✕ No', stemVision: '✕ Basic', panicSwitch: '✕ No' },
        { name: 'UseQuietly', highlight: false, focusLoss: '✕ No', shadowDom: '✓ Yes', displayModes: '2 Modes', snapIt: '✕ No', attemptMemory: '✕ No', stemVision: '✕ Partial', panicSwitch: '✓ Yes' },
        { name: 'TestBro', highlight: false, focusLoss: '✕ No', shadowDom: '✕ No', displayModes: '1 Mode', snapIt: '✓ Yes', attemptMemory: '✕ No', stemVision: '✓ Basic', panicSwitch: '✕ No' }
    ];

    return (
        <div className="min-h-screen bg-[#060a14] text-white selection:bg-blue-600/30 selection:text-white">
            <Navbar />

            {/* Page Header */}
            <section className="relative pt-36 sm:pt-40 pb-20 overflow-hidden border-b border-white/[0.06]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-blue-600/12 via-indigo-600/8 to-transparent rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-5">
                        <Award className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                            24+ Complete Stealth Capabilities
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                        Every Competitor Feature. <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                            Engineered Into One Unbeatable Tool.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                        From Canvas focus interception to Snap-It screenshot solves, 3 adaptive display modes, and emergency kill-switches—ExamGhost has it all.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a 
                            href="#pricing"
                            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 active:scale-95 transition-all"
                        >
                            <FaChrome className="w-4 h-4" />
                            <span>Add to Chrome — Free</span>
                        </a>
                        <a 
                            href="#matrix"
                            className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-sm font-semibold transition-colors"
                        >
                            View Competitor Matrix ↓
                        </a>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* FLAGSHIP SHOWCASE: 3 ADAPTIVE SOLVING MODES */}
            {/* ========================================================= */}
            <section className="py-20 bg-[#080d1a] border-b border-white/[0.06] relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                            Feature Spotlight
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
                            Choose Your Exact Level of Stealth
                        </h2>
                        <p className="text-sm text-slate-400">
                            Switch between 3 distinct solving modes instantly based on your test environment.
                        </p>
                    </div>

                    {/* Mode Selector Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="p-1 rounded-2xl bg-[#0a1020] border border-white/10 flex flex-wrap gap-1 shadow-xl">
                            {[
                                { id: 'invisible', label: '1. Invisible Mode (0 UI)', icon: EyeOff },
                                { id: 'stealth', label: '2. Discreet Stealth HUD', icon: Sparkles },
                                { id: 'explain', label: '3. Deep Tutor Mode', icon: Bot }
                            ].map((mode) => (
                                <button
                                    key={mode.id}
                                    onClick={() => setActiveDisplayMode(mode.id as any)}
                                    className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                                        activeDisplayMode === mode.id
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                                            : 'text-slate-400 hover:text-white'
                                    }`}
                                >
                                    <mode.icon className="w-4 h-4" />
                                    <span>{mode.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Live Question Preview */}
                    <div className="rounded-2xl bg-[#090f1d] border border-white/10 p-6 sm:p-8 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
                        
                        <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/10 text-xs">
                            <span className="font-mono text-slate-400">ORGANIC CHEMISTRY • QUESTION 7</span>
                            <span className="font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                {activeDisplayMode === 'invisible' && 'Invisible Radio Selection Active'}
                                {activeDisplayMode === 'stealth' && 'Stealth Dot Overlay Active'}
                                {activeDisplayMode === 'explain' && 'Full Tutor Breakdown Active'}
                            </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-white mb-5 leading-relaxed">
                            Which of the following reagents selectively converts a secondary alcohol into a ketone without over-oxidation?
                        </h4>

                        <div className="space-y-3 font-mono text-xs sm:text-sm mb-6">
                            {[
                                { label: 'A', text: 'KMnO₄ / H₂SO₄ (hot, concentrated)', isCorrect: false },
                                { label: 'B', text: 'PCC (Pyridinium chlorochromate) in CH₂Cl₂', isCorrect: true },
                                { label: 'C', text: 'Jones reagent (CrO₃ / H₂SO₄)', isCorrect: false },
                                { label: 'D', text: 'LiAlH₄ in anhydrous ether', isCorrect: false }
                            ].map((opt, i) => (
                                <div
                                    key={i}
                                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                                        opt.isCorrect && activeDisplayMode === 'invisible'
                                            ? 'bg-blue-600/15 border-blue-500/50 text-white font-semibold'
                                            : opt.isCorrect && activeDisplayMode === 'stealth'
                                            ? 'bg-white/[0.02] border-white/10 text-slate-200'
                                            : 'bg-white/[0.01] border-white/5 text-slate-400'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                            opt.isCorrect && activeDisplayMode === 'invisible'
                                                ? 'border-blue-500 bg-blue-600 text-white'
                                                : 'border-white/20'
                                        }`}>
                                            {opt.isCorrect && activeDisplayMode === 'invisible' && '✓'}
                                        </div>
                                        <span>{opt.label}. {opt.text}</span>
                                    </div>

                                    {/* Discreet Dot Indicator in Mode 2 */}
                                    {opt.isCorrect && activeDisplayMode === 'stealth' && (
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
                                            <span className="text-[10px] font-mono text-emerald-400 font-bold hidden sm:inline">
                                                (Discreet indicator)
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Explain Drawer in Mode 3 */}
                        {activeDisplayMode === 'explain' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/30 text-xs text-slate-300 space-y-1.5"
                            >
                                <div className="font-bold text-blue-300 flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span>Tutor Explanation:</span>
                                </div>
                                <p className="leading-relaxed">
                                    PCC is a mild oxidizing agent that oxidizes secondary alcohols specifically into ketones without cleavage or unwanted side reactions. KMnO₄ and Jones reagent are harsh oxidizers that can over-oxidize sensitive functional groups, while LiAlH₄ is a reducing agent.
                                </p>
                            </motion.div>
                        )}

                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                            <span>🛡️ Zero tab switches logged in Canvas audit trail</span>
                            <span>Hotkey: ⌘+Shift+X</span>
                        </div>

                    </div>

                </div>
            </section>

            {/* ========================================================= */}
            {/* COMPLETE FEATURE DIRECTORY (24+ FEATURES) */}
            {/* ========================================================= */}
            <section className="py-24 bg-[#060a14] relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                            Directory & Breakdown
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
                            All 24+ Capabilities Catalogued
                        </h2>
                        <p className="text-sm text-slate-400">
                            Search or filter by technical category to inspect every subsystem.
                        </p>
                    </div>

                    {/* Filter Tabs & Search Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#090f1d] border border-white/10 w-full sm:w-auto">
                            {featureCategories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                        selectedCategory === cat.id
                                            ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                                            : 'text-slate-400 hover:text-white'
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full sm:w-64">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search capabilities..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#090f1d] border border-white/10 text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredFeatures.map((feat, idx) => {
                            const Icon = feat.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="p-6 rounded-2xl bg-[#090f1d] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)] group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${feat.badgeColor}`}>
                                                {feat.badge}
                                            </span>
                                        </div>

                                        <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                                            {feat.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                            {feat.description}
                                        </p>
                                    </div>

                                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                                        <span className="text-slate-500">Benchmark: {feat.competitor}</span>
                                        <span className="text-emerald-400 font-bold">✓ Included</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* ========================================================= */}
            {/* COMPETITOR COMPARISON MATRIX TABLE */}
            {/* ========================================================= */}
            <section id="matrix" className="py-24 bg-[#080d1a] border-t border-white/[0.06] relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                            Direct Comparison
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
                            ExamGhost vs. The Competition
                        </h2>
                        <p className="text-sm text-slate-400">
                            See how our architecture stacks up against other Canvas extensions on the market.
                        </p>
                    </div>

                    {/* Table Container */}
                    <div className="rounded-2xl border border-white/10 bg-[#090f1d] overflow-x-auto shadow-2xl">
                        <table className="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-[#060a14]">
                                    <th className="p-4 sm:p-5 font-bold text-slate-300">Tool / Extension</th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-300">Focus Loss Intercept</th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-300">Shadow DOM Isolation</th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-300">Display Modes</th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-300">Snap-It Crop</th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-300">2nd Attempt Memory</th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-300">Panic Kill-Switch</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 font-mono text-xs">
                                {competitorsList.map((comp, i) => (
                                    <tr 
                                        key={i} 
                                        className={comp.highlight ? 'bg-blue-600/10 font-semibold' : 'hover:bg-white/[0.02]'}
                                    >
                                        <td className="p-4 sm:p-5 font-sans font-bold flex items-center gap-2">
                                            {comp.highlight ? (
                                                <span className="text-blue-400 flex items-center gap-1.5 font-extrabold text-sm sm:text-base">
                                                    <Sparkles className="w-4 h-4 text-blue-400" />
                                                    {comp.name}
                                                </span>
                                            ) : (
                                                <span className="text-slate-300 font-medium">{comp.name}</span>
                                            )}
                                        </td>
                                        <td className="p-4 sm:p-5 text-slate-300">{comp.focusLoss}</td>
                                        <td className="p-4 sm:p-5 text-slate-300">{comp.shadowDom}</td>
                                        <td className="p-4 sm:p-5 text-slate-300">{comp.displayModes}</td>
                                        <td className="p-4 sm:p-5 text-slate-300">{comp.snapIt}</td>
                                        <td className="p-4 sm:p-5 text-slate-300">{comp.attemptMemory}</td>
                                        <td className="p-4 sm:p-5 text-slate-300">{comp.panicSwitch}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* CTA Banner */}
                    <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 border border-indigo-500/30 text-center relative overflow-hidden">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                            Ready to Experience 100% Invisible Quiz Solving?
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
                            Start with 5 free daily solves. No credit card required. Installs in 60 seconds.
                        </p>
                        <a
                            href="/#pricing"
                            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-transform active:scale-95"
                        >
                            <FaChrome className="w-4 h-4" />
                            <span>Add ExamGhost to Chrome — Free</span>
                        </a>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
