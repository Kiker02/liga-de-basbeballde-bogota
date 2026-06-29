import Image from 'next/image'
import { FaTrophy, FaUsers, FaBaseballBall, FaHistory } from 'react-icons/fa'

export default function QuienesSomos() {
  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative h-[400px] mb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/historia-beisbol.jpg"
            alt="Historia del béisbol en Bogotá"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative container mx-auto h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Nuestra Historia</h1>
            <p className="text-xl">
              Más de 50 años formando campeones y promoviendo el béisbol en Bogotá
            </p>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="container mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Una Trayectoria de Excelencia
            </h2>
            <div className="prose prose-lg">
              <p>
                La Liga de Béisbol de Bogotá fue fundada en 1970 con el objetivo
                de promover y desarrollar el béisbol en la capital colombiana.
                Desde entonces, hemos sido testigos del crecimiento y evolución
                de este deporte en nuestra ciudad.
              </p>
              <p>
                A lo largo de los años, hemos formado a cientos de deportistas,
                organizado torneos de alto nivel y contribuido al desarrollo
                del béisbol nacional e internacional.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <FaTrophy className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Logros</h3>
              <p>Más de 100 torneos organizados y múltiples títulos nacionales</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <FaUsers className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
              <p>Miles de deportistas formados en nuestras escuelas</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <FaBaseballBall className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Desarrollo</h3>
              <p>Programas de formación en todas las categorías</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <FaHistory className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
              <p>Más de 50 años de experiencia en el deporte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-gray-50 py-16 mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600">
                Promover el desarrollo integral del béisbol en Bogotá, formando
                deportistas de alto rendimiento y fomentando valores como el
                trabajo en equipo, la disciplina y el respeto.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Visión
              </h2>
              <p className="text-lg text-gray-600">
                Ser reconocidos como la principal organización de béisbol en
                Colombia, destacando por la excelencia en la formación de
                deportistas y la organización de eventos deportivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Excelencia',
              description: 'Buscamos la máxima calidad en todo lo que hacemos'
            },
            {
              title: 'Integridad',
              description: 'Actuamos con honestidad y transparencia'
            },
            {
              title: 'Compromiso',
              description: 'Dedicados al desarrollo del béisbol y nuestros deportistas'
            }
          ].map((valor, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {valor.title}
              </h3>
              <p className="text-gray-600">
                {valor.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 