import CommitSection from "@/components/CommitSection";
import FaqSection from "@/components/FaqSection";
import FellowshipSection from "@/components/FellowshipSection";
import ProcessEnd from "@/components/ProcessEnd";
import ProcessGrids from "@/components/ProcessGrids";
import ProcessPage from "@/components/ProcessPage";
import { ProgressScroll } from "@/components/ProgressScroll";
import WhatUGiveSection from "@/components/WhatUGiveSection";
import WhyUsSection from "@/components/WhyUsSection";

const page = () => {
  return (
    <>
      <ProcessPage />
      <div className="relative w-full min-h-screen h-auto flex justify-center items-center  py-10 flex-col">
        <ProgressScroll />
      </div>
      <FellowshipSection />
      <ProcessGrids />
      <WhatUGiveSection />
      <CommitSection />
      <WhyUsSection />
      <FaqSection />
      <ProcessEnd />
    </>
  );
};

export default page;
