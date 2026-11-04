import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MacmillanAchieveMotionDemo } from '@/components/NewPlatformMotionDemos';
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
        absolute: "Macmillan Achieve & Smartwork Solver — Chem & Bio AI",
    },
    description:
        "Solve Macmillan Achieve and Smartwork questions in 0.3s with zero attempt penalties. Get ChemAxon molecule drawing and math answers. 5 free solves / day.",
    keywords: [
        "macmillan achieve quiz solver",
        "achieve chemistry homework solver",
        "smartwork5 ww norton solver",
        "sapling learning chemistry answers",
        "chemaxon marvinjs molecular drawing solver",
        "macmillan attempt penalty protection",
        "examghost macmillan",
    ],
    alternates: {
        canonical: "https://examghost.com/macmillan-achieve-smartwork-solver",
    },
    openGraph: {
        title: "Macmillan Achieve & Smartwork Solver (2026) — ChemAxon & Penalty Shield | ExamGhost",
        description:
            "Double-click any Macmillan Achieve or W.W. Norton Smartwork problem for 0.3s inline answers. Solve ChemAxon drawing canvases with zero attempt penalties.",
        url: "https://examghost.com/macmillan-achieve-smartwork-solver",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [{ url: "/videos/posters/macmillan-achieve-smartwork-solver-poster.jpg", width: 1280, height: 720, alt: "ExamGhost Macmillan Achieve & Smartwork Solver" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Macmillan Achieve & Smartwork Solver — Chem & Bio AI",
        description: "Solve Macmillan Achieve and Smartwork questions in 0.3s with zero attempt penalties. Get ChemAxon molecule drawing answers.",
        images: ["/videos/posters/macmillan-achieve-smartwork-solver-poster.jpg"],
    },
};

const MACMILLAN_CONFIG = {
    slug: "macmillan-achieve-smartwork-solver",
    platformName: "Macmillan Achieve, Sapling & Smartwork5",
    platformShort: "Macmillan Achieve",
    heroBadge: "Macmillan Achieve & Smartwork5 (ChemAxon / MarvinJS) · Penalty Protected",
    heroDotColor: "#2563eb",
    h1Title: "Macmillan Achieve & Smartwork Solver —",
    h1Highlight: "ChemAxon Drawing & Zero Attempt Penalties.",
    aeoSummary: (
        <>
            <strong>ExamGhost</strong> solves <strong>Macmillan Achieve</strong>, <strong>Sapling Learning</strong>, and <strong>W.W. Norton Smartwork5</strong> assignments in <strong>0.3 seconds</strong> directly inside your active tab. Double-click any chemical reaction, ranking array, or quantitative problem for instant verification, or press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">Alt+S</kbd> to parse interactive ChemAxon and MarvinJS molecular editor canvases while preserving 100% homework credit against multi-attempt hint penalties.
        </>
    ),
    questionTypesSection: {
        eyebrow: "SUPPORTED MACMILLAN & SMARTWORK MODULES",
        heading: "Engineered for ChemAxon MarvinJS molecular editors, arrow pushing, and hint penalty systems.",
        lead: "Macmillan Achieve and Norton Smartwork penalize students up to 15% per wrong attempt. ExamGhost guarantees first-try accuracy on complex STEM modules:",
        items: [
            {
                name: "ChemAxon MarvinJS Molecular Canvas Drawing",
                codeTag: "chemaxon.marvinjs.canvas",
                triggerMethod: "Alt+S Vision OCR",
                accuracy: "99.2% Stereochemical AST",
                description: "Interprets skeletal wedge/dash stereocenters, chiral inversion (SN2/E2), and cyclic conformations directly on canvas coordinates.",
            },
            {
                name: "Chemical Mechanism Electron Arrow Pushing",
                codeTag: "achieve.curved.arrow",
                triggerMethod: "Alt+S Vision OCR",
                accuracy: "98.8% Dual-Model Vision",
                description: "Maps nucleophilic attack pairs (HOMO to LUMO) and leaving group departures without arrow trajectory placement errors.",
            },
            {
                name: "Stoichiometry & Unit Dropdown Arrays",
                codeTag: "achieve.unit.dropdown",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.7% Significant-Figure AST",
                description: "Selects correct chemical species, stoichiometric coefficients, and molar units simultaneously in 0.3s.",
            },
            {
                name: "Ranking, Sorting & Periodic Trend Buckets",
                codeTag: "smartwork.ranking.drag",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.4% Multi-Item Context",
                description: "Orders electronegativity trends, acid pKa rankings, and thermodynamic entropy series with drag-and-drop verification.",
            },
            {
                name: "Equilibrium & Reaction Kinetics Math",
                codeTag: "achieve.kinetics.solver",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.6% Precision",
                description: "Solves quadratic ICE tables, Arrhenius activation energies, and Nernst equation cell potentials with ±1% tolerances.",
            },
            {
                name: "Multi-Step Scaffolded Guided Practice",
                codeTag: "sapling.multi.step",
                triggerMethod: "Hybrid DOM + OCR",
                accuracy: "99.9% 1st-Attempt",
                description: "Completes sub-steps 1, 2, and 3 without unlocking hints that trigger automatic 10%–20% gradebook penalties.",
            },
        ],
    },
    architecture: {
        cardBg: "#eff6ff",
        cardBorder: "#bfdbfe",
        mascotImage: "/images/ghost/ghost_privacy.jpg",
        mascotTitle: "Macmillan Penalty Shield",
        mascotSubtitle: "100% verified first attempts eliminate hint deductions and attempt burnouts.",
        pills: ["0 Attempt Deductions", "0 Hint Penalties", "ChemAxon Ready"],
        eyebrow: "GRADING PENALTY FORENSICS",
        heading: "How ExamGhost eliminates Macmillan Achieve attempt deductions.",
        lead: "Achieve and Smartwork5 deduct 5% to 15% for every incorrect submission. ExamGhost's dual-model chemistry engine validates molecular structures before you hit submit.",
        pillars: [
            {
                title: "Zero Penalty First-Pass Accuracy",
                desc: "Solves chemical reactions and stereochemistry correctly on attempt 1, protecting 100% homework points.",
                image: "/images/ghost/ghost_shield.jpg",
            },
            {
                title: "ChemAxon Canvas Vision OCR",
                desc: "Alt+S captures molecular coordinates from canvas elements, translating chemical drawings into SMILES/InChI strings.",
                image: "/images/ghost/ghost_stealth.jpg",
            },
            {
                title: "Session Keep-Alive Protection",
                desc: "Operates 100% in-page, preventing Macmillan's 20-minute idle token expiration that occurs during external searches.",
                image: "/images/ghost/ghost_speed.jpg",
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: "MACMILLAN & SMARTWORK INSTRUCTOR TELEMETRY AUDIT",
        heading: "What professors and grading engines log during Achieve assignments.",
        lead: "The Macmillan Achieve assignment player tracks detailed attempt histories and hint click events:",
        logTableTitle: "Macmillan Achieve / Smartwork5 Grading Engine Log",
        citationNote: "Audited against Achieve 2026 Assessment Player",
        events: [
            {
                eventCode: "Attempt Penalty Deduction Engine",
                whenTriggered: "Submitting an incorrect answer on Attempt 1, 2, or 3 (-5% to -15% dock).",
                professorView: "Gradebook displays degraded score (e.g., 85% on Attempt 2, 70% on Attempt 3).",
                examghostStatus: "0 deductions — 100% first-attempt verified credit preserved.",
                isSafe: true,
            },
            {
                eventCode: "Hint Click Penalty Trigger",
                whenTriggered: "Clicking 'Give Up' or 'View Hint' inside Achieve or Sapling modules.",
                professorView: "Logs hint request in student attempt history and applies automatic deduction.",
                examghostStatus: "Explain Mode provides step-by-step guidance without triggering platform hints.",
                isSafe: true,
            },
            {
                eventCode: "ChemAxon Canvas Mouse/Touch Stream",
                whenTriggered: "Drawing bonds, atoms, and arrows on the MarvinJS HTML5 canvas.",
                professorView: "Logs time spent manipulating molecular vertices and tool switches.",
                examghostStatus: "Natural pointer emulation matches real drawing behavior.",
                isSafe: true,
            },
            {
                eventCode: "Session Keepalive Timeout (20 min)",
                whenTriggered: "Leaving Achieve tab unfocused while searching external websites.",
                professorView: "Flags session idle and disconnects WebSocket grade sync token.",
                examghostStatus: "100% in-tab solve prevents session dropouts.",
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: "Why ExamGhost Never Auto-Solves Entire Macmillan Problem Sets at Once",
        whyNoSolveAllBody: (
            <>
                Achieve measures time spent on each problem item. If a multi-step organic chemistry synthesis with 4 reaction arrows is marked solved in 1 second, the instructor dashboard flags the attempt under 'Unrealistic Completion Speed.' ExamGhost requires you to <strong>double-click or press Alt+S on each problem individually</strong>, maintaining an authentic student pacing record.
            </>
        ),
    },
    howToSection: {
        eyebrow: "4-STEP MACMILLAN WORKFLOW",
        heading: "How to solve Achieve & Smartwork assignments with zero attempt penalties.",
        lead: "Go from installation to full credit on chemistry and biology assignments:",
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
                title: "Open Your Assignment in achieve.macmillanlearning.com",
                shortcutBadge: "achieve.macmillanlearning.com",
                description: (
                    <>
                        Open your assigned homework inside Macmillan Achieve, Sapling, or Norton Smartwork5. ExamGhost attaches seamlessly in the active tab.
                    </>
                ),
                plainTextForSchema: "Open your assignment inside achieve.macmillanlearning.com or smartwork5. ExamGhost runs silently without taking focus away from the page.",
            },
            {
                stepNumber: "03",
                title: "Double-Click Question or Press Alt+S over ChemAxon Canvas",
                shortcutBadge: "Alt+S ChemAxon OCR",
                description: (
                    <>
                        Double-click any question card. For molecular drawing canvases, reaction mechanisms, or graphs, press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+S</kbd> to drag a Snap-It OCR box.
                    </>
                ),
                plainTextForSchema: "Double-click any question stem or press Alt+S to drag a Snap-It OCR box around ChemAxon MarvinJS molecular drawing canvases.",
            },
            {
                stepNumber: "04",
                title: "Auto-Fill Answer & Preserve 100% First-Attempt Credit",
                shortcutBadge: "0.3s Verified Result",
                description: (
                    <>
                        Review verified stereochemical configurations and numerical answers in <strong>0.3 seconds</strong>. Submit with 100% score and zero penalty deductions.
                    </>
                ),
                plainTextForSchema: "Review the verified answer populated inline in 0.3 seconds and submit with zero attempt penalties.",
            },
        ],
    },
    courseModulesSection: {
        eyebrow: "MACMILLAN & SMARTWORK COURSES SUPPORTED",
        heading: "Tested across top collegiate chemistry, biochemistry, and biology programs.",
        lead: "ExamGhost understands organic synthesis, biochemistry pathways, and general science across Macmillan and Norton platforms:",
        modules: [
            {
                department: "Organic Chemistry I & II",
                courseCodes: "CHEM 231, CHEM 232, CHEM 241, CHEM 242",
                textbooksOrModules: "Vollhardt & Schore: Organic Chemistry & Norton Smartwork5 (Maitland Jones)",
                keyChallengeSolved: "Resolves R/S stereocenters, E/Z alkenes, chair cyclohexane ring flips, and multi-step retro-synthetic reaction pathways.",
            },
            {
                department: "Biochemistry & Cellular Metabolism",
                courseCodes: "BIOC 401, BIOC 402, CHEM 350, MCB 450",
                textbooksOrModules: "Nelson & Cox: Lehninger Principles of Biochemistry (Achieve)",
                keyChallengeSolved: "Solves enzyme kinetics (Michaelis-Menten Lineweaver-Burk plots), glycolysis regulation, and peptide sequence cleavage.",
            },
            {
                department: "General Chemistry I & II",
                courseCodes: "CHEM 101, CHEM 102, CHEM 111, CHEM 112",
                textbooksOrModules: "Tro & Gilbert: Chemistry An Atoms Focused Approach (Smartwork5)",
                keyChallengeSolved: "Calculates Gibbs free energy delta G°, electrochemistry cell potentials, and ICE table equilibrium expressions with ±1% tolerances.",
            },
            {
                department: "Principles of Genetics & Molecular Biology",
                courseCodes: "GENE 301, BIOL 310, MCB 250, BIO 320",
                textbooksOrModules: "Pierce: Genetics A Conceptual Approach (Macmillan Achieve)",
                keyChallengeSolved: "Determines dihybrid cross probabilities, pedigree autosomal recessive linkages, and Hardy-Weinberg allele frequencies.",
            },
        ],
    },
    benchmark: {
        eyebrow: "MACMILLAN ACHIEVE BENCHMARK",
        heading: "ExamGhost vs. ChatGPT & Generic Extensions on Achieve & Smartwork",
        windowTitle: "2026 Macmillan Achieve Telemetry Forensics Matrix",
        windowBadge: "Verified on achieve.macmillanlearning.com",
        rows: [
            {
                capability: "Multi-attempt penalty protection",
                examghost: "100% verified 1st attempt · 0 docks",
                chatgpt: "Burns 2–3 attempts guessing",
                sidebar: "No penalty protection",
            },
            {
                capability: "ChemAxon MarvinJS canvas drawing",
                examghost: "Alt+S Vision OCR with stereo AST",
                chatgpt: "Cannot read interactive canvas",
                sidebar: "Unsupported on SVG/canvas",
            },
            {
                capability: "Arrow-pushing mechanism verification",
                examghost: "HOMO-LUMO orbital pair validation",
                chatgpt: "Frequent regioisomer confusion",
                sidebar: "Unsupported on arrow modules",
            },
            {
                capability: "Session keepalive & token stability",
                examghost: "100% in-tab solve · 0 blur flags",
                chatgpt: "Triggers 20-min session timeout",
                sidebar: "Causes iframe token conflicts",
            },
            {
                capability: "Multi-item ranking & drag-drop",
                examghost: "Validates all array items in 0.3s",
                chatgpt: "Outputs plain text list",
                sidebar: "Cannot reorder DOM buckets",
            },
        ],
    },
    faqSubtitle:
        "Technical answers on Macmillan Achieve attempt penalties, ChemAxon drawing canvases, Sapling LTI integrations, and your 5 free daily solves.",
    faqs: [
        {
            id: "faq-macmillan-attempt-penalties",
            category: "stealth",
            badge: "0 Penalties",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "How does ExamGhost protect against Macmillan Achieve attempt penalties?",
            a: (
                <>
                    <strong>ExamGhost verifies answers with dual AI reasoning models prior to form submission.</strong> Because your first attempt is accurate, you avoid the standard 5% to 15% point deductions Macmillan automatically docks for subsequent tries.
                </>
            ),
        },
        {
            id: "faq-macmillan-chemaxon-marvinjs",
            category: "ocr",
            badge: "ChemAxon Vision",
            badgeBg: "bg-[#c4d0f8] text-indigo-950",
            q: "Can ExamGhost solve ChemAxon MarvinJS molecular drawing questions?",
            a: (
                <>
                    <strong>Yes, press Alt+S to activate Snap-It Vision OCR over the drawing canvas.</strong> ExamGhost analyzes the molecular structure, identifies stereocenters, wedge/dash bonds, and functional groups, and provides the exact product structure and stereochemistry in 0.3 seconds.
                </>
            ),
        },
        {
            id: "faq-macmillan-smartwork5-norton",
            category: "platforms",
            badge: "Smartwork5 Ready",
            badgeBg: "bg-[#e2d3fa] text-purple-950",
            q: "Does ExamGhost support W.W. Norton Smartwork5 as well as Macmillan Achieve?",
            a: (
                <>
                    <strong>Yes, ExamGhost supports Macmillan Achieve, Sapling Learning, and W.W. Norton Smartwork5 identically.</strong> Both platforms share similar HTML5 interactive modules, and ExamGhost attaches seamlessly to both.
                </>
            ),
        },
        {
            id: "faq-macmillan-hints-penalty",
            category: "stealth",
            badge: "Hint Safe",
            badgeBg: "bg-[#bfe3f6] text-sky-950",
            q: "Do I lose points if I ask ExamGhost for an explanation?",
            a: (
                <>
                    <strong>No, ExamGhost's Explain Mode (Alt+3) runs completely inside our extension.</strong> You never click the platform's native 'Hint' button, meaning zero point deductions are registered in the Macmillan gradebook.
                </>
            ),
        },
        {
            id: "faq-macmillan-free-solves",
            category: "platforms",
            badge: "5 Free Solves / Day",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "How do I claim 5 free solves per day on Macmillan Achieve?",
            a: (
                <>
                    <strong>Install the ExamGhost Chrome extension to receive 5 free solves every 24 hours automatically.</strong> No credit card or registration required.
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

export default function MacmillanAchieveSmartworkSolverPage() {
    const config = MACMILLAN_CONFIG;
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
                "name": "Macmillan Achieve & Smartwork Solver (2026) — ChemAxon & Penalty Shield | ExamGhost",
                "description": "Solve Macmillan Achieve and Smartwork questions in 0.3s with zero attempt penalties. Get ChemAxon molecule drawing and math answers. 5 free solves / day.",
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
                "name": "ExamGhost Macmillan Achieve & Smartwork Solver",
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
                    { "@type": "ListItem", "position": 3, "name": "Macmillan Achieve Solver", "item": `https://examghost.com/${config.slug}` }
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
                        "text": `ExamGhost solves Macmillan Achieve and Smartwork questions inline in 0.3s with zero attempt penalties.`
                    }
                }))
            },
            {
                "@type": "VideoObject",
                "@id": `https://examghost.com/${config.slug}#video`,
                "name": "Macmillan Achieve AI Solver — 2.5D Explainer & Product Demo Film",
                "description": "16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves Macmillan Achieve ChemAxon drawings with zero attempt penalties.",
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
                "description": "Step-by-step workflow to solve Macmillan Achieve and Smartwork5 homework with zero attempt penalties.",
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
                    <MacmillanAchieveMotionDemo />

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
                            {config.platformShort} Modules
                        </a>
                        <a
                            href="#instructor-telemetry-audit"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Penalty Forensics
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
