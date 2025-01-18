const ImageOnText = ({ text }: { text: string }) => {
  return (
    <div className="h-auto w-full flex justify-center items-center text-container  text-[200px] md:text-[100vh] overflow-hidden">
      {text}
    </div>
  );
};

export default ImageOnText;
