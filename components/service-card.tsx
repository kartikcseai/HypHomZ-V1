import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Droplet, Zap, Wrench, Paintbrush, Scissors, Sparkles, Home, Truck, Fan, Sofa } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  price: string
  rating: number
}

export default function ServiceCard({ title, description, icon, price, rating }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    const props = { className: "h-6 w-6 text-teal-600" }

    switch (iconName) {
      case "Droplet":
        return <Droplet {...props} />
      case "Zap":
        return <Zap {...props} />
      case "Wrench":
        return <Wrench {...props} />
      case "Paintbrush":
        return <Paintbrush {...props} />
      case "Scissors":
        return <Scissors {...props} />
      case "Sparkles":
        return <Sparkles {...props} />
      case "Home":
        return <Home {...props} />
      case "Truck":
        return <Truck {...props} />
      case "Fan":
        return <Fan {...props} />
      case "Sofa":
        return <Sofa {...props} />
      default:
        return <Home {...props} />
    }
  }

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <div className="bg-teal-100 p-2 rounded-full mr-3">{getIcon(icon)}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-teal-600">{price}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
          <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

