"use client";
import React, { useState, useEffect } from "react";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import UseCaseCard from "./UseCaseCard";
import UseCaseImage from "./UseCaseImage";

const UseCase = ({ title, subtitle, useCases = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCaseChange = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection(newIndex > activeIndex ? 'right' : 'left');
    setActiveIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <section className="bg-lightGrey10 dark:bg-lightGrey10-dark relative py-50px md:py-70px lg:py-20 2xl:pt-100px 2xl:pb-110px">
      <div className="container">
        <div className="mb-5 md:mb-10" data-aos="fade-up">
          <HeadingPrimary text="center">{title}</HeadingPrimary>
          <p className="text-center text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mt-3">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Lado izquierdo - Imagen */}
          <div className="h-[400px] relative order-2 lg:order-1" data-aos="fade-right">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              {useCases.map((useCase, index) => {
                const imageUrl = useCase?.fields?.images?.[0]?.fields?.file?.url;
                return imageUrl && (
                  <UseCaseImage
                    key={index}
                    imageUrl={`https:${imageUrl}`}
                    isActive={index === activeIndex}
                    direction={direction}
                  />
                );
              })}
            </div>
          </div>

          {/* Lado derecho - Casos de uso */}
          <div className="space-y-6 order-1 lg:order-2" data-aos="fade-left">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={useCase?.sys?.id || index}
                data={useCase}
                isActive={index === activeIndex}
                onMouseEnter={() => !isTransitioning && handleCaseChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;