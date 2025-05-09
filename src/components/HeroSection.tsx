'use client';
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const HeroSection = () => {
  // Images for the rows
  const firstRowImages = [
    "/image1.jpg", "/image2.jpg", "/image3.jpg", // Row 1 images
  ];

  const secondRowImages = [
    "/image4.jpg", "/image5.jpg", "/image6.jpg", // Row 2 images
  ];

  const thirdRowImages = [
    "/image7.jpg", "/image8.jpg", "/image9.jpg", // Row 3 images
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* First Row Marquee (Scroll Left to Right) */}
      <div className="absolute top-0 left-0 w-full h-[300px] z-0">
        <Marquee
          gradient={false}
          speed={35}
          pauseOnHover={false}
          direction="left" // Left to right direction for the first row
          className="w-full h-full"
        >
          <div className="flex">
            {firstRowImages.map((img, index) => (
              <div
                key={`img-${index}`}
                className="relative w-[620px] h-[265px] flex-shrink-0 overflow-hidden rounded-2xl"
                style={{
                  marginRight: index !== firstRowImages.length - 1 ? '20px' : '0', // Space between images
                }}
              >
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Second Row Marquee (Scroll Right to Left) */}
      <div className="absolute top-[33%] left-0 w-full h-[300px] z-0">
        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={false}
          direction="right" // Right to left direction for the second row
          className="w-full h-full"
        >
          <div className="flex">
            {secondRowImages.map((img, index) => (
              <div
                key={`img-${index}`}
                className="relative w-[620px] h-[265px] flex-shrink-0 overflow-hidden rounded-2xl"
                style={{
                  marginRight: index !== secondRowImages.length - 1 ? '20px' : '0',
                }}
              >
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Third Row Marquee (Scroll Left to Right) */}
      <div className="absolute top-[66%] left-0 w-full h-[300px] z-0">
        <Marquee
          gradient={false}
          speed={35}
          pauseOnHover={false}
          direction="left" // Left to right direction for the third row
          className="w-full h-full"
        >
          <div className="flex">
            {thirdRowImages.map((img, index) => (
              <div
                key={`img-${index}`}
                className="relative w-[620px] h-[265px] flex-shrink-0 overflow-hidden rounded-2xl"
                style={{
                  marginRight: index !== thirdRowImages.length - 1 ? '20px' : '0',
                }}
              >
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 pointer-events-none">
        <div className="bg-black text-white h-[269px] w-[800px] max-w-full p-6 text-center shadow-lg flex flex-col justify-center items-center">
          <h2 className="md:text-5xl text-2xl font-bold wave-text">
            We build <span className="text-green-500">People</span> beyond <span className="text-green-500">ideas</span>
          </h2>
          <p className="md:text-xl text-base font-medium mt-4">
            5-months Startup Program, Limited Early Stage founders, Building the next big thing
          </p>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
