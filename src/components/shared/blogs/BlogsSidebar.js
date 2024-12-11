import React from "react";
import BlogCategories from "./BlogCategories";
import RecentPosts from "./RecentPosts";



const BlogsSidebar = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <div className="flex flex-col">
      {/* categories */}
      <BlogCategories 
        categories={categories} 
        onCategorySelect={onCategorySelect} 
        selectedCategory={selectedCategory} 
      />
      {/* recent posts */}
      <RecentPosts />
    </div>
  );
};

export default BlogsSidebar;

