import ProtectedRoute from "@/components/ProtectedRoute"
import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      
          <main className="flex-1 p-6 bg-[var(--color-background)]">
            {children}
          </main>
       
    </ProtectedRoute>
  )
}
