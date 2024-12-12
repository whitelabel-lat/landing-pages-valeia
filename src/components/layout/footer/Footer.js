"use client";

import { useGetStaticProps } from "@/hooks/useGetStaticProps";
import CopyRight from "./CopyRight";
import FooterAbout from "./FooterAbout";
import FooterRecentPosts from "./FooterRecentPosts";
import FooterTop from "./FooterTop";


const Footer = () => {

  const data = useGetStaticProps();

  const getSection = (index) => {
    return Array.isArray(data.topSections) && data.topSections.length > index
      ? data.topSections[index]
      : {};
  };

  const iconValeia = getSection(2);

  return (
    <footer className="bg-darkblack 2xl:bg-cover">
  <div className="container pt-[65px] pb-5 lg:pb-10">
    {/* Footer top, Footer about and FooterNavList in a row */}
    <div className="flex flex-wrap justify-between">
      {/* Left side: FooterTop and FooterAbout */}
      <div className="flex flex-col space-y-5 w-full md:w-[65%]">
        <FooterTop />
        <FooterAbout />
      </div>

      {/* Right side: FooterNavList */}
      <div className="w-full md:w-[35%] flex justify-end">
      <FooterRecentPosts />
      </div>
    </div>

    {/* Footer copyright */}
    <CopyRight {...iconValeia}/>
  </div>
</footer>
  );
};

export default Footer;
