import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface FeatureSectionProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  reverse?: boolean
}

export default function FeatureSection({
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}>
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">{description}</p>

            {/* <Button variant="link" className="text-orange-500 p-0 flex items-center gap-1 mx-auto lg:mx-0">
              Learn more <ArrowRight size={16} />
            </Button> */}
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={imageAlt}
                width={400}
                height={600}
                className="rounded-3xl shadow-2xl border border-white/10 mx-auto"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
