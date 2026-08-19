import { useState } from 'react'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'

const products = [
  { id: 'p1', name: 'EW Hybrid Tomato – Srijana', category: 'Seed', img: '/images/products/tomato.jpg', sub: 'F1 Hybrid, Indeterminate', badgeColor: 'bg-growth-green/10 text-growth-green', desc: 'High-yield F1 hybrid tomato variety bred for disease tolerance and extended shelf life.', ingredients: 'F1 Hybrid, Indeterminate', targetCrops: 'Tomato', dosage: '200–250g/ropani', phi: 'N/A (Seed)', safety: 'Store in cool, dry place. Use treated seed with gloves.' },
  { id: 'p2', name: 'EW Hybrid Cauliflower – Snow White', category: 'Seed', img: '/images/products/cabbage.jpg', sub: 'F1 Hybrid, Early Maturity', badgeColor: 'bg-growth-green/10 text-growth-green', desc: 'Premium cauliflower hybrid producing dense, white curds with excellent uniformity.', ingredients: 'F1 Hybrid, Early Maturity', targetCrops: 'Cauliflower', dosage: '100–150g/ropani', phi: 'N/A (Seed)', safety: 'Protect from moisture. Sow within season window.' },
  { id: 'p3', name: 'EW Hybrid Cabbage – Green Emperor', category: 'Seed', img: '/images/products/cabbage.jpg', sub: 'F1 Hybrid, Mid-Season', badgeColor: 'bg-growth-green/10 text-growth-green', desc: 'Round-head cabbage hybrid with compact growth habit and black rot resistance.', ingredients: 'F1 Hybrid, Mid-Season', targetCrops: 'Cabbage', dosage: '80–120g/ropani', phi: 'N/A (Seed)', safety: 'Keep sealed until sowing. Avoid waterlogged nurseries.' },
  { id: 'p4', name: 'EW Hybrid Chilli – Terai Fire', category: 'Seed', img: '/images/products/chilli.jpg', sub: 'F1 Hybrid, High Pungency', badgeColor: 'bg-growth-green/10 text-growth-green', desc: 'Hot chilli hybrid with deep red color and excellent drying quality.', ingredients: 'F1 Hybrid, High Pungency', targetCrops: 'Chilli', dosage: '60–80g/ropani', phi: 'N/A (Seed)', safety: 'Handle treated seeds with care.' },
  { id: 'p5', name: 'Mancozeb 75% WP – EW Shield', category: 'Fungicide', img: '/images/products/chemical.jpg', sub: 'Mancozeb 75% WP', badgeColor: 'bg-deep-green/10 text-deep-green', desc: 'Broad-spectrum protective fungicide effective against blight and downy mildew.', ingredients: 'Mancozeb 75% WP', targetCrops: 'Tomato, Potato, Rice, Maize', dosage: '2.5g/L water', phi: '14 days', safety: 'Wear protective clothing. Do not spray near water sources.' },
  { id: 'p6', name: 'Carbendazim 50% WP – EW Carben', category: 'Fungicide', img: '/images/products/chemical.jpg', sub: 'Carbendazim 50% WP', badgeColor: 'bg-deep-green/10 text-deep-green', desc: 'Systemic fungicide for powdery mildew and sheath blight control.', ingredients: 'Carbendazim 50% WP', targetCrops: 'Rice, Wheat, Vegetables', dosage: '1g/L water', phi: '21 days', safety: 'Toxic if ingested. Use PPE. Triple-rinse containers.' },
  { id: 'p7', name: 'Chlorpyriphos 20% EC – EW Strike', category: 'Insecticide', img: '/images/products/chemical.jpg', sub: 'Chlorpyriphos 20% EC', badgeColor: 'bg-deep-green/10 text-deep-green', desc: 'Contact and stomach poison for termites, cutworms, and soil pests.', ingredients: 'Chlorpyriphos 20% EC', targetCrops: 'Rice, Maize, Sugarcane', dosage: '2ml/L water', phi: '21 days', safety: 'Highly toxic to aquatic organisms. Apply with recommended PPE.' },
  { id: 'p8', name: 'Imidacloprid 17.8% SL – EW Guard', category: 'Insecticide', img: '/images/products/chemical.jpg', sub: 'Imidacloprid 17.8% SL', badgeColor: 'bg-deep-green/10 text-deep-green', desc: 'Systemic neonicotinoid for sucking pests including aphids and whiteflies.', ingredients: 'Imidacloprid 17.8% SL', targetCrops: 'Cotton, Rice, Vegetables', dosage: '0.5ml/L water', phi: '14 days', safety: 'Harmful to honeybees. Do not spray during flowering.' },
  { id: 'p9', name: 'NPK 19:19:19 – EW GrowMax', category: 'Fertilizer', img: '/images/products/chemical.jpg', sub: 'N 19%, P₂O₅ 19%, K₂O 19%', badgeColor: 'bg-harvest/10 text-harvest-hover', desc: 'Water-soluble complex fertilizer for balanced vegetative and reproductive growth.', ingredients: 'N 19%, P₂O₅ 19%, K₂O 19%', targetCrops: 'All Crops', dosage: '5g/L foliar spray', phi: 'N/A', safety: 'Store in dry conditions.' },
  { id: 'p10', name: 'Zinc EDTA 12% – EW ZincPlus', category: 'Fertilizer', img: '/images/products/chemical.jpg', sub: 'Zn EDTA 12%', badgeColor: 'bg-harvest/10 text-harvest-hover', desc: 'Chelated zinc micronutrient for correcting zinc deficiency.', ingredients: 'Zn EDTA 12%', targetCrops: 'Rice, Maize, Citrus, Vegetables', dosage: '2g/L foliar spray', phi: 'N/A', safety: 'Non-toxic. Avoid eye contact.' },
  { id: 'p11', name: 'Humic Acid 98% – EW HumaGold', category: 'Growth Promoter', img: '/images/products/chemical.jpg', sub: 'Potassium Humate', badgeColor: 'bg-harvest/10 text-harvest-hover', desc: 'Natural organic soil conditioner improving nutrient uptake and root development.', ingredients: 'Humic Acid 98% (Potassium Humate)', targetCrops: 'All Crops', dosage: '2ml/L soil drench or foliar', phi: 'N/A', safety: 'Organic product. Safe for environment.' },
  { id: 'p12', name: 'Gibberellic Acid – EW Vigour', category: 'Growth Promoter', img: '/images/products/chemical.jpg', sub: 'GA 0.001% L', badgeColor: 'bg-harvest/10 text-harvest-hover', desc: 'Plant growth regulator for cell elongation, fruit set, and breaking dormancy.', ingredients: 'Gibberellic Acid 0.001% L', targetCrops: 'Grapes, Vegetables, Paddy', dosage: '2ml/L water', phi: '7 days', safety: 'Use recommended dosage only.' },
]

const filters = [
  { key: 'all', label: 'All Products', count: 12 },
  { key: 'Seed', label: 'Seed Varieties', count: 4 },
  { key: 'Fungicide', label: 'Fungicides', count: 2 },
  { key: 'Insecticide', label: 'Insecticides', count: 2 },
  { key: 'Fertilizer', label: 'Fertilizers & Nutrients', count: 2 },
  { key: 'Growth Promoter', label: 'Growth Promoters', count: 2 },
]

export default function Products() {
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
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-growth-green/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Filter Bar */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {filters.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 border backdrop-blur-sm ${
                    active === f.key
                      ? 'bg-growth-green text-white border-growth-green shadow-[0_8px_20px_rgba(16,185,129,0.3)] scale-105'
                      : 'bg-white/80 text-gray-600 border-gray-100 hover:border-growth-green/50 hover:text-growth-green hover:shadow-sm'
                  }`}
                >
                  {f.label}
                  <span className={`ml-2 inline-flex items-center justify-center min-w-[22px] h-[22px] px-1 rounded-full text-[10px] font-black ${
                    active === f.key ? 'bg-white text-growth-green' : 'bg-gray-100 text-gray-500'
                  }`}>{f.count}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <div 
                  className="bg-white rounded-[2rem] border border-gray-50 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer" 
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
                    <button className="w-full py-2.5 bg-gray-50 text-gray-500 group-hover:bg-harvest group-hover:text-charcoal text-xs font-bold uppercase tracking-wider rounded-xl transition-colors duration-300">
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
        <div className="fixed inset-0 bg-charcoal/40 backdrop-blur-md z-[1000] flex items-center justify-center p-6 transition-all duration-500" onClick={() => setModal(null)}>
          <div className="bg-white rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative shadow-[0_20px_60px_rgb(0,0,0,0.2)] animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur text-charcoal border border-gray-200 z-50 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
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
                  <div key={d.label} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{d.label}</p>
                    <p className="font-semibold text-charcoal text-sm">{d.val}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-meadow/50 border border-growth-green/20 rounded-2xl p-5 mb-8">
                <h5 className="font-bold text-sm text-deep-green mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-triangle-exclamation text-harvest-hover" /> Safety Precautions
                </h5>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">{modal.safety}</p>
              </div>
              
              <button className="w-full py-4 bg-deep-green text-white font-bold rounded-2xl shadow-lg shadow-deep-green/30 hover:bg-[#166534] transition-all hover:-translate-y-1">
                <i className="fa-solid fa-download mr-2" /> Download Product Datasheet (PDF)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
