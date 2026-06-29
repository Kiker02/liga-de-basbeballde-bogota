'use client'

import { FaCalendar, FaMapMarkerAlt, FaClock, FaFilter } from 'react-icons/fa'
import { useState } from 'react'
import CommentSection from '@/components/shared/CommentSection'

const eventos = [
  {
    id: 1,
    titulo: 'Torneo Metropolitano 2024',
    fecha: '2024-03-15',
    hora: '09:00',
    lugar: 'Estadio El Salitre',
    categoria: 'Torneo Principal',
    descripcion: 'Inicio del torneo más importante de la temporada.'
  },
  {
    id: 2,
    titulo: 'Clínica de Pitcheo',
    fecha: '2024-03-20',
    hora: '14:00',
    lugar: 'Campo de Entrenamiento Central',
    categoria: 'Entrenamiento',
    descripcion: 'Sesión especializada de pitcheo con entrenadores profesionales.'
  },
  {
    id: 3,
    titulo: 'Torneo Juvenil Sub-15',
    fecha: '2024-04-01',
    hora: '10:00',
    lugar: 'Complejo Deportivo Simón Bolívar',
    categoria: 'Torneo Juvenil',
    descripcion: 'Competencia para jóvenes talentos menores de 15 años.'
  }
]

export default function Calendario() {
  const [filtroCategoria, setFiltroCategoria] = useState('')
  const [filtroMes, setFiltroMes] = useState('2024-03')

  const eventosFiltrados = eventos.filter(evento => {
    const coincideCategoria = !filtroCategoria || evento.categoria.toLowerCase() === filtroCategoria
    const coincideMes = !filtroMes || evento.fecha.startsWith(filtroMes)
    return coincideCategoria && coincideMes
  })

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 mb-8">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calendario de Eventos
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Mantente al día con todos los eventos y actividades de la liga
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="container mx-auto px-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border rounded-md">
              <option value="">Todas las categorías</option>
              <option value="torneo">Torneos</option>
              <option value="entrenamiento">Entrenamientos</option>
              <option value="clinica">Clínicas</option>
            </select>
            <input
              type="month"
              className="px-4 py-2 border rounded-md"
              defaultValue="2024-03"
            />
          </div>
        </div>
      </section>

      {/* Lista de Eventos */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventosFiltrados.map((evento) => (
            <article
              key={evento.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {evento.categoria}
                  </span>
                  <span className="text-sm text-gray-500">
                    ID: {evento.id}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {evento.titulo}
                </h3>
                <p className="text-gray-600 mb-4">
                  {evento.descripcion}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaCalendar className="mr-2" />
                    <span>{new Date(evento.fecha).toLocaleDateString('es-CO', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{evento.hora} hrs</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{evento.lugar}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Ver Detalles
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sección de Comentarios */}
      <CommentSection seccion="calendario" />
    </main>
  )
} 