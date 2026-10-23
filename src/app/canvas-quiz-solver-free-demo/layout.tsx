import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Canvas Quiz Solver Free Demo — Live AI Exam Sandbox",
    description: "Try ExamGhost live on an interactive Canvas quiz simulator. Double-click to solve questions inline in 0.3s, test Snap-It Vision OCR (⌘+Shift+S), and verify 0 tab-switch flags.",
    keywords: [
        "canvas quiz solver free demo",
        "canvas quiz solver demo",
        "ai quiz solver interactive demo",
        "undetectable canvas exam solver",
        "solve canvas quiz without switching tabs",
        "snap-it vision ocr math solver",
        "blackboard ultra quiz solver demo",
        "moodle quiz solver chrome extension",
        "mcgraw hill connect aleks solver",
        "pearson mylab homework solver",
        "gradescope diagram ocr solver",
        "double click quiz solver",
        "examghost live sandbox"
    ],
    alternates: {
        canonical: "https://examghost.com/canvas-quiz-solver-free-demo",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://examghost.com/canvas-quiz-solver-free-demo",
        siteName: "ExamGhost",
        title: "Canvas Quiz Solver Free Demo — Live AI Exam Sandbox | ExamGhost",
        description: "Test ExamGhost live on an interactive Canvas quiz simulator. Double-click to solve, test Snap-It Vision OCR (⌘+Shift+S), and compare all 3 stealth modes.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost Live Interactive Canvas Quiz Solver Sandbox",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Canvas Quiz Solver Free Demo — Live AI Exam Sandbox | ExamGhost",
        description: "Test double-click quiz solving and Snap-It Vision OCR live on a simulated Canvas exam. Zero install required.",
        images: ["/og-image.jpg"],
        creator: "@examghost",
    },
};

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const demoJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://examghost.com/canvas-quiz-solver-free-demo#webpage",
                "url": "https://examghost.com/canvas-quiz-solver-free-demo",
                "name": "Canvas Quiz Solver Free Demo — Live AI Exam Sandbox | ExamGhost",
                "description": "Test ExamGhost live on an interactive Canvas quiz simulator. Double-click to solve, test Snap-It Vision OCR (⌘+Shift+S), and compare all 3 stealth modes.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-29",
                "inLanguage": "en-US",
                "isPartOf": {
                    "@id": "https://examghost.com/#website"
                },
                "breadcrumb": {
                    "@id": "https://examghost.com/canvas-quiz-solver-free-demo#breadcrumb"
                },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "#student-seo-guide h2", "#student-seo-guide h3", ".faq-answer"]
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/#software",
                "name": "ExamGhost",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, Arc, macOS, Windows",
                "description": "Client-side Chrome extension that solves Canvas, Blackboard, Moodle, McGraw Hill, and Pearson quiz questions inline via double-click or Snap-It Vision OCR without switching tabs.",
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Free Trial",
                        "price": "0.00",
                        "priceCurrency": "USD",
                        "priceValidUntil": "2027-12-31",
                        "description": "50 Free Question Solves, no credit card required",
                        "availability": "https://schema.org/InStock"
                    },
                    {
                        "@type": "Offer",
                        "name": "Monthly Pass",
                        "price": "19.00",
                        "priceCurrency": "USD",
                        "priceValidUntil": "2027-12-31",
                        "availability": "https://schema.org/InStock"
                    },
                    {
                        "@type": "Offer",
                        "name": "Yearly Academic Pass",
                        "price": "99.00",
                        "priceCurrency": "USD",
                        "priceValidUntil": "2027-12-31",
                        "availability": "https://schema.org/InStock"
                    },
                    {
                        "@type": "Offer",
                        "name": "Lifetime VIP Pass",
                        "price": "199.00",
                        "priceCurrency": "USD",
                        "priceValidUntil": "2027-12-31",
                        "availability": "https://schema.org/InStock"
                    }
                ],
                "featureList": [
                    "Double-click inline question solving on 20+ LMS platforms",
                    "Snap-It Vision OCR (⌘+Shift+S) for math equations, graphs, and locked PDFs",
                    "3 Display Modes: Invisible, Stealth, and Explain Mode",
                    "3 Answer Delivery Methods: Auto-fill, Smart Highlight, and Silent Clipboard",
                    "Closed Shadow DOM architecture with zero window blur or tab-switch telemetry"
                ]
            },
            {
                "@type": "HowTo",
                "@id": "https://examghost.com/canvas-quiz-solver-free-demo#howto",
                "name": "How to Solve Canvas, Blackboard & STEM Quiz Questions Inline Without Switching Tabs",
                "description": "Test and use ExamGhost AI to solve multiple-choice, multi-select, short-answer, and diagram OCR questions directly inside your active browser tab.",
                "totalTime": "PT10S",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Open Your LMS Quiz or Sandbox",
                        "text": "Launch any quiz on Canvas Classic, Canvas New Quizzes, Blackboard Ultra, Moodle, McGraw-Hill ALEKS, or test directly inside the free interactive demo sandbox."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Double-Click or Snip (⌘+Shift+S)",
                        "text": "Double-click any multiple-choice, multi-select, true/false, dropdown, or short-answer question card—or press ⌘+Shift+S to drag a crop box over locked math graphs."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Auto-Fill or Review Step-by-Step",
                        "text": "ExamGhost injects the verified answer inline via Auto-Fill, highlights the correct choice, or displays the complete step-by-step derivation with 0 tab-switch events."
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvas-quiz-solver-free-demo#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://examghost.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Canvas Quiz Solver Free Demo",
                        "item": "https://examghost.com/canvas-quiz-solver-free-demo"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvas-quiz-solver-free-demo#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Canvas or Blackboard detect the ExamGhost Chrome extension in quiz activity logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, Canvas LMS and Blackboard cannot detect ExamGhost because browser sandboxing prevents websites from scanning installed Chrome extensions, and ExamGhost renders inside an isolated Closed Shadow DOM container. Canvas and Blackboard only log focus-loss events when window.onblur or document.visibilitychange fires—which happens when you switch tabs to ChatGPT, never when solving inline with ExamGhost."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What does a professor actually see in the Canvas Quiz Log during an exam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In a standard Canvas Quiz Log, professors only see session start times, question answer timestamps, and red 'Stopped viewing the Canvas quiz-taking page' flags triggered by window.onblur or document.visibilitychange events. Because ExamGhost solves questions directly inside your active browser tab in 0.3 seconds without opening popups or switching windows, your Canvas activity log records 100% continuous page focus."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I solve locked math graphs, uncopyable PDFs, and chemistry diagrams on ALEKS or WebAssign?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Press Cmd+Shift+S on macOS (or Ctrl+Shift+S on Windows) to activate Snap-It Vision OCR, then drag a selection box over any locked graph, geometry figure, chemical structure, or iframe. ExamGhost captures the viewport pixels locally and routes them through DeepSeek-R1 and GPT-4o Vision, returning the verified answer and step-by-step derivation in under 0.4 seconds without copying text."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost work on Canvas New Quizzes, McGraw-Hill ALEKS, and Pearson MyLab?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, ExamGhost works natively across both Canvas Classic Quizzes and Canvas New Quizzes (LTI), Blackboard Learn and Ultra, Moodle, D2L Brightspace, and Schoology. It also supports locked STEM publisher portals including McGraw-Hill Connect and ALEKS, Pearson MyLab and Mastering, Cengage MindTap and WebAssign, Gradescope, DeltaMath, and Google Forms."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the difference between Invisible Mode, Stealth Mode, and Explain Mode?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Invisible Mode solves and delivers answers with zero visual UI, popups, or badges on your screen, pairing with Auto-Fill, Subtle Highlight, or Silent Clipboard copy. Stealth Mode displays a minimal, low-contrast status pill while computing the answer. Explain Mode opens an inline study card directly beneath the question with the full formula, concept breakdown, and step-by-step reasoning."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How accurate is ExamGhost compared to ChatGPT, Gauth AI, and CanvasHack?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost achieves 99.4% accuracy on university STEM and humanities assessments by routing symbolic math, calculus, and physics problems to DeepSeek-R1 while sending reading comprehension and image diagrams to GPT-4o Vision. Unlike ChatGPT (which requires 15–30 seconds of tab-switching) or legacy scripts like CanvasHack (which inject detectable DOM nodes), ExamGhost solves inline in 0.3 seconds with zero tab-switch flags."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost work with Respondus LockDown Browser, Honorlock, or Proctorio?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost runs inside standard Chromium browsers—including Google Chrome, Brave, Microsoft Edge, and Arc—for web-based Canvas, Blackboard, Moodle, and publisher quizzes. Standalone desktop applications like Respondus LockDown Browser use a custom restricted browser shell that blocks all third-party Chrome extensions by design."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I test the free Canvas quiz solver demo on this page and claim 50 free solves?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Double-click any of the 5 interactive questions in the Canvas simulator at the top of this page (or tap 'Solve Question' on mobile) to test instant inline solving, and click 'Snip & Solve Diagram' on Question 5 to test Vision OCR. When you are ready to use it on your own coursework, install the ExamGhost Chrome extension for 50 free solves with no credit card required."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(demoJsonLd) }}
            />
            {children}
        </>
    );
}
