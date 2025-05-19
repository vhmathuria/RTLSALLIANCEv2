import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Stripe from "stripe"

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

    // Validate inputs
    if (!priceId || !tier) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Get the current user
    const supabase = createRouteHandlerClient({ cookies })
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 })
    }

    // Get or create Stripe customer
    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id, email")
      .eq("id", user.id)
      .single()

    let stripeCustomerId = profile?.stripe_customer_id

    if (!stripeCustomerId) {
      // Create a new customer
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          supabase_id: user.id,
        },
      })

      stripeCustomerId = customer.id

      // Save the customer ID to the profile
      await supabase.from("profiles").update({ stripe_customer_id: stripeCustomerId }).eq("id", user.id)
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
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/membership/cancel`,
      metadata: {
        user_id: user.id,
        membership_tier: tier,
        email: user.email || profile?.email || "",
      },
      subscription_data: {
        metadata: {
          user_id: user.id,
          membership_tier: tier,
        },
      },
    })

    // Store the session in Supabase
    await supabase.from("stripe_sessions").insert({
      user_id: user.id,
      session_id: session.id,
      status: "created",
      metadata: {
        price_id: priceId,
        tier: tier,
      },
    })

    // Redirect to the checkout URL
    return NextResponse.redirect(session.url!, 303)
  } catch (error: any) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: error.message || "Failed to create checkout session" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    // Get the current user
    const supabase = createRouteHandlerClient({ cookies })
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 })
    }

    // Get user's active subscription
    const { data: subscription } = await supabase
      .from("profiles")
      .select("membership_status, membership_tier")
      .eq("id", user.id)
      .single()

    if (subscription?.membership_status === "active") {
      return NextResponse.json({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/account`,
        status: "active",
        tier: subscription.membership_tier,
      })
    }

    // Check for pending sessions
    const { data: pendingSession } = await supabase
      .from("stripe_sessions")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "created")
      .order("created_at", { ascending: false })
      .limit(1)
      .single()

    if (pendingSession) {
      // Retrieve the session from Stripe to get the current URL
      const session = await stripe.checkout.sessions.retrieve(pendingSession.session_id)

      if (session.url) {
        return NextResponse.json({ url: session.url, status: "pending" })
      }
    }

    // Default to account page
    return NextResponse.json({ url: `${process.env.NEXT_PUBLIC_BASE_URL}/account`, status: "none" })
  } catch (error: any) {
    console.error("Error retrieving checkout session:", error)
    return NextResponse.json({ error: error.message || "Failed to retrieve checkout session" }, { status: 500 })
  }
}
