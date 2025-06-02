import { getAnimeById } from '../../../lib/data'
import ShakaPlayer from '../../../components/ShakaPlayer'

export default async function AnimePage({ params }: { params: { id: string } }) {
  const anime = await getAnimeById(params.id)
  if (!anime) return <div>Not found</div>
  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="flex gap-6">
        <img src={anime.posterUrl} alt={anime.title} className="w-48 h-72 object-cover rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold">{anime.title}</h1>
          <p className="mt-2">{anime.description}</p>
          <div className="mt-4">
            <span className="bg-pink-700 px-2 py-1 rounded text-xs">{anime.type}</span>
            <span className="ml-2 text-gray-400">{anime.genres.join(', ')}</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-2">Episodes</h2>
        {anime.episodes.map(ep => (
          <div key={ep.id} className="mb-6">
            <h3 className="font-semibold mb-1">{ep.title}</h3>
            <ShakaPlayer src={ep.videoUrl} />
          </div>
        ))}
      </div>
    </div>
  )
}
