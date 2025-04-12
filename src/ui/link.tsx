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
      className="cursor-pointer text-[#87968C] duration-300 hover:text-white"
    >
      {text}
    </TextLink>
  );
};

export default Link;
