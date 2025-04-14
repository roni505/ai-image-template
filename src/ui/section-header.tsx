"use client";

import { motion } from "motion/react";

export type SectionProps = {
  title: string;
  description: string;
};

const SectionHeader = ({ title, description }: SectionProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-5">
      <motion.h2
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className="mb-5 text-center text-3xl font-medium text-black sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.6,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className="mb-16 text-center text-lg text-neutral-800 sm:max-w-[460px]"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
