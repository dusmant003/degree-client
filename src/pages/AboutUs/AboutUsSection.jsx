import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// AboutUs.jsx
// Usage: Place this component in your React app (e.g. src/components/AboutUs.jsx)
// Requirements: Tailwind CSS set up in the project and `aos` installed:
// npm install aos

export default function AboutUsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const stats = [
    { label: "Students", value: "4,200+" },
    { label: "Faculty", value: "180+" },
    { label: "Programs", value: "35" },
    { label: "Years", value: "27+" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* HERO */}
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
        <div data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            About <span className="text-indigo-600">Our College</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Founded with a vision to shape leaders of tomorrow, our college blends strong academic foundations with
            practical exposure — creating graduates who are career-ready and community-conscious.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4" data-aos="fade-right">
              <h3 className="text-sm text-gray-500">Accreditation</h3>
              <p className="mt-1 font-semibold">NAAC A+</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4" data-aos="fade-left">
              <h3 className="text-sm text-gray-500">Location</h3>
              <p className="mt-1 font-semibold">Patna, Bihar</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="w-full h-64 bg-gradient-to-tr from-indigo-100 to-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden"
        >
          {/* Replace this placeholder with an actual image or illustration */}
          <img
            src="/images/college-hero.jpg"
            alt="College campus"
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=60";
            }}
          />
        </div>
      </div>

      {/* MISSION / VISION */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <article className="bg-white rounded-2xl p-8 shadow" data-aos="fade-up">
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p className="mt-3 text-gray-600">
            To empower students with knowledge, critical thinking and ethics so they can contribute positively to society
            and industry.
          </p>
        </article>

        <article className="bg-white rounded-2xl p-8 shadow" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-bold">Our Vision</h2>
          <p className="mt-3 text-gray-600">
            To be a centre of excellence in education, research and holistic development — fostering innovation and
            lifelong learning.
          </p>
        </article>
      </div>

      {/* QUICK STATS */}
      <div className="bg-indigo-50 rounded-2xl p-6 mb-12" data-aos="fade-up">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="py-4">
              <div className="text-2xl font-extrabold">{s.value}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HISTORY / WHY CHOOSE US */}
      <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
        <div data-aos="fade-right">
          <h3 className="text-2xl font-bold">A Short History</h3>
          <p className="mt-4 text-gray-600">
            Since its inception in 1998, our college has grown from a small institute to a vibrant academic community,
            offering undergraduate, postgraduate and research programs across multiple disciplines.
          </p>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>• Strong industry links & internship programs</li>
            <li>• Experienced and research-active faculty</li>
            <li>• Active student clubs & soft-skills training</li>
          </ul>
        </div>

        <div data-aos="fade-left" className="bg-white rounded-2xl p-6 shadow">
          <h4 className="font-semibold">Why students pick us</h4>
          <ol className="mt-3 list-decimal list-inside text-gray-600">
            <li>Personalised mentorship and low student-faculty ratio.</li>
            <li>Modern labs and industry-standard curriculum.</li>
            <li>Strong placement record and entrepreneurship support.</li>
          </ol>
        </div>
      </div>

      {/* PRINCIPAL & CHAIRMAN OPINIONS */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6" data-aos="fade-up">
          Messages
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Principal */}
          <blockquote
            className="bg-white p-6 rounded-2xl shadow flex gap-4 items-start"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <img
              src="/images/principal.jpg"
              alt="Principal"
              className="w-20 h-20 object-cover rounded-full ring-2 ring-indigo-100"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60";
              }}
            />
            <div>
              <p className="text-gray-700 italic">
                "Our focus is to nurture curious minds — balancing academics with values, discipline and empathy. We
                support each student’s journey to find their strengths and purpose."
              </p>
              <footer className="mt-4">
                <div className="font-semibold">Dr. A. K. Sharma</div>
                <div className="text-sm text-gray-500">Principal</div>
              </footer>
            </div>
          </blockquote>

          {/* Chairman */}
          <blockquote
            className="bg-white p-6 rounded-2xl shadow flex gap-4 items-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/images/chairman.jpg"
              alt="Chairman"
              className="w-20 h-20 object-cover rounded-full ring-2 ring-indigo-100"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60";
              }}
            />
            <div>
              <p className="text-gray-700 italic">
                "Education should be an engine of upliftment. We invest in infrastructure, scholarships and industry
                partnerships to make quality education accessible and relevant."
              </p>
              <footer className="mt-4">
                <div className="font-semibold">Mr. R. K. Verma</div>
                <div className="text-sm text-gray-500">Chairman, Governing Body</div>
              </footer>
            </div>
          </blockquote>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="rounded-2xl p-8 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white" data-aos="fade-up">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h5 className="text-xl font-bold">Ready to join our community?</h5>
            <p className="mt-1 text-indigo-100 text-sm">Applications are open for the next academic year.</p>
          </div>
          <div>
            <a
              href="/admissions"
              className="inline-block px-5 py-3 bg-white text-indigo-600 rounded-lg font-semibold shadow"
              data-aos="zoom-in"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
