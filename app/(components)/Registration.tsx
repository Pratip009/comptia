/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import {
  CalendarDays,
  MapPin,
  Clock,
  Award,
  DollarSign,
  ArrowRight,
} from "lucide-react";

// --- PayPal Types ---
interface PayPalActions {
  order: { capture: () => Promise<any> };
}

interface PayPalButtonOptions {
  style?: Record<string, unknown>;
  createOrder: () => Promise<string>;
  onApprove: (data: unknown, actions: PayPalActions) => Promise<void>;
  onError: (err: Error) => void;
  render: (container: HTMLElement) => void;
}

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: Omit<PayPalButtonOptions, "render">) => PayPalButtonOptions;
    };
  }
}

const Registration: React.FC = () => {
  const paypalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [showPayPal, setShowPayPal] = useState(false);

  const workshopDates = [
    { month: "November 2025", dates: "Nov 7, 8, 14, 15, 21" },
    { month: "December 2025", dates: "Dec 5, 6, 12, 13, 19" },
    { month: "January 2026", dates: "Jan 2, 3, 9, 10, 16" },
    { month: "February 2026", dates: "Feb 6, 7, 13, 14, 20" },
    { month: "March 2026", dates: "Mar 6, 7, 13, 14, 20" },
    { month: "April 2026", dates: "Apr 3, 4, 10, 11, 17" },
    { month: "May 2026", dates: "May 1, 2, 8, 9, 15" },
    { month: "June 2026", dates: "Jun 5, 6, 12, 13, 19" },
  ];

  useEffect(() => {
    if (showPayPal) initializePayPal();
  }, [showPayPal]);

  const initializePayPal = async () => {
    console.log("🚀 Initializing PayPal Checkout...");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("⚠️ Please log in before proceeding to payment.");
      router.push("/login");
      return;
    }

    if (document.getElementById("paypal-sdk")) {
      renderPayPalButtons(user);
      return;
    }

    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    script.onload = () => renderPayPalButtons(user);
    script.onerror = () => console.error("❌ Failed to load PayPal SDK");
    document.body.appendChild(script);
  };

  const renderPayPalButtons = (user: any) => {
    if (!window.paypal || !paypalRef.current) {
      console.error("❌ PayPal SDK not available");
      return;
    }

    paypalRef.current.innerHTML = "";

    const paypalButtons = window.paypal.Buttons({
      style: { color: "blue", shape: "pill", label: "pay", layout: "vertical" },

      createOrder: async (): Promise<string> => {
        const res = await fetch("/api/paypal/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: "2500.00",
            userId: user.id,
          }),
        });

        if (!res.ok) throw new Error("PayPal order creation failed");
        const order = await res.json();
        return order.id as string;
      },

      onApprove: async (_data, actions) => {
        try {
          const details = await actions.order.capture();

          const paypal_order_id = details.id;
          const purchase_unit = details.purchase_units?.[0] || {};
          const amount = purchase_unit.amount?.value || "2500.00";
          const currency = purchase_unit.amount?.currency_code || "USD";
          const status = details.status || "COMPLETED";

          // --- Save to Supabase ---
          const { data: newOrder, error: orderError } = await supabase
            .from("orders")
            .insert([
              {
                user_id: user.id,
                product_name: "CompTIA A+ Bootcamp Enrollment",
                price: amount,
                quantity: 1,
                workshop_date: selectedDate, // ✅ added selected date
              },
            ])
            .select()
            .single();

          if (orderError) throw orderError;

          const { error: paymentError } = await supabase.from("payments").insert([
            {
              user_id: user.id,
              order_id: newOrder.id,
              paypal_order_id,
              amount,
              currency,
              status,
              details,
            },
          ]);

          if (paymentError) throw paymentError;

          alert("✅ Payment successful!");
          router.push("/success");
        } catch (err) {
          console.error("🚨 Error during payment:", err);
          alert("Something went wrong during payment.");
        }
      },

      onError: (err) => {
        console.error("❌ PayPal Checkout Error:", err);
        router.push("/failed");
      },
    });

    paypalButtons.render(paypalRef.current);
  };

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
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E1FF] to-[#317AFF]">
            Reserve Your Spot
          </span>
        </motion.h2>

        <p className="text-gray-300 text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl mx-auto px-2">
          Secure your place in our exclusive 5-day hands-on CompTIA A+ Bootcamp.
        </p>

        {/* Info Card */}
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-10 max-w-3xl mx-auto overflow-hidden">
          <ul className="text-left space-y-5 text-gray-200 text-base sm:text-lg mb-10">
            <li className="flex items-center gap-3">
              <DollarSign className="text-[#00E1FF]" />
              <span>
                <strong>Tuition:</strong> $2,500{" "}
                <span className="text-gray-400 text-sm">(Exam vouchers not included)</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-[#00E1FF]" />
              <span><strong>Duration:</strong> 5 Days (10 AM – 6 PM)</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-[#00E1FF]" />
              <span><strong>Location:</strong> Jersey City, NJ</span>
            </li>
            <li className="flex items-center gap-3">
              <Award className="text-[#00E1FF]" />
              <span><strong>Certification:</strong> CompTIA A+</span>
            </li>
            <li className="flex items-center gap-3">
              <CalendarDays className="text-[#00E1FF]" />
              <span><strong>Mode:</strong> In-person Bootcamp</span>
            </li>
          </ul>

          {/* Dropdown */}
          <div className="mb-6">
            <label className="block text-left text-sm text-gray-400 mb-2">
              Select Workshop Date
            </label>
            <select
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00E1FF]"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setShowPayPal(!!e.target.value);
              }}
            >
              <option value="">Choose a date...</option>
              {workshopDates.map((d, i) => (
                <option key={i} value={`${d.month} - ${d.dates}`}>
                  {d.month} — {d.dates}
                </option>
              ))}
            </select>
          </div>

          {/* PayPal Button */}
          {showPayPal && (
            <div className="flex justify-center mt-6">
              <div ref={paypalRef}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Registration;
