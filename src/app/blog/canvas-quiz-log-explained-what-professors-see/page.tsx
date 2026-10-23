import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'Canvas Quiz Log Explained: What Professors Actually See (2026 Guide) | ExamGhost',
    description:
        'See every event recorded in the Canvas Quiz Action Log: Session Started, Viewed Question, Answered Question, and red "Stopped viewing the Canvas quiz-taking page" alerts.',
    keywords: [
        'Canvas quiz log explained',
        'what do professors see on Canvas quiz log',
        'Stopped viewing the Canvas quiz-taking page',
        'Canvas quiz action log',
        'Canvas New Quizzes activity log',
        'how to keep Canvas quiz log clean',
        'Canvas submission_events API',
    ],
    alternates: {
        canonical: 'https://examghost.com/blog/canvas-quiz-log-explained-what-professors-see',
    },
    openGraph: {
        title: 'Canvas Quiz Log Explained: What Professors Actually See | ExamGhost',
        description:
            'Interactive breakdown of the Canvas Instructor Action Log. See what triggers red "Stopped viewing" warnings and how in-page solving keeps every event green.',
        url: 'https://examghost.com/blog/canvas-quiz-log-explained-what-professors-see',
        siteName: 'ExamGhost',
        type: 'article',
    },
};

const canvasQuizLogConfig: LmsServicePageConfig = {
    slug: 'blog/canvas-quiz-log-explained-what-professors-see',
    platformName: 'Canvas Quiz Action Log Guide',
    platformShort: 'Canvas Quiz Log',
    heroBadge: 'Instructor View Breakdown • Classic & New Quizzes',
    heroDotColor: '#e13f29',
    h1Title: 'Canvas Quiz Log Explained:',
    h1Highlight: 'What Professors Actually See',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">What Professors See in a Canvas Quiz Log:</strong> When an instructor clicks{' '}
            <strong className="text-[#1a1a1a]">&ldquo;View Log&rdquo;</strong> on your Canvas quiz attempt, Canvas displays a chronological timeline of{' '}
            <strong className="text-[#1a1a1a]">five exact event types</strong>: (1) <span className="text-emerald-700 font-semibold">Sessionstarted</span>, (2) <span className="text-blue-700 font-semibold">Viewed (and possibly read) a question</span>, (3) <span className="text-emerald-700 font-semibold">Answered a question</span>, (4) <span className="text-red-600 font-semibold">Stopped viewing the Canvas quiz-taking page</span> (triggered by <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">window.blur</code>), and (5) <span className="text-amber-700 font-semibold">Resumed</span>. Canvas does <strong className="text-[#1a1a1a]">not</strong> record your screen, webcam, or clipboard text without a separate proctoring tool.
        </>
    ),
    videoDemo: {
        platformSub: 'Canvas Instructor Action Log Simulator • /courses/90412/quizzes/318402/submissions/7712/log',
        browserUrl: 'https://canvas.university.edu/courses/90412/quizzes/318402/submissions/7712/log',
        badgeBg: 'bg-[#fff1f2] border-[#fecdd3]',
        badgeText: 'text-[#e11d48]',
        telemetryLabel: 'Action Log Status: 100% Green Events (0 "Stopped viewing" Warnings)',
        questions: [
            {
                id: 1,
                code: 'LOG-EVENT-01 • "Stopped viewing the Canvas quiz-taking page"',
                type: 'Red Warning Event in Instructor View',
                points: 'Log Event #1',
                prompt:
                    'Which student action causes Canvas to print a red warning line reading "Stopped viewing the Canvas quiz-taking page..." with an exact elapsed timestamp (e.g., 04:12) in the professor’s Action Log?',
                options: [
                    'Scrolling up and down inside the Canvas quiz window.',
                    'Any action that fires window.blur or document.visibilitychange—including switching tabs, clicking a second monitor, opening Spotlight/Calculator, or clicking an external desktop app.',
                    'Moving your mouse cursor over a question text block.',
                    'Spending more than 60 seconds reading a question on screen.',
                ],
                correctIndex: 1,
                confidence: '100%',
                explanation:
                    'Whenever the browser window or tab loses OS/browser focus, Canvas records "page_blurred", which renders in the instructor UI as a red X with "Stopped viewing the Canvas quiz-taking page". Solving in-place with ExamGhost never leaves the Canvas window, so this red line never appears.',
            },
            {
                id: 2,
                code: 'LOG-EVENT-02 • "Answered [Question #]" Timestamp Spacing',
                type: 'Green Checkmark Event in Instructor View',
                points: 'Log Event #2',
                prompt:
                    'When a professor expands the "Answered a question" log entries on a 20-question Canvas exam, what timestamp pattern immediately indicates a student used a bulk "Solve All" script?',
                options: [
                    'Answering one question every 45 to 90 seconds in sequential order.',
                    'All 20 questions showing "Answered" timestamps clustered within a 3-to-5 second window (e.g., 01:12, 01:13, 01:13, 01:14).',
                    'Skipping Question 4 and coming back to answer it at the end of the quiz.',
                    'Changing an answer on a multiple-choice question before submitting.',
                ],
                correctIndex: 1,
                confidence: '100%',
                explanation:
                    'Canvas logs the exact second each radio button or input is modified. Answering 20 questions in 4 seconds is physically impossible for a human reader. That is why ExamGhost uses strictly one-by-one double-click solving.',
            },
            {
                id: 3,
                code: 'LOG-EVENT-03 • Visual Comparison of Flagged vs. Clean Action Logs',
                type: 'Instructor Action Log Timeline (Requires Alt+S OCR)',
                points: 'Log Event #3',
                requiresOcr: true,
                diagramLabel: 'CANVAS INSTRUCTOR ACTION LOG — FLAGGED VS. CLEAN TIMELINE',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="174" height="104" rx="8" fill="#fef2f2" stroke="#fecaca" />
                        <rect x="198" y="8" width="174" height="104" rx="8" fill="#ecfdf5" stroke="#a7f3d0" />
                        <text x="18" y="26" fontSize="9" fontWeight="bold" fill="#b91c1c">Tab-Switching Student Log</text>
                        <text x="18" y="45" fontSize="8" fill="#15803d">00:01 ✓ Session started</text>
                        <text x="18" y="61" fontSize="8" fontWeight="bold" fill="#dc2626">00:14 ✗ Stopped viewing page</text>
                        <text x="18" y="77" fontSize="8" fill="#b45309">00:49 ↻ Resumed</text>
                        <text x="18" y="93" fontSize="8" fill="#15803d">00:51 ✓ Answered question #1</text>
                        <text x="208" y="26" fontSize="9" fontWeight="bold" fill="#047857">ExamGhost In-Page Log</text>
                        <text x="208" y="45" fontSize="8" fill="#15803d">00:01 ✓ Session started</text>
                        <text x="208" y="61" fontSize="8" fill="#1d4ed8">00:08 ○ Viewed question #1</text>
                        <text x="208" y="77" fontSize="8" fill="#15803d">00:46 ✓ Answered question #1</text>
                        <text x="208" y="93" fontSize="8" fill="#15803d">01:38 ✓ Answered question #2</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the side-by-side Canvas Instructor Action Log comparison above. Why does the left timeline raise an immediate academic integrity flag for the professor?',
                options: [
                    'Because the student started the session at 00:01.',
                    'Because "Stopped viewing page" at 00:14 followed by "Resumed" at 00:49 and "Answered question #1" two seconds later at 00:51 shows the student left the tab for 35 seconds to look up Question #1.',
                    'Because the student answered Question #1 in under 5 minutes.',
                    'Because Canvas automatically deducts 10 points for every Resumed event.',
                ],
                correctIndex: 1,
                confidence: '100%',
                explanation:
                    'Professors look for the exact triad of "Stopped viewing page" → 30-second gap → "Resumed" → "Answered question" 2 seconds later. Keeping your cursor inside Canvas with ExamGhost produces the clean right-hand log.',
            },
            {
                id: 4,
                code: 'LOG-EVENT-04 • Does Canvas See What Tab You Switched To?',
                type: 'Browser Privacy Boundary Fact-Check',
                points: 'Log Event #4',
                prompt:
                    'When Canvas logs "Stopped viewing the Canvas quiz-taking page", can the professor see the URL or window title of the other tab or application you clicked on?',
                options: [
                    'Yes, Canvas records the full URL of every open Chrome tab.',
                    'No. Standard browser security completely blocks Canvas from seeing other tabs, URLs, or desktop apps—Canvas only knows that its own tab lost focus for X seconds.',
                    'Yes, Canvas records a list of all running macOS and Windows programs.',
                    'Yes, Canvas captures your Google search history during the quiz.',
                ],
                correctIndex: 1,
                confidence: '100%',
                explanation:
                    'The browser Same-Origin Policy prevents any website from reading the title or URL of other browser tabs or OS windows. Canvas only receives a boolean focus/visibility state change for its own tab.',
            },
            {
                id: 5,
                code: 'LOG-EVENT-05 • 15-Second Inactivity Heartbeat Myth vs. Reality',
                type: 'Canvas Focus Polling Mechanics',
                points: 'Log Event #5',
                prompt:
                    'Many TikTok videos claim Canvas only checks if you left the tab every 15 or 30 seconds. How does Canvas’s actual JavaScript listener work in the source code?',
                options: [
                    'It only checks once every 30 seconds, so switching tabs for 10 seconds is invisible.',
                    'It uses instant event listeners (window.onblur and document.onvisibilitychange) that record the exact millisecond you leave the tab—even for 1 second—and batches those timestamped events to the server.',
                    'It only logs tab switches if you press Ctrl+C.',
                    'It only works on Safari.',
                ],
                correctIndex: 1,
                confidence: '100%',
                explanation:
                    'Canvas queues events instantaneously via DOM event listeners and flushes the buffer to POST /submission_events periodically. Even a 1.5-second Alt+Tab is captured with its exact timestamp and flushed on the next batch.',
            },
        ],
    },
    architecture: {
        cardBg: 'bg-[#fff1f2]',
        cardBorder: 'border-[#fecdd3]',
        mascotTitle: 'Canvas Action Log Decoder',
        mascotSubtitle: (
            <>
                Every event in <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">/submissions/:id/log</code> explained line by line.
            </>
        ),
        pills: ['0 "Stopped Viewing" Alerts', 'Natural Answer Pacing', 'Debunks 15-Second Myth'],
        eyebrow: 'Inside the Professor’s Dashboard',
        heading: 'The 5 Exact Events Inside a Canvas Quiz Action Log',
        lead: (
            <>
                There is massive misinformation online about what Canvas quiz logs actually record. Based on Canvas&apos;s open-source <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">canvas-lms</code> repository (<code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">quiz_submission_events_controller.rb</code>), here is what instructors see—and how ExamGhost keeps your log spotless:
            </>
        ),
        pillars: [
            {
                title: '1. Why the "Under 15 Seconds" Tab-Switch Trick Is a Myth',
                desc: (
                    <>
                        A viral myth claims that switching tabs for less than 15 seconds won&apos;t show up on Canvas. In reality, Canvas flushes its event buffer every 15–60 seconds, <strong className="text-[#1a1a1a]">but the <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> listener fires at 0.001 seconds</strong> and stores the event in the queue. Only staying inside the tab prevents <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code>.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
            {
                title: '2. Keeping "Viewed" and "Answered" Events Natural',
                desc: (
                    <>
                        In a normal student log, <strong className="text-[#1a1a1a]">&ldquo;Viewed (and possibly read) a question&rdquo;</strong> is followed 35 to 90 seconds later by <strong className="text-[#1a1a1a]">&ldquo;Answered a question&rdquo;</strong>. Double-clicking one question at a time with ExamGhost produces this exact green-check sequence without a single red focus warning.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
            {
                title: '3. Solving Diagrams In-Page Without Saving Images',
                desc: (
                    <>
                        Right-clicking a quiz diagram and clicking <em>&ldquo;Save image as...&rdquo;</em> opens the OS file dialog, which immediately steals focus from Chrome and logs <strong className="text-[#1a1a1a]">&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</strong>. Pressing <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> crops the diagram inside the viewport with zero OS dialogs.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Canvas Instructor Action Log Audit',
        heading: 'How Different Actions Appear in Your Professor’s Canvas Log',
        windowTitle: 'canvas_instructor_action_log_events.csv — Verified Reference',
        windowBadge: 'quiz_submission_events_controller.rb',
        rows: [
            {
                capability: 'Double-clicking a question in-page with ExamGhost (Alt+1 / Alt+2 / Alt+3)',
                examghost: 'Green "Answered" Event Only',
                chatgpt: 'N/A',
                sidebar: 'May Trigger Iframe Blur',
            },
            {
                capability: (
                    <>
                        Pressing <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to scan a chart or math diagram in-page
                    </>
                ),
                examghost: '0 Focus Loss (100% Clean Log)',
                chatgpt: 'Red "Stopped viewing" Warning',
                sidebar: 'Fails on Canvas File Preview',
            },
            {
                capability: 'Switching tabs for 3 seconds ("15-second rule" myth)',
                examghost: 'Never Needed',
                chatgpt: 'Logs Red "Stopped viewing" Immediately',
                sidebar: 'Logs Red "Stopped viewing"',
            },
            {
                capability: 'Clicking a second monitor or side-by-side split-screen window',
                examghost: 'Never Needed',
                chatgpt: 'Logs Red "Stopped viewing" on Click',
                sidebar: 'Logs Red "Stopped viewing"',
            },
            {
                capability: 'Question answer spacing across a 25-question exam',
                examghost: 'Natural Human Pacing (One-by-One)',
                chatgpt: 'Idle Gaps + Instant Bursts',
                sidebar: 'Flagged if Using "Solve All"',
            },
        ],
    },
    faqSubtitle:
        'Clear, source-code-verified answers to the most common student questions about Canvas Quiz Action Logs.',
    faqs: [
        {
            category: 'stealth',
            q: 'Do Canvas Quiz Logs automatically grade or deduct points when "Stopped viewing" appears?',
            a: (
                <>
                    No. Canvas does not automatically deduct points for <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code> events. Instead, the red <strong className="text-[#1a1a1a]">&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</strong> warnings are shown to the professor or TA when they manually inspect your quiz log. Keeping zero red warnings ensures your log never raises suspicion during an audit.
                </>
            ),
            plainTextAnswer:
                'No. Canvas does not automatically deduct points for page_blurred events. Instead, the red Stopped viewing the Canvas quiz-taking page warnings are shown to the professor or TA when they manually inspect your quiz log. Keeping zero red warnings ensures your log never raises suspicion during an audit.',
        },
        {
            category: 'stealth',
            q: 'Can a professor see if I use a second phone or iPad not connected to Canvas?',
            a: (
                <>
                    Canvas only monitors the browser tab running the quiz. However, looking up complex multi-part STEM equations or graphs on a phone takes several minutes of typing and often leads to idle timeouts on the computer. ExamGhost solves the exact question on your computer screen in seconds via a simple double-click without leaving the tab.
                </>
            ),
            plainTextAnswer:
                'Canvas only monitors the browser tab running the quiz. However, looking up complex multi-part STEM equations or graphs on a phone takes several minutes of typing and often leads to idle timeouts on the computer. ExamGhost solves the exact question on your computer screen in seconds via a simple double-click without leaving the tab.',
        },
        {
            category: 'stealth',
            q: 'Does Canvas log when I copy text (Ctrl+C) on a quiz?',
            a: (
                <>
                    Canvas&apos;s default <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">quiz_submission_events</code> controller does not log <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">copy</code> events by itself, because copying text only helps if you switch tabs to paste it somewhere else (which triggers <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code>). Furthermore, with ExamGhost you never press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Ctrl+C</kbd> at all—just double-click the question block.
                </>
            ),
            plainTextAnswer:
                'Canvas default quiz_submission_events controller does not log copy events by itself, because copying text only helps if you switch tabs to paste it somewhere else (which triggers page_blurred). Furthermore, with ExamGhost you never press Ctrl+C at all—just double-click the question block.',
        },
        {
            category: 'ocr',
            q: 'Why does right-clicking and saving a quiz image trigger a Canvas log warning?',
            a: (
                <>
                    When you click <em>&ldquo;Save image as...&rdquo;</em> in Chrome or macOS/Windows, the native operating system file-picker modal opens and steals window focus from the browser page, firing <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code>. ExamGhost&apos;s <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> Snap-It tool crops the image purely inside the browser viewport without opening any OS dialog.
                </>
            ),
            plainTextAnswer:
                'When you click Save image as in Chrome or macOS/Windows, the native operating system file-picker modal opens and steals window focus from the browser page, firing window.blur. ExamGhost Alt+S Snap-It tool crops the image purely inside the browser viewport without opening any OS dialog.',
        },
        {
            category: 'ocr',
            q: 'Does Canvas New Quizzes have the same Action Log as Classic Quizzes?',
            a: (
                <>
                    Yes. In <strong className="text-[#1a1a1a]">Canvas New Quizzes</strong>, the instructor clicks <strong className="text-[#1a1a1a]">Moderate → View Log</strong> to see an <strong className="text-[#1a1a1a]">Activity Log</strong> that records the exact same events: session start, question viewed/answered timestamps, and whether the student navigated away from the assessment window.
                </>
            ),
            plainTextAnswer:
                'Yes. In Canvas New Quizzes, the instructor clicks Moderate -> View Log to see an Activity Log that records the exact same events: session start, question viewed/answered timestamps, and whether the student navigated away from the assessment window.',
        },
        {
            category: 'workflow',
            q: 'How long do Canvas Quiz Logs stay available to professors?',
            a: (
                <>
                    Canvas stores <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">quiz_submission_events</code> for the entire duration of the course term (and typically 6 to 12 months in institutional archives). Keeping your log 100% clean from the moment you take the quiz ensures peace of mind all semester.
                </>
            ),
            plainTextAnswer:
                'Canvas stores quiz_submission_events for the entire duration of the course term (and typically 6 to 12 months in institutional archives). Keeping your log 100% clean from the moment you take the quiz ensures peace of mind all semester.',
        },
        {
            category: 'workflow',
            q: 'What does a 100% clean Canvas Quiz Log look like?',
            a: (
                <>
                    A clean log contains <strong className="text-[#1a1a1a]">Session started</strong> at 00:00, followed by steady <strong className="text-[#1a1a1a]">Viewed</strong> and <strong className="text-[#1a1a1a]">Answered</strong> entries spaced 35 to 120 seconds apart, and <strong className="text-[#1a1a1a]">zero red &ldquo;Stopped viewing&rdquo; lines</strong>. That is the exact log pattern produced when you solve questions one by one with ExamGhost.
                </>
            ),
            plainTextAnswer:
                'A clean log contains Session started at 00:00, followed by steady Viewed and Answered entries spaced 35 to 120 seconds apart, and zero red Stopped viewing lines. That is the exact log pattern produced when you solve questions one by one with ExamGhost.',
        },
        {
            category: 'workflow',
            q: 'Can I test the Canvas Quiz Action Log simulator right now?',
            a: (
                <>
                    Yes! Scroll up to the interactive <strong className="text-[#1a1a1a]">Canvas Instructor Action Log Simulator</strong> on this page to see how each event is logged and test ExamGhost&apos;s one-by-one double-click and <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> workflow.
                </>
            ),
            plainTextAnswer:
                'Yes! Scroll up to the interactive Canvas Instructor Action Log Simulator on this page to see how each event is logged and test ExamGhost one-by-one double-click and Alt+S workflow.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'TechArticle',
                '@id': 'https://examghost.com/blog/canvas-quiz-log-explained-what-professors-see/#article',
                url: 'https://examghost.com/blog/canvas-quiz-log-explained-what-professors-see',
                headline: 'Canvas Quiz Log Explained: What Professors Actually See (2026 Guide)',
                description:
                    'Complete breakdown of the Canvas Instructor Action Log, Stopped viewing the Canvas quiz-taking page events, and timestamp pacing.',
                author: { '@type': 'Organization', name: 'ExamGhost Security Research' },
                datePublished: '2026-03-18',
                dateModified: '2026-10-22',
                isPartOf: { '@id': 'https://examghost.com/#website' },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://examghost.com' },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Canvas Quiz Log Explained',
                        item: 'https://examghost.com/blog/canvas-quiz-log-explained-what-professors-see',
                    },
                ],
            },
        ],
    },
};

export default function CanvasQuizLogExplainedPage() {
    return <LmsServicePageTemplate config={canvasQuizLogConfig} />;
}
