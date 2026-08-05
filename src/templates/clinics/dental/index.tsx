import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, Star, ChevronDown, ChevronUp,
  Check, ArrowRight, Shield, Zap, Heart, Award, Microscope, CalendarDays, X,
} from 'lucide-react'
import PreviewBackBar from '@/components/PreviewBackBar'

const T = '#0F766E'
const TA = '#14B8A6'
const AC = '#06B6D4'

const NAV = ['About', 'Services', 'Doctors', 'Testimonials', 'FAQ', 'Contact']

const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '12,000+', label: 'Happy Patients' },
  { value: '98%', label: 'Success Rate' },
  { value: '4.9★', label: 'Patient Rating' },
]

const WHY_US = [
  { icon: <Award size={28} />, title: 'Experienced Dentists', desc: 'Our specialists bring decades of combined clinical expertise across all dental disciplines.' },
  { icon: <Zap size={28} />, title: 'Digital X-Ray', desc: 'High-definition digital imaging for precise diagnosis with 90% less radiation.' },
  { icon: <Heart size={28} />, title: 'Pain-Free Treatment', desc: 'Advanced anaesthesia and sedation options ensure a truly comfortable experience.' },
  { icon: <Shield size={28} />, title: 'Affordable Pricing', desc: 'Transparent, competitive pricing with flexible EMI options and insurance support.' },
  { icon: <Phone size={28} />, title: 'Emergency Care', desc: '24/7 emergency dental support — because dental pain never waits.' },
  { icon: <Microscope size={28} />, title: 'Latest Equipment', desc: 'CAD/CAM, 3D imaging, intraoral scanners and laser dentistry under one roof.' },
]

const SERVICES = [
  { title: 'General Dentistry', desc: 'Comprehensive checkups, professional cleanings, and preventive care for the whole family.', price: '₹800', gradient: 'linear-gradient(135deg, #e0f2f1, #b2dfdb)', icon: '🦷' },
  { title: 'Teeth Whitening', desc: 'Professional in-chair whitening treatments for dramatically brighter, whiter smiles in one visit.', price: '₹3,500', gradient: 'linear-gradient(135deg, #e3f2fd, #bbdefb)', icon: '✨' },
  { title: 'Dental Implants', desc: 'Permanent, natural-looking titanium implants that restore function and aesthetics beautifully.', price: '₹25,000', gradient: 'linear-gradient(135deg, #f3e5f5, #e1bee7)', icon: '🔩' },
  { title: 'Root Canal Treatment', desc: 'Painless, single-visit root canal procedures using rotary endodontics for rapid recovery.', price: '₹5,500', gradient: 'linear-gradient(135deg, #fff3e0, #ffe0b2)', icon: '💊' },
  { title: 'Orthodontics', desc: 'Traditional metal braces and clear aligner therapy for children, teens, and adults.', price: '₹35,000', gradient: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)', icon: '😁' },
  { title: 'Dental Veneers', desc: 'Wafer-thin porcelain veneers crafted to perfect the shape, size, and colour of your smile.', price: '₹8,000', gradient: 'linear-gradient(135deg, #fce4ec, #f8bbd0)', icon: '💎' },
  { title: 'Smile Makeover', desc: 'A bespoke combination of treatments designed to give you the smile of your dreams.', price: 'From ₹15,000', gradient: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)', icon: '🌟' },
  { title: 'Pediatric Dentistry', desc: 'Child-friendly dental care in a warm, fun environment that makes little ones love the dentist.', price: '₹600', gradient: 'linear-gradient(135deg, #fff9c4, #fff176)', icon: '👦' },
  { title: 'Emergency Care', desc: 'Rapid same-day appointments for toothaches, broken teeth, lost fillings, and dental trauma.', price: 'On Consultation', gradient: 'linear-gradient(135deg, #ffebee, #ffcdd2)', icon: '🚨' },
]

const DOCTORS = [
  { name: 'Dr. Priya Sharma', qual: 'MDS Prosthodontics', spec: 'Implants & Full Mouth Rehabilitation', exp: '14 Years', initials: 'PS', gradient: `linear-gradient(135deg, ${T}, ${TA})`, bio: 'Dr. Priya trained at Manipal University and completed her fellowship at the Straumann Institute, Switzerland. Renowned for precision implant placements and full-smile transformations.' },
  { name: 'Dr. Arun Menon', qual: 'BDS, MDS Orthodontics', spec: 'Braces & Clear Aligners', exp: '11 Years', initials: 'AM', gradient: `linear-gradient(135deg, ${TA}, ${AC})`, bio: 'Certified Invisalign provider with over 800 aligner cases. His meticulous eye for facial harmony ensures results that are both functional and aesthetically stunning.' },
  { name: 'Dr. Kavitha Rao', qual: 'MDS Endodontics', spec: 'Root Canal & Microsurgery', exp: '9 Years', initials: 'KR', gradient: 'linear-gradient(135deg, #0891b2, #0F766E)', bio: 'Uses microscope-assisted endodontics and single-visit RCT protocols. Her near-zero complication rate has earned her a loyal patient following.' },
  { name: 'Dr. Rahul Joshi', qual: 'BDS, MDS Pedodontics', spec: "Children's Dentistry", exp: '8 Years', initials: 'RJ', gradient: 'linear-gradient(135deg, #0284c7, #14B8A6)', bio: "Gentle chairside manner makes him the most requested dentist among younger patients. Specialises in behaviour management and preventive paediatric care." },
]

const TECH = [
  { title: 'Digital X-Ray', desc: 'Instant radiographs with 90% less radiation than conventional X-rays.', icon: '📡' },
  { title: 'Intraoral Scanner', desc: 'Precise 3D digital impressions — no putty, faster crowns and aligners.', icon: '🔬' },
  { title: '3D CBCT Imaging', desc: 'Full jaw-bone mapping for implant planning and complex diagnoses.', icon: '🧊' },
  { title: 'Laser Dentistry', desc: 'Painless soft-tissue procedures and gum contouring using dental lasers.', icon: '🔆' },
  { title: 'CAD/CAM Crowns', desc: 'Same-day ceramic crowns milled in our in-house CEREC unit.', icon: '⚙️' },
  { title: 'Microscope Dentistry', desc: 'Surgical-grade microscopes for ultra-precise root canal procedures.', icon: '🔭' },
]

const TESTIMONIALS = [
  { name: 'Ananya R.', age: 34, treatment: 'Dental Implants', text: 'Dr. Priya made the entire implant process painless. The result looks completely natural. Absolutely thrilled!' },
  { name: 'Vikram S.', age: 28, treatment: 'Invisalign', text: "My teeth are perfectly aligned and nobody noticed I was wearing aligners. Dr. Arun's attention to detail is unmatched." },
  { name: 'Meera P.', age: 41, treatment: 'Smile Makeover', text: 'The smile makeover genuinely changed my confidence. The clinic is beautiful and the results exceeded every expectation.' },
  { name: 'Rohan K.', age: 22, treatment: 'Teeth Whitening', text: 'One session and my teeth are 8 shades whiter. Worth every rupee. The team explained everything step by step.' },
  { name: 'Sunita M.', age: 55, treatment: 'Root Canal', text: 'Completely painless. Dr. Kavitha is an absolute expert — done in one visit with zero discomfort.' },
  { name: 'Arjun T. (Parent)', age: 38, treatment: 'Pediatric Care', text: 'My son used to cry at the dentist. Dr. Rahul turned it around completely — he now actually looks forward to check-ups!' },
]

const FAQS = [
  { q: 'Do dental treatments hurt?', a: 'With modern anaesthesia and our pain-free protocols, the vast majority of procedures are comfortable. We also offer sedation dentistry for anxious patients.' },
  { q: 'How often should I visit the dentist?', a: 'We recommend a check-up and professional cleaning every 6 months to catch problems early.' },
  { q: 'Do you treat children?', a: 'Absolutely. Our Pediatric Dentistry department specialises in child-friendly care from their very first tooth.' },
  { q: 'Do you accept dental insurance?', a: 'Yes, we work with most major insurance providers and handle claims on your behalf.' },
  { q: 'What are your emergency dental hours?', a: 'We offer same-day emergency appointments Mon–Sat, 9AM–8PM, plus on-call support for after-hours emergencies.' },
  { q: 'How long do braces or aligners take?', a: 'Most cases complete in 12–24 months. Dr. Arun will give you a precise timeline at your initial consultation.' },
  { q: 'How long do dental implants last?', a: 'With proper care, dental implants can last a lifetime — the closest thing to natural teeth.' },
  { q: 'Is teeth whitening safe?', a: 'Yes. Our professional systems use clinically tested formulations that are safe for enamel.' },
  { q: 'How much does treatment cost?', a: 'We provide a detailed treatment plan and transparent price breakdown after every consultation — no hidden charges.' },
  { q: 'How do I book an appointment?', a: 'Call, WhatsApp, or use the online form. We confirm within 2 hours and offer appointments 6 days a week.' },
]

const BLOGS = [
  { title: '10 Tips for Stronger, Healthier Teeth', cat: 'Oral Health', date: 'July 2025', icon: '🦷' },
  { title: '5 Signs You Might Need a Root Canal', cat: 'Treatments', date: 'June 2025', icon: '⚠️' },
  { title: 'Why Dental Implants Are Worth It', cat: 'Implants', date: 'June 2025', icon: '💡' },
  { title: 'Best Foods for Your Teeth (And Worst)', cat: 'Nutrition', date: 'May 2025', icon: '🥦' },
  { title: "A Parent's Guide to Children's Dental Care", cat: 'Pediatric', date: 'May 2025', icon: '👨‍👩‍👧' },
  { title: 'How Professional Teeth Whitening Works', cat: 'Cosmetic', date: 'April 2025', icon: '✨' },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
    </div>
  )
}

export default function DentalWorksTemplate() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#fff', color: '#1e293b', overflowX: 'hidden' }}>
      <PreviewBackBar templateName="Dental Clinic" category="Clinics" categoryRoute="/templates/clinics" />

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 40, left: 0, right: 0, zIndex: 200, background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(15,118,110,0.12)', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, boxShadow: '0 2px 20px rgba(15,118,110,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg,${T},${TA})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 18 }}>🦷</span>
          </div>
          <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.125rem', color: T }}>
            DENTAL <span style={{ color: AC }}>WORKS</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
          {NAV.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = T }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#475569' }}>
              {item}
            </a>
          ))}
          <button onClick={() => setShowModal(true)} style={{ background: `linear-gradient(135deg,${T},${TA})`, color: '#fff', border: 'none', borderRadius: 999, padding: '0.5rem 1.25rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', boxShadow: `0 4px 14px rgba(15,118,110,0.35)` }}>
            Book Appointment
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg,#f0fdfa 0%,#ccfbf1 40%,#e0f2fe 100%)', paddingTop: 120, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,rgba(20,184,166,0.15),transparent 70%)`, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%' }}>
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(15,118,110,0.1)', color: T, borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                ✦ Creating Healthy Smiles for Life
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(2.25rem,4vw,3.5rem)', lineHeight: 1.15, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Your Smile Deserves{' '}
              <span style={{ background: `linear-gradient(135deg,${T},${AC})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>the Best Care</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 480 }}>
              At Dental Works, we combine advanced dental technology with compassionate care to create healthy, confident smiles for every patient — from first visit to final result.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
              <button onClick={() => setShowModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: `linear-gradient(135deg,${T},${TA})`, color: '#fff', border: 'none', borderRadius: 999, padding: '0.9rem 2rem', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', boxShadow: `0 8px 24px rgba(15,118,110,0.35)` }}>
                <CalendarDays size={18} /> Book Appointment
              </button>
              <a href="#services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: T, border: `2px solid rgba(15,118,110,0.25)`, borderRadius: 999, padding: '0.9rem 2rem', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
                View Services <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
              {[{ label: '15+ Years', sub: 'Experience' }, { label: '12,000+', sub: 'Patients' }, { label: '4.9★', sub: 'Rating' }].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.375rem', color: T }}>{s.label}</div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ position: 'relative' }}>
            <div style={{ borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 32px 80px rgba(15,118,110,0.22)', position: 'relative' }}>
              <img src="/templates/clinics/dental-hero.png" alt="Dental Works premium dental clinic" style={{ width: '100%', display: 'block', height: 520, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderRadius: '1rem', padding: '0.75rem 1.25rem', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: `linear-gradient(135deg,${T},${TA})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield size={20} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>ISO Certified Clinic</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Sterilization Assured</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: `linear-gradient(135deg,${T},${TA})`, padding: '3.5rem 2rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', textAlign: 'center' as const }}>
          {STATS.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: '2.5rem', color: '#fff', lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9375rem', marginTop: '0.375rem' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '6rem 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ borderRadius: '2rem', overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 24px 60px rgba(15,118,110,0.2)' }}>
              <img src="/templates/clinics/dental-about.png" alt="Dental consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} style={{ color: T, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.75rem' }}>About Dental Works</motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#0f172a', lineHeight: 1.25, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
              Advanced Care. <span style={{ color: T }}>Gentle Touch.</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Founded in 2009, Dental Works has been Bangalore's most trusted dental practice for over 15 years. We combine cutting-edge technology with a deeply personal approach — because every patient deserves both expert treatment and genuine compassion.</motion.p>
            <motion.p variants={fadeUp} style={{ color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>Our clinic is equipped with digital X-rays, 3D CBCT imaging, CAD/CAM same-day crowns, and laser dentistry tools. Every operatory follows hospital-grade sterilization protocols.</motion.p>
            <motion.div variants={fadeUp}>
              {['Pain-free procedures as standard', 'ISO-certified sterilization protocols', 'Personalised treatment plans', 'Multilingual, family-friendly team'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.625rem' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: `rgba(15,118,110,0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={13} color={T} strokeWidth={3} />
                  </div>
                  <span style={{ color: '#334155', fontSize: '0.9375rem' }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '3.5rem' }}>
            <p style={{ color: T, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Why Patients Choose Us</p>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#0f172a', letterSpacing: '-0.03em' }}>The Dental Works <span style={{ color: T }}>Difference</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {WHY_US.map(w => (
              <motion.div key={w.title} variants={fadeUp} whileHover={{ y: -6 }}
                style={{ padding: '2rem', borderRadius: '1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'rgba(15,118,110,0.3)'; el.style.boxShadow = '0 12px 40px rgba(15,118,110,0.1)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#e2e8f0'; el.style.boxShadow = 'none' }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg,rgba(15,118,110,0.12),rgba(20,184,166,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T, marginBottom: '1.125rem' }}>{w.icon}</div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.0625rem', color: '#0f172a', marginBottom: '0.5rem' }}>{w.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '6rem 2rem', background: '#f0fdfa' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '3.5rem' }}>
            <p style={{ color: T, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>What We Offer</p>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#0f172a', letterSpacing: '-0.03em' }}>Our <span style={{ color: T }}>Services</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {SERVICES.map(s => (
              <motion.div key={s.title} variants={fadeUp} whileHover={{ y: -5 }}
                style={{ borderRadius: '1.5rem', overflow: 'hidden', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(15,118,110,0.06)', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(15,118,110,0.14)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(15,118,110,0.06)' }}>
                <div style={{ height: 80, background: s.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>{s.icon}</div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.0625rem', color: '#0f172a', marginBottom: '0.375rem' }}>{s.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: T, fontWeight: 700, fontSize: '0.9rem' }}>From {s.price}</span>
                    <button onClick={() => setShowModal(true)} style={{ background: T, color: '#fff', border: 'none', borderRadius: 999, padding: '0.4rem 1rem', fontSize: '0.8125rem', fontWeight: 600, cursor: 'pointer' }}>Book</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '3.5rem' }}>
            <p style={{ color: T, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Expert Team</p>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#0f172a', letterSpacing: '-0.03em' }}>Meet Our <span style={{ color: T }}>Dentists</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {DOCTORS.map(d => (
              <motion.div key={d.name} variants={fadeUp} whileHover={{ y: -6 }} style={{ borderRadius: '1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', overflow: 'hidden', textAlign: 'center' as const }}>
                <div style={{ height: 140, background: d.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: '1.75rem', border: '3px solid rgba(255,255,255,0.5)' }}>{d.initials}</div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.25rem' }}>{d.name}</h3>
                  <p style={{ color: T, fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>{d.qual}</p>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.75rem' }}>{d.spec}</p>
                  <span style={{ background: 'rgba(15,118,110,0.08)', color: T, borderRadius: 999, padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontWeight: 600 }}>{d.exp}</span>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.6, marginTop: '0.75rem' }}>{d.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg,#0f172a,#134e4a)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '3.5rem' }}>
            <p style={{ color: TA, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>State of the Art</p>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#fff', letterSpacing: '-0.03em' }}>Technology That <span style={{ color: TA }}>Delivers</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {TECH.map(t => (
              <motion.div key={t.title} variants={fadeUp} whileHover={{ background: 'rgba(255,255,255,0.1)' } as any}
                style={{ padding: '1.75rem', borderRadius: '1.25rem', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.2s' }}>
                <div style={{ fontSize: '2.25rem', marginBottom: '0.875rem' }}>{t.icon}</div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: '#fff', fontSize: '1.0625rem', marginBottom: '0.5rem' }}>{t.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7 }}>{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: '6rem 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '3.5rem' }}>
            <p style={{ color: T, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Patient Stories</p>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#0f172a', letterSpacing: '-0.03em' }}>What Our <span style={{ color: T }}>Patients Say</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {TESTIMONIALS.map(t => (
              <motion.div key={t.name} variants={fadeUp} style={{ padding: '1.75rem', borderRadius: '1.5rem', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(15,118,110,0.06)' }}>
                <Stars />
                <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.75, margin: '1rem 0' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg,${T},${AC})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#0f172a' }}>{t.name}, {t.age}</div>
                    <div style={{ fontSize: '0.8rem', color: T, fontWeight: 600 }}>{t.treatment}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' as const }}>
          <p style={{ color: T, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Simple Process</p>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#0f172a', letterSpacing: '-0.03em', marginBottom: '3rem' }}>4 Steps to Your <span style={{ color: T }}>Healthy Smile</span></h2>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' as const }}>
            {[{ step: '01', title: 'Book Appointment', desc: 'Call, WhatsApp, or book online — we confirm within 2 hours.', icon: '📅' }, { step: '02', title: 'Consultation', desc: 'Meet your dentist for a thorough exam and digital X-rays.', icon: '🔍' }, { step: '03', title: 'Treatment Plan', desc: 'Receive a personalised, transparent treatment plan.', icon: '📋' }, { step: '04', title: 'Healthy Smile', desc: 'Complete your treatment and enjoy your confident new smile.', icon: '😁' }].map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: `linear-gradient(135deg,${T},${TA})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1rem', boxShadow: `0 8px 24px rgba(15,118,110,0.25)` }}>{p.icon}</div>
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: '0.8rem', color: T, letterSpacing: '0.08em', marginBottom: '0.375rem' }}>STEP {p.step}</span>
                <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#0f172a', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '6rem 2rem', background: '#f0fdfa' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p style={{ color: T, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>FAQ</p>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#0f172a', letterSpacing: '-0.03em' }}>Frequently Asked <span style={{ color: T }}>Questions</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FAQS.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ borderRadius: '1rem', background: '#fff', border: `1px solid ${openFaq === i ? 'rgba(15,118,110,0.3)' : '#e2e8f0'}`, overflow: 'hidden', boxShadow: openFaq === i ? '0 8px 24px rgba(15,118,110,0.1)' : 'none', transition: 'all 0.2s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.125rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' as const, gap: '1rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '1rem', color: '#0f172a' }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} color={T} /> : <ChevronDown size={18} color="#94a3b8" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
                      <p style={{ padding: '0 1.5rem 1.25rem', color: '#475569', fontSize: '0.9375rem', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '3rem' }}>
            <p style={{ color: T, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Dental Insights</p>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#0f172a', letterSpacing: '-0.03em' }}>Our <span style={{ color: T }}>Blog</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {BLOGS.map(b => (
              <motion.div key={b.title} variants={fadeUp} whileHover={{ y: -4 }}
                style={{ borderRadius: '1.25rem', background: '#f8fafc', border: '1px solid #e2e8f0', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(15,118,110,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}>
                <div style={{ height: 100, background: `linear-gradient(135deg,${T}22,${TA}33)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>{b.icon}</div>
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.625rem' }}>
                    <span style={{ background: `rgba(15,118,110,0.1)`, color: T, borderRadius: 999, padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontWeight: 700 }}>{b.cat}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{b.date}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1rem', color: '#0f172a', lineHeight: 1.4 }}>{b.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: T, fontWeight: 600, fontSize: '0.875rem', marginTop: '0.875rem' }}>Read More <ArrowRight size={14} /></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '6rem 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{ color: T, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Contact Us</p>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.25rem)', color: '#0f172a', letterSpacing: '-0.03em', marginBottom: '2rem' }}>We're Here to <span style={{ color: T }}>Help</span></h2>
            {[{ icon: <MapPin size={18} />, label: 'Address', val: '42, 3rd Main, Indiranagar, Bangalore 560038' }, { icon: <Phone size={18} />, label: 'Phone', val: '+91 80 4567 8900' }, { icon: <Mail size={18} />, label: 'Email', val: 'hello@dentalworks.in' }, { icon: <Clock size={18} />, label: 'Hours', val: 'Mon–Sat: 9AM–8PM  |  Sun: 10AM–3PM' }].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(15,118,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#0f172a', marginBottom: '0.125rem' }}>{c.label}</div>
                  <div style={{ color: '#64748b', fontSize: '0.9rem' }}>{c.val}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: '2rem', padding: '1.25rem', borderRadius: '1.25rem', background: 'linear-gradient(135deg,#fef2f2,#fee2e2)', border: '1px solid #fecaca' }}>
              <div style={{ fontWeight: 700, color: '#dc2626', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>🚨 Dental Emergency?</div>
              <div style={{ color: '#991b1b', fontSize: '0.875rem' }}>Call immediately: <strong>+91 80 4567 8999</strong><br />Available 24/7 for emergencies.</div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: '#fff', borderRadius: '2rem', padding: '2.5rem', boxShadow: '0 16px 48px rgba(15,118,110,0.1)', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.375rem', color: '#0f172a', marginBottom: '0.25rem' }}>Book an Appointment</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.75rem' }}>Fill in your details and we'll confirm within 2 hours.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[{ label: 'Full Name', span: 1 }, { label: 'Phone', span: 1 }, { label: 'Email', span: 2 }].map(f => (
                <div key={f.label} style={{ gridColumn: `span ${f.span}` }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8125rem', color: '#374151', marginBottom: '0.375rem' }}>{f.label}</label>
                  <input placeholder={`Your ${f.label}`} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1.5px solid #e2e8f0', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box' as const }}
                    onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = T }}
                    onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#e2e8f0' }} />
                </div>
              ))}
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8125rem', color: '#374151', marginBottom: '0.375rem' }}>Treatment</label>
                <select style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1.5px solid #e2e8f0', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box' as const, color: '#374151', background: '#fff' }}>
                  <option>Select Treatment</option>
                  {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8125rem', color: '#374151', marginBottom: '0.375rem' }}>Preferred Date</label>
                <input type="date" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1.5px solid #e2e8f0', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box' as const }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8125rem', color: '#374151', marginBottom: '0.375rem' }}>Preferred Time</label>
                <select style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1.5px solid #e2e8f0', fontSize: '0.9375rem', outline: 'none', boxSizing: 'border-box' as const, color: '#374151', background: '#fff' }}>
                  <option>Morning (9AM–12PM)</option>
                  <option>Afternoon (12PM–4PM)</option>
                  <option>Evening (4PM–8PM)</option>
                </select>
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8125rem', color: '#374151', marginBottom: '0.375rem' }}>Message (optional)</label>
                <textarea rows={3} placeholder="Any additional notes..." style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1.5px solid #e2e8f0', fontSize: '0.9375rem', outline: 'none', resize: 'none' as const, boxSizing: 'border-box' as const, fontFamily: 'inherit' }}
                  onFocus={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = T }}
                  onBlur={e => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = '#e2e8f0' }} />
              </div>
            </div>
            <button style={{ width: '100%', marginTop: '1.25rem', padding: '0.9rem', borderRadius: '0.875rem', background: `linear-gradient(135deg,${T},${TA})`, color: '#fff', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', boxShadow: `0 8px 24px rgba(15,118,110,0.3)` }}>
              Confirm Appointment →
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0f172a', color: 'rgba(255,255,255,0.7)', padding: '4rem 2rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: `linear-gradient(135deg,${T},${TA})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: 16 }}>🦷</span></div>
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: '#fff', fontSize: '1.0625rem' }}>DENTAL WORKS</span>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 280 }}>Creating healthy, confident smiles for over 15 years. Advanced technology. Compassionate care.</p>
            </div>
            {[{ title: 'Quick Links', items: ['Home', 'About', 'Services', 'Doctors', 'Contact'] }, { title: 'Services', items: ['General Dentistry', 'Dental Implants', 'Orthodontics', 'Teeth Whitening', 'Smile Makeover'] }, { title: 'Contact', items: ['+91 80 4567 8900', 'hello@dentalworks.in', '42, Indiranagar,', 'Bangalore 560038'] }].map(col => (
              <div key={col.title}>
                <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '1rem', fontSize: '0.9375rem' }}>{col.title}</h4>
                {col.items.map(item => <div key={item} style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>{item}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontSize: '0.875rem' }}>© 2025 Dental Works. All rights reserved.</p>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>Website by RivixoTech</p>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <a href="https://wa.me/918045678900" target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: 100, right: 24, width: 52, height: 52, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(37,211,102,0.5)', zIndex: 300, textDecoration: 'none', fontSize: '1.5rem' }}>
        💬
      </a>
      <motion.button onClick={() => setShowModal(true)} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: 'spring' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
        style={{ position: 'fixed', bottom: 24, right: 24, background: `linear-gradient(135deg,${T},${TA})`, color: '#fff', border: 'none', borderRadius: 999, padding: '0.75rem 1.25rem', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', boxShadow: `0 8px 24px rgba(15,118,110,0.45)`, zIndex: 300, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <CalendarDays size={16} /> Book Now
      </motion.button>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(6px)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={e => e.stopPropagation()}
              style={{ background: '#fff', borderRadius: '2rem', padding: '2.5rem', maxWidth: 480, width: '100%', position: 'relative', boxShadow: '0 32px 80px rgba(15,118,110,0.25)' }}>
              <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: 20, right: 20, background: '#f1f5f9', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={16} color="#475569" />
              </button>
              <div style={{ textAlign: 'center' as const, marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🦷</div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.375rem', color: '#0f172a' }}>Book Your Appointment</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>We'll confirm within 2 hours.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {['Full Name', 'Phone Number', 'Email Address'].map(f => (
                  <input key={f} placeholder={f} style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1.5px solid #e2e8f0', fontSize: '0.9375rem', outline: 'none', fontFamily: 'inherit' }} />
                ))}
                <select style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1.5px solid #e2e8f0', fontSize: '0.9375rem', outline: 'none', color: '#374151', background: '#fff', fontFamily: 'inherit' }}>
                  <option>Select Treatment</option>
                  {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
                <button onClick={() => setShowModal(false)} style={{ padding: '0.9rem', borderRadius: '0.875rem', background: `linear-gradient(135deg,${T},${TA})`, color: '#fff', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', boxShadow: `0 8px 24px rgba(15,118,110,0.3)` }}>
                  Confirm Appointment ✓
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
