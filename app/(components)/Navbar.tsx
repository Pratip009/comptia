/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // ✅ Fetch user
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // ✅ Listen for login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // ✅ Cleanup
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (id: string) => {
    // Always close mobile menu
    setMobileOpen(false);

    if (window.location.pathname !== "/") {
      // If user is on another route (e.g., /dashboard)
      router.push(`/?scrollTo=${id}`);
    } else {
      // If already on home, just scroll directly
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };


  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
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
        {/* ✅ Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="text-2xl font-extrabold tracking-tight text-[#317AFF] hover:text-blue-600 transition-colors"
        >
          BHI
        </button>

        {/* ✅ Desktop Nav */}
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

          {/* ✅ CTA / User Section */}
          <div className="flex items-center space-x-4 relative">
            {user ? (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-all"
                >
                  <User className="text-[#317AFF]" />
                  <span>{user.user_metadata?.name || user.email}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* ✅ Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg py-2 z-50 animate-fadeIn">
                    <button
                      onClick={() => {
                        router.push("/dashboard");
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleNavClick("pricing")}
                  className="bg-[#317AFF] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-sm"
                >
                  Enroll Now
                </button>
                <button
                  onClick={() => router.push("/signup")}
                  className="border-2 border-[#317AFF] text-[#317AFF] px-5 py-2 rounded-lg hover:bg-[#317AFF] hover:text-white transition-all font-semibold"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#317AFF]"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
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

          {user ? (
            <div className="flex flex-col items-center space-y-3 border-t pt-3">
              <div className="flex items-center space-x-2">
                <User className="text-[#317AFF]" />
                <span className="font-semibold text-gray-700">
                  {user.user_metadata?.name || user.email}
                </span>
              </div>

              <button
                onClick={() => router.push("/dashboard")}
                className="w-full text-center text-[#317AFF] font-medium hover:underline"
              >
                Dashboard
              </button>

              <button
                onClick={handleSignOut}
                className="w-full text-center text-red-500 font-medium hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => handleNavClick("enroll")}
                className="block w-full text-center bg-[#317AFF] text-white py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold"
              >
                Enroll Now
              </button>
              <button
                onClick={() => router.push("/signup")}
                className="block w-full text-center border-2 border-[#317AFF] text-[#317AFF] py-2 rounded-lg hover:bg-[#317AFF] hover:text-white transition-all font-semibold"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
