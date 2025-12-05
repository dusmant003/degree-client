import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-6 md:p-10 min-h-screen">

      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold">Manage Profile</h1>

          <p className="flex items-center gap-2 cursor-pointer text-gray-600">
            <Link to="/adminportal" className="hover:underline">Home</Link>
            <ChevronRight size={18} />
            Manage Profile
          </p>
        </div>
      </div>


      {/* Profile Card */}
      <div className="bg-white shadow-md rounded-xl p-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">

          {/* Profile Image */}
          <img
            src="https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg"
            alt="Profile"
            className="h-36 w-36 rounded-full border"
          />

          {/* Profile Info */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <h2 className="text-2xl font-bold">Barsha Meher</h2>
              <p className="text-gray-500">Admin</p>
            </div>

            <div>
              <p className="text-gray-500 font-medium">Phone</p>
              <p className="font-semibold">9556448444</p>
            </div>

            <div>
              <p className="text-gray-500 font-medium">Email</p>
              <p className="font-semibold">vrindavansmartschool@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-500 font-medium">Joined</p>
              <p className="font-semibold">2025-04-21</p>
            </div>

            <div>
              <p className="text-gray-500 font-medium">Last Login</p>
              <p className="font-semibold">19:46:48</p>
            </div>

          </div>
        </div>

        <hr className="my-8" />

        {/* Update Profile Section */}
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
          </div>

        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
