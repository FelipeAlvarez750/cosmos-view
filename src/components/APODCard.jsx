function APODCard({ data }) {
  if (!data) return (
    <div className="bg-[#12122a] rounded-2xl p-6 border border-[#2a2a4a] space-y-4">
      <div className="h-7 w-3/5 bg-[#2a2a4a] rounded-lg animate-pulse"></div>
      <div className="h-80 w-full bg-[#2a2a4a] rounded-xl animate-pulse"></div>
      <div className="h-4 w-full bg-[#2a2a4a] rounded animate-pulse"></div>
      <div className="h-4 w-full bg-[#2a2a4a] rounded animate-pulse"></div>
      <div className="h-4 w-4/5 bg-[#2a2a4a] rounded animate-pulse"></div>
    </div>
  )

  return (
    <div className="bg-[#12122a] rounded-2xl p-6 border border-[#2a2a4a] animate-[fadeInUp_0.7s_ease_forwards]">
      <h2 className="text-2xl font-semibold text-purple-400 mb-1">{data.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      <img src={data.url} alt={data.title} className="w-full rounded-xl mb-4 object-cover" />
      <p className="text-gray-300 leading-relaxed text-sm">{data.explanation}</p>
    </div>
  )
}

export default APODCard