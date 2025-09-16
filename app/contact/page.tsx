"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
      newsletter: false,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: ["123 Luxury Avenue", "Design District, NY 10001", "United States"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Toll-free: 1-800-LUXURIA"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@luxuria.com", "sales@luxuria.com", "support@luxuria.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 10:00 AM - 6:00 PM", "Sunday: 12:00 PM - 5:00 PM"],
    },
  ]

  const services = [
    {
      icon: MessageSquare,
      title: "Design Consultation",
      description: "Free personalized consultation with our interior design experts.",
      duration: "60 minutes",
    },
    {
      icon: Calendar,
      title: "Showroom Visit",
      description: "Schedule a private tour of our luxury furniture collections.",
      duration: "90 minutes",
    },
    {
      icon: Users,
      title: "Custom Design",
      description: "Work with our team to create bespoke furniture pieces.",
      duration: "Initial consultation",
    },
  ]

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
            <span className="text-[#d4af37]">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#f5f5f5] mb-6">
            Get In <span className="text-[#d4af37]">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#f5f5f5]/80 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your space with luxury furniture? Our team of experts is here to help you create the
            perfect environment for your home or office.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[#2d2d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6 text-center shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-[#1a1a1a]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#f5f5f5] mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-[#f5f5f5]/80">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-[#2d2d2d] border border-[#d4af37]/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="font-serif text-3xl font-bold text-[#f5f5f5]">Send Us a Message</CardTitle>
                  <p className="text-[#f5f5f5]/80">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="bg-[#1a1a1a] border-[#d4af37]/30 focus:border-[#d4af37] text-[#f5f5f5]"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="bg-[#1a1a1a] border-[#d4af37]/30 focus:border-[#d4af37] text-[#f5f5f5]"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-[#1a1a1a] border-[#d4af37]/30 focus:border-[#d4af37] text-[#f5f5f5]"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-[#1a1a1a] border-[#d4af37]/30 focus:border-[#d4af37] text-[#f5f5f5]"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                        Inquiry Type *
                      </label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="bg-[#1a1a1a] border-[#d4af37]/30 focus:border-[#d4af37] text-[#f5f5f5]">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2d2d2d] border-[#d4af37]/30">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="consultation">Design Consultation</SelectItem>
                          <SelectItem value="custom">Custom Furniture</SelectItem>
                          <SelectItem value="showroom">Showroom Visit</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="bg-[#1a1a1a] border-[#d4af37]/30 focus:border-[#d4af37] text-[#f5f5f5]"
                        placeholder="Enter message subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-[#1a1a1a] border-[#d4af37]/30 focus:border-[#d4af37] text-[#f5f5f5] resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        className="border-[#d4af37]/30 data-[state=checked]:bg-[#d4af37] data-[state=checked]:border-[#d4af37]"
                      />
                      <label htmlFor="newsletter" className="text-sm text-[#f5f5f5]/80 cursor-pointer">
                        Subscribe to our newsletter for exclusive offers and design inspiration
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 hover:shadow-xl hover:shadow-[#d4af37]/20 text-lg py-6 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1a1a1a] mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Services & Map */}
            <div className="space-y-8">
              {/* Services */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#f5f5f5] mb-6">Our Services</h2>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <Card
                      key={index}
                      className="bg-[#2d2d2d] border border-[#d4af37]/20 p-6 shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 group"
                    >
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-6 h-6 text-[#1a1a1a]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-serif text-xl font-bold text-[#f5f5f5] mb-2">{service.title}</h3>
                            <p className="text-[#f5f5f5]/80 mb-2">{service.description}</p>
                            <p className="text-[#d4af37] text-sm font-medium">{service.duration}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#f5f5f5] mb-6">Find Us</h2>
                <Card className="bg-[#2d2d2d] border border-[#d4af37]/20 overflow-hidden shadow-lg">
                  <div className="h-80 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex items-center justify-center relative">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                      <h3 className="font-serif text-xl font-bold text-[#f5f5f5] mb-2">Luxuria Showroom</h3>
                      <p className="text-[#f5f5f5]/80">123 Luxury Avenue, Design District</p>
                      <p className="text-[#f5f5f5]/80">New York, NY 10001</p>
                      <Button
                        className="mt-4 bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90"
                        onClick={() => window.open("https://maps.google.com", "_blank")}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#f5f5f5]/80">
              Find answers to common questions about our furniture and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do you offer custom furniture design?",
                answer:
                  "Yes, we specialize in creating bespoke furniture pieces tailored to your specific requirements and space. Our design team works closely with you throughout the entire process.",
              },
              {
                question: "What is your delivery timeframe?",
                answer:
                  "Standard pieces typically ship within 2-4 weeks. Custom furniture may take 8-12 weeks depending on complexity. We provide detailed timelines during consultation.",
              },
              {
                question: "Do you provide interior design consultation?",
                answer:
                  "Our certified interior designers offer complimentary consultations to help you select the perfect pieces for your space and style preferences.",
              },
              {
                question: "What materials do you use?",
                answer:
                  "We use only premium materials including sustainably sourced hardwoods, top-grain leather, and high-quality fabrics. All materials are carefully selected for durability and beauty.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-serif text-xl font-bold text-[#f5f5f5] mb-3">{faq.question}</h3>
                  <p className="text-[#f5f5f5]/80 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
