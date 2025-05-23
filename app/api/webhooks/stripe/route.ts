import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@/lib/supabase-server"
import { revalidatePath } from "next/cache"

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// Webhook endpoint for Stripe events
export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (error: any) {
    console.error(`Webhook signature verification failed: ${error.message}`)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  try {
    // Handle different event types
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        console.log("Checkout session completed:", session.id)

        // Get user ID and membership tier from metadata
        const userId = session.metadata?.user_id
        const membershipTier = session.metadata?.membership_tier?.toLowerCase() // Ensure lowercase

        if (!userId || !membershipTier) {
          console.error("Missing user ID or membership tier in session metadata", { userId, membershipTier })
          throw new Error("Missing user ID or membership tier in session metadata")
        }

        // Get subscription details
        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
          console.log("Retrieved subscription:", subscription.id)

          // Calculate expiry date (end of current period)
          const expiryDate = new Date(subscription.current_period_end * 1000)

          // Update user membership using direct update to avoid RLS issues
          const supabase = createClient()

          // Use a direct SQL query to bypass RLS policies
          const { error: sqlError } = await supabase.rpc("admin_update_membership", {
            user_id: userId,
            tier: membershipTier,
            status: "active",
            expiry: expiryDate.toISOString(),
            stripe_id: session.customer as string,
            payment_date: new Date().toISOString(),
          })

          if (sqlError) {
            console.error("Error updating profile with RPC:", sqlError)

            // Fallback to direct update
            const { error: updateError } = await supabase
              .from("profiles")
              .update({
                membership_tier: membershipTier,
                membership_status: "active",
                membership_expiry: expiryDate.toISOString(),
                last_payment_date: new Date().toISOString(),
                stripe_customer_id: session.customer as string,
              })
              .eq("id", userId)

            if (updateError) {
              console.error("Error updating profile directly:", updateError)
              throw updateError
            }
          }

          // Explicitly revalidate paths that might show different content based on membership
          console.log("Revalidating paths after checkout completion")
          revalidatePath("/resources")
          revalidatePath("/membership")
          revalidatePath("/account")

          // Also try to revalidate specific article paths
          try {
            const { data: articles } = await supabase.from("staging_articles").select("slug").limit(50)
            if (articles) {
              console.log(`Revalidating ${articles.length} article paths`)
              for (const article of articles) {
                if (article.slug) {
                  revalidatePath(`/resources/${article.slug}`)
                }
              }
            }
          } catch (revalidationError) {
            console.error("Error during article path revalidation:", revalidationError)
          }

          console.log("Profile updated successfully for user:", userId)
        } else {
          console.error("No subscription found in session:", session.id)
        }

        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("Subscription updated:", subscription.id)

        // Get user from Stripe customer
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if (!customer || customer.deleted) {
          console.error("Customer not found or deleted:", subscription.customer)
          throw new Error("Customer not found or deleted")
        }

        // Find user by Stripe customer ID
        const supabase = createClient()
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customer.id)
          .single()

        if (profileError || !profile) {
          console.error("User profile not found for customer:", customer.id, profileError)
          throw new Error("User profile not found")
        }

        // Get membership tier from subscription metadata or product
        let membershipTier = "public"

        if (subscription.metadata?.membership_tier) {
          membershipTier = subscription.metadata.membership_tier.toLowerCase() // Ensure lowercase
        } else {
          // Try to determine tier from price ID
          const priceId = subscription.items.data[0]?.price.id

          if (priceId === process.env.STRIPE_STUDENT_PRICE_ID) {
            membershipTier = "student"
          } else if (priceId === process.env.STRIPE_PROFESSIONAL_PRICE_ID) {
            membershipTier = "professional"
          } else if (priceId === process.env.STRIPE_CORPORATE_PRICE_ID) {
            membershipTier = "corporate"
          }
        }

        // Calculate expiry date (end of current period)
        const expiryDate = new Date(subscription.current_period_end * 1000)

        // Use a direct SQL query to bypass RLS policies
        const { error: sqlError } = await supabase.rpc("admin_update_membership", {
          user_id: profile.id,
          tier: membershipTier,
          status: "active",
          expiry: expiryDate.toISOString(),
          stripe_id: customer.id,
          payment_date: new Date().toISOString(),
        })

        if (sqlError) {
          console.error("Error updating profile with RPC:", sqlError)

          // Fallback to direct update
          const { error: updateError } = await supabase
            .from("profiles")
            .update({
              membership_tier: membershipTier,
              membership_status: "active",
              membership_expiry: expiryDate.toISOString(),
              last_payment_date: new Date().toISOString(),
            })
            .eq("id", profile.id)

          if (updateError) {
            console.error("Error updating profile directly for subscription update:", updateError)
            throw updateError
          }
        }

        // Explicitly revalidate paths
        console.log("Revalidating paths after subscription update")
        revalidatePath("/resources")
        revalidatePath("/membership")
        revalidatePath("/account")

        // Also try to revalidate specific article paths
        try {
          const { data: articles } = await supabase.from("staging_articles").select("slug").limit(50)
          if (articles) {
            console.log(`Revalidating ${articles.length} article paths`)
            for (const article of articles) {
              if (article.slug) {
                revalidatePath(`/resources/${article.slug}`)
              }
            }
          }
        } catch (revalidationError) {
          console.error("Error during article path revalidation:", revalidationError)
        }

        console.log("Profile updated successfully for subscription update, user:", profile.id)

        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("Subscription deleted:", subscription.id)

        // Get user from Stripe customer
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if (!customer || customer.deleted) {
          console.error("Customer not found or deleted for subscription deletion:", subscription.customer)
          throw new Error("Customer not found or deleted")
        }

        // Find user by Stripe customer ID
        const supabase = createClient()
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customer.id)
          .single()

        if (profileError || !profile) {
          console.error("User profile not found for subscription deletion:", customer.id, profileError)
          throw new Error("User profile not found")
        }

        // Use a direct SQL query to bypass RLS policies
        const { error: sqlError } = await supabase.rpc("admin_update_membership", {
          user_id: profile.id,
          tier: "public",
          status: "inactive",
          expiry: null,
          stripe_id: customer.id,
          payment_date: new Date().toISOString(),
        })

        if (sqlError) {
          console.error("Error updating profile with RPC:", sqlError)

          // Fallback to direct update
          const { error: updateError } = await supabase
            .from("profiles")
            .update({
              membership_tier: "public",
              membership_status: "inactive",
            })
            .eq("id", profile.id)

          if (updateError) {
            console.error("Error downgrading profile for subscription deletion:", updateError)
            throw updateError
          }
        }

        // Explicitly revalidate paths
        console.log("Revalidating paths after subscription deletion")
        revalidatePath("/resources")
        revalidatePath("/membership")
        revalidatePath("/account")

        // Also try to revalidate specific article paths
        try {
          const { data: articles } = await supabase.from("staging_articles").select("slug").limit(50)
          if (articles) {
            console.log(`Revalidating ${articles.length} article paths`)
            for (const article of articles) {
              if (article.slug) {
                revalidatePath(`/resources/${article.slug}`)
              }
            }
          }
        } catch (revalidationError) {
          console.error("Error during article path revalidation:", revalidationError)
        }

        console.log("Profile downgraded successfully for subscription deletion, user:", profile.id)

        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error(`Webhook error: ${error.message}`)
    return NextResponse.json({ error: `Webhook handler failed: ${error.message}` }, { status: 500 })
  }
}
