import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'DeltaMath Homework & Test Solver | Algebra, Precalc & Calculus AI | ExamGhost',
    description:
        'Test the ExamGhost DeltaMath Solver in our interactive simulator. Double-click DeltaMath MathQuill prompts or use Alt+S to get exact coordinates for interactive graphing problems.',
    keywords: [
        'DeltaMath solver',
        'DeltaMath AI Chrome extension',
        'DeltaMath homework helper',
        'does DeltaMath detect tab switching',
        'DeltaMath graphing solver',
        'DeltaMath calculus solver',
        'can DeltaMath see if you switch tabs',
    ],
    alternates: {
        canonical: 'https://examghost.com/deltamath-homework-solver',
    },
    openGraph: {
        title: 'DeltaMath Homework & Test Solver — Interactive Product Demo | ExamGhost',
        description:
            'Watch or control a live DeltaMath session. Solve MathQuill equations, unit-circle trigonometry, and interactive coordinate graphs one by one via double-click or Alt+S.',
        url: 'https://examghost.com/deltamath-homework-solver',
        siteName: 'ExamGhost',
        type: 'website',
    },
};

const deltaMathConfig: LmsServicePageConfig = {
    slug: 'deltamath-homework-solver',
    platformName: 'DeltaMath',
    platformShort: 'DeltaMath',
    heroBadge: 'DeltaMath MathQuill, Graphing & Calculus Ready',
    heroDotColor: '#1e3a8a',
    h1Title: 'DeltaMath Homework &',
    h1Highlight: 'Timed Test AI Solver',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for DeltaMath</strong> is a Manifest V3 Chrome extension engineered for{' '}
            <strong className="text-[#1a1a1a]">DeltaMath Homework &amp; Timed Assessments</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">deltamath.com/app/student/*</code>). Double-click any{' '}
            <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.problem-div</code> prompt one by one to extract MathQuill/KaTeX equations without copying, or press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd> to get exact $(x, y)$ plotting coordinates, asymptotes, and vertex points for DeltaMath interactive graphs.
        </>
    ),
    videoDemo: {
        platformSub: 'DeltaMath Student App • deltamath.com/app/student/4819204/22910482/a8f91c2',
        browserUrl: 'https://www.deltamath.com/app/student/4819204/22910482/a8f91c2e4b01',
        badgeBg: 'bg-[#eff6ff] border-[#bfdbfe]',
        badgeText: 'text-[#1e3a8a]',
        telemetryLabel: 'DeltaMath Problem Timer & Focus: Active (0 Blur Events)',
        questions: [
            {
                id: 1,
                code: 'DM-ALG2-01 • .problem-div (Polynomial Remainder Theorem)',
                type: 'DeltaMath Symbolic / Numerical',
                points: 'Score: 1/5',
                prompt:
                    'Given the polynomial f(x) = 2x³ - 7x² + kx + 12, if (x - 4) is a factor of f(x), what is the exact value of the constant k?',
                options: [
                    'k = -7',
                    'k = 5',
                    'k = -3',
                    'k = 7',
                ],
                correctIndex: 0,
                confidence: '99.9%',
                explanation:
                    'By the Factor Theorem, if (x - 4) is a factor of f(x), then f(4) = 0. Substituting x = 4: 2(4)³ - 7(4)² + 4k + 12 = 0 ⇒ 2(64) - 7(16) + 4k + 12 = 0 ⇒ 128 - 112 + 12 + 4k = 0 ⇒ 28 + 4k = 0 ⇒ k = -7.',
            },
            {
                id: 2,
                code: 'DM-TRIG-02 • Exact Value of Trigonometric Functions',
                type: 'DeltaMath Simplest Radical Form',
                points: 'Score: 2/5',
                prompt:
                    'Find the exact value of cos(7π / 6) in simplest radical form with a rational denominator.',
                options: [
                    '-1 / 2',
                    '-√3 / 2',
                    '√3 / 2',
                    '-√2 / 2',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'The angle θ = 7π/6 (210°) lies in Quadrant III with reference angle π/6 (30°). In Quadrant III, cosine is negative, so cos(7π/6) = -cos(π/6) = -√3 / 2.',
            },
            {
                id: 3,
                code: 'DM-GRAPH-03 • Interactive Sinusoidal Graph (HTML5 Canvas)',
                type: 'DeltaMath Coordinate Plane (Requires Alt+S OCR)',
                points: 'Score: 3/5',
                requiresOcr: true,
                diagramLabel: 'DELTAMATH INTERACTIVE GRAPH — SINUSOIDAL EQUATION FROM PLOT',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="104" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
                        <line x1="40" y1="68" x2="345" y2="68" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="75" y1="15" x2="75" y2="105" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="40" y1="53" x2="345" y2="53" stroke="#93c5fd" strokeDasharray="3 3" />
                        <path d="M 75 23 Q 115 23 155 83 Q 195 83 235 23 Q 275 23 315 83" fill="none" stroke="#1e3a8a" strokeWidth="2.5" />
                        <circle cx="75" cy="23" r="4" fill="#dc2626" />
                        <circle cx="155" cy="83" r="4" fill="#dc2626" />
                        <circle cx="235" cy="23" r="4" fill="#dc2626" />
                        <text x="82" y="24" fontSize="9" fontWeight="bold" fill="#dc2626">Max (0, 4)</text>
                        <text x="128" y="99" fontSize="9" fontWeight="bold" fill="#dc2626">Min (π/2, -2)</text>
                        <text x="242" y="24" fontSize="9" fontWeight="bold" fill="#dc2626">Max (π, 4)</text>
                        <text x="275" y="49" fontSize="9" fontWeight="bold" fill="#1e40af">Midline y = 1</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the DeltaMath sinusoidal graph above, which has a maximum at (0, 4), an adjacent minimum at (π/2, -2), and its next maximum at (π, 4). Determine its equation in the form y = A cos(Bx) + D.',
                options: [
                    'y = 3 cos(2x) + 1',
                    'y = 6 cos(2x) + 1',
                    'y = 3 cos(x) + 1',
                    'y = 3 sin(2x) + 1',
                ],
                correctIndex: 0,
                confidence: '99.8%',
                explanation:
                    'Amplitude A = (y_max - y_min)/2 = (4 - (-2))/2 = 3. Vertical shift (midline) D = (4 + (-2))/2 = 1. Period T = π (from x = 0 to x = π), so frequency B = 2π / T = 2π / π = 2. Since the graph starts at a maximum at x = 0, the equation is y = 3 cos(2x) + 1.',
            },
            {
                id: 4,
                code: 'DM-CALC-04 • AP Calculus Implicit Differentiation',
                type: 'DeltaMath Calculus Module',
                points: 'Score: 4/5',
                prompt:
                    'If x² + xy + y³ = 7, find the value of the derivative dy/dx at the point (2, 1).',
                options: [
                    '-5 / 4',
                    '-5 / 5 = -1',
                    '-4 / 5',
                    '5 / 4',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Differentiating implicitly with respect to x: 2x + (1·y + x·dy/dx) + 3y²·(dy/dx) = 0. Solving for dy/dx gives dy/dx = -(2x + y) / (x + 3y²). At (2, 1), dy/dx = -(2(2) + 1) / (2 + 3(1)²) = -5 / 5 = -1.',
            },
            {
                id: 5,
                code: 'DM-CALC-05 • Related Rates (Conical Tank)',
                type: 'DeltaMath Word Problem',
                points: 'Score: 5/5',
                prompt:
                    'The radius r of a circle is increasing at a constant rate of 3 cm/sec. At the instant when the area of the circle is 16π cm², what is the rate of change of the area dA/dt in terms of π?',
                options: [
                    '12π cm²/sec',
                    '24π cm²/sec',
                    '48π cm²/sec',
                    '8π cm²/sec',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'When A = πr² = 16π, the radius is r = 4 cm. Differentiating A = πr² with respect to t gives dA/dt = 2πr · (dr/dt). Substituting r = 4 and dr/dt = 3 yields dA/dt = 2π(4)(3) = 24π cm²/sec.',
            },
        ],
    },
    architecture: {
        cardBg: 'bg-[#eff6ff]',
        cardBorder: 'border-[#bfdbfe]',
        mascotTitle: 'DeltaMath Graphing & CAS Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">deltamath.com</code> MathQuill, Simplest Radical Form, and Canvas graphs.
            </>
        ),
        pills: ['Exact (x, y) Plot Points', 'Simplest Radical Form', 'Zero Copy-Block Issues'],
        eyebrow: 'DeltaMath Student App Architecture',
        heading: 'Built for DeltaMath Interactive Graphs & MathQuill Inputs',
        lead: (
            <>
                DeltaMath prevents standard text copying on many problem types, renders equations inside nested <strong className="text-[#1a1a1a]">KaTeX / MathQuill</strong> spans, and grades interactive graphing questions by checking exact vertex, asymptote, and intercept coordinates on an HTML5 <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">&lt;canvas&gt;</code>. ExamGhost extracts clean LaTeX on double-click and outputs exact plotting coordinates in Explain Mode.
            </>
        ),
        pillars: [
            {
                title: '1. Exact (x, y) Coordinates for Interactive Graphing',
                desc: (
                    <>
                        When DeltaMath asks you to <em>&ldquo;Plot five points on the parabola: the vertex, two points to the left, and two points to the right&rdquo;</em> or drag asymptotes on a rational function, switch to <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> and double-click the prompt—ExamGhost lists the exact $(x, y)$ integer/half-integer points and asymptote lines to click on the grid.
                    </>
                ),
                image: '/images/ghost/ghost_card_ai.jpg',
            },
            {
                title: '2. Bypasses DeltaMath Copy Blocking & KaTeX Duplication',
                desc: (
                    <>
                        Highlighting and copying a DeltaMath problem either gets blocked by <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">user-select: none</code> CSS or copies broken MathML duplicates. Double-clicking the <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.problem-div</code> with ExamGhost parses the underlying math tree directly with zero clipboard interaction.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
            {
                title: '3. Alt+S for Unit Circles, Triangle Proofs & Canvas Plots',
                desc: (
                    <>
                        For geometry congruence proofs, unit-circle terminal rays, and &ldquo;determine the equation from the graph&rdquo; problems, press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> and drag across the DeltaMath canvas. ExamGhost reads the plotted coordinates and outputs the answer in <strong className="text-[#1a1a1a]">Simplest Radical Form</strong>.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
        ],
    },
    benchmark: {
        eyebrow: 'DeltaMath Technical Comparison',
        heading: 'ExamGhost vs. Tab-Switching & Generic Extensions on DeltaMath',
        windowTitle: 'deltamath_student_audit.csv — Verified Comparison',
        windowBadge: 'MathQuill • Interactive Canvas • Timed Tests',
        rows: [
            {
                capability: (
                    <>
                        Works when DeltaMath disables text selection (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">user-select: none</code>)
                    </>
                ),
                examghost: 'Yes (Double-Click DOM Parse)',
                chatgpt: 'Blocked (Must Re-Type Equations)',
                sidebar: 'Fails on KaTeX / MathQuill Spans',
            },
            {
                capability: 'Gives exact (x, y) points + asymptotes to plot on DeltaMath graphs',
                examghost: 'Yes (5-Point Table in Explain Mode)',
                chatgpt: 'Generic Formula Only',
                sidebar: 'Cannot Read Canvas Grid Bounds',
            },
            {
                capability: 'Outputs "Simplest Radical Form" & exact rational fractions',
                examghost: 'Yes (Matches DeltaMath Keypad)',
                chatgpt: 'Often Gives Decimal Approximations',
                sidebar: 'Wrong Radical Formatting',
            },
            {
                capability: (
                    <>
                        Reads DeltaMath <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">&lt;canvas&gt;</code> geometry &amp; trigonometry figures
                    </>
                ),
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Manual Screenshot Save/Upload',
                sidebar: 'Blind to HTML5 Canvas Nodes',
            },
            {
                capability: 'Natural per-problem Time Spent in teacher dashboard logs',
                examghost: 'One-by-One Human Pacing',
                chatgpt: 'Long Off-Tab Idle Gaps',
                sidebar: 'Injects Detectable Sidebar DOM',
            },
        ],
    },
    faqSubtitle:
        'Direct engineering answers about DeltaMath teacher logs, Time Spent per problem, tab-switching detection, and graphing modules.',
    faqs: [
        {
            category: 'stealth',
            q: 'What can teachers see on the DeltaMath teacher dashboard?',
            a: (
                <>
                    In the DeltaMath teacher dashboard, clicking a student&apos;s name shows a detailed problem log containing: <strong className="text-[#1a1a1a]">every problem attempted, the exact timestamp it was opened and submitted, total Time Spent (in seconds) on that problem, and every incorrect answer submitted</strong>. Because ExamGhost solves questions one by one inside the active tab via double-click or <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>, you stay in full control of your pacing and submission timing.
                </>
            ),
            plainTextAnswer:
                'In the DeltaMath teacher dashboard, clicking a student name shows a detailed problem log containing: every problem attempted, the exact timestamp it was opened and submitted, total Time Spent (in seconds) on that problem, and every incorrect answer submitted. Because ExamGhost solves questions one by one inside the active tab via double-click or Alt+S, you stay in full control of your pacing and submission timing.',
        },
        {
            category: 'stealth',
            q: 'Does DeltaMath detect tab switching or Chrome extensions?',
            a: (
                <>
                    During DeltaMath <strong className="text-[#1a1a1a]">Timed Tests</strong> or when DeltaMath is embedded inside Canvas/Schoology, switching tabs fires browser <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">visibilitychange</code> events and creates suspicious pauses in your per-problem timer. ExamGhost runs in Chrome&apos;s isolated Manifest V3 world so you never leave the DeltaMath tab, and DeltaMath cannot detect the extension.
                </>
            ),
            plainTextAnswer:
                'During DeltaMath Timed Tests or when DeltaMath is embedded inside Canvas/Schoology, switching tabs fires browser window.blur and visibilitychange events and creates suspicious pauses in your per-problem timer. ExamGhost runs in Chrome isolated Manifest V3 world so you never leave the DeltaMath tab, and DeltaMath cannot detect the extension.',
        },
        {
            category: 'ocr',
            q: 'How do I use ExamGhost to solve DeltaMath graphing problems?',
            a: (
                <>
                    Switch ExamGhost to <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> and double-click the DeltaMath problem text (or press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> over the prompt and grid). ExamGhost outputs the exact vertex, $x$-intercepts, $y$-intercept, horizontal/vertical asymptote equations, and 5 integer coordinate points $(x, y)$ so you can click them directly on the DeltaMath coordinate plane.
                </>
            ),
            plainTextAnswer:
                'Switch ExamGhost to Explain Mode (Alt+3) and double-click the DeltaMath problem text (or press Alt+S over the prompt and grid). ExamGhost outputs the exact vertex, x-intercepts, y-intercept, horizontal/vertical asymptote equations, and 5 integer coordinate points (x, y) so you can click them directly on the DeltaMath coordinate plane.',
        },
        {
            category: 'ocr',
            q: 'Why can’t I copy and paste equations from DeltaMath into ChatGPT?',
            a: (
                <>
                    DeltaMath disables text selection on many problem containers and renders fractions, radicals, and exponents as nested KaTeX/MathQuill spans. Even if you force-copy the text, fractions like <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">(x + 2) / (x - 3)</code> paste into ChatGPT as <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">x+2x-3</code>, producing the wrong answer. ExamGhost reads the exact LaTeX structure on double-click or via <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>.
                </>
            ),
            plainTextAnswer:
                'DeltaMath disables text selection on many problem containers and renders fractions, radicals, and exponents as nested KaTeX/MathQuill spans. Even if you force-copy the text, fractions like (x+2)/(x-3) paste into ChatGPT as x+2x-3, producing the wrong answer. ExamGhost reads the exact LaTeX structure on double-click or via Alt+S.',
        },
        {
            category: 'ocr',
            q: 'Does ExamGhost format answers in DeltaMath "Simplest Radical Form"?',
            a: (
                <>
                    Yes! DeltaMath rejects decimal answers whenever a prompt asks for <strong className="text-[#1a1a1a]">Simplest Radical Form</strong> or <strong className="text-[#1a1a1a]">Exact Value</strong>. ExamGhost reads that instruction automatically and simplifies radicals (e.g., <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">(-3 ± 2√5) / 4</code>) with rationalized denominators.
                </>
            ),
            plainTextAnswer:
                'Yes! DeltaMath rejects decimal answers whenever a prompt asks for Simplest Radical Form or Exact Value. ExamGhost reads that instruction automatically and simplifies radicals with rationalized denominators.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work on DeltaMath Two-Column Geometry Proofs?',
            a: (
                <>
                    Yes. For DeltaMath interactive geometry proofs where you select statements and reasons from dropdown menus, press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> in <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> and drag across the triangle figure, Given/Prove header, and proof table to get every line of the proof in order.
                </>
            ),
            plainTextAnswer:
                'Yes. For DeltaMath interactive geometry proofs where you select statements and reasons from dropdown menus, press Alt+S in Explain Mode (Alt+3) and drag across the triangle figure, Given/Prove header, and proof table to get every line of the proof in order.',
        },
        {
            category: 'workflow',
            q: 'How do I avoid suspiciously fast solve times in DeltaMath teacher logs?',
            a: (
                <>
                    Teachers check the <strong className="text-[#1a1a1a]">Time Spent</strong> column in DeltaMath and flag students who submit multi-step calculus or algebra problems in 3 seconds. Because ExamGhost solves strictly one question at a time on double-click, you can read the step-by-step explanation in <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> and submit after a realistic 30–60 second interval.
                </>
            ),
            plainTextAnswer:
                'Teachers check the Time Spent column in DeltaMath and flag students who submit multi-step calculus or algebra problems in 3 seconds. Because ExamGhost solves strictly one question at a time on double-click, you can read the step-by-step explanation in Explain Mode (Alt+3) and submit after a realistic 30–60 second interval.',
        },
        {
            category: 'workflow',
            q: 'Can I test the DeltaMath Solver before installing the Chrome extension?',
            a: (
                <>
                    Yes! Scroll up to the interactive <strong className="text-[#1a1a1a]">DeltaMath Student Simulator</strong> on this page to test one-by-one double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> sinusoidal graph OCR, and all three stealth modes right in your browser.
                </>
            ),
            plainTextAnswer:
                'Yes! Scroll up to the interactive DeltaMath Student Simulator on this page to test one-by-one double-click solving, Alt+S sinusoidal graph OCR, and all three stealth modes right in your browser.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/deltamath-homework-solver/#webpage',
                url: 'https://examghost.com/deltamath-homework-solver',
                name: 'DeltaMath Homework & Test Solver | Algebra, Precalc & Calculus AI | ExamGhost',
                description:
                    'Interactive DeltaMath homework and timed test solver simulator and technical guide covering MathQuill, interactive graphing, and teacher logs.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#deltamath-homework-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost DeltaMath Homework & Test Solver',
                OperatingSystem: 'Chrome, Brave, Edge (Manifest V3)',
                applicationCategory: 'EducationalApplication',
                offers: {
                    '@type': 'Offer',
                    price: '0.00',
                    priceCurrency: 'USD',
                },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://examghost.com' },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'DeltaMath Homework Solver',
                        item: 'https://examghost.com/deltamath-homework-solver',
                    },
                ],
            },
        ],
    },
};

export default function DeltaMathHomeworkSolverPage() {
    return <LmsServicePageTemplate config={deltaMathConfig} />;
}
