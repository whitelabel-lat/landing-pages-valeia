"use client";
import { useEffect, useState } from "react";

const Scrollup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-up w-50px h-50px leading-50px text-center 
            text-primaryColor bg-white hover:text-whiteColor hover:bg-primaryColor 
            rounded-full fixed right-5 bottom-[60px] shadow-scroll-up z-medium 
            text-xl dark:text-whiteColor dark:bg-primaryColor dark:hover:text-whiteColor-dark 
            transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <i className="icofont-rounded-up"></i>
        </button>
      )}
    </>
  );
};

export default Scrollup;