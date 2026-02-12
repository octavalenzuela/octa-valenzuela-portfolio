"use client"

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WhatsappButton() {
    const handleWhatsappClick = () => {
        const phoneNumber = "5491159305553" 
        const message = "¡Hola Octa! Vi tu portfolio y me gustaria que charlemos." 
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank', "noopener,noreferrer")
    }

    return (
        <Button 
            onClick={handleWhatsappClick}
            className='fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center p-0'
            aria-label="Contactar por WhatsApp"
            >
            <MessageCircle className="h-8 w-8" />
        </Button>
    )
}