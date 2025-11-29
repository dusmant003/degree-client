import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FresherDay() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[55vh] bg-cover bg-center flex items-center justify-center shadow-lg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e')",
        }}>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Fresher Day Celebration
          </h1>
          <p className="text-gray-200 mt-3 text-center text-lg">
            A Day of Achievements, Joy & Togetherness
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10">
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-extrabold">Farewell Day Celebration</h1>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            A warm and memorable beginning for our new batch, filled with joy,
            performances, fun activities, and heartfelt interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <img
            src="/images/fresher1.jpg"
            alt="Fresher 1"
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />
          <img
            src="/images/fresher2.jpg"
            alt="Fresher 2"
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />
          <img
            src="/images/fresher3.jpg"
            alt="Fresher 3"
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Highlights</h2>

        {/* Event Timeline */}
        <section data-aos="fade-up" className="mt-10 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Event Timeline</h2>
          <div className="space-y-3 text-gray-700">
            <p>10:00 AM – Welcome speech & introduction</p>
            <p>11:00 AM – Dance & singing performances</p>
            <p>12:30 PM – Fun games & activities</p>
            <p>2:00 PM – Lunch break</p>
            <p>3:00 PM – Ramp walk competition</p>
            <p>4:30 PM – Award distribution & closing ceremony</p>
          </div>
        </section>

        {/* Special Performances */}
        <section data-aos="fade-up" className="mt-10 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Special Performances</h2>
          <p className="text-gray-700">Students showcased amazing talents including classical dance, hip-hop, solo singing, mimicry, stand-up comedy, and group performances.</p>
        </section>

        {/* Awards Section */}
        <section data-aos="fade-up" className="mt-10 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Awards & Titles</h2>
          <div className="space-y-2 text-gray-700">
            <p>🏆 Mr. Fresher – Rahul Kumar</p>
            <p>👑 Miss Fresher – Anjali Sharma</p>
            <p>🎤 Best Performer – Aryan Singh</p>
            <p>🎭 Best Talent Act – Dance Crew</p>
          </div>
        </section>

        {/* Photo Collage */}
        <section data-aos="zoom-in" className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Photo Collage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <img src="/images/f1.jpg" className="rounded-lg shadow-md object-cover h-40" />
            <img src="/images/f2.jpg" className="rounded-lg shadow-md object-cover h-40" />
            <img src="/images/f3.jpg" className="rounded-lg shadow-md object-cover h-40" />
            <img src="/images/f4.jpg" className="rounded-lg shadow-md object-cover h-40" />
          </div>
        </section>

        {/* Video Recap */}
        <section data-aos="fade-up" className="mt-10 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Event Recap Video</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Guests & Faculty */}
        <section data-aos="fade-up" className="mt-10 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Guests & Faculty</h2>
          <p className="text-gray-700">Our respected Principal, Chairman, faculty members, and special guests graced the event and encouraged the students with their motivational words.</p>
        </section>

        {/* Venue & Highlights */}
        <section data-aos="fade-up" className="mt-10 bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4">Venue & Highlights</h2>
          <p className="text-gray-700">The event was held at the college auditorium decorated beautifully with lights, banners, and stage setups, making the day truly unforgettable.</p>
        </section>

      </div>
    </div>
  );
}
