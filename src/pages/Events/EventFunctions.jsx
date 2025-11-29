import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// EventsSpecialFunctions.jsx
export default function EventsSpecialFunctions() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sections = [
    {
      title: "Welcome Function (Freshers Day)",
      desc:
        "Our Welcome Function is a vibrant celebration held to greet the new batch with cultural performances, fun games, and heartfelt interactions between seniors and juniors.",
      img: "/images/welcome.jpg",
      fallback:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60",
      aos: "fade-right",
      btn2: "Know More",
      link: "/welcomeday",
    },
    {
      title: "Annual Function (College Fest)",
      desc:
        "The Annual Function showcases student achievements through cultural events, awards, chief guest addresses, and energetic performances that highlight our talent and unity.",
      img: "/images/annual.jpg",
      fallback:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60",
      aos: "fade-up",
      btn2: "Know More",
      link: "/annualday",
    },
    {
      title: "Farewell Function",
      desc:
        "The Farewell Function is an emotional send‑off as we celebrate memories, achievements, and bonds formed over years. A night filled with titles, performances, and goodbyes.",
      img: "/images/farewell.jpg",
      fallback:
        "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=60",
      aos: "fade-left",
      btn2: "Know More",
      link: "/fresherday",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-12" data-aos="fade-up">
        Special College Functions
      </h1>

      <div className="space-y-12">
        {sections.map((sec, index) => (
          <div
            key={sec.title}
            className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <div data-aos={sec.aos}>
              <div className="w-full h-72 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={sec.img}
                  alt={sec.title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.src = sec.fallback)}
                />
              </div>
            </div>

            {/* Content */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold">{sec.title}</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">{sec.desc}</p>

              {/* Buttons */}
              <div className="mt-5 flex gap-4">
                <Link to={sec.link}
                  href="#"
                  className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
                >
                  {sec.btn2}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
