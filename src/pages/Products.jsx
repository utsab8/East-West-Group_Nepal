import { useState } from 'react'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'
import { useProducts } from '../context/ProductContext'

const filters = [
  { key: 'all', label: 'All Products' },
  { key: 'Seed', label: 'Seed Varieties' },
  { key: 'Fungicide', label: 'Fungicides' },
  { key: 'Insecticide', label: 'Insecticides' },
  { key: 'Fertilizer', label: 'Fertilizers & Nutrients' },
  { key: 'Growth Promoter', label: 'Growth Promoters' },
]

export default function Products() {
  const { products } = useProducts()
  const [active, setActive] = useState('all')
  const [modal, setModal] = useState(null)
  const filtered = active === 'all' ? products : products.filter(p => p.category === active)

  return (
    <>
      <SEO title="Product Catalogue" description="Browse our complete range of quality seeds, crop protection chemicals, fertilizers, and growth promoters." url="/products" />
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { label: 'Products' }]}
        title="Product Catalogue"
        subtitle="Browse our complete range of quality seeds, crop protection chemicals, fertilizers, and growth promoters."
      />

      <section className="py-24 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Filter Bar */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {filters.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 border  ${
                    active === f.key
                      ? 'bg-growth-green text-white border-growth-green shadow-sm scale-105'
                      : 'bg-white text-gray-600 border-gray-100 hover:border-growth-green/50 hover:text-growth-green hover:shadow-sm'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <div 
                  className="bg-white rounded-lg border border-gray-50 overflow-hidden shadow-sm hover:shadow-sm hover:-translate-y-2 transition-all duration-500 group cursor-pointer" 
                  onClick={() => setModal(p)}
                >
                  <div className="relative overflow-hidden aspect-square bg-gray-50 border-b border-gray-100">
                    <img 
                      src={p.img} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${p.badgeColor}`}>{p.category}</span>
                    <h5 className="font-display font-bold text-base text-deep-green mt-3 mb-1 leading-snug">{p.name}</h5>
                    <p className="text-xs text-gray-400 font-medium mb-5">{p.sub}</p>
                    <button className="w-full py-2.5 bg-gray-50 text-gray-500 group-hover:bg-harvest group-hover:text-charcoal text-xs font-bold uppercase tracking-wider rounded-md transition-colors duration-300">
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-charcoal/40  z-[1000] flex items-center justify-center p-6 transition-all duration-500" onClick={() => setModal(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative shadow-sm animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white  text-charcoal border border-gray-200 z-50 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
              <i className="fa-solid fa-xmark text-lg" />
            </button>
            
            <div className="md:w-2/5 bg-gray-50 relative border-r border-gray-100">
              <img src={modal.img} alt={modal.name} className="w-full h-64 md:h-full object-cover" />
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
              <span className={`text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full ${modal.badgeColor} mb-4 inline-block`}>{modal.category}</span>
              <h3 className="font-display font-black text-3xl text-deep-green mb-2">{modal.name}</h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed">{modal.desc}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: 'Active Ingredients', val: modal.ingredients },
                  { label: 'Target Crops', val: modal.targetCrops },
                  { label: 'Application Rate', val: modal.dosage },
                  { label: 'Safety Interval (PHI)', val: modal.phi },
                ].map(d => (
                  <div key={d.label} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{d.label}</p>
                    <p className="font-semibold text-charcoal text-sm">{d.val}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-meadow/50 border border-growth-green/20 rounded-lg p-5 mb-8">
                <h5 className="font-bold text-sm text-deep-green mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-triangle-exclamation text-harvest-hover" /> Safety Precautions
                </h5>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">{modal.safety}</p>
              </div>
              
              <button className="w-full py-4 bg-deep-green text-white font-bold rounded-lg shadow-lg shadow-deep-green/30 hover:bg-[#166534] transition-all hover:-translate-y-1">
                <i className="fa-solid fa-download mr-2" /> Download Product Datasheet (PDF)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
