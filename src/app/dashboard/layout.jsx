import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login") // send unauthenticated users to login
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-4">
        <h2 className="font-bold mb-4">Sidebar</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="block">Home</a>
          <a href="/dashboard/profile" className="block">Profile</a>
          <a href="/dashboard/settings" className="block">Settings</a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-14 border-b flex items-center justify-between px-4">
          <span className="font-semibold">Dashboard</span>
          <form action="/api/auth/signout" method="post">
            <button
              type="submit"
              className="px-3 py-1 rounded bg-red-500 text-white text-sm"
            >
              Sign Out
            </button>
          </form>
        </header>

        {/* Page body */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  )
}
