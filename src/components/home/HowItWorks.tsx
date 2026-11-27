import React from "react";
import { Plus, MousePointer2, X, Check } from "lucide-react";
import Reveal from "./Reveal";
import Ghost from "./Ghost";

function Bar({ w = "w-full", tone = "bg-black/[0.07]" }: { w?: string; tone?: string }) {
    return <span className={`block h-2 rounded-full ${tone} ${w}`} />;
}

function InstallGraphic() {
    return (
        <div className="w-full rounded-xl bg-white border border-black/10 shadow-card overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/5 bg-[#faf8f4]">
                <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 h-3.5 flex-1 rounded-full bg-black/[0.06]" />
                <Ghost size={16} />
            </div>
            <div className="p-4 grid grid-cols-[1fr_auto] gap-4 items-center">
                <div className="space-y-2">
                    <Bar w="w-2/3" tone="bg-black/10" />
                    <Bar />
                    <Bar w="w-4/5" />
                    <span className="relative mt-2 inline-flex items-center gap-1.5 bg-ink text-white text-[11px] font-semibold rounded-full px-3 py-1.5">
                        <Plus className="w-3 h-3" aria-hidden="true" /> Add to Chrome
                        <MousePointer2 className="absolute -right-2 -bottom-3 w-4 h-4 text-ink fill-white" aria-hidden="true" />
                    </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#e9eefc] grid place-items-center">
                    <Ghost size={44} className="rounded-xl" />
                </div>
            </div>
        </div>
    );
}

function SnapGraphic() {
    return (
        <div className="relative w-full rounded-xl bg-white border border-black/10 shadow-card p-4">
            <span className="absolute right-3 top-3 text-[10px] font-semibold bg-ink text-white rounded-full px-2.5 py-1">Alt+S</span>
            <div className="space-y-2 mb-3 w-1/2">
                <Bar w="w-2/3" tone="bg-black/10" />
                <Bar />
            </div>
            <div className="relative rounded-md border-2 border-dashed border-[#4361ee] bg-[#4361ee]/[0.04] px-4 pt-4 pb-0 h-[88px] flex items-end gap-3">
                {[28, 52, 38, 70].map((h, i) => (
                    <span key={i} className="flex-1 rounded-t-sm" style={{ height: h, background: ["#c4d0f8", "#9fb2f3", "#b6c5f6", "#4361ee"][i] }} />
                ))}
                {["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"].map((p) => (
                    <span key={p} className={`absolute ${p} w-2 h-2 rounded-[2px] bg-white border-2 border-[#4361ee]`} />
                ))}
            </div>
        </div>
    );
}

function AnswerGraphic() {
    return (
        <div className="relative w-full h-[150px]">
            <div className="absolute left-0 top-2 w-[62%] rounded-xl bg-white border border-black/10 shadow-card p-3 space-y-2.5">
                <Bar w="w-2/3" tone="bg-black/10" />
                {[0, 1, 2].map((i) => (
                    <span key={i} className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full border-2 shrink-0 ${i === 1 ? "bg-emerald-500 border-emerald-500" : "border-black/20"}`} />
                        <Bar w={i === 1 ? "w-3/4" : "w-1/2"} tone={i === 1 ? "bg-emerald-200" : "bg-black/[0.07]"} />
                    </span>
                ))}
            </div>
            <div className="absolute right-0 top-0 w-[58%] rounded-xl bg-white border border-black/10 shadow-lift p-3">
                <div className="flex items-center gap-1.5 mb-2">
                    <Ghost size={16} />
                    <span className="text-[11px] font-semibold">ExamGhost</span>
                    <X className="w-3 h-3 ml-auto text-ink-muted" aria-hidden="true" />
                </div>
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-2">
                    <p className="text-[10px] font-semibold text-emerald-800">Answer</p>
                    <p className="flex items-center gap-1 text-[12px] font-semibold text-ink">
                        <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" /> Mitochondria
                    </p>
                </div>
            </div>
        </div>
    );
}

const STEPS = [
    { n: 1, title: "Add to Chrome", body: "Install the extension and sign in. It takes about 30 seconds.", graphic: <InstallGraphic /> },
    { n: 2, title: "Double-click or snap", body: "Double-click a question on your quiz page, or press Alt+S and drag a box around anything on screen.", graphic: <SnapGraphic /> },
    { n: 3, title: "Get your answer", body: "The answer shows up in under a second, right next to the question, with an explanation.", graphic: <AnswerGraphic /> },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 sm:py-24 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-14">
                    <p className="text-sm font-semibold text-ink-muted mb-3">Getting started</p>
                    <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.05]">
                        Three steps.<br />No new tabs.
                    </h2>
                </div>
                <Reveal>
                    <ol className="grid md:grid-cols-3 gap-5">
                        {STEPS.map((s) => (
                            <li key={s.n} className="bg-white rounded-3xl border border-black/[0.08] surface-card hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300 p-6 sm:p-7 flex flex-col">
                                <div className="h-[176px] rounded-2xl bg-[#f7f4ee] border border-black/[0.05] p-4 grid place-items-center mb-6">{s.graphic}</div>
                                <div className="inline-flex items-center gap-2 mb-3">
                                    <span className="inline-grid place-items-center w-7 h-7 rounded-full bg-ink text-white text-xs font-bold">{s.n}</span>
                                    <span className="text-xs font-semibold text-ink-muted">Step {s.n}</span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-ink mb-1.5">{s.title}</h3>
                                <p className="text-[15px] text-ink-muted leading-relaxed">{s.body}</p>
                            </li>
                        ))}
                    </ol>
                </Reveal>
            </div>
        </section>
    );
}
