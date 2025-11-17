import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-dark text-cream hover:bg-dark/90 focus:ring-dark shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary:
      'bg-cream text-dark hover:bg-cream/90 focus:ring-cream shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    outline:
      'border-2 border-dark text-dark hover:bg-dark hover:text-cream focus:ring-dark',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

