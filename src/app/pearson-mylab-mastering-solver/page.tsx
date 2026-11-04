import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PearsonMyLabMasteringDemo } from '@/components/PlatformMotionDemos';
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
    title: { absolute: 'Pearson MyLab & Mastering Solver — Math, Stats, Physics' },
    description: "Solve Pearson MyLab Math, Statistics and Mastering Physics inline in 0.3s, with exact TDX formatting and sig-figs. Live demo with 5 free solves / day.",
    keywords: [
        'Pearson MyLab Math solver',
        'Pearson Mastering Physics solver',
        'MyLab Statistics AI helper',
        'Mastering Chemistry Chrome extension',
        'does Pearson MyLab detect tab switching',
        'Pearson PlayerTest.aspx quiz solver',
        'MyLab Accounting solver',
    ],
    alternates: {
        canonical: 'https://examghost.com/pearson-mylab-mastering-solver',
    },
    openGraph: {
        title: 'Pearson MyLab & Mastering Solver — Interactive TDX Player Demo | ExamGhost',
        description:
            'Watch or control a live Pearson MyLab & Mastering quiz session. Solve multi-part TDX Player questions one by one via double-click or Alt+S diagram OCR.',
        url: 'https://examghost.com/pearson-mylab-mastering-solver',
        siteName: 'ExamGhost',
        type: 'website',
        images: [{ url: '/videos/posters/pearson-mylab-mastering-solver-poster.jpg', width: 1280, height: 720, alt: 'Pearson MyLab & Mastering Solver — Math, Stats, Physics' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pearson MyLab & Mastering Solver — Math, Stats, Physics',
        description: 'Solve Pearson MyLab Math, Statistics and Mastering Physics or Chemistry inline in 0.3s, with exact TDX formatting and sig-figs. Live demo and 5 free solves / day.',
        images: ['/videos/posters/pearson-mylab-mastering-solver-poster.jpg'],
    },
};

const pearsonConfig: any = {
    slug: 'pearson-mylab-mastering-solver',
    platformName: 'Pearson MyLab & Mastering',
    platformShort: 'Pearson MyLab',
    heroBadge: 'Pearson TDX Player, XL Player & Mastering Ready',
    heroDotColor: '#0284c7',
    h1Title: 'Pearson MyLab &',
    h1Highlight: 'Mastering AI Solver',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for Pearson MyLab &amp; Mastering</strong> is a Manifest V3 Chrome extension engineered for{' '}
            <strong className="text-[#1a1a1a]">MyLab Math &amp; Statistics</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">PlayerHomework.aspx</code> / <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">PlayerTest.aspx</code> / <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">tdx.acs.pearson.com</code>) and{' '}
            <strong className="text-[#1a1a1a]">Mastering Physics, Chemistry &amp; Biology</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">itemView</code>). Double-click any multi-part prompt one by one or press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd> to solve free-body diagrams, StatCrunch tables, and exact rounding tolerances without switching tabs.
        </>
    ),
    videoDemo: {
        platformSub: 'Pearson TDX & Mastering Player • mylab.pearson.com/Student/PlayerTest.aspx',
        browserUrl: 'https://mylab.pearson.com/Student/PlayerTest.aspx?testId=259014822&centerwin=yes',
        badgeBg: 'bg-[#f0f9ff] border-[#bae6fd]',
        badgeText: 'text-[#0284c7]',
        telemetryLabel: 'Pearson TDX Player Focus: Active (0 Blur Events)',
        questions: [
            {
                id: 1,
                code: 'MYLAB-MATH-01 • Calculus II (Part 1 of 2 — Exact Symbolic Form)',
                type: 'Pearson MyLab Math (TDX Player)',
                points: '2.00 pts',
                prompt:
                    'Evaluate the improper integral ∫₁^∞ [ 6x / (x² + 2)³ ] dx or state that it diverges. Express your answer as an exact simplified fraction.',
                options: [
                    '1 / 9',
                    '1 / 6',
                    '1 / 3',
                    'The improper integral diverges.',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Let u = x² + 2, so du = 2x dx and 6x dx = 3 du. When x = 1, u = 3; as x → ∞, u → ∞. Thus ∫₃^∞ 3u⁻³ du = [ -3 / (2u²) ]₃^∞ = 0 - (-3 / (2 · 9)) = 3 / 18 = 1 / 6.',
            },
            {
                id: 2,
                code: 'MYLAB-STAT-02 • MyLab Statistics (Round to 4 Decimal Places)',
                type: 'Pearson MyLab Statistics',
                points: '3.00 pts',
                prompt:
                    'Suppose packets arriving at a network router follow a Poisson process with a mean rate of λ = 4.0 packets per millisecond. What is the probability that exactly k = 2 packets arrive during a given 1-millisecond interval? (Round to four decimal places as needed.)',
                options: [
                    '0.1465',
                    '0.1954',
                    '0.0733',
                    '0.2381',
                ],
                correctIndex: 0,
                confidence: '99.8%',
                explanation:
                    'For a Poisson distribution, P(X = k) = (λ^k · e^(-λ)) / k!. Substituting λ = 4 and k = 2 gives P(X = 2) = (4² · e⁻⁴) / 2! = (16 · 0.0183156) / 2 = 8 · 0.0183156 = 0.146525 ≈ 0.1465.',
            },
            {
                id: 3,
                code: 'MASTERING-PHYS-03 • Mastering Physics (Free-Body & Pulley Diagram)',
                type: 'Pearson Mastering Physics (Requires Alt+S OCR)',
                points: '4.00 pts',
                requiresOcr: true,
                diagramLabel: 'MASTERING PHYSICS — ATWOOD INCLINE SYSTEM (μ_k = 0)',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="104" rx="8" fill="#f0f9ff" stroke="#bae6fd" />
                        <polygon points="45,98 225,98 225,28" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                        <circle cx="232" cy="24" r="9" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
                        <rect x="130" y="42" width="36" height="22" rx="3" transform="rotate(-21.25 148 53)" fill="#0284c7" />
                        <text x="136" y="56" fontSize="9" fontWeight="bold" fill="#ffffff">m₁=5kg</text>
                        <line x1="165" y1="45" x2="228" y2="18" stroke="#0f172a" strokeWidth="1.5" />
                        <line x1="241" y1="24" x2="241" y2="62" stroke="#0f172a" strokeWidth="1.5" />
                        <rect x="225" y="62" width="34" height="26" rx="3" fill="#0f172a" />
                        <text x="229" y="78" fontSize="9" fontWeight="bold" fill="#ffffff">m₂=5kg</text>
                        <text x="68" y="92" fontSize="9" fontWeight="bold" fill="#0369a1">θ = 30° (Frictionless)</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the Mastering Physics incline figure above. Block m₁ = 5.0 kg rests on a frictionless 30° incline and is connected by a massless cord over an ideal pulley to hanging block m₂ = 5.0 kg. Taking g = 9.80 m/s², what is the magnitude of the acceleration of the blocks?',
                options: [
                    'a = 4.90 m/s²',
                    'a = 2.45 m/s²',
                    'a = 3.27 m/s²',
                    'a = 0 m/s² (system is in static equilibrium)',
                ],
                correctIndex: 1,
                confidence: '99.5%',
                explanation:
                    'Applying Newton’s Second Law along the cord: F_net = m₂g - m₁g·sin(30°) = (m₁ + m₂)a. Since m₁ = m₂ = 5.0 kg and sin(30°) = 0.5, we get a = g(1 - 0.5) / 2 = 9.80 × 0.25 = 2.45 m/s².',
            },
            {
                id: 4,
                code: 'MASTERING-CHEM-04 • Mastering Chemistry (Buffer & Henderson-Hasselbalch)',
                type: 'Pearson Mastering Chemistry',
                points: '2.50 pts',
                prompt:
                    'What is the pH of an aqueous buffer solution prepared by mixing 0.20 M acetic acid (CH₃COOH, Ka = 1.8 × 10⁻⁵) with 0.60 M sodium acetate (CH₃COONa) at 25°C? (Express your answer to two decimal places.)',
                options: [
                    'pH = 4.27',
                    'pH = 4.74',
                    'pH = 5.22',
                    'pH = 5.54',
                ],
                correctIndex: 2,
                confidence: '99.7%',
                explanation:
                    'First find pKa = -log₁₀(1.8 × 10⁻⁵) = 4.7447. By the Henderson-Hasselbalch equation, pH = pKa + log₁₀([A⁻]/[HA]) = 4.7447 + log₁₀(0.60 / 0.20) = 4.7447 + log₁₀(3) = 4.7447 + 0.4771 = 5.2218 ≈ 5.22.',
            },
            {
                id: 5,
                code: 'MASTERING-BIO-05 • Mastering Biology (Genetics & Hardy-Weinberg)',
                type: 'Pearson Mastering Biology',
                points: '2.00 pts',
                prompt:
                    'In a large diploid plant population in Hardy-Weinberg equilibrium, 9% of individuals display the recessive white-flower phenotype (aa). What percentage of the population are heterozygous carriers (Aa)?',
                options: [
                    '21%',
                    '42%',
                    '49%',
                    '82%',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Given q² = 0.09, the recessive allele frequency is q = √0.09 = 0.30. Thus the dominant allele frequency is p = 1 - q = 0.70. The heterozygous genotype frequency is 2pq = 2(0.70)(0.30) = 0.42, or 42%.',
            },
        ],
    },
    architecture: {
        cardBg: '#f0f9ff',
        cardBorder: '#bae6fd',
        mascotImage: '/images/ghost/ghost_mascot_hero.jpg',
        mascotTitle: 'Pearson TDX & Mastering Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">PlayerTest.aspx</code>, TDX Player, and Mastering <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">itemView</code>.
            </>
        ),
        pills: ['Strict Rounding Respect', 'Multi-Part Question Flow', 'Alt+S StatCrunch & Physics OCR'],
        eyebrow: 'Pearson MyLab & Mastering Architecture',
        heading: 'Precision Formatting for Pearson TDX, XL Player & Mastering',
        lead: (
            <>
                Anyone who has used <strong className="text-[#1a1a1a]">Pearson MyLab Math</strong> or <strong className="text-[#1a1a1a]">MyLab Statistics</strong> knows the frustration of losing credit because an answer was rounded to 3 decimal places instead of 4, or typed as a decimal instead of a simplified fraction. ExamGhost reads Pearson&apos;s exact blue instruction sub-labels (<code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.expression-instruction</code>) on every double-click.
            </>
        ),
        pillars: [
            {
                title: '1. Respects Pearson Blue Formatting Rules',
                desc: (
                    <>
                        Pearson TDX and XL Player prompts always append strict formatting rules in blue italics—such as <strong className="text-[#1a1a1a]">&ldquo;(Type an exact answer, using π as needed)&rdquo;</strong> or <strong className="text-[#1a1a1a]">&ldquo;(Round to four decimal places as needed)&rdquo;</strong>. ExamGhost captures those formatting instructions alongside the math prompt so Explain Mode (<kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+3</kbd>) outputs the exact representation Pearson expects.
                    </>
                ),
                image: '/images/ghost/ghost_card_ai.jpg',
            },
            {
                title: '2. Solves Multi-Part Questions Step by Step',
                desc: (
                    <>
                        Pearson MyLab and Mastering questions often unfold sequentially (<strong className="text-[#1a1a1a]">Part 1 of 4</strong>, <strong className="text-[#1a1a1a]">Part 2 of 4</strong>) inside the same DOM container as you click <em>Check Answer</em>. Double-clicking each newly revealed sub-part re-evaluates the updated container context immediately.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
            {
                title: '3. Alt+S for StatCrunch Popups & Free-Body Diagrams',
                desc: (
                    <>
                        In MyLab Statistics, clicking <em>&ldquo;Click the icon to view the data table&rdquo;</em> opens a floating modal window, while Mastering Physics embeds vector canvases. Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to crop both the modal data table and question prompt in a single sweep.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
        ],
    },
    questionTypesSection: {
        eyebrow: 'MyLab & Mastering Question Formats',
        heading: 'Every Pearson TDX, XL Player & Mastering Widget Supported',
        lead: (
            <>
                Unlike generic Chrome extensions (<em>Quiz Wizard</em>, <em>Homework AI</em>) or Pearson&apos;s own built-in Socratic tutor that refuses to give direct exam answers, ExamGhost parses Pearson&apos;s exact <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">.expression-instruction</code> rules and multi-part DOM containers:
            </>
        ),
        items: [
            {
                name: 'MyLab Math Symbolic & Blue-Rule Inputs',
                codeTag: 'TDX / DoHomework.aspx',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.8%',
                description: (
                    <>
                        Extracts both the randomized equation and Pearson&apos;s blue formatting tag (e.g., <em>&ldquo;Type an exact fraction, using radicals and i as needed&rdquo;</em>) so you never lose an attempt to a decimal conversion error.
                    </>
                ),
            },
            {
                name: 'MasteringPhysics Symbolic Vectors & Free-Body Canvases',
                codeTag: 'Mastering itemView',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: '99.4%',
                description: (
                    <>
                        Evaluates multi-part MasteringPhysics derivations (<code className="font-mono text-xs">Part A → Part D</code>) in terms of exact allowed variables (e.g., <code className="font-mono text-xs">m_1, v_0, \theta, g</code>) and vector angle orientations.
                    </>
                ),
            },
            {
                name: 'MyLab Statistics Data Modal & StatCrunch Tables',
                codeTag: 'XL Data Popup Modal',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.6%',
                description: (
                    <>
                        Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> over any popped-open sample data table or critical-value distribution chart to compute exact t-statistics, p-values, ANOVA F-ratios, and regression slopes rounded to 4 decimals.
                    </>
                ),
            },
            {
                name: 'MasteringChemistry Skeletal Structures & Sig-Figs',
                codeTag: 'MarvinJS / ±2% Tolerance',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.2%',
                description: (
                    <>
                        Enforces MasteringChemistry&apos;s strict significant-figure grader (<code className="font-mono text-xs">±2%</code> rounding threshold) and guides skeletal organic structure, curved-arrow mechanism, and orbital box inputs.
                    </>
                ),
            },
            {
                name: 'MyLab Accounting Multi-Line Journal & Ledger Grids',
                codeTag: 'TDX Accounting Grid',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.3%',
                description: (
                    <>
                        Reads Pearson MyLab Accounting dropdown account titles and debit/credit columns, ensuring multi-step adjusting entries and financial statements balance on your first check.
                    </>
                ),
            },
            {
                name: 'MasteringBiology Sorting, Labeling & Pedigree Trees',
                codeTag: 'Mastering Drag-and-Drop',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.5%',
                description: (
                    <>
                        Maps every draggable bin label, metabolic pathway arrow, and Hardy-Weinberg pedigree target inside MasteringBiology without leaving the <code className="font-mono text-xs">itemView</code> tab.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: 'Pearson TDX & Mastering Telemetry Audit',
        heading: 'What Professors See in Pearson MyLab & Mastering Gradebook Logs',
        lead: (
            <>
                When you open a quiz or test in Pearson MyLab (<code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">PlayerTest.aspx?centerwin=yes</code>) or Mastering, Pearson logs per-item metrics on its backend and syncs grades via LTI 1.3 to Canvas, Blackboard, or Brightspace. Here is what instructors can see:
            </>
        ),
        citationNote: 'Audited on Pearson TDX Player & Mastering 2026',
        logTableTitle: 'pearson_tdx_mastering_forensics — Instructor Gradebook View',
        events: [
            {
                eventCode: 'PlayerTest.aspx Window Focus State',
                whenTriggered: 'Clicking outside Pearson’s chromeless popup window to switch to another browser or tab',
                professorView: 'Fires window.onblur in parent LMS LTI wrapper or locks test if Browser Lock is enabled',
                examghostStatus: '0 Blur Events (Stays Inside Popup)',
                isSafe: true,
            },
            {
                eventCode: 'Time Spent & Number of Attempts per Part',
                whenTriggered: 'Clicking "Check Answer" or "Final Check" on Part A, Part B, etc.',
                professorView: 'Instructor Item Analysis shows minutes spent per question and number of wrong tries before correct',
                examghostStatus: '1st-Try Correct at Natural Pace',
                isSafe: true,
            },
            {
                eventCode: 'Help Me Solve This / View an Example Usage',
                whenTriggered: 'Clicking Pearson’s built-in learning aids during homework',
                professorView: 'Logs learning-aid usage in MyLab Gradebook (and marks problem for regeneration in some modes)',
                examghostStatus: 'Solved Without Triggering Aid Penalty',
                isSafe: true,
            },
            {
                eventCode: 'Mastering Wrong-Answer Deduction Log',
                whenTriggered: 'Submitting an unsimplified expression or wrong sig-figs in MasteringPhysics/Chemistry',
                professorView: 'Deducts 3%–5% credit per wrong attempt and records every submitted wrong string',
                examghostStatus: 'Verified Blue-Rule Syntax Before Submit',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why Pearson Item Analysis Flags Instant Bulk-Submission Scripts',
        whyNoSolveAllBody: (
            <>
                Pearson&apos;s instructor <strong>Item Analysis</strong> dashboard displays the exact median time spent per question across the class alongside each individual student&apos;s duration (e.g., <em>Class Average: 4m 12s | Student Time: 0m 05s</em>). Extensions or scripts that bulk-solve an entire Pearson test in seconds create an unmistakable statistical outlier. With ExamGhost, you double-click and work through one question (and one multi-part sub-step) at a time at natural human pacing.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Pearson Workflow',
        heading: 'How to Solve Pearson MyLab & Mastering Questions With Exact Formatting',
        lead: (
            <>
                Use this 4-step workflow inside Pearson&apos;s <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">DoHomework.aspx</code>, <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">PlayerTest.aspx</code> popup, or Mastering <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">itemView</code>:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Launch Your Pearson MyLab or Mastering Assignment',
                shortcutBadge: 'Works in PlayerTest Popup',
                description: (
                    <>
                        Open your assignment from Canvas, Blackboard, D2L, or <code className="font-mono text-xs">mlm.pearson.com</code>. Even when Pearson opens a chromeless popup window (<code className="font-mono text-xs">centerwin=yes</code>), ExamGhost mounts automatically inside the popup&apos;s Closed Shadow DOM.
                    </>
                ),
                plainTextForSchema:
                    'Open your Pearson MyLab or Mastering assignment from your LMS or mlm.pearson.com. ExamGhost automatically mounts inside Pearson PlayerTest.aspx popup windows.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click the Question Stem (Including the Blue Formatting Rule)',
                shortcutBadge: 'Double-Click Part A',
                description: (
                    <>
                        Double-click anywhere on the active question part. ExamGhost reads the randomized numbers <strong>and</strong> Pearson&apos;s blue italicized instruction (such as <em>&ldquo;Type an integer or a simplified fraction&rdquo;</em>) so the returned answer matches the exact grader format.
                    </>
                ),
                plainTextForSchema:
                    'Double-click the active Pearson question part to extract both the randomized numbers and Pearson blue italicized formatting rule.',
            },
            {
                stepNumber: '3',
                title: 'Press Alt+S to Capture StatCrunch Data Tables & Physics Diagrams',
                shortcutBadge: 'Alt + S (Vision OCR)',
                description: (
                    <>
                        If the problem includes a popped-up MyLab Statistics data table, a MasteringPhysics free-body diagram, or an organic chemistry structure, press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> and drag across both the diagram and the prompt.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S and drag across any MyLab Statistics floating data table, MasteringPhysics diagram, or chemistry structure to solve visual elements instantly.',
            },
            {
                stepNumber: '4',
                title: 'Double-Click Each Newly Revealed Sub-Part (Part 2, Part 3)',
                shortcutBadge: 'Sequential Multi-Part',
                description: (
                    <>
                        After entering Part 1 and clicking <em>Check Answer</em>, Pearson dynamically reveals Part 2 inside the same card. Simply double-click the newly revealed sub-part to solve it with full memory of Part 1&apos;s values.
                    </>
                ),
                plainTextForSchema:
                    'When Pearson reveals Part 2 or Part 3 after checking Part 1, double-click the newly revealed sub-part to solve it with full context.',
            },
        ],
    },
    courseModulesSection: {
        eyebrow: 'Supported Pearson Textbook Systems',
        heading: 'Top University Pearson MyLab & Mastering Courses Covered',
        lead: (
            <>
                ExamGhost is continuously benchmarked against Pearson&apos;s highest-enrollment STEM and business courseware platforms:
            </>
        ),
        modules: [
            {
                department: 'Mathematics & Calculus (MyLab Math)',
                courseCodes: 'MATH-110 / MATH-151 / MATH-251',
                textbooksOrModules: 'Thomas’ Calculus, Briggs Calculus, Blitzer College Algebra, Sullivan Precalculus',
                keyChallengeSolved:
                    'Eliminates wrong-format penalties by strictly obeying Pearson’s blue instruction tags (exact fractions, π symbolic notation, interval notation, and matrix grids).',
            },
            {
                department: 'Statistics & Data Science (MyLab Statistics)',
                courseCodes: 'STAT-201 / BUS-230 / PSYC-210',
                textbooksOrModules: 'Triola Elementary Statistics, Sullivan Statistics, Sharpe Business Statistics + StatCrunch',
                keyChallengeSolved:
                    'Reads floating data tables and z/t/chi-square critical value charts via Alt+S to compute exact 4-decimal confidence intervals, test statistics, and p-values.',
            },
            {
                department: 'Physics & Engineering (MasteringPhysics & MasteringEngineering)',
                courseCodes: 'PHYS-201 / PHYS-202 / ENGR-210',
                textbooksOrModules: 'Young & Freedman University Physics, Knight Physics for Scientists & Engineers, Hibbeler Statics',
                keyChallengeSolved:
                    'Derives symbolic multi-variable expressions using only the exact subscripted variables permitted by Mastering’s symbolic grader and solves 3D free-body moments.',
            },
            {
                department: 'Chemistry, Biology & Accounting (Mastering & MyLab)',
                courseCodes: 'CHEM-111 / BIOL-101 / ACCT-211',
                textbooksOrModules: 'Tro Chemistry, Brown/LeMay Central Science, Campbell Biology 13e, Horngren’s Accounting',
                keyChallengeSolved:
                    'Enforces ±2% significant-figure rules in MasteringChemistry, solves Campbell Biology pedigree/sorting items, and balances Horngren MyLab Accounting ledgers.',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Pearson TDX & Mastering Audit',
        heading: 'ExamGhost vs. Tab-Switching & Generic Extensions on Pearson',
        windowTitle: 'pearson_mylab_mastering_audit.csv — Verified Comparison',
        windowBadge: 'TDX Player • MyLab • Mastering',
        rows: [
            {
                capability: (
                    <>
                        Follows Pearson blue instruction tags (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">exact fraction</code> vs. <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">round to 4 decimal places</code>)
                    </>
                ),
                examghost: 'Yes (Automatic Rule Extraction)',
                chatgpt: 'Frequently Outputs Wrong Format',
                sidebar: 'Ignores Sub-Label Instructions',
            },
            {
                capability: (
                    <>
                        Works inside Pearson popup windows (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">PlayerTest.aspx?centerwin=yes</code>)
                    </>
                ),
                examghost: 'Yes (Zero Window Blur)',
                chatgpt: 'Requires Leaving Popup Window',
                sidebar: 'Fails to Mount in Chromeless Popup',
            },
            {
                capability: 'Captures MyLab Statistics floating data tables & critical-value charts',
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Tedious Manual Row Copying',
                sidebar: 'Cannot Read Floating Modal Tables',
            },
            {
                capability: 'Sequential multi-part support (Part A → Part B → Part C)',
                examghost: 'Double-Click Each Revealed Part',
                chatgpt: 'Loses Context Across Sub-Parts',
                sidebar: 'Stuck on Initial DOM Snapshot',
            },
            {
                capability: 'Canvas / Blackboard LTI 1.3 focus state preservation',
                examghost: '100% Maintained',
                chatgpt: 'Logs Blur Events on Every Switch',
                sidebar: 'Injects Detectable Sidebar DOM',
            },
        ],
    },
    faqSubtitle:
        'Everything you need to know about Pearson MyLab Math, MyLab Statistics, Mastering Physics/Chemistry, and PlayerTest.aspx focus logs.',
    faqs: [
        {
            category: 'stealth',
            q: 'Does Pearson MyLab or Mastering detect tab switching or new windows?',
            a: (
                <>
                    When you launch a Pearson MyLab test (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">PlayerTest.aspx?centerwin=yes</code>), Pearson opens the assessment in a dedicated popup window and tracks time spent per question. If your instructor links Pearson through Canvas or Blackboard or enables browser focus tracking, clicking outside the popup window fires <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code>. ExamGhost runs directly inside the Pearson popup window so focus is never lost.
                </>
            ),
            plainTextAnswer:
                'When you launch a Pearson MyLab test (PlayerTest.aspx?centerwin=yes), Pearson opens the assessment in a dedicated popup window and tracks time spent per question. If your instructor links Pearson through Canvas or Blackboard or enables browser focus tracking, clicking outside the popup window fires window.blur. ExamGhost runs directly inside the Pearson popup window so focus is never lost.',
        },
        {
            category: 'stealth',
            q: 'Can Pearson MyLab detect the ExamGhost Chrome extension?',
            a: (
                <>
                    No. In a standard Chrome, Brave, or Edge browser session, Pearson&apos;s TDX Player JavaScript is sandboxed by the browser and cannot scan your installed extensions. ExamGhost uses Chrome&apos;s Manifest V3 isolated world and never injects noisy sidebars or watermarks into Pearson&apos;s page structure.
                </>
            ),
            plainTextAnswer:
                'No. In a standard Chrome, Brave, or Edge browser session, Pearson TDX Player JavaScript is sandboxed by the browser and cannot scan your installed extensions. ExamGhost uses Chrome Manifest V3 isolated world and never injects noisy sidebars or watermarks into Pearson page structure.',
        },
        {
            category: 'ocr',
            q: 'How does ExamGhost prevent Pearson MyLab rounding and syntax errors?',
            a: (
                <>
                    Pearson MyLab is notorious for marking mathematically correct answers wrong if you enter <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">0.333</code> instead of <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">1/3</code>. When you double-click a Pearson question or use <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>, ExamGhost reads the blue sub-instruction below the input box and formats the final answer in both exact symbolic form and rounded decimal precision.
                </>
            ),
            plainTextAnswer:
                'Pearson MyLab is notorious for marking mathematically correct answers wrong if you enter 0.333 instead of 1/3. When you double-click a Pearson question or use Alt+S, ExamGhost reads the blue sub-instruction below the input box and formats the final answer in both exact symbolic form and rounded decimal precision.',
        },
        {
            category: 'ocr',
            q: 'How do I solve MyLab Statistics problems that have popup data tables?',
            a: (
                <>
                    Click the Pearson icon to open the data table or critical-value popup directly next to the question prompt, switch ExamGhost to <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong>, and press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to drag a selection box over both the question and the open data table. ExamGhost computes test statistics ($t$, $z$, $\chi^2$, $F$), $p$-values, and confidence intervals to 4+ decimal places.
                </>
            ),
            plainTextAnswer:
                'Click the Pearson icon to open the data table or critical-value popup directly next to the question prompt, switch ExamGhost to Explain Mode (Alt+3), and press Alt+S to drag a selection box over both the question and the open data table. ExamGhost computes test statistics (t, z, chi-square, F), p-values, and confidence intervals to 4+ decimal places.',
        },
        {
            category: 'ocr',
            q: 'Does ExamGhost work with Mastering Physics, Mastering Chemistry, and Mastering Biology?',
            a: (
                <>
                    Yes. Mastering courses (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">session.masteringphysics.com</code>, <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">session.masteringchemistry.com</code>) use multi-part <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">itemView</code> pages with vector diagrams, circuit schematics, and skeletal structures. Use double-click for text/multiple-choice parts and <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> for any figure-based calculation.
                </>
            ),
            plainTextAnswer:
                'Yes. Mastering courses (session.masteringphysics.com, session.masteringchemistry.com) use multi-part itemView pages with vector diagrams, circuit schematics, and skeletal structures. Use double-click for text/multiple-choice parts and Alt+S for any figure-based calculation.',
        },
        {
            category: 'workflow',
            q: 'How do I solve multi-part Pearson questions (Part 1 of 4, Part 2 of 4)?',
            a: (
                <>
                    In Pearson TDX Player, Part 2 remains locked until Part 1 is submitted. Simply double-click Part 1 to get its answer, enter it, and once Part 2 expands in the DOM, double-click Part 2—ExamGhost automatically reads your Part 1 values so subsequent parts stay 100% consistent with your randomized numbers.
                </>
            ),
            plainTextAnswer:
                'In Pearson TDX Player, Part 2 remains locked until Part 1 is submitted. Simply double-click Part 1 to get its answer, enter it, and once Part 2 expands in the DOM, double-click Part 2—ExamGhost automatically reads your Part 1 values so subsequent parts stay 100% consistent with your randomized numbers.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work when Pearson LockDown Browser is required?',
            a: (
                <>
                    No. Pearson LockDown Browser (powered by Respondus) is a separate desktop application that blocks all Chrome extensions. ExamGhost works on all Pearson MyLab and Mastering homework, quizzes, and tests launched inside standard <strong className="text-[#1a1a1a]">Chrome, Brave, or Edge</strong> browsers.
                </>
            ),
            plainTextAnswer:
                'No. Pearson LockDown Browser (powered by Respondus) is a separate desktop application that blocks all Chrome extensions. ExamGhost works on all Pearson MyLab and Mastering homework, quizzes, and tests launched inside standard Chrome, Brave, or Edge browsers.',
        },
        {
            category: 'workflow',
            q: 'Can I test the Pearson MyLab & Mastering solver before installing?',
            a: (
                <>
                    Yes! Scroll up to our interactive <strong className="text-[#1a1a1a]">Pearson TDX &amp; Mastering Simulator</strong> to test one-by-one double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> incline pulley OCR, and all three stealth modes right in your browser.
                </>
            ),
            plainTextAnswer:
                'Yes! Scroll up to our interactive Pearson TDX & Mastering Simulator to test one-by-one double-click solving, Alt+S incline pulley OCR, and all three stealth modes right in your browser.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/pearson-mylab-mastering-solver/#webpage',
                url: 'https://examghost.com/pearson-mylab-mastering-solver',
                name: 'Pearson MyLab & Mastering Solver | Math, Statistics, Physics & Chem | ExamGhost',
                description:
                    'Interactive Pearson MyLab Math, MyLab Statistics, and Mastering Physics/Chemistry solver demo and technical guide.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#pearson-mylab-mastering-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost Pearson MyLab & Mastering Solver',
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
                        name: 'Pearson MyLab & Mastering Solver',
                        item: 'https://examghost.com/pearson-mylab-mastering-solver',
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

export default function PearsonMyLabMasteringSolverPage() {
    const config = pearsonConfig;
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
                    <PearsonMyLabMasteringDemo />

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
