import React from 'react';
import { CompetitorData } from '@/data/competitors';

interface CompetitorJsonLdProps {
    competitor: CompetitorData;
}

export default function CompetitorJsonLd({ competitor }: CompetitorJsonLdProps) {
    const pageUrl = `https://examghost.com/${competitor.slug}`;
    const hubUrl = `https://examghost.com/compare`;

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
                        "offers": {
                            "@type": "Offer",
                            "price": "19.99",
                            "priceCurrency": "USD",
                            "availability": "https://schema.org/InStock"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "1840",
                            "bestRating": "5",
                            "worstRating": "1"
                        }
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
