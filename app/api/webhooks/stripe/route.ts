import { NextResponse } from "next/server"
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"
import Stripe from "stripe"

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// This is your Stripe webhook secret for testing your endpoint locally.
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get("stripe-signature") as string

  let event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret!)
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`)
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  // Get a reference to Supabase
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options })
        },
      },
    },
  )

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const checkoutSession = event.data.object as Stripe.Checkout.Session
      const supabaseUUID = checkoutSession.metadata?.supabaseUUID

      if (supabaseUUID) {
        // Get the subscription details
        const subscription = await stripe.subscriptions.retrieve(checkoutSession.subscription as string)
        const productId = subscription.items.data[0].price.product as string
        const product = await stripe.products.retrieve(productId)

        // Determine the membership level from the product name or metadata
        let membershipLevel = "standard" // Default
        if (product.name.toLowerCase().includes("professional")) {
          membershipLevel = "professional"
        } else if (product.name.toLowerCase().includes("corporate")) {
          membershipLevel = "corporate"
        } else if (product.name.toLowerCase().includes("student")) {
          membershipLevel = "student"
        }

        // Update the user's membership status in Supabase
        const { error } = await supabase
          .from("memberships")
          .upsert({
            user_id: supabaseUUID,
            stripe_subscription_id: subscription.id,
            stripe_customer_id: checkoutSession.customer as string,
            membership_level: membershipLevel,
            is_active: true,
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .select()

        if (error) {
          console.error("Error updating membership:", error)
          return NextResponse.json({ error: "Error updating membership" }, { status: 500 })
        }
      }
      break

    case "invoice.payment_succeeded":
      const invoice = event.data.object as Stripe.Invoice
      if (invoice.subscription) {
        // Get the subscription details
        const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string)
        const customerId = subscription.customer as string

        // Find the user with this customer ID
        const { data: profiles, error: profileError } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customerId)
          .limit(1)

        if (profileError || !profiles || profiles.length === 0) {
          console.error("Error finding user with customer ID:", customerId, profileError)
          break
        }

        const userId = profiles[0].id

        // Update the subscription end date
        const { error } = await supabase
          .from("memberships")
          .update({
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            is_active: true,
            updated_at: new Date().toISOString(),
          })
          .eq("user_id", userId)

        if (error) {
          console.error("Error updating subscription end date:", error)
        }
      }
      break

    case "customer.subscription.deleted":
      const deletedSubscription = event.data.object as Stripe.Subscription
      const customerId = deletedSubscription.customer as string

      // Find the user with this customer ID
      const { data: profiles, error: profileError } = await supabase
        .from("profiles")
        .select("id")
        .eq("stripe_customer_id", customerId)
        .limit(1)

      if (profileError || !profiles || profiles.length === 0) {
        console.error("Error finding user with customer ID:", customerId, profileError)
        break
      }

      const userId = profiles[0].id

      // Mark the subscription as inactive
      const { error } = await supabase
        .from("memberships")
        .update({
          is_active: false,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", userId)
        .eq("stripe_subscription_id", deletedSubscription.id)

      if (error) {
        console.error("Error marking subscription as inactive:", error)
      }
      break

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
