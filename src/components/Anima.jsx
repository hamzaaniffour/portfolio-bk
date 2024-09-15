"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const Anima = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-auto max-w-full bg-gradient-to-b from-blue-100 to-red-100"
      >
        {/* First action */}
        <motion.div
          className="w-screen h-screen fixed bg-black rounded-b-[80px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Second action */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-6xl cursor-default  z-50  w-fit h-fit "
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        {/* Third action */}
        <motion.div
          className="w-screen h-screen fixed bg-black rounded-t-[80px] z-30 bottom-0"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-24">
          <Navbar />
        </div>

        {/* Adjust height based on screen size for mobile */}
        <div className="h-full md:h-[calc(100vh - 6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default Anima;