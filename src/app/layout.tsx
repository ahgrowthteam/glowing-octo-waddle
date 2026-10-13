import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://examghost.com'),
  title: {
    default: "ExamGhost — The Invisible AI Quiz Solver for Canvas, Blackboard & Moodle",
    template: "%s | ExamGhost"
  },
  description: "Double-click any question on Canvas, Moodle, Blackboard and 20+ platforms for instant answers right on the page. Screen-share safe, Snap-It sniping OCR, 3 stealth modes, and zero tab-switching.",
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
  authors: [{ name: "ExamGhost Labs" }],
  creator: "ExamGhost",
  publisher: "ExamGhost",
  alternates: {
    canonical: "https://examghost.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://examghost.com",
    siteName: "ExamGhost",
    title: "ExamGhost — The Invisible AI Quiz Solver for Canvas, Blackboard & Moodle",
    description: "Double-click any question on Canvas, Moodle, Blackboard and 20+ more for instant answers right on the page. Screen-share safe with Snap-It sniping.",
    images: [
      {
        url: "/images/ghost/ghost_mascot_hero.jpg",
        width: 1200,
        height: 630,
        alt: "ExamGhost — Invisible AI Quiz Solver for Canvas, Blackboard, and Moodle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExamGhost — The Invisible AI Quiz Solver for Canvas, Blackboard & Moodle",
    description: "Double-click any question on Canvas, Moodle, Blackboard and 20+ more for instant answers right on the page. Screen-share safe with Snap-It sniping.",
    images: ["/images/ghost/ghost_mascot_hero.jpg"],
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
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-cream text-ink antialiased selection:bg-[#c4d0f8] selection:text-[#111] min-h-screen`}>
        {/* SVG Filter for OneMacApp Torn Paper Deckle Edges */}
        <svg className="sr-only" aria-hidden="true" width="0" height="0">
          <defs>
            <filter id="torn" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="3" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
