"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2 } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    asunto: "",
    mensaje: "",
  })
  
  const [isSending, setIsSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    
    try {
     const response = await fetch("https://mi-portfolio-backend-pska.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("¡Mensaje enviado con éxito! Revisaré tu correo pronto.")
        setFormData({ nombre: "", apellido: "", asunto: "", mensaje: "" })
      } else {
        const errorData = await response.text()
        alert(`Error al enviar: ${errorData || "El servidor no pudo procesar el mensaje."}`)
      }
    } catch (error) {
      console.error("Error de conexión:", error)
      alert("No se pudo establecer conexión con el servidor. Por favor, inténtalo de nuevo más tarde.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-mono text-sm mb-4">03. ¿Y ahora qué?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contactame
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estoy buscando nuevas oportunidades laborales. Pongámonos en contacto ya sea para una pregunta, una propuesta de 
            proyecto o simplemente para saludar. ¡Charlemos!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                Nombre
              </label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="bg-secondary border-border focus:border-primary focus:ring-primary"
                disabled={isSending}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="apellido" className="text-sm font-medium text-foreground">
                Apellido
              </label>
              <Input
                id="apellido"
                name="apellido"
                type="text"
                placeholder="Tu apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="bg-secondary border-border focus:border-primary focus:ring-primary"
                disabled={isSending}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="asunto" className="text-sm font-medium text-foreground">
              Asunto
            </label>
            <Input
              id="asunto"
              name="asunto"
              type="text"
              placeholder="Asunto del mensaje"
              value={formData.asunto}
              onChange={handleChange}
              required
              className="bg-secondary border-border focus:border-primary focus:ring-primary"
              disabled={isSending}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
              Mensaje
            </label>
            <Textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={6}
              className="bg-secondary border-border focus:border-primary focus:ring-primary resize-none"
              disabled={isSending}
            />
          </div>
          
          <Button 
            type="submit"
            size="lg" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSending}
          >
            {isSending ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}