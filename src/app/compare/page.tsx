import React from "react";
import type { Metadata } from "next";
import { Check, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/home/FinalCta";
import CompareTable, { type CompareRow } from "@/components/compare/CompareTable";
import { EXAMGHOST, allFacts, monthlyFrom } from "@/data/competitor-facts";
import { PLATFORMS_DATA } from "@/data/platforms";

const URL = "https://www.examghost.com/compare";
const TITLE = "Best AI Quiz Solver Chrome Extensions Compared (2026)";
const DESCRIPTION = "Compare ExamGhost with Canvas Wizard, Aceify, Solvely, Answerly and more on free tiers, pricing, LMS support and screenshot solving. By ExamGhost.";

export const metadata: Metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, siteName: "ExamGhost", type: "website", locale: "en_US", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: TITLE }] },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.jpg"] },
};

function fmtDate(iso: string) {
    return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default function ComparePage() {
    const facts = allFacts();
    const rows: CompareRow[] = facts.map((f) => ({
        slug: f.slug,
        name: f.name,
        domain: f.domain,
        priceSummary: f.priceSummary,
        monthly: monthlyFrom(f),
        freeTier: f.freeTier ?? f.trial,
        platforms: f.platforms,
        platformCount: f.platforms.length,
        hasFree: !!(f.freeTier || f.trial),
        mentionsCanvas: f.platforms.some((p) => /canvas/i.test(p)),
        confidence: f.confidence,
        kind: f.purpose === "activity-hiding" ? "blocker" : f.purpose === "study-tools" ? "study" : f.purpose === "other" ? "other" : "answers",
        verified: f.verified,
    }));
    // Platform coverage, computed from the data so the headline can only say what is true.
    const egCount = PLATFORMS_DATA.length;
    const rivals = [...rows].filter((r) => r.platformCount > 0).sort((a, b) => b.platformCount - a.platformCount);
    const topRival = rivals[0];
    const tied = rivals.filter((r) => r.platformCount === egCount).map((r) => r.name);
    const coverageLine =
        !topRival || egCount > topRival.platformCount
            ? `ExamGhost names ${egCount} platforms, the most in this comparison`
            : egCount === topRival.platformCount
            ? `ExamGhost names ${egCount} platforms, tied for the most in this comparison with ${tied.join(" and ")}`
            : `ExamGhost names ${egCount} platforms`;
    const bars = [{ name: "ExamGhost", count: egCount, us: true }, ...rivals.slice(0, 5).map((r) => ({ name: r.name, count: r.platformCount, us: false }))].sort((a, b) => b.count - a.count || (a.us ? -1 : 1));
    const lastChecked = facts.reduce((m, f) => (f.lastChecked > m ? f.lastChecked : m), "2026-01-01");
    const withFree = facts.filter((f) => f.freeTier || f.trial).map((f) => f.name);
    const faqs = [
        {
            q: "What is the best AI quiz solver Chrome extension?",
            a: `There isn't one best choice for everyone. Compare the listed price, whether there is a free tier, the platforms you actually use (Canvas, Blackboard, Moodle and so on) and whether answers come with an explanation. ExamGhost starts free with ${EXAMGHOST.freeTier} and explains each answer.`,
        },
        {
            q: "Which Canvas quiz solver extensions have a free tier?",
            a: `In the products we checked, these list a free tier or trial: ${withFree.slice(0, 12).join(", ")}${withFree.length > 12 ? " and others" : ""}. Free limits differ a lot (a few solves, a daily cap, or a short trial), so read each vendor's current terms.`,
        },
        {
            q: "How do you compare prices?",
            a: "We record the price each vendor shows on its own website or store listing, as of the date at the top of this page. Plans are billed weekly, monthly or yearly, so the lowest-price sort converts them to a monthly equivalent. Prices change often, so confirm with the vendor.",
        },
        {
            q: "Can I use these tools on graded quizzes?",
            a: "That depends on your school and course. Many instructors restrict AI tools on graded work, and you are responsible for following your academic integrity policy. Use these tools as study aids: check your work and learn from the explanations.",
        },
        {
            q: "How often is this comparison updated?",
            a: `The data was last checked on ${fmtDate(lastChecked)}. If you see something out of date, email support@examghost.com and we'll fix it.`,
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${URL}#webpage`,
                url: URL,
                name: TITLE,
                description: DESCRIPTION,
                inLanguage: "en-US",
                dateModified: lastChecked,
                isPartOf: { "@id": "https://www.examghost.com/#website" },
                mainEntity: { "@id": `${URL}#list` },
            },
            {
                "@type": "ItemList",
                "@id": `${URL}#list`,
                name: TITLE,
                itemListElement: [{ slug: "", name: "ExamGhost" }, ...facts].map((f, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: f.name,
                    url: i === 0 ? "https://www.examghost.com" : `https://www.examghost.com/${(f as { slug: string }).slug}`,
                })),
            },
            { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.examghost.com" },
                    { "@type": "ListItem", position: 2, name: "Compare", item: URL },
                ],
            },
        ],
    };

    return (
        <main id="main-content" className="min-h-screen bg-cream text-ink page-glow">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <section className="pt-12 sm:pt-16 pb-10 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <p className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary bg-paper border border-ink/[0.09] rounded-full px-3.5 py-1.5 mb-5 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                        Updated {fmtDate(lastChecked)}
                    </p>
                    <h1 className="font-display text-[36px] sm:text-[54px] font-bold tracking-[-0.035em] leading-[1.05] text-ink mb-5">
                        AI quiz solver Chrome extensions compared
                    </h1>
                    <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
                        We make ExamGhost, so we&apos;re not neutral. This page sets our free and paid plans next to {facts.length} tools students ask us about, using each product&apos;s own public site or store listing, and shows when it was checked. Where a detail isn&apos;t published, we say so. Every tool can be wrong, so use them to check work and follow your course&apos;s AI policy.
                    </p>
                </div>
            </section>

            <section className="pb-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <div className="bg-paper rounded-2xl border border-ink/[0.09] surface-card p-6 sm:p-8">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] mb-1.5">Platform coverage</h2>
                        <p className="text-sm text-ink-muted mb-6 leading-relaxed">
                            {coverageLine}. It also solves any page you can see: press <kbd className="kbd-key mx-0.5">Alt+S</kbd>, drag a box around the question and it reads the screenshot. Counts are the platforms each vendor names on its own site; others may work on more.
                        </p>
                        <ul className="space-y-3" aria-label="Platforms named, by extension">
                            {bars.map((b) => (
                                <li key={b.name} className="grid grid-cols-[110px_1fr_42px] sm:grid-cols-[150px_1fr_46px] items-center gap-3 text-sm">
                                    <span className={b.us ? "font-semibold text-ink" : "text-ink-secondary"}>{b.name}</span>
                                    <span className="h-2.5 rounded-full bg-surface-subtle overflow-hidden">
                                        <span
                                            className={`block h-full rounded-full ${b.us ? "bg-cobalt" : "bg-ink/20"}`}
                                            style={{ width: `${(b.count / Math.max(egCount, ...bars.map((x) => x.count))) * 100}%` }}
                                        />
                                    </span>
                                    <span className="text-right">
                                        {b.us ? (
                                            <span className="inline-block bg-cobalt-soft border border-cobalt/20 text-cobalt font-mono rounded-md px-2 py-0.5 text-xs font-semibold tabular-nums">
                                                {b.count}
                                            </span>
                                        ) : (
                                            <span className="font-mono text-xs tabular-nums text-ink-muted">{b.count}</span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="pb-16 sm:pb-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <CompareTable rows={rows} examghost={{ priceSummary: EXAMGHOST.priceSummary, freeTier: EXAMGHOST.freeTier, platformCount: PLATFORMS_DATA.length }} />
                    <p className="mt-5 text-xs text-ink-muted leading-relaxed max-w-3xl">
                        How we compare: each row shows what the vendor states on its own site or store listing on the date above, and &ldquo;Not stated&rdquo; where we found nothing. We don&apos;t rate or rank other products. Prices and features change, so check the vendor before you buy.
                    </p>
                </div>
            </section>

            <section className="py-16 sm:py-20 bg-surface-subtle/75 border-y border-ink/[0.08]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-center mb-8">What to look for</h2>
                    <ul className="grid sm:grid-cols-2 gap-px bg-ink/[0.08] rounded-2xl border border-ink/[0.09] overflow-hidden shadow-xs">
                        {[
                            "A free tier you can test before paying",
                            "Support for the platforms you use",
                            "Explanations, not just answers",
                            "Screenshot support for graphs and diagrams",
                            "A clear refund policy",
                            "A price you can read before signing up",
                        ].map((t) => (
                            <li key={t} className="flex items-start gap-3 bg-paper px-5 py-4 text-[15px] text-ink">
                                <span className="w-5 h-5 rounded-full bg-emeraldBrand-soft text-emeraldBrand grid place-items-center shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" strokeWidth={2.75} aria-hidden="true" />
                                </span>
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-16 sm:py-20 bg-paper border-b border-ink/[0.08]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
                </div>
            </section>

            <FinalCta />
            <Footer hideCta />
        </main>
    );
}
