const data = [
  {
    title: "Give",
    subTitle: "what you",
    keysPoints: [
      "Efforts",
      "Sacrifies",
      "Patience",
      "Clarity",
      "Courage",
      "Time",
      "Focus",
      "Commitment",
      "Adaptability",
      "willingness to do",
      "6 % Stake",
      " Revenue percentage",
    ],
  },
  {
    title: "Get",
    subTitle: "what you",
    keysPoints: [
      "Majority Ownership",
      "Visionary",
      " Inspiring",
      "Curious",
      "Resources",
      " Innovative",
      "Adaptable",
      "Entrepreneur",
      "Driven",
      "Autonomy",
      "Progress",
      "Networking",
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
