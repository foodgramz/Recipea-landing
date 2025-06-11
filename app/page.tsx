import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeatureSection from "@/components/feature-section"
import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"
import CtaSection from "@/components/cta-section"
import AppScreenshotSection from "@/components/app-screenshot-section"

export const metadata: Metadata = {
  title: "Recipea - AI Recipe & Meal Planner | Transform Your Cooking Experience",
  description: "Recipea is your AI-powered cooking companion. Create delicious meals with ingredients you have, plan your weekly meals, and discover new recipes. Perfect for Gen Z and young adults who want to cook smarter.",
  keywords: "AI recipe app, meal planning, cooking assistant, food waste reduction, recipe sharing, meal prep, budget cooking, student recipes, quick meals, healthy eating, sustainable cooking, recipe creator, cooking app, meal planning, food saving tips, zero waste cooking, recipe community, AI recipe generator, healthy meal planner, quick recipes, vegan meals, low carb recipes, weight loss meals, diabetes-friendly recipes, keto recipes, gluten-free meals, vegetarian recipes, meal prep ideas, healthy cooking, nutrition planning, diet meal plans, fitness meal prep, clean eating recipes, healthy food ideas, easy recipes, simple cooking, budget meals, student cooking, time-saving recipes, meal planning app, recipe finder, cooking assistant, smart cooking, AI cooking, recipe suggestions, personalized recipes, custom meal plans, dietary restrictions, special diets, health-conscious cooking, wellness recipes, balanced meals, nutritious cooking, healthy lifestyle, cooking tips, kitchen hacks, food preparation, meal organization, weekly meal plans, daily recipes, cooking inspiration, recipe discovery, food innovation, cooking technology, smart kitchen, digital cooking, modern cooking, cooking solutions, recipe management, meal tracking, food planning, cooking guidance, recipe assistance, cooking support, meal solutions, recipe ideas, cooking ideas, meal ideas, food ideas, cooking inspiration, recipe inspiration, meal inspiration, food inspiration",
  openGraph: {
    title: "Recipea - AI Recipe & Meal Planner | Transform Your Cooking Experience",
    description: "Recipea is your AI-powered cooking companion. Create delicious meals with ingredients you have, plan your weekly meals, and discover new recipes.",
    type: "website",
    locale: "en_US",
    siteName: "Recipea",
    url: "https://www.recipea.net",
    images: [
      {
        url: "https://www.recipea.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recipea - AI Recipe & Meal Planner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recipea - AI Recipe & Meal Planner | Transform Your Cooking Experience",
    description: "Recipea is your AI-powered cooking companion. Create delicious meals with ingredients you have, plan your weekly meals, and discover new recipes.",
    images: ["https://www.recipea.net/twitter-image.jpg"]
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <HeroSection />

        <CtaSection />

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
