import React from "react";
import Reveal from "./Reveal";
import MediaSlot from "./MediaSlot";
import MockQuiz from "./MockQuiz";
import { MEDIA } from "./config";

// Every item below maps to something the extension actually does.
// Each card has one video slot: set it in MEDIA.features (config.ts).
const DEMOS = [
    {
        id: "doubleClick",
        title: "Double-click on your course site",
        body: "On Canvas, Blackboard, Moodle and other quiz pages, double-click a question and the answer appears right next to it. Multiple choice, multi-select, dropdowns and short answers all work.",
        variant: "solve" as const,
    },
    {
        id: "snap",
        title: "Snap anything, anywhere",
        body: "On any other page, press Alt+S and drag a box around the question. If you can see it, ExamGhost can read it: diagrams, graphs, screenshots and selected text.",
        variant: "snap" as const,
    },
    {
        id: "scan",
        title: "Scan the whole page",
        body: "Click Scan page & answer and ExamGhost scrolls through the page, reads every question and fills the answers in batches.",
        variant: "scan" as const,
    },
    {
        id: "equations",
        title: "Reads equations properly",
        body: "Math written as equation images or LaTeX is rebuilt into text before it's solved, so formulas aren't lost on the way to the answer.",
        variant: "snap" as const,
    },
    {
        id: "subjects",
        title: "Tuned for 13 subjects",
        body: "Math, physics, chemistry, biology, computer science, economics, history, accounting, geography, literature, psychology, English and logic. Harder subjects get more reasoning time.",
        variant: "scan" as const,
    },
    {
        id: "shortcuts",
        title: "Shortcuts and a power switch",
        body: "Alt+1, Alt+2 and Alt+3 change the answer style, Alt+S starts a snip, and one master switch turns the extension off when you're not studying.",
        variant: "solve" as const,
    },
] as const;

export default function FeatureDemos() {
    return (
        <section id="features" className="dark-surface py-16 sm:py-24 bg-[#18181b] text-white scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <p className="text-sm font-semibold text-white/50 mb-3">Features</p>
                    <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
                        Everything it does,<br />in action
                    </h2>
                </div>

                <Reveal className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {DEMOS.map((d) => (
                        <article key={d.id} className="rounded-3xl bg-white/[0.03] border border-white/[0.08] p-5 sm:p-7 flex flex-col hover:border-white/[0.15] transition-colors">
                            <h3 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight leading-snug mb-2.5">{d.title}</h3>
                            <p className="text-[15px] sm:text-base text-white/65 leading-relaxed mb-6">{d.body}</p>
                            <div className="mt-auto aspect-video rounded-2xl overflow-hidden bg-[#0c0c0e] ring-1 ring-white/10 shadow-lift">
                                <MediaSlot
                                    slot={`features.${d.id}`}
                                    src={MEDIA.features[d.id]}
                                    label={`${d.title} demo`}
                                    fallback={<MockQuiz variant={d.variant} />}
                                />
                            </div>
                        </article>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
