import { useEffect, useState } from 'react'
import { getMarsPhotos } from '../services/nasa'
import MarsCard from '../components/MarsCard'

function Mars() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getMarsPhotos()
      .then(data => {
        if (data.length === 0) setError(true)
        setPhotos(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-1">🔴 Fotos de Marte</h2>
        <p className="text-gray-400">Últimas imágenes del rover Perseverance</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-[#12122a] rounded-xl border border-[#2a2a4a] overflow-hidden">
              <div className="h-48 bg-[#2a2a4a] animate-pulse"></div>
              <div className="p-3 space-y-2">
                <div className="h-3 w-3/4 bg-[#2a2a4a] rounded animate-pulse"></div>
                <div className="h-3 w-1/2 bg-[#2a2a4a] rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-4xl mb-4">🛸</p>
          <p>No se pudieron cargar las fotos. Intenta de nuevo más tarde.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map(photo => (
            <MarsCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Mars