import Image from "next/image";
import React from "react";

import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import Counter from "../sub-section/Counter";
// import SectionName from "@/components/shared/section-names/SectionName";
import AboutListItem from "@/components/shared/abouts/AboutListItem";
const AboutValeia2 = ({
  title,
  textInfo,
  listInfo = [],
  images = [],
  counterItems = [],
}) => {
  const items = listInfo?.map((item, index) => ({ id: index, title: item }));
  const fullImageUrls =
    images?.map((image) => {
      const imageUrl = image.fields?.file?.url || "";
      return imageUrl.startsWith("//") ? `https:${imageUrl}` : imageUrl;
    }) || [];

  const fullImageUrl0 = fullImageUrls[0] || "";
  const fullImageUrl1 = fullImageUrls[1] || "";

  const counterItemsData = counterItems?.map((counter) => counter.fields);

  return (
    <section>
      <div className="container">
        {/* about section  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px pt-20">
          {/* about left */}
          <div data-aos="fade-up">
            <TiltWrapper>
              <div className="tilt relative">
                <Image
                  className="absolute left-0 top-0 lg:top-4 right-0 mx-auto"
                  src={fullImageUrl0}
                  alt=""
                  width={465} // Ajusta según el tamaño real
                  height={300} // Ajusta según el tamaño real
                />
                <Image
                  className="w-full"
                  src={fullImageUrl1}
                  alt=""
                  width={400} // Ajusta según el tamaño real
                  height={300} // Ajusta según el tamaño real
                />
              </div>
            </TiltWrapper>
          </div>

          {/* about right */}
          <div data-aos="fade-up" className="pl-0 lg:pl-35px">
            {/* <SectionName>About Us</SectionName> */}
            <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
              {title}
            </h3>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6">
              {textInfo}
            </p>
            <ul className="space-y-5">
              {items.map((item, idx) => (
                <AboutListItem key={idx} item={item} />
              ))}
            </ul>
            {/* about counter  */}

            <Counter items={counterItemsData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValeia2;
