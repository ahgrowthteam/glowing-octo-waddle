'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "Does ExamGhost bypass Canvas quiz audit logs?",
            a: "Yes. When you take a Canvas quiz, Canvas listens for window 'blur' and 'visibilitychange' events. Every time you leave the page, Canvas logs: 'Stopped viewing the Canvas quiz-taking page'. ExamGhost intercepts these browser listeners at the DOM level, ensuring Canvas continues receiving an uninterrupted 'active' heartbeat. Your professor's log shows zero suspicious leaves."
        },
        {
            q: "Can Canvas or professors see when I switch tabs or use split screen?",
            a: "No. Because ExamGhost blocks tab-switch event emission, Canvas cannot detect whether you have split screen active, another browser window open, or background tabs running. To the Canvas server, your quiz tab remains in focus the entire duration."
        },
        {
            q: "How does ExamGhost solve questions without copy-pasting?",
            a: "You never need to copy, paste, or switch windows. Simply press your secret keyboard shortcut (⌘ + Shift + X or Ctrl + Shift + X) or double-tap the question. ExamGhost reads the question text and options directly from the page DOM and highlights the correct answer in under 1.2 seconds."
        },
        {
            q: "Can it solve math equations, chemistry diagrams, and locked questions?",
            a: "Yes! Using Snap-It (⌘ + Shift + S), you can drag a crosshair crop box around any mathematical graph, organic chemistry molecular structure, or locked image on your screen. Our multimodal vision AI reads the image and returns the solution with step-by-step reasoning."
        },
        {
            q: "Does it work on Canvas New Quizzes and Classic Quizzes?",
            a: "Yes. ExamGhost supports both Canvas Classic Quizzes and Canvas New Quizzes, as well as Blackboard Learn & Ultra, D2L Brightspace, Moodle, McGraw-Hill Connect, Pearson MyLab, and Google Classroom."
        },
        {
            q: "What is the Stealth Opacity Dial (⌘ + B)?",
            a: "You can adjust the HUD opacity from 100% visible to 5% ghost whisper mode. At 5%, answers are only visible when viewed straight-on from inches away, making it completely impossible for teachers walking behind you to notice anything on your screen."
        },
        {
            q: "Is it safe from screen-share or proctoring extensions?",
            a: "ExamGhost is engineered with Shadow DOM isolation. Visual overlays are rendered in a protected UI layer that does not inject script artifacts into the school's webpage, keeping your activity discreet, sandboxed, and private."
        },
        {
            q: "What is your refund policy?",
            a: "We offer a 100% money-back guarantee. If ExamGhost does not perform exactly as promised on your quizzes, contact our 24/7 Discord support team within 14 days for a hassle-free, immediate refund."
        }
    ];

    return (
        <section id="faq" className="py-20 md:py-32 bg-cream text-ink border-b border-black/5">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">

                {/* Section Head (OneMacApp Style) */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>FAQ</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Good questions.<br />
                        Short answers.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Everything you need to know about stealth technology, SpeedGrader logs, and our refund guarantee.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-3.5">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`rounded-2xl border transition-all duration-200 bg-white ${
                                    isOpen
                                        ? 'border-black/15 shadow-sm'
                                        : 'border-black/5 hover:border-black/10'
                                }`}
                            >
                                <h3>
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-ink focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.q}</span>
                                        <span className={`w-8 h-8 rounded-full bg-[#faf8f4] flex items-center justify-center shrink-0 text-ink transition-transform duration-200 ${
                                            isOpen ? 'rotate-180 bg-ink text-white' : ''
                                        }`}>
                                            <ChevronDown className="w-4 h-4" />
                                        </span>
                                    </button>
                                </h3>

                                {isOpen && (
                                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-ink-secondary leading-relaxed border-t border-black/5 mt-1">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
