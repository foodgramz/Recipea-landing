import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import WaitlistPopup from "@/components/waitlist-popup"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Recipea - AI Recipe & Meal Planner | Gen Z Cooking Made Easy",
  description: "Transform your cooking with Recipea's AI-powered recipe app. Perfect for Gen Z and young adults - create delicious meals, reduce food waste, and share your recipes. Get personalized recipes, easy step-by-step guides, and smart meal planning for healthy eating.",
  keywords: "Gen Z cooking, easy recipes, food waste reduction, recipe sharing, meal prep, budget cooking, student recipes, quick meals, healthy eating, sustainable cooking, food sustainability, recipe creator, cooking app, meal planning, food saving tips, zero waste cooking, recipe community",
  openGraph: {
    title: "Recipea - AI Recipe & Meal Planner | Gen Z Cooking Made Easy",
    description: "Transform your cooking with Recipea's AI-powered recipe app. Perfect for Gen Z and young adults - create delicious meals, reduce food waste, and share your recipes. Get personalized recipes, easy step-by-step guides, and smart meal planning for healthy eating.",
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
    title: "Recipea - AI Recipe & Meal Planner | Gen Z Cooking Made Easy",
    description: "Transform your cooking with Recipea's AI-powered recipe app. Perfect for Gen Z and young adults - create delicious meals, reduce food waste, and share your recipes.",
    images: ["https://www.recipea.net/twitter-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.recipea.net',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-6SFTM0W54E`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6SFTM0W54E');
          `}
        </Script>

        {/* Google Search Console 验证 */}
        <meta name="google-site-verification" content="your-verification-code" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Recipea",
              "applicationCategory": "Food & Drink",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AI-powered recipe and meal planning assistant that helps Gen Z and young adults create delicious meals, reduce food waste, and share their recipes with a community of food lovers.",
              "featureList": [
                "AI-powered recipe suggestions",
                "Personalized meal planning",
                "Step-by-step cooking instructions",
                "Smart ingredient substitutions",
                "Food waste reduction tips",
                "Recipe sharing community",
                "Budget-friendly meal plans",
                "Quick and easy recipes",
                "Sustainable cooking guides",
                "Student-friendly meals"
              ],
              "audience": {
                "@type": "Audience",
                "audienceType": "Gen Z and Young Adults"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Recipea",
              "url": "https://www.recipea.net",
              "logo": "https://www.recipea.net/logo.png",
              "sameAs": [
                "https://twitter.com/recipea",
                "https://facebook.com/recipea",
                "https://instagram.com/recipea",
                "https://tiktok.com/@recipea"
              ],
              "description": "Recipea is a community-driven platform that helps Gen Z and young adults create, share, and discover delicious recipes while promoting sustainable cooking practices and reducing food waste."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Recipea",
              "url": "https://www.recipea.net",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.recipea.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Discover and share recipes with Recipea - the AI-powered cooking platform for Gen Z and young adults. Create delicious meals, reduce food waste, and join a community of food lovers."
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <WaitlistPopup />
        </ThemeProvider>
      </body>
    </html>
  )
}
