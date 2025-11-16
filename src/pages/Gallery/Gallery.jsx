import React, { useState } from "react";
import Banner from "./Banner";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "https://cdn.pixabay.com/photo/2017/09/26/04/28/classroom-2787754_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557399_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/12/15/13/54/children-5833719_1280.jpg",
        "https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/19/10/12/pupils-2657913_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/12/22/13/42/bus-8463751_1280.jpg",
    ];

    return (
        <>
            <Banner />
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Gallery</h2>

                    {/* Sub-heading */}
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Explore the moments and highlights from our campus.
                    </p>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className="overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt=""
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fullscreen Popup */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 mt-16 p-4"
                        onClick={() => setSelectedImage(null)} // click outside closes
                    >
                        <div
                            className="relative max-w-3xl w-full"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-3 right-3 text-white text-3xl font-bold"
                            >
                                ×
                            </button>

                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="w-full rounded-xl shadow-xl"
                            />
                        </div>
                    </div>
                )}
            </section>
        </>

    );
};

export default Gallery;
