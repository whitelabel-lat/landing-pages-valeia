"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import stickyHeader from "@/libs/stickyHeader";
import smoothScroll from "@/libs/smoothScroll";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = () => {
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
        {/* navbar */}
        <Navbar />
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
