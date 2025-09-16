"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Leaf, Heart, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const timeline = [
    {
      year: "1999",
      title: "Foundation",
      description:
        "Luxuria was founded with a vision to create exceptional furniture that combines traditional craftsmanship with modern design.",
    },
    {
      year: "2005",
      title: "International Expansion",
      description:
        "Opened our first international showroom in Milan, establishing our presence in the global luxury furniture market.",
    },
    {
      year: "2012",
      title: "Sustainability Initiative",
      description:
        "Launched our comprehensive sustainability program, sourcing materials from certified sustainable forests.",
    },
    {
      year: "2018",
      title: "Master Artisan Program",
      description:
        "Established partnerships with master craftsmen worldwide to preserve traditional furniture-making techniques.",
    },
    {
      year: "2024",
      title: "Digital Innovation",
      description:
        "Introduced cutting-edge design technology while maintaining our commitment to handcrafted excellence.",
    },
  ]

  const team = [
    {
      name: "Alessandro Rossi",
      role: "Founder & Creative Director",
      image: "/team/alessandro-rossi.jpeg",
      description:
        "With over 30 years in luxury furniture design, Alessandro brings unparalleled vision and expertise to every collection.",
    },
    {
      name: "Maria Gonzalez",
      role: "Director of Operations",
      image: "/team/maria-gonzalez.jpeg",
      description:
        "Maria oversees our global operations and quality assurance, ensuring every piece meets our exacting standards of excellence.",
    },
    {
      name: "James Chen",
      role: "Head of Design Innovation",
      image: "/team/james-chen.jpeg",
      description:
        "James leads our design innovation team, blending traditional craftsmanship with cutting-edge technology and sustainable practices.",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every detail, from initial design to final delivery.",
    },
    {
      icon: Users,
      title: "Craftsmanship",
      description: "Our master artisans bring generations of skill to every handcrafted piece.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to responsible sourcing and environmental stewardship.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for exceptional furniture drives everything we create.",
    },
  ]

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "50+", label: "Master Artisans" },
    { number: "15", label: "Countries Served" },
    { number: "10,000+", label: "Happy Customers" },
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5] dark:bg-[#1a1a1a] dark:text-[#f5f5f5] light:bg-[#f5f5f5] light:text-[#1a1a1a]">
      {/* Breadcrumb */}
      <div className="bg-[#2d2d2d] border-b border-[#d4af37]/20 dark:bg-[#2d2d2d] light:bg-[#ffffff] light:border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-[#f5f5f5]/60 hover:text-[#d4af37] transition-colors dark:text-[#f5f5f5]/60 light:text-[#1a1a1a]/60"
            >
              Home
            </Link>
            <span className="text-[#f5f5f5]/40 dark:text-[#f5f5f5]/40 light:text-[#1a1a1a]/40">/</span>
            <span className="text-[#d4af37]">About</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%206-gspCvsYVhXcyZN7jBbTM8Sxpzt74ZZ.jpeg"
            alt="Luxuria Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#f5f5f5] mb-6">
              Our <span className="text-[#d4af37]">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#f5f5f5]/80 max-w-4xl mx-auto leading-relaxed">
              For over two decades, Luxuria has been crafting exceptional furniture that transforms spaces into
              extraordinary experiences. Our commitment to excellence, sustainability, and timeless design continues to
              define luxury living.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2d2d2d] dark:bg-[#2d2d2d] light:bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">{stat.number}</div>
                <div className="text-[#f5f5f5]/80 dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 dark:bg-[#1a1a1a] light:bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-6 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
                Crafting <span className="text-[#d4af37]">Excellence</span>
              </h2>
              <div className="space-y-6 text-lg text-[#f5f5f5]/80 leading-relaxed dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
                <p>
                  Founded in 1999 by master craftsman Alessandro Rossi, Luxuria began as a small workshop in the heart
                  of Italy's furniture district. Our founder's vision was simple yet profound: to create furniture that
                  would be treasured for generations.
                </p>
                <p>
                  Today, we combine traditional European craftsmanship with contemporary design sensibilities, creating
                  pieces that are both timeless and relevant. Every item in our collection tells a story of dedication,
                  skill, and passion for excellence.
                </p>
                <p>
                  Our commitment extends beyond beautiful furniture to encompass sustainable practices, fair trade
                  partnerships, and the preservation of traditional craftsmanship techniques for future generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%204-mza4fiVYScBshPwjqWTlxSseXBVtFS.jpeg"
                alt="Luxuria Craftsmanship"
                className="w-full h-auto rounded-lg shadow-2xl dark:shadow-2xl light:shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#d4af37] text-[#1a1a1a] p-6 rounded-lg shadow-xl dark:shadow-xl light:shadow-xl">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#2d2d2d] dark:bg-[#2d2d2d] light:bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-6 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
              Our Journey
            </h2>
            <p className="text-xl text-[#f5f5f5]/80 max-w-3xl mx-auto dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
              Discover the milestones that have shaped Luxuria into the luxury furniture brand it is today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#d4af37]/30 hidden md:block dark:bg-[#d4af37]/30 light:bg-[#d4af37]/30"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="md:w-1/2">
                    <Card className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6 shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 dark:bg-[#1a1a1a] light:bg-[#f5f5f5] light:border-[#d4af37]/20">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className="bg-[#d4af37] text-[#1a1a1a] text-lg px-4 py-2 dark:bg-[#d4af37] light:bg-[#d4af37]">
                            {item.year}
                          </Badge>
                          <h3 className="font-serif text-2xl font-bold text-[#f5f5f5] dark:text-[#f5f5f5] light:text-[#1a1a1a]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-[#f5f5f5]/80 leading-relaxed dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-[#d4af37] rounded-full border-4 border-[#1a1a1a] z-10 dark:bg-[#d4af37] light:bg-[#d4af37]"></div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 dark:bg-[#1a1a1a] light:bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-6 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
              Master Craftsmanship
            </h2>
            <p className="text-xl text-[#f5f5f5]/80 max-w-3xl mx-auto dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
              Every piece is created by skilled artisans who have dedicated their lives to perfecting their craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%201-CzehTkSXICl0os4SOzLOvmQKw9WSUx.jpeg"
                alt="Leather Craftsmanship"
                className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-xl font-bold text-[#f5f5f5] mb-2 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
                  Leather Working
                </h3>
                <p className="text-[#f5f5f5]/80 dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
                  Premium Italian leather, hand-selected and crafted
                </p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnture%203-EuRMdXoqJPjD1RDY3YMpYbk8ZPLx3T.jpeg"
                alt="Wood Craftsmanship"
                className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-xl font-bold text-[#f5f5f5] mb-2 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
                  Wood Working
                </h3>
                <p className="text-[#f5f5f5]/80 dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
                  Sustainable hardwoods, expertly shaped and finished
                </p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furniture%202-gAJAzuzTX83ILHXFIkpbkN8zHUDi1b.jpeg"
                alt="Upholstery Craftsmanship"
                className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-xl font-bold text-[#f5f5f5] mb-2 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
                  Upholstery
                </h3>
                <p className="text-[#f5f5f5]/80 dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
                  Hand-stitched details with precision and care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#2d2d2d] dark:bg-[#2d2d2d] light:bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-6 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
              Meet Our Team
            </h2>
            <p className="text-xl text-[#f5f5f5]/80 max-w-3xl mx-auto dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
              The passionate individuals behind Luxuria's commitment to excellence and innovation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-start max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="flex-1 max-w-sm mx-auto lg:mx-0">
                <Card className="bg-[#1a1a1a] border border-[#d4af37]/20 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 group dark:bg-[#1a1a1a] light:bg-[#f5f5f5] light:border-[#d4af37]/20 h-full flex flex-col hover:scale-105">
                  <div className="relative w-full bg-[#2a2a2a] overflow-visible">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-auto display-block object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{ minHeight: "300px" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#f5f5f5] mb-2 dark:text-[#f5f5f5] light:text-[#1a1a1a] text-center">
                        {member.name}
                      </h3>
                      <p className="text-[#d4af37] font-medium mb-4 text-center text-sm uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-[#f5f5f5]/80 leading-relaxed dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80 text-center text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 dark:bg-[#1a1a1a] light:bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-6 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
              Our Values
            </h2>
            <p className="text-xl text-[#f5f5f5]/80 max-w-3xl mx-auto dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
              The principles that guide everything we do at Luxuria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-[#2d2d2d] border border-[#d4af37]/20 p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 group dark:bg-[#2d2d2d] light:bg-[#f5f5f5] light:border-[#d4af37]/20"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 dark:bg-[#d4af37] light:bg-[#d4af37]">
                    <value.icon className="w-8 h-8 text-[#1a1a1a] dark:text-[#1a1a1a] light:text-[#1a1a1a]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#f5f5f5] mb-4 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
                    {value.title}
                  </h3>
                  <p className="text-[#f5f5f5]/80 leading-relaxed dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#2d2d2d] dark:bg-[#2d2d2d] light:bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-6 dark:text-[#f5f5f5] light:text-[#1a1a1a]">
            Ready to Experience <span className="text-[#d4af37]">Luxury?</span>
          </h2>
          <p className="text-xl text-[#f5f5f5]/80 mb-8 max-w-2xl mx-auto dark:text-[#f5f5f5]/80 light:text-[#1a1a1a]/80">
            Discover our complete collection of handcrafted furniture and transform your space into something
            extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections">
              <Button
                size="lg"
                className="bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 hover:shadow-xl hover:shadow-[#d4af37]/20 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 dark:bg-[#d4af37] light:bg-[#d4af37] dark:text-[#1a1a1a] light:text-[#1a1a1a]"
              >
                View Collections
                <ArrowRight className="w-5 h-5 ml-2 dark:text-[#1a1a1a] light:text-[#1a1a1a]" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] hover:shadow-xl hover:shadow-[#d4af37]/10 text-lg px-8 py-6 bg-transparent transition-all duration-300 hover:scale-105 dark:border-[#d4af37] light:border-[#d4af37] dark:text-[#d4af37] light:text-[#1a1a1a]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
