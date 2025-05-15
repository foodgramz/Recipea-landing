import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden" id="hero">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your AI-Powered <span className="text-orange-500">Recipe</span> & Meal Planning Assistant
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Recipea helps you cook delicious meals with ingredients you already have, plan your weekly meals based on
              your health goals, and discover new recipes tailored to your taste.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg py-6 px-8 rounded-full flex items-center gap-2">
                <Apple size={20} />
                App Store
              </Button>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-lg py-6 px-8 rounded-full flex items-center gap-2"
              >
                <Play size={20} />
                Google Play
              </Button>
            </div> */}

            <p className="text-lg text-gray-400">Recipea app is coming soon and available on iOS and Android store</p>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 transform rotate-2">
              <Image
                src="/images/homepage.webp"
                alt="Recipea App Screenshot"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
            <div className="absolute top-10 -right-4 z-0 transform -rotate-3">
              <Image
                src="/images/recipe-detail.webp"
                alt="Recipea App Screenshot"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-8">Trusted by home cooks everywhere</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <Image src="/placeholder.svg?height=30&width=120" alt="Partner Logo" width={120} height={30} />
            <Image src="/placeholder.svg?height=30&width=120" alt="Partner Logo" width={120} height={30} />
            <Image src="/placeholder.svg?height=30&width=120" alt="Partner Logo" width={120} height={30} />
            <Image src="/placeholder.svg?height=30&width=120" alt="Partner Logo" width={120} height={30} />
          </div>
        </div> */}
      </div>
    </section>
  )
}
