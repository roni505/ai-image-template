import Image from "next/image";
import Logo from "./logo";
import Link from "./link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#193623]">
      <div className="mx-auto flex max-w-6xl justify-between px-5 py-12 max-md:flex-col lg:px-0">
        <div className="mb-6 flex h-auto flex-col lg:mb-0">
          <Logo />
          <p className="mt-4 max-w-64 text-[#87968C]">
            Vergé is a customer data platform that helps businesses track,
            analyze, and understand their customers.
          </p>
        </div>
        <div className="flex h-full flex-wrap gap-44">
          <div className="flex flex-col gap-5">
            <span className="text-base text-white">Product</span>
            <div className="flex flex-col gap-4 text-sm">
              <Link to="Features" text="Features" />
              <Link to="Benefits" text="Benefits" />
              <Link to="Customers" text="Customers" />
              <Link to="Pricing" text="Pricing" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-base text-white">Company</span>
            <div className="flex flex-col gap-4 text-sm">
              <Link to="About" text="About" />
              <Link to="Blog" text="Blog" />
            </div>
          </div>
        </div>
      </div>
      <span className="mx-auto flex h-[1px] w-full bg-gradient-to-r from-transparent via-[#363636] to-transparent"></span>
      <div className="flex items-center justify-center py-6">
        <span className="text-neutral-400">Built by Roni</span>
      </div>
    </footer>
  );
};

export default Footer;
