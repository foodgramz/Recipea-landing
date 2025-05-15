import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeatureCard from "@/components/feature-card"
import { Utensils, Calendar, Search, Heart, Clock, Sparkles, ShoppingCart, BarChart } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      title: "AI Recipe Suggestions",
      description: "Get personalized recipe ideas based on ingredients you have available.",
      icon: Sparkles,
    },
    {
      title: "Weekly Meal Planning",
      description: "Plan your meals for the entire week based on your health goals and preferences.",
      icon: Calendar,
    },
    {
      title: "Step-by-Step Cooking",
      description: "Follow clear, easy instructions with ingredients listed for every stage.",
      icon: Utensils,
    },
    {
      title: "Smart Search",
      description: "Find recipes by cuisine, diet, ingredients, or dish type with advanced filters.",
      icon: Search,
    },
    {
      title: "Favorites Collection",
      description: "Save and organize your favorite recipes in custom collections.",
      icon: Heart,
    },
    {
      title: "Time & Difficulty Indicators",
      description: "See at a glance how long a recipe takes and its skill level requirement.",
      icon: Clock,
    },
    {
      title: "Shopping Lists",
      description: "Automatically generate shopping lists from your selected recipes.",
      icon: ShoppingCart,
    },
    {
      title: "Nutritional Information",
      description: "View detailed nutritional data for each recipe to support your health goals.",
      icon: BarChart,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Discover all the ways Recipea can transform your cooking experience with these innovative features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-black/90">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Recipea App Interface"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl border border-white/10 mx-auto"
                />
              </div>

              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Designed for Every Home Cook</h2>
                <p className="text-lg text-gray-300">
                  Whether you're a beginner or an experienced chef, Recipea adapts to your skill level and preferences
                  to provide the perfect cooking experience.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-500/20 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <p>Beginner-friendly recipes with detailed instructions</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-500/20 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <p>Advanced techniques for experienced cooks</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-500/20 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <p>Customizable based on dietary restrictions and preferences</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-500/20 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                      <span className="text-orange-500 text-sm">✓</span>
                    </div>
                    <p>Budget-friendly options that don't compromise on taste</p>
                  </li>
                </ul>

                <Button className="bg-orange-500 hover:bg-orange-600 text-black">Explore All Features</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
