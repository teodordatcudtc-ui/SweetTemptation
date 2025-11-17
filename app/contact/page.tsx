'use client'

import { useState, FormEvent } from 'react'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    subiect: '',
    mesaj: '',
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
        email: '',
        telefon: '',
        subiect: '',
        mesaj: '',
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cream via-cream/95 to-cream pt-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-6 animate-slide-up">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Suntem aici pentru tine. Contactează-ne pentru orice întrebare sau comandă
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <Section className="bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-8">
              Informații de Contact
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark text-cream flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-dark mb-2">Telefon</h3>
                  <a
                    href="tel:+40724292139"
                    className="text-dark/70 hover:text-dark transition-colors text-lg"
                  >
                    0724 292 139
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark text-cream flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-dark mb-2">Adresă</h3>
                  <address className="text-dark/70 not-italic text-lg">
                    Cofetaria artizanala Sweet Temptations<br />
                    Șos. Pantelimon 72-74<br />
                    București 021634
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark text-cream flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-dark mb-2">Email</h3>
                  <a
                    href="mailto:contact@sweettemptations.ro"
                    className="text-dark/70 hover:text-dark transition-colors text-lg"
                  >
                    contact@sweettemptations.ro
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-display font-bold text-dark mb-4">Urmărește-ne</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/sweettemptations.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark text-cream flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/sweettemptationsbyramona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark text-cream flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass-effect rounded-2xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
                Trimite-ne un Mesaj
              </h2>
              <p className="text-dark/70 mb-8">
                Completează formularul de mai jos și te vom contacta în cel mai scurt timp.
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

                  <div>
                    <label htmlFor="telefon" className="block text-sm font-semibold text-dark mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors"
                      placeholder="0724 292 139"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subiect" className="block text-sm font-semibold text-dark mb-2">
                    Subiect *
                  </label>
                  <select
                    id="subiect"
                    name="subiect"
                    required
                    value={formData.subiect}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors"
                  >
                    <option value="">Selectează subiectul</option>
                    <option value="comanda">Comandă</option>
                    <option value="intrebare">Întrebare</option>
                    <option value="colaborare">Colaborare</option>
                    <option value="altul">Altul</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mesaj" className="block text-sm font-semibold text-dark mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    required
                    rows={6}
                    value={formData.mesaj}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 bg-cream text-dark focus:outline-none focus:border-dark transition-colors resize-none"
                    placeholder="Scrie mesajul tău aici..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border-2 border-green-300 rounded-lg text-green-800">
                    <p className="font-semibold">Mulțumim! Mesajul a fost trimis cu succes.</p>
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
                  {isSubmitting ? 'Se trimite...' : 'Trimite Mesajul'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-cream pt-0">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
            Ne Găsești Aici
          </h2>
          <p className="text-lg text-dark/70">
            Vizitează-ne la cofetăria noastră din București
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.437371030133!2d26.134671776563508!3d44.444702100880384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f9ef97674e65%3A0x761605a6e639994c!2sSweet%20Temptations%20-%20Cofetarie%20artizanala!5e0!3m2!1sen!2sro!4v1763382405918!5m2!1sen!2sro"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </Section>
    </>
  )
}

