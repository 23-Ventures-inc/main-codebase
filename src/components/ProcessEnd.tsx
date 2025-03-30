import Button from "./Button";

const ProcessEnd = () => {
  return (
    <div className="w-full h-[55vh] flex justify-center items-center gap-4 flex-col">
      <span className="md:text-5xl text-2xl font-bold text-center mb-4">
        Want to build with us
      </span>
      <Button
        text="Apply"
        onClickUrl="https://airtable.com/appznq2oXOYJWyz0p/shrKNR84xiWQq9idk"
      />
    </div>
  );
};

export default ProcessEnd;
