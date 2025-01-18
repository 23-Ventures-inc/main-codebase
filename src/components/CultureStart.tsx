import Button from "./Button";

const CultureStart = () => {
  return (
    <>
      <span className="flex justify-center items-center gap-8 flex-col ">
        <h1 className="md:text-7xl text-3xl font-bold bg-clip-text bg-gradient-to-r from-white via-green-600 to-white text-center">
          Our virtual space where
          <br />
          you figure out the path for your dreams
        </h1>
      </span>
      <Button
        text="Apply"
        onClickUrl="https://docs.google.com/forms/d/1_uPNNuA10z2IBRlKzUHAmQwjoyDEjpCYHDt_t-IWKzQ/edit"
      />
    </>
  );
};

export default CultureStart;
