"use client";

import Image from "next/image";
import Link from "./link";
import Logo from "./logo";
import Button from "./button";
import { motion } from "motion/react";
import AnimatedText from "./animated-text";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#193623]">
      <div className="mx-auto w-full max-w-6xl">
        {/* nav bar */}
        <nav className="flex w-full max-w-7xl items-center justify-between px-5 py-6 lg:px-0">
          <Logo />
          <div className="hidden gap-5 md:flex">
            <Link to="Pricing" text="Pricing" />
            <Link to="Company" text="Company" />
            <Link to="Blog" text="Blog" />
            <Link to="login" text="Login" />
          </div>
          <button
            className="cursor-pointer text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {isOpen && (
            <div className="bg-opacity-100 absolute top-16 left-0 z-10 flex h-screen w-full flex-col items-center space-y-4 border border-[#034a1d] bg-[#193623] p-5 md:hidden">
              <Link to="Pricing" text="Pricing" />
              <Link to="Company" text="Company" />
              <Link to="Blog" text="Blog" />
              <Link to="login" text="Login" />
              <Button variant="primary" text="Get Started" />
            </div>
          )}
        </nav>
        {/* hero section */}
        <div className="flex h-full flex-wrap justify-center gap-5 px-5 lg:px-0">
          <div className="mt-32 flex w-[682px] flex-col">
            <div className="text-6xl font-medium text-white">
              <AnimatedText
                text="Transform images, create masterpieces."
                className="leading-tight"
              />
            </div>
            <div className="mt-6 text-xl text-neutral-400">
              <AnimatedText
                delay={0.6}
                text="Upload any image and watch it transform into a masterpiece — blending artistic heritage with cutting-edge technology to create something truly unique."
              />
            </div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              className="mt-5"
            >
              <Button variant="primary" text="Get Started" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeOut",
              },
            }}
            viewport={{
              once: true,
            }}
            className="mb-10 w-full lg:w-[450px]"
          >
            <Image
              src="heroImage.svg"
              width={450}
              height={700}
              alt="hero Image"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
