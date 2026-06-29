import Image from 'next/image'

const directivos = [
  {
    nombre: 'Juan Pérez',
    cargo: 'Presidente',
    imagen: '/images/directivos/presidente.jpg',
    descripcion: 'Líder de la Liga de Béisbol de Bogotá desde 2020.'
  },
  {
    nombre: 'María Rodríguez',
    cargo: 'Directora Técnica',
    imagen: '/images/directivos/directora-tecnica.jpg',
    descripcion: 'Responsable del desarrollo técnico y formativo.'
  },
  {
    nombre: 'Carlos González',
    cargo: 'Director Deportivo',
    imagen: '/images/directivos/director-deportivo.jpg',
    descripcion: 'Coordinador de torneos y competencias.'
  }
]

const departamentos = [
  {
    nombre: 'Dirección Técnica',
    responsabilidades: [
      'Desarrollo de programas de formación',
      'Capacitación de entrenadores',
      'Evaluación de talentos'
    ]
  },
  {
    nombre: 'Dirección Deportiva',
    responsabilidades: [
      'Organización de torneos',
      'Coordinación de competencias',
      'Gestión de selecciones'
    ]
  },
  {
    nombre: 'Administración',
    responsabilidades: [
      'Gestión financiera',
      'Recursos humanos',
      'Logística y operaciones'
    ]
  }
]

export default function Organigrama() {
  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 mb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Estructura Organizacional
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce al equipo que hace posible el desarrollo del béisbol en Bogotá
          </p>
        </div>
      </section>

      {/* Directivos */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Junta Directiva
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directivos.map((directivo, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={directivo.imagen}
                  alt={directivo.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {directivo.nombre}
              </h3>
              <p className="text-blue-600 font-medium mb-2">{directivo.cargo}</p>
              <p className="text-gray-600">{directivo.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Departamentos */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Departamentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departamentos.map((depto, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {depto.nombre}
                </h3>
                <ul className="space-y-2">
                  {depto.responsabilidades.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organigrama Visual */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Estructura Jerárquica
        </h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center space-y-8">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Asamblea General
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="bg-blue-500 text-white px-6 py-3 rounded-lg">
              Junta Directiva
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="bg-blue-400 text-white px-6 py-3 rounded-lg">
              Presidente
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {departamentos.map((depto, index) => (
                <div
                  key={index}
                  className="bg-blue-300 text-white px-4 py-2 rounded-lg text-center"
                >
                  {depto.nombre}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 