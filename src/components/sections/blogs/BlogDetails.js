import Image from "next/image";
import BlogsSidebar from "@/components/shared/blogs/BlogsSidebar";
import BlogTagsAndSocila from "@/components/shared/blog-details/BlogTagsAndSocila";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const BlogDetails = ({ blog }) => {
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
        (
      <section>
        <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
            <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
              {/* Blog thumbnail */}
              <div data-aos="fade-up">
                <div className="overflow-hidden relative mb-30px">
                  {blog.headerImage && (
                    <Image
                      src={blog.headerImage}
                      alt={blog.title}
                      width={800}
                      height={400}
                      className="w-full h-[400px] object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Blog content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm text-contentColor">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Summary */}
                <p
                  className="text-lg text-darkdeep4 mb-25px !leading-30px"
                  data-aos="fade-up"
                >
                  {blog.summary}
                </p>

                {/* Content */}
                <div
                  className="prose max-w-none text-lg text-darkdeep4 mb-30px !leading-30px"
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(blog.content),
                  }}
                  data-aos="fade-up"
                />

                {/* Tags and Social */}
                <BlogTagsAndSocila />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-start-9 lg:col-span-4">
              <BlogsSidebar />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default BlogDetails;
