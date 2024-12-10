import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";

const FooterRecentPosts = () => {
  const { blogPosts } = useGetStaticProps();
  const recentPosts = blogPosts?.slice(0, 3) || [];

  return (
    <div
      className="sm:col-start-1 sm:col-span-12 md:col-start-7 md:col-span-6 lg:col-start-10 lg:col-span-3 pl-0 2xl:pl-50px"
      data-aos="fade-up"
    >
      <div>
        <h4 className="text-size-22 font-bold text-whiteColor mb-3">
          Recent Posts
        </h4>
        <ul className="flex flex-col gap-y-5">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blogs/${post.slug}`}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div>
                  {post.headerImage && (
                    <Image
                      src={post.headerImage}
                      alt={post.title}
                      width={61}
                      height={54}
                      className="w-[61px] h-[54px] object-cover rounded"
                    />
                  )}
                </div>
                <div>
                  <p className="text-xs text-darkgray mb-7px">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <h6 className="text-size-15 text-whiteColor font-bold group-hover:text-primaryColor transition-all duration-300">
                    {post.title}
                  </h6>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <ul className="flex flex-col gap-y-3 text-whiteColor">
          <li>
            <Link
              href="/terminos-y-condiciones"
              className="text-xl hover:text-primaryColor underline"
            >
              Términos y Condiciones
            </Link>
          </li>
          <li>
            <Link
              href="/politica-de-privacidad"
              className="text-xl hover:text-primaryColor underline"
            >
              Política de Privacidad y Cookies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterRecentPosts;