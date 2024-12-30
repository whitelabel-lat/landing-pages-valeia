"use client";
import Subjects from "@/components/shared/popular-subjects/Subjects";
import React from "react";
import shapImage from "@/assets/images/service/service__shape__1.png";
import shapBgImage from "@/assets/images/service/service__shape__bg__1.png";
import useIsTrue from "@/hooks/useIsTrue";

const PopularSubjectsValeia = (props) => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isHome10 = useIsTrue("/home-10");
  const isHome10Dark = useIsTrue("/home-10-dark");

  const card1 =
    Array.isArray(props.cards) && props.cards.length > 0 ? props.cards[0] : {};
  const card2 =
    Array.isArray(props.cards) && props.cards.length > 0 ? props.cards[1] : {};
  const card3 =
    Array.isArray(props.cards) && props.cards.length > 0 ? props.cards[2] : {};
  const card4 =
    Array.isArray(props.cards) && props.cards.length > 0 ? props.cards[3] : {};

    const subjects = [
      {
        title: card1.fields?.title,
        desc: card1.fields?.info,

    },
      
      {
        title: card2.fields?.title,
        desc: card2.fields?.info,
        translate: true,       
      },
      {
        title: card3.fields?.title,
        desc: card3.fields?.info,
      },
      {
        title: card4.fields?.title,
        desc: card4.fields?.info,
        translate: true,
      },
    ];


  return (
    <section
      className={`${
        isHome9 || isHome9Dark
          ? "bg-cover"
          : "bg-blue-light dark:bg-lightGrey10-dark"
      } pt-50px pb-110px`}
    >
      <div className="container">
        {/* about section  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px items-center">
          {/* about left */}
          <div
            className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0"
            data-aos="fade-up"
          >
            <div className="relative">
              <div>
                <img
                  className="absolute bottom-9 lg:bottom-[-50px] right-[50px] animate-move-hor"
                  src={shapImage}
                  alt=""
                />
              </div>
              {isHome9 || isHome9Dark ? (
                ""
              ) : (
                <div>
                  <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                    {props.tituloHeader}
                  </h3>
                  <p className="text-sm md:text-base text-contentColor dark:text-contentColor-dark mb-10px 2xl:mb-50px">
                    {props.textInfo}
                  </p>
                  <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10 pl-3 border-l-[3px] border-secondaryColor">
                    {props.headerSubText}
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* sbject right */}
          <div className="relative z-0 overflow-visible">
            {/* animted area */}
            <div data-aos="fade-up">
              <img
                className="absolute sm:block xl:left-1/4 z-[-1] top-6 animate-move-var"
                src={shapBgImage}
                alt=""
              />
            </div>
            {/* subject card */}
            <Subjects subjects={subjects} textLink={card1.fields?.textLink} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSubjectsValeia;
