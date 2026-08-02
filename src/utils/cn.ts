/**
 * cn.ts — Utility for merging CSS class names.
 * Supports conditional classes without extra dependencies.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Scroll to a target element smoothly
 */
export function scrollTo(selector: string): void {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Truncate text to n characters
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '…'
}

/**
 * Capitalize first letter
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Format a category slug to a display label
 */
export function formatCategory(slug: string): string {
  return slug
    .split('-')
    .map(word => capitalize(word))
    .join(' ')
}
