"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ShoppingCart,
} from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Mock product data - in a real app, this would be fetched based on params.id
  const product = {
    id: Number.parseInt(params.id),
    name: "Executive Leather Chair",
    price: 4299,
    originalPrice: 4999,
    rating: 5,
    reviews: 24,
    category: "Seating",
    inStock: true,
    isNew: false,
    isSale: true,
    description:
      "Experience unparalleled comfort and sophistication with our Executive Leather Chair. Handcrafted from premium Italian leather and featuring ergonomic design principles, this chair is perfect for the modern executive who values both style and functionality.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%202-gAJAzuzTX83ILHXFIkpbkN8zHUDi1b.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%201-CzehTkSXICl0os4SOzLOvmQKw9WSUx.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%203-EuRMdXoqJPjD1RDY3YMpYbk8ZPLx3T.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%204-mza4fiVYScBshPwjqWTlxSseXBVtFS.jpeg",
    ],
    colors: [
      { name: "Rich Brown", value: "brown", hex: "#8B4513" },
      { name: "Classic Black", value: "black", hex: "#1a1a1a" },
      { name: "Cognac", value: "cognac", hex: "#A0522D" },
    ],
    materials: [
      { name: "Italian Leather", value: "italian-leather" },
      { name: "Premium Fabric", value: "premium-fabric" },
    ],
    specifications: {
      dimensions: '32" W x 34" D x 45" H',
      weight: "85 lbs",
      material: "Top-grain Italian leather",
      frame: "Solid hardwood with steel reinforcement",
      cushioning: "High-density foam with memory foam topper",
      warranty: "10 years structural, 5 years leather",
    },
    features: [
      "Ergonomic lumbar support",
      "360-degree swivel base",
      "Height adjustable gas cylinder",
      "Premium Italian leather upholstery",
      "Hand-stitched details",
      "Solid hardwood frame construction",
    ],
    careInstructions: [
      "Dust regularly with a soft, dry cloth",
      "Use leather conditioner every 6 months",
      "Avoid direct sunlight and heat sources",
      "Clean spills immediately with a damp cloth",
      "Professional cleaning recommended annually",
    ],
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Walnut Dining Table",
      price: 3899,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%203-EuRMdXoqJPjD1RDY3YMpYbk8ZPLx3T.jpeg",
      rating: 5,
    },
    {
      id: 3,
      name: "Luxury Sofa Collection",
      price: 6199,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%201-CzehTkSXICl0os4SOzLOvmQKw9WSUx.jpeg",
      rating: 5,
    },
    {
      id: 4,
      name: "Modern Bedroom Set",
      price: 5299,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%204-mza4fiVYScBshPwjqWTlxSseXBVtFS.jpeg",
      rating: 4,
    },
  ]

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      comment:
        "Absolutely stunning chair! The leather quality is exceptional and it's incredibly comfortable for long work sessions.",
      verified: true,
    },
    {
      name: "Michael Chen",
      rating: 5,
      date: "2024-01-10",
      comment:
        "Worth every penny. The craftsmanship is evident in every detail. Highly recommend for any executive office.",
      verified: true,
    },
    {
      name: "Emma Rodriguez",
      rating: 4,
      date: "2024-01-05",
      comment:
        "Beautiful chair with excellent build quality. Delivery was prompt and professional setup service was great.",
      verified: true,
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      productId: product.id,
      quantity,
      color: selectedColor,
      material: selectedMaterial,
    })
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5]">
      {/* Breadcrumb */}
      <div className="bg-[#2d2d2d] border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#f5f5f5]/60 hover:text-[#d4af37] transition-colors">
              Home
            </Link>
            <span className="text-[#f5f5f5]/40">/</span>
            <Link href="/collections" className="text-[#f5f5f5]/60 hover:text-[#d4af37] transition-colors">
              Collections
            </Link>
            <span className="text-[#f5f5f5]/40">/</span>
            <span className="text-[#d4af37]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-[#2d2d2d] rounded-lg overflow-hidden">
              <img
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1a1a1a]/80 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] backdrop-blur-sm"
                onClick={prevImage}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1a1a1a]/80 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] backdrop-blur-sm"
                onClick={nextImage}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && <Badge className="bg-[#d4af37] text-[#1a1a1a]">New</Badge>}
                {product.isSale && <Badge className="bg-red-600 text-white">Sale</Badge>}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index ? "border-[#d4af37]" : "border-[#d4af37]/20 hover:border-[#d4af37]/50"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-[#f5f5f5]/10 text-[#f5f5f5]/80">
                  {product.category}
                </Badge>
                {product.inStock ? (
                  <Badge className="bg-green-600 text-white">In Stock</Badge>
                ) : (
                  <Badge className="bg-red-600 text-white">Out of Stock</Badge>
                )}
              </div>

              <h1 className="font-serif text-4xl font-bold text-[#f5f5f5] mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < product.rating ? "fill-[#d4af37] text-[#d4af37]" : "text-[#f5f5f5]/30"}`}
                    />
                  ))}
                </div>
                <span className="text-[#f5f5f5]/60">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-[#d4af37]">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-[#f5f5f5]/60 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.isSale && (
                  <Badge className="bg-red-600 text-white">
                    Save ${(product.originalPrice! - product.price).toLocaleString()}
                  </Badge>
                )}
              </div>

              <p className="text-lg text-[#f5f5f5]/80 leading-relaxed">{product.description}</p>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium text-[#f5f5f5] mb-3">
                  Color: {selectedColor && product.colors.find((c) => c.value === selectedColor)?.name}
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === color.value
                          ? "border-[#d4af37] scale-110"
                          : "border-[#f5f5f5]/30 hover:border-[#d4af37]/50"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Material Selection */}
              <div>
                <label className="block text-sm font-medium text-[#f5f5f5] mb-2">Material</label>
                <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                  <SelectTrigger className="bg-[#2d2d2d] border-[#d4af37]/30 focus:border-[#d4af37] text-[#f5f5f5]">
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2d2d2d] border-[#d4af37]/30">
                    {product.materials.map((material) => (
                      <SelectItem key={material.value} value={material.value}>
                        {material.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-[#f5f5f5] mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a]"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-semibold text-[#f5f5f5] min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a]"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 hover:shadow-xl hover:shadow-[#d4af37]/20 text-lg py-6 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all duration-300 ${
                    isWishlisted ? "bg-[#d4af37] text-[#1a1a1a]" : "text-[#d4af37] bg-transparent"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] bg-transparent"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#d4af37]/20">
                <div className="flex items-center gap-2 text-sm text-[#f5f5f5]/80">
                  <Truck className="w-4 h-4 text-[#d4af37]" />
                  Free Delivery
                </div>
                <div className="flex items-center gap-2 text-sm text-[#f5f5f5]/80">
                  <Shield className="w-4 h-4 text-[#d4af37]" />
                  10 Year Warranty
                </div>
                <div className="flex items-center gap-2 text-sm text-[#f5f5f5]/80">
                  <RotateCcw className="w-4 h-4 text-[#d4af37]" />
                  30 Day Returns
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-[#2d2d2d] border border-[#d4af37]/20">
              <TabsTrigger
                value="details"
                className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-[#1a1a1a]"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-[#1a1a1a]"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger value="care" className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-[#1a1a1a]">
                Care Instructions
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-[#1a1a1a]"
              >
                Reviews ({product.reviews})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-8">
              <Card className="bg-[#2d2d2d] border border-[#d4af37]/20 p-8">
                <CardContent className="p-0">
                  <h3 className="font-serif text-2xl font-bold text-[#f5f5f5] mb-6">Product Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                        <span className="text-[#f5f5f5]/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card className="bg-[#2d2d2d] border border-[#d4af37]/20 p-8">
                <CardContent className="p-0">
                  <h3 className="font-serif text-2xl font-bold text-[#f5f5f5] mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-[#d4af37]/10">
                        <span className="font-medium text-[#f5f5f5] capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                        <span className="text-[#f5f5f5]/80">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="care" className="mt-8">
              <Card className="bg-[#2d2d2d] border border-[#d4af37]/20 p-8">
                <CardContent className="p-0">
                  <h3 className="font-serif text-2xl font-bold text-[#f5f5f5] mb-6">Care Instructions</h3>
                  <div className="space-y-4">
                    {product.careInstructions.map((instruction, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold text-sm mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-[#f5f5f5]/80">{instruction}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="bg-[#2d2d2d] border border-[#d4af37]/20 p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-[#f5f5f5]">{review.name}</span>
                            {review.verified && (
                              <Badge className="bg-green-600 text-white text-xs">Verified Purchase</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "fill-[#d4af37] text-[#d4af37]" : "text-[#f5f5f5]/30"}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-[#f5f5f5]/60">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#f5f5f5]/80 leading-relaxed">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="font-serif text-4xl font-bold text-[#f5f5f5] mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="group overflow-hidden bg-[#2d2d2d] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/10 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <Link href={`/products/${relatedProduct.id}`}>
                    <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105">
                      View Details
                    </Button>
                  </Link>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < relatedProduct.rating ? "fill-[#d4af37] text-[#d4af37]" : "text-[#f5f5f5]/30"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-[#f5f5f5]">{relatedProduct.name}</h3>
                  <p className="text-2xl font-bold text-[#d4af37]">${relatedProduct.price.toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
