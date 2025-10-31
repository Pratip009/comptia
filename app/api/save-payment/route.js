import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req) {
  const supabase = createRouteHandlerClient({ cookies });
  const body = await req.json();

  // get current user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("❌ User not found:", userError);
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  console.log("🧾 Saving payment for user:", user.email);

  const { orderId, amount, currency = "USD", status, payer, details } = body;

  const { error } = await supabase
    .from("payments")
    .insert([
      {
        user_id: user.id,
        order_id: orderId,
        amount: amount?.value || 0,
        currency,
        status,
        details: details || payer,
      },
    ]);

  if (error) {
    console.error("❌ Database insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "✅ Payment saved successfully" });
}
