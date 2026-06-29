'use client'

import { useState } from 'react'
import { FaSort, FaSortUp, FaSortDown, FaSearch } from 'react-icons/fa'
import CommentSection from '@/components/shared/CommentSection'

type EstadisticasJugador = {
  juegos: number
  promedioBateo: number
  carreras: number
  hits: number
  homeRuns: number
  era: number
}

type CampoOrden =
  | ''
  | 'nombre'
  | 'equipo'
  | 'posicion'
  | 'edad'
  | keyof EstadisticasJugador

const jugadores = [
  {
    id: 1,
    nombre: 'Carlos Rodríguez',
    equipo: 'Águilas de Bogotá',
    posicion: 'Pitcher',
    edad: 23,
    estadisticas: {
      juegos: 15,
      promedioBateo: 0.325,
      carreras: 28,
      hits: 45,
      homeRuns: 8,
      era: 2.45
    }
  },
  {
    id: 2,
    nombre: 'Juan Martínez',
    equipo: 'Leones DC',
    posicion: 'Catcher',
    edad: 25,
    estadisticas: {
      juegos: 18,
      promedioBateo: 0.298,
      carreras: 32,
      hits: 52,
      homeRuns: 12,
      era: 0
    }
  },
  {
    id: 3,
    nombre: 'Miguel Torres',
    equipo: 'Tigres del Norte',
    posicion: 'Outfield',
    edad: 21,
    estadisticas: {
      juegos: 20,
      promedioBateo: 0.315,
      carreras: 35,
      hits: 48,
      homeRuns: 10,
      era: 0
    }
  }
]

export default function Estadisticas() {
  const [ordenarPor, setOrdenarPor] = useState<CampoOrden>('')
  const [ordenAscendente, setOrdenAscendente] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [filtroEquipo, setFiltroEquipo] = useState('')
  const [filtroPosicion, setFiltroPosicion] = useState('')

  const equipos = Array.from(new Set(jugadores.map(j => j.equipo)))
  const posiciones = Array.from(new Set(jugadores.map(j => j.posicion)))

  const jugadoresFiltrados = jugadores
    .filter(jugador => {
      const coincideBusqueda = jugador.nombre.toLowerCase().includes(busqueda.toLowerCase())
      const coincideEquipo = !filtroEquipo || jugador.equipo === filtroEquipo
      const coincidePosicion = !filtroPosicion || jugador.posicion === filtroPosicion
      return coincideBusqueda && coincideEquipo && coincidePosicion
    })
    .sort((a, b) => {
      if (!ordenarPor) return 0
      
      let valorA: string | number
      let valorB: string | number
      if (ordenarPor === 'nombre' || ordenarPor === 'equipo' || ordenarPor === 'posicion') {
        valorA = a[ordenarPor].toLowerCase()
        valorB = b[ordenarPor].toLowerCase()
      } else if (ordenarPor === 'edad') {
        valorA = a.edad
        valorB = b.edad
      } else {
        valorA = a.estadisticas[ordenarPor]
        valorB = b.estadisticas[ordenarPor]
      }

      if (ordenAscendente) {
        return valorA > valorB ? 1 : -1
      } else {
        return valorA < valorB ? 1 : -1
      }
    })

  const handleOrdenar = (campo: CampoOrden) => {
    if (ordenarPor === campo) {
      setOrdenAscendente(!ordenAscendente)
    } else {
      setOrdenarPor(campo)
      setOrdenAscendente(true)
    }
  }

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 mb-8">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Estadísticas de Jugadores
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explora el rendimiento de nuestros jugadores
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="container mx-auto px-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar jugador..."
                className="w-full px-4 py-2 border rounded-md pl-10"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <select
              className="px-4 py-2 border rounded-md"
              value={filtroEquipo}
              onChange={(e) => setFiltroEquipo(e.target.value)}
            >
              <option value="">Todos los equipos</option>
              {equipos.map(equipo => (
                <option key={equipo} value={equipo}>{equipo}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border rounded-md"
              value={filtroPosicion}
              onChange={(e) => setFiltroPosicion(e.target.value)}
            >
              <option value="">Todas las posiciones</option>
              {posiciones.map(posicion => (
                <option key={posicion} value={posicion}>{posicion}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Tabla de Estadísticas */}
      <section className="container mx-auto px-4 overflow-x-auto">
        <div className="bg-white rounded-lg shadow-lg">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('nombre')}>
                  <div className="flex items-center">
                    Nombre
                    {ordenarPor === 'nombre' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('equipo')}>
                  <div className="flex items-center">
                    Equipo
                    {ordenarPor === 'equipo' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('posicion')}>
                  <div className="flex items-center">
                    Posición
                    {ordenarPor === 'posicion' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('edad')}>
                  <div className="flex items-center">
                    Edad
                    {ordenarPor === 'edad' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('juegos')}>
                  <div className="flex items-center">
                    Juegos
                    {ordenarPor === 'juegos' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('promedioBateo')}>
                  <div className="flex items-center">
                    AVG
                    {ordenarPor === 'promedioBateo' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('carreras')}>
                  <div className="flex items-center">
                    R
                    {ordenarPor === 'carreras' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('hits')}>
                  <div className="flex items-center">
                    H
                    {ordenarPor === 'hits' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('homeRuns')}>
                  <div className="flex items-center">
                    HR
                    {ordenarPor === 'homeRuns' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleOrdenar('era')}>
                  <div className="flex items-center">
                    ERA
                    {ordenarPor === 'era' ? (
                      ordenAscendente ? <FaSortUp className="ml-1" /> : <FaSortDown className="ml-1" />
                    ) : <FaSort className="ml-1" />}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jugadoresFiltrados.map((jugador) => (
                <tr key={jugador.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{jugador.nombre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{jugador.equipo}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{jugador.posicion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{jugador.edad}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{jugador.estadisticas.juegos}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{jugador.estadisticas.promedioBateo.toFixed(3)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{jugador.estadisticas.carreras}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{jugador.estadisticas.hits}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{jugador.estadisticas.homeRuns}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{jugador.estadisticas.era.toFixed(2)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sección de Comentarios */}
      <CommentSection seccion="estadisticas" />
    </main>
  )
} 
