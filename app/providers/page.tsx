import { Button } from "@/components/ui/button"
import ProviderCard from "@/components/provider-card"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function ProvidersPage() {
  // Sample providers data
  const providers = [
    {
      name: "John Smith",
      profession: "Plumber",
      rating: 4.9,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Johnson",
      profession: "House Cleaner",
      rating: 4.8,
      reviews: 98,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Michael Brown",
      profession: "Electrician",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Emily Davis",
      profession: "Painter",
      rating: 4.7,
      reviews: 87,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "David Wilson",
      profession: "Handyman",
      rating: 4.8,
      reviews: 112,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jennifer Martinez",
      profession: "Lawn Care Specialist",
      rating: 4.6,
      reviews: 76,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Robert Taylor",
      profession: "HVAC Technician",
      rating: 4.9,
      reviews: 143,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Lisa Anderson",
      profession: "Interior Designer",
      rating: 4.7,
      reviews: 92,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "James Thomas",
      profession: "Mover",
      rating: 4.5,
      reviews: 68,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Service Providers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet our team of professional service providers ready to help with all your home needs
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search providers by name or profession..." className="pl-10" />
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700">Search</Button>
          </div>
        </div>
      </div>

      {/* Providers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map((provider, index) => (
          <ProviderCard
            key={index}
            name={provider.name}
            profession={provider.profession}
            rating={provider.rating}
            reviews={provider.reviews}
            image={provider.image}
          />
        ))}
      </div>
    </div>
  )
}

