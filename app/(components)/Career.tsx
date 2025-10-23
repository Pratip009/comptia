"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Career = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image (Bigger) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-lg lg:max-w-2xl">
            <Image
              src="/career.jpg"
              alt="CompTIA A+ Career Opportunities"
              width={800}
              height={650}
              className="rounded-3xl shadow-2xl object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#317AFF]/10 to-transparent" />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Career Opportunities <br className="hidden md:block" /> After CompTIA A+
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Earning your <strong>CompTIA A+ certification</strong> opens the door to a wide range of
            entry-level IT roles. This globally recognized credential demonstrates your ability to
            support, maintain, and troubleshoot computer systems — the foundation of a thriving
            tech career.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you’re just starting out, looking to transition into IT, or aiming to validate
            your technical skills, CompTIA A+ sets you up for success in technical support,
            networking, and cybersecurity pathways.
          </p>
        </motion.div>
      </div>

      {/* Soft floating blobs */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl -z-10 animate-pulse" />
    </section>
  );
};

export default Career;
