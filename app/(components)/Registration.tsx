"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CalendarDays,
    MapPin,
    Clock,
    Award,
    DollarSign,
    ArrowRight,
} from "lucide-react";

const Registration = () => {
    return (
        <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
            {/* Animated Background Orbs */}
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-5 sm:top-20 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/30 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-[26rem] sm:h-[26rem] bg-cyan-400/25 rounded-full blur-3xl -z-10"
            />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#317AFF]">
                        Reserve Your Spot
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-300 text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl mx-auto px-2"
                >
                    Secure your place in our exclusive 5-day hands-on CompTIA A+ Bootcamp.
                </motion.p>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 max-w-3xl mx-auto overflow-hidden"
                >
                    {/* Glowing Gradient Border */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-r from-[#00E1FF] to-[#317AFF] opacity-70"></div>

                    <div className="relative bg-gray-950/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10">
                        <ul className="text-left space-y-4 sm:space-y-5 text-gray-200 text-base sm:text-lg mb-10 sm:mb-12">
                            <li className="flex items-start sm:items-center gap-3">
                                <DollarSign className="text-[#00E1FF] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                                <span>
                                    <strong>Tuition:</strong> $2,500{" "}
                                    <span className="text-gray-400 text-sm sm:text-base">
                                        (Exam vouchers not included)
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-start sm:items-center gap-3">
                                <Clock className="text-[#00E1FF] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                                <span>
                                    <strong>Duration:</strong> 5 Days (10 AM – 6 PM)
                                </span>
                            </li>
                            <li className="flex items-start sm:items-center gap-3">
                                <MapPin className="text-[#00E1FF] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                                <span>
                                    <strong>Location:</strong> Jersey City, NJ
                                </span>
                            </li>
                            <li className="flex items-start sm:items-center gap-3">
                                <Award className="text-[#00E1FF] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                                <span>
                                    <strong>Certification:</strong> CompTIA A+ (220-1101 & 220-1102)
                                </span>
                            </li>
                            <li className="flex items-start sm:items-center gap-3">
                                <CalendarDays className="text-[#00E1FF] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                                <span>
                                    <strong>Mode:</strong> In-person Instructor-led Bootcamp
                                </span>
                            </li>
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                href="/enroll"
                                className="group px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg bg-gradient-to-r from-[#00E1FF] to-[#317AFF] text-white shadow-lg flex items-center justify-center gap-2 hover:shadow-[#317AFF]/50 transition-all duration-300"
                            >
                                Enroll Now
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => {
                                    const section = document.getElementById("contact");
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg border-2 border-[#00E1FF] text-[#00E1FF] hover:bg-[#00E1FF]/10 transition-all duration-300"
                            >
                                Contact Us for Group Discounts
                            </motion.button>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Registration;
