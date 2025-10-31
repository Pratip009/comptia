"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    role: "IT Support Specialist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The instructors were amazing! The hands-on labs helped me understand real-world troubleshooting. I passed both A+ exams on my first try.",
  },
  {
    name: "Samantha L.",
    role: "Career Changer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "I came from a non-technical background, and this bootcamp made everything click. The small class size gave me confidence to ask questions.",
  },
  {
    name: "David P.",
    role: "Help Desk Analyst",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    quote:
      "The content was up-to-date and aligned perfectly with the CompTIA exam objectives. I got a job offer two weeks after completing the course!",
  },
  {
    name: "Priya K.",
    role: "Computer Technician",
    image: "https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80",
    quote:
      "I loved the one-on-one attention. The instructor made even complex networking topics simple and fun to learn.",
  },
  {
    name: "Aaron T.",
    role: "Student",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    quote:
      "The bootcamp gave me real-world experience that college didn’t. I feel ready to start my IT career confidently.",
  },
  {
    name: "Maria G.",
    role: "Field Service Technician",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "The lab exercises were excellent. I learned how to build and troubleshoot PCs from scratch — totally worth it!",
  },
  {
    name: "Kevin D.",
    role: "Network Support Trainee",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    quote:
      "Bright Horizon Institute provided great support even after the course. Their job placement help was a game-changer for me.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative py-15 overflow-hidden text-gray-900"
    >
      {/* 🔵 Animated Blue Blobs Background */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-400/40 rounded-full blur-[160px] -z-10"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-sky-500/50 rounded-full blur-[180px] -z-10"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] left-[40%] w-[300px] h-[300px] bg-indigo-400/40 rounded-full blur-[160px] -z-10"
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-14 text-gray-900"
        >
          What Our Students Say
        </motion.h2>

        {/* Testimonial Card */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto hover:shadow-blue-100 transition-all"
        >
          <motion.img
            src={current.image}
            alt={current.name}
            className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-500 shadow-md mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
            “{current.quote}”
          </p>

          <h4 className="font-semibold text-gray-900 text-lg">{current.name}</h4>
          <p className="text-sm text-gray-500">{current.role}</p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full border border-gray-300 hover:bg-blue-50 hover:scale-105 transition-all shadow-sm"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full border border-gray-300 hover:bg-blue-50 hover:scale-105 transition-all shadow-sm"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
