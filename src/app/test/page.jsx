"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] flex items-center justify-center p-[var(--space-lg)]">
      <div className="max-w-md w-full space-y-[var(--space-lg)]">
        
        {/* Card Example */}
        <Card>
          <CardHeader>
            <CardTitle>Test Components</CardTitle>
            <CardDescription>
              These are tokenized UI components (Button, Input, Label, Card).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-[var(--space-md)]">
            
            {/* Input + Label */}
            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="space-y-[var(--space-xs)]">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>

          </CardContent>
          <CardFooter className="flex justify-end gap-[var(--space-sm)]">
            <Button variant="secondary">Cancel</Button>
            <Button variant="default">Submit</Button>
          </CardFooter>
        </Card>

        {/* Button Variants */}
        <div className="flex flex-wrap gap-[var(--space-sm)]">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>

      </div>
    </div>
  )
}
