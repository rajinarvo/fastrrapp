"use client"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[var(--color-card)] shadow-sm">
      <Link href="/" className="font-bold text-lg">FastrrApp</Link>

      <div className="flex gap-4">
        {session ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <Button onClick={() => signOut()}>Logout</Button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  )
}
