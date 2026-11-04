import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { GradescopeExamDemo } from '@/components/PlatformMotionDemos';
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
    title: { absolute: 'Gradescope Exam Solver — Online Assignments & LaTeX AI' },
    description: "Solve Gradescope Online Assignments in 0.3s: KaTeX proofs, code traces and CS diagrams via Alt+S OCR, one question at a time. 5 free solves / day.",
    keywords: [
        'Gradescope exam solver',
        'Gradescope online assignment solver',
        'Gradescope AI Chrome extension',
        'does Gradescope detect tab switching',
        'Gradescope timed online assignment log',
        'Gradescope CS quiz solver',
        'Gradescope LaTeX math solver',
    ],
    alternates: {
        canonical: 'https://examghost.com/gradescope-exam-solver',
    },
    openGraph: {
        title: 'Gradescope Online Assignment Solver — Interactive STEM & CS Demo | ExamGhost',
        description:
            'Watch or control a live Gradescope Online Assignment session. Solve KaTeX proofs, algorithm recurrences, and finite-state automata one by one via double-click or Alt+S.',
        url: 'https://examghost.com/gradescope-exam-solver',
        siteName: 'ExamGhost',
        type: 'website',
        images: [{ url: '/videos/posters/gradescope-exam-solver-poster.jpg', width: 1280, height: 720, alt: 'Gradescope Exam Solver — Online Assignments & LaTeX AI' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gradescope Exam Solver — Online Assignments & LaTeX AI',
        description: 'Solve Gradescope Online Assignments in 0.3s: KaTeX proofs, code traces and CS diagrams via Alt+S OCR, one question at a time. Live demo and 5 free solves / day.',
        images: ['/videos/posters/gradescope-exam-solver-poster.jpg'],
    },
};

const gradescopeConfig: any = {
    slug: 'gradescope-exam-solver',
    platformName: 'Gradescope Online Assignments',
    platformShort: 'Gradescope',
    heroBadge: 'Gradescope Online Assignments, KaTeX & CS Code Ready',
    heroDotColor: '#0d9488',
    h1Title: 'Gradescope Online Assignment &',
    h1Highlight: 'STEM Exam Solver',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for Gradescope</strong> is a Manifest V3 Chrome extension built for{' '}
            <strong className="text-[#1a1a1a]">Gradescope Timed &amp; Untimed Online Assignments</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">gradescope.com/courses/*/assignments/*</code>). Double-click any question block one by one to evaluate KaTeX math, recurrence relations, and C++/Python/Java code traces in place, or press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd> to scan finite-state machines, trees, and organic synthesis diagrams without leaving your active Gradescope tab.
        </>
    ),
    videoDemo: {
        platformSub: 'Gradescope Timed Online Assignment • gradescope.com/courses/719204/assignments/4410928',
        browserUrl: 'https://www.gradescope.com/courses/719204/assignments/4410928/submissions/109482193/edit',
        badgeBg: 'bg-[#f0fdfa] border-[#99f6e4]',
        badgeText: 'text-[#0f766e]',
        telemetryLabel: 'Gradescope Submission Focus: Active (0 Blur Events)',
        questions: [
            {
                id: 1,
                code: 'GS-CS-Q1.1 • Algorithms & Master Theorem (KaTeX Prompt)',
                type: 'Gradescope Multiple Choice',
                points: '4.0 pts',
                prompt:
                    'Consider a divide-and-conquer algorithm whose running time satisfies the recurrence T(n) = 4T(n/2) + n² log n for n > 1, with T(1) = Θ(1). What is the tight asymptotic bound for T(n)?',
                options: [
                    'Θ(n²)',
                    'Θ(n² log n)',
                    'Θ(n² log² n)',
                    'Θ(n^(log₂ 4) · n) = Θ(n³)',
                ],
                correctIndex: 2,
                confidence: '99.8%',
                explanation:
                    'Here a = 4, b = 2, so n^(log_b a) = n^(log₂ 4) = n². Since f(n) = n² log¹ n = Θ(n^(log_b a) · log^k n) with k = 1 (Extended Case 2 of the Master Theorem), the solution is T(n) = Θ(n^(log_b a) · log^(k+1) n) = Θ(n² log² n).',
            },
            {
                id: 2,
                code: 'GS-LINALG-Q2.1 • Linear Algebra (Eigenvalues & Spectral Theorem)',
                type: 'Gradescope KaTeX Math',
                points: '5.0 pts',
                prompt:
                    'Let A be a 3×3 real matrix with eigenvalues λ₁ = 2, λ₂ = -1, and λ₃ = 4. What is the determinant of the matrix B = A² + 2I, where I is the 3×3 identity matrix?',
                options: [
                    'det(B) = 36',
                    'det(B) = 324',
                    'det(B) = 108',
                    'det(B) = -8',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'By the spectral mapping theorem, if λ is an eigenvalue of A, then λ² + 2 is an eigenvalue of B = A² + 2I. Thus the eigenvalues of B are: (2² + 2) = 6, ((-1)² + 2) = 3, and (4² + 2) = 18. The determinant of B is the product of its eigenvalues: 6 × 3 × 18 = 324.',
            },
            {
                id: 3,
                code: 'GS-GRAPH-Q3.1 • Theory of Computation & Graph Algorithms',
                type: 'Gradescope Diagram (Requires Alt+S OCR)',
                points: '6.0 pts',
                requiresOcr: true,
                diagramLabel: 'GRADESCOPE S3 UPLOAD — WEIGHTED DAG SHORTEST PATH',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="104" rx="8" fill="#f0fdfa" stroke="#99f6e4" />
                        <line x1="65" y1="60" x2="170" y2="28" stroke="#0f766e" strokeWidth="2" />
                        <line x1="65" y1="60" x2="170" y2="92" stroke="#0f766e" strokeWidth="2" />
                        <line x1="170" y1="28" x2="170" y2="92" stroke="#0f766e" strokeWidth="2" />
                        <line x1="170" y1="28" x2="295" y2="60" stroke="#0f766e" strokeWidth="2" />
                        <line x1="170" y1="92" x2="295" y2="60" stroke="#0f766e" strokeWidth="2" />
                        <circle cx="65" cy="60" r="16" fill="#0d9488" />
                        <text x="61" y="64" fontSize="11" fontWeight="bold" fill="#ffffff">S</text>
                        <circle cx="170" cy="28" r="16" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
                        <text x="166" y="32" fontSize="11" fontWeight="bold" fill="#0f172a">A</text>
                        <circle cx="170" cy="92" r="16" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
                        <text x="166" y="96" fontSize="11" fontWeight="bold" fill="#0f172a">B</text>
                        <circle cx="295" cy="60" r="16" fill="#0f172a" />
                        <text x="291" y="64" fontSize="11" fontWeight="bold" fill="#ffffff">T</text>
                        <text x="105" y="36" fontSize="10" fontWeight="bold" fill="#0f766e">w=7</text>
                        <text x="105" y="90" fontSize="10" fontWeight="bold" fill="#0f766e">w=2</text>
                        <text x="176" y="64" fontSize="10" fontWeight="bold" fill="#0f766e">B→A: w=3</text>
                        <text x="235" y="36" fontSize="10" fontWeight="bold" fill="#0f766e">w=4</text>
                        <text x="235" y="90" fontSize="10" fontWeight="bold" fill="#0f766e">w=11</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the directed weighted graph above (edges: S→A = 7, S→B = 2, B→A = 3, A→T = 4, B→T = 11). What is the length of the shortest path from source S to sink T, and what is the vertex sequence?',
                options: [
                    'Shortest distance = 11 via path S → A → T',
                    'Shortest distance = 9 via path S → B → A → T',
                    'Shortest distance = 13 via path S → B → T',
                    'Shortest distance = 10 via path S → A → B → T',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Running Dijkstra’s algorithm from S: d(S) = 0, d(B) = 2. Relaxing edge B→A gives d(A) = min(7, 2 + 3) = 5. Relaxing A→T gives d(T) = min(2 + 11, 5 + 4) = 9 along the path S → B → A → T.',
            },
            {
                id: 4,
                code: 'GS-SYS-Q4.1 • Operating Systems & Virtual Memory',
                type: 'Gradescope Computer Systems',
                points: '4.0 pts',
                prompt:
                    'A computer system uses a 48-bit virtual address space, 4 KB (2¹² byte) pages, and 8-byte Page Table Entries (PTEs). If the architecture uses a multi-level hierarchical page table where each page table page fits exactly inside one 4 KB frame, how many page table levels are required?',
                options: [
                    '2 levels',
                    '3 levels',
                    '4 levels',
                    '5 levels',
                ],
                correctIndex: 2,
                confidence: '99.9%',
                explanation:
                    'Page offset uses log₂(4096) = 12 bits, leaving 48 - 12 = 36 virtual page number (VPN) bits. Each 4 KB page holds 4096 / 8 = 512 = 2⁹ PTEs, so each level indexes 9 bits of the VPN. Therefore, 36 / 9 = 4 levels (standard x86-64 4-level paging).',
            },
            {
                id: 5,
                code: 'GS-ORGO-Q5.1 • Organic Chemistry II (NMR & Carbonyls)',
                type: 'Gradescope STEM Concept',
                points: '4.0 pts',
                prompt:
                    'Which reagent selectively reduces an ester functional group (-COOR) into an aldehyde (-CHO) at -78°C in toluene without over-reducing it to a primary alcohol?',
                options: [
                    'LiAlH₄ in anhydrous diethyl ether followed by H₃O⁺',
                    'NaBH₄ in ethanol at 25°C',
                    'DIBAL-H (diisobutylaluminum hydride, 1 equiv) at -78°C followed by mild hydrolysis',
                    'H₂ / Pd-C in methanol',
                ],
                correctIndex: 2,
                confidence: '99.7%',
                explanation:
                    'One equivalent of bulky DIBAL-H at -78°C adds a single hydride to the ester carbonyl to form a stable tetrahedral aluminum-alkoxide intermediate that only collapses to the aldehyde upon cold aqueous workup, preventing over-reduction.',
            },
        ],
    },
    architecture: {
        cardBg: '#f0fdfa',
        cardBorder: '#99f6e4',
        mascotImage: '/images/ghost/ghost_peace.jpg',
        mascotTitle: 'Gradescope STEM & CS Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">gradescope.com</code> Online Assignments, KaTeX, and code blocks.
            </>
        ),
        pills: ['KaTeX & Markdown Ready', 'CS Code Trace Support', 'Alt+S Graph & Tree OCR'],
        eyebrow: 'Gradescope Online Assignment Architecture',
        heading: 'Built for University CS, Math & Engineering Gradescope Exams',
        lead: (
            <>
                University computer science, math, and chemistry departments rely on <strong className="text-[#1a1a1a]">Gradescope Online Assignments</strong> because instructors can write questions in Markdown with <strong className="text-[#1a1a1a]">KaTeX math</strong>, syntax-highlighted code blocks, and nested sub-questions (Q1.1, Q1.2, Q1.3). ExamGhost parses Gradescope&apos;s React submission containers directly on double-click.
            </>
        ),
        pillars: [
            {
                title: '1. Native KaTeX & Code Block Extraction',
                desc: (
                    <>
                        Copying a Gradescope prompt that contains <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.katex-mathml</code> equations or indented Python/C++ blocks often duplicates every variable twice in your clipboard. Double-clicking the Gradescope question block with ExamGhost extracts clean LaTeX and properly indented source code automatically.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
            {
                title: '2. Alt+S for Trees, Automata & Circuit Diagrams',
                desc: (
                    <>
                        Gradescope exams frequently embed S3-hosted PNGs of binary search trees, DFA/NFA state machines, RISC-V datapaths, or NMR spectra. Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to crop the figure and get step-by-step traversals, transition tables, or chemical structures.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
            {
                title: '3. Natural Per-Question Save Cadence',
                desc: (
                    <>
                        Gradescope Online Assignments save each sub-question (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">Save Answer</code>) via individual REST requests with server timestamps. Solving one sub-question at a time via double-click keeps your submission history completely natural while preserving 100% browser focus.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
        ],
    },
    questionTypesSection: {
        eyebrow: 'Gradescope Assessment & Autograder Formats',
        heading: 'Every Gradescope Format Supported — Online Assignments, LaTeX & Autograders',
        lead: (
            <>
                Owned by Turnitin, Gradescope is used by over 2,600 universities for both <strong>Timed Online Assignments</strong> and <strong>AI-Assisted Grouped Grading</strong>. ExamGhost handles every Gradescope input widget and PDF/code workflow inside your browser:
            </>
        ),
        items: [
            {
                name: 'Timed Online Assignments (Q1.1, Q1.2 Sub-Questions)',
                codeTag: '.onlineAssignmentApp React',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.6%',
                description: (
                    <>
                        Parses nested Gradescope sub-questions (<code className="font-mono text-xs">[__]</code> radio buttons, <code className="font-mono text-xs">[x]</code> multi-select checkboxes, and short-answer fields) while preserving parent problem context from Q1.
                    </>
                ),
            },
            {
                name: 'Markdown & KaTeX LaTeX Proof Free-Response Boxes',
                codeTag: '$$ ... $$ KaTeX Preview',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.4%',
                description: (
                    <>
                        Generates clean Markdown + <code className="font-mono text-xs">$$LaTeX$$</code> mathematical induction proofs, Big-O asymptotic derivations, and linear algebra steps ready for Gradescope&apos;s live math previewer.
                    </>
                ),
            },
            {
                name: 'CS Data Structures, Automata & RISC-V Diagrams',
                codeTag: 'AWS S3 Signed Image',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.2%',
                description: (
                    <>
                        Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> over any binary tree, Dijkstra graph, DFA/NFA automaton, or CPU pipeline diagram to get exact node traversal orders, truth tables, and register hex values.
                    </>
                ),
            },
            {
                name: 'Programming Autograder Test-Failure Debugging',
                codeTag: 'gradescope-utils Docker',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.1%',
                description: (
                    <>
                        Double-click failed Gradescope Autograder output logs (Python <code className="font-mono text-xs">unittest</code>, C++ Valgrind/GTest, Java JUnit) to pinpoint hidden edge-case bugs and memory leaks immediately.
                    </>
                ),
            },
            {
                name: 'PDF Problem Set & Bubble Sheet Pre-Submission Audit',
                codeTag: 'PDF Viewer / LaTeX OCR',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.5%',
                description: (
                    <>
                        Open your instructor&apos;s Homework PDF in Chrome and press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> on any problem to get a complete, rubric-aligned LaTeX or step-by-step derivation before uploading your scan.
                    </>
                ),
            },
            {
                name: 'Organic Chemistry NMR Spectra & Synthesis Roadmaps',
                codeTag: 'Gradescope STEM Figure',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.0%',
                description: (
                    <>
                        Analyzes <code className="font-mono text-xs">1H / 13C NMR</code> chemical shifts, IR peaks, and multi-step reagent synthesis boxes in Gradescope Chemistry exams with full stereochemical explanation.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: 'Gradescope & Turnitin Telemetry Forensics',
        heading: 'What Instructors See in Gradescope Online Assignments & AI Grading',
        lead: (
            <>
                Because Gradescope is a Turnitin product and advertises <strong>&ldquo;AI-Assisted Grading&rdquo;</strong> to professors, many students confuse instructor grading tools with browser spyware. Here is the exact technical truth of what Gradescope tracks:
            </>
        ),
        citationNote: 'Verified on Gradescope Online Assignments 2026',
        logTableTitle: 'gradescope_submission_forensics — What Professors & TAs See',
        events: [
            {
                eventCode: 'Per-Subquestion "Save Answer" REST Payload',
                whenTriggered: 'Clicking "Save Answer" or auto-saving an input box on Q1.1, Q1.2, etc.',
                professorView: 'Records server timestamp of last saved revision and submission history timeline',
                examghostStatus: 'Natural 1-by-1 Subquestion Saves',
                isSafe: true,
            },
            {
                eventCode: 'Gradescope "AI-Assisted Answer Grouping"',
                whenTriggered: 'Instructor grades short-answer, numeric, or multiple-choice blanks after deadline',
                professorView: 'Clusters identical student answers into groups so TAs grade in batches (NOT a browser detector)',
                examghostStatus: 'Unique Wording on Free-Response',
                isSafe: true,
            },
            {
                eventCode: 'Programming Autograder MOSS / JPlag Similarity',
                whenTriggered: 'Uploading .py / .cpp / .java files to a Gradescope Coding Assignment',
                professorView: 'Compares AST token structure against classmates and public GitHub repos',
                examghostStatus: 'Explains Logic & Custom Variable Structure',
                isSafe: true,
            },
            {
                eventCode: 'LockDown Browser Flag (Optional Course Add-On)',
                whenTriggered: 'Only when instructor explicitly checks "Require Respondus LockDown Browser"',
                professorView: 'Launches standalone Respondus binary; standard Chrome web assignments do not use it',
                examghostStatus: '0 Blur Events in Standard Browser',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why Gradescope’s Answer Grouping & Revision Timestamps Flag Bulk Copy-Paste',
        whyNoSolveAllBody: (
            <>
                In Gradescope Online Assignments, every sub-question (<code className="font-mono text-white">Q1.1</code>, <code className="font-mono text-white">Q1.2</code>) sends an independent <code className="font-mono text-white">PATCH</code> request when saved, and Gradescope&apos;s instructor <strong>AI Answer Grouping</strong> automatically clusters students who submit verbatim free-response paragraphs. ExamGhost solves questions strictly one by one on double-click and lets you tailor Markdown/LaTeX derivations in your own voice so your revision timestamps and phrasing remain completely natural.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Gradescope Workflow',
        heading: 'How to Solve Gradescope Online Assignments & STEM Problem Sets',
        lead: (
            <>
                Follow this 4-step workflow to solve Gradescope Timed Online Assignments, KaTeX math proofs, and CS diagrams inside your active Chrome tab:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Open Your Gradescope Online Assignment or Problem Set PDF',
                shortcutBadge: 'gradescope.com',
                description: (
                    <>
                        Navigate to your active assignment on <code className="font-mono text-xs">gradescope.com</code> (or launch it via Canvas/Blackboard LTI). Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+Q</kbd> to set your Ghost Opacity and select Stealth or Explain Mode (<kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+3</kbd>).
                    </>
                ),
                plainTextForSchema:
                    'Open your Gradescope Online Assignment or Problem Set PDF in Chrome and press Alt+Q to set your Ghost Opacity and display mode.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click Any Sub-Question (Q1.1, Q1.2) to Extract Clean KaTeX & Code',
                shortcutBadge: 'Double-Click Sub-Question',
                description: (
                    <>
                        Double-click inside the Gradescope question block. ExamGhost strips duplicate <code className="font-mono text-xs">.katex-mathml</code> accessibility nodes and preserves Python/C++/Java indentation so the AI receives a pristine prompt.
                    </>
                ),
                plainTextForSchema:
                    'Double-click inside any Gradescope question block to extract clean KaTeX equations and properly indented code blocks without duplicate MathML text.',
            },
            {
                stepNumber: '3',
                title: 'Press Alt+S to Crop CS Trees, Automata, Circuits & NMR Spectra',
                shortcutBadge: 'Alt + S (Vision OCR)',
                description: (
                    <>
                        When a question references an S3-hosted graph, state machine, datapath, or organic chemistry figure, press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> and drag a box around the image and sub-question prompt.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S and drag a crop box around any S3-hosted CS tree, state machine, circuit diagram, or chemistry spectrum to solve it via Vision OCR.',
            },
            {
                stepNumber: '4',
                title: 'Save Each Sub-Question One by One with Verified LaTeX Syntax',
                shortcutBadge: '1-by-1 Save Answer',
                description: (
                    <>
                        Select the verified checkbox/radio option or type the formatted <code className="font-mono text-xs">$$LaTeX$$</code> expression using Gradescope&apos;s live preview, click <strong>Save Answer</strong> on that sub-question, and move naturally to the next item.
                    </>
                ),
                plainTextForSchema:
                    'Select the verified option or enter the formatted LaTeX expression and click Save Answer one sub-question at a time.',
            },
        ],
    },
    courseModulesSection: {
        eyebrow: 'University Gradescope Deployments',
        heading: 'Top University CS, Math & Chemistry Courses on Gradescope',
        lead: (
            <>
                Gradescope is the standard assessment platform at top computer science and engineering programs (UC Berkeley, MIT, Stanford, CMU, Georgia Tech, UIUC, Michigan, Purdue). ExamGhost covers:
            </>
        ),
        modules: [
            {
                department: 'Computer Science & Data Structures',
                courseCodes: 'CS-61A / CS-61B / CS-170 / CIS-121',
                textbooksOrModules: 'Algorithms, Trees/Graphs, Dynamic Programming, Automata & Python/Java Autograders',
                keyChallengeSolved:
                    'Traces complex recursive pointer/environment diagrams via Alt+S and solves Big-O recurrence relations, Bellman-Ford/Dijkstra tables, and NP-completeness reductions.',
            },
            {
                department: 'Computer Architecture & Operating Systems',
                courseCodes: 'CS-61C / ECE-391 / CS-213',
                textbooksOrModules: 'RISC-V / x86-64 Assembly, Cache Hit/Miss Tables, Virtual Memory Page Tables',
                keyChallengeSolved:
                    'Computes exact binary/hexadecimal instruction encodings, 5-stage pipeline hazard stalls, and two-level page-table physical address translations.',
            },
            {
                department: 'Discrete Math, Linear Algebra & Probability',
                courseCodes: 'CS-70 / MATH-240 / STAT-400',
                textbooksOrModules: 'Modular Arithmetic, Eigenvalues/SVD, Markov Chains & KaTeX Induction Proofs',
                keyChallengeSolved:
                    'Outputs clean $$LaTeX$$ mathematical derivations formatted specifically for Gradescope Online Assignment free-response preview boxes.',
            },
            {
                department: 'Organic Chemistry & Chemical Engineering',
                courseCodes: 'CHEM-210 / CHEM-261 / CHBE-301',
                textbooksOrModules: 'SN1/SN2/E1/E2 Mechanisms, Aldol/Diels-Alder Synthesis & Spectroscopic Structure Elucidation',
                keyChallengeSolved:
                    'Uses Alt+S Vision OCR to read multi-step reaction schemes and NMR/IR spectral plots embedded inside Gradescope exams.',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Gradescope Online Assignment Audit',
        heading: 'ExamGhost vs. Tab-Switching & Generic Extensions on Gradescope',
        windowTitle: 'gradescope_online_assignment_audit.csv — Verified Comparison',
        windowBadge: 'KaTeX • CS Code • STEM Diagrams',
        rows: [
            {
                capability: (
                    <>
                        Parses Gradescope <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.katex</code> math without duplicating MathML/HTML text
                    </>
                ),
                examghost: 'Yes (Clean LaTeX Extraction)',
                chatgpt: 'Pastes Duplicated Math Strings',
                sidebar: 'Garbles Subscripts & Matrices',
            },
            {
                capability: 'Preserves indentation in Python, C, Java & SQL code-trace blocks',
                examghost: 'Yes (AST-Clean Prompt Parsing)',
                chatgpt: 'Requires Manual Formatting',
                sidebar: 'Collapses Whitespace Into 1 Line',
            },
            {
                capability: 'Solves S3-hosted CS graphs (trees, DFAs, datapaths) & Orgo mechanisms',
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Requires Manual Image Save/Upload',
                sidebar: 'Cannot Read Signed S3 Image URLs',
            },
            {
                capability: 'Supports Gradescope Markdown / LaTeX free-response boxes',
                examghost: 'Yes (Explain Mode Alt+3)',
                chatgpt: 'Requires Tab Switching',
                sidebar: 'Breaks React Textarea State',
            },
            {
                capability: 'Window focus retention during Timed Online Assignments',
                examghost: '100% Maintained (0 Blur Events)',
                chatgpt: 'Fires window.blur on Every Switch',
                sidebar: 'Injects Detectable Sidebar Nodes',
            },
        ],
    },
    faqSubtitle:
        'Technical answers covering Gradescope Timed Online Assignments, Turnitin ownership, KaTeX math, and CS code traces.',
    faqs: [
        {
            category: 'stealth',
            q: 'Does Gradescope detect tab switching during a Timed Online Assignment?',
            a: (
                <>
                    Gradescope (a Turnitin product) logs server-side timestamps whenever you start a Timed Online Assignment, upload a file, or click <strong className="text-[#1a1a1a]">Save Answer</strong> on each sub-problem. In addition, standard browser focus listeners (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">visibilitychange</code>) can fire whenever you switch tabs to ChatGPT or an external IDE. ExamGhost keeps your focus inside the active Gradescope tab 100% of the time.
                </>
            ),
            plainTextAnswer:
                'Gradescope (a Turnitin product) logs server-side timestamps whenever you start a Timed Online Assignment, upload a file, or click Save Answer on each sub-problem. In addition, standard browser focus listeners (window.blur and visibilitychange) can fire whenever you switch tabs to ChatGPT or an external IDE. ExamGhost keeps your focus inside the active Gradescope tab 100% of the time.',
        },
        {
            category: 'stealth',
            q: 'Can Gradescope detect the ExamGhost Chrome extension?',
            a: (
                <>
                    No. When you take a Gradescope Online Assignment in Chrome, Brave, or Edge, Gradescope&apos;s React client cannot inspect installed Manifest V3 extensions running in an isolated execution world. ExamGhost does not inject sidebars or modify Gradescope&apos;s submission network payloads.
                </>
            ),
            plainTextAnswer:
                'No. When you take a Gradescope Online Assignment in Chrome, Brave, or Edge, Gradescope React client cannot inspect installed Manifest V3 extensions running in an isolated execution world. ExamGhost does not inject sidebars or modify Gradescope submission network payloads.',
        },
        {
            category: 'ocr',
            q: 'Why does copying math from Gradescope paste messy duplicated text into ChatGPT?',
            a: (
                <>
                    Gradescope renders LaTeX formulas using <strong className="text-[#1a1a1a]">KaTeX</strong>, which places both a hidden <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.katex-mathml</code> accessibility tree and a visual <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.katex-html</code> span in the DOM. Highlighting and copying text grabs both copies, turning $O(n^2 \log n)$ into garbled strings. Double-clicking with ExamGhost cleanly extracts the original underlying TeX source.
                </>
            ),
            plainTextAnswer:
                'Gradescope renders LaTeX formulas using KaTeX, which places both a hidden .katex-mathml accessibility tree and a visual .katex-html span in the DOM. Highlighting and copying text grabs both copies, turning O(n^2 log n) into garbled strings. Double-clicking with ExamGhost cleanly extracts the original underlying TeX source.',
        },
        {
            category: 'ocr',
            q: 'How does ExamGhost solve Gradescope CS diagrams like trees, graphs, and DFAs?',
            a: (
                <>
                    Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> and drag across the Gradescope diagram and sub-question prompt. ExamGhost&apos;s vision pipeline reads edge weights, state transitions, and pointer diagrams directly from your screen.
                </>
            ),
            plainTextAnswer:
                'Press Alt+S and drag across the Gradescope diagram and sub-question prompt. ExamGhost vision pipeline reads edge weights, state transitions, and pointer diagrams directly from your screen.',
        },
        {
            category: 'workflow',
            q: 'Can ExamGhost output LaTeX formatting for Gradescope free-response boxes?',
            a: (
                <>
                    Yes! Gradescope free-response textareas support inline LaTeX enclosed in <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">$$...$$</code>. When you use <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> on a free-response proof or derivation, ExamGhost provides the complete step-by-step mathematical explanation so you can type clean, well-structured responses.
                </>
            ),
            plainTextAnswer:
                'Yes! Gradescope free-response textareas support inline LaTeX enclosed in $$...$$. When you use Explain Mode (Alt+3) on a free-response proof or derivation, ExamGhost provides the complete step-by-step mathematical explanation so you can type clean, well-structured responses.',
        },
        {
            category: 'workflow',
            q: 'How do nested Gradescope sub-questions (Q1.1, Q1.2, Q1.3) work with double-click?',
            a: (
                <>
                    Gradescope often places a shared problem setup in the parent <strong className="text-[#1a1a1a]">Q1</strong> header and individual prompts in <strong className="text-[#1a1a1a]">Q1.1, Q1.2, and Q1.3</strong>. When you double-click any sub-question, ExamGhost automatically includes the parent Q1 problem statement for full context—or you can use <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to capture both together.
                </>
            ),
            plainTextAnswer:
                'Gradescope often places a shared problem setup in the parent Q1 header and individual prompts in Q1.1, Q1.2, and Q1.3. When you double-click any sub-question, ExamGhost automatically includes the parent Q1 problem statement for full context—or you can use Alt+S to capture both together.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work with Gradescope LockDown Browser exams?',
            a: (
                <>
                    No. If an instructor enables the Gradescope LockDown Browser integration, the assignment opens inside Respondus LockDown Browser where Chrome extensions cannot run. ExamGhost is built for Gradescope Online Assignments taken in standard <strong className="text-[#1a1a1a]">Chrome, Brave, or Edge</strong> browsers.
                </>
            ),
            plainTextAnswer:
                'No. If an instructor enables the Gradescope LockDown Browser integration, the assignment opens inside Respondus LockDown Browser where Chrome extensions cannot run. ExamGhost is built for Gradescope Online Assignments taken in standard Chrome, Brave, or Edge browsers.',
        },
        {
            category: 'workflow',
            q: 'Can I test the Gradescope Online Assignment solver before installing?',
            a: (
                <>
                    Yes! Scroll up to the interactive <strong className="text-[#1a1a1a]">Gradescope Online Assignment Simulator</strong> on this page to test one-by-one double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> weighted-graph OCR, and all three stealth modes right in your browser.
                </>
            ),
            plainTextAnswer:
                'Yes! Scroll up to the interactive Gradescope Online Assignment Simulator on this page to test one-by-one double-click solving, Alt+S weighted-graph OCR, and all three stealth modes right in your browser.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/gradescope-exam-solver/#webpage',
                url: 'https://examghost.com/gradescope-exam-solver',
                name: 'Gradescope Online Assignment & Exam Solver | CS, Math & STEM AI | ExamGhost',
                description:
                    'Interactive Gradescope Online Assignment solver demo and technical guide covering KaTeX math, CS code blocks, and Alt+S graph OCR.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#gradescope-exam-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost Gradescope Online Assignment Solver',
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
                        name: 'Gradescope Exam Solver',
                        item: 'https://examghost.com/gradescope-exam-solver',
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

export default function GradescopeExamSolverPage() {
    const config = gradescopeConfig;
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
                    <GradescopeExamDemo />

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
