"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100 text-black text-center px-6">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
        <CheckCircle className="text-[#00E1FF] w-20 h-20 mb-6" />
      </motion.div>
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00E1FF] to-[#317AFF] bg-clip-text text-transparent">
        Payment Successful 🎉
      </h1>
      <p className="text-gray-800 mb-8 max-w-md">
        Thank you! Your spot in the CompTIA A+ Bootcamp is reserved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00E1FF] to-[#317AFF] font-semibold text-white shadow-lg hover:opacity-90 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
