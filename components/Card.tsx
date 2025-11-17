import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`glass-effect rounded-lg p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

