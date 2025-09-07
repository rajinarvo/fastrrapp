import Navbar from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Navbar />
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-bold">Welcome to FastrrApp</h1>
        <p className="mt-4 text-muted-foreground">A tokenized design system app with auth.</p>
      </main>
    </div>
  )
}
