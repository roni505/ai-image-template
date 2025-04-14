"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export type AccordianInput = {
  question: string;
  answer: string;
};

const Accordion = ({ question, answer }: AccordianInput) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="flex w-full justify-between px-5">
        <h3 className="text-xl font-medium">{question}</h3>
        <Image
          src="/file.svg"
          width={28}
          height={28}
          alt="This the logo"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        />
      </div>
      {isOpen && (
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="mx-5 mt-6 flex"
        >
          {answer}
        </motion.p>
      )}
    </>
  );
};

export default Accordion;
