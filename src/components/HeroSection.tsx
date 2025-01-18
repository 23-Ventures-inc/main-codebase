import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="rounded-3xl h-40 w-40 md:h-80 md:w-80 bg-white overflow-hidden absolute top-10 right-[-10%] lg:right-32 z-0 backdrop-blur-sm">
        <Image
          src={"/img1.webp"}
          alt="img2"
          width={10000}
          height={10000}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <div className="rounded-3xl h-40 w-40 md:h-80 md:w-80 bg-white overflow-hidden absolute top-24 left-[-20%] lg:left-[1%] z-0 backdrop-blur-sm">
        <Image
          src={"/img2.webp"}
          alt="img2"
          width={10000}
          height={10000}
          objectFit="fill"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="rounded-3xl h-40 w-40 md:h-80 md:w-80 bg-white overflow-hidden absolute bottom-[10%] md:bottom-10 left-[-2rem] lg:left-80 z-0  backdrop-blur-sm">
        <Image
          src={"/img3.webp"}
          alt="img2"
          width={10000}
          height={10000}
          objectFit="fill"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <div className="rounded-3xl h-40 w-40 md:h-80 md:w-80 bg-white overflow-hidden absolute bottom-5 right-[-5%] z-0 backdrop-blur-sm">
        <Image
          src={"/img2.webp"}
          alt="img2"
          width={10000}
          height={10000}
          objectFit="fill"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="rounded-3xl  bg-white overflow-hidden absolute bottom-48 right-[32%] z-0 backdrop-blur-sm">
        <Image
          src={"/img6.webp"}
          alt="img2"
          width={150}
          height={150}
          objectFit="fill"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="md:block hidden"
        />
      </div>

      <div className="rounded-3xl  bg-white overflow-hidden absolute bottom-[65%] right-[42%] z-0 backdrop-blur-sm">
        <Image
          src={"/img9.webp"}
          alt="img2"
          width={150}
          height={150}
          objectFit="fill"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="md:block hidden"
        />
      </div>
      <div className="rounded-3xl  bg-white overflow-hidden absolute bottom-[20%] left-[-5%] z-0 backdrop-blur-sm">
        <Image
          src={"/img10.webp"}
          alt="img2"
          width={150}
          height={150}
          objectFit="fill"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="md:block hidden"
        />
      </div>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-4 flex-col z-10  w-full h-full ">
        <h2 className="md:text-5xl text-2xl font-bold bg-clip-text bg-gradient-to-r from-white via-green-600 to-white text-center ">
          We build <span className="text-color">People</span> beyond{" "}
          <span className="text-color">ideas</span>
        </h2>
        <p className="md:text-xl text-base text-center font-medium backdrop-blur-sm">
          This is not just about backing ideas, its about backing people !!
        </p>
      </span>
    </div>
  );
};

export default HeroSection;
