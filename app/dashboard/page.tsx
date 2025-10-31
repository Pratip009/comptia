/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { LogOut, ShoppingBag, User } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [payments, setPayments] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"profile" | "purchases">("profile");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch current user
  useEffect(() => {
    const getUser = async () => {
      console.log("🔍 Fetching current user...");
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("❌ Error fetching user:", error.message);
        return;
      }

      if (!data.user) {
        console.warn("⚠️ No user found — redirecting to /login");
        window.location.href = "/login";
      } else {
        console.log("✅ Logged in user:", data.user);
        setUser(data.user);
      }
    };
    getUser();
  }, []);

  // ✅ Fetch payments when user is available
  useEffect(() => {
    if (!user) return;

    const getPayments = async () => {
      console.log("🔄 Fetching payments for user:", user.id);
      setLoading(true);

      const { data, error } = await supabase
        .from("payments")
        .select("id, paypal_order_id, order_id, amount, currency, status, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("❌ Error fetching payments:", error.message);
      } else {
        console.log("✅ Payments fetched successfully:", data);
        if (!data || data.length === 0) {
          console.warn("⚠️ No payments found for this user ID:", user.id);
        }
        setPayments(data || []);
      }

      setLoading(false);
    };

    getPayments();
  }, [user]);

  // ✅ Handle logout
  const handleSignOut = async () => {
    console.log("🚪 Signing out...");
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  // ✅ Show while user info is loading
  if (!user) {
    return (
      <p className="text-gray-600 text-center mt-20">
        Loading user information...
      </p>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between shadow-md">
        <div>
          <div className="flex flex-col items-center mb-10">
            <div className="bg-blue-500 p-3 rounded-full mb-3 text-white shadow-md">
              <User size={32} />
            </div>
            <h2 className="text-lg font-semibold text-center text-gray-800">
              {user.user_metadata?.name || "User"}
            </h2>
            <p className="text-sm text-gray-500 text-center">{user.email}</p>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition font-medium ${
                activeTab === "profile"
                  ? "bg-blue-500 text-white shadow"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <User size={18} />
              Profile
            </button>

            <button
              onClick={() => setActiveTab("purchases")}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition font-medium ${
                activeTab === "purchases"
                  ? "bg-blue-500 text-white shadow"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <ShoppingBag size={18} />
              Purchases
            </button>
          </nav>
        </div>

        <button
          onClick={handleSignOut}
          className="flex items-center justify-center gap-2 text-red-500 hover:text-red-600 mt-6 font-medium"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-x-auto">
        {activeTab === "profile" && (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Profile Details
            </h1>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="space-y-4">
                <p>
                  <span className="text-gray-500 font-medium">Full Name:</span>{" "}
                  <span className="font-semibold text-gray-800">
                    {user.user_metadata?.name || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="text-gray-500 font-medium">Email:</span>{" "}
                  <span className="font-semibold text-gray-800">
                    {user.email}
                  </span>
                </p>
                <p>
                  <span className="text-gray-500 font-medium">Phone:</span>{" "}
                  <span className="font-semibold text-gray-800">
                    {user.user_metadata?.phone || "Not Provided"}
                  </span>
                </p>
                <p>
                  <span className="text-gray-500 font-medium">
                    Account Created:
                  </span>{" "}
                  <span className="font-semibold text-gray-800">
                    {new Date(user.created_at).toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "purchases" && (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Your Purchases
            </h1>

            {loading ? (
              <p className="text-gray-500">Loading payments...</p>
            ) : payments.length === 0 ? (
              <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center text-gray-500">
                No purchases found yet.
              </div>
            ) : (
              <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-gray-100 border-b border-gray-200 text-gray-600 uppercase text-xs font-semibold">
                    <tr>
                      <th className="p-3">PayPal Order ID</th>
                      <th className="p-3">Amount</th>
                      <th className="p-3">Currency</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((p) => (
                      <tr
                        key={p.id}
                        className="border-t border-gray-100 hover:bg-gray-50 transition"
                      >
                        <td className="p-3 font-mono text-gray-800">
                          {p.paypal_order_id || p.order_id || "N/A"}
                        </td>
                        <td className="p-3 font-semibold">${p.amount}</td>
                        <td className="p-3">{p.currency}</td>
                        <td
                          className={`p-3 font-semibold ${
                            p.status === "COMPLETED"
                              ? "text-green-600"
                              : p.status === "PENDING"
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {p.status}
                        </td>
                        <td className="p-3 text-gray-500">
                          {new Date(p.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
