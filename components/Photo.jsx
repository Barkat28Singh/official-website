"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full h-full mix-blend-lighten absolute"
        >
          <Image
            src="/assets/Images/Profile.jpg"
            priority
            quality={100}
            fill
            alt="Profile picture"
            className="object-contain "
          ></Image>
        </motion.div>
        {/* Circle */}

        <motion.svg
          className="w-[400px] h-[400px]"
          fill="transparent"
          viewBox="0 0 500 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#b179b5"
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};
