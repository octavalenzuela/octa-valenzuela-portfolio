export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">02.</span>
            Sobre mi
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hola, soy<span className="text-primary"> Octa Valenzuela</span>, tengo 26 años, soy de Argentina y  <span className="text-primary"> desarrollo aplicaciones web integrales combinando lógica de backend, gestión de bases de datos y diseño de interfaces</span>. 
              Mi enfoque se centra en la calidad del código y la documentación, asegurando que cada solución sea tan potente 
              por dentro como funcional por fuera.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Adquirí experiencia como Integrador de Aplicaciones y Analista técnico funcional en el  
              <span className="text-primary"> Hospital Universitario Austral</span>, y como desarrollador en <span className="text-primary"> Juana Bonita</span>, 
              donde apliqué soluciones en su backend, en el frontend y también en las bases de datos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Me formé en la  <span className="text-primary"> secundaria técnica E.E.S.T.N°3 </span> egresandome como  <span className="text-primary"> Técnico en Informatica </span> 
               y actualmente estoy cursando la <span className="text-primary"> Tecnicatura Universitaria en Desarrollo de Software</span> en la <span className="text-primary"> Universidad Nacional de Pilar</span>. 
               Sigo creando y ampliando mis conocimientos como <span className="text-primary">fullstack</span> realizando proyectos personales y colaborativos.
              Me interesa seguir aprendiendo y aportar valor en equipos de desarrollo.
            </p>
          </div>
          <div className="relative group">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/images/octavio.jpg" 
                alt="Octavio Valenzuela"
                className="aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 rounded-lg" />
            </div>
            <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
