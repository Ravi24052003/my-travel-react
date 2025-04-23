"use client";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall, MdOutlineMessage } from "react-icons/md";
import api from "../../api.js";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, YoutubeIcon } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("Submit");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [flashMessage, setFlashMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const contactSubmit = async (e) => {
    e.preventDefault();

    const registerBody = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    setIsLoading(true);

    api.postReq("contact-us", registerBody)
    .then((data)=>{
     console.log("contact-us", data)
     setIsLoading(false);

     setFlashMessage("Form submitted successfully you will be contacted soon");
     console.log("successfully refgsitered eith us", data);
 
     setFormData({ name: "", email: "", phone: "", message: "" });
    })
    .catch((error)=>{
      setIsLoading(false);
      console.log("oopps seomtjing went wrong", error)
    })
  };


  useEffect(()=>{
    if(flashMessage){
      setTimeout(()=>{
      setFlashMessage("");
      }, 5000)
    }
    }, [flashMessage]);
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

  return (
    <section className="bg-gradient-to-r from-white-100 to white-300 py-20">
      <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          We’d love to hear from you. Whether you have questions, feedback, or need support, our team is here to help!
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
              <p className="text-gray-600">Reach out to us directly through the information below.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600" />
                  <p className="text-gray-600">1800-121-4252</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-600" />
                  <p className="text-gray-600">info@travelnworld.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" />
                  <p className="text-gray-600">34, Sewak Park (1st floor), Dwarka More Metro, Near Metro
                  Pillar No-772, New Delhi-110059</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Twitter"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="#"
                  className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Our Location</h2>
          <div className="w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3576360114916!2d77.03171221069958!3d28.619041584592416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05b8b8a64bdd%3A0x7fe5e4357250f77b!2sAdmire%20Holidays!5e0!3m2!1sen!2sin!4v1745401778544!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;