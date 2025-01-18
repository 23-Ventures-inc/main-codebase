import Button from "./Button";

const data = [
  { title: "Dream Agency Idea", imgUrl: "/p1.webp" },
  { title: "Dream AI and SAAS Idea", imgUrl: "/p2.webp" },
  { title: "Dream Web3 Idea", imgUrl: "/p3.webp" },
  { title: "Dream Marketplace Idea", imgUrl: "/p4.webp" },
];

const ProcessGrids = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4 w-full h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[80%] md:w-[60%]">
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
                <Button
                  text="Apply"
                  onClickUrl="https://docs.google.com/forms/d/1_uPNNuA10z2IBRlKzUHAmQwjoyDEjpCYHDt_t-IWKzQ/edit"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessGrids;
