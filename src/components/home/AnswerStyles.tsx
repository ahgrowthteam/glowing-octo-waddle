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
        <section id="answer-styles" className="py-16 sm:py-24 bg-paper border-y border-ink/[0.08] scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <h2 className="font-display text-[32px] sm:text-[46px] font-bold tracking-[-0.03em] text-ink leading-[1.06] mb-4">
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
                                type="button"
                                role="tab"
                                aria-selected={on}
                                aria-label={`${s.title} ${s.key}`}
                                onClick={() => setActive(s.id)}
                                className={`shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                                    on ? "bg-surface-dark text-white border-surface-dark" : "bg-paper border-ink/15 text-ink-secondary"
                                }`}
                            >
                                <Icon className="w-4 h-4" aria-hidden="true" />
                                {s.short}
                            </button>
                        );
                    })}
                </div>

                <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-6 lg:gap-8 items-start">
                    {/* Desktop: unified tabbed selector rail */}
                    <div className="hidden lg:block">
                        <div
                            role="tablist"
                            aria-label="Answer modes"
                            className="rounded-2xl bg-paper border border-ink/[0.09] divide-y divide-ink/[0.08] overflow-hidden shadow-xs"
                        >
                            {STYLES.map((s) => {
                                const on = s.id === active;
                                const Icon = s.icon;
                                return (
                                    <button
                                        key={s.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={on}
                                        onClick={() => setActive(s.id)}
                                        className={`w-full text-left flex items-start gap-3.5 p-5 border-l-[3px] transition-colors ${
                                            on
                                                ? "border-l-cobalt bg-cobalt-soft/45"
                                                : "border-l-transparent bg-paper hover:bg-surface-subtle/60"
                                        }`}
                                    >
                                        <span
                                            className={`grid place-items-center w-10 h-10 rounded-xl shrink-0 mt-0.5 transition-colors ${
                                                on ? "bg-cobalt text-white" : "bg-surface-subtle text-ink-secondary border border-ink/[0.07]"
                                            }`}
                                        >
                                            <Icon className="w-4 h-4" aria-hidden="true" />
                                        </span>
                                        <span className="block min-w-0">
                                            <span className="flex items-center gap-2 font-display text-[17px] font-bold text-ink">
                                                {s.title}
                                                <kbd className="kbd-key">{s.key}</kbd>
                                            </span>
                                            <span className="block text-[14.5px] text-ink-muted leading-snug mt-1">{s.body}</span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="mt-4 space-y-1.5 px-1">
                            <p className="flex items-center gap-2 text-sm text-ink-muted">
                                <Check className="w-4 h-4 text-emeraldBrand shrink-0" aria-hidden="true" />
                                Master on/off switch in the extension popup.
                            </p>
                            <p className="text-xs text-ink-muted pl-6">
                                Switch between Quick, Highlight, Explain and Screenshot in the extension popup or with keyboard shortcuts.
                            </p>
                        </div>
                    </div>

                    {/* Preview: studio extension viewport */}
                    <div className="lg:sticky lg:top-24">
                        <div className="rounded-2xl bg-surface-subtle border border-ink/[0.09] shadow-card overflow-hidden">
                            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-paper border-b border-ink/[0.08]">
                                <span className="inline-flex items-center gap-1.5 rounded-md bg-emeraldBrand-soft border border-emeraldBrand/20 px-2 py-0.5 text-[11px] font-semibold text-emeraldBrand shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emeraldBrand" aria-hidden="true" />
                                    Active
                                </span>
                                <span className="flex-1 min-w-0 flex items-center gap-2 rounded-lg bg-surface-subtle border border-ink/[0.07] px-3 py-1 text-[11px] text-ink-muted font-mono">
                                    <Lock className="w-3 h-3 shrink-0" aria-hidden="true" />
                                    <span className="truncate">canvas.university.edu/courses/2/quizzes/7/take</span>
                                </span>
                                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-ink shrink-0">
                                    {current.short}
                                    <kbd className="kbd-key">{current.key}</kbd>
                                </span>
                            </div>
                            <div className="aspect-video bg-surface-subtle bg-warm-grid">
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
                        <div className="lg:hidden mt-4 space-y-1.5">
                            <p className="flex items-center gap-2 text-sm text-ink-muted">
                                <Check className="w-4 h-4 text-emeraldBrand shrink-0" aria-hidden="true" />
                                Master on/off switch in the extension popup.
                            </p>
                            <p className="text-xs text-ink-muted pl-6">
                                Switch between Quick, Highlight, Explain and Screenshot in the extension popup or with keyboard shortcuts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
