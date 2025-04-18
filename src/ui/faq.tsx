"use client";

import SectionHeader from "./section-header";
import Accordion from "./accordion";

const FAQ = () => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center bg-[#F2F1E9] py-24">
      <SectionHeader
        title="Questions? We’re here to help."
        description="Find answers to the most common questions about ArtMuse, including features, pricing, and how to get started."
      />
      <div className="mt-5 flex w-full flex-col">
        <Accordion
          question="How does ArtMuse transform images into AI-generated art?"
          answer="ArtMuse uses advanced AI algorithms to analyze and enhance your images, applying artistic styles inspired by history and modern techniques. Upload any image, and watch it transform into a unique piece of art."
        />
        <span className="my-8 h-px w-full bg-neutral-100"></span>
        <Accordion
          question="Is ArtMuse easy to use?"
          answer="Absolutely! ArtMuse is designed with simplicity in mind. The interface is intuitive, allowing users to quickly upload, customize, and generate artwork without needing any technical expertise."
        />
        <span className="my-8 h-px w-full bg-neutral-100"></span>
        <Accordion
          question="Can I try ArtMuse before committing"
          answer="Yes! ArtMuse offers a free trial to give you a taste of our AI-powered art transformation. Experience the magic before choosing the plan that works best for you."
        />
        <span className="my-8 h-px w-full bg-neutral-100"></span>
        <Accordion
          question="What types of images can I transform with ArtMuse?"
          answer="You can transform any image—photos, illustrations, or designs—into stunning artwork. Whether it’s a portrait, landscape, or abstract piece, ArtMuse will turn it into something extraordinary."
        />
      </div>
    </div>
  );
};

export default FAQ;
