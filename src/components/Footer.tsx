import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socialMediaLinks = [
  {
    text: "instagram",
    icons: FaInstagram,
    link: "https://www.instagram.com/23ventures.inc?igsh=MWNpNTg3aG12bHZjcQ%3D%3D",
  },
  {
    text: "linkedin",
    icons: FaLinkedinIn,
    link: "https://www.linkedin.com/company/23-ventures-incorporation/?viewAsMember=true",
  },
  {
    text: "twitter",
    icons: FaXTwitter,
    link: "https://x.com/23VenturesInc?t=qHirm0PFYmavttPvyS4AAg&s=09",
  },
];

const links = [
  {
    text: "Process",
    link: "/process",
  },
  {
    text: "Culture",
    link: "/culture",
  },
  {
    text: "News",
    link: "https://medium.com/@23ventureinc",
  },
  {
    text: "Apply",
    link: "https://tally.so/r/mZLPk5",
  },
];

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-8 h-[20vh] md:h-[10vh] w-[90%] rounded-t-[30px] mx-auto mt-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="flex justify-around items-center gap-4 flex-row flex-wrap w-full">
        <span className="flex justify-center items-center gap-8">
          {links.map(({ link, text }, index) => (
            <Link
              href={link}
              key={index}
              className="font-thin nav-link hover:no-underline text-lg text-black dark:text-gray-300 transition-colors"
            >
              {text}
            </Link>
          ))}
        </span>
        <span className="flex justify-center items-center gap-4">
          {socialMediaLinks.map(({ link, text }, index) => (
            <Link
              href={link}
              key={index}
              className="w-12 h-12 flex justify-center items-center text-2xl text-black dark:text-gray-300  transition-colors"
              target="_blank"
            >
              {text === "twitter" && <FaXTwitter />}
              {text === "linkedin" && <FaLinkedinIn />}
              {text === "instagram" && <FaInstagram />}
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Footer;
