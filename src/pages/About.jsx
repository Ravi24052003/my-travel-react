import React from "react";
import OurClients from "../components/about/OurClients";
import TeamSection from "../components/about/TeamSection";
import PricingSection from "../components/about/PricingSection";
import AboutheroSection from "../components/about/Aboutherosection";
import AboutUsSection from "../components/about/AboutUsSection";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import AboutHeroSectionVideo from "../components/about/AboutHeroSectionVideo";

const About = () => {
  return (
    <>
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
