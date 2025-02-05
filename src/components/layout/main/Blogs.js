"use client";
import { useState, useEffect } from "react";
import { useGetStaticProps } from "@/hooks/useGetStaticProps";
import BlogList from "@/components/sections/blogs/BlogList";
import BlogsSidebar from "@/components/shared/blogs/BlogsSidebar";
import { useSearchParams } from "next/navigation";

const BlogsPrimary = () => {
  const { blogPosts, categories } = useGetStaticProps();
  const searchParams = useSearchParams(); // Leer parámetros de la URL
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Leer la categoría de los parámetros de la URL al cargar
  useEffect(() => {
    const category = searchParams.get("category");
    setSelectedCategory(category);
  }, [searchParams]);

  // Filtrar los blogs según la categoría seleccionada
  const filteredBlogs = selectedCategory
    ? blogPosts.filter((blog) =>
        blog.categories.some((category) => category.slug === selectedCategory)
      )
    : blogPosts;

  return (
    <section>
      <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
          {/* blogs */}
          <div className="lg:col-start-1 lg:col-span-8">
            <BlogList blogs={filteredBlogs} />
          </div>
          {/* blog sidebar */}
          <div className="lg:col-start-9 lg:col-span-4">
            <BlogsSidebar
              categories={categories}
              onCategorySelect={(slug) => setSelectedCategory(slug)}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPrimary;
