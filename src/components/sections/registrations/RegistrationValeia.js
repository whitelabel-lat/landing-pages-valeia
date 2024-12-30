import React from "react";
import PopupVideoValeia from "@/components/shared/popup/PopupVideoValeia";

const RegistrationValeia = ({ title, info, images = [], linkVideo }) => {
  const fullImageUrls = images.map((image) => {
    const imageUrl = image.fields?.file?.url || "";
    const fullImageUrl = imageUrl.startsWith("//")
      ? `https:${imageUrl}`
      : imageUrl;
    return fullImageUrl;
  });

  const [fullImageUrl0] = fullImageUrls;

  return (
    <section className="bg-register bg-cover bg-center bg-no-repeat lg:mb-150px">
      {/* registration overlay  */}
      <div className="overlay bg-blue bg-opacity-90 py-20 lg:pt-[90px] lg:pb-0 relative z-0">
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
                  <PopupVideoValeia linkVideo={linkVideo} />

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
              <div className="relative w-full max-w-[470px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-[470px] h-auto aspect-[470/581]">
                <img
                  className="absolute left-0 bottom-0 w-full h-full object-cover"
                  src={fullImageUrl0}
                  alt="Reemplazo del formulario"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegistrationValeia;
