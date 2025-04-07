import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProviderCardProps {
  name: string
  profession: string
  rating: number
  reviews: number
  image: string
}

export default function ProviderCard({ name, profession, rating, reviews, image }: ProviderCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6 flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 mb-3">{profession}</p>
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm font-medium ml-2">
            {rating} ({reviews} reviews)
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/chat/${name.toLowerCase().replace(/\s+/g, "-")}`}>Chat</Link>
        </Button>
        <Button asChild className="flex-1 bg-teal-600 hover:bg-teal-700">
          <Link href={`/providers/${name.toLowerCase().replace(/\s+/g, "-")}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

