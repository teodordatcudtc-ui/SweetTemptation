import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Sweet Temptations | Cofetărie Artizanală București',
  description: 'Contactează Sweet Temptations - cofetărie artizanală din București. Telefon: 0724 292 139. Adresă: Șos. Pantelimon 72-74, București.',
  openGraph: {
    title: 'Contact - Sweet Temptations',
    description: 'Contactează Sweet Temptations - cofetărie artizanală din București.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

