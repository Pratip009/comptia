"use client";

import React from "react";
import Image from "next/image";
import {
  CalendarDays,
  Clock,
  MapPin,
  DollarSign,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const jobList = [
    "Computer Technician",
    "Installation Technician",
    "Help Desk Analyst",
    "IT Support Specialist",
    "Server Support Technician",
    "Field Service Technician",
    "Network Support Specialist",
    "Junior Cybersecurity Specialist",
  ];

  const infoCards = [
    { icon: CalendarDays, label: "Next Batch", value: "Nov 7th–21st" },
    { icon: Clock, label: "Daily", value: "10AM–6PM" },
    { icon: MapPin, label: "Location", value: "Jersey City" },
    { icon: DollarSign, label: "Tuition", value: "$2,500" },
  ];

  return (
    <section
      id="hero"
      className="relative w-full h-auto lg:h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 overflow-hidden font-sans lg:mt-0"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blobY"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blobY animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blobY animation-delay-4000"></div>
      </div>

      {/* Layout */}
      <div className="relative flex flex-col lg:flex-row h-full">
        {/* LEFT SIDE (Desktop) */}
        <div className="hidden lg:flex w-3/5 flex-col justify-center px-12 py-8 z-10">
          <div className="w-full max-w-2xl space-y-6">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white text-xs font-semibold rounded-full uppercase tracking-widest shadow-sm text-center">
              Limited Seats • Nov 7th
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent leading-tight drop-shadow-md tracking-tight">
              Launch Your IT Career
              <span className="block text-4xl mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                with CompTIA A+
              </span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed font-light">
              Join our 5-day bootcamp in Jersey City and get certified for
              success.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-start">
              <a
                href="form"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-semibold text-base rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 max-w-sm"
              >
                Enroll Now – $2,500
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-700 font-semibold text-base rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300 max-w-sm"
              >
                Learn More
              </motion.button>
            </div>

            {/* Info Cards */}
            <div className="w-full mt-6 px-2 sm:px-0">
              <div className="grid grid-cols-2 gap-3 max-w-md sm:max-w-lg">
                {infoCards.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 bg-white/90 backdrop-blur-md rounded-lg border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="p-2 rounded bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm flex-shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-500 text-xs truncate">
                        {item.label}
                      </p>
                      <p className="font-semibold text-gray-900 text-sm truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden flex flex-col items-center justify-center px-6 py-20 gap-8">
          {/* CTA */}
          <div className="w-full max-w-md text-center space-y-6">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white text-xs font-semibold rounded-full uppercase tracking-widest shadow-sm">
              Limited Seats • Nov 7th
            </div>

            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent leading-tight drop-shadow-md tracking-tight">
              Launch Your IT Career
              <span className="block text-3xl mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                with CompTIA A+
              </span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Join our 5-day bootcamp in Jersey City and get certified for
              success.
            </p>

            {/* Info Cards (Now visible on mobile) */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {infoCards.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 bg-white/90 backdrop-blur-md rounded-lg border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-2 rounded bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm flex-shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs truncate">
                      {item.label}
                    </p>
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
              <a
                href="form"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-semibold text-base rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Enroll Now – $2,500
              </a>
              <a
                href="#details"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-700 font-semibold text-base rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Job List */}
          <div className="w-full max-w-md">
            <div className="bg-white/25 backdrop-blur-2xl p-5 rounded-2xl border border-blue-200/50 shadow-[0_8px_20px_rgba(30,58,138,0.25),0_12px_40px_rgba(59,130,246,0.35),inset_0_0_25px_rgba(255,255,255,0.1)]">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-blue-300/30">
                <CheckCircle2 className="text-gray-600 w-5 h-5" />
                <h3 className="text-sm font-bold text-gray-800 uppercase">
                  Jobs You Can Get
                </h3>
              </div>
              <ul className="space-y-1.5">
                {jobList.map((job, i) => (
                  <li
                    key={i}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100/40 transition-all duration-300 cursor-default shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(59,130,246,0.25)]"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">
                      {job}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Desktop Image + Job List) */}
        <div className="hidden lg:block lg:w-2/5 h-full relative">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/hero.png"
              alt="Student learning CompTIA A+ Certification"
              fill
              priority
              className="object-cover object-top brightness-105 contrast-110"
            />
          </div>

          <div className="absolute top-1/2 left-12 lg:left-10 transform -translate-x-1/2 -translate-y-1/2 z-20 w-72 lg:w-80 perspective-[1200px]">
            <div className="relative bg-white/25 backdrop-blur-2xl p-5 rounded-2xl border border-blue-200/50 shadow-[0_8px_20px_rgba(30,58,138,0.25),0_12px_40px_rgba(59,130,246,0.35),inset_0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.45),0_10px_25px_rgba(37,99,235,0.3),inset_0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.04]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/25 via-indigo-300/10 to-transparent opacity-90 pointer-events-none"></div>

              <div className="relative flex items-center gap-2 mb-3 pb-2 border-b border-blue-300/30">
                <CheckCircle2 className="text-gray-600 w-5 h-5" />
                <h3 className="text-sm font-bold text-gray-800 uppercase">
                  Jobs You Can Get
                </h3>
              </div>

              <ul className="space-y-1.5">
                {jobList.map((job, i) => (
                  <li
                    key={i}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100/40 transition-all duration-300 cursor-default shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(59,130,246,0.25)]"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">
                      {job}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blobY {
          0% {
            transform: translateY(0) scale(1);
          }
          33% {
            transform: translateY(-50px) scale(1.1);
          }
          66% {
            transform: translateY(30px) scale(0.9);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        .animate-blobY {
          animation: blobY 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
