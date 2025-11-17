import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produse - Sweet Temptations | Cofetărie Artizanală București',
  description: 'Descoperă colecția noastră de deserturi rafinate: torturi de nuntă, prăjituri artizanale, macarons, patiserie și comenzi personalizate.',
  openGraph: {
    title: 'Produse - Sweet Temptations',
    description: 'Descoperă colecția noastră de deserturi rafinate: torturi, prăjituri, macarons și multe altele.',
  },
}

export default function ProduseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

