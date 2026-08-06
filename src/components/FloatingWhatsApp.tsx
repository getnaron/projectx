import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const whatsappNumber = '917306001675'
  const defaultText = encodeURIComponent(
    'Hello RivixoTech! I visited your website and would like a free website development quote for my business.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultText}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RivixoTech on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        color: '#ffffff',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      <MessageCircle size={28} />
      <span
        style={{
          position: 'absolute',
          top: '-3px',
          right: '-3px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: '#ef4444',
          border: '2px solid #0b0f19',
        }}
      />
    </motion.a>
  )
}
