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
  title: "23 Ventures Inc. --- The one's who dont stop dreaming",
  description:
    "Join 23 Ventures' (A venture capital firm) 20-week program to access expert mentorship, funding, and a global network. Designed for SaaS, AI/ML, and digital service agencies aiming to reach $1 million MRR and beyond.",
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
    title: "23 Ventures Inc. --- The one's who dont stop dreaming",
    description:
      "Join 23 Ventures' (A venture capital firm) 20-week program to access expert mentorship, funding, and a global network. Designed for SaaS, AI/ML, and digital service agencies aiming to reach $1 million MRR and beyond.",
    images: "/preview.jpg",
    url: "https://23ventures.com",
    creators: "Manthan Gupta",
  },
  twitter: {
    title: "23 Ventures Inc. --- The one's who dont stop dreaming",
    description:
      "Join 23 Ventures' (A venture capital firm) 20-week program to access expert mentorship, funding, and a global network. Designed for SaaS, AI/ML, and digital service agencies aiming to reach $1 million MRR and beyond.",
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
