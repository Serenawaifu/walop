import { getProducts } from '../../lib/data'
import Link from 'next/link'

export default async function Marketplace() {
  const products = await getProducts()
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Marketplace</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-3">
              <h3 className="font-bold">{product.title}</h3>
              <p className="text-xs text-gray-400">{product.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="font-bold text-pink-400">${(product.price / 100).toFixed(2)}</span>
                <Link href={`/marketplace/checkout/${product.id}`} className="bg-pink-600 px-3 py-1 rounded text-xs font-bold hover:bg-pink-700">Buy</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
