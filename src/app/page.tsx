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
    // Detect initial page load or reload
    const navEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    const isInitialLoadOrReload =
      navEntry?.type === "navigate" || navEntry?.type === "reload";

    if (isInitialLoadOrReload) {
      setShowAnimation(true);

      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3500); // Match your animation duration

      return () => clearTimeout(timer);
    } else {
      // Fallback: don't show animation on client-side redirects
      setShowAnimation(false);
    }
  }, []);

  useEffect(() => {
    // Safari autoplay fix: try to play video manually after animation ends
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

  return (
    <>
      <div className="relative">
        {/* Animation overlay */}
        <AnimatePresence>
          {showAnimation && (
            <IntroAnimation
            // Removed onAnimationComplete here because your component doesn't accept it
            // onAnimationComplete={() => setShowAnimation(false)}
            />
          )}
        </AnimatePresence>

        {/* Main content rendered immediately */}
        <div className={`${showAnimation ? "pointer-events-none" : ""}`}>
          <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden pt-12">
            <video
              ref={videoRef} // <-- ref for manual playback control
              src="/home.mp4"
              autoPlay
              loop
              muted={true} // <-- explicitly boolean
              playsInline
              preload="auto" // <-- help preload in Safari
              className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
            />
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
        </div>
      </div>
    </>
  );
}
