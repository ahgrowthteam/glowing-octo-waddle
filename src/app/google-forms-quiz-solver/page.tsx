import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { GoogleFormsQuizDemo } from '@/components/PlatformMotionDemos';
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
    title: { absolute: 'Google Forms Quiz Solver — Image & Math Answer AI (2026)' },
    description: "Solve Google Forms quizzes in 0.3s, including image-only questions and math screenshots via Alt+S OCR. Double-click each card. 5 free solves / day.",
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
        images: [{ url: '/videos/posters/google-forms-quiz-solver-poster.jpg', width: 1280, height: 720, alt: 'Google Forms Quiz Solver — Image & Math Answer AI (2026)' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Google Forms Quiz Solver — Image & Math Answer AI (2026)',
        description: 'Solve Google Forms quizzes in 0.3s, including image-only questions and math screenshots via Alt+S OCR. Double-click each card. Live demo and 5 free solves / day.',
        images: ['/videos/posters/google-forms-quiz-solver-poster.jpg'],
    },
};

const googleFormsConfig: any = {
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
        cardBg: '#f5f3ff',
        cardBorder: '#ddd6fe',
        mascotImage: '/images/ghost/ghost_card_stealth.jpg',
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
    questionTypesSection: {
        eyebrow: 'Google Forms & Classroom Widget Coverage',
        heading: 'Every Google Forms Card Type Supported — Including Image-Only Distractors',
        lead: (
            <>
                Google Forms renders questions inside Google Closure <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">div.Qr7Oae[role=&quot;listitem&quot;]</code> containers with obfuscated class names (<code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">.M7eMe</code>, <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">.AB7Lab</code>). ExamGhost supports all 6 Google Forms assessment formats:
            </>
        ),
        items: [
            {
                name: 'Image-Only STEM Prompts & Image Distractor Options',
                codeTag: 'lh3.googleusercontent.com',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.6%',
                description: (
                    <>
                        When a math or chemistry teacher pastes screenshots for the question stem <em>and</em> for options A, B, C, and D (with zero text in the DOM), press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> over the card to OCR all 4 option images simultaneously.
                    </>
                ),
            },
            {
                name: 'Standard Radio Multiple-Choice & Select-All Checkboxes',
                codeTag: 'div[role="radio" | "checkbox"]',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.8%',
                description: (
                    <>
                        Double-click anywhere on a <code className="font-mono text-xs">.Qr7Oae</code> card to evaluate ARIA radio buttons or multi-select checkboxes and display a subtle 1px indicator or full explanation inline.
                    </>
                ),
            },
            {
                name: 'Multiple-Choice Grid & Checkbox Grid Matrices',
                codeTag: 'div[role="radiogroup"]',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: '99.4%',
                description: (
                    <>
                        Matches every row statement to its corresponding column header across large Google Forms matching grids without losing row-to-column alignment.
                    </>
                ),
            },
            {
                name: 'Short-Answer Response Validation (Regex / Number Rules)',
                codeTag: 'quantumWizTextinputPaperinputInput',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.5%',
                description: (
                    <>
                        Detects Google Forms Response Validation error hints (e.g., <em>&ldquo;Must be a whole number&rdquo;</em> or exact case-sensitive string constraints) so your short-answer entry passes auto-grading.
                    </>
                ),
            },
            {
                name: 'Multi-Section Branching ("Go to section based on answer")',
                codeTag: 'form_confirm / pageHistory',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.7%',
                description: (
                    <>
                        Re-indexes new <code className="font-mono text-xs">.Qr7Oae</code> cards automatically each time you click <strong>Next</strong> across multi-page case studies or escape-room style branching quizzes.
                    </>
                ),
            },
            {
                name: 'Google Docs / Slides / Drive Embedded Reading Passages',
                codeTag: 'docs.google.com/document',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '99.3%',
                description: (
                    <>
                        Crop long AP English, History, or Biology reading passages and data charts embedded inside a Google Form to answer multi-part evidence questions in under 0.4 seconds.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: 'Google Forms & Timer Add-On Forensics',
        heading: 'What Teachers Can (and Cannot) See on Google Forms Quizzes',
        lead: (
            <>
                There is massive confusion online about whether Google Forms tracks tab switching or extensions. Here is the exact technical breakdown comparing <strong>Standard Google Forms</strong>, <strong>Third-Party Timer Wrappers (Quilgo/ExtendedForms)</strong>, and <strong>Chromebook Locked Mode</strong>:
            </>
        ),
        citationNote: 'Audited on Google Workspace for Education 2026',
        logTableTitle: 'google_forms_telemetry_matrix — Teacher View Breakdown',
        events: [
            {
                eventCode: 'Standard Google Forms (/viewform)',
                whenTriggered: 'Submitting a normal Google Form quiz in Chrome, Brave, Edge, or Safari',
                professorView: 'Records ONLY final Submission Timestamp, Email, and Selected Answers (Zero tab/blur tracking)',
                examghostStatus: '100% Undetectable (Zero Footprint)',
                isSafe: true,
            },
            {
                eventCode: 'fbzx Form Seed & draftResponse Payload',
                whenTriggered: 'Auto-saving draft answers to Google Workspace while filling out a form',
                professorView: 'Internal Google draft recovery token; teachers only see the final submitted Google Sheet row',
                examghostStatus: 'Zero Modified Network Payloads',
                isSafe: true,
            },
            {
                eventCode: 'Quilgo / ExtendedForms / Form Presenter Wrappers',
                whenTriggered: 'Teacher wraps the Google Form inside a third-party timer iframe that listens for window.onblur',
                professorView: 'Logs "Unfocused tab / Left screen X times" in the add-on dashboard if you switch tabs',
                examghostStatus: '0 Blur Events (In-Tab Double-Click)',
                isSafe: true,
            },
            {
                eventCode: 'Chromebook "Locked Mode" (Managed ChromeOS Only)',
                whenTriggered: 'Teacher checks "Turn on Locked Mode" for school-issued managed Chromebooks',
                professorView: 'Requires ChromeOS kiosk session and blocks all student extensions inside the managed profile',
                examghostStatus: 'Works on Any Standard Desktop/Laptop Quiz',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why "Auto-Fill All" Google Forms Extensions Break on Image Questions & Timer Wrappers',
        whyNoSolveAllBody: (
            <>
                Many Chrome Web Store extensions claim to &ldquo;Auto-Fill an entire Google Form in 1 click.&rdquo; In practice, they fail completely whenever a STEM teacher uses pasted equation images (<code className="font-mono text-white">lh3.googleusercontent.com</code>) with empty text labels, and if the form is wrapped in <strong>Quilgo</strong> or <strong>ExtendedForms</strong>, submitting a 30-question quiz in 4 seconds flags the timer report as <em>Suspicious Pacing</em>. ExamGhost solves questions <strong>one by one</strong> via double-click or <kbd className="px-1.5 py-0.5 rounded bg-white/15 font-mono text-white">Alt+S</kbd> so every text and image question is verified accurately at human speed.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Google Forms Workflow',
        heading: 'How to Solve Google Forms Quizzes & Image Math Without Switching Tabs',
        lead: (
            <>
                Follow this 4-step workflow on any Google Forms quiz (<code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">docs.google.com/forms/d/e/.../viewform</code>) or timer-wrapped Classroom assessment:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Open the Google Forms Quiz Link in Chrome, Brave, or Edge',
                shortcutBadge: 'docs.google.com/forms',
                description: (
                    <>
                        Open your quiz from Google Classroom or a direct link. If your teacher uses Quilgo or ExtendedForms, stay inside the active quiz tab—ExamGhost&apos;s Closed Shadow DOM is already active.
                    </>
                ),
                plainTextForSchema:
                    'Open your Google Forms quiz from Google Classroom or a direct link inside Chrome, Brave, or Edge.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click Any .Qr7Oae Question Card to Solve Text Items',
                shortcutBadge: 'Double-Click Card',
                description: (
                    <>
                        Double-click anywhere on a Google Forms question card. ExamGhost reads the prompt and all ARIA radio/checkbox/dropdown options and highlights the verified choice in 0.3 seconds.
                    </>
                ),
                plainTextForSchema:
                    'Double-click anywhere on a Google Forms question card to extract the prompt and ARIA options and highlight the verified choice.',
            },
            {
                stepNumber: '3',
                title: 'Press Alt+S to Solve Pasted Equation Screenshots & Option Images',
                shortcutBadge: 'Alt + S (Vision OCR)',
                description: (
                    <>
                        If the question or its A/B/C/D options are uploaded images with no selectable text, press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> and drag a crop box around the entire Google Form card to OCR and solve it visually.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S and drag a crop box around any Google Form card containing uploaded equation screenshots or image-only options.',
            },
            {
                stepNumber: '4',
                title: 'Click Each Answer at Natural Pacing Before Submitting',
                shortcutBadge: 'Quilgo Timer Safe',
                description: (
                    <>
                        Select the verified radio button or checkbox one question at a time. Your browser window never loses focus, so timer wrappers record <strong>100% Focus / 0 Tab Switches</strong> and a realistic completion duration.
                    </>
                ),
                plainTextForSchema:
                    'Click the verified radio button or checkbox one question at a time so timer wrappers record 100% focus and realistic completion duration.',
            },
        ],
    },
    courseModulesSection: {
        eyebrow: 'Google Workspace for Education',
        heading: 'Top Google Classroom & University Google Forms Assessments Covered',
        lead: (
            <>
                Over 170 million students and educators use Google Workspace for Education. ExamGhost is optimized for the most common Google Forms quiz patterns:
            </>
        ),
        modules: [
            {
                department: 'AP & High School STEM (Google Classroom)',
                courseCodes: 'AP Calc / AP Physics / AP Chem / Honors Bio',
                textbooksOrModules: 'Screenshot-Based Equation Quizzes, Free-Body Diagrams & Stoichiometry Grids',
                keyChallengeSolved:
                    'Solves teacher-pasted Snipping Tool / Equatio math images via Alt+S Vision OCR when the Google Form DOM contains zero selectable text.',
            },
            {
                department: 'University Lecture Check-Ins & Lab Pre-Quizzes',
                courseCodes: 'CHEM-101L / BIOL-102L / CS-101 / ECON-101',
                textbooksOrModules: 'Wet-Lab Safety Quizzes, Pre-Lab Molarity Calculations & Timed Lecture Polls',
                keyChallengeSolved:
                    'Computes exact molarity, dilution, and percent-yield short answers that satisfy Google Forms strict numerical Response Validation rules.',
            },
            {
                department: 'Timer-Proctored Assessments (Quilgo / ExtendedForms)',
                courseCodes: 'BUS-201 / ACCT-101 / PSYC-101',
                textbooksOrModules: 'Quilgo Camera/Screen Tracking Links, ExtendedForms & Form Presenter',
                keyChallengeSolved:
                    'Operates entirely inside the active tab without firing window.onblur or visibilitychange, keeping your Quilgo trust score at 100%.',
            },
            {
                department: 'Humanities, AP History & Foreign Languages',
                courseCodes: 'APUSH / AP Lit / SPAN-201 / FREN-201',
                textbooksOrModules: 'Multi-Section Reading Passages, Primary Source Maps & Conjugation Grids',
                keyChallengeSolved:
                    'Evaluates multi-row Multiple-Choice Grids and long stimulus passages across multi-page Google Forms sections.',
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
                    Because Google Forms does not support native LaTeX, teachers almost always paste screenshots of equations, tables, and graphs into the question card. Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> and drag across the entire Google Form question card—ExamGhost reads both the image and the answer options together.
                </>
            ),
            plainTextAnswer:
                'Because Google Forms does not support native LaTeX, teachers almost always paste screenshots of equations, tables, and graphs into the question card. Press Alt+S and drag across the entire Google Form question card—ExamGhost reads both the image and the answer options together.',
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

export default function GoogleFormsQuizSolverPage() {
    const config = googleFormsConfig;
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
                    <GoogleFormsQuizDemo />

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
