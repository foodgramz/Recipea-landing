"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "../../components/contact-form"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="py-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Have questions about Recipea? We're here to help. Reach out to our team and we'll get back to you as
                  soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="text-orange-500" size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email Us</h3>
                          <p className="text-gray-300">hi@recipea.net</p>
                          <p className="text-gray-300">sales@recipea.net</p>
                        </div>
                      </div>
{/* 
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="text-orange-500" size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Call Us</h3>
                          <p className="text-gray-300">+86 (555) 123-4567</p>
                          <p className="text-sm text-gray-400">Monday to Friday, 9am - 5pm PST</p>
                        </div>
                      </div> */}

                      {/* <div className="flex items-start gap-4">
                        <div className="bg-orange-500/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-orange-500" size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Visit Us</h3>
                          <p className="text-gray-300">123 Recipe Street</p>
                          <p className="text-gray-300">San Francisco, CA 94103</p>
                          <p className="text-gray-300">United States</p>
                        </div>
                      </div> */}

                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="text-orange-500" size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Business Hours</h3>
                          <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p className="text-gray-300">Saturday: 10:00 AM - 2:00 PM</p>
                          <p className="text-gray-300">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="bg-white/5 hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-300"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/recip.ea/"
                        className="bg-white/5 hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-300"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                      {/* <a
                        href="#"
                        className="bg-white/5 hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-300"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </a> */}
                      {/* <a
                        href="#"
                        className="bg-white/5 hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-300"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-black to-black/90">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-300">Find quick answers to common questions about Recipea and our services.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-500/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-orange-500" size={16} />
                    </div>
                    <h3 className="text-xl font-semibold">How do I reset my password?</h3>
                  </div>
                  <p className="text-gray-300 ml-11">
                    You can reset your password by clicking on the "Forgot Password" link on the login screen. We'll
                    send you an email with instructions to create a new password.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-500/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-orange-500" size={16} />
                    </div>
                    <h3 className="text-xl font-semibold">How do I cancel my subscription?</h3>
                  </div>
                  <p className="text-gray-300 ml-11">
                    You can cancel your subscription at any time from your account settings. Go to "Subscription" and
                    click on "Cancel Subscription". Your premium features will remain active until the end of your
                    billing period.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-500/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-orange-500" size={16} />
                    </div>
                    <h3 className="text-xl font-semibold">Is my data secure?</h3>
                  </div>
                  <p className="text-gray-300 ml-11">
                    Yes, we take data security very seriously. All your personal information and health data is
                    encrypted and stored securely. We never share your information with third parties without your
                    consent.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-500/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-orange-500" size={16} />
                    </div>
                    <h3 className="text-xl font-semibold">How do I request a feature?</h3>
                  </div>
                  <p className="text-gray-300 ml-11">
                    We love hearing from our users! You can request new features by sending us a message through this
                    contact form or by emailing us hi@recipea.app or bryan@whatown.com with the subject "Feature Request".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
