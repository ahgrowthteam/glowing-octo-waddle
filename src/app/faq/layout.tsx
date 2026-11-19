import type { Metadata } from "next";

const URL = "https://www.examghost.com/faq";
const TITLE = "ExamGhost FAQ: Pricing, Platforms and How It Works";
const DESCRIPTION =
    "Short answers about ExamGhost: how it works, supported platforms, the free tier (5 solves a day), plans from $19/month, refunds and privacy.";

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
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ExamGhost FAQ" }],
    },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
