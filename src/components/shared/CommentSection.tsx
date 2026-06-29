'use client'

import { useState } from 'react'
import { FaUser, FaClock, FaReply, FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

interface Comentario {
  id: number
  usuario: string
  fecha: string
  contenido: string
  likes: number
  dislikes: number
  respuestas: Comentario[]
}

interface CommentSectionProps {
  seccion: string // Identificador de la sección (ej: 'galeria', 'evento-1', etc.)
  comentariosIniciales?: Comentario[]
}

export default function CommentSection({ seccion, comentariosIniciales = [] }: CommentSectionProps) {
  const [comentarios, setComentarios] = useState<Comentario[]>(comentariosIniciales)
  const [nuevoComentario, setNuevoComentario] = useState('')
  const [respondiendo, setRespondiendo] = useState<number | null>(null)
  const [respuesta, setRespuesta] = useState('')

  const agregarComentario = () => {
    if (!nuevoComentario.trim()) return

    const comentario: Comentario = {
      id: Date.now(),
      usuario: 'Usuario Anónimo', // Aquí se podría integrar con un sistema de autenticación
      fecha: new Date().toLocaleDateString('es-CO'),
      contenido: nuevoComentario,
      likes: 0,
      dislikes: 0,
      respuestas: []
    }

    setComentarios([comentario, ...comentarios])
    setNuevoComentario('')
  }

  const agregarRespuesta = (comentarioId: number) => {
    if (!respuesta.trim()) return

    const nuevaRespuesta: Comentario = {
      id: Date.now(),
      usuario: 'Usuario Anónimo',
      fecha: new Date().toLocaleDateString('es-CO'),
      contenido: respuesta,
      likes: 0,
      dislikes: 0,
      respuestas: []
    }

    const nuevosComentarios = comentarios.map(comentario => {
      if (comentario.id === comentarioId) {
        return {
          ...comentario,
          respuestas: [...comentario.respuestas, nuevaRespuesta]
        }
      }
      return comentario
    })

    setComentarios(nuevosComentarios)
    setRespuesta('')
    setRespondiendo(null)
  }

  const actualizarVotos = (comentarioId: number, tipo: 'like' | 'dislike') => {
    setComentarios(comentarios.map(comentario => {
      if (comentario.id === comentarioId) {
        return {
          ...comentario,
          likes: tipo === 'like' ? comentario.likes + 1 : comentario.likes,
          dislikes: tipo === 'dislike' ? comentario.dislikes + 1 : comentario.dislikes
        }
      }
      return comentario
    }))
  }

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Comentarios</h2>
      
      {/* Formulario de nuevo comentario */}
      <div className="mb-8">
        <textarea
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Escribe tu comentario..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          onClick={agregarComentario}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Publicar Comentario
        </button>
      </div>

      {/* Lista de comentarios */}
      <div className="space-y-6">
        {comentarios.map(comentario => (
          <div key={comentario.id} className="bg-white rounded-lg shadow-md p-4">
            {/* Encabezado del comentario */}
            <div className="flex items-center mb-2">
              <FaUser className="text-gray-500 mr-2" />
              <span className="font-medium mr-2">{comentario.usuario}</span>
              <FaClock className="text-gray-500 mr-2" />
              <span className="text-gray-500 text-sm">{comentario.fecha}</span>
            </div>

            {/* Contenido del comentario */}
            <p className="text-gray-700 mb-3">{comentario.contenido}</p>

            {/* Acciones del comentario */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => actualizarVotos(comentario.id, 'like')}
                className="flex items-center text-gray-500 hover:text-blue-600"
              >
                <FaThumbsUp className="mr-1" />
                <span>{comentario.likes}</span>
              </button>
              <button
                onClick={() => actualizarVotos(comentario.id, 'dislike')}
                className="flex items-center text-gray-500 hover:text-red-600"
              >
                <FaThumbsDown className="mr-1" />
                <span>{comentario.dislikes}</span>
              </button>
              <button
                onClick={() => setRespondiendo(respondiendo === comentario.id ? null : comentario.id)}
                className="flex items-center text-gray-500 hover:text-blue-600"
              >
                <FaReply className="mr-1" />
                <span>Responder</span>
              </button>
            </div>

            {/* Formulario de respuesta */}
            {respondiendo === comentario.id && (
              <div className="mt-4 ml-8">
                <textarea
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  placeholder="Escribe tu respuesta..."
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => agregarRespuesta(comentario.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Responder
                  </button>
                  <button
                    onClick={() => {
                      setRespondiendo(null)
                      setRespuesta('')
                    }}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {/* Respuestas */}
            {comentario.respuestas.length > 0 && (
              <div className="mt-4 ml-8 space-y-4">
                {comentario.respuestas.map(respuesta => (
                  <div key={respuesta.id} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <FaUser className="text-gray-500 mr-2" />
                      <span className="font-medium mr-2">{respuesta.usuario}</span>
                      <FaClock className="text-gray-500 mr-2" />
                      <span className="text-gray-500 text-sm">{respuesta.fecha}</span>
                    </div>
                    <p className="text-gray-700">{respuesta.contenido}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <button
                        onClick={() => actualizarVotos(respuesta.id, 'like')}
                        className="flex items-center text-gray-500 hover:text-blue-600"
                      >
                        <FaThumbsUp className="mr-1" />
                        <span>{respuesta.likes}</span>
                      </button>
                      <button
                        onClick={() => actualizarVotos(respuesta.id, 'dislike')}
                        className="flex items-center text-gray-500 hover:text-red-600"
                      >
                        <FaThumbsDown className="mr-1" />
                        <span>{respuesta.dislikes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
} 