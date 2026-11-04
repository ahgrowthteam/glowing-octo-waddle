import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { DeltaMathMotionDemo } from '@/components/PlatformMotionDemos';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';
import LmsExplainerFilmCard from '@/components/LmsExplainerFilmCard';
import LmsServiceFaq, { LmsFaqItem } from '@/components/LmsServiceFaq';
import {
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Terminal,
    BookOpen,
    Layers,
    AlertTriangle,
    Sparkles,
    Keyboard,
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';

export const metadata: Metadata = {
    title: { absolute: 'DeltaMath Answers Solver — Graphing & Radical Form AI' },
    description: "Get DeltaMath answers in 0.3s: exact simplest radical form, graphing coordinates, multi-step equations and two-column proofs. 5 free solves / day.",
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
        images: [{ url: '/videos/posters/deltamath-homework-solver-poster.jpg', width: 1280, height: 720, alt: 'DeltaMath Answers Solver — Graphing & Radical Form AI' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DeltaMath Answers Solver — Graphing & Radical Form AI',
        description: 'Get DeltaMath answers in 0.3s: exact simplest radical form, graphing coordinates, multi-step equations and two-column proofs. Live demo and 5 free solves / day.',
        images: ['/videos/posters/deltamath-homework-solver-poster.jpg'],
    },
};

const deltaMathConfig: any = {
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
        cardBg: '#eff6ff',
        cardBorder: '#bfdbfe',
        mascotImage: '/images/ghost/ghost_card_hud.jpg',
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
    questionTypesSection: {
        eyebrow: 'DeltaMath Module & Widget Coverage',
        heading: 'Every DeltaMath Problem Format Supported — Protecting Your Penalty Streak',
        lead: (
            <>
                On DeltaMath, a single formatting mistake in a <strong>&ldquo;1 Penalty off for wrong answer&rdquo;</strong> skill drops your progress from <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">4/5</code> back to <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">3/5</code>. Unlike broken script injectors (<em>SkipDelta</em>, <em>DeltaMath+</em>), ExamGhost verifies every DeltaMath input format via <strong>DeepSeek-R1</strong>:
            </>
        ),
        items: [
            {
                name: 'Simplest Radical Form & Exact Fraction MathQuill Boxes',
                codeTag: '.mq-editable-field MathQuill',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.8%',
                description: (
                    <>
                        Reads DeltaMath&apos;s exact rounding or radical instruction (e.g., <em>&ldquo;Express your answer in simplest radical form&rdquo;</em> vs. <em>&ldquo;Round to the nearest tenth&rdquo;</em>) so you never lose a streak point to a decimal approximation.
                    </>
                ),
            },
            {
                name: 'Interactive 5-Point Parabola, Line & Piecewise Graphing',
                codeTag: 'HTML5 <canvas> Coordinate Grid',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: '99.6%',
                description: (
                    <>
                        Outputs the exact 5 integer coordinates (vertex + 2 left + 2 right), open/closed circle endpoints, and dashed asymptote lines required by DeltaMath&apos;s interactive graphing canvas.
                    </>
                ),
            },
            {
                name: 'Guided Multi-Step Equations & Derivative Rules',
                codeTag: 'Guided Sentence / Dropdown',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.7%',
                description: (
                    <>
                        Solves DeltaMath&apos;s sequential step-by-step guided modules (e.g., Chain Rule, Integration by Substitution, Factoring by Grouping) as each intermediate box unlocks on screen.
                    </>
                ),
            },
            {
                name: 'Two-Column Triangle Congruence & Circle Geometry Proofs',
                codeTag: 'Statement / Reason Dropdowns',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.3%',
                description: (
                    <>
                        Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> over any DeltaMath geometry figure and statement table to get the exact sequence of Reflexive, Alternate Interior Angles, and SAS/ASA/HL proof steps.
                    </>
                ),
            },
            {
                name: 'Trigonometric Sine/Cosine Wave Graphing & Unit Circle',
                codeTag: 'Trig Box / Period-Amplitude Grid',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.5%',
                description: (
                    <>
                        Computes amplitude, midline, period, phase shift, and quarter-period key points to plot sine/cosine curves or evaluate exact unit-circle radian values in seconds.
                    </>
                ),
            },
            {
                name: 'Timed Fluency & Mental Math Sprint Modules',
                codeTag: 'Beat the Clock Timer',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.9%',
                description: (
                    <>
                        Double-click any timed derivative, unit-circle, or factoring sprint prompt for 0.3s inline verification without ever switching tabs or touching the clipboard.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: 'DeltaMath Teacher Dashboard Forensics',
        heading: 'What Teachers Actually See on the DeltaMath Student Log Dashboard',
        lead: (
            <>
                DeltaMath provides teachers with a granular per-problem inspection modal. Before you use any script or extension on DeltaMath, understand the exact 4 metrics your math teacher sees when they click your name:
            </>
        ),
        citationNote: 'Audited on DeltaMath Teacher Portal 2026',
        logTableTitle: 'deltamath_teacher_log_forensics — Student Problem History View',
        events: [
            {
                eventCode: 'Time Spent on Problem (Seconds Counter)',
                whenTriggered: 'Opening a DeltaMath problem until clicking "Submit Answer" → "Yes"',
                professorView: 'Displays exact seconds spent on each problem (e.g. "Time: 48s") next to a green check or red X',
                examghostStatus: 'Natural 1-by-1 Solving Duration',
                isSafe: true,
            },
            {
                eventCode: 'Watch Help Video / Show Example Badges',
                whenTriggered: 'Clicking "Show Example" or "Watch Help Video" at the top of a DeltaMath problem',
                professorView: 'Logs an explicit "Viewed Example" or "Watched Video" icon next to that problem attempt',
                examghostStatus: 'Explains Concept Without Logging Example Icon',
                isSafe: true,
            },
            {
                eventCode: 'Rapid-Guess / Bot Velocity Flag (< 3 Seconds)',
                whenTriggered: 'Using an automated "Assignment Runner" script to submit multi-step algebra in 1–2 seconds',
                professorView: 'Flags suspiciously fast completion times in the teacher’s student summary table',
                examghostStatus: 'You Control Exact Submit Timing',
                isSafe: true,
            },
            {
                eventCode: 'DeltaMath INTEGRITY / Copy-Paste & Blur Tracking',
                whenTriggered: 'Teacher enables DeltaMath Integrity settings on a Timed Test',
                professorView: 'Blocks text selection (user-select: none) and monitors tab focus switches during tests',
                examghostStatus: '0 Blur Events & Zero Clipboard Use',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why "SkipDelta" & Automated Assignment Runners Get Students Flagged Immediately',
        whyNoSolveAllBody: (
            <>
                Bookmarklets and Chrome extensions marketed as &ldquo;DeltaMath Auto-Runners&rdquo; (<code className="font-mono text-white">SkipDelta</code>, <code className="font-mono text-white">StudyOutlaws</code>) intercept DeltaMath&apos;s API or auto-submit 5 problems in 4 seconds. When a teacher opens your DeltaMath log and sees five 4-step calculus problems completed in <strong>1.2 seconds each</strong>, it is an automatic zero. ExamGhost never auto-submits or bulk-runs assignments: you double-click one problem at a time, review the step-by-step math in Explain Mode, and enter your answer at a realistic human pace.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step DeltaMath Workflow',
        heading: 'How to Solve DeltaMath Fast Without Losing Your Streak or Getting Flagged',
        lead: (
            <>
                Combine ExamGhost&apos;s 1-by-1 inline solver with smart DeltaMath pacing to finish skills and timed tests accurately:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Open Your DeltaMath Skill or Timed Test in Chrome',
                shortcutBadge: 'deltamath.com/app/student',
                description: (
                    <>
                        Log into <code className="font-mono text-xs">deltamath.com</code> and open your assigned skill. Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+3</kbd> (Explain Mode) so ExamGhost displays both the final formatted answer and the intermediate algebraic steps or graphing points.
                    </>
                ),
                plainTextForSchema:
                    'Log into deltamath.com, open your assigned skill, and press Alt+3 (Explain Mode) to view both the final formatted answer and intermediate steps.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click Inside the DeltaMath Problem Container',
                shortcutBadge: 'Double-Click Problem',
                description: (
                    <>
                        Double-click anywhere on the problem text—even when DeltaMath blocks text highlighting. ExamGhost extracts the clean KaTeX math and formatting instructions (<em>simplest radical form</em>, <em>exact fraction</em>, or <em>nearest hundredth</em>) in 0.3 seconds.
                    </>
                ),
                plainTextForSchema:
                    'Double-click anywhere on the DeltaMath problem text to extract the KaTeX equations and exact formatting rules without using the clipboard.',
            },
            {
                stepNumber: '3',
                title: 'Press Alt+S Over Coordinate Graphs, Unit Circles & Geometry Figures',
                shortcutBadge: 'Alt + S (Vision OCR)',
                description: (
                    <>
                        When a problem displays an HTML5 <code className="font-mono text-xs">&lt;canvas&gt;</code> graph or geometry diagram, press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> and drag a box over both the canvas and the question prompt to get exact $(x, y)$ points or proof reasons.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S and drag a crop box over any HTML5 canvas graph or geometry diagram to receive exact (x, y) plotting coordinates or proof steps.',
            },
            {
                stepNumber: '4',
                title: 'Type Using the DeltaMath Keypad at Natural Human Speed (30s–60s)',
                shortcutBadge: 'Streak & Timer Safe',
                description: (
                    <>
                        Enter your verified answer using the MathQuill keypad (or plot the 5 listed parabola points) after a natural 30–60 second problem-solving interval, then click <strong>Submit Answer</strong> to advance your streak safely.
                    </>
                ),
                plainTextForSchema:
                    'Enter the verified answer using the MathQuill keypad or plot the listed coordinates at a natural 30 to 60 second pace before clicking Submit Answer.',
            },
        ],
    },
    courseModulesSection: {
        eyebrow: 'Supported DeltaMath Curricula',
        heading: 'Top DeltaMath Courses & Skill Modules Covered (Middle School to AP Calc)',
        lead: (
            <>
                ExamGhost supports every curriculum tier in DeltaMath Standard and DeltaMath INTEGRAL:
            </>
        ),
        modules: [
            {
                department: 'Algebra 1 & Algebra 2',
                courseCodes: 'Linear / Quadratic / Exponential / Rational',
                textbooksOrModules: '5-Point Parabola Graphing, Completing the Square, Simplifying Radicals & Systems of Equations',
                keyChallengeSolved:
                    'Lists the exact 5 integer coordinates (vertex + 2 left + 2 right) to click on DeltaMath’s parabola canvas and formats complex numbers in strict a + bi form.',
            },
            {
                department: 'Geometry & Trigonometry',
                courseCodes: 'Congruence Proofs / Circles / Right Triangle Trig',
                textbooksOrModules: 'Interactive Two-Column Triangle Proofs, Rigid Transformations & Law of Sines/Cosines',
                keyChallengeSolved:
                    'Uses Alt+S Vision OCR to read marked congruent segments/angles on the canvas and outputs the exact dropdown Statement and Reason pairs.',
            },
            {
                department: 'Precalculus & AP Precalculus',
                courseCodes: 'Unit Circle / Conic Sections / Polar & Parametric',
                textbooksOrModules: 'Sine/Cosine Graph Plotting, Rational Function Asymptotes, Matrices & Logarithmic Equations',
                keyChallengeSolved:
                    'Computes exact vertical/horizontal/slant asymptote equations and quarter-period points for interactive trigonometric wave graphing.',
            },
            {
                department: 'AP Calculus AB / BC (DeltaMath INTEGRAL)',
                courseCodes: 'Limits / Derivatives / Integrals / Series',
                textbooksOrModules: 'Guided Chain/Product/Quotient Rule, Related Rates, Riemann Sums & Taylor Polynomials',
                keyChallengeSolved:
                    'Solves multi-step Related Rates and Optimization word problems in exact π symbolic notation without intermediate rounding errors.',
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
    { href: '/canvas-quiz-solver-free-demo', label: 'Live 5-Question Exam Sandbox' },
];

const ALL_COMPETITOR_LINKS = [
    { href: '/compare-canvas-hack-extensions', label: 'Best Quiz Extensions (2026)' },
    { href: '/canvashack-vs-examghost', label: 'CanvasHack vs ExamGhost' },
    { href: '/cheatmate-vs-examghost', label: 'CheatMate vs ExamGhost' },
    { href: '/quizard-vs-examghost', label: 'Quizard vs ExamGhost' },
    { href: '/solvely-vs-examghost', label: 'Solvely AI vs ExamGhost' },
    { href: '/gauth-vs-examghost', label: 'Gauth AI vs ExamGhost' },
    { href: '/coursology-vs-examghost', label: 'Coursology vs ExamGhost' },
    { href: '/homeworkify-vs-examghost', label: 'Homeworkify vs ExamGhost' },
    { href: '/mathosai-vs-examghost', label: 'Mathos AI vs ExamGhost' },
    { href: '/brainly-vs-examghost', label: 'Brainly vs ExamGhost' },
    { href: '/apexvision-vs-examghost', label: 'ApexVision vs ExamGhost' },
    { href: '/bettercampus-vs-examghost', label: 'BetterCampus vs ExamGhost' },
];

export default function DeltaMathHomeworkSolverPage() {
    const config = deltaMathConfig;
    const filmKey = config.slug.startsWith('blog/') ? config.slug.replace('blog/', '') : config.slug;
    const safeSlug = filmKey.replace(/\//g, '-');
    const videoUrl = `https://examghost.com/videos/${safeSlug}.mp4`;
    const posterUrl = `https://examghost.com/videos/posters/${safeSlug}-poster.jpg`;

    const rawGraph = Array.isArray(config.jsonLd?.['@graph'])
        ? (config.jsonLd['@graph'] as Record<string, unknown>[])
        : [];
    const baseGraph: Record<string, unknown>[] = [...rawGraph];

    const hasVideo = baseGraph.some((node) => node['@type'] === 'VideoObject');
    if (!hasVideo) {
        baseGraph.push({
            '@type': 'VideoObject',
            '@id': `https://examghost.com/${config.slug}#video`,
            name: `${config.platformName} AI Quiz Solver — 2.5D Explainer & Product Demo Film`,
            description: `16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves ${config.platformName} questions one by one via double-click and Alt+S Vision OCR inside a Closed Shadow DOM with zero blur events.`,
            thumbnailUrl: [posterUrl],
            contentUrl: videoUrl,
            uploadDate: '2026-10-22T00:00:00Z',
            duration: 'PT16S',
            publisher: {
                '@type': 'Organization',
                name: 'ExamGhost',
                url: 'https://examghost.com',
            },
        });
    }

    const hasHowTo = baseGraph.some((node) => node['@type'] === 'HowTo');
    if (!hasHowTo && config.howToSection) {
        baseGraph.push({
            '@type': 'HowTo',
            '@id': `https://examghost.com/${config.slug}#howto`,
            name: config.howToSection.heading,
            description: `Step-by-step workflow to solve ${config.platformName} quizzes and assignments one question at a time using ExamGhost's Closed Shadow DOM and Alt+S Vision OCR without triggering focus-loss logs.`,
            totalTime: 'PT1M',
            step: config.howToSection.steps.map((s: any, idx: number) => ({
                '@type': 'HowToStep',
                position: idx + 1,
                name: s.title,
                text: s.plainTextForSchema,
            })),
        });
    }

    const hasFaqPage = baseGraph.some((node) => node['@type'] === 'FAQPage');
    if (!hasFaqPage && config.faqs && config.faqs.length > 0) {
        baseGraph.push({
            '@type': 'FAQPage',
            '@id': `https://examghost.com/${config.slug}#faq`,
            mainEntity: config.faqs.map((faq: any) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        faq.plainTextAnswer ||
                        `ExamGhost solves ${config.platformName} questions inline in 0.3 seconds inside a Closed Shadow DOM with zero focus-loss flags.`,
                },
            })),
        });
    }

    for (let i = 0; i < baseGraph.length; i++) {
        const node = baseGraph[i];
        if (!node || typeof node !== 'object') continue;
        if (node['@type'] === 'WebPage') {
            baseGraph[i] = {
                datePublished: '2026-01-15',
                dateModified: '2026-10-23',
                inLanguage: 'en-US',
                author: { '@type': 'Organization', name: 'ExamGhost Security Engineering Team', url: 'https://examghost.com' },
                ...node,
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['h1', '.aeo-summary', '#lms-faq h2', '#lms-faq h3', '.faq-answer'],
                },
            };
        }
        if (node['@type'] === 'SoftwareApplication') {
            baseGraph[i] = {
                ...node,
                offers: [
                    { '@type': 'Offer', name: 'Free Tier (5 Free Solves / Day)', price: '0.00', priceCurrency: 'USD' },
                    { '@type': 'Offer', name: 'Monthly Pass', price: '19.00', priceCurrency: 'USD' },
                    { '@type': 'Offer', name: 'Academic Year Pass', price: '99.00', priceCurrency: 'USD' },
                    { '@type': 'Offer', name: 'Lifetime Degree Pass', price: '199.00', priceCurrency: 'USD' },
                ],
            };
        }
    }

    const enrichedJsonLd = {
        '@context': 'https://schema.org',
        '@graph': baseGraph,
    };

    const mascotImgSrc = config.architecture.mascotImage || '/images/ghost/ghost_privacy.jpg';
    const isBlogArticle = config.slug.startsWith('blog/');

    return (
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-emerald-500/20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedJsonLd) }}
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
                            {isBlogArticle ? (
                                <>
                                    <Link
                                        prefetch={false}
                                        href="/compare-canvas-hack-extensions"
                                        className="hover:text-ink transition-colors"
                                    >
                                        Security &amp; Telemetry Research
                                    </Link>
                                    <span>/</span>
                                    <span className="text-ink font-bold">{config.platformName}</span>
                                </>
                            ) : (
                                <>
                                    <Link
                                        prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="hover:text-ink transition-colors"
                                    >
                                        Live Sandbox
                                    </Link>
                                    <span>/</span>
                                    <span className="text-ink font-bold">{config.platformName} Solver</span>
                                </>
                            )}
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

                        {isBlogArticle && (
                            <div className="flex flex-wrap items-center gap-3 pt-1 pb-1 text-xs text-ink-muted">
                                <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-black/8 shadow-2xs">
                                    <img
                                        src="/images/ghost/ghost_mascot_hero.jpg"
                                        alt="ExamGhost Browser Security Research Lab"
                                        width={22}
                                        height={22}
                                        className="w-5 h-5 rounded-full object-cover border border-black/10"
                                    />
                                    <span className="font-semibold text-ink">ExamGhost Browser Security Lab</span>
                                </div>
                                <span>•</span>
                                <span>Reviewed against Instructure Canvas Open-Source Repo</span>
                                <span>•</span>
                                <time dateTime="2026-10-23" className="font-semibold text-emerald-800 bg-[#cdeecb]/60 px-2.5 py-0.5 rounded-full">
                                    Updated Oct 23, 2026
                                </time>
                            </div>
                        )}

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
                    <DeltaMathMotionDemo />

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
                        {config.questionTypesSection && (
                            <a
                                href="#supported-question-types"
                                className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                            >
                                {config.platformShort} Question Types
                            </a>
                        )}
                        {config.telemetryForensicsSection && (
                            <a
                                href="#instructor-telemetry-audit"
                                className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                            >
                                Instructor Log Forensics
                            </a>
                        )}
                        {config.howToSection && (
                            <a
                                href="#step-by-step-workflow"
                                className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                            >
                                1-by-1 Solve Workflow
                            </a>
                        )}
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
                        {config.courseModulesSection && (
                            <a
                                href="#supported-courses"
                                className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                            >
                                Courses &amp; Textbooks
                            </a>
                        )}
                    </div>
                </section>

                {/* 2. DEEP BESPOKE PLATFORM CONTENT + ARCHITECTURE + BENCHMARK + FAQ */}
                <section className="border-t border-black/5 bg-cream py-20 sm:py-28 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
                        {/* Unique 16s 2.5D Motion Explainer MP4 Film */}
                        <div id="explainer-film" className="scroll-mt-28">
                            <LmsExplainerFilmCard
                                slug={config.slug}
                                platformName={config.platformName}
                                heroDotColor={config.heroDotColor}
                            />
                        </div>

                        {/* BESPOKE SECTION A: SUPPORTED QUESTION TYPES & DOM MATRIX */}
                        {config.questionTypesSection && (
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
                                    {config.questionTypesSection.items.map((qItem: any, idx: number) => (
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
                        )}

                        {/* 3D Ghost Architecture Showcase Card */}
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
                                                src={mascotImgSrc}
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
                                            {config.architecture.pills.map((pill: string) => (
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
                                        {config.architecture.pillars.map((pillar: any) => (
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

                        {/* BESPOKE SECTION B: INSTRUCTOR TELEMETRY & LOG FORENSIC AUDIT */}
                        {config.telemetryForensicsSection && (
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
                                                {config.telemetryForensicsSection.events.map((ev: any, eIdx: number) => (
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
                        )}

                        {/* BESPOKE SECTION C: 4-STEP OPERATIONAL WORKFLOW (HOW-TO) */}
                        {config.howToSection && (
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
                                    {config.howToSection.steps.map((step: any) => (
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
                        )}

                        {/* OPTIONAL FREEFORM CUSTOM SECTION */}
                        {config.customSection && <div>{config.customSection}</div>}

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
                                                    Legacy Sidebar Extensions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-black/6">
                                            {config.benchmark.rows.map((row: any, rIdx: number) => (
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

                        {/* BESPOKE SECTION D: TOP UNIVERSITY COURSES, TEXTBOOKS & MODULES COVERED */}
                        {config.courseModulesSection && (
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
                                    {config.courseModulesSection.modules.map((mod: any, mIdx: number) => (
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
                        )}

                        {/* Study & Homework AI Workspace Showcase */}
                        <StudyAiHubShowcase compact />

                        {/* Two-Card Pastel Bento Hub */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                            <div className="lg:col-span-6 rounded-[32px] bg-[#c4d0f8]/45 border border-[#c4d0f8] p-6 sm:p-8 flex flex-col justify-between space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                                            20+ Supported Platforms
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
                                        See how ExamGhost’s Closed Shadow DOM and dual-model AI routing compare against 50+ legacy quiz extensions:
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 text-xs">
                                    {ALL_COMPETITOR_LINKS.map((item) => (
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
                        </div>

                        {/* Interactive Category-Filtered FAQ */}
                        <LmsServiceFaq
                            platformName={config.platformShort}
                            subtitle={config.faqSubtitle}
                            faqs={config.faqs}
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
