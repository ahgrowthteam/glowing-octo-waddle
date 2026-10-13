'use client';

import React, { useState } from 'react';
import { 
    Check, Sparkles, Shield, Lock, Zap, Download, 
    X, Copy, CheckCircle2, ArrowRight, Ghost, Star,
    GraduationCap, Ticket, Award
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';

export default function Pricing() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState<'free' | 'monthly' | 'yearly' | 'lifetime'>('lifetime');
    const [copiedKey, setCopiedKey] = useState(false);
    const [installStep, setInstallStep] = useState<'idle' | 'installing' | 'complete'>('idle');

    const handleOpenPlan = (id: 'free' | 'monthly' | 'yearly' | 'lifetime') => {
        setSelectedPlanId(id);
        setInstallStep('idle');
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

    const modalData = {
        free: {
            title: "50 Free Question Solves",
            subtitle: "Zero credit card required · Test on your live quiz now",
            key: "GHOST-FREE-50Q-ACTIVATE",
            desc: "Paste this key into ExamGhost to unlock 50 free AI question solves immediately."
        },
        monthly: {
            title: "Monthly Pass ($19/mo)",
            subtitle: "Price of a meal / DoorDash · Cancel anytime in 1 click",
            key: "GHOST-PRO-MONTHLY-UNLIMITED",
            desc: "Instant activation key for unlimited quiz solving across all your classes."
        },
        yearly: {
            title: "Yearly Academic Pass ($99/yr)",
            subtitle: "Only $8.25/mo · Complete 365-Day GPA Insurance (Save 56%)",
            key: "GHOST-ACADEMIC-YEARLY-PASS",
            desc: "Full academic year stealth license with priority 0.3s AI vision compute."
        },
        lifetime: {
            title: "10-Year Lifetime VIP Pass ($199)",
            subtitle: "Pay once · Covers High School, 4-Yr Undergrad & 2-Yr Master's · Save $2,081+",
            key: "GHOST-VIP-10YR-PERMANENT",
            desc: "Permanent license key valid across high school, undergrad, master's (MSc), and postgrad certifications."
        }
    };

    const activeModal = modalData[selectedPlanId];

    return (
        <section id="pricing" className="py-20 md:py-28 bg-cream text-ink border-b border-black/5 relative overflow-hidden">
            {/* Ambient Background Gradient Circles */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-200/25 via-emerald-200/20 to-blue-200/25 blur-3xl pointer-events-none rounded-full" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>HONEST PRICING · GPA INSURANCE</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
                        Invest in your GPA.<br />
                        Not recurring subscriptions.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-ink-muted leading-relaxed font-normal max-w-xl mx-auto">
                        One failed 3-credit college course costs <strong className="text-ink font-semibold">$1,500 – $4,500</strong> in tuition to retake. ExamGhost is the ultimate GPA insurance designed around how students actually live and budget.
                    </p>
                </div>

                {/* 50-Questions Free Test Drive Voucher Banner */}
                <div className="rounded-3xl bg-white border border-black/10 p-5 sm:p-6 mb-10 shadow-xs hover:shadow-soft transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center justify-center text-emerald-800 shrink-0 shadow-xs">
                            <span className="font-display font-black text-base leading-none">50</span>
                            <span className="text-[9px] font-extrabold uppercase tracking-tight">Free</span>
                        </div>
                        <div>
                            <div className="text-sm sm:text-base font-bold text-ink flex items-center gap-2">
                                <span>Test Drive ExamGhost on Your Next Live Quiz</span>
                                <span className="text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                                    No Credit Card
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-ink-muted mt-0.5">
                                Try Focus Shield blur masking and Snap-It OCR on live Canvas or Blackboard questions before paying a single cent.
                            </p>
                        </div>
                    </div>
                    <button 
                        onClick={() => handleOpenPlan('free')}
                        className="btn-soft px-5 py-2.5 text-xs sm:text-sm font-bold shrink-0 rounded-full hover:bg-black/5 inline-flex items-center gap-1.5 whitespace-nowrap bg-cream border border-black/10 text-ink shadow-xs"
                    >
                        <span>Start Free 50 Solves</span>
                        <ArrowRight className="w-3.5 h-3.5 text-ink" />
                    </button>
                </div>

                {/* 3 Paid Cards Grid - Refined Mid-Point Balance (Dark Contrast + De-Spammed Editorial Polish) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 mb-14 items-stretch pt-4">

                    {/* ---------------- CARD 1: MONTHLY PASS ($19) - 4 COLS ---------------- */}
                    <div className="lg:col-span-4 rounded-3xl bg-white border border-black/10 p-7 flex flex-col justify-between shadow-xs hover:shadow-soft transition-all duration-200 relative group">
                        <div>
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div>
                                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900 bg-[#fff4d6] px-2.5 py-0.5 rounded-full border border-amber-200/80">
                                        Midterm Sprint
                                    </span>
                                    <h3 className="font-display font-extrabold text-2xl text-ink mt-2">
                                        Monthly Pass
                                    </h3>
                                </div>
                                <span className="text-[11px] font-bold text-ink-muted">
                                    1-Click Cancel
                                </span>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-display text-4xl sm:text-5xl font-black text-ink tracking-tight">
                                        $19
                                    </span>
                                    <span className="text-xs text-ink-muted font-semibold">
                                        / month
                                    </span>
                                </div>
                                <div className="text-[11px] text-ink-muted mt-1 font-medium">
                                    Flexible month-to-month · cancel anytime
                                </div>
                            </div>

                            {/* The DoorDash / Big Mac Reality Check Box */}
                            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-xs text-ink-secondary mb-6">
                                <div className="flex items-center gap-2 font-bold text-amber-950 mb-1">
                                    <span>🍔</span>
                                    <span>The DoorDash / Meal Reality Check:</span>
                                </div>
                                <p className="text-[11px] text-ink-muted leading-relaxed">
                                    A single takeout dinner or two lattes cost <strong>$19</strong> and disappear in 45 minutes. For the same price, you get <strong>30 days of 0-flag midterm immunity</strong> and save your GPA in that one brutal weed-out class.
                                </p>
                            </div>

                            <p className="text-xs text-ink-secondary mb-6 leading-relaxed">
                                Built for finals week crunch, a tough midterm streak, or passing an intensive 4-week summer term.
                            </p>

                            <button
                                onClick={() => handleOpenPlan('monthly')}
                                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold rounded-2xl bg-ink hover:bg-black text-white transition-all flex items-center justify-center gap-2 mb-6 shadow-sm group-hover:scale-[1.01]"
                            >
                                <FaChrome className="w-3.5 h-3.5 text-cream shrink-0" aria-hidden="true" />
                                <span>Get Monthly Pass ($19)</span>
                            </button>

                            <div className="space-y-3 pt-5 border-t border-black/5">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-2">
                                    Included in Monthly:
                                </div>
                                {[
                                    { label: "Unlimited AI question solves", hint: "Zero throttles on timed tests" },
                                    { label: "All 24 stealth tools & Focus Shield", hint: "window.blur neutralized" },
                                    { label: "Snap-It Vision OCR & LaTeX solver", hint: "Decodes formulas & graphs" },
                                    { label: "Cancel anytime in 1 click", hint: "Zero sneaky lock-in traps" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink-secondary">
                                        <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                                            <Check className="w-2.5 h-2.5" />
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
                            14-day refund guarantee · Instant key
                        </div>
                    </div>

                    {/* ---------------- CARD 2: ACADEMIC YEAR ($99) - 4 COLS (DEEP OCEANIC SLATE) ---------------- */}
                    <div className="lg:col-span-4 rounded-3xl bg-[#091526] text-white border-2 border-emerald-500/50 p-7 flex flex-col justify-between shadow-lift hover:shadow-2xl transition-all duration-200 relative group">
                        
                        {/* Top Highlight Badge */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-emerald-400 text-black text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 whitespace-nowrap">
                            <Star className="w-3 h-3 fill-black text-black" />
                            <span>BEST VALUE · SAVE 56%</span>
                        </div>

                        <div>
                            <div className="flex items-center justify-between gap-2 mb-4 mt-1">
                                <div>
                                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                                        Dean&apos;s List Shield
                                    </span>
                                    <h3 className="font-display font-extrabold text-2xl text-white mt-2">
                                        Academic Year
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-mono font-bold text-emerald-400">
                                        $8.25/mo
                                    </span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                                        $99
                                    </span>
                                    <span className="text-xs text-[#9bb0cf] font-semibold">
                                        / year
                                    </span>
                                </div>
                                <div className="text-[11px] text-emerald-400 mt-1 font-semibold flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3 text-emerald-400" />
                                    <span>Only $0.27/day for Fall, Spring &amp; Finals</span>
                                </div>
                            </div>

                            {/* The Concert Ticket & Party Dress Anchor Box */}
                            <div className="p-3.5 rounded-2xl bg-[#112239] border border-emerald-400/30 text-xs text-[#dbe7f7] mb-6 space-y-2">
                                <div className="flex items-center justify-between font-bold text-emerald-300">
                                    <span className="flex items-center gap-1.5">
                                        <Ticket className="w-3.5 h-3.5 text-emerald-300" />
                                        <span>The Concert &amp; Outfit Reality Check:</span>
                                    </span>
                                    <span className="text-[10px] font-black uppercase bg-emerald-400 text-black px-2 py-0.5 rounded-full">
                                        Save $129
                                    </span>
                                </div>
                                <p className="text-[11px] text-[#b4c9e8] leading-relaxed">
                                    A concert ticket (festival pass) or party outfit costs <strong>$100+</strong> and is gone by Sunday morning. Meanwhile, retaking just <strong>one failed 3-credit course costs $1,500 to $4,500 in lost tuition</strong>.
                                </p>
                                <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px]">
                                    <span className="font-semibold text-emerald-400">365-Day Complete GPA Insurance</span>
                                    <span className="font-mono text-white font-bold">$0.27 / day</span>
                                </div>
                            </div>

                            <p className="text-xs text-[#a3b8d6] mb-6 leading-relaxed">
                                Complete peace of mind through Fall, Spring, Summer &amp; Finals without unexpected monthly charges.
                            </p>

                            <button
                                onClick={() => handleOpenPlan('yearly')}
                                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold rounded-2xl bg-white hover:bg-[#f4f1ea] text-ink transition-all flex items-center justify-center gap-2 mb-6 shadow-md group-hover:scale-[1.01]"
                            >
                                <FaChrome className="w-3.5 h-3.5 text-[#0077b6] shrink-0" aria-hidden="true" />
                                <span>Get Academic Year Pass ($99)</span>
                            </button>

                            <div className="space-y-3 pt-5 border-t border-white/10">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
                                    Everything in Monthly, Plus:
                                </div>
                                {[
                                    { label: "Full 12 Months of Uncapped Solves", hint: "Covers Fall, Spring & Summer terms" },
                                    { label: "Priority 0.3s Vision AI Compute", hint: "Dedicated edge capacity during finals week" },
                                    { label: "Save $129 vs Monthly Billing", hint: "Pay once with no unexpected charges" },
                                    { label: "Priority 24/7 Discord Ticket Desk", hint: "Direct engineer response in <10 minutes" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                                            <Check className="w-2.5 h-2.5" />
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

                    {/* ---------------- CARD 3: LIFETIME VIP PASS ($199) - 4 COLS (DEEP OBSIDIAN + WARM GOLD) ---------------- */}
                    <div className="lg:col-span-4 rounded-3xl bg-[#0c1017] text-white border-2 border-amber-400/50 p-7 flex flex-col justify-between shadow-[0_4px_35px_rgba(245,158,11,0.14)] hover:shadow-[0_4px_50px_rgba(245,158,11,0.22)] transition-all duration-200 relative group md:-translate-y-1">
                        
                        {/* Top Flagship Banner */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-black text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                            <Sparkles className="w-3 h-3 text-black fill-black" />
                            <span>PAY ONCE · COVERS YOUR ENTIRE DEGREE</span>
                        </div>

                        <div>
                            <div className="flex items-center justify-between gap-2 mb-4 mt-1">
                                <div>
                                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                                        Permanent Vault
                                    </span>
                                    <h3 className="font-display font-extrabold text-2xl text-white mt-2">
                                        Lifetime VIP Pass
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <span className="text-[11px] font-extrabold uppercase tracking-wide text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                                        Pay Once
                                    </span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                                        $199
                                    </span>
                                    <span className="text-xs text-[#cfd6e3] font-semibold">
                                        one-time
                                    </span>
                                </div>
                                <div className="text-[11px] text-amber-300 mt-1 font-semibold flex items-center gap-1">
                                    <Award className="w-3.5 h-3.5 text-amber-400" />
                                    <span>High School ➔ Undergrad ➔ Master&apos;s (MSc) &amp; Postgrad</span>
                                </div>
                            </div>

                            {/* De-Spammed Clean 10-Year Degree Reality Check Box */}
                            <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-400/[0.08] border border-amber-400/30 text-xs text-amber-100 mb-6 space-y-3">
                                
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5 font-bold text-amber-300">
                                        <GraduationCap className="w-4 h-4 text-amber-400" />
                                        <span>The 10-Year Degree Reality Check:</span>
                                    </span>
                                    <span className="text-[10px] font-black uppercase bg-gradient-to-r from-amber-400 to-[#ffd23f] text-black px-2 py-0.5 rounded-full">
                                        Save $2,081+
                                    </span>
                                </div>

                                <p className="text-[11px] text-[#e2ddf2] leading-relaxed">
                                    10 years of monthly subscriptions ($19/mo) costs <strong>$2,280</strong>. A pair of sneakers or AirPods costs $200 and breaks in a year. For <strong>$199 once</strong>, your entire higher education through your Master&apos;s graduation is permanently protected. Never pay another subscription in your 20s.
                                </p>

                                {/* Clean 3 Mini-Stat Cards */}
                                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-amber-400/20">
                                    <div className="p-2 rounded-xl bg-black/40 border border-white/10 text-center">
                                        <div className="text-[9px] uppercase font-bold text-amber-200/80">Pay Once</div>
                                        <div className="font-display font-black text-sm text-white mt-0.5">$199</div>
                                        <div className="text-[9px] text-[#8fa0ba]">zero renewals</div>
                                    </div>
                                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-center">
                                        <div className="text-[9px] uppercase font-bold text-emerald-400">Total Savings</div>
                                        <div className="font-display font-black text-sm text-emerald-300 mt-0.5">Save $2,081+</div>
                                        <div className="text-[9px] text-emerald-400/80">vs $19/mo</div>
                                    </div>
                                    <div className="p-2 rounded-xl bg-black/40 border border-white/10 text-center">
                                        <div className="text-[9px] uppercase font-bold text-amber-200/80">Effective Rate</div>
                                        <div className="font-display font-black text-sm text-amber-300 mt-0.5">$1.65/mo</div>
                                        <div className="text-[9px] text-amber-200/80">$0.05 / day</div>
                                    </div>
                                </div>

                                {/* Subtle Education Journey Stepper */}
                                <div className="flex items-center justify-between text-[9px] text-amber-200/75 font-mono pt-1 border-t border-amber-400/15 whitespace-nowrap">
                                    <span>High School</span>
                                    <span className="text-amber-400/60">→</span>
                                    <span>Undergrad</span>
                                    <span className="text-amber-400/60">→</span>
                                    <span>Master&apos;s</span>
                                    <span className="text-amber-400/60">→</span>
                                    <span>Postgrad</span>
                                </div>
                            </div>

                            <p className="text-xs text-[#bac5d6] mb-6 leading-relaxed">
                                Permanent stealth license valid through high school, 4 years of college, 2-year graduate Master&apos;s (MSc/MBA), and postgrad certifications.
                            </p>

                            <button
                                onClick={() => handleOpenPlan('lifetime')}
                                className="w-full py-3.5 px-4 text-xs sm:text-sm font-black rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-105 text-black transition-all flex items-center justify-center gap-2 mb-6 shadow-md group-hover:scale-[1.01]"
                            >
                                <FaChrome className="w-3.5 h-3.5 text-black shrink-0" aria-hidden="true" />
                                <span>Get Lifetime VIP Pass ($199)</span>
                            </button>

                            <div className="space-y-3 pt-5 border-t border-white/10">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                                    VIP Permanent Privileges:
                                </div>
                                {[
                                    { label: "Permanent Access — Zero Renewals Ever", hint: "Valid through High School, Undergrad & Master's" },
                                    { label: "3-Device Multi-Seat License", hint: "Sync across laptop, dorm desktop & library Mac" },
                                    { label: "VIP Discord Role & Core Dev Access", hint: "Direct hotline to extension reverse-engineers" },
                                    { label: "All Future LMS Adapters Included Free", hint: "Never pay for platform updates or AI upgrades" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/95">
                                        <div className="w-4 h-4 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                                            <Check className="w-2.5 h-2.5" />
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
                            14-day 100% money-back guarantee · Save $2,081+
                        </div>
                    </div>

                </div>

                {/* Trust & Guarantee Strip */}
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-ink-muted mb-10 pb-8 border-b border-black/5">
                    <span className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        <span>14-Day Money-Back Guarantee</span>
                    </span>
                    <span className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-emerald-600" />
                        <span>Instant Chrome Web Store Activation</span>
                    </span>
                    <span className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-emerald-600" />
                        <span>100% Canvas &amp; Blackboard Stealth (Closed Shadow DOM)</span>
                    </span>
                </div>

                {/* Discord Free Access Banner */}
                <div className="rounded-3xl bg-white border border-black/10 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] shrink-0">
                            <FaDiscord className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-sm text-ink flex items-center gap-2">
                                <span>Join our student study Discord</span>
                                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                                    Free Access
                                </span>
                            </h4>
                            <p className="text-xs text-ink-muted">
                                Real-time Canvas update alerts, test-taking strategies &amp; free beta keys for active students.
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
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>

            </div>

            {/* Clean Activation Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 border border-black/10 shadow-2xl relative">
                        
                        {/* Close button */}
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-ink transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-[#c4d0f8] flex items-center justify-center text-ink shrink-0 shadow-xs">
                                <Ghost className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base text-ink">
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
                                >
                                    {copiedKey ? (
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                            {copiedKey && (
                                <p className="text-[10px] text-emerald-600 font-semibold mt-1">
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
                                <Lock className="w-3 h-3 text-emerald-600" />
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
