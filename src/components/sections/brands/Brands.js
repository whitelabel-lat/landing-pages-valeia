import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import React from "react";
import Link from "next/link";
const Brands = ({ title, icons = [] }) => {
  return (
    <section className="bg-lightGrey10 dark:bg-lightGrey10-dark">
      <div className="container pb-60px">
        {/* Brands Heading  */}
        <div className="mb-5 md:mb-10" data-aos="fade-up">
          <HeadingPrimary text="center">{title}</HeadingPrimary>
        </div>
        {/* brands  */}
        <div className="flex flex-wrap justify-center">
          {icons.map((item, idx) => {
            const imageUrl = item.fields.file?.url || "";
            const fullImageUrl = imageUrl.startsWith("//")
              ? `https:${imageUrl}`
              : imageUrl;

            return (
              <div
                key={idx}
                className="basis-1/2 md:basis-1/4 lg:basis-1/5"
                data-aos="fade-up"
              >
                <Link
                  href="#"
                  className="pt-25px pb-45px text-center w-full flex justify-center"
                >
                  <img alt="" src={fullImageUrl} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
