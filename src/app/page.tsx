"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import HomePage from "../components/HomePage";
import HeroSection from "@/components/HeroSection";
import OffersBoxs from "@/components/OffersBoxs";
import HomeEnd from "@/components/HomeEnd";
import GridBoxes from "@/components/GridBoxes";
import New from "@/components/New";
import WeWorkFast from "@/components/WeWorkFast";
import FaqSection from "@/components/FaqSection";
import VideoPage from "@/components/VideoPage";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {!showContent && <IntroAnimation />}

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden pt-12">
            <video
              loop
              autoPlay
              muted={true}
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
            >
              <source src="/home.mp4" type="video/mp4" />
              <source src="/home.webm" type="video/webm" />
              <source src="/home.ogv" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <HomePage />
          </div>

          <VideoPage />
          <HeroSection />
          <OffersBoxs />
          <GridBoxes />
          <New />
          <WeWorkFast />
          <div className="w-full h-auto flex justify-center items-center py-14">
            <FaqSection />
          </div>
          <HomeEnd />
        </motion.div>
      )}
      {/* Layout placeholder during intro to prevent footer jump */}
      {!showContent && <div className="invisible h-[6000px] w-full" />}
    </div>
  );
}
