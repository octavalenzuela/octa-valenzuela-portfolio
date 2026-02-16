"use client"

import React from "react"
import { ExternalLink, Github, Gamepad2, Calculator, ListTodo } from "lucide-react"
import Link from "next/link"


interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  repo?: string 
  icon: React.ReactNode
}

const projects: Project[] = [
  {
    title: "Pokédex",
    description: "Explora el mundo Pokémon, busca a tus favoritos y consulta sus estadísticas y detalles en una interfaz interactiva.",
    tech: ["React", "JavaScript", "CSS", "PokéAPI"],
    link: "https://octavalenzuela.github.io/app-pokemon/",
    icon: <Gamepad2 className="h-8 w-8" />
  },
  

]

export function Projects() {
  const accentText = "text-primary"
  const accentBorder = "border-primary/30 hover:border-primary"
  const cardBg = "bg-secondary/10 hover:bg-secondary/20" 

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className={`font-mono text-xl mr-2 ${accentText}`}>03.</span>
            Proyectos
          </h2>
          <div className="h-[1px] bg-border flex-grow max-w-[300px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col h-full p-6 rounded-2xl border ${accentBorder} ${cardBg} hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`p-3 rounded-xl bg-secondary/30 ${accentText}`}>
                  {project.icon}
                </div>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-10 p-2 text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()} 
                    aria-label={`Ver código de ${project.title} en GitHub`}
                  >
                    <Github className="h-6 w-6" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="rounded-full bg-secondary/40 px-4 py-1.5 text-xs font-medium text-white border border-white/5 leading-none">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary pointer-events-none">
                 {!project.repo && <ExternalLink className="h-6 w-6" />}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}