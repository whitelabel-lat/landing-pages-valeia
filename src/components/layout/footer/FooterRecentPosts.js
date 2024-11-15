import React from "react";
import post1 from "@/assets/images/footer/footer__1.png";
import post2 from "@/assets/images/footer/footer__2.png";
import post3 from "@/assets/images/footer/footer__3.png";
import FooterRecentPost from "./FooterRecentPost";
import FooterHeading from "@/components/shared/headings/FooterHeading";

const FooterRecentPosts = () => {
  const posts = [
    {
      title: "Best Your Business",
      image: post1,
      date: "02 Apr 2024",
      id: 1,
    },
    {
      title: " Keep Your Business",
      image: post2,
      date: "02 Apr 2024",
      id: 2,
    },
    {
      title: "  Nice Your Business",
      image: post3,
      date: "02 Apr 2024",
      id: 3,
    },
  ];
  return (
    <div
      className="sm:col-start-1 sm:col-span-12 md:col-start-7 md:col-span-6 lg:col-start-10 lg:col-span-3 pl-0 2xl:pl-50px"
      data-aos="fade-up"
    >
      <div>
        <FooterHeading className="text-size-22 font-bold text-whiteColor mb-3">
          Recent Post
        </FooterHeading>
        <ul className="flex flex-col gap-y-5">
          {posts.map((post, idx) => (
            <FooterRecentPost key={idx} post={post} />
          ))}
        </ul>
      </div>
      <div className="mt-10">
    <ul className="flex flex-col gap-y-3 text-whiteColor">
      <li>
        <a
          href="/terminos-y-condiciones"
          className="text-xl hover:text-primaryColor underline"
        >
          Términos y Condiciones
        </a>
      </li>
      <li>
        <a
          href="/politica-de-privacidad"
          className="text-xl hover:text-primaryColor underline"
        >
          Política de Privacidad y Cookies
        </a>
      </li>
    </ul>
  </div>
    </div>
  );
};

export default FooterRecentPosts;
