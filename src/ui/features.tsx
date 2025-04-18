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
    title: "Clean and Intuitive Interface",
    description:
      "Designed for effortless creativity, ArtMuse offers a distraction-free workspace where you can upload, edit, and transform images into art with just a few clicks. Every tool is exactly where you need it.",
    content: "/featureImg1.svg",
  },
  {
    title: "Fast & Powerful AI Engine",
    description:
      "Our advanced AI processes your images in seconds—delivering stunning, high-quality artwork inspired by classic styles and modern techniques, all without the wait.",
    content: "/featureImg2.svg",
  },
  {
    title: "Historic Beauty. Modern Tech.",
    description:
      "ArtMuse blends the beauty of ancient artistic traditions with cutting-edge AI. Each piece is more than just a filter—it’s a modern take on timeless expression.",
    content: "/featureImg3.svg",
  },
];

const Features = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center overflow-hidden bg-[#F2F1E9]">
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
      <motion.div
        initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.3,
            duration: 0.4,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
        }}
        className={`w-full ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
      >
        <h2 className="mt-8 text-[40px] font-semibold text-black">
          {feature.title}
        </h2>
        <p className="mt-6 text-xl text-[#707070]">{feature.description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: idx % 2 !== 0 ? -100 : 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.3,
            duration: 0.4,
            ease: "easeOut",
          },
        }}
        viewport={{
          once: true,
        }}
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
      </motion.div>
    </div>
  );
};
