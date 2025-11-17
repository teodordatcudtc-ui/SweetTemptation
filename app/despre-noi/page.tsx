import type { Metadata } from 'next'
import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Despre noi - Sweet Temptations | Cofetărie Artizanală București',
  description: 'Descoperă povestea Sweet Temptations - cofetărie artizanală premium din București. Pasiune, dedicare și ingrediente de cea mai bună calitate.',
  openGraph: {
    title: 'Despre noi - Sweet Temptations',
    description: 'Descoperă povestea Sweet Temptations - cofetărie artizanală premium din București.',
  },
}

export default function DespreNoi() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cream via-cream/95 to-cream pt-8 md:pt-24 pb-4 md:pb-0">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-3 md:mb-6 animate-slide-up">
            Despre Noi
          </h1>
          <p className="text-lg md:text-2xl text-dark/70 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Pasiune pentru perfecțiune în fiecare desert
          </p>
        </div>
      </section>

      {/* Story Section */}
      <Section className="bg-cream pt-0 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-3 md:mb-6">
              Povestea Noastră
            </h2>
            <div className="space-y-4 text-lg text-dark/80 leading-relaxed">
              <p>
                Sweet Temptations a luat naștere din pasiunea pentru deserturi rafinate și dorința 
                de a aduce momente de bucurie în viața fiecărui client. Fiecare desert pe care îl 
                creăm este o operă de artă, realizată manual cu atenție la detalii și respectând 
                tradițiile culinare.
              </p>
              <p>
                Folosim doar ingrediente de cea mai bună calitate, selectate cu grijă, și combinăm 
                tehnici tradiționale cu inovație modernă pentru a crea deserturi unice care să 
                depășească așteptările.
              </p>
              <p>
                La Sweet Temptations, credem că fiecare moment special merită să fie celebrat cu 
                un desert perfect. De la torturi de nuntă elegante la prăjituri personalizate, 
                fiecare creație spune o poveste.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 animate-slide-in-right">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
              alt="Cofetărie artizanală Sweet Temptations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-dark text-cream">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Valorile Noastre
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Principiile care ne ghidează în fiecare zi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 glass-dark rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cream/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Calitate Premium</h3>
            <p className="text-cream/80">
              Folosim doar ingrediente de cea mai bună calitate, selectate cu grijă pentru a 
              asigura un gust excepțional în fiecare desert.
            </p>
          </div>

          <div className="text-center p-8 glass-dark rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cream/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Pasiune & Dedicare</h3>
            <p className="text-cream/80">
              Fiecare desert este creat cu pasiune și dedicare, transformând ingredientele simple 
              în opere de artă culinare.
            </p>
          </div>

          <div className="text-center p-8 glass-dark rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cream/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Personalizare</h3>
            <p className="text-cream/80">
              Creăm deserturi personalizate care reflectă personalitatea și preferințele tale, 
              transformând ideile tale în realitate.
            </p>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-cream">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
            Procesul Nostru
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Cum creăm deserturile tale perfecte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark text-cream flex items-center justify-center text-3xl font-bold font-display">
              1
            </div>
            <h3 className="text-xl font-display font-bold text-dark mb-3">Consultare</h3>
            <p className="text-dark/70">
              Discutăm despre preferințele tale și despre evenimentul tău special
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark text-cream flex items-center justify-center text-3xl font-bold font-display">
              2
            </div>
            <h3 className="text-xl font-display font-bold text-dark mb-3">Design</h3>
            <p className="text-dark/70">
              Creăm un design unic care să reflecte personalitatea ta
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark text-cream flex items-center justify-center text-3xl font-bold font-display">
              3
            </div>
            <h3 className="text-xl font-display font-bold text-dark mb-3">Preparare</h3>
            <p className="text-dark/70">
              Preparăm desertul cu ingrediente premium și tehnici artizanale
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark text-cream flex items-center justify-center text-3xl font-bold font-display">
              4
            </div>
            <h3 className="text-xl font-display font-bold text-dark mb-3">Livrare</h3>
            <p className="text-dark/70">
              Livrăm desertul perfect la timp pentru momentul tău special
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-dark to-dark/90 text-cream">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Hai să Creăm Ceva Special Împreună
          </h2>
          <p className="text-lg text-cream/80 mb-10">
            Contactează-ne astăzi pentru a discuta despre deserturile tale personalizate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
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

