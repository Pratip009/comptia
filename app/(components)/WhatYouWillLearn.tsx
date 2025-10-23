"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users } from "lucide-react";

const WhatYouWillLearn = () => {
  const learnPoints = [
    "Computer Hardware: Assemble, upgrade, and troubleshoot core components.",
    "Operating Systems: Install, configure, and manage Windows, macOS, and Linux.",
    "Networking Basics: Learn IP addressing, routers, and wireless connectivity.",
    "Security Fundamentals: Protect devices and networks from common threats.",
    "Cloud Computing & Virtualization: Understand cloud concepts and virtual machines.",
    "Troubleshooting Methodology: Diagnose and resolve software and hardware issues.",
    "Professional Skills: Build strong communication and customer support abilities.",
  ];

  const attendPoints = [
    "Beginners looking to start an IT career",
    "Help Desk and Support Technicians seeking certification",
    "Career changers transitioning into tech",
    "Students pursuing IT fundamentals",
  ];

  return (
    <section
      id="learn"
      className="relative py-28 text-gray-900 overflow-hidden"
      style={{
        backgroundImage: "url('/learn.jpg')", // place learn.jpg inside /public
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

      {/* Floating light blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-16 w-64 h-64 bg-white/60 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-16 w-80 h-80 bg-white/50 rounded-full blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
        >
          What You’ll Learn
        </motion.h2>

        {/* Learning Points */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {learnPoints.map((point, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 min-h-[110px]"
            >
              <CheckCircle2 className="w-7 h-7 text-[#317AFF] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </motion.div>

        {/* Who Should Attend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-[#317AFF] mb-6 flex items-center justify-center gap-3">
            <Users className="w-7 h-7" />
            Is This Course Right for You?
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {attendPoints.map((point, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <p className="text-gray-800 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
