"use client";
import { Suspense, useEffect } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Scrollup from "../others/Scrollup";
import { initAOS } from "@/utils/initAOS";

const PageWrapper = ({ children }) => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>{children}</main>
        <Footer />
        <Scrollup />
      </Suspense>
    </>
  );
};

export default PageWrapper;