import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Reveal, SectionHeader, useCounter } from '../components/Shared'

function Counter({ target, suffix = '', label }) {
  const count = useCounter(target)
  return (
    <div className="text-center p-6">
      <div className="font-display font-black text-5xl md:text-6xl text-growth-green mb-2 tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  )
}

// Data Visualization Component for Bento Box
function YieldChart() {
  return (
    <div className="mt-6 pt-6 border-t border-gray-100">
      <h6 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Average Yield Increase</h6>
      <div className="flex items-end gap-3 h-24">
        <div className="w-1/3 bg-gray-200 rounded-t-lg h-[40%] relative group cursor-pointer">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal text-white text-[10px] px-2 py-1 rounded">2023</div>
        </div>
        <div className="w-1/3 bg-growth-green/40 rounded-t-lg h-[65%] relative group cursor-pointer">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal text-white text-[10px] px-2 py-1 rounded">2024</div>
        </div>
        <div className="w-1/3 bg-growth-green rounded-t-lg h-[95%] relative group cursor-pointer">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal text-white text-[10px] px-2 py-1 rounded">+40%</div>
        </div>
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-bold">
        <span>Traditional</span>
        <span>Standard Seed</span>
        <span className="text-growth-green">EW Hybrid</span>
      </div>
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

      {/* ── Bento Grid: Our Companies ── */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Ecosystem" title="The East West Synergy" subtitle="Two specialized divisions seamlessly integrated into one powerful agricultural platform." /></Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-5xl mx-auto auto-rows-fr">
            
            {/* Bento Box 1: Agro Seed (Large) */}
            <div className="md:col-span-2 md:row-span-2 relative bg-white rounded-3xl p-10 overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-growth-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-growth-green/10 text-growth-green rounded-2xl flex items-center justify-center text-2xl mb-6"><i className="fa-solid fa-seedling" /></div>
                  <h3 className="font-display font-bold text-3xl text-deep-green mb-4">East West Agro Seed</h3>
                  <p className="text-gray-500 leading-relaxed max-w-sm mb-6">Developing climate-resilient, high-yield genetics through intensive R&D and multi-location field trials.</p>
                </div>
                <div className="w-full">
                  <YieldChart />
                  <Link to="/companies/agro-seed" className="mt-8 inline-flex items-center text-sm font-bold text-growth-green group-hover:underline">Explore Seed Division <i className="fa-solid fa-arrow-right ml-2 text-xs" /></Link>
                </div>
              </div>
            </div>

            {/* Bento Box 2: Agro Chemical (Top Right) */}
            <div className="md:col-span-1 md:row-span-1 bg-deep-green text-white rounded-3xl p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-growth-green)_0%,_transparent_60%)] opacity-30" />
              <div className="relative z-10">
                <i className="fa-solid fa-flask text-3xl text-harvest mb-4 block" />
                <h4 className="font-display font-bold text-xl mb-2">Agro Chemical</h4>
                <p className="text-white/70 text-xs leading-relaxed mb-4">Precision crop protection and nutrition formulations.</p>
                <Link to="/companies/agro-chemical" className="text-xs font-bold text-harvest hover:text-white transition-colors">View Portfolio &rarr;</Link>
              </div>
            </div>

            {/* Bento Box 3: Quality Control (Bottom Right) */}
            <div className="md:col-span-1 md:row-span-1 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <i className="fa-solid fa-microscope text-3xl text-deep-green/30 mb-4 block" />
              <h4 className="font-display font-bold text-xl text-deep-green mb-2">ISO Certified Labs</h4>
              <p className="text-gray-500 text-xs leading-relaxed">State-of-the-art facilities ensuring 99.9% genetic purity.</p>
              
              {/* Mini Pipeline UI */}
              <div className="flex items-center gap-1 mt-4">
                <div className="h-2 flex-1 bg-growth-green rounded-full relative"><div className="absolute w-2 h-2 rounded-full bg-white border-2 border-growth-green right-0 top-0 scale-[1.5]" /></div>
                <div className="h-2 flex-1 bg-growth-green/30 rounded-full" />
                <div className="h-2 flex-1 bg-gray-100 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Industrial Partners ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted by Global Industrial Partners</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partners.map((partner, i) => (
                <div 
                  key={i} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center p-5 md:p-8 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer"
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
      <section className="py-24 bg-deep-green relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-growth-green/40 blur-[120px] rounded-[100%]" />
        
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
