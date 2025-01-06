"use client";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import PricingPlan from "./PricingPlan";
import CreditUsageGuide from "./CreditUsageGuide";

const PricingPlans = ({ title, plans = [], creditUsageGuide }) => {
  return (
    <section className="bg-lightGrey10 dark:bg-darkdeep1 transition-colors duration-300">
      <div className="container pt-10 pb-8">
        <div className="mb-5 md:mb-10">
          <div className="relative" data-aos="fade-up">
            <HeadingPrimary text="center">{title}</HeadingPrimary>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center" data-aos="fade-up">
          <div className="flex-shrink-0 lg:w-1/2 h-full">
            <CreditUsageGuide creditUsageGuide={creditUsageGuide.fields} />
          </div>
          <div className="flex-shrink lg:w-1/2 h-full">
            <PricingPlan plans={plans} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
