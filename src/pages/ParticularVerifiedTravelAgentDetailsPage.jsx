import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import { publicGetParticularVerifiedTravelAgentAsync } from "../features/public/publicSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaSearch,
  FaGlobe
} from "react-icons/fa";
import conf from "../../conf/conf";

const ParticularVerifiedTravelAgentDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const verifiedTravelAgentDetails = useSelector(state => state.public.verifiedTravelAgentDetails);
  const isLoading = useSelector(state => state.public.isLoading);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inquiryType, setInquiryType] = useState("domestic");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  useEffect(() => {
    dispatch(publicGetParticularVerifiedTravelAgentAsync(id));
  }, []);

  const handleSubmitInquiry = () => {
    alert(`Inquiry Submitted for ${inquiryType.toUpperCase()} - Name: ${formData.name}, Email: ${formData.email}`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleSubmitFeedback = () => {
    alert(`Feedback Submitted - Rating: ${rating}, Comment: ${comment}`);
    setRating(0);
    setComment("");
  };


  console.log("verifiedTravelAgentDetails", verifiedTravelAgentDetails);


  const handlePhoneModalOpen = function () {
    setIsPhoneModalOpen(true);
  };

  const handlePhoneModalClose = function () {
    setIsPhoneModalOpen(false);
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className='flex justify-center h-[50vh] items-center'>
          <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600'></div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-4">
          
          {/* Left Box */}
          <div className="w-full md:w-2/3 bg-white shadow-lg p-4 rounded-lg">
            
            {/* Overview Section */}

          <h1 className=" font-bold text-2xl p-4">{verifiedTravelAgentDetails?.company_name}</h1>


          <div className=" flex justify-start items-start gap-10 flex-wrap">
             <div className=" relative">
                                     {/* phone modal starts here */}
                                     {isPhoneModalOpen && (
                                       <div className=" absolute left-[50px] bottom-[-10px] px-4 py-2 bg-[#4267B2] text-white rounded cursor-pointer">
                                         <p className=" pr-4">{verifiedTravelAgentDetails?.phone}</p>
           
                                         <button
                                           className="absolute top-[0px] right-[5px] text-white text-3xl"
                                           onClick={handlePhoneModalClose}
                                         >
                                           &times;
                                         </button>
                                       </div>
                                     )}
                                     {/* phone modal ends here  */}
           
                                     <FaPhone
                                       onClick={() => handlePhoneModalOpen()}
                                       className="h-6 w-6 text-[#4267B2] cursor-pointer"
                                     />
                                   </div>



                        <a
                          href={`https://api.whatsapp.com/send/?phone=${verifiedTravelAgentDetails?.whatsapp}&text&type=phone_number&app_absent=0`}
                          target="_blank"
                          className="text-[#2fb347]"
                        >
                          <FaWhatsapp className="h-6 w-6" />
                        </a>


                        <a
                          href={`${verifiedTravelAgentDetails?.facebook}`}
                          target="_blank"
                          className="text-[#4267B2]"
                        >
                          <FaFacebookF className="h-6 w-6" />
                        </a>


                        <a
                          href={`${verifiedTravelAgentDetails?.instagram}`}
                          target="_blank"
                          className="text-[#E1306C]"
                        >
                          <FaInstagram className="h-6 w-6" />
                        </a>


                        <a
                          href={`${verifiedTravelAgentDetails?.youtube}`}
                          target="_blank"
                          className="text-[#E1306C]"
                        >
                          <FaYoutube className="h-6 w-6" />
                        </a>
            
          </div>

            <div className="border-b p-4 font-semibold text-lg">Overview</div>
            <div className="p-4">
              <div>
                <img src={conf.laravelBaseUrl+"/"+verifiedTravelAgentDetails?.company?.company_logo} alt="" width={100} />
              </div>
              <p className=" py-2">{verifiedTravelAgentDetails?.company?.about_company}</p>
              <p className=" py-2">{verifiedTravelAgentDetails?.company?.company_address}</p>
              <p className=" py-2">{verifiedTravelAgentDetails?.company?.company_city}</p>

              <a
                          href={`${verifiedTravelAgentDetails?.company?.company_website}`}
                          target="_blank"
                          className="text-[#E1306C] my-2"
                        >
                          <FaGlobe className="h-6 w-6" />
                        </a>


{
   Array.isArray(verifiedTravelAgentDetails?.company?.services_offered) &&
   verifiedTravelAgentDetails?.company?.services_offered.length > 0 &&
<h2 className=" bg-red-500 rounded px-3 py-2 text-white inline-block mt-5 mb-2">Services Offered</h2>
}



<div className=" flex justify-start items-start gap-10 flex-wrap">
{
 Array.isArray(verifiedTravelAgentDetails?.company?.services_offered) &&
 verifiedTravelAgentDetails?.company?.services_offered.length > 0 &&
  verifiedTravelAgentDetails.company.services_offered.map((service, index) => (
    <p key={index} className=" bg-blue-600 text-white rounded px-2 py-1">{service?.label}</p>
  ))
}
</div>
 

              
            </div>

            {/* Photos Section */}
            <div className="border-b p-4 font-semibold text-lg">Photos</div>
            <div className="p-4">
              <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 5000 }} loop pagination={{ clickable: true }} spaceBetween={10} slidesPerView={4}>
                {[...Array(6)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <img src={`/dummy-photo${index + 1}.jpg`} className="w-full h-40 object-cover rounded-md cursor-pointer" onClick={() => setSelectedImage(`/dummy-photo${index + 1}.jpg`)} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Feedback Section - Below Inquiry Form */}
            <div className="border-t mt-6 pt-4">
              <h2 className="text-lg font-semibold mb-4">Feedback</h2>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-400"}`} onClick={() => setRating(star)}>★</span>
                ))}
              </div>
              <textarea className="w-full p-2 border rounded-md mt-2" placeholder="Write your feedback..." value={comment} onChange={e => setComment(e.target.value)}></textarea>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-2" onClick={handleSubmitFeedback}>Submit Feedback</button>
            </div>
          </div>

          {/* Right Box */}
          <div className="w-full md:w-1/3 bg-white shadow-lg p-4 rounded-lg md:sticky md:top-20">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p><strong>Phone:</strong> {verifiedTravelAgentDetails?.phone}</p>
            <p><strong>Email:</strong> {verifiedTravelAgentDetails?.email}</p>
            <p><strong>WhatsApp:</strong> {verifiedTravelAgentDetails?.whatsapp}</p>
            <p><strong>Website:</strong> <a href={verifiedTravelAgentDetails?.company?.company_website} className="text-blue-600 underline">{verifiedTravelAgentDetails?.company?.company_website}</a></p>

            {/* Inquiry Form Section - Below Contact Section */}
            <div className="border-t mt-6 pt-4">
              <h2 className="text-lg font-semibold mb-4">Inquiry Form</h2>
              <div className="flex gap-4">
                <button className={`py-2 px-4 rounded-md ${inquiryType === "domestic" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setInquiryType("domestic")}>Domestic</button>
                <button className={`py-2 px-4 rounded-md ${inquiryType === "international" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setInquiryType("international")}>International</button>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium">Name</label>
                <input type="text" name="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full p-2 border rounded-md mb-2" placeholder="Enter your name" />
                <label className="block text-sm font-medium">Email</label>
                <input type="email" name="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full p-2 border rounded-md mb-2" placeholder="Enter your email" />
                <label className="block text-sm font-medium">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full p-2 border rounded-md mb-2" placeholder="Enter your phone" />
                <label className="block text-sm font-medium">Message</label>
                <textarea name="message" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full p-2 border rounded-md mb-2" placeholder="Write your inquiry..."></textarea>
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700" onClick={handleSubmitInquiry}>Submit Inquiry</button>
              </div>
            </div>

            
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ParticularVerifiedTravelAgentDetailsPage;
