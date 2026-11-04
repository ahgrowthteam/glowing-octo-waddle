'use client';

import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What is ExamGhost?",
            a: "ExamGhost is an invisible AI quiz solver Chrome extension that helps students answer questions inline. Double-click any question on Canvas, Moodle, Blackboard, or 20+ other platforms and ExamGhost fills in the correct answer right on the page — with no tab-switching, no copy-pasting, and zero on-screen traces."
        },
        {
            q: "How does double-click solving work?",
            a: "Open your exam on any supported platform, ensure ExamGhost is toggled on (⌘+Shift+U), and double-click any question. ExamGhost reads the question text and options directly from the page DOM and highlights or auto-fills the correct answer in under a second. Need step-by-step reasoning? Press Alt+3 to switch to Explain Mode and open the full explanation card."
        },
        {
            q: "What are the 3 display modes?",
            a: "ExamGhost has three display modes you can pick in one click from the extension popup or via keyboard hotkeys: Invisible (Alt+1) applies the answer and copies it to clipboard with nothing shown on screen (0 cursor, 0 overlay, 100% screen-share safe); Stealth (Alt+2, default) auto-fills answers or marks the right option with a subtle ✓ tick; Explain (Alt+3) applies the answer and slides in a step-by-step reasoning card."
        },
        {
            q: "What are the 3 answer methods?",
            a: "Choose how the answer lands on your quiz: Auto-Fill selects the right radio, checkbox, dropdown, or text input directly on the page; Highlight marks the correct option with a subtle ✓ indicator so you click it yourself; Clipboard silently copies the answer so you can paste it into short-answer or essay fields."
        },
        {
            q: "Can ExamGhost solve image-based questions and locked content?",
            a: "Yes! Using Snap-It Sniping (Alt+S or clicking Launch Snip Tool in the popup), you can draw a crop box around any mathematical graph, calculus integral, organic chemistry diagram, or scanned PDF worksheet. Our hybrid Vision + DOM AI reads the image and returns the solution with step-by-step reasoning."
        },
        {
            q: "What platforms does ExamGhost work on?",
            a: "ExamGhost works on all major LMS platforms including Canvas (Classic and New Quizzes), Blackboard Learn & Ultra, Moodle, Google Classroom, D2L Brightspace, and Schoology, as well as homework platforms like Coursera, edX, Quizlet, McGraw-Hill Connect, Pearson MyLab, and Google Forms — plus any quiz site that runs in Chrome."
        },
        {
            q: "How do I turn ExamGhost on and off?",
            a: "The extension stays completely dormant until you activate it — it never runs background polling loops. Toggle the Master Power Switch instantly using ⌘+Shift+U or the ON/OFF pill in the popup header. Switch modes with Alt+1 (Invisible), Alt+2 (Stealth), and Alt+3 (Explain), or trigger Snap-It Region Solve with Alt+S."
        },
        {
            q: "Why not just use ChatGPT?",
            a: "Because switching tabs or copying and pasting during an exam is slow, stressful, and easily detected by proctoring software. ChatGPT requires opening a new tab, copying the question, pasting it, waiting, and switching back. ExamGhost answers directly on the exam page in two clicks without leaving the window."
        },
        {
            q: "Is ExamGhost free to start?",
            a: "Yes! Every student gets 5 free question solves per day (auto-refills every 24 hours) immediately upon installing the extension. No credit card or billing details are required. You can test all 3 display modes (Alt+1, Alt+2, Alt+3), all 3 answer delivery methods, and Alt+S Snap-It Vision OCR before deciding whether to upgrade."
        },
        {
            q: "What pricing plans do you offer, and what is the Study & Homework AI Hub?",
            a: "We offer three simple, honest plans: Monthly at $19/month (flexible, cancel anytime), Yearly Academic Pass at $99/year (our most popular plan, works out to $8.25/month for the full academic year), and Lifetime VIP at $199 (one-time payment, lifetime access). All paid plans include both unlimited stealth extension solves AND full access to the ExamGhost Study & Homework AI Workspace — a dedicated study chatbot powered by Claude 3.7 Sonnet, ChatGPT (GPT-4o / o3-mini), and DeepSeek-R1 for homework, essays, syllabus PDFs, and step-by-step LaTeX math proofs (saving $60+/month vs separate AI subscriptions)."
        },
        {
            q: "What is your refund policy?",
            a: "We offer a 100% money-back guarantee. If ExamGhost does not perform exactly as promised on your quizzes, contact our 24/7 Discord support team within 14 days for a prompt, hassle-free refund."
        }
    ];

    return (
        <section id="faq" className="py-20 md:py-32 bg-cream text-ink border-b border-black/5">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">

                {/* Section Head (OneMacApp Style) */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>FAQ &amp; TECHNICAL ARCHITECTURE</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Good questions.<br />
                        Short answers.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Everything you need to know about stealth technology, SpeedGrader logs, and our refund guarantee.
                    </p>
                </div>

                {/* Self-Contained GEO / AEO Technical Summary Passage (152 Words) */}
                <div className="aeo-summary mb-8 p-6 sm:p-7 rounded-3xl bg-white border border-black/10 shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                            <span>Architecture Overview · Last Audited 2026</span>
                        </div>
                        <span className="text-[11px] font-medium text-ink-muted">
                            ExamGhost Security Engineering Team
                        </span>
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-ink mb-2">
                        What is ExamGhost and how does its stealth architecture work?
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                        ExamGhost is a privacy-first Chrome extension engineered for online assessments on Canvas, Blackboard, Moodle, D2L Brightspace, McGraw-Hill Connect, Pearson MyLab, Cengage MindTap, and WebAssign. Unlike standard AI sidebar extensions such as CanvasHack, CheatMate, or CourseHero that inject visible HTML overlays directly into the host page DOM, ExamGhost renders inside a closed Shadow DOM container paired with Focus Shield event interception. This architecture neutralizes window.blur, document.visibilitychange, and document.hasFocus() proctoring telemetry while leaving zero inspectable footprint in page scripts. Powered by multi-model AI routing combining GPT-4o, Claude 3.7 Sonnet, and DeepSeek-R1, ExamGhost solves multiple-choice, multi-select, fill-in-the-blank, matching, and LaTeX math questions in 0.3 seconds with a 96%+ accuracy rate. Students can test all 24 stealth features with 5 free solves per day (no credit card required), or unlock unlimited extension solves plus the full Claude, ChatGPT, and DeepSeek Study &amp; Homework AI Workspace at $19/month, $99/year ($8.25/month Academic Year Pass), or $199 one-time for the Lifetime VIP Degree Pass.
                    </p>
                </div>

                {/* Accordion List — All answers rendered in SSR DOM for SEO/AEO/GEO parity */}
                <div className="space-y-3.5">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                data-open={isOpen}
                                className={`t-acc rounded-2xl border transition-all duration-200 bg-white ${
                                    isOpen
                                        ? 'border-black/15 shadow-card'
                                        : 'border-black/5 hover:border-black/10 hover:shadow-soft'
                                }`}
                            >
                                <h3>
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-ink rounded-2xl"
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.q}</span>
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                                            isOpen ? 'rotate-180 bg-ink text-white' : 'bg-[#f4f1ea] text-ink'
                                        }`}>
                                            <ChevronDown className="w-4 h-4" />
                                        </span>
                                    </button>
                                </h3>

                                <div className="t-acc-panel">
                                    <div className="t-acc-panel-inner">
                                        <div className="px-5 sm:px-6 pb-6 pt-4 text-sm text-ink-secondary leading-relaxed border-t border-black/5">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
