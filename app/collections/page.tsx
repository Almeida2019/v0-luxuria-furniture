"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Filter, Grid, List, ChevronLeft, ChevronRight, Search } from "lucide-react"

export default function CollectionsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("featured")
  const [searchQuery, setSearchQuery] = useState("")

  const products = [
    {
      id: 1,
      name: "Executive Leather Chair",
      price: 77390, // ~$4299 converted to ZAR
      originalPrice: 89980, // ~$4999 converted to ZAR
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%202-gAJAzuzTX83ILHXFIkpbkN8zHUDi1b.jpeg",
      rating: 5,
      reviews: 24,
      category: "Seating",
      material: "Leather",
      color: "Brown",
      inStock: true,
      isNew: false,
      isSale: true,
    },
    {
      id: 2,
      name: "Walnut Dining Table",
      price: 70180, // ~$3899 converted to ZAR
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%203-EuRMdXoqJPjD1RDY3YMpYbk8ZPLx3T.jpeg",
      rating: 5,
      reviews: 18,
      category: "Dining",
      material: "Wood",
      color: "Walnut",
      inStock: true,
      isNew: true,
      isSale: false,
    },
    {
      id: 3,
      name: "Luxury Sofa Collection",
      price: 111580, // ~$6199 converted to ZAR
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%201-CzehTkSXICl0os4SOzLOvmQKw9WSUx.jpeg",
      rating: 5,
      reviews: 32,
      category: "Living Room",
      material: "Leather",
      color: "Brown",
      inStock: true,
      isNew: false,
      isSale: false,
    },
    {
      id: 4,
      name: "Modern Bedroom Set",
      price: 95380, // ~$5299 converted to ZAR
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%204-mza4fiVYScBshPwjqWTlxSseXBVtFS.jpeg",
      rating: 4,
      reviews: 15,
      category: "Bedroom",
      material: "Wood",
      color: "Dark",
      inStock: true,
      isNew: true,
      isSale: false,
    },
    {
      id: 5,
      name: "Contemporary Office Desk",
      price: 52180, // ~$2899 converted to ZAR
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%205-G41LUhWxJBdCOYnJiGRT34wAk1KHox.jpeg",
      rating: 4,
      reviews: 12,
      category: "Office",
      material: "Wood",
      color: "Natural",
      inStock: false,
      isNew: false,
      isSale: false,
    },
    {
      id: 6,
      name: "Luxury Showroom Display",
      price: 161980, // ~$8999 converted to ZAR
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%206-gspCvsYVhXcyZN7jBbTM8Sxpzt74ZZ.jpeg",
      rating: 5,
      reviews: 8,
      category: "Living Room",
      material: "Mixed",
      color: "Dark",
      inStock: true,
      isNew: false,
      isSale: false,
    },
  ]

  const categories = ["Living Room", "Dining", "Bedroom", "Office", "Seating"]
  const materials = ["Leather", "Wood", "Mixed", "Metal", "Fabric"]
  const colors = ["Brown", "Dark", "Natural", "Black", "White"]

  const itemsPerPage = 6
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const handleMaterialChange = (material: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials([...selectedMaterials, material])
    } else {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary">Collections</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Collections</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover our complete range of luxury furniture pieces, each crafted with exceptional attention to detail
            and premium materials.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground mb-4">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      />
                      <label htmlFor={category} className="text-sm text-muted-foreground cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <div key={material} className="flex items-center space-x-2">
                      <Checkbox
                        id={material}
                        checked={selectedMaterials.includes(material)}
                        onCheckedChange={(checked) => handleMaterialChange(material, checked as boolean)}
                      />
                      <label htmlFor={material} className="text-sm text-muted-foreground cursor-pointer">
                        {material}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Price Range</h3>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="0-50000">Under R50,000</SelectItem>
                    <SelectItem value="50000-100000">R50,000 - R100,000</SelectItem>
                    <SelectItem value="100000-200000">R100,000 - R200,000</SelectItem>
                    <SelectItem value="200000+">Over R200,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedMaterials([])
                  setPriceRange("all")
                  setSearchQuery("")
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">
                  Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} products
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex items-center border border-border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`grid gap-6 mb-8 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
            >
              {currentProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`group overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${viewMode === "list" ? "flex flex-row" : ""}`}
                >
                  <div className={`relative overflow-hidden ${viewMode === "list" ? "w-1/3" : ""}`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className={`object-cover group-hover:scale-110 transition-transform duration-700 ${viewMode === "list" ? "w-full h-full" : "w-full h-80"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && <Badge className="bg-primary text-white shadow-lg">New</Badge>}
                      {product.isSale && <Badge className="bg-red-600 text-white shadow-lg">Sale</Badge>}
                      {!product.inStock && <Badge className="bg-gray-600 text-white shadow-lg">Out of Stock</Badge>}
                    </div>

                    <Link href={`/products/${product.id}`}>
                      <Button
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105"
                        style={{
                          backgroundColor: "#d4af37 !important",
                          color: "#ffffff !important",
                          border: "none !important",
                        }}
                      >
                        Quick View
                      </Button>
                    </Link>
                  </div>

                  <CardContent className={`p-6 ${viewMode === "list" ? "w-2/3 flex flex-col justify-between" : ""}`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          style={{
                            backgroundColor: "#1e293b !important",
                            color: "#ffffff !important",
                          }}
                        >
                          {product.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < product.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{product.name}</h3>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-primary">R{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            R{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Material: {product.material}</span>
                        <span>Color: {product.color}</span>
                      </div>
                    </div>

                    {viewMode === "list" && (
                      <div className="mt-4 flex gap-2">
                        <Button className="flex-1" disabled={!product.inStock}>
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                        <Button variant="outline">♡</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                <div className="flex items-center gap-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i + 1}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      onClick={() => setCurrentPage(i + 1)}
                      className="w-10 h-10"
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <span className="text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
