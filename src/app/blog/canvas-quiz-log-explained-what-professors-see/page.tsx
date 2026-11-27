import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CanvasQuizLogMotionDemo } from '@/components/PlatformMotionDemos';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';
import LmsExplainerFilmCard from '@/components/LmsExplainerFilmCard';
import LmsServiceFaq, { LmsFaqItem } from '@/components/LmsServiceFaq';
import {
    ShieldCheck,
    CheckCircle2,
    ArrowUpRight,
    Terminal,
    BookOpen,
    AlertTriangle,
    Keyboard,
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';

export const metadata: Metadata = {
    robots: { index: false, follow: false },
    title: { absolute: 'Canvas Quiz Log Explained: What Professors See (2026)' },
    description:
        'Every event in the Canvas Quiz Log explained: session started, answered and red \'Stopped viewing\' flags, with a side-by-side SpeedGrader log replica.',
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
        canonical: 'https://www.examghost.com/blog/canvas-quiz-log-explained-what-professors-see',
    },
    openGraph: {
        title: 'Canvas Quiz Log Explained: What Professors Actually See | ExamGhost',
        description:
            'Interactive breakdown of the Canvas Instructor Action Log. See what triggers red "Stopped viewing" warnings and how in-page solving keeps every event green.',
        url: 'https://www.examghost.com/blog/canvas-quiz-log-explained-what-professors-see',
        siteName: 'ExamGhost',
        type: 'article',
        images: [{ url: '/videos/posters/canvas-quiz-log-explained-what-professors-see-poster.jpg', width: 1280, height: 720, alt: 'Canvas Quiz Log Explained: What Professors See (2026)' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Canvas Quiz Log Explained: What Professors See (2026)',
        description: 'Every event in the Canvas Quiz Log explained: session started, answered and red \'Stopped viewing\' flags, with a side-by-side SpeedGrader log replica.',
        images: ['/videos/posters/canvas-quiz-log-explained-what-professors-see-poster.jpg'],
    },
};

const canvasQuizLogConfig: any = {
    slug: 'blog/canvas-quiz-log-explained-what-professors-see',
    platformName: 'Canvas Quiz Action Log Guide',
    platformShort: 'Canvas Quiz Log',
    heroBadge: 'Instructor View Breakdown • Classic & New Quizzes',
    heroDotColor: '#e13f29',
    h1Title: 'Canvas Quiz Log Explained:',
    h1Highlight: 'What Professors Actually See',
    aeoSummary: (
        <>
            <strong className="text-ink">What Professors See in a Canvas Quiz Log:</strong> When an instructor clicks{' '}
            <strong className="text-ink">&ldquo;View Log&rdquo;</strong> on your Canvas quiz attempt, Canvas displays a chronological timeline of{' '}
            <strong className="text-ink">five exact event types</strong>: (1) <span className="text-emerald-700 font-semibold">Session started</span>, (2) <span className="text-blue-700 font-semibold">Viewed (and possibly read) a question</span>, (3) <span className="text-emerald-700 font-semibold">Answered a question</span>, (4) <span className="text-red-600 font-semibold">Stopped viewing the Canvas quiz-taking page</span> (triggered by <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-ink/[0.1]">window.blur</code>), and (5) <span className="text-amber-700 font-semibold">Resumed</span>. Canvas does <strong className="text-ink">not</strong> record your screen, webcam, or clipboard text without a separate proctoring tool.
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
                    'It only checks once every 30 seconds, so switching tabs for 10 seconds is never recorded.',
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
        cardBg: '#fff1f2',
        cardBorder: '#fecdd3',
        mascotImage: '/images/ghost/ghost_card_vision.jpg',
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
                        A viral myth claims that switching tabs for less than 15 seconds won&apos;t show up on Canvas. In reality, Canvas flushes its event buffer every 15–60 seconds, <strong className="text-ink">but the <code className="font-mono text-[12px] bg-surface-subtle px-1.5 py-0.5 rounded">window.blur</code> listener fires at 0.001 seconds</strong> and stores the event in the queue. Only staying inside the tab prevents <code className="font-mono text-[12px] bg-surface-subtle px-1.5 py-0.5 rounded">page_blurred</code>.
                    </>
                ),
                image: '/images/ghost/ghost_scene_modes.jpg',
            },
            {
                title: '2. Keeping "Viewed" and "Answered" Events Natural',
                desc: (
                    <>
                        In a normal student log, <strong className="text-ink">&ldquo;Viewed (and possibly read) a question&rdquo;</strong> is followed 35 to 90 seconds later by <strong className="text-ink">&ldquo;Answered a question&rdquo;</strong>. Double-clicking one question at a time with ExamGhost produces this exact green-check sequence without a single red focus warning.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
            {
                title: '3. Solving Diagrams In-Page Without Saving Images',
                desc: (
                    <>
                        Right-clicking a quiz diagram and clicking <em>&ldquo;Save image as...&rdquo;</em> opens the OS file dialog, which immediately steals focus from Chrome and logs <strong className="text-ink">&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</strong>. Pressing <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> crops the diagram inside the viewport with zero OS dialogs.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
        ],
    },
    questionTypesSection: {
        eyebrow: 'Canvas Quiz Submission Events Dictionary',
        heading: 'Every Event String in Canvas’s quiz_submission_events Table Decoded',
        lead: (
            <>
                When a professor clicks <strong>&ldquo;View Log&rdquo;</strong> inside Canvas Classic Quizzes or opens the <strong>Moderation Activity Log</strong> in Canvas New Quizzes, Canvas renders a chronological timeline from its <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">quiz_submission_events</code> database table. Here are the 6 exact event types:
            </>
        ),
        items: [
            {
                name: '1. session_started ("Session started")',
                codeTag: 'event_type: session_started',
                triggerMethod: 'Double-Click DOM',
                accuracy: 'Blue Info Icon',
                description: (
                    <>
                        Logged at <code className="font-mono text-xs">00:00</code> when you click <em>Take the Quiz</em>, recording your browser User-Agent string and the initial HTTP request IP address.
                    </>
                ),
            },
            {
                name: '2. question_viewed ("Viewed (and possibly read) a question")',
                codeTag: 'event_type: question_viewed',
                triggerMethod: 'Double-Click DOM',
                accuracy: 'Gray Eye Icon',
                description: (
                    <>
                        Logged when a question scrolls into your active viewport or when you click <em>Next</em> on a one-question-at-a-time quiz.
                    </>
                ),
            },
            {
                name: '3. question_answered ("Answered a question")',
                codeTag: 'event_type: question_answered',
                triggerMethod: 'Double-Click DOM',
                accuracy: 'Green Check Icon',
                description: (
                    <>
                        Logged with the exact second (<code className="font-mono text-xs">MM:SS</code>) you select a radio button, check a box, or type into an essay/numerical field.
                    </>
                ),
            },
            {
                name: '4. page_blurred ("Stopped viewing the Canvas quiz-taking page")',
                codeTag: 'event_type: page_blurred',
                triggerMethod: 'Double-Click DOM',
                accuracy: '0 with ExamGhost',
                description: (
                    <>
                        Displays a <strong>Red Warning Circle / X</strong> whenever <code className="font-mono text-xs">window.onblur</code> or <code className="font-mono text-xs">document.visibilityState === &quot;hidden&quot;</code> fires (switching tabs, clicking Split Screen, or opening OS popups).
                    </>
                ),
            },
            {
                name: '5. page_focused ("Resumed viewing the Canvas quiz-taking page")',
                codeTag: 'event_type: page_focused',
                triggerMethod: 'Double-Click DOM',
                accuracy: 'Paired with Blur',
                description: (
                    <>
                        Logged the millisecond you click back into the Canvas tab, allowing the professor to subtract the two timestamps and see exactly how many seconds you spent away.
                    </>
                ),
            },
            {
                name: '6. New Quizzes LTI 1.3 Attempt Log (Navigator & Autosave)',
                codeTag: 'quiz-lti.instructure.com',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '0 Blur Events',
                description: (
                    <>
                        In Canvas New Quizzes, the Moderation Log tracks question navigation, answer revisions, and focus lost/regained inside the LTI 1.3 iframe.
                    </>
                ),
            },
        ],
    },
    customSection: (
        <div className="rounded-3xl bg-paper border border-ink/[0.09] p-6 sm:p-10 shadow-card space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/[0.08] pb-4">
                <div className="space-y-1">
                    <span className="text-xs font-semibold text-emerald-800">
                        Side-by-side instructor view comparison
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-ink">
                        What Your Professor Actually Sees: Tab-Switching vs. ExamGhost 1-by-1
                    </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-subtle border border-ink/[0.09] font-mono text-xs font-semibold text-ink">
                    /courses/:id/quizzes/:id/submissions/:id/log
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Flagged Tab-Switcher Log */}
                <div className="rounded-2xl bg-[#fff1f2]/60 border border-rose-200 p-5 space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-bold text-rose-800">
                            ✗ Student using ChatGPT tab / split-screen
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-mono text-[11px] font-bold">
                            4 Red Blur Flags
                        </span>
                    </div>
                    <div className="rounded-xl bg-paper border border-rose-200/80 divide-y divide-ink/[0.08] font-mono text-xs">
                        <div className="p-2.5 flex items-center justify-between">
                            <span className="text-ink-muted">00:02</span>
                            <span className="text-ink">Session started</span>
                        </div>
                        <div className="p-2.5 flex items-center justify-between bg-rose-50 text-rose-900 font-bold">
                            <span>00:14</span>
                            <span>✕ Stopped viewing the Canvas quiz-taking page</span>
                        </div>
                        <div className="p-2.5 flex items-center justify-between text-amber-900">
                            <span>00:49</span>
                            <span>↺ Resumed viewing the Canvas quiz-taking page</span>
                        </div>
                        <div className="p-2.5 flex items-center justify-between">
                            <span className="text-ink-muted">00:52</span>
                            <span className="text-emerald-800 font-semibold">✓ Answered question: #1</span>
                        </div>
                        <div className="p-2.5 flex items-center justify-between bg-rose-50 text-rose-900 font-bold">
                            <span>00:58</span>
                            <span>✕ Stopped viewing the Canvas quiz-taking page</span>
                        </div>
                    </div>
                </div>

                {/* Right: Spotless ExamGhost 1-by-1 Log */}
                <div className="rounded-2xl bg-emeraldBrand-soft/70 border border-emeraldBrand/25 p-5 space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-bold text-emerald-950">
                            ✓ Student using ExamGhost (1-by-1 double-click)
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emeraldBrand-soft text-emerald-950 border border-emeraldBrand/25 font-mono text-[11px] font-bold">
                            0 Blur Flags · 100% Green
                        </span>
                    </div>
                    <div className="rounded-xl bg-paper border border-emeraldBrand/25 divide-y divide-ink/[0.08] font-mono text-xs">
                        <div className="p-2.5 flex items-center justify-between">
                            <span className="text-ink-muted">00:02</span>
                            <span className="text-ink">Session started</span>
                        </div>
                        <div className="p-2.5 flex items-center justify-between">
                            <span className="text-ink-muted">00:05</span>
                            <span className="text-ink">Viewed (and possibly read) question #1</span>
                        </div>
                        <div className="p-2.5 flex items-center justify-between">
                            <span className="text-ink-muted">00:48</span>
                            <span className="text-emerald-800 font-semibold">✓ Answered question: #1</span>
                        </div>
                        <div className="p-2.5 flex items-center justify-between">
                            <span className="text-ink-muted">00:53</span>
                            <span className="text-ink">Viewed (and possibly read) question #2</span>
                        </div>
                        <div className="p-2.5 flex items-center justify-between">
                            <span className="text-ink-muted">01:39</span>
                            <span className="text-emerald-800 font-semibold">✓ Answered question: #2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    telemetryForensicsSection: {
        eyebrow: 'What Professors CAN vs. CANNOT See (University IT Guidelines)',
        heading: 'Fact vs. Myth: What a Canvas Quiz Log Can Actually Prove',
        lead: (
            <>
                Official university faculty documentation from <strong>CSU Chico</strong>, <strong>Temple University</strong>, and <strong>Instructure</strong> explicitly warns professors about the technical limits of Canvas Quiz Logs. Here is the verified forensic breakdown:
            </>
        ),
        citationNote: 'Sources: Instructure Guide, CSU Chico & Temple IT',
        logTableTitle: 'canvas_quiz_log_capabilities — Verified Faculty View',
        events: [
            {
                eventCode: 'Which Other Tab or Website You Opened',
                whenTriggered: 'Student switches tabs or clicks another application',
                professorView: 'CANNOT SEE destination URL, search query, or app name—only sees "Stopped viewing"',
                examghostStatus: 'Never Leaves Tab (0 Events)',
                isSafe: true,
            },
            {
                eventCode: 'Webcam, Microphone & Desktop Screen Capture',
                whenTriggered: 'Taking a standard Canvas Classic or New Quiz in Chrome',
                professorView: 'CANNOT SEE your screen or webcam unless Honorlock/Proctorio/Respondus is installed',
                examghostStatus: 'Quick Mode (Alt+1) 1px Dot',
                isSafe: true,
            },
            {
                eventCode: 'Clipboard Copy / Paste Content on Multiple Choice',
                whenTriggered: 'Highlighting text on a standard Canvas quiz page',
                professorView: 'Canvas quiz_submission_events does NOT log Ctrl+C or mouse movement coordinates',
                examghostStatus: 'Double-Click Uses Zero Clipboard',
                isSafe: true,
            },
            {
                eventCode: 'Innocent OS Popups vs. Actual Tab Switching',
                whenTriggered: 'Low-battery warning, macOS/Windows notification, or accidental taskbar click',
                professorView: 'Produces the exact same "Stopped viewing" message (why logs are not sole proof)',
                examghostStatus: 'Zero False or Real Blur Logs',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why "Answered 25 Questions in 10 Seconds" Is Worse Than a Blur Event',
        whyNoSolveAllBody: (
            <>
                University academic integrity offices note that while a single <em>&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</em> event can be explained by a low-battery popup or Wi-Fi hiccup, a log showing <strong>25 complex questions answered within 8 seconds</strong> (caused by a 1-click &ldquo;Solve All&rdquo; extension) is indisputable evidence of automation. That is why ExamGhost has <strong>no &ldquo;Solve All&rdquo; button</strong>: you double-click and answer one question at a time at natural 35–90 second human intervals.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Clean Quiz Log Protocol',
        heading: 'How to Keep Your Canvas Quiz Log 100% Green From Start to Submit',
        lead: (
            <>
                Follow these 4 operational rules during every Canvas Classic or New Quizzes attempt to guarantee zero red <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">page_blurred</code> warnings and organic question timestamps:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Turn On Do Not Disturb & Full-Screen Your Chrome Window',
                shortcutBadge: 'Prevent OS Popups',
                description: (
                    <>
                        Before clicking <em>Take the Quiz</em>, enable macOS Focus / Windows Do Not Disturb so a Discord message, FaceTime call, or system update popup doesn&apos;t steal window focus and log an accidental <code className="font-mono text-xs">page_blurred</code> event.
                    </>
                ),
                plainTextForSchema:
                    'Enable Do Not Disturb before starting the Canvas quiz so operating system popups cannot steal window focus.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click One Question at a Time Inside the Active Tab',
                shortcutBadge: 'Double-Click Card',
                description: (
                    <>
                        Instead of switching tabs or clicking a second monitor (which immediately fires <code className="font-mono text-xs">window.onblur</code>), simply <strong>double-click</strong> the Canvas question card you are viewing. ExamGhost solves it inline in 0.3 seconds.
                    </>
                ),
                plainTextForSchema:
                    'Double-click the active Canvas question card to solve it inline in 0.3 seconds without switching tabs or clicking a second monitor.',
            },
            {
                stepNumber: '3',
                title: 'Use Alt+S Vision OCR Instead of Right-Click "Save Image As"',
                shortcutBadge: 'Alt + S (Zero OS Dialog)',
                description: (
                    <>
                        Never right-click and save a quiz diagram to your computer—opening the macOS Finder or Windows File Explorer dialog triggers <code className="font-mono text-xs">page_blurred</code>! Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> to crop the diagram inside the webpage viewport.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S to crop any quiz diagram directly inside the browser viewport instead of opening an OS Save Image dialog.',
            },
            {
                stepNumber: '4',
                title: 'Wait 35–90 Seconds Between Each "Answered a Question" Click',
                shortcutBadge: 'Natural Green Log',
                description: (
                    <>
                        Review the step-by-step explanation in Explain Mode (<kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+3</kbd>) and click your radio button or checkbox at a realistic reading pace so every <code className="font-mono text-xs">question_viewed</code> &rarr; <code className="font-mono text-xs">question_answered</code> interval looks 100% human.
                    </>
                ),
                plainTextForSchema:
                    'Select your verified answer after a natural 35 to 90 second reading interval so every question_viewed to question_answered timestamp is realistic.',
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
            category: 'focus',
            q: 'Do Canvas Quiz Logs automatically grade or deduct points when "Stopped viewing" appears?',
            a: (
                <>
                    No. Canvas does not automatically deduct points for <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code> events. Instead, the red <strong className="text-ink">&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</strong> warnings are shown to the professor or TA when they manually inspect your quiz log. Keeping zero red warnings ensures your log never raises suspicion during an audit.
                </>
            ),
            plainTextAnswer:
                'No. Canvas does not automatically deduct points for page_blurred events. Instead, the red Stopped viewing the Canvas quiz-taking page warnings are shown to the professor or TA when they manually inspect your quiz log. Keeping zero red warnings ensures your log never raises suspicion during an audit.',
        },
        {
            category: 'focus',
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
            category: 'focus',
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
                    Yes. In <strong className="text-ink">Canvas New Quizzes</strong>, the instructor clicks <strong className="text-ink">Moderate → View Log</strong> to see an <strong className="text-ink">Activity Log</strong> that records the exact same events: session start, question viewed/answered timestamps, and whether the student navigated away from the assessment window.
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
                    A clean log contains <strong className="text-ink">Session started</strong> at 00:00, followed by steady <strong className="text-ink">Viewed</strong> and <strong className="text-ink">Answered</strong> entries spaced 35 to 120 seconds apart, and <strong className="text-ink">zero red &ldquo;Stopped viewing&rdquo; lines</strong>. That is the exact log pattern produced when you solve questions one by one with ExamGhost.
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
                    Yes! Scroll up to the interactive <strong className="text-ink">Canvas Instructor Action Log Simulator</strong> on this page to see how each event is logged and test ExamGhost&apos;s one-by-one double-click and <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> workflow.
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
                '@type': 'WebPage',
                '@id': 'https://www.examghost.com/blog/canvas-quiz-log-explained-what-professors-see#webpage',
                url: 'https://www.examghost.com/blog/canvas-quiz-log-explained-what-professors-see',
                name: 'Canvas Quiz Log Explained: What Professors Actually See (2026 Guide)',
                headline: 'Canvas Quiz Log Explained: What Professors Actually See (2026 Guide)',
                description:
                    'Complete breakdown of the Canvas Instructor Action Log, Stopped viewing the Canvas quiz-taking page events, and timestamp pacing.',
                datePublished: '2026-03-18',
                dateModified: '2026-10-23',
                inLanguage: 'en-US',
                author: { '@type': 'Organization', '@id': 'https://www.examghost.com/#organization', name: 'ExamGhost', url: 'https://www.examghost.com' },
                isPartOf: { '@id': 'https://www.examghost.com/#website' },
                breadcrumb: { '@id': 'https://www.examghost.com/blog/canvas-quiz-log-explained-what-professors-see#breadcrumb' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['h1', '.aeo-summary', '#lms-faq h2', '#lms-faq h3', '.faq-answer'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                '@id': 'https://www.examghost.com/blog/canvas-quiz-log-explained-what-professors-see#software',
                name: 'ExamGhost Canvas Quiz Solver',
                applicationCategory: 'EducationalApplication',
                operatingSystem: 'Chrome, Edge, Brave, Arc, macOS, Windows',
                offers: {
                    '@type': 'AggregateOffer',
                    lowPrice: '0.00',
                    highPrice: '199.00',
                    priceCurrency: 'USD',
                    offerCount: '4',
                },
            },
            {
                '@type': 'BreadcrumbList',
                '@id': 'https://www.examghost.com/blog/canvas-quiz-log-explained-what-professors-see#breadcrumb',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.examghost.com' },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Security & Telemetry Research',
                        item: 'https://www.examghost.com/compare-canvas-hack-extensions',
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'Canvas Quiz Log Explained',
                        item: 'https://www.examghost.com/blog/canvas-quiz-log-explained-what-professors-see',
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

export default function CanvasQuizLogExplainedPage() {
    const config = canvasQuizLogConfig;
    const filmKey = config.slug.startsWith('blog/') ? config.slug.replace('blog/', '') : config.slug;
    const safeSlug = filmKey.replace(/\//g, '-');
    const videoUrl = `https://www.examghost.com/videos/${safeSlug}.mp4`;
    const posterUrl = `https://www.examghost.com/videos/posters/${safeSlug}-poster.jpg`;

    const rawGraph = Array.isArray(config.jsonLd?.['@graph'])
        ? (config.jsonLd['@graph'] as Record<string, unknown>[])
        : [];
    const baseGraph: Record<string, unknown>[] = [...rawGraph];

    const hasVideo = baseGraph.some((node) => node['@type'] === 'VideoObject');
    if (!hasVideo) {
        baseGraph.push({
            '@type': 'VideoObject',
            '@id': `https://www.examghost.com/${config.slug}#video`,
            name: `${config.platformName} AI Quiz Solver — 2.5D Explainer & Product Demo Film`,
            description: `16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves ${config.platformName} questions one by one via double-click and Alt+S Vision OCR inside a Closed Shadow DOM with zero blur events.`,
            thumbnailUrl: [posterUrl],
            contentUrl: videoUrl,
            uploadDate: '2026-10-22T00:00:00Z',
            duration: 'PT16S',
            publisher: {
                '@type': 'Organization',
                name: 'ExamGhost',
                url: 'https://www.examghost.com',
            },
        });
    }

    const hasHowTo = baseGraph.some((node) => node['@type'] === 'HowTo');
    if (!hasHowTo && config.howToSection) {
        baseGraph.push({
            '@type': 'HowTo',
            '@id': `https://www.examghost.com/${config.slug}#howto`,
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
            '@id': `https://www.examghost.com/${config.slug}#faq`,
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
                author: { '@type': 'Organization', '@id': 'https://www.examghost.com/#organization', name: 'ExamGhost', url: 'https://www.examghost.com' },
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
    const jumpLinks = [
        { href: '#explainer-film', label: '16s 2.5D Explainer Film' },
        ...(config.questionTypesSection ? [{ href: '#supported-question-types', label: `${config.platformShort} Question Types` }] : []),
        ...(config.telemetryForensicsSection ? [{ href: '#instructor-telemetry-audit', label: 'Instructor Log Forensics' }] : []),
        ...(config.howToSection ? [{ href: '#step-by-step-workflow', label: '1-by-1 Solve Workflow' }] : []),
        { href: '#platform-architecture', label: 'Shadow DOM Architecture' },
        { href: '#benchmark-matrix', label: 'Accuracy Benchmark' },
        ...(config.courseModulesSection ? [{ href: '#supported-courses', label: 'Courses & Textbooks' }] : []),
        { href: '#lms-faq', label: 'Technical FAQ' },
    ];

    return (
        <div className="min-h-screen bg-cream text-ink font-sans page-glow">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedJsonLd) }}
            />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-3">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-ink-muted">
                        <div className="flex items-center gap-2">
                            <Link prefetch={false} href="/" className="hover:text-cobalt transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            {isBlogArticle ? (
                                <>
                                    <Link
                                        prefetch={false}
                                        href="/compare-canvas-hack-extensions"
                                        className="hover:text-cobalt transition-colors"
                                    >
                                        Security &amp; Telemetry Research
                                    </Link>
                                    <span>/</span>
                                    <span className="text-ink font-semibold">{config.platformName}</span>
                                </>
                            ) : (
                                <>
                                    <Link
                                        prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="hover:text-cobalt transition-colors"
                                    >
                                        Live Sandbox
                                    </Link>
                                    <span>/</span>
                                    <span className="text-ink font-semibold">{config.platformName} Solver</span>
                                </>
                            )}
                        </div>
                        <div className="inline-flex items-center gap-2 text-[11px] font-medium text-ink-muted bg-paper px-3 py-1 rounded-full border border-ink/[0.09]">
                            <ShieldCheck className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                            <span>Reviewed by the ExamGhost team · Updated Oct 2026</span>
                        </div>
                    </nav>
                </div>

                {/* 1. HERO + BESPOKE 3-SCENE FRAMER MOTION DEMO */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="max-w-[72ch] mb-8 sm:mb-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper border border-ink/[0.1] text-xs font-semibold text-ink">
                            <span
                                className="w-2 h-2 rounded-full animate-pulse"
                                style={{ backgroundColor: config.heroDotColor }}
                                aria-hidden="true"
                            />
                            <span>{config.heroBadge}</span>
                        </div>

                        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-ink leading-[1.06]">
                            {config.h1Title}{' '}
                            <span className="text-ink-muted font-medium">{config.h1Highlight}</span>
                        </h1>

                        {isBlogArticle && (
                            <div className="flex flex-wrap items-center gap-2.5 pt-1 pb-1 text-xs text-ink-muted">
                                <div className="inline-flex items-center gap-2 bg-paper px-3 py-1.5 rounded-full border border-ink/[0.09]">
                                    <img
                                        src="/images/ghost/ghost_mascot_hero.jpg"
                                        alt="ExamGhost"
                                        width={22}
                                        height={22}
                                        className="w-5 h-5 rounded-full object-cover border border-ink/[0.1]"
                                    />
                                    <span className="font-semibold text-ink">The ExamGhost team</span>
                                </div>
                                <span>·</span>
                                <span>Reviewed against Instructure Canvas Open-Source Repo</span>
                                <span>·</span>
                                <time dateTime="2026-10-23" className="font-semibold text-emeraldBrand bg-emeraldBrand-soft border border-emeraldBrand/25 px-2.5 py-0.5 rounded-full">
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
                                className="btn-dark px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-lift"
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
                                <FaDiscord className="w-4 h-4 text-discord" aria-hidden="true" />
                                <span>Join 15,000+ Students on Discord</span>
                            </a>
                        </div>

                        {/* Keyboard Shortcuts & Pricing Invariants */}
                        <div className="pt-2 space-y-2">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                                <span className="font-semibold text-ink">Keyboard Shortcuts:</span>
                                <kbd className="kbd-key">Double-Click</kbd>
                                <kbd className="kbd-key">Alt+S</kbd>
                                <kbd className="kbd-key">Alt+1</kbd>
                                <kbd className="kbd-key">Alt+2</kbd>
                                <kbd className="kbd-key">Alt+3</kbd>
                            </div>
                            <div className="text-xs text-ink-muted font-medium">
                                <span className="text-emeraldBrand font-semibold">5 Free Solves / Day ($0 · Auto-refills every 24h · No credit card required)</span> · $19/mo · $99/yr ($8.25/mo) · $199 Lifetime
                            </div>
                        </div>
                    </div>

                    {/* Embedded Bespoke 3-Scene Framer Motion Video Demo */}
                    <CanvasQuizLogMotionDemo />

                    {/* Mobile / Tablet Quick Jump Navigation Bar */}
                    <nav aria-label="On this page" className="lg:hidden mt-8 flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-xs font-semibold text-ink-muted mr-1">
                            On this page:
                        </span>
                        {jumpLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="px-3 py-1.5 rounded-full bg-paper hover:bg-surface-dark hover:text-white border border-ink/[0.1] text-xs font-medium text-ink transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </section>

                {/* 2. DEEP BESPOKE PLATFORM CONTENT + ARCHITECTURE + BENCHMARK + FAQ */}
                <section className="border-t border-ink/[0.08] bg-cream py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-12 items-start">
                        <aside className="hidden lg:block sticky top-24">
                            <p className="text-xs font-semibold text-ink-muted mb-3">On this page</p>
                            <nav aria-label="On this page" className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                                {jumpLinks.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="block py-2.5 text-xs font-medium text-ink-secondary hover:text-cobalt transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </aside>

                        <div className="min-w-0 space-y-16 sm:space-y-24">
                            {/* Unique 16s 2.5D Motion Explainer MP4 Film */}
                            <div id="explainer-film" className="scroll-mt-24">
                                <LmsExplainerFilmCard
                                    slug={config.slug}
                                    platformName={config.platformName}
                                    heroDotColor={config.heroDotColor}
                                />
                            </div>

                            {/* BESPOKE SECTION A: SUPPORTED QUESTION TYPES & DOM MATRIX */}
                            {config.questionTypesSection && (
                                <div id="supported-question-types" className="scroll-mt-24 space-y-8">
                                    <div className="max-w-[72ch] space-y-3">
                                        <p className="inline-flex items-center gap-2 text-sm font-medium text-cobalt">
                                            <span
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: config.heroDotColor }}
                                                aria-hidden="true"
                                            />
                                            <span>{config.questionTypesSection.eyebrow}</span>
                                        </p>
                                        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-ink leading-[1.08]">
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
                                                className="rounded-2xl bg-paper border border-ink/[0.09] p-6 shadow-card flex flex-col justify-between space-y-4 hover:border-ink/20 transition-colors"
                                            >
                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="px-2.5 py-1 rounded-md bg-surface-subtle border border-ink/[0.08] font-mono text-[11px] font-semibold text-ink">
                                                            {qItem.codeTag}
                                                        </span>
                                                        <span
                                                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                                                                qItem.triggerMethod === 'Alt+S Vision OCR'
                                                                    ? 'bg-[#e2d3fa]/60 text-purple-950 border border-purple-900/15'
                                                                    : qItem.triggerMethod === 'Hybrid DOM + OCR'
                                                                    ? 'bg-cobalt-soft text-cobalt border border-cobalt/20'
                                                                    : 'bg-emeraldBrand-soft text-emerald-950 border border-emeraldBrand/20'
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

                                                <div className="pt-3 border-t border-ink/[0.08] flex items-center justify-between text-xs">
                                                    <span className="font-medium text-ink-muted">Verified Accuracy</span>
                                                    <span className="font-mono font-semibold text-emeraldBrand bg-emeraldBrand-soft px-2.5 py-0.5 rounded-full">
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
                                className="scroll-mt-24 bg-paper rounded-3xl p-6 sm:p-10 md:p-12 border border-ink/[0.09] shadow-lift"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                                    <div className="lg:col-span-5">
                                        <div
                                            className="rounded-2xl p-6 sm:p-8 border flex flex-col items-center justify-center text-center relative overflow-hidden group"
                                            style={{
                                                backgroundColor: config.architecture.cardBg,
                                                borderColor: config.architecture.cardBorder,
                                            }}
                                        >
                                            <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-ink/[0.08] shadow-soft bg-cream relative mb-4">
                                                <img
                                                    src={mascotImgSrc}
                                                    alt={`${config.platformName} Closed Shadow DOM Mascot`}
                                                    width={192}
                                                    height={192}
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
                                                        className="text-xs font-medium px-3 py-1 rounded-full bg-paper text-ink border border-ink/[0.09] shadow-xs"
                                                    >
                                                        {pill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-7 space-y-5">
                                        <p className="inline-flex items-center gap-2 text-sm font-medium text-cobalt">
                                            <span
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: config.heroDotColor }}
                                                aria-hidden="true"
                                            />
                                            <span>{config.architecture.eyebrow}</span>
                                        </p>
                                        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-ink leading-[1.08]">
                                            {config.architecture.heading}
                                        </h2>
                                        <p className="text-sm sm:text-base text-ink-secondary max-w-[68ch] leading-relaxed">
                                            {config.architecture.lead}
                                        </p>

                                        <div className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                                            {config.architecture.pillars.map((pillar: any) => (
                                                <article
                                                    key={pillar.title}
                                                    className="py-4 flex items-start gap-3.5"
                                                >
                                                    <img
                                                        src={pillar.image}
                                                        alt={pillar.title}
                                                        width={44}
                                                        height={44}
                                                        className="w-11 h-11 rounded-xl object-cover border border-ink/[0.1] shrink-0 mt-0.5"
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
                                <div id="instructor-telemetry-audit" className="scroll-mt-24 space-y-6">
                                    <div className="max-w-[72ch] space-y-3">
                                        <p className="inline-flex items-center gap-2 text-sm font-medium text-cobalt">
                                            <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                                            <span>{config.telemetryForensicsSection.eyebrow}</span>
                                        </p>
                                        <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-[-0.025em] leading-[1.08]">
                                            {config.telemetryForensicsSection.heading}
                                        </h2>
                                        <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                            {config.telemetryForensicsSection.lead}
                                        </p>
                                    </div>

                                    <div className="dark-surface rounded-3xl bg-surface-dark bg-dark-grid text-cream border border-white/10 surface-dark-card overflow-hidden">
                                        <div className="px-6 py-4 bg-white/[0.04] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                                                <span className="font-mono text-xs font-semibold text-white">
                                                    {config.telemetryForensicsSection.logTableTitle}
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-mono text-emerald-300 bg-emerald-400/10 border border-emerald-400/25 px-3 py-1 rounded-full">
                                                {config.telemetryForensicsSection.citationNote}
                                            </span>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                                <thead>
                                                    <tr className="border-b border-white/10 bg-white/[0.02] text-white/70 font-mono text-xs">
                                                        <th className="py-3.5 px-6 font-medium">Telemetry / Log Event</th>
                                                        <th className="py-3.5 px-6 font-medium">What Triggers It</th>
                                                        <th className="py-3.5 px-6 font-medium">What Instructor Sees</th>
                                                        <th className="py-3.5 px-6 font-medium">ExamGhost 1-by-1 Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/10">
                                                    {config.telemetryForensicsSection.events.map((ev: any, eIdx: number) => (
                                                        <tr key={eIdx} className="hover:bg-white/[0.02]">
                                                            <td className="py-4 px-6 font-mono font-semibold text-emerald-300">
                                                                {ev.eventCode}
                                                            </td>
                                                            <td className="py-4 px-6 text-white/80">{ev.whenTriggered}</td>
                                                            <td className="py-4 px-6 text-white/75">{ev.professorView}</td>
                                                            <td className="py-4 px-6">
                                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-400/15 text-emerald-300 border border-emerald-400/30">
                                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                                                                    <span>{ev.examghostStatus}</span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="p-6 sm:p-7 bg-white/[0.04] border-t border-white/10 flex flex-col sm:flex-row items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-amber-300/15 border border-amber-300/30 flex items-center justify-center shrink-0 mt-0.5">
                                                <AlertTriangle className="w-5 h-5 text-amber-300" aria-hidden="true" />
                                            </div>
                                            <div className="space-y-1.5 max-w-[68ch]">
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
                                <div id="step-by-step-workflow" className="scroll-mt-24 space-y-8">
                                    <div className="max-w-[72ch] space-y-3">
                                        <p className="inline-flex items-center gap-2 text-sm font-medium text-cobalt">
                                            <Keyboard className="w-3.5 h-3.5" aria-hidden="true" />
                                            <span>{config.howToSection.eyebrow}</span>
                                        </p>
                                        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-ink leading-[1.08]">
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
                                                className="rounded-2xl bg-paper border border-ink/[0.09] p-6 sm:p-7 shadow-card flex flex-col justify-between space-y-4"
                                            >
                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-dark text-white font-display font-bold text-sm">
                                                            {step.stepNumber}
                                                        </span>
                                                        <span className="px-3 py-1 rounded-full bg-surface-subtle border border-ink/[0.09] font-mono text-xs font-semibold text-ink">
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
                            <div id="benchmark-matrix" className="scroll-mt-24 space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                    <div className="max-w-[68ch]">
                                        <p className="inline-flex items-center gap-2 text-sm font-medium text-cobalt mb-2">
                                            <span className="w-2 h-2 rounded-full bg-ink" aria-hidden="true" />
                                            <span>{config.benchmark.eyebrow}</span>
                                        </p>
                                        <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-[-0.025em]">
                                            {config.benchmark.heading}
                                        </h2>
                                    </div>
                                    <Link
                                        prefetch={false}
                                        href="/compare-canvas-hack-extensions"
                                        className="btn-soft px-4 py-2 text-xs font-semibold"
                                    >
                                        <span>Compare all 57 extensions</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                                    </Link>
                                </div>

                                <div className="rounded-2xl bg-paper border border-ink/[0.09] shadow-card overflow-hidden">
                                    <div className="bg-surface-subtle border-b border-ink/[0.08] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-ink/10 inline-block" aria-hidden="true" />
                                            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-ink/10 inline-block" aria-hidden="true" />
                                            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-ink/10 inline-block" aria-hidden="true" />
                                            <span className="text-xs font-semibold text-ink ml-2 font-mono">
                                                {config.benchmark.windowTitle}
                                            </span>
                                        </div>
                                        <span className="text-[11px] font-semibold text-emeraldBrand bg-emeraldBrand-soft border border-emeraldBrand/25 px-2.5 py-0.5 rounded-full">
                                            {config.benchmark.windowBadge}
                                        </span>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                            <thead>
                                                <tr className="border-b border-ink/[0.08] bg-surface-subtle/60 text-ink font-display">
                                                    <th className="py-4 px-6 font-bold">
                                                        {config.platformShort} Capability / Telemetry Vector
                                                    </th>
                                                    <th className="py-4 px-6 font-bold bg-emeraldBrand-soft/60">
                                                        <span className="inline-flex items-center gap-1.5">
                                                            <ShieldCheck
                                                                className="w-4 h-4 text-emeraldBrand"
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
                                            <tbody className="divide-y divide-ink/[0.08]">
                                                {config.benchmark.rows.map((row: any, rIdx: number) => (
                                                    <tr key={rIdx}>
                                                        <td className="py-4 px-6 font-semibold text-ink">
                                                            {row.capability}
                                                        </td>
                                                        <td className="py-4 px-6 font-semibold text-ink bg-emeraldBrand-soft/25">
                                                            <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                                <CheckCircle2
                                                                    className="w-4 h-4 text-emeraldBrand shrink-0"
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
                                <div id="supported-courses" className="scroll-mt-24 space-y-8">
                                    <div className="max-w-[72ch] space-y-3">
                                        <p className="inline-flex items-center gap-2 text-sm font-medium text-cobalt">
                                            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                                            <span>{config.courseModulesSection.eyebrow}</span>
                                        </p>
                                        <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-[-0.025em] leading-[1.08]">
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
                                                className="rounded-2xl bg-paper border border-ink/[0.09] p-6 shadow-card space-y-3"
                                            >
                                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                                    <span className="text-xs font-semibold text-ink-muted">
                                                        {mod.department}
                                                    </span>
                                                    <span className="px-2.5 py-0.5 rounded-full bg-surface-subtle border border-ink/[0.09] font-mono text-[11px] font-semibold text-ink">
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

                            {/* Two-Card Bento Hub */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                                <div className="lg:col-span-6 rounded-3xl bg-cobalt-soft/60 border border-cobalt/20 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="text-xs font-semibold text-cobalt">
                                                20+ Supported Platforms
                                            </span>
                                            <img
                                                src="/images/ghost/ghost_card_lms.jpg"
                                                alt="Supported University LMS Platforms"
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 rounded-xl object-cover border border-ink/[0.1] shadow-xs"
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
                                                className="px-3 py-1.5 rounded-full bg-paper hover:bg-surface-dark hover:text-white border border-ink/[0.09] text-ink font-medium transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-6 rounded-3xl bg-[#e2d3fa]/40 border border-[#e2d3fa] p-6 sm:p-8 flex flex-col justify-between space-y-5">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="text-xs font-semibold text-ink-secondary">
                                                2026 Extension Teardowns
                                            </span>
                                            <img
                                                src="/images/ghost/ghost_card_proctor.jpg"
                                                alt="Extension Security Comparisons"
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 rounded-xl object-cover border border-ink/[0.1] shadow-xs"
                                            />
                                        </div>
                                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                            Side-by-side accuracy &amp; architecture teardowns
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
                                                className="px-3 py-1.5 rounded-full bg-paper hover:bg-surface-dark hover:text-white border border-ink/[0.09] text-ink font-medium transition-colors"
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
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
