"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const data = [
  {
    title: "Apply with a Form",
    description:
      "Fill out a detailed application form to assess the startup idea, vision, and potential. This form helps identify passionate entrepreneurs with innovative ideas and aligns them with the program’s goals.",
  },
  {
    title: "Screening (Phase 1)",
    description:
      "A preliminary evaluation of applicants, focusing on the core idea, feasibility, and problem-solving potential. This phase filters candidates who demonstrate clarity and commitment toward their vision.",
  },
  {
    title: "Screening (Phase 2)",
    description:
      "A deeper dive into shortlisted applicants, assessing business scalability, market understanding, and the entrepreneur’s capabilities. This phase ensures only high-potential startups move forward.",
  },
  {
    title: "Orientation Program",
    description:
      "Introducing participants to the program’s goals, structure, and expectations. This phase covers program objectives, success metrics, and resources provided to support participants throughout the journey.",
  },
  {
    title: "The Story Behind",
    description:
      "A session dedicated to helping founders discover and articulate their 'why' and the purpose driving their startup. This phase fosters a strong cultural foundation and connection to their vision.",
  },
  {
    title: "Sharing Their Own Stories",
    description:
      "Entrepreneurs share their personal journeys, including challenges and victories, to build trust and resilience. This process encourages authenticity and establishes a collaborative community.",
  },
  {
    title: "Bi-Weekly Workshops",
    description:
      "A series of 20 workshops over 20 weeks, offering actionable insights into various aspects of business growth. These sessions include expert guidance on marketing, operations, funding, and scaling strategies.",
  },
  {
    title: "Milestone Tracking and Progress Evaluation",
    description:
      "Startups set clear milestones and track progress against them. Regular evaluations ensure accountability, helping entrepreneurs stay on course and refine strategies when needed.",
  },
  {
    title: "Feedback and Mentor Support",
    description:
      "Access to dedicated mentors who provide tailored feedback and solutions. Entrepreneurs receive guidance to overcome hurdles and achieve their short- and long-term goals.",
  },
  {
    title: "Elimination and Bonus Tasks",
    description:
      "Regular evaluations may result in eliminations for those unable to meet expectations. Bonus tasks challenge entrepreneurs to think innovatively and showcase their potential.",
  },
  {
    title: "Valuation and Pitch Deck",
    description:
      "Participants refine their business valuation models and craft compelling pitch decks. This phase ensures they are investor-ready and have a clear understanding of their business worth (excludes agencies).",
  },
  {
    title: "Investor Presentation and Pitch Day",
    description:
      "Startups present their refined pitches to a panel of investors, showcasing their growth and future potential. This is the culmination of the program and a gateway to funding opportunities.",
  },
  {
    title: "Continued Support",
    description:
      "For startups that achieve their milestones, we provide ongoing guidance and resources. This ensures sustainable growth and success beyond the program, fostering long-term partnerships.",
  },
];

export const ProgressScroll = () => {
  const divRef = useRef(null);

  return (
    <>
      <div
        className="relative w-full flex justify-center items-center  flex-col "
        ref={divRef}
      >
        {/* reason section */}
        {data.map(({ title, description }, index) => {
          return (
            <Boxes title={title} index={index} key={index} text={description} />
          );
        })}
      </div>
    </>
  );
};

interface props {
  index: number;
  text: string;
  title: string;
}

const Boxes = ({ index, title, text }: props) => {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start 0.7", "center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const lineOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        className={`w-full flex items-start justify-start flex-row-reverse px-8 gap-4 md:p-0 ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } md:gap-8 ${index == 0 ? "mt-[30vh]" : "mt-0"} mb-4`}
        ref={divRef}
        key={index}
      >
        {/* text */}
        <motion.div
          className="w-full h-full md:w-1/2 mt-[-2rem] md:mt-[-4rem] "
          style={{ opacity }}
        >
          <div
            className={`${
              index % 2 === 0 ? "md:items-end" : "md:items-start"
            } md:relative w-full min-h-full rounded-xl flex justify-center p-4 lg:p-8 transition-all duration-300 flex-col gap-4 items-start`}
          >
            <h4 className="text-[#499478] font-semibold text-base">
              Step {index + 1}
            </h4>
            <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-left md:text-center">
              {title}
            </h2>
            <p
              className={` w-full md:w-1/2 text-left font-semibold text-base sm:text-xs md:text-lg lg:text-xl xl:text-xl md:block text-gray-400 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              {text}
            </p>
          </div>
        </motion.div>
        {/* line */}
        <div className="flex justify-center items-center  flex-col gap-4">
          <motion.div
            style={{ opacity }}
            className="w-5 h-5 rounded-full bg-[#499478]"
          ></motion.div>

          <motion.div
            // ref={lineRef}
            className={`bg-[#499478] h-[55vh] w-1 origin-top pb-3 ${
              index == data.length - 1 ? "hidden" : ""
            }`}
            style={{
              scaleY: lineScaleY,
              opacity: lineOpacity,
            }}
          />
        </div>

        {/* text section */}
        <div className="hidden md:block md:w-1/2" />
      </motion.div>
    </>
  );
};
