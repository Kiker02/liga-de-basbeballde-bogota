export function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'Gran Final del Torneo Metropolitano',
      date: '10 de Marzo, 2024',
      image: '/images/news/final-torneo.jpg',
      excerpt: 'Emocionante final del torneo con la participación de los mejores equipos de la ciudad.'
    },
    {
      id: 2,
      title: 'Nuevos Talentos en la Liga',
      date: '5 de Marzo, 2024',
      image: '/images/news/talentos.jpg',
      excerpt: 'Descubre a las nuevas promesas del béisbol bogotano que están destacando en la temporada.'
    },
    {
      id: 3,
      title: 'Clínica de Pitcheo Internacional',
      date: '1 de Marzo, 2024',
      image: '/images/news/clinica.jpg',
      excerpt: 'Entrenadores internacionales compartirán sus conocimientos en nuestra próxima clínica.'
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Últimas Noticias
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Mantente al día con las novedades de la liga
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.excerpt}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Ver todas las noticias
          </button>
        </div>
      </div>
    </div>
  )
} 