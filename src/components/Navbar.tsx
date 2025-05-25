// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";
// // import { motion } from "motion/react";
// import { motion } from "framer-motion";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const links = [
//   {
//     text: "Process",
//     link: "/process",
//   },
//   {
//     text: "Culture",
//     link: "/culture",
//   },
//   { text: "Niches", link: "/niches" },
//   {
//     text: "Advisors",
//     link: "/advisors",
//   },
//   {
//     text: "News",
//     link: "https://medium.com/@23ventureinc",
//   },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <div className="fixed top-4 w-screen h-[10vh] md:h-[10vh] flex justify-center items-center z-50">
//         <div className=" bg-[#111111] h-full w-[90%] md:w-[90%] lg:w-[65%] rounded-3xl flex justify-between md:justify-between px-8 md:px-20 items-center gap-4">
//           <Link href={"/"} className="h-12 w-12 rounded-full overflow-hidden">
//             <Image
//               src={"/logo.png"}
//               alt="logo"
//               width={10000}
//               height={1000}
//               className="object-fill "
//             />
//           </Link>

//           <span className="md:flex justify-center items-center gap-8 hidden">
//             {links.map(({ link, text }, index) => {
//               return (
//                 <Link href={link} key={index} className="text-xl font-semibold">
//                   {text}
//                 </Link>
//               );
//             })}
//           </span>
//           <div className="md:block hidden">
//             <Button
//               onClickUrl="https://deformity.ai/d/0FQReup5wsCr"
//               text="Apply"
//             />
//           </div>

//           <span
//             className={`md:hidden rounded-3xl flex justify-center items-center font-bold text-xl  `}
//             onClick={() => {
//               setOpen((perv) => !perv);
//             }}
//           >
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </span>
//         </div>
//         <motion.div
//           className={`${
//             open ? "absolute" : "hidden"
//           } md:hidden bg-[#111111] h-auto rounded-xl py-8 flex justify-center items-center flex-col gap-4 z-50 mt-[17vh] top-0 w-[50vh] `}
//           initial={{ opacity: 0, y: -20 }}
//           animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.2 }}
//         >
//           {links.map(({ link, text }, index) => {
//             return (
//               <Link
//                 href={link}
//                 key={index}
//                 className="text-2xl w-full h-auto font-bold text-center"
//                 onClick={() => {
//                   setOpen(false);
//                 }}
//               >
//                 {text}
//               </Link>
//             );
//           })}
//           <Button
//             onClickUrl="https://deformity.ai/d/0FQReup5wsCr"
//             text="Apply"
//           />
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

// const Button = ({ onClickUrl, text }: { onClickUrl: string; text: string }) => {
//   return (
//     <Link href={onClickUrl}>
//       <button className="relative flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-[#499478] rounded-md group">
//         {/* Top Right Decorative Corner */}
//         <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3a7e65] rounded group-hover:-mr-4 group-hover:-mt-4">
//           <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
//         </span>

//         {/* Bottom Left Decorative Corner */}
//         <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3a7e65] rounded group-hover:-ml-4 group-hover:-mb-4">
//           <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
//         </span>

//         {/* Hover Slide Background */}
//         <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#3a7e65] rounded-md group-hover:translate-x-0" />

//         {/* Button Text */}
//         <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
//           {text}
//         </span>
//       </button>
//     </Link>
//   );
// };
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { text: "Process", link: "/process" },
    { text: "Culture", link: "/culture" },
    { text: "Niches", link: "/niches" },
    { text: "Advisors", link: "/advisors" },
    { text: "News", link: "https://medium.com/@23ventureinc" },
  ];

  return (
    <nav className="fixed top-4 w-full z-50">
      <div className="fixed top-4 w-screen h-[10vh] md:h-[10vh] flex justify-center items-center z-50">
        <div className="bg-[#111111]/60 backdrop-blur-lg h-full w-[90%] md:w-[90%] lg:w-[65%] rounded-3xl flex justify-between md:justify-between px-8 md:px-20 items-center gap-4">
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
                className="text-white nav-link"
              >
                {link.text}
              </Link>
            ))}
            <Button
              onClickUrl="https://deformity.ai/d/0FQReup5wsCr"
              text="Apply"
            />
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-[90%] bg-[#111111]/60 backdrop-blur-lg rounded-xl p-4 space-y-4 mt-2 z-50 flex flex-col items-center">
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.link}
                className="block text-white p-2 nav-link"
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
