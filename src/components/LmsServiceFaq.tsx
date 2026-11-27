'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export interface LmsFaqItem {
    id?: string;
    category: 'focus' | 'ocr' | 'platforms' | 'workflow';
    badge?: string;
    badgeBg?: string;
    q?: string;
    a?: React.ReactNode;
    question?: string;
    answer?: React.ReactNode;
    plainTextAnswer?: string;
}

interface LmsServiceFaqProps {
    platformName: string;
    subtitle: string;
    faqs: LmsFaqItem[];
}

export default function LmsServiceFaq({ platformName, subtitle, faqs }: LmsServiceFaqProps) {
    const [openFaqs, setOpenFaqs] = useState<number[]>([0, 1, 2]);
    const [faqCategory, setFaqCategory] = useState<'all' | 'focus' | 'ocr' | 'platforms'>('all');

    const allIndices = faqs.map((_, i) => i);

    return (
        <div
            id="lms-faq"
            className="max-w-4xl mx-auto space-y-8"
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            {/* Section Header */}
            <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-cobalt">
                    <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                    <span>{platformName} FAQ &amp; technical reference</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-ink leading-[1.06]">
                    Good questions. Verified answers.
                </h2>
                <p className="text-sm sm:text-base text-ink-muted max-w-[62ch] leading-relaxed">
                    {subtitle}
                </p>
            </div>

            {/* Interactive Category Filter Bar + Expand All Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-paper p-2 rounded-2xl border border-ink/[0.09] shadow-xs">
                <div role="tablist" aria-label="Filter FAQ categories" className="flex flex-wrap items-center gap-1">
                    {[
                        { id: 'all', label: `All Questions (${faqs.length})` },
                        { id: 'focus', label: 'Focus & Event Logs' },
                        { id: 'ocr', label: 'Snap-It OCR & Math' },
                        { id: 'platforms', label: 'Modes & Free Trial' },
                    ].map((tab) => {
                        const isSelected = faqCategory === tab.id;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                role="tab"
                                aria-selected={isSelected}
                                onClick={() => setFaqCategory(tab.id as 'all' | 'focus' | 'ocr' | 'platforms')}
                                className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                                    isSelected
                                        ? 'bg-surface-dark text-white'
                                        : 'text-ink-secondary hover:text-ink hover:bg-surface-subtle'
                                }`}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                <button
                    type="button"
                    onClick={() => setOpenFaqs(openFaqs.length === faqs.length ? [0] : allIndices)}
                    className="min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-ink-secondary hover:text-cobalt hover:bg-surface-subtle transition-colors cursor-pointer"
                >
                    {openFaqs.length === faqs.length ? 'Collapse all' : `Expand all ${faqs.length}`}
                </button>
            </div>

            {/* Ruled Editorial Accordion (All items stay in SSR DOM; hidden items are removed from Tab order) */}
            <div className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                {faqs.map((faq, idx) => {
                    const isOpen = openFaqs.includes(idx);
                    const isVisibleCategory =
                        faqCategory === 'all' ||
                        faq.category === faqCategory ||
                        (faqCategory === 'platforms' && faq.category === 'workflow');
                    const itemId = faq.id || `faq-item-${idx}`;
                    const questionText = faq.q || faq.question || '';
                    const answerContent = faq.a || faq.answer || '';
                    return (
                        <div
                            key={itemId}
                            id={itemId}
                            hidden={!isVisibleCategory}
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                            className={isVisibleCategory ? 'py-4 sm:py-5' : 'hidden'}
                        >
                            <h3>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenFaqs((prev) =>
                                            prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
                                        )
                                    }
                                    className="group w-full text-left flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-[17px] text-ink cursor-pointer"
                                    aria-expanded={isOpen}
                                    aria-controls={`${itemId}-answer`}
                                >
                                    <div className="flex flex-wrap items-center gap-2.5 pr-2">
                                        <span itemProp="name" className="group-hover:text-cobalt transition-colors leading-snug">
                                            {questionText}
                                        </span>
                                        {faq.badge && (
                                            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${faq.badgeBg || 'bg-surface-subtle text-ink-secondary border border-ink/[0.08]'}`}>
                                                {faq.badge}
                                            </span>
                                        )}
                                    </div>
                                    <span
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-200 ${
                                            isOpen
                                                ? 'rotate-180 bg-surface-dark text-white border-surface-dark'
                                                : 'bg-surface-subtle text-ink-muted border-ink/[0.08]'
                                        }`}
                                        aria-hidden="true"
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </span>
                                </button>
                            </h3>
                            <div
                                id={`${itemId}-answer`}
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                                className={`grid transition-all duration-200 ease-out ${
                                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="pt-3 pr-10">
                                        <div
                                            itemProp="text"
                                            className="faq-answer max-w-[68ch] text-[15px] text-ink-muted leading-relaxed"
                                        >
                                            {answerContent}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="pt-2">
                <Link
                    prefetch={false}
                    href="/canvas-quiz-solver-free-demo"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary hover:text-cobalt underline decoration-ink/25 hover:decoration-cobalt underline-offset-4 transition-colors"
                >
                    <span>Want to test a full 5-question exam sandbox? Open the Live Exam Simulator</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
}
