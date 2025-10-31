"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Check if admin
      const { data: admin, error: adminError } = await supabase
        .from("admins")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single();

      if (admin && !adminError) {
        // Save session locally
        localStorage.setItem("admin", JSON.stringify(admin));
        setMessage("✅ Logged in as Admin!");
        router.push("/admin-dashboard");
        return;
      }

      // 2️⃣ Otherwise, normal Supabase user
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage("Invalid user credentials.");
      } else {
        setMessage("🎉 Logged in successfully!");
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-md shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign in to continue your learning journey
        </p>

        {/* Input Fields */}
        <div className="space-y-4">
          <div className="flex items-center p-3 rounded-lg border border-gray-300 focus-within:border-blue-500 transition">
            <Mail className="text-gray-500 mr-3" size={18} />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white outline-none w-full text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center p-3 rounded-lg border border-gray-300 focus-within:border-blue-500 transition">
            <Lock className="text-gray-500 mr-3" size={18} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white outline-none w-full text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="mt-6 w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-gray-600 mt-4"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
