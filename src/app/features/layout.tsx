import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All 24 Stealth Features | ExamGhost Canvas & Exam Assistant",
    description: "Explore all 24 undetectable exam tools: Focus Shield window blur interception, Snap-It multimodal vision OCR, LaTeX math solver, closed Shadow DOM, and emergency panic switch.",
    alternates: {
        canonical: "https://examghost.com/features",
    },
    openGraph: {
        title: "All 24 Stealth Features | ExamGhost Canvas & Exam Assistant",
        description: "Explore all 24 undetectable tools inside ExamGhost: Focus Shield window blur interception, Snap-It vision OCR, LaTeX solver, and closed Shadow DOM.",
        url: "https://examghost.com/features",
        siteName: "ExamGhost",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost 24 Stealth Tools",
            },
        ],
    },
};

export default function FeaturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
