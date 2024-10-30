"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import TestimonialSlide from "./TestimonialSlide";

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
      className="mySwiper "
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      loop={true}
      navigation={true}
      modules={[Navigation]}
    >
      {testimonials.map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialSlide testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSlider;
