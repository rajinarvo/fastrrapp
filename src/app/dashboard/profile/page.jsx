"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session) {
    // if user not logged in, redirect to login
    redirect("/login")
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Profile</h2>

      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm">
        <p className="text-[var(--color-foreground)]">
          <strong>Name:</strong> {session.user?.name}
        </p>
        <p className="text-[var(--color-foreground)]">
          <strong>Email:</strong> {session.user?.email}
        </p>
      </div>
    </div>
  )
}
