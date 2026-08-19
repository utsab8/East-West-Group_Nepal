import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'
import chemicalLogo from '../chemical.jpeg'

const solutions = [
  { title: 'Crop Protection', badge: 'badge-deep', tag: 'Crop Protection', tagIcon: 'fa-shield-halved', items: [
    { label: 'Insecticides', desc: 'Selective and broad-spectrum formulations targeting aphids, stem borers, jassids, and whiteflies.' },
    { label: 'Fungicides', desc: 'Protective and systemic agents against blight, downy mildew, powdery mildew, and anthracnose.' },
    { label: 'Herbicides', desc: 'Pre-emergence and post-emergence weed management for cereal and vegetable fields.' },
  ] },
  { title: 'Plant Nutrition', tag: 'Plant Nutrition', tagIcon: 'fa-leaf', items: [
    { label: 'Water-Soluble NPK', desc: 'Balanced 19:19:19 and crop-specific ratios for foliar and fertigation.' },
    { label: 'Chelated Micronutrients', desc: 'Zinc EDTA, Boron, and multi-micro formulations correcting hidden hunger.' },
    { label: 'Soil Health Boosters', desc: 'Humic acid, seaweed extracts, and organic matter enhancers.' },
  ] },
  { title: 'Growth Regulators', tag: 'PGRs', tagIcon: 'fa-chart-line', items: [
    { label: 'Root Vigor', desc: 'Formulations promoting robust root systems for improved nutrient uptake.' },
    { label: 'Flower Drop Prevention', desc: 'Hormonal regulators reducing flower abortion and improving fruit set.' },
    { label: 'Fruit Set & Sizing', desc: 'Gibberellic acid and cytokinin-based products for uniform fruit development.' },
  ] },
]

const safety = [
  { icon: 'fa-prescription', title: 'Dosage Accuracy', desc: 'Every product label provides precise dosage recommendations per hectare/ropani. Overdosing harms crops and the environment.', color: 'growth-green' },
  { icon: 'fa-clock', title: 'Pre-Harvest Intervals', desc: 'Strict adherence to waiting periods between last spray and harvest ensures consumer food safety and regulatory compliance.', color: 'harvest' },
  { icon: 'fa-recycle', title: 'Safe Disposal', desc: 'Triple-rinse empty containers before disposal. Never reuse chemical containers for food or water storage.', color: 'deep-green' },
  { icon: 'fa-bug', title: 'Integrated Pest Management', desc: 'We promote IPM practices: cultural controls, biological agents, and chemical intervention only as a targeted last resort.', color: 'growth-green' },
]

const problemFinder = {
  'Fungal Disease (Blight/Mildew)': { icon: 'fa-viruses', recommended: 'Mancozeb 75% WP – EW Shield', desc: 'A broad-spectrum protective fungicide that creates a barrier on the leaf surface preventing spore germination.' },
  'Sucking Pests (Aphids/Whiteflies)': { icon: 'fa-bug', recommended: 'Imidacloprid 17.8% SL – EW Guard', desc: 'A highly effective systemic insecticide that travels through the plant vascular system to target sap-sucking insects.' },
  'Soil/Root Pests (Termites)': { icon: 'fa-worm', recommended: 'Chlorpyriphos 20% EC – EW Strike', desc: 'A contact and stomach poison applied as a soil drench to eliminate hidden root-destroying pests.' },
  'Yellowing Leaves (Nutrient Def)': { icon: 'fa-leaf', recommended: 'Zinc EDTA 12% / NPK 19:19:19', desc: 'Foliar application of chelated micronutrients and balanced NPK rapidly corrects deficiencies and restores green foliage.' },
  'Poor Fruit Set': { icon: 'fa-apple-whole', recommended: 'Gibberellic Acid – EW Vigour', desc: 'Plant growth regulator applied during flowering to prevent flower drop and promote uniform fruit sizing.' }
}

const accents = ['border-deep-green', 'border-growth-green', 'border-harvest']
const tagColors = ['bg-deep-green/10 text-deep-green', 'bg-growth-green/10 text-growth-green', 'bg-harvest/10 text-harvest-hover']
const labelColors = ['text-deep-green', 'text-growth-green', 'text-harvest-hover']

export default function AgroChemical() {
  const [selectedProblem, setSelectedProblem] = useState('Fungal Disease (Blight/Mildew)')

  return (
    <>
      <SEO title="Agro Chemical" description="Proven crop protection, balanced nutrition, and growth regulation solutions for Nepali agriculture." url="/companies/agro-chemical" />
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { href: '#/companies', label: 'Companies' }, { label: 'Agro Chemical' }]}
        title="East West Agro Chemical"
        subtitle="Proven crop protection, balanced nutrition, and growth regulation solutions for Nepali agriculture."
        logo={chemicalLogo}
      />

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Product Lines" title="Chemical Solutions Portfolio" subtitle="Three integrated product lines designed to protect, nourish, and optimize crop performance." /></Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`bg-white rounded-2xl p-8 shadow-md border-t-4 ${accents[i]} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[i]}`}>{s.tag}</span>
                    <i className={`fa-solid ${s.tagIcon} ${labelColors[i]}`} />
                  </div>
                  <h4 className="font-display font-bold text-lg text-deep-green mb-4">{s.title}</h4>
                  <ul className="space-y-3">
                    {s.items.map(item => (
                      <li key={item.label} className="text-sm text-gray-500">
                        <strong className={`${labelColors[i]} block`}>{item.label}</strong>
                        {item.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Problem Finder */}
      <section className="py-24 bg-deep-green text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-meadow/5 skew-x-[-15deg] origin-bottom" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal><div className="text-center mb-12"><span className="text-xs font-bold uppercase tracking-wider text-harvest mb-2 block">Diagnostic Tool</span><h2 className="font-display text-4xl font-bold">Crop Problem & Solution Finder</h2></div></Reveal>
          
          <div className="grid lg:grid-cols-5 gap-8 bg-white/5 rounded-3xl p-2 md:p-4 border border-white/10 backdrop-blur-md">
            <div className="lg:col-span-2 flex flex-col gap-2 p-4">
              <h4 className="font-bold text-lg mb-2 pl-2">Select a Field Problem:</h4>
              {Object.keys(problemFinder).map((problem, i) => (
                <Reveal key={problem} delay={i * 0.05}>
                  <button 
                    onClick={() => setSelectedProblem(problem)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between ${selectedProblem === problem ? 'bg-growth-green text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-white/80'}`}
                  >
                    <span className="font-medium text-sm">{problem}</span>
                    <i className={`fa-solid ${selectedProblem === problem ? 'fa-circle-check' : 'fa-circle-chevron-right'} text-sm`} />
                  </button>
                </Reveal>
              ))}
            </div>
            <div className="lg:col-span-3 bg-white text-charcoal rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col justify-center animate-fade-in-up" key={selectedProblem}>
              <div className="w-16 h-16 rounded-2xl bg-harvest/20 flex items-center justify-center mb-6">
                <i className={`fa-solid ${problemFinder[selectedProblem].icon} text-3xl text-harvest-hover`} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Recommended Solution</span>
              <h3 className="font-display font-bold text-2xl text-deep-green mb-4">{problemFinder[selectedProblem].recommended}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{problemFinder[selectedProblem].desc}</p>
              
              <div className="bg-meadow/50 border border-growth-green/20 rounded-xl p-4 flex items-start gap-4">
                <i className="fa-solid fa-user-doctor text-growth-green mt-1" />
                <div>
                  <h6 className="font-bold text-sm text-deep-green mb-1">Consult Your Agronomist</h6>
                  <p className="text-xs text-gray-500">Always read the label instructions and consult with our local dealer before applying chemicals. Dosage depends on crop stage and severity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Module & Farmer Training */}
      <section className="py-24 bg-meadow">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Responsible Agriculture" title="Safety & Safe Use Standards" subtitle="Our commitment to responsible, sustainable chemical use in agriculture." /></Reveal>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 max-w-6xl mx-auto">
            <Reveal>
              <div className="rounded-2xl overflow-hidden border-[6px] border-white shadow-xl relative group">
                <img src="/images/sprayer.jpg" alt="Farmer safely applying crop protection using knapsack sprayer with mask and gloves" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-harvest text-charcoal text-xs font-bold uppercase px-3 py-1 rounded-full mb-2 inline-block">Safety First</span>
                  <p className="text-white font-medium text-sm">We mandate proper PPE (Personal Protective Equipment) for all chemical applications.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="font-display font-bold text-3xl text-deep-green mb-6">Promoting Safe Chemical Handling</h3>
              <p className="text-gray-500 leading-relaxed mb-6">East West Agro Chemical doesn't just sell products; we educate farmers on responsible chemical stewardship. From the correct mixing ratios in the knapsack to proper disposal of empty containers, safety is integral to our advisory program.</p>
              <div className="grid grid-cols-2 gap-4">
                {safety.map((s, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <i className={`fa-solid ${s.icon} text-${s.color} text-lg mb-2`} />
                    <h6 className="font-bold text-sm text-deep-green mb-1">{s.title}</h6>
                    <p className="text-[10px] text-gray-500 leading-tight">{s.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Downloads / CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <div className="w-16 h-16 rounded-full bg-deep-green/5 flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-file-pdf text-2xl text-deep-green" />
            </div>
            <h2 className="font-display text-4xl font-bold text-deep-green mb-4">Technical Resources</h2>
            <p className="text-lg text-gray-500 mb-8">Download our complete chemical catalog, safety data sheets, and crop protection manuals.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products" className="px-8 py-3.5 bg-harvest text-charcoal font-semibold rounded-xl shadow-lg shadow-harvest/30 hover:bg-harvest-hover hover:-translate-y-0.5 transition-all">
                <i className="fa-solid fa-boxes-stacked mr-2" />View Product Catalogue
              </Link>
              <button className="px-8 py-3.5 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-deep-green hover:text-deep-green hover:-translate-y-0.5 transition-all">
                <i className="fa-solid fa-download mr-2" />Download PDF Guide
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
