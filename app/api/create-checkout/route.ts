import { NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@/lib/supabase-server"

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function POST(request: Request) {
  try {
    // Get form data
    const formData = await request.formData()
    const priceId = formData.get("priceId") as string
    const tier = formData.get("tier") as string
    const userId = formData.get("userId") as string

    if (!priceId || !tier) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get the user from the request
    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // If no user is found and no userId was provided, return error
    if (!user && !userId) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 })
    }

    // Use provided userId or fall back to authenticated user
    const customerId = userId || user?.id

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/membership/upgrade`,
      client_reference_id: customerId,
      metadata: {
        user_id: customerId,
        membership_tier: tier,
      },
    })

    if (!session.url) {
      throw new Error("Failed to create checkout session")
    }

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: error.message || "Failed to create checkout session" }, { status: 500 })
  }
}
