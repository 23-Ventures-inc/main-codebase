import Button from "./Button";

const ProcessEnd = () => {
  return (
    <div className="w-full h-[55vh] flex justify-center items-center gap-4 flex-col">
      <span className="md:text-5xl text-2xl font-bold text-center mb-4">
        Want to build with us
      </span>
      <Button
        text="Apply"
        onClickUrl="https://docs.google.com/forms/d/1_uPNNuA10z2IBRlKzUHAmQwjoyDEjpCYHDt_t-IWKzQ/edit"
      />
    </div>
  );
};

export default ProcessEnd;
