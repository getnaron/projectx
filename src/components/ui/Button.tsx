import { type ReactNode, type ElementType } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

// ============================================================
// Types
// ============================================================
interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: ElementType
  href?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  id?: string
  fullWidth?: boolean
  [key: string]: unknown
}

// ============================================================
// Button Component
// ============================================================
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className,
  disabled,
  fullWidth,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-[0.9375rem] rounded-xl',
    lg: 'px-8 py-4 text-base rounded-xl',
  }

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] rounded-xl transition-all duration-200',
  }

  return (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.02, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={cn(fullWidth ? 'w-full' : 'inline-block')}
    >
      <Tag
        className={cn(
          'btn font-semibold cursor-pointer inline-flex items-center justify-center gap-2',
          sizeClasses[size],
          variantClasses[variant],
          disabled && 'opacity-50 cursor-not-allowed',
          fullWidth && 'w-full',
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
