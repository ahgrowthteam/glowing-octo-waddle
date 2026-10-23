import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'Cengage MindTap & WebAssign Solver | CNOWv2 & calcPad AI | ExamGhost',
    description:
        'Try the interactive Cengage WebAssign, MindTap, and CNOWv2 solver simulator. Handles WebAssign randomized red variables, calcPad/physPad symbolic syntax, and Alt+S diagram OCR.',
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
    },
};

const cengageConfig: LmsServicePageConfig = {
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
        cardBg: 'bg-[#eff6ff]',
        cardBorder: 'border-[#bfdbfe]',
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

export default function CengageMindTapWebAssignSolverPage() {
    return <LmsServicePageTemplate config={cengageConfig} />;
}
