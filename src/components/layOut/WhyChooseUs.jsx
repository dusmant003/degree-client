import React from "react";
import { CheckCircle, Award, Users, BookOpen } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-gray-900" />,
      title: "Top Ranked College",
      desc: "Recognized for academic excellence and outstanding results every year.",
    },
    {
      icon: <Users className="w-10 h-10 text-gray-900" />,
      title: "Expert Faculty",
      desc: "Highly qualified professors with industry experience and mentoring support.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-gray-900" />,
      title: "Modern Curriculum",
      desc: "Updated syllabus focused on practical learning and career growth.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-gray-900" />,
      title: "Excellent Placement",
      desc: "Strong industry tie-ups ensuring better job opportunities for students.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <h2 className="text-3xl font-serif font-extrabold text-gray-900 text-center mb-3">
          Why Choose Our College?
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          We are committed to providing the best learning environment, resources, and opportunities
          to help students build a successful future.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}