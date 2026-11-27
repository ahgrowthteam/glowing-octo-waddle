import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, ChevronDown, Lock } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroVideo } from "@/components/home/HomeHero";
import FinalCta from "@/components/home/FinalCta";
import Reveal from "@/components/home/Reveal";
import { INSTALL_URL, DEMO_URL } from "@/components/home/config";
import { PLATFORMS_DATA, PLATFORM_BY_SLUG } from "@/data/platforms";

function get(slug: string) {
    const p = PLATFORM_BY_SLUG[slug];
    if (!p) throw new Error(`No platform data for ${slug}`);
    return p;
}

function faqsFor(slug: string) {
    const p = get(slug);
    return [
        {
            q: `Does ExamGhost work on ${p.name}?`,
            a: `Yes. Install the Chrome extension, open your ${p.name} ${p.kind.toLowerCase()} and double-click a question to get an answer and an explanation.`,
        },
        {
            q: `What ${p.name} question types are supported?`,
            a: `${p.types.join(", ")}. For anything image-based, use Snap-It (Alt+S) to draw a box around the question.`,
        },
        {
            q: `Can I use it on graded ${p.name} work?`,
            a: "That depends on your school and course. Many instructors restrict AI tools on graded work, and you are responsible for following your academic integrity policy. ExamGhost is built as a study aid: use it to check your work and learn from the explanations.",
        },
    ];
}

// SEO titles/H1s. The first 8 come from the keyword research map; the rest follow the same pattern.
const SEO_OVERRIDES: Record<string, { title: string; h1: string }> = {
    "canvas-lms-quiz-solver": { title: "Canvas Quiz Solver: AI Chrome Extension, Free Plan", h1: "Canvas Quiz Solver and Homework Helper for Chrome" },
    "blackboard-quiz-solver": { title: "Blackboard Quiz Solver: AI Chrome Extension, Free Plan", h1: "Blackboard Quiz Solver and Homework Helper" },
    "moodle-quiz-solver": { title: "Moodle Quiz Solver: AI Chrome Extension, Free Plan", h1: "Moodle Quiz Solver and Homework Helper" },
    "d2l-brightspace-quiz-solver": { title: "D2L Brightspace Quiz Solver: AI Extension, Free Plan", h1: "D2L Brightspace Quiz Solver and Homework Helper" },
    "schoology-quiz-solver": { title: "Schoology Quiz Solver: AI Chrome Extension, Free Plan", h1: "Schoology Quiz Helper and Homework Solver" },
    "google-forms-quiz-solver": { title: "Google Forms Quiz Solver: AI Extension, Free Plan", h1: "Google Forms Quiz Solver with Explanations" },
    "mcgraw-hill-connect-aleks-solver": { title: "McGraw Hill Connect Homework Helper (AI, Free Plan)", h1: "McGraw Hill Connect and ALEKS Homework Helper" },
    "pearson-mylab-mastering-solver": { title: "Pearson MyLab Homework Helper: AI Extension, Free Plan", h1: "Pearson MyLab and Mastering Homework Helper" },
};

function seoFor(slug: string) {
    if (SEO_OVERRIDES[slug]) return SEO_OVERRIDES[slug];
    const p = get(slug);
    const noun = slug.includes("quiz-solver") ? "Quiz Solver" : "Homework Helper";
    const candidates = [`${p.name} ${noun}: AI Chrome Extension, Free Plan`, `${p.name} ${noun}: AI Extension, Free Plan`, `${p.name} ${noun} (AI, Free Plan)`, `${p.name} ${noun}`];
    const title = candidates.find((t) => t.length <= 60) ?? candidates[candidates.length - 1];
    return { title, h1: `${p.name} ${noun} with step-by-step explanations` };
}

export function leanPlatformMetadata(slug: string): Metadata {
    const p = get(slug);
    const { title } = seoFor(slug);
    // Longest version that fits a search snippet (<= 155 chars).
    const description =
        [`${p.note} Use double-click, or press Alt+S to solve from a screenshot. Free plan available.`, `${p.note} Double-click or Alt+S screenshot. Free plan available.`, `${p.note} Free plan available.`].find((d) => d.length <= 155) ??
        `${p.note.slice(0, 120).trimEnd()}… Free plan.`;
    const url = `https://www.examghost.com/${slug}`;
    return {
        title: { absolute: title },
        description,
        alternates: { canonical: url },
        ...(p.indexable ? {} : { robots: { index: false, follow: true } }),
        openGraph: { title, description, url, siteName: "ExamGhost", type: "website", locale: "en_US", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }] },
        twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
    };
}

export default function LeanPlatform({ slug }: { slug: string }) {
    const p = get(slug);
    const faqs = faqsFor(slug);
    const related = PLATFORMS_DATA.filter((x) => x.slug !== slug).slice(0, 8);
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `https://www.examghost.com/${slug}#webpage`,
                url: `https://www.examghost.com/${slug}`,
                name: seoFor(slug).title,
                inLanguage: "en-US",
                isPartOf: { "@id": "https://www.examghost.com/#website" },
                about: { "@type": "SoftwareApplication", name: "ExamGhost", url: "https://www.examghost.com" },
                dateModified: "2026-11-19",
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.examghost.com" },
                    { "@type": "ListItem", position: 2, name: `${p.name} quiz solver`, item: `https://www.examghost.com/${slug}` },
                ],
            },
            { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ],
    };

    return (
        <div className="min-h-screen bg-cream text-ink page-glow flex flex-col">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />
            <main id="main-content" className="flex-1">

            <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
                    <div className="text-center lg:text-left">
                        <p className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary bg-paper border border-ink/[0.09] rounded-full px-3.5 py-1.5 mb-5 shadow-xs">
                            <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                            {p.kind}
                        </p>
                        <h1 className="font-display text-[36px] sm:text-[50px] lg:text-[54px] font-bold tracking-[-0.035em] leading-[1.05] text-ink mb-5">
                            {seoFor(slug).h1}
                        </h1>
                        <p className="aeo-summary text-base sm:text-lg text-ink-muted leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">{p.note}</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-dark px-7 py-3.5 sm:py-4 text-[15px] sm:text-base shadow-lift">
                                <FaChrome className="w-4 h-4 text-sky" aria-hidden="true" />
                                Add to Chrome — it&apos;s free
                            </a>
                            <Link href={DEMO_URL} className="btn-soft px-7 py-3.5 sm:py-4 text-[15px] sm:text-base">
                                <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                                Try the live demo
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-4 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(59,91,219,0.12),transparent_65%)] -z-10"
                        />
                        <div className="rounded-2xl sm:rounded-3xl bg-paper p-2 sm:p-2.5 ring-1 ring-ink/[0.09] shadow-lift">
                            <div className="flex items-center gap-2 rounded-xl bg-surface-subtle border border-ink/[0.07] px-3 py-2 mb-2">
                                <span className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                                </span>
                                <span className="ml-1 flex-1 min-w-0 inline-flex items-center gap-1.5 rounded-lg bg-paper border border-ink/[0.07] px-2.5 py-1 text-[11px] font-mono text-ink-muted">
                                    <Lock className="w-2.5 h-2.5 shrink-0" aria-hidden="true" />
                                    <span className="truncate">{p.name} · {p.kind}</span>
                                </span>
                                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emeraldBrand-soft border border-emeraldBrand/20 px-2.5 py-0.5 text-[11px] font-semibold text-emeraldBrand shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emeraldBrand" aria-hidden="true" />
                                    ExamGhost · Active
                                </span>
                            </div>
                            <HeroVideo videoId={p.youtubeId ?? ""} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 sm:py-16 bg-paper border-y border-ink/[0.08]">
                <Reveal className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-center mb-7">
                        Question types on {p.name}
                    </h2>
                    <ul className="flex flex-wrap justify-center gap-2.5">
                        {p.types.map((t) => (
                            <li key={t} className="inline-flex items-center gap-2.5 bg-surface-subtle/70 rounded-xl border border-ink/[0.09] px-4 py-2.5 text-[15px] font-medium text-ink">
                                <span className="w-5 h-5 rounded-full bg-emeraldBrand-soft text-emeraldBrand grid place-items-center shrink-0">
                                    <Check className="w-3 h-3" strokeWidth={2.75} aria-hidden="true" />
                                </span>
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-center text-sm text-ink-muted">
                        Using a different platform? Double-click works on most quiz pages, and <kbd className="kbd-key mx-0.5">Alt+S</kbd> solves anything you can see on screen.
                    </p>
                </Reveal>
            </section>

            {p.blurb && (
                <section className="py-14 sm:py-16">
                    <Reveal className="max-w-3xl mx-auto px-4 sm:px-6">
                        <div className="bg-paper rounded-2xl border border-ink/[0.09] p-6 sm:p-8 shadow-xs text-center">
                            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] mb-4">
                                About {p.name} {p.kind.toLowerCase()}
                            </h2>
                            <p className="text-[16.5px] sm:text-[17px] text-ink-secondary leading-relaxed">{p.blurb}</p>
                        </div>
                    </Reveal>
                </section>
            )}

            <section className="py-14 sm:py-20 bg-paper border-y border-ink/[0.08]">
                <Reveal className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-center mb-8">Questions</h2>
                    <div className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                        {faqs.map((f) => (
                            <details key={f.q} className="group py-4 sm:py-5">
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-base sm:text-[17px] leading-snug group-hover:text-cobalt transition-colors">{f.q}</h3>
                                    <span className="w-8 h-8 rounded-full bg-surface-subtle border border-ink/[0.08] text-ink-muted grid place-items-center shrink-0 transition-colors group-open:bg-surface-dark group-open:text-white group-open:border-surface-dark">
                                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                                    </span>
                                </summary>
                                <p className="mt-3 pr-10 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section className="pt-12 pb-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-sm font-semibold text-ink-muted mb-4">Other platforms</p>
                    <ul className="flex flex-wrap justify-center gap-2">
                        {related.map((r) => (
                            <li key={r.slug}>
                                <Link href={`/${r.slug}`} className="inline-block rounded-full border border-ink/[0.12] bg-paper px-4 py-2 text-sm text-ink-secondary hover:border-cobalt hover:text-cobalt transition-colors">
                                    {r.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/features" className="inline-block rounded-full bg-surface-dark text-white px-4 py-2 text-sm font-medium hover:bg-ink-secondary transition-colors">
                                See all features
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            </main>
            <FinalCta />
            <Footer hideCta />
        </div>
    );
}
