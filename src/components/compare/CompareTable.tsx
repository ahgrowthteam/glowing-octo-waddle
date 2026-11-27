"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";

export interface CompareRow {
    slug: string;
    name: string;
    domain: string;
    priceSummary: string | null;
    monthly: number | null;
    freeTier: string | null;
    platforms: string[];
    platformCount: number;
    hasFree: boolean;
    mentionsCanvas: boolean;
    kind: "answers" | "study" | "blocker" | "other";
    verified: boolean;
    confidence: "high" | "medium" | "low";
}

type Sort = "name" | "price" | "platforms";

function Pills({ r }: { r: CompareRow }) {
    if (r.kind !== "blocker" && r.verified) return null;
    return (
        <span className="mt-1.5 flex flex-wrap gap-1.5">
            {r.kind === "blocker" && (
                <span className="rounded-md bg-amber-100/90 border border-amber-300/60 text-amber-950 px-2 py-0.5 text-[11px] font-medium">
                    Tab-activity blocker
                </span>
            )}
            {!r.verified && (
                <span className="rounded-md bg-surface-subtle border border-ink/[0.08] text-ink-secondary px-2 py-0.5 text-[11px] font-medium">
                    Not verified yet
                </span>
            )}
        </span>
    );
}

export default function CompareTable({ rows, examghost }: { rows: CompareRow[]; examghost: { priceSummary: string; freeTier: string; platformCount: number } }) {
    const [q, setQ] = useState("");
    const [onlyFree, setOnlyFree] = useState(false);
    const [onlyCanvas, setOnlyCanvas] = useState(false);
    const [onlyAnswers, setOnlyAnswers] = useState(false);
    const [sort, setSort] = useState<Sort>("name");

    const shown = useMemo(() => {
        const needle = q.trim().toLowerCase();
        let out = rows.filter(
            (r) =>
                (!needle || r.name.toLowerCase().includes(needle) || r.domain.includes(needle)) &&
                (!onlyFree || r.hasFree) &&
                (!onlyCanvas || r.mentionsCanvas) &&
                (!onlyAnswers || r.kind === "answers" || r.kind === "study")
        );
        out = [...out].sort((a, b) => {
            if (sort === "platforms") {
                return b.platformCount === a.platformCount ? a.name.localeCompare(b.name) : b.platformCount - a.platformCount;
            }
            if (sort === "price") {
                const av = a.monthly ?? Infinity, bv = b.monthly ?? Infinity;
                return av === bv ? a.name.localeCompare(b.name) : av - bv;
            }
            return a.name.localeCompare(b.name);
        });
        return out;
    }, [rows, q, onlyFree, onlyCanvas, onlyAnswers, sort]);

    const resetFilters = () => {
        setQ("");
        setOnlyFree(false);
        setOnlyCanvas(false);
        setOnlyAnswers(false);
        setSort("name");
    };

    const chip = (on: boolean) =>
        `rounded-full border px-4 py-2 min-h-[40px] text-sm font-medium transition-colors inline-flex items-center ${
            on
                ? "bg-surface-dark text-white border-surface-dark"
                : "bg-paper border-ink/[0.12] text-ink-secondary hover:border-cobalt/40 hover:text-ink"
        }`;

    return (
        <div>
            <div className="rounded-2xl bg-paper border border-ink/[0.09] surface-card p-3 sm:p-4 mb-5">
                <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
                    <label className="relative md:w-72">
                        <span className="sr-only">Search extensions</span>
                        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search by name"
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
                    <div className="flex flex-wrap gap-2 items-center">
                        <button type="button" aria-pressed={onlyFree} onClick={() => setOnlyFree((v) => !v)} className={chip(onlyFree)}>Has a free tier or trial</button>
                        <button type="button" aria-pressed={onlyAnswers} onClick={() => setOnlyAnswers((v) => !v)} className={chip(onlyAnswers)}>AI answer tools only</button>
                        <button type="button" aria-pressed={onlyCanvas} onClick={() => setOnlyCanvas((v) => !v)} className={chip(onlyCanvas)}>Mentions Canvas</button>
                        <label className="text-sm text-ink-muted flex items-center gap-2">
                            <span>Sort</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value as Sort)}
                                className="select-chevron appearance-none rounded-xl border border-ink/[0.12] bg-paper pl-3.5 pr-9 py-2 min-h-[40px] text-sm font-medium text-ink focus:outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20 transition-colors"
                            >
                                <option value="name">Name A–Z</option>
                                <option value="price">Lowest listed price</option>
                                <option value="platforms">Most platforms named</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <p className="text-xs font-medium text-ink-muted mb-3" aria-live="polite">
                Showing {shown.length} of {rows.length} extensions plus ExamGhost
            </p>

            {/* Desktop table (no overflow-hidden so sticky thead works cleanly) */}
            <div className="hidden md:block bg-paper rounded-2xl border border-ink/[0.09] surface-card">
                <table className="w-full text-left text-[15px] border-separate border-spacing-0">
                    <thead className="sticky top-20 z-10 text-xs font-semibold text-ink-muted">
                        <tr>
                            <th className="px-5 py-3.5 font-semibold bg-surface-subtle/95 backdrop-blur-sm border-b border-ink/[0.09] rounded-tl-2xl">Extension</th>
                            <th className="px-5 py-3.5 font-semibold bg-surface-subtle/95 backdrop-blur-sm border-b border-ink/[0.09]">Price (as listed)</th>
                            <th className="px-5 py-3.5 font-semibold bg-surface-subtle/95 backdrop-blur-sm border-b border-ink/[0.09]">Free tier / trial</th>
                            <th className="px-5 py-3.5 font-semibold bg-surface-subtle/95 backdrop-blur-sm border-b border-ink/[0.09]">Platforms</th>
                            <th className="px-5 py-3.5 bg-surface-subtle/95 backdrop-blur-sm border-b border-ink/[0.09] rounded-tr-2xl">
                                <span className="sr-only">Action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-cobalt-soft/50">
                            <th scope="row" className={`px-5 py-4 font-display font-bold border-l-[3px] border-l-cobalt border-b border-ink/[0.08] ${shown.length === 0 ? "rounded-bl-2xl" : ""}`}>
                                <span>ExamGhost</span>
                                <span className="ml-2 inline-flex items-center rounded-md bg-cobalt text-white px-2 py-0.5 text-[11px] font-sans font-semibold align-middle">
                                    Our tool
                                </span>
                            </th>
                            <td className="px-5 py-4 font-medium text-ink border-b border-ink/[0.08]">{examghost.priceSummary}</td>
                            <td className="px-5 py-4 font-medium text-ink border-b border-ink/[0.08]">{examghost.freeTier}</td>
                            <td className="px-5 py-4 text-ink border-b border-ink/[0.08]">
                                <span className="font-semibold">{examghost.platformCount} named</span> plus any page via Alt+S screenshot
                            </td>
                            <td className={`px-5 py-4 text-right border-b border-ink/[0.08] ${shown.length === 0 ? "rounded-br-2xl" : ""}`}>
                                <Link href="/" className="inline-flex items-center gap-1 font-semibold text-cobalt hover:underline underline-offset-4">
                                    Home
                                </Link>
                            </td>
                        </tr>
                        {shown.map((r, idx) => {
                            const isLast = idx === shown.length - 1;
                            return (
                                <tr key={r.slug} className="align-top hover:bg-surface-subtle/50 transition-colors">
                                    <th scope="row" className={`px-5 py-4 font-display font-semibold ${!isLast ? "border-b border-ink/[0.06]" : "rounded-bl-2xl"}`}>
                                        {r.name}
                                        <span className="block text-xs font-sans font-normal text-ink-muted mt-0.5">{r.domain}</span>
                                        <Pills r={r} />
                                    </th>
                                    <td className={`px-5 py-4 text-ink-secondary max-w-[260px] ${!isLast ? "border-b border-ink/[0.06]" : ""}`}>
                                        {r.priceSummary ?? <span className="text-ink-muted">Not stated</span>}
                                    </td>
                                    <td className={`px-5 py-4 text-ink-secondary max-w-[220px] ${!isLast ? "border-b border-ink/[0.06]" : ""}`}>
                                        {r.freeTier ?? <span className="text-ink-muted">Not stated</span>}
                                    </td>
                                    <td className={`px-5 py-4 text-ink-secondary max-w-[200px] ${!isLast ? "border-b border-ink/[0.06]" : ""}`}>
                                        {r.platformCount ? (
                                            <>
                                                <span className="font-semibold text-ink">{r.platformCount} named:</span> {r.platforms.slice(0, 3).join(", ")}
                                                {r.platformCount > 3 ? "…" : ""}
                                            </>
                                        ) : (
                                            <span className="text-ink-muted">Not stated</span>
                                        )}
                                    </td>
                                    <td className={`px-5 py-4 text-right whitespace-nowrap ${!isLast ? "border-b border-ink/[0.06]" : "rounded-br-2xl"}`}>
                                        <Link href={`/${r.slug}`} className="inline-flex items-center gap-1 font-medium text-ink hover:text-cobalt transition-colors">
                                            Compare <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {shown.length === 0 && (
                    <div className="px-5 py-10 text-center text-ink-muted border-t border-ink/[0.06] rounded-b-2xl">
                        <p>No extensions match those filters.</p>
                        <button type="button" onClick={resetFilters} className="btn-soft mt-3 px-5 py-2 text-sm">
                            Reset filters
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
                <div className="rounded-2xl bg-cobalt-soft/60 border border-cobalt/30 border-l-[3px] border-l-cobalt p-4 space-y-2.5">
                    <p className="font-display font-bold flex items-center gap-2 text-ink">
                        ExamGhost
                        <span className="inline-flex items-center rounded-md bg-cobalt text-white px-2 py-0.5 text-[11px] font-sans font-semibold">
                            Our tool
                        </span>
                    </p>
                    <dl className="space-y-1.5 text-sm">
                        <div className="flex justify-between gap-3">
                            <dt className="text-xs font-medium text-ink-muted shrink-0">Price</dt>
                            <dd className="text-right font-medium text-ink">{examghost.priceSummary}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                            <dt className="text-xs font-medium text-ink-muted shrink-0">Free tier</dt>
                            <dd className="text-right text-ink-secondary">{examghost.freeTier}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                            <dt className="text-xs font-medium text-ink-muted shrink-0">Platforms</dt>
                            <dd className="text-right text-ink-secondary">{examghost.platformCount} named + Alt+S</dd>
                        </div>
                    </dl>
                </div>
                {shown.map((r) => (
                    <Link
                        key={r.slug}
                        href={`/${r.slug}`}
                        className="block rounded-2xl bg-paper border border-ink/[0.09] p-4 surface-card hover:border-cobalt/40 transition-colors space-y-2.5"
                    >
                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <p className="font-display font-semibold text-ink">{r.name}</p>
                                <ArrowRight className="w-4 h-4 text-ink-muted shrink-0" aria-hidden="true" />
                            </div>
                            <p className="text-xs text-ink-muted">{r.domain}</p>
                            <Pills r={r} />
                        </div>
                        <dl className="space-y-1.5 pt-2 border-t border-ink/[0.06] text-sm">
                            <div>
                                <dt className="text-[11px] font-medium text-ink-muted">Price</dt>
                                <dd className="text-ink-secondary">{r.priceSummary ?? "Price not stated"}</dd>
                            </div>
                            <div>
                                <dt className="text-[11px] font-medium text-ink-muted">Free tier</dt>
                                <dd className="text-ink-secondary">{r.freeTier ?? "Free tier not stated"}</dd>
                            </div>
                            <div>
                                <dt className="text-[11px] font-medium text-ink-muted">Platforms</dt>
                                <dd className="text-ink-secondary">
                                    {r.platformCount ? `${r.platformCount} named: ${r.platforms.slice(0, 3).join(", ")}${r.platformCount > 3 ? "…" : ""}` : "Not stated"}
                                </dd>
                            </div>
                        </dl>
                    </Link>
                ))}
                {shown.length === 0 && (
                    <div className="py-8 text-center text-ink-muted">
                        <p>No extensions match those filters.</p>
                        <button type="button" onClick={resetFilters} className="btn-soft mt-3 px-5 py-2 text-sm">
                            Reset filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
