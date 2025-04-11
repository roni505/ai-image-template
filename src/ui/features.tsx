"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useTransform } from "motion/react";
import { useScroll } from "motion/react";
import { useRef } from "react";

export type FeaturesInput = {
  title: string;
  description: string;
  content: string;
};

const FeaturesArray: FeaturesInput[] = [
  {
    title: "Cleani and intuitive interface",
    description:
      "Designed for clarity, Vergé makes it easy to find the customer insights you need without distractions. Every dashboard, report, and profile is structured for a seamless experience.",
    content: "/featureImg1.svg",
  },
  {
    title: "Cleanm and intuitive interface",
    description:
      "Designed for clarity, Vergé makes it easy to find the customer insights you need without distractions. Every dashboard, report, and profile is structured for a seamless experience.",
    content: "/featureImg2.svg",
  },
  {
    title: "Cleannn and intuitive interface",
    description:
      "Designed for clarity, Vergé makes it easy to find the customer insights you need without distractions. Every dashboard, report, and profile is structured for a seamless experience.",
    content: "/featureImg3.svg",
  },
];

const Features = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      {FeaturesArray.map((feature, idx) => (
        <Card feature={feature} idx={idx} key={feature.title} />
      ))}
    </div>
  );
};

export default Features;

const Card = ({ feature, idx }: { feature: FeaturesInput; idx: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    console.log("changed value: ", latest),
  );

  const translateContent = useTransform(scrollYProgress, [0, 1], [400, -200]);

  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid max-w-6xl items-center gap-8 px-5 py-28 lg:grid-cols-2 lg:px-0"
    >
      <div className={`w-full ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
        <h2 className="mt-8 text-[40px] font-semibold">{feature.title}</h2>
        <p className="mt-6 text-xl text-[#707070]">{feature.description}</p>
      </div>
      <div
        className={`relative w-full overflow-hidden ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"} h-[410px] w-full rounded-2xl bg-[#F2F1E9] lg:w-[566px]`}
      >
        <motion.div
          style={{
            y: translateContent,
          }}
        >
          <Image
            src={feature.content}
            width={498}
            height={410}
            alt="Image"
            className="absolute top-0 rounded-lg lg:right-0"
          />
        </motion.div>
      </div>
    </div>
  );
};
