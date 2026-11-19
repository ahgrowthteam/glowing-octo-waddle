import React from "react";
import Link from "next/link";
import {
    MousePointerClick, ListChecks, PenLine, MousePointer2, BookOpen, ScanLine,
    FileSearch, Sigma, GraduationCap, Power, Gift, Check,
    type LucideIcon,
} from "lucide-react";
import { FaChrome } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/home/FinalCta";
import Reveal from "@/components/home/Reveal";
import MediaSlot from "@/components/home/MediaSlot";
import MockQuiz from "@/components/home/MockQuiz";
import { INSTALL_URL, DEMO_URL, MEDIA } from "@/components/home/config";
import { FEATURE_FAQS } from "@/components/features/featuresData";

type Item = { icon: LucideIcon; title: string; body: string; key?: string; tint: string };

const GROUPS: { label: string; items: Item[] }[] = [
    {
        label: "Solve on the page",
        items: [
            { icon: MousePointerClick, title: "Double-click to solve", body: "Double-click a question and the answer appears next to it.", tint: "bg-[#c4d0f8]" },
            { icon: ListChecks, title: "Common question types", body: "Multiple choice, multi-select, dropdowns and short answers.", tint: "bg-[#cdeecb]" },
        ],
    },
    {
        label: "Choose how answers show up",
        items: [
            { icon: PenLine, title: "Quick mode", key: "Alt+1", body: "Fills in the answer and copies it to your clipboard.", tint: "bg-[#ffe9a0]" },
            { icon: MousePointer2, title: "Highlight mode", key: "Alt+2", body: "Marks the right option with a ✓. You do the click.", tint: "bg-[#e2d3fa]" },
            { icon: BookOpen, title: "Explain mode", key: "Alt+3", body: "Fills in the answer and opens a side panel with the reasoning.", tint: "bg-[#bfe3f6]" },
        ],
    },
    {
        label: "Beyond the quiz page",
        items: [
            { icon: ScanLine, title: "Screenshot snip", key: "Alt+S", body: "Drag a box around a graph, diagram or image-based question.", tint: "bg-[#cdeecb]" },
            { icon: FileSearch, title: "Scan the whole page", body: "Reads every question on the page and fills answers in batches.", tint: "bg-[#c4d0f8]" },
            { icon: Sigma, title: "Equations and LaTeX", body: "Math shown as equation images or LaTeX is read before it is solved.", tint: "bg-[#ffe9a0]" },
            { icon: GraduationCap, title: "13 subjects", body: "Math, physics, chemistry, biology, computer science, economics, history, accounting, geography, literature, psychology, English and logic.", tint: "bg-[#e2d3fa]" },
        ],
    },
    {
        label: "Stay in control",
        items: [
            { icon: Power, title: "Master on/off switch", body: "Turn the extension off from the popup when you are not studying.", tint: "bg-[#bfe3f6]" },
            { icon: Gift, title: "Free to start", body: "5 free solves a day, no card. Paid plans from $19/month, with a 14-day money-back guarantee.", tint: "bg-[#cdeecb]" },
        ],
    },
];

const DEMOS = [
    { id: "doubleClick", title: "Double-click on a quiz page", variant: "solve" as const },
    { id: "snap", title: "Snip a graph or diagram", variant: "snap" as const },
    { id: "scan", title: "Scan the whole page", variant: "scan" as const },
] as const;

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-cream text-ink page-glow">
            <Navbar />

            <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
                <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">Features</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
                        What ExamGhost <span className="relative isolate inline-block">
                            <span className="absolute inset-x-[-4px] bottom-[0.06em] h-[0.34em] -z-10 rounded-md bg-[#ffe9a0]" aria-hidden="true" />
                            does
                        </span>
                    </h1>
                    <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-xl mx-auto mb-8">
                        A Chrome extension that answers quiz questions right on the page, with an explanation if you want one.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-dark px-7 py-4 text-base shadow-lift">
                            <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                            Add to Chrome — it&apos;s free
                        </a>
                        <Link href={DEMO_URL} className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-black/10 bg-white text-base font-medium hover:border-black/25 transition-colors">
                            Try the live demo
                        </Link>
                    </div>
                </div>
            </section>

            <section className="pb-16 sm:pb-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
                    {GROUPS.map((g) => (
                        <Reveal key={g.label}>
                            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-5">{g.label}</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {g.items.map((it) => {
                                    const Icon = it.icon;
                                    return (
                                        <div key={it.title} className="bg-white rounded-3xl border border-black/10 shadow-card p-6">
                                            <span className={`grid place-items-center w-11 h-11 rounded-2xl ${it.tint} mb-4`}>
                                                <Icon className="w-5 h-5 text-ink" aria-hidden="true" />
                                            </span>
                                            <h3 className="font-display text-lg font-bold flex items-center gap-2 mb-1.5">
                                                {it.title}
                                                {it.key && <kbd className="text-[11px] font-sans font-medium text-ink-muted bg-black/5 rounded-md px-1.5 py-0.5">{it.key}</kbd>}
                                            </h3>
                                            <p className="text-[15px] text-ink-muted leading-relaxed">{it.body}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="py-16 sm:py-24 bg-[#18181b] text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-center mb-10 sm:mb-14">See it in action</h2>
                    <Reveal className="grid md:grid-cols-3 gap-6">
                        {DEMOS.map((d) => (
                            <div key={d.id}>
                                <div className="aspect-video rounded-3xl overflow-hidden bg-[#0c0c0e] ring-1 ring-white/10 shadow-lift mb-3">
                                    <MediaSlot slot={`features.${d.id}`} src={MEDIA.features[d.id]} label={`${d.title} demo`} fallback={<MockQuiz variant={d.variant} />} />
                                </div>
                                <h3 className="font-display text-lg font-bold">{d.title}</h3>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <Reveal className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-center mb-8">Questions</h2>
                    <div className="space-y-3">
                        {FEATURE_FAQS.map((f) => (
                            <details key={f.q} className="group bg-white rounded-2xl border border-black/10 px-5 py-4 open:shadow-card">
                                <summary className="cursor-pointer list-none font-display font-semibold [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-base sm:text-lg">{f.q}</h3>
                                </summary>
                                <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                    <p className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-muted">
                        <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                        Questions? <a href="mailto:support@examghost.com" className="underline underline-offset-4">support@examghost.com</a>
                    </p>
                </Reveal>
            </section>

            <FinalCta secondary="discord" />
            <Footer hideCta />
        </main>
    );
}
