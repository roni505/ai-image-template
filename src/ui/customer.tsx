import Image from "next/image";
import { Star } from "lucide-react";

const Customer = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center bg-[#F2F1E9]">
      <div className="grid max-w-6xl items-center gap-5 px-5 py-28 lg:grid-cols-2 lg:px-0">
        <div>
          <div className="flex gap-3">
            <Star fill="true" />
            <Star fill="true" />
            <Star fill="true" />
            <Star fill="true" />
            <Star fill="true" />
          </div>
          <h2 className="mt-8 text-4xl font-medium">
            Vergé completely changed how we understand our customers—our
            retention rate has never been higher.
          </h2>
          <p className="mt-9 text-base text-neutral-800">
            — Sammy Lee at Introvert Fasion
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/customerIMG.svg"
            width={520}
            height={600}
            alt="Image"
            className="h-screen w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;
