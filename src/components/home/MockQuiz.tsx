import React from "react";

type Variant = "solve" | "snap" | "study" | "scan";

// Clean CSS stand-in for a screenshot/video. Replace with real recordings later.
export default function MockQuiz({ variant = "solve" }: { variant?: Variant }) {
    if (variant === "scan") {
        return (
            <div className="w-full h-full bg-paper text-ink p-4 sm:p-5 flex flex-col text-[11px] sm:text-xs">
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-ink/[0.08]">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                        <span className="font-display font-semibold text-ink">Scanning page…</span>
                    </div>
                    <span className="font-mono text-[11px] font-medium text-ink-muted tabular-nums">6 of 10</span>
                </div>
                <div className="h-1.5 rounded-full bg-surface-subtle overflow-hidden mb-3.5">
                    <span className="block h-full w-[60%] bg-emeraldBrand rounded-full" />
                </div>
                <ul className="space-y-1.5 flex-1">
                    {["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"].map((q, i) => (
                        <li key={q} className="flex items-center gap-2.5 rounded-lg border border-ink/[0.08] bg-surface-subtle/40 px-2.5 py-1.5">
                            <span className="w-4 h-4 rounded-full bg-emeraldBrand text-white grid place-items-center text-[9px] font-bold shrink-0">
                                ✓
                            </span>
                            <span className="font-mono text-[10px] font-semibold text-ink-secondary w-5 shrink-0">{q}</span>
                            <span className="h-1.5 rounded-full bg-ink/[0.10] flex-1" style={{ maxWidth: `${72 - i * 6}%` }} />
                            <span className="font-mono text-[10px] font-medium text-emeraldBrand shrink-0">filled</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    if (variant === "study") {
        return (
            <div className="w-full h-full bg-paper text-ink p-4 sm:p-5 flex flex-col gap-2.5 text-[11px] sm:text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-ink/[0.08]">
                    <span className="font-display font-semibold text-ink">Explain mode</span>
                    <span className="font-mono text-[10px] text-emeraldBrand bg-emeraldBrand-soft px-2 py-0.5 rounded-md font-medium">
                        Step-by-step
                    </span>
                </div>
                <div className="self-end max-w-[78%] rounded-xl rounded-br-sm bg-surface-dark text-white px-3.5 py-2 leading-snug shadow-xs">
                    Explain why the Fed sells bonds to fight inflation.
                </div>
                <div className="self-start max-w-[88%] rounded-xl rounded-bl-sm bg-surface-subtle border border-ink/[0.08] text-ink px-3.5 py-2.5 leading-relaxed">
                    Selling bonds pulls cash out of banks, so they lend less. Less lending means slower spending and lower inflation.
                </div>
                <div className="mt-auto flex items-center justify-between rounded-lg border border-ink/[0.10] bg-paper px-3 py-2 text-ink-muted">
                    <span>Ask a follow-up…</span>
                    <span className="font-mono text-[10px] text-ink-muted">Enter</span>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full bg-paper p-4 sm:p-5 flex flex-col text-[11px] sm:text-[13px] text-ink">
            <div className="flex items-center justify-between border-b border-ink/[0.09] pb-2 mb-3">
                <span className="font-display font-semibold text-ink">Question 4</span>
                <span className="font-mono text-[11px] text-ink-muted tabular-nums">1 pt</span>
            </div>
            <p className="mb-3 font-medium leading-snug text-ink">
                Which action would the Federal Reserve take to slow rising inflation?
            </p>
            <ul className="space-y-1.5">
                {["Buy government bonds", "Sell government bonds", "Lower the reserve requirement", "Cut the discount rate"].map((o, i) => {
                    const correct = i === 1;
                    return (
                        <li
                            key={o}
                            className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 sm:py-2 border transition-colors ${
                                correct
                                    ? "border-emeraldBrand/45 bg-emeraldBrand-soft/75 text-ink font-medium"
                                    : "border-ink/[0.08] bg-paper text-ink-secondary"
                            }`}
                        >
                            <span
                                className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 grid place-items-center ${
                                    correct ? "border-emeraldBrand bg-emeraldBrand" : "border-ink/25"
                                }`}
                            >
                                {correct && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                            <span className="truncate">{o}</span>
                            {correct && (
                                <span className="ml-auto font-mono text-[10px] sm:text-[11px] text-emeraldBrand font-semibold shrink-0">
                                    ✓ Answer
                                </span>
                            )}
                        </li>
                    );
                })}
            </ul>
            {variant === "snap" && (
                <div className="absolute inset-x-3.5 top-11 bottom-3.5 rounded-lg border-2 border-dashed border-cobalt-bright bg-cobalt-bright/[0.06] pointer-events-none">
                    <span className="absolute -top-2.5 left-3 bg-cobalt-bright text-white font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
                        Alt+S
                    </span>
                    <span className="absolute -left-1 -top-1 w-2 h-2 rounded-[2px] bg-paper border-2 border-cobalt-bright" />
                    <span className="absolute -right-1 -top-1 w-2 h-2 rounded-[2px] bg-paper border-2 border-cobalt-bright" />
                    <span className="absolute -left-1 -bottom-1 w-2 h-2 rounded-[2px] bg-paper border-2 border-cobalt-bright" />
                    <span className="absolute -right-1 -bottom-1 w-2 h-2 rounded-[2px] bg-paper border-2 border-cobalt-bright" />
                </div>
            )}
        </div>
    );
}
