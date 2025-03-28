import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import {
  publicGetAllBlogsAsync,
  publicGetRecentBlogsAsync,
  setParticularBlog,
} from "../../features/public/publicSlice";
import conf from "../../../conf/conf";
import "./blogDetail.css";

const BlogDetail = () => {
  const { blog_slug } = useParams();
  const dispatch = useDispatch();

  const allBlogs = useSelector((state) => state.public.allBlogs);
  const recentBlogs = useSelector((state) => state.public.recentBlogs);
  const particularBlog = useSelector((state) => state.public.particularBlog);
  const isLoading = useSelector((state) => state.public.isLoading);

  useEffect(() => {
    if (allBlogs.length === 0) {
      dispatch(publicGetAllBlogsAsync()).then(() => {
        dispatch(setParticularBlog(blog_slug));
      });
    } else {
      dispatch(setParticularBlog(blog_slug));
    }

    if (recentBlogs.length === 0) {
      dispatch(publicGetRecentBlogsAsync());
    }

    window.scrollTo(0, 0);
  }, [dispatch, blog_slug, recentBlogs]);

  let newParticularBlog = { ...particularBlog };

  newParticularBlog.blog_content = newParticularBlog?.blog_content
    ?.replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <div className="flex justify-center h-[50vh] items-center">
          <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
      ) : (
        <div className="md:flex md:justify-between px-4 md:space-x-8 mt-8">
          {/* Blog Content */}
          <div className="bg-white p-6 shadow-lg rounded-lg flex-grow">
            {particularBlog?.blog_image && (
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={`${conf.laravelBaseUrl}/${particularBlog?.blog_image}`}
                  alt={particularBlog?.blog_image}
                  className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            {/* Blog Title & Meta Info */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 hover:text-indigo-600 transition-colors">
                {particularBlog?.blog_title}
              </h1>
              <div className="text-sm text-gray-500 flex flex-col items-center space-y-2">
                <span className="bg-indigo-100 text-indigo-900 py-1 px-3 rounded-full">
                  {particularBlog?.blog_category}
                </span>
                <div>
                  {particularBlog?.blog_author_name && (
                    <span>
                      By <span className="font-semibold">{particularBlog?.blog_author_name}</span>
                    </span>
                  )}
                  <span className="mx-2">•</span>
                  <span>{particularBlog?.created_at}</span>
                </div>
              </div>
            </div>

            {/* Blog Description */}
            <div className="border-t border-gray-300 my-6"></div>
            <div
              id="particular-blog-description"
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: particularBlog?.blog_description }}
            />
            <div className="border-t border-gray-300 my-6"></div>

            {/* Blog Content */}
            <div
              id="particular-blog-content"
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: newParticularBlog?.blog_content }}
            />

            {/* Author Bio */}
            {particularBlog?.blog_author_name && (
              <div className="mt-10 border-t border-gray-300 pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">About the Author</h3>
                <p className="text-sm text-gray-600">
                  {particularBlog?.blog_author_name} is a travel enthusiast who loves exploring new
                  cultures and places.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar with Contact Us form */}
          <div className="bg-gray-100 rounded-lg p-6 w-full md:w-1/3">
            {/* Recent Blogs Section */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Blogs</h3>
            <div className="space-y-4 mb-8">
              {recentBlogs?.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`${conf.laravelBaseUrl}/${post.blog_image}`}
                    alt={post?.title}
                    className="h-40 w-full object-cover rounded-md mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                    {post.blog_title}
                  </h4>
                  <Link
                    to={`/blog/${post?.blog_slug}`}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              ))}
            </div>

            {/* Contact Us Form */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default BlogDetail;
