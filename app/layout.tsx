import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import "./globals.css"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Luxuria | Premium Luxury Furniture Collection",
  description:
    "Discover our premium collection of handcrafted luxury furniture. From elegant sofas to bespoke dining sets, elevate your home with timeless pieces.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-[#1a1a1a] text-[#f5f5f5]">
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
