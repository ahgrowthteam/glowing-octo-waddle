import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, ChevronDown, ExternalLink, Info } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/home/FinalCta";
import { INSTALL_URL, DEMO_URL } from "@/components/home/config";
import { COMPETITORS } from "@/data/competitors";
import { EXAMGHOST, allFacts, factsFor, isIndexable, monthlyFrom, type CompetitorFact } from "@/data/competitor-facts";
import { PLATFORMS_DATA } from "@/data/platforms";

// Comparison page for one competitor.
// Facts come from src/data/competitor-facts.generated.ts: what each vendor states on its own site or store
// listing, dated. Pages without verified facts fall back to a short page and stay noindex.

const EXAMGHOST_INCLUDES = [
    "Double-click answers on the quiz page",
    "Step-by-step explanations",
    "Alt+S screenshot solving for graphs and diagrams",
    "Scan the whole page",
    "Free tier: 5 solves a day, no card",
    "14-day money-back guarantee",
];

type Identity = { name: string; domain: string };

function identity(slug: string): Identity {
    const f = factsFor(slug);
    if (f) return { name: f.name, domain: f.domain };
    const c = COMPETITORS[slug];
    if (!c) throw new Error(`No competitor data for ${slug}`);
    return { name: c.name, domain: c.domain };
}

function fmtDate(iso: string) {
    return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
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

// Plain sentences computed from the verified data, so every page says something different and true.
function atAGlance(f: CompetitorFact): string[] {
    const out: string[] = [];
    const m = monthlyFrom(f);
    const yearly = 99 / 12;
    out.push(
        m != null
            ? `${f.name}'s lowest listed paid plan works out to about $${m.toFixed(2)} a month. ExamGhost's yearly plan works out to $${yearly.toFixed(2)} a month (or $19 month to month).`
            : `We couldn't record a clear price for ${f.name} from ${f.domain}. ExamGhost lists $19 a month, $99 a year or $199 lifetime.`
    );
    const free = f.freeTier ?? f.trial;
    out.push(
        free
            ? `${f.name} lists this free option: ${free}. ExamGhost's free plan is ${EXAMGHOST.freeTier}.`
            : `We didn't record a free option for ${f.name}. ExamGhost's free plan is ${EXAMGHOST.freeTier}.`
    );
    if (f.platforms.length)
        out.push(`${f.name} names ${f.platforms.length} platform${f.platforms.length === 1 ? "" : "s"} on its site. ExamGhost names ${PLATFORMS_DATA.length} and also solves any page you can see by screenshot.`);
    return out;
}

// Comparable products closest in price, so "alternatives" differ page to page.
function alternativesFor(slug: string): CompetitorFact[] {
    const me = factsFor(slug);
    const pool = allFacts().filter((x) => x.slug !== slug && isIndexable(x) && x.purpose !== "study-tools");
    const base = me ? monthlyFrom(me) : null;
    const dist = (x: CompetitorFact) => {
        const v = monthlyFrom(x);
        return base != null && v != null ? Math.abs(v - base) : v == null ? 1000 : 500;
    };
    return [...pool].sort((a, b) => dist(a) - dist(b) || a.name.localeCompare(b.name)).slice(0, 5);
}

function faqsFor(slug: string) {
    const { name, domain } = identity(slug);
    const f = factsFor(slug);
    const theirFree = f ? f.freeTier ?? f.trial : null;
    const theirPrice = f?.priceSummary ?? null;
    const theirPlatforms = f && f.platforms.length ? f.platforms : null;
    const listsCanvas = !!theirPlatforms?.some((p) => /canvas/i.test(p));
    const theirFeatures = f && f.features.length ? list(f.features, 2) : null;
    return [
        {
            q: `Is ${name} free?`,
            a: theirFree
                ? `${name} says: ${theirFree}. Details can change, so check ${domain}. ExamGhost has a free tier with ${EXAMGHOST.freeTier}.`
                : `Check ${domain} for ${name}'s current free options. ExamGhost has a free tier with ${EXAMGHOST.freeTier}.`,
        },
        {
            q: `How much does ${name} cost compared with ExamGhost?`,
            a: theirPrice
                ? `${name}: ${theirPrice} (as listed on ${domain}). ExamGhost: ${EXAMGHOST.priceSummary}, with a ${EXAMGHOST.refund.toLowerCase()}.`
                : `See ${domain} for ${name}'s current pricing. ExamGhost: ${EXAMGHOST.priceSummary}, with a ${EXAMGHOST.refund.toLowerCase()}.`,
        },
        {
            q: `Does ${name} work on Canvas?`,
            a: listsCanvas
                ? `${name} lists Canvas among its supported platforms (${domain}). ExamGhost works on Canvas with double-click or the Alt+S screenshot snip.`
                : theirPlatforms
                ? `In what we checked, ${name} lists ${list(theirPlatforms!, 6)} and does not mention Canvas, so confirm on ${domain}. ExamGhost works on Canvas with double-click or the Alt+S screenshot snip.`
                : `Check ${domain} for ${name}'s supported platforms. ExamGhost works on Canvas with double-click or the Alt+S screenshot snip.`,
        },
        {
            q: `What's the main difference between ${name} and ExamGhost?`,
            a:
                f?.purpose === "activity-hiding"
                    ? `${name} is sold mainly as a tab-activity blocker, while ExamGhost is an AI answer tool, so they do different jobs. See ${domain} for what ${name} offers.`
                    : theirFeatures
                    ? `${name} lists: ${theirFeatures}. ExamGhost focuses on double-click answers with a step-by-step explanation, an Alt+S screenshot snip for graphs and diagrams, and a free tier you can test first.`
                    : `ExamGhost focuses on double-click answers with a step-by-step explanation, an Alt+S screenshot snip for graphs and diagrams, and a free tier you can test first. See ${domain} for what ${name} offers.`,
        },
        {
            q: `Can I switch from ${name} to ExamGhost?`,
            a: `Yes. Install ExamGhost from the Chrome Web Store, start on the free plan, and remove ${name} from chrome://extensions if you no longer need it.`,
        },
        {
            q: "Can I try ExamGhost before paying?",
            a: "Yes. Every account gets 5 free solves a day with no credit card, and paid plans come with a 14-day money-back guarantee.",
        },
    ];
}

export function leanCompareMetadata(slug: string): Metadata {
    const { name } = identity(slug);
    const f = factsFor(slug);
    const long = `${name} vs ExamGhost: Features, Pricing & Free Plan`;
    const title = long.length <= 60 ? long : `${name} vs ExamGhost (2026 Comparison)`;
    const description = `${name} vs ExamGhost compared on free tier, pricing, supported LMS platforms, screenshot solving and explanations. Free plan available.`;
    const url = `https://www.examghost.com/${slug}`;
    return {
        title: { absolute: title },
        description,
        alternates: { canonical: url },
        // Only like-for-like pages backed by verified data are indexable.
        ...(!isIndexable(f) ? { robots: { index: false, follow: true } } : {}),
        openGraph: { title, description, url, siteName: "ExamGhost", type: "website", locale: "en_US", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }] },
        twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
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
    return (
        <section className="pb-16 sm:pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
                        <Row label="Price" themName={f.name} them={f.priceSummary ?? unknown} us={EXAMGHOST.priceSummary} />
                        <Row label="Free tier / trial" themName={f.name} them={f.freeTier ?? f.trial ?? unknown} us={EXAMGHOST.freeTier} />
                        <Row
                            label="Works on"
                            themName={f.name}
                            them={f.platforms.length ? `${f.platforms.length} named: ${list(f.platforms, 6)}${f.platforms.length > 6 ? "…" : ""}` : unknown}
                            us={`${PLATFORMS_DATA.length} named (Canvas, Blackboard, Moodle, D2L Brightspace and more), plus any page via Alt+S screenshot`}
                        />
                        {!hides && (
                            <Row
                                label="Any page, by screenshot"
                                themName={f.name}
                                them={f.features.some((x) => /screenshot|snap|image|photo|camera|crop|snip/i.test(x)) ? "Screenshot or image solving listed" : <span className="text-ink-muted">Not in the features we recorded; check {f.domain}</span>}
                                us="Yes: press Alt+S and drag a box around anything you can see"
                            />
                        )}
                        <Row label="Browser" themName={f.name} them={list(f.browsers, 4) ?? unknown} us={EXAMGHOST.browsers.join(", ")} />
                        {!hides && (
                            <Row
                                label="Features"
                                themName={f.name}
                                them={
                                    f.features.length ? (
                                        <ul className="space-y-1.5">
                                            {f.features.slice(0, 4).map((x) => (
                                                <li key={x} className="flex gap-2">
                                                    <Check className="w-4 h-4 mt-1 text-ink-muted shrink-0" aria-hidden="true" />
                                                    <span>{x}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : unknown
                                }
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
                        <Row label="Refund" themName={f.name} them={<span className="text-ink-muted">See {f.domain}</span>} us={EXAMGHOST.refund} />
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default function LeanCompare({ slug }: { slug: string }) {
    const { name, domain } = identity(slug);
    const f = factsFor(slug);
    const faqs = faqsFor(slug);
    const glance = f ? atAGlance(f) : [];
    const alternatives = alternativesFor(slug);
    const related = allFacts().filter((x) => x.slug !== slug && isIndexable(x)).slice(0, 6);
    const srcs = f ? f.sources.filter((u) => /^https?:/.test(u)).slice(0, 4) : [];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `https://www.examghost.com/${slug}#webpage`,
                url: `https://www.examghost.com/${slug}`,
                name: `${name} vs ExamGhost`,
                inLanguage: "en-US",
                isPartOf: { "@id": "https://www.examghost.com/#website" },
                about: [{ "@type": "SoftwareApplication", name: "ExamGhost", url: "https://www.examghost.com" }, { "@type": "SoftwareApplication", name, url: f ? f.url : `https://${domain}` }],
                ...(f ? { dateModified: f.lastChecked, citation: srcs } : {}),
                breadcrumb: { "@id": `https://www.examghost.com/${slug}#breadcrumb` },
            },
            { "@type": "FAQPage", mainEntity: faqs.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.a } })) },
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
        <main id="main-content" className="min-h-screen bg-cream text-ink page-glow">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <section className="pt-12 sm:pt-16 pb-10 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <nav aria-label="Breadcrumb" className="text-xs font-medium text-ink-muted mb-4">
                        <Link href="/compare" className="hover:text-cobalt transition-colors">Compare</Link> <span aria-hidden="true">/</span> {name}
                    </nav>
                    <h1 className="font-display text-[36px] sm:text-[54px] font-bold tracking-[-0.035em] leading-[1.05] text-ink mb-5">
                        {name} <span className="text-ink-muted">vs</span> ExamGhost
                    </h1>
                    <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-xl mx-auto mb-8 leading-relaxed">
                        {f
                            ? `We make ExamGhost, so we're not neutral. This is price, free tier, platforms and features side by side, from each product's own site (checked ${fmtDate(f.lastChecked)}).`
                            : `Compare ${name} (${domain}) and ExamGhost, then try ExamGhost free.`}
                    </p>
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

            {f && (f.purpose === "activity-hiding" || !f.verified) && (
                <section className="pb-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <div className="flex gap-3 rounded-2xl border border-amber-300/70 bg-amber-50/90 px-5 py-4 text-[15px] text-ink-secondary leading-relaxed">
                            <Info className="w-5 h-5 mt-0.5 shrink-0 text-amber-700" aria-hidden="true" />
                            <p>
                                {f.purpose === "activity-hiding"
                                    ? `${f.name} is sold mainly as a tab-activity blocker, not an AI answer tool, so this isn't a like-for-like comparison. Whatever you use, check your course's rules first: many instructors restrict AI and blocking tools on graded work.`
                                    : `We couldn't read ${f.domain} directly (it blocked automated access), so price and features aren't verified here. See ${f.domain} or its Chrome Web Store listing for current details.`}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {f && f.verified && (
                <section className="pb-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <div className="bg-paper rounded-2xl border border-ink/[0.09] border-l-[3px] border-l-cobalt p-6 sm:p-7 surface-card">
                            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] mb-2.5">{name} and ExamGhost at a glance</h2>
                            <p className="text-[15.5px] sm:text-[16px] text-ink-secondary leading-relaxed">{glance.join(" ")}</p>
                        </div>
                    </div>
                </section>
            )}

            {f ? (
                <Table f={f} />
            ) : (
                <section className="pb-16 sm:pb-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-4">
                        <div className="bg-paper rounded-2xl border border-ink/[0.09] surface-card p-6 sm:p-8">
                            <p className="text-xs font-semibold text-ink-muted mb-2">{name}</p>
                            <p className="font-display text-2xl font-bold tracking-tight mb-2">See {domain}</p>
                            <p className="text-sm text-ink-muted leading-relaxed">Check their site for current pricing and features. We haven&apos;t verified this product yet.</p>
                        </div>
                        <div className="dark-surface bg-surface-dark bg-dark-grid text-white rounded-2xl surface-dark-card border border-white/10 p-6 sm:p-8">
                            <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emeraldBrand" aria-hidden="true" />
                                ExamGhost
                            </p>
                            <p className="font-display text-2xl font-bold tracking-tight mb-2">{EXAMGHOST.priceSummary}</p>
                            <p className="text-sm text-white/70 leading-relaxed">{EXAMGHOST.freeTier}. {EXAMGHOST.refund}.</p>
                        </div>
                    </div>
                </section>
            )}

            {f && srcs.length > 0 && (
                <section className="pb-16 sm:pb-20 -mt-4">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <p className="text-xs text-ink-muted leading-relaxed">
                            Sources, as of {fmtDate(f.lastChecked)}:{" "}
                            {srcs.map((u, i) => (
                                <span key={u}>
                                    <a href={u} target="_blank" rel="noopener noreferrer nofollow" className="underline underline-offset-2 hover:text-cobalt inline-flex items-center gap-0.5 transition-colors">
                                        {host(u)}<ExternalLink className="w-3 h-3" aria-hidden="true" />
                                    </a>
                                    {i < srcs.length - 1 ? ", " : ""}
                                </span>
                            ))}
                            . Prices and features change, so check the vendor for the current offer. Spot something out of date? Email support@examghost.com.
                        </p>
                    </div>
                </section>
            )}

            {alternatives.length > 0 && isIndexable(f) && (
                <section className="pb-16 sm:pb-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] mb-2">Alternatives to {name}</h2>
                        <p className="text-ink-muted mb-6">Other quiz and homework helpers with a similar listed price, from our comparison.</p>
                        <div className="rounded-2xl border border-ink/[0.09] bg-paper overflow-hidden shadow-xs">
                            <ul className="grid sm:grid-cols-2 -mb-px -mr-px">
                                {alternatives.map((a) => (
                                    <li key={a.slug} className="border-b border-r border-ink/[0.08]">
                                        <Link
                                            href={`/${a.slug}`}
                                            className="group flex items-center justify-between gap-3 h-full bg-paper p-4 sm:p-5 hover:bg-cobalt-soft/40 transition-colors"
                                        >
                                            <div className="min-w-0">
                                                <span className="font-display font-semibold text-ink group-hover:text-cobalt transition-colors">{a.name}</span>
                                                <span className="block text-sm text-ink-muted mt-1 line-clamp-2">{a.priceSummary ?? "Price not stated"}</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 shrink-0 text-ink-muted group-hover:text-cobalt transition-all group-hover:translate-x-0.5" aria-hidden="true" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            <section className="py-16 sm:py-20 bg-surface-subtle/75 border-y border-ink/[0.08]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-center mb-8">What you get with ExamGhost</h2>
                    <ul className="grid sm:grid-cols-2 gap-px bg-ink/[0.08] rounded-2xl border border-ink/[0.09] overflow-hidden shadow-xs">
                        {EXAMGHOST_INCLUDES.map((t) => (
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
                        {faqs.map((q) => (
                            <details key={q.q} className="group py-4 sm:py-5">
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-base sm:text-[17px] leading-snug group-hover:text-cobalt transition-colors">{q.q}</h3>
                                    <span className="w-8 h-8 rounded-full bg-surface-subtle border border-ink/[0.08] text-ink-muted grid place-items-center shrink-0 transition-colors group-open:bg-surface-dark group-open:text-white group-open:border-surface-dark">
                                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                                    </span>
                                </summary>
                                <p className="mt-3 pr-10 text-[15px] text-ink-muted leading-relaxed">{q.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {related.length > 0 && (
                <section className="pt-12 pb-6">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <p className="text-sm font-semibold text-ink-muted mb-4">More comparisons</p>
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

            <FinalCta />
            <Footer hideCta />
        </main>
    );
}
