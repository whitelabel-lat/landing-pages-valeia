"use client";
import Brands from "@/components/sections/brands/Brands";

import PopularSubjectsValeia from "@/components/sections/popular-subjects/PopularSubjectsValeia";
import RegistrationValeia from "@/components/sections/registrations/RegistrationValeia";
import AboutValeia2 from "@/components/sections/abouts/AboutValeia2";
import AboutValeia1 from "@/components/sections/abouts/AboutValeia1";
import FeesValeia from "@/components/sections/fees/FeesValeia";
import HeroValeia from "@/components/sections/hero-banners/HeroValeia";
import FeaturesMarque from "@/components/sections/sub-section/FeaturesMarque";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";

const HomeValeia = () => {
  const data = useGetStaticProps();
  console.log(data,'data <---');
  

  const getSection = (index) => {
    return Array.isArray(data.topSections) && data.topSections.length > index
      ? data.topSections[index]
      : {};
  };

  const topSectionData = getSection(7);
  const sectionFeaturesMarques = getSection(14);
  const sectionPopularSubjects = getSection(4);
  const sectionAboutValeia2 = getSection(17);
  const sectionRegistrationValeia = getSection(22);
  const sectionPricingPlans = getSection(19);
  const sectionTestimonials = getSection(0);
  const sectionBrands = getSection(25);
  const sectionAboutValeia1 = getSection(16);
  const sectionFees = getSection(20);

  return (
    <>
      <HeroValeia {...topSectionData} />
      <FeaturesMarque {...sectionFeaturesMarques} />
      <PopularSubjectsValeia {...sectionPopularSubjects} />
      <AboutValeia2 {...sectionAboutValeia2} />
      <RegistrationValeia {...sectionRegistrationValeia} />
      <PricingPlans {...sectionPricingPlans} />
      <Testimonials {...sectionTestimonials} />
      <Brands {...sectionBrands} />
      <AboutValeia1 {...sectionAboutValeia1} />
      <FeesValeia {...sectionFees} />
    </>
  );
};

export default HomeValeia;
