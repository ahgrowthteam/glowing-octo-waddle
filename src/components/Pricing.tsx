'use client';
import React, { useState } from 'react';
import { Check, Sparkles, Shield, Lock, Zap, Download, X, Copy, CheckCircle2, ArrowRight } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { FaChrome } from 'react-icons/fa';

export default function Pricing() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState<{
        name: string;
        price: string;
        billing: string;
        isPro: boolean;
    } | null>(null);
    const [copiedKey, setCopiedKey] = useState(false);
    const [installStep, setInstallStep] = useState<'idle' | 'installing' | 'complete'>('idle');

    const openModal = (tier: { name: string; price: string; billing: string; isPro: boolean }) => {
        setSelectedTier(tier);
        setInstallStep('idle');
        setCopiedKey(false);
        setModalOpen(true);
    };

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

    return (
        <section id="pricing" className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700">
                            Transparent Pricing
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                        Invest in your GPA for less than lunch
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        Cancel anytime with one click. Backed by our 7-day money-back guarantee.
                    </p>
                </div>

                {/* Discord Community Callout */}
                <div className="max-w-3xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center shrink-0">
                            <SiDiscord className="w-5 h-5 text-[#5865F2]" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900">
                                Join 2,400+ students on Discord
                            </h3>
                            <p className="text-xs text-slate-500">
                                Real-time Canvas update alerts, test-taking strategies & weekly giveaways.
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://discord.gg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors shrink-0"
                    >
                        Join Discord (Free)
                    </a>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">

                    {/* Tier 1: Free Trial */}
                    <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
                        <div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">Free Trial</h3>
                            <p className="text-xs text-slate-500 mb-5">Test the stealth engine risk-free.</p>
                            
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">$0</span>
                                <span className="text-xs text-slate-500">/ forever</span>
                            </div>

                            <div className="space-y-3 mb-8 text-xs text-slate-600">
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>5 Solves per Day</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Basic Focus Interceptor</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Supports Canvas & Blackboard</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-slate-400">
                                    <span>✕ No Snap-It Screenshot Mode</span>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => openModal({ name: 'Free Trial', price: '$0', billing: 'Free Forever', isPro: false })}
                            className="w-full py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs text-center transition-colors block cursor-pointer"
                        >
                            Install Free
                        </button>
                    </div>

                    {/* Tier 2: Monthly Pro (Popular) */}
                    <div className="p-7 rounded-2xl bg-white border-2 border-slate-900 shadow-md flex flex-col justify-between relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Most Popular
                        </div>

                        <div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">Monthly Pro</h3>
                            <p className="text-xs text-slate-500 mb-5">Full power for active semesters.</p>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-slate-400 line-through text-sm font-semibold">$15.99</span>
                                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">$7.99</span>
                                <span className="text-xs text-slate-500">/ month</span>
                            </div>

                            <div className="space-y-3 mb-8 text-xs text-slate-700">
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span className="font-semibold text-slate-900">Unlimited Quiz Solves</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>100% Focus Interceptor (Zero Flags)</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Snap-It Screenshot & Graph Solver</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>2nd-Attempt Auto-Memory</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Step-by-Step Explanations</span>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => openModal({ name: 'Monthly Pro', price: '$7.99', billing: 'per month', isPro: true })}
                            className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs text-center shadow-sm transition-colors block cursor-pointer"
                        >
                            Start Pro Access
                        </button>
                    </div>

                    {/* Tier 3: Lifetime Pass */}
                    <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
                        <div>
                            <div className="inline-block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                                Best Value
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">Lifetime Pass</h3>
                            <p className="text-xs text-slate-500 mb-5">Pay once, protected for your entire degree.</p>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-slate-400 line-through text-sm font-semibold">$129</span>
                                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">$49.99</span>
                                <span className="text-xs text-slate-500">/ one-time</span>
                            </div>

                            <div className="space-y-3 mb-8 text-xs text-slate-600">
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span className="font-semibold text-slate-900">Lifetime Unlimited Access</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Free Automatic Updates Forever</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>All Future LMS Patches Included</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Priority VIP Discord Ticket Support</span>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => openModal({ name: 'Lifetime Pass', price: '$49.99', billing: 'one-time payment', isPro: true })}
                            className="w-full py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs text-center transition-colors block cursor-pointer"
                        >
                            Get Lifetime Pass
                        </button>
                    </div>

                </div>

                {/* Trust & Guarantee Strip */}
                <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-500 border-t border-slate-200/80 pt-8">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        <span>100% Always Working Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-blue-600" />
                        <span>7-Day Full Refund Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span>Instant Chrome Setup in 60s</span>
                    </div>
                </div>

            </div>

            {/* Interactive Install & Access Modal */}
            {modalOpen && selectedTier && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div 
                        className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-7 relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Header */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shrink-0">
                                <FaChrome className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                                    {selectedTier.name} — {selectedTier.price}
                                </h3>
                                <p className="text-xs text-slate-500">
                                    ExamGhost Chrome Extension v2.4 Package
                                </p>
                            </div>
                        </div>

                        {/* Pro Key Section */}
                        {selectedTier.isPro && (
                            <div className="mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="flex items-center justify-between text-xs mb-1.5">
                                    <span className="font-semibold text-slate-700">Your Pro License Key</span>
                                    <span className="text-emerald-700 font-medium">Ready to activate</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <code className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-800 select-all">
                                        EG-{selectedTier.name === 'Lifetime Pass' ? 'LIFE' : 'PRO'}-8839-X44K
                                    </code>
                                    <button
                                        onClick={() => handleCopy(`EG-${selectedTier.name === 'Lifetime Pass' ? 'LIFE' : 'PRO'}-8839-X44K`)}
                                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-1.5 shrink-0"
                                    >
                                        {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                        <span>{copiedKey ? 'Copied!' : 'Copy'}</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Installation Steps */}
                        <div className="space-y-3 mb-6 text-xs text-slate-600">
                            <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                                <span>Download the verified extension zip package below.</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                                <span>In Chrome, go to <code className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-800 font-mono">chrome://extensions</code> and turn on <b>Developer mode</b>.</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                                <span>Click <b>Load unpacked</b> and select the extracted folder. Press <b>⌘+Shift+X</b> on any quiz!</span>
                            </div>
                        </div>

                        {/* Download CTA Action */}
                        <div className="pt-2">
                            {installStep === 'idle' && (
                                <button
                                    onClick={handleDownload}
                                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download ExamGhost_v2.4.zip</span>
                                </button>
                            )}

                            {installStep === 'installing' && (
                                <div className="w-full py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                                    <span>Preparing Chrome package...</span>
                                </div>
                            )}

                            {installStep === 'complete' && (
                                <div className="space-y-2">
                                    <div className="w-full py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-xs flex items-center justify-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        <span>Download started! Check your downloads folder.</span>
                                    </div>
                                    <button
                                        onClick={() => setModalOpen(false)}
                                        className="w-full py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Money Back Guarantee Reminder */}
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                            <span className="flex items-center gap-1">
                                <Lock className="w-3 h-3 text-emerald-600" />
                                256-bit Encrypted SSL
                            </span>
                            <span>7-Day 100% Refund Guarantee</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
