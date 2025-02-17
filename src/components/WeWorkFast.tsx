"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    title: "First Point of Contact ",
    description:
      "🚀 At CreatorLed, we know that the next big idea could come from anyone at any time. Although our focus is primarily Pre-Seed to Seed, we welcome companies of all stages and sizes. We’ll screen every submission to determine fit and next steps.",
  },
  {
    id: 2,
    title: "Meeting 1 and 2",
    description:
      "✨ As a firm founded by and for creative visionaries, we want to get to know you beyond your pitch deck to ensure the vibes are immaculate We want to know your why — why you created this company, why your company is moving the needle, and why it’s something the world needs.",
  },
  {
    id: 3,
    title: "Due diligence",
    description:
      "🔎 We deeply respect how valuable your time is and the importance of moving quickly, which is why we have one of the most efficient due diligence processes in the industry. We perform our due diligence with a turnaround time, so you can move on if it’s a ‘no’ and get to work if it’s a ‘yes’!",
  },
  {
    id: 4,
    title: "Term sheet signing",
    description:
      "📝 We work from straightforward, standard documents that minimize confusion and legal fees while promoting transparency.Once the term sheet is approved and signed, it’s time to pop the champagne! But once the bubbles have settled, we get straight to work to help your business succeed.",
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
    width < 768 ? ["0%", "-90%"] : ["0%", "-85%"]
  );
  const progressbarWidth = useTransform(
    scrollYProgress,
    [0, 1],
    width < 768 ? ["5vh", "160vh"] : ["5vh", "270vh"]
  );

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="h-screen sticky top-[15vh] overflow-hidden">
        {/* Fixed title section */}
        <div className="absolute top-0 left-0 w-full z-10 p-8">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-center">
            We work fast.
          </h1>
          <p className="font-base text-lg md:text-xl text-gray-400 text-center mt-4">
            Our process takes between 2-4 weeks from initial conversation to
            closing a deal.
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
              className={`flex-shrink-0 w-screen md:w-[70vh] h-full p-8 flex items-start justify-start flex-col gap-10`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {item.title}
              </h2>
              {/* here */}
              <span className="md:h-[3rem] md:w-full my-7 md:my-1"></span>
              <p
                className="text-gray-400 font-semibold text-base"
                style={{ paddingRight: item.id === 4 ? 15 : 0 }}
              >
                {item.description}
              </p>
            </div>
          ))}
          <motion.div
            className="bg-[#499478] absolute top-24 left-6 h-12 rounded-3xl"
            style={{ width: progressbarWidth }}
          ></motion.div>
        </motion.div>
      </div>

      <div className="h-[300vh]" />
    </div>
  );
};

export default WeWorkFast;
