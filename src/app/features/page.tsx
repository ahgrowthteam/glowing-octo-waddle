'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    Shield, Zap, EyeOff, Camera, Bot, Sparkles, Check, CheckCircle2, 
    AlertTriangle, Terminal, Lock, RefreshCw, Layers, Cpu, HelpCircle, 
    Search, Command, Key, FileText, ArrowRight, X, Sliders, Play, Maximize2
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturesPage() {
    const [activeDisplayMode, setActiveDisplayMode] = useState<'invisible' | 'stealth' | 'explain'>('invisible');
    const [filterCategory, setFilterCategory] = useState<string>('all');

    const featureCategories = [
        { id: 'all', name: 'All Features (24+)' },
        { id: 'stealth', name: '🛡️ Anti-Detection' },
        { id: 'modes', name: '🎯 3 Display Modes' },
        { id: 'vision', name: '📸 Snap-It Vision' },
        { id: 'formats', name: '🧠 Question Types' },
        { id: 'workflow', name: '⚡ Workflow & Memory' },
        { id: 'privacy', name: '🔒 Panic & Security' }
    ];

    const allFeaturesList = [
        // Stealth & Anti-Detection (CanvasHack / CanvasNinja features)
        {
            category: 'stealth',
            title: 'Focus Loss & Blur Interception',
            origin: 'Bypasses Canvas & Blackboard logs',
            badge: 'Anti-Detection',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
            description: 'Intercepts browser visibilitychange and window.blur listeners directly in the DOM. Canvas continuously receives an uninterrupted "active" heartbeat so zero tab-switching flags are logged.',
            icon: Shield
        },
        {
            category: 'stealth',
            title: 'Teacher Action Log Neutralizer',
            origin: 'CanvasHack #1 Killer',
            badge: 'Audit Proof',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
            description: 'Guarantees your professor sees only a clean session timeline: "Session started → Viewed question → Answered question" with 0 "Stopped viewing quiz page" warnings.',
            icon: Terminal
        },
        {
            category: 'stealth',
            title: 'Isolated Shadow DOM Engine',
            origin: 'Canvas Ninja & Quietly Shield',
            badge: 'Invisible Layer',
            badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
            description: 'Overlays and AI solutions are rendered inside an encapsulated Shadow Root tree. The host page scripts, proctoring tools, and LMS security extensions cannot inspect or access it.',
            icon: Layers
        },
        {
            category: 'stealth',
            title: 'Zero Clipboard Footprint',
            origin: 'Full Privacy Protocol',
            badge: 'Clipboard Safe',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Unlike basic AI extensions that copy text to your clipboard, ExamGhost extracts and solves entirely in memory. Your system clipboard remains completely untouched.',
            icon: EyeOff
        },
        {
            category: 'stealth',
            title: 'Kiosk & Locked-Browser Spoofing',
            origin: 'Bypasses Lockdowns',
            badge: 'Bypass Protocol',
            badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
            description: 'Spoofs active test fullscreen and kiosk status states, allowing you to use your standard browser without being locked into restrictive student kiosk shells.',
            icon: Maximize2
        },

        // 3 Display Modes (Getquizsolve feature)
        {
            category: 'modes',
            title: 'Invisible Mode (Pure Stealth)',
            origin: 'AI Quiz Solve Mode 1',
            badge: 'Display Mode',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Zero visual UI on screen. Automatically pre-selects the radio button or checks the box directly on the page. Completely screen-share and proctor safe.',
            icon: EyeOff
        },
        {
            category: 'modes',
            title: 'Discreet Stealth HUD Mode',
            origin: 'AI Quiz Solve Mode 2',
            badge: 'Display Mode',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Renders a subtle, semi-transparent glowing dot or faint highlight next to the correct answer choice. Visible to your eyes, unnoticeable to casual observers.',
            icon: Sparkles
        },
        {
            category: 'modes',
            title: 'Deep Explain & Tutor Mode',
            origin: 'AI Quiz Solve Mode 3',
            badge: 'Display Mode',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Pops up full step-by-step logic, explaining why the correct choice is true and specifically why each distractor is wrong—ideal for homework and test prep.',
            icon: Bot
        },

        // Vision & Snap-It (TestBro + Getquizsolve feature)
        {
            category: 'vision',
            title: 'Snap-It Area Crop (⌘+Shift+S)',
            origin: 'TestBro & Snap-It Solver',
            badge: 'Multimodal AI',
            badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
            description: 'When text cannot be highlighted or a quiz has right-click disabled, hit ⌘+Shift+S and drag a bounding box over any area to solve instantly with computer vision.',
            icon: Camera
        },
        {
            category: 'vision',
            title: 'Chemical Structures & Reactions',
            origin: 'STEM Solver Engine',
            badge: 'Vision AI',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
            description: 'Decodes organic chemistry skeletal drawings, IUPAC nomenclature, reaction mechanisms, electron configurations, and stereochemistry with precision.',
            icon: Cpu
        },
        {
            category: 'vision',
            title: 'Calculus, Graphs & Matrix Algebra',
            origin: 'Math Engine',
            badge: 'Math Vision',
            badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
            description: 'Reads LaTeX symbols, derivatives, integrals, matrix determinants, and coordinate graphs directly from diagrams or PDF screenshots.',
            icon: Sliders
        },

        // Question Formats (Cheatmate + Quietly feature)
        {
            category: 'formats',
            title: 'Universal MCQ & Single Choice',
            origin: 'Standard Question',
            badge: 'Format Support',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Instant auto-identification and solve for standard 4-option and 5-option multiple-choice questions across all LMS engines.',
            icon: CheckCircle2
        },
        {
            category: 'formats',
            title: 'Multi-Select (Select All That Apply)',
            origin: 'Complex MCQ',
            badge: 'Format Support',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Identifies multi-answer checkboxes and selects the exact subset of correct statements without getting tricked by negative phrasing.',
            icon: Check
        },
        {
            category: 'formats',
            title: 'Matching Pairs & Dropdowns',
            origin: 'Interactive LMS Formats',
            badge: 'Format Support',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Analyzes term-and-definition grids or dropdown matrices, pairing every item correctly with a single automated click.',
            icon: Sliders
        },
        {
            category: 'formats',
            title: 'Fill-in-the-Blank & Exact String',
            origin: 'Text Input',
            badge: 'Format Support',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Provides exact spellings, numerical values, and rounding units required by instructor answer keys.',
            icon: FileText
        },
        {
            category: 'formats',
            title: 'Humanized Short Answer & Essay',
            origin: 'AI Detector Shield',
            badge: 'Bypass Turnitin',
            badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
            description: 'Generates conversational, natural short responses designed to bypass AI detectors (Turnitin, GPTZero, CopyLeaks) without robotic patterns.',
            icon: FileText
        },

        // Workflow & Memory (Canvas Ninja & CanvasHack feature)
        {
            category: 'workflow',
            title: 'Smart 2nd-Attempt Auto-Memory',
            origin: 'Canvas Ninja & CanvasHack',
            badge: 'Score Maximizer',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
            description: 'Caches question answers between attempts. On attempt #2, ExamGhost auto-reloads your high-scoring answers and adjusts any misses for a 100% score.',
            icon: RefreshCw
        },
        {
            category: 'workflow',
            title: 'Auto-Detect Questions (No Clicks Needed)',
            origin: 'UseQuietly Feature',
            badge: 'Zero Effort',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Automatically senses quiz questions on your active Canvas, Moodle, or McGraw-Hill page without requiring you to manually highlight or copy anything.',
            icon: Zap
        },
        {
            category: 'workflow',
            title: 'AI Tutor Chat Sidebar',
            origin: 'Quietly & AI Quiz Solve',
            badge: '24/7 AI Tutor',
            badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
            description: 'Ask follow-up questions, request practice questions, or ask the AI to rephrase the concept for a 5-year-old in a discreet side drawer.',
            icon: Bot
        },
        {
            category: 'workflow',
            title: 'Sub-1.2s Response Latency',
            origin: 'Speed Engine',
            badge: 'Ultra Fast',
            badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
            description: 'Powered by Google Gemini 2.5 Flash with sub-second token streaming so you can breeze through 50-question exams in minutes.',
            icon: Zap
        },

        // Privacy & Panic Controls (Canvaswizard + Quietly feature)
        {
            category: 'privacy',
            title: 'Emergency Panic Kill-Switch (Esc / ⌘+Z)',
            origin: 'CanvasWizard Safety',
            badge: 'Emergency Defense',
            badgeColor: 'text-red-400 bg-red-500/10 border-red-500/20',
            description: 'If a teacher or proctor walks behind you, hitting Esc or your designated panic key instantly destroys all overlay DOM nodes in <30ms.',
            icon: Lock
        },
        {
            category: 'privacy',
            title: 'Zero-Logging & No Account Guest Mode',
            origin: 'Canvas Ninja Privacy',
            badge: 'Privacy First',
            badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
            description: 'No school email or account required to start. We store zero question history, zero IP logs, and zero personal credentials on our servers.',
            icon: Shield
        },
        {
            category: 'privacy',
            title: 'Bring Your Own Key (BYOK)',
            origin: 'Custom API Engine',
            badge: 'Power User',
            badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
            description: 'Prefer your own Gemini or OpenAI API key? Plug it in for unlimited personal rate limits with zero recurring monthly subscription.',
            icon: Key
        }
    ];

    const filteredFeatures = filterCategory === 'all' 
        ? allFeaturesList 
        : allFeaturesList.filter(f => f.category === filterCategory);

    return (
        <main className="bg-[#070b14] text-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
                {/* Ambient Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600/10 border border-blue-500/30 rounded-full mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                            24+ Complete Stealth & Solving Capabilities
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-[4.2rem] font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                        Every Competitor Feature. <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                            Engineered Into One Unbeatable Tool.
                        </span>
                    </h1>

                    <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                        From Canvas quiz-log focus interception to Snap-It screenshot solving, 3 display modes, and emergency panic kill-switches—ExamGhost delivers everything.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href="#pricing"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-sm shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all flex items-center gap-2.5 active:scale-95"
                        >
                            <FaChrome className="w-4 h-4" />
                            <span>Add to Chrome — Free</span>
                        </a>
                        <a 
                            href="#comparison-matrix"
                            className="px-6 py-4 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
                        >
                            <span>View Competitor Comparison Matrix</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Interactive Showcase: 3 Display Modes (The AI Quiz Solve Killer) */}
            <section className="py-20 bg-[#090e1a] border-b border-white/5 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
                            Adaptive Solving Modes
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                            Choose Your Preferred Level of Stealth
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-400">
                            Switch seamlessly between 3 modes depending on whether you are taking a timed test or studying homework.
                        </p>
                    </div>

                    {/* Mode Selector */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white/5 border border-white/10 p-1.5 rounded-2xl flex flex-wrap justify-center gap-2">
                            {[
                                { id: 'invisible', name: '1. Invisible Mode (Zero UI)', tag: 'Screen-Share Safe' },
                                { id: 'stealth', name: '2. Discreet Stealth HUD', tag: 'Subtle Highlight' },
                                { id: 'explain', name: '3. Deep Tutor & Explain', tag: 'Full Reasoning' }
                            ].map((m) => (
                                <button
                                    key={m.id}
                                    onClick={() => setActiveDisplayMode(m.id as any)}
                                    className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                                        activeDisplayMode === m.id
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                            : 'text-slate-400 hover:text-white'
                                    }`}
                                >
                                    <span>{m.name}</span>
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 hidden sm:inline">
                                        {m.tag}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Preview Container */}
                    <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-[#0c1222] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs text-slate-400 font-mono">
                            <span>Active Exam Simulator</span>
                            <span className="text-blue-400 font-bold uppercase">{activeDisplayMode} Mode Activated</span>
                        </div>

                        <div className="mb-5">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">
                                Organic Chemistry • Question 7
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                                Which of the following reagents selectively converts a secondary alcohol to a ketone without over-oxidation?
                            </h4>
                        </div>

                        {/* Options rendered according to mode */}
                        <div className="space-y-3 mb-6">
                            {[
                                { label: 'A', text: 'KMnO₄ / H₂SO₄ (hot, concentrated)', isCorrect: false },
                                { label: 'B', text: 'PCC (Pyridinium chlorochromate) in CH₂Cl₂', isCorrect: true },
                                { label: 'C', text: 'Jones reagent (CrO₃ / H₂SO₄)', isCorrect: false },
                                { label: 'D', text: 'LiAlH₄ in anhydrous ether', isCorrect: false }
                            ].map((opt, i) => {
                                const isCorrect = opt.isCorrect;

                                return (
                                    <div 
                                        key={i}
                                        className={`p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-between transition-all ${
                                            isCorrect && activeDisplayMode === 'invisible'
                                                ? 'bg-blue-600/10 border-blue-500/40 text-white'
                                                : isCorrect && activeDisplayMode === 'stealth'
                                                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                                                : isCorrect && activeDisplayMode === 'explain'
                                                ? 'bg-emerald-500/15 border-emerald-500/60 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                                                : 'bg-white/[0.02] border-white/5 text-slate-400'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] font-bold ${
                                                isCorrect && activeDisplayMode !== 'invisible'
                                                    ? 'border-emerald-400 bg-emerald-500 text-black'
                                                    : isCorrect && activeDisplayMode === 'invisible'
                                                    ? 'border-blue-400 bg-blue-600 text-white'
                                                    : 'border-white/20 text-slate-400'
                                            }`}>
                                                {isCorrect ? '✓' : opt.label}
                                            </div>
                                            <span>{opt.text}</span>
                                        </div>

                                        {isCorrect && activeDisplayMode === 'stealth' && (
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                        )}

                                        {isCorrect && activeDisplayMode === 'explain' && (
                                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                                                99.9% Match
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Explain Mode Reasoning Box */}
                        {activeDisplayMode === 'explain' && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/30 text-xs text-slate-300 space-y-1.5"
                            >
                                <div className="font-bold text-blue-300 flex items-center gap-2">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span>Step-by-Step Reason:</span>
                                </div>
                                <p className="leading-relaxed">
                                    PCC is a mild oxidizing agent that selectively oxidizes secondary alcohols to ketones without over-oxidizing. Strong oxidizers like KMnO₄ or Jones reagent cleave the carbon chain under harsh conditions, while LiAlH₄ is a reducing agent.
                                </p>
                            </motion.div>
                        )}

                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                            <span>🛡️ Focus Interceptor Active • Zero tab leaves recorded</span>
                            <span className="text-slate-400 font-mono">⌘ + Shift + X</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Filterable Full Feature Directory */}
            <section className="py-24 bg-[#070b14] border-b border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                            Complete Feature Directory
                        </h2>
                        <p className="text-sm text-slate-400">
                            Explore all 24+ capabilities built into the ExamGhost browser extension.
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {featureCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilterCategory(cat.id)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                                    filterCategory === cat.id
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                                        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredFeatures.map((feat, idx) => {
                            const Icon = feat.icon;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: idx * 0.03 }}
                                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${feat.badgeColor}`}>
                                                {feat.badge}
                                            </span>
                                        </div>

                                        <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                            {feat.title}
                                        </h4>
                                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                            {feat.description}
                                        </p>
                                    </div>

                                    <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                                        <span>Origin: {feat.origin}</span>
                                        <span className="text-emerald-400 font-bold">✓ Included</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* ======================================================= */}
            {/* FULL COMPETITIVE FEATURE COMPARISON MATRIX             */}
            {/* ======================================================= */}
            <section id="comparison-matrix" className="py-24 bg-[#090e1a] border-b border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
                            Feature-by-Feature Benchmark
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
                            ExamGhost vs. All 9 Competitors
                        </h2>
                        <p className="text-sm text-slate-400">
                            See why students switch from CanvasHack, Quietly, TestBro, and Canvas Ninja to ExamGhost.
                        </p>
                    </div>

                    {/* Table Container */}
                    <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#0c1222] shadow-2xl">
                        <table className="w-full text-left text-xs sm:text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                    <th className="p-4 sm:p-5 font-bold text-white min-w-[220px]">Capability</th>
                                    <th className="p-4 sm:p-5 font-extrabold text-blue-400 bg-blue-600/15 border-x border-blue-500/30 text-center min-w-[140px]">
                                        ExamGhost AI
                                    </th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-400 text-center min-w-[110px]">CanvasHack</th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-400 text-center min-w-[110px]">Quietly AI</th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-400 text-center min-w-[110px]">TestBro</th>
                                    <th className="p-4 sm:p-5 font-bold text-slate-400 text-center min-w-[110px]">Canvas Ninja</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-slate-300">
                                {[
                                    { cap: "Canvas Focus/Blur Interceptor (Zero Log Flags)", eg: true, ch: true, q: false, tb: false, cn: true },
                                    { cap: "Teacher Action Log Preview & Inspector", eg: true, ch: true, q: false, tb: false, cn: false },
                                    { cap: "3 Adaptive Display Modes (Invisible, Stealth, Explain)", eg: true, ch: false, q: false, tb: false, cn: false },
                                    { cap: "Snap-It Area Crop (Calculus & Chemistry)", eg: true, ch: false, q: false, tb: true, cn: false },
                                    { cap: "Smart 2nd-Attempt Auto-Memory", eg: true, ch: true, q: false, tb: false, cn: true },
                                    { cap: "Zero Clipboard Footprint (In-Memory Solve)", eg: true, ch: true, q: true, tb: false, cn: true },
                                    { cap: "Shadow DOM UI Layer Isolation", eg: true, ch: false, q: true, tb: false, cn: true },
                                    { cap: "Humanized Short Answer / Essay Generator", eg: true, ch: false, q: true, tb: false, cn: false },
                                    { cap: "Emergency Panic Kill-Switch (<30ms purge)", eg: true, ch: false, q: false, tb: false, cn: false },
                                    { cap: "Canvas New Quizzes 2026 Engine Support", eg: true, ch: true, q: true, tb: false, cn: true },
                                    { cap: "Blackboard Ultra & Moodle Compatibility", eg: true, ch: false, q: true, tb: true, cn: false },
                                    { cap: "Bring Your Own Key (BYOK) Option", eg: true, ch: false, q: false, tb: false, cn: false },
                                    { cap: "Affordable Monthly Price", eg: "$7.99/mo", ch: "$24.99/mo", q: "$12.99/mo", tb: "$5.99 credits", cn: "$16.99/mo" },
                                    { cap: "Money-Back Guarantee", eg: "7 Days (100%)", ch: "7 Days", q: "Limited", tb: "No Refund", cn: "Case by Case" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="p-4 sm:p-5 font-medium text-slate-200">
                                            {row.cap}
                                        </td>
                                        
                                        {/* ExamGhost Column */}
                                        <td className="p-4 sm:p-5 bg-blue-600/10 border-x border-blue-500/30 text-center font-bold text-emerald-400">
                                            {typeof row.eg === 'boolean' ? (row.eg ? '✓ Yes' : '✕') : row.eg}
                                        </td>

                                        {/* CanvasHack */}
                                        <td className="p-4 sm:p-5 text-center">
                                            {typeof row.ch === 'boolean' ? (row.ch ? <span className="text-emerald-400">✓</span> : <span className="text-slate-600">✕</span>) : row.ch}
                                        </td>

                                        {/* Quietly */}
                                        <td className="p-4 sm:p-5 text-center">
                                            {typeof row.q === 'boolean' ? (row.q ? <span className="text-emerald-400">✓</span> : <span className="text-slate-600">✕</span>) : row.q}
                                        </td>

                                        {/* TestBro */}
                                        <td className="p-4 sm:p-5 text-center">
                                            {typeof row.tb === 'boolean' ? (row.tb ? <span className="text-emerald-400">✓</span> : <span className="text-slate-600">✕</span>) : row.tb}
                                        </td>

                                        {/* Canvas Ninja */}
                                        <td className="p-4 sm:p-5 text-center">
                                            {typeof row.cn === 'boolean' ? (row.cn ? <span className="text-emerald-400">✓</span> : <span className="text-slate-600">✕</span>) : row.cn}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="py-20 bg-[#070b14] text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Start Using Every Feature Today
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
                        Install the ExamGhost Chrome extension in under 30 seconds. No credit card required to try.
                    </p>
                    <a
                        href="#pricing"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl text-sm shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all active:scale-95"
                    >
                        <FaChrome className="w-5 h-5" />
                        <span>Add ExamGhost to Chrome</span>
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
