import React, { useRef } from "react";

export default function Courses() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
    };

    const courses = [
        {
            title: "Computer Science",
            desc: "Learn programming, AI, and modern software development.",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Business Management",
            desc: "Master leadership, finance, and entrepreneurial skills.",
            img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Civil Engineering",
            desc: "Design modern infrastructure and innovate for the future.",
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Nursing",
            desc: "Build a career in healthcare and patient care.",
            img: "https://images.unsplash.com/photo-1580281657527-47dff565f1a7?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Hotel Management",
            desc: "Explore hospitality, tourism, and global hotel operations.",
            img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
        }, ,
        {
            title: "Hotel Management",
            desc: "Explore hospitality, tourism, and global hotel operations.",
            img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Hotel Management",
            desc: "Explore hospitality, tourism, and global hotel operations.",
            img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="relative w-full py-10 bg-white px-10">
            {/* Heading */}
            <div className="text-center mb-6">
                <h2 className="text-4xl font-extrabold font-serif">Our Courses</h2>
                <p className="text-gray-600 mt-1 text-lg font-medium">Explore top programs to build your future</p>
            </div>

            {/* Arrow Buttons */}
            <div className="absolute right-4 top-2 flex gap-2 z-10">
                <button
                    onClick={scrollLeft}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow"
                >
                    ◀
                </button>
                <button
                    onClick={scrollRight}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow"
                >
                    ▶
                </button>
            </div>

            {/* Slider */}
            <div
                ref={sliderRef}
                className="flex overflow-x-auto scroll-smooth no-scrollbar gap-3 px-4"
                style={{ scrollbarWidth: "none" }}
            >
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="min-w-[220px] bg-white rounded-xl shadow hover:shadow-lg duration-200 border"
                    >
                        <img
                            src={course.img}
                            alt={course.title}
                            className="h-32 w-full object-cover rounded-t-xl"
                        />
                        <div className="p-3">
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{course.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
