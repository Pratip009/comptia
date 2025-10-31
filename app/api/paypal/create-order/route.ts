/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

const PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com"; // change to api-m.paypal.com for live

export async function POST(req: Request) {
  try {
    const { amount = "2500.00" } = await req.json();

    const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
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
            amount: {
              currency_code: "USD",
              value: amount,
            },
            description: "CompTIA A+ Bootcamp Enrollment",
          },
        ],
      }),
    });

    const order = await response.json();
    return NextResponse.json(order);
  } catch (err: any) {
    console.error("PayPal create order error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
