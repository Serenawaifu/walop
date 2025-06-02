import Link from 'next/link'
import SakuraPetals from '../components/SakuraPetals'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 text-white relative">
      <SakuraPetals />
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Wulu" className="h-10" />
          <span className="text-3xl font-bold">Wulu</span>
        </div>
        <ThemeToggle />
      </header>
      <section className="text-center mt-16">
        <h1 className="text-5xl font-extrabold mb-4">Wulu</h1>
        <p className="text-xl mb-8">The ultimate anime, manga, and manhwa platform.</p>
        <div className="flex flex-col gap-4 items-center">
          <Link href="/catalog" className="px-6 py-3 bg-pink-600 rounded-lg font-bold hover:bg-pink-700">Browse Catalog</Link>
          <Link href="/marketplace" className="px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700">Marketplace</Link>
        </div>
      </section>
    </main>
  )
}
