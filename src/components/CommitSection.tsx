const data = [
  {
    text: "200+ hours of  mentorshipp and advice from the 10% industry leaders ",
    url: "/p5.webp",
  },
  {
    text: "Upto minimum 500k Dollars in funding in total with connecting Vc’s",
    url: "/p6.webp",
  },
  {
    text: "5 startup founder’s to present themselves and be with us for the long time ",
    url: "/p7.webp",
  },
  {
    text: "Teaching each startup founder a way to do business in today’s era.",
    url: "/p8.webp",
  },
];

const CommitSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-12 mb-16">
      <span className="w-full text-center text-4xl md:text-7xl font-bold mb-16 mt-10">
        Every season we commit
      </span>
      <div className="w-[90%] grid md:w-[80%] md:grid-cols-2 gap-12 justify-center items-center">
        {data.map(({ text, url }, index) => (
          <span
            key={index}
            className="h-[40vh] w-full rounded-3xl bg-cover bg-center bg-no-repeat text-xl md:text-3xl font-bold text-white flex items-center justify-center px-12 shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CommitSection;
