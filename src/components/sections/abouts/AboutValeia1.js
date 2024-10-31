"use client";
import SectionName from "@/components/shared/section-names/SectionName";
import React from "react";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import useIsTrue from "@/hooks/useIsTrue";
import Counter from "../sub-section/Counter";
import Image from "next/image";

const AboutValeia1 = ({
  children,
  image,
  hideCounter,
  counterItems = [],
  images = [],
  listInfo = [],
  info,
  title,
  textImage,
  numberImage,
  symbolImage,
}) => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");

  const counterItemsData = counterItems?.map((counter) => counter.fields);
  const fullImageUrls = images.map((image) => {
    const imageUrl = image.fields?.file?.url || "";
    const fullImageUrl = imageUrl.startsWith("//")
      ? `https:${imageUrl}`
      : imageUrl;
    return fullImageUrl;
  });

  const [
    fullImageUrl0,
    fullImageUrl1,
    fullImageUrl2,
    fullImageUrl3,
    fullImageUrl4,
  ] = fullImageUrls;

  return (
    <section>
      <div className={`container ${hideCounter ? "pt-70px pb-100px" : ""}`}>
        {/* about section   */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px">
          {/* about left  */}
          <div
            className="relative z-0 mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 overflow-visible"
            data-aos="fade-up"
          >
            <TiltWrapper>
              <div className="tilt">
                <Image
                  className="md:ml-[70px] h-auto"
                  src={image ? image : fullImageUrl0}
                  alt=""
                  width={465} // Ajusta según el tamaño real
                  height={300} // Ajusta según el tamaño real
                />
                <Image
                  className="absolute right-0 sm:right-[-17px] md:right-36 lg:right-4 bottom-[91px] md:bottom-0  h-auto"
                  src={isHome9 || isHome9Dark ? fullImageUrl4 : fullImageUrl1}
                  alt=""
                  width={200} // Ajusta según el tamaño real
                  height={130} // Ajusta según el tamaño real
                />
                <Image
                  className="absolute top-[-18px] left-[30px] animate-move-hor z-[-1]   h-auto"
                  src={fullImageUrl2}
                  alt=""
                  width={150} // Ajusta según el tamaño real
                  height={70} // Ajusta según el tamaño real
                />
                <Image
                  className="absolute top-[30%] left-0 z-[-1]  h-auto"
                  src={fullImageUrl3}
                  alt=""
                  width={465} // Ajusta según el tamaño real
                  height={300} // Ajusta según el tamaño real
                />
              </div>
            </TiltWrapper>
            {/* experience  */}
            <div className="px-10px py-3 md:py-25px border-l-4 border-primaryColor shadow-experience absolute bottom-0 left-0 bg-white dark:bg-whiteColor-dark animate-move-var w-[290px]">
              <div className="counter flex items-center">
                <p className="text-[40px] text-primaryColor font-bold uppercase pr-10px leading-1">
                  <span data-countup-number="25">{numberImage}</span>
                  {symbolImage}
                </p>
                <p className="text-blackColor dark:text-blackColor-dark font-bold leading-26px">
                  {textImage}
                </p>
              </div>
            </div>
          </div>
          {/* about right  */}
          <div data-aos="fade-up">
            <SectionName>About Us</SectionName>
            <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
              {children ? children : <>{title}</>}
            </h3>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
              {info}
            </p>
            <ul className="space-y-[14px]">
              {listInfo.map((text, index) => {
                return (
                  <li id={index} className="flex items-center group">
                    <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                    <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                      {text}
                    </p>
                  </li>
                );
              })}
            </ul>
            <div>
              <form className="flex gap-x-15px mt-10 items-center flex-wrap gap-y-5">
                <button
                  type="submit"
                  className="text-size-15 text-whiteColor bg-primaryColor px-39px py-14px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* about counter  */}
        {isHome9 || isHome9Dark || hideCounter || (
          <Counter items={counterItemsData} />
        )}
      </div>
    </section>
  );
};

export default AboutValeia1;
