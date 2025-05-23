import { createClient } from "@/utils/supabase/server"
import { stripe } from "@/utils/stripe"
import type { Price, Product, Subscription, StripeWebhookParams } from "@/utils/types"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { updateMembership } from "@/lib/actions/auth-actions"

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
])

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature")

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  let event: StripeWebhookParams

  try {
    if (!signature || !webhookSecret) return new Response("Missing secret", { status: 400 })

    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.log("Failed to construct event", err.message)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case "checkout.session.completed":
          const checkoutSession = event.data.object as StripeWebhookParams["type"]
          if (checkoutSession.mode === "subscription") {
            const subscriptionId = checkoutSession.subscription
            await createOrRetrieveCustomer({
              customerId: checkoutSession.customer as string,
              email: checkoutSession.customer_details?.email!,
            })

            if (subscriptionId) {
              const subscription = await stripe.subscriptions.retrieve(subscriptionId as string)
              await upsertSubscription({
                ...subscription,
                price: subscription.items.data[0].price.id,
              })
            }
          }
          break
        case "customer.subscription.created":
        case "customer.subscription.updated":
          const subscription = event.data.object as StripeWebhookParams["type"]
          await upsertSubscription({
            ...subscription,
            price: subscription.items.data[0].price.id,
          })
          break
        case "customer.subscription.deleted":
          const subscription = event.data.object as StripeWebhookParams["type"]
          await deleteSubscription(subscription.id)
          break
        default:
          throw new Error("Unhandled relevant event!")
      }
    } catch (error) {
      console.error(error)
      return new Response("Webhook handler failed. View your Next.js function logs.", {
        status: 400,
      })
    }
  }
  return NextResponse.json({ received: true }, { status: 200 })
}

const createOrRetrieveCustomer = async ({
  customerId,
  email,
}: {
  customerId: string
  email: string
}) => {
  const supabase = createClient()
  const { data, error } = await supabase.from("profiles").select("*").eq("stripe_customer_id", customerId).single()

  if (error) {
    console.error("Error finding customer:", error.message)
  }
  // If no customer, create a new one
  if (!data) {
    const { error: newCustomerError } = await supabase.from("profiles").insert([
      {
        stripe_customer_id: customerId,
        email,
      },
    ])
    if (newCustomerError) {
      console.error("Error creating customer:", newCustomerError.message)
    }
    console.log(`New customer created [Stripe customer_id: ${customerId}]`)
  } else {
    console.log(`Customer found [Stripe customer_id: ${customerId}]`)
  }
  return data
}

const upsertProductRecord = async (product: StripeWebhookParams["type"]) => {
  const supabase = createClient()

  const productData: Product = {
    id: product.id,
    active: product.active,
    name: product.name,
    description: product.description ?? null,
    image: product.images?.[0] ?? null,
    metadata: product.metadata,
  }

  const { error } = await supabase.from("products").upsert([productData])
  if (error) console.error("Error inserting products:", error.message)
}

const upsertPriceRecord = async (price: StripeWebhookParams["type"]) => {
  const supabase = createClient()

  const priceData: Price = {
    id: price.id,
    product_id: price.product as string,
    active: price.active,
    currency: price.currency,
    description: price.nickname ?? null,
    type: price.type,
    unit_amount: price.unit_amount ?? null,
    interval: price.recurring?.interval,
    interval_count: price.recurring?.interval_count,
    trial_period_days: price.recurring?.trial_period_days,
    metadata: price.metadata,
  }

  const { error } = await supabase.from("prices").upsert([priceData])
  if (error) console.error("Error inserting price:", error.message)
}

const upsertSubscription = async (subscription: StripeWebhookParams["type"] & { price: string }) => {
  const supabase = createClient()

  const priceId = subscription.price
  const userId = subscription.metadata.supabase_user_id
  const membershipTier = subscription.metadata.membership_tier
  const expiryDate = new Date(subscription.current_period_end * 1000)
  const session = subscription

  const subscriptionData: Subscription = {
    id: subscription.id,
    user_id: userId,
    status: subscription.status,
    metadata: subscription.metadata,
    price_id: priceId,
    quantity: subscription.quantity,
    cancel_at_period_end: subscription.cancel_at_period_end,
    created: new Date(subscription.created * 1000).toISOString(),
    current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
    ended_at: subscription.ended_at ? new Date(subscription.ended_at * 1000).toISOString() : null,
    cancel_at: subscription.cancel_at ? new Date(subscription.cancel_at * 1000).toISOString() : null,
    canceled_at: subscription.canceled_at ? new Date(subscription.canceled_at * 1000).toISOString() : null,
    trial_start: subscription.trial_start ? new Date(subscription.trial_start * 1000).toISOString() : null,
    trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null,
  }

  const { error } = await supabase.from("subscriptions").upsert([subscriptionData])
  if (error) console.error("Error inserting subscription:", error.message)

  // Update user membership using both methods for redundancy
  try {
    await updateMembership(userId, membershipTier, expiryDate)
    console.log("Updated membership via server action")
  } catch (serverActionError) {
    console.error("Server action failed, falling back to direct update:", serverActionError)
  }

  // Always perform direct update as a fallback
  const supabase = createClient()
  const { error: updateError } = await supabase
    .from("profiles")
    .update({
      membership_tier: membershipTier,
      membership_status: "active", // Ensure lowercase
      membership_expiry: expiryDate.toISOString(),
      last_payment_date: new Date().toISOString(),
      stripe_customer_id: session.customer as string,
    })
    .eq("id", userId)
}

const deleteSubscription = async (subscriptionId: string) => {
  const supabase = createClient()

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("subscriptions.id", subscriptionId)
    .single()

  if (profileError) {
    console.error("Error finding profile:", profileError.message)
    return
  }

  // Downgrade user to public tier
  const { error: updateError } = await supabase
    .from("profiles")
    .update({
      membership_tier: "public",
      membership_status: "inactive", // Ensure lowercase
    })
    .eq("id", profile.id)

  if (updateError) {
    console.error("Error updating profile:", updateError.message)
  }
}
