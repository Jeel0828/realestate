import SectionHeading from "@/components/Helper/SectionHeading";
import { blogs } from "@/data/data";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Check Our Blog" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 items-center mt-16">
          {blogs.map((blog, i) => {
            return (
              <div
                key={blog.id}
                data-aos="zoom-out"
                data-aos-delay={`${i * 150}`}
                data-aos-anchor-placement="top-center"
              >
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
