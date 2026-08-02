/** LoadingSpinner — Full-page loading state for Suspense fallback */
export default function LoadingSpinner() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg-dark)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Animated logo mark */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '16px',
            background: 'var(--gradient-primary)',
            margin: '0 auto 16px',
            animation: 'pulse-orb 1.5s ease-in-out infinite',
          }}
        />
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
          Loading…
        </p>
      </div>
    </div>
  )
}
