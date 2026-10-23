import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'Gradescope Online Assignment & Exam Solver | CS, Math & STEM AI | ExamGhost',
    description:
        'Test the ExamGhost Gradescope Online Assignment solver in our interactive simulator. Double-click Gradescope KaTeX math, Python/C++ code traces, and FSM diagrams one by one with zero tab switches.',
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
    },
};

const gradescopeConfig: LmsServicePageConfig = {
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
        cardBg: 'bg-[#f0fdfa]',
        cardBorder: 'border-[#99f6e4]',
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
                    Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> (or <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">⌘+Shift+S</kbd> on Mac) and drag across the Gradescope diagram and sub-question prompt. ExamGhost&apos;s vision pipeline reads edge weights, state transitions, and pointer diagrams directly from your screen.
                </>
            ),
            plainTextAnswer:
                'Press Alt+S (or Cmd+Shift+S on Mac) and drag across the Gradescope diagram and sub-question prompt. ExamGhost vision pipeline reads edge weights, state transitions, and pointer diagrams directly from your screen.',
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

export default function GradescopeExamSolverPage() {
    return <LmsServicePageTemplate config={gradescopeConfig} />;
}
