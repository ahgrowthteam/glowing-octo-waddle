import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExamGhost — All your exam tools, in one invisible box",
  description: "24 powerful stealth tools for Canvas, Blackboard, Moodle and D2L. Zero SpeedGrader logs, instant AI vision OCR, and 100% undetectable.",
  icons: {
    icon: "/favicon.ico",
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
