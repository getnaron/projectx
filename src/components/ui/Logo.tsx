import { useTheme } from '@/App'

interface LogoProps {
  height?: number
  className?: string
  style?: React.CSSProperties
  variant?: 'full' | 'emblem'
}

export default function Logo({ height = 40, className = '', style = {}, variant = 'full' }: LogoProps) {
  const { isDark } = useTheme()

  if (variant === 'emblem') {
    return (
      <img
        src="/logo-emblem.png"
        alt="RivixoTech — Website Development Company Emblem"
        fetchPriority="high"
        decoding="async"
        className={className}
        style={{
          height,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
          ...style,
        }}
      />
    )
  }

  return (
    <img
      src={isDark ? '/logo-dark.png' : '/logo-light.png'}
      alt="RivixoTech — Website Development Company & Web Design Studio"
      fetchPriority="high"
      decoding="async"
      className={className}
      style={{
        height,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        ...style,
      }}
    />
  )
}
