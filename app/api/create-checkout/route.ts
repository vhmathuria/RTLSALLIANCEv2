import { NextResponse } from "next/server"
import Stripe from "stripe"
import { supabase } from "@/lib/supabase"

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

    // Validate inputs
    if (!priceId || !tier || !userId) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Get the user's profile
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", userId)
      .single()

    if (profileError && profileError.code !== "PGRST116") {
      console.error("Error getting profile:", profileError)
      return NextResponse.json({ error: "Error getting user profile" }, { status: 500 })
    }

    // Get or create Stripe customer
    let stripeCustomerId = profile?.stripe_customer_id

    if (!stripeCustomerId) {
      // Get user email
      const { data: userData } = await supabase.auth.admin.getUserById(userId)

      if (!userData?.user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }

      // Create a new customer
      const customer = await stripe.customers.create({
        email: userData.user.email,
        metadata: {
          supabase_id: userId,
        },
      })

      stripeCustomerId = customer.id

      // Save the customer ID to the profile
      await supabase.from("profiles").update({ stripe_customer_id: stripeCustomerId }).eq("id", userId)
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/membership/upgrade`,
      metadata: {
        user_id: userId,
        membership_tier: tier,
      },
    })

    // Redirect to the checkout URL
    return NextResponse.redirect(session.url!, 303)
  } catch (error: any) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: error.message || "Failed to create checkout session" }, { status: 500 })
  }
}
