'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/despre-noi', label: 'Despre noi' },
    { href: '/produse', label: 'Produse' },
    { href: '/comenzi-personalizate', label: 'Comenzi personalizate' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark shadow-lg py-3'
          : 'bg-cream/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl md:text-3xl font-display font-bold transition-colors ${
              isScrolled ? 'text-cream hover:gold-accent' : 'text-dark hover:text-dark/80'
            }`}
          >
            Sweet Temptations
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled
                    ? pathname === link.href
                      ? 'text-cream'
                      : 'text-cream/80 hover:text-cream'
                    : pathname === link.href
                    ? 'text-dark'
                    : 'text-dark/80 hover:text-dark'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform ${
                    isScrolled ? 'bg-cream' : 'bg-dark'
                  } ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden focus:outline-none transition-colors ${
              isScrolled ? 'text-cream' : 'text-dark'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 animate-fade-in ${
            isScrolled ? 'bg-dark/95 rounded-lg p-4' : ''
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-medium transition-colors ${
                  isScrolled
                    ? pathname === link.href
                      ? 'text-cream font-semibold'
                      : 'text-cream/80'
                    : pathname === link.href
                    ? 'text-dark font-semibold'
                    : 'text-dark/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

