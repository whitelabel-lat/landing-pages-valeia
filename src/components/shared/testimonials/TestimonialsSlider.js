"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialSlide from "./TestimonialSlide";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSlider = ({ testimon }) => {
  const testimonials = testimon?.map((item) => {
    const imageUrl = item.fields.image?.fields.file?.url || "";
    const fullImageUrl = imageUrl.startsWith("//")
      ? `https:${imageUrl}`
      : imageUrl;

    return {
      name: item.fields.name,
      image: fullImageUrl,
      desig: item.fields.desig,
      desc: item.fields.desc,
    };
  });

  return (
    <Swiper
      className="testimonials-swiper relative"
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      loop={true}
    >
      {testimonials?.map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialSlide testimonial={testimonial} />
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev !text-primaryColor !bg-white hover:!bg-primaryColor hover:!text-white transition-all duration-300 !w-12 !h-12 !rounded-full after:!text-xl"></div>
      <div className="swiper-button-next !text-primaryColor !bg-white hover:!bg-primaryColor hover:!text-white transition-all duration-300 !w-12 !h-12 !rounded-full after:!text-xl"></div>
      <div className="swiper-pagination !bottom-0"></div>
    </Swiper>
  );
};

export default TestimonialsSlider;