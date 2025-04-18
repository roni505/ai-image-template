"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export type AccordianInput = {
  question: string;
  answer: string;
  delay?: number;
};

const Accordion = ({ question, answer, delay }: AccordianInput) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      viewport={{
        once: true,
      }}
      className="w-full"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex w-full cursor-pointer justify-between px-5">
        <h3 className="text-xl font-medium">{question}</h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            transition: {
              ease: "easeInOut",
              duration: 0.3,
            },
          }}
        >
          <Image
            src="/accordionIcon.svg"
            width={32}
            height={32}
            alt="Accordion Logo"
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-5 mt-6"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
