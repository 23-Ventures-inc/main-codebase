import React from "react";

const VideoPage = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center px-4 mb-10 text-black dark:text-white font-sans">
      {/* Title Section */}
      <div className="text-center mb-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          The idea behind{" "}
          <span className="bg-gradient-to-r from-[#499478] to-[#e5fdf2] bg-clip-text text-transparent">
            23 Ventures
          </span>
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#499478] to-transparent mx-auto mt-4"></div>
      </div>

      {/* Video Container */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl shadow-white/10">
        <iframe
          className="w-full h-64 md:h-[450px] border-none block"
          src="https://www.youtube.com/embed/L_noPJLe9lA?si=1NCVUL-BlGt3SUOi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPage;
