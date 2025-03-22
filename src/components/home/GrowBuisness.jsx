import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const images = [
  "/Images/Homepageimages/s2_holidays.png",
  "/Images/Homepageimages/travel_29.png",
  "/Images/Homepageimages/admire_banner.png",
  "/Images/Homepageimages/grow_business.jpg",
];

const GrowBusiness = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: { perView: 1 },
      });
    }

    const interval = setInterval(() => {
      if (keenSlider.current) {
        keenSlider.current.next();
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      if (keenSlider.current) {
        keenSlider.current.destroy();
        keenSlider.current = null;
      }
    };
  }, []);

  return (
    <div ref={sliderContainer} className="keen-slider w-full my-5">
      {images.map((image, index) => (
        <div
          key={index}
          className="keen-slider__slide w-full h-[40vh] md:h-[70vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="px-5 md:py-20 py-10 my-10 w-full h-full flex items-center justify-center">
            <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-700 via-blue-800 to-gray-600 text-transparent bg-clip-text">
  Grow your <br className="hidden md:block" />
  <span className="text-transparent bg-clip-text">Business</span> with Us
</h1>


<Link 
  target="_blank" 
  to="/contact" 
  className="bg-gradient-to-r from-red-500 to-blue-700 text-white font-medium px-9 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
>
  Contact Us
</Link>


            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GrowBusiness;