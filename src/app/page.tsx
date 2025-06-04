"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
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
      }, 3500); // Match animation duration
      return () => clearTimeout(timer);
    } else {
      setShowAnimation(false); // Skip animation on client-side routing
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
        {/* Intro Animation Overlay */}
        <AnimatePresence>
          {showAnimation && (
            <IntroAnimation onAnimationComplete={handleAnimationComplete} />
          )}
        </AnimatePresence>

        {/* Main Content - always mounted, fade in */}
        <div
          className={`
            relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden pt-12 
            transition-opacity duration-500 ease-in-out 
            ${showAnimation ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          {/* Background Video - always mounted, fades in */}
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="auto"
            className={`
              absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]
              transition-opacity duration-700 ease-in-out
              will-change-transform transform-gpu 
              ${showAnimation ? "opacity-0" : "opacity-100"}
            `}
          >
            <source src="/home.mp4" type="video/mp4" />
            <source src="/home.webm" type="video/webm" />
            <source src="/home.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>

          <HomePage />
        </div>

        {/* Other sections always rendered, follow the animation */}
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
      </div>
    </>
  );
}
