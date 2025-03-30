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
        onClickUrl="https://airtable.com/appznq2oXOYJWyz0p/shrKNR84xiWQq9idk"
      />
    </>
  );
};

export default NichesStart;
