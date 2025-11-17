import type { Metadata } from 'next'
import { Montserrat, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sweet Temptations - Cofetărie Artizanală București',
  description: 'Cofetărie artizanală premium în București. Prăjituri personalizate, torturi de nuntă, deserturi rafinate și produse de patiserie de cea mai bună calitate.',
  keywords: 'cofetărie București, prăjituri personalizate, torturi de nuntă, deserturi artizanale, patiserie București, Sweet Temptations',
  authors: [{ name: 'Sweet Temptations' }],
  openGraph: {
    title: 'Sweet Temptations - Cofetărie Artizanală București',
    description: 'Cofetărie artizanală premium în București. Prăjituri personalizate, torturi de nuntă, deserturi rafinate.',
    url: 'https://sweettemptations.ro',
    siteName: 'Sweet Temptations',
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweet Temptations - Cofetărie Artizanală',
    description: 'Cofetărie artizanală premium în București',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://sweettemptations.ro',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${montserrat.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Bakery',
              name: 'Sweet Temptations - Cofetărie Artizanală',
              image: 'https://sweettemptations.ro/og-image.jpg',
              '@id': 'https://sweettemptations.ro',
              url: 'https://sweettemptations.ro',
              telephone: '+40724292139',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Șos. Pantelimon 72-74',
                addressLocality: 'București',
                postalCode: '021634',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.444702100880384,
                longitude: 26.134671776563508,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              sameAs: [
                'https://www.instagram.com/sweettemptations.ro/',
                'https://www.facebook.com/sweettemptationsbyramona',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-cream text-dark antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

