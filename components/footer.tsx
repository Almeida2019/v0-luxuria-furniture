import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-[#d4af37] font-bold">Luxuria</h3>
            <p className="text-[#f5f5f5]/80 text-sm leading-relaxed">
              Crafting exceptional furniture pieces that transform spaces into luxurious sanctuaries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#f5f5f5]/60 hover:text-[#d4af37] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#f5f5f5]/60 hover:text-[#d4af37] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#f5f5f5]/60 hover:text-[#d4af37] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Collections", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-[#f5f5f5]/80 hover:text-[#d4af37] transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-[#d4af37]">Collections</h4>
            <ul className="space-y-2">
              {["Living Room", "Bedroom", "Dining Room", "Office"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/collections/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[#f5f5f5]/80 hover:text-[#d4af37] transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-[#d4af37]">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[#f5f5f5]/80 text-sm">123 Luxury Ave, Design District</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[#f5f5f5]/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[#f5f5f5]/80 text-sm">info@luxuria.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/20 mt-8 pt-8 text-center">
          <p className="text-[#f5f5f5]/60 text-sm">© 2024 Luxuria Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
