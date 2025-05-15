"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function WaitlistPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if the popup has been shown before in this session
    const hasShownPopup = sessionStorage.getItem("recipea_waitlist_popup_shown")

    if (!hasShownPopup) {
      // Set a timer to show the popup after 1 minute (60000 ms)
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Mark that we've shown the popup in this session
        sessionStorage.setItem("recipea_waitlist_popup_shown", "true")
      }, 60000)

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // In a real app, you would send the email to your backend here
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-black border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center">
            <span className="text-orange-500 mr-2">🚀</span> Join Our Waitlist
          </DialogTitle>
          <DialogDescription>Be the first to experience Recipea when we launch!</DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/5 border-white/10 focus-visible:ring-orange-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-black" disabled={loading}>
                {loading ? "Processing..." : "Join Waitlist"}
              </Button>
            </div>
            <div className="text-xs text-gray-400 text-center">
              We respect your privacy. Your email will only be used for Recipea updates.
            </div>
          </form>
        ) : (
          <div className="py-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Thank You!</h3>
            <p className="text-gray-400 mb-4">You're on the list! We'll notify you when Recipea launches.</p>
            <Button variant="outline" className="border-white/10 hover:bg-white/5" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        )}

        <div className="mt-2 text-center text-sm">
          <Link href="/waitlist" className="text-orange-500 hover:underline" onClick={() => setIsOpen(false)}>
            Learn more about our waitlist
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
