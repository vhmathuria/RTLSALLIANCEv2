import { auth, currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"

const settingsUrl = absoluteUrl("/settings")

export async function GET() {
  try {
    const { userId } = auth()
    const user = await currentUser()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    const subscription = await prismadb.subscription.findUnique({
      where: {
        userId: userId,
      },
    })

    if (subscription) {
      return NextResponse.json({ url: settingsUrl })
    }

    const stripeSession = await prismadb.stripeSession.findFirst({
      where: {
        userId: userId,
        status: "open",
      },
    })

    if (stripeSession) {
      return NextResponse.json({ url: stripeSession.url })
    }

    return NextResponse.json({ url: settingsUrl })
  } catch (error: any) {
    console.log("[STRIPE_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const user = await currentUser()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    const { priceId, tier } = await req.json()

    if (!priceId) {
      return new NextResponse("Price ID is required", { status: 400 })
    }

    const stripeCustomerId = await prismadb.user
      .findUnique({
        where: {
          id: userId,
        },
        select: {
          stripeCustomerId: true,
        },
      })
      .then((user) => user?.stripeCustomerId)

    if (!stripeCustomerId) {
      return new NextResponse("Stripe customer ID not found", { status: 400 })
    }

    // Create checkout session
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

    await prismadb.stripeSession.create({
      data: {
        userId: userId,
        sessionId: session.id,
        url: session.url || "",
        status: session.status || "open",
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.log("[STRIPE_POST]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
