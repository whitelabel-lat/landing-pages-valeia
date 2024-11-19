import React from "react";
import registrationImage1 from "@/assets/images/register/register__1.png";
import registrationImage2 from "@/assets/images/register/register__2.png";
import registrationImage3 from "@/assets/images/register/register__3.png";

import PopupVideoValeia from "@/components/shared/popup/PopupVideoValeia";

const RegistrationValeia = ({ 
  title,
  info,
  chatTitle1,
  chatTitle2,
  chatInput1,
  chatInput2,
  images=[],
  linkVideo
 }) => {

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
    fullImageUrl2
  ] = fullImageUrls;

  return (
    <section className="bg-register bg-cover bg-center bg-no-repeat lg:mb-150px">
      {/* registration overlay  */}
      <div className="overlay bg-blue bg-opacity-90 py-20 lg:pt-[90px] lg:pb-0 relative z-0">
        {/* animate icons  */}
        <div>
          <img
            className="absolute top-0 left-0 lg:left-[8%] 2xl:top-10 animate-move-hor block z--1"
            src={registrationImage1}
            alt=""
          />
          <img
            className="absolute top-1/2 left-3/4 md:left-2/3 lg:left-1/2 2xl:left-[8%] md:top animate-spin-slow block z--1"
            src={registrationImage2}
            alt=""
          />
          <img
            className="absolute top-20 lg:top-3/4 md:top-14 right-20 md:right-20 lg:right-[90%] animate-move-var block z--1"
            src={registrationImage3}
            alt=""
          />
        </div>
        <div className="container">
          {/* about section   */}
          <div className="grid grid-cols-1 lg:grid-cols-12 pt-30px gap-x-30px">
            {/* about left  */}
            <div
              className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 lg:col-start-1 lg:col-span-7"
              data-aos="fade-up"
            >
              <div className="relative">
                <h3 className="text-3xl md:text-[35px] 2xl:text-size-42 leading-[45px] 2xl:leading-2xl font-bold text-whiteColor pb-25px">
                  {title}
                </h3>
                <div className="flex gap-x-5 items-center">
                  <PopupVideoValeia linkVideo={linkVideo}/>

                  <div>
                    <p className="text-size-15 md:text-[22px] lg:text-lg 2xl:text-[22px] leading-6 md:leading-9 lg:leading-8 2xl:leading-9 font-semibold text-white">
                      {info}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* sbject right  */}

           
            <div className="overflow-visible lg:col-start-8 lg:col-span-5 relative z-1 lg:-mb-150px">
              <div className="relative w-[470px] h-[581px]">
                <img
                  className="absolute left-0 bottom-0 w-full h-full object-cover"
                  src={fullImageUrl0}
                  alt="Reemplazo del formulario"
                />
              </div>
              <div className="w-300px md:w-342px rounded-lg absolute top-6 rihgt-0 md:top-[80px] md:right-[9px] lg:right-[-26px] 2xl:right-[-166px] bg-whiteColor p-10px flex gap-x-5 items-center animate-move-var shadow-hero-greeting dark:bg-whiteColor-dark">
                <div>
                  <img
                    src={fullImageUrl1}
                    className="w-55px h-55px rounded block"
                    alt=""
                    placeholder="blur"
                  />
                </div>
                <div>
                  <p className="text-size-15 font-semibold text-greencolor3">
                    {chatTitle1}
                  </p>
                  <p className="text-sm text-contentColor dark:text-contentColor-dark">
                    {chatInput1}
                  </p>
                </div>
              </div>
              <div className="w-[300px] md:w-[342px] absolute bottom-12 rounded-lg left-0 md:bottom-[70px] md:left-[9px] lg:left-[-26px] 2xl:left-[-166px] bg-whiteColor p-[10px] flex gap-x-5 items-center animate-move-var shadow-hero-greeting dark:bg-whiteColor-dark">
                <div>
                  <img
                    src={fullImageUrl2}
                    className="w-[55px] h-[55px] rounded block"
                    alt=""
                    placeholder="blur"
                  />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-greencolor3">
                    {chatTitle2}
                  </p>
                  <p className="text-sm text-contentColor dark:text-contentColor-dark">
                    {chatInput2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegistrationValeia;
