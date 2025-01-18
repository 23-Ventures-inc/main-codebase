import FaqSection from "@/components/FaqSection";
import NichesHeroSection from "@/components/NichesHeroSection";
import NichesStart from "@/components/NichesStart";

const page = () => {
  return (
    <>
      <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden">
        <video
          src="/niche.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
        ></video>

        <NichesStart />
      </div>
      <div className="w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col">
        <NichesHeroSection />
      </div>
      <FaqSection />
    </>
  );
};

export default page;
