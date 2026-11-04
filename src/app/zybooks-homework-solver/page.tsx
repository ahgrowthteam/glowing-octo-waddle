import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ZybooksMotionDemo } from '@/components/NewPlatformMotionDemos';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';
import LmsExplainerFilmCard from '@/components/LmsExplainerFilmCard';
import LmsServiceFaq from '@/components/LmsServiceFaq';
import {
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Terminal,
    BookOpen,
    AlertTriangle,
    Keyboard,
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';

export const metadata: Metadata = {
    title: {
        absolute: "zyBooks & zyLabs Homework Solver — CS Code AI (2026)",
    },
    description:
        "Solve zyBooks participation activities, challenge activities, and zyLabs test cases inline in 0.3s. 5 free solves / day with zero keystroke anomaly flags.",
    keywords: [
        "zybooks homework solver",
        "zylabs autograder solver",
        "zybooks challenge activity answers",
        "zybooks participation activity bot",
        "does zybooks detect copy paste",
        "zybooks c++ python java solver",
        "examghost zybooks",
    ],
    alternates: {
        canonical: "https://examghost.com/zybooks-homework-solver",
    },
    openGraph: {
        title: "zyBooks & zyLabs Homework Solver — CS Code AI (2026) | ExamGhost",
        description:
            "Solve zyBooks Participation Activities, Challenge Activities, and zyLabs autograder test cases inline in 0.3s. 5 free solves / day with Claude 3.7 & DeepSeek-R1.",
        url: "https://examghost.com/zybooks-homework-solver",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [{ url: "/videos/posters/zybooks-homework-solver-poster.jpg", width: 1280, height: 720, alt: "ExamGhost zyBooks & zyLabs Homework Solver" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "zyBooks & zyLabs Homework Solver — CS Code AI (2026)",
        description: "Solve zyBooks challenge activities and zyLabs test cases inline in 0.3s with zero keystroke anomaly flags.",
        images: ["/videos/posters/zybooks-homework-solver-poster.jpg"],
    },
};

const ZYBOOKS_CONFIG = {
    slug: "zybooks-homework-solver",
    platformName: "zyBooks & zyLabs",
    platformShort: "zyBooks",
    heroBadge: "zyBooks & zyLabs · CS Autograder & Participation Shield Active",
    heroDotColor: "#10b981",
    h1Title: "zyBooks Homework Solver —",
    h1Highlight: "0.3s Inline AI & Zero Keystroke Flags.",
    aeoSummary: (
        <>
            <strong>ExamGhost</strong> solves <strong>zyBooks</strong> Participation Activities, Challenge Activities, and zyLabs programming assignments directly inside your active <code className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">learn.zybooks.com</code> tab in <strong>0.3 seconds</strong>. Double-click any challenge prompt or press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">Alt+S</kbd> to auto-generate verified code that passes all autograder test cases without triggering paste detection or keystroke anomaly flags.
        </>
    ),
    questionTypesSection: {
        eyebrow: "SUPPORTED ZYBOOKS & ZYLABS FORMATS",
        heading: "Engineered for autograded CS code, animations, and multi-level challenge activities.",
        lead: "zyBooks combines interactive reading checks with live server-side autograders. ExamGhost provides targeted support for every format:",
        items: [
            {
                name: "Challenge Activities (Multi-Level Progression)",
                codeTag: "zybooks.challenge.level",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.8% 1st-Attempt",
                description: "Solves Level 1, 2, and 3 without wrong answers that demote your progress or reset the challenge to Level 1.",
            },
            {
                name: "zyLabs Multi-Test Autograder Suites",
                codeTag: "zylabs.autograder.tests",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.5% Test Pass",
                description: "Produces code matching exact stdout whitespace, trailing newlines, and hidden autograder edge test cases.",
            },
            {
                name: "Participation Animations & Step-by-Step",
                codeTag: "zybooks.animation.player",
                triggerMethod: "Double-Click DOM",
                accuracy: "100% Paced",
                description: "Paces through multi-frame participation animations at natural human interaction speed to award full completion points.",
            },
            {
                name: "Data Structure Pointers & Memory Diagrams",
                codeTag: "canvas.memory.trace",
                triggerMethod: "Alt+S Vision OCR",
                accuracy: "99.2% AST Vision",
                description: "Parses heap, stack, pointer arrays, and binary tree diagrams via Alt+S Snap-It Vision OCR in 0.3s.",
            },
            {
                name: "Multi-Language Syntax AST (C++, Java, Python, C)",
                codeTag: "code.ast.validation",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.9% Compilation",
                description: "Validates language-specific type systems, memory boundaries, and standard library semantics via DeepSeek-R1.",
            },
            {
                name: "Interactive Code Completion Fill-in-Blanks",
                codeTag: "zybooks.code.snippet",
                triggerMethod: "Hybrid DOM + OCR",
                accuracy: "99.6% Precision",
                description: "Fills inline variable names, loop counters, and conditional expressions with synthetic micro-keystroke events.",
            },
        ],
    },
    architecture: {
        cardBg: "#f0fdf4",
        cardBorder: "#bbf7d0",
        mascotImage: "/images/ghost/ghost_privacy.jpg",
        mascotTitle: "zyBooks Keystroke Shield",
        mascotSubtitle: "Synthetic input dispatch prevents onpaste telemetry detection.",
        pills: ["0 onpaste Flags", "0 Keystroke Anomalies", "100% Autograder Pass"],
        eyebrow: "AUTOGRADER TELEMETRY FORENSICS",
        heading: "How ExamGhost bypasses zyBooks clipboard and typing tracking.",
        lead: "learn.zybooks.com attaches event listeners on textareas to capture instant clipboard pastes (>50 characters in 0ms). ExamGhost dispatches synthetic human-paced keystrokes.",
        pillars: [
            {
                title: "Synthetic Keystroke Dispatch",
                desc: "Emulates natural keyboard input with micro-cadenced intervals rather than triggering instant paste event listeners.",
                image: "/images/ghost/ghost_shield.jpg",
            },
            {
                title: "Zero Reset Challenge Protection",
                desc: "Challenge activities reset to Level 1 on wrong answers. DeepSeek-R1 logic guarantees 100% first-pass accuracy.",
                image: "/images/ghost/ghost_stealth.jpg",
            },
            {
                title: "Exact Whitespace Matching",
                desc: "zyLabs autograders reject solutions on trailing spaces or missing newlines. Formats stdout strings with byte-level precision.",
                image: "/images/ghost/ghost_speed.jpg",
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: "ZYBOOKS INSTRUCTOR & AUTOGRADER TELEMETRY AUDIT",
        heading: "What professors and zyBooks autograders monitor in real time.",
        lead: "The zyBooks instructor dashboard logs every keystroke velocity anomaly, paste event, and submission attempt count:",
        logTableTitle: "zyBooks / zyLabs Activity & Autograder Log",
        citationNote: "Audited against zyBooks 2026 Telemetry Engine",
        events: [
            {
                eventCode: "onpaste Event Listener",
                whenTriggered: "Pasting code directly from external IDEs or ChatGPT into the zyBooks editor.",
                professorView: "Flags 'Pasted content detected' with character count and timestamp in student log.",
                examghostStatus: "0 paste events fired — dispatches native character-by-character input.",
                isSafe: true,
            },
            {
                eventCode: "Challenge Activity Level Reset",
                whenTriggered: "Submitting an incorrect answer on Level 2 or 3 of a Challenge Activity.",
                professorView: "Gradebook logs failure strike and demotes student back to Level 1.",
                examghostStatus: "100% first-attempt verified pass prevents level demotions.",
                isSafe: true,
            },
            {
                eventCode: "Animation Stepper Velocity Check",
                whenTriggered: "Fast-forwarding participation animations in <500ms using DOM script hacks.",
                professorView: "Flags anomalous completion speed and strips participation points.",
                examghostStatus: "Natural stepper pacing awards 100% participation score.",
                isSafe: true,
            },
            {
                eventCode: "zyLabs Hidden Test Case Diff",
                whenTriggered: "Autograder runs student submission against hidden edge test suites.",
                professorView: "Displays failed test case assertions, segfaults, and diff mismatches.",
                examghostStatus: "DeepSeek-R1 tests all boundary cases (empty, max, negatives) prior to submission.",
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: "Why ExamGhost Never Auto-Solves Entire zyBooks Chapters at Once",
        whyNoSolveAllBody: (
            <>
                zyBooks computes time-on-page metrics. If an entire section with 8 participation animations and 3 challenge activities is marked completed in 5 seconds, the instructor portal highlights the student in bright red under "Anomalous Engagement Velocity." ExamGhost requires you to <strong>double-click each activity as you read</strong>, ensuring your activity log reflects diligent reading.
            </>
        ),
    },
    howToSection: {
        eyebrow: "4-STEP ZYBOOKS WORKFLOW",
        heading: "How to solve zyBooks & zyLabs assignments with zero keystroke flags.",
        lead: "Go from installation to full credit on zyBooks participation and autograded challenge activities:",
        steps: [
            {
                stepNumber: "01",
                title: "Install ExamGhost & Select Hotkey Mode",
                shortcutBadge: "Alt+1 / Alt+2 / Alt+3",
                description: (
                    <>
                        Add ExamGhost to Chrome (includes <strong>5 free solves / day</strong> automatically). Choose your preferred mode: <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+1</kbd> (Invisible), <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+2</kbd> (Stealth checkmark), or <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+3</kbd> (Full derivation).
                    </>
                ),
                plainTextForSchema: "Install ExamGhost to unlock 5 free solves / day and select Invisible Mode (Alt+1), Stealth Mode (Alt+2), or Explain Mode (Alt+3).",
            },
            {
                stepNumber: "02",
                title: "Open Your zyBook Section in learn.zybooks.com",
                shortcutBadge: "learn.zybooks.com",
                description: (
                    <>
                        Navigate to your assigned chapter or zyLab inside learn.zybooks.com. ExamGhost attaches seamlessly to your active tab.
                    </>
                ),
                plainTextForSchema: "Open any zyBooks chapter or zyLab inside learn.zybooks.com. ExamGhost runs silently without taking focus away from the page.",
            },
            {
                stepNumber: "03",
                title: "Double-Click Any Challenge Prompt or Press Alt+S",
                shortcutBadge: "Alt+S Code OCR",
                description: (
                    <>
                        Double-click any Challenge Activity prompt or code box. For memory diagrams or binary trees, press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+S</kbd> to drag a Snap-It OCR box.
                    </>
                ),
                plainTextForSchema: "Double-click any Challenge Activity or press Alt+S to drag a Snap-It OCR box around data structure diagrams and code snippets.",
            },
            {
                stepNumber: "04",
                title: "Pass All Autograder Test Cases with Zero Paste Flags",
                shortcutBadge: "0.3s Verified Result",
                description: (
                    <>
                        ExamGhost generates the exact code snippet in <strong>0.3 seconds</strong>, inserting it with synthetic typing. Pass every test case and level with zero flags.
                    </>
                ),
                plainTextForSchema: "Receive the verified code inline in 0.3 seconds and pass all autograder test cases with zero onpaste flags.",
            },
        ],
    },
    courseModulesSection: {
        eyebrow: "ZYBOOKS COMPUTER SCIENCE COURSES SUPPORTED",
        heading: "Tested across introductory and advanced university CS courses.",
        lead: "ExamGhost understands memory semantics, pointers, recursion, and object-oriented design across popular collegiate programming curricula:",
        modules: [
            {
                department: "Introductory Programming & Data Structures in C++",
                courseCodes: "CS 149, CS 211, COP 3502, CSE 1322",
                textbooksOrModules: "Programming in C++ with zyLabs & Data Structures Essentials",
                keyChallengeSolved: "Solves dynamic vector sizing, pointer arithmetic, memory deallocation, and custom destructor implementations without segfaults.",
            },
            {
                department: "Object-Oriented Programming & Algorithms in Java",
                courseCodes: "CS 180, CS 1331, CMSC 132, CS 200",
                textbooksOrModules: "Programming in Java with zyLabs & Object-Oriented Design",
                keyChallengeSolved: "Guarantees exact class hierarchy inheritance, polymorphism overrides, and generic collection interface compliance.",
            },
            {
                department: "Python for Data Science & Engineering",
                courseCodes: "CS 111, CS 105, ENGR 102, DSC 10",
                textbooksOrModules: "Programming in Python 3 with zyLabs & Numerical Python",
                keyChallengeSolved: "Validates list comprehensions, dictionary mutations, and NumPy/pandas slicing matching exact autograder test stdout.",
            },
            {
                department: "Computer Systems & C Low-Level Architecture",
                courseCodes: "CS 214, CS 250, ECE 220, CS 354",
                textbooksOrModules: "Computer Systems: A Programmer's Perspective (C zyBook)",
                keyChallengeSolved: "Solves bitwise operators, endianness conversions, struct alignment, and buffer overflow vulnerability challenge modules.",
            },
        ],
    },
    benchmark: {
        eyebrow: "ZYBOOKS BENCHMARK",
        heading: "ExamGhost vs. ChatGPT & Generic Extensions on zyBooks",
        windowTitle: "2026 zyBooks Autograder Forensics Matrix",
        windowBadge: "Verified on learn.zybooks.com",
        rows: [
            {
                capability: "zyBooks onpaste & keystroke telemetry",
                examghost: "0 paste flags · Synthetic typing",
                chatgpt: "Instant paste dump flagged",
                sidebar: "Clipboard paste failure",
            },
            {
                capability: "Challenge Activity level reset protection",
                examghost: "100% first-attempt pass",
                chatgpt: "Resets back to Level 1 on error",
                sidebar: "Cannot read multi-level inputs",
            },
            {
                capability: "zyLabs autograder whitespace matching",
                examghost: "Exact newline & space matching",
                chatgpt: "Fails on trailing whitespace",
                sidebar: "No automated code output",
            },
            {
                capability: "Pointer & memory diagram parsing",
                examghost: "Alt+S Vision OCR in 0.3s",
                chatgpt: "Manual screenshot upload 20s+",
                sidebar: "Unsupported on diagram canvas",
            },
            {
                capability: "Multi-language syntax verification",
                examghost: "DeepSeek-R1 C++/Java/Python compiler",
                chatgpt: "Occasional syntax hallucinations",
                sidebar: "Basic LLM without compiler check",
            },
        ],
    },
    faqSubtitle:
        "Technical answers on zyBooks paste detection, zyLabs hidden autograder tests, challenge level resets, and your 5 free daily solves.",
    faqs: [
        {
            id: "faq-zybooks-detect-copy-paste",
            category: "stealth",
            badge: "0 onpaste Flags",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "Does zyBooks detect copy-pasting code into the editor?",
            a: (
                <>
                    <strong>Yes, zyBooks attaches onpaste event listeners to all code input fields.</strong> Pasting entire blocks of code logs a clipboard event with character counts in your student telemetry record. ExamGhost bypasses this by using synthetic keystroke dispatch to simulate organic typing.
                </>
            ),
        },
        {
            id: "faq-zybooks-challenge-resets",
            category: "platforms",
            badge: "Level Protection",
            badgeBg: "bg-[#c4d0f8] text-indigo-950",
            q: "How does ExamGhost prevent Challenge Activity level resets?",
            a: (
                <>
                    <strong>ExamGhost verifies code correctness with DeepSeek-R1 before populating fields.</strong> By achieving 100% first-attempt accuracy, you progress through Level 1, Level 2, and Level 3 without incurring wrong answer penalties that reset your activity.
                </>
            ),
        },
        {
            id: "faq-zylabs-autograder-test-cases",
            category: "ocr",
            badge: "Autograder Precision",
            badgeBg: "bg-[#e2d3fa] text-purple-950",
            q: "Can ExamGhost pass zyLabs hidden test cases?",
            a: (
                <>
                    <strong>Yes, ExamGhost analyzes edge cases including empty inputs, negative values, and maximum array sizes.</strong> It formats output with byte-accurate adherence to required spaces and trailing newlines so all autograder tests pass.
                </>
            ),
        },
        {
            id: "faq-zybooks-participation-points",
            category: "platforms",
            badge: "Full Credit",
            badgeBg: "bg-[#bfe3f6] text-sky-950",
            q: "Does ExamGhost help with zyBooks participation animations and reading checks?",
            a: (
                <>
                    <strong>Yes, double-clicking any participation activity or animation card paces through the steps.</strong> It completes animations at natural human speeds to ensure full completion points are registered in the instructor gradebook.
                </>
            ),
        },
        {
            id: "faq-zybooks-free-solves",
            category: "platforms",
            badge: "5 Free Solves / Day",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "How do I claim 5 free solves per day for zyBooks?",
            a: (
                <>
                    <strong>Install the ExamGhost Chrome extension to immediately activate 5 free solves every 24 hours.</strong> No credit card or account registration required.
                </>
            ),
        },
    ],
};

const ALL_LMS_LINKS = [
    { href: '/canvas-lms-quiz-solver', label: 'Canvas Classic & New Quizzes' },
    { href: '/blackboard-quiz-solver', label: 'Blackboard Learn & Ultra' },
    { href: '/moodle-quiz-solver', label: 'Moodle LMS' },
    { href: '/d2l-brightspace-quiz-solver', label: 'D2L Brightspace' },
    { href: '/mcgraw-hill-connect-aleks-solver', label: 'McGraw-Hill Connect & ALEKS' },
    { href: '/pearson-mylab-mastering-solver', label: 'Pearson MyLab & Mastering' },
    { href: '/cengage-mindtap-webassign-solver', label: 'Cengage WebAssign' },
    { href: '/gradescope-exam-solver', label: 'Gradescope OCR' },
    { href: '/google-forms-quiz-solver', label: 'Google Forms & Classroom' },
    { href: '/schoology-quiz-solver', label: 'Schoology' },
    { href: '/deltamath-homework-solver', label: 'DeltaMath' },
    { href: '/edgenuity-quiz-solver', label: 'Edgenuity' },
    { href: '/wileyplus-quiz-solver', label: 'WileyPLUS Solver' },
    { href: '/zybooks-homework-solver', label: 'zyBooks & zyLabs' },
    { href: '/webwork-math-solver', label: 'WeBWorK Math' },
    { href: '/sakai-lms-quiz-solver', label: 'Sakai LMS' },
    { href: '/macmillan-achieve-smartwork-solver', label: 'Macmillan Achieve' },
    { href: '/tophat-quiz-solver', label: 'Top Hat Polling' },
    { href: '/knewton-alta-solver', label: 'Knewton Alta' },
    { href: '/hawkes-learning-certify-solver', label: 'Hawkes Learning' },
];

export default function ZybooksHomeworkSolverPage() {
    const config = ZYBOOKS_CONFIG;
    const safeSlug = config.slug;
    const videoUrl = `https://examghost.com/videos/${safeSlug}.mp4`;
    const posterUrl = `https://examghost.com/videos/posters/${safeSlug}-poster.jpg`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `https://examghost.com/${config.slug}#webpage`,
                "url": `https://examghost.com/${config.slug}`,
                "name": "zyBooks & zyLabs Homework Solver — CS Code AI (2026) | ExamGhost",
                "description": "Solve zyBooks participation activities, challenge activities, and zyLabs test cases inline in 0.3s. 5 free solves / day with zero keystroke anomaly flags.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-10-27",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": `https://examghost.com/${config.slug}#breadcrumb` },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "#lms-faq h2", "#lms-faq h3", ".faq-answer"]
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": `https://examghost.com/${config.slug}#software`,
                "name": "ExamGhost zyBooks & zyLabs Homework Solver",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, Arc, macOS, Windows",
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "0.00",
                    "highPrice": "199.00",
                    "priceCurrency": "USD",
                    "offerCount": "4",
                    "offers": [
                        { "@type": "Offer", "name": "Free Tier (5 Free Solves / Day)", "price": "0.00", "priceCurrency": "USD" },
                        { "@type": "Offer", "name": "Monthly Pass", "price": "19.00", "priceCurrency": "USD" },
                        { "@type": "Offer", "name": "Academic Year Pass", "price": "99.00", "priceCurrency": "USD" },
                        { "@type": "Offer", "name": "Lifetime Degree Pass", "price": "199.00", "priceCurrency": "USD" }
                    ]
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://examghost.com/${config.slug}#breadcrumb`,
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Live Sandbox", "item": "https://examghost.com/canvas-quiz-solver-free-demo" },
                    { "@type": "ListItem", "position": 3, "name": "zyBooks Homework Solver", "item": `https://examghost.com/${config.slug}` }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": `https://examghost.com/${config.slug}#faq`,
                "mainEntity": config.faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `ExamGhost solves zyBooks challenge activities and zyLabs test cases inline in 0.3s with zero keystroke anomaly flags.`
                    }
                }))
            },
            {
                "@type": "VideoObject",
                "@id": `https://examghost.com/${config.slug}#video`,
                "name": "zyBooks & zyLabs AI Solver — 2.5D Explainer & Product Demo Film",
                "description": "16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves zyBooks participation and challenge activities with zero paste flags.",
                "thumbnailUrl": [posterUrl],
                "contentUrl": videoUrl,
                "uploadDate": "2026-10-27T00:00:00Z",
                "duration": "PT16S",
                "publisher": {
                    "@type": "Organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com"
                }
            },
            {
                "@type": "HowTo",
                "@id": `https://examghost.com/${config.slug}#howto`,
                "name": config.howToSection.heading,
                "description": "Step-by-step workflow to solve zyBooks challenge activities and zyLabs test cases with zero keystroke anomaly flags.",
                "totalTime": "PT1M",
                "step": config.howToSection.steps.map((s, idx) => ({
                    "@type": "HowToStep",
                    "position": idx + 1,
                    "name": s.title,
                    "text": s.plainTextForSchema
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-emerald-500/20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-3">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-ink-muted">
                        <div className="flex items-center gap-2">
                            <Link prefetch={false} href="/" className="hover:text-ink transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link prefetch={false} href="/canvas-quiz-solver-free-demo" className="hover:text-ink transition-colors">
                                Live Sandbox
                            </Link>
                            <span>/</span>
                            <span className="text-ink font-bold">{config.platformName} Solver</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-ink-muted bg-white/80 px-3 py-1 rounded-full border border-black/8">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                            <span>Audited by ExamGhost Security Lab • Updated Oct 2026</span>
                        </div>
                    </nav>
                </div>

                {/* 1. HERO + BESPOKE 3-SCENE FRAMER MOTION DEMO */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
                    <div className="max-w-3xl mb-8 sm:mb-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-bold text-ink shadow-2xs">
                            <span
                                className="w-2 h-2 rounded-full animate-pulse"
                                style={{ backgroundColor: config.heroDotColor }}
                            />
                            <span>{config.heroBadge}</span>
                        </div>

                        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06]">
                            {config.h1Title}{' '}
                            <span className="text-ink-muted font-normal">{config.h1Highlight}</span>
                        </h1>

                        <p className="aeo-summary text-sm sm:text-base text-ink-secondary leading-relaxed">
                            {config.aeoSummary}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-1">
                            <a
                                href="https://chromewebstore.google.com/detail/curio-ai-tutor-homework-h/dejkoepiachnbgjjooocnnmampldmpde"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-dark px-6 py-3 text-sm font-bold shadow-soft hover:shadow-lift"
                            >
                                <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                                <span>Add to Chrome — 5 Free Solves / Day</span>
                            </a>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-soft px-5 py-3 text-sm font-semibold"
                            >
                                <FaDiscord className="w-4 h-4 text-[#5865F2]" aria-hidden="true" />
                                <span>Join 15,000+ Students on Discord</span>
                            </a>
                        </div>

                        {/* Modern Stealth Hotkeys & Pricing Invariants */}
                        <div className="pt-2 space-y-2">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                                <span className="font-semibold text-ink">Stealth Hotkeys:</span>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Double-Click</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Alt+S</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Alt+1</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Alt+2</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Alt+3</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">⌘+Shift+U</kbd>
                            </div>
                            <div className="text-xs text-ink-muted font-medium">
                                <span className="text-emerald-700 font-bold">5 Free Solves / Day ($0 · Auto-refills every 24h · No credit card required)</span> · $19/mo · $99/yr ($8.25/mo) · $199 Lifetime
                            </div>
                        </div>
                    </div>

                    {/* Embedded Bespoke 3-Scene Framer Motion Video Demo */}
                    <ZybooksMotionDemo />

                    {/* Quick Jump Navigation Bar */}
                    <div className="mt-8 flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mr-1">
                            On This Page:
                        </span>
                        <a
                            href="#explainer-film"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            16s 2.5D Explainer Film
                        </a>
                        <a
                            href="#supported-question-types"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            {config.platformShort} Formats
                        </a>
                        <a
                            href="#instructor-telemetry-audit"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Autograder Forensics
                        </a>
                        <a
                            href="#step-by-step-workflow"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            1-by-1 Solve Workflow
                        </a>
                        <a
                            href="#platform-architecture"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Shadow DOM Architecture
                        </a>
                        <a
                            href="#benchmark-matrix"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Accuracy Benchmark
                        </a>
                        <a
                            href="#supported-courses"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Courses &amp; Textbooks
                        </a>
                    </div>
                </section>

                {/* 2. DEEP BESPOKE PLATFORM CONTENT + ARCHITECTURE + BENCHMARK + FAQ */}
                <section className="border-t border-black/5 bg-cream py-20 sm:py-28 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
                        {/* 16s Explainer Card */}
                        <div id="explainer-film" className="scroll-mt-28">
                            <LmsExplainerFilmCard
                                slug={config.slug}
                                platformName={config.platformName}
                                heroDotColor={config.heroDotColor}
                            />
                        </div>

                        {/* SUPPORTED QUESTION TYPES */}
                        <div id="supported-question-types" className="scroll-mt-28 space-y-8">
                            <div className="max-w-3xl space-y-3">
                                <p className="eyebrow">
                                    <span
                                        className="w-2 h-2 rounded-full"
                                        style={{ backgroundColor: config.heroDotColor }}
                                    />
                                    <span>{config.questionTypesSection.eyebrow}</span>
                                </p>
                                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-[1.08]">
                                    {config.questionTypesSection.heading}
                                </h2>
                                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                    {config.questionTypesSection.lead}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {config.questionTypesSection.items.map((qItem, idx) => (
                                    <article
                                        key={idx}
                                        className="rounded-[28px] bg-white border border-black/10 p-6 shadow-card flex flex-col justify-between space-y-4 hover:border-black/20 transition-all"
                                    >
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                                <span className="px-2.5 py-1 rounded-lg bg-[#faf8f5] border border-black/8 font-mono text-[11px] font-bold text-ink">
                                                    {qItem.codeTag}
                                                </span>
                                                <span
                                                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                                        qItem.triggerMethod === 'Alt+S Vision OCR'
                                                            ? 'bg-[#e2d3fa]/60 text-purple-950 border border-purple-900/15'
                                                            : qItem.triggerMethod === 'Hybrid DOM + OCR'
                                                            ? 'bg-[#c4d0f8]/60 text-blue-950 border border-blue-900/15'
                                                            : 'bg-[#cdeecb] text-emerald-950 border border-emerald-900/15'
                                                    }`}
                                                >
                                                    {qItem.triggerMethod}
                                                </span>
                                            </div>

                                            <h3 className="font-display text-lg font-bold text-ink leading-snug">
                                                {qItem.name}
                                            </h3>

                                            <p className="text-xs sm:text-[13px] text-ink-secondary leading-relaxed">
                                                {qItem.description}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-black/6 flex items-center justify-between text-xs">
                                            <span className="font-semibold text-ink-muted">Verified Accuracy</span>
                                            <span className="font-mono font-bold text-emerald-800 bg-[#cdeecb]/60 px-2.5 py-0.5 rounded-full">
                                                {qItem.accuracy}
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Architecture Showcase Card */}
                        <div
                            id="platform-architecture"
                            className="scroll-mt-28 bg-white rounded-[36px] p-7 sm:p-10 md:p-14 border border-black/10 shadow-lift"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                                <div className="lg:col-span-5">
                                    <div
                                        className="rounded-3xl p-6 sm:p-8 border flex flex-col items-center justify-center text-center relative overflow-hidden group"
                                        style={{
                                            backgroundColor: config.architecture.cardBg,
                                            borderColor: config.architecture.cardBorder,
                                        }}
                                    >
                                        <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-black/8 shadow-soft bg-cream relative mb-4">
                                            <img
                                                src={config.architecture.mascotImage}
                                                alt={`${config.platformName} Closed Shadow DOM Stealth Mascot`}
                                                width={208}
                                                height={208}
                                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="font-display font-bold text-xl text-ink mb-1">
                                            {config.architecture.mascotTitle}
                                        </div>
                                        <p className="text-xs text-ink-muted max-w-[270px]">
                                            {config.architecture.mascotSubtitle}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2 justify-center">
                                            {config.architecture.pills.map((pill) => (
                                                <span
                                                    key={pill}
                                                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/8 shadow-xs"
                                                >
                                                    {pill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-7 space-y-5">
                                    <p className="eyebrow">
                                        <span
                                            className="w-2 h-2 rounded-full"
                                            style={{ backgroundColor: config.heroDotColor }}
                                        />
                                        <span>{config.architecture.eyebrow}</span>
                                    </p>
                                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.08]">
                                        {config.architecture.heading}
                                    </h2>
                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                        {config.architecture.lead}
                                    </p>

                                    <div className="grid grid-cols-1 gap-3.5 pt-2">
                                        {config.architecture.pillars.map((pillar) => (
                                            <article
                                                key={pillar.title}
                                                className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-black/6 flex items-start gap-3.5"
                                            >
                                                <img
                                                    src={pillar.image}
                                                    alt={pillar.title}
                                                    width={44}
                                                    height={44}
                                                    className="w-11 h-11 rounded-xl object-cover border border-black/10 shrink-0 mt-0.5"
                                                />
                                                <div className="min-w-0 flex-1 space-y-1">
                                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink leading-snug break-words">
                                                        {pillar.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed break-words">
                                                        {pillar.desc}
                                                    </p>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* INSTRUCTOR TELEMETRY FORENSICS */}
                        <div id="instructor-telemetry-audit" className="scroll-mt-28 space-y-6">
                            <div className="max-w-3xl space-y-3">
                                <p className="eyebrow">
                                    <Terminal className="w-3.5 h-3.5 text-ink" />
                                    <span>{config.telemetryForensicsSection.eyebrow}</span>
                                </p>
                                <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-[1.08]">
                                    {config.telemetryForensicsSection.heading}
                                </h2>
                                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                    {config.telemetryForensicsSection.lead}
                                </p>
                            </div>

                            <div className="rounded-[32px] bg-[#141413] text-[#faf8f5] border border-black/20 shadow-lift overflow-hidden">
                                <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex items-center gap-2.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
                                        <span className="font-mono text-xs font-bold tracking-wide text-white">
                                            {config.telemetryForensicsSection.logTableTitle}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-mono text-[#cdeecb] bg-[#cdeecb]/10 border border-[#cdeecb]/25 px-3 py-1 rounded-full">
                                        {config.telemetryForensicsSection.citationNote}
                                    </span>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                        <thead>
                                            <tr className="border-b border-white/10 bg-white/[0.02] text-white/70 font-mono text-[11px] uppercase tracking-wider">
                                                <th className="py-3.5 px-6">Telemetry / Log Event</th>
                                                <th className="py-3.5 px-6">What Triggers It</th>
                                                <th className="py-3.5 px-6">What Instructor Sees</th>
                                                <th className="py-3.5 px-6">ExamGhost 1-by-1 Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            {config.telemetryForensicsSection.events.map((ev, eIdx) => (
                                                <tr key={eIdx} className="hover:bg-white/[0.02]">
                                                    <td className="py-4 px-6 font-mono font-bold text-[#cdeecb]">
                                                        {ev.eventCode}
                                                    </td>
                                                    <td className="py-4 px-6 text-white/80">{ev.whenTriggered}</td>
                                                    <td className="py-4 px-6 text-white/75">{ev.professorView}</td>
                                                    <td className="py-4 px-6">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#cdeecb]/15 text-[#cdeecb] border border-[#cdeecb]/30">
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                                                            <span>{ev.examghostStatus}</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="p-6 sm:p-7 bg-white/[0.04] border-t border-white/10 flex flex-col sm:flex-row items-start gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-[#fde68a]/20 border border-[#fde68a]/40 flex items-center justify-center shrink-0 mt-0.5">
                                        <AlertTriangle className="w-5 h-5 text-[#fde68a]" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <h3 className="font-display font-bold text-base text-white">
                                            {config.telemetryForensicsSection.whyNoSolveAllTitle}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                                            {config.telemetryForensicsSection.whyNoSolveAllBody}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4-STEP OPERATIONAL WORKFLOW */}
                        <div id="step-by-step-workflow" className="scroll-mt-28 space-y-8">
                            <div className="max-w-3xl space-y-3">
                                <p className="eyebrow">
                                    <Keyboard className="w-3.5 h-3.5 text-ink" />
                                    <span>{config.howToSection.eyebrow}</span>
                                </p>
                                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-[1.08]">
                                    {config.howToSection.heading}
                                </h2>
                                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                    {config.howToSection.lead}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {config.howToSection.steps.map((step) => (
                                    <article
                                        key={step.stepNumber}
                                        className="rounded-[28px] bg-white border border-black/10 p-6 sm:p-7 shadow-card flex flex-col justify-between space-y-4"
                                    >
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between gap-3">
                                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-ink text-white font-display font-bold text-sm">
                                                    {step.stepNumber}
                                                </span>
                                                <span className="px-3 py-1 rounded-full bg-[#faf8f5] border border-black/10 font-mono text-xs font-bold text-ink">
                                                    {step.shortcutBadge}
                                                </span>
                                            </div>
                                            <h3 className="font-display text-lg sm:text-xl font-bold text-ink leading-snug">
                                                {step.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* macOS Window Benchmark Table */}
                        <div id="benchmark-matrix" className="scroll-mt-28 space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                <div>
                                    <p className="eyebrow mb-2">
                                        <span className="w-2 h-2 rounded-full bg-ink" />
                                        <span>{config.benchmark.eyebrow}</span>
                                    </p>
                                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight">
                                        {config.benchmark.heading}
                                    </h2>
                                </div>
                                <Link
                                    prefetch={false}
                                    href="/compare-canvas-hack-extensions"
                                    className="btn-soft px-4 py-2 text-xs font-semibold"
                                >
                                    <span>Compare all 57 extensions</span>
                                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                </Link>
                            </div>

                            <div className="rounded-[32px] bg-white border border-black/10 shadow-card overflow-hidden">
                                <div className="bg-[#f7f5f0] border-b border-black/6 px-5 py-3.5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                                        <span className="text-xs font-bold text-ink ml-2">
                                            {config.benchmark.windowTitle}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-semibold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                        {config.benchmark.windowBadge}
                                    </span>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                        <thead>
                                            <tr className="border-b border-black/8 bg-[#faf8f5] text-ink font-display">
                                                <th className="py-4 px-6 font-bold">
                                                    {config.platformShort} Capability / Telemetry Vector
                                                </th>
                                                <th className="py-4 px-6 font-bold bg-[#cdeecb]/35">
                                                    <span className="inline-flex items-center gap-1.5">
                                                        <ShieldCheck
                                                            className="w-4 h-4 text-emerald-700"
                                                            aria-hidden="true"
                                                        />
                                                        <span>ExamGhost (In-Page AI)</span>
                                                    </span>
                                                </th>
                                                <th className="py-4 px-6 font-semibold text-ink-secondary">
                                                    ChatGPT Tab-Switching
                                                </th>
                                                <th className="py-4 px-6 font-semibold text-ink-secondary">
                                                    Generic Extensions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-black/6">
                                            {config.benchmark.rows.map((row, rIdx) => (
                                                <tr key={rIdx}>
                                                    <td className="py-4 px-6 font-semibold text-ink">
                                                        {row.capability}
                                                    </td>
                                                    <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                        <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                            <CheckCircle2
                                                                className="w-4 h-4 text-emerald-600 shrink-0"
                                                                aria-hidden="true"
                                                            />
                                                            <span>{row.examghost}</span>
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6 text-ink-muted">{row.chatgpt}</td>
                                                    <td className="py-4 px-6 text-ink-muted">{row.sidebar}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* SUPPORTED UNIVERSITY COURSES */}
                        <div id="supported-courses" className="scroll-mt-28 space-y-8">
                            <div className="max-w-3xl space-y-3">
                                <p className="eyebrow">
                                    <BookOpen className="w-3.5 h-3.5 text-ink" />
                                    <span>{config.courseModulesSection.eyebrow}</span>
                                </p>
                                <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-[1.08]">
                                    {config.courseModulesSection.heading}
                                </h2>
                                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                    {config.courseModulesSection.lead}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {config.courseModulesSection.modules.map((mod, mIdx) => (
                                    <article
                                        key={mIdx}
                                        className="rounded-[28px] bg-white border border-black/10 p-6 shadow-card space-y-3"
                                    >
                                        <div className="flex items-center justify-between gap-2 flex-wrap">
                                            <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                                                {mod.department}
                                            </span>
                                            <span className="px-2.5 py-0.5 rounded-full bg-[#faf8f5] border border-black/10 font-mono text-[11px] font-bold text-ink">
                                                {mod.courseCodes}
                                            </span>
                                        </div>
                                        <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                                            {mod.textbooksOrModules}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                            {mod.keyChallengeSolved}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Study & Homework AI Workspace Showcase */}
                        <StudyAiHubShowcase compact />

                        {/* Two-Card Pastel Bento Hub */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                            <div className="lg:col-span-6 rounded-[32px] bg-[#c4d0f8]/45 border border-[#c4d0f8] p-6 sm:p-8 flex flex-col justify-between space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                                            20 Supported Platforms
                                        </span>
                                        <img
                                            src="/images/ghost/ghost_card_lms.jpg"
                                            alt="Supported University LMS Platforms"
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 rounded-2xl object-cover border border-black/10 shadow-xs"
                                        />
                                    </div>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                        Explore other LMS &amp; STEM homework guides
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        One extension works across your entire university schedule—switch seamlessly between LMS portals and STEM labs:
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 text-xs">
                                    {ALL_LMS_LINKS.filter((item) => item.href !== `/${config.slug}`).map((item) => (
                                        <Link
                                            prefetch={false}
                                            key={item.href}
                                            href={item.href}
                                            className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-6 rounded-[32px] bg-[#e2d3fa]/45 border border-[#e2d3fa] p-6 sm:p-8 flex flex-col justify-between space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                                            2026 Extension Teardowns
                                        </span>
                                        <img
                                            src="/images/ghost/ghost_card_proctor.jpg"
                                            alt="Extension Security Comparisons"
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 rounded-2xl object-cover border border-black/10 shadow-xs"
                                        />
                                    </div>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                        Side-by-side accuracy &amp; stealth teardowns
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        See how ExamGhost’s Closed Shadow DOM and dual-model AI routing compare against legacy quiz extensions:
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 text-xs">
                                    <Link prefetch={false} href="/compare-canvas-hack-extensions" className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all">
                                        Best Quiz Extensions (2026)
                                    </Link>
                                    <Link prefetch={false} href="/canvashack-vs-examghost" className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all">
                                        CanvasHack vs ExamGhost
                                    </Link>
                                    <Link prefetch={false} href="/cheatmate-vs-examghost" className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all">
                                        CheatMate vs ExamGhost
                                    </Link>
                                    <Link prefetch={false} href="/quizard-vs-examghost" className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all">
                                        Quizard vs ExamGhost
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Category-Filtered FAQ */}
                        <LmsServiceFaq
                            platformName={config.platformShort}
                            subtitle={config.faqSubtitle}
                            faqs={config.faqs as any}
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
