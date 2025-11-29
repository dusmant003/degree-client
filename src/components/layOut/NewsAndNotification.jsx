import React from "react";
import { Bell } from "lucide-react";

export default function NewsNotification() {

  const newsList = [
    {
      id: 1,
      title: "Campus Recruitment Drive",
      description: "TCS will be visiting our campus for a placement drive. Students must register by 5 PM.",
      date: "12 Feb 2025",
      time: "10:30 AM"
    },
    {
      id: 2,
      title: "Holiday Announcement",
      description: "The college will remain closed tomorrow due to maintenance work.",
      date: "14 Feb 2025",
      time: "09:00 AM"
    }
    ,
    {
      id: 2,
      title: "Holiday Announcement",
      description: "The college will remain closed tomorrow due to maintenance work.",
      date: "14 Feb 2025",
      time: "09:00 AM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <h1 className="text-3xl text-center font-serif font-extrabold mb-6 text-gray-800">
        News & Notifications
      </h1>

      <div className="grid gap-6 max-w-3xl mx-auto">

        {newsList.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-5 flex gap-4 border border-gray-200"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Bell className="text-blue-600" size={24} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-1">
                {item.description}
              </p>

              {/* Date + Time */}
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                <span>📅 {item.date}</span>
                <span>⏰ {item.time}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
