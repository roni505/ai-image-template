"use client";

import { ReactNode } from "react";
import { Link as TextLink } from "react-scroll";

export type LinkInputProps = {
  to: string;
  text: ReactNode;
};

const Link = ({ to, text }: LinkInputProps) => {
  return (
    <TextLink
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer text-[#bccdc1] duration-300 hover:text-white"
    >
      {text}
    </TextLink>
  );
};

export default Link;
