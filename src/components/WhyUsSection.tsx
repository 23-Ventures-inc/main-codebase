"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const data = [
  `You prefer a stable, traditional career path without the risks and uncertainties of groundbreaking ventures, this isn’t the right fit.`,
  `You questioning the status quo or pushing boundaries feels uncomfortable, this space of disruptive thinking may not align with your mindset.`,
  `You prefer staying within your comfort zone and avoid embracing challenges or setbacks, the dynamic environment of 23 Ventures might not suit you.`,
  "You're not ready to think big, innovate, and commit fully to scaling impactful ventures.",
];

const WhyUsSection = () => {
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredCard(index);
    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setHoverPos(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-12 mb-16">
      <span className="w-full text-center text-4xl md:text-7xl font-bold mb-16 mt-10 px-8 flex justify-center items-center gap-3 flex-col text-black dark:text-white">
        <span className="text-color">23 Ventures is not for you</span>
        if
      </span>

      <div className="grid md:grid-cols-2 w-3/4 md:w-[70%] justify-center items-center gap-4">
        {data.map((text, index) => (
          <div
            key={index}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            className="relative h-[100%] w-full border border-[#499478]/30 rounded-3xl text-xl md:text-3xl font-light text-black dark:text-white flex items-center justify-center px-12 p-8 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#499478]"
          >
            {/* Shiny circle effect */}
            {hoveredCard === index && hoverPos && (
              <motion.div
                className="pointer-events-none  absolute rounded-full"
                style={{
                  top: hoverPos.y - 75,
                  left: hoverPos.x - 75,
                  width: 150,
                  height: 150,
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)",
                  filter: "blur(30px)",
                  mixBlendMode: "screen",
                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}

            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsSection;
