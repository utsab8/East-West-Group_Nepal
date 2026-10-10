import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Reveal, SectionHeader, useCounter } from '../components/Shared'
import seedLogo from '../seed.jpeg'
import chemicalLogo from '../chemical.jpeg'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function Counter({ target, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useCounter(target, 2000, isInView)
  
  return (
    <div ref={ref} className="text-center p-6">
      <div className="font-display font-black text-4xl md:text-5xl text-growth-green mb-2 tracking-tighter">
        {count === 0 ? '0' : count}{suffix}
      </div>
      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  )
}



const partners = [
  { name: 'Partner One', logo: 'https://logoipsum.com/api/logo/1' },
  { name: 'Partner Two', logo: 'https://logoipsum.com/api/logo/2' },
  { name: 'Partner Three', logo: 'https://logoipsum.com/api/logo/3' },
  { name: 'Partner Four', logo: 'https://logoipsum.com/api/logo/4' },
  { name: 'Partner Five', logo: 'https://logoipsum.com/api/logo/5' },
  { name: 'Partner Six', logo: 'https://logoipsum.com/api/logo/6' },
]

export default function Home() {
  return (
    <>
      <SEO title="Home" description="East West Group — Cultivating Growth. Empowering Agriculture. Leading provider of quality seeds and crop protection solutions." />
      
      {/* ── Full Background Hero ── */}
      <section 
        className="relative bg-charcoal overflow-hidden pt-40 pb-32 md:pt-56 md:pb-48"
        style={{ backgroundImage: 'url("/images/hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <Reveal>
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/30 backdrop-blur-sm">
              Agritech Leadership
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight tracking-tight max-w-4xl mx-auto md:mx-0">
              Cultivating Growth.<br/>
              <span className="text-growth-green">Empowering Agriculture.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
              We provide high-yield seeds and advanced crop protection solutions to ensure food security and prosperity for farmers across Nepal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/companies" className="px-8 py-4 bg-growth-green text-white font-bold rounded-md hover:bg-growth-green-hover transition-all">
                Explore Our Companies
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/10 text-white font-bold rounded-md border border-white/30 hover:bg-white/20 transition-all backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Our Divisions ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Our Ecosystem" title="Two Specialized Companies" subtitle="Providing farmers with comprehensive agricultural solutions through specialized divisions." /></Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <Reveal>
              <div className="relative rounded-lg p-10 bg-white border border-growth-green/15 overflow-hidden shadow-sm hover:shadow-sm hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-growth-green/5" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-md flex items-center justify-center overflow-hidden shadow-sm border border-gray-100">
                    <img src={seedLogo} alt="Agro Seed Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-deep-green">East West Agro Seed</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-growth-green bg-growth-green/10 px-2.5 py-0.5 rounded-full mt-1 inline-block">Seeds & Genetics</span>
                  </div>
                </div>
                <img src="/images/seeds.jpg" alt="Seed varieties and seedlings" className="w-full h-48 object-cover rounded-md mb-6" />
                <p className="text-gray-500 leading-relaxed mb-6">Our seed division provides farmers with genetically superior, high-yield seed varieties. Every seed undergoes rigorous germination testing in our certified lab facilities.</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[{ icon: 'fa-dna', t: 'Seed Genetics R&D' }, { icon: 'fa-microscope', t: 'Germination Lab Standards' }, { icon: 'fa-wheat-awn', t: 'Varietal Trials' }, { icon: 'fa-clipboard-check', t: '85%+ Germination Rate' }].map(f => (
                    <div key={f.t} className="flex items-center gap-2 bg-growth-green/[0.06] rounded-lg px-3 py-2">
                      <i className={`fa-solid ${f.icon} text-growth-green text-xs`} />
                      <span className="text-xs font-semibold text-growth-green">{f.t}</span>
                    </div>
                  ))}
                </div>
                <Link to="/companies/agro-seed" className="inline-flex items-center gap-2 px-6 py-2.5 bg-growth-green text-white font-semibold text-sm rounded-md shadow-md hover:bg-growth-green-hover hover:-translate-y-0.5 transition-all">
                  Explore Agro Seed <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative rounded-lg p-10 bg-white border border-growth-green/15 overflow-hidden shadow-sm hover:shadow-sm hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-growth-green/5" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-md flex items-center justify-center overflow-hidden shadow-sm border border-gray-100">
                    <img src={chemicalLogo} alt="Agro Chemical Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-deep-green">East West Agro Chemical</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-growth-green bg-growth-green/10 px-2.5 py-0.5 rounded-full mt-1 inline-block">Crop Protection</span>
                  </div>
                </div>
                <img src="/images/lab.jpg" alt="Agricultural chemistry lab" className="w-full h-48 object-cover rounded-md mb-6" />
                <p className="text-gray-500 leading-relaxed mb-6">Our chemical division delivers proven crop protection formulations, balanced plant nutrition, and growth regulators. Every product is registered and tested for Nepal's conditions.</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[{ icon: 'fa-shield-halved', t: 'Crop Protection Formulas' }, { icon: 'fa-leaf', t: 'Bio-Stimulants' }, { icon: 'fa-vial', t: 'Soil Micronutrients' }, { icon: 'fa-chart-line', t: 'IPM Protocols' }].map(f => (
                    <div key={f.t} className="flex items-center gap-2 bg-growth-green/[0.06] rounded-lg px-3 py-2">
                      <i className={`fa-solid ${f.icon} text-growth-green text-xs`} />
                      <span className="text-xs font-semibold text-growth-green">{f.t}</span>
                    </div>
                  ))}
                </div>
                <Link to="/companies/agro-chemical" className="inline-flex items-center gap-2 px-6 py-2.5 bg-growth-green text-white font-semibold text-sm rounded-md shadow-md hover:bg-growth-green-hover hover:-translate-y-0.5 transition-all">
                  Explore Agro Chemical <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Industrial Partners ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted by Global Industrial Partners</h4>
            <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent">
              <div className="animate-marquee py-2">
                {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
                  <div 
                    key={i} 
                    className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center p-5 md:p-8 hover:-translate-y-2 hover:shadow-sm transition-all duration-300 group cursor-pointer mx-4 md:mx-6"
                    title={partner.name}
                  >
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} Logo`} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Impact Counters ── */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <Counter target="15" suffix="+" label="Years of Excellence" />
              <Counter target="500" suffix="+" label="Happy Farmers" />
              <Counter target="50" suffix="+" label="Product Lines" />
              <Counter target="7" label="Provinces Served" />
            </div>
          </Reveal>
        </div>
      </section>


    </>
  )
}
