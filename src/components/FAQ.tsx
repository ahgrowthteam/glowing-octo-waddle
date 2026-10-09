'use client';
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
            q: "What is the 2nd-Attempt Auto-Memory feature?",
            a: "For quizzes with multiple attempts allowed, ExamGhost remembers your previous submissions, saves all high-scoring answers, and automatically re-applies them on attempt #2 so you can quickly lock in a 100% score."
        },
        {
            q: "Is it safe from screen-share or proctoring extensions?",
            a: "ExamGhost is engineered with Shadow DOM isolation. Visual overlays are rendered in a protected UI layer that does not inject script artifacts into the school's webpage, keeping your activity discreet and private."
        },
        {
            q: "What is your refund policy?",
            a: "We offer a 100% money-back guarantee. If ExamGhost does not perform exactly as promised on your quizzes, contact our 24/7 Discord support team within 7 days for a hassle-free, immediate refund."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-slate-50/60 text-slate-900 border-b border-slate-200/80">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">

                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm mb-3">
                        <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700">
                            Got Questions?
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        Everything you need to know about stealth technology, Canvas logs, and our refund guarantee.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                                    isOpen 
                                        ? 'border-slate-300 bg-white shadow-sm' 
                                        : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                            >
                                <button
                                    className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                >
                                    <span className="font-semibold text-slate-900 text-sm sm:text-base pr-4">
                                        {faq.q}
                                    </span>
                                    <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-transform ${
                                        isOpen ? 'rotate-180 text-blue-600 bg-blue-50' : 'text-slate-400'
                                    }`}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
