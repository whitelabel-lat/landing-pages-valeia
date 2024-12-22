"use client";
import { useEffect } from 'react';
import { usePathname, notFound } from 'next/navigation';
import BlogDetailsMain from "@/components/sections/blogs/BlogDetails";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

const Blog_Details_Dark = () => {
  const { currentBlog } = useGetStaticProps();
  const pathname = usePathname(); 

useEffect(() => {
  if (currentBlog) {
    document.title = currentBlog.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', currentBlog.summary || "");

    if (currentBlog.headerImage) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = currentBlog.headerImage;
    }
  }
}, [currentBlog]);

  if (!currentBlog && pathname.startsWith('/blogs/')) {
    return (
      <PageWrapper>
        <main>
          <div className="container py-20">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
    );
  }

  if (!currentBlog) {
    return notFound();
  }

  return (
    <PageWrapper>
      <main className="is-dark">
        <HeroPrimary title={currentBlog.title}  />
        <BlogDetailsMain blog={currentBlog} />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Blog_Details_Dark;
