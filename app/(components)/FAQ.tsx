"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the CompTIA A+ Certification?",
    answer:
      "CompTIA A+ is an entry-level IT certification recognized globally. It validates foundational skills in hardware, software, networking, and troubleshooting.",
  },
  {
    question: "Who should take this bootcamp?",
    answer:
      "This program is ideal for beginners, career changers, or professionals looking to start an IT career or strengthen their technical support skills.",
  },
  {
    question: "Do I need any prior experience?",
    answer:
      "No prior IT experience is required! We start with fundamentals and provide hands-on lab sessions to build your confidence and technical skills.",
  },
  {
    question: "Is the exam included in the tuition?",
    answer:
      "Exam vouchers are not included in the tuition, but we guide you through the registration and preparation process for CompTIA A+ 220-1101 & 220-1102 exams.",
  },
  {
    question: "What kind of job can I get after certification?",
    answer:
      "After earning your A+ certification, you can qualify for roles such as IT Support Specialist, Help Desk Technician, Field Service Technician, and more.",
  },
  {
    question: "Do you offer job placement support?",
    answer:
      "Yes! We provide resume help, mock interviews, and job placement assistance to help you land your first IT job after completing the bootcamp.",
  },
  {
    question: "How do I enroll?",
    answer:
      "You can enroll directly through our website by clicking the 'Enroll Now' button, or contact our admissions team for group discounts and payment options.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-gray-950 text-white overflow-hidden"
    >
      {/* 🔵 Animated Glowing Blue Background Blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-120px] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[150px] -z-10"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-[180px] -z-10"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <HelpCircle className="w-10 h-10 text-[#00E1FF]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Have questions about the CompTIA A+ Bootcamp? We’ve got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden hover:border-[#00E1FF]/50 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#00E1FF] transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
