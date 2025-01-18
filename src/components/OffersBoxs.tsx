"use client";

import { useState } from "react";
import Button from "./Button";
import { motion } from "motion/react";

const data = [
  {
    title: "Summer",
    descriptiopn: "20 Weeks Exclusive High Intensity program January - June",
    points: [
      { key: "Duration", point: "6 Months" },
      { key: "Location", point: "Remote" },
      { key: "Fee", point: "Free" },
      {
        key: "Funding",
        point:
          "Connecting with Vc’s if you hit the milestones ( Exception not Agency )",
      },
      { key: "Types", point: "Agency, Saas,Marketplace, AI SAAS, Web3" },
      {
        key: "Additionals",
        point:
          "Experience, community, culture, KPI’s, Strategize and planning, process and systems",
      },
    ],
  },
  {
    title: "Winter",
    descriptiopn: "20 Weeks Exclusive High Intensity program July - December",
    points: [
      { key: "Duration", point: "6 Months" },
      { key: "Location", point: "Remote" },
      { key: "Fee", point: "Free" },
      {
        key: "Funding",
        point:
          "Connecting with Vc’s if you hit the milestones ( Exception not Agency )",
      },
      { key: "Types", point: "Agency, Saas,Marketplace, AI SAAS, Web3" },
      {
        key: "Additionals",
        point:
          "Experience, community, culture, KPI’s, Strategize and planning, process and systems",
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
}

const Boxes = ({ description, keyPoints, title }: BoxesProps) => {
  const [open, setIsOpen] = useState<boolean>(false);

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
              {description}
            </p>
            <Button
              text="Apply"
              onClickUrl="https://docs.google.com/forms/d/1_uPNNuA10z2IBRlKzUHAmQwjoyDEjpCYHDt_t-IWKzQ/edit"
            />
          </div>

          {/* Key Points Section */}
          <motion.div
            className={`space-y-8 `}
            variants={{
              open: { visibility: "visible", height: "auto", opacity: 1 },
              close: { visibility: "hidden", height: 0, opacity: 0 },
            }}
            exit={{ height: 0, visibility: "hidden", opacity: 0 }}
            animate={open ? "open" : "close"}
          >
            {keyPoints.map(({ key, point }, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 border-t border-gray-800 pt-6"
              >
                <h3 className="text-gray-400 text-lg md:text-xl w-full md:w-1/4">
                  {key}
                </h3>
                <p className="text-gray-200 text-lg md:text-xl font-medium w-full md:w-3/4">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <button
          onClick={() => {
            setIsOpen((perv) => !perv);
          }}
          className=" w-[40%] mt-8 py-3 px-3 rounded-full flex justify-center items-center bg-white text-black font-bold mx-auto"
        >
          Expand
        </button>
      </div>
    </>
  );
};

export default OffersBoxs;
