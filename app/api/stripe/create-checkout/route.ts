import { NextResponse } from "next/server"
// import { stripe } from "@/lib/stripe"
// import { PLANS } from "@/lib/stripe"
// import { db } from "@/lib/db"

// type PlanType = keyof typeof PLANS

// interface RequestBody {
//   userId: string
//   planType: string
// }

// interface UserWithMembership {
//   id: string
//   email: string
//   username: string
//   membership: {
//     id: string
//     userId: string
//     type: string
//     status: string
//     startDate: Date
//     endDate: Date
//     stripeCustomerId?: string
//     stripeSubscriptionId?: string
//     createdAt: Date
//     updatedAt: Date
//   } | null
// }

export async function POST(req: Request) {
  return NextResponse.json(
    { message: "Stripe integration is temporarily disabled" },
    { status: 503 }
  )
  
  // try {
  //   const { userId, planType } = await req.json() as RequestBody

  //   if (!userId || !planType) {
  //     return NextResponse.json(
  //       { message: "Missing required fields" },
  //       { status: 400 }
  //     )
  //   }

  //   // Get user
  //   const user = await db.user.findUnique({
  //     where: { id: userId },
  //     include: { membership: true }
  //   }) as unknown as UserWithMembership | null

  //   if (!user) {
  //     return NextResponse.json(
  //       { message: "User not found" },
  //       { status: 404 }
  //     )
  //   }

  //   // Get plan details
  //   const normalizedPlanType = planType.toUpperCase() as PlanType
  //   const plan = PLANS[normalizedPlanType]
  //   if (!plan) {
  //     return NextResponse.json(
  //       { message: "Invalid plan type" },
  //       { status: 400 }
  //     )
  //   }

  //   // Create or get Stripe customer
  //   let customerId = user.membership?.stripeCustomerId
  //   if (!customerId) {
  //     const customer = await stripe.customers.create({
  //       email: user.email,
  //       metadata: {
  //         userId: user.id
  //       }
  //     })
  //     customerId = customer.id
  //   }

  //   // Create checkout session
  //   const session = await stripe.checkout.sessions.create({
  //     customer: customerId,
  //     payment_method_types: ["card"],
  //     line_items: [
  //       {
  //         price_data: {
  //           currency: "usd",
  //           product_data: {
  //             name: plan.name,
  //             description: plan.features.join(", ")
  //           },
  //           unit_amount: Math.round(plan.price * 100) // Convert to cents
  //         },
  //         quantity: 1
  //       }
  //     ],
  //     mode: "subscription",
  //     success_url: `${process.env.NEXT_PUBLIC_APP_URL}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
  //     cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/membership`,
  //     metadata: {
  //       userId: user.id,
  //       planType: planType
  //     }
  //   })

  //   return NextResponse.json({ sessionId: session.id })
  // } catch (error) {
  //   console.error("Stripe checkout error:", error)
  //   return NextResponse.json(
  //     { message: "Internal server error" },
  //     { status: 500 }
  //   )
  // }
} 