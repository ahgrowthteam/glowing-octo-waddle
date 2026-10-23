import React from 'react';
import { Metadata } from 'next';
import LmsServicePageTemplate, { LmsServicePageConfig } from '@/components/LmsServicePageTemplate';

export const metadata: Metadata = {
    title: 'Does Canvas Detect Chrome Extensions in 2026? Technical DOM & MV3 Audit | ExamGhost',
    description:
        'Can Canvas Classic Quizzes or New Quizzes detect installed Chrome extensions in 2026? Explore our interactive Canvas telemetry audit covering Manifest V3 isolated worlds, web_accessible_resources, and window.blur.',
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
        canonical: 'https://examghost.com/blog/does-canvas-detect-extensions-2026',
    },
    openGraph: {
        title: 'Does Canvas Detect Chrome Extensions in 2026? — Interactive Telemetry Audit | ExamGhost',
        description:
            'Test what Canvas Classic & New Quizzes actually record in real time. Compare Manifest V3 isolated extensions vs. tab-switching and legacy sidebar tools.',
        url: 'https://examghost.com/blog/does-canvas-detect-extensions-2026',
        siteName: 'ExamGhost',
        type: 'article',
    },
};

const canvasDetectionAuditConfig: LmsServicePageConfig = {
    slug: 'blog/does-canvas-detect-extensions-2026',
    platformName: 'Canvas Extension Audit (2026)',
    platformShort: 'Canvas MV3 Audit',
    heroBadge: '2026 Browser Security & Telemetry Engineering Report',
    heroDotColor: '#10b981',
    h1Title: 'Does Canvas Detect Chrome Extensions',
    h1Highlight: 'in 2026? (Technical Audit)',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">Short Answer:</strong> On a personal computer running standard Chrome, Brave, or Edge,{' '}
            <strong className="text-[#1a1a1a]">Canvas cannot list or scan installed Chrome extensions</strong> because Chromium&apos;s security sandbox isolates extension processes from web page JavaScript. Canvas only flags students through{' '}
            <strong className="text-[#1a1a1a]">three indirect vectors</strong>: (1) <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">window.blur</code> / <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">visibilitychange</code> tab-switching events, (2) unguarded <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">chrome-extension://</code> web-accessible resources, and (3) main-world DOM mutations from visible sidebars. Test how ExamGhost avoids all three in the live simulator below.
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
        cardBg: 'bg-[#ecfdf5]',
        cardBorder: 'border-[#a7f3d0]',
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
                Standard web pages inside Google Chrome <strong className="text-[#1a1a1a]">do not have permission</strong> to call <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">chrome.management.getAll()</code>. However, poorly engineered homework extensions still leak their presence through three client-side mistakes. Here is the exact engineering breakdown:
            </>
        ),
        pillars: [
            {
                title: '1. Zero Tab-Switching (No page_blurred Logs)',
                desc: (
                    <>
                        Canvas&apos;s primary built-in telemetry check is <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.onblur</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">document.onvisibilitychange</code>, which writes <strong className="text-[#1a1a1a]">&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</strong> in red on the professor&apos;s Action Log. Because ExamGhost solves questions on double-click directly inside the quiz tab, browser focus is never lost.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
            {
                title: '2. Closed Shadow DOM & Isolated V8 World',
                desc: (
                    <>
                        Generic AI sidebar extensions append huge <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">&lt;div id=&quot;extension-sidebar&quot;&gt;</code> trees directly into <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">document.body</code>, where any <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">MutationObserver</code> can spot them. ExamGhost executes inside Chromium&apos;s <strong className="text-[#1a1a1a]">ISOLATED</strong> world and encapsulates UI inside <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</code>.
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
                examghost: 'Undetected (0 Blur Events)',
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
                capability: 'Invisible Mode (Alt+1) safe from walk-by classroom inspection',
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
            category: 'stealth',
            q: 'Can Canvas detect Chrome extensions in 2026 without a proctoring extension installed?',
            a: (
                <>
                    <strong className="text-[#1a1a1a]">No.</strong> When you open Canvas inside a standard Chrome, Brave, or Edge browser without a third-party proctoring extension (like Honorlock or Proctorio), Canvas runs as an ordinary website. Browser security rules block websites from calling <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">chrome.management</code> to see your installed extensions.
                </>
            ),
            plainTextAnswer:
                'No. When you open Canvas inside a standard Chrome, Brave, or Edge browser without a third-party proctoring extension (like Honorlock or Proctorio), Canvas runs as an ordinary website. Browser security rules block websites from calling chrome.management to see your installed extensions.',
        },
        {
            category: 'stealth',
            q: 'What is the difference between Canvas native quiz logs and Honorlock/Proctorio?',
            a: (
                <>
                    <strong className="text-[#1a1a1a]">Canvas native quizzes</strong> only run webpage JavaScript, meaning they can only log focus changes (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code>) and answer timestamps. <strong className="text-[#1a1a1a]">Honorlock and Proctorio</strong> are privileged Chrome extensions that you explicitly install; because they are extensions themselves, they request the <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">management</code> and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">desktopCapture</code> permissions. ExamGhost is built for standard unproctored browser sessions.
                </>
            ),
            plainTextAnswer:
                'Canvas native quizzes only run webpage JavaScript, meaning they can only log focus changes (page_blurred) and answer timestamps. Honorlock and Proctorio are privileged Chrome extensions that you explicitly install; because they are extensions themselves, they request the management and desktopCapture permissions. ExamGhost is built for standard unproctored browser sessions.',
        },
        {
            category: 'stealth',
            q: 'Does clicking the extension icon in the Chrome toolbar trigger a Canvas blur event?',
            a: (
                <>
                    Opening any browser toolbar popup at the top-right of Chrome shifts focus away from the web viewport. That is why ExamGhost is controlled 100% through <strong className="text-[#1a1a1a]">in-page double-clicking</strong> and <strong className="text-[#1a1a1a]">keyboard shortcuts</strong> (<kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+1</kbd>, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+2</kbd>, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+3</kbd>, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>)—so you never click the browser toolbar during a live quiz.
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
                    No. Canvas New Quizzes runs inside an <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.instructure.com</code> LTI iframe that uses the same standard web sandbox as Classic Quizzes. ExamGhost attaches in the isolated world of that frame and leaves zero detectable footprints.
                </>
            ),
            plainTextAnswer:
                'No. Canvas New Quizzes runs inside an .instructure.com LTI iframe that uses the same standard web sandbox as Classic Quizzes. ExamGhost attaches in the isolated world of that frame and leaves zero detectable footprints.',
        },
        {
            category: 'workflow',
            q: 'Why did ExamGhost remove the "Solve All" button?',
            a: (
                <>
                    Our telemetry audit proved that bulk &ldquo;Solve All&rdquo; buttons are the #1 reason students using other extensions get questioned by professors: answering 20 questions in 4 seconds creates an impossible server-side timestamp log. Solving questions strictly <strong className="text-[#1a1a1a]">one by one via double-click</strong> ensures your quiz log looks completely natural.
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
                    <strong className="text-[#1a1a1a]">Yes!</strong> Even if Canvas is visible on the left half of your screen, the moment you click inside a window on the right half of your screen, the Canvas window loses OS focus and fires <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.blur</code> (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code>). With ExamGhost, your cursor never leaves the Canvas window.
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
                    Yes! Scroll up to the interactive <strong className="text-[#1a1a1a]">Canvas Telemetry Audit Lab</strong> above to watch or control a simulated quiz session and see how double-click solving and <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> keep <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">page_blurred</code> at zero.
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
                '@type': 'TechArticle',
                '@id': 'https://examghost.com/blog/does-canvas-detect-extensions-2026/#article',
                url: 'https://examghost.com/blog/does-canvas-detect-extensions-2026',
                headline: 'Does Canvas Detect Chrome Extensions in 2026? Technical DOM & MV3 Audit',
                description:
                    'Engineering audit of Canvas Classic & New Quizzes telemetry, Manifest V3 isolated worlds, Closed Shadow DOM, and page_blurred events.',
                author: { '@type': 'Organization', name: 'ExamGhost Security Research' },
                datePublished: '2026-03-15',
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
                        name: 'Does Canvas Detect Extensions (2026)',
                        item: 'https://examghost.com/blog/does-canvas-detect-extensions-2026',
                    },
                ],
            },
        ],
    },
};

export default function DoesCanvasDetectExtensions2026Page() {
    return <LmsServicePageTemplate config={canvasDetectionAuditConfig} />;
}
