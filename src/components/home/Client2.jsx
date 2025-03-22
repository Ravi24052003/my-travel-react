import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const clientLogos = [
  "https://dynamic.tourtravelworld.com/banner/57414.gif",
  "https://dynamic.tourtravelworld.com/banner/64628.gif",
  "https://dynamic.tourtravelworld.com/banner/75457.gif",
  "https://dynamic.tourtravelworld.com/banner/92624.gif",
  "https://dynamic.tourtravelworld.com/banner/57503.gif",
  "Images/Homepageimages/gifs/ak_bartravels.gif",
  "Images/Homepageimages/gifs/bcd_travel.gif",
  "Images/Homepageimages/gifs/bs_tour_and_travels.gif",
//   "Images/Homepageimages/gifs/CWT.gif",
//   "Images/Homepageimages/gifs/easy_my_trip.gif",
//   "Images/Homepageimages/gifs/expedia_group.gif",
//   "Images/Homepageimages/gifs/expedia.gif",
//   "Images/Homepageimages/gifs/ixigo.gif",
//   "Images/Homepageimages/gifs/Kesari.gif",
//   "Images/Homepageimages/gifs/travel_guru.gif"
];

const Client2 = () => {
    const sliderContainer = useRef(null);
    const keenSlider = useRef(null);
  
    useEffect(() => {
      if (sliderContainer.current && !keenSlider.current) {
        keenSlider.current = new KeenSlider(sliderContainer.current, {
          loop: true,
          rtl: true,
          slides: { perView: 5, spacing: 10 },
          breakpoints: {
            "(max-width: 1024px)": {
              slides: { perView: 3, spacing: 8 },
            },
            "(max-width: 768px)": {
              slides: { perView: 2, spacing: 6 },
            },
            "(max-width: 480px)": {
              slides: { perView: 1, spacing: 4 },
            },
          },
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
      <section className="w-full bg-gray-50 flex flex-col items-center justify-center px-5 mx-auto py-7">
        <div ref={sliderContainer} className="keen-slider max-w-7xl w-full">
          {clientLogos.map((logo, index) => (
            <div key={index} className="keen-slider__slide flex justify-center items-center p-2 border-[1.5px] border-dashed border-gray-500">
              <a href="#" className="flex justify-center items-center h-full w-full">
                <img className="max-h-full max-w-full" src={logo} alt={`Client Logo ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Client2;
