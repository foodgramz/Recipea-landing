import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeatureSection from "@/components/feature-section"
import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"
import CtaSection from "@/components/cta-section"
import AppScreenshotSection from "@/components/app-screenshot-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <HeroSection />

        <FeatureSection
          title="AI-Powered Recipe Ideas"
          description="Simply input the ingredients you have on hand, and Recipea's AI will generate delicious recipe ideas tailored to your preferences and pantry."
          imageUrl="/images/recipe-idea.webp"
          imageAlt="AI Recipe Suggestions"
          reverse={false}
        />

        <AppScreenshotSection />

        <FeatureSection
          title="Personalized Meal Planning"
          description="Plan your meals for the entire week based on your health goals, dietary restrictions, and personal preferences. Recipea makes meal planning effortless."
          imageUrl="/images/meal-plan.webp"
          imageAlt="Meal Planning Feature"
          reverse={true}
        />

        <FeatureSection
          title="Step-by-Step Cooking Instructions"
          description="Each recipe is broken down into clear, easy-to-follow steps with ingredients listed for every stage. No more jumping back and forth between ingredients and instructions - everything you need is right where you need it."
          imageUrl="/images/steps.webp"
          imageAlt="Step-by-Step Cooking"
          reverse={false}
        />

        <FeatureSection
          title="One-Click Shopping Lists"
          description="Generate complete shopping lists from any recipe with a single tap. Easily add multiple recipes to your list, organize by store section, and check off items as you shop - making grocery trips quick and efficient."
          imageUrl="/images/shopping.webp"
          imageAlt="Shopping List Feature"
          reverse={true}
        />

        <TestimonialSection />

        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
