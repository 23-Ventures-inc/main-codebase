import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "col1.jpg",
  "col2.jpg",
  "col3.jpg",
  "col4.jpg",
  "col5.jpg",
  "col6.HEIC",
  "col7.png",
  "col8.png",
  "col9.png",
  "col10.png",
  "col11.jpg",
  "col12.HEIC",
  "col13.jpg",
  "col14.JPG",

  "col15.HEIC",
];

const ImageSlider: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* Polaroid Style Slider */}
      <div className="bg-white rounded-md shadow-xl border-[10px] border-white relative overflow-hidden">
        <div className="bg-black rounded-t-md overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full h-[280px] sm:h-[400px] md:h-[480px]"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Slide ${idx}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Polaroid-style Bottom Label */}
        <div className="text-center py-4 bg-white text-black text-sm font-medium tracking-wide">
          Memories in motion 📸
        </div>
      </div>

      {/* Preview Thumbnails */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="border-2 border-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={src}
              alt={`Thumbnail ${idx}`}
              className="w-full h-32 sm:h-36 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
