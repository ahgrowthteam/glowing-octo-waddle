import type { Metadata } from 'next';
import { DEMO_FAQS } from './demoFaqs';

const URL = "https://www.examghost.com/canvas-quiz-solver-free-demo";
const TITLE = "Canvas Quiz Solver Free Demo — Try ExamGhost in Your Browser";
const DESCRIPTION = "Try ExamGhost on a Canvas-style quiz simulator, no install needed. Double-click to solve, switch modes with Alt+1/2/3, and snip diagrams with Alt+S.";

export const metadata: Metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    keywords: [
        "canvas quiz solver free demo",
        "canvas quiz solver demo",
        "ai quiz solver interactive demo",
        "double click quiz solver",
        "screenshot quiz solver",
        "ai homework helper chrome extension",
        "examghost demo",
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: TITLE }],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: ["/og-image.jpg"],
        creator: "@examghost",
    },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${URL}#webpage`,
                url: URL,
                name: TITLE,
                description: DESCRIPTION,
                inLanguage: "en-US",
                isPartOf: { "@id": "https://www.examghost.com/#website" },
                breadcrumb: { "@id": `${URL}#breadcrumb` },
                speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".aeo-summary"] },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${URL}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.examghost.com" },
                    { "@type": "ListItem", position: 2, name: "Canvas Quiz Solver Free Demo", item: URL },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: DEMO_FAQS.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    );
}
