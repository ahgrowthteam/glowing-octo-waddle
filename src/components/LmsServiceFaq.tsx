'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export interface LmsFaqItem {
    id?: string;
    category: 'stealth' | 'ocr' | 'platforms' | 'workflow';
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
    const [faqCategory, setFaqCategory] = useState<'all' | 'stealth' | 'ocr' | 'platforms'>('all');

    const allIndices = faqs.map((_, i) => i);

    return (
        <div
            id="lms-faq"
            className="max-w-4xl mx-auto space-y-8"
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <p className="eyebrow justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>{platformName.toUpperCase()} FAQ &amp; TECHNICAL REFERENCE</span>
                </p>
                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.08]">
                    Good questions.<br />
                    Verified answers.
                </h2>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                    {subtitle}
                </p>
            </div>

            {/* Interactive Category Filter Bar + Expand All Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2 rounded-2xl border border-black/8 shadow-2xs">
                <div className="flex flex-wrap items-center gap-1">
                    {[
                        { id: 'all', label: `All Questions (${faqs.length})` },
                        { id: 'stealth', label: 'Stealth & Event Logs' },
                        { id: 'ocr', label: 'Snap-It OCR & Math' },
                        { id: 'platforms', label: 'Modes & Free Trial' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setFaqCategory(tab.id as 'all' | 'stealth' | 'ocr' | 'platforms')}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                faqCategory === tab.id
                                    ? 'bg-ink text-white shadow-2xs'
                                    : 'text-ink-secondary hover:text-ink hover:bg-black/5'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => setOpenFaqs(openFaqs.length === faqs.length ? [0] : allIndices)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold text-ink-secondary hover:text-ink hover:bg-black/5 transition-colors cursor-pointer"
                >
                    {openFaqs.length === faqs.length ? 'Collapse all' : `Expand all ${faqs.length}`}
                </button>
            </div>

            {/* FAQ Accordion Cards (All items remain mounted in SSR DOM for Google & AI Bots) */}
            <div className="space-y-3">
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
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                            className={`rounded-2xl bg-white border transition-all duration-200 ${
                                isOpen
                                    ? 'border-black/15 shadow-soft'
                                    : 'border-black/8 hover:border-black/15'
                            } ${isVisibleCategory ? 'block' : 'sr-only'}`}
                        >
                            <h3>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenFaqs((prev) =>
                                            prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
                                        )
                                    }
                                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-ink cursor-pointer"
                                    aria-expanded={isOpen}
                                    aria-controls={`${itemId}-answer`}
                                >
                                    <div className="flex flex-wrap items-center gap-2.5 pr-2">
                                        <span itemProp="name">{questionText}</span>
                                        {faq.badge && (
                                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${faq.badgeBg || 'bg-black/5 text-ink-secondary'}`}>
                                                {faq.badge}
                                            </span>
                                        )}
                                    </div>
                                    <span
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                                            isOpen
                                                ? 'rotate-180 bg-ink text-white'
                                                : 'bg-[#faf8f4] text-ink border border-black/6'
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
                                    <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-black/6">
                                        <div
                                            itemProp="text"
                                            className="faq-answer text-xs sm:text-sm text-ink-secondary leading-relaxed"
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

            <div className="text-center pt-2">
                <Link
                    prefetch={false}
                    href="/canvas-quiz-solver-free-demo"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-ink-secondary hover:text-ink underline decoration-black/25 hover:decoration-ink underline-offset-4 transition-colors"
                >
                    <span>Want to test a full 5-question exam sandbox? Open the Live Exam Simulator →</span>
                </Link>
            </div>
        </div>
    );
}
