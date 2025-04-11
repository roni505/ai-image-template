import Button from "./button";

const FinalCTA = () => {
  return (
    <section className="flex w-full flex-col bg-[#F2F1E9]">
      <div className="mx-auto mt-52 mb-36 flex max-w-5xl flex-col items-center justify-center px-4">
        <h2 className="leading text-center text-3xl font-medium sm:text-5xl lg:text-6xl">
          Ready to Revolutionize Your Workflow?
        </h2>
        <p className="mt-6 max-w-[456px] text-center text-base font-light text-[#BEBEBE] lg:text-xl">
          Join thousands of forward-thinking companies already using Stratify to
          dominate their industries.
        </p>
        <Button variant="primary" className="mt-10" text="Try for free" />
      </div>
      <span className="mx-auto h-[1px] w-full bg-gradient-to-r from-transparent via-[#363636] to-transparent"></span>
    </section>
  );
};

export default FinalCTA;
