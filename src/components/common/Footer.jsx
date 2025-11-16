import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">YourCollege</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A premier institution focused on academic excellence, skill development, and student success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Admissions</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white" />
              <span>123 College Road, Bhubaneswar, Odisha</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              <span>info@yourcollege.ac.in</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Facebook className="w-6 h-6 hover:text-white cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-white cursor-pointer" />
            <Linkedin className="w-6 h-6 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourCollege. All rights reserved.
      </div>
    </footer>
  );
}