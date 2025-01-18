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
  title: "23V",
  description: "23V",
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
