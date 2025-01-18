import Button from "./Button";

const NichesStart = () => {
  return (
    <>
      <span className="flex justify-center items-center gap-8 flex-col ">
        <h1 className="md:text-7xl text-3xl font-bold text-center">
          Where we <span className="text-color">Invest</span>
          <br />
          and advice
        </h1>
      </span>
      <Button
        text="Apply"
        onClickUrl="https://docs.google.com/forms/d/1_uPNNuA10z2IBRlKzUHAmQwjoyDEjpCYHDt_t-IWKzQ/edit"
      />
    </>
  );
};

export default NichesStart;
