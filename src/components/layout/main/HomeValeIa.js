"use client";
import Brands from "@/components/sections/brands/Brands";
import PopularSubjectsValeia from "@/components/sections/popular-subjects/PopularSubjectsValeia";
import RegistrationValeia from "@/components/sections/registrations/RegistrationValeia";
import AboutValeia2 from "@/components/sections/abouts/AboutValeia2";
import UseCase from "@/components/sections/useCase/useCase";
import FeesValeia from "@/components/sections/fees/FeesValeia";
import HeroValeia from "@/components/sections/hero-banners/HeroValeia";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";

const HomeValeia = () => {
  const {topSections} = useGetStaticProps();
  
  const componentMap = {
    sectionHero: HeroValeia,
    popularSubjects: PopularSubjectsValeia,
    sectionAboutValeia2: AboutValeia2,
    sectionRegistrationValeia: RegistrationValeia,
    sectionPricingPlans: PricingPlans,
    sectionTestimonials: Testimonials,
    sectionCasosDeUso: UseCase,
    sectionBrands: Brands,
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
