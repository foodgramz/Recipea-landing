import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Bell, Check, ArrowRight, Share2, Users, Leaf } from "lucide-react"
import WaitlistForm from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "Join Recipea Waitlist | Gen Z Cooking Made Easy",
  description: "Be among the first to experience Recipea's AI-powered recipe app. Perfect for Gen Z and young adults - create delicious meals, reduce food waste, and share your recipes with a community of food lovers.",
  keywords: "Gen Z cooking, easy recipes, food waste reduction, recipe sharing, meal prep, budget cooking, student recipes, quick meals, sustainable cooking, recipe community, early access",
}

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="py-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-orange-500/20 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Coming Soon
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Cooking Made Easy for <span className="text-orange-500">Gen Z</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join our exclusive waiting list and be among the first to transform your cooking experience. Create delicious meals,
                reduce food waste, and share your recipes with a community of food lovers. Perfect for students, young professionals,
                and anyone who wants to cook better while saving money and the planet.
              </p>

              <div className="max-w-xl mx-auto">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-black to-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Join Our Waiting List?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                  <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Bell className="text-orange-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Early Access</h3>
                  <p className="text-gray-300">
                    Be among the first to experience Recipea's AI-powered cooking platform. Get exclusive access to features
                    that make cooking easier, more fun, and more sustainable.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                  <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Share2 className="text-orange-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Share Your Recipes</h3>
                  <p className="text-gray-300">
                    Join a community of young food creators. Share your recipes, get feedback, and discover new ideas from
                    other Gen Z cooks. Build your food creator profile and grow your following.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                  <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Leaf className="text-orange-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Sustainable Cooking</h3>
                  <p className="text-gray-300">
                    Learn how to reduce food waste and cook sustainably. Get tips on meal planning, ingredient substitutions,
                    and creative ways to use leftovers. Save money while helping the planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-b from-black to-black/90 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">Perfect for Gen Z Cooks</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                        <span>Quick and easy recipes for busy students and young professionals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                        <span>Budget-friendly meal planning and shopping lists</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                        <span>Food waste reduction tips and sustainable cooking guides</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                        <span>Share your recipes and build your food creator profile</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                        <span>Join a community of young food lovers and creators</span>
                      </li>
                    </ul>
                    <div className="mt-8 flex">
                      <Link href="#waitlist">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-black flex items-center gap-2">
                          Join the Waiting List <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                      <Image
                        src="/images/homepage.webp"
                        alt="Recipea App Preview - Gen Z Cooking Made Easy"
                        width={250}
                        height={500}
                        className="rounded-3xl shadow-2xl border border-white/10"
                      />
                      <div className="absolute -bottom-12 -right-12 z-0">
                        <Image
                          src="/images/steps.webp"
                          alt="Recipea App Detail - Share Your Recipes"
                          width={250}
                          height={500}
                          className="rounded-3xl shadow-2xl border border-white/10"
                        />
                      </div>
                      <div className="absolute -bottom-24 -right-24 z-0">
                        <Image
                          src="/images/recipe-idea.webp"
                          alt="Recipea App Detail - Share Your Recipes"
                          width={250}
                          height={500}
                          className="rounded-3xl shadow-2xl border border-white/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-black to-black/90" id="waitlist">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join the Food Revolution</h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of a community that's changing how Gen Z cooks and shares food. Create delicious meals,
                reduce waste, and connect with other young food creators. Join our waiting list today!
              </p>
              <div className="max-w-xl mx-auto">
                <WaitlistForm />
              </div>
              <p className="text-sm text-gray-400 mt-6">
                We respect your privacy. Your email will only be used for Recipea updates and will never be shared with
                third parties.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
