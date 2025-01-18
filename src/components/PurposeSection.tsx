const data = [
  { title: "Community", imgUrl: "/c1.webp" },
  { title: "Purpose", imgUrl: "/a1.webp" },
  { title: "Spirit", imgUrl: "/a2.webp" },
];

const PurposeSection = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4 w-full h-auto flex-col gap-8">
      <span className="md:text-5xl text-2xl font-bold  text-center">
        <span className="text-color">Purpose</span> is something <br />
        you run with, not run for !!
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-[80%] md:w-[60%]">
        {data.map(({ imgUrl, title }, index) => {
          return (
            <div
              className="relative flex justify-center items-center w-full h-64 sm:h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-lg"
              key={index}
            >
              {/* Background Image */}
              <div
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${imgUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0 z-10"
              />
              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center items-center gap-4 text-center text-white">
                <h2 className="text-lg font-bold sm:text-xl md:text-3xl">
                  {title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PurposeSection;
