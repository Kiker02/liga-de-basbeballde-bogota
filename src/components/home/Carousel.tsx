'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    image: '/images/carousel/slide1.jpg',
    title: 'Liga de Béisbol de Bogotá',
    description: 'Formando campeones dentro y fuera del campo'
  },
  {
    image: '/images/carousel/slide2.jpg',
    title: 'Desarrollo Deportivo',
    description: 'Programas de entrenamiento para todas las edades'
  },
  {
    image: '/images/carousel/slide3.jpg',
    title: 'Torneos y Competencias',
    description: 'Participa en nuestros torneos y demuestra tu talento'
  }
]

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-center max-w-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
} 