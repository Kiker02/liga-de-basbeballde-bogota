import "./globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Liga de Béisbol de Bogotá',
  description: 'Sitio oficial de la Liga de Béisbol de Bogotá',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
} 