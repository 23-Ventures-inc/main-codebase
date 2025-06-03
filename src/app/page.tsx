"use client"; // <-- Make sure the component is treated as a client component

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
      }, 3500); // Match your animation duration (3.5 seconds)
      return () => clearTimeout(timer);
    } else {
      setShowAnimation(false); // Don't show animation on client-side redirects
    }
  }, []);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          // Play the video after the intro animation ends
          await videoRef.current.play();
        }
      } catch (error) {
        console.warn("Autoplay failed:", error);
      }
    };

    if (!showAnimation) {
      // When animation ends, trigger the video to play
      playVideo();
    }
  }, [showAnimation]);

  const handleAnimationComplete = () => {
    setShowAnimation(false); // Hide animation and trigger video
  };

  return (
    <>
      <div className="relative">
        {/* Animation overlay */}
        <AnimatePresence>
          {showAnimation && (
            <IntroAnimation onAnimationComplete={handleAnimationComplete} />
          )}
        </AnimatePresence>

        {/* Main content rendered immediately */}
        <div className={`${showAnimation ? "pointer-events-none" : ""}`}>
          <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden pt-12">
            <video
              ref={videoRef} // <-- ref for manual playback control
              loop
              muted={true} // <-- Explicitly boolean to ensure mute
              playsInline
              preload="auto" // <-- Help preload in Safari
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
        </div>
      </div>
    </>
  );
}
