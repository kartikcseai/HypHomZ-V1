import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, MessageSquare, Phone, Star, ThumbsUp, User } from "lucide-react"
import Link from "next/link"

export default function ProviderProfilePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the provider data based on the slug
  const provider = {
    name: "John Smith",
    profession: "Plumber",
    rating: 4.9,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300",
    location: "New York, NY",
    about:
      "Professional plumber with over 10 years of experience. Specializing in residential and commercial plumbing services including repairs, installations, and maintenance.",
    services: [
      "Leak Detection and Repair",
      "Pipe Installation and Replacement",
      "Drain Cleaning",
      "Water Heater Installation",
      "Fixture Installation",
      "Emergency Plumbing Services",
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "March 15, 2023",
        comment:
          "John was fantastic! He arrived on time, quickly diagnosed the issue with our leaking faucet, and fixed it efficiently. Very professional and knowledgeable.",
      },
      {
        name: "Michael Brown",
        rating: 5,
        date: "February 28, 2023",
        comment:
          "Great service! John installed a new water heater for us and did an excellent job. He explained everything clearly and left the work area clean.",
      },
      {
        name: "Emily Davis",
        rating: 4,
        date: "January 10, 2023",
        comment:
          "John helped us with a clogged drain. He was prompt and professional. The only reason for 4 stars is that the price was a bit higher than expected.",
      },
    ],
    availability: [
      { day: "Monday", hours: "8:00 AM - 5:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
      { day: "Friday", hours: "8:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Provider Info Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src={provider.image} alt={provider.name} />
                  <AvatarFallback>
                    {provider.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold">{provider.name}</h1>
                <p className="text-gray-600 mb-2">{provider.profession}</p>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(provider.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium ml-2">
                    {provider.rating} ({provider.reviews.length} reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{provider.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href={`/booking/${params.slug}`}>Book Now</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/chat/${params.slug}`}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat with {provider.name.split(" ")[0]}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={`tel:+1234567890`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </a>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Availability
                </h3>
                <div className="space-y-2 text-sm">
                  {provider.availability.map((slot, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-medium">{slot.day}</span>
                      <span className="text-gray-600">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-teal-600" />
                    About {provider.name}
                  </h2>
                  <p className="text-gray-700 mb-6">{provider.about}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Experience</h3>
                      <p className="text-gray-700">10+ years</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Service Area</h3>
                      <p className="text-gray-700">New York City and surrounding areas</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Languages</h3>
                      <p className="text-gray-700">English, Spanish</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Payment Methods</h3>
                      <p className="text-gray-700">Credit Card, Cash, PayPal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <ThumbsUp className="h-5 w-5 mr-2 text-teal-600" />
                    Services Offered
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {provider.services.map((service, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium">{service}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-teal-600" />
                    Customer Reviews
                  </h2>

                  <div className="space-y-6">
                    {provider.reviews.map((review, index) => (
                      <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarFallback>
                                {review.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{review.name}</h4>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

