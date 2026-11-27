import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Self-hosted via next/font: unified cross-browser studio typography (display + body + monospace).
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap", variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.examghost.com'),
  title: {
    default: "ExamGhost: AI Quiz Solver Chrome Extension, Free Plan",
    template: "%s | ExamGhost"
  },
  description: "Double-click a quiz or homework question for an AI answer and explanation, or snip graphs with Alt+S. Works on Canvas, Blackboard & more. Free plan.",
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
    "ai answer extension",
    "chrome extension quiz helper",
    "examghost"
  ],
  authors: [{ name: "ExamGhost", url: "https://www.examghost.com" }],
  creator: "ExamGhost",
  publisher: "ExamGhost",
  alternates: {
    canonical: "https://www.examghost.com",
    types: {
      "text/markdown": [
        { url: "https://www.examghost.com/llms.txt", title: "ExamGhost LLM Summary" },
        { url: "https://www.examghost.com/llms-full.txt", title: "ExamGhost Full LLM Dossier" },
        { url: "https://www.examghost.com/pricing.md", title: "ExamGhost Pricing & Plans" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.examghost.com",
    siteName: "ExamGhost",
    title: "ExamGhost: AI Quiz Solver Chrome Extension, Free Plan",
    description: "Double-click a quiz or homework question for an AI answer and explanation, or snip graphs with Alt+S. Works on Canvas, Blackboard & more. Free plan.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ExamGhost: AI Quiz Solver Chrome Extension, Free Plan",
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
  verification: {
    google: "rjPeBfPgdhsE5yqMhRM6lxfSC_N77vqi2C5XxwQIzgs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-K4CN7JQF"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
      </head>
      <body className="font-sans bg-cream text-ink antialiased selection:bg-[#3B5BDB]/15 selection:text-ink min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
