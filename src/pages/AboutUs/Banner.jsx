import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        className="relative z-10 text-center text-white px-4"
        data-aos="fade-up"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg sm:text-xl">
          <Link to='/'> Home </Link> <span className="mx-1 text-orange-400">&raquo;</span>{' '}
          <span className="text-orange-500 font-semibold">About Us</span>
        </p>
      </div>
    </section>
  );
};

export default Banner;
