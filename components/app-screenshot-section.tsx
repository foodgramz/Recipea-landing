import Image from "next/image"

export default function AppScreenshotSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-black/90" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Recipea Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the seamless experience of cooking with Recipea, from finding recipes to step-by-step guidance, even to shopping list.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="relative">
            <Image
              src="/images/recipe-by-category.webp"
              alt="Recipe Collections"
              width={280}
              height={600}
              className="rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">1. Browse for Inspiration</span>
            </div>
          </div>

          <div className="relative mt-10">
            <Image
              src="/images/ai-recipe.webp"
              alt="Recipe Details"
              width={280}
              height={600}
              className="rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">2. Create Recipe</span>
            </div>
          </div>

          <div className="relative mt-10">
            <Image
              src="/images/recipe-detail.webp"
              alt="Recipe Details"
              width={280}
              height={600}
              className="rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">3. View Ingredients</span>
            </div>
          </div>

          <div className="relative mt-10">
            <Image
              src="/images/nutrition.webp"
              alt="Recipe Details"
              width={280}
              height={600}
              className="rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">4. Healthy Nutritions</span>
            </div>
          </div>
          

          <div className="relative">
            <Image
              src="/images/shopping.webp"
              alt="One-Click Shopping List"
              width={280}
              height={600}
              className="rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">5. One-Click Shopping List</span>
            </div>
          </div>

          <div className="relative mt-10">
            <Image
              src="/images/steps.webp"
              alt="Step-by-Step Cooking"
              width={280}
              height={600}
              className="rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">6. Step-by-Step Cooking</span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/homepage.webp"
              alt="Cooking Complete"
              width={280}
              height={600}
              className="rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">7. Enjoy Your Meal</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-orange-500">One-Click Shopping</h3>
            <p className="text-gray-300">
              Generate a complete shopping list from any recipe with a single tap. Easily add multiple recipes to your
              list and organize by store section.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-orange-500">Step-by-Step Guidance</h3>
            <p className="text-gray-300">
              Follow clear, detailed instructions with ingredients listed for each step. No more jumping back and forth
              between ingredients and directions.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-orange-500">Seamless Experience</h3>
            <p className="text-gray-300">
              From finding recipes to cooking completion, Recipea guides you through every step of the cooking process
              with intuitive design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
