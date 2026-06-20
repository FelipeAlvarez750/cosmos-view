function AsteroidCard({ asteroid }) {
  if (!asteroid || !asteroid.close_approach_data?.length) return null

  const isDangerous = asteroid.is_potentially_hazardous_asteroid
  const diameter = asteroid.estimated_diameter.meters
  const avgDiameter = ((diameter.estimated_diameter_min + diameter.estimated_diameter_max) / 2).toFixed(0)
  const speed = parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(0)
  const distance = parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(0)

  return (
    <div className={`bg-[#12122a] rounded-xl p-5 border transition-all duration-300 hover:scale-105 ${isDangerous ? 'border-red-500/50 hover:border-red-400' : 'border-[#2a2a4a] hover:border-purple-500'}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold text-sm leading-tight">{asteroid.name.replace(/[()]/g, '')}</h3>
        <span className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ml-2 ${isDangerous ? 'bg-red-500/20 text-red-400 animate-pulse' : 'bg-green-500/20 text-green-400'}`}>
          {isDangerous ? '⚠️ Peligroso' : '✅ Seguro'}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-gray-500">Diámetro</span>
          <span className="text-gray-300">{avgDiameter} m</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-500">Velocidad</span>
          <span className="text-gray-300">{parseInt(speed).toLocaleString()} km/h</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-500">Distancia</span>
          <span className="text-gray-300">{parseInt(distance).toLocaleString()} km</span>
        </div>
      </div>
    </div>
  )
}

export default AsteroidCard