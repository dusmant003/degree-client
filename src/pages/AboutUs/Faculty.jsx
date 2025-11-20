import React from "react";
import { Facebook, MessageCircle, Instagram } from "lucide-react";

const facultyData = [
    {
        name: "Dr. Rakesh Patra",
        designation: "Principal",
        img: "https://images.unsplash.com/photo-1603415526960-f7e0328cfbc1",
    },
    {
        name: "Prof. Sweta Mishra",
        designation: "HOD – Computer Science",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
        name: "Prof. Deepak Sahu",
        designation: "English Faculty",
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    },
];

const Faculty = () => {
    return (
        <section className="w-full py-16 px-6 md:px-16 lg:px-24 bg-gray-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
                Our Faculty
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2 mb-12">
                Experienced, qualified, and inspiring — our faculty builds strong foundations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {facultyData.map((faculty, index) => (
                    <div
                        key={index}
                        className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-6 text-center 
            hover:scale-105 hover:shadow-2xl transition-all duration-300"
                    >
                        <img
                            src={faculty.img}
                            alt={faculty.name}
                            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
                        />

                        <h3 className="text-xl font-bold text-gray-900">{faculty.name}</h3>
                        <p className="text-gray-700 font-medium mb-4">{faculty.designation}</p>

                        {/* Social Icons */}
                        <div className="flex justify-center gap-4 mt-4">
                            <a href="#" className="text-gray-900 hover:text-orange-600 transition">
                                <Facebook size={20} />
                            </a>
                            {/* whatsapp icon */}
                            <a href="#" className="text-gray-900 hover:text-orange-600 transition">
                                <MessageCircle size={20} />
                            </a>

                            <a href="#" className="text-gray-900 hover:text-orange-600 transition">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Faculty;
