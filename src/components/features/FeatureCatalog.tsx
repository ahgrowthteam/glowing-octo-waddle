"use client";

import React, { useMemo, useState } from "react";
import { MousePointerClick, SlidersHorizontal, ListChecks, ScanLine, Power, Search, X, type LucideIcon } from "lucide-react";
import { FEATURES, FEATURE_CATEGORIES, type FeatureCategory } from "./featuresData";

const ICON: Record<FeatureCategory, LucideIcon> = {
    Solve: MousePointerClick,
    "Answer styles": SlidersHorizontal,
    "Question types": ListChecks,
    Screenshots: ScanLine,
    Control: Power,
};

export default function FeatureCatalog() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState<FeatureCategory | "All">("All");

    const shown = useMemo(() => {
        const needle = q.trim().toLowerCase();
        return FEATURES.filter(
            (f) =>
                (cat === "All" || f.category === cat) &&
                (!needle || `${f.title} ${f.body} ${f.key ?? ""} ${f.category}`.toLowerCase().includes(needle))
        );
    }, [q, cat]);

    const count = (c: FeatureCategory | "All") => (c === "All" ? FEATURES.length : FEATURES.filter((f) => f.category === c).length);
    const chip = (on: boolean) =>
        `rounded-full border px-4 py-2 min-h-[40px] text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
            on
                ? "bg-surface-dark text-white border-surface-dark"
                : "bg-paper border-ink/[0.12] hover:border-cobalt/40 text-ink-secondary hover:text-ink"
        }`;

    return (
        <div>
            <div className="rounded-2xl bg-paper border border-ink/[0.09] surface-card p-3 sm:p-4 mb-5">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                    <label className="relative lg:w-80">
                        <span className="sr-only">Search features</span>
                        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder={`Search ${FEATURES.length} features`}
                            className="w-full rounded-xl border border-ink/[0.12] bg-paper pl-10 pr-9 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20 transition-colors"
                        />
                        {q && (
                            <button
                                type="button"
                                onClick={() => setQ("")}
                                aria-label="Clear search"
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-surface-subtle text-ink-muted hover:text-ink transition-colors"
                            >
                                <X className="w-3.5 h-3.5" aria-hidden="true" />
                            </button>
                        )}
                    </label>
                    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
                        {(["All", ...FEATURE_CATEGORIES] as const).map((c) => (
                            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={chip(cat === c)}>
                                <span>{c}</span>
                                <span className={cat === c ? "font-mono text-xs text-white/70" : "font-mono text-xs text-ink-muted"}>{count(c)}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-xs font-medium text-ink-muted mb-4" aria-live="polite">
                Showing {shown.length} of {FEATURES.length} features
            </p>

            {shown.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-ink/[0.16] bg-paper/80 px-6 py-12 text-center text-ink-muted">
                    <p>No features match &ldquo;{q}&rdquo;. Try &ldquo;screenshot&rdquo;, &ldquo;mode&rdquo; or &ldquo;shortcut&rdquo;.</p>
                    <button
                        type="button"
                        onClick={() => { setQ(""); setCat("All"); }}
                        className="btn-soft mt-4 px-5 py-2 text-sm"
                    >
                        Reset filters
                    </button>
                </div>
            ) : (
                <div className="rounded-2xl border border-ink/[0.09] bg-paper shadow-xs overflow-hidden">
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 -mb-px -mr-px">
                        {shown.map((f) => {
                            const Icon = ICON[f.category];
                            return (
                                <li
                                    key={f.id}
                                    className="flex flex-col bg-paper p-6 border-b border-r border-ink/[0.08] hover:bg-surface-subtle/40 transition-colors"
                                >
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <span className="inline-flex items-center gap-2.5">
                                            <span className="grid place-items-center w-8 h-8 rounded-lg bg-surface-subtle border border-ink/[0.08] text-ink shrink-0">
                                                <Icon className="w-4 h-4" strokeWidth={1.9} aria-hidden="true" />
                                            </span>
                                            <span className="text-xs font-medium text-ink-muted">{f.category}</span>
                                        </span>
                                        {f.key && <kbd className="kbd-key shrink-0">{f.key}</kbd>}
                                    </div>
                                    <h3 className="font-display text-[17px] font-bold text-ink leading-snug mb-1.5">{f.title}</h3>
                                    <p className="text-[14.5px] text-ink-muted leading-relaxed">{f.body}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
