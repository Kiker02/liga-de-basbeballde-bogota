'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

const enlaces = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Quiénes Somos', ruta: '/quienes-somos' },
  { texto: 'Organigrama', ruta: '/organigrama' },
  { texto: 'Calendario', ruta: '/calendario' },
  { texto: 'Galería', ruta: '/galeria' },
  { texto: 'Estadísticas', ruta: '/estadisticas' }
]

export default function Navigation() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="bg-blue-900 text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Liga de Béisbol de Bogotá"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Enlaces para pantallas medianas y grandes */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {enlaces.map((enlace) => (
                <Link
                  key={enlace.ruta}
                  href={enlace.ruta}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
                >
                  {enlace.texto}
                </Link>
              ))}
            </div>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800 focus:outline-none transition-colors"
            >
              {menuAbierto ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="md:hidden absolute w-full bg-blue-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {enlaces.map((enlace) => (
              <Link
                key={enlace.ruta}
                href={enlace.ruta}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors"
                onClick={() => setMenuAbierto(false)}
              >
                {enlace.texto}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
} 