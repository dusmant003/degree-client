import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Container */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
            alt="Campus"
            className="rounded-2xl shadow-lg object-cover h-56 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
            alt="Library"
            className="rounded-2xl shadow-lg object-cover h-56 w-full mt-8"
          />
          <img
            src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80"
            alt="Students"
            className="rounded-2xl shadow-lg object-cover h-56 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
            alt="Campus Life"
            className="rounded-2xl shadow-lg object-cover h-56 w-full mt-8"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-6xl font-extrabold leading-tight mb-4 text-gray-900">
            About Our <span className="text-orange-500 text-4xl">College</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
            Our college stands as a center of excellence, committed to providing
            education that blends academic strength with real-world learning. With
            modern infrastructure, a highly experienced faculty team, and a
            student-focused environment, we help young minds discover their true
            potential.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
            From advanced laboratories to a vibrant campus culture, every corner
            of our institution reflects passion, innovation, and commitment. We
            believe in shaping not just professionals but confident and ethical
            individuals prepared for global opportunities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Join us and be a part of a community where ideas grow, leaders are
            born, and futures are built.
          </p>
        </div>
      </div>
    </section>
  );
}