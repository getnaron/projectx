import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * useScrollReveal — returns a ref and whether the element is in view.
 * Used to trigger Framer Motion animations on scroll.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}

/**
 * useScrollY — tracks the window's scrollY position.
 * Useful for Navbar background changes on scroll.
 */
export function useScrollY() {
  const scrollY = useRef(0)

  useEffect(() => {
    const handler = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return scrollY
}
