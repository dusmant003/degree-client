import React from "react";

const AnnualDay = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="h-[55vh] bg-cover bg-center flex items-center justify-center shadow-lg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e')",
        }}>
        <div className=" p-8 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Annual Day Celebration
          </h1>
          <p className="text-gray-200 mt-3 text-center text-lg">
            A Day of Achievements, Joy & Togetherness
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-4">About Annual Day</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Our Annual Day is one of the most awaited events of the year, filled
          with cultural performances, awards, celebrations, and memories. Students,
          teachers, and guests come together to celebrate achievements and enjoy a
          day full of energy, talent, and creativity.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          The event features group dances, solo performances, drama, singing,
          speeches, prize distribution, and many special moments that showcase the
          talent and spirit of our institution.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Event Highlights</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="shadow-md p-5 bg-gray-100 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Cultural Performances</h3>
              <p className="text-gray-700">
                Energetic dances, music shows, and creative acts that made the
                day unforgettable.
              </p>
            </div>

            <div className="shadow-md p-5 bg-gray-100 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Award Ceremony</h3>
              <p className="text-gray-700">
                Students were honored for academic excellence, discipline, and
                achievements.
              </p>
            </div>

            <div className="shadow-md p-5 bg-gray-100 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Special Guests</h3>
              <p className="text-gray-700">
                Distinguished guests and alumni graced the event with inspiring
                speeches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-8">Annual Day Memories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img
            className="w-full h-64 object-cover rounded-xl shadow-md"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Annual Day"
          />

          <img
            className="w-full h-64 object-cover rounded-xl shadow-md"
            src="https://images.unsplash.com/photo-1508674861872-a51e06c50c9b"
            alt="Annual Day"
          />

          <img
            className="w-full h-64 object-cover rounded-xl shadow-md"
            src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca"
            alt="Annual Day"
          />
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center py-10 text-gray-500">
        © {new Date().getFullYear()} Annual Day Celebration | All Rights Reserved
      </div>
    </div>
  );
};

export default AnnualDay;
