import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 bg-orange-500 rounded-md overflow-hidden">
                <Image src="/images/logo.png" alt="Recipea Logo" width={40} height={40} className="object-cover" />
              </div>
              <span className="text-xl font-semibold">Recipea</span>
            </Link>
            <p className="text-gray-400 mb-4">
              AI-powered recipe and meal planning assistant that helps you cook delicious meals with ingredients you
              already have.
            </p>
            {/* <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </Link>
            </div> */}
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  AI Recipe Suggestions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Meal Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Step-by-Step Cooking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Nutritional Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Shopping Lists
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  FAQs
                </Link>
              </li> */}
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Four Parts Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
