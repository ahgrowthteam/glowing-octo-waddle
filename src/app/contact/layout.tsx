import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact ExamGhost Support",
    description: "Contact ExamGhost by email or Discord for help with your license, bug reports and 14-day money-back refund requests.",
    alternates: {
        canonical: "https://www.examghost.com/contact",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Contact ExamGhost Support | Email & Discord",
        description: "Contact ExamGhost by email or Discord for help with your license, bug reports and 14-day money-back refund requests.",
        url: "https://www.examghost.com/contact",
        siteName: "ExamGhost",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Contact ExamGhost support",
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
                "@id": "https://www.examghost.com/contact#webpage",
                "url": "https://www.examghost.com/contact",
                "name": "Contact ExamGhost Support | Email & Discord",
                "description": "Contact ExamGhost by email or Discord for help with your license, bug reports and 14-day money-back refund requests.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-11-18",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://www.examghost.com/#website" },
                "breadcrumb": { "@id": "https://www.examghost.com/contact#breadcrumb" },
                "mainEntity": {
                    "@type": "Organization",
                    "@id": "https://www.examghost.com/#organization",
                    "name": "ExamGhost",
                    "url": "https://www.examghost.com",
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
                "@id": "https://www.examghost.com/contact#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Contact Support", "item": "https://www.examghost.com/contact" }
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
