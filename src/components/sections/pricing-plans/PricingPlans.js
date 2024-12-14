"use client";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import PricingPlan from "./PricingPlan";
import CreditUsageGuide from "./CreditUsageGuide";

const PricingPlans = ({ title, plans = [], creditUsageGuide }) => {
  return (
    <section>
      <div className="container pt-10 pb-8">
        {/* Título principal */}
        <div className="mb-5 md:mb-10">
          <div className="relative" data-aos="fade-up">
            <HeadingPrimary text="center">{title}</HeadingPrimary>
          </div>
        </div>

        {/* Contenedor para guía de uso y planes */}
        <div className="flex flex-col lg:flex-row gap-8" data-aos="fade-up">
          {/* Guía de uso */}
          <div className="flex-shrink-0 lg:w-1/3">
            <CreditUsageGuide creditUsageGuide={creditUsageGuide.fields} />
          </div>

          {/* Planes */}
          <div className="flex-grow lg:w-2/3">
            <PricingPlan plans={plans} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
