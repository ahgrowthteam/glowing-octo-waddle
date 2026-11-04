import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CengageWebAssignDemo } from '@/components/PlatformMotionDemos';
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
    title: { absolute: 'Cengage WebAssign & MindTap Solver — calcPad AI (2026)' },
    description:
        'Solve Cengage WebAssign, MindTap and CNOWv2 questions with randomized red variables and calcPad syntax in 0.3s. Alt+S diagram OCR and 5 free solves / day.',
    keywords: [
        'Cengage WebAssign solver',
        'Cengage MindTap AI solver',
        'WebAssign Chrome extension solver',
        'CNOWv2 accounting solver',
        'WebAssign red numbers solver',
        'does WebAssign detect tab switching',
        'Cengage Aplia economics solver',
    ],
    alternates: {
        canonical: 'https://examghost.com/cengage-mindtap-webassign-solver',
    },
    openGraph: {
        title: 'Cengage MindTap & WebAssign Solver — Interactive Product Demo | ExamGhost',
        description:
            'Watch or test ExamGhost inside a live Cengage WebAssign & MindTap simulator. Solves randomized red-number problems one by one via double-click or Alt+S OCR.',
        url: 'https://examghost.com/cengage-mindtap-webassign-solver',
        siteName: 'ExamGhost',
        type: 'website',
        images: [{ url: '/videos/posters/cengage-mindtap-webassign-solver-poster.jpg', width: 1280, height: 720, alt: 'Cengage WebAssign & MindTap Solver — calcPad AI (2026)' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cengage WebAssign & MindTap Solver — calcPad AI (2026)',
        description: 'Solve Cengage WebAssign, MindTap and CNOWv2 questions with randomized red variables and calcPad syntax in 0.3s. Alt+S diagram OCR and 5 free solves / day.',
        images: ['/videos/posters/cengage-mindtap-webassign-solver-poster.jpg'],
    },
};

const cengageConfig: any = {
    slug: 'cengage-mindtap-webassign-solver',
    platformName: 'Cengage MindTap & WebAssign',
    platformShort: 'WebAssign & MindTap',
    heroBadge: 'WebAssign calcPad, MindTap & CNOWv2 Ready',
    heroDotColor: '#2563eb',
    h1Title: 'Cengage MindTap &',
    h1Highlight: 'WebAssign AI Solver',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for Cengage MindTap &amp; WebAssign</strong> is a Manifest V3 Chrome extension engineered for{' '}
            <strong className="text-[#1a1a1a]">WebAssign</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">webassign.net/web/Student/Assignment-Responses</code>),{' '}
            <strong className="text-[#1a1a1a]">MindTap</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">ng.cengage.com</code>), and{' '}
            <strong className="text-[#1a1a1a]">CengageNOWv2 (CNOWv2)</strong>. Double-click any question one by one to compute exact answers using your unique <strong className="text-[#1a1a1a]">randomized red WebAssign numbers</strong>, or press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd> to scan physics circuits, Aplia graphs, and accounting ledgers.
        </>
    ),
    videoDemo: {
        platformSub: 'Cengage WebAssign + MindTap • webassign.net/web/Student/Assignment-Responses/last',
        browserUrl: 'https://www.webassign.net/web/Student/Assignment-Responses/last?dep=34819204',
        badgeBg: 'bg-[#eff6ff] border-[#bfdbfe]',
        badgeText: 'text-[#1d4ed8]',
        telemetryLabel: 'WebAssign & MindTap Focus: Active (0 Blur Events)',
        questions: [
            {
                id: 1,
                code: 'WA-CALC-01 • Stewart Calculus 9e (Randomized Red Variables)',
                type: 'WebAssign calcPad Symbolic',
                points: '2.00 pts',
                prompt:
                    'A particle moves along a straight line with position function s(t) = t³ - 6t² + 9t + 2 (where s is in meters and t is in seconds). Find the total distance traveled by the particle during the first 4 seconds (from t = 0 to t = 4).',
                options: [
                    '4 meters',
                    '12 meters',
                    '8 meters',
                    '6 meters',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Velocity is v(t) = s′(t) = 3t² - 12t + 9 = 3(t - 1)(t - 3), which changes sign at t = 1 and t = 3. Evaluating positions: s(0) = 2, s(1) = 6, s(3) = 2, and s(4) = 6. Total distance traveled = |s(1) - s(0)| + |s(3) - s(1)| + |s(4) - s(3)| = |6 - 2| + |2 - 6| + |6 - 2| = 4 + 4 + 4 = 12 meters.',
            },
            {
                id: 2,
                code: 'WA-PHYS-02 • Serway Physics 10e (physPad ±1% Tolerance)',
                type: 'WebAssign Physics Numerical',
                points: '3.00 pts',
                prompt:
                    'A 4.00-μF capacitor and an 8.00-μF capacitor are connected in series across a 24.0-V DC battery. What is the magnitude of the charge Q stored on each capacitor once fully charged?',
                options: [
                    'Q = 288 μC',
                    'Q = 64.0 μC',
                    'Q = 96.0 μC',
                    'Q = 192 μC',
                ],
                correctIndex: 1,
                confidence: '99.8%',
                explanation:
                    'For capacitors in series, C_eq = (C₁·C₂)/(C₁ + C₂) = (4.00 × 8.00)/(4.00 + 8.00) = 32.0 / 12.0 = 2.6667 μF. Both capacitors carry identical charge Q = C_eq · V = (8/3 μF)(24.0 V) = 64.0 μC.',
            },
            {
                id: 3,
                code: 'WA-CIRCUIT-03 • WebAssign / MindTap Engineering Diagram',
                type: 'WebAssign Figure (Requires Alt+S OCR)',
                points: '4.00 pts',
                requiresOcr: true,
                diagramLabel: 'WEBASSIGN PHYSPAD — KIRCHHOFF DC NETWORK DIAGRAM',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="104" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
                        <rect x="55" y="25" width="270" height="70" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <line x1="190" y1="25" x2="190" y2="95" stroke="#1e293b" strokeWidth="2" />
                        <rect x="42" y="50" width="26" height="18" rx="3" fill="#2563eb" />
                        <text x="45" y="62" fontSize="8" fontWeight="bold" fill="#ffffff">18 V</text>
                        <rect x="108" y="17" width="36" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <text x="114" y="28" fontSize="9" fontWeight="bold" fill="#0f172a">R₁=3Ω</text>
                        <rect x="172" y="52" width="36" height="16" rx="2" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
                        <text x="178" y="63" fontSize="9" fontWeight="bold" fill="#2563eb">R₂=6Ω</text>
                        <rect x="307" y="52" width="36" height="16" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
                        <text x="313" y="63" fontSize="9" fontWeight="bold" fill="#0f172a">R₃=3Ω</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the WebAssign DC resistor circuit above. An 18.0-V ideal source is in series with R₁ = 3.00 Ω, feeding the parallel combination of R₂ = 6.00 Ω and R₃ = 3.00 Ω. What is the current I₂ flowing through resistor R₂?',
                options: [
                    'I₂ = 1.20 A',
                    'I₂ = 2.40 A',
                    'I₂ = 3.60 A',
                    'I₂ = 1.80 A',
                ],
                correctIndex: 0,
                confidence: '99.6%',
                explanation:
                    'Parallel branch equivalence: R₂₃ = (6 × 3)/(6 + 3) = 18/9 = 2.00 Ω. Total resistance: R_tot = R₁ + R₂₃ = 3.00 + 2.00 = 5.00 Ω. Total current from source: I_tot = 18.0 V / 5.00 Ω = 3.60 A. By current division, I₂ = I_tot × [R₃ / (R₂ + R₃)] = 3.60 × (3 / 9) = 1.20 A.',
            },
            {
                id: 4,
                code: 'MINDTAP-ECON-04 • Mankiw Macroeconomics / Aplia',
                type: 'Cengage MindTap & Aplia',
                points: '3.00 pts',
                prompt:
                    'Suppose the banking system holds zero excess reserves and the required reserve ratio set by the central bank is 12.5% (1/8). If the central bank purchases $50 million of government bonds via an open-market operation, what is the maximum potential increase in the money supply?',
                options: [
                    '$350 million',
                    '$400 million',
                    '$625 million',
                    '$50 million',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'The simple money multiplier is m = 1 / R = 1 / 0.125 = 8. Multiplying the $50 million injection of new reserves by 8 yields a maximum money supply expansion of $50 million × 8 = $400 million.',
            },
            {
                id: 5,
                code: 'CNOWV2-ACCT-05 • CengageNOWv2 Managerial Accounting',
                type: 'CNOWv2 Cost-Volume-Profit Analysis',
                points: '3.00 pts',
                prompt:
                    'Vanguard Manufacturing sells a component for $80 per unit. Variable manufacturing and selling costs total $50 per unit, and total monthly fixed costs are $135,000. How many units must Vanguard sell each month to achieve a target operating income of $45,000?',
                options: [
                    '4,500 units',
                    '5,250 units',
                    '6,000 units',
                    '2,250 units',
                ],
                correctIndex: 2,
                confidence: '99.9%',
                explanation:
                    'Unit contribution margin = $80 - $50 = $30 per unit. Required units for target profit = (Fixed Costs + Target Profit) / Unit Contribution Margin = ($135,000 + $45,000) / $30 = $180,000 / $30 = 6,000 units.',
            },
        ],
    },
    architecture: {
        cardBg: '#eff6ff',
        cardBorder: '#bfdbfe',
        mascotImage: '/images/ghost/ghost_mascot_grad_dark.jpg',
        mascotTitle: 'WebAssign & MindTap Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">webassign.net</code> red numbers, MindTap docks, and CNOWv2.
            </>
        ),
        pills: ['Red-Number Precision', 'calcPad / physPad Syntax', 'MindTap Iframe Ready'],
        eyebrow: 'Cengage WebAssign & MindTap Architecture',
        heading: 'Solves Your Exact Randomized Red WebAssign Numbers',
        lead: (
            <>
                Searching a <strong className="text-[#1a1a1a]">Cengage WebAssign</strong> question on Google or Chegg almost always returns someone else&apos;s numbers because WebAssign randomizes every red variable (<code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">&lt;font color=&quot;red&quot;&gt;</code>) per student. ExamGhost parses your live DOM directly on double-click and computes the exact answer for your specific seed values.
            </>
        ),
        pillars: [
            {
                title: '1. Live WebAssign Red-Variable Calculation',
                desc: (
                    <>
                        When you double-click a WebAssign question block (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.qbox</code>), ExamGhost extracts your exact randomized red numbers and enforces WebAssign&apos;s default <strong className="text-[#1a1a1a]">$\pm 1\%$ numerical tolerance</strong> (4+ significant figures) as well as exact <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">calcPad</code> / <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">physPad</code> symbolic notation.
                    </>
                ),
                image: '/images/ghost/ghost_card_ai.jpg',
            },
            {
                title: '2. Traverses MindTap & CNOWv2 Nested App Frames',
                desc: (
                    <>
                        Cengage MindTap (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">ng.cengage.com</code>) loads Aplia, CNOWv2, and SAM activities inside deeply nested dock iframes. ExamGhost&apos;s Manifest V3 frame bridge attaches seamlessly inside the inner activity frame so double-clicking works with zero configuration.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
            {
                title: '3. Alt+S for Physics Schematics, Aplia Graphs & Ledgers',
                desc: (
                    <>
                        Whether you are solving a Serway Physics circuit on WebAssign, shifting supply-and-demand curves in MindTap Aplia, or completing a CNOWv2 accounting worksheet, press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to capture the visual figure and receive step-by-step inputs.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
        ],
    },
    questionTypesSection: {
        eyebrow: 'WebAssign, MindTap, Aplia & CNOWv2 Formats',
        heading: 'Every Cengage Symbolic Palette & Interactive Widget Supported',
        lead: (
            <>
                Unlike generic sidebar extensions (<em>StudyFox</em>, <em>Quizonator</em>) or UI tweaks (<em>WebAssign Fixer</em>), ExamGhost parses Cengage&apos;s proprietary symbolic answer pads and nested MindTap app frames:
            </>
        ),
        items: [
            {
                name: 'WebAssign Red-Variable Numerical & ±1% Tolerance',
                codeTag: 'div.qbox / <span class="red">',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.8%',
                description: (
                    <>
                        Reads your personal randomized red values directly from the <code className="font-mono text-xs">.qbox</code> DOM and computes answers to 5 significant digits so you always clear WebAssign&apos;s strict <code className="font-mono text-xs">±1%</code> grading window.
                    </>
                ),
            },
            {
                name: 'WebAssign calcPad, physPad & mathPad Symbolic Palettes',
                codeTag: 'calcPad / physPad XML',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.5%',
                description: (
                    <>
                        Formats indefinite integrals (<code className="font-mono text-xs">+ C</code>), unit vectors (<code className="font-mono text-xs">\hat{'{i}'}, \hat{'{j}'}, \hat{'{k}'}</code>), and differential equations in exact case-sensitive WebAssign palette syntax.
                    </>
                ),
            },
            {
                name: 'WebAssign chemPad & MarvinJS Organic Structures',
                codeTag: 'chemPad / Subscript States',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: '99.2%',
                description: (
                    <>
                        Outputs balanced chemical equations with exact phase states (<code className="font-mono text-xs">(aq), (s), (l), (g)</code>), equilibrium <code className="font-mono text-xs">K_p / K_c</code> expressions, and IUPAC organic nomenclature.
                    </>
                ),
            },
            {
                name: 'MindTap Aplia Economics Interactive Curve Shifting',
                codeTag: 'ng.cengage.com Aplia SVG',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.1%',
                description: (
                    <>
                        Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> over any MindTap Aplia micro/macroeconomics graph to get exact equilibrium price/quantity coordinates, deadweight loss triangle vertices, and curve-shift directions.
                    </>
                ),
            },
            {
                name: 'CengageNOWv2 (CNOWv2) Accounting Ledger Worksheets',
                codeTag: 'cnow.apps.ng.cengage.com',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.4%',
                description: (
                    <>
                        Captures multi-column CNOWv2 general journal entries, adjusting entries, and financial statement dropdowns, verifying that all debit and credit totals balance before you click <em>Check My Work</em>.
                    </>
                ),
            },
            {
                name: 'Cengage SAM & MindTap Coding / IT Concept Exams',
                codeTag: 'SAM Assessment Frame',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: '99.3%',
                description: (
                    <>
                        Solves Cengage SAM Microsoft Excel/Access formula questions and MindTap programming quizzes with instant inline verification and zero focus-loss events.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: 'WebAssign & MindTap Telemetry Audit',
        heading: 'What Professors See in WebAssign & MindTap ScoreView Logs',
        lead: (
            <>
                Cengage instructors review student work through WebAssign&apos;s <strong>ScoreView / LogInfo</strong> audit trail and MindTap&apos;s <strong>Progress App Analytics</strong>. Here is what those logs record and how ExamGhost keeps your attempt clean:
            </>
        ),
        citationNote: 'Audited on WebAssign & MindTap 2026',
        logTableTitle: 'cengage_scoreview_forensics — Instructor Log Breakdown',
        events: [
            {
                eventCode: 'WebAssign LogInfo (Deployment & Save Timestamps)',
                whenTriggered: 'Opening the assignment and clicking "Submit Answer" on an individual question box',
                professorView: 'Shows exact timestamp and IP address for each individual question submission',
                examghostStatus: '1-by-1 Submission at Human Pace',
                isSafe: true,
            },
            {
                eventCode: 'Submission Count per Question Part (e.g. 1/5 Tries)',
                whenTriggered: 'Submitting a numerical or symbolic answer into a WebAssign input box',
                professorView: 'Displays every historical wrong string submitted prior to the final correct answer',
                examghostStatus: '1st-Try Correct (5 Sig-Fig Match)',
                isSafe: true,
            },
            {
                eventCode: 'MindTap Progress App (Engagement & Time in Course)',
                whenTriggered: 'Interacting with MindTap reading activities, Aplia problem sets, and CNOWv2 homework',
                professorView: 'Tracks cumulative active minutes inside the ng.cengage.com iframe and activity completion %',
                examghostStatus: '100% Active Focus Inside Iframe',
                isSafe: true,
            },
            {
                eventCode: 'Parent LMS LTI 1.3 Blur Listener',
                whenTriggered: 'Switching browser tabs to search Chegg or paste into ChatGPT',
                professorView: 'Logs window.onblur in Canvas/Blackboard when Cengage is opened inside an LMS frame',
                examghostStatus: '0 Blur Events Fired',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why WebAssign’s Per-Box Submit Architecture Defeats "Solve All" Bots',
        whyNoSolveAllBody: (
            <>
                In WebAssign, every individual question box (<code className="font-mono text-white">.qbox</code>) has its own <em>Submit Answer</em> button, and WebAssign&apos;s <strong>LogInfo</strong> page records the exact second each box is submitted. If a student submits 15 multi-part calculus or physics questions within 10 seconds of opening the assignment, the instructor&apos;s LogInfo timeline immediately exposes automated batching. ExamGhost is built around deliberate <strong>one-by-one double-click solving</strong> so each <code className="font-mono text-white">.qbox</code> is solved and submitted at natural human intervals.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Cengage Workflow',
        heading: 'How to Solve Cengage WebAssign & MindTap Questions Inline',
        lead: (
            <>
                Follow this 4-step workflow to solve randomized red WebAssign problems and nested MindTap/CNOWv2 activities without leaving your active tab:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Open Your Cengage WebAssign or MindTap Activity',
                shortcutBadge: 'webassign.net / ng.cengage.com',
                description: (
                    <>
                        Launch your Cengage assignment from Canvas, Blackboard, D2L, or directly at <code className="font-mono text-xs">webassign.net</code>. ExamGhost automatically attaches to both top-level WebAssign pages and nested MindTap dock iframes.
                    </>
                ),
                plainTextForSchema:
                    'Launch your Cengage assignment from Canvas, Blackboard, D2L, or webassign.net. ExamGhost attaches automatically to WebAssign pages and nested MindTap dock iframes.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click Any WebAssign .qbox to Parse Red Variables',
                shortcutBadge: 'Double-Click .qbox',
                description: (
                    <>
                        Double-click inside the specific question box you are working on. ExamGhost reads your exact randomized red numbers and computes the solution to 5 significant figures (plus exact <code className="font-mono text-xs">calcPad</code> / <code className="font-mono text-xs">physPad</code> notation).
                    </>
                ),
                plainTextForSchema:
                    'Double-click inside the WebAssign .qbox you are working on to extract your randomized red variables and compute the solution to 5 significant figures.',
            },
            {
                stepNumber: '3',
                title: 'Press Alt+S Over Physics Circuits, Aplia Graphs & CNOWv2 Tables',
                shortcutBadge: 'Alt + S (Vision OCR)',
                description: (
                    <>
                        When a problem relies on an electric circuit schematic, a 3D statics diagram, an Aplia supply-and-demand graph, or a CNOWv2 accounting ledger, press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> and drag a box around the visual to get line-by-line answers.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S and drag a crop rectangle over any physics diagram, Aplia economics graph, or CNOWv2 accounting table to receive line-by-line visual solutions.',
            },
            {
                stepNumber: '4',
                title: 'Enter & Submit Each Question Box One by One',
                shortcutBadge: 'Clean LogInfo Trail',
                description: (
                    <>
                        Type the verified expression into <code className="font-mono text-xs">calcPad</code> or select your CNOWv2 dropdowns and click <em>Submit Answer</em> for that single question before moving to the next, preserving a 100% natural WebAssign LogInfo timeline.
                    </>
                ),
                plainTextForSchema:
                    'Enter the verified expression into calcPad or CNOWv2 and submit one question box at a time to preserve a natural WebAssign LogInfo timeline.',
            },
        ],
    },
    courseModulesSection: {
        eyebrow: 'Supported Cengage Textbooks & Platforms',
        heading: 'Top University WebAssign, MindTap & CNOWv2 Courses Covered',
        lead: (
            <>
                ExamGhost is pre-calibrated for the formatting conventions and rounding tolerances of Cengage&apos;s flagship university textbooks:
            </>
        ),
        modules: [
            {
                department: 'Calculus, Differential Equations & Linear Algebra (WebAssign)',
                courseCodes: 'MATH-151 / MATH-152 / MATH-253',
                textbooksOrModules: 'Stewart Calculus 9e, Larson Calculus, Zill Differential Equations on WebAssign',
                keyChallengeSolved:
                    'Computes exact symbolic calcPad integrals, Taylor series coefficients, and multivariable partial derivatives using your exact randomized red numbers.',
            },
            {
                department: 'University Physics & Engineering (WebAssign)',
                courseCodes: 'PHYS-141 / PHYS-142 / ENGR-201',
                textbooksOrModules: 'Serway & Jewett Physics for Scientists and Engineers, Katz Physics on WebAssign',
                keyChallengeSolved:
                    'Enforces ±1% numerical precision (never rounding intermediate steps) and formats symbolic physPad answers with proper Greek letters and unit vectors.',
            },
            {
                department: 'Micro/Macroeconomics & Finance (MindTap Aplia)',
                courseCodes: 'ECON-101 / ECON-102 / FIN-301',
                textbooksOrModules: 'Mankiw Principles of Economics, Arnold Economics, Brigham Financial Management',
                keyChallengeSolved:
                    'Uses Alt+S Vision OCR to solve MindTap Aplia interactive graph-shifting problems, consumer surplus triangles, and multi-dropdown economic scenarios.',
            },
            {
                department: 'Accounting & General Chemistry (CNOWv2 & OWLv2)',
                courseCodes: 'ACCT-201 / CHEM-101 / CHEM-102',
                textbooksOrModules: 'Warren/Reeve/Duchac Accounting (CNOWv2), Zumdahl Chemistry (WebAssign / OWLv2)',
                keyChallengeSolved:
                    'Balances multi-column CNOWv2 accounting general journals and solves Zumdahl OWLv2/WebAssign chemPad stoichiometry and VSEPR geometry modules.',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Cengage WebAssign & MindTap Audit',
        heading: 'ExamGhost vs. Search Engines & Generic Extensions on Cengage',
        windowTitle: 'cengage_webassign_mindtap_audit.csv — Verified Comparison',
        windowBadge: 'WebAssign • MindTap • CNOWv2',
        rows: [
            {
                capability: (
                    <>
                        Computes exact answers for your randomized <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">red WebAssign variables</code>
                    </>
                ),
                examghost: 'Yes (4+ Sig-Fig Precision)',
                chatgpt: 'Requires Manual Re-Typing',
                sidebar: 'Often Misses Subscript/Superscript Tags',
            },
            {
                capability: (
                    <>
                        Outputs <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">calcPad</code>, <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">physPad</code>, and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">chemPad</code> symbolic expressions
                    </>
                ),
                examghost: 'Yes (Explain Mode Alt+3)',
                chatgpt: 'Unformatted Plain Text',
                sidebar: 'Incompatible with calcPad',
            },
            {
                capability: (
                    <>
                        Works inside nested MindTap (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">ng.cengage.com</code>) &amp; CNOWv2 iframes
                    </>
                ),
                examghost: 'Yes (Manifest V3 all_frames)',
                chatgpt: 'Blocked / Requires Tab Switch',
                sidebar: 'Fails Inside MindTap Dock',
            },
            {
                capability: 'Captures WebAssign physics diagrams & MindTap Aplia economic graphs',
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Manual Screenshot Save & Upload',
                sidebar: 'Cannot Parse SVG / Canvas Graphs',
            },
            {
                capability: 'Zero window.blur or visibilitychange triggers in parent LMS',
                examghost: '100% Maintained',
                chatgpt: 'Logs Every Tab Switch',
                sidebar: 'Injects Detectable Sidebar DOM',
            },
        ],
    },
    faqSubtitle:
        'Direct engineering answers for Cengage WebAssign red numbers, calcPad/physPad tolerances, MindTap dock iframes, and CNOWv2.',
    faqs: [
        {
            category: 'stealth',
            q: 'Does Cengage WebAssign or MindTap detect tab switching?',
            a: (
                <>
                    When you open WebAssign or MindTap through a university LMS like Canvas or Blackboard (or inside WebAssign&apos;s timed test mode), switching tabs fires <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">visibilitychange</code> events in the browser. ExamGhost solves questions directly inside your active WebAssign or MindTap tab so you never switch windows.
                </>
            ),
            plainTextAnswer:
                'When you open WebAssign or MindTap through a university LMS like Canvas or Blackboard (or inside WebAssign timed test mode), switching tabs fires window.blur and visibilitychange events in the browser. ExamGhost solves questions directly inside your active WebAssign or MindTap tab so you never switch windows.',
        },
        {
            category: 'stealth',
            q: 'Can WebAssign or Cengage detect the ExamGhost Chrome extension?',
            a: (
                <>
                    No. In standard Chrome, Brave, or Edge sessions, Cengage WebAssign and MindTap run inside standard web sandboxes that cannot scan installed Manifest V3 extensions. ExamGhost uses isolated execution worlds and never injects visible sidebars into the Cengage DOM.
                </>
            ),
            plainTextAnswer:
                'No. In standard Chrome, Brave, or Edge sessions, Cengage WebAssign and MindTap run inside standard web sandboxes that cannot scan installed Manifest V3 extensions. ExamGhost uses isolated execution worlds and never injects visible sidebars into the Cengage DOM.',
        },
        {
            category: 'ocr',
            q: 'How does ExamGhost handle WebAssign randomized red numbers and ±1% tolerance?',
            a: (
                <>
                    WebAssign assigns each student unique red numbers and typically grades numerical inputs within a strict <strong className="text-[#1a1a1a]">$\pm 1\%$ or $\pm 2\%$ tolerance</strong>. When you double-click a WebAssign question or use <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> in <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong>, ExamGhost computes intermediate steps at full floating-point precision and presents the final value to 4 significant figures so you never lose attempts to premature rounding.
                </>
            ),
            plainTextAnswer:
                'WebAssign assigns each student unique red numbers and typically grades numerical inputs within a strict +/-1% or +/-2% tolerance. When you double-click a WebAssign question or use Alt+S in Explain Mode (Alt+3), ExamGhost computes intermediate steps at full floating-point precision and presents the final value to 4 significant figures so you never lose attempts to premature rounding.',
        },
        {
            category: 'ocr',
            q: 'Does ExamGhost support WebAssign calcPad, physPad, and chemPad symbolic inputs?',
            a: (
                <>
                    Yes. For calculus, physics, and chemistry problems that require symbolic answers (like <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">calcPad</code> derivatives, vectors in unit-vector notation <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">i, j, k</code>, or balanced chemical equations in <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">chemPad</code>), switch to <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> and double-click the prompt to see the exact symbolic expression and variable casing required.
                </>
            ),
            plainTextAnswer:
                'Yes. For calculus, physics, and chemistry problems that require symbolic answers (like calcPad derivatives, vectors in unit-vector notation i, j, k, or balanced chemical equations in chemPad), switch to Explain Mode (Alt+3) and double-click the prompt to see the exact symbolic expression and variable casing required.',
        },
        {
            category: 'ocr',
            q: 'How do I solve Cengage MindTap Aplia graphs and CNOWv2 accounting tables?',
            a: (
                <>
                    Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> and drag across the MindTap Aplia graph or CNOWv2 ledger table. ExamGhost reads the axes, curves, and account balances visually and tells you exactly where to shift each curve or which debit/credit amounts to enter in each cell.
                </>
            ),
            plainTextAnswer:
                'Press Alt+S and drag across the MindTap Aplia graph or CNOWv2 ledger table. ExamGhost reads the axes, curves, and account balances visually and tells you exactly where to shift each curve or which debit/credit amounts to enter in each cell.',
        },
        {
            category: 'workflow',
            q: 'Why does ExamGhost solve WebAssign questions one by one instead of all at once?',
            a: (
                <>
                    WebAssign homework and tests often contain 10 to 25 multi-part questions on a single long scrolling page, and each <strong className="text-[#1a1a1a]">Submit Answer</strong> click is timestamped individually. Solving questions one by one via double-click or <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> lets you verify and submit each part naturally without triggering bulk API requests.
                </>
            ),
            plainTextAnswer:
                'WebAssign homework and tests often contain 10 to 25 multi-part questions on a single long scrolling page, and each Submit Answer click is timestamped individually. Solving questions one by one via double-click or Alt+S lets you verify and submit each part naturally without triggering bulk API requests.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work if WebAssign LockDown Browser is enabled?',
            a: (
                <>
                    No. When an instructor enables Respondus LockDown Browser for a WebAssign exam, the test opens in a standalone kiosk application that blocks all Chrome extensions. ExamGhost works on all WebAssign, MindTap, and CNOWv2 assignments taken inside standard <strong className="text-[#1a1a1a]">Chrome, Brave, or Edge</strong> browsers.
                </>
            ),
            plainTextAnswer:
                'No. When an instructor enables Respondus LockDown Browser for a WebAssign exam, the test opens in a standalone kiosk application that blocks all Chrome extensions. ExamGhost works on all WebAssign, MindTap, and CNOWv2 assignments taken inside standard Chrome, Brave, or Edge browsers.',
        },
        {
            category: 'workflow',
            q: 'Can I test the Cengage WebAssign & MindTap solver before installing?',
            a: (
                <>
                    Yes! Use the interactive <strong className="text-[#1a1a1a]">WebAssign &amp; MindTap Simulator</strong> at the top of this page to test one-by-one double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> DC circuit OCR, and all three stealth modes right in your browser.
                </>
            ),
            plainTextAnswer:
                'Yes! Use the interactive WebAssign & MindTap Simulator at the top of this page to test one-by-one double-click solving, Alt+S DC circuit OCR, and all three stealth modes right in your browser.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/cengage-mindtap-webassign-solver/#webpage',
                url: 'https://examghost.com/cengage-mindtap-webassign-solver',
                name: 'Cengage MindTap & WebAssign Solver | CNOWv2 & calcPad AI | ExamGhost',
                description:
                    'Interactive Cengage WebAssign, MindTap, and CNOWv2 quiz solver simulator and technical guide.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#cengage-mindtap-webassign-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost Cengage MindTap & WebAssign Solver',
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
                        name: 'Cengage MindTap & WebAssign Solver',
                        item: 'https://examghost.com/cengage-mindtap-webassign-solver',
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

export default function CengageMindTapWebAssignSolverPage() {
    const config = cengageConfig;
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
                    <CengageWebAssignDemo />

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
