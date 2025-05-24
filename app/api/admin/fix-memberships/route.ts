import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import Stripe from "stripe"

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function POST(request: Request) {
  try {
    // Get the user from Supabase auth
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: any) {
            cookieStore.delete({ name, ...options })
          },
        },
      },
    )

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 })
    }

    // Check if the user is an admin
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single()

    if (profileError || profile?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    // Get all active Stripe subscriptions
    const subscriptions = await stripe.subscriptions.list({
      status: "active",
      expand: ["data.customer", "data.items.data.price.product"],
    })

    let updatedCount = 0
    let errorCount = 0
    const errors = []

    // Process each subscription
    for (const subscription of subscriptions.data) {
      try {
        const customerId = subscription.customer as Stripe.Customer
        const customerEmail = (customerId as any).email

        if (!customerEmail) {
          errors.push(`No email for customer ${customerId.id}`)
          errorCount++
          continue
        }

        // Find the user with this email
        const { data: users, error: userError } = await supabase
          .from("profiles")
          .select("id, stripe_customer_id")
          .eq("email", customerEmail)
          .limit(1)

        if (userError || !users || users.length === 0) {
          errors.push(`No user found for email ${customerEmail}`)
          errorCount++
          continue
        }

        const userId = users[0].id

        // Determine the membership level from the product name
        const product = subscription.items.data[0].price.product as Stripe.Product
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
            user_id: userId,
            stripe_subscription_id: subscription.id,
            stripe_customer_id: customerId.id,
            membership_level: membershipLevel,
            is_active: true,
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .select()

        if (error) {
          errors.push(`Error updating membership for ${customerEmail}: ${error.message}`)
          errorCount++
          continue
        }

        // Update the stripe_customer_id in the profiles table if it's not set
        if (!users[0].stripe_customer_id) {
          await supabase.from("profiles").update({ stripe_customer_id: customerId.id }).eq("id", userId)
        }

        updatedCount++
      } catch (err: any) {
        errors.push(`Error processing subscription ${subscription.id}: ${err.message}`)
        errorCount++
      }
    }

    return NextResponse.json({
      success: true,
      message: `Updated ${updatedCount} memberships with ${errorCount} errors`,
      errors: errors.length > 0 ? errors : undefined,
    })
  } catch (error: any) {
    console.error("Error fixing memberships:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
