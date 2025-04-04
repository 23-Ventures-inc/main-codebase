import Button from "./Button";

const HomeEnd = () => {
  return (
    <div className="w-full h-[55vh] flex justify-center items-center gap-4 flex-col">
      <span className="md:text-5xl text-2xl font-bold text-center mb-4">
        Learn & Evolve, <br /> where every voice, success, <br /> and setback
        matters !
      </span>
      <Button
        text="Apply"
        onClickUrl="https://airtable.com/appznq2oXOYJWyz0p/shrKNR84xiWQq9idk"
      />
    </div>
  );
};

export default HomeEnd;
