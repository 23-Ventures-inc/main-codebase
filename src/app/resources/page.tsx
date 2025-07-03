"use client";

import { AppleCardsCarouselDemo } from "@/components/apple-cards-carousel";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      {/* Header Section */}
      {/* <div className="w-full min-h-screen bg-transparent flex justify-center items-center flex-col gap-8 relative">
          <video
            src="/res.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-[-1] blur-sm"
          />
          
        </div> */}
      <motion.div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden mb-8 bgGradient">
        <video
          src="/res.mp4"
          autoPlay
          loop
          muted
          controls={false}
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
        ></video>
        <h1 className="md:text-8xl text-5xl font-bold bg-clip-text bg-gradient-to-r from-black dark:from-white via-green-600 to-black dark:to-white text-center">
          <span className="text-color">Start with this ! </span>
        </h1>
        <p className="md:text-xl text-md text-center font-semibold mb-8 italic md:w-[60%] text-gray-700 dark:text-gray-300">
          Book written for Entrepreneurs for all ages !{" "}
        </p>
      </motion.div>

      {/* Carousel Section */}
      <div className="w-full max-w-6xl mx-auto mt-10 mb-20 px-2 sm:px-4 md:px-6 lg:px-8">
        <AppleCardsCarouselDemo />
      </div>
    </>
  );
};

export default Page;
