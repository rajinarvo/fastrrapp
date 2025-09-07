// components/ui/card.js
import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] shadow-[var(--shadow-sm)]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-1.5 p-[var(--space-md)]", className)} {...props} />
  )
}

function CardTitle({ className, ...props }) {
  return (
    <h3 className={cn("font-semibold text-lg", className)} {...props} />
  )
}

function CardDescription({ className, ...props }) {
  return (
    <p className={cn("text-sm text-[var(--color-muted-foreground)]", className)} {...props} />
  )
}

function CardContent({ className, ...props }) {
  return <div className={cn("p-[var(--space-md)] pt-0", className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return <div className={cn("flex items-center p-[var(--space-md)] pt-0", className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
