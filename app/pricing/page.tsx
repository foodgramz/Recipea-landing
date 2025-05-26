import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Recipea Pricing | Affordable Meal Planning & Recipe Management",
  description: "Choose the perfect Recipea plan for your cooking needs. From free basic features to premium AI-powered meal planning and recipe management. Start with a 7-day free trial.",
  keywords: "recipe app pricing, meal planning cost, cooking app subscription, recipe management pricing, AI cooking assistant cost, food planning subscription, recipe app plans, cooking technology pricing, AI recipe generator, healthy meal planner, quick recipes, vegan meals, low carb recipes, weight loss meals, diabetes-friendly recipes, keto recipes, gluten-free meals, vegetarian recipes, meal prep ideas, healthy cooking, nutrition planning, diet meal plans, fitness meal prep, clean eating recipes, healthy food ideas, easy recipes, simple cooking, budget meals, student cooking, time-saving recipes, meal planning app, recipe finder, cooking assistant, smart cooking, AI cooking, recipe suggestions, personalized recipes, custom meal plans, dietary restrictions, special diets, health-conscious cooking, wellness recipes, balanced meals, nutritious cooking, healthy lifestyle, cooking tips, kitchen hacks, food preparation, meal organization, weekly meal plans, daily recipes, cooking inspiration, recipe discovery, food innovation, cooking technology, smart kitchen, digital cooking, modern cooking, cooking solutions, recipe management, meal tracking, food planning, cooking guidance, recipe assistance, cooking support, meal solutions",
  openGraph: {
    title: "Recipea Pricing | Affordable Meal Planning & Recipe Management",
    description: "Choose the perfect Recipea plan for your cooking needs. From free basic features to premium AI-powered meal planning and recipe management.",
    type: "website",
    locale: "en_US",
    siteName: "Recipea",
    url: "https://www.recipea.net/pricing",
  }
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="py-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose the Perfect Plan for Your Cooking Journey</h1>
              <p className="text-xl text-gray-300 mb-12">
                All plans include a 3-day free trial to experience the full power of Recipea
              </p>

              <Tabs defaultValue="monthly" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/10 p-1">
                  <TabsTrigger value="monthly" className="text-lg py-3">
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value="annual" className="text-lg py-3">
                    Annual (Save 67%)
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="monthly" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    {/* Basic Plan */}
                    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                        <p className="text-gray-400 mb-4">Essential cooking tools</p>
                        <div className="mb-6">
                          <span className="text-5xl font-bold">Free</span>
                        </div>
                        <Button className="w-full py-6 bg-white/10 hover:bg-white/20 text-white text-lg">
                          Get Started
                        </Button>
                      </div>
                      <div className="border-t border-white/10 p-8">
                        <h4 className="font-semibold mb-4 text-lg">What's included:</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Browse recipe collection</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Basic shopping lists</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Step-by-step cooking instructions</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Limited recipe search</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">AI recipe generation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Personalized meal plans</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Nutrition tracking</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Specialized health plans</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-gradient-to-b from-orange-500/20 to-orange-600/5 rounded-2xl overflow-hidden border border-orange-500/30 transform scale-105 shadow-xl relative">
                      <div className="absolute top-0 right-0 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold mb-2">Premium</h3>
                        <p className="text-gray-300 mb-4">Personalized cooking experience</p>
                        <div className="mb-6">
                          <span className="text-5xl font-bold">$9.99</span>
                          <span className="text-gray-400">/month</span>
                        </div>
                        <Button className="w-full py-6 bg-orange-500 hover:bg-orange-600 text-black text-lg">
                          Start Free Trial
                        </Button>
                      </div>
                      <div className="border-t border-orange-500/30 p-8">
                        <h4 className="font-semibold mb-4 text-lg">Everything in Basic, plus:</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Personalized meal plans based on your preferences</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Comprehensive nutrition tracking & analysis</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Weekly grocery planning with cost optimization</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Basic AI recipe suggestions from your ingredients</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Unlimited recipe saves and collections</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Basic dietary restriction options (vegetarian, vegan, etc.)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Advanced health-specific meal plans</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Medical condition recipe customization</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                        <p className="text-gray-400 mb-4">Ultimate health & cooking suite</p>
                        <div className="mb-6">
                          <span className="text-5xl font-bold">$14.99</span>
                          <span className="text-gray-400">/month</span>
                        </div>
                        <Button className="w-full py-6 bg-white/10 hover:bg-white/20 text-white text-lg">
                          Start Free Trial
                        </Button>
                      </div>
                      <div className="border-t border-white/10 p-8">
                        <h4 className="font-semibold mb-4 text-lg">Everything in Premium, plus:</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Advanced AI recipe generation with customization</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>2x better weight loss plans with adaptive adjustments</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Smart ingredient substitution recommendations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>One-week meal planning with variety optimization</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Priority customer support</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <div>
                              <span className="font-medium">Specialized health plans for:</span>
                              <ul className="mt-2 ml-6 space-y-2">
                                <li className="list-disc">Pregnancy & postpartum nutrition</li>
                                <li className="list-disc">Senior/elderly dietary needs</li>
                                <li className="list-disc">Hypertension (high blood pressure) management</li>
                                <li className="list-disc">Diabetes-friendly meal planning</li>
                                <li className="list-disc">Heart-healthy diet options</li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="annual" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    {/* Basic Plan */}
                    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                        <p className="text-gray-400 mb-4">Essential cooking tools</p>
                        <div className="mb-6">
                          <span className="text-5xl font-bold">Free</span>
                        </div>
                        <Button className="w-full py-6 bg-white/10 hover:bg-white/20 text-white text-lg">
                          Get Started
                        </Button>
                      </div>
                      <div className="border-t border-white/10 p-8">
                        <h4 className="font-semibold mb-4 text-lg">What's included:</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Browse recipe collection</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Basic shopping lists</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Step-by-step cooking instructions</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Limited recipe search</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Personalized meal plans</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">AI recipe generation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Nutrition tracking</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Specialized health plans</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-gradient-to-b from-orange-500/20 to-orange-600/5 rounded-2xl overflow-hidden border border-orange-500/30 transform scale-105 shadow-xl relative">
                      <div className="absolute top-0 right-0 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold mb-2">Premium</h3>
                        <p className="text-gray-300 mb-4">Personalized cooking experience</p>
                        <div className="mb-6">
                          <span className="text-5xl font-bold">$3.33</span>
                          <span className="text-gray-400">/month</span>
                          <p className="text-sm text-orange-500 mt-2">Billed annually ($39.99/year)</p>
                          <p className="text-sm text-green-500 mt-1">Save 67% vs. monthly</p>
                        </div>
                        <Button className="w-full py-6 bg-orange-500 hover:bg-orange-600 text-black text-lg">
                          Start Free Trial
                        </Button>
                      </div>
                      <div className="border-t border-orange-500/30 p-8">
                        <h4 className="font-semibold mb-4 text-lg">Everything in Basic, plus:</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Personalized meal plans based on your preferences</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Comprehensive nutrition tracking & analysis</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Weekly grocery planning with cost optimization</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Basic AI recipe suggestions from your ingredients</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Unlimited recipe saves and collections</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Basic dietary restriction options (vegetarian, vegan, etc.)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Advanced health-specific meal plans</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <X className="text-gray-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-500">Medical condition recipe customization</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                        <p className="text-gray-400 mb-4">Ultimate health & cooking suite</p>
                        <div className="mb-6">
                          <span className="text-5xl font-bold">$7.49</span>
                          <span className="text-gray-400">/month</span>
                          <p className="text-sm text-green-500 mt-2">Billed annually ($89.88/year)</p>
                          <p className="text-sm text-green-500 mt-1">Save 50% vs. monthly</p>
                        </div>
                        <Button className="w-full py-6 bg-white/10 hover:bg-white/20 text-white text-lg">
                          Start Free Trial
                        </Button>
                      </div>
                      <div className="border-t border-white/10 p-8">
                        <h4 className="font-semibold mb-4 text-lg">Everything in Premium, plus:</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Advanced AI recipe generation with customization</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>2x better weight loss plans with adaptive adjustments</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Smart ingredient substitution recommendations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>One-week meal planning with variety optimization</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span>Priority customer support</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <div>
                              <span className="font-medium">Specialized health plans for:</span>
                              <ul className="mt-2 ml-6 space-y-2">
                                <li className="list-disc">Pregnancy & postpartum nutrition</li>
                                <li className="list-disc">Senior/elderly dietary needs</li>
                                <li className="list-disc">Hypertension (high blood pressure) management</li>
                                <li className="list-disc">Diabetes-friendly meal planning</li>
                                <li className="list-disc">Heart-healthy diet options</li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-black to-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">How does the free trial work?</h3>
                  <p className="text-gray-300">
                    You can try Recipea Premium or Pro for 3 days completely free. No credit card required. After the
                    trial period, you can choose to subscribe to continue enjoying premium features.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Can I cancel my subscription?</h3>
                  <p className="text-gray-300">
                    Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to
                    premium features until the end of your billing period.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">How are the specialized health plans created?</h3>
                  <p className="text-gray-300">
                    Our specialized health plans are developed in consultation with registered dietitians and nutrition
                    experts. They follow established dietary guidelines for specific conditions like diabetes,
                    hypertension, and pregnancy while still ensuring meals are delicious and satisfying.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">What information is collected in the survey?</h3>
                  <p className="text-gray-300">
                    We collect basic health metrics like height, weight, age, gender, and activity level to create
                    personalized nutrition plans. For specialized health plans, we may ask additional relevant questions
                    about your specific condition. All your data is securely stored and never shared with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Cooking?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free 7-day trial today and experience the full power of Recipea
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg py-6 px-8 rounded-full">
                Get Started Now
              </Button>
              <p className="text-sm text-gray-400 mt-4">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
