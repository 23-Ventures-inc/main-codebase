"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    title: "Personal Branding",
    description:
      "Your story is your biggest asset. We help founders shape their identity, build trust, and attract opportunities that open doors. In a world where attention matters, we ensure your name and work stand out, making you the face of your vision.",
  },
  {
    id: 2,
    title: "Community/Journey",
    description:
      "Entrepreneurship is tough, but you don't have to do it alone. We've built a space that values struggles as much as success. A place where founders share, learn, and grow together—because real change happens when people push forward as a collective.",
  },
  {
    id: 3,
    title: "We Act as a Co-Founder",
    description:
      "We're not just advisors or mentors—we work alongside you. From refining ideas to tackling roadblocks, we put in the work, helping you execute, adapt, and grow. Your vision is ours too, and we'll build it with you.",
  },
  {
    id: 4,
    title: "Structured Approach",
    description:
      "Dreams need direction. We don't just tell you to figure it out—we shape the roadmap together, breaking big goals into clear, actionable steps. No more uncertainty—just a plan built for execution.",
  },
  {
    id: 5,
    title: "Focus",
    description:
      "Distractions are everywhere, and losing sight of your vision is easy. We ensure you stay aligned with what truly matters, helping you cut through the noise and move forward with precision and clarity.",
  },
  {
    id: 6,
    title: "Distribution",
    description:
      "Ideas alone aren't enough, they need to move. We make that happen through our alumni network, the right mentors, proven companies, and founder-to-founder conversations. Community isn't just support, it's your launchpad. The right connections. At the right time. Where it counts from the exclusive people.",
  },
];

const WeWorkFast = () => {
  const [width, setWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    width < 768 ? ["0%", "-83.33%"] : ["0%", "-92%"]
  );

  // Adjust the progress bar width for smaller screens
  const progressbarWidth = useTransform(
    scrollYProgress,
    [0, 1],
    width < 768 ? ["10vw", "83.33vw"] : ["5vh", "400vh"]
  );

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="h-screen sticky top-[15vh] overflow-hidden">
        {/* Fixed title section */}
        <div className="absolute top-0 left-0 w-full z-10 p-8">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">
            Why 23V is more than just a Venture Capital ?
          </h1>
          <p className="font-base text-lg md:text-xl text-gray-400 text-center mt-4">
            Alongside providing funding, guidance and mentorship we set
            ourselves apart by the followings:
          </p>
        </div>

        {/* Horizontally scrolling containers */}
        <motion.div
          className="absolute top-[17rem] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-start h-[calc(70vh-16rem)]"
          style={{ x }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-screen md:w-[70vh] h-full p-8 flex items-start justify-start flex-col gap-10 `}
            >
              <h2
                className={`md:text-4xl font-bold text-white ${
                  item.id === 3 ? "text-2xl" : "text-3xl"
                }`}
              >
                {item.title}
              </h2>

              <span className="md:h-[3rem] md:w-full my-7 md:my-1 relative">
                {item.id === 1 ? null : (
                  <span className="absolute z-30 -top-16 md:-top-10">
                    <svg
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 4 80"
                      width="5"
                      height="120"
                    >
                      <path d="M2 96V0" stroke="white" strokeWidth="4"></path>
                    </svg>
                  </span>
                )}
              </span>

              <p
                className="text-gray-400 ml-2 font-semibold text-base"
                style={{ paddingRight: item.id === 4 ? 15 : 0 }}
              >
                {item.description}
              </p>
            </div>
          ))}
          <motion.div
            className="absolute top-24 left-6 h-12 rounded-3xl"
            style={{
              width: progressbarWidth,
              backgroundImage:
                "linear-gradient(90deg, #0f766e 0%, #159f96 20%, #38bdf8 40%, #6366f1 60%, #ec4899 80%, #f97316 100%)",
            }}
          />
        </motion.div>
      </div>

      <div className="h-[350vh]" />
    </div>
  );
};

export default WeWorkFast;
