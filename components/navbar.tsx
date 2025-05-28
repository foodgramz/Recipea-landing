"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 bg-orange-500 rounded-md overflow-hidden">
              <Image src="/images/logo.png" alt="Recipea Logo" width={40} height={40} className="object-cover" />
            </div>
            <span className="text-xl font-semibold">Recipea</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="hover:text-orange-500 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="hover:text-orange-500 transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="hover:text-orange-500 transition-colors">
              Pricing
            </Link>
            <Link href="/membership" className="hover:text-orange-500 transition-colors">
              Membership
            </Link>
            <Link href="/waitlist" className="text-orange-500 font-medium hover:text-orange-400 transition-colors">
              Join Waitlist
            </Link>
            <Link href="/register">
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
            {/* <Button className="bg-orange-500 hover:bg-orange-600 text-black">Download App</Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-4">
            <Link
              href="#features"
              className="block py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="block py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="block py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/membership"
              className="block py-2 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            <Link
              href="/waitlist"
              className="block py-2 text-orange-500 font-medium hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Link>
            <Link href="/register">
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
            {/* <Button
              className="w-full bg-orange-500 hover:bg-orange-600 text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Download App
            </Button> */}
          </div>
        )}
      </div>
    </nav>
  )
}
