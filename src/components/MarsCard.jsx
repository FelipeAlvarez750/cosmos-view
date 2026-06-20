function MarsCard({ photo }) {
  return (
    <div className="bg-[#12122a] rounded-xl border border-[#2a2a4a] overflow-hidden hover:border-purple-500 transition-all duration-300 hover:scale-105">
      <img
        src={photo.img_src}
        alt={photo.title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.style.display = 'none' }}
      />
      <div className="p-3">
        <p className="text-purple-400 text-sm font-medium line-clamp-2">{photo.title}</p>
        <p className="text-gray-500 text-xs mt-1">{photo.date} · {photo.camera.full_name}</p>
      </div>
    </div>
  )
}

export default MarsCard