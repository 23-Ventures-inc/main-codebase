"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./MiniLoader.css"; // Loader styles

const IntroAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 3400); // Entire component fades out after 4s
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className=" intro-container fixed top-0 left-0 w-full h-full z-[999] bg-black flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2.6, duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h1
        className="zoom-text text-[8vw] leading-[8vw] m-5 font-black text-white text-center"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
      >
        23Ventures
      </motion.h1>

      {/* Loader fades out together with text */}
      <motion.div
        className="loader-container"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
