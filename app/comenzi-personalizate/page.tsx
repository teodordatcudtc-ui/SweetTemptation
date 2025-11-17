'use client'

import { useState, FormEvent } from 'react'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function ComenziPersonalizate() {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    email: '',
    tipEveniment: '',
    dataEveniment: '',
    numarPersoane: '',
    descriere: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulare trimitere formular (în producție, aici ar fi un API call)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        nume: '',
        telefon: '',
        email: '',
        tipEveniment: '',
        dataEveniment: '',
        numarPersoane: '',
        descriere: '',
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cream via-cream/95 to-cream pt-8 md:pt-24 pb-4 md:pb-0">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-3 md:mb-6 animate-slide-up">
            Comenzi Personalizate
          </h1>
          <p className="text-lg md:text-2xl text-dark/70 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transformă ideile tale în deserturi de neuitat
          </p>
        </div>
      </section>

      {/* Form Section */}
      <Section className="bg-cream pt-0 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <div className="glass-effect rounded-2xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
                Completează Formularul
              </h2>
              <p className="text-dark/70 mb-8">
                Completează formularul de mai jos și te vom contacta în cel mai scurt timp pentru 
                a discuta despre comanda ta personalizată.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nume" className="block text-sm font-semibold text-dark mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="nume"
                    name="nume"
                    required
                    value={formData.nume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors"
                    placeholder="Introdu numele tău"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-semibold text-dark mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      required
                      value={formData.telefon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors"
                      placeholder="0724 292 139"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="tipEveniment" className="block text-sm font-semibold text-dark mb-2">
                      Tip eveniment *
                    </label>
                    <select
                      id="tipEveniment"
                      name="tipEveniment"
                      required
                      value={formData.tipEveniment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors"
                    >
                      <option value="">Selectează tipul</option>
                      <option value="nunta">Nuntă</option>
                      <option value="aniversare">Aniversare</option>
                      <option value="botez">Botez</option>
                      <option value="corporate">Corporate</option>
                      <option value="altul">Altul</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dataEveniment" className="block text-sm font-semibold text-dark mb-2">
                      Data evenimentului *
                    </label>
                    <input
                      type="date"
                      id="dataEveniment"
                      name="dataEveniment"
                      required
                      value={formData.dataEveniment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="numarPersoane" className="block text-sm font-semibold text-dark mb-2">
                    Număr de persoane *
                  </label>
                  <input
                    type="number"
                    id="numarPersoane"
                    name="numarPersoane"
                    required
                    min="1"
                    value={formData.numarPersoane}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors"
                    placeholder="Ex: 50"
                  />
                </div>

                <div>
                  <label htmlFor="descriere" className="block text-sm font-semibold text-dark mb-2">
                    Descriere detaliată *
                  </label>
                  <textarea
                    id="descriere"
                    name="descriere"
                    required
                    rows={6}
                    value={formData.descriere}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors resize-none"
                    placeholder="Descrie desertul pe care îl dorești, preferințele tale de gust, culori, stil, etc."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border-2 border-green-300 rounded-lg text-green-800">
                    <p className="font-semibold">Mulțumim! Formularul a fost trimis cu succes.</p>
                    <p className="text-sm mt-1">Te vom contacta în cel mai scurt timp.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border-2 border-red-300 rounded-lg text-red-800">
                    <p className="font-semibold">A apărut o eroare.</p>
                    <p className="text-sm mt-1">Te rugăm să încerci din nou sau să ne contactezi direct.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  onClick={() => {}}
                >
                  {isSubmitting ? 'Se trimite...' : 'Trimite Comanda'}
                </Button>
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
                De Ce Să Alegi Comenzi Personalizate?
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-dark text-cream flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-dark mb-2">Design Unic</h3>
                    <p className="text-dark/70">
                      Creăm deserturi complet personalizate care reflectă personalitatea și stilul tău.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-dark text-cream flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-dark mb-2">Ingrediente Premium</h3>
                    <p className="text-dark/70">
                      Folosim doar ingrediente de cea mai bună calitate pentru a asigura un gust excepțional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-dark text-cream flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-dark mb-2">Consultare Personalizată</h3>
                    <p className="text-dark/70">
                      Oferim consultare detaliată pentru a ne asigura că desertul îndeplinește toate așteptările tale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-dark text-cream flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-dark mb-2">Livrare la Timp</h3>
                    <p className="text-dark/70">
                      Ne asigurăm că desertul tău ajunge perfect la timp pentru evenimentul tău special.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark text-cream rounded-2xl p-6">
                <h3 className="text-xl font-display font-bold mb-4">Contact Direct</h3>
                <p className="text-cream/80 mb-4">
                  Preferi să discuți direct? Contactează-ne telefonic sau prin email.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+40724292139"
                    className="flex items-center gap-3 text-cream hover:text-cream/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>0724 292 139</span>
                  </a>
                  <a
                    href="mailto:contact@sweettemptations.ro"
                    className="flex items-center gap-3 text-cream hover:text-cream/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>contact@sweettemptations.ro</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-dark text-cream">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Cum Funcționează?
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Procesul nostru simplu pentru comenzi personalizate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cream text-dark flex items-center justify-center text-3xl font-bold font-display">
              1
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Completează Formularul</h3>
            <p className="text-cream/80 text-sm">
              Trimite-ne detaliile despre evenimentul tău și preferințele tale
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cream text-dark flex items-center justify-center text-3xl font-bold font-display">
              2
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Consultare</h3>
            <p className="text-cream/80 text-sm">
              Te contactăm pentru a discuta despre detalii și a răspunde la întrebări
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cream text-dark flex items-center justify-center text-3xl font-bold font-display">
              3
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Propunere & Confirmare</h3>
            <p className="text-cream/80 text-sm">
              Îți trimitem o propunere detaliată și confirmăm comanda
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cream text-dark flex items-center justify-center text-3xl font-bold font-display">
              4
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Preparare & Livrare</h3>
            <p className="text-cream/80 text-sm">
              Preparăm desertul perfect și îl livrăm la timp pentru eveniment
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

