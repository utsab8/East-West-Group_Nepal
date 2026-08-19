import { Link } from 'react-router-dom'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'
import seedLogo from '../seed.jpeg'
import chemicalLogo from '../chemical.jpeg'

const synergy = [
  { icon: 'fa-microscope', title: 'Centralized Quality Control', desc: 'Unified testing labs ensure every seed meets germination standards and every chemical formulation matches label claims.', color: 'growth-green' },
  { icon: 'fa-truck-fast', title: 'Shared Logistics Network', desc: 'Regional warehouses across all 7 provinces enable rapid delivery of both seed and chemical products to dealer points.', color: 'harvest' },
  { icon: 'fa-people-group', title: 'Localized Field Advisory', desc: 'Agronomists provide integrated crop solutions combining the right seed variety with optimal crop protection protocols.', color: 'deep-green' },
]

export default function Companies() {
  return (
    <>
      <SEO title="Our Companies" description="Two specialized business units united by a shared commitment to agricultural excellence." url="/companies" />
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { label: 'Our Companies' }]}
        title="Our Companies"
        subtitle="Two specialized business units united by a shared commitment to agricultural excellence."
      />

      {/* Synergy */}
      <section className="py-24 bg-meadow">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Corporate Synergy" title="Stronger Together" subtitle="How centralized quality control, shared logistics, and localized field advisory power both independent business units." /></Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {synergy.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-[2rem] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-gray-50">
                  <div className={`w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center bg-${s.color}/10`}>
                    <i className={`fa-solid ${s.icon} text-2xl text-${s.color}`} />
                  </div>
                  <h5 className="font-display font-bold text-deep-green mb-2">{s.title}</h5>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Portals */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Our Divisions" title="Two Specialized Companies" /></Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <Reveal>
              <div className="relative rounded-[2.5rem] p-10 bg-gradient-to-br from-meadow to-white border border-growth-green/15 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-growth-green/5" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
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
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
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
    </>
  )
}
