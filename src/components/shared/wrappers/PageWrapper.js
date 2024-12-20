import { Suspense } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Scrollup from "../others/Scrollup";

const PageWrapper = ({ children }) => {
  return (
    <>
        <Header />
        <Suspense fallback={<div></div>}>
            <main>{children}</main>
            <Footer />
            <Scrollup />
        </Suspense>
        
    </>
  );
};

export default PageWrapper;
