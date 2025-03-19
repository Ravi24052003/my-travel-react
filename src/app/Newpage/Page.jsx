import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto p-4">
      {/* Left Box */}
      <div className="w-full md:w-2/3 bg-white shadow-lg p-4 rounded-lg">
        {/* Overview Section */}
        <div className="border-b p-4 font-semibold text-lg">Overview</div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Awards</h3>
          <img src="/dummy-award.jpg" alt="Award" className="w-full h-40 object-cover rounded-md mt-2" />
          <h3 className="text-lg font-semibold mt-4">Certificates</h3>
          <img src="/dummy-certificate.jpg" alt="Certificate" className="w-full h-40 object-cover rounded-md mt-2" />
        </div>

        {/* Photos Section */}
        <div className="border-b p-4 font-semibold text-lg">Photos</div>
        <div className="p-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            pagination={{ clickable: true }}
          >
            <SwiperSlide><img src="/dummy-photo1.jpg" className="w-full h-40 object-cover rounded-md" /></SwiperSlide>
            <SwiperSlide><img src="/dummy-photo2.jpg" className="w-full h-40 object-cover rounded-md" /></SwiperSlide>
            <SwiperSlide><img src="/dummy-photo3.jpg" className="w-full h-40 object-cover rounded-md" /></SwiperSlide>
            <SwiperSlide><img src="/dummy-photo4.jpg" className="w-full h-40 object-cover rounded-md" /></SwiperSlide>
            <SwiperSlide><img src="/dummy-photo5.jpg" className="w-full h-40 object-cover rounded-md" /></SwiperSlide>
            <SwiperSlide><img src="/dummy-photo6.jpg" className="w-full h-40 object-cover rounded-md" /></SwiperSlide>
          </Swiper>
        </div>

        {/* Quick Links Section */}
        <div className="border-b p-4 font-semibold text-lg">Quick Links</div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Established Company</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3 className="text-lg font-semibold mt-4">First Topic: I Like</h3>
          <p className="mt-2">Positive feedback and features.</p>
          <h3 className="text-lg font-semibold mt-4">Second Topic: Dislike</h3>
          <p className="mt-2">Areas of improvement.</p>
        </div>

        {/* Reviews Section */}
        <div className="p-4 font-semibold text-lg">Reviews</div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Feedback</h3>
          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-yellow-500">★</span>
            ))}
          </div>
          <textarea className="w-full p-2 border rounded-md mt-2" placeholder="Write your feedback..."></textarea>
          <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit</button>
        </div>
      </div>

      {/* Right Box - Fixed on Large Screens */}
      <div className="w-full md:w-1/3 bg-white shadow-lg p-4 rounded-lg md:sticky md:top-20">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="mb-4">
          <p><strong>Email:</strong> example@email.com</p>
        </div>
        <div className="mb-4">
          <p><strong>Phone:</strong> +123 456 7890</p>
        </div>
        <div className="mb-4">
          <p><strong>Address:</strong> 123 Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
