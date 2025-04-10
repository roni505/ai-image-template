"use client";

import { Dispatch, SetStateAction, useState } from "react";

export type TogglePrizeInput = {
  save: string;
  setToggle: Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
};

const TogglePrice = ({ save, setToggle, toggle }: TogglePrizeInput) => {
  const [annually, setAnnually] = useState(false);
  const [monthly, setMonthly] = useState(true);
  return (
    <>
      <div className="flex items-center justify-center rounded-4xl border bg-[#F2F1E9] px-7 py-4 text-sm">
        <div
          className="flex cursor-pointer items-center justify-center"
          onClick={() => {
            setAnnually(!annually), setMonthly(!monthly), setToggle(!toggle);
          }}
        >
          <span className="relative mr-2 h-5 w-5 rounded-full border border-[#CACACA]">
            {annually && (
              <span className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#CACACA]"></span>
            )}
          </span>
          <span className="text-base">Monthly</span>
        </div>
        <div
          className="ml-7 flex cursor-pointer items-center justify-center"
          onClick={() => {
            setMonthly(!monthly), setAnnually(!annually), setToggle(!toggle);
          }}
        >
          <span className="relative mr-2 h-5 w-5 rounded-full border border-[#CACACA]">
            {monthly && (
              <span className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#CACACA]"></span>
            )}
          </span>
          <span className="mr-3 text-base">Annually</span>
          <span className="font-medium text-[#00FFA5]">{save}</span>
        </div>
      </div>
      {annually ? (
        <span className="text-sm text-neutral-400">Billed monthly</span>
      ) : (
        <span className="text-sm text-neutral-400">
          Billed in one annual payment.
        </span>
      )}
    </>
  );
};

export default TogglePrice;
