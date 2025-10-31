/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { orderID, user_id } = await req.json();

    console.log("💳 Capturing PayPal order:", { orderID, user_id });

    // ✅ Step 1: Capture PayPal Payment
    const res = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
          ).toString("base64"),
      },
    });

    const details = await res.json();

    if (!details.id) {
      console.error("❌ Invalid PayPal capture response:", details);
      return NextResponse.json({ error: "Invalid capture response" }, { status: 400 });
    }

    const amount =
      details.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value || "0.00";
    const currency =
      details.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.currency_code ||
      "USD";
    const status = details.status || "COMPLETED";

    console.log("🧾 Capture Info:", { amount, currency, status });

    // ✅ Step 2: Create internal order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          user_id,
          product_name: "CompTIA A+ Bootcamp Enrollment",
          price: amount,
          quantity: 1,
        },
      ])
      .select()
      .single();

    if (orderError) {
      console.error("❌ Supabase order insert error:", orderError);
      return NextResponse.json({ error: orderError.message }, { status: 500 });
    }

    console.log("📦 Order created:", order.id);

    // ✅ Step 3: Store final payment info
    const { error: paymentError } = await supabase.from("payments").insert([
      {
        user_id,
        order_id: order.id, // UUID from orders table
        paypal_order_id: details.id,
        amount,
        currency,
        status,
        details,
      },
    ]);

    if (paymentError) {
      console.error("❌ Payment insert error:", paymentError);
      return NextResponse.json({ error: paymentError.message }, { status: 400 });
    }

    console.log("✅ Payment successfully captured and stored");

    return NextResponse.json({ success: true, details });
  } catch (err: any) {
    console.error("💥 Capture route error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
