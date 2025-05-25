"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const IntroAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 4000); // 4s duration
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed intro-container inset-0 z-[999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2.6, duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h1
        className="zoom-text text-[8vw] leading-[8vw] font-black text-center"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
      >
        23Ventures
      </motion.h1>
    </motion.div>
  );
};

export default IntroAnimation;
