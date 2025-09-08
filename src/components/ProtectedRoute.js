"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <div className="flex h-screen items-center justify-center">
      <p className="text-lg font-medium">Loading...</p>
    </div>
  }

  if (!session) return null // wait for redirect

  return <>{children}</>
}
