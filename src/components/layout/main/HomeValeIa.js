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
  const {topSections} = useGetStaticProps();
  
  const componentMap = {
    sectionHero: HeroValeia,
    sectionFeaturesMarque: FeaturesMarque,
    popularSubjects: PopularSubjectsValeia,
    sectionAboutValeia2: AboutValeia2,
    sectionRegistrationValeia: RegistrationValeia,
    sectionPricingPlans: PricingPlans,
    sectionTestimonials: Testimonials,
    sectionBrands: Brands,
    sectionAboutValeia1: AboutValeia1,
    sectionFeesValeia: FeesValeia,
  };

  return (
    <>
      {topSections.map((section, index) => {
        const Component = componentMap[section.sys.contentType.sys.id] || 'div';
        return <Component key={index} {...section.fields} />;
      })}
    </>
  );
};

export default HomeValeia;
