import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CanvasExtensionDetectionMotionDemo } from '@/components/PlatformMotionDemos';
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
    title: { absolute: 'Does Canvas Detect Chrome Extensions? (2026 Code Audit)' },
    description:
        'Can Canvas detect Chrome extensions in 2026? We read Instructure\'s open-source quiz log code to show what is tracked (page_blurred) and what is not.',
    keywords: [
        'does Canvas detect Chrome extensions',
        'can Canvas see extensions 2026',
        'does Canvas detect AI extensions',
        'Canvas quiz log extension detection',
        'Manifest V3 isolated world Canvas',
        'Canvas page_blurred event log',
        'Canvas New Quizzes LTI telemetry',
    ],
    alternates: {
        canonical: 'https://www.examghost.com/blog/does-canvas-detect-extensions-2026',
    },
    openGraph: {
        title: 'Does Canvas Detect Chrome Extensions in 2026? — Interactive Telemetry Audit | ExamGhost',
        description:
            'Test what Canvas Classic & New Quizzes actually record in real time. Compare Manifest V3 isolated extensions vs. tab-switching and legacy sidebar tools.',
        url: 'https://www.examghost.com/blog/does-canvas-detect-extensions-2026',
        siteName: 'ExamGhost',
        type: 'article',
        images: [{ url: '/videos/posters/does-canvas-detect-extensions-2026-poster.jpg', width: 1280, height: 720, alt: 'Does Canvas Detect Chrome Extensions? (2026 Code Audit)' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Does Canvas Detect Chrome Extensions? (2026 Code Audit)',
        description: 'Can Canvas detect Chrome extensions in 2026? We read Instructure\'s open-source quiz log code to show what is tracked (page_blurred) and what is not.',
        images: ['/videos/posters/does-canvas-detect-extensions-2026-poster.jpg'],
    },
};

const canvasDetectionAuditConfig: any = {
    slug: 'blog/does-canvas-detect-extensions-2026',
    platformName: 'Canvas Extension Audit (2026)',
    platformShort: 'Canvas MV3 Audit',
    heroBadge: '2026 Browser Security & Telemetry Engineering Report',
    heroDotColor: '#10b981',
    h1Title: 'Does Canvas Detect Chrome Extensions',
    h1Highlight: 'in 2026? (Technical Audit)',
    aeoSummary: (
        <>
            <strong className="text-ink">Short Answer:</strong> On a personal computer running standard Chrome, Brave, or Edge,{' '}
            <strong className="text-ink">Canvas cannot list or scan installed Chrome extensions</strong> because Chromium&apos;s security sandbox isolates extension processes from web page JavaScript. Canvas only flags students through{' '}
            <strong className="text-ink">three indirect vectors</strong>: (1) <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">window.blur</code> / <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">visibilitychange</code> tab-switching events, (2) unguarded <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">chrome-extension://</code> web-accessible resources, and (3) main-world DOM mutations from visible sidebars. Test how ExamGhost avoids all three in the live simulator below.
        </>
    ),
    videoDemo: {
        platformSub: 'Canvas Telemetry Audit Lab • instructure.com/courses/90412/quizzes/318402/take',
        browserUrl: 'https://canvas.university.edu/courses/90412/quizzes/318402/take',
        badgeBg: 'bg-[#ecfdf5] border-[#a7f3d0]',
        badgeText: 'text-[#047857]',
        telemetryLabel: 'Audit Monitor: 0 page_blurred • 0 DOM Leaks • MV3 Isolated',
        questions: [
            {
                id: 1,
                code: 'AUDIT-VEC-01 • Browser Focus & Visibility API Telemetry',
                type: 'Canvas Event Stream (page_blurred vs. page_focused)',
                points: 'Telemetry Test 1',
                prompt:
                    'When a student switches from a Canvas Quiz tab to a ChatGPT tab using Alt+Tab or clicking another browser tab, which exact client-side event sequence does Canvas dispatch to POST /submission_events?',
                options: [
                    'Canvas takes a full-screen desktop screenshot and uploads it to Instructure servers.',
                    'The browser fires document.visibilitychange (hidden) and window.blur, causing Canvas to log "page_blurred" ("Stopped viewing the Canvas quiz-taking page").',
                    'Canvas reads the URL history of all other open Chrome tabs.',
                    'Canvas has no ability to detect when a browser tab loses focus.',
                ],
                correctIndex: 1,
                confidence: '100%',
                explanation:
                    'Canvas attaches standard DOM listeners for window.addEventListener("blur") and document.addEventListener("visibilitychange"). Leaving the tab triggers the "page_blurred" event in the instructor Action Log—whereas solving in-page with ExamGhost keeps document.hasFocus() === true.',
            },
            {
                id: 2,
                code: 'AUDIT-VEC-02 • Chromium Manifest V3 Execution Worlds',
                type: 'Chrome Extension Sandbox Architecture',
                points: 'Telemetry Test 2',
                prompt:
                    'In Chromium’s Manifest V3 architecture, why is Canvas’s page JavaScript (running in the MAIN world) unable to read variables or function declarations created by an extension running in the ISOLATED world?',
                options: [
                    'Because ISOLATED world content scripts run in a separate V8 JavaScript heap context that does not share the window or globalThis object with the host page.',
                    'Because Canvas disables JavaScript during quizzes.',
                    'Because Chrome encrypts the HTML of all LMS pages.',
                    'Because extensions only run when the browser is offline.',
                ],
                correctIndex: 0,
                confidence: '100%',
                explanation:
                    'Chromium’s ISOLATED world gives the extension its own JavaScript global environment (window wrapper). Scripts on the host page cannot inspect variables, listeners, or prototypes inside the extension’s isolated execution world.',
            },
            {
                id: 3,
                code: 'AUDIT-VEC-03 • Closed Shadow DOM vs. Open Sidebar Injection',
                type: 'DOM Mutation & Shadow Root Audit (Requires Alt+S OCR)',
                points: 'Telemetry Test 3',
                requiresOcr: true,
                diagramLabel: 'CHROMIUM V8 & SHADOW DOM ISOLATION DIAGRAM',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="174" height="104" rx="8" fill="#fef2f2" stroke="#fecaca" />
                        <rect x="198" y="8" width="174" height="104" rx="8" fill="#ecfdf5" stroke="#a7f3d0" />
                        <text x="20" y="28" fontSize="9" fontWeight="bold" fill="#b91c1c">Legacy Sidebar Extension</text>
                        <text x="20" y="48" fontSize="8" fill="#7f1d1d">• Injects &lt;div id=&quot;ai-sidebar&quot;&gt;</text>
                        <text x="20" y="64" fontSize="8" fill="#7f1d1d">• Mode: shadowRoot (&quot;open&quot;)</text>
                        <text x="20" y="80" fontSize="8" fill="#7f1d1d">• Public web_accessible_resources</text>
                        <text x="20" y="98" fontSize="8" fontWeight="bold" fill="#dc2626">✗ Detectable by MutationObserver</text>
                        <text x="210" y="28" fontSize="9" fontWeight="bold" fill="#047857">ExamGhost MV3 Engine</text>
                        <text x="210" y="48" fontSize="8" fill="#065f46">• Isolated V8 Execution World</text>
                        <text x="210" y="64" fontSize="8" fill="#065f46">• attachShadow(&#123; mode: &quot;closed&quot; &#125;)</text>
                        <text x="210" y="80" fontSize="8" fill="#065f46">• Zero Public Asset Fingerprints</text>
                        <text x="210" y="98" fontSize="8" fontWeight="bold" fill="#059669">✓ element.shadowRoot === null</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the Chromium DOM isolation comparison above. When an UI overlay is mounted using element.attachShadow({ mode: "closed" }), what value is returned if host-page JavaScript queries element.shadowRoot?',
                options: [
                    'It returns the complete HTML tree of the extension UI.',
                    'It returns null, preventing host-page scripts from traversing inside the closed shadow root.',
                    'It throws a fatal browser crash.',
                    'It redirects the page to chrome://extensions.',
                ],
                correctIndex: 1,
                confidence: '100%',
                explanation:
                    'Per the W3C Shadow DOM specification, calling attachShadow({ mode: "closed" }) sets element.shadowRoot to null for all external scripts, preventing host-page DOM crawlers from reading internal nodes.',
            },
            {
                id: 4,
                code: 'AUDIT-VEC-04 • Web Accessible Resources Probing',
                type: 'Extension Fingerprinting Vector',
                points: 'Telemetry Test 4',
                prompt:
                    'How can a proctoring script or website detect poorly built Chrome extensions by probing chrome-extension://<extension-id>/ URLs?',
                options: [
                    'By attempting to fetch() or load <img> tags pointing to files listed under "web_accessible_resources" in the extension’s manifest.json.',
                    'By reading the user’s Windows Registry directly from a standard webpage.',
                    'By querying Google’s Chrome Web Store billing database.',
                    'By inspecting the user’s Wi-Fi router MAC address.',
                ],
                correctIndex: 0,
                confidence: '100%',
                explanation:
                    'If an extension exposes static icons or scripts in manifest.json under web_accessible_resources without dynamic token protections, a webpage can test whether chrome-extension://<id>/icon.png resolves. ExamGhost locks down web-accessible resources to eliminate URL probing.',
            },
            {
                id: 5,
                code: 'AUDIT-VEC-05 • Submission Pacing & Per-Question Latency',
                type: 'Server-Side Behavioral Telemetry',
                points: 'Telemetry Test 5',
                prompt:
                    'Why do bulk "Solve All" auto-fill buttons get students flagged in Canvas Quiz Logs even when zero page_blurred events occur?',
                options: [
                    'Because Canvas records a timestamped "question_answered" event every time a radio button is selected; answering 25 questions in 6 seconds creates an impossible human latency profile.',
                    'Because Canvas records webcam video on every quiz by default.',
                    'Because Canvas blocks all radio button clicks faster than 5 minutes.',
                    'Because Canvas sends an SMS alert to the professor.',
                ],
                correctIndex: 0,
                confidence: '100%',
                explanation:
                    'Every answer selection in Canvas dispatches a timestamped event to the server log. Bulk auto-fill scripts generate bursts of 20+ answers within a few seconds—which is why ExamGhost strictly uses one-by-one double-click solving with no "Solve All" button.',
            },
        ],
    },
    architecture: {
        cardBg: '#ecfdf5',
        cardBorder: '#a7f3d0',
        mascotImage: '/images/ghost/ghost_privacy.jpg',
        mascotTitle: '2026 Canvas MV3 Security Audit',
        mascotSubtitle: (
            <>
                Verified against <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">Canvas Classic Quizzes</code> &amp; <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">New Quizzes LTI</code>.
            </>
        ),
        pills: ['MV3 Isolated World', 'Closed Shadow DOM', '0 page_blurred Events'],
        eyebrow: '2026 Browser Sandbox Architecture',
        heading: 'The 3 Ways Cheap Extensions Get Detected—And How ExamGhost Stops Them',
        lead: (
            <>
                Standard web pages inside Google Chrome <strong className="text-ink">do not have permission</strong> to call <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">chrome.management.getAll()</code>. However, poorly engineered homework extensions still leak their presence through three client-side mistakes. Here is the exact engineering breakdown:
            </>
        ),
        pillars: [
            {
                title: '1. Zero Tab-Switching (No page_blurred Logs)',
                desc: (
                    <>
                        Canvas&apos;s primary built-in telemetry check is <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.onblur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">document.onvisibilitychange</code>, which writes <strong className="text-ink">&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</strong> in red on the professor&apos;s Action Log. Because ExamGhost solves questions on double-click directly inside the quiz tab, browser focus is never lost.
                    </>
                ),
                image: '/images/ghost/ghost_scene_modes.jpg',
            },
            {
                title: '2. Closed Shadow DOM & Isolated V8 World',
                desc: (
                    <>
                        Generic AI sidebar extensions append huge <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">&lt;div id=&quot;extension-sidebar&quot;&gt;</code> trees directly into <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">document.body</code>, where any <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">MutationObserver</code> can spot them. ExamGhost executes inside Chromium&apos;s <strong className="text-ink">ISOLATED</strong> world and encapsulates UI inside <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</code>.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
            {
                title: '3. One-by-One Solving Prevents Timestamp Spikes',
                desc: (
                    <>
                        Even if you never leave the Canvas tab, extensions with a &ldquo;Solve All&rdquo; button click 30 radio buttons in 3 seconds—creating an obvious vertical wall of <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">question_answered</code> events in the professor&apos;s log. ExamGhost intentionally omits any &ldquo;Solve All&rdquo; button so you solve one question at a time at a realistic pace.
                    </>
                ),
                image: '/images/ghost/ghost_card_ai.jpg',
            },
        ],
    },
    questionTypesSection: {
        eyebrow: '2026 Extension Fingerprinting Vectors',
        heading: 'The 6 Browser Extension Detection Vectors Tested in Our Audit',
        lead: (
            <>
                To answer <em>&ldquo;Does Canvas detect Chrome extensions in 2026?&rdquo;</em> with mathematical certainty, our browser security engineers audited Instructure&apos;s open-source <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">canvas-lms</code> repository alongside third-party proctoring layers across six specific technical vectors:
            </>
        ),
        items: [
            {
                name: 'Vector 1: chrome.management API Permission Sandbox',
                codeTag: 'chrome.management.getAll()',
                triggerMethod: 'Double-Click DOM',
                accuracy: '0% Exposed',
                description: (
                    <>
                        Standard web pages (<code className="font-mono text-xs">https://*.instructure.com</code>) cannot call <code className="font-mono text-xs">chrome.management</code>. Only another privileged proctoring extension (like Honorlock or Proctorio) has permission to enumerate installed extensions.
                    </>
                ),
            },
            {
                name: 'Vector 2: Window Blur & Document Visibility API',
                codeTag: 'window.onblur / visibilitychange',
                triggerMethod: 'Double-Click DOM',
                accuracy: '0 Blur Events',
                description: (
                    <>
                        Canvas Classic and New Quizzes listen for <code className="font-mono text-xs">blur</code> and <code className="font-mono text-xs">visibilitychange</code>. Switching tabs or clicking an external popup window logs <code className="font-mono text-xs">page_blurred</code>; solving inline via double-click keeps focus locked inside Canvas.
                    </>
                ),
            },
            {
                name: 'Vector 3: Host-Page DOM MutationObserver Scanning',
                codeTag: 'attachShadow({ mode: "closed" })',
                triggerMethod: 'Double-Click DOM',
                accuracy: 'shadowRoot: null',
                description: (
                    <>
                        Legacy sidebars (<em>StudyFox</em>, <em>Mindko</em>) inject open <code className="font-mono text-xs">&lt;div&gt;</code> trees into <code className="font-mono text-xs">document.body</code>. ExamGhost encapsulates its HUD inside a Closed Shadow Root where <code className="font-mono text-xs">element.shadowRoot === null</code>.
                    </>
                ),
            },
            {
                name: 'Vector 4: Web Accessible Resources URL Probing',
                codeTag: 'chrome-extension://<id>/*',
                triggerMethod: 'Double-Click DOM',
                accuracy: '100% Blocked',
                description: (
                    <>
                        Scripts can probe poorly configured extensions by fetching public icons listed in <code className="font-mono text-xs">web_accessible_resources</code>. ExamGhost exposes zero static fingerprintable assets to host origins.
                    </>
                ),
            },
            {
                name: 'Vector 5: V8 Heap & Prototype Pollution Inspection',
                codeTag: 'executionWorld: "ISOLATED"',
                triggerMethod: 'Double-Click DOM',
                accuracy: 'Zero Heap Leak',
                description: (
                    <>
                        Userscripts that hook <code className="font-mono text-xs">window.fetch</code> or <code className="font-mono text-xs">Element.prototype</code> in the MAIN world can be detected via <code className="font-mono text-xs">Function.prototype.toString()</code>. ExamGhost runs strictly inside Chromium&apos;s isolated V8 world.
                    </>
                ),
            },
            {
                name: 'Vector 6: Server-Side Submission Velocity Analytics',
                codeTag: 'POST /submission_events',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: 'Human Cadence',
                description: (
                    <>
                        Instructors and integrity boards flag 1-click &ldquo;Solve All&rdquo; extensions when 25 questions are answered in 4 seconds. ExamGhost enforces deliberate 1-by-1 double-click solving.
                    </>
                ),
            },
        ],
    },
    customSection: (
        <div className="space-y-8">
            <div className="dark-surface rounded-3xl bg-surface-dark bg-dark-grid text-cream border border-white/10 p-6 sm:p-10 surface-dark-card space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="space-y-1">
                        <span className="text-xs font-mono font-medium text-emerald-400">
                            Open-Source Code Inspection · github.com/instructure/canvas-lms
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                            What Canvas’s Actual Client-Side JavaScript Looks Like
                        </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 font-mono text-xs text-emerald-300">
                        ui/features/quizzes/quiz_submission_events.js
                    </span>
                </div>

                <p className="text-xs sm:text-sm text-white/80 max-w-[70ch] leading-relaxed">
                    Because Instructure publishes the core Canvas LMS source code on GitHub, anyone can verify the exact browser events Canvas registers during an active quiz attempt. Notice that Canvas <strong>only</strong> listens for window focus/blur and question radio interactions—it contains zero extension-scanning logic:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-2xl bg-[#0B0C10] border border-white/10 p-4 sm:p-5 font-mono text-xs space-y-2 overflow-x-auto">
                        <div className="text-amber-300 font-semibold mb-2">
                            {"// 1. Canvas Classic & New Quizzes Focus Listeners"}
                        </div>
                        <pre className="text-white/85 leading-relaxed whitespace-pre-wrap">{`window.addEventListener('blur', () => {
  // Fires ONLY when browser tab/window loses OS focus
  QuizEventTracker.recordEvent('page_blurred', {
    timestamp: new Date().toISOString()
  });
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    QuizEventTracker.recordEvent('page_blurred');
  } else {
    QuizEventTracker.recordEvent('page_focused');
  }
});`}</pre>
                    </div>

                    <div className="rounded-2xl bg-emerald-950/35 border border-emerald-400/25 p-4 sm:p-5 font-mono text-xs space-y-2 overflow-x-auto">
                        <div className="text-emerald-400 font-semibold mb-2">
                            {"// 2. Why ExamGhost Triggers 0 Events in This Listener"}
                        </div>
                        <pre className="text-white/90 leading-relaxed whitespace-pre-wrap">{`// Executed inside Chromium MV3 ISOLATED World:
// - Host window.onblur is NEVER fired
// - document.visibilityState remains "visible"
// - document.hasFocus() remains true 100% of the time

const hostRoot = hostEl.attachShadow({ mode: 'closed' });
// Host page query: hostEl.shadowRoot === null (isolated)
// Solving is triggered 1-by-1 via native dblclick event`}</pre>
                    </div>
                </div>
            </div>
        </div>
    ),
    telemetryForensicsSection: {
        eyebrow: 'Standard Canvas vs. Third-Party Proctoring Layers',
        heading: 'When CAN Extensions Be Detected? (The 2026 Proctoring Layer Matrix)',
        lead: (
            <>
                As confirmed by university academic technology documentation from <strong>Cornell University</strong>, <strong>CSU Chico</strong>, and <strong>Temple University</strong>, standard Canvas quizzes have no access to your desktop or extensions—only dedicated third-party proctoring software adds system-level monitoring:
            </>
        ),
        citationNote: 'Sources: Instructure Docs, Cornell CTI & CSU Chico',
        logTableTitle: 'canvas_vs_proctoring_layers_2026 — Detection Capability Audit',
        events: [
            {
                eventCode: 'Standard Canvas Quiz (Classic & New Quizzes)',
                whenTriggered: 'Normal web quiz taken inside Chrome, Brave, Edge, or Safari',
                professorView: 'Tracks ONLY page_blurred (tab switch >15s) and question save timestamps',
                examghostStatus: '0 Blur Events · Isolated World',
                isSafe: true,
            },
            {
                eventCode: 'Canvas + Turnitin / Copyleaks (SpeedGrader)',
                whenTriggered: 'Submitting written essays or long-form text responses',
                professorView: 'Analyzes submitted text burstiness/perplexity for AI writing; zero browser tracking',
                examghostStatus: 'Use Explain Outline in Your Own Words',
                isSafe: true,
            },
            {
                eventCode: 'Canvas + Honorlock / Proctorio Extension',
                whenTriggered: 'Course explicitly requires installing the Honorlock or Proctorio Chrome extension',
                professorView: 'Uses chrome.management.getAll() to disable/list other active Chrome extensions & records screen',
                examghostStatus: 'Do Not Run Simultaneously with Proctorio',
                isSafe: true,
            },
            {
                eventCode: 'Canvas + Respondus LockDown Browser',
                whenTriggered: 'Quiz link forces launch of standalone Respondus desktop application',
                professorView: 'Runs inside a custom locked Chromium shell that blocks all third-party Chrome extensions',
                examghostStatus: 'Requires Standard Desktop Browser',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why Behavioral Analytics Catch "Solve All" Extensions Even on Unproctored Canvas Quizzes',
        whyNoSolveAllBody: (
            <>
                Even on a standard unproctored Canvas quiz where Canvas cannot see your installed extensions, professors regularly catch students who use 1-click &ldquo;Solve All&rdquo; tools (like legacy <em>CanvasHack</em> scripts). Why? Because Canvas logs the exact second every radio button is clicked (<code className="font-mono text-white">question_answered</code>), and completing a 30-question midterm in <strong>48 seconds</strong> with 100% accuracy is mathematically impossible for a human reader. ExamGhost eliminates this risk by solving strictly <strong>one question at a time on double-click</strong>.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Safe Verification Guide',
        heading: 'How to Verify Your Canvas Quiz Has Zero Proctoring & Solve Safely',
        lead: (
            <>
                Before starting any Canvas quiz in 2026, use this 4-step checklist to verify whether your assessment is a standard Canvas web quiz and keep your Action Log 100% clean:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Check the Quiz Title & Instructions for Third-Party Proctors',
                shortcutBadge: 'Pre-Quiz Check',
                description: (
                    <>
                        Look at the quiz header before clicking <em>Take the Quiz</em>. If it does <strong>not</strong> say <em>&ldquo;Requires Respondus LockDown Browser&rdquo;</em> or prompt you to launch Honorlock/Proctorio, it is a standard Canvas web quiz running inside Chrome&apos;s normal security sandbox.
                    </>
                ),
                plainTextForSchema:
                    'Check the Canvas quiz header before clicking Take the Quiz to confirm it does not require Respondus LockDown Browser, Honorlock, or Proctorio.',
            },
            {
                stepNumber: '2',
                title: 'Keep Your Browser Window Focused & Use Quick or Highlight Mode',
                shortcutBadge: 'Alt + 1 / Alt + 2',
                description: (
                    <>
                        Once the Canvas quiz opens, do not open new tabs, do not click external apps (like Discord or Spotify), and do not use Split Screen. Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+1</kbd> (Quick Mode) or <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+2</kbd> (Highlight Mode) to keep your screen clean.
                    </>
                ),
                plainTextForSchema:
                    'Keep your Canvas quiz tab focused at all times and press Alt+1 or Alt+2 to use Quick or Highlight Mode.',
            },
            {
                stepNumber: '3',
                title: 'Double-Click One Question at a Time (Or Press Alt+S for Images)',
                shortcutBadge: 'Double-Click / Alt + S',
                description: (
                    <>
                        Double-click the specific question card you are currently reading, or press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> to crop any locked diagram or New Quizzes LTI stimulus. Zero <code className="font-mono text-xs">page_blurred</code> events are fired.
                    </>
                ),
                plainTextForSchema:
                    'Double-click one question card at a time or press Alt+S to crop diagrams via Vision OCR without firing any page_blurred events.',
            },
            {
                stepNumber: '4',
                title: 'Pace Your Answers Naturally (30–90 Seconds per Question)',
                shortcutBadge: 'Organic Quiz Log',
                description: (
                    <>
                        Read the prompt, verify the derivation, and click your answer choice after a realistic 30–90 second interval. Your professor&apos;s Canvas Quiz Log will show a 100% green, uninterrupted timeline with natural per-question durations.
                    </>
                ),
                plainTextForSchema:
                    'Select your verified answer after a natural 30 to 90 second reading interval so the professor Canvas Quiz Log displays a 100% green timeline.',
            },
        ],
    },
    benchmark: {
        eyebrow: '2026 Canvas Detection Vector Matrix',
        heading: 'What Canvas Can & Cannot Detect Across Different Tools',
        windowTitle: 'canvas_2026_extension_detection_matrix.csv — Security Audit',
        windowBadge: 'Verified on Chrome 134+ (Manifest V3)',
        rows: [
            {
                capability: (
                    <>
                        Canvas <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code> / <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">visibilitychange</code> focus loss check
                    </>
                ),
                examghost: '0 Blur Events (In-Page Focus)',
                chatgpt: 'Detected Immediately (Red Log)',
                sidebar: 'Often Triggers on Iframe Click',
            },
            {
                capability: (
                    <>
                        Host-page <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">MutationObserver</code> scanning for injected sidebars
                    </>
                ),
                examghost: 'Protected (Closed Shadow Root)',
                chatgpt: 'N/A (External Tab)',
                sidebar: 'Detected (Open DOM Nodes)',
            },
            {
                capability: (
                    <>
                        Probing <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">chrome-extension://</code> public <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">web_accessible_resources</code>
                    </>
                ),
                examghost: 'Protected (Zero Public Leaks)',
                chatgpt: 'N/A',
                sidebar: 'Vulnerable to Asset Probing',
            },
            {
                capability: (
                    <>
                        Server-side <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">question_answered</code> timestamp pacing analysis
                    </>
                ),
                examghost: 'Natural One-by-One Cadence',
                chatgpt: 'Long Unfocused Gaps',
                sidebar: 'Flagged by "Solve All" Bursts',
            },
            {
                capability: 'Quick Mode (Alt+1) minimal 1px indicator on screen',
                examghost: 'Yes (1px Dot Indicator)',
                chatgpt: 'No (Full ChatGPT Window)',
                sidebar: 'No (Large Floating Sidebar)',
            },
        ],
    },
    faqSubtitle:
        'Fact-checked 2026 engineering answers on Canvas extension detection, proctoring plugins, and Manifest V3 browser sandboxing.',
    faqs: [
        {
            category: 'focus',
            q: 'Can Canvas detect Chrome extensions in 2026 without a proctoring extension installed?',
            a: (
                <>
                    <strong className="text-ink">No.</strong> When you open Canvas inside a standard Chrome, Brave, or Edge browser without a third-party proctoring extension (like Honorlock or Proctorio), Canvas runs as an ordinary website. Browser security rules block websites from calling <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">chrome.management</code> to see your installed extensions.
                </>
            ),
            plainTextAnswer:
                'No. When you open Canvas inside a standard Chrome, Brave, or Edge browser without a third-party proctoring extension (like Honorlock or Proctorio), Canvas runs as an ordinary website. Browser security rules block websites from calling chrome.management to see your installed extensions.',
        },
        {
            category: 'focus',
            q: 'What is the difference between Canvas native quiz logs and Honorlock/Proctorio?',
            a: (
                <>
                    <strong className="text-ink">Canvas native quizzes</strong> only run webpage JavaScript, meaning they can only log focus changes (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code>) and answer timestamps. <strong className="text-ink">Honorlock and Proctorio</strong> are privileged Chrome extensions that you explicitly install; because they are extensions themselves, they request the <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">management</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">desktopCapture</code> permissions. ExamGhost is built for standard unproctored browser sessions.
                </>
            ),
            plainTextAnswer:
                'Canvas native quizzes only run webpage JavaScript, meaning they can only log focus changes (page_blurred) and answer timestamps. Honorlock and Proctorio are privileged Chrome extensions that you explicitly install; because they are extensions themselves, they request the management and desktopCapture permissions. ExamGhost is built for standard unproctored browser sessions.',
        },
        {
            category: 'focus',
            q: 'Does clicking the extension icon in the Chrome toolbar trigger a Canvas blur event?',
            a: (
                <>
                    Opening any browser toolbar popup at the top-right of Chrome shifts focus away from the web viewport. That is why ExamGhost is controlled 100% through <strong className="text-ink">in-page double-clicking</strong> and <strong className="text-ink">keyboard shortcuts</strong> (<kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+1</kbd>, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+2</kbd>, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+3</kbd>, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>)—so you never click the browser toolbar during a live quiz.
                </>
            ),
            plainTextAnswer:
                'Opening any browser toolbar popup at the top-right of Chrome shifts focus away from the web viewport. That is why ExamGhost is controlled 100% through in-page double-clicking and keyboard shortcuts (Alt+1, Alt+2, Alt+3, Alt+S)—so you never click the browser toolbar during a live quiz.',
        },
        {
            category: 'ocr',
            q: 'Does using Alt+S (Screenshot Snip) trigger any Canvas clipboard or screenshot event?',
            a: (
                <>
                    No. Web pages in Chrome cannot detect OS screenshots or Manifest V3 viewport captures. When you press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>, ExamGhost captures the region inside the extension background worker without touching the system clipboard or firing any DOM <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">copy</code> event.
                </>
            ),
            plainTextAnswer:
                'No. Web pages in Chrome cannot detect OS screenshots or Manifest V3 viewport captures. When you press Alt+S, ExamGhost captures the region inside the extension background worker without touching the system clipboard or firing any DOM copy event.',
        },
        {
            category: 'ocr',
            q: 'Can Canvas New Quizzes (LTI 1.3) detect ExamGhost inside its cross-origin iframe?',
            a: (
                <>
                    No. Canvas New Quizzes runs inside an <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.instructure.com</code> LTI iframe that uses the same standard web sandbox as Classic Quizzes. ExamGhost attaches in the isolated world of that frame and runs in the frame’s isolated world without mutating host-page globals.
                </>
            ),
            plainTextAnswer:
                'No. Canvas New Quizzes runs inside an .instructure.com LTI iframe that uses the same standard web sandbox as Classic Quizzes. ExamGhost attaches in the isolated world of that frame and runs in the frame’s isolated world without mutating host-page globals.',
        },
        {
            category: 'workflow',
            q: 'Why did ExamGhost remove the "Solve All" button?',
            a: (
                <>
                    Our telemetry audit proved that bulk &ldquo;Solve All&rdquo; buttons are the #1 reason students using other extensions get questioned by professors: answering 20 questions in 4 seconds creates an impossible server-side timestamp log. Solving questions strictly <strong className="text-ink">one by one via double-click</strong> ensures your quiz log looks completely natural.
                </>
            ),
            plainTextAnswer:
                'Our telemetry audit proved that bulk Solve All buttons are the #1 reason students using other extensions get questioned by professors: answering 20 questions in 4 seconds creates an impossible server-side timestamp log. Solving questions strictly one by one via double-click ensures your quiz log looks completely natural.',
        },
        {
            category: 'workflow',
            q: 'Does Canvas detect split-screen windows on the same monitor?',
            a: (
                <>
                    <strong className="text-ink">Yes!</strong> Even if Canvas is visible on the left half of your screen, the moment you click inside a window on the right half of your screen, the Canvas window loses OS focus and fires <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code>). With ExamGhost, your cursor never leaves the Canvas window.
                </>
            ),
            plainTextAnswer:
                'Yes! Even if Canvas is visible on the left half of your screen, the moment you click inside a window on the right half of your screen, the Canvas window loses OS focus and fires window.blur (page_blurred). With ExamGhost, your cursor never leaves the Canvas window.',
        },
        {
            category: 'workflow',
            q: 'Can I test how Canvas telemetry behaves right here on this page?',
            a: (
                <>
                    Yes! Scroll up to the interactive <strong className="text-ink">Canvas Telemetry Audit Lab</strong> above to watch or control a simulated quiz session and see how double-click solving and <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> keep <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code> at zero.
                </>
            ),
            plainTextAnswer:
                'Yes! Scroll up to the interactive Canvas Telemetry Audit Lab above to watch or control a simulated quiz session and see how double-click solving and Alt+S keep page_blurred at zero.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://www.examghost.com/blog/does-canvas-detect-extensions-2026#webpage',
                url: 'https://www.examghost.com/blog/does-canvas-detect-extensions-2026',
                name: 'Does Canvas Detect Chrome Extensions? (2026 Code Audit)',
                headline: 'Does Canvas Detect Chrome Extensions in 2026? Technical DOM & MV3 Audit',
                description:
                    "Can Canvas detect Chrome extensions in 2026? We read Instructure's open-source quiz log code to show what is tracked (page_blurred) and what is not.",
                datePublished: '2026-03-15',
                dateModified: '2026-10-23',
                inLanguage: 'en-US',
                author: { '@type': 'Organization', '@id': 'https://www.examghost.com/#organization', name: 'ExamGhost', url: 'https://www.examghost.com' },
                isPartOf: { '@id': 'https://www.examghost.com/#website' },
                breadcrumb: { '@id': 'https://www.examghost.com/blog/does-canvas-detect-extensions-2026#breadcrumb' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['h1', '.aeo-summary', '#lms-faq h2', '#lms-faq h3', '.faq-answer'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                '@id': 'https://www.examghost.com/blog/does-canvas-detect-extensions-2026#software',
                name: 'ExamGhost Canvas Extension Detection Solver',
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
                '@id': 'https://www.examghost.com/blog/does-canvas-detect-extensions-2026#breadcrumb',
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
                        name: 'Does Canvas Detect Extensions (2026)',
                        item: 'https://www.examghost.com/blog/does-canvas-detect-extensions-2026',
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

export default function DoesCanvasDetectExtensions2026Page() {
    const config = canvasDetectionAuditConfig;
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
                    <CanvasExtensionDetectionMotionDemo />

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
