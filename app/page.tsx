"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, ChevronLeft, ChevronRight, Play, Quote } from "lucide-react"

export default function LuxuryFurniturePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const collections = [
    {
      name: "Dark Wood Collection",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%203-EuRMdXoqJPjD1RDY3YMpYbk8ZPLx3T.jpeg",
      category: "Premium Hardwood",
    },
    {
      name: "Leather Luxury Series",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%201-CzehTkSXICl0os4SOzLOvmQKw9WSUx.jpeg",
      category: "Italian Leather",
    },
    {
      name: "Modern Elegance",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%202-gAJAzuzTX83ILHXFIkpbkN8zHUDi1b.jpeg",
      category: "Contemporary Design",
    },
  ]

  const products = [
    {
      id: 1,
      name: "Executive Leather Chair",
      price: "$4,299",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%202-gAJAzuzTX83ILHXFIkpbkN8zHUDi1b.jpeg",
      rating: 5,
      category: "Seating",
    },
    {
      id: 2,
      name: "Walnut Dining Table",
      price: "$3,899",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%203-EuRMdXoqJPjD1RDY3YMpYbk8ZPLx3T.jpeg",
      rating: 5,
      category: "Dining",
    },
    {
      id: 3,
      name: "Luxury Sofa Collection",
      price: "$6,199",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%201-CzehTkSXICl0os4SOzLOvmQKw9WSUx.jpeg",
      rating: 5,
      category: "Living Room",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Interior Designer",
      content:
        "The craftsmanship is absolutely exceptional. Every piece tells a story of luxury and attention to detail.",
      image: "/professional-interior-designer.png",
    },
    {
      name: "James Richardson",
      role: "Homeowner",
      content: "Transformed our living space completely. The quality and elegance exceeded all expectations.",
      image: "/professional-man-homeowner.jpg",
    },
    {
      name: "Maria Santos",
      role: "Architect",
      content: "Perfect blend of modern design and timeless elegance. Highly recommend for luxury projects.",
      image: "/professional-woman-architect.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%204-mza4fiVYScBshPwjqWTlxSseXBVtFS.jpeg"
            alt="Luxury Furniture Showroom"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance leading-tight text-white">
                  Exquisite Furniture
                  <span className="text-[#d4af37] block">Collection</span>
                </h1>
              </div>
              <div>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Discover handcrafted luxury furniture that transforms your space into a masterpiece. Each piece is
                  meticulously designed with premium materials and timeless elegance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/collections">
                  <Button
                    size="lg"
                    className="bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 hover:shadow-2xl hover:shadow-[#d4af37]/20 text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    Explore Collection
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] hover:shadow-xl hover:shadow-[#d4af37]/10 text-lg px-8 py-6 bg-transparent transition-all duration-300 transform hover:scale-105"
                >
                  View Catalogue
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%205-G41LUhWxJBdCOYnJiGRT34wAk1KHox.jpeg"
                  alt="Featured Luxury Furniture"
                  className="w-full h-auto rounded-lg shadow-2xl hover:shadow-3xl hover:shadow-[#d4af37]/10 transition-all duration-500 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Carousel */}
      <section id="collections" className="py-20 bg-[#2d2d2d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#f5f5f5]">Featured Collections</h2>
            <p className="text-xl text-[#f5f5f5]/80 max-w-3xl mx-auto">
              Explore our curated collections of premium furniture, each crafted with exceptional attention to detail
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {collections.map((collection, index) => (
                  <div key={index} className="min-w-full">
                    <div className="relative h-96 md:h-[500px] group">
                      <img
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"></div>
                      <div className="absolute bottom-8 left-8 border-l-4 border-[#d4af37] pl-6">
                        <Badge className="mb-4 bg-[#d4af37] text-[#1a1a1a] shadow-lg">{collection.category}</Badge>
                        <h3 className="font-serif text-3xl font-bold text-[#f5f5f5]">{collection.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1a1a1a]/90 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110"
              onClick={() => setCurrentSlide(currentSlide === 0 ? collections.length - 1 : currentSlide - 1)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1a1a1a]/90 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110"
              onClick={() => setCurrentSlide(currentSlide === collections.length - 1 ? 0 : currentSlide + 1)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Product Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#f5f5f5]">Premium Showcase</h2>
            <p className="text-xl text-[#f5f5f5]/80 max-w-3xl mx-auto">
              Handpicked luxury pieces that define elegance and sophistication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden bg-[#2d2d2d] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/10 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Link href={`/products/${product.id}`}>
                    <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105">
                      Quick View
                    </Button>
                  </Link>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-[#f5f5f5]/10 text-[#f5f5f5]/80">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-[#f5f5f5]">{product.name}</h3>
                  <p className="text-2xl font-bold text-[#d4af37]">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Story */}
      <section id="about" className="py-20 bg-[#2d2d2d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-[#1a1a1a] shadow-2xl">
                <div
                  className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] relative"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%206-gspCvsYVhXcyZN7jBbTM8Sxpzt74ZZ.jpeg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-[#1a1a1a]/60"></div>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] bg-[#1a1a1a]/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all duration-300 hover:scale-110 relative z-10"
                  >
                    <Play className="h-6 w-6 mr-2" />
                    Watch Our Story
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#f5f5f5]">Artisan Craftsmanship</h2>
                <p className="text-xl text-[#f5f5f5]/80 leading-relaxed mb-6">
                  Every piece in our collection is meticulously handcrafted by master artisans who have perfected their
                  craft over generations. We source only the finest materials from sustainable forests and premium
                  suppliers worldwide.
                </p>
                <p className="text-lg text-[#f5f5f5]/80 leading-relaxed">
                  From the initial design sketch to the final finishing touches, each furniture piece undergoes rigorous
                  quality control to ensure it meets our exacting standards of luxury and durability.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg bg-[#1a1a1a]/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#d4af37] mb-2">50+</div>
                  <div className="text-[#f5f5f5]/80">Master Artisans</div>
                </div>
                <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg bg-[#1a1a1a]/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#d4af37] mb-2">25</div>
                  <div className="text-[#f5f5f5]/80">Years Experience</div>
                </div>
              </div>
              <Link href="/about">
                <Button className="bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 hover:shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-300 hover:scale-105">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover why discerning customers choose our luxury furniture collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border border-border p-8 relative shadow-lg hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <Quote className="h-8 w-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="contact" className="py-20 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#f5f5f5]">Stay Updated</h2>
          <p className="text-xl text-[#f5f5f5]/80 mb-8 max-w-2xl mx-auto">
            Be the first to discover our latest collections and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#1a1a1a] border-[#d4af37]/30 focus:border-[#d4af37] shadow-lg hover:shadow-xl transition-all duration-300 text-[#f5f5f5]"
            />
            <Button className="bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 hover:shadow-xl hover:shadow-[#d4af37]/20 px-8 transition-all duration-300 hover:scale-105">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
