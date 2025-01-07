"use client";
import NavbarLogo from "./NavbarLogo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="transition-all duration-500 sticky-header z-medium dark:bg-whiteColor-dark">
      <nav>
        <div className="py-15px px-15px container mx-auto relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavbarLogo />

            {/* Botón de Blog */}
            <Link href="/blogs" className="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor">
                Blogs
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
