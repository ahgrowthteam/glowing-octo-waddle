'use client';
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
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
        <section id="faq" className="py-24 bg-[#070b14] text-white relative border-b border-white/5">
            <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600/10 border border-blue-500/30 rounded-full mb-4">
                        <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                            Clear Answers to Real Questions
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto">
                        Everything you need to know about stealth technology, Canvas logs, and our 100% working guarantee.
                    </p>
                </motion.div>

                <div className="space-y-3.5">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                                openIndex === idx 
                                    ? 'border-blue-500/40 bg-white/[0.04] shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                                    : 'border-white/5 bg-white/[0.015] hover:border-white/10 hover:bg-white/[0.03]'
                            }`}
                        >
                            <button
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className="font-bold text-white text-sm sm:text-base pr-4">
                                    {faq.q}
                                </span>
                                <div className={`w-7 h-7 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                                    openIndex === idx ? 'rotate-180 text-blue-400 bg-blue-600/20' : 'text-slate-400'
                                }`}>
                                    <ChevronDown className="w-4 h-4" />
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-slate-300 leading-relaxed text-xs sm:text-sm border-t border-white/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
