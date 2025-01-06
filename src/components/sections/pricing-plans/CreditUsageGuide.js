"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "../../../utils/RenderOptionsPricing";

const CreditUsageGuide = ({ creditUsageGuide }) => {
  return (
    <div className="relative w-full h-full gap-4 p-8 overflow-hidden bg-[#4A3ACF] text-white rounded-3xl shadow-xl">
      <div className="h-full relative z-10">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-100">
          {creditUsageGuide.title}
        </h1>
        <div
          className="text-lg leading-relaxed text-gray-100"
          data-aos="fade-up"
        >
          {documentToReactComponents(creditUsageGuide.text, renderOptions)}
        </div>
      </div>

      {/* Yellow circle decoration */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-80 blur-lg" />

      {/* Additional circle decorations */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 border-2 border-yellow-400 rounded-full opacity-40" />
      <div className="absolute -bottom-28 -right-28 w-64 h-64 border-2 border-yellow-400 rounded-full opacity-20" />
    </div>
  );
};

export default CreditUsageGuide;
