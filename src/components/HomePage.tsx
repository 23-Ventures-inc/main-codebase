import Button from "./Button";

const HomePage = () => {
  return (
    <>
      <span className="flex justify-center items-center gap-8 flex-col ">
        <h1 className="md:text-7xl text-3xl font-bold bg-clip-text bg-gradient-to-r from-white via-green-600 to-white text-center">
          Where <span className="text-color"> Entrepreneurs </span> <br /> don’t
          stop dreaming !
        </h1>
        <p className="md:text-3xl text-xl text-center font-semibold mb-8">
          APPLY for Summer Batch 2025
        </p>
      </span>
      <Button
        text="Apply"
        onClickUrl="https://docs.google.com/forms/d/1_uPNNuA10z2IBRlKzUHAmQwjoyDEjpCYHDt_t-IWKzQ/edit"
      />
    </>
  );
};

export default HomePage;
