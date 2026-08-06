import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/motion'
import { cn } from '@/utils/cn'

interface SectionTitleProps {
  badge?: string
  title: string
  highlight?: string           // word(s) in title to highlight with gradient
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

/**
 * SectionTitle — Consistent section heading block with optional badge,
 * gradient highlight on part of the title, and subtitle.
 */
export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
  as: HeadingTag = 'h2',
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }

  // Split title to apply gradient to highlight word(s)
  const renderTitle = () => {
    if (!highlight) return <span>{title}</span>
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      className={cn('flex flex-col gap-3 mb-12', alignClasses[align], className)}
    >

      <HeadingTag
        className="heading-lg"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {renderTitle()}
      </HeadingTag>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
