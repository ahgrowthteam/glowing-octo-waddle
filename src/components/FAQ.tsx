'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "With a subscription, will I have access to the suite of ExamGhost Products?",
            a: "Yes, your Premium subscription grants you full access to all tools in our suite, including the Chrome Extension, iOS App, and web-based AI Solver."
        },
        {
            q: "Will my school be able to detect that I'm using this software?",
            a: "Absolutely not. ExamGhost uses proprietary Shadow DOM technology to overlay answers without injecting any readable code into the webpage, making it mathematically impossible for standard LMS platforms to detect."
        },
        {
            q: "What makes our AI tools stand out from our competitors?",
            a: "Speed and accuracy. We use custom-trained models specifically optimized for complex academic formatting, including multi-part questions, macro graphs, and complex formatting."
        },
        {
            q: "Can I get a refund if I don't like it?",
            a: "We offer a 7-day money-back guarantee. If you're not completely satisfied with the product, simply contact our support team on Discord for a full refund."
        },
        {
            q: "Is my chat and personal information about me kept safe?",
            a: "Yes. We employ AES-256 encryption and have strict zero-logging policies. We never store your IP address or connect your academic data to your personal identity."
        },
        {
            q: "Can the tools walk me through my homework questions?",
            a: "Yes! Beyond just giving you the answer, Premium includes Step-by-Step explanations that break down the logic so you can actually learn the material."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-[#FAFAFA] relative">
            <div className="max-w-3xl mx-auto px-4 relative z-10 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-[2.5rem] font-bold text-slate-800 tracking-tight mb-4 flex items-center justify-center gap-2">
                        Frequently Asked <span className="text-[#3b82f6]">Questions</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                            className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-slate-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]' : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'}`}
                        >
                            <button
                                className="w-full px-8 py-5 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className="font-bold text-slate-800 text-[15px] pr-8">{faq.q}</span>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-slate-400' : 'text-slate-300'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-6 text-slate-500 leading-relaxed font-medium text-[15px]">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
