"use client";
import { useEffect, useRef } from 'react';

const FooterTop = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Initialize AOS only after component mounts
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        once: true,
        duration: 1000
      });
    }
  }, []);

  return (
    <section>
      <div className="md:gap-y-0 items-center pb-[45px] border-b border-darkcolor gap-y-[30px]">
        <div ref={contentRef} className="w-full" data-aos="fade-up">
          <h4 className="text-4xl md:text-size-25 lg:text-size-40 font-bold text-whiteColor leading-50px md:leading-10 lg:leading-16 w-full">
            Potenciando ventas con <span className="text-primaryColor">.IA conversacional</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;
