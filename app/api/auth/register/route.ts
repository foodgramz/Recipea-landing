import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import clientPromise from "@/lib/mongodb"

export async function POST(req: Request) {
  try {
    const { email, password, username } = await req.json()

    if (!email || !password || !username) {
      return NextResponse.json(
        { message: "Please provide all required fields" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("recipea")
    const users = db.collection("users")

    // Check if email and username already exist
    const existingUser = await users.findOne({
      $or: [
        { email },
        { username }
      ]
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "Email or username already exists" },
        { status: 400 }
      )
    }

    // Hash the password
    const hashedPassword = await hash(password, 12)

    // Create new user
    const result = await users.insertOne({
      email,
      username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return NextResponse.json({
      message: "Registration successful",
      user: {
        id: result.insertedId.toString(),
        email,
        username
      }
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
} 