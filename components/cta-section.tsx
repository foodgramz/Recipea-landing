import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import Image from "next/image"

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Cooking Experience?</h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Download Recipea today and discover the joy of effortless cooking with AI-powered recipe suggestions and
                personalized meal planning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg py-6 px-8 rounded-full flex items-center gap-2">
                  <Apple size={20} />
                  Download on App Store
                </Button>
                {/* <Button
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 text-lg py-6 px-8 rounded-full flex items-center gap-2"
                >
                  <Play size={20} />
                  Get it on Google Play
                </Button> */}
              </div>

              <p className="mt-6 text-sm text-gray-400">
                Available on iOS, coming soon!.
              </p>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <Image
                  src="/images/drinks.png"
                  alt="Refreshing Drinks"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
