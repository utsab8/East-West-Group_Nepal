import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-out ${
      scrolled 
        ? 'bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3' 
        : 'bg-white/40 backdrop-blur-md border-b border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-growth-green to-deep-green flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <i className="fa-solid fa-leaf text-xl" />
          </div>
          <div>
            <h1 className="font-display font-black text-xl text-deep-green leading-none tracking-tight">EAST WEST</h1>
            <span className="text-[10px] font-bold text-growth-green uppercase tracking-widest">Group Nepal</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold text-charcoal hover:text-growth-green transition-all duration-300 hover:-translate-y-0.5">Home</Link>
          <Link to="/about" className="text-sm font-semibold text-charcoal hover:text-growth-green transition-all duration-300 hover:-translate-y-0.5">About</Link>
          
          <div className="relative group cursor-pointer py-4">
            <span className="text-sm font-semibold text-charcoal group-hover:text-growth-green transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1">
              Companies <i className="fa-solid fa-chevron-down text-[10px]" />
            </span>
            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-64 bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2 transform origin-top scale-95 group-hover:scale-100">
              <Link to="/companies/agro-seed" className="flex items-center gap-3 p-3 rounded-xl hover:bg-growth-green/5 transition-colors">
                <div className="w-8 h-8 rounded-full bg-growth-green/10 flex items-center justify-center text-growth-green"><i className="fa-solid fa-seedling text-sm" /></div>
                <div><h6 className="text-sm font-bold text-deep-green">Agro Seed</h6><p className="text-[10px] text-gray-500">Quality tested hybrid seeds</p></div>
              </Link>
              <Link to="/companies/agro-chemical" className="flex items-center gap-3 p-3 rounded-xl hover:bg-deep-green/5 transition-colors">
                <div className="w-8 h-8 rounded-full bg-deep-green/10 flex items-center justify-center text-deep-green"><i className="fa-solid fa-flask text-sm" /></div>
                <div><h6 className="text-sm font-bold text-deep-green">Agro Chemical</h6><p className="text-[10px] text-gray-500">Crop protection & nutrition</p></div>
              </Link>
              <Link to="/companies" className="block w-full text-center py-2 mt-1 text-[11px] font-bold text-growth-green uppercase tracking-wider hover:bg-growth-green/5 rounded-lg transition-colors">Overview</Link>
            </div>
          </div>

          <Link to="/products" className="text-sm font-semibold text-charcoal hover:text-growth-green transition-all duration-300 hover:-translate-y-0.5">Products</Link>
          <Link to="/solutions" className="text-sm font-semibold text-charcoal hover:text-growth-green transition-all duration-300 hover:-translate-y-0.5">Solutions</Link>
          <Link to="/news-activities" className="text-sm font-semibold text-charcoal hover:text-growth-green transition-all duration-300 hover:-translate-y-0.5">News</Link>
          <Link to="/gallery" className="text-sm font-semibold text-charcoal hover:text-growth-green transition-all duration-300 hover:-translate-y-0.5">Gallery</Link>
          
          <Link to="/contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-harvest to-harvest-hover text-white font-bold text-sm rounded-full shadow-[0_8px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_12px_25px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-300">
            <i className="fa-solid fa-handshake mr-1.5" /> Dealer Portal
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden"
          style={{
            position: 'fixed',
            top: '20px',
            right: '24px',
            width: '48px',
            height: '48px',
            backgroundColor: '#ffffff',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A361A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-white/50 shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          <Link to="/" className="text-base font-bold text-deep-green">Home</Link>
          <Link to="/about" className="text-base font-bold text-deep-green">About Us</Link>
          <Link to="/companies" className="text-base font-bold text-deep-green">Our Companies</Link>
          <div className="pl-4 flex flex-col gap-3 border-l-2 border-growth-green/20">
            <Link to="/companies/agro-seed" className="text-sm font-semibold text-gray-600"><i className="fa-solid fa-seedling text-growth-green w-5" /> Agro Seed</Link>
            <Link to="/companies/agro-chemical" className="text-sm font-semibold text-gray-600"><i className="fa-solid fa-flask text-deep-green w-5" /> Agro Chemical</Link>
          </div>
          <Link to="/products" className="text-base font-bold text-deep-green">Products</Link>
          <Link to="/solutions" className="text-base font-bold text-deep-green">Solutions</Link>
          <Link to="/news-activities" className="text-base font-bold text-deep-green">News</Link>
          <Link to="/gallery" className="text-base font-bold text-deep-green">Gallery</Link>
          <Link to="/contact" className="mt-2 py-3 bg-harvest text-charcoal text-center font-bold rounded-xl shadow-lg shadow-harvest/20"><i className="fa-solid fa-handshake mr-2" />Dealer Portal</Link>
        </div>
      </div>
    </nav>
  )
}
