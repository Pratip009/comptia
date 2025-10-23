"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-800 pt-20 pb-10 overflow-hidden">
      {/* 🔵 Animated Blue Blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-blue-200 rounded-full blur-[150px] -z-10"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-300 rounded-full blur-[180px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 grid md:grid-cols-3 gap-10">
        {/* Column 1 — Logo and Description */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-600 mb-4">
            Bright Horizon Institute
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Empowering students with real-world IT skills to launch successful
            careers. Learn, certify, and grow with confidence.
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-pink-500 hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links (same as Navbar) */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-4 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#learn" className="hover:text-blue-600 transition">
                What You’ll Learn
              </a>
            </li>
            <li>
              <a href="#career" className="hover:text-blue-600 transition">
                Career
              </a>
            </li>
            <li>
              <a href="#whyus" className="hover:text-blue-600 transition">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-600 transition">
                Pricing & Registration
              </a>
            </li>
            <li>
              <a href="#enroll" className="hover:text-blue-600 transition">
                Enroll Now
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-blue-600 transition">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Contact Info */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-4 text-lg">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
              <span>
                591 Summit Ave, Suite No. 400 <br />
                Jersey City, New Jersey, NJ 07306
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>201-377-1594</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>admin@bhilearning.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-16 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bright Horizon Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
