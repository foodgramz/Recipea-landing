import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: May 8, 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-gray-300 mb-4">
                  Recipea ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you use our mobile application and
                  website (collectively, the "Service").
                </p>
                <p className="text-gray-300">
                  Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use
                  of information in accordance with this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect several types of information for various purposes to provide and improve our Service to
                  you:
                </p>
                <h3 className="text-xl font-medium mb-2">Personal Data</h3>
                <p className="text-gray-300 mb-4">
                  While using our Service, we may ask you to provide us with certain personally identifiable information
                  that can be used to contact or identify you ("Personal Data"). This may include, but is not limited
                  to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>

                <h3 className="text-xl font-medium mb-2">Health and Nutrition Data</h3>
                <p className="text-gray-300 mb-4">
                  To provide personalized meal planning and nutrition recommendations, we may collect:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                  <li>Weight and height</li>
                  <li>Age and gender</li>
                  <li>Exercise level and activity data</li>
                  <li>Dietary preferences and restrictions</li>
                  <li>Health goals</li>
                </ul>
                <p className="text-gray-300">
                  This information is used solely to provide you with personalized recommendations and is not shared
                  with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use the collected data for various purposes:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide personalized meal plans and recipe recommendations</li>
                  <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-gray-300 mb-4">
                  The security of your data is important to us, but remember that no method of transmission over the
                  Internet, or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
                <p className="text-gray-300 mb-4">
                  We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your
                  Personal Data.
                </p>
                <p className="text-gray-300 mb-4">
                  If you wish to be informed what Personal Data we hold about you and if you want it to be removed from
                  our systems, please contact us.
                </p>
                <p className="text-gray-300">
                  In certain circumstances, you have the following data protection rights:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>The right to access, update or to delete the information we have on you</li>
                  <li>The right of rectification</li>
                  <li>The right to object</li>
                  <li>The right of restriction</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page.
                </p>
                <p className="text-gray-300">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                  Policy are effective when they are posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Privacy Policy: hi@recipea.net</li>
                  <li>Sales and membership: bryan@whaotwn.com</li>
                  <li>Commercial and partnership: sales@recipea.net</li>
                  {/* <li>By visiting the contact page on our website</li> */}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-300 mb-4">
                  We are a team of developers who are passionate about creating a better way of living and building a better world.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Shannghai Four Parts Technology Co., Ltd</li>
                  {/* <li>By visiting the contact page on our website</li> */}
                </ul>
              </section>
            </div>

            <div className="mt-12 text-center">
              <Link href="/">
                <Button variant="outline" className="border-white/20 hover:bg-white/10">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
