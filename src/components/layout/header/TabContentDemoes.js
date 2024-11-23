import home2 from "@/assets/images/mega/home-2.png";
import homeDark2 from "@/assets/images/mega/home-2-dark.png";

import Link from "next/link";
const TabContentDemoes = ({ isDark }) => {
  const demoes = [
   
    {
      name: "Home (Elegant)",
      path: isDark ? "/home-valeia-dark" : "/home-valeia",
      image: isDark ? homeDark2 : home2,
      status: null,
    }
  ];
  return (
    <div
      id="light-demos"
      className="block opacity-100 transition-opacity duration-150 ease-linear"
    >
      <ul id="light-list" className="grid grid-cols-5 gap-30px pt-30px pb-15px">
        {demoes?.map(({ image, name, path, status }, idx) => (
          <li key={idx}>
            <Link
              href={path}
              className="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
            >
              <img placeholder="blur" src={image} alt="" />
              {status && (
                <span className="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                  {status}
                </span>
              )}
              <span className="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabContentDemoes;
