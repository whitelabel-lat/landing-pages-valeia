import React from "react";
import Link from "next/link";
import BookImage from "@/components/shared/animaited-images/BookImage";
import GlobImage from "@/components/shared/animaited-images/GlobImage";
import BalbImage from "@/components/shared/animaited-images/BalbImage";
import TriangleImage from "@/components/shared/animaited-images/TriangleImage";

const HeroPrimary = ({ title }) => {
  return (
    <section data-aos="fade-up">
      {/* banner section  */}
      <div className="bg-lightGrey10 dark:bg-lightGrey10-dark relative z-0 overflow-y-visible py-25px md:py-10 lg:py-50px 2xl:pb-30px 2xl:pt-15">
        {/* animated icons  */}
        <div>
          <BookImage type={"secondary"} />
          <GlobImage type={"secondary"} />
          <BalbImage type={"secondary"} />
          <TriangleImage type={"secondary"} />
        </div>
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl md:text-size-40 2xl:text-size-55 font-bold text-blackColor2 dark:text-blackColor2-dark  leading-18 md:leading-15 lg:leading-18">
              {title}
            </h1>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPrimary;
