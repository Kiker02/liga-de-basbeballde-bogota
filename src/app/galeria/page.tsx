'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import CommentSection from '@/components/shared/CommentSection'

const fotos = [
  {
    id: 1,
    titulo: 'Final Torneo 2023',
    descripcion: 'Momento de la victoria del equipo campeón',
    fecha: '2023-12-15',
    categoria: 'Torneos',
    url: '/images/galeria/final-2023.jpg'
  },
  {
    id: 2,
    titulo: 'Entrenamiento Juvenil',
    descripcion: 'Sesión de práctica de bateo',
    fecha: '2024-01-20',
    categoria: 'Entrenamientos',
    url: '/images/galeria/entrenamiento-juvenil.jpg'
  },
  {
    id: 3,
    titulo: 'Clínica de Pitcheo',
    descripcion: 'Taller especializado con entrenadores profesionales',
    fecha: '2024-02-05',
    categoria: 'Clínicas',
    url: '/images/galeria/clinica-pitcheo.jpg'
  }
]

type Foto = (typeof fotos)[number]

export default function Galeria() {
  const [fotoSeleccionada, setFotoSeleccionada] = useState<Foto | null>(null)
  const [filtroCategoria, setFiltroCategoria] = useState('')
  const [busqueda, setBusqueda] = useState('')

  const fotosFiltradas = fotos.filter(foto => {
    const coincideCategoria = !filtroCategoria || foto.categoria === filtroCategoria
    const coincideBusqueda = foto.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                            foto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 mb-8">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Galería de Fotos
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Revive los mejores momentos de nuestra liga
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="container mx-auto px-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar fotos..."
                  className="w-full px-4 py-2 border rounded-md pl-10"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <select
              className="px-4 py-2 border rounded-md"
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              <option value="Torneos">Torneos</option>
              <option value="Entrenamientos">Entrenamientos</option>
              <option value="Clínicas">Clínicas</option>
            </select>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotosFiltradas.map((foto) => (
            <article
              key={foto.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setFotoSeleccionada(foto)}
            >
              <div className="relative h-64">
                <Image
                  src={foto.url}
                  alt={foto.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {foto.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {foto.descripcion}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600">
                    {foto.categoria}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(foto.fecha).toLocaleDateString('es-CO')}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal de Foto */}
      {fotoSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setFotoSeleccionada(null)}
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <div className="relative h-[500px]">
              <Image
                src={fotoSeleccionada.url}
                alt={fotoSeleccionada.titulo}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {fotoSeleccionada.titulo}
              </h3>
              <p className="text-gray-600 mb-4">
                {fotoSeleccionada.descripcion}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{fotoSeleccionada.categoria}</span>
                <span>
                  {new Date(fotoSeleccionada.fecha).toLocaleDateString('es-CO')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sección de Comentarios */}
      <CommentSection seccion="galeria" />
    </main>
  )
} 
