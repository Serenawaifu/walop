'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Checkout({ params }: { params: { id: string } }) {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleCheckout() {
    setLoading(true)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: params.id, address }),
    })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      setLoading(false)
      alert('Checkout failed')
    }
  }

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <label className="block mb-2 font-semibold">Shipping Address</label>
      <textarea className="w-full p-2 rounded bg-gray-800 text-white mb-4" rows={3} value={address} onChange={e => setAddress(e.target.value)} />
      <button onClick={handleCheckout} disabled={loading} className="bg-pink-600 px-6 py-2 rounded font-bold hover:bg-pink-700">
        {loading ? 'Processing...' : 'Pay with Stripe'}
      </button>
    </div>
  )
}
