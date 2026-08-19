import { Link } from 'react-router-dom'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'
import seedLogo from '../seed.jpeg'

const categories = [
  { icon: 'fa-pepper-hot', title: 'Hybrid Vegetable Seeds', items: ['Cabbage — Green Emperor, Snow Ball', 'Cauliflower — Snow White, Early Queen', 'Tomato — Srijana, Manisha', 'Chillies — Terai Fire, Green King', 'Gourds — Bottle Gourd, Bitter Gourd'], color: 'growth-green' },
  { icon: 'fa-wheat-awn', title: 'Cereal & Field Crop Seeds', items: ['Maize — EW Gold, EW Super', 'Paddy — Kanchhi Mansuli, Hardinath', 'Wheat — Gautam, Banganga'], color: 'deep-green' },
  { icon: 'fa-sun', title: 'Open-Pollinated Varieties', items: ['High-yield traditional varieties', 'Adapted for local soil conditions', 'Cost-effective for small farmers', 'Resowable seed options'], color: 'harvest' },
]

const steps = [
  { num: '1', icon: 'fa-dna', title: 'Genetic Purity', desc: 'Each seed lot is verified for genetic identity and trueness-to-type against parent lines.' },
  { num: '2', icon: 'fa-seedling', title: 'Germination Testing', desc: 'Minimum 85%+ germination rate certified through laboratory grow-out tests under controlled conditions.' },
  { num: '3', icon: 'fa-droplet', title: 'Seed Treatment', desc: 'Protective fungicidal and insecticidal seed coatings applied for early-stage disease and pest protection.' },
  { num: '4', icon: 'fa-box', title: 'Sealed Packaging', desc: 'Moisture-proof, tamper-evident packaging with batch number, test date, and expiry clearly printed.' },
]

const zones = [
  { icon: 'fa-mountain', title: 'Hill Region (1000-3000m)', desc: 'Tomato transplanting: March-April. Cauliflower nursery: June-July. Wheat sowing: October-November.' },
  { icon: 'fa-hill-rockslide', title: 'Mid-Hills (500-1000m)', desc: 'Paddy transplanting: June-July. Maize sowing: February-March. Vegetable rotation year-round.' },
  { icon: 'fa-temperature-high', title: 'Terai Plains (<500m)', desc: 'Early paddy: May-June. Spring maize: January-February. Winter vegetables: September-November.' },
]

export default function AgroSeed() {
  return (
    <>
      <SEO title="Agro Seed" description="High-yield, quality-tested seed varieties bred for Nepal's diverse agro-climatic conditions." url="/companies/agro-seed" />
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { href: '#/companies', label: 'Companies' }, { label: 'Agro Seed' }]}
        title="East West Agro Seed"
        subtitle="High-yield, quality-tested seed varieties bred for Nepal's diverse agro-climatic conditions."
        logo={seedLogo}
      />

      {/* R&D Lab Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-growth-green/10 rounded-full blur-xl" />
                <img src="/images/seed-lab.jpg" alt="Seed germination testing in laboratory" className="rounded-2xl shadow-2xl relative z-10 border-4 border-white" />
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl z-20 max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fa-solid fa-microscope text-growth-green text-2xl" />
                    <span className="font-display font-black text-2xl text-deep-green">ISO</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">Certified Seed Testing Laboratories</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <span className="text-xs font-bold uppercase tracking-wider text-growth-green mb-3 block">Research & Development</span>
              <h2 className="font-display text-4xl font-bold text-deep-green mb-6">Science-Backed Seed Genetics</h2>
              <p className="text-gray-500 leading-relaxed mb-6">Before a single seed reaches a farmer's field, it undergoes rigorous evaluation in our state-of-the-art testing facilities. Our R&D division focuses on breeding varieties that offer disease resistance, climate adaptability, and superior yield for Nepali farmers.</p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: 'fa-temperature-half', text: 'Climate-controlled germination chambers' },
                  { icon: 'fa-vial-virus', text: 'Pathology screening for seed-borne diseases' },
                  { icon: 'fa-leaf', text: 'Multi-location field trials across 7 provinces' }
                ].map(item => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-growth-green/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <i className={`fa-solid ${item.icon} text-growth-green text-[10px]`} />
                    </div>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-meadow">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Seed Portfolio" title="Our Seed Categories" subtitle="From hybrid vegetables to cereal crops — seeds engineered for superior performance." /></Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`bg-white rounded-2xl p-8 shadow-md border-t-4 border-${c.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <i className={`fa-solid ${c.icon} text-${c.color} text-3xl mb-4 block`} />
                  <h4 className="font-display font-bold text-lg text-deep-green mb-4">{c.title}</h4>
                  <ul className="space-y-2">
                    {c.items.map(item => (
                      <li key={item} className="flex gap-2 text-sm text-gray-500"><i className={`fa-solid fa-circle text-${c.color} text-[5px] mt-2 flex-shrink-0`} />{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Quality Assurance" title="Seed Quality Guarantee" subtitle="Every seed passes through a rigorous multi-stage quality process." /></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-growth-green text-white flex items-center justify-center font-display font-bold text-lg mx-auto mb-3">{s.num}</div>
                  <i className={`fa-solid ${s.icon} text-deep-green text-2xl mb-2 block`} />
                  <h5 className="font-display font-bold text-deep-green mb-2">{s.title}</h5>
                  <p className="text-xs text-gray-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Success Story */}
      <section className="py-24 bg-deep-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--color-growth-green)_0%,_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-harvest mb-3 block">Farmer Success Story</span>
              <h2 className="font-display text-4xl font-bold mb-8 leading-snug">"The EW Srijana hybrid completely transformed my tomato harvest."</h2>
              <div className="flex gap-4 mb-8">
                <i className="fa-solid fa-quote-left text-4xl text-growth-green/40" />
                <p className="text-white/80 leading-relaxed text-lg italic">
                  I used to struggle with early blight wiping out half my crop during the monsoon. Since switching to East West's Srijana hybrid seeds, my plants are healthier, the fruits are uniform, and my overall yield has increased by 40%. The agronomist support from my local dealer made all the difference.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-harvest/20 flex items-center justify-center border border-harvest/30">
                  <i className="fa-solid fa-user text-harvest" />
                </div>
                <div>
                  <h6 className="font-bold">Ram Bahadur Thapa</h6>
                  <p className="text-xs text-white/60">Commercial Vegetable Farmer, Kavre District</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden border-[6px] border-white/10 shadow-2xl">
                <img src="/images/farmer-success.jpg" alt="Happy farmer with a basket of fresh tomatoes" className="w-full h-auto" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Field Deployment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="In the Field" title="Localized Planting Calendars" subtitle="Tailored agronomic guidance for Nepal's distinct ecological zones." /></Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <Reveal>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/field-demo.jpg" alt="Agricultural field demonstration day with farmers" className="w-full h-auto" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <h3 className="font-display font-bold text-2xl text-deep-green mb-4">Right Seed, Right Time</h3>
              <p className="text-gray-500 leading-relaxed mb-6">Our agronomists develop district-specific planting calendars tailored to altitude, rainfall patterns, and soil types across Nepal's three ecological zones.</p>
              <div className="space-y-3">
                {zones.map((z, i) => (
                  <div key={i} className="bg-harvest/[0.06] border-l-[3px] border-harvest rounded-r-lg px-4 py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <i className={`fa-solid ${z.icon} text-deep-green`} />
                      <strong className="text-sm text-deep-green">{z.title}</strong>
                    </div>
                    <p className="text-xs text-gray-600">{z.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-meadow text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-deep-green mb-4">Explore Our Seed Catalogue</h2>
            <p className="text-lg text-gray-500 mb-8">Browse our complete range of hybrid and open-pollinated seed varieties.</p>
            <Link to="/products" className="px-8 py-3.5 bg-harvest text-charcoal font-semibold rounded-xl shadow-lg shadow-harvest/30 hover:bg-harvest-hover hover:-translate-y-0.5 transition-all">
              <i className="fa-solid fa-boxes-stacked mr-2" />View All Products
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
