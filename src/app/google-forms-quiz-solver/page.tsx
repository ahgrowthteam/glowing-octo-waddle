import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'Google Forms Quiz Solver & AI Answer Helper | Chrome Extension | ExamGhost',
    description:
        'Try the ExamGhost Google Forms Quiz Solver in our interactive viewform simulator. Double-click any Google Form question card one by one or use Alt+S for embedded charts and math images.',
    keywords: [
        'Google Forms quiz solver',
        'Google Forms AI extension',
        'does Google Forms detect tab switching',
        'can Google Forms see if you switch tabs',
        'Google Forms quiz answer helper',
        'solve Google Forms with AI',
        'Google Classroom quiz solver',
    ],
    alternates: {
        canonical: 'https://examghost.com/google-forms-quiz-solver',
    },
    openGraph: {
        title: 'Google Forms Quiz Solver — Interactive viewform Product Demo | ExamGhost',
        description:
            'Watch or control a live Google Forms quiz session. One-by-one double-click solving on .Qr7Oae question cards, Alt+S image OCR, and full stealth.',
        url: 'https://examghost.com/google-forms-quiz-solver',
        siteName: 'ExamGhost',
        type: 'website',
    },
};

const googleFormsConfig: LmsServicePageConfig = {
    slug: 'google-forms-quiz-solver',
    platformName: 'Google Forms Quizzes',
    platformShort: 'Google Forms',
    heroBadge: 'Google Forms viewform & Classroom Ready',
    heroDotColor: '#673ab7',
    h1Title: 'Google Forms Quiz Solver &',
    h1Highlight: 'AI Answer Extension',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for Google Forms</strong> is a Manifest V3 Chrome extension engineered for{' '}
            <strong className="text-[#1a1a1a]">Google Forms Quizzes</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">docs.google.com/forms/d/e/*/viewform</code>) and{' '}
            <strong className="text-[#1a1a1a]">Google Classroom</strong> assessments. Double-click any{' '}
            <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">div[role=&quot;listitem&quot;]</code> question card one by one to highlight verified answers in place, or press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd> to scan pasted equation screenshots and data charts without ever leaving the form tab.
        </>
    ),
    videoDemo: {
        platformSub: 'Google Forms Quiz • docs.google.com/forms/d/e/1FAIpQLSe9xK2m/viewform',
        browserUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe9xK2m8vL4pQ1rT/viewform',
        badgeBg: 'bg-[#f5f3ff] border-[#ddd6fe]',
        badgeText: 'text-[#6d28d9]',
        telemetryLabel: 'Google Forms viewform Focus: Active (0 Blur Events)',
        questions: [
            {
                id: 1,
                code: 'GFORM-CARD-01 • div[role="listitem"] .Qr7Oae',
                type: 'Google Forms Multiple Choice',
                points: '2 points',
                prompt:
                    'In AP Psychology and cognitive neuroscience, damage to Broca’s area (located in the posterior inferior frontal gyrus of the dominant left hemisphere) primarily results in which clinical presentation?',
                options: [
                    'Fluent, nonsensical speech with severely impaired auditory comprehension (receptive aphasia)',
                    'Non-fluent, effortful, telegraphic speech production with relatively preserved comprehension (expressive aphasia)',
                    'Complete inability to recognize familiar human faces (prosopagnosia)',
                    'Loss of long-term declarative memory consolidation (anterograde amnesia)',
                ],
                correctIndex: 1,
                confidence: '99.9%',
                explanation:
                    'Broca’s area coordinates the motor planning of speech. Lesions cause Broca’s (expressive/motor) aphasia, characterized by halting, telegraphic speech output while language comprehension in Wernicke’s area remains largely intact.',
            },
            {
                id: 2,
                code: 'GFORM-CARD-02 • Google Classroom Chemistry Quiz',
                type: 'Google Forms Stoichiometry & Gas Laws',
                points: '3 points',
                prompt:
                    'A rigid 10.0-L steel cylinder contains 0.500 mol of N₂(g) and 1.500 mol of O₂(g) at a total pressure of 4.80 atm and 298 K. According to Dalton’s Law of Partial Pressures, what is the partial pressure of N₂(g) in the cylinder?',
                options: [
                    '1.20 atm',
                    '1.60 atm',
                    '2.40 atm',
                    '3.60 atm',
                ],
                correctIndex: 0,
                confidence: '99.9%',
                explanation:
                    'Total moles n_total = 0.500 + 1.500 = 2.000 mol. The mole fraction of N₂ is X(N₂) = 0.500 / 2.000 = 0.250. By Dalton’s Law, P(N₂) = X(N₂) × P_total = 0.250 × 4.80 atm = 1.20 atm.',
            },
            {
                id: 3,
                code: 'GFORM-CARD-03 • Embedded Image Question (lh3.googleusercontent.com)',
                type: 'Google Forms Image Attachment (Requires Alt+S OCR)',
                points: '4 points',
                requiresOcr: true,
                diagramLabel: 'GOOGLE FORMS EMBEDDED IMAGE — BOXPLOT & IQR DISTRIBUTION',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="104" rx="8" fill="#f5f3ff" stroke="#ddd6fe" />
                        <line x1="40" y1="88" x2="340" y2="88" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="60" y1="48" x2="115" y2="48" stroke="#6d28d9" strokeWidth="2" />
                        <line x1="60" y1="38" x2="60" y2="58" stroke="#6d28d9" strokeWidth="2" />
                        <rect x="115" y="30" width="135" height="36" fill="#ede9fe" stroke="#6d28d9" strokeWidth="2" />
                        <line x1="170" y1="30" x2="170" y2="66" stroke="#0f172a" strokeWidth="2.5" />
                        <line x1="250" y1="48" x2="320" y2="48" stroke="#6d28d9" strokeWidth="2" />
                        <line x1="320" y1="38" x2="320" y2="58" stroke="#6d28d9" strokeWidth="2" />
                        <text x="50" y="103" fontSize="9" fontWeight="bold" fill="#334155">Min=12</text>
                        <text x="102" y="23" fontSize="9" fontWeight="bold" fill="#6d28d9">Q1 = 24</text>
                        <text x="152" y="80" fontSize="9" fontWeight="bold" fill="#0f172a">Med = 35</text>
                        <text x="235" y="23" fontSize="9" fontWeight="bold" fill="#6d28d9">Q3 = 52</text>
                        <text x="302" y="103" fontSize="9" fontWeight="bold" fill="#334155">Max=68</text>
                    </svg>
                ),
                prompt:
                    'Teachers frequently paste screenshot images into Google Forms because Google Forms lacks a native equation editor. Use Alt+S to scan the boxplot above. What is the Interquartile Range (IQR), and what is the upper fence threshold (Q3 + 1.5 × IQR) for identifying high outliers?',
                options: [
                    'IQR = 28; Upper outlier fence = 94',
                    'IQR = 56; Upper outlier fence = 136',
                    'IQR = 28; Upper outlier fence = 80',
                    'IQR = 17; Upper outlier fence = 77.5',
                ],
                correctIndex: 0,
                confidence: '99.7%',
                explanation:
                    'From the boxplot, Q1 = 24 and Q3 = 52, so IQR = Q3 - Q1 = 52 - 24 = 28. Using the 1.5 × IQR rule, the upper outlier fence is Q3 + 1.5(IQR) = 52 + 1.5(28) = 52 + 42 = 94.',
            },
            {
                id: 4,
                code: 'GFORM-CARD-04 • Checkboxes & Grid Question',
                type: 'Google Forms Economics',
                points: '2 points',
                prompt:
                    'If the price elasticity of demand for a commuter rail pass is |E_d| = 0.45 (inelastic) at the current fare, how will a 10% increase in ticket prices affect total transit revenue?',
                options: [
                    'Total revenue will decrease because quantity demanded falls by 10%.',
                    'Total revenue will increase because the percentage drop in ridership (4.5%) is smaller than the percentage increase in fare (10%).',
                    'Total revenue will remain strictly constant (unit elastic).',
                    'Total revenue will drop to zero.',
                ],
                correctIndex: 1,
                confidence: '99.8%',
                explanation:
                    'When demand is price inelastic (|E_d| = 0.45 < 1), a 10% price increase reduces quantity demanded by only 0.45 × 10% = 4.5%. Because the price gain outweighs the volume loss, total revenue increases.',
            },
            {
                id: 5,
                code: 'GFORM-CARD-05 • Corporate Finance & NPV',
                type: 'Google Forms Short Answer / MCQ',
                points: '3 points',
                prompt:
                    'A perpetuity pays $3,600 at the end of every year forever. If the appropriate annual discount rate is r = 6.0%, what is the present value (PV) of this perpetuity today?',
                options: [
                    '$21,600',
                    '$36,000',
                    '$60,000',
                    '$63,600',
                ],
                correctIndex: 2,
                confidence: '99.9%',
                explanation:
                    'The present value of a level ordinary perpetuity is PV = C / r = $3,600 / 0.06 = $60,000.',
            },
        ],
    },
    architecture: {
        cardBg: 'bg-[#f5f3ff]',
        cardBorder: 'border-[#ddd6fe]',
        mascotTitle: 'Google Forms viewform Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">docs.google.com/forms</code> cards, image math, and Quilgo timers.
            </>
        ),
        pills: ['Instant .Qr7Oae Card Parse', 'Alt+S Image Math OCR', 'Safe with Timer Wrappers'],
        eyebrow: 'Google Forms Quiz Architecture',
        heading: 'Why Students Use ExamGhost on Google Forms Quizzes',
        lead: (
            <>
                Because <strong className="text-[#1a1a1a]">Google Forms</strong> has no built-in LaTeX equation editor, math, physics, and chemistry teachers paste <strong className="text-[#1a1a1a]">screenshot images</strong> (<code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">lh3.googleusercontent.com</code>) into almost every STEM question—and sometimes wrap forms inside timed tracking links like <strong className="text-[#1a1a1a]">Quilgo</strong> or <strong className="text-[#1a1a1a]">ExtendedForms</strong>. ExamGhost handles both text cards and pasted equation screenshots in place.
            </>
        ),
        pillars: [
            {
                title: '1. Solves Image-Only Google Forms Math via Alt+S',
                desc: (
                    <>
                        When a Google Form question has no selectable text because the teacher uploaded a screenshot of an equation, graph, or circuit, simply press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> and drag over the Google Form card. ExamGhost OCRs the image and highlights or explains the correct option immediately.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
            {
                title: '2. Zero Blur Triggers on Quilgo & ExtendedForms Wrappers',
                desc: (
                    <>
                        While a standalone Google Form cannot track tab switching by itself, teachers often embed Google Forms inside timer wrappers like <strong className="text-[#1a1a1a]">Quilgo</strong>, <strong className="text-[#1a1a1a]">ExtendedForms</strong>, or <strong className="text-[#1a1a1a]">Form Presenter</strong> that log <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">visibilitychange</code>. ExamGhost solves questions without ever leaving the active tab.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
            {
                title: '3. Native Support for Checkboxes & Multiple-Choice Grids',
                desc: (
                    <>
                        Google Forms uses custom Closure Library ARIA elements (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">div[role=&quot;radio&quot;]</code>, <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">div[role=&quot;checkbox&quot;]</code>, and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">div[role=&quot;listbox&quot;]</code>) instead of standard HTML inputs. ExamGhost maps directly to Google&apos;s <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.Qr7Oae</code> containers on every double-click.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Google Forms Technical Audit',
        heading: 'ExamGhost vs. Tab-Switching & Generic Extensions on Google Forms',
        windowTitle: 'google_forms_viewform_audit.csv — Verified Comparison',
        windowBadge: 'viewform • Quilgo Safe • Alt+S Image Math',
        rows: [
            {
                capability: (
                    <>
                        Reads teacher-uploaded equation screenshots (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">lh3.googleusercontent.com</code>)
                    </>
                ),
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Requires Saving & Uploading Image',
                sidebar: 'Fails When Question Text Is Empty',
            },
            {
                capability: 'Stays undetected inside Quilgo / ExtendedForms / Form Proctor timer wrappers',
                examghost: '100% Focus Retained (0 Blur Events)',
                chatgpt: 'Flags "Unfocused Tab" Immediately',
                sidebar: 'Injects Detectable Sidebar DOM',
            },
            {
                capability: (
                    <>
                        Parses Google Closure <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.Qr7Oae</code> radio, checkbox &amp; grid rows
                    </>
                ),
                examghost: 'Yes (Double-Click Card)',
                chatgpt: 'Manual Copy/Paste per Card',
                sidebar: 'Misses ARIA Radio Labels',
            },
            {
                capability: 'Invisible Mode (Alt+1) with zero popup boxes on screen',
                examghost: 'Yes (Subtle 1px Indicator)',
                chatgpt: 'No (Requires Separate Window)',
                sidebar: 'No (Visible Floating Widget)',
            },
            {
                capability: 'Multi-page Google Forms section support ("Next" button navigation)',
                examghost: 'Works on Every Section Page',
                chatgpt: 'Manual Re-Copy on Every Page',
                sidebar: 'Breaks After Section Transition',
            },
        ],
    },
    faqSubtitle:
        'Fact-checked engineering answers about whether Google Forms can detect tab switching, Chrome extensions, Locked Mode, or Quilgo timers.',
    faqs: [
        {
            category: 'stealth',
            q: 'Can Google Forms detect if you switch tabs or open a new window?',
            a: (
                <>
                    A <strong className="text-[#1a1a1a]">standard Google Form</strong> (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">docs.google.com/forms/.../viewform</code>) opened in Chrome has <strong className="text-[#1a1a1a]">no built-in tab-switching or focus tracker</strong>—Google only records your final submission timestamp. <strong className="text-[#1a1a1a]">However</strong>, if your instructor shares the form through a timer add-on like <strong className="text-[#1a1a1a]">Quilgo</strong>, <strong className="text-[#1a1a1a]">ExtendedForms</strong>, or <strong className="text-[#1a1a1a]">AutoProctor</strong>, that wrapper iframe actively logs <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">visibilitychange</code>. Using ExamGhost keeps your focus inside the active tab 100% of the time so even timer wrappers record zero focus losses.
                </>
            ),
            plainTextAnswer:
                'A standard Google Form (docs.google.com/forms/.../viewform) opened in Chrome has no built-in tab-switching or focus tracker—Google only records your final submission timestamp. However, if your instructor shares the form through a timer add-on like Quilgo, ExtendedForms, or AutoProctor, that wrapper iframe actively logs window.blur and visibilitychange. Using ExamGhost keeps your focus inside the active tab 100% of the time so even timer wrappers record zero focus losses.',
        },
        {
            category: 'stealth',
            q: 'Can Google Forms detect the ExamGhost Chrome extension?',
            a: (
                <>
                    No. On a personal Windows PC, Mac, or Linux machine running Chrome, Brave, or Edge, Google Forms runs inside a standard browser tab and cannot inspect your installed Manifest V3 extensions.
                </>
            ),
            plainTextAnswer:
                'No. On a personal Windows PC, Mac, or Linux machine running Chrome, Brave, or Edge, Google Forms runs inside a standard browser tab and cannot inspect your installed Manifest V3 extensions.',
        },
        {
            category: 'stealth',
            q: 'What is Google Forms "Locked Mode" on Chromebooks?',
            a: (
                <>
                    Google Forms <strong className="text-[#1a1a1a]">Locked Mode</strong> only works on <strong className="text-[#1a1a1a]">school-managed Chromebooks</strong> enrolled in a Google Workspace for Education domain, where ChromeOS locks the device into a kiosk window and disables all third-party extensions. If you are taking a Google Forms quiz on your own Windows or macOS laptop in Chrome, Locked Mode cannot run and ExamGhost works normally.
                </>
            ),
            plainTextAnswer:
                'Google Forms Locked Mode only works on school-managed Chromebooks enrolled in a Google Workspace for Education domain, where ChromeOS locks the device into a kiosk window and disables all third-party extensions. If you are taking a Google Forms quiz on your own Windows or macOS laptop in Chrome, Locked Mode cannot run and ExamGhost works normally.',
        },
        {
            category: 'ocr',
            q: 'How do I solve Google Forms questions where the math equation is an image?',
            a: (
                <>
                    Because Google Forms does not support native LaTeX, teachers almost always paste screenshots of equations, tables, and graphs into the question card. Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> (or <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">⌘+Shift+S</kbd> on Mac) and drag across the entire Google Form question card—ExamGhost reads both the image and the answer options together.
                </>
            ),
            plainTextAnswer:
                'Because Google Forms does not support native LaTeX, teachers almost always paste screenshots of equations, tables, and graphs into the question card. Press Alt+S (or Cmd+Shift+S on Mac) and drag across the entire Google Form question card—ExamGhost reads both the image and the answer options together.',
        },
        {
            category: 'ocr',
            q: 'Does ExamGhost work when answer choices themselves are images?',
            a: (
                <>
                    Yes! In chemistry, geometry, and calculus Google Forms quizzes, options A, B, C, and D are often four separate images. Switch to <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong>, press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>, and drag over the entire card including all four option images to get the exact matching choice.
                </>
            ),
            plainTextAnswer:
                'Yes! In chemistry, geometry, and calculus Google Forms quizzes, options A, B, C, and D are often four separate images. Switch to Explain Mode (Alt+3), press Alt+S, and drag over the entire card including all four option images to get the exact matching choice.',
        },
        {
            category: 'workflow',
            q: 'How does one-by-one double-click solving work on Google Forms?',
            a: (
                <>
                    Simply double-click anywhere inside a Google Form question card (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.Qr7Oae</code>). In <strong className="text-[#1a1a1a]">Stealth Mode (Alt+2)</strong>, the correct radio button or checkbox label is subtly highlighted; in <strong className="text-[#1a1a1a]">Invisible Mode (Alt+1)</strong>, a tiny 1px dot appears beside the verified answer.
                </>
            ),
            plainTextAnswer:
                'Simply double-click anywhere inside a Google Form question card (.Qr7Oae). In Stealth Mode (Alt+2), the correct radio button or checkbox label is subtly highlighted; in Invisible Mode (Alt+1), a tiny 1px dot appears beside the verified answer.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work on multi-page Google Forms with "Next" buttons?',
            a: (
                <>
                    Yes. Many instructors split Google Forms quizzes into multiple sections so only 1 to 5 questions appear per page. Because ExamGhost solves questions one by one on demand whenever you double-click or press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>, it works seamlessly as you click <strong className="text-[#1a1a1a]">Next</strong> across every section.
                </>
            ),
            plainTextAnswer:
                'Yes. Many instructors split Google Forms quizzes into multiple sections so only 1 to 5 questions appear per page. Because ExamGhost solves questions one by one on demand whenever you double-click or press Alt+S, it works seamlessly as you click Next across every section.',
        },
        {
            category: 'workflow',
            q: 'Can I test the Google Forms Quiz Solver before installing the extension?',
            a: (
                <>
                    Yes! Scroll up to the interactive <strong className="text-[#1a1a1a]">Google Forms Quiz Simulator</strong> on this page to test one-by-one double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> boxplot image OCR, and all three stealth modes right now.
                </>
            ),
            plainTextAnswer:
                'Yes! Scroll up to the interactive Google Forms Quiz Simulator on this page to test one-by-one double-click solving, Alt+S boxplot image OCR, and all three stealth modes right now.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/google-forms-quiz-solver/#webpage',
                url: 'https://examghost.com/google-forms-quiz-solver',
                name: 'Google Forms Quiz Solver & AI Answer Helper | Chrome Extension | ExamGhost',
                description:
                    'Interactive Google Forms quiz solver simulator and technical guide covering viewform cards, image math OCR, Locked Mode, and Quilgo timers.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#google-forms-quiz-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost Google Forms Quiz Solver',
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
                        name: 'Google Forms Quiz Solver',
                        item: 'https://examghost.com/google-forms-quiz-solver',
                    },
                ],
            },
        ],
    },
};

export default function GoogleFormsQuizSolverPage() {
    return <LmsServicePageTemplate config={googleFormsConfig} />;
}
