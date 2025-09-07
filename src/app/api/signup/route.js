import clientPromise from "@/lib/mongodb"
import bcrypt from "bcrypt"

export async function POST(req) {
  try {
    const { name, email, password } = await req.json()

    const client = await clientPromise
    const db = client.db()

    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    })

    return new Response(JSON.stringify({ success: true }), { status: 201 })
  } catch (err) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    })
  }
}
