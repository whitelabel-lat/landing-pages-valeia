"use client";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";


const CreditUsageGuide = ({ creditUsageGuide }) => {
  
  return (
    <div className="relative w-full max-w-md p-8 overflow-hidden bg-[#4A3ACF] text-white rounded-3xl shadow-xl">
      <div className="relative z-10">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          {creditUsageGuide.title}
        </h1>
    
        <p
          className="text-lg leading-relaxed text-gray-300"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(creditUsageGuide.text),
          }}
          data-aos="fade-up"
        ></p>
      </div>

      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-90" />

      <div className="absolute -bottom-24 -right-24 w-64 h-64 border-2 border-yellow-400 rounded-full opacity-30" />
      <div className="absolute -bottom-28 -right-28 w-64 h-64 border-2 border-yellow-400 rounded-full opacity-20" />
    </div>
  );
};

export default CreditUsageGuide;
