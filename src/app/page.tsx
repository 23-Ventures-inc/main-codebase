"use client";

import { useEffect, useState } from "react";
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

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenAnimation");

    if (!hasSeenAnimation) {
      setShowAnimation(true);
      sessionStorage.setItem("hasSeenAnimation", "true");
      const timer = setTimeout(() => setShowAnimation(false), 3000); // now matches animation duration
      return () => clearTimeout(timer);
    } else {
      setShowAnimation(false);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showAnimation && <IntroAnimation />}
      </AnimatePresence>

      {!showAnimation && (
        <>
          <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden">
            <video
              src="/home.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
            />
            <HomePage />
          </div>

          <HeroSection />
          <OffersBoxs />
          <GridBoxes />
          <New />
          <WeWorkFast />
          <div className="w-full h-auto flex justify-center items-center py-14">
            <FaqSection />
          </div>
          <HomeEnd />
        </>
      )}
    </>
  );
}
