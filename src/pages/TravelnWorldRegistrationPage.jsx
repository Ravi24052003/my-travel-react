import React, { useEffect, useState } from "react";
import { Users, UserCircle, Briefcase, MapPin, BarChart3, FileText,Handshake, Star, Quote, ClipboardList, Monitor, Share, Globe, TrendingUp, Lightbulb, Mail,BarChart } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { signupAsync } from "../features/signup/signupSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export default function TravelnWorldRegistrationPage() {
const dispatch = useDispatch();

const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeForm, setActiveForm] = useState("signin");

  

  const [flashMessage, setFlashMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    location: "",
    your_requirements: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFormData = (e) => {
    e.preventDefault();
    setIsLoading(true);

    dispatch(signupAsync(formData))
      .then(() => {
        setIsLoading(false);
        setFlashMessage("Form submitted successfully! You will be contacted soon.");
        setFormData({ name: "", company_name: "", email: "", phone: "", location: "", your_requirements: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    if (flashMessage) {
      setTimeout(() => {
        setFlashMessage("");
      }, 5000);
    }
  }, [flashMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };





  function isRowLastElement(index) {
    const columns = 3; // Adjust based on grid-cols
    return (index + 1) % columns === 0;
  }
  
  function isLastElement(index) {
    return index === steps.length - 1;
  }

  const steps = [
    {
      icon: <UserCircle className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Create Agent Profile",
      description: "Add Basic Details & Register In 2 Minutes",
    },
    {
      icon: <ClipboardList className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Listing Dashboard",
      description: "Manage Your Listings Effectively",
    },
    {
      icon: <Monitor className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Access Own Dashboard",
      description: "Monitor Your Activities Seamlessly",
    },
    {
      icon: <Share className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Integrate Social Media",
      description: "Connect Easily With Your Audience",
    },
    {
      icon: <Globe className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "SMO With Social Links",
      description: "Optimize Your Social Media Presence",
    },
    {
      icon: <TrendingUp className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Daily Boosting",
      description: "Boost Your Content Daily for Growth",
    },
    {
      icon: <FileText className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Unlimited Itinerary Posting",
      description: "Post Unlimited Travel Itineraries",
    },
    {
      icon: <Lightbulb className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Business Ideas",
      description: "Receive Guidance To Expand Your Business",
    },
    {
      icon: <Mail className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Receive Inbounded Leads",
      description: "Get Leads Delivered Directly to You",
    },
    {
      icon: <Handshake className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Sell Travel Packages",
      description: "Get In Touch With Travelers for Increased Sales",
    },
    {
      icon: <BarChart className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Build Your Business Growth",
      description: "Expand Your Business with Us",
    },
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);





  const renderForm = () => {
    if (activeForm === "signin") {
      return (
        <form className="space-y-4">
          <div>
            <label htmlFor="signin-email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="signin-email"
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="signin-password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="signin-password"
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      );
    } else {
      return (
        <form className="space-y-4">
          <div>
            <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="signup-name"
              placeholder="Enter your name"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="signup-email"
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="signup-password"
              placeholder="Create a password"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="signup-confirm-password"
              placeholder="Confirm your password"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      );
    }
  };
  return (
    <>
     <Navbar />
       

        <div className=" bg-gray-100 flex flex-col items-center overflow-x-hidden">

        <video
        autoPlay
        loop
        muted
        className="w-full h-full object-contain md:object-cover block md:hidden"
      >
        <source src="/Videos/unique_zone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        {/* Header Section with Registration Form */}
        <header className="relative w-full h-[450px]  bg-contain bg-no-repeat bg-center hidden md:block" >

          {/* Background Video */}
        <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-contain md:object-cover hidden md:block"
      >
        <source src="/Videos/unique_zone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <div className="absolute inset-0 bg-opacity-50 flex flex-col lg:flex-row justify-between items-center px-4 lg:px-[70px]">
      <div className="text-white max-w-md text-center lg:text-left lg:mb-0">
        {/* <h1 className="text-2xl lg:text-4xl font-bold">
          Looking For <span className="text-yellow-400">Genuine Travel Leads?</span>
        </h1> */}
      </div>
      <div className="bg-white px-4 py-2 shadow-lg h-auto rounded-md w-full max-w-sm hidden sm:block">
  {flashMessage && (
    <div className="bg-white text-green-500 opacity-75 text-center font-bold p-2 rounded mb-2">
      {flashMessage}
    </div>
  )}
  
  <h2 className="text-lg lg:text-xl font-bold text-center text-orange-600">
    List Your Company <span className="text-red-500">FREE</span>
  </h2>
  <p className="text-center text-gray-500">
    & Expand Your Business Quickly!
  </p>

  <form onSubmit={handleFormData}>

    <div className="mb-1">
      <label htmlFor="name" className="block text-gray-700 text-sm">Your Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border rounded-md p-1 text-sm"
      />
    </div>

    <div className="mb-1">
      <label htmlFor="phone" className="block text-gray-700 text-sm">Mobile No</label>
      <div className="flex">
        <span className="inline-flex items-center px-2 bg-gray-200 text-gray-700 rounded-l-md text-sm">+91</span>
        <input
          value={formData.phone}
          onChange={handleChange}
          required
          id="phone"
          type="number"
          name="phone"
          placeholder="Enter Your Mobile No"
          className="w-full border rounded-r-md p-1 text-sm"
        />
      </div>
    </div>

    <div className="mb-1">
      <label htmlFor="email" className="block text-gray-700 text-sm">Email ID</label>
      <input
        value={formData.email}
        onChange={handleChange}
        required
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email ID"
        className="w-full border rounded-md p-1 text-sm"
      />
    </div>

    <div className="mb-1">
      <label htmlFor="company_name" className="block text-gray-700 text-sm">Company Name</label>
      <input
        value={formData.company_name}
        onChange={handleChange}
        required
        id="company_name"
        type="text"
        name="company_name"
        placeholder="Enter Company Name"
        className="w-full border rounded-md p-1 text-sm"
      />
    </div>

    <div className="mb-1">
      <label htmlFor="business-type" className="block text-gray-700 text-sm">Business Type</label>
      <select id="business-type" name="business-type" className="w-full border rounded-md p-1 text-sm">
        <option value="">Select Business Type</option>
        <option value="travel-agent">Travel Agent</option>
        <option value="tour-operator">Tour Operator</option>
        <option value="hotel">Hotel</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="flex items-center space-x-2 mb-1">
      <input type="checkbox" id="terms" name="terms" className="h-4 w-4" />
      <label htmlFor="terms" className="text-gray-600 text-xs">
        Yes, I agree to all the <a href="#" className="text-blue-600 underline">Terms & Conditions</a>, <a href="#" className="text-blue-600 underline">Privacy Policy</a> stated herein.
      </label>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-sm"
    >
      Join For Free
    </button>

  </form>
</div>

    </div>
  </header>




  <div className="bg-white px-4 py-2 shadow-lg h-auto rounded-md w-full max-w-sm md:hidden block">
  {flashMessage && (
    <div className="bg-white text-green-500 opacity-75 text-center font-bold p-2 rounded mb-2">
      {flashMessage}
    </div>
  )}
  
  <h2 className="text-lg lg:text-xl font-bold text-center text-orange-600">
    List Your Company <span className="text-red-500">FREE</span>
  </h2>
  <p className="text-center text-gray-500">
    & Expand Your Business Quickly!
  </p>

  <form onSubmit={handleFormData}>

    <div className="mb-1">
      <label htmlFor="name" className="block text-gray-700 text-sm">Your Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border rounded-md p-1 text-sm"
      />
    </div>

    <div className="mb-1">
      <label htmlFor="phone" className="block text-gray-700 text-sm">Mobile No</label>
      <div className="flex">
        <span className="inline-flex items-center px-2 bg-gray-200 text-gray-700 rounded-l-md text-sm">+91</span>
        <input
          value={formData.phone}
          onChange={handleChange}
          required
          id="phone"
          type="number"
          name="phone"
          placeholder="Enter Your Mobile No"
          className="w-full border rounded-r-md p-1 text-sm"
        />
      </div>
    </div>

    <div className="mb-1">
      <label htmlFor="email" className="block text-gray-700 text-sm">Email ID</label>
      <input
        value={formData.email}
        onChange={handleChange}
        required
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email ID"
        className="w-full border rounded-md p-1 text-sm"
      />
    </div>

    <div className="mb-1">
      <label htmlFor="company_name" className="block text-gray-700 text-sm">Company Name</label>
      <input
        value={formData.company_name}
        onChange={handleChange}
        required
        id="company_name"
        type="text"
        name="company_name"
        placeholder="Enter Company Name"
        className="w-full border rounded-md p-1 text-sm"
      />
    </div>

    <div className="mb-1">
      <label htmlFor="business-type" className="block text-gray-700 text-sm">Business Type</label>
      <select id="business-type" name="business-type" className="w-full border rounded-md p-1 text-sm">
        <option value="">Select Business Type</option>
        <option value="travel-agent">Travel Agent</option>
        <option value="tour-operator">Tour Operator</option>
        <option value="hotel">Hotel</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="flex items-center space-x-2 mb-1">
      <input type="checkbox" id="terms" name="terms" className="h-4 w-4" />
      <label htmlFor="terms" className="text-gray-600 text-xs">
        Yes, I agree to all the <a href="#" className="text-blue-600 underline">Terms & Conditions</a>, <a href="#" className="text-blue-600 underline">Privacy Policy</a> stated herein.
      </label>
    </div>

    <button 
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-sm"
    >
      Join For Free
    </button>

  </form>
</div>



  
  
  
  
        {/* Why Choose Section */}
        <section className="bg-gray-50 py-16 w-full text-center">
        <h2 className="text-4xl font-bold mb-8">
      How You <span className="text-blue-600">Grow with travelnworld.com</span>
    </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
            <div className=" group flex flex-col items-center">
              <Users className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-bold group-hover:text-blue-700">50000 +</h2>
              <p className="text-gray-600">Monthly Travel Leads/Enquiries</p>
            </div>
            <div className=" group flex flex-col items-center">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4  group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-bold group-hover:text-blue-700">80000 +</h2>
              <p className="text-gray-600">Travel Packages</p>
            </div>
            <div className="group flex flex-col items-center">
              <MapPin className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-bold group-hover:text-blue-700">2500+</h2>
              <p className="text-gray-600">Destinations</p>
            </div>
            <div className="group flex flex-col items-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-bold group-hover:text-blue-700">Free Agent Panel</h2>
              <p className="text-gray-600">(Lead Management Panel)</p>
            </div>
          </div>
  {/* grow section button */}
          <div className="mt-8">
            <button onClick={toggleModal} className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 ">
              Join For Free
            </button>
          </div>
           {/* Modal */}
           {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-lg">
    {/* Close Button */}
    <button
        onClick={toggleModal}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
      >
        <span className="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 8.586L15.293 3.293a1 1 0 011.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 011.414-1.414L10 8.586z" clipRule="evenodd" />
        </svg>
      </button>
    
  <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
    <div className="flex justify-around mb-6">
      <button
        onClick={() => setActiveForm("signin")}
        className={`px-6 py-2 rounded-lg ${
          activeForm === "signin" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        Sign In
      </button>
      <button
        onClick={() => setActiveForm("signup")}
        className={`px-6 py-2 rounded-lg ${
          activeForm === "signup" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        Sign Up
      </button>
    </div>
    {renderForm()}
  </div>
  </div>
</div>
)}

        </section>
  
        {/* Trusted Agents Section */}
        <section className="py-16 bg-gray-50 w-full text-center">
          <h2 className="text-4xl font-bold mb-8">1200+ <span className="text-blue-600">Trusted Agents</span></h2>
          {/* <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
            <img src="/images/Andaman-1.png" alt="Agent 1" className="w-full h-auto" />
            <img src="/images/Andaman-2.png" alt="Agent 2" className="w-full h-auto" />
            <img src="/images/Andaman-3.png" alt="Agent 3" className="w-full h-auto" />
            <img src="/images/Andaman-4.png" alt="Agent 4" className="w-full h-auto" />
            <img src="/images/Andaman-5.png" alt="Agent 5" className="w-full h-auto" />
            <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
            <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
            <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
            <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
            <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
          </div> */}
        </section>
  
  
         {/* How You Grow Section */}
  
         <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-100 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          How You <span className="text-blue-600">Grow with travelnworld.com</span>
        </h2>
  
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group ${isRowLastElement(index) || isLastElement(index) ? "" : "after:content-[''] after:absolute after:right-[-30px] after:top-[63px] after:w-[61px] after:h-[35px] after:bg-[url('https://static.tourtravelworld.com/images/icons/right-sign.png')] after:bg-no-repeat"}`}
            >
              <div
                className="w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mt-6 text-gray-800 group-hover:text-blue-600">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-gray-800">{step.description}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-12">
          <button onClick={toggleModal} className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-md hover:bg-blue-700 transition duration-300">
            Join For Free
          </button>
        </div>
      </section>
    
    <section className="py-16 bg-gray-100 w-full">
          <h2 className="text-2xl font-bold text-center mb-8">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Slider {...testimonialSettings}>
              <div className="text-center p-6">
                <Quote className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 italic">"Very good service provided for us."</p>
              </div>
              <div className="text-center p-6">
                <Quote className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 italic">
                  "I am using tour travel services and my first experience is awesome. Very nice."
                </p>
              </div>
              <div className="text-center p-6">
                <Quote className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 italic">
                  "I really wish to make the best of my holidays this year with you guys."
                </p>
              </div>
            </Slider>
          </div>
        </section>
  
  
  
      </div>


    
  
   <Footer />

    </>
  );
}