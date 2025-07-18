"use client";

// import { useState } from "react";
import Button from "./Button";
import { useState } from "react";
import { motion } from "motion/react";
import useTheme from "@/hooks/useTheme";

const data = [
  {
    title: "Summer",
    description: "20 Weeks Exclusive High Intensity program",
    points: [
      { key: "Duration", point: "5 Months" },
      { key: "Location", point: "Remote" },
      { key: "Fee", point: "Free" },
      {
        key: "Funding",
        point:
          "Get access to investment opportunities on demo day that help you scale your business faster post cohort",
      },
      { key: "Types", point: "AI Saas, Web3, Marketplace, SAAS, AR-VR" },
      {
        key: "Additionals",
        point:
          "Experience, community, culture, KPI's, Strategize and planning, process and systems",
      },
      {
        key: "Equity Dilution",
        point: "4-6% Equity hold by 23Ventures",
      },
      {
        key: "Milestones (In 5 Months)",
        point: "Upto 10,000 Users Monthly (Digital Softwares)",
      },
      {
        key: "What's in it for you ?",
        point:
          "Personalized mentorship, bi-weekly workshops, hands on guidance, hit milestones, validate traction, be a part of founder's community, connect with investors post-Cohort & build sustainable long term successfull businesses.",
      },
    ],
  },
  {
    title: "Winter",
    description: "20 Weeks Exclusive High Intensity program ",
    points: [
      { key: "Duration", point: "5 Months" },
      { key: "Location", point: "Remote" },
      { key: "Fee", point: "Free" },
      {
        key: "Funding",
        point:
          "Get access to investment opportunities on demo day that help you scale your business faster post cohort",
      },
      { key: "Types", point: "AI Saas, Web3, Marketplace, SAAS, AR-VR" },
      {
        key: "Additionals",
        point:
          "Experience, community, culture, KPI's, Strategize and planning, process and systems",
      },
      {
        key: "Equity Dilution",
        point: "4-6% Equity hold by 23Ventures",
      },
      {
        key: "Milestones (In 5 Months)",
        point: "Upto 10,000 Users Monthly (Digital Softwares)",
      },
      {
        key: "What's in it for you ?",
        point:
          "Personalized mentorship, bi-weekly workshops, hands on guidance, hit milestones, validate traction, be a part of founder's community, connect with investors post-Cohort & build sustainable long term successfull businesses.",
      },
    ],
  },
];

const OffersBoxs = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden grid place-items-center gap-4">
      <span className="min-h-[20vh] md:text-6xl font-bold text-black dark:text-white text-3xl w-full h-[20%] text-center flex justify-center items-center">
        We offer 2 seasons
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3.5vw] w-full max-w-[1600px] px-[3.5vw] mx-auto min-h-[80vh]">
        {data.map(({ description, points, title }, index) => (
          <Boxes
            key={index}
            description={description}
            keyPoints={points}
            title={title}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

interface BoxesProps {
  title: string;
  description: string;
  keyPoints: {
    key: string;
    point: string;
  }[];
  index: number;
}

const Boxes = ({ description, keyPoints, title, index }: BoxesProps) => {
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
    <div className="h-auto flex items-center justify-center m-auto flex-col  w-full max-w-[700px]">
      <div
        key={index}
        onMouseMove={(e) => handleMouseMove(e, index)}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col flex-wrap md:flex-row items-center justify-center border border-[#499478]/30 dark:border-green-400/20 p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 hover:border-[#499478] backdrop-blur-md overflow-hidden w-full max-w-4xl min-h-[320px] md:min-h-[280px] bg-transparent"
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

        {/* Title Section */}
        <div className="text-center mb-4">
          <h2 className="text-5xl md:text-7xl font-bold dark:text-white text-black mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            {description}{" "}
            {index == 0 ? (
              <span className="font-bold text-black dark:text-white text-2xl">
                <br />
                April - August
              </span>
            ) : (
              <span className="font-bold text-black dark:text-white text-2xl">
                <br />
                October - February
              </span>
            )}
          </p>
        </div>

        {/* Key Points Section */}
        <motion.div
          className={`space-y-8 `}
          variants={{
            open: {
              visibility: "visible",
              height: "auto",
              opacity: 1,
              transition: { duration: 0.5 },
            },
            close: {
              visibility: "hidden",
              height: 0,
              opacity: 0,
              transition: { duration: 0.5 },
            },
          }}
          exit={{
            height: 0,
            visibility: "hidden",
            opacity: 0,
            transition: { duration: 0.5 },
          }}
        >
          {keyPoints.map(({ key, point }, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 border-t border-gray-800 pt-6"
            >
              <h3 className="text-gray-400 text-base md:text-lg w-full md:w-1/4">
                {key}
              </h3>
              <p className="dark:text-gray-200 text-black/80 text-base md:text-lg font-medium w-full md:w-3/4">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Button Section */}
        <div className="mt-8 flex justify-center">
          <Button text="Apply" onClickUrl="https://tally.so/r/mZLPk5" />
        </div>
      </div>
    </div>
  );
};

export default OffersBoxs;
