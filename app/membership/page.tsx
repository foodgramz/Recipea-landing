import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, BarChart3, Calendar, ShoppingCart } from "lucide-react"

export default function MembershipPage() {
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
                Limited Time Offer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Try Recipea Premium <span className="text-orange-500">Free for 3 Days</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Unlock personalized meal plans, AI-powered nutrition tracking, and exclusive recipes
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg py-6 px-8 rounded-full">
                Start Your Free Trial
              </Button>
              <p className="text-sm text-gray-400 mt-4">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-black to-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Premium Benefits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="bg-orange-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <BarChart3 className="text-orange-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Personalized Nutrition Plans</h3>
                  <p className="text-gray-300 mb-6">
                    Get customized meal plans based on your body metrics, fitness goals, and dietary preferences. Our AI
                    creates plans that are 2x more effective for weight loss.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Calorie and macro tracking tailored to your goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Weekly meal plans optimized for your preferences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Nutritional insights and recommendations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="bg-orange-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <Zap className="text-orange-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Advanced AI Features</h3>
                  <p className="text-gray-300 mb-6">
                    Unlock the full power of our AI to create custom recipes from ingredients you have, with
                    substitution suggestions and health optimizations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Unlimited AI recipe generation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Smart ingredient substitutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Health-optimized cooking methods</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="bg-orange-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <Calendar className="text-orange-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Advanced Meal Planning</h3>
                  <p className="text-gray-300 mb-6">
                    Plan your meals for weeks in advance with smart scheduling that minimizes food waste and maximizes
                    nutrition.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>One-week meal planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Leftover integration and food waste reduction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Special occasion and event planning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="bg-orange-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <ShoppingCart className="text-orange-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Premium Shopping Features</h3>
                  <p className="text-gray-300 mb-6">
                    Save time and money with advanced shopping lists, budget optimization, and pantry management.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Budget-optimized shopping lists</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Pantry inventory tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <span>Seasonal ingredient recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-black/90 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Personalized for <span className="text-orange-500">Your Goals</span>
              </h2>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4">Quick Health Survey</h3>
                    <p className="text-gray-300 mb-6">
                      Our brief survey helps us understand your unique needs to create the perfect meal plan for you:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Basic metrics (height, weight, age, gender)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Activity level and exercise routine</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Dietary preferences and restrictions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Health goals and target timeline</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/images/health-survey.webp"
                      alt="Health Survey"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mt-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <Image
                      src="/images/personalized-nutrition.webp"
                      alt="Personalized Nutrition Plan"
                      width={400}
                      height={600}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4">Personalized Daily Nutrition</h3>
                    <p className="text-gray-300 mb-6">
                      Recipea creates a custom nutrition plan based on your unique profile, goals, and dietary
                      preferences:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Precise calorie targets based on your metabolism</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Optimized macronutrient ratios (protein, carbs, fat)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Daily meal plans with exact portion sizes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Health score tracking to monitor your progress</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mt-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4">2x Better Results for Weight Loss</h3>
                    <p className="text-gray-300 mb-6">
                      Our premium members achieve weight loss goals twice as effectively as standard plans:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Scientifically optimized calorie distribution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Personalized macro ratios for your metabolism</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Adaptive meal plans that evolve with your progress</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                        <span>Weekly progress tracking and plan adjustments</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/images/weight-loss-comparison.webp"
                      alt="Weight Loss Results"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mt-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                    <Image
                      src="/images/price-promo.webp"
                      alt="Recipea AI Effectiveness Comparison"
                      width={400}
                      height={600}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <div className="inline-block bg-green-500/20 text-green-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      Limited Time Offer
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">50% Off Your Annual Subscription</h3>
                    <p className="text-gray-300 mb-6">
                      Start your health journey today with our special promotion. Get half off your subscription for the
                      annual plan:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>Premium plan for just $4.95/month (normally $9.99)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>Pro plan for just $7.49/month (normally $14.99)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>Full access to all premium features</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>No commitment - cancel anytime</span>
                      </li>
                    </ul>
                    {/* <Button className="mt-6 bg-green-500 hover:bg-green-600 text-black">Claim 50% Discount Now</Button> */}
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Cooking & Nutrition?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of members who have achieved their health goals with Recipea Premium
              </p>
              <Link href="/pricing">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg py-6 px-8 rounded-full">
                Start Your Free Trial
              </Button>
              </Link>
              <p className="text-sm text-gray-400 mt-4">No credit card required for trial. Cancel anytime.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
