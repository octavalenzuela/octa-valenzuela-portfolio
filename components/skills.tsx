"use client"

import React from "react"
import { Code2, Server, Database } from "lucide-react"
import {
  JavaScriptIcon,
  ReactIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  SassIcon,
  BootstrapIcon,
  NodeIcon,
  PhpIcon,
  LaravelIcon,
  JavaIcon,
  SpringBootIcon,
  DotNetIcon,
  MySqlIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  SQLiteIcon,
  DatabaseIcon,
} from "@/components/tech-icons"

interface Skill {
  name: string
  note?: string
  icon: React.ReactNode
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: "JavaScript", icon: <JavaScriptIcon className="h-5 w-5" /> },
      { name: "React", icon: <ReactIcon className="h-5 w-5" /> },
      { name: "HTML", icon: <HtmlIcon className="h-5 w-5" /> },
      { name: "CSS", icon: <CssIcon className="h-5 w-5" /> },
      { name: "Tailwind", icon: <TailwindIcon className="h-5 w-5" /> },
      { name: "Sass", icon: <SassIcon className="h-5 w-5" /> },
      { name: "Bootstrap", icon: <BootstrapIcon className="h-5 w-5" /> },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Node.js", icon: <NodeIcon className="h-5 w-5" /> },
      { name: "PHP", icon: <PhpIcon className="h-5 w-5" /> },
      { name: "Laravel", icon: <LaravelIcon className="h-5 w-5" /> },
      { name: "Java", icon: <JavaIcon className="h-5 w-5" /> },
      { name: "Spring Boot", icon: <SpringBootIcon className="h-5 w-5" /> },
      { name: ".NET", icon: <DotNetIcon className="h-5 w-5" /> },
    ],
  },
  {
    title: "Bases de Datos",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MySQL", icon: <MySqlIcon className="h-5 w-5" /> },
      { name: "SQL Server", icon: <DatabaseIcon className="h-5 w-5" /> },
      { name: "MongoDB", icon: <MongoDBIcon className="h-5 w-5" /> },
      { name: "PostgreSQL", icon: <PostgreSQLIcon className="h-5 w-5" /> },
      { name: "SQLite", icon: <SQLiteIcon className="h-5 w-5" /> },
      { name: "Neo4j", icon: <DatabaseIcon className="h-5 w-5" /> },
    ],
  },
]

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium transition-all hover:bg-primary/20 hover:text-primary group">
      <span className="text-muted-foreground group-hover:text-primary transition-colors">
        {skill.icon}
      </span>
      {skill.name}
      {skill.note && (
        <span className="text-xs text-muted-foreground font-normal">
          ({skill.note})
        </span>
      )}
    </span>
  )
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">01.</span>
            Habilidades
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
