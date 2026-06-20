import { useEffect, useState } from 'react'
import { getAPOD } from '../services/nasa'
import APODCard from '../components/APODCard'

function Home() {
  const [apod, setApod] = useState(null)

  useEffect(() => {
    getAPOD().then(data => setApod(data))
  }, [])

  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-1">📸 Foto Astronómica del Día</h2>
        <p className="text-gray-400">Cada día NASA publica una imagen distinta del universo</p>
      </div>
      <APODCard data={apod} />
    </main>
  )
}

export default Home