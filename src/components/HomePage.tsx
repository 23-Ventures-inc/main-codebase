import Button from "./Button";

const HomePage = () => {
  return (
    <>
      <span className="flex justify-center items-center gap-8 flex-col  ">
        <span className="  text-center lg:w-auto rounded-full px-[3.5rem] py-[0.8rem] font-semibold text-sm lg:text-base text-white border-2 border-[#499478] ">
          A new age Venture accelerator
        </span>
        <h1 className="md:text-7xl text-3xl font-bold bg-clip-text bg-gradient-to-r from-white via-green-600 to-white text-white text-center">
          <span className="md:text-3xl text-xl italic"> Here</span>
          <br />
          <span className="text-color"> Entrepreneurs </span> build the <br />
          Startups of <span className="text-color">tomorrow</span>
        </h1>
        <p className="md:text-xl text-sm text-center text-white font-semibold mb-8 italic md:w-[55%]">
          We bring early-stage entrepreneurs of all ages together, invest time,
          form community led distribution and connect them with investors post
          season, ideas are secondary, and people are the first.
        </p>
        <Button
          onClickUrl="https://tally.so/r/mZLPk5"
          text="Apply"
          clr="white"
        />
      </span>
    </>
  );
};

export default HomePage;
