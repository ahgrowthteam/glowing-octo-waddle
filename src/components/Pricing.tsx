'use client';

import React, { useState } from 'react';
import { 
    Check, Sparkles, Shield, Lock, Zap, Download, 
    X, Copy, CheckCircle2, ArrowRight, Ghost
} from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { FaChrome } from 'react-icons/fa';

export default function Pricing() {
    const [modalOpen, setModalOpen] = useState(false);
    const [copiedKey, setCopiedKey] = useState(false);
    const [installStep, setInstallStep] = useState<'idle' | 'installing' | 'complete'>('idle');

    const handleCopy = (keyText: string) => {
        navigator.clipboard.writeText(keyText);
        setCopiedKey(true);
        setTimeout(() => setCopiedKey(false), 2000);
    };

    const handleDownload = () => {
        setInstallStep('installing');
        setTimeout(() => {
            setInstallStep('complete');
        }, 1200);
    };

    const features = [
        "All 24 stealth tools (MCQ solver, LaTeX math, short answers)",
        "Focus Shield: 100% Canvas window-blur event interception",
        "Snap-It Vision OCR: Instant diagram & chart decoder",
        "Stealth Opacity Dial & Emergency Panic Kill Switch (Esc)",
        "Lifetime access & all future semester updates included",
        "Private on-device execution — zero school network footprint"
    ];

    return (
        <section id="pricing" className="py-20 md:py-32 bg-cream text-ink border-b border-black/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">

                {/* Section Head (OneMacApp Style) */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>PRICING</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Pay once.<br />
                        Own it for good.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        No recurring monthly subscriptions during finals week. Buy once, unlock all 24 tools, and use them across all semesters.
                    </p>
                </div>

                {/* OneMacApp Hero Pricing Card */}
                <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-black/10 shadow-lift p-8 sm:p-12 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                        
                        {/* Left Side: Mascot Art / Badge */}
                        <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#c4d0f8]/30 border border-[#c4d0f8] text-center">
                            <div className="w-24 h-24 rounded-full bg-[#c4d0f8] flex items-center justify-center text-ink shadow-soft mb-4">
                                <Ghost className="w-12 h-12 fill-current stroke-[2.2]" />
                            </div>
                            <span className="font-display font-bold text-xl text-ink">
                                Lifetime Pass
                            </span>
                            <span className="text-xs text-ink-muted mt-1">
                                Universal LMS License
                            </span>
                            <span className="mt-4 text-[11px] font-semibold bg-white text-ink px-3 py-1 rounded-full border border-black/5 shadow-xs">
                                14 spots left at $19.99
                            </span>
                        </div>

                        {/* Right Side: Launch Ladder & Details */}
                        <div className="lg:col-span-8 flex flex-col justify-between">
                            
                            {/* Launch Ladder (OneMacApp Style) */}
                            <ol className="flex items-center gap-3 sm:gap-4 mb-6 pb-6 border-b border-black/5 overflow-x-auto">
                                <li className="flex-1 min-w-[130px] p-3 rounded-2xl bg-[#faf8f4] border-2 border-ink shadow-xs">
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-ink mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span>$19.99</span>
                                    </div>
                                    <div className="text-[11px] text-emerald-800 font-semibold">
                                        14 spots left
                                    </div>
                                </li>
                                <li className="flex-1 min-w-[130px] p-3 rounded-2xl bg-[#faf8f4]/60 border border-black/10 opacity-75">
                                    <div className="text-xs font-bold text-ink-secondary mb-0.5">
                                        $39.99
                                    </div>
                                    <div className="text-[11px] text-ink-muted">
                                        Next 50 spots
                                    </div>
                                </li>
                                <li className="flex-1 min-w-[130px] p-3 rounded-2xl bg-[#faf8f4]/60 border border-black/10 opacity-75">
                                    <div className="text-xs font-bold text-ink-secondary mb-0.5">
                                        $59.99
                                    </div>
                                    <div className="text-[11px] text-ink-muted">
                                        Final Tier
                                    </div>
                                </li>
                            </ol>

                            {/* Features Checklist */}
                            <div className="space-y-2.5 mb-8">
                                {features.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Action Button */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="btn-dark px-8 py-3.5 text-base justify-center shadow-soft hover:shadow-lift flex-1"
                                >
                                    <FaChrome className="w-4 h-4 text-[#bfe3f6]" />
                                    <span>Get ExamGhost Lifetime · $19.99</span>
                                </button>
                                <span className="text-[11px] text-ink-muted text-center sm:text-left">
                                    Instant license key · 14-day money-back guarantee
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Discord Community Banner */}
                <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-black/10 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2]">
                            <SiDiscord className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-sm text-ink">
                                Join 2,400+ students in our Discord
                            </h4>
                            <p className="text-xs text-ink-muted">
                                Real-time Canvas update alerts, test-taking strategies & weekly license giveaways.
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://discord.gg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-soft px-5 py-2 text-xs font-semibold shrink-0"
                    >
                        Join Discord (Free)
                    </a>
                </div>

            </div>

            {/* Instant License & Download Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-black/10 shadow-2xl relative">
                        
                        {/* Close button */}
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-ink transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#c4d0f8] flex items-center justify-center text-ink">
                                <Ghost className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-lg text-ink">
                                    ExamGhost Lifetime Access
                                </h3>
                                <p className="text-xs text-ink-muted">
                                    Your universal license key is ready
                                </p>
                            </div>
                        </div>

                        {/* License Key Box */}
                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/10 mb-6">
                            <span className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider block mb-1.5">
                                Generated License Key
                            </span>
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-mono text-xs sm:text-sm font-bold text-ink">
                                    GHOST-PRO-8894-LIFETIME-OK
                                </span>
                                <button
                                    onClick={() => handleCopy("GHOST-PRO-8894-LIFETIME-OK")}
                                    className="btn-soft px-3 py-1.5 text-xs text-ink"
                                >
                                    {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                    <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Download / Install Action */}
                        <div className="space-y-3">
                            <button
                                onClick={handleDownload}
                                disabled={installStep !== 'idle'}
                                className="btn-dark w-full py-3.5 text-sm justify-center"
                            >
                                {installStep === 'idle' && (
                                    <>
                                        <Download className="w-4 h-4 text-[#bfe3f6]" />
                                        <span>Download Extension Package (.zip)</span>
                                    </>
                                )}
                                {installStep === 'installing' && (
                                    <span>Preparing Extension Package...</span>
                                )}
                                {installStep === 'complete' && (
                                    <span className="text-emerald-300">✓ Download Started! Check your browser downloads.</span>
                                )}
                            </button>

                            <p className="text-center text-[11px] text-ink-muted">
                                Compatible with Google Chrome, Microsoft Edge, Brave & Arc Browser.
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
