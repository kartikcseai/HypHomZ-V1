import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, Star, Shield, MessageSquare, CreditCard } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-teal-600" />,
      title: "Search for Services",
      description: "Browse through our wide range of professional home services and find what you need.",
      details: [
        "Use filters to narrow down your search",
        "Read service descriptions and pricing",
        "Compare different service options",
      ],
    },
    {
      icon: <Shield className="h-12 w-12 text-teal-600" />,
      title: "Choose a Provider",
      description: "Select from our verified and highly-rated service providers.",
      details: [
        "View provider profiles and qualifications",
        "Read customer reviews and ratings",
        "Check provider availability",
      ],
    },
    {
      icon: <Calendar className="h-12 w-12 text-teal-600" />,
      title: "Book an Appointment",
      description: "Schedule a service at your preferred date and time.",
      details: [
        "Select a convenient date and time slot",
        "Provide service location details",
        "Add special instructions if needed",
      ],
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-teal-600" />,
      title: "Communicate",
      description: "Chat directly with your service provider before the appointment.",
      details: [
        "Discuss specific requirements",
        "Ask questions about the service",
        "Share additional details or photos",
      ],
    },
    {
      icon: <Star className="h-12 w-12 text-teal-600" />,
      title: "Service Completion",
      description: "Enjoy professional service delivered to your satisfaction.",
      details: [
        "Provider arrives at scheduled time",
        "Service is performed professionally",
        "Quality check before completion",
      ],
    },
    {
      icon: <CreditCard className="h-12 w-12 text-teal-600" />,
      title: "Payment & Review",
      description: "Pay securely and share your experience with others.",
      details: ["Secure online payment processing", "Rate your service experience", "Leave feedback for the provider"],
    },
  ]

  const faqs = [
    {
      question: "How do I book a service?",
      answer:
        "Booking a service is easy! Simply browse our available services, select a provider, choose your preferred date and time, and confirm your booking. You'll receive a confirmation email with all the details.",
    },
    {
      question: "Are the service providers verified?",
      answer:
        "Yes, all service providers on our platform undergo thorough background checks and verification processes. We verify their identity, qualifications, and experience to ensure you receive quality service.",
    },
    {
      question: "Can I reschedule or cancel my booking?",
      answer:
        "Yes, you can reschedule or cancel your booking through your account dashboard. Please note that cancellations made less than 24 hours before the scheduled service may incur a cancellation fee.",
    },
    {
      question: "How do I pay for services?",
      answer:
        "We offer secure online payment options including credit/debit cards and digital wallets. Payment is processed after the service is completed to your satisfaction.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "Your satisfaction is our priority. If you're not completely satisfied with the service, please contact our customer support team within 48 hours, and we'll work to resolve the issue promptly.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">How HomeServe Works</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our platform makes it easy to find, book, and manage professional home services. Follow these simple steps to
          get started.
        </p>
      </div>

      {/* Steps Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-teal-100 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-teal-50 p-4 rounded-full mb-6">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="inline-block bg-teal-600 text-white rounded-full w-6 h-6 text-sm mr-2">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="text-left w-full space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-50 py-16 px-4 rounded-xl mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">See HomeServe in Action</h2>
          <p className="text-gray-600 mb-8">
            Watch our short video to see how easy it is to book and manage home services on our platform
          </p>
          <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
            <p className="text-gray-600">Video player would be embedded here</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their homes with our services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            <Link href="/services">Browse Services</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/signup">Create an Account</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

