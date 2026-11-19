// Verified competitor facts. Everything here comes from each product's own website or store listing on
// `lastChecked`, recorded neutrally. Unknown values are null. Never put marketing claims, ratings or
// accuracy numbers in here unless the vendor states them and `notes` says so.
//
// The data itself lives in competitor-facts.generated.ts (merged from research JSON by a script).
// This file holds the types and helpers.
import { FACTS } from "./competitor-facts.generated";

export type Purpose = "ai-answers" | "study-tools" | "activity-hiding" | "other";

export interface Plan {
    name: string;
    price: number | null;
    currency: string;
    period: string | null; // "week" | "month" | "year" | "once" | null
    notes: string | null;
}

export interface CompetitorFact {
    slug: string; // route slug, e.g. "canvaswizard-vs-examghost" (same as the FACTS key)
    name: string;
    domain: string;
    url: string;
    purpose: Purpose;
    /** false = we could not read the vendor's own site, so the page shows what we know and is noindex. */
    verified: boolean;
    priceSummary: string | null;
    plans: Plan[];
    freeTier: string | null;
    trial: string | null;
    platforms: string[];
    features: string[];
    storeUrl: string | null;
    browsers: string[];
    lastChecked: string; // ISO date
    sources: string[];
    confidence: "high" | "medium" | "low";
    notes: string | null;
}

export { FACTS };

export function factsFor(routeSlug: string): CompetitorFact | undefined {
    return FACTS[routeSlug];
}

export function allFacts(): CompetitorFact[] {
    return Object.values(FACTS).sort((a, b) => a.name.localeCompare(b.name));
}

/** Lowest monthly-equivalent price (USD) among PAID recurring plans (free plans don't count), for sorting. Null if unknown. */
export function monthlyFrom(f: CompetitorFact): number | null {
    const vals: number[] = [];
    for (const p of f.plans) {
        if (p.price == null || p.price <= 0 || p.currency !== "USD") continue;
        if (p.period === "month") vals.push(p.price);
        else if (p.period === "week" || p.period === "7 days") vals.push(p.price * 4.33);
        else if (p.period === "year") vals.push(p.price / 12);
    }
    return vals.length ? Math.min(...vals) : null;
}

export const EXAMGHOST = {
    name: "ExamGhost",
    domain: "examghost.com",
    priceSummary: "Free tier, then $19/month, $99/year or $199 lifetime",
    freeTier: "5 solves a day, no card",
    platforms: ["Canvas", "Blackboard", "Moodle", "D2L Brightspace", "Schoology", "Google Forms"],
    browsers: ["Chrome"],
    features: [
        "Double-click solve (multiple choice, multi-select, dropdown, short answer)",
        "Alt+S screenshot snip for graphs and diagrams",
        "Explain side panel with step-by-step reasoning",
        "Scan the whole page",
        "Equation and LaTeX reading",
    ],
    refund: "14-day money-back guarantee",
};

/**
 * A comparison page is indexable only when it is backed by verified data and is a like-for-like product.
 * Products sold mainly as tab-activity blockers (not answer tools) still get a page and a row on /compare,
 * but stay noindex so the site doesn't rank for those searches.
 */
export function isIndexable(f: CompetitorFact | undefined): boolean {
    return !!f && f.verified && f.purpose !== "activity-hiding";
}
