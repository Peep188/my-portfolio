"use client";

import { motion } from "framer-motion";

export default function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative mx-auto w-[330px]"
    >
      <div className="relative rounded-[38px] border-[8px] border-[#24202d] bg-black p-[5px] shadow-[0_25px_70px_rgba(120,70,200,0.35)]">
        <div className="relative h-[620px] overflow-hidden rounded-[32px] bg-[#EDE9FE]">
          <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
          <img
            src="/portfolio-mobile.png"
            alt="My portfolio displayed on a smartphone"
            className="h-full w-full object-contain object-top"
          />
        </div>
      </div>
      <div className="absolute -bottom-5 left-8 right-8 h-5 rounded-full bg-purple-500/20 blur-xl" />
    </motion.div>
  );
}
