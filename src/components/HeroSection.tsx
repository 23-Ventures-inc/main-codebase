"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const imagesRow1 = [
  "/col15.jpg",
  "/col18.jpg",
  "/col22.jpeg",
  "/col23.jpeg",
  "/col1.jpg",
  "/col2.jpg",
  "/col3.jpg",
  "/col4.jpg",
  "/img1.jpeg",
  "/img2.png",
  "/img3.png",
];
const imagesRow3 = [
  "/col20.jpg",
  "/col5.jpg",
  "/col6.jpg",
  "/col7.png",
  "/col8.png",
  "/col9.png",
  "/col10.png",
  "/img4.png",
  "/img5.png",
  "/img6.png",
];

const renderImages = (imageList: string[]) => (
  <div className="flex items-center gap-x-4 px-4">
    {Array.from({ length: 4 }).map((_, i) =>
      imageList.map((src, index) => (
        <div
          key={`${i}-${index}`}
          className="relative flex-shrink-0 w-[400px] md:w-[350px] sm:w-[200px] h-[200px] md:h-[200px] sm:h-[140px] rounded-md overflow-hidden"
        >
          <Image
            src={src}
            alt={`Image ${index}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))
    )}
  </div>
);

const HeroSection = () => {
  return (
    <>
      <h1 className="md:text-7xl text-5xl font-bold m-10 text-center text-white">
        Hall of Fame
      </h1>
      <div className="relative w-full min-h-[80vh] mb-10 bg-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[25vh] z-0">
          <Marquee gradient={false} speed={40} direction="left">
            {renderImages(imagesRow1)}
          </Marquee>
        </div>

        {/* Row 3 - Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[25vh] z-0">
          <Marquee gradient={false} speed={35} direction="right">
            {renderImages(imagesRow3)}
          </Marquee>
        </div>

        {/* Centered Text */}
        <div className="absolute top-[25vh] bottom-[25vh] left-0 right-0 flex flex-col justify-center items-center z-10 text-center px-4 pointer-events-none">
          <h2 className="font-bold text-[clamp(1.75rem,4vw,3rem)] leading-tight">
            We build <span className="text-[#499478]">People</span> beyond{" "}
            <span className="text-[#499478]">ideas</span>
          </h2>
          <p className="mt-4 font-medium text-[clamp(1rem,2.5vw,1.25rem)]">
            5-month Startup Program, Limited Early Stage founders, Building the
            next big thing
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
