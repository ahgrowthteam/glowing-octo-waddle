import type { Metadata } from "next";

const URL = "https://www.examghost.com/video-demo";
const TITLE = "Watch ExamGhost Demos | AI Quiz Solver Chrome Extension";
const DESCRIPTION = "Watch ExamGhost solve quiz questions on the page, and jump to the guide for your platform: Canvas, Blackboard, Moodle, D2L and more.";

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
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ExamGhost demos" }],
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.jpg"] },
};

export default function VideoDemoLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
