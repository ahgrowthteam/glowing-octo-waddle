import React from "react";
import { MousePointerClick, ScanLine, ScrollText, Sigma, GraduationCap, Keyboard } from "lucide-react";
import Reveal from "./Reveal";
import MediaSlot from "./MediaSlot";
import MockQuiz from "./MockQuiz";
import { MEDIA } from "./config";

// Every item below maps to something the extension actually does.
// Each card has one video slot: set it in MEDIA.features (config.ts).
const DEMOS = [
    {
        id: "doubleClick",
        tag: "Double-click",
        icon: MousePointerClick,
        accent: "bg-cobalt-bright",
        title: "Double-click on your course site",
        body: "On Canvas, Blackboard, Moodle and other quiz pages, double-click a question and the answer appears right next to it. Multiple choice, multi-select, dropdowns and short answers all work.",
        variant: "solve" as const,
    },
    {
        id: "snap",
        tag: "Alt+S",
        icon: ScanLine,
        accent: "bg-emeraldBrand",
        title: "Snap anything, anywhere",
        body: "On any other page, press Alt+S and drag a box around the question. If you can see it, ExamGhost can read it: diagrams, graphs, screenshots and selected text.",
        variant: "snap" as const,
    },
    {
        id: "scan",
        tag: "Batch scan",
        icon: ScrollText,
        accent: "bg-cobalt-bright",
        title: "Scan the whole page",
        body: "Click Scan page & answer and ExamGhost scrolls through the page, reads every question and fills the answers in batches.",
        variant: "scan" as const,
    },
    {
        id: "equations",
        tag: "LaTeX + OCR",
        icon: Sigma,
        accent: "bg-emeraldBrand",
        title: "Reads equations properly",
        body: "Math written as equation images or LaTeX is rebuilt into text before it's solved, so formulas aren't lost on the way to the answer.",
        variant: "snap" as const,
    },
    {
        id: "subjects",
        tag: "13 subjects",
        icon: GraduationCap,
        accent: "bg-cobalt-bright",
        title: "Tuned for 13 subjects",
        body: "Math, physics, chemistry, biology, computer science, economics, history, accounting, geography, literature, psychology, English and logic. Harder subjects get more reasoning time.",
        variant: "scan" as const,
    },
    {
        id: "shortcuts",
        tag: "Alt+1 / 2 / 3",
        icon: Keyboard,
        accent: "bg-emeraldBrand",
        title: "Shortcuts and a power switch",
        body: "Alt+1, Alt+2 and Alt+3 change the answer style, Alt+S starts a snip, and one master switch turns the extension off when you're not studying.",
        variant: "solve" as const,
    },
] as const;

export default function FeatureDemos() {
    const primaryDemos = DEMOS.slice(0, 2);
    const secondaryDemos = DEMOS.slice(2);

    return (
        <section id="features" className="dark-surface bg-dark-grid relative overflow-hidden py-16 sm:py-24 bg-surface-dark text-white scroll-mt-20">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(59,91,219,0.16),transparent_75%)]"
            />
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-14">
                    <div>
                        <p className="text-sm font-semibold text-white/55 mb-3">Features</p>
                        <h2 className="font-display text-[32px] sm:text-[46px] font-bold tracking-[-0.03em] leading-[1.06]">
                            Everything it does,<br />in action
                        </h2>
                    </div>
                    <span className="inline-flex items-center self-start sm:self-auto gap-2 rounded-md bg-white/[0.06] border border-white/10 px-3 py-1.5 font-mono text-xs text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-emeraldBrand" aria-hidden="true" />
                        {DEMOS.length} core capabilities
                    </span>
                </div>

                {/* Primary workbench pair */}
                <Reveal className="grid md:grid-cols-2 gap-6 mb-6">
                    {primaryDemos.map((d) => {
                        const Icon = d.icon;
                        return (
                            <article
                                key={d.id}
                                className="rounded-2xl bg-surface-dark-elevated border border-white/[0.12] surface-dark-card p-5 sm:p-7 flex flex-col hover:border-white/25 transition-colors"
                            >
                                <div className="flex items-center justify-between gap-3 mb-4">
                                    <span className="inline-flex items-center gap-2.5">
                                        <span className="w-9 h-9 rounded-lg bg-white/[0.07] border border-white/10 grid place-items-center text-white shrink-0">
                                            <Icon className="w-4 h-4" aria-hidden="true" />
                                        </span>
                                        <span className={`w-2 h-2 rounded-full ${d.accent}`} aria-hidden="true" />
                                    </span>
                                    <span className="kbd-key-dark shrink-0">{d.tag}</span>
                                </div>
                                <h3 className="font-display text-[22px] sm:text-2xl font-bold tracking-tight leading-snug mb-2">{d.title}</h3>
                                <p className="text-[15px] text-white/70 leading-relaxed mb-6">{d.body}</p>
                                <div className="mt-auto aspect-video rounded-xl overflow-hidden bg-surface-dark ring-1 ring-white/10">
                                    <MediaSlot
                                        slot={`features.${d.id}`}
                                        src={MEDIA.features[d.id]}
                                        label={`${d.title} demo`}
                                        fallback={<MockQuiz variant={d.variant} />}
                                    />
                                </div>
                            </article>
                        );
                    })}
                </Reveal>

                {/* Secondary 2x2 capability grid */}
                <Reveal className="grid md:grid-cols-2 gap-6">
                    {secondaryDemos.map((d) => {
                        const Icon = d.icon;
                        return (
                            <article
                                key={d.id}
                                className="rounded-2xl bg-surface-dark-elevated/80 border border-white/[0.09] p-5 sm:p-6 flex flex-col hover:border-white/20 transition-colors"
                            >
                                <div className="flex items-center justify-between gap-3 mb-3.5">
                                    <span className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.09] grid place-items-center text-white/90 shrink-0">
                                        <Icon className="w-4 h-4" aria-hidden="true" />
                                    </span>
                                    <span className="kbd-key-dark shrink-0">{d.tag}</span>
                                </div>
                                <h3 className="font-display text-xl font-bold tracking-tight leading-snug mb-2">{d.title}</h3>
                                <p className="text-[14.5px] sm:text-[15px] text-white/65 leading-relaxed mb-5">{d.body}</p>
                                <div className="mt-auto aspect-video rounded-xl overflow-hidden bg-surface-dark ring-1 ring-white/10">
                                    <MediaSlot
                                        slot={`features.${d.id}`}
                                        src={MEDIA.features[d.id]}
                                        label={`${d.title} demo`}
                                        fallback={<MockQuiz variant={d.variant} />}
                                    />
                                </div>
                            </article>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}
