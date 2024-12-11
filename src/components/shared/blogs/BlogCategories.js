"use client";
import Link from 'next/link';

const BlogCategories = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <div
      className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
      data-aos="fade-up"
    >
      <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
        Categories
      </h4>
      <ul className="flex flex-col gap-y-4">
        {/* Opción para mostrar todos los blogs */}
        <li
          key="all"
          className={`text-contentColor hover:text-contentColor-dark hover:bg-primaryColor transition-all duration-300 text-sm font-medium px-4 py-2 border border-borderColor2 hover:border-primaryColor dark:border-borderColor2-dark dark:hover:border-primaryColor flex justify-between leading-7 ${
            !selectedCategory ? "bg-primaryColor text-white" : ""
          }`}
          onClick={() => onCategorySelect(null)}
        >
          All Blogs
        </li>
        {/* Listado dinámico de categorías */}
        {categories.map((category) => (
          <li
            key={category.slug}
            className={`text-contentColor hover:text-contentColor-dark hover:bg-primaryColor transition-all duration-300 text-sm font-medium px-4 py-2 border border-borderColor2 hover:border-primaryColor dark:border-borderColor2-dark dark:hover:border-primaryColor flex justify-between leading-7 ${
              selectedCategory === category.slug ? "bg-primaryColor text-white" : ""
            }`}
            onClick={() => onCategorySelect(category.slug)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
