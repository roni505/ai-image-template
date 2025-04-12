"use client";

import Image from "next/image";
import Button from "./button";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end -78%"],
  });
  const translateContent = useTransform(scrollYProgress, [0, 1], [1000, -200]);
  return (
    <div className="flex h-full w-full flex-col bg-[#F2F1E9]">
      <div className="mx-auto mt-32 mb-0 flex w-full max-w-4xl flex-col items-center justify-center px-4 md:w-[545px]">
        <h2 className="text-center text-3xl leading-tight font-medium sm:text-5xl lg:text-6xl">
          Turn Your Photos Into Timeless Art.
        </h2>
        <Button variant="secondary" className="mt-10" text="Try for free" />
      </div>
      <div className="relative flex h-[130px] w-full items-center justify-center overflow-hidden sm:h-[140px] md:h-[150px] lg:h-[370px]">
        <motion.div
          style={{
            y: translateContent,
          }}
          className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 justify-center rounded-2xl sm:-bottom-14 md:-bottom-14 lg:top-0 lg:w-full"
        >
          <Image
            src="/finalImg.svg"
            width={1024}
            height={380}
            alt="Final CTA image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FinalCTA;
