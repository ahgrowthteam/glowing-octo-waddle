import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'Schoology Quiz Solver & Assessment AI Helper | Learnosity Chrome Extension | ExamGhost',
    description:
        'Test the ExamGhost Schoology Quiz Solver in our interactive PowerSchool Schoology & Learnosity simulator. Double-click .lrn_question blocks one by one or use Alt+S for graphs and math.',
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
    },
};

const schoologyConfig: LmsServicePageConfig = {
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
        cardBg: 'bg-[#f0f9ff]',
        cardBorder: 'border-[#bae6fd]',
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

export default function SchoologyQuizSolverPage() {
    return <LmsServicePageTemplate config={schoologyConfig} />;
}
