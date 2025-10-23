"use client";

import Image from "next/image";
import { CheckCircle2, Shield, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const curriculumHighlights = [
    "Computer Hardware & System Components",
    "Operating Systems (Windows, macOS, Linux)",
    "Networking & Cloud Concepts",
    "Security Fundamentals",
    "Troubleshooting Methodology",
    "Virtualization & Mobile Device Setup",
    "Customer Support & IT Professionalism",
  ];

  const courseSchedule = [
    { day: "Day 1", topics: "Fundamentals and System Components" },
    { day: "Day 2", topics: "Operating Systems + Networking Basics" },
    { day: "Day 3", topics: "Advanced Troubleshooting + IT Operations" },
    { day: "Day 4", topics: "Security Advanced & Best Practices" },
    { day: "Day 5", topics: "Final Review + Exam Preparation" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-blue-800 py-24 lg:py-28 text-white overflow-hidden"
    >
      {/* Animated white blobs */}
      <motion.div
        className="absolute top-10 left-16 w-72 h-72 bg-white/15 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-96 h-96 bg-white/5 rounded-full blur-[100px]"
        animate={{ x: [0, 60, -60, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            What You&apos;ll Learn
          </h2>
          <p className="text-lg text-blue-50 leading-relaxed">
            Our{" "}
            <span className="font-semibold text-yellow-200">
              CompTIA A+ Bootcamp
            </span>{" "}
            delivers hands-on, foundational IT training designed to launch your
            career in technical support or IT operations. In just{" "}
            <strong className="text-white">5 days</strong>, you’ll master
            real-world skills across hardware, operating systems, networking,
            security, and troubleshooting — preparing you for the{" "}
            <strong className="text-white">220-1101</strong> and{" "}
            <strong className="text-white">220-1102</strong> certification exams.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <div className="relative group">
              <Image
                src="/it.jpg"
                alt="IT Bootcamp"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105 border border-white/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900/50 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20">
                <div className="text-yellow-200 font-bold text-3xl">5 Days</div>
                <div className="text-xs uppercase text-blue-100 font-semibold">
                  Intensive Program
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Curriculum */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-blue-900/50 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
              <Shield className="text-yellow-300 w-6 h-6" /> Curriculum Highlights
            </h3>
            <ul className="space-y-3">
              {curriculumHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-200 w-5 h-5 mt-0.5" />
                  <span className="text-blue-50">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Schedule Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto mt-10 mb-0"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3">
            <Calendar className="text-yellow-200 w-7 h-7" /> 5-Day Bootcamp Schedule
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {courseSchedule.map((day, i) => (
              <div
                key={i}
                className="flex flex-col justify-between h-48 bg-blue-900/50 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-yellow-200/20 transition-all text-center"
              >
                <div>
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-white text-blue-900 font-bold rounded-full mb-4 shadow-md">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-white text-lg mb-2">
                    {day.day}
                  </h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {day.topics}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
