"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, RotateCcw, Lock, MousePointerClick, Loader2 } from "lucide-react";
import Ghost from "./Ghost";

type Style = "autofill" | "highlight" | "explain";
type Phase = "idle" | "scanning" | "solved";

const STYLES: { id: Style; label: string; hint: string }[] = [
    { id: "autofill", label: "Auto-fill", hint: "Selects the right option for you." },
    { id: "highlight", label: "Highlight", hint: "Marks the right option with a ✓ and leaves the click to you." },
    { id: "explain", label: "Explain", hint: "Fills it in and opens a side panel with the reasoning." },
];

const OPTIONS = [
    "Quantity demanded will increase.",
    "Quantity demanded will decrease.",
    "Quantity demanded will stay the same.",
    "Demand will double.",
];
const CORRECT = 1;

export default function TryDemo() {
    const [style, setStyle] = useState<Style>("explain");
    const [phase, setPhase] = useState<Phase>("idle");
    const timer = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => () => clearTimeout(timer.current), []);

    const solve = () => {
        if (phase !== "idle") return;
        setPhase("scanning");
        timer.current = setTimeout(() => setPhase("solved"), 750);
    };
    const reset = () => {
        clearTimeout(timer.current);
        setPhase("idle");
    };

    const solved = phase === "solved";
    const picked = solved && style !== "highlight" ? CORRECT : null;
    const showPanel = solved && style === "explain";
    const current = STYLES.find((s) => s.id === style)!;

    return (
        <section id="try" className="dark-surface bg-dark-grid relative overflow-hidden py-16 sm:py-24 bg-surface-dark text-white scroll-mt-20">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(59,91,219,0.18),transparent_75%)]"
            />
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="font-display text-[32px] sm:text-[46px] font-bold tracking-[-0.03em] leading-[1.06] mb-4">
                        Try it without installing
                    </h2>
                    <p className="text-white/65 max-w-lg mx-auto">
                        Double-click the question and watch ExamGhost answer it. Pick how you want the answer delivered.
                    </p>
                </div>

                {/* Answer style switch (the extension's real delivery options) */}
                <div className="flex justify-center mb-3">
                    <div role="radiogroup" aria-label="Answer style" className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-white/[0.06] p-1 ring-1 ring-white/[0.12] backdrop-blur">
                        {STYLES.map((s) => (
                            <button
                                key={s.id}
                                type="button"
                                role="radio"
                                aria-checked={style === s.id}
                                onClick={() => setStyle(s.id)}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                                    style === s.id ? "bg-paper text-ink shadow-xs" : "text-white/75 hover:text-white hover:bg-white/[0.08]"
                                }`}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>
                <p className="text-center text-sm text-white/60 mb-7 min-h-[1.25rem]" aria-live="polite">{current.hint}</p>

                <div className="rounded-2xl bg-surface-dark-elevated ring-1 ring-white/10 overflow-hidden surface-dark-card">
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-surface-dark/60">
                        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-white/[0.08] px-2.5 py-1 text-[11px] font-mono text-white/80 shrink-0">
                            Canvas Quiz
                        </span>
                        <span className="flex-1 min-w-0 flex items-center gap-2 rounded-lg bg-white/[0.07] border border-white/[0.08] px-3 py-1.5 text-[11px] sm:text-xs text-white/70 font-mono">
                            <Lock className="w-3 h-3 shrink-0" aria-hidden="true" />
                            <span className="truncate">canvas.university.edu/courses/2/quizzes/7/take</span>
                        </span>
                        {solved && (
                            <button
                                type="button"
                                onClick={reset}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] px-2.5 py-1 text-xs font-medium text-white/85 hover:text-white shrink-0 transition-colors"
                            >
                                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> Replay
                            </button>
                        )}
                    </div>

                    <div className="bg-paper text-ink flex">
                        <nav aria-label="Course menu" className="hidden md:flex flex-col gap-1 w-36 shrink-0 border-r border-ink/[0.08] bg-surface-subtle px-3 py-6 text-xs font-medium text-ink-muted">
                            {["Home", "Modules", "Quizzes", "Grades"].map((item) => (
                                <span
                                    key={item}
                                    className={`rounded-lg px-2.5 py-1.5 ${
                                        item === "Quizzes" ? "bg-paper text-ink font-semibold border border-ink/[0.09] shadow-xs" : ""
                                    }`}
                                >
                                    {item}
                                </span>
                            ))}
                        </nav>
                        <div className="flex-1 min-w-0 px-4 sm:px-8 py-8 sm:py-10">
                            {/* Quiz + (optional) explain panel share one row, so nothing overlaps */}
                            <div className="mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6">
                                <div className="w-full max-w-xl">
                                    <h3 className="font-display text-lg sm:text-2xl font-semibold text-ink">Unit 3 Practice — Supply and Demand</h3>
                                    <p className="text-xs sm:text-sm text-ink-muted mb-5">Started: Nov 19 at 7:09pm</p>

                                    <div
                                        role="button"
                                        tabIndex={phase === "idle" ? 0 : -1}
                                        onDoubleClick={solve}
                                        onKeyDown={(e) => {
                                            if ((e.key === "Enter" || e.key === " ") && phase === "idle") {
                                                e.preventDefault();
                                                solve();
                                            }
                                        }}
                                        className={`relative rounded-xl border overflow-hidden select-none transition-shadow ${
                                            phase === "idle"
                                                ? "cursor-pointer border-ink/15 hover:border-cobalt-bright/70 hover:shadow-[0_0_0_3px_rgba(67,97,238,0.14)]"
                                                : "border-ink/15"
                                        }`}
                                        aria-label="Quiz question. Double-click or press Enter to solve."
                                    >
                                        {phase === "scanning" && (
                                            <span className="absolute left-0 right-0 h-0.5 bg-cobalt-bright shadow-[0_0_12px_#4361EE] animate-laser-scan z-10" aria-hidden="true" />
                                        )}
                                        <div className="flex items-center justify-between bg-surface-subtle border-b border-ink/10 px-4 py-2.5 text-sm font-semibold">
                                            <span>Question 1</span>
                                            {phase === "idle" && (
                                                <span className="ml-auto mr-3 hidden sm:inline-flex items-center gap-1 rounded-md bg-cobalt-soft px-2.5 py-0.5 text-[11px] font-medium text-cobalt">
                                                    <MousePointerClick className="w-3 h-3" aria-hidden="true" /> Double-click to solve
                                                </span>
                                            )}
                                            <span className="font-mono text-xs font-normal text-ink-muted tabular-nums">1 pts</span>
                                        </div>
                                        <div className="px-4 py-4">
                                            <p className="text-sm sm:text-base leading-relaxed mb-4">
                                                If the price of a good rises and nothing else changes, which of the following is most likely to happen?
                                            </p>
                                            <ul>
                                                {OPTIONS.map((o, i) => {
                                                    const marked = solved && style === "highlight" && i === CORRECT;
                                                    return (
                                                        <li
                                                            key={o}
                                                            className={`flex items-center gap-3 py-2.5 px-2 -mx-2 rounded-md border-t border-ink/10 first:border-t-0 text-[13px] sm:text-sm transition-colors duration-300 ${
                                                                marked ? "bg-emeraldBrand-soft" : ""
                                                            }`}
                                                        >
                                                            <span className={`w-4 h-4 rounded-full border-2 shrink-0 grid place-items-center ${picked === i ? "border-[#0770a3]" : "border-ink/35"}`}>
                                                                {picked === i && <span className="w-2 h-2 rounded-full bg-[#0770a3]" />}
                                                            </span>
                                                            <span className="flex-1">{o}</span>
                                                            {marked && (
                                                                <span className="animate-pop-in inline-flex items-center gap-1 text-emeraldBrand text-xs font-semibold">
                                                                    <Check className="w-4 h-4" aria-hidden="true" /> answer
                                                                </span>
                                                            )}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Action row: a clear, always-visible way to try it (works on touch too) */}
                                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 min-h-[44px]">
                                        {phase === "idle" && (
                                            <div className="flex flex-wrap items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={solve}
                                                    className="inline-flex items-center gap-2 rounded-full bg-surface-dark text-white pl-2 pr-4 py-2 text-sm font-medium hover:bg-ink-secondary transition-colors"
                                                >
                                                    <Ghost size={22} />
                                                    Solve it for me
                                                </button>
                                                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-ink-muted">
                                                    <MousePointerClick className="w-3.5 h-3.5" aria-hidden="true" /> or double-click the question
                                                </span>
                                            </div>
                                        )}
                                        {phase === "scanning" && (
                                            <span className="inline-flex items-center gap-2 text-sm text-ink-muted" role="status">
                                                <Loader2 className="w-4 h-4 animate-spin text-cobalt-bright" aria-hidden="true" /> Reading the question…
                                            </span>
                                        )}
                                        {solved && (
                                            <div className="animate-pop-in flex flex-wrap items-center gap-2.5" role="status">
                                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emeraldBrand">
                                                    <Check className="w-4 h-4" aria-hidden="true" /> Answer applied · {current.label}
                                                </span>
                                                <span className="text-xs text-ink-muted">— try switching modes above</span>
                                                <button
                                                    type="button"
                                                    onClick={reset}
                                                    className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-surface-subtle hover:bg-paper px-2.5 py-1 text-xs font-medium text-ink transition-colors"
                                                >
                                                    <RotateCcw className="w-3 h-3" aria-hidden="true" /> Replay
                                                </button>
                                            </div>
                                        )}
                                        <span className="rounded-md bg-[#0770a3] text-white text-sm px-5 py-2.5 ml-auto">Next ›</span>
                                    </div>
                                </div>

                                {showPanel && (
                                    <aside className="dark-surface animate-pop-in w-full lg:w-[300px] shrink-0 rounded-xl bg-surface-dark-elevated text-white p-4 surface-dark-card ring-1 ring-white/10" aria-label="ExamGhost explanation">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Ghost size={18} />
                                            <span className="text-xs font-semibold">ExamGhost</span>
                                            <span className="ml-auto text-[10px] font-mono font-semibold bg-emeraldBrand/20 text-[#6EE7B7] rounded-md px-2 py-0.5">
                                                Solved
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-white/55 mb-1">Answer</p>
                                        <p className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold mb-3">Quantity demanded will decrease.</p>
                                        <p className="text-[12px] leading-relaxed text-white/75">
                                            A higher price makes the good less attractive, so buyers choose less of it. This inverse link between price and quantity is the law of demand.
                                        </p>
                                    </aside>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
