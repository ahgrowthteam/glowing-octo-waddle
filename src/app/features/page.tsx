'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    Shield, EyeOff, Bot, Sparkles, Check, CheckCircle2, 
    Terminal, Lock, Layers, Search, Command, Maximize2,
    CheckSquare, History, Power, Camera, Award, ArrowRight
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function FeaturesPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const featureCategories = [
        { id: 'all', name: 'All 24 Features' },
        { id: 'stealth', name: 'Anti-Detection' },
        { id: 'modes', name: 'Display Modes' },
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
            badge: 'Stealth Core',
            bg: '#c4d0f8',
            description: 'Silences browser visibilitychange and window.blur listeners directly in the DOM. Canvas continuously receives an active session heartbeat, recording 0 "Stopped viewing quiz page" warnings.',
            icon: Shield
        },
        {
            category: 'stealth',
            title: 'Teacher Action Log Neutralizer',
            badge: 'Audit Proof',
            bg: '#cdeecb',
            description: 'Guarantees your professor sees only a normal timeline: "Session started → Viewed question → Answered question" with zero red alert flags.',
            icon: Terminal
        },
        {
            category: 'stealth',
            title: 'Isolated Shadow DOM Engine',
            badge: 'Zero DOM Leak',
            bg: '#e2d3fa',
            description: 'All HUD overlays and answers live inside an isolated Shadow Root tree. The host page DOM, proctor scripts, and screen-sharing tools cannot inspect or access it.',
            icon: Layers
        },
        {
            category: 'stealth',
            title: 'Zero Clipboard Footprint',
            badge: 'Privacy Safe',
            bg: '#bfe3f6',
            description: 'Unlike basic AI extensions that copy text to your OS clipboard, ExamGhost extracts and solves in-memory only. Your clipboard remains completely untouched.',
            icon: EyeOff
        },
        {
            category: 'stealth',
            title: 'Kiosk & Locked-Browser Spoofing',
            badge: 'Lockdown Bypass',
            bg: '#ffd5cc',
            description: 'Emulates fullscreen and kiosk status states, allowing you to use your standard browser environment without being locked into restrictive shells.',
            icon: Maximize2
        },

        // Display Modes
        {
            category: 'modes',
            title: 'Zero-UI In-DOM Highlighting',
            badge: 'Zero Overhead',
            bg: '#bfe9d9',
            description: 'Answers are marked directly on the native Canvas radio buttons without opening floating windows, sidebars, or auxiliary panels.',
            icon: CheckCircle2
        },
        {
            category: 'modes',
            title: 'Discreet Stealth Dot Indicator',
            badge: 'Whisper Safe',
            bg: '#cdeecb',
            description: 'Places a faint, semi-transparent colored dot beside the correct choice. Completely invisible to anyone glancing across your lecture hall or shoulder.',
            icon: EyeOff
        },
        {
            category: 'modes',
            title: 'Deep Tutor Breakdown Drawer',
            badge: 'Full Reasoning',
            bg: '#e2d3fa',
            description: 'Pops up full step-by-step logic, explaining why the correct choice is true and specifically why each distractor is wrong.',
            icon: Bot
        },

        // Snap-It Vision
        {
            category: 'vision',
            title: 'Area Screenshot Crop Tool (⌘+Shift+S)',
            badge: 'Multimodal OCR',
            bg: '#ffd5cc',
            description: 'When text cannot be highlighted or right-click is disabled, hit ⌘+Shift+S and drag a crop box over any area to solve instantly with computer vision in <1.2s.',
            icon: Camera
        },
        {
            category: 'vision',
            title: 'Chemical Structures & Reactions',
            badge: 'Chemistry OCR',
            bg: '#bfe3f6',
            description: 'Decodes organic chemistry skeletal drawings, IUPAC nomenclature, reaction mechanisms, electron configurations, and stereochemistry with precision.',
            icon: Sparkles
        },
        {
            category: 'vision',
            title: 'Calculus, Graphs & Matrix Algebra',
            badge: 'Math Engine',
            bg: '#c4d0f8',
            description: 'Reads LaTeX symbols, integrals, limits, derivatives, coordinate planes, and matrices directly from image crops or PDF exam elements.',
            icon: Layers
        },

        // Question Types
        {
            category: 'formats',
            title: 'Single Choice & MCQ Parsing',
            badge: 'MCQ Ready',
            bg: '#cdeecb',
            description: 'Instant auto-identification and solve for standard 4-option and 5-option multiple-choice questions across all LMS engines.',
            icon: CheckCircle2
        },
        {
            category: 'formats',
            title: 'Multi-Select Checkbox Bundles',
            badge: 'Multi-Select',
            bg: '#bfe3f6',
            description: 'Accurately selects multiple true statements simultaneously without missing negative constraints ("Select all that apply").',
            icon: CheckSquare
        },
        {
            category: 'formats',
            title: 'Fill-In-The-Blank & Numeric Input',
            badge: 'Auto-Fill',
            bg: '#e2d3fa',
            description: 'Solves complex numerical values, rounds to required significant digits, and populates blank text fields seamlessly.',
            icon: Terminal
        },
        {
            category: 'formats',
            title: 'Matching & Dropdown Columns',
            badge: 'Pairing Matrix',
            bg: '#ffd5cc',
            description: 'Maps complex relationships, definitions, and chemical formulas across dual-column matching tables in one pass.',
            icon: Layers
        },

        // Attempt Memory
        {
            category: 'memory',
            title: '2nd-Attempt Auto-Answer Cache',
            badge: 'GPA Booster',
            bg: '#c4d0f8',
            description: 'Caches high-scoring responses from your first submission and pre-populates verified answers on attempt #2 for effortless 100% scores.',
            icon: History
        },
        {
            category: 'memory',
            title: 'Incorrect Distractor Elimination',
            badge: 'Smart Guessing',
            bg: '#bfe9d9',
            description: 'Tracks which options resulted in lost points during previous attempts, pruning them to guarantee higher accuracy on re-takes.',
            icon: Check
        },

        // Security & Privacy
        {
            category: 'security',
            title: 'Emergency Panic Kill-Switch (Escape × 2)',
            badge: 'Safety First',
            bg: '#ffd5cc',
            description: 'Double-tap ESC or hit your panic hotkey to instantly vaporize all HUD overlays, purge local solver cache, and revert DOM to standard state in 10ms.',
            icon: Power
        },
        {
            category: 'security',
            title: 'Zero-Knowledge Memory Pipeline',
            badge: 'Zero Logs',
            bg: '#cdeecb',
            description: 'All questions are resolved via ephemeral memory buffers. No logs, search histories, or student identifiers are ever stored on remote servers.',
            icon: Lock
        },
        {
            category: 'security',
            title: 'Universal Platform Compatibility',
            badge: 'Cross-LMS',
            bg: '#bfe3f6',
            description: 'Engineered and continuously tested against Canvas Classic & New Quizzes, Blackboard Ultra, D2L Brightspace, Moodle, and McGraw-Hill Connect.',
            icon: Shield
        }
    ];

    const filteredFeatures = allFeatures.filter(f => {
        const matchesCat = selectedCategory === 'all' || f.category === selectedCategory;
        const matchesSearch = searchQuery === '' || 
            f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            f.description.toLowerCase().includes(searchQuery.toLowerCase());
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
        <div className="min-h-screen bg-cream text-ink">
            <Navbar />

            {/* Hero Banner (OneMacApp Style) */}
            <section className="pt-24 sm:pt-32 pb-16 bg-cream border-b border-black/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <p className="eyebrow justify-center mb-3">
                        <Award className="w-4 h-4 text-ink" />
                        <span>ALL 24 FEATURES</span>
                    </p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-5">
                        Every tool you could ever need,<br />
                        in one calm app.
                    </h1>
                    <p className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed font-normal mb-8">
                        We analyzed every existing tool—CanvasHack, Cheatmate, TestBro, Canvas Ninja—and engineered every feature into one unified, 100% invisible architecture.
                    </p>

                    {/* Search & Category Filter Pills */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto mb-8">
                        <div className="relative w-full">
                            <Search className="w-4 h-4 text-ink-muted absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search all 24 features..."
                                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-black/10 text-ink text-sm shadow-xs focus:outline-none focus:border-ink"
                            />
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center flex-wrap gap-1.5 max-w-3xl mx-auto">
                        {featureCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                                    selectedCategory === cat.id
                                        ? 'bg-ink text-white shadow-xs'
                                        : 'bg-white/80 hover:bg-white text-ink-secondary border border-black/5'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Cards Grid (OneMacApp Pastel Aesthetic) */}
            <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFeatures.map((feat, idx) => {
                        const Icon = feat.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-3xl bg-white border border-black/10 shadow-card flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-200"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div 
                                            className="w-10 h-10 rounded-2xl flex items-center justify-center text-ink shadow-xs"
                                            style={{ backgroundColor: feat.bg }}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-[11px] font-semibold text-ink px-2.5 py-0.5 rounded-full bg-[#f4f1ea] border border-black/5">
                                            {feat.badge}
                                        </span>
                                    </div>

                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        {feat.title}
                                    </h3>

                                    <p className="text-xs text-ink-muted leading-relaxed font-normal">
                                        {feat.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-ink-muted">
                                    <span>Status: Active & Shielded</span>
                                    <span className="text-emerald-700 font-semibold">✓ Verified</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Competitor Benchmark Comparison Matrix */}
            <section className="py-16 md:py-24 bg-white border-y border-black/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <p className="eyebrow justify-center mb-2">
                            <span>DIRECT BENCHMARK</span>
                        </p>
                        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-3">
                            How ExamGhost compares against others
                        </h2>
                        <p className="text-sm text-ink-muted">
                            A complete feature breakdown against the leading Canvas and LMS tools.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-3xl border border-black/10 shadow-soft">
                        <table className="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                                <tr className="bg-[#faf8f4] border-b border-black/10">
                                    <th className="p-4 sm:p-5 font-display font-bold text-ink">Product</th>
                                    <th className="p-4 sm:p-5 font-semibold text-ink">Focus-Loss Shield</th>
                                    <th className="p-4 sm:p-5 font-semibold text-ink">Shadow DOM</th>
                                    <th className="p-4 sm:p-5 font-semibold text-ink">Display Modes</th>
                                    <th className="p-4 sm:p-5 font-semibold text-ink">Snap-It OCR</th>
                                    <th className="p-4 sm:p-5 font-semibold text-ink">Attempt Memory</th>
                                    <th className="p-4 sm:p-5 font-semibold text-ink">Panic Switch</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5">
                                {competitorsList.map((c, i) => (
                                    <tr 
                                        key={i} 
                                        className={c.highlight ? 'bg-[#c4d0f8]/20 font-semibold text-ink' : 'hover:bg-black/5 text-ink-secondary'}
                                    >
                                        <td className="p-4 sm:p-5 flex items-center gap-2">
                                            {c.highlight && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                                            <span>{c.name}</span>
                                        </td>
                                        <td className="p-4 sm:p-5">{c.focusLoss}</td>
                                        <td className="p-4 sm:p-5">{c.shadowDom}</td>
                                        <td className="p-4 sm:p-5">{c.displayModes}</td>
                                        <td className="p-4 sm:p-5">{c.snapIt}</td>
                                        <td className="p-4 sm:p-5">{c.attemptMemory}</td>
                                        <td className="p-4 sm:p-5">{c.panicSwitch}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
