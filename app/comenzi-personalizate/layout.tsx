import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comenzi Personalizate - Sweet Temptations | Cofetărie Artizanală',
  description: 'Comandă deserturi personalizate pentru evenimentul tău special. Torturi de nuntă, aniversare, botez și multe altele, create conform preferințelor tale.',
  openGraph: {
    title: 'Comenzi Personalizate - Sweet Temptations',
    description: 'Comandă deserturi personalizate pentru evenimentul tău special.',
  },
}

export default function ComenziPersonalizateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

