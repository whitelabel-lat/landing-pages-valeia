
import Header from "@/components/layout/header/Header";

import WishlistContextProvider from "@/contexts/WshlistContext";
import CartContextProvider from "@/contexts/CartContext";
import Footer from "@/components/layout/footer/Footer";
import Scrollup from "../others/Scrollup";


const PageWrapper = ({ children }) => {
  return (
    <>
      <CartContextProvider>
        {/* header */}
        <Header />

        {/* main */}
        <WishlistContextProvider>{children}</WishlistContextProvider>
      </CartContextProvider>

      {/* footer */}
      <Footer />

      {/* scroll up */}
      <Scrollup />
    </>
  );
};

export default PageWrapper;
