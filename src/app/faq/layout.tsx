import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FAQ — Stealth Architecture, Pricing & LMS Setup",
    description: "Answers to ExamGhost FAQs: Canvas SpeedGrader audit log stealth, Focus Shield blur masking, Snap-It OCR, pricing ($19/mo, $99/yr), and 50 free solves.",
    alternates: {
        canonical: "https://examghost.com/faq",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "FAQ — Stealth Architecture, Pricing & LMS Setup | ExamGhost",
        description: "Answers to ExamGhost FAQs: Canvas SpeedGrader audit log stealth, Focus Shield blur masking, Snap-It OCR, pricing ($19/mo, $99/yr), and 50 free solves.",
        url: "https://examghost.com/faq",
        siteName: "ExamGhost",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost FAQ & Knowledge Base",
            },
        ],
    },
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
