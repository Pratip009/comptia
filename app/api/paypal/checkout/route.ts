/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com"; // Live: api-m.paypal.com

// ✅ Supabase server client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role key, not anon
);

export async function POST(req: Request) {
  try {
    const { amount = "2500.00", userId } = await req.json();

    console.log("🧾 PayPal Checkout Started:", { userId, amount });

    // ✅ Step 1: Create PayPal Order
    const paypalRes = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
          ).toString("base64"),
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: { currency_code: "USD", value: amount },
            description: "CompTIA A+ Bootcamp Enrollment",
          },
        ],
      }),
    });

    const order = await paypalRes.json();

    if (!order.id) {
      console.error("❌ PayPal order creation failed:", order);
      return NextResponse.json({ error: "Failed to create order" }, { status: 400 });
    }

    console.log("🆔 PayPal order created successfully:", order.id);

    // ✅ Step 2: Save to Supabase (paypal_order_id as TEXT)
    const { error } = await supabase.from("payments").insert([
      {
        user_id: userId || null,
        paypal_order_id: order.id, // TEXT (not UUID)
        amount,
        currency: "USD",
        status: order.status || "CREATED",
        details: order,
      },
    ]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
    } else {
      console.log("✅ PayPal order logged in Supabase");
    }

    // ✅ Step 3: Return order to frontend
    return NextResponse.json(order);
  } catch (err: any) {
    console.error("💥 PayPal Checkout Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
