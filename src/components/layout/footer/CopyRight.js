import React from "react";
import useIsSecondary from "@/hooks/useIsSecondary";

const CopyRight = ({ iconValeia = [] }) => {
  const { isSecondary } = useIsSecondary();

  const fullImageUrls = iconValeia.map((image) => {
    const imageUrl = image.fields?.file?.url || "";
    const fullImageUrl = imageUrl.startsWith("//")
      ? `https:${imageUrl}`
      : imageUrl;
    return fullImageUrl;
  });

  const icon = fullImageUrls[0];

  const socialLinks = [
    { icon: "facebook", url: "https://www.facebook.com", color: "hover:text-[#1877F2]" },
    { icon: "twitter", url: "https://www.twitter.com", color: "hover:text-[#1DA1F2]" },
    { icon: "instagram", url: "https://www.instagram.com", color: "hover:text-[#E4405F]" },
    { icon: "linkedin", url: "https://www.linkedin.com", color: "hover:text-[#0A66C2]" }
  ];

  return (
    <div>
      {isSecondary ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10 lg:mt-4 items-center border-t border-darkcolor">
          <div>
            <p className="text-base text-center sm:text-start text-darkgray">
              © 2024 Powered by{" "}
              <a href="#" className="hover:text-primaryColor">
                Edurock
              </a>{" "}
              . All Rights Reserved.
            </p>
          </div>

          <div>
            <ul className="flex items-center justify-center sm:justify-end">
              <li>
                <a
                  href="#"
                  className="text-base text-darkgray hover:text-primaryColor pr-4 border-r border-darkgray leading-1"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-darkgray hover:text-primaryColor pl-4"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-30px pt-10 items-center">
        <div className="lg:col-start-1 lg:col-span-3">
          <a href="/" className="block">
            <img src={icon} alt="Logo" className="h-12 w-auto" />
          </a>
        </div>

        <div className="lg:col-start-4 lg:col-span-6">
          <p className="text-whiteColor text-center">
            Copyright © <span className="text-primaryColor">2024 </span>
            WhiteLabel. All Rights Reserved.
          </p>
        </div>

        <div className="lg:col-start-10 lg:col-span-3">
          <ul className="flex gap-3 lg:gap-2 2xl:gap-3 lg:justify-end">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px 
                    leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor 
                    bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center 
                    flex items-center justify-center rounded-full transition-all duration-300 ${social.color}`}
                >
                  <i className={`icofont-${social.icon} text-xl`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      )}
    </div>
  );
};

export default CopyRight;