import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "24 Stealth AI Exam & Canvas Features",
    description: "Explore all 24 ExamGhost stealth tools: Focus Shield blur interception, Snap-It Vision OCR, LaTeX math solver, closed Shadow DOM, and 10ms panic switch.",
    alternates: {
        canonical: "https://examghost.com/features",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "24 Stealth AI Exam & Canvas Features | ExamGhost",
        description: "Explore all 24 ExamGhost stealth tools: Focus Shield blur interception, Snap-It Vision OCR, LaTeX math solver, closed Shadow DOM, and 10ms panic switch.",
        url: "https://examghost.com/features",
        siteName: "ExamGhost",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost 24 Stealth AI Exam & Canvas Features",
            },
        ],
    },
};

export default function FeaturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const featuresJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://examghost.com/features#webpage",
                "url": "https://examghost.com/features",
                "name": "24 Stealth AI Exam & Canvas Features | ExamGhost",
                "description": "Explore all 24 ExamGhost stealth tools: Focus Shield blur interception, Snap-It Vision OCR, LaTeX math solver, closed Shadow DOM, and 10ms panic switch.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-29",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": "https://examghost.com/features#breadcrumb" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary"]
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/features#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "24 Stealth Features", "item": "https://examghost.com/features" }
                ]
            },
            {
                "@type": "ItemList",
                "@id": "https://examghost.com/features#featurelist",
                "name": "ExamGhost 24 Stealth AI Quiz & Exam Features",
                "numberOfItems": 24,
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Window Blur & Focus Interception" },
                    { "@type": "ListItem", "position": 2, "name": "Teacher Action Log Neutralizer" },
                    { "@type": "ListItem", "position": 3, "name": "Isolated Shadow DOM Engine" },
                    { "@type": "ListItem", "position": 4, "name": "Zero Clipboard Footprint" },
                    { "@type": "ListItem", "position": 5, "name": "Kiosk & Locked-Browser Spoofing" },
                    { "@type": "ListItem", "position": 6, "name": "Zero-UI In-DOM Highlighting" },
                    { "@type": "ListItem", "position": 7, "name": "Discreet Stealth Dot Indicator" },
                    { "@type": "ListItem", "position": 8, "name": "Deep Tutor Breakdown Drawer" },
                    { "@type": "ListItem", "position": 9, "name": "3 Answer Delivery Methods (Auto-Fill, Highlight & Silent Clipboard)" },
                    { "@type": "ListItem", "position": 10, "name": "Area Screenshot Crop Tool (⌘+Shift+S)" },
                    { "@type": "ListItem", "position": 11, "name": "Chemical Structures & Reactions" },
                    { "@type": "ListItem", "position": 12, "name": "Calculus, Graphs & Matrix Algebra" },
                    { "@type": "ListItem", "position": 13, "name": "Cross-Origin Iframe & Canvas Element Sniping" },
                    { "@type": "ListItem", "position": 14, "name": "Single Choice & MCQ Parsing" },
                    { "@type": "ListItem", "position": 15, "name": "Multi-Select Checkbox Bundles" },
                    { "@type": "ListItem", "position": 16, "name": "Fill-In-The-Blank & Numeric Input" },
                    { "@type": "ListItem", "position": 17, "name": "Matching & Dropdown Columns" },
                    { "@type": "ListItem", "position": 18, "name": "Short-Answer, Code Block & Essay Outline Synthesis" },
                    { "@type": "ListItem", "position": 19, "name": "2nd-Attempt Auto-Answer Cache" },
                    { "@type": "ListItem", "position": 20, "name": "Incorrect Distractor Elimination" },
                    { "@type": "ListItem", "position": 21, "name": "Master Hotkey Toggle (⌘+Shift+U) & Zero-Idle Architecture" },
                    { "@type": "ListItem", "position": 22, "name": "Emergency Panic Kill-Switch (Escape × 2)" },
                    { "@type": "ListItem", "position": 23, "name": "Zero-Knowledge Memory Pipeline" },
                    { "@type": "ListItem", "position": 24, "name": "Universal Platform Compatibility" }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresJsonLd) }}
            />
            {children}
        </>
    );
}
