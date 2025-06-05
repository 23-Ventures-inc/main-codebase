"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";

const advisors = [
  {
    name: "Youmat",
    role: "Ayan Mondal & Disha Vanel",
    profile:
      "Youmat is a marketplace for on-demand psychological counseling, specifically designed for per-minute conversations. ",
    img: "/Youmat.jpg",
    buzzwords: ["Telehealth", "MVP", "Behavioral Analytics"],
  },
  {
    name: "Verbly",
    role: "Abhishek Bhattacharjee & Harshit Mishra",
    profile:
      "Verbly is building an AI-powered Interactive Voice Response (IVR) platform to modernize and automate customer service calls.",
    img: "/Verbly.png",
    buzzwords: ["AI", "IVR", "Voice Automation"],
  },
  {
    name: "Vectr",
    role: "Abhinav Pentani, Shaik Saifuddin & Ayus Pathak",
    profile:
      "Vectr is developing a marketplace that connects students with educators and content creators.",
    img: "/vectr.png",
    buzzwords: ["EdTech", "AI Tools", "Community Building"],
  },
  {
    name: "Geochain",
    role: "Aryan Gupta",
    profile:
      "Geochain is a Web3 platform for land tokenization in India, making real estate ownership and transactions more secure and transparent. ",
    img: "/Geochain.png",
    buzzwords: ["Web3", "Tokenization", "Smart Contracts"],
  },
  {
    name: "Shoutout",
    role: "Adarsh Stanly & Tushar Tomar",
    profile:
      "Shoutout is a two-sided marketplace that connects brands with everyday people who can promote them through simple online or offline tasks in return for stipends.",
    img: "",
    buzzwords: ["Gig Economy", "Community Marketing", "MVP Launch"],
  },
];

const Page = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(
    null
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
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
    <div className="w-full min-h-screen text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="w-full h-screen flex justify-center items-center flex-col gap-8">
          <h1 className="md:text-9xl text-6xl font-bold bg-clip-text bg-gradient-to-r from-white via-green-600 to-white text-center">
            <span className="text-color">Portfolio</span>
          </h1>
          <p className="md:text-xl text-lg text-center font-semibold mb-8 italic md:w-[55%]">
            A glimpse into the journeys we have been part of.
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              className="relative flex flex-col flex-wrap md:flex-row items-center justify-start border border-[#499478]/30 p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-[#499478] backdrop-blur-md overflow-hidden w-full max-w-4xl min-h-[320px] md:min-h-[280px]"
            >
              {/* Hover glow circle */}
              {hoveredCard === index && hoverPos && (
                <motion.div
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    top: hoverPos.y - 75,
                    left: hoverPos.x - 75,
                    width: 150,
                    height: 150,
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)",
                    filter: "blur(30px)",
                    mixBlendMode: "screen",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              {/* Horizontal Layout */}
              <div className="flex flex-row gap-6 w-full h-full items-start">
                {/* Image */}
                <div className="flex-shrink-0 w-20 h-20 md:w-40 md:h-40  rounded-md overflow-hidden shadow-xl relative">
                  {advisor.img ? (
                    <Image
                      src={advisor.img}
                      alt={advisor.name}
                      fill
                      sizes="160px"
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex justify-center items-center tex-md md:text-2xl font-bold">
                      {advisor.name}
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="flex flex-col  h-full flex-grow">
                  <div className="mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-color mb-1">
                      {advisor.name}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 mb-2">
                      {advisor.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {advisor.buzzwords.map((word, i) => (
                      <span
                        key={i}
                        className="text-xs md:text-sm bg-green-800/20 text-green-300 px-3 py-1 rounded-full border border-green-600"
                      >
                        {word}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-gray-300 max-w-[90%]">
                    {advisor.profile}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* last Section */}
        <div className="w-full h-screen  flex justify-center items-center flex-col gap-8">
          <h1 className="md:text-7xl text-5xl font-bold bg-clip-text bg-gradient-to-r from-white via-green-600 to-white text-center">
            Want to join our <br />{" "}
            <span className="text-color"> portfolio?</span>
          </h1>
          <p className="md:text-xl text-lg text-center font-semibold mb-8 italic md:w-[55%]">
            Have an idea that aligns with our vision? Share it with us — start
            your application today!
          </p>
          <Button
            onClickUrl="https://deformity.ai/d/0FQReup5wsCr"
            text="Apply"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
