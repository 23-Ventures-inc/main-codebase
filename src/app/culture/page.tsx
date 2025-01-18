import CultureStart from "@/components/CultureStart";
import HomeEnd from "@/components/HomeEnd";
import ImageOnText from "@/components/ImageOnText";
import PurposeSection from "@/components/PurposeSection";
import WorkSpace from "@/components/WorkSpace";

const page = () => {
  return (
    <>
      <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden mb-8 bgGradient">
        <video
          src="/v2.mp4"
          autoPlay
          loop
          muted
          controls={false}
          className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
        ></video>
        <CultureStart />
      </div>
      <ImageOnText text="23V" />
      <WorkSpace />
      <PurposeSection />
      <HomeEnd />
    </>
  );
};

export default page;
