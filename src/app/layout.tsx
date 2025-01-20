import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
// import ParticleBackground from "@/components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "23 Ventures - Scaling Startups Globally",
  description:
    "23 Ventures is a venture capital firm specializing in SaaS, AI/ML, Web3, and digital agencies. Our 20-week remote program offers mentorship, funding, and a global network to help you achieve $10,000 MRR or 10,000 active users.",
  keywords: [
    "venture capital",
    "startup funding",
    "SaaS",
    "AI/ML",
    "Web3",
    "digital agencies",
    "scale startups",
    "entrepreneurship program",
    "remote startup program",
    "mentorship for startups",
  ],
  openGraph: {
    title: "23 Ventures - Empowering Startups to Scale Globally",
    description:
      "Join 23 Ventures' 20-week program to access expert mentorship, funding, and a global network. Designed for SaaS, AI/ML, Web3, and digital agencies aiming to reach $10,000 MRR or 10,000 users.",
    images: "/preview.jpg",
    url: "https://23ventures.com",
    creators: "Manthan Gupta",
  },
  twitter: {
    title: "23 Ventures - Empowering Startups Globally",
    description:
      "Accelerate your SaaS, AI/ML, Web3, or digital agency startup with 23 Ventures' mentorship, funding, and global network. Achieve $10,000 MRR or 10,000 users in just 20 weeks.",
    images: "/preview.jpg",
    card: "summary_large_image",
  },
  creator: "Manthan Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollbarWidth: "none" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mainContainer bgColor`}
        suppressHydrationWarning
        style={{ scrollbarWidth: "none" }}
      >
        <Navbar />
        {/* <ParticleBackground /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
