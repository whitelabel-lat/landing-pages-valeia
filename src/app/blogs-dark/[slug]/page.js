"use client";
import { usePathname, notFound } from 'next/navigation';
import { useEffect } from 'react';
import BlogDetailsMain from "@/components/sections/blogs/BlogDetails";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

const Blog_Details_Dark = () => {
  const { blogPosts } = useGetStaticProps();
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const blog = blogPosts?.find((post) => post.slug === slug);

  useEffect(() => {
    if (blog) {
      document.title = blog.title || "Blog Details";
      document.querySelector('meta[name="description"]')?.setAttribute('content', blog.summary || "");
    }
  }, [blog]);

  if (!blog) {
    return notFound();
  }

  return (
    <PageWrapper>
      <main className="is-dark">
        <HeroPrimary title={blog.title} path="Blog Details" />
        <BlogDetailsMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Blog_Details_Dark;
