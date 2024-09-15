"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import NavLink from "@/components/navLink";
import { motion } from "framer-motion";
import {Silkscreen} from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"],   weight: ['400', '700'],}) ;
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/portfolio", title: "Portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-5 text-black w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Logo */}
      <div  className="flex items-center justify-center  w-1/3 ">
        <div className="text-sm  text-white text-center rounded-md  justify-between flex cursor-pointer" href="/">
         <div className={`${silkscreen.className} w-1/2 h-1/2 bg-black text-[#f1f1f1] rounded-l p-1.5  flex justify-center items-start font-bold`}>BK</div>
         <div className={`${silkscreen.className} w-1/2 h-1/2 bg-white text-black  rounded-r p-1.5 flex justify-center items-center font-bold `}>DEV</div>
        </div>
      </div>
      {/* Logo */}

      {/* Button */}
      <div className="p-3 mr-5 ">
        <label className="btn btn-circle swap swap-rotate z-50 lg:hidden">
          <input
            type="checkbox"
            className="z-50"
            onClick={() => setOpen((prev) => !prev)}
          />

          <svg
            className="swap-off fill-current text-[#f1f1f1]"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current text-[#f1f1f1]"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      {/* Button */}

      {/* Social Icons */}
      <div className="ml-auto gap-5 text-2xl cursor-pointer hidden md:flex text-black font-bold ">
        <Link href="mailto:drissboukdirbk@gmail.com">
          <BiLogoGmail className="hover:text-2xl transition-all duration-200" />
        </Link>
        <Link href="https://github.com/Idriss-Bk">
          <IoLogoGithub className="hover:text-2xl transition-all duration-200" />
        </Link>
        <Link href="https://www.linkedin.com/in/idriss-boukdir-5120a6280/?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=ma">
          <FaLinkedin className="hover:text-2xl transition-all duration-200" />
        </Link>
      </div>
      {/* Social Icons */}

      {/* Menu */}
      {open && (
        <motion.div
          className="fixed top-0  left-0 w-screen h-screen bg-black text-white  flex flex-col items-center justify-center gap-4 text-2xl  z-40"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.15}}
        >
          <div
            className="absolute top-4 right-4 text-2xl cursor-pointer  "
            onClick={() => setOpen(false)}
          >
            
          </div>
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              <div onClick={() => setOpen(false)}>{link.title}</div>
            </Link>
          ))}
        </motion.div>
      )}
      {/* Menu */}
    </div>
  );
};

export default Navbar;