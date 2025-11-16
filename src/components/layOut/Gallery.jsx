import React from "react";
import { Link } from "react-router-dom";

export default function GallerySection() {
    const images = [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
    ];

    return (
        <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold font-serif text-gray-900">Campus Gallery</h2>
                <p className="text-gray-600 mt-2 text-lg">A glimpse into our vibrant college life</p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-xl shadow hover:shadow-xl hover:scale-[1.03] duration-300 bg-white"
                    >
                        <img
                            src={src}
                            alt={`Gallery Image ${i + 1}`}
                            className="w-full h-40 sm:h-48 object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <Link to='/gallery' >
                    <button className="bg-gradient-to-br from-[#ffb703] to-[#ff9900] text-black font-semibold px-6 py-2 rounded-lg shadow-[4px_4px_0px_#d97706] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                        View More
                    </button>
                </Link>
            </div>

        </section>
    );
}