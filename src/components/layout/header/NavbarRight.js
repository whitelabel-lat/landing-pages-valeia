"use client";
import React from "react";
import Link from "next/link";
import useIsTrue from "@/hooks/useIsTrue";
import MobileMenuOpen from "@/components/shared/buttons/MobileMenuOpen";
const NavbarRight = () => {
  const isHome4 = useIsTrue("/home-4");
  const isHome4Dark = useIsTrue("/home-4-dark");
  const isHome5 = useIsTrue("/home-5");
  const isHome5Dark = useIsTrue("/home-5-dark");
  const isHomeValeiaDark = useIsTrue("/home-valeia-dark");

  return (
    <div className="lg:col-start-10 lg:col-span-3">
      <ul className="relative nav-list flex justify-end items-center">
        

        <li className="hidden lg:block"> {/*  aqui va el form para el demo que falta definir  */}
          <Link
            href="/https://bit.ly/valeia_demo_form" 
            className="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
          >
            
            {isHomeValeiaDark
              ? "Get Started Free"
              : isHome4 || isHome4Dark || isHome5 || isHome5Dark
              ? "Get Start Here"
              : "Solicita tu Demo"}
          </Link>
        </li>
        <li className="block lg:hidden">
          <MobileMenuOpen />
        </li>
      </ul>
    </div>
  );
};

export default NavbarRight;
