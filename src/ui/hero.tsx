import Image from "next/image";
import Link from "./link";
import Logo from "./logo";
import Button from "./button";

const Hero = () => {
  return (
    <div className="m-2 flex h-full flex-col rounded-4xl bg-[#4B3621]">
      <div className="mx-auto w-full max-w-6xl">
        {/* nav bar */}
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between py-6">
          <Logo />
          <div className="flex gap-5">
            <Link to="Pricing" text="Pricing" />
            <Link to="Pricing" text="Pricing" />
            <Link to="Pricing" text="Pricing" />
            <Link to="Pricing" text="Pricing" />
          </div>
        </nav>
        {/* hero section */}
        <div className="flex h-full flex-wrap justify-center gap-5 px-5 lg:px-0">
          <div className="mt-32 flex w-[682px] flex-col">
            <h1 className="text-6xl font-semibold text-white">
              Know your customers, grow your business.
            </h1>
            <p className="mt-6 text-xl text-neutral-400">
              Vergé helps you track, analyze, and understand your customers with
              real-time insights to boost retention and revenue.
            </p>
            <div className="mt-5">
              <Button variant="primary" text="Get Started" />
            </div>
          </div>
          <div className="mb-10 w-full lg:w-[450px]">
            <Image
              src="heroImage.svg"
              width={450}
              height={700}
              alt="hero Image"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <nav className="mt-14 w-full border">
        <div className="items-cente mx-auto mt-14 flex h-16 w justify-between border px-9 py-4">
          <Logo />
          <div className="flex items-center justify-center gap-6">
            <Link text="Pricing" to="Pricing" />
            <Link text="Pricing" to="Pricing" />
            <Link text="Pricing" to="Pricing" />
            <Link text="Pricing" to="Pricing" />
          </div>
        </div>
      </nav> */
}
