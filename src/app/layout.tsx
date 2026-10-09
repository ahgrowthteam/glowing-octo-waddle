import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExamGhost AI - The Only 100% Invisible Exam Assistant",
  description: "Instantly solve any Canvas quiz with a 100% undetectable AI browser extension.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#050811] text-slate-100 antialiased selection:bg-blue-600/30 selection:text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
