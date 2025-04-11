import Image from "next/image";

export type PlanIncludeInput = {
  text: string;
};

const PlanIncludes = ({ text }: PlanIncludeInput) => {
  return (
    <div className="mb-3 flex gap-2 text-base text-black">
      <Image src="/tickIcon.svg" width={24} height={24} alt="Tick icon" />
      <span>{text}</span>
    </div>
  );
};

export default PlanIncludes;
