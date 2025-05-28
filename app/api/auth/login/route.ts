import { NextResponse } from "next/server"
import { compare } from "bcryptjs"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { message: "请提供邮箱和密码" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("recipea")
    const users = db.collection("users")

    // 查找用户
    const user = await users.findOne({ email })

    if (!user) {
      return NextResponse.json(
        { message: "用户不存在" },
        { status: 404 }
      )
    }

    // 验证密码
    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "密码错误" },
        { status: 401 }
      )
    }

    // 获取会员信息
    const membership = await db.collection("memberships").findOne({ 
      userId: user._id.toString() 
    })

    // 返回用户信息（不包含密码）
    return NextResponse.json({
      id: user._id.toString(),
      email: user.email,
      username: user.username,
      membership: membership ? {
        type: membership.type,
        status: membership.status,
        endDate: membership.endDate
      } : null
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { message: "服务器错误" },
      { status: 500 }
    )
  }
} 