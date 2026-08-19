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
      
      {/* ── Ambient Hero ── */}
      <section className="relative bg-white overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-growth-green/10 rounded-full blur-[100px] -translate-y-1/2 mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-harvest/15 rounded-full blur-[80px] translate-y-1/2 mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <Reveal>
            <span className="inline-block py-1.5 px-4 rounded-full bg-meadow text-growth-green text-xs font-bold uppercase tracking-widest mb-6 border border-growth-green/20">
              Agritech Leadership
            </span>
            <h1 className="font-display font-black text-6xl md:text-7xl text-deep-green mb-6 leading-[1.1] tracking-tight">
              Cultivating Growth.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-green to-harvest">Empowering Agriculture.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              We provide high-yield seeds and advanced crop protection solutions to ensure food security and prosperity for farmers across Nepal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/companies" className="px-8 py-4 bg-deep-green text-white font-bold rounded-xl shadow-xl shadow-deep-green/20 hover:-translate-y-1 transition-all">
                Explore Our Companies
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white text-deep-green border border-gray-200 font-bold rounded-xl hover:border-growth-green hover:text-growth-green hover:shadow-lg transition-all">
                Become a Dealer
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
              <img src="/images/hero.jpg" alt="Nepalese farmer looking over lush rice terraces" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-growth-green rounded-full flex items-center justify-center text-white"><i className="fa-solid fa-leaf" /></div>
                <div>
                  <h6 className="font-bold text-deep-green text-sm">ISO 9001:2015 Certified</h6>
                  <p className="text-xs text-gray-500">Committed to international quality standards.</p>
                </div>
              </div>
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
              <div className="relative rounded-[2.5rem] p-10 bg-gradient-to-br from-meadow to-white border border-growth-green/15 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-growth-green/5" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden shadow-sm border border-gray-100">
                    <img src={seedLogo} alt="Agro Seed Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-deep-green">East West Agro Seed</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-growth-green bg-growth-green/10 px-2.5 py-0.5 rounded-full mt-1 inline-block">Seeds & Genetics</span>
                  </div>
                </div>
                <img src="/images/seeds.jpg" alt="Seed varieties and seedlings" className="w-full h-48 object-cover rounded-xl mb-6" />
                <p className="text-gray-500 leading-relaxed mb-6">Our seed division provides farmers with genetically superior, high-yield seed varieties. Every seed undergoes rigorous germination testing in our certified lab facilities.</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[{ icon: 'fa-dna', t: 'Seed Genetics R&D' }, { icon: 'fa-microscope', t: 'Germination Lab Standards' }, { icon: 'fa-wheat-awn', t: 'Varietal Trials' }, { icon: 'fa-clipboard-check', t: '85%+ Germination Rate' }].map(f => (
                    <div key={f.t} className="flex items-center gap-2 bg-growth-green/[0.06] rounded-lg px-3 py-2">
                      <i className={`fa-solid ${f.icon} text-growth-green text-xs`} />
                      <span className="text-xs font-semibold text-growth-green">{f.t}</span>
                    </div>
                  ))}
                </div>
                <Link to="/companies/agro-seed" className="inline-flex items-center gap-2 px-6 py-2.5 bg-growth-green text-white font-semibold text-sm rounded-xl shadow-md hover:bg-growth-green-hover hover:-translate-y-0.5 transition-all">
                  Explore Agro Seed <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative rounded-[2.5rem] p-10 bg-gradient-to-br from-meadow to-white border border-growth-green/15 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-growth-green/5" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden shadow-sm border border-gray-100">
                    <img src={chemicalLogo} alt="Agro Chemical Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-deep-green">East West Agro Chemical</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-growth-green bg-growth-green/10 px-2.5 py-0.5 rounded-full mt-1 inline-block">Crop Protection</span>
                  </div>
                </div>
                <img src="/images/lab.jpg" alt="Agricultural chemistry lab" className="w-full h-48 object-cover rounded-xl mb-6" />
                <p className="text-gray-500 leading-relaxed mb-6">Our chemical division delivers proven crop protection formulations, balanced plant nutrition, and growth regulators. Every product is registered and tested for Nepal's conditions.</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[{ icon: 'fa-shield-halved', t: 'Crop Protection Formulas' }, { icon: 'fa-leaf', t: 'Bio-Stimulants' }, { icon: 'fa-vial', t: 'Soil Micronutrients' }, { icon: 'fa-chart-line', t: 'IPM Protocols' }].map(f => (
                    <div key={f.t} className="flex items-center gap-2 bg-growth-green/[0.06] rounded-lg px-3 py-2">
                      <i className={`fa-solid ${f.icon} text-growth-green text-xs`} />
                      <span className="text-xs font-semibold text-growth-green">{f.t}</span>
                    </div>
                  ))}
                </div>
                <Link to="/companies/agro-chemical" className="inline-flex items-center gap-2 px-6 py-2.5 bg-growth-green text-white font-semibold text-sm rounded-xl shadow-md hover:bg-growth-green-hover hover:-translate-y-0.5 transition-all">
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
                    className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center p-5 md:p-8 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer mx-4 md:mx-6"
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
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-harvest/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
              <Counter target="15" suffix="+" label="Years of Excellence" />
              <Counter target="500" suffix="+" label="Authorized Dealers" />
              <Counter target="50" suffix="+" label="Product Lines" />
              <Counter target="7" label="Provinces Served" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-growth-green relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-white/20 blur-[120px] rounded-[100%]" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <Reveal>
            <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-6 leading-tight">Partner with the Agritech Leaders</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Join a nationwide network of 500+ successful dealers delivering premium agricultural inputs to Nepali farmers.</p>
            <Link to="/contact" className="px-10 py-5 bg-harvest text-charcoal font-bold text-lg rounded-2xl shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)] hover:-translate-y-1 transition-all">
              Apply for Dealership
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
