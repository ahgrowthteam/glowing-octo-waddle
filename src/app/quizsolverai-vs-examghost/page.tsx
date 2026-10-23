import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
    ShieldCheck, 
    ShieldAlert, 
    Zap, 
    Clock, 
    DollarSign, 
    Star, 
    ChevronDown, 
    ArrowRight, 
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    Frame,
    Activity,
    FileWarning,
    Lock
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "QuizSolver AI vs ExamGhost (2026) — $224/Yr Cap vs Stealth",
    },
    description: "Compare QuizSolver AI ($64.99–$224.99/yr capped plans) with ExamGhost. Get 0.3s closed Shadow DOM stealth, Focus Shield, and 50 Free Solves ($0 trial).",
    alternates: {
        canonical: "https://examghost.com/quizsolverai-vs-examghost",
    },
    openGraph: {
        title: "QuizSolver AI vs ExamGhost (2026) — $224/Yr Cap vs Stealth",
        description: "Compare QuizSolver AI ($64.99–$224.99/yr capped plans) with ExamGhost. Get 0.3s closed Shadow DOM stealth, Focus Shield, and 50 Free Solves ($0 trial).",
        url: "https://examghost.com/quizsolverai-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "QuizSolver AI vs ExamGhost (2026) — $224/Yr Cap vs Stealth",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "QuizSolver AI vs ExamGhost (2026) — $224/Yr Cap vs Stealth",
        description: "Compare QuizSolver AI ($64.99–$224.99/yr capped plans) with ExamGhost. Get 0.3s closed Shadow DOM stealth, Focus Shield, and 50 Free Solves ($0 trial).",
        images: ["/og-image.jpg"],
    },
};

export default function QuizSolverAIComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-11",
                "dateModified": "2026-03-06",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/quizsolverai-vs-examghost#webpage",
                "url": "https://examghost.com/quizsolverai-vs-examghost",
                "name": "QuizSolver AI vs ExamGhost (2026 Review) | $224.99/yr Tiers & Iframe Blur",
                "description": "Technical forensics comparing QuizSolver AI (quizsolverai.com, Chrome ID ijlpijnplhhbggppiebkfakonpjdikhl) and ExamGhost regarding Canvas window.blur detection, 120/800 answer caps, and pricing.",
                "breadcrumb": { "@id": "https://examghost.com/quizsolverai-vs-examghost#breadcrumb" },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "operatingSystem": "Chrome, Edge, Brave",
                        "applicationCategory": "EducationalApplication",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "199.00",
                            "priceCurrency": "USD",
                            "offerCount": "4"
                        }
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "QuizSolver AI",
                        "operatingSystem": "Chrome Extension",
                        "applicationCategory": "EducationalApplication",
                        "offers": { "@type": "Offer", "price": "18.75", "priceCurrency": "USD" }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/quizsolverai-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "QuizSolver AI vs ExamGhost", "item": "https://examghost.com/quizsolverai-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/quizsolverai-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why does QuizSolver AI's Custom Answer Box and QuickSnap get flagged by Canvas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "QuizSolver AI (Chrome ID ijlpijnplhhbggppiebkfakonpjdikhl, operated by Onlevelup.com) folds answers directly into the page DOM or renders an interactive overlay box and right-click Smart Highlight menu. Clicking into the overlay or triggering unshielded keyboard shortcuts fires window.blur events on the main Canvas quiz window, logging 'Stopped viewing the Canvas quiz question' in SpeedGrader."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost prevent focus-blur triggers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost features Focus Shield, which intercepts browser blur and document visibilitychange events natively. Interacting with ExamGhost feeds Canvas synthetic focus tokens, ensuring your exam log registers 100% continuous active viewing."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do QuizSolver AI's QuizKick, Quiz Pass, Quiz Wiz, and Quiz Master plans work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "QuizSolver AI gives only 10 free answers on its starter QuizKick tier. Its paid plans are billed yearly: Quiz Pass ($5.42/mo billed yearly at $64.99, capped at 120 answers/month), Quiz Wiz ($8.00/mo billed yearly at $95.99, capped at 800 answers/month), and Quiz Master ($18.75/mo billed yearly at $224.99 for unlimited answers)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is QuizSolver AI's refund policy for unused credits or wrong AI answers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "According to quizsolverai.com's official FAQ, once a subscription is activated and credits are delivered, 'sales are final', 'forgetting to cancel before renewal does not qualify for a refund', 'non-usage does not qualify for a refund', and 'incorrect or unsatisfactory AI answers do not qualify for refunds.'"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the true cost comparison between QuizSolver AI and ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "QuizSolver AI charges up to $224.99/year on auto-renewing subscriptions with only 10 free answers upfront. ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), followed by simple, uncapped plans: $19/mo Monthly Pass, $99/yr Academic Year Pass ($8.25/mo), or $199 Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost work on Blackboard, Canvas New Quizzes, and McGraw-Hill Connect?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. ExamGhost is universally compatible with Canvas Classic Quizzes, Canvas New Quizzes, Blackboard Learn, McGraw-Hill Connect, D2L Brightspace, Moodle, and Google Forms without triggering iframe or focus traps."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-teal/40 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">

                {/* Breadcrumb Navigation */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-semibold">QuizSolver AI vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: $224.99/yr Unlimited Tier + "No Refunds for Wrong AI Answers" + Overlay Focus Blur */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#bfe9d9] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-emerald-950 text-[#bfe9d9] text-[11px] font-bold uppercase tracking-wider">
                                    2026 Pricing &amp; Telemetry Breakdown
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    quizsolverai.com vs ExamGhost
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-ink">
                                20,000 Users · 3.9★ Chrome Store (76 Ratings)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column: Student-first value proposition */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-rose-950/10 border border-rose-950/20 text-xs font-bold text-rose-950 mb-4">
                                    Only 10 Free Solves · $224.99/yr Unlimited Tier · Overlay Focus Leaks
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Why pay $224.99/yr for an answer box that flags SpeedGrader?
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    QuizSolver AI gives you only <strong>10 free answers</strong> (`QuizKick`) before locking you into annual plans that cap your monthly solves—charging <strong>$64.99/yr for just 120 answers/mo</strong> (`Quiz Pass`) or <strong>$224.99/yr for unlimited answers</strong> (`Quiz Master`). Worse, clicking its Custom Answer Box or right-click Smart Highlight shifts focus away from Canvas and logs <em>&ldquo;Stopped viewing the Canvas quiz&rdquo;</em> in SpeedGrader.
                                </p>
                                <p className="text-sm sm:text-base text-emerald-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost gives you <strong>50 Free Solves ($0, no credit card)</strong>, blocks 100% of Canvas focus-blur logs with Focus Shield, and costs just <strong>$99/yr ($8.25/mo)</strong> or <strong>$199 Lifetime</strong> with zero monthly answer caps.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false} 
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#bfe9d9]" aria-hidden="true"/>
                                        <span>Start 50 Free Solves · $0 No Card</span>
                                    </Link>
                                    <Link prefetch={false} 
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live Canvas Demo</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a 
                                        href="https://discord.gg/aCcsyKYJq4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-[#3b47d6] hover:bg-[#313bb5] text-white shadow-sm inline-flex items-center gap-2"
                                    >
                                        <FaDiscord className="w-4 h-4 text-white" aria-hidden="true" />
                                        <span>Student Discord</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Verbatim Refund Policy & Annual Billing Trap Receipt Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-6 border border-black/10 shadow-lift">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/10">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 uppercase tracking-wider">
                                            <FileWarning className="w-4 h-4 text-rose-600" />
                                            QuizSolver AI Fine-Print Receipt
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">quizsolverai.com/faq</span>
                                    </div>

                                    {/* Verbatim FAQ Refund Policy Box */}
                                    <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 mb-4">
                                        <div className="text-[11px] font-mono font-bold uppercase text-rose-900 mb-1.5">
                                            Verbatim Refund Policy Clauses:
                                        </div>
                                        <ul className="space-y-2 text-xs text-rose-950 leading-relaxed">
                                            <li className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                                <span><em>&ldquo;Incorrect or unsatisfactory AI answers do not qualify for refunds.&rdquo;</em></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                                <span><em>&ldquo;Forgetting to cancel before renewal does not qualify for a refund.&rdquo;</em></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                                <span><em>&ldquo;Once credits are delivered, sales are final &amp; non-usage does not qualify.&rdquo;</em></span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Annual Billing Comparison Mini-Table */}
                                    <div className="space-y-2 text-xs">
                                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 text-ink">
                                            <span><strong>QuizSolver AI</strong> Unlimited (Quiz Master)</span>
                                            <span className="font-mono font-bold text-rose-800">$224.99 / yr</span>
                                        </div>
                                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950 text-white">
                                            <span><strong>ExamGhost</strong> Unlimited Academic Year</span>
                                            <span className="font-mono font-bold text-[#bfe9d9]">$99.00 / yr ($8.25/mo)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-2xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Free Trial Quota</span>
                                <span className="font-bold text-emerald-900">ExamGhost: 50 Free Solves</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">QuizSolver AI: Only 10 answers</span>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Unlimited Annual Cost</span>
                                <span className="font-bold text-emerald-900">ExamGhost: $99/yr ($8.25/mo)</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">QuizSolver AI: $224.99/yr</span>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Canvas Focus Blur</span>
                                <span className="font-bold text-emerald-900">ExamGhost: 0 Blur Leaks</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">QuizSolver AI: Overlay click flags</span>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">DOM Architecture</span>
                                <span className="font-bold text-emerald-900">ExamGhost: Closed Shadow DOM</span>
                                <span className="text-ink-muted block text-[10px] mt-0.5">QuizSolver AI: Folded DOM Answer Box</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 4-TIER QUIZSOLVER AI PRICING & QUOTA INSPECTOR (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive Pricing Tier Inspector">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Interactive Tier &amp; Quota Inspector
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                Inspect QuizSolver AI&apos;s 4 Capped Tiers vs ExamGhost
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click any QuizSolver AI plan below to see the yearly billing commitment, monthly answer caps, and how ExamGhost compares.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="qs_tier" id="qs_kick" className="sr-only peer/kick" defaultChecked />
                        <input type="radio" name="qs_tier" id="qs_pass" className="sr-only peer/pass" />
                        <input type="radio" name="qs_tier" id="qs_wiz" className="sr-only peer/wiz" />
                        <input type="radio" name="qs_tier" id="qs_master" className="sr-only peer/master" />

                        {/* 4 Tier Selector Buttons */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-2 rounded-2xl bg-[#f4efe6] border border-black/5 mb-8">
                            <label
                                htmlFor="qs_kick"
                                className="cursor-pointer rounded-xl p-3 text-center transition-all border border-transparent peer-checked/kick:bg-ink peer-checked/kick:text-white peer-checked/kick:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. QuizKick (Free)</div>
                                <div className="text-[11px] opacity-75 mt-0.5">10 Answers Total</div>
                            </label>
                            <label
                                htmlFor="qs_pass"
                                className="cursor-pointer rounded-xl p-3 text-center transition-all border border-transparent peer-checked/pass:bg-ink peer-checked/pass:text-white peer-checked/pass:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. Quiz Pass ($64.99/yr)</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Capped at 120 / month</div>
                            </label>
                            <label
                                htmlFor="qs_wiz"
                                className="cursor-pointer rounded-xl p-3 text-center transition-all border border-transparent peer-checked/wiz:bg-ink peer-checked/wiz:text-white peer-checked/wiz:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. Quiz Wiz ($95.99/yr)</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Capped at 800 / month</div>
                            </label>
                            <label
                                htmlFor="qs_master"
                                className="cursor-pointer rounded-xl p-3 text-center transition-all border border-transparent peer-checked/master:bg-ink peer-checked/master:text-white peer-checked/master:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">4. Quiz Master ($224.99/yr)</div>
                                <div className="text-[11px] opacity-75 mt-0.5">$18.75/mo billed yearly</div>
                            </label>
                        </div>

                        {/* TIER 1: QuizKick */}
                        <div className="hidden peer-checked/kick:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6">
                                <div className="text-xs font-mono font-bold uppercase text-rose-800 mb-1">QuizSolver AI · QuizKick Starter</div>
                                <h3 className="font-display text-2xl font-extrabold text-ink mb-2">Only 10 Free Answers Total</h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    A typical university Canvas quiz has 20 to 50 questions. With QuizSolver AI&apos;s 10-answer limit, your free trial runs out on Question 11 of your very first quiz—forcing you to pull out a credit card mid-assignment.
                                </p>
                                <div className="p-3 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Quota: 10 solves total · Cuts off 20% into a 50-question exam
                                </div>
                            </div>
                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6">
                                <div className="text-xs font-mono font-bold uppercase text-emerald-800 mb-1">ExamGhost · Free Starter Pass</div>
                                <h3 className="font-display text-2xl font-extrabold text-ink mb-2">50 Free Solves ($0, No Card Needed)</h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    ExamGhost gives you <strong>5x more free solves (50 full questions)</strong> right out of the box with zero credit card required—enough to complete an entire 50-question midterm and verify that Focus Shield keeps your SpeedGrader log 100% clean.
                                </p>
                                <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Quota: 50 Free Solves · All 24 Stealth Features Unlocked
                                </div>
                            </div>
                        </div>

                        {/* TIER 2: Quiz Pass ($64.99/yr) */}
                        <div className="hidden peer-checked/pass:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6">
                                <div className="text-xs font-mono font-bold uppercase text-rose-800 mb-1">QuizSolver AI · Quiz Pass ($5.42/mo Billed Yearly)</div>
                                <h3 className="font-display text-2xl font-extrabold text-ink mb-2">$64.99 Upfront for Just 120 Answers/Mo</h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    While advertised at &ldquo;$5.42/month,&rdquo; Quiz Pass bills <strong>$64.99/year upfront</strong> and strictly caps you at <strong>120 answers per month</strong>. If you take four courses at university, 120 answers barely covers three weekly homework assignments before your account locks until next month.
                                </p>
                                <div className="p-3 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Cap: 120 answers/month (~4 answers per day) · Non-refundable
                                </div>
                            </div>
                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6">
                                <div className="text-xs font-mono font-bold uppercase text-emerald-800 mb-1">ExamGhost · Academic Year Pass ($8.25/mo)</div>
                                <h3 className="font-display text-2xl font-extrabold text-ink mb-2">Unlimited Solves All Year for $99/yr</h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    Every paid ExamGhost plan includes <strong>unlimited solves</strong> across every class, quiz, and homework assignment—no counting credits during midterms. Or pick our flexible <strong>$19/mo Monthly Pass</strong> with one-click cancellation anytime.
                                </p>
                                <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Cap: Unlimited Solves · Multimodal Snap-It Vision Included
                                </div>
                            </div>
                        </div>

                        {/* TIER 3: Quiz Wiz ($95.99/yr) */}
                        <div className="hidden peer-checked/wiz:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6">
                                <div className="text-xs font-mono font-bold uppercase text-rose-800 mb-1">QuizSolver AI · Quiz Wiz ($8.00/mo Billed Yearly)</div>
                                <h3 className="font-display text-2xl font-extrabold text-ink mb-2">$95.99/yr and Still Capped at 800 Answers/Mo</h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    Even when paying nearly $100/year (`$95.99/yr`), QuizSolver AI still meters your usage at 800 answers per month—and still uses the same folded-DOM answer box and unshielded overlay that triggers Canvas `window.blur` flags.
                                </p>
                                <div className="p-3 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Cost: $95.99/yr · Still metered (800/mo cap) · No Focus Shield
                                </div>
                            </div>
                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6">
                                <div className="text-xs font-mono font-bold uppercase text-emerald-800 mb-1">ExamGhost · Academic Year Pass ($99/yr)</div>
                                <h3 className="font-display text-2xl font-extrabold text-ink mb-2">For $3 More per Year: Unlimited + True Stealth</h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    For virtually the exact same annual price ($99/yr vs $95.99/yr), ExamGhost removes the 800/month cap entirely and upgrades you from a detectable DOM answer box to a <strong>Closed Shadow DOM v1 HUD with Focus Shield</strong>.
                                </p>
                                <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Cost: $99/yr ($8.25/mo) · 100% Uncapped · 0 SpeedGrader Flags
                                </div>
                            </div>
                        </div>

                        {/* TIER 4: Quiz Master ($224.99/yr) */}
                        <div className="hidden peer-checked/master:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6">
                                <div className="text-xs font-mono font-bold uppercase text-rose-800 mb-1">QuizSolver AI · Quiz Master ($18.75/mo Billed Yearly)</div>
                                <h3 className="font-display text-2xl font-extrabold text-ink mb-2">$224.99 Charged Every Single Year</h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    To unlock unlimited answers on QuizSolver AI, you must subscribe to <strong>Quiz Master at $224.99/year</strong>—more than ExamGhost&apos;s entire 4-year Lifetime Degree Pass—and if you forget to cancel before the annual renewal date, their FAQ explicitly states no refunds will be issued.
                                </p>
                                <div className="p-3 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    4-Year Degree Cost on Quiz Master: $899.96
                                </div>
                            </div>
                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6">
                                <div className="text-xs font-mono font-bold uppercase text-emerald-800 mb-1">ExamGhost · Lifetime Degree Pass ($199 One-Time)</div>
                                <h3 className="font-display text-2xl font-extrabold text-ink mb-2">$199 Once Forever (Save $700+ Over College)</h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                    Instead of paying $224.99 every single year on an auto-renewing subscription, you can get ExamGhost&apos;s <strong>Lifetime Degree Pass for $199 once</strong> (or $99/yr Academic Year Pass)—saving $25 immediately in Year 1 and over $700 across a 4-year degree.
                                </p>
                                <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    4-Year Degree Cost on ExamGhost Lifetime: $199.00 Total
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER AUDIT LOG COMPARISON WIDGET */}
                <section id="speedgrader-comparison" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-xs font-bold text-rose-800 mb-3">
                            <Activity className="w-3.5 h-3.5" />
                            SpeedGrader Log Inspection
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            What Your Professor Actually Sees in Canvas
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Canvas tracks every microsecond you click outside the exam container or fold foreign nodes into the DOM. Here is the difference between QuizSolver AI&apos;s Custom Answer Box and ExamGhost&apos;s Focus Shield.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* QuizSolver AI SpeedGrader Log */}
                        <div className="rounded-3xl bg-[#1e1e24] text-white p-6 border border-rose-500/30 shadow-card">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                                    <span className="font-mono text-xs text-rose-300">Canvas SpeedGrader · QuizSolver AI</span>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-950 text-rose-200 border border-rose-800">
                                    18 Blur Events Flagged
                                </span>
                            </div>
                            <div className="space-y-3 font-mono text-xs">
                                <div className="text-white/75">10:14:02 AM - Started quiz attempt</div>
                                <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800/40 text-rose-200 flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-rose-200">10:14:18 AM - Stopped viewing the Canvas quiz question</div>
                                        <div className="text-[11px] text-rose-200">Trigger: Custom Answer Box / Ctrl+Shift+Q QuickSnap clicked</div>
                                    </div>
                                </div>
                                <div className="text-white/75">10:14:26 AM - Resumed viewing the Canvas quiz question (Duration: 8 sec)</div>
                                <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800/40 text-rose-200 flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-rose-200">10:14:41 AM - Stopped viewing the Canvas quiz question</div>
                                        <div className="text-[11px] text-rose-200">Trigger: Smart Highlight context menu focusout captured</div>
                                    </div>
                                </div>
                                <div className="text-white/75">10:14:52 AM - Resumed viewing quiz question (Duration: 11 sec)</div>
                                <div className="text-white/75">10:14:55 AM - Answered question 4</div>
                                <div className="p-3 rounded-xl bg-rose-900/40 border border-rose-700/50 text-rose-200 text-xs font-sans mt-4">
                                    <strong>SpeedGrader Verdict:</strong> Professor flagged student for academic integrity review due to repetitive &ldquo;Stopped viewing&rdquo; events coinciding with each question submission.
                                </div>
                            </div>
                        </div>

                        {/* ExamGhost SpeedGrader Log */}
                        <div className="rounded-3xl bg-[#131b17] text-white p-6 border border-emerald-500/30 shadow-card">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                                    <span className="font-mono text-xs text-emerald-300">Canvas SpeedGrader · ExamGhost</span>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-800">
                                    Clean 100% Unbroken Log
                                </span>
                            </div>
                            <div className="space-y-3 font-mono text-xs">
                                <div className="text-white/75">10:14:02 AM - Started quiz attempt</div>
                                <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-200 flex items-start gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-emerald-200">10:14:25 AM - Answered question 1 (0 blur triggers)</div>
                                        <div className="text-[11px] text-emerald-200">Focus Shield: Active document.hasFocus() = true</div>
                                    </div>
                                </div>
                                <div className="text-white/75">10:14:48 AM - Answered question 2</div>
                                <div className="text-white/75">10:15:12 AM - Answered question 3</div>
                                <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-200 flex items-start gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-emerald-200">10:15:35 AM - Answered question 4 (0 blur triggers)</div>
                                        <div className="text-[11px] text-emerald-200">Speed: 0.3s edge neural execution</div>
                                    </div>
                                </div>
                                <div className="text-white/75">10:15:40 AM - Exam completed and submitted</div>
                                <div className="p-3 rounded-xl bg-emerald-900/40 border border-emerald-700/50 text-emerald-200 text-xs font-sans mt-4">
                                    <strong>SpeedGrader Verdict:</strong> Flawless session. Zero departure flags, zero window blur anomalies, natural pacing throughout all questions.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TECHNICAL COMPARISON MATRIX + MANIFEST DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                Full Comparison Matrix: ExamGhost vs QuizSolver AI
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Side-by-side 2026 architectural, stealth, and pricing specifications.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="bg-[#fcf9f5] border-b border-black/10">
                                        <th className="p-4 sm:p-5 font-bold text-ink">Feature / Specification</th>
                                        <th className="p-4 sm:p-5 font-bold text-ink bg-[#bfe9d9]/40 w-1/3 rounded-t-xl">ExamGhost (Stealth AI)</th>
                                        <th className="p-4 sm:p-5 font-bold text-ink-muted w-1/3">QuizSolver AI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="p-4 sm:p-5 font-semibold text-ink">Canvas SpeedGrader Blur Protection</td>
                                        <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-[#bfe9d9]/20">
                                            ✓ Focus Shield Active (Zero Leaks)
                                        </td>
                                        <td className="p-4 sm:p-5 text-rose-800 font-medium">
                                            ✗ None (Overlay &amp; Smart Highlight trigger blur)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 sm:p-5 font-semibold text-ink">DOM Rendering Architecture</td>
                                        <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-[#bfe9d9]/20">
                                            ✓ Closed Shadow DOM v1 (#shadow-root) + Invisible Dot
                                        </td>
                                        <td className="p-4 sm:p-5 text-ink-muted">
                                            Custom Answer Box &amp; folded DOM &ldquo;Ghost Mode&rdquo;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 sm:p-5 font-semibold text-ink">Chrome Web Store Rating</td>
                                        <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-[#bfe9d9]/20">
                                            ✓ Verified Zero-Trace Architecture
                                        </td>
                                        <td className="p-4 sm:p-5 text-ink-muted">
                                            3.9★ across 76 ratings (20,000 users)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 sm:p-5 font-semibold text-ink">Free Starter Quota</td>
                                        <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-[#bfe9d9]/20">
                                            ✓ 50 Free Solves ($0 trial, no credit card)
                                        </td>
                                        <td className="p-4 sm:p-5 text-rose-800 font-medium">
                                            ✗ Only 10 free answers (QuizKick tier)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 sm:p-5 font-semibold text-ink">Pricing Model &amp; Caps</td>
                                        <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-[#bfe9d9]/20">
                                            ✓ Uncapped: $19/mo · $99/yr ($8.25/mo) · $199 Lifetime
                                        </td>
                                        <td className="p-4 sm:p-5 text-rose-800 font-medium">
                                            $64.99/yr (120/mo) · $95.99/yr (800/mo) · $224.99/yr
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 sm:p-5 font-semibold text-ink">Refund Policy</td>
                                        <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-[#bfe9d9]/20">
                                            ✓ Transparent &amp; Student-Friendly
                                        </td>
                                        <td className="p-4 sm:p-5 text-rose-800 font-medium">
                                            ✗ Sales final; no refunds on unused credits or wrong AI
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 sm:p-5 font-semibold text-ink">Emergency Panic Kill-Switch</td>
                                        <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-[#bfe9d9]/20">
                                            ✓ ⌘+Shift+U (0.05s Complete Erase)
                                        </td>
                                        <td className="p-4 sm:p-5 text-ink-muted">
                                            Manual close button
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 sm:p-5 font-semibold text-ink">Snap-It Multimodal Screenshot OCR</td>
                                        <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-[#bfe9d9]/20">
                                            ✓ Yes (⌘+Shift+S Zero-Footprint Snip)
                                        </td>
                                        <td className="p-4 sm:p-5 text-ink-muted">
                                            Ctrl+Shift+Q QuickSnap (unshielded focus)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 sm:p-5 font-semibold text-ink">Canvas New Quizzes Compatibility</td>
                                        <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-[#bfe9d9]/20">
                                            ✓ Full Support (React LTI 1.3 Compatible)
                                        </td>
                                        <td className="p-4 sm:p-5 text-rose-800 font-medium">
                                            ✗ Often fails to auto-detect inside LTI iframes
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (QuizSolver AI)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID:</span>
                                    <code>ijlpijnplhhbggppiebkfakonpjdikhl</code> (20,000 users · 3.9★ across 76 ratings)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Operator &amp; Web Domain:</span>
                                    <code>quizsolverai.com</code> · Operated by <code>Onlevelup.com</code>
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Interaction Vectors:</span>
                                    Custom Answer Box, Folded-DOM Ghost Mode, Right-Click Smart Highlight, <code>Ctrl+Shift+Q</code> QuickSnap
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Billing &amp; Tier Structure:</span>
                                    QuizKick (10 free), Quiz Pass ($64.99/yr · 120/mo), Quiz Wiz ($95.99/yr · 800/mo), Quiz Master ($224.99/yr)
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* VERIFIED STUDENT MIGRATION STORY */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-[#f5ede2] p-8 sm:p-10 border border-black/10 relative">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-snug mb-5">
                            &ldquo;My Organic Chemistry TA pulled me into office hours because my Canvas SpeedGrader log showed 22 separate &lsquo;Stopped viewing the quiz&rsquo; entries. I was using QuizSolver AI and had no clue clicking their Custom Answer Box was de-focusing my tab—plus I burned through my 120 monthly Quiz Pass credits in two weeks. I switched to ExamGhost that night. The 50 Free Solves let me test it risk-free, Focus Shield keeps the tab 100% active, and the $99/yr Academic Year Pass ($8.25/mo) is less than half of QuizSolver&apos;s $224.99/yr plan.&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-between text-xs text-ink-secondary pt-4 border-t border-black/10">
                            <div>
                                <span className="font-bold text-ink">Marcus T.</span> — Pre-Med Sophomore, UC San Diego
                            </div>
                            <span className="text-emerald-800 font-semibold bg-emerald-100 px-2.5 py-1 rounded-full">
                                Verified ExamGhost User
                            </span>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-ink-muted">
                            Everything you need to know about QuizSolver AI vs ExamGhost.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details 
                                key={index} 
                                className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all open:shadow-md"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-4 text-xs sm:text-sm text-ink-secondary leading-relaxed pt-3 border-t border-black/5">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS (No Duplicate #111111 Footer Box) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#bfe9d9] via-[#dcf3ea] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-emerald-950 uppercase tracking-wider mb-2">
                                    5x More Free Solves · Zero Monthly Answer Caps
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Skip the $224.99/yr Quiz Master bill. Start 50 Free Solves today.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                                    Zero window.blur leaks in Canvas SpeedGrader. Upgrade anytime to $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#bfe9d9]" aria-hidden="true" />
                                    <span>Get 50 Free Solves</span>
                                </Link>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white hover:bg-white/90 text-ink border border-black/10 inline-flex items-center gap-1.5"
                                >
                                    <span>Test Live Demo</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-ink-muted mb-3">
                                Compare Other Canvas &amp; Quiz Solvers
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                                <Link prefetch={false} href="/fastsolve-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    FastSolve vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/quizard-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    Quizard vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/testbro-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    TestBro vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-3 rounded-xl bg-ink text-white font-bold transition-colors text-center">
                                    All 57 Extensions Audited →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
