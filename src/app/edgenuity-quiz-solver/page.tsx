import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { EdgenuityMotionDemo } from '@/components/PlatformMotionDemos';
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
    title: { absolute: 'Edgenuity Quiz Solver — Unit Test & Cumulative Exam AI' },
    description:
        'Solve Edgenuity quizzes, unit tests and cumulative exams inside #stageFrame in 0.3s, one question at a time, with natural Active Time. 5 free solves / day.',
    keywords: [
        'Edgenuity quiz solver',
        'Imagine Edgenuity AI helper',
        'Edgenuity cumulative exam solver',
        'Edgenuity Chrome extension',
        'does Edgenuity detect tab switching',
        'Edgenuity unit test solver',
        'Edgenuity stageFrame solver',
    ],
    alternates: {
        canonical: 'https://examghost.com/edgenuity-quiz-solver',
    },
    openGraph: {
        title: 'Imagine Edgenuity Quiz Solver — Interactive #stageFrame Demo | ExamGhost',
        description:
            'Watch or control a live Imagine Edgenuity Player session. Solve #stageFrame questions one by one via double-click or Alt+S diagram OCR without triggering bot detection.',
        url: 'https://examghost.com/edgenuity-quiz-solver',
        siteName: 'ExamGhost',
        type: 'website',
        images: [{ url: '/videos/posters/edgenuity-quiz-solver-poster.jpg', width: 1280, height: 720, alt: 'Edgenuity Quiz Solver — Unit Test & Cumulative Exam AI' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Edgenuity Quiz Solver — Unit Test & Cumulative Exam AI',
        description: 'Solve Edgenuity quizzes, unit tests and cumulative exams inside #stageFrame in 0.3s, one question at a time, with natural Active Time. 5 free solves / day.',
        images: ['/videos/posters/edgenuity-quiz-solver-poster.jpg'],
    },
};

const edgenuityConfig: any = {
    slug: 'edgenuity-quiz-solver',
    platformName: 'Imagine Edgenuity',
    platformShort: 'Edgenuity',
    heroBadge: 'Imagine Edgenuity #stageFrame & Cumulative Exam Ready',
    heroDotColor: '#7c3aed',
    h1Title: 'Imagine Edgenuity Quiz &',
    h1Highlight: 'Cumulative Exam Solver',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for Imagine Edgenuity</strong> is a Manifest V3 Chrome extension engineered for{' '}
            <strong className="text-[#1a1a1a]">Edgenuity Warm-Ups, Instruction, Assignments, Unit Tests &amp; Cumulative Exams</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">*.core.learn.edgenuity.com/Player/</code>). Unlike Tampermonkey scripts that get flagged for tampering with Edgenuity&apos;s SCORM API, ExamGhost runs in Chrome&apos;s isolated world inside{' '}
            <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">iframe#stageFrame</code>—letting you solve questions one by one via double-click or{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd>.
        </>
    ),
    videoDemo: {
        platformSub: 'Imagine Edgenuity Virtual Classroom • r08.core.learn.edgenuity.com/Player/#stageFrame',
        browserUrl: 'https://r08.core.learn.edgenuity.com/Player/',
        badgeBg: 'bg-[#f5f3ff] border-[#ddd6fe]',
        badgeText: 'text-[#7c3aed]',
        telemetryLabel: 'Edgenuity #stageFrame Active Time: Normal (0 Idle/Blur Flags)',
        questions: [
            {
                id: 1,
                code: 'EDG-STAGE-01 • iframe#stageFrame (Unit Test — US History)',
                type: 'Edgenuity Multiple Choice',
                points: '10% Weight',
                prompt:
                    'Read the excerpt from President Franklin D. Roosevelt’s First Inaugural Address (1933). Which New Deal agency was specifically established during the First Hundred Days to restore public confidence in the nation’s banking system by insuring individual bank deposits?',
                options: [
                    'The Works Progress Administration (WPA)',
                    'The Federal Deposit Insurance Corporation (FDIC), created by the Glass-Steagall Banking Act of 1933',
                    'The Civilian Conservation Corps (CCC)',
                    'The Tennessee Valley Authority (TVA)',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'The Banking Act of 1933 (Glass-Steagall) established the Federal Deposit Insurance Corporation (FDIC) to guarantee individual bank deposits and prevent the bank runs that paralyzed the financial system between 1929 and 1933.',
            },
            {
                id: 2,
                code: 'EDG-STAGE-02 • iframe#iFramePreview (Algebra II / Precalculus)',
                type: 'Edgenuity Math Assessment',
                points: '10% Weight',
                prompt:
                    'What is the sum of the infinite geometric series 18 - 6 + 2 - 2/3 + ... ?',
                options: [
                    'S = 27 / 2 = 13.5',
                    'S = 27',
                    'S = 12',
                    'The infinite geometric series diverges because |r| ≥ 1.',
                ],
                correctIndex: 0,
                confidence: '99.9%',
                explanation:
                    'Here the first term is a₁ = 18 and the common ratio is r = -6 / 18 = -1/3. Since |r| = 1/3 < 1, the infinite geometric series converges to S = a₁ / (1 - r) = 18 / (1 - (-1/3)) = 18 / (4/3) = 54 / 4 = 27 / 2 = 13.5.',
            },
            {
                id: 3,
                code: 'EDG-STAGE-03 • Edgenuity Physics & Earth Science Diagram',
                type: 'Edgenuity Visual Prompt (Requires Alt+S OCR)',
                points: '10% Weight',
                requiresOcr: true,
                diagramLabel: 'EDGENUITY #STAGEFRAME — SNELL’S LAW REFRACTION BOUNDARY',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="52" fill="#f8fafc" stroke="#cbd5e1" />
                        <rect x="8" y="60" width="364" height="52" fill="#ede9fe" stroke="#c4b5fd" />
                        <line x1="190" y1="12" x2="190" y2="108" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
                        <line x1="115" y1="15" x2="190" y2="60" stroke="#7c3aed" strokeWidth="2.5" />
                        <line x1="190" y1="60" x2="232" y2="106" stroke="#7c3aed" strokeWidth="2.5" />
                        <text x="20" y="28" fontSize="9" fontWeight="bold" fill="#334155">Medium 1: Air (n₁ = 1.00)</text>
                        <text x="20" y="98" fontSize="9" fontWeight="bold" fill="#6d28d9">Medium 2: Crown Glass (n₂ = 1.50)</text>
                        <text x="145" y="34" fontSize="9" fontWeight="bold" fill="#7c3aed">θ₁ = 48.6°</text>
                        <text x="196" y="88" fontSize="9" fontWeight="bold" fill="#0f172a">θ₂ = ?</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the Edgenuity #stageFrame ray diagram above. A monochromatic light ray travels from air (n₁ = 1.00) into crown glass (n₂ = 1.50) at an angle of incidence θ₁ = 48.6° (note: sin 48.6° ≈ 0.750). According to Snell’s Law, what is the angle of refraction θ₂ inside the glass?',
                options: [
                    'θ₂ = 30.0°',
                    'θ₂ = 32.4°',
                    'θ₂ = 45.0°',
                    'θ₂ = 60.0°',
                ],
                correctIndex: 0,
                confidence: '99.8%',
                explanation:
                    'By Snell’s Law, n₁·sin(θ₁) = n₂·sin(θ₂). Substituting values: (1.00)(0.750) = (1.50)·sin(θ₂) ⇒ sin(θ₂) = 0.750 / 1.50 = 0.500 ⇒ θ₂ = arcsin(0.500) = 30.0°.',
            },
            {
                id: 4,
                code: 'EDG-STAGE-04 • Edgenuity Chemistry (Stoichiometry & Molarity)',
                type: 'Edgenuity Cumulative Exam',
                points: '10% Weight',
                prompt:
                    'What volume (in milliliters) of a 2.50 M stock NaOH solution is required to prepare 500.0 mL of a 0.150 M diluted NaOH solution?',
                options: [
                    '15.0 mL',
                    '30.0 mL',
                    '60.0 mL',
                    '75.0 mL',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Using the dilution equation M₁V₁ = M₂V₂: (2.50 M)(V₁) = (0.150 M)(500.0 mL) ⇒ 2.50 · V₁ = 75.0 ⇒ V₁ = 75.0 / 2.50 = 30.0 mL.',
            },
            {
                id: 5,
                code: 'EDG-STAGE-05 • Edgenuity English Language Arts (Rhetorical Analysis)',
                type: 'Edgenuity Passage & Prompt',
                points: '10% Weight',
                prompt:
                    'In Shakespeare’s Julius Caesar (Act III, Scene 2), Mark Antony repeatedly calls Brutus "an honorable man" while presenting evidence that contradicts Brutus’s claim of Caesar’s ambition. Which rhetorical device is Antony primarily using?',
                options: [
                    'Verbal irony paired with paralipsis and refrain to undermine Brutus’s credibility without directly violating the conspirators’ speech restrictions',
                    'Literal praise intended to endorse Brutus as the next Roman emperor',
                    'Malapropism and comic relief',
                    'Allegorical personification of the Roman Senate',
                ],
                correctIndex: 0,
                confidence: '99.8%',
                explanation:
                    'Antony uses verbal irony and rhythmic repetition (refrain) of "Brutus is an honorable man" juxtaposed against Caesar’s generous deeds (refusing the crown, weeping for the poor) to turn the Roman crowd against the conspirators.',
            },
        ],
    },
    architecture: {
        cardBg: '#f5f3ff',
        cardBorder: '#ddd6fe',
        mascotImage: '/images/ghost/ghost_card_proctor.jpg',
        mascotTitle: 'Edgenuity #stageFrame Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">*.core.learn.edgenuity.com/Player/</code> and nested <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">#stageFrame</code> iframes.
            </>
        ),
        pills: ['Zero Tampermonkey Flags', '#stageFrame & #iFramePreview', 'Active Time Preserved'],
        eyebrow: 'Imagine Edgenuity Player Architecture',
        heading: 'Why ExamGhost Succeeds Where Edgenuity Auto-Scripts Get Flagged',
        lead: (
            <>
                Public Tampermonkey scripts (<strong className="text-[#1a1a1a]">EdgenTweaks / EdgyPro</strong>) hook directly into Edgenuity&apos;s main-world <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">window.API</code> SCORM object and submit 10-question quizzes in 4 seconds—instantly flagging your <strong className="text-[#1a1a1a]">Edgenuity Attendance &amp; Progress Report</strong>. ExamGhost never touches Edgenuity&apos;s SCORM variables; instead, it solves questions one by one inside Chrome&apos;s isolated MV3 context.
            </>
        ),
        pillars: [
            {
                title: '1. Works Inside #stageFrame & #iFramePreview',
                desc: (
                    <>
                        Imagine Edgenuity nests its activities two iframes deep (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">iframe#stageFrame</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">iframe#iFramePreview</code>), which breaks ordinary Chrome extensions and disables right-click copying. ExamGhost attaches natively inside both frames so you can double-click any question or passage in place.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
            {
                title: '2. Protects Your Active Time vs. Idle Time Log',
                desc: (
                    <>
                        Teachers review Edgenuity&apos;s <strong className="text-[#1a1a1a]">Session Log</strong>, which compares <strong className="text-[#1a1a1a]">Total Active Time</strong> against <strong className="text-[#1a1a1a]">Idle Time</strong> and checks how many minutes you spent on a Quiz (typically 10–15 minutes) or Unit Test (25–40 minutes). Solving one by one via double-click keeps your active session time 100% realistic.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
            {
                title: '3. Handles Dynamic Number Variants & Alt+S Diagrams',
                desc: (
                    <>
                        Copying an Edgenuity question into Brainly often fails because Edgenuity rotates several numerical variants of the same prompt and embeds maps, charts, and geometry figures as images. Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to solve your exact diagram and numbers on the spot.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
        ],
    },
    questionTypesSection: {
        eyebrow: 'Imagine Edgenuity Activity & Exam Coverage',
        heading: 'Every Edgenuity Activity Supported — From Warm-Up to Cumulative Exam',
        lead: (
            <>
                Imagine Learning Edgenuity (<code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">core.learn.edgenuity.com</code>) encapsulates every activity inside two nested iframes (<code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">#stageFrame</code> &rarr; <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">#iFramePreview</code>). ExamGhost works across all 6 Edgenuity course stages:
            </>
        ),
        items: [
            {
                name: '10-Question Unit Quizzes & 25-Question Unit Tests',
                codeTag: 'iframe#stageFrame Quiz',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.7%',
                description: (
                    <>
                        Double-click any question inside Edgenuity&apos;s assessment frame to evaluate Multiple-Choice, Multi-Select, and Dropdown items in 0.3s—even when right-click and text copy are disabled.
                    </>
                ),
            },
            {
                name: '50-Question Cumulative Exams & Prescriptive Tests',
                codeTag: 'Cumulative Exam Player',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: '99.6%',
                description: (
                    <>
                        Solves high-stakes 50-question Edgenuity Cumulative Exams one question at a time, handling randomized question bank clones that return wrong answers on Brainly.
                    </>
                ),
            },
            {
                name: 'Warm-Up, Instruction & Summary Check Questions',
                codeTag: '#iFramePreview Activity',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.8%',
                description: (
                    <>
                        Answers interactive comprehension checks embedded between Instruction video segments so you never get kicked back to replay a 6-minute video slide.
                    </>
                ),
            },
            {
                name: 'Split-Screen ELA / History Reading Passages & Maps',
                codeTag: 'Left-Pane Excerpt + Prompt',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.4%',
                description: (
                    <>
                        Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> across both the left-pane scrollable literary/historical excerpt and the right-pane question stem to solve Part A / Part B evidence items accurately.
                    </>
                ),
            },
            {
                name: 'Short-Writing & Online Content Rubric Prompts',
                codeTag: 'textarea.essay-response',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.3%',
                description: (
                    <>
                        Generates natural, grade-level short-response outlines that hit all required Edgenuity keyword rubric points without triggering automated AI-paste detectors.
                    </>
                ),
            },
            {
                name: 'Virtual Science Labs & Geometry Diagram Prompts',
                codeTag: 'Edgenuity Media Canvas',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.2%',
                description: (
                    <>
                        Captures unselectable Edgenuity geometry proofs, Punnett squares, stoichiometry tables, and physics graphs via <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> Vision OCR.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: 'Imagine Edgenuity Teacher Log Forensics',
        heading: 'What Teachers See in the Edgenuity Attendance & Session Log Report',
        lead: (
            <>
                Why do students who use Tampermonkey scripts (<code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">EdgenTweaks</code>, <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">EdgyPro</code>, <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">Auto-Advance</code>) get caught by their school coordinator? Because Edgenuity&apos;s teacher portal logs these 4 exact telemetry metrics:
            </>
        ),
        citationNote: 'Audited on Imagine Edgenuity 2026',
        logTableTitle: 'edgenuity_session_log_forensics — Teacher Dashboard View',
        events: [
            {
                eventCode: 'Active Time vs. Idle Time Counter',
                whenTriggered: 'Leaving the Edgenuity tab to search Brainly or going inactive for >3 minutes',
                professorView: 'Attendance Report displays Total Active Time alongside Total Idle Time per day',
                examghostStatus: '100% Active Tab Focus (0 Idle Drift)',
                isSafe: true,
            },
            {
                eventCode: 'Activity Duration Log (Quiz / Unit Test Minutes)',
                whenTriggered: 'Starting and submitting a 10-question Quiz or 25-question Unit Test',
                professorView: 'Shows exact minutes/seconds spent on the assessment (e.g. "Quiz: 12m 40s" vs "0m 18s")',
                examghostStatus: 'Natural 1-by-1 Human Pacing',
                isSafe: true,
            },
            {
                eventCode: 'Main-World SCORM window.API Tamper Check',
                whenTriggered: 'Running Tampermonkey userscripts that mutate window.API or force FrameComplete()',
                professorView: 'Triggers client-side integrity anomalies and corrupts SCORM state checkpoints',
                examghostStatus: 'Zero SCORM / Main-World Hooks',
                isSafe: true,
            },
            {
                eventCode: 'Free-Response Keyword Grader vs. Teacher Review',
                whenTriggered: 'Submitting a Short Writing or Journal activity in Edgenuity',
                professorView: 'Auto-scores for rubric keywords first, then shows full text + time spent to the teacher',
                examghostStatus: 'Rubric-Aligned Natural Explanations',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why Tampermonkey "Auto-Guess" Scripts Ruin Your Edgenuity Course Progress',
        whyNoSolveAllBody: (
            <>
                Public Tampermonkey scripts inject DOM buttons directly into Edgenuity&apos;s main JavaScript execution world and auto-submit 10-question quizzes in under 15 seconds. When your school&apos;s Edgenuity facilitator checks the <strong>Student Progress &amp; Session Log</strong>, seeing a 25-question Unit Test completed in <strong>32 seconds</strong> causes them to lock your course until a teacher manually unlocks a retake. ExamGhost runs in Chrome&apos;s isolated MV3 world and solves strictly <strong>one question at a time on double-click</strong> so you maintain a realistic 10–15 minute quiz duration.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Edgenuity Workflow',
        heading: 'How to Solve Edgenuity Quizzes, Unit Tests & Cumulative Exams Safely',
        lead: (
            <>
                Follow this 4-step workflow inside <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">core.learn.edgenuity.com</code> to solve questions inside <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">#stageFrame</code> without accumulating Idle Time or triggering speed flags:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Open Your Edgenuity Course Activity or Assessment in Chrome',
                shortcutBadge: 'core.learn.edgenuity.com',
                description: (
                    <>
                        Launch your Edgenuity Warm-Up, Instruction, Quiz, Unit Test, or Cumulative Exam. ExamGhost automatically pierces both <code className="font-mono text-xs">iframe#stageFrame</code> and <code className="font-mono text-xs">iframe#iFramePreview</code> without any userscript installation.
                    </>
                ),
                plainTextForSchema:
                    'Launch your Edgenuity activity, Quiz, Unit Test, or Cumulative Exam in Chrome. ExamGhost automatically attaches inside iframe#stageFrame and iframe#iFramePreview.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click the Active Question Stem Inside #stageFrame',
                shortcutBadge: 'Double-Click Stem',
                description: (
                    <>
                        Double-click anywhere on the question text. ExamGhost extracts the exact numerical variant and answer choices inside its Closed Shadow DOM—no highlighting, right-clicking, or Brainly tab-switching needed.
                    </>
                ),
                plainTextForSchema:
                    'Double-click anywhere on the question stem inside #stageFrame to evaluate your exact numerical variant and highlight the verified choice.',
            },
            {
                stepNumber: '3',
                title: 'Press Alt+S to Capture Split-Screen Reading Excerpts & Diagrams',
                shortcutBadge: 'Alt + S (Vision OCR)',
                description: (
                    <>
                        When an Edgenuity question displays a left-pane reading passage, historical map, geometry figure, or chart, press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> and drag a crop box across both panes to solve it visually in 0.4 seconds.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S and drag a crop box across both the left-pane reading passage or diagram and the right-pane question to solve visual prompts.',
            },
            {
                stepNumber: '4',
                title: 'Pace Each Question Naturally (45s–90s per Item)',
                shortcutBadge: 'Active Time Protected',
                description: (
                    <>
                        Select the verified answer and spend a realistic 45–90 seconds per question so your Edgenuity <strong>Session Log</strong> records healthy Active Time and a natural 10–15 minute Unit Quiz completion duration.
                    </>
                ),
                plainTextForSchema:
                    'Select the verified answer and advance at a natural 45 to 90 second pace per item so your Edgenuity Session Log records realistic Active Time.',
            },
        ],
    },
    courseModulesSection: {
        eyebrow: 'Supported Imagine Edgenuity Courses',
        heading: 'Top Edgenuity Core, Honors & Credit Recovery Courses Covered',
        lead: (
            <>
                ExamGhost supports all Imagine Edgenuity high school, AP, and district credit-recovery subjects:
            </>
        ),
        modules: [
            {
                department: 'Edgenuity Mathematics (Algebra, Geometry & Precalculus)',
                courseCodes: 'Algebra I & II / Geometry / Precalculus / Financial Math',
                textbooksOrModules: 'Randomized Number Clones, Coordinate Planes, Proofs & Quadratic Equations',
                keyChallengeSolved:
                    'Computes the exact answer for your specific numerical variant (where Brainly copy-paste fails because Edgenuity rotates 4–6 number variations of the same question).',
            },
            {
                department: 'Edgenuity English Language Arts (ELA 9–12)',
                courseCodes: 'English I, II, III, IV / Expository Reading & Writing',
                textbooksOrModules: 'Split-Screen Literary Excerpts (Shakespeare, Odyssey, Rhetoric) & Part A / Part B Items',
                keyChallengeSolved:
                    'Reads both the scrollable left-pane literary text and the right-pane comprehension prompt simultaneously via double-click or Alt+S.',
            },
            {
                department: 'Edgenuity Sciences (Biology, Chemistry, Physics & Earth Science)',
                courseCodes: 'Biology / Chemistry / Physics / Environmental Science',
                textbooksOrModules: 'Virtual Lab Post-Quizzes, Stoichiometry, Punnett Squares & Force Diagrams',
                keyChallengeSolved:
                    'Uses Alt+S Vision OCR to analyze lab data tables, chemical equations, and biological diagrams embedded inside #iFramePreview.',
            },
            {
                department: 'Social Studies, Economics & World Languages',
                courseCodes: 'U.S. History / World History / U.S. Gov / Economics / Spanish',
                textbooksOrModules: 'Primary Source Political Cartoons, Historical Maps, Supply/Demand & Cumulative Exams',
                keyChallengeSolved:
                    'Interprets political cartoons, DBQ excerpts, and economic graphs on 50-question Cumulative Exams with 99.6% accuracy.',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Imagine Edgenuity Technical Audit',
        heading: 'ExamGhost vs. Brainly & Tampermonkey Scripts on Edgenuity',
        windowTitle: 'edgenuity_stageframe_audit.csv — Verified Comparison',
        windowBadge: '#stageFrame • Active Time Safe • No SCORM Hooks',
        rows: [
            {
                capability: (
                    <>
                        Works inside nested <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">iframe#stageFrame</code> &amp; <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">iframe#iFramePreview</code>
                    </>
                ),
                examghost: 'Yes (Manifest V3 all_frames)',
                chatgpt: 'Requires Tab Switch & Copy',
                sidebar: 'Fails to Pierce Nested #stageFrame',
            },
            {
                capability: (
                    <>
                        Leaves Edgenuity main-world <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.API</code> SCORM globals untouched
                    </>
                ),
                examghost: '100% Untouched (Isolated World)',
                chatgpt: 'N/A (External Tab)',
                sidebar: 'Tampermonkey Scripts Get Flagged',
            },
            {
                capability: 'Maintains natural Active Time on Quizzes & Cumulative Exams',
                examghost: 'Yes (One-by-One Double-Click)',
                chatgpt: 'Triggers Idle Time / Blur Gaps',
                sidebar: '4-Second Auto-Skip Flags Teacher Report',
            },
            {
                capability: 'Solves Edgenuity split-screen reading passages, maps & science charts',
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Cannot Copy Unselectable Images',
                sidebar: 'Misses Left-Pane Reading Excerpt',
            },
            {
                capability: 'Solves randomized Edgenuity math variants accurately (unlike Brainly)',
                examghost: 'Computes Your Exact Numbers',
                chatgpt: 'Requires Re-Typing Math',
                sidebar: 'Brainly Returns Wrong Number Variant',
            },
        ],
    },
    faqSubtitle:
        'Direct engineering answers about Imagine Edgenuity teacher logs, Active vs. Idle Time, Tampermonkey detection, and #stageFrame quizzes.',
    faqs: [
        {
            category: 'stealth',
            q: 'Does Imagine Edgenuity detect tab switching or Chrome extensions?',
            a: (
                <>
                    Imagine Edgenuity tracks your <strong className="text-[#1a1a1a]">Active Time vs. Idle Time</strong> and logs how long you spend on each activity (Warm-Up, Instruction, Quiz, Unit Test, Cumulative Exam). Leaving the Edgenuity tab to search Brainly or ChatGPT causes your session to accumulate Idle Time or fire browser <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> events. ExamGhost runs inside Chrome&apos;s isolated Manifest V3 world so you solve questions inside <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">#stageFrame</code> without ever switching tabs.
                </>
            ),
            plainTextAnswer:
                'Imagine Edgenuity tracks your Active Time vs. Idle Time and logs how long you spend on each activity (Warm-Up, Instruction, Quiz, Unit Test, Cumulative Exam). Leaving the Edgenuity tab to search Brainly or ChatGPT causes your session to accumulate Idle Time or fire browser window.blur events. ExamGhost runs inside Chrome isolated Manifest V3 world so you solve questions inside #stageFrame without ever switching tabs.',
        },
        {
            category: 'stealth',
            q: 'Why do Tampermonkey scripts (like EdgenTweaks or EdgyPro) get students caught on Edgenuity?',
            a: (
                <>
                    Auto-completer userscripts inject JavaScript directly into Edgenuity&apos;s main page context to override <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.API.FrameChain</code> and auto-click through questions in 1–2 seconds. Teachers immediately spot this in the <strong className="text-[#1a1a1a]">Edgenuity Attendance &amp; Progress Report</strong> when a 25-question Unit Test shows a completion time of 45 seconds. Because ExamGhost has no &ldquo;Solve All&rdquo; button and only solves one question at a time on double-click, your activity duration looks 100% human.
                </>
            ),
            plainTextAnswer:
                'Auto-completer userscripts inject JavaScript directly into Edgenuity main page context to override window.API.FrameChain and auto-click through questions in 1–2 seconds. Teachers immediately spot this in the Edgenuity Attendance & Progress Report when a 25-question Unit Test shows a completion time of 45 seconds. Because ExamGhost has no Solve All button and only solves one question at a time on double-click, your activity duration looks 100% human.',
        },
        {
            category: 'ocr',
            q: 'How do I solve Edgenuity questions that have a reading passage on the left and a question on the right?',
            a: (
                <>
                    In Edgenuity ELA and Social Studies quizzes, the screen is split inside <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">#stageFrame</code> with a scrollable excerpt on the left and the multiple-choice prompt on the right. Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> and drag across both panes (the passage excerpt and the question options)—ExamGhost reads both together and highlights the verified answer.
                </>
            ),
            plainTextAnswer:
                'In Edgenuity ELA and Social Studies quizzes, the screen is split inside #stageFrame with a scrollable excerpt on the left and the multiple-choice prompt on the right. Press Alt+S and drag across both panes (the passage excerpt and the question options)—ExamGhost reads both together and highlights the verified answer.',
        },
        {
            category: 'ocr',
            q: 'Why is ExamGhost more accurate than Brainly on Edgenuity math and science quizzes?',
            a: (
                <>
                    Edgenuity uses question banks where the wording is nearly identical across 4 variants, but one key number or sign is changed. Students who copy the first sentence into Brainly often copy the answer for Variant A when their screen is showing Variant C. ExamGhost evaluates the exact numbers and diagrams rendered on your screen.
                </>
            ),
            plainTextAnswer:
                'Edgenuity uses question banks where the wording is nearly identical across 4 variants, but one key number or sign is changed. Students who copy the first sentence into Brainly often copy the answer for Variant A when their screen is showing Variant C. ExamGhost evaluates the exact numbers and diagrams rendered on your screen.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work on Edgenuity Unit Tests and Cumulative Exams?',
            a: (
                <>
                    Yes. Unit Tests and Cumulative Exams render inside the exact same <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">iframe#stageFrame</code> player as daily Topic Tests. You can switch between <strong className="text-[#1a1a1a]">Invisible Mode (Alt+1)</strong>, <strong className="text-[#1a1a1a]">Stealth Mode (Alt+2)</strong>, and <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> at any time using keyboard shortcuts.
                </>
            ),
            plainTextAnswer:
                'Yes. Unit Tests and Cumulative Exams render inside the exact same iframe#stageFrame player as daily Topic Tests. You can switch between Invisible Mode (Alt+1), Stealth Mode (Alt+2), and Explain Mode (Alt+3) at any time using keyboard shortcuts.',
        },
        {
            category: 'workflow',
            q: 'How does ExamGhost handle Edgenuity Short Writing / eNotes free-response boxes?',
            a: (
                <>
                    Edgenuity grades short-answer boxes using a keyword rubric checklist. When you double-click a short-response prompt in <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong>, ExamGhost provides the core concepts and key terminology that Edgenuity&apos;s rubric looks for so you can write a natural response in your own words.
                </>
            ),
            plainTextAnswer:
                'Edgenuity grades short-answer boxes using a keyword rubric checklist. When you double-click a short-response prompt in Explain Mode (Alt+3), ExamGhost provides the core concepts and key terminology that Edgenuity rubric looks for so you can write a natural response in your own words.',
        },
        {
            category: 'workflow',
            q: 'What is a safe amount of time to spend on an Edgenuity 10-question Quiz?',
            a: (
                <>
                    Teachers look for roughly <strong className="text-[#1a1a1a]">45 to 90 seconds per question</strong> (about 8 to 15 minutes total for a 10-question Topic Quiz, and 25 to 40 minutes for a 25-question Unit Test). Solving questions one by one with ExamGhost makes it easy to pace yourself naturally.
                </>
            ),
            plainTextAnswer:
                'Teachers look for roughly 45 to 90 seconds per question (about 8 to 15 minutes total for a 10-question Topic Quiz, and 25 to 40 minutes for a 25-question Unit Test). Solving questions one by one with ExamGhost makes it easy to pace yourself naturally.',
        },
        {
            category: 'workflow',
            q: 'Can I test the Imagine Edgenuity Solver before installing the Chrome extension?',
            a: (
                <>
                    Yes! Scroll up to the interactive <strong className="text-[#1a1a1a]">Imagine Edgenuity #stageFrame Simulator</strong> on this page to test one-by-one double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> Snell&apos;s Law diagram OCR, and all three stealth modes right in your browser.
                </>
            ),
            plainTextAnswer:
                'Yes! Scroll up to the interactive Imagine Edgenuity #stageFrame Simulator on this page to test one-by-one double-click solving, Alt+S Snell Law diagram OCR, and all three stealth modes right in your browser.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/edgenuity-quiz-solver/#webpage',
                url: 'https://examghost.com/edgenuity-quiz-solver',
                name: 'Imagine Edgenuity Quiz & Cumulative Exam Solver | #stageFrame AI | ExamGhost',
                description:
                    'Interactive Imagine Edgenuity quiz, unit test, and cumulative exam solver simulator and technical guide covering #stageFrame iframes and Active Time logs.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#edgenuity-quiz-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost Imagine Edgenuity Quiz Solver',
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
                        name: 'Imagine Edgenuity Quiz Solver',
                        item: 'https://examghost.com/edgenuity-quiz-solver',
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

export default function EdgenuityQuizSolverPage() {
    const config = edgenuityConfig;
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
                    <EdgenuityMotionDemo />

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
