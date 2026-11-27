"use client";

import React, { useState } from "react";
import { PenLine, MousePointer2, BookOpen, ScanLine, Check, Lock } from "lucide-react";
import MediaSlot from "./MediaSlot";
import MockQuiz from "./MockQuiz";
import { MEDIA } from "./config";

// Alt+1/2/3 are the extension's solver modes; Alt+S starts the screenshot (snip) tool.
const STYLES = [
    {
        id: "quick",
        short: "Quick",
        icon: PenLine,
        key: "Alt+1",
        title: "Quick mode",
        body: "Fills in the answer and copies it to your clipboard. No panel, no extra clicks.",
        media: MEDIA.modes.quick,
        variant: "solve" as const,
    },
    {
        id: "highlight",
        short: "Highlight",
        icon: MousePointer2,
        key: "Alt+2",
        title: "Highlight mode",
        body: "Marks the right option with a small ✓ and leaves the click to you.",
        media: MEDIA.modes.highlight,
        variant: "solve" as const,
    },
    {
        id: "explain",
        short: "Explain",
        icon: BookOpen,
        key: "Alt+3",
        title: "Explain mode",
        body: "Fills in the answer and slides in a side panel with the reasoning, so you learn why.",
        media: MEDIA.modes.explain,
        variant: "study" as const,
    },
    {
        id: "screenshot",
        short: "Screenshot",
        icon: ScanLine,
        key: "Alt+S",
        title: "Screenshot mode",
        body: "Drag a box around a graph, diagram or image-based question and get the solution with the working shown.",
        media: MEDIA.modes.screenshot,
        variant: "snap" as const,
    },
] as const;

type Id = (typeof STYLES)[number]["id"];

export default function AnswerStyles() {
    const [active, setActive] = useState<Id>("quick");
    const current = STYLES.find((s) => s.id === active)!;

    return (
        <section id="answer-styles" className="py-16 sm:py-24 bg-white/60 border-y border-black/5 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-4">
                        Pick how answers show up
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted">
                        Four modes, one shortcut each. Switch any time without leaving the page.
                    </p>
                </div>

                {/* Phones: compact chips directly above the preview */}
                <div role="tablist" aria-label="Answer modes" className="lg:hidden flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 mb-3">
                    {STYLES.map((s) => {
                        const on = s.id === active;
                        const Icon = s.icon;
                        return (
                            <button
                                key={s.id}
                                role="tab"
                                aria-selected={on}
                                aria-label={`${s.title} ${s.key}`}
                                onClick={() => setActive(s.id)}
                                className={`shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                                    on ? "bg-ink text-white border-ink" : "bg-white border-black/10 text-ink-secondary"
                                }`}
                            >
                                <Icon className="w-4 h-4" aria-hidden="true" />
                                {s.short}
                            </button>
                        );
                    })}
                </div>

                <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-6 lg:gap-8 items-start">
                    {/* Desktop: the full cards */}
                    <div role="tablist" aria-label="Answer modes" className="hidden lg:flex flex-col gap-3">
                        {STYLES.map((s) => {
                            const on = s.id === active;
                            const Icon = s.icon;
                            return (
                                <button
                                    key={s.id}
                                    role="tab"
                                    aria-selected={on}
                                    onClick={() => setActive(s.id)}
                                    className={`text-left flex items-center gap-4 rounded-2xl border-2 p-5 transition-all ${
                                        on ? "border-ink bg-white shadow-lift" : "border-black/[0.08] bg-white/75 hover:bg-white hover:border-black/20"
                                    }`}
                                >
                                    <span className={`grid place-items-center w-12 h-12 rounded-full shrink-0 transition-colors ${on ? "bg-ink text-white" : "bg-[#f2efe9] text-ink-secondary"}`}>
                                        <Icon className="w-5 h-5" aria-hidden="true" />
                                    </span>
                                    <span className="block">
                                        <span className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                                            {s.title}
                                            <kbd className="kbd-key">{s.key}</kbd>
                                        </span>
                                        <span className="block text-[15px] text-ink-muted leading-snug mt-1">{s.body}</span>
                                    </span>
                                </button>
                            );
                        })}
                        <p className="flex items-center gap-2 text-sm text-ink-muted px-1 mt-1">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                            Master on/off switch in the extension popup.
                        </p>
                        <p className="text-xs text-ink-muted px-1">
                            In the popup, Quick, Highlight and Explain appear as Invisible, Stealth and Explain.
                        </p>
                    </div>

                    {/* Preview: browser frame, no cropping, stays in view while you read the cards */}
                    <div className="lg:sticky lg:top-24">
                        <div className="rounded-2xl bg-white ring-1 ring-black/10 shadow-lift overflow-hidden">
                            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#f1f3f5] border-b border-black/5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                                <span className="ml-3 flex-1 min-w-0 flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] text-ink-muted font-mono">
                                    <Lock className="w-3 h-3 shrink-0" aria-hidden="true" />
                                    <span className="truncate">canvas.university.edu/courses/2/quizzes/7/take</span>
                                </span>
                            </div>
                            <div className="aspect-video bg-[#f7f8fa]">
                                <MediaSlot
                                    key={active}
                                    slot={`modes.${current.id}`}
                                    src={current.media}
                                    label={`${current.title} demo`}
                                    className="w-full h-full object-contain"
                                    fallback={<MockQuiz variant={current.variant} />}
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex items-start justify-between gap-4">
                            <div>
                                <p className="font-display font-bold text-ink flex items-center gap-2">
                                    {current.title}
                                    <kbd className="kbd-key">{current.key}</kbd>
                                </p>
                                <p className="lg:hidden text-sm text-ink-muted mt-1 leading-relaxed">{current.body}</p>
                            </div>
                        </div>
                        <div className="lg:hidden mt-4 space-y-1">
                            <p className="flex items-center gap-2 text-sm text-ink-muted">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                Master on/off switch in the extension popup.
                            </p>
                            <p className="text-xs text-ink-muted pl-6">In the popup, Quick, Highlight and Explain appear as Invisible, Stealth and Explain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
