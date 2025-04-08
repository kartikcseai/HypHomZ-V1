"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Providers", href: "/providers" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-black">HypHomZ</span>
            </Link>
          </div>

          {!isMobile ? (
            <>
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                      pathname === link.href ? "text-teal-600" : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <Button asChild variant="outline">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </>
          ) : (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-base font-medium transition-colors hover:text-teal-600 ${
                        pathname === link.href ? "text-teal-600" : "text-gray-700"
                      }`}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
{/*                   <div className="pt-4 flex flex-col space-y-2">
                    <Button asChild variant="outline">
                      <Link href="/login" onClick={() => setIsSheetOpen(false)}>
                        Log In
                      </Link>
                    </Button>
                    <Button asChild className="bg-teal-600 hover:bg-teal-700">
                      <Link href="/signup" onClick={() => setIsSheetOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </div> */}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}

