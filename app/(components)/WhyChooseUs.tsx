"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "Certified CompTIA Instructors",
    "Real-World Lab Experience",
    "Small Class Sizes",
    "Job Placement Assistance", 
    "Proven Student Success",
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      
      {/* Subtle Animated Blobs */}
      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Modern Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
              <Star className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-medium uppercase tracking-wider">Why Choose BHI</span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Train With{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Bright Horizon Institute
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Hands-on IT training guided by certified experts. 
              <span className="text-cyan-300 font-semibold"> Real skills for real jobs.</span>
            </p>

            {/* Compact Modern Cards */}
            <div className="space-y-3">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-cyan-300/50 transition-all duration-300"
                >
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium group-hover:text-cyan-200">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Enhanced Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow Effect */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"
            />
            
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative z-10"
            >
              <Image
                src="/as.jpg"
                alt="Bright Horizon Institute"
                width={450}
                height={350}
                className="rounded-2xl shadow-2xl object-cover border border-white/20"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;