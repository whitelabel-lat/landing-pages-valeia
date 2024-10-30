import React from "react";
import AccordionContainer from "../containers/AccordionContainer";

import Accordion from "../accordion/Accordion";
import AccordionController from "../accordion/AccordionController";
import AccordionContent from "../accordion/AccordionContent";

import HeadingPrimary from "../headings/HeadingPrimary";
import FeesItems from "./FeesItems";

const FeesContentValeia = ({
  title,
  subtitle,
  subInfo,
  listInfo = [],
  listAccordions = [],
  feesList = [],
}) => {
  return (
    <div className="container">
      <div className="mb-5 md:mb-10 " data-aos="fade-up">
        <HeadingPrimary text="center">{title}</HeadingPrimary>
      </div>
      <div className="fees grid grid-cols-1 lg:grid-cols-12 gap-30px">
        <div
          className="lg:col-start-1 lg:col-span-5 xl:col-span-4"
          data-aos="fade-up"
        >
          <div data-aos="fade-up">
            <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
              {subtitle}
            </h3>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
              {subInfo}
            </p>
            <ul className="space-y-[14px]">
              {listInfo.map((item, idx) => (
                <li className="flex items-center group" key={idx}>
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                  <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* accordions */}
        <div
          className="lg:col-start-6 lg:col-span-7 xl:col-start-5 xl:col-span-8"
          data-aos="fade-up"
        >
          <AccordionContainer>
            {/* accordion */}
            {listAccordions.map((accordion, idx) => (
              <Accordion key={idx} accordion="secondary" isActive={idx === 0}>
                <AccordionController>{accordion}</AccordionController>
                <AccordionContent idx={idx}>
                  <FeesItems fees={feesList[idx]} />
                </AccordionContent>
              </Accordion>
            ))}
          </AccordionContainer>
        </div>
      </div>
    </div>
  );
};

export default FeesContentValeia;
