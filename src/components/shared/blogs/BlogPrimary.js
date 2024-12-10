import Image from "next/image";
import Link from "next/link";

const BlogPrimary = ({ blog }) => {
  const { 
    title,
    image,
    desc,
    slug, 
    date, 
    month, 
    showVideo = false 
  } = blog;

  return (
    <div className="group shadow-blog2" data-aos="fade-up">
      {/* blog thumbnail */}
      <div className="overflow-hidden relative">
        {image && (
          <Image 
            src={image} 
            alt={title} 
            width={800}
            height={400}
            className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="text-size-22 leading-6 font-semibold text-white px-15px py-5px md:px-6 md:py-2 bg-primaryColor rounded text-center absolute top-5 right-5">
          <h3>
            {date} <br />
            {month}
          </h3>
        </div>
      </div>

      {/* blog content */}
      <div className="pt-26px pb-5 px-30px">
        <h3 className="text-2xl md:text-size-32 lg:text-size-28 2xl:text-size-34 leading-34px md:leading-10 2xl:leading-13.5 font-bold text-blackColor2 hover:text-primaryColor dark:text-blackColor2-dark dark:hover:text-primaryColor">
          <Link href={`/blogs/${slug}`}>{title}</Link>
        </h3>
        <div className="mb-14px pb-19px border-b border-borderColor dark:border-borderColor-dark">
          <ul className="flex flex-wrap items-center gap-x-15px">

          </ul>
        </div>
        <p className="text-base text-contentColor dark:text-contentColor-dark mb-15px !leading-30px">
          {desc}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <Link
              href={`/blogs/${slug}`}
              className="uppercase text-primaryColor hover:text-secondaryColor"
            >
              READ MORE <i className="icofont-double-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPrimary;