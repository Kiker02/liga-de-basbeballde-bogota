import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="mb-2">Email: info@ligabeisbolbogota.com</p>
            <p>Teléfono: (601) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
            <p className="mb-2">Bogotá, Colombia</p>
            <p>Dirección: [Dirección de la Liga]</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© {new Date().getFullYear()} Liga de Béisbol de Bogotá. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 