import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COMPETITORS } from '@/data/competitors';
import CompetitorPageTemplate from '@/components/CompetitorPageTemplate';
import CompetitorJsonLd from '@/components/CompetitorJsonLd';

const SLUG = 'classlogy-vs-examghost';
const competitor = COMPETITORS[SLUG] || COMPETITORS['classology-vs-examghost'];

export const metadata: Metadata = {
    title: competitor?.metaTitle,
    description: competitor?.metaDescription,
    alternates: {
        canonical: `https://examghost.com/classology-vs-examghost`,
    },
    openGraph: {
        title: competitor?.metaTitle,
        description: competitor?.metaDescription,
        url: `https://examghost.com/${SLUG}`,
        siteName: 'ExamGhost',
        images: [
            {
                url: '/images/ghost/ghost_mascot_hero.jpg',
                width: 1200,
                height: 630,
                alt: `ExamGhost vs ${competitor?.name} Comparison`,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: competitor?.metaTitle,
        description: competitor?.metaDescription,
        images: ['/images/ghost/ghost_mascot_hero.jpg'],
    },
};

export default function Page() {
    if (!competitor) notFound();
    return (
        <>
            <CompetitorJsonLd competitor={competitor} />
            <CompetitorPageTemplate competitor={competitor} />
        </>
    );
}
