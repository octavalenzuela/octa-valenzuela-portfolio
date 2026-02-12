"use client"

import { Github, Linkedin, ChevronDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm md:text-base mb-4">
          Hola, mi nombre es
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Octavio Valenzuela.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 text-balance">
          Desarrollador fullstack.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed">
        Soy un desarrollador con experiencia en la creación de aplicaciones 
              web y APIs. Trabajo tanto en el backend como en el frontend, desarrollando soluciones 
              de punta a punta.
        </p>
        <div className="flex items-center gap-4 mb-12">
          <Button variant="outline" size="icon" className=" hover:border-[#5eead4] hover:text-[#5eead4] hover:bg-[#5eead4]/10 transition-colors" asChild>
            <a href="https://github.com/octavalenzuela" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className=" hover:border-[#5eead4] hover:text-[#5eead4] hover:bg-[#5eead4]/10 transition-colors" asChild>
            <a href="https://www.linkedin.com/in/octa-valenzuela/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-[#5eead4] bg-transparent hover:cursor-pointer transition-colors"
          onClick={() => scrollToSection("skills")}
        >
          Ver mis habilidades
        </Button>
      </div>
      <button 
        onClick={() => scrollToSection("skills")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
