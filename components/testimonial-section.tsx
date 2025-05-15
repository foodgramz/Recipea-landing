import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Cook",
      content:
        "Recipea has completely transformed how I cook. I used to waste so much food, but now I can just input what I have and get amazing recipe ideas!",
      avatar: "/images/sarah-johnson.png?height=60&width=60",
      rating: 5,
    },
    {
      name: "Michael Rossi",
      role: "Fitness Enthusiast",
      content:
        "The meal planning feature is a game-changer for my fitness goals. I can plan a whole week of balanced meals that fit my macros in minutes.",
      avatar: "/images/marco-rossi.png?height=60&width=60",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Busy Parent",
      content:
        "As a parent of three, I never have time to think about what to cook. Recipea's AI recipe feature on my fridge storage has saved me countless trips to the grocery store.",
      avatar: "/images/jessica-roper.webp?height=60&width=60",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black/90 to-black" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their cooking experience with Recipea
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? "fill-orange-500 text-orange-500" : "text-gray-400"}
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-orange-500">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
