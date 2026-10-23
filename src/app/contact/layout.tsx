import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact 24/7 Student Support & Discord Help",
    description: "Contact ExamGhost 24/7 engineering and Discord support for license activation, Canvas New Quizzes updates, and 14-day money-back refund requests.",
    alternates: {
        canonical: "https://examghost.com/contact",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Contact 24/7 Student Support & Discord Help | ExamGhost",
        description: "Contact ExamGhost 24/7 engineering and Discord support for license activation, Canvas New Quizzes updates, and 14-day money-back refund requests.",
        url: "https://examghost.com/contact",
        siteName: "ExamGhost",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Contact ExamGhost 24/7 Student Support",
            },
        ],
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const contactJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "@id": "https://examghost.com/contact#webpage",
                "url": "https://examghost.com/contact",
                "name": "Contact 24/7 Student Support & Discord Help | ExamGhost",
                "description": "Contact ExamGhost 24/7 engineering and Discord support for license activation, Canvas New Quizzes updates, and 14-day money-back refund requests.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-29",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": "https://examghost.com/contact#breadcrumb" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "#support-troubleshooting-heading"]
                },
                "mainEntity": {
                    "@type": "Organization",
                    "@id": "https://examghost.com/#organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com",
                    "email": "support@examghost.com",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "email": "support@examghost.com",
                        "contactType": "customer support",
                        "availableLanguage": "English"
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/contact#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Contact Support", "item": "https://examghost.com/contact" }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />
            {children}
        </>
    );
}
