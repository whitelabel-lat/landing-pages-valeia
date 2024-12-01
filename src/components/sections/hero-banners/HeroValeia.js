import Image from "next/image";
import aboutImage16 from "@/assets/images/about/about_16.png";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";

const {
  default: HeadingLg,
} = require("@/components/shared/headings/HeadingLg");
const { default: Link } = require("next/link");

const HeroValeia = (props) => {
  const fullImageUrls =
    props.listImage?.map((image) => {
      const imageUrl = image.fields?.file?.url || "";
      return imageUrl.startsWith("//") ? `https:${imageUrl}` : imageUrl;
    }) || [];

  const fullImageUrl0 = fullImageUrls[0] || "";
  const fullImageUrl1 = fullImageUrls[1] || "";
  const fullImageUrl2 = fullImageUrls[2] || "";
  const fullImageUrl3 = fullImageUrls[3] || "";
  const fullImageUrl4 = fullImageUrls[4] || "";
  const fullImageUrl5 = fullImageUrls[5] || "";
  const fullImageUrl6 = fullImageUrls[6] || "";
  const fullImageUrl7 = fullImageUrls[7] || "";
  const fullImageUrl8 = fullImageUrls[8] || "";
  const fullImageUrl9 = fullImageUrls[9] || "";
  const fullImageUrl10 = fullImageUrls[10] || "";
  const fullImageUrl11 = fullImageUrls[11] || "";
  const fullImageUrl12 = fullImageUrls[12] || "";

  return (
    <section data-aos="fade-up">
      <div className="overflow-hidden relative z-0">
        {/* animated icons */}
        <div>
          <img
            src={fullImageUrl0}
            className="absolute right-[16%] top-[60%] md:right-[31px] md:top-[70%] lg:right-[16%] lg:top-[60%] animate-move-var z-10"
            alt=""
          />
          <img
            src={fullImageUrl1}
            className="absolute right-[9%] top-[58%] md:right-[12%] lg:right-[9%] animate-move-hor z-10"
            alt=""
          />
          <img
            src={fullImageUrl2}
            className="absolute left-1/2 bottom-[15%] md:left-[4%] lg:left-1/2 animate-spin-slow"
            alt=""
          />
          <img
            src={fullImageUrl3}
            className="absolute left-[53%] top-[41%] md:left-[9%] md:top-[43%] lg:left-[53%] animate-spin-slow"
            alt=""
          />
        </div>
        <div className="container pt-12 lg:pt-130px pb-175px relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 md:gap-15 lg:gap-30px">
            {/* banner Left */}
            <div className="lg:col-start-1 lg:col-span-7" data-aos="fade-up">
              <HeadingLg>{props.heroPrimaryText}</HeadingLg>
              <p className="text-size-15 lg:text-base 2xl:text-lg text-primaryColor mb-5 2xl:mb-30px dark:text-contentColor-dark">
                {props.heroSubPrimaryText}
              </p>
              <div>
                <form className="flex gap-x-15px items-center flex-wrap gap-y-5">
                  <button
                    type="submit"
                    className="text-size-15 text-whiteColor bg-primaryColor px-39px py-14px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                  >
                    {props.buttonSing}
                  </button>
                </form>
              </div>
            </div>
            {/* banner right */}
            <div className="lg:col-start-8 lg:col-span-5" data-aos="fade-up">
              <TiltWrapper>
                <div className="tilt relative z-0">
                  {/* bannar image */}
                  <div className="flex flex-col items-center lg:items-end">
                    <img
                      className="text-center"
                      src={fullImageUrl4}
                      alt=""
                      placeholder="blur"
                    />
                    <img
                      className="absolute left-0 bottom-[-93px] md:left-[30px] lg:left-0"
                      src={fullImageUrl5}
                      alt=""
                      placeholder="blur"
                    />
                    <img
                      src={fullImageUrl6}
                      className="absolute left-5 top-10 md:left-[30px] lg:left-5 -z-10"
                      alt=""
                      placeholder="blur"
                    />
                    <img
                      src={fullImageUrl7}
                      className="absolute -right-4 top-[-22px] md:right-[155px] lg:-right-4 z-[-1] animate-move-hor"
                      alt=""
                      placeholder="blur"
                    />
                  </div>
                  <div className="w-[300px] md:w-[342px] rounded-lg absolute top-6 right-0 md:top-[41px] md:right-[9px] lg:right-[-26px] 2xl:right-[-166px] bg-whiteColor p-4 flex items-center animate-move-var shadow-hero-greeting dark:bg-whiteColor-dark">
                    <div className="flex-shrink-0">
                      <img
                        src={fullImageUrl12}
                        className="w-16 h-16 rounded-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <p className="text-sm font-semibold text-greencolor3">
                        {props.chatTitle1}
                      </p>
                      <p className="text-sm text-contentColor dark:text-contentColor-dark">
                        {props.chatInput1}
                      </p>
                    </div>
                  </div>
                  <div className="w-[300px] md:w-[342px] absolute bottom-12 rounded-lg left-0 md:bottom-[-41px] md:left-[9px] lg:left-[-26px] 2xl:left-[-166px] bg-whiteColor p-[10px] flex gap-x-5 items-center animate-move-var shadow-hero-greeting dark:bg-whiteColor-dark">
                    <div>
                      <img
                        src={fullImageUrl12}
                        className="w-[55px] h-[55px] rounded block"
                        alt=""
                        placeholder="blur"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-greencolor3">
                        {props.chatTitle2}
                      </p>
                      <p className="text-sm text-contentColor dark:text-contentColor-dark">
                        {props.chatInput2}
                      </p>
                    </div>
                  </div>

                  <div className="absolute right-10 bottom-[-136px] md:right-[219px] md:bottom-[-105px] lg:right-[-50px] lg:bottom-[-125px] 2xl:right-10 2xl:bottom-[-105px]">
                    <Link href="#" className="flex group">
                      <img
                        src={fullImageUrl8}
                        className="w-52px h-52px"
                        alt=""
                        placeholder="blur"
                      />
                      <img
                        src={fullImageUrl9}
                        className="w-52px h-52px transition-all duration-300 -ml-35px group-hover:-ml-30px"
                        alt=""
                        placeholder="blur"
                      />
                      <img
                        src={fullImageUrl10}
                        className="w-52px h-52px transition-all duration-300 -ml-35px group-hover:-ml-30px"
                        alt=""
                        placeholder="blur"
                      />
                      <img
                        src={fullImageUrl11}
                        className="w-52px h-52px transition-all duration-300 -ml-35px group-hover:-ml-30px"
                        alt=""
                        placeholder="blur"
                      />
                    </Link>
                    <div>
                      <p className="text-sm text-lightGrey3 mb-15px">
                        Join over
                        <span className="text-blackColor dark:text-blackColor-dark">
                          4000+
                        </span>
                        students
                      </p>
                    </div>
                  </div>
                </div>
              </TiltWrapper>
            </div>
          </div>
        </div>
      </div>
      {/* bannaer section */}
    </section>
  );
};

export default HeroValeia;
