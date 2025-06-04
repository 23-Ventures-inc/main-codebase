import Image from "next/image";

const features = [
  {
    title: "Community",
    description:
      "This community will help you grow, collaborate, and support each other's journey, balancing healthy competition with a sense of belonging for lasting success.",
    imgUrl: "/col13.jpg",
  },
  {
    title: "Milestones Tracking",
    description:
      "We'll help you stay on track by setting and tracking key milestones over 20 weeks, making sure you're always moving forward.",
    imgUrl: "/col2.jpg",
  },
  {
    title: "Quick Investments and Demo Day",
    description:
      "Get access to investment opportunities on demo day that help you scale your business faster post cohort",
    imgUrl: "/col18.jpg",
  },
  {
    title: "Global Networking",
    description:
      "Expand your horizons by connecting with a worldwide community of founders and professionals, all eager to collaborate.",
    imgUrl: "/col23.jpeg",
  },
  {
    title: "Expert Mentors",
    description:
      "Tap into the knowledge of experienced mentors who've been through it all and are ready to guide you through the ups and downs.",
    imgUrl: "/img6.png",
  },
  {
    title: "Founder's Branding",
    description:
      "We'll help you shape and strengthen your personal brand, making you stand out as a thought leader and visionary.",
    imgUrl: "/col12.jpg",
  },
];

const WorkSpace = () => {
  return (
    <div className="flex justify-center items-center gap-6 flex-col w-full min-h-screen mb-8 ">
      <span className="md:text-5xl text-2xl font-bold  text-center">
        A virtual Workspace for <br /> dreamers, next founder’s, differentiators{" "}
        <br /> and visionaries.
      </span>
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ description, imgUrl, title }, index) => {
          return (
            <div
              className="w-full h-auto boxesbg rounded-3xl p-6 flex flex-col items-center gap-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              key={index}
            >
              <div className="w-full h-[250px] overflow-hidden rounded-xl relative">
                <Image
                  alt="Feature image"
                  src={imgUrl}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white">
                  {title}
                  <br />
                  {index === 1 ? "(20 weeks)" : ""}
                </h2>
                <p className="text-md text-gray-300 mt-2">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSpace;
