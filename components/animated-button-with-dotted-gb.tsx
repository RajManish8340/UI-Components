"use client";

import { motion } from "motion/react";

export default function AnimatedButtonWithDottedBg() {
  return (
    <div
      className=" [perspective::1000px] [transform-style:preserve-3d] bg-neutral-900 h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 3px 3px, rgba(6,182,212,0.5) 0.5px, transparent 0)`,
        backgroundSize: "20px 20px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        initial={{
          rotate: 0,
        }}
        whileHover={{
          rotateX: 20,
          rotateY: 20,
          transition: { duration: 0.3, ease: "easeInOut" },
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7) ",
          y: -10,
        }}
        whileTap={{
          y: 0,
        }}
        style={{
          translateZ: 100
        }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer group relative bg-black text-neutral-500 px-12 py-4 rounded-lg shadow-[inset_0_1px_4px_rgba(255,255,255,0.15),inset_0_-1px_4px_rgba(255,255,255,0.15)]"
      >

        <span className="group-hover:text-cyan-500 transition-colors duration-300"> What the fund</span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
}
