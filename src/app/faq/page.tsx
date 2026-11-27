import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/home/FinalCta";
import { FAQS, FAQ_GROUPS } from "@/data/faqs";

const URL = "https://www.examghost.com/faq";

const slug = (g: string) => g.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "FAQPage",
            "@id": `${URL}#faqpage`,
            url: URL,
            mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${URL}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.examghost.com" },
                { "@type": "ListItem", position: 2, name: "FAQ", item: URL },
            ],
        },
    ],
};

export default function FAQPage() {
    return (
        <main id="main-content" className="min-h-screen bg-cream text-ink page-glow">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <section className="pt-10 sm:pt-14 pb-8 sm:pb-12 border-b border-ink/[0.08]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <p className="text-sm font-medium text-cobalt mb-3">Frequently asked questions</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.03em] leading-[1.05] text-ink mb-4">
                        Questions, answered.
                    </h1>
                    <p className="text-base sm:text-lg text-ink-muted max-w-[60ch] leading-relaxed">
                        Short answers about how ExamGhost works, what it costs and how your data is handled.
                    </p>

                    <nav aria-label="FAQ topics" className="lg:hidden flex flex-wrap gap-2 mt-6">
                        {FAQ_GROUPS.map((g) => (
                            <a
                                key={g}
                                href={`#${slug(g)}`}
                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-ink/[0.1] bg-paper text-sm font-medium text-ink-secondary hover:border-cobalt/40 hover:text-ink transition-colors"
                            >
                                <span>{g}</span>
                                <span className="font-mono text-xs text-ink-muted tabular-nums">
                                    {FAQS.filter((f) => f.group === g).length}
                                </span>
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            <section className="py-12 sm:py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
                    <aside className="hidden lg:block sticky top-24">
                        <p className="text-xs font-semibold text-ink-muted mb-3">Topics</p>
                        <nav aria-label="FAQ topics" className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                            {FAQ_GROUPS.map((g) => {
                                const count = FAQS.filter((f) => f.group === g).length;
                                return (
                                    <a
                                        key={g}
                                        href={`#${slug(g)}`}
                                        className="flex items-center justify-between py-3 text-sm font-medium text-ink-secondary hover:text-cobalt transition-colors"
                                    >
                                        <span>{g}</span>
                                        <span className="font-mono text-xs text-ink-muted tabular-nums">{count}</span>
                                    </a>
                                );
                            })}
                        </nav>
                        <div className="mt-6 rounded-xl bg-surface-subtle border border-ink/[0.08] p-4 text-xs text-ink-muted leading-relaxed">
                            Still stuck? Email{" "}
                            <a
                                href="mailto:support@examghost.com"
                                className="font-medium text-ink underline underline-offset-4 decoration-ink/25 hover:text-cobalt hover:decoration-cobalt"
                            >
                                support@examghost.com
                            </a>{" "}
                            or open the{" "}
                            <Link
                                href="/contact"
                                className="font-medium text-ink underline underline-offset-4 decoration-ink/25 hover:text-cobalt hover:decoration-cobalt"
                            >
                                contact page
                            </Link>
                            .
                        </div>
                    </aside>

                    <div className="space-y-12">
                        {FAQ_GROUPS.map((g) => {
                            const items = FAQS.filter((f) => f.group === g);
                            return (
                                <div key={g} id={slug(g)} className="scroll-mt-24">
                                    <div className="flex items-baseline justify-between gap-4 mb-4">
                                        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-ink">
                                            {g}
                                        </h2>
                                        <span className="font-mono text-xs text-ink-muted tabular-nums">
                                            {items.length} questions
                                        </span>
                                    </div>
                                    <div className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                                        {items.map((f) => (
                                            <details key={f.id} id={f.id} className="group py-4 sm:py-5 scroll-mt-24">
                                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                                    <h3 className="text-base sm:text-[17px] leading-snug group-hover:text-cobalt transition-colors">
                                                        {f.q}
                                                    </h3>
                                                    <span className="w-8 h-8 rounded-full bg-surface-subtle border border-ink/[0.08] text-ink-muted grid place-items-center shrink-0 transition-colors group-open:bg-surface-dark group-open:text-white group-open:border-surface-dark">
                                                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                                                    </span>
                                                </summary>
                                                <p className="mt-3 pr-10 max-w-[66ch] text-[15px] text-ink-muted leading-relaxed">
                                                    {f.a}
                                                </p>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}

                        <p className="lg:hidden text-sm text-ink-muted pt-2">
                            Still stuck? Email{" "}
                            <a
                                href="mailto:support@examghost.com"
                                className="underline underline-offset-4 decoration-ink/30 hover:decoration-cobalt hover:text-cobalt text-ink"
                            >
                                support@examghost.com
                            </a>{" "}
                            or see the{" "}
                            <Link
                                href="/contact"
                                className="underline underline-offset-4 decoration-ink/30 hover:decoration-cobalt hover:text-cobalt text-ink"
                            >
                                contact page
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <FinalCta />
            <Footer hideCta />
        </main>
    );
}
