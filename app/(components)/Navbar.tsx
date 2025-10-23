"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "What You’ll Learn", id: "learn" },
    { name: "Career", id: "career" },
    { name: "Why Choose Us", id: "whyus" },
    { name: "Pricing & Registration", id: "pricing" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="text-2xl font-extrabold tracking-tight text-[#317AFF] hover:text-blue-600 transition-colors"
        >
          BHI
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="hover:text-[#317AFF] transition-colors"
            >
              {item.name}
            </button>
          ))}

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNavClick("enroll")}
              className="bg-[#317AFF] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-sm"
            >
              Enroll Now
            </button>
            <button
              onClick={() => (window.location.href = "/signup")}
              className="border-2 border-[#317AFF] text-[#317AFF] px-5 py-2 rounded-lg hover:bg-[#317AFF] hover:text-white transition-all font-semibold"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#317AFF]"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm px-6 py-4 space-y-3 border-t border-gray-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left font-medium text-gray-800 hover:text-[#317AFF] transition-colors"
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("enroll")}
            className="block w-full text-center bg-[#317AFF] text-white py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold"
          >
            Enroll Now
          </button>

          <button
            onClick={() => (window.location.href = "/signup")}
            className="block w-full text-center border-2 border-[#317AFF] text-[#317AFF] py-2 rounded-lg hover:bg-[#317AFF] hover:text-white transition-all font-semibold"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
