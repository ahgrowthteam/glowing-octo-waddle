'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    Shield, EyeOff, Bot, Sparkles, Check, CheckCircle2, 
    Terminal, Lock, Layers, Search, Command, Maximize2,
    CheckSquare, History, Power, Camera, Award
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FeaturesPage() {
    const [activeDisplayMode, setActiveDisplayMode] = useState<'invisible' | 'stealth' | 'explain'>('stealth');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const featureCategories = [
        { id: 'all', name: 'All Features (24+)' },
        { id: 'stealth', name: 'Anti-Detection' },
        { id: 'modes', name: '3 Display Modes' },
        { id: 'vision', name: 'Snap-It Vision' },
        { id: 'formats', name: 'Question Types' },
        { id: 'memory', name: 'Attempt Memory' },
        { id: 'security', name: 'Privacy & Security' }
    ];

    const allFeatures = [
        // Stealth
        {
            category: 'stealth',
            title: 'Window Blur & Focus Interception',
            competitor: 'CanvasHack #1 Feature',
            badge: 'Stealth Core',
            badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
            description: 'Silences browser visibilitychange and window.blur listeners directly in the DOM. Canvas continuously receives an active session heartbeat, recording 0 "Stopped viewing quiz page" warnings.',
            icon: Shield
        },
        {
            category: 'stealth',
            title: 'Teacher Action Log Neutralizer',
            competitor: 'CanvasHack & CanvasQuiz',
            badge: 'Audit Proof',
            badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
            description: 'Guarantees your professor sees only a normal timeline: "Session started → Viewed question → Answered question" with zero red alert flags.',
            icon: Terminal
        },
        {
            category: 'stealth',
            title: 'Isolated Shadow DOM Engine',
            competitor: 'Canvas Ninja & Quietly',
            badge: 'Zero DOM Leak',
            badgeColor: 'text-purple-800 bg-purple-50 border-purple-200',
            description: 'All HUD overlays and answers live inside an isolated Shadow Root tree. The host page DOM, proctor scripts, and screen-sharing tools cannot inspect or access it.',
            icon: Layers
        },
        {
            category: 'stealth',
            title: 'Zero Clipboard Footprint',
            competitor: 'Quietly AI Protocol',
            badge: 'Privacy Safe',
            badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
            description: 'Unlike basic AI extensions that copy text to your OS clipboard, ExamGhost extracts and solves in-memory only. Your clipboard remains completely untouched.',
            icon: EyeOff
        },
        {
            category: 'stealth',
            title: 'Kiosk & Locked-Browser Spoofing',
            competitor: 'Cheatmate Bypass',
            badge: 'Lockdown Bypass',
            badgeColor: 'text-amber-800 bg-amber-50 border-amber-200',
            description: 'Emulates fullscreen and kiosk status states, allowing you to use your standard browser environment without being locked into restrictive shells.',
            icon: Maximize2
        },

        // Display Modes
        {
            category: 'modes',
            title: 'Mode 1: Zero-UI In-DOM Highlighting',
            competitor: 'CanvasHack Mode',
            badge: '0 UI Overhead',
            badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
            description: 'Answers are marked directly on the native Canvas radio buttons without opening floating windows, sidebars, or auxiliary panels.',
            icon: CheckCircle2
        },
        {
            category: 'modes',
            title: 'Mode 2: Discreet Stealth Dot Indicator',
            competitor: 'GetQuizSolve Mode',
            badge: 'Over-The-Shoulder Safe',
            badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
            description: 'Places a faint, semi-transparent colored dot beside the correct choice. Completely invisible to anyone glancing across your lecture hall or shoulder.',
            icon: EyeOff
        },
        {
            category: 'modes',
            title: 'Mode 3: Deep Tutor Breakdown Drawer',
            competitor: 'Cheatmate & TestBro',
            badge: 'Full Reasoning',
            badgeColor: 'text-indigo-800 bg-indigo-50 border-indigo-200',
            description: 'Pops up full step-by-step logic, explaining why the correct choice is true and specifically why each distractor is wrong.',
            icon: Bot
        },

        // Snap-It Vision
        {
            category: 'vision',
            title: 'Area Screenshot Crop Tool (⌘+Shift+S)',
            competitor: 'TestBro Benchmark',
            badge: 'Multimodal OCR',
            badgeColor: 'text-amber-800 bg-amber-50 border-amber-200',
            description: 'When text cannot be highlighted or right-click is disabled, hit ⌘+Shift+S and drag a crop box over any area to solve instantly with computer vision in <1.2s.',
            icon: Camera
        },
        {
            category: 'vision',
            title: 'Chemical Structures & Reactions',
            competitor: 'STEM Vision Engine',
            badge: 'Chemistry OCR',
            badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
            description: 'Decodes organic chemistry skeletal drawings, IUPAC nomenclature, reaction mechanisms, electron configurations, and stereochemistry with precision.',
            icon: Sparkles
        },
        {
            category: 'vision',
            title: 'Calculus, Graphs & Matrix Algebra',
            competitor: 'Advanced Math OCR',
            badge: 'Math Engine',
            badgeColor: 'text-purple-800 bg-purple-50 border-purple-200',
            description: 'Reads LaTeX symbols, integrals, limits, derivatives, coordinate planes, and matrices directly from image crops or PDF exam elements.',
            icon: Layers
        },

        // Question Types
        {
            category: 'formats',
            title: 'Single Choice & MCQ Parsing',
            competitor: 'Universal Standard',
            badge: 'Format Support',
            badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
            description: 'Instant auto-identification and solve for standard 4-option and 5-option multiple-choice questions across all LMS engines.',
            icon: CheckCircle2
        },
        {
            category: 'formats',
            title: 'Multi-Select Checkbox Bundles',
            competitor: 'CanvasQuiz Multi-Select',
            badge: 'Format Support',
            badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
            description: 'Accurately selects multiple true statements simultaneously without missing negative constraints ("Select all that apply").',
            icon: CheckSquare
        },
        {
            category: 'formats',
            title: 'Fill-In-The-Blank & Numeric Input',
            competitor: 'Formula Evaluator',
            badge: 'Format Support',
            badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
            description: 'Solves complex numerical values, rounds to required significant digits, and populates blank text fields seamlessly.',
            icon: Terminal
        },
        {
            category: 'formats',
            title: 'Matching & Dropdown Columns',
            competitor: 'Pairing Matrix Solver',
            badge: 'Format Support',
            badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
            description: 'Maps complex relationships, definitions, and chemical formulas across dual-column matching tables in one pass.',
            icon: Layers
        },

        // Attempt Memory
        {
            category: 'memory',
            title: '2nd-Attempt Auto-Answer Cache',
            competitor: 'Cheatmate Favorite',
            badge: 'GPA Booster',
            badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
            description: 'Caches high-scoring responses from your first submission and pre-populates verified answers on attempt #2 for effortless 100% scores.',
            icon: History
        },
        {
            category: 'memory',
            title: 'Incorrect Distractor Elimination',
            competitor: 'Adaptive Engine',
            badge: 'Smart Guessing',
            badgeColor: 'text-indigo-800 bg-indigo-50 border-indigo-200',
            description: 'Tracks which options resulted in lost points during previous attempts, pruning them to guarantee higher accuracy on re-takes.',
            icon: Check
        },

        // Security & Privacy
        {
            category: 'security',
            title: 'Emergency Panic Kill-Switch (Escape × 2)',
            competitor: 'CanvasHack & Quietly',
            badge: 'Safety First',
            badgeColor: 'text-rose-800 bg-rose-50 border-rose-200',
            description: 'Double-tap ESC or hit your panic hotkey to instantly vaporize all HUD overlays, purge local solver cache, and revert DOM to standard state in 10ms.',
            icon: Power
        },
        {
            category: 'security',
            title: 'Zero-Knowledge Memory Pipeline',
            competitor: 'AES-256 Protocol',
            badge: 'Zero Logs',
            badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
            description: 'All questions are resolved via ephemeral memory buffers. No logs, search histories, or student identifiers are ever stored on remote servers.',
            icon: Lock
        },
        {
            category: 'security',
            title: 'Universal Platform Compatibility',
            competitor: 'All 8 Major Platforms',
            badge: 'Cross-LMS',
            badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
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
        { name: 'ExamGhost AI', highlight: true, focusLoss: '✓ Intercepted', shadowDom: '✓ Isolated', displayModes: '3 Modes', snapIt: '✓ <1.2s OCR', attemptMemory: '✓ Smart Cache', panicSwitch: '✓ 10ms Kill' },
        { name: 'CanvasHack', highlight: false, focusLoss: '✓ Basic', shadowDom: '✕ No', displayModes: '1 Mode', snapIt: '✕ No', attemptMemory: '✕ No', panicSwitch: '✓ Basic' },
        { name: 'Cheatmate', highlight: false, focusLoss: '✕ Partial', shadowDom: '✕ No', displayModes: '2 Modes', snapIt: '✕ No', attemptMemory: '✓ Yes', panicSwitch: '✕ No' },
        { name: 'CanvasNinja', highlight: false, focusLoss: '✓ Yes', shadowDom: '✓ Partial', displayModes: '1 Mode', snapIt: '✕ No', attemptMemory: '✕ No', panicSwitch: '✕ No' },
        { name: 'UseQuietly', highlight: false, focusLoss: '✕ No', shadowDom: '✓ Yes', displayModes: '2 Modes', snapIt: '✕ No', attemptMemory: '✕ No', panicSwitch: '✓ Yes' },
        { name: 'TestBro', highlight: false, focusLoss: '✕ No', shadowDom: '✕ No', displayModes: '1 Mode', snapIt: '✓ Yes', attemptMemory: '✕ No', panicSwitch: '✕ No' }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />

            {/* Page Header */}
            <section className="pt-32 sm:pt-36 pb-16 bg-white border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
                        <Award className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700">
                            24+ Complete Capabilities
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
                        Every competitor feature, engineered into one clean tool.
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        From Canvas focus interception to Snap-It screenshot crop, 3 adaptive display modes, and emergency kill-switches—ExamGhost has it all.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a 
                            href="#pricing"
                            className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm flex items-center gap-2 transition-colors"
                        >
                            <FaChrome className="w-4 h-4 text-blue-400" />
                            <span>Add to Chrome — Free</span>
                        </a>
                        <a 
                            href="#matrix"
                            className="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold shadow-sm transition-colors"
                        >
                            View Competitor Matrix ↓
                        </a>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* FLAGSHIP SHOWCASE: 3 ADAPTIVE SOLVING MODES */}
            {/* ========================================================= */}
            <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">

                    <div className="text-center max-w-xl mx-auto mb-8">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Interactive Showcase
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
                            Choose your exact level of stealth
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600">
                            Switch between 3 distinct solving modes instantly based on your exam environment.
                        </p>
                    </div>

                    {/* Mode Selector Tabs */}
                    <div className="flex justify-center mb-6">
                        <div className="p-1 rounded-xl bg-slate-200/70 border border-slate-300 flex flex-wrap gap-1">
                            {[
                                { id: 'invisible', label: '1. Invisible Mode (0 UI)', icon: EyeOff },
                                { id: 'stealth', label: '2. Discreet Stealth HUD', icon: Sparkles },
                                { id: 'explain', label: '3. Deep Tutor Mode', icon: Bot }
                            ].map((mode) => (
                                <button
                                    key={mode.id}
                                    onClick={() => setActiveDisplayMode(mode.id as any)}
                                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                                        activeDisplayMode === mode.id
                                            ? 'bg-white text-slate-900 shadow-sm'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    <mode.icon className="w-3.5 h-3.5" />
                                    <span>{mode.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Question Card Preview */}
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 max-w-2xl mx-auto shadow-sm">
                        
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs">
                            <span className="font-medium text-slate-500">ORGANIC CHEMISTRY • QUESTION 7</span>
                            <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                {activeDisplayMode === 'invisible' && 'Invisible In-DOM Selection Active'}
                                {activeDisplayMode === 'stealth' && 'Stealth Dot Overlay Active'}
                                {activeDisplayMode === 'explain' && 'Full Tutor Breakdown Active'}
                            </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-4 leading-snug">
                            Which of the following reagents selectively converts a secondary alcohol into a ketone without over-oxidation?
                        </h3>

                        <div className="space-y-2.5 text-xs sm:text-sm mb-4">
                            {[
                                { label: 'A', text: 'KMnO₄ / H₂SO₄ (hot, concentrated)', isCorrect: false },
                                { label: 'B', text: 'PCC (Pyridinium chlorochromate) in CH₂Cl₂', isCorrect: true },
                                { label: 'C', text: 'Jones reagent (CrO₃ / H₂SO₄)', isCorrect: false },
                                { label: 'D', text: 'LiAlH₄ in anhydrous ether', isCorrect: false }
                            ].map((opt, i) => (
                                <div
                                    key={i}
                                    className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                                        opt.isCorrect && activeDisplayMode === 'invisible'
                                            ? 'bg-blue-50 border-blue-500 text-blue-950 font-semibold'
                                            : opt.isCorrect && activeDisplayMode === 'stealth'
                                            ? 'bg-white border-slate-200 text-slate-800'
                                            : 'bg-white border-slate-200 text-slate-700'
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                            opt.isCorrect && activeDisplayMode === 'invisible'
                                                ? 'border-blue-600 bg-blue-600 text-white'
                                                : 'border-slate-300'
                                        }`}>
                                            {opt.isCorrect && activeDisplayMode === 'invisible' && '✓'}
                                        </div>
                                        <span>{opt.label}. {opt.text}</span>
                                    </div>

                                    {/* Discreet Dot Indicator in Mode 2 */}
                                    {opt.isCorrect && activeDisplayMode === 'stealth' && (
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[11px] text-emerald-700 font-semibold hidden sm:inline">
                                                (Discreet dot)
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Explain Drawer in Mode 3 */}
                        {activeDisplayMode === 'explain' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1 mb-4"
                            >
                                <div className="font-semibold text-blue-900 flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                                    <span>Tutor Explanation:</span>
                                </div>
                                <p className="leading-relaxed text-blue-900/90">
                                    PCC is a mild oxidizing agent that oxidizes secondary alcohols specifically into ketones without cleavage or unwanted side reactions. KMnO₄ and Jones reagent are harsh oxidizers that can over-oxidize sensitive functional groups, while LiAlH₄ is a reducing agent.
                                </p>
                            </motion.div>
                        )}

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                            <span>✓ Zero tab switches logged in Canvas audit trail</span>
                            <span>Hotkey: ⌘+Shift+X</span>
                        </div>

                    </div>

                </div>
            </section>

            {/* ========================================================= */}
            {/* COMPLETE FEATURE DIRECTORY (24+ FEATURES) */}
            {/* ========================================================= */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                            Full Directory
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-1 mb-3">
                            All 24+ Capabilities Catalogued
                        </h2>
                        <p className="text-sm text-slate-600">
                            Search or filter by category to inspect every technical subsystem.
                        </p>
                    </div>

                    {/* Filter Tabs & Search Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 w-full sm:w-auto">
                            {featureCategories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                        selectedCategory === cat.id
                                            ? 'bg-white text-slate-900 font-bold shadow-sm'
                                            : 'text-slate-600 hover:text-slate-900'
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
                                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 transition-colors shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredFeatures.map((feat, idx) => {
                            const Icon = feat.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                                                <Icon className="w-4.5 h-4.5" />
                                            </div>
                                            <span className={`text-[11px] px-2 py-0.5 rounded border font-medium ${feat.badgeColor}`}>
                                                {feat.badge}
                                            </span>
                                        </div>

                                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                                            {feat.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            {feat.description}
                                        </p>
                                    </div>

                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                        <span className="text-slate-400 font-medium">Benchmark: {feat.competitor}</span>
                                        <span className="text-emerald-700 font-semibold">✓ Included</span>
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
            <section id="matrix" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Direct Comparison
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-1 mb-3">
                            ExamGhost vs. The Competition
                        </h2>
                        <p className="text-sm text-slate-600">
                            See how our architecture stacks up against other Canvas extensions on the market.
                        </p>
                    </div>

                    {/* Table Container */}
                    <div className="rounded-2xl border border-slate-200 bg-white overflow-x-auto shadow-sm">
                        <table className="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50">
                                    <th className="p-4 sm:p-5 font-semibold text-slate-700">Tool / Extension</th>
                                    <th className="p-4 sm:p-5 font-semibold text-slate-700">Focus Loss Intercept</th>
                                    <th className="p-4 sm:p-5 font-semibold text-slate-700">Shadow DOM Isolation</th>
                                    <th className="p-4 sm:p-5 font-semibold text-slate-700">Display Modes</th>
                                    <th className="p-4 sm:p-5 font-semibold text-slate-700">Snap-It Crop</th>
                                    <th className="p-4 sm:p-5 font-semibold text-slate-700">2nd Attempt Memory</th>
                                    <th className="p-4 sm:p-5 font-semibold text-slate-700">Panic Kill-Switch</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-xs">
                                {competitorsList.map((comp, i) => (
                                    <tr 
                                        key={i} 
                                        className={comp.highlight ? 'bg-blue-50/70 font-semibold' : 'hover:bg-slate-50/50'}
                                    >
                                        <td className="p-4 sm:p-5 font-bold">
                                            {comp.highlight ? (
                                                <span className="text-blue-700 flex items-center gap-1.5 font-bold">
                                                    <Sparkles className="w-4 h-4 text-blue-600" />
                                                    {comp.name}
                                                </span>
                                            ) : (
                                                <span className="text-slate-800">{comp.name}</span>
                                            )}
                                        </td>
                                        <td className="p-4 sm:p-5 text-slate-700">{comp.focusLoss}</td>
                                        <td className="p-4 sm:p-5 text-slate-700">{comp.shadowDom}</td>
                                        <td className="p-4 sm:p-5 text-slate-700">{comp.displayModes}</td>
                                        <td className="p-4 sm:p-5 text-slate-700">{comp.snapIt}</td>
                                        <td className="p-4 sm:p-5 text-slate-700">{comp.attemptMemory}</td>
                                        <td className="p-4 sm:p-5 text-slate-700">{comp.panicSwitch}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pre-Footer Callout */}
                    <div className="mt-14 p-8 rounded-2xl bg-white border border-slate-200 text-center shadow-sm max-w-3xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                            Ready to experience invisible quiz solving?
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-lg mx-auto">
                            Start with 5 free daily solves. No credit card required. Installs in 60 seconds.
                        </p>
                        <a
                            href="/#pricing"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors"
                        >
                            <FaChrome className="w-4 h-4 text-blue-400" />
                            <span>Add ExamGhost to Chrome — Free</span>
                        </a>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
