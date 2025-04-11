import Image from "next/image";
import Logo from "./logo";
import Link from "./link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#193623]">
      <div className="mx-auto flex max-w-7xl justify-between px-5 py-12 max-md:flex-col lg:px-0">
        <div className="mb-6 flex h-auto justify-between lg:mb-0 lg:flex-col">
          <Logo />
          <div className="flex gap-4">
            <Image src="/xIcon.svg" width={20} height={20} alt="X icon" />
            <Image
              src="/linkedinIcon.svg"
              width={24}
              height={24}
              alt="Linkedin icon"
            />
            <Image
              src="/githubIcon.svg"
              width={28}
              height={28}
              alt="Github icon"
            />
          </div>
        </div>
        <div className="flex h-full flex-wrap gap-44">
          <div className="flex flex-col gap-5">
            <span className="text-base">Product</span>
            <div className="flex flex-col gap-4 text-sm text-[#767676]">
              <Link to="Features" text="Features" />
              <Link to="Benefits" text="Benefits" />
              <Link to="Customers" text="Customers" />
              <Link to="Pricing" text="Pricing" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-base">Company</span>
            <div className="flex flex-col gap-4 text-sm text-[#767676]">
              <Link to="About" text="About" />
              <Link to="Blog" text="Blog" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-base">Resources</span>
            <div className="flex flex-col gap-4 text-sm text-[#767676]">
              <Link to="Contact" text="Contact" />
              <Link to="Privacy Policy" text="Privacy Policy" />
              <Link to="Terms & conditions" text="Terms & conditions" />
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
