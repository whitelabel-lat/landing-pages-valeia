"use client";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";
import BlogList from "@/components/sections/blogs/BlogList";
import BlogsSidebar from "@/components/shared/blogs/BlogsSidebar";

const BlogsPrimary = () => {
  const { blogPosts } = useGetStaticProps();

  return (
    <section>
      <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
          {/* blogs */}
          <div className="lg:col-start-1 lg:col-span-8">
            <BlogList blogs={blogPosts} />
          </div>
          {/* blog sidebar */}
          <div className="lg:col-start-9 lg:col-span-4">
            <BlogsSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPrimary;