import Link from "next/link"
import { ArrowRight, Calendar, MessageSquare, Search, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ProviderCard from "@/components/provider-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-neutral-800 via-yellow-400 to-neutral-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Home Services at Your Fingertips</h1>
              <p className="text-lg md:text-xl mb-8">
                Book trusted professionals for all your home service needs. From cleaning to repairs, we've got you
                covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="border-white text-yellow-400 bg-black hover:bg-white/10">
                  <Link href="/services">
                    Browse Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-yellow-400 bg-black hover:bg-white/10 ">
                  <Link href="/providers">Find Providers</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Home services illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Find the Perfect Service Provider</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white py-3">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Popular Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most requested home services from verified professionals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="House Cleaning"
              description="Professional cleaning services for your home"
              icon="Sparkles"
              price="From $80"
              rating={4.8}
            />
            <ServiceCard
              title="Plumbing"
              description="Fix leaks, clogs, and other plumbing issues"
              icon="Droplet"
              price="From $95"
              rating={4.7}
            />
            <ServiceCard
              title="Electrical"
              description="Installation, repairs, and maintenance"
              icon="Zap"
              price="From $90"
              rating={4.9}
            />
            <ServiceCard
              title="Painting"
              description="Interior and exterior painting services"
              icon="Paintbrush"
              price="From $150"
              rating={4.6}
            />
            <ServiceCard
              title="Lawn Care"
              description="Mowing, trimming, and garden maintenance"
              icon="Scissors"
              price="From $60"
              rating={4.5}
            />
            <ServiceCard
              title="Handyman"
              description="General repairs and home maintenance"
              icon="Wrench"
              price="From $75"
              rating={4.8}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Providers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Service Providers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our highest-rated professionals ready to help with your home needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProviderCard
              name="John Smith"
              profession="Plumber"
              rating={4.9}
              reviews={124}
              image="/placeholder.svg?height=200&width=200"
            />
            <ProviderCard
              name="Sarah Johnson"
              profession="House Cleaner"
              rating={4.8}
              reviews={98}
              image="/placeholder.svg?height=200&width=200"
            />
            <ProviderCard
              name="Michael Brown"
              profession="Electrician"
              rating={4.9}
              reviews={156}
              image="/placeholder.svg?height=200&width=200"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/providers">
                View All Providers <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Book a service in just a few simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-teal-100 p-4 rounded-full mb-6">
                <Search className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Search</h3>
              <p className="text-gray-600">Browse through our wide range of professional home services</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-teal-100 p-4 rounded-full mb-6">
                <Calendar className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Book</h3>
              <p className="text-gray-600">Select your preferred date and time for the service</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-teal-100 p-4 rounded-full mb-6">
                <Star className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Relax</h3>
              <p className="text-gray-600">Our professionals will arrive and complete the job to your satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trust & Safety</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Your safety is our top priority</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold">Verified Professionals</h3>
              </div>
              <p className="text-gray-600">All service providers undergo thorough background checks and verification</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold">Rated & Reviewed</h3>
              </div>
              <p className="text-gray-600">Read genuine reviews from customers who have used our services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold">Secure Communication</h3>
              </div>
              <p className="text-gray-600">Chat directly with service providers through our secure messaging system</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their homes with our services
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            <Link href="/services">Book a Service Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

