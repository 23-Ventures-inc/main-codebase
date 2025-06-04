"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [showAnimation, setShowAnimation] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const navEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const isInitialLoadOrReload =
      navEntry?.type === "navigate" || navEntry?.type === "reload";

    if (isInitialLoadOrReload) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setShowAnimation(false);
    }
  }, []);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.warn("Autoplay failed:", error);
      }
    };

    if (!showAnimation) {
      playVideo();
    }
  }, [showAnimation]);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <>
      <div className="relative">
        {/* Intro Animation */}
        <AnimatePresence>
          {showAnimation && (
            <IntroAnimation onAnimationComplete={handleAnimationComplete} />
          )}
        </AnimatePresence>

        {/* Content Wrapper with fallback height to prevent layout flicker */}
        <div className="relative min-h-screen w-full">
          <AnimatePresence>
            {!showAnimation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`${showAnimation ? "pointer-events-none" : ""}`}
              >
                <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden pt-12">
                  <video
                    ref={videoRef}
                    loop
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
          </AnimatePresence>

          {/* Layout placeholder during intro to prevent footer jump */}
          {showAnimation && <div className="invisible h-[4000px] w-full" />}
        </div>
      </div>
    </>
  );
}
