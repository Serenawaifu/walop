import { getAnimes } from '../../lib/data'
import Link from 'next/link'

export default async function Catalog() {
  const animes = await getAnimes()
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Anime Catalog</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {animes.map(anime => (
          <Link key={anime.id} href={`/anime/${anime.id}`}>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={anime.posterUrl} alt={anime.title} className="w-full h-48 object-cover" />
              <div className="p-3">
                <h3 className="font-bold">{anime.title}</h3>
                <p className="text-xs text-gray-400">{anime.genres.join(', ')}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
