"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import useTheme from "@/hooks/useTheme";

const advisors = [
  {
    name: "Youmat",
    link: "https://youmat.in/",
    linkedinlink: "https://www.linkedin.com/company/youmathealth/  ",
    roles: [
      {
        name: "Ayan Mondal",
        linkedin: "https://www.linkedin.com/in/ayan-mondal-6b6919275/",
      },
      {
        name: "Disha Vanel",
        linkedin: "https://www.linkedin.com/in/disha-vanel-a1409b251/",
      },
    ],
    profile:
      "Youmat is a marketplace for on-demand psychological counseling, specifically designed for per-minute conversations.",
    img: "/Youmat.jpg",
    buzzwords: ["Telehealth", "Counseling", "Behavioral Analytics"],
  },
  {
    name: "Verbly",
    link: "https://www.verblyai.com/ ",
    linkedinlink: "https://www.linkedin.com/company/verblyai",
    roles: [
      {
        name: "Abhishek Bhattacharjee",
        linkedin: "https://my.linkedin.com/in/abhishekb1",
      },
      {
        name: "Harshit Mishra",
        linkedin: "https://www.linkedin.com/in/harshit-senpai/",
      },
    ],
    profile:
      "Verbly is building an AI-powered Interactive Voice Response (IVR) platform to modernize and automate customer service calls.",
    img: "/Verbly.png",
    buzzwords: ["AI", "IVR", "Voice Automation"],
  },
  {
    name: "Vectr",
    link: "https://vectr.co.in ",
    linkedinlink: "https://www.linkedin.com/company/vectrs",
    roles: [
      {
        name: "Abhinav Pentani",
        linkedin: "https://www.linkedin.com/in/abhinav-pentani",
      },
      {
        name: "Shaik Saifuddin",
        linkedin: "https://www.linkedin.com/in/shaik-saifuddin-482947272",
      },
      {
        name: "Ayus Pathak",
        linkedin: "https://www.linkedin.com/in/ayus-pathak",
      },
    ],
    profile:
      "Vectr is developing a marketplace that connects students with educators and content creators.",
    img: "/vectr.png",
    buzzwords: ["EdTech", "Online Learning", "Collaboration"],
  },
  {
    name: "Geochain",
    link: "http://linkedin.com/company/geochain ",
    linkedinlink: "http://linkedin.com/company/geochain ",
    roles: [
      {
        name: "Aryan Gupta",
        linkedin: "https://www.linkedin.com/in/aryan-gupta-00ab92203/",
      },
    ],
    profile:
      "Geochain is a Web3 platform for land tokenization in India, making real estate ownership and transactions more secure and transparent.",
    img: "/Geochain.png",
    buzzwords: ["Web3", "Tokenization", "Smart Contracts"],
  },
  {
    name: "Shoutout",
    link: "https://www.shoutoutkaro.in/",
    roles: [
      {
        name: "Adarsh Stanly",
        linkedin: "https://www.linkedin.com/in/adarsh-stanly-819667124  ",
      },
      {
        name: "Tushar Tomar",
        linkedin: "https://www.linkedin.com/in/tushar-tomar-b20aa7a1 ",
      },
    ],
    profile:
      "Shoutout is a two-sided marketplace that connects brands with everyday people who can promote them through simple online or offline tasks in return for stipends.",
    img: "", // No image provided
    buzzwords: ["Gig Economy", "Community Marketing", "Brand Promotion"],
  },
  {
    name: "Diigoo",
    link: "https://diigoo.com/",
    linkedinlink: "https://www.linkedin.com/company/diigoo/",
    roles: [
      {
        name: "Sainath Tangallapelly",
        linkedin:
          "https://www.linkedin.com/in/sainath-tangallapelly-b5a890160/",
      },
      {
        name: "Nagasai Chimmili",
        linkedin: "https://www.linkedin.com/in/nagasai-chimmili/",
      },
    ],
    profile:
      "Diigoo is building India’s most inclusive and community-driven Web3 ecosystem by combining blockchain technology with real-world utility and accessibility.",
    img: "/diigoo.png",
    buzzwords: [
      "Decentralization",
      "Blockchain Infrastructure",
      "BaaS (Blockchain-as-a-Service)",
    ],
  },
  {
    name: "Jogen",
    link: "https://jogen.space/",
    linkedinlink: "https://www.linkedin.com/company/jogen-ai/",
    roles: [
      {
        name: "Darpreet Singh",
        linkedin: "https://www.linkedin.com/in/dxrpreet/ ",
      },
    ],
    profile:
      "Jogen is an emotionally intelligent AI journaling app designed to foster mindful self-reflection through private, personalized voice and text-based conversations.",
    img: "/jogen.jpg",
    buzzwords: [
      "Emotionally Intelligent AI",
      "Mood & Energy Tracking",
      "Journaling",
    ],
  },
  {
    name: "Cohyve",
    link: "https://www.cohyve.io/",
    linkedinlink: "https://www.linkedin.com/company/cohyve/",
    roles: [
      {
        name: "Rupesh Kumar",
        linkedin: "https://www.linkedin.com/in/therupeshkumar/",
      },
    ],
    profile:
      "Cohyve is a scalable, on-demand creative platform that connects brands with top-tier global design talent to deliver high-quality, fast-turnaround visual content across every format.",
    img: "/cohvey.jpeg",
    buzzwords: ["Creative Ops", "Scalable Workflows", "Task Automation"],
  },
];

const Page = () => {
  const { theme } = useTheme(); // get current theme
  const isDarkMode = theme === "dark";

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
    <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white py-16 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="w-full h-screen flex justify-center items-center flex-col gap-8">
          <h1 className="md:text-9xl text-6xl font-bold bg-clip-text bg-gradient-to-r from-black dark:from-white via-green-600 to-black dark:to-white text-center">
            <span className="text-color">Portfolio</span>
          </h1>
          <p className="md:text-xl text-lg text-center font-semibold mb-8 italic md:w-[55%] text-gray-700 dark:text-gray-300">
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
              className="relative flex flex-col flex-wrap md:flex-row items-center justify-start border border-[#499478]/30 dark:border-green-400/20 p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 hover:border-[#499478] backdrop-blur-md overflow-hidden w-full max-w-4xl min-h-[320px] md:min-h-[280px] bg-transparent"
            >
              {hoveredCard === index && hoverPos && (
                <motion.div
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    top: hoverPos.y - 75,
                    left: hoverPos.x - 75,
                    width: 150,
                    height: 150,
                    background: isDarkMode
                      ? "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)"
                      : "radial-gradient(circle, rgba(51,52,53,0.3) 0%, rgba(51,52,53,0) 60%)",
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
                <div className="flex-shrink-0 w-20 h-20 md:w-40 md:h-40 rounded-md overflow-hidden shadow-xl relative bg-transparent">
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
                    <div className="w-full h-full flex justify-center items-center text-md md:text-2xl font-bold text-black dark:text-white">
                      {advisor.name}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col h-full flex-grow">
                  <div className="mb-4">
                    <a
                      href={advisor.link.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-color text-3xl md:text-4xl font-bold mb-1 transition-colors"
                    >
                      <span className="mr-2">{advisor.name}</span>
                      <FaExternalLinkAlt className="text-base md:text-lg group-hover:scale-110 transition-transform" />
                    </a>
                    {/* Show LinkedIn icon only if the main link is a LinkedIn URL */}
                    {advisor.linkedinlink && (
                      <a
                        href={advisor.linkedinlink.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${advisor.name} LinkedIn`}
                        className=" group inline-flex m-3 text-gray-600 dark:text-gray-400"
                      >
                        <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                      </a>
                    )}

                    <div className="flex flex-col gap-1 mb-3">
                      {advisor.roles.map((person, i) => (
                        <a
                          key={i}
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center text-gray-600 dark:text-gray-400"
                        >
                          <span className="mr-2">{person.name}</span>
                          <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {advisor.buzzwords.map((word, i) => (
                      <span
                        key={i}
                        className="text-xs md:text-sm bg-green-800/20 text-green-700 dark:text-green-300 px-3 py-1 rounded-full border border-green-600"
                      >
                        {word}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-[90%]">
                    {advisor.profile}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="w-full h-screen flex justify-center items-center flex-col gap-8">
          <h1 className="md:text-7xl text-5xl font-bold bg-clip-text bg-gradient-to-r from-black dark:from-white via-green-600 to-black dark:to-white text-center">
            Want to join our <br />{" "}
            <span className="text-color">portfolio?</span>
          </h1>
          <p className="md:text-xl text-lg text-center font-semibold mb-8 italic md:w-[55%] text-gray-700 dark:text-gray-300">
            Have an idea that aligns with our vision? Share it with us — start
            your application today!
          </p>
          <Button onClickUrl="https://tally.so/r/mZLPk5" text="Apply" />
        </div>
      </div>
    </div>
  );
};

export default Page;
