import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // 连接 MongoDB
    const client = await clientPromise
    const db = client.db(process.env.DATABASE_NAME || 'waitinglist')
    const collection = db.collection('emails')

    // 检查邮箱是否已存在
    const existingEmail = await collection.findOne({ email })
    if (existingEmail) {
      return NextResponse.json(
        { error: "This email is already registered" },
        { status: 400 }
      )
    }

    // 保存邮箱
    await collection.insertOne({
      email,
      createdAt: new Date(),
    })

    return NextResponse.json(
      { message: "Successfully joined the waitlist" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error saving email:", error)
    return NextResponse.json(
      { error: "Failed to save email" },
      { status: 500 }
    )
  }
} 