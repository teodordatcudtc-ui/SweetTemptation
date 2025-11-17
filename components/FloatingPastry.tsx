'use client'

import Image from 'next/image'

interface FloatingPastryProps {
  src: string
  alt: string
  delay: string
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export default function FloatingPastry({
  src,
  alt,
  delay,
  className = '',
  size = 'medium',
}: FloatingPastryProps) {
  const sizes = {
    small: 'w-32 h-32 md:w-48 md:h-48',
    medium: 'w-48 h-48 md:w-64 md:h-64',
    large: 'w-56 h-56 md:w-80 md:h-80',
  }

  return (
    <div
      className={`absolute ${sizes[size]} ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative w-full h-full animate-float">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 768px) 224px, 320px"
        />
      </div>
    </div>
  )
}

