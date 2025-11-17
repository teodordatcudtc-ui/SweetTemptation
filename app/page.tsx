import type { Metadata } from 'next'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'
import ProductCard from '@/components/ProductCard'
import FloatingPastry from '@/components/FloatingPastry'
import ReviewCard from '@/components/ReviewCard'

export const metadata: Metadata = {
  title: 'Acasă - Sweet Temptations | Cofetărie Artizanală București',
  description: 'Bun venit la Sweet Temptations - cofetărie artizanală premium în București. Descoperă deserturile noastre rafinate și prăjiturile personalizate.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section with Floating Pastries */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-cream to-cream/95 pt-20">
        {/* Floating Pastries */}
        <FloatingPastry
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600"
          alt="Tort elegant"
          delay="0s"
          className="top-10 left-4 md:top-16 md:left-8 lg:left-16"
          size="large"
        />
        <FloatingPastry
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
          alt="Macarons colorate"
          delay="1s"
          className="top-10 right-4 md:top-16 md:right-8 lg:right-16"
          size="large"
        />
        <FloatingPastry
          src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600"
          alt="Prăjituri elegante"
          delay="2s"
          className="bottom-32 left-4 md:bottom-40 md:left-8 lg:left-16"
          size="medium"
        />
        <FloatingPastry
          src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
          alt="Tort de nuntă"
          delay="1.5s"
          className="bottom-32 right-4 md:bottom-40 md:right-8 lg:right-16"
          size="large"
        />
        <FloatingPastry
          src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600"
          alt="Deserturi rafinate"
          delay="0.5s"
          className="top-1/2 -left-8 md:-left-12 lg:-left-16 transform -translate-y-1/2"
          size="medium"
        />
        <FloatingPastry
          src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600"
          alt="Torturi personalizate"
          delay="2.5s"
          className="top-1/2 -right-8 md:-right-12 lg:-right-16 transform -translate-y-1/2"
          size="medium"
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 md:px-8 animate-fade-in">
          {/* Background overlay pentru lizibilitate */}
          <div className="absolute inset-0 bg-cream/80 backdrop-blur-sm rounded-2xl md:rounded-3xl -z-10 py-8 md:py-12" />
          
          <div className="relative py-8 md:py-12 px-4 md:px-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-dark mb-6 animate-slide-up">
              Sweet Temptations
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-elegant text-dark/80 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Cofetărie Artizanală
            </p>
            <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Creăm deserturi rafinate cu pasiune, dedicare și ingrediente de cea mai bună calitate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button href="/produse" variant="primary">
                Explorează Produsele
              </Button>
              <Button href="/comenzi-personalizate" variant="outline">
                Comandă Personalizată
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Signature Desserts Section */}
      <Section className="bg-cream">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
            Deserturi de Semnătură
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Fiecare desert este o operă de artă, creată manual cu atenție la detalii
          </p>
        </div>

        {/* Carusel pentru mobile, grid pentru desktop */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
            <div className="flex gap-6" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
              <div className="flex-shrink-0 w-[85vw] max-w-sm" style={{ scrollSnapAlign: 'start' }}>
                <ProductCard
                  image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
                  title="Torturi de Nuntă"
                  description="Torturi elegante și sofisticate, personalizate pentru momentul tău special"
                  category="Torturi"
                />
              </div>
              <div className="flex-shrink-0 w-[85vw] max-w-sm" style={{ scrollSnapAlign: 'start' }}>
                <ProductCard
                  image="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600"
                  title="Prăjituri Artizanale"
                  description="Selecție variată de prăjituri create manual cu ingrediente premium"
                  category="Prăjituri"
                />
              </div>
              <div className="flex-shrink-0 w-[85vw] max-w-sm" style={{ scrollSnapAlign: 'start' }}>
                <ProductCard
                  image="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
                  title="Macarons Rafinate"
                  description="Macarons colorate și delicate, perfecte pentru orice ocazie"
                  category="Macarons"
                />
              </div>
              <div className="flex-shrink-0 w-[85vw] max-w-sm" style={{ scrollSnapAlign: 'start' }}>
                <ProductCard
                  image="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600"
                  title="Deserturi Personalizate"
                  description="Creăm deserturi unice conform preferințelor tale"
                  category="Personalizate"
                />
              </div>
              <div className="flex-shrink-0 w-[85vw] max-w-sm" style={{ scrollSnapAlign: 'start' }}>
                <ProductCard
                  image="https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600"
                  title="Torturi de Aniversare"
                  description="Torturi festive și colorate pentru a celebra momentele speciale"
                  category="Torturi"
                />
              </div>
              <div className="flex-shrink-0 w-[85vw] max-w-sm" style={{ scrollSnapAlign: 'start' }}>
                <ProductCard
                  image="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600"
                  title="Patiserie Artizanală"
                  description="Produse de patiserie proaspete, zilnic preparate cu pasiune"
                  category="Patiserie"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid pentru desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
            title="Torturi de Nuntă"
            description="Torturi elegante și sofisticate, personalizate pentru momentul tău special"
            category="Torturi"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600"
            title="Prăjituri Artizanale"
            description="Selecție variată de prăjituri create manual cu ingrediente premium"
            category="Prăjituri"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
            title="Macarons Rafinate"
            description="Macarons colorate și delicate, perfecte pentru orice ocazie"
            category="Macarons"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600"
            title="Deserturi Personalizate"
            description="Creăm deserturi unice conform preferințelor tale"
            category="Personalizate"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600"
            title="Torturi de Aniversare"
            description="Torturi festive și colorate pentru a celebra momentele speciale"
            category="Torturi"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600"
            title="Patiserie Artizanală"
            description="Produse de patiserie proaspete, zilnic preparate cu pasiune"
            category="Patiserie"
          />
        </div>
      </Section>

      {/* About Preview Section */}
      <Section className="bg-dark text-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Pasiune pentru Perfecțiune
            </h2>
            <p className="text-lg text-cream/80 mb-6 leading-relaxed">
              La Sweet Temptations, fiecare desert este creat cu pasiune și dedicare. 
              Folosim doar ingrediente de cea mai bună calitate și tehnici tradiționale 
              combinate cu inovație modernă.
            </p>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              Oferim o experiență culinară premium, unde fiecare detaliu contează și 
              fiecare desert spune o poveste.
            </p>
            <Button href="/despre-noi" variant="secondary">
              Află Mai Multe
            </Button>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
              alt="Cofetărie artizanală"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Reviews Section */}
      <Section className="bg-cream">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
            Ce Spun Clienții Noștri
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Povești reale de la clienții care au ales Sweet Temptations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReviewCard
            name="Maria Popescu"
            rating={5}
            comment="Tortul de nuntă a fost absolut perfect! Atât de frumos și delicios. Toți oaspeții au fost impresionați. Mulțumim pentru momentul de neuitat!"
            date="Ianuarie 2024"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
          />
          <ReviewCard
            name="Alexandru Ionescu"
            rating={5}
            comment="Am comandat prăjituri pentru evenimentul corporat și au fost un adevărat succes! Calitatea este excepțională și prezentarea impecabilă. Recomand cu căldură!"
            date="Decembrie 2023"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
          />
          <ReviewCard
            name="Elena Georgescu"
            rating={5}
            comment="Macarons-urile sunt cele mai bune pe care le-am încercat vreodată! Atât de delicate și aromate. Sweet Temptations este acum cofetăria mea preferată."
            date="Noiembrie 2023"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
          />
          <ReviewCard
            name="Radu Stanciu"
            rating={5}
            comment="Tortul de aniversare pentru fiica mea a fost exact cum ne-am imaginat. Designul personalizat și gustul au fost perfecte. Mulțumim pentru răbdare și profesionalism!"
            date="Octombrie 2023"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
          />
          <ReviewCard
            name="Andreea Marin"
            rating={5}
            comment="Serviciul este impecabil și deserturile sunt de neegalat. Am comandat de mai multe ori și de fiecare dată am fost impresionați. Calitate premium la prețuri corecte!"
            date="Septembrie 2023"
            image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
          />
          <ReviewCard
            name="Cristian Dumitru"
            rating={5}
            comment="Am descoperit Sweet Temptations prin recomandări și nu am fost dezamăgiți. Prăjiturile sunt proaspete, delicioase și prezentarea este elegantă. Vom reveni cu siguranță!"
            date="August 2023"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100"
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-cream to-cream/80">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
            Pregătește-te pentru o Experiență de Neuitat
          </h2>
          <p className="text-lg text-dark/70 mb-10">
            Contactează-ne astăzi pentru a comanda deserturile tale preferate sau 
            pentru a discuta despre comenzi personalizate
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

