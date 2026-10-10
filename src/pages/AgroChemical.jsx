import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'
import chemicalLogo from '../chemical.jpeg'

const chemicalTestimonials = [
  {
    id: 1,
    headline: '"Their bio-pesticides saved my entire crop from the fall armyworm infestation."',
    quote: 'When the fall armyworm hit my maize field, I thought everything was lost. The East West Agro Chemical team visited my farm and recommended their specific bio-pesticide protocol. Within a week, the infestation was controlled, and my crop fully recovered.',
    farmer: 'Sita Gurung',
    location: 'Maize Farmer, Chitwan',
    img: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=800&auto=format&fit=crop'
  }
];

function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-deep-green text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--color-blue-500)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-wider text-harvest mb-3 block">Farmer Success Story</span>
            
            <div className="min-h-[200px]">
              <h2 className="font-display text-4xl font-bold mb-8 leading-snug animate-fade-in-up" key={`h-${t.id}`}>
                {t.headline}
              </h2>
              <div className="flex gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }} key={`q-${t.id}`}>
                <i className="fa-solid fa-quote-left text-4xl text-blue-500/40" />
                <p className="text-white/80 leading-relaxed text-lg italic">
                  {t.quote}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: '200ms' }} key={`f-${t.id}`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-harvest/20 flex items-center justify-center border border-harvest/30">
                  <i className="fa-solid fa-user text-harvest" />
                </div>
                <div>
                  <h6 className="font-bold">{t.farmer}</h6>
                  <p className="text-xs text-white/60">{t.location}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${current === idx ? 'bg-blue-500' : 'bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-lg overflow-hidden border-[6px] border-white/10 shadow-2xl relative h-[400px]">
              {testimonials.map((imgT, idx) => (
                <img 
                  key={imgT.id}
                  src={imgT.img || '/images/farmer-success.jpg'} 
                  alt={imgT.farmer} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`} 
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

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
                <div className={`bg-white rounded-lg p-8 shadow-md border-t-4 ${accents[i]} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
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
          
          <div className="grid lg:grid-cols-5 gap-8 bg-white/5 rounded-lg p-2 md:p-4 border border-white/10 ">
            <div className="lg:col-span-2 flex flex-col gap-2 p-4">
              <h4 className="font-bold text-lg mb-2 pl-2">Select a Field Problem:</h4>
              {Object.keys(problemFinder).map((problem, i) => (
                <Reveal key={problem} delay={i * 0.05}>
                  <button 
                    onClick={() => setSelectedProblem(problem)}
                    className={`w-full text-left px-5 py-4 rounded-md transition-all duration-300 flex items-center justify-between ${selectedProblem === problem ? 'bg-growth-green text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-white/80'}`}
                  >
                    <span className="font-medium text-sm">{problem}</span>
                    <i className={`fa-solid ${selectedProblem === problem ? 'fa-circle-check' : 'fa-circle-chevron-right'} text-sm`} />
                  </button>
                </Reveal>
              ))}
            </div>
            <div className="lg:col-span-3 bg-white text-charcoal rounded-lg p-8 md:p-12 shadow-2xl flex flex-col justify-center animate-fade-in-up" key={selectedProblem}>
              <div className="w-16 h-16 rounded-lg bg-harvest/20 flex items-center justify-center mb-6">
                <i className={`fa-solid ${problemFinder[selectedProblem].icon} text-3xl text-harvest-hover`} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Recommended Solution</span>
              <h3 className="font-display font-bold text-2xl text-deep-green mb-4">{problemFinder[selectedProblem].recommended}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{problemFinder[selectedProblem].desc}</p>
              
              <div className="bg-meadow/50 border border-growth-green/20 rounded-md p-4 flex items-start gap-4">
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

      <TestimonialSlider testimonials={chemicalTestimonials} />

      {/* Safety Module & Farmer Training */}
      <section className="py-24 bg-meadow">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Responsible Agriculture" title="Safety & Safe Use Standards" subtitle="Our commitment to responsible, sustainable chemical use in agriculture." /></Reveal>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 max-w-6xl mx-auto">
            <Reveal>
              <div className="rounded-lg overflow-hidden border-[6px] border-white shadow-xl relative group">
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
                  <div key={i} className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
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


    </>
  )
}
