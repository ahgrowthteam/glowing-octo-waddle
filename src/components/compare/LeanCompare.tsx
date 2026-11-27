import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, ChevronDown, ExternalLink, Info } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/home/FinalCta";
import { INSTALL_URL, DEMO_URL } from "@/components/home/config";
import { EXAMGHOST, allFacts, factsFor, isIndexable, monthlyFrom, type CompetitorFact } from "@/data/competitor-facts";
import { editorialFor, type CompareEditorialEntry } from "@/data/compare-editorial";
import { PLATFORMS_DATA } from "@/data/platforms";

function fmtDate(iso: string) {
    return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
}

function fmtShortDate(iso: string) {
    return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

function list(items: string[], max = 4) {
    return items.length ? items.slice(0, max).join(", ") : null;
}

function host(u: string) {
    try {
        return new URL(u).hostname.replace(/^www\./, "");
    } catch {
        return u;
    }
}

function formatPlanPrice(price: number | null, currency: string, period: string | null) {
    if (price == null) return "Dynamic / unstated";
    const sym = currency === "USD" ? "$" : `${currency} `;
    const amt = Number.isInteger(price) ? String(price) : price.toFixed(2);
    return period && period !== "free" ? `${sym}${amt}/${period}` : `${sym}${amt}`;
}

function contextualRelated(slug: string, f: CompetitorFact | undefined, ed: CompareEditorialEntry | undefined): CompetitorFact[] {
    if (ed && ed.relatedSlugs.length > 0) {
        const picked = ed.relatedSlugs
            .filter((s) => s !== slug)
            .map((s) => factsFor(s))
            .filter((x): x is CompetitorFact => isIndexable(x));
        if (picked.length > 0) return picked.slice(0, 6);
    }

    const pool = allFacts().filter((x) => x.slug !== slug && isIndexable(x));
    if (!f) return pool.slice(0, 5);

    const myPlatforms = new Set(f.platforms.map((p) => p.toLowerCase()));
    const myMonthly = monthlyFrom(f);

    const score = (x: CompetitorFact) => {
        let s = 0;
        if (x.purpose === f.purpose) s += 40;
        for (const p of x.platforms) {
            if (myPlatforms.has(p.toLowerCase())) s += 8;
        }
        const xm = monthlyFrom(x);
        if (myMonthly != null && xm != null) {
            s += Math.max(0, 20 - Math.abs(myMonthly - xm));
        }
        return s;
    };

    return [...pool]
        .sort((a, b) => score(b) - score(a) || a.slug.localeCompare(b.slug))
        .slice(0, 5);
}

function fallbackFaqsFor(f: CompetitorFact) {
    const theirFree = f.verified ? (f.freeTier ?? f.trial) : null;
    const theirPrice = f.verified ? f.priceSummary : null;
    const theirPlatforms = f.verified && f.platforms.length ? f.platforms : null;
    const listsCanvas = !!theirPlatforms?.some((p) => /canvas/i.test(p));
    const theirFeatures = f.verified && f.features.length ? list(f.features, 2) : null;

    const out: { question: string; answer: string }[] = [];

    if (f.purpose === "activity-hiding") {
        out.push({
            question: `How is ${f.name} different from ExamGhost?`,
            answer: `${f.name} (${f.domain}) is positioned primarily as a tab-activity blocker rather than an AI answer tool, whereas ExamGhost answers quiz and homework questions directly on the page with step-by-step explanations.`,
        });
        out.push({
            question: `Does ExamGhost work as an ${f.name} alternative for studying?`,
            answer: `ExamGhost is an AI study extension with 5 free daily solves, double-click answers, Alt+S diagram snips, and 20 named LMS integrations. Always follow your school's academic integrity policy.`,
        });
    } else {
        out.push({
            question: `Is ${f.name} free compared to ExamGhost?`,
            answer: theirFree
                ? `${f.name} lists the following free access on ${f.domain}: ${theirFree}. ExamGhost includes ${EXAMGHOST.freeTier}.`
                : f.verified
                ? `${f.name} does not list a permanent free tier on ${f.domain}. ExamGhost includes ${EXAMGHOST.freeTier}.`
                : `Free plan availability for ${f.name} could not be verified directly on ${f.domain}. ExamGhost includes ${EXAMGHOST.freeTier}.`,
        });
        out.push({
            question: `How does ${f.name} pricing compare with ExamGhost?`,
            answer: theirPrice
                ? `${f.name} lists ${theirPrice} on ${f.domain}. ExamGhost lists ${EXAMGHOST.priceSummary}, backed by a ${EXAMGHOST.refund.toLowerCase()}.`
                : `Direct vendor pricing for ${f.name} was not readable at our last check; verify current rates on ${f.domain}. ExamGhost lists ${EXAMGHOST.priceSummary}.`,
        });
        out.push({
            question: `Does ${f.name} support Canvas and other university LMS portals?`,
            answer: listsCanvas
                ? `${f.name} lists Canvas among its supported platforms (${list(theirPlatforms!, 5)}). ExamGhost supports ${PLATFORMS_DATA.length} named platforms plus Alt+S screenshot solving on any page.`
                : theirPlatforms
                ? `${f.name} lists ${list(theirPlatforms, 5)} on ${f.domain}. ExamGhost supports Canvas, Blackboard, Moodle, D2L Brightspace, McGraw Hill, Pearson, and Alt+S screenshot snips.`
                : `Supported platform details for ${f.name} were not verified directly on ${f.domain}. ExamGhost supports ${PLATFORMS_DATA.length} named platforms plus Alt+S screenshot solving.`,
        });
        if (theirFeatures) {
            out.push({
                question: `What are the main workflow differences between ${f.name} and ExamGhost?`,
                answer: `${f.name} focuses on ${theirFeatures}. ExamGhost centers on double-click question solving, Alt+1/2/3 quick, highlight, and explain modes, and Alt+S screenshot capture.`,
            });
        }
    }

    return out;
}

export function leanCompareMetadata(slug: string): Metadata {
    const f = factsFor(slug);
    const ed = editorialFor(slug);
    const name = ed?.cleanBrandName ?? f?.name ?? slug.replace(/-vs-examghost$/, "");
    const domain = f?.domain ?? `${name.toLowerCase().replace(/\s+/g, "")}.com`;

    let title: string;
    let description: string;

    if (ed) {
        title = ed.metaTitle;
        description = ed.metaDescription;
    } else {
        const candidates = [
            `${name} Alternative vs ExamGhost (2026)`,
            `${name} vs ExamGhost: Alternative & Pricing`,
            `${name} vs ExamGhost (2026)`,
        ];
        title = candidates.find((t) => t.length <= 60) ?? candidates[candidates.length - 1];
        description = `Compare ${name} (${domain}) as an ExamGhost alternative on verified pricing, free tier limits, supported LMS platforms, and study workflow.`;
    }

    const url = `https://www.examghost.com/${slug}`;
    return {
        title: { absolute: title },
        description,
        alternates: { canonical: url },
        ...(!isIndexable(f) ? { robots: { index: false, follow: true } } : {}),
        openGraph: {
            title,
            description,
            url,
            siteName: "ExamGhost",
            type: "website",
            locale: "en_US",
            images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og-image.jpg"],
        },
    };
}

function Row({ label, themName, them, us }: { label: string; themName: string; them: React.ReactNode; us: React.ReactNode }) {
    return (
        <div className="grid sm:grid-cols-[160px_1fr_1fr] gap-x-6 gap-y-2.5 px-5 sm:px-6 py-4 border-t border-ink/[0.06] first:border-t-0 hover:bg-surface-subtle/45 transition-colors">
            <dt className="text-xs font-semibold text-ink-muted sm:pt-0.5">{label}</dt>
            <dd className="text-[15px] text-ink-secondary min-w-0">
                <span className="sm:hidden block text-[11px] font-semibold text-ink-muted mb-0.5">{themName}</span>
                {them}
            </dd>
            <dd className="text-[15px] text-ink font-medium min-w-0 sm:bg-cobalt-soft/40 sm:-my-4 sm:py-4 sm:px-4">
                <span className="sm:hidden inline-flex items-center gap-1.5 text-[11px] font-semibold text-cobalt mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emeraldBrand" aria-hidden="true" />
                    ExamGhost
                </span>
                <div>{us}</div>
            </dd>
        </div>
    );
}

function Table({ f }: { f: CompetitorFact }) {
    const unknown = <span className="text-ink-muted">{f.verified ? "Not stated on their site" : "Not verified"}</span>;
    const hides = f.purpose === "activity-hiding";
    const priceCell = !f.verified ? unknown : (f.priceSummary ?? unknown);
    const hasPaidOnlyPlans =
        f.verified &&
        !f.freeTier &&
        !f.trial &&
        ((!!f.priceSummary && /\bno free\b|paid (?:subscriptions|plans) only/i.test(f.priceSummary)) ||
            (f.plans.length > 0 && f.plans.every((p) => p.price == null || p.price > 0)));
    const freeCell = !f.verified
        ? unknown
        : f.freeTier ?? f.trial ?? (hasPaidOnlyPlans ? <span className="text-ink-muted">None (paid plans only)</span> : unknown);
    const platformsCell = !f.verified
        ? unknown
        : f.platforms.length
        ? `${f.platforms.length} named: ${list(f.platforms, 6)}${f.platforms.length > 6 ? "…" : ""}`
        : unknown;
    const screenshotCell = !f.verified ? (
        unknown
    ) : f.features.some((x) => /screenshot|snap|image|photo|camera|crop|snip/i.test(x)) ? (
        "Screenshot or image solving listed"
    ) : (
        <span className="text-ink-muted">Not in the features recorded; check {f.domain}</span>
    );
    const noExtPlatforms =
        f.verified && !f.storeUrl && f.platforms.length > 0
            ? `${f.platforms
                  .slice(0, 4)
                  .map((p) => p.replace(/\s*\([^)]*\)/g, ""))
                  .join(", ")} (no extension)`
            : null;
    const browsersCell = !f.verified ? unknown : (list(f.browsers, 4) ?? noExtPlatforms ?? unknown);
    const featuresCell = !f.verified ? (
        unknown
    ) : f.features.length ? (
        <ul className="space-y-1.5">
            {f.features.slice(0, 4).map((x) => (
                <li key={x} className="flex gap-2">
                    <Check className="w-4 h-4 mt-1 text-ink-muted shrink-0" aria-hidden="true" />
                    <span>{x}</span>
                </li>
            ))}
        </ul>
    ) : (
        unknown
    );
    const refundCell = !f.verified ? unknown : <span className="text-ink-muted">See {f.domain}</span>;

    return (
        <div className="bg-paper rounded-2xl border border-ink/[0.09] surface-card overflow-hidden">
            <div className="hidden sm:grid grid-cols-[160px_1fr_1fr] gap-x-6 px-6 py-4 bg-surface-subtle border-b border-ink/[0.08] text-sm font-display font-bold">
                <span />
                <span className="text-ink">{f.name}</span>
                <span className="inline-flex items-center gap-1.5 sm:px-4 text-cobalt">
                    <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                    ExamGhost
                </span>
            </div>
            <dl>
                <Row label="Price" themName={f.name} them={priceCell} us={EXAMGHOST.priceSummary} />
                <Row label="Free tier / trial" themName={f.name} them={freeCell} us={EXAMGHOST.freeTier} />
                <Row
                    label="Works on"
                    themName={f.name}
                    them={platformsCell}
                    us={`${PLATFORMS_DATA.length} named (Canvas, Blackboard, Moodle, D2L Brightspace and more), plus any page via Alt+S screenshot`}
                />
                {!hides && (
                    <Row
                        label="Any page, by screenshot"
                        themName={f.name}
                        them={screenshotCell}
                        us="Yes: press Alt+S and drag a box around anything you can see"
                    />
                )}
                <Row label="Browser" themName={f.name} them={browsersCell} us={EXAMGHOST.browsers.join(", ")} />
                {!hides && (
                    <Row
                        label="Features"
                        themName={f.name}
                        them={featuresCell}
                        us={
                            <ul className="space-y-1.5">
                                {EXAMGHOST.features.slice(0, 4).map((x) => (
                                    <li key={x} className="flex gap-2">
                                        <Check className="w-4 h-4 mt-1 text-emeraldBrand shrink-0" aria-hidden="true" />
                                        <span>{x}</span>
                                    </li>
                                ))}
                            </ul>
                        }
                    />
                )}
                <Row label="Refund" themName={f.name} them={refundCell} us={EXAMGHOST.refund} />
            </dl>
        </div>
    );
}

export default function LeanCompare({ slug }: { slug: string }) {
    const f = factsFor(slug);
    if (!f) {
        throw new Error(`No competitor fact data for ${slug}`);
    }
    const ed = editorialFor(slug);
    const name = ed?.cleanBrandName ?? f.name;
    const domain = f.domain;
    const faqs = ed ? ed.faqs : fallbackFaqsFor(f);
    const related = contextualRelated(slug, f, ed);
    const srcs = f.sources.filter((u) => /^https?:/.test(u)).slice(0, 5);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `https://www.examghost.com/${slug}#webpage`,
                url: `https://www.examghost.com/${slug}`,
                name: ed?.h1 ?? `${name} vs ExamGhost`,
                inLanguage: "en-US",
                isPartOf: { "@id": "https://www.examghost.com/#website" },
                about: [
                    { "@type": "SoftwareApplication", name: "ExamGhost", url: "https://www.examghost.com" },
                    { "@type": "SoftwareApplication", name, url: f.url },
                ],
                dateModified: f.lastChecked,
                citation: srcs,
                breadcrumb: { "@id": `https://www.examghost.com/${slug}#breadcrumb` },
            },
            {
                "@type": "FAQPage",
                mainEntity: faqs.map((q) => ({
                    "@type": "Question",
                    name: q.question,
                    acceptedAnswer: { "@type": "Answer", text: q.answer },
                })),
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://www.examghost.com/${slug}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.examghost.com" },
                    { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.examghost.com/compare" },
                    { "@type": "ListItem", position: 3, name: `${name} vs ExamGhost`, item: `https://www.examghost.com/${slug}` },
                ],
            },
        ],
    };

    return (
        <div className="min-h-screen bg-cream text-ink page-glow flex flex-col">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content" className="flex-1">
                <section className="pt-12 sm:pt-16 pb-10 text-center">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <nav aria-label="Breadcrumb" className="text-xs font-medium text-ink-muted mb-4">
                            <Link href="/compare" className="hover:text-cobalt transition-colors">Compare</Link> <span aria-hidden="true">/</span> {name}
                        </nav>
                        <h1 className="font-display text-[36px] sm:text-[54px] font-bold tracking-[-0.035em] leading-[1.05] text-ink mb-5">
                            {ed ? ed.h1 : (
                                <>
                                    {name} <span className="text-ink-muted">vs</span> ExamGhost
                                </>
                            )}
                        </h1>
                        {ed ? (
                            <>
                                <p className="text-base sm:text-lg text-ink-secondary max-w-2xl mx-auto mb-4 leading-relaxed">
                                    {ed.heroSubtitle}
                                </p>
                                <p className="aeo-summary text-[15px] sm:text-base text-ink-muted max-w-2xl mx-auto mb-8 leading-relaxed bg-paper border border-ink/[0.08] rounded-2xl px-5 py-4 text-left">
                                    {ed.aeoSummary}
                                </p>
                            </>
                        ) : (
                            <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-xl mx-auto mb-8 leading-relaxed">
                                {f.verified
                                    ? `Comparing ${name} (${domain}) and ExamGhost using verified vendor details from ${fmtShortDate(f.lastChecked)}.`
                                    : `${name} (${domain}) could not be verified directly during our ${fmtShortDate(f.lastChecked)} check. ExamGhost pricing and platform data are shown alongside available store facts.`}
                            </p>
                        )}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                </section>

                {(f.purpose === "activity-hiding" || !f.verified) && (
                    <section className="pb-8">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6">
                            <div className="flex gap-3 rounded-2xl border border-amber-300/70 bg-amber-50/90 px-5 py-4 text-[15px] text-ink-secondary leading-relaxed">
                                <Info className="w-5 h-5 mt-0.5 shrink-0 text-amber-700" aria-hidden="true" />
                                <p>
                                    {f.purpose === "activity-hiding"
                                        ? `${f.name} is sold mainly as a tab-activity blocker, not an AI answer tool, so this is not a like-for-like comparison. Check your course rules first: many instructors restrict AI and blocking tools on graded work.`
                                        : `We could not read ${f.domain} directly (it blocked automated access or was offline), so vendor pricing and platform details are not verified here. Check ${f.domain} or its store listing for current information.`}
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {ed ? (
                    <>
                        {/* Section 2: Pricing & Plans Breakdown */}
                        <section className="pb-12 sm:pb-16">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
                                <div className="bg-paper rounded-2xl border border-ink/[0.09] p-6 sm:p-8 surface-card">
                                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] mb-3">
                                        {name} vs ExamGhost pricing breakdown
                                    </h2>
                                    <p className="text-[15.5px] text-ink-secondary leading-relaxed mb-4">
                                        {ed.pricingBreakdown.summaryParagraph}
                                    </p>
                                    {ed.pricingBreakdown.billingCaveats.length > 0 && (
                                        <ul className="space-y-2 text-sm text-ink-muted mb-6">
                                            {ed.pricingBreakdown.billingCaveats.map((c) => (
                                                <li key={c} className="flex gap-2">
                                                    <Info className="w-4 h-4 mt-0.5 text-cobalt shrink-0" aria-hidden="true" />
                                                    <span>{c}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="rounded-xl border border-ink/[0.08] bg-surface-subtle/60 p-5">
                                            <h3 className="font-display font-bold text-base text-ink mb-3">{name} plans ({domain})</h3>
                                            {f.plans.length > 0 ? (
                                                <ul className="space-y-3 text-sm">
                                                    {f.plans.map((p) => (
                                                        <li key={`${p.name}-${p.period ?? "none"}`} className="border-b border-ink/[0.06] last:border-b-0 pb-2.5 last:pb-0">
                                                            <div className="flex items-baseline justify-between gap-2 font-semibold text-ink">
                                                                <span>{p.name}</span>
                                                                <span className="font-mono text-xs">{formatPlanPrice(p.price, p.currency, p.period)}</span>
                                                            </div>
                                                            {p.notes && <p className="text-xs text-ink-muted mt-1 leading-relaxed">{p.notes}</p>}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-sm text-ink-muted leading-relaxed">
                                                    Paid subscription tiers on {domain} are client-rendered or login-gated behind an authenticated SPA, with no public tier table exposed in static HTML at our {fmtShortDate(f.lastChecked)} check.
                                                </p>
                                            )}
                                        </div>

                                        <div className="rounded-xl border border-cobalt/20 bg-cobalt-soft/35 p-5">
                                            <h3 className="font-display font-bold text-base text-ink mb-3">ExamGhost plans (examghost.com)</h3>
                                            <ul className="space-y-3 text-sm">
                                                <li className="border-b border-ink/[0.06] pb-2.5">
                                                    <div className="flex items-baseline justify-between gap-2 font-semibold text-ink">
                                                        <span>Free</span>
                                                        <span className="font-mono text-xs">$0/day</span>
                                                    </div>
                                                    <p className="text-xs text-ink-muted mt-1">5 solves per day, no credit card required.</p>
                                                </li>
                                                <li className="border-b border-ink/[0.06] pb-2.5">
                                                    <div className="flex items-baseline justify-between gap-2 font-semibold text-ink">
                                                        <span>Monthly</span>
                                                        <span className="font-mono text-xs">$19/month</span>
                                                    </div>
                                                    <p className="text-xs text-ink-muted mt-1">Unlimited solves and Alt+S snips, cancel anytime, 14-day refund.</p>
                                                </li>
                                                <li className="border-b border-ink/[0.06] pb-2.5">
                                                    <div className="flex items-baseline justify-between gap-2 font-semibold text-ink">
                                                        <span>Yearly</span>
                                                        <span className="font-mono text-xs">$99/year (~$8.25/mo)</span>
                                                    </div>
                                                    <p className="text-xs text-ink-muted mt-1">Full access across 20+ platforms, 14-day money-back guarantee.</p>
                                                </li>
                                                <li>
                                                    <div className="flex items-baseline justify-between gap-2 font-semibold text-ink">
                                                        <span>Lifetime</span>
                                                        <span className="font-mono text-xs">$199 once</span>
                                                    </div>
                                                    <p className="text-xs text-ink-muted mt-1">One-time payment with ongoing access and 14-day refund window.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Workflow & Platform Differences + Side-by-Side Table */}
                        <section className="pb-12 sm:pb-16">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
                                <div className="bg-paper rounded-2xl border border-ink/[0.09] p-6 sm:p-8 surface-card">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-cobalt mb-2">
                                        {ed.workflowAndPlatformDiff.competitorWorkflowLabel}
                                    </p>
                                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] mb-4">
                                        Workflow and platform coverage
                                    </h2>
                                    <div className="space-y-4 text-[15.5px] text-ink-secondary leading-relaxed">
                                        {ed.workflowAndPlatformDiff.paragraphs.map((p, idx) => (
                                            <p key={idx}>{p}</p>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-sm text-ink-muted border-t border-ink/[0.06] pt-4">
                                        {ed.workflowAndPlatformDiff.platformSummaryNote}
                                    </p>
                                </div>

                                <Table f={f} />
                            </div>
                        </section>

                        {/* Section 4: Verified Limitations & Evidence */}
                        <section className="pb-12 sm:pb-16">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                                <div className="bg-paper rounded-2xl border border-ink/[0.09] p-6 sm:p-8 surface-card">
                                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] mb-4">
                                        Verified limitations and primary evidence
                                    </h2>
                                    <div className="space-y-3 text-[15.5px] text-ink-secondary leading-relaxed mb-5">
                                        {ed.verifiedLimitations.paragraphs.map((p, idx) => (
                                            <p key={idx}>{p}</p>
                                        ))}
                                    </div>
                                    {ed.verifiedLimitations.keyCaveats.length > 0 && (
                                        <ul className="space-y-2 text-sm text-ink-secondary mb-5">
                                            {ed.verifiedLimitations.keyCaveats.map((c) => (
                                                <li key={c} className="flex gap-2.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-2 shrink-0" aria-hidden="true" />
                                                    <span>{c}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {f.notes && (
                                        <p className="text-xs text-ink-muted bg-surface-subtle rounded-xl px-4 py-3 leading-relaxed">
                                            Research log ({fmtShortDate(f.lastChecked)}): {f.notes}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Decision Verdict */}
                        <section className="pb-14 sm:pb-16">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-center mb-6">
                                    Which tool fits your coursework?
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-paper rounded-2xl border border-ink/[0.09] p-6 surface-card">
                                        <h3 className="font-display text-lg font-bold text-ink mb-3">Choose {ed.cleanBrandName} if...</h3>
                                        <ul className="space-y-2.5 text-sm text-ink-secondary">
                                            {ed.decisionVerdict.chooseCompetitorIf.map((item) => (
                                                <li key={item} className="flex gap-2.5">
                                                    <Check className="w-4 h-4 mt-0.5 text-ink-muted shrink-0" aria-hidden="true" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-paper rounded-2xl border border-cobalt/25 p-6 surface-card">
                                        <h3 className="font-display text-lg font-bold text-cobalt mb-3">Choose ExamGhost if...</h3>
                                        <ul className="space-y-2.5 text-sm text-ink">
                                            {ed.decisionVerdict.chooseExamGhostIf.map((item) => (
                                                <li key={item} className="flex gap-2.5">
                                                    <Check className="w-4 h-4 mt-0.5 text-emeraldBrand shrink-0" aria-hidden="true" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        {/* Fallback path (27 noindex routes & pre-batch standalone M4-A) */}
                        <section className="pb-12 sm:pb-14">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
                                <Table f={f} />

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-paper rounded-2xl border border-ink/[0.09] p-6 surface-card">
                                        <h2 className="font-display text-xl font-bold text-ink mb-2">
                                            {name} pricing &amp; notes
                                        </h2>
                                        {f.verified && f.plans.length > 0 ? (
                                            <ul className="space-y-2.5 text-sm mb-3">
                                                {f.plans.map((p) => (
                                                    <li key={`${p.name}-${p.period ?? "none"}`} className="border-b border-ink/[0.06] last:border-b-0 pb-2 last:pb-0">
                                                        <div className="flex items-baseline justify-between gap-2 font-semibold text-ink">
                                                            <span>{p.name}</span>
                                                            <span className="font-mono text-xs">{formatPlanPrice(p.price, p.currency, p.period)}</span>
                                                        </div>
                                                        {p.notes && <p className="text-xs text-ink-muted mt-0.5">{p.notes}</p>}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : f.verified ? (
                                            <p className="text-sm text-ink-muted leading-relaxed mb-3">
                                                {f.priceSummary ?? `No public tier table was exposed in static HTML on ${domain} at our ${fmtShortDate(f.lastChecked)} check.`}
                                            </p>
                                        ) : (
                                            <p className="text-sm text-ink-muted leading-relaxed mb-3">
                                                Pricing and feature tiers for {name} on {domain} could not be verified directly during automated and browser checks on {fmtShortDate(f.lastChecked)}.
                                            </p>
                                        )}
                                        {f.notes && (
                                            <p className="text-xs text-ink-muted leading-relaxed bg-surface-subtle rounded-xl px-3.5 py-2.5">
                                                {f.notes}
                                            </p>
                                        )}
                                    </div>

                                    <div className="bg-paper rounded-2xl border border-cobalt/20 p-6 surface-card">
                                        <h2 className="font-display text-xl font-bold text-cobalt mb-2">
                                            ExamGhost verified baseline
                                        </h2>
                                        <p className="text-sm text-ink-secondary leading-relaxed mb-3">
                                            ExamGhost is an AI Chrome extension by FoundryOne LLC covering {PLATFORMS_DATA.length} named university and homework platforms, plus Alt+S screenshot solving on any webpage.
                                        </p>
                                        <ul className="space-y-2 text-sm text-ink">
                                            <li className="flex gap-2">
                                                <Check className="w-4 h-4 mt-0.5 text-emeraldBrand shrink-0" aria-hidden="true" />
                                                <span>Free tier: 5 solves per day, no credit card</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <Check className="w-4 h-4 mt-0.5 text-emeraldBrand shrink-0" aria-hidden="true" />
                                                <span>Paid plans: $19/month, $99/year (~$8.25/mo), or $199 lifetime</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <Check className="w-4 h-4 mt-0.5 text-emeraldBrand shrink-0" aria-hidden="true" />
                                                <span>Alt+1 quick fill, Alt+2 highlight, Alt+3 step-by-step explanations, and 14-day refund</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {srcs.length > 0 && (
                    <section className="pb-12 sm:pb-16">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6">
                            <p className="text-xs text-ink-muted leading-relaxed">
                                Sources checked {fmtDate(f.lastChecked)}:{" "}
                                {srcs.map((u, i) => (
                                    <span key={u}>
                                        <a href={u} target="_blank" rel="noopener noreferrer nofollow" className="underline underline-offset-2 hover:text-cobalt inline-flex items-center gap-0.5 transition-colors">
                                            {host(u)}<ExternalLink className="w-3 h-3" aria-hidden="true" />
                                        </a>
                                        {i < srcs.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                                . Vendor prices and features change over time; confirm current terms on {domain}. Report updates to support@examghost.com.
                            </p>
                        </div>
                    </section>
                )}

                {/* Section 6: Questions */}
                <section className="py-16 sm:py-20 bg-paper border-y border-ink/[0.08]">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-center mb-8">Questions</h2>
                        <div className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                            {faqs.map((q) => (
                                <details key={q.question} className="group py-4 sm:py-5">
                                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                        <h3 className="text-base sm:text-[17px] leading-snug group-hover:text-cobalt transition-colors">{q.question}</h3>
                                        <span className="w-8 h-8 rounded-full bg-surface-subtle border border-ink/[0.08] text-ink-muted grid place-items-center shrink-0 transition-colors group-open:bg-surface-dark group-open:text-white group-open:border-surface-dark">
                                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                                        </span>
                                    </summary>
                                    <p className="mt-3 pr-10 text-[15px] text-ink-muted leading-relaxed">{q.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {related.length > 0 && (
                    <section className="pt-12 pb-6">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                            <p className="text-sm font-semibold text-ink-muted mb-4">Related comparisons</p>
                            <ul className="flex flex-wrap justify-center gap-2">
                                {related.map((r) => (
                                    <li key={r.slug}>
                                        <Link href={`/${r.slug}`} className="inline-block rounded-full border border-ink/[0.12] bg-paper px-4 py-2 text-sm text-ink-secondary hover:border-cobalt hover:text-cobalt transition-colors">
                                            {r.name} vs ExamGhost
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link href="/compare" className="inline-block rounded-full bg-surface-dark text-white px-4 py-2 text-sm font-medium hover:bg-ink-secondary transition-colors">
                                        See all comparisons
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}
            </main>

            <FinalCta />
            <Footer hideCta />
        </div>
    );
}
