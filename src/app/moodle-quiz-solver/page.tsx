import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'Moodle Quiz Solver & AI Homework Helper | Moodle 4.x Chrome Extension | ExamGhost',
    description:
        'Test the ExamGhost Moodle Quiz Solver in our interactive Moodle 4.x simulator. Double-click any .que question block or press Alt+S to solve Moodle multichoice, Cloze, and STACK math questions with zero window.blur logs.',
    keywords: [
        'Moodle quiz solver',
        'Moodle AI quiz helper',
        'Moodle Chrome extension solver',
        'Moodle 4.x quiz AI',
        'does Moodle detect tab switching',
        'Moodle quiz log viewer',
        'Moodle STACK math solver',
        'Moodle Cloze question solver',
    ],
    alternates: {
        canonical: 'https://examghost.com/moodle-quiz-solver',
    },
    openGraph: {
        title: 'Moodle Quiz Solver — Interactive Moodle 4.x Product Demo | ExamGhost',
        description:
            'Watch or control a live Moodle 4.x attempt.php quiz session. One-by-one double-click solving, Alt+S MathJax & STACK OCR, and zero M.mod_quiz.secure_window blur triggers.',
        url: 'https://examghost.com/moodle-quiz-solver',
        siteName: 'ExamGhost',
        type: 'website',
    },
};

const moodleConfig: LmsServicePageConfig = {
    slug: 'moodle-quiz-solver',
    platformName: 'Moodle 4.x',
    platformShort: 'Moodle',
    heroBadge: 'Moodle 4.x attempt.php & STACK Math Ready',
    heroDotColor: '#f98012',
    h1Title: 'Moodle Quiz Solver &',
    h1Highlight: 'AI Homework Helper',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for Moodle</strong> is a Manifest V3 Chrome extension engineered for{' '}
            <strong className="text-[#1a1a1a]">Moodle 3.11 &amp; Moodle 4.x</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">/mod/quiz/attempt.php</code>). Double-click any{' '}
            <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.que</code> question container one by one to highlight or explain answers in place, or press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd> to capture MathJax and STACK Maxima formulas—while keeping{' '}
            <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">M.mod_quiz.secure_window</code> focus state 100% intact.
        </>
    ),
    videoDemo: {
        platformSub: 'Moodle 4.3 LMS • /mod/quiz/attempt.php?attempt=88412&cmid=4109',
        browserUrl: 'https://moodle.university.edu/mod/quiz/attempt.php?attempt=88412&cmid=4109',
        badgeBg: 'bg-[#fff7ed] border-[#fed7aa]',
        badgeText: 'text-[#ea580c]',
        telemetryLabel: 'M.mod_quiz.secure_window: Focus Active (0 Blur Events)',
        questions: [
            {
                id: 1,
                code: 'MOODLE-QUE-01 • .que.multichoice (Deferred Feedback)',
                type: 'Moodle Multiple Choice (.qtext)',
                points: '2.00 pts',
                prompt:
                    'In a relational database using Multi-Version Concurrency Control (MVCC) under the Read Committed isolation level, what does a SELECT query read when another transaction is actively modifying the same row without having committed yet?',
                options: [
                    'It blocks on a shared row lock until the writing transaction issues COMMIT or ROLLBACK.',
                    'It reads the uncommitted dirty buffer directly from the shared memory page.',
                    'It reads the most recent committed snapshot version of the tuple created prior to the statement start.',
                    'It aborts immediately with a serialization failure (SQLSTATE 40001).',
                ],
                correctIndex: 2,
                confidence: '99.7%',
                explanation:
                    'Under MVCC Read Committed (such as PostgreSQL or Oracle), readers never block writers and writers never block readers; the SELECT query reads the latest committed tuple snapshot visible at the start of the statement.',
            },
            {
                id: 2,
                code: 'MOODLE-QUE-02 • .que.calculated (MathJax)',
                type: 'Moodle Calculated / Numerical',
                points: '3.00 pts',
                prompt:
                    'Consider the differential equation dy/dx + 2xy = 4x with the initial condition y(0) = 5. What is the exact value of y(x) as x approaches infinity?',
                options: [
                    'y = 0',
                    'y = 2',
                    'y = 3',
                    'y = 5',
                ],
                correctIndex: 1,
                confidence: '99.5%',
                explanation:
                    'Using the integrating factor e^(x²): d/dx[y·e^(x²)] = 4x·e^(x²) ⇒ y·e^(x²) = 2e^(x²) + C. Applying y(0) = 5 gives 5 = 2 + C ⇒ C = 3. Thus y(x) = 2 + 3e^(-x²). As x → ∞, e^(-x²) → 0, leaving y = 2.',
            },
            {
                id: 3,
                code: 'MOODLE-QUE-03 • .que.stack (Canvas & Maxima CAS Diagram)',
                type: 'Moodle STACK / Graph Image (Requires Alt+S OCR)',
                points: '4.00 pts',
                requiresOcr: true,
                diagramLabel: 'MOODLE PLUGINFILE.PHP — BODE MAGNITUDE PLOT (H(jω))',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="104" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
                        <line x1="45" y1="20" x2="45" y2="95" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="45" y1="95" x2="350" y2="95" stroke="#64748b" strokeWidth="1.5" />
                        <polyline points="45,35 160,35 280,85 340,85" fill="none" stroke="#ea580c" strokeWidth="2.5" />
                        <line x1="160" y1="35" x2="160" y2="95" stroke="#94a3b8" strokeDasharray="3 3" />
                        <text x="15" y="38" fontSize="9" fontWeight="bold" fill="#334155">20 dB</text>
                        <text x="15" y="88" fontSize="9" fontWeight="bold" fill="#334155">0 dB</text>
                        <text x="138" y="108" fontSize="9" fontWeight="bold" fill="#ea580c">ω_c = 10² rad/s</text>
                        <text x="205" y="55" fontSize="9" fontWeight="bold" fill="#0f172a">-20 dB/decade</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the Moodle pluginfile.php asymptotic Bode magnitude plot above. What is the DC gain K (as a linear ratio, not in decibels) and the single pole corner frequency ω_c of the transfer function H(s)?',
                options: [
                    'DC gain K = 20, corner frequency ω_c = 10 rad/s',
                    'DC gain K = 10, corner frequency ω_c = 100 rad/s',
                    'DC gain K = 100, corner frequency ω_c = 20 rad/s',
                    'DC gain K = 1, corner frequency ω_c = 100 rad/s',
                ],
                correctIndex: 1,
                confidence: '99.2%',
                explanation:
                    'A low-frequency magnitude of 20 dB corresponds to 20·log10(K) = 20 ⇒ log10(K) = 1 ⇒ K = 10. The break point where the -20 dB/decade slope begins is labeled at ω_c = 10² = 100 rad/s.',
            },
            {
                id: 4,
                code: 'MOODLE-QUE-04 • .que.multianswer (Cloze Embedded)',
                type: 'Moodle Cloze / Embedded Concept',
                points: '2.00 pts',
                prompt:
                    'In aerobic cellular respiration, which enzyme complex of the mitochondrial electron transport chain is also directly part of the citric acid (Krebs) cycle and does NOT pump protons across the inner mitochondrial membrane?',
                options: [
                    'Complex I (NADH:ubiquinone oxidoreductase)',
                    'Complex II (Succinate dehydrogenase)',
                    'Complex III (Cytochrome bc1 complex)',
                    'Complex IV (Cytochrome c oxidase)',
                ],
                correctIndex: 1,
                confidence: '99.8%',
                explanation:
                    'Complex II (succinate dehydrogenase) catalyzes the oxidation of succinate to fumarate in the citric acid cycle and transfers electrons via FADH2 to ubiquinone without translocating H+ protons across the inner membrane.',
            },
            {
                id: 5,
                code: 'MOODLE-QUE-05 • .que.truefalse',
                type: 'Moodle Macroeconomics',
                points: '2.00 pts',
                prompt:
                    'In an IS-LM framework with a horizontal LM curve at the effective lower bound (liquidity trap), how does an expansionary fiscal spending increase affect equilibrium output and the nominal interest rate?',
                options: [
                    'Output remains unchanged due to 100% crowding out of private investment.',
                    'Output increases by the full Keynesian multiplier with zero crowding out because the nominal interest rate does not rise.',
                    'The nominal interest rate rises sharply while real output falls.',
                    'Both the IS and LM curves shift left, reducing equilibrium output.',
                ],
                correctIndex: 1,
                confidence: '99.6%',
                explanation:
                    'When the LM curve is flat (liquidity trap), shifting the IS curve right increases equilibrium income Y without pushing up the interest rate r, eliminating interest-rate crowding out and yielding the full fiscal multiplier.',
            },
        ],
    },
    architecture: {
        cardBg: 'bg-[#fff7ed]',
        cardBorder: 'border-[#fed7aa]',
        mascotTitle: 'Moodle 4.x Attempt Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">/mod/quiz/attempt.php</code>, STACK MathJax, and Cloze blocks.
            </>
        ),
        pills: ['Zero SecureWindow Blur', 'One-by-One Double-Click', 'Alt+S STACK Math OCR'],
        eyebrow: 'Moodle 3.11 & 4.x Architecture',
        heading: 'How ExamGhost Works Inside Moodle Quiz Attempts',
        lead: (
            <>
                Moodle quizzes render each question inside a structured <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">div.que</code> container with <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.formulation</code> and <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.qtext</code> nodes, while optional <strong className="text-[#1a1a1a]">JavaScript security mode</strong> (<code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">M.mod_quiz.secure_window</code>) blocks right-click and copy shortcuts. ExamGhost operates strictly one question at a time without leaving the attempt tab.
            </>
        ),
        pillars: [
            {
                title: '1. Bypasses M.mod_quiz.secure_window Copy Locks',
                desc: (
                    <>
                        When an instructor enables Moodle&apos;s <strong className="text-[#1a1a1a]">&ldquo;Full screen pop-up with some JavaScript security&rdquo;</strong>, Moodle intercepts <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">contextmenu</code>, <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">selectstart</code>, and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">copy</code> events. Because ExamGhost parses the underlying <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.que .qtext</code> DOM directly on double-click, you never need to highlight or copy text to the clipboard.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
            {
                title: '2. Native Moodle Cloze, Calculated & STACK Support',
                desc: (
                    <>
                        University STEM courses rely heavily on Moodle <strong className="text-[#1a1a1a]">Calculated</strong> questions, <strong className="text-[#1a1a1a]">Embedded Answers (Cloze)</strong>, and the <strong className="text-[#1a1a1a]">STACK Maxima CAS</strong> plugin. ExamGhost extracts both inline MathJax TeX strings and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">pluginfile.php</code> plots via <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
            {
                title: '3. Natural Pacing in mod_quiz_autosave Logs',
                desc: (
                    <>
                        Moodle&apos;s <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mod_quiz_autosave</code> AJAX service periodically writes draft responses and timestamps to <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mdl_quiz_attempt_steps</code>. Because ExamGhost has no &ldquo;Solve All&rdquo; button, you solve and select answers one by one at realistic human intervals.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Moodle 4.x Telemetry Audit',
        heading: 'ExamGhost vs. Tab-Switching & Generic Extensions on Moodle',
        windowTitle: 'moodle_4x_attempt_audit.csv — Verified Comparison',
        windowBadge: '0 Blur Events • Native .que Parsing',
        rows: [
            {
                capability: (
                    <>
                        Works when <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">M.mod_quiz.secure_window</code> disables right-click &amp; copy
                    </>
                ),
                examghost: 'Yes (Double-Click .que Block)',
                chatgpt: 'Blocked (Cannot Copy Text)',
                sidebar: 'Partial (Fails on Cloze Inputs)',
            },
            {
                capability: (
                    <>
                        Window focus retention (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">document.hasFocus() === true</code>)
                    </>
                ),
                examghost: '100% Maintained',
                chatgpt: 'Fails (Triggers window.blur)',
                sidebar: 'Fails on Popup Focus Shift',
            },
            {
                capability: (
                    <>
                        Reads authenticated <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">/pluginfile.php/</code> session-locked diagrams
                    </>
                ),
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Requires Manual Save & Upload',
                sidebar: '403 Forbidden (Missing MoodleSession)',
            },
            {
                capability: (
                    <>
                        Pacing inside <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mdl_quiz_attempt_steps</code> history table
                    </>
                ),
                examghost: 'Natural One-by-One Cadence',
                chatgpt: 'Suspicious Idle Gaps Between Tabs',
                sidebar: 'Bulk Auto-Fill Flags Step Timestamps',
            },
            {
                capability: 'Invisible Mode (Alt+1) with zero visible cards on screen',
                examghost: 'Yes (1px Dot Indicator)',
                chatgpt: 'No (Full Browser Tab Visible)',
                sidebar: 'No (Injected Sidebar Panel)',
            },
        ],
    },
    faqSubtitle:
        'Direct engineering answers regarding Moodle 4.x attempt logs, M.mod_quiz.secure_window browser security, and STACK math solving.',
    faqs: [
        {
            category: 'stealth',
            q: 'Does Moodle detect Chrome extensions or tab switching during a quiz?',
            a: (
                <>
                    Standard Moodle quizzes log server-side events in <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mdl_logstore_standard_log</code> (such as quiz attempt started, page viewed, autosaved, and submitted). However, if your instructor enables Moodle&apos;s <strong className="text-[#1a1a1a]">JavaScript security popup</strong> or installs a third-party quiz access rule plugin (like <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">quizaccess_honestycheck</code> or tab-change monitors), leaving the tab triggers <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.onblur</code>. ExamGhost runs inside Chrome&apos;s isolated MV3 execution world so you never switch tabs or lose window focus.
                </>
            ),
            plainTextAnswer:
                'Standard Moodle quizzes log server-side events in mdl_logstore_standard_log (quiz attempt started, page viewed, autosaved, and submitted). If your instructor enables JavaScript security mode or a tab-monitoring quizaccess plugin, leaving the tab triggers window.onblur. ExamGhost runs inside Chrome isolated MV3 execution world so you never switch tabs or lose window focus.',
        },
        {
            category: 'stealth',
            q: 'What does a professor see in the Moodle Quiz Attempt History & Step table?',
            a: (
                <>
                    When a professor clicks <strong className="text-[#1a1a1a]">Review attempt</strong> in Moodle, the bottom of each question displays the <strong className="text-[#1a1a1a]">Response history</strong> table (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mdl_quiz_attempt_steps</code>), showing the exact second each question was initialized, autosaved (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">todo</code> / <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">complete</code>), and graded. Because ExamGhost solves strictly one question at a time on double-click, your autosave timestamps progress naturally across the quiz.
                </>
            ),
            plainTextAnswer:
                'When a professor clicks Review attempt in Moodle, the bottom of each question displays the Response history table (mdl_quiz_attempt_steps), showing the exact second each question was initialized, autosaved, and graded. Because ExamGhost solves strictly one question at a time on double-click, your autosave timestamps progress naturally across the quiz.',
        },
        {
            category: 'stealth',
            q: 'Does ExamGhost work when Moodle blocks right-click and Ctrl+C copy?',
            a: (
                <>
                    Yes. Moodle&apos;s <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">M.mod_quiz.secure_window</code> module blocks clipboard copying and context menus to prevent students from pasting questions into ChatGPT. With ExamGhost, you simply <strong className="text-[#1a1a1a]">double-click</strong> anywhere on the Moodle <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.que</code> block or press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>—no text selection or clipboard access is required.
                </>
            ),
            plainTextAnswer:
                'Yes. Moodle M.mod_quiz.secure_window module blocks clipboard copying and context menus to prevent students from pasting questions into ChatGPT. With ExamGhost, you simply double-click anywhere on the Moodle .que block or press Alt+S—no text selection or clipboard access is required.',
        },
        {
            category: 'ocr',
            q: 'Can ExamGhost solve Moodle STACK, Calculated, and Cloze questions?',
            a: (
                <>
                    Yes. Moodle STEM courses use <strong className="text-[#1a1a1a]">STACK</strong> (Maxima Computer Algebra System), <strong className="text-[#1a1a1a]">Calculated Multi-Choice</strong>, and <strong className="text-[#1a1a1a]">Cloze</strong> embedded questions rendered with MathJax. Double-clicking extracts the underlying LaTeX expressions, or you can press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to capture complex matrices and graphs visually.
                </>
            ),
            plainTextAnswer:
                'Yes. Moodle STEM courses use STACK (Maxima Computer Algebra System), Calculated Multi-Choice, and Cloze embedded questions rendered with MathJax. Double-clicking extracts the underlying LaTeX expressions, or you can press Alt+S to capture complex matrices and graphs visually.',
        },
        {
            category: 'ocr',
            q: 'Why do other AI tools fail on Moodle pluginfile.php quiz images?',
            a: (
                <>
                    Moodle serves quiz figures through <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">/pluginfile.php/[contextid]/mod_quiz/questiontext/...</code>, which requires your active <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">MoodleSession</code> cookie. External AI crawlers get a 403 error when trying to fetch those image URLs. ExamGhost&apos;s <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> Snap-It tool crops the rendered pixels directly from your browser viewport.
                </>
            ),
            plainTextAnswer:
                'Moodle serves quiz figures through /pluginfile.php/[contextid]/mod_quiz/questiontext/..., which requires your active MoodleSession cookie. External AI crawlers get a 403 error when trying to fetch those image URLs. ExamGhost Alt+S Snap-It tool crops the rendered pixels directly from your browser viewport.',
        },
        {
            category: 'workflow',
            q: 'Which ExamGhost mode works best on Moodle 4.x quizzes?',
            a: (
                <>
                    Use <strong className="text-[#1a1a1a]">Invisible Mode (Alt+1)</strong> or <strong className="text-[#1a1a1a]">Stealth Mode (Alt+2)</strong> during timed quizzes to highlight the verified <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.r0</code> / <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.r1</code> radio option directly inside the Moodle question container. Use <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> for Numerical, Short-Answer, or STACK algebra inputs that require exact symbolic syntax.
                </>
            ),
            plainTextAnswer:
                'Use Invisible Mode (Alt+1) or Stealth Mode (Alt+2) during timed quizzes to highlight the verified .r0 / .r1 radio option directly inside the Moodle question container. Use Explain Mode (Alt+3) for Numerical, Short-Answer, or STACK algebra inputs that require exact symbolic syntax.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work with Safe Exam Browser (SEB) on Moodle?',
            a: (
                <>
                    No. Safe Exam Browser (SEB) is a standalone kiosk browser that disables all Chrome extensions at the OS level. ExamGhost is designed for Moodle quizzes taken inside standard <strong className="text-[#1a1a1a]">Google Chrome, Brave, or Microsoft Edge</strong>—including quizzes using Moodle&apos;s built-in JavaScript security window.
                </>
            ),
            plainTextAnswer:
                'No. Safe Exam Browser (SEB) is a standalone kiosk browser that disables all Chrome extensions at the OS level. ExamGhost is designed for Moodle quizzes taken inside standard Google Chrome, Brave, or Microsoft Edge—including quizzes using Moodle built-in JavaScript security window.',
        },
        {
            category: 'workflow',
            q: 'Can I test the Moodle Quiz Solver before installing the Chrome extension?',
            a: (
                <>
                    Yes. Scroll up to the interactive <strong className="text-[#1a1a1a]">Moodle 4.x Product Simulator</strong> on this page to test one-by-one double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> Bode plot OCR, and all three stealth modes right in your browser.
                </>
            ),
            plainTextAnswer:
                'Yes. Scroll up to the interactive Moodle 4.x Product Simulator on this page to test one-by-one double-click solving, Alt+S Bode plot OCR, and all three stealth modes right in your browser.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/moodle-quiz-solver/#webpage',
                url: 'https://examghost.com/moodle-quiz-solver',
                name: 'Moodle Quiz Solver & AI Homework Helper | Moodle 4.x Chrome Extension | ExamGhost',
                description:
                    'Interactive Moodle 4.x quiz solver demo and technical guide covering .que containers, M.mod_quiz.secure_window, STACK math, and Alt+S OCR.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#moodle-quiz-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost Moodle Quiz Solver',
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
                    { '@type': 'ListItem', position: 2, name: 'Moodle Quiz Solver', item: 'https://examghost.com/moodle-quiz-solver' },
                ],
            },
        ],
    },
};

export default function MoodleQuizSolverPage() {
    return <LmsServicePageTemplate config={moodleConfig} />;
}
