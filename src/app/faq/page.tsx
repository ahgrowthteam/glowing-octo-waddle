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

            <section className="pt-12 sm:pt-16 pb-8 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">FAQ</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
                        Questions, answered.
                    </h1>
                    <p className="text-base sm:text-lg text-ink-muted max-w-xl mx-auto mb-8">
                        Short answers about how ExamGhost works, what it costs and how your data is handled.
                    </p>
                    <nav aria-label="FAQ topics" className="flex flex-wrap justify-center gap-2">
                        {FAQ_GROUPS.map((g) => (
                            <a
                                key={g}
                                href={`#${slug(g)}`}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/10 bg-white surface-card text-sm font-medium text-ink-secondary hover:border-black/25 hover:text-ink transition-colors"
                            >
                                <span>{g}</span>
                                <span className="text-xs text-ink-muted tabular-nums">{FAQS.filter((f) => f.group === g).length}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            <section className="pb-16 sm:pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
                    {FAQ_GROUPS.map((g) => (
                        <div key={g} id={slug(g)} className="scroll-mt-24">
                            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4">{g}</h2>
                            <div className="space-y-3">
                                {FAQS.filter((f) => f.group === g).map((f) => (
                                    <details key={f.id} id={f.id} className="group bg-white rounded-2xl border border-black/10 surface-card hover:border-black/20 transition-colors px-5 sm:px-6 py-4 sm:py-5 open:shadow-card scroll-mt-24">
                                        <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                            <h3 className="text-base sm:text-lg">{f.q}</h3>
                                            <span className="w-8 h-8 rounded-full bg-[#f7f4ee] group-open:bg-ink group-open:text-white grid place-items-center shrink-0 text-ink-muted transition-colors">
                                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                                            </span>
                                        </summary>
                                        <p className="mt-3 pt-3 border-t border-black/5 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                    <p className="text-center text-ink-muted">
                        Still stuck? Email{" "}
                        <a href="mailto:support@examghost.com" className="underline underline-offset-4 decoration-black/30 hover:decoration-black text-ink">support@examghost.com</a>{" "}
                        or see the <Link href="/contact" className="underline underline-offset-4 decoration-black/30 hover:decoration-black text-ink">contact page</Link>.
                    </p>
                </div>
            </section>

            <FinalCta />
            <Footer hideCta />
        </main>
    );
}
