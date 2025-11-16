import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Tag } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Welcome to Our College",
    subtitle: "Top-class faculty, modern classrooms, and a learning environment built for success.",
    image: "https://cdn.pixabay.com/photo/2020/01/09/03/43/mansion-4751778_1280.jpg",

    gradient: 'from-stone-900/70 via-stone-800/60 to-transparent'
  },
  {
    id: 2,
    title: "Discover Your Future",
    subtitle: "From academics to activities — we help students grow in every direction.",
    image: "https://cdn.pixabay.com/photo/2018/12/22/03/03/kings-college-3889124_1280.jpg",

    gradient: 'from-stone-900/70 via-stone-800/60 to-transparent'
  },
  {
    id: 3,
    title: "Excellence in Education",
    subtitle: "Top-class faculty, modern classrooms, and a learning environment built for success.",
    image: "https://cdn.pixabay.com/photo/2019/02/25/22/55/oxford-4020803_1280.jpg",

    gradient: 'from-stone-900/70 via-stone-800/60 to-transparent'
  },
];

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden z-0">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] z-0">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.6] z-0"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} z-0`}></div>

              {/* Text */}
              <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg leading-tight">
                  {slide.title}
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 font-light max-w-2xl">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center ">
                  <Link
                    to="/contactus"
                    className="block bg-gradient-to-br from-[#ffb703] to-[#ff9900] text-black font-semibold px-6 py-2 rounded-lg shadow-[4px_4px_0px_#d97706] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="custom-prev hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center cursor-pointer z-20 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>

        <div className="custom-next hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center cursor-pointer z-20 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>

      </Swiper>

      {/* Pagination Dots */}
      <div className="swiper-pagination !bottom-6"></div>
    </div>
  );
};

export default Hero;
