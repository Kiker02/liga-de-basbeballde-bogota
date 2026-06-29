import { FaBaseballBall, FaTrophy, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaBaseballBall className="w-12 h-12" />,
    title: 'Excelencia Deportiva',
    description: 'Formamos atletas de alto rendimiento con valores y disciplina'
  },
  {
    icon: <FaTrophy className="w-12 h-12" />,
    title: 'Competencias',
    description: 'Organizamos torneos de primer nivel en diferentes categorías'
  },
  {
    icon: <FaUsers className="w-12 h-12" />,
    title: 'Comunidad',
    description: 'Somos una familia unida por la pasión del béisbol'
  }
];

export function WelcomeSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Bienvenidos a la Liga de Béisbol de Bogotá
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Somos la organización líder en el desarrollo del béisbol en Bogotá
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mx-auto">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Excelencia Deportiva
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Formamos atletas de alto rendimiento con valores y disciplina
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mx-auto">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Comunidad
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Creamos espacios para el desarrollo integral de nuestros deportistas
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mx-auto">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                Instalaciones
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Contamos con campos e infraestructura de primer nivel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 