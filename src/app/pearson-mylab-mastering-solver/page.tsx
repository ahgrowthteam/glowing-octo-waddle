import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'Pearson MyLab & Mastering Solver | Math, Statistics, Physics & Chem | ExamGhost',
    description:
        'Test the ExamGhost Pearson MyLab Math, MyLab Statistics, Mastering Physics, and Mastering Chemistry solver in our live TDX Player simulator. Double-click multi-part prompts or use Alt+S.',
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
    },
};

const pearsonConfig: LmsServicePageConfig = {
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
        cardBg: 'bg-[#f0f9ff]',
        cardBorder: 'border-[#bae6fd]',
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

export default function PearsonMyLabMasteringSolverPage() {
    return <LmsServicePageTemplate config={pearsonConfig} />;
}
