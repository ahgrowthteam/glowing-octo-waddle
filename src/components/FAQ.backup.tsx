'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "Is this truly undetectable?",
            a: "Yes. Our proprietary Shadow DOM technology ensures the extension's code never touches the actual webpage source code. Combined with our focus-protection scripts, it is mathematically impossible for Canvas, Blackboard, or any standard LMS to detect ExamGhost."
        },
        {
            q: "Does it work with Lockdown Browsers?",
            a: "ExamGhost is designed for standard browser-based exams (like Chrome, Edge, Safari). It is not currently compatible with invasive native applications like Respondus Lockdown Browser or Honorlock."
        },
        {
            q: "Is there a risk of being caught by my school?",
            a: "We prioritize your privacy above all else. We use AES-256 encryption, zero-logging policies, and never store your IP address or school information."
        },
        {
            q: "How fast are the answers?",
            a: "Almost instantly. Thanks to our edge-optimized OCR pipeline, questions are analyzed and solved in under 1.5 seconds on average."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white relative">
            <div className="max-w-3xl mx-auto px-4 relative z-10 w-full">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-primary/30 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                        >
                            <button
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className="font-bold text-slate-900 text-lg pr-8">{faq.q}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === idx ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                                    <ChevronDown className="w-4 h-4" />
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
