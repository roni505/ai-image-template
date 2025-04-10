import Image from "next/image";

export type PlanIncludeInput = {
  text: string;
};

const PlanIncludes = ({ text }: PlanIncludeInput) => {
  return (
    <div className="flex gap-2 text-base text-neutral-400">
      <Image src="" width={20} height={20} alt="Tick icon" />
      <span>{text}</span>
    </div>
  );
};

export default PlanIncludes;
