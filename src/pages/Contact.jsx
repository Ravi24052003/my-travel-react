import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import ContactForm from "../components/contact/ContactForm";
import ContactPageVideoSection from "../components/contact/ContactPageVideoSection";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
    <Helmet>
    <title>Travel Website | Contact</title>
        <meta name="description" content="Travel Website | Contact" />
        <meta name="keywords" content="Travel Website | Contact" />
    <meta property="og:url" content="https://www.travelnworld.com/contact"></meta>
    </Helmet>
    
      <Navbar />
      <ContactPageVideoSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
