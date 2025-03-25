import React from "react";
import Blogs from "../components/blogs/Blogs";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { Helmet } from "react-helmet-async";

const BlogsPage = () => {
  return (
    <>
    <Helmet>
    <title>Travel Website | Blog</title>
        <meta name="description" content="Travel Website | Blog" />
        <meta name="keywords" content="Travel Website | Blog" />
    <meta property="og:url" content="https://www.travelnworld.com/blog"></meta>
    </Helmet>

    <Navbar />

    <Blogs />

    <Footer />
    </>
  );
};

export default BlogsPage;