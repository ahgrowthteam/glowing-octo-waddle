'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, Search, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
    category: 'stealth' | 'solvers' | 'pricing' | 'setup';
    q: string;
    a: string;
}

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const categories = [
        { id: 'all', name: 'All Questions' },
        { id: 'stealth', name: 'Stealth & Canvas Detection' },
        { id: 'solvers', name: 'AI Solvers & OCR' },
        { id: 'pricing', name: 'Plans, Free Trial & Refunds' },
        { id: 'setup', name: 'Compatibility & Install' },
    ];

    const faqs: FAQItem[] = [
        // Stealth
        {
            category: 'stealth',
            q: "Does ExamGhost bypass Canvas quiz audit logs?",
            a: "Yes. When you take a Canvas quiz, Canvas listens for window 'blur' and 'visibilitychange' events. Every time you leave the page, Canvas logs: 'Stopped viewing the Canvas quiz-taking page'. ExamGhost intercepts these browser listeners at the DOM level, ensuring Canvas continues receiving an uninterrupted 'active' heartbeat. Your professor's log shows zero suspicious leaves."
        },
        {
            category: 'stealth',
            q: "Can Canvas or professors see when I switch tabs or use split screen?",
            a: "No. Because ExamGhost blocks tab-switch event emission, Canvas cannot detect whether you have split screen active, another browser window open, or background tabs running. To the Canvas server, your quiz tab remains in focus the entire duration."
        },
        {
            category: 'stealth',
            q: "How does the closed-boundary Shadow DOM prevent detection?",
            a: "Unlike low-tier extensions that insert visible <div> or <button> tags into the active Canvas DOM (which proctor scripts like Honorlock or Proctorio flag via MutationObservers), ExamGhost renders its HUD inside a closed Shadow Root tree. The host page scripts cannot query, inspect, or traverse it."
        },
        {
            category: 'stealth',
            q: "What is the Stealth Opacity Dial (⌘ + B)?",
            a: "You can adjust the HUD opacity from 100% visible down to 5% ghost whisper mode. At 5%, answers are only visible when viewed straight-on from inches away, making it completely invisible to teaching assistants or professors walking behind your desk."
        },
        {
            category: 'stealth',
            q: "How fast is the Emergency Panic Kill-Switch (Escape × 2)?",
            a: "Double-tapping the Escape key instantly vaporizes all Shadow DOM overlays, purges in-memory question caches, and restores standard event listeners within 10 milliseconds. Your browser immediately looks like an unmodded, standard quiz tab."
        },

        // Solvers
        {
            category: 'solvers',
            q: "How does ExamGhost solve questions without copy-pasting?",
            a: "You never need to copy, paste, or switch windows. Simply press your keyboard shortcut (⌘ + Shift + X or Ctrl + Shift + X) or double-tap the question. ExamGhost reads the question text and options directly from the page DOM and highlights the correct answer in under 1.2 seconds."
        },
        {
            category: 'solvers',
            q: "Can it solve math equations, chemistry diagrams, and locked questions?",
            a: "Yes! Using Snap-It (⌘ + Shift + S), you can drag a crosshair crop box around any mathematical graph, organic chemistry molecular structure, or non-selectable image. Our multimodal vision AI decodes the image and returns the solution with step-by-step reasoning in ~310ms."
        },
        {
            category: 'solvers',
            q: "What question formats are supported?",
            a: "ExamGhost solves standard 4/5 option Multiple Choice (MCQ), Multi-Select ('Select all that apply'), Fill-in-the-Blank, Numeric input with significant digit rounding, and dual-column matching tables."
        },
        {
            category: 'solvers',
            q: "How does the 2nd-Attempt Auto-Answer Cache work?",
            a: "For quizzes that allow multiple attempts, ExamGhost caches high-scoring responses from your first submission and pre-populates verified answers on attempt #2 for effortless 100% scores."
        },

        // Pricing
        {
            category: 'pricing',
            q: "Can I try ExamGhost for free?",
            a: "Yes! Every student gets 50 free AI question solves immediately upon installing the extension. No credit card or billing details are required. You can test our invisible Shadow HUD, window blur suppression, and Snap-It Vision OCR on live quizzes before deciding on an upgrade."
        },
        {
            category: 'pricing',
            q: "What pricing plans do you offer?",
            a: "We offer three simple options: Monthly Pass at $19/month (flexible, cancel anytime in 1 click), Yearly Academic Pass at $99/year (our most popular plan, works out to $8.25/month for the full academic year), and Lifetime VIP at $199 (one-time payment, lifetime updates across all your degrees). All paid plans include unlimited question solves and all 24 stealth tools."
        },
        {
            category: 'pricing',
            q: "What is your refund policy?",
            a: "We offer a 100% money-back guarantee. If ExamGhost does not perform exactly as promised on your quizzes, contact our 24/7 Discord support team or email support@examghost.com within 14 days for a hassle-free, immediate refund."
        },
        {
            category: 'pricing',
            q: "Can I use my license key on multiple laptops?",
            a: "Yes! The Lifetime VIP Pass allows simultaneous sync on up to 3 personal student devices (e.g., MacBook, desktop PC, and iPad/Chromebook with browser support). The Monthly and Yearly plans allow activation on up to 2 devices."
        },

        // Setup
        {
            category: 'setup',
            q: "Which browsers and operating systems are supported?",
            a: "ExamGhost works seamlessly on Google Chrome, Microsoft Edge, Brave Browser, and Arc Browser across macOS (Apple Silicon M1/M2/M3/M4 & Intel), Windows 10/11, and Linux."
        },
        {
            category: 'setup',
            q: "Does it work on Canvas New Quizzes and Classic Quizzes?",
            a: "Yes. ExamGhost supports both Canvas Classic Quizzes and Canvas New Quizzes, as well as Blackboard Learn & Ultra, D2L Brightspace, Moodle, McGraw-Hill Connect, Pearson MyLab, and Google Classroom."
        },
        {
            category: 'setup',
            q: "How do I install the extension?",
            a: "Installation takes 30 seconds: 1) Download the extension .zip archive. 2) Open chrome://extensions in your browser and enable 'Developer mode' in the top right. 3) Click 'Load unpacked', select the unzipped ExamGhost folder, and paste your license key."
        }
    ];

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        const matchesQuery = searchQuery === '' || 
            faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
            faq.a.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesQuery;
    });

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://examghost.com/faq#webpage",
                "url": "https://examghost.com/faq",
                "name": "FAQ — Stealth Architecture, Pricing & LMS Setup | ExamGhost",
                "description": "Answers to ExamGhost FAQs: Canvas SpeedGrader audit log stealth, Focus Shield blur masking, Snap-It OCR, pricing ($19/mo, $99/yr), and 50 free solves.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-29",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": "https://examghost.com/faq#breadcrumb" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "h2"]
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/faq#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "FAQ & Knowledge Base", "item": "https://examghost.com/faq" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/faq#faqpage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink flex flex-col justify-between">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20 w-full">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>KNOWLEDGE BASE &amp; FAQ</span>
                    </p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-4">
                        Frequently asked questions.
                    </h1>
                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                        Everything you need to know about SpeedGrader audit stealth, Focus Shield, pricing plans, and install setup.
                    </p>
                </div>

                {/* Self-Contained GEO / AEO Technical Summary Block (144 Words) */}
                <div className="aeo-summary mb-8 p-6 sm:p-7 rounded-3xl bg-white border border-black/10 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                            <span>Verified Technical Brief · Updated 2026</span>
                        </div>
                        <span className="text-[11px] text-ink-muted font-medium">
                            Reviewed by ExamGhost Security Engineering Team
                        </span>
                    </div>
                    <h2 className="font-display font-bold text-base sm:text-lg text-ink mb-2">
                        Can Canvas or Blackboard detect the ExamGhost Chrome extension?
                    </h2>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                        Standard LMS quiz logs on Canvas, Blackboard, Moodle, and D2L Brightspace track student activity through three browser APIs: DOM mutation observers that scan for unauthorized page elements, document.visibilitychange events triggered when switching tabs, and window.blur or document.hasFocus() listeners that record when the quiz window loses focus. Traditional AI extensions trigger these flags because they require copying text to external tabs or mounting unshielded iframe sidebars inside the quiz DOM. ExamGhost prevents all three detection vectors simultaneously: its closed Shadow DOM isolation keeps every UI node invisible to host-page DOM scripts, its Focus Shield intercepts blur and visibility events before LMS telemetry scripts can log them, and its Manifest V3 background service worker routes encrypted AI requests off-thread in 0.3 seconds so the student never leaves the active exam tab.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto mb-8">
                    <Search className="w-4 h-4 text-ink-muted absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search questions (e.g., 'window blur', 'refund', 'Canvas New Quizzes')..."
                        className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-black/10 text-ink text-sm shadow-xs focus:outline-none focus:border-ink transition-colors"
                    />
                </div>

                {/* Category Pills */}
                <div className="flex justify-center flex-wrap gap-2 max-w-2xl mx-auto mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                selectedCategory === cat.id
                                    ? 'bg-ink text-white shadow-xs'
                                    : 'bg-white/80 hover:bg-white text-ink-secondary border border-black/10'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* FAQ Accordion List — All answers mounted in SSR DOM */}
                <div className="space-y-3.5 mb-14">
                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-12 rounded-3xl bg-white border border-black/10 p-8">
                            <p className="text-sm text-ink-muted mb-3">No matching questions found for &quot;{searchQuery}&quot;.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                className="text-xs font-bold text-emerald-700 underline"
                            >
                                Clear search &amp; view all questions
                            </button>
                        </div>
                    ) : (
                        filteredFaqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`rounded-2xl border transition-all duration-200 bg-white ${
                                        isOpen ? 'border-black/15 shadow-sm' : 'border-black/5 hover:border-black/10'
                                    }`}
                                >
                                    <h2>
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
                                    </h2>

                                    <div
                                        className={
                                            isOpen
                                                ? 'px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-ink-secondary leading-relaxed border-t border-black/5 mt-1 block'
                                                : 'hidden'
                                        }
                                    >
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Discord Help Banner */}
                <div className="rounded-3xl bg-[#111111] text-white p-7 sm:p-9 shadow-lift flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                            24/7 Live Support
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1.5">
                            Still have questions?
                        </h3>
                        <p className="text-xs text-[#bfbbb3] max-w-md">
                            Our active developer team and student moderators answer tickets around the clock in our Discord server.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link 
                            href="/contact"
                            className="btn-soft px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-white text-ink"
                        >
                            Email Support
                        </Link>
                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                        >
                            <span>Join Discord</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
