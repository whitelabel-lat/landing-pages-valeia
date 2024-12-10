"use client";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export function useGetStaticProps() {
  const [data, setData] = useState({
    seoTitle: "",
    seoDescription: "",
    canonicalUrl: "",
    featuredImage: "",
    hideFromSearchEngines: false,
    excludeLinksFromRankings: false,
    topSections: [],
    blogPosts: [],
    currentBlog: null
  });

  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const isSingleBlog = pathname.startsWith('/blogs/') && slug !== 'blogs';

  useEffect(() => {
    async function fetchData() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        });

        let currentBlog = null;
        let blogEntries = null;

        if (isSingleBlog) {
          
          const blogResponse = await client.getEntries({
            content_type: 'blogPost',
            'fields.slug[match]': slug,
            limit: 1,
            include: 2
          });

          if (blogResponse.items.length > 0) {
            const blog = blogResponse.items[0];
            currentBlog = {
              title: blog.fields.title,
              slug: blog.fields.slug,
              summary: blog.fields.summary,
              content: blog.fields.content,
              headerImage: blog.fields.headerImage?.fields?.file?.url ? 
                `https:${blog.fields.headerImage.fields.file.url}` : "",
              sections: blog.fields.sections,
              createdAt: blog.sys.createdAt
            };
          }
        }

        
        blogEntries = await client.getEntries({
          content_type: 'blogPost',
          order: '-sys.createdAt',
          include: 2
        });

        
        const pageEntries = await client.getEntries({
          content_type: 'page',
          include: 4,
          'fields.slug': pathname,
        });

        const entry = pageEntries?.items?.[0]?.fields || [];
        
        const sectionData = {
          seoTitle: entry.seo?.fields.seoTitle || "Vale.ia asistencia artificial para vender más",
          seoDescription: entry.seo?.fields?.seoDescription || currentBlog?.summary,
          canonicalUrl: entry.seo?.fields?.canonicalUrl || "",
          featuredImage: entry.seo?.fields?.featuredImage?.fields?.file?.url || "",
          hideFromSearchEngines: entry.seo?.fields?.hidePageFromSearchEnginesNoindex || false,
          excludeLinksFromRankings: entry.seo?.fields?.excludeLinksFromSearchRankingsNofollow || false,
          topSections: entry.topSection?.map((section) => ({
            fields: section.fields,
            sys: section.sys,
          })) || [],
          blogPosts: blogEntries.items.map(post => ({
            title: post.fields.title,
            slug: post.fields.slug,
            summary: post.fields.summary,
            content: post.fields.content,
            headerImage: post.fields.headerImage?.fields?.file?.url ? 
              `https:${post.fields.headerImage.fields.file.url}` : "",
            sections: post.fields.sections,
            createdAt: post.sys.createdAt
          })),
          currentBlog
        };

        setData(sectionData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [pathname, slug, isSingleBlog]);

  return data;
}