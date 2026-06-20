import { useEffect, useState } from 'react'
import { getAsteroids } from '../services/nasa'
import AsteroidCard from '../components/AsteroidCard'

function Asteroids() {
  const [asteroids, setAsteroids] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAsteroids().then(data => {
      console.log('Asteroides recibidos:', data)
      setAsteroids(data)
      setLoading(false)
    })
  }, [])

  const dangerous = asteroids.filter(a => a.is_potentially_hazardous_asteroid)

  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-1">☄️ Asteroides Cercanos</h2>
        <p className="text-gray-400">Objetos que pasan cerca de la Tierra hoy</p>
      </div>

      {!loading && (
        <div className="flex gap-4 mb-6">
          <div className="bg-[#12122a] border border-[#2a2a4a] rounded-xl px-5 py-3">
            <p className="text-gray-500 text-xs mb-1">Total detectados</p>
            <p className="text-2xl font-bold text-purple-400">{asteroids.length}</p>
          </div>
          <div className="bg-[#12122a] border border-red-500/30 rounded-xl px-5 py-3">
            <p className="text-gray-500 text-xs mb-1">Potencialmente peligrosos</p>
            <p className="text-2xl font-bold text-red-400">{dangerous.length}</p>
          </div>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-[#12122a] rounded-xl p-5 border border-[#2a2a4a] space-y-3">
              <div className="h-4 w-3/4 bg-[#2a2a4a] rounded animate-pulse"></div>
              <div className="h-3 w-full bg-[#2a2a4a] rounded animate-pulse"></div>
              <div className="h-3 w-full bg-[#2a2a4a] rounded animate-pulse"></div>
              <div className="h-3 w-2/3 bg-[#2a2a4a] rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {asteroids.map(asteroid => (
            <AsteroidCard key={asteroid.id} asteroid={asteroid} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Asteroids