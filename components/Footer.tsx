import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-cream mt-20">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Sweet Temptations</h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Cofetărie artizanală premium în București. Creăm deserturi rafinate cu pasiune și dedicare.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a
                  href="tel:+40724292139"
                  className="hover:text-cream transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0724 292 139
                </a>
              </li>
              <li>
                <address className="not-italic flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Șos. Pantelimon 72-74<br />București 021634</span>
                </address>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Urmărește-ne</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sweettemptations.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-cream transition-colors"
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
                className="text-cream/80 hover:text-cream transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Animated Separator Lines */}
        <div className="mt-12 pt-8 relative border-t border-cream/20">
          {/* Animated line overlay */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-cream/60 to-transparent animate-line-move" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-cream/60 pt-8">
            <p>&copy; {new Date().getFullYear()} Sweet Temptations. Toate drepturile rezervate.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/despre-noi" className="hover:text-cream/80 transition-colors relative group">
                Despre noi
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cream/60 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/contact" className="hover:text-cream/80 transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cream/60 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

