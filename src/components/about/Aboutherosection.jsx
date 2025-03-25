import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const TravelNWorld = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/travel-banner.jpg')" }}>
        <div className="bg-gradient-to-r from-black to-transparent w-full h-full flex flex-col items-start justify-center text-left px-10 md:px-20">
          <h1 className="text-6xl font-extrabold text-white mb-4">
            Travel n World
          </h1>
          <p className="text-2xl text-white max-w-2xl">
            Transforming Travel Businesses with Innovation and Connectivity
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="w-full md:w-1/2">
          <img src="/Images/aboutPageImages/abouthero.png" alt="Company Overview" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold text-blue-700 mb-6">Company Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Travel n World is a global B2B travel platform, empowering travel professionals with marketing, networking, and expansion solutions.
            We help travel agents grow their business by providing reliable B2B travel services across India. As a travel agent supplier, we work closely with agents to offer great deals on hotels, tours, and transport.
 With our DMC travel partnerships in India, we make it easier for agents to arrange complete travel experiences, from local sightseeing to full holiday packages. 
          </p>
          <ul className="space-y-3 text-lg">
            <li><strong>Company Name:</strong> Travel n World</li>
            <li><strong>Tagline:</strong> Grow Your Travel Business Digitally!</li>
            <li><strong>Business Type:</strong> B2B Travel Promotion & Networking Platform</li>
            <li><strong>Establishment Year:</strong> 2021</li>
            <li><strong>Headquarters:</strong> Delhi, India</li>
          </ul>
        </div>
      </section>

      {/* Core Services */}
      <section className=" text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-red-600 mb-10">Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["B2B Travel Networking", "Brand Promotion", "Digital Marketing & Social Media", "Website & SEO Optimization", "Exclusive Business Listings", "Travel Industry Events & Webinars"].map((service, index) => (
              <div key={index} className="bg-white text-blue-800 p-8 rounded-lg shadow-xl text-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold mb-6 text-yellow-400">Get in Touch</h2>
            <p className="text-lg mb-4">📍 34, Sewak Park, Dwarka More Metro, New Delhi-110059</p>
            <p className="text-lg mb-6">📞 1800-121-4252 | 📧 info@travelnworld.com</p>
            <div className="flex justify-center md:justify-start space-x-8">
              <a href="https://www.facebook.com/profile.php?id=100091741043983" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-md hover:bg-blue-500 transition">
                <FaFacebookF className="h-6 w-6 text-blue-700" />
              </a>
              <a href="https://www.instagram.com/travelnworld_official/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-md hover:bg-pink-500 transition">
                <FaInstagram className="h-6 w-6 text-pink-700" />
              </a>
              <a href="https://www.youtube.com/@travelnworld_official" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-md hover:bg-red-500 transition">
                <FaYoutube className="h-6 w-6 text-red-700" />
              </a>
            </div>
          </div>
          <div>
            <img src="/Images/aboutPageImages/about.jpg" alt="Contact Us" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelNWorld;
