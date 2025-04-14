"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { motion } from "motion/react";

export type TogglePrizeInput = {
  save: string;
  setToggle: Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
};

const TogglePrice = ({ setToggle, toggle }: TogglePrizeInput) => {
  const [annually, setAnnually] = useState(false);
  const [monthly, setMonthly] = useState(true);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.8,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className="relative flex items-center rounded-full bg-[#EDEBE8] px-3 py-5 text-sm"
      >
        <motion.div
          className="absolute rounded-full bg-white"
          initial={false}
          animate={{
            x: monthly ? "0%" : "100%",
            width: "45%",
            height: "70%",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          // style={{
          //   top: "15%",
          //   left: "3%",
          // }}
        />

        <div
          onClick={() => {
            setAnnually(!annually);
            setMonthly(!monthly);
            setToggle(!toggle);
          }}
          className="z-10 cursor-pointer rounded-full text-base"
        >
          <span
            className={`rounded-full px-5 py-3 font-medium ${monthly ? "text-neutral-900" : "text-neutral-500"}`}
          >
            Monthly
          </span>
        </div>
        <div
          onClick={() => {
            setMonthly(!monthly);
            setAnnually(!annually);
            setToggle(!toggle);
          }}
          className="z-10 cursor-pointer rounded-full text-base"
        >
          <span
            className={`rounded-full px-5 py-3 font-medium ${monthly ? "text-neutral-500" : "text-neutral-900"}`}
          >
            Annually
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default TogglePrice;
