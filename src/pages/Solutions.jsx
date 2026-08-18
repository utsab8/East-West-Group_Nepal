import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'

const tomatoSteps = [
  { phase: 'Week 1–3: Nursery Stage', desc: 'Sow EW Srijana Hybrid seeds in raised nursery beds. Apply Carbendazim seed treatment. Maintain moisture.' },
  { phase: 'Week 4–5: Transplanting', desc: 'Transplant 25-day-old seedlings at 60×45cm spacing. Basal dose NPK 19:19:19 at 5g/L drench.' },
  { phase: 'Week 6–10: Vegetative Growth', desc: 'Monitor for early blight — apply Mancozeb preventive spray. Foliar Zinc EDTA for micronutrient support.' },
  { phase: 'Week 10–14: Flowering & Fruit Set', desc: 'Apply Gibberellic Acid to improve fruit set. Imidacloprid spray if whitefly pressure detected.' },
  { phase: 'Week 14–20: Harvest', desc: 'Begin harvesting at breaker stage. Expected yield: 40–60 tonnes/hectare with proper management.', milestone: true },
]

const riceSteps = [
  { phase: 'Week 1–3: Nursery Preparation', desc: 'Prepare wet-bed nursery. Sow pre-soaked EW paddy seed at 40–50kg/hectare. Apply Carbendazim drench.' },
  { phase: 'Week 4: Transplanting', desc: 'Transplant 21-day-old seedlings at 20×15cm spacing. Apply basal fertilizer NPK 19:19:19.' },
  { phase: 'Week 5–10: Tillering & Growth', desc: 'Top-dress with urea. Monitor for stem borer — apply Chlorpyriphos if threshold exceeded.' },
  { phase: 'Week 12–16: Booting & Heading', desc: 'Mancozeb preventive spray for sheath blight. Humic acid drench for grain filling support.' },
  { phase: 'Week 18–22: Harvest', desc: 'Harvest at 20–22% grain moisture. Expected yield: 5–7 tonnes/hectare with full program adherence.', milestone: true },
]

const clinics = [
  { icon: 'fa-microscope', title: 'Soil Testing Camps', desc: 'Free soil pH, nutrient, and organic matter analysis conducted at dealer points. Customized fertilizer recommendations based on results.', color: 'growth-green' },
  { icon: 'fa-leaf', title: 'Leaf Pathology Diagnostics', desc: 'Farmers bring infected leaf samples for on-spot diagnosis. Our agronomists identify the pathogen and recommend targeted treatment.', color: 'harvest' },
  { icon: 'fa-phone', title: 'Agronomy Helpline', desc: 'Dedicated phone support for crop management queries. Farmers can call or send photos for remote pest and disease identification.', color: 'deep-green' },
]

const modules = [
  { icon: 'fa-book', title: 'Product Knowledge', desc: 'Comprehensive training on seed varieties, chemical formulations, application methods, and product differentiation.', accent: 'border-growth-green', badge: 'bg-growth-green/10 text-growth-green' },
  { icon: 'fa-people-arrows', title: 'Farmer Advisory Skills', desc: 'How to diagnose field problems, recommend integrated solutions, and build long-term farmer trust and loyalty.', accent: 'border-harvest', badge: 'bg-harvest/10 text-harvest-hover' },
  { icon: 'fa-warehouse', title: 'Inventory & Trials', desc: 'Best practices for stock rotation, cold storage of seeds, conducting local demonstration trials, and managing new product introductions.', accent: 'border-deep-green', badge: 'bg-deep-green/10 text-deep-green' },
]

function TimelineCard({ icon, iconBg, title, badge, badgeColor, steps }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center text-white text-xl`}>
          <i className={`fa-solid ${icon}`} />
        </div>
        <div>
          <h4 className="font-display font-bold text-lg text-deep-green">{title}</h4>
          <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mt-1 inline-block ${badgeColor}`}>{badge}</span>
        </div>
      </div>
      <div className="relative pl-10">
        <div className="absolute left-[15px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-growth-green to-harvest rounded" />
        {steps.map((s, i) => (
          <div key={i} className="relative pb-6">
            <div className={`absolute left-[-25px] top-1 w-[18px] h-[18px] rounded-full border-[3px] border-white ${s.milestone ? 'bg-harvest shadow-md shadow-harvest/20' : 'bg-growth-green shadow-md shadow-growth-green/20'}`} />
            <h5 className={`text-sm font-bold mb-1 ${s.milestone ? 'text-harvest-hover' : 'text-growth-green'}`}>
              {s.milestone && <i className="fa-solid fa-trophy mr-1" />}{s.phase}
            </h5>
            <p className="text-xs text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Solutions() {
  return (
    <>
      <SEO title="Solutions & Advisory" description="Comprehensive agronomic support from seed selection through harvest with our specialized crop calendars and farmer clinics." url="/solutions" />
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { label: 'Solutions' }]}
        title="Solutions & Farmer Advisory"
        subtitle="Comprehensive agronomic support from seed selection through harvest."
      />

      {/* Crop Calendars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Crop Programs" title="Seasonal Crop Calendars" subtitle="Step-by-step growing protocols with East West recommended products at every stage." /></Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <Reveal>
              <TimelineCard icon="fa-pepper-hot" iconBg="bg-red-500" title="Tomato Growth Protocol" badge="Season: Feb–Sep" badgeColor="bg-growth-green/10 text-growth-green" steps={tomatoSteps} />
            </Reveal>
            <Reveal delay={0.15}>
              <TimelineCard icon="fa-wheat-awn" iconBg="bg-harvest" title="Rice Yield Program" badge="Season: Jun–Nov" badgeColor="bg-harvest/10 text-harvest-hover" steps={riceSteps} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Farmer Clinics */}
      <section className="py-24 bg-meadow">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="On-Ground Support" title="Farmer Clinics & Technical Services" subtitle="Free diagnostic services and expert guidance at authorized dealer points." /></Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {clinics.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl bg-${c.color}/10 mx-auto mb-5 flex items-center justify-center`}>
                    <i className={`fa-solid ${c.icon} text-${c.color} text-2xl`} />
                  </div>
                  <h5 className="font-display font-bold text-deep-green mb-2">{c.title}</h5>
                  <p className="text-sm text-gray-500">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer Training */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Dealer Empowerment" title="Dealer Training Programs" subtitle="Building knowledgeable dealers who become trusted advisors." /></Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`bg-white rounded-2xl p-8 shadow-md border-t-4 ${m.accent} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${m.badge} mb-3 inline-block`}>Module {i + 1}</span>
                  <h5 className="font-display font-bold text-deep-green mb-3">{m.title}</h5>
                  <p className="text-sm text-gray-500">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
