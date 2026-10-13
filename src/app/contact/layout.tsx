import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact & 24/7 Support | ExamGhost Help Center",
    description: "Get in touch with ExamGhost developers and 24/7 student support. Help with license activation, Canvas patch updates, and 14-day refund processing.",
    alternates: {
        canonical: "https://examghost.com/contact",
    },
    openGraph: {
        title: "Contact & 24/7 Support | ExamGhost",
        description: "Get in touch with ExamGhost support on Discord or email for instant exam help and license assistance.",
        url: "https://examghost.com/contact",
        siteName: "ExamGhost",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
