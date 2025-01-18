const TopData = [
  { text: "Digital products", url: "/d1.jpeg" },
  { text: "Digital services", url: "/d2.webp" },
];

const belowData = [
  { text: "SAAS", url: "/saas.jpeg" },
  { text: "AI/ML", url: "/n4.webp" },
  { text: "WEB3", url: "/n5.jpeg" },
  { text: "AGENCY", url: "/agency.jpeg" },
  { text: "MARKETPLACE", url: "/market.jpeg" },
];

const NichesHeroSection = () => {
  return (
    <>
      <span className="flex justify-center items-center gap-8 flex-col">
        <h3 className="md:text-4xl text-xl font-bold text-center mb-4">
          We look for builders, thinkers
          <br />
          and dreamers who want to shape the world
          <br />
          for the next decade !
        </h3>
      </span>
      <span className="text-color font-bold mx-auto my-4 text-xl italic">
        Niche
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[80%] md:w-[80%]">
        {TopData.map(({ url, text }, index) => {
          return (
            <div
              className="relative flex justify-center items-center w-full h-64 sm:h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-lg"
              key={index}
            >
              {/* Background Image */}
              <div
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0 z-10"
              />
              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center items-center gap-4 text-center text-white">
                <h2 className="text-lg font-bold sm:text-xl md:text-3xl">
                  {text}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <span className="text-color font-bold mx-auto my-4 text-xl italic">
        Sub-Niche
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 w-[80%] md:w-[80%]">
        {belowData.map(({ url, text }, index) => {
          return (
            <div
              className="relative flex justify-center items-center w-full h-64 sm:h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-lg"
              key={index}
            >
              {/* Background Image */}
              <div
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0 z-10"
              />
              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center items-center gap-4 text-center text-white">
                <h2 className="text-lg font-bold sm:text-xl md:text-3xl">
                  {text}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NichesHeroSection;
