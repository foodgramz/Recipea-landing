import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-04-30.basil',
  typescript: true,
})

export const PLANS = {
  BASIC: {
    name: 'Basic',
    price: 9.99,
    features: [
      'Basic recipe management',
      'Meal planning',
      'Shopping list',
    ],
  },
  PREMIUM: {
    name: 'Premium',
    price: 19.99,
    features: [
      'All Basic features',
      'AI recipe generation',
      'Nutritional analysis',
      'Custom meal plans',
    ],
  },
  PRO: {
    name: 'Pro',
    price: 29.99,
    features: [
      'All Premium features',
      'Priority support',
      'Advanced analytics',
      'Team collaboration',
    ],
  },
} 