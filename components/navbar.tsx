"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Habilidades", href: "#skills", number: "01" },
  { name: "Sobre Mi", href: "#about", number: "02" },
  { name: "Proyectos", href: "#projects", number: "03" },
  { name: "Contacto", href: "#contact", number: "04" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          {"<OV/>"}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary font-mono text-xs mr-1">{link.number}.</span>
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-[#5eead4] bg-transparent" asChild>
              <a href="/OctaValenzuela_2026.pdf" target="_blank" rel="noopener noreferrer">
                Ver curriculum
              </a>
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <ul className="flex flex-col items-center justify-center gap-8 h-full">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="text-lg text-foreground hover:text-primary transition-colors"
              >
                <span className="block text-primary font-mono text-sm mb-1">{link.number}.</span>
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent" asChild>
              <a href="/OctaValenzuela_2026.pdf" target="_blank" rel="noopener noreferrer">
                Ver curriculum
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
