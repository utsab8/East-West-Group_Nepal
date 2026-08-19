import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Physics-based Framer Motion Reveal
export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ type: "spring", stiffness: 70, damping: 20, delay: delay }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({ overline, title, subtitle, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center mx-auto'
  return (
    <div className={`max-w-2xl mb-16 ${alignment}`}>
      {overline && <span className="text-xs font-bold uppercase tracking-widest text-growth-green mb-3 block">{overline}</span>}
      <h2 className="font-display text-4xl md:text-5xl font-black text-deep-green mb-5 tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="text-gray-500 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  )
}

export function PageHero({ breadcrumbs, title, subtitle, logo }) {
  return (
    <div className="bg-gradient-to-br from-meadow to-canvas pt-40 pb-24 relative overflow-hidden border-b border-gray-50">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-growth-green/15 rounded-full blur-[100px]" />
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-harvest/15 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider mb-8 text-gray-500"
        >
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {b.href ? <a href={b.href} className="hover:text-growth-green transition-colors">{b.label}</a> : <span className="text-growth-green">{b.label}</span>}
              {i < breadcrumbs.length - 1 && <i className="fa-solid fa-chevron-right text-[8px]" />}
            </span>
          ))}
        </motion.div>
        
        {logo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="flex justify-center mb-6"
          >
            <img src={logo} alt="Company Logo" className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg object-cover bg-white" />
          </motion.div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-black text-deep-green mb-6 tracking-tight leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  )
}

// Custom hook for number counters (unchanged)
export function useCounter(target, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const end = parseInt(target, 10)
    if (start === end) return
    const incrementTime = (duration / end)
    
    const timer = setInterval(() => {
      start += 1
      setCount(String(start) + target.replace(/[0-9]/g, ''))
      if (start === end) clearInterval(timer)
    }, incrementTime)
    
    return () => clearInterval(timer)
  }, [target, duration, trigger])

  return count
}
