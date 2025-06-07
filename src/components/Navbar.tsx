"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { text: "Process", link: "/process" },
    { text: "Culture", link: "/culture" },
    { text: "Niches", link: "/niches" },
    { text: "Advisors", link: "/advisors" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "News", link: "https://medium.com/@23ventureinc" },
  ];

  return (
    <nav className="fixed top-4 w-full z-50">
      <div className="fixed top-4 w-screen h-[9vh] md:h-[10vh] flex justify-center items-center z-50">
        <div className="bg-white/60 dark:bg-[#111111]/60 backdrop-blur-lg h-full w-[90%] md:w-[90%] lg:w-[65%] rounded-3xl flex justify-between md:justify-between px-5 md:px-10 items-center gap-4">
          <Link
            href={"/"}
            className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0"
          >
            <Image
              src={"/logo.png"}
              alt="logo"
              fill
              className="object-contain w-full h-full"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.link}
                className="text-black nav-link hover:no-underline dark:text-white "
              >
                {link.text}
              </Link>
            ))}
            <Button
              onClickUrl="https://deformity.ai/d/0FQReup5wsCr"
              text="Apply"
            />
            <ThemeToggle />
          </div>

          <div className="md:hidden relative flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="absolute top-full left-0 w-full px-4">
            <div className="bg-white/60 dark:bg-[#111111]/60 backdrop-blur-lg rounded-xl p-4 mt-2 z-50 flex flex-col items-center gap-4 shadow-md">
              {links.map((link) => (
                <Link
                  key={link.text}
                  href={link.link}
                  className="block text-black dark:text-white p-2"
                  onClick={() => setOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Button
                onClickUrl="https://deformity.ai/d/0FQReup5wsCr"
                text="Apply"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
