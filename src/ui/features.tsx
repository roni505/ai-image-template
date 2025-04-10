import Image from "next/image";

export type FeaturesInput = {
  title: string;
  description: string;
  content: React.ReactNode;
};

const FeaturesArray: FeaturesInput[] = [
  {
    title: "Cleani and intuitive interface",
    description:
      "Designed for clarity, Vergé makes it easy to find the customer insights you need without distractions. Every dashboard, report, and profile is structured for a seamless experience.",
    content: (
      <div className="w-full">
        <Image
          src="/heroImage.svg"
          width={500}
          height={300}
          alt="Image"
          className="w-full rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Cleanm and intuitive interface",
    description:
      "Designed for clarity, Vergé makes it easy to find the customer insights you need without distractions. Every dashboard, report, and profile is structured for a seamless experience.",
    content: (
      <div>
        <Image
          src="/heroImage.svg"
          width={500}
          height={300}
          alt="Image"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Cleannn and intuitive interface",
    description:
      "Designed for clarity, Vergé makes it easy to find the customer insights you need without distractions. Every dashboard, report, and profile is structured for a seamless experience.",
    content: (
      <div>
        <Image
          src="/heroImage.svg"
          width={500}
          height={500}
          alt="Image"
          className="rounded-lg"
        />
      </div>
    ),
  },
];

const Features = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      {FeaturesArray.map((feature, idx) => (
        <div
          key={feature.title}
          className="grid max-w-6xl items-center gap-4 px-5 py-28 lg:grid-cols-2 lg:px-0"
        >
          <div
            className={`w-full ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
          >
            <h2 className="mt-8 text-4xl font-medium">{feature.title}</h2>
            <p className="mt-9 text-base text-neutral-800">
              {feature.description}
            </p>
          </div>
          <div
            className={`w-full ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
          >
            {feature.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;

const Card = () => {
  return <div></div>;
};
