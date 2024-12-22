"use client";

import { useEffect } from "react";
import BlogsMain from "@/components/layout/main/Blogs";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";

const Blog_Dark = () => {
  const { blogPosts } = useGetStaticProps();

  const latestBlog = blogPosts?.[0];

  const metadata = {
    title: latestBlog ? `${latestBlog.title} | Blog` : "Blog | Vale.ia asistencia artificial para vender más",
    description: latestBlog ? latestBlog.summary : "Blog | Vale.ia asistencia artificial para vender más",
  };

   useEffect(() => {
      document.title = metadata.title;
  
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", metadata.description);
      } else {
        const newMetaDescription = document.createElement("meta");
        newMetaDescription.name = "description";
        newMetaDescription.content = metadata.description;
        document.head.appendChild(newMetaDescription);
      }
  
      if (latestBlog?.headerImage) {
        let favicon = document.querySelector("link[rel~='icon']");
        if (!favicon) {
          favicon = document.createElement("link");
          favicon.rel = "icon";
          document.head.appendChild(favicon);
        }
        favicon.href = latestBlog.headerImage;
      }
    }, [metadata.title, metadata.description, latestBlog]);

  return (
    <PageWrapper>
      <main className="is-dark">
        <BlogsMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Blog_Dark;
