"use client";

import { useState } from "react";
import Button from "./button";
import PlanIncludes from "./plan-includes";
import SectionHeader from "./section-header";
import TogglePrice from "./toggle-button";
import { motion } from "motion/react";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      id="Pricing"
      className="mx-auto flex w-full flex-col items-center justify-center"
    >
      <SectionHeader
        title="Clear pricing, no hidden fees."
        description="No hidden fees, no commitments—just stunning, high-quality AI-generated art whenever inspiration strikes."
      />
      <div className="flex w-full flex-col items-center gap-3">
        <TogglePrice save="Save 20%" setToggle={setToggle} toggle={toggle} />
        <div className="mt-12 flex w-full max-w-7xl flex-wrap items-center justify-center gap-4 px-5 lg:px-0">
          {/* 1st Prizing card */}
          <motion.div
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
            viewport={{
              once: true,
            }}
            className="flex w-full flex-col rounded-2xl bg-[#F2F1E9] px-7 py-8 lg:w-[350px]"
          >
            <span className="text-2xl font-medium">Free</span>
            <span className="mt-3 text-sm text-neutral-500">
              Perfect for small teams and startups
            </span>
            <span className="mt-4 mb-8 flex items-end gap-1 text-5xl font-medium text-[#2A6B3F]">
              $0{" "}
              <span className="text-sm font-semibold text-[#2A6B3F]">
                Forever
              </span>{" "}
            </span>
            <span className="mt-8 text-base">Free Plan includes</span>
            <div className="mt-4 flex flex-col gap-2">
              <PlanIncludes text="Work with up to 3 teammates" />
              <PlanIncludes text="Core task management features" />
              <PlanIncludes text="Unlimited projects and tasks" />
              <PlanIncludes text="Board and list views" />
              <PlanIncludes text="Basic integrations" />
            </div>
            <Button variant="primary" text="Sign up" className="mt-7" />{" "}
          </motion.div>
          {/* 2rd pricing card */}
          <motion.div
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
            viewport={{
              once: true,
            }}
            className="flex w-full flex-col rounded-2xl bg-[#F2F1E9] px-7 py-8 lg:w-[350px]"
          >
            <span className="text-2xl font-medium">Team</span>
            <span className="mt-3 text-sm text-neutral-500">
              Complete collaboration for larger teams.
            </span>
            <span className="mt-4 mb-8 flex items-end gap-1 text-5xl font-medium text-[#2A6B3F]">
              {toggle ? "$24" : "$32"}
              <span className="text-sm font-semibold text-[#2A6B3F]">
                Forever
              </span>
            </span>
            <span className="mt-8 text-base">All free plan features, plus</span>
            <div className="mt-4 flex flex-col gap-2">
              <PlanIncludes text="Work with up to 3 teammates" />
              <PlanIncludes text="Core task management features" />
              <PlanIncludes text="Unlimited projects and tasks" />
              <PlanIncludes text="Board and list views" />
              <PlanIncludes text="Basic integrations" />
            </div>
            <Button variant="secondary" text="Sign up" className="mt-7" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
