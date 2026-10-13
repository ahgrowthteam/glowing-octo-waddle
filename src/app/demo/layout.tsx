import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Try ExamGhost — Live Interactive Quiz Solver Demo (No Install)",
    description: "Experience ExamGhost live: double-click real Canvas quiz questions and test all 3 display modes (Invisible, Stealth, Explain) and 3 answer delivery methods (Auto-fill, Highlight, Clipboard) right in your browser.",
    keywords: [
        "canvas quiz solver demo",
        "quiz solver interactive demo",
        "ai quiz solver sandbox",
        "moodle quiz solver demo",
        "blackboard exam solver demo",
        "double click quiz solver",
        "examghost demo",
        "try examghost free"
    ],
    alternates: {
        canonical: "https://examghost.com/demo",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://examghost.com/demo",
        siteName: "ExamGhost",
        title: "Try ExamGhost — Live Interactive Quiz Solver Demo (No Install)",
        description: "Test double-click quiz solving live on a simulated Canvas exam. Zero install required.",
        images: [
            {
                url: "/images/ghost/ghost_mascot_hero.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost Live Interactive Demo Sandbox",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Try ExamGhost — Live Interactive Quiz Solver Demo (No Install)",
        description: "Test double-click quiz solving live on a simulated Canvas exam. Zero install required.",
        images: ["/images/ghost/ghost_mascot_hero.jpg"],
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
                "@id": "https://examghost.com/demo#webpage",
                "url": "https://examghost.com/demo",
                "name": "Try ExamGhost — Live Interactive Quiz Solver Demo",
                "description": "Interactive browser sandbox to test ExamGhost double-click solving, stealth modes, and answer delivery methods."
            },
            {
                "@type": "BreadcrumbList",
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
                        "name": "Interactive Demo",
                        "item": "https://examghost.com/demo"
                    }
                ]
            },
            {
                "@type": "HowTo",
                "name": "How to Use ExamGhost to Solve Online Quizzes",
                "description": "Solve any quiz question in 2 clicks with ExamGhost.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Open Your Quiz",
                        "text": "Navigate to your quiz or exam on Canvas, Moodle, Blackboard, Google Classroom, or Brightspace."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Double-Click Any Question",
                        "text": "Double-click the question text. ExamGhost automatically analyzes the prompt and options."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Answer Automatically Applied",
                        "text": "The verified answer is selected or highlighted instantly without leaving the exam tab."
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
