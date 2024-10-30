"use client";
import React, { useEffect } from "react";



import useIsTrue from "@/hooks/useIsTrue";
import Aos from "aos";
import stickyHeader from "@/libs/stickyHeader";
import smoothScroll from "@/libs/smoothScroll";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const isHomeValeia = useIsTrue("/home-valeia");
  const isHomeValeiaDark = useIsTrue("/home-valeia-dark");
  useEffect(() => {
    stickyHeader();
    smoothScroll();
    // AOS Scroll Animation
    Aos.init({
      offset: 1,
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);
  return (
    <header>
      <div>
        {/* header top */}
        {isHomeValeiaDark || isHomeValeia ? "" : <HeaderTop />}
        {/* navbar */}
        <Navbar />
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
