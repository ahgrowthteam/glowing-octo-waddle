import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { McgrawHillAleksQuizMotionDemo } from '@/components/PlatformMotionDemos';
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
    title: { absolute: 'McGraw Hill Connect & ALEKS Solver — SmartBook AI (2026)' },
    description:
        'Solve McGraw Hill Connect, SmartBook 2.0 and ALEKS questions one by one in 0.3s, with Alt+S OCR for ChemDraw and graphs. Live demo and 5 free solves / day.',
    keywords: [
        'McGraw Hill Connect solver',
        'ALEKS math solver Chrome extension',
        'McGraw Hill SmartBook 2.0 AI helper',
        'ezto mheducation quiz solver',
        'does McGraw Hill Connect detect tab switching',
        'ALEKS knowledge check solver',
        'McGraw Hill accounting solver',
    ],
    alternates: {
        canonical: 'https://examghost.com/mcgraw-hill-connect-aleks-solver',
    },
    openGraph: {
        title: 'McGraw Hill Connect & ALEKS Solver — Live EZTO & SmartBook Demo | ExamGhost',
        description:
            'Watch or test ExamGhost inside a simulated McGraw Hill Connect EZTO & ALEKS session. One-by-one double-click solving, Alt+S ChemDraw & accounting table OCR, and zero tab switches.',
        url: 'https://examghost.com/mcgraw-hill-connect-aleks-solver',
        siteName: 'ExamGhost',
        type: 'website',
        images: [{ url: '/videos/posters/mcgraw-hill-connect-aleks-solver-poster.jpg', width: 1280, height: 720, alt: 'McGraw Hill Connect & ALEKS Solver — SmartBook AI (2026)' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'McGraw Hill Connect & ALEKS Solver — SmartBook AI (2026)',
        description: 'Solve McGraw Hill Connect, SmartBook 2.0 and ALEKS questions one by one in 0.3s, with Alt+S OCR for ChemDraw and graphs. Live demo and 5 free solves / day.',
        images: ['/videos/posters/mcgraw-hill-connect-aleks-solver-poster.jpg'],
    },
};

const mcgrawHillConfig: any = {
    slug: 'mcgraw-hill-connect-aleks-solver',
    platformName: 'McGraw Hill Connect & ALEKS',
    platformShort: 'Connect & ALEKS',
    heroBadge: 'EZTO Player, SmartBook 2.0 & ALEKS Ready',
    heroDotColor: '#e11d48',
    h1Title: 'McGraw Hill Connect &',
    h1Highlight: 'ALEKS AI Solver',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for McGraw Hill Connect &amp; ALEKS</strong> is a Manifest V3 Chrome extension engineered for{' '}
            <strong className="text-[#1a1a1a]">Connect EZTO</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">ezto.mheducation.com</code>),{' '}
            <strong className="text-[#1a1a1a]">SmartBook 2.0</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">learning.mheducation.com</code>), and{' '}
            <strong className="text-[#1a1a1a]">ALEKS Knowledge Checks</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">www-awu.aleks.com</code>). Double-click any prompt one by one or press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd> to capture ChemDraw molecules, ALEKS coordinate planes, and multi-column accounting ledgers without leaving the LTI tab.
        </>
    ),
    videoDemo: {
        platformSub: 'McGraw Hill Connect EZTO + ALEKS • ezto.mheducation.com/ext/map/index.html',
        browserUrl: 'https://ezto.mheducation.com/ext/map/index.html?_con=con&external_browser=0&launchUrl=aleks',
        badgeBg: 'bg-[#fff1f2] border-[#fecdd3]',
        badgeText: 'text-[#e11d48]',
        telemetryLabel: 'EZTO & ALEKS LTI Focus: Active (0 Blur Events)',
        questions: [
            {
                id: 1,
                code: 'MHE-EZTO-01 • Financial Accounting (Journal & Trial Balance)',
                type: 'McGraw Hill Connect Accounting',
                points: '5.00 pts',
                prompt:
                    'On October 1, Apex Corp. collected $18,000 cash in advance for a 12-month software maintenance contract and credited Unearned Service Revenue. If Apex prepares annual financial statements on December 31, what adjusting entry is required?',
                options: [
                    'Debit Unearned Service Revenue $13,500; Credit Service Revenue $13,500',
                    'Debit Unearned Service Revenue $4,500; Credit Service Revenue $4,500',
                    'Debit Service Revenue $4,500; Credit Unearned Service Revenue $4,500',
                    'Debit Cash $4,500; Credit Service Revenue $4,500',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Three months of service have been earned from October 1 through December 31: $18,000 × (3 / 12) = $4,500. The adjusting entry reduces the liability (Debit Unearned Service Revenue $4,500) and recognizes earned revenue (Credit Service Revenue $4,500).',
            },
            {
                id: 2,
                code: 'ALEKS-KC-02 • Precalculus & Rational Functions',
                type: 'ALEKS Knowledge Check Prompt',
                points: '1 Topic Mastery',
                prompt:
                    'Consider the rational function f(x) = (3x² - 12) / (x² - x - 6). Which statement accurately describes the vertical asymptotes and holes (removable discontinuities) of the graph of f(x)?',
                options: [
                    'Vertical asymptotes at x = 3 and x = -2; no holes.',
                    'Vertical asymptote at x = 3; hole at x = -2 with y-coordinate 12/5.',
                    'Vertical asymptote at x = -2; hole at x = 3 with y-coordinate 4.',
                    'No vertical asymptotes; holes at both x = 3 and x = -2.',
                ],
                correctIndex: 1,
                confidence: '99.6%',
                explanation:
                    'Factor numerator and denominator: f(x) = 3(x - 2)(x + 2) / [(x - 3)(x + 2)]. The common factor (x + 2) cancels, creating a hole at x = -2 where y = 3(-2 - 2)/(-2 - 3) = -12/-5 = 12/5. The remaining zero in the denominator gives a vertical asymptote at x = 3.',
            },
            {
                id: 3,
                code: 'ALEKS-CHEM-03 • Organic & General Chemistry (HTML5 Canvas)',
                type: 'Connect ChemDraw / ALEKS Diagram (Requires Alt+S OCR)',
                points: '5.00 pts',
                requiresOcr: true,
                diagramLabel: 'ALEKS / CONNECT CHEMDRAW — REACTION ENERGY PROFILE',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="104" rx="8" fill="#fff1f2" stroke="#fecdd3" />
                        <line x1="40" y1="18" x2="40" y2="98" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="40" y1="98" x2="345" y2="98" stroke="#64748b" strokeWidth="1.5" />
                        <path d="M 45 65 L 85 65 Q 125 15 155 50 Q 175 70 195 50 Q 225 25 255 85 L 325 85" fill="none" stroke="#e11d48" strokeWidth="2.5" />
                        <circle cx="125" cy="34" r="3.5" fill="#0f172a" />
                        <circle cx="175" cy="59" r="3.5" fill="#2563eb" />
                        <circle cx="222" cy="40" r="3.5" fill="#0f172a" />
                        <text x="48" y="58" fontSize="9" fontWeight="bold" fill="#334155">Reactants (60 kJ)</text>
                        <text x="112" y="25" fontSize="9" fontWeight="bold" fill="#0f172a">TS1 (145 kJ)</text>
                        <text x="160" y="75" fontSize="9" fontWeight="bold" fill="#2563eb">Int (80 kJ)</text>
                        <text x="208" y="30" fontSize="9" fontWeight="bold" fill="#0f172a">TS2 (120 kJ)</text>
                        <text x="268" y="78" fontSize="9" fontWeight="bold" fill="#334155">Products (25 kJ)</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the two-step reaction coordinate diagram above. Which step is rate-determining, what is the overall forward activation energy Ea, and what is ΔH_rxn?',
                options: [
                    'Step 1 is rate-determining; Ea = +85 kJ/mol; ΔH_rxn = -35 kJ/mol',
                    'Step 2 is rate-determining; Ea = +60 kJ/mol; ΔH_rxn = +35 kJ/mol',
                    'Step 1 is rate-determining; Ea = +145 kJ/mol; ΔH_rxn = -60 kJ/mol',
                    'Step 2 is rate-determining; Ea = +85 kJ/mol; ΔH_rxn = -35 kJ/mol',
                ],
                correctIndex: 0,
                confidence: '99.4%',
                explanation:
                    'Transition State 1 (TS1 = 145 kJ) is the highest energy peak on the entire profile, making Step 1 rate-determining. The forward activation energy is Ea = E(TS1) - E(Reactants) = 145 - 60 = +85 kJ/mol, and ΔH_rxn = E(Products) - E(Reactants) = 25 - 60 = -35 kJ/mol.',
            },
            {
                id: 4,
                code: 'MHE-SB2-04 • SmartBook 2.0 Adaptive Concept Check',
                type: 'SmartBook 2.0 (learning.mheducation.com)',
                points: 'High Confidence',
                prompt:
                    'In microeconomic theory of the firm, why does the short-run Marginal Cost (MC) curve always intersect both the Average Variable Cost (AVC) and Average Total Cost (ATC) curves at their respective minimum points?',
                options: [
                    'Because fixed costs decline at a constant rate as marginal product increases.',
                    'Because whenever marginal cost is below average cost, producing one more unit pulls the average down; when marginal cost exceeds average cost, it pulls the average up.',
                    'Because the law of diminishing marginal returns only applies after average total cost reaches its maximum.',
                    'Because marginal revenue equals price in perfectly competitive markets.',
                ],
                correctIndex: 1,
                confidence: '99.8%',
                explanation:
                    'Mathematically, d(ATC)/dQ = (MC - ATC)/Q. When MC < ATC, the slope of ATC is negative (falling); when MC > ATC, the slope of ATC is positive (rising). Therefore, MC must equal ATC (and similarly AVC) at the exact minimum where the slope is zero.',
            },
            {
                id: 5,
                code: 'ALEKS-STAT-05 • ALEKS Business Statistics',
                type: 'ALEKS Hypothesis Testing & Confidence Intervals',
                points: '1 Topic Mastery',
                prompt:
                    'A quality engineer constructs a 95% two-sided confidence interval for the population mean battery life μ using a sample of n = 36 batteries and obtains [48.2 hours, 51.8 hours]. If she tests H₀: μ = 52.5 vs. H₁: μ ≠ 52.5 at significance level α = 0.05, what is the decision?',
                options: [
                    'Fail to reject H₀ because 52.5 is within 1 standard error of 51.8.',
                    'Reject H₀ at α = 0.05 because the hypothesized value μ₀ = 52.5 falls outside the 95% two-sided confidence interval.',
                    'Fail to reject H₀ unless α is increased to 0.10.',
                    'The test is inconclusive without knowing the population variance.',
                ],
                correctIndex: 1,
                confidence: '99.7%',
                explanation:
                    'By the duality between a two-sided (1 - α) confidence interval and a two-tailed hypothesis test at level α, any null parameter μ₀ lying outside the 95% confidence interval [48.2, 51.8] yields a p-value < 0.05 and is rejected.',
            },
        ],
    },
    architecture: {
        cardBg: '#fff1f2',
        cardBorder: '#fecdd3',
        mascotImage: '/images/ghost/ghost_card_ai.jpg',
        mascotTitle: 'Connect EZTO & ALEKS Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">ezto.mheducation.com</code>, SmartBook 2.0, and ALEKS.
            </>
        ),
        pills: ['SmartBook 2.0 Ready', 'ALEKS Math & Chem OCR', 'Zero LTI Blur Logs'],
        eyebrow: 'McGraw Hill Connect & ALEKS Architecture',
        heading: 'Built for EZTO iframes, SmartBook 2.0 & ALEKS Canvas Widgets',
        lead: (
            <>
                McGraw Hill Connect launches assessments inside nested <strong className="text-[#1a1a1a]">EZTO player iframes</strong> (<code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">ezto.mheducation.com</code>) while <strong className="text-[#1a1a1a]">ALEKS</strong> renders equations and chemistry palettes inside dynamic <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">/alekscgi/</code> frames. ExamGhost handles both text DOM and visual canvas widgets without leaving your assignment tab.
            </>
        ),
        pillars: [
            {
                title: '1. Solves SmartBook 2.0 & EZTO Prompts In-Place',
                desc: (
                    <>
                        In <strong className="text-[#1a1a1a]">SmartBook 2.0</strong> (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">learning.mheducation.com</code>), each adaptive question pairs a concept prompt with a confidence rating (High, Medium, Low). Double-clicking the prompt in ExamGhost highlights the verified option immediately so you can select <strong className="text-[#1a1a1a]">High Confidence</strong> and finish recharge concepts faster.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
            {
                title: '2. Alt+S for ALEKS Graphs, ChemDraw & Accounting Grids',
                desc: (
                    <>
                        Connect Accounting uses multi-column general journal tables and trial balances, while ALEKS Chemistry and Math use HTML5 canvas molecules and coordinate planes. Pressing <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> crops the entire table or diagram and returns line-by-line journal debits/credits or exact symbolic ALEKS answers.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
            {
                title: '3. Preserves Canvas/Blackboard LTI 1.3 Focus State',
                desc: (
                    <>
                        Most universities embed McGraw Hill Connect and ALEKS inside Canvas or Blackboard via LTI 1.3. Switching tabs to search answers triggers <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> in both the parent LMS and the EZTO player. ExamGhost keeps your cursor and focus inside the active browser window 100% of the time.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
        ],
    },
    questionTypesSection: {
        eyebrow: 'Connect, SmartBook 2.0 & ALEKS Question Formats',
        heading: 'Every McGraw Hill & ALEKS Widget Supported — From Recharge Loops to Pie Mastery',
        lead: (
            <>
                Competitor extensions like <em>BetterBook</em> or GitHub <em>Auto-McGraw</em> scripts break whenever McGraw Hill updates its Angular DOM or when an instructor assigns an ALEKS Knowledge Check. ExamGhost combines native <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">all_frames</code> EZTO parsing with <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> Vision OCR across all 6 McGraw Hill formats:
            </>
        ),
        items: [
            {
                name: 'SmartBook 2.0 Adaptive Recharge & Confidence',
                codeTag: 'learning.mheducation.com',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.7%',
                description: (
                    <>
                        Solves SmartBook 2.0 Multiple-Choice, Multi-Select, Fill-in-the-Blank, and Ordering cards inline so you can click <strong>High Confidence</strong> on every item and avoid repetitive 15-minute Recharge penalty loops.
                    </>
                ),
            },
            {
                name: 'ALEKS Initial & Progress Knowledge Checks',
                codeTag: '/alekscgi/x/Isl.exe',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: '99.5%',
                description: (
                    <>
                        In ALEKS Knowledge Checks, a single careless rounding error drops topics out of your ALEKS Pie. ExamGhost routes ALEKS problems through <strong>DeepSeek-R1</strong> symbolic verification to preserve your topic mastery streak.
                    </>
                ),
            },
            {
                name: 'ALEKS Chemistry Molecular Drawing & Lewis Palette',
                codeTag: 'ALEKS ChemDraw Canvas',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.1%',
                description: (
                    <>
                        Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> over any ALEKS Chemistry reaction table, stoichiometry ICE chart, or Lewis electron-dot canvas to get exact lone-pair counts, formal charges, and balanced coefficients.
                    </>
                ),
            },
            {
                name: 'Connect Accounting General Journal & Ledger Grids',
                codeTag: 'EZTO Worksheet Grid',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.3%',
                description: (
                    <>
                        Captures entire multi-tab Connect Accounting problems (General Journal, T-Accounts, Trial Balance, Income Statement) and returns exact account dropdown names and dollar debit/credit entries that balance to the cent.
                    </>
                ),
            },
            {
                name: 'ALEKS Custom Coordinate Graphing (Lines, Conics, Trig)',
                codeTag: 'HTML5 Graph Applet',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.4%',
                description: (
                    <>
                        Outputs the exact vertex, asymptote equations, x/y-intercept coordinates, and plot point pairs required by ALEKS&apos;s interactive graphing tool so you can plot the curve in seconds.
                    </>
                ),
            },
            {
                name: 'Connect Anatomy & Physiology APR / Histology Hotspots',
                codeTag: 'EZTO Media Hotspot',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '98.9%',
                description: (
                    <>
                        Identifies cadaver dissection pins, histology slides, and physiological flowcharts inside McGraw Hill Anatomy &amp; Physiology Revealed (APR) and lab quizzes without leaving the EZTO iframe.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: 'EZTO & ALEKS Telemetry Forensics',
        heading: 'What Instructors See in McGraw Hill Connect & ALEKS Activity Reports',
        lead: (
            <>
                When McGraw Hill Connect or ALEKS is paired with your university&apos;s Canvas or Blackboard portal via LTI 1.3, telemetry exists at two levels: the publisher&apos;s internal attempt log and the parent LMS session wrapper. Here is what instructors can and cannot see:
            </>
        ),
        citationNote: 'Audited on Connect EZTO & ALEKS 2026',
        logTableTitle: 'mhe_ezto_aleks_telemetry_audit — Instructor Report Breakdown',
        events: [
            {
                eventCode: 'EZTO Question Time-on-Task',
                whenTriggered: 'Navigating between Question 1, Question 2, etc. inside ezto.mheducation.com',
                professorView: 'Shows total minutes spent on the assignment and per-question submission timestamps',
                examghostStatus: 'Natural 1-by-1 Human Pacing',
                isSafe: true,
            },
            {
                eventCode: 'SmartBook 2.0 Recharge Analytics',
                whenTriggered: 'Answering adaptive concept checks with High/Medium/Low confidence',
                professorView: 'Shows % of concepts completed, time spent reading vs answering, and Metacognitive accuracy',
                examghostStatus: 'High Metacognitive Accuracy',
                isSafe: true,
            },
            {
                eventCode: 'ALEKS Time & Topic Report',
                whenTriggered: 'Submitting answers in Learning Mode or Knowledge Checks (/alekscgi/)',
                professorView: 'Displays chronological list of attempted problems, time per problem (e.g. 1m 40s), and Added to Pie status',
                examghostStatus: 'Organic Per-Problem Duration',
                isSafe: true,
            },
            {
                eventCode: 'Parent LTI 1.3 Focus / Blur Events',
                whenTriggered: 'Switching browser tabs or clicking outside the browser window during a Connect quiz',
                professorView: 'Logs page_blurred in Canvas/Blackboard if launched inside an embedded LMS frame',
                examghostStatus: '0 Blur Events (In-Tab Execution)',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why Automated SmartBook Bot Scripts Trigger Instructor Flags',
        whyNoSolveAllBody: (
            <>
                Open-source Tampermonkey scripts and bot extensions that auto-click through 45 SmartBook 2.0 concepts in 90 seconds produce a <strong>0-minute Reading Time / 2-second Question Time</strong> anomaly in the instructor&apos;s Connect Metacognitive Report. Similarly, in ALEKS, solving a 3-step stoichiometry problem in 4 seconds flags the student&apos;s <strong>Time &amp; Topic</strong> log. ExamGhost never automates bulk submissions: you double-click one question at a time, read the verified solution in place, and submit at a realistic pace.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Connect & ALEKS Workflow',
        heading: 'How to Solve McGraw Hill Connect, SmartBook & ALEKS Questions Inline',
        lead: (
            <>
                Use this 4-step workflow to complete SmartBook 2.0 reading modules, Connect homework/exams, and ALEKS Knowledge Checks inside your active tab:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Open McGraw Hill Connect, SmartBook 2.0, or ALEKS via Your LMS',
                shortcutBadge: 'LTI 1.3 Compatible',
                description: (
                    <>
                        Launch your assignment from Canvas, Blackboard, D2L, or directly at <code className="font-mono text-xs">connect.mheducation.com</code> / <code className="font-mono text-xs">aleks.com</code>. ExamGhost automatically attaches to nested <code className="font-mono text-xs">ezto.mheducation.com</code> iframes without requiring any page reload.
                    </>
                ),
                plainTextForSchema:
                    'Launch your assignment from Canvas, Blackboard, D2L, or directly at connect.mheducation.com or aleks.com. ExamGhost automatically attaches to nested ezto.mheducation.com iframes.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click Any SmartBook or Connect Question Prompt',
                shortcutBadge: 'Double-Click Prompt',
                description: (
                    <>
                        On any text-based Multiple-Choice, True/False, or Multi-Select question, simply <strong>double-click</strong> the question stem. In Stealth or Invisible mode, ExamGhost subtly marks the verified choice so you can click <strong>High Confidence</strong> in SmartBook 2.0 immediately.
                    </>
                ),
                plainTextForSchema:
                    'Double-click any SmartBook 2.0 or Connect question prompt to evaluate the question and highlight the verified option in place.',
            },
            {
                stepNumber: '3',
                title: 'Press Alt+S to Crop ALEKS Canvases & Accounting Spreadsheets',
                shortcutBadge: 'Alt + S (Vision OCR)',
                description: (
                    <>
                        When solving an ALEKS Chemistry/Math problem or a multi-column Connect Accounting journal entry, press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> and drag a box around the problem and table. ExamGhost returns exact symbolic expressions, coordinate pairs, or balanced debit/credit rows.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S and drag a crop box around any ALEKS math/chemistry canvas or Connect Accounting journal table to receive exact symbolic expressions or balanced debit/credit rows.',
            },
            {
                stepNumber: '4',
                title: 'Enter Your Solution One Question at a Time',
                shortcutBadge: 'Natural Topic Pacing',
                description: (
                    <>
                        Input the verified answer using ALEKS&apos;s math palette or Connect&apos;s dropdowns at normal human speed. Your ALEKS <strong>Time &amp; Topic Report</strong> and Connect attempt logs record organic per-question durations with zero tab-switch flags.
                    </>
                ),
                plainTextForSchema:
                    'Enter the verified answer using the ALEKS palette or Connect dropdowns at normal human speed so your Time & Topic Report records organic durations with zero tab-switch flags.',
            },
        ],
    },
    courseModulesSection: {
        eyebrow: 'Supported McGraw Hill & ALEKS Textbooks',
        heading: 'Top University Connect, SmartBook & ALEKS Courses Covered',
        lead: (
            <>
                ExamGhost is engineered for the highest-enrollment McGraw Hill Higher Education textbook editions and ALEKS STEM course products:
            </>
        ),
        modules: [
            {
                department: 'General & Organic Chemistry (ALEKS & Connect)',
                courseCodes: 'CHEM-101 / CHEM-102 / CHEM-241',
                textbooksOrModules: 'ALEKS General Chemistry, Silberberg Chemistry, Janice Smith Organic Chemistry',
                keyChallengeSolved:
                    'Solves ALEKS significant-figure stoichiometry, thermodynamic enthalpy tables, and Lewis structure lone-pair/formal-charge canvases with 99.5% symbolic precision.',
            },
            {
                department: 'Financial & Managerial Accounting (Connect)',
                courseCodes: 'ACCT-201 / ACCT-202 / BUS-310',
                textbooksOrModules: 'Wild Financial Accounting, Spiceland Intermediate Accounting, Garrison Managerial Accounting',
                keyChallengeSolved:
                    'Uses Alt+S Vision OCR to parse wide Connect General Journal worksheets, T-accounts, bank reconciliations, and statement of cash flows tables without losing column alignment.',
            },
            {
                department: 'Precalculus, College Algebra & Statistics (ALEKS)',
                courseCodes: 'MATH-115 / MATH-140 / STAT-200',
                textbooksOrModules: 'ALEKS PPL Placement, ALEKS Precalculus, Navidi / Lind Business Statistics',
                keyChallengeSolved:
                    'Outputs exact unrounded intermediate calculations and final rounded confidence intervals, p-values, and graphing coordinates for ALEKS Knowledge Checks.',
            },
            {
                department: 'Anatomy, Physiology & Microbiology (SmartBook 2.0)',
                courseCodes: 'BIOL-211 / ANAT-101 / MICR-205',
                textbooksOrModules: 'Saladin Anatomy & Physiology, Seeley’s A&P, Cowan Microbiology SmartBook 2.0',
                keyChallengeSolved:
                    'Eliminates 90-question SmartBook 2.0 Recharge loops and identifies APR cadaver/histology hotspot pins via instant Alt+S Vision OCR.',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Connect & ALEKS Technical Comparison',
        heading: 'ExamGhost vs. Tab-Switching & Generic Extensions on McGraw Hill',
        windowTitle: 'mhe_connect_aleks_benchmark.csv — Verified Audit',
        windowBadge: 'EZTO • SmartBook 2.0 • ALEKS',
        rows: [
            {
                capability: (
                    <>
                        Works inside nested <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">ezto.mheducation.com</code> assessment iframes
                    </>
                ),
                examghost: 'Yes (Manifest V3 all_frames)',
                chatgpt: 'Requires Tab Switch & Copy',
                sidebar: 'Fails on Cross-Origin EZTO Frame',
            },
            {
                capability: 'Solves Connect Accounting General Journal & Trial Balance tables',
                examghost: 'Yes (Alt+S Full Ledger OCR)',
                chatgpt: 'Loses Table Column Alignment',
                sidebar: 'Cannot Parse Dropdown Grids',
            },
            {
                capability: (
                    <>
                        Reads ALEKS <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">&lt;canvas&gt;</code> coordinate graphs &amp; ChemDraw structures
                    </>
                ),
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Manual Screenshot Upload',
                sidebar: 'Blind to HTML5 Canvas Nodes',
            },
            {
                capability: 'SmartBook 2.0 Multiple-Choice & Multiple-Select support',
                examghost: 'Double-Click One-by-One',
                chatgpt: 'Slow Manual Copy/Paste',
                sidebar: 'Breaks Adaptive Angular Router',
            },
            {
                capability: 'Parent LMS (Canvas / Blackboard) LTI focus retention',
                examghost: '100% Maintained (0 Blur Events)',
                chatgpt: 'Logs Every Tab Switch',
                sidebar: 'Injects Detectable Root Divs',
            },
        ],
    },
    faqSubtitle:
        'Technical answers covering McGraw Hill Connect EZTO logs, SmartBook 2.0 adaptive concepts, ALEKS Knowledge Checks, and accounting tables.',
    faqs: [
        {
            category: 'stealth',
            q: 'Does McGraw Hill Connect or ALEKS detect tab switching?',
            a: (
                <>
                    When McGraw Hill Connect or ALEKS is launched inside a standard browser tab (without Proctorio or LockDown Browser enabled), the EZTO player (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">ezto.mheducation.com</code>) and any parent LMS wrapper (like Canvas or Blackboard) can listen for <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">visibilitychange</code> events when you leave the tab. ExamGhost eliminates tab switching completely by solving questions in place via double-click or <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>.
                </>
            ),
            plainTextAnswer:
                'When McGraw Hill Connect or ALEKS is launched inside a standard browser tab, the EZTO player (ezto.mheducation.com) and any parent LMS wrapper (like Canvas or Blackboard) can listen for window.blur and visibilitychange events when you leave the tab. ExamGhost eliminates tab switching completely by solving questions in place via double-click or Alt+S.',
        },
        {
            category: 'stealth',
            q: 'CanMcGraw Hill Connect detect the ExamGhost Chrome extension?',
            a: (
                <>
                    Web pages running inside Chrome cannot enumerate installed extensions when those extensions run in an isolated Manifest V3 execution context and avoid exposing public <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">web_accessible_resources</code>. ExamGhost does not inject sidebars or custom toolbars into the Connect DOM.
                </>
            ),
            plainTextAnswer:
                'Web pages running inside Chrome cannot enumerate installed extensions when those extensions run in an isolated Manifest V3 execution context and avoid exposing public web_accessible_resources. ExamGhost does not inject sidebars or custom toolbars into the Connect DOM.',
        },
        {
            category: 'ocr',
            q: 'How does ExamGhost handle Connect Accounting tables and worksheets?',
            a: (
                <>
                    McGraw Hill Connect Accounting problems often include multi-line General Journal entries, Income Statements, or Bank Reconciliations where copying text scrambles the Debit and Credit columns. Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> in <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> and drag across the problem prompt and table—ExamGhost returns every account title and exact dollar debit/credit line by line.
                </>
            ),
            plainTextAnswer:
                'McGraw Hill Connect Accounting problems often include multi-line General Journal entries, Income Statements, or Bank Reconciliations where copying text scrambles the Debit and Credit columns. Press Alt+S in Explain Mode (Alt+3) and drag across the problem prompt and table—ExamGhost returns every account title and exact dollar debit/credit line by line.',
        },
        {
            category: 'ocr',
            q: 'Does ExamGhost work on ALEKS Knowledge Checks and Chemistry palettes?',
            a: (
                <>
                    Yes. ALEKS questions frequently mix custom HTML math fonts with <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">&lt;canvas&gt;</code> graphs, Lewis structure drawing pads, and stoichiometry tables. You can double-click text prompts directly or use <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to capture any ALEKS figure or chemical reaction scheme for step-by-step calculations.
                </>
            ),
            plainTextAnswer:
                'Yes. ALEKS questions frequently mix custom HTML math fonts with HTML5 canvas graphs, Lewis structure drawing pads, and stoichiometry tables. You can double-click text prompts directly or use Alt+S to capture any ALEKS figure or chemical reaction scheme for step-by-step calculations.',
        },
        {
            category: 'workflow',
            q: 'How do I use ExamGhost on McGraw Hill SmartBook 2.0 assignments?',
            a: (
                <>
                    In SmartBook 2.0 (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">learning.mheducation.com</code>), switch to <strong className="text-[#1a1a1a]">Stealth Mode (Alt+2)</strong> for single-answer questions or <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> for &ldquo;Select all that apply&rdquo; and fill-in-the-blank prompts. Double-click the question stem, review the verified answer(s), and click <strong className="text-[#1a1a1a]">High</strong> confidence to advance your concept mastery bar without penalty.
                </>
            ),
            plainTextAnswer:
                'In SmartBook 2.0 (learning.mheducation.com), switch to Stealth Mode (Alt+2) for single-answer questions or Explain Mode (Alt+3) for Select all that apply and fill-in-the-blank prompts. Double-click the question stem, review the verified answers, and click High confidence to advance your concept mastery bar without penalty.',
        },
        {
            category: 'workflow',
            q: 'Why does ExamGhost solve questions one by one instead of auto-completing SmartBook?',
            a: (
                <>
                    McGraw Hill Connect and ALEKS record per-item response latency (time spent on each question step). Automated bots that submit answers in under 2 seconds trigger rapid-guessing flags in instructor analytics. Solving one question at a time via double-click keeps your completion timestamps completely natural.
                </>
            ),
            plainTextAnswer:
                'McGraw Hill Connect and ALEKS record per-item response latency (time spent on each question step). Automated bots that submit answers in under 2 seconds trigger rapid-guessing flags in instructor analytics. Solving one question at a time via double-click keeps your completion timestamps completely natural.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work if my Connect exam requires McGraw Hill Proctorio or LockDown Browser?',
            a: (
                <>
                    ExamGhost is built for standard Chrome, Brave, and Edge browser sessions where Proctorio or Respondus LockDown Browser is <strong className="text-[#1a1a1a]">not</strong> active. It works across all unproctored Connect homework, quizzes, SmartBook 2.0 modules, and browser-based ALEKS Knowledge Checks.
                </>
            ),
            plainTextAnswer:
                'ExamGhost is built for standard Chrome, Brave, and Edge browser sessions where Proctorio or Respondus LockDown Browser is not active. It works across all unproctored Connect homework, quizzes, SmartBook 2.0 modules, and browser-based ALEKS Knowledge Checks.',
        },
        {
            category: 'workflow',
            q: 'Can I test the McGraw Hill Connect & ALEKS solver right now for free?',
            a: (
                <>
                    Yes! Use the interactive <strong className="text-[#1a1a1a]">Connect EZTO &amp; ALEKS Simulator</strong> at the top of this page to test double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> reaction profile OCR, and all three stealth modes before installing the extension.
                </>
            ),
            plainTextAnswer:
                'Yes! Use the interactive Connect EZTO & ALEKS Simulator at the top of this page to test double-click solving, Alt+S reaction profile OCR, and all three stealth modes before installing the extension.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/mcgraw-hill-connect-aleks-solver/#webpage',
                url: 'https://examghost.com/mcgraw-hill-connect-aleks-solver',
                name: 'McGraw Hill Connect & ALEKS Solver | SmartBook 2.0 & EZTO AI | ExamGhost',
                description:
                    'Interactive McGraw Hill Connect EZTO, SmartBook 2.0, and ALEKS quiz solver simulator and technical guide.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#mcgraw-hill-connect-aleks-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost McGraw Hill Connect & ALEKS Solver',
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
                        name: 'McGraw Hill Connect & ALEKS Solver',
                        item: 'https://examghost.com/mcgraw-hill-connect-aleks-solver',
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

export default function McGrawHillConnectAleksSolverPage() {
    const config = mcgrawHillConfig;
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
                    <McgrawHillAleksQuizMotionDemo />

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
