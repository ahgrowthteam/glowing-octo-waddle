'use client';

import React, { useState } from 'react';
import { 
    Check, Sparkles, Shield, Lock, Zap, ArrowRight, 
    Ghost, Star, GraduationCap, Award,
    Calculator, ChevronDown, ChevronUp, 
    Copy, X, CreditCard
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import StudyAiHubShowcase from './StudyAiHubShowcase';

export default function Pricing() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState<'free' | 'monthly' | 'yearly' | 'lifetime'>('yearly');
    const [copiedKey, setCopiedKey] = useState(false);
    const [courseLoad, setCourseLoad] = useState<'light' | 'standard' | 'heavy'>('standard');
    const [showComparison, setShowComparison] = useState(false);

    const handleOpenPlan = (id: 'free' | 'monthly' | 'yearly' | 'lifetime') => {
        setSelectedPlanId(id);
        setModalOpen(true);
    };

    const handleCopy = (keyText: string) => {
        navigator.clipboard.writeText(keyText);
        setCopiedKey(true);
        setTimeout(() => setCopiedKey(false), 2000);
    };

    const calculatorData = {
        light: {
            credits: "12 Credits (4 Classes)",
            exams: "~16 Exams & Quizzes",
            tuitionRisk: "$2,400 – $3,600",
            costPerExam: "$0.52 / test",
            recommended: "Academic Year Pass"
        },
        standard: {
            credits: "15 Credits (5 Classes)",
            exams: "~20 Exams & Quizzes",
            tuitionRisk: "$3,000 – $4,500",
            costPerExam: "$0.41 / test",
            recommended: "Academic Year Pass (Best Value)"
        },
        heavy: {
            credits: "18+ Credits (Heavy STEM / Honors)",
            exams: "~26 Exams & Quizzes",
            tuitionRisk: "$4,500 – $6,000+",
            costPerExam: "$0.32 / test",
            recommended: "Lifetime Degree Pass"
        }
    };

    const activeCalc = calculatorData[courseLoad];

    const modalData = {
        free: {
            title: "5 Free Solves / Day (Auto-Refills Daily)",
            subtitle: "Zero credit card required · Test on your live quiz every day",
            key: "GHOST-FREE-5DAY-ACTIVATE",
            desc: "Paste this key into ExamGhost to unlock 5 free AI question solves every 24 hours immediately."
        },
        monthly: {
            title: "Monthly Pass ($19/mo)",
            subtitle: "Unlimited Extension + Claude/ChatGPT/DeepSeek Study Hub",
            key: "GHOST-PRO-MONTHLY-UNLIMITED",
            desc: "Instant activation key for unlimited quiz solving plus full access to the Multi-Model Study & Homework AI Workspace."
        },
        yearly: {
            title: "Academic Year Pass ($99/yr)",
            subtitle: "Only $8.25/mo · Unlimited Extension + Study AI Hub (Save 56%)",
            key: "GHOST-ACADEMIC-YEARLY-PASS",
            desc: "Full academic year stealth license with priority 0.3s AI vision compute and unlimited Claude, ChatGPT & DeepSeek-R1 Study Hub access."
        },
        lifetime: {
            title: "Lifetime Degree Pass ($199)",
            subtitle: "Pay once · Covers your entire degree + permanent Study AI Hub",
            key: "GHOST-VIP-10YR-PERMANENT",
            desc: "Permanent license key valid across undergrad, master's (MSc), and postgrad—includes permanent access to our Claude/ChatGPT/DeepSeek Study Workspace."
        }
    };

    const activeModal = modalData[selectedPlanId];

    return (
        <section id="pricing" className="py-20 md:py-28 bg-cream text-ink border-b border-black/5 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-200/20 via-blue-200/20 to-amber-200/20 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>HONEST 2-IN-1 STUDENT PRICING</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.08] mb-4">
                        Invest in your degree.<br />
                        <span className="text-emerald-800">2-in-1 Extension + Study AI Hub.</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-ink-muted leading-relaxed font-normal max-w-2xl mx-auto">
                        Start with <strong className="text-ink font-semibold">5 Free Solves / Day</strong> ($0, no card needed). Upgrade to any paid plan for <strong>Unlimited Stealth Quiz Solving</strong> plus full access to our <strong>Claude + ChatGPT + DeepSeek-R1 Study &amp; Homework AI Workspace</strong>—saving you $60+/mo in separate AI subscriptions.
                    </p>
                </div>

                {/* Interactive Semester Protection Calculator */}
                <div className="rounded-3xl bg-white border border-black/10 p-5 sm:p-6 mb-10 shadow-xs">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-black/5">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800">
                                <Calculator className="w-4 h-4" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-sm text-ink">
                                    Semester Protection Calculator
                                </h3>
                                <p className="text-xs text-ink-muted">
                                    Select your course load to see your estimated exams and tuition shielded:
                                </p>
                            </div>
                        </div>

                        {/* Course Load Selector Buttons */}
                        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-black/5 border border-black/5 text-xs font-bold">
                            {[
                                { id: 'light', label: '12 Credits (4 Classes)' },
                                { id: 'standard', label: '15 Credits (5 Classes)' },
                                { id: 'heavy', label: '18+ Credits (STEM)' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setCourseLoad(tab.id as any)}
                                    className={`py-2 px-3 rounded-xl transition-all text-center cursor-pointer ${
                                        courseLoad === tab.id 
                                            ? 'bg-white text-ink shadow-xs' 
                                            : 'text-ink-secondary hover:text-ink'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Metrics Output Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
                        <div className="p-3 rounded-2xl bg-[#faf8f5] border border-black/5">
                            <span className="text-[10px] uppercase font-bold text-ink-muted block">Semester Tests</span>
                            <span className="font-display font-bold text-base text-ink block mt-0.5">{activeCalc.exams}</span>
                            <span className="text-[10px] text-ink-muted">Midterms &amp; Quizzes</span>
                        </div>

                        <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                            <span className="text-[10px] uppercase font-bold text-emerald-900 block">Tuition Shielded</span>
                            <span className="font-display font-bold text-base text-emerald-950 block mt-0.5">{activeCalc.tuitionRisk}</span>
                            <span className="text-[10px] text-emerald-800">Retake cost avoided</span>
                        </div>

                        <div className="p-3 rounded-2xl bg-[#faf8f5] border border-black/5">
                            <span className="text-[10px] uppercase font-bold text-ink-muted block">Cost / Exam</span>
                            <span className="font-display font-bold text-base text-ink block mt-0.5">{activeCalc.costPerExam}</span>
                            <span className="text-[10px] text-ink-muted">With Academic Pass</span>
                        </div>

                        <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                            <span className="text-[10px] uppercase font-bold text-blue-900 block">Best Match</span>
                            <span className="font-display font-bold text-xs text-blue-950 block mt-1 truncate">{activeCalc.recommended}</span>
                            <span className="text-[10px] text-blue-800">Extension + Study AI Hub</span>
                        </div>
                    </div>
                </div>

                {/* 5 Free Solves / Day Trial Banner */}
                <div className="rounded-3xl bg-white border border-black/10 p-5 sm:p-6 mb-10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex flex-col items-center justify-center text-emerald-950 shrink-0 shadow-xs">
                            <span className="font-display font-black text-base leading-none">5/d</span>
                            <span className="text-[9px] font-bold uppercase tracking-tight">Free</span>
                        </div>
                        <div>
                            <div className="text-sm sm:text-base font-bold text-ink flex flex-wrap items-center gap-2">
                                <span>Get 5 Free Solves / Day — Auto-Refills Every 24 Hours</span>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300">
                                    $0 · No Card Needed
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-ink-muted mt-0.5">
                                Test Double-Click inline solving, Alt+1/2/3 Stealth Modes, and Alt+S Snip OCR on 5 real questions every single day before paying anything.
                            </p>
                        </div>
                    </div>
                    <button 
                        onClick={() => handleOpenPlan('free')}
                        className="btn-soft px-5 py-2.5 text-xs sm:text-sm font-bold shrink-0 rounded-full hover:bg-black/5 inline-flex items-center gap-1.5 whitespace-nowrap bg-cream border border-black/10 text-ink shadow-xs cursor-pointer"
                    >
                        <span>Claim 5 Free Solves / Day</span>
                        <ArrowRight className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
                    </button>
                </div>

                {/* 3 Unified Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 mb-10 items-stretch pt-2">

                    {/* CARD 1: Monthly Pass ($19) */}
                    <div className="lg:col-span-4 rounded-3xl bg-white border border-black/10 p-7 flex flex-col justify-between shadow-xs hover:shadow-soft transition-all relative">
                        <div>
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-950 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                                    Midterm Sprint
                                </span>
                                <span className="text-xs font-semibold text-ink-muted">
                                    Month-to-Month
                                </span>
                            </div>

                            <h3 className="font-display font-bold text-2xl text-ink">
                                Monthly Pass
                            </h3>
                            <p className="text-xs text-ink-muted mt-1 mb-4">
                                Built for finals week, a tough midterm streak, or passing an intensive summer session.
                            </p>

                            <div className="mb-5 pb-5 border-b border-black/5">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-display text-4xl sm:text-5xl font-black text-ink tracking-tight">
                                        $19
                                    </span>
                                    <span className="text-xs text-ink-muted font-semibold">
                                        / month
                                    </span>
                                </div>
                                <div className="text-[11px] text-ink-muted mt-1 font-medium">
                                    Cancel anytime in 1 click · No commitments
                                </div>
                            </div>

                            <button
                                onClick={() => handleOpenPlan('monthly')}
                                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold rounded-2xl bg-ink hover:bg-black text-white transition-all flex items-center justify-center gap-2 mb-6 shadow-xs cursor-pointer"
                            >
                                <FaChrome className="w-3.5 h-3.5 text-cream shrink-0" aria-hidden="true" />
                                <span>Get Monthly Pass ($19)</span>
                            </button>

                            <div className="space-y-3">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-2">
                                    What&apos;s Included:
                                </div>
                                {[
                                    { label: "Unlimited Extension Solves & Snips", hint: "Zero daily caps on Canvas, Blackboard & 20+ LMSs" },
                                    { label: "Claude + ChatGPT + DeepSeek Study Hub", hint: "Full multi-model AI workspace for homework & PDFs" },
                                    { label: "Focus Shield & 3 Modes (Alt+1/2/3)", hint: "window.blur cloaked + Alt+S Hybrid Vision OCR" },
                                    { label: "1-Click Instant Cancellation", hint: "Cancel anytime with zero hidden renewal traps" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs">
                                        <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                                            <Check className="w-2.5 h-2.5" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-ink">{item.label}</div>
                                            <div className="text-[10px] text-ink-muted">{item.hint}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-black/5 text-[11px] text-ink-muted text-center font-medium">
                            14-day refund guarantee · Instant license
                        </div>
                    </div>

                    {/* CARD 2: Academic Year ($99) - Elevated Hero */}
                    <div className="lg:col-span-4 rounded-3xl bg-[#091526] text-white border-2 border-emerald-400 p-7 flex flex-col justify-between shadow-lift relative md:-translate-y-2">
                        
                        {/* Hero Badge */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-emerald-400 text-black text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 whitespace-nowrap">
                            <Star className="w-3 h-3 fill-black text-black" aria-hidden="true" />
                            <span>STUDENT CHOICE · SAVE 56%</span>
                        </div>

                        <div>
                            <div className="flex items-center justify-between gap-2 mb-4 mt-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/40">
                                    Complete School Year
                                </span>
                                <span className="text-xs font-mono font-bold text-emerald-400">
                                    $8.25 / mo
                                </span>
                            </div>

                            <h3 className="font-display font-bold text-2xl text-white">
                                Academic Year Pass
                            </h3>
                            <p className="text-xs text-[#a3b8d6] mt-1 mb-4">
                                Complete peace of mind through Fall, Spring, Summer &amp; Finals—plus 12 months of our Study AI Hub.
                            </p>

                            <div className="mb-5 pb-5 border-b border-white/10">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                                        $99
                                    </span>
                                    <span className="text-xs text-[#9bb0cf] font-semibold">
                                        / year
                                    </span>
                                </div>
                                <div className="text-[11px] text-emerald-300 mt-1 font-semibold flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                                    <span>Only $0.27/day · Replaces $65/mo of AI tools</span>
                                </div>
                            </div>

                            <button
                                onClick={() => handleOpenPlan('yearly')}
                                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black transition-all flex items-center justify-center gap-2 mb-6 shadow-md cursor-pointer"
                            >
                                <FaChrome className="w-3.5 h-3.5 text-black shrink-0" aria-hidden="true" />
                                <span>Get Academic Year Pass ($99)</span>
                            </button>

                            <div className="space-y-3">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
                                    Everything in Monthly, Plus:
                                </div>
                                {[
                                    { label: "12 Months Unlimited Extension + Study Hub", hint: "Claude 3.7, ChatGPT & DeepSeek-R1 all year" },
                                    { label: "Priority 0.3s Vision Edge Compute", hint: "Dedicated capacity during finals week rush" },
                                    { label: "Multi-Device License (2 Machines)", hint: "Use simultaneously on laptop & dorm PC" },
                                    { label: "Syllabus & PDF Upload Memory", hint: "Attach full course packs in the Study AI Hub" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                                            <Check className="w-2.5 h-2.5" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">{item.label}</div>
                                            <div className="text-[10px] text-[#9bb0cf]">{item.hint}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#9bb0cf] text-center font-medium">
                            14-day 100% money-back guarantee · Save $129
                        </div>
                    </div>

                    {/* CARD 3: Lifetime Degree Pass ($199) */}
                    <div className="lg:col-span-4 rounded-3xl bg-[#0c1017] text-white border-2 border-amber-400/50 p-7 flex flex-col justify-between shadow-[0_4px_35px_rgba(245,158,11,0.12)] relative">
                        
                        {/* Lifetime Banner */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-black text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                            <GraduationCap className="w-3 h-3 text-black" aria-hidden="true" />
                            <span>PAY ONCE · COVERS YOUR ENTIRE DEGREE</span>
                        </div>

                        <div>
                            <div className="flex items-center justify-between gap-2 mb-4 mt-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                                    Permanent Vault
                                </span>
                                <span className="text-[11px] font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                                    Pay Once
                                </span>
                            </div>

                            <h3 className="font-display font-bold text-2xl text-white">
                                Lifetime Degree Pass
                            </h3>
                            <p className="text-xs text-[#bac5d6] mt-1 mb-4">
                                One single payment protects your entire higher education from freshman year through graduate school.
                            </p>

                            <div className="mb-5 pb-5 border-b border-white/10">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                                        $199
                                    </span>
                                    <span className="text-xs text-[#cfd6e3] font-semibold">
                                        one-time
                                    </span>
                                </div>
                                <div className="text-[11px] text-amber-300 mt-1 font-semibold flex items-center gap-1">
                                    <Award className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                                    <span>Zero renewals forever · Save $2,080+</span>
                                </div>
                            </div>

                            <button
                                onClick={() => handleOpenPlan('lifetime')}
                                className="w-full py-3.5 px-4 text-xs sm:text-sm font-black rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-105 text-black transition-all flex items-center justify-center gap-2 mb-6 shadow-md cursor-pointer"
                            >
                                <FaChrome className="w-3.5 h-3.5 text-black shrink-0" aria-hidden="true" />
                                <span>Get Lifetime VIP Pass ($199)</span>
                            </button>

                            <div className="space-y-3">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                                    VIP Permanent Privileges:
                                </div>
                                {[
                                    { label: "Permanent Extension + Study AI Hub", hint: "Unlimited Claude, ChatGPT & DeepSeek-R1 forever" },
                                    { label: "3-Device Multi-Seat License", hint: "Sync across laptop, dorm desktop & library Mac" },
                                    { label: "All Future Frontier Models Included Free", hint: "Automatic upgrades to Claude 4, GPT-5 & DeepSeek-R2" },
                                    { label: "All Future Canvas & LMS Patches Included", hint: "Zero extra charges for new LMS stealth updates" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/95">
                                        <div className="w-4 h-4 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                                            <Check className="w-2.5 h-2.5" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">{item.label}</div>
                                            <div className="text-[10px] text-[#bac5d6]">{item.hint}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-amber-200/80 text-center font-medium">
                            14-day 100% money-back guarantee · Save $2,080+
                        </div>
                    </div>

                </div>

                {/* Interactive Study & Homework AI Workspace Showcase */}
                <div className="mb-10">
                    <StudyAiHubShowcase />
                </div>

                {/* Collapsible Full Feature Comparison Matrix */}
                <div className="mb-10">
                    <button
                        onClick={() => setShowComparison(!showComparison)}
                        className="w-full py-3.5 px-6 rounded-2xl bg-white border border-black/10 shadow-xs hover:shadow-soft transition-all flex items-center justify-between text-xs sm:text-sm font-bold text-ink cursor-pointer"
                    >
                        <span className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                            <span>{showComparison ? "Hide Detailed Feature Comparison" : "Compare All Plan Features & Study AI Hub Limits Side-by-Side"}</span>
                        </span>
                        {showComparison ? (
                            <ChevronUp className="w-4 h-4 text-ink-muted" aria-hidden="true" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-ink-muted" aria-hidden="true" />
                        )}
                    </button>

                    <div className={showComparison ? "mt-3 rounded-3xl bg-white border border-black/10 p-5 sm:p-7 shadow-xs overflow-x-auto block" : "hidden"}>
                        <table className="w-full text-xs text-left">
                            <thead>
                                <tr className="border-b border-black/10 text-ink-muted">
                                    <th className="py-3 px-2 font-bold uppercase text-[10px]">Feature</th>
                                    <th className="py-3 px-2 font-bold uppercase text-[10px] text-center">Free Tier ($0)</th>
                                    <th className="py-3 px-2 font-bold uppercase text-[10px] text-center">Monthly ($19)</th>
                                    <th className="py-3 px-2 font-bold uppercase text-[10px] text-center text-emerald-800 bg-emerald-50/50 rounded-t-xl">Academic ($99)</th>
                                    <th className="py-3 px-2 font-bold uppercase text-[10px] text-center">Lifetime ($199)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5">
                                <tr>
                                    <td className="py-3 px-2 font-semibold text-ink">AI Quiz Question Solves</td>
                                    <td className="py-3 px-2 text-center text-ink font-semibold">5 / day (Daily Reset)</td>
                                    <td className="py-3 px-2 text-center text-emerald-800 font-bold">Unlimited</td>
                                    <td className="py-3 px-2 text-center text-emerald-800 font-bold bg-emerald-50/50">Unlimited</td>
                                    <td className="py-3 px-2 text-center text-emerald-800 font-bold">Unlimited (Forever)</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-2 font-semibold text-ink">Study &amp; Homework AI Hub (Claude + ChatGPT + DeepSeek)</td>
                                    <td className="py-3 px-2 text-center text-ink-muted">Preview Only</td>
                                    <td className="py-3 px-2 text-center text-emerald-800 font-bold">✓ Full Access</td>
                                    <td className="py-3 px-2 text-center text-emerald-800 font-bold bg-emerald-50/50">✓ Full Access + PDFs</td>
                                    <td className="py-3 px-2 text-center text-emerald-800 font-bold">✓ Permanent VIP Access</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-2 font-semibold text-ink">Focus Shield &amp; 3 Modes (Alt+1 / 2 / 3)</td>
                                    <td className="py-3 px-2 text-center text-emerald-700">✓ Included</td>
                                    <td className="py-3 px-2 text-center text-emerald-700">✓ Included</td>
                                    <td className="py-3 px-2 text-center text-emerald-700 bg-emerald-50/50">✓ Included</td>
                                    <td className="py-3 px-2 text-center text-emerald-700">✓ Included</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-2 font-semibold text-ink">Snap-It Vision OCR &amp; Math (Alt+S)</td>
                                    <td className="py-3 px-2 text-center text-ink-muted">Included in 5/day</td>
                                    <td className="py-3 px-2 text-center text-emerald-700">✓ Unlimited</td>
                                    <td className="py-3 px-2 text-center text-emerald-700 bg-emerald-50/50">✓ Unlimited</td>
                                    <td className="py-3 px-2 text-center text-emerald-700">✓ Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-2 font-semibold text-ink">Peak Finals Week Speed</td>
                                    <td className="py-3 px-2 text-center text-ink-muted">Standard</td>
                                    <td className="py-3 px-2 text-center text-ink">Standard (0.5s)</td>
                                    <td className="py-3 px-2 text-center font-bold text-emerald-800 bg-emerald-50/50">Priority Edge (0.3s)</td>
                                    <td className="py-3 px-2 text-center font-bold text-amber-800">VIP Dedicated Queue</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-2 font-semibold text-ink">Devices Supported</td>
                                    <td className="py-3 px-2 text-center text-ink">1 Device</td>
                                    <td className="py-3 px-2 text-center text-ink">1 Device</td>
                                    <td className="py-3 px-2 text-center text-ink bg-emerald-50/50 font-bold">2 Devices</td>
                                    <td className="py-3 px-2 text-center text-ink font-bold">3 Devices</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-2 font-semibold text-ink">Refund Policy</td>
                                    <td className="py-3 px-2 text-center text-ink-muted">Free forever (5/day)</td>
                                    <td className="py-3 px-2 text-center text-ink font-medium">14-Day 100% Guarantee</td>
                                    <td className="py-3 px-2 text-center text-ink font-medium bg-emerald-50/50">14-Day 100% Guarantee</td>
                                    <td className="py-3 px-2 text-center text-ink font-medium">14-Day 100% Guarantee</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Trust, Security & Discretion Assurances */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pb-8 border-b border-black/5 text-xs">
                    <div className="p-4 rounded-2xl bg-white border border-black/10 flex items-start gap-3 shadow-xs">
                        <CreditCard className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                            <span className="font-bold text-ink block">Discreet Student Billing</span>
                            <span className="text-ink-muted leading-relaxed block mt-0.5">
                                Appears innocuously on card statements as <strong className="text-ink">EG Education Tools</strong> with 256-bit SSL encryption.
                            </span>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-black/10 flex items-start gap-3 shadow-xs">
                        <Shield className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                            <span className="font-bold text-ink block">14-Day Honor Guarantee</span>
                            <span className="text-ink-muted leading-relaxed block mt-0.5">
                                If ExamGhost doesn&apos;t save your grade on your first quiz attempt, get an instant 100% refund.
                            </span>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-black/10 flex items-start gap-3 shadow-xs">
                        <Zap className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                            <span className="font-bold text-ink block">Instant Extension + Study Hub Key</span>
                            <span className="text-ink-muted leading-relaxed block mt-0.5">
                                One license key unlocks both the Chrome/Edge/Brave extension and the web Study AI Workspace.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Discord Community Support Banner */}
                <div className="rounded-3xl bg-white border border-black/10 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] shrink-0">
                            <FaDiscord className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-sm text-ink flex items-center gap-2">
                                <span>Join the ExamGhost Student Study Guild</span>
                                <span className="text-[10px] bg-emerald-100 text-emerald-950 font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                                    2,400+ Students
                                </span>
                            </h3>
                            <p className="text-xs text-ink-muted mt-0.5">
                                Live Canvas update alerts, syllabus guides, test-taking strategies &amp; free beta keys.
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://discord.gg/aCcsyKYJq4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-soft px-5 py-2 text-xs font-semibold shrink-0 inline-flex items-center gap-1.5 text-[#5865F2] hover:text-[#4752c4]"
                    >
                        <span>Join Discord (Free)</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                </div>

            </div>

            {/* Clean Activation Key Modal */}
            {modalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="pricing-modal-title"
                >
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 border border-black/10 shadow-2xl relative">
                        
                        {/* Close button */}
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-ink transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" aria-hidden="true" />
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-[#c4d0f8] flex items-center justify-center text-ink shrink-0 shadow-xs">
                                <Ghost className="w-5 h-5" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 id="pricing-modal-title" className="font-display font-bold text-base text-ink">
                                    {activeModal.title}
                                </h3>
                                <p className="text-xs text-ink-muted">
                                    {activeModal.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* License key display */}
                        <div className="bg-[#faf8f4] rounded-2xl p-4 border border-black/5 mb-4">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-1">
                                Your Activation License Key
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <code className="font-mono text-xs sm:text-sm font-bold text-ink truncate select-all">
                                    {activeModal.key}
                                </code>
                                <button
                                    onClick={() => handleCopy(activeModal.key)}
                                    className="p-2 rounded-xl hover:bg-black/5 text-ink-secondary transition-colors shrink-0"
                                    title="Copy key"
                                    aria-label="Copy activation key"
                                >
                                    {copiedKey ? (
                                        <Check className="w-4 h-4 text-emerald-800" aria-hidden="true" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-ink" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                            {copiedKey && (
                                <p className="text-[10px] text-emerald-800 font-semibold mt-1">
                                    Key copied to clipboard!
                                </p>
                            )}
                        </div>

                        <p className="text-xs text-ink-muted mb-5 leading-relaxed">
                            {activeModal.desc}
                        </p>

                        {/* Install / Download button */}
                        <div className="space-y-2">
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm bg-[#5865F2] hover:bg-[#4752c4] text-white transition-all shadow-md flex items-center justify-center gap-2"
                            >
                                <FaDiscord className="w-4 h-4 text-white" aria-hidden="true" />
                                <span>Get Extension on Discord Server</span>
                            </a>
                            <a
                                href="https://chromewebstore.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-4 rounded-full font-bold text-xs bg-black/5 hover:bg-black/10 text-ink transition-all flex items-center justify-center gap-2"
                            >
                                <FaChrome className="w-4 h-4 text-[#0077b6]" aria-hidden="true" />
                                <span>Add to Chrome / Edge / Brave</span>
                            </a>
                        </div>

                        <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-ink-muted">
                            <span className="flex items-center gap-1">
                                <Lock className="w-3 h-3 text-emerald-800" aria-hidden="true" />
                                <span>Instant automatic setup</span>
                            </span>
                            <span>14-day refund guarantee</span>
                        </div>

                    </div>
                </div>
            )}

        </section>
    );
}
