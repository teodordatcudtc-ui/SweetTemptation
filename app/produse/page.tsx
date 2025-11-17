'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import ProductCard from '@/components/ProductCard'
import Button from '@/components/Button'

const categories = [
  { id: 'all', name: 'Toate Produsele' },
  { id: 'torturi', name: 'Torturi' },
  { id: 'prajituri', name: 'Prăjituri' },
  { id: 'macarons', name: 'Macarons' },
  { id: 'patiserie', name: 'Patiserie' },
  { id: 'personalizate', name: 'Personalizate' },
]

const products = [
  {
    id: 1,
    category: 'torturi',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
    title: 'Torturi de Nuntă',
    description: 'Torturi elegante și sofisticate, personalizate pentru momentul tău special. Fiecare tort este o operă de artă.',
  },
  {
    id: 2,
    category: 'torturi',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600',
    title: 'Torturi de Aniversare',
    description: 'Torturi festive și colorate pentru a celebra momentele speciale din viața ta.',
  },
  {
    id: 3,
    category: 'prajituri',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600',
    title: 'Prăjituri Artizanale',
    description: 'Selecție variată de prăjituri create manual cu ingrediente premium și tehnici tradiționale.',
  },
  {
    id: 4,
    category: 'prajituri',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600',
    title: 'Prăjituri Clasice',
    description: 'Prăjituri tradiționale cu gust autentic, preparate după rețete de familie.',
  },
  {
    id: 5,
    category: 'macarons',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600',
    title: 'Macarons Rafinate',
    description: 'Macarons colorate și delicate, perfecte pentru orice ocazie. Disponibile în multiple arome.',
  },
  {
    id: 6,
    category: 'macarons',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600',
    title: 'Macarons Personalizate',
    description: 'Macarons create special pentru evenimentul tău, cu arome și culori personalizate.',
  },
  {
    id: 7,
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600',
    title: 'Croissante Artizanale',
    description: 'Croissante proaspete, preparate zilnic cu unt de cea mai bună calitate.',
  },
  {
    id: 8,
    category: 'patiserie',
    image: 'https://images.unsplash.com/photo-1587241321921-91a834d6d191?w=600',
    title: 'Produse de Patiserie',
    description: 'Selecție variată de produse de patiserie proaspete, zilnic preparate cu pasiune.',
  },
  {
    id: 9,
    category: 'personalizate',
    image: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=600',
    title: 'Deserturi Personalizate',
    description: 'Creăm deserturi unice conform preferințelor tale, transformând ideile tale în realitate.',
  },
  {
    id: 10,
    category: 'personalizate',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600',
    title: 'Torturi Tematice',
    description: 'Torturi create special pentru evenimente tematice, cu design unic și personalizat.',
  },
  {
    id: 11,
    category: 'torturi',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600',
    title: 'Torturi de Botez',
    description: 'Torturi elegante pentru botez, cu design delicat și gust rafinat.',
  },
  {
    id: 12,
    category: 'prajituri',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600',
    title: 'Prăjituri Mini',
    description: 'Prăjituri mini perfecte pentru evenimente, disponibile în multiple variante.',
  },
]

export default function Produse() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cream via-cream/95 to-cream pt-8 md:pt-24 pb-0 md:pb-0">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-1 md:mb-6 animate-slide-up">
            Produsele Noastre
          </h1>
          <p className="text-lg md:text-2xl text-dark/70 max-w-3xl mx-auto mb-0 md:mb-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Descoperă colecția noastră de deserturi rafinate
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <Section className="bg-cream -mt-4 md:mt-0 pt-0 md:pt-8 pb-0 md:pb-4">
        {/* Carusel pentru mobile, flex-wrap pentru desktop */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-3" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-dark text-cream shadow-lg scale-105'
                      : 'bg-cream text-dark border-2 border-dark/20 hover:border-dark/40 hover:scale-105'
                  }`}
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop filters */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-dark text-cream shadow-lg scale-105'
                  : 'bg-cream text-dark border-2 border-dark/20 hover:border-dark/40 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Section>

      {/* Products Gallery */}
      <Section className="bg-cream -mt-2 md:mt-0 pt-0 md:pt-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                category={categories.find((c) => c.id === product.category)?.name}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-dark/70">Nu există produse în această categorie.</p>
          </div>
        )}
      </Section>

      {/* Glassmorphism Gallery Section */}
      <Section className="bg-gradient-to-br from-dark via-dark/95 to-dark text-cream">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Galerie Premium
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Fiecare desert este o operă de artă, creată cu pasiune și atenție la detalii
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl glass-effect p-6 hover:scale-105 transition-all duration-500"
            >
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-dark mb-2">{product.title}</h3>
              <p className="text-dark/70 text-sm line-clamp-2">{product.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-cream">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
            Găsești Ceva Special?
          </h2>
          <p className="text-lg text-dark/70 mb-10">
            Contactează-ne pentru a discuta despre comenzi personalizate sau pentru a comanda 
            produsele tale preferate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Contactează-ne
            </Button>
            <Button href="/comenzi-personalizate" variant="outline">
              Comandă Personalizată
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

