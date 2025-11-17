'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProductCardProps {
  image: string
  title: string
  description: string
  category?: string
}

export default function ProductCard({
  image,
  title,
  description,
  category,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-cream shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-display font-bold text-cream mb-2">{title}</h3>
        <p className="text-cream/90 text-sm">{description}</p>
        {category && (
          <span className="inline-block mt-2 px-3 py-1 bg-cream/20 text-cream text-xs rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-dark mb-2">{title}</h3>
        <p className="text-dark/70 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

