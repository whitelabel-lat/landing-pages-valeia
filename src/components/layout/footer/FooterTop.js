"use client";
import { useEffect } from 'react';
import { initAOS } from '@/utils/initAOS';
import FooterHeading from './FooterHeading';

const FooterTop = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <section>
      <div className="md:gap-y-0 items-center pb-[45px] border-b border-darkcolor gap-y-[30px]">
        <div className="w-full" data-aos="fade-up">
          <FooterHeading>
            Potenciando ventas con <span className="text-primaryColor">.IA conversacional</span>
          </FooterHeading>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;