import React from 'react';
import { CompetitorData } from '@/data/competitors';

interface CompetitorJsonLdProps {
    competitor: CompetitorData;
}

export default function CompetitorJsonLd({ competitor }: CompetitorJsonLdProps) {
    const pageUrl = `https://examghost.com/${competitor.slug}`;
    const hubUrl = `https://examghost.com/compare-canvas-hack-extensions`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${pageUrl}#webpage`,
                "url": pageUrl,
                "name": competitor.metaTitle,
                "description": competitor.metaDescription,
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://examghost.com/#website",
                    "url": "https://examghost.com",
                    "name": "ExamGhost"
                },
                "breadcrumb": {
                    "@id": `${pageUrl}#breadcrumb`
                },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Free Trial",
                                "price": "0",
                                "priceCurrency": "USD",
                                "description": "50 Free Question Solves, no credit card required",
                                "availability": "https://schema.org/InStock"
                            },
                            {
                                "@type": "Offer",
                                "name": "Monthly Pass",
                                "price": "19.00",
                                "priceCurrency": "USD",
                                "availability": "https://schema.org/InStock"
                            },
                            {
                                "@type": "Offer",
                                "name": "Yearly Academic Pass",
                                "price": "99.00",
                                "priceCurrency": "USD",
                                "availability": "https://schema.org/InStock"
                            },
                            {
                                "@type": "Offer",
                                "name": "Lifetime VIP Pass",
                                "price": "199.00",
                                "priceCurrency": "USD",
                                "availability": "https://schema.org/InStock"
                            }
                        ]
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": competitor.name,
                        "url": `https://${competitor.domain}`,
                        "applicationCategory": "EducationalApplication"
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${pageUrl}#breadcrumb`,
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
                        "name": "Comparisons",
                        "item": hubUrl
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": `ExamGhost vs ${competitor.name}`,
                        "item": pageUrl
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                "mainEntity": competitor.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
