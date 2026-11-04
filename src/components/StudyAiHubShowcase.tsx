'use client';

import React, { useState } from 'react';
import {
    Sparkles, BookOpen, FileText, CheckCircle2,
    Cpu, Code2, FlaskConical, Sigma, Copy, Check,
    Layers, ArrowRight, ShieldCheck
} from 'lucide-react';

interface ModelScenario {
    id: 'claude' | 'chatgpt' | 'deepseek';
    modelName: string;
    modelBadge: string;
    specialty: string;
    accentBg: string;
    accentText: string;
    accentBorder: string;
    attachedFile: string;
    studentPrompt: string;
    thinkingStep: string;
    responseHeadline: string;
    responseSteps: string[];
    finalAnswer: string;
    savedVs: string;
}

const MODEL_SCENARIOS: ModelScenario[] = [
    {
        id: 'claude',
        modelName: 'Claude 3.7 Sonnet',
        modelBadge: 'Writing, Lab Reports & Nuance',
        specialty: 'Best for essays, humanities, lab discussion sections & clean code',
        accentBg: 'bg-[#f5e6d8]',
        accentText: 'text-[#7c3a16]',
        accentBorder: 'border-[#d97757]/40',
        attachedFile: 'BIO_204_Lab_Rubric.pdf · 14 pages indexed',
        studentPrompt: 'Explain why competitive enzyme inhibitors raise Km without changing Vmax for my Biochemistry lab discussion, and give me the Lineweaver-Burk plot takeaway.',
        thinkingStep: 'Cross-referencing BIO_204_Lab_Rubric.pdf (Section 3: Michaelis-Menten Kinetics)...',
        responseHeadline: 'Competitive Inhibition & Lineweaver-Burk Analysis',
        responseSteps: [
            '1. Active-Site Competition: A competitive inhibitor (I) structurally mimics the substrate (S) and binds reversibly to the free enzyme active site (E + I ⇌ EI), increasing apparent Km by α = 1 + [I]/Ki.',
            '2. Why Vmax Stays Constant: Raising substrate concentration [S] → ∞ outcompetes the inhibitor completely, allowing the enzyme to still reach its theoretical maximum velocity (Vmax).',
            '3. Lineweaver-Burk Plot Signature: Because y-intercept = 1/Vmax and x-intercept = −1/(α·Km), competitive inhibition lines intersect directly on the y-axis while the slope (α·Km/Vmax) increases.'
        ],
        finalAnswer: 'Summary for Lab Report: Competitive inhibitors increase apparent Km (lower apparent affinity) while leaving Vmax unchanged; on a double-reciprocal plot, lines share the same y-intercept (1/Vmax).',
        savedVs: 'Included free with Paid Plans (Replaces $20/mo Claude Pro)'
    },
    {
        id: 'deepseek',
        modelName: 'DeepSeek-R1 Reasoner',
        modelBadge: 'Step-by-Step Math & STEM Proofs',
        specialty: 'Best for Calculus, Physics, Organic Chemistry & algorithmic proofs',
        accentBg: 'bg-[#dbeafe]',
        accentText: 'text-[#1e3a8a]',
        accentBorder: 'border-blue-400/40',
        attachedFile: 'MATH_202_Problem_Set_6.pdf · Problem #14',
        studentPrompt: 'Solve the improper integral ∫₀^∞ x · e^(−3x) dx step-by-step and verify convergence so I can show full work on my homework.',
        thinkingStep: 'Chain-of-thought verification (DeepSeek-R1): Applying integration by parts u = x, dv = e^(−3x) dx...',
        responseHeadline: 'Step-by-Step Integration by Parts & Limit Proof',
        responseSteps: [
            'Step 1 (Setup): Let u = x ⇒ du = dx, and dv = e^(−3x) dx ⇒ v = −(1/3)e^(−3x).',
            'Step 2 (Antiderivative): ∫ x·e^(−3x) dx = −(x/3)e^(−3x) + (1/3)∫ e^(−3x) dx = −(x/3)e^(−3x) − (1/9)e^(−3x).',
            'Step 3 (Evaluate Improper Limit b → ∞): lim(b→∞) [−(b/3 + 1/9)e^(−3b)] − [0 − 1/9 · e⁰] = 0 − (−1/9) = 1/9 (by L’Hôpital’s Rule since e^(3b) grows faster than b).'
        ],
        finalAnswer: 'Exact Convergent Value: 1/9 (≈ 0.1111)',
        savedVs: 'Included free with Paid Plans (Uncapped R1 STEM Reasoning)'
    },
    {
        id: 'chatgpt',
        modelName: 'ChatGPT (GPT-4o / o3-mini)',
        modelBadge: 'Fast Coursework, CS & Flashcards',
        specialty: 'Best for computer science, quick homework checks & study guides',
        accentBg: 'bg-[#d1fae5]',
        accentText: 'text-[#065f46]',
        accentBorder: 'border-emerald-400/40',
        attachedFile: 'CS_301_Graphs_Lecture.pdf · Dijkstra & Bell-Ford',
        studentPrompt: 'Why does Dijkstra’s algorithm fail on graphs with negative-weight edges, and when should I use Bellman-Ford instead?',
        thinkingStep: 'Synthesizing CS_301_Graphs_Lecture.pdf + counterexample trace...',
        responseHeadline: 'Greedy Invariant Breakdown & Counterexample',
        responseSteps: [
            '1. Broken Greedy Assumption: Dijkstra assumes that once a vertex u with minimum tentative distance d[u] is popped from the priority queue, its shortest path is final because adding positive edges can only increase path cost.',
            '2. Negative-Edge Counterexample: In triangle A → B (cost 4), A → C (cost 5), C → B (cost −3), Dijkstra locks B at cost 4 first and misses the shorter A → C → B path of cost 5 + (−3) = 2.',
            '3. When to Use Bellman-Ford: Use Bellman-Ford O(V·E) whenever negative edge weights exist or when you need to detect negative-weight cycles.'
        ],
        finalAnswer: 'Key Takeaway: Dijkstra requires w(u, v) ≥ 0 for all edges; use Bellman-Ford for negative weights.',
        savedVs: 'Included free with Paid Plans (Replaces $20/mo ChatGPT Plus)'
    }
];

export default function StudyAiHubShowcase({ compact = false }: { compact?: boolean }) {
    const [activeModel, setActiveModel] = useState<'claude' | 'deepseek' | 'chatgpt'>('claude');
    const [copied, setCopied] = useState(false);

    const current = MODEL_SCENARIOS.find(m => m.id === activeModel) || MODEL_SCENARIOS[0];

    const handleCopy = () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(current.finalAnswer).catch(() => {});
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    };

    return (
        <div className={`rounded-[32px] bg-[#0c1017] text-white border border-white/10 shadow-lift overflow-hidden ${compact ? 'p-5 sm:p-7' : 'p-6 sm:p-10'}`}>
            {/* Top Value Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider mb-2.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>2-in-1 Paid Member Bonus · Study &amp; Homework AI Workspace</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Every Paid Plan Includes Our Specialized <span className="text-emerald-400">Claude + ChatGPT + DeepSeek</span> Study Hub.
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mt-1.5 max-w-2xl leading-relaxed">
                        Why pay $20/mo for ChatGPT Plus + $20/mo for Claude Pro + $25/mo for a quiz solver? Paid ExamGhost members get both the <strong>Unlimited Stealth Browser Extension</strong> and full access to our <strong>Multi-Model Study &amp; Homework AI Wrapper</strong>—built specifically for syllabus PDFs, step-by-step STEM proofs, and essays.
                    </p>
                </div>

                {/* Subscription Savings Pill */}
                <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-4 shrink-0 text-xs space-y-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                        Replaces $65/mo in Separate Subscriptions
                    </div>
                    <div className="flex items-center justify-between gap-4 text-white/70">
                        <span>ChatGPT Plus ($20) + Claude Pro ($20)</span>
                        <span className="line-through text-rose-400 font-mono">$40/mo</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-white/70">
                        <span>Typical Quiz Extension ($25)</span>
                        <span className="line-through text-rose-400 font-mono">$25/mo</span>
                    </div>
                    <div className="pt-1.5 border-t border-white/10 flex items-center justify-between gap-4 font-bold text-emerald-300">
                        <span>ExamGhost All-in-One Pass:</span>
                        <span className="font-mono text-sm">From $8.25/mo</span>
                    </div>
                </div>
            </div>

            {/* Interactive Model Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/[0.06] border border-white/10">
                    {MODEL_SCENARIOS.map((m) => {
                        const isSelected = m.id === activeModel;
                        return (
                            <button
                                key={m.id}
                                type="button"
                                onClick={() => setActiveModel(m.id)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                                    isSelected
                                        ? 'bg-emerald-400 text-black shadow-sm'
                                        : 'text-white/75 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <Cpu className="w-3.5 h-3.5" />
                                <span>{m.modelName}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 text-xs text-white/70">
                    <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-mono text-[11px] bg-white/[0.06] px-2.5 py-1 rounded-lg border border-white/10">
                        📎 {current.attachedFile}
                    </span>
                </div>
            </div>

            {/* Simulated Study & Homework AI Workspace Window */}
            <div className="rounded-2xl bg-[#131924] border border-white/10 p-5 sm:p-6 space-y-4">
                {/* Student Prompt Bubble */}
                <div className="flex items-start justify-between gap-3 bg-white/[0.05] border border-white/10 rounded-2xl p-4">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                            Student Homework Prompt · {current.specialty}
                        </span>
                        <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                            &ldquo;{current.studentPrompt}&rdquo;
                        </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/90 text-[10px] font-mono font-bold shrink-0">
                        {current.modelBadge}
                    </span>
                </div>

                {/* AI Thinking & Step-by-Step Derivation */}
                <div className="rounded-2xl bg-[#0a0e14] border border-emerald-400/25 p-4 sm:p-5 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/10">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{current.thinkingStep}</span>
                        </div>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-[11px] font-semibold text-white transition-colors cursor-pointer"
                        >
                            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>{copied ? 'Copied Summary' : 'Copy Solution'}</span>
                        </button>
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-white">
                        {current.responseHeadline}
                    </div>

                    <div className="space-y-2 text-xs text-white/80 leading-relaxed">
                        {current.responseSteps.map((stepText, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                {stepText}
                            </div>
                        ))}
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 font-bold text-emerald-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{current.finalAnswer}</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-200/80">
                            {current.savedVs}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
