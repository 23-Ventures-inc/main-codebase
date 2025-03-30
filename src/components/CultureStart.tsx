import Button from "./Button";

const CultureStart = () => {
  return (
    <>
      <span className="flex justify-center items-center gap-8 flex-col ">
        <h1 className="md:text-7xl text-3xl font-bold bg-clip-text bg-gradient-to-r from-white via-green-600 to-white text-center">
          Our virtual space where
          <br />
          you <span className="text-color">figure out</span> the path for your
          dreams
        </h1>
      </span>
      <Button
        text="Apply"
        onClickUrl="https://airtable.com/appznq2oXOYJWyz0p/shrKNR84xiWQq9idk"
      />
    </>
  );
};

export default CultureStart;
