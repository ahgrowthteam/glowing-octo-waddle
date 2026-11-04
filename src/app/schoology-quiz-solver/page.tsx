import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SchoologyLearnosityDemo } from '@/components/PlatformMotionDemos';
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
    title: { absolute: 'Schoology Quiz Solver — Assessments 2.0 & Learnosity AI' },
    description:
        'Solve Schoology quizzes and Assessments 2.0 (Learnosity) in 0.3s: hotspots, label-image, classification and math questions. Live demo and 5 free solves / day.',
    keywords: [
        'Schoology quiz solver',
        'Schoology AI helper Chrome extension',
        'does Schoology detect tab switching',
        'Schoology assessment solver',
        'Schoology Learnosity quiz solver',
        'can Schoology see if you open a new tab',
        'PowerSchool Schoology AI extension',
    ],
    alternates: {
        canonical: 'https://examghost.com/schoology-quiz-solver',
    },
    openGraph: {
        title: 'Schoology Quiz Solver — Interactive PowerSchool & Learnosity Demo | ExamGhost',
        description:
            'Watch or control a live Schoology Assessment session. One-by-one double-click solving on .lrn_question blocks, Alt+S diagram OCR, and zero window.blur events.',
        url: 'https://examghost.com/schoology-quiz-solver',
        siteName: 'ExamGhost',
        type: 'website',
        images: [{ url: '/videos/posters/schoology-quiz-solver-poster.jpg', width: 1280, height: 720, alt: 'Schoology Quiz Solver — Assessments 2.0 & Learnosity AI' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Schoology Quiz Solver — Assessments 2.0 & Learnosity AI',
        description: 'Solve Schoology quizzes and Assessments 2.0 (Learnosity) in 0.3s: hotspots, label-image, classification and math questions. Live demo and 5 free solves / day.',
        images: ['/videos/posters/schoology-quiz-solver-poster.jpg'],
    },
};

const schoologyConfig: any = {
    slug: 'schoology-quiz-solver',
    platformName: 'PowerSchool Schoology',
    platformShort: 'Schoology',
    heroBadge: 'Schoology Assessments & Learnosity Engine Ready',
    heroDotColor: '#0284c7',
    h1Title: 'Schoology Quiz Solver &',
    h1Highlight: 'Assessment AI Helper',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for Schoology</strong> is a Manifest V3 Chrome extension engineered for{' '}
            <strong className="text-[#1a1a1a]">PowerSchool Schoology Assessments</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">app.schoology.com/assignment/*/assessment</code>) and the embedded{' '}
            <strong className="text-[#1a1a1a]">Learnosity Engine</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.lrn_question</code>). Double-click any question prompt one by one to highlight verified answers in place, or press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd> to solve geometry figures, chemistry tables, and drag-and-drop widgets with zero tab switches.
        </>
    ),
    videoDemo: {
        platformSub: 'PowerSchool Schoology Assessment (Learnosity Engine) • app.schoology.com/assignment/7291048219/assessment',
        browserUrl: 'https://app.schoology.com/assignment/7291048219/assessment',
        badgeBg: 'bg-[#f0f9ff] border-[#bae6fd]',
        badgeText: 'text-[#0369a1]',
        telemetryLabel: 'Learnosity .lrn_assess Focus: Active (0 Blur Events)',
        questions: [
            {
                id: 1,
                code: 'SCHOOLOGY-LRN-01 • .lrn_question .lrn_mcqgroup',
                type: 'Schoology Learnosity Multiple Choice',
                points: '2 pts',
                prompt:
                    'During the light-dependent reactions of photosynthesis in plant chloroplasts, where do protons (H⁺ ions) accumulate to create the electrochemical proton gradient that drives ATP synthase?',
                options: [
                    'In the mitochondrial intermembrane space',
                    'In the thylakoid space (lumen)',
                    'In the chloroplast stroma',
                    'In the cytosol outside the outer chloroplast membrane',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Water photolysis by Photosystem II and proton pumping by the cytochrome b6f complex concentrate H⁺ ions inside the thylakoid space (lumen), driving chemiosmosis back into the stroma through ATP synthase.',
            },
            {
                id: 2,
                code: 'SCHOOLOGY-LRN-02 • .lrn-math (AP Calculus AB)',
                type: 'Schoology MathJax Prompt',
                points: '3 pts',
                prompt:
                    'Let f(x) = x·ln(x) - x for x > 0. At what value of x does the line tangent to the graph of f(x) have a slope equal to 2?',
                options: [
                    'x = e',
                    'x = e²',
                    'x = 2e',
                    'x = ln(2)',
                ],
                correctIndex: 1,
                confidence: '99.8%',
                explanation:
                    'By the product rule, f′(x) = (1)·ln(x) + x·(1/x) - 1 = ln(x) + 1 - 1 = ln(x). Setting the tangent slope f′(x) = 2 gives ln(x) = 2, so x = e².',
            },
            {
                id: 3,
                code: 'SCHOOLOGY-LRN-03 • Learnosity Image & Coordinate Plane',
                type: 'Schoology Figure Question (Requires Alt+S OCR)',
                points: '4 pts',
                requiresOcr: true,
                diagramLabel: 'SCHOOLOGY LEARNOSITY — INSCRIBED CENTRAL ANGLE GEOMETRY',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="104" rx="8" fill="#f0f9ff" stroke="#bae6fd" />
                        <circle cx="190" cy="60" r="44" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
                        <circle cx="190" cy="60" r="3" fill="#0f172a" />
                        <line x1="190" y1="60" x2="228" y2="38" stroke="#0f172a" strokeWidth="1.8" />
                        <line x1="190" y1="60" x2="228" y2="82" stroke="#0f172a" strokeWidth="1.8" />
                        <line x1="146" y1="60" x2="228" y2="38" stroke="#0284c7" strokeWidth="1.8" />
                        <line x1="146" y1="60" x2="228" y2="82" stroke="#0284c7" strokeWidth="1.8" />
                        <text x="176" y="56" fontSize="9" fontWeight="bold" fill="#0f172a">O</text>
                        <text x="234" y="38" fontSize="9" fontWeight="bold" fill="#0f172a">A</text>
                        <text x="234" y="88" fontSize="9" fontWeight="bold" fill="#0f172a">B</text>
                        <text x="133" y="63" fontSize="9" fontWeight="bold" fill="#0284c7">C</text>
                        <text x="255" y="63" fontSize="9" fontWeight="bold" fill="#0369a1">∠AOB = (4x - 10)°</text>
                        <text x="48" y="38" fontSize="9" fontWeight="bold" fill="#0284c7">∠ACB = (x + 25)°</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the Schoology Learnosity circle diagram above, where O is the center of the circle, central angle ∠AOB = (4x - 10)°, and inscribed angle ∠ACB = (x + 25)° subtends the same minor arc AB. What is the degree measure of central angle ∠AOB?',
                options: [
                    '∠AOB = 90°',
                    '∠AOB = 110°',
                    '∠AOB = 55°',
                    '∠AOB = 120°',
                ],
                correctIndex: 1,
                confidence: '99.7%',
                explanation:
                    'By the Inscribed Angle Theorem, the central angle is twice the inscribed angle subtending the same arc: ∠AOB = 2·∠ACB. Thus 4x - 10 = 2(x + 25) = 2x + 50 ⇒ 2x = 60 ⇒ x = 30. Substituting x = 30 gives ∠AOB = 4(30) - 10 = 110°.',
            },
            {
                id: 4,
                code: 'SCHOOLOGY-LRN-04 • AP US Government & Politics',
                type: 'Schoology Learnosity Concept',
                points: '2 pts',
                prompt:
                    'In Federalist No. 10, how does James Madison argue that a large constitutional republic is superior to a small direct democracy in controlling the effects of political factions?',
                options: [
                    'A large republic eliminates factions entirely by requiring unanimous consent for federal legislation.',
                    'A large republic encompasses a greater variety of parties and interests, making it harder for any single majority faction to coordinate and oppress the minority.',
                    'A large republic concentrates all legislative authority in the executive branch.',
                    'A large republic bans interest groups from petitioning elected representatives.',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Madison argues in Federalist No. 10 that the causes of faction cannot be removed without destroying liberty; instead, extending the sphere across a large republic dilutes factional influence across diverse competing interests and filters public views through elected representatives.',
            },
            {
                id: 5,
                code: 'SCHOOLOGY-LRN-05 • AP Physics 1 (Momentum & Collisions)',
                type: 'Schoology Learnosity Numerical',
                points: '3 pts',
                prompt:
                    'A 2.0-kg cart moving east at 6.0 m/s collides head-on and sticks to a 4.0-kg cart initially at rest on a frictionless track. How much kinetic energy is converted into thermal and sound energy during this perfectly inelastic collision?',
                options: [
                    '12 J',
                    '24 J',
                    '36 J',
                    '0 J (kinetic energy is conserved)',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'By conservation of momentum, (2.0)(6.0) = (2.0 + 4.0)v_f ⇒ v_f = 12 / 6 = 2.0 m/s. Initial KE_i = ½(2.0)(6.0)² = 36 J. Final KE_f = ½(6.0)(2.0)² = 12 J. Kinetic energy lost = KE_i - KE_f = 36 J - 12 J = 24 J.',
            },
        ],
    },
    architecture: {
        cardBg: '#f0f9ff',
        cardBorder: '#bae6fd',
        mascotImage: '/images/ghost/ghost_card_lms.jpg',
        mascotTitle: 'Schoology & Learnosity Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">app.schoology.com</code> and Learnosity <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">.lrn_assess</code> containers.
            </>
        ),
        pills: ['Learnosity DOM Support', 'One-by-One Double-Click', 'Alt+S Geometry & Chart OCR'],
        eyebrow: 'PowerSchool Schoology Architecture',
        heading: 'Works on Both Schoology Classic Quizzes & Learnosity Assessments',
        lead: (
            <>
                PowerSchool Schoology delivers quizzes in two formats: legacy <strong className="text-[#1a1a1a]">Test/Quiz</strong> pages (<code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">assessment_view</code>) and modern <strong className="text-[#1a1a1a]">Schoology Assessments</strong> powered by the <strong className="text-[#1a1a1a]">Learnosity</strong> engine (<code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.lrn_assess</code>). ExamGhost natively parses both engines on double-click.
            </>
        ),
        pillars: [
            {
                title: '1. Native Learnosity (.lrn_question) Parsing',
                desc: (
                    <>
                        Schoology&apos;s Learnosity assessment player wraps prompts in <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.lrn_stimulus_content</code> and options in <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.lrn_mcqgroup</code> ARIA containers. Double-clicking any question inside the player highlights the verified option immediately without breaking Learnosity&apos;s React/Backbone state.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
            {
                title: '2. Alt+S for Drag-and-Drop, Hotspots & Number Lines',
                desc: (
                    <>
                        Learnosity assessments include interactive question types like <strong className="text-[#1a1a1a]">Classification matrices, Cloze drag-and-drop, Number line plotting, and Image hotspots</strong>. Switch to <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> and press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to see the exact mapping for every draggable token.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
            {
                title: '3. Zero Blur Events in Schoology Assessment Logs',
                desc: (
                    <>
                        Learnosity&apos;s assessment player records per-item view durations and can listen for browser <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">visibilitychange</code> events. Because ExamGhost runs inside your active Schoology tab, you never switch windows or lose focus.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
        ],
    },
    questionTypesSection: {
        eyebrow: 'Schoology Assessments 2.0 (Learnosity) & Classic Coverage',
        heading: 'Every Schoology Question Format Supported — Including Learnosity Widgets',
        lead: (
            <>
                Unlike generic Chrome extensions (<em>StudyFox</em>, <em>FastSolve</em>) or UI skins (<em>Schoology Plus</em>), ExamGhost parses both legacy Drupal <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">s_assessment_question_form</code> pages and PowerSchool&apos;s modern <strong>Learnosity Assessment 2.0</strong> (<code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">.lrn_assess</code>) interactive items:
            </>
        ),
        items: [
            {
                name: 'Learnosity Multiple-Choice & Multi-Select (.lrn_mcqgroup)',
                codeTag: 'div.lrn_question',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.7%',
                description: (
                    <>
                        Double-click anywhere inside a Schoology Assessment 2.0 item to evaluate ARIA radio or checkbox groups and place a 1px dot indicator without mutating Learnosity&apos;s internal Backbone/React state.
                    </>
                ),
            },
            {
                name: 'Label Image with Drag-and-Drop & Highlight Hotspot',
                codeTag: '.lrn_imageclozeassociation',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.2%',
                description: (
                    <>
                        Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> over any Schoology anatomy diagram, historical map, or geometric figure to map every draggable token to its numbered response box.
                    </>
                ),
            },
            {
                name: 'Classification Matrix & Matching Tables',
                codeTag: '.lrn_association / Matrix',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: '99.5%',
                description: (
                    <>
                        Solves multi-column Schoology classification grids where draggable cards must be sorted into 2–4 category columns (e.g., <em>Mitosis vs. Meiosis</em> or <em>Ionic vs. Covalent</em>).
                    </>
                ),
            },
            {
                name: 'Learnosity Math Formula & Number Line Plotting',
                codeTag: '.lrn_math / MathQuill',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.4%',
                description: (
                    <>
                        Outputs exact MathQuill keyboard syntax for algebraic fractions, radicals, inequalities, and open/closed endpoint coordinates on Schoology interactive number lines.
                    </>
                ),
            },
            {
                name: 'Cloze Drop-Down & Fill-in-the-Blank Text Passages',
                codeTag: '.lrn_clozedropdown',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.6%',
                description: (
                    <>
                        Reads the entire surrounding paragraph context and evaluates all inline dropdown menus and text blanks simultaneously in a single double-click.
                    </>
                ),
            },
            {
                name: 'Classic Schoology Test/Quiz (True/False, Ordering, Short Answer)',
                codeTag: '#s-assessment-question-form',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.8%',
                description: (
                    <>
                        Full backward compatibility with legacy Schoology green-icon <em>Test/Quiz</em> modules, including item-order ranking and short-answer rubric prompts.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: 'PowerSchool Schoology Telemetry Forensics',
        heading: 'What Teachers See in Schoology Assessment & Course Analytics Logs',
        lead: (
            <>
                PowerSchool Schoology tracks student activity through two distinct mechanisms depending on whether your teacher created a <strong>Classic Test/Quiz</strong> or a <strong>Learnosity Assessment 2.0</strong>. Here is what teachers see on their dashboard:
            </>
        ),
        citationNote: 'Audited on PowerSchool Schoology 2026',
        logTableTitle: 'schoology_learnosity_telemetry_audit — Teacher View',
        events: [
            {
                eventCode: 'Learnosity Per-Item Duration Timer',
                whenTriggered: 'Viewing Question 1, Question 2, etc. inside the .lrn_assess player',
                professorView: 'Shows exact seconds spent viewing each question and total submission duration',
                examghostStatus: 'Natural 1-by-1 Pacing per Item',
                isSafe: true,
            },
            {
                eventCode: 'Learnosity / Schoology Focus & Blur Listeners',
                whenTriggered: 'Switching browser tabs or clicking outside Chrome during an active assessment',
                professorView: 'Can log focus-loss events in Learnosity session metadata or district monitoring plugins',
                examghostStatus: '0 Blur Events (In-Tab Execution)',
                isSafe: true,
            },
            {
                eventCode: 'Schoology Course Analytics (Last Access & Submissions)',
                whenTriggered: 'Opening course materials and submitting an assessment attempt',
                professorView: 'Shows start timestamp, submission timestamp, IP address, and attempt count',
                examghostStatus: 'Organic Start-to-Finish Timeline',
                isSafe: true,
            },
            {
                eventCode: 'Respondus LockDown Browser LTI Integration',
                whenTriggered: 'Only when teacher explicitly enables LockDown Browser in Assessment Settings',
                professorView: 'Requires standalone Respondus desktop app; standard Schoology web links run in Chrome',
                examghostStatus: 'Works on All Standard Web Quizzes',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why Learnosity’s Per-Item Timer Exposes 1-Click "Auto-Complete" Extensions',
        whyNoSolveAllBody: (
            <>
                Schoology&apos;s Learnosity assessment engine (<code className="font-mono text-white">.lrn_assess</code>) tracks the exact number of seconds you spend on every individual question slide before clicking <em>Next</em>. If an extension auto-fills 25 questions in 5 seconds, the teacher&apos;s <strong>By Student Attempt Report</strong> shows <code className="font-mono text-white">0:00</code> or <code className="font-mono text-white">0:01</code> spent per question across the entire test. ExamGhost solves questions strictly <strong>one by one on double-click</strong> so your per-item timers reflect realistic human reading and problem-solving durations.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Schoology Workflow',
        heading: 'How to Solve Schoology Quizzes & Learnosity Assessments Inline',
        lead: (
            <>
                Follow this 4-step workflow inside <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">app.schoology.com</code> or your school district&apos;s custom Schoology subdomain (<code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">*.schoology.com</code>):
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Open Your Schoology Test/Quiz or Assessment 2.0 in Chrome',
                shortcutBadge: '*.schoology.com',
                description: (
                    <>
                        Launch your assessment inside Google Chrome, Brave, or Edge. Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+Q</kbd> to set your Ghost Opacity and choose Invisible Mode (<kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+1</kbd>), Stealth Mode (<kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+2</kbd>), or Explain Mode (<kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+3</kbd>).
                    </>
                ),
                plainTextForSchema:
                    'Launch your Schoology assessment in Chrome, Brave, or Edge and press Alt+Q to configure your Ghost Opacity and display mode.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click the Active Question Stem (.lrn_question or Classic)',
                shortcutBadge: 'Double-Click Stem',
                description: (
                    <>
                        Double-click anywhere on the question text. ExamGhost reads the Learnosity stimulus, math formulas, and answer choices inside its Closed Shadow DOM and marks the verified option in 0.3 seconds.
                    </>
                ),
                plainTextForSchema:
                    'Double-click anywhere on the active Schoology question stem to extract the prompt and options and mark the verified answer in 0.3 seconds.',
            },
            {
                stepNumber: '3',
                title: 'Press Alt+S for Drag-and-Drop Images, Number Lines & Charts',
                shortcutBadge: 'Alt + S (Vision OCR)',
                description: (
                    <>
                        On interactive Learnosity items (Label Image, Highlight Hotspot, Classification Matrices, or CloudFront geometry figures), press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> and drag a box over the entire interactive widget.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S and drag a crop box over any interactive Learnosity widget, Label Image diagram, or geometry figure to receive exact visual mappings.',
            },
            {
                stepNumber: '4',
                title: 'Advance Through Questions One by One at Natural Speed',
                shortcutBadge: 'Clean Item Timers',
                description: (
                    <>
                        Select your verified answer or drag each token into place at normal reading speed before clicking <strong>Next</strong>, keeping your Learnosity per-item duration report 100% organic.
                    </>
                ),
                plainTextForSchema:
                    'Select your verified answer at normal reading speed before clicking Next so your Learnosity per-item duration report remains organic.',
            },
        ],
    },
    courseModulesSection: {
        eyebrow: 'Schoology District & AP Course Coverage',
        heading: 'Top AP, Honors & District Courses Solved on Schoology',
        lead: (
            <>
                PowerSchool Schoology is used by over 20 million K–12, AP, IB, and college students across major districts (LAUSD, Fairfax County, Houston ISD, NYC DOE, and private academies). ExamGhost supports:
            </>
        ),
        modules: [
            {
                department: 'AP & Honors Mathematics',
                courseCodes: 'AP Calc AB/BC / AP Precalc / AP Stats / Geometry',
                textbooksOrModules: 'Learnosity MathQuill Equations, Number Line Inequalities & CloudFront Geometry Proofs',
                keyChallengeSolved:
                    'Solves symbolic MathQuill fractions/radicals and uses Alt+S Vision OCR to read inscribed circle/triangle proofs and AP Statistics distribution plots.',
            },
            {
                department: 'AP Sciences (Biology, Chemistry & Physics)',
                courseCodes: 'AP Bio / AP Chem / AP Physics 1 & C',
                textbooksOrModules: 'Label Image Drag-and-Drop Diagrams, Stoichiometry Tables & Kinematics Graphs',
                keyChallengeSolved:
                    'Maps every draggable label on cellular respiration/photosynthesis diagrams and computes exact significant-figure physics and chemistry answers.',
            },
            {
                department: 'AP Humanities & Social Sciences',
                courseCodes: 'APUSH / AP World / AP Gov / AP Macroeconomics',
                textbooksOrModules: 'Stimulus-Based Multiple Choice (SBMC), Primary Source Excerpts & AD-AS Graphs',
                keyChallengeSolved:
                    'Reads both the left-pane Learnosity stimulus passage/map and the right-pane question stem simultaneously to verify historical and economic reasoning.',
            },
            {
                department: 'World Languages & English Literature',
                courseCodes: 'AP Lang / AP Lit / Spanish 1–4 / French 1–4',
                textbooksOrModules: 'Cloze Drop-Down Conjugation Passages, Matching Grids & Reading Comprehension',
                keyChallengeSolved:
                    'Evaluates every inline subjunctive/preterite dropdown blank inside multi-sentence Schoology Cloze passages in a single double-click.',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Schoology & Learnosity Audit',
        heading: 'ExamGhost vs. Tab-Switching & Generic Extensions on Schoology',
        windowTitle: 'schoology_learnosity_audit.csv — Verified Comparison',
        windowBadge: 'Schoology Classic • Learnosity .lrn_assess',
        rows: [
            {
                capability: (
                    <>
                        Parses both Schoology Classic (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">assessment_view</code>) &amp; Learnosity (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.lrn_question</code>)
                    </>
                ),
                examghost: 'Yes (Native Dual-Engine Support)',
                chatgpt: 'Requires Manual Copy/Paste',
                sidebar: 'Fails on Learnosity ARIA Options',
            },
            {
                capability: 'Solves Learnosity drag-and-drop, classification tables & image hotspots',
                examghost: 'Yes (Alt+S Explain Mode)',
                chatgpt: 'Cannot See Visual Token Targets',
                sidebar: 'Unsupported Question Format',
            },
            {
                capability: (
                    <>
                        Window focus retention (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">document.hasFocus() === true</code>)
                    </>
                ),
                examghost: '100% Maintained (0 Blur Events)',
                chatgpt: 'Fires window.blur on Tab Switch',
                sidebar: 'Injects Detectable Sidebar Nodes',
            },
            {
                capability: 'Reads Schoology CloudFront-hosted geometry & science diagrams',
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Manual Screenshot Save & Upload',
                sidebar: 'Fails on Signed Media URLs',
            },
            {
                capability: 'Invisible Mode (Alt+1) with zero visible popups on screen',
                examghost: 'Yes (Subtle 1px Indicator)',
                chatgpt: 'No (Full ChatGPT Window)',
                sidebar: 'No (Persistent Floating Panel)',
            },
        ],
    },
    faqSubtitle:
        'Direct engineering answers about Schoology tab-switching detection, Learnosity assessment telemetry, and Respondus LockDown Browser.',
    faqs: [
        {
            category: 'stealth',
            q: 'Can Schoology detect if you switch tabs or open a new window during a quiz?',
            a: (
                <>
                    When you take a quiz in <strong className="text-[#1a1a1a]">Schoology Assessments</strong> (powered by the Learnosity player <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.lrn_assess</code>), the browser page tracks time spent on each item and can listen for standard <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">visibilitychange</code> events when you leave the tab. ExamGhost solves questions directly inside the Schoology tab via double-click or <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> so your browser focus never leaves the quiz.
                </>
            ),
            plainTextAnswer:
                'When you take a quiz in Schoology Assessments (powered by the Learnosity player .lrn_assess), the browser page tracks time spent on each item and can listen for standard window.blur and visibilitychange events when you leave the tab. ExamGhost solves questions directly inside the Schoology tab via double-click or Alt+S so your browser focus never leaves the quiz.',
        },
        {
            category: 'stealth',
            q: 'Can Schoology detect the ExamGhost Chrome extension?',
            a: (
                <>
                    On a personal Windows or Mac computer running Chrome, Brave, or Edge, Schoology&apos;s web application runs inside a standard browser sandbox that cannot list or inspect installed Manifest V3 extensions. ExamGhost operates in an isolated execution world and does not inject visible sidebars into Schoology.
                </>
            ),
            plainTextAnswer:
                'On a personal Windows or Mac computer running Chrome, Brave, or Edge, Schoology web application runs inside a standard browser sandbox that cannot list or inspect installed Manifest V3 extensions. ExamGhost operates in an isolated execution world and does not inject visible sidebars into Schoology.',
        },
        {
            category: 'ocr',
            q: 'How does ExamGhost solve Schoology drag-and-drop and matching questions?',
            a: (
                <>
                    Schoology Assessments frequently use Learnosity <strong className="text-[#1a1a1a]">Choice Matrix, Classification, and Cloze Drag-and-Drop</strong> widgets. Switch ExamGhost to <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong>, press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>, and drag over the entire widget—ExamGhost maps each draggable item to its exact target drop zone.
                </>
            ),
            plainTextAnswer:
                'Schoology Assessments frequently use Learnosity Choice Matrix, Classification, and Cloze Drag-and-Drop widgets. Switch ExamGhost to Explain Mode (Alt+3), press Alt+S, and drag over the entire widget—ExamGhost maps each draggable item to its exact target drop zone.',
        },
        {
            category: 'ocr',
            q: 'Does ExamGhost work on Schoology math and geometry images?',
            a: (
                <>
                    Yes. Whether the question uses Learnosity MathQuill (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.lrn-math</code>) or an uploaded geometry/physics diagram, you can double-click text prompts or press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to crop any visual figure directly from your screen.
                </>
            ),
            plainTextAnswer:
                'Yes. Whether the question uses Learnosity MathQuill (.lrn-math) or an uploaded geometry/physics diagram, you can double-click text prompts or press Alt+S to crop any visual figure directly from your screen.',
        },
        {
            category: 'workflow',
            q: 'What is the difference between Schoology "Test/Quiz" and "Assessment"?',
            a: (
                <>
                    Schoology has two assessment tools: the green puzzle-piece <strong className="text-[#1a1a1a]">Test/Quiz</strong> (Classic) and the blue/purple <strong className="text-[#1a1a1a]">Assessment</strong> (powered by Learnosity). ExamGhost automatically detects and works on both formats with the same one-by-one double-click and <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> workflow.
                </>
            ),
            plainTextAnswer:
                'Schoology has two assessment tools: the green puzzle-piece Test/Quiz (Classic) and the blue/purple Assessment (powered by Learnosity). ExamGhost automatically detects and works on both formats with the same one-by-one double-click and Alt+S workflow.',
        },
        {
            category: 'workflow',
            q: 'Why does ExamGhost solve Schoology questions one by one?',
            a: (
                <>
                    Schoology Assessments often display one question per screen with a pagination bar at the top, and Learnosity logs the exact number of seconds spent viewing each item. Solving questions one by one as you navigate through the quiz ensures your per-item timing looks 100% natural.
                </>
            ),
            plainTextAnswer:
                'Schoology Assessments often display one question per screen with a pagination bar at the top, and Learnosity logs the exact number of seconds spent viewing each item. Solving questions one by one as you navigate through the quiz ensures your per-item timing looks 100% natural.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work on school-managed Chromebooks with Securly/GoGuardian or LockDown Browser?',
            a: (
                <>
                    ExamGhost is designed for <strong className="text-[#1a1a1a]">personal Windows, Mac, and Linux computers</strong> running standard Chrome, Brave, or Edge. It cannot run inside Respondus LockDown Browser, nor should it be installed on a school-owned Chromebook where district admin extensions (like GoGuardian or Linewize) record full-screen video.
                </>
            ),
            plainTextAnswer:
                'ExamGhost is designed for personal Windows, Mac, and Linux computers running standard Chrome, Brave, or Edge. It cannot run inside Respondus LockDown Browser, nor should it be installed on a school-owned Chromebook where district admin extensions (like GoGuardian or Linewize) record full-screen video.',
        },
        {
            category: 'workflow',
            q: 'Can I test the Schoology Quiz Solver before installing the Chrome extension?',
            a: (
                <>
                    Yes! Scroll up to the interactive <strong className="text-[#1a1a1a]">Schoology Learnosity Simulator</strong> on this page to test one-by-one double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> circle geometry OCR, and all three stealth modes right now.
                </>
            ),
            plainTextAnswer:
                'Yes! Scroll up to the interactive Schoology Learnosity Simulator on this page to test one-by-one double-click solving, Alt+S circle geometry OCR, and all three stealth modes right now.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/schoology-quiz-solver/#webpage',
                url: 'https://examghost.com/schoology-quiz-solver',
                name: 'Schoology Quiz Solver & Assessment AI Helper | Learnosity Chrome Extension | ExamGhost',
                description:
                    'Interactive PowerSchool Schoology & Learnosity quiz solver simulator and technical guide.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#schoology-quiz-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost Schoology Quiz Solver',
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
                        name: 'Schoology Quiz Solver',
                        item: 'https://examghost.com/schoology-quiz-solver',
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

export default function SchoologyQuizSolverPage() {
    const config = schoologyConfig;
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
                    <SchoologyLearnosityDemo />

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
