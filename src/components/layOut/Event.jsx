import React from "react";

export default function EventsSection() {
  const events = [
    {
      title: "Freshers Welcome 2025",
      date: "March 12, 2025",
      desc: "A grand welcome celebration for all new students with cultural performances and campus tour.",
      img: "https://images.unsplash.com/photo-1515165562835-c4cfa3b53db1?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Tech Innovation Summit",
      date: "April 5, 2025",
      desc: "A platform for students to showcase innovative projects, attend workshops, and meet industry experts.",
      img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Annual Sports Meet",
      date: "May 20, 2025",
      desc: "A week filled with sports, competitions, and teamwork to promote fitness and discipline.",
      img: "https://images.unsplash.com/photo-1505842465776-3b4953ca4f87?auto=format&fit=crop&w=900&q=80"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold font-serif text-gray-900">Upcoming Events</h2>
        <p className="text-gray-600 mt-2 text-lg">Stay updated with the latest happenings at our college</p>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl duration-300 overflow-hidden border"
          >
            <img
              src={event.img}
              alt={event.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 font-medium">{event.date}</p>
              <h3 className="text-xl font-bold mt-1 text-gray-900">{event.title}</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">{event.desc}</p>
              <button className="bg-gradient-to-br from-[#ffb703] to-[#ff9900] text-black font-semibold px-6 py-2 rounded-lg shadow-[4px_4px_0px_#d97706] hover:translate-x-1 hover:translate-y-1 mt-4 transition-all duration-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}