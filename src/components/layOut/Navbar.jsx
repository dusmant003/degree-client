import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LoginModal from "../../modals/LoginModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuRef = useRef(null);

  const links = [
    { name: "Home", to: "/" },
    { name: "Aboutus", to: "/aboutus" },
    { name: "Gallery", to: "/gallery" },
    { name: "Events", to: "/events" },
    { name: "Contactus", to: "/contactus" }, // corrected
  ];

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-gray-900 shadow-md fixed top-0 left-0 z-[99999]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2PaBiWqEBn34sR5ihNy0Puh57WnxoIDNMw&s"
            alt="Logo"
            className="w-10 h-10 object-cover"
          />
          <h1 className="text-2xl font-extrabold text-white font-serif">
            DegreeCollege
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {links.map((link, i) => (
            <li
              key={i}
              className="hover:text-[#ffb703] cursor-pointer duration-200"
            >
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Admin Button (Desktop) */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden md:block bg-gradient-to-br from-[#ffb703] to-[#ff9900] text-black font-semibold px-6 py-2 rounded-lg shadow-[4px_4px_0px_#d97706] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
        >
          Admin Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.to}
                className="block py-2 hover:text-[#ffb703] duration-200"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Admin Login */}
        <div className="px-6 pb-4">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setOpen(false);
            }}
            className="block w-full bg-gradient-to-br from-[#ffb703] to-[#ff9900] text-black font-semibold px-6 py-2 rounded-lg shadow-[4px_4px_0px_#d97706] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
          >
            Admin Login
          </button>
        </div>
      </div>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
