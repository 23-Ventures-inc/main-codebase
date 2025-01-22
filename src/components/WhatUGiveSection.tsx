const data = [
  {
    title: "Give",
    subTitle: "what you",
    keysPoints: [
      "Effort",
      "Sacrifices",
      "Patience",
      "Clarity",
      "Courage",
      "Time",
      "Focus",
      "Commitment",
      "Adaptability",
      "Willingness to Learn",
      "6% Stake and Revenue Percentage",
    ],
  },
  {
    title: "Get",
    subTitle: "what you",
    keysPoints: [
      "94% Ownership",
      "Vision",
      "Inspiration",
      "Curiosity",
      "Workshops",
      "Innovation",
      "Adaptability",
      "Entrepreneurial Skills",
      "Fundings",
      "Autonomy",
      "Progress",
      "Networking Opportunities",
      "Guidance",
      "Collaboration",
    ],
  },
];

const WhatUGiveSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-center gap-4 md:flex-row p-4 md:py-60">
      {data.map(({ keysPoints, subTitle, title }, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-center justify-start gap-8 md:w-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-center my-4">
            <span className="text-lg font-medium text-muted-foreground text-gray-200 md:text-2xl">
              {subTitle}
            </span>
            <h2 className="text-6xl font-bold tracking-tight md:text-8xl">
              {title}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {keysPoints.map((text, idx) => (
              <span
                key={idx}
                className="rounded-full px-4 py-2 text-xl backdrop-blur-sm inline-flex items-center  font-bold boxesbg text-center"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatUGiveSection;
