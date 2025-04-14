"use client";

import SectionHeader from "./section-header";
import Accordion from "./accordion";

const FAQ = () => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center">
      <SectionHeader
        title="Questions? We've got answers."
        description="Find answers to the most common questions about Vergé, including features, pricing, and how to get started."
      />
      <div className="flex w-full flex-col">
        <Accordion
          question="What is Vergé and how does it work?"
          answer="Vergé is a customer data platform that helps businesses track, analyze, and understand their customers. It centralizes customer insights, automates reports, and provides AI-driven retention tools to improve engagement and reduce churn."
        />
        <Accordion
          question="What is Vergé and how does it work?"
          answer="Vergé is a customer data platform that helps businesses track, analyze, and understand their customers. It centralizes customer insights, automates reports, and provides AI-driven retention tools to improve engagement and reduce churn."
        />
        <Accordion
          question="What is Vergé and how does it work?"
          answer="Vergé is a customer data platform that helps businesses track, analyze, and understand their customers. It centralizes customer insights, automates reports, and provides AI-driven retention tools to improve engagement and reduce churn."
        />
        <Accordion
          question="What is Vergé and how does it work?"
          answer="Vergé is a customer data platform that helps businesses track, analyze, and understand their customers. It centralizes customer insights, automates reports, and provides AI-driven retention tools to improve engagement and reduce churn."
        />
      </div>
    </div>
  );
};

export default FAQ;
