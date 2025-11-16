import React, { useEffect, useRef } from "react";

export default function NewsNotification() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (!scrollContainer) return;

      scrollAmount += 1;
      scrollContainer.scrollTop = scrollAmount;

      if (scrollAmount >= scrollContainer.scrollHeight) {
        scrollAmount = 0;
      }
    }, 30); // speed adjust

    return () => clearInterval(scrollInterval);
  }, []);

  const notifications = [
    "Admission open for 2025-26.",
    "College annual fest starting from 12th March.",
    "New sports complex inaugurated.",
    "Mid-term exams scheduled from next week.",
    "Scholarship application window closes soon.",
  ];

  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">News & Notifications</h2>
        <p className="text-gray-600 mb-6">Latest updates from our college</p>

        {/* Notification Scroller */}
        <div className="bg-white shadow-lg rounded-xl p-4 h-40 overflow-hidden relative border border-gray-200">
          <div ref={scrollRef} className="h-full overflow-hidden space-y-4 py-2">
            {notifications.map((note, index) => (
              <a
                key={index}
                href="#" // replace with your route
                className="block bg-gray-900 text-white px-4 py-3 rounded-lg shadow-md hover:bg-gray-800 duration-200"
              >
                {note}
              </a>
            ))}

            {/* Duplicate list for infinite loop */}
            {notifications.map((note, index) => (
              <a
                key={`duplicate-${index}`}
                href="#" // replace with your route
                className="block bg-gray-900 text-white px-4 py-3 rounded-lg shadow-md hover:bg-gray-800 duration-200"
              >
                {note}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
