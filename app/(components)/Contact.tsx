"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white text-gray-800 overflow-hidden"
    >
      {/* 🔵 Animated Blue Blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-400/25 rounded-full blur-[130px] -z-10"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -35, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-180px] right-[-150px] w-[480px] h-[480px] bg-cyan-400/25 rounded-full blur-[140px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left — Contact Info + Map */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get in <span className="text-[#317AFF]">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Have questions about our courses or bootcamps?  
            Reach out today — we’re here to help you start your IT career with confidence.
          </p>

          <ul className="space-y-5 mb-10">
            <li className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#317AFF] mt-1" />
              <span>
                591 Summit Ave, Suite No. 400 <br />
                Jersey City, New Jersey, NJ 07306
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-[#317AFF]" />
              <span>201-377-1594</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#317AFF]" />
              <span>admin@bhilearning.com</span>
            </li>
          </ul>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-[1.02] transition duration-300">
            <iframe
              src="https://www.google.com/maps?q=591+Summit+Ave,+Jersey+City,+NJ+07306&output=embed"
              width="100%"
              height="250"
              loading="lazy"
              className="border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right — 3D Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative p-10 bg-white/80 backdrop-blur-2xl border border-blue-100 rounded-3xl shadow-[0_10px_40px_rgba(49,122,255,0.15)] transform hover:scale-[1.02] hover:shadow-[0_15px_50px_rgba(49,122,255,0.25)] transition duration-500"
        >
          <h3 className="text-3xl font-semibold mb-6 text-[#317AFF] text-center">
            Send us a Message
          </h3>

          <form className="space-y-6">
            {/* Name */}
            <div className="group relative">
              <input
                type="text"
                required
                placeholder=" "
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 rounded-xl peer focus:outline-none focus:border-[#317AFF] transition-all duration-300 shadow-inner focus:shadow-[0_0_20px_rgba(49,122,255,0.15)]"
              />
              <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#317AFF] bg-white px-1">
                Name *
              </label>
            </div>

            {/* Email */}
            <div className="group relative">
              <input
                type="email"
                required
                placeholder=" "
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 rounded-xl peer focus:outline-none focus:border-[#317AFF] transition-all duration-300 shadow-inner focus:shadow-[0_0_20px_rgba(49,122,255,0.15)]"
              />
              <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#317AFF] bg-white px-1">
                Email *
              </label>
            </div>

            {/* Phone */}
            <div className="group relative">
              <input
                type="tel"
                placeholder=" "
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 rounded-xl peer focus:outline-none focus:border-[#317AFF] transition-all duration-300 shadow-inner focus:shadow-[0_0_20px_rgba(49,122,255,0.15)]"
              />
              <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#317AFF] bg-white px-1">
                Phone (Optional)
              </label>
            </div>

            {/* Message */}
            <div className="group relative">
              <textarea
                rows={4}
                placeholder=" "
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 rounded-xl peer focus:outline-none focus:border-[#317AFF] transition-all duration-300 shadow-inner focus:shadow-[0_0_20px_rgba(49,122,255,0.15)] resize-none"
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#317AFF] bg-white px-1">
                Message (Optional)
              </label>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#317AFF] to-blue-600 text-white font-semibold py-3 rounded-xl shadow-[0_5px_20px_rgba(49,122,255,0.4)] hover:shadow-[0_8px_25px_rgba(49,122,255,0.5)] transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
