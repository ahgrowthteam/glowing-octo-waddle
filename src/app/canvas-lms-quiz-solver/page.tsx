import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: {
        absolute: "Canvas LMS Quiz Solver (2026) — Classic & New Quizzes AI | ExamGhost",
    },
    description:
        "Solve Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3) inline in 0.3s. Zero SpeedGrader page_blurred flags, Closed Shadow DOM stealth, and Snap-It OCR (Alt+S).",
    keywords: [
        "canvas lms quiz solver",
        "canvas quiz solver chrome extension",
        "canvas new quizzes ai solver",
        "canvas speedgrader quiz log page_blurred",
        "does canvas detect chrome extensions",
        "solve canvas quiz without switching tabs",
        "canvas multiple dropdowns solver",
        "examghost canvas"
    ],
    alternates: {
        canonical: "https://examghost.com/canvas-lms-quiz-solver",
    },
    openGraph: {
        title: "Canvas LMS Quiz Solver (2026) — Classic & New Quizzes AI | ExamGhost",
        description:
            "Double-click any Canvas Classic or New Quizzes question for 0.3s inline answers with 0 SpeedGrader page_blurred events. Try the live 6-chapter Canvas demo.",
        url: "https://examghost.com/canvas-lms-quiz-solver",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ExamGhost Canvas LMS Quiz Solver" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Canvas LMS Quiz Solver (2026) — Classic & New Quizzes AI",
        description: "Solve Canvas Classic and New Quizzes inline in 0.3s with 0 SpeedGrader focus-loss flags.",
        images: ["/og-image.jpg"],
    },
};

const CANVAS_CONFIG: LmsServicePageConfig = {
    slug: "canvas-lms-quiz-solver",
    platformName: "Canvas LMS (Classic & New Quizzes)",
    platformShort: "Canvas LMS",
    heroBadge: "Canvas Classic & New Quizzes (LTI 1.3) · SpeedGrader Log Audited",
    heroDotColor: "#E63946",
    h1Title: "Canvas LMS Quiz Solver —",
    h1Highlight: "0.3s Inline AI & Zero SpeedGrader Flags.",
    aeoSummary: (
        <>
            <strong>ExamGhost</strong> solves <strong>Canvas Classic Quizzes</strong> and <strong>Canvas New Quizzes (LTI 1.3)</strong> directly inside your active browser tab in <strong>0.3 seconds</strong>. Double-click any question card or press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">Alt+S</kbd> for Snap-It Vision OCR while keeping Canvas SpeedGrader’s <code className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">quiz_submission_events</code> log at <strong>0 page_blurred flags</strong>.
        </>
    ),
    videoDemo: {
        platformSub: "SpeedGrader Shield · Classic & New Quizzes LTI",
        browserUrl: "canvas.stanford.edu/courses/49102/quizzes/88312/take",
        badgeBg: "#cdeecb",
        badgeText: "#14532d",
        telemetryLabel: "Canvas page_blurred: 0",
        questions: [
            {
                id: 1,
                number: "1",
                subject: "Science",
                courseCode: "BIO-204 · Canvas Midterm Quiz",
                pts: "2.0 pts",
                type: "mcq",
                question:
                    "Which organelle is responsible for generating over 90% of cellular ATP via oxidative phosphorylation across its inner cristae membrane?",
                options: [
                    { label: "A", text: "Golgi apparatus (cis-trans cisternae)" },
                    { label: "B", text: "Mitochondria (oxidative phosphorylation)" },
                    { label: "C", text: "Smooth endoplasmic reticulum" },
                    { label: "D", text: "Peroxisome vesicle matrix" },
                ],
                correctOption: "B",
                correctOptions: ["B"],
                answerText: "Mitochondria (oxidative phosphorylation)",
                explanation:
                    "Mitochondria synthesize ~30–32 ATP molecules per glucose via the TCA cycle and F1Fo-ATP synthase proton gradient across the inner mitochondrial membrane.",
            },
            {
                id: 2,
                number: "2",
                subject: "General",
                courseCode: "CS-301 · Canvas Multiple Answers",
                pts: "3.0 pts",
                type: "multi",
                question:
                    "Which of the following operations or architectural properties apply to a LIFO (Last In, First Out) Stack? Select all that apply.",
                options: [
                    { label: "A", text: "push(x) inserts an element at the top pointer in O(1) time" },
                    { label: "B", text: "pop() removes and returns the most recently inserted element" },
                    { label: "C", text: "FIFO head-to-tail ring buffer scheduling" },
                    { label: "D", text: "Manages activation records (stack frames) during recursion" },
                ],
                correctOption: "A",
                correctOptions: ["A", "B", "D"],
                answerText: "push(x) O(1), pop() latest element, Manages recursion stack frames",
                explanation:
                    "A Stack enforces Last-In, First-Out (LIFO) ordering via O(1) push() and pop() operations at a single top pointer and manages call stack frames.",
            },
            {
                id: 3,
                number: "3",
                subject: "Science",
                courseCode: "NEURO-310 · Canvas Multiple Dropdowns",
                pts: "3.0 pts",
                type: "dropdown",
                question:
                    "During a neuronal action potential, rapid depolarization is triggered by the opening of voltage-gated Sodium channels, whereas repolarization is driven by the delayed efflux of Potassium ions.",
                clozePrefix: "During a neuronal action potential, rapid depolarization is triggered by the opening of voltage-gated",
                clozeMiddle: "channels, whereas repolarization is driven by the delayed efflux of",
                clozeSuffix: "ions.",
                blank1Options: ["Chloride (Cl-)", "Sodium (Na+)", "Magnesium (Mg2+)"],
                blank2Options: ["Calcium (Ca2+)", "Potassium (K+)", "Bicarbonate (HCO3-)"],
                dropdownAnswers: ["Sodium (Na+)", "Potassium (K+)"],
                answerText: "Sodium (Na+) ➔ Potassium (K+)",
                explanation:
                    "Threshold depolarization (-55 mV) opens fast voltage-gated Na+ channels causing rapid Na+ influx, followed by Na+ inactivation and delayed K+ efflux.",
            },
            {
                id: 4,
                number: "4",
                subject: "General",
                courseCode: "CS-301 · Canvas Fill-in-the-Blank",
                pts: "2.0 pts",
                type: "short",
                question:
                    "State the worst-case time complexity (in Big-O notation) of searching for a key in a height-balanced AVL Binary Search Tree with n nodes.",
                correctOption: null,
                correctOptions: [],
                answerText: "O(log n)",
                explanation:
                    "Because an AVL tree maintains a strict balance factor of {-1, 0, +1} at every node, its height is bounded by 1.44 log2(n), guaranteeing O(log n) worst-case lookup.",
            },
            {
                id: 5,
                number: "5",
                subject: "Math",
                courseCode: "MATH-221 · Canvas New Quizzes Stimulus OCR",
                pts: "5.0 pts",
                type: "mcq",
                isOcr: true,
                question:
                    "From the Canvas stimulus diagram below, determine hypotenuse c (legs a = 6, b = 8) and the instantaneous tangent slope dy/dx of y = 0.5x² - 2x + 4 at x = 4:",
                diagramLabels: {
                    legA: "a = 6",
                    legB: "b = 8",
                    hypC: "c = ?",
                    curveLabel: "dy/dx at x = 4",
                },
                options: [
                    { label: "A", text: "c = 9.0,  dy/dx = 1.5" },
                    { label: "B", text: "c = 10.0, dy/dx = 2.0" },
                    { label: "C", text: "c = 12.0, dy/dx = 0.5" },
                    { label: "D", text: "c = 14.0, dy/dx = 3.0" },
                ],
                correctOption: "B",
                correctOptions: ["B"],
                answerText: "c = 10.0, dy/dx = 2.0",
                explanation:
                    "By the Pythagorean theorem, c = √(6² + 8²) = 10.0. Differentiating y = 0.5x² - 2x + 4 yields dy/dx = x - 2; at x = 4, dy/dx = 2.0.",
            },
        ],
    },
    architecture: {
        cardBg: "rgba(205, 238, 203, 0.35)",
        cardBorder: "#cdeecb",
        mascotTitle: "Zero page_blurred Telemetry",
        mascotSubtitle: (
            <>
                Prevents Canvas’s <code className="font-mono text-ink">quiz_submission_events</code> API from recording red focus-loss flags.
            </>
        ),
        pills: ["0 page_blurred Flags", "New Quizzes LTI Ready", "Closed Shadow DOM"],
        eyebrow: "CANVAS SPEEDGRADER TELEMETRY AUDIT",
        heading: "How Canvas SpeedGrader logs work—and how ExamGhost stays invisible.",
        lead: (
            <>
                Instructure Canvas tracks student activity using the <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">POST /api/v1/courses/:id/quizzes/:id/submissions/:id/events</code> endpoint. Whenever you click outside the active Canvas tab or switch windows to ChatGPT, Canvas dispatches <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">page_blurred</code> and <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">page_focused</code> timestamps that render as red <em>“Stopped viewing the Canvas quiz-taking page”</em> warnings in SpeedGrader. ExamGhost solves questions inline inside an isolated <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Closed Shadow DOM</code> container so browser focus never leaves your exam.
            </>
        ),
        pillars: [
            {
                title: "Classic & New Quizzes LTI",
                desc: (
                    <>
                        Works natively on both legacy <code className="font-mono text-ink">.question_holder</code> DOM nodes and Canvas New Quizzes (<code className="font-mono text-ink">quiz-lti</code>) cross-origin iframes.
                    </>
                ),
                image: "/images/ghost/ghost_card_stealth.jpg",
            },
            {
                title: "Snap-It Vision OCR (Alt+S)",
                desc: (
                    <>
                        Solves locked Canvas stimulus passages, chemistry structures, and embedded PDFs in 0.3s using <strong>DeepSeek-R1 + GPT-4o Vision</strong>.
                    </>
                ),
                image: "/images/ghost/ghost_card_vision.jpg",
            },
            {
                title: "Every Canvas Question Type",
                desc: (
                    <>
                        Auto-fills Multiple Choice, Multiple Answers, Multiple Dropdowns, Matching, Numerical, Formula, and Fill-in-the-Blank questions.
                    </>
                ),
                image: "/images/ghost/ghost_card_hud.jpg",
            },
        ],
    },
    benchmark: {
        eyebrow: "CANVAS LMS BENCHMARK",
        heading: "ExamGhost vs. ChatGPT & Legacy Extensions on Canvas",
        windowTitle: "2026 Canvas Classic & New Quizzes Telemetry Matrix",
        windowBadge: "Verified on SpeedGrader",
        rows: [
            {
                capability: "Canvas SpeedGrader Quiz Log (page_blurred)",
                examghost: "0 page_blurred or tab-switch flags",
                chatgpt: (
                    <>
                        Logs red <em>Stopped viewing</em> flag on every switch
                    </>
                ),
                sidebar: "Logs focus loss when clicking extension iframe",
            },
            {
                capability: "Canvas New Quizzes (LTI 1.3 iframe) support",
                examghost: "Native all_frames + Closed Shadow DOM",
                chatgpt: "Manual copy-paste (triggers paste listeners)",
                sidebar: "Fails inside cross-origin quiz-lti iframes",
            },
            {
                capability: "Multiple Dropdowns, Matching & Formula questions",
                examghost: "1-click inline selection & symbolic math",
                chatgpt: "Slow manual re-entry across multiple blanks",
                sidebar: "Supports standard 4-option text MCQ only",
            },
            {
                capability: "Locked stimulus diagrams & LaTeX equations",
                examghost: "Built-in Snap-It Vision OCR (Alt+S)",
                chatgpt: "Manual screenshot & file upload (20s+)",
                sidebar: "Cannot read non-selectable images or SVGs",
            },
            {
                capability: "Screen-share & lecture hall stealth",
                examghost: "Invisible (Alt+1), Stealth (Alt+2), Explain (Alt+3)",
                chatgpt: "Visible ChatGPT window on screen",
                sidebar: "Injects permanent floating sidebar into DOM",
            },
        ],
    },
    faqSubtitle:
        "Technical answers on Canvas SpeedGrader activity logs, Classic vs. New Quizzes (LTI 1.3), Multiple Dropdowns, and your 50 free solves.",
    faqs: [
        {
            id: "faq-canvas-detect-examghost-speedgrader-log",
            category: "stealth",
            badge: "0 page_blurred Flags",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "Can Canvas detect the ExamGhost Chrome extension in SpeedGrader Quiz Logs?",
            a: (
                <>
                    <strong>No, Canvas LMS cannot detect ExamGhost</strong> because browser sandboxing prevents websites from enumerating installed Chrome extensions, and ExamGhost renders inside a{' '}
                    <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Closed Shadow DOM</code> root. Canvas only logs red <em>“Stopped viewing the Canvas quiz-taking page”</em> warnings when{' '}
                    <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">window.onblur</code> or{' '}
                    <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">document.visibilitychange</code> fires—which happens when you switch tabs to ChatGPT, never when solving inline with ExamGhost.
                </>
            ),
        },
        {
            id: "faq-canvas-new-quizzes-lti-support",
            category: "platforms",
            badge: "New Quizzes LTI",
            badgeBg: "bg-[#c4d0f8] text-indigo-950",
            q: "Does ExamGhost work on both Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3)?",
            a: (
                <>
                    <strong>Yes, ExamGhost supports both Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3) natively.</strong> Because New Quizzes load inside a cross-origin <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">quiz-lti</code> iframe, legacy extensions like{' '}
                    <Link prefetch={false} href="/canvashack-vs-examghost" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">CanvasHack</Link> often fail to read question nodes. ExamGhost attaches across <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">all_frames: true</code> and solves both engines identically.
                </>
            ),
        },
        {
            id: "faq-canvas-multiple-dropdowns-matching-formula",
            category: "ocr",
            badge: "All Question Types",
            badgeBg: "bg-[#e2d3fa] text-purple-950",
            q: "Can ExamGhost solve Canvas Multiple Dropdowns, Matching, Formula, and Fill-in-Multiple-Blanks?",
            a: (
                <>
                    <strong>Yes, double-clicking any Canvas question card automatically parses all native <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">&lt;select&gt;</code> dropdowns, checkboxes, radio buttons, and text inputs in context.</strong> In Auto-Fill mode, ExamGhost selects every correct dropdown or checkbox option in <strong>0.3 seconds</strong>; in Stealth Highlight mode, it places a subtle green <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">✓</code> next to the verified choice.
                </>
            ),
        },
        {
            id: "faq-canvas-snap-it-ocr-stimulus-graphs",
            category: "ocr",
            badge: "Alt + S Vision OCR",
            badgeBg: "bg-[#bfe3f6] text-sky-950",
            q: "How do I solve locked Canvas images, chemistry diagrams, and embedded PDFs?",
            a: (
                <>
                    <strong>Press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+S</kbd> (or <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">⌘+Shift+S</kbd>) to activate Snap-It Vision OCR</strong>, then drag a selection box over any diagram, graph, or stimulus passage on your Canvas page. ExamGhost routes the image through <strong>DeepSeek-R1</strong> and <strong>GPT-4o Vision</strong> and returns the answer with step-by-step work in under 0.4 seconds.
                </>
            ),
        },
        {
            id: "faq-canvas-quiz-log-pacing-30-second-poll",
            category: "stealth",
            badge: "Natural Pacing",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "Does ExamGhost solve all questions at once or one by one as I read?",
            a: (
                <>
                    <strong>ExamGhost strictly solves questions one by one when you double-click a question card or drag a Snap-It OCR box.</strong> Solving one question at a time ensures your Canvas <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">quiz_submission_events</code> answer timestamps follow a natural human reading cadence rather than an instant batch-submission spike.
                </>
            ),
        },
        {
            id: "faq-canvas-invisible-stealth-explain-modes",
            category: "stealth",
            badge: "Alt+1 / Alt+2 / Alt+3",
            badgeBg: "bg-[#bfe3f6] text-sky-950",
            q: "How do I switch between Invisible Mode, Stealth Mode, and Explain Mode during a Canvas quiz?",
            a: (
                <>
                    <strong>Use instant keyboard hotkeys or the extension popup:</strong> press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+1</kbd> for <strong>Invisible Mode</strong> (silent auto-fill + clipboard copy with zero visual UI), <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+2</kbd> for <strong>Stealth Mode</strong> (auto-fill or subtle <code className="font-mono text-ink">✓</code> hint), or <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+3</kbd> for <strong>Explain Mode</strong> (slides in the step-by-step rationale banner).
                </>
            ),
        },
        {
            id: "faq-canvas-respondus-lockdown-honorlock",
            category: "stealth",
            badge: "Browser Scope",
            badgeBg: "bg-[#ffe9a0] text-amber-950",
            q: "Does ExamGhost work on Canvas quizzes that require Respondus LockDown Browser?",
            a: (
                <>
                    <strong>ExamGhost runs inside standard Chromium browsers—including Google Chrome, Brave, Microsoft Edge, and Arc</strong>—for web-based Canvas quizzes and homework. Standalone desktop apps like Respondus LockDown Browser use a locked custom browser shell that blocks all third-party Chrome extensions.
                </>
            ),
        },
        {
            id: "faq-canvas-free-50-solves-trial",
            category: "platforms",
            badge: "50 Free Solves",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "How do I claim 50 free Canvas quiz solves?",
            a: (
                <>
                    <strong>Install the ExamGhost Chrome extension from the Chrome Web Store to receive 50 free question solves immediately with no credit card required.</strong> You can also test every mode right now in the interactive 6-chapter Canvas film above or in our{' '}
                    <Link prefetch={false} href="/canvas-quiz-solver-free-demo" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Live Canvas Quiz Sandbox</Link>.
                </>
            ),
        },
    ],
    jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://examghost.com/canvas-lms-quiz-solver#webpage",
                "url": "https://examghost.com/canvas-lms-quiz-solver",
                "name": "Canvas LMS Quiz Solver (2026) — Classic & New Quizzes AI | ExamGhost",
                "description":
                    "Solve Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3) inline in 0.3s. Zero SpeedGrader page_blurred flags, Closed Shadow DOM stealth, and Snap-It OCR (Alt+S).",
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-29",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": "https://examghost.com/canvas-lms-quiz-solver#breadcrumb" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "#lms-faq h2", "#lms-faq h3", ".faq-answer"]
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/canvas-lms-quiz-solver#software",
                "name": "ExamGhost Canvas LMS Quiz Solver",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, Arc, macOS, Windows",
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "0.00",
                    "highPrice": "199.00",
                    "priceCurrency": "USD",
                    "offerCount": "4"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvas-lms-quiz-solver#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Live Sandbox",
                        "item": "https://examghost.com/canvas-quiz-solver-free-demo"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Canvas LMS Quiz Solver",
                        "item": "https://examghost.com/canvas-lms-quiz-solver"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvas-lms-quiz-solver#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Canvas detect the ExamGhost Chrome extension in SpeedGrader Quiz Logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, Canvas LMS cannot detect ExamGhost because browser sandboxing prevents websites from enumerating installed Chrome extensions, and ExamGhost renders inside a Closed Shadow DOM root. Canvas only logs red 'Stopped viewing the Canvas quiz-taking page' warnings when window.onblur or document.visibilitychange fires—which happens when you switch tabs to ChatGPT, never when solving inline with ExamGhost."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost work on both Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, ExamGhost supports both Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3) natively. Because New Quizzes load inside a cross-origin quiz-lti iframe, legacy extensions often fail to read question nodes. ExamGhost attaches across all_frames: true and solves both engines identically."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can ExamGhost solve Canvas Multiple Dropdowns, Matching, Formula, and Fill-in-Multiple-Blanks?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, double-clicking any Canvas question card automatically parses all native <select> dropdowns, checkboxes, radio buttons, and text inputs in context. In Auto-Fill mode, ExamGhost selects every correct dropdown or checkbox option in 0.3 seconds; in Stealth Highlight mode, it places a subtle green checkmark next to the verified choice."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I solve locked Canvas images, chemistry diagrams, and embedded PDFs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Press Alt+S (or ⌘+Shift+S) to activate Snap-It Vision OCR, then drag a selection box over any diagram, graph, or stimulus passage on your Canvas page. ExamGhost routes the image through DeepSeek-R1 and GPT-4o Vision and returns the answer with step-by-step work in under 0.4 seconds."
                        }
                    }
                ]
            }
        ]
    }
};

export default function CanvasLmsQuizSolverPage() {
    return <LmsServicePageTemplate config={CANVAS_CONFIG} />;
}
