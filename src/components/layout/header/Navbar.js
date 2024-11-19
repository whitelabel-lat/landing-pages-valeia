"use client";
import useIsTrue from "@/hooks/useIsTrue";
import NavbarLogo from "./NavbarLogo";
import NavItems2 from "./NavItems2";
import NavItems from "./NavItems";
import NavbarTop from "./NavbarTop";
import NavbarRight from "./NavbarRight";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";

const Navbar = () => {
  const isHome1 = useIsTrue("/");
  const isHome1Dark = useIsTrue("/home-1-dark");
  // const isHome2 = useIsTrue("/home-2");
  const isHomeValeia = useIsTrue("/home-valeia");
  // const isHome2Dark = useIsTrue("/home-2-dark");
  const isHomeValeiaDark = useIsTrue("/home-valeia-dark");
  const isHome4 = useIsTrue("/home-4");
  const isHome4Dark = useIsTrue("/home-4-dark");
  const isHome5 = useIsTrue("/home-5");
  const isHome5Dark = useIsTrue("/home-5-dark");
  const data = useGetStaticProps();

  
  const getSection = (index) => {
    return Array.isArray(data.topSections) && data.topSections.length > index
      ? data.topSections[index]
      : {};
  };

  const iconValeia = getSection(2);

  console.log(iconValeia);
  

  return (
    <div
      className={`transition-all duration-500 sticky-header z-medium dark:bg-whiteColor-dark ${
        // isHome2 || isHome2Dark
        isHomeValeia || isHomeValeiaDark
          ? "lg:border-b border-borderColor dark:border-borderColor-dark"
          : ""
      }`}
    >
      <nav>
        <div
          className={`py-15px lg:py-0 px-15px ${
            isHome1 ||
            isHome1Dark ||
            isHome4 ||
            isHome4Dark ||
            isHome5 ||
            isHome5Dark
              ? "lg:container 3xl:container2-lg"
              : // : isHome2 || isHome2Dark
              isHomeValeia || isHomeValeiaDark
              ? "container sm:container-fluid lg:container 3xl:container-secondary "
              : "lg:container 3xl:container-secondary-lg "
          } 4xl:container mx-auto relative`}
        >
          {isHome4 || isHome4Dark || isHome5 || isHome5Dark ? (
            <NavbarTop />
          ) : (
            ""
          )}
          <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-15px">
            {/* navbar left */}
            <NavbarLogo {...iconValeia}/>
            {/* Main menu */}
            {/* {isHome2Dark ? <NavItems2 /> : <NavItems />} */}
            {isHomeValeiaDark ? <NavItems2 /> : <NavItems />}

            {/* navbar right */}
            {/* <NavbarRight isHome2Dark={isHome2Dark} /> */}
            <NavbarRight isHomeValeiaDark={isHomeValeiaDark} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
