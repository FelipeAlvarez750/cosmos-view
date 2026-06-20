import { useEffect, useState } from 'react'
import { getAPOD } from '../services/nasa'
import APODCard from '../components/APODCard'

function ProjectIntro() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-[#12122a] border border-[#2a2a4a] rounded-xl p-5 mb-6 text-sm leading-relaxed">
      <p className="text-gray-400">
        CosmosView extrae datos en tiempo real de las APIs públicas de la NASA y los presenta en un solo lugar.
        Explora la imagen astronómica que NASA publica cada día, navega por fotos tomadas en la superficie de Marte
        por el rover Curiosity, o revisa qué asteroides están pasando cerca de la Tierra en este momento.
        Todo gratuito, todo datos reales.
      </p>

      <button
        onClick={() => setOpen(!open)}
        className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-xs font-medium"
      >
        <span>{open ? 'Hide English version' : 'Read in English'}</span>
        <span className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-500 border-t border-[#2a2a4a] pt-4">
          CosmosView pulls live data from NASA's public APIs and presents it in one place.
          Browse the astronomy image NASA publishes each day, explore photos taken on the
          surface of Mars by the Curiosity rover, or check which asteroids are passing close
          to Earth right now — all free, all real data.
        </p>
      </div>
    </div>
  )
}

function Home() {
  const [apod, setApod] = useState(null)

  useEffect(() => {
    getAPOD().then(data => setApod(data))
  }, [])

  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-1">Foto Astronómica del Día</h2>
        <p className="text-gray-400">Cada día la NASA publica una imagen distinta del universo</p>
      </div>
      <ProjectIntro />
      <APODCard data={apod} />
    </main>
  )
}

export default Home