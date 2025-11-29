import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WelComeDay() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-[55vh] bg-cover bg-center flex items-center justify-center shadow-lg"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e')",
                }}>
                <div className=" p-8 rounded-xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Welcome Day Celebration
                    </h1>
                    <p className="text-gray-200 mt-3 text-center text-lg">
                        A Day of Achievements, Joy & Togetherness
                    </p>
                </div>
            </div>
            {/* Header */}
            <div className="text-center mb-12 mt-20" data-aos="fade-down">
                <h1 className="text-4xl font-extrabold">Welcome Day Celebration</h1>
                <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
                    A warm and memorable beginning for our new batch, filled with joy,
                    performances, fun activities, and heartfelt interactions.
                </p>
            </div>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-14" data-aos="zoom-in">
                <img
                    src="/images/welcomehero.jpg"
                    alt="Welcome Day"
                    className="w-full h-[380px] object-cover"
                />
            </div>

            {/* About Section */}
            <section data-aos="fade-up" className="bg-white p-6 rounded-xl shadow mb-10">
                <h2 className="text-2xl font-bold mb-3">About Welcome Day</h2>
                <p className="text-gray-700 leading-relaxed">
                    Welcome Day marks the beginning of an exciting journey for our
                    freshers. The celebration includes motivational speeches, cultural
                    activities, interactive sessions, and fun games to build a strong bond
                    between seniors and juniors. It is one of the most energetic and
                    heart-warming events of the year.
                </p>
            </section>

            {/* Event Timeline */}
            <section data-aos="fade-up" className="bg-white p-6 rounded-xl shadow mb-10">
                <h2 className="text-2xl font-bold mb-4">Event Timeline</h2>
                <div className="space-y-3 text-gray-700">
                    <p>10:00 AM – Welcome Speech & Introduction</p>
                    <p>10:45 AM – Ice-breaking Activity</p>
                    <p>11:30 AM – Dance & Singing Performances</p>
                    <p>12:30 PM – Fun Games & Talent Activities</p>
                    <p>02:00 PM – Lunch Break</p>
                    <p>03:00 PM – Interaction Session with Seniors</p>
                    <p>04:00 PM – Closing Ceremony & Group Photo</p>
                </div>
            </section>

            {/* Special Performances */}
            <section data-aos="fade-up" className="bg-white p-6 rounded-xl shadow mb-10">
                <h2 className="text-2xl font-bold mb-4">Special Performances</h2>
                <p className="text-gray-700">
                    Students showcased incredible talent including classical dance,
                    beatboxing, hip-hop, solo singing, comedy skits, and more. The energy
                    and enthusiasm truly made the day unforgettable.
                </p>
            </section>

            {/* Photo Gallery */}
            <section data-aos="zoom-in" className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Welcome Day Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <img src="/images/w1.jpg" className="rounded-xl shadow-md h-40 object-cover" />
                    <img src="/images/w2.jpg" className="rounded-xl shadow-md h-40 object-cover" />
                    <img src="/images/w3.jpg" className="rounded-xl shadow-md h-40 object-cover" />
                    <img src="/images/w4.jpg" className="rounded-xl shadow-md h-40 object-cover" />
                </div>
            </section>

            {/* Video Recap */}
            <section data-aos="fade-up" className="bg-white p-6 rounded-xl shadow mb-10">
                <h2 className="text-2xl font-bold mb-4">Event Recap Video</h2>
                <div className="aspect-video overflow-hidden rounded-lg shadow">
                    <iframe
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        className="w-full h-full"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Guests & Faculty */}
            <section data-aos="fade-up" className="bg-white p-6 rounded-xl shadow mb-10">
                <h2 className="text-2xl font-bold mb-4">Guests & Faculty</h2>
                <p className="text-gray-700">
                    Esteemed faculty members, the Principal, and special guests graced the
                    event, welcoming the new students with inspiring speeches and warm
                    gestures.
                </p>
            </section>

            {/* Highlights */}
            <section data-aos="fade-up" className="bg-white p-6 rounded-xl shadow mb-10">
                <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                <p className="text-gray-700">
                    Vibrant decorations, energetic performances, ice-breaking games, and
                    smiling faces—Welcome Day created memories that will stay forever.
                </p>
            </section>
        </div>
    );
}
