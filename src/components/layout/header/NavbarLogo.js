import React from "react";
import Link from "next/link";
const NavbarLogo = () => {
  return (
    <div className="lg:col-start-1 lg:col-span-2">
      <Link href="/" className="w-logo-sm lg:w-logo-lg ">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-full py-2"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
