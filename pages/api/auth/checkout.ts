import { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"
import prisma from "../../lib/prisma"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2022-11-15" })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end()
  const { productId, address } = req.body
  const product = await prisma.product.findUnique({ where: { id: productId } })
  if (!product) return res.status(404).json({ error: "Product not found" })
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price: product.stripePriceId, quantity: 1 }],
    mode: "payment
