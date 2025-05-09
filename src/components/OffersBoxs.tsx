"use client";

// import { useState } from "react";
// import Button from "./Button";
import { motion } from "motion/react";
import Link from "next/link";

const data = [
  {
    title: "Summer",
    descriptiopn: "20 Weeks Exclusive High Intensity program",
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
          "Experience, community, culture, KPI’s, Strategize and planning, process and systems",
      },
      {
        key: "Equity Dilution",
        point: "6% Equity hold by 23Ventures",
      },
      {
        key: "Milestones (In 5 Months)",
        point:
          "Upto 10,000 Users Monthly (Digital Softwares)",
      },
      {
        key: "What’s in it for you ?",
        point:
          "Personalized mentorship, bi-weekly workshops, hands on guidance, hit milestones, validate traction, be a part of founder’s community, connect with investors post-Cohort & build sustainable long term successfull businesses.",
      },
    ],
  },
  {
    title: "Winter",
    descriptiopn: "20 Weeks Exclusive High Intensity program ",
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
          "Experience, community, culture, KPI’s, Strategize and planning, process and systems",
      },
      {
        key: "Equity Dilution",
        point: "6% Equity hold by 23Ventures",
      },
      {
        key: "Milestones (In 5 Months)",
        point:
          "Upto 10,000 Users Monthly (Digital Softwares)",
      },
      {
        key: "What’s in it for you ?",
        point:
          "Personalized mentorship, bi-weekly workshops, hands on guidance, hit milestones, validate traction, be a part of founder’s community, connect with investors post-Cohort & build sustainable long term successfull businesses.",
      },
    ],
  },
];

const OffersBoxs = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden flex justify-center items-center flex-col gap-4">
      <span className="min-h-[20vh] md:text-6xl font-bold text-3xl w-full h-[20%] text-center flex justify-center items-center">
        We offer 2 seasons
      </span>
      <div className="flex justify-center items-start gap-8 px-2 w-full min-h-[80vh] md:flex-row flex-col">
        {data.map(({ descriptiopn, points, title }, index) => {
          return (
            <Boxes
              key={index}
              description={descriptiopn}
              keyPoints={points}
              title={title}
              index={index}
            />
          );
        })}
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
  // const [open, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <div className="h-auto flex items-center justify-center p-4 flex-col gap-4 ">
        <motion.div className="w-full max-w-xl boxesbg rounded-[32px] p-8 md:p-12 flex flex-col h-auto">
          {/* Title Section */}
          <div className="text-center mb-4">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-200 mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              {description}{" "}
              {index == 0 ? (
                <span className="font-bold text-white text-2xl">
                  <br />
                  April - August
                </span>
              ) : (
                <span className="font-bold text-white text-2xl">
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
            // animate={open ? "open" : "close"}
          >
            {keyPoints.map(({ key, point }, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 border-t border-gray-800 pt-6"
              >
                <h3 className="text-gray-400 text-base md:text-lg w-full md:w-1/4">
                  {key}
                </h3>
                <p className="text-gray-200 text-base md:text-lg font-medium w-full md:w-3/4">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* <Link
          // onClick={() => {
          //   setIsOpen((perv) => !perv);
          // }}
          target="_blank"
          href={
            "https://airtable.com/appznq2oXOYJWyz0p/shrKNR84xiWQq9idk"
          }
          className=" w-[70%] mt-8 py-3 px-3 rounded-full flex justify-center items-center bg-white text-black font-bold mx-auto hover:text-white hover:bg-[#499478] text-3xl"
        >
          Apply
        </Link> */}
      </div>
    </>
  );
};

export default OffersBoxs;
