import React, { useState, useEffect } from "react";
import bdResort from "/Images/Homepageimages/bd_resort_top_banner.png";
import kesari from "/Images/Homepageimages/kesari.png";
import southIndian from "/Images/Homepageimages/south_indian_top_banner.png";
import takeAtrip from "/Images/Homepageimages/take_a_trip_tours_and_travels.png";
import sotc from "/Images/Homepageimages/sotc.png";
import travelTriangle from "/Images/Homepageimages/travel_triangle.png";
import clubMahindra from "/Images/Homepageimages/club_mahindra.png";

const WeddingCarouselTop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: bdResort,
        // "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "BD Resort",
      title: "BD Resort",
      link: "https://bdresortmanali.com/"
    },
    {
      image: kesari,
        // "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Kesari Tours",
      title: "Kesari Tours",
      link: "https://www.kesari.in/"
    },
    {
      image: sotc,
        // "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "SOTC",
      title: "SOTC",
      link: "https://www.sotc.in/"
    },
    {
      image: travelTriangle,
        // "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Travel Triangle",
      title: "Travel Triangle",
      link: "https://traveltriangle.com/"
    },
    {
      image: clubMahindra,
        // "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Club Mahindra",
      title: "Club Mahindra",
      link: "https://www.clubmahindra.com/"
    },
    {
      image: southIndian,
        // "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "South Indian Holidays",
      title: "South Indian Holidays",
      link: "https://www.southindianholidays.in/"
    },
    {
      image: takeAtrip,
        // "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Take A Trip",
      title: "Take A Trip",
      link: "https://takeatripholidays.in/"
    },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    //   companyName: "Company Name 3",
    //   title: "Trip Planner 1",
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    //   companyName: "Company Name 1",
    //   title: "Trip Planner 2",
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    //   companyName: "Company Name 2",
    //   title: " Trip Planner 2",
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    //   companyName: "Company Name 3",
    //   title: "Trip Planner 3",
    // },


  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);
  return (
    <div className="md:relative md:overflow-hidden w-full md:h-28 md:mb-auto overflow-x-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col md:h-28 w-full md:flex-row flex-shrink-0"
          >
            <img
              src={slide.image}
              className="md:w-full object-contain"
              alt=""
            />
            <div
              className="lg:w-[600px] md:w-[400px] w-full p-2 md:p-5 bg-violet-950 text-white
            flex flex-col lg:gap-5 gap-3 justify-center"
            >
              <p className="lg:text-3xl text-base md:text-xl">{slide.title}</p>
              <p className="p-2 bg-white rounded-xl text-black lg:w-40 w-24 lg:text-base text-sm flex items-center justify-center">
               <a href={slide?.link} target="_blank">Know more</a> 
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCarouselTop;







































































{/* <div className="relative overflow-hidden w-full h-28 ">
<div
  className="flex transition-transform duration-500"
  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
>
  {slides.map((slide, index) => (
    <div
      key={index}
      className="flex h-28 w-full flex-row flex-shrink-0"
    >
      <img
        src={slide.image}
        className="sm:w-full object-cover w-1/2"
        alt=""
      />
      <div
        className="lg:w-[600px] w-[400px] p-5 bg-violet-950 text-white
      flex flex-col lg:gap-5 gap-3 justify-center "
      >
        <p className="lg:text-3xl text-base md:text-xl">{slide.title}</p>
        <p className="p-2 bg-white rounded-xl text-black lg:w-40 w-24 lg:text-base text-sm flex items-center justify-center">
         <a href={slide?.link} target="_blank">Know more</a> 
        </p>
      </div>
    </div>
  ))}
</div>
</div> */}