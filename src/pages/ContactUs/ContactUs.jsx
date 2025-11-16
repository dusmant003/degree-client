import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Banner from "./Banner";

const Contact = () => {
    return (
        <>
            <Banner />
            <section className="w-full bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
                        Contact Us
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* Left side - Contact Info */}
                        <div className="bg-white shadow-md rounded-xl p-8">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">
                                Get in Touch
                            </h3>

                            <div className="space-y-4">

                                <div className="flex items-start gap-4">
                                    <MapPin className="text-orange-600 w-6 h-6 mt-1" />
                                    <p className="text-gray-700">
                                        XYZ College, Near Main Road,
                                        <br /> Bhubaneswar, Odisha, 751001
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="text-orange-600 w-6 h-6" />
                                    <p className="text-gray-700">+91 98765 43210</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="text-orange-600 w-6 h-6" />
                                    <p className="text-gray-700">info@xyzcollege.edu</p>
                                </div>

                            </div>

                            {/* Google Map */}
                            <div className="mt-8">
                                <iframe
                                    title="map"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: "12px" }}
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.8605257607014!2d82.677427!3d20.0981164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a25093a4a1f8d01%3A0x63a0a2effe01834c!2sSinapali%20Degree%20College%2C%20Sinapali!5e0!3m2!1sen!2sin!4v1763272049771!5m2!1sen!2sin"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right side - Contact Form */}
                        <div className="bg-white shadow-md rounded-xl p-8">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">
                                Send us a Message
                            </h3>

                            <form className="space-y-5">

                                <div>
                                    <label className="font-semibold text-gray-800">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-4 py-3 border rounded-lg outline-none"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="font-semibold text-gray-800">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full mt-1 px-4 py-3 border rounded-lg outline-none"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="font-semibold text-gray-800">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full mt-1 px-4 py-3 border rounded-lg outline-none"
                                        placeholder="Write your message..."
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </section >
        </>

    );
};

export default Contact;
