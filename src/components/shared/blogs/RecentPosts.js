import Link from "next/link";
import Image from "next/image";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";

const RecentPosts = () => {
  const { blogPosts } = useGetStaticProps();
  const recentPosts = blogPosts?.slice(0, 3) || [];

  return (
    <div
      className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
      data-aos="fade-up"
    >
      <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
        Recent Posts
      </h4>
      <ul className="flex flex-col gap-y-25px">
        {recentPosts.map((post, idx) => (
          <li key={post.slug} className="flex items-center">
            <div className="w-2/5 pr-5 relative">
              <Link href={`/blogs/${post.slug}`} className="w-full">
                {post.headerImage && (
                  <Image 
                    src={post.headerImage}
                    alt={post.title}
                    width={100}
                    height={100}
                    className="w-full h-[80px] object-cover rounded"
                  />
                )}
              </Link>
              <span className="text-xs font-medium text-whiteColor h-6 w-6 leading-6 text-center bg-primaryColor absolute top-0 left-0">
                {idx + 1}
              </span>
            </div>
            <div className="w-3/5">
              <span className="text-sm text-contentColor font-medium leading-7 dark:text-contentColor-dark">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
              <h3 className="font-bold leading-22px mb-15px">
                <Link
                  className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                  href={`/blogs/${post.slug}`}
                >
                  {post.title}
                </Link>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;