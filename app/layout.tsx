import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsappButton } from "@/components/whatsapp-button"
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["linux"] });

export const metadata: Metadata = {
  title: 'Octavio Valenzuela | Desarrollador FullStack',
  description: 'Portfolio de Octavio Valenzuela - Desarrollador FullStack con experiencia en React, PHP, Laravel, Java y Spring Boot',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsappButton />
        <Analytics />
      </body>
    </html>
  )
}
