import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  publicGetAllBlogCategoriesAsync,
  publicGetAllBlogsAsync,
} from "../../features/public/publicSlice";
import conf from "../../../conf/conf";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Blogs = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.public.isLoading);
  const allBlogs = useSelector((state) => state.public.allBlogs);
  const blogCategories = useSelector((state) => state.public.blogCategories);

  const [category, setCategory] = useState("");
  const [visibleBlogsCount, setVisibleBlogsCount] = useState(8); // Initial visible blogs (2 rows, assuming 4 blogs per row)
  const blogsPerRow = 4; // Number of blogs in one row

  useEffect(() => {
    if (allBlogs.length === 0) {
      dispatch(publicGetAllBlogsAsync());
    }
  }, []);

  useEffect(() => {
    if (blogCategories.length === 0) {
      dispatch(publicGetAllBlogCategoriesAsync());
    }
  }, []);

  const handleShowMore = () => {
    setVisibleBlogsCount((prev) => prev + blogsPerRow * 2); // Show 2 more rows
  };

  const handleShowLess = () => {
    setVisibleBlogsCount((prev) =>
      prev - blogsPerRow * 2 > blogsPerRow * 2 ? prev - blogsPerRow * 2 : blogsPerRow * 2
    ); // Hide 2 rows but ensure a minimum of 2 rows visible
  };

  const resetCategory = () => {
    setCategory("");
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-[50vh] items-center">
          <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
      ) : (
        <section className="w-full">
          <video
            autoPlay
            loop
            muted
            className="w-full md:h-[60vh] object-cover"
          >
            <source src="/Videos/blog.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="max-w-7xl mx-auto py-10 px-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold flex-1">
                Latest Posts
              </h2>
              <div className="flex items-center gap-2">
                <select
                  className="w-[200px] py-2 px-3 bg-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:border-indigo-700"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {blogCategories?.map((category) => (
                    <option key={category?.id} value={category?.category_name}>
                      {category?.category_name}
                    </option>
                  ))}
                </select>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={resetCategory}
                >
                  <RxCross2 size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {category
                ? allBlogs
                    ?.filter((post) => post?.blog_category === category)
                    .slice(0, visibleBlogsCount)
                    .map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))
                : allBlogs
                    ?.slice(0, visibleBlogsCount)
                    .map((post) => <BlogCard key={post.id} post={post} />)}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              {visibleBlogsCount < allBlogs.length && (
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={handleShowMore}
                >
                  Show More
                </button>
              )}
              {visibleBlogsCount > blogsPerRow * 2 && (
                <button
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  onClick={handleShowLess}
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

const BlogCard = ({ post }) => (
  
  <div className="relative cursor-pointer border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white group max-w-sm">
   <Link
          to={`/blog/${post?.blog_slug}`}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
    <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
      <img
        src={`${conf.laravelBaseUrl}/${post?.blog_image}`}
        alt=""
        className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
      />
    </div>
    </Link>
    
    <div className="p-4">
    <Link
          to={`/blog/${post?.blog_slug}`}
          className="text-blue-600 text-sm font-medium  "
        >
      <div className="flex justify-between items-center">
        <div className="bg-blue-100 px-2 py-1 rounded-full text-xs font-medium text-blue-700">
          {post?.blog_category}
        </div>
        <div className="text-gray-500 text-xs">{post?.created_at}</div>
      </div>
      <h1 className="e text-md  font-semibold mt-2 text-gray-800 group-hover:text-blue-600">
        {post?.blog_title}
      </h1>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
        {post?.blog_description}
      </p>
      </Link>
      <div className="flex justify-between items-center mt-4">
        
          {post?.blog_author_name}
        
        <div className="flex gap-2">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              `${window.location.origin}/blog/${post?.blog_slug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={16} />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              `${window.location.origin}/blog/${post?.blog_slug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `${post?.blog_title}: ${window.location.origin}/blog/${post?.blog_slug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700"
          >
            <FaWhatsapp size={16} />
          </a>
          <a
            href={`https://x.com/intent/tweet?url=${encodeURIComponent(
              `${window.location.origin}/blog/${post?.blog_slug}`
            )}&text=${encodeURIComponent(post?.blog_title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <RxCross2 size={16} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Blogs;