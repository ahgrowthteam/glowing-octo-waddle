import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FAQ & Help Center | ExamGhost Canvas Stealth & Quiz Assistant",
    description: "Answers to frequently asked questions about ExamGhost: Canvas SpeedGrader audit log stealth, Focus Shield blur masking, pricing plans, 50 free solves, and 14-day refund policy.",
    alternates: {
        canonical: "https://examghost.com/faq",
    },
    openGraph: {
        title: "FAQ & Help Center | ExamGhost",
        description: "Everything you need to know about ExamGhost stealth technology, window blur masking, and installation.",
        url: "https://examghost.com/faq",
        siteName: "ExamGhost",
    },
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
