'use client'

import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const events = [
  {
    id: 1,
    title: 'Torneo Metropolitano 2024',
    date: '15 de Marzo, 2024',
    time: '9:00 AM',
    location: 'Estadio El Salitre',
    category: 'Torneo Principal',
    description: 'Inicio del torneo más importante de la temporada con la participación de los mejores equipos de Bogotá.'
  },
  {
    id: 2,
    title: 'Clínica de Pitcheo',
    date: '20 de Marzo, 2024',
    time: '2:00 PM',
    location: 'Campo de Entrenamiento Central',
    category: 'Entrenamiento',
    description: 'Sesión especializada de pitcheo con entrenadores profesionales para todas las categorías.'
  },
  {
    id: 3,
    title: 'Torneo Juvenil Sub-15',
    date: '1 de Abril, 2024',
    time: '10:00 AM',
    location: 'Complejo Deportivo Simón Bolívar',
    category: 'Torneo Juvenil',
    description: 'Competencia para jóvenes talentos menores de 15 años representando a sus clubes.'
  }
]

export const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Próximos Eventos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <article 
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaCalendar className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Más Información
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 