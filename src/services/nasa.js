const API_KEY = import.meta.env.VITE_NASA_API_KEY
const BASE_URL = 'https://api.nasa.gov'

export async function getAPOD() {
  const response = await fetch(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
  if (!response.ok) return null
  return await response.json()
}

export async function getMarsPhotos() {
  const response = await fetch(
    `https://images-api.nasa.gov/search?q=mars+curiosity+rover&media_type=image&page_size=12`
  )

  if (!response.ok) {
    console.error('Error Mars:', response.status)
    return []
  }

  const data = await response.json()
  const items = data.collection.items.slice(0, 12)

  return items.map(item => ({
    id: item.data[0].nasa_id,
    img_src: item.links[0].href,
    title: item.data[0].title,
    date: item.data[0].date_created?.split('T')[0] || '',
    camera: { full_name: item.data[0].center || 'NASA' }
  }))
}

export async function getAsteroids() {
  const today = new Date().toISOString().split('T')[0]
  const response = await fetch(
    `${BASE_URL}/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${API_KEY}`
  )
  if (!response.ok) return []
  const data = await response.json()
  const asteroids = Object.values(data.near_earth_objects).flat()
  return asteroids.slice(0, 9)
}