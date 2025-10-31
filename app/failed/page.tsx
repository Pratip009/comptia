"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { XCircle } from "lucide-react";

export default function FailedPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100 text-black text-center px-6">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
        <XCircle className="text-red-500 w-20 h-20 mb-6" />
      </motion.div>
      <h1 className="text-4xl font-bold mb-4 text-red-400">Payment Failed ❌</h1>
      <p className="text-gray-800 mb-8 max-w-md">
        Something went wrong. Please try again or contact support.
      </p>
      <Link
        href="/registration"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 font-semibold text-white shadow-lg hover:opacity-90 transition-all"
      >
        Try Again
      </Link>
    </div>
  );
}
