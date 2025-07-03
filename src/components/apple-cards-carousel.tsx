"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export function AppleCardsCarouselDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null); // Image doesn't support ref, so wrap it in a div
  const [cardWidth, setCardWidth] = useState(0);

  // Capture card width on mount
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth + 24); // margin
    }
  }, []);

  // Scroll by full card width
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? cardWidth : -cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll wheel handler
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY > 0 ? cardWidth : -cardWidth,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [cardWidth]);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-10">
      {/* Scrollable Images */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar px-4 md:px-10 space-x-4 md:space-x-6 snap-x snap-mandatory"
      >
        {data.map((page, i) => (
          <div
            key={i}
            ref={i === 0 ? cardRef : null}
            className="relative shrink-0 snap-start my-4 rounded-2xl shadow-md transition duration-300 ease-in-out hover:scale-[1.02] hover:brightness-110 hover:shadow-lg"
          >
            <Image
              src={page.src}
              alt={`Page ${i + 1}`}
              width={400}
              height={600}
              className="object-contain rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-end mt-6 gap-4 px-4 md:px-10">
        <button
          onClick={() => handleScroll("left")}
          className="h-12 w-12 flex items-center justify-center rounded-full bg-[#499478] text-white text-2xl shadow-md  transition"
          aria-label="Scroll Left"
        >
          ←
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="h-12 w-12 flex items-center justify-center rounded-full bg-[#499478] text-white text-2xl shadow-md transition"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>
    </div>
  );
}

// Example image data
const data = Array.from({ length: 25 }, (_, i) => ({
  src: `/${i + 1}.jpg`,
}));
