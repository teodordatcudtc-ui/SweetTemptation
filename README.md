# Sweet Temptations - Cofetărie Artizanală

Website premium, elegant și complet funcțional pentru cofetăria artizanală Sweet Temptations din București.

## 🎨 Caracteristici

- ✅ Design premium și elegant cu paleta de culori personalizată (#ebedec, #2c2a2b)
- ✅ 100% Responsive (mobile, tabletă, desktop)
- ✅ SEO optimizat complet (meta tags, OpenGraph, JSON-LD structured data)
- ✅ Animații premium (floating pastries, fade, slide, parallax subtil)
- ✅ Navigație sticky cu efect blur
- ✅ Gallery cu efect glassmorphism
- ✅ Formulare funcționale pentru contact și comenzi personalizate
- ✅ Integrare Google Maps
- ✅ Fonturi premium (Montserrat, Playfair Display, Cormorant Garamond)

## 📁 Structura Proiectului

```
sweet-temptation/
├── app/
│   ├── comenzi-personalizate/    # Pagina pentru comenzi personalizate
│   │   ├── layout.tsx            # Metadata SEO
│   │   └── page.tsx              # Pagina principală
│   ├── contact/                   # Pagina de contact
│   │   ├── layout.tsx            # Metadata SEO
│   │   └── page.tsx              # Pagina cu formular și Maps
│   ├── despre-noi/                # Pagina Despre noi
│   │   └── page.tsx
│   ├── produse/                   # Pagina Produse cu gallery
│   │   ├── layout.tsx            # Metadata SEO
│   │   └── page.tsx              # Pagina cu categorii și produse
│   ├── globals.css                # Stiluri globale și animații
│   ├── layout.tsx                 # Layout principal cu SEO
│   └── page.tsx                   # Pagina Home
├── components/
│   ├── Button.tsx                 # Componentă buton reutilizabilă
│   ├── Card.tsx                   # Card cu efect glass
│   ├── FloatingPastry.tsx         # Componentă pentru pastries flotante
│   ├── Footer.tsx                  # Footer cu linii animate
│   ├── Navigation.tsx              # Navigație sticky cu blur
│   ├── ProductCard.tsx             # Card pentru produse
│   └── Section.tsx                 # Wrapper pentru secțiuni
├── hooks/
│   └── useScrollReveal.ts         # Hook pentru animații la scroll
├── next.config.js                 # Configurație Next.js
├── package.json                    # Dependențe
├── postcss.config.js              # Configurație PostCSS
├── tailwind.config.ts             # Configurație Tailwind
└── tsconfig.json                   # Configurație TypeScript
```

## 🚀 Instalare și Pornire

### 1. Instalează dependențele

```bash
npm install
```

### 2. Pornește serverul de development

```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser pentru a vedea site-ul.

### 3. Build pentru producție

```bash
npm run build
npm start
```

## ✏️ Cum Editezi Conținutul

### Informații de Contact

**Telefon și Adresă:**
- Editează în: `components/Footer.tsx` (liniile 22-38)
- Editează în: `app/contact/page.tsx` (secțiunea "Contact Information")
- Editează în: `app/layout.tsx` (JSON-LD structured data, liniile 71-84)

**Social Media:**
- Instagram: `components/Footer.tsx` (linia 48) și `app/contact/page.tsx`
- Facebook: `components/Footer.tsx` (linia 59) și `app/contact/page.tsx`

### Textul Paginilor

- **Home**: `app/page.tsx`
- **Despre noi**: `app/despre-noi/page.tsx`
- **Produse**: `app/produse/page.tsx` (editează array-ul `products` și `categories`)
- **Comenzi personalizate**: `app/comenzi-personalizate/page.tsx`
- **Contact**: `app/contact/page.tsx`

### Imagini

Imaginile sunt încărcate din Unsplash (temporar). Pentru a folosi imagini proprii:

1. Creează folderul `public/images/`
2. Adaugă imaginile tale
3. Înlocuiește URL-urile Unsplash cu `/images/nume-imagine.jpg`

Exemplu:
```tsx
// Înainte
src="https://images.unsplash.com/photo-..."

// După
src="/images/tort-nunta.jpg"
```

### Google Maps Embed

Embed-ul Maps este în `app/contact/page.tsx` (linia ~200). Pentru a actualiza:

1. Mergi pe [Google Maps](https://www.google.com/maps)
2. Găsește locația
3. Click pe "Share" → "Embed a map"
4. Copiază codul iframe și înlocuiește-l în fișier

### SEO și Metadata

Metadata pentru fiecare pagină:
- **Home**: `app/layout.tsx` (liniile 26-51)
- **Despre noi**: `app/despre-noi/page.tsx` (liniile 8-16)
- **Produse**: `app/produse/layout.tsx`
- **Comenzi personalizate**: `app/comenzi-personalizate/layout.tsx`
- **Contact**: `app/contact/layout.tsx`

### Culori și Design

- **Paleta de culori**: `tailwind.config.ts` (liniile 12-13)
- **Fonturi**: `app/layout.tsx` (liniile 7-24)
- **Stiluri globale**: `app/globals.css`
- **Animații**: `tailwind.config.ts` (keyframes) și `app/globals.css`

### Produse și Categorii

Editează în `app/produse/page.tsx`:

```tsx
// Categorii (liniile 8-15)
const categories = [
  { id: 'all', name: 'Toate Produsele' },
  { id: 'torturi', name: 'Torturi' },
  // Adaugă categorii noi aici
]

// Produse (liniile 17-70)
const products = [
  {
    id: 1,
    category: 'torturi',
    image: 'URL_IMAGINE',
    title: 'Nume Produs',
    description: 'Descriere produs',
  },
  // Adaugă produse noi aici
]
```

## 🎯 Funcționalități Speciale

### Formulare

Formularele din "Contact" și "Comenzi personalizate" sunt funcționale dar trimit doar simulări. Pentru a conecta la un backend:

1. Creează un API endpoint în `app/api/contact/route.ts` sau `app/api/order/route.ts`
2. Actualizează funcția `handleSubmit` în paginile respective

### Animații

- **Floating Pastries**: Componentă `FloatingPastry.tsx` cu animație CSS
- **Scroll Reveal**: Hook `useScrollReveal.ts` pentru elemente care apar la scroll
- **Hover Effects**: Efecte glassmorphism și scale pe carduri

## 📱 Responsive Design

Site-ul este optimizat pentru:
- **Mobile**: < 768px
- **Tabletă**: 768px - 1024px
- **Desktop**: > 1024px

Toate componentele folosesc Tailwind breakpoints (`sm:`, `md:`, `lg:`) pentru adaptare.

## 🔍 SEO

Site-ul include:
- ✅ Meta tags complete (title, description, keywords)
- ✅ OpenGraph tags pentru social media
- ✅ JSON-LD structured data (LocalBusiness + Bakery)
- ✅ Semantic HTML
- ✅ Optimizare pentru SEO local București

## 📝 Note Importante

1. **Imagini**: Folosește imagini optimizate pentru performanță
2. **Formulare**: Conectează formularele la un backend real în producție
3. **Analytics**: Adaugă Google Analytics sau alt serviciu de tracking
4. **Domain**: Actualizează URL-urile din metadata cu domeniul tău real

## 🛠️ Tehnologii

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animații (opțional, deja inclus)

## 📞 Suport

Pentru întrebări sau probleme, contactează dezvoltatorul sau consultă documentația Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

**Sweet Temptations** - Cofetărie Artizanală București
Șos. Pantelimon 72-74, București 021634
Tel: 0724 292 139
