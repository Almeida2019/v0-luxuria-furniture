"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    }
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-accent/10 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 text-foreground transition-all duration-300 ease-in-out ${
            isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 text-foreground transition-all duration-300 ease-in-out ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>
      <div className="absolute inset-0 rounded-lg bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </button>
  )
}
