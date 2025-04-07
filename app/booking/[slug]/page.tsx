"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function BookingPage({ params }: { params: { slug: string } }) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined)
  const [serviceType, setServiceType] = useState<string | undefined>(undefined)

  // In a real app, you would fetch the provider data based on the slug
  const provider = {
    name: "John Smith",
    profession: "Plumber",
    rating: 4.9,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=200",
    location: "New York, NY",
    services: [
      { id: "leak-repair", name: "Leak Detection and Repair", price: "$95" },
      { id: "pipe-installation", name: "Pipe Installation", price: "$150" },
      { id: "drain-cleaning", name: "Drain Cleaning", price: "$85" },
      { id: "water-heater", name: "Water Heater Installation", price: "$250" },
      { id: "fixture-installation", name: "Fixture Installation", price: "$120" },
    ],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the booking data to your backend
    alert(`Booking submitted for ${serviceType} on ${date ? format(date, "PPP") : ""} at ${timeSlot}`)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Book an Appointment</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Provider Info */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Service Provider</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={provider.image} alt={provider.name} />
                  <AvatarFallback>
                    {provider.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{provider.name}</h2>
                <p className="text-gray-600 mb-2">{provider.profession}</p>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{provider.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
              <CardDescription>Select your preferred service, date, and time</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Select Service</h3>
                  <RadioGroup value={serviceType} onValueChange={setServiceType}>
                    {provider.services.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center justify-between space-x-2 border p-4 rounded-md"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={service.id} id={service.id} />
                          <Label htmlFor={service.id} className="font-medium">
                            {service.name}
                          </Label>
                        </div>
                        <span className="font-semibold text-teal-600">{service.price}</span>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Date Selection */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Select Date</h3>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                          date > new Date(new Date().setDate(new Date().getDate() + 30))
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Slot Selection */}
                {date && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Select Time</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {provider.timeSlots.map((slot) => (
                        <Button
                          key={slot}
                          type="button"
                          variant={timeSlot === slot ? "default" : "outline"}
                          className={cn(
                            timeSlot === slot && "bg-teal-600 hover:bg-teal-700",
                            "flex items-center justify-center",
                          )}
                          onClick={() => setTimeSlot(slot)}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Notes */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Additional Notes</h3>
                  <Textarea
                    placeholder="Please provide any additional details about your service needs..."
                    className="min-h-[100px]"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={!date || !timeSlot || !serviceType}
                onClick={handleSubmit}
              >
                Confirm Booking
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

