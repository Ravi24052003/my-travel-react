import React from "react";
import OurClients from "../components/about/OurClients";
import TeamSection from "../components/about/TeamSection";
import PricingSection from "../components/about/PricingSection";
import AboutheroSection from "../components/about/Aboutherosection";
import AboutUsSection from "../components/about/AboutUsSection";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import AboutHeroSectionVideo from "../components/about/AboutHeroSectionVideo";
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
    <Helmet>
        <title>Travel Website | About</title>
        <meta name="description" content="Travel Website | About" />
        <meta name="keywords" content="Travel Website | About" />
        <meta property="og:url" content="https://www.travelnworld.com/about"></meta>
    </Helmet>

      <Navbar />
      <AboutHeroSectionVideo />
      <AboutheroSection />
      {/* <OurClients />
      <AboutUsSection /> */}
      {/* <TeamSection /> */}
      <PricingSection />
      <Footer />

    </>
  );
};

export default About;
