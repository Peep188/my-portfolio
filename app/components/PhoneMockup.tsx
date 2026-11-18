
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
      className="relative mx-auto w-[290px]"
    >
      {/* إطار الهاتف */}
      <div className="relative rounded-[38px] border-[8px] border-[#24202d] bg-black p-[5px] shadow-[0_25px_70px_rgba(120,70,200,0.35)]">

        {/* شاشة الهاتف */}
        <div className="relative h-[560px] overflow-hidden rounded-[32px] bg-[#EDE9FE]">

          {/* الكاميرا الأمامية */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

          {/* صورة موقعك */}
          <img
            src="/portfolio-mobile.png"
            alt="My portfolio displayed on a smartphone"
            className="h-full w-full object-cover object-top"
          />

        </div>
      </div>

      {/* تأثير الإضاءة أسفل الهاتف */}
      <div className="absolute -bottom-5 left-8 right-8 h-5 rounded-full bg-purple-500/20 blur-xl" />
    </motion.div>
  );
}
