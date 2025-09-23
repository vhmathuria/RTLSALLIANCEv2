import { type NextRequest, NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Stripe from "stripe"

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Starting checkout session creation")

    // Get form data
    const formData = await request.formData()
    const priceId = formData.get("priceId") as string
    const tier = formData.get("tier") as string

    console.log("[v0] Form data received:", { priceId, tier })

    // Validate inputs
    if (!priceId || !tier) {
      console.log("[v0] Missing required parameters")
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Get the current user
    const supabase = createRouteHandlerClient({ cookies })
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    console.log("[v0] Auth check result:", { user: user?.id, authError })

    if (!user || authError) {
      console.log("[v0] User not authenticated:", authError)
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 })
    }

    // Get or create Stripe customer
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("stripe_customer_id, email")
      .eq("id", user.id)
      .single()

    console.log("[v0] Profile lookup result:", { profile, profileError })

    let stripeCustomerId = profile?.stripe_customer_id

    if (!stripeCustomerId) {
      console.log("[v0] Creating new Stripe customer")
      // Create a new customer
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          supabase_id: user.id,
        },
      })

      stripeCustomerId = customer.id
      console.log("[v0] Created Stripe customer:", stripeCustomerId)

      // Save the customer ID to the profile
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ stripe_customer_id: stripeCustomerId })
        .eq("id", user.id)

      if (updateError) {
        console.log("[v0] Error updating profile with customer ID:", updateError)
      }
    }

    console.log("[v0] Creating checkout session with customer:", stripeCustomerId)

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
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/membership/cancel`,
      metadata: {
        user_id: user.id,
        membership_tier: tier,
      },
    })

    console.log("[v0] Checkout session created:", session.id)

    // Redirect to the checkout URL
    return NextResponse.redirect(session.url!, 303)
  } catch (error: any) {
    console.error("[v0] Error creating checkout session:", error)
    return NextResponse.json({ error: error.message || "Failed to create checkout session" }, { status: 500 })
  }
}
