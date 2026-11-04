import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Self-hosted via next/font: consistent typography on Chrome/Windows/Android (previously fell back to
// Hiragino Maru / Segoe UI because ui-rounded and Inter were never actually loaded). Safari keeps SF Pro Rounded.
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap", variable: "--font-nunito" });

export const metadata: Metadata = {
  metadataBase: new URL('https://examghost.com'),
  title: {
    default: "ExamGhost — Invisible AI Quiz Solver for Canvas & Moodle",
    template: "%s | ExamGhost"
  },
  description: "Double-click any question on Canvas, Blackboard, Moodle & 20+ platforms for 0.3s inline AI answers. Screen-share safe, Snap-It OCR & 5 free solves / day.",
  keywords: [
    "ai quiz solver",
    "canvas quiz solver",
    "blackboard quiz solver",
    "moodle quiz solver",
    "brightspace quiz solver",
    "google classroom quiz solver",
    "schoology answers",
    "mcq solver",
    "ai homework helper",
    "quiz answer extension",
    "online exam helper",
    "double click quiz solver",
    "snap it quiz solver",
    "screenshot quiz solver",
    "draw to solve",
    "invisible quiz solver",
    "screen share safe exam helper",
    "examghost"
  ],
  authors: [{ name: "ExamGhost Security Engineering Team", url: "https://examghost.com" }],
  creator: "ExamGhost",
  publisher: "ExamGhost",
  alternates: {
    canonical: "https://examghost.com",
    types: {
      "text/markdown": [
        { url: "https://examghost.com/llms.txt", title: "ExamGhost LLM Summary" },
        { url: "https://examghost.com/llms-full.txt", title: "ExamGhost Full LLM Dossier" },
        { url: "https://examghost.com/pricing.md", title: "ExamGhost Pricing & Plans" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://examghost.com",
    siteName: "ExamGhost",
    title: "ExamGhost — Invisible AI Quiz Solver for Canvas & Moodle",
    description: "Double-click any question on Canvas, Blackboard, Moodle & 20+ platforms for 0.3s inline AI answers. Screen-share safe, Snap-It OCR & 5 free solves / day.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ExamGhost — Invisible AI Quiz Solver for Canvas, Blackboard & Moodle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
    creator: "@examghost",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${nunito.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased selection:bg-[#c4d0f8] selection:text-[#111] min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
