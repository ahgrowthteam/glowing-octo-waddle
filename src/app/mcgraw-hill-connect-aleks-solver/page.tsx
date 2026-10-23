import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'McGraw Hill Connect & ALEKS Solver | SmartBook 2.0 & EZTO AI | ExamGhost',
    description:
        'Try the interactive McGraw Hill Connect (ezto.mheducation.com), SmartBook 2.0, and ALEKS Knowledge Check solver. Double-click questions one by one or use Alt+S for ChemDraw & ALEKS graphs.',
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
    },
};

const mcgrawHillConfig: LmsServicePageConfig = {
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
        cardBg: 'bg-[#fff1f2]',
        cardBorder: 'border-[#fecdd3]',
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

export default function McGrawHillConnectAleksSolverPage() {
    return <LmsServicePageTemplate config={mcgrawHillConfig} />;
}
