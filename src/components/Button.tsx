import Link from "next/link";

interface ButtonProps {
  text: string;
  onClickUrl: string;
}

const Button = ({ text, onClickUrl }: ButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <Link href={onClickUrl} className="min-w-20">
        <button className="relative inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-2xl  text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-white text-black font-semibold">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
