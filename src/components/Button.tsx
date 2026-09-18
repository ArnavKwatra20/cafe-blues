import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'dark' | 'light' | 'outline' | 'blue'
  asLink?: boolean
  href?: string
}

export function Button({ children, variant = 'dark', asLink, href, className = '', ...props }: ButtonProps) {
  const classes = `button button-${variant} ${className}`
  if (asLink && href) return <a className={classes} href={href}>{children}<ArrowUpRight size={16} strokeWidth={1.7} /></a>
  return <button className={classes} {...props}>{children}<ArrowUpRight size={16} strokeWidth={1.7} /></button>
}
