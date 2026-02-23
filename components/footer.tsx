import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/octavalenzuela" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/octa-valenzuela/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <p className="text-muted-foreground text-sm font-mono">
          PORTFOLIO © OCTAVIO VALENZUELA  {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
