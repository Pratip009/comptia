/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch users and their orders/payments
  const fetchData = async () => {
    const { data, error } = await supabase
      .from("users_info")
      .select(`
        id,
        name,
        email,
        contact_number,
        created_at,
        orders (
          id,
          product_name,
          workshop_date,
          price,
          created_at,
          payments (
            amount,
            currency,
            status,
            paypal_order_id,
            created_at
          )
        )
      `);

    if (error) console.error("Error fetching:", error);
    setData(data || []);
    setLoading(false);
  };

  useEffect(() => {
    const checkAdmin = async () => {
      const adminEmail = localStorage.getItem("adminEmail");
      const adminPassword = localStorage.getItem("adminPassword");

      // Redirect to login if not set
      if (!adminEmail || !adminPassword) {
        router.push("/login");
        return;
      }

      await fetchData();
    };

    checkAdmin();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-gray-500">
        Loading...
      </div>
    );

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Contact</th>
            <th className="p-3 text-left">Workshop</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Payment</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={7} className="p-4 text-center text-gray-500">
                No records found
              </td>
            </tr>
          ) : (
            data.map((user) =>
              user.orders.map((order: any) =>
                order.payments.map((payment: any) => (
                  <tr key={payment.paypal_order_id} className="border-b">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.contact_number}</td>
                    <td className="p-3">{order.product_name}</td>
                    <td className="p-3">{order.workshop_date}</td>
                    <td className="p-3">
                      ${payment.amount} {payment.currency}
                    </td>
                    <td
                      className={`p-3 font-semibold ${
                        payment.status === "COMPLETED"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {payment.status}
                    </td>
                  </tr>
                ))
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

// Set admin credentials in localStorage once (for testing):
// localStorage.setItem("adminEmail", "admin@bhiworkshop.com");
// localStorage.setItem("adminPassword", "Bhi@12345");
