"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const advisors = [
  {
    name: "Benjamin Wiggins",
    role: "Advisor",
    profile:
      "Ben Wiggins has 15 years of experience in media production across film, TV, and podcasts. He played football at Rice and later worked in sports and media, collaborating with Eva Longoria and Marc Cherry. He founded Proclaim/Podcast Architects in 2021 and is now involved in venture capital, mentoring startups.",
    img: "/advisers/a1.jpeg",
    link: "https://www.linkedin.com/in/benjaminwiggins/?utm_source=share&utm_campai",
  },
  {
    name: "Mahmoud Hasan",
    role: "Advisor",
    profile:
      "Experienced legal expert specializing in corporate law, investments, litigation, and compliance. Skilled in risk management, regulatory frameworks, and legal negotiations, offering strategic solutions for businesses.",
    img: "/advisers/a2.jpeg",
    link: "https://www.linkedin.com/in/mahmoud-hassan-093874186/?utm_source=share&utm_",
  },
  {
    name: "Rami Atwani",
    role: "Advisor",
    profile:
      "Blockchain consultant passionate about DeFi and Web3. Focused on developing real-world decentralized technology solutions.",
    img: "/advisers/a3.jpeg",
    link: "https://www.linkedin.com/in/rami-atwani-cbe-b79a3b153/?utm_source=share&utm_ca",
  },
  {
    name: "Abhinav Jain",
    role: "Advisor",
    profile:
      "SVP Finance at CoinDCX, former CFO at PharmEasy. Expert in business performance, investment strategies, and automation. Recognized as a top finance leader. Enjoys cricket, table tennis, and reading.",
    img: "/advisers/a4.jpeg",
    link: "https://www.linkedin.com/in/abhinavpjain/?utm_source=share&utm_campaign=share_",
  },
  {
    name: "Amit Mishra",
    role: "Advisor",
    profile:
      "Product leader with experience in tech, SaaS, and cybersecurity. Former Head of Product at Hive Pro. Worked at PwC on security initiatives. Advises startups on product growth and strategy.",
    img: "/advisers/a5.jpeg",
    link: "https://www.linkedin.com/in/amit-mish/?utm_source=share&utm_campaign=share_via",
  },
  {
    name: "KJ Lavan",
    role: "Advisor",
    profile:
      "Biotech-Pharma executive, former pro athlete, founder, and investor. Passionate about innovation linking sustainability and growth.",
    img: "/advisers/a6.jpeg",
    link: "https://www.linkedin.com/in/kj-lavan-1739ab226/?utm_source=share&utm_campaign=",
  },
];

const Page = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(
    null
  );

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
    <>
      <div className="w-full min-h-screen text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="w-full h-screen flex justify-center items-center flex-col gap-8">
            <h1 className="md:text-9xl text-6xl font-bold bg-clip-text bg-gradient-to-r from-white via-green-600 to-white text-center">
              Our <span className="text-color"> Advisors </span>
            </h1>
            <p className="md:text-xl text-lg text-center font-semibold mb-8 italic md:w-[55%]">
              Our advisory team consists of serial entrepreneurs, experienced
              operators and seasoned investors.
            </p>
          </div>

          {/* Advisors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-16">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                className="relative flex flex-col items-center border border-[#499478]/30 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:scale-[1.02] backdrop-blur-md overflow-hidden"
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

                {/* Image */}
                <div className="relative w-48 h-48 mb-6 flex justify-center items-center rounded-full overflow-hidden shadow-xl">
                  <Image
                    src={advisor.img || "/placeholder.svg"}
                    alt={advisor.name}
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-3xl md:text-5xl font-bold text-color mb-1 text-center">
                  {advisor.name}
                </h3>
                <p className="text-lg md:text-xl mb-2 text-gray-400">
                  {advisor.role}
                </p>

                {/* LinkedIn */}
                <Link
                  href={advisor.link}
                  className="text-lg text-white transition-all duration-200  mb-4"
                  target="_blank"
                  aria-label={`${advisor.name}'s LinkedIn profile`}
                >
                  <Linkedin size={24} />
                </Link>

                {/* Profile */}
                <p className="text-sm md:text-base text-gray-300 text-center max-w-xs">
                  {advisor.profile}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
