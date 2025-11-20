import React, { useState } from "react";
import { Bell, Search, Menu, X } from "lucide-react";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden block text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-semibold text-gray-800">
           Degree College
          </h1>
        </div>

        {/* Search Box */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-72">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search orders, staff, menu..."
            className="bg-transparent outline-none text-sm w-full px-2"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <button className="relative">
            <Bell className="text-gray-600" size={22} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/logo.png"
              alt="Admin"
              className="w-8 h-8 rounded-full border"
            />
            <span className="hidden md:block text-sm font-medium text-gray-700">
              Admin
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-3">
          <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full px-2"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminNavbar;
