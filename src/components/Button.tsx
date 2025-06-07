import Link from "next/link";

interface ButtonProps {
  text: string;
  onClickUrl: string;
  clr?: string; // Color for dark mode text
}

const Button = ({ text, onClickUrl, clr = "black" }: ButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <Link href={onClickUrl}>
        <button
          type="button"
          className={`
            font-sans flex justify-center gap-2 items-center shadow-xl 
            text-md sm:text-md md:text-md  
            text-${clr} bg-transparent backdrop-blur-md font-semibold 
            isolation-auto relative z-10 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2
            overflow-hidden border-2 border-[#499478] rounded-full group
            before:absolute before:w-full before:aspect-square before:-left-full before:rounded-full before:bg-[#499478]
            before:transition-all before:duration-700 before:-z-10
            before:hover:left-0 before:hover:scale-150
            dark:text-white
          `}
        >
          {text}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 19"
            className="
              w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7
              bg-gray-50 text-gray-800 
              group-hover:rotate-90 ease-linear duration-300 
              rounded-full border border-gray-700 group-hover:border-none 
              p-1.5 rotate-45
            "
          >
            <path
              className="fill-[#499478] group-hover:fill-[#499478]"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default Button;
