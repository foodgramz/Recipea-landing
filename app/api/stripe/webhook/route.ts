import { NextResponse } from "next/server"
// import { headers } from "next/headers"
// import { stripe } from "@/lib/stripe"
// import { db } from "@/lib/db"

export async function POST(req: Request) {
  return NextResponse.json(
    { message: "Stripe webhook integration is temporarily disabled" },
    { status: 503 }
  )
  
  // const body = await req.text()
  // const headersList = headers()
  // const signature = headersList.get("Stripe-Signature") as string

  // let event

  // try {
  //   event = stripe.webhooks.constructEvent(
  //     body,
  //     signature,
  //     process.env.STRIPE_WEBHOOK_SECRET!
  //   )
  // } catch (error) {
  //   return NextResponse.json(
  //     { message: "Webhook signature verification failed" },
  //     { status: 400 }
  //   )
  // }

  // try {
  //   switch (event.type) {
  //     case "checkout.session.completed": {
  //       const session = event.data.object
  //       const userId = session.metadata?.userId
  //       const planType = session.metadata?.planType

  //       if (!userId || !planType) {
  //         throw new Error("Missing metadata")
  //       }

  //       // Calculate end date (1 month from now)
  //       const endDate = new Date()
  //       endDate.setMonth(endDate.getMonth() + 1)

  //       // Create or update membership
  //       await db.membership.upsert({
  //         where: { userId },
  //         create: {
  //           userId,
  //           type: planType,
  //           status: "active",
  //           endDate,
  //           stripeCustomerId: session.customer as string,
  //           stripeSubscriptionId: session.subscription as string,
  //         },
  //         update: {
  //           type: planType,
  //           status: "active",
  //           endDate,
  //           stripeCustomerId: session.customer as string,
  //           stripeSubscriptionId: session.subscription as string,
  //         },
  //       })

  //       break
  //     }

  //     case "customer.subscription.updated":
  //     case "customer.subscription.deleted": {
  //       const subscription = event.data.object
  //       const customerId = subscription.customer as string

  //       // Find user by Stripe customer ID
  //       const membership = await db.membership.findUnique({
  //         where: { stripeCustomerId: customerId },
  //       })

  //       if (!membership) {
  //         throw new Error("Membership not found")
  //       }

  //       // Update membership status
  //       await db.membership.update({
  //         where: { id: membership.id },
  //         data: {
  //           status: subscription.status === "active" ? "active" : "cancelled",
  //           endDate: new Date(subscription.current_period_end * 1000),
  //         },
  //       })

  //       break
  //     }
  //   }

  //   return NextResponse.json({ received: true })
  // } catch (error) {
  //   console.error("Webhook error:", error)
  //   return NextResponse.json(
  //     { message: "Webhook handler failed" },
  //     { status: 500 }
  //   )
  // }
} 