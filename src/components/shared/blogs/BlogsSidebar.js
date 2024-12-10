import React from "react";
import BlogCategories from "./BlogCategories";
import RecentPosts from "./RecentPosts";



const BlogsSidebar = () => {
  return (
    <div className="flex flex-col">

      {/* categories */}
      <BlogCategories />
      {/* recent posts */}
      <RecentPosts />

    </div>
  );
};

export default BlogsSidebar;
