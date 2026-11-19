import type { Metadata } from "next";
import { FEATURE_FAQS, FEATURE_LIST_FOR_SCHEMA } from "@/components/features/featuresData";

const URL = "https://www.examghost.com/features";
const TITLE = "ExamGhost Features: Double-Click Solving & Alt+S Snip";
const DESCRIPTION =
    "Double-click a question for an AI answer and explanation, switch modes with Alt+1/2/3, solve graphs with an Alt+S screenshot, or scan a whole page. Free plan.";

export const metadata: Metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        type: "website",
        locale: "en_US",
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        siteName: "ExamGhost",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ExamGhost features" }],
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.jpg"] },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
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
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${URL}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.examghost.com" },
                    { "@type": "ListItem", position: 2, name: "Features", item: URL },
                ],
            },
            {
                "@type": "SoftwareApplication",
                name: "ExamGhost",
                applicationCategory: "EducationalApplication",
                operatingSystem: "Chrome",
                description:
                    "Chrome extension that answers quiz questions on the page with AI: double-click solving, Quick, Highlight and Explain modes, Alt+S screenshot snip and page scan.",
                url: "https://www.examghost.com",
                featureList: FEATURE_LIST_FOR_SCHEMA,
                offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    description: "Free tier with 5 solves a day. Paid plans: $19/month, $99/year, $199 lifetime.",
                },
            },
            {
                "@type": "FAQPage",
                mainEntity: FEATURE_FAQS.map((f) => ({
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
