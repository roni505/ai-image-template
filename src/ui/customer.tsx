"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const Customer = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden bg-[#F2F1E9]">
      <div className="grid max-w-6xl items-center gap-5 px-5 py-28 lg:grid-cols-2 lg:px-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex gap-3">
            <Star fill="true" />
            <Star fill="true" />
            <Star fill="true" />
            <Star fill="true" />
            <Star fill="true" />
          </div>
          <h2 className="mt-8 text-4xl font-medium text-black">
            ArtMuse turned our basic images into stunning visuals—our engagement
            has skyrocketed.
          </h2>
          <p className="mt-9 text-base text-neutral-800">
            — Aria Collins at Nova Studio
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.5,
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          viewport={{
            once: true,
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
