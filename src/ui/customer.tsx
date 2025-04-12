"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const Customer = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center bg-[#F2F1E9]">
      <div className="grid max-w-6xl items-center gap-5 px-5 py-28 lg:grid-cols-2 lg:px-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.3,
              duration: 0.4,
              ease: "easeOut",
            },
          }}
        >
          <div className="flex gap-3">
            <Star fill="true" />
            <Star fill="true" />
            <Star fill="true" />
            <Star fill="true" />
            <Star fill="true" />
          </div>
          <h2 className="mt-8 text-4xl font-medium">
            Vergé completely changed how we understand our customers—our
            retention rate has never been higher.
          </h2>
          <p className="mt-9 text-base text-neutral-800">
            — Sammy Lee at Introvert Fasion
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.8,
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          className="w-full"
        >
          <Image
            src="/customerIMG.svg"
            width={520}
            height={600}
            alt="Image"
            className="h-screen w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Customer;
