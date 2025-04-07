import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function ServicesPage() {
  // Sample services data
  const services = [
    {
      title: "House Cleaning",
      description: "Professional cleaning services for your home",
      icon: "Sparkles",
      price: "From $80",
      rating: 4.8,
    },
    {
      title: "Plumbing",
      description: "Fix leaks, clogs, and other plumbing issues",
      icon: "Droplet",
      price: "From $95",
      rating: 4.7,
    },
    {
      title: "Electrical",
      description: "Installation, repairs, and maintenance",
      icon: "Zap",
      price: "From $90",
      rating: 4.9,
    },
    {
      title: "Painting",
      description: "Interior and exterior painting services",
      icon: "Paintbrush",
      price: "From $150",
      rating: 4.6,
    },
    {
      title: "Lawn Care",
      description: "Mowing, trimming, and garden maintenance",
      icon: "Scissors",
      price: "From $60",
      rating: 4.5,
    },
    {
      title: "Handyman",
      description: "General repairs and home maintenance",
      icon: "Wrench",
      price: "From $75",
      rating: 4.8,
    },
    {
      title: "HVAC",
      description: "Heating, ventilation, and air conditioning services",
      icon: "Fan",
      price: "From $120",
      rating: 4.7,
    },
    {
      title: "Moving",
      description: "Professional moving and packing services",
      icon: "Truck",
      price: "From $200",
      rating: 4.6,
    },
    {
      title: "Furniture Assembly",
      description: "Assembly and installation of furniture",
      icon: "Sofa",
      price: "From $65",
      rating: 4.5,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse through our wide range of professional home services and find the perfect match for your needs
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search services..." className="pl-10" />
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            price={service.price}
            rating={service.rating}
          />
        ))}
      </div>
    </div>
  )
}

