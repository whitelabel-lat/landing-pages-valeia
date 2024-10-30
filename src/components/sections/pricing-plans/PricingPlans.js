"use client";

import SectionName from "@/components/shared/section-names/SectionName";
import React from "react";
import freeImage from "@/assets/images/icon/price__1.png";
import freeImage2 from "@/assets/images/icon/price__2.png";
import freeImage3 from "@/assets/images/icon/price__3.png";

import useIsTrue from "@/hooks/useIsTrue";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import PricingPlan from "./PricingPlan";
const PricingPlans = ({ title, plans = [] }) => {
  const isHome10 = useIsTrue("/home-10");
  const isHome10Dark = useIsTrue("/home-10-dark");
  const isHome11 = useIsTrue("/home-11");
  const isHome11Dark = useIsTrue("/home-11-dark");

  const dataPlans = plans?.map((plan, index) => {
    const featuresData =
      plan.fields.features?.map((feature, featureIndex) => ({
        id: featureIndex,
        name: feature,
      })) || [];

    const imageUrl = plan.fields.image?.fields.file.url || "";
    const fullImageUrl = imageUrl.startsWith("//")
      ? `https:${imageUrl}`
      : imageUrl;

    return {
      id: index,
      name: plan.fields.name,
      price: plan.fields.price,
      image: fullImageUrl || "default-image-url.png",
      moto: plan.fields.moto,
      features: featuresData, // Asigna aquí las características procesadas
    };
  });

  return (
    <section>
      <div
        className={`container  pb-100px ${
          isHome10 || isHome10Dark
            ? ""
            : isHome11 || isHome11Dark
            ? "pt-50px md:pt-30px lg:pt-5 2xl:pt-50px"
            : "pt-90px"
        }`}
      >
        {/* heading */}

        <div className="mb-5 md:mb-10">
          <div className="relative" data-aos="fade-up">
            <div>
              <div className="text-center">
                <SectionName>Pricing Plan</SectionName>
              </div>
            </div>
            <HeadingPrimary text="center">{title}</HeadingPrimary>
          </div>
        </div>

        {/* plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30px">
          {dataPlans.map((plan, idx) => (
            <PricingPlan key={idx} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
