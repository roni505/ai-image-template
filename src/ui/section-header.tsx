export type SectionProps = {
  title: string;
  description: string;
};

const SectionHeader = ({ title, description }: SectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-5 sm:max-w-[550px]">
      <h2 className="mb-5 text-center text-3xl font-bold text-neutral-200 sm:text-5xl">
        {title}
      </h2>
      <p className="mb-16 text-center text-base text-neutral-400">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
