import React from "react";

const New = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-screen h-auto min-h-screen md:h-auto bg-[#71717d3] flex-col">
      <div className="md:w-1/2 px-8 text-center w-full h-[30%] m-auto flex justify-end items-end mt-auto">
        <span className="text-2xl md:text-5xl font-bold">
          We help founders turn bold ideas into high-growth startups with
          capital, mentorship, and strategic guidance.
        </span>
      </div>
      {/* below divs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%]  h-[50%] mb-auto">
        <Feature text="We invest in early-stage founders, regardless of background, providing them with the resources to scale faster and smarter" />
        <Feature text="Startups that receive structured mentorship have a 3x higher success rate—we ensure founders get access to top-tier advisors, domain experts, and industry veterans." />
        <Feature text="90% of startups fail due to funding constraints—we help bridge this gap by preparing founders for investment and connecting them with the right capital." />
        <Feature text="Entrepreneurship is often lonely, so we provide a strong community that celebrates wins and losses together." />
      </div>
    </div>
  );
};

function Feature({ text }: { text: string }) {
  return (
    <div className="">
      <div className=" md:h-auto w-[90%] border-l-8 border-[#499478] pl-4">
        <p className="text-lg font-medium ">{text}</p>
      </div>
    </div>
  );
}

export default New;
