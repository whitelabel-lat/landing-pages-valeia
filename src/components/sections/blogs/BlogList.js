"use client";
import BlogPrimary from "@/components/shared/blogs/BlogPrimary";
import Pagination from "@/components/shared/others/Pagination";
import { useEffect, useState } from "react";

const BlogList = ({ blogs = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const limit = 4;
  const skip = currentPage * limit;
  const totalBlogs = blogs?.length || 0;
  const totalPages = Math.ceil(totalBlogs / limit);
  const paginationItems = [...Array(totalPages)];

  useEffect(() => {
    if (blogs?.length) {
      const blogsToShow = blogs.slice(skip, skip + limit);
      setCurrentBlogs(blogsToShow);
    }
  }, [blogs, skip]);

  const handlePagination = (id) => {
    if (typeof id === "number") {
      setCurrentPage(id);
    } else if (id === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (id === "next" && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-gray-500">No blogs found</p>;
  }

  return (
    <div className="space-y-[35px]">
      {currentBlogs.map((blog) => (
        <BlogPrimary
          key={blog.slug}
          blog={{
            title: blog.title,
            desc: blog.summary,
            slug: blog.slug,
            image: blog.headerImage,
            date: new Date(blog.createdAt).getDate(),
            month: new Date(blog.createdAt).toLocaleString("default", { month: "short" })
          }}
        />
      ))}

      {totalPages > 1 && (
        <Pagination
          pages={paginationItems}
          totalItems={totalBlogs}
          handlePagesnation={handlePagination}
          currentPage={currentPage}
          skip={skip}
          limit={limit}
        />
      )}
    </div>
  );
};

export default BlogList;