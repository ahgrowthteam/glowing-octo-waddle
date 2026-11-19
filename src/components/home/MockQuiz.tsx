import React from "react";

type Variant = "solve" | "snap" | "study" | "scan";

// Clean CSS stand-in for a screenshot/video. Replace with real recordings later.
export default function MockQuiz({ variant = "solve" }: { variant?: Variant }) {
    if (variant === "scan") {
        return (
            <div className="w-full h-full bg-white p-4 sm:p-5 text-[11px] sm:text-xs">
                <div className="flex items-center justify-between mb-3 font-semibold">
                    <span>Scanning page…</span>
                    <span className="text-ink-muted font-normal">6 of 10</span>
                </div>
                <div className="h-1.5 rounded-full bg-black/10 overflow-hidden mb-4"><span className="block h-full w-[60%] bg-emerald-500 rounded-full" /></div>
                <ul className="space-y-2">
                    {["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"].map((q, i) => (
                        <li key={q} className="flex items-center gap-2.5 rounded-lg border border-black/10 px-3 py-1.5">
                            <span className="w-4 h-4 rounded-full bg-emerald-500 text-white grid place-items-center text-[9px]">✓</span>
                            <span className="h-2 rounded-full bg-black/[0.08] flex-1" style={{ maxWidth: `${70 - i * 6}%` }} />
                            <span className="text-ink-muted">filled</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    if (variant === "study") {
        return (
            <div className="w-full h-full bg-white p-4 sm:p-5 flex flex-col gap-2.5 text-[11px] sm:text-xs">
                <div className="self-end max-w-[75%] rounded-2xl rounded-br-sm bg-ink text-white px-3 py-2">
                    Explain why the Fed sells bonds to fight inflation.
                </div>
                <div className="self-start max-w-[85%] rounded-2xl rounded-bl-sm bg-[#f2ede4] text-ink px-3 py-2 leading-relaxed">
                    Selling bonds pulls cash out of banks, so they lend less. Less lending means slower spending and lower inflation.
                </div>
                <div className="mt-auto rounded-full border border-black/10 px-3 py-2 text-ink-muted">Ask a follow-up…</div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full bg-white p-4 sm:p-6 text-[11px] sm:text-sm text-ink">
            <div className="flex items-center justify-between border-b border-black/10 pb-2 mb-3 font-semibold">
                <span>Question 4</span>
                <span className="text-ink-muted font-normal">1 pt</span>
            </div>
            <p className="mb-3 leading-snug">
                Which action would the Federal Reserve take to slow rising inflation?
            </p>
            <ul className="space-y-2">
                {["Buy government bonds", "Sell government bonds", "Lower the reserve requirement", "Cut the discount rate"].map((o, i) => {
                    const correct = i === 1;
                    return (
                        <li
                            key={o}
                            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 border ${
                                correct ? "border-emerald-500/60 bg-emerald-50" : "border-black/10"
                            }`}
                        >
                            <span className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${correct ? "border-emerald-600 bg-emerald-600" : "border-black/30"}`} />
                            <span>{o}</span>
                            {correct && <span className="ml-auto text-emerald-700 font-semibold">✓ Answer</span>}
                        </li>
                    );
                })}
            </ul>
            {variant === "snap" && (
                <div className="absolute inset-x-5 top-12 bottom-6 rounded-lg border-2 border-dashed border-[#4361ee] bg-[#4361ee]/5 pointer-events-none">
                    <span className="absolute -top-2.5 left-3 bg-[#4361ee] text-white text-[10px] font-semibold px-2 py-0.5 rounded">Alt+S</span>
                </div>
            )}
        </div>
    );
}
